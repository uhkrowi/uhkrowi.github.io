import{i as b,r as g,a as r,c as a,h,b as d,w as i,x as l,F as v,g as _,j as x,t as p}from"./vendor.b9a3026d.js";const y={class:"flex flex-wrap justify-center text-[14px] dark:text-white"},k={class:"p-1"},w=x("All"),m={props:{activeColor:Boolean},setup(o){const s=b([]);return(async()=>{const c=await(await fetch("https://portfolio.halimdut.xyz/wp-json/wp/v2/categories")).json();s.value=c})(),(e,c)=>{const n=g("router-link");return r(),a("div",y,[h("div",k,[d(n,{class:l(["category-button",[e.$route.query.categories==null&&o.activeColor?"text-white hover:text-ctextbase bg-red-600 border-red-600 hover:border-gray-600":"text-ctextbase dark:text-white dark:hover:text-ctextbase dark:border-gray-700"]]),to:"/blog"},{default:i(()=>[w]),_:1},8,["class"])]),(r(!0),a(v,null,_(s.value,(t,u)=>(r(),a("div",{key:u,class:"p-1"},[d(n,{class:l(["category-button",[t.id==e.$route.query.categories&&o.activeColor?"text-white hover:text-ctextbase bg-red-600 border-red-600 hover:border-gray-600":"text-ctextbase dark:text-white dark:hover:text-ctextbase dark:border-gray-700"]]),to:`/blog/?categories=${t.id}`},{default:i(()=>[x(p(t.name),1)]),_:2},1032,["class","to"])]))),128))])}}};export{m as _};
