import{r as k,o as n,c as l,a as p,b as e,F as f,d as m,w as g,e as C,t as c,f as E,g as N,h as y,m as R,u as $,n as M,i as L,j as P,k as T,l as F,v as z,p as H,q as B,s as A,x as O,y as V}from"./vendor.6da4e66e.js";const U=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}};U();var W=(d,i)=>{const a=d.__vccOpts||d;for(const[o,t]of i)a[o]=t;return a};const Y={},q={class:"flex justify-center p-[15px] lg:p-[50px] text-gray-900"};function J(d,i){const a=k("router-view");return n(),l("div",q,[p(a,{class:"max-w-[1100px]"})])}var G=W(Y,[["render",J]]);const K="modulepreload",D={},Q="/",X=function(i,a){return!a||a.length===0?i():Promise.all(a.map(o=>{if(o=`${Q}${o}`,o in D)return;D[o]=!0;const t=o.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":K,t||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),t)return new Promise((u,v)=>{r.addEventListener("load",u),r.addEventListener("error",v)})})).then(()=>i())},Z={class:"w-full flex justify-end lg:hidden"},ee=e("img",{src:"https://img.icons8.com/ios-glyphs/72/ffffff/menu--v1.png",alt:"menu",class:"h-6"},null,-1),te=[ee],se={id:"navigation",class:"hidden bottom-0 top-0 left-0 right-0 lg:block lg:relative lg:w-[265px] lg:min-h-[520px] p-4 lg:py-[55px] lg:px-[30px] bg-[#111111] text-white lg:rounded-xl"},oe={class:"w-full flex justify-end mb-5 lg:hidden"},ne=e("img",{src:"https://img.icons8.com/ios-glyphs/72/delete-sign.png",alt:"menu",class:"h-6"},null,-1),le=[ne],ae=e("div",{class:"text-2xl font-bold flex items-center justify-center lg:justify-start"}," Nurul Uhkrowi ",-1),ie=e("div",{class:"text-xs mt-2 text-center lg:text-left"},"FULLSTACK WEB DEVELOPER",-1),re={class:"pt-[80px] lg:pt-[40px] w-full flex flex-col items-center lg:block"},ce={class:"absolute bottom-0 pb-10 w-full"},de={class:"mt-20 flex justify-center flex-wrap lg:justify-start"},ue=["href"],pe=["src"],ge=e("span",{class:"block mt-5 text-xs text-center lg:text-left text-[#bbb]"},"\xA9 2022 Uhkrowi | Bogor, Indonesia",-1),he={setup(d){const i=[{label:"Who's Nurul?",link:"/profile"},{label:"Showcase",link:"/showcase"},{label:"Blog",link:"/blog"}],a=[{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/github.png",link:"https://github.com/uhkrowi"},{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/linkedin-2.png",link:"https://www.linkedin.com/in/uhkrowi/"},{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/facebook-f.png",link:"https://facebook.com/uhkrowi/"}],o=()=>{const t=document.getElementById("navigation");t.classList.toggle("fixed"),t.classList.toggle("hidden")};return(t,s)=>{const r=k("router-link");return n(),l("div",null,[e("div",Z,[e("div",{class:"bg-[#111111] w-10 h-10 rounded-xl flex justify-center items-center",onClick:s[0]||(s[0]=u=>o())},te)]),e("div",se,[e("div",oe,[e("div",{class:"bg-white w-10 h-10 rounded-xl flex justify-center items-center",onClick:s[1]||(s[1]=u=>o())},le)]),ae,ie,e("div",re,[(n(),l(f,null,m(i,(u,v)=>p(r,{key:v,to:u.link,class:"block py-2 cursor-pointer hover:translate-x-3 transition duration-300 text-[1rem]",onClick:s[2]||(s[2]=j=>o())},{default:g(()=>[C(c(u.label),1)]),_:2},1032,["to"])),64))]),e("div",ce,[e("div",de,[(n(),l(f,null,m(a,(u,v)=>e("div",{key:v,class:"flex justify-center items-center bg-red-500 w-[35px] h-[35px] rounded-full mr-2 cursor-pointer hover:bg-red-600 hover:scale-[1.15] transition duration-300"},[e("a",{href:u.link,target:"_blank"},[e("img",{src:u.icon,alt:"",class:"w-[25px]"},null,8,pe)],8,ue)])),64))]),ge])])])}}},_e={class:"w-full grid grid-cols-1 lg:grid-cols-[265px_auto] gap-[10px] lg:gap-[10px]"},fe={class:"static lg:fixed"},me=e("div",null,null,-1),ve={setup(d){return(i,a)=>{const o=k("router-view");return n(),l("div",_e,[e("div",fe,[p(he)]),me,p(o)])}}};var xe="/images/profile.jpg";const ye={class:"w-full py-[20px] md:px-[10px] lg:px-[50px]"},be={key:0,class:"text-2xl pb-10"},we=e("span",{class:"w-5 bg-red-500 rounded-md"},"\xA0",-1),x={props:{label:String},setup(d){return(i,a)=>(n(),l("div",ye,[d.label?(n(),l("h2",be,[we,C("\xA0 "+c(d.label),1)])):E("",!0),N(i.$slots,"default")]))}};var ke=[{company:"Front End Developer at BeIT",date:"Jan 2020\u2005\u2013\u2005Current",jobs:["Creating mockups and prototypes","Design and build UI/UX","Integrating with web services, fixing bugs, and doing optimization","Do back end stuffs when necessary"]},{company:"Front End Developer at PT Perjalanan Menembus Galaksi",date:"Sep 2021\u2005\u2013\u2005Nov 2021",jobs:["Integrating API","Designing and Building components"]},{company:"Back End Developer at Ink & Canvas",date:"Nov 2017\u2005\u2013\u2005Oct 2019",jobs:["Working closely with clients to establish problem, specifications and system designs","Coordinating with internal in developing project plans and solutions","Building, testing, deploying, and maintaining applications","Refactoring for better performance pupose"]},{company:"Full Stack Developer at PT. IndoVisual Presentatama",date:"Feb 2016\u2005\u2013\u2005Nov 2017",jobs:["Collaborating with product management team to design, build, integrate and test systems","Designing new product elements such as IR and RF connection, CCTV live streaming, hardware integration, and device-to-device communication","Modifying existing software to fix issues, and improve performance"]}],$e=[{name:"Rental Housing",link:"https://pupr-rental-housing.netlify.app/",date:"Oct 2021\u2004- Dec 2021",description:"Rental flat, private and public housing in Indonesia for low economic citizen, supply and demand management of properties, facilitate citizen to book and rent house with ease."},{name:"Booking Room",link:null,date:"Aug 2019\u2004- Oct 2019",description:"A mobile application for scheduling meeting with booking available rooms feature, note of MOM, participants invitation, extending meeting time if possible, order meals to the pantry, etc."},{name:"Ship Rental Management",link:null,date:"Mar 2020\u2004- Apr 2020",description:"Ship rent management aim to ease fishermen to rent ships, including picking type of ship, setting rental period, extending the period, monitoring their payment. the application also helps the owners of rental to manage information about ships, their customers, payments and reports."},{name:"English Learning Institution ERP",link:null,date:"Nov 2017\u2004- Oct 2019",description:"Resource planning, monitoring and management of many modules that help user to manage data of students, employees, learning processes, payments, etc. Features: Dashboards, Integration of many modules as microservices (academic, human resource, elearning, finance, general data, usermanagement)."},{name:"Smart Home & Office",link:null,date:"Feb 2016\u2004- Nov 2017",description:"Mobile and Web app for managing, controlling and monitoring devices at home e.g lamp/light, door lock, TV, CCTV, air conditioner, curtain, switch, sensors, etc. It's main features are: Managing, Controlling and monitoring devices, Configuration, User management, Role, Permission, etc."},{name:"Data Center Management",link:null,date:"Jan 2020",description:"A web application to manage and monitor all things in datacenter, for example: sensors, cooling, UPS, racks, gensets, etc. Some it's features are Dashboard, Reports, Master Data (User, Role, Permission, Config)."}],je=[{label:"Responsive Web Design at FreeCodeCamp",url:"https://www.freecodecamp.org/certification/Nurul_Uhkrowi/responsive-web-design"},{label:"Go Course at SoloLearn",url:"https://www.sololearn.com/certificates/course/en/2294107/1164/landscape/png"},{label:"React & Redux Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1097-2294107/jpg/"},{label:"Csharp Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1080-2294107/jpg/"},{label:"SQL Fundamentals Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1060-2294107/jpg/"},{label:"PHP Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1059-2294107/jpg/"},{label:"JavaScript Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1024-2294107/jpg/"},{label:"HTML Fundamentals Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1014-2294107/jpg/"},{label:"Java Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1068-2294107/jpg/"}],Ce=["Go lang","GoFiber","Javascript","NodeJS","Express.js","React.js","Vue.js","MySQL","PostgreSQL","Mongo DB","Wordpress","Heroku","Netlify","Microsoft Azure","Twilio"];const Le={class:"grid gap-[30px]"},Se={class:"grid grid-cols-1 lg:grid-cols-[200px_auto] gap-5 lg:gap-0"},Me=e("div",{class:"flex justify-center"},[e("img",{src:xe,class:"w-[120px] h-[120px] rounded-full shadow-md"})],-1),Pe=["innerHTML"],Ee={class:"grid grid-cols-1 lg:grid-cols-[200px_auto]"},Be={class:"block font-bold"},De={class:"grid grid-cols-1 lg:grid-cols-[200px_auto]"},Ie=e("div",null,null,-1),Ne={class:"grid grid-cols-2 gap-y-5"},Re={class:"grid grid-cols-1 gap-10"},Te={class:"block text-gray-500 font-bold text-sm py-2"},Fe={class:"block"},ze={class:"text-blue-700"},He=["href"],Ae=e("div",{class:"grid grid-cols-2 gap-10"},[e("a",{href:"mailto:uhkrowi@gmail.com",class:"flex contact-container"},[e("div",{class:"flex items-start mr-3"},[e("img",{src:"https://img.icons8.com/ios/1x/mail.png",alt:"mail",class:"w-[25px]"})]),e("div",null,[e("span",{class:"block font-bold"},"Email"),e("span",{class:"contact-label"},"uhkrowi@gmail.com")])])],-1),Oe={setup(d){const i=y("");return(async()=>{const o=await(await fetch("./data/introduction.md")).text();i.value=R.parse(o)})(),(a,o)=>(n(),l("div",Le,[p(x,{label:"Hi, I'm Nurul"},{default:g(()=>[e("div",Se,[Me,e("div",{id:"introduction",innerHTML:i.value,class:"flex flex-col justify-center prose text-gray-900"},null,8,Pe)])]),_:1}),p(x,{label:"Experiences"},{default:g(()=>[(n(!0),l(f,null,m($(ke),(t,s)=>(n(),l("div",{key:s,class:"py-5"},[e("div",Ee,[e("div",null,c(t.date),1),e("div",null,[e("span",Be,c(t.company),1),e("ul",null,[(n(!0),l(f,null,m(t.jobs,(r,u)=>(n(),l("li",{key:u}," \u2022 "+c(r),1))),128))])])])]))),128))]),_:1}),p(x,{label:"Stacks"},{default:g(()=>[e("div",De,[Ie,e("div",Ne,[(n(!0),l(f,null,m($(Ce),(t,s)=>(n(),l("div",{key:s},c(t),1))),128))])])]),_:1}),p(x,{label:"Projects"},{default:g(()=>[e("div",Re,[(n(!0),l(f,null,m($($e),(t,s)=>(n(),l("div",{key:s},[e("div",null,[e("span",{class:M(["font-bold",[t.link!==null&&"text-blue-700 cursor-pointer hover:underline"]])},c(t.name),3)]),e("span",Te,c(t.date),1),e("span",Fe,c(t.description),1)]))),128))])]),_:1}),p(x,{label:"Certifications"},{default:g(()=>[e("ul",ze,[(n(!0),l(f,null,m($(je),(t,s)=>(n(),l("li",{key:s},[e("a",{href:t.url,target:"_blank",class:"hover:underline"},c(t.label),9,He)]))),128))])]),_:1}),p(x,{label:"Shoot a message"},{default:g(()=>[Ae]),_:1})]))}};const Ve={key:0,class:"text-center"},Ue={class:"masonry-1-col md:masonry-2-col"},We={class:"w-full h-full overflow-hidden rounded-xl relative lg:shadow-md flex justify-center"},Ye={class:"title-container opacity-[0] absolute w-full h-full top-0 left-0 bg-red-500/75 rounded-xl p-5 flex justify-center items-center text-xl text-center text-white font-bold",style:{"z-index":"999"}},qe=["src","alt"],Je={class:"block mt-2 text-center text-md text-gray-900 lg:hidden"},Ge={setup(d){const i=y([]);return(async()=>{const o=await(await fetch("https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase?_embed")).json();i.value=o})(),(a,o)=>{const t=k("router-link");return n(),L(x,{label:"Showcase"},{default:g(()=>[i.value.length===0?(n(),l("div",Ve," Loading content... ")):E("",!0),e("div",Ue,[(n(!0),l(f,null,m(i.value,(s,r)=>(n(),L(t,{to:`/showcase/${s.id}`,key:r,class:"block showcase-container break-inside p-3 mb-5 text-white select-none cursor-pointer"},{default:g(()=>{var u,v,j,b,h,w;return[e("div",We,[e("div",Ye,c(s.title.rendered),1),e("img",{src:(w=(h=(b=(j=(v=(u=s._embedded)==null?void 0:u["wp:featuredmedia"])==null?void 0:v[0])==null?void 0:j.media_details)==null?void 0:b.sizes)==null?void 0:h.medium)==null?void 0:w.source_url,alt:s.slug,class:"rounded-xl shadow-md w-full",style:{"z-index":"998"}},null,8,qe)]),e("span",Je,c(s.title.rendered),1)]}),_:2},1032,["to"]))),128))])]),_:1})}}},Ke={key:0,class:"text-center"},Qe={key:1},Xe={class:"w-full text-center mb-5 text-sm text-gray-500 font-bold"},Ze={class:"text-4xl text-gray-900"},et=e("hr",{class:"my-10"},null,-1),tt={class:"prose prose-zinc prose-xl"},st=["innerHTML"],ot={setup(d){const a=P().params.id,o=y(null);return(async()=>{const s=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase/${a}`)).json();o.value=s})(),(t,s)=>(n(),L(x,null,{default:g(()=>[o.value?(n(),l("div",Qe,[e("div",Xe,[e("div",Ze,c(o.value.title.rendered),1)]),et,e("div",tt,[e("div",{innerHTML:o.value.content.rendered,class:"text-sm"},null,8,st)])])):(n(),l("div",Ke,"Loading content..."))]),_:1}))}};const nt={class:"flex flex-wrap justify-center"},lt={class:"p-1"},at=C("All"),I={props:{activeColor:Boolean},setup(d){const i=y([]);return(async()=>{const o=await(await fetch("https://portfolio.halimdut.xyz/wp-json/wp/v2/categories")).json();i.value=o})(),(a,o)=>{const t=k("router-link");return n(),l("div",nt,[e("div",lt,[p(t,{class:M(["category-button",[a.$route.query.categories==null&&d.activeColor?"bg-red-500":"bg-black"]]),to:"/blog"},{default:g(()=>[at]),_:1},8,["class"])]),(n(!0),l(f,null,m(i.value,(s,r)=>(n(),l("div",{key:r,class:"p-1"},[p(t,{class:M(["category-button",[s.id==a.$route.query.categories&&d.activeColor?"bg-red-500":"bg-black"]]),to:`/blog/?categories=${s.id}`},{default:g(()=>[C(c(s.name),1)]),_:2},1032,["class","to"])]))),128))])}}},it={class:"w-full flex justify-end pb-5"},rt={class:"relative"},ct={key:0,class:"text-center"},dt={key:1},ut=["onClick"],pt={class:"flex justify-center py-5"},gt={key:0,class:"text-center mt-5"},ht={key:1,class:"grid grid-cols-1 mt-5"},_t={class:"block text-sm text-right font-bold"},ft=e("div",{class:"border-b border-gray-300 w-full"},null,-1),mt={setup(d){const i=P(),a=y(""),o=y(""),t=y([]);async function s(){t.value=[],o.value="Loading content...";const b=i.query.categories,h=b?`categories=${b}`:"";try{const _=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/posts?${h}`)).json();t.value=_}catch(w){console.error(w)}o.value="No content found."}s(),T(i,()=>{s()});const r=y([]);async function u(){const h=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/search?search=${a.value}`)).json();r.value=h,v(),document.getElementById("searchedPostsModal").focus()}function v(){document.getElementById("searchedPostsModal").classList.toggle("hidden")}function j(){document.getElementById("searchedPostsModal").classList.toggle("hidden"),document.getElementById("searchField").focus()}return(b,h)=>{const w=k("router-link");return n(),L(x,{label:"Blog"},{default:g(()=>[e("div",it,[e("div",rt,[F(e("input",{id:"searchField",type:"text","onUpdate:modelValue":h[0]||(h[0]=_=>a.value=_),class:"border rounded-xl shadow-lg h-10 px-5 w-[300px] outline-none",placeholder:"Search post...",onKeyup:h[1]||(h[1]=H(_=>u(),["enter"]))},null,544),[[z,a.value]]),e("div",{id:"searchedPostsModal",class:"hidden absolute bg-white rounded-lg shadow-lg mt-5 py-3 w-[300px] outline-none",tabindex:"1",onBlur:h[2]||(h[2]=_=>j())},[r.value.length>0?(n(),l("ul",dt,[(n(!0),l(f,null,m(r.value,(_,S)=>(n(),l("li",{key:S,class:"py-2 px-5 hover:bg-[#f5f5f5] cursor-pointer",onClick:Bt=>b.$router.push(`/blog/${_.id}`)},c(_.title),9,ut))),128))])):(n(),l("div",ct," No content found "))],32)])]),e("div",pt,[p(I,{activeColor:""})]),t.value.length===0?(n(),l("div",gt,c(o.value),1)):(n(),l("div",ht,[(n(!0),l(f,null,m(t.value,(_,S)=>(n(),l("div",{key:S},[p(w,{to:`/blog/${_.id}`,class:"md:flex justify-between cursor-pointer hover:bg-white py-5 px-3"},{default:g(()=>[C(c(_.title.rendered)+" ",1),e("span",_t,c($(B)(_.date).format("MMM DD YYYY")),1)]),_:2},1032,["to"]),ft]))),128))]))]),_:1})}}},vt={key:0,class:"text-center"},xt={key:1},yt={class:"w-full text-center mb-5 text-sm font-bold"},bt={class:"text-4xl"},wt={class:"mt-5 font-normal"},kt=e("hr",{class:"my-10"},null,-1),$t={class:"prose prose-zinc prose-xl"},jt=["innerHTML"],Ct={class:"pt-16"},Lt=e("div",{class:"flex justify-center"},[e("span",{class:"text-lg px-3 py-2"},"Browse By Topic")],-1),St={class:"flex justify-center pt-5"},Mt={setup(d){const a=P().params.id,o=y(null);return(async()=>{const s=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/posts/${a}`)).json();o.value=s})(),(t,s)=>(n(),L(x,null,{default:g(()=>[o.value?(n(),l("div",xt,[e("div",yt,[e("div",bt,c(o.value.title.rendered),1),e("div",wt," Published "+c($(B)(o.value.date).format("MMM DD YYYY")),1)]),kt,e("div",$t,[e("div",{innerHTML:o.value.content.rendered,class:"text-[16px] blog-content"},null,8,jt)]),e("div",Ct,[Lt,e("div",St,[p(I)])])])):(n(),l("div",vt,"Loading content..."))]),_:1}))}},Pt=[{path:"/",name:"Home",component:ve,children:[{path:"",redirect:d=>"blog"},{path:"/profile",component:Oe},{path:"showcase",component:Ge},{path:"showcase/:id",component:ot},{path:"blog",component:mt},{path:"blog/:id",component:Mt},{path:"/:catchAll(.*)*",component:()=>X(()=>import("./404.6de2c4fb.js"),["assets/404.6de2c4fb.js","assets/vendor.6da4e66e.js"])}]}],Et=A({history:O(),routes:Pt});V(G).use(Et).mount("#app");export{W as _};
