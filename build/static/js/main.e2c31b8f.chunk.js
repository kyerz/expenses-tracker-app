(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,n){e.exports=n(314)},313:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),u=n.n(o),c=n(319),i=n(318),s=n(171),l=n(160),d=n.n(l),p=n(161),m=n(8),h=n(317),f=n(316),E=n(54);E.initializeApp({apiKey:"AIzaSyB_W78WKbXNcdCGG7A1bzPEFvF2Rpjj4qI",authDomain:"expenses-tracker-1a008.firebaseapp.com",databaseURL:"https://expenses-tracker-1a008.firebaseio.com",projectId:"expenses-tracker-1a008",storageBucket:"expenses-tracker-1a008.appspot.com",messagingSenderId:"473758814187"});var v=E.database(),b=new E.auth.GoogleAuthProvider,g=Object(m.b)(void 0,function(e){return{startLogout:function(){return e(function(){return E.auth().signOut()})}}})(function(e){var t=e.startLogout;return r.a.createElement("div",null,r.a.createElement("h1",null,"Expenses Tracker"),r.a.createElement(f.a,{activeClassName:"selected",exact:!0,to:"/dashboard"},"Tableau de bord"),r.a.createElement(f.a,{activeClassName:"selected",to:"/create"},"Cr\xe9er une D\xe9pense"),r.a.createElement("button",{onClick:t},"Logout"))}),O=Object(m.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(p.a)(e,["isAuthenticated","component"]);return r.a.createElement("div",null,r.a.createElement(s.a,Object.assign({},a,{component:function(e){return t?r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(n,e)):r.a.createElement(h.a,{to:"/"})}})))}),x=n(99),S=n(3),y=n.n(S),C=n(163),j=n.n(C),A=n(41),_=n.n(A);_.a.register("locale","fr",{delimiters:{thousands:" ",decimal:","},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){return 1===e?"er":"\xe8me"},currency:{symbol:"\u20ac"}}),_.a.locale("fr");var T=function(e){var t=e.description,n=e.amount,a=e.createdAt,o=e.id;return r.a.createElement("div",null,r.a.createElement(x.a,{to:"/edit/".concat(o)},r.a.createElement("h3",null,t)),r.a.createElement("p",null,_()(n/100).format("$0,0.00"),"-",y()(a).locale("fr",j.a).format("DD MMMM GGGG")))},D=function(e,t){return e.filter(function(n){return n.description.toLowerCase().includes(t.text.toLowerCase())?e:null}).sort(function(e,n){return"date"===t.sortBy?n.createdAt-e.createdAt:"amount"===t.sortBy?n.amount-e.amount:0})},N=Object(m.b)(function(e){return{expenses:D(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,e.expenses.map(function(e){return r.a.createElement(T,Object.assign({key:e.id},e))}))}),k=Object(m.b)(function(e){return{filters:e.filters}})(function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"rechercher une d\xe9pense",value:e.filters.text,onChange:function(t){return e.dispatch({type:"SET_SEARCH_TEXT",text:t.target.value})}}),r.a.createElement("select",{value:e.filters.sortBy,onChange:function(t){"date"===t.target.value?e.dispatch({type:"SORT_BY_DATE"}):"amount"===t.target.value&&e.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"date"),r.a.createElement("option",{value:"amount"},"montant")))}),w=function(e){var t=0;return e.map(function(e){return t+=e.amount}),t},L=Object(m.b)(function(e){var t=D(e.expenses,e.filters);return{expensesTotal:w(t),expensesCount:t.length}})(function(e){var t=e.expensesCount,n=e.expensesTotal,a=1===t?"d\xe9pense":"d\xe9penses",o=_()(n/100).format("$0,0.00");return r.a.createElement("div",null,r.a.createElement("h1",null,"Affichage de ",t," ",a," totalisant ",o))}),P=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Tableau de bord"),r.a.createElement(L,null),r.a.createElement(k,null),r.a.createElement(N,null))},X=n(164),B=n(165),R=n(172),G=n(166),F=n(173),I=(n(243),n(167)),M=(n(310),n(168)),U=n.n(M),z=function(e){function t(){var e,n;Object(X.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(R.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).state={description:n.props.expense?n.props.expense.description:"",note:n.props.expense?n.props.expense.note:"",amount:n.props.expense?(n.props.expense.amount/100).toString():"",error:"",date:y()(),dateFocused:!1},n.onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onAmountChange=function(e){var t=e.target.value;t.match(/^\d*(\.\d{0,2})?$/)&&n.setState(function(){return{amount:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onSubmit=function(e){if(e.preventDefault(),n.state.description&&n.state.amount)if(n.state.description.trim()){n.setState(function(){return{error:""}});var t={description:n.state.description,note:n.state.note,amount:100*parseFloat(n.state.amount,10),createdAt:n.state.date.valueOf()};n.props.onSubmit(t)}else n.setState(function(){return{error:"Le champ description est invalide"}});else n.setState(function(){return{error:"Veuillez fournir une description et son montant"}})},n.onDateChange=function(e){n.setState(function(){return{date:e}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{dateFocused:t}})},n}return Object(F.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"description",onChange:this.onDescriptionChange,value:this.state.description}),r.a.createElement("input",{type:"number",placeholder:"montant",onChange:this.onAmountChange,value:this.state.amount,step:"0.01"}),r.a.createElement(I.SingleDatePicker,{date:this.state.date,onDateChange:this.onDateChange,focused:this.state.dateFocused,onFocusChange:this.onFocusChange,id:U()(),numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"vous pouvez \xe9crire une note ici",cols:"30",rows:"2",onChange:this.onNoteChange,value:this.state.note}),r.a.createElement("button",{type:"submit"},"Ajouter D\xe9pense")))}}]),t}(a.Component),V=n(20),Y=Object(m.b)()(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Ajouter une nouvelle D\xe9pense"),r.a.createElement(z,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.description,a=void 0===n?"":n,r=e.note,o=void 0===r?"":r,u=e.amount,c=void 0===u?0:u,i=e.createdAt,s={description:a,note:o,amount:c,createdAt:void 0===i?0:i};v.ref("expenses").push(s).then(function(e){t(function(e){return{type:"ADD_EXPENSE",expense:e}}(Object(V.a)({id:e.key},s)))})}}(t)),e.history.push("/dashboard")}}))}),q=Object(m.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Editer une D\xe9pense"),r.a.createElement(z,{expense:e.expense,onSubmit:function(t){var n,a;e.dispatch((n=e.expense.id,a=t,function(e){v.ref("expenses/".concat(n)).update(a).then(function(){e(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(n,a))})})),e.history.push("/dashboard")}}),r.a.createElement("button",{onClick:function(){e.dispatch(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return function(t){v.ref("expenses/".concat(e)).remove().then(function(){t(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e}))})}}({id:e.expense.id})),e.history.push("/dashboard")}},"Supprimer D\xe9pense"))}),W=Object(m.b)(void 0,function(e){return{startLogin:function(){return e(function(){return E.auth().signInWithPopup(b)})}}})(function(e){var t=e.startLogin;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t},"Login"))}),$=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found Page component  404 error"))},H=d()(),J=function(){return r.a.createElement(c.a,{history:H},r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:W}),r.a.createElement(O,{exact:!0,path:"/dashboard",component:P}),r.a.createElement(O,{path:"/create",component:Y}),r.a.createElement(O,{path:"/edit/:id",component:q}),r.a.createElement(s.a,{component:$}))))},K=(n(313),n(30)),Q=n(169),Z=n(170),ee=[],te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(Z.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(V.a)({},e,t.updates):e});case"SET_EXPENSES":return t.expenses;default:return e}},ne={text:"",sortBy:"date"},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_TEXT":return Object(V.a)({},e,{text:t.text});case"SORT_BY_DATE":return Object(V.a)({},e,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(V.a)({},e,{sortBy:"amount"});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid};case"LOGOUT":return{};default:return e}},oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,ue=Object(K.e)(Object(K.c)({expenses:te,filters:ae,auth:re}),oe(Object(K.a)(Q.a))),ce=r.a.createElement(m.a,{store:ue},r.a.createElement(J,null)),ie=!1,se=function(){ie||(u.a.render(ce,document.querySelector("#root")),ie=!0)};u.a.render(r.a.createElement("p",null,"Loading..."),document.querySelector("#root")),E.auth().onAuthStateChanged(function(e){e?(ue.dispatch({type:"LOGIN",uid:e.uid}),ue.dispatch(function(e){return v.ref("expenses").once("value").then(function(t){var n=[];t.forEach(function(e){n.push(Object(V.a)({id:e.key},e.val()))}),e(function(e){return{type:"SET_EXPENSES",expenses:e}}(n))})}).then(function(){se(),"/"===H.location.pathname&&H.push("/dashboard")})):(ue.dispatch({type:"LOGOUT"}),se(),H.push("/"))})}},[[174,1,2]]]);
//# sourceMappingURL=main.e2c31b8f.chunk.js.map