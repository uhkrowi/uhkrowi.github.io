import{_ as l}from"./Card.d9a68baf.js";import{k as r,o as s,l as d,w as i,c as a,f as e,t as _,m as u}from"./vendor.7d394cad.js";const p={key:0,class:"text-center"},h={key:1},x={class:"w-full text-center mb-5 text-sm text-gray-500 font-bold"},m={class:"text-4xl text-gray-900"},f=e("hr",{class:"my-10"},null,-1),v={class:"prose prose-xl text-black"},w=["innerHTML"],b={setup(y){const n=u().params.id,t=r(null);return(async()=>{const o=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase/${n}`)).json();t.value=o,document.title=`Showcase | ${t.value.title.rendered}`})(),(c,o)=>(s(),d(l,null,{default:i(()=>[t.value?(s(),a("div",h,[e("div",x,[e("div",m,_(t.value.title.rendered),1)]),f,e("div",v,[e("div",{innerHTML:t.value.content.rendered,class:"text-[18px]"},null,8,w)])])):(s(),a("div",p,"Loading content..."))]),_:1}))}};export{b as default};