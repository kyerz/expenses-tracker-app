(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,n){e.exports=n(314)},313:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),u=n.n(o),c=n(319),i=n(318),s=n(171),l=n(161),d=n.n(l),p=n(67),m=n(7),h=n(317),f=n(316),E=n(54);E.initializeApp({apiKey:"AIzaSyB_W78WKbXNcdCGG7A1bzPEFvF2Rpjj4qI",authDomain:"expenses-tracker-1a008.firebaseapp.com",databaseURL:"https://expenses-tracker-1a008.firebaseio.com",projectId:"expenses-tracker-1a008",storageBucket:"expenses-tracker-1a008.appspot.com",messagingSenderId:"473758814187"});var v=E.database(),b=new E.auth.GoogleAuthProvider,g=Object(m.b)(void 0,function(e){return{startLogout:function(){return e(function(){return E.auth().signOut()})}}})(function(e){var t=e.startLogout;return r.a.createElement("div",null,r.a.createElement("h1",null,"Expenses Tracker"),r.a.createElement(f.a,{activeClassName:"selected",to:"/dashboard"},"Tableau de bord"),r.a.createElement(f.a,{activeClassName:"selected",to:"/create"},"Cr\xe9er une D\xe9pense"),r.a.createElement("button",{onClick:t},"Logout"))}),O=Object(m.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(p.a)(e,["isAuthenticated","component"]);return r.a.createElement("div",null,r.a.createElement(s.a,Object.assign({},a,{component:function(e){return t?r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(n,e)):r.a.createElement(h.a,{to:"/"})}})))}),x=Object(m.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(p.a)(e,["isAuthenticated","component"]);return r.a.createElement("div",null,r.a.createElement(s.a,Object.assign({},a,{component:function(e){return t?r.a.createElement(h.a,{to:"/dashboard"}):r.a.createElement(n,e)}})))}),S=n(100),y=n(3),j=n.n(y),C=n(163),A=n.n(C),_=n(41),T=n.n(_);T.a.register("locale","fr",{delimiters:{thousands:" ",decimal:","},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){return 1===e?"er":"\xe8me"},currency:{symbol:"\u20ac"}}),T.a.locale("fr");var D=function(e){var t=e.description,n=e.amount,a=e.createdAt,o=e.id;return r.a.createElement("div",null,r.a.createElement(S.a,{to:"/edit/".concat(o)},r.a.createElement("h3",null,t)),r.a.createElement("p",null,T()(n/100).format("$0,0.00"),"-",j()(a).locale("fr",A.a).format("DD MMMM GGGG")))},N=function(e,t){return e.filter(function(n){return n.description.toLowerCase().includes(t.text.toLowerCase())?e:null}).sort(function(e,n){return"date"===t.sortBy?n.createdAt-e.createdAt:"amount"===t.sortBy?n.amount-e.amount:0})},k=Object(m.b)(function(e){return{expenses:N(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,e.expenses.map(function(e){return r.a.createElement(D,Object.assign({key:e.id},e))}))}),w=Object(m.b)(function(e){return{filters:e.filters}})(function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"rechercher une d\xe9pense",value:e.filters.text,onChange:function(t){return e.dispatch({type:"SET_SEARCH_TEXT",text:t.target.value})}}),r.a.createElement("select",{value:e.filters.sortBy,onChange:function(t){"date"===t.target.value?e.dispatch({type:"SORT_BY_DATE"}):"amount"===t.target.value&&e.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"date"),r.a.createElement("option",{value:"amount"},"montant")))}),L=function(e){var t=0;return e.map(function(e){return t+=e.amount}),t},P=Object(m.b)(function(e){var t=N(e.expenses,e.filters);return{expensesTotal:L(t),expensesCount:t.length}})(function(e){var t=e.expensesCount,n=e.expensesTotal,a=1===t?"d\xe9pense":"d\xe9penses",o=T()(n/100).format("$0,0.00");return r.a.createElement("div",null,r.a.createElement("h1",null,"Affichage de ",t," ",a," totalisant ",o))}),X=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Tableau de bord"),r.a.createElement(P,null),r.a.createElement(w,null),r.a.createElement(k,null))},B=n(164),R=n(165),G=n(172),F=n(166),I=n(173),M=(n(243),n(167)),U=(n(310),n(168)),z=n.n(U),V=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(G.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={description:n.props.expense?n.props.expense.description:"",note:n.props.expense?n.props.expense.note:"",amount:n.props.expense?(n.props.expense.amount/100).toString():"",error:"",date:j()(),dateFocused:!1},n.onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onAmountChange=function(e){var t=e.target.value;t.match(/^\d*(\.\d{0,2})?$/)&&n.setState(function(){return{amount:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onSubmit=function(e){if(e.preventDefault(),n.state.description&&n.state.amount)if(n.state.description.trim()){n.setState(function(){return{error:""}});var t={description:n.state.description,note:n.state.note,amount:100*parseFloat(n.state.amount,10),createdAt:n.state.date.valueOf()};n.props.onSubmit(t)}else n.setState(function(){return{error:"Le champ description est invalide"}});else n.setState(function(){return{error:"Veuillez fournir une description et son montant"}})},n.onDateChange=function(e){n.setState(function(){return{date:e}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{dateFocused:t}})},n}return Object(I.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"description",onChange:this.onDescriptionChange,value:this.state.description}),r.a.createElement("input",{type:"number",placeholder:"montant",onChange:this.onAmountChange,value:this.state.amount,step:"0.01"}),r.a.createElement(M.SingleDatePicker,{date:this.state.date,onDateChange:this.onDateChange,focused:this.state.dateFocused,onFocusChange:this.onFocusChange,id:z()(),numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"vous pouvez \xe9crire une note ici",cols:"30",rows:"2",onChange:this.onNoteChange,value:this.state.note}),r.a.createElement("button",{type:"submit"},"Ajouter D\xe9pense")))}}]),t}(a.Component),Y=n(20),q=Object(m.b)()(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Ajouter une nouvelle D\xe9pense"),r.a.createElement(V,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.description,a=void 0===n?"":n,r=e.note,o=void 0===r?"":r,u=e.amount,c=void 0===u?0:u,i=e.createdAt,s={description:a,note:o,amount:c,createdAt:void 0===i?0:i};v.ref("expenses").push(s).then(function(e){t(function(e){return{type:"ADD_EXPENSE",expense:e}}(Object(Y.a)({id:e.key},s)))})}}(t)),e.history.push("/dashboard")}}))}),W=Object(m.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Editer une D\xe9pense"),r.a.createElement(V,{expense:e.expense,onSubmit:function(t){var n,a;e.dispatch((n=e.expense.id,a=t,function(e){v.ref("expenses/".concat(n)).update(a).then(function(){e(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(n,a))})})),e.history.push("/dashboard")}}),r.a.createElement("button",{onClick:function(){e.dispatch(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return function(t){v.ref("expenses/".concat(e)).remove().then(function(){t(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:e}))})}}({id:e.expense.id})),e.history.push("/dashboard")}},"Supprimer D\xe9pense"))}),$=Object(m.b)(void 0,function(e){return{startLogin:function(){return e(function(){return E.auth().signInWithPopup(b)})}}})(function(e){var t=e.startLogin;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t},"Login"))}),H=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found Page component  404 error"))},J=d()(),K=function(){return r.a.createElement(c.a,{history:J},r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(x,{exact:!0,path:"/",component:$}),r.a.createElement(O,{exact:!0,path:"/dashboard",component:X}),r.a.createElement(O,{path:"/create",component:q}),r.a.createElement(O,{path:"/edit/:id",component:W}),r.a.createElement(s.a,{component:H}))))},Q=(n(313),n(30)),Z=n(169),ee=n(170),te=[],ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(ee.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(Y.a)({},e,t.updates):e});case"SET_EXPENSES":return t.expenses;default:return e}},ae={text:"",sortBy:"date"},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_TEXT":return Object(Y.a)({},e,{text:t.text});case"SORT_BY_DATE":return Object(Y.a)({},e,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(Y.a)({},e,{sortBy:"amount"});default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid};case"LOGOUT":return{};default:return e}},ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,ce=Object(Q.e)(Object(Q.c)({expenses:ne,filters:re,auth:oe}),ue(Object(Q.a)(Z.a))),ie=r.a.createElement(m.a,{store:ce},r.a.createElement(K,null)),se=!1,le=function(){se||(u.a.render(ie,document.querySelector("#root")),se=!0)};u.a.render(r.a.createElement("p",null,"Loading..."),document.querySelector("#root")),E.auth().onAuthStateChanged(function(e){e?(ce.dispatch({type:"LOGIN",uid:e.uid}),ce.dispatch(function(e){return v.ref("expenses").once("value").then(function(t){var n=[];t.forEach(function(e){n.push(Object(Y.a)({id:e.key},e.val()))}),e(function(e){return{type:"SET_EXPENSES",expenses:e}}(n))})}).then(function(){le(),"/"===J.location.pathname&&J.push("/dashboard")})):(ce.dispatch({type:"LOGOUT"}),le(),J.push("/"))})}},[[174,1,2]]]);
//# sourceMappingURL=main.facbc157.chunk.js.map