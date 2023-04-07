"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[750],{8750:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,o=t(9439),s=t(2791),c=t(9085),i=t(2936),l=t(6157),u=t(9434),d=t(3634),m=t(6916),h=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},x=function(n){return n.filter.toLowerCase()},b=(0,m.P1)([h,x],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),g=t(184),v=function(n){var e=n.onSubmit,t=(0,s.useState)(""),r=(0,o.Z)(t,2),a=r[0],m=r[1],f=(0,s.useState)(""),p=(0,o.Z)(f,2),x=p[0],b=p[1],v=(0,u.I0)(),j=(0,u.v9)(h),C=function(n){var e=n.target.form.elements,t=e.name,r=e.number;m(t.value),b(r.value)};return(0,g.jsxs)(i.Z,{onSubmit:function(n){n.preventDefault(),j.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?c.Am.warning("".concat(a," is already in contacts list!")):(v((0,d.uK)({name:a,number:x})),m(""),b(""),e())},autoComplete:"off",children:[(0,g.jsxs)(i.Z.Group,{className:"mb-3",children:[(0,g.jsx)(i.Z.Label,{children:"Name:"}),(0,g.jsx)(i.Z.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,placeholder:"Enter name",onChange:C})]}),(0,g.jsxs)(i.Z.Group,{className:"mb-3",children:[(0,g.jsx)(i.Z.Label,{children:"Number:"}),(0,g.jsx)(i.Z.Control,{type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,placeholder:"Enter number",onChange:C})]}),(0,g.jsx)(l.Z,{variant:"secondary",type:"submit",children:"Add contact"})]})},j=t(4808),C=function(){var n=(0,u.v9)(x),e=(0,u.I0)();return(0,g.jsxs)(i.Z.Group,{className:"mb-3",children:[(0,g.jsx)(i.Z.Label,{className:"font-weight-bold",children:"Find contacts by Name:"}),(0,g.jsx)(i.Z.Control,{type:"text",value:n,onChange:function(n){var t=n.currentTarget;e((0,j.T)(t.value))},placeholder:"Type contact name"})]})},w=function(n){var e=n.contact,t=e.name,r=e.number,a=e.id,o=(0,u.I0)();return(0,g.jsxs)("li",{className:"d-flex align-items-center justify-content-between list-group-item mb-1",children:[t,": ",r," ",(0,g.jsx)(l.Z,{variant:"secondary",onClick:function(){return o((0,d.GK)(a))},children:"Delete"})]})},Z=function(){var n=(0,u.v9)(h),e=(0,u.v9)(f),t=(0,u.v9)(p),r=(0,u.v9)(x),a=(0,u.v9)(b),o=(0,u.I0)();return(0,s.useEffect)((function(){o((0,d.yF)())}),[o]),(0,g.jsxs)(g.Fragment,{children:[e&&(0,g.jsx)("p",{children:"Loading contacts..."}),t&&(0,g.jsx)("p",{children:t}),0===n.length&&!1===e&&null===t?(0,g.jsx)("p",{children:"Phonebook is empty"}):0===a.length&&!1===e&&null===t?(0,g.jsxs)("p",{className:"text-danger",children:["Contact with name '",r,"' not found"]}):!1===e&&null===t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("h4",{children:["Contacts count: ",(0,g.jsx)("span",{children:n.length})]}),(0,g.jsx)("ul",{className:"list-group",children:a.map((function(n){return(0,g.jsx)(w,{contact:n},n.id)}))})]})]})},y=t(4164),k=t(168),N=t(4934),L=N.Z.div(r||(r=(0,k.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  background: rgba(0, 0, 0, 0.2);\n\n  opacity: 1;\n  visibility: visible;\n  overflow-y: scroll;\n"]))),A=N.Z.div(a||(a=(0,k.Z)(["\n  position: absolute;\n  left: 50.5%;\n  top: 20%;\n\n  width: 350px;\n  padding: 24px;\n\n  transform: translate(-50.5%, -20%);\n\n  border-radius: 20px;\n\n  background-color: #fff;\n"]))),E=document.querySelector("#modal-root"),S=function(n){var e=n.onClose,t=n.children;(0,s.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e()};return(0,y.createPortal)((0,g.jsx)(L,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,g.jsx)(A,{className:"w-25",children:t})}),E)},T=N.Z.div({marginLeft:"auto",marginRight:"auto",marginTop:"24px",padding:"24px",backgroundColor:"#eee",borderRadius:"6px",color:"#15172b",display:"grid",gridTemplateColumns:"1fr",gridGap:"8px"}),F=function(){var n=(0,s.useState)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=function(){r(!t)};return(0,g.jsxs)(T,{children:[(0,g.jsx)("h1",{className:"mb-4",children:"Phonebook"}),(0,g.jsx)(l.Z,{variant:"secondary",type:"button",className:"w-25",onClick:a,children:"Add contact"}),t&&(0,g.jsx)(S,{onClose:a,children:(0,g.jsx)(v,{onSubmit:a})}),(0,g.jsx)("h2",{className:"mb-3",children:"Contacts"}),(0,g.jsx)(C,{}),(0,g.jsx)(Z,{})]})},G=function(){return(0,g.jsx)(F,{})}}}]);
//# sourceMappingURL=750.64f47761.chunk.js.map