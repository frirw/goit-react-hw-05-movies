"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{315:function(t,e,r){r.d(e,{IQ:function(){return v},JS:function(){return p},Jh:function(){return m},Q_:function(){return b},ts:function(){return f}});var n=r(861),u=r(757),a=r.n(u),c=r(340),i=r(694),s=r.n(i);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="57ef172056d208aed05821847bf78b08";function f(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch film details"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("trending/movie/week?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch trending films"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch cast details"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"/reviews?language=en-US&page=1&api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch reviews"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function b(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("search/movie?query=".concat(e,"&include_adult=true&page=1&api_key=").concat(o));case 3:if((r=t.sent).data.results.length){t.next=7;break}return s().Notify.failure("No results found"),t.abrupt("return",null);case 7:return t.abrupt("return",r.data);case 10:return t.prev=10,t.t0=t.catch(0),s().Notify.failure(t.t0.message),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},126:function(t,e,r){var n=r(689),u=r(87),a=r(184);e.Z=function(t){var e=t.films,r=(0,n.TH)();return(0,a.jsx)("ul",{children:e.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(t.id),state:{from:r},children:t.original_title})},t.id)}))})}},414:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(433),u=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),o=r(87),f=r(315),l=r(126),p=r(184),h=function(t){var e=t.onSubmit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(t.target.query.value),c("")},children:[(0,p.jsx)("input",{type:"text",name:"query",onChange:function(t){c(t.target.value)},value:u,required:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},v=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],v=(0,o.lr)(),d=(0,a.Z)(v,2),m=d[0],y=d[1],b=m.get("query");(0,s.useEffect)((function(){b&&(0,u.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.Q_)(b);case 2:e=t.sent,c((0,n.Z)(e.results));case 4:case"end":return t.stop()}}),t)})))()}),[b]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{onSubmit:function(t){y({query:t})}}),r.length>0&&(0,p.jsx)(l.Z,{films:r})]})}}}]);
//# sourceMappingURL=414.93b9e1fb.chunk.js.map