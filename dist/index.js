import*as t from"../../../../power-user.js";import*as e from"../../../../../script.js";import*as r from"../../../../world-info.js";import*as n from"../../../../instruct-mode.js";import*as o from"../../../../chats.js";import*as i from"../../../../openai.js";import*as a from"../../../../authors-note.js";import*as c from"../../../../group-chats.js";import*as s from"../../../regex/engine.js";var u={d:(t,e)=>{for(var r in e)u.o(e,r)&&!u.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const l=(t=>{var e={};return u.d(e,t),e})({persona_description_positions:()=>t.persona_description_positions,renderStoryString:()=>t.renderStoryString});const p=(t=>{var e={};return u.d(e,t),e})({baseChatReplace:()=>e.baseChatReplace,characters:()=>e.characters,chat_metadata:()=>e.chat_metadata,depth_prompt_depth_default:()=>e.depth_prompt_depth_default,depth_prompt_role_default:()=>e.depth_prompt_role_default,extension_prompt_types:()=>e.extension_prompt_types,getMaxContextSize:()=>e.getMaxContextSize,main_api:()=>e.main_api,name1:()=>e.name1,name2:()=>e.name2,parseMesExamples:()=>e.parseMesExamples,this_chid:()=>e.this_chid});const f=(t=>{var e={};return u.d(e,t),e})({wi_anchor_position:()=>r.wi_anchor_position,world_info_include_names:()=>r.world_info_include_names});const h=(t=>{var e={};return u.d(e,t),e})({formatInstructModeExamples:()=>n.formatInstructModeExamples});const y=(t=>{var e={};return u.d(e,t),e})({appendFileContent:()=>o.appendFileContent});const d=(t=>{var e={};return u.d(e,t),e})({getPromptRole:()=>i.getPromptRole,prepareOpenAIMessages:()=>i.prepareOpenAIMessages,setOpenAIMessageExamples:()=>i.setOpenAIMessageExamples,setOpenAIMessages:()=>i.setOpenAIMessages});const m=(t=>{var e={};return u.d(e,t),e})({metadata_keys:()=>a.metadata_keys});const v=(t=>{var e={};return u.d(e,t),e})({getGroupDepthPrompts:()=>c.getGroupDepthPrompts,selected_group:()=>c.selected_group});const g=(t=>{var e={};return u.d(e,t),e})({getRegexedString:()=>s.getRegexedString,regex_placement:()=>s.regex_placement});function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function b(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */b=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",y="executing",d="completed",m={};function v(){}function g(){}function x(){}var _={};u(_,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(N([])));S&&S!==r&&n.call(S,a)&&(_=S);var O=x.prototype=v.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,c){var s=p(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==w(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=f;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=k(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(w(e)+" is not iterable")}return g.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=u(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},L(P.prototype),u(P.prototype,c,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(O),u(O,s,"Generator"),u(O,a,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function x(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){x(i,n,o,a,c,"next",t)}function c(t){x(i,n,o,a,c,"throw",t)}a(void 0)}))}}SillyTavern.getContext();function E(t,e){return S.apply(this,arguments)}function S(){return(S=_(b().mark((function t(e,r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,SillyTavern.getContext().SlashCommandParser.commands.echo.callback({severity:e},r);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,e){return(0,p.parseMesExamples)(t,e)}function L(t,e,r){return(0,p.baseChatReplace)(t,e,r)}function P(t,e,r){return(0,h.formatInstructModeExamples)(t,e,r)}function j(t){return(0,d.getPromptRole)(t)}function k(t,e){var r=t.name2,n=t.charDescription,o=t.charPersonality,i=t.Scenario,a=t.worldInfoBefore,c=t.worldInfoAfter,s=t.bias,u=t.type,l=t.quietPrompt,p=t.quietImage,f=t.extensionPrompts,h=t.cyclePrompt,y=t.systemPromptOverride,m=t.jailbreakPromptOverride,v=t.personaDescription,g=t.messages,w=t.messageExamples;return(0,d.prepareOpenAIMessages)({name2:r,charDescription:n,charPersonality:o,Scenario:i,worldInfoBefore:a,worldInfoAfter:c,bias:s,type:u,quietPrompt:l,quietImage:p,cyclePrompt:h,systemPromptOverride:y,jailbreakPromptOverride:m,personaDescription:v,extensionPrompts:f,messages:g,messageExamples:w},e)}function I(t){return(0,d.setOpenAIMessages)(t)}function A(t){return(0,d.setOpenAIMessageExamples)(t)}function T(t,e){return N.apply(this,arguments)}function N(){return(N=_(b().mark((function t(e,r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,y.appendFileContent)(e,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],s=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||F(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t){return function(t){if(Array.isArray(t))return R(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||F(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=F(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function F(t,e){if(t){if("string"==typeof t)return R(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(t,e):void 0}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function q(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */q=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:L(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",y="executing",d="completed",m={};function v(){}function g(){}function w(){}var b={};u(b,a,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==r&&n.call(_,a)&&(b=_);var E=w.prototype=v.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var s=p(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==G(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function L(e,r,n){var o=f;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(G(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),u(E,s,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){Y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=G(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==G(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function z(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function H(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){z(i,n,o,a,c,"next",t)}function c(t){z(i,n,o,a,c,"throw",t)}a(void 0)}))}}function W(){return J.apply(this,arguments)}function J(){return J=H(q().mark((function t(){var e,r,n,o,i,a,c,s,u,h,y,d,w,b,x,_,E,S,N,G,F,R,U,Y,z,$,W,J,K,Q,V,X,Z,tt,et,rt,nt,ot,it,at,ct,st,ut,lt,pt,ft,ht,yt,dt,mt,vt,gt,wt;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(["textgenerationwebui","openai"].includes(p.main_api)){t.next=2;break}throw new Error("Unsupported API");case 2:return e=SillyTavern.getContext(),r=[],n=e.chat,o=e.getCharacterCardFields(),i=o.description,a=o.personality,c=o.persona,s=o.scenario,u=o.mesExamples,h=o.system,y=o.jailbreak,d="textgenerationwebui"===p.main_api,w=O(u,d),Et=void 0,b=(0,p.getMaxContextSize)(Et),x=e.ToolManager.isToolCallingSupported(),_=n.filter((function(t){var e;return!t.is_system||x&&Array.isArray(null===(e=t.extra)||void 0===e?void 0:e.tool_invocations)})),t.next=13,Promise.all(_.map(function(){var t=H(q().mark((function t(e,r){var n,o,i,a,c,s;return q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.mes,a=e.is_user?g.regex_placement.USER_INPUT:g.regex_placement.AI_OUTPUT,c={isPrompt:!0,depth:_.length-r-1},u=i,l=a,f=void 0,h=void 0,y=void 0,d=void 0,m=void 0,f=(p=c).characterOverride,h=p.isMarkdown,y=p.isPrompt,d=p.isEdit,m=p.depth,s=(0,g.getRegexedString)(u,l,{characterOverride:f,isMarkdown:h,isPrompt:y,isEdit:d,depth:m}),t.next=7,T(e,s);case 7:return s=t.sent,null!=e&&null!==(n=e.extra)&&void 0!==n&&n.append_title&&null!=e&&null!==(o=e.extra)&&void 0!==o&&o.title&&(s="".concat(s,"\n\n").concat(e.extra.title)),t.abrupt("return",B(B({},e),{},{mes:s,index:r}));case 10:case"end":return t.stop()}var u,l,p,f,h,y,d,m}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:return _=t.sent,E=_.map((function(t){return f.world_info_include_names?"".concat(t.name,": ").concat(t.mes):t.mes})).reverse(),t.next=17,e.getWorldInfoPrompt(E,b,!1);case 17:S=t.sent,S.worldInfoString,N=S.worldInfoBefore,G=S.worldInfoAfter,F=S.worldInfoExamples,R=S.worldInfoDepth,U=S.anBefore,Y=S.anAfter,z=D(F),t.prev=26,z.s();case 28:if(($=z.n()).done){t.next=38;break}if(W=$.value,0!==(J=W.content).length){t.next=33;break}return t.abrupt("continue",36);case 33:K=L(J,p.name1,p.name2),Q=O(K,d),W.position===f.wi_anchor_position.before?(V=w).unshift.apply(V,C(Q)):(X=w).push.apply(X,C(Q));case 36:t.next=28;break;case 38:t.next=43;break;case 40:t.prev=40,t.t0=t.catch(26),z.e(t.t0);case 43:return t.prev=43,z.f(),t.finish(43);case 46:if(!("textgenerationwebui"===p.main_api)){t.next=78;break}Z=C(w),w&&(w=P(w,p.name1,p.name2)),tt={description:i,personality:a,persona:e.powerUserSettings.persona_description_position==l.persona_description_positions.IN_PROMPT?c:"",scenario:s,system:h,char:p.name2,user:p.name1,wiBefore:N,wiAfter:G,loreBefore:N,loreAfter:G,mesExamples:w.join(""),mesExamplesRaw:Z.join("")},_t=tt,et=(0,l.renderStoryString)(_t),r.push({role:"system",content:et,ignoreInstruct:!0}),n.filter((function(t){return!t.is_system})).forEach((function(t){r.push({role:t.is_user?"user":"assistant",content:t.mes})})),rt=D(R);try{for(rt.s();!(nt=rt.n()).done;)ot=nt.value,r=[].concat(C(r.slice(0,r.length-ot.depth)),[{role:j(ot.role),content:ot.entries.join("\n")}],C(r.slice(r.length-ot.depth)))}catch(t){rt.e(t)}finally{rt.f()}if(bt=v.selected_group,xt=Number(p.this_chid),it=(0,v.getGroupDepthPrompts)(bt,xt),v.selected_group&&Array.isArray(it)&&it.length>0?it.forEach((function(t,e){r=[].concat(C(r.slice(0,r.length-t.depth)),[{role:t.role,content:t.text}],C(r.slice(r.length-t.depth)))})):(ut=L(null===(at=p.characters[p.this_chid])||void 0===at||null===(at=at.data)||void 0===at||null===(at=at.extensions)||void 0===at||null===(at=at.depth_prompt)||void 0===at||null===(at=at.prompt)||void 0===at?void 0:at.trim(),p.name1,p.name2)||"",lt=p.depth_prompt_depth_default,pt=null!==(ct=null===(st=p.characters[p.this_chid])||void 0===st||null===(st=st.data)||void 0===st||null===(st=st.extensions)||void 0===st||null===(st=st.depth_prompt)||void 0===st?void 0:st.role)&&void 0!==ct?ct:p.depth_prompt_role_default,r=[].concat(C(r.slice(0,r.length-lt)),[{role:j(pt),content:ut}],C(r.slice(r.length-lt)))),ft={prompt:p.chat_metadata[m.metadata_keys.prompt],interval:p.chat_metadata[m.metadata_keys.interval],position:p.chat_metadata[m.metadata_keys.position],depth:p.chat_metadata[m.metadata_keys.depth],role:p.chat_metadata[m.metadata_keys.role]},ht=-1,!ft.prompt){t.next=75;break}ft.prompt=L(ft.prompt,p.name1,p.name2),t.t1=ft.position,t.next=t.t1===p.extension_prompt_types.IN_PROMPT?65:t.t1===p.extension_prompt_types.IN_CHAT?68:t.t1===p.extension_prompt_types.BEFORE_PROMPT?71:74;break;case 65:return r=[].concat(C(r.slice(0,1)),[{role:"user",content:ft.prompt}],C(r.slice(1))),ht=1,t.abrupt("break",75);case 68:return r=[].concat(C(r.slice(0,r.length-ft.depth)),[{role:j(ft.role),content:ft.prompt}],C(r.slice(r.length-ft.depth))),ht=r.length-ft.depth-1,t.abrupt("break",75);case 71:return r.unshift({role:"user",content:ft.prompt}),ht=0,t.abrupt("break",75);case 74:return t.abrupt("break",75);case 75:ht>=0&&(U.length>0&&(r=[].concat(C(r.slice(0,ht)),[{role:"system",content:U.join("\n")}],C(r.slice(ht))),ht++),Y.length>0&&(r=[].concat(C(r.slice(0,ht+1)),[{role:"system",content:Y.join("\n")}],C(r.slice(ht+1))))),t.next=89;break;case 78:return[],[],dt=I(_),mt=A(w),t.next=84,k({name2:p.name2,charDescription:i,charPersonality:a,Scenario:s,worldInfoBefore:N,worldInfoAfter:G,extensionPrompts:e.extensionPrompts,bias:"",type:"normal",quietPrompt:void 0,quietImage:void 0,cyclePrompt:"",systemPromptOverride:h,jailbreakPromptOverride:y,personaDescription:c,messages:dt,messageExamples:mt},!1);case 84:vt=t.sent,gt=M(vt,2),wt=gt[0],gt[1],(yt=r).push.apply(yt,C(wt));case 89:return t.abrupt("return",r);case 90:case"end":return t.stop()}var bt,xt,_t,Et}),t,null,[[26,40,43,46]])}))),J.apply(this,arguments)}function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Q=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:L(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",y="executing",d="completed",m={};function v(){}function g(){}function w(){}var b={};u(b,a,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==r&&n.call(_,a)&&(b=_);var E=w.prototype=v.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var s=p(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==K(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function L(e,r,n){var o=f;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(K(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),u(E,s,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function V(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function X(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){V(i,n,o,a,c,"next",t)}function c(t){V(i,n,o,a,c,"throw",t)}a(void 0)}))}}var Z=SillyTavern.getContext(),tt={enabled:!0,profileId:"",prompt:'You are an AI assistant designed to generate creative possible actions in a roleplaying scenario. Given the following context, suggest a diverse list of options for the player to take.\n\nOutput ONLY a numbered list of the possible actions. Each action should be a clear, actionable, and concise sentence written in plain text. Include actions that relate to multiple domains (e.g., observation, manipulation, dialogue, combat, deduction.) Do not include greetings, farewells, or polite thanks in the list. Do not use words like "you". Use at least 5 actions.\n\nUse this template:\n\n1. [Action 1]\n2. [Action 2]\n3. [Action 3]\n4. [Action 4]\n5. [Action 5]'};function et(){return et=X(Q().mark((function t(){var e,r,n;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.renderExtensionTemplateAsync("third-party/".concat("SillyTavern-Roadway"),"templates/settings");case 2:e=t.sent,$("#extensions_settings").append(e),(r=$(".roadway_settings")).find("#roadway_enabled").prop("checked",Z.extensionSettings.roadway.enabled).on("change",X(Q().mark((function t(){var e;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=SillyTavern.getContext()).extensionSettings.roadway.enabled=!e.extensionSettings.roadway.enabled,e.saveSettingsDebounced();case 3:case"end":return t.stop()}}),t)})))),Z.ConnectionManagerRequestService.handleDropdown(".roadway_settings .connection_profile",Z.extensionSettings.roadway.profileId,(function(t){var e=SillyTavern.getContext();e.extensionSettings.roadway.profileId=t?t.id:"",e.saveSettingsDebounced()})),(n=r.find(".prompt")).val(Z.extensionSettings.roadway.prompt),n.on("change",(function(){var t=SillyTavern.getContext(),e=n.val();e!==t.extensionSettings.roadway.prompt&&(t.extensionSettings.roadway.prompt=e,t.saveSettingsDebounced())})),r.find(".restore_default").on("click",(function(){n.val(tt.prompt),n.trigger("change")})),r.find(".test").on("click",X(Q().mark((function t(){var e,r,n;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=SillyTavern.getContext()).extensionSettings.roadway.profileId){t.next=5;break}return t.next=4,E("error","Please select a connection profile first in the settings.");case 4:return t.abrupt("return");case 5:if(e.extensionSettings.roadway.prompt){t.next=9;break}return t.next=8,E("error","Please enter a prompt first in the settings.");case 8:return t.abrupt("return");case 9:return t.next=11,W();case 11:return(r=t.sent).push({content:e.extensionSettings.roadway.prompt,role:"system"}),t.next=15,e.ConnectionManagerRequestService.sendRequest(e.extensionSettings.roadway.profileId,r,150);case 15:n=t.sent,console.log(n);case 17:case"end":return t.stop()}}),t)}))));case 12:case"end":return t.stop()}}),t)}))),et.apply(this,arguments)}!function(){Z.extensionSettings.roadway=Z.extensionSettings.roadway||{};for(var t=!1,e=0,r=Object.keys(tt);e<r.length;e++){var n=r[e];void 0===Z.extensionSettings.roadway[n]&&(Z.extensionSettings.roadway[n]=tt[n],t=!0)}t&&Z.saveSettingsDebounced()}(),function(){et.apply(this,arguments)}();