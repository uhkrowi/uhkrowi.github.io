import{r as b,o as n,c as s,a as p,b as e,F as m,d as g,w as u,e as w,t as d,f as k,g as y,h as v,m as A,u as _,n as S,i as x,j as C,k as z,l as j,p as D,q as X,s as $}from"./vendor.b7cc070c.js";const L=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}};L();var F=(l,a)=>{const r=l.__vccOpts||l;for(const[i,t]of a)r[i]=t;return r};const M={},T={class:"w-screen flex justify-center p-[15px] lg:p-[50px]"};function I(l,a){const r=b("router-view");return n(),s("div",T,[p(r,{class:"max-w-[1200px]"})])}var P=F(M,[["render",I]]);const E={class:"relative w-[265px] min-h-[520px] py-[55px] px-[30px] rounded-2xl bg-black text-white"},H=e("div",{class:"text-2xl font-bold flex items-center"}," Nurul Uhkrowi ",-1),N=e("div",{class:"text-xs mt-2"},"FULLSTACK WEB DEVELOPER",-1),O={class:"pt-[40px]"},U={class:"absolute bottom-0 pb-10"},R={class:"mt-20 flex"},B=["href"],G=["src"],V=e("span",{class:"block mt-3 text-xs"},"Bogor, Indonesia ",-1),W={setup(l){const a=[{label:"Who's Nurul?",link:"/"},{label:"Showcase",link:"/showcase"},{label:"Blog",link:"/blog"}],r=[{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/github.png",link:"https://github.com/uhkrowi"},{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/linkedin-2.png",link:"https://github.com/uhkrowi"},{icon:"https://img.icons8.com/ios-filled/2x/ffffff/upwork.png",link:null},{icon:"https://img.icons8.com/ios-glyphs/2x/ffffff/facebook-f.png",link:"https://facebook.com/uhkrowi/"}];return(i,t)=>{const o=b("router-link");return n(),s("div",E,[H,N,e("div",O,[(n(),s(m,null,g(a,(c,h)=>p(o,{key:h,to:c.link,class:"block py-1.5 cursor-pointer hover:translate-x-3 transition duration-300"},{default:u(()=>[w(d(c.label),1)]),_:2},1032,["to"])),64))]),e("div",U,[e("div",R,[(n(),s(m,null,g(r,(c,h)=>e("div",{key:h,class:"flex justify-center items-center bg-red-500 w-[35px] h-[35px] rounded-full mr-3 cursor-pointer hover:bg-red-600 hover:scale-[1.15] transition duration-300"},[e("a",{href:c.link,target:"_blank"},[e("img",{src:c.icon,alt:"",class:"w-[25px]"},null,8,G)],8,B)])),64))]),V])])}}},K={class:"w-full grid grid-cols-1 lg:grid-cols-[265px_auto] gap-[30px]"},J={class:"hidden lg:block fixed"},Y=e("div",null,null,-1),q={setup(l){return(a,r)=>{const i=b("router-view");return n(),s("div",K,[e("div",J,[p(W)]),Y,p(i)])}}},Z={class:"w-full py-[70px] px-[20px] lg:px-[50px] rounded-2xl bg-white shadow-lg shadow-gray-200 text-gray-900"},Q={key:0,class:"text-2xl font-bold pb-10 text-gray-900"},ee=e("span",{class:"w-5 bg-red-500 rounded-md"},"\xA0",-1),f={props:{label:String},setup(l){return(a,r)=>(n(),s("div",Z,[l.label?(n(),s("h2",Q,[ee,w("\xA0 "+d(l.label),1)])):k("",!0),y(a.$slots,"default")]))}};var te=[{company:"Front End Developer at BeIT",date:"Jan 2020\u2005\u2013\u2005Current",jobs:["Creating mockups and prototypes","Design and build UI/UX","Integrating with web services, fixing bugs, and doing optimization","Do back end stuffs when necessary"]},{company:"Front End Developer at PT Perjalanan Menembus Galaksi",date:"Sep 2021\u2005\u2013\u2005Nov 2021",jobs:["Integrating API","Designing and Building components"]},{company:"Back End Developer at Ink & Canvas",date:"Nov 2017\u2005\u2013\u2005Oct 2019",jobs:["Working closely with clients to establish problem, specifications and system designs","Coordinating with internal in developing project plans and solutions","Building, testing, deploying, and maintaining applications","Refactoring for better performance pupose"]},{company:"Full Stack Developer at PT. IndoVisual Presentatama",date:"Feb 2016\u2005\u2013\u2005Nov 2017",jobs:["Collaborating with product management team to design, build, integrate and test systems","Designing new product elements such as IR and RF connection, CCTV live streaming, hardware integration, and device-to-device communication","Modifying existing software to fix issues, and improve performance"]}],oe=[{name:"Rental Housing",link:"https://pupr-rental-housing.netlify.app/",date:"Oct 2021\u2004- Dec 2021",description:"Rental flat, private and public housing in Indonesia for low economic citizen, supply and demand management of properties, facilitate citizen to book and rent house with ease."},{name:"Booking Room",link:null,date:"Aug 2019\u2004- Oct 2019",description:"A mobile application for scheduling meeting with booking available rooms feature, note of MOM, participants invitation, extending meeting time if possible, order meals to the pantry, etc."},{name:"Ship Rental Management",link:null,date:"Mar 2020\u2004- Apr 2020",description:"Ship rent management aim to ease fishermen to rent ships, including picking type of ship, setting rental period, extending the period, monitoring their payment. the application also helps the owners of rental to manage information about ships, their customers, payments and reports."},{name:"English Learning Institution ERP",link:null,date:"Nov 2017\u2004- Oct 2019",description:"Resource planning, monitoring and management of many modules that help user to manage data of students, employees, learning processes, payments, etc. Features: Dashboards, Integration of many modules as microservices (academic, human resource, elearning, finance, general data, usermanagement)."},{name:"Smart Home & Office",link:null,date:"Feb 2016\u2004- Nov 2017",description:"Mobile and Web app for managing, controlling and monitoring devices at home e.g lamp/light, door lock, TV, CCTV, air conditioner, curtain, switch, sensors, etc. It's main features are: Managing, Controlling and monitoring devices, Configuration, User management, Role, Permission, etc."},{name:"Data Center Management",link:null,date:"Jan 2020",description:"A web application to manage and monitor all things in datacenter, for example: sensors, cooling, UPS, racks, gensets, etc. Some it's features are Dashboard, Reports, Master Data (User, Role, Permission, Config)."}],ne=[{label:"Responsive Web Design at FreeCodeCamp",url:"https://www.freecodecamp.org/certification/Nurul_Uhkrowi/responsive-web-design"},{label:"Go Course at SoloLearn",url:"https://www.sololearn.com/certificates/course/en/2294107/1164/landscape/png"},{label:"React & Redux Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1097-2294107/jpg/"},{label:"Csharp Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1080-2294107/jpg/"},{label:"SQL Fundamentals Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1060-2294107/jpg/"},{label:"PHP Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1059-2294107/jpg/"},{label:"JavaScript Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1024-2294107/jpg/"},{label:"HTML Fundamentals Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1014-2294107/jpg/"},{label:"Java Course at SoloLearn",url:"https://www.sololearn.com/Certificate/1068-2294107/jpg/"}],se=["Javascript","Go lang","NodeJS","MySQL","PostgreSQL","Mongo DB","Microsoft Azure"];const ae={class:"grid gap-[30px]"},ie={class:"grid grid-cols-1 lg:grid-cols-[200px_auto] gap-5 lg:gap-0"},re=e("div",{class:"flex justify-center"},[e("img",{src:"https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/273712361_2311512795656245_3200926715461918139_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=f_czE6ZNMU8AX-Ggb6O&tn=9PpfJjc4oygVXk-7&_nc_ht=scontent-sin6-3.xx&oh=00_AT8PdKkl9B-sHTy_Tp8lTvYKw5O2rv8Z5-zCFgz-tsdVwA&oe=62085B72",class:"w-[120px] h-[120px] rounded-full shadow-md"})],-1),le=["innerHTML"],ce={class:"grid grid-cols-1 lg:grid-cols-[200px_auto]"},de={class:"text-sm"},pe={class:"block font-bold"},ue={class:"grid grid-cols-1 lg:grid-cols-[200px_auto]"},me=e("div",null,null,-1),ge={class:"grid grid-cols-2 gap-y-5"},fe={class:"grid grid-cols-1 gap-10"},he={class:"block text-gray-500 font-bold text-sm py-2"},_e={class:"block"},be={class:"text-blue-500"},we=["href"],ve=e("div",{class:"grid grid-cols-2 gap-10"},[e("div",{class:"flex"},[e("div",{class:"flex items-start mr-3"},[e("img",{src:"https://img.icons8.com/ios/1x/mail.png",alt:"mail",class:"w-[25px]"})]),e("div",null,[e("span",{class:"block font-bold"},"Email"),e("span",{class:"block"},[e("a",{href:"mailto:uhkrowi@gmail.com"},"uhkrowi@gmail.com")])])])],-1),xe={setup(l){const a=v("");return(async()=>{const i=await(await fetch("./data/introduction.md")).text();a.value=A.parse(i)})(),(r,i)=>(n(),s("div",ae,[p(f,{label:"Hi, my name's Nurul Uhkrowi"},{default:u(()=>[e("div",ie,[re,e("div",{id:"introduction",innerHTML:a.value,class:"flex flex-col justify-center prose text-gray-900"},null,8,le)])]),_:1}),p(f,{label:"Experience"},{default:u(()=>[(n(!0),s(m,null,g(_(te),(t,o)=>(n(),s("div",{key:o,class:"py-5"},[e("div",ce,[e("div",de,d(t.date),1),e("div",null,[e("span",pe,d(t.company),1),e("ul",null,[(n(!0),s(m,null,g(t.jobs,(c,h)=>(n(),s("li",{key:h}," \u2022 "+d(c),1))),128))])])])]))),128))]),_:1}),p(f,{label:"Skill"},{default:u(()=>[e("div",ue,[me,e("div",ge,[(n(!0),s(m,null,g(_(se),(t,o)=>(n(),s("div",{key:o},d(t),1))),128))])])]),_:1}),p(f,{label:"Projects"},{default:u(()=>[e("div",fe,[(n(!0),s(m,null,g(_(oe),(t,o)=>(n(),s("div",{key:o},[e("div",null,[e("span",{class:S(["font-bold",[t.link!==null&&"text-blue-700 cursor-pointer hover:underline"]])},d(t.name),3)]),e("span",he,d(t.date),1),e("span",_e,d(t.description),1)]))),128))])]),_:1}),p(f,{label:"Certification"},{default:u(()=>[e("ul",be,[(n(!0),s(m,null,g(_(ne),(t,o)=>(n(),s("li",{key:o},[e("a",{href:t.url,target:"_blank"},d(t.label),9,we)]))),128))])]),_:1}),p(f,{label:"Shoot a message"},{default:u(()=>[ve]),_:1})]))}},ke={class:"grid grid-cols-3 gap-10"},ye={class:"block mt-2 text-md"},Ae={setup(l){const a=[{imageUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad479584-d892-40c8-975b-1552568e6c7c/screencapture-gmn-dev-local-2022-02-09-21_44_50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220209T144536Z&X-Amz-Expires=86400&X-Amz-Signature=5619bb495d76bf71648e91eae73b05f9f4d2b0c4c94218e7068eb5e63b1c3bbb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22screencapture-gmn-dev-local-2022-02-09-21_44_50.png%22&x-id=GetObject",label:"gmn.com"},{imageUrl:"https://www.upwork.com/att/download/portfolio/persons/uid/1159724375953604608/profile/projects/files/fd850b19-8e0b-4b4c-8049-f8fa28f6eac2",label:"Rental Housing Management"},{imageUrl:"https://www.upwork.com/att/download/portfolio/persons/uid/1159724375953604608/profile/projects/files/becb9272-4fa9-49c7-b76d-04cd26ffbebe",label:"Booking Room Management"},{imageUrl:"https://www.upwork.com/att/download/portfolio/persons/uid/1159724375953604608/profile/projects/files/8a0e9129-3759-4867-93cc-0366dd0735cf",label:"attayasa.com"},{imageUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4abf869a-41d8-4533-8f71-56fd662fabbc/55.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220209T143234Z&X-Amz-Expires=86400&X-Amz-Signature=8de6dec208ede2c1ba02346b7dfb4e27f4e699ba428279ea65c3696056729d00&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2255.png%22&x-id=GetObject",label:"Ship Rental Management"},{imageUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bda5263c-9e0e-471f-82aa-fb4374d24369/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220209T144122Z&X-Amz-Expires=86400&X-Amz-Signature=9ab489502c0a84d96cff4b939cf839cf34355ed473a0a0d939db93ed309f4b2a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%221.png%22&x-id=GetObject",label:"High School Portal"},{imageUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd316040-b557-44d4-8d81-48dfd3b3dcb9/aaa-05b0379ac8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220209T143956Z&X-Amz-Expires=86400&X-Amz-Signature=66e571d6fef80b52efd9d29ffa5bd79d16a490d9aca8704dfd1a100c0f0829d8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22aaa-05b0379ac8.png%22&x-id=GetObject",label:"Invoice Generator"}];return(r,i)=>(n(),x(f,{label:"Showcase"},{default:u(()=>[e("div",ke,[(n(),s(m,null,g(a,(t,o)=>e("div",{key:o},[e("div",{class:"w-full h-[200px] rounded-xl border cursor-pointer hover:scale-[1.05] transition duration-300",style:C([[`background-image:url(${t.imageUrl})`],{"background-size":"cover"}])},null,4),e("span",ye,d(t.label),1)])),64))])]),_:1}))}},Se={class:"grid grid-cols-1 gap-5"},Ce={class:"text-lg font-bold"},ze={class:"block text-sm font-bold text-gray-500"},je={setup(l){const a=v([]);return(async()=>{const i=await(await fetch("https://portfolio.halimdut.xyz/wp-json/wp/v2/posts")).json();a.value=i})(),(r,i)=>{const t=b("router-link");return n(),x(f,{label:"Blog"},{default:u(()=>[e("div",Se,[(n(!0),s(m,null,g(a.value,(o,c)=>(n(),s("div",{key:c},[e("div",Ce,[p(t,{to:`/blog/${o.id}`,class:"hover:underline"},{default:u(()=>[w(d(o.title.rendered),1)]),_:2},1032,["to"])]),e("span",ze,d(_(z)(o.date).format("DD MMM YY")),1)]))),128))])]),_:1})}}},De=["innerHTML"],Xe={setup(l){const r=j().params.id,i=v(null);return(async()=>{const o=await(await fetch(`https://portfolio.halimdut.xyz/wp-json/wp/v2/posts/${r}`)).json();i.value=o})(),(t,o)=>(n(),x(f,{label:i.value!==null&&i.value.title.rendered},{default:u(()=>[i.value!==null?(n(),s("div",{key:0,innerHTML:i.value.content.rendered,class:"prose"},null,8,De)):k("",!0)]),_:1},8,["label"]))}},$e=[{path:"/",name:"Home",component:q,children:[{path:"",component:xe},{path:"showcase",component:Ae},{path:"blog",component:je},{path:"blog/:id",component:Xe}]}],Le=D({history:X(),routes:$e});$(P).use(Le).mount("#app");