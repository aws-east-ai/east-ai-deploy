import os
import json
import boto3
from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from utils.aws import translate
from utils.common import get_int, get_str, claude2_chat_prompt
import random
from googleapiclient.discovery import build
import requests
from bs4 import BeautifulSoup
from utils.kb import claude3_summuary_kb, claude2_summuary_kb
import av
import base64


class Bedrock:
    def __init__(self):
        self.bedrock = boto3.client("bedrock-runtime")
        self.bedrock_agent = boto3.client("bedrock-agent-runtime")
        self.knowledge_base_id = os.environ.get("KNOWLEDGE_BASE_ID")

        # assert self.knowledge_base_id, "Please set env KNOWLEDGE_BASE_ID"

        self.google_api_key = os.environ.get("GOOGLE_API_KEY")
        self.google_cse_cx = os.environ.get("GOOGLE_CSE_CX")

        self.router = APIRouter()
        self.router.add_api_route(
            "/api/bedrock-product-design", self.bedrock_product_design, methods=["POST"]
        )
        self.router.add_api_route(
            "/api/bedrock-rag", self.kb_rag_handler, methods=["POST"]
        )

    def bedrock_product_design(self, item: dict):
        # print(item)
        if "model_id" in item and item["model_id"] == "bedrock_titan":
            return self.titan_image(item)
        else:
            return self.sdxl(item)

    def titan_image(self, item: dict):
        height = get_int(item, "height", 768)
        width = get_int(item, "width", 768)

        count = get_int(item, "count", 1)
        prompt = translate(get_str(item, "prompt", None))
        negative_prompt = get_str(item, "negative_prompt", None)

        if negative_prompt:
            negative_prompt = translate(negative_prompt)
        seed = random.getrandbits(31)
        seed = seed - 2 if seed > 100 else seed
        # print(seed)
        request = json.dumps(
            {
                "textToImageParams": {"text": prompt, "negativeText": negative_prompt},
                "taskType": "TEXT_IMAGE",
                "imageGenerationConfig": {
                    "cfgScale": 8,
                    "seed": seed,
                    # "seed": 2147483646,
                    "quality": "standard",
                    "width": width,
                    "height": height,
                    "numberOfImages": count,
                },
            }
        )
        modelId = "amazon.titan-image-generator-v1"
        response = self.bedrock.invoke_model(body=request, modelId=modelId)

        response_body = json.loads(response.get("body").read())
        return response_body

    def sdxl(self, item: dict):
        height = get_int(item, "height", 768)
        width = get_int(item, "width", 768)

        # if height != 512 and width != 512:
        #     return {"error": "height or width must be 512"}
        if height % 64 != 0 or width % 64 != 0:
            return {"error": "height or width must be multiple of 64"}
        if height > 1024 or width > 1024:
            return {"error": "height or width must be less than 1024"}

        steps = get_int(item, "steps", 30)
        # item["seed"] = int(item["seed"]) or -1
        count = get_int(item, "count", 1)

        prompt = translate(get_str(item, "prompt", None))

        negative_prompt = get_str(item, "negative_prompt", None)

        if negative_prompt:
            negative_prompt = translate(negative_prompt)

        style_preset = get_str(item, "style_preset", "3d-model")
        request = json.dumps(
            {
                "text_prompts": (
                    [
                        {"text": prompt, "weight": 1.0},
                        {"text": negative_prompt, "weight": -1.0},
                    ]
                ),
                "cfg_scale": 10,
                # "seed": -1,
                "steps": steps,
                "style_preset": style_preset,
                "width": width,
                "height": height,
                "count": count,
            }
        )
        modelId = "stability.stable-diffusion-xl-v1"
        # print(request)
        response = self.bedrock.invoke_model(body=request, modelId=modelId)
        response_body = json.loads(response.get("body").read())
        # print(len(response_body["artifacts"]))
        return {"images": [response_body["artifacts"][0].get("base64")]}

    def kb_retrieve(self, text: str):
        response = self.bedrock_agent.retrieve(
            knowledgeBaseId=self.knowledge_base_id,
            retrievalQuery={"text": text},
            retrievalConfiguration={
                "vectorSearchConfiguration": {"numberOfResults": 5}
            },
            # nextToken="string",
        )
        # print(response)

        results = response["retrievalResults"]
        texts = []
        urls = []
        refs = {}
        for result in results:
            texts.append(result["content"]["text"])
            s3_url = result["location"]["s3Location"]["uri"]
            urls.append(s3_url)
            if s3_url in refs:
                refs[s3_url] = refs[s3_url] + 1
            else:
                refs[s3_url] = 1
        # return texts, sorted(refs.items(), key=lambda x: x[1], reverse=True)
        return texts, urls

    async def kb_summary_content(self, text: str, history):
        se_title, se_link, se_content = self.google_top_article(text)
        result = self.kb_retrieve(text)
        search_result = result[0]
        if se_content:
            search_result.append(se_content)

        # strmSummary = claude2_summuary_kb(self.bedrock, text, search_result)
        # print(search_result)
        strmSummary = claude3_summuary_kb(self.bedrock, text, search_result)

        while True:
            try:
                yield next(strmSummary)
            except StopIteration:
                break

        yield "<div class='citations'>Citations: "
        refs = result[1]
        for i in range(len(refs)):
            # s3_full_loc = s3_loc[0][5:]
            # yield "<a>" + s3_full_loc[s3_full_loc.index("/") + 1 :] + "</a>"
            yield f"<span>{i+1}</span> <a>{refs[i][0:10]}...{refs[i][-20:]}</a><br />"
            yield "\n"
        if se_link:
            yield f"<span>6</span> <a href='{se_link}' target='_blank'>{se_title[0:15]}...{se_title[-15:]}</a><br />"

        yield "</div>"

    async def kb_rag_handler(self, item: dict):
        if self.knowledge_base_id:
            prompt = item["prompt"]
            history = item["history"] if "history" in item else []
            return StreamingResponse(self.kb_summary_content(prompt, history))
        else:

            async def error_message():
                yield "Error: Bedrock knowledge base id not set."

            return StreamingResponse(error_message())

    def extract_keywords(self, text: str):
        modelId = "anthropic.claude-v2"
        accept = "*/*"
        contentType = "application/json"
        body = json.dumps(
            {
                "prompt": 'Human: Please find the keywords of the following sentence and put the keywords into [] as a json string, e.g. ["a", "b"]: {text}\n\nAssistant:'.format(
                    text=text
                ),
                "max_tokens_to_sample": 2048,
                "temperature": 0,
                "top_p": 0.999,
                "stop_sequences": ["Human:"],
            }
        )
        response = self.bedrock.invoke_model(
            body=body,
            modelId=modelId,
            accept=accept,
            contentType=contentType,
        )
        response_body = json.loads(response.get("body").read())
        print("extract_keywords: ", response_body)
        return json.loads(response_body["completion"])

    def google_cse_list(self, q: str):
        if self.google_api_key and self.google_cse_cx:
            service = build("customsearch", "v1",
                            developerKey=self.google_api_key)
            res = (
                service.cse()
                .list(
                    q=q,
                    num=1,
                    cx=self.google_cse_cx,
                    fields="items(title,link)",
                )
                .execute()
            )
            return res["items"]
        return []

    def fetch_url_content(self, url: str):
        r = requests.get(
            url,
            allow_redirects=True,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
            },
        )
        r.encoding = r.apparent_encoding
        soup = BeautifulSoup(r.text, features="html.parser")
        for script in soup(["script", "style", "title"]):
            script.extract()
        return soup.get_text()

    def google_top_article(self, text: str):
        if self.google_api_key and self.google_cse_cx:
            try:
                keys = self.extract_keywords(text)
                # print(keys)
                cses = self.google_cse_list(" ".join(keys))
                print(cses)
                se_title = cses[0]["title"]
                se_link = cses[0]["link"]
                se_content = self.fetch_url_content(se_link)
                print(se_link, "的长度:", len(se_content))
                # return None
                return se_title, se_link, se_content[0:20000]
            except Exception as e:
                pass
                # print(e)

        return None, None, None

    def extract_video_keyframes(self, video_url: str, output_dir='./tmp/keyframes'):
        s3_client = boto3.resource('s3')
        lst = video_url.split('/')
        bucket = lst[2]
        key = '/'.join(lst[3:])
        obj = './tmp/video/' + lst[-1]
        s3_client.meta.client.download_file(bucket, key, obj)

        with av.open(obj) as container:
            stream = container.streams.video[0]
            stream.codec_context.skip_frame = 'NONKEY'
            for frame in container.decode(stream):
                frame.to_image().save(os.path.join(
                    output_dir, 'temporary-image-{:04d}.png'.format(frame.pts)))
        return output_dir

    def invoke_claude3(self, keyframes_dir: str, stream=False):
        image_lst = os.listdir(keyframes_dir)
        image_lst = [keyframes_dir + '/' + image for image in image_lst if not image.startswith(
            "temporary-image-00")]
        bedrock_runtime = boto3.client(service_name='bedrock-runtime')
        model_id = 'anthropic.claude-3-sonnet-20240229-v1:0'
        max_tokens = 1024
        system = "请用中文回答。"
        content = []
        for image in image_lst[:20]:
            with open(image, "rb") as image_file:
                content_image = base64.b64encode(
                    image_file.read()).decode('utf8')
            ct = {
                "type": "image", "source": {"type": "base64", "media_type": "image/png", "data": content_image}
            }
            content.append(ct)
        content.append(
            {"type": "text", "text": "你是一个阅片无数的动漫以及视频博主。这些图片来自于视频的剪辑，请识别出视频中的角色，并讲述该视频发生了什么故事。使用以下文字作为开头进行回答：该视频讲述了"})
        messages = [{
            "role": "user",
            "content": content
        }]
        body = json.dumps(
            {
                "system": system,
                "anthropic_version": "bedrock-2023-05-31",
                "max_tokens": max_tokens,
                "messages": messages
            }
        )

        if stream:
            response = bedrock_runtime.invoke_model_with_response_stream(
                body=body, modelId=model_id)

            for event in response.get("body"):
                chunk = json.loads(event["chunk"]["bytes"])

                if chunk['type'] == 'message_delta':
                    print(f"\nStop reason: {chunk['delta']['stop_reason']}")
                    print(f"Stop sequence: {chunk['delta']['stop_sequence']}")
                    print(f"Output tokens: {chunk['usage']['output_tokens']}")

                if chunk['type'] == 'content_block_delta':
                    if chunk['delta']['type'] == 'text_delta':
                        print(chunk['delta']['text'], end="")
        else:
            response = bedrock_runtime.invoke_model(
                body=body, modelId=model_id)
            response_body = json.loads(response.get('body').read())
            text = response_body['content'][0]['text']
            return text

    def video_summary(self, video_url):
        if not os.path.exists('./tmp'):
            os.makedirs('./tmp')
            os.makedirs('./tmp/video')
            os.makedirs('./tmp/keyframes')
        else:
            os.system("rm -rf ./tmp/video")
            os.system("rm -rf ./tmp/keyframes")
            os.makedirs('./tmp/video')
            os.makedirs('./tmp/keyframes')
        keyframes_dir = self.extract_video_keyframes(video_url)
        self.invoke_claude3(keyframes_dir, stream=True)


bedrock_router = Bedrock().router
