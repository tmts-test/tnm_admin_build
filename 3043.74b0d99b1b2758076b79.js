"use strict";(self.webpackChunktnm_front_admin=self.webpackChunktnm_front_admin||[]).push([[3043],{3043:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var a=r(1027),n=r(2132),l=r(5619),s=r(5788),o=r(8920),m=r(2030),c=r(9492),u=r(3269),i=r(9264),d=r(8509);var p=r(531),f=r(7439),b=Object.defineProperty,x=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&g(e,r,t[r]);if(x)for(var r of x(t))h.call(t,r)&&g(e,r,t[r]);return e},w=(e,t,r)=>new Promise(((a,n)=>{var l=e=>{try{o(r.next(e))}catch(e){n(e)}},s=e=>{try{o(r.throw(e))}catch(e){n(e)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,s);o((r=r.apply(e,t)).next())}));const v=function(){const{login:e}=(0,o.A)(),t=(0,n.Zp)(),{auth:r,setInfo:b,setMenu:x,setMenuRoot:y}=(0,p.A)(),[h,g]=(0,a.useState)(!1),[v,I]=(0,a.useState)(!1),{register:N,watch:A,setError:S,setFocus:V,formState:{errors:U},handleSubmit:j}=(0,s.mN)({mode:"onSubmit",defaultValues:{username:"",password:""}}),O=A("username"),k=A("password"),{data:P,refetch:M}=(0,d.I)({queryKey:["/adm/auth/member/info"],enabled:!1}),{data:C,refetch:T}=(0,d.I)({queryKey:["/adm/auth/menu/list"],enabled:!1});(0,a.useEffect)((()=>{V("username"),V("password")}),[V]),(0,a.useEffect)((()=>{if(localStorage.removeItem("menu"),localStorage.removeItem("info"),"200100"===(null==P?void 0:P.code)&&r.isAuthenticated){b(P.result.signInInfo),localStorage.setItem("info",JSON.stringify(P.result.signInInfo));const e=null==C?void 0:C.result.authMenuList;e&&x(e),q(P.result.signInInfo.lstPwdModDtm)?e&&("/notification"===e[0].menuUrlVal&&(t(e[0].menuUrlVal),y(e[0].menuUrlVal)),t(e[1].menuUrlVal),y(e[1].menuUrlVal)):I(!0)}}),[h]);const q=e=>{if(null===e){const e=null==C?void 0:C.result.authMenuList;return e&&("/notification"===e[0].menuUrlVal&&y(e[0].menuUrlVal),y(e[1].menuUrlVal)),t("/password"),!1}const r=new Date,a=new Date(e);return!((r.getTime()-a.getTime())/864e5>=90)},z=()=>w(this,null,(function*(){try{l.A.put("/adm/auth/member/change-password-after").then((e=>{if(200===e.status){const e=null==C?void 0:C.result.authMenuList;e&&("/notification"===e[0].menuUrlVal&&t(e[0].menuUrlVal),t(e[1].menuUrlVal))}}))}catch(e){console.log(e)}}));return a.createElement(a.Fragment,null,a.createElement("div",{className:"flex justify-center items-center w-full h-screen"},a.createElement("form",{onSubmit:j((t=>w(this,null,(function*(){f.TO.test(O)?f.kW.test(k)?(yield e(t),yield M(),yield T(),g(!h)):S("password",{message:"\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"}):S("username",{message:"\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"})}))))},a.createElement("div",{className:"border-4 rounded-[30px] border-tp-100 mb-4 px-[40px] pt-[46px] pb-[36px]"},a.createElement("div",{className:"w-[514px] border-b-2 border-tg-140 pb-[20px]"},a.createElement(m.A,{icon:"logo"})),a.createElement("div",{className:"flex flex-col gap-2.5 px-[24px] pt-[30px] pb-[40px]"},a.createElement(c.A,E({type:"text",size:"md",isError:U.username,placeholder:"ID"},N("username",{required:!0}))),a.createElement(c.A,E({type:"password",size:"md",isError:U.password,placeholder:"PW"},N("password",{required:!0}))),U.username&&a.createElement("span",{className:"text-body4 text-color-alert text-center"},U.username.message),U.password&&a.createElement("span",{className:"text-body4 text-color-alert text-center"},U.password.message)),a.createElement("span",{className:"flex justify-center"},a.createElement(u.A,{type:"submit"},"Login"))),a.createElement("span",{className:"flex justify-center text-xs text-tg-100"},"Copyright\xa9 Tmoney . All rights reserved."))),a.createElement(i.A,{isShow:v},a.createElement("div",null,a.createElement("h3",{className:"font-Tmoney text-headline1 leading-10 mb-[10px] text-center"},"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd \uc548\ub0b4"),a.createElement("p",{className:"text-body1 leading-6 mb-[40px]"},"90\uc77c \uc774\uc0c1 \ub3d9\uc77c\ud55c \ube44\ubc00\ubc88\ud638\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4",a.createElement("br",null),"\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ub97c \uc704\ud574 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud574 \uc8fc\uc138\uc694"),a.createElement("div",{className:"flex gap-[30px] justify-center"},a.createElement(u.A,{type:"button",color:"secondary",size:"lg",onClick:()=>z()},"\ub2e4\uc74c\uc5d0 \ubcc0\uacbd"),a.createElement(u.A,{type:"button",size:"lg",onClick:()=>t("/password")},"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd")))))}}}]);