import{j as e,i as x}from"./user.a01d3f51.js";import{P as i,u as c,L as f,t as u}from"./i18n.74572b81.js";import{r as m,R as h}from"./index.6460afdd.js";import{M as p,N as j}from"./NavBar.5c12b122.js";function l(){return l=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},l.apply(this,arguments)}function b(t,r){if(t==null)return{};var s=v(t,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function v(t,r){if(t==null)return{};var s={},n=Object.keys(t),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(s[o]=t[o]);return s}var d=m.forwardRef(function(t,r){var s=t.color,n=s===void 0?"currentColor":s,o=t.size,a=o===void 0?24:o,g=b(t,["color","size"]);return h.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},g),h.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))});d.propTypes={color:i.string,size:i.oneOfType([i.string,i.number])};d.displayName="GitHub";const w=d;function y(){const{t}=c();return e.jsx(e.Fragment,{children:e.jsxs("footer",{className:"footer footer-center p-10 bg-base-900 text-base-content",children:[e.jsxs("aside",{children:[e.jsx("svg",{width:"50",height:"50",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",className:"inline-block fill-current",children:e.jsx("path",{d:"M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"})}),e.jsxs("p",{className:"font-bold ",children:["Geacord ",e.jsx("br",{}),t("home.footer.text1")]}),e.jsx("p",{children:t("home.footer.text2")})]}),e.jsx("nav",{children:e.jsx("div",{className:"grid grid-flow-col gap-4",children:e.jsx("a",{href:"https://github.com/thegears/geacord",children:e.jsx(w,{})})})})]})})}function N(){const t=x(),{t:r}=c();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"bg-primary",children:e.jsxs("div",{id:"mid",className:"hero min-h-screen",style:{backgroundImage:`url(/${localStorage.getItem("theme")||"dark"}-bg.svg)`},children:[e.jsx("div",{className:"hero-overlay bg-opacity-30"}),e.jsx("div",{className:"hero-content text-center text-neutral-content",children:e.jsxs("div",{className:"max-w-md",children:[e.jsx("h1",{className:"mb-5 text-5xl font-bold",children:r("home.middle.text1")}),e.jsx("p",{className:"mb-5",children:r("home.middle.text2")}),t?e.jsx(e.Fragment,{children:e.jsxs("a",{role:"button",href:"/chat",className:"btn",children:[" ",e.jsx(p,{})," Chat"]})}):e.jsx(e.Fragment,{children:e.jsxs("a",{role:"button",href:"/login",className:"btn",children:[" ",e.jsx(f,{})," ",r("login-register.login")]})})]})})]})})})}function P(){const{i18n:t}=c();return m.useEffect(()=>{u.themeChange(!1),(localStorage.getItem("language")||"en")=="tr"&&t.changeLanguage("tr")},[]),e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(N,{}),e.jsx(y,{})]})}export{P as default};