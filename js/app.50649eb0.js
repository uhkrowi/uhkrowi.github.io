(function(e){function t(t){for(var o,s,r=t[0],l=t[1],c=t[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"35eb":function(e,t,n){"use strict";n("7828")},"38c8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"layout"}},[n("router-view",{attrs:{name:"content"}})],1)],1)},a=[],s=(n("034f"),n("2877")),r={},l=Object(s["a"])(r,i,a,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-full overflow-hidden"},[n("div",[n("div",{staticClass:"messages"})])])}],m=(n("e369"),{mounted:function(){this.doIntroduction()},methods:{doIntroduction:function(){var e=this;window.isAnimeLoaded?window.isIntroductionRendered?window.doIntro(!1):window.doIntro():setTimeout((function(){e.doIntroduction()}),1e3)}}}),b=m,p=(n("90c8"),Object(s["a"])(b,d,f,!1,null,"6d6eecff",null)),h=p.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-green-200 w-full h-full"})},w=[],v={},y=Object(s["a"])(v,g,w,!1,null,null,null),x=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cv-body w-full h-full flex flex-col justify-center"},[e._m(0),n("div",{staticClass:"flex justify-center mt-10"},[n("a",{attrs:{href:e.downloadUrl,download:"",target:"_blank"}},[e._m(1)])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center border border-main border-dashed p-5"},[e._v(" You can see the details of my profile on this 👉🏻 "),n("a",{staticClass:"font-bold text-blue-600",attrs:{href:"https://www.notion.so/Nurul-Uhkrowi-10eab3ce3fb14bb0b04038affd9c4a9a",target:"_blank"}},[e._v("page")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-customgray button rounded-full border-2 border-main p-2 w-12 h-12 flex justify-center items-center cursor-pointer mb-10",attrs:{title:"Download the CV"}},[n("img",{staticClass:"h-6",attrs:{src:"https://img.icons8.com/windows/1x/download.png"}})])}],C={data:function(){return{downloadUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4bbdf6d4-767e-4fc5-93fb-4bc763603314/CV_-_Nurul_Uhkrowi.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210710T235256Z&X-Amz-Expires=86400&X-Amz-Signature=44571d096ccab9a52f4d38af82c83c2c4f55df3cdada0eab74855b99e5149ada&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Curriculum%2520Vitae.pdf%22"}}},j=C,O=(n("35eb"),Object(s["a"])(j,_,k,!1,null,"1ef06f98",null)),E=O.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-indigo-200 w-full h-full"})},T=[],A={},I=Object(s["a"])(A,L,T,!1,null,null,null),$=I.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-center h-full"},[n("div",{staticClass:"grid grid-cols-3 gap-5"},e._l(e.contacts,(function(t,o){return n("div",{key:o,staticClass:"flex flex-col justify-center items-center h-32 border rounded-xl select-none",class:t.disabled?"bg-disabled":"hover:bg-customgray cursor-pointer",on:{click:function(n){!t.disabled&&e.goTo(t.url,!0)}}},[n("img",{attrs:{src:t.icon}}),n("div",{staticClass:"text-center"},[e._v(e._s(t.label))])])})),0)])},H=[],M={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?window.open(e,"_blank"):this.$router.push(e)}}},z={mixins:[M],data:function(){return{contacts:[{label:"Facebook",url:"https://facebook.com/uhkrowi",icon:"https://img.icons8.com/windows/1x/facebook-new.png"},{label:"Linkedin",url:"https://www.linkedin.com/in/uhkrowi/",icon:"https://img.icons8.com/windows/1x/linkedin.png"},{label:"Github",url:"https://github.com/uhkrowi",icon:"https://img.icons8.com/windows/1x/github.png"},{label:"Mail",url:"mailto:uhkrowi@gmail.com",icon:"https://img.icons8.com/windows/1x/message-group.png"},{label:"Instagram",url:"https://www.instagram.com/iyung__/",icon:"https://img.icons8.com/windows/1x/instagram-new.png",disabled:!0},{label:"Hackerrank",url:null,icon:"https://img.icons8.com/windows/1x/hackerrank.png",disabled:!0},{label:"Medium",url:null,icon:"https://img.icons8.com/windows/1x/medium-logo.png",disabled:!0},{label:"Whatsapp",url:null,icon:"https://img.icons8.com/windows/1x/whatsapp.png",disabled:!0}]}}},P=z,F=Object(s["a"])(P,S,H,!1,null,null,null),X=F.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full h-screen flex justify-center layout"},[n("div",{staticClass:"w-100 h-screen flex flex-col md:py-12"},[n("Header"),n("div",{staticClass:"w-full flex-grow p-5 overflow-auto bg-white border-main"},[e._t("default")],2),n("Footer")],1)])},V=[],W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-16 w-full flex-shrink-0 md:rounded-t-3xl bg-white"},[n("div",{staticClass:"w-full flex h-full"},[n("div",{staticClass:"text-center font-bold text-2xl w-full select-none"},[e._v(" . . . ")])])])}],D={mixins:[M]},G=D,N=Object(s["a"])(G,W,q,!1,null,null,null),B=N.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-16 w-full flex-shrink-0 md:rounded-b-3xl flex bg-white"},[n("div",{staticClass:"flex w-full"},e._l(e.buttons,(function(t,o){return n("div",{key:o,staticClass:"flex-1 h-full flex justify-center hover:bg-customgray  cursor-pointer items-center flex justify-center select-none",class:0===o?"rounded-bl-3xl":o===e.buttons.length-1?"rounded-br-3xl":"",on:{click:function(n){return e.goTo(t.url)}}},[n("img",{attrs:{src:t.icon}})])})),0)])},K=[],R={mixins:[M],data:function(){return{buttons:[{icon:"https://img.icons8.com/windows/1x/hand-lizard.png",url:"/bio"},{icon:"https://img.icons8.com/windows/1x/metal-music.png",url:"/cv"},{icon:"https://img.icons8.com/windows/1x/take-it-easy.png",url:"/contact"}]}}},Y=R,Q=Object(s["a"])(Y,J,K,!1,null,null,null),Z=Q.exports,ee={components:{Header:B,Footer:Z}},te=ee,ne=Object(s["a"])(te,U,V,!1,null,null,null),oe=ne.exports;o["a"].use(u["a"]);var ie=[{path:"/",name:"Bio",components:{content:h,layout:oe}},{path:"/portfolio",name:"Portfolio",components:{content:x,layout:oe}},{path:"/cv",name:"CV",components:{content:E,layout:oe}},{path:"/message",name:"Message",components:{content:$,layout:oe}},{path:"/contact",name:"Contact",components:{content:X,layout:oe}},{path:"*",name:"Bio",components:{content:h,layout:oe}}],ae=new u["a"]({mode:"history",base:"/",routes:ie}),se=ae,re=(n("a766"),n("7cde"),n("38c8"),n("67b0"));o["a"].use(re["a"]),window.isAnimeLoaded=!1,o["a"].loadScript("https://juliangarnier.com/js/anime.js").then((function(){window.isAnimeLoaded=!0})).catch((function(){})),o["a"].config.productionTip=!1,new o["a"]({router:se,render:function(e){return e(c)}}).$mount("#app")},7828:function(e,t,n){},"7cde":function(e,t,n){},"85ec":function(e,t,n){},"90c8":function(e,t,n){"use strict";n("aba0")},a766:function(e,t,n){},aba0:function(e,t,n){},e369:function(e,t,n){n("ac1f"),n("5319"),window.doIntro=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelector(".messages"),n=e?20:0,o="<b>•</b><b>•</b><b>•</b>",i=0,a=["Hi! 👋","Nice to see you!","My name's Uhkrowi","I do code and design application","Currently I'm working as a freelancer of full stack developer",'There are some works I\'ve done for personal purpose,\n        <a href="https://www.notion.so/uhkrowi/bcf34d2d1fd64d169dff00f9626b4572" target="_blank">check \'em out </a>',"Good day! 🧔🏻"],s=function(){return parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))},r=function(e){return e/s()+"rem"},l=function(e,t){var n=document.createElement("div"),i=document.createElement("span"),a=document.createElement("span");return n.classList.add("bubble"),n.classList.add("is-loading"),n.classList.add("cornered"),n.classList.add("right"===t?"right":"left"),i.classList.add("message"),a.classList.add("loading"),i.innerHTML=e,a.innerHTML=o,n.appendChild(a),n.appendChild(i),n.style.opacity=0,{bubble:n,message:i,loading:a}},c=function(e){return dimensions={loading:{w:"4rem",h:"2.25rem"},bubble:{w:r(e.bubble.offsetWidth+4),h:r(e.bubble.offsetHeight)},message:{w:r(e.message.offsetWidth+4),h:r(e.message.offsetHeight)}}},u=function(e,o){var s=e.replace(/<(?:.|\n)*?>/gm,"").length*n+500,r=l(e,o);t.appendChild(r.bubble),t.appendChild(document.createElement("br"));var u=c(r);r.bubble.style.width="0rem",r.bubble.style.height=u.loading.h,r.message.style.width=u.message.w,r.message.style.height=u.message.h,r.bubble.style.opacity=1;var d=r.bubble.offsetTop+r.bubble.offsetHeight;if(d>t.offsetHeight)anime({targets:t,scrollTop:d,duration:750});var f=anime({targets:r.bubble,width:["0rem",u.loading.w],marginTop:["2.5rem",0],marginLeft:["-2.5rem",0],duration:800,easing:"easeOutElastic"}),m=anime({targets:r.bubble,scale:[1.05,.95],duration:1100,loop:!0,direction:"alternate",easing:"easeInOutQuad"}),b=(anime({targets:r.loading,translateX:["-2rem","0rem"],scale:[.5,1],duration:400,delay:25,easing:"easeOutElastic"}),anime({targets:r.bubble.querySelectorAll("b"),scale:[1,1.25],opacity:[.5,1],duration:300,loop:!0,direction:"alternate",delay:function(e){return 100*e+50}}));setTimeout((function(){m.pause(),b.restart({opacity:0,scale:0,loop:!1,direction:"forwards",update:function(e){e.progress>=65&&r.bubble.classList.contains("is-loading")&&(r.bubble.classList.remove("is-loading"),anime({targets:r.message,opacity:[0,1],duration:300}))}}),f.restart({scale:1,width:[u.loading.w,u.bubble.w],height:[u.loading.h,u.bubble.h],marginTop:0,marginLeft:0,begin:function(){i<a.length&&r.bubble.classList.remove("cornered")}})}),s-50)},d=function t(){var o=a[i];o&&(u(o),++i,setTimeout(t,o.replace(/<(?:.|\n)*?>/gm,"").length*n+anime.random(e?900:0,e?1200:0)))};d(),window.isIntroductionRendered=!0}}});
//# sourceMappingURL=app.50649eb0.js.map