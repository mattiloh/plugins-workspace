if("__TAURI__"in window){var __TAURI_PLUGIN_HTTP__=function(e){"use strict";async function t(e,t={},r){return window.__TAURI_INTERNALS__.invoke(e,t,r)}return"function"==typeof SuppressedError&&SuppressedError,e.fetch=async function(e,r){const n=r?.maxRedirections,i=r?.maxRedirections;r&&(delete r.maxRedirections,delete r.connectTimeout);const a=r?.signal,s=new Request(e,r),o=await s.arrayBuffer(),d=o.byteLength?Array.from(new Uint8Array(o)):null,u=await t("plugin:http|fetch",{method:s.method,url:s.url,headers:Array.from(s.headers.entries()),data:d,maxRedirections:n,connectTimeout:i});a?.addEventListener("abort",(()=>{t("plugin:http|fetch_cancel",{rid:u})}));const{status:_,statusText:c,url:f,headers:h,rid:p}=await t("plugin:http|fetch_send",{rid:u}),l=await t("plugin:http|fetch_read_body",{rid:p}),w=new Response(new Uint8Array(l),{headers:h,status:_,statusText:c});return Object.defineProperty(w,"url",{value:f}),w},e}({});Object.defineProperty(window.__TAURI__,"http",{value:__TAURI_PLUGIN_HTTP__})}
