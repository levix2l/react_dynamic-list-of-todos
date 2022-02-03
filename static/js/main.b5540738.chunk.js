(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(9),s=n.n(r),c=n(3),a=n(4),o=n(5),i=n(7),l=n(6),u=n(1),d=n.n(u),p=n(2),h=n.n(p);n(16),n(17),n(18);function j(){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/todos");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(19);var m=n(10),O=n.n(m),x=n(0),y=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:"",filterBy:"all"},e.onUserSelected=function(t){return t===e.props.selectedUserId?null:e.props.selectUser(t)},e.handleSearch=function(t){e.setState({query:t.target.value.toLowerCase()})},e.getFilteredTodos=function(){return e.props.todos.filter((function(t){return t.title.toLowerCase().includes(e.state.query)}))},e.handleSelectorInput=function(t){e.setState({filterBy:t.target.value})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.filterBy,n=this.getFilteredTodos();return n=n.filter((function(e){switch(t){case"all":return e;case"active":return!e.completed;case"completed":return e.completed;default:return 0}})),Object(x.jsxs)("div",{className:"TodoList",children:[Object(x.jsx)("h2",{className:"subtitle pb-2",children:"Todos:"}),Object(x.jsx)("div",{className:"control pb-2",children:Object(x.jsx)("input",{type:"text",id:"search-query",className:"input",placeholder:"Search by title",value:this.state.query,onChange:this.handleSearch})}),Object(x.jsx)("section",{className:"select is-info",children:Object(x.jsxs)("select",{value:t,onChange:this.handleSelectorInput,children:[Object(x.jsx)("option",{value:"all",children:"All"}),Object(x.jsx)("option",{value:"active",children:"Active"}),Object(x.jsx)("option",{value:"completed",children:"Completed"})]})}),Object(x.jsx)("div",{className:"TodoList__list-container pt-2",children:Object(x.jsx)("ul",{className:"TodoList__list",children:n.map((function(t){return Object(x.jsxs)("li",{className:O()("TodoList__item",{"TodoList__item--unchecked":!t.completed},{"TodoList__item--checked":t.completed}),children:[Object(x.jsx)("input",{type:"checkbox",checked:t.completed,readOnly:!0}),Object(x.jsx)("p",{children:t.title}),Object(x.jsx)("button",{className:" TodoList__user-button button ",type:"button",onClick:function(){return e.onUserSelected(+t.userId)},children:"User #".concat(t.userId)})]},t.id)}))})})]})}}]),n}(h.a.Component),_=(n(21),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e=Object(c.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.userId,e.next=3,f(t);case 3:n=e.sent,this.setState({user:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=this.props.clearUser;return Object(x.jsxs)("div",{className:"CurrentUser box",children:[Object(x.jsx)("h2",{className:"CurrentUser__title",children:Object(x.jsx)("span",{children:"Selected user: ".concat(null===e||void 0===e?void 0:e.id)})}),Object(x.jsx)("h3",{className:"CurrentUser__name",children:null===e||void 0===e?void 0:e.name}),Object(x.jsx)("p",{className:"CurrentUser__email",children:null===e||void 0===e?void 0:e.email}),Object(x.jsx)("p",{className:"CurrentUser__phone pb-2",children:null===e||void 0===e?void 0:e.phone}),Object(x.jsx)("button",{className:"button is-danger",type:"button",onClick:t,children:"Clear"})]})}}]),n}(h.a.Component)),U=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={todos:[],selectedUserId:0},e.selectUser=function(t){return e.setState({selectedUserId:t})},e.clearUser=function(){return e.setState({selectedUserId:0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App__sidebar",children:Object(x.jsx)(y,{todos:t,selectUser:this.selectUser,selectedUserId:n})}),Object(x.jsx)("div",{className:"App__content",children:Object(x.jsx)("div",{className:"App__content-container",children:n?Object(x.jsx)(_,{userId:n,clearUser:this.clearUser}):"No user selected"})})]})}}]),n}(h.a.Component),N=U;s.a.render(Object(x.jsx)(N,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b5540738.chunk.js.map