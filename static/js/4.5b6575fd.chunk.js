(this["webpackJsonpway-1"]=this["webpackJsonpway-1"]||[]).push([[4],{468:function(e,s,a){"use strict";var t=a(2),i=a(0),n=a.n(i),c=a(469),o=a.n(c),l=n.a.memo((function(e){var s,a,i;return Object(t.jsxs)("div",{className:o.a.message,children:[Object(t.jsx)("img",{src:null===(s=e.chatMessage)||void 0===s?void 0:s.photo,className:o.a.avatar})," ",Object(t.jsx)("b",{children:null===(a=e.chatMessage)||void 0===a?void 0:a.userName}),Object(t.jsx)("br",{}),!!e.message&&e.message,!e.message&&(null===(i=e.chatMessage)||void 0===i?void 0:i.message),Object(t.jsx)("hr",{})]})}));s.a=l},469:function(e,s,a){e.exports={message:"Message_message__uNlBl",avatar:"Message_avatar__1X8Yo"}},471:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__13Stm",dialogsItems:"Dialogs_dialogsItems__2F_XI",messages:"Dialogs_messages__dfQ9m",inputBlock:"Dialogs_inputBlock__SLgls"}},472:function(e,s,a){e.exports={dialog:"DialogItem_dialog__1d3g2",active:"DialogItem_active__1MTTb"}},477:function(e,s,a){"use strict";a.r(s);var t=a(22),i=a(196),n=a(2),c=(a(0),a(471)),o=a.n(c),l=a(40),r=a(472),d=a.n(r),g=function(e){var s="/dialogs/1"+e.id;return Object(n.jsx)("div",{className:d.a.dialog,children:Object(n.jsxs)(l.c,{to:s,activeClassName:d.a.active,children:[" ",e.name," "]})})},u=a(468),j=a(213),m=a(107),b=a(59),v=Object(m.a)(50),h=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.c)("Enter your message","newMessageText",[m.b,v],b.b),Object(n.jsx)("button",{children:"Send"})]})})),O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(n.jsx)(g,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(n.jsx)(u.a,{message:e.message},e.id)}));return Object(n.jsxs)("div",{className:o.a.dialogs,children:[Object(n.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(n.jsx)("div",{className:o.a.messages,style:{height:"615px",overflowY:"auto"},children:Object(n.jsxs)("div",{children:[t," "]})}),Object(n.jsx)("div",{className:o.a.inputBlock,children:Object(n.jsx)(h,{onSubmit:function(s){e.sendMessage(s.newMessageText)}})})]})},x=a(7),_=a(98),f=a(27);var p=a(25);s.default=Object(p.d)(Object(t.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:i.a.sendMessage}),(function(e){return Object(t.b)((function(e){return{isAuth:e.auth.isAuth}}),{})((function(s){var a=s.isAuth,t=Object(_.a)(s,["isAuth"]);return a?Object(n.jsx)(e,Object(x.a)({},t)):Object(n.jsx)(f.a,{to:"/login"})}))}))(O)}}]);
//# sourceMappingURL=4.5b6575fd.chunk.js.map