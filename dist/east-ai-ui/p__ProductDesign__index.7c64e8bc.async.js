"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[911],{65083:function(R,D,a){a.r(D);var O=a(15009),l=a.n(O),v=a(99289),P=a.n(v),b=a(5574),o=a.n(b),x=a(92296),B=a(79090),p=a(51042),C=a(90930),c=a(9361),h=a(2453),d=a(97029),n=a(71230),t=a(15746),s=a(5298),i=a(31863),r=a(2519),T=a(66428),E=a(73360),L=a(3247),y=a(67294),e=a(85893),W=function(){var F=c.Z.useToken(),K=F.token,w=(0,y.useState)([]),U=o()(w,2),S=U[0],G=U[1],N=(0,y.useState)(!1),Z=o()(N,2),A=Z[0],M=Z[1],$=(0,y.useState)(),I=o()($,2),g=I[0],H=I[1],z=function(){var u=P()(l()().mark(function _(m){var j;return l()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return M(!0),g&&g.length>1&&(m.input_image=g),f.next=4,(0,x.uu)(m);case 4:j=f.sent,G(j.images),M(!1);case 7:case"end":return f.stop()}},_)}));return function(m){return u.apply(this,arguments)}}(),V=function(_){console.log("Failed:",_)},J=["euler_a","eular","heun","lms","dpm2","dpm2_a","ddim"],Y={prompt:"3D product render, futuristic armchair, finely detailed, purism, ue 5, a computer rendering, minimalism, octane render, 4k",negative_prompt:"EasyNegative, (worst quality:2), (low quality:2), (normal quality:2), lowres, ((monochrome)), ((grayscale)), cropped, text, jpeg artifacts, signature, watermark, username, sketch, cartoon, drawing, anime, duplicate, blurry, semi-realistic, out of frame, ugly, deformed",steps:30,sampler:"dpm2_a",seed:-1,height:512,width:512,count:1,model_id:"product_design"},Q=function(_){if(_.file.status==="uploading"){M(!0);return}_.file.status==="done"&&(_.file.response.success?H(_.file.response.data):h.ZP.error(_.file.response.message),M(!1))},X=function(_){var m=_.type==="image/jpeg"||_.type==="image/png"||_.type==="image/webp";m||h.ZP.error("You can only upload JPG/PNG file!");var j=_.size/1024/1024<5;return j||h.ZP.error("Image must smaller than 5MB!"),m&&j},k=(0,e.jsx)("div",{children:A?(0,e.jsx)(B.Z,{}):(0,e.jsx)(d.ZP,{icon:(0,e.jsx)(p.Z,{}),children:"\u4E0A\u4F20"})});return(0,e.jsx)(C._z,{waterMarkProps:{content:""},children:(0,e.jsx)("div",{style:{color:K.colorTextHeading},children:(0,e.jsxs)(n.Z,{children:[(0,e.jsx)(t.Z,{span:8,children:(0,e.jsxs)(s.Z,{name:"basic",onFinish:z,onFinishFailed:V,autoComplete:"off",layout:"vertical",initialValues:Y,children:[(0,e.jsx)(s.Z.Item,{label:"\u6A21\u578B\u9009\u62E9",name:"model_id",children:(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(i.Z.Option,{value:"product_design",children:"\u771F\u5B9E\u98CE\u683C\u6A21\u578B"}),(0,e.jsx)(i.Z.Option,{value:"product_inpaint",children:"\u5907\u7528\u6A21\u578B"})]})}),(0,e.jsx)(s.Z.Item,{label:"\u53C2\u8003\u56FE\u7247\uFF08\u53EF\u9009\uFF09",name:"input_image",valuePropName:"fieldList",children:(0,e.jsx)(r.Z,{name:"file",action:"/api/upload",className:"avatar-uploader",onChange:Q,beforeUpload:X,maxCount:1,showUploadList:!1,children:g?(0,e.jsx)("img",{src:"/api/s3-image/"+g,alt:"product image",style:{maxHeight:320,maxWidth:320}}):k})}),(0,e.jsx)(s.Z.Item,{label:"\u751F\u6210\u5185\u5BB9\u63D0\u793A\u8BCD",name:"prompt",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5546\u54C1\u7279\u70B9\u7B49\u5185\u5BB9!"}],children:(0,e.jsx)(T.Z.TextArea,{showCount:!0,maxLength:500,placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u7279\u70B9\u7B49\u5185\u5BB9!",allowClear:!0,style:{height:120}})}),(0,e.jsx)(s.Z.Item,{label:"\u907F\u514D\u51FA\u73B0\u5728\u753B\u9762\u4E2D\u7684\u5185\u5BB9",name:"negative_prompt",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CD\u5411\u63D0\u793A\u8BCD!"}],children:(0,e.jsx)(T.Z.TextArea,{showCount:!0,maxLength:500,placeholder:"\u8BF7\u8F93\u5165\u60A8\u4E0D\u60F3\u5728\u4EA7\u54C1\u4E2D\u51FA\u73B0\u7684\u5143\u7D20",allowClear:!0,style:{height:120}})}),(0,e.jsxs)(n.Z,{children:[(0,e.jsx)(t.Z,{span:8,children:(0,e.jsx)(s.Z.Item,{label:"\u5BBD(px)",name:"width",rules:[{required:!0,message:"\u5BBD\u5EA6!"}],children:(0,e.jsx)(E.Z,{min:128,max:1024})})}),(0,e.jsx)(t.Z,{span:8,children:(0,e.jsx)(s.Z.Item,{label:"\u9AD8(px)",name:"height",rules:[{required:!0,message:"\u9AD8\u5EA6!"}],children:(0,e.jsx)(E.Z,{min:128,max:1024})})}),(0,e.jsx)(t.Z,{span:8,children:(0,e.jsx)(s.Z.Item,{label:"\u56FE\u7247\u6570\u91CF",name:"count",rules:[{required:!0,message:"\u56FE\u7247\u6570\u91CF!"}],children:(0,e.jsx)(E.Z,{min:1,max:4})})})]}),(0,e.jsx)(n.Z,{style:{display:"none"},children:(0,e.jsxs)(t.Z,{span:24,children:[(0,e.jsx)(s.Z.Item,{label:"\u79CD\u5B50",name:"seed",rules:[{required:!0,message:"\u79CD\u5B50!"}],children:(0,e.jsx)(E.Z,{})}),(0,e.jsx)(s.Z.Item,{label:"\u91C7\u6837\u5668",name:"sampler",rules:[{required:!0,message:"\u91C7\u6837\u5668!"}],children:(0,e.jsx)(i.Z,{children:J.map(function(u){return(0,e.jsx)(i.Z.Option,{value:u,children:u},u)})})}),(0,e.jsx)(s.Z.Item,{label:"\u6B65\u6570",name:"steps",rules:[{required:!0,message:"\u6B65\u6570!"}],children:(0,e.jsx)(E.Z,{min:5,max:50})})]})}),(0,e.jsx)(s.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(d.ZP,{type:"primary",htmlType:"submit",children:"\u5F00\u59CB\u751F\u6210"})})]})}),(0,e.jsx)(t.Z,{span:1}),(0,e.jsx)(t.Z,{span:14,children:(0,e.jsxs)("div",{style:{width:"100%",borderRadius:4,margin:8},children:[A?(0,e.jsx)("div",{children:(0,e.jsx)(B.Z,{})}):null,S.map(function(u,_){return(0,e.jsx)(L.Z,{src:"data:image/png;base64,"+u,style:{maxWidth:320,maxHeight:320,border:"solid #fff 1px",margin:"10px",float:"left"}},_)})]})})]})})})};D.default=W},92296:function(R,D,a){a.d(D,{fN:function(){return h},uu:function(){return C}});var O=a(15009),l=a.n(O),v=a(97857),P=a.n(v),b=a(99289),o=a.n(b),x=a(35312);function B(n,t){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,s){return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(_objectSpread({},s||{})),r.abrupt("return",request("/api/write-marketing-text",_objectSpread({method:"POST",data:t},s||{})));case 2:case"end":return r.stop()}},n)})),p.apply(this,arguments)}function C(n,t){return c.apply(this,arguments)}function c(){return c=o()(l()().mark(function n(t,s){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,x.request)("/api/product-design",P()({method:"POST",data:t},s||{})));case 1:case"end":return r.stop()}},n)})),c.apply(this,arguments)}function h(n,t){return d.apply(this,arguments)}function d(){return d=o()(l()().mark(function n(t,s){return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,x.request)("/api/inpaint",P()({method:"POST",data:t},s||{})));case 1:case"end":return r.stop()}},n)})),d.apply(this,arguments)}}}]);
