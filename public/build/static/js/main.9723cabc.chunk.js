(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){e.exports=a(79)},49:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(15),s=a.n(r),i=a(9),o=a(10),c=a(13),u=a(12),m=(a(48),a(49),a(17)),p=a(81),h=a(99),d=a(82),g=a(83),E=a(84),O=a(85),y=a(86),f=a(87),b=a(88),S=a(11),v=a(19),j=a.n(v),w=function(e,t,a,n){return{type:"GET_ERRORS",payload:{msg:e,status:t,id:a,type:n}}},_=function(){return{type:"CLEAR_ERRORS"}},I=function(){return function(e,t){j.a.get("/api/items",A(t)).then((function(t){e({type:"GET_ITEMS",payload:t.data})})).catch((function(t){e({type:"AUTH_ERROR"})}))}},A=function(e){var t=e().auth.token,a={headers:{"Content-Type":"application/json"}};return t&&(a.headers.Authorization=t),a},C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:null,password:null,isOpen:!1},e.componentDidUpdate=function(t){var a=e.props.error;a!==t.error&&("LOGIN_FAIL"===a.id?e.setState({msg:a.message,type:a.type}):e.setState({msg:null,type:null}));var n=e.props.isAuthenticated;e.state.isOpen&&n&&e.toggle()},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,password:a.password};e.props.login(n)},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,{href:"#",onClick:this.toggle},"SignIn"),l.a.createElement(h.a,{isOpen:this.state.isOpen,toggle:this.toggle},l.a.createElement(d.a,{toggle:this.toggle},"Signin User"),l.a.createElement(g.a,null,l.a.createElement(E.a,{onSubmit:this.handleSubmit},l.a.createElement(O.a,null,l.a.createElement(y.a,{htmlFor:"email"},"Email"),l.a.createElement(f.a,{type:"email",id:"email",onChange:this.handleChange,placeholder:"Email"}),null!==this.state.type&&"email"===this.state.type?l.a.createElement("small",null,this.state.msg):null),l.a.createElement(O.a,null,l.a.createElement(y.a,{htmlFor:"password"},"Password"),l.a.createElement(f.a,{type:"password",id:"password",onChange:this.handleChange,placeholder:"Password"}),null!==this.state.type&&"password"===this.state.type?l.a.createElement("small",null,this.state.msg):null),l.a.createElement(b.a,{type:"submit",className:"w-100"},"SignIn")))))}}]),a}(n.Component),R=Object(S.b)((function(e){return{isAuthentication:e.auth.isAuthenticated,error:e.error}}),{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});j.a.post("/api/auth/signin",n,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:"LOGIN_SUCCESS",payload:t.data}),I()})).catch((function(t){e(w(t.response.data.message,t.response.status,"LOGIN_FAIL",t.response.data.type)),e({type:"LOGIN_FAIL"})}))}},clearError:_})(C),L=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={username:null,email:null,password:null,isOpen:!1,msg:null,type:null},e.componentDidUpdate=function(t){var a=e.props.error;a!==t.error&&("REGISTER_FAIL"===a.id?e.setState({msg:a.message,type:a.type}):e.setState({msg:null,type:null}));var n=e.props.isAuthenticated;e.state.isOpen&&n&&e.toggle()},e.toggle=function(){e.setState({isOpen:!e.state.isOpen}),e.props.clearError()},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={username:a.username,email:a.email,password:a.password};e.props.register(n)},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,{href:"#",onClick:this.toggle},"SignUp"),l.a.createElement(h.a,{isOpen:this.state.isOpen,toggle:this.toggle},l.a.createElement(d.a,{toggle:this.toggle},"SignUp User"),l.a.createElement(g.a,null,l.a.createElement(E.a,{onSubmit:this.handleSubmit},l.a.createElement(O.a,null,l.a.createElement(y.a,{htmlFor:"username"},"Username"),l.a.createElement(f.a,{type:"username",id:"username",onChange:this.handleChange,placeholder:"Username"}),null!==this.state.type&&"username"===this.state.type?l.a.createElement("small",null,this.state.msg):null),l.a.createElement(O.a,null,l.a.createElement(y.a,{htmlFor:"email"},"Email"),l.a.createElement(f.a,{type:"email",id:"email",onChange:this.handleChange,placeholder:"Email"}),null!==this.state.type&&"email"===this.state.type?l.a.createElement("small",null,this.state.msg):null,null!==this.state.type&&"register"===this.state.type?l.a.createElement("small",null,this.state.msg):null),l.a.createElement(O.a,null,l.a.createElement(y.a,{htmlFor:"password"},"Password"),l.a.createElement(f.a,{type:"password",id:"password",onChange:this.handleChange,placeholder:"Password"}),null!==this.state.type&&"password"===this.state.type?l.a.createElement("small",null,this.state.msg):null),l.a.createElement(b.a,{type:"submit",className:"w-100"},"SignUp")))))}}]),a}(n.Component),T=Object(S.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.username,a=e.email,n=e.password;return function(e){var l=JSON.stringify({username:t,email:a,password:n});j.a.post("/api/auth/signup",l,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:"REGISTER_SUCCESS",payload:t.data}),I()})).catch((function(t){e(w(t.response.data.message,t.response.status,"REGISTER_FAIL",t.response.data.type)),e({type:"REGISTER_FAIL"})}))}},clearError:_})(L),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(p.a,{onClick:this.props.logout,href:"#"},"Logout"))}}]),a}(n.Component),D=Object(S.b)(null,{logout:function(){return{type:"LOGOUT_SUCCESS"}}})(k),U=a(89),N=a(90),F=a(91),G=a(92),M=a(93),H=a(94),P=a(95),x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,a=e.user,r=l.a.createElement(n.Fragment,null,l.a.createElement(U.a,null,l.a.createElement(D,null))),s=l.a.createElement(n.Fragment,null,l.a.createElement(U.a,null,l.a.createElement(R,null)),l.a.createElement(U.a,null,l.a.createElement(T,null)));return l.a.createElement(N.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},l.a.createElement(F.a,null,l.a.createElement(G.a,{href:"/"},"Shopping List"),l.a.createElement(M.a,{onClick:this.toggle}),l.a.createElement(H.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(P.a,{className:"ml-auto",navbar:!0},a?l.a.createElement("p",{className:"welcome-text"},"welcome ".concat(a.username)):null,t?r:s))))}}]),a}(n.Component),J=Object(S.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))(x),V=a(96),X=a(97),B=a(100),W=a(98),z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={modal:!1,name:""},e.toggle=function(){e.setState({modal:!e.state.modal})},e.setValueToState=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmitHandle=function(t){t.preventDefault(),e.props.addItem({id:Math.random(),name:e.state.name}),e.toggle()},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.a,{color:"dark",style:{marginBottom:"2rem"},onClick:this.toggle},"Add Item"),l.a.createElement(h.a,{isOpen:this.state.modal,toggle:this.toggle},l.a.createElement(d.a,{toggle:this.toggle},"Modal title"),l.a.createElement(g.a,null,l.a.createElement(E.a,{onSubmit:this.onSubmitHandle},l.a.createElement(O.a,null,l.a.createElement(y.a,{htmlFor:"name"},"Shopping Item"),l.a.createElement(f.a,{type:"text",name:"name",id:"item",placeholder:"Shopping List Item",onChange:this.setValueToState})),l.a.createElement(b.a,{type:"submit",color:"dark"},"ADD ITEM")))))}}]),a}(n.Component),$=Object(S.b)((function(e){return{item:e.item}}),{addItem:function(e){return function(t,a){j.a.post("/api/items",{item:e.name},A(a)).then((function(e){t({type:"ADD_ITEM",payload:e.data})}))}}})(z),q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=function(){e.props.getItem()},e.remove=function(t){e.props.deleteItem(t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.item.items,a=this.props.isAuthenticated,r=l.a.createElement(n.Fragment,null,l.a.createElement($,null),l.a.createElement(V.a,null,l.a.createElement(B.a,{className:"shopping-list"},t.map((function(t){return l.a.createElement(W.a,{key:t._id,timeout:500,classNames:"fade"},l.a.createElement(X.a,null,l.a.createElement(b.a,{className:"remove-btn",color:"danger",onClick:function(){e.remove(t._id)}},"\xd7"),t.item))}))))),s=l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Please login or signup."));return l.a.createElement(F.a,null,a?r:s)}}]),a}(n.Component),K=Object(S.b)((function(e){return{item:e.item,isAuthenticated:e.auth.isAuthenticated}}),{getItem:I,deleteItem:function(e){return function(t,a){j.a.delete("/api/items/".concat(e),A(a)).then((function(a){t({type:"DELETE_ITEM",payload:e})}))}}})(q),Q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.store.dispatch((function(e,t){e({type:"USER_LOADED"}),j.a.get("/api/auth/getuser",A(t)).then((function(t){e({type:"USER_LOADED",payload:t.data.user})})).catch((function(t){e(w(t.response.data,t.response.status)),e({type:"AUTH_ERROR"})}))}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(J,null),l.a.createElement(K,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(18),Z=a(40),ee=a(41),te=a(8),ae={items:[]},ne={type:null,message:null,status:null,id:null},le={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},re=Object(Y.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(te.a)(Object(te.a)({},e),{},{items:t.payload});case"ADD_ITEM":return Object(te.a)(Object(te.a)({},e),{},{items:[].concat(Object(ee.a)(e.items),[t.payload.item])});case"DELETE_ITEM":return Object(te.a)(Object(te.a)({},e),{},{items:e.items.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!0});case"USER_LOADED":return Object(te.a)(Object(te.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(te.a)(Object(te.a)({},e),{},{isAuthenticated:!0,user:{username:t.payload.user.username,email:t.payload.user.email}});case"LOGIN_FAIL":case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGOUT_SUCCESS":return localStorage.removeItem("token"),Object(te.a)(Object(te.a)({},e),{},{isAuthenticated:!1,user:null,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{message:t.payload.msg,status:t.payload.status,id:t.payload.id,type:t.payload.type};case"CLEAR_ERRORS":return{message:null,status:null,id:null,type:null};default:return e}}}),se=[Z.a],ie=Object(Y.e)(re,{},Object(Y.d)(Y.a.apply(void 0,se),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{store:ie},l.a.createElement(Q,{store:ie}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.9723cabc.chunk.js.map