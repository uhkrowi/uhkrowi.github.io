import{_ as d}from"./Card.7d2d861e.js";import{_ as r}from"./CategoryButtons.0e92f66b.js";import{i as _,a as s,m as p,w as u,c as n,h as t,t as a,b as m,n as f}from"./vendor.b9a3026d.js";const h={key:0,class:"text-center"},v={key:1},x={class:"w-full text-center mb-5 font-bold"},y={class:"text-2xl"},w={class:"mt-5 font-normal flex flex-wrap justify-center items-end"},b=t("span",null,"in\xA0",-1),j=t("hr",{class:"my-10 bg-gray-400"},null,-1),g={class:"text-gray-800 prose prose-lg dark:text-white"},B=["innerHTML"],$={class:"pt-16"},k=t("div",{class:"flex justify-center"},[t("span",{class:"text-md px-3 py-2 font-bold"},"Browse By Topic")],-1),C={class:"flex justify-center pt-2 pb-5"},V={setup(L){const c=f().params.id,e=_(null);return(async()=>{const o=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/posts/${c}?_embed`)).json();e.value=o,document.title=`Blog | ${e.value.title.rendered}`})(),(l,o)=>(s(),p(d,null,{default:u(()=>[e.value?(s(),n("div",v,[t("div",x,[t("div",y,a(e.value.title.rendered),1),t("div",w,[b,t("span",null,a(e.value._embedded["wp:term"][0].map(i=>`#${i.name}`).join(", ")),1)])]),j,t("div",g,[t("div",{innerHTML:e.value.content.rendered,class:"text-[16px]"},null,8,B)]),t("div",$,[k,t("div",C,[m(r)])])])):(s(),n("div",h,"Loading content..."))]),_:1}))}};export{V as default};
