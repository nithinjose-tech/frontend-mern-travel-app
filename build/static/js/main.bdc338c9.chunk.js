(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(55),r=n.n(s),l=n(11),o=n(21),i=n(16),u=n(3),j=n(14),b=n.n(j),d=n(23),O=n(17),h=n.n(O),p=n(120),m=n(122),f=n(58),x=(n(102),n(121)),g=(n(103),n(4));function v(e){var t=e.setShowLogin,n=e.setCurrentUsername,a=e.myStorage,s=Object(c.useState)(!1),r=Object(u.a)(s,2),l=r[0],o=r[1],j=Object(c.useRef)(),d=Object(c.useRef)(),O=function(){var e=Object(i.a)(b.a.mark((function e(c){var s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s={username:j.current.value,password:d.current.value},e.prev=2,e.next=5,h.a.post("/users/login",s);case 5:r=e.sent,n(r.data.username),a.setItem("user",r.data.username),t(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),o(!0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"loginContainer",children:[Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)(p.a,{className:"logoIcon"}),Object(g.jsx)("span",{children:"LamaPin"})]}),Object(g.jsxs)("form",{onSubmit:O,children:[Object(g.jsx)("input",{autoFocus:!0,placeholder:"username",ref:j}),Object(g.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:d}),Object(g.jsx)("button",{className:"loginBtn",type:"submit",children:"Login"}),l&&Object(g.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(g.jsx)(x.a,{className:"loginCancel",onClick:function(){return t(!1)}})]})}n(107);function w(e){var t=e.setShowRegister,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(!1),o=Object(u.a)(l,2),j=o[0],d=o[1],O=Object(c.useRef)(),m=Object(c.useRef)(),f=Object(c.useRef)(),v=function(){var e=Object(i.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:O.current.value,email:m.current.value,password:f.current.value},e.prev=2,e.next=5,h.a.post("/users/register",n);case 5:d(!1),r(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),d(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"registerContainer",children:[Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)(p.a,{className:"logoIcon"}),Object(g.jsx)("span",{children:"LamaPin"})]}),Object(g.jsxs)("form",{onSubmit:v,children:[Object(g.jsx)("input",{autoFocus:!0,placeholder:"username",ref:O}),Object(g.jsx)("input",{type:"email",placeholder:"email",ref:m}),Object(g.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:f}),Object(g.jsx)("button",{className:"registerBtn",type:"submit",children:"Register"}),s&&Object(g.jsx)("span",{className:"success",children:"Successfull. You can login now!"}),j&&Object(g.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(g.jsx)(x.a,{className:"registerCancel",onClick:function(){return t(!1)}})]})}var S=function(){var e=window.localStorage,t=Object(c.useState)(e.getItem("user")),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)({width:"100vw",height:"100vh",longitude:76.27108,latitude:10.850516,zoom:4}),j=Object(u.a)(r,2),O=j[0],x=j[1],S=Object(c.useState)([]),N=Object(u.a)(S,2),k=N[0],y=N[1],C=Object(c.useState)(null),R=Object(u.a)(C,2),I=R[0],B=R[1],L=Object(c.useState)(null),z=Object(u.a)(L,2),D=z[0],M=z[1],T=Object(c.useState)(null),A=Object(u.a)(T,2),F=A[0],P=A[1],_=Object(c.useState)(null),E=Object(u.a)(_,2),J=E[0],Q=E[1],U=Object(c.useState)(0),Y=Object(u.a)(U,2),G=Y[0],H=Y[1],q=Object(c.useState)(!1),K=Object(u.a)(q,2),V=K[0],W=K[1],Z=Object(c.useState)(!1),X=Object(u.a)(Z,2),$=X[0],ee=X[1];Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/pins");case 3:t=e.sent,y(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var te=function(){var e=Object(i.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,title:F,desc:J,rating:G,lat:D.lat,long:D.long},e.prev=2,e.next=5,h.a.post("/pins",n);case 5:c=e.sent,y([].concat(Object(l.a)(k),[c.data])),M(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(g.jsxs)(d.c,Object(o.a)(Object(o.a)({},O),{},{mapboxApiAccessToken:"pk.eyJ1Ijoibmluam9zIiwiYSI6ImNsMGZiOWMwaDByYTkza3BvMnh6dTF6eGQifQ.HMK45m0aBh37dDPH8_TU_Q",onMove:function(e){return x(e.viewState)},onViewStateChange:function(e){return x(e.viewState)},mapStyle:"mapbox://styles/safak/cknndpyfq268f17p53nmpwira",onDblClick:function(e){var t=Object(u.a)(e.lngLat,2),n=t[0],c=t[1];M({lat:c,long:n})},children:[k.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{longitude:e.long,latitude:e.lat,offsetLeft:-3.5*O.zoom,offsetTop:-7*O.zoom,children:Object(g.jsx)(p.a,{style:{fontSize:7*O.zoom,color:a===e.username?"tomato":"slateblue",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,c=e.long,B(t),void x(Object(o.a)(Object(o.a)({},O),{},{latitude:n,longitude:c}));var t,n,c}})}),e._id===I&&Object(g.jsx)(d.b,{longitude:e.long,latitude:e.lat,closeButton:!0,closeOnClick:!1,onClose:function(){return B(null)},anchor:"bottom",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("label",{children:"Place"}),Object(g.jsx)("h4",{className:"place",children:e.title}),Object(g.jsx)("label",{children:"Review"}),Object(g.jsx)("p",{className:"desc",children:e.desc}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(g.jsx)(m.a,{className:"star"}))}),Object(g.jsx)("label",{children:"Information"}),Object(g.jsxs)("span",{className:"username",children:["Created by ",Object(g.jsx)("b",{children:e.username})]}),Object(g.jsx)("span",{className:"date",children:Object(f.a)(e.createdAt)})]})})]})})),D&&Object(g.jsx)(d.b,{latitude:D.lat,longitude:D.long,closeButton:!0,closeOnClick:!1,onClose:function(){return M(null)},anchor:"left",children:Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:te,children:[Object(g.jsx)("label",{children:"Title"}),Object(g.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return P(e.target.value)}}),Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("textarea",{placeholder:"Say us something about this place.",onChange:function(e){return Q(e.target.value)}}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsxs)("select",{onChange:function(e){return H(e.target.value)},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]}),Object(g.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})}),a?Object(g.jsx)("button",{className:"button logout",onClick:function(){s(null),e.removeItem("user")},children:"Log out"}):Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{className:"button login",onClick:function(){return ee(!0)},children:"Log in"}),Object(g.jsx)("button",{className:"button register",onClick:function(){return W(!0)},children:"Register"})]}),V&&Object(g.jsx)(w,{setShowRegister:W}),$&&Object(g.jsx)(v,{setShowLogin:ee,setCurrentUsername:s,myStorage:e})]}))})};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.bdc338c9.chunk.js.map