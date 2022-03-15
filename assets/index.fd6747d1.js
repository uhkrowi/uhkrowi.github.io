import{r as d,o as u,c as p,a as m,b as f,d as h,e as v}from"./vendor.7d394cad.js";const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};E();var g=(i,s)=>{const n=i.__vccOpts||i;for(const[o,e]of s)n[o]=e;return n};const y={},L={class:"flex justify-center text-[#08102b] text-[18px] h-screen p-[15px] lg:p-[0px]"};function P(i,s){const n=d("router-view");return u(),p("div",L,[m(n,{class:"max-w-[800px]"})])}var w=g(y,[["render",P]]);const O="modulepreload",a={},b="/",c=function(s,n){return!n||n.length===0?s():Promise.all(n.map(o=>{if(o=`${b}${o}`,o in a)return;a[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":O,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((l,_)=>{r.addEventListener("load",l),r.addEventListener("error",_)})})).then(()=>s())},A=()=>c(()=>import("./Home.c8d26337.js"),["assets/Home.c8d26337.js","assets/Home.8779dc66.css","assets/contacts.a127b26c.js","assets/vendor.7d394cad.js"]),x=()=>c(()=>import("./Profile.db845bcf.js"),["assets/Profile.db845bcf.js","assets/Profile.0ff8d7d4.css","assets/Card.d9a68baf.js","assets/vendor.7d394cad.js","assets/contacts.a127b26c.js"]),V=()=>c(()=>import("./ShowcaseList.56473557.js"),["assets/ShowcaseList.56473557.js","assets/ShowcaseList.33a49f29.css","assets/Card.d9a68baf.js","assets/vendor.7d394cad.js"]),j=()=>c(()=>import("./Showcase.366ddd67.js"),["assets/Showcase.366ddd67.js","assets/Card.d9a68baf.js","assets/vendor.7d394cad.js"]),D=()=>c(()=>import("./BlogList.67642117.js"),["assets/BlogList.67642117.js","assets/vendor.7d394cad.js","assets/Card.d9a68baf.js","assets/CategoryButtons.93623d4f.js","assets/CategoryButtons.892b960b.css"]),R=()=>c(()=>import("./Blog.c83db62f.js"),["assets/Blog.c83db62f.js","assets/Card.d9a68baf.js","assets/vendor.7d394cad.js","assets/CategoryButtons.93623d4f.js","assets/CategoryButtons.892b960b.css"]),I=()=>c(()=>import("./DownloadCV.387872ac.js"),[]),T=[{path:"/",name:"Home",component:A,children:[{path:"",redirect:i=>"about"},{path:"/about",component:x},{path:"showcase",component:V},{path:"showcase/:id",component:j},{path:"blog",component:D},{path:"blog/:id",component:R},{path:"download-cv",component:I},{path:"/:catchAll(.*)*",component:()=>c(()=>import("./404.817d47e9.js"),["assets/404.817d47e9.js","assets/vendor.7d394cad.js"])}]}],S=f({history:h(),routes:T});v(w).use(S).mount("#app");export{g as _};
