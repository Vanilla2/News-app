(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{12:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(12),a(1)),s=a(6),l=a(2),u=a.n(l),m=a(3);function p(){return(p=Object(m.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Request made: 1"),t=(t=new Date).toLocaleDateString(),a="http://newsapi.org/v2/top-headlines?country=US&sortBy=popularity&"+"from=".concat(t,"&")+"apiKey=6ba59ddb5a9a40a6bdc5558858263b49",e.prev=4,e.next=7,fetch(a);case 7:return n=e.sent,e.next=10,n.json();case 10:return r=e.sent,console.log(r),e.abrupt("return",r);case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})))).apply(this,arguments)}function d(){return(d=Object(m.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURI(t),console.log("Request made: 2"),a="http://newsapi.org/v2/everything?sortBy=popularity&"+"q=".concat(t,"&")+"apiKey=6ba59ddb5a9a40a6bdc5558858263b49",e.prev=3,e.next=6,fetch(a);case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,console.log(r),e.abrupt("return",r);case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}var f={getHotArticles:function(){return p.apply(this,arguments)},getArticlesByTag:function(e){return d.apply(this,arguments)}};var v=function(e){return r.a.createElement("div",{onClick:function(){document.location=e.data.url},className:"article"},r.a.createElement("p",{className:"article-title"},e.data.title),r.a.createElement("p",{className:"article-author"},e.data.author),r.a.createElement("p",{className:"article-description"},e.data.description),r.a.createElement("img",{className:"article-image",src:e.data.urlToImage,alt:"Not Found"}))};var h=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(1),u=Object(i.a)(l,2),m=u[0],p=u[1];return Object(n.useEffect)((function(){"Top News"!==e.view&&(p(1),f.getArticlesByTag(e.view).then((function(e){o(e.articles),p(0)})))}),[e.view]),Object(n.useEffect)((function(){p(1),f.getHotArticles().then((function(e){o(e.articles),p(0)}))}),[]),console.log(m),m?r.a.createElement("div",{id:"loading-box"},r.a.createElement(s.a,{color:"black"})):0===c.length?r.a.createElement("div",{id:"empty-box"},r.a.createElement("h3",{id:"empty-text"},"No articles found")):r.a.createElement("div",{id:"article-box"},c.map((function(e){return r.a.createElement(v,{key:e.url,data:e})})))};var b=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1];function s(t){if(13==t.keyCode){var a=c.trim();o(""),""!==a&&e.handleChange(a)}}return Object(n.useEffect)((function(){return document.addEventListener("keyup",s),function(){document.removeEventListener("keyup",s)}})),r.a.createElement("div",{className:"view-box"},r.a.createElement("p",{className:"view-text"},"You are viewing: ",r.a.createElement("b",null,e.view)),r.a.createElement("div",{className:"search-box"},r.a.createElement("p",{className:"search-text"},"Search for news:"),r.a.createElement("input",{type:"text",placeholder:"Ex: Bitcoin",onChange:function(e){o(e.target.value)},className:"search-input",value:c})))};a(28),a(29);var g=function(){var e=Object(n.useState)("Top News"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){document.title="Vanilla News"}),[]),r.a.createElement("div",{id:"body"},r.a.createElement(b,{view:a,handleChange:function(e){c(e)}}),r.a.createElement(h,{view:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(30)}},[[7,1,2]]]);
//# sourceMappingURL=main.6dec7a78.chunk.js.map