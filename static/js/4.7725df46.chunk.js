(this["webpackJsonpway-1"]=this["webpackJsonpway-1"]||[]).push([[4],{483:function(e,s,a){"use strict";var t=a(3),i=a(0),n=a.n(i),c=a(484),o=a.n(c),l=n.a.memo((function(e){var s,a,i;return Object(t.jsxs)("div",{className:o.a.message,children:[Object(t.jsx)("img",{src:null===(s=e.chatMessage)||void 0===s?void 0:s.photo,className:o.a.avatar})," ",Object(t.jsx)("b",{children:null===(a=e.chatMessage)||void 0===a?void 0:a.userName}),Object(t.jsx)("br",{}),!!e.message&&e.message,!e.message&&(null===(i=e.chatMessage)||void 0===i?void 0:i.message),Object(t.jsx)("hr",{})]})}));s.a=l},484:function(e,s,a){e.exports={message:"Message_message__uNlBl",avatar:"Message_avatar__1X8Yo"}},486:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__13Stm",dialogsItems:"Dialogs_dialogsItems__2F_XI",messages:"Dialogs_messages__dfQ9m",inputBlock:"Dialogs_inputBlock__SLgls"}},487:function(e,s,a){e.exports={dialog:"DialogItem_dialog__1d3g2",active:"DialogItem_active__1MTTb"}},492:function(e,s,a){"use strict";a.r(s);var t=a(27),i=a(208),n=a(3),c=(a(0),a(486)),o=a.n(c),l=a(43),r=a(487),d=a.n(r),g=function(e){var s="/dialogs/"+e.id;return Object(n.jsx)("div",{className:d.a.dialog,children:Object(n.jsxs)(l.c,{to:s,activeClassName:d.a.active,children:[" ",e.name," "]})})},u=a(483),j=a(225),m=a(116),b=a(61),h=Object(m.a)(50),v=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.c)("Enter your message","newMessageText",[m.b,h],b.b),Object(n.jsx)("button",{children:"Send"})]})})),O=a(30),x=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(n.jsx)(g,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(n.jsx)(u.a,{message:e.message},e.id)}));return Object(n.jsxs)("div",{className:o.a.dialogs,children:[Object(n.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(n.jsx)("div",{className:o.a.messages,style:{height:"615px",overflowY:"auto"},children:Object(n.jsxs)("div",{children:[s.dialogs.map((function(e){return Object(n.jsxs)(O.b,{path:"/dialogs/".concat(e.id),children:[" ",t]})}))," "]})}),Object(n.jsx)("div",{className:o.a.inputBlock,children:Object(n.jsx)(v,{onSubmit:function(s){e.sendMessage(s.newMessageText)}})})]})},_=a(8),f=a(106);var p=a(29);s.default=Object(p.d)(Object(t.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:i.a.sendMessage}),(function(e){return Object(t.b)((function(e){return{isAuth:e.auth.isAuth}}),{})((function(s){var a=s.isAuth,t=Object(f.a)(s,["isAuth"]);return a?Object(n.jsx)(e,Object(_.a)({},t)):Object(n.jsx)(O.a,{to:"/login"})}))}))(x)}}]);
//# sourceMappingURL=4.7725df46.chunk.js.map