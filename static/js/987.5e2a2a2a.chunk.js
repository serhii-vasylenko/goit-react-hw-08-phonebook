"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[987],{6987:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,o,a=t(9439),i=t(2791),s=t(9434),c=t(3634),d=t(4934),l=d.Z.form({display:"flex",flexDirection:"column",marginBottom:"32px"}),u=d.Z.label({marginBottom:"12px"}),p=d.Z.input({width:"100%",height:"24px",marginTop:"4px",borderRadius:"4px",border:"1px solid rgba(33, 33, 33, 0.2);"}),m=(d.Z.button({width:"120px",marginLeft:"auto",marginRight:"auto",backgroundColor:"#9d9d9d",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer","&:hover":{backgroundColor:"#15172b"}}),t(6157)),x=t(184),h=function(n){var e=n.onSubmit,t=(0,i.useState)(""),r=(0,a.Z)(t,2),o=r[0],d=r[1],h=(0,i.useState)(""),f=(0,a.Z)(h,2),b=f[0],g=f[1],v=(0,s.I0)(),j=function(n){var e=n.target.form.elements,t=e.name,r=e.number;d(t.value),g(r.value)};return(0,x.jsxs)(l,{onSubmit:function(n){n.preventDefault(),v((0,c.uK)({name:o,number:b})),d(""),g(""),e()},autoComplete:"off",children:[(0,x.jsxs)(u,{htmlFor:"",children:["Name:",(0,x.jsx)(p,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:o,onChange:j})]}),(0,x.jsxs)(u,{htmlFor:"",children:["Phone:",(0,x.jsx)(p,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:b,onChange:j})]}),(0,x.jsx)(m.Z,{variant:"secondary",type:"submit",children:"Add contact"})]})},f=t(4808),b=t(6916),g=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},C=function(n){return n.filter.toLowerCase()},w=(0,b.P1)([g,C],(function(n,e){return console.log("selectFilteredContacts"),n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),Z=d.Z.label({marginBottom:"12px"}),y=d.Z.input({width:"100%",height:"24px",marginTop:"4px",marginBottom:"12px",borderRadius:"4px",border:"1px solid rgba(33, 33, 33, 0.2);"}),k=function(){var n=(0,s.v9)(C),e=(0,s.I0)();return(0,x.jsxs)(Z,{htmlFor:"",children:["Find contacts by Name:",(0,x.jsx)(y,{type:"text",value:n,onChange:function(n){var t=n.currentTarget;e((0,f.T)(t.value))}})]})},B=d.Z.li({display:"flex",justifyContent:"space-between",marginBottom:"4px"}),F=(d.Z.button({minWidth:"60px",padding:"4px",backgroundColor:"#9d9d9d",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer","&:hover":{backgroundColor:"#15172b"}}),function(n){var e=n.contact,t=e.name,r=e.number,o=e.id,a=(0,s.I0)();return(0,x.jsxs)(B,{className:"d-flex align-items-center",children:[t,": ",r," ",(0,x.jsx)(m.Z,{variant:"secondary",onClick:function(){return a((0,c.GK)(o))},children:"Delete"})]})}),L=function(){var n=(0,s.v9)(g),e=(0,s.v9)(v),t=(0,s.v9)(j),r=(0,s.v9)(C),o=(0,s.v9)(w),a=(0,s.I0)();return(0,i.useEffect)((function(){a((0,c.yF)())}),[a]),(0,x.jsxs)(x.Fragment,{children:[e&&(0,x.jsx)("p",{children:"Loading contacts..."}),t&&(0,x.jsx)("p",{children:t}),0===n.length&&!1===e&&null===t?(0,x.jsx)("p",{children:"Phonebook is empty"}):0===o.length&&!1===e&&null===t?(0,x.jsxs)("p",{children:["Contact with name '",r,"' not found"]}):!1===e&&null===t&&(0,x.jsx)("ul",{children:o.map((function(n){return(0,x.jsx)(F,{contact:n},n.id)}))})]})},N=t(4164),S=t(168),A=d.Z.div(r||(r=(0,S.Z)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  background: rgba(0, 0, 0, 0.2);\n\n  opacity: 1;\n  visibility: visible;\n  overflow-y: scroll;\n"]))),R=d.Z.div(o||(o=(0,S.Z)(["\n  position: absolute;\n  left: 50.5%;\n  top: 20%;\n\n  width: 350px;\n  padding: 24px;\n\n  transform: translate(-50.5%, -20%);\n\n  border-radius: 20px;\n\n  \n\n  background-color: #fff;\n"]))),T=document.querySelector("#modal-root"),P=function(n){var e=n.onClose,t=n.children;(0,i.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&e()};return(0,N.createPortal)((0,x.jsx)(A,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,x.jsx)(R,{className:"w-25",children:t})}),T)},E=d.Z.div({marginLeft:"auto",marginRight:"auto",marginTop:"24px",padding:"24px",boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16)",backgroundColor:"#eee",borderRadius:"20px",color:"#15172b",display:"grid",gridTemplateColumns:"1fr",gridGap:"8px"}),z=(d.Z.h1({marginBottom:"24px"}),d.Z.h2({marginBottom:"16px"}),function(){var n=(0,i.useState)(!1),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=function(){r(!t)};return(0,x.jsxs)(E,{className:"w-50",children:[(0,x.jsx)("h1",{className:"mb-4",children:"Phonebook"}),(0,x.jsx)(m.Z,{variant:"secondary",type:"button",onClick:o,children:"Add contact"}),t&&(0,x.jsx)(P,{onClose:o,children:(0,x.jsx)(h,{onSubmit:o})}),(0,x.jsx)("h2",{className:"mb-3",children:"Contacts"}),(0,x.jsx)(k,{}),(0,x.jsx)(L,{})]})}),I=function(){return(0,x.jsx)(z,{})}}}]);
//# sourceMappingURL=987.5e2a2a2a.chunk.js.map