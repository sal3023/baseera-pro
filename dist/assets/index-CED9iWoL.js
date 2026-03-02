import{r as Oe,g as Ae,a as Je}from"./vendor-CRB3T2We.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var J={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function We(){if(ne)return T;ne=1;var e=Oe(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(c,d,x){var p,N={},m=null,u=null;x!==void 0&&(m=""+x),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(u=d.ref);for(p in d)o.call(d,p)&&!i.hasOwnProperty(p)&&(N[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)N[p]===void 0&&(N[p]=d[p]);return{$$typeof:t,type:c,key:m,ref:u,props:N,_owner:a.current}}return T.Fragment=n,T.jsx=l,T.jsxs=l,T}var oe;function Xe(){return oe||(oe=1,J.exports=We()),J.exports}var s=Xe(),g=Oe();const Ze=Ae(g);var P={},ae;function Qe(){if(ae)return P;ae=1;var e=Je();return P.createRoot=e.createRoot,P.hydrateRoot=e.hydrateRoot,P}var et=Qe();const tt=Ae(et);var ie;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(ie||(ie={}));/**
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
 */var re;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(re||(re={}));var le;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(le||(le={}));/**
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
 */const ce=["user","model","function","system"];var de;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(de||(de={}));var ue;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(ue||(ue={}));var he;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(he||(he={}));var me;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(me||(me={}));var L;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(L||(L={}));var fe;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(fe||(fe={}));var ge;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(ge||(ge={}));var xe;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(xe||(xe={}));/**
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
 */class v extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class S extends v{constructor(t,n){super(t),this.response=n}}class Se extends v{constructor(t,n,o,a){super(t),this.status=n,this.statusText=o,this.errorDetails=a}}class R extends v{}class ke extends v{}/**
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
 */const st="https://generativelanguage.googleapis.com",nt="v1beta",ot="0.24.1",at="genai-js";var O;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(O||(O={}));class it{constructor(t,n,o,a,i){this.model=t,this.task=n,this.apiKey=o,this.stream=a,this.requestOptions=i}toString(){var t,n;const o=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||nt;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||st}/${o}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function rt(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${at}/${ot}`),t.join(" ")}async function lt(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",rt(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(a){throw new R(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${a.message}`)}for(const[a,i]of o.entries()){if(a==="x-goog-api-key")throw new R(`Cannot set reserved header name ${a}`);if(a==="x-goog-api-client")throw new R(`Header name ${a} can only be set using the apiClient field`);n.append(a,i)}}return n}async function ct(e,t,n,o,a,i){const l=new it(e,t,n,o,i);return{url:l.toString(),fetchOptions:Object.assign(Object.assign({},mt(i)),{method:"POST",headers:await lt(l),body:a})}}async function $(e,t,n,o,a,i={},l=fetch){const{url:c,fetchOptions:d}=await ct(e,t,n,o,a,i);return dt(c,d,l)}async function dt(e,t,n=fetch){let o;try{o=await n(e,t)}catch(a){ut(a,e)}return o.ok||await ht(o,e),o}function ut(e,t){let n=e;throw n.name==="AbortError"?(n=new ke(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof Se||e instanceof R||(n=new v(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function ht(e,t){let n="",o;try{const a=await e.json();n=a.error.message,a.error.details&&(n+=` ${JSON.stringify(a.error.details)}`,o=a.error.details)}catch{}throw new Se(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,o)}function mt(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function Q(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new S(`${_(e)}`,e);return ft(e)}else if(e.promptFeedback)throw new S(`Text not available. ${_(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new S(`${_(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),pe(e)[0]}else if(e.promptFeedback)throw new S(`Function call not available. ${_(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),K(e.candidates[0]))throw new S(`${_(e)}`,e);return pe(e)}else if(e.promptFeedback)throw new S(`Function call not available. ${_(e)}`,e)},e}function ft(e){var t,n,o,a;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const l of(a=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||a===void 0?void 0:a.parts)l.text&&i.push(l.text),l.executableCode&&i.push("\n```"+l.executableCode.language+`
`+l.executableCode.code+"\n```\n"),l.codeExecutionResult&&i.push("\n```\n"+l.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function pe(e){var t,n,o,a;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const l of(a=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||a===void 0?void 0:a.parts)l.functionCall&&i.push(l.functionCall);if(i.length>0)return i}const gt=[L.RECITATION,L.SAFETY,L.LANGUAGE];function K(e){return!!e.finishReason&&gt.includes(e.finishReason)}function _(e){var t,n,o;let a="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)a+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(a+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(a+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];K(i)&&(a+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(a+=`: ${i.finishMessage}`))}return a}function D(e){return this instanceof D?(this.v=e,this):new D(e)}function xt(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),a,i=[];return a={},l("next"),l("throw"),l("return"),a[Symbol.asyncIterator]=function(){return this},a;function l(m){o[m]&&(a[m]=function(u){return new Promise(function(b,E){i.push([m,u,b,E])>1||c(m,u)})})}function c(m,u){try{d(o[m](u))}catch(b){N(i[0][3],b)}}function d(m){m.value instanceof D?Promise.resolve(m.value.v).then(x,p):N(i[0][2],m)}function x(m){c("next",m)}function p(m){c("throw",m)}function N(m,u){m(u),i.shift(),i.length&&c(i[0][0],i[0][1])}}/**
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
 */const ye=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function pt(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=vt(t),[o,a]=n.tee();return{stream:bt(o),response:yt(a)}}async function yt(e){const t=[],n=e.getReader();for(;;){const{done:o,value:a}=await n.read();if(o)return Q(wt(t));t.push(a)}}function bt(e){return xt(this,arguments,function*(){const n=e.getReader();for(;;){const{value:o,done:a}=yield D(n.read());if(a)break;yield yield D(Q(o))}})}function vt(e){const t=e.getReader();return new ReadableStream({start(o){let a="";return i();function i(){return t.read().then(({value:l,done:c})=>{if(c){if(a.trim()){o.error(new v("Failed to parse stream"));return}o.close();return}a+=l;let d=a.match(ye),x;for(;d;){try{x=JSON.parse(d[1])}catch{o.error(new v(`Error parsing JSON response: "${d[1]}"`));return}o.enqueue(x),a=a.substring(d[0].length),d=a.match(ye)}return i()}).catch(l=>{let c=l;throw c.stack=l.stack,c.name==="AbortError"?c=new ke("Request aborted when reading from the stream"):c=new v("Error reading from the stream"),c})}}})}function wt(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const o of e){if(o.candidates){let a=0;for(const i of o.candidates)if(n.candidates||(n.candidates=[]),n.candidates[a]||(n.candidates[a]={index:a}),n.candidates[a].citationMetadata=i.citationMetadata,n.candidates[a].groundingMetadata=i.groundingMetadata,n.candidates[a].finishReason=i.finishReason,n.candidates[a].finishMessage=i.finishMessage,n.candidates[a].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[a].content||(n.candidates[a].content={role:i.content.role||"user",parts:[]});const l={};for(const c of i.content.parts)c.text&&(l.text=c.text),c.functionCall&&(l.functionCall=c.functionCall),c.executableCode&&(l.executableCode=c.executableCode),c.codeExecutionResult&&(l.codeExecutionResult=c.codeExecutionResult),Object.keys(l).length===0&&(l.text=""),n.candidates[a].content.parts.push(l)}a++}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}/**
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
 */async function Me(e,t,n,o){const a=await $(t,O.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o);return pt(a)}async function Te(e,t,n,o){const i=await(await $(t,O.GENERATE_CONTENT,e,!1,JSON.stringify(n),o)).json();return{response:Q(i)}}/**
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
 */function Le(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function G(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Nt(t)}function Nt(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,a=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),a=!0):(t.parts.push(i),o=!0);if(o&&a)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!a)throw new v("No content is provided for sending chat message.");return o?t:n}function Et(e,t){var n;let o={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const a=e.generateContentRequest!=null;if(e.contents){if(a)throw new R("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(a)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{const i=G(e);o.contents=[i]}return{generateContentRequest:o}}function be(e){let t;return e.contents?t=e:t={contents:[G(e)]},e.systemInstruction&&(t.systemInstruction=Le(e.systemInstruction)),t}function Ct(e){return typeof e=="string"||Array.isArray(e)?{content:G(e)}:e}/**
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
 */const ve=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],jt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function _t(e){let t=!1;for(const n of e){const{role:o,parts:a}=n;if(!t&&o!=="user")throw new v(`First content should be with role 'user', got ${o}`);if(!ce.includes(o))throw new v(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(ce)}`);if(!Array.isArray(a))throw new v("Content should have 'parts' property with an array of Parts");if(a.length===0)throw new v("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const c of a)for(const d of ve)d in c&&(i[d]+=1);const l=jt[o];for(const c of ve)if(!l.includes(c)&&i[c]>0)throw new v(`Content with role '${o}' can't contain '${c}' part`);t=!0}}function we(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const o of n.parts)if(o===void 0||Object.keys(o).length===0||o.text!==void 0&&o.text==="")return!1;return!0}/**
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
 */const Ne="SILENT_ERROR";class Rt{constructor(t,n,o,a={}){this.model=n,this.params=o,this._requestOptions=a,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,o!=null&&o.history&&(_t(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var o,a,i,l,c,d;await this._sendPromise;const x=G(t),p={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(a=this.params)===null||a===void 0?void 0:a.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(l=this.params)===null||l===void 0?void 0:l.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,x]},N=Object.assign(Object.assign({},this._requestOptions),n);let m;return this._sendPromise=this._sendPromise.then(()=>Te(this._apiKey,this.model,p,N)).then(u=>{var b;if(we(u.response)){this._history.push(x);const E=Object.assign({parts:[],role:"model"},(b=u.response.candidates)===null||b===void 0?void 0:b[0].content);this._history.push(E)}else{const E=_(u.response);E&&console.warn(`sendMessage() was unsuccessful. ${E}. Inspect response object for details.`)}m=u}).catch(u=>{throw this._sendPromise=Promise.resolve(),u}),await this._sendPromise,m}async sendMessageStream(t,n={}){var o,a,i,l,c,d;await this._sendPromise;const x=G(t),p={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(a=this.params)===null||a===void 0?void 0:a.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(l=this.params)===null||l===void 0?void 0:l.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,x]},N=Object.assign(Object.assign({},this._requestOptions),n),m=Me(this._apiKey,this.model,p,N);return this._sendPromise=this._sendPromise.then(()=>m).catch(u=>{throw new Error(Ne)}).then(u=>u.response).then(u=>{if(we(u)){this._history.push(x);const b=Object.assign({},u.candidates[0].content);b.role||(b.role="model"),this._history.push(b)}else{const b=_(u);b&&console.warn(`sendMessageStream() was unsuccessful. ${b}. Inspect response object for details.`)}}).catch(u=>{u.message!==Ne&&console.error(u)}),m}}/**
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
 */async function It(e,t,n,o){return(await $(t,O.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
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
 */async function Ot(e,t,n,o){return(await $(t,O.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function At(e,t,n,o){const a=n.requests.map(l=>Object.assign(Object.assign({},l),{model:t}));return(await $(t,O.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:a}),o)).json()}/**
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
 */class Ee{constructor(t,n,o={}){this.apiKey=t,this._requestOptions=o,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Le(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var o;const a=be(t),i=Object.assign(Object.assign({},this._requestOptions),n);return Te(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},a),i)}async generateContentStream(t,n={}){var o;const a=be(t),i=Object.assign(Object.assign({},this._requestOptions),n);return Me(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},a),i)}startChat(t){var n;return new Rt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const o=Et(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),a=Object.assign(Object.assign({},this._requestOptions),n);return It(this.apiKey,this.model,o,a)}async embedContent(t,n={}){const o=Ct(t),a=Object.assign(Object.assign({},this._requestOptions),n);return Ot(this.apiKey,this.model,o,a)}async batchEmbedContents(t,n={}){const o=Object.assign(Object.assign({},this._requestOptions),n);return At(this.apiKey,this.model,t,o)}}/**
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
 */class Ce{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Ee(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,o){if(!t.name)throw new R("Cached content must contain a `name` field.");if(!t.model)throw new R("Cached content must contain a `model` field.");const a=["model","systemInstruction"];for(const l of a)if(n!=null&&n[l]&&t[l]&&(n==null?void 0:n[l])!==t[l]){if(l==="model"){const c=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,d=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(c===d)continue}throw new R(`Different value for "${l}" specified in modelParams (${n[l]}) and cachedContent (${t[l]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new Ee(this.apiKey,i,o)}}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),De=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:a="",children:i,iconNode:l,...c},d)=>g.createElement("svg",{ref:d,...kt,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:De("lucide",a),...c},[...l.map(([x,p])=>g.createElement(x,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(e,t)=>{const n=g.forwardRef(({className:o,...a},i)=>g.createElement(Mt,{ref:i,iconNode:t,className:De(`lucide-${St(e)}`,o),...a}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=y("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=y("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=y("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=y("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=y("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=y("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=y("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=y("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=y("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=y("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=y("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=y("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=y("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=y("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=y("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=y("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=y("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=y("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=y("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Vt=["تكنولوجيا","أعمال","صحة","رياضة","ترفيه","تعليم","سفر","طعام","منزل","سيارة","مال","أخبار"],zt=["استخدم عناوين جذابة ومحددة","أضف صور عالية الجودة","لا تتجاوز 3 إعلانات في الصفحة","استخدم فقرات بطول 3-4 أسطر","أضف كلمات مفتاحية في المحتوى","تجنب الإفراط في الروابط"];function Jt(){const[e,t]=g.useState("جاري تحميل النظام..."),[n,o]=g.useState({gemini:!1,cloud:!1,security:!1,performance:!1}),[a,i]=g.useState("home"),[l,c]=g.useState(""),[d,x]=g.useState(!0),[p,N]=g.useState(!1),[m,u]=g.useState(""),[b,E]=g.useState(!0),[C,H]=g.useState([]),[f,U]=g.useState({topic:"",category:"تكنولوجيا",style:"مفصل"}),[B,Y]=g.useState(!1),[Ge,k]=g.useState(""),[A,V]=g.useState(null),[$e,ee]=g.useState(null),[Wt,te]=g.useState(!1);g.useEffect(()=>{const r=localStorage.getItem("gemini_api_key");r&&(c(r),x(!1),o({gemini:!0,cloud:!0,security:!0,performance:!0}),t("تم استعادة الجلسة بنجاح - النظام جاهز"))},[]);const He=()=>{te(!0),x(!1),o({gemini:!0,cloud:!0,security:!0,performance:!0}),t("وضع التجربة - النظام جاهز")},Ue=async r=>{var h;if(!r.trim()){u("الرجاء إدخال مفتاح API");return}x(!1),N(!0),u("");try{t("جاري تهيئة الأنظمة..."),await M(800),o(j=>({...j,performance:!0})),t("جاري الاتصال بالسحابة..."),(await new Ce(r).getGenerativeModel({model:"gemini-2.0-flash"}).generateContent("test")).response&&(o(j=>({...j,gemini:!0,cloud:!0})),t("تم الاتصال بـ Google Gemini بنجاح!")),await M(600),t("جاري تفعيل الحماية..."),o(j=>({...j,security:!0})),await M(400),t("النظام جاهز - يمكنك الآن إنشاء المقالات"),localStorage.setItem("gemini_api_key",r)}catch(w){console.error("Gemini Error:",w),(h=w.message)!=null&&h.includes("API_KEY")?(u("مفتاح API غير صحيح"),x(!0)):(o(z=>({...z,gemini:!0,cloud:!0,security:!0,performance:!0})),t("النظام جاهز (وضع القراءة فقط)"))}finally{N(!1)}},Fe=async()=>{if(!f.topic.trim()){u("الرجاء إدخال موضوع المقالة");return}if(Y(!0),k("جاري إنشاء المقالة..."),!l){await M(1500),k("جاري كتابة المحتوى..."),await M(1500);const r=`# ${f.topic}

## مقدمة

${f.topic} هو موضوع هام في وقتنا الحالي. سنستعرض في هذه المقالة أهم الجوانب والتفاصيل المتعلقة بهذا الموضوع.

## القسم الأول

في هذا القسم سنتحدث عن الأساسيات والمفاهيم الأولية المتعلقة بـ ${f.topic}. إن فهم هذه الأساسيات يساعد على فهم أعمق للموضوع.

## القسم الثاني

هنا سنتناول الجوانب التطبيقية والعملية. كيف يمكن تطبيق هذا الموضوع في الحياة اليومية وما هي الفوائد المترتبة على ذلك.

## القسم الثالث

نختتم بمناقشة المستقبل والتطورات المتوقعة في هذا المجال. ما هي التوقعات والفرص المتاحة.

## الخلاصة

في الختام، يمكن القول إن ${f.topic} يمثل أهمية كبيرة ويحتاج إلى المزيد من الدراسة والبحث.

---
**الكلمات المفتاحية:** ${f.topic}, تقنية, مستقبل, تطوير, دراسة`,h=r.split(/\s+/).length,w={id:Date.now().toString(),title:f.topic,content:r,imagePrompt:f.topic,image:`https://image.pollinations.ai/prompt/${encodeURIComponent(f.topic)}?width=1200&height=630&nologo=true`,category:f.category,tags:[f.topic,"مقالة","محتوى"],adsenseReady:h>=800,wordCount:h,createdAt:new Date};H([w,...C]),U({...f,topic:""}),k(""),Y(!1);return}try{const h=new Ce(l).getGenerativeModel({model:"gemini-2.0-flash"});k("جاري كتابة المحتوى...");const w=`
اكتب مقالة كاملة ومفصلة ومنسقة باللغة العربية عن: "${f.topic}"

المتطلبات:
1. عنوان جذاب وواضح
2. مقدمة مشوقة
3. محتوى غني ومفصل (${f.style==="مفصل"?"2000-3000":"800-1200"} كلمة)
4. ${f.style==="مفصل"?"4-6":"2-3"} أقسام فرعية بعناوين H2
5. فقرات قصيرة (3-4 أسطر)
6. قائمة كلمات مفتاحية في النهاية

أرجع البيانات بتنسيق JSON فقط:
{
  "title": "العنوان",
  "content": "المقال الكامل مع العناوين والتنسيق",
  "imagePrompt": "وصف صورة بدقة عالية",
  "category": "${f.category}",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}
`,j=(await h.generateContent(w)).response.text().match(/\{[\s\S]*\}/);if(j){const I=JSON.parse(j[0]),se=I.content.split(/\s+/).length,ze={id:Date.now().toString(),title:I.title||f.topic,content:I.content,imagePrompt:I.imagePrompt,image:`https://image.pollinations.ai/prompt/${encodeURIComponent(I.imagePrompt||f.topic)}?width=1200&height=630&nologo=true`,category:I.category||f.category,tags:I.tags||[],adsenseReady:se>=800,wordCount:se,createdAt:new Date};H([ze,...C]),U({...f,topic:""}),k("")}}catch(r){console.error("Generation Error:",r),u("فشل في إنشاء المقالة")}finally{Y(!1)}},Pe=r=>{H(C.filter(h=>h.id!==r))},qe=async r=>{const h=`# ${r.title}

${r.content}

---
الكلمات المفتاحية: ${r.tags.join(", ")}`;await navigator.clipboard.writeText(h),ee(r.id),setTimeout(()=>ee(null),2e3)},Ke=()=>{localStorage.removeItem("gemini_api_key"),c(""),x(!0),te(!1),H([]),o({gemini:!1,cloud:!1,security:!1,performance:!1}),t("جاري تحميل النظام...")},M=r=>new Promise(h=>setTimeout(h,r)),F=Object.values(n).every(r=>r);if(d)return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:[s.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[s.jsx("div",{className:"absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"}),s.jsx("div",{className:"absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"})]}),s.jsxs("div",{className:"relative z-10 max-w-md w-full px-4",children:[s.jsxs("div",{className:"text-center mb-6 sm:mb-8",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30",children:s.jsx(q,{className:"w-8 h-8 sm:w-12 sm:h-12 text-white"})}),s.jsx("h1",{className:"text-4xl font-black text-white mb-2",children:"بصيرة PRO"}),s.jsx("p",{className:"text-cyan-400 font-medium",children:"منصة إنشاء المقالات بالذكاء الاصطناعي"})]}),s.jsxs("form",{onSubmit:r=>{r.preventDefault(),Ue(l)},className:"p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl",children:[s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2 text-right",children:"مفتاح Google Gemini API"}),s.jsx("input",{type:"password",value:l,onChange:r=>c(r.target.value),placeholder:"أدخل مفتاح API...",className:"w-full px-4 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-left",dir:"ltr"})]}),m&&s.jsx("div",{className:"mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm",children:m}),s.jsx("button",{type:"submit",disabled:p,className:"w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50",children:p?s.jsxs("span",{className:"flex items-center justify-center gap-2",children:[s.jsx(Z,{className:"w-5 h-5 animate-spin"})," جاري الاتصال..."]}):"تفعيل النظام"}),s.jsxs("p",{className:"mt-4 text-xs text-slate-500 text-center",children:["احصل على مفتاح من"," ",s.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline",children:"Google AI Studio"})]}),s.jsx("button",{type:"button",onClick:He,className:"w-full mt-3 py-3 bg-white/10 border border-white/20 rounded-xl font-medium text-slate-300 hover:bg-white/20 transition-all",children:"تجربة بدون مفتاح"})]})]})]});const Be=()=>s.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[s.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4 sm:mb-6",children:[s.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center",children:s.jsx(Yt,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-base sm:text-xl font-bold text-white",children:"إنشاء مقالة جديدة"}),s.jsx("p",{className:"text-xs sm:text-sm text-slate-400 hidden sm:block",children:"اكتب موضوعاً وأنا سأقوم بإنشاء مقالة متكاملة مع صورة"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4",children:[s.jsx("div",{className:"sm:col-span-2",children:s.jsx("input",{type:"text",value:f.topic,onChange:r=>U({...f,topic:r.target.value}),placeholder:" موضوع المقالة...",className:"w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"})}),s.jsx("select",{value:f.category,onChange:r=>U({...f,category:r.target.value}),className:"px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500",children:Vt.map(r=>s.jsx("option",{value:r,children:r},r))}),s.jsx("button",{onClick:Fe,disabled:B||!f.topic.trim(),className:"px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2",children:B?s.jsxs(s.Fragment,{children:[s.jsx(Z,{className:"w-5 h-5 animate-spin"}),"جاري الإنشاء..."]}):s.jsxs(s.Fragment,{children:[s.jsx(_e,{className:"w-5 h-5"}),"إنشاء"]})})]}),B&&s.jsx("div",{className:"p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(Z,{className:"w-5 h-5 text-blue-400 animate-spin"}),s.jsx("span",{className:"text-blue-400",children:Ge})]})}),s.jsxs("div",{className:"mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx(Gt,{className:"w-4 h-4 text-green-400"}),s.jsx("span",{className:"text-sm font-medium text-green-400",children:"نصائح لأدسنس"})]}),s.jsx("div",{className:"flex flex-wrap gap-2",children:zt.map((r,h)=>s.jsx("span",{className:"text-xs px-2 py-1 bg-green-500/20 rounded-lg text-green-300",children:r},h))})]})]}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:C.length===0?s.jsxs("div",{className:"md:col-span-2 lg:col-span-3 text-center py-12",children:[s.jsx(X,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),s.jsx("p",{className:"text-slate-400",children:"لا توجد مقالات بعد. أنشئ مقالتك الأولى!"})]}):C.map(r=>s.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all group",children:[s.jsxs("div",{className:"relative h-48 overflow-hidden",children:[s.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",onError:h=>{h.target.src="https://source.unsplash.com/1200x630/?"+encodeURIComponent(r.category)}}),s.jsx("div",{className:"absolute top-3 left-3",children:s.jsx("span",{className:"px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white",children:r.category})}),s.jsx("div",{className:"absolute top-3 right-3",children:s.jsxs("span",{className:`px-3 py-1 backdrop-blur-sm rounded-full text-xs flex items-center gap-1 ${r.adsenseReady?"bg-green-500/80 text-white":"bg-yellow-500/80 text-black"}`,children:[r.adsenseReady?s.jsx(W,{className:"w-3 h-3"}):s.jsx(qt,{className:"w-3 h-3"}),r.adsenseReady?"متوافق":`${r.wordCount} كلمة`]})})]}),s.jsxs("div",{className:"p-5",children:[s.jsx("h3",{className:"text-lg font-bold text-white mb-2 line-clamp-2",children:r.title}),s.jsxs("p",{className:"text-sm text-slate-400 mb-4 line-clamp-3",children:[r.content.substring(0,150),"..."]}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:r.tags.slice(0,3).map((h,w)=>s.jsxs("span",{className:"text-xs px-2 py-1 bg-slate-700/50 rounded-lg text-slate-400",children:["#",h]},w))}),s.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-white/10",children:[s.jsx("span",{className:"text-xs text-slate-500",children:new Date(r.createdAt).toLocaleDateString("ar")}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>qe(r),className:"p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors",title:"نسخ",children:$e===r.id?s.jsx(W,{className:"w-4 h-4 text-green-400"}):s.jsx(Dt,{className:"w-4 h-4 text-slate-400"})}),s.jsx("button",{onClick:()=>V(r),className:"p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors",title:"عرض",children:s.jsx($t,{className:"w-4 h-4 text-slate-400"})}),s.jsx("button",{onClick:()=>Pe(r.id),className:"p-2 bg-red-500/20 rounded-lg hover:bg-red-500/40 transition-colors",title:"حذف",children:s.jsx(Kt,{className:"w-4 h-4 text-red-400"})})]})]})]})]},r.id))}),A&&s.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4",onClick:()=>V(null),children:s.jsxs("div",{className:"bg-slate-800 border border-white/10 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"relative h-40 sm:h-64",children:[s.jsx("img",{src:A.image,alt:A.title,className:"w-full h-full object-cover"}),s.jsx("button",{onClick:()=>V(null),className:"absolute top-2 sm:top-4 right-2 sm:right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors",children:s.jsx(Re,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})})]}),s.jsxs("div",{className:"p-4 sm:p-8",children:[s.jsx("h1",{className:"text-3xl font-black text-white mb-4",children:A.title}),s.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:A.tags.map((r,h)=>s.jsxs("span",{className:"text-sm px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400",children:["#",r]},h))}),s.jsx("div",{className:"prose prose-invert max-w-none",children:A.content.split(`
`).map((r,h)=>r.trim()?r.startsWith("##")?s.jsx("h2",{className:"text-2xl font-bold text-white mt-8 mb-4",children:r.replace("## ","")},h):s.jsx("p",{className:"text-slate-300 leading-relaxed mb-4",children:r},h):null)})]})]})})]}),Ye=()=>s.jsxs("div",{className:"space-y-4 sm:space-y-8",children:[s.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${F?"bg-gradient-to-br from-green-400 to-emerald-600":"bg-gradient-to-br from-blue-400 to-cyan-600"}`,children:F?s.jsx(Ie,{className:"w-5 h-5 sm:w-6 sm:h-6"}):s.jsx(q,{className:"w-5 h-5 sm:w-6 sm:h-6"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-base sm:text-xl font-bold text-white",children:"حالة النظام"}),s.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:e})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`w-3 h-3 rounded-full ${F?"bg-green-500 animate-pulse":"bg-yellow-500"}`}),s.jsx("span",{className:"text-sm text-slate-400",children:F?"نشط":"جاري التفعيل"})]})]}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",children:[{icon:q,label:"Gemini API",active:n.gemini},{icon:Lt,label:"السحابة",active:n.cloud},{icon:Pt,label:"الحماية",active:n.security},{icon:Ie,label:"الأداء",active:n.performance}].map(({icon:r,label:h,active:w})=>s.jsxs("div",{className:`p-3 sm:p-4 rounded-xl border ${w?"bg-green-500/10 border-green-500/30":"bg-white/5 border-white/10"}`,children:[s.jsx(r,{className:`w-5 h-5 sm:w-6 sm:h-6 mb-2 ${w?"text-green-400":"text-slate-500"}`}),s.jsx("p",{className:`text-xs sm:text-sm font-medium ${w?"text-green-400":"text-slate-500"}`,children:h})]},h))})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6",children:[s.jsx("div",{className:"bg-slate-800/50 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:s.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[s.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/20 flex items-center justify-center",children:s.jsx(X,{className:"w-5 h-5 sm:w-6 sm:h-6 text-blue-400"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-2xl sm:text-3xl font-bold text-white",children:C.length}),s.jsx("p",{className:"text-sm text-slate-400",children:"المقالات المنشأة"})]})]})}),s.jsx("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl p-6",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center",children:s.jsx(W,{className:"w-6 h-6 text-green-400"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-3xl font-bold text-white",children:C.filter(r=>r.adsenseReady).length}),s.jsx("p",{className:"text-sm text-slate-400",children:"متوافقة مع أدسنس"})]})]})}),s.jsx("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl p-6",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center",children:s.jsx(Bt,{className:"w-6 h-6 text-purple-400"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-3xl font-bold text-white",children:C.reduce((r,h)=>r+h.wordCount,0).toLocaleString()}),s.jsx("p",{className:"text-sm text-slate-400",children:"إجمالي الكلمات"})]})]})})]}),s.jsx("div",{className:"bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:s.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"text-center sm:text-right",children:[s.jsx("h3",{className:"text-base sm:text-xl font-bold text-white mb-1 sm:mb-2",children:"ابدأ الآن!"}),s.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"أنشئ مقالتك الأولى المتوافقة مع أدسنس"})]}),s.jsxs("button",{onClick:()=>i("articles"),className:"px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 text-sm sm:text-base",children:[s.jsx(_e,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"إنشاء"]})]})})]});return s.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[s.jsx("header",{className:"fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-white/10",children:s.jsxs("div",{className:"flex items-center justify-between px-3 sm:px-6 py-3",children:[s.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[s.jsx("button",{onClick:()=>E(!b),className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:b?s.jsx(Re,{className:"w-5 h-5"}):s.jsx(Ut,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center",children:s.jsx(q,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})}),s.jsx("span",{className:"text-sm sm:text-lg font-bold",children:"بصيرة PRO"})]})]}),s.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[s.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full",children:[s.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),s.jsx("span",{className:"text-sm text-green-400",children:"متصل"})]}),s.jsx("button",{onClick:Ke,className:"p-2 hover:bg-red-500/20 rounded-lg transition-colors",title:"تسجيل خروج",children:s.jsx(Ht,{className:"w-5 h-5 text-slate-400 hover:text-red-400"})})]})]})}),s.jsx("aside",{className:`fixed top-14 sm:top-16 left-0 bottom-0 w-64 bg-slate-900 border-r border-white/10 z-30 transition-transform duration-300 ${b?"translate-x-0":"-translate-x-full"}`,children:s.jsx("nav",{className:"p-4 space-y-2",children:[{id:"home",icon:Tt,label:"الرئيسية"},{id:"articles",icon:X,label:"المقالات"},{id:"analytics",icon:je,label:"الإحصائيات"},{id:"settings",icon:Ft,label:"الإعدادات"}].map(({id:r,icon:h,label:w})=>s.jsxs("button",{onClick:()=>{i(r),E(!1)},className:`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${a===r?"bg-cyan-500/20 text-cyan-400":"text-slate-400 hover:bg-white/5 hover:text-white"}`,children:[s.jsx(h,{className:"w-5 h-5"}),s.jsx("span",{className:"font-medium",children:w}),r==="articles"&&C.length>0&&s.jsx("span",{className:"mr-auto px-2 py-0.5 bg-cyan-500/30 rounded-full text-xs",children:C.length})]},r))})}),b&&s.jsx("div",{className:"fixed inset-0 bg-black/50 z-20 lg:hidden",onClick:()=>E(!1)}),s.jsx("main",{className:"pt-14 sm:pt-16 min-h-screen transition-all duration-300",children:s.jsxs("div",{className:"p-3 sm:p-6 lg:p-8",children:[a==="home"&&Ye(),a==="articles"&&Be(),a==="analytics"&&s.jsxs("div",{className:"text-center py-20",children:[s.jsx(je,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),s.jsx("p",{className:"text-slate-400",children:"قريباً..."})]}),a==="settings"&&s.jsx("div",{className:"max-w-2xl",children:s.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl p-6",children:[s.jsx("h2",{className:"text-xl font-bold text-white mb-6",children:"الإعدادات"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"مفتاح API"}),s.jsx("input",{type:"password",value:l,onChange:r=>c(r.target.value),className:"w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white",dir:"ltr"})]}),s.jsx("button",{onClick:()=>{localStorage.setItem("gemini_api_key",l)},className:"px-6 py-3 bg-cyan-500 rounded-xl font-bold text-white",children:"حفظ الإعدادات"})]})]})})]})})]})}tt.createRoot(document.getElementById("root")).render(s.jsx(Ze.StrictMode,{children:s.jsx(Jt,{})}));
