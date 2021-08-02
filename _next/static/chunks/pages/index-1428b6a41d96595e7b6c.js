(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1751:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Field}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6156),_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7375),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7294),_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9442);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function eval_math_expr(exp){var reg=/(?:[a-z$_][a-z0-9$_]*)|(?:[;={}\[\]"'!&<>^\\?:])/gi,valid=!0,res=null;if(exp=exp.replace(reg,(function(e){if(Math.hasOwnProperty(e))return"Math."+e;valid=!1})),!valid)return null;try{res=eval(exp)}catch(e){return null}return res}function Field(e){var t=e.className,n=e.type,r=e.style,i=e.onInput,s=(0,_home_runner_work_polyrhythm3_polyrhythm3_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(e,["className","type","style","onInput"]),o=(0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.F)(__webpack_require__(9350)),a=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),c=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),u=c[0],l=c[1];return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){null!=s.defaultValue&&void 0!=s.defaultValue&&(a.current.value=s.defaultValue)}),[s.defaultValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:t,style:r,children:[s.name?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:o.title,children:s.name}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",_objectSpread(_objectSpread({ref:a},s),{},{type:"number"==n?"text":n,className:o.field+(n?" "+o["type-"+n]:"")+(u?" "+o.wrong:""),onInput:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=t[0].target,a=o.value;if("number"==n){var c=eval_math_expr(o.value);if(null==c||void 0==c)return l(!0);if(s.min&&c<Number(s.min))return l(!0);if(s.max&&c>Number(s.max))return l(!0);if(s.step&&c%Number(s.step)!=0)return l(!0);a=c}u&&l(!1),i(a)}}))]})}},9442:function(e,t,n){"use strict";n.d(t,{F:function(){return s}});var r=n(4699),i=n(3956);function s(e){return function(e,t){var n=e[t];if(!n)return e;var i={dark:n};return Object.entries(e).forEach((function(e){var s=(0,r.Z)(e,2),o=s[0],a=s[1];o!=t&&(i[o]=a+" "+n)})),i}(e,(0,i.vs)().darkModeActive?"dark":"light")}},8923:function(e,t,n){"use strict";n.r(t),n.d(t,{withScale:function(){return i},addTimes:function(){return s}});var r=n(3785),i=function(e){return function(t){return"".concat(Math.round(r.Time(t).toTicks()*e),"i")}},s=function(e,t){return"".concat(r.Time(e).toTicks()+r.Time(t).toTicks(),"i")}},5960:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3785),i=n(8923),s=i.withScale,o=i.addTimes;function a(e,t){var n=0;t.forEach((function(t,i){var a=s(t.length)("".concat(1+t.repeat,"m"));t.ratios.forEach((function(i,a){if(!(i<=0))for(var c=t.subdivide[a]||1,u=s(t.length/(i*c))("1n"),l=s(t.offsets[a]||0)(u),_=function(n,o){var u={accent:n%c==0,duration:s(Math.min(.98*t.length/(i*c),.1))("1n"),track:a};r.Transport.schedule((function(t){return e(t,u)}),o)},d=0,f=o(n,l);d<i*c*(1+t.repeat);d++,f=o(f,u))_(d,f)})),r.Transport.schedule((function(e){setTimeout((function(){r.Transport.swing=t.swing}),1e3*(e-r.Transport.now()))}),n),n=o(n,a)}))}},6736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(5893),i=n(4699),s=n(9008),o=n(7294),a=n(4651),c=n(9442),u=n(7329),l=n(4671);function _(){return window?(window.__my_context||(window.__my_context={_tone:n(3785)}),window.__my_context):null}var d=n(3785);function f(e,t){var n=_();return n.old_synths||(n.old_synths=[]),n.synths=e.slice(0,t).map((function(e,t){if(n.old_synths[t]&&n.old_synths[t][0]&&n.old_synths[t][1]==e){var r=[n.old_synths[t][0],e];return n.old_synths[t][0]=null,r}var s=function(e){return[[function(){return new d.MembraneSynth({pitchDecay:.05,octaves:2,oscillator:{type:"sine"},envelope:{attack:.001,decay:.2,sustain:.05,release:.01,attackCurve:"exponential"}})},function(){return new d.PluckSynth({attackNoise:1,dampening:4e3,resonance:.7})},function(){return new d.Synth({oscillator:{type:"sine",modulationFrequency:.2},envelope:{decay:.1,release:.1}})},function(){return new d.NoiseSynth({volume:-15,filter:{Q:1},envelope:{attack:.01,decay:.15},filterEnvelope:{attack:.01,decay:.03,baseFrequency:4e3,octaves:-2.5,exponent:4}})}][e](),e]}(e),o=(0,i.Z)(s,2),a=o[0],c=o[1];return[a.toDestination(),c]})),n.old_synths&&(n.old_synths.forEach((function(e){var t=(0,i.Z)(e,2),n=t[0];t[1];n&&(n.disconnect(),n.dispose())})),n.old_synths=[]),n.triggers=n.synths.map((function(e){return function(e){var t=(0,i.Z)(e,2),n=t[0];return[function(e,t,r){return n.triggerAttackRelease(r?"E2":"C2",e,t,.8)},function(e,t,r){return n.triggerAttackRelease(r?"C5":"C4",e,t,.2)},function(e,t,r){return n.triggerAttackRelease(r?"C5":"F4",e,t,r?1:.8)},function(e,t,r){return n.triggerAttackRelease(r?"C5":"C4",e,t,.8)}][t[1]]}(e)})),function(){n.triggers=[],n.old_synths=n.synths,n.synths=[]}}var m=(0,l.Z)((function(e){return{sections:[{length:1,repeat:0,swing:0,ratios:[1,4],subdivide:[1],offsets:[0]}],curSection:0,editMode:"section",instrumentIDs:Array.from({length:10},(function(e,t){return t%["kick","string","hi-hat","click"].length})),addSection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{length:1,repeat:0,swing:0,ratios:[1,4],subdivide:[1],offsets:[0]};return e((function(e){return{sections:[].concat((0,u.Z)(e.sections),[t])}}))},setSections:function(t){return e({sections:t})},setInstrumentIDs:function(t){return e({instrumentIDs:t})},setCurSection:function(t){return e({curSection:t})},setEditMode:function(t){return e({editMode:t})},paused:!0,bpm:100,pause:function(){return e({paused:!0})},play:function(){return e({paused:!1})},setBpm:function(t){return e({bpm:t})}}})),p=n(374),h="_",v="a";var b=n(8193),x=n(9327),j=n(3785);function y(){var e=m((0,o.useCallback)((function(e){return[e.sections,e.addSection,e.curSection,e.setCurSection,e.bpm,e.editMode]}),[]),p.Z),t=(0,i.Z)(e,6),s=t[0],a=t[1],u=t[2],l=t[3],_=t[4],d=t[5],f=(0,c.F)(n(9010)),h=(0,o.useMemo)((function(){return s.reduce((function(e,t){return Math.max(e,t.ratios.length)}),0)}),[s]),v=(0,o.useMemo)((function(){return s.reduce((function(e,t){return e+t.length*(1+t.repeat)}),0)}),[s]),y=(0,o.useRef)(),g=(0,o.useRef)();(0,o.useEffect)((function(){var e=j.Time("1m").toTicks()*v,t=!1,n=0,r=null,i=null,s=function(){r=g.current.offsetWidth,i=.06*r};s(),window.addEventListener("resize",s);return function s(){if(y.current&&g.current){var o=Math.min(r,r*j.Time(j.Transport.position).toTicks()/e);(o=Math.round(o/i)*i)!=n&&(y.current.style.transform="translateX(".concat(o,"px)"),y.current.style.transition=0!=o?"transform ".concat(60*.06*v*4/_,"s linear"):null,n=o),t||requestAnimationFrame(s)}}(),function(){t=!0,window.removeEventListener("resize",s)}}),[g.current,v]);var k=1;return(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("div",{className:f.add_btn,onClick:function(){return a()},children:(0,r.jsx)(b.Lfi,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{ref:g,className:f.bar_parent,children:(0,r.jsx)("div",{ref:y,className:f.bar})}),(0,r.jsx)("div",{className:f.container,children:s.map((function(e,t){return(0,r.jsx)("div",{className:f.section+(t==u&&s.length>1&&"section"==d?" "+f.current:""),style:{flexBasis:"".concat(100*e.length*(e.repeat+1)/v,"%")},onClick:function(){return l(t)},children:Array.from({length:e.repeat+1},(function(t,n){return(0,r.jsxs)("div",{className:f.section_part+(n>0?" "+f.repeated:"")+(k++%2==0?" "+f.even:""),children:[Array.from({length:h},(function(t,n){var i=e.ratios[n]||0,s=e.subdivide[n]||1,o=e.offsets[n]||0;return(0,r.jsx)("div",{className:f.row,children:Array.from({length:i*s},(function(e,t){return(0,r.jsx)("div",{className:f.dot+(t%s==0?"":" "+f.sub_dot),children:(0,r.jsx)("div",{style:{left:o?"".concat(100*o,"%"):null}})},"dot"+t)}))},"row"+n)})),(0,r.jsx)("div",{className:f.repeat_line,children:(0,r.jsx)(x.oic,{})}),1!=e.length&&0==n?(0,r.jsxs)("div",{className:f.scale_corner,children:[(0,r.jsx)("span",{children:String(e.length).substr(0,4)}),(0,r.jsx)(b.gV0,{style:{verticalAlign:"middle"}})]}):""]},n)}))},"section"+t)}))})]})}var g=n(6156),k=n(1751),w=n(7375);function E(e){var t=e.className,i=(e.name,e.onInput),s=e.defaultValue,a=e.min,l=e.max,_=e.step,d=e.delimiter,f=((0,w.Z)(e,["className","name","onInput","defaultValue","min","max","step","delimiter"]),(0,c.F)(n(454))),m=(0,o.useMemo)((function(){return(s||"").split(d||":").map(Number)}),[s,d]),p=(0,o.useState)(m),h=p[0],v=p[1];return(0,o.useEffect)((function(){i&&i(h)}),[h]),(0,o.useEffect)((function(){v(m)}),[m]),(0,r.jsxs)("div",{className:f.container+(t?" "+t:""),children:[(0,r.jsx)("div",{className:f.ratios,children:h.map((function(e,t){return(0,r.jsxs)("div",{children:[(0,r.jsx)(k.Z,{className:f.field,defaultValue:e,type:"number",step:_,min:a,max:l,onInput:function(e){e.length<=0||("0"==e&&t==h.length-1?h.splice(t,1):h[t]=Number(e),v((0,u.Z)(h)))}}),t<h.length-1?(0,r.jsx)("div",{className:f.delimiter,children:" : "}):""]},t)}))}),(0,r.jsx)("div",{className:f.add_btn,onClick:function(){return v([].concat((0,u.Z)(h),[a||0]))},children:(0,r.jsx)(b.Lfi,{style:{verticalAlign:"middle"}})})]})}var O=n(7079),N=n.n(O);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,g.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(){var e=m((0,o.useCallback)((function(e){return[e.sections,e.setSections,e.curSection,e.setCurSection]}),[]),p.Z),t=(0,i.Z)(e,4),s=t[0],a=t[1],u=t[2],l=t[3],_=(0,c.F)(n(17)),d=(0,o.useMemo)((function(){return s[u]}),[s,u]),f=function(e){return function(t){null!=t&&void 0!=t&&(e(t),a(N()(s)))}};return(0,r.jsx)("div",{className:_.container,children:(0,r.jsxs)("div",{className:_.flex_container,children:[(0,r.jsx)("table",{className:_.table,children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"ratios"}),(0,r.jsx)("td",{children:(0,r.jsx)(E,{className:_.picker,name:"ratios",defaultValue:d.ratios.join(":"),min:0,step:1,onInput:f((function(e){return d.ratios=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"subdivides"}),(0,r.jsx)("td",{children:(0,r.jsx)(E,{name:"subdivide",defaultValue:d.subdivide.join(":"),step:1,min:1,onInput:f((function(e){return d.subdivide=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"offsets"}),(0,r.jsx)("td",{children:(0,r.jsx)(E,{name:"offsets",defaultValue:d.offsets.join(":"),max:1,min:0,onInput:f((function(e){return d.offsets=e}))})})]})]})}),(0,r.jsx)("table",{className:_.single_fields+" "+_.table,children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"scale"}),(0,r.jsx)("td",{children:(0,r.jsx)(k.Z,{type:"number",min:"0",defaultValue:d.length,onInput:f((function(e){return d.length=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"repeat"}),(0,r.jsx)("td",{children:(0,r.jsx)(k.Z,{type:"number",step:"1",min:"0",defaultValue:d.repeat,onInput:f((function(e){return d.repeat=e}))})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"swing"}),(0,r.jsx)("td",{children:(0,r.jsx)(k.Z,{type:"number",min:"0",max:"1",defaultValue:d.swing,onInput:f((function(e){return d.swing=e}))})})]}),(0,r.jsxs)("tr",{className:_.remove_btn,children:[(0,r.jsx)("th",{children:"remove"}),(0,r.jsx)("td",{children:(0,r.jsx)(k.Z,M(M({type:"button",value:"remove"},s.length<=1?{disabled:!0}:{}),{},{onClick:f((function(){if(s.length>1)return l(Math.max(0,u-1)),s.splice(s.indexOf(d),1)}))}))})]})]})})]})})}var C=n(9352);function D(e){var t=e.style,s=m((0,o.useCallback)((function(e){return[e.paused,e.pause,e.play,e.bpm,e.setBpm,e.editMode,e.setEditMode]}),[]),p.Z),a=(0,i.Z)(s,7),u=a[0],l=a[1],_=a[2],d=a[3],f=a[4],h=a[5],v=a[6],b=(0,c.F)(n(8944));return(0,r.jsx)("div",{className:b.container,style:t,children:(0,r.jsxs)("div",{className:b.transport_bar,children:[(0,r.jsx)("div",{className:b.transport_button,onClick:(0,o.useCallback)((function(){return(u?_:l)()}),[u]),children:u?(0,r.jsx)(C.hpr,{style:{verticalAlign:"middle"}}):(0,r.jsx)(C.bKE,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{className:b.transport_button,onClick:(0,o.useCallback)((function(){n(3785).Transport.stop(),l()}),[]),children:(0,r.jsx)(C.vJm,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{style:{paddingLeft:"2em",paddingRight:".5em"},children:"bpm"}),(0,r.jsx)("div",{children:(0,r.jsx)(k.Z,{style:{width:"4em"},type:"number",defaultValue:d,onInput:function(e){return f(e)}})}),(0,r.jsx)("div",{className:b.settings_button+("instrument"==h?" "+b.edit_mode:""),onClick:(0,o.useCallback)((function(){return v("section"==h?"instrument":"section")}),[h]),children:(0,r.jsx)(C.XkT,{style:{verticalAlign:"middle"}})})]})})}var A=n(7516),S=n(7735);function I(e){navigator.clipboard?navigator.clipboard.writeText(e):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(t)}(e)}var Z=n(3956);function R(){var e=(0,c.F)(n(8674)),t=(0,Z.vs)(),s=t.darkModeActive,a=t.switchToDarkMode,u=t.switchToLightMode;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:e.left,children:[(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)("a",{href:"https://ozi.vercel.app",target:"_blank",children:(0,r.jsx)(S.Tqn,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{className:e.tooltip,children:"my website"})]}),(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)("a",{href:"https://www.buymeacoffee.com/angramme",target:"_blank",children:(0,r.jsx)(A.vm6,{style:{verticalAlign:"middle"}})}),(0,r.jsx)("div",{className:e.tooltip,children:"buy me a coffee"})]})]}),(0,r.jsxs)("div",{className:e.right,children:[(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)(A.Ifu,{style:{verticalAlign:"middle"},onClick:(0,o.useCallback)((function(){var e,t,n=m.getState(),r=window.location.origin+window.location.pathname+(e=n.sections,t=n.bpm,"?"+Object.entries({lengths:e.map((function(e){return e.length})).join(h),repeats:e.map((function(e){return e.repeat})).join(h),swings:e.map((function(e){return e.swing})).join(h),ratios:e.map((function(e){return e.ratios.join(v)})).join(h),subdivides:e.map((function(e){return e.subdivide.join(v)})).join(h),offsets:e.map((function(e){return e.offsets.join(v)})).join(h),bpm:t}).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return"&".concat(n,"=").concat(r)})).join("").slice(1));console.log(r),I(r),setTimeout((function(){return alert("copied the url to clipboard!")}),100)}),[])}),(0,r.jsx)("div",{className:e.tooltip,children:"share your rhythm"})]}),(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)(S.ojp,{style:{verticalAlign:"middle",cursor:"not-allowed"}}),(0,r.jsx)("div",{className:e.tooltip,children:"export midi"})]}),(0,r.jsxs)("div",{className:e.button,children:[(0,r.jsx)("span",{onClick:function(){return s?u():a()},children:s?(0,r.jsx)(A.dZ3,{style:{verticalAlign:"middle"}}):(0,r.jsx)(A.JuG,{style:{verticalAlign:"middle"}})}),(0,r.jsxs)("div",{className:e.tooltip,children:["switch to ",s?"light":"dark"," mode"]})]})]})]})}function L(e){var t=e.style,s=m((0,o.useCallback)((function(e){return[e.instrumentIDs,e.setInstrumentIDs]}),[]),p.Z),a=(0,i.Z)(s,2),u=a[0],l=a[1],_=(0,c.F)(n(2887)),d=["kick","string","hi-hat","click"];return(0,r.jsx)("div",{className:_.container,style:t,children:u.map((function(e,t){return(0,r.jsxs)("div",{className:_.instrument,children:[(0,r.jsxs)("div",{className:_.header,children:["track ",t+1," uses"]}),(0,r.jsx)("div",{className:_.body,children:(0,r.jsx)("select",{defaultValue:e,onChange:(n=t,function(e){var t=e.target,r=Number(t.value);u[n]=r,l(N()(u))}),children:d.map((function(e,t){return(0,r.jsx)("option",{value:t,children:e},t)}))},t)})]},t);var n}))})}function B(){var e=(0,c.F)(n(7314)),t=m((0,o.useCallback)((function(e){return e.editMode}),[]));return(0,r.jsxs)("div",{className:e.container,children:[(0,r.jsx)(y,{}),(0,r.jsx)(D,{}),"section"==t?(0,r.jsx)(T,{}):"","instrument"==t?(0,r.jsx)(L,{}):"",(0,r.jsx)(R,{})]})}var K=n(3785);function W(){var e=(0,c.F)(n(9111));(0,o.useEffect)((function(){var e=0;return m.subscribe((function(t,n){e++,console.log("state update",e)}))}),[]);var t=m((0,o.useCallback)((function(e){return[e.paused,e.bpm,e.setBpm,e.sections,e.setSections,e.instrumentIDs]}),[]),p.Z),u=(0,i.Z)(t,6),l=u[0],d=u[1],b=u[2],x=u[3],j=u[4],y=u[5];(0,o.useEffect)((function(){l?K.Transport.pause():K.Transport.start()}),[l]),(0,o.useEffect)((function(){K.Transport.bpm.rampTo(d,.2)}),[d]),(0,o.useEffect)((function(){var e=function(){K.start(),K.context.resume()};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[]);var g=(0,o.useMemo)((function(){return x.reduce((function(e,t){return Math.max(e,t.ratios.length)}),-1)}),[x]);(0,o.useEffect)((function(){return f(y,g)}),[y,g]),(0,o.useEffect)((function(){var e=n(8923).withScale,t=n(5960).Z,r=x.reduce((function(e,t){return e+t.length*(t.repeat+1)}),0);return K.Transport.loop=!0,K.Transport.loopStart=0,K.Transport.loopEnd=e(r)("1m"),K.Transport.timeSignature=[4,4],t((function(e,t){var n=t.accent,r=t.duration,i=t.track,s=_().triggers[i];try{s(r,e,n)}catch(o){}}),x),function(){K.Transport.cancel(0)}}),[x]),(0,o.useEffect)((function(){!function(e){var t=document.querySelector("link[rel~='icon']");t||(t=Array.from(document.getElementsByTagName("head")[0].getElementsByTagName("link")).find((function(e){return"icon"==e.rel}))),t.href=e}(function(e){var t=document.createElement("canvas"),n=32;t.width=t.height=n;var r=t.getContext("2d");return r.font="".concat(16,"px Helvetica, Arial, sans-serif"),r.fillStyle="yellow",r.fillRect(0,0,n,n),r.fillStyle="black",r.textAlign="center",r.textBaseline="middle",e.forEach((function(t,i){r.fillText(t.ratios.join(":"),16,22.4/e.length*(.7+i)+(1-.7)*n/2|0)})),t.toDataURL()}(x))}),[x]);var k=(0,a.useRouter)();return(0,o.useEffect)((function(){Object.keys(k.query).length<=0||(console.log("found state in url, proceeding to load..."),j(function(e){var t=e.lengths.split(h).map(Number),n=e.repeats.split(h).map(Number),r=e.swings.split(h).map(Number),i=e.ratios.split(h).map((function(e){return e.split(v).map(Number)})),s=e.subdivides.split(h).map((function(e){return e.split(v).map(Number)})),o=e.offsets.split(h).map((function(e){return e.split(v).map(Number)}));return t.map((function(e,t){return{length:e,repeat:n[t],swing:r[t],ratios:i[t],subdivide:s[t],offsets:o[t]}}))}(k.query)),b(Number(k.query.bpm)),window.history.replaceState({},document.title,window.location.pathname))}),[k.query]),(0,r.jsxs)("div",{className:e.container,children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Polyrhythm Metronome"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(B,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6736)}])},9111:function(e){e.exports={container:"Home_container__Wh7XK",dark:"Home_dark__1uG_o"}},8944:function(e){e.exports={container:"controls_container__22oWk",dark:"controls_dark__1VOYX",title:"controls_title__3WJyw",table:"controls_table__1DijQ",button:"controls_button__EaMER",transport_bar:"controls_transport_bar__3M1pq",transport_button:"controls_transport_button__3Pyy8",settings_button:"controls_settings_button__tzkt9",edit_mode:"controls_edit_mode__Ng9Dy"}},17:function(e){e.exports={container:"editor_container__2mZnH",dark:"editor_dark__3t4Ar",flex_container:"editor_flex_container__3S1X8",single_fields:"editor_single_fields__2aMR1",table:"editor_table__1A9Fo"}},9350:function(e){e.exports={field:"field_field__Z0iYv",dark:"field_dark__xwdXU",wrong:"field_wrong__1qZDj","type-button":"field_type-button__2UptW",title:"field_title__3fwXR"}},2887:function(e){e.exports={container:"instruments_container__1md3q",dark:"instruments_dark__2O99g",instrument:"instruments_instrument__-2oBe",header:"instruments_header__HYAUR"}},7314:function(e){e.exports={container:"main_container__yatPY"}},454:function(e){e.exports={container:"ratiopicker_container__11pO8",ratios:"ratiopicker_ratios__2iFKo",field:"ratiopicker_field__3riwq",add_btn:"ratiopicker_add_btn__3BReu",dark:"ratiopicker_dark__2QkeK",delimiter:"ratiopicker_delimiter__2yDzF"}},8674:function(e){e.exports={left:"topbar_left__3TYGQ",right:"topbar_right__bjyW8",dark:"topbar_dark__3Htdg",button:"topbar_button__kB-OR",tooltip:"topbar_tooltip__OLu0S"}},9010:function(e){e.exports={container:"visualisation_container__3U4Po",dark:"visualisation_dark__1pDSf",section:"visualisation_section__29yIE",current:"visualisation_current__3KWCF",section_part:"visualisation_section_part__3diQj",even:"visualisation_even__3KZ7_",repeat_line:"visualisation_repeat_line__1P_Pt",scale_corner:"visualisation_scale_corner__IdM7l",repeated:"visualisation_repeated__3O86J",row:"visualisation_row__3qPv9",dot:"visualisation_dot__1dlGL",sub_dot:"visualisation_sub_dot__3bjAw",add_btn:"visualisation_add_btn__2ir6S",bar_parent:"visualisation_bar_parent__2PEN8",bar:"visualisation_bar__19byd"}}},function(e){e.O(0,[90,415,937,874,617,368,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);