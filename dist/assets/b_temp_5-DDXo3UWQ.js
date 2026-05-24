import{i as Th,r as te,j as u,g as Ih,C as Ce,L as bh,X as Ah}from"./index-Dug1HwUx.js";import{W as Rh}from"./wind-yB6CKydt.js";import{Z as Nh}from"./zap-CkDFYXcf.js";import{G as Sh}from"./globe-DJG9pc3z.js";import{P as Ph}from"./phone-DkKMV97H.js";import{C as Ch}from"./chevron-right-CVpdWLpW.js";import{C as kh}from"./compass-NxN7hgjn.js";import{H as Dh}from"./house-kzGtVvQL.js";import{I as Vh}from"./info-DdGewEJx.js";import{A as Oh}from"./arrow-right-BG0JEU96.js";import{C as jh}from"./coins-DYMRfofr.js";import{C as Mh}from"./calculator-CnOJtjUC.js";import{U as Lh}from"./users-Ci6KyLlU.js";import{C as Fh}from"./calendar-BOaZFtm5.js";import{S as Uh}from"./shield-check-CIJYAgmL.js";/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=Th("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);var Ea={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Bh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],d=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,m=o>>2,x=(o&3)<<4|c>>4;let A=(c&15)<<2|f>>6,R=f&63;d||(R=64,a||(A=64)),r.push(t[m],t[x],t[A],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ll(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const x=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||x==null)throw new qh;const A=o<<2|c>>4;if(r.push(A),f!==64){const R=c<<4&240|f>>2;if(r.push(R),x!==64){const k=f<<6&192|x;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $h=function(n){const e=Ll(n);return Fl.encodeByteArray(e,!0)},Yr=function(n){return $h(n).replace(/\./g,"")},Ul=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=()=>zh().__FIREBASE_DEFAULTS__,Wh=()=>{if(typeof process>"u"||typeof Ea>"u")return;const n=Ea.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ul(n[1]);return e&&JSON.parse(e)},ps=()=>{try{return Gh()||Wh()||Hh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bl=n=>{var e,t;return(t=(e=ps())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kh=n=>{const e=Bl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ql=()=>{var n;return(n=ps())===null||n===void 0?void 0:n.config},$l=n=>{var e;return(e=ps())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yr(JSON.stringify(t)),Yr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Xh(){var n;const e=(n=ps())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ed(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nd(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rd(){return!Xh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function id(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=od,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?ad(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ot(s,c,r)}}function ad(n,e){return n.replace(ld,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ld=/\{\$([^}]+)}/g;function cd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(wa(o)&&wa(a)){if(!Jr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function wa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ud(n,e){const t=new hd(n,e);return t.subscribe.bind(t)}class hd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");dd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Xs),s.error===void 0&&(s.error=Xs),s.complete===void 0&&(s.complete=Xs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return n&&n._delegate?n._delegate:n}class Mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Qh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(md(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pd(n){return n===Dt?void 0:n}function md(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const _d={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},yd=G.INFO,vd={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Ed=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=vd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Di{constructor(e){this.name=e,this._logLevel=yd,this._logHandler=Ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const wd=(n,e)=>e.some(t=>n instanceof t);let xa,Ta;function xd(){return xa||(xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Td(){return Ta||(Ta=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,ui=new WeakMap,Gl=new WeakMap,Zs=new WeakMap,Vi=new WeakMap;function Id(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&zl.set(t,n)}).catch(()=>{}),Vi.set(e,n),e}function bd(n){if(ui.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ui.set(n,e)}let hi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ui.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ad(n){hi=n(hi)}function Rd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ei(this),e,...t);return Gl.set(r,e.sort?e.sort():[e]),yt(r)}:Td().includes(n)?function(...e){return n.apply(ei(this),e),yt(zl.get(this))}:function(...e){return yt(n.apply(ei(this),e))}}function Nd(n){return typeof n=="function"?Rd(n):(n instanceof IDBTransaction&&bd(n),wd(n,xd())?new Proxy(n,hi):n)}function yt(n){if(n instanceof IDBRequest)return Id(n);if(Zs.has(n))return Zs.get(n);const e=Nd(n);return e!==n&&(Zs.set(n,e),Vi.set(e,n)),e}const ei=n=>Vi.get(n);function Sd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=yt(a);return r&&a.addEventListener("upgradeneeded",d=>{r(yt(a.result),d.oldVersion,d.newVersion,yt(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Pd=["get","getKey","getAll","getAllKeys","count"],Cd=["put","add","delete","clear"],ti=new Map;function Ia(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ti.get(e))return ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Cd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pd.includes(t)))return;const o=async function(a,...c){const d=this.transaction(a,s?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&d.done]))[0]};return ti.set(e,o),o}Ad(n=>({...n,get:(e,t,r)=>Ia(e,t)||n.get(e,t,r),has:(e,t)=>!!Ia(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Dd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",ba="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new Di("@firebase/app"),Vd="@firebase/app-compat",Od="@firebase/analytics-compat",jd="@firebase/analytics",Md="@firebase/app-check-compat",Ld="@firebase/app-check",Fd="@firebase/auth",Ud="@firebase/auth-compat",Bd="@firebase/database",qd="@firebase/data-connect",$d="@firebase/database-compat",zd="@firebase/functions",Gd="@firebase/functions-compat",Wd="@firebase/installations",Hd="@firebase/installations-compat",Kd="@firebase/messaging",Qd="@firebase/messaging-compat",Yd="@firebase/performance",Jd="@firebase/performance-compat",Xd="@firebase/remote-config",Zd="@firebase/remote-config-compat",ef="@firebase/storage",tf="@firebase/storage-compat",nf="@firebase/firestore",rf="@firebase/vertexai-preview",sf="@firebase/firestore-compat",of="firebase",af="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="[DEFAULT]",lf={[di]:"fire-core",[Vd]:"fire-core-compat",[jd]:"fire-analytics",[Od]:"fire-analytics-compat",[Ld]:"fire-app-check",[Md]:"fire-app-check-compat",[Fd]:"fire-auth",[Ud]:"fire-auth-compat",[Bd]:"fire-rtdb",[qd]:"fire-data-connect",[$d]:"fire-rtdb-compat",[zd]:"fire-fn",[Gd]:"fire-fn-compat",[Wd]:"fire-iid",[Hd]:"fire-iid-compat",[Kd]:"fire-fcm",[Qd]:"fire-fcm-compat",[Yd]:"fire-perf",[Jd]:"fire-perf-compat",[Xd]:"fire-rc",[Zd]:"fire-rc-compat",[ef]:"fire-gcs",[tf]:"fire-gcs-compat",[nf]:"fire-fst",[sf]:"fire-fst-compat",[rf]:"fire-vertex","fire-js":"fire-js",[of]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map,cf=new Map,pi=new Map;function Aa(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function on(n){const e=n.name;if(pi.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;pi.set(e,n);for(const t of Xr.values())Aa(t,n);for(const t of cf.values())Aa(t,n);return!0}function Oi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new nr("app","Firebase",uf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=af;function Wl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(t||(t=ql()),!t)throw vt.create("no-options");const o=Xr.get(s);if(o){if(Jr(t,o.options)&&Jr(r,o.config))return o;throw vt.create("duplicate-app",{appName:s})}const a=new gd(s);for(const d of pi.values())a.addComponent(d);const c=new hf(t,r,a);return Xr.set(s,c),c}function Hl(n=fi){const e=Xr.get(n);if(!e&&n===fi&&ql())return Wl();if(!e)throw vt.create("no-app",{appName:n});return e}function Et(n,e,t){var r;let s=(r=lf[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(c.join(" "));return}on(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="firebase-heartbeat-database",ff=1,Kn="firebase-heartbeat-store";let ni=null;function Kl(){return ni||(ni=Sd(df,ff,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),ni}async function pf(n){try{const t=(await Kl()).transaction(Kn),r=await t.objectStore(Kn).get(Ql(n));return await t.done,r}catch(e){if(e instanceof ot)et.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function Ra(n,e){try{const r=(await Kl()).transaction(Kn,"readwrite");await r.objectStore(Kn).put(e,Ql(n)),await r.done}catch(t){if(t instanceof ot)et.warn(t.message);else{const r=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(r.message)}}}function Ql(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=1024,gf=30*24*60*60*1e3;class _f{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Na();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=gf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Na(),{heartbeatsToSend:r,unsentEntries:s}=yf(this._heartbeatsCache.heartbeats),o=Yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return et.warn(t),""}}}function Na(){return new Date().toISOString().substring(0,10)}function yf(n,e=mf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Sa(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Sa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class vf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sa(n){return Yr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(n){on(new Mt("platform-logger",e=>new kd(e),"PRIVATE")),on(new Mt("heartbeat",e=>new _f(e),"PRIVATE")),Et(di,ba,n),Et(di,ba,"esm2017"),Et("fire-js","")}Ef("");var wf="firebase",xf="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(wf,xf,"app");function ji(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tf=Yl,Jl=new nr("auth","Firebase",Yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Di("@firebase/auth");function If(n,...e){Zr.logLevel<=G.WARN&&Zr.warn(`Auth (${pn}): ${n}`,...e)}function Br(n,...e){Zr.logLevel<=G.ERROR&&Zr.error(`Auth (${pn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw Mi(n,...e)}function Ue(n,...e){return Mi(n,...e)}function Xl(n,e,t){const r=Object.assign(Object.assign({},Tf()),{[e]:t});return new nr("auth","Firebase",r).create(e,{appName:n.name})}function Xe(n){return Xl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mi(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Jl.create(n,...e)}function F(n,e,...t){if(!n)throw Mi(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Br(e),new Error(e)}function nt(n,e){n||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bf(){return Pa()==="http:"||Pa()==="https:"}function Pa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bf()||ed()||"connection"in navigator)?navigator.onLine:!0}function Rf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Jh()||td()}get(){return Af()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new sr(3e4,6e4);function ir(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function mn(n,e,t,r,s={}){return ec(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=rr(Object.assign({key:n.config.apiKey},a)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:d},o);return Zh()||(f.referrerPolicy="no-referrer"),Zl.fetch()(tc(n,n.config.apiHost,t,c),f)})}async function ec(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nf),e);try{const s=new Pf(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Dr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[d,f]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dr(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Dr(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw Dr(n,"user-disabled",a);const m=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Xl(n,m,f);tt(n,m)}}catch(s){if(s instanceof ot)throw s;tt(n,"network-request-failed",{message:String(s)})}}async function Fi(n,e,t,r,s={}){const o=await mn(n,e,t,r,s);return"mfaPendingCredential"in o&&tt(n,"multi-factor-auth-required",{_serverResponse:o}),o}function tc(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Li(n.config,s):`${n.config.apiScheme}://${s}`}class Pf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Sf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ue(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(n,e){return mn(n,"POST","/v1/accounts:delete",e)}async function nc(n,e){return mn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kf(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=Ui(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:qn(ri(s.auth_time)),issuedAtTime:qn(ri(s.iat)),expirationTime:qn(ri(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ri(n){return Number(n)*1e3}function Ui(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ul(t);return s?JSON.parse(s):(Br("Failed to decode base64 JWT payload"),null)}catch(s){return Br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ca(n){const e=Ui(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&Df(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Df({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Qn(n,nc(t,{idToken:r}));F(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?rc(o.providerUserInfo):[],c=jf(n.providerData,a),d=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),m=d?f:!1,x={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new gi(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,x)}async function Of(n){const e=Se(n);await es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jf(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rc(n){return n.map(e=>{var{providerId:t}=e,r=ji(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(n,e){const t=await ec(n,{},async()=>{const r=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=tc(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Zl.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Lf(n,e){return mn(n,"POST","/v2/accounts:revokeToken",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ca(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Ca(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Mf(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new tn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(F(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kf(this,e)}reload(){return Of(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(Xe(this.auth));const e=await this.getIdToken();return await Qn(this,Cf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,a,c,d,f,m;const x=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(s=t.email)!==null&&s!==void 0?s:void 0,R=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,L=(f=t.createdAt)!==null&&f!==void 0?f:void 0,$=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:H,emailVerified:X,isAnonymous:Ae,providerData:ne,stsTokenManager:E}=t;F(H&&E,e,"internal-error");const g=tn.fromJSON(this.name,E);F(typeof H=="string",e,"internal-error"),dt(x,e.name),dt(A,e.name),F(typeof X=="boolean",e,"internal-error"),F(typeof Ae=="boolean",e,"internal-error"),dt(R,e.name),dt(k,e.name),dt(V,e.name),dt(C,e.name),dt(L,e.name),dt($,e.name);const y=new Ye({uid:H,auth:e,email:A,emailVerified:X,displayName:x,isAnonymous:Ae,photoURL:k,phoneNumber:R,tenantId:V,stsTokenManager:g,createdAt:L,lastLoginAt:$});return ne&&Array.isArray(ne)&&(y.providerData=ne.map(v=>Object.assign({},v))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new tn;s.updateFromServerResponse(t);const o=new Ye({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await es(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?rc(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new tn;c.updateFromIdToken(r);const d=new Ye({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new gi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map;function Je(n){nt(n instanceof Function,"Expected a class definition");let e=ka.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ka.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sc.type="NONE";const Da=sc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e,t){return`firebase:${n}:${e}:${t}`}class nn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=qr(this.userKey,s.apiKey,o),this.fullPersistenceKey=qr("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nn(Je(Da),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||Je(Da);const a=qr(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(a);if(m){const x=Ye._fromJSON(e,m);f!==o&&(c=x),o=f;break}}catch{}const d=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new nn(o,e,r):(o=d[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new nn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uc(e))return"Blackberry";if(hc(e))return"Webos";if(oc(e))return"Safari";if((e.includes("chrome/")||ac(e))&&!e.includes("edge/"))return"Chrome";if(cc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ic(n=be()){return/firefox\//i.test(n)}function oc(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ac(n=be()){return/crios\//i.test(n)}function lc(n=be()){return/iemobile/i.test(n)}function cc(n=be()){return/android/i.test(n)}function uc(n=be()){return/blackberry/i.test(n)}function hc(n=be()){return/webos/i.test(n)}function Bi(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ff(n=be()){var e;return Bi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uf(){return nd()&&document.documentMode===10}function dc(n=be()){return Bi(n)||cc(n)||hc(n)||uc(n)||/windows phone/i.test(n)||lc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n,e=[]){let t;switch(n){case"Browser":t=Va(be());break;case"Worker":t=`${Va(be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const d=e(o);a(d)}catch(d){c(d)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e={}){return mn(n,"GET","/v2/passwordPolicy",ir(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=6;class zf{constructor(e){var t,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:$f,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,a,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(s=d.containsLowercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oa(this),this.idTokenSubscription=new Oa(this),this.beforeStateQueue=new Bf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nc(this,{idToken:e}),r=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Fe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===c)&&(d!=null&&d.user)&&(s=d.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await es(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(Xe(this));const t=e?Se(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(Xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(Xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qf(this),t=new zf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,s);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&If(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function or(n){return Se(n)}class Oa{constructor(e){this.auth=e,this.observer=null,this.addObserver=ud(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wf(n){qi=n}function Hf(n){return qi.loadJS(n)}function Kf(){return qi.gapiScript}function Qf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e){const t=Oi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Jr(o,e??{}))return s;tt(s,"already-initialized")}return t.initialize({options:e})}function Jf(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xf(n,e,t){const r=or(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=pc(e),{host:a,port:c}=Zf(e),d=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),ep()}function pc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zf(n){const e=pc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:ja(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ja(a)}}}function ja(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ep(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(n,e){return Fi(n,"POST","/v1/accounts:signInWithIdp",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="http://localhost";class Lt extends mc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=ji(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Lt(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:tp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends gc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ar{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ar{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends ar{constructor(){super("twitter.com")}static credential(e,t){return Lt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(n,e){return Fi(n,"POST","/v1/accounts:signUp",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await Ye._fromIdTokenResponse(e,r,s),a=Ma(r);return new rt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ma(r);return new rt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ma(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(n){var e;if(Fe(n.app))return Promise.reject(Xe(n));const t=or(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new rt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await np(t,{returnSecureToken:!0}),s=await rt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends ot{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ts.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ts(e,t,r,s)}}function _c(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ts._fromErrorAndOperation(n,o,e,r):o})}async function sp(n,e,t=!1){const r=await Qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return rt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(n,e,t=!1){const{auth:r}=n;if(Fe(r.app))return Promise.reject(Xe(r));const s="reauthenticate";try{const o=await Qn(n,_c(r,s,e,n),t);F(o.idToken,r,"internal-error");const a=Ui(o.idToken);F(a,r,"internal-error");const{sub:c}=a;return F(n.uid===c,r,"user-mismatch"),rt._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(n,e,t=!1){if(Fe(n.app))return Promise.reject(Xe(n));const r="signIn",s=await _c(n,r,e),o=await rt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(n,e){return Fi(n,"POST","/v1/accounts:signInWithCustomToken",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(n,e){if(Fe(n.app))return Promise.reject(Xe(n));const t=or(n),r=await ap(t,{token:e,returnSecureToken:!0}),s=await rt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function cp(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function up(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function hp(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}const ns="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=1e3,fp=10;class vc extends yc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Uf()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fp):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vc.type="LOCAL";const pp=vc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends yc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ec.type="SESSION";const wc=Ec;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async f=>f(t.origin,o)),d=await mp(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,d)=>{const f=$i("",20);s.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(x){const A=x;if(A.data.eventId===f)switch(A.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(A.data.response);break;default:clearTimeout(m),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return window}function _p(n){Be().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function yp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ep(){return xc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="firebaseLocalStorageDb",wp=1,rs="firebaseLocalStorage",Ic="fbase_key";class lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gs(n,e){return n.transaction([rs],e?"readwrite":"readonly").objectStore(rs)}function xp(){const n=indexedDB.deleteDatabase(Tc);return new lr(n).toPromise()}function _i(){const n=indexedDB.open(Tc,wp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(rs,{keyPath:Ic})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(rs)?e(r):(r.close(),await xp(),e(await _i()))})})}async function La(n,e,t){const r=gs(n,!0).put({[Ic]:e,value:t});return new lr(r).toPromise()}async function Tp(n,e){const t=gs(n,!1).get(e),r=await new lr(t).toPromise();return r===void 0?null:r.value}function Fa(n,e){const t=gs(n,!0).delete(e);return new lr(t).toPromise()}const Ip=800,bp=3;class bc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _i(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(Ep()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yp(),!this.activeServiceWorker)return;this.sender=new gp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _i();return await La(e,ns,"1"),await Fa(e,ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>La(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=gs(s,!1).getAll();return new lr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bc.type="LOCAL";const Ap=bc;new sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e){return e?Je(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends mc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Np(n){return op(n.auth,new zi(n),n.bypassAuthState)}function Sp(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),ip(t,new zi(n),n.bypassAuthState)}async function Pp(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),sp(t,new zi(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Np;case"linkViaPopup":case"linkViaRedirect":return Pp;case"reauthViaPopup":case"reauthViaRedirect":return Sp;default:tt(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new sr(2e3,1e4);class en extends Ac{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=$i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cp.get())};e()}}en.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="pendingRedirect",$r=new Map;class Dp extends Ac{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$r.get(this.auth._key());if(!e){try{const r=await Vp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$r.set(this.auth._key(),e)}return this.bypassAuthState||$r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vp(n,e){const t=Mp(e),r=jp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Op(n,e){$r.set(n._key(),e)}function jp(n){return Je(n._redirectPersistence)}function Mp(n){return qr(kp,n.config.apiKey,n.name)}async function Lp(n,e,t=!1){if(Fe(n.app))return Promise.reject(Xe(n));const r=or(n),s=Rp(r,e),a=await new Dp(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=10*60*1e3;class Up{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Rc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ua(e))}saveEventToCache(e){this.cachedEventUids.add(Ua(e)),this.lastProcessedEventTime=Date.now()}}function Ua(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(n,e={}){return mn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zp=/^https?/;async function Gp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qp(n);for(const t of e)try{if(Wp(t))return}catch{}tt(n,"unauthorized-domain")}function Wp(n){const e=mi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!zp.test(t))return!1;if($p.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new sr(3e4,6e4);function Ba(){const n=Be().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kp(n){return new Promise((e,t)=>{var r,s,o;function a(){Ba(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ba(),t(Ue(n,"network-request-failed"))},timeout:Hp.get()})}if(!((s=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Be().gapi)===null||o===void 0)&&o.load)a();else{const c=Qf("iframefcb");return Be()[c]=()=>{gapi.load?a():t(Ue(n,"network-request-failed"))},Hf(`${Kf()}?onload=${c}`).catch(d=>t(d))}}).catch(e=>{throw zr=null,e})}let zr=null;function Qp(n){return zr=zr||Kp(n),zr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new sr(5e3,15e3),Jp="__/auth/iframe",Xp="emulator/auth/iframe",Zp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},em=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tm(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Li(e,Xp):`https://${n.config.authDomain}/${Jp}`,r={apiKey:e.apiKey,appName:n.name,v:pn},s=em.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${rr(r).slice(1)}`}async function nm(n){const e=await Qp(n),t=Be().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:tm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zp,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ue(n,"network-request-failed"),c=Be().setTimeout(()=>{o(a)},Yp.get());function d(){Be().clearTimeout(c),s(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sm=500,im=600,om="_blank",am="http://localhost";class qa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lm(n,e,t,r=sm,s=im){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},rm),{width:r.toString(),height:s.toString(),top:o,left:a}),f=be().toLowerCase();t&&(c=ac(f)?om:t),ic(f)&&(e=e||am,d.scrollbars="yes");const m=Object.entries(d).reduce((A,[R,k])=>`${A}${R}=${k},`,"");if(Ff(f)&&c!=="_self")return cm(e||"",c),new qa(null);const x=window.open(e||"",c,m);F(x,n,"popup-blocked");try{x.focus()}catch{}return new qa(x)}function cm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="__/auth/handler",hm="emulator/auth/handler",dm=encodeURIComponent("fac");async function $a(n,e,t,r,s,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:pn,eventId:s};if(e instanceof gc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",cd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,x]of Object.entries({}))a[m]=x}if(e instanceof ar){const m=e.getScopes().filter(x=>x!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const d=await n._getAppCheckToken(),f=d?`#${dm}=${encodeURIComponent(d)}`:"";return`${fm(n)}?${rr(c).slice(1)}${f}`}function fm({config:n}){return n.emulator?Li(n,hm):`https://${n.authDomain}/${um}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="webStorageSupport";class pm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wc,this._completeRedirectFn=Lp,this._overrideRedirectResult=Op}async _openPopup(e,t,r,s){var o;nt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await $a(e,t,r,mi(),s);return lm(e,a,$i())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await $a(e,t,r,mi(),s);return _p(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(nt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await nm(e),r=new Up(e);return t.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(si,{type:si},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[si];a!==void 0&&t(!!a),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dc()||oc()||Bi()}}const mm=pm;var za="@firebase/auth",Ga="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ym(n){on(new Mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fc(n)},f=new Gf(r,s,o,d);return Jf(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),on(new Mt("auth-internal",e=>{const t=or(e.getProvider("auth").getImmediate());return(r=>new gm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(za,Ga,_m(n)),Et(za,Ga,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=5*60,Em=$l("authIdTokenMaxAge")||vm;let Wa=null;const wm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Em)return;const s=t==null?void 0:t.token;Wa!==s&&(Wa=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xm(n=Hl()){const e=Oi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yf(n,{popupRedirectResolver:mm,persistence:[Ap,pp,wc]}),r=$l("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=wm(o.toString());up(t,a,()=>a(t.currentUser)),cp(t,c=>a(c))}}const s=Bl("auth");return s&&Xf(t,`http://${s}`),t}function Tm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Wf({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Ue("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Tm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ym("Browser");var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ot,Nc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(v,w,I){for(var _=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)_[Ve-2]=arguments[Ve];return g.prototype[w].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)v[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;16>w;++w)v[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],w=E.g[2];var I=E.g[3],_=g+(I^y&(w^I))+v[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+v[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+v[2]+606105819&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+v[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+v[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+v[6]+2821735955&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+v[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+v[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+v[10]+4294925233&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+v[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+v[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+v[14]+2792965006&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+v[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(w^I&(y^w))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+v[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+v[11]+643717713&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+v[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+v[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+v[15]+3634488961&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+v[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+v[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+v[3]+4107603335&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+v[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+v[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+v[7]+1735328473&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+v[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(y^w^I)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+v[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+v[11]+1839030562&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+v[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+v[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+v[7]+4139469664&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+v[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+v[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+v[3]+3572445317&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+v[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+v[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+v[15]+530742520&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+v[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(w^(y|~I))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+v[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+v[14]+2878612391&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+v[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+v[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+v[10]+4293915773&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+v[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+v[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+v[6]+2734768916&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+v[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+v[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+v[2]+718787259&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,v=this.B,w=this.h,I=0;I<g;){if(w==0)for(;I<=y;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<g;)if(v[w++]=E.charCodeAt(I++),w==this.blockSize){s(this,v),w=0;break}}else for(;I<g;)if(v[w++]=E[I++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)E[y++]=this.g[g]>>>v&255;return E};function o(E,g){var y=c;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;for(var y=[],v=!0,w=E.length-1;0<=w;w--){var I=E[w]|0;v&&I==g||(y[w]=I,v=!1)}this.g=y}var c={};function d(E){return-128<=E&&128>E?o(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return x;if(0>E)return C(f(-E));for(var g=[],y=1,v=0;E>=y;v++)g[v]=E/y|0,y*=4294967296;return new a(g,0)}function m(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return C(m(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(g,8)),v=x,w=0;w<E.length;w+=8){var I=Math.min(8,E.length-w),_=parseInt(E.substring(w,w+I),g);8>I?(I=f(Math.pow(g,I)),v=v.j(I).add(f(_))):(v=v.j(y),v=v.add(f(_)))}return v}var x=d(0),A=d(1),R=d(16777216);n=a.prototype,n.m=function(){if(V(this))return-C(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(V(this))return"-"+C(this).toString(E);for(var g=f(Math.pow(E,6)),y=this,v="";;){var w=X(y,g).g;y=L(y,w.j(g));var I=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=w,k(y))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=L(this,E),V(E)?-1:k(E)?0:1};function C(E){for(var g=E.g.length,y=[],v=0;v<g;v++)y[v]=~E.g[v];return new a(y,~E.h).add(A)}n.abs=function(){return V(this)?C(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0,w=0;w<=g;w++){var I=v+(this.i(w)&65535)+(E.i(w)&65535),_=(I>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=_>>>16,I&=65535,_&=65535,y[w]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function L(E,g){return E.add(C(g))}n.j=function(E){if(k(this)||k(E))return x;if(V(this))return V(E)?C(this).j(C(E)):C(C(this).j(E));if(V(E))return C(this.j(C(E)));if(0>this.l(R)&&0>E.l(R))return f(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var I=this.i(v)>>>16,_=this.i(v)&65535,Ve=E.i(w)>>>16,at=E.i(w)&65535;y[2*v+2*w]+=_*at,$(y,2*v+2*w),y[2*v+2*w+1]+=I*at,$(y,2*v+2*w+1),y[2*v+2*w+1]+=_*Ve,$(y,2*v+2*w+1),y[2*v+2*w+2]+=I*Ve,$(y,2*v+2*w+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function $(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function H(E,g){this.g=E,this.h=g}function X(E,g){if(k(g))throw Error("division by zero");if(k(E))return new H(x,x);if(V(E))return g=X(C(E),g),new H(C(g.g),C(g.h));if(V(g))return g=X(E,C(g)),new H(C(g.g),g.h);if(30<E.g.length){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var y=A,v=g;0>=v.l(E);)y=Ae(y),v=Ae(v);var w=ne(y,1),I=ne(v,1);for(v=ne(v,2),y=ne(y,2);!k(v);){var _=I.add(v);0>=_.l(E)&&(w=w.add(y),I=_),v=ne(v,1),y=ne(y,1)}return g=L(E,w.j(g)),new H(w,g)}for(w=x;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=f(y),_=I.j(g);V(_)||0<_.l(E);)y-=v,I=f(y),_=I.j(g);k(I)&&(I=A),w=w.add(I),E=L(E,_)}return new H(w,E)}n.A=function(E){return X(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&E.i(v);return new a(y,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|E.i(v);return new a(y,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^E.i(v);return new a(y,this.h^E.h)};function Ae(E){for(var g=E.g.length+1,y=[],v=0;v<g;v++)y[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(y,E.h)}function ne(E,g){var y=g>>5;g%=32;for(var v=E.g.length-y,w=[],I=0;I<v;I++)w[I]=0<g?E.i(I+y)>>>g|E.i(I+y+1)<<32-g:E.i(I+y);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Nc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Ot=a}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sc,Ln,Pc,Gr,yi,Cc,kc,Dc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,h){return i==Array.prototype||i==Object.prototype||(i[l]=h.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var l=0;l<i.length;++l){var h=i[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(i,l){if(l)e:{var h=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var T=i[p];if(!(T in h))break e;h=h[T]}i=i[i.length-1],p=h[i],l=l(p),l!=p&&l!=null&&e(h,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var h=0,p=!1,T={next:function(){if(!p&&h<i.length){var b=h++;return{value:l(b,i[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function d(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,h){return i.call.apply(i.bind,arguments)}function x(i,l,h){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),i.apply(l,T)}}return function(){return i.apply(l,arguments)}}function A(i,l,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:x,A.apply(null,arguments)}function R(i,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function k(i,l){function h(){}h.prototype=l.prototype,i.aa=l.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(p,T,b){for(var P=Array(arguments.length-2),J=2;J<arguments.length;J++)P[J-2]=arguments[J];return l.prototype[T].apply(p,P)}}function V(i){const l=i.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=i[p];return h}return[]}function C(i,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(d(p)){const T=i.length||0,b=p.length||0;i.length=T+b;for(let P=0;P<b;P++)i[T+P]=p[P]}else i.push(p)}}class L{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function $(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function X(i){return X[" "](i),i}X[" "]=function(){};var Ae=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ne(i,l,h){for(const p in i)l.call(h,i[p],p,i)}function E(i,l){for(const h in i)l.call(void 0,i[h],h,i)}function g(i){const l={};for(const h in i)l[h]=i[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let h,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(h in p)i[h]=p[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function w(i){var l=1;i=i.split(":");const h=[];for(;0<l&&i.length;)h.push(i.shift()),l--;return i.length&&h.push(i.join(":")),h}function I(i){c.setTimeout(()=>{throw i},0)}function _(){var i=zt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Ve{constructor(){this.h=this.g=null}add(l,h){const p=at.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var at=new L(()=>new Ns,i=>i.reset());class Ns{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,At=!1,zt=new Ve,wn=()=>{const i=c.Promise.resolve(void 0);bt=()=>{i.then(xn)}};var xn=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(h){I(h)}var l=at;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}At=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ss=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return i}();function Rt(i,l){if(ae.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(Ae){e:{try{X(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else h=="mouseover"?l=i.fromElement:h=="mouseout"&&(l=i.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ps[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Rt.aa.h.call(this)}}k(Rt,ae);var Ps={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),Cs=0;function gr(i,l,h,p,T){this.listener=i,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=T,this.key=++Cs,this.da=this.fa=!1}function ue(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Wt(i){this.src=i,this.g={},this.h=0}Wt.prototype.add=function(i,l,h,p,T){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var P=D(i,l,p,T);return-1<P?(l=i[P],h||(l.fa=!1)):(l=new gr(l,this.src,b,!!p,T),l.fa=h,i.push(l)),l};function Tn(i,l){var h=l.type;if(h in i.g){var p=i.g[h],T=Array.prototype.indexOf.call(p,l,void 0),b;(b=0<=T)&&Array.prototype.splice.call(p,T,1),b&&(ue(l),i.g[h].length==0&&(delete i.g[h],i.h--))}}function D(i,l,h,p){for(var T=0;T<i.length;++T){var b=i[T];if(!b.da&&b.listener==l&&b.capture==!!h&&b.ha==p)return T}return-1}var re="closure_lm_"+(1e6*Math.random()|0),he={};function Ge(i,l,h,p,T){if(Array.isArray(l)){for(var b=0;b<l.length;b++)Ge(i,l[b],h,p,T);return null}return h=Io(h),i&&i[Gt]?i.K(l,h,f(p)?!!p.capture:!1,T):We(i,l,h,!1,p,T)}function We(i,l,h,p,T,b){if(!l)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,J=Ds(i);if(J||(i[re]=J=new Wt(i)),h=J.add(l,h,p,P,b),h.proxy)return h;if(p=Nt(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)Ss||(T=P),T===void 0&&(T=!1),i.addEventListener(l.toString(),p,T);else if(i.attachEvent)i.attachEvent(To(l.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Nt(){function i(h){return l.call(i.src,i.listener,h)}const l=Yu;return i}function lt(i,l,h,p,T){if(Array.isArray(l))for(var b=0;b<l.length;b++)lt(i,l[b],h,p,T);else p=f(p)?!!p.capture:!!p,h=Io(h),i&&i[Gt]?(i=i.i,l=String(l).toString(),l in i.g&&(b=i.g[l],h=D(b,h,p,T),-1<h&&(ue(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete i.g[l],i.h--)))):i&&(i=Ds(i))&&(l=i.g[l.toString()],i=-1,l&&(i=D(l,h,p,T)),(h=-1<i?l[i]:null)&&ks(h))}function ks(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Gt])Tn(l.i,i);else{var h=i.type,p=i.proxy;l.removeEventListener?l.removeEventListener(h,p,i.capture):l.detachEvent?l.detachEvent(To(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Ds(l))?(Tn(h,i),h.h==0&&(h.src=null,l[re]=null)):ue(i)}}}function To(i){return i in he?he[i]:he[i]="on"+i}function Yu(i,l){if(i.da)i=!0;else{l=new Rt(l,this);var h=i.listener,p=i.ha||i.src;i.fa&&ks(i),i=h.call(p,l)}return i}function Ds(i){return i=i[re],i instanceof Wt?i:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Io(i){return typeof i=="function"?i:(i[Vs]||(i[Vs]=function(l){return i.handleEvent(l)}),i[Vs])}function ve(){Le.call(this),this.i=new Wt(this),this.M=this,this.F=null}k(ve,Le),ve.prototype[Gt]=!0,ve.prototype.removeEventListener=function(i,l,h,p){lt(this,i,l,h,p)};function Re(i,l){var h,p=i.F;if(p)for(h=[];p;p=p.F)h.push(p);if(i=i.M,p=l.type||l,typeof l=="string")l=new ae(l,i);else if(l instanceof ae)l.target=l.target||i;else{var T=l;l=new ae(p,i),v(l,T)}if(T=!0,h)for(var b=h.length-1;0<=b;b--){var P=l.g=h[b];T=_r(P,p,!0,l)&&T}if(P=l.g=i,T=_r(P,p,!0,l)&&T,T=_r(P,p,!1,l)&&T,h)for(b=0;b<h.length;b++)P=l.g=h[b],T=_r(P,p,!1,l)&&T}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var h=i.g[l],p=0;p<h.length;p++)ue(h[p]);delete i.g[l],i.h--}}this.F=null},ve.prototype.K=function(i,l,h,p){return this.i.add(String(i),l,!1,h,p)},ve.prototype.L=function(i,l,h,p){return this.i.add(String(i),l,!0,h,p)};function _r(i,l,h,p){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,b=0;b<l.length;++b){var P=l[b];if(P&&!P.da&&P.capture==h){var J=P.listener,pe=P.ha||P.src;P.fa&&Tn(i.i,P),T=J.call(pe,p)!==!1&&T}}return T&&!p.defaultPrevented}function bo(i,l,h){if(typeof i=="function")h&&(i=A(i,h));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Ao(i){i.g=bo(()=>{i.g=null,i.i&&(i.i=!1,Ao(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Ju extends Le{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ao(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(i){Le.call(this),this.h=i,this.g={}}k(In,Le);var Ro=[];function No(i){ne(i.g,function(l,h){this.g.hasOwnProperty(h)&&ks(l)},i),i.g={}}In.prototype.N=function(){In.aa.N.call(this),No(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Os=c.JSON.stringify,Xu=c.JSON.parse,Zu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function js(){}js.prototype.h=null;function So(i){return i.h||(i.h=i.i())}function Po(){}var bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ms(){ae.call(this,"d")}k(Ms,ae);function Ls(){ae.call(this,"c")}k(Ls,ae);var St={},Co=null;function yr(){return Co=Co||new ve}St.La="serverreachability";function ko(i){ae.call(this,St.La,i)}k(ko,ae);function An(i){const l=yr();Re(l,new ko(l))}St.STAT_EVENT="statevent";function Do(i,l){ae.call(this,St.STAT_EVENT,i),this.stat=l}k(Do,ae);function Ne(i){const l=yr();Re(l,new Do(l,i))}St.Ma="timingevent";function Vo(i,l){ae.call(this,St.Ma,i),this.size=l}k(Vo,ae);function Rn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Nn(){this.g=!0}Nn.prototype.xa=function(){this.g=!1};function eh(i,l,h,p,T,b){i.info(function(){if(i.g)if(b)for(var P="",J=b.split("&"),pe=0;pe<J.length;pe++){var K=J[pe].split("=");if(1<K.length){var Ee=K[0];K=K[1];var we=Ee.split("_");P=2<=we.length&&we[1]=="type"?P+(Ee+"="+K+"&"):P+(Ee+"=redacted&")}}else P=null;else P=b;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+l+`
`+h+`
`+P})}function th(i,l,h,p,T,b,P){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+l+`
`+h+`
`+b+" "+P})}function Ht(i,l,h,p){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+rh(i,h)+(p?" "+p:"")})}function nh(i,l){i.info(function(){return"TIMEOUT: "+l})}Nn.prototype.info=function(){};function rh(i,l){if(!i.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var p=h[i];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return Os(h)}catch{return l}}var vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fs;function Er(){}k(Er,js),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},Fs=new Er;function ct(i,l,h,p){this.j=i,this.i=l,this.l=h,this.R=p||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jo}function jo(){this.i=null,this.g="",this.h=!1}var Mo={},Us={};function Bs(i,l,h){i.L=1,i.v=Ir(He(l)),i.m=h,i.P=!0,Lo(i,null)}function Lo(i,l){i.F=Date.now(),wr(i),i.A=He(i.v);var h=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),Xo(h.i,"t",p),i.C=0,h=i.j.J,i.h=new jo,i.g=ga(i.j,h?l:null,!i.m),0<i.O&&(i.M=new Ju(A(i.Y,i,i.g),i.O)),l=i.U,h=i.g,p=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ro[0]=T.toString()),T=Ro);for(var b=0;b<T.length;b++){var P=Ge(h,T[b],p||l.handleEvent,!1,l.h||l);if(!P)break;l.g[P.key]=P}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),An(),eh(i.i,i.u,i.A,i.l,i.R,i.m)}ct.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ke(i)==3?l.j():this.Y(i)},ct.prototype.Y=function(i){try{if(i==this.g)e:{const we=Ke(this.g);var l=this.g.Ba();const Yt=this.g.Z();if(!(3>we)&&(we!=3||this.g&&(this.h.h||this.g.oa()||ia(this.g)))){this.J||we!=4||l==7||(l==8||0>=Yt?An(3):An(2)),qs(this);var h=this.g.Z();this.X=h;t:if(Fo(this)){var p=ia(this.g);i="";var T=p.length,b=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),Sn(this);var P="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,i+=this.h.i.decode(p[l],{stream:!(b&&l==T-1)});p.length=0,this.h.g+=i,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=h==200,th(this.i,this.u,this.A,this.l,this.R,we,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,pe=this.g;if((J=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(J)){var K=J;break t}}K=null}if(h=K)Ht(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$s(this,h);else{this.o=!1,this.s=3,Ne(12),Pt(this),Sn(this);break e}}if(this.P){h=!0;let Oe;for(;!this.J&&this.C<P.length;)if(Oe=sh(this,P),Oe==Us){we==4&&(this.s=4,Ne(14),h=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==Mo){this.s=4,Ne(15),Ht(this.i,this.l,P,"[Invalid Chunk]"),h=!1;break}else Ht(this.i,this.l,Oe,null),$s(this,Oe);if(Fo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||P.length!=0||this.h.h||(this.s=1,Ne(16),h=!1),this.o=this.o&&h,!h)Ht(this.i,this.l,P,"[Invalid Chunked Response]"),Pt(this),Sn(this);else if(0<P.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Qs(Ee),Ee.M=!0,Ne(11))}}else Ht(this.i,this.l,P,null),$s(this,P);we==4&&Pt(this),this.o&&!this.J&&(we==4?da(this.j,this):(this.o=!1,wr(this)))}else wh(this.g),h==400&&0<P.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),Pt(this),Sn(this)}}}catch{}finally{}};function Fo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function sh(i,l){var h=i.C,p=l.indexOf(`
`,h);return p==-1?Us:(h=Number(l.substring(h,p)),isNaN(h)?Mo:(p+=1,p+h>l.length?Us:(l=l.slice(p,p+h),i.C=p+h,l)))}ct.prototype.cancel=function(){this.J=!0,Pt(this)};function wr(i){i.S=Date.now()+i.I,Uo(i,i.I)}function Uo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Rn(A(i.ba,i),l)}function qs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}ct.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nh(this.i,this.A),this.L!=2&&(An(),Ne(17)),Pt(this),this.s=2,Sn(this)):Uo(this,this.S-i)};function Sn(i){i.j.G==0||i.J||da(i.j,i)}function Pt(i){qs(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,No(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function $s(i,l){try{var h=i.j;if(h.G!=0&&(h.g==i||zs(h.h,i))){if(!i.K&&zs(h.h,i)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Pr(h),Nr(h);else break e;Ks(h),Ne(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Rn(A(h.Za,h),6e3));if(1>=$o(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else kt(h,11)}else if((i.K||h.g==i)&&Pr(h),!$(l))for(T=h.Da.g.parse(l),l=0;l<T.length;l++){let K=T[l];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const Ee=K[3];Ee!=null&&(h.la=Ee,h.j.info("VER="+h.la));const we=K[4];we!=null&&(h.Aa=we,h.j.info("SVER="+h.Aa));const Yt=K[5];Yt!=null&&typeof Yt=="number"&&0<Yt&&(p=1.5*Yt,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Oe=i.g;if(Oe){const kr=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var b=p.h;b.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Gs(b,b.h),b.h=null))}if(p.D){const Ys=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(p.ya=Ys,Z(p.I,p.D,Ys))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var P=i;if(p.qa=ma(p,p.J?p.ia:null,p.W),P.K){zo(p.h,P);var J=P,pe=p.L;pe&&(J.I=pe),J.B&&(qs(J),wr(J)),p.g=P}else ua(p);0<h.i.length&&Sr(h)}else K[0]!="stop"&&K[0]!="close"||kt(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?kt(h,7):Hs(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}An(4)}catch{}}var ih=class{constructor(i,l){this.g=i,this.map=l}};function Bo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function $o(i){return i.h?1:i.g?i.g.size:0}function zs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Gs(i,l){i.g?i.g.add(l):i.h=l}function zo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Bo.prototype.cancel=function(){if(this.i=Go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Go(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const h of i.g.values())l=l.concat(h.D);return l}return V(i.i)}function oh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var l=[],h=i.length,p=0;p<h;p++)l.push(i[p]);return l}l=[],h=0;for(p in i)l[h++]=i[p];return l}function ah(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var l=[];i=i.length;for(var h=0;h<i;h++)l.push(h);return l}l=[],h=0;for(const p in i)l[h++]=p;return l}}}function Wo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var h=ah(i),p=oh(i),T=p.length,b=0;b<T;b++)l.call(void 0,p[b],h&&h[b],i)}var Ho=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lh(i,l){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var p=i[h].indexOf("="),T=null;if(0<=p){var b=i[h].substring(0,p);T=i[h].substring(p+1)}else b=i[h];l(b,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Ct(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ct){this.h=i.h,xr(this,i.j),this.o=i.o,this.g=i.g,Tr(this,i.s),this.l=i.l;var l=i.i,h=new kn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Ko(this,h),this.m=i.m}else i&&(l=String(i).match(Ho))?(this.h=!1,xr(this,l[1]||"",!0),this.o=Pn(l[2]||""),this.g=Pn(l[3]||"",!0),Tr(this,l[4]),this.l=Pn(l[5]||"",!0),Ko(this,l[6]||"",!0),this.m=Pn(l[7]||"")):(this.h=!1,this.i=new kn(null,this.h))}Ct.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Cn(l,Qo,!0),":");var h=this.g;return(h||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Cn(l,Qo,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Cn(h,h.charAt(0)=="/"?hh:uh,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Cn(h,fh)),i.join("")};function He(i){return new Ct(i)}function xr(i,l,h){i.j=h?Pn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Tr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Ko(i,l,h){l instanceof kn?(i.i=l,ph(i.i,i.h)):(h||(l=Cn(l,dh)),i.i=new kn(l,i.h))}function Z(i,l,h){i.i.set(l,h)}function Ir(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Pn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Cn(i,l,h){return typeof i=="string"?(i=encodeURI(i).replace(l,ch),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function ch(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Qo=/[#\/\?@]/g,uh=/[#\?:]/g,hh=/[#\?]/g,dh=/[#\?@]/g,fh=/#/g;function kn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ut(i){i.g||(i.g=new Map,i.h=0,i.i&&lh(i.i,function(l,h){i.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=kn.prototype,n.add=function(i,l){ut(this),this.i=null,i=Kt(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(l),this.h+=1,this};function Yo(i,l){ut(i),l=Kt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Jo(i,l){return ut(i),l=Kt(i,l),i.g.has(l)}n.forEach=function(i,l){ut(this),this.g.forEach(function(h,p){h.forEach(function(T){i.call(l,T,p,this)},this)},this)},n.na=function(){ut(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const T=i[p];for(let b=0;b<T.length;b++)h.push(l[p])}return h},n.V=function(i){ut(this);let l=[];if(typeof i=="string")Jo(this,i)&&(l=l.concat(this.g.get(Kt(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)l=l.concat(i[h])}return l},n.set=function(i,l){return ut(this),this.i=null,i=Kt(this,i),Jo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Xo(i,l,h){Yo(i,l),0<h.length&&(i.i=null,i.g.set(Kt(i,l),V(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const b=encodeURIComponent(String(p)),P=this.V(p);for(p=0;p<P.length;p++){var T=b;P[p]!==""&&(T+="="+encodeURIComponent(String(P[p]))),i.push(T)}}return this.i=i.join("&")};function Kt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function ph(i,l){l&&!i.j&&(ut(i),i.i=null,i.g.forEach(function(h,p){var T=p.toLowerCase();p!=T&&(Yo(this,p),Xo(this,T,h))},i)),i.j=l}function mh(i,l){const h=new Nn;if(c.Image){const p=new Image;p.onload=R(ht,h,"TestLoadImage: loaded",!0,l,p),p.onerror=R(ht,h,"TestLoadImage: error",!1,l,p),p.onabort=R(ht,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=R(ht,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else l(!1)}function gh(i,l){const h=new Nn,p=new AbortController,T=setTimeout(()=>{p.abort(),ht(h,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:p.signal}).then(b=>{clearTimeout(T),b.ok?ht(h,"TestPingServer: ok",!0,l):ht(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),ht(h,"TestPingServer: error",!1,l)})}function ht(i,l,h,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(h)}catch{}}function _h(){this.g=new Zu}function yh(i,l,h){const p=h||"";try{Wo(i,function(T,b){let P=T;f(T)&&(P=Os(T)),l.push(p+b+"="+encodeURIComponent(P))})}catch(T){throw l.push(p+"type="+encodeURIComponent("_badmap")),T}}function br(i){this.l=i.Ub||null,this.j=i.eb||!1}k(br,js),br.prototype.g=function(){return new Ar(this.l,this.j)},br.prototype.i=function(i){return function(){return i}}({});function Ar(i,l){ve.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ar,ve),n=Ar.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,Vn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Dn(this):Vn(this),this.readyState==3&&Zo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Dn(this))},n.Qa=function(i){this.g&&(this.response=i,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Vn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=l.next();return i.join(`\r
`)};function Vn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ea(i){let l="";return ne(i,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Ws(i,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ea(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):Z(i,l,h))}function ie(i){ve.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ie,ve);var vh=/^https?$/i,Eh=["POST","PUT"];n=ie.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fs.g(),this.v=this.o?So(this.o):So(Fs),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(b){ta(this,b);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)h.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())h.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Eh,l,void 0))||p||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,P]of h)this.g.setRequestHeader(b,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){ta(this,b)}};function ta(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,na(i),Rr(i)}function na(i){i.A||(i.A=!0,Re(i,"complete"),Re(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Re(this,"complete"),Re(this,"abort"),Rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rr(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},n.bb=function(){ra(this)};function ra(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ke(i)!=4||i.Z()!=2)){if(i.u&&Ke(i)==4)bo(i.Ea,0,i);else if(Re(i,"readystatechange"),Ke(i)==4){i.h=!1;try{const P=i.Z();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=P===0){var T=String(i.D).match(Ho)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!vh.test(T?T.toLowerCase():"")}h=p}if(h)Re(i,"complete"),Re(i,"success");else{i.m=6;try{var b=2<Ke(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",na(i)}}finally{Rr(i)}}}}function Rr(i,l){if(i.g){sa(i);const h=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Re(i,"ready");try{h.onreadystatechange=p}catch{}}}function sa(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ke(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Xu(l)}};function ia(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function wh(i){const l={};i=(i.g&&2<=Ke(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if($(i[p]))continue;var h=w(i[p]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=l[T]||[];l[T]=b,b.push(h)}E(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function On(i,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||l}function oa(i){this.Aa=0,this.i=[],this.j=new Nn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=On("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=On("baseRetryDelayMs",5e3,i),this.cb=On("retryDelaySeedMs",1e4,i),this.Wa=On("forwardChannelMaxRetries",2,i),this.wa=On("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Bo(i&&i.concurrentRequestLimit),this.Da=new _h,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=oa.prototype,n.la=8,n.G=1,n.connect=function(i,l,h,p){Ne(0),this.W=i,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ma(this,null,this.W),Sr(this)};function Hs(i){if(aa(i),i.G==3){var l=i.U++,h=He(i.I);if(Z(h,"SID",i.K),Z(h,"RID",l),Z(h,"TYPE","terminate"),jn(i,h),l=new ct(i,i.j,l),l.L=2,l.v=Ir(He(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=ga(l.j,null),l.g.ea(l.v)),l.F=Date.now(),wr(l)}pa(i)}function Nr(i){i.g&&(Qs(i),i.g.cancel(),i.g=null)}function aa(i){Nr(i),i.u&&(c.clearTimeout(i.u),i.u=null),Pr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Sr(i){if(!qo(i.h)&&!i.s){i.s=!0;var l=i.Ga;bt||wn(),At||(bt(),At=!0),zt.add(l,i),i.B=0}}function xh(i,l){return $o(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Rn(A(i.Ga,i,l),fa(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new ct(this,this.j,i);let b=this.o;if(this.S&&(b?(b=g(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(T.H=b,b=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=ca(this,T,l),h=He(this.I),Z(h,"RID",i),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),jn(this,h),b&&(this.O?l="headers="+encodeURIComponent(String(ea(b)))+"&"+l:this.m&&Ws(h,this.m,b)),Gs(this.h,T),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",l),Z(h,"SID","null"),T.T=!0,Bs(T,h,null)):Bs(T,h,l),this.G=2}}else this.G==3&&(i?la(this,i):this.i.length==0||qo(this.h)||la(this))};function la(i,l){var h;l?h=l.l:h=i.U++;const p=He(i.I);Z(p,"SID",i.K),Z(p,"RID",h),Z(p,"AID",i.T),jn(i,p),i.m&&i.o&&Ws(p,i.m,i.o),h=new ct(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ca(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Gs(i.h,h),Bs(h,p,l)}function jn(i,l){i.H&&ne(i.H,function(h,p){Z(l,p,h)}),i.l&&Wo({},function(h,p){Z(l,p,h)})}function ca(i,l,h){h=Math.min(i.i.length,h);var p=i.l?A(i.l.Na,i.l,i):null;e:{var T=i.i;let b=-1;for(;;){const P=["count="+h];b==-1?0<h?(b=T[0].g,P.push("ofs="+b)):b=0:P.push("ofs="+b);let J=!0;for(let pe=0;pe<h;pe++){let K=T[pe].g;const Ee=T[pe].map;if(K-=b,0>K)b=Math.max(0,T[pe].g-100),J=!1;else try{yh(Ee,P,"req"+K+"_")}catch{p&&p(Ee)}}if(J){p=P.join("&");break e}}}return i=i.i.splice(0,h),l.D=i,p}function ua(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;bt||wn(),At||(bt(),At=!0),zt.add(l,i),i.v=0}}function Ks(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Rn(A(i.Fa,i),fa(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ha(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Rn(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Nr(this),ha(this))};function Qs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ha(i){i.g=new ct(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=He(i.qa);Z(l,"RID","rpc"),Z(l,"SID",i.K),Z(l,"AID",i.T),Z(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(l,"TO",i.ja),Z(l,"TYPE","xmlhttp"),jn(i,l),i.m&&i.o&&Ws(l,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Ir(He(l)),h.m=null,h.P=!0,Lo(h,i)}n.Za=function(){this.C!=null&&(this.C=null,Nr(this),Ks(this),Ne(19))};function Pr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function da(i,l){var h=null;if(i.g==l){Pr(i),Qs(i),i.g=null;var p=2}else if(zs(i.h,l))h=l.D,zo(i.h,l),p=1;else return;if(i.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var T=i.B;p=yr(),Re(p,new Vo(p,h)),Sr(i)}else ua(i);else if(T=l.s,T==3||T==0&&0<l.X||!(p==1&&xh(i,l)||p==2&&Ks(i)))switch(h&&0<h.length&&(l=i.h,l.i=l.i.concat(h)),T){case 1:kt(i,5);break;case 4:kt(i,10);break;case 3:kt(i,6);break;default:kt(i,2)}}}function fa(i,l){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*l}function kt(i,l){if(i.j.info("Error code "+l),l==2){var h=A(i.fb,i),p=i.Xa;const T=!p;p=new Ct(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||xr(p,"https"),Ir(p),T?mh(p.toString(),h):gh(p.toString(),h)}else Ne(2);i.G=0,i.l&&i.l.sa(l),pa(i),aa(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function pa(i){if(i.G=0,i.ka=[],i.l){const l=Go(i.h);(l.length!=0||i.i.length!=0)&&(C(i.ka,l),C(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function ma(i,l,h){var p=h instanceof Ct?He(h):new Ct(h);if(p.g!="")l&&(p.g=l+"."+p.g),Tr(p,p.s);else{var T=c.location;p=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var b=new Ct(null);p&&xr(b,p),l&&(b.g=l),T&&Tr(b,T),h&&(b.l=h),p=b}return h=i.D,l=i.ya,h&&l&&Z(p,h,l),Z(p,"VER",i.la),jn(i,p),p}function ga(i,l,h){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ie(new br({eb:h})):new ie(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _a(){}n=_a.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Cr(){}Cr.prototype.g=function(i,l){return new Pe(i,l)};function Pe(i,l){ve.call(this),this.g=new oa(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!$(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!$(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Qt(this)}k(Pe,ve),Pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){Hs(this.g)},Pe.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=Os(i),i=h);l.i.push(new ih(l.Ya++,i)),l.G==3&&Sr(l)},Pe.prototype.N=function(){this.g.l=null,delete this.j,Hs(this.g),delete this.g,Pe.aa.N.call(this)};function ya(i){Ms.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const h in l){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}k(ya,Ms);function va(){Ls.call(this),this.status=1}k(va,Ls);function Qt(i){this.g=i}k(Qt,_a),Qt.prototype.ua=function(){Re(this.g,"a")},Qt.prototype.ta=function(i){Re(this.g,new ya(i))},Qt.prototype.sa=function(i){Re(this.g,new va)},Qt.prototype.ra=function(){Re(this.g,"b")},Cr.prototype.createWebChannel=Cr.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,Dc=function(){return new Cr},kc=function(){return yr()},Cc=St,yi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,Gr=vr,Oo.COMPLETE="complete",Pc=Oo,Po.EventType=bn,bn.OPEN="a",bn.CLOSE="b",bn.ERROR="c",bn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,Ln=Po,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,Sc=ie}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});const Ka="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Di("@firebase/firestore");function Mn(){return Ft.logLevel}function O(n,...e){if(Ft.logLevel<=G.DEBUG){const t=e.map(Gi);Ft.debug(`Firestore (${gn}): ${n}`,...t)}}function st(n,...e){if(Ft.logLevel<=G.ERROR){const t=e.map(Gi);Ft.error(`Firestore (${gn}): ${n}`,...t)}}function an(n,...e){if(Ft.logLevel<=G.WARN){const t=e.map(Gi);Ft.warn(`Firestore (${gn}): ${n}`,...t)}}function Gi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const e=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: `+n;throw st(e),new Error(e)}function Y(n,e){n||U()}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Im{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class bm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Am{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0);let r=this.i;const s=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let o=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new jt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new jt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new Vc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Te(e)}}class Rm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Rm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Y(this.o===void 0);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string"),this.R=t.token,new Sm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Cm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function ln(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new de(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new de(0,0))}static max(){return new B(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=e.get(s),a=t.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ee extends Yn{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const km=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Yn{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return km.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new j(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new j(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ee.fromString(e))}static fromName(e){return new M(ee.fromString(e).popFirst(5))}static empty(){return new M(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ee(e.slice()))}}function Dm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new xt(s,M.empty(),e)}function Vm(n){return new xt(n.readTime,n.key,-1)}class xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xt(B.min(),M.empty(),-1)}static max(){return new xt(B.max(),M.empty(),-1)}}function Om(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==jm)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,o=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&t()},d=>r(d))}),a=!0,o===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const o=e.length,a=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;t(e[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(e,t){return new S((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function Lm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ur(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wi.oe=-1;function _s(n){return n==null}function ss(n){return n===0&&1/n==-1/0}function Fm(n){return typeof n=="number"&&Number.isInteger(n)&&!ss(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _n(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Or(this.root,e,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Or(this.root,e,this.comparator,!0)}}class Or{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=o??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new me(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,o){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ya(this.data.getIterator())}getIteratorFrom(e){return new Ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class Ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new je([])}unionWith(e){let t=new _e(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ln(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Mc("Invalid base64 string: "+o):o}}(e);return new ye(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Um=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tt(n){if(Y(!!n),typeof n=="string"){let e=0;const t=Um.exec(n);if(Y(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ki(n){const e=n.mapValue.fields.__previous_value__;return Hi(e)?Ki(e):e}function Jn(n){const e=Tt(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t,r,s,o,a,c,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class Xn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={mapValue:{}};function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hi(n)?4:$m(n)?9007199254740991:qm(n)?10:11:U()}function ze(n,e){if(n===e)return!0;const t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jn(n).isEqual(Jn(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Tt(s.timestampValue),c=Tt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Ut(s.bytesValue).isEqual(Ut(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return oe(s.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return oe(s.integerValue)===oe(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=oe(s.doubleValue),c=oe(o.doubleValue);return a===c?ss(a)===ss(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ln(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Qa(a)!==Qa(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!ze(a[d],c[d])))return!1;return!0}(n,e);default:return U()}}function Zn(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=Bt(n),r=Bt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=oe(o.integerValue||o.doubleValue),d=oe(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,e);case 3:return Ja(n.timestampValue,e.timestampValue);case 4:return Ja(Jn(n),Jn(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(o,a){const c=Ut(o),d=Ut(a);return c.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),d=a.split("/");for(let f=0;f<c.length&&f<d.length;f++){const m=Q(c[f],d[f]);if(m!==0)return m}return Q(c.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=Q(oe(o.latitude),oe(a.latitude));return c!==0?c:Q(oe(o.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xa(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,d,f,m;const x=o.fields||{},A=a.fields||{},R=(c=x.value)===null||c===void 0?void 0:c.arrayValue,k=(d=A.value)===null||d===void 0?void 0:d.arrayValue,V=Q(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:Xa(R,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===jr.mapValue&&a===jr.mapValue)return 0;if(o===jr.mapValue)return 1;if(a===jr.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=a.fields||{},m=Object.keys(f);d.sort(),m.sort();for(let x=0;x<d.length&&x<m.length;++x){const A=Q(d[x],m[x]);if(A!==0)return A;const R=cn(c[d[x]],f[m[x]]);if(R!==0)return R}return Q(d.length,m.length)}(n.mapValue,e.mapValue);default:throw U()}}function Ja(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Tt(n),r=Tt(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function Xa(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=cn(t[s],r[s]);if(o)return o}return Q(t.length,r.length)}function un(n){return vi(n)}function vi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Tt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ut(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=vi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${vi(t.fields[a])}`;return s+"}"}(n.mapValue):U()}function Za(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ei(n){return!!n&&"integerValue"in n}function Qi(n){return!!n&&"arrayValue"in n}function el(n){return!!n&&"nullValue"in n}function tl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wr(n){return!!n&&"mapValue"in n}function qm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function $n(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _n(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=$n(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$n(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $m(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$n(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=$n(a):s.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Wr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){_n(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new De($n(this.value))}}function Lc(n){const e=[];return _n(n.fields,(t,r)=>{const s=new ge([t]);if(Wr(r)){const o=Lc(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,s,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ie(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new Ie(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t){this.position=e,this.inclusive=t}}function nl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t="asc"){this.field=e,this.dir=t}}function zm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{}class ce extends Fc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Wm(e,t,r):t==="array-contains"?new Qm(e,r):t==="in"?new Ym(e,r):t==="not-in"?new Jm(e,r):t==="array-contains-any"?new Xm(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hm(e,r):new Km(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(cn(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Me extends Fc{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Me(e,t)}matches(e){return Uc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Uc(n){return n.op==="and"}function Bc(n){return Gm(n)&&Uc(n)}function Gm(n){for(const e of n.filters)if(e instanceof Me)return!1;return!0}function wi(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+un(n.value);if(Bc(n))return n.filters.map(e=>wi(e)).join(",");{const e=n.filters.map(t=>wi(t)).join(",");return`${n.op}(${e})`}}function qc(n,e){return n instanceof ce?function(r,s){return s instanceof ce&&r.op===s.op&&r.field.isEqual(s.field)&&ze(r.value,s.value)}(n,e):n instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&qc(a,s.filters[c]),!0):!1}(n,e):void U()}function $c(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${un(t.value)}`}(n):n instanceof Me?function(t){return t.op.toString()+" {"+t.getFilters().map($c).join(" ,")+"}"}(n):"Filter"}class Wm extends ce{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hm extends ce{constructor(e,t){super(e,"in",t),this.keys=zc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Km extends ce{constructor(e,t){super(e,"not-in",t),this.keys=zc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Qm extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qi(t)&&Zn(t.arrayValue,this.value)}}class Ym extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zn(this.value.arrayValue,t)}}class Jm extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Zn(this.value.arrayValue,t)}}class Xm extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t=null,r=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function sl(n,e=null,t=[],r=[],s=null,o=null,a=null){return new Zm(n,e,t,r,s,o,a)}function Yi(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>wi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>un(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>un(r)).join(",")),e.ue=t}return e.ue}function Ji(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rl(n.startAt,e.startAt)&&rl(n.endAt,e.endAt)}function xi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t=null,r=[],s=[],o=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eg(n,e,t,r,s,o,a,c){return new hr(n,e,t,r,s,o,a,c)}function Xi(n){return new hr(n)}function il(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gc(n){return n.collectionGroup!==null}function zn(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new _e(ge.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new os(o,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new os(ge.keyField(),r))}return e.ce}function qe(n){const e=q(n);return e.le||(e.le=tg(e,zn(n))),e.le}function tg(n,e){if(n.limitType==="F")return sl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new os(s.field,o)});const t=n.endAt?new is(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new is(n.startAt.position,n.startAt.inclusive):null;return sl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ti(n,e){const t=n.filters.concat([e]);return new hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ii(n,e,t){return new hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ys(n,e){return Ji(qe(n),qe(e))&&n.limitType===e.limitType}function Wc(n){return`${Yi(qe(n))}|lt:${n.limitType}`}function Jt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>$c(s)).join(", ")}]`),_s(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>un(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>un(s)).join(",")),`Target(${r})`}(qe(n))}; limitType=${n.limitType})`}function vs(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of zn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,d){const f=nl(a,c,d);return a.inclusive?f<=0:f<0}(r.startAt,zn(r),s)||r.endAt&&!function(a,c,d){const f=nl(a,c,d);return a.inclusive?f>=0:f>0}(r.endAt,zn(r),s))}(n,e)}function ng(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hc(n){return(e,t)=>{let r=!1;for(const s of zn(n)){const o=rg(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function rg(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,c){const d=a.data.field(o),f=c.data.field(o);return d!==null&&f!==null?cn(d,f):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return jc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new se(M.comparator);function it(){return sg}const Kc=new se(M.comparator);function Fn(...n){let e=Kc;for(const t of n)e=e.insert(t.key,t);return e}function Qc(n){let e=Kc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Vt(){return Gn()}function Yc(){return Gn()}function Gn(){return new yn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ig=new se(M.comparator),og=new _e(M.comparator);function z(...n){let e=og;for(const t of n)e=e.add(t);return e}const ag=new _e(Q);function lg(){return ag}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ss(e)?"-0":e}}function Jc(n){return{integerValue:""+n}}function cg(n,e){return Fm(e)?Jc(e):Zi(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this._=void 0}}function ug(n,e,t){return n instanceof as?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Hi(o)&&(o=Ki(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof er?Zc(n,e):n instanceof tr?eu(n,e):function(s,o){const a=Xc(s,o),c=ol(a)+ol(s.Pe);return Ei(a)&&Ei(s.Pe)?Jc(c):Zi(s.serializer,c)}(n,e)}function hg(n,e,t){return n instanceof er?Zc(n,e):n instanceof tr?eu(n,e):t}function Xc(n,e){return n instanceof ls?function(r){return Ei(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class as extends Es{}class er extends Es{constructor(e){super(),this.elements=e}}function Zc(n,e){const t=tu(e);for(const r of n.elements)t.some(s=>ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class tr extends Es{constructor(e){super(),this.elements=e}}function eu(n,e){let t=tu(e);for(const r of n.elements)t=t.filter(s=>!ze(s,r));return{arrayValue:{values:t}}}class ls extends Es{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ol(n){return oe(n.integerValue||n.doubleValue)}function tu(n){return Qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function dg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof er&&s instanceof er||r instanceof tr&&s instanceof tr?ln(r.elements,s.elements,ze):r instanceof ls&&s instanceof ls?ze(r.Pe,s.Pe):r instanceof as&&s instanceof as}(n.transform,e.transform)}class fg{constructor(e,t){this.version=e,this.transformResults=t}}class Ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ws{}function nu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new su(n.key,Ze.none()):new dr(n.key,n.data,Ze.none());{const t=n.data,r=De.empty();let s=new _e(ge.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new qt(n.key,r,new je(s.toArray()),Ze.none())}}function pg(n,e,t){n instanceof dr?function(s,o,a){const c=s.value.clone(),d=ll(s.fieldTransforms,o,a.transformResults);c.setAll(d),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(s,o,a){if(!Hr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ll(s.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(ru(s)),d.setAll(c),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wn(n,e,t,r){return n instanceof dr?function(o,a,c,d){if(!Hr(o.precondition,a))return c;const f=o.value.clone(),m=cl(o.fieldTransforms,d,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(o,a,c,d){if(!Hr(o.precondition,a))return c;const f=cl(o.fieldTransforms,d,a),m=a.data;return m.setAll(ru(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(x=>x.field))}(n,e,t,r):function(o,a,c){return Hr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function mg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Xc(r.transform,s||null);o!=null&&(t===null&&(t=De.empty()),t.set(r.field,o))}return t||null}function al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ln(r,s,(o,a)=>dg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dr extends ws{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qt extends ws{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ru(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ll(n,e,t){const r=new Map;Y(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);r.set(o.field,hg(a,c,t[s]))}return r}function cl(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,ug(o,a,e))}return r}class su extends ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gg extends ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&pg(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yc();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const d=nu(a,c);d!==null&&r.set(s.key,d),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&ln(this.mutations,e.mutations,(t,r)=>al(t,r))&&ln(this.baseMutations,e.baseMutations,(t,r)=>al(t,r))}}class eo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length);let s=function(){return ig}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new eo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,W;function Eg(n){switch(n){default:return U();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function iu(n){if(n===void 0)return st("GRPC error has no .code"),N.UNKNOWN;switch(n){case le.OK:return N.OK;case le.CANCELLED:return N.CANCELLED;case le.UNKNOWN:return N.UNKNOWN;case le.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case le.INTERNAL:return N.INTERNAL;case le.UNAVAILABLE:return N.UNAVAILABLE;case le.UNAUTHENTICATED:return N.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case le.NOT_FOUND:return N.NOT_FOUND;case le.ALREADY_EXISTS:return N.ALREADY_EXISTS;case le.PERMISSION_DENIED:return N.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case le.ABORTED:return N.ABORTED;case le.OUT_OF_RANGE:return N.OUT_OF_RANGE;case le.UNIMPLEMENTED:return N.UNIMPLEMENTED;case le.DATA_LOSS:return N.DATA_LOSS;default:return U()}}(W=le||(le={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new Ot([4294967295,4294967295],0);function ul(n){const e=wg().encode(n),t=new Nc;return t.update(e),new Uint8Array(t.digest())}function hl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ot([t,r],0),new Ot([s,o],0)]}class to{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Un(`Invalid padding: ${t}`);if(r<0)throw new Un(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Un(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ot.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Ot.fromNumber(r)));return s.compare(xg)===1&&(s=new Ot([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ul(e),[r,s]=hl(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new to(o,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=ul(e),[r,s]=hl(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,fr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xs(B.min(),s,new se(Q),it(),z())}}class fr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fr(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class ou{constructor(e,t){this.targetId=e,this.me=t}}class au{constructor(e,t,r=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class dl{constructor(){this.fe=0,this.ge=pl(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=z(),t=z(),r=z();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new fr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=pl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Tg{constructor(e){this.Le=e,this.Be=new Map,this.ke=it(),this.qe=fl(),this.Qe=new se(Q)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const o=s.target;if(xi(o))if(r===0){const a=new M(o.path);this.Ue(t,a,Ie.newNoDocument(a,B.min()))}else Y(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),d=c?this.Xe(c,e,a):1;if(d!==0){this.je(t);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,c;try{a=Ut(r).toUint8Array()}catch(d){if(d instanceof Mc)return an("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new to(a,s,o)}catch(d){return an(d instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,o,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&xi(c.target)){const d=new M(c.target.path);this.ke.get(d)!==null||this.it(a,d)||this.Ue(a,d,Ie.newNoDocument(d,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=z();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new xs(e,t,this.Qe,this.ke,r);return this.ke=it(),this.qe=fl(),this.Qe=new se(Q),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new dl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new _e(Q),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fl(){return new se(M.comparator)}function pl(){return new se(M.comparator)}const Ig={asc:"ASCENDING",desc:"DESCENDING"},bg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ag={and:"AND",or:"OR"};class Rg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bi(n,e){return n.useProto3Json||_s(e)?e:{value:e}}function cs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ng(n,e){return cs(n,e.toTimestamp())}function $e(n){return Y(!!n),B.fromTimestamp(function(t){const r=Tt(t);return new de(r.seconds,r.nanos)}(n))}function no(n,e){return Ai(n,e).canonicalString()}function Ai(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cu(n){const e=ee.fromString(n);return Y(pu(e)),e}function Ri(n,e){return no(n.databaseId,e.path)}function ii(n,e){const t=cu(e);if(t.get(1)!==n.databaseId.projectId)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(hu(t))}function uu(n,e){return no(n.databaseId,e)}function Sg(n){const e=cu(n);return e.length===4?ee.emptyPath():hu(e)}function Ni(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hu(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ml(n,e,t){return{name:Ri(n,e),fields:t.value.mapValue.fields}}function Pg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(Y(m===void 0||typeof m=="string"),ye.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ye.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const m=f.code===void 0?N.UNKNOWN:iu(f.code);return new j(m,f.message||"")}(a);t=new au(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ii(n,r.document.name),o=$e(r.document.updateTime),a=r.document.createTime?$e(r.document.createTime):B.min(),c=new De({mapValue:{fields:r.document.fields}}),d=Ie.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new Kr(f,m,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ii(n,r.document),o=r.readTime?$e(r.readTime):B.min(),a=Ie.newNoDocument(s,o),c=r.removedTargetIds||[];t=new Kr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ii(n,r.document),o=r.removedTargetIds||[];t=new Kr([],o,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new vg(s,o),c=r.targetId;t=new ou(c,a)}}return t}function Cg(n,e){let t;if(e instanceof dr)t={update:ml(n,e.key,e.value)};else if(e instanceof su)t={delete:Ri(n,e.key)};else if(e instanceof qt)t={update:ml(n,e.key,e.data),updateMask:Ug(e.fieldMask)};else{if(!(e instanceof gg))return U();t={verify:Ri(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof as)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof tr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ls)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ng(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,e.precondition)),t}function kg(n,e){return n&&n.length>0?(Y(e!==void 0),n.map(t=>function(s,o){let a=s.updateTime?$e(s.updateTime):$e(o);return a.isEqual(B.min())&&(a=$e(o)),new fg(a,s.transformResults||[])}(t,e))):[]}function Dg(n,e){return{documents:[uu(n,e.path)]}}function Vg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=uu(n,s);const o=function(f){if(f.length!==0)return fu(Me.create(f,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(A){return{field:Xt(A.field),direction:Mg(A.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=bi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function Og(n){let e=Sg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(x){const A=du(x);return A instanceof Me&&Bc(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(x){return x.map(A=>function(k){return new os(Zt(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(x){let A;return A=typeof x=="object"?x.value:x,_s(A)?null:A}(t.limit));let d=null;t.startAt&&(d=function(x){const A=!!x.before,R=x.values||[];return new is(R,A)}(t.startAt));let f=null;return t.endAt&&(f=function(x){const A=!x.before,R=x.values||[];return new is(R,A)}(t.endAt)),eg(e,s,a,o,c,"F",d,f)}function jg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function du(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Zt(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zt(t.unaryFilter.field);return ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Zt(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Zt(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Zt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Me.create(t.compositeFilter.filters.map(r=>du(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(n):U()}function Mg(n){return Ig[n]}function Lg(n){return bg[n]}function Fg(n){return Ag[n]}function Xt(n){return{fieldPath:n.canonicalString()}}function Zt(n){return ge.fromServerFormat(n.fieldPath)}function fu(n){return n instanceof ce?function(t){if(t.op==="=="){if(tl(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NAN"}};if(el(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tl(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NAN"}};if(el(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(t.field),op:Lg(t.op),value:t.value}}}(n):n instanceof Me?function(t){const r=t.getFilters().map(s=>fu(s));return r.length===1?r[0]:{compositeFilter:{op:Fg(t.op),filters:r}}}(n):U()}function Ug(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,r,s,o=B.min(),a=B.min(),c=ye.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new _t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.ct=e}}function qg(n){const e=Og({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ii(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.un=new zg}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(xt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class zg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(ee.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new hn(0)}static kn(){return new hn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.changes=new yn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Wn(r.mutation,s,je.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const s=Vt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=Fn();return o.forEach((c,d)=>{a=a.insert(c,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Vt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let o=it();const a=Gn(),c=function(){return Gn()}();return t.forEach((d,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof qt)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Wn(m.mutation,f,m.mutation.getFieldMask(),de.now())):a.set(f.key,je.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>{var x;return c.set(f,new Wg(m,(x=a.get(f))!==null&&x!==void 0?x:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Gn();let s=new se((a,c)=>a-c),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(d=>{const f=t.get(d);if(f===null)return;let m=r.get(d)||je.empty();m=c.applyToLocalView(f,m),r.set(d,m);const x=(s.get(c.batchId)||z()).add(d);s=s.insert(c.batchId,x)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,m=d.value,x=Yc();m.forEach(A=>{if(!o.has(A)){const R=nu(t.get(A),r.get(A));R!==null&&x.set(A,R),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,x))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):S.resolve(Vt());let c=-1,d=o;return a.next(f=>S.forEach(f,(m,x)=>(c<x.largestBatchId&&(c=x.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(e,m).next(A=>{d=d.insert(m,A)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,d,f,z())).next(m=>({batchId:c,changes:Qc(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=Fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Fn();return this.indexManager.getCollectionParents(e,o).next(c=>S.forEach(c,d=>{const f=function(x,A){return new hr(A,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(m=>{m.forEach((x,A)=>{a=a.insert(x,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((d,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Ie.newInvalidDocument(m)))});let c=Fn();return a.forEach((d,f)=>{const m=o.get(d);m!==void 0&&Wn(m.mutation,f,je.empty(),de.now()),vs(t,f)&&(c=c.insert(d,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:$e(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:qg(s.bundledQuery),readTime:$e(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.overlays=new se(M.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Vt();return S.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.ht(e,t,o)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=Vt(),o=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new se((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=Vt(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=Vt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yg(t,r));let o=this.Ir.get(t);o===void 0&&(o=z(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.Tr=new _e(fe.Er),this.dr=new _e(fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new fe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new fe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new M(new ee([])),r=new fe(t,e),s=new fe(t,e+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new M(new ee([])),r=new fe(t,e),s=new fe(t,e+1);let o=z();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new fe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return M.comparator(e.key,t.key)||Q(e.wr,t.wr)}static Ar(e,t){return Q(e.wr,t.wr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new _e(fe.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _g(o,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new fe(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),s=new fe(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(Q);return t.forEach(s=>{const o=new fe(s,0),a=new fe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new fe(new M(o),0);let c=new _e(Q);return this.br.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(d.wr)),!0)},a),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Y(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(t.mutations,s=>{const o=new fe(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new fe(t,0),s=this.br.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.Mr=e,this.docs=function(){return new se(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=it();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ie.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=it();const a=t.path,c=new M(a.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:m}}=d.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Om(Vm(m),r)<=0||(s.has(m.key)||vs(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,r,s){U()}Or(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Zg(this)}getSize(e){return S.resolve(this.size)}}class Zg extends Gg{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.persistence=e,this.Nr=new yn(t=>Yi(t),Ji),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ro,this.targetCount=0,this.kr=hn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new hn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Wi(0),this.Kr=!1,this.Kr=!0,this.$r=new Yg,this.referenceDelegate=e(this),this.Ur=new e_(this),this.indexManager=new $g,this.remoteDocumentCache=function(s){return new Xg(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Bg(t),this.Gr=new Kg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Jg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new n_(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(e,t){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class n_ extends Mm{constructor(e){super(),this.currentSequenceNumber=e}}class so{constructor(e){this.persistence=e,this.Jr=new ro,this.Yr=null}static Zr(e){return new so(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const s=M.fromPath(r);return this.ei(e,s).next(o=>{o||t.removeEntry(s,B.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=z(),s=z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new io(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rd()?8:Lm(be())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new r_;return this.Xi(e,t,a).next(c=>{if(o.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>o.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Mn()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Jt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(Mn()<=G.DEBUG&&O("QueryEngine","Query:",Jt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Mn()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Jt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qe(t))):S.resolve())}Yi(e,t){if(il(t))return S.resolve(null);let r=qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ii(t,null,"F"),r=qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=z(...o);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(d=>{const f=this.ts(t,c);return this.ns(t,f,a,d.readTime)?this.Yi(e,Ii(t,null,"F")):this.rs(e,f,t,d)}))})))}Zi(e,t,r,s){return il(t)||s.isEqual(B.min())?S.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,s)?S.resolve(null):(Mn()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jt(t)),this.rs(e,a,t,Dm(s,-1)).next(c=>c))})}ts(e,t){let r=new _e(Hc(e));return t.forEach((s,o)=>{vs(e,o)&&(r=r.add(o))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(e,t,r){return Mn()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Jt(t)),this.Ji.getDocumentsMatchingQuery(e,t,xt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new se(Q),this._s=new yn(o=>Yi(o),Ji),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function o_(n,e,t,r){return new i_(n,e,t,r)}async function mu(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let d=z();for(const f of s){a.push(f.batchId);for(const m of f.mutations)d=d.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)d=d.add(m.key)}return t.localDocuments.getDocuments(r,d).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function a_(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,d,f,m){const x=f.batch,A=x.keys();let R=S.resolve();return A.forEach(k=>{R=R.next(()=>m.getEntry(d,k)).next(V=>{const C=f.docVersions.get(k);Y(C!==null),V.version.compareTo(C)<0&&(x.applyToRemoteDocument(V,f),V.isValidDocument()&&(V.setReadTime(f.commitVersion),m.addEntry(V)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(d,x))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let d=z();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(d=d.add(c.batch.mutations[f].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function gu(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function l_(n,e){const t=q(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((m,x)=>{const A=s.get(x);if(!A)return;c.push(t.Ur.removeMatchingKeys(o,m.removedDocuments,x).next(()=>t.Ur.addMatchingKeys(o,m.addedDocuments,x)));let R=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(x)!==null?R=R.withResumeToken(ye.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(x,R),function(V,C,L){return V.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(A,R,m)&&c.push(t.Ur.updateTargetData(o,R))});let d=it(),f=z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(c_(o,a,e.documentUpdates).next(m=>{d=m.Ps,f=m.Is})),!r.isEqual(B.min())){const m=t.Ur.getLastRemoteSnapshotVersion(o).next(x=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(t.os=s,o))}function c_(n,e,t){let r=z(),s=z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=it();return t.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),d.isNoDocument()&&d.version.isEqual(B.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{Ps:a,Is:s}})}function u_(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function h_(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(o=>o?(s=o,S.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new _t(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Si(n,e,t){const r=q(n),s=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ur(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function gl(n,e,t){const r=q(n);let s=B.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,f,m){const x=q(d),A=x._s.get(m);return A!==void 0?S.resolve(x.os.get(A)):x.Ur.getTargetData(f,m)}(r,a,qe(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(d=>{o=d})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?o:z())).next(c=>(d_(r,ng(e),c),{documents:c,Ts:o})))}function d_(n,e,t){let r=n.us.get(e)||B.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class _l{constructor(){this.activeTargetIds=lg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class f_{constructor(){this.so=new _l,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _l,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr=null;function oi(){return Mr===null?Mr=function(){return 268435456+Math.round(2147483648*Math.random())}():Mr++,"0x"+Mr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection";class __ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(t,r,s,o,a){const c=oi(),d=this.xo(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${c}:`,d,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(t,d,f,s).then(m=>(O("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw an("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",d,"request:",s),m})}Lo(t,r,s,o,a,c){return this.Mo(t,r,s,o,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),s&&s.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const s=m_[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const o=oi();return new Promise((a,c)=>{const d=new Sc;d.setWithCredentials(!0),d.listenOnce(Pc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Gr.NO_ERROR:const m=d.getResponseJson();O(xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case Gr.TIMEOUT:O(xe,`RPC '${e}' ${o} timed out`),c(new j(N.DEADLINE_EXCEEDED,"Request time out"));break;case Gr.HTTP_ERROR:const x=d.getStatus();if(O(xe,`RPC '${e}' ${o} failed with status:`,x,"response text:",d.getResponseText()),x>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const k=function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(L)>=0?L:N.UNKNOWN}(R.status);c(new j(k,R.message))}else c(new j(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new j(N.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(xe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);O(xe,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",f,r,15)})}Bo(e,t,r){const s=oi(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Dc(),c=kc(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const m=o.join("");O(xe,`Creating RPC '${e}' stream ${s}: ${m}`,d);const x=a.createWebChannel(m,d);let A=!1,R=!1;const k=new g_({Io:C=>{R?O(xe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(A||(O(xe,`Opening RPC '${e}' stream ${s} transport.`),x.open(),A=!0),O(xe,`RPC '${e}' stream ${s} sending:`,C),x.send(C))},To:()=>x.close()}),V=(C,L,$)=>{C.listen(L,H=>{try{$(H)}catch(X){setTimeout(()=>{throw X},0)}})};return V(x,Ln.EventType.OPEN,()=>{R||(O(xe,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),V(x,Ln.EventType.CLOSE,()=>{R||(R=!0,O(xe,`RPC '${e}' stream ${s} transport closed`),k.So())}),V(x,Ln.EventType.ERROR,C=>{R||(R=!0,an(xe,`RPC '${e}' stream ${s} transport errored:`,C),k.So(new j(N.UNAVAILABLE,"The operation could not be completed")))}),V(x,Ln.EventType.MESSAGE,C=>{var L;if(!R){const $=C.data[0];Y(!!$);const H=$,X=H.error||((L=H[0])===null||L===void 0?void 0:L.error);if(X){O(xe,`RPC '${e}' stream ${s} received error:`,X);const Ae=X.status;let ne=function(y){const v=le[y];if(v!==void 0)return iu(v)}(Ae),E=X.message;ne===void 0&&(ne=N.INTERNAL,E="Unknown error status: "+Ae+" with message "+X.message),R=!0,k.So(new j(ne,E)),x.close()}else O(xe,`RPC '${e}' stream ${s} received:`,$),k.bo($)}}),V(c,Cc.STAT_EVENT,C=>{C.stat===yi.PROXY?O(xe,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===yi.NOPROXY&&O(xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function ai(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){return new Rg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,r=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,r,s,o,a,c,d){this.ui=e,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _u(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(st(t.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new j(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class y_ extends yu{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Pg(this.serializer,e),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?$e(a.readTime):B.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ni(this.serializer),t.addTarget=function(o,a){let c;const d=a.target;if(c=xi(d)?{documents:Dg(o,d)}:{query:Vg(o,d)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=lu(o,a.resumeToken);const f=bi(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=cs(o,a.snapshotVersion.toTimestamp());const f=bi(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=jg(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ni(this.serializer),t.removeTarget=e,this.a_(t)}}class v_ extends yu{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=kg(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ni(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Cg(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Ai(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(N.UNKNOWN,o.toString())})}Lo(e,t,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Ai(t,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class w_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(st(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{$t(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=q(d);f.L_.add(4),await pr(f),f.q_.set("Unknown"),f.L_.delete(4),await Is(f)}(this))})}),this.q_=new w_(r,s)}}async function Is(n){if($t(n))for(const e of n.B_)await e(!0)}async function pr(n){for(const e of n.B_)await e(!1)}function vu(n,e){const t=q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),co(t)?lo(t):vn(t).r_()&&ao(t,e))}function oo(n,e){const t=q(n),r=vn(t);t.N_.delete(e),r.r_()&&Eu(t,e),t.N_.size===0&&(r.r_()?r.o_():$t(t)&&t.q_.set("Unknown"))}function ao(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vn(n).A_(e)}function Eu(n,e){n.Q_.xe(e),vn(n).R_(e)}function lo(n){n.Q_=new Tg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),vn(n).start(),n.q_.v_()}function co(n){return $t(n)&&!vn(n).n_()&&n.N_.size>0}function $t(n){return q(n).L_.size===0}function wu(n){n.Q_=void 0}async function T_(n){n.q_.set("Online")}async function I_(n){n.N_.forEach((e,t)=>{ao(n,e)})}async function b_(n,e){wu(n),co(n)?(n.q_.M_(e),lo(n)):n.q_.set("Unknown")}async function A_(n,e,t){if(n.q_.set("Online"),e instanceof au&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await us(n,r)}else if(e instanceof Kr?n.Q_.Ke(e):e instanceof ou?n.Q_.He(e):n.Q_.We(e),!t.isEqual(B.min()))try{const r=await gu(n.localStore);t.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,f)=>{const m=o.N_.get(d);if(!m)return;o.N_.set(d,m.withResumeToken(ye.EMPTY_BYTE_STRING,m.snapshotVersion)),Eu(o,d);const x=new _t(m.target,d,f,m.sequenceNumber);ao(o,x)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await us(n,r)}}async function us(n,e,t){if(!ur(e))throw e;n.L_.add(1),await pr(n),n.q_.set("Offline"),t||(t=()=>gu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Is(n)})}function xu(n,e){return e().catch(t=>us(n,t,e))}async function bs(n){const e=q(n),t=It(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;R_(e);)try{const s=await u_(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,N_(e,s)}catch(s){await us(e,s)}Tu(e)&&Iu(e)}function R_(n){return $t(n)&&n.O_.length<10}function N_(n,e){n.O_.push(e);const t=It(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Tu(n){return $t(n)&&!It(n).n_()&&n.O_.length>0}function Iu(n){It(n).start()}async function S_(n){It(n).p_()}async function P_(n){const e=It(n);for(const t of n.O_)e.m_(t.mutations)}async function C_(n,e,t){const r=n.O_.shift(),s=eo.from(r,e,t);await xu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await bs(n)}async function k_(n,e){e&&It(n).V_&&await async function(r,s){if(function(a){return Eg(a)&&a!==N.ABORTED}(s.code)){const o=r.O_.shift();It(r).s_(),await xu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await bs(r)}}(n,e),Tu(n)&&Iu(n)}async function vl(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=$t(t);t.L_.add(3),await pr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Is(t)}async function D_(n,e){const t=q(n);e?(t.L_.delete(2),await Is(t)):e||(t.L_.add(2),await pr(t),t.q_.set("Unknown"))}function vn(n){return n.K_||(n.K_=function(t,r,s){const o=q(t);return o.w_(),new y_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:T_.bind(null,n),Ro:I_.bind(null,n),mo:b_.bind(null,n),d_:A_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),co(n)?lo(n):n.q_.set("Unknown")):(await n.K_.stop(),wu(n))})),n.K_}function It(n){return n.U_||(n.U_=function(t,r,s){const o=q(t);return o.w_(),new v_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:S_.bind(null,n),mo:k_.bind(null,n),f_:P_.bind(null,n),g_:C_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await bs(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,c=new uo(e,t,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(n,e){if(st("AsyncQueue",`${e}: ${n}`),ur(n))return new j(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Fn(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new sn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new sn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.W_=new se(M.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class dn{constructor(e,t,r,s,o,a,c,d,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new dn(e,t,sn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class O_{constructor(){this.queries=wl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=q(t),o=s.queries;s.queries=wl(),o.forEach((a,c)=>{for(const d of c.j_)d.onError(r)})})(this,new j(N.ABORTED,"Firestore shutting down"))}}function wl(){return new yn(n=>Wc(n),ys)}async function j_(n,e){const t=q(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.H_()&&e.J_()&&(r=2):(o=new V_,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(s,!0);break;case 1:o.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ho(a,`Initialization of query '${Jt(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&fo(t)}async function M_(n,e){const t=q(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=e.J_()?0:1:!o.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function L_(n,e){const t=q(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&fo(t)}function F_(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const o of s.j_)o.onError(t);r.queries.delete(e)}function fo(n){n.Y_.forEach(e=>{e.next()})}var Pi,xl;(xl=Pi||(Pi={})).ea="default",xl.Cache="cache";class U_{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new dn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Pi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.key=e}}class Au{constructor(e){this.key=e}}class B_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=z(),this.mutatedKeys=z(),this.Aa=Hc(e),this.Ra=new sn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new El,s=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,x)=>{const A=s.get(m),R=vs(this.query,x)?x:null,k=!!A&&this.mutatedKeys.has(A.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let C=!1;A&&R?A.data.isEqual(R.data)?k!==V&&(r.track({type:3,doc:R}),C=!0):this.ga(A,R)||(r.track({type:2,doc:R}),C=!0,(d&&this.Aa(R,d)>0||f&&this.Aa(R,f)<0)&&(c=!0)):!A&&R?(r.track({type:0,doc:R}),C=!0):A&&!R&&(r.track({type:1,doc:A}),C=!0,(d||f)&&(c=!0)),C&&(R?(a=a.add(R),o=V?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,x)=>function(R,k){const V=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return V(R)-V(k)}(m.type,x.type)||this.Aa(m.doc,x.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],d=this.da.size===0&&this.current&&!s?1:0,f=d!==this.Ea;return this.Ea=d,a.length!==0||f?{snapshot:new dn(this.query,e.Ra,o,a,e.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new El,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Au(r))}),this.da.forEach(r=>{e.has(r)||t.push(new bu(r))}),t}ba(e){this.Ta=e.Ts,this.da=z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return dn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class q_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $_{constructor(e){this.key=e,this.va=!1}}class z_{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new yn(c=>Wc(c),ys),this.Ma=new Map,this.xa=new Set,this.Oa=new se(M.comparator),this.Na=new Map,this.La=new ro,this.Ba={},this.ka=new Map,this.qa=hn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function G_(n,e,t=!0){const r=ku(n);let s;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Ru(r,e,t,!0),s}async function W_(n,e){const t=ku(n);await Ru(t,e,!0,!1)}async function Ru(n,e,t,r){const s=await h_(n.localStore,qe(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await H_(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&vu(n.remoteStore,s),c}async function H_(n,e,t,r,s){n.Ka=(x,A,R)=>async function(V,C,L,$){let H=C.view.ma(L);H.ns&&(H=await gl(V.localStore,C.query,!1).then(({documents:E})=>C.view.ma(E,H)));const X=$&&$.targetChanges.get(C.targetId),Ae=$&&$.targetMismatches.get(C.targetId)!=null,ne=C.view.applyChanges(H,V.isPrimaryClient,X,Ae);return Il(V,C.targetId,ne.wa),ne.snapshot}(n,x,A,R);const o=await gl(n.localStore,e,!0),a=new B_(e,o.Ts),c=a.ma(o.documents),d=fr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,d);Il(n,t,f.wa);const m=new q_(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function K_(n,e,t){const r=q(n),s=r.Fa.get(e),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!ys(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Si(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&oo(r.remoteStore,s.targetId),Ci(r,s.targetId)}).catch(cr)):(Ci(r,s.targetId),await Si(r.localStore,s.targetId,!0))}async function Q_(n,e){const t=q(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),oo(t.remoteStore,r.targetId))}async function Y_(n,e,t){const r=ry(n);try{const s=await function(a,c){const d=q(a),f=de.now(),m=c.reduce((R,k)=>R.add(k.key),z());let x,A;return d.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=it(),V=z();return d.cs.getEntries(R,m).next(C=>{k=C,k.forEach((L,$)=>{$.isValidDocument()||(V=V.add(L))})}).next(()=>d.localDocuments.getOverlayedDocuments(R,k)).next(C=>{x=C;const L=[];for(const $ of c){const H=mg($,x.get($.key).overlayedDocument);H!=null&&L.push(new qt($.key,H,Lc(H.value.mapValue),Ze.exists(!0)))}return d.mutationQueue.addMutationBatch(R,f,L,c)}).next(C=>{A=C;const L=C.applyToLocalDocumentSet(x,V);return d.documentOverlayCache.saveOverlays(R,C.batchId,L)})}).then(()=>({batchId:A.batchId,changes:Qc(x)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,d){let f=a.Ba[a.currentUser.toKey()];f||(f=new se(Q)),f=f.insert(c,d),a.Ba[a.currentUser.toKey()]=f}(r,s.batchId,t),await mr(r,s.changes),await bs(r.remoteStore)}catch(s){const o=ho(s,"Failed to persist write");t.reject(o)}}async function Nu(n,e){const t=q(n);try{const r=await l_(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Na.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Y(a.va):s.removedDocuments.size>0&&(Y(a.va),a.va=!1))}),await mr(t,r,e)}catch(r){await cr(r)}}function Tl(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const d=q(a);d.onlineState=c;let f=!1;d.queries.forEach((m,x)=>{for(const A of x.j_)A.Z_(c)&&(f=!0)}),f&&fo(d)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function J_(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),o=s&&s.key;if(o){let a=new se(M.comparator);a=a.insert(o,Ie.newNoDocument(o,B.min()));const c=z().add(o),d=new xs(B.min(),new Map,new se(Q),a,c);await Nu(r,d),r.Oa=r.Oa.remove(o),r.Na.delete(e),po(r)}else await Si(r.localStore,e,!1).then(()=>Ci(r,e,t)).catch(cr)}async function X_(n,e){const t=q(n),r=e.batch.batchId;try{const s=await a_(t.localStore,e);Pu(t,r,null),Su(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mr(t,s)}catch(s){await cr(s)}}async function Z_(n,e,t){const r=q(n);try{const s=await function(a,c){const d=q(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return d.mutationQueue.lookupMutationBatch(f,c).next(x=>(Y(x!==null),m=x.keys(),d.mutationQueue.removeMutationBatch(f,x))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>d.localDocuments.getDocuments(f,m))})}(r.localStore,e);Pu(r,e,t),Su(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mr(r,s)}catch(s){await cr(s)}}function Su(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Pu(n,e,t){const r=q(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ci(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Cu(n,r)})}function Cu(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(oo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),po(n))}function Il(n,e,t){for(const r of t)r instanceof bu?(n.La.addReference(r.key,e),ey(n,r)):r instanceof Au?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Cu(n,r.key)):U()}function ey(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+t),n.xa.add(r),po(n))}function po(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new M(ee.fromString(e)),r=n.qa.next();n.Na.set(r,new $_(t)),n.Oa=n.Oa.insert(t,r),vu(n.remoteStore,new _t(qe(Xi(t.path)),r,"TargetPurposeLimboResolution",Wi.oe))}}async function mr(n,e,t){const r=q(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,d)=>{a.push(r.Ka(d,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const x=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(d.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(d.targetId,x?"current":"not-current")}if(f){s.push(f);const x=io.Wi(d.targetId,f);o.push(x)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(d,f){const m=q(d);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",x=>S.forEach(f,A=>S.forEach(A.$i,R=>m.persistence.referenceDelegate.addReference(x,A.targetId,R)).next(()=>S.forEach(A.Ui,R=>m.persistence.referenceDelegate.removeReference(x,A.targetId,R)))))}catch(x){if(!ur(x))throw x;O("LocalStore","Failed to update sequence numbers: "+x)}for(const x of f){const A=x.targetId;if(!x.fromCache){const R=m.os.get(A),k=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(k);m.os=m.os.insert(A,V)}}}(r.localStore,o))}async function ty(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await mu(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(c=>{c.forEach(d=>{d.reject(new j(N.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(t,r.hs)}}function ny(n,e){const t=q(n),r=t.Na.get(e);if(r&&r.va)return z().add(r.key);{let s=z();const o=t.Ma.get(e);if(!o)return s;for(const a of o){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function ku(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ny.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J_.bind(null,e),e.Ca.d_=L_.bind(null,e.eventManager),e.Ca.$a=F_.bind(null,e.eventManager),e}function ry(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=X_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z_.bind(null,e),e}class hs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ts(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return o_(this.persistence,new s_,e.initialUser,this.serializer)}Ga(e){return new t_(so.Zr,this.serializer)}Wa(e){return new f_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hs.provider={build:()=>new hs};class ki{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ty.bind(null,this.syncEngine),await D_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new O_}()}createDatastore(e){const t=Ts(e.databaseInfo.databaseId),r=function(o){return new __(o)}(e.databaseInfo);return function(o,a,c,d){return new E_(o,a,c,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,c){return new x_(r,s,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Tl(this.syncEngine,t,0),function(){return yl.D()?new yl:new p_}())}createSyncEngine(e,t){return function(s,o,a,c,d,f,m){const x=new z_(s,o,a,c,d,f);return m&&(x.Qa=!0),x}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=q(s);O("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await pr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ki.provider={build:()=>new ki};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):st("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Te.UNAUTHENTICATED,this.clientId=Oc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ho(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function li(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await mu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await oy(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>vl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>vl(e.remoteStore,s)),n._onlineComponents=e}async function oy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await li(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;an("Error using user provided cache. Falling back to memory cache: "+t),await li(n,new hs)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await li(n,new hs);return n._offlineComponents}async function Du(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await bl(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await bl(n,new ki))),n._onlineComponents}function ay(n){return Du(n).then(e=>e.syncEngine)}async function Al(n){const e=await Du(n),t=e.eventManager;return t.onListen=G_.bind(null,e.syncEngine),t.onUnlisten=K_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=W_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Q_.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e,t){if(!t)throw new j(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ly(n,e,t,r){if(e===!0&&r===!0)throw new j(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nl(n){if(!M.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sl(n){if(M.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function As(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function Hn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=As(n);throw new j(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ly("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Im;switch(r.type){case"firstParty":return new Nm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Rl.get(t);r&&(O("ComponentProvider","Removing Datastore"),Rl.delete(t),r.terminate())}(this),Promise.resolve()}}function cy(n,e,t,r={}){var s;const o=(n=Hn(n,Rs))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&an("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Te.MOCK_USER;else{c=Yh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new j(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Te(f)}n._authCredentials=new bm(new Vc(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new En(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class wt extends En{constructor(e,t,r){super(e,t,Xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new M(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function Lr(n,e,...t){if(n=Se(n),Ou("collection","path",e),n instanceof Rs){const r=ee.fromString(e,...t);return Sl(r),new wt(n,null,r)}{if(!(n instanceof ke||n instanceof wt))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Sl(r),new wt(n.firestore,null,r)}}function uy(n,e,...t){if(n=Se(n),arguments.length===1&&(e=Oc.newId()),Ou("doc","path",e),n instanceof Rs){const r=ee.fromString(e,...t);return Nl(r),new ke(n,null,new M(r))}{if(!(n instanceof ke||n instanceof wt))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Nl(r),new ke(n.firestore,n instanceof wt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _u(this,"async_queue_retry"),this.Vu=()=>{const r=ai();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ai();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ai();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new jt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ur(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw st("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=uo.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function kl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class ds extends Rs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cl(e),this._firestoreClient=void 0,await e}}}function hy(n,e){const t=typeof n=="object"?n:Hl(),r=typeof n=="string"?n:"(default)",s=Oi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Kh("firestore");o&&cy(s,...o)}return s}function ju(n){if(n._terminated)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dy(n),n._firestoreClient}function dy(n){var e,t,r;const s=n._freezeSettings(),o=function(c,d,f,m){return new Bm(c,d,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Vu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new iy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(ye.fromBase64String(e))}catch(t){throw new j(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fn(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=/^__.*__$/;class py{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new dr(e,this.data,t,this.fieldTransforms)}}function Lu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class yo{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new yo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Lu(this.Cu)&&fy.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class my{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ts(e)}Qu(e,t,r,s=!1){return new yo({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fu(n){const e=n._freezeSettings(),t=Ts(n._databaseId);return new my(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gy(n,e,t,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,s);qu("Data must be an object, but it was:",a,r);const c=Uu(r,a);let d,f;if(o.merge)d=new je(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const x of o.mergeFields){const A=yy(e,x,t);if(!a.contains(A))throw new j(N.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Ey(m,A)||m.push(A)}d=new je(m),f=a.fieldTransforms.filter(x=>d.covers(x.field))}else d=null,f=a.fieldTransforms;return new py(new De(c),d,f)}function _y(n,e,t,r=!1){return vo(t,n.Qu(r?4:3,e))}function vo(n,e){if(Bu(n=Se(n)))return qu("Unsupported field value:",e,n),Uu(n,e);if(n instanceof Mu)return function(r,s){if(!Lu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let d=vo(c,s.Lu(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=de.fromDate(r);return{timestampValue:cs(s.serializer,o)}}if(r instanceof de){const o=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cs(s.serializer,o)}}if(r instanceof go)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:lu(s.serializer,r._byteString)};if(r instanceof ke){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:no(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _o)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Bu("VectorValues must only contain numeric values.");return Zi(c.serializer,d)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${As(r)}`)}(n,e)}function Uu(n,e){const t={};return jc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(n,(r,s)=>{const o=vo(s,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Bu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof go||n instanceof fn||n instanceof ke||n instanceof Mu||n instanceof _o)}function qu(n,e,t){if(!Bu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=As(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function yy(n,e,t){if((e=Se(e))instanceof mo)return e._internalPath;if(typeof e=="string")return $u(n,e);throw fs("Field path arguments must be of type string or ",n,!1,void 0,t)}const vy=new RegExp("[~\\*/\\[\\]]");function $u(n,e,t){if(e.search(vy)>=0)throw fs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new mo(...e.split("."))._internalPath}catch{throw fs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fs(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${r}`),a&&(d+=` in document ${s}`),d+=")"),new j(N.INVALID_ARGUMENT,c+n+d)}function Ey(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wy extends zu{data(){return super.data()}}function Gu(n,e){return typeof e=="string"?$u(n,e):e instanceof mo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eo{}class Ty extends Eo{}function Dl(n,e,...t){let r=[];e instanceof Eo&&r.push(e),r=r.concat(t),function(o){const a=o.filter(d=>d instanceof xo).length,c=o.filter(d=>d instanceof wo).length;if(a>1||a>0&&c>0)throw new j(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class wo extends Ty{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new wo(e,t,r)}_apply(e){const t=this._parse(e);return Wu(e._query,t),new En(e.firestore,e.converter,Ti(e._query,t))}_parse(e){const t=Fu(e.firestore);return function(o,a,c,d,f,m,x){let A;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new j(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ol(x,m);const R=[];for(const k of x)R.push(Vl(d,o,k));A={arrayValue:{values:R}}}else A=Vl(d,o,x)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ol(x,m),A=_y(c,a,x,m==="in"||m==="not-in");return ce.create(f,m,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class xo extends Eo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Me.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const d of c)Wu(a,d),a=Ti(a,d)}(e._query,t),new En(e.firestore,e.converter,Ti(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vl(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new j(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gc(e)&&t.indexOf("/")!==-1)throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!M.isDocumentKey(r))throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Za(n,new M(r))}if(t instanceof ke)return Za(n,t._key);throw new j(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${As(t)}.`)}function Ol(n,e){if(!Array.isArray(n)||n.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wu(n,e){const t=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Iy{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _n(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new _o(o)}convertGeoPoint(e){return new go(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ki(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jn(e));default:return null}}convertTimestamp(e){const t=Tt(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);Y(pu(r));const s=new Xn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(t)||st(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hu extends zu{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Gu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Qr extends Hu{data(e={}){return super.data(e)}}class Ay{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qr(this._firestore,this._userDataWriter,r.key,r,new Bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const d=new Qr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new Qr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Ry(c.type),doc:d,oldIndex:f,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ry(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class Ku extends Iy{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function jl(n,e){const t=Hn(n.firestore,ds),r=uy(n),s=by(n.converter,e);return Ny(t,[gy(Fu(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ze.exists(!1))]).then(()=>r)}function Ml(n,...e){var t,r,s;n=Se(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||kl(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(kl(e[a])){const x=e[a];e[a]=(t=x.next)===null||t===void 0?void 0:t.bind(x),e[a+1]=(r=x.error)===null||r===void 0?void 0:r.bind(x),e[a+2]=(s=x.complete)===null||s===void 0?void 0:s.bind(x)}let d,f,m;if(n instanceof ke)f=Hn(n.firestore,ds),m=Xi(n._key.path),d={next:x=>{e[a]&&e[a](Sy(f,n,x))},error:e[a+1],complete:e[a+2]};else{const x=Hn(n,En);f=Hn(x.firestore,ds),m=x._query;const A=new Ku(f);d={next:R=>{e[a]&&e[a](new Ay(f,A,x,R))},error:e[a+1],complete:e[a+2]},xy(n._query)}return function(A,R,k,V){const C=new sy(V),L=new U_(R,C,k);return A.asyncQueue.enqueueAndForget(async()=>j_(await Al(A),L)),()=>{C.Za(),A.asyncQueue.enqueueAndForget(async()=>M_(await Al(A),L))}}(ju(f),m,c,d)}function Ny(n,e){return function(r,s){const o=new jt;return r.asyncQueue.enqueueAndForget(async()=>Y_(await ay(r),s,o)),o.promise}(ju(n),e)}function Sy(n,e,t){const r=t.docs.get(e._key),s=new Ku(n);return new Hu(n,s,e._key,r,new Bn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){gn=s})(pn),on(new Mt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new ds(new Am(r.getProvider("auth-internal")),new Pm(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new j(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Et(Ka,"4.7.3",e),Et(Ka,"4.7.3","esm2017")})();const Py=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"",authDomain:"default-app-id.firebaseapp.com",projectId:"default-app-id",storageBucket:"default-app-id.appspot.com",messagingSenderId:"1234567890",appId:"1:1234567890:web:abcdef"},Qu=Wl(Py),ci=xm(Qu),Fr=hy(Qu),Ur=typeof __app_id<"u"?__app_id:"verde-reserve-luxury",Cy={RU:{title:"VERDE RESERVE",subtitle:"Элитный Лесной Резерват & Коттеджный Поселок",tagline:"Закрытый коттеджный поселок, объединивший преимущества загородной жизни с инфраструктурой мегаполиса.",navConcept:"Концепция",navPlan:"План застройки",navYield:"Доходность",navResidences:"Резиденции",navPortal:"Инвестор-Панель",bookTour:"Забронировать тур",totalTerritory:"Общая территория",totalTerritoryDesc:"Окруженный вековым хвойным лесом нетронутый природный заповедник.",residentialTerritory:"Жилая территория",residentialTerritoryDesc:"Гармонично вписанные участки премиум-класса с сохранением ландшафта.",avgPlotSize:"Средний размер участка",avgPlotSizeDesc:"Просторные лесные наделы для абсолютной приватности каждого резидента.",residencesCount:"Количество домовладений",residencesCountDesc:"Ограниченная клубная серия современных коттеджей в едином стиле.",conceptTitle:"КОНЦЕПЦИЯ",conceptSubtitle:"ГАРМОНИЯ ПРИРОДЫ И ТЕХНОЛОГИЙ",planTitle:"ПЛАН ЗАСТРОЙКИ",planSubtitle:"ПРОДУМАННОЕ ЗОНИРОВАНИЕ ТЕРРИТОРИИ",planCenterText:"ПРОДУМАННОЕ ЗОНИРОВАНИЕ ТЕРРИТОРИИ: ПРИВАТНАЯ ЖИЛАЯ ЗОНА, ОБЩЕСТВЕННОЕ ПРОСТРАНСТВО И СПОРТИВНО-ИГРОВОЙ КЛАССТЕР",yieldTitle:"ДОХОДНОСТЬ",yieldSubtitle:"ОЦЕНКА ИНВЕСТИЦИОННОГО ПОТЕНЦИАЛА",yieldText:"Средняя стоимость аренды коттеджа площадью 160-180 м² на Новорижском шоссе составляет 180 000 – 250 000 ₽/месяц.",yieldGoal:"Потенциальный годовой доход от сдачи объекта в аренду может достигать",yieldGoalVal:"2.8 МЛН ₽",yieldPercent:"Что обеспечивает доходность на уровне",yieldPercentVal:"9-11% ГОДОВЫХ",yieldBottomText:"ПРИ ТЕКУЩЕЙ СТОИМОСТИ ВХОДА",calcTitle:"Калькулятор доходности",calcPropertyPrice:"Стоимость коттеджа",calcMonthlyRent:"Ежемесячная аренда",calcOccupancy:"Заполняемость",calcAnnualIncome:"Ожидаемый годовой доход",calcRoi:"Чистая доходность (ROI)",calcPayback:"Окупаемость проекта",savePortfolio:"Зафиксировать расчет в реестре",recentDeals:"Активность инвесторов",privateTourTitle:"Эксклюзивный визит в Verde Reserve",privateTourDesc:"Выберите формат индивидуального показа. Мы организуем премиальный трансфер.",helicopter:"Вертолетный трансфер из Мякинино",maybach:"Представительский седан класса люкс",selfArrival:"Индивидуальный заезд по VIP-пропускам",fullName:"Ваше имя",phone:"Номер телефона",submitTour:"Оформить привилегированный доступ",residencesTitle:"АРХИТЕКТУРА",residencesSubtitle:"КЛУБНЫЕ РЕЗИДЕНЦИИ",typeA:"Коттеджи типа «А» (Бизнес) — 85 шт.",typeADesc:"Идеальный баланс эргономики и панорамного остекления. Просторные террасы с выходом к сосновому массиву.",typeB:"Коттеджи типа «Б» (Премиум) — 50 шт.",typeBDesc:"Усадьбы представительского класса со спа-комплексом, увеличенной высотой потолков (4.2м) и бассейном.",sportsCluster:"Спортивный кластер: воркаут, теннисный корт, футбольное поле",promenade:"Прогулочная набережная и пирс — 1.2 км",kidsClub:"Детский клуб — 450 м²",parking:"2 гостевых паркинга и центральный КПП",smartTitle:"SMART-СЕРВИСЫ",smartSubtitle:"ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ В РЕАЛЬНОМ ВРЕМЕНИ",airQuality:"Чистота воздуха (AQI)",greenEnergy:"Доля солнечной генерации",reservationsActive:"Активные бронирования визитов",close:"Закрыть",successMsg:"Заявка успешно принята в закрытую систему. Наш консьерж свяжется с вами в течение 10 минут."},EN:{title:"VERDE RESERVE",subtitle:"Elite Forest Reserve & Cottage Community",tagline:"A private gated community blending the absolute serenity of nature with seamless metropolitan high-tech infrastructure.",navConcept:"Concept",navPlan:"Development Plan",navYield:"Financial Yield",navResidences:"Residences",navPortal:"Investor Hub",bookTour:"Book Private Tour",totalTerritory:"Total Area",totalTerritoryDesc:"Unspoiled natural forest reserve fully enclosed and protected.",residentialTerritory:"Residential Land",residentialTerritoryDesc:"Harmoniously integrated luxury plots, preserving mature pine landscape.",avgPlotSize:"Average Plot Size",avgPlotSizeDesc:"Generous forest allocations ensuring absolute privacy and distance.",residencesCount:"Total Properties",residencesCountDesc:"A limited, highly curated collection of architectural masterpieces.",conceptTitle:"CONCEPT",conceptSubtitle:"HARMONY OF NATURE & ECO-DESIGN",planTitle:"ZONING PLAN",planSubtitle:"THOUGHTFUL LAND ALLOCATION",planCenterText:"METICULOUS TERRITORY ZONING: PRIVATE RESIDENTIAL BLOCKS, PUBLIC WATERFRONT SPACES, AND ACTIVE SPORTS PARK",yieldTitle:"INVESTMENT YIELD",yieldSubtitle:"FINANCIAL FORECAST & GROWTH",yieldText:"Average luxury cottage rental (160-180 m²) on Novorizhskoye Highway spans 180,000 – 250,000 ₽/month.",yieldGoal:"Potential annual rental income for a standard villa reaches up to",yieldGoalVal:"2.8M ₽",yieldPercent:"Providing a guaranteed conservative yield of",yieldPercentVal:"9-11% PER ANNUM",yieldBottomText:"BASED ON CURRENT EARLY-ENTRY VALUATIONS",calcTitle:"Yield & ROI Engine",calcPropertyPrice:"Property Valuation",calcMonthlyRent:"Projected Monthly Rent",calcOccupancy:"Occupancy Rate",calcAnnualIncome:"Projected Annual Return",calcRoi:"Net Return on Investment (ROI)",calcPayback:"Estimated Payback Period",savePortfolio:"Log Valuation to Live Ledger",recentDeals:"Live Investor Activity",privateTourTitle:"Exquisite Private Visit",privateTourDesc:"Select your preferred arrival. We coordinate white-glove executive transportation.",helicopter:"Helicopter Transfer from Myakinino Heliport",maybach:"Executive Chauffeur (Mercedes-Maybach S-Class)",selfArrival:"Private Vehicle Entry via Digital VIP Pass",fullName:"Full Name",phone:"Phone Number",submitTour:"Request Elite Priority Access",residencesTitle:"ARCHITECTURES",residencesSubtitle:"SIGNATURE VILLAS",typeA:"Cottages Type 'A' (Business) — 85 Units",typeADesc:"Ideal spatial flow with custom floor-to-ceiling glass. Expansive decks leading straight to the woodlands.",typeB:"Cottages Type 'B' (Premium) — 50 Units",typeBDesc:"Palatial multi-generational estates featuring master wellness spas, 4.2m ceilings, and negative-edge heated pools.",sportsCluster:"Sports Cluster: Pro Gym, Tennis Courts, Soccer Turf",promenade:"Lakeside Promenade & Boat Dock — 1.2 KM",kidsClub:"Forest Explorers Kids Club — 450 m²",parking:"Dual Guest Helipads, Parking & Executive Checkpoint",smartTitle:"RESIDENTIAL API",smartSubtitle:"REAL-TIME ECOLOGICAL & METRIC DASHBOARD",airQuality:"Air Purity Index (AQI)",greenEnergy:"Solar Grid Integration",reservationsActive:"Active Guest Screenings",close:"Close",successMsg:"Your registration has been locked. An estate manager will connect shortly."}};function Yy(){const[n,e]=te.useState("RU"),t=Cy[n],[r,s]=te.useState("concept"),[o,a]=te.useState("residential"),[c,d]=te.useState("cottageA"),[f,m]=te.useState(24e6),[x,A]=te.useState(21e4),[R,k]=te.useState(82),[V,C]=te.useState("A"),[L,$]=te.useState(null),[H,X]=te.useState(!1),[Ae,ne]=te.useState("maybach"),[E,g]=te.useState(""),[y,v]=te.useState(""),[w,I]=te.useState(!1),[_,Ve]=te.useState(null),[at,Ns]=te.useState([]),[bt,At]=te.useState([]),[zt,wn]=te.useState(null),[xn,Le]=te.useState(98),[ae,Ss]=te.useState(74),[Rt,Ps]=te.useState([]);te.useEffect(()=>{const D=Array.from({length:30}).map((he,Ge)=>({id:Ge,left:Math.random()*100,top:Math.random()*100,size:Math.random()*6+2,delay:Math.random()*10,duration:Math.random()*20+15,opacity:Math.random()*.4+.1}));Ps(D);const re=setInterval(()=>{Le(he=>Math.min(100,Math.max(94,he+(Math.random()*2-1)))),Ss(he=>Math.min(100,Math.max(60,he+(Math.random()*4-2))))},5e3);return()=>clearInterval(re)},[]),te.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await lp(ci,__initial_auth_token):await rp(ci)}catch(he){console.error("Firebase Auth Error",he)}})();const re=hp(ci,he=>{Ve(he)});return()=>re()},[]),te.useEffect(()=>{if(!_)return;const D=Dl(Lr(Fr,"artifacts",Ur,"public","data","investments")),re=Ml(D,We=>{const Nt=[];We.forEach(lt=>{Nt.push({id:lt.id,...lt.data()})}),Ns(Nt.slice(-10))},We=>console.error("Firestore loading error: ",We)),he=Dl(Lr(Fr,"artifacts",Ur,"public","data","tours")),Ge=Ml(he,We=>{const Nt=[];We.forEach(lt=>{Nt.push({id:lt.id,...lt.data()})}),At(Nt.slice(-8))},We=>console.error("Firestore tours loading error: ",We));return()=>{re(),Ge()}},[_]);const Gt=async()=>{if(_)try{const D=Math.round(x*12*(R/100)),re=(D/f*100).toFixed(1),he={investorLabel:`Investor-${Math.floor(1e3+Math.random()*9e3)}`,propertyPrice:f,monthlyRent:x,occupancyRate:R,annualIncome:D,roi:Number(re),timestamp:Date.now()};await jl(Lr(Fr,"artifacts",Ur,"public","data","investments"),he),gr(n==="RU"?"Портфель сохранен в глобальном реестре!":"Investment layout logged to global registry!")}catch(D){console.error("Error logging investment",D)}},Cs=async D=>{if(D.preventDefault(),!(!E||!y)&&_)try{const re={name:E,phone:y,method:Ae,timestamp:Date.now(),status:"Approved"};await jl(Lr(Fr,"artifacts",Ur,"public","data","tours"),re),I(!0),g(""),v(""),setTimeout(()=>{I(!1),X(!1)},4e3)}catch(re){console.error("Error logging tour booking",re)}},gr=D=>{wn(D),setTimeout(()=>{wn(null)},4e3)},ue=Math.round(x*12*(R/100)),Wt=(ue/f*100).toFixed(1),Tn=(f/ue).toFixed(1);return u.jsxs("div",{className:"min-h-screen bg-[#060D08] text-white font-sans relative overflow-hidden select-none selection:bg-[#D99E30]/30 selection:text-white",children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden z-10",children:Rt.map(D=>u.jsx("div",{className:"absolute rounded-full bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-float",style:{left:`${D.left}%`,top:`${D.top}%`,width:`${D.size}px`,height:`${D.size}px`,animationDelay:`${D.delay}s`,animationDuration:`${D.duration}s`,opacity:D.opacity}},D.id))}),u.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-gradient-radial from-emerald-950/40 via-transparent to-transparent pointer-events-none z-0"}),u.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-gradient-radial from-amber-950/25 via-transparent to-transparent pointer-events-none z-0"}),zt&&u.jsxs("div",{className:"fixed bottom-6 right-6 z-50 bg-[#0E1B12] border border-[#D99E30]/40 px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-fade-in-up backdrop-blur-md",children:[u.jsx(Ih,{className:"text-[#D99E30] animate-pulse w-5 h-5"}),u.jsx("span",{className:"text-sm tracking-wider text-stone-200 font-light",children:zt})]}),u.jsx("header",{className:"sticky top-0 z-40 bg-[#060D08]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>s("concept"),children:[u.jsxs("div",{className:"relative w-10 h-10 rounded-lg bg-gradient-to-tr from-[#142A1C] to-[#254F35] border border-[#D99E30]/30 flex items-center justify-center overflow-hidden group",children:[u.jsx(Js,{className:"w-5 h-5 text-[#D99E30] group-hover:scale-110 transition-transform duration-500"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-transparent via-[#D99E30]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"})]}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-lg font-bold tracking-[0.25em] text-white",children:"VERDE"}),u.jsx("p",{className:"text-[9px] tracking-[0.4em] text-[#D99E30] font-light -mt-1",children:"RESERVE"})]})]}),u.jsx("nav",{className:"hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 p-1 rounded-full border border-white/5",children:[{id:"concept",label:t.navConcept},{id:"plan",label:t.navPlan},{id:"residences",label:t.navResidences},{id:"yield",label:t.navYield},{id:"portal",label:t.navPortal}].map(D=>u.jsx("button",{onClick:()=>s(D.id),className:`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${r===D.id?"bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black shadow-lg shadow-[#D99E30]/20 font-semibold":"text-stone-400 hover:text-white hover:bg-white/5"}`,children:D.label},D.id))}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"hidden lg:flex items-center space-x-4 text-[11px] font-mono tracking-widest text-stone-400 border-r border-white/10 pr-4",children:[u.jsxs("div",{className:"flex items-center space-x-1",children:[u.jsx(Rh,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}),u.jsx("span",{children:"AQI:"}),u.jsxs("span",{className:"text-emerald-400 font-bold",children:[Math.round(xn),"%"]})]}),u.jsxs("div",{className:"flex items-center space-x-1",children:[u.jsx(Nh,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"SOLAR:"}),u.jsxs("span",{className:"text-amber-400 font-bold",children:[Math.round(ae),"%"]})]})]}),u.jsxs("button",{onClick:()=>{e(D=>D==="RU"?"EN":"RU"),gr(n==="RU"?"Language changed to English":"Язык изменен на Русский")},className:"px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs tracking-widest font-mono text-stone-300 hover:text-[#D99E30] hover:border-[#D99E30]/30 transition-all",children:[u.jsx(Sh,{className:"w-3.5 h-3.5 inline mr-1"}),n]}),u.jsxs("button",{onClick:()=>X(!0),className:"px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#173020] to-[#0D1C12] border border-[#D99E30]/30 text-xs font-semibold tracking-wider uppercase text-white hover:border-[#D99E30] transition-all hover:shadow-[0_0_15px_rgba(217,158,48,0.2)] flex items-center space-x-2",children:[u.jsx(Ph,{className:"w-3.5 h-3.5 text-[#D99E30]"}),u.jsx("span",{className:"hidden sm:inline",children:t.bookTour})]})]})]})}),u.jsxs("main",{className:"max-w-7xl mx-auto px-6 py-8 relative z-20",children:[r==="concept"&&u.jsxs("div",{className:"space-y-12 animate-fade-in",children:[u.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#09150E] to-[#040A06] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none",style:{backgroundImage:"url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200')",backgroundSize:"cover",backgroundPosition:"center"}}),u.jsx("div",{className:"absolute top-[20%] left-[10%] w-[180px] h-[180px] bg-emerald-500/15 blur-[80px] rounded-full pointer-events-none"}),u.jsxs("div",{className:"space-y-6 max-w-xl z-10",children:[u.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/30",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D99E30] animate-ping"}),u.jsx("span",{className:"text-[10px] tracking-widest font-semibold text-[#D99E30] uppercase",children:"VERDE PRESENCE"})]}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-4xl md:text-6xl font-black tracking-[0.15em] text-white leading-none",children:t.conceptTitle}),u.jsx("p",{className:"text-xs tracking-[0.5em] text-[#D99E30] font-light uppercase mt-2",children:t.conceptSubtitle})]}),u.jsx("p",{className:"text-stone-300 font-light text-base md:text-lg leading-relaxed border-l-2 border-[#D99E30]/50 pl-4",children:t.tagline})]}),u.jsxs("div",{className:"relative w-full md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl z-10",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",alt:"Luxury Forest Villa",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"}),u.jsxs("div",{className:"absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10",children:[u.jsx("p",{className:"text-[10px] uppercase tracking-widest text-[#D99E30] font-semibold",children:"Location / Локация"}),u.jsx("p",{className:"text-xs text-white tracking-wider mt-0.5",children:"Новорижское шоссе, 45 км от МКАД / 45km from MKAD"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[u.jsxs("div",{onClick:()=>a("total"),className:`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${o==="total"?"border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]":"border-white/5 bg-[#080E0A] hover:border-white/20"}`,children:[u.jsx("div",{className:"absolute right-0 bottom-0 opacity-10 pointer-events-none",children:u.jsx(Js,{className:"w-32 h-32 text-emerald-600"})}),u.jsx("p",{className:"text-5xl font-black tracking-tighter text-white",children:"24 ГА"}),u.jsx("div",{className:"h-0.5 w-12 bg-[#D99E30] my-4"}),u.jsx("h3",{className:"text-xs tracking-widest uppercase font-semibold text-[#D99E30]",children:t.totalTerritory}),u.jsx("p",{className:"text-stone-400 text-xs font-light mt-2 leading-relaxed",children:t.totalTerritoryDesc}),o==="total"&&u.jsx("div",{className:"absolute top-3 right-3 text-[#D99E30] animate-pulse",children:u.jsx(Ce,{className:"w-4 h-4"})})]}),u.jsxs("div",{onClick:()=>a("residential"),className:`relative rounded-2xl p-8 cursor-pointer transition-all duration-500 overflow-hidden ${o==="residential"?"bg-gradient-to-b from-[#D99E30] to-[#B07E20] text-black shadow-[0_0_40px_rgba(217,158,48,0.3)] scale-[1.02]":"border border-white/5 bg-[#080E0A] hover:border-white/20"}`,children:[u.jsx("p",{className:`text-5xl font-black tracking-tighter ${o==="residential"?"text-black":"text-white"}`,children:"16 ГА"}),u.jsx("div",{className:`h-0.5 w-12 my-4 ${o==="residential"?"bg-black":"bg-[#D99E30]"}`}),u.jsx("h3",{className:`text-xs tracking-widest uppercase font-bold ${o==="residential"?"text-stone-900":"text-[#D99E30]"}`,children:t.residentialTerritory}),u.jsx("p",{className:`text-xs font-light mt-2 leading-relaxed ${o==="residential"?"text-stone-900/90":"text-stone-400"}`,children:t.residentialTerritoryDesc}),o==="residential"&&u.jsx("div",{className:"absolute top-3 right-3 text-black",children:u.jsx(Ce,{className:"w-4 h-4"})})]}),u.jsxs("div",{onClick:()=>a("plot"),className:`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${o==="plot"?"border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]":"border-white/5 bg-[#080E0A] hover:border-white/20"}`,children:[u.jsx("p",{className:"text-5xl font-black tracking-tighter text-white",children:"12 СОТОК"}),u.jsx("div",{className:"h-0.5 w-12 bg-[#D99E30] my-4"}),u.jsx("h3",{className:"text-xs tracking-widest uppercase font-semibold text-[#D99E30]",children:t.avgPlotSize}),u.jsx("p",{className:"text-stone-400 text-xs font-light mt-2 leading-relaxed",children:t.avgPlotSizeDesc}),o==="plot"&&u.jsx("div",{className:"absolute top-3 right-3 text-[#D99E30] animate-pulse",children:u.jsx(Ce,{className:"w-4 h-4"})})]}),u.jsxs("div",{onClick:()=>a("houses"),className:`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${o==="houses"?"border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]":"border-white/5 bg-[#080E0A] hover:border-white/20"}`,children:[u.jsx("p",{className:"text-5xl font-black tracking-tighter text-white",children:"135 ШТ."}),u.jsx("div",{className:"h-0.5 w-12 bg-[#D99E30] my-4"}),u.jsx("h3",{className:"text-xs tracking-widest uppercase font-semibold text-[#D99E30]",children:t.residencesCount}),u.jsx("p",{className:"text-stone-400 text-xs font-light mt-2 leading-relaxed",children:t.residencesCountDesc}),o==="houses"&&u.jsx("div",{className:"absolute top-3 right-3 text-[#D99E30] animate-pulse",children:u.jsx(Ce,{className:"w-4 h-4"})})]})]}),u.jsxs("div",{className:"rounded-2xl border border-white/5 bg-[#080F0B] p-6 md:p-8 shadow-xl animate-fade-in relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full"}),o==="total"&&u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Flora Preservation / Флора"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Заповедный сосновый бор"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Более 85% территории покрыто взрослыми хвойными деревьями высотой до 25 метров. Каждое дерево прошло лазерное сканирование для минимизации воздействия при строительстве."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Elevation / Ландшафт"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Перепады высот до 18м"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Естественный холмистый ландшафт выгодно подчеркивает видовые характеристики каждого участка, предотвращая избыточное скопление влаги и создавая приватные ниши."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Ecology / Чистота"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Экологический сертификат A+"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Качество воздуха соответствует нормативам лучших швейцарских лесных курортов. Отсутствие промышленных предприятий на расстоянии 70 км по розе ветров."})]})]}),o==="residential"&&u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase",children:"Masterplan / План"}),u.jsx("h4",{className:"text-lg font-bold text-[#D99E30] uppercase",children:"Умное межевание"}),u.jsx("p",{className:"text-stone-200 text-xs font-light leading-relaxed",children:'Вся жилая площадь спроектирована по системе кластеров, разделенных зелеными буферными коридорами шириной не менее 15 метров, что исключает эффект "окна в окна".'})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase",children:"Roads / Инфраструктура"}),u.jsx("h4",{className:"text-lg font-bold text-[#D99E30] uppercase",children:"Широкие бульвары"}),u.jsx("p",{className:"text-stone-200 text-xs font-light leading-relaxed",children:"Асфальтовое покрытие премиального класса шириной 7 метров с велодорожками, прогулочными тротуарами из колотой гранитной брусчатки и скрытой ливневой канализацией."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase",children:"Utilities / Коммуникации"}),u.jsx("h4",{className:"text-lg font-bold text-[#D99E30] uppercase",children:"Подземная инженерия"}),u.jsx("p",{className:"text-stone-200 text-xs font-light leading-relaxed",children:"Все коммуникации (электричество 20-30 кВт на участок, оптоволоконный интернет, магистральный газ, центральное водоснабжение и канализация) проложены под землей."})]})]}),o==="plot"&&u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Plot Boundaries / Межи"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Отсутствие глухих заборов"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Для сохранения единой гармоничной экосистемы границы участков оформляются живыми изгородями из туй, можжевельника и низкого светопрозрачного 3D-ограждения."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Individual Design / Дизайн"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Код застройки FL-12"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Каждый участок допускает интеграцию индивидуального ландшафтного дизайна с условием сохранения не менее 60% взрослых хвойных насаждений на пятне застройки."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Solitude / Уединение"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Приватные выходы в лес"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Участки первой линии имеют собственные калитки с бесконтактным биометрическим доступом непосредственно в заповедную зону лесного массива."})]})]}),o==="houses"&&u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Styles / Архитектура"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Органический модернизм"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Используются только благородные долговечные материалы: сибирская лиственница планкен, натуральный сланец, керамогранит увеличенного формата и закаленное стекло."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Smart Control / Умный Дом"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Интеграция по умолчанию"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Каждая вилла оснащена контроллерами защиты от протечек, умным отоплением, датчиками присутствия и единым центром мониторинга с интеграцией в Apple HomeKit / Алису."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Glazing / Остекление"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:"Портальные системы Schüco"}),u.jsx("p",{className:"text-stone-400 text-xs font-light leading-relaxed",children:"Энергоэффективные двухкамерные стеклопакеты с аргоновым наполнением и нано-напылением серебра, отражающим избыточный ультрафиолет летом и сохраняющим тепло зимой."})]})]})]}),u.jsx("div",{className:"flex justify-center pt-4",children:u.jsxs("button",{onClick:()=>s("plan"),className:"group px-8 py-4 rounded-xl bg-gradient-to-r from-[#11261A] to-[#0A160F] border border-white/10 hover:border-[#D99E30]/40 text-sm font-semibold tracking-wider uppercase text-white hover:text-[#D99E30] transition-all duration-300 flex items-center space-x-3 shadow-xl",children:[u.jsx("span",{children:"Перейти к интерактивному плану застройки"}),u.jsx(Ch,{className:"w-4 h-4 text-[#D99E30] group-hover:translate-x-1.5 transition-transform"})]})})]}),r==="plan"&&u.jsxs("div",{className:"space-y-12 animate-fade-in",children:[u.jsxs("div",{className:"text-center space-y-3 max-w-2xl mx-auto",children:[u.jsxs("div",{className:"inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20",children:[u.jsx(kh,{className:"w-4 h-4 text-[#D99E30] inline mr-1 animate-spin-slow"}),u.jsx("span",{className:"text-[10px] tracking-widest font-mono text-[#D99E30] uppercase",children:"Interactive Map / Интерактивная карта"})]}),u.jsx("h2",{className:"text-3xl md:text-5xl font-black tracking-wider text-white uppercase",children:t.planTitle}),u.jsx("p",{className:"text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase",children:t.planSubtitle})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative",children:[u.jsxs("div",{className:"lg:col-span-7 flex justify-center items-center py-6 relative min-h-[450px]",children:[u.jsx("div",{className:"absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-white/5 animate-spin-slow"}),u.jsx("div",{className:"absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-[#D99E30]/10"}),u.jsxs("div",{className:"relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-2 border-[#D99E30] shadow-[0_0_30px_rgba(217,158,48,0.25)] bg-[#0A160F] z-10 p-2 flex flex-col items-center justify-center text-center",children:[u.jsx("div",{className:"absolute inset-0 opacity-40 mix-blend-overlay",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400",alt:"Luxury construction details",className:"w-full h-full object-cover"})}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A160F]/90"}),u.jsxs("div",{className:"relative z-10 px-4 space-y-2",children:[u.jsx("p",{className:"text-[9px] tracking-widest text-[#D99E30] uppercase font-bold",children:"Verde Hub"}),u.jsx("p",{className:"text-[11px] md:text-xs text-stone-200 font-light leading-relaxed",children:t.planCenterText})]})]}),[{id:"cottageA",label:"Тип А (Бизнес)",angle:0,x:"82%",y:"50%"},{id:"sports",label:"Спортивный кластер",angle:60,x:"66%",y:"16%"},{id:"promenade",label:"Набережная (1.2км)",angle:120,x:"34%",y:"16%"},{id:"parking",label:"КПП и Паркинг",angle:180,x:"18%",y:"50%"},{id:"cottageB",label:"Тип Б (Премиум)",angle:240,x:"34%",y:"84%"},{id:"kidsClub",label:"Детский клуб",angle:300,x:"66%",y:"84%"}].map(D=>{const re=c===D.id;return u.jsxs("button",{onClick:()=>d(D.id),style:{left:D.x,top:D.y},className:"absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 flex flex-col items-center group",children:[u.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${re?"bg-[#D99E30] text-black border-white shadow-[0_0_20px_rgba(217,158,48,0.5)] scale-125":"bg-[#0E1B12] text-stone-400 border-white/10 group-hover:border-[#D99E30]/50 group-hover:scale-110"}`,children:u.jsx("span",{className:"text-[11px] font-mono font-bold",children:D.id==="cottageA"?"A":D.id==="cottageB"?"B":D.id==="sports"?"SP":D.id==="promenade"?"PR":D.id==="parking"?"PK":"KC"})}),re&&u.jsx("div",{className:"absolute w-[2px] bg-gradient-to-t from-[#D99E30] to-transparent h-12 bottom-9 pointer-events-none animate-pulse"}),u.jsx("span",{className:`text-[9px] md:text-[10px] tracking-wider uppercase font-medium mt-1.5 px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${re?"bg-[#D99E30]/20 text-[#D99E30] border border-[#D99E30]/30 font-semibold":"bg-black/40 text-stone-300 group-hover:text-white"}`,children:D.label})]},D.id)})]}),u.jsxs("div",{className:"lg:col-span-5 space-y-6 z-10",children:[u.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#D99E30]/10 border border-[#D99E30]/20",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#D99E30] animate-pulse"}),u.jsx("span",{className:"text-[10px] tracking-widest text-[#D99E30] font-mono uppercase",children:"Zone Breakdown / Описание зоны"})]}),c==="cottageA"&&u.jsxs("div",{className:"space-y-4 animate-fade-in",children:[u.jsx("h3",{className:"text-2xl font-bold tracking-wide text-white",children:t.typeA}),u.jsx("p",{className:"text-stone-300 font-light text-sm leading-relaxed",children:t.typeADesc}),u.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 relative h-[180px]",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",alt:"Cottage Type A",className:"w-full h-full object-cover"})}),u.jsxs("ul",{className:"grid grid-cols-2 gap-3 text-xs text-stone-300 font-light font-mono",children:[u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Площадь: 160-180 м²"})]}),u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Этажность: 2"})]}),u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Участок: 8-12 соток"})]}),u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Каминный зал"})]})]})]}),c==="cottageB"&&u.jsxs("div",{className:"space-y-4 animate-fade-in",children:[u.jsx("h3",{className:"text-2xl font-bold tracking-wide text-[#D99E30]",children:t.typeB}),u.jsx("p",{className:"text-stone-200 font-light text-sm leading-relaxed",children:t.typeBDesc}),u.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 relative h-[180px]",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",alt:"Cottage Type B",className:"w-full h-full object-cover"})}),u.jsxs("ul",{className:"grid grid-cols-2 gap-3 text-xs text-stone-200 font-light font-mono",children:[u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Площадь: 220-250 м²"})]}),u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Спа-зона & бассейн"})]}),u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Участок: 12-16 соток"})]}),u.jsxs("li",{className:"flex items-center space-x-1.5",children:[u.jsx(Ce,{className:"w-3.5 h-3.5 text-[#D99E30]"})," ",u.jsx("span",{children:"Второй свет"})]})]})]}),c==="sports"&&u.jsxs("div",{className:"space-y-4 animate-fade-in",children:[u.jsx("h3",{className:"text-2xl font-bold tracking-wide text-white",children:t.sportsCluster}),u.jsx("p",{className:"text-stone-300 font-light text-sm leading-relaxed",children:"Современная спортивная арена под открытым небом с профессиональным полиуретановым покрытием премиум-класса, освещением в темное время суток и зоной уличных тренажеров воркаут."}),u.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 relative h-[180px]",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600",alt:"Sports Turf",className:"w-full h-full object-cover"})})]}),c==="promenade"&&u.jsxs("div",{className:"space-y-4 animate-fade-in",children:[u.jsx("h3",{className:"text-2xl font-bold tracking-wide text-white",children:t.promenade}),u.jsx("p",{className:"text-stone-300 font-light text-sm leading-relaxed",children:"Благоустроенный променад из лиственницы вдоль чистого лесного озера. Пляжная зона с шезлонгами, лодочным причалом и террасами для занятий утренней йогой."}),u.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 relative h-[180px]",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600",alt:"Lake Promenade",className:"w-full h-full object-cover"})})]}),c==="kidsClub"&&u.jsxs("div",{className:"space-y-4 animate-fade-in",children:[u.jsx("h3",{className:"text-2xl font-bold tracking-wide text-white",children:t.kidsClub}),u.jsx("p",{className:"text-stone-300 font-light text-sm leading-relaxed",children:"Инновационное детское пространство, ориентированное на развитие творческого мышления по системе Монтессори. Детские городки из натурального дерева от ведущих европейских бюро."}),u.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 relative h-[180px]",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600",alt:"Kids Playground",className:"w-full h-full object-cover"})})]}),c==="parking"&&u.jsxs("div",{className:"space-y-4 animate-fade-in",children:[u.jsx("h3",{className:"text-2xl font-bold tracking-wide text-white",children:t.parking}),u.jsx("p",{className:"text-stone-300 font-light text-sm leading-relaxed",children:"Безопасность высшего уровня обеспечивается собственной военизированной службой охраны. Автоматизированные КПП с распознаванием номеров, тепловизорами и гостевыми зарядками для электромобилей."}),u.jsx("div",{className:"rounded-xl overflow-hidden border border-white/10 relative h-[180px]",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600",alt:"Smart Security",className:"w-full h-full object-cover"})})]}),u.jsx("button",{onClick:()=>s("residences"),className:"w-full py-3 text-center text-xs tracking-wider uppercase font-semibold bg-white/5 hover:bg-[#D99E30]/10 border border-white/10 hover:border-[#D99E30]/40 text-stone-200 hover:text-[#D99E30] rounded-xl transition-all",children:"Исследовать планировки резиденций"})]})]})]}),r==="residences"&&u.jsxs("div",{className:"space-y-12 animate-fade-in",children:[u.jsxs("div",{className:"text-center space-y-3 max-w-2xl mx-auto",children:[u.jsxs("div",{className:"inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20",children:[u.jsx(Dh,{className:"w-4 h-4 text-[#D99E30] inline mr-1"}),u.jsx("span",{className:"text-[10px] tracking-widest font-mono text-[#D99E30] uppercase",children:"Architectural Range / Каталог"})]}),u.jsx("h2",{className:"text-3xl md:text-5xl font-black tracking-wider text-white uppercase",children:t.residencesTitle}),u.jsx("p",{className:"text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase",children:t.residencesSubtitle})]}),u.jsx("div",{className:"flex justify-center",children:u.jsxs("div",{className:"inline-flex bg-white/5 p-1.5 rounded-xl border border-white/10",children:[u.jsx("button",{onClick:()=>C("A"),className:`px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${V==="A"?"bg-[#D99E30] text-black shadow-lg shadow-[#D99E30]/20":"text-stone-300 hover:text-white"}`,children:"Type A (Business)"}),u.jsx("button",{onClick:()=>C("B"),className:`px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${V==="B"?"bg-[#D99E30] text-black shadow-lg shadow-[#D99E30]/20":"text-stone-300 hover:text-white"}`,children:"Type B (Premium)"})]})}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl items-center",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center space-y-6",children:[u.jsx("span",{className:"text-xs font-mono tracking-widest text-[#D99E30] uppercase",children:"Interactive Floorplan Layout / Интерактивный интерактивный план (Наведите на зоны)"}),u.jsx("div",{className:"relative w-full max-w-[450px] aspect-square bg-black/40 rounded-2xl border border-white/10 p-6 flex items-center justify-center",children:u.jsxs("svg",{viewBox:"0 0 400 400",className:"w-full h-full text-stone-300",children:[u.jsx("rect",{x:"20",y:"20",width:"360",height:"360",rx:"16",fill:"none",stroke:"#D99E30",strokeWidth:"2.5",strokeDasharray:"6 6",className:"opacity-40"}),u.jsxs("g",{onMouseEnter:()=>$("living"),onMouseLeave:()=>$(null),className:"cursor-pointer group",children:[u.jsx("rect",{x:"40",y:"40",width:"150",height:"150",rx:"8",fill:L==="living"?"rgba(217,158,48,0.25)":"rgba(255,255,255,0.03)",stroke:L==="living"?"#D99E30":"rgba(255,255,255,0.15)",strokeWidth:"1.5",className:"transition-all duration-300"}),u.jsx("text",{x:"115",y:"110",textAnchor:"middle",className:`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${L==="living"?"fill-[#D99E30]":"fill-stone-400"}`,children:n==="RU"?"Гостиная":"Living Room"}),u.jsx("circle",{cx:"115",cy:"80",r:"16",fill:"rgba(255,255,255,0.05)",className:"group-hover:scale-110 transition-transform"}),u.jsx("text",{x:"115",y:"84",textAnchor:"middle",fill:"#D99E30",className:"text-[10px] font-mono",children:"1"})]}),u.jsxs("g",{onMouseEnter:()=>$("bedroom"),onMouseLeave:()=>$(null),className:"cursor-pointer group",children:[u.jsx("rect",{x:"210",y:"40",width:"150",height:"150",rx:"8",fill:L==="bedroom"?"rgba(217,158,48,0.25)":"rgba(255,255,255,0.03)",stroke:L==="bedroom"?"#D99E30":"rgba(255,255,255,0.15)",strokeWidth:"1.5",className:"transition-all duration-300"}),u.jsx("text",{x:"285",y:"110",textAnchor:"middle",className:`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${L==="bedroom"?"fill-[#D99E30]":"fill-stone-400"}`,children:n==="RU"?"Мастер-Спальня":"Master Suite"}),u.jsx("circle",{cx:"285",cy:"80",r:"16",fill:"rgba(255,255,255,0.05)",className:"group-hover:scale-110 transition-transform"}),u.jsx("text",{x:"285",y:"84",textAnchor:"middle",fill:"#D99E30",className:"text-[10px] font-mono",children:"2"})]}),u.jsxs("g",{onMouseEnter:()=>$("spa"),onMouseLeave:()=>$(null),className:"cursor-pointer group",children:[u.jsx("rect",{x:"40",y:"210",width:"150",height:"150",rx:"8",fill:L==="spa"?"rgba(217,158,48,0.25)":"rgba(255,255,255,0.03)",stroke:L==="spa"?"#D99E30":"rgba(255,255,255,0.15)",strokeWidth:"1.5",className:"transition-all duration-300"}),u.jsx("text",{x:"115",y:"280",textAnchor:"middle",className:`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${L==="spa"?"fill-[#D99E30]":"fill-stone-400"}`,children:n==="RU"?"Спа-сауна":"Spa & Bathhouse"}),u.jsx("circle",{cx:"115",cy:"250",r:"16",fill:"rgba(255,255,255,0.05)",className:"group-hover:scale-110 transition-transform"}),u.jsx("text",{x:"115",y:"254",textAnchor:"middle",fill:"#D99E30",className:"text-[10px] font-mono",children:"3"})]}),u.jsxs("g",{onMouseEnter:()=>$("terrace"),onMouseLeave:()=>$(null),className:"cursor-pointer group",children:[u.jsx("rect",{x:"210",y:"210",width:"150",height:"150",rx:"8",fill:L==="terrace"?"rgba(217,158,48,0.25)":"rgba(255,255,255,0.03)",stroke:L==="terrace"?"#D99E30":"rgba(255,255,255,0.15)",strokeWidth:"1.5",className:"transition-all duration-300"}),u.jsx("text",{x:"285",y:"280",textAnchor:"middle",className:`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${L==="terrace"?"fill-[#D99E30]":"fill-stone-400"}`,children:n==="RU"?"Лесная Терраса":"Forest Terrace"}),u.jsx("circle",{cx:"285",cy:"250",r:"16",fill:"rgba(255,255,255,0.05)",className:"group-hover:scale-110 transition-transform"}),u.jsx("text",{x:"285",y:"254",textAnchor:"middle",fill:"#D99E30",className:"text-[10px] font-mono",children:"4"})]})]})})]}),u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black tracking-wider text-white",children:V==="A"?"COTTAGE TYPE A":"COTTAGE TYPE B"}),u.jsx("p",{className:"text-xs text-[#D99E30] tracking-widest uppercase font-mono mt-1",children:V==="A"?"Business Class Base / Бизнес-Линия":"Presidential Premium / Премиум-Усадьба"})]}),u.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between",children:[L?u.jsxs("div",{className:"space-y-3 animate-fade-in",children:[u.jsx("span",{className:"text-[10px] text-[#D99E30] font-mono tracking-widest uppercase bg-[#D99E30]/10 px-2 py-0.5 rounded",children:"Active Room Explorer / Секция планировки"}),L==="living"&&u.jsxs(u.Fragment,{children:[u.jsx("h4",{className:"text-lg font-bold text-white",children:"Гостиная с Остеклением 360°"}),u.jsx("p",{className:"text-xs text-stone-300 font-light leading-relaxed",children:"Площадь составляет 45-55 м². Усиленная стальная рама Schüco обеспечивает панорамный обзор на верхушки соснового леса. Высота потолков варьируется от 3.6 до 4.2 метров. Укомплектован каминным порталом из итальянского мрамора."})]}),L==="bedroom"&&u.jsxs(u.Fragment,{children:[u.jsx("h4",{className:"text-lg font-bold text-white",children:"Мастер-Спальня со Скрытой Гардеробной"}),u.jsx("p",{className:"text-xs text-stone-300 font-light leading-relaxed",children:"Площадь 30 м² с персональным выходом в просторный санузел, облицованный натуральным травертином, и автоматизированными шторами-блэкаут."})]}),L==="spa"&&u.jsxs(u.Fragment,{children:[u.jsx("h4",{className:"text-lg font-bold text-white",children:"Индивидуальная Термальная Студия"}),u.jsx("p",{className:"text-xs text-stone-300 font-light leading-relaxed",children:"SPA-зона с кедровой финской сауной, купелью с регулируемой температурой и премиальными сенсорными панелями управления влажностью."})]}),L==="terrace"&&u.jsxs(u.Fragment,{children:[u.jsx("h4",{className:"text-lg font-bold text-white",children:"Терраса из Сибирской Лиственницы"}),u.jsx("p",{className:"text-xs text-stone-300 font-light leading-relaxed",children:"Просторная палубная терраса с системой обогрева для комфортного круглогодичного отдыха и подготовленным местом для летней кухни-барбекю."})]})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center text-center space-y-3 py-8",children:[u.jsx(Vh,{className:"w-8 h-8 text-[#D99E30] animate-bounce"}),u.jsx("p",{className:"text-xs text-stone-400 font-light max-w-xs leading-relaxed",children:"Наведите курсор мыши на комнаты векторной схемы слева, чтобы изучить архитектурное наполнение и технические опции комнат."})]}),u.jsxs("div",{className:"border-t border-white/5 pt-4 mt-4 grid grid-cols-2 gap-4 text-xs font-mono text-stone-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"block text-stone-500 text-[9px] uppercase tracking-wider",children:"Foundation / База"}),u.jsx("span",{className:"font-semibold text-stone-200",children:"Монолитная плита 400мм"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"block text-stone-500 text-[9px] uppercase tracking-wider",children:"Insulation / Утепление"}),u.jsx("span",{className:"font-semibold text-stone-200",children:"Натуральный базальт Rockwool"})]})]})]}),u.jsx("div",{className:"space-y-3",children:u.jsxs("button",{onClick:()=>X(!0),className:"w-full py-4 bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black hover:shadow-lg hover:shadow-[#D99E30]/20 font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center space-x-2",children:[u.jsx("span",{children:"Забронировать очный VIP-показ резиденции"}),u.jsx(Oh,{className:"w-4 h-4"})]})})]})]})]}),r==="yield"&&u.jsxs("div",{className:"space-y-12 animate-fade-in",children:[u.jsxs("div",{className:"relative rounded-3xl overflow-hidden border border-[#D99E30]/30 bg-gradient-to-b from-[#09150E] to-[#040A06] p-8 md:p-12 shadow-2xl space-y-6",children:[u.jsx("div",{className:"absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none",style:{backgroundImage:"url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200')",backgroundSize:"cover"}}),u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 border-b border-white/10 pb-6",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-3xl md:text-5xl font-black tracking-wider text-white",children:t.yieldTitle}),u.jsx("p",{className:"text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase mt-1",children:t.yieldSubtitle})]}),u.jsxs("div",{className:"bg-[#D99E30]/10 border border-[#D99E30]/40 rounded-xl px-4 py-2 flex items-center space-x-2",children:[u.jsx(jh,{className:"w-5 h-5 text-[#D99E30]"}),u.jsx("span",{className:"text-xs font-mono tracking-widest text-[#D99E30] font-semibold",children:"ESTATE RETURN MODEL"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 pt-4",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("span",{className:"text-[10px] uppercase tracking-widest text-[#D99E30] font-mono",children:"Current Context / Контекст"}),u.jsx("p",{className:"text-sm font-light leading-relaxed text-stone-300",children:t.yieldText})]}),u.jsxs("div",{className:"space-y-2 border-l border-white/10 pl-0 md:pl-6",children:[u.jsx("span",{className:"text-[10px] uppercase tracking-widest text-[#D99E30] font-mono",children:"Potential Return / Потенциал"}),u.jsx("p",{className:"text-xs text-stone-400 font-light",children:t.yieldGoal}),u.jsx("p",{className:"text-3xl font-black tracking-tight text-white",children:t.yieldGoalVal})]}),u.jsxs("div",{className:"space-y-2 border-l border-white/10 pl-0 md:pl-6 bg-[#D99E30]/5 p-4 rounded-xl border border-[#D99E30]/10",children:[u.jsx("span",{className:"text-[10px] uppercase tracking-widest text-[#D99E30] font-mono",children:"Guaranteed Yield / Доходность %"}),u.jsx("p",{className:"text-xs text-stone-400 font-light",children:t.yieldPercent}),u.jsx("p",{className:"text-3xl font-black tracking-tight text-[#D99E30]",children:t.yieldPercentVal}),u.jsx("p",{className:"text-[9px] text-[#D99E30]/80 tracking-widest uppercase font-mono",children:t.yieldBottomText})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[u.jsxs("div",{className:"lg:col-span-6 space-y-6 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(Mh,{className:"w-5 h-5 text-[#D99E30]"}),u.jsx("h3",{className:"text-lg font-bold text-white uppercase tracking-wider",children:t.calcTitle})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-xs tracking-wider",children:[u.jsx("span",{className:"text-stone-400 font-light",children:t.calcPropertyPrice}),u.jsxs("span",{className:"text-white font-mono font-bold",children:[f.toLocaleString()," ₽"]})]}),u.jsx("input",{type:"range",min:"15000000",max:"60000000",step:"500000",value:f,onChange:D=>m(Number(D.target.value)),className:"w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"}),u.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-stone-500",children:[u.jsx("span",{children:"15M ₽"}),u.jsx("span",{children:"35M ₽"}),u.jsx("span",{children:"60M ₽"})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-xs tracking-wider",children:[u.jsx("span",{className:"text-stone-400 font-light",children:t.calcMonthlyRent}),u.jsxs("span",{className:"text-[#D99E30] font-mono font-bold",children:[x.toLocaleString()," ₽ / мес"]})]}),u.jsx("input",{type:"range",min:"120000",max:"450000",step:"5000",value:x,onChange:D=>A(Number(D.target.value)),className:"w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"}),u.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-stone-500",children:[u.jsx("span",{children:"120k ₽"}),u.jsx("span",{children:"250k ₽"}),u.jsx("span",{children:"450k ₽"})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-xs tracking-wider",children:[u.jsx("span",{className:"text-stone-400 font-light",children:t.calcOccupancy}),u.jsxs("span",{className:"text-white font-mono font-bold",children:[R,"%"]})]}),u.jsx("input",{type:"range",min:"50",max:"100",step:"1",value:R,onChange:D=>k(Number(D.target.value)),className:"w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"}),u.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-stone-500",children:[u.jsx("span",{children:"50% (Консервативная)"}),u.jsx("span",{children:"80% (Средняя)"}),u.jsx("span",{children:"100% (Максимум)"})]})]}),u.jsxs("div",{className:"pt-4 space-y-3",children:[u.jsxs("button",{onClick:Gt,className:"w-full py-3.5 rounded-xl border border-[#D99E30]/40 hover:border-[#D99E30] bg-[#D99E30]/10 hover:bg-[#D99E30] text-white hover:text-black font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 shadow-xl",children:[u.jsx(Ce,{className:"w-4 h-4"}),u.jsx("span",{children:t.savePortfolio})]}),u.jsx("p",{className:"text-[10px] font-mono text-stone-500 text-center leading-relaxed",children:"*Расчет записывается в прозрачный децентрализованный реестр активности инвесторов Verde Hub."})]})]}),u.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"bg-[#080E0A] border border-white/5 rounded-2xl p-5 text-center",children:[u.jsx("span",{className:"text-[10px] text-stone-500 uppercase tracking-widest font-mono block mb-1",children:t.calcAnnualIncome}),u.jsxs("span",{className:"text-xl font-black text-white",children:[ue.toLocaleString()," ₽"]})]}),u.jsxs("div",{className:"bg-[#0A160F] border border-[#D99E30]/30 rounded-2xl p-5 text-center",children:[u.jsx("span",{className:"text-[10px] text-[#D99E30] uppercase tracking-widest font-mono block mb-1",children:t.calcRoi}),u.jsxs("span",{className:"text-2xl font-black text-[#D99E30]",children:[Wt,"%"]})]}),u.jsxs("div",{className:"bg-[#080E0A] border border-white/5 rounded-2xl p-5 text-center",children:[u.jsx("span",{className:"text-[10px] text-stone-500 uppercase tracking-widest font-mono block mb-1",children:t.calcPayback}),u.jsxs("span",{className:"text-xl font-black text-white",children:[Tn," лет"]})]})]}),u.jsxs("div",{className:"bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 rounded-3xl border border-white/5 shadow-2xl space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs font-mono tracking-widest text-stone-300 uppercase",children:"10-Year Cumulative Cash Flow Projection / Прогноз за 10 лет (Млн ₽)"}),u.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono",children:"Asset Growth + Rent"})]}),u.jsx("div",{className:"w-full h-[180px] relative",children:u.jsxs("svg",{viewBox:"0 0 500 150",className:"w-full h-full",children:[u.jsx("line",{x1:"10",y1:"130",x2:"490",y2:"130",stroke:"rgba(255,255,255,0.05)"}),u.jsx("line",{x1:"10",y1:"90",x2:"490",y2:"90",stroke:"rgba(255,255,255,0.05)"}),u.jsx("line",{x1:"10",y1:"50",x2:"490",y2:"50",stroke:"rgba(255,255,255,0.05)"}),u.jsx("line",{x1:"10",y1:"10",x2:"490",y2:"10",stroke:"rgba(255,255,255,0.05)"}),u.jsx("path",{d:`
                          M 10,130 
                          Q 100,${130-ue*2/1e6} 
                            200,${130-ue*4/1e6} 
                            300,${130-ue*6/1e6} 
                            400,${130-ue*8/1e6} 
                            490,${130-ue*10/1e6}
                        `,fill:"none",stroke:"#B07E20",strokeWidth:"2",strokeDasharray:"4 4"}),u.jsx("path",{d:`
                          M 10,130 
                          Q 100,${130-ue*2.5/1e6} 
                            200,${130-ue*5.5/1e6} 
                            300,${130-ue*8.8/1e6} 
                            400,${130-ue*12.5/1e6} 
                            490,${130-ue*17/1e6}
                        `,fill:"none",stroke:"#D99E30",strokeWidth:"3.5"}),u.jsx("circle",{cx:"10",cy:"130",r:"4",fill:"#D99E30"}),u.jsx("circle",{cx:"490",cy:`${130-ue*17/1e6}`,r:"5",fill:"#D99E30",className:"animate-pulse"}),u.jsx("text",{x:"10",y:"145",fill:"#8c8c8c",fontSize:"8",fontFamily:"monospace",children:"Год 0"}),u.jsx("text",{x:"250",y:"145",fill:"#8c8c8c",fontSize:"8",fontFamily:"monospace",textAnchor:"middle",children:"Год 5"}),u.jsx("text",{x:"490",y:"145",fill:"#8c8c8c",fontSize:"8",fontFamily:"monospace",textAnchor:"end",children:"Год 10"})]})}),u.jsxs("div",{className:"flex items-center space-x-6 text-[10px] font-mono text-stone-400",children:[u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("div",{className:"w-3 h-0.5 bg-[#D99E30]"}),u.jsx("span",{children:"Капитализация + Аренда"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("div",{className:"w-3 h-0.5 bg-[#B07E20] border-dashed"}),u.jsx("span",{children:"Только арендный поток"})]})]})]})]})]})]}),r==="portal"&&u.jsxs("div",{className:"space-y-12 animate-fade-in",children:[u.jsxs("div",{className:"text-center space-y-3 max-w-2xl mx-auto",children:[u.jsxs("div",{className:"inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20",children:[u.jsx(Lh,{className:"w-4 h-4 text-[#D99E30] inline mr-1"}),u.jsx("span",{className:"text-[10px] tracking-widest font-mono text-[#D99E30] uppercase",children:"Shared Ecosystem Ledger / Общий реестр"})]}),u.jsx("h2",{className:"text-3xl md:text-5xl font-black tracking-wider text-white uppercase",children:t.navPortal}),u.jsx("p",{className:"text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase",children:t.smartSubtitle})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[u.jsxs("div",{className:"lg:col-span-8 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-4",children:[u.jsx("h3",{className:"text-lg font-bold text-white uppercase tracking-wider",children:t.recentDeals}),u.jsx("span",{className:"text-xs font-mono text-[#D99E30]",children:"Live Synchronized Node"})]}),u.jsx("div",{className:"space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar",children:at.length===0?u.jsxs("div",{className:"flex flex-col items-center justify-center text-center py-16 space-y-2",children:[u.jsx(bh,{className:"w-10 h-10 text-stone-600 animate-pulse"}),u.jsx("p",{className:"text-xs text-stone-500 font-mono",children:"Ожидание входящих транзакций реестра..."})]}):at.map((D,re)=>{var he,Ge;return u.jsxs("div",{className:"p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#D99E30]/30 transition-all duration-300",children:[u.jsxs("div",{className:"space-y-1",children:[u.jsx("span",{className:"text-[10px] bg-[#D99E30]/20 text-[#D99E30] px-2 py-0.5 rounded font-mono font-semibold",children:D.investorLabel||"Anonymous ID"}),u.jsxs("p",{className:"text-xs text-stone-300 font-light mt-1",children:["Valuation: ",u.jsxs("strong",{className:"text-white",children:[(he=D.propertyPrice)==null?void 0:he.toLocaleString()," ₽"]})," | Monthly Target: ",u.jsxs("strong",{className:"text-white",children:[(Ge=D.monthlyRent)==null?void 0:Ge.toLocaleString()," ₽"]})]})]}),u.jsxs("div",{className:"text-right",children:[u.jsxs("span",{className:"text-xs text-[#D99E30] font-mono font-bold block",children:[D.roi,"% ROI"]}),u.jsx("span",{className:"text-[9px] text-stone-500 font-mono",children:new Date(D.timestamp).toLocaleTimeString()})]})]},D.id||re)})})]}),u.jsxs("div",{className:"lg:col-span-4 space-y-6",children:[u.jsxs("div",{className:"bg-[#080E0A] border border-[#D99E30]/20 rounded-3xl p-6 space-y-6",children:[u.jsx("h3",{className:"text-sm font-bold tracking-widest text-[#D99E30] uppercase font-mono",children:"ECO-GAUGES"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-xs",children:[u.jsx("span",{className:"text-stone-400",children:"Forest Air Purity Index"}),u.jsxs("span",{className:"text-emerald-400 font-bold",children:[Math.round(xn),"% Pure"]})]}),u.jsx("div",{className:"w-full bg-white/5 h-2 rounded-full overflow-hidden",children:u.jsx("div",{className:"bg-emerald-500 h-full transition-all duration-1000",style:{width:`${xn}%`}})})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-xs",children:[u.jsx("span",{className:"text-stone-400",children:"Solar Grid Generation"}),u.jsxs("span",{className:"text-amber-400 font-bold",children:[Math.round(ae),"% Capacity"]})]}),u.jsx("div",{className:"w-full bg-white/5 h-2 rounded-full overflow-hidden",children:u.jsx("div",{className:"bg-amber-500 h-full transition-all duration-1000",style:{width:`${ae}%`}})})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-xs",children:[u.jsx("span",{className:"text-stone-400",children:"Artesian Water Pressure"}),u.jsx("span",{className:"text-sky-400 font-bold",children:"4.8 Bar (Nominal)"})]}),u.jsx("div",{className:"w-full bg-white/5 h-2 rounded-full overflow-hidden",children:u.jsx("div",{className:"bg-sky-500 h-full",style:{width:"92%"}})})]})]}),u.jsxs("div",{className:"bg-gradient-to-b from-[#09150E] to-[#040A06] border border-white/5 p-6 rounded-3xl space-y-4",children:[u.jsx("h3",{className:"text-sm font-bold tracking-widest text-white uppercase font-mono",children:t.reservationsActive}),u.jsx("div",{className:"space-y-3",children:bt.slice(-4).map((D,re)=>u.jsxs("div",{className:"p-3 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-xs",children:[u.jsxs("div",{className:"space-y-0.5",children:[u.jsx("p",{className:"font-semibold text-white",children:D.name}),u.jsx("p",{className:"text-[10px] text-[#D99E30] font-mono tracking-wide uppercase",children:D.method==="helicopter"?"HELI-TRANSFER":D.method==="maybach"?"MAYBACH S-CLASS":"VIP ENTRY"})]}),u.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/25",children:"Active"})]},D.id||re))})]})]})]})]})]}),H&&u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in",children:u.jsxs("div",{className:"bg-[#09150E] border border-[#D99E30]/40 rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl space-y-6",children:[u.jsx("button",{onClick:()=>X(!1),className:"absolute top-4 right-4 text-stone-400 hover:text-white transition-all",children:u.jsx(Ah,{className:"w-6 h-6"})}),u.jsxs("div",{className:"text-center space-y-2",children:[u.jsx("div",{className:"inline-block p-3 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20",children:u.jsx(Fh,{className:"w-6 h-6 text-[#D99E30] animate-pulse"})}),u.jsx("h3",{className:"text-2xl font-bold tracking-wide text-white",children:t.privateTourTitle}),u.jsx("p",{className:"text-xs text-stone-300 font-light",children:t.privateTourDesc})]}),w?u.jsxs("div",{className:"p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2 animate-scale-up",children:[u.jsx(Uh,{className:"w-12 h-12 text-emerald-400 mx-auto"}),u.jsx("h4",{className:"text-lg font-bold text-white uppercase",children:n==="RU"?"Заявка принята":"Registered Successfully"}),u.jsx("p",{className:"text-xs text-stone-300 font-light leading-relaxed",children:t.successMsg})]}):u.jsxs("form",{onSubmit:Cs,className:"space-y-4",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-[10px] text-[#D99E30] uppercase font-mono tracking-widest block",children:"Транспорт / Transfer format"}),u.jsx("div",{className:"grid grid-cols-1 gap-2",children:[{id:"maybach",label:t.maybach},{id:"helicopter",label:t.helicopter},{id:"self",label:t.selfArrival}].map(D=>u.jsx("button",{type:"button",onClick:()=>ne(D.id),className:`p-3.5 rounded-xl text-xs font-semibold tracking-wider text-left transition-all border ${Ae===D.id?"bg-[#D99E30] text-black border-white shadow-lg":"bg-black/40 text-stone-300 border-white/5 hover:border-white/20"}`,children:D.label},D.id))})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"space-y-1",children:[u.jsx("label",{className:"text-[10px] text-stone-400 uppercase font-mono tracking-widest block",children:t.fullName}),u.jsx("input",{type:"text",required:!0,placeholder:"Алексей Иванов / Alexei Ivanov",value:E,onChange:D=>g(D.target.value),className:"w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D99E30] transition-all"})]}),u.jsxs("div",{className:"space-y-1",children:[u.jsx("label",{className:"text-[10px] text-stone-400 uppercase font-mono tracking-widest block",children:t.phone}),u.jsx("input",{type:"tel",required:!0,placeholder:"+7 (999) 000-00-00",value:y,onChange:D=>v(D.target.value),className:"w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D99E30] transition-all"})]})]}),u.jsx("button",{type:"submit",className:"w-full py-4 rounded-xl bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black font-bold text-xs tracking-widest uppercase transition-all shadow-xl hover:shadow-[#D99E30]/20",children:t.submitTour})]})]})}),u.jsxs("footer",{className:"border-t border-white/5 bg-[#030704] py-12 mt-16 relative z-20",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-8 h-8 rounded bg-gradient-to-tr from-[#142A1C] to-[#254F35] border border-[#D99E30]/30 flex items-center justify-center",children:u.jsx(Js,{className:"w-4 h-4 text-[#D99E30]"})}),u.jsx("h4",{className:"text-sm font-bold tracking-[0.2em] text-white",children:"VERDE RESERVE"})]}),u.jsx("p",{className:"text-xs text-stone-500 font-light leading-relaxed",children:"Закрытый клубный лесной резерват и коттеджный поселок класса De-Luxe на Новорижском направлении."})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("h5",{className:"text-[10px] uppercase tracking-widest font-mono text-[#D99E30] font-bold",children:"Офис продаж"}),u.jsxs("p",{className:"text-xs text-stone-400 font-light leading-relaxed",children:["Москва, Пресненская наб., 12",u.jsx("br",{}),"Башня Федерация Восток, 45 этаж"]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("h5",{className:"text-[10px] uppercase tracking-widest font-mono text-[#D99E30] font-bold",children:"Контакты"}),u.jsxs("p",{className:"text-xs text-stone-400 font-light leading-relaxed",children:["Телефон: ",u.jsx("span",{className:"text-white font-semibold",children:"+7 (495) 120-00-99"}),u.jsx("br",{}),"Почта: info@verdereserve.ru"]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("h5",{className:"text-[10px] uppercase tracking-widest font-mono text-stone-400 font-bold",children:"Legal / Дисклеймер"}),u.jsx("p",{className:"text-[9px] text-stone-600 font-light leading-relaxed",children:"Любая представленная информация носит ознакомительный характер и не является публичной офертой, определяемой положениями Ст. 437 ГК РФ."})]})]}),u.jsxs("div",{className:"max-w-7xl mx-auto px-6 border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600",children:[u.jsx("span",{children:"© 2026 VERDE RESERVE. All rights fully secured."}),u.jsx("span",{children:"Designed with elite architectural code."})]})]}),u.jsx("style",{children:`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(15deg);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 35s linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-up {
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(217,158,48,0.3);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(217,158,48,0.6);
        }
      `})]})}export{Yy as default};
