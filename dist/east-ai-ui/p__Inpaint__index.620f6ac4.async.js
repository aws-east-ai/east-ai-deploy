"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[803],{79090:function(U,_,a){var h=a(1413),t=a(67294),Z=a(15294),o=a(91146),g=function(p,f){return t.createElement(o.Z,(0,h.Z)((0,h.Z)({},p),{},{ref:f,icon:Z.Z}))};g.displayName="LoadingOutlined",_.Z=t.forwardRef(g)},28099:function(U,_,a){a.r(_),a.d(_,{default:function(){return H}});var h=a(15009),t=a.n(h),Z=a(99289),o=a.n(Z),g=a(5574),d=a.n(g),p=a(92296),f=a(79090),v=a(1413),c=a(67294),y=a(42110),A=a(91146),j=function(T,M){return c.createElement(A.Z,(0,v.Z)((0,v.Z)({},T),{},{ref:M,icon:y.Z}))};j.displayName="PlusOutlined";var i=c.forwardRef(j),l=a(11774),m=a(9361),x=a(45360),n=a(71230),F=a(15746),u=a(52445),D=a(34041),K=a(50406),b=a(96365),I=a(73360),G=a(71577),N=a(32545),e=a(85893),w=function(){var T=m.Z.useToken(),M=T.token,z=(0,c.useState)([]),L=d()(z,2),V=L[0],J=L[1],Y=(0,c.useState)(!1),R=d()(Y,2),S=R[0],B=R[1],Q=(0,c.useState)(),W=d()(Q,2),C=W[0],X=W[1],k=function(s){return s.replace("s3://east-ai-workshop","https://d1onssyrnp1eaq.cloudfront.net")},q=function(){var r=o()(t()().mark(function s(E){var O;return t()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return B(!0),C&&C.length>1&&(E.input_image=C),P.next=4,(0,p.fN)(E);case 4:O=P.sent,J(O.images),B(!1);case 7:case"end":return P.stop()}},s)}));return function(E){return r.apply(this,arguments)}}(),ee=function(s){console.log("Failed:",s)},ae=["euler_a","eular","heun","lms","dpm2","dpm2_a","ddim"],se={negative_prompt:"(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, disfigured, gross proportions",steps:30,sampler:"ddim",seed:-1,count:1,model_id:"product_design",sam_prompt:""},ne=(0,e.jsxs)("div",{children:[S?(0,e.jsx)(f.Z,{}):(0,e.jsx)(i,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),te=function(s){if(s.file.status==="uploading"){B(!0);return}s.file.status==="done"&&(s.file.response.success?X(s.file.response.data):x.ZP.error(s.file.response.message),B(!1))},ue=function(s){var E=s.type==="image/jpeg"||s.type==="image/png"||s.type==="image/webp";E||x.ZP.error("You can only upload JPG/PNG file!");var O=s.size/1024/1024<5;return O||x.ZP.error("Image must smaller than 5MB!"),E&&O};return(0,e.jsx)(l._z,{waterMarkProps:{content:""},children:(0,e.jsx)("div",{style:{color:M.colorTextHeading},children:(0,e.jsxs)(n.Z,{children:[(0,e.jsx)(F.Z,{span:8,children:(0,e.jsxs)(u.Z,{name:"basic",onFinish:q,onFinishFailed:ee,autoComplete:"off",layout:"vertical",initialValues:se,children:[(0,e.jsx)(u.Z.Item,{label:"\u6A21\u578B\u9009\u62E9",name:"model_id",children:(0,e.jsxs)(D.Z,{children:[(0,e.jsx)(D.Z.Option,{value:"product_design",children:"\u62A0\u56FE\u6E32\u67D3\u6A21\u578B"}),(0,e.jsx)(D.Z.Option,{value:"product_inpaint",children:"\u5907\u7528\u6A21\u578B"})]})}),(0,e.jsx)(u.Z.Item,{label:"\u4EA7\u54C1\u56FE\u7247",name:"input_image",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u539F\u59CB\u56FE\u7247!"}],children:(0,e.jsx)(K.Z,{name:"file",action:"/api/upload",className:"avatar-uploader",showUploadList:!1,onChange:te,beforeUpload:ue,maxCount:1,children:C?(0,e.jsx)("img",{src:k(C),alt:"avatar",style:{maxHeight:320,maxWidth:320}}):ne})}),(0,e.jsx)(u.Z.Item,{label:"\u4EA7\u54C1\u63CF\u8FF0",name:"sam_prompt",rules:[{required:!0,message:"\u8BF7\u63CF\u8FF0\u60A8\u4E0A\u4F20\u56FE\u7247\u7684\u4E2D\u9700\u8981\u4FDD\u7559\u7684\u5185\u5BB9!"}],children:(0,e.jsx)(b.Z,{placeholder:"\u8BF7\u63CF\u8FF0\u60A8\u4E0A\u4F20\u56FE\u7247\u7684\u4E2D\u9700\u8981\u4FDD\u7559\u7684\u5185\u5BB9!"})}),(0,e.jsx)(u.Z.Item,{label:"\u80CC\u666F\u63D0\u793A\u8BCD",name:"prompt",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u91CD\u7ED8\u5185\u5BB9!"}],children:(0,e.jsx)(b.Z.TextArea,{showCount:!0,maxLength:500,placeholder:"\u9664\u4E86\u4FDD\u7559\u7684\u5185\u5BB9\uFF0C\u5176\u4ED6\u5730\u65B9\u60A8\u60F3\u753B\u4EC0\u4E48\uFF1F",allowClear:!0,style:{height:120}})}),(0,e.jsx)(u.Z.Item,{label:"\u907F\u514D\u51FA\u73B0\u5728\u753B\u9762\u4E2D\u7684\u5185\u5BB9",name:"negative_prompt",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CD\u5411\u63D0\u793A\u8BCD!"}],children:(0,e.jsx)(b.Z.TextArea,{showCount:!0,maxLength:500,placeholder:"\u8BF7\u8F93\u5165\u60A8\u4E0D\u60F3\u5728\u91CD\u4F1A\u533A\u57DF\u4E2D\u51FA\u73B0\u7684\u5185\u5BB9",allowClear:!0,style:{height:120}})}),(0,e.jsx)(n.Z,{children:(0,e.jsx)(F.Z,{span:24,children:(0,e.jsx)(u.Z.Item,{label:"\u56FE\u7247\u6570\u91CF",name:"count",rules:[{required:!0,message:"\u56FE\u7247\u6570\u91CF!"}],children:(0,e.jsx)(I.Z,{min:1,max:4})})})}),(0,e.jsx)(n.Z,{style:{display:"none"},children:(0,e.jsxs)(F.Z,{span:24,children:[(0,e.jsx)(u.Z.Item,{label:"\u79CD\u5B50",name:"seed",rules:[{required:!0,message:"\u79CD\u5B50!"}],children:(0,e.jsx)(I.Z,{})}),(0,e.jsx)(u.Z.Item,{label:"\u91C7\u6837\u5668",name:"sampler",rules:[{required:!0,message:"\u91C7\u6837\u5668!"}],children:(0,e.jsx)(D.Z,{children:ae.map(function(r){return(0,e.jsx)(D.Z.Option,{value:r,children:r},r)})})}),(0,e.jsx)(u.Z.Item,{label:"\u6B65\u6570",name:"steps",rules:[{required:!0,message:"\u6B65\u6570!"}],children:(0,e.jsx)(I.Z,{min:5,max:50})})]})}),(0,e.jsx)(u.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(G.ZP,{type:"primary",htmlType:"submit",children:"\u5F00\u59CB\u751F\u6210"})})]})}),(0,e.jsx)(F.Z,{span:1}),(0,e.jsx)(F.Z,{span:14,children:(0,e.jsxs)("div",{style:{width:"100%",borderRadius:4,margin:8},children:[S?(0,e.jsx)("div",{children:(0,e.jsx)(f.Z,{})}):null,V.map(function(r,s){return(0,e.jsx)(N.Z,{src:"data:image/png;base64,"+r,style:{maxWidth:320,maxHeight:320,border:"solid #fff 1px",margin:"10px",float:"left"}},s)})]})})]})})})},H=w},92296:function(U,_,a){a.d(_,{fN:function(){return A},m9:function(){return f},uu:function(){return c}});var h=a(15009),t=a.n(h),Z=a(97857),o=a.n(Z),g=a(99289),d=a.n(g),p=a(35312);function f(i,l){return v.apply(this,arguments)}function v(){return v=d()(t()().mark(function i(l,m){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(o()({},m||{})),n.abrupt("return",(0,p.request)("/api/write-marketing-text",o()({method:"POST",data:l},m||{})));case 2:case"end":return n.stop()}},i)})),v.apply(this,arguments)}function c(i,l){return y.apply(this,arguments)}function y(){return y=d()(t()().mark(function i(l,m){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,p.request)("/api/product-design",o()({method:"POST",data:l},m||{})));case 1:case"end":return n.stop()}},i)})),y.apply(this,arguments)}function A(i,l){return j.apply(this,arguments)}function j(){return j=d()(t()().mark(function i(l,m){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,p.request)("/api/inpaint",o()({method:"POST",data:l},m||{})));case 1:case"end":return n.stop()}},i)})),j.apply(this,arguments)}}}]);
