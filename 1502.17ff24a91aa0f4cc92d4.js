"use strict";(self.webpackChunktnm_front_admin=self.webpackChunktnm_front_admin||[]).push([[1502],{9121:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var l=a(525),n=a(6038),r=a(6869),c=a(5788),o=a(2188),s=a(6071),m=a(4378),p=a(3904),i=a(4460),d=a(5350),u=a(7806),b=Object.defineProperty,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&E(e,a,t[a]);if(f)for(var a of f(t))x.call(t,a)&&E(e,a,t[a]);return e},N=(e,t,a)=>new Promise(((l,n)=>{var r=e=>{try{o(a.next(e))}catch(e){n(e)}},c=e=>{try{o(a.throw(e))}catch(e){n(e)}},o=e=>e.done?l(e.value):Promise.resolve(e.value).then(r,c);o((a=a.apply(e,t)).next())}));function y({}){const e=(0,n.Zp)(),t=(0,n.zy)(),a=t.pathname,[b,f]=(0,l.useState)([]),[h,x]=(0,l.useState)([]),[E,y]=(0,l.useState)(""),[S,v]=(0,l.useState)("Y"),[C,w]=(0,l.useState)(""),[A,F]=(0,l.useState)("N"),[M,k]=(0,l.useState)(!1),{data:T,refetch:D}=(0,i.ED)(Number(t.pathname.match(/\d+$/))),{register:O,setValue:Y,watch:j,formState:{errors:P},handleSubmit:$}=(0,c.mN)({mode:"onChange",defaultValues:{atchFileSnoList:null,ntcMttrCtt:"",ntcMttrTtlNm:""}}),_=j("ntcMttrTtlNm");(0,l.useEffect)((()=>{D()}),[a]),(0,l.useEffect)((()=>{"Y"!==S&&"N"!==S||w(""),E&&_?"R"===S?(k(!1),14!==C.length&&16!==C.length||k(!0)):k(!0):k(!1)}),[E,_,C,S]),(0,l.useEffect)((()=>{var e;if(null==(e=null==T?void 0:T.result)?void 0:e.notice){const{ntcMttrTtlNm:e,ntcMttrCtt:t,mhrkFxdYn:a,files:l,bltnSttDtm:n,bltnStaCd:r}=T.result.notice;Y("ntcMttrTtlNm",e),Y("ntcMttrCtt",t),F(a),v(r),w(n),y(t),f([]),f((e=>[...e,...l]))}}),[T]);return l.createElement(l.Fragment,null,l.createElement("h2",{className:"mb-[16px] text-headline3 font-Tmoney"},"\uacf5\uc9c0\uc0ac\ud56d \uad00\ub9ac > \uc218\uc815\ud558\uae30"),l.createElement("div",null,l.createElement("form",{className:"flex items-start gap-[40px]",onSubmit:$((a=>N(this,null,(function*(){new Date>(0,u.Rm)(C)?toast.alert("\uc608\uc57d\uc2dc\uac04\uc740 \ud604\uc7ac\uc2dc\uac04 \ubcf4\ub2e4 \uc774\uc804\uc77c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"):(a.ntcMttrSno=Number(t.pathname.match(/\d+$/)),a.ntcMttrCtt=E,a.bltnSttDtm=C,a.bltnStaCd=S,a.mhrkFxdYn=A,a.atchFileSnoList=b.map((e=>e.atchFileSno)),a.deleteAtchFileSnoList=h.map((e=>e.atchFileSno)),14===C.length&&(a.bltnSttDtm=(0,u.aN)(C)),r.A.put(`/adm/notice/${t.pathname.match(/\d+$/)}`,a).then((t=>{200===t.status&&(e("/cscenter/notice"),toast.success("\uac8c\uc2dc\ubb3c\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4"))})).catch((function(e){"400001"===e.response.data.code&&toast.alert("\ud604\uc7ac \uc2dc\uac04 \uc774\uc804\uc73c\ub85c \ub4f1\ub85d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4")})))}))))},l.createElement("div",null,l.createElement("div",{className:"overflow-hidden mb-[16px] border border-tg-100 rounded-[10px]"},l.createElement("table",{className:"border-collapse border-hidden table-fixed"},l.createElement("colgroup",null,l.createElement("col",{width:"195"}),l.createElement("col",{width:"757"})),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{className:"px-[24px] pt-[9px] pb-[7px] border-b border-r border-tg-100 bg-tg-10 text-20 font-bold text-left"},"\uc81c\ubaa9"),l.createElement("td",{className:"px-[12px] border-b border-tg-100"},l.createElement("div",{className:"w-[446px]"},l.createElement(m.A,g({type:"text",size:"sm",isError:P.ntcMttrTtlNm},O("ntcMttrTtlNm",{required:!0})))))),l.createElement("tr",null,l.createElement("th",{className:"px-[24px] pt-[9px] pb-[7px] border-b border-r border-tg-100 bg-tg-10 text-20 font-bold text-left"},"\ub0b4\uc6a9"),l.createElement("td",{className:"px-[12px] py-[12px] border-b border-tg-100"},l.createElement(o.A,{setData:e=>y(e),defaultData:E,isUploadImage:!0,onChange:e=>{f((t=>[...t,e]))}}))),l.createElement("tr",null,l.createElement("th",{className:"px-[24px] pt-[9px] pb-[7px] border-b border-r border-tg-100 bg-tg-10 text-20 font-bold text-left"},"\ucca8\ubd80\ud30c\uc77c"),l.createElement("td",{className:"px-[12px] border-b border-tg-100"},l.createElement("div",{className:"flex gap-[8px] w-[400px] pt-[10px] relative"},l.createElement("input",{key:b.length,type:"file",multiple:!0,className:"absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer",onChange:e=>N(this,null,(function*(){const t=e.target.files;if(console.log("test : {}",e.target.files),t){const a=new FormData;for(let e=0;e<t.length;e++)a.append("attach",t[e]);r.A.post("/adm/notice/file/upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{f((t=>[...t,...e.data.result.saveFileList]))})).catch((function(e){console.log(e)})),e.target.files=""}}))}),l.createElement(m.A,{type:"text",size:"sm"}),l.createElement(s.A,{size:"md",color:"secondary"},"\ucc3e\uc544\ubcf4\uae30....")),b.length?l.createElement("div",{className:"py-[7px]"},null==b?void 0:b.map(((e,t)=>"ATTACH"===e.fileAcsTypCd&&l.createElement("div",{key:`file-${t}`,className:"flex items-center gap-[5px]"},l.createElement("span",{className:"text-caption"},e.orglFileNm),l.createElement("button",{type:"button",onClick:()=>(e=>{const t=b.filter((t=>!(t.atchFileSno===e.atchFileSno)));f(t),x(h.concat(e))})(e)},l.createElement(p.A,{icon:"file_delete"})))))):l.createElement("div",{className:"flex items-center gap-[10px] py-[7px]"},l.createElement(p.A,{icon:"check"}),l.createElement("span",{className:"text-caption"},"\ud30c\uc77c\ucca8\ubd80\ub294 5MB, \ucd5c\ub300 10\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ud30c\uc77c 0\uac1c, 0KB/5MB"))))))),l.createElement("div",{className:"flex justify-between"},l.createElement(s.A,{color:"secondary",onClick:()=>e("/cscenter/notice")},"\ucde8\uc18c"),M?l.createElement(s.A,{type:"submit"},"\uc800\uc7a5"):l.createElement(s.A,{type:"button",color:"secondary"},"\uc800\uc7a5"))),l.createElement(d.A,{bltnStaCd:S,mhrkFxdYn:A,bltnSttDtm:C,setBltnStaCd:v,setMhrkFxdYn:F,onChange:e=>w(e)}))))}}}]);