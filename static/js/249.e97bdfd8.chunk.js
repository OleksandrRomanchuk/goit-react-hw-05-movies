"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[249],{2383:function(A,t,n){var e=n(5861),r=n(3144),a=n(5671),o=n(7757),i=n.n(o),c=n(3263),p=(0,r.Z)((function A(){var t=this;(0,a.Z)(this,A),this.getTrendingMovies=function(){var A=(0,e.Z)(i().mark((function A(n){var e,r;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,c.Z.get("".concat(t.baseUrl,"/trending/movie/").concat(n,"?").concat(t.apiKey));case 3:return e=A.sent,r=e.data.results,A.abrupt("return",r);case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(t){return A.apply(this,arguments)}}(),this.getMoviesByQuery=function(){var A=(0,e.Z)(i().mark((function A(n){var e,r;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,c.Z.get("".concat(t.baseUrl,"/search/movie?").concat(t.apiKey,"&query=").concat(n));case 3:return e=A.sent,r=e.data.results,A.abrupt("return",r);case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(t){return A.apply(this,arguments)}}(),this.getMovieById=function(){var A=(0,e.Z)(i().mark((function A(n){var e,r;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,c.Z.get("".concat(t.baseUrl,"/movie/").concat(n,"?").concat(t.apiKey));case 3:return e=A.sent,r=e.data,A.abrupt("return",r);case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(t){return A.apply(this,arguments)}}(),this.getMovieCredits=function(){var A=(0,e.Z)(i().mark((function A(n){var e,r;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,c.Z.get("".concat(t.baseUrl,"/movie/").concat(n,"/credits?").concat(t.apiKey));case 3:return e=A.sent,r=e.data,A.abrupt("return",r);case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(t){return A.apply(this,arguments)}}(),this.getMovieReviews=function(){var A=(0,e.Z)(i().mark((function A(n){var e,r;return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,c.Z.get("".concat(t.baseUrl,"/movie/").concat(n,"/reviews?").concat(t.apiKey));case 3:return e=A.sent,r=e.data.results,A.abrupt("return",r);case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(t){return A.apply(this,arguments)}}(),this.baseUrl="https://api.themoviedb.org/3",this.apiKey="api_key=9cca312caffd11f4ae9f11244d585025"})),s=new p;t.Z=s},249:function(A,t,n){n.r(t),n.d(t,{default:function(){return k}});var e,r,a,o,i,c,p,s,w,q,l,u=n(3433),h=n(9439),O=n(2383),g=n(2791),d=n(7689),f=n(3887),L=n(168),m=n(6444),x=m.ZP.div(e||(e=(0,L.Z)(["\n\tmargin: 0 auto;\n\tmargin-top: 25px;\n"]))),z=m.ZP.h3(r||(r=(0,L.Z)(["\n\tfont-size: 20px;\n\ttext-align: center;\n"]))),b=m.ZP.p(a||(a=(0,L.Z)(["\n\tmargin-top: 10px;\n\n\tfont-size: 14px;\n\ttext-align: center;\n"]))),v=m.ZP.ul(o||(o=(0,L.Z)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgap: 15px;\n\n\tmargin-top: 15px;\n\n\t@media screen and (min-width: 768px) {\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tgap: 10px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n"]))),C=m.ZP.li(i||(i=(0,L.Z)(["\n\tborder: 1px solid black;\n"]))),j=m.ZP.img(c||(c=(0,L.Z)(["\n\twidth: 100%;\n\tmin-height: 302px;\n\tobject-fit: contain;\n\n\t@media screen and (min-width: 768px) {\n\t\tmin-height: 347px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\tmin-height: 437px;\n\t}\n"]))),y=m.ZP.div(p||(p=(0,L.Z)(["\n\tpadding-top: 8px;\n\tpadding-bottom: 8px;\n\tpadding-left: 4px;\n"]))),E=m.ZP.p(s||(s=(0,L.Z)(["\n\tfont-size: 14px;\n\tfont-weight: 500;\n"]))),Z=m.ZP.p(w||(w=(0,L.Z)(["\n\tmargin-top: 4px;\n\n\tfont-weight: 500;\n\tcolor: #9e9e9e;\n"]))),B=m.ZP.span(q||(q=(0,L.Z)(["\n\tmargin-left: 4px;\n\n\tfont-weight: 500;\n\tcolor: orangered;\n"]))),K=m.ZP.span(l||(l=(0,L.Z)(["\n\tmargin-left: 4px;\n\n\tfont-weight: 400;\n\tcolor: rgb(15, 15, 28);\n"]))),S=n(184),k=function(){var A=(0,g.useState)(null),t=(0,h.Z)(A,2),n=t[0],e=t[1],r=(0,d.UO)().id;if((0,g.useEffect)((function(){O.Z.getMovieCredits(r).then((function(A){var t=A.cast.reduce((function(A,t){var n=t.profile_path?"https://image.tmdb.org/t/p/original/".concat(t.profile_path):f,e={id:t.id,name:t.name,character:t.character,photo:n};return[].concat((0,u.Z)(A),[e])}),[]);e(t)}))}),[r]),n){var a=Boolean(n.length);return(0,S.jsxs)(x,{children:[(0,S.jsx)(z,{children:"Cast"}),!a&&(0,S.jsx)(b,{children:"We found no information about the cast."}),a&&(0,S.jsx)(v,{children:n.map((function(A){var t=A.id,n=A.photo,e=A.name,r=A.character;return(0,S.jsxs)(C,{children:[(0,S.jsx)(j,{src:n,alt:e}),(0,S.jsxs)(y,{children:[(0,S.jsx)(E,{children:e}),(0,S.jsxs)(Z,{children:["Character",(0,S.jsx)(B,{children:"I"}),(0,S.jsx)(K,{children:r})]})]})]},t)}))})]})}}},3887:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=249.e97bdfd8.chunk.js.map