"use strict";(self.webpackChunknetflix_last_clone=self.webpackChunknetflix_last_clone||[]).push([[16],{270:function(e,n,i){var a=i(9439),l=i(2791),r={value:"",isTouched:!1},t=function e(n,i){return"INPUT"===i.type?{value:i.value,isTouched:n.isTouched}:"BLUR"===i.type?{isTouched:!0,value:n.value}:e};n.Z=function(e){var n=(0,l.useReducer)(t,r),i=(0,a.Z)(n,2),o=i[0],s=i[1],u=e(o.value),_=!u&&o.isTouched;return{value:o.value,isValid:u,hasError:_,valueChangeHandler:function(e){s({type:"INPUT",value:e.target.value})},inputBlurHandler:function(){s({type:"BLUR"})}}}},2016:function(e,n,i){i.r(n),i.d(n,{default:function(){return _}});var a={login:"Login_login__4AsBn",logo__image:"Login_logo__image__HlYhl",signin__btn:"Login_signin__btn__Mm7zh",login__gradient:"Login_login__gradient__deP7d",login__body:"Login_login__body__2r6UA",input__form:"Login_input__form__qEOnf",invalid:"Login_invalid__VsIHv","error-text":"Login_error-text__-sTGx"},l=i(8840),r=i(7689),t=i(1087),o=i(270),s=i(184);var u=function(){var e=(0,o.Z)((function(e){return e.includes("@")})),n=e.value,i=e.isValid,u=e.hasError,_=e.valueChangeHandler,c=e.inputBlurHandler,d=!1;i&&(d=!0);var g=(0,r.s0)();localStorage.getItem("mail");var h=u?"invalid":"input__form";return(0,s.jsxs)("div",{className:a.login,children:[(0,s.jsxs)("div",{className:a.login__contents,children:[(0,s.jsx)("img",{className:a.logo__image,src:l,alt:"logo"}),(0,s.jsx)(t.rU,{to:"/lb-en/signin",children:(0,s.jsx)("button",{className:a.signin__btn,children:"SignIn"})}),(0,s.jsx)("div",{className:a.login__gradient})]}),(0,s.jsxs)("div",{className:a.login__body,children:[(0,s.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),(0,s.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),(0,s.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),(0,s.jsx)("div",{className:a[h],children:(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i&&(localStorage.setItem("mail",n),g("/lb-en/signup",{push:!0}))},children:[(0,s.jsx)("input",{type:"email",id:"email",placeholder:"Email address",required:!0,onChange:_,onBlur:c,value:n}),(0,s.jsx)("button",{disabled:!d,children:"Get Started"})]})})]})]})},_=function(){return(0,s.jsx)(u,{})}},8840:function(e,n,i){e.exports=i.p+"static/media/580b57fcd9996e24bc43c529.774e8c1632ac9433608b.png"}}]);
//# sourceMappingURL=16.8f36b58a.chunk.js.map