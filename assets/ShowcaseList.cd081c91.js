import{_ as g}from"./Card.7d2d861e.js";import{i as x,r as v,a as s,m as u,w as _,c as h,k as y,h as t,g as b,F as k,t as m}from"./vendor.b9a3026d.js";const j={key:0,class:"text-center"},z={class:"masonry-1-col md:masonry-3-col"},B={class:"w-full h-full overflow-hidden rounded-lg relative lg:shadow-custom2 border dark:border-0 flex justify-center"},C={class:"title-container opacity-[0] absolute w-full h-full top-0 left-0 bg-gray-900/50 rounded-lg p-5 flex justify-center items-center text-center text-white font-bold",style:{"z-index":"999"}},S=["src","alt"],L={class:"block mt-2 text-center text-md text-black lg:hidden"},$={setup(F){const o=x([]);return(async()=>{const a=await(await fetch("https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase?_embed")).json();o.value=a})(),document.title="Showcase",(f,a)=>{const p=v("router-link");return s(),u(g,{label:"Showcase"},{default:_(()=>[o.value.length===0?(s(),h("div",j," Loading content... ")):y("",!0),t("div",z,[(s(!0),h(k,null,b(o.value,(e,w)=>(s(),u(p,{to:`/showcase/${e.id}`,key:w,class:"block showcase-container break-inside p-3 mb-5 text-white select-none cursor-pointer"},{default:_(()=>{var l,r,n,c,d,i;return[t("div",B,[t("div",C,m(e.title.rendered),1),t("img",{src:(i=(d=(c=(n=(r=(l=e._embedded)==null?void 0:l["wp:featuredmedia"])==null?void 0:r[0])==null?void 0:n.media_details)==null?void 0:c.sizes)==null?void 0:d.medium)==null?void 0:i.source_url,alt:e.slug,class:"rounded-lg shadow-lg w-full",style:{"z-index":"998"}},null,8,S)]),t("span",L,m(e.title.rendered),1)]}),_:2},1032,["to"]))),128))])]),_:1})}}};export{$ as default};
