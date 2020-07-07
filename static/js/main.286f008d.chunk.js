(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=(a(25),a(17)),s=a(12),m=a(13),i=a(14),h=a(18),d=a(19);function u(e){return l.a.createElement("nav",{className:"bg-info text-center pt-2 "},l.a.createElement("div",{className:"h1"},"Employee Directory"),l.a.createElement("div",null,l.a.createElement("form",{className:""},l.a.createElement("input",{className:"input rounded m-4",type:"search",placeholder:"Search by Employee","aria-label":"Search",name:"search",onChange:e.handleInputChange,value:e.search}))))}function p(e){return l.a.createElement("tr",{className:"text-center h5 text-light"},l.a.createElement("td",null,l.a.createElement("img",{src:e.photo,alt:"employee"})),l.a.createElement("td",{className:"align-middle"},e.name),l.a.createElement("td",{className:"align-middle"},e.email),l.a.createElement("td",{className:"align-middle"},e.phone),l.a.createElement("td",{className:"align-middle"},e.location),l.a.createElement("td",{className:"align-middle"},e.dob))}var v=a(15),E=a.n(v),g=function(){return E.a.get("https://randomuser.me/api?nat=us&results=66")},f=a(16),w=a.n(f),b=(a(44),{up:{class:"sortup",fn:function(e,t){return e.name.localeCompare(t.name)}},down:{class:"sortdown",fn:function(e,t){return t.name.localeCompare(e.name)}},default:{class:"sort",fn:function(e,t){return e}}}),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={results:[],search:"",currentSort:"up",sortIcon:l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-sort-alpha-up-alt",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 14a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M6.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L4 3.207l1.646 1.647a.5.5 0 0 0 .708 0z"}),l.a.createElement("path",{d:"M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z"}))},e.onSortChange=function(){var t,a,n=e.state.currentSort;"up"===n?(t="down",a=l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-sort-alpha-down-alt",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z"}),l.a.createElement("path",{d:"M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z"}))):"down"===n&&(t="up",a=l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-sort-alpha-up-alt",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 14a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M6.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L4 3.207l1.646 1.647a.5.5 0 0 0 .708 0z"}),l.a.createElement("path",{d:"M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z"}))),e.setState({currentSort:t,sortIcon:a})},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(s.a)({},a,n.toLowerCase()))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(e){return e.data.results.map((function(e){return{name:"".concat(e.name.first," ").concat(e.name.last),searchName:"".concat(e.name.first).concat(e.name.last),id:e.registered.date,photo:e.picture.medium,email:e.email,phone:e.phone,location:e.location.city,dob:w()(e.dob.date).format("MM/DD/YYYY")}}))})).then((function(t){return e.setState({results:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.results,a=this.state.currentSort;return t.length>0&&l.a.createElement("div",null,l.a.createElement(u,{handleInputChange:this.handleInputChange,search:this.state.search}),l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("table",{className:"table table-striped table-secondary table-active"},l.a.createElement("thead",{className:"bg-info text-center rounded"},l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("button",{onClick:this.onSortChange,className:"h2 rounded bg-white align-middle"},this.state.sortIcon)),l.a.createElement("th",{scope:"col",className:"h4 align-middle"},"Employee Name ",l.a.createElement("br",null)),l.a.createElement("th",{scope:"col",className:"h4 align-middle"},"Email"),l.a.createElement("th",{scope:"col",className:"h4 align-middle"},"Contact"),l.a.createElement("th",{scope:"col",className:"h4 align-middle"},"Location"),l.a.createElement("th",{scope:"col",className:"h4 align-middle"},"D.O.B"))),l.a.createElement("tbody",null,Object(o.a)(t).sort(b[a].fn).filter((function(t){return t.name.toLowerCase().includes(e.state.search)})).map((function(e){return l.a.createElement(p,{key:e.name,photo:e.photo,name:e.name,email:e.email,location:e.location,phone:e.phone,dob:e.dob})}))))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.286f008d.chunk.js.map