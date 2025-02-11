(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Je={},ls=[],yn=()=>{},fp=()=>!1,no=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hc=t=>t.startsWith("onUpdate:"),Ft=Object.assign,dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},up=Object.prototype.hasOwnProperty,Xe=(t,e)=>up.call(t,e),Ne=Array.isArray,Hs=t=>io(t)==="[object Map]",hp=t=>io(t)==="[object Set]",Fe=t=>typeof t=="function",mt=t=>typeof t=="string",Es=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",Iu=t=>(ct(t)||Fe(t))&&Fe(t.then)&&Fe(t.catch),dp=Object.prototype.toString,io=t=>dp.call(t),pp=t=>io(t).slice(8,-1),mp=t=>io(t)==="[object Object]",pc=t=>mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vs=uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gp=/-(\w)/g,nn=so(t=>t.replace(gp,(e,n)=>n?n.toUpperCase():"")),_p=/\B([A-Z])/g,Fi=so(t=>t.replace(_p,"-$1").toLowerCase()),ro=so(t=>t.charAt(0).toUpperCase()+t.slice(1)),Uo=so(t=>t?`on${ro(t)}`:""),Ai=(t,e)=>!Object.is(t,e),Gr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fu=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Va=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jc;const oo=()=>Jc||(Jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mc(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=mt(i)?Sp(i):mc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(mt(t)||ct(t))return t}const vp=/;(?![^(]*\))/g,xp=/:([^]+)/,Mp=/\/\*[^]*?\*\//g;function Sp(t){const e={};return t.replace(Mp,"").split(vp).forEach(n=>{if(n){const i=n.split(xp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function gc(t){let e="";if(mt(t))e=t;else if(Ne(t))for(let n=0;n<t.length;n++){const i=gc(t[n]);i&&(e+=i+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ep="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yp=uc(Ep);function Nu(t){return!!t||t===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class Tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bp(){return Xt}let et;const Io=new WeakSet;class Ou{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Io.has(this)&&(Io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qc(this),Hu(this);const e=et,n=dn;et=this,dn=!0;try{return this.fn()}finally{Vu(this),et=e,dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xc(e);this.deps=this.depsTail=void 0,Qc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ga(this)&&this.run()}get dirty(){return Ga(this)}}let Bu=0,Gs,ks;function zu(t,e=!1){if(t.flags|=8,e){t.next=ks,ks=t;return}t.next=Gs,Gs=t}function _c(){Bu++}function vc(){if(--Bu>0)return;if(ks){let e=ks;for(ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Gs;){let e=Gs;for(Gs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Hu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vu(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),xc(i),Ap(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ga(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===js))return;t.globalVersion=js;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ga(t)){t.flags&=-3;return}const n=et,i=dn;et=t,dn=!0;try{Hu(t);const s=t.fn(t._value);(e.version===0||Ai(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{et=n,dn=i,Vu(t),t.flags&=-3}}function xc(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)xc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ap(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dn=!0;const ku=[];function ci(){ku.push(dn),dn=!1}function li(){const t=ku.pop();dn=t===void 0?!0:t}function Qc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=et;et=void 0;try{e()}finally{et=n}}}let js=0;class wp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!et||!dn||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new wp(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,$u(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=i)}return n}trigger(e){this.version++,js++,this.notify(e)}notify(e){_c();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vc()}}}function $u(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)$u(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ka=new WeakMap,wi=Symbol(""),Wa=Symbol(""),Ks=Symbol("");function St(t,e,n){if(dn&&et){let i=ka.get(t);i||ka.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Wu),s.map=i,s.key=n),s.track()}}function Gn(t,e,n,i,s,r){const o=ka.get(t);if(!o){js++;return}const a=c=>{c&&c.trigger()};if(_c(),e==="clear")o.forEach(a);else{const c=Ne(t),l=c&&pc(n);if(c&&n==="length"){const f=Number(i);o.forEach((u,h)=>{(h==="length"||h===Ks||!Es(h)&&h>=f)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Ks)),e){case"add":c?l&&a(o.get("length")):(a(o.get(wi)),Hs(t)&&a(o.get(Wa)));break;case"delete":c||(a(o.get(wi)),Hs(t)&&a(o.get(Wa)));break;case"set":Hs(t)&&a(o.get(wi));break}}vc()}function Oi(t){const e=je(t);return e===t?e:(St(e,"iterate",Ks),Tn(t)?e:e.map(qt))}function Mc(t){return St(t=je(t),"iterate",Ks),t}const Rp={__proto__:null,[Symbol.iterator](){return Fo(this,Symbol.iterator,qt)},concat(...t){return Oi(this).concat(...t.map(e=>Ne(e)?Oi(e):e))},entries(){return Fo(this,"entries",t=>(t[1]=qt(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(qt),arguments)},find(t,e){return Rn(this,"find",t,e,qt,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,qt,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return No(this,"includes",t)},indexOf(...t){return No(this,"indexOf",t)},join(t){return Oi(this).join(t)},lastIndexOf(...t){return No(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...t){return ws(this,"push",t)},reduce(t,...e){return el(this,"reduce",t,e)},reduceRight(t,...e){return el(this,"reduceRight",t,e)},shift(){return ws(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return ws(this,"splice",t)},toReversed(){return Oi(this).toReversed()},toSorted(t){return Oi(this).toSorted(t)},toSpliced(...t){return Oi(this).toSpliced(...t)},unshift(...t){return ws(this,"unshift",t)},values(){return Fo(this,"values",qt)}};function Fo(t,e,n){const i=Mc(t),s=i[e]();return i!==t&&!Tn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const Cp=Array.prototype;function Rn(t,e,n,i,s,r){const o=Mc(t),a=o!==t&&!Tn(t),c=o[e];if(c!==Cp[e]){const u=c.apply(t,r);return a?qt(u):u}let l=n;o!==t&&(a?l=function(u,h){return n.call(this,qt(u),h,t)}:n.length>2&&(l=function(u,h){return n.call(this,u,h,t)}));const f=c.call(o,l,i);return a&&s?s(f):f}function el(t,e,n,i){const s=Mc(t);let r=n;return s!==t&&(Tn(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,qt(a),c,t)}),s[e](r,...i)}function No(t,e,n){const i=je(t);St(i,"iterate",Ks);const s=i[e](...n);return(s===-1||s===!1)&&Tc(n[0])?(n[0]=je(n[0]),i[e](...n)):s}function ws(t,e,n=[]){ci(),_c();const i=je(t)[e].apply(t,n);return vc(),li(),i}const Pp=uc("__proto__,__v_isRef,__isVue"),Xu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Es));function Lp(t){Es(t)||(t=String(t));const e=je(this);return St(e,"has",t),e.hasOwnProperty(t)}class qu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Vp:Zu:r?Ku:ju).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ne(e);if(!s){let c;if(o&&(c=Rp[n]))return c;if(n==="hasOwnProperty")return Lp}const a=Reflect.get(e,n,It(e)?e:i);return(Es(n)?Xu.has(n):Pp(n))||(s||St(e,"get",n),r)?a:It(a)?o&&pc(n)?a:a.value:ct(a)?s?Ju(a):Ec(a):a}}class Yu extends qu{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=ms(r);if(!Tn(i)&&!ms(i)&&(r=je(r),i=je(i)),!Ne(e)&&It(r)&&!It(i))return c?!1:(r.value=i,!0)}const o=Ne(e)&&pc(n)?Number(n)<e.length:Xe(e,n),a=Reflect.set(e,n,i,It(e)?e:s);return e===je(s)&&(o?Ai(i,r)&&Gn(e,"set",n,i):Gn(e,"add",n,i)),a}deleteProperty(e,n){const i=Xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Gn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Es(n)||!Xu.has(n))&&St(e,"has",n),i}ownKeys(e){return St(e,"iterate",Ne(e)?"length":wi),Reflect.ownKeys(e)}}class Dp extends qu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Up=new Yu,Ip=new Dp,Fp=new Yu(!0);const $a=t=>t,pr=t=>Reflect.getPrototypeOf(t);function Np(t,e,n){return function(...i){const s=this.__v_raw,r=je(s),o=Hs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),f=n?$a:e?Xa:qt;return!e&&St(r,"iterate",c?Wa:wi),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function mr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Op(t,e){const n={get(s){const r=this.__v_raw,o=je(r),a=je(s);t||(Ai(s,a)&&St(o,"get",s),St(o,"get",a));const{has:c}=pr(o),l=e?$a:t?Xa:qt;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&St(je(s),"iterate",wi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=je(r),a=je(s);return t||(Ai(s,a)&&St(o,"has",s),St(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=je(a),l=e?$a:t?Xa:qt;return!t&&St(c,"iterate",wi),a.forEach((f,u)=>s.call(r,l(f),l(u),o))}};return Ft(n,t?{add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear")}:{add(s){!e&&!Tn(s)&&!ms(s)&&(s=je(s));const r=je(this);return pr(r).has.call(r,s)||(r.add(s),Gn(r,"add",s,s)),this},set(s,r){!e&&!Tn(r)&&!ms(r)&&(r=je(r));const o=je(this),{has:a,get:c}=pr(o);let l=a.call(o,s);l||(s=je(s),l=a.call(o,s));const f=c.call(o,s);return o.set(s,r),l?Ai(r,f)&&Gn(o,"set",s,r):Gn(o,"add",s,r),this},delete(s){const r=je(this),{has:o,get:a}=pr(r);let c=o.call(r,s);c||(s=je(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&Gn(r,"delete",s,void 0),l},clear(){const s=je(this),r=s.size!==0,o=s.clear();return r&&Gn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Np(s,t,e)}),n}function Sc(t,e){const n=Op(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Xe(n,s)&&s in i?n:i,s,r)}const Bp={get:Sc(!1,!1)},zp={get:Sc(!1,!0)},Hp={get:Sc(!0,!1)};const ju=new WeakMap,Ku=new WeakMap,Zu=new WeakMap,Vp=new WeakMap;function Gp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kp(t){return t.__v_skip||!Object.isExtensible(t)?0:Gp(pp(t))}function Ec(t){return ms(t)?t:yc(t,!1,Up,Bp,ju)}function Wp(t){return yc(t,!1,Fp,zp,Ku)}function Ju(t){return yc(t,!0,Ip,Hp,Zu)}function yc(t,e,n,i,s){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=kp(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ws(t){return ms(t)?Ws(t.__v_raw):!!(t&&t.__v_isReactive)}function ms(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function Tc(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function $p(t){return!Xe(t,"__v_skip")&&Object.isExtensible(t)&&Fu(t,"__v_skip",!0),t}const qt=t=>ct(t)?Ec(t):t,Xa=t=>ct(t)?Ju(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Xp(t){return It(t)?t.value:t}const qp={get:(t,e,n)=>e==="__v_raw"?t:Xp(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Qu(t){return Ws(t)?t:new Proxy(t,qp)}class Yp{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return zu(this,!0),!0}get value(){const e=this.dep.track();return Gu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jp(t,e,n=!1){let i,s;return Fe(t)?i=t:(i=t.get,s=t.set),new Yp(i,s,n)}const gr={},Yr=new WeakMap;let xi;function Kp(t,e=!1,n=xi){if(n){let i=Yr.get(n);i||Yr.set(n,i=[]),i.push(t)}}function Zp(t,e,n=Je){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=v=>s?v:Tn(v)||s===!1||s===0?kn(v,1):kn(v);let f,u,h,p,_=!1,g=!1;if(It(t)?(u=()=>t.value,_=Tn(t)):Ws(t)?(u=()=>l(t),_=!0):Ne(t)?(g=!0,_=t.some(v=>Ws(v)||Tn(v)),u=()=>t.map(v=>{if(It(v))return v.value;if(Ws(v))return l(v);if(Fe(v))return c?c(v,2):v()})):Fe(t)?e?u=c?()=>c(t,2):t:u=()=>{if(h){ci();try{h()}finally{li()}}const v=xi;xi=f;try{return c?c(t,3,[p]):t(p)}finally{xi=v}}:u=yn,e&&s){const v=u,S=s===!0?1/0:s;u=()=>kn(v(),S)}const m=bp(),d=()=>{f.stop(),m&&m.active&&dc(m.effects,f)};if(r&&e){const v=e;e=(...S)=>{v(...S),d()}}let A=g?new Array(t.length).fill(gr):gr;const E=v=>{if(!(!(f.flags&1)||!f.dirty&&!v))if(e){const S=f.run();if(s||_||(g?S.some((y,R)=>Ai(y,A[R])):Ai(S,A))){h&&h();const y=xi;xi=f;try{const R=[S,A===gr?void 0:g&&A[0]===gr?[]:A,p];c?c(e,3,R):e(...R),A=S}finally{xi=y}}}else f.run()};return a&&a(E),f=new Ou(u),f.scheduler=o?()=>o(E,!1):E,p=v=>Kp(v,!1,f),h=f.onStop=()=>{const v=Yr.get(f);if(v){if(c)c(v,4);else for(const S of v)S();Yr.delete(f)}},e?i?E(!0):A=f.run():o?o(E.bind(null,!0),!0):f.run(),d.pause=f.pause.bind(f),d.resume=f.resume.bind(f),d.stop=d,d}function kn(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))kn(t.value,e,n);else if(Ne(t))for(let i=0;i<t.length;i++)kn(t[i],e,n);else if(hp(t)||Hs(t))t.forEach(i=>{kn(i,e,n)});else if(mp(t)){for(const i in t)kn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&kn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ir(t,e,n,i){try{return i?t(...i):t()}catch(s){ao(s,e,n)}}function bn(t,e,n,i){if(Fe(t)){const s=ir(t,e,n,i);return s&&Iu(s)&&s.catch(r=>{ao(r,e,n)}),s}if(Ne(t)){const s=[];for(let r=0;r<t.length;r++)s.push(bn(t[r],e,n,i));return s}}function ao(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Je;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,c,l)===!1)return}a=a.parent}if(r){ci(),ir(r,null,10,[t,c,l]),li();return}}Jp(t,n,s,i,o)}function Jp(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let xn=-1;const fs=[];let si=null,ss=0;const eh=Promise.resolve();let jr=null;function Qp(t){const e=jr||eh;return t?e.then(this?t.bind(this):t):e}function em(t){let e=xn+1,n=Dt.length;for(;e<n;){const i=e+n>>>1,s=Dt[i],r=Zs(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function bc(t){if(!(t.flags&1)){const e=Zs(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=Zs(n)?Dt.push(t):Dt.splice(em(e),0,t),t.flags|=1,th()}}function th(){jr||(jr=eh.then(ih))}function tm(t){Ne(t)?fs.push(...t):si&&t.id===-1?si.splice(ss+1,0,t):t.flags&1||(fs.push(t),t.flags|=1),th()}function tl(t,e,n=xn+1){for(;n<Dt.length;n++){const i=Dt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Dt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nh(t){if(fs.length){const e=[...new Set(fs)].sort((n,i)=>Zs(n)-Zs(i));if(fs.length=0,si){si.push(...e);return}for(si=e,ss=0;ss<si.length;ss++){const n=si[ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}si=null,ss=0}}const Zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ih(t){try{for(xn=0;xn<Dt.length;xn++){const e=Dt[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<Dt.length;xn++){const e=Dt[xn];e&&(e.flags&=-2)}xn=-1,Dt.length=0,nh(),jr=null,(Dt.length||fs.length)&&ih()}}let Yt=null,sh=null;function Kr(t){const e=Yt;return Yt=t,sh=t&&t.type.__scopeId||null,e}function nm(t,e=Yt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&dl(-1);const r=Kr(e);let o;try{o=t(...s)}finally{Kr(r),i._d&&dl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function nl(t,e){if(Yt===null)return t;const n=uo(Yt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=Je]=e[s];r&&(Fe(r)&&(r={mounted:r,updated:r}),r.deep&&kn(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function di(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(ci(),bn(c,n,8,[t.el,a,t,e]),li())}}const im=Symbol("_vte"),sm=t=>t.__isTeleport;function Ac(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ac(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zr(t,e,n,i,s=!1){if(Ne(t)){t.forEach((_,g)=>Zr(_,e&&(Ne(e)?e[g]:e),n,i,s));return}if($s(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zr(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?uo(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Je?a.refs={}:a.refs,u=a.setupState,h=je(u),p=u===Je?()=>!1:_=>Xe(h,_);if(l!=null&&l!==c&&(mt(l)?(f[l]=null,p(l)&&(u[l]=null)):It(l)&&(l.value=null)),Fe(c))ir(c,a,12,[o,f]);else{const _=mt(c),g=It(c);if(_||g){const m=()=>{if(t.f){const d=_?p(c)?u[c]:f[c]:c.value;s?Ne(d)&&dc(d,r):Ne(d)?d.includes(r)||d.push(r):_?(f[c]=[r],p(c)&&(u[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else _?(f[c]=o,p(c)&&(u[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(m.id=-1,$t(m,n)):m()}}}oo().requestIdleCallback;oo().cancelIdleCallback;const $s=t=>!!t.type.__asyncLoader,oh=t=>t.type.__isKeepAlive;function rm(t,e){ah(t,"a",e)}function om(t,e){ah(t,"da",e)}function ah(t,e,n=Et){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(co(e,i,n),n){let s=n.parent;for(;s&&s.parent;)oh(s.parent.vnode)&&am(i,e,n,s),s=s.parent}}function am(t,e,n,i){const s=co(e,t,i,!0);ch(()=>{dc(i[e],s)},n)}function co(t,e,n=Et,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ci();const a=sr(n),c=bn(e,n,t,o);return a(),li(),c});return i?s.unshift(r):s.push(r),r}}const Kn=t=>(e,n=Et)=>{(!er||t==="sp")&&co(t,(...i)=>e(...i),n)},cm=Kn("bm"),lm=Kn("m"),fm=Kn("bu"),um=Kn("u"),hm=Kn("bum"),ch=Kn("um"),dm=Kn("sp"),pm=Kn("rtg"),mm=Kn("rtc");function gm(t,e=Et){co("ec",t,e)}const _m="components";function il(t,e){return xm(_m,t,!0,e)||t}const vm=Symbol.for("v-ndc");function xm(t,e,n=!0,i=!1){const s=Yt||Et;if(s){const r=s.type;{const a=cg(r,!1);if(a&&(a===e||a===nn(e)||a===ro(nn(e))))return r}const o=sl(s[t]||r[t],e)||sl(s.appContext[t],e);return!o&&i?r:o}}function sl(t,e){return t&&(t[e]||t[nn(e)]||t[ro(nn(e))])}const qa=t=>t?Ch(t)?uo(t):qa(t.parent):null,Xs=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qa(t.parent),$root:t=>qa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fh(t),$forceUpdate:t=>t.f||(t.f=()=>{bc(t.update)}),$nextTick:t=>t.n||(t.n=Qp.bind(t.proxy)),$watch:t=>Vm.bind(t)}),Oo=(t,e)=>t!==Je&&!t.__isScriptSetup&&Xe(t,e),Mm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Oo(i,e))return o[e]=1,i[e];if(s!==Je&&Xe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Xe(l,e))return o[e]=3,r[e];if(n!==Je&&Xe(n,e))return o[e]=4,n[e];Ya&&(o[e]=0)}}const f=Xs[e];let u,h;if(f)return e==="$attrs"&&St(t.attrs,"get",""),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Je&&Xe(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Xe(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Oo(s,e)?(s[e]=n,!0):i!==Je&&Xe(i,e)?(i[e]=n,!0):Xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Je&&Xe(t,o)||Oo(e,o)||(a=r[0])&&Xe(a,o)||Xe(i,o)||Xe(Xs,o)||Xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rl(t){return Ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ya=!0;function Sm(t){const e=fh(t),n=t.proxy,i=t.ctx;Ya=!1,e.beforeCreate&&ol(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:E,unmounted:v,render:S,renderTracked:y,renderTriggered:R,errorCaptured:U,serverPrefetch:M,expose:T,inheritAttrs:B,components:$,directives:D,filters:O}=e;if(l&&Em(l,i,null),o)for(const G in o){const k=o[G];Fe(k)&&(i[G]=k.bind(n))}if(s){const G=s.call(n,n);ct(G)&&(t.data=Ec(G))}if(Ya=!0,r)for(const G in r){const k=r[G],fe=Fe(k)?k.bind(n,n):Fe(k.get)?k.get.bind(n,n):yn,oe=!Fe(k)&&Fe(k.set)?k.set.bind(n):yn,Te=fg({get:fe,set:oe});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Te.value,set:ue=>Te.value=ue})}if(a)for(const G in a)lh(a[G],i,n,G);if(c){const G=Fe(c)?c.call(n):c;Reflect.ownKeys(G).forEach(k=>{Rm(k,G[k])})}f&&ol(f,t,"c");function j(G,k){Ne(k)?k.forEach(fe=>G(fe.bind(n))):k&&G(k.bind(n))}if(j(cm,u),j(lm,h),j(fm,p),j(um,_),j(rm,g),j(om,m),j(gm,U),j(mm,y),j(pm,R),j(hm,A),j(ch,v),j(dm,M),Ne(T))if(T.length){const G=t.exposed||(t.exposed={});T.forEach(k=>{Object.defineProperty(G,k,{get:()=>n[k],set:fe=>n[k]=fe})})}else t.exposed||(t.exposed={});S&&t.render===yn&&(t.render=S),B!=null&&(t.inheritAttrs=B),$&&(t.components=$),D&&(t.directives=D),M&&rh(t)}function Em(t,e,n=yn){Ne(t)&&(t=ja(t));for(const i in t){const s=t[i];let r;ct(s)?"default"in s?r=kr(s.from||i,s.default,!0):r=kr(s.from||i):r=kr(s),It(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ol(t,e,n){bn(Ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function lh(t,e,n,i){let s=i.includes(".")?Th(n,i):()=>n[i];if(mt(t)){const r=e[t];Fe(r)&&zo(s,r)}else if(Fe(t))zo(s,t.bind(n));else if(ct(t))if(Ne(t))t.forEach(r=>lh(r,e,n,i));else{const r=Fe(t.handler)?t.handler.bind(n):e[t.handler];Fe(r)&&zo(s,r,t)}}function fh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Jr(c,l,o,!0)),Jr(c,e,o)),ct(e)&&r.set(e,c),c}function Jr(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Jr(t,r,n,!0),s&&s.forEach(o=>Jr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=ym[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ym={data:al,props:cl,emits:cl,methods:Bs,computed:Bs,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Bs,directives:Bs,watch:bm,provide:al,inject:Tm};function al(t,e){return e?t?function(){return Ft(Fe(t)?t.call(this,this):t,Fe(e)?e.call(this,this):e)}:e:t}function Tm(t,e){return Bs(ja(t),ja(e))}function ja(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Ft(Object.create(null),t,e):e}function cl(t,e){return t?Ne(t)&&Ne(e)?[...new Set([...t,...e])]:Ft(Object.create(null),rl(t),rl(e??{})):e}function bm(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const i in e)n[i]=Rt(t[i],e[i]);return n}function uh(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Am=0;function wm(t,e){return function(i,s=null){Fe(i)||(i=Ft({},i)),s!=null&&!ct(s)&&(s=null);const r=uh(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Am++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ug,get config(){return r.config},set config(f){},use(f,...u){return o.has(f)||(f&&Fe(f.install)?(o.add(f),f.install(l,...u)):Fe(f)&&(o.add(f),f(l,...u))),l},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),l},component(f,u){return u?(r.components[f]=u,l):r.components[f]},directive(f,u){return u?(r.directives[f]=u,l):r.directives[f]},mount(f,u,h){if(!c){const p=l._ceVNode||Xn(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(p,f,h),c=!0,l._container=f,f.__vue_app__=l,uo(p.component)}},onUnmount(f){a.push(f)},unmount(){c&&(bn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,u){return r.provides[f]=u,l},runWithContext(f){const u=us;us=l;try{return f()}finally{us=u}}};return l}}let us=null;function Rm(t,e){if(Et){let n=Et.provides;const i=Et.parent&&Et.parent.provides;i===n&&(n=Et.provides=Object.create(i)),n[t]=e}}function kr(t,e,n=!1){const i=Et||Yt;if(i||us){const s=us?us._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Fe(e)?e.call(i&&i.proxy):e}}const hh={},dh=()=>Object.create(hh),ph=t=>Object.getPrototypeOf(t)===hh;function Cm(t,e,n,i=!1){const s={},r=dh();t.propsDefaults=Object.create(null),mh(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Wp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Pm(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=je(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(lo(t.emitsOptions,h))continue;const p=e[h];if(c)if(Xe(r,h))p!==r[h]&&(r[h]=p,l=!0);else{const _=nn(h);s[_]=Ka(c,a,_,p,t,!1)}else p!==r[h]&&(r[h]=p,l=!0)}}}else{mh(t,e,s,r)&&(l=!0);let f;for(const u in a)(!e||!Xe(e,u)&&((f=Fi(u))===u||!Xe(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=Ka(c,a,u,void 0,t,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!Xe(e,u))&&(delete r[u],l=!0)}l&&Gn(t.attrs,"set","")}function mh(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vs(c))continue;const l=e[c];let f;s&&Xe(s,f=nn(c))?!r||!r.includes(f)?n[f]=l:(a||(a={}))[f]=l:lo(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=je(n),l=a||Je;for(let f=0;f<r.length;f++){const u=r[f];n[u]=Ka(s,c,u,l[u],t,!Xe(l,u))}}return o}function Ka(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Xe(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const f=sr(s);i=l[n]=c.call(null,e),f()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Fi(n))&&(i=!0))}return i}const Lm=new WeakMap;function gh(t,e,n=!1){const i=n?Lm:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Fe(t)){const f=u=>{c=!0;const[h,p]=gh(u,e,!0);Ft(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return ct(t)&&i.set(t,ls),ls;if(Ne(r))for(let f=0;f<r.length;f++){const u=nn(r[f]);ll(u)&&(o[u]=Je)}else if(r)for(const f in r){const u=nn(f);if(ll(u)){const h=r[f],p=o[u]=Ne(h)||Fe(h)?{type:h}:Ft({},h),_=p.type;let g=!1,m=!0;if(Ne(_))for(let d=0;d<_.length;++d){const A=_[d],E=Fe(A)&&A.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(m=!1)}else g=Fe(_)&&_.name==="Boolean";p[0]=g,p[1]=m,(g||Xe(p,"default"))&&a.push(u)}}const l=[o,a];return ct(t)&&i.set(t,l),l}function ll(t){return t[0]!=="$"&&!Vs(t)}const _h=t=>t[0]==="_"||t==="$stable",wc=t=>Ne(t)?t.map(Mn):[Mn(t)],Dm=(t,e,n)=>{if(e._n)return e;const i=nm((...s)=>wc(e(...s)),n);return i._c=!1,i},vh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(_h(s))continue;const r=t[s];if(Fe(r))e[s]=Dm(s,r,i);else if(r!=null){const o=wc(r);e[s]=()=>o}}},xh=(t,e)=>{const n=wc(e);t.slots.default=()=>n},Mh=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Um=(t,e,n)=>{const i=t.slots=dh();if(t.vnode.shapeFlag&32){const s=e._;s?(Mh(i,e,n),n&&Fu(i,"_",s,!0)):vh(e,i)}else e&&xh(t,e)},Im=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Je;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Mh(s,e,n):(r=!e.$stable,vh(e,s)),o=e}else e&&(xh(t,e),o={default:1});if(r)for(const a in s)!_h(a)&&o[a]==null&&delete s[a]},$t=Ym;function Fm(t){return Nm(t)}function Nm(t,e){const n=oo();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:p=yn,insertStaticContent:_}=t,g=(C,P,z,ie=null,Q=null,se=null,de=void 0,re=null,le=!!P.dynamicChildren)=>{if(C===P)return;C&&!Rs(C,P)&&(ie=I(C),ue(C,Q,se,!0),C=null),P.patchFlag===-2&&(le=!1,P.dynamicChildren=null);const{type:ae,ref:b,shapeFlag:x}=P;switch(ae){case fo:m(C,P,z,ie);break;case Js:d(C,P,z,ie);break;case Ho:C==null&&A(P,z,ie,de);break;case Vn:$(C,P,z,ie,Q,se,de,re,le);break;default:x&1?S(C,P,z,ie,Q,se,de,re,le):x&6?D(C,P,z,ie,Q,se,de,re,le):(x&64||x&128)&&ae.process(C,P,z,ie,Q,se,de,re,le,me)}b!=null&&Q&&Zr(b,C&&C.ref,se,P||C,!P)},m=(C,P,z,ie)=>{if(C==null)i(P.el=a(P.children),z,ie);else{const Q=P.el=C.el;P.children!==C.children&&l(Q,P.children)}},d=(C,P,z,ie)=>{C==null?i(P.el=c(P.children||""),z,ie):P.el=C.el},A=(C,P,z,ie)=>{[C.el,C.anchor]=_(C.children,P,z,ie,C.el,C.anchor)},E=({el:C,anchor:P},z,ie)=>{let Q;for(;C&&C!==P;)Q=h(C),i(C,z,ie),C=Q;i(P,z,ie)},v=({el:C,anchor:P})=>{let z;for(;C&&C!==P;)z=h(C),s(C),C=z;s(P)},S=(C,P,z,ie,Q,se,de,re,le)=>{P.type==="svg"?de="svg":P.type==="math"&&(de="mathml"),C==null?y(P,z,ie,Q,se,de,re,le):M(C,P,Q,se,de,re,le)},y=(C,P,z,ie,Q,se,de,re)=>{let le,ae;const{props:b,shapeFlag:x,transition:N,dirs:Y}=C;if(le=C.el=o(C.type,se,b&&b.is,b),x&8?f(le,C.children):x&16&&U(C.children,le,null,ie,Q,Bo(C,se),de,re),Y&&di(C,null,ie,"created"),R(le,C,C.scopeId,de,ie),b){for(const he in b)he!=="value"&&!Vs(he)&&r(le,he,null,b[he],se,ie);"value"in b&&r(le,"value",null,b.value,se),(ae=b.onVnodeBeforeMount)&&mn(ae,ie,C)}Y&&di(C,null,ie,"beforeMount");const Z=Om(Q,N);Z&&N.beforeEnter(le),i(le,P,z),((ae=b&&b.onVnodeMounted)||Z||Y)&&$t(()=>{ae&&mn(ae,ie,C),Z&&N.enter(le),Y&&di(C,null,ie,"mounted")},Q)},R=(C,P,z,ie,Q)=>{if(z&&p(C,z),ie)for(let se=0;se<ie.length;se++)p(C,ie[se]);if(Q){let se=Q.subTree;if(P===se||Ah(se.type)&&(se.ssContent===P||se.ssFallback===P)){const de=Q.vnode;R(C,de,de.scopeId,de.slotScopeIds,Q.parent)}}},U=(C,P,z,ie,Q,se,de,re,le=0)=>{for(let ae=le;ae<C.length;ae++){const b=C[ae]=re?ri(C[ae]):Mn(C[ae]);g(null,b,P,z,ie,Q,se,de,re)}},M=(C,P,z,ie,Q,se,de)=>{const re=P.el=C.el;let{patchFlag:le,dynamicChildren:ae,dirs:b}=P;le|=C.patchFlag&16;const x=C.props||Je,N=P.props||Je;let Y;if(z&&pi(z,!1),(Y=N.onVnodeBeforeUpdate)&&mn(Y,z,P,C),b&&di(P,C,z,"beforeUpdate"),z&&pi(z,!0),(x.innerHTML&&N.innerHTML==null||x.textContent&&N.textContent==null)&&f(re,""),ae?T(C.dynamicChildren,ae,re,z,ie,Bo(P,Q),se):de||k(C,P,re,null,z,ie,Bo(P,Q),se,!1),le>0){if(le&16)B(re,x,N,z,Q);else if(le&2&&x.class!==N.class&&r(re,"class",null,N.class,Q),le&4&&r(re,"style",x.style,N.style,Q),le&8){const Z=P.dynamicProps;for(let he=0;he<Z.length;he++){const L=Z[he],J=x[L],W=N[L];(W!==J||L==="value")&&r(re,L,J,W,Q,z)}}le&1&&C.children!==P.children&&f(re,P.children)}else!de&&ae==null&&B(re,x,N,z,Q);((Y=N.onVnodeUpdated)||b)&&$t(()=>{Y&&mn(Y,z,P,C),b&&di(P,C,z,"updated")},ie)},T=(C,P,z,ie,Q,se,de)=>{for(let re=0;re<P.length;re++){const le=C[re],ae=P[re],b=le.el&&(le.type===Vn||!Rs(le,ae)||le.shapeFlag&70)?u(le.el):z;g(le,ae,b,null,ie,Q,se,de,!0)}},B=(C,P,z,ie,Q)=>{if(P!==z){if(P!==Je)for(const se in P)!Vs(se)&&!(se in z)&&r(C,se,P[se],null,Q,ie);for(const se in z){if(Vs(se))continue;const de=z[se],re=P[se];de!==re&&se!=="value"&&r(C,se,re,de,Q,ie)}"value"in z&&r(C,"value",P.value,z.value,Q)}},$=(C,P,z,ie,Q,se,de,re,le)=>{const ae=P.el=C?C.el:a(""),b=P.anchor=C?C.anchor:a("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:Y}=P;Y&&(re=re?re.concat(Y):Y),C==null?(i(ae,z,ie),i(b,z,ie),U(P.children||[],z,b,Q,se,de,re,le)):x>0&&x&64&&N&&C.dynamicChildren?(T(C.dynamicChildren,N,z,Q,se,de,re),(P.key!=null||Q&&P===Q.subTree)&&Sh(C,P,!0)):k(C,P,z,b,Q,se,de,re,le)},D=(C,P,z,ie,Q,se,de,re,le)=>{P.slotScopeIds=re,C==null?P.shapeFlag&512?Q.ctx.activate(P,z,ie,de,le):O(P,z,ie,Q,se,de,le):H(C,P,le)},O=(C,P,z,ie,Q,se,de)=>{const re=C.component=ig(C,ie,Q);if(oh(C)&&(re.ctx.renderer=me),sg(re,!1,de),re.asyncDep){if(Q&&Q.registerDep(re,j,de),!C.el){const le=re.subTree=Xn(Js);d(null,le,P,z)}}else j(re,C,P,z,Q,se,de)},H=(C,P,z)=>{const ie=P.component=C.component;if(Xm(C,P,z))if(ie.asyncDep&&!ie.asyncResolved){G(ie,P,z);return}else ie.next=P,ie.update();else P.el=C.el,ie.vnode=P},j=(C,P,z,ie,Q,se,de)=>{const re=()=>{if(C.isMounted){let{next:x,bu:N,u:Y,parent:Z,vnode:he}=C;{const Me=Eh(C);if(Me){x&&(x.el=he.el,G(C,x,de)),Me.asyncDep.then(()=>{C.isUnmounted||re()});return}}let L=x,J;pi(C,!1),x?(x.el=he.el,G(C,x,de)):x=he,N&&Gr(N),(J=x.props&&x.props.onVnodeBeforeUpdate)&&mn(J,Z,x,he),pi(C,!0);const W=ul(C),ge=C.subTree;C.subTree=W,g(ge,W,u(ge.el),I(ge),C,Q,se),x.el=W.el,L===null&&qm(C,W.el),Y&&$t(Y,Q),(J=x.props&&x.props.onVnodeUpdated)&&$t(()=>mn(J,Z,x,he),Q)}else{let x;const{el:N,props:Y}=P,{bm:Z,m:he,parent:L,root:J,type:W}=C,ge=$s(P);pi(C,!1),Z&&Gr(Z),!ge&&(x=Y&&Y.onVnodeBeforeMount)&&mn(x,L,P),pi(C,!0);{J.ce&&J.ce._injectChildStyle(W);const Me=C.subTree=ul(C);g(null,Me,z,ie,C,Q,se),P.el=Me.el}if(he&&$t(he,Q),!ge&&(x=Y&&Y.onVnodeMounted)){const Me=P;$t(()=>mn(x,L,Me),Q)}(P.shapeFlag&256||L&&$s(L.vnode)&&L.vnode.shapeFlag&256)&&C.a&&$t(C.a,Q),C.isMounted=!0,P=z=ie=null}};C.scope.on();const le=C.effect=new Ou(re);C.scope.off();const ae=C.update=le.run.bind(le),b=C.job=le.runIfDirty.bind(le);b.i=C,b.id=C.uid,le.scheduler=()=>bc(b),pi(C,!0),ae()},G=(C,P,z)=>{P.component=C;const ie=C.vnode.props;C.vnode=P,C.next=null,Pm(C,P.props,ie,z),Im(C,P.children,z),ci(),tl(C),li()},k=(C,P,z,ie,Q,se,de,re,le=!1)=>{const ae=C&&C.children,b=C?C.shapeFlag:0,x=P.children,{patchFlag:N,shapeFlag:Y}=P;if(N>0){if(N&128){oe(ae,x,z,ie,Q,se,de,re,le);return}else if(N&256){fe(ae,x,z,ie,Q,se,de,re,le);return}}Y&8?(b&16&&ve(ae,Q,se),x!==ae&&f(z,x)):b&16?Y&16?oe(ae,x,z,ie,Q,se,de,re,le):ve(ae,Q,se,!0):(b&8&&f(z,""),Y&16&&U(x,z,ie,Q,se,de,re,le))},fe=(C,P,z,ie,Q,se,de,re,le)=>{C=C||ls,P=P||ls;const ae=C.length,b=P.length,x=Math.min(ae,b);let N;for(N=0;N<x;N++){const Y=P[N]=le?ri(P[N]):Mn(P[N]);g(C[N],Y,z,null,Q,se,de,re,le)}ae>b?ve(C,Q,se,!0,!1,x):U(P,z,ie,Q,se,de,re,le,x)},oe=(C,P,z,ie,Q,se,de,re,le)=>{let ae=0;const b=P.length;let x=C.length-1,N=b-1;for(;ae<=x&&ae<=N;){const Y=C[ae],Z=P[ae]=le?ri(P[ae]):Mn(P[ae]);if(Rs(Y,Z))g(Y,Z,z,null,Q,se,de,re,le);else break;ae++}for(;ae<=x&&ae<=N;){const Y=C[x],Z=P[N]=le?ri(P[N]):Mn(P[N]);if(Rs(Y,Z))g(Y,Z,z,null,Q,se,de,re,le);else break;x--,N--}if(ae>x){if(ae<=N){const Y=N+1,Z=Y<b?P[Y].el:ie;for(;ae<=N;)g(null,P[ae]=le?ri(P[ae]):Mn(P[ae]),z,Z,Q,se,de,re,le),ae++}}else if(ae>N)for(;ae<=x;)ue(C[ae],Q,se,!0),ae++;else{const Y=ae,Z=ae,he=new Map;for(ae=Z;ae<=N;ae++){const Se=P[ae]=le?ri(P[ae]):Mn(P[ae]);Se.key!=null&&he.set(Se.key,ae)}let L,J=0;const W=N-Z+1;let ge=!1,Me=0;const be=new Array(W);for(ae=0;ae<W;ae++)be[ae]=0;for(ae=Y;ae<=x;ae++){const Se=C[ae];if(J>=W){ue(Se,Q,se,!0);continue}let we;if(Se.key!=null)we=he.get(Se.key);else for(L=Z;L<=N;L++)if(be[L-Z]===0&&Rs(Se,P[L])){we=L;break}we===void 0?ue(Se,Q,se,!0):(be[we-Z]=ae+1,we>=Me?Me=we:ge=!0,g(Se,P[we],z,null,Q,se,de,re,le),J++)}const Ee=ge?Bm(be):ls;for(L=Ee.length-1,ae=W-1;ae>=0;ae--){const Se=Z+ae,we=P[Se],Ie=Se+1<b?P[Se+1].el:ie;be[ae]===0?g(null,we,z,Ie,Q,se,de,re,le):ge&&(L<0||ae!==Ee[L]?Te(we,z,Ie,2):L--)}}},Te=(C,P,z,ie,Q=null)=>{const{el:se,type:de,transition:re,children:le,shapeFlag:ae}=C;if(ae&6){Te(C.component.subTree,P,z,ie);return}if(ae&128){C.suspense.move(P,z,ie);return}if(ae&64){de.move(C,P,z,me);return}if(de===Vn){i(se,P,z);for(let x=0;x<le.length;x++)Te(le[x],P,z,ie);i(C.anchor,P,z);return}if(de===Ho){E(C,P,z);return}if(ie!==2&&ae&1&&re)if(ie===0)re.beforeEnter(se),i(se,P,z),$t(()=>re.enter(se),Q);else{const{leave:x,delayLeave:N,afterLeave:Y}=re,Z=()=>i(se,P,z),he=()=>{x(se,()=>{Z(),Y&&Y()})};N?N(se,Z,he):he()}else i(se,P,z)},ue=(C,P,z,ie=!1,Q=!1)=>{const{type:se,props:de,ref:re,children:le,dynamicChildren:ae,shapeFlag:b,patchFlag:x,dirs:N,cacheIndex:Y}=C;if(x===-2&&(Q=!1),re!=null&&Zr(re,null,z,C,!0),Y!=null&&(P.renderCache[Y]=void 0),b&256){P.ctx.deactivate(C);return}const Z=b&1&&N,he=!$s(C);let L;if(he&&(L=de&&de.onVnodeBeforeUnmount)&&mn(L,P,C),b&6)_e(C.component,z,ie);else{if(b&128){C.suspense.unmount(z,ie);return}Z&&di(C,null,P,"beforeUnmount"),b&64?C.type.remove(C,P,z,me,ie):ae&&!ae.hasOnce&&(se!==Vn||x>0&&x&64)?ve(ae,P,z,!1,!0):(se===Vn&&x&384||!Q&&b&16)&&ve(le,P,z),ie&&K(C)}(he&&(L=de&&de.onVnodeUnmounted)||Z)&&$t(()=>{L&&mn(L,P,C),Z&&di(C,null,P,"unmounted")},z)},K=C=>{const{type:P,el:z,anchor:ie,transition:Q}=C;if(P===Vn){ce(z,ie);return}if(P===Ho){v(C);return}const se=()=>{s(z),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(C.shapeFlag&1&&Q&&!Q.persisted){const{leave:de,delayLeave:re}=Q,le=()=>de(z,se);re?re(C.el,se,le):le()}else se()},ce=(C,P)=>{let z;for(;C!==P;)z=h(C),s(C),C=z;s(P)},_e=(C,P,z)=>{const{bum:ie,scope:Q,job:se,subTree:de,um:re,m:le,a:ae}=C;fl(le),fl(ae),ie&&Gr(ie),Q.stop(),se&&(se.flags|=8,ue(de,C,P,z)),re&&$t(re,P),$t(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ve=(C,P,z,ie=!1,Q=!1,se=0)=>{for(let de=se;de<C.length;de++)ue(C[de],P,z,ie,Q)},I=C=>{if(C.shapeFlag&6)return I(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const P=h(C.anchor||C.el),z=P&&P[im];return z?h(z):P};let De=!1;const Pe=(C,P,z)=>{C==null?P._vnode&&ue(P._vnode,null,null,!0):g(P._vnode||null,C,P,null,null,null,z),P._vnode=C,De||(De=!0,tl(),nh(),De=!1)},me={p:g,um:ue,m:Te,r:K,mt:O,mc:U,pc:k,pbc:T,n:I,o:t};return{render:Pe,hydrate:void 0,createApp:wm(Pe)}}function Bo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Om(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sh(t,e,n=!1){const i=t.children,s=e.children;if(Ne(i)&&Ne(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ri(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Sh(o,a)),a.type===fo&&(a.el=o.el)}}function Bm(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Eh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Eh(e)}function fl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zm=Symbol.for("v-scx"),Hm=()=>kr(zm);function zo(t,e,n){return yh(t,e,n)}function yh(t,e,n=Je){const{immediate:i,deep:s,flush:r,once:o}=n,a=Ft({},n),c=e&&i||!e&&r!=="post";let l;if(er){if(r==="sync"){const p=Hm();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=yn,p.resume=yn,p.pause=yn,p}}const f=Et;a.call=(p,_,g)=>bn(p,f,_,g);let u=!1;r==="post"?a.scheduler=p=>{$t(p,f&&f.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(p,_)=>{_?p():bc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,f&&(p.id=f.uid,p.i=f))};const h=Zp(t,e,a);return er&&(l?l.push(h):c&&h()),h}function Vm(t,e,n){const i=this.proxy,s=mt(t)?t.includes(".")?Th(i,t):()=>i[t]:t.bind(i,i);let r;Fe(e)?r=e:(r=e.handler,n=e);const o=sr(this),a=yh(s,r.bind(i),n);return o(),a}function Th(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Gm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${Fi(e)}Modifiers`];function km(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Je;let s=n;const r=e.startsWith("update:"),o=r&&Gm(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>mt(f)?f.trim():f)),o.number&&(s=n.map(Va)));let a,c=i[a=Uo(e)]||i[a=Uo(nn(e))];!c&&r&&(c=i[a=Uo(Fi(e))]),c&&bn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bn(l,t,6,s)}}function bh(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Fe(t)){const c=l=>{const f=bh(l,e,!0);f&&(a=!0,Ft(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ct(t)&&i.set(t,null),null):(Ne(r)?r.forEach(c=>o[c]=null):Ft(o,r),ct(t)&&i.set(t,o),o)}function lo(t,e){return!t||!no(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(t,e[0].toLowerCase()+e.slice(1))||Xe(t,Fi(e))||Xe(t,e))}function ul(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:u,data:h,setupState:p,ctx:_,inheritAttrs:g}=t,m=Kr(t);let d,A;try{if(n.shapeFlag&4){const v=s||i,S=v;d=Mn(l.call(S,v,f,u,p,h,_)),A=a}else{const v=e;d=Mn(v.length>1?v(u,{attrs:a,slots:o,emit:c}):v(u,null)),A=e.props?a:Wm(a)}}catch(v){qs.length=0,ao(v,t,1),d=Xn(Js)}let E=d;if(A&&g!==!1){const v=Object.keys(A),{shapeFlag:S}=E;v.length&&S&7&&(r&&v.some(hc)&&(A=$m(A,r)),E=gs(E,A,!1,!0))}return n.dirs&&(E=gs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Ac(E,n.transition),d=E,Kr(m),d}const Wm=t=>{let e;for(const n in t)(n==="class"||n==="style"||no(n))&&((e||(e={}))[n]=t[n]);return e},$m=(t,e)=>{const n={};for(const i in t)(!hc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Xm(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?hl(i,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==i[h]&&!lo(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hl(i,o,l):!0:!!o;return!1}function hl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!lo(n,r))return!0}return!1}function qm({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ah=t=>t.__isSuspense;function Ym(t,e){e&&e.pendingBranch?Ne(t)?e.effects.push(...t):e.effects.push(t):tm(t)}const Vn=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),Js=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),qs=[];let jt=null;function Rc(t=!1){qs.push(jt=t?null:[])}function jm(){qs.pop(),jt=qs[qs.length-1]||null}let Qs=1;function dl(t,e=!1){Qs+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function Km(t){return t.dynamicChildren=Qs>0?jt||ls:null,jm(),Qs>0&&jt&&jt.push(t),t}function Cc(t,e,n,i,s,r){return Km(Mt(t,e,n,i,s,r,!0))}function wh(t){return t?t.__v_isVNode===!0:!1}function Rs(t,e){return t.type===e.type&&t.key===e.key}const Rh=({key:t})=>t??null,Wr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?mt(t)||It(t)||Fe(t)?{i:Yt,r:t,k:e,f:!!n}:t:null);function Mt(t,e=null,n=null,i=0,s=null,r=t===Vn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rh(e),ref:e&&Wr(e),scopeId:sh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Yt};return a?(Pc(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=mt(n)?8:16),Qs>0&&!o&&jt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&jt.push(c),c}const Xn=Zm;function Zm(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===vm)&&(t=Js),wh(t)){const a=gs(t,e,!0);return n&&Pc(a,n),Qs>0&&!r&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag=-2,a}if(lg(t)&&(t=t.__vccOpts),e){e=Jm(e);let{class:a,style:c}=e;a&&!mt(a)&&(e.class=gc(a)),ct(c)&&(Tc(c)&&!Ne(c)&&(c=Ft({},c)),e.style=mc(c))}const o=mt(t)?1:Ah(t)?128:sm(t)?64:ct(t)?4:Fe(t)?2:0;return Mt(t,e,n,i,s,o,r,!0)}function Jm(t){return t?Tc(t)||ph(t)?Ft({},t):t:null}function gs(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?eg(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Rh(l),ref:e&&e.ref?n&&r?Ne(r)?r.concat(Wr(e)):[r,Wr(e)]:Wr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&Ac(f,c.clone(f)),f}function Qm(t=" ",e=0){return Xn(fo,null,t,e)}function Mn(t){return t==null||typeof t=="boolean"?Xn(Js):Ne(t)?Xn(Vn,null,t.slice()):wh(t)?ri(t):Xn(fo,null,String(t))}function ri(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function Pc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ne(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Pc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ph(e)?e._ctx=Yt:s===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Yt},n=32):(e=String(e),i&64?(n=16,e=[Qm(e)]):n=8);t.children=e,t.shapeFlag|=n}function eg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=gc([e.class,i.class]));else if(s==="style")e.style=mc([e.style,i.style]);else if(no(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ne(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function mn(t,e,n,i=null){bn(t,e,7,[n,i])}const tg=uh();let ng=0;function ig(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||tg,r={uid:ng++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gh(i,s),emitsOptions:bh(i,s),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:i.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=km.bind(null,r),t.ce&&t.ce(r),r}let Et=null,Qr,Za;{const t=oo(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Qr=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),Za=e("__VUE_SSR_SETTERS__",n=>er=n)}const sr=t=>{const e=Et;return Qr(t),t.scope.on(),()=>{t.scope.off(),Qr(e)}},pl=()=>{Et&&Et.scope.off(),Qr(null)};function Ch(t){return t.vnode.shapeFlag&4}let er=!1;function sg(t,e=!1,n=!1){e&&Za(e);const{props:i,children:s}=t.vnode,r=Ch(t);Cm(t,i,r,e),Um(t,s,n);const o=r?rg(t,e):void 0;return e&&Za(!1),o}function rg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mm);const{setup:i}=n;if(i){ci();const s=t.setupContext=i.length>1?ag(t):null,r=sr(t),o=ir(i,t,0,[t.props,s]),a=Iu(o);if(li(),r(),(a||t.sp)&&!$s(t)&&rh(t),a){if(o.then(pl,pl),e)return o.then(c=>{ml(t,c)}).catch(c=>{ao(c,t,0)});t.asyncDep=o}else ml(t,o)}else Ph(t)}function ml(t,e,n){Fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=Qu(e)),Ph(t)}function Ph(t,e,n){const i=t.type;t.render||(t.render=i.render||yn);{const s=sr(t);ci();try{Sm(t)}finally{li(),s()}}}const og={get(t,e){return St(t,"get",""),t[e]}};function ag(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,og),slots:t.slots,emit:t.emit,expose:e}}function uo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qu($p(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xs)return Xs[n](t)},has(e,n){return n in e||n in Xs}})):t.proxy}function cg(t,e=!0){return Fe(t)?t.displayName||t.name:t.name||e&&t.__name}function lg(t){return Fe(t)&&"__vccOpts"in t}const fg=(t,e)=>jp(t,e,er),ug="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ja;const gl=typeof window<"u"&&window.trustedTypes;if(gl)try{Ja=gl.createPolicy("vue",{createHTML:t=>t})}catch{}const Lh=Ja?t=>Ja.createHTML(t):t=>t,hg="http://www.w3.org/2000/svg",dg="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,_l=Hn&&Hn.createElement("template"),pg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Hn.createElementNS(hg,t):e==="mathml"?Hn.createElementNS(dg,t):n?Hn.createElement(t,{is:n}):Hn.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{_l.innerHTML=Lh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=_l.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mg=Symbol("_vtc");function gg(t,e,n){const i=t[mg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vl=Symbol("_vod"),_g=Symbol("_vsh"),vg=Symbol(""),xg=/(^|;)\s*display\s*:/;function Mg(t,e,n){const i=t.style,s=mt(n);let r=!1;if(n&&!s){if(e)if(mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&$r(i,a,"")}else for(const o in e)n[o]==null&&$r(i,o,"");for(const o in n)o==="display"&&(r=!0),$r(i,o,n[o])}else if(s){if(e!==n){const o=i[vg];o&&(n+=";"+o),i.cssText=n,r=xg.test(n)}}else e&&t.removeAttribute("style");vl in t&&(t[vl]=r?i.display:"",t[_g]&&(i.display="none"))}const xl=/\s*!important$/;function $r(t,e,n){if(Ne(n))n.forEach(i=>$r(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Sg(t,e);xl.test(n)?t.setProperty(Fi(i),n.replace(xl,""),"important"):t[i]=n}}const Ml=["Webkit","Moz","ms"],Vo={};function Sg(t,e){const n=Vo[e];if(n)return n;let i=nn(e);if(i!=="filter"&&i in t)return Vo[e]=i;i=ro(i);for(let s=0;s<Ml.length;s++){const r=Ml[s]+i;if(r in t)return Vo[e]=r}return e}const Sl="http://www.w3.org/1999/xlink";function El(t,e,n,i,s,r=yp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sl,e.slice(6,e.length)):t.setAttributeNS(Sl,e,n):n==null||r&&!Nu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Es(n)?String(n):n)}function yl(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lh(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Nu(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function rs(t,e,n,i){t.addEventListener(e,n,i)}function Eg(t,e,n,i){t.removeEventListener(e,n,i)}const Tl=Symbol("_vei");function yg(t,e,n,i,s=null){const r=t[Tl]||(t[Tl]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=Tg(e);if(i){const l=r[e]=wg(i,s);rs(t,a,l,c)}else o&&(Eg(t,a,o,c),r[e]=void 0)}}const bl=/(?:Once|Passive|Capture)$/;function Tg(t){let e;if(bl.test(t)){e={};let i;for(;i=t.match(bl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fi(t.slice(2)),e]}let Go=0;const bg=Promise.resolve(),Ag=()=>Go||(bg.then(()=>Go=0),Go=Date.now());function wg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;bn(Rg(i,n.value),e,5,[i])};return n.value=t,n.attached=Ag(),n}function Rg(t,e){if(Ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cg=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?gg(t,i,o):e==="style"?Mg(t,n,i):no(e)?hc(e)||yg(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pg(t,e,i,o))?(yl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&El(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!mt(i))?yl(t,nn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),El(t,e,i,o))};function Pg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Al(e)&&Fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Al(e)&&mt(n)?!1:e in t}const wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ne(e)?n=>Gr(e,n):e};function Lg(t){t.target.composing=!0}function Rl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ko=Symbol("_assign"),Cl={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[ko]=wl(s);const r=i||s.props&&s.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Va(a)),t[ko](a)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",Lg),rs(t,"compositionend",Rl),rs(t,"change",Rl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[ko]=wl(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Va(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Dg=Ft({patchProp:Cg},pg);let Pl;function Ug(){return Pl||(Pl=Fm(Dg))}const Ig=(...t)=>{const e=Ug().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Ng(i);if(!s)return;const r=e._component;!Fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Fg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Fg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ng(t){return mt(t)?document.querySelector(t):t}const Lc=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Og={data(){return{width:51,length:68}},methods:{emitValues(){this.$emit("update-dimensions",{width:this.width,length:this.length})}}},Bg={class:"flex flex-col sm:flex-row sm:space-x-4"},zg={class:"mb-4 sm:mb-0"};function Hg(t,e,n,i,s,r){return Rc(),Cc("div",null,[Mt("div",Bg,[Mt("div",zg,[e[3]||(e[3]=Mt("label",{class:"block text-sm font-medium text-gray-700"},"Width (mm):",-1)),nl(Mt("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.width=o),type:"number",placeholder:"Enter width",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,512),[[Cl,s.width,void 0,{number:!0}]])]),Mt("div",null,[e[4]||(e[4]=Mt("label",{class:"block text-sm font-medium text-gray-700"},"Length (mm):",-1)),nl(Mt("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.length=o),type:"number",placeholder:"Enter length",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,512),[[Cl,s.length,void 0,{number:!0}]])])]),Mt("button",{onClick:e[2]||(e[2]=(...o)=>r.emitValues&&r.emitValues(...o)),class:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"}," Update ")])}const Vg=Lc(Og,[["render",Hg],["__scopeId","data-v-4fedbc83"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="152",Bi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gg=0,Ll=1,kg=2,Dh=1,Wg=2,zn=3,ai=0,Bt=1,Wn=2,oi=0,hs=1,Dl=2,Ul=3,Il=4,$g=5,os=100,Xg=101,qg=102,Fl=103,Nl=104,Yg=200,jg=201,Kg=202,Zg=203,Uh=204,Ih=205,Jg=206,Qg=207,e_=208,t_=209,n_=210,i_=0,s_=1,r_=2,Qa=3,o_=4,a_=5,c_=6,l_=7,Fh=0,f_=1,u_=2,qn=0,h_=1,d_=2,p_=3,m_=4,g_=5,Nh=300,_s=301,vs=302,ec=303,tc=304,ho=306,nc=1e3,un=1001,ic=1002,Lt=1003,Ol=1004,Wo=1005,en=1006,__=1007,tr=1008,Li=1009,v_=1010,x_=1011,Oh=1012,M_=1013,Ti=1014,bi=1015,nr=1016,S_=1017,E_=1018,ds=1020,y_=1021,hn=1023,T_=1024,b_=1025,Ri=1026,xs=1027,A_=1028,w_=1029,R_=1030,C_=1031,P_=1033,$o=33776,Xo=33777,qo=33778,Yo=33779,Bl=35840,zl=35841,Hl=35842,Vl=35843,L_=36196,Gl=37492,kl=37496,Wl=37808,$l=37809,Xl=37810,ql=37811,Yl=37812,jl=37813,Kl=37814,Zl=37815,Jl=37816,Ql=37817,ef=37818,tf=37819,nf=37820,sf=37821,jo=36492,D_=36283,rf=36284,of=36285,af=36286,Bh=3e3,Ci=3001,U_=3200,I_=3201,zh=0,F_=1,Pi="",Oe="srgb",An="srgb-linear",Hh="display-p3",Ko=7680,N_=519,cf=35044,lf="300 es",sc=1035;class Ni{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,rc=180/Math.PI;function rr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[t&255]+vt[t>>8&255]+vt[t>>16&255]+vt[t>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[n&63|128]+vt[n>>8&255]+"-"+vt[n>>16&255]+vt[n>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function O_(t,e){return(t%e+e)%e}function Jo(t,e,n){return(1-n)*t+n*e}function ff(t){return(t&t-1)===0&&t!==0}function B_(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _r(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=n,f[4]=r,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],u=i[7],h=i[2],p=i[5],_=i[8],g=s[0],m=s[3],d=s[6],A=s[1],E=s[4],v=s[7],S=s[2],y=s[5],R=s[8];return r[0]=o*g+a*A+c*S,r[3]=o*m+a*E+c*y,r[6]=o*d+a*v+c*R,r[1]=l*g+f*A+u*S,r[4]=l*m+f*E+u*y,r[7]=l*d+f*v+u*R,r[2]=h*g+p*A+_*S,r[5]=h*m+p*E+_*y,r[8]=h*d+p*v+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return n*o*f-n*a*l-i*r*f+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*o-a*l,h=a*c-f*r,p=l*r-o*c,_=n*u+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(s*l-f*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(f*n-s*c)*g,e[5]=(s*r-a*n)*g,e[6]=p*g,e[7]=(i*c-l*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qo.makeScale(e,n)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qo.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new We;function Vh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function eo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const uf={};function Ys(t){t in uf||(uf[t]=!0,console.warn(t))}function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ea(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const z_=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),H_=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function V_(t){return t.convertSRGBToLinear().applyMatrix3(H_)}function G_(t){return t.applyMatrix3(z_).convertLinearToSRGB()}const k_={[An]:t=>t,[Oe]:t=>t.convertSRGBToLinear(),[Hh]:V_},W_={[An]:t=>t,[Oe]:t=>t.convertLinearToSRGB(),[Hh]:G_},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return An},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=k_[e],s=W_[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Hi;class Gh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=eo("canvas")),Hi.width=e.width,Hi.height=e.height;const i=Hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=eo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ps(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class kh{constructor(e=null){this.isSource=!0,this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ta(s[o].image)):r.push(ta(s[o]))}else r=ta(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function ta(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $_=0;class Kt extends Ni{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=un,s=un,r=en,o=tr,a=hn,c=Li,l=Kt.DEFAULT_ANISOTROPY,f=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=rr(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Ci?Oe:Pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?Ci:Bh}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ci?Oe:Pi}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Nh;Kt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,v=(p+1)/2,S=(d+1)/2,y=(f+h)/4,R=(u+g)/4,U=(_+m)/4;return E>v&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=y/i,r=R/i):v>S?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=y/s,r=U/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=U/r),this.set(i,s,r,n),this}let A=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(h-f)*(h-f));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(u-g)/A,this.z=(h-f)/A,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Di extends Ni{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ci?Oe:Pi),this.texture=new Kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:en,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new kh(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wh extends Kt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X_ extends Kt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],f=i[s+2],u=i[s+3];const h=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=f,e[n+3]=u;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=g;return}if(u!==g||c!==h||l!==p||f!==_){let m=1-a;const d=c*h+l*p+f*_+u*g,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const S=Math.sqrt(E),y=Math.atan2(S,d*A);m=Math.sin(m*y)/S,a=Math.sin(a*y)/S}const v=a*A;if(c=c*m+h*v,l=l*m+p*v,f=f*m+_*v,u=u*m+g*v,m===1-a){const S=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=S,l*=S,f*=S,u*=S}}e[n]=c,e[n+1]=l,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],f=i[s+3],u=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return e[n]=a*_+f*u+c*p-l*h,e[n+1]=c*_+f*h+l*u-a*p,e[n+2]=l*_+f*p+a*h-c*u,e[n+3]=f*_-a*u-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(s/2),u=a(r/2),h=c(i/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*f*u+l*p*_,this._y=l*p*u-h*f*_,this._z=l*f*_+h*p*u,this._w=l*f*u-h*p*_;break;case"YXZ":this._x=h*f*u+l*p*_,this._y=l*p*u-h*f*_,this._z=l*f*_-h*p*u,this._w=l*f*u+h*p*_;break;case"ZXY":this._x=h*f*u-l*p*_,this._y=l*p*u+h*f*_,this._z=l*f*_+h*p*u,this._w=l*f*u-h*p*_;break;case"ZYX":this._x=h*f*u-l*p*_,this._y=l*p*u+h*f*_,this._z=l*f*_-h*p*u,this._w=l*f*u+h*p*_;break;case"YZX":this._x=h*f*u+l*p*_,this._y=l*p*u+h*f*_,this._z=l*f*_-h*p*u,this._w=l*f*u-h*p*_;break;case"XZY":this._x=h*f*u-l*p*_,this._y=l*p*u-h*f*_,this._z=l*f*_+h*p*u,this._w=l*f*u+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],f=n[6],u=n[10],h=i+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(f-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+o*a+s*l-r*c,this._y=s*f+o*c+r*a-i*l,this._z=r*f+o*l+i*c-s*a,this._w=o*f-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-n)*f)/l,h=Math.sin(n*f)/l;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*s-a*i,f=c*i+a*n-r*s,u=c*s+r*i-o*n,h=-r*n-o*i-a*s;return this.x=l*c+h*-r+f*-a-u*-o,this.y=f*c+h*-o+u*-r-l*-a,this.z=u*c+h*-a+l*-o-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new q,hf=new Ui;class or{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Vi.copy(e.boundingBox),Vi.applyMatrix4(e.matrixWorld),this.union(Vi);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Pn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else s.boundingBox===null&&s.computeBoundingBox(),Vi.copy(s.boundingBox),Vi.applyMatrix4(e.matrixWorld),this.union(Vi)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),vr.subVectors(this.max,Cs),Gi.subVectors(e.a,Cs),ki.subVectors(e.b,Cs),Wi.subVectors(e.c,Cs),Jn.subVectors(ki,Gi),Qn.subVectors(Wi,ki),mi.subVectors(Gi,Wi);let n=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-mi.y,mi.x,0];return!ia(n,Gi,ki,Wi,vr)||(n=[1,0,0,0,1,0,0,0,1],!ia(n,Gi,ki,Wi,vr))?!1:(xr.crossVectors(Jn,Qn),n=[xr.x,xr.y,xr.z],ia(n,Gi,ki,Wi,vr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new q,new q,new q,new q,new q,new q,new q,new q],Pn=new q,Vi=new or,Gi=new q,ki=new q,Wi=new q,Jn=new q,Qn=new q,mi=new q,Cs=new q,vr=new q,xr=new q,gi=new q;function ia(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){gi.fromArray(t,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=e.dot(gi),l=n.dot(gi),f=i.dot(gi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const q_=new or,Ps=new q,sa=new q;class Uc{constructor(e=new q,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(sa)),this.expandByPoint(Ps.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new q,ra=new q,Mr=new q,ei=new q,oa=new q,Sr=new q,aa=new q;class Y_{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ln.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,n),Ln.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){ra.copy(e).add(n).multiplyScalar(.5),Mr.copy(n).sub(e).normalize(),ei.copy(this.origin).sub(ra);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Mr),a=ei.dot(this.direction),c=-ei.dot(Mr),l=ei.lengthSq(),f=Math.abs(1-o*o);let u,h,p,_;if(f>0)if(u=o*c-a,h=o*a-c,_=r*f,u>=0)if(h>=-_)if(h<=_){const g=1/f;u*=g,h*=g,p=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;else h<=-_?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+h*(h+2*c)+l):h<=_?(u=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+h*(h+2*c)+l);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ra).addScaledVector(Mr,h),p}intersectSphere(e,n){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,n,i,s,r){oa.subVectors(n,e),Sr.subVectors(i,e),aa.crossVectors(oa,Sr);let o=this.direction.dot(aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const c=a*this.direction.dot(Sr.crossVectors(ei,Sr));if(c<0)return null;const l=a*this.direction.dot(oa.cross(ei));if(l<0||c+l>o)return null;const f=-a*ei.dot(aa);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,c,l,f,u,h,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*f,p=o*u,_=a*f,g=a*u;n[0]=c*f,n[4]=-c*u,n[8]=l,n[1]=p+_*l,n[5]=h-g*l,n[9]=-a*c,n[2]=g-h*l,n[6]=_+p*l,n[10]=o*c}else if(e.order==="YXZ"){const h=c*f,p=c*u,_=l*f,g=l*u;n[0]=h+g*a,n[4]=_*a-p,n[8]=o*l,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=g+h*a,n[10]=o*c}else if(e.order==="ZXY"){const h=c*f,p=c*u,_=l*f,g=l*u;n[0]=h-g*a,n[4]=-o*u,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=g-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const h=o*f,p=o*u,_=a*f,g=a*u;n[0]=c*f,n[4]=_*l-p,n[8]=h*l+g,n[1]=c*u,n[5]=g*l+h,n[9]=p*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,_=a*c,g=a*l;n[0]=c*f,n[4]=g-h*u,n[8]=_*u+p,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-l*f,n[6]=p*u+_,n[10]=h-g*u}else if(e.order==="XZY"){const h=o*c,p=o*l,_=a*c,g=a*l;n[0]=c*f,n[4]=-u,n[8]=l*f,n[1]=h*u+g,n[5]=o*f,n[9]=p*u-_,n[2]=_*u-p,n[6]=a*f,n[10]=g*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,K_)}lookAt(e,n,i){const s=this.elements;return Vt.subVectors(e,n),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),ti.crossVectors(i,Vt),ti.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),ti.crossVectors(i,Vt)),ti.normalize(),Er.crossVectors(Vt,ti),s[0]=ti.x,s[4]=Er.x,s[8]=Vt.x,s[1]=ti.y,s[5]=Er.y,s[9]=Vt.y,s[2]=ti.z,s[6]=Er.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],u=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],A=i[3],E=i[7],v=i[11],S=i[15],y=s[0],R=s[4],U=s[8],M=s[12],T=s[1],B=s[5],$=s[9],D=s[13],O=s[2],H=s[6],j=s[10],G=s[14],k=s[3],fe=s[7],oe=s[11],Te=s[15];return r[0]=o*y+a*T+c*O+l*k,r[4]=o*R+a*B+c*H+l*fe,r[8]=o*U+a*$+c*j+l*oe,r[12]=o*M+a*D+c*G+l*Te,r[1]=f*y+u*T+h*O+p*k,r[5]=f*R+u*B+h*H+p*fe,r[9]=f*U+u*$+h*j+p*oe,r[13]=f*M+u*D+h*G+p*Te,r[2]=_*y+g*T+m*O+d*k,r[6]=_*R+g*B+m*H+d*fe,r[10]=_*U+g*$+m*j+d*oe,r[14]=_*M+g*D+m*G+d*Te,r[3]=A*y+E*T+v*O+S*k,r[7]=A*R+E*B+v*H+S*fe,r[11]=A*U+E*$+v*j+S*oe,r[15]=A*M+E*D+v*G+S*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+r*c*u-s*l*u-r*a*h+i*l*h+s*a*p-i*c*p)+g*(+n*c*p-n*l*h+r*o*h-s*o*p+s*l*f-r*c*f)+m*(+n*l*u-n*a*p-r*o*u+i*o*p+r*a*f-i*l*f)+d*(-s*a*f-n*c*u+n*a*h+s*o*u-i*o*h+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],A=u*m*l-g*h*l+g*c*p-a*m*p-u*c*d+a*h*d,E=_*h*l-f*m*l-_*c*p+o*m*p+f*c*d-o*h*d,v=f*g*l-_*u*l+_*a*p-o*g*p-f*a*d+o*u*d,S=_*u*c-f*g*c-_*a*h+o*g*h+f*a*m-o*u*m,y=n*A+i*E+s*v+r*S;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/y;return e[0]=A*R,e[1]=(g*h*r-u*m*r-g*s*p+i*m*p+u*s*d-i*h*d)*R,e[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*d+i*c*d)*R,e[3]=(u*c*r-a*h*r-u*s*l+i*h*l+a*s*p-i*c*p)*R,e[4]=E*R,e[5]=(f*m*r-_*h*r+_*s*p-n*m*p-f*s*d+n*h*d)*R,e[6]=(_*c*r-o*m*r-_*s*l+n*m*l+o*s*d-n*c*d)*R,e[7]=(o*h*r-f*c*r+f*s*l-n*h*l-o*s*p+n*c*p)*R,e[8]=v*R,e[9]=(_*u*r-f*g*r-_*i*p+n*g*p+f*i*d-n*u*d)*R,e[10]=(o*g*r-_*a*r+_*i*l-n*g*l-o*i*d+n*a*d)*R,e[11]=(f*a*r-o*u*r-f*i*l+n*u*l+o*i*p-n*a*p)*R,e[12]=S*R,e[13]=(f*g*s-_*u*s+_*i*h-n*g*h-f*i*m+n*u*m)*R,e[14]=(_*a*s-o*g*s-_*i*c+n*g*c+o*i*m-n*a*m)*R,e[15]=(o*u*s-f*a*s+f*i*c-n*u*c-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,f=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+i,f*c-s*o,0,l*c-s*a,f*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,f=o+o,u=a+a,h=r*l,p=r*f,_=r*u,g=o*f,m=o*u,d=a*u,A=c*l,E=c*f,v=c*u,S=i.x,y=i.y,R=i.z;return s[0]=(1-(g+d))*S,s[1]=(p+v)*S,s[2]=(_-E)*S,s[3]=0,s[4]=(p-v)*y,s[5]=(1-(h+d))*y,s[6]=(m+A)*y,s[7]=0,s[8]=(_+E)*R,s[9]=(m-A)*R,s[10]=(1-(h+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const l=1/r,f=1/o,u=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,n.setFromRotationMatrix(on),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,c=2*r/(n-e),l=2*r/(i-s),f=(n+e)/(n-e),u=(i+s)/(i-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,c=1/(n-e),l=1/(i-s),f=1/(o-r),u=(n+e)*c,h=(i+s)*l,p=(o+r)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $i=new q,on=new lt,j_=new q(0,0,0),K_=new q(1,1,1),ti=new q,Er=new q,Vt=new q,df=new lt,pf=new Ui;class po{constructor(e=0,n=0,i=0,s=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],f=s[9],u=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z_=0;const mf=new q,Xi=new Ui,Dn=new lt,yr=new q,Ls=new q,J_=new q,Q_=new Ui,gf=new q(1,0,0),_f=new q(0,1,0),vf=new q(0,0,1),e0={type:"added"},xf={type:"removed"};class yt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new q,n=new po,i=new Ui,s=new q(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(_f,e)}rotateZ(e){return this.rotateOnAxis(vf,e)}translateOnAxis(e,n){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(_f,e)}translateZ(e){return this.translateOnAxis(vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yr.copy(e):yr.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ls,yr,this.up):Dn.lookAt(yr,Ls,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(e0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(xf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}yt.DEFAULT_UP=new q(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new q,Un=new q,ca=new q,In=new q,qi=new q,Yi=new q,Mf=new q,la=new q,fa=new q,ua=new q;let Tr=!1;class fn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),an.subVectors(e,n),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){an.subVectors(s,n),Un.subVectors(i,n),ca.subVectors(e,n);const o=an.dot(an),a=an.dot(Un),c=an.dot(ca),l=Un.dot(Un),f=Un.dot(ca),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,p=(l*c-a*f)*h,_=(o*f-a*c)*h;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,n,i,s,r,o,a,c){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),this.getInterpolation(e,n,i,s,r,o,a,c)}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,In),c.setScalar(0),c.addScaledVector(r,In.x),c.addScaledVector(o,In.y),c.addScaledVector(a,In.z),c}static isFrontFacing(e,n,i,s){return an.subVectors(i,n),Un.subVectors(e,n),an.cross(Un).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),an.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),fn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;qi.subVectors(s,i),Yi.subVectors(r,i),la.subVectors(e,i);const c=qi.dot(la),l=Yi.dot(la);if(c<=0&&l<=0)return n.copy(i);fa.subVectors(e,s);const f=qi.dot(fa),u=Yi.dot(fa);if(f>=0&&u<=f)return n.copy(s);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(qi,o);ua.subVectors(e,r);const p=qi.dot(ua),_=Yi.dot(ua);if(_>=0&&p<=_)return n.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(Yi,a);const m=f*_-p*u;if(m<=0&&u-f>=0&&p-_>=0)return Mf.subVectors(r,s),a=(u-f)/(u-f+(p-_)),n.copy(s).addScaledVector(Mf,a);const d=1/(m+g+h);return o=g*d,a=h*d,n.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let t0=0;class ar extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=hs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uh,this.blendDst=Ih,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},br={h:0,s:0,l:0};function ha(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=rn.workingColorSpace){return this.r=e,this.g=n,this.b=i,rn.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=rn.workingColorSpace){if(e=O_(e,1),n=Ut(n,0,1),i=Ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ha(o,r,e+1/3),this.g=ha(o,r,e),this.b=ha(o,r,e-1/3)}return rn.toWorkingColorSpace(this,s),this}setStyle(e,n=Oe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Oe){const i=Xh[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return rn.fromWorkingColorSpace(xt.copy(this),e),Math.round(Ut(xt.r*255,0,255))*65536+Math.round(Ut(xt.g*255,0,255))*256+Math.round(Ut(xt.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rn.workingColorSpace){rn.fromWorkingColorSpace(xt.copy(this),n);const i=xt.r,s=xt.g,r=xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,n=rn.workingColorSpace){return rn.fromWorkingColorSpace(xt.copy(this),n),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Oe){rn.fromWorkingColorSpace(xt.copy(this),e);const n=xt.r,i=xt.g,s=xt.b;return e!==Oe?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(cn),cn.h+=e,cn.s+=n,cn.l+=i,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cn),e.getHSL(br);const i=Jo(cn.h,br.h,n),s=Jo(cn.s,br.s,n),r=Jo(cn.l,br.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Qe;Qe.NAMES=Xh;class qh extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new q,Ar=new He;class Zt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ar.fromBufferAttribute(this,n),Ar.applyMatrix3(e),this.setXY(n,Ar.x,Ar.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyMatrix3(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyMatrix4(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyNormalMatrix(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.transformDirection(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_r(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_r(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_r(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Yh extends Zt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jh extends Zt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yn extends Zt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let n0=0;const Qt=new lt,da=new yt,ji=new q,Gt=new or,Ds=new or,dt=new q;class jn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?jh:Yh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,n,i){return Qt.makeTranslation(e,n,i),this.applyMatrix4(Qt),this}scale(e,n,i){return Qt.makeScale(e,n,i),this.applyMatrix4(Qt),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Gt.min,Ds.min),Gt.expandByPoint(dt),dt.addVectors(Gt.max,Ds.max),Gt.expandByPoint(dt)):(Gt.expandByPoint(Ds.min),Gt.expandByPoint(Ds.max))}Gt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)dt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),dt.add(ji)),s=Math.max(s,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let T=0;T<a;T++)l[T]=new q,f[T]=new q;const u=new q,h=new q,p=new q,_=new He,g=new He,m=new He,d=new q,A=new q;function E(T,B,$){u.fromArray(s,T*3),h.fromArray(s,B*3),p.fromArray(s,$*3),_.fromArray(o,T*2),g.fromArray(o,B*2),m.fromArray(o,$*2),h.sub(u),p.sub(u),g.sub(_),m.sub(_);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),A.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(D),l[T].add(d),l[B].add(d),l[$].add(d),f[T].add(A),f[B].add(A),f[$].add(A))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let T=0,B=v.length;T<B;++T){const $=v[T],D=$.start,O=$.count;for(let H=D,j=D+O;H<j;H+=3)E(i[H+0],i[H+1],i[H+2])}const S=new q,y=new q,R=new q,U=new q;function M(T){R.fromArray(r,T*3),U.copy(R);const B=l[T];S.copy(B),S.sub(R.multiplyScalar(R.dot(B))).normalize(),y.crossVectors(U,B);const D=y.dot(f[T])<0?-1:1;c[T*4]=S.x,c[T*4+1]=S.y,c[T*4+2]=S.z,c[T*4+3]=D}for(let T=0,B=v.length;T<B;++T){const $=v[T],D=$.start,O=$.count;for(let H=D,j=D+O;H<j;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new q,r=new q,o=new q,a=new q,c=new q,l=new q,f=new q,u=new q;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(f),c.add(f),l.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)dt.fromBufferAttribute(e,n),dt.normalize(),e.setXYZ(n,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*f;for(let d=0;d<f;d++)h[_++]=l[p++]}return new Zt(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let f=0,u=l.length;f<u;f++){const h=l[f],p=e(h,i);c.push(p)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];f.push(p.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(n))}const r=e.morphAttributes;for(const l in r){const f=[],u=r[l];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(n));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sf=new lt,gn=new Y_,wr=new Uc,Ef=new q,Ki=new q,Zi=new q,Ji=new q,pa=new q,Rr=new q,Cr=new He,Pr=new He,Lr=new He,yf=new q,Tf=new q,bf=new q,Dr=new q,Ur=new q;class $n extends yt{constructor(e=new jn,n=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=a[c],u=r[c];f!==0&&(pa.fromBufferAttribute(u,e),o?Rr.addScaledVector(pa,f):Rr.addScaledVector(pa.sub(n),f))}n.add(Rr)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),gn.copy(e.ray).recast(e.near),!(wr.containsPoint(gn.origin)===!1&&(gn.intersectSphere(wr,Ef)===null||gn.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(Sf.copy(r).invert(),gn.copy(e.ray).applyMatrix4(Sf),!(i.boundingBox!==null&&gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],d=Math.max(g.start,h.start),A=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let E=d,v=A;E<v;E+=3){const S=o.getX(E),y=o.getX(E+1),R=o.getX(E+2);i=Ir(this,m,e,gn,c,l,f,S,y,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const d=o.getX(g),A=o.getX(g+1),E=o.getX(g+2);i=Ir(this,r,e,gn,c,l,f,d,A,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],d=Math.max(g.start,h.start),A=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let E=d,v=A;E<v;E+=3){const S=E,y=E+1,R=E+2;i=Ir(this,m,e,gn,c,l,f,S,y,R),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const d=g,A=g+1,E=g+2;i=Ir(this,r,e,gn,c,l,f,d,A,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function i0(t,e,n,i,s,r,o,a){let c;if(e.side===Bt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ai,a),c===null)return null;Ur.copy(a),Ur.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Ur);return l<n.near||l>n.far?null:{distance:l,point:Ur.clone(),object:t}}function Ir(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,Ki),t.getVertexPosition(c,Zi),t.getVertexPosition(l,Ji);const f=i0(t,e,n,i,Ki,Zi,Ji,Dr);if(f){s&&(Cr.fromBufferAttribute(s,a),Pr.fromBufferAttribute(s,c),Lr.fromBufferAttribute(s,l),f.uv=fn.getInterpolation(Dr,Ki,Zi,Ji,Cr,Pr,Lr,new He)),r&&(Cr.fromBufferAttribute(r,a),Pr.fromBufferAttribute(r,c),Lr.fromBufferAttribute(r,l),f.uv1=fn.getInterpolation(Dr,Ki,Zi,Ji,Cr,Pr,Lr,new He),f.uv2=f.uv1),o&&(yf.fromBufferAttribute(o,a),Tf.fromBufferAttribute(o,c),bf.fromBufferAttribute(o,l),f.normal=fn.getInterpolation(Dr,Ki,Zi,Ji,yf,Tf,bf,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new q,materialIndex:0};fn.getNormal(Ki,Zi,Ji,u.normal),f.face=u}return f}class cr extends jn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],f=[],u=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(f,3)),this.setAttribute("uv",new Yn(u,2));function _(g,m,d,A,E,v,S,y,R,U,M){const T=v/R,B=S/U,$=v/2,D=S/2,O=y/2,H=R+1,j=U+1;let G=0,k=0;const fe=new q;for(let oe=0;oe<j;oe++){const Te=oe*B-D;for(let ue=0;ue<H;ue++){const K=ue*T-$;fe[g]=K*A,fe[m]=Te*E,fe[d]=O,l.push(fe.x,fe.y,fe.z),fe[g]=0,fe[m]=0,fe[d]=y>0?1:-1,f.push(fe.x,fe.y,fe.z),u.push(ue/R),u.push(1-oe/U),G+=1}}for(let oe=0;oe<U;oe++)for(let Te=0;Te<R;Te++){const ue=h+Te+H*oe,K=h+Te+H*(oe+1),ce=h+(Te+1)+H*(oe+1),_e=h+(Te+1)+H*oe;c.push(ue,K,_e),c.push(K,ce,_e),k+=6}a.addGroup(p,k,M),p+=k,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Ct(t){const e={};for(let n=0;n<t.length;n++){const i=Ms(t[n]);for(const s in i)e[s]=i[s]}return e}function s0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kh(t){return t.getRenderTarget()===null?t.outputColorSpace:An}const r0={clone:Ms,merge:Ct};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zh extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends Zh{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qi=-90,es=1;class c0 extends yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new tn(Qi,es,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new tn(Qi,es,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new tn(Qi,es,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new tn(Qi,es,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new tn(Qi,es,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new tn(Qi,es,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,c,l]=this.children,f=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=qn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,l),e.setRenderTarget(f),e.toneMapping=u,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Jh extends Kt{constructor(e,n,i,s,r,o,a,c,l,f){e=e!==void 0?e:[],n=n!==void 0?n:_s,super(e,n,i,s,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends Di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ci?Oe:Pi),this.texture=new Jh(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cr(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:oi});r.uniforms.tEquirect.value=n;const o=new $n(s,r),a=n.minFilter;return n.minFilter===tr&&(n.minFilter=en),new c0(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const ma=new q,f0=new q,u0=new We;class Mi{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ma.subVectors(i,n).cross(f0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||u0.getNormalMatrix(e),s=this.coplanarPoint(ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Uc,Fr=new q;class Ic{constructor(e=new Mi,n=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],f=i[6],u=i[7],h=i[8],p=i[9],_=i[10],g=i[11],m=i[12],d=i[13],A=i[14],E=i[15];return n[0].setComponents(a-s,u-c,g-h,E-m).normalize(),n[1].setComponents(a+s,u+c,g+h,E+m).normalize(),n[2].setComponents(a+r,u+l,g+p,E+d).normalize(),n[3].setComponents(a-r,u-l,g-p,E-d).normalize(),n[4].setComponents(a-o,u-f,g-_,E-A).normalize(),n[5].setComponents(a+o,u+f,g+_,E+A).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_i.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function h0(t,e){const n=e.isWebGL2,i=new WeakMap;function s(l,f){const u=l.array,h=l.usage,p=t.createBuffer();t.bindBuffer(f,p),t.bufferData(f,u,h),l.onUploadCallback();let _;if(u instanceof Float32Array)_=t.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=t.SHORT;else if(u instanceof Uint32Array)_=t.UNSIGNED_INT;else if(u instanceof Int32Array)_=t.INT;else if(u instanceof Int8Array)_=t.BYTE;else if(u instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,f,u){const h=f.array,p=f.updateRange;t.bindBuffer(u,l),p.count===-1?t.bufferSubData(u,0,h):(n?t.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(t.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,s(l,f)):u.version<l.version&&(r(u.buffer,l,f),u.version=l.version)}return{get:o,remove:a,update:c}}class Fc extends jn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,f=c+1,u=e/a,h=n/c,p=[],_=[],g=[],m=[];for(let d=0;d<f;d++){const A=d*h-o;for(let E=0;E<l;E++){const v=E*u-r;_.push(v,-A,0),g.push(0,0,1),m.push(E/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<a;A++){const E=A+l*d,v=A+l*(d+1),S=A+1+l*(d+1),y=A+1+l*d;p.push(E,v,y),p.push(v,S,y)}this.setIndex(p),this.setAttribute("position",new Yn(_,3)),this.setAttribute("normal",new Yn(g,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}var d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0="vec3 transformed = vec3( position );",M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,cv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gv=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ev=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ix=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ox=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,px=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Px=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ux=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:v0,begin_vertex:x0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:E0,bumpmap_pars_fragment:y0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:w0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:P0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:I0,displacementmap_pars_vertex:F0,displacementmap_vertex:N0,emissivemap_fragment:O0,emissivemap_pars_fragment:B0,encodings_fragment:z0,encodings_pars_fragment:H0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:k0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:nv,envmap_vertex:$0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:Y0,fog_pars_fragment:j0,gradientmap_pars_fragment:K0,lightmap_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:ev,lights_pars_begin:tv,lights_toon_fragment:iv,lights_toon_pars_fragment:sv,lights_phong_fragment:rv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:cv,lights_fragment_begin:lv,lights_fragment_maps:fv,lights_fragment_end:uv,logdepthbuf_fragment:hv,logdepthbuf_pars_fragment:dv,logdepthbuf_pars_vertex:pv,logdepthbuf_vertex:mv,map_fragment:gv,map_pars_fragment:_v,map_particle_fragment:vv,map_particle_pars_fragment:xv,metalnessmap_fragment:Mv,metalnessmap_pars_fragment:Sv,morphcolor_vertex:Ev,morphnormal_vertex:yv,morphtarget_pars_vertex:Tv,morphtarget_vertex:bv,normal_fragment_begin:Av,normal_fragment_maps:wv,normal_pars_fragment:Rv,normal_pars_vertex:Cv,normal_vertex:Pv,normalmap_pars_fragment:Lv,clearcoat_normal_fragment_begin:Dv,clearcoat_normal_fragment_maps:Uv,clearcoat_pars_fragment:Iv,iridescence_pars_fragment:Fv,output_fragment:Nv,packing:Ov,premultiplied_alpha_fragment:Bv,project_vertex:zv,dithering_fragment:Hv,dithering_pars_fragment:Vv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:$v,shadowmap_vertex:Xv,shadowmask_pars_fragment:qv,skinbase_vertex:Yv,skinning_pars_vertex:jv,skinning_vertex:Kv,skinnormal_vertex:Zv,specularmap_fragment:Jv,specularmap_pars_fragment:Qv,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ox,worldpos_vertex:ax,background_vert:cx,background_frag:lx,backgroundCube_vert:fx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:dx,depth_vert:px,depth_frag:mx,distanceRGBA_vert:gx,distanceRGBA_frag:_x,equirect_vert:vx,equirect_frag:xx,linedashed_vert:Mx,linedashed_frag:Sx,meshbasic_vert:Ex,meshbasic_frag:yx,meshlambert_vert:Tx,meshlambert_frag:bx,meshmatcap_vert:Ax,meshmatcap_frag:wx,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Px,meshphong_frag:Lx,meshphysical_vert:Dx,meshphysical_frag:Ux,meshtoon_vert:Ix,meshtoon_frag:Fx,points_vert:Nx,points_frag:Ox,shadow_vert:Bx,shadow_frag:zx,sprite_vert:Hx,sprite_frag:Vx},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},Sn={basic:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ct([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ct([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ct([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ct([xe.points,xe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ct([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ct([xe.common,xe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ct([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ct([xe.sprite,xe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ct([xe.common,xe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ct([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Sn.physical={uniforms:Ct([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Nr={r:0,b:0,g:0};function Gx(t,e,n,i,s,r,o){const a=new Qe(0);let c=r===!0?0:1,l,f,u=null,h=0,p=null;function _(m,d){let A=!1,E=d.isScene===!0?d.background:null;switch(E&&E.isTexture&&(E=(d.backgroundBlurriness>0?n:e).get(E)),E===null?g(a,c):E&&E.isColor&&(g(E,1),A=!0),t.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),A=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),A=!0;break}(t.autoClear||A)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===ho)?(f===void 0&&(f=new $n(new cr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ms(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(y,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.toneMapped=E.colorSpace!==Oe,(u!==E||h!==E.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,u=E,h=E.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new $n(new Fc(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ms(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=E.colorSpace!==Oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,p=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(Nr,Kh(t)),i.buffers.color.setClear(Nr.r,Nr.g,Nr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function kx(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,f=!1;function u(O,H,j,G,k){let fe=!1;if(o){const oe=g(G,j,H);l!==oe&&(l=oe,p(l.object)),fe=d(O,G,j,k),fe&&A(O,G,j,k)}else{const oe=H.wireframe===!0;(l.geometry!==G.id||l.program!==j.id||l.wireframe!==oe)&&(l.geometry=G.id,l.program=j.id,l.wireframe=oe,fe=!0)}k!==null&&n.update(k,t.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,U(O,H,j,G),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(k).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function p(O){return i.isWebGL2?t.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?t.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,H,j){const G=j.wireframe===!0;let k=a[O.id];k===void 0&&(k={},a[O.id]=k);let fe=k[H.id];fe===void 0&&(fe={},k[H.id]=fe);let oe=fe[G];return oe===void 0&&(oe=m(h()),fe[G]=oe),oe}function m(O){const H=[],j=[],G=[];for(let k=0;k<s;k++)H[k]=0,j[k]=0,G[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:G,object:O,attributes:{},index:null}}function d(O,H,j,G){const k=l.attributes,fe=H.attributes;let oe=0;const Te=j.getAttributes();for(const ue in Te)if(Te[ue].location>=0){const ce=k[ue];let _e=fe[ue];if(_e===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor)),ce===void 0||ce.attribute!==_e||_e&&ce.data!==_e.data)return!0;oe++}return l.attributesNum!==oe||l.index!==G}function A(O,H,j,G){const k={},fe=H.attributes;let oe=0;const Te=j.getAttributes();for(const ue in Te)if(Te[ue].location>=0){let ce=fe[ue];ce===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor));const _e={};_e.attribute=ce,ce&&ce.data&&(_e.data=ce.data),k[ue]=_e,oe++}l.attributes=k,l.attributesNum=oe,l.index=G}function E(){const O=l.newAttributes;for(let H=0,j=O.length;H<j;H++)O[H]=0}function v(O){S(O,0)}function S(O,H){const j=l.newAttributes,G=l.enabledAttributes,k=l.attributeDivisors;j[O]=1,G[O]===0&&(t.enableVertexAttribArray(O),G[O]=1),k[O]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),k[O]=H)}function y(){const O=l.newAttributes,H=l.enabledAttributes;for(let j=0,G=H.length;j<G;j++)H[j]!==O[j]&&(t.disableVertexAttribArray(j),H[j]=0)}function R(O,H,j,G,k,fe){i.isWebGL2===!0&&(j===t.INT||j===t.UNSIGNED_INT)?t.vertexAttribIPointer(O,H,j,k,fe):t.vertexAttribPointer(O,H,j,G,k,fe)}function U(O,H,j,G){if(i.isWebGL2===!1&&(O.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const k=G.attributes,fe=j.getAttributes(),oe=H.defaultAttributeValues;for(const Te in fe){const ue=fe[Te];if(ue.location>=0){let K=k[Te];if(K===void 0&&(Te==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),Te==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),K!==void 0){const ce=K.normalized,_e=K.itemSize,ve=n.get(K);if(ve===void 0)continue;const I=ve.buffer,De=ve.type,Pe=ve.bytesPerElement;if(K.isInterleavedBufferAttribute){const me=K.data,Ce=me.stride,C=K.offset;if(me.isInstancedInterleavedBuffer){for(let P=0;P<ue.locationSize;P++)S(ue.location+P,me.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let P=0;P<ue.locationSize;P++)v(ue.location+P);t.bindBuffer(t.ARRAY_BUFFER,I);for(let P=0;P<ue.locationSize;P++)R(ue.location+P,_e/ue.locationSize,De,ce,Ce*Pe,(C+_e/ue.locationSize*P)*Pe)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<ue.locationSize;me++)S(ue.location+me,K.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<ue.locationSize;me++)v(ue.location+me);t.bindBuffer(t.ARRAY_BUFFER,I);for(let me=0;me<ue.locationSize;me++)R(ue.location+me,_e/ue.locationSize,De,ce,_e*Pe,_e/ue.locationSize*me*Pe)}}else if(oe!==void 0){const ce=oe[Te];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(ue.location,ce);break;case 3:t.vertexAttrib3fv(ue.location,ce);break;case 4:t.vertexAttrib4fv(ue.location,ce);break;default:t.vertexAttrib1fv(ue.location,ce)}}}}y()}function M(){$();for(const O in a){const H=a[O];for(const j in H){const G=H[j];for(const k in G)_(G[k].object),delete G[k];delete H[j]}delete a[O]}}function T(O){if(a[O.id]===void 0)return;const H=a[O.id];for(const j in H){const G=H[j];for(const k in G)_(G[k].object),delete G[k];delete H[j]}delete a[O.id]}function B(O){for(const H in a){const j=a[H];if(j[O.id]===void 0)continue;const G=j[O.id];for(const k in G)_(G[k].object),delete G[k];delete j[O.id]}}function $(){D(),f=!0,l!==c&&(l=c,p(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:$,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:v,disableUnusedAttributes:y}}function Wx(t,e,n,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,f){t.drawArrays(r,l,f),n.update(f,r,1)}function c(l,f,u){if(u===0)return;let h,p;if(s)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,l,f,u),n.update(f,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function $x(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,v=o||e.has("OES_texture_float"),S=E&&v,y=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:A,vertexTextures:E,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:y}}function Xx(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Mi,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||s;return s=h,i=u.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!s||_===null||_.length===0||r&&!m)r?f(null):l();else{const A=r?0:i,E=A*4;let v=d.clippingState||null;c.value=v,v=f(_,h,E,p);for(let S=0;S!==E;++S)v[S]=n[S];d.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const d=p+g*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,v=p;E!==g;++E,v+=4)o.copy(u[E]).applyMatrix4(A,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function qx(t){let e=new WeakMap;function n(o,a){return a===ec?o.mapping=_s:a===tc&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ec||a===tc)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new l0(c.height/2);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ed extends Zh{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,Af=[.125,.215,.35,.446,.526,.582],Ei=20,ga=new ed,wf=new Qe;let _a=null;const Si=(1+Math.sqrt(5))/2,ts=1/Si,Rf=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Si,ts),new q(0,Si,-ts),new q(ts,0,Si),new q(-ts,0,Si),new q(Si,ts,0),new q(-Si,ts,0)];class Cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){_a=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a),e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:nr,format:hn,colorSpace:An,depthBuffer:!1},s=Pf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yx(r)),this._blurMaterial=jx(r,e,n)}return s}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,ga)}_sceneToCubeUV(e,n,i,s){const a=new tn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(wf),f.toneMapping=qn,f.autoClear=!1;const p=new qh({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new $n(new cr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(wf),g=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):A===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const E=this._cubeSize;Or(s,A*E,d>2?E:0,E,E),f.setRenderTarget(s),g&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===_s||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Or(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,ga)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Rf[(s-1)%Rf.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new $n(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),g=r/_,m=isFinite(r)?1+Math.floor(f*g):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const d=[];let A=0;for(let R=0;R<Ei;++R){const U=R/g,M=Math.exp(-U*U/2);d.push(M),R===0?A+=M:R<m&&(A+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const v=this._sizeLods[s],S=3*v*(s>E-as?s-E+as:0),y=4*(this._cubeSize-v);Or(n,S,y,3*v,2*v),c.setRenderTarget(n),c.render(u,ga)}}function Yx(t){const e=[],n=[],i=[];let s=t;const r=t-as+1+Af.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let c=1/a;o>t-as?c=Af[o-t+as-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,_=6,g=3,m=2,d=1,A=new Float32Array(g*_*p),E=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let y=0;y<p;y++){const R=y%3*2/3-1,U=y>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];A.set(M,g*_*y),E.set(h,m*_*y);const T=[y,y,y,y,y,y];v.set(T,d*_*y)}const S=new jn;S.setAttribute("position",new Zt(A,g)),S.setAttribute("uv",new Zt(E,m)),S.setAttribute("faceIndex",new Zt(v,d)),e.push(S),s>as&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pf(t,e,n){const i=new Di(t,e,n);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function jx(t,e,n){const i=new Float32Array(Ei),s=new q(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Lf(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Df(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kx(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ec||c===tc,f=c===_s||c===vs;if(l||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return n===null&&(n=new Cf(t)),u=l?n.fromEquirectangular(a,u):n.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||f&&u&&s(u)){n===null&&(n=new Cf(t));const h=l?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Zx(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jx(t,e,n,i){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function c(u){const h=u.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)e.update(g[m],t.ARRAY_BUFFER)}}function l(u){const h=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const A=p.array;g=p.version;for(let E=0,v=A.length;E<v;E+=3){const S=A[E+0],y=A[E+1],R=A[E+2];h.push(S,y,y,R,R,S)}}else{const A=_.array;g=_.version;for(let E=0,v=A.length/3-1;E<v;E+=3){const S=E+0,y=E+1,R=E+2;h.push(S,y,y,R,R,S)}}const m=new(Vh(h)?jh:Yh)(h,1);m.version=g;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function f(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function Qx(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function f(h,p){t.drawElements(r,p,a,h*c),n.update(p,r,1)}function u(h,p,_){if(_===0)return;let g,m;if(s)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,a,h*c,_),n.update(p,r,_)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=u}function eM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function tM(t,e){return t[0]-e[0]}function nM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function iM(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,f,u){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(f);if(m===void 0||m.count!==g){let H=function(){D.dispose(),r.delete(f),f.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const E=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let M=0;E===!0&&(M=1),v===!0&&(M=2),S===!0&&(M=3);let T=f.attributes.position.count*M,B=1;T>e.maxTextureSize&&(B=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*B*4*g),D=new Wh($,T,B,g);D.type=bi,D.needsUpdate=!0;const O=M*4;for(let j=0;j<g;j++){const G=y[j],k=R[j],fe=U[j],oe=T*B*4*j;for(let Te=0;Te<G.count;Te++){const ue=Te*O;E===!0&&(o.fromBufferAttribute(G,Te),$[oe+ue+0]=o.x,$[oe+ue+1]=o.y,$[oe+ue+2]=o.z,$[oe+ue+3]=0),v===!0&&(o.fromBufferAttribute(k,Te),$[oe+ue+4]=o.x,$[oe+ue+5]=o.y,$[oe+ue+6]=o.z,$[oe+ue+7]=0),S===!0&&(o.fromBufferAttribute(fe,Te),$[oe+ue+8]=o.x,$[oe+ue+9]=o.y,$[oe+ue+10]=o.z,$[oe+ue+11]=fe.itemSize===4?o.w:1)}}m={count:g,texture:D,size:new He(T,B)},r.set(f,m),f.addEventListener("dispose",H)}let d=0;for(let E=0;E<h.length;E++)d+=h[E];const A=f.morphTargetsRelative?1:1-d;u.getUniforms().setValue(t,"morphTargetBaseInfluence",A),u.getUniforms().setValue(t,"morphTargetInfluences",h),u.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[f.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];i[f.id]=g}for(let v=0;v<_;v++){const S=g[v];S[0]=v,S[1]=h[v]}g.sort(nM);for(let v=0;v<8;v++)v<_&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(tM);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let A=0;for(let v=0;v<8;v++){const S=a[v],y=S[0],R=S[1];y!==Number.MAX_SAFE_INTEGER&&R?(m&&f.getAttribute("morphTarget"+v)!==m[y]&&f.setAttribute("morphTarget"+v,m[y]),d&&f.getAttribute("morphNormal"+v)!==d[y]&&f.setAttribute("morphNormal"+v,d[y]),s[v]=R,A+=R):(m&&f.hasAttribute("morphTarget"+v)===!0&&f.deleteAttribute("morphTarget"+v),d&&f.hasAttribute("morphNormal"+v)===!0&&f.deleteAttribute("morphNormal"+v),s[v]=0)}const E=f.morphTargetsRelative?1:1-A;u.getUniforms().setValue(t,"morphTargetBaseInfluence",E),u.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:c}}function sM(t,e,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,f=c.geometry,u=e.get(c,f);return s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER)),u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}const td=new Kt,nd=new Wh,id=new X_,sd=new Jh,Uf=[],If=[],Ff=new Float32Array(16),Nf=new Float32Array(9),Of=new Float32Array(4);function ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Uf[s];if(r===void 0&&(r=new Float32Array(s),Uf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mo(t,e){let n=If[e];n===void 0&&(n=new Int32Array(e),If[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2fv(this.addr,e),ut(n,e)}}function aM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ft(n,e))return;t.uniform3fv(this.addr,e),ut(n,e)}}function cM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4fv(this.addr,e),ut(n,e)}}function lM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ut(n,e)}else{if(ft(n,i))return;Of.set(i),t.uniformMatrix2fv(this.addr,!1,Of),ut(n,i)}}function fM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ut(n,e)}else{if(ft(n,i))return;Nf.set(i),t.uniformMatrix3fv(this.addr,!1,Nf),ut(n,i)}}function uM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ut(n,e)}else{if(ft(n,i))return;Ff.set(i),t.uniformMatrix4fv(this.addr,!1,Ff),ut(n,i)}}function hM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2iv(this.addr,e),ut(n,e)}}function pM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ft(n,e))return;t.uniform3iv(this.addr,e),ut(n,e)}}function mM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4iv(this.addr,e),ut(n,e)}}function gM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _M(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ft(n,e))return;t.uniform2uiv(this.addr,e),ut(n,e)}}function vM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ft(n,e))return;t.uniform3uiv(this.addr,e),ut(n,e)}}function xM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ft(n,e))return;t.uniform4uiv(this.addr,e),ut(n,e)}}function MM(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||td,s)}function SM(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||id,s)}function EM(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||sd,s)}function yM(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||nd,s)}function TM(t){switch(t){case 5126:return rM;case 35664:return oM;case 35665:return aM;case 35666:return cM;case 35674:return lM;case 35675:return fM;case 35676:return uM;case 5124:case 35670:return hM;case 35667:case 35671:return dM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return _M;case 36295:return vM;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return yM}}function bM(t,e){t.uniform1fv(this.addr,e)}function AM(t,e){const n=ys(e,this.size,2);t.uniform2fv(this.addr,n)}function wM(t,e){const n=ys(e,this.size,3);t.uniform3fv(this.addr,n)}function RM(t,e){const n=ys(e,this.size,4);t.uniform4fv(this.addr,n)}function CM(t,e){const n=ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PM(t,e){const n=ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LM(t,e){const n=ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DM(t,e){t.uniform1iv(this.addr,e)}function UM(t,e){t.uniform2iv(this.addr,e)}function IM(t,e){t.uniform3iv(this.addr,e)}function FM(t,e){t.uniform4iv(this.addr,e)}function NM(t,e){t.uniform1uiv(this.addr,e)}function OM(t,e){t.uniform2uiv(this.addr,e)}function BM(t,e){t.uniform3uiv(this.addr,e)}function zM(t,e){t.uniform4uiv(this.addr,e)}function HM(t,e,n){const i=this.cache,s=e.length,r=mo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||td,r[o])}function VM(t,e,n){const i=this.cache,s=e.length,r=mo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||id,r[o])}function GM(t,e,n){const i=this.cache,s=e.length,r=mo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||sd,r[o])}function kM(t,e,n){const i=this.cache,s=e.length,r=mo(n,s);ft(i,r)||(t.uniform1iv(this.addr,r),ut(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||nd,r[o])}function WM(t){switch(t){case 5126:return bM;case 35664:return AM;case 35665:return wM;case 35666:return RM;case 35674:return CM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return IM;case 35669:case 35673:return FM;case 5125:return NM;case 36294:return OM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return kM}}class $M{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=TM(n.type)}}class XM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=WM(n.type)}}class qM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Bf(t,e){t.seq.push(e),t.map[e.id]=e}function YM(t,e,n){const i=t.name,s=i.length;for(va.lastIndex=0;;){const r=va.exec(i),o=va.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bf(n,l===void 0?new $M(a,t,e):new XM(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new qM(a),Bf(n,u)),n=u}}}class Xr{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);YM(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function zf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let jM=0;function KM(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ZM(t){switch(t){case An:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Hf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+KM(t.getShaderSource(e),o)}else return s}function JM(t,e){const n=ZM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function QM(t,e){let n;switch(e){case h_:n="Linear";break;case d_:n="Reinhard";break;case p_:n="OptimizedCineon";break;case m_:n="ACESFilmic";break;case g_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function e1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function t1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function n1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zs(t){return t!==""}function Vf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(t){return t.replace(i1,s1)}function s1(t,e){const n=ze[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return oc(n)}const r1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(t){return t.replace(r1,o1)}function o1(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wf(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function c1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function f1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case u_:e="ENVMAP_BLENDING_ADD";break}return e}function u1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function h1(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=a1(n),l=c1(n),f=l1(n),u=f1(n),h=u1(n),p=n.isWebGL2?"":e1(n),_=t1(r),g=s.createProgram();let m,d,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(zs).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(zs).join(`
`),d.length>0&&(d+=`
`)):(m=[Wf(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),d=[p,Wf(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qn?"#define TONE_MAPPING":"",n.toneMapping!==qn?ze.tonemapping_pars_fragment:"",n.toneMapping!==qn?QM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,JM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zs).join(`
`)),o=oc(o),o=Vf(o,n),o=Gf(o,n),a=oc(a),a=Vf(a,n),a=Gf(a,n),o=kf(o),a=kf(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=A+m+o,v=A+d+a,S=zf(s,s.VERTEX_SHADER,E),y=zf(s,s.FRAGMENT_SHADER,v);if(s.attachShader(g,S),s.attachShader(g,y),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),t.debug.checkShaderErrors){const M=s.getProgramInfoLog(g).trim(),T=s.getShaderInfoLog(S).trim(),B=s.getShaderInfoLog(y).trim();let $=!0,D=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,S,y);else{const O=Hf(s,S,"vertex"),H=Hf(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+O+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||B==="")&&(D=!1);D&&(this.diagnostics={runnable:$,programLog:M,vertexShader:{log:T,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(S),s.deleteShader(y);let R;this.getUniforms=function(){return R===void 0&&(R=new Xr(s,g)),R};let U;return this.getAttributes=function(){return U===void 0&&(U=n1(s,g)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=y,this}let d1=0;class p1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new m1(e),n.set(e,i)),i}}class m1{constructor(e){this.id=d1++,this.code=e,this.usedTimes=0}}function g1(t,e,n,i,s,r,o){const a=new $h,c=new p1,l=[],f=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===1?"uv1":M===2?"uv2":M===3?"uv3":"uv"}function m(M,T,B,$,D){const O=$.fog,H=D.geometry,j=M.isMeshStandardMaterial?$.environment:null,G=(M.isMeshStandardMaterial?n:e).get(M.envMap||j),k=G&&G.mapping===ho?G.image.height:null,fe=_[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Te=oe!==void 0?oe.length:0;let ue=0;H.morphAttributes.position!==void 0&&(ue=1),H.morphAttributes.normal!==void 0&&(ue=2),H.morphAttributes.color!==void 0&&(ue=3);let K,ce,_e,ve;if(fe){const Ke=Sn[fe];K=Ke.vertexShader,ce=Ke.fragmentShader}else K=M.vertexShader,ce=M.fragmentShader,c.update(M),_e=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);const I=t.getRenderTarget(),De=D.isInstancedMesh===!0,Pe=!!M.map,me=!!M.matcap,Ce=!!G,C=!!M.aoMap,P=!!M.lightMap,z=!!M.bumpMap,ie=!!M.normalMap,Q=!!M.displacementMap,se=!!M.emissiveMap,de=!!M.metalnessMap,re=!!M.roughnessMap,le=M.clearcoat>0,ae=M.iridescence>0,b=M.sheen>0,x=M.transmission>0,N=le&&!!M.clearcoatMap,Y=le&&!!M.clearcoatNormalMap,Z=le&&!!M.clearcoatRoughnessMap,he=ae&&!!M.iridescenceMap,L=ae&&!!M.iridescenceThicknessMap,J=b&&!!M.sheenColorMap,W=b&&!!M.sheenRoughnessMap,ge=!!M.specularMap,Me=!!M.specularColorMap,be=!!M.specularIntensityMap,Ee=x&&!!M.transmissionMap,Se=x&&!!M.thicknessMap,we=!!M.gradientMap,Ie=!!M.alphaMap,nt=M.alphaTest>0,F=!!M.extensions,ee=!!H.attributes.uv1,pe=!!H.attributes.uv2,ye=!!H.attributes.uv3;return{isWebGL2:f,shaderID:fe,shaderName:M.type,vertexShader:K,fragmentShader:ce,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:De,instancingColor:De&&D.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:I===null?t.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:An,map:Pe,matcap:me,envMap:Ce,envMapMode:Ce&&G.mapping,envMapCubeUVHeight:k,aoMap:C,lightMap:P,bumpMap:z,normalMap:ie,displacementMap:h&&Q,emissiveMap:se,normalMapObjectSpace:ie&&M.normalMapType===F_,normalMapTangentSpace:ie&&M.normalMapType===zh,metalnessMap:de,roughnessMap:re,clearcoat:le,clearcoatMap:N,clearcoatNormalMap:Y,clearcoatRoughnessMap:Z,iridescence:ae,iridescenceMap:he,iridescenceThicknessMap:L,sheen:b,sheenColorMap:J,sheenRoughnessMap:W,specularMap:ge,specularColorMap:Me,specularIntensityMap:be,transmission:x,transmissionMap:Ee,thicknessMap:Se,gradientMap:we,opaque:M.transparent===!1&&M.blending===hs,alphaMap:Ie,alphaTest:nt,combine:M.combine,mapUv:Pe&&g(M.map.channel),aoMapUv:C&&g(M.aoMap.channel),lightMapUv:P&&g(M.lightMap.channel),bumpMapUv:z&&g(M.bumpMap.channel),normalMapUv:ie&&g(M.normalMap.channel),displacementMapUv:Q&&g(M.displacementMap.channel),emissiveMapUv:se&&g(M.emissiveMap.channel),metalnessMapUv:de&&g(M.metalnessMap.channel),roughnessMapUv:re&&g(M.roughnessMap.channel),clearcoatMapUv:N&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Y&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:L&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:J&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:W&&g(M.sheenRoughnessMap.channel),specularMapUv:ge&&g(M.specularMap.channel),specularColorMapUv:Me&&g(M.specularColorMap.channel),specularIntensityMapUv:be&&g(M.specularIntensityMap.channel),transmissionMapUv:Ee&&g(M.transmissionMap.channel),thicknessMapUv:Se&&g(M.thicknessMap.channel),alphaMapUv:Ie&&g(M.alphaMap.channel),vertexTangents:ie&&!!H.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:pe,vertexUv3s:ye,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Pe||Ie),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:qn,useLegacyLights:t.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wn,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:F&&M.extensions.derivatives===!0,extensionFragDepth:F&&M.extensions.fragDepth===!0,extensionDrawBuffers:F&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(A(T,M),E(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function A(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function E(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function v(M){const T=_[M.type];let B;if(T){const $=Sn[T];B=r0.clone($.uniforms)}else B=M.uniforms;return B}function S(M,T){let B;for(let $=0,D=l.length;$<D;$++){const O=l[$];if(O.cacheKey===T){B=O,++B.usedTimes;break}}return B===void 0&&(B=new h1(t,T,M,r),l.push(B)),B}function y(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:R,programs:l,dispose:U}}function _1(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function v1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $f(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xf(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,h,p,_,g,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),e++,d}function a(u,h,p,_,g,m){const d=o(u,h,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):n.push(d)}function c(u,h,p,_,g,m){const d=o(u,h,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):n.unshift(d)}function l(u,h){n.length>1&&n.sort(u||v1),i.length>1&&i.sort(h||$f),s.length>1&&s.sort(h||$f)}function f(){for(let u=e,h=t.length;u<h;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:f,sort:l}}function x1(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Xf,t.set(i,[o])):s>=r.length?(o=new Xf,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function M1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new Qe};break;case"SpotLight":n={position:new q,direction:new q,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function S1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let E1=0;function y1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T1(t,e){const n=new M1,i=S1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)s.probe.push(new q);const r=new q,o=new lt,a=new lt;function c(f,u){let h=0,p=0,_=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let g=0,m=0,d=0,A=0,E=0,v=0,S=0,y=0,R=0,U=0;f.sort(y1);const M=u===!0?Math.PI:1;for(let B=0,$=f.length;B<$;B++){const D=f[B],O=D.color,H=D.intensity,j=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*H*M,p+=O.g*H*M,_+=O.b*H*M;else if(D.isLightProbe)for(let k=0;k<9;k++)s.probe[k].addScaledVector(D.sh.coefficients[k],H);else if(D.isDirectionalLight){const k=n.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const fe=D.shadow,oe=i.get(D);oe.shadowBias=fe.bias,oe.shadowNormalBias=fe.normalBias,oe.shadowRadius=fe.radius,oe.shadowMapSize=fe.mapSize,s.directionalShadow[g]=oe,s.directionalShadowMap[g]=G,s.directionalShadowMatrix[g]=D.shadow.matrix,v++}s.directional[g]=k,g++}else if(D.isSpotLight){const k=n.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(O).multiplyScalar(H*M),k.distance=j,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,s.spot[d]=k;const fe=D.shadow;if(D.map&&(s.spotLightMap[R]=D.map,R++,fe.updateMatrices(D),D.castShadow&&U++),s.spotLightMatrix[d]=fe.matrix,D.castShadow){const oe=i.get(D);oe.shadowBias=fe.bias,oe.shadowNormalBias=fe.normalBias,oe.shadowRadius=fe.radius,oe.shadowMapSize=fe.mapSize,s.spotShadow[d]=oe,s.spotShadowMap[d]=G,y++}d++}else if(D.isRectAreaLight){const k=n.get(D);k.color.copy(O).multiplyScalar(H),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),s.rectArea[A]=k,A++}else if(D.isPointLight){const k=n.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*M),k.distance=D.distance,k.decay=D.decay,D.castShadow){const fe=D.shadow,oe=i.get(D);oe.shadowBias=fe.bias,oe.shadowNormalBias=fe.normalBias,oe.shadowRadius=fe.radius,oe.shadowMapSize=fe.mapSize,oe.shadowCameraNear=fe.camera.near,oe.shadowCameraFar=fe.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=D.shadow.matrix,S++}s.point[m]=k,m++}else if(D.isHemisphereLight){const k=n.get(D);k.skyColor.copy(D.color).multiplyScalar(H*M),k.groundColor.copy(D.groundColor).multiplyScalar(H*M),s.hemi[E]=k,E++}}A>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==A||T.hemiLength!==E||T.numDirectionalShadows!==v||T.numPointShadows!==S||T.numSpotShadows!==y||T.numSpotMaps!==R)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=A,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=y+R-U,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=U,T.directionalLength=g,T.pointLength=m,T.spotLength=d,T.rectAreaLength=A,T.hemiLength=E,T.numDirectionalShadows=v,T.numPointShadows=S,T.numSpotShadows=y,T.numSpotMaps=R,s.version=E1++)}function l(f,u){let h=0,p=0,_=0,g=0,m=0;const d=u.matrixWorldInverse;for(let A=0,E=f.length;A<E;A++){const v=f[A];if(v.isDirectionalLight){const S=s.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),h++}else if(v.isSpotLight){const S=s.spot[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),_++}else if(v.isRectAreaLight){const S=s.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(v.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const S=s.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){const S=s.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function qf(t,e){const n=new T1(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){n.setup(i,u)}function l(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function b1(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let c;return a===void 0?(c=new qf(t,e),n.set(r,[c])):o>=a.length?(c=new qf(t,e),a.push(c)):c=a[o],c}function s(){n=new WeakMap}return{get:i,dispose:s}}class A1 extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w1 extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P1(t,e,n){let i=new Ic;const s=new He,r=new He,o=new pt,a=new A1({depthPacking:I_}),c=new w1,l={},f=n.maxTextureSize,u={[ai]:Bt,[Bt]:ai,[Wn]:Wn},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:R1,fragmentShader:C1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new jn;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $n(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let d=this.type;this.render=function(S,y,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const U=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),B=t.state;B.setBlending(oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=d!==zn&&this.type===zn,D=d===zn&&this.type!==zn;for(let O=0,H=S.length;O<H;O++){const j=S[O],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const k=G.getFrameExtents();if(s.multiply(k),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/k.x),s.x=r.x*k.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/k.y),s.y=r.y*k.y,G.mapSize.y=r.y)),G.map===null||$===!0||D===!0){const oe=this.type!==zn?{minFilter:Lt,magFilter:Lt}:{};G.map!==null&&G.map.dispose(),G.map=new Di(s.x,s.y,oe),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const fe=G.getViewportCount();for(let oe=0;oe<fe;oe++){const Te=G.getViewport(oe);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),B.viewport(o),G.updateMatrices(j,oe),i=G.getFrustum(),v(y,R,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===zn&&A(G,R),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(U,M,T)};function A(S,y){const R=e.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Di(s.x,s.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(y,null,R,h,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(y,null,R,p,g,null)}function E(S,y,R,U){let M=null;const T=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=R.isPointLight===!0?c:a,t.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const B=M.uuid,$=y.uuid;let D=l[B];D===void 0&&(D={},l[B]=D);let O=D[$];O===void 0&&(O=M.clone(),D[$]=O),M=O}if(M.visible=y.visible,M.wireframe=y.wireframe,U===zn?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:u[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=t.properties.get(M);B.light=R}return M}function v(S,y,R,U,M){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===zn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const $=e.update(S),D=S.material;if(Array.isArray(D)){const O=$.groups;for(let H=0,j=O.length;H<j;H++){const G=O[H],k=D[G.materialIndex];if(k&&k.visible){const fe=E(S,k,U,M);t.renderBufferDirect(R,null,$,fe,S,G)}}}else if(D.visible){const O=E(S,D,U,M);t.renderBufferDirect(R,null,$,O,S,null)}}const B=S.children;for(let $=0,D=B.length;$<D;$++)v(B[$],y,R,U,M)}}function L1(t,e,n){const i=n.isWebGL2;function s(){let F=!1;const ee=new pt;let pe=null;const ye=new pt(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!F&&(t.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){F=Ae},setClear:function(Ae,Ke,Ze,_t,Zn){Zn===!0&&(Ae*=_t,Ke*=_t,Ze*=_t),ee.set(Ae,Ke,Ze,_t),ye.equals(ee)===!1&&(t.clearColor(Ae,Ke,Ze,_t),ye.copy(ee))},reset:function(){F=!1,pe=null,ye.set(-1,0,0,0)}}}function r(){let F=!1,ee=null,pe=null,ye=null;return{setTest:function(Ae){Ae?I(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(Ae){ee!==Ae&&!F&&(t.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case i_:t.depthFunc(t.NEVER);break;case s_:t.depthFunc(t.ALWAYS);break;case r_:t.depthFunc(t.LESS);break;case Qa:t.depthFunc(t.LEQUAL);break;case o_:t.depthFunc(t.EQUAL);break;case a_:t.depthFunc(t.GEQUAL);break;case c_:t.depthFunc(t.GREATER);break;case l_:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Ae}},setLocked:function(Ae){F=Ae},setClear:function(Ae){ye!==Ae&&(t.clearDepth(Ae),ye=Ae)},reset:function(){F=!1,ee=null,pe=null,ye=null}}}function o(){let F=!1,ee=null,pe=null,ye=null,Ae=null,Ke=null,Ze=null,_t=null,Zn=null;return{setTest:function(it){F||(it?I(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(it){ee!==it&&!F&&(t.stencilMask(it),ee=it)},setFunc:function(it,Jt,pn){(pe!==it||ye!==Jt||Ae!==pn)&&(t.stencilFunc(it,Jt,pn),pe=it,ye=Jt,Ae=pn)},setOp:function(it,Jt,pn){(Ke!==it||Ze!==Jt||_t!==pn)&&(t.stencilOp(it,Jt,pn),Ke=it,Ze=Jt,_t=pn)},setLocked:function(it){F=it},setClear:function(it){Zn!==it&&(t.clearStencil(it),Zn=it)},reset:function(){F=!1,ee=null,pe=null,ye=null,Ae=null,Ke=null,Ze=null,_t=null,Zn=null}}}const a=new s,c=new r,l=new o,f=new WeakMap,u=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,d=!1,A=null,E=null,v=null,S=null,y=null,R=null,U=null,M=!1,T=null,B=null,$=null,D=null,O=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),j=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),j=G>=2);let fe=null,oe={};const Te=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),K=new pt().fromArray(Te),ce=new pt().fromArray(ue);function _e(F,ee,pe,ye){const Ae=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(F,Ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<pe;Ze++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(ee,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(ee+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return Ke}const ve={};ve[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),I(t.DEPTH_TEST),c.setFunc(Qa),Q(!1),se(Ll),I(t.CULL_FACE),z(oi);function I(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function De(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function Pe(F,ee){return p[F]!==ee?(t.bindFramebuffer(F,ee),p[F]=ee,i&&(F===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ee),F===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ee)),!0):!1}function me(F,ee){let pe=g,ye=!1;if(F)if(pe=_.get(ee),pe===void 0&&(pe=[],_.set(ee,pe)),F.isWebGLMultipleRenderTargets){const Ae=F.texture;if(pe.length!==Ae.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Ze=Ae.length;Ke<Ze;Ke++)pe[Ke]=t.COLOR_ATTACHMENT0+Ke;pe.length=Ae.length,ye=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,ye=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,ye=!0);ye&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ce(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const C={[os]:t.FUNC_ADD,[Xg]:t.FUNC_SUBTRACT,[qg]:t.FUNC_REVERSE_SUBTRACT};if(i)C[Fl]=t.MIN,C[Nl]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(C[Fl]=F.MIN_EXT,C[Nl]=F.MAX_EXT)}const P={[Yg]:t.ZERO,[jg]:t.ONE,[Kg]:t.SRC_COLOR,[Uh]:t.SRC_ALPHA,[n_]:t.SRC_ALPHA_SATURATE,[e_]:t.DST_COLOR,[Jg]:t.DST_ALPHA,[Zg]:t.ONE_MINUS_SRC_COLOR,[Ih]:t.ONE_MINUS_SRC_ALPHA,[t_]:t.ONE_MINUS_DST_COLOR,[Qg]:t.ONE_MINUS_DST_ALPHA};function z(F,ee,pe,ye,Ae,Ke,Ze,_t){if(F===oi){d===!0&&(De(t.BLEND),d=!1);return}if(d===!1&&(I(t.BLEND),d=!0),F!==$g){if(F!==A||_t!==M){if((E!==os||y!==os)&&(t.blendEquation(t.FUNC_ADD),E=os,y=os),_t)switch(F){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dl:t.blendFunc(t.ONE,t.ONE);break;case Ul:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Il:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ul:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Il:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,S=null,R=null,U=null,A=F,M=_t}return}Ae=Ae||ee,Ke=Ke||pe,Ze=Ze||ye,(ee!==E||Ae!==y)&&(t.blendEquationSeparate(C[ee],C[Ae]),E=ee,y=Ae),(pe!==v||ye!==S||Ke!==R||Ze!==U)&&(t.blendFuncSeparate(P[pe],P[ye],P[Ke],P[Ze]),v=pe,S=ye,R=Ke,U=Ze),A=F,M=!1}function ie(F,ee){F.side===Wn?De(t.CULL_FACE):I(t.CULL_FACE);let pe=F.side===Bt;ee&&(pe=!pe),Q(pe),F.blending===hs&&F.transparent===!1?z(oi):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);const ye=F.stencilWrite;l.setTest(ye),ye&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?I(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(F){T!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),T=F)}function se(F){F!==Gg?(I(t.CULL_FACE),F!==B&&(F===Ll?t.cullFace(t.BACK):F===kg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),B=F}function de(F){F!==$&&(j&&t.lineWidth(F),$=F)}function re(F,ee,pe){F?(I(t.POLYGON_OFFSET_FILL),(D!==ee||O!==pe)&&(t.polygonOffset(ee,pe),D=ee,O=pe)):De(t.POLYGON_OFFSET_FILL)}function le(F){F?I(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function ae(F){F===void 0&&(F=t.TEXTURE0+H-1),fe!==F&&(t.activeTexture(F),fe=F)}function b(F,ee,pe){pe===void 0&&(fe===null?pe=t.TEXTURE0+H-1:pe=fe);let ye=oe[pe];ye===void 0&&(ye={type:void 0,texture:void 0},oe[pe]=ye),(ye.type!==F||ye.texture!==ee)&&(fe!==pe&&(t.activeTexture(pe),fe=pe),t.bindTexture(F,ee||ve[F]),ye.type=F,ye.texture=ee)}function x(){const F=oe[fe];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){K.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function Se(F){ce.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ce.copy(F))}function we(F,ee){let pe=u.get(ee);pe===void 0&&(pe=new WeakMap,u.set(ee,pe));let ye=pe.get(F);ye===void 0&&(ye=t.getUniformBlockIndex(ee,F.name),pe.set(F,ye))}function Ie(F,ee){const ye=u.get(ee).get(F);f.get(ee)!==ye&&(t.uniformBlockBinding(ee,ye,F.__bindingPointIndex),f.set(ee,ye))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},fe=null,oe={},p={},_=new WeakMap,g=[],m=null,d=!1,A=null,E=null,v=null,S=null,y=null,R=null,U=null,M=!1,T=null,B=null,$=null,D=null,O=null,K.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:I,disable:De,bindFramebuffer:Pe,drawBuffers:me,useProgram:Ce,setBlending:z,setMaterial:ie,setFlipSided:Q,setCullFace:se,setLineWidth:de,setPolygonOffset:re,setScissorTest:le,activeTexture:ae,bindTexture:b,unbindTexture:x,compressedTexImage2D:N,compressedTexImage3D:Y,texImage2D:Me,texImage3D:be,updateUBOMapping:we,uniformBlockBinding:Ie,texStorage2D:W,texStorage3D:ge,texSubImage2D:Z,texSubImage3D:he,compressedTexSubImage2D:L,compressedTexSubImage3D:J,scissor:Ee,viewport:Se,reset:nt}}function D1(t,e,n,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,f=s.maxTextureSize,u=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(b,x){return d?new OffscreenCanvas(b,x):eo("canvas")}function E(b,x,N,Y){let Z=1;if((b.width>Y||b.height>Y)&&(Z=Y/Math.max(b.width,b.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const he=x?B_:Math.floor,L=he(Z*b.width),J=he(Z*b.height);g===void 0&&(g=A(L,J));const W=N?A(L,J):g;return W.width=L,W.height=J,W.getContext("2d").drawImage(b,0,0,L,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+L+"x"+J+")."),W}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function v(b){return ff(b.width)&&ff(b.height)}function S(b){return a?!1:b.wrapS!==un||b.wrapT!==un||b.minFilter!==Lt&&b.minFilter!==en}function y(b,x){return b.generateMipmaps&&x&&b.minFilter!==Lt&&b.minFilter!==en}function R(b){t.generateMipmap(b)}function U(b,x,N,Y,Z=!1){if(a===!1)return x;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=x;return x===t.RED&&(N===t.FLOAT&&(he=t.R32F),N===t.HALF_FLOAT&&(he=t.R16F),N===t.UNSIGNED_BYTE&&(he=t.R8)),x===t.RG&&(N===t.FLOAT&&(he=t.RG32F),N===t.HALF_FLOAT&&(he=t.RG16F),N===t.UNSIGNED_BYTE&&(he=t.RG8)),x===t.RGBA&&(N===t.FLOAT&&(he=t.RGBA32F),N===t.HALF_FLOAT&&(he=t.RGBA16F),N===t.UNSIGNED_BYTE&&(he=Y===Oe&&Z===!1?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)),(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function M(b,x,N){return y(b,N)===!0||b.isFramebufferTexture&&b.minFilter!==Lt&&b.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){return b===Lt||b===Ol||b===Wo?t.NEAREST:t.LINEAR}function B(b){const x=b.target;x.removeEventListener("dispose",B),D(x),x.isVideoTexture&&_.delete(x)}function $(b){const x=b.target;x.removeEventListener("dispose",$),H(x)}function D(b){const x=i.get(b);if(x.__webglInit===void 0)return;const N=b.source,Y=m.get(N);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(b),Object.keys(Y).length===0&&m.delete(N)}i.remove(b)}function O(b){const x=i.get(b);t.deleteTexture(x.__webglTexture);const N=b.source,Y=m.get(N);delete Y[x.__cacheKey],o.memory.textures--}function H(b){const x=b.texture,N=i.get(b),Y=i.get(x);if(Y.__webglTexture!==void 0&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)t.deleteFramebuffer(N.__webglFramebuffer[Z]),N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer[Z]);else{if(t.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&t.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&t.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,he=x.length;Z<he;Z++){const L=i.get(x[Z]);L.__webglTexture&&(t.deleteTexture(L.__webglTexture),o.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(b)}let j=0;function G(){j=0}function k(){const b=j;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),j+=1,b}function fe(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function oe(b,x){const N=i.get(b);if(b.isVideoTexture&&le(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(N,b,x);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function Te(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){De(N,b,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function ue(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){De(N,b,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function K(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){Pe(N,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const ce={[nc]:t.REPEAT,[un]:t.CLAMP_TO_EDGE,[ic]:t.MIRRORED_REPEAT},_e={[Lt]:t.NEAREST,[Ol]:t.NEAREST_MIPMAP_NEAREST,[Wo]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[__]:t.LINEAR_MIPMAP_NEAREST,[tr]:t.LINEAR_MIPMAP_LINEAR};function ve(b,x,N){if(N?(t.texParameteri(b,t.TEXTURE_WRAP_S,ce[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ce[x.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ce[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,_e[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,_e[x.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==un||x.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,T(x.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Lt&&x.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Lt||x.minFilter!==Wo&&x.minFilter!==tr||x.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function I(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",B));const Y=x.source;let Z=m.get(Y);Z===void 0&&(Z={},m.set(Y,Z));const he=fe(x);if(he!==b.__cacheKey){Z[he]===void 0&&(Z[he]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Z[he].usedTimes++;const L=Z[b.__cacheKey];L!==void 0&&(Z[b.__cacheKey].usedTimes--,L.usedTimes===0&&O(x)),b.__cacheKey=he,b.__webglTexture=Z[he].texture}return N}function De(b,x,N){let Y=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=t.TEXTURE_3D);const Z=I(b,x),he=x.source;n.bindTexture(Y,b.__webglTexture,t.TEXTURE0+N);const L=i.get(he);if(he.version!==L.__version||Z===!0){n.activeTexture(t.TEXTURE0+N),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const J=S(x)&&v(x.image)===!1;let W=E(x.image,J,!1,f);W=ae(x,W);const ge=v(W)||a,Me=r.convert(x.format,x.colorSpace);let be=r.convert(x.type),Ee=U(x.internalFormat,Me,be,x.colorSpace);ve(Y,x,ge);let Se;const we=x.mipmaps,Ie=a&&x.isVideoTexture!==!0,nt=L.__version===void 0||Z===!0,F=M(x,W,ge);if(x.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?x.type===bi?Ee=t.DEPTH_COMPONENT32F:x.type===Ti?Ee=t.DEPTH_COMPONENT24:x.type===ds?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:x.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ri&&Ee===t.DEPTH_COMPONENT&&x.type!==Oh&&x.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ti,be=r.convert(x.type)),x.format===xs&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,x.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ds,be=r.convert(x.type))),nt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Ee,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,Ee,W.width,W.height,0,Me,be,null));else if(x.isDataTexture)if(we.length>0&&ge){Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,F,Ee,we[0].width,we[0].height);for(let ee=0,pe=we.length;ee<pe;ee++)Se=we[ee],Ie?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Me,be,Se.data):n.texImage2D(t.TEXTURE_2D,ee,Ee,Se.width,Se.height,0,Me,be,Se.data);x.generateMipmaps=!1}else Ie?(nt&&n.texStorage2D(t.TEXTURE_2D,F,Ee,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,W.width,W.height,Me,be,W.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,W.width,W.height,0,Me,be,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,Ee,we[0].width,we[0].height,W.depth);for(let ee=0,pe=we.length;ee<pe;ee++)Se=we[ee],x.format!==hn?Me!==null?Ie?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,W.depth,Me,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Ee,Se.width,Se.height,W.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,W.depth,Me,be,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Ee,Se.width,Se.height,W.depth,0,Me,be,Se.data)}else{Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,F,Ee,we[0].width,we[0].height);for(let ee=0,pe=we.length;ee<pe;ee++)Se=we[ee],x.format!==hn?Me!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Me,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Me,be,Se.data):n.texImage2D(t.TEXTURE_2D,ee,Ee,Se.width,Se.height,0,Me,be,Se.data)}else if(x.isDataArrayTexture)Ie?(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,Ee,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Me,be,W.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,W.width,W.height,W.depth,0,Me,be,W.data);else if(x.isData3DTexture)Ie?(nt&&n.texStorage3D(t.TEXTURE_3D,F,Ee,W.width,W.height,W.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Me,be,W.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,W.width,W.height,W.depth,0,Me,be,W.data);else if(x.isFramebufferTexture){if(nt)if(Ie)n.texStorage2D(t.TEXTURE_2D,F,Ee,W.width,W.height);else{let ee=W.width,pe=W.height;for(let ye=0;ye<F;ye++)n.texImage2D(t.TEXTURE_2D,ye,Ee,ee,pe,0,Me,be,null),ee>>=1,pe>>=1}}else if(we.length>0&&ge){Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,F,Ee,we[0].width,we[0].height);for(let ee=0,pe=we.length;ee<pe;ee++)Se=we[ee],Ie?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Me,be,Se):n.texImage2D(t.TEXTURE_2D,ee,Ee,Me,be,Se);x.generateMipmaps=!1}else Ie?(nt&&n.texStorage2D(t.TEXTURE_2D,F,Ee,W.width,W.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,be,W)):n.texImage2D(t.TEXTURE_2D,0,Ee,Me,be,W);y(x,ge)&&R(Y),L.__version=he.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Pe(b,x,N){if(x.image.length!==6)return;const Y=I(b,x),Z=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+N);const he=i.get(Z);if(Z.version!==he.__version||Y===!0){n.activeTexture(t.TEXTURE0+N),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const L=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,W=[];for(let ee=0;ee<6;ee++)!L&&!J?W[ee]=E(x.image[ee],!1,!0,l):W[ee]=J?x.image[ee].image:x.image[ee],W[ee]=ae(x,W[ee]);const ge=W[0],Me=v(ge)||a,be=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),Se=U(x.internalFormat,be,Ee,x.colorSpace),we=a&&x.isVideoTexture!==!0,Ie=he.__version===void 0||Y===!0;let nt=M(x,ge,Me);ve(t.TEXTURE_CUBE_MAP,x,Me);let F;if(L){we&&Ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,Se,ge.width,ge.height);for(let ee=0;ee<6;ee++){F=W[ee].mipmaps;for(let pe=0;pe<F.length;pe++){const ye=F[pe];x.format!==hn?be!==null?we?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ye.width,ye.height,be,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ye.width,ye.height,be,Ee,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Se,ye.width,ye.height,0,be,Ee,ye.data)}}}else{F=x.mipmaps,we&&Ie&&(F.length>0&&nt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,Se,W[0].width,W[0].height));for(let ee=0;ee<6;ee++)if(J){we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,W[ee].width,W[ee].height,be,Ee,W[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Se,W[ee].width,W[ee].height,0,be,Ee,W[ee].data);for(let pe=0;pe<F.length;pe++){const Ae=F[pe].image[ee].image;we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ae.width,Ae.height,be,Ee,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Se,Ae.width,Ae.height,0,be,Ee,Ae.data)}}else{we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be,Ee,W[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Se,be,Ee,W[ee]);for(let pe=0;pe<F.length;pe++){const ye=F[pe];we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,be,Ee,ye.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Se,be,Ee,ye.image[ee])}}}y(x,Me)&&R(t.TEXTURE_CUBE_MAP),he.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function me(b,x,N,Y,Z){const he=r.convert(N.format,N.colorSpace),L=r.convert(N.type),J=U(N.internalFormat,he,L,N.colorSpace);i.get(x).__hasExternalTextures||(Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,J,x.width,x.height,x.depth,0,he,L,null):n.texImage2D(Z,0,J,x.width,x.height,0,he,L,null)),n.bindFramebuffer(t.FRAMEBUFFER,b),re(x)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Z,i.get(N).__webglTexture,0,de(x)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Z,i.get(N).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(b,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let Y=t.DEPTH_COMPONENT16;if(N||re(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===bi?Y=t.DEPTH_COMPONENT32F:Z.type===Ti&&(Y=t.DEPTH_COMPONENT24));const he=de(x);re(x)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,Y,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,he,Y,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const Y=de(x);N&&re(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const Y=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<Y.length;Z++){const he=Y[Z],L=r.convert(he.format,he.colorSpace),J=r.convert(he.type),W=U(he.internalFormat,L,J,he.colorSpace),ge=de(x);N&&re(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,W,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,W,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,W,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function C(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe(x.depthTexture,0);const Y=i.get(x.depthTexture).__webglTexture,Z=de(x);if(x.depthTexture.format===Ri)re(x)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(x.depthTexture.format===xs)re(x)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function P(b){const x=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");C(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ce(x.__webglDepthbuffer[Y],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),Ce(x.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function z(b,x,N){const Y=i.get(b);x!==void 0&&me(Y.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),N!==void 0&&P(b)}function ie(b){const x=b.texture,N=i.get(b),Y=i.get(x);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=x.version,o.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,he=b.isWebGLMultipleRenderTargets===!0,L=v(b)||a;if(Z){N.__webglFramebuffer=[];for(let J=0;J<6;J++)N.__webglFramebuffer[J]=t.createFramebuffer()}else{if(N.__webglFramebuffer=t.createFramebuffer(),he)if(s.drawBuffers){const J=b.texture;for(let W=0,ge=J.length;W<ge;W++){const Me=i.get(J[W]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&re(b)===!1){const J=he?x:[x];N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let W=0;W<J.length;W++){const ge=J[W];N.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[W]);const Me=r.convert(ge.format,ge.colorSpace),be=r.convert(ge.type),Ee=U(ge.internalFormat,Me,be,ge.colorSpace,b.isXRRenderTarget===!0),Se=de(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,Ee,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,N.__webglColorRenderbuffer[W])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(N.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ve(t.TEXTURE_CUBE_MAP,x,L);for(let J=0;J<6;J++)me(N.__webglFramebuffer[J],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J);y(x,L)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){const J=b.texture;for(let W=0,ge=J.length;W<ge;W++){const Me=J[W],be=i.get(Me);n.bindTexture(t.TEXTURE_2D,be.__webglTexture),ve(t.TEXTURE_2D,Me,L),me(N.__webglFramebuffer,b,Me,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D),y(Me,L)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let J=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?J=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(J,Y.__webglTexture),ve(J,x,L),me(N.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,J),y(x,L)&&R(J),n.unbindTexture()}b.depthBuffer&&P(b)}function Q(b){const x=v(b)||a,N=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Y=0,Z=N.length;Y<Z;Y++){const he=N[Y];if(y(he,x)){const L=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,J=i.get(he).__webglTexture;n.bindTexture(L,J),R(L),n.unbindTexture()}}}function se(b){if(a&&b.samples>0&&re(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],N=b.width,Y=b.height;let Z=t.COLOR_BUFFER_BIT;const he=[],L=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=i.get(b),W=b.isWebGLMultipleRenderTargets===!0;if(W)for(let ge=0;ge<x.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){he.push(t.COLOR_ATTACHMENT0+ge),b.depthBuffer&&he.push(L);const Me=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(Me===!1&&(b.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),W&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,J.__webglColorRenderbuffer[ge]),Me===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[L]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[L])),W){const be=i.get(x[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let ge=0;ge<x.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,J.__webglColorRenderbuffer[ge]);const Me=i.get(x[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function de(b){return Math.min(u,b.samples)}function re(b){const x=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(b){const x=o.render.frame;_.get(b)!==x&&(_.set(b,x),b.update())}function ae(b,x){const N=b.colorSpace,Y=b.format,Z=b.type;return b.isCompressedTexture===!0||b.format===sc||N!==An&&N!==Pi&&(N===Oe?a===!1?e.has("EXT_sRGB")===!0&&Y===hn?(b.format=sc,b.minFilter=en,b.generateMipmaps=!1):x=Gh.sRGBToLinear(x):(Y!==hn||Z!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=oe,this.setTexture2DArray=Te,this.setTexture3D=ue,this.setTextureCube=K,this.rebindTextures=z,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=me,this.useMultisampledRTT=re}function U1(t,e,n){const i=n.isWebGL2;function s(r,o=Pi){let a;if(r===Li)return t.UNSIGNED_BYTE;if(r===S_)return t.UNSIGNED_SHORT_4_4_4_4;if(r===E_)return t.UNSIGNED_SHORT_5_5_5_1;if(r===v_)return t.BYTE;if(r===x_)return t.SHORT;if(r===Oh)return t.UNSIGNED_SHORT;if(r===M_)return t.INT;if(r===Ti)return t.UNSIGNED_INT;if(r===bi)return t.FLOAT;if(r===nr)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===y_)return t.ALPHA;if(r===hn)return t.RGBA;if(r===T_)return t.LUMINANCE;if(r===b_)return t.LUMINANCE_ALPHA;if(r===Ri)return t.DEPTH_COMPONENT;if(r===xs)return t.DEPTH_STENCIL;if(r===sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===A_)return t.RED;if(r===w_)return t.RED_INTEGER;if(r===R_)return t.RG;if(r===C_)return t.RG_INTEGER;if(r===P_)return t.RGBA_INTEGER;if(r===$o||r===Xo||r===qo||r===Yo)if(o===Oe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===$o)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===$o)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bl||r===zl||r===Hl||r===Vl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===L_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gl||r===kl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Gl)return o===Oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===kl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wl||r===$l||r===Xl||r===ql||r===Yl||r===jl||r===Kl||r===Zl||r===Jl||r===Ql||r===ef||r===tf||r===nf||r===sf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$l)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ql)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jl)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ql)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ef)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tf)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nf)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sf)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===jo)return o===Oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===D_||r===rf||r===of||r===af)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===rf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===of)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===af)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ds?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class I1 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Br extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F1={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class N1 extends Kt{constructor(e,n,i,s,r,o,a,c,l,f){if(f=f!==void 0?f:Ri,f!==Ri&&f!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ri&&(i=Ti),i===void 0&&f===xs&&(i=ds),super(null,s,r,o,a,c,f,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1}}class O1 extends Ni{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,h=null,p=null,_=null;const g=n.getContextAttributes();let m=null,d=null;const A=[],E=[],v=new Set,S=new Map,y=new tn;y.layers.enable(1),y.viewport=new pt;const R=new tn;R.layers.enable(2),R.viewport=new pt;const U=[y,R],M=new I1;M.layers.enable(1),M.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=A[K];return ce===void 0&&(ce=new xa,A[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=A[K];return ce===void 0&&(ce=new xa,A[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=A[K];return ce===void 0&&(ce=new xa,A[K]=ce),ce.getHandSpace()};function $(K){const ce=E.indexOf(K.inputSource);if(ce===-1)return;const _e=A[ce];_e!==void 0&&(_e.update(K.inputSource,K.frame,l||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function D(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",O);for(let K=0;K<A.length;K++){const ce=E[K];ce!==null&&(E[K]=null,A[K].disconnect(ce))}T=null,B=null,e.setRenderTarget(m),p=null,h=null,u=null,s=null,d=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",D),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,ce),s.updateRenderState({baseLayer:p}),d=new Di(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,_e=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?xs:Ri,_e=g.stencil?ds:Ti);const I={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,n),h=u.createProjectionLayer(I),s.updateRenderState({layers:[h]}),d=new Di(h.textureWidth,h.textureHeight,{format:hn,type:Li,depthTexture:new N1(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(d);De.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(K){for(let ce=0;ce<K.removed.length;ce++){const _e=K.removed[ce],ve=E.indexOf(_e);ve>=0&&(E[ve]=null,A[ve].disconnect(_e))}for(let ce=0;ce<K.added.length;ce++){const _e=K.added[ce];let ve=E.indexOf(_e);if(ve===-1){for(let De=0;De<A.length;De++)if(De>=E.length){E.push(_e),ve=De;break}else if(E[De]===null){E[De]=_e,ve=De;break}if(ve===-1)break}const I=A[ve];I&&I.connect(_e)}}const H=new q,j=new q;function G(K,ce,_e){H.setFromMatrixPosition(ce.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const ve=H.distanceTo(j),I=ce.projectionMatrix.elements,De=_e.projectionMatrix.elements,Pe=I[14]/(I[10]-1),me=I[14]/(I[10]+1),Ce=(I[9]+1)/I[5],C=(I[9]-1)/I[5],P=(I[8]-1)/I[0],z=(De[8]+1)/De[0],ie=Pe*P,Q=Pe*z,se=ve/(-P+z),de=se*-P;ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(de),K.translateZ(se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const re=Pe+se,le=me+se,ae=ie-de,b=Q+(ve-de),x=Ce*me/le*re,N=C*me/le*re;K.projectionMatrix.makePerspective(ae,b,x,N,re,le),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function k(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;M.near=R.near=y.near=K.near,M.far=R.far=y.far=K.far,(T!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,B=M.far);const ce=K.parent,_e=M.cameras;k(M,ce);for(let ve=0;ve<_e.length;ve++)k(_e[ve],ce);_e.length===2?G(M,y,R):M.projectionMatrix.copy(y.projectionMatrix),fe(K,M,ce)};function fe(K,ce,_e){_e===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const ve=K.children;for(let I=0,De=ve.length;I<De;I++)ve[I].updateMatrixWorld(!0);K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=rc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.getPlanes=function(){return v};let oe=null;function Te(K,ce){if(f=ce.getViewerPose(l||o),_=ce,f!==null){const _e=f.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ve=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let I=0;I<_e.length;I++){const De=_e[I];let Pe=null;if(p!==null)Pe=p.getViewport(De);else{const Ce=u.getViewSubImage(h,De);Pe=Ce.viewport,I===0&&(e.setRenderTargetTextures(d,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(d))}let me=U[I];me===void 0&&(me=new tn,me.layers.enable(I),me.viewport=new pt,U[I]=me),me.matrix.fromArray(De.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(De.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),I===0&&(M.matrix.copy(me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(me)}}for(let _e=0;_e<A.length;_e++){const ve=E[_e],I=A[_e];ve!==null&&I!==void 0&&I.update(ve,ce,l||o)}if(oe&&oe(K,ce),ce.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ce.detectedPlanes});let _e=null;for(const ve of v)ce.detectedPlanes.has(ve)||(_e===null&&(_e=[]),_e.push(ve));if(_e!==null)for(const ve of _e)v.delete(ve),S.delete(ve),i.dispatchEvent({type:"planeremoved",data:ve});for(const ve of ce.detectedPlanes)if(!v.has(ve))v.add(ve),S.set(ve,ce.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ve});else{const I=S.get(ve);ve.lastChangedTime>I&&(S.set(ve,ve.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ve}))}}_=null}const ue=new Qh;ue.setAnimationLoop(Te),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}function B1(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Kh(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),f(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,A,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const E=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*E,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,A,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=E*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function z1(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,E){const v=E.program;i.uniformBlockBinding(A,v)}function l(A,E){let v=s[A.id];v===void 0&&(_(A),v=f(A),s[A.id]=v,A.addEventListener("dispose",m));const S=E.program;i.updateUBOMapping(A,S);const y=e.render.frame;r[A.id]!==y&&(h(A),r[A.id]=y)}function f(A){const E=u();A.__bindingPointIndex=E;const v=t.createBuffer(),S=A.__size,y=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,S,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,v),v}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const E=s[A.id],v=A.uniforms,S=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let y=0,R=v.length;y<R;y++){const U=v[y];if(p(U,y,S)===!0){const M=U.__offset,T=Array.isArray(U.value)?U.value:[U.value];let B=0;for(let $=0;$<T.length;$++){const D=T[$],O=g(D);typeof D=="number"?(U.__data[0]=D,t.bufferSubData(t.UNIFORM_BUFFER,M+B,U.__data)):D.isMatrix3?(U.__data[0]=D.elements[0],U.__data[1]=D.elements[1],U.__data[2]=D.elements[2],U.__data[3]=D.elements[0],U.__data[4]=D.elements[3],U.__data[5]=D.elements[4],U.__data[6]=D.elements[5],U.__data[7]=D.elements[0],U.__data[8]=D.elements[6],U.__data[9]=D.elements[7],U.__data[10]=D.elements[8],U.__data[11]=D.elements[0]):(D.toArray(U.__data,B),B+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,U.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,E,v){const S=A.value;if(v[E]===void 0){if(typeof S=="number")v[E]=S;else{const y=Array.isArray(S)?S:[S],R=[];for(let U=0;U<y.length;U++)R.push(y[U].clone());v[E]=R}return!0}else if(typeof S=="number"){if(v[E]!==S)return v[E]=S,!0}else{const y=Array.isArray(v[E])?v[E]:[v[E]],R=Array.isArray(S)?S:[S];for(let U=0;U<y.length;U++){const M=y[U];if(M.equals(R[U])===!1)return M.copy(R[U]),!0}}return!1}function _(A){const E=A.uniforms;let v=0;const S=16;let y=0;for(let R=0,U=E.length;R<U;R++){const M=E[R],T={boundary:0,storage:0},B=Array.isArray(M.value)?M.value:[M.value];for(let $=0,D=B.length;$<D;$++){const O=B[$],H=g(O);T.boundary+=H.boundary,T.storage+=H.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,R>0){y=v%S;const $=S-y;y!==0&&$-T.boundary<0&&(v+=S-y,M.__offset=v)}v+=T.storage}return y=v%S,y>0&&(v+=S-y),A.__size=v,A.__cache={},this}function g(A){const E={boundary:0,storage:0};return typeof A=="number"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const A in s)t.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function H1(){const t=eo("canvas");return t.style.display="block",t}class rd{constructor(e={}){const{canvas:n=H1(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Oe,this.useLegacyLights=!0,this.toneMapping=qn,this.toneMappingExposure=1;const d=this;let A=!1,E=0,v=0,S=null,y=-1,R=null;const U=new pt,M=new pt;let T=null,B=n.width,$=n.height,D=1,O=null,H=null;const j=new pt(0,0,B,$),G=new pt(0,0,B,$);let k=!1;const fe=new Ic;let oe=!1,Te=!1,ue=null;const K=new lt,ce=new q,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return S===null?D:1}let I=i;function De(w,X){for(let te=0;te<w.length;te++){const V=w[te],ne=n.getContext(V,X);if(ne!==null)return ne}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dc}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),I===null){const X=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&X.shift(),I=De(X,w),I===null)throw De(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Pe,me,Ce,C,P,z,ie,Q,se,de,re,le,ae,b,x,N,Y,Z,he,L,J,W,ge,Me;function be(){Pe=new Zx(I),me=new $x(I,Pe,e),Pe.init(me),W=new U1(I,Pe,me),Ce=new L1(I,Pe,me),C=new eM(I),P=new _1,z=new D1(I,Pe,Ce,P,me,W,C),ie=new qx(d),Q=new Kx(d),se=new h0(I,me),ge=new kx(I,Pe,se,me),de=new Jx(I,se,C,ge),re=new sM(I,de,se,C),he=new iM(I,me,z),N=new Xx(P),le=new g1(d,ie,Q,Pe,me,ge,N),ae=new B1(d,P),b=new x1,x=new b1(Pe,me),Z=new Gx(d,ie,Q,Ce,re,h,c),Y=new P1(d,re,me),Me=new z1(I,C,me,Ce),L=new Wx(I,Pe,C,me),J=new Qx(I,Pe,C,me),C.programs=le.programs,d.capabilities=me,d.extensions=Pe,d.properties=P,d.renderLists=b,d.shadowMap=Y,d.state=Ce,d.info=C}be();const Ee=new O1(d,I);this.xr=Ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(B,$,!1))},this.getSize=function(w){return w.set(B,$)},this.setSize=function(w,X,te=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,$=X,n.width=Math.floor(w*D),n.height=Math.floor(X*D),te===!0&&(n.style.width=w+"px",n.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(B*D,$*D).floor()},this.setDrawingBufferSize=function(w,X,te){B=w,$=X,D=te,n.width=Math.floor(w*te),n.height=Math.floor(X*te),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,X,te,V){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,X,te,V),Ce.viewport(U.copy(j).multiplyScalar(D).floor())},this.getScissor=function(w){return w.copy(G)},this.setScissor=function(w,X,te,V){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,X,te,V),Ce.scissor(M.copy(G).multiplyScalar(D).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(w){Ce.setScissorTest(k=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(w=!0,X=!0,te=!0){let V=0;w&&(V|=I.COLOR_BUFFER_BIT),X&&(V|=I.DEPTH_BUFFER_BIT),te&&(V|=I.STENCIL_BUFFER_BIT),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),b.dispose(),x.dispose(),P.dispose(),ie.dispose(),Q.dispose(),re.dispose(),ge.dispose(),Me.dispose(),le.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ae),Ee.removeEventListener("sessionend",Ke),ue&&(ue.dispose(),ue=null),Ze.stop()};function Se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=C.autoReset,X=Y.enabled,te=Y.autoUpdate,V=Y.needsUpdate,ne=Y.type;be(),C.autoReset=w,Y.enabled=X,Y.autoUpdate=te,Y.needsUpdate=V,Y.type=ne}function Ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nt(w){const X=w.target;X.removeEventListener("dispose",nt),F(X)}function F(w){ee(w),P.remove(w)}function ee(w){const X=P.get(w).programs;X!==void 0&&(X.forEach(function(te){le.releaseProgram(te)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,te,V,ne,Re){X===null&&(X=_e);const Le=ne.isMesh&&ne.matrixWorld.determinant()<0,Ue=op(w,X,te,V,ne);Ce.setMaterial(V,Le);let Be=te.index,Ve=1;V.wireframe===!0&&(Be=de.getWireframeAttribute(te),Ve=2);const Ge=te.drawRange,ke=te.attributes.position;let Ye=Ge.start*Ve,Tt=(Ge.start+Ge.count)*Ve;Re!==null&&(Ye=Math.max(Ye,Re.start*Ve),Tt=Math.min(Tt,(Re.start+Re.count)*Ve)),Be!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,Be.count)):ke!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,ke.count));const sn=Tt-Ye;if(sn<0||sn===1/0)return;ge.setup(ne,V,Ue,te,Be);let fi,st=L;if(Be!==null&&(fi=se.get(Be),st=J,st.setIndex(fi)),ne.isMesh)V.wireframe===!0?(Ce.setLineWidth(V.wireframeLinewidth*ve()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(ne.isLine){let $e=V.linewidth;$e===void 0&&($e=1),Ce.setLineWidth($e*ve()),ne.isLineSegments?st.setMode(I.LINES):ne.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else ne.isPoints?st.setMode(I.POINTS):ne.isSprite&&st.setMode(I.TRIANGLES);if(ne.isInstancedMesh)st.renderInstances(Ye,sn,ne.count);else if(te.isInstancedBufferGeometry){const $e=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Co=Math.min(te.instanceCount,$e);st.renderInstances(Ye,sn,Co)}else st.render(Ye,sn)},this.compile=function(w,X){function te(V,ne,Re){V.transparent===!0&&V.side===Wn&&V.forceSinglePass===!1?(V.side=Bt,V.needsUpdate=!0,dr(V,ne,Re),V.side=ai,V.needsUpdate=!0,dr(V,ne,Re),V.side=Wn):dr(V,ne,Re)}_=x.get(w),_.init(),m.push(_),w.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights(d.useLegacyLights),w.traverse(function(V){const ne=V.material;if(ne)if(Array.isArray(ne))for(let Re=0;Re<ne.length;Re++){const Le=ne[Re];te(Le,w,V)}else te(ne,w,V)}),m.pop(),_=null};let pe=null;function ye(w){pe&&pe(w)}function Ae(){Ze.stop()}function Ke(){Ze.start()}const Ze=new Qh;Ze.setAnimationLoop(ye),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(w){pe=w,Ee.setAnimationLoop(w),w===null?Ze.stop():Ze.start()},Ee.addEventListener("sessionstart",Ae),Ee.addEventListener("sessionend",Ke),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(X),X=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,X,S),_=x.get(w,m.length),_.init(),m.push(_),K.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),fe.setFromProjectionMatrix(K),Te=this.localClippingEnabled,oe=N.init(this.clippingPlanes,Te),p=b.get(w,g.length),p.init(),g.push(p),_t(w,X,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(O,H),oe===!0&&N.beginShadows();const te=_.state.shadowsArray;if(Y.render(te,w,X),oe===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(p,w),_.setupLights(d.useLegacyLights),X.isArrayCamera){const V=X.cameras;for(let ne=0,Re=V.length;ne<Re;ne++){const Le=V[ne];Zn(p,w,Le,Le.viewport)}}else Zn(p,w,X);S!==null&&(z.updateMultisampleRenderTarget(S),z.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(d,w,X),ge.resetDefaultState(),y=-1,R=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function _t(w,X,te,V){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){V&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const Le=re.update(w),Ue=w.material;Ue.visible&&p.push(w,Le,Ue,te,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==C.render.frame&&(w.skeleton.update(),w.skeleton.frame=C.render.frame);const Le=re.update(w),Ue=w.material;if(V&&(Le.boundingSphere===null&&Le.computeBoundingSphere(),ce.copy(Le.boundingSphere.center).applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(Ue)){const Be=Le.groups;for(let Ve=0,Ge=Be.length;Ve<Ge;Ve++){const ke=Be[Ve],Ye=Ue[ke.materialIndex];Ye&&Ye.visible&&p.push(w,Le,Ye,te,ce.z,ke)}}else Ue.visible&&p.push(w,Le,Ue,te,ce.z,null)}}const Re=w.children;for(let Le=0,Ue=Re.length;Le<Ue;Le++)_t(Re[Le],X,te,V)}function Zn(w,X,te,V){const ne=w.opaque,Re=w.transmissive,Le=w.transparent;_.setupLightsView(te),oe===!0&&N.setGlobalState(d.clippingPlanes,te),Re.length>0&&it(ne,Re,X,te),V&&Ce.viewport(U.copy(V)),ne.length>0&&Jt(ne,X,te),Re.length>0&&Jt(Re,X,te),Le.length>0&&Jt(Le,X,te),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function it(w,X,te,V){if(ue===null){const Ue=me.isWebGL2;ue=new Di(1024,1024,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?nr:Li,minFilter:tr,samples:Ue&&a===!0?4:0})}const ne=d.getRenderTarget();d.setRenderTarget(ue),d.clear();const Re=d.toneMapping;d.toneMapping=qn,Jt(w,te,V),z.updateMultisampleRenderTarget(ue),z.updateRenderTargetMipmap(ue);let Le=!1;for(let Ue=0,Be=X.length;Ue<Be;Ue++){const Ve=X[Ue],Ge=Ve.object,ke=Ve.geometry,Ye=Ve.material,Tt=Ve.group;if(Ye.side===Wn&&Ge.layers.test(V.layers)){const sn=Ye.side;Ye.side=Bt,Ye.needsUpdate=!0,pn(Ge,te,V,ke,Ye,Tt),Ye.side=sn,Ye.needsUpdate=!0,Le=!0}}Le===!0&&(z.updateMultisampleRenderTarget(ue),z.updateRenderTargetMipmap(ue)),d.setRenderTarget(ne),d.toneMapping=Re}function Jt(w,X,te){const V=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Re=w.length;ne<Re;ne++){const Le=w[ne],Ue=Le.object,Be=Le.geometry,Ve=V===null?Le.material:V,Ge=Le.group;Ue.layers.test(te.layers)&&pn(Ue,X,te,Be,Ve,Ge)}}function pn(w,X,te,V,ne,Re){w.onBeforeRender(d,X,te,V,ne,Re),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(d,X,te,V,w,Re),ne.transparent===!0&&ne.side===Wn&&ne.forceSinglePass===!1?(ne.side=Bt,ne.needsUpdate=!0,d.renderBufferDirect(te,X,V,ne,w,Re),ne.side=ai,ne.needsUpdate=!0,d.renderBufferDirect(te,X,V,ne,w,Re),ne.side=Wn):d.renderBufferDirect(te,X,V,ne,w,Re),w.onAfterRender(d,X,te,V,ne,Re)}function dr(w,X,te){X.isScene!==!0&&(X=_e);const V=P.get(w),ne=_.state.lights,Re=_.state.shadowsArray,Le=ne.state.version,Ue=le.getParameters(w,ne.state,Re,X,te),Be=le.getProgramCacheKey(Ue);let Ve=V.programs;V.environment=w.isMeshStandardMaterial?X.environment:null,V.fog=X.fog,V.envMap=(w.isMeshStandardMaterial?Q:ie).get(w.envMap||V.environment),Ve===void 0&&(w.addEventListener("dispose",nt),Ve=new Map,V.programs=Ve);let Ge=Ve.get(Be);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Le)return jc(w,Ue),Ge}else Ue.uniforms=le.getUniforms(w),w.onBuild(te,Ue,d),w.onBeforeCompile(Ue,d),Ge=le.acquireProgram(Ue,Be),Ve.set(Be,Ge),V.uniforms=Ue.uniforms;const ke=V.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=N.uniform),jc(w,Ue),V.needsLights=cp(w),V.lightsStateVersion=Le,V.needsLights&&(ke.ambientLightColor.value=ne.state.ambient,ke.lightProbe.value=ne.state.probe,ke.directionalLights.value=ne.state.directional,ke.directionalLightShadows.value=ne.state.directionalShadow,ke.spotLights.value=ne.state.spot,ke.spotLightShadows.value=ne.state.spotShadow,ke.rectAreaLights.value=ne.state.rectArea,ke.ltc_1.value=ne.state.rectAreaLTC1,ke.ltc_2.value=ne.state.rectAreaLTC2,ke.pointLights.value=ne.state.point,ke.pointLightShadows.value=ne.state.pointShadow,ke.hemisphereLights.value=ne.state.hemi,ke.directionalShadowMap.value=ne.state.directionalShadowMap,ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ke.spotShadowMap.value=ne.state.spotShadowMap,ke.spotLightMatrix.value=ne.state.spotLightMatrix,ke.spotLightMap.value=ne.state.spotLightMap,ke.pointShadowMap.value=ne.state.pointShadowMap,ke.pointShadowMatrix.value=ne.state.pointShadowMatrix);const Ye=Ge.getUniforms(),Tt=Xr.seqWithValue(Ye.seq,ke);return V.currentProgram=Ge,V.uniformsList=Tt,Ge}function jc(w,X){const te=P.get(w);te.outputColorSpace=X.outputColorSpace,te.instancing=X.instancing,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function op(w,X,te,V,ne){X.isScene!==!0&&(X=_e),z.resetTextureUnits();const Re=X.fog,Le=V.isMeshStandardMaterial?X.environment:null,Ue=S===null?d.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:An,Be=(V.isMeshStandardMaterial?Q:ie).get(V.envMap||Le),Ve=V.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ge=!!V.normalMap&&!!te.attributes.tangent,ke=!!te.morphAttributes.position,Ye=!!te.morphAttributes.normal,Tt=!!te.morphAttributes.color,sn=V.toneMapped?d.toneMapping:qn,fi=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,st=fi!==void 0?fi.length:0,$e=P.get(V),Co=_.state.lights;if(oe===!0&&(Te===!0||w!==R)){const zt=w===R&&V.id===y;N.setState(V,w,zt)}let ht=!1;V.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Co.state.version||$e.outputColorSpace!==Ue||ne.isInstancedMesh&&$e.instancing===!1||!ne.isInstancedMesh&&$e.instancing===!0||ne.isSkinnedMesh&&$e.skinning===!1||!ne.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Be||V.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==N.numPlanes||$e.numIntersection!==N.numIntersection)||$e.vertexAlphas!==Ve||$e.vertexTangents!==Ge||$e.morphTargets!==ke||$e.morphNormals!==Ye||$e.morphColors!==Tt||$e.toneMapping!==sn||me.isWebGL2===!0&&$e.morphTargetsCount!==st)&&(ht=!0):(ht=!0,$e.__version=V.version);let ui=$e.currentProgram;ht===!0&&(ui=dr(V,X,ne));let Kc=!1,As=!1,Po=!1;const bt=ui.getUniforms(),hi=$e.uniforms;if(Ce.useProgram(ui.program)&&(Kc=!0,As=!0,Po=!0),V.id!==y&&(y=V.id,As=!0),Kc||R!==w){if(bt.setValue(I,"projectionMatrix",w.projectionMatrix),me.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),R!==w&&(R=w,As=!0,Po=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const zt=bt.map.cameraPosition;zt!==void 0&&zt.setValue(I,ce.setFromMatrixPosition(w.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&bt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||ne.isSkinnedMesh)&&bt.setValue(I,"viewMatrix",w.matrixWorldInverse)}if(ne.isSkinnedMesh){bt.setOptional(I,ne,"bindMatrix"),bt.setOptional(I,ne,"bindMatrixInverse");const zt=ne.skeleton;zt&&(me.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(I,"boneTexture",zt.boneTexture,z),bt.setValue(I,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Lo=te.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0&&me.isWebGL2===!0)&&he.update(ne,te,ui),(As||$e.receiveShadow!==ne.receiveShadow)&&($e.receiveShadow=ne.receiveShadow,bt.setValue(I,"receiveShadow",ne.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hi.envMap.value=Be,hi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),As&&(bt.setValue(I,"toneMappingExposure",d.toneMappingExposure),$e.needsLights&&ap(hi,Po),Re&&V.fog===!0&&ae.refreshFogUniforms(hi,Re),ae.refreshMaterialUniforms(hi,V,D,$,ue),Xr.upload(I,$e.uniformsList,hi,z)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xr.upload(I,$e.uniformsList,hi,z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&bt.setValue(I,"center",ne.center),bt.setValue(I,"modelViewMatrix",ne.modelViewMatrix),bt.setValue(I,"normalMatrix",ne.normalMatrix),bt.setValue(I,"modelMatrix",ne.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const zt=V.uniformsGroups;for(let Do=0,lp=zt.length;Do<lp;Do++)if(me.isWebGL2){const Zc=zt[Do];Me.update(Zc,ui),Me.bind(Zc,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function ap(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function cp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,X,te){P.get(w.texture).__webglTexture=X,P.get(w.depthTexture).__webglTexture=te;const V=P.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=te===void 0,V.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,X){const te=P.get(w);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,te=0){S=w,E=X,v=te;let V=!0,ne=null,Re=!1,Le=!1;if(w){const Be=P.get(w);Be.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):Be.__webglFramebuffer===void 0?z.setupRenderTarget(w):Be.__hasExternalTextures&&z.rebindTextures(w,P.get(w.texture).__webglTexture,P.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);const Ge=P.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ne=Ge[X],Re=!0):me.isWebGL2&&w.samples>0&&z.useMultisampledRTT(w)===!1?ne=P.get(w).__webglMultisampledFramebuffer:ne=Ge,U.copy(w.viewport),M.copy(w.scissor),T=w.scissorTest}else U.copy(j).multiplyScalar(D).floor(),M.copy(G).multiplyScalar(D).floor(),T=k;if(Ce.bindFramebuffer(I.FRAMEBUFFER,ne)&&me.drawBuffers&&V&&Ce.drawBuffers(w,ne),Ce.viewport(U),Ce.scissor(M),Ce.setScissorTest(T),Re){const Be=P.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,te)}else if(Le){const Be=P.get(w.texture),Ve=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,te||0,Ve)}y=-1},this.readRenderTargetPixels=function(w,X,te,V,ne,Re,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=P.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){Ce.bindFramebuffer(I.FRAMEBUFFER,Ue);try{const Be=w.texture,Ve=Be.format,Ge=Be.type;if(Ve!==hn&&W.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ge===nr&&(Pe.has("EXT_color_buffer_half_float")||me.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ge!==Li&&W.convert(Ge)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===bi&&(me.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-V&&te>=0&&te<=w.height-ne&&I.readPixels(X,te,V,ne,W.convert(Ve),W.convert(Ge),Re)}finally{const Be=S!==null?P.get(S).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(w,X,te=0){const V=Math.pow(2,-te),ne=Math.floor(X.image.width*V),Re=Math.floor(X.image.height*V);z.setTexture2D(X,0),I.copyTexSubImage2D(I.TEXTURE_2D,te,0,0,w.x,w.y,ne,Re),Ce.unbindTexture()},this.copyTextureToTexture=function(w,X,te,V=0){const ne=X.image.width,Re=X.image.height,Le=W.convert(te.format),Ue=W.convert(te.type);z.setTexture2D(te,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,te.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,te.unpackAlignment),X.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,w.x,w.y,ne,Re,Le,Ue,X.image.data):X.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,w.x,w.y,X.mipmaps[0].width,X.mipmaps[0].height,Le,X.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,w.x,w.y,Le,Ue,X.image),V===0&&te.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,X,te,V,ne=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=w.max.x-w.min.x+1,Le=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Be=W.convert(V.format),Ve=W.convert(V.type);let Ge;if(V.isData3DTexture)z.setTexture3D(V,0),Ge=I.TEXTURE_3D;else if(V.isDataArrayTexture)z.setTexture2DArray(V,0),Ge=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const ke=I.getParameter(I.UNPACK_ROW_LENGTH),Ye=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Tt=I.getParameter(I.UNPACK_SKIP_PIXELS),sn=I.getParameter(I.UNPACK_SKIP_ROWS),fi=I.getParameter(I.UNPACK_SKIP_IMAGES),st=te.isCompressedTexture?te.mipmaps[0]:te.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),te.isDataTexture||te.isData3DTexture?I.texSubImage3D(Ge,ne,X.x,X.y,X.z,Re,Le,Ue,Be,Ve,st.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,ne,X.x,X.y,X.z,Re,Le,Ue,Be,st.data)):I.texSubImage3D(Ge,ne,X.x,X.y,X.z,Re,Le,Ue,Be,Ve,st),I.pixelStorei(I.UNPACK_ROW_LENGTH,ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fi),ne===0&&V.generateMipmaps&&I.generateMipmap(Ge),Ce.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?z.setTextureCube(w,0):w.isData3DTexture?z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?z.setTexture2DArray(w,0):z.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){E=0,v=0,S=null,Ce.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?Ci:Bh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ci?Oe:An}}class V1 extends rd{}V1.prototype.isWebGL1Renderer=!0;class G1 extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class k1 extends ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Yf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class W1{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null}}}const $1=new W1;class od{constructor(e){this.manager=e!==void 0?e:$1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Fn={};class X1 extends Error{constructor(e,n){super(e),this.response=n}}class q1 extends od{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yf.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(Fn[e]!==void 0){Fn[e].push({onLoad:n,onProgress:i,onError:s});return}Fn[e]=[],Fn[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=Fn[e],u=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=h?parseInt(h):0,_=p!==0;let g=0;const m=new ReadableStream({start(d){A();function A(){u.read().then(({done:E,value:v})=>{if(E)d.close();else{g+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let y=0,R=f.length;y<R;y++){const U=f[y];U.onProgress&&U.onProgress(S)}d.enqueue(v),A()}})}}});return new Response(m)}else throw new X1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Yf.add(e,l);const f=Fn[e];delete Fn[e];for(let u=0,h=f.length;u<h;u++){const p=f[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const f=Fn[e];if(f===void 0)throw this.manager.itemError(e),l;delete Fn[e];for(let u=0,h=f.length;u<h;u++){const p=f[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ad extends yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Ma=new lt,jf=new q,Kf=new q;class Y1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;jf.setFromMatrixPosition(e.matrixWorld),n.position.copy(jf),Kf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Kf),n.updateMatrixWorld(),Ma.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class j1 extends Y1{constructor(){super(new ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K1 extends ad{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new j1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z1 extends ad{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zf{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);class J1 extends od{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new q1(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e){function n(l){const f=new DataView(l),u=32/8*3+32/8*3*3+16/8,h=f.getUint32(80,!0);if(80+32/8+h*u===f.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,f,g))return!1;return!0}function i(l,f,u){for(let h=0,p=l.length;h<p;h++)if(l[h]!==f.getUint8(u+h))return!1;return!0}function s(l){const f=new DataView(l),u=f.getUint32(80,!0);let h,p,_,g=!1,m,d,A,E,v;for(let T=0;T<70;T++)f.getUint32(T,!1)==1129270351&&f.getUint8(T+4)==82&&f.getUint8(T+5)==61&&(g=!0,m=new Float32Array(u*3*3),d=f.getUint8(T+6)/255,A=f.getUint8(T+7)/255,E=f.getUint8(T+8)/255,v=f.getUint8(T+9)/255);const S=84,y=12*4+2,R=new jn,U=new Float32Array(u*3*3),M=new Float32Array(u*3*3);for(let T=0;T<u;T++){const B=S+T*y,$=f.getFloat32(B,!0),D=f.getFloat32(B+4,!0),O=f.getFloat32(B+8,!0);if(g){const H=f.getUint16(B+48,!0);H&32768?(h=d,p=A,_=E):(h=(H&31)/31,p=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const j=B+H*12,G=T*3*3+(H-1)*3;U[G]=f.getFloat32(j,!0),U[G+1]=f.getFloat32(j+4,!0),U[G+2]=f.getFloat32(j+8,!0),M[G]=$,M[G+1]=D,M[G+2]=O,g&&(m[G]=h,m[G+1]=p,m[G+2]=_)}}return R.setAttribute("position",new Zt(U,3)),R.setAttribute("normal",new Zt(M,3)),g&&(R.setAttribute("color",new Zt(m,3)),R.hasColors=!0,R.alpha=v),R}function r(l){const f=new jn,u=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let p=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),d=[],A=[],E=new q;let v,S=0,y=0,R=0;for(;(v=u.exec(l))!==null;){y=R;const U=v[0];for(;(v=h.exec(U))!==null;){let B=0,$=0;const D=v[0];for(;(v=m.exec(D))!==null;)E.x=parseFloat(v[1]),E.y=parseFloat(v[2]),E.z=parseFloat(v[3]),$++;for(;(v=g.exec(D))!==null;)d.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),A.push(E.x,E.y,E.z),B++,R++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),B!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const M=y,T=R-y;f.addGroup(M,T,S),S++}return f.setAttribute("position",new Yn(d,3)),f.setAttribute("normal",new Yn(A,3)),f}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const f=new Uint8Array(l.length);for(let u=0;u<l.length;u++)f[u]=l.charCodeAt(u)&255;return f.buffer||f}else return l}const c=a(e);return n(c)?s(c):r(o(e))}}const Jf={type:"change"},Sa={type:"start"},Qf={type:"end"};class Q1 extends Ni{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",le),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Jf),i.update(),r=s.NONE},this.update=function(){const L=new q,J=new Ui().setFromUnitVectors(e.up,new q(0,1,0)),W=J.clone().invert(),ge=new q,Me=new Ui,be=2*Math.PI;return function(){const Se=i.object.position;L.copy(Se).sub(i.target),L.applyQuaternion(J),a.setFromVector3(L),i.autoRotate&&r===s.NONE&&M(R()),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let we=i.minAzimuthAngle,Ie=i.maxAzimuthAngle;return isFinite(we)&&isFinite(Ie)&&(we<-Math.PI?we+=be:we>Math.PI&&(we-=be),Ie<-Math.PI?Ie+=be:Ie>Math.PI&&(Ie-=be),we<=Ie?a.theta=Math.max(we,Math.min(Ie,a.theta)):a.theta=a.theta>(we+Ie)/2?Math.max(we,a.theta):Math.min(Ie,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),L.setFromSpherical(a),L.applyQuaternion(W),Se.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),f.set(0,0,0)),l=1,u||ge.distanceToSquared(i.object.position)>o||8*(1-Me.dot(i.object.quaternion))>o?(i.dispatchEvent(Jf),ge.copy(i.object.position),Me.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",x),i.domElement.removeEventListener("pointerdown",z),i.domElement.removeEventListener("pointercancel",Q),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",ie),i.domElement.removeEventListener("pointerup",Q),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Zf,c=new Zf;let l=1;const f=new q;let u=!1;const h=new He,p=new He,_=new He,g=new He,m=new He,d=new He,A=new He,E=new He,v=new He,S=[],y={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function U(){return Math.pow(.95,i.zoomSpeed)}function M(L){c.theta-=L}function T(L){c.phi-=L}const B=function(){const L=new q;return function(W,ge){L.setFromMatrixColumn(ge,0),L.multiplyScalar(-W),f.add(L)}}(),$=function(){const L=new q;return function(W,ge){i.screenSpacePanning===!0?L.setFromMatrixColumn(ge,1):(L.setFromMatrixColumn(ge,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(W),f.add(L)}}(),D=function(){const L=new q;return function(W,ge){const Me=i.domElement;if(i.object.isPerspectiveCamera){const be=i.object.position;L.copy(be).sub(i.target);let Ee=L.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),B(2*W*Ee/Me.clientHeight,i.object.matrix),$(2*ge*Ee/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B(W*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),$(ge*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(L){i.object.isPerspectiveCamera?l/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(L){i.object.isPerspectiveCamera?l*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(L){h.set(L.clientX,L.clientY)}function G(L){A.set(L.clientX,L.clientY)}function k(L){g.set(L.clientX,L.clientY)}function fe(L){p.set(L.clientX,L.clientY),_.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;M(2*Math.PI*_.x/J.clientHeight),T(2*Math.PI*_.y/J.clientHeight),h.copy(p),i.update()}function oe(L){E.set(L.clientX,L.clientY),v.subVectors(E,A),v.y>0?O(U()):v.y<0&&H(U()),A.copy(E),i.update()}function Te(L){m.set(L.clientX,L.clientY),d.subVectors(m,g).multiplyScalar(i.panSpeed),D(d.x,d.y),g.copy(m),i.update()}function ue(L){L.deltaY<0?H(U()):L.deltaY>0&&O(U()),i.update()}function K(L){let J=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):D(-i.keyPanSpeed,0),J=!0;break}J&&(L.preventDefault(),i.update())}function ce(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);h.set(L,J)}}function _e(){if(S.length===1)g.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);g.set(L,J)}}function ve(){const L=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,W=Math.sqrt(L*L+J*J);A.set(0,W)}function I(){i.enableZoom&&ve(),i.enablePan&&_e()}function De(){i.enableZoom&&ve(),i.enableRotate&&ce()}function Pe(L){if(S.length==1)p.set(L.pageX,L.pageY);else{const W=he(L),ge=.5*(L.pageX+W.x),Me=.5*(L.pageY+W.y);p.set(ge,Me)}_.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;M(2*Math.PI*_.x/J.clientHeight),T(2*Math.PI*_.y/J.clientHeight),h.copy(p)}function me(L){if(S.length===1)m.set(L.pageX,L.pageY);else{const J=he(L),W=.5*(L.pageX+J.x),ge=.5*(L.pageY+J.y);m.set(W,ge)}d.subVectors(m,g).multiplyScalar(i.panSpeed),D(d.x,d.y),g.copy(m)}function Ce(L){const J=he(L),W=L.pageX-J.x,ge=L.pageY-J.y,Me=Math.sqrt(W*W+ge*ge);E.set(0,Me),v.set(0,Math.pow(E.y/A.y,i.zoomSpeed)),O(v.y),A.copy(E)}function C(L){i.enableZoom&&Ce(L),i.enablePan&&me(L)}function P(L){i.enableZoom&&Ce(L),i.enableRotate&&Pe(L)}function z(L){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",ie),i.domElement.addEventListener("pointerup",Q)),N(L),L.pointerType==="touch"?ae(L):se(L))}function ie(L){i.enabled!==!1&&(L.pointerType==="touch"?b(L):de(L))}function Q(L){Y(L),S.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",ie),i.domElement.removeEventListener("pointerup",Q)),i.dispatchEvent(Qf),r=s.NONE}function se(L){let J;switch(L.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Bi.DOLLY:if(i.enableZoom===!1)return;G(L),r=s.DOLLY;break;case Bi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;k(L),r=s.PAN}else{if(i.enableRotate===!1)return;j(L),r=s.ROTATE}break;case Bi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;j(L),r=s.ROTATE}else{if(i.enablePan===!1)return;k(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Sa)}function de(L){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;fe(L);break;case s.DOLLY:if(i.enableZoom===!1)return;oe(L);break;case s.PAN:if(i.enablePan===!1)return;Te(L);break}}function re(L){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(L.preventDefault(),i.dispatchEvent(Sa),ue(L),i.dispatchEvent(Qf))}function le(L){i.enabled===!1||i.enablePan===!1||K(L)}function ae(L){switch(Z(L),S.length){case 1:switch(i.touches.ONE){case zi.ROTATE:if(i.enableRotate===!1)return;ce(),r=s.TOUCH_ROTATE;break;case zi.PAN:if(i.enablePan===!1)return;_e(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case zi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;I(),r=s.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Sa)}function b(L){switch(Z(L),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Pe(L),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;me(L),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(L),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;P(L),i.update();break;default:r=s.NONE}}function x(L){i.enabled!==!1&&L.preventDefault()}function N(L){S.push(L)}function Y(L){delete y[L.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==L.pointerId){S.splice(J,1);return}}function Z(L){let J=y[L.pointerId];J===void 0&&(J=new He,y[L.pointerId]=J),J.set(L.pageX,L.pageY)}function he(L){const J=L.pointerId===S[0].pointerId?S[1]:S[0];return y[J.pointerId]}i.domElement.addEventListener("contextmenu",x),i.domElement.addEventListener("pointerdown",z),i.domElement.addEventListener("pointercancel",Q),i.domElement.addEventListener("wheel",re,{passive:!1}),this.update()}}const cd=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(cd(n)):e.concat(n),[]);var go=cd;const eS=t=>Object.assign({},t);var tS=eS;const nS=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);var iS=nS;const sS=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var Oc=sS;const rS=Oc,oS=t=>{const e=rS();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};var aS=oS;const cS=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);var ld=cS;const lS=(t,e)=>{const n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],A=n*a-i*o,E=n*c-s*o,v=n*l-r*o,S=i*c-s*a,y=i*l-r*a,R=s*l-r*c,U=f*g-u*_,M=f*m-h*_,T=f*d-p*_,B=u*m-h*g,$=u*d-p*g,D=h*d-p*m;let O=A*D-E*$+v*B+S*T-y*M+R*U;return O?(O=1/O,t[0]=(a*D-c*$+l*B)*O,t[1]=(s*$-i*D-r*B)*O,t[2]=(g*R-m*y+d*S)*O,t[3]=(h*y-u*R-p*S)*O,t[4]=(c*T-o*D-l*M)*O,t[5]=(n*D-s*T+r*M)*O,t[6]=(m*v-_*R-d*E)*O,t[7]=(f*R-h*v+p*E)*O,t[8]=(o*$-a*T+l*U)*O,t[9]=(i*T-n*$-r*U)*O,t[10]=(_*y-g*v+d*A)*O,t[11]=(u*v-f*y-p*A)*O,t[12]=(a*M-o*B-c*U)*O,t[13]=(n*B-i*M+s*U)*O,t[14]=(g*E-_*S-m*A)*O,t[15]=(f*S-u*E+h*A)*O,t):null};var fS=lS;const uS=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];var hS=uS;const dS=1e-5,pS=1e-13,mS=Math.PI*2;var Nt={EPS:dS,NEPS:pS,TAU:mS};const{NEPS:gS}=Nt,fd=t=>Math.abs(t)<gS?0:t,_S=t=>fd(Math.sin(t)),vS=t=>fd(Math.cos(t));var wn={sin:_S,cos:vS};const xS=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var ud=xS;const{EPS:MS}=Nt,{sin:SS,cos:ES}=wn,yS=ud,TS=(t,e,n)=>{let[i,s,r]=n;const o=i*i+s*s+r*r;if(Math.abs(o)<MS)return yS(t);const a=1/Math.sqrt(o);i*=a,s*=a,r*=a;const c=SS(e),l=ES(e),f=1-l;return t[0]=i*i*f+l,t[1]=s*i*f+r*c,t[2]=r*i*f-s*c,t[3]=0,t[4]=i*s*f-r*c,t[5]=s*s*f+l,t[6]=r*s*f+i*c,t[7]=0,t[8]=i*r*f+s*c,t[9]=s*r*f-i*c,t[10]=r*r*f+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var hd=TS;const bS=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var AS=bS;const{sin:Ea,cos:ya}=wn,wS=(t,e,n,i)=>{const s=Ea(e),r=ya(e),o=Ea(n),a=ya(n),c=Ea(i),l=ya(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=c*o*r-l*s,t[5]=l*r+c*o*s,t[6]=c*a,t[7]=0,t[8]=c*s+l*o*r,t[9]=l*o*s-c*r,t[10]=l*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var RS=wS;const CS=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);var PS=CS;const LS=Oc,DS=(t,e,n,i,s,r,o,a,c,l,f,u,h,p,_,g)=>{const m=LS();return m[0]=t,m[1]=e,m[2]=n,m[3]=i,m[4]=s,m[5]=r,m[6]=o,m[7]=a,m[8]=c,m[9]=l,m[10]=f,m[11]=u,m[12]=h,m[13]=p,m[14]=_,m[15]=g,m};var US=DS;const IS=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);var dd=IS;const FS=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);var pd=FS;const NS=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];var _o=NS;const OS=_o,BS=(t,e)=>{const n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],c=Math.sqrt(n*n+i*i+s*s),l=Math.sqrt(r*r+o*o+a*a),f=c*l,u=f&&OS(t,e)/f;return Math.acos(Math.min(Math.max(u,-1),1))};var zS=BS;const HS=()=>[0,0,0];var vo=HS;const VS=vo,GS=t=>{const e=VS();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var kS=GS;const WS=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var md=WS;const $S=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],c=n[2];return t[0]=s*c-r*a,t[1]=r*o-i*c,t[2]=i*a-s*o,t};var lr=$S;const XS=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};var gd=XS;const qS=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);var YS=qS;const jS=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var KS=jS;const ZS=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);var JS=ZS;const QS=vo,eE=(t,e,n)=>{const i=QS();return i[0]=t,i[1]=e,i[2]=n,i};var tE=eE;const nE=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);var iE=nE;const sE=t=>{const e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};var _d=sE;const rE=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);var oE=rE;const aE=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);var cE=aE;const lE=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);var fE=lE;const uE=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);var hE=uE;const dE=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);var pE=dE;const mE=(t,e)=>{const n=e[0],i=e[1],s=e[2];let r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};var Bc=mE;const gE=dd,_E=vo,vE=lr,xE=(t,e)=>{const n=gE(_E(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return vE(t,e,[i,s,r])};var ME=xE;const SE=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var EE=SE;const yE=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var TE=yE;const bE=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};var AE=bE;const wE=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);var vd=wE;const RE=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);var CE=RE;const PE=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};var xd=PE;const LE=t=>{const e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};var Md=LE;const DE=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);var xo=DE;const UE=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;var IE=UE;const FE=(t,e,n)=>{const i=e[0],s=e[1],r=e[2];let o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};var NE=FE,tt={abs:dd,add:pd,angle:zS,clone:kS,copy:md,create:vo,cross:lr,distance:gd,divide:YS,dot:_o,equals:KS,fromScalar:JS,fromValues:tE,fromVec2:iE,length:_d,lerp:oE,max:cE,min:fE,multiply:hE,negate:pE,normalize:Bc,orthogonal:ME,rotateX:EE,rotateY:TE,rotateZ:AE,scale:vd,snap:CE,squaredDistance:xd,squaredLength:Md,subtract:xo,toString:IE,transform:NE};const ni=tt,OE=hd,BE=(t,e,n)=>{const i=ni.normalize(ni.create(),e),s=ni.normalize(ni.create(),n),r=ni.cross(ni.create(),s,i),o=ni.dot(s,i);if(o===-1)return OE(t,Math.PI,ni.orthogonal(r,i));const a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var zE=BE;const{sin:HE,cos:VE}=wn,GE=(t,e)=>{const n=HE(e),i=VE(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var kE=GE;const{sin:WE,cos:$E}=wn,XE=(t,e)=>{const n=WE(e),i=$E(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var qE=XE;const{sin:YE,cos:jE}=wn,KE=(t,e)=>{const n=YE(e),i=jE(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var ZE=KE;const JE=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;var QE=JE;const ey=t=>Nn(t[1])&&Nn(t[2])&&Nn(t[3])&&Nn(t[4])&&Nn(t[6])&&Nn(t[7])&&Nn(t[8])&&Nn(t[9])&&Nn(t[11])&&t[15]===1,Nn=t=>Math.abs(t)<Number.EPSILON;var ty=ey;const ny=t=>{const e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};var iy=ny;const sy=(t,e)=>{const[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};var ry=sy;const oy=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],c=e[5],l=e[6],f=e[7],u=e[8],h=e[9],p=e[10],_=e[11],g=e[12],m=e[13],d=e[14],A=e[15];let E=n[0],v=n[1],S=n[2],y=n[3];return t[0]=E*i+v*a+S*u+y*g,t[1]=E*s+v*c+S*h+y*m,t[2]=E*r+v*l+S*p+y*d,t[3]=E*o+v*f+S*_+y*A,E=n[4],v=n[5],S=n[6],y=n[7],t[4]=E*i+v*a+S*u+y*g,t[5]=E*s+v*c+S*h+y*m,t[6]=E*r+v*l+S*p+y*d,t[7]=E*o+v*f+S*_+y*A,E=n[8],v=n[9],S=n[10],y=n[11],t[8]=E*i+v*a+S*u+y*g,t[9]=E*s+v*c+S*h+y*m,t[10]=E*r+v*l+S*p+y*d,t[11]=E*o+v*f+S*_+y*A,E=n[12],v=n[13],S=n[14],y=n[15],t[12]=E*i+v*a+S*u+y*g,t[13]=E*s+v*c+S*h+y*m,t[14]=E*r+v*l+S*p+y*d,t[15]=E*o+v*f+S*_+y*A,t};var ay=oy;const{EPS:cy}=Nt,{sin:ly,cos:fy}=wn,uy=ld,hy=(t,e,n,i)=>{let[s,r,o]=i;const a=s*s+r*r+o*o;if(Math.abs(a)<cy)return uy(t,e);const c=1/Math.sqrt(a);s*=c,r*=c,o*=c;const l=ly(n),f=fy(n),u=1-f,h=e[0],p=e[1],_=e[2],g=e[3],m=e[4],d=e[5],A=e[6],E=e[7],v=e[8],S=e[9],y=e[10],R=e[11],U=s*s*u+f,M=r*s*u+o*l,T=o*s*u-r*l,B=s*r*u-o*l,$=r*r*u+f,D=o*r*u+s*l,O=s*o*u+r*l,H=r*o*u-s*l,j=o*o*u+f;return t[0]=h*U+m*M+v*T,t[1]=p*U+d*M+S*T,t[2]=_*U+A*M+y*T,t[3]=g*U+E*M+R*T,t[4]=h*B+m*$+v*D,t[5]=p*B+d*$+S*D,t[6]=_*B+A*$+y*D,t[7]=g*B+E*$+R*D,t[8]=h*O+m*H+v*j,t[9]=p*O+d*H+S*j,t[10]=_*O+A*H+y*j,t[11]=g*O+E*H+R*j,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};var dy=hy;const{sin:py,cos:my}=wn,gy=(t,e,n)=>{const i=py(n),s=my(n),r=e[4],o=e[5],a=e[6],c=e[7],l=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+l*i,t[5]=o*s+f*i,t[6]=a*s+u*i,t[7]=c*s+h*i,t[8]=l*s-r*i,t[9]=f*s-o*i,t[10]=u*s-a*i,t[11]=h*s-c*i,t};var _y=gy;const{sin:vy,cos:xy}=wn,My=(t,e,n)=>{const i=vy(n),s=xy(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-l*i,t[1]=o*s-f*i,t[2]=a*s-u*i,t[3]=c*s-h*i,t[8]=r*i+l*s,t[9]=o*i+f*s,t[10]=a*i+u*s,t[11]=c*i+h*s,t};var Sy=My;const{sin:Ey,cos:yy}=wn,Ty=(t,e,n)=>{const i=Ey(n),s=yy(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[4],f=e[5],u=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+l*i,t[1]=o*s+f*i,t[2]=a*s+u*i,t[3]=c*s+h*i,t[4]=l*s-r*i,t[5]=f*s-o*i,t[6]=u*s-a*i,t[7]=h*s-c*i,t};var by=Ty;const Ay=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};var wy=Ay;const Ry=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);var Cy=Ry;const Py=t=>t.map(e=>e.toFixed(7)).toString();var Ly=Py;const Dy=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];let o,a,c,l,f,u,h,p,_,g,m,d;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],c=e[2],l=e[3],f=e[4],u=e[5],h=e[6],p=e[7],_=e[8],g=e[9],m=e[10],d=e[11],t[0]=o,t[1]=a,t[2]=c,t[3]=l,t[4]=f,t[5]=u,t[6]=h,t[7]=p,t[8]=_,t[9]=g,t[10]=m,t[11]=d,t[12]=o*i+f*s+_*r+e[12],t[13]=a*i+u*s+g*r+e[13],t[14]=c*i+h*s+m*r+e[14],t[15]=l*i+p*s+d*r+e[15]),t};var Uy=Dy,Ot={add:iS,clone:aS,copy:ld,create:Oc,invert:fS,equals:hS,fromRotation:hd,fromScaling:AS,fromTaitBryanRotation:RS,fromTranslation:PS,fromValues:US,fromVectorRotation:zE,fromXRotation:kE,fromYRotation:qE,fromZRotation:ZE,identity:ud,isIdentity:QE,isOnlyTransformScale:ty,isMirroring:iy,mirrorByPlane:ry,multiply:ay,rotate:dy,rotateX:_y,rotateY:Sy,rotateZ:by,scale:wy,subtract:Cy,toString:Ly,translate:Uy};const Iy=Ot,Fy=t=>(t===void 0&&(t=[]),{sides:t,transforms:Iy.create()});var Mo=Fy;const Ny=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);var Oy=Ny;const By=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);var zy=By;const Hy=t=>Math.atan2(t[1],t[0]);var zc=Hy,Vy=zc;const Gy=zc,ky=t=>Gy(t)*57.29577951308232;var Wy=ky;const $y=()=>[0,0];var So=$y;const Xy=So,qy=t=>{const e=Xy();return e[0]=t[0],e[1]=t[1],e};var Yy=qy;const jy=(t,e)=>(t[0]=e[0],t[1]=e[1],t);var Ky=jy;const Zy=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);var Jy=Zy;const Qy=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};var eT=Qy;const tT=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);var nT=tT;const iT=(t,e)=>t[0]*e[0]+t[1]*e[1];var sT=iT;const rT=(t,e)=>t[0]===e[0]&&t[1]===e[1];var oT=rT;const{sin:aT,cos:cT}=wn,lT=(t,e)=>(t[0]=cT(e),t[1]=aT(e),t);var Sd=lT;const fT=Sd,uT=(t,e)=>fT(t,e*.017453292519943295);var hT=uT;const dT=(t,e)=>(t[0]=e,t[1]=e,t);var pT=dT;const mT=So,gT=(t,e)=>{const n=mT();return n[0]=t,n[1]=e,n};var _T=gT;const vT=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);var xT=vT;const MT=(t,e,n,i)=>{const s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};var ST=MT;const ET=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);var yT=ET;const TT=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);var bT=TT;const AT=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);var wT=AT;const RT=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);var CT=RT;const PT=(t,e,n,i)=>{const s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};var Ed=PT;const{TAU:LT}=Nt,DT=So,UT=Ed,IT=(t,e)=>UT(t,e,DT(),LT/4);var FT=IT;const NT=(t,e)=>{const n=e[0],i=e[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};var OT=NT;const BT=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);var zT=BT;const HT=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);var VT=HT;const GT=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};var kT=GT;const WT=t=>{const e=t[0],n=t[1];return e*e+n*n};var $T=WT;const XT=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);var qT=XT;const YT=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;var jT=YT;const KT=(t,e,n)=>{const i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};var ZT=KT,qe={abs:Oy,add:zy,angle:Vy,angleDegrees:Wy,angleRadians:zc,clone:Yy,copy:Ky,create:So,cross:Jy,distance:eT,divide:nT,dot:sT,equals:oT,fromAngleDegrees:hT,fromAngleRadians:Sd,fromScalar:pT,fromValues:_T,length:xT,lerp:ST,max:yT,min:bT,multiply:wT,negate:CT,normal:FT,normalize:OT,rotate:Ed,scale:zT,snap:VT,squaredDistance:kT,squaredLength:$T,subtract:qT,toString:jT,transform:ZT};const Ta=qe,JT=Mo,QT=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");Ta.equals(t[0],t[e-1])&&--e;const n=[];let i=t[e-1];for(let s=0;s<e;s++){const r=t[s];n.push([Ta.clone(i),Ta.clone(r)]),i=r}return JT(n)};var eb=QT;const tb=Ot,eu=qe,nb=Mo,ib=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");const e=nb();e.transforms=tb.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){const i=eu.fromValues(t[n+0],t[n+1]),s=eu.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var sb=ib;const rb=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);var yd=rb;const tu=Ot,zr=qe,ob=t=>(tu.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{const n=zr.transform(zr.create(),e[0],t.transforms),i=zr.transform(zr.create(),e[1],t.transforms);return[n,i]}),t.transforms=tu.create()),t);var ab=ob;const cb=ab,lb=t=>cb(t).sides;var fr=lb;const fb=Mo,ub=fr,hb=t=>{const n=ub(t).map(i=>[i[1],i[0]]);return n.reverse(),fb(n)};var Td=hb;const Us=qe,db=fr,pb=t=>{const e=new Map,n=i=>{const s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},mb=t=>{const e=new Map;return pb(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},gb=t=>{const e=mb(db(t)),n=[];for(;;){let i;for(const[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;const s=[],r=i[0];for(;;){s.push(i[0]);const o=i[1];if(o===r)break;const a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);const c=_b(i,a);a.length===0&&e.delete(o),i=c}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},_b=(t,e)=>{if(e.length===1)return e.pop();const n=Us.create(),i=Us.angleDegrees(Us.subtract(n,t[1],t[0]));let s,r;e.forEach((a,c)=>{let f=Us.angleDegrees(Us.subtract(n,a[1],a[0]))-i;f<-180&&(f+=360),f>=180&&(f-=360),(r===void 0||f>s)&&(r=c,s=f)});const o=e[r];return e.splice(r,1),o};var bd=gb;const vb=fr,xb=t=>{const n=vb(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};var Mb=xb;const nu=qe,Sb=fr,Eb=t=>{const e=Sb(t);let n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+nu.toString(i[0])+", "+nu.toString(i[1])+`]
`}),n+=`]
`,n};var yb=Eb;const Tb=t=>{const e=t.sides,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){const o=r*4+21,a=e[r][0],c=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=c[0],s[o+3]=c[1]}return s};var bb=Tb;const iu=Ot,Ab=Td,wb=(t,e)=>{const n=iu.multiply(iu.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?Ab(i):i};var Rb=wb;const Cb=qe,Pb=yd,Lb=bd,Db=t=>{if(!Pb(t))throw new Error("invalid geom2 structure");if(Lb(t),t.sides.forEach(e=>{if(Cb.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};var Ub=Db,Eo={clone:tS,create:Mo,fromPoints:eb,fromCompactBinary:sb,isA:yd,reverse:Td,toOutlines:bd,toPoints:Mb,toSides:fr,toString:yb,toCompactBinary:bb,transform:Rb,validate:Ub};const Ib=t=>Object.assign({},t);var Fb=Ib;const Nb=Ot,Ob=t=>(t===void 0&&(t=[]),{polygons:t,transforms:Nb.create()});var ur=Ob;const Bb=lr,su=xo,ru=Md,zb=(t,e,n)=>{const i=[],s=[],r=[];su(i,n,e),su(s,t,e);const o=ru(Bb(r,s,i)),a=ru(i);if(a===0)throw Error("a and b are the same point");return o/a},Hb=(t,e,n)=>Math.sqrt(zb(t,e,n));var Vb=Hb;const Gb=lr,kb=Bc,ou=xo,Wb=(t,e,n,i)=>{const s=[0,0,0];return ou(t,e,n),ou(s,n,i),Gb(t,t,s),kb(t,t)};var $b=Wb;let Xb=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};var qb=Xb;let Yb=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};var jb=Yb;const Kb=gd,Zb=xd;let Jb=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?Kb(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?Zb(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};var Qb=Jb;const ba=pd,eA=md,tA=lr,Aa=_o,nA=_d,iA=Bc,Hr=vd,wa=xo,Ra=Qb,Ad=0,sA=1,ac=2;let rA=class wd{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=Ad,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){const e=this.edge,n=e.next;let i=n.next;const s=wa([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)eA(o,s),wa(s,i.head().point,e.head().point),ba(this.normal,this.normal,tA(r,o,s)),i=i.next,this.nVertices+=1;this.area=nA(this.normal),this.normal=Hr(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{const f=s.lengthSquared();f>i&&(n=s,i=f),s=s.next}while(s!==this.edge);const r=n.tail().point,o=n.head().point,a=wa([],o,r),c=Math.sqrt(i);Hr(a,a,1/c);const l=Aa(this.normal,a);Hr(a,a,-l),ba(this.normal,this.normal,a),iA(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do ba(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);Hr(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=Aa(this.normal,this.centroid)}distanceToPlane(e){return Aa(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){const s=n.opposite.face;let r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=ac,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){const i=e.opposite,s=i.face;n.push(s),s.mark=ac;let r=e.prev,o=e.next,a=i.prev,c=i.next;for(;r.opposite.face===s;)r=r.prev,c=c.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let l;for(l=c;l!==a.next;l=l.next)l.face=this;this.edge=o;let f;return f=this.connectHalfEdges(a,o),f&&n.push(f),f=this.connectHalfEdges(r,c),f&&n.push(f),this.computeNormalAndCentroid(),n}collectIndices(){const e=[];let n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){const r=new wd,o=new Ra(e,r),a=new Ra(n,r),c=new Ra(i,r);return o.next=c.prev=a,a.next=o.prev=c,c.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};var oA={VISIBLE:Ad,NON_CONVEX:sA,DELETED:ac,Face:rA};const Ca=_o,aA=Vb,cA=$b,au=qb,lA=jb,{Face:On,VISIBLE:ns,NON_CONVEX:cu,DELETED:fA}=oA,uA=1,lu=2;let hA=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new au,this.unclaimed=new au,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new lA(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){const a=e[o];if(a.mark===ns){const c=a.distanceToPlane(i.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){const e=[],n=[],i=[],s=[];let r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){const a=this.vertices[r],c=a.point;for(o=0;o<3;o+=1)c[o]<e[o]&&(e[o]=c[o],i[o]=a);for(o=0;o<3;o+=1)c[o]>n[o]&&(n[o]=c[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){const e=this.vertices,[n,i]=this.computeExtremes();let s,r,o,a,c=0,l=0;for(o=0;o<3;o+=1){const g=i[o].point[o]-n[o].point[o];g>c&&(c=g,l=o)}const f=n[l],u=i[l];for(c=0,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u){const m=aA(g.point,f.point,u.point);m>c&&(c=m,s=g)}}const h=cA([],f.point,u.point,s.point),p=Ca(f.point,h);for(c=-1,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u&&g!==s){const m=Math.abs(Ca(h,g.point)-p);m>c&&(c=m,r=g)}}const _=[];if(Ca(r.point,h)-p<0)for(_.push(On.createTriangle(f,u,s),On.createTriangle(r,u,f),On.createTriangle(r,s,u),On.createTriangle(r,f,s)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge(g)),_[o+1].getEdge(1).setOpposite(_[g+1].getEdge(0))}else for(_.push(On.createTriangle(f,s,u),On.createTriangle(r,f,u),On.createTriangle(r,u,s),On.createTriangle(r,s,f)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge((3-o)%3)),_[o+1].getEdge(0).setOpposite(_[g+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(_[o]);for(o=0;o<e.length;o+=1){const g=e[o];if(g!==f&&g!==u&&g!==s&&g!==r){c=this.tolerance;let m;for(a=0;a<4;a+=1){const d=_[a].distanceToPlane(g.point);d>c&&(c=d,m=_[a])}m&&this.addVertexToFace(g,m)}}}reindexFaceAndVertices(){const e=[];for(let n=0;n<this.faces.length;n+=1){const i=this.faces[n];i.mark===ns&&e.push(i)}this.faces=e}collectFaces(e){const n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==ns)throw Error("attempt to include a destroyed face in the hull");const s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0;const s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){const r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=fA;let r;n?r=n.next:r=n=i.getEdge(0);do{const o=r.opposite,a=o.face;a.mark===ns&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){const i=On.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){const o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");const o=i.opposite.face;let a=!1;if(n===lu?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){const c=e.mergeAdjacentFaces(i,[]);for(let l=0;l<c.length;l+=1)this.deleteFaceVertices(c[l],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=cu),!1}addVertexToHull(e){const n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===ns)for(;this.doAdjacentMerge(s,uA););}for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===cu)for(s.mark=ns;this.doAdjacentMerge(s,lu););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};var dA=hA;const pA=dA,mA=(t,e={})=>{const n=new pA(t);return n.build(),n.collectFaces(e.skipTriangulation)};var gA=mA;const _A=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var Ts=_A;const vA=Ts,xA=tt,MA=(...t)=>{let e,n;return t.length===1?(e=vA(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>xA.clone(i)),e};var SA=MA;const EA=tt,yA=Ts,TA=t=>{const e=t.map(n=>EA.clone(n));return yA(e)};var bA=TA;const AA=Ts,wA=(t,e)=>{const n=AA(t);return n.plane=e,n};var RA=wA;const CA=()=>[0,0,0,0];var yo=CA;const PA=yo,LA=t=>{const e=PA();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};var Rd=LA;const DA=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);var Cd=DA;const UA=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];var Pd=UA;const IA=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);var Ld=IA;const Pa=tt,FA=(t,e,n)=>{const i=Pa.normalize(Pa.create(),e),s=Pa.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};var Dd=FA;const NA=yo,OA=(t,e,n,i)=>{const s=NA();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};var Ud=OA;const kt=tt,BA=Dd,zA=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;const n=e.length;e.forEach(p=>{kt.add(t,t,p)}),kt.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,c=0;const l=kt.create();e.forEach(p=>{kt.subtract(l,p,t),i+=l[0]*l[0],s+=l[0]*l[1],r+=l[0]*l[2],o+=l[1]*l[1],a+=l[1]*l[2],c+=l[2]*l[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,c/=n,l[0]=0,l[1]=0,l[2]=0;const f=kt.create();let u=o*c-a*a;f[0]=u,f[1]=r*a-s*c,f[2]=s*a-r*o;let h=u*u;return kt.add(l,l,kt.scale(f,f,h)),u=i*c-r*r,f[0]=r*a-s*c,f[1]=u,f[2]=s*r-a*i,h=u*u,kt.dot(l,f)<0&&(h=-h),kt.add(l,l,kt.scale(f,f,h)),u=i*o-s*s,f[0]=s*a-r*o,f[1]=s*r-a*i,f[2]=u,h=u*u,kt.dot(l,f)<0&&(h=-h),kt.add(l,l,kt.scale(f,f,h)),BA(t,l,t)};var HA=zA;const _n=tt,VA=(t,...e)=>{const n=e.length,i=_n.create(),s=_n.create(),r=o=>{const a=e[o],c=e[(o+1)%n],l=e[(o+2)%n];return _n.subtract(i,c,a),_n.subtract(s,l,a),_n.cross(i,i,s),_n.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?_n.copy(t,r(0)):(e.forEach((o,a)=>{_n.add(t,t,r(a))}),_n.normalize(t,t)),t[3]=_n.dot(t,e[0]),t};var Id=VA;const{EPS:La}=Nt,At=tt,GA=(t,e,n,i)=>{let s=At.subtract(At.create(),n,e),r=At.subtract(At.create(),i,e);At.length(s)<La&&(s=At.orthogonal(s,r)),At.length(r)<La&&(r=At.orthogonal(r,s));let o=At.cross(At.create(),s,r);At.length(o)<La&&(r=At.orthogonal(r,s),o=At.cross(o,s,r)),o=At.normalize(o,o);const a=At.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};var kA=GA;const WA=tt,$A=(t,e)=>{const n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return WA.fromValues(i,s,r)};var XA=$A;const qA=tt,YA=(t,e)=>qA.dot(t,e)-t[3];var Fd=YA;const jA=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;var Nd=jA;const KA=Ot,wt=tt,ZA=Id,JA=Ld,QA=(t,e,n)=>{const i=KA.isMirroring(n),s=wt.orthogonal(wt.create(),e),r=wt.cross(s,e,s),o=wt.cross(wt.create(),e,r);let a=wt.fromScalar(wt.create(),e[3]);wt.multiply(a,a,e);let c=wt.add(wt.create(),a,r),l=wt.add(wt.create(),a,o);return a=wt.transform(a,a,n),c=wt.transform(c,c,n),l=wt.transform(l,l,n),ZA(t,a,c,l),i&&JA(t,t),t};var ew=QA,Hc={clone:Rd,copy:Cd,create:yo,equals:Pd,flip:Ld,fromNormalAndPoint:Dd,fromValues:Ud,fromNoisyPoints:HA,fromPoints:Id,fromPointsRandom:kA,projectionOfPoint:XA,signedDistanceToPoint:Fd,toString:Nd,transform:ew};const fu=Hc,tw=Ts,nw=t=>{const e=t.vertices.slice().reverse(),n=tw(e);return t.plane&&(n.plane=fu.flip(fu.create(),t.plane)),n};var iw=nw;const sw=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));var Od=sw;const uu=Hc,vi=tt,rw=t=>ow(t.vertices),ow=t=>{const e=t.length;if(e>2){const n=uu.fromPoints(uu.create(),...t);let i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){const o=t[r];if(!aw(i,s,o,n))return!1;i=s,s=o}}return!0},aw=(t,e,n,i)=>{const s=vi.cross(vi.create(),vi.subtract(vi.create(),e,t),vi.subtract(vi.create(),n,e));return vi.dot(s,i)>=0};var Bd=rw;const hu=Hc,cw=t=>(t.plane||(t.plane=hu.fromPoints(hu.create(),...t.vertices)),t.plane);var Vc=cw;const lw=Vc,fw=t=>{const e=t.vertices.length;if(e<3)return 0;const n=t.vertices,i=lw(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let c=0,l=0,f=1,u=2;switch(a){case 1:for(f=1;f<e;f++)l=f-1,u=(f+1)%e,c+=n[f][1]*(n[u][2]-n[l][2]);c+=n[0][1]*(n[1][2]-n[e-1][2]),c/=2*i[0];break;case 2:for(f=1;f<e;f++)l=f-1,u=(f+1)%e,c+=n[f][2]*(n[u][0]-n[l][0]);c+=n[0][2]*(n[1][0]-n[e-1][0]),c/=2*i[1];break;case 3:default:for(f=1;f<e;f++)l=f-1,u=(f+1)%e,c+=n[f][0]*(n[u][1]-n[l][1]);c+=n[0][0]*(n[1][1]-n[e-1][1]),c/=2*i[2];break}return c};var zd=fw;const Is=tt,uw=t=>{const e=t.vertices,n=e.length,i=n===0?Is.create():Is.clone(e[0]),s=Is.clone(i);for(let r=1;r<n;r++)Is.min(i,i,e[r]),Is.max(s,s,e[r]);return[i,s]};var hw=uw;const dw=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];var pw=dw;const mw=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);var gw=mw;const _w=(t,e,n)=>{const[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};var vw=_w,xw={clone:Rd,copy:Cd,create:yo,dot:pw,equals:Pd,fromScalar:gw,fromValues:Ud,toString:Nd,transform:vw};const Mw=xw,du=new WeakMap,Sw=t=>{const e=du.get(t);if(e)return e;const n=t.vertices,i=Mw.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,c=s,l=s;n.forEach(p=>{s[0]>p[0]&&(s=p),r[1]>p[1]&&(r=p),o[2]>p[2]&&(o=p),a[0]<p[0]&&(a=p),c[1]<p[1]&&(c=p),l[2]<p[2]&&(l=p)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+c[1])*.5,i[2]=(o[2]+l[2])*.5;const f=i[0]-a[0],u=i[1]-c[1],h=i[2]-l[2];return i[3]=Math.sqrt(f*f+u*u+h*h),du.set(t,i),i};var Ew=Sw;const Da=tt,yw=t=>{let e=0;const n=t.vertices,i=Da.create();for(let s=0;s<n.length-2;s++)Da.cross(i,n[s+1],n[s+2]),e+=Da.dot(n[0],i);return e/=6,e};var Tw=yw;const bw=t=>t.vertices;var Aw=bw;const ww=tt,Rw=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${ww.toString(n)}, `}),e+="]",e};var Cw=Rw;const Pw=Ot,pu=tt,Lw=Ts,Dw=(t,e)=>{const n=e.vertices.map(i=>pu.transform(pu.create(),i,t));return Pw.isMirroring(t)&&n.reverse(),Lw(n)};var Uw=Dw;const Iw=Fd,{NEPS:Fw}=Nt,Nw=tt,Ow=Od,Bw=Bd,zw=zd,Hw=Vc,Vw=t=>{if(!Ow(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(zw(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(Nw.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!Bw(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){const e=Hw(t);t.vertices.forEach(n=>{const i=Math.abs(Iw(e,n));if(i>Fw)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};var Gw=Vw,gt={clone:SA,create:Ts,fromPoints:bA,fromPointsAndPlane:RA,invert:iw,isA:Od,isConvex:Bd,measureArea:zd,measureBoundingBox:hw,measureBoundingSphere:Ew,measureSignedVolume:Tw,plane:Vc,toPoints:Aw,toString:Cw,transform:Uw,validate:Gw};const kw=gA,Ww=ur,$w=gt,Xw=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const n=kw(t,{skipTriangulation:!0}).map(i=>{const s=i.map(r=>t[r]);return $w.create(s)});return Ww(n)};var qw=Xw;const Yw=gt,jw=ur,Kw=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const e=t.map((i,s)=>Yw.create(i));return jw(e)};var Zw=Kw;const Jw=tt,Qw=Ot,eR=gt,tR=ur,nR=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");const e=tR();e.transforms=Qw.clone(t.slice(1,17));const n=t[21];let i=22,s=t.length-n*3;for(;s<t.length;){const r=t[i];i++;const o=[];for(let a=0;a<r;a++)o.push(Jw.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(eR.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var iR=nR;const mu=Ot,sR=gt,rR=t=>(mu.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>sR.transform(t.transforms,e)),t.transforms=mu.create()),t);var oR=rR;const aR=oR,cR=t=>aR(t).polygons;var To=cR;const lR=gt,fR=ur,uR=To,hR=t=>{const n=uR(t).map(i=>lR.invert(i));return fR(n)};var dR=hR;const pR=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);var Hd=pR;const mR=gt,gR=To,_R=t=>gR(t).map(i=>mR.toPoints(i));var vR=_R;const xR=gt,MR=To,SR=t=>{const e=MR(t);let n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+xR.toString(i)+`
`}),n};var ER=SR;const yR=gt,TR=t=>{const e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((l,f)=>l+f.vertices.length,0);let r=[-1,-1,-1,-1];t.color&&(r=t.color);const o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,c=a+i;return e.forEach(l=>{const f=yR.toPoints(l);o[a]=f.length,a++;for(let u=0;u<f.length;u++){const h=f[u];o[c+0]=h[0],o[c+1]=h[1],o[c+2]=h[2],c+=3}}),o};var bR=TR;const gu=Ot,AR=(t,e)=>{const n=gu.multiply(gu.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var wR=AR;const RR=gt,CR=Hd,PR=t=>{if(!CR(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(RR.validate),LR(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},LR=t=>{const e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{const o=`${s}`,a=`${i[(r+1)%i.length]}`,c=`${o}/${a}`,l=e.has(c)?e.get(c):0;e.set(c,l+1)})});const n=[];if(e.forEach((i,s)=>{const r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};var DR=PR,hr={clone:Fb,create:ur,fromPointsConvex:qw,fromPoints:Zw,fromCompactBinary:iR,invert:dR,isA:Hd,toPoints:vR,toPolygons:To,toString:ER,toCompactBinary:bR,transform:wR,validate:DR};const UR=t=>Object.assign({},t);var Gc=UR;const{EPS:_u}=Nt,IR=qe,FR=Gc,NR=t=>{if(t.isClosed)return t;const e=FR(t);if(e.isClosed=!0,e.points.length>1){const n=e.points,i=n[0];let s=n[n.length-1];for(;IR.distance(i,s)<_u*_u&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};var Vd=NR;const OR=Ot,BR=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:OR.create()});var bo=BR;const{EPS:vu}=Nt,xu=qe,zR=Vd,HR=bo,VR=(t,e)=>{const n={closed:!1};let{closed:i}=Object.assign({},n,t),s=HR();if(s.points=e.map(r=>xu.clone(r)),s.points.length>1){const r=s.points[0],o=s.points[s.points.length-1];xu.distance(r,o)<vu*vu&&(i=!0)}return i===!0&&(s=zR(s)),s};var kc=VR;const Mu=Ot,Su=qe,GR=t=>(Mu.isIdentity(t.transforms)||(t.points=t.points.map(e=>Su.transform(Su.create(),e,t.transforms)),t.transforms=Mu.create()),t);var kR=GR;const WR=kR,$R=t=>WR(t).points;var bs=$R;const{TAU:Vr}=Nt,ot=qe,XR=kc,qR=bs,YR=(t,e)=>{const n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:c}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=ot.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(c<4)throw new Error("segments must be four or more");const l=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");const f=qR(e);if(f.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let u=s[0],h=s[1];const p=f[f.length-1];u=Math.round(u*l)/l,h=Math.round(h*l)/l,i=ot.fromValues(Math.round(i[0]*l)/l,Math.round(i[1]*l)/l);const _=!o;let g=[];if(u===0||h===0)g.push(i);else{u=Math.abs(u),h=Math.abs(h);const d=r,A=Math.cos(d),E=Math.sin(d),v=ot.subtract(ot.create(),p,i);ot.scale(v,v,.5);const S=Math.round((A*v[0]+E*v[1])*l)/l,y=Math.round((-E*v[0]+A*v[1])*l)/l,R=ot.fromValues(S,y),U=R[0]*R[0]/(u*u)+R[1]*R[1]/(h*h);if(U>1){const k=Math.sqrt(U);u*=k,h*=k,u=Math.round(u*l)/l,h=Math.round(h*l)/l}let M=Math.sqrt((u*u*h*h-u*u*R[1]*R[1]-h*h*R[0]*R[0])/(u*u*R[1]*R[1]+h*h*R[0]*R[0]));_===a&&(M=-M);const T=ot.fromValues(u*R[1]/h,-h*R[0]/u);ot.scale(T,T,M);let B=ot.fromValues(A*T[0]-E*T[1],E*T[0]+A*T[1]);B=ot.add(B,B,ot.scale(ot.create(),ot.add(ot.create(),p,i),.5));const $=ot.fromValues((R[0]-T[0])/u,(R[1]-T[1])/h),D=ot.fromValues((-R[0]-T[0])/u,(-R[1]-T[1])/h),O=ot.angleRadians($);let j=ot.angleRadians(D)-O;j=j%Vr,!_&&j>0?j-=Vr:_&&j<0&&(j+=Vr);let G=Math.ceil(Math.abs(j)/Vr*c)+1;G<1&&(G=1);for(let k=1;k<G;k++){const fe=O+k/G*j,oe=Math.cos(fe),Te=Math.sin(fe),ue=ot.fromValues(A*u*oe-E*h*Te,E*u*oe+A*h*Te);ot.add(ue,ue,B),g.push(ue)}G&&g.push(t.endpoint)}return g=f.concat(g),XR({},g)};var jR=YR;const KR=kc,ZR=bs,{equals:JR}=qe,QR=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{const r=ZR(i).slice();if(n.length>0&&r.length>0&&JR(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),KR({closed:e},n)};var Gd=QR;const eC=Gd,tC=bo,nC=(t,e)=>eC(e,tC(t));var kd=nC;const{TAU:iC}=Nt,Wt=qe,sC=qe,rC=kd,oC=bs,aC=(t,e)=>{const n={segments:16};let{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");const r=oC(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let y=r[r.length-2];if("lastBezierControlPoint"in e&&(y=e.lastBezierControlPoint),!Array.isArray(y))throw new Error("the given path must contain TWO or more points if given a null control point");const R=Wt.scale(Wt.create(),r[r.length-1],2);Wt.subtract(R,R,y),i[0]=R}i.unshift(r[r.length-1]);const a=i.length-1,c=[];let l=1;for(let y=0;y<=a;++y)y>0&&(l*=y),c.push(l);const f=[];for(let y=0;y<=a;++y){const R=c[a]/(c[y]*c[a-y]);f.push(R)}const u=Wt.create(),h=Wt.create(),p=sC.create(),_=y=>{let R=1,U=Math.pow(1-y,a);const M=y!==1?1/(1-y):1,T=Wt.create();for(let B=0;B<=a;++B){B===a&&(U=1);const $=f[B]*R*U,D=Wt.scale(u,i[B],$);Wt.add(T,T,D),R*=y,U*=M}return T},g=[],m=[],d=a+1;for(let y=0;y<d;++y){const R=y/(d-1),U=_(R);g.push(U),m.push(R)}let A=1;const E=iC/s,v=Math.sin(E);for(;A<g.length-1;){const y=Wt.subtract(u,g[A],g[A-1]);Wt.normalize(y,y);const R=Wt.subtract(h,g[A+1],g[A]);Wt.normalize(R,R);const U=Wt.cross(p,y,R);if(Math.abs(U[2])>v){const M=m[A-1],T=m[A+1],B=M+(T-M)*1/3,$=M+(T-M)*2/3,D=_(B),O=_($);g.splice(A,1,D,O),m.splice(A,1,B,$),A--,A<1&&(A=1)}else++A}g.shift();const S=rC(g,e);return S.lastBezierControlPoint=i[i.length-2],S};var cC=aC;const lC=qe,Eu=bs,fC=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;const n=Eu(t),i=Eu(e),s=n.length;let r=0;do{let o=!1;for(let a=0;a<s;a++)if(!lC.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};var uC=fC;const hC=Ot,dC=qe,pC=bo,mC=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");const e=pC();e.transforms=hC.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){const i=dC.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};var gC=mC;const _C=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);var Wd=_C;const vC=Gc,xC=t=>{const e=vC(t);return e.points=t.points.slice().reverse(),e};var MC=xC;const SC=qe,EC=bs,yC=t=>{const e=EC(t);let n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+SC.toString(i)+`,
`}),n+=`]
`,n};var TC=yC;const bC=t=>{const e=t.points,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){const o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};var AC=bC;const yu=Ot,wC=(t,e)=>{const n=yu.multiply(yu.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var RC=wC;const CC=qe,PC=Wd,LC=t=>{if(!PC(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if(CC.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};var DC=LC,Ao={appendArc:jR,appendBezier:cC,appendPoints:kd,clone:Gc,close:Vd,concat:Gd,create:bo,equals:uC,fromPoints:kc,fromCompactBinary:gC,isA:Wd,reverse:MC,toPoints:bs,toString:TC,toCompactBinary:AC,transform:RC,validate:DC},$d={geom2:Eo,geom3:hr,path2:Ao,poly3:gt};const UC=()=>[0,1,0];var Wc=UC;const IC=Wc,FC=t=>{const e=IC();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var NC=FC;const Ua=qe,OC=t=>{const e=Ua.normal(Ua.create(),t);return Ua.negate(e,e),e};var $c=OC;const Tu=qe,BC=t=>Tu.scale(Tu.create(),t,t[2]);var wo=BC;const Fs=qe,zC=$c,HC=wo,VC=(t,e)=>{const n=HC(t),i=zC(t),s=Fs.subtract(Fs.create(),e,n),r=Fs.dot(s,i);return Fs.scale(s,i,r),Fs.add(s,s,n),s};var GC=VC;const kC=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var Xd=kC;const WC=qe,$C=(t,e)=>{let n=WC.dot(e,t);return n=Math.abs(n-t[2]),n};var XC=$C;const qC=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var YC=qC;const Ns=qe,jC=(t,e,n)=>{const i=Ns.subtract(Ns.create(),n,e);Ns.normal(i,i),Ns.normalize(i,i);const s=Ns.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};var qd=jC;const KC=Wc,ZC=(t,e,n)=>{const i=KC();return i[0]=t,i[1]=e,i[2]=n,i};var Yd=ZC;const{NEPS:Ia}=Nt,JC=(t,e)=>Math.abs(t[0]-e[0])<=Ia&&Math.abs(t[1]-e[1])<=Ia&&Math.abs(t[2]-e[2])<=Ia;var QC=JC;const e2=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};var t2=e2;const n2=(t,e,n,i,s,r)=>{const a=1/(t*i-e*n);let c=s*i-e*r,l=-s*n+t*r;return c*=a,l*=a,[c,l]};var i2=n2,s2={solve2Linear:i2};const r2=qe,{solve2Linear:o2}=s2,a2=(t,e)=>{const n=o2(t[0],t[1],e[0],e[1],t[2],e[2]);return r2.clone(n)};var c2=a2;const bu=qe,l2=Xd,f2=Yd,u2=(t,e)=>{const n=bu.negate(bu.create(),e),i=-e[2];return l2(t,f2(n[0],n[1],i))};var h2=u2;const d2=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;var p2=d2;const Au=qe,m2=qd,g2=wo,_2=$c,v2=(t,e,n)=>{const i=g2(e),s=_2(e);return Au.transform(i,i,n),Au.transform(s,s,n),m2(t,i,s)};var x2=v2;const M2=wo,S2=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=M2(t)[0]),n};var E2=S2,y2={clone:NC,closestPoint:GC,copy:Xd,create:Wc,direction:$c,distanceToPoint:XC,equals:YC,fromPoints:qd,fromValues:Yd,intersectPointOfLines:c2,origin:wo,reverse:h2,toString:p2,transform:x2,xAtY:E2};const T2=go,En=qe,Os=tt,jd=Eo,Kd=hr,Zd=Ao,wu=gt,Ss=new WeakMap,b2=t=>{let e=Ss.get(t);if(e)return e;const n=Zd.toPoints(t);let i;n.length===0?i=En.create():i=En.clone(n[0]);let s=En.clone(i);return n.forEach(r=>{En.min(i,i,r),En.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],Ss.set(t,e),e},A2=t=>{let e=Ss.get(t);if(e)return e;const n=jd.toPoints(t);let i;n.length===0?i=En.create():i=En.clone(n[0]);let s=En.clone(i);return n.forEach(r=>{En.min(i,i,r),En.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],Ss.set(t,e),e},w2=t=>{let e=Ss.get(t);if(e)return e;const n=Kd.toPolygons(t);let i=Os.create();if(n.length>0){const r=wu.toPoints(n[0]);Os.copy(i,r[0])}let s=Os.clone(i);return n.forEach(r=>{wu.toPoints(r).forEach(o=>{Os.min(i,i,o),Os.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],Ss.set(t,e),e},R2=(...t)=>{if(t=T2(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>Zd.isA(n)?b2(n):jd.isA(n)?A2(n):Kd.isA(n)?w2(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};var C2=R2;const{EPS:P2}=Nt,L2=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return P2*n/e};var D2=L2;const U2=go,{geom2:I2,geom3:F2,path2:N2}=$d,Xc=D2,qc=C2,O2=t=>Xc(qc(t),2),B2=t=>Xc(qc(t),2),z2=t=>Xc(qc(t),3),H2=(...t)=>{if(t=U2(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>N2.isA(n)?O2(n):I2.isA(n)?B2(n):F2.isA(n)?z2(n):0);return e.length===1?e[0]:e};var Jd=H2;const V2=(t,e)=>t-e;var G2=V2;const k2=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){const r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};var W2=k2,$2={fnNumberSort:G2,insertSorted:W2};const Ru=Ot,X2=qe,at=tt,Qd=function(t,e){arguments.length<2&&(e=at.orthogonal(at.create(),t)),this.v=at.normalize(at.create(),at.cross(at.create(),t,e)),this.u=at.cross(at.create(),this.v,t),this.plane=t,this.planeorigin=at.scale(at.create(),t,t[3])};Qd.prototype={getProjectionMatrix:function(){return Ru.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const t=at.scale(at.create(),this.plane,this.plane[3]);return Ru.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return X2.fromValues(at.dot(t,this.u),at.dot(t,this.v))},to3D:function(t){const e=at.scale(at.create(),this.u,t[0]),n=at.scale(at.create(),this.v,t[1]),i=at.add(e,e,this.planeorigin);return at.add(n,n,i)}};var q2=Qd;const{EPS:Bn}=Nt,ii=y2,ln=qe,Y2=q2,is=t2,{insertSorted:j2,fnNumberSort:K2}=$2,Cu=gt,Z2=t=>{if(t.length<2)return t;const e=[],n=t.length,i=Cu.plane(t[0]),s=new Y2(i),r=[],o=[],a=new Map,c=new Map,l=new Map,f=10/Bn;for(let _=0;_<n;_++){const g=t[_];let m=[],d=g.vertices.length,A=-1;if(d>0){let E,v;for(let S=0;S<d;S++){let y=s.to2D(g.vertices[S]);const R=Math.floor(y[1]*f);let U;l.has(R)?U=l.get(R):l.has(R+1)?U=l.get(R+1):l.has(R-1)?U=l.get(R-1):(U=y[1],l.set(R,y[1])),y=ln.fromValues(y[0],U),m.push(y);const M=y[1];(S===0||M<E)&&(E=M,A=S),(S===0||M>v)&&(v=M);let T=c.get(M);T||(T={},c.set(M,T)),T[_]=!0}if(E>=v)m=[],d=0,A=-1;else{let S=a.get(E);S||(S=[],a.set(E,S)),S.push(_)}}m.reverse(),A=d-A-1,r.push(m),o.push(A)}const u=[];c.forEach((_,g)=>u.push(g)),u.sort(K2);let h=[],p=[];for(let _=0;_<u.length;_++){const g=[],m=u[_],d=c.get(m);for(let E=0;E<h.length;++E){const v=h[E],S=v.polygonindex;if(d[S]){const y=r[S],R=y.length;let U=v.leftvertexindex,M=v.rightvertexindex;for(;;){let B=U+1;if(B>=R&&(B=0),y[B][1]!==m)break;U=B}let T=M-1;if(T<0&&(T=R-1),y[T][1]===m&&(M=T),U!==v.leftvertexindex&&U===M)h.splice(E,1),--E;else{v.leftvertexindex=U,v.rightvertexindex=M,v.topleft=y[U],v.topright=y[M];let B=U+1;B>=R&&(B=0),v.bottomleft=y[B];let $=M-1;$<0&&($=R-1),v.bottomright=y[$]}}}let A;if(_>=u.length-1)h=[],A=null;else{A=Number(u[_+1]);const E=.5*(m+A),v=a.get(m);for(const S in v){const y=v[S],R=r[y],U=R.length,M=o[y];let T=M;for(;;){let H=T+1;if(H>=U&&(H=0),R[H][1]!==m||H===M)break;T=H}let B=M;for(;;){let H=B-1;if(H<0&&(H=U-1),R[H][1]!==m||H===T)break;B=H}let $=T+1;$>=U&&($=0);let D=B-1;D<0&&(D=U-1);const O={polygonindex:y,leftvertexindex:T,rightvertexindex:B,topleft:R[T],topright:R[B],bottomleft:R[$],bottomright:R[D]};j2(h,O,(H,j)=>{const G=is(H.topleft,H.bottomleft,E),k=is(j.topleft,j.bottomleft,E);return G>k?1:G<k?-1:0})}}for(const E in h){const v=h[E];let S=is(v.topleft,v.bottomleft,m);const y=ln.fromValues(S,m);S=is(v.topright,v.bottomright,m);const R=ln.fromValues(S,m);S=is(v.topleft,v.bottomleft,A);const U=ln.fromValues(S,A);S=is(v.topright,v.bottomright,A);const M=ln.fromValues(S,A),T={topleft:y,topright:R,bottomleft:U,bottomright:M,leftline:ii.fromPoints(ii.create(),y,U),rightline:ii.fromPoints(ii.create(),M,R)};if(g.length>0){const B=g[g.length-1],$=ln.distance(T.topleft,B.topright),D=ln.distance(T.bottomleft,B.bottomright);$<Bn&&D<Bn&&(T.topleft=B.topleft,T.leftline=B.leftline,T.bottomleft=B.bottomleft,g.splice(g.length-1,1))}g.push(T)}if(_>0){const E=new Set,v=new Set;for(let S=0;S<g.length;S++){const y=g[S];for(let R=0;R<p.length;R++)if(!v.has(R)){const U=p[R];if(ln.distance(U.bottomleft,y.topleft)<Bn&&ln.distance(U.bottomright,y.topright)<Bn){v.add(R);const M=ii.direction(y.leftline),T=ii.direction(U.leftline),B=M[0]-T[0],$=ii.direction(y.rightline),D=ii.direction(U.rightline),O=$[0]-D[0],H=Math.abs(B)<Bn,j=Math.abs(O)<Bn,G=H||B>=0,k=j||O>=0;G&&k&&(y.outpolygon=U.outpolygon,y.leftlinecontinues=H,y.rightlinecontinues=j,E.add(R));break}}}for(let S=0;S<p.length;S++)if(!E.has(S)){const y=p[S];y.outpolygon.rightpoints.push(y.bottomright),ln.distance(y.bottomright,y.bottomleft)>Bn&&y.outpolygon.leftpoints.push(y.bottomleft),y.outpolygon.leftpoints.reverse();const U=y.outpolygon.rightpoints.concat(y.outpolygon.leftpoints).map(T=>s.to3D(T)),M=Cu.fromPointsAndPlane(U,i);M.vertices.length&&e.push(M)}}for(let E=0;E<g.length;E++){const v=g[E];v.outpolygon?(v.leftlinecontinues||v.outpolygon.leftpoints.push(v.topleft),v.rightlinecontinues||v.outpolygon.rightpoints.push(v.topright)):(v.outpolygon={leftpoints:[],rightpoints:[]},v.outpolygon.leftpoints.push(v.topleft),ln.distance(v.topleft,v.topright)>Bn&&v.outpolygon.rightpoints.push(v.topright))}p=g}return e};var J2=Z2;const Pu=hr,Q2=gt,{NEPS:eP}=Nt,tP=J2,nP=t=>{if(t.isRetesselated)return t;const e=Pu.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:Q2.plane(r),index:o})),n=iP(e),i=[];n.forEach(r=>{if(Array.isArray(r)){const o=tP(r);i.push(...o)}else i.push(r)});const s=Pu.create(i);return s.isRetesselated=!0,s},iP=t=>{let e=[t];const n=[];for(let s=3;s>=0;s--){const r=[],o=s===3?15e-9:eP;e.forEach(a=>{a.sort(sP(s,o));let c=0;for(let l=1;l<a.length;l++)a[l].plane[s]-a[c].plane[s]>o&&(l-c===1?n.push(a[c]):r.push(a.slice(c,l)),c=l);a.length-c===1?n.push(a[c]):r.push(a.slice(c))}),e=r}const i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},sP=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;var rP=nP;const Fa=tt,ep=gt,oP=(t,e)=>{const n=Math.abs(ep.measureArea(e));return Number.isFinite(n)&&n>t},aP=(t,e)=>{let n=e.map(s=>{const r=s.vertices.map(c=>Fa.snap(Fa.create(),c,t)),o=[];for(let c=0;c<r.length;c++){const l=(c+1)%r.length;Fa.equals(r[c],r[l])||o.push(r[c])}const a=ep.create(o);return s.color&&(a.color=s.color),a});const i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>oP(i,s)),n};var tp=aP;const cP=QC,cs=tt,to=gt,lP=t=>{const e=to.toPoints(t),n=[];for(let i=0;i<e.length;i++){const s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){const s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},fP=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.set(n,e)},Na=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.delete(n)},uP=(t,e)=>{const n=`${e.v2}:${e.v1}`;return t.get(n)},hP=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2;const o=Lu(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;const a=Lu(i,s,r,n);return[o,a]},dP=cs.create(),pP=cs.create(),Lu=(t,e,n,i)=>{const s=cs.subtract(dP,e,t),r=cs.subtract(pP,n,e);return cs.cross(s,s,r),cs.dot(s,i)},mP=t=>{let e;const n=[];for(;t.next;){const i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=to.create(n)),e},gP=t=>{if(t.length<2)return t;const e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){const r=n.shift(),o=lP(r);for(let a=0;a<o.length;a++){const c=o[a],l=uP(i,c);if(l){const f=hP(c,l,e);if(f[0]>=0&&f[1]>=0){const u=l.next,h=c.next;c.prev.next=l.next,c.next.prev=l.prev,l.prev.next=c.next,l.next.prev=c.prev,c.v1=null,c.v2=null,c.next=null,c.prev=null,Na(i,l),l.v1=null,l.v2=null,l.next=null,l.prev=null;const p=(_,g,m)=>{const d={v1:m.v1,v2:g.v2,next:g.next,prev:m.prev};m.prev.next=d,g.next.prev=d,Na(_,g),g.v1=null,g.v2=null,g.next=null,g.prev=null,Na(_,m),m.v1=null,m.v2=null,m.next=null,m.prev=null};f[0]===0&&p(i,u,u.prev),f[1]===0&&p(i,h,h.prev)}}else c.next&&fP(i,c)}}const s=[];return i.forEach(r=>{const o=mP(r);o&&s.push(o)}),i.clear(),s},_P=(t,e)=>Math.abs(t[3]-e[3])<15e-8?cP(t,e):!1,vP=(t,e)=>{const n=[];e.forEach(s=>{const r=n.find(o=>_P(o[0],to.plane(s)));r?r[1].push(s):n.push([to.plane(s),[s]])});let i=[];return n.forEach(s=>{const r=s[1],o=gP(r);i=i.concat(o)}),i};var xP=vP;const Du=Nt,vn=tt,MP=gt,Pt=t=>`${t}`,Uu=(t,e,n,i,s,r)=>{const o=Pt(i),a=Pt(s),c=`${o}/${a}`,l=`${a}/${o}`;if(t.has(l))return qr(t,e,n,s,i,null),null;const f={vertex0:i,vertex1:s,polygonindex:r};return t.has(c)?t.get(c).push(f):t.set(c,[f]),e.has(o)?e.get(o).push(c):e.set(o,[c]),n.has(a)?n.get(a).push(c):n.set(a,[c]),c},qr=(t,e,n,i,s,r)=>{const o=Pt(i),a=Pt(s),c=`${o}/${a}`;let l=-1;const f=t.get(c);for(let u=0;u<f.length;u++){const h=f[u];let p=Pt(h.vertex0);if(p===o&&(p=Pt(h.vertex1),p===a&&!(r!==null&&h.polygonindex!==r))){l=u;break}}f.splice(l,1),f.length===0&&t.delete(c),l=e.get(o).indexOf(c),e.get(o).splice(l,1),e.get(o).length===0&&e.delete(o),l=n.get(a).indexOf(c),n.get(a).splice(l,1),n.get(a).length===0&&n.delete(a)},SP=t=>{const e=new Map;for(let n=0;n<t.length;n++){const i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=Pt(r);for(let a=0;a<s;a++){let c=a+1;c===s&&(c=0);const l=i.vertices[c],f=Pt(l),u=`${o}/${f}`,h=`${f}/${o}`;if(e.has(h)){const p=e.get(h);p.splice(-1,1),p.length===0&&e.delete(h)}else{const p={vertex0:r,vertex1:l,polygonindex:n};e.has(u)?e.get(u).push(p):e.set(u,[p])}r=l,o=f}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){const n=new Map,i=new Map,s=new Map;for(const[o,a]of e)s.set(o,!0),a.forEach(c=>{const l=Pt(c.vertex0),f=Pt(c.vertex1);n.has(l)?n.get(l).push(o):n.set(l,[o]),i.has(f)?i.get(f).push(o):i.set(f,[o])});const r=t.slice(0);for(;e.size!==0;){for(const a of e.keys())s.set(a,!0);let o=!1;for(;;){const a=Array.from(s.keys());if(a.length===0)break;const c=a[0];let l=!0;if(e.has(c)){const u=e.get(c)[0];for(let h=0;h<2;h++){const p=h===0?u.vertex0:u.vertex1,_=h===0?u.vertex1:u.vertex0,g=Pt(p),m=Pt(_);let d=[];h===0?i.has(g)&&(d=i.get(g)):n.has(g)&&(d=n.get(g));for(let A=0;A<d.length;A++){const E=d[A],v=e.get(E)[0],S=h===0?v.vertex0:v.vertex1;if(h===0?v.vertex1:v.vertex0,Pt(S)===m){qr(e,n,i,p,_,null),qr(e,n,i,_,p,null),l=!1,h=2,o=!0;break}else{const R=p,U=_,M=S,T=vn.subtract(vn.create(),M,R),B=vn.dot(vn.subtract(vn.create(),U,R),T)/vn.dot(T,T);if(B>0&&B<1){const $=vn.scale(vn.create(),T,B);if(vn.add($,$,R),vn.squaredDistance($,U)<Du.EPS*Du.EPS){const O=v.polygonindex,H=r[O],j=Pt(v.vertex1);let G=-1;for(let ue=0;ue<H.vertices.length;ue++)if(Pt(H.vertices[ue])===j){G=ue;break}const k=H.vertices.slice(0);k.splice(G,0,_);const fe=MP.create(k);r[O]=fe,qr(e,n,i,v.vertex0,v.vertex1,O);const oe=Uu(e,n,i,v.vertex0,_,O),Te=Uu(e,n,i,_,v.vertex1,O);oe!==null&&s.set(oe,!0),Te!==null&&s.set(Te,!0),l=!1,h=2,o=!0;break}}}}}}l&&s.delete(c)}if(!o)break}t=r}return e.clear(),t};var EP=SP;const Oa=tt,Ba=gt,yP=(t,e,n)=>{const i=e.vertices.length;if(i>3){if(i>4){const o=[0,0,0];e.vertices.forEach(a=>Oa.add(o,o,a)),Oa.snap(o,Oa.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){const c=Ba.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(c.color=e.color),n.push(c)}return}const s=Ba.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=Ba.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},TP=(t,e)=>{const n=[];return e.forEach(i=>{yP(t,i,n)}),n};var bP=TP;const AP=go,wP=Jd,RP=Eo,np=hr,CP=Ao,PP=tp,LP=xP,DP=EP,UP=bP,IP=(t,e)=>e,FP=(t,e)=>e,NP=(t,e)=>{const n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=wP(e);let a=np.toPolygons(e);i&&(a=PP(o,a)),s&&(a=LP(o,a)),r&&(a=DP(a),a=UP(o,a));const c=Object.assign({},e);return c.polygons=a,c},OP=(t,...e)=>{if(e=AP(e),e.length===0)throw new Error("wrong number of arguments");const n=e.map(i=>{if(CP.isA(i))return IP(t,i);if(RP.isA(i))return FP(t,i);if(np.isA(i))return NP(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};var BP=OP;const zP=go,yi=qe,cc=Eo,lc=hr,fc=Ao,Yc=Jd,HP=tp,VP=t=>{const e=Yc(t),i=fc.toPoints(t).map(s=>yi.snap(yi.create(),s,e));return fc.create(i)},GP=t=>{const e=Yc(t);let i=cc.toSides(t).map(s=>[yi.snap(yi.create(),s[0],e),yi.snap(yi.create(),s[1],e)]);return i=i.filter(s=>!yi.equals(s[0],s[1])),cc.create(i)},kP=t=>{const e=Yc(t),n=lc.toPolygons(t),i=HP(e,n);return lc.create(i)},WP=(...t)=>{if(t=zP(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>fc.isA(n)?VP(n):cc.isA(n)?GP(n):lc.isA(n)?kP(n):n);return e.length===1?e[0]:e};var $P=WP,XP={generalize:BP,snap:$P,retessellate:rP},Ro={geometries:$d,modifiers:XP};const{cuboid:qP}=Ro.primitives;function YP({width:t,length:e}){return[qP({size:[t,e,10]})]}const ip=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(ip(n)):e.concat(n),[]);var jP=ip;const KP=t=>Array.isArray(t)?t:t==null?[]:[t];var ZP=KP,JP={flatten:jP,toArray:ZP};const{geometries:za}=Ro,QP=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((m,d)=>{za.geom3.toPolygons(m).forEach(E=>{const v=E.vertices.length,S=v>=3?v-2:0;r+=S,o+=1})});const a=new Uint8Array(80);for(let m=0;m<80;m++)a[m]=65;const c=new Uint32Array(1);c[0]=r;const l=new ArrayBuffer(50*r),f=new Int8Array(l),u=new ArrayBuffer(50),h=new Int8Array(u),p=new Float32Array(u,0,12),_=new Uint16Array(u,48,1);let g=0;return t.forEach(m=>{za.geom3.toPolygons(m).forEach((A,E)=>{const v=A.vertices,S=v.length,y=za.poly3.plane(A);for(let R=0;R<S-2;R++){p[0]=y[0],p[1]=y[1],p[2]=y[2];let U=3;for(let M=0;M<3;M++){const T=M+(M>0?R:0),B=v[T];p[U++]=B[0],p[U++]=B[1],p[U++]=B[2]}_[0]=0,f.set(h,g),g+=50}e.statusCallback&&e.statusCallback({progress:100*E/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,c.buffer,l]};var eL={serializeBinary:QP};const{geometries:sp}=Ro,tL=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=`solid JSCAD
${nL(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},nL=(t,e)=>{const n=[];return t.forEach((i,s)=>{n.push(iL(i)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},iL=(t,e)=>{const n=[];return sp.geom3.toPolygons(t).forEach((s,r)=>{n.push(sL(s))}),n.join(`
`)},rp=t=>`${t[0]} ${t[1]} ${t[2]}`,Ha=t=>`vertex ${rp(t)}`,sL=t=>{const e=[];if(t.vertices.length>=3){const n=Ha(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){const s=`facet normal ${rp(sp.poly3.plane(t))}
outer loop
${n}
${Ha(t.vertices[i+1])}
${Ha(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};var rL={serializeText:tL};const{geometries:oL,modifiers:aL}=Ro,{flatten:cL,toArray:lL}=JP,{serializeBinary:fL}=eL,{serializeText:uL}=rL,hL="application/sla",dL=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=cL(e);let i=e.filter(s=>oL.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=lL(aL.generalize({snap:!0,triangulate:!0},i)),t.binary?fL(i,t):uL(i,t)};var pL={mimeType:hL,serialize:dL};const mL={props:["width","length"],data(){return{stlData:null}},created(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.mesh=null},mounted(){this.initScene(),this.regenerateAndLoad()},watch:{width(){this.regenerateAndLoad()},length(){this.regenerateAndLoad()}},methods:{generateSTL(t,e){try{const n=YP({width:t,length:e});return pL.serialize({binary:!1},n).join(`
`)}catch(n){return console.error("Error generating JSCAD geometry or STL:",n),null}},regenerateAndLoad(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null);const t=this.generateSTL(this.width,this.length);if(!t)return;this.stlData=t;const e=new Blob([t],{type:"text/plain"}),n=URL.createObjectURL(e);new J1().load(n,s=>{this.mesh=new $n(s,new k1({color:30719})),this.scene.add(this.mesh)},void 0,s=>{console.error("STLLoader error:",s)})},initScene(){this.scene=new G1,this.camera=new tn(75,500/500,.1,1e3),this.camera.position.set(0,100,200),this.camera.lookAt(0,0,0),this.renderer=new rd({canvas:this.$refs.canvas,antialias:!0}),this.renderer.setSize(500,500),this.renderer.setClearColor(15790320);const t=new Z1(4210752);this.scene.add(t);const e=new K1(16777215,1);e.position.set(1,1,1).normalize(),this.scene.add(e),this.controls=new Q1(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!0,this.controls.minDistance=50,this.controls.maxDistance=1e3,this.animate()},animate(){requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)},downloadSTL(){if(!this.stlData)return;const t=new Blob([this.stlData],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download="modified_model.stl",e.click()}}},gL={class:"mt-6 flex flex-col items-center"},_L={ref:"canvas",class:"border border-gray-300 rounded-md"};function vL(t,e,n,i,s,r){return Rc(),Cc("div",gL,[Mt("canvas",_L,null,512),Mt("button",{onClick:e[0]||(e[0]=(...o)=>r.downloadSTL&&r.downloadSTL(...o)),class:"mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"}," Download STL ")])}const xL=Lc(mL,[["render",vL],["__scopeId","data-v-362f0f6f"]]),ML={name:"App",components:{InputForm:Vg,ModelViewer:xL},data(){return{width:51,length:68}},methods:{updateDimensions(t){this.width=t.width,this.length=t.length}}},SL={class:"max-w-2xl mx-auto min-h-screen flex flex-col justify-center items-center p-6"},EL={class:"w-full bg-white rounded shadow p-6"};function yL(t,e,n,i,s,r){const o=il("InputForm"),a=il("ModelViewer");return Rc(),Cc("div",SL,[e[0]||(e[0]=Mt("div",{class:"mb-8 text-center"},[Mt("h1",{class:"text-4xl font-bold mb-2"},"SynthArmor"),Mt("p",{class:"text-gray-600"}," Modify the dimensions of a 3D model and download your custom design instantly. ")],-1)),Mt("div",EL,[Xn(o,{onUpdateDimensions:r.updateDimensions},null,8,["onUpdateDimensions"]),Xn(a,{width:s.width,length:s.length},null,8,["width","length"])])])}const TL=Lc(ML,[["render",yL],["__scopeId","data-v-53cd1fc0"]]);Ig(TL).mount("#app");
