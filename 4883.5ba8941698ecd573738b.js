"use strict";(self.webpackChunktnm_front_admin=self.webpackChunktnm_front_admin||[]).push([[4883],{4883:(e,r,a)=>{a.d(r,{bk:()=>c,ki:()=>p,qh:()=>o,ss:()=>d});var t=a(8509),s=a(6776),i=a(9991),n=a(6869);const c=e=>(0,t.I)({queryKey:["/adm/corp-taxi-driver/page",e]}),d=()=>{const e=(0,s.jE)();return(0,i.n)((e=>{const r=e.map((e=>`mbrsSnoList=${e}`)).join("&");return n.A.delete(`/adm/corp-taxi-driver?${r}`)}),{cacheTime:0,onSuccess:()=>{e.invalidateQueries(["/adm/corp-taxi-driver/page"]),toast.success("\ud68c\uc6d0\uc815\ubcf4\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4")}})},o=()=>{const e=(0,s.jE)();return(0,i.n)((({mbrsSno:e,aprvStaCd:r})=>n.A.put(`/adm/corp-taxi-driver/${e}/admin-approval`,{mbrsSno:e,aprvStaCd:r})),{cacheTime:0,onSuccess:()=>{e.invalidateQueries(["/adm/corp-taxi-driver/page"]),toast.success("\ud68c\uc6d0\uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4")}})},p=e=>(0,t.I)({queryKey:[`/adm/corp-taxi-driver/${e}/detail`]})}}]);