import{j as o,I as m,_ as g,R as y,a as v}from"./vendor.2b19b9a1.js";const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const u of t)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const u={};return t.integrity&&(u.integrity=t.integrity),t.referrerpolicy&&(u.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?u.credentials="include":t.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(t){if(t.ep)return;t.ep=!0;const u=c(t);fetch(t.href,u)}};E();const e=o.exports.jsx,n=o.exports.jsxs,p=o.exports.Fragment;function C(){return n("nav",{className:"nvabar",children:[e("a",{href:"/",className:"logo",children:e("img",{src:"/images/128x128.png",alt:"Pretty Clean"})}),e("div",{children:n("a",{href:"#downloads",className:"downloads",children:[e(m,{icon:g,width:"24",height:"24"}),e("span",{className:"download-text",children:"Downloads"})]})})]})}const N="0.1.12",b="Release 0.1.12",B="2022-03-03T19:12:06+08:00",D={darwin:{signature:"dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTa2hIK1ZnZS84OFZUSDJzelFIc2RXeHptVi9VVENIZlYrcERoelpZR3pJR1gwZEZoYkZaT0Vra0gvZE5lbG9rRTlvbzlLdlUrNHlzRWFtZEIra05Ldno3elV4MEFwZ3dVPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNjQ2MzA1OTI2CWZpbGU6L1VzZXJzL2FpeWFuYm8vV29ya3NwYWNlL1Byb2plY3RzL3ByZXR0eS1jbGVhbi9zcmMtdGF1cmkvdGFyZ2V0L3g4Nl82NC1hcHBsZS1kYXJ3aW4vcmVsZWFzZS9idW5kbGUvbWFjb3MvUHJldHR5Q2xlYW4uYXBwLnRhci5negpubmdUUGNSSFhNamJDYjVwZkJMcDFEYnJ3K2M1U2ZNS1AwMUNyQS9rak1SQnZKbyt6UzVKOVJnTkd6ckhrbCtXV1RMSHYyWEVlQXJvZFlSRXBucVNBQT09Cg==",url:"https://github.com/pretty-clean/pretty-clean.github.io/releases/download/v0.1.12/PrettyClean.app.tar.gz"}};var d={name:N,notes:b,pub_date:B,platforms:D};const w="Pretty Clean | Modern macOS Disk Cleanup Tools",S="Required macOS 10.7.5 +";var r={title:w,"easy-to-use":"Modern","easy-to-use-desc":"macOS Disk Cleanup Tools","start-to-use":"Start to use",desc:S,"section-1":"Multiple Scanning","section-1-desc":"Pretty Clean has various scanning strategies for cache and installation packages in the download folder generated by users, systems, applications, etc. to help you free up disk space as much as possible.","section-1-img":"/images/screenshots-1-en.png","section-2":"Privacy & Security","section-2-desc":"Pretty Clean makes all the scanning process public, you can clearly observe all the scanned files and promise not to upload any scanned information, we absolutely guarantee your privacy and security.","section-3":"Developer Mode","section-3-desc":"Pretty Clean supports scanning and cleaning the compilation cache left behind by major development tools, and is currently the only disk cleanup tool on the market that supports developer options.","section-3-img":"/images/screenshots-3-en.png"},Z={"section-1-img":"/images/screenshots-1.png","section-3-img":"/images/screenshots-3.png"};const A=f(),h=new Map;h.set("en",r);h.set("zh",Z);function F(a){let s=h.get(A);return s||(s=r),s[a]||a}function V(){var c,l;let a=f(),s=(l=(c=document.querySelector("html"))==null?void 0:c.attributes.getNamedItem("lang"))==null?void 0:l.value;if(!(!s||a===s))for(let t in r){let u=document.querySelector(`[data-i18n=${t}]`);if(u){let i=r[t];i&&(u.innerHTML=i)}}}function f(){var s;const a=(s=window.navigator.language)==null?void 0:s.toLowerCase();return a?a.indexOf("-")>0?a.split("-")[0]:a:"en"}function x(){const a=`https://github.com/pretty-clean/pretty-clean.github.io/releases/download/v${d.name}/PrettyClean_${d.name}_x64.dmg`;return n(p,{children:[n("section",{id:"downloads",children:[e("div",{className:"background",children:n("svg",{height:"100%",viewBox:"0 0 1200 800",width:"100%",children:[e("circle",{cx:"100",cy:"120",fill:"#42b0ff","fill-opacity":"0.05",r:"500"}),e("circle",{cx:"900",cy:"620",fill:"#ff4294","fill-opacity":"0.05",r:"140"}),e("circle",{cx:"360",cy:"840",fill:"#ff9142","fill-opacity":"0.05",r:"360"}),e("circle",{cx:"1000",cy:"180",fill:"#42ff91","fill-opacity":"0.05",r:"180"})]})}),n("div",{className:"title",children:[e("h1",{children:"Pretty Clean"}),n("div",{className:"slogan",children:[e("span",{className:"easy-to-use","data-i18n":"easy-to-use",children:"\u597D\u7528\u7684"}),"\xA0",e("span",{"data-i18n":"easy-to-use-desc",children:"macOS \u78C1\u76D8\u6E05\u7406\u5DE5\u5177"})]}),n("a",{href:a,className:"download",children:[e(m,{icon:g,width:"24",height:"24"}),e("span",{className:"using","data-i18n":"start-to-use",children:"\u7ACB\u5373\u4F7F\u7528"}),n("small",{className:"v",children:["v",d.name]})]}),e("small",{className:"tips","data-i18n":"desc",children:"\u9700\u8981 macOS 10.7.5 \u4EE5\u4E0A"})]})]}),e("section",{id:"highlight",children:n("div",{className:"highlight-main",children:[n("div",{className:"highlight-item",children:[n("div",{className:"left",children:[e("div",{className:"name","data-i18n":"section-1",children:"\u591A\u79CD\u626B\u63CF"}),e("div",{className:"desc","data-i18n":"section-1-desc",children:"Pretty Clean \u62E5\u6709\u591A\u79CD\u626B\u63CF\u7B56\u7565\uFF0C\u9488\u5BF9\u7528\u6237\u3001\u7CFB\u7EDF\u3001\u5E94\u7528\u7B49\u4EA7\u751F\u7684\u7F13\u5B58\u4E0E\u4E0B\u8F7D\u6587\u4EF6\u5939\u4E2D\u7684\u5B89\u88C5\u5305\uFF0C\u5C3D\u53EF\u80FD\u5730\u5E2E\u60A8\u91CA\u653E\u78C1\u76D8\u7A7A\u95F4\u3002"})]}),e("div",{className:"right",children:e("img",{src:F("section-1-img")})})]}),n("div",{className:"highlight-item highlight-reverse",children:[e("div",{className:"left",children:e("img",{src:"/images/screenshots-2.png"})}),n("div",{className:"right",children:[e("div",{className:"name","data-i18n":"section-2",children:"\u9690\u79C1\u5B89\u5168"}),e("div",{className:"desc","data-i18n":"section-2-desc",children:"Pretty Clean \u516C\u5F00\u6240\u6709\u7684\u626B\u63CF\u8FC7\u7A0B\uFF0C\u60A8\u53EF\u4EE5\u6E05\u6670\u5730\u89C2\u5BDF\u5230\u6240\u6709\u88AB\u626B\u63CF\u7684\u6587\u4EF6\uFF0C\u5E76\u627F\u8BFA\u4E0D\u4F1A\u4E0A\u4F20\u4EFB\u4F55\u626B\u63CF\u4FE1\u606F\uFF0C\u6211\u4EEC\u7EDD\u5BF9\u4FDD\u8BC1\u60A8\u7684\u9690\u79C1\u5B89\u5168\u3002"})]})]}),n("div",{className:"highlight-item",children:[n("div",{className:"left",children:[e("div",{className:"name","data-i18n":"section-3",children:"\u5F00\u53D1\u8005\u6A21\u5F0F"}),e("div",{className:"desc","data-i18n":"section-3-desc",children:"Pretty Clean \u652F\u6301\u626B\u63CF\u4E0E\u6E05\u7406\u4E3B\u6D41\u5F00\u53D1\u5DE5\u5177\u7559\u4E0B\u6765\u7684\u7F16\u8BD1\u7F13\u5B58\uFF0C\u76EE\u524D\u8FD9\u662F\u5E02\u573A\u4E0A\u552F\u4E00\u652F\u6301\u5F00\u53D1\u8005\u9009\u9879\u7684\u78C1\u76D8\u6E05\u7406\u5DE5\u5177\u3002"})]}),e("div",{className:"right",children:e("img",{src:F("section-3-img")})})]})]})})]})}function k(){return n(p,{children:[e(C,{}),e(x,{})]})}y.render(e(v.StrictMode,{children:e(k,{})}),document.getElementById("root"));V();
