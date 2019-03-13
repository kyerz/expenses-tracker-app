(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){e.exports=n(305)},304:function(e,t,n){},305:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),u=n(307),i=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Expenses Tracker"),r.a.createElement(u.a,{activeClassName:"selected",exact:!0,to:"/"},"Tableau de bord"),r.a.createElement(u.a,{activeClassName:"selected",to:"/create"},"Cr\xe9er une D\xe9pense"))},s=n(308),l=n(309),p=n(165),d=n(14),m=n(92),f=n(3),E=n.n(f),h=n(157),v=n.n(h),b=n(40),x=n.n(b);x.a.register("locale","fr",{delimiters:{thousands:" ",decimal:","},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){return 1===e?"er":"\xe8me"},currency:{symbol:"\u20ac"}}),x.a.locale("fr");var g=function(e){var t=e.description,n=e.amount,a=e.createdAt,o=e.id;return r.a.createElement("div",null,r.a.createElement(m.a,{to:"/edit/".concat(o)},r.a.createElement("h3",null,t)),r.a.createElement("p",null,x()(n/100).format("$0,0.00"),"-",E()(a).locale("fr",v.a).format("DD MMMM GGGG")))},S=function(e,t){return e.filter(function(n){return n.description.toLowerCase().includes(t.text.toLowerCase())?e:null}).sort(function(e,n){return"date"===t.sortBy?n.createdAt-e.createdAt:"amount"===t.sortBy?n.amount-e.amount:0})},O=Object(d.b)(function(e){return{expenses:S(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,e.expenses.map(function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))}),y=Object(d.b)(function(e){return{filters:e.filters}})(function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"rechercher une d\xe9pense",value:e.filters.text,onChange:function(t){return e.dispatch({type:"SET_SEARCH_TEXT",text:t.target.value})}}),r.a.createElement("select",{value:e.filters.sortBy,onChange:function(t){"date"===t.target.value?e.dispatch({type:"SORT_BY_DATE"}):"amount"===t.target.value&&e.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"date"),r.a.createElement("option",{value:"amount"},"montant")))}),C=function(e){var t=0;return e.map(function(e){return t+=e.amount}),t},_=Object(d.b)(function(e){var t=S(e.expenses,e.filters);return{expensesTotal:C(t),expensesCount:t.length}})(function(e){var t=e.expensesCount,n=e.expensesTotal,a=1===t?"d\xe9pense":"d\xe9penses",o=x()(n/100).format("$0,0.00");return r.a.createElement("div",null,r.a.createElement("h1",null,"Affichage de ",t," ",a," totalisant ",o))}),j=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Tableau de bord"),r.a.createElement(_,null),r.a.createElement(y,null),r.a.createElement(O,null))},D=n(158),T=n(159),A=n(166),N=n(160),k=n(167),w=(n(179),n(161)),X=(n(246),n(162)),B=n.n(X),P=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(A.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={description:n.props.expense?n.props.expense.description:"",note:n.props.expense?n.props.expense.note:"",amount:n.props.expense?(n.props.expense.amount/100).toString():"",error:"",date:E()(),dateFocused:!1},n.onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onAmountChange=function(e){var t=e.target.value;t.match(/^\d*(\.\d{0,2})?$/)&&n.setState(function(){return{amount:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onSubmit=function(e){if(e.preventDefault(),n.state.description&&n.state.amount){n.setState(function(){return{error:""}});var t={description:n.state.description,note:n.state.note,amount:100*parseFloat(n.state.amount,10),createdAt:n.state.date.valueOf()};n.props.onSubmit(t)}else n.setState(function(){return{error:"Veuillez fournir une description et son montant"}})},n.onDateChange=function(e){n.setState(function(){return{date:e}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{dateFocused:t}})},n}return Object(k.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"description",onChange:this.onDescriptionChange,value:this.state.description}),r.a.createElement("input",{type:"number",placeholder:"montant",onChange:this.onAmountChange,value:this.state.amount,step:"0.01"}),r.a.createElement(w.SingleDatePicker,{date:this.state.date,onDateChange:this.onDateChange,focused:this.state.dateFocused,onFocusChange:this.onFocusChange,id:B()(),numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"vous pouvez \xe9crire une note ici",cols:"30",rows:"2",onChange:this.onNoteChange,value:this.state.note}),r.a.createElement("button",{type:"submit"},"Ajouter D\xe9pense")))}}]),t}(a.Component),R=n(20),F=n(65);F.initializeApp({apiKey:"AIzaSyB_W78WKbXNcdCGG7A1bzPEFvF2Rpjj4qI",authDomain:"expenses-tracker-1a008.firebaseapp.com",databaseURL:"https://expenses-tracker-1a008.firebaseio.com",projectId:"expenses-tracker-1a008",storageBucket:"expenses-tracker-1a008.appspot.com",messagingSenderId:"473758814187"});var M=F.database(),I=Object(d.b)()(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Ajouter une nouvelle D\xe9pense"),r.a.createElement(P,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.description,a=void 0===n?"":n,r=e.note,o=void 0===r?"":r,c=e.amount,u=void 0===c?0:c,i=e.createdAt,s={description:a,note:o,amount:u,createdAt:void 0===i?0:i};M.ref("expenses").push(s).then(function(e){t(function(e){return{type:"ADD_EXPENSE",expense:e}}(Object(R.a)({id:e.key},s)))})}}(t)),e.history.push("/")}}))}),G=Object(d.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Editer une D\xe9pense"),r.a.createElement(P,{expense:e.expense,onSubmit:function(t){var n,a;e.dispatch((n=e.expense.id,a=t,function(e){M.ref("expenses/".concat(n)).update(a).then(function(){e(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(n,a))})})),e.history.push("/")}}),r.a.createElement("button",{onClick:function(){e.dispatch(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return function(t){M.ref("expenses/".concat(e)).remove().then(function(){t(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e}))})}}({id:e.expense.id})),e.history.push("/")}},"Supprimer D\xe9pense"))}),z=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found Page component  404 error"))},L=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(l.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:j}),r.a.createElement(p.a,{path:"/create",component:I}),r.a.createElement(p.a,{path:"/edit/:id",component:G}),r.a.createElement(p.a,{component:z}))))},U=(n(304),n(29)),V=n(164),Y=[],q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(V.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(R.a)({},e,t.updates):e});case"SET_EXPENSES":return t.expenses;default:return e}},$={text:"",sortBy:"date"},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_TEXT":return Object(R.a)({},e,{text:t.text});case"SORT_BY_DATE":return Object(R.a)({},e,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(R.a)({},e,{sortBy:"amount"});default:return e}},J=n(163),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,W=Object(U.e)(Object(U.c)({expenses:q,filters:H}),K(Object(U.a)(J.a))),Q=r.a.createElement(d.a,{store:W},r.a.createElement(L,null));c.a.render(r.a.createElement("p",null,"Loading..."),document.querySelector("#root")),W.dispatch(function(e){return M.ref("expenses").once("value").then(function(t){var n=[];t.forEach(function(e){n.push(Object(R.a)({id:e.key},e.val()))}),e(function(e){return{type:"SET_EXPENSES",expenses:e}}(n))})}).then(function(){c.a.render(Q,document.querySelector("#root"))})}},[[168,1,2]]]);
//# sourceMappingURL=main.cedadbea.chunk.js.map