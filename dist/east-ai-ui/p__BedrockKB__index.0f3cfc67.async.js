"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[742],{50228:function(y,o,t){t.d(o,{Z:function(){return d}});var i=t(1413),n=t(67294),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 328a60 60 0 10120 0 60 60 0 10-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 10120 0 60 60 0 10-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"robot",theme:"outlined"},p=m,h=t(91146),a=function(_,x){return n.createElement(h.Z,(0,i.Z)((0,i.Z)({},_),{},{ref:x,icon:p}))};a.displayName="RobotOutlined";var d=n.forwardRef(a)},87547:function(y,o,t){t.d(o,{Z:function(){return d}});var i=t(1413),n=t(67294),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},p=m,h=t(91146),a=function(_,x){return n.createElement(h.Z,(0,i.Z)((0,i.Z)({},_),{},{ref:x,icon:p}))};a.displayName="UserOutlined";var d=n.forwardRef(a)},92701:function(y,o,t){t.r(o);var i=t(15009),n=t.n(i),m=t(99289),p=t.n(m),h=t(5574),a=t.n(h),d=t(87547),P=t(79090),_=t(50228),x=t(90930),G=t(9361),g=t(71230),s=t(15746),D=t(5298),N=t(14657),J=t(97029),j=t(7134),E=t(67294),Q=t(80854),e=t(85893),Y=function(){var X=G.Z.useToken(),q=X.token,f=(0,Q.useIntl)(),ee=(0,E.useState)([]),Z=a()(ee,2),M=Z[0],ue=Z[1],te=(0,E.useState)(""),C=a()(te,2),A=C[0],U=C[1],se=(0,E.useState)(""),B=a()(se,2),T=B[0],S=B[1],ne=(0,E.useState)(!1),I=a()(ne,2),L=I[0],K=I[1],ae=function(){var u=p()(n()().mark(function O(b){var v,W,z,H,F,V,$;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return K(!0),v="",S(b.prompt),W=new TextDecoder,z="/api/bedrock-rag",r.next=7,fetch(z,{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify(b)});case 7:H=r.sent,F=H.body.getReader(),V=n()().mark(function oe(){var R,k,w,c;return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,F.read();case 2:if(R=l.sent,k=R.value,w=R.done,!w){l.next=7;break}return l.abrupt("return","break");case 7:c=W.decode(k),console.log(c),c=c.replace(/\n/g,"<br />"),v+=c,U(function(de){return de+c});case 12:case"end":return l.stop()}},oe)});case 10:return r.delegateYield(V(),"t0",12);case 12:if($=r.t0,$!=="break"){r.next=15;break}return r.abrupt("break",17);case 15:r.next=10;break;case 17:K(!1),v=v.trim().replace(/^(<br\s*\/?>)*|(<br\s*\/?>)*$/ig,""),M.unshift([b.prompt,v]),S(""),U("");case 22:case"end":return r.stop()}},O)}));return function(b){return u.apply(this,arguments)}}(),re=function(O){console.log("Failed:",O)},ie={margin:4,borderRadius:4,background:"#333",padding:5,fontSize:"16pt"},le={prompt:f.formatMessage({id:"pages.bedrockKB.prompt.defaultValue"})};return(0,e.jsx)(x._z,{waterMarkProps:{content:""},children:(0,e.jsx)("div",{style:{color:q.colorTextHeading},children:(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(s.Z,{span:8,children:(0,e.jsxs)(D.Z,{name:"basic",onFinish:ae,onFinishFailed:re,autoComplete:"off",layout:"vertical",initialValues:le,children:[(0,e.jsx)(D.Z.Item,{label:f.formatMessage({id:"pages.bedrockKB.prompt.title"}),name:"prompt",rules:[{required:!0,message:f.formatMessage({id:"pages.bedrockKB.prompt.required"})}],children:(0,e.jsx)(N.Z.TextArea,{showCount:!0,maxLength:500,allowClear:!0,style:{height:180}})}),(0,e.jsx)(D.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(J.ZP,{type:"primary",htmlType:"submit",disabled:L,children:f.formatMessage({id:"pages.common.buttonBeginGen"})})})]})}),(0,e.jsx)(s.Z,{span:1}),(0,e.jsx)(s.Z,{span:14,children:(0,e.jsx)("div",{style:{width:"100%",borderRadius:4,margin:8},children:(0,e.jsxs)("div",{style:ie,children:[M.length===0&&!T&&(0,e.jsxs)("div",{children:[f.formatMessage({id:"pages.bedrockKB.result.help"})," "]}),T&&(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(s.Z,{flex:"1",style:{textAlign:"left",paddingLeft:100,margin:"8px 4px",fontSize:"16pt"},children:(0,e.jsx)("div",{style:{backgroundColor:"#666",width:"auto",padding:"5px",borderRadius:"4px",marginBottom:"25px"},children:T})}),(0,e.jsx)(s.Z,{flex:"40px",style:{textAlign:"center",marginTop:"8px"},children:(0,e.jsx)(j.C,{size:32,icon:(0,e.jsx)(d.Z,{})})})]}),L?(0,e.jsx)("div",{children:(0,e.jsx)(P.Z,{})}):null,A&&(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(s.Z,{flex:"40px",style:{textAlign:"center",marginTop:"4px"},children:(0,e.jsx)(j.C,{size:32,icon:(0,e.jsx)(_.Z,{})})}),(0,e.jsx)(s.Z,{flex:"auto",style:{paddingRight:100,maxWidth:"90%",fontSize:"16pt",lineHeight:"1.5",marginBottom:"30px"},children:(0,e.jsx)("span",{dangerouslySetInnerHTML:{__html:A}})})]}),M.length>0&&M.map(function(u){return(0,e.jsxs)("div",{style:{marginBottom:10},children:[(0,e.jsxs)(g.Z,{justify:"end",children:[(0,e.jsx)(s.Z,{flex:"1",style:{textAlign:"left",paddingLeft:100,margin:"8px 4px",fontSize:"16pt"},children:(0,e.jsx)("div",{style:{backgroundColor:"#666",width:"auto",padding:"5px",borderRadius:"4px",marginBottom:"25px"},children:u[0]})}),(0,e.jsx)(s.Z,{flex:"40px",style:{textAlign:"center",marginTop:"8px"},children:(0,e.jsx)(j.C,{size:32,icon:(0,e.jsx)(d.Z,{})})})]}),(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(s.Z,{flex:"40px",style:{textAlign:"center",marginTop:"4px"},children:(0,e.jsx)(j.C,{size:32,icon:(0,e.jsx)(_.Z,{})})}),(0,e.jsx)(s.Z,{flex:"auto",style:{paddingRight:100,maxWidth:"90%",fontSize:"16pt",lineHeight:"1.5",marginBottom:"30px"},children:(0,e.jsx)("span",{dangerouslySetInnerHTML:{__html:u[1]}})})]})]},u)})]})})})]})})})};o.default=Y}}]);