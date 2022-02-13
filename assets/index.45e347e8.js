import{j as c,I as o,_ as a,R as f,a as h}from"./vendor.2b19b9a1.js";const m=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function u(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=u(r);fetch(r.href,t)}};m();const e=c.exports.jsx,n=c.exports.jsxs,d=c.exports.Fragment;function p(){return n("nav",{className:"nvabar",children:[e("a",{href:"/",className:"logo",children:e("img",{src:"/images/128x128.png",alt:"Pretty Clean"})}),e("div",{children:n("a",{href:"#downloads",className:"downloads",children:[e(o,{icon:a,width:"24",height:"24"}),e("span",{className:"download-text",children:"Downloads"})]})})]})}function g(){return e(d,{children:n("section",{id:"downloads",children:[e("div",{className:"background",children:n("svg",{height:"100%",viewBox:"0 0 1200 800",width:"100%",children:[e("circle",{cx:"100",cy:"120",fill:"#42b0ff","fill-opacity":"0.05",r:"500"}),e("circle",{cx:"900",cy:"620",fill:"#ff4294","fill-opacity":"0.05",r:"140"}),e("circle",{cx:"360",cy:"840",fill:"#ff9142","fill-opacity":"0.05",r:"360"}),e("circle",{cx:"1000",cy:"180",fill:"#42ff91","fill-opacity":"0.05",r:"180"})]})}),n("div",{className:"title",children:[e("h1",{children:"Pretty Clean"}),n("div",{className:"slogan",children:[e("span",{className:"easy-to-use",children:"\u597D\u7528\u7684"})," macOS \u78C1\u76D8\u6E05\u7406\u5DE5\u5177"]}),n("a",{href:"https://github.com/pretty-clean/pretty-clean.github.io/releases/download/v0.1.0/PrettyClean_0.1.0_x64.dmg",className:"download",children:[e(o,{icon:a,width:"24",height:"24"}),e("span",{className:"using",children:"\u7ACB\u5373\u4F7F\u7528"}),e("small",{className:"v",children:"v0.1.0"})]}),e("small",{className:"tips",children:"\u9700\u8981 macOS 10.7.5 \u4EE5\u4E0A"})]})]})})}function y(){return n(d,{children:[e(p,{}),e(g,{})]})}f.render(e(h.StrictMode,{children:e(y,{})}),document.getElementById("root"));
