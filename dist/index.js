import*as t from"../../../../power-user.js";import*as e from"../../../../../script.js";import*as r from"../../../../world-info.js";import*as n from"../../../../instruct-mode.js";import*as o from"../../../../chats.js";import*as a from"../../../../openai.js";import*as i from"../../../../authors-note.js";import*as c from"../../../../group-chats.js";import*as s from"../../../regex/engine.js";var u={d:(t,e)=>{for(var r in e)u.o(e,r)&&!u.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const l=(t=>{var e={};return u.d(e,t),e})({persona_description_positions:()=>t.persona_description_positions,renderStoryString:()=>t.renderStoryString});const p=(t=>{var e={};return u.d(e,t),e})({baseChatReplace:()=>e.baseChatReplace,characters:()=>e.characters,chat_metadata:()=>e.chat_metadata,depth_prompt_depth_default:()=>e.depth_prompt_depth_default,depth_prompt_role_default:()=>e.depth_prompt_role_default,extension_prompt_types:()=>e.extension_prompt_types,getMaxContextSize:()=>e.getMaxContextSize,main_api:()=>e.main_api,name1:()=>e.name1,name2:()=>e.name2,parseMesExamples:()=>e.parseMesExamples,systemUserName:()=>e.systemUserName,system_avatar:()=>e.system_avatar,this_chid:()=>e.this_chid});const f=(t=>{var e={};return u.d(e,t),e})({wi_anchor_position:()=>r.wi_anchor_position,world_info_include_names:()=>r.world_info_include_names});const h=(t=>{var e={};return u.d(e,t),e})({formatInstructModeExamples:()=>n.formatInstructModeExamples});const d=(t=>{var e={};return u.d(e,t),e})({appendFileContent:()=>o.appendFileContent});const y=(t=>{var e={};return u.d(e,t),e})({getPromptRole:()=>a.getPromptRole,prepareOpenAIMessages:()=>a.prepareOpenAIMessages,setOpenAIMessageExamples:()=>a.setOpenAIMessageExamples,setOpenAIMessages:()=>a.setOpenAIMessages});const m=(t=>{var e={};return u.d(e,t),e})({metadata_keys:()=>i.metadata_keys});const v=(t=>{var e={};return u.d(e,t),e})({getGroupDepthPrompts:()=>c.getGroupDepthPrompts,selected_group:()=>c.selected_group});const g=(t=>{var e={};return u.d(e,t),e})({getRegexedString:()=>s.getRegexedString,regex_placement:()=>s.regex_placement});function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function b(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */b=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new T(n||[]);return o(i,"_invoke",{value:j(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",y="completed",m={};function v(){}function g(){}function x(){}var _={};u(_,i,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(N([])));S&&S!==r&&n.call(S,i)&&(_=S);var O=x.prototype=v.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,a,i,c){var s=p(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==w(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,r,n){var o=f;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=k(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?y:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(w(e)+" is not iterable")}return g.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=u(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},L(P.prototype),u(P.prototype,c,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new P(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(O),u(O,s,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function x(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){x(a,n,o,i,c,"next",t)}function c(t){x(a,n,o,i,c,"throw",t)}i(void 0)}))}}SillyTavern.getContext();function E(t,e){return S.apply(this,arguments)}function S(){return(S=_(b().mark((function t(e,r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,SillyTavern.getContext().SlashCommandParser.commands.echo.callback({severity:e},r);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,e){return(0,p.parseMesExamples)(t,e)}function L(t,e,r){return(0,p.baseChatReplace)(t,e,r)}function P(t,e,r){return(0,h.formatInstructModeExamples)(t,e,r)}function j(t){return(0,y.getPromptRole)(t)}function k(t,e){var r=t.name2,n=t.charDescription,o=t.charPersonality,a=t.Scenario,i=t.worldInfoBefore,c=t.worldInfoAfter,s=t.bias,u=t.type,l=t.quietPrompt,p=t.quietImage,f=t.extensionPrompts,h=t.cyclePrompt,d=t.systemPromptOverride,m=t.jailbreakPromptOverride,v=t.personaDescription,g=t.messages,w=t.messageExamples;return(0,y.prepareOpenAIMessages)({name2:r,charDescription:n,charPersonality:o,Scenario:a,worldInfoBefore:i,worldInfoAfter:c,bias:s,type:u,quietPrompt:l,quietImage:p,cyclePrompt:h,systemPromptOverride:d,jailbreakPromptOverride:m,personaDescription:v,extensionPrompts:f,messages:g,messageExamples:w},e)}function I(t){return(0,y.setOpenAIMessages)(t)}function A(t){return(0,y.setOpenAIMessageExamples)(t)}function T(t,e){return N.apply(this,arguments)}function N(){return(N=_(b().mark((function t(e,r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.appendFileContent)(e,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],s=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||R(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t){return function(t){if(Array.isArray(t))return F(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||R(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=R(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function R(t,e){if(t){if("string"==typeof t)return F(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function U(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */U=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new I(n||[]);return o(i,"_invoke",{value:L(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",y="completed",m={};function v(){}function g(){}function w(){}var b={};u(b,i,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==r&&n.call(_,i)&&(b=_);var E=w.prototype=v.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,c){var s=p(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==M(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(e,r,n){var o=f;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?y:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(M(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(E),u(E,s,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){Y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=M(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==M(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function z(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function H(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){z(a,n,o,i,c,"next",t)}function c(t){z(a,n,o,i,c,"throw",t)}i(void 0)}))}}function W(){return J.apply(this,arguments)}function J(){return J=H(U().mark((function t(){var e,r,n,o,a,i,c,s,u,h,d,y,w,b,x,_,E,S,N,M,R,F,q,Y,$,z,W,J,K,Q,V,X,Z,tt,et,rt,nt,ot,at,it,ct,st,ut,lt,pt,ft,ht,dt,yt,mt,vt,gt,wt;return U().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(["textgenerationwebui","openai"].includes(p.main_api)){t.next=2;break}throw new Error("Unsupported API");case 2:return e=SillyTavern.getContext(),r=[],n=e.chat,o=e.getCharacterCardFields(),a=o.description,i=o.personality,c=o.persona,s=o.scenario,u=o.mesExamples,h=o.system,d=o.jailbreak,y="textgenerationwebui"===p.main_api,w=O(u,y),Et=void 0,b=(0,p.getMaxContextSize)(Et),x=e.ToolManager.isToolCallingSupported(),_=n.filter((function(t){var e;return!t.is_system||x&&Array.isArray(null===(e=t.extra)||void 0===e?void 0:e.tool_invocations)})),t.next=13,Promise.all(_.map(function(){var t=H(U().mark((function t(e,r){var n,o,a,i,c,s;return U().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.mes,i=e.is_user?g.regex_placement.USER_INPUT:g.regex_placement.AI_OUTPUT,c={isPrompt:!0,depth:_.length-r-1},u=a,l=i,f=void 0,h=void 0,d=void 0,y=void 0,m=void 0,f=(p=c).characterOverride,h=p.isMarkdown,d=p.isPrompt,y=p.isEdit,m=p.depth,s=(0,g.getRegexedString)(u,l,{characterOverride:f,isMarkdown:h,isPrompt:d,isEdit:y,depth:m}),t.next=7,T(e,s);case 7:return s=t.sent,null!=e&&null!==(n=e.extra)&&void 0!==n&&n.append_title&&null!=e&&null!==(o=e.extra)&&void 0!==o&&o.title&&(s="".concat(s,"\n\n").concat(e.extra.title)),t.abrupt("return",B(B({},e),{},{mes:s,index:r}));case 10:case"end":return t.stop()}var u,l,p,f,h,d,y,m}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:return _=t.sent,E=_.map((function(t){return f.world_info_include_names?"".concat(t.name,": ").concat(t.mes):t.mes})).reverse(),t.next=17,e.getWorldInfoPrompt(E,b,!1);case 17:S=t.sent,S.worldInfoString,N=S.worldInfoBefore,M=S.worldInfoAfter,R=S.worldInfoExamples,F=S.worldInfoDepth,q=S.anBefore,Y=S.anAfter,$=D(R),t.prev=26,$.s();case 28:if((z=$.n()).done){t.next=38;break}if(W=z.value,0!==(J=W.content).length){t.next=33;break}return t.abrupt("continue",36);case 33:K=L(J,p.name1,p.name2),Q=O(K,y),W.position===f.wi_anchor_position.before?(V=w).unshift.apply(V,C(Q)):(X=w).push.apply(X,C(Q));case 36:t.next=28;break;case 38:t.next=43;break;case 40:t.prev=40,t.t0=t.catch(26),$.e(t.t0);case 43:return t.prev=43,$.f(),t.finish(43);case 46:if(!("textgenerationwebui"===p.main_api)){t.next=78;break}Z=C(w),w&&(w=P(w,p.name1,p.name2)),tt={description:a,personality:i,persona:e.powerUserSettings.persona_description_position==l.persona_description_positions.IN_PROMPT?c:"",scenario:s,system:h,char:p.name2,user:p.name1,wiBefore:N,wiAfter:M,loreBefore:N,loreAfter:M,mesExamples:w.join(""),mesExamplesRaw:Z.join("")},_t=tt,et=(0,l.renderStoryString)(_t),r.push({role:"system",content:et,ignoreInstruct:!0}),n.filter((function(t){return!t.is_system})).forEach((function(t){r.push({role:t.is_user?"user":"assistant",content:t.mes})})),rt=D(F);try{for(rt.s();!(nt=rt.n()).done;)ot=nt.value,r=[].concat(C(r.slice(0,r.length-ot.depth)),[{role:j(ot.role),content:ot.entries.join("\n")}],C(r.slice(r.length-ot.depth)))}catch(t){rt.e(t)}finally{rt.f()}if(bt=v.selected_group,xt=Number(p.this_chid),at=(0,v.getGroupDepthPrompts)(bt,xt),v.selected_group&&Array.isArray(at)&&at.length>0?at.forEach((function(t,e){r=[].concat(C(r.slice(0,r.length-t.depth)),[{role:t.role,content:t.text}],C(r.slice(r.length-t.depth)))})):(ut=L(null===(it=p.characters[p.this_chid])||void 0===it||null===(it=it.data)||void 0===it||null===(it=it.extensions)||void 0===it||null===(it=it.depth_prompt)||void 0===it||null===(it=it.prompt)||void 0===it?void 0:it.trim(),p.name1,p.name2)||"",lt=p.depth_prompt_depth_default,pt=null!==(ct=null===(st=p.characters[p.this_chid])||void 0===st||null===(st=st.data)||void 0===st||null===(st=st.extensions)||void 0===st||null===(st=st.depth_prompt)||void 0===st?void 0:st.role)&&void 0!==ct?ct:p.depth_prompt_role_default,r=[].concat(C(r.slice(0,r.length-lt)),[{role:j(pt),content:ut}],C(r.slice(r.length-lt)))),ft={prompt:p.chat_metadata[m.metadata_keys.prompt],interval:p.chat_metadata[m.metadata_keys.interval],position:p.chat_metadata[m.metadata_keys.position],depth:p.chat_metadata[m.metadata_keys.depth],role:p.chat_metadata[m.metadata_keys.role]},ht=-1,!ft.prompt){t.next=75;break}ft.prompt=L(ft.prompt,p.name1,p.name2),t.t1=ft.position,t.next=t.t1===p.extension_prompt_types.IN_PROMPT?65:t.t1===p.extension_prompt_types.IN_CHAT?68:t.t1===p.extension_prompt_types.BEFORE_PROMPT?71:74;break;case 65:return r=[].concat(C(r.slice(0,1)),[{role:"user",content:ft.prompt}],C(r.slice(1))),ht=1,t.abrupt("break",75);case 68:return r=[].concat(C(r.slice(0,r.length-ft.depth)),[{role:j(ft.role),content:ft.prompt}],C(r.slice(r.length-ft.depth))),ht=r.length-ft.depth-1,t.abrupt("break",75);case 71:return r.unshift({role:"user",content:ft.prompt}),ht=0,t.abrupt("break",75);case 74:return t.abrupt("break",75);case 75:ht>=0&&(q.length>0&&(r=[].concat(C(r.slice(0,ht)),[{role:"system",content:q.join("\n")}],C(r.slice(ht))),ht++),Y.length>0&&(r=[].concat(C(r.slice(0,ht+1)),[{role:"system",content:Y.join("\n")}],C(r.slice(ht+1))))),t.next=89;break;case 78:return[],[],yt=I(_),mt=A(w),t.next=84,k({name2:p.name2,charDescription:a,charPersonality:i,Scenario:s,worldInfoBefore:N,worldInfoAfter:M,extensionPrompts:e.extensionPrompts,bias:"",type:"normal",quietPrompt:void 0,quietImage:void 0,cyclePrompt:"",systemPromptOverride:h,jailbreakPromptOverride:d,personaDescription:c,messages:yt,messageExamples:mt},!1);case 84:vt=t.sent,gt=G(vt,2),wt=gt[0],gt[1],(dt=r).push.apply(dt,C(wt));case 89:return t.abrupt("return",r);case 90:case"end":return t.stop()}var bt,xt,_t,Et}),t,null,[[26,40,43,46]])}))),J.apply(this,arguments)}function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Q=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new I(n||[]);return o(i,"_invoke",{value:L(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",y="completed",m={};function v(){}function g(){}function w(){}var b={};u(b,i,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==r&&n.call(_,i)&&(b=_);var E=w.prototype=v.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,c){var s=p(t[o],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==K(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(e,r,n){var o=f;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?y:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(K(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(E),u(E,s,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function V(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function X(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){V(a,n,o,i,c,"next",t)}function c(t){V(a,n,o,i,c,"throw",t)}i(void 0)}))}}var Z=SillyTavern.getContext(),tt={enabled:!0,profileId:"",prompt:"You are an AI assistant designed to generate creative possible actions in a roleplaying scenario. Given the following context, suggest a diverse list of options for the player to take.\n\nOutput ONLY a numbered list of the possible actions. Each action should be a clear, actionable, and concise sentence written in plain text. Include actions that relate to multiple domains (e.g., observation, manipulation, dialogue, combat, deduction.) Do not include greetings, farewells, or polite thanks in the list. Do not use words like \"you\". Use exact 10 actions.\n\nExample:\n\n1. Examine the ground for any signs of footprints or disturbed earth.\n2. Ask Mrs. Abernathy about any local rumors regarding the strange symbol.\n3. Search Mr. Peterson's abandoned house for any hidden messages or clues.\n4. Attempt to pick the lock on the neighbor's shed, hoping to find something related to their disappearances.\n5. Show the photo of the symbol to the local bartender for information."};function et(){return et=X(Q().mark((function t(){var e,r,n,o,a;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(t){var e=document.createElement("details"),r=document.createElement("summary"),n=document.createElement("pre");return r.textContent="Roadway",n.textContent=t,e.append(r,n),e.outerHTML},t.next=3,Z.renderExtensionTemplateAsync("third-party/".concat("SillyTavern-Roadway"),"templates/settings");case 3:e=t.sent,$("#extensions_settings").append(e),(r=$(".roadway_settings")).find("#roadway_enabled").prop("checked",Z.extensionSettings.roadway.enabled).on("change",X(Q().mark((function t(){var e;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=SillyTavern.getContext()).extensionSettings.roadway.enabled=!e.extensionSettings.roadway.enabled,e.saveSettingsDebounced();case 3:case"end":return t.stop()}}),t)})))),Z.ConnectionManagerRequestService.handleDropdown(".roadway_settings .connection_profile",Z.extensionSettings.roadway.profileId,(function(t){var e=SillyTavern.getContext();e.extensionSettings.roadway.profileId=t?t.id:"",e.saveSettingsDebounced()})),(n=r.find(".prompt")).val(Z.extensionSettings.roadway.prompt),n.on("change",(function(){var t=SillyTavern.getContext(),e=n.val();e!==t.extensionSettings.roadway.prompt&&(t.extensionSettings.roadway.prompt=e,t.saveSettingsDebounced())})),r.find(".restore_default").on("click",(function(){n.val(tt.prompt),n.trigger("change")})),o=$('<div title="Generate Roadway" class="mes_button mes_magic_roadway_button fa-solid fa-road interactable" tabindex="0"></div>'),$("#message_template .mes_buttons .extraMesButtons").prepend(o),$(document).on("click",".mes_magic_roadway_button",X(Q().mark((function t(){var e,r,n,o,i,c,s,u;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=SillyTavern.getContext()).extensionSettings.roadway.profileId){t.next=5;break}return t.next=4,E("error","Please select a connection profile first in the settings.");case 4:case 8:return t.abrupt("return");case 5:if(e.extensionSettings.roadway.prompt){t.next=9;break}return t.next=8,E("error","Please enter a prompt first in the settings.");case 9:return r=$(this).closest(".mes"),n=Number(r.attr("mesid")),t.next=13,W();case 13:return(o=t.sent).push({content:e.extensionSettings.roadway.prompt,role:"system"}),t.next=17,e.ConnectionManagerRequestService.sendRequest(e.extensionSettings.roadway.profileId,o,500);case 17:return i=t.sent,c=e.chat.find((function(t){var e;return(null===(e=t.extra)||void 0===e?void 0:e.roadway_target_chat)===n})),s=null!=c?c:{mes:a(i.content),name:p.systemUserName,force_avatar:p.system_avatar,is_system:!0,is_user:!1,extra:{isSmallSys:!0,roadway_target_chat:n}},c?(s.mes=a(i.content),u=e.chat.indexOf(c),$('[mesid="'.concat(u,'"] .mes_text')).html(s.mes)):(e.chat.push(s),e.addOneMessage(s)),t.next=23,e.saveChat();case 23:case"end":return t.stop()}}),t,this)}))));case 15:case"end":return t.stop()}}),t)}))),et.apply(this,arguments)}!function(){Z.extensionSettings.roadway=Z.extensionSettings.roadway||{};for(var t=!1,e=0,r=Object.keys(tt);e<r.length;e++){var n=r[e];void 0===Z.extensionSettings.roadway[n]&&(Z.extensionSettings.roadway[n]=tt[n],t=!0)}t&&Z.saveSettingsDebounced()}(),function(){et.apply(this,arguments)}();