(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1751:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Field}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6156),_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7375),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7294),_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9442);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function eval_math_expr(exp){var reg=/(?:[a-z$_][a-z0-9$_]*)|(?:[;={}\[\]"'!&<>^\\?:])/gi,valid=!0,res=null;if(exp=exp.replace(reg,(function(e){if(Math.hasOwnProperty(e))return"Math."+e;valid=!1})),!valid)return null;try{res=eval(exp)}catch(e){return null}return res}function Field(e){var t=e.className,n=e.type,r=e.style,i=e.onInput,o=(0,_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(e,["className","type","style","onInput"]),a=(0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.F)(__webpack_require__(9350)),s=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),c=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),u=c[0],l=c[1];return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){null!=o.defaultValue&&void 0!=o.defaultValue&&(s.current.value=o.defaultValue)}),[o.defaultValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:t,style:r,children:[o.name?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:a.title,children:o.name}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",_objectSpread(_objectSpread({ref:s},o),{},{type:"number"==n?"text":n,className:a.field+(n?" "+a["type-"+n]:"")+(u?" "+a.wrong:""),onInput:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0].target,s=a.value,c=s;if("number"==n){var d=eval_math_expr(a.value);if(null==d||void 0==d)return l(!0);if(o.min&&d<Number(o.min))return l(!0);if(o.max&&d>Number(o.max))return l(!0);if(o.step&&d%Number(o.step)!=0)return l(!0);c=d}u&&l(!1),i(c,s)}}))]})}},9442:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var r=n(4699),i=n(3956);function o(e){return function(e,t){var n=e[t];if(!n)return e;var i={dark:n};return Object.entries(e).forEach((function(e){var o=(0,r.Z)(e,2),a=o[0],s=o[1];a!=t&&(i[a]=s+" "+n)})),i}(e,(0,i.vs)().darkModeActive?"dark":"light")}},8923:function(e,t,n){"use strict";n.r(t),n.d(t,{withScale:function(){return i},addTimes:function(){return o}});var r=n(8333),i=function(e){return function(t){return"".concat(Math.round(r.Time(t).toTicks()*e),"i")}},o=function(e,t){return"".concat(r.Time(e).toTicks()+r.Time(t).toTicks(),"i")}},5960:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(8333),i=n(8923),o=i.withScale,a=i.addTimes;function s(e,t){var n=t.reduce((function(e,t){return e+t.length*(t.repeat+1)}),0);r.Transport.loop=!0,r.Transport.loopStart=0,r.Transport.loopEnd=o(n)("1m"),r.Transport.timeSignature=[4,4];var i=0;t.forEach((function(t,n){var s=o(t.length)("".concat(1+t.repeat,"m"));t.ratios.forEach((function(n,s){if(!(n<=0))for(var c=t.subdivide[s]||1,u=o(t.length/(n*c))("1n"),l=o(t.offsets[s]||0)(u),d=function(i,a){var u={accent:i%c==0,duration:o(.98*t.length/(n*c))("1n"),track:s};r.Transport.schedule((function(t){return e(t,u)}),a)},_=0,f=a(i,l);_<n*c*(1+t.repeat);_++,f=a(f,u))d(_,f)})),r.Transport.schedule((function(e){setTimeout((function(){r.Transport.swing=t.swing}),1e3*(e-r.Transport.now()))}),i),i=a(i,s)}))}},966:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return se}});var r=n(5893),i=n(4699),o=n(9008),a=n(7294),s=n(4651),c=n(9442),u=n(7329),l=n(4671);function d(){return window?(window.__my_context||(window.__my_context={_tone:n(8333)}),window.__my_context):null}var _=n(8333),f=[{name:"string",make:function(){return new _.PluckSynth({attackNoise:1,dampening:4e3,resonance:.75})},trigger:function(e){return function(t,n,r){return e.triggerAttackRelease(r?"C5":"C4",t,n,.2)}}},{name:"hi-hat",make:function(){return new _.NoiseSynth({volume:-15,filter:{Q:1},envelope:{attack:.01,decay:.15},filterEnvelope:{attack:.01,decay:.03,baseFrequency:4e3,octaves:-2.5,exponent:4}})},trigger:function(e){return function(t,n,r){return e.triggerAttackRelease(t,n,.8)}}},{name:"kick",make:function(){return new _.MembraneSynth({pitchDecay:.05,octaves:2,oscillator:{type:"sine"},envelope:{attack:.001,decay:.2,sustain:.05,release:.01,attackCurve:"exponential"}})},trigger:function(e){return function(t,n,r){return e.triggerAttackRelease(r?"G2":"E2",t,n,.8)}}},{name:"click",make:function(){return new _.AMSynth({harmonicity:3,detune:0,oscillator:{type:"triangle"},envelope:{attack:.01,decay:.01,sustain:.8,release:.4},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}})},trigger:function(e){return function(t,n,r){return e.triggerAttackRelease(r?"C5":"F5",.1,n,r?1:.8)}}}].concat(["Cowbell-1.wav","Cowbell-2.wav","Cowbell-3.wav","Clave-1.wav","Closed-Hi-Hat-1.wav","Ensoniq-SQ-1-Ride-Cymbal.wav"].map((function(e){return{name:e.split(".")[0],make:function(){return new _.Player("https://".concat(window.location.host,"/polyrhythm3/sounds/").concat(e))},trigger:function(e){return function(t,n,r){e.restart(n,0,t)}}}}))),m=f.map((function(e){return e.name})),p=function(){return m};function h(e,t){var n=d();return n.old_synths||(n.old_synths=[]),n.synths=e.slice(0,t).map((function(e,t){if(n.old_synths[t]&&n.old_synths[t][0]&&n.old_synths[t][1]==e){var r=[n.old_synths[t][0],e];return n.old_synths[t][0]=null,r}var o=function(e){return[f[e].make(),e]}(e),a=(0,i.Z)(o,2),s=a[0],c=a[1];return[s.toMaster(),c]})),n.old_synths&&(n.old_synths.forEach((function(e){var t=(0,i.Z)(e,2),n=t[0];t[1];n&&(n.disconnect(),n.dispose())})),n.old_synths=[]),n.triggers=n.synths.map((function(e){return function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return f[r].trigger(n)}(e)})),function(){n.triggers=[],n.old_synths=n.synths,n.synths=[]}}var v=(0,l.Z)((function(e){return{sections:[{length:1,repeat:0,swing:0,ratios:[1,4],subdivide:[1],offsets:[0]}],curSection:0,editMode:"section",instrumentIDs:Array.from({length:10},(function(e,t){return t%p().length})),addSection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{length:1,repeat:0,swing:0,ratios:[1,4],subdivide:[1],offsets:[0]};return e((function(e){return{sections:[].concat((0,u.Z)(e.sections),[t])}}))},swapSections:function(t,n){return e((function(e){var r=e.sections[t];return e.sections[t]=e.sections[n],e.sections[n]=r,{sections:(0,u.Z)(e.sections)}}))},setSections:function(t){return e({sections:t})},setInstrumentIDs:function(t){return e({instrumentIDs:t})},setCurSection:function(t){return e({curSection:t})},setEditMode:function(t){return e({editMode:t})},paused:!0,bpm:100,pause:function(){return e({paused:!0})},play:function(){return e({paused:!1})},setBpm:function(t){return e({bpm:t})}}})),b=n(374),y="_",g="a";var x=n(8193),j=n(9327),k=n(8333);function w(){var e=v((0,a.useCallback)((function(e){return[e.sections,e.swapSections,e.addSection,e.curSection,e.setCurSection,e.bpm,e.editMode]}),[]),b.Z),t=(0,i.Z)(e,7),o=t[0],s=t[1],u=t[2],l=t[3],d=t[4],_=t[5],f=t[6],m=(0,c.F)(n(9010)),p=(0,a.useMemo)((function(){return o.reduce((function(e,t){return Math.max(e,t.ratios.length)}),0)}),[o]),h=(0,a.useMemo)((function(){return o.reduce((function(e,t){return e+t.length*(1+t.repeat)}),0)}),[o]),y=(0,a.useRef)(),g=(0,a.useRef)();(0,a.useEffect)((function(){var e=k.Time("1m").toTicks()*h,t=!1,n=0,r=null,i=null,o=function(){r=g.current.offsetWidth,i=.06*r};o(),window.addEventListener("resize",o);return function o(){if(y.current&&g.current){var a=Math.min(r,r*k.Time(k.Transport.position).toTicks()/e);(a=Math.round(a/i)*i)!=n&&(y.current.style.transform="translateX(".concat(a,"px)"),y.current.style.transition=0!=a?"transform ".concat(60*.06*h*4/_,"s linear"):null,n=a),t||requestAnimationFrame(o)}}(),function(){t=!0,window.removeEventListener("resize",o)}}),[g.current,h]);var w=(0,a.useRef)(null),E=(0,a.useRef)(null),O=(0,a.useCallback)((function(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}),[]),N=(0,a.useCallback)((function(e){e.preventDefault();var t=e.target.closest("."+m.section);t.dragover_count||(t.dragover_count=0),t.dragover_count++,t.classList.add(m.dragover)}),[]),C=(0,a.useCallback)((function(e){e.preventDefault();var t=e.target.closest("."+m.section);t.dragover_count--,0==t.dragover_count&&t.classList.remove(m.dragover)}),[]),P=(0,a.useCallback)((function(e){return function(t){d(e),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("number",e);var n=document.createElement("div");n.style.visibility="hidden",t.dataTransfer.setDragImage(n,0,0);var r=t.target.getBoundingClientRect();E.current=(r.left+r.right)/2,t.target.style.transition="transform .2s",t.target.style.transform="translate(".concat(t.clientX-E.current,"px, ").concat(.5*-t.target.offsetHeight|0,"px)\n        scale(.5)"),setTimeout((function(){t.target.style.transition=null,w.current=t.target}),150)}}),[]),M=(0,a.useCallback)((function(e){w.current=null,e.target.style.transition=null,e.target.style.transform=null,e.target.style.zIndex=null}),[]),D=(0,a.useCallback)((function(e){if(w.current){var t=w.current.style;t.transform="translate(".concat(e.clientX-E.current,"px, ").concat(.5*-w.current.offsetHeight|0,"px)\n            scale(.5)"),t.zIndex=11}}),[w,E]),T=(0,a.useCallback)((function(e){return function(t){w.current.style.transition=null,w.current.style.transform=null,w.current.style.zIndex=null,w.current=null;var n=t.target.closest("."+m.section);n.dragover_count=0,n.classList.remove(m.dragover),d(e),s(e,Number(t.dataTransfer.getData("number")))}}),[]),A=1;return(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("div",{className:m.add_btn,onClick:function(){return u()},children:(0,r.jsx)(x.Lfi,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{ref:g,className:m.bar_parent,children:(0,r.jsx)("div",{ref:y,className:m.bar})}),(0,r.jsx)("div",{className:m.container,children:o.map((function(e,t){return(0,r.jsx)("div",{className:m.section+(t==l&&o.length>1&&"section"==f?" "+m.current:""),style:{flexBasis:"".concat(100*e.length*(e.repeat+1)/h,"%"),cursor:l==t?"grab":"pointer"},onClick:function(){return d(t)},onDragStart:P(t),onDragEnd:M,onDragOver:O,onDrag:D,onDragEnter:N,onDragLeave:C,onDrop:T(t),draggable:!0,children:Array.from({length:e.repeat+1},(function(t,n){return(0,r.jsxs)("div",{className:m.section_part+(n>0?" "+m.repeated:"")+(A++%2==0?" "+m.even:""),children:[Array.from({length:p},(function(t,n){var i=e.ratios[n]||0,o=e.subdivide[n]||1,a=e.offsets[n]||0;return(0,r.jsx)("div",{className:m.row,children:Array.from({length:i*o},(function(e,t){return(0,r.jsx)("div",{className:m.dot+(t%o==0?"":" "+m.sub_dot),children:(0,r.jsx)("div",{style:{left:a?"".concat(100*a,"%"):null}})},"dot"+t)}))},"row"+n)})),(0,r.jsx)("div",{className:m.repeat_line,children:(0,r.jsx)(j.oic,{})}),1!=e.length&&0==n?(0,r.jsxs)("div",{className:m.scale_corner,children:[(0,r.jsx)("span",{children:String(e.length).substr(0,4)}),(0,r.jsx)(x.gV0,{style:{verticalAlign:"middle"}})]}):""]},n)}))},"section"+t)}))})]})}var E=n(6156),O=n(1751),N=n(7375);function C(e){var t=e.className,i=(e.name,e.onInput),o=e.defaultValue,s=e.min,l=e.max,d=e.step,_=e.delimiter,f=((0,N.Z)(e,["className","name","onInput","defaultValue","min","max","step","delimiter"]),(0,c.F)(n(454))),m=(0,a.useMemo)((function(){return(o||"").split(_||":").map(Number)}),[o,_]),p=(0,a.useState)(m),h=p[0],v=p[1];return(0,a.useEffect)((function(){i&&i(h)}),[h]),(0,a.useEffect)((function(){v(m)}),[m]),(0,r.jsxs)("div",{className:f.container+(t?" "+t:""),children:[(0,r.jsx)("div",{className:f.ratios,children:h.map((function(e,t){return(0,r.jsxs)("div",{children:[(0,r.jsx)(O.Z,{className:f.field,defaultValue:e,type:"number",step:d,min:s,max:l,onInput:function(e,n){e.length<=0||("0"==n&&t==h.length-1?h.splice(t,1):h[t]=Number(e),v((0,u.Z)(h)))}}),t<h.length-1?(0,r.jsx)("div",{className:f.delimiter,children:" : "}):""]},t)}))}),(0,r.jsx)("div",{className:f.add_btn,onClick:function(){return v([].concat((0,u.Z)(h),[s||0]))},children:(0,r.jsx)(x.Lfi,{style:{verticalAlign:"middle"}})})]})}var P=n(7079),M=n.n(P);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,E.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(){var e=v((0,a.useCallback)((function(e){return[e.sections,e.setSections,e.curSection,e.setCurSection]}),[]),b.Z),t=(0,i.Z)(e,4),o=t[0],s=t[1],u=t[2],l=t[3],d=(0,c.F)(n(17)),_=(0,a.useMemo)((function(){return o[u]}),[o,u]),f=function(e){return function(t){null!=t&&void 0!=t&&(e(t),s(M()(o)))}};return(0,r.jsx)("div",{className:d.container,children:(0,r.jsxs)("div",{className:d.flex_container,children:[(0,r.jsx)("table",{className:d.table,children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"ratios"}),(0,r.jsx)("td",{children:(0,r.jsx)(C,{className:d.picker,name:"ratios",defaultValue:_.ratios.join(":"),min:0,step:1,onInput:f((function(e){return _.ratios=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"subdivides"}),(0,r.jsx)("td",{children:(0,r.jsx)(C,{name:"subdivide",defaultValue:_.subdivide.join(":"),step:1,min:1,onInput:f((function(e){return _.subdivide=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"offsets"}),(0,r.jsx)("td",{children:(0,r.jsx)(C,{name:"offsets",defaultValue:_.offsets.join(":"),max:1,min:0,onInput:f((function(e){return _.offsets=e}))})})]})]})}),(0,r.jsx)("table",{className:d.single_fields+" "+d.table,children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"scale"}),(0,r.jsx)("td",{children:(0,r.jsx)(O.Z,{type:"number",min:"0",defaultValue:_.length,onInput:f((function(e){return _.length=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"repeat"}),(0,r.jsx)("td",{children:(0,r.jsx)(O.Z,{type:"number",step:"1",min:"0",defaultValue:_.repeat,onInput:f((function(e){return _.repeat=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"swing"}),(0,r.jsx)("td",{children:(0,r.jsx)(O.Z,{type:"number",min:"0",max:"1",defaultValue:_.swing,onInput:f((function(e){return _.swing=e}))})})]}),(0,r.jsxs)("tr",{className:d.remove_btn,children:[(0,r.jsx)("th",{children:"remove"}),(0,r.jsx)("td",{children:(0,r.jsx)(O.Z,T(T({type:"button",value:"remove"},o.length<=1?{disabled:!0}:{}),{},{onClick:f((function(){if(o.length>1)return l(Math.max(0,u-1)),o.splice(o.indexOf(_),1)}))}))})]})]})})]})})}var S=n(9352);function I(e){var t=e.style,o=v((0,a.useCallback)((function(e){return[e.paused,e.pause,e.play,e.bpm,e.setBpm,e.editMode,e.setEditMode]}),[]),b.Z),s=(0,i.Z)(o,7),u=s[0],l=s[1],d=s[2],_=s[3],f=s[4],m=s[5],p=s[6],h=(0,c.F)(n(8944));return(0,r.jsx)("div",{className:h.container,style:t,children:(0,r.jsxs)("div",{className:h.transport_bar,children:[(0,r.jsx)("div",{className:h.transport_button,onClick:(0,a.useCallback)((function(){return(u?d:l)()}),[u]),children:u?(0,r.jsx)(S.hpr,{style:{verticalAlign:"middle"}}):(0,r.jsx)(S.bKE,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{className:h.transport_button,onClick:(0,a.useCallback)((function(){n(8333).Transport.stop(),l()}),[]),children:(0,r.jsx)(S.vJm,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{style:{paddingLeft:"2em",paddingRight:".5em"},children:"bpm"}),(0,r.jsx)("div",{children:(0,r.jsx)(O.Z,{style:{width:"4em"},type:"number",defaultValue:_,onInput:function(e){return f(e)}})}),(0,r.jsx)("div",{className:h.settings_button+("instrument"==m?" "+h.edit_mode:""),onClick:(0,a.useCallback)((function(){return p("section"==m?"instrument":"section")}),[m]),children:(0,r.jsx)(S.XkT,{style:{verticalAlign:"middle"}})})]})})}var Z=n(7516),R=n(7735);function L(e){navigator.clipboard?navigator.clipboard.writeText(e):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(t)}(e)}var B=n(3956),F=n(6808),U=n.n(F),W=n(3729),q=n.n(W),K=n(4021),V=n.n(K);function H(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(){var e=(0,c.F)(n(8674)),t=(0,B.vs)(),o=t.darkModeActive,s=t.switchToDarkMode,u=t.switchToLightMode,l=(0,a.useState)(!1),d=l[0],_=l[1],f=(0,a.useState)({cb:function(){return null}}),m=f[0],p=f[1],h=(0,a.useState)(!1),b=h[0],x=h[1],j=!1,k=null,w=(0,a.useCallback)((function(e){return"yes"==U().get("is_supporter_already")?e():j&&Math.random()>k?(k+=.15,e()):(_(!0),void p({cb:function(){j=!0,k=.1,_(!1),e.apply(void 0,arguments)}}))}),[]),E=(0,a.useCallback)((function(){x(!0),U().set("is_supporter_already","yes",{expires:111})}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:e.sellout,style:{display:d?null:"none"},children:(0,r.jsxs)("div",{className:e.sellout_box,children:[b?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h1",{children:["Thank you! ","<3"]}),(0,r.jsx)("p",{children:"What a C H A D."})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Ooops! Looks like this is a premium feature!"}),(0,r.jsx)("p",{children:"Just kidding it's not. (But it could be)"}),(0,r.jsxs)("p",{children:["Oh and by the way, did you know you can support me on",(0,r.jsx)("a",{href:"https://www.buymeacoffee.com/angramme",target:"_blank",children:" buymeacoffee.com/angramme"}),"?"]})]}),(0,r.jsxs)("div",{className:e.coffee_btns,children:[b?"":(0,r.jsxs)("a",{href:"https://www.buymeacoffee.com/angramme",target:"_blank",className:e.coffee_button,onClick:E,children:[(0,r.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee",className:e.coffee_img}),(0,r.jsx)("span",{className:e.coffee_text,children:"Buy me a coffee"})]}),(0,r.jsx)("div",{className:e.imbroke,onClick:(0,a.useCallback)(m.cb,[m]),children:b?"Continue":"Nah fam, I'm broke"})]})]})}),(0,r.jsx)("div",{className:e.displacer}),(0,r.jsxs)("div",{className:e.left,children:[(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)("a",{href:"https://ozi.vercel.app",target:"_blank",rel:"noopener",children:(0,r.jsx)(R.Tqn,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{className:e.tooltip,children:"my website"})]}),(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)("a",{href:"https://www.buymeacoffee.com/angramme",target:"_blank",rel:"noopener",children:(0,r.jsx)(Z.vm6,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{className:e.tooltip,children:"buy me a coffee"})]}),(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)("a",{href:"https://github.com/Angramme/polyrhythm3#tutorial",target:"_blank",rel:"noopener",children:(0,r.jsx)(Z.CUu,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{className:e.tooltip,children:"Open help page."})]})]}),(0,r.jsxs)("div",{className:e.right,children:[(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)(Z.Ifu,{style:{verticalAlign:"middle"},onClick:(0,a.useCallback)((function(){w((function(){var e,t,n=v.getState();L(window.location.origin+window.location.pathname+(e=n.sections,t=n.bpm,"?"+Object.entries({lengths:e.map((function(e){return e.length})).join(y),repeats:e.map((function(e){return e.repeat})).join(y),swings:e.map((function(e){return e.swing})).join(y),ratios:e.map((function(e){return e.ratios.join(g)})).join(y),subdivides:e.map((function(e){return e.subdivide.join(g)})).join(y),offsets:e.map((function(e){return e.offsets.join(g)})).join(y),bpm:t}).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return"&".concat(n,"=").concat(r)})).join("").slice(1))),setTimeout((function(){return alert("copied the url to clipboard! ")}),100)}))}),[])}),(0,r.jsx)("div",{className:e.tooltip,children:"share your rhythm"})]}),(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)(R.ojp,{style:{verticalAlign:"middle"},onClick:(0,a.useCallback)((function(){w((function(){q()(function(e){var t,n=e.reduce((function(e,t){return Math.max(t.ratios.length,e)}),0),r=Array.from({length:n},(function(){return 0})),i=new(V().Track),o=H(e);try{for(o.s();!(t=o.n()).done;){for(var a=t.value,s=512*a.length,c=0;c<a.offsets.length;c++)r[c]+=a.offsets[c]*s/a.ratios[c]/(a.subdivide[c]||1)|0;for(var u=0;u<a.repeat+1;u++)for(var l=0;l<a.ratios.length;l++)for(var d=s/a.ratios[l]/(a.subdivide[l]||1),_=0;_<a.ratios[l];_++){i.addEvent(new(V().NoteEvent)({pitch:"".concat("CDEFGAB"[l%7]).concat(l/7+3|0),duration:"T".concat(Math.min(0|d,50)),startTick:r[l]})),r[l]+=0|d;for(var f=0;f<a.subdivide[l]-1;f++)i.addEvent(new(V().NoteEvent)({pitch:"".concat("CDEFGAB"[l%7]).concat(l/7+3|0),duration:"T".concat(Math.min(0|d,50)),startTick:r[l],velocity:.7})),r[l]+=0|d}for(var m=0;m<a.offsets.length;m++)r[m]-=a.offsets[m]*s/a.ratios[m]/(a.subdivide[m]||1)|0}}catch(p){o.e(p)}finally{o.f()}return new(V().Writer)(i).dataUri()}(v.getState().sections),"Polyrhythm.mid")}))}),[])}),(0,r.jsx)("div",{className:e.tooltip,children:"export midi"})]}),(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)("span",{onClick:function(){return o?u():s()},children:o?(0,r.jsx)(Z.dZ3,{style:{verticalAlign:"middle"}}):(0,r.jsx)(Z.JuG,{style:{verticalAlign:"middle"}})}),(0,r.jsxs)("div",{className:e.tooltip,children:["switch to ",o?"light":"dark"," mode"]})]})]})]})}var G=n(2122),Q=n(3658),J=n(5605),Y=n.n(J);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,E.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e){var t=(0,G.Z)({},e),n=(0,c.F)(Y());return(0,r.jsx)(Q.Z,ee(ee({},t),{},{controlClassName:n.control,menuClassName:n.menu,placeholderClassName:n.placeholder}))}function ne(e){var t=e.style,o=v((0,a.useCallback)((function(e){return[e.instrumentIDs,e.setInstrumentIDs,e.sections]}),[]),b.Z),s=(0,i.Z)(o,3),u=s[0],l=s[1],d=s[2],_=(0,c.F)(n(2887)),f=p(),m=(0,a.useMemo)((function(){return d.reduce((function(e,t){return Math.max(e,t.ratios.length)}),-1)}),[d]);return(0,r.jsx)("div",{className:_.container,style:t,children:u.slice(0,m).map((function(e,t){return(0,r.jsxs)("div",{className:_.instrument,children:[(0,r.jsxs)("div",{className:_.header,children:["track ",t+1," uses"]}),(0,r.jsx)("div",{className:_.body,children:(0,r.jsx)(te,{onChange:(n=t,function(e){var t=Number(e.value);u[n]=t,l(M()(u))}),value:{value:e,label:f[e]},options:f.map((function(e,t){return{value:t,label:e}}))})})]},t);var n}))})}function re(){var e=(0,c.F)(n(7314)),t=v((0,a.useCallback)((function(e){return e.editMode}),[]));return(0,r.jsxs)("div",{className:e.container,children:[(0,r.jsx)(X,{}),(0,r.jsx)(w,{}),(0,r.jsx)(I,{}),"section"==t?(0,r.jsx)(A,{}):"","instrument"==t?(0,r.jsx)(ne,{}):""]})}var ie=n(2491),oe=n.n(ie),ae=n(8333);function se(){var e=(0,c.F)(n(9111)),t=v((0,a.useCallback)((function(e){return[e.paused,e.bpm,e.setBpm,e.sections,e.setSections,e.instrumentIDs]}),[]),b.Z),u=(0,i.Z)(t,6),l=u[0],_=u[1],f=u[2],m=u[3],p=u[4],x=u[5];(0,a.useEffect)((function(){l?ae.Transport.pause():ae.Transport.start()}),[l]),(0,a.useEffect)((function(){ae.Transport.bpm.rampTo(_,.2)}),[_]),(0,a.useEffect)((function(){var e=function(){ae.start(),ae.context.resume()};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);var j=(0,a.useMemo)((function(){return m.reduce((function(e,t){return Math.max(e,t.ratios.length)}),-1)}),[m]);(0,a.useEffect)((function(){return h(x,j)}),[x,j]),(0,a.useEffect)((function(){return(0,n(5960).Z)((function(e,t){var n=t.accent,r=t.duration,i=t.track,o=d().triggers[i];try{o(r,e,n)}catch(a){}}),m),function(){ae.Transport.cancel(0)}}),[m]);var k=(0,a.useState)("/favicon.png"),w=k[0],E=k[1];(0,a.useEffect)((function(){return v.subscribe((function(e){return E(e)}),(function(e){return function(e){var t=document.createElement("canvas"),n=32;t.width=t.height=n;var r=t.getContext("2d");return r.font="".concat(16,"px Helvetica, Arial, sans-serif"),r.fillStyle="yellow",r.fillRect(0,0,n,n),r.fillStyle="black",r.textAlign="center",r.textBaseline="middle",e.forEach((function(t,i){r.fillText(t.ratios.join(":"),16,22.4/e.length*(.7+i)+(1-.7)*n/2|0)})),t.toDataURL()}(e.sections)}))}),[]);var O=(0,s.useRouter)();return(0,a.useEffect)((function(){Object.keys(O.query).length<=0||(console.log("found state in url, proceeding to load..."),p(function(e){var t=e.lengths.split(y).map(Number),n=e.repeats.split(y).map(Number),r=e.swings.split(y).map(Number),i=e.ratios.split(y).map((function(e){return e.split(g).map(Number)})),o=e.subdivides.split(y).map((function(e){return e.split(g).map(Number)})),a=e.offsets.split(y).map((function(e){return e.split(g).map(Number)}));return t.map((function(e,t){return{length:e,repeat:n[t],swing:r[t],ratios:i[t],subdivide:o[t],offsets:a[t]}}))}(O.query)),f(Number(O.query.bpm)),window.history.replaceState({},document.title,window.location.pathname))}),[O.query]),(0,r.jsxs)("div",{className:e.container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Polyrhythm Metronome"}),(0,r.jsx)("meta",{name:"description",content:"A simple open source Polyrhythmic Generator / Metronome. It is free but you can support me on buymeacoffee.com/angramme"}),(0,r.jsx)("link",{rel:"icon",href:w})]}),(0,r.jsx)(re,{}),(0,r.jsxs)(oe(),{location:"bottom",buttonText:"Hmmm, bingus",cookieName:"myAwesomeCookieName2",style:{background:"#111111"},buttonStyle:{color:"#111111",fontSize:"14px"},expires:150,children:["Give me them cookies! I don't VALUE (\ud83d\udcb0\ud83d\udcb0\ud83d\udcb0) your privacy. "," ",(0,r.jsx)("span",{style:{fontSize:"12px"},children:"Just kidding, btw you can support me on buymeacoffee.com/angramme"})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(966)}])},9111:function(e){e.exports={container:"Home_container__Wh7XK",dark:"Home_dark__1uG_o"}},8944:function(e){e.exports={container:"controls_container__22oWk",dark:"controls_dark__1VOYX",title:"controls_title__3WJyw",table:"controls_table__1DijQ",button:"controls_button__EaMER",transport_bar:"controls_transport_bar__3M1pq",transport_button:"controls_transport_button__3Pyy8",settings_button:"controls_settings_button__tzkt9",edit_mode:"controls_edit_mode__Ng9Dy"}},5605:function(e){e.exports={control:"dropdown_control__PGMW3",dark:"dropdown_dark__1XPmP",menu:"dropdown_menu__MGMw5"}},17:function(e){e.exports={container:"editor_container__2mZnH",dark:"editor_dark__3t4Ar",flex_container:"editor_flex_container__3S1X8",single_fields:"editor_single_fields__2aMR1",table:"editor_table__1A9Fo"}},9350:function(e){e.exports={field:"field_field__Z0iYv",dark:"field_dark__xwdXU",wrong:"field_wrong__1qZDj","type-button":"field_type-button__2UptW",title:"field_title__3fwXR"}},2887:function(e){e.exports={container:"instruments_container__1md3q",dark:"instruments_dark__2O99g",instrument:"instruments_instrument__-2oBe",header:"instruments_header__HYAUR"}},7314:function(e){e.exports={container:"main_container__yatPY"}},454:function(e){e.exports={container:"ratiopicker_container__11pO8",ratios:"ratiopicker_ratios__2iFKo",field:"ratiopicker_field__3riwq",add_btn:"ratiopicker_add_btn__3BReu",dark:"ratiopicker_dark__2QkeK",delimiter:"ratiopicker_delimiter__2yDzF"}},8674:function(e){e.exports={displacer:"topbar_displacer__27HU0",left:"topbar_left__3TYGQ",right:"topbar_right__bjyW8",dark:"topbar_dark__3Htdg",button:"topbar_button__kB-OR",tooltip:"topbar_tooltip__OLu0S",sellout:"topbar_sellout__1iPUM",sellout_box:"topbar_sellout_box__1t5fn",coffee_btns:"topbar_coffee_btns__35nMp",imbroke:"topbar_imbroke__2ZwqU",coffee_img:"topbar_coffee_img__1kE73",coffee_text:"topbar_coffee_text__270_I",coffee_button:"topbar_coffee_button__3rvqi"}},9010:function(e){e.exports={container:"visualisation_container__3U4Po",dark:"visualisation_dark__1pDSf",section:"visualisation_section__29yIE",dragover:"visualisation_dragover__2m3Qc",current:"visualisation_current__3KWCF",section_part:"visualisation_section_part__3diQj",even:"visualisation_even__3KZ7_",repeat_line:"visualisation_repeat_line__1P_Pt",scale_corner:"visualisation_scale_corner__IdM7l",repeated:"visualisation_repeated__3O86J",row:"visualisation_row__3qPv9",dot:"visualisation_dot__1dlGL",sub_dot:"visualisation_sub_dot__3bjAw",add_btn:"visualisation_add_btn__2ir6S",bar_parent:"visualisation_bar_parent__2PEN8",bar:"visualisation_bar__19byd"}}},function(e){e.O(0,[757,90,415,937,874,617,821,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);