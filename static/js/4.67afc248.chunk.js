(this["webpackJsonpway-1"]=this["webpackJsonpway-1"]||[]).push([[4],{298:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__13Stm",dialogsItems:"Dialogs_dialogsItems__2F_XI",messages:"Dialogs_messages__dfQ9m",inputBlock:"Dialogs_inputBlock__SLgls"}},299:function(e,s,a){e.exports={dialog:"DialogItem_dialog__1d3g2",active:"DialogItem_active__1MTTb"}},300:function(e,s,a){e.exports={message:"Message_message__uNlBl"}},306:function(e,s,a){"use strict";a.r(s);a(1);var t=a(16),i=a(131),n=a(0),c=a(298),o=a.n(c),d=a(13),l=a(299),g=a.n(l),r=function(e){var s="/dialogs/1"+e.id;return Object(n.jsx)("div",{className:g.a.dialog,children:Object(n.jsxs)(d.b,{to:s,activeClassName:g.a.active,children:[" ",e.name," "]})})},m=a(300),j=a.n(m),u=function(e){return Object(n.jsx)("div",{className:j.a.message,children:Object(n.jsx)("div",{children:e.message})})},b=a(11),x=a(93),_=a(132),O=a(78),f=a(37),h=Object(O.a)(50),v=Object(_.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)(x.a,{component:f.b,validate:[O.b,h],name:"newMessageText",placeholder:"Enter your message"}),Object(n.jsx)("button",{children:"Send"})]})})),p=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(n.jsx)(r,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(n.jsx)(u,{message:e.message},e.id)}));return e.isAuth?Object(n.jsxs)("div",{className:o.a.dialogs,children:[Object(n.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(n.jsx)("div",{className:o.a.messages,children:Object(n.jsxs)("div",{children:[t," "]})}),Object(n.jsx)("div",{className:o.a.inputBlock,children:Object(n.jsx)(v,{onSubmit:function(s){e.sendMessageActionCreator(s.newMessageText)}})})]}):Object(n.jsx)(b.a,{to:"/login"})},M=a(101),w=a(9);s.default=Object(w.d)(Object(t.b)((function(e){return{dialogsPage:e.dialogsPage,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessageActionCreator:function(s){e(Object(i.b)(s))}}})),M.a)(p)}}]);
//# sourceMappingURL=4.67afc248.chunk.js.map