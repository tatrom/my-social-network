(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[0],{15:function(e,t,s){e.exports={nav:"Navbar_nav__1dWpI",active:"Navbar_active__3b0QJ"}},26:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1rZ3k",dialogItems:"Dialogs_dialogItems__PNT3P",messages:"Dialogs_messages__285JR"}},27:function(e,t,s){e.exports={mypost:"MyPosts_mypost__c-Uf_",button:"MyPosts_button__3JaKz"}},28:function(e,t,s){e.exports={post:"Post_post__-tayL",text:"Post_text__3c3Dz",likes:"Post_likes__2Id0C"}},32:function(e,t,s){e.exports={dialogItem:"DialogsItem_dialogItem__2LSwQ",active:"DialogsItem_active__3JhD6"}},34:function(e,t,s){e.exports={users:"Users_users__2r5Ge",selectedPage:"Users_selectedPage__21xQ4",pages:"Users_pages__3LeqV"}},35:function(e,t,s){e.exports={description:"ProfileInfo_description__1FWdy",userImg:"ProfileInfo_userImg__3Lm_R"}},36:function(e,t,s){e.exports={header:"Header_header__1CGKd",loginBlock:"Header_loginBlock__2dPsT"}},46:function(e,t,s){e.exports={message:"Message_message__28aa8"}},48:function(e,t,s){e.exports={preloader:"Preloader_preloader__1X58S"}},49:function(e,t,s){e.exports={content:"Profile_content__33cQd"}},53:function(e,t,s){},54:function(e,t,s){},81:function(e,t,s){"use strict";s.r(t);var n=s(1),i=(s(53),s(0)),r=s.n(i),a=(s(54),s(5)),o=s(15),c=s.n(o),l=function(){return Object(n.jsx)("div",{className:c.a.nav,children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/profile",activeClassName:c.a.active,children:"Profile"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/dialogs",activeClassName:c.a.active,children:"Messages"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/news",activeClassName:c.a.active,children:"News"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/music",activeClassName:c.a.active,children:"Music"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/settings",activeClassName:c.a.active,children:"Settings"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"/users",activeClassName:c.a.active,children:"Users"})}),Object(n.jsx)("li",{})]})})},u=s(4),d=s(17),g=s(2),j="UPDATE-NEW-MESSAGE-BODY",p="SEND-MESSAGE",h={messages:[{id:1,message:"Hello, i'm first message"},{id:2,message:"Hello, I'm second message"},{id:3,message:"Hello, I'm third message"},{id:4,message:"Hello, I'm fourth message"}],dialogs:[{id:1,name:"Anna"},{id:1,name:"Roman"},{id:1,name:"Renat"},{id:1,name:"Anatoly"}],newMessageBody:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var s=Object(g.a)({},e);return s.newMessageBody=t.body,s;case p:var n=e.newMessageBody.trim(),i=Object(g.a)(Object(g.a)({},e),{},{messages:Object(d.a)(e.messages)});return n&&(i.newMessageBody="",i.messages.push({id:6,message:n})),Object(g.a)({},i);default:return e}},m=s(26),f=s.n(m),O=s(32),A=s.n(O),x=function(e){return Object(n.jsx)("div",{className:A.a.dialogItem,children:Object(n.jsx)(a.c,{to:"/dialogs/",className:A.a.dialogItem,children:e.name})})},v=s(46),E=s.n(v),I=function(e){return Object(n.jsx)("div",{className:E.a.message,children:e.message})},w=s(10),F=Object(w.b)((function(e){return{dialogPage:e.DialogPage}}),(function(e){return{newMessageChange:function(t){e({type:j,body:t})},sendMessage:function(){return e({type:p})}}}))((function(e){var t=e.dialogPage.dialogs.map((function(e,t){return Object(n.jsx)(x,{name:e.name},t)})),s=e.dialogPage.messages.map((function(e,t){return Object(n.jsx)(I,{message:e.message},t)})),i=e.dialogPage.newMessageBody;return Object(n.jsxs)("div",{className:f.a.dialogs,children:[Object(n.jsx)("div",{className:f.a.dialogsItems,children:t}),Object(n.jsxs)("div",{className:f.a.messages,children:[Object(n.jsx)("div",{children:s}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{value:i,placeholder:"Enter your message",onChange:function(t){var s=t.target.value;e.newMessageChange(s)},onKeyPress:function(t){return function(t){"Enter"===t.key&&e.sendMessage()}(t)}})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})})),U=s(18),P=s(19),L=s(22),R=s(21),N="FOLLOW",y="UNFOLLOW",C="SET_USERS",D="SET_CURRENT_PAGE",Q="SET_TOTAL_USERS_COUNT",H="TOGGLE_IS_FETCHING",T="TOGGLE_IS_FOLLOWING_PROGRESS",X={users:[],currentPage:1,pageSize:10,totalUserCount:0,isFetching:!1,toggleIsFollowing:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case y:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case C:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case D:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case Q:return Object(g.a)(Object(g.a)({},e),{},{totalUserCount:t.totalUsersCount});case H:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case T:return Object(g.a)(Object(g.a)({},e),{},{toggleIsFollowing:t.isFetching?[].concat(Object(d.a)(e.toggleIsFollowing),[t.id]):Object(d.a)(e.toggleIsFollowing.filter((function(e){return e!==t.id})))});default:return e}},M=s(34),S=s.n(M),k=s(20),G=s.n(k),W=G.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"fae18199-e7fc-4874-8413-33891c1f13c5"}}),z=function(e,t){return W.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Z=function(e){return W.post("/follow/".concat(e)).then((function(e){return e.data}))},q=function(e){return W.delete("/follow/".concat(e)).then((function(e){return e.data}))};function V(e){for(var t=Math.ceil(e.totalUserCount/e.pageSize),s=[],i=1;i<=t;i++)s.push(i);return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:S.a.users,children:[s.map((function(t,s){return Object(n.jsxs)("span",{className:e.currentPage===t?S.a.selectedPage:"",onClick:function(s){return e.onPageChanged(t)},children:[t,"/"]},s)})),e.users.map((function(t,s){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:t.name}),Object(n.jsx)("div",{children:t.status?t.status:"I don't have a status"}),Object(n.jsx)("div",{children:t.followed?Object(n.jsx)("button",{disabled:e.toggleIsFollowing.some((function(e){return t.id===e})),onClick:function(){e.toggleFollowingProgress(!0,t.id),q(t.id).then((function(s){0===s.resultCode&&e.unfollowUser(t.id),e.toggleFollowingProgress(!1,t.id)}))},children:"Unfollow"}):Object(n.jsx)("button",{disabled:e.toggleIsFollowing.some((function(e){return t.id===e})),onClick:function(){e.toggleFollowingProgress(!0,t.id),Z(t.id).then((function(s){0===s.resultCode&&e.followUser(t.id),e.toggleFollowingProgress(!1,t.id)})),e.followUser(t.id)},children:"Follow"})}),Object(n.jsx)("div",{children:t.status}),Object(n.jsx)(a.c,{to:"/profile/".concat(t.id),children:Object(n.jsx)("img",{src:null!==t.photos.small?t.photos.small:"data:image/jpeg;base64,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"})})]},s)}))]})})}var Y=s(93),K=s(48),J=s.n(K);function _(){return Object(n.jsx)("div",{className:J.a.preloader,children:Object(n.jsx)(Y.a,{color:"secondary"})})}var $=function(e){Object(L.a)(s,e);var t=Object(R.a)(s);function s(){var e;Object(U.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),z(e.props.currentPage,e.props.pageSize).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(P.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),z(this.props.currentPage,this.props.pageSize).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.items),e.props.setTotalUsersCount(t.totalCount)}))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)(_,{}):null,Object(n.jsx)(V,{users:this.props.users,currentPage:this.props.currentPage,followUser:this.props.followUser,onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,setCurrentPage:this.props.setCurrentPage,totalUserCount:this.props.totalUserCount,unfollowUser:this.props.unFollowUser,toggleFollowingProgress:this.props.toggleFollowingProgress,toggleIsFollowing:this.props.toggleIsFollowing})]})}}]),s}(r.a.Component),ee=Object(w.b)((function(e){return{users:e.Users.users,pageSize:e.Users.pageSize,totalUserCount:e.Users.totalUserCount,currentPage:e.Users.currentPage,isFetching:e.Users.isFetching,toggleIsFollowing:e.Users.toggleIsFollowing}}),{followUser:function(e){return{type:N,userId:e}},unFollowUser:function(e){return{type:y,userId:e}},setUsers:function(e){return{type:C,users:e}},setCurrentPage:function(e){return{type:D,currentPage:e}},setTotalUsersCount:function(e){return{type:Q,totalUsersCount:e}},toggleIsFetching:function(e){return{type:H,isFetching:e}},toggleFollowingProgress:function(e,t){return{type:T,isFetching:e,id:t}}})($),te=s(49),se=s.n(te),ne=s(35),ie=s.n(ne);function re(e){return e.profile?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"https://st2.depositphotos.com/1606672/5285/i/600/depositphotos_52852189-stock-photo-recreational-entrepreneur-man-with-laptop.jpg",alt:"img"})}),Object(n.jsx)("div",{className:ie.a.userImg,children:Object(n.jsx)("img",{src:e.profile.photos.large,width:"100"})}),Object(n.jsx)("div",{className:ie.a.description,children:"ava + description"})]}):Object(n.jsx)(_,{})}var ae="ADD-POST",oe="UPDATE-NEW-POST-TEXT",ce="SET-USER-PROFILE",le={posts:[{id:1,message:"Its a first post",likes:3},{id:2,message:"Its a second post",likes:3},{id:3,message:"Its a third post",likes:3},{id:4,message:"Its a fourth post",likes:3},{id:5,message:"Its a fifth post",likes:3}],newText:"",profile:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:var s=e.newText.trim(),n=Object(g.a)(Object(g.a)({},e),{},{posts:Object(d.a)(e.posts)});if(s){var i={id:1,message:s,likes:5};n.posts.push(i),n.newText=""}return n;case oe:return e.newText=t.newText,Object(g.a)({},e);case ce:return Object(g.a)(Object(g.a)({},e),{},{profile:t.profile});default:return e}},de=s(27),ge=s.n(de),je=s(28),pe=s.n(je),he=function(e){return Object(n.jsxs)("div",{className:pe.a.post,children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"https://thumbs-prod.si-cdn.com/IjbgoCcHvUa6ISjPAvS8T6DTHA8=/fit-in/1600x0/https://public-media.si-cdn.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg",alt:"img"})}),Object(n.jsxs)("div",{className:pe.a.text,children:[" ",e.message]}),Object(n.jsxs)("div",{className:pe.a.likes,children:[" likes ",e.likes]})]})},be=Object(w.b)((function(e){return{posts:e.ProfilePage.posts,newPostText:e.ProfilePage.newText}}),(function(e){return{addPost:function(){e({type:ae})},updateText:function(t){e({type:oe,newText:t})}}}))((function(e){var t=e.posts.map((function(e,t){return Object(n.jsx)(he,{id:e.id,message:e.message,likes:e.likes},t)})),s=r.a.createRef();return Object(n.jsxs)("div",{className:ge.a.mypost,children:[Object(n.jsx)("textarea",{ref:s,value:e.newPostText,onChange:function(){var t,n=null===(t=s.current)||void 0===t?void 0:t.value;void 0!==n&&e.updateText(n)},onKeyPress:function(t){return function(t){"Enter"===t.key&&e.addPost()}(t)}}),Object(n.jsx)("button",{className:ge.a.button,onClick:function(){e.addPost()},children:"Add post"}),Object(n.jsx)("div",{className:ge.a.posts,children:t})]})})),me=function(e){return Object(n.jsxs)("div",{className:se.a.content,children:[Object(n.jsx)(re,{profile:e.profile}),Object(n.jsx)(be,{})]})},fe=function(e){Object(L.a)(s,e);var t=Object(R.a)(s);function s(){return Object(U.a)(this,s),t.apply(this,arguments)}return Object(P.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t="2"),G.a.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(t)).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(me,Object(g.a)({},this.props))})}}]),s}(r.a.Component),Oe=Object(u.g)(fe),Ae=Object(w.b)((function(e){return{profile:e.ProfilePage.profile}}),{setUserProfile:function(e){return{type:ce,profile:e}}})(Oe),xe="SET_USER_DATA",ve={id:null,login:null,email:null,isAuth:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(g.a)(Object(g.a)({},e),t.data);default:return e}},Ie=s(36),we=s.n(Ie),Fe=function(e){return Object(n.jsxs)("div",{className:we.a.header,children:[Object(n.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU",alt:"img"}),Object(n.jsx)("div",{className:we.a.loginBlock,children:e.isAuth?Object(n.jsx)("span",{children:e.login}):Object(n.jsx)(a.c,{to:"/login",children:"Login"})})]})},Ue=function(e){Object(L.a)(s,e);var t=Object(R.a)(s);function s(){return Object(U.a)(this,s),t.apply(this,arguments)}return Object(P.a)(s,[{key:"componentDidMount",value:function(){var e=this;G.a.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,i=s.login,r=s.email;e.props.setAuthUserData(n,r,i,!0)}}))}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(Fe,Object(g.a)({},this.props))})}}]),s}(r.a.Component),Pe=Object(w.b)((function(e){return{isAuth:e.Auth.isAuth,login:e.Auth.login}}),{setAuthUserData:function(e,t,s,n){return{type:xe,data:{id:e,email:t,login:s,isAuth:n}}}})(Ue);var Le=function(){return Object(n.jsx)(a.b,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(Pe,{}),Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"App_content",children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(n.jsx)(u.a,{to:"/profile"})}}),Object(n.jsx)(u.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(Ae,{})}}),Object(n.jsx)(u.b,{path:"/dialogs",render:function(){return Object(n.jsx)(F,{})}}),Object(n.jsx)(u.b,{path:"/news"}),Object(n.jsx)(u.b,{path:"/music"}),Object(n.jsx)(u.b,{path:"/settings"}),Object(n.jsx)(u.b,{path:"/users",render:function(){return Object(n.jsx)(ee,{})}})]})})]})})},Re=s(23),Ne=Object(Re.b)({DialogPage:b,ProfilePage:ue,Users:B,Auth:Ee}),ye=Object(Re.c)(Ne),Ce=s(25);s.n(Ce).a.render(Object(n.jsx)(a.a,{children:Object(n.jsx)(w.a,{store:ye,children:Object(n.jsx)(Le,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.20adf451.chunk.js.map