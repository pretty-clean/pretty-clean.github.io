import{j as a,I as d,_ as o,R as F,a as g}from"./vendor.2b19b9a1.js";const p=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function m(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=m(l);fetch(l.href,i)}};p();const e=a.exports.jsx,u=a.exports.jsxs,h=a.exports.Fragment;function f(){return u("nav",{className:"nvabar",children:[e("a",{href:"/",className:"logo",children:e("img",{src:"/images/128x128.png",alt:"Pretty Clean"})}),e("div",{children:u("a",{href:"#downloads",className:"downloads",children:[e(d,{icon:o,width:"24",height:"24"}),e("span",{className:"download-text",children:"Downloads"})]})})]})}const E="0.1.9",N="Release 0.1.9",v="2022-02-26T14:07:55+08:00",C={darwin:{signature:"dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTa2hIK1ZnZS84OFE2UXlQRGMya3ZvRE5wRG4vQ2RLdkd5S3lYdWorRjRjRlhHNXplNG95TG5GM1dxNlNoZ3RFMlpFT2pFeDFoTGUxTlp5dTArenhjVWVDM1M1NkZoK2dvPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNjQ1ODU1MjU1CWZpbGU6L1VzZXJzL2FpeWFuYm8vV29ya3NwYWNlL1Byb2plY3RzL3ByZXR0eS1jbGVhbi9zcmMtdGF1cmkvdGFyZ2V0L3g4Nl82NC1hcHBsZS1kYXJ3aW4vcmVsZWFzZS9idW5kbGUvbWFjb3MvUHJldHR5Q2xlYW4uYXBwLnRhci5negpaTHFpQUY1S0VxR3BpZFcvd1UyM01FU0dLWHIvSjIzL2t4a0FtQVg1RTZXaDNseW50b1Z2dzNFVlI2bEE0WjJoQWZtRmFjbllLN3Jja2NVWk1BajFEZz09Cg==",url:"https://github.com/pretty-clean/pretty-clean.github.io/releases/download/v0.1.9/PrettyClean.app.tar.gz"}};var t={name:E,notes:N,pub_date:v,platforms:C};function y(){const c=`https://github.com/pretty-clean/pretty-clean.github.io/releases/download/v${t.name}/PrettyClean_${t.name}_x64.dmg`;return u(h,{children:[u("section",{id:"downloads",children:[e("div",{className:"background",children:u("svg",{height:"100%",viewBox:"0 0 1200 800",width:"100%",children:[e("circle",{cx:"100",cy:"120",fill:"#42b0ff","fill-opacity":"0.05",r:"500"}),e("circle",{cx:"900",cy:"620",fill:"#ff4294","fill-opacity":"0.05",r:"140"}),e("circle",{cx:"360",cy:"840",fill:"#ff9142","fill-opacity":"0.05",r:"360"}),e("circle",{cx:"1000",cy:"180",fill:"#42ff91","fill-opacity":"0.05",r:"180"})]})}),u("div",{className:"title",children:[e("h1",{children:"Pretty Clean"}),u("div",{className:"slogan",children:[e("span",{className:"easy-to-use",children:"\u597D\u7528\u7684"})," macOS \u78C1\u76D8\u6E05\u7406\u5DE5\u5177"]}),u("a",{href:c,className:"download",children:[e(d,{icon:o,width:"24",height:"24"}),e("span",{className:"using",children:"\u7ACB\u5373\u4F7F\u7528"}),u("small",{className:"v",children:["v",t.name]})]}),e("small",{className:"tips",children:"\u9700\u8981 macOS 10.7.5 \u4EE5\u4E0A"})]})]}),e("section",{id:"highlight",children:u("div",{className:"highlight-main",children:[u("div",{className:"highlight-item",children:[u("div",{className:"left",children:[e("div",{className:"name",children:"\u591A\u79CD\u626B\u63CF"}),e("div",{className:"desc",children:"Pretty Clean \u62E5\u6709\u591A\u79CD\u626B\u63CF\u7B56\u7565\uFF0C\u9488\u5BF9\u7528\u6237\u3001\u7CFB\u7EDF\u3001\u5E94\u7528\u7B49\u4EA7\u751F\u7684\u7F13\u5B58\u4E0E\u4E0B\u8F7D\u6587\u4EF6\u5939\u4E2D\u7684\u5B89\u88C5\u5305\uFF0C\u5C3D\u53EF\u80FD\u5730\u5E2E\u60A8\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4\u3002"})]}),e("div",{className:"right",children:e("img",{src:"/images/screenshots-1.png"})})]}),u("div",{className:"highlight-item highlight-reverse",children:[e("div",{className:"left",children:e("img",{src:"/images/screenshots-2.png"})}),u("div",{className:"right",children:[e("div",{className:"name",children:"\u9690\u79C1\u5B89\u5168"}),e("div",{className:"desc",children:"Pretty Clean \u516C\u5F00\u6240\u6709\u7684\u626B\u63CF\u8FC7\u7A0B\uFF0C\u60A8\u53EF\u4EE5\u6E05\u6670\u5730\u89C2\u5BDF\u5230\u6240\u6709\u88AB\u626B\u63CF\u7684\u6587\u4EF6\uFF0C\u5E76\u627F\u8BFA\u4E0D\u4F1A\u4E0A\u4F20\u4EFB\u4F55\u626B\u63CF\u4FE1\u606F\uFF0C\u6211\u4EEC\u7EDD\u5BF9\u4FDD\u8BC1\u60A8\u7684\u9690\u79C1\u5B89\u5168\u3002"})]})]}),u("div",{className:"highlight-item",children:[u("div",{className:"left",children:[e("div",{className:"name",children:"\u5F00\u53D1\u8005\u6A21\u5F0F"}),e("div",{className:"desc",children:"Pretty Clean \u652F\u6301\u626B\u63CF\u4E0E\u6E05\u7406\u4E3B\u6D41\u5F00\u53D1\u5DE5\u5177\u7559\u4E0B\u6765\u7684\u7F16\u8BD1\u7F13\u5B58\uFF0C\u76EE\u524D\u8FD9\u662F\u5E02\u573A\u4E0A\u552F\u4E00\u652F\u6301\u5F00\u53D1\u8005\u9009\u9879\u7684\u78C1\u76D8\u6E05\u7406\u5DE5\u5177\u3002"})]}),e("div",{className:"right",children:e("img",{src:"/images/screenshots-3.png"})})]})]})})]})}function B(){return u(h,{children:[e(f,{}),e(y,{})]})}F.render(e(g.StrictMode,{children:e(B,{})}),document.getElementById("root"));
