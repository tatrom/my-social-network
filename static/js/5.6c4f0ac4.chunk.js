(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[5],{244:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2Arzz",error:"FormsControls_error__1ZLMY",formSummaryError:"FormsControls_formSummaryError__3q8eY"}},245:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return j}));var s=n(3),a=n(64),r=n(1),i=n(244),c=n.n(i),o=(n(0),function(e){var t=e.meta,n=t.touched,s=t.error,a=e.children,i=n&&s;return Object(r.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:""),children:[Object(r.jsx)("div",{children:a}),i&&Object(r.jsx)("span",{children:s})]})}),u=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(r.jsx)(o,Object(s.a)(Object(s.a)({},e),{},{children:Object(r.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return Object(r.jsx)(o,Object(s.a)(Object(s.a)({},e),{},{children:Object(r.jsx)("input",Object(s.a)(Object(s.a)(Object(s.a)({},t),e),n))}))}},246:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var s=function(e){if(!e)return"Filed is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e)}}},265:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1rZ3k",dialogItems:"Dialogs_dialogItems__PNT3P",messages:"Dialogs_messages__285JR"}},266:function(e,t,n){e.exports={dialogItem:"DialogsItem_dialogItem__2LSwQ",active:"DialogsItem_active__3JhD6"}},267:function(e,t,n){e.exports={message:"Message_message__28aa8"}},314:function(e,t,n){"use strict";n.r(t);var s=n(79),a=n(1),r=(n(0),n(265)),i=n.n(r),c=n(8),o=n(266),u=n.n(o),j=function(e){return Object(a.jsx)("div",{className:u.a.dialogItem,children:Object(a.jsx)(c.b,{to:"/dialogs/",className:u.a.dialogItem,children:e.name})})},d=n(267),l=n.n(d),m=function(e){return Object(a.jsx)("div",{className:l.a.message,children:e.message})},b=n(114),g=n(115),O=n(245),f=n(246),h=n(7),x=Object(f.a)(100),_=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{component:O.b,name:"newMessageBody",validate:[f.b,x]})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"Send"})})]})})),v=n(18),p=n(12),I=n(78);t.default=Object(p.d)(I.a,Object(v.b)((function(e){return{dialogPage:e.DialogPage,isAuth:e.Auth.isAuth}}),(function(e){return{sendMessage:function(t){return e(Object(s.a)(t))}}})))((function(e){var t=e.dialogPage.dialogs.map((function(e,t){return Object(a.jsx)(j,{name:e.name},t)})),n=e.dialogPage.messages.map((function(e,t){return Object(a.jsx)(m,{message:e.message},t)}));if(!e.isAuth)return Object(a.jsx)(h.a,{to:"/login"});return Object(a.jsxs)("div",{className:i.a.dialogs,children:[Object(a.jsx)("div",{className:i.a.dialogsItems,children:t}),Object(a.jsx)("div",{className:i.a.messages,children:Object(a.jsx)("div",{children:n})}),Object(a.jsx)(_,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})}))}}]);
//# sourceMappingURL=5.6c4f0ac4.chunk.js.map