"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{2383:function(n,e,t){var r=t(5861),a=t(3144),o=t(5671),i=t(7757),c=t.n(i),s=t(3263),u=(0,a.Z)((function n(){var e=this;(0,o.Z)(this,n),this.getTrendingMovies=function(){var n=(0,r.Z)(c().mark((function n(t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(e.baseUrl,"/trending/movie/").concat(t,"?").concat(e.apiKey));case 3:return r=n.sent,a=r.data.results,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),this.getMoviesByQuery=function(){var n=(0,r.Z)(c().mark((function n(t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(e.baseUrl,"/search/movie?").concat(e.apiKey,"&query=").concat(t));case 3:return r=n.sent,a=r.data.results,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),this.getMovieById=function(){var n=(0,r.Z)(c().mark((function n(t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(e.baseUrl,"/movie/").concat(t,"?").concat(e.apiKey));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),this.getMovieCredits=function(){var n=(0,r.Z)(c().mark((function n(t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(e.baseUrl,"/movie/").concat(t,"/credits?").concat(e.apiKey));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),this.getMovieReviews=function(){var n=(0,r.Z)(c().mark((function n(t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(e.baseUrl,"/movie/").concat(t,"/reviews?").concat(e.apiKey));case 3:return r=n.sent,a=r.data.results,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),this.baseUrl="https://api.themoviedb.org/3",this.apiKey="api_key=9cca312caffd11f4ae9f11244d585025"})),p=new u;e.Z=p},4672:function(n,e,t){t.d(e,{O:function(){return q}});var r,a,o,i,c,s,u,p,l,d,f=t(7689),h=t(1087),v=t(168),g=t(6444),x=g.ZP.ul(r||(r=(0,v.Z)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n"]))),m=g.ZP.li(a||(a=(0,v.Z)(["\n    border: 1px solid grey;\n    border-radius: 3px;\n    overflow: hidden;\n"]))),Z=((0,g.ZP)(h.OL)(o||(o=(0,v.Z)(["\n    max-width: 100%;\n"]))),g.ZP.img(i||(i=(0,v.Z)(["\n    max-width: 100%;\n    min-height: 351px;\n\n    object-fit: contain;\n"])))),b=g.ZP.div(c||(c=(0,v.Z)(["\n    padding: 4px 8px;\n    padding-bottom: 6px;\n"]))),y=g.ZP.p(s||(s=(0,v.Z)(["\n    font-size: 14px;\n    font-weight: 700;\n"]))),w=g.ZP.div(u||(u=(0,v.Z)(["\n    display: flex;\n\n    margin-top: 4px;\n"]))),j=(0,g.ZP)(y)(p||(p=(0,v.Z)(["\n    font-weight: 600;\n    font-size: 10px;\n    color: #9e9e9e;\n"]))),P=g.ZP.span(l||(l=(0,v.Z)(["\n    margin-left: 4px;\n\n    font-size: 10px;\n    font-weight: 600;\n\n    color: #ff9d7a;\n"]))),k=(0,g.ZP)(j)(d||(d=(0,v.Z)(["\n    margin-left: 4px;\n"]))),_=t(184),q=function(n){var e=n.moviesInfo,t=(0,f.TH)();return(0,_.jsx)(x,{children:e.map((function(n){var e=n.id,r=n.title,a=n.release_date,o=n.vote_average,i=n.poster_path,c=o.toFixed(1),s=a?a.split("-").reverse().join("."):"",u=Boolean(s);return(0,_.jsx)(m,{children:(0,_.jsxs)(h.OL,{to:"/movies/".concat(e),state:{from:t},children:[(0,_.jsx)(Z,{src:i,alt:r}),(0,_.jsxs)(b,{children:[(0,_.jsx)(y,{children:r}),(0,_.jsxs)(w,{children:[(0,_.jsx)(j,{children:c}),u&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(P,{children:"I"}),(0,_.jsx)(k,{children:s})]})]})]})]})},e)}))})}},5305:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,i,c,s=t(3433),u=t(9439),p=t(2383),l=t(1087),d=t(2791),f=t(4672),h=t(3313),v=t(8529),g=t(168),x=t(6444),m=x.ZP.main(r||(r=(0,g.Z)(["\n    padding-bottom: 20px;\n"]))),Z=x.ZP.div(a||(a=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 768px;\n    padding: 0 20px;\n    padding-top: 10px;\n    padding-bottom: 20px;\n\n    margin: 0 auto;\n"]))),b=x.ZP.form(o||(o=(0,g.Z)(["\n    position: relative;\n\n    margin-bottom: 16px;\n"]))),y=x.ZP.input(i||(i=(0,g.Z)(["\n    min-width: 300px;\n    padding: 3px 8px;\n\n    font-size: 12px;\n\n    border: none;\n    outline: none;\n    border-bottom: 1px solid;\n    border-color: #b5b5b5;\n    background-color: transparent;\n\n    transition: border-color 250ms ease-in-out;\n\n    :hover, :focus {\n        border-color: black;\n    }\n\n    ::placeholder {\n        font-style: italic;\n        color: grey;\n    }\n"]))),w=x.ZP.button(c||(c=(0,g.Z)(["\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 0;\n    padding-right: 4px;\n\n    font-size: 12px;\n\n    border: none;\n    background-color: transparent;\n\n    transition: color 300ms ease-in-out;\n\n    :hover, :focus {\n        color: orangered;\n    }\n"]))),j=t(184),P=function(){var n,e=(0,d.useState)(null),t=(0,u.Z)(e,2),r=t[0],a=t[1],o=(0,l.lr)(""),i=(0,u.Z)(o,2),c=i[0],g=i[1],x=null!==(n=c.get("query"))&&void 0!==n?n:"";(0,d.useEffect)((function(){x&&p.Z.getMoviesByQuery(x).then((function(n){var e=n.reduce((function(n,e){var t=e.poster_path?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):v,r={id:e.id,title:e.title,release_date:e.release_date,poster_path:t,vote_average:e.vote_average};return[].concat((0,s.Z)(n),[r])}),[]);a(e)}))}),[x]);return(0,j.jsx)(m,{children:(0,j.jsxs)(Z,{children:[(0,j.jsxs)(b,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value;g({query:e})},children:[(0,j.jsx)(y,{type:"text",name:"query",placeholder:"Enter search query",value:c.query}),(0,j.jsx)(w,{type:"submit",children:(0,j.jsx)(h.jRj,{})})]}),r&&(0,j.jsx)(f.O,{moviesInfo:r})]})})}},8529:function(n,e,t){n.exports=t.p+"static/media/posterPlaceholder.a0d6f9674f0fbc1d7f6a.png"}}]);
//# sourceMappingURL=305.49c32251.chunk.js.map