(this["webpackJsonpway-1"]=this["webpackJsonpway-1"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},119:function(e,t,n){e.exports={users:"Users_users__3sYNg",usersImg:"Users_usersImg__piGhd",selectPage:"Users_selectPage__3AawV",selectedPage:"Users_selectedPage__QumV6"}},128:function(e,t,n){e.exports={selectPage:"Pagination_selectPage__WDGWq",pageNumber:"Pagination_pageNumber__HFvPv",selectedPage:"Pagination_selectedPage___jfyv"}},162:function(e,t,n){"use strict";t.a=n.p+"static/media/userPhoto.848e5527.png"},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return x}));var r=n(18),c=n.n(r),a=n(32),s=n(61),i=n(7),u=n(31),o=function(e){return u.c.get("profile/"+e).then((function(e){return e.data}))},l=function(e){return u.c.get("profile/status/"+e).then((function(e){return e.data}))},d=function(e){return u.c.put("profile/status/",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},j=function(e){return u.c.put("profile",e).then((function(e){return e.data}))},b=n(68),h={posts:[{id:1,message:"Hey, how are you?",likesCount:23},{id:2,message:"it's my first post",likesCount:9},{id:3,message:"I'm so boring",likesCount:44},{id:4,message:"today i do some cool stuff",likesCount:53},{id:5,message:"Adorable dog",likesCount:109}],profile:null,status:""},O={addPost:function(e){return{type:"NW/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"NW/PROFILE/SET-USER-PROFILE",profile:e}},setStatus:function(e){return{type:"NW/PROFILE/SET-STATUS",status:e}},deletePost:function(e){return{type:"NW/PROFILE/DELETE-POST",postId:e}},savePhotoSuccess:function(e){return{type:"NW/PROFILE/SAVE-PHOTO-SUCCESS",photos:e}}},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(O.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===t.sent.resultCode&&n(O.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:0===(r=t.sent).resultCode&&n(O.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,j(e);case 3:if(0!==(s=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(x(a)),t.next=10;break;case 9:throw Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(b.a)("edit-profile",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n(O.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NW/PROFILE/ADD-POST":var n={id:e.posts.length+1,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case"NW/PROFILE/SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"NW/PROFILE/SET-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"NW/PROFILE/SAVE-PHOTO-SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"NW/PROFILE/DELETE-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(61),c=n(7),a={dialogs:[{id:1,name:"Akashi"},{id:2,name:"Shenko"},{id:3,name:"Rina"},{id:4,name:"Venev"},{id:5,name:"Garage"}],messages:[{id:1,message:"hey bro"},{id:2,message:"yo"},{id:3,message:"How's life?"},{id:4,message:"not complain"},{id:5,message:"how about go some bar?"}]},s={sendMessage:function(e){return{type:"SN/DIALOGS/SEND-MESSAGE",newMessageText:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND-MESSAGE":var n={id:e.messages.length+1,message:t.newMessageText};return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},218:function(e,t,n){"use strict";n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return T})),n.d(t,"b",(function(){return U}));var r=n(18),c=n.n(r),a=n(32),s=n(61),i=n(7),u={"messages-received":[],"status-changed":[]},o=null,l=function(){h("pending"),setTimeout(O,3e3)},d=function(e){var t=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(t)}))},f=function(){h("ready")},j=function(){h("error"),console.error("REFRESH PAGE")},b=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.removeEventListener("open",f),null===(r=o)||void 0===r||r.removeEventListener("error",j)},h=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function O(){var e;b(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),h("pending"),o.addEventListener("close",l),o.addEventListener("message",d),o.addEventListener("open",f),o.addEventListener("error",j)}var p=function(){O()},g=function(){var e;u["messages-received"]=[],u["status-changed"]=[],b(),null===(e=o)||void 0===e||e.close()},m=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},v=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},x=function(e){var t;null===(t=o)||void 0===t||t.send(e)},S=n(463),E={messages:[],status:"pending"},_=function(e){return{type:"FN/chat/MESSAGES_RECEIVED",payload:{messages:e}}},y=function(e){return{type:"FN/chat/STATUS_CHANGED",payload:{status:e}}},w=null,P=function(e){return null===w&&(w=function(t){e(_(t))}),w},C=null,N=function(e){return null===C&&(C=function(t){e(y(t))}),C},I=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(),m("messages-received",P(t)),m("status-changed",N(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v("messages-received",P(t)),v("status-changed",N(t)),g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FN/chat/MESSAGES_RECEIVED":return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),Object(s.a)(t.payload.messages.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(S.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"FN/chat/STATUS_CHANGED":return Object(i.a)(Object(i.a)({},e),{},{status:t.payload.status});default:return e}}},226:function(e,t,n){e.exports={headerLogo:"Header_headerLogo__3Z1Ko",header:"Header_header__oFMyV",header__inner:"Header_header__inner__2s3Cf",loginBlock:"Header_loginBlock__7oiKz",navLink:"Header_navLink__ai75N"}},269:function(e,t,n){},271:function(e,t,n){},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(221),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2dd72eef-802e-4320-bbb3-7057aa545a8d"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},456:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),s=n(28),i=n.n(s),u=(n(269),n(164)),o=n(165),l=n(217),d=n(214),f=(n(270),n(271),n(40)),j=n(27),b=n(22),h=n(220),O=Object(h.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),p=function(e){return e.usersPage.pageSize},g=function(e){return e.usersPage.filter},m=function(e){return e.usersPage.totalCount},v=function(e){return e.usersPage.currentPage},x=function(e){return e.usersPage.isFetching},S=function(e){return e.usersPage.followingInProgress},E=n(79),_=n(7),y=n(18),w=n.n(y),P=n(32),C=n(61),N=n(31),I={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return N.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return N.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return N.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},T=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)({},e),r):e}))},U={users:[],pageSize:10,totalCount:0,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},R=function(e){return{type:"NW/USERS/FOllOW",userId:e}},k=function(e){return{type:"NW/USERS/UNFOllOW",userId:e}},F=function(e){return{type:"NW/USERS/SET_CURRENT_PAGE",currentPage:e}},L=function(e){return{type:"NW/USERS/SET_USERS",users:e}},A=function(e){return{type:"NW/USERS/SET_FILTER",payload:Object(_.a)({},e)}},W=function(e){return{type:"NW/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},G=function(e){return{type:"NW/USERS/TOGGLE_IS_FETCHING",isFetching:e}},D=function(e,t){return{type:"NW/USERS/TOGGLE_IS_FOLLOWING",isFetching:e,userId:t}},H=function(e,t,n){return function(){var r=Object(P.a)(w.a.mark((function r(c){var a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(G(!0)),c(F(e)),c(A(n)),r.next=5,I.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(G(!1)),c(L(a.items)),c(W(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},M=function(){var e=Object(P.a)(w.a.mark((function e(t,n,r,c){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(c(n)),t(D(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NW/USERS/FOllOW":return Object(_.a)(Object(_.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!0})});case"NW/USERS/UNFOllOW":return Object(_.a)(Object(_.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!1})});case"NW/USERS/SET_CURRENT_PAGE":return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case"NW/USERS/SET_USERS":return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case"NW/USERS/SET_FILTER":return Object(_.a)(Object(_.a)({},e),{},{filter:Object(_.a)({},t.payload)});case"NW/USERS/SET_TOTAL_USERS_COUNT":return Object(_.a)(Object(_.a)({},e),{},{totalCount:t.totalCount});case"NW/USERS/TOGGLE_IS_FETCHING":return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case"NW/USERS/TOGGLE_IS_FOLLOWING":return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(C.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!=t.userId}))]});default:return e}},V=n(117),K=n(161),q=n(128),Z=n.n(q),B=n(6),J=n.n(B),Q=function(e){for(var t=e.totalCount,n=e.pageSize,a=e.onPageChanged,s=void 0===a?function(e){return e}:a,i=e.currentPage,u=void 0===i?1:i,o=e.portionSize,l=void 0===o?20:o,d=Math.ceil(t/n),f=[],j=1;j<=d;j++)f.push(j);var b=Math.ceil(d/l),h=Object(c.useState)(1),O=Object(K.a)(h,2),p=O[0],g=O[1],m=(p-1)*l+1,v=p*l;return Object(r.jsxs)("div",{className:Z.a.selectPage,children:[p>1&&Object(r.jsx)("button",{onClick:function(){g(p-1)},children:"Prev"}),f.filter((function(e){return e>=m&&e<=v})).map((function(e){return Object(r.jsx)("span",{onClick:function(t){s(e)},className:J()(Object(V.a)({},Z.a.selectedPage,u===e),Z.a.pageNumber),children:e},e)})),b>p&&Object(r.jsx)("button",{onClick:function(){g(p+1)},children:"Next"})]})},X=n(98),Y=n(119),$=n.n(Y),ee=n(162),te=function(e){var t=e.user,n=Object(X.a)(e,["user"]);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(f.c,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{className:$.a.usersImg,src:null!=t.photos.small?t.photos.small:ee.a})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.city"}),Object(r.jsx)("div",{children:"user.location.country"})]})]})]})},ne=n(106),re=function(e){return{}},ce=a.a.memo((function(e){var t=Object(b.d)(g);return Object(r.jsx)("div",{children:Object(r.jsx)(ne.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:re,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(r.jsxs)(ne.b,{children:[Object(r.jsx)(ne.a,{type:"text",name:"term",placeholder:"Find by name"}),Object(r.jsxs)(ne.a,{as:"select",name:"friend",children:[Object(r.jsx)("option",{value:"null",children:"All"}),Object(r.jsx)("option",{value:"true",children:"Only followed"}),Object(r.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(r.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),ae=n(156),se=function(){var e=Object(b.d)(m),t=Object(b.d)(v),n=Object(b.d)(O),a=Object(b.d)(p),s=Object(b.d)(S),i=Object(b.d)(g),u=Object(b.c)(),o=Object(j.g)();Object(c.useEffect)((function(){var e=ae.parse(o.location.search.substr(1)),n=t,r=i;switch(e.page&&(n=Number(e.page)),e.term&&(r=Object(_.a)(Object(_.a)({},r),{},{term:e.term})),e.friend){case"null":r=Object(_.a)(Object(_.a)({},r),{},{friend:null});break;case"true":r=Object(_.a)(Object(_.a)({},r),{},{friend:!0});break;case"false":r=Object(_.a)(Object(_.a)({},r),{},{friend:!1})}u(H(n,a,r))}),[]),Object(c.useEffect)((function(){var e={};i.term&&(e.term=i.term),null!==i.friend&&(e.friend=String(i.friend)),1!==t&&(e.page=String(t)),o.push({pathname:"/developers",search:ae.stringify(e)})}),[i,t]);var l=function(e){u(function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(n,e,I.unfollow.bind(I),k);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},d=function(e){u(function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(n,e,I.follow.bind(I),R);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(r.jsxs)("div",{className:$.a.users,children:[Object(r.jsx)(ce,{onFilterChanged:function(e){u(H(1,a,e))}}),Object(r.jsx)(Q,{currentPage:t,onPageChanged:function(e){u(H(e,a,i))},totalCount:e,pageSize:a}),Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(te,{user:e,followingInProgress:s,unfollow:l,follow:d},e.id)}))})]})},ie=function(e){var t=Object(b.d)(x);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:e.pageTitle}),t?Object(r.jsx)(E.a,{}):null,Object(r.jsx)(se,{})]})},ue=n(68),oe=function(){return N.c.get("auth/me").then((function(e){return e.data}))},le=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return N.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},de=function(){return N.c.delete("auth/login")},fe=function(){return N.c.get("security/get-captcha-url").then((function(e){return e.data}))},je={id:null,email:null,login:null,isAuth:!1,captchaUrl:null,userId:null},be=function(e,t,n,r){return{type:"FN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},he=function(e){return{type:"FN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captcha:e}}},Oe=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,r,c,a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:(n=e.sent).resultCode===N.a.Success&&(r=n.data,c=r.id,a=r.email,s=r.login,t(be(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:n=e.sent,r=n.url,t(he(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FN/auth/SET_USER_DATA":case"FN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},me=n(213),ve=n(107),xe=n(59),Se=n(95),Ee=n.n(Se),_e=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,c=e.captchaUrl;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(xe.c)("Email","email",[ve.b],xe.a),Object(xe.c)("Password","password",[ve.b],xe.a,{type:"password"}),Object(xe.c)(void 0,"rememberMe",[],xe.a,{type:"checkbox"},"Remember me"),c&&Object(r.jsx)("img",{src:c}),c&&Object(xe.c)("Symbols from image","captcha",[ve.b],xe.a),n&&Object(r.jsx)("div",{className:Ee.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Sign in"})})]})})),ye=function(e){var t=Object(b.d)((function(e){return e.auth.captchaUrl})),n=Object(b.d)((function(e){return e.auth.isAuth})),c=Object(b.c)();return n?Object(r.jsx)(j.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(_e,{captchaUrl:t,onSubmit:function(e){var t,n,r,a;c((t=e.email,n=e.password,r=e.rememberMe,a=e.captcha,function(){var e=Object(P.a)(w.a.mark((function e(c){var s,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(t,n,r,a);case 2:(s=e.sent).resultCode===N.a.Success?c(Oe()):(s.resultCode===N.b.CaptchaIsRequired&&c(pe()),i=s.messages.length>0?s.messages[0]:"some Error",c(Object(ue.a)("login",{_error:i})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})]})},we=n(25),Pe={initialized:!1},Ce=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},Ie=n(163),Te=n(196),Ue={},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return e},ke=n(225),Fe=n(216),Le=n(218),Ae=Object(we.c)({app:Ne,profilePage:Ie.b,dialogsPage:Te.b,sidebar:Re,usersPage:z,auth:ge,form:Fe.a,chat:Le.a}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,Ge=Object(we.e)(Ae,We(Object(we.a)(ke.a)));window.__store__=Ge;var De=Ge;function He(e){return function(t){return Object(r.jsx)(a.a.Suspense,{fallback:Object(r.jsx)(E.a,{}),children:Object(r.jsx)(e,Object(_.a)({},t))})}}var Me=n(160),ze=n(461),Ve=n(462),Ke=n(466),qe=n(467),Ze=n(464),Be=n(465),Je=n(130),Qe=n(231),Xe=n.n(Qe),Ye=function(e){return e.auth.isAuth},$e=function(e){return e.auth.login},et=function(e){var t;return null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small},tt=n(226),nt=n.n(tt),rt=function(){var e=ze.a.Header,t=Object(b.d)(et),n=Object(b.d)(Ye),c=Object(b.d)($e),a=Object(b.c)();return Object(r.jsx)(e,{className:"header",children:Object(r.jsxs)(Ze.a,{children:[Object(r.jsx)(Be.a,{span:1,children:Object(r.jsx)("img",{className:nt.a.headerLogo,src:"https://pngimg.com/uploads/circle/circle_PNG50.png"})}),Object(r.jsx)(Be.a,{span:19,children:Object(r.jsx)(Me.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(r.jsx)(Me.a.Item,{children:Object(r.jsx)(f.b,{to:"/developers",children:" Developers "})},"1")})}),n?Object(r.jsxs)(r.Fragment,{children:[" ",Object(r.jsx)(Be.a,{span:1,children:Object(r.jsx)(Xe.a,{alt:c||"",style:{backgroundColor:"#87d068"},src:t})}),Object(r.jsx)(Be.a,{span:3,children:Object(r.jsx)(Je.a,{onClick:function(){a(function(){var e=Object(P.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})," "]}):Object(r.jsxs)(Be.a,{span:4,children:[" ",Object(r.jsxs)(Je.a,{children:[" ",Object(r.jsx)(f.b,{to:"/login",children:"Login"})," "]})," "]})]})})},ct=Me.a.SubMenu,at=ze.a.Content,st=ze.a.Footer,it=ze.a.Sider,ut=a.a.lazy((function(){return n.e(4).then(n.bind(null,477))})),ot=a.a.lazy((function(){return n.e(5).then(n.bind(null,478))})),lt=He(a.a.lazy((function(){return n.e(3).then(n.bind(null,476))}))),dt=He(ut),ft=He(ot),jt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){console.error("some Error")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)(ze.a,{children:[Object(r.jsx)(rt,{}),Object(r.jsxs)(at,{style:{padding:"0 50px"},children:[Object(r.jsxs)(Ve.a,{style:{margin:"16px 0"},children:[Object(r.jsx)(Ve.a.Item,{children:"Home"}),Object(r.jsx)(Ve.a.Item,{children:"List"}),Object(r.jsx)(Ve.a.Item,{children:"App"})]}),Object(r.jsxs)(ze.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(r.jsx)(it,{className:"site-layout-background",width:200,children:Object(r.jsxs)(Me.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},children:[Object(r.jsxs)(ct,{icon:Object(r.jsx)(Ke.a,{}),title:"My Profile",children:[Object(r.jsx)(Me.a.Item,{children:Object(r.jsx)(f.b,{to:"/profile",children:" Profile "})},"1"),Object(r.jsx)(Me.a.Item,{children:Object(r.jsx)(f.b,{to:"/dialogs",children:" Message "})},"2")]},"sub1"),Object(r.jsxs)(ct,{icon:Object(r.jsx)(qe.a,{}),title:"Global",children:[Object(r.jsx)(Me.a.Item,{children:Object(r.jsx)(f.b,{to:"/developers",children:" Developers "})},"5"),Object(r.jsx)(Me.a.Item,{children:Object(r.jsx)(f.b,{to:"/Chat",children:" Main Chat "})},"6")]},"sub2")]})}),Object(r.jsx)(at,{style:{padding:"0 24px",minHeight:280},children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(lt,{})}}),Object(r.jsx)(j.b,{path:"/developers",render:function(){return Object(r.jsx)(ie,{pageTitle:"Samurai"})}}),Object(r.jsx)(j.b,{path:"/dialogs",render:function(){return Object(r.jsx)(dt,{})}}),Object(r.jsx)(j.b,{path:"/login",render:function(){return Object(r.jsx)(ye,{})}}),Object(r.jsx)(j.b,{path:"/Chat",render:function(){return Object(r.jsx)(ft,{})}}),Object(r.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(lt,{})}}),Object(r.jsx)(j.b,{exact:!0,path:"/",render:function(e){var t=e.location;return Object(r.jsx)(j.a,{to:t.hash.replace("#","")})}}),Object(r.jsx)(j.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})]}),Object(r.jsx)(st,{style:{textAlign:"center"},children:"Samurai Social Network \xa92021 Created by RadySlav"})]}):Object(r.jsx)(E.a,{})}}]),n}(c.Component),bt=Object(we.d)(j.h,Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){e(Ce())}))}}}))(jt),ht=function(){return Object(r.jsx)(f.a,{children:Object(r.jsx)(b.a,{store:De,children:Object(r.jsx)(bt,{})})})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(ht,{})}),document.getElementById("root"))},59:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(7),c=n(98),a=n(2),s=(n(0),n(151)),i=n(95),u=n.n(i),o=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,s=n&&r;return Object(a.jsxs)("div",{className:u.a.formControl+" "+(s?u.a.error:""),children:[Object(a.jsx)("div",{children:c}),s&&Object(a.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsxs)(o,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},n),t))," "]}))},d=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,["input","meta"]));return Object(a.jsxs)(o,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(a.jsx)("input",Object(r.a)(Object(r.a)({},n),t))," "]}))};function f(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,Object(r.a)({placeholder:e,name:t,component:c,validate:n},i))," ",u]})}},79:function(e,t,n){"use strict";var r=n(2),c=(n(0),n.p+"static/media/preloader.ff9c62d0.svg");t.a=function(){return Object(r.jsx)("img",{src:c})}},95:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3QZ_N",error:"FormsControls_error__1np90",formSummaryError:"FormsControls_formSummaryError__3djTV"}}},[[456,1,2]]]);
//# sourceMappingURL=main.173c89fb.chunk.js.map