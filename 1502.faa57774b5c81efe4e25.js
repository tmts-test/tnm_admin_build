"use strict";(self.webpackChunktnm_front_admin=self.webpackChunktnm_front_admin||[]).push([[1502],{9121:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var a=l(525),n=l(6038),r=l(6869),c=l(5788),o=l(2188),s=l(6071),m=l(4378),i=l(3904),p=l(4460),d=l(5350),u=l(7806),b=Object.defineProperty,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,E=(e,t,l)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,g=(e,t)=>{for(var l in t||(t={}))f.call(t,l)&&E(e,l,t[l]);if(h)for(var l of h(t))x.call(t,l)&&E(e,l,t[l]);return e},N=(e,t,l)=>new Promise(((a,n)=>{var r=e=>{try{o(l.next(e))}catch(e){n(e)}},c=e=>{try{o(l.throw(e))}catch(e){n(e)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,c);o((l=l.apply(e,t)).next())}));function y({}){const e=(0,n.Zp)(),t=(0,n.zy)(),l=t.pathname,[b,h]=(0,a.useState)([]),[f,x]=(0,a.useState)([]),[E,y]=(0,a.useState)([]),[S,v]=(0,a.useState)(""),[C,A]=(0,a.useState)("Y"),[w,F]=(0,a.useState)(""),[M,k]=(0,a.useState)("N"),[T,D]=(0,a.useState)(!1),{data:O,refetch:Y}=(0,p.ED)(Number(t.pathname.match(/\d+$/))),{register:j,setValue:L,watch:P,formState:{errors:$},handleSubmit:_}=(0,c.mN)({mode:"onChange",defaultValues:{atchFileSnoList:null,ntcMttrCtt:"",ntcMttrTtlNm:""}}),z=P("ntcMttrTtlNm");(0,a.useEffect)((()=>{Y()}),[l]),(0,a.useEffect)((()=>{"Y"!==C&&"N"!==C||F(""),S&&z?"R"===C?(D(!1),14!==w.length&&16!==w.length||D(!0)):D(!0):D(!1)}),[S,z,w,C]),(0,a.useEffect)((()=>{var e;if(null==(e=null==O?void 0:O.result)?void 0:e.notice){const{ntcMttrTtlNm:e,ntcMttrCtt:t,mhrkFxdYn:l,files:a,bltnSttDtm:n,bltnStaCd:r}=O.result.notice;L("ntcMttrTtlNm",e),L("ntcMttrCtt",t),k(l),A(r),F(n),v(t),h([]),h((e=>[...e,...a])),x([]),x((e=>[...e,...a]))}}),[O]);return a.createElement(a.Fragment,null,a.createElement("h2",{className:"mb-[16px] text-headline3 font-Tmoney"},"\uacf5\uc9c0\uc0ac\ud56d \uad00\ub9ac > \uc218\uc815\ud558\uae30"),a.createElement("div",null,a.createElement("form",{className:"flex items-start gap-[40px]",onSubmit:_((l=>N(this,null,(function*(){new Date>(0,u.Rm)(w)?toast.alert("\uc608\uc57d\uc2dc\uac04\uc740 \ud604\uc7ac\uc2dc\uac04 \ubcf4\ub2e4 \uc774\uc804\uc77c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"):(l.ntcMttrSno=Number(t.pathname.match(/\d+$/)),l.ntcMttrCtt=S,l.bltnSttDtm=w,l.bltnStaCd=C,l.mhrkFxdYn=M,l.atchFileSnoList=b.map((e=>e.atchFileSno)),l.deleteAtchFileSnoList=E.map((e=>e.atchFileSno)),console.log("test3 :{}",l.deleteAtchFileSnoList),14===w.length&&(l.bltnSttDtm=(0,u.aN)(w)),r.A.put(`/adm/notice/${t.pathname.match(/\d+$/)}`,l).then((t=>{200===t.status&&(e("/cscenter/notice"),toast.success("\uac8c\uc2dc\ubb3c\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4"))})).catch((function(e){"400001"===e.response.data.code&&toast.alert("\ud604\uc7ac \uc2dc\uac04 \uc774\uc804\uc73c\ub85c \ub4f1\ub85d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4")})))}))))},a.createElement("div",null,a.createElement("div",{className:"overflow-hidden mb-[16px] border border-tg-100 rounded-[10px]"},a.createElement("table",{className:"border-collapse border-hidden table-fixed"},a.createElement("colgroup",null,a.createElement("col",{width:"195"}),a.createElement("col",{width:"757"})),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",{className:"px-[24px] pt-[9px] pb-[7px] border-b border-r border-tg-100 bg-tg-10 text-20 font-bold text-left"},"\uc81c\ubaa9"),a.createElement("td",{className:"px-[12px] border-b border-tg-100"},a.createElement("div",{className:"w-[446px]"},a.createElement(m.A,g({type:"text",size:"sm",isError:$.ntcMttrTtlNm},j("ntcMttrTtlNm",{required:!0})))))),a.createElement("tr",null,a.createElement("th",{className:"px-[24px] pt-[9px] pb-[7px] border-b border-r border-tg-100 bg-tg-10 text-20 font-bold text-left"},"\ub0b4\uc6a9"),a.createElement("td",{className:"px-[12px] py-[12px] border-b border-tg-100"},a.createElement(o.A,{setData:e=>v(e),defaultData:S,isUploadImage:!0,onChange:e=>{h((t=>[...t,e]))}}))),a.createElement("tr",null,a.createElement("th",{className:"px-[24px] pt-[9px] pb-[7px] border-b border-r border-tg-100 bg-tg-10 text-20 font-bold text-left"},"\ucca8\ubd80\ud30c\uc77c"),a.createElement("td",{className:"px-[12px] border-b border-tg-100"},a.createElement("div",{className:"flex gap-[8px] w-[400px] pt-[10px] relative"},a.createElement("input",{key:b.length,type:"file",multiple:!0,className:"absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer",onChange:e=>N(this,null,(function*(){const t=e.target.files;if(t){const l=new FormData;for(let e=0;e<t.length;e++)l.append("attach",t[e]);r.A.post("/adm/notice/file/upload",l,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{h((t=>[...t,...e.data.result.saveFileList]))})).catch((function(e){console.log(e)})),e.target.value=""}}))}),a.createElement(m.A,{type:"text",size:"sm"}),a.createElement(s.A,{size:"md",color:"secondary"},"\ucc3e\uc544\ubcf4\uae30....")),b.length?a.createElement("div",{className:"py-[7px]"},null==b?void 0:b.map(((e,t)=>"ATTACH"===e.fileAcsTypCd&&a.createElement("div",{key:`file-${t}`,className:"flex items-center gap-[5px]"},a.createElement("span",{className:"text-caption"},e.orglFileNm),a.createElement("button",{type:"button",onClick:()=>(e=>{f&&console.log("initDAta :{}",f);const t=b.filter((t=>!(t.atchFileSno===e.atchFileSno)));h(t),console.log("test1 :{} ",E),console.log("test2 :{} ",e),y(E.concat(e))})(e)},a.createElement(i.A,{icon:"file_delete"})))))):a.createElement("div",{className:"flex items-center gap-[10px] py-[7px]"},a.createElement(i.A,{icon:"check"}),a.createElement("span",{className:"text-caption"},"\ud30c\uc77c\ucca8\ubd80\ub294 5MB, \ucd5c\ub300 10\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud30c\uc77c 0\uac1c, 0KB/5MB"))))))),a.createElement("div",{className:"flex justify-between"},a.createElement(s.A,{color:"secondary",onClick:()=>e("/cscenter/notice")},"\ucde8\uc18c"),T?a.createElement(s.A,{type:"submit"},"\uc800\uc7a5"):a.createElement(s.A,{type:"button",color:"secondary"},"\uc800\uc7a5"))),a.createElement(d.A,{bltnStaCd:C,mhrkFxdYn:M,bltnSttDtm:w,setBltnStaCd:A,setMhrkFxdYn:k,onChange:e=>F(e)}))))}}}]);