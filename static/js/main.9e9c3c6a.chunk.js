(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{23:function(e,t,n){e.exports=n(44)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),l=n.n(c),s=(n(28),n(29),n(30),n(7)),o=n.n(s),i=n(10),u=n(8);n(32);function m(e){return r.a.createElement("header",null,r.a.createElement("div",{className:"flex center"},r.a.createElement("div",{className:"title"},r.a.createElement("span",null,"Pa\xedses do mundo"))))}var v=n(19),f=n(0);n(33);function E(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"iconSearch",onClick:function(){return e.eventSearch(c)}},r.a.createElement(f.b.Provider,{value:{size:"1em",color:"white"}},r.a.createElement(v.a,null))),r.a.createElement("input",{onChange:function(t){l(t.target.value),e.eventSearch(t.target.value)},placeholder:"buscar pais",value:c}))}var p=n(20);n(34);function d(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filterRegion",onClick:function(){return l(!c)}},r.a.createElement("span",null,"Filtro"),r.a.createElement("div",{className:"icon"},r.a.createElement(f.b.Provider,{value:{color:"white",className:"global-class-name"}},r.a.createElement("div",null,r.a.createElement(p.a,null))))),c&&r.a.createElement("div",{className:"optionRegion"},r.a.createElement("div",{className:"singleRegion",onClick:function(){e.eventFilterRegion("africa"),l(!1)}},r.a.createElement("span",null,"Africa")),r.a.createElement("div",{className:"singleRegion",onClick:function(){e.eventFilterRegion("americas"),l(!1)}},r.a.createElement("span",null,"America")),r.a.createElement("div",{className:"singleRegion",onClick:function(){e.eventFilterRegion("asia"),l(!1)}},r.a.createElement("span",null,"Asia")),r.a.createElement("div",{className:"singleRegion",onClick:function(){e.eventFilterRegion("europe"),l(!1)}},r.a.createElement("span",null,"Europa")),r.a.createElement("div",{className:"singleRegion",onClick:function(){e.eventFilterRegion("oceania"),l(!1)}},r.a.createElement("span",null,"Oceania"))))}n(35);function g(e){return r.a.createElement("div",{className:"searchAndFilter center"},r.a.createElement("div",{className:"flex center"},r.a.createElement(E,{eventSearch:function(t){return e.eventSearch(t)}}),r.a.createElement(d,{eventFilterRegion:function(t){return e.eventFilterRegion(t)}})))}n(36);var h=n(11);function b(e){var t=e.dataCountry,n=t.name,a=t.flag,c=t.population,l=t.capital,s=t.region;return console.log(t),r.a.createElement("div",{className:"boxCountry1"},r.a.createElement("div",{className:"boxCountry"},r.a.createElement(h.b,{to:"detail_country/".concat(n)},r.a.createElement("div",{className:"boxImg",style:{backgroundImage:"url("+a+")"}}),r.a.createElement("div",{className:"boxText"},r.a.createElement("h2",null,n),r.a.createElement("div",{className:"description"},r.a.createElement("span",null," ",r.a.createElement("strong",null," Popula\xe7\xe3o: ")," ",r.a.createElement("small",null,c))),r.a.createElement("div",{className:"description"},r.a.createElement("span",null,r.a.createElement("strong",null,"Regi\xe3o: "),r.a.createElement("small",null,s))),r.a.createElement("div",{className:"description"},r.a.createElement("span",null,r.a.createElement("strong",null,"Capital: "),r.a.createElement("small",null,l)))))))}var x=n(22),N=n.n(x),k=function(e){return new Promise((function(t,n){N()(e).then((function(e){return t({status:e.status,data:e.json()})})).catch((function(e){return console.log(e)}))}))};n(42);function w(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],l=n[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("https://restcountries.eu/rest/v2/all");case 2:if(200!=(t=e.sent).status){e.next=9;break}return e.next=6,t.data;case 6:t=e.sent,console.log(t),l(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("https://restcountries.eu/rest/v2/name/".concat(t));case 2:if(200!=(n=e.sent).status){e.next=8;break}return e.next=6,n.data;case 6:n=e.sent,l(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("https://restcountries.eu/rest/v2/region/".concat(t));case 2:if(200!=(n=e.sent).status){e.next=8;break}return e.next=6,n.data;case 6:n=e.sent,l(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"home"},r.a.createElement(m,null),r.a.createElement(g,{eventSearch:function(e){return v(e)},eventFilterRegion:function(e){return f(e)}}),r.a.createElement("main",{className:"center  flex"},c.map((function(e,t){return r.a.createElement(b,{key:t,dataCountry:e})}))))}var y=n(2);n(43);function j(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(y.f)().name;Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("https://restcountries.eu/rest/v2/name/".concat(l));case 2:if(200!=(t=e.sent).status){e.next=9;break}return e.next=6,t.data;case 6:t=e.sent,c(t[0]),console.log(t[0]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"detailCounty"},r.a.createElement(m,null),r.a.createElement("main",{className:"center flex"},r.a.createElement("div",{className:"imgCountry"},r.a.createElement("img",{src:n.flag})),r.a.createElement("div",{className:"descriptionCountry"},r.a.createElement("div",{className:"boxTitle"},r.a.createElement("h2",null,n.name)),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"boxText"},r.a.createElement("span",null,r.a.createElement("strong",null,"capital : "),r.a.createElement("small",null,n.capital)),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"popula\xe7\xe3o : "),r.a.createElement("small",null,n.population))),r.a.createElement("div",{className:"boxText"},r.a.createElement("span",null,r.a.createElement("strong",null,"continente "),r.a.createElement("small",null,n.region)))))))}function C(){return r.a.createElement(h.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:w}),r.a.createElement(y.a,{path:"/detail_country/:name",component:j})))}var O=function(){return r.a.createElement(C,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.9e9c3c6a.chunk.js.map