"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{315:function(t,e,r){r.d(e,{IQ:function(){return d},JS:function(){return f},Jh:function(){return m},Q_:function(){return g},ts:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(340),i=r(694),s=r.n(i);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="57ef172056d208aed05821847bf78b08";function p(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"?api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch film details"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("trending/movie/week?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch trending films"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch cast details"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"/reviews?language=en-US&page=1&api_key=").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),s().Notify.failure("Failed to fetch reviews"),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(t){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("search/movie?query=".concat(e,"&include_adult=true&page=1&api_key=").concat(o));case 3:if((r=t.sent).data.results.length){t.next=7;break}return s().Notify.failure("No results found"),t.abrupt("return",null);case 7:return t.abrupt("return",r.data);case 10:return t.prev=10,t.t0=t.catch(0),s().Notify.failure(t.t0.message),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},126:function(t,e,r){var n=r(689),a=r(87),u=r(184);e.Z=function(t){var e=t.films,r=(0,n.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:r},children:t.original_title})},t.id)}))})}},544:function(t,e,r){r.r(e);var n=r(433),a=r(861),u=r(439),c=r(757),i=r.n(c),s=r(126),o=r(791),p=r(315),l=r(184);e.default=function(){var t=(0,o.useState)([]),e=(0,u.Z)(t,2),r=e[0],c=e[1];return(0,o.useEffect)((function(){(0,a.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.JS)();case 3:e=t.sent,r=e.results,c((0,n.Z)(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Trending Today"}),(0,l.jsx)(s.Z,{films:r})]})}}}]);
//# sourceMappingURL=544.a34f4507.chunk.js.map