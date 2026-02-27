import{r as Oe,g as Ae,a as Ve}from"./vendor-CRB3T2We.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var z={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function ze(){if(ne)return k;ne=1;var e=Oe(),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(c,d,p){var f,v={},h=null,u=null;p!==void 0&&(h=""+p),d.key!==void 0&&(h=""+d.key),d.ref!==void 0&&(u=d.ref);for(f in d)a.call(d,f)&&!i.hasOwnProperty(f)&&(v[f]=d[f]);if(c&&c.defaultProps)for(f in d=c.defaultProps,d)v[f]===void 0&&(v[f]=d[f]);return{$$typeof:s,type:c,key:h,ref:u,props:v,_owner:o.current}}return k.Fragment=n,k.jsx=l,k.jsxs=l,k}var ae;function Je(){return ae||(ae=1,z.exports=ze()),z.exports}var t=Je(),g=Oe();const We=Ae(g);var $={},oe;function Xe(){if(oe)return $;oe=1;var e=Ve();return $.createRoot=e.createRoot,$.hydrateRoot=e.hydrateRoot,$}var Ze=Xe();const Qe=Ae(Ze);var ie;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(ie||(ie={}));/**
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
 */const ce=["user","model","function","system"];var de;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(de||(de={}));var ue;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(ue||(ue={}));var he;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(he||(he={}));var me;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(me||(me={}));var T;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(T||(T={}));var fe;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(fe||(fe={}));var ge;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(ge||(ge={}));var xe;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(xe||(xe={}));/**
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
 */class b extends Error{constructor(s){super(`[GoogleGenerativeAI Error]: ${s}`)}}class S extends b{constructor(s,n){super(s),this.response=n}}class Se extends b{constructor(s,n,a,o){super(s),this.status=n,this.statusText=a,this.errorDetails=o}}class R extends b{}class ke extends b{}/**
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
 */const et="https://generativelanguage.googleapis.com",tt="v1beta",st="0.24.1",nt="genai-js";var O;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(O||(O={}));class at{constructor(s,n,a,o,i){this.model=s,this.task=n,this.apiKey=a,this.stream=o,this.requestOptions=i}toString(){var s,n;const a=((s=this.requestOptions)===null||s===void 0?void 0:s.apiVersion)||tt;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||et}/${a}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function ot(e){const s=[];return e!=null&&e.apiClient&&s.push(e.apiClient),s.push(`${nt}/${st}`),s.join(" ")}async function it(e){var s;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",ot(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let a=(s=e.requestOptions)===null||s===void 0?void 0:s.customHeaders;if(a){if(!(a instanceof Headers))try{a=new Headers(a)}catch(o){throw new R(`unable to convert customHeaders value ${JSON.stringify(a)} to Headers: ${o.message}`)}for(const[o,i]of a.entries()){if(o==="x-goog-api-key")throw new R(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new R(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function rt(e,s,n,a,o,i){const l=new at(e,s,n,a,i);return{url:l.toString(),fetchOptions:Object.assign(Object.assign({},ut(i)),{method:"POST",headers:await it(l),body:o})}}async function D(e,s,n,a,o,i={},l=fetch){const{url:c,fetchOptions:d}=await rt(e,s,n,a,o,i);return lt(c,d,l)}async function lt(e,s,n=fetch){let a;try{a=await n(e,s)}catch(o){ct(o,e)}return a.ok||await dt(a,e),a}function ct(e,s){let n=e;throw n.name==="AbortError"?(n=new ke(`Request aborted when fetching ${s.toString()}: ${e.message}`),n.stack=e.stack):e instanceof Se||e instanceof R||(n=new b(`Error fetching from ${s.toString()}: ${e.message}`),n.stack=e.stack),n}async function dt(e,s){let n="",a;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,a=o.error.details)}catch{}throw new Se(`Error fetching from ${s.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,a)}function ut(e){const s={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),s.signal=n.signal}return s}/**
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
 */function Z(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new S(`${_(e)}`,e);return ht(e)}else if(e.promptFeedback)throw new S(`Text not available. ${_(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new S(`${_(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),pe(e)[0]}else if(e.promptFeedback)throw new S(`Function call not available. ${_(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),U(e.candidates[0]))throw new S(`${_(e)}`,e);return pe(e)}else if(e.promptFeedback)throw new S(`Function call not available. ${_(e)}`,e)},e}function ht(e){var s,n,a,o;const i=[];if(!((n=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||n===void 0)&&n.parts)for(const l of(o=(a=e.candidates)===null||a===void 0?void 0:a[0].content)===null||o===void 0?void 0:o.parts)l.text&&i.push(l.text),l.executableCode&&i.push("\n```"+l.executableCode.language+`
`+l.executableCode.code+"\n```\n"),l.codeExecutionResult&&i.push("\n```\n"+l.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function pe(e){var s,n,a,o;const i=[];if(!((n=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||n===void 0)&&n.parts)for(const l of(o=(a=e.candidates)===null||a===void 0?void 0:a[0].content)===null||o===void 0?void 0:o.parts)l.functionCall&&i.push(l.functionCall);if(i.length>0)return i}const mt=[T.RECITATION,T.SAFETY,T.LANGUAGE];function U(e){return!!e.finishReason&&mt.includes(e.finishReason)}function _(e){var s,n,a;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((s=e.promptFeedback)===null||s===void 0)&&s.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((a=e.candidates)===null||a===void 0)&&a[0]){const i=e.candidates[0];U(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function M(e){return this instanceof M?(this.v=e,this):new M(e)}function ft(e,s,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=n.apply(e,s||[]),o,i=[];return o={},l("next"),l("throw"),l("return"),o[Symbol.asyncIterator]=function(){return this},o;function l(h){a[h]&&(o[h]=function(u){return new Promise(function(y,E){i.push([h,u,y,E])>1||c(h,u)})})}function c(h,u){try{d(a[h](u))}catch(y){v(i[0][3],y)}}function d(h){h.value instanceof M?Promise.resolve(h.value.v).then(p,f):v(i[0][2],h)}function p(h){c("next",h)}function f(h){c("throw",h)}function v(h,u){h(u),i.shift(),i.length&&c(i[0][0],i[0][1])}}/**
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
 */const ye=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function gt(e){const s=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=yt(s),[a,o]=n.tee();return{stream:pt(a),response:xt(o)}}async function xt(e){const s=[],n=e.getReader();for(;;){const{done:a,value:o}=await n.read();if(a)return Z(bt(s));s.push(o)}}function pt(e){return ft(this,arguments,function*(){const n=e.getReader();for(;;){const{value:a,done:o}=yield M(n.read());if(o)break;yield yield M(Z(a))}})}function yt(e){const s=e.getReader();return new ReadableStream({start(a){let o="";return i();function i(){return s.read().then(({value:l,done:c})=>{if(c){if(o.trim()){a.error(new b("Failed to parse stream"));return}a.close();return}o+=l;let d=o.match(ye),p;for(;d;){try{p=JSON.parse(d[1])}catch{a.error(new b(`Error parsing JSON response: "${d[1]}"`));return}a.enqueue(p),o=o.substring(d[0].length),d=o.match(ye)}return i()}).catch(l=>{let c=l;throw c.stack=l.stack,c.name==="AbortError"?c=new ke("Request aborted when reading from the stream"):c=new b("Error reading from the stream"),c})}}})}function bt(e){const s=e[e.length-1],n={promptFeedback:s==null?void 0:s.promptFeedback};for(const a of e){if(a.candidates){let o=0;for(const i of a.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const l={};for(const c of i.content.parts)c.text&&(l.text=c.text),c.functionCall&&(l.functionCall=c.functionCall),c.executableCode&&(l.executableCode=c.executableCode),c.codeExecutionResult&&(l.codeExecutionResult=c.codeExecutionResult),Object.keys(l).length===0&&(l.text=""),n.candidates[o].content.parts.push(l)}o++}a.usageMetadata&&(n.usageMetadata=a.usageMetadata)}return n}/**
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
 */async function Te(e,s,n,a){const o=await D(s,O.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),a);return gt(o)}async function Me(e,s,n,a){const i=await(await D(s,O.GENERATE_CONTENT,e,!1,JSON.stringify(n),a)).json();return{response:Z(i)}}/**
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
 */function Le(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function L(e){let s=[];if(typeof e=="string")s=[{text:e}];else for(const n of e)typeof n=="string"?s.push({text:n}):s.push(n);return vt(s)}function vt(e){const s={role:"user",parts:[]},n={role:"function",parts:[]};let a=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(s.parts.push(i),a=!0);if(a&&o)throw new b("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!a&&!o)throw new b("No content is provided for sending chat message.");return a?s:n}function Nt(e,s){var n;let a={model:s==null?void 0:s.model,generationConfig:s==null?void 0:s.generationConfig,safetySettings:s==null?void 0:s.safetySettings,tools:s==null?void 0:s.tools,toolConfig:s==null?void 0:s.toolConfig,systemInstruction:s==null?void 0:s.systemInstruction,cachedContent:(n=s==null?void 0:s.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new R("CountTokensRequest must have one of contents or generateContentRequest, not both.");a.contents=e.contents}else if(o)a=Object.assign(Object.assign({},a),e.generateContentRequest);else{const i=L(e);a.contents=[i]}return{generateContentRequest:a}}function be(e){let s;return e.contents?s=e:s={contents:[L(e)]},e.systemInstruction&&(s.systemInstruction=Le(e.systemInstruction)),s}function wt(e){return typeof e=="string"||Array.isArray(e)?{content:L(e)}:e}/**
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
 */const ve=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Et={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ct(e){let s=!1;for(const n of e){const{role:a,parts:o}=n;if(!s&&a!=="user")throw new b(`First content should be with role 'user', got ${a}`);if(!ce.includes(a))throw new b(`Each item should include role field. Got ${a} but valid roles are: ${JSON.stringify(ce)}`);if(!Array.isArray(o))throw new b("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new b("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const c of o)for(const d of ve)d in c&&(i[d]+=1);const l=Et[a];for(const c of ve)if(!l.includes(c)&&i[c]>0)throw new b(`Content with role '${a}' can't contain '${c}' part`);s=!0}}function Ne(e){var s;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(s=e.candidates[0])===null||s===void 0?void 0:s.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const a of n.parts)if(a===void 0||Object.keys(a).length===0||a.text!==void 0&&a.text==="")return!1;return!0}/**
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
 */const we="SILENT_ERROR";class jt{constructor(s,n,a,o={}){this.model=n,this.params=a,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=s,a!=null&&a.history&&(Ct(a.history),this._history=a.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(s,n={}){var a,o,i,l,c,d;await this._sendPromise;const p=L(s),f={safetySettings:(a=this.params)===null||a===void 0?void 0:a.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(l=this.params)===null||l===void 0?void 0:l.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,p]},v=Object.assign(Object.assign({},this._requestOptions),n);let h;return this._sendPromise=this._sendPromise.then(()=>Me(this._apiKey,this.model,f,v)).then(u=>{var y;if(Ne(u.response)){this._history.push(p);const E=Object.assign({parts:[],role:"model"},(y=u.response.candidates)===null||y===void 0?void 0:y[0].content);this._history.push(E)}else{const E=_(u.response);E&&console.warn(`sendMessage() was unsuccessful. ${E}. Inspect response object for details.`)}h=u}).catch(u=>{throw this._sendPromise=Promise.resolve(),u}),await this._sendPromise,h}async sendMessageStream(s,n={}){var a,o,i,l,c,d;await this._sendPromise;const p=L(s),f={safetySettings:(a=this.params)===null||a===void 0?void 0:a.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(l=this.params)===null||l===void 0?void 0:l.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,p]},v=Object.assign(Object.assign({},this._requestOptions),n),h=Te(this._apiKey,this.model,f,v);return this._sendPromise=this._sendPromise.then(()=>h).catch(u=>{throw new Error(we)}).then(u=>u.response).then(u=>{if(Ne(u)){this._history.push(p);const y=Object.assign({},u.candidates[0].content);y.role||(y.role="model"),this._history.push(y)}else{const y=_(u);y&&console.warn(`sendMessageStream() was unsuccessful. ${y}. Inspect response object for details.`)}}).catch(u=>{u.message!==we&&console.error(u)}),h}}/**
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
 */async function _t(e,s,n,a){return(await D(s,O.COUNT_TOKENS,e,!1,JSON.stringify(n),a)).json()}/**
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
 */async function Rt(e,s,n,a){return(await D(s,O.EMBED_CONTENT,e,!1,JSON.stringify(n),a)).json()}async function It(e,s,n,a){const o=n.requests.map(l=>Object.assign(Object.assign({},l),{model:s}));return(await D(s,O.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),a)).json()}/**
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
 */class Ee{constructor(s,n,a={}){this.apiKey=s,this._requestOptions=a,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Le(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(s,n={}){var a;const o=be(s),i=Object.assign(Object.assign({},this._requestOptions),n);return Me(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(a=this.cachedContent)===null||a===void 0?void 0:a.name},o),i)}async generateContentStream(s,n={}){var a;const o=be(s),i=Object.assign(Object.assign({},this._requestOptions),n);return Te(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(a=this.cachedContent)===null||a===void 0?void 0:a.name},o),i)}startChat(s){var n;return new jt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},s),this._requestOptions)}async countTokens(s,n={}){const a=Nt(s,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return _t(this.apiKey,this.model,a,o)}async embedContent(s,n={}){const a=wt(s),o=Object.assign(Object.assign({},this._requestOptions),n);return Rt(this.apiKey,this.model,a,o)}async batchEmbedContents(s,n={}){const a=Object.assign(Object.assign({},this._requestOptions),n);return It(this.apiKey,this.model,s,a)}}/**
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
 */class Ce{constructor(s){this.apiKey=s}getGenerativeModel(s,n){if(!s.model)throw new b("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Ee(this.apiKey,s,n)}getGenerativeModelFromCachedContent(s,n,a){if(!s.name)throw new R("Cached content must contain a `name` field.");if(!s.model)throw new R("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const l of o)if(n!=null&&n[l]&&s[l]&&(n==null?void 0:n[l])!==s[l]){if(l==="model"){const c=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,d=s.model.startsWith("models/")?s.model.replace("models/",""):s.model;if(c===d)continue}throw new R(`Different value for "${l}" specified in modelParams (${n[l]}) and cachedContent (${s[l]})`)}const i=Object.assign(Object.assign({},n),{model:s.model,tools:s.tools,toolConfig:s.toolConfig,systemInstruction:s.systemInstruction,cachedContent:s});return new Ee(this.apiKey,i,a)}}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),De=(...e)=>e.filter((s,n,a)=>!!s&&s.trim()!==""&&a.indexOf(s)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var At={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=g.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:i,iconNode:l,...c},d)=>g.createElement("svg",{ref:d,...At,width:s,height:s,stroke:e,strokeWidth:a?Number(n)*24/Number(s):n,className:De("lucide",o),...c},[...l.map(([p,f])=>g.createElement(p,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,s)=>{const n=g.forwardRef(({className:a,...o},i)=>g.createElement(St,{ref:i,iconNode:s,className:De(`lucide-${Ot(e)}`,a),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=x("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=x("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=x("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=x("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=x("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=x("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=x("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=x("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=x("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=x("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=x("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=x("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=x("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=x("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=x("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=x("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=x("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=x("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=x("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=x("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Bt=["تكنولوجيا","أعمال","صحة","رياضة","ترفيه","تعليم","سفر","طعام","منزل","سيارة","مال","أخبار"],Yt=["استخدم عناوين جذابة ومحددة","أضف صور عالية الجودة","لا تتجاوز 3 إعلانات في الصفحة","استخدم فقرات بطول 3-4 أسطر","أضف كلمات مفتاحية في المحتوى","تجنب الإفراط في الروابط"];function Vt(){const[e,s]=g.useState("جاري تحميل النظام..."),[n,a]=g.useState({gemini:!1,cloud:!1,security:!1,performance:!1}),[o,i]=g.useState("home"),[l,c]=g.useState(""),[d,p]=g.useState(!0),[f,v]=g.useState(!1),[h,u]=g.useState(""),[y,E]=g.useState(!0),[C,F]=g.useState([]),[N,P]=g.useState({topic:"",category:"تكنولوجيا",style:"مفصل"}),[q,Q]=g.useState(!1),[Ge,K]=g.useState(""),[A,B]=g.useState(null),[$e,ee]=g.useState(null);g.useEffect(()=>{const r=localStorage.getItem("gemini_api_key");r&&(c(r),te(r))},[]);const te=async r=>{var m;if(!r.trim()){u("الرجاء إدخال مفتاح API");return}p(!1),v(!0),u("");try{s("جاري تهيئة الأنظمة..."),await Y(800),a(j=>({...j,performance:!0})),s("جاري الاتصال بالسحابة..."),(await new Ce(r).getGenerativeModel({model:"gemini-2.0-flash"}).generateContent("test")).response&&(a(j=>({...j,gemini:!0,cloud:!0})),s("تم الاتصال بـ Google Gemini بنجاح!")),await Y(600),s("جاري تفعيل الحماية..."),a(j=>({...j,security:!0})),await Y(400),s("النظام جاهز - يمكنك الآن إنشاء المقالات"),localStorage.setItem("gemini_api_key",r)}catch(w){console.error("Gemini Error:",w),(m=w.message)!=null&&m.includes("API_KEY")?(u("مفتاح API غير صحيح"),p(!0)):(a(V=>({...V,gemini:!0,cloud:!0,security:!0,performance:!0})),s("النظام جاهز (وضع القراءة فقط)"))}finally{v(!1)}},He=async()=>{if(!(!N.topic.trim()||!l)){Q(!0),K("جاري إنشاء المقالة...");try{const m=new Ce(l).getGenerativeModel({model:"gemini-2.0-flash"});K("جاري كتابة المحتوى...");const w=`
اكتب مقالة كاملة ومفصلة ومنسقة باللغة العربية عن: "${N.topic}"

المتطلبات:
1. عنوان جذاب وواضح
2. مقدمة مشوقة
3. محتوى غني ومفصل (${N.style==="مفصل"?"2000-3000":"800-1200"} كلمة)
4. ${N.style==="مفصل"?"4-6":"2-3"} أقسام فرعية بعناوين H2
5. فقرات قصيرة (3-4 أسطر)
6. قائمة كلمات مفتاحية في النهاية

أرجع البيانات بتنسيق JSON فقط:
{
  "title": "العنوان",
  "content": "المقال الكامل مع العناوين والتنسيق",
  "imagePrompt": "وصف صورة بدقة عالية",
  "category": "${N.category}",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}
`,j=(await m.generateContent(w)).response.text().match(/\{[\s\S]*\}/);if(j){const I=JSON.parse(j[0]),se=I.content.split(/\s+/).length,Ye={id:Date.now().toString(),title:I.title||N.topic,content:I.content,imagePrompt:I.imagePrompt,image:`https://image.pollinations.ai/prompt/${encodeURIComponent(I.imagePrompt||N.topic)}?width=1200&height=630&nologo=true`,category:I.category||N.category,tags:I.tags||[],adsenseReady:se>=800,wordCount:se,createdAt:new Date};F([Ye,...C]),P({...N,topic:""}),K("")}}catch(r){console.error("Generation Error:",r),u("فشل في إنشاء المقالة")}finally{Q(!1)}}},Ue=r=>{F(C.filter(m=>m.id!==r))},Fe=async r=>{const m=`# ${r.title}

${r.content}

---
الكلمات المفتاحية: ${r.tags.join(", ")}`;await navigator.clipboard.writeText(m),ee(r.id),setTimeout(()=>ee(null),2e3)},Pe=()=>{localStorage.removeItem("gemini_api_key"),c(""),p(!0),F([]),a({gemini:!1,cloud:!1,security:!1,performance:!1})},Y=r=>new Promise(m=>setTimeout(m,r)),G=Object.values(n).every(r=>r);if(d)return t.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",children:[t.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[t.jsx("div",{className:"absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"}),t.jsx("div",{className:"absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"})]}),t.jsxs("div",{className:"relative z-10 max-w-md w-full px-4",children:[t.jsxs("div",{className:"text-center mb-6 sm:mb-8",children:[t.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30",children:t.jsx(H,{className:"w-8 h-8 sm:w-12 sm:h-12 text-white"})}),t.jsx("h1",{className:"text-4xl font-black text-white mb-2",children:"بصيرة PRO"}),t.jsx("p",{className:"text-cyan-400 font-medium",children:"منصة إنشاء المقالات بالذكاء الاصطناعي"})]}),t.jsxs("form",{onSubmit:r=>{r.preventDefault(),te(l)},className:"p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl",children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2 text-right",children:"مفتاح Google Gemini API"}),t.jsx("input",{type:"password",value:l,onChange:r=>c(r.target.value),placeholder:"أدخل مفتاح API...",className:"w-full px-4 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-left",dir:"ltr"})]}),h&&t.jsx("div",{className:"mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm",children:h}),t.jsx("button",{type:"submit",disabled:f,className:"w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50",children:f?t.jsxs("span",{className:"flex items-center justify-center gap-2",children:[t.jsx(X,{className:"w-5 h-5 animate-spin"})," جاري الاتصال..."]}):"تفعيل النظام"}),t.jsxs("p",{className:"mt-4 text-xs text-slate-500 text-center",children:["احصل على مفتاح من"," ",t.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:underline",children:"Google AI Studio"})]})]})]})]});const qe=()=>t.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4 sm:mb-6",children:[t.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center",children:t.jsx(Kt,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-base sm:text-xl font-bold text-white",children:"إنشاء مقالة جديدة"}),t.jsx("p",{className:"text-xs sm:text-sm text-slate-400 hidden sm:block",children:"اكتب موضوعاً وأنا سأقوم بإنشاء مقالة متكاملة مع صورة"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4",children:[t.jsx("div",{className:"sm:col-span-2",children:t.jsx("input",{type:"text",value:N.topic,onChange:r=>P({...N,topic:r.target.value}),placeholder:" موضوع المقالة...",className:"w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"})}),t.jsx("select",{value:N.category,onChange:r=>P({...N,category:r.target.value}),className:"px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500",children:Bt.map(r=>t.jsx("option",{value:r,children:r},r))}),t.jsx("button",{onClick:He,disabled:q||!N.topic.trim(),className:"px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2",children:q?t.jsxs(t.Fragment,{children:[t.jsx(X,{className:"w-5 h-5 animate-spin"}),"جاري الإنشاء..."]}):t.jsxs(t.Fragment,{children:[t.jsx(_e,{className:"w-5 h-5"}),"إنشاء"]})})]}),q&&t.jsx("div",{className:"p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx(X,{className:"w-5 h-5 text-blue-400 animate-spin"}),t.jsx("span",{className:"text-blue-400",children:Ge})]})}),t.jsxs("div",{className:"mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[t.jsx(Lt,{className:"w-4 h-4 text-green-400"}),t.jsx("span",{className:"text-sm font-medium text-green-400",children:"نصائح لأدسنس"})]}),t.jsx("div",{className:"flex flex-wrap gap-2",children:Yt.map((r,m)=>t.jsx("span",{className:"text-xs px-2 py-1 bg-green-500/20 rounded-lg text-green-300",children:r},m))})]})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:C.length===0?t.jsxs("div",{className:"md:col-span-2 lg:col-span-3 text-center py-12",children:[t.jsx(W,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),t.jsx("p",{className:"text-slate-400",children:"لا توجد مقالات بعد. أنشئ مقالتك الأولى!"})]}):C.map(r=>t.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all group",children:[t.jsxs("div",{className:"relative h-48 overflow-hidden",children:[t.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",onError:m=>{m.target.src="https://source.unsplash.com/1200x630/?"+encodeURIComponent(r.category)}}),t.jsx("div",{className:"absolute top-3 left-3",children:t.jsx("span",{className:"px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white",children:r.category})}),t.jsx("div",{className:"absolute top-3 right-3",children:t.jsxs("span",{className:`px-3 py-1 backdrop-blur-sm rounded-full text-xs flex items-center gap-1 ${r.adsenseReady?"bg-green-500/80 text-white":"bg-yellow-500/80 text-black"}`,children:[r.adsenseReady?t.jsx(J,{className:"w-3 h-3"}):t.jsx(Ft,{className:"w-3 h-3"}),r.adsenseReady?"متوافق":`${r.wordCount} كلمة`]})})]}),t.jsxs("div",{className:"p-5",children:[t.jsx("h3",{className:"text-lg font-bold text-white mb-2 line-clamp-2",children:r.title}),t.jsxs("p",{className:"text-sm text-slate-400 mb-4 line-clamp-3",children:[r.content.substring(0,150),"..."]}),t.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:r.tags.slice(0,3).map((m,w)=>t.jsxs("span",{className:"text-xs px-2 py-1 bg-slate-700/50 rounded-lg text-slate-400",children:["#",m]},w))}),t.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-white/10",children:[t.jsx("span",{className:"text-xs text-slate-500",children:new Date(r.createdAt).toLocaleDateString("ar")}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>Fe(r),className:"p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors",title:"نسخ",children:$e===r.id?t.jsx(J,{className:"w-4 h-4 text-green-400"}):t.jsx(Mt,{className:"w-4 h-4 text-slate-400"})}),t.jsx("button",{onClick:()=>B(r),className:"p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors",title:"عرض",children:t.jsx(Dt,{className:"w-4 h-4 text-slate-400"})}),t.jsx("button",{onClick:()=>Ue(r.id),className:"p-2 bg-red-500/20 rounded-lg hover:bg-red-500/40 transition-colors",title:"حذف",children:t.jsx(Pt,{className:"w-4 h-4 text-red-400"})})]})]})]})]},r.id))}),A&&t.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4",onClick:()=>B(null),children:t.jsxs("div",{className:"bg-slate-800 border border-white/10 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",onClick:r=>r.stopPropagation(),children:[t.jsxs("div",{className:"relative h-40 sm:h-64",children:[t.jsx("img",{src:A.image,alt:A.title,className:"w-full h-full object-cover"}),t.jsx("button",{onClick:()=>B(null),className:"absolute top-2 sm:top-4 right-2 sm:right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors",children:t.jsx(Re,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})})]}),t.jsxs("div",{className:"p-4 sm:p-8",children:[t.jsx("h1",{className:"text-3xl font-black text-white mb-4",children:A.title}),t.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:A.tags.map((r,m)=>t.jsxs("span",{className:"text-sm px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400",children:["#",r]},m))}),t.jsx("div",{className:"prose prose-invert max-w-none",children:A.content.split(`
`).map((r,m)=>r.trim()?r.startsWith("##")?t.jsx("h2",{className:"text-2xl font-bold text-white mt-8 mb-4",children:r.replace("## ","")},m):t.jsx("p",{className:"text-slate-300 leading-relaxed mb-4",children:r},m):null)})]})]})})]}),Ke=()=>t.jsxs("div",{className:"space-y-4 sm:space-y-8",children:[t.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${G?"bg-gradient-to-br from-green-400 to-emerald-600":"bg-gradient-to-br from-blue-400 to-cyan-600"}`,children:G?t.jsx(Ie,{className:"w-5 h-5 sm:w-6 sm:h-6"}):t.jsx(H,{className:"w-5 h-5 sm:w-6 sm:h-6"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-base sm:text-xl font-bold text-white",children:"حالة النظام"}),t.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:e})]})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:`w-3 h-3 rounded-full ${G?"bg-green-500 animate-pulse":"bg-yellow-500"}`}),t.jsx("span",{className:"text-sm text-slate-400",children:G?"نشط":"جاري التفعيل"})]})]}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",children:[{icon:H,label:"Gemini API",active:n.gemini},{icon:Tt,label:"السحابة",active:n.cloud},{icon:Ut,label:"الحماية",active:n.security},{icon:Ie,label:"الأداء",active:n.performance}].map(({icon:r,label:m,active:w})=>t.jsxs("div",{className:`p-3 sm:p-4 rounded-xl border ${w?"bg-green-500/10 border-green-500/30":"bg-white/5 border-white/10"}`,children:[t.jsx(r,{className:`w-5 h-5 sm:w-6 sm:h-6 mb-2 ${w?"text-green-400":"text-slate-500"}`}),t.jsx("p",{className:`text-xs sm:text-sm font-medium ${w?"text-green-400":"text-slate-500"}`,children:m})]},m))})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6",children:[t.jsx("div",{className:"bg-slate-800/50 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:t.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[t.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/20 flex items-center justify-center",children:t.jsx(W,{className:"w-5 h-5 sm:w-6 sm:h-6 text-blue-400"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-2xl sm:text-3xl font-bold text-white",children:C.length}),t.jsx("p",{className:"text-sm text-slate-400",children:"المقالات المنشأة"})]})]})}),t.jsx("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl p-6",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center",children:t.jsx(J,{className:"w-6 h-6 text-green-400"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-3xl font-bold text-white",children:C.filter(r=>r.adsenseReady).length}),t.jsx("p",{className:"text-sm text-slate-400",children:"متوافقة مع أدسنس"})]})]})}),t.jsx("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl p-6",children:t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center",children:t.jsx(qt,{className:"w-6 h-6 text-purple-400"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-3xl font-bold text-white",children:C.reduce((r,m)=>r+m.wordCount,0).toLocaleString()}),t.jsx("p",{className:"text-sm text-slate-400",children:"إجمالي الكلمات"})]})]})})]}),t.jsx("div",{className:"bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6",children:t.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[t.jsxs("div",{className:"text-center sm:text-right",children:[t.jsx("h3",{className:"text-base sm:text-xl font-bold text-white mb-1 sm:mb-2",children:"ابدأ الآن!"}),t.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"أنشئ مقالتك الأولى المتوافقة مع أدسنس"})]}),t.jsxs("button",{onClick:()=>i("articles"),className:"px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 text-sm sm:text-base",children:[t.jsx(_e,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"إنشاء"]})]})})]});return t.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[t.jsx("header",{className:"fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-white/10",children:t.jsxs("div",{className:"flex items-center justify-between px-3 sm:px-6 py-3",children:[t.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[t.jsx("button",{onClick:()=>E(!y),className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:y?t.jsx(Re,{className:"w-5 h-5"}):t.jsx($t,{className:"w-5 h-5"})}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center",children:t.jsx(H,{className:"w-4 h-4 sm:w-5 sm:h-5 text-white"})}),t.jsx("span",{className:"text-sm sm:text-lg font-bold",children:"بصيرة PRO"})]})]}),t.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[t.jsxs("div",{className:"hidden sm:flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full",children:[t.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),t.jsx("span",{className:"text-sm text-green-400",children:"متصل"})]}),t.jsx("button",{onClick:Pe,className:"p-2 hover:bg-red-500/20 rounded-lg transition-colors",title:"تسجيل خروج",children:t.jsx(Gt,{className:"w-5 h-5 text-slate-400 hover:text-red-400"})})]})]})}),t.jsx("aside",{className:`fixed top-14 sm:top-16 left-0 bottom-0 w-64 bg-slate-900 border-r border-white/10 z-30 transition-transform duration-300 ${y?"translate-x-0":"-translate-x-full"}`,children:t.jsx("nav",{className:"p-4 space-y-2",children:[{id:"home",icon:kt,label:"الرئيسية"},{id:"articles",icon:W,label:"المقالات"},{id:"analytics",icon:je,label:"الإحصائيات"},{id:"settings",icon:Ht,label:"الإعدادات"}].map(({id:r,icon:m,label:w})=>t.jsxs("button",{onClick:()=>{i(r),E(!1)},className:`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${o===r?"bg-cyan-500/20 text-cyan-400":"text-slate-400 hover:bg-white/5 hover:text-white"}`,children:[t.jsx(m,{className:"w-5 h-5"}),t.jsx("span",{className:"font-medium",children:w}),r==="articles"&&C.length>0&&t.jsx("span",{className:"mr-auto px-2 py-0.5 bg-cyan-500/30 rounded-full text-xs",children:C.length})]},r))})}),y&&t.jsx("div",{className:"fixed inset-0 bg-black/50 z-20 lg:hidden",onClick:()=>E(!1)}),t.jsx("main",{className:"pt-14 sm:pt-16 min-h-screen transition-all duration-300",children:t.jsxs("div",{className:"p-3 sm:p-6 lg:p-8",children:[o==="home"&&Ke(),o==="articles"&&qe(),o==="analytics"&&t.jsxs("div",{className:"text-center py-20",children:[t.jsx(je,{className:"w-16 h-16 text-slate-600 mx-auto mb-4"}),t.jsx("p",{className:"text-slate-400",children:"قريباً..."})]}),o==="settings"&&t.jsx("div",{className:"max-w-2xl",children:t.jsxs("div",{className:"bg-slate-800/50 border border-white/10 rounded-2xl p-6",children:[t.jsx("h2",{className:"text-xl font-bold text-white mb-6",children:"الإعدادات"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"مفتاح API"}),t.jsx("input",{type:"password",value:l,onChange:r=>c(r.target.value),className:"w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white",dir:"ltr"})]}),t.jsx("button",{onClick:()=>{localStorage.setItem("gemini_api_key",l)},className:"px-6 py-3 bg-cyan-500 rounded-xl font-bold text-white",children:"حفظ الإعدادات"})]})]})})]})})]})}Qe.createRoot(document.getElementById("root")).render(t.jsx(We.StrictMode,{children:t.jsx(Vt,{})}));
