if("__TAURI__"in window){var __TAURI_WEBSOCKET__=function(){"use strict";var e=Object.defineProperty,t=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},n=(e,n,r)=>(t(e,n,"read from private field"),r?r.call(e):n.get(e));function r(e,t=!1){return window.__TAURI_INTERNALS__.transformCallback(e,t)}((t,n)=>{for(var r in n)e(t,r,{get:n[r],enumerable:!0})})({},{Channel:()=>s,PluginListener:()=>a,addPluginListener:()=>o,convertFileSrc:()=>_,invoke:()=>c,transformCallback:()=>r});var i,s=class{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,((e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)})(this,i,(()=>{})),this.id=r((e=>{n(this,i).call(this,e)}))}set onmessage(e){var n,r,s,a;s=e,t(n=this,r=i,"write to private field"),a?a.call(n,s):r.set(n,s)}get onmessage(){return n(this,i)}toJSON(){return`__CHANNEL__:${this.id}`}};i=new WeakMap;var a=class{constructor(e,t,n){this.plugin=e,this.event=t,this.channelId=n}async unregister(){return c(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}};async function o(e,t,n){let r=new s;return r.onmessage=n,c(`plugin:${e}|register_listener`,{event:t,handler:r}).then((()=>new a(e,t,r.id)))}async function c(e,t={},n){return window.__TAURI_INTERNALS__.invoke(e,t,n)}function _(e,t="asset"){return window.__TAURI_INTERNALS__.convertFileSrc(e,t)}class l{constructor(e,t){this.id=e,this.listeners=t}static async connect(e,t){const n=[],r=new s;return r.onmessage=e=>{n.forEach((t=>t(e)))},await c("plugin:websocket|connect",{url:e,onMessage:r,config:t}).then((e=>new l(e,n)))}addListener(e){this.listeners.push(e)}async send(e){let t;if("string"==typeof e)t={type:"Text",data:e};else if("object"==typeof e&&"type"in e)t=e;else{if(!Array.isArray(e))throw new Error("invalid `message` type, expected a `{ type: string, data: any }` object, a string or a numeric array");t={type:"Binary",data:e}}return await c("plugin:websocket|send",{id:this.id,message:t})}async disconnect(){return await this.send({type:"Close",data:{code:1e3,reason:"Disconnected by client"}})}}return l}();Object.defineProperty(window.__TAURI__,"websocket",{value:__TAURI_WEBSOCKET__})}