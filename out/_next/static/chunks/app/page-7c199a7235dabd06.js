(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8227:function(e,t,n){Promise.resolve().then(n.bind(n,7658))},7658:function(e,t,n){"use strict";n.r(t),n.d(t,{db:function(){return j},default:function(){return y}});var r=n(7437),l=n(2265);function a(){let[e,t]=(0,l.useState)(new Date);return(0,l.useEffect)(()=>{let e=setInterval(()=>t(new Date),1e3);return()=>clearInterval(e)}),(0,r.jsx)("nav",{suppressHydrationWarning:!0,children:e.toLocaleTimeString()})}var s=n(8355),c=n.n(s);function i(){let[e,t]=l.useState([]);return l.useEffect(()=>{let e=setInterval(()=>{!function(e){function t(e){let t=document.querySelectorAll(".full tr td:nth-child(".concat(e,"):not(.greyed-out)"));if(0===t.length)return null;let n=t[0],r=n.parentElement.previousElementSibling.querySelector("td:nth-child(".concat(Array.from(n.parentElement.cells).indexOf(n)+1,")")),l=n.parentElement.nextElementSibling.querySelector("td:nth-child(".concat(Array.from(n.parentElement.cells).indexOf(n)+1,")"));return[r.textContent,n.textContent,l.textContent]}let n=Array.from(document.querySelectorAll(".full th")).map(e=>e.textContent),r=[n[0],...t(1)||["N/A","N/A","N/A"]],l=[n[1],...t(2)||["N/A","N/A","N/A"]],a=[n[2],...t(3)||["N/A","N/A","N/A"]];console.log(r),e([r,l,a])}(t)},1e3);return()=>clearInterval(e)},[]),(0,r.jsx)(r.Fragment,{children:e&&e.map((e,t)=>(0,r.jsx)("div",{children:e.map((e,t)=>(0,r.jsxs)("p",{children:[e,(0,r.jsx)("br",{})]},t))},t))})}function o(){let[e,t]=(0,l.useState)([]),[n,a]=(0,l.useState)({A:0,B:0,C:0,D:0,E:0});(0,l.useEffect)(()=>{let e=async()=>{try{let n=await fetch("/NEWschedule.csv"),r=await n.text();var e=c().parse(r,{header:!0}).data;let l={0:[0,1,2,3],1:[1,4],2:[1,4],3:[1,4],4:[1,4],5:[1,4],6:[0,3]}[new Date().getDay()],a=e.map(e=>{let t={};return Object.keys(e).forEach((n,r)=>{l.includes(r)||(t[n]=e[n])}),t});t(a),s(a)}catch(e){console.error("Error fetching CSV file:",e)}};e();let n=setInterval(e,3e4);return()=>{clearInterval(n)}},[]);let s=e=>{let t=Array.from({length:5},(t,n)=>e.reduce((e,t)=>(i(t[Object.keys(t)[n]])&&e++,e),0)),n=t.map(e=>Math.max(...t)-e);a({A:n[0],B:n[1],C:n[2],D:n[3],E:n[4]})},i=e=>{if(!e||"object"==typeof e)return!1;let[t,n]=String(e).split(":").map(Number),r=new Date,l=r.getHours(),a=r.getMinutes();return l>t||l===t&&a>=n};return(0,r.jsxs)("div",{className:"full",children:[(0,r.jsx)("style",{children:"\n        .full tr td:nth-child(1){transform:translateY(calc(25px*".concat(n.A,"))}\n        .full tr td:nth-child(2){transform:translateY(calc(25px*").concat(n.B,"))}\n        .full tr td:nth-child(3){transform:translateY(calc(25px*").concat(n.C,"))}\n        .full tr td:nth-child(4){transform:translateY(calc(25px*").concat(n.D,"))}\n        .full tr td:nth-child(5){transform:translateY(calc(25px*").concat(n.E,"))}\n      ")}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:e.length>0&&Object.keys(e[0]).map((e,t)=>(0,r.jsx)("th",{children:e},t))})}),(0,r.jsx)("tbody",{children:e.map((e,t)=>(0,r.jsx)("tr",{children:Object.entries(e).map(e=>{let[t,n]=e,l=n&&n.classList&&n.classList.contains("greyed-out");return(0,r.jsx)("td",{className:l?"greyed-out":i(n)?"greyed-out":"",children:n},t)})},t))})]})]})}var u=n(4635),d=n(1279),h=n(5317);let m=new u.ZP("myDatabase");function f(){return(0,d.yR)(()=>m.swipe.toArray()),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>void u.ZP.delete("myDatabase"),children:"Clear Cache"}),(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"s1",children:"Dark Mode"}),(0,r.jsx)(h.fC,{className:"SR",id:"s1",children:(0,r.jsx)(h.bU,{className:"ST"})}),(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"s2",children:"Show other Weekdays"}),(0,r.jsx)(h.fC,{className:"SR",id:"s2",children:(0,r.jsx)(h.bU,{className:"ST"})})]})}m.version(1).stores({swipe:"key"});var x=n(3267);n(3034),n(7322);var p=n(7805);let j=new u.ZP("myDatabase");function y(){let[e,t]=(0,l.useState)(null);async function n(e){try{await j.swipe.put({key:"1",value:e})}catch(e){console.log(e)}}return(0,l.useEffect)(()=>{(async function(e){let t=(await j.swipe.toArray())[0].value;console.log(t),t>0&&e.slideTo(t,0)})(e)},[e]),(0,r.jsxs)("main",{children:[(0,r.jsx)(a,{}),(0,r.jsxs)(x.tq,{pagination:{clickable:!0,renderBullet:function(e,t){return'<button class="'+t+'">'+document.querySelectorAll(".swiper-slide")[e].getAttribute("data-name")+"</button>"}},modules:[p.tl],className:"mySwiper",loop:!0,keyboard:{enabled:!0},onSwiper:e=>{e&&e.on("slideChange",()=>n(e.activeIndex)),e&&e.on("init",()=>getPage(e))},hashNavigation:{watchState:!0},children:[(0,r.jsx)(x.o5,{"data-name":"Home",className:"Home",children:(0,r.jsx)(i,{})}),(0,r.jsx)(x.o5,{"data-name":"Full",children:(0,r.jsx)(o,{})}),(0,r.jsx)(x.o5,{"data-name":"Setting",className:"Setting",children:(0,r.jsx)(f,{})})]})]})}j.version(1).stores({swipe:"++id, loc"})}},function(e){e.O(0,[476,874,971,403,744],function(){return e(e.s=8227)}),_N_E=e.O()}]);