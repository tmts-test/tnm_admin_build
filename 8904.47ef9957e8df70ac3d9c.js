"use strict";(self.webpackChunktnm_front_admin=self.webpackChunktnm_front_admin||[]).push([[8904],{8904:(e,o,t)=>{t.d(o,{A:()=>s});var n=t(6869);const s=e=>{return o=void 0,t=[e],s=function*({key:e,searchParams:o,snoList:t=[]}){try{const s=null==t?void 0:t.map((e=>`mbrsSnoList=${e}`)).join("&");""===o.searchKeyword&&delete o.searchKeyword,""===o.searchFromDate&&delete o.searchFromDate,""===o.searchToDate&&delete o.searchToDate,yield n.A.get(`${e}?${"string"!==typeof o?Object.entries(o).map((([e,o])=>`${encodeURIComponent(e)}=${encodeURIComponent(o)}`)).join("&"):o}${t.length>0?`&${s}`:""}`,{responseType:"blob"}).then((function(e){const o=(e.headers["content-disposition"]||e.headers["content-disposition".toLowerCase()]).split('filename="')[1].split(".")[0],t=new Blob([e.data],{type:"application/octet-stream"}),n=window.URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`${decodeURI(o)}.xlsx`,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(n)})).catch((function(e){console.log("test1!!!"),console.log(e),console.log(e.status)}))}catch(e){console.log("test2!!!"),console.log(e)}},new Promise(((e,n)=>{var c=e=>{try{r(s.next(e))}catch(e){n(e)}},a=e=>{try{r(s.throw(e))}catch(e){n(e)}},r=o=>o.done?e(o.value):Promise.resolve(o.value).then(c,a);r((s=s.apply(o,t)).next())}));var o,t,s}}}]);