(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(t,e,r){var content=r(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("7ffe2cf2",content,!0,{sourceMap:!1})},219:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("4e55da00",content,!0,{sourceMap:!1})},230:function(t,e,r){"use strict";var l=r(218);r.n(l).a},231:function(t,e,r){(e=r(10)(!1)).push([t.i,":root{--skeleton-light:#444;--skeleton-dark:#3a3a3a}.theme--light{--skeleton-light:#eee;--skeleton-dark:#ddd}",""]),t.exports=e},232:function(t,e,r){"use strict";var l=r(219);r.n(l).a},233:function(t,e,r){(e=r(10)(!1)).push([t.i,".articles[data-v-2f8144a0]{padding-left:0;list-style-type:none}.articles>li[data-v-2f8144a0]{margin:4rem 0}.articles>li[data-v-2f8144a0]:first-of-type{margin-top:0}.articles>li[data-v-2f8144a0]:last-of-type{margin-bottom:0}.articles--skeleton[data-v-2f8144a0]{list-style-type:none;padding-left:0;overflow-x:hidden}.articles--skeleton li[data-v-2f8144a0]{margin:4rem 0}.articles--skeleton li[data-v-2f8144a0]:first-of-type{margin-top:1.25rem}.articles--skeleton li[data-v-2f8144a0]:last-of-type{margin-bottom:0}.articles--skeleton li>div[data-v-2f8144a0]{animation:skeleton-data-v-2f8144a0 5s ease infinite;background:linear-gradient(90deg,var(--skeleton-light),var(--skeleton-light) 46%,var(--skeleton-dark) 50%,var(--skeleton-light) 54%,var(--skeleton-light));background-size:250%}.articles--skeleton li>div.skeleton__header[data-v-2f8144a0]{height:2rem;width:45%;margin-bottom:1.25rem}.articles--skeleton li>div.skeleton__meta[data-v-2f8144a0]{height:1.2rem;width:30%;margin-bottom:1.5rem}.articles--skeleton li>div.skeleton__description[data-v-2f8144a0]{height:1.1rem}.articles--skeleton li>div.skeleton__description.first[data-v-2f8144a0]{width:100vw}.articles--skeleton li>div.skeleton__description.last[data-v-2f8144a0]{width:35%;margin-top:.5rem}@keyframes skeleton-data-v-2f8144a0{0%{background-position:100% 50%}to{background-position:0 50%}}.articles .article__title a[data-v-2f8144a0]{text-decoration:none}.articles .article__meta[data-v-2f8144a0]{padding-left:0;display:flex;align-items:center}.articles .article__meta li[data-v-2f8144a0]:first-child{list-style-type:none;margin-right:1.5rem;font-weight:700}.articles .article__body[data-v-2f8144a0]{margin-top:1.5rem}",""]),t.exports=e},265:function(t,e,r){"use strict";r.r(e);r(19),r(20),r(9),r(31),r(33);var l=r(6),n=r(5),c=r(14),o=r(17),d=r(18),f=r(4),h=r(3),v=r(2),m=r(263),_=r(88),y=r(135);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,l=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;r=Reflect.construct(l,arguments,n)}else r=l.apply(this,arguments);return Object(d.a)(this,r)}}var S=function(t,e,r,desc){var l,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(c=(n<3?l(c):n>3?l(e,r,c):l(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(o.a)(d,t);var e,r=k(d);function d(){var t;return Object(n.a)(this,d),(t=r.apply(this,arguments)).articles=[],t.filteredArticles=[],t.articleSearch="",t.articlesLoading=!1,t}return Object(c.a)(d,[{key:"fetch",value:(e=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.articlesLoading=!0,t.next=3,this.$content("blog",{deep:!0}).only(["title","date","slug","description","readingTime","hashtags"]).sortBy("date","desc").fetch();case 3:this.articles=t.sent,this.filterArticles(),this.articlesLoading=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"articleDate",value:function(t){var e=Date.parse(String(t));return{date:Object(m.a)(e,"do MMMM yyyy"),datetime:Object(m.a)(e,"yyyy-MM-dd")}}},{key:"filterArticles",value:function(){var t=this;""!==this.articleSearch?this.filteredArticles=this.articles.filter((function(article){return t.filterArticle(article)})):this.filteredArticles=this.articles}},{key:"filterArticle",value:function(article){return y.default.fuzzySearch(article.title,this.articleSearch)||y.default.fuzzySearch(article.description,this.articleSearch)||y.default.fuzzySearch(this.articleDate(article.date).date,this.articleSearch)||y.default.fuzzySearch(this.articleDate(article.date).datetime,this.articleSearch)||y.default.fuzzySearch(article.readingTime,this.articleSearch)||y.default.fuzzySearch("".concat(article.readingTime," minutes"),this.articleSearch)||y.default.fuzzySearch(article.hashtags.join(" "),this.articleSearch)}}]),d}(v.Vue),w=j=S([Object(v.Component)({components:{PageTemplate:_.c,Textfield:_.d},head:function(){return{title:"Blog"}}})],j),z=(r(230),r(232),r(13)),component=Object(z.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page-template",{attrs:{"page-title":"Blog"}},[r("textfield",{attrs:{label:"Filter articles",type:"search",placeholder:"Search..."},on:{input:t.filterArticles},model:{value:t.articleSearch,callback:function(e){t.articleSearch=e},expression:"articleSearch"}}),t._v(" "),t.articlesLoading?r("ul",{staticClass:"articles--skeleton",attrs:{role:"presentation"}},t._l(3,(function(i){return r("li",{key:i,staticClass:"article--skeleton",attrs:{role:"presentation"}},[r("div",{staticClass:"skeleton__header"}),t._v(" "),r("div",{staticClass:"skeleton__meta"}),t._v(" "),r("div",{staticClass:"skeleton__description first"}),t._v(" "),r("div",{staticClass:"skeleton__description last"})])})),0):t._e(),t._v(" "),t.articlesLoading?t._e():r("ul",{staticClass:"articles"},t._l(t.filteredArticles,(function(e,l){return r("li",{key:l,attrs:{"aria-setsize":t.filteredArticles.length,"aria-posinset":l+1}},[r("article",{staticClass:"article"},[r("header",[r("h2",{staticClass:"article__title"},[r("nuxt-link",{attrs:{to:"/blog/"+e.slug}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1),t._v(" "),r("ul",{staticClass:"article__meta"},[r("li",[r("time",{attrs:{datetime:t.articleDate(e.date).datetime}},[t._v(t._s(t.articleDate(e.date).date))])]),t._v(" "),r("li",[r("span",[t._v(t._s(e.readingTime)+" "+t._s(1===e.readingTime?"minute":"minutes")+" read")])])])]),t._v(" "),r("section",{staticClass:"article__body"},[r("p",[t._v(t._s(e.description))])])])])})),0)],1)}),[],!1,null,"2f8144a0",null);e.default=component.exports}}]);