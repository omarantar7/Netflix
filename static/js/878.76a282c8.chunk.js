"use strict";(self.webpackChunknetflix_last_clone=self.webpackChunknetflix_last_clone||[]).push([[878],{1857:function(e,n,t){var i=t(2791),s=t(297),r=t(184);n.Z=function(){return(0,r.jsx)(i.Fragment,{children:(0,r.jsx)("div",{className:s.Z.bg,children:(0,r.jsx)("div",{className:s.Z.rotate})})})}},3281:function(e,n,t){var i=t(9439),s=t(2791),r=t(184);n.Z=function(){var e=(0,s.useState)(!1),n=(0,i.Z)(e,2),t=n[0],a=n[1];return{toggle:(0,r.jsx)("h4",{onClick:function(){a((function(e){return!e}))},children:t?"HIDE":"SHOW"}),inputType:t?"text":"password"}}},270:function(e,n,t){var i=t(9439),s=t(2791),r={value:"",isTouched:!1},a=function e(n,t){return"INPUT"===t.type?{value:t.value,isTouched:n.isTouched}:"BLUR"===t.type?{isTouched:!0,value:n.value}:e};n.Z=function(e){var n=(0,s.useReducer)(a,r),t=(0,i.Z)(n,2),o=t[0],u=t[1],l=e(o.value),c=!l&&o.isTouched;return{value:o.value,isValid:l,hasError:c,valueChangeHandler:function(e){u({type:"INPUT",value:e.target.value})},inputBlurHandler:function(){u({type:"BLUR"})}}}},7878:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var i=t(8683),s=t(9439),r=t(2791),a=t(8840),o={signup:"signup_signup__lIuS2",layout:"signup_layout__NYDdd",content:"signup_content__8E1hn",first:"signup_first__zK-vy",second:"signup_second__8zMz6",invalid:"signup_invalid__2kYw8","worng-message":"signup_worng-message__39vuX",check:"signup_check__d3d8O","error-text":"signup_error-text__cIkXM"},u=t(8124),l=t(9434),c=t(7689),d=t(1087),h=t(270),p=t(6036),g=t(3281),f=t(1857),m=t(184),v=function(){var e=(0,r.useState)({Loading:!1,wrongInput:!1}),n=(0,s.Z)(e,2),t=n[0],v=n[1],x=(0,g.Z)(),_=x.toggle,j=x.inputType;localStorage.getItem("Token");var y=(0,h.Z)((function(e){return e.trim().length>5&&e.trim().length<60})),k=y.value,w=y.isValid,Z=y.hasError,I=y.valueChangeHandler,N=y.inputBlurHandler,T=!1;w&&(T=!0);var b=localStorage.getItem("mail"),S=(0,r.useRef)(b),C=(0,l.I0)(),U=(0,c.s0)();return(0,m.jsxs)("div",{className:o.signup,children:[(0,m.jsxs)("div",{className:o.layout,children:[(0,m.jsx)("img",{src:a,alt:"logo"}),(0,m.jsx)("h3",{onClick:function(){U("/lb-en/signin",{push:!0})},children:"Sign In"})]}),(0,m.jsxs)("div",{className:o.content,children:[(0,m.jsx)("span",{children:"STEP 1 OF 1"}),t.wrongInput&&(0,m.jsxs)("p",{className:o["worng-message"],children:[(0,m.jsx)(p.fB,{style:{height:"1.5rem",width:"1.5rem"}}),"you already signedUp using this email"," ",(0,m.jsx)(d.rU,{to:"/lb-en/signin",style:{textDecoration:"none",color:"#fff"},children:"signin?"}),"or signup with another email!!"]}),(0,m.jsx)("h1",{children:"Create a password to start your membership"}),(0,m.jsx)("h4",{children:"Just a few more steps and you're finished! We hate paperwork, too."}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w&&(v((function(e){return(0,i.Z)((0,i.Z)({},e),{},{Loading:!0})})),function(){var e=S.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJple3qN5HATXE9Cxs87hLpWQ6Tnh-iUo",{method:"POST",body:JSON.stringify({email:e,password:k,returnSecureToken:!0}),headers:{"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){v((function(e){return(0,i.Z)((0,i.Z)({},e),{},{wrongInput:!0})}))}))})).then((function(e){C(u.G.loginHandler(e.idToken)),C(u.G.userLoggedIn()),localStorage.removeItem("mail"),U("/",{replace:!0})})).catch((function(e){v((function(e){return(0,i.Z)((0,i.Z)({},e),{},{Loading:!1})}))}))}())},children:[(0,m.jsx)("div",{className:o.first,children:(0,m.jsx)("input",{type:"email",placeholder:"Email",required:!0,defaultValue:b,ref:S})}),(0,m.jsxs)("div",{className:o[Z?"invalid":"second"],children:[(0,m.jsx)("input",{type:j,placeholder:"Add a password",onChange:I,onBlur:N,value:k}),(0,m.jsx)("span",{children:_})]}),Z&&(0,m.jsx)("h4",{className:o["error-text"],children:"Your password must contain between 6 and 60 characters."}),(0,m.jsxs)("div",{className:o.check,children:[(0,m.jsx)("input",{type:"checkbox"}),(0,m.jsx)("span",{children:"Please do not email me Netflix special offers"})]}),(0,m.jsx)("button",{disabled:!T,children:t.Loading?(0,m.jsx)(f.Z,{}):"Sign UP"})]})]})]})},x=function(){return(0,m.jsx)(v,{})}},297:function(e,n){n.Z={rotate:"Loading_rotate__ttUPU",spinner:"Loading_spinner__7ImP5"}},8840:function(e,n,t){e.exports=t.p+"static/media/580b57fcd9996e24bc43c529.774e8c1632ac9433608b.png"}}]);
//# sourceMappingURL=878.76a282c8.chunk.js.map