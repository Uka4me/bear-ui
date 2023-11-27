import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(i,_){return new URL(i,_).href},O={},o=function(_,s,c){if(!s||s.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":E,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const R={"./src/components/table/Table.stories.ts":async()=>o(()=>import("./Table.stories-wVTGkzn-.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./src/components/button/Button.stories.ts":async()=>o(()=>import("./Button.stories-vgUdvH86.js"),__vite__mapDeps([3,1]),import.meta.url)};async function w(i){return R[i]()}const{composeConfigs:P,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const i=await Promise.all([o(()=>import("./config-ciByrTHS.js"),__vite__mapDeps([4,1,5,6]),import.meta.url),o(()=>import("./preview-BnZLkpK3.js"),__vite__mapDeps([7,8]),import.meta.url),o(()=>import("./preview-4fdyFZsN.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-Fi7DQdoQ.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-Y7vvrhHd.js"),__vite__mapDeps([9,10]),import.meta.url),o(()=>import("./preview-gnTYGUb5.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-bJSO6fK3.js"),__vite__mapDeps([11,10]),import.meta.url),o(()=>import("./preview-z_l9a9HW.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-CIBnOfL2.js"),__vite__mapDeps([12,6]),import.meta.url),o(()=>import("./preview-ZMhIeGlo.js"),__vite__mapDeps([13,14]),import.meta.url)]);return P(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:S});export{o as _};
//# sourceMappingURL=iframe-RrQgDEOn.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Table.stories-wVTGkzn-.js","./vue.esm-bundler-b56p70N7.js","./Table-4ac27pp6.css","./Button.stories-vgUdvH86.js","./config-ciByrTHS.js","./index-fazppgj4.js","./_commonjsHelpers-5-cIlDoe.js","./preview-BnZLkpK3.js","./index-ogXoivrg.js","./preview-Y7vvrhHd.js","./index-PPLHz8o0.js","./preview-bJSO6fK3.js","./preview-CIBnOfL2.js","./preview-ZMhIeGlo.js","./preview-ugS2pLyE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}