(this["webpackJsonpevernote-app-with-reducer"]=this["webpackJsonpevernote-app-with-reducer"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=a(7),i=a(8),u=a(4),d=a(2);var s=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"Evernote"),l.a.createElement("img",{src:""}))};var v=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e,"-Developed by Praveen"))};var m=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(t){e.dispatch({type:"delete-todo",id:e.id}),t.preventDefault()}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}))))};var p=function(e){var t=e.dispatch,a=e.title,n=e.content;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){t({type:"submit"}),e.preventDefault()}},l.a.createElement("input",{name:"title",placeholder:"Title",value:a,onChange:function(e){return t({type:"field",field:"title",value:e.target.value})}}),l.a.createElement("textarea",{name:"content",placeholder:"Take a note...",value:n,rows:"3",onChange:function(e){return t({type:"field",field:"content",value:e.target.value})}}),l.a.createElement("button",null,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"})))))},h={title:"",content:"",todos:[]};function f(e,t){switch(t.type){case"field":return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.field,t.value));case"submit":return{title:"",content:"",todos:[].concat(Object(i.a)(e.todos),[{title:e.title,content:e.content}])};case"delete-todo":return Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e,a){return a!==t.id}))});default:throw Error("unexpected action type")}}var E=function(){var e=Object(n.useReducer)(f,h),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(p,{dispatch:r,title:a.title,content:a.content}),a.todos.map((function(e,t){return l.a.createElement(m,{id:t,key:t,title:e.title,content:e.content,dispatch:r})})),l.a.createElement(v,null))};c.a.render(l.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.658c0285.chunk.js.map