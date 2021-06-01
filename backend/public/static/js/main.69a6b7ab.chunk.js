(this["webpackJsonptoys-proj"]=this["webpackJsonptoys-proj"]||[]).push([[0],{317:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(14),r=n.n(c),i=n(24),s=n.n(i),o=n(39),l=n(33),u=n(58),j=n.n(u),d="/api/toy",h={query:function(e){return j.a.get(d,{params:e}).then((function(e){return e.data}))},save:function(e){return e._id?j.a.put("".concat(d,"/").concat(e._id),e).then((function(e){return e.data})):j.a.post(d,e).then((function(e){return e.data}))},remove:function(e){return j.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},getById:function(e){return j.a.get("".concat(d,"/").concat(e)).then((function(e){return e.data}))}};function b(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.query(t).then((function(e){return{type:"SET_TOYS",toys:e}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.remove(t).then((function(){return{type:"REMOVE_TOY",toyId:t}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=n(143),y=n(2),f=n(9),v=n(7),g=n(8),k=n(11),S=n(10),N=n(349),T=n(353),C=n(354),w=n(52),E=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={marker:{title:"",position:{lat:31.97499,lng:34.79434}},zoom:10,showingInfoWindow:!1},e.onCenterButton=function(t){var n,a;switch(t.currentTarget.value){case"telaviv":a="\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1",n={lat:32.085033,lng:34.781229};break;case"rishon":a="\u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df",n={lat:31.97499,lng:34.79434};break;case"haifa":a="\u05d7\u05d9\u05e4\u05d4",n={lat:32.792637,lng:34.986493}}var c={title:a,position:n};console.log(c),e.setState({marker:Object(f.a)({},c),zoom:14})},e.onMarkerClick=function(t,n,a){e.setState({marker:n,showingInfoWindow:!e.state.showingInfoWindow})},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"about-layout",children:[Object(y.jsx)("h1",{children:"About"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptas quos numquam officia obcaecati sequi reprehenderit? Ex, expedita voluptatibus, omnis at modi, fugiat sequi officiis aut error distinctio quo minima?"}),Object(y.jsx)("hr",{}),Object(y.jsxs)("div",{className:"btn-map flex justify-center",children:[Object(y.jsx)(N.a,{value:"telaviv",onClick:this.onCenterButton,variant:"contained",color:"secondary",endIcon:Object(y.jsx)(T.a,{}),children:"Tel-Aviv"}),Object(y.jsx)(N.a,{value:"rishon",onClick:this.onCenterButton,variant:"contained",color:"secondary",endIcon:Object(y.jsx)(T.a,{}),children:"Rishon Le Zion"}),Object(y.jsx)(N.a,{value:"haifa",onClick:this.onCenterButton,variant:"contained",color:"secondary",endIcon:Object(y.jsx)(T.a,{}),children:"Haifa"})]}),Object(y.jsx)("div",{className:"map-container",children:Object(y.jsxs)(w.Map,{className:"map",google:this.props.google,zoom:this.state.zoom,initialCenter:{lat:31.97499,lng:34.7943406},center:this.state.marker.position,children:[Object(y.jsx)(w.Marker,{onClick:this.onMarkerClick,position:{lat:31.97499,lng:34.79434},title:"\u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df"}),Object(y.jsx)(w.Marker,{onClick:this.onMarkerClick,position:{lat:32.085033,lng:34.781229},title:"\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"}),Object(y.jsx)(w.Marker,{onClick:this.onMarkerClick,position:{lat:32.792637,lng:34.986493},title:"\u05d7\u05d9\u05e4\u05d4"}),Object(y.jsx)(w.InfoWindow,{marker:this.state.marker,visible:this.state.showingInfoWindow,children:Object(y.jsxs)("div",{className:"flex align-center column",children:[Object(y.jsxs)("p",{children:[this.state.marker.title," "]}),Object(y.jsxs)("label",{children:["054-27518-447",Object(y.jsx)(C.a,{})]})]})})]})})]})})}}]),n}(a.Component),I=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyBxi2jnTW81SfX5vTvpeqC_3bd9cmKWSgg"})(E),A=n.p+"static/media/giphy.9201217f.gif",_=n(22);var B=n(356),F=n(359),q=n(362),M=n(363),H=n(140),D=n(361),L=n(364),W=n(360),Y=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={filterBy:{name:"",price:0,type:"All",inStock:"All",sortBy:"name"}},e.changeHandler=function(t){var n="range"===t.target.type?+t.target.value:t.target.value,a=t.target.name,c=e.state.filterBy;c[a]=n,e.setState({filterBy:c},(function(){e.props.onSetFilter(c)}))},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state.filterBy,t=e.name,n=e.type,a=e.price,c=e.inStock,r=e.sortBy;return Object(y.jsxs)("section",{className:"filter flex column ",children:[Object(y.jsx)("p",{children:"Search"}),Object(y.jsxs)("div",{className:"flex",children:[Object(y.jsx)(F.a,{type:"text",name:"name",id:"standard-name",value:t,label:"Name",onChange:this.changeHandler,style:{marginInlineEnd:"1em"}}),Object(y.jsxs)(q.a,{children:[Object(y.jsx)(M.a,{children:"Type"}),Object(y.jsxs)(H.a,{name:"type",onChange:this.changeHandler,value:n,style:{marginInlineEnd:"1em"},children:[Object(y.jsx)("option",{value:"All",children:"All"}),Object(y.jsx)("option",{value:"Funny",children:"Funny"}),Object(y.jsx)("option",{value:"Educational",children:"Educational"}),Object(y.jsx)("option",{value:"Adult",children:"Adult"})]})]}),Object(y.jsxs)("div",{className:"flex column",children:[Object(y.jsxs)("span",{children:["From ",a,"$"]}),Object(y.jsx)("input",{type:"range",name:"price",min:"0",max:"400",value:a,onChange:this.changeHandler,style:{marginInlineEnd:"1em"}})]}),Object(y.jsxs)(q.a,{children:[Object(y.jsx)(M.a,{children:"in Stock"}),Object(y.jsxs)(H.a,{name:"inStock",onChange:this.changeHandler,value:c,style:{marginInlineEnd:"1em"},children:[Object(y.jsx)("option",{value:"All",children:"All"}),Object(y.jsx)("option",{value:!0,children:"Yes"}),Object(y.jsx)("option",{value:!1,children:"No"})]})]})]}),Object(y.jsxs)(q.a,{children:[Object(y.jsx)("p",{children:"Sort by"}),Object(y.jsxs)(D.a,{value:r,name:"sortBy",onChange:this.changeHandler,children:[Object(y.jsx)(L.a,{value:"name",control:Object(y.jsx)(W.a,{}),label:"Name"}),Object(y.jsx)(L.a,{value:"price",control:Object(y.jsx)(W.a,{}),label:"Price"})]})]})]})}}]),n}(a.Component),P=n(355);function R(e){var t=e.toy,n=e.remove;return Object(y.jsxs)("div",{className:"toy-card flex column align-center",children:[Object(y.jsx)("p",{children:t.name}),Object(y.jsxs)("span",{children:[t.price,"$"]}),Object(y.jsx)("div",{className:"img-container ",children:Object(y.jsx)("img",{alt:"Toy",src:"https://robohash.org/".concat(t.name,"?set=set2")})}),Object(y.jsxs)("div",{className:"btns",children:[Object(y.jsx)(_.b,{to:"toy/details/".concat(t._id),children:Object(y.jsx)(N.a,{color:"primary",variant:"contained",children:"Details"})}),Object(y.jsx)(N.a,{color:"secondary",variant:"contained",onClick:function(e){e.stopPropagation(),n(t._id)},children:Object(y.jsx)(P.a,{})})]})]})}function z(e){var t=e.toys,n=e.remove;return Object(y.jsx)("div",{className:"list-grid",children:t.map((function(e){return Object(y.jsx)(R,{toy:e,remove:n},e._id)}))})}var V=n(141),$=n.n(V),G=n(357),J=n(358),K=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={toy:null,imgStatus:!0},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t&&h.getById(t).then((function(t){e.setState({toy:t})}))}},{key:"imgHandler",value:function(){var e=this;setTimeout((function(){e.setState({imgStatus:!1})}),1e3)}},{key:"render",value:function(){var e=this,t=this.state,n=t.toy,a=t.imgStatus;return n?Object(y.jsx)("div",{className:"flex column align-center",children:Object(y.jsxs)("div",{className:"toy-details flex column align-center",children:[Object(y.jsx)("h1",{children:n.name}),Object(y.jsxs)("div",{children:[a?Object(y.jsx)($.a,{type:"Circles",color:"#00BFFF",height:100,width:100}):null,Object(y.jsx)("img",{style:{display:a?"none":"block"},alt:"Toy",onLoad:function(){return e.imgHandler()},src:"https://robohash.org/".concat(n.name,"?set=set2")})]}),Object(y.jsxs)("ul",{className:"flex column align-center",children:[Object(y.jsxs)("li",{children:["Price: ",n.price,"$"]}),Object(y.jsxs)("li",{children:["Type: ",n.type]}),n.inStock?Object(y.jsx)("li",{children:" In Stock"}):Object(y.jsx)("li",{children:"Not In Stock"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)(_.b,{to:"/toy",children:Object(y.jsx)(N.a,{className:"back-btn",variant:"contained",color:"primary",children:Object(y.jsx)(G.a,{})})}),Object(y.jsx)(_.b,{to:"/toy/edit/".concat(n._id),children:Object(y.jsx)(N.a,{className:"edit-btn",variant:"contained",color:"primary",children:Object(y.jsx)(J.a,{})})})]})]})}):Object(y.jsx)("h1",{children:"Loading..."})}}]),n}(a.Component),U=function(e){Object(k.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={toy:{name:"",price:0,type:"Funny"}},e.onSave=function(t,n){t.preventDefault(),n._id?e.props.editToy(n):e.props.addToy(n)},e.handleInput=function(t){var n=t.target,a=n.value,c=n.name,r=Object(f.a)({},e.state.toy);r[c]=a,e.setState({toy:r})},e.changeHandler=function(t){var n=t.target.value,a=t.target.checked,c=t.target.name,r=Object(f.a)({},e.state.toy);switch(c){case"price":r[c]=+n,e.setState({toy:r});break;case"inStock":r.inStock=a,e.setState({toy:r});break;case"name":case"type":r[c]=n,e.setState({toy:r})}},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t&&h.getById(t).then((function(t){e.setState({toy:t})}))}},{key:"render",value:function(){var e=this,t=this.state.toy;return Object(y.jsx)("div",{className:"flex column align-center",children:Object(y.jsx)("section",{className:"add-toy-layout flex align-center column",children:Object(y.jsxs)("form",{className:"add-toy flex align-center column",onSubmit:function(n){e.onSave(n,t),e.props.history.push("/toy")},children:[Object(y.jsx)("h1",{children:t._id?"Edit":"Create A Toy"}),Object(y.jsxs)("div",{className:"flex column",children:[Object(y.jsxs)("label",{children:["Name ",Object(y.jsx)("input",{type:"text",name:"name",value:t.name,placeholder:"name",onChange:this.changeHandler,required:!0})]}),Object(y.jsxs)("label",{children:["Price ",Object(y.jsx)("input",{type:"number",name:"price",value:t.price,placeholder:"price",onChange:this.changeHandler,required:!0})]}),Object(y.jsxs)("label",{children:["Type",Object(y.jsxs)("select",{name:"type",onChange:this.changeHandler,value:t.type,children:[Object(y.jsx)("option",{value:"Educational",children:"Educational"}),Object(y.jsx)("option",{value:"Funny",children:"Funny"}),Object(y.jsx)("option",{value:"Adult",children:"Adult"})]})]}),Object(y.jsxs)("label",{children:["In Stock:",Object(y.jsx)("input",{type:"checkbox",name:"inStock",checked:t.inStock,onChange:this.changeHandler})]})]}),Object(y.jsx)(N.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})]})})})}}]),n}(a.Component),X={addToy:function(e){return function(t){return h.save(e).then((function(e){t({type:"ADD_TOY",toy:e})}))}},editToy:function(e){return function(t){return h.save(e).then((function(e){t({type:"EDIT_TOY",toy:e})}))}}},Z=Object(l.b)((function(e){return{}}),X)(U),Q=[{path:"/",component:function(){return Object(y.jsxs)("div",{className:"home-container flex column align-center",children:[Object(y.jsx)("h1",{children:"We Love Toys"}),Object(y.jsxs)("div",{className:"text flex column",children:[Object(y.jsxs)("span",{children:["When the toy museum closes each evening, all the toys come to life. Bunting, the old toy cat, takes it upon himself to ",Object(y.jsx)("span",{className:"blue",children:"count and inspect the toys and give them a history lesson."})," But one night the toys decide to teach Bunting how to have some fun. This enchanting story has detailed illustrations and children will love to spot the different toys scattered throughout the pages. "]}),Object(y.jsxs)("span",{children:["Lorem ipsum dolor sit amet ",Object(y.jsx)("span",{className:"blue",children:"consectetur adipisicing elit. Eligendi non numquam consequatur beatae iusto "}),"architecto illum sed corrupti earum ratione ducimus dolore debitis sapiente, enim deleniti similique laudantium et voluptatum?"]}),Object(y.jsxs)("span",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. ",Object(y.jsx)("span",{className:"blue",children:"Cupiditate iusto nihil saepe ullam voluptatibus "}),"officia nobis eaque delectus unde ipsam, aut dicta eligendi adipisci ipsum aliquid harum magnam vel quasi."]}),Object(y.jsx)("div",{className:"video-ratio",children:Object(y.jsx)(_.b,{to:"/toy",children:Object(y.jsx)("img",{alt:"toys",src:A})})})]})]})}},{path:"/toy",component:function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.toyModule.toys}));Object(a.useEffect)((function(){Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}}),t)})))()}),[e]);var n=function(){var t=Object(o.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n);case 2:a=t.sent,e(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(o.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(n);case 2:a=t.sent,e(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t?Object(y.jsxs)("div",{className:"toyapp main-container",children:[Object(y.jsxs)("div",{className:"header-container flex column align-center",children:[Object(y.jsx)("h1",{className:"header",children:"Our Toys"}),Object(y.jsx)(Y,{onSetFilter:c}),Object(y.jsx)(_.b,{to:"/toy/edit",children:Object(y.jsx)(N.a,{endIcon:Object(y.jsx)(B.a,{}),variant:"contained",color:"primary",children:"Add Toy"})})]}),Object(y.jsx)(z,{toys:t,remove:n})]}):Object(y.jsx)("h1",{children:"Loading.."})}},{path:"/toy/edit",component:Z},{path:"/toy/edit/:id",component:Z},{path:"/toy/details/:id",component:K},{path:"/about",component:I},{path:"/dashboard",component:function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.toyModule.toys}));Object(a.useEffect)((function(){Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}}),t)})))()}),[e]);var n={labels:["Adult","Funny","Educational"],datasets:[{backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4,data:[t.filter((function(e){return"Adult"===e.type})).length,t.filter((function(e){return"Funny"===e.type})).length,t.filter((function(e){return"Educational"===e.type})).length]}]};return Object(y.jsxs)("div",{className:"graph-container flex align-center column",children:[Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"red",children:"Toys "}),Object(y.jsx)("span",{className:"yellow",children:"by "}),Object(y.jsx)("span",{className:"blue",children:"type"})," "]}),Object(y.jsx)(x.a,{className:"graph",data:n})]})}}],ee=n(18);n(317);function te(){return Object(y.jsxs)("nav",{className:"navbar flex fs24",children:[Object(y.jsx)(_.b,{to:"/",children:Object(y.jsx)("h1",{className:"logo",children:"Toyoyo"})}),Object(y.jsxs)("ul",{className:"flex ",children:[Object(y.jsx)(_.b,{to:"/",children:Object(y.jsx)("li",{children:"Home"})}),Object(y.jsx)(_.b,{to:"/toy",children:Object(y.jsx)("li",{children:"Toys"})}),Object(y.jsx)(_.b,{to:"/dashboard",children:Object(y.jsx)("li",{children:"Statistics"})}),Object(y.jsx)(_.b,{to:"/about",children:Object(y.jsx)("li",{children:"About"})})]})]})}function ne(){return Object(y.jsxs)(_.a,{children:[Object(y.jsx)("header",{children:Object(y.jsx)(te,{})}),Object(y.jsx)(ee.c,{children:Q.map((function(e){return Object(y.jsx)(ee.a,{exact:!0,component:e.component,path:e.path},e.path)}))})]})}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},ce=n(83),re=n(142),ie=n(17),se={user:null};var oe={toys:[]};var le=Object(ce.b)({toyModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOYS":return Object(f.a)(Object(f.a)({},e),{},{toys:t.toys});case"EDIT_TOY":return Object(f.a)(Object(f.a)({},e),{},{toys:e.toys.map((function(e){return e._id===t.toy._id?t.toy:e}))});case"ADD_TOY":return Object(f.a)(Object(f.a)({},e),{},{toys:[t.toy].concat(Object(ie.a)(e.toys))});case"REMOVE_TOY":return Object(f.a)(Object(f.a)({},e),{},{toys:e.toys.filter((function(e){return e._id!==t.toyId}))});case"SET_FILTER":return Object(f.a)(Object(f.a)({},e),{},{filterBy:t.filterBy});case"SAVE_USER":return Object(f.a)(Object(f.a)({},e),{},{user:Object(f.a)({},t.user),toys:[]});default:return e}},userModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(f.a)(Object(f.a)({},e),{},{user:Object(f.a)({},t.user)});case"ADD_ACTIVITY":return Object(f.a)(Object(f.a)({},e),{},{user:Object(f.a)(Object(f.a)({},e.user),{},{activities:[t.activity].concat(Object(ie.a)(e.user.activities))})});case"SET_PREFS":return Object(f.a)(Object(f.a)({},e),{},{user:Object(f.a)(Object(f.a)({},e.user),{},{prefs:Object(f.a)({},t.prefs)})});default:return e}}}),ue=Object(ce.c)(le,Object(ce.a)(re.a));window.theStore=ue,ue.subscribe((function(){console.log("Global State is:",ue.getState())})),r.a.render(Object(y.jsx)(l.a,{store:ue,children:Object(y.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[318,1,2]]]);
//# sourceMappingURL=main.69a6b7ab.chunk.js.map