(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(15),u=t.n(a),o=t(6),i=t(3),s=t(0),d=function(e){var n=e.filter,t=e.handleFilterChange;return Object(s.jsx)("form",{children:Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{value:n,onChange:t})]})})},l=function(e){var n=e.newName,t=e.handleNameChange,c=e.newNumber,r=e.handleNumberChange,a=e.addPerson;return Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:n,onChange:t})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:c,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})},f=function(e){var n=e.person,t=e.deletePerson;return Object(s.jsxs)("div",{children:[n.name," ",n.number," ",Object(s.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},j=function(e){var n=e.persons,t=e.filter,c=e.deletePerson,r=t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n;return Object(s.jsx)("div",{children:r.map((function(e){return Object(s.jsx)(f,{person:e,deletePerson:c},e.name)}))})},h=t(4),b=t.n(h),m="http://localhost:3001/api/persons",O=function(){return b.a.get(m).then((function(e){return e.data}))},p=function(e){return b.a.post(m,e).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return b.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},w=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"error",children:n})},g=(t(39),function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),f=u[0],h=u[1],b=Object(c.useState)(""),m=Object(i.a)(b,2),g=m[0],C=m[1],N=Object(c.useState)(""),k=Object(i.a)(N,2),y=k[0],P=k[1],S=Object(c.useState)(null),T=Object(i.a)(S,2),E=T[0],R=T[1];Object(c.useEffect)((function(){O().then((function(e){r(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(w,{message:E}),Object(s.jsx)(d,{filter:y,handleFilterChange:function(e){P(e.target.value)}}),Object(s.jsx)(l,{newName:f,handleNameChange:function(e){h(e.target.value)},newNumber:g,handleNumberChange:function(e){C(e.target.value)},addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===f}))){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===f})),c=Object(o.a)(Object(o.a)({},n),{},{number:g});v(c.id,c).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e}))),h(""),C(""),R("".concat(c.name," was successfully updated")),setTimeout((function(){R(null)}),5e3)})).catch((function(e){console.log(e),r(t.filter((function(e){return e.id!==c.id}))),h(""),C(""),R("[ERROR] ".concat(c.name," was already deleted from server")),setTimeout((function(){R(null)}),5e3)}))}}else p({name:f,number:g}).then((function(e){r(t.concat(e)),h(""),C(""),R("".concat(f," was successfully added")),setTimeout((function(){R(null)}),5e3)})).catch((function(e){R("".concat(f," wasn't successfully added")),setTimeout((function(){R(null)}),5e3)}))}}),Object(s.jsx)("h1",{children:"add a new"}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(j,{persons:t,filter:y,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("delete ".concat(n.name,"?"))&&(x(n.id).then((function(e){R("Deleted ".concat(n.name))})).catch((function(e){R("Issue deleting ".concat(n.name))})),r(t.filter((function(n){return n.id!==e}))),setTimeout((function(){R(null)}),3e3))}})]})});u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e22d2a6c.chunk.js.map