var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as b,u as me,r as f,o as K,a as Y,b as v,c as G,w as c,e as i,f as n,N as ge,g as _e,h as he,z as fe,i as ve,j as ke,k as Z,l as ye,m as Fe,n as Ee,p as we,q as xe,s as F,t as Be,v as De,x as Ae,y as k,A as C,B as Ne,C as be,D as N,E as m,F as q,G as Ce,H as Ie,I,L as Le,J as X,K as Pe,M as $e,O as Se,P as Oe,Q as Te,R as Re,S as Ve,T as je,U as Q,V as Me,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ge,a2 as Ze,a3 as qe}from"./vendor.64da71ad.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Xe();const Qe=b({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://pikpak.995579.xyzk"],tt=b({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,a)=>{const s=Y("router-view");return v(),G(n(ke),{locale:n(fe),"date-locale":n(ve),"theme-overrides":t.value},{default:c(()=>[i(n(he),null,{default:c(()=>[i(n(ge),null,{default:c(()=>[i(n(_e),null,{default:c(()=>[i(Qe),i(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},st="/pikpak/",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${st}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":ot,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((D,_)=>{u.addEventListener("load",D),u.addEventListener("error",_)})})).then(()=>t())};var at="/pikpak/assets/logo1.08eb9157.png";const g=Z.create({});g.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let w=!1;g.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),r=s?JSON.parse(s):{};return r.username&&r.password&&!w?(console.log("wait",o.url),w=!0,g.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),w=!1,g(o))).catch(()=>(x.push("/login"),!1))):r.username&&r.password&&w?new Promise((u,D)=>{const _=setInterval(()=>{w||(clearInterval(_),u(g(o)))},100)}):(x.push("/login?redirect="+x.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=Z.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const it=m("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[m("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),m("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},ut=k("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ct=m("a",{style:{color:"#306eff"},target:"_blank",href:"https://www.tjsky.net/?p=220#i-21"},"\u6587\u4EF6\u5217\u8868\u5237\u4E0D\u51FA\u6765\uFF1F",-1),dt=k(" \u3010\u8BF7\u4F9D\u6B21\u70B9\u9009\uFF1A\u8BBE\u7F6E-\u4EE3\u7406\u8BBE\u7F6E-\u6062\u590D\u9ED8\u8BA4-\u4FDD\u5B58\u8BBE\u7F6E \u540E\u518D\u5237\u65B0\u8BD5\u8BD5\u3011 "),pt={class:"bottom-user-info"},mt={key:0,src:at,class:"user-info-avatar"},gt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},_t={class:"user-info-name"},ht={key:0},ft={class:"action"},vt=k(" \u9000\u51FA\u767B\u5F55 "),kt=m("p",null,[m("a",null,[k("\u76EE\u524D\u4EF7\u683C\uFF1APikPak\u4F53\u9A8C\u4F1A\u5458\u5E74\u5361 188 \u5143\uFF0C\u6B63\u5F0F\u6708\u5361 32 \u5143\uFF0C\u6B63\u5F0F\u5E74\u5361 320 \u5143\uFF0C\u6B63\u5F0F\u4E09\u5E74\u5361 699 \u5143"),m("br"),k(" \u63D0\u9192\uFF1A\u4F53\u9A8C\u5361\u6BCF\u8D26\u53F7\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21,\u6B63\u5F0F\u5361\u53EF\u65E0\u9650\u53E0\u52A0\u3002")])],-1),yt=k("\u6DFB\u52A0"),Ft=b({setup(e){const t=f(!1),o=l=>()=>Q(I,null,{default:()=>Q(l)}),a=ye(),s=Fe(),r=f([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(Me)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),u=f(),D=()=>{g.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},_=f(),L=()=>{g.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{_.value=l.data}).catch(l=>{console.log(l)})},y=f(),oe=()=>{g.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var d;y.value=(d=l.data)==null?void 0:d.data})},se=(l,d)=>{console.log(d),a.push("/"+d.key)};K(()=>{D(),L(),oe()});const A=f(),E=f(!1),ae=()=>{g.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:A.value,data:{}}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(l=>{console.log(l)}).finally(()=>{E.value=!1})},P=f(!1),ne=l=>{P.value=l<800,t.value||(t.value=l<800)};Ee(s,()=>{P.value&&(t.value=!0)});const ie=we(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{g.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,d)=>{const ue=Y("router-view"),le=xe("resize");return v(),F(je,null,[Be(i(n(X),{"has-sider":"",onResize:ne},{default:c(()=>[i(n(De),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=h=>t.value=!0),onExpand:d[2]||(d[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,$,S,O,T,R,V,j,M,z,J;return[it,i(n(Ae),{options:r.value,value:String(n(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?N("",!0):(v(),F("div",rt,[k(C(n(te)((h=_.value)==null?void 0:h.quota.usage))+" / "+C(n(te)(($=_.value)==null?void 0:$.quota.limit))+" ",1),i(n(Ne),{type:"primary",onClick:d[0]||(d[0]=xt=>E.value=!0)},{default:c(()=>[ut]),_:1}),((S=_.value)==null?void 0:S.quota)?(v(),G(n(be),{key:0,type:"line",percentage:Number((((O=_.value)==null?void 0:O.quota.usage)/((T=_.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=y.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):N("",!0),m("p",lt,[i(n(q),{placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[dt]),_:1})])])),t.value?N("",!0):(v(),F("div",{key:1,class:Ce(["sider-bottom",{vip:((V=y.value)==null?void 0:V.status)==="ok"}])},[m("div",pt,[((j=y.value)==null?void 0:j.status)==="ok"?(v(),F("img",mt)):(v(),F("img",gt)),m("div",_t,[k(C((M=u.value)==null?void 0:M.name)+" ",1),((z=y.value)==null?void 0:z.status)==="ok"&&((J=y.value)==null?void 0:J.expire)?(v(),F("div",ht,[i(n(Ie),{time:new Date(y.value.expire),type:"datetime"},null,8,["time"])])):N("",!0)]),m("div",ft,[i(n(q),null,{trigger:c(()=>[i(n(I),{onClick:re},{default:c(()=>[i(n(Le))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(n(X),null,{default:c(()=>[i(n(Pe),{style:{height:"100vh"}},{default:c(()=>[i(n($e),{style:{"max-height":"100vh"}},{default:c(()=>[i(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),i(n(Ve),{show:E.value,"onUpdate:show":d[5]||(d[5]=h=>E.value=h)},{default:c(()=>[i(n(Se),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(n(I),{onClick:d[3]||(d[3]=h=>E.value=!1)},{default:c(()=>[i(n(Oe))]),_:1})]),action:c(()=>[i(n(Te),{block:!0,type:"primary",disabled:!A.value,onClick:ae},{default:c(()=>[yt]),_:1},8,["disabled"])]),default:c(()=>[i(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:A.value,"onUpdate:value":d[4]||(d[4]=h=>A.value=h)},null,8,["value"]),kt]),_:1})]),_:1},8,["show"])],64)}}}),Et=[{path:"/",name:"home",component:Ft,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>p(()=>import("./list.28a71f07.js"),["assets/list.28a71f07.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>p(()=>import("./list.28a71f07.js"),["assets/list.28a71f07.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>p(()=>import("./list.28a71f07.js"),["assets/list.28a71f07.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>p(()=>import("./trash.267613a1.js"),["assets/trash.267613a1.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>p(()=>import("./setting.72564549.js"),["assets/setting.72564549.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>p(()=>import("./invited.6b27b7b5.js"),["assets/invited.6b27b7b5.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>p(()=>import("./test.0b72ee9b.js"),["assets/test.0b72ee9b.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>p(()=>import("./shareInfo.72d0810e.js"),["assets/shareInfo.72d0810e.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>p(()=>import("./login.5b94e583.js"),["assets/login.5b94e583.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>p(()=>import("./sms.9fb45d5d.js"),["assets/sms.9fb45d5d.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>p(()=>import("./register.52401868.js"),["assets/register.52401868.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>p(()=>import("./testtest.81c2e5f2.js"),["assets/testtest.81c2e5f2.js","assets/vendor.64da71ad.js"])}],wt=Ke({history:Ye(),routes:Et});var x=wt;const B=Ge(tt);B.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,r=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});B.config.globalProperties.$http=g;B.use(x);B.use(qe,{router:x,siteIdList:[1280680983]});B.mount("#app");export{te as b,g as i,et as p};
