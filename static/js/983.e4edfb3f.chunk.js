"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{802:function(e,t,n){n.d(t,{h:function(){return i}});var r=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={language:"en-US",page:1,api_key:"c2d5ae1916124f8e18d2a212d8e4ab11"};var i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(t||t.pathname,{params:c.Z.defaults.params});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},874:function(e,t,n){n.d(t,{Z:function(){return c}});n(791);var r=n(87),a=n(184),u=function(e){var t=e.id,n=e.title,u=e.name,c=e.location;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{state:{from:c},to:"/movies/".concat(t),children:n||u})},t)},c=function(e){var t=e.films,n=e.location;return(0,a.jsx)("ul",{children:0!==t.length&&t.map((function(e){return(0,a.jsx)(u,{id:e.id,title:e.title,name:e.name,location:n},e.id)}))})}},983:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(802),s=n(874),o=n(672),l=n(791),f=n(689),p=n(184);t.default=function(){var e=(0,l.useState)(!1),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,l.useState)([]),h=(0,a.Z)(d,2),v=h[0],m=h[1],x=(0,f.TH)();return(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,i.h)("trending/all/day");case 4:t=e.sent,m(t.results),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,u(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[n&&(0,p.jsx)(o.a,{}),(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(s.Z,{films:v,location:x})]})}}}]);
//# sourceMappingURL=983.e4edfb3f.chunk.js.map