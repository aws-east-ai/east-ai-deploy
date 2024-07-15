"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[803],{2650:function(A,b,a){a.r(b);var x=a(15009),l=a.n(x),y=a(99289),c=a.n(y),T=a(5574),d=a.n(T),g=a(92296),I=a(79090),f=a(51042),U=a(90930),E=a(9361),v=a(97029),m=a(2453),j=a(71230),u=a(15746),t=a(5298),n=a(31863),i=a(2519),p=a(66428),s=a(73360),W=a(3247),C=a(67294),K=a(35312),e=a(85893),S=function(){var r=(0,K.useIntl)(),w=E.Z.useToken(),F=w.token,G=(0,C.useState)([]),Z=d()(G,2),H=Z[0],$=Z[1],N=(0,C.useState)(!1),R=d()(N,2),L=R[0],D=R[1],z=(0,C.useState)(),B=d()(z,2),M=B[0],V=B[1],se=function(_){return _.replace("s3://east-ai-workshop","https://d1onssyrnp1eaq.cloudfront.net")},J=function(){var o=c()(l()().mark(function _(h){var P;return l()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return D(!0),M&&M.length>1&&(h.input_image=M),O.next=4,(0,g.fN)(h);case 4:P=O.sent,$(P.images),D(!1);case 7:case"end":return O.stop()}},_)}));return function(h){return o.apply(this,arguments)}}(),Y=function(_){console.log("Failed:",_)},Q=["euler_a","eular","heun","lms","dpm2","dpm2_a","ddim"],X={negative_prompt:"(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, disfigured, gross proportions",steps:30,sampler:"ddim",seed:-1,count:1,model_id:"product_design",sam_prompt:""},k=(0,e.jsx)("div",{children:L?(0,e.jsx)(I.Z,{}):(0,e.jsx)(v.ZP,{icon:(0,e.jsx)(f.Z,{}),children:r.formatMessage({id:"pages.common.buttonUpload"})})}),q=function(_){if(_.file.status==="uploading"){D(!0);return}_.file.status==="done"&&(_.file.response.success?V(_.file.response.data):m.ZP.error(_.file.response.message),D(!1))},ee=function(_){var h=_.type==="image/jpeg"||_.type==="image/png"||_.type==="image/webp";h||m.ZP.error("You can only upload JPG/PNG file!");var P=_.size/1024/1024<5;return P||m.ZP.error("Image must smaller than 5MB!"),h&&P};return(0,e.jsx)(U._z,{waterMarkProps:{content:""},children:(0,e.jsx)("div",{style:{color:F.colorTextHeading},children:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)(u.Z,{span:8,children:(0,e.jsxs)(t.Z,{name:"basic",onFinish:J,onFinishFailed:Y,autoComplete:"off",layout:"vertical",initialValues:X,children:[(0,e.jsx)(t.Z.Item,{label:r.formatMessage({id:"pages.inpainting.modelId.title"}),name:"model_id",children:(0,e.jsxs)(n.Z,{children:[(0,e.jsx)(n.Z.Option,{value:"product_design",children:r.formatMessage({id:"pages.inpainting.model.realityStyle"})}),(0,e.jsx)(n.Z.Option,{value:"product_inpaint",children:r.formatMessage({id:"pages.inpainting.model.optionStyle"})})]})}),(0,e.jsx)(t.Z.Item,{label:r.formatMessage({id:"pages.inpainting.inputImage.title"}),name:"input_image",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u539F\u59CB\u56FE\u7247!"}],valuePropName:"fieldList",children:(0,e.jsx)(i.Z,{name:"file",action:"/api/upload",className:"avatar-uploader",showUploadList:!1,onChange:q,beforeUpload:ee,maxCount:1,children:M?(0,e.jsx)("img",{src:"/api/s3-image/"+M,alt:"product image",style:{maxHeight:320,maxWidth:320}}):k})}),(0,e.jsx)(t.Z.Item,{label:r.formatMessage({id:"pages.inpainting.samPrompt.title"}),name:"sam_prompt",rules:[{required:!0}],children:(0,e.jsx)(p.Z,{placeholder:r.formatMessage({id:"pages.inpainting.samPrompt.placeHolder"})})}),(0,e.jsx)(t.Z.Item,{label:r.formatMessage({id:"pages.inpainting.prompt.title"}),name:"prompt",rules:[{required:!0}],children:(0,e.jsx)(p.Z.TextArea,{showCount:!0,maxLength:500,placeholder:r.formatMessage({id:"pages.inpainting.prompt.placeHolder"}),allowClear:!0,style:{height:120}})}),(0,e.jsx)(t.Z.Item,{label:r.formatMessage({id:"pages.inpainting.nprompt.title"}),name:"negative_prompt",rules:[{required:!0}],children:(0,e.jsx)(p.Z.TextArea,{showCount:!0,maxLength:500,placeholder:r.formatMessage({id:"pages.inpainting.nprompt.placeHolder"}),allowClear:!0,style:{height:120}})}),(0,e.jsx)(j.Z,{children:(0,e.jsx)(u.Z,{span:24,children:(0,e.jsx)(t.Z.Item,{label:r.formatMessage({id:"pages.inpainting.count.title"}),name:"count",rules:[{required:!0}],children:(0,e.jsx)(s.Z,{min:1,max:4})})})}),(0,e.jsx)(j.Z,{style:{display:"none"},children:(0,e.jsxs)(u.Z,{span:24,children:[(0,e.jsx)(t.Z.Item,{label:"\u79CD\u5B50",name:"seed",rules:[{required:!0,message:"\u79CD\u5B50!"}],children:(0,e.jsx)(s.Z,{})}),(0,e.jsx)(t.Z.Item,{label:"\u91C7\u6837\u5668",name:"sampler",rules:[{required:!0,message:"\u91C7\u6837\u5668!"}],children:(0,e.jsx)(n.Z,{children:Q.map(function(o){return(0,e.jsx)(n.Z.Option,{value:o,children:o},o)})})}),(0,e.jsx)(t.Z.Item,{label:"\u6B65\u6570",name:"steps",rules:[{required:!0,message:"\u6B65\u6570!"}],children:(0,e.jsx)(s.Z,{min:5,max:50})})]})}),(0,e.jsx)(t.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(v.ZP,{type:"primary",htmlType:"submit",children:r.formatMessage({id:"pages.common.buttonBeginGen"})})})]})}),(0,e.jsx)(u.Z,{span:1}),(0,e.jsx)(u.Z,{span:14,children:(0,e.jsxs)("div",{style:{width:"100%",borderRadius:4,margin:8},children:[L?(0,e.jsx)("div",{children:(0,e.jsx)(I.Z,{})}):null,H.map(function(o,_){return(0,e.jsx)(W.Z,{src:"data:image/png;base64,"+o,style:{maxWidth:320,maxHeight:320,border:"solid #fff 1px",margin:"10px",float:"left"}},_)})]})})]})})})};b.default=S},92296:function(A,b,a){a.d(b,{Tl:function(){return j},fN:function(){return v},uu:function(){return U}});var x=a(15009),l=a.n(x),y=a(97857),c=a.n(y),T=a(99289),d=a.n(T),g=a(35312);function I(t,n){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function t(n,i){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(_objectSpread({},i||{})),s.abrupt("return",request("/api/write-marketing-text",_objectSpread({method:"POST",data:n},i||{})));case 2:case"end":return s.stop()}},t)})),f.apply(this,arguments)}function U(t,n){return E.apply(this,arguments)}function E(){return E=d()(l()().mark(function t(n,i){return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(n.model_id!="product_design"){s.next=2;break}return s.abrupt("return",(0,g.request)("/api/product-design",c()({method:"POST",data:n},i||{})));case 2:return s.abrupt("return",(0,g.request)("/api/bedrock-product-design",c()({method:"POST",data:n},i||{})));case 3:case"end":return s.stop()}},t)})),E.apply(this,arguments)}function v(t,n){return m.apply(this,arguments)}function m(){return m=d()(l()().mark(function t(n,i){return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,g.request)("/api/inpaint",c()({method:"POST",data:n},i||{})));case 1:case"end":return s.stop()}},t)})),m.apply(this,arguments)}function j(t,n){return u.apply(this,arguments)}function u(){return u=d()(l()().mark(function t(n,i){return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,g.request)("/api/agent",c()({method:"POST",data:n},i||{})));case 1:case"end":return s.stop()}},t)})),u.apply(this,arguments)}}}]);