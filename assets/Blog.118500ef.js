import{_ as d}from"./Card.d9a68baf.js";import{_ as r}from"./CategoryButtons.93623d4f.js";import{k as _,o as s,l as p,w as u,c as n,f as t,t as a,a as f,m}from"./vendor.7d394cad.js";const x={key:0,class:"text-center"},h={key:1},v={class:"w-full text-center mb-5 font-bold"},y={class:"text-3xl"},j={class:"mt-5 font-normal flex flex-wrap justify-center items-end"},w=t("span",{class:"opacity-75"},"in\xA0",-1),b=t("hr",{class:"my-10 bg-gray-400"},null,-1),B={class:"text-ctextbase prose prose-xl"},g=["innerHTML"],k={class:"pt-16"},$=t("div",{class:"flex justify-center"},[t("span",{class:"text-lg px-3 py-2 font-bold"},"Browse By Topic")],-1),C={class:"flex justify-center pt-2"},V={setup(L){const c=m().params.id,e=_(null);return(async()=>{const o=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/posts/${c}?_embed`)).json();e.value=o,document.title=`Blog | ${e.value.title.rendered}`})(),(l,o)=>(s(),p(d,null,{default:u(()=>[e.value?(s(),n("div",h,[t("div",v,[t("div",y,a(e.value.title.rendered),1),t("div",j,[w,t("span",null,a(e.value._embedded["wp:term"][0].map(i=>i.name).join(", ")),1)])]),b,t("div",B,[t("div",{innerHTML:e.value.content.rendered,class:"text-[18px]"},null,8,g)]),t("div",k,[$,t("div",C,[f(r)])])])):(s(),n("div",x,"Loading content..."))]),_:1}))}};export{V as default};
