(this["webpackJsonpchatbot-client"]=this["webpackJsonpchatbot-client"]||[]).push([[0],{19:function(e,t,a){e.exports={ChatInterface:"ChatInterface_ChatInterface__2Ib4f",DialogBox:"ChatInterface_DialogBox__gil__"}},20:function(e,t,a){e.exports={ChatDescription:"ChatDescription_ChatDescription__377KO",LogoContainer:"ChatDescription_LogoContainer__flXrV"}},4:function(e,t,a){e.exports={BubbleContainer:"DialogueBubble_BubbleContainer__dzpdl",DialogueBubble:"DialogueBubble_DialogueBubble__G735e",UserBubble:"DialogueBubble_UserBubble__xKh6F",ChatbotBubble:"DialogueBubble_ChatbotBubble__2ZcS9"}},42:function(e,t,a){e.exports={ChatInput:"ChatInput_ChatInput__3KrGO"}},47:function(e,t,a){e.exports=a(87)},52:function(e,t,a){},83:function(e,t){},87:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(41),c=a.n(o),l=(a(52),a(9)),i=a.n(l),m=a(23),s=a(24),h=a(19),u=a.n(h),f=a(4),d=a.n(f),E=function(e){var t=[d.a.DialogueBubble];return"USER"===e.speaker?t.push(d.a.UserBubble):"CHATBOT"===e.speaker&&t.push(d.a.ChatbotBubble),n.a.createElement("div",{className:d.a.BubbleContainer},n.a.createElement("p",{className:t.join(" ")},e.children))},p=a(42),g=a.n(p),b=function(e){return n.a.createElement("div",{className:g.a.ChatInput},n.a.createElement("input",{type:"text",placeholder:"Escriba su pregunta",onChange:e.onTyping,value:e.value,onKeyUp:function(t){13===t.keyCode&&(t.preventDefault(),e.onPressButton())}}),n.a.createElement("button",{onClick:e.onPressButton},"Enviar"))},x=a(43),y=a.n(x),v=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)([{speaker:"CHATBOT",text:"ChatBot: Hola soy un chatbot con informaci\xf3n sobre la Covid-19, pregunteme lo que quiera saber sobre el virus."}]),l=Object(s.a)(c,2),i=l[0],h=l[1],f=Object(r.useRef)(),d=Object(r.useRef)();return Object(r.useEffect)((function(){d.current=y()(),d.current.on("chat:message",(function(e){e.messages.forEach((function(e){h((function(t){return[].concat(Object(m.a)(t),[{speaker:"CHATBOT",text:"Chatbot: ".concat(e)}])}))}))}))}),[]),Object(r.useEffect)((function(){f.current.scrollTop=f.current.scrollHeight}),[f,i]),n.a.createElement("div",{className:u.a.ChatInterface},n.a.createElement("div",{className:u.a.DialogBox,ref:f},i.map((function(e,t){return n.a.createElement(E,{key:t,speaker:e.speaker},e.text)}))),n.a.createElement(b,{value:a,onTyping:function(e){o(e.target.value)},onPressButton:function(){a.length>0&&(d.current.emit("chat:message",{message:a}),h((function(e){return[].concat(Object(m.a)(e),[{speaker:"USER",text:"Yo: ".concat(a)}])})),o(""))}}))},C=a(20),w=a.n(C),k=a(10);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createElement("g",null,n.a.createElement("path",{d:"m254.04 279.94a201.46 195.34 0 0 1 202.66-193.94 201.46 195.34 0 0 1 200.26 196.28 201.46 195.34 0 0 1-202.2 194.39 201.46 195.34 0 0 1-200.72-195.83",fill:"#92e01c"}),n.a.createElement("rect",{x:70.03,y:165.64,width:11.069,height:123.9,rx:0,ry:4.7182,fill:"#2e438b",strokeWidth:1.5848}),n.a.createElement("rect",{x:63.464,y:284.05,width:24.842,height:50.366,rx:8.9547,ry:12.699,fill:"#475fc0",strokeWidth:2.1474}),n.a.createElement("path",{transform:"matrix(-1 .00068565 -.001659 -1 0 0)",d:"m-98.788-536.48a182.78 161.07 0 0 1-91.704 139.65 182.78 161.07 0 0 1-183.09-0.47661 182.78 161.07 0 0 1-90.766-140.12l182.78 0.95159z",fill:"#5188b6",strokeWidth:2.3084}),n.a.createElement("rect",{id:"outerHead",x:87.245,y:199.01,width:392.34,height:215.18,ry:54.449,fill:"#475fc0",strokeWidth:1.7165}),n.a.createElement("rect",{id:"innerHead",x:130.16,y:233,width:310.36,height:152.46,ry:53.967,fill:"#6ec47e",strokeWidth:1.6977})),j=n.a.createElement("g",{id:"face",fill:"#416446"},n.a.createElement("rect",{x:212.58,y:274.63,width:16.335,height:25.863,ry:9.6066,strokeWidth:2.1674}),n.a.createElement("rect",{id:"rightEye",x:340.69,y:274.52,width:16.335,height:25.863,ry:9.6066,strokeWidth:2.1674}),n.a.createElement("rect",{x:212.49,y:327.57,width:12.513,height:11.069,ry:5.5346,strokeWidth:1.7165}),n.a.createElement("rect",{x:344.11,y:327.08,width:12.513,height:11.069,ry:5.5346,strokeWidth:1.6803}),n.a.createElement("rect",{x:222.83,y:335.99,width:19.732,height:10.588,ry:5.2939,strokeWidth:1.7165}),n.a.createElement("rect",{x:326.79,y:335.99,width:19.732,height:10.588,ry:5.2939,strokeWidth:1.7165}),n.a.createElement("rect",{x:241.6,y:343.45,width:40.426,height:9.6253,ry:4.8127,strokeWidth:1.982}),n.a.createElement("rect",{x:284.19,y:343.45,width:44.036,height:9.6253,ry:4.8127,strokeWidth:2.0686})),W=n.a.createElement("path",{transform:"matrix(.0054428 .99999 -.99997 .007655 0 0)",d:"m326.55-86.392a16.737 14.568 0 0 1-8.3969 12.631 16.737 14.568 0 0 1-16.765-0.04317 16.737 14.568 0 0 1-8.3109-12.674l16.736 0.08619z",fill:"#2e438b",strokeWidth:.88409}),D=n.a.createElement("g",{id:"gHeart",fill:"#475ec1",stroke:"#475ec1"},n.a.createElement("path",{transform:"matrix(-.99674 .080709 -.068678 -.99764 0 0)",d:"m-72.058-147a15.289 15.051 0 0 1 15.38-14.943 15.289 15.051 0 0 1 15.197 15.123 15.289 15.051 0 0 1-15.345 14.978 15.289 15.051 0 0 1-15.232-15.089",strokeWidth:1.3838}),n.a.createElement("path",{d:"m71.946 142.21a15.314 15.293 0 0 1 15.405-15.184 15.314 15.293 0 0 1 15.222 15.367 15.314 15.293 0 0 1-15.37 15.219 15.314 15.293 0 0 1-15.257-15.332",strokeWidth:1.3688}),n.a.createElement("path",{d:"m51.483 143.68c3.9385 18.955 24.756 29.052 24.756 29.052",strokeWidth:"1.3002px"}),n.a.createElement("path",{d:"m102.66 143.72c-4.3026 18.941-27.045 29.031-27.045 29.031",strokeWidth:"1.3585px"}),n.a.createElement("path",{d:"m75.635 172.18c-0.30606-0.16736-2.6026-2.5734-7.6912-8.0585-9.485-10.224-8.6076-9.2526-8.2864-9.1745 1.8979 0.46149 4.9865 0.65828 6.9048 0.43998 3.2046-0.36464 6.2532-1.4845 8.7582-3.2174l0.99446-0.68793 0.64197 0.55761c2.3648 2.0543 5.8582 3.5396 9.6423 4.0999 1.0404 0.15414 4.2745 0.15602 5.3333 3e-3 0.44323-0.0638 0.82154-0.1026 0.84069-0.0863 0.0184 0.0155-3.4758 3.6135-7.7666 7.9936-6.173 6.3014-7.897 8.0067-8.2592 8.1693-0.56548 0.25379-0.57714 0.25338-1.1124-0.0388z",strokeWidth:.10083})),I=n.a.createElement("path",{d:"m150.17 477.37 94.411 0.57363s15.53-60.568 14.548-56.719c-0.98179 3.8486 9.5203 102.95 9.5203 102.95l9.7199-48.027 17.566-0.22235 5.8366-28.866c3.3097 19.915 7.9224 39.556 12.436 59.23l7.4992-30.276 85.95 0.59823",fill:"none",stroke:"#47ae90",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:5.0263}),N=n.a.createElement("g",{fill:"#7cbe18"},n.a.createElement("path",{transform:"matrix(-.38797 .92167 -.94359 -.33111 0 0)",d:"m26.455-294.89a14.369 13.399 0 0 1 14.454-13.303 14.369 13.399 0 0 1 14.283 13.464 14.369 13.399 0 0 1-14.422 13.334 14.369 13.399 0 0 1-14.316-13.433"}),n.a.createElement("path",{d:"m381.82 53.647a14.548 13.868 0 0 1 14.635-13.769 14.548 13.868 0 0 1 14.461 13.934 14.548 13.868 0 0 1-14.602 13.8 14.548 13.868 0 0 1-14.494-13.903"}),n.a.createElement("path",{transform:"rotate(6.991)",d:"m535.03-8.104a15.338 13.475 0 0 1 15.429-13.379 15.338 13.475 0 0 1 15.246 13.54 15.338 13.475 0 0 1-15.394 13.41 15.338 13.475 0 0 1-15.281-13.509"}),n.a.createElement("path",{transform:"matrix(.96832 -.24973 .34982 .93682 0 0)",d:"m553.8 295.78a13.505 14.124 0 0 1 13.585-14.023 13.505 14.124 0 0 1 13.424 14.192 13.505 14.124 0 0 1-13.555 14.056 13.505 14.124 0 0 1-13.455-14.16"}),n.a.createElement("path",{transform:"rotate(-7.7398)",d:"m640.47 368.59a14.293 14.974 0 0 1 14.378-14.867 14.293 14.974 0 0 1 14.207 15.046 14.293 14.974 0 0 1-14.346 14.901 14.293 14.974 0 0 1-14.24-15.012"}),n.a.createElement("path",{transform:"matrix(.72472 .68904 -.68946 .72433 0 0)",d:"m757.09-162.3a13.867 15.055 0 0 1 13.95-14.948 13.867 15.055 0 0 1 13.784 15.128 13.867 15.055 0 0 1-13.918 14.983 13.867 15.055 0 0 1-13.816-15.094"}),n.a.createElement("path",{d:"m541.51 503.86a14.293 12.932 0 0 1 14.378-12.839 14.293 12.932 0 0 1 14.207 12.994 14.293 12.932 0 0 1-14.346 12.869 14.293 12.932 0 0 1-14.24-12.965"}),n.a.createElement("rect",{transform:"matrix(.51426 -.85763 .8277 .56117 0 0)",x:27.875,y:300.32,width:12.696,height:57.145,rx:5.0899,ry:5.4125}),n.a.createElement("rect",{transform:"matrix(.97667 -.21475 .1601 .9871 0 0)",x:377.01,y:144.36,width:12.696,height:57.145,rx:5.0899,ry:5.4125}),n.a.createElement("rect",{transform:"matrix(.92916 .36968 -.42078 .90716 0 0)",x:516.4,y:-142.66,width:12.696,height:57.145,rx:5.0899,ry:5.4125}),n.a.createElement("rect",{transform:"matrix(.6805 .73275 -.78689 .6171 0 0)",x:505.14,y:-382.95,width:13.988,height:63.243,rx:5.6083,ry:5.9901}),n.a.createElement("rect",{transform:"matrix(.10548 .99442 -.99975 .022273 0 0)",x:286.64,y:-664.61,width:13.988,height:63.243,rx:5.6083,ry:5.9901}),n.a.createElement("rect",{transform:"matrix(-.49204 .87057 -.82656 -.56285 0 0)",x:-43.809,y:-783.73,width:13.988,height:63.243,rx:5.6083,ry:5.9901}),n.a.createElement("rect",{transform:"matrix(-.86389 .50368 -.42996 -.90285 0 0)",x:-293.53,y:-714.5,width:13.988,height:63.243,rx:5.6083,ry:5.9901}),n.a.createElement("path",{transform:"rotate(-22.787)",d:"m260.89 240.63a12.251 9.1883 0 0 1 12.324-9.1227 12.251 9.1883 0 0 1 12.178 9.2326 12.251 9.1883 0 0 1-12.296 9.1438 12.251 9.1883 0 0 1-12.206-9.2116"}),n.a.createElement("path",{transform:"rotate(38.827)",d:"m515.93-268.69a11.57 8.848 0 0 1 11.639-8.7848 11.57 8.848 0 0 1 11.501 8.8906 11.57 8.848 0 0 1-11.613 8.8052 11.57 8.848 0 0 1-11.528-8.8705"}),n.a.createElement("path",{transform:"rotate(-21.188)",d:"m513.02 433.82a9.8689 11.911 0 0 1 9.9277-11.826 9.8689 11.911 0 0 1 9.8098 11.968 9.8689 11.911 0 0 1-9.9052 11.853 9.8689 11.911 0 0 1-9.8324-11.941"}),n.a.createElement("path",{transform:"rotate(-41.94)",d:"m140.58 714.37a11.57 9.1883 0 0 1 11.639-9.1227 11.57 9.1883 0 0 1 11.501 9.2326 11.57 9.1883 0 0 1-11.613 9.1438 11.57 9.1883 0 0 1-11.528-9.2116"}),n.a.createElement("rect",{transform:"rotate(-25.545)",x:466.24,y:465.42,width:23.481,height:12.591,rx:5.0899,ry:5.4125}),n.a.createElement("rect",{transform:"rotate(42.88)",x:501.2,y:-304.25,width:12.251,height:23.141,rx:5.0899,ry:5.4125}),n.a.createElement("rect",{transform:"rotate(-27.788)",x:245.49,y:264.58,width:12.251,height:23.141,rx:5.0899,ry:5.4125}),n.a.createElement("rect",{transform:"rotate(-42.226)",x:142.13,y:688.93,width:12.251,height:23.141,rx:5.0899,ry:5.4125}),n.a.createElement("path",{transform:"rotate(11.53)",d:"m468.92-9.5545a12.251 9.1883 0 0 1 12.324-9.1227 12.251 9.1883 0 0 1 12.178 9.2326 12.251 9.1883 0 0 1-12.296 9.1438 12.251 9.1883 0 0 1-12.206-9.2117"}),n.a.createElement("rect",{transform:"rotate(6.5296)",x:474.53,y:33.489,width:12.251,height:23.141,rx:5.0899,ry:5.4125}),n.a.createElement("path",{transform:"rotate(116.44)",d:"m4.5652-733.84a12.251 9.1883 0 0 1 12.324-9.1227 12.251 9.1883 0 0 1 12.178 9.2326 12.251 9.1883 0 0 1-12.296 9.1438 12.251 9.1883 0 0 1-12.206-9.2116"}),n.a.createElement("rect",{transform:"rotate(111.44)",x:75.082,y:-728.51,width:12.251,height:23.141,rx:5.0899,ry:5.4125}),n.a.createElement("path",{transform:"rotate(171.6)",d:"m-419.07-540.93a12.251 9.1883 0 0 1 12.324-9.1227 12.251 9.1883 0 0 1 12.178 9.2326 12.251 9.1883 0 0 1-12.296 9.1438 12.251 9.1883 0 0 1-12.206-9.2116"}),n.a.createElement("rect",{transform:"rotate(166.6)",x:-363.76,y:-573.27,width:12.251,height:23.141,rx:5.0899,ry:5.4125})),H=function(e){var t=e.svgRef,a=e.title,r=B(e,["svgRef","title"]);return n.a.createElement("svg",_({width:"100%",height:"100%",viewBox:"0 0 741 646",ref:t},r),a?n.a.createElement("title",null,a):null,O,j,W,D,I,N)},Y=n.a.forwardRef((function(e,t){return n.a.createElement(H,_({svgRef:t},e))})),A=(a.p,a(11));function R(){var e=Object(k.a)(["\n    width: 100%;\n    height: 100%;\n\n    #gHeart{        \n        transition: fill .3s;\n    }\n    svg:hover > #gHeart{\n        /*transform: rotateZ(360deg);*/\n        fill: red;\n        animation: ",";\n        animation-duration: .5s;\n        animation-fill-mode: forwards;\n    }\n    svg:hover #outerHead,\n    svg:hover #innerHead,\n    svg:hover #face{\n        animation: "," .5s ease forwards; \n    }\n"]);return R=function(){return e},e}function T(){var e=Object(k.a)(["\n    0%{\n        transform: translateY(0%);\n    }\n    50%{\n        transform: translateY(4%);\n    }\n    100%{\n        transform: translateY(0%);\n    }\n"]);return T=function(){return e},e}function S(){var e=Object(k.a)(["\n    0%{\n        transform: translateY(0)\n    }\n    20%{\n        transform: translateY(6%)\n    }\n    40%{\n        transform: translateY(-4%)\n    }\n    60%{\n        transform: translateY(3%)\n    }\n    80%{\n        transform: translateY(-2%)\n    }\n    100%{\n        transform: translateY(0)\n    }\n"]);return S=function(){return e},e}var L=Object(A.b)(S()),P=Object(A.b)(T()),U=A.a.div(R(),L,P),q=function(){return n.a.createElement(U,null,n.a.createElement(Y,null))},z=function(){return n.a.createElement("div",{className:w.a.ChatDescription},n.a.createElement("header",null,n.a.createElement("div",{className:w.a.LogoContainer},n.a.createElement(q,null)),n.a.createElement("h3",null,"CoBit-Bot")),n.a.createElement("section",null,n.a.createElement("p",null,"Este es un ChatBot en desarrollo, si quiere informaci\xf3n mas detallada haga ",n.a.createElement("a",{href:"https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019",target:"_blank",rel:"noopener noreferrer"},"Click aqu\xed"))))},K=a(22),G=function(){var e=Object(r.useRef)(),t=function(t){e.current.scrollLeft=t?e.current.scrollWidth:0};return n.a.createElement("div",{className:i.a.App,ref:e},n.a.createElement("div",{className:i.a.ButtonNavigator},n.a.createElement("button",{onClick:function(){return t(!0)}},n.a.createElement("p",null,"Ir al Chat"),n.a.createElement(K.b,null)),n.a.createElement("button",{onClick:function(){return t(!1)}},n.a.createElement(K.a,null),n.a.createElement("p",null,"Ir a la descripci\xf3n"))),n.a.createElement("div",{className:i.a.ChatContainer},n.a.createElement(v,null),n.a.createElement(z,null)))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={App:"App_App__wVoBD",ChatContainer:"App_ChatContainer__229st",ButtonNavigator:"App_ButtonNavigator__2Nai6"}}},[[47,1,2]]]);
//# sourceMappingURL=main.23f81b8b.chunk.js.map