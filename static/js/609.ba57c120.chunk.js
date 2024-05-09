"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[609],{658:function(t,n,r){r.d(n,{Df:function(){return l},Jh:function(){return v},Pg:function(){return m},_r:function(){return E},z1:function(){return d}});var e=r(861),c=r(757),a=r.n(c),u=r(294),s=r(1),o=s.B.BASE_URL,i=s.B.API_KEY,f=s.B.path,p={api_key:i,language:"en-US"};u.Z.defaults.baseURL=o;var h=function(t){return new URLSearchParams(t)},l=function(){var t=(0,e.Z)(a().mark((function t(){var n,r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f.TRENDING).concat(f.MOVIE,"/day?").concat(h(p)),t.next=3,u.Z.get(n);case 3:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e,c,s,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={query:n,include_adult:!0},e="?".concat(h(p),"&").concat(h(r)),c="".concat(f.SEARCH).concat(f.MOVIE).concat(e),t.next=5,u.Z.get(c);case 5:return s=t.sent,o=s.data,t.abrupt("return",o.results);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e,c,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="?".concat(h(p)),e="".concat(f.MOVIE,"/").concat(n).concat(r),t.next=4,u.Z.get(e);case 4:return c=t.sent,s=c.data,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e,c,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="?".concat(h(p)),e="".concat(f.MOVIE,"/").concat(n,"/").concat(f.CREDITS).concat(r),t.next=4,u.Z.get(e);case 4:return c=t.sent,s=c.data,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),E=function(){var t=(0,e.Z)(a().mark((function t(n){var r,e,c,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="?".concat(h(p)),e="".concat(f.MOVIE,"/").concat(n,"/").concat(f.REVIEWS).concat(r),t.next=4,u.Z.get(e);case 4:return c=t.sent,s=c.data,t.abrupt("return",s.results);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},609:function(t,n,r){r.r(n),r.d(n,{default:function(){return I}});var e=r(439),c=r(455),a=r(505),u=r(791),s=r(689),o=r(658),i=r(683),f="ActorItem_item__z1cXf",p="ActorItem_image__YDqyf",h="ActorItem_info__LW0Rp",l=r(1),d=r(184),m=l.B.RESOURCE_URL,v=function(t){var n=t.profile_path,r=t.character,e=t.name,c=n?"".concat(m).concat(n):l.T;return(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)("img",{className:p,src:c,alt:e}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h3",{children:e}),(0,d.jsx)("p",{children:r})]})]})},E=function(t){var n=t.actors;return(0,d.jsx)("ul",{children:n.map((function(t){return(0,d.jsx)(v,(0,i.Z)({},t),t.id)}))})},I=function(){var t=(0,u.useState)(null),n=(0,e.Z)(t,2),r=n[0],i=n[1],f=(0,u.useState)(""),p=(0,e.Z)(f,2),h=p[0],l=p[1],m=(0,u.useState)(!1),v=(0,e.Z)(m,2),I=v[0],_=v[1],x=(0,s.UO)().movieId;return(0,u.useEffect)((function(){_(!0),(0,o.Jh)(x).then(i).catch((function(t){return l(t.message)})).finally(_(!1))}),[x]),(0,d.jsxs)("div",{children:[I&&(0,d.jsx)(c.Z,{}),h&&(0,d.jsx)(a.Z,{message:h}),r&&(0,d.jsx)(E,{actors:r.cast})]})}},505:function(t,n,r){var e=r(184);n.Z=function(t){var n=t.message;return(0,e.jsx)("div",{children:(0,e.jsx)("h2",{children:n})})}},1:function(t,n,r){r.d(n,{B:function(){return e},T:function(){return c}});var e={BASE_URL:"https://api.themoviedb.org/3/",RESOURCE_URL:"https://image.tmdb.org/t/p/w500/",API_KEY:"236da5ba2bdceb8bb441784b05481df2",BEARER_TOKEN:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWRlMzRkYjQ3MTk3MmUxMjM3YTA5NTFiZjMwNTU1MCIsInN1YiI6IjY1ZTMwMDIzZTk0MmJlMDE4N2VhNmE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eX18rjcH0G4tYeqYW1wlCb_TGKkgpm4XTMea_oYnc_o",path:{MOVIE:"/movie",TRENDING:"/trending",SEARCH:"/search",CREDITS:"/credits",REVIEWS:"/reviews"}},c="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}}]);
//# sourceMappingURL=609.ba57c120.chunk.js.map