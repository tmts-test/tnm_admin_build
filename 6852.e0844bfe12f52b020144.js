"use strict";(self.webpackChunktnm_front_admin=self.webpackChunktnm_front_admin||[]).push([[6852],{6852:(e,a,t)=>{t.d(a,{R6:()=>u,_3:()=>c,eN:()=>p,tn:()=>d,wg:()=>v});var r=t(9379),i=t(921),s=t(1447),n=t(5038);const d=e=>(0,r.I)({queryKey:["/adm/private-taxi-driver/page",e]}),c=()=>{const e=(0,i.jE)();return(0,s.n)((({mbrsSno:e,aprvStaCd:a})=>n.A.put(`/adm/private-taxi-driver/${e}/admin-approval`,{mbrsSno:e,aprvStaCd:a})),{cacheTime:0,onSuccess:()=>{e.invalidateQueries(["/adm/private-taxi-driver/page"]),toast.success("\ud68c\uc6d0\uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4")}})},v=()=>{const e=(0,i.jE)();return(0,s.n)((e=>{const a=e.map((e=>`mbrsSnoList=${e}`)).join("&");return n.A.delete(`/adm/private-taxi-driver?${a}`)}),{cacheTime:0,onSuccess:()=>{e.invalidateQueries(["/adm/private-taxi-driver/page"]),toast.success("\ud68c\uc6d0\uc815\ubcf4\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4")}})},p=e=>(0,r.I)({queryKey:[`/adm/private-taxi-driver/${e}/detail`]}),u=()=>{const e=(0,i.jE)();return(0,s.n)((e=>n.A.delete(`/adm/private-taxi-driver/deposit-account/${e}`)),{cacheTime:0,onSuccess:()=>{e.invalidateQueries(["/adm/private-taxi-driver/page"]),toast.success("\ud1b5\uc7a5\uc0ac\ubcf8\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4")}})}}}]);