(this["webpackJsonpway-1"]=this["webpackJsonpway-1"]||[]).push([[3],{301:function(t,e,s){t.exports={myPostsBlock:"myPosts_myPostsBlock__TtKEC",posts:"myPosts_posts__10skA"}},302:function(t,e,s){t.exports={item:"Post_item__FVuvM"}},303:function(t,e,s){t.exports={profilePage:"Profile_profilePage__1z4ZQ"}},304:function(t,e,s){t.exports={profileInfo:"ProfileInfo_profileInfo__205bj",descriptionBlock:"ProfileInfo_descriptionBlock__3AwYs",mainPhoto:"ProfileInfo_mainPhoto__13b1I"}},305:function(t,e,s){"use strict";s.r(e);var o=s(3),n=s(28),i=s(29),r=s(31),a=s(30),c=s(0),u=s(1),p=s.n(u),l=s(16),j=s(99),d=s(93),f=s(132),h=s(78),b=s(37),O=s(301),m=s.n(O),x=s(302),P=s.n(x),v=function(t){return Object(c.jsxs)("div",{className:P.a.item,children:[Object(c.jsx)("img",{src:"https://vjoy.cc/wp-content/uploads/2020/10/prikolnye-avatarki-vk-dlya-parnej_023.jpg"}),t.message,Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"like"})," ",t.likeCount]})]})},g=Object(h.a)(10),_=Object(f.a)({form:"profileAddPostForm"})((function(t){return Object(c.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(d.a,{component:b.b,name:"newPostText",placeholder:"Enter your post text",validate:[h.b,g]})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Add post"})})]})})),k=function(t){console.log("render");var e=t.posts.map((function(t){return Object(c.jsx)(v,{message:t.message,likeCount:t.likesCount},t.id)}));return Object(c.jsxs)("div",{className:m.a.myPostsBlock,children:[Object(c.jsx)("h3",{children:"My posts"}),Object(c.jsx)(_,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(c.jsx)("div",{className:m.a.posts,children:e})]})},y=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))(k),S=s(303),w=s.n(S),I=s(41),C=s(304),N=s.n(C),B=s(110),A=s(133),T=function(t){var e=Object(u.useState)(!1),s=Object(A.a)(e,2),o=s[0],n=s[1],i=Object(u.useState)(t.status),r=Object(A.a)(i,2),a=r[0],p=r[1];Object(u.useEffect)((function(){p(t.status)}),[t.status]);return Object(c.jsxs)("div",{children:[!o&&Object(c.jsx)("div",{children:Object(c.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"------"})}),o&&Object(c.jsx)("div",{children:Object(c.jsx)("input",{autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(a)},value:a,onChange:function(t){p(t.currentTarget.value)}})})]})},U=function(t){var e=t.profile,s=t.status,o=t.updateStatus,n=t.isOwner,i=t.savePhoto;if(!e)return Object(c.jsx)(I.a,{});return Object(c.jsxs)("div",{className:N.a.profileInfo,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:e.photos.large||B.a,className:N.a.mainPhoto}),n&&Object(c.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&i(t.target.files[0])}})]}),Object(c.jsxs)("div",{className:N.a.descriptionBlock,children:[Object(c.jsx)(T,{status:s,updateStatus:o}),"description"]})]})},z=function(t){return Object(c.jsxs)("div",{className:w.a.profilePage,children:[Object(c.jsx)(U,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto}),Object(c.jsx)("div",{className:"myPosts",children:Object(c.jsx)(y,{})})]})},D=s(11),E=s(9),F=function(t){Object(r.a)(s,t);var e=Object(a.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(c.jsx)(z,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(p.a.Component);e.default=Object(E.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.f,savePhoto:j.e}),D.f)(F)}}]);
//# sourceMappingURL=3.8ae46ed7.chunk.js.map