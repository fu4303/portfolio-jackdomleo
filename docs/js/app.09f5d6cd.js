(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0be1":function(t,e,a){},"168a":function(t,e,a){"use strict";var s=a("a98f"),i=a.n(s);i.a},"1bf0":function(t,e,a){"use strict";var s=a("0be1"),i=a.n(s);i.a},"3fd5":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},8431:function(t,e,a){"use strict";var s=a("e468"),i=a.n(s);i.a},"9c0c":function(t,e,a){},a035:function(t,e,a){"use strict";var s=a("d5ab"),i=a.n(s);i.a},a98f:function(t,e,a){},b8b9:function(t,e,a){},bd46:function(t,e,a){"use strict";var s=a("e276"),i=a.n(s);i.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("top-app-bar"),a("main-activity"),a("footer")],1)},n=[],o=a("9f12"),r=a("53fe"),l=a("8b83"),c=a("c65a"),p=a("c03e"),u=a("9ab4"),h=a("60a3"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"top-app-bar"},[a("section",{staticClass:"top-app-bar__navigation"},[a("router-link",{staticClass:"navigation__logo-link",attrs:{to:"/"}},[a("img",{staticClass:"navigation__logo",attrs:{src:"img/nav-logo.png",alt:"Jack"}})]),a("nav",{staticClass:"navigation__nav"},[a("ul",{staticClass:"navigation__list"},t._l(t.navLinks,(function(e,s){return a("li",{key:s,staticClass:"navigation__item"},[a("router-link",{staticClass:"navigation__link",attrs:{to:e.link}},[t._v(" "+t._s(e.text)+" ")])],1)})),0)])],1),a("section",{staticClass:"top-app-bar__social"},[a("ul",{staticClass:"social__list"},t._l(t.socialLinks,(function(t,e){return a("li",{key:e,staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:t.link,"aria-label":t.label,"data-balloon-pos":"down",target:"_blank",rel:"noreferrer"}},[a("svg",{staticClass:"social__icon"},[a("use",{attrs:{"xlink:href":"assets/svg-sprite.svg#icon-"+t.icon}})])])])})),0)]),a("button",{staticClass:"navigation__hamburger-button",on:{click:function(e){t.isMobileNavExpanded=!t.isMobileNavExpanded}}},[a("svg",{staticClass:"navigation__hamburger"},[a("use",{attrs:{"xlink:href":"assets/svg-sprite.svg#icon-hamburger"}})])]),a("section",{staticClass:"top-app-bar__mobile",class:t.isMobileNavExpanded?"top-app-bar__mobile--expanded":""},[a("nav",{staticClass:"mobile__nav"},[a("ul",{staticClass:"mobile__list"},t._l(t.navLinks,(function(e,s){return a("li",{key:s,staticClass:"mobile__item"},[a("router-link",{staticClass:"mobile__link",attrs:{to:e.link}},[a("svg",{staticClass:"mobile__icon"},[a("use",{attrs:{"xlink:href":"assets/svg-sprite.svg#icon-"+e.icon}})]),t._v(" "+t._s(e.text)+" ")])],1)})),0)]),a("div",[a("ul",{staticClass:"mobile-social__list"},t._l(t.socialLinks,(function(t,e){return a("li",{key:e,staticClass:"mobile-social__item"},[a("a",{staticClass:"mobile-social__link",attrs:{href:t.link,"aria-label":t.label,"data-balloon-pos":"up",target:"_blank",rel:"noreferrer"}},[a("svg",{staticClass:"mobile-social__icon"},[a("use",{attrs:{"xlink:href":"assets/svg-sprite.svg#icon-"+t.icon}})])])])})),0)])]),t.isMobileNavExpanded?a("div",{staticClass:"top-app-bar__mobile-mask",on:{click:function(e){t.isMobileNavExpanded=!1}}}):t._e()])},v=[],d=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.isMobileNavExpanded=!1,t.navLinks=[{text:"Home",link:"/",icon:"home"},{text:"About",link:"/about",icon:"user"},{text:"Projects",link:"/projects",icon:"code"}],t.socialLinks=[{label:"LinkedIn",link:"https://www.linkedin.com/in/jack-domleo/",icon:"linkedin"},{label:"GitHub",link:"https://github.com/JDomleo",icon:"github"},{label:"CodePen",link:"https://codepen.io/JackDomleo/",icon:"codepen"}],t}return Object(p["a"])(e,t),e}(h["b"]);d=u["a"]([Object(h["a"])({components:{}})],d);var m=d,f=m,g=(a("1bf0"),a("2877")),b=Object(g["a"])(f,_,v,!1,null,"bdf85b08",null),y=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main-activity"},[a("router-view")],1)},w=[],k=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(h["b"]);k=u["a"]([h["a"]],k);var j=k,O=j,x=(a("d391"),Object(g["a"])(O,C,w,!1,null,"f12874fa",null)),I=x.exports,S=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),Object(r["a"])(e,[{key:"mounted",value:function(){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.$router.push(t))}}]),e}(h["b"]);S=u["a"]([Object(h["a"])({components:{TopAppBar:y,MainActivity:I}})],S);var E=S,M=E,P=(a("5c0b"),a("bd46"),Object(g["a"])(M,i,n,!1,null,"ad1cdedc",null)),L=P.exports,T=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home h-card"},[t._m(0),a("section",{staticClass:"home__spotlight spotlight"},[a("figure",{staticClass:"spotlight__tile",style:"height:"+t.spotlightTileWidth+"rem",attrs:{id:"spotlight__portrait"}},[a("router-link",{attrs:{to:"/about"}},[a("div",{staticClass:"spotlight__portrait"},[a("img",{staticClass:"u-photo",attrs:{src:"/img/jack-domleo-portrait.jpg",alt:"Jack Domleo portrait"}})])])],1),a("figure",{ref:"spotlight__tile",staticClass:"spotlight__tile",style:"height:"+t.spotlightTileWidth+"rem"},[a("div",{staticClass:"spotlight__css-is-awesome",style:"width:"+t.cssIsAwesomeHeight+"rem",attrs:{id:"css-is-swesome"}},[t._m(1)])]),a("figure",{staticClass:"spotlight__tile",style:"height:"+t.spotlightTileWidth+"rem"},[a("a",{staticClass:"spotlight__tile-link",attrs:{href:"https://www.mitrefinch.co.uk/",target:"_blank",rel:"noreferrer","aria-label":"Link to Mitrefinch's website"}},[a("svg",{staticClass:"spotlight__logo",attrs:{"aria-label":"Mitrefinch Ltd logo"}},[a("use",{attrs:{"xlink:href":"assets/svg-sprite.svg#logo-mitrefinch"}})])])]),a("figure",{staticClass:"spotlight__tile",style:"height:"+t.spotlightTileWidth+"rem"},[a("p",{staticClass:"spotlight__todo"},[t._v("\x3c!-- TODO: Put something here --\x3e")])])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home__intro intro"},[a("h1",{staticClass:"intro__welcome"},[t._v("Hello there!"),a("br"),t._v("Let me introduce myself..."),a("br"),t._v("I'm "),a("span",{staticClass:"p-name"},[t._v("Jack Domleo")]),t._v(".")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"css-is-awesome"},[t._v("CSS"),a("br"),t._v("IS"),a("br"),t._v("AWESOME")])}],H=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.spotlightTileWidth=0,t.cssIsAwesomeHeight=0,t}return Object(p["a"])(e,t),Object(r["a"])(e,[{key:"mounted",value:function(){var t=this;this.setSpotlightTileHeight(),this.setCssIsAwesomeWidth(),window.addEventListener("load",(function(){t.setSpotlightTileHeight(),t.setCssIsAwesomeWidth()})),window.addEventListener("resize",(function(){t.setSpotlightTileHeight(),t.setCssIsAwesomeWidth()}))}},{key:"setSpotlightTileHeight",value:function(){this.spotlightTileWidth=this.toRem(document.getElementById("spotlight__portrait").clientWidth)}},{key:"setCssIsAwesomeWidth",value:function(){this.cssIsAwesomeHeight=this.toRem(document.getElementById("css-is-swesome").clientHeight)}},{key:"toRem",value:function(t){return t/16}}]),e}(h["b"]);H=u["a"]([h["a"]],H);var $=H,N=$,W=(a("8431"),Object(g["a"])(N,A,D,!1,null,"5041061f",null)),J=W.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about h-card"},[a("h1",{staticClass:"page--title"},[t._v("About me")]),a("article",{staticClass:"about__article"},[a("div",{staticClass:"article__content"},[a("p",[t._v("Hi, I'm "),a("span",{staticClass:"p-name"},[t._v("Jack Domleo")]),t._v(", an enthusiastic web developer based in "),a("a",{staticClass:"link--paragraph",attrs:{href:"https://www.google.com/maps/place/Nottingham/@52.9541053,-1.2401011,12z/data=!3m1!4b1!4m5!3m4!1s0x487832d2390779cd:0x108063201919db15!8m2!3d52.9547832!4d-1.1581086",rel:"noreferrer",target:"_blank"}},[a("address",[a("span",{staticClass:"p-locality"},[t._v("Nottingham")]),t._v(", "),a("span",{staticClass:"p-country-name"},[t._v("UK")])])]),t._v(", with a strong passion for front-end development and UI/UX.")]),a("p",[t._v("I love watching the lifecycle of a software product, from the day it is first planned, to the day it is first released as an MVP and watching it develop through different stages as its life goes on.")]),a("p",[t._v("My journey in development began back in 2013, studying Computer Science at GCSE level. After being introduced to programming concepts and Python, I was immediately hooked onto the idea of creating something on screen with code. I self-studied at home and practised lots of different mini scripts with Python and rewriting them better each time. I am glad however, that I did not only just study Computer Science, but I was exposed to a wide variety of GCSE subjects such as, Physics, Mathematics, Further Mathematics, Chemistry, Biology, German, Business Studies, English Language and English Literature.")]),a("p",[t._v("After 3 years studying my GCSEs, I began studying my A-Levels in the areas of Computer Science, Physics, Mathematics and Chemistry (AS Level). I created a Python project where I developed my implementation of a "),a("a",{staticClass:"link--paragraph",attrs:{href:"https://github.com/JDomleo/A-Level_Cashier_System",rel:"noreferrer",target:"_blank"}},[t._v("cashier system")]),t._v(", which I submitted as my end of year 13 coursework. This was a very interesting project because it made me appreciate the time, effort and thought process gone into a software product. I made mistakes along the way, some I spotted immediately and some I only spotted a few years later, but these are to learn from and if I were to recreate this project, it is extremely likely I would implement totally differently.")]),a("p",[t._v("One month after receiving my A-Level results, I started my career as an apprentice, exposing me to the mind-boggling World of web development. From here on, I am always learning new skills and mastering existing skills and plan to do so for many years to come.")]),a("p",[t._v("I am currently experienced and competent with "),a("strong",[t._v("HTML5")]),t._v(", "),a("strong",[t._v("CSS3")]),t._v(", "),a("strong",[t._v("SCSS")]),t._v("/"),a("strong",[t._v("Sass")]),t._v(", "),a("strong",[t._v("JavaScript")]),t._v(", "),a("strong",[t._v("jQuery")]),t._v(", "),a("strong",[t._v("Vue.js")]),t._v(" and "),a("strong",[t._v("TypeScript")]),t._v(", which have all proven extremely useful and extremely interesting when developing the front-end. I have briefly touched on languages such as "),a("strong",[t._v("React.js")]),t._v(", "),a("strong",[t._v("C#")]),t._v(" and "),a("strong",[t._v("Python")]),t._v(". All the time, every day, I am actively learning, whether if it's on the job or using resources such as "),a("a",{staticClass:"link--paragraph",attrs:{href:"https://app.pluralsight.com/profile/jack-domleo",rel:"noreferrer",target:"_blank"}},[t._v("PluralSight")]),t._v(", "),a("a",{staticClass:"link--paragraph",attrs:{href:"https://www.codecademy.com/profiles/JackDomleo",rel:"noreferrer",target:"_blank"}},[t._v("CodeCademy")]),t._v(" and "),a("a",{staticClass:"link--paragraph",attrs:{href:"https://stackoverflow.com/users/9022878/jdomleo",rel:"noreferrer",target:"_blank"}},[t._v("Stack Overflow")]),t._v(". As a developer, you never really stop learning, the industry is forever advancing!")]),a("p",[t._v("In my spare time, I love to game on my "),a("a",{staticClass:"link--paragraph",attrs:{href:"https://account.xbox.com/profile?gamertag=orangebarrel747",rel:"noreferrer nofollow",target:"_blank"}},[t._v("Xbox")]),t._v(", I like to walk in the sun, support my local ice hockey team ("),a("a",{staticClass:"link--paragraph",attrs:{href:"https://www.panthers.co.uk/",rel:"noreferrer nofollow",target:"_blank"}},[t._v("The Nottingham Panthers")]),t._v(") at games and to go on interesting holidays abroad. To relax, I usually sleep, watch Netflix or do what every other developer does... more development.")])])])])}],F=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(h["b"]);F=u["a"]([h["a"]],F);var R=F,U=R,V=(a("a035"),Object(g["a"])(U,G,B,!1,null,"8ccfb340",null)),z=V.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("h1",{staticClass:"page--title"},[t._v("Projects")]),a("article",{staticClass:"projects__article"},[a("h2",[t._v("ellaparsons.design")]),a("ul",[a("li",[a("strong",[t._v("Description:")]),t._v(" Portfolio website for Ella Parsons ")])])]),a("article",{staticClass:"projects__article"},[a("h2",[t._v("Flexipay")]),a("ul",[a("li",[a("strong",[t._v("Company:")]),t._v(" Mitrefinch Ltd ")]),a("li",[a("strong",[t._v("Description:")]),t._v(" Payroll web application ")])])]),a("article",{staticClass:"projects__article"},[a("h2",[a("i",[t._v("New Product")])]),a("ul",[a("li",[a("strong",[t._v("Company:")]),t._v(" Mitrefinch Ltd ")]),a("li",[a("strong",[t._v("Release date:")]),t._v(" "),a("i",[t._v("To be confirmed")])])])]),a("article",{staticClass:"projects__article"},[a("h2",[t._v("Kernel")]),a("ul",[a("li",[a("strong",[t._v("Company:")]),t._v(" Mitrefinch Ltd ")]),a("li",[a("strong",[t._v("Description:")]),t._v(" Central repository of styles and Vue components to be used across all Mitrefinch web products ")])])]),a("article",{staticClass:"projects__article"},[a("h2",[t._v("bmi Connect")]),a("ul",[a("li",[a("strong",[t._v("Company:")]),t._v(" flybmi ")]),a("li",[a("strong",[t._v("Description:")]),t._v(" Intranet for flybmi employees ")])])]),a("article",{staticClass:"projects__article"},[a("h2",[t._v("www.flybmi.com")]),a("ul",[a("li",[a("strong",[t._v("Company:")]),t._v(" flybmi ")]),a("li",[a("strong",[t._v("Description:")]),t._v(" Multilingual website for flybmi ")])])]),a("article",{staticClass:"projects__article"},[a("h2",[t._v("jackdomleo.dev")]),a("ul",[a("li",[a("strong",[t._v("Description:")]),t._v(" My own portfolio website ")])])])])}],Q=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(h["b"]);Q=u["a"]([h["a"]],Q);var q=Q,Y=q,Z=(a("ec3b"),Object(g["a"])(Y,K,X,!1,null,"34b3130e",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-not-found__wrapper"},[a("section",{staticClass:"page-not-found"},[a("div",{staticClass:"page-not-found__text"},[a("div",[a("h1",{staticClass:"page-not-found__title page-not-found__title--one-line"},[t._v("404 | Page Not Found")]),t._m(0),a("p",[t._v("I have no idea where you thought you were going, but it doesn't exist")]),a("p",[t._v("Go to the "),a("router-link",{staticClass:"link--paragraph",attrs:{to:"/"}},[t._v("Homepage")]),t._v(" and try again")],1)])]),a("img",{staticClass:"page-not-found__img",attrs:{src:"/img/shrug-404.png",alt:"Stickman shrugging his shoulders"}})])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"page-not-found__title page-not-found__title--split"},[t._v("404"),a("br"),t._v("Page Not Found")])}],st=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(h["b"]);st=u["a"]([h["a"]],st);var it=st,nt=it,ot=(a("168a"),Object(g["a"])(nt,et,at,!1,null,"6cfd74a2",null)),rt=ot.exports;s["a"].use(T["a"]);var lt=[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:z},{path:"/projects",name:"projects",component:tt},{path:"/404",name:"page-not-found",component:rt},{path:"*",redirect:"/404"}],ct=new T["a"]({mode:"history",base:"/",routes:lt}),pt=ct;s["a"].config.productionTip=!1,new s["a"]({router:pt,render:function(t){return t(L)}}).$mount("#app")},d391:function(t,e,a){"use strict";var s=a("3fd5"),i=a.n(s);i.a},d5ab:function(t,e,a){},e276:function(t,e,a){},e468:function(t,e,a){},ec3b:function(t,e,a){"use strict";var s=a("b8b9"),i=a.n(s);i.a}});
//# sourceMappingURL=app.09f5d6cd.js.map