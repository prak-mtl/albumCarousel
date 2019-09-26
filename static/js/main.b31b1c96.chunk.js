(window["webpackJsonpalbum-carousel"]=window["webpackJsonpalbum-carousel"]||[]).push([[0],{22:function(e,t,a){e.exports=a(56)},27:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(9),o=a.n(l),s=(a(27),a(28),a(3)),u=a(4),i=a(7),m=a(5),d=a(8),b=a(6),f=a.n(b),v=a(2),p=a(19),E=a.n(p),h=function(e){var t=e.selected,a=e.onClick;return r.a.createElement("button",{className:"carousel__dot".concat(t?" is-selected":""),onClick:a})},_=function(e){var t=e.enabled,a=e.onClick;return r.a.createElement("button",{className:"carousel__arrowBtn carousel__arrowBtn--prev",disabled:!t,onClick:a},r.a.createElement("svg",{className:"carousel__arrowBtn__svg",viewBox:"138 -1.001 366.5 644"},r.a.createElement("path",{d:"M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67  43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66  16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"})))},j=function(e){var t=e.enabled,a=e.onClick;return r.a.createElement("button",{className:"carousel__arrowBtn carousel__arrowBtn--next",disabled:!t,onClick:a},r.a.createElement("svg",{className:"carousel__arrowBtn__svg",viewBox:"0 0 238.003 238.003"},r.a.createElement("path",{d:"M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47  0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273  0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0  0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"})))},O=(a(47),function(e){var t=e.children,a=Object(c.useState)(null),n=Object(v.a)(a,2),l=n[0],o=n[1],s=Object(c.useState)(0),u=Object(v.a)(s,2),i=u[0],m=u[1],d=Object(c.useState)([]),b=Object(v.a)(d,2),f=b[0],p=b[1],O=Object(c.useCallback)((function(e){return l.scrollTo(e)}),[l]),g=Object(c.useCallback)((function(){return l.scrollPrev()}),[l]),w=Object(c.useCallback)((function(){return l.scrollNext()}),[l]),k=Object(c.useState)(!1),y=Object(v.a)(k,2),N=y[0],C=y[1],S=Object(c.useState)(!1),B=Object(v.a)(S,2),A=B[0],I=B[1];return Object(c.useEffect)((function(){var e=function(){m(l.selectedScrollSnap()),C(l.canScrollPrev()),I(l.canScrollNext())};return l&&(p(l.scrollSnapList()),l.on("select",e),e()),function(){return l&&l.destroy()}}),[l]),r.a.createElement("div",{className:"carousel"},r.a.createElement("div",{className:"carousel__wrap"},r.a.createElement(E.a,{className:"carousel__viewport",emblaRef:o,options:{loop:!1},htmlTagName:"div"},r.a.createElement("div",{className:"carousel__container"},t&&t.map((function(e,t){return r.a.createElement("div",{className:"carousel__item",key:t},e)})))),r.a.createElement(_,{onClick:g,enabled:N}),r.a.createElement(j,{onClick:w,enabled:A})),r.a.createElement("div",{className:"carousel__dots"},f&&f.map((function(e,t){return r.a.createElement(h,{selected:t===i,onClick:function(){return O(t)},key:t})}))))}),g=a(20),w=a.n(g),k=Object(c.createContext)(),y={elements_selector:".lazyImage__img"},N=function(e){var t=e.children,a=Object(c.useState)(null),n=Object(v.a)(a,2),l=n[0],o=n[1];return Object(c.useEffect)((function(){return l||o(new w.a(y)),function(){return l&&l.destroy()}}),[l]),r.a.createElement(k.Provider,{value:l},t)},C=(a(48),n=function(e){var t=e.src,a=e.aspectRatio,n=e.lazyLoad;Object(c.useEffect)((function(){n&&n.update()}),[t,a,n]);var l="".concat(a[1]/a[0]*100,"%");return r.a.createElement("div",{className:"lazyImage",style:{paddingTop:l}},r.a.createElement("img",{className:"lazyImage__img","data-src":t,slt:t}))},function(e){return r.a.createElement(k.Consumer,null,(function(t){return r.a.createElement(n,Object.assign({},e,{lazyLoad:t}))}))}),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={imagesArr:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/photos?albumId=".concat(this.props.id)).then((function(t){e.setState({imagesArr:t.data})}))}},{key:"render",value:function(){var e=this.state.imagesArr;return e.length?r.a.createElement(N,null,r.a.createElement(O,null,e.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{aspectRatio:[10,7],src:e.url,key:t}),r.a.createElement("div",{className:"imageTitle"},e.title),r.a.createElement("div",{className:"imageId"},"id: ",e.id))})))):null}}]),t}(c.Component),B=a(21),A=a.n(B),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={albumArr:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/albums").then((function(t){e.setState({albumArr:t.data})}))}},{key:"render",value:function(){var e=this.state.albumArr;return e&&e.map((function(e,t){return r.a.createElement("div",{className:"album"},r.a.createElement("h3",null,e.title),r.a.createElement("span",null,"id: ",e.id,", "),r.a.createElement("span",null,"user Id: ",e.userId),r.a.createElement("hr",null),r.a.createElement(A.a,{height:200},r.a.createElement(S,{id:e.id})))}))}}]),t}(c.Component);var x=function(){return r.a.createElement(I,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b31b1c96.chunk.js.map