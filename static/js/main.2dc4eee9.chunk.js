(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[0],{129:function(e,t,n){e.exports={message:"Message_message__28aa8"}},133:function(e,t,n){e.exports={users:"Users_users__2r5Ge",selectedPage:"Users_selectedPage__21xQ4",pages:"Users_pages__3LeqV"}},134:function(e,t,n){e.exports={preloader:"Preloader_preloader__1X58S"}},135:function(e,t,n){e.exports={content:"Profile_content__33cQd"}},136:function(e,t,n){e.exports={description:"ProfileInfo_description__1FWdy",userImg:"ProfileInfo_userImg__3Lm_R"}},137:function(e,t,n){e.exports={mypost:"MyPosts_mypost__c-Uf_",button:"MyPosts_button__3JaKz"}},167:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var s=n(0),r=(n(167),n(65)),a=n.n(r),i=n(1),c=n.n(i),o=(n(96),n(7)),u=n(12),l=n(13),d=n(29),j=n(30),b=n(33),p=n(32),f=n(34),g=n.n(f),h=function(){return Object(s.jsx)("div",{className:g.a.nav,children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/profile",activeClassName:g.a.active,children:"Profile"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/dialogs",activeClassName:g.a.active,children:"Messages"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/news",activeClassName:g.a.active,children:"News"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/music",activeClassName:g.a.active,children:"Music"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/settings",activeClassName:g.a.active,children:"Settings"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/users",activeClassName:g.a.active,children:"Users"})}),Object(s.jsx)("li",{})]})})},m=n(38),O=n(5),x="SEND-MESSAGE",A={messages:[{id:1,message:"Hello, i'm first message"},{id:2,message:"Hello, I'm second message"},{id:3,message:"Hello, I'm third message"},{id:4,message:"Hello, I'm fourth message"}],dialogs:[{id:1,name:"Anna"},{id:1,name:"Roman"},{id:1,name:"Renat"},{id:1,name:"Anatoly"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=Object(O.a)(Object(O.a)({},e),{},{messages:Object(m.a)(e.messages)});return t.message&&n.messages.push({id:6,message:t.message}),Object(O.a)({},n);default:return e}},E=n(69),I=n.n(E),w=n(91),U=n.n(w),S=function(e){return Object(s.jsx)("div",{className:U.a.dialogItem,children:Object(s.jsx)(l.b,{to:"/dialogs/",className:U.a.dialogItem,children:e.name})})},L=n(129),F=n.n(L),P=function(e){return Object(s.jsx)("div",{className:F.a.message,children:e.message})},R=n(126),N=n(127),C=n(56),y=n(52),D=n.n(y),T=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,i=n&&r;return Object(s.jsxs)("div",{className:D.a.formControl+" "+(i?D.a.error:""),children:[Object(s.jsx)("div",{children:a}),i&&Object(s.jsx)("span",{children:r})]})},k=function(e){var t=e.input,n=(e.meta,Object(C.a)(e,["input","meta"]));return Object(s.jsx)(T,Object(O.a)(Object(O.a)({},e),{},{children:Object(s.jsx)("textarea",Object(O.a)(Object(O.a)({},t),n))}))},H=function(e){var t=e.input,n=(e.meta,Object(C.a)(e,["input","meta"]));return Object(s.jsx)(T,Object(O.a)(Object(O.a)({},e),{},{children:Object(s.jsx)("input",Object(O.a)(Object(O.a)(Object(O.a)({},t),e),n))}))},Q=function(e){if(!e)return"Filed is required"},X=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e)}},M=X(100),B=Object(N.a)({form:"dialogAddMessageForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(R.a,{component:k,name:"newMessageBody",validate:[Q,M]})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Send"})})]})})),z=n(10),G=function(e){return{isAuth:e.Auth.isAuth}};function W(e){return Object(z.b)(G)((function(t){var n=t.isAuth,r=Object(C.a)(t,["isAuth"]);return n?Object(s.jsx)(e,Object(O.a)({},r)):Object(s.jsx)(u.a,{to:"/login"})}))}var Z=Object(o.d)(W,Object(z.b)((function(e){return{dialogPage:e.DialogPage,isAuth:e.Auth.isAuth}}),(function(e){return{sendMessage:function(t){return e(function(e){return{type:x,message:e}}(t))}}})))((function(e){var t=e.dialogPage.dialogs.map((function(e,t){return Object(s.jsx)(S,{name:e.name},t)})),n=e.dialogPage.messages.map((function(e,t){return Object(s.jsx)(P,{message:e.message},t)}));if(!e.isAuth)return Object(s.jsx)(u.a,{to:"/login"});return Object(s.jsxs)("div",{className:I.a.dialogs,children:[Object(s.jsx)("div",{className:I.a.dialogsItems,children:t}),Object(s.jsx)("div",{className:I.a.messages,children:Object(s.jsx)("div",{children:n})}),Object(s.jsx)(B,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})})),q=n(11),V=n.n(q),_=n(19),Y=n(132),K=n.n(Y).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"8c49b133-928a-4a57-b997-bbf0ea6abb17"}}),J={getUsers:function(e,t){return K.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return K.post("/follow/".concat(e))},unfollowUser:function(e){return K.delete("/follow/".concat(e))}},$=function(e){return K.get("/profile/".concat(e))},ee=function(e){return K.get("/profile/status/".concat(e))},te=function(e){return K.put("/profile/status",{status:e})},ne=function(){return K.get("/auth/me")},se=function(e,t,n){return K.post("/auth/login",{email:e,password:t,rememberMe:n})},re=function(){return K.delete("/auth/login")},ae=function(e,t,n,s){return e.map((function(e){return e[n]===t?Object(O.a)(Object(O.a)({},e),s):e}))},ie={users:[],currentPage:1,pageSize:10,totalUserCount:0,isFetching:!1,toggleIsFollowing:[]},ce=function(e){return{type:"FOLLOW",userId:e}},oe=function(e){return{type:"UNFOLLOW",userId:e}},ue=function(e){return{type:"SET_USERS",users:e}},le=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},de=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},je=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,id:t}},be=function(){var e=Object(_.a)(V.a.mark((function e(t,n,s,r){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:0===e.sent.data.resultCode&&t(r(n)),t(je(!1,n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,s,r){return e.apply(this,arguments)}}(),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:ae(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{users:ae(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalUserCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(O.a)(Object(O.a)({},e),{},{toggleIsFollowing:t.isFetching?[].concat(Object(m.a)(e.toggleIsFollowing),[t.id]):Object(m.a)(e.toggleIsFollowing.filter((function(e){return e!==t.id})))});default:return e}},fe=n(133),ge=n.n(fe),he=function(e,t){var n=e.user,r=e.followUser,a=e.unfollowUser,i=e.toggleIsFollowing;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:n.name}),Object(s.jsx)("div",{children:n.status?n.status:"I don't have a status"}),Object(s.jsx)("div",{children:n.followed?Object(s.jsx)("button",{disabled:i.some((function(e){return n.id===e})),onClick:function(){a(n.id)},children:"Unfollow"}):Object(s.jsx)("button",{disabled:i.some((function(e){return n.id===e})),onClick:function(){r(n.id)},children:"Follow"})}),Object(s.jsx)("div",{children:n.status}),Object(s.jsx)(l.b,{to:"/profile/".concat(n.id),children:Object(s.jsx)("img",{src:null!==n.photos.small?n.photos.small:"data:image/jpeg;base64,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",alt:"user"})})]},t)},me=n(55),Oe=n(71),xe=n.n(Oe),Ae=function(e){for(var t=e.totalItemsCount,n=e.portionSize,r=e.currentPage,a=e.onPageChanged,c=Math.ceil(t/n),o=[],u=1;u<=c;u++)o.push(u);var l=Math.ceil(c/n),d=Object(i.useState)(1),j=Object(me.a)(d,2),b=j[0],p=j[1],f=(b-1)*n,g=b*n;return Object(s.jsxs)(s.Fragment,{children:[b>1&&Object(s.jsx)("button",{onClick:function(){return p(b-1)},children:"PREVIOUS"}),o.filter((function(e){return e>f&&e<=g})).map((function(e){return Object(s.jsxs)("span",{onClick:function(){a(e)},className:r===e?"".concat(xe.a.page," ").concat(xe.a.currentPage):xe.a.page,children:[" ",e]})})),l>b&&Object(s.jsx)("button",{onClick:function(){return p(b+1)},children:"NEXT"})]})};function ve(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:ge.a.users,children:[Object(s.jsx)(Ae,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:e.pageSize,totalItemsCount:e.totalUserCount}),e.users.map((function(t){return Object(s.jsx)(he,{user:t,unfollowUser:e.unfollowUser,followUser:e.followUser,toggleIsFollowing:e.toggleIsFollowing},t.id)}))]})})}var Ee=n(303),Ie=n(134),we=n.n(Ie);function Ue(){return Object(s.jsx)("div",{className:we.a.preloader,children:Object(s.jsx)(Ee.a,{color:"secondary"})})}var Se=function(e){return e.Users.users},Le=function(e){return e.Users.pageSize},Fe=function(e){return e.Users.currentPage},Pe=function(e){return e.Users.totalUserCount},Re=function(e){return e.Users.toggleIsFollowing},Ne=function(e){return e.Users.isFetching},Ce=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(Ue,{}):null,Object(s.jsx)(ve,{users:this.props.users,currentPage:this.props.currentPage,followUser:this.props.followUser,onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,setCurrentPage:this.props.setCurrentPage,totalUserCount:this.props.totalUserCount,unfollowUser:this.props.unfollowUser,toggleFollowingProgress:this.props.toggleFollowingProgress,toggleIsFollowing:this.props.toggleIsFollowing})]})}}]),n}(c.a.Component),ye=Object(o.d)(Object(z.b)((function(e){return{users:Se(e),pageSize:Le(e),totalUserCount:Pe(e),currentPage:Fe(e),isFetching:Ne(e),toggleIsFollowing:Re(e)}}),{followUser:function(e){return function(){var t=Object(_.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(je(!0,e)),t.next=3,be(n,e,J.followUser.bind(J),ce);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUser:function(e){return function(){var t=Object(_.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(je(!0,e)),t.next=3,be(n,e,J.unfollowUser.bind(J),oe);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:ue,setCurrentPage:le,toggleFollowingProgress:je,getUsers:function(e,t){return function(){var n=Object(_.a)(V.a.mark((function n(s){var r;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(de(!0)),n.next=3,J.getUsers(e,t);case 3:r=n.sent,s(de(!1)),s(ue(r.items)),s({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount}),s(le(e));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),W)(Ce),De=n(135),Te=n.n(De),ke=n(136),He=n.n(ke),Qe=function(e){var t=Object(i.useState)(!1),n=Object(me.a)(t,2),r=n[0],a=n[1],c=Object(i.useState)(e.status),o=Object(me.a)(c,2),u=o[0],l=o[1];Object(i.useEffect)((function(){l(e.status)}),[e.status]);return Object(s.jsxs)(s.Fragment,{children:[!r&&Object(s.jsx)("div",{children:Object(s.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status||"------"})}),r&&Object(s.jsx)("div",{children:Object(s.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(u)},value:u,onChange:function(e){l(e.currentTarget.value)}})})]})};function Xe(e){if(!e.profile)return Object(s.jsx)(Ue,{});var t=null!==e.profile.photos.small?e.profile.photos.small:e.profile.photos.large;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:He.a.userImg,children:null!==t&&Object(s.jsx)("img",{src:e.profile.photos.large,width:"100",alt:"img"})}),Object(s.jsx)(Qe,{status:e.status,updateStatus:e.UpdateStatus})]})}var Me={posts:[{id:1,message:"Its a first post",likes:3},{id:2,message:"Its a second post",likes:3},{id:3,message:"Its a third post",likes:3},{id:4,message:"Its a fourth post",likes:3},{id:5,message:"Its a fifth post",likes:3}],profile:null,status:""},Be=function(e){return{type:"SET-USER-PROFILE",profile:e}},ze=function(e){return{type:"SET-STATUS",status:e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.postText.trim(),s=Object(O.a)(Object(O.a)({},e),{},{posts:Object(m.a)(e.posts)});if(n){var r={id:1,message:n,likes:5};s.posts.push(r)}return s;case"SET-USER-PROFILE":return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(O.a)(Object(O.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(O.a)(Object(O.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},We=n(137),Ze=n.n(We),qe=n(72),Ve=n.n(qe),_e=function(e){return Object(s.jsxs)("div",{className:Ve.a.post,children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg",alt:"img"})}),Object(s.jsxs)("div",{className:Ve.a.text,children:[" ",e.message]}),Object(s.jsxs)("div",{className:Ve.a.likes,children:[" likes ",e.likes]})]})},Ye=X(10),Ke=c.a.memo((function(e){var t=e.posts.map((function(e,t){return Object(s.jsx)(_e,{id:e.id,message:e.message,likes:e.likes},t)}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Je,{onSubmit:function(t){e.addPost(t.newPostBody)}}),Object(s.jsx)("div",{className:Ze.a.posts,children:t})]})})),Je=Object(N.a)({form:"profileAddPostForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)(R.a,{placeholder:"Post message",component:k,name:"newPostBody",validate:[Q,Ye]}),Object(s.jsx)("button",{children:"Add post"})]})})),$e=Object(z.b)((function(e){return{posts:e.ProfilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",postText:e}}(t))}}}))(Ke),et=function(e){return Object(s.jsxs)("div",{className:Te.a.content,children:[Object(s.jsx)(Xe,{profile:e.profile,status:e.status,UpdateStatus:e.UpdateStatus}),Object(s.jsx)($e,{})]})},tt=n(40),nt={userId:null,login:null,email:null,isAuth:!1},st=function(e,t,n,s){return{type:"SET-USER-DATA",data:{userId:e,login:t,email:n,isAuth:s}}},rt=function(){return function(){var e=Object(_.a)(V.a.mark((function e(t){var n,s,r,a,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,r=s.id,a=s.login,i=s.email,t(st(r,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(O.a)(Object(O.a)({},e),t.data);default:return e}},it=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="14575"),this.props.getUserProfile(e),this.props.SetStatus(e)}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(et,{profile:this.props.profile,status:this.props.status,UpdateStatus:this.props.UpdateStatus})})}}]),n}(c.a.Component),ct=Object(o.d)(Object(z.b)((function(e){return{profile:e.ProfilePage.profile,isAuth:e.Auth.isAuth,status:e.ProfilePage.status}}),{setUserProfile:Be,getUserProfile:function(e){return function(){var t=Object(_.a)(V.a.mark((function t(n){var s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(e);case 2:s=t.sent,n(Be(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},SetStatus:function(e){return function(){var t=Object(_.a)(V.a.mark((function t(n){var s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(e);case 2:s=t.sent,n(ze(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},UpdateStatus:function(e){return function(){var t=Object(_.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:0===t.sent.data.resultCode&&n(ze(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),u.g)(it),ot=n(95),ut=n.n(ot),lt=function(e){return Object(s.jsxs)("div",{className:ut.a.header,children:[Object(s.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU",alt:"img"}),Object(s.jsx)("div",{className:ut.a.loginBlock,children:e.isAuth?Object(s.jsxs)("div",{children:[e.login," ",Object(s.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(s.jsx)(l.b,{to:"/login",children:"Login"})})]})},dt=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(lt,Object(O.a)({},this.props))})}}]),n}(c.a.Component),jt=Object(z.b)((function(e){return{isAuth:e.Auth.isAuth,login:e.Auth.login}}),{setAuthUserData:st,getAuthUserData:rt,logout:function(){return function(){var e=Object(_.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:0===e.sent.data.resultCode&&t(st(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(dt),bt=X(100),pt=Object(N.a)({form:"login"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(R.a,{placeholder:"email",name:"email",component:H,validate:[Q,bt]})}),Object(s.jsx)("div",{children:Object(s.jsx)(R.a,{placeholder:"password",name:"password",type:"password",component:H,validate:[Q,bt]})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(R.a,{type:"checkbox",name:"rememberMe",component:H}),"remember me"]}),Object(s.jsx)("div",{className:D.a.formSummaryError,children:e.error}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Login"})})]})})),ft=Object(z.b)((function(e){return{isAuth:e.Auth.isAuth,userId:e.Auth.userId}}),{login:function(e,t,n){return function(){var s=Object(_.a)(V.a.mark((function s(r){var a,i;return V.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,se(e,t,n);case 2:if(0!==(a=s.sent).data.resultCode){s.next=8;break}return s.next=6,r(rt());case 6:s.next=10;break;case 8:i=a.data.messages.length>0?a.data.messages[0]:"Some error",r(Object(tt.a)("login",{_error:i}));case 10:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(s.jsx)(u.a,{to:"/profile"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)(pt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),gt={initialized:!1},ht=function(){return function(e){e(rt()).then((function(){e({type:"SET-INITIALIZED"})}))}},mt=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.InitializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(s.jsx)(l.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(jt,{}),Object(s.jsx)(h,{}),Object(s.jsx)("div",{className:"App_content",children:Object(s.jsxs)(u.d,{children:[Object(s.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(s.jsx)(u.a,{to:"/profile"})}}),Object(s.jsx)(u.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(ct,{})}}),Object(s.jsx)(u.b,{path:"/dialogs",render:function(){return Object(s.jsx)(Z,{})}}),Object(s.jsx)(u.b,{path:"/news"}),Object(s.jsx)(u.b,{path:"/music"}),Object(s.jsx)(u.b,{path:"/settings"}),Object(s.jsx)(u.b,{path:"/users",render:function(){return Object(s.jsx)(ye,{})}}),Object(s.jsx)(u.b,{path:"/login",render:function(){return Object(s.jsx)(ft,{})}})]})})]})}):Object(s.jsx)(Ue,{})}}]),n}(c.a.Component),Ot=Object(o.d)(Object(z.b)((function(e){return{initialized:e.app.initialized}}),{InitializeApp:ht}))(mt),xt=n(138),At=n(128),vt=Object(o.c)({DialogPage:v,ProfilePage:Ge,Users:pe,Auth:at,form:At.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZED":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}}}),Et=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,It=Object(o.e)(vt,Et(Object(o.a)(xt.a))),wt=Object(o.d)(u.g,Object(z.b)((function(e){return{initialized:e.app.initialized}}),{InitializeApp:ht}))(Ot),Ut=function(){return Object(s.jsx)(l.a,{children:Object(s.jsx)(z.a,{store:It,children:Object(s.jsx)(wt,{})})})};a.a.render(Object(s.jsx)(Ut,{}),document.getElementById("root"))},34:function(e,t,n){e.exports={nav:"Navbar_nav__1dWpI",active:"Navbar_active__3b0QJ"}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2Arzz",error:"FormsControls_error__1ZLMY",formSummaryError:"FormsControls_formSummaryError__3q8eY"}},69:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1rZ3k",dialogItems:"Dialogs_dialogItems__PNT3P",messages:"Dialogs_messages__285JR"}},71:function(e,t,n){e.exports={currentPage:"Pagination_currentPage__CzKxC",page:"Pagination_page__1uqcG"}},72:function(e,t,n){e.exports={post:"Post_post__-tayL",text:"Post_text__3c3Dz",likes:"Post_likes__2Id0C"}},91:function(e,t,n){e.exports={dialogItem:"DialogsItem_dialogItem__2LSwQ",active:"DialogsItem_active__3JhD6"}},95:function(e,t,n){e.exports={header:"Header_header__1CGKd",loginBlock:"Header_loginBlock__2dPsT"}},96:function(e,t,n){}},[[291,1,2]]]);
//# sourceMappingURL=main.2dc4eee9.chunk.js.map