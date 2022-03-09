import{r as j,o as s,c as n,a as p,b as e,F as f,d as m,e as C,w as g,t as r,f as N,g as E,h as v,m as I,u as b,n as T,i as L,j as R,k as P,l as F,v as z,p as H,q as D,s as O,x as A,y as V}from"./vendor.bbb3b506.js";const U=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};U();var W=(c,l)=>{const i=c.__vccOpts||c;for(const[a,t]of l)i[a]=t;return i};const Y={},J={class:"flex justify-center p-[15px] lg:p-[50px] text-gray-900"};function G(c,l){const i=j("router-view");return s(),n("div",J,[p(i,{class:"max-w-[1200px]"})])}var K=W(Y,[["render",G]]);const Q={class:"w-full flex justify-end lg:hidden"},q=e("img",{src:"https://img.icons8.com/ios-glyphs/72/ffffff/menu--v1.png",alt:"menu",class:"h-6"},null,-1),X=[q],Z={id:"navigation",class:"hidden bottom-0 top-0 left-0 right-0 lg:block lg:relative lg:w-[265px] lg:min-h-[520px] p-4 lg:py-[55px] lg:px-[30px] bg-[#111111] text-white rounded-xl"},ee={class:"w-full flex justify-end mb-5 lg:hidden"},te=e("img",{src:"https://img.icons8.com/ios-glyphs/72/delete-sign.png",alt:"menu",class:"h-6"},null,-1),se=[te],oe=e("div",{class:"text-2xl font-bold flex items-center"},[C(" Nurul Uhkrowi "),e("span",{class:"text-4xl text-red-500 ml-2"},"\u2022")],-1),ne=e("div",{class:"text-xs mt-2"},"FULLSTACK WEB DEVELOPER",-1),ae={class:"pt-[80px] lg:pt-[40px] w-full flex flex-col items-center lg:block"},le={class:"absolute bottom-0 pb-10 w-full"},ie={class:"mt-20 flex justify-center flex-wrap lg:justify-start"},re=["href"],ce=["src"],de=e("span",{class:"block mt-3 text-xs text-center lg:text-left"},"\xA9 2022 Uhkrowi | Bogor, Indonesia",-1),ue={setup(c){const l=[{label:"Who's Nurul?",link:"/"},{label:"Showcase",link:"/showcase"},{label:"Blog",link:"/blog"}],i=[{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/github.png",link:"https://github.com/uhkrowi"},{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/linkedin-2.png",link:"https://www.linkedin.com/in/uhkrowi/"},{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/facebook-f.png",link:"https://facebook.com/uhkrowi/"}],a=()=>{const t=document.getElementById("navigation");t.classList.toggle("fixed"),t.classList.toggle("hidden")};return(t,o)=>{const d=j("router-link");return s(),n("div",null,[e("div",Q,[e("div",{class:"bg-[#111111] w-10 h-10 rounded-xl flex justify-center items-center",onClick:o[0]||(o[0]=u=>a())},X)]),e("div",Z,[e("div",ee,[e("div",{class:"bg-white w-10 h-10 rounded-xl flex justify-center items-center",onClick:o[1]||(o[1]=u=>a())},se)]),oe,ne,e("div",ae,[(s(),n(f,null,m(l,(u,y)=>p(d,{key:y,to:u.link,class:"block py-1.5 cursor-pointer hover:translate-x-3 transition duration-300 text-[1rem]",onClick:o[2]||(o[2]=k=>a())},{default:g(()=>[C(r(u.label),1)]),_:2},1032,["to"])),64))]),e("div",le,[e("div",ie,[(s(),n(f,null,m(i,(u,y)=>e("div",{key:y,class:"flex justify-center items-center bg-red-500 w-[35px] h-[35px] rounded-full mr-3 cursor-pointer hover:bg-red-600 hover:scale-[1.15] transition duration-300"},[e("a",{href:u.link,target:"_blank"},[e("img",{src:u.icon,alt:"",class:"w-[25px]"},null,8,ce)],8,re)])),64))]),de])])])}}},pe={class:"w-full grid grid-cols-1 lg:grid-cols-[265px_auto] gap-[10px] lg:gap-[30px]"},ge={class:"static lg:fixed"},he=e("div",null,null,-1),fe={setup(c){return(l,i)=>{const a=j("router-view");return s(),n("div",pe,[e("div",ge,[p(ue)]),he,p(a)])}}};var me="/images/profile.jpg";const _e={class:"w-full py-[20px] px-[20px] lg:px-[50px]"},ve={key:0,class:"text-2xl pb-10"},xe=e("span",{class:"w-5 bg-red-500 rounded-md"},"\xA0",-1),x={props:{label:String},setup(c){return(l,i)=>(s(),n("div",_e,[c.label?(s(),n("h2",ve,[xe,C("\xA0 "+r(c.label),1)])):N("",!0),E(l.$slots,"default")]))}};var we=[{company:"Front End Developer at BeIT",date:"Jan 2020\u2005\u2013\u2005Current",jobs:["Creating mockups and prototypes","Design and build UI/UX","Integrating with web services, fixing bugs, and doing optimization","Do back end stuffs when necessary"]},{company:"Front End Developer at PT Perjalanan Menembus Galaksi",date:"Sep 2021\u2005\u2013\u2005Nov 2021",jobs:["Integrating API","Designing and Building components"]},{company:"Back End Developer at Ink & Canvas",date:"Nov 2017\u2005\u2013\u2005Oct 2019",jobs:["Working closely with clients to establish problem, specifications and system designs","Coordinating with internal in developing project plans and solutions","Building, testing, deploying, and maintaining applications","Refactoring for better performance pupose"]},{company:"Full Stack Developer at PT. IndoVisual Presentatama",date:"Feb 2016\u2005\u2013\u2005Nov 2017",jobs:["Collaborating with product management team to design, build, integrate and test systems","Designing new product elements such as IR and RF connection, CCTV live streaming, hardware integration, and device-to-device communication","Modifying existing software to fix issues, and improve performance"]}],ye=[{name:"Rental Housing",link:"https://pupr-rental-housing.netlify.app/",date:"Oct 2021\u2004- Dec 2021",description:"Rental flat, private and public housing in Indonesia for low economic citizen, supply and demand management of properties, facilitate citizen to book and rent house with ease."},{name:"Booking Room",link:null,date:"Aug 2019\u2004- Oct 2019",description:"A mobile application for scheduling meeting with booking available rooms feature, note of MOM, participants invitation, extending meeting time if possible, order meals to the pantry, etc."},{name:"Ship Rental Management",link:null,date:"Mar 2020\u2004- Apr 2020",description:"Ship rent management aim to ease fishermen to rent ships, including picking type of ship, setting rental period, extending the period, monitoring their payment. the application also helps the owners of rental to manage information about ships, their customers, payments and reports."},{name:"English Learning Institution ERP",link:null,date:"Nov 2017\u2004- Oct 2019",description:"Resource planning, monitoring and management of many modules that help user to manage data of students, employees, learning processes, payments, etc. Features: Dashboards, Integration of many modules as microservices (academic, human resource, elearning, finance, general data, usermanagement)."},{name:"Smart Home & Office",link:null,date:"Feb 2016\u2004- Nov 2017",description:"Mobile and Web app for managing, controlling and monitoring devices at home e.g lamp/light, door lock, TV, CCTV, air conditioner, curtain, switch, sensors, etc. It's main features are: Managing, Controlling and monitoring devices, Configuration, User management, Role, Permission, etc."},{name:"Data Center Management",link:null,date:"Jan 2020",description:"A web application to manage and monitor all things in datacenter, for example: sensors, cooling, UPS, racks, gensets, etc. Some it's features are Dashboard, Reports, Master Data (User, Role, Permission, Config)."}],be=[{label:"Responsive Web Design at FreeCodeCamp",url:"https://www.freecodecamp.org/certification/Nurul_Uhkrowi/responsive-web-design"},{label:"Go Course at SoloLearn",url:"https://www.sololearn.com/certificates/course/en/2294107/1164/landscape/png"},{label:"React & Redux Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1097-2294107/jpg/"},{label:"Csharp Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1080-2294107/jpg/"},{label:"SQL Fundamentals Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1060-2294107/jpg/"},{label:"PHP Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1059-2294107/jpg/"},{label:"JavaScript Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1024-2294107/jpg/"},{label:"HTML Fundamentals Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1014-2294107/jpg/"},{label:"Java Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1068-2294107/jpg/"}],ke=["Go lang","GoFiber","Javascript","NodeJS","Express.js","React.js","Vue.js","MySQL","PostgreSQL","Mongo DB","Wordpress","Heroku","Netlify","Microsoft Azure","Twilio"];const $e={class:"grid gap-[30px]"},je={class:"grid grid-cols-1 lg:grid-cols-[200px_auto] gap-5 lg:gap-0"},Ce=e("div",{class:"flex justify-center"},[e("img",{src:me,class:"w-[120px] h-[120px] rounded-full shadow-md"})],-1),Le=["innerHTML"],Me={class:"grid grid-cols-1 lg:grid-cols-[200px_auto]"},Se={class:"block font-bold"},Pe={class:"grid grid-cols-1 lg:grid-cols-[200px_auto]"},De=e("div",null,null,-1),Be={class:"grid grid-cols-2 gap-y-5"},Ne={class:"grid grid-cols-1 gap-10"},Ee={class:"block text-gray-500 font-bold text-sm py-2"},Ie={class:"block"},Te={class:"text-blue-700"},Re=["href"],Fe=e("div",{class:"grid grid-cols-2 gap-10"},[e("div",{class:"flex"},[e("div",{class:"flex items-start mr-3"},[e("img",{src:"https://img.icons8.com/ios/1x/mail.png",alt:"mail",class:"w-[25px]"})]),e("div",null,[e("span",{class:"block font-bold"},"Email"),e("span",{class:"block hover:underline"},[e("a",{href:"mailto:uhkrowi@gmail.com"},"uhkrowi@gmail.com")])])])],-1),ze={setup(c){const l=v("");return(async()=>{const a=await(await fetch("./data/introduction.md")).text();l.value=I.parse(a)})(),(i,a)=>(s(),n("div",$e,[p(x,{label:"Hi, my name's Nurul"},{default:g(()=>[e("div",je,[Ce,e("div",{id:"introduction",innerHTML:l.value,class:"flex flex-col justify-center prose text-gray-900"},null,8,Le)])]),_:1}),p(x,{label:"Experiences"},{default:g(()=>[(s(!0),n(f,null,m(b(we),(t,o)=>(s(),n("div",{key:o,class:"py-5"},[e("div",Me,[e("div",null,r(t.date),1),e("div",null,[e("span",Se,r(t.company),1),e("ul",null,[(s(!0),n(f,null,m(t.jobs,(d,u)=>(s(),n("li",{key:u}," \u2022 "+r(d),1))),128))])])])]))),128))]),_:1}),p(x,{label:"Waepons"},{default:g(()=>[e("div",Pe,[De,e("div",Be,[(s(!0),n(f,null,m(b(ke),(t,o)=>(s(),n("div",{key:o},r(t),1))),128))])])]),_:1}),p(x,{label:"Projects"},{default:g(()=>[e("div",Ne,[(s(!0),n(f,null,m(b(ye),(t,o)=>(s(),n("div",{key:o},[e("div",null,[e("span",{class:T(["font-bold",[t.link!==null&&"text-blue-700 cursor-pointer hover:underline"]])},r(t.name),3)]),e("span",Ee,r(t.date),1),e("span",Ie,r(t.description),1)]))),128))])]),_:1}),p(x,{label:"Certifications"},{default:g(()=>[e("ul",Te,[(s(!0),n(f,null,m(b(be),(t,o)=>(s(),n("li",{key:o},[e("a",{href:t.url,target:"_blank",class:"hover:underline"},r(t.label),9,Re)]))),128))])]),_:1}),p(x,{label:"Shoot a message"},{default:g(()=>[Fe]),_:1})]))}},He={key:0,class:"text-center"},Oe={key:1,class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"},Ae=["onClick"],Ve=["onClick"],Ue={setup(c){const l=v([]);return(async()=>{const a=await(await fetch("https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase?_embed")).json();l.value=a})(),(i,a)=>(s(),L(x,{label:"Showcase"},{default:g(()=>[l.value.length===0?(s(),n("div",He,"Loading content...")):(s(),n("div",Oe,[(s(!0),n(f,null,m(l.value,(t,o)=>{var d,u,y,k,$,w;return s(),n("div",{key:o},[e("div",{class:"w-full h-[200px] rounded-xl border cursor-pointer hover:scale-[1.05] transition duration-300",style:R([[`background-image:url(${(w=($=(k=(y=(u=(d=t._embedded)==null?void 0:d["wp:featuredmedia"])==null?void 0:u[0])==null?void 0:y.media_details)==null?void 0:k.sizes)==null?void 0:$.medium)==null?void 0:w.source_url})`],{"background-size":"cover"}]),onClick:h=>i.$router.push(`/showcase/${t.id}`)},null,12,Ae),e("span",{class:"block mt-2 text-md cursor-pointer hover:underline",onClick:h=>i.$router.push(`/showcase/${t.id}`)},r(t.title.rendered),9,Ve)])}),128))]))]),_:1}))}},We={key:0,class:"text-center"},Ye={key:1},Je={class:"w-full text-center mb-5 text-sm text-gray-500 font-bold"},Ge={class:"text-4xl text-gray-900"},Ke=e("hr",{class:"my-10"},null,-1),Qe={class:"prose prose-zinc prose-xl"},qe=["innerHTML"],Xe={setup(c){const i=P().params.id,a=v(null);return(async()=>{const o=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase/${i}`)).json();a.value=o})(),(t,o)=>(s(),L(x,null,{default:g(()=>[a.value?(s(),n("div",Ye,[e("div",Je,[e("div",Ge,r(a.value.title.rendered),1)]),Ke,e("div",Qe,[e("div",{innerHTML:a.value.content.rendered,class:"text-sm"},null,8,qe)])])):(s(),n("div",We,"Loading content..."))]),_:1}))}},Ze={class:"flex"},et=["onClick"],B={setup(c){const l=v([]);return(async()=>{const a=await(await fetch("https://portfolio.halimdut.xyz/wp-json/wp/v2/categories")).json();l.value=a})(),(i,a)=>(s(),n("div",Ze,[(s(!0),n(f,null,m(l.value,(t,o)=>(s(),n("div",{key:o,class:"p-1"},[e("button",{class:"bg-black rounded-lg shadow-md flex justify-center px-3 py-2 hover:scale-[1.05] transition duration-300 text-white text-sm",onClick:d=>i.$emit("onCategoryClicked",t.id)},r(t.name),9,et)]))),128))]))}},tt={class:"w-full flex justify-end pb-5"},st={class:"relative"},ot={key:0,class:"text-center"},nt={key:1},at=["onClick"],lt={class:"flex justify-center py-5"},it={key:0,class:"text-center"},rt={key:1,class:"grid grid-cols-1"},ct={class:"block text-sm font-bold"},dt=e("div",{class:"border-b border-gray-300 w-full"},null,-1),ut={setup(c){const l=v(""),i=v(null),a=v("Loading content..."),t=v([]);async function o(){const w=i.value?`categories=${i.value}`:"",M=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/posts?${w}`)).json();t.value=M,a.value="No content found."}o();const d=v([]);async function u(){const h=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/search?search=${l.value}`)).json();d.value=h,y(),document.getElementById("searchedPostsModal").focus()}function y(){document.getElementById("searchedPostsModal").classList.toggle("hidden")}function k(){document.getElementById("searchedPostsModal").classList.toggle("hidden"),document.getElementById("searchField").focus()}function $(w){i.value=w,o()}return(w,h)=>{const M=j("router-link");return s(),L(x,{label:"Blog"},{default:g(()=>[e("div",tt,[e("div",st,[F(e("input",{id:"searchField",type:"text","onUpdate:modelValue":h[0]||(h[0]=_=>l.value=_),class:"border rounded-lg shadow-lg h-10 px-5 w-[300px] outline-none",placeholder:"Search...",onKeyup:h[1]||(h[1]=H(_=>u(),["enter"]))},null,544),[[z,l.value]]),e("div",{id:"searchedPostsModal",class:"hidden absolute bg-white rounded-lg shadow-lg mt-5 py-3 w-[300px] outline-none",tabindex:"1",onBlur:h[2]||(h[2]=_=>k())},[d.value.length>0?(s(),n("ul",nt,[(s(!0),n(f,null,m(d.value,(_,S)=>(s(),n("li",{key:S,class:"py-2 px-5 hover:bg-[#f5f5f5] cursor-pointer",onClick:Ct=>w.$router.push(`/blog/${_.id}`)},r(_.title),9,at))),128))])):(s(),n("div",ot," No content found "))],32)])]),e("div",lt,[p(B,{onOnCategoryClicked:$})]),t.value.length===0?(s(),n("div",it,r(a.value),1)):(s(),n("div",rt,[(s(!0),n(f,null,m(t.value,(_,S)=>(s(),n("div",{key:S},[p(M,{to:`/blog/${_.id}`,class:"flex justify-between cursor-pointer hover:bg-[#f5f5f5] py-5 px-3"},{default:g(()=>[C(r(_.title.rendered)+" ",1),e("span",ct,r(b(D)(_.date).format("MMM DD, YYYY")),1)]),_:2},1032,["to"]),dt]))),128))]))]),_:1})}}},pt={key:0,class:"text-center"},gt={key:1},ht={class:"w-full text-center mb-5 text-sm font-bold"},ft={class:"text-4xl"},mt={class:"mt-5 font-normal"},_t=e("hr",{class:"my-10"},null,-1),vt={class:"prose prose-zinc prose-xl"},xt=["innerHTML"],wt={class:"pt-16"},yt=e("div",{class:"flex justify-center"},[e("span",{class:"text-lg px-3 py-2"},"Browse By Topic")],-1),bt={class:"flex justify-center pt-5"},kt={setup(c){const i=P().params.id,a=v(null);return(async()=>{const o=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/posts/${i}`)).json();a.value=o})(),(t,o)=>(s(),L(x,null,{default:g(()=>[a.value?(s(),n("div",gt,[e("div",ht,[e("div",ft,r(a.value.title.rendered),1),e("div",mt," Published "+r(b(D)(a.value.date).format("MMM DD YYYY")),1)]),_t,e("div",vt,[e("div",{innerHTML:a.value.content.rendered,class:"text-[16px] blog-content"},null,8,xt)]),e("div",wt,[yt,e("div",bt,[p(B)])])])):(s(),n("div",pt,"Loading content..."))]),_:1}))}},$t=[{path:"/",name:"Home",component:fe,children:[{path:"",component:ze},{path:"showcase",component:Ue},{path:"showcase/:id",component:Xe},{path:"blog",component:ut},{path:"blog/:id",component:kt}]}],jt=O({history:A(),routes:$t});V(K).use(jt).mount("#app");