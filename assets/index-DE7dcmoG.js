(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _l(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const nt={},Ds=[],Nn=()=>{},kg=()=>!1,Zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vl=t=>t.startsWith("onUpdate:"),Xt=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wg=Object.prototype.hasOwnProperty,Ke=(t,e)=>Wg.call(t,e),Be=Array.isArray,xr=t=>Jo(t)==="[object Map]",Xg=t=>Jo(t)==="[object Set]",Oe=t=>typeof t=="function",bt=t=>typeof t=="string",qs=t=>typeof t=="symbol",mt=t=>t!==null&&typeof t=="object",Qd=t=>(mt(t)||Oe(t))&&Oe(t.then)&&Oe(t.catch),qg=Object.prototype.toString,Jo=t=>qg.call(t),Yg=t=>Jo(t).slice(8,-1),jg=t=>Jo(t)==="[object Object]",Ml=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mr=_l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kg=/-(\w)/g,mn=Qo(t=>t.replace(Kg,(e,n)=>n?n.toUpperCase():"")),Zg=/\B([A-Z])/g,es=Qo(t=>t.replace(Zg,"-$1").toLowerCase()),ea=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ta=Qo(t=>t?`on${ea(t)}`:""),Wi=(t,e)=>!Object.is(t,e),Io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ep=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Gc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cu;const ta=()=>cu||(cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function El(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=bt(i)?t0(i):El(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(bt(t)||mt(t))return t}const Jg=/;(?![^(]*\))/g,Qg=/:([^]+)/,e0=/\/\*[^]*?\*\//g;function t0(t){const e={};return t.replace(e0,"").split(Jg).forEach(n=>{if(n){const i=n.split(Qg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Sl(t){let e="";if(bt(t))e=t;else if(Be(t))for(let n=0;n<t.length;n++){const i=Sl(t[n]);i&&(e+=i+" ")}else if(mt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const n0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i0=_l(n0);function tp(t){return!!t||t===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class s0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rn;try{return rn=this,e()}finally{rn=n}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function r0(){return rn}let st;const wa=new WeakSet;class np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&rn.active&&rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lu(this),rp(this);const e=st,n=Tn;st=this,Tn=!0;try{return this.fn()}finally{op(this),st=e,Tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tl(e);this.deps=this.depsTail=void 0,lu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$c(this)&&this.run()}get dirty(){return $c(this)}}let ip=0,Er,Sr;function sp(t,e=!1){if(t.flags|=8,e){t.next=Sr,Sr=t;return}t.next=Er,Er=t}function yl(){ip++}function bl(){if(--ip>0)return;if(Sr){let e=Sr;for(Sr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Er;){let e=Er;for(Er=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function rp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function op(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Tl(i),o0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function $c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ap(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ap(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Rr))return;t.globalVersion=Rr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!$c(t)){t.flags&=-3;return}const n=st,i=Tn;st=t,Tn=!0;try{rp(t);const s=t.fn(t._value);(e.version===0||Wi(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{st=n,Tn=i,op(t),t.flags&=-3}}function Tl(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Tl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function o0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tn=!0;const cp=[];function Ti(){cp.push(Tn),Tn=!1}function wi(){const t=cp.pop();Tn=t===void 0?!0:t}function lu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=st;st=void 0;try{e()}finally{st=n}}}let Rr=0;class a0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!st||!Tn||st===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==st)n=this.activeLink=new a0(st,this),st.deps?(n.prevDep=st.depsTail,st.depsTail.nextDep=n,st.depsTail=n):st.deps=st.depsTail=n,up(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=st.depsTail,n.nextDep=void 0,st.depsTail.nextDep=n,st.depsTail=n,st.deps===n&&(st.deps=i)}return n}trigger(e){this.version++,Rr++,this.notify(e)}notify(e){yl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bl()}}}function up(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)up(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const kc=new WeakMap,Xi=Symbol(""),Wc=Symbol(""),Pr=Symbol("");function Dt(t,e,n){if(Tn&&st){let i=kc.get(t);i||kc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new lp),s.map=i,s.key=n),s.track()}}function ei(t,e,n,i,s,r){const o=kc.get(t);if(!o){Rr++;return}const a=c=>{c&&c.trigger()};if(yl(),e==="clear")o.forEach(a);else{const c=Be(t),l=c&&Ml(n);if(c&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Pr||!qs(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Pr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Xi)),xr(t)&&a(o.get(Wc)));break;case"delete":c||(a(o.get(Xi)),xr(t)&&a(o.get(Wc)));break;case"set":xr(t)&&a(o.get(Xi));break}}bl()}function ss(t){const e=Je(t);return e===t?e:(Dt(e,"iterate",Pr),Fn(t)?e:e.map(on))}function wl(t){return Dt(t=Je(t),"iterate",Pr),t}const c0={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,on)},concat(...t){return ss(this).concat(...t.map(e=>Be(e)?ss(e):e))},entries(){return Aa(this,"entries",t=>(t[1]=on(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(on),arguments)},find(t,e){return zn(this,"find",t,e,on,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,on,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ra(this,"includes",t)},indexOf(...t){return Ra(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Ra(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return er(this,"pop")},push(...t){return er(this,"push",t)},reduce(t,...e){return uu(this,"reduce",t,e)},reduceRight(t,...e){return uu(this,"reduceRight",t,e)},shift(){return er(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return er(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return er(this,"unshift",t)},values(){return Aa(this,"values",on)}};function Aa(t,e,n){const i=wl(t),s=i[e]();return i!==t&&!Fn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const l0=Array.prototype;function zn(t,e,n,i,s,r){const o=wl(t),a=o!==t&&!Fn(t),c=o[e];if(c!==l0[e]){const f=c.apply(t,r);return a?on(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,on(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,i);return a&&s?s(u):u}function uu(t,e,n,i){const s=wl(t);let r=n;return s!==t&&(Fn(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,on(a),c,t)}),s[e](r,...i)}function Ra(t,e,n){const i=Je(t);Dt(i,"iterate",Pr);const s=i[e](...n);return(s===-1||s===!1)&&Cl(n[0])?(n[0]=Je(n[0]),i[e](...n)):s}function er(t,e,n=[]){Ti(),yl();const i=Je(t)[e].apply(t,n);return bl(),wi(),i}const u0=_l("__proto__,__v_isRef,__isVue"),fp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qs));function f0(t){qs(t)||(t=String(t));const e=Je(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?E0:gp:r?mp:pp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let c;if(o&&(c=c0[n]))return c;if(n==="hasOwnProperty")return f0}const a=Reflect.get(e,n,Wt(e)?e:i);return(qs(n)?fp.has(n):u0(n))||(s||Dt(e,"get",n),r)?a:Wt(a)?o&&Ml(n)?a:a.value:mt(a)?s?_p(a):Rl(a):a}}class dp extends hp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=Bs(r);if(!Fn(i)&&!Bs(i)&&(r=Je(r),i=Je(i)),!Be(e)&&Wt(r)&&!Wt(i))return c?!1:(r.value=i,!0)}const o=Be(e)&&Ml(n)?Number(n)<e.length:Ke(e,n),a=Reflect.set(e,n,i,Wt(e)?e:s);return e===Je(s)&&(o?Wi(i,r)&&ei(e,"set",n,i):ei(e,"add",n,i)),a}deleteProperty(e,n){const i=Ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&ei(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!qs(n)||!fp.has(n))&&Dt(e,"has",n),i}ownKeys(e){return Dt(e,"iterate",Be(e)?"length":Xi),Reflect.ownKeys(e)}}class h0 extends hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const d0=new dp,p0=new h0,m0=new dp(!0);const Xc=t=>t,Yr=t=>Reflect.getPrototypeOf(t);function g0(t,e,n){return function(...i){const s=this.__v_raw,r=Je(s),o=xr(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Xc:e?qc:on;return!e&&Dt(r,"iterate",c?Wc:Xi),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function jr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _0(t,e){const n={get(s){const r=this.__v_raw,o=Je(r),a=Je(s);t||(Wi(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:c}=Yr(o),l=e?Xc:t?qc:on;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Dt(Je(s),"iterate",Xi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Je(r),a=Je(s);return t||(Wi(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=Je(a),l=e?Xc:t?qc:on;return!t&&Dt(c,"iterate",Xi),a.forEach((u,f)=>s.call(r,l(u),l(f),o))}};return Xt(n,t?{add:jr("add"),set:jr("set"),delete:jr("delete"),clear:jr("clear")}:{add(s){!e&&!Fn(s)&&!Bs(s)&&(s=Je(s));const r=Je(this);return Yr(r).has.call(r,s)||(r.add(s),ei(r,"add",s,s)),this},set(s,r){!e&&!Fn(r)&&!Bs(r)&&(r=Je(r));const o=Je(this),{has:a,get:c}=Yr(o);let l=a.call(o,s);l||(s=Je(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?Wi(r,u)&&ei(o,"set",s,r):ei(o,"add",s,r),this},delete(s){const r=Je(this),{has:o,get:a}=Yr(r);let c=o.call(r,s);c||(s=Je(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&ei(r,"delete",s,void 0),l},clear(){const s=Je(this),r=s.size!==0,o=s.clear();return r&&ei(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=g0(s,t,e)}),n}function Al(t,e){const n=_0(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ke(n,s)&&s in i?n:i,s,r)}const v0={get:Al(!1,!1)},x0={get:Al(!1,!0)},M0={get:Al(!0,!1)};const pp=new WeakMap,mp=new WeakMap,gp=new WeakMap,E0=new WeakMap;function S0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function y0(t){return t.__v_skip||!Object.isExtensible(t)?0:S0(Yg(t))}function Rl(t){return Bs(t)?t:Pl(t,!1,d0,v0,pp)}function b0(t){return Pl(t,!1,m0,x0,mp)}function _p(t){return Pl(t,!0,p0,M0,gp)}function Pl(t,e,n,i,s){if(!mt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=y0(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function yr(t){return Bs(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Bs(t){return!!(t&&t.__v_isReadonly)}function Fn(t){return!!(t&&t.__v_isShallow)}function Cl(t){return t?!!t.__v_raw:!1}function Je(t){const e=t&&t.__v_raw;return e?Je(e):t}function T0(t){return!Ke(t,"__v_skip")&&Object.isExtensible(t)&&ep(t,"__v_skip",!0),t}const on=t=>mt(t)?Rl(t):t,qc=t=>mt(t)?_p(t):t;function Wt(t){return t?t.__v_isRef===!0:!1}function w0(t){return Wt(t)?t.value:t}const A0={get:(t,e,n)=>e==="__v_raw"?t:w0(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Wt(s)&&!Wt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function vp(t){return yr(t)?t:new Proxy(t,A0)}class R0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new lp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return sp(this,!0),!0}get value(){const e=this.dep.track();return ap(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function P0(t,e,n=!1){let i,s;return Oe(t)?i=t:(i=t.get,s=t.set),new R0(i,s,n)}const Kr={},Vo=new WeakMap;let Oi;function C0(t,e=!1,n=Oi){if(n){let i=Vo.get(n);i||Vo.set(n,i=[]),i.push(t)}}function L0(t,e,n=nt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=v=>s?v:Fn(v)||s===!1||s===0?ti(v,1):ti(v);let u,f,h,d,_=!1,g=!1;if(Wt(t)?(f=()=>t.value,_=Fn(t)):yr(t)?(f=()=>l(t),_=!0):Be(t)?(g=!0,_=t.some(v=>yr(v)||Fn(v)),f=()=>t.map(v=>{if(Wt(v))return v.value;if(yr(v))return l(v);if(Oe(v))return c?c(v,2):v()})):Oe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){Ti();try{h()}finally{wi()}}const v=Oi;Oi=u;try{return c?c(t,3,[d]):t(d)}finally{Oi=v}}:f=Nn,e&&s){const v=f,M=s===!0?1/0:s;f=()=>ti(v(),M)}const m=r0(),p=()=>{u.stop(),m&&m.active&&xl(m.effects,u)};if(r&&e){const v=e;e=(...M)=>{v(...M),p()}}let y=g?new Array(t.length).fill(Kr):Kr;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const M=u.run();if(s||_||(g?M.some((b,w)=>Wi(b,y[w])):Wi(M,y))){h&&h();const b=Oi;Oi=u;try{const w=[M,y===Kr?void 0:g&&y[0]===Kr?[]:y,d];c?c(e,3,w):e(...w),y=M}finally{Oi=b}}}else u.run()};return a&&a(E),u=new np(f),u.scheduler=o?()=>o(E,!1):E,d=v=>C0(v,!1,u),h=u.onStop=()=>{const v=Vo.get(u);if(v){if(c)c(v,4);else for(const M of v)M();Vo.delete(u)}},e?i?E(!0):y=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ti(t,e=1/0,n){if(e<=0||!mt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Wt(t))ti(t.value,e,n);else if(Be(t))for(let i=0;i<t.length;i++)ti(t[i],e,n);else if(Xg(t)||xr(t))t.forEach(i=>{ti(i,e,n)});else if(jg(t)){for(const i in t)ti(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ti(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Br(t,e,n,i){try{return i?t(...i):t()}catch(s){na(s,e,n)}}function On(t,e,n,i){if(Oe(t)){const s=Br(t,e,n,i);return s&&Qd(s)&&s.catch(r=>{na(r,e,n)}),s}if(Be(t)){const s=[];for(let r=0;r<t.length;r++)s.push(On(t[r],e,n,i));return s}}function na(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(r){Ti(),Br(r,null,10,[t,c,l]),wi();return}}D0(t,n,s,i,o)}function D0(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const $t=[];let Ln=-1;const Us=[];let Mi=null,As=0;const xp=Promise.resolve();let Go=null;function U0(t){const e=Go||xp;return t?e.then(this?t.bind(this):t):e}function I0(t){let e=Ln+1,n=$t.length;for(;e<n;){const i=e+n>>>1,s=$t[i],r=Cr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Ll(t){if(!(t.flags&1)){const e=Cr(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=Cr(n)?$t.push(t):$t.splice(I0(e),0,t),t.flags|=1,Mp()}}function Mp(){Go||(Go=xp.then(Sp))}function N0(t){Be(t)?Us.push(...t):Mi&&t.id===-1?Mi.splice(As+1,0,t):t.flags&1||(Us.push(t),t.flags|=1),Mp()}function fu(t,e,n=Ln+1){for(;n<$t.length;n++){const i=$t[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;$t.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ep(t){if(Us.length){const e=[...new Set(Us)].sort((n,i)=>Cr(n)-Cr(i));if(Us.length=0,Mi){Mi.push(...e);return}for(Mi=e,As=0;As<Mi.length;As++){const n=Mi[As];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mi=null,As=0}}const Cr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sp(t){try{for(Ln=0;Ln<$t.length;Ln++){const e=$t[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Br(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<$t.length;Ln++){const e=$t[Ln];e&&(e.flags&=-2)}Ln=-1,$t.length=0,Ep(),Go=null,($t.length||Us.length)&&Sp()}}let an=null,yp=null;function $o(t){const e=an;return an=t,yp=t&&t.type.__scopeId||null,e}function F0(t,e=an,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&yu(-1);const r=$o(e);let o;try{o=t(...s)}finally{$o(r),i._d&&yu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function hu(t,e){if(an===null)return t;const n=oa(an),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=nt]=e[s];r&&(Oe(r)&&(r={mounted:r,updated:r}),r.deep&&ti(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ci(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Ti(),On(c,n,8,[t.el,a,t,e]),wi())}}const O0=Symbol("_vte"),B0=t=>t.__isTeleport;function Dl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Dl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ko(t,e,n,i,s=!1){if(Be(t)){t.forEach((_,g)=>ko(_,e&&(Be(e)?e[g]:e),n,i,s));return}if(br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ko(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?oa(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState,h=Je(f),d=f===nt?()=>!1:_=>Ke(h,_);if(l!=null&&l!==c&&(bt(l)?(u[l]=null,d(l)&&(f[l]=null)):Wt(l)&&(l.value=null)),Oe(c))Br(c,a,12,[o,u]);else{const _=bt(c),g=Wt(c);if(_||g){const m=()=>{if(t.f){const p=_?d(c)?f[c]:u[c]:c.value;s?Be(p)&&xl(p,r):Be(p)?p.includes(r)||p.push(r):_?(u[c]=[r],d(c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else _?(u[c]=o,d(c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,sn(m,n)):m()}}}ta().requestIdleCallback;ta().cancelIdleCallback;const br=t=>!!t.type.__asyncLoader,Tp=t=>t.type.__isKeepAlive;function z0(t,e){wp(t,"a",e)}function H0(t,e){wp(t,"da",e)}function wp(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ia(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Tp(s.parent.vnode)&&V0(i,e,n,s),s=s.parent}}function V0(t,e,n,i){const s=ia(e,t,i,!0);Ap(()=>{xl(i[e],s)},n)}function ia(t,e,n=Ut,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ti();const a=zr(n),c=On(e,n,t,o);return a(),wi(),c});return i?s.unshift(r):s.push(r),r}}const ci=t=>(e,n=Ut)=>{(!Ur||t==="sp")&&ia(t,(...i)=>e(...i),n)},G0=ci("bm"),$0=ci("m"),k0=ci("bu"),W0=ci("u"),X0=ci("bum"),Ap=ci("um"),q0=ci("sp"),Y0=ci("rtg"),j0=ci("rtc");function K0(t,e=Ut){ia("ec",t,e)}const Z0="components";function du(t,e){return Q0(Z0,t,!0,e)||t}const J0=Symbol.for("v-ndc");function Q0(t,e,n=!0,i=!1){const s=an||Ut;if(s){const r=s.type;{const a=G_(r,!1);if(a&&(a===e||a===mn(e)||a===ea(mn(e))))return r}const o=pu(s[t]||r[t],e)||pu(s.appContext[t],e);return!o&&i?r:o}}function pu(t,e){return t&&(t[e]||t[mn(e)]||t[ea(mn(e))])}const Yc=t=>t?Yp(t)?oa(t):Yc(t.parent):null,Tr=Xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ll(t.update)}),$nextTick:t=>t.n||(t.n=U0.bind(t.proxy)),$watch:t=>E_.bind(t)}),Pa=(t,e)=>t!==nt&&!t.__isScriptSetup&&Ke(t,e),e_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Pa(i,e))return o[e]=1,i[e];if(s!==nt&&Ke(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Ke(l,e))return o[e]=3,r[e];if(n!==nt&&Ke(n,e))return o[e]=4,n[e];jc&&(o[e]=0)}}const u=Tr[e];let f,h;if(u)return e==="$attrs"&&Dt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==nt&&Ke(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Ke(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Pa(s,e)?(s[e]=n,!0):i!==nt&&Ke(i,e)?(i[e]=n,!0):Ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==nt&&Ke(t,o)||Pa(e,o)||(a=r[0])&&Ke(a,o)||Ke(i,o)||Ke(Tr,o)||Ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mu(t){return Be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jc=!0;function t_(t){const e=Pp(t),n=t.proxy,i=t.ctx;jc=!1,e.beforeCreate&&gu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:E,unmounted:v,render:M,renderTracked:b,renderTriggered:w,errorCaptured:D,serverPrefetch:x,expose:T,inheritAttrs:I,components:z,directives:U,filters:O}=e;if(l&&n_(l,i,null),o)for(const k in o){const W=o[k];Oe(W)&&(i[k]=W.bind(n))}if(s){const k=s.call(n,n);mt(k)&&(t.data=Rl(k))}if(jc=!0,r)for(const k in r){const W=r[k],ue=Oe(W)?W.bind(n,n):Oe(W.get)?W.get.bind(n,n):Nn,oe=!Oe(W)&&Oe(W.set)?W.set.bind(n):Nn,Te=k_({get:ue,set:oe});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>Te.value,set:fe=>Te.value=fe})}if(a)for(const k in a)Rp(a[k],i,n,k);if(c){const k=Oe(c)?c.call(n):c;Reflect.ownKeys(k).forEach(W=>{c_(W,k[W])})}u&&gu(u,t,"c");function G(k,W){Be(W)?W.forEach(ue=>k(ue.bind(n))):W&&k(W.bind(n))}if(G(G0,f),G($0,h),G(k0,d),G(W0,_),G(z0,g),G(H0,m),G(K0,D),G(j0,b),G(Y0,w),G(X0,y),G(Ap,v),G(q0,x),Be(T))if(T.length){const k=t.exposed||(t.exposed={});T.forEach(W=>{Object.defineProperty(k,W,{get:()=>n[W],set:ue=>n[W]=ue})})}else t.exposed||(t.exposed={});M&&t.render===Nn&&(t.render=M),I!=null&&(t.inheritAttrs=I),z&&(t.components=z),U&&(t.directives=U),x&&bp(t)}function n_(t,e,n=Nn){Be(t)&&(t=Kc(t));for(const i in t){const s=t[i];let r;mt(s)?"default"in s?r=No(s.from||i,s.default,!0):r=No(s.from||i):r=No(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function gu(t,e,n){On(Be(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,i){let s=i.includes(".")?$p(n,i):()=>n[i];if(bt(t)){const r=e[t];Oe(r)&&La(s,r)}else if(Oe(t))La(s,t.bind(n));else if(mt(t))if(Be(t))t.forEach(r=>Rp(r,e,n,i));else{const r=Oe(t.handler)?t.handler.bind(n):e[t.handler];Oe(r)&&La(s,r,t)}}function Pp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Wo(c,l,o,!0)),Wo(c,e,o)),mt(e)&&r.set(e,c),c}function Wo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Wo(t,r,n,!0),s&&s.forEach(o=>Wo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=i_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const i_={data:_u,props:vu,emits:vu,methods:pr,computed:pr,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:pr,directives:pr,watch:r_,provide:_u,inject:s_};function _u(t,e){return e?t?function(){return Xt(Oe(t)?t.call(this,this):t,Oe(e)?e.call(this,this):e)}:e:t}function s_(t,e){return pr(Kc(t),Kc(e))}function Kc(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function zt(t,e){return t?[...new Set([].concat(t,e))]:e}function pr(t,e){return t?Xt(Object.create(null),t,e):e}function vu(t,e){return t?Be(t)&&Be(e)?[...new Set([...t,...e])]:Xt(Object.create(null),mu(t),mu(e??{})):e}function r_(t,e){if(!t)return e;if(!e)return t;const n=Xt(Object.create(null),t);for(const i in e)n[i]=zt(t[i],e[i]);return n}function Cp(){return{app:null,config:{isNativeTag:kg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o_=0;function a_(t,e){return function(i,s=null){Oe(i)||(i=Xt({},i)),s!=null&&!mt(s)&&(s=null);const r=Cp(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:o_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:W_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Oe(u.install)?(o.add(u),u.install(l,...f)):Oe(u)&&(o.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,h){if(!c){const d=l._ceVNode||si(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(d,u,h),c=!0,l._container=u,u.__vue_app__=l,oa(d.component)}},onUnmount(u){a.push(u)},unmount(){c&&(On(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){const f=Is;Is=l;try{return u()}finally{Is=f}}};return l}}let Is=null;function c_(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function No(t,e,n=!1){const i=Ut||an;if(i||Is){const s=Is?Is._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Oe(e)?e.call(i&&i.proxy):e}}const Lp={},Dp=()=>Object.create(Lp),Up=t=>Object.getPrototypeOf(t)===Lp;function l_(t,e,n,i=!1){const s={},r=Dp();t.propsDefaults=Object.create(null),Ip(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:b0(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function u_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Je(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(sa(t.emitsOptions,h))continue;const d=e[h];if(c)if(Ke(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const _=mn(h);s[_]=Zc(c,a,_,d,t,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{Ip(t,e,s,r)&&(l=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=es(f))===f||!Ke(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Zc(c,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Ke(e,f))&&(delete r[f],l=!0)}l&&ei(t.attrs,"set","")}function Ip(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mr(c))continue;const l=e[c];let u;s&&Ke(s,u=mn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:sa(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=Je(n),l=a||nt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Zc(s,c,f,l[f],t,!Ke(l,f))}}return o}function Zc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const u=zr(s);i=l[n]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===es(n))&&(i=!0))}return i}const f_=new WeakMap;function Np(t,e,n=!1){const i=n?f_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Oe(t)){const u=f=>{c=!0;const[h,d]=Np(f,e,!0);Xt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return mt(t)&&i.set(t,Ds),Ds;if(Be(r))for(let u=0;u<r.length;u++){const f=mn(r[u]);xu(f)&&(o[f]=nt)}else if(r)for(const u in r){const f=mn(u);if(xu(f)){const h=r[u],d=o[f]=Be(h)||Oe(h)?{type:h}:Xt({},h),_=d.type;let g=!1,m=!0;if(Be(_))for(let p=0;p<_.length;++p){const y=_[p],E=Oe(y)&&y.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(m=!1)}else g=Oe(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||Ke(d,"default"))&&a.push(f)}}const l=[o,a];return mt(t)&&i.set(t,l),l}function xu(t){return t[0]!=="$"&&!Mr(t)}const Fp=t=>t[0]==="_"||t==="$stable",Ul=t=>Be(t)?t.map(Dn):[Dn(t)],h_=(t,e,n)=>{if(e._n)return e;const i=F0((...s)=>Ul(e(...s)),n);return i._c=!1,i},Op=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Fp(s))continue;const r=t[s];if(Oe(r))e[s]=h_(s,r,i);else if(r!=null){const o=Ul(r);e[s]=()=>o}}},Bp=(t,e)=>{const n=Ul(e);t.slots.default=()=>n},zp=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},d_=(t,e,n)=>{const i=t.slots=Dp();if(t.vnode.shapeFlag&32){const s=e._;s?(zp(i,e,n),n&&ep(i,"_",s,!0)):Op(e,i)}else e&&Bp(t,e)},p_=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:zp(s,e,n):(r=!e.$stable,Op(e,s)),o=e}else e&&(Bp(t,e),o={default:1});if(r)for(const a in s)!Fp(a)&&o[a]==null&&delete s[a]},sn=R_;function m_(t){return g_(t)}function g_(t,e){const n=ta();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Nn,insertStaticContent:_}=t,g=(P,C,V,ie=null,Q=null,se=null,de=void 0,re=null,le=!!C.dynamicChildren)=>{if(P===C)return;P&&!tr(P,C)&&(ie=N(P),fe(P,Q,se,!0),P=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:ae,ref:A,shapeFlag:S}=C;switch(ae){case ra:m(P,C,V,ie);break;case Lr:p(P,C,V,ie);break;case Da:P==null&&y(C,V,ie,de);break;case Qn:z(P,C,V,ie,Q,se,de,re,le);break;default:S&1?M(P,C,V,ie,Q,se,de,re,le):S&6?U(P,C,V,ie,Q,se,de,re,le):(S&64||S&128)&&ae.process(P,C,V,ie,Q,se,de,re,le,me)}A!=null&&Q&&ko(A,P&&P.ref,se,C||P,!C)},m=(P,C,V,ie)=>{if(P==null)i(C.el=a(C.children),V,ie);else{const Q=C.el=P.el;C.children!==P.children&&l(Q,C.children)}},p=(P,C,V,ie)=>{P==null?i(C.el=c(C.children||""),V,ie):C.el=P.el},y=(P,C,V,ie)=>{[P.el,P.anchor]=_(P.children,C,V,ie,P.el,P.anchor)},E=({el:P,anchor:C},V,ie)=>{let Q;for(;P&&P!==C;)Q=h(P),i(P,V,ie),P=Q;i(C,V,ie)},v=({el:P,anchor:C})=>{let V;for(;P&&P!==C;)V=h(P),s(P),P=V;s(C)},M=(P,C,V,ie,Q,se,de,re,le)=>{C.type==="svg"?de="svg":C.type==="math"&&(de="mathml"),P==null?b(C,V,ie,Q,se,de,re,le):x(P,C,Q,se,de,re,le)},b=(P,C,V,ie,Q,se,de,re)=>{let le,ae;const{props:A,shapeFlag:S,transition:B,dirs:j}=P;if(le=P.el=o(P.type,se,A&&A.is,A),S&8?u(le,P.children):S&16&&D(P.children,le,null,ie,Q,Ca(P,se),de,re),j&&Ci(P,null,ie,"created"),w(le,P,P.scopeId,de,ie),A){for(const he in A)he!=="value"&&!Mr(he)&&r(le,he,null,A[he],se,ie);"value"in A&&r(le,"value",null,A.value,se),(ae=A.onVnodeBeforeMount)&&An(ae,ie,P)}j&&Ci(P,null,ie,"beforeMount");const Z=__(Q,B);Z&&B.beforeEnter(le),i(le,C,V),((ae=A&&A.onVnodeMounted)||Z||j)&&sn(()=>{ae&&An(ae,ie,P),Z&&B.enter(le),j&&Ci(P,null,ie,"mounted")},Q)},w=(P,C,V,ie,Q)=>{if(V&&d(P,V),ie)for(let se=0;se<ie.length;se++)d(P,ie[se]);if(Q){let se=Q.subTree;if(C===se||Wp(se.type)&&(se.ssContent===C||se.ssFallback===C)){const de=Q.vnode;w(P,de,de.scopeId,de.slotScopeIds,Q.parent)}}},D=(P,C,V,ie,Q,se,de,re,le=0)=>{for(let ae=le;ae<P.length;ae++){const A=P[ae]=re?Ei(P[ae]):Dn(P[ae]);g(null,A,C,V,ie,Q,se,de,re)}},x=(P,C,V,ie,Q,se,de)=>{const re=C.el=P.el;let{patchFlag:le,dynamicChildren:ae,dirs:A}=C;le|=P.patchFlag&16;const S=P.props||nt,B=C.props||nt;let j;if(V&&Li(V,!1),(j=B.onVnodeBeforeUpdate)&&An(j,V,C,P),A&&Ci(C,P,V,"beforeUpdate"),V&&Li(V,!0),(S.innerHTML&&B.innerHTML==null||S.textContent&&B.textContent==null)&&u(re,""),ae?T(P.dynamicChildren,ae,re,V,ie,Ca(C,Q),se):de||W(P,C,re,null,V,ie,Ca(C,Q),se,!1),le>0){if(le&16)I(re,S,B,V,Q);else if(le&2&&S.class!==B.class&&r(re,"class",null,B.class,Q),le&4&&r(re,"style",S.style,B.style,Q),le&8){const Z=C.dynamicProps;for(let he=0;he<Z.length;he++){const L=Z[he],J=S[L],X=B[L];(X!==J||L==="value")&&r(re,L,J,X,Q,V)}}le&1&&P.children!==C.children&&u(re,C.children)}else!de&&ae==null&&I(re,S,B,V,Q);((j=B.onVnodeUpdated)||A)&&sn(()=>{j&&An(j,V,C,P),A&&Ci(C,P,V,"updated")},ie)},T=(P,C,V,ie,Q,se,de)=>{for(let re=0;re<C.length;re++){const le=P[re],ae=C[re],A=le.el&&(le.type===Qn||!tr(le,ae)||le.shapeFlag&70)?f(le.el):V;g(le,ae,A,null,ie,Q,se,de,!0)}},I=(P,C,V,ie,Q)=>{if(C!==V){if(C!==nt)for(const se in C)!Mr(se)&&!(se in V)&&r(P,se,C[se],null,Q,ie);for(const se in V){if(Mr(se))continue;const de=V[se],re=C[se];de!==re&&se!=="value"&&r(P,se,re,de,Q,ie)}"value"in V&&r(P,"value",C.value,V.value,Q)}},z=(P,C,V,ie,Q,se,de,re,le)=>{const ae=C.el=P?P.el:a(""),A=C.anchor=P?P.anchor:a("");let{patchFlag:S,dynamicChildren:B,slotScopeIds:j}=C;j&&(re=re?re.concat(j):j),P==null?(i(ae,V,ie),i(A,V,ie),D(C.children||[],V,A,Q,se,de,re,le)):S>0&&S&64&&B&&P.dynamicChildren?(T(P.dynamicChildren,B,V,Q,se,de,re),(C.key!=null||Q&&C===Q.subTree)&&Hp(P,C,!0)):W(P,C,V,A,Q,se,de,re,le)},U=(P,C,V,ie,Q,se,de,re,le)=>{C.slotScopeIds=re,P==null?C.shapeFlag&512?Q.ctx.activate(C,V,ie,de,le):O(C,V,ie,Q,se,de,le):H(P,C,le)},O=(P,C,V,ie,Q,se,de)=>{const re=P.component=O_(P,ie,Q);if(Tp(P)&&(re.ctx.renderer=me),B_(re,!1,de),re.asyncDep){if(Q&&Q.registerDep(re,G,de),!P.el){const le=re.subTree=si(Lr);p(null,le,C,V)}}else G(re,P,C,V,Q,se,de)},H=(P,C,V)=>{const ie=C.component=P.component;if(w_(P,C,V))if(ie.asyncDep&&!ie.asyncResolved){k(ie,C,V);return}else ie.next=C,ie.update();else C.el=P.el,ie.vnode=C},G=(P,C,V,ie,Q,se,de)=>{const re=()=>{if(P.isMounted){let{next:S,bu:B,u:j,parent:Z,vnode:he}=P;{const Ee=Vp(P);if(Ee){S&&(S.el=he.el,k(P,S,de)),Ee.asyncDep.then(()=>{P.isUnmounted||re()});return}}let L=S,J;Li(P,!1),S?(S.el=he.el,k(P,S,de)):S=he,B&&Io(B),(J=S.props&&S.props.onVnodeBeforeUpdate)&&An(J,Z,S,he),Li(P,!0);const X=Eu(P),ge=P.subTree;P.subTree=X,g(ge,X,f(ge.el),N(ge),P,Q,se),S.el=X.el,L===null&&A_(P,X.el),j&&sn(j,Q),(J=S.props&&S.props.onVnodeUpdated)&&sn(()=>An(J,Z,S,he),Q)}else{let S;const{el:B,props:j}=C,{bm:Z,m:he,parent:L,root:J,type:X}=P,ge=br(C);Li(P,!1),Z&&Io(Z),!ge&&(S=j&&j.onVnodeBeforeMount)&&An(S,L,C),Li(P,!0);{J.ce&&J.ce._injectChildStyle(X);const Ee=P.subTree=Eu(P);g(null,Ee,V,ie,P,Q,se),C.el=Ee.el}if(he&&sn(he,Q),!ge&&(S=j&&j.onVnodeMounted)){const Ee=C;sn(()=>An(S,L,Ee),Q)}(C.shapeFlag&256||L&&br(L.vnode)&&L.vnode.shapeFlag&256)&&P.a&&sn(P.a,Q),P.isMounted=!0,C=V=ie=null}};P.scope.on();const le=P.effect=new np(re);P.scope.off();const ae=P.update=le.run.bind(le),A=P.job=le.runIfDirty.bind(le);A.i=P,A.id=P.uid,le.scheduler=()=>Ll(A),Li(P,!0),ae()},k=(P,C,V)=>{C.component=P;const ie=P.vnode.props;P.vnode=C,P.next=null,u_(P,C.props,ie,V),p_(P,C.children,V),Ti(),fu(P),wi()},W=(P,C,V,ie,Q,se,de,re,le=!1)=>{const ae=P&&P.children,A=P?P.shapeFlag:0,S=C.children,{patchFlag:B,shapeFlag:j}=C;if(B>0){if(B&128){oe(ae,S,V,ie,Q,se,de,re,le);return}else if(B&256){ue(ae,S,V,ie,Q,se,de,re,le);return}}j&8?(A&16&&xe(ae,Q,se),S!==ae&&u(V,S)):A&16?j&16?oe(ae,S,V,ie,Q,se,de,re,le):xe(ae,Q,se,!0):(A&8&&u(V,""),j&16&&D(S,V,ie,Q,se,de,re,le))},ue=(P,C,V,ie,Q,se,de,re,le)=>{P=P||Ds,C=C||Ds;const ae=P.length,A=C.length,S=Math.min(ae,A);let B;for(B=0;B<S;B++){const j=C[B]=le?Ei(C[B]):Dn(C[B]);g(P[B],j,V,null,Q,se,de,re,le)}ae>A?xe(P,Q,se,!0,!1,S):D(C,V,ie,Q,se,de,re,le,S)},oe=(P,C,V,ie,Q,se,de,re,le)=>{let ae=0;const A=C.length;let S=P.length-1,B=A-1;for(;ae<=S&&ae<=B;){const j=P[ae],Z=C[ae]=le?Ei(C[ae]):Dn(C[ae]);if(tr(j,Z))g(j,Z,V,null,Q,se,de,re,le);else break;ae++}for(;ae<=S&&ae<=B;){const j=P[S],Z=C[B]=le?Ei(C[B]):Dn(C[B]);if(tr(j,Z))g(j,Z,V,null,Q,se,de,re,le);else break;S--,B--}if(ae>S){if(ae<=B){const j=B+1,Z=j<A?C[j].el:ie;for(;ae<=B;)g(null,C[ae]=le?Ei(C[ae]):Dn(C[ae]),V,Z,Q,se,de,re,le),ae++}}else if(ae>B)for(;ae<=S;)fe(P[ae],Q,se,!0),ae++;else{const j=ae,Z=ae,he=new Map;for(ae=Z;ae<=B;ae++){const Se=C[ae]=le?Ei(C[ae]):Dn(C[ae]);Se.key!=null&&he.set(Se.key,ae)}let L,J=0;const X=B-Z+1;let ge=!1,Ee=0;const we=new Array(X);for(ae=0;ae<X;ae++)we[ae]=0;for(ae=j;ae<=S;ae++){const Se=P[ae];if(J>=X){fe(Se,Q,se,!0);continue}let Pe;if(Se.key!=null)Pe=he.get(Se.key);else for(L=Z;L<=B;L++)if(we[L-Z]===0&&tr(Se,C[L])){Pe=L;break}Pe===void 0?fe(Se,Q,se,!0):(we[Pe-Z]=ae+1,Pe>=Ee?Ee=Pe:ge=!0,g(Se,C[Pe],V,null,Q,se,de,re,le),J++)}const ye=ge?v_(we):Ds;for(L=ye.length-1,ae=X-1;ae>=0;ae--){const Se=Z+ae,Pe=C[Se],Fe=Se+1<A?C[Se+1].el:ie;we[ae]===0?g(null,Pe,V,Fe,Q,se,de,re,le):ge&&(L<0||ae!==ye[L]?Te(Pe,V,Fe,2):L--)}}},Te=(P,C,V,ie,Q=null)=>{const{el:se,type:de,transition:re,children:le,shapeFlag:ae}=P;if(ae&6){Te(P.component.subTree,C,V,ie);return}if(ae&128){P.suspense.move(C,V,ie);return}if(ae&64){de.move(P,C,V,me);return}if(de===Qn){i(se,C,V);for(let S=0;S<le.length;S++)Te(le[S],C,V,ie);i(P.anchor,C,V);return}if(de===Da){E(P,C,V);return}if(ie!==2&&ae&1&&re)if(ie===0)re.beforeEnter(se),i(se,C,V),sn(()=>re.enter(se),Q);else{const{leave:S,delayLeave:B,afterLeave:j}=re,Z=()=>i(se,C,V),he=()=>{S(se,()=>{Z(),j&&j()})};B?B(se,Z,he):he()}else i(se,C,V)},fe=(P,C,V,ie=!1,Q=!1)=>{const{type:se,props:de,ref:re,children:le,dynamicChildren:ae,shapeFlag:A,patchFlag:S,dirs:B,cacheIndex:j}=P;if(S===-2&&(Q=!1),re!=null&&ko(re,null,V,P,!0),j!=null&&(C.renderCache[j]=void 0),A&256){C.ctx.deactivate(P);return}const Z=A&1&&B,he=!br(P);let L;if(he&&(L=de&&de.onVnodeBeforeUnmount)&&An(L,C,P),A&6)_e(P.component,V,ie);else{if(A&128){P.suspense.unmount(V,ie);return}Z&&Ci(P,null,C,"beforeUnmount"),A&64?P.type.remove(P,C,V,me,ie):ae&&!ae.hasOnce&&(se!==Qn||S>0&&S&64)?xe(ae,C,V,!1,!0):(se===Qn&&S&384||!Q&&A&16)&&xe(le,C,V),ie&&K(P)}(he&&(L=de&&de.onVnodeUnmounted)||Z)&&sn(()=>{L&&An(L,C,P),Z&&Ci(P,null,C,"unmounted")},V)},K=P=>{const{type:C,el:V,anchor:ie,transition:Q}=P;if(C===Qn){ce(V,ie);return}if(C===Da){v(P);return}const se=()=>{s(V),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(P.shapeFlag&1&&Q&&!Q.persisted){const{leave:de,delayLeave:re}=Q,le=()=>de(V,se);re?re(P.el,se,le):le()}else se()},ce=(P,C)=>{let V;for(;P!==C;)V=h(P),s(P),P=V;s(C)},_e=(P,C,V)=>{const{bum:ie,scope:Q,job:se,subTree:de,um:re,m:le,a:ae}=P;Mu(le),Mu(ae),ie&&Io(ie),Q.stop(),se&&(se.flags|=8,fe(de,P,C,V)),re&&sn(re,C),sn(()=>{P.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},xe=(P,C,V,ie=!1,Q=!1,se=0)=>{for(let de=se;de<P.length;de++)fe(P[de],C,V,ie,Q)},N=P=>{if(P.shapeFlag&6)return N(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const C=h(P.anchor||P.el),V=C&&C[O0];return V?h(V):C};let Ie=!1;const De=(P,C,V)=>{P==null?C._vnode&&fe(C._vnode,null,null,!0):g(C._vnode||null,P,C,null,null,null,V),C._vnode=P,Ie||(Ie=!0,fu(),Ep(),Ie=!1)},me={p:g,um:fe,m:Te,r:K,mt:O,mc:D,pc:W,pbc:T,n:N,o:t};return{render:De,hydrate:void 0,createApp:a_(De)}}function Ca({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Li({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function __(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hp(t,e,n=!1){const i=t.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ei(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Hp(o,a)),a.type===ra&&(a.el=o.el)}}function v_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vp(e)}function Mu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const x_=Symbol.for("v-scx"),M_=()=>No(x_);function La(t,e,n){return Gp(t,e,n)}function Gp(t,e,n=nt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Xt({},n),c=e&&i||!e&&r!=="post";let l;if(Ur){if(r==="sync"){const d=M_();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=Nn,d.resume=Nn,d.pause=Nn,d}}const u=Ut;a.call=(d,_,g)=>On(d,u,_,g);let f=!1;r==="post"?a.scheduler=d=>{sn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():Ll(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=L0(t,e,a);return Ur&&(l?l.push(h):c&&h()),h}function E_(t,e,n){const i=this.proxy,s=bt(t)?t.includes(".")?$p(i,t):()=>i[t]:t.bind(i,i);let r;Oe(e)?r=e:(r=e.handler,n=e);const o=zr(this),a=Gp(s,r.bind(i),n);return o(),a}function $p(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const S_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${es(e)}Modifiers`];function y_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||nt;let s=n;const r=e.startsWith("update:"),o=r&&S_(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>bt(u)?u.trim():u)),o.number&&(s=n.map(Gc)));let a,c=i[a=Ta(e)]||i[a=Ta(mn(e))];!c&&r&&(c=i[a=Ta(es(e))]),c&&On(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,On(l,t,6,s)}}function kp(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Oe(t)){const c=l=>{const u=kp(l,e,!0);u&&(a=!0,Xt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(mt(t)&&i.set(t,null),null):(Be(r)?r.forEach(c=>o[c]=null):Xt(o,r),mt(t)&&i.set(t,o),o)}function sa(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(t,e[0].toLowerCase()+e.slice(1))||Ke(t,es(e))||Ke(t,e))}function Eu(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=t,m=$o(t);let p,y;try{if(n.shapeFlag&4){const v=s||i,M=v;p=Dn(l.call(M,v,u,f,d,h,_)),y=a}else{const v=e;p=Dn(v.length>1?v(f,{attrs:a,slots:o,emit:c}):v(f,null)),y=e.props?a:b_(a)}}catch(v){wr.length=0,na(v,t,1),p=si(Lr)}let E=p;if(y&&g!==!1){const v=Object.keys(y),{shapeFlag:M}=E;v.length&&M&7&&(r&&v.some(vl)&&(y=T_(y,r)),E=zs(E,y,!1,!0))}return n.dirs&&(E=zs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Dl(E,n.transition),p=E,$o(m),p}const b_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},T_=(t,e)=>{const n={};for(const i in t)(!vl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function w_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Su(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!sa(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Su(i,o,l):!0:!!o;return!1}function Su(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!sa(n,r))return!0}return!1}function A_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wp=t=>t.__isSuspense;function R_(t,e){e&&e.pendingBranch?Be(t)?e.effects.push(...t):e.effects.push(t):N0(t)}const Qn=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),Lr=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),wr=[];let cn=null;function Il(t=!1){wr.push(cn=t?null:[])}function P_(){wr.pop(),cn=wr[wr.length-1]||null}let Dr=1;function yu(t,e=!1){Dr+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function C_(t){return t.dynamicChildren=Dr>0?cn||Ds:null,P_(),Dr>0&&cn&&cn.push(t),t}function Nl(t,e,n,i,s,r){return C_(Lt(t,e,n,i,s,r,!0))}function Xp(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||Wt(t)||Oe(t)?{i:an,r:t,k:e,f:!!n}:t:null);function Lt(t,e=null,n=null,i=0,s=null,r=t===Qn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&Fo(e),scopeId:yp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:an};return a?(Fl(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=bt(n)?8:16),Dr>0&&!o&&cn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&cn.push(c),c}const si=L_;function L_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===J0)&&(t=Lr),Xp(t)){const a=zs(t,e,!0);return n&&Fl(a,n),Dr>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag=-2,a}if($_(t)&&(t=t.__vccOpts),e){e=D_(e);let{class:a,style:c}=e;a&&!bt(a)&&(e.class=Sl(a)),mt(c)&&(Cl(c)&&!Be(c)&&(c=Xt({},c)),e.style=El(c))}const o=bt(t)?1:Wp(t)?128:B0(t)?64:mt(t)?4:Oe(t)?2:0;return Lt(t,e,n,i,s,o,r,!0)}function D_(t){return t?Cl(t)||Up(t)?Xt({},t):t:null}function zs(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?I_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&qp(l),ref:e&&e.ref?n&&r?Be(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zs(t.ssContent),ssFallback:t.ssFallback&&zs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&Dl(u,c.clone(u)),u}function U_(t=" ",e=0){return si(ra,null,t,e)}function Dn(t){return t==null||typeof t=="boolean"?si(Lr):Be(t)?si(Qn,null,t.slice()):Xp(t)?Ei(t):si(ra,null,String(t))}function Ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zs(t)}function Fl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Be(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Up(e)?e._ctx=an:s===3&&an&&(an.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:an},n=32):(e=String(e),i&64?(n=16,e=[U_(e)]):n=8);t.children=e,t.shapeFlag|=n}function I_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Sl([e.class,i.class]));else if(s==="style")e.style=El([e.style,i.style]);else if(Zo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function An(t,e,n,i=null){On(t,e,7,[n,i])}const N_=Cp();let F_=0;function O_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||N_,r={uid:F_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new s0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(i,s),emitsOptions:kp(i,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=y_.bind(null,r),t.ce&&t.ce(r),r}let Ut=null,Xo,Jc;{const t=ta(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Xo=e("__VUE_INSTANCE_SETTERS__",n=>Ut=n),Jc=e("__VUE_SSR_SETTERS__",n=>Ur=n)}const zr=t=>{const e=Ut;return Xo(t),t.scope.on(),()=>{t.scope.off(),Xo(e)}},bu=()=>{Ut&&Ut.scope.off(),Xo(null)};function Yp(t){return t.vnode.shapeFlag&4}let Ur=!1;function B_(t,e=!1,n=!1){e&&Jc(e);const{props:i,children:s}=t.vnode,r=Yp(t);l_(t,i,r,e),d_(t,s,n);const o=r?z_(t,e):void 0;return e&&Jc(!1),o}function z_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,e_);const{setup:i}=n;if(i){Ti();const s=t.setupContext=i.length>1?V_(t):null,r=zr(t),o=Br(i,t,0,[t.props,s]),a=Qd(o);if(wi(),r(),(a||t.sp)&&!br(t)&&bp(t),a){if(o.then(bu,bu),e)return o.then(c=>{Tu(t,c)}).catch(c=>{na(c,t,0)});t.asyncDep=o}else Tu(t,o)}else jp(t)}function Tu(t,e,n){Oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:mt(e)&&(t.setupState=vp(e)),jp(t)}function jp(t,e,n){const i=t.type;t.render||(t.render=i.render||Nn);{const s=zr(t);Ti();try{t_(t)}finally{wi(),s()}}}const H_={get(t,e){return Dt(t,"get",""),t[e]}};function V_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,H_),slots:t.slots,emit:t.emit,expose:e}}function oa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vp(T0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tr)return Tr[n](t)},has(e,n){return n in e||n in Tr}})):t.proxy}function G_(t,e=!0){return Oe(t)?t.displayName||t.name:t.name||e&&t.__name}function $_(t){return Oe(t)&&"__vccOpts"in t}const k_=(t,e)=>P0(t,e,Ur),W_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qc;const wu=typeof window<"u"&&window.trustedTypes;if(wu)try{Qc=wu.createPolicy("vue",{createHTML:t=>t})}catch{}const Kp=Qc?t=>Qc.createHTML(t):t=>t,X_="http://www.w3.org/2000/svg",q_="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Au=Jn&&Jn.createElement("template"),Y_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Jn.createElementNS(X_,t):e==="mathml"?Jn.createElementNS(q_,t):n?Jn.createElement(t,{is:n}):Jn.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Au.innerHTML=Kp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Au.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},j_=Symbol("_vtc");function K_(t,e,n){const i=t[j_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ru=Symbol("_vod"),Z_=Symbol("_vsh"),J_=Symbol(""),Q_=/(^|;)\s*display\s*:/;function ev(t,e,n){const i=t.style,s=bt(n);let r=!1;if(n&&!s){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Oo(i,a,"")}else for(const o in e)n[o]==null&&Oo(i,o,"");for(const o in n)o==="display"&&(r=!0),Oo(i,o,n[o])}else if(s){if(e!==n){const o=i[J_];o&&(n+=";"+o),i.cssText=n,r=Q_.test(n)}}else e&&t.removeAttribute("style");Ru in t&&(t[Ru]=r?i.display:"",t[Z_]&&(i.display="none"))}const Pu=/\s*!important$/;function Oo(t,e,n){if(Be(n))n.forEach(i=>Oo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=tv(t,e);Pu.test(n)?t.setProperty(es(i),n.replace(Pu,""),"important"):t[i]=n}}const Cu=["Webkit","Moz","ms"],Ua={};function tv(t,e){const n=Ua[e];if(n)return n;let i=mn(e);if(i!=="filter"&&i in t)return Ua[e]=i;i=ea(i);for(let s=0;s<Cu.length;s++){const r=Cu[s]+i;if(r in t)return Ua[e]=r}return e}const Lu="http://www.w3.org/1999/xlink";function Du(t,e,n,i,s,r=i0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Lu,e.slice(6,e.length)):t.setAttributeNS(Lu,e,n):n==null||r&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":qs(n)?String(n):n)}function Uu(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=tp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Rs(t,e,n,i){t.addEventListener(e,n,i)}function nv(t,e,n,i){t.removeEventListener(e,n,i)}const Iu=Symbol("_vei");function iv(t,e,n,i,s=null){const r=t[Iu]||(t[Iu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=sv(e);if(i){const l=r[e]=av(i,s);Rs(t,a,l,c)}else o&&(nv(t,a,o,c),r[e]=void 0)}}const Nu=/(?:Once|Passive|Capture)$/;function sv(t){let e;if(Nu.test(t)){e={};let i;for(;i=t.match(Nu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let Ia=0;const rv=Promise.resolve(),ov=()=>Ia||(rv.then(()=>Ia=0),Ia=Date.now());function av(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;On(cv(i,n.value),e,5,[i])};return n.value=t,n.attached=ov(),n}function cv(t,e){if(Be(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Fu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lv=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?K_(t,i,o):e==="style"?ev(t,n,i):Zo(e)?vl(e)||iv(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uv(t,e,i,o))?(Uu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Du(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?Uu(t,mn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Du(t,e,i,o))};function uv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fu(e)&&Oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Fu(e)&&bt(n)?!1:e in t}const Ou=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Be(e)?n=>Io(e,n):e};function fv(t){t.target.composing=!0}function Bu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Na=Symbol("_assign"),zu={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Na]=Ou(s);const r=i||s.props&&s.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Gc(a)),t[Na](a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",fv),Rs(t,"compositionend",Bu),Rs(t,"change",Bu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Na]=Ou(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Gc(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hv=Xt({patchProp:lv},Y_);let Hu;function dv(){return Hu||(Hu=m_(hv))}const pv=(...t)=>{const e=dv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=gv(i);if(!s)return;const r=e._component;!Oe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gv(t){return bt(t)?document.querySelector(t):t}const Ol=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},_v={data(){return{width:155,length:105}},methods:{emitValues(){this.$emit("update-dimensions",{width:this.width,length:this.length})}}},vv={class:"flex flex-col sm:flex-row sm:space-x-4"},xv={class:"mb-4 sm:mb-0"};function Mv(t,e,n,i,s,r){return Il(),Nl("div",null,[Lt("div",vv,[Lt("div",xv,[e[3]||(e[3]=Lt("label",{class:"block text-sm font-medium text-gray-700"},"Width (mm):",-1)),hu(Lt("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.width=o),type:"number",placeholder:"Enter width",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,512),[[zu,s.width,void 0,{number:!0}]])]),Lt("div",null,[e[4]||(e[4]=Lt("label",{class:"block text-sm font-medium text-gray-700"},"Length (mm):",-1)),hu(Lt("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.length=o),type:"number",placeholder:"Enter length",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,512),[[zu,s.length,void 0,{number:!0}]])])]),Lt("button",{onClick:e[2]||(e[2]=(...o)=>r.emitValues&&r.emitValues(...o)),class:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"}," Update ")])}const Ev=Ol(_v,[["render",Mv],["__scopeId","data-v-3ac46bb5"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="152",rs={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sv=0,Vu=1,yv=2,Zp=1,bv=2,Zn=3,bi=0,jt=1,ni=2,yi=0,Ns=1,Gu=2,$u=3,ku=4,Tv=5,Ps=100,wv=101,Av=102,Wu=103,Xu=104,Rv=200,Pv=201,Cv=202,Lv=203,Jp=204,Qp=205,Dv=206,Uv=207,Iv=208,Nv=209,Fv=210,Ov=0,Bv=1,zv=2,el=3,Hv=4,Vv=5,Gv=6,$v=7,em=0,kv=1,Wv=2,ri=0,Xv=1,qv=2,Yv=3,jv=4,Kv=5,tm=300,Hs=301,Vs=302,tl=303,nl=304,aa=306,il=1e3,yn=1001,sl=1002,Gt=1003,qu=1004,Fa=1005,dn=1006,Zv=1007,Ir=1008,Ki=1009,Jv=1010,Qv=1011,nm=1012,ex=1013,$i=1014,ki=1015,Nr=1016,tx=1017,nx=1018,Fs=1020,ix=1021,bn=1023,sx=1024,rx=1025,qi=1026,Gs=1027,ox=1028,ax=1029,cx=1030,lx=1031,ux=1033,Oa=33776,Ba=33777,za=33778,Ha=33779,Yu=35840,ju=35841,Ku=35842,Zu=35843,fx=36196,Ju=37492,Qu=37496,ef=37808,tf=37809,nf=37810,sf=37811,rf=37812,of=37813,af=37814,cf=37815,lf=37816,uf=37817,ff=37818,hf=37819,df=37820,pf=37821,Va=36492,hx=36283,mf=36284,gf=36285,_f=36286,im=3e3,Yi=3001,dx=3200,px=3201,sm=0,mx=1,ji="",ze="srgb",Bn="srgb-linear",rm="display-p3",Ga=7680,gx=519,vf=35044,xf="300 es",rl=1035;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,ol=180/Math.PI;function Hr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[t&255]+Pt[t>>8&255]+Pt[t>>16&255]+Pt[t>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[n&63|128]+Pt[n>>8&255]+"-"+Pt[n>>16&255]+Pt[n>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function _x(t,e){return(t%e+e)%e}function ka(t,e,n){return(1-n)*t+n*e}function Mf(t){return(t&t-1)===0&&t!==0}function vx(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],y=s[1],E=s[4],v=s[7],M=s[2],b=s[5],w=s[8];return r[0]=o*g+a*y+c*M,r[3]=o*m+a*E+c*b,r[6]=o*p+a*v+c*w,r[1]=l*g+u*y+f*M,r[4]=l*m+u*E+f*b,r[7]=l*p+u*v+f*w,r[2]=h*g+d*y+_*M,r[5]=h*m+d*E+_*b,r[8]=h*p+d*v+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,_=n*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*l-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*n-s*c)*g,e[5]=(s*r-a*n)*g,e[6]=d*g,e[7]=(i*c-l*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wa.makeScale(e,n)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wa.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Ye;function om(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Ef={};function Ar(t){t in Ef||(Ef[t]=!0,console.warn(t))}function Os(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const xx=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Mx=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ex(t){return t.convertSRGBToLinear().applyMatrix3(Mx)}function Sx(t){return t.applyMatrix3(xx).convertLinearToSRGB()}const yx={[Bn]:t=>t,[ze]:t=>t.convertSRGBToLinear(),[rm]:Ex},bx={[Bn]:t=>t,[ze]:t=>t.convertLinearToSRGB(),[rm]:Sx},_n={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Bn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=yx[e],s=bx[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let as;class am{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=qo("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Os(n[i]/255)*255):n[i]=Os(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class cm{constructor(e=null){this.isSource=!0,this.uuid=Hr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function qa(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?am.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tx=0;class ln extends ts{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=yn,s=yn,r=dn,o=Ir,a=bn,c=Ki,l=ln.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Hr(),this.name="",this.source=new cm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yi?ze:ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case il:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case il:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?Yi:im}set encoding(e){Ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yi?ze:ji}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=tm;ln.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,s=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,v=(d+1)/2,M=(p+1)/2,b=(u+h)/4,w=(f+g)/4,D=(_+m)/4;return E>v&&E>M?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=w/i):v>M?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=D/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=D/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zi extends ts{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yi?ze:ji),this.texture=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:dn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lm extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wx extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(f!==g||c!==h||l!==d||u!==_){let m=1-a;const p=c*h+l*d+u*_+f*g,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const M=Math.sqrt(E),b=Math.atan2(M,p*y);m=Math.sin(m*b)/M,a=Math.sin(a*b)/M}const v=a*y;if(c=c*m+h*v,l=l*m+d*v,u=u*m+_*v,f=f*m+g*v,m===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+u*f+c*d-l*h,e[n+1]=c*_+u*h+l*f-a*d,e[n+2]=l*_+u*d+a*h-c*f,e[n+3]=u*_-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-n)*u)/l,h=Math.sin(n*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*s-a*i,u=c*i+a*n-r*s,f=c*s+r*i-o*n,h=-r*n-o*i-a*s;return this.x=l*c+h*-r+u*-a-f*-o,this.y=u*c+h*-o+f*-r-l*-a,this.z=f*c+h*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new Y,Sf=new Ji;class Vr{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox),cs.applyMatrix4(e.matrixWorld),this.union(cs);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Vn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Vn)}else s.boundingBox===null&&s.computeBoundingBox(),cs.copy(s.boundingBox),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Jr.subVectors(this.max,nr),ls.subVectors(e.a,nr),us.subVectors(e.b,nr),fs.subVectors(e.c,nr),fi.subVectors(us,ls),hi.subVectors(fs,us),Di.subVectors(ls,fs);let n=[0,-fi.z,fi.y,0,-hi.z,hi.y,0,-Di.z,Di.y,fi.z,0,-fi.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!ja(n,ls,us,fs,Jr)||(n=[1,0,0,0,1,0,0,0,1],!ja(n,ls,us,fs,Jr))?!1:(Qr.crossVectors(fi,hi),n=[Qr.x,Qr.y,Qr.z],ja(n,ls,us,fs,Jr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Vn=new Y,cs=new Vr,ls=new Y,us=new Y,fs=new Y,fi=new Y,hi=new Y,Di=new Y,nr=new Y,Jr=new Y,Qr=new Y,Ui=new Y;function ja(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ui.fromArray(t,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=e.dot(Ui),l=n.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ax=new Vr,ir=new Y,Ka=new Y;class zl{constructor(e=new Y,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ax.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const n=ir.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ka)),this.expandByPoint(ir.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new Y,Za=new Y,eo=new Y,di=new Y,Ja=new Y,to=new Y,Qa=new Y;class Rx{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,n),Gn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Za.copy(e).add(n).multiplyScalar(.5),eo.copy(n).sub(e).normalize(),di.copy(this.origin).sub(Za);const r=e.distanceTo(n)*.5,o=-this.direction.dot(eo),a=di.dot(this.direction),c=-di.dot(eo),l=di.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*c-a,h=o*a-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Za).addScaledVector(eo,h),d}intersectSphere(e,n){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,n,i,s,r){Ja.subVectors(n,e),to.subVectors(i,e),Qa.crossVectors(Ja,to);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const c=a*this.direction.dot(to.crossVectors(di,to));if(c<0)return null;const l=a*this.direction.dot(Ja.cross(di));if(l<0||c+l>o)return null;const u=-a*di.dot(Qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,c,l,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=d+_*l,n[5]=h-g*l,n[9]=-a*c,n[2]=g-h*l,n[6]=_+d*l,n[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,_=l*u,g=l*f;n[0]=h+g*a,n[4]=_*a-d,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-_,n[6]=g+h*a,n[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,_=l*u,g=l*f;n[0]=h-g*a,n[4]=-o*f,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=c*u,n[4]=_*l-d,n[8]=h*l+g,n[1]=c*f,n[5]=g*l+h,n[9]=d*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*u,n[4]=g-h*f,n[8]=_*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=d*f+_,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+g,n[5]=o*u,n[9]=d*f-_,n[2]=_*f-d,n[6]=a*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,Cx)}lookAt(e,n,i){const s=this.elements;return Jt.subVectors(e,n),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),pi.crossVectors(i,Jt),pi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),pi.crossVectors(i,Jt)),pi.normalize(),no.crossVectors(Jt,pi),s[0]=pi.x,s[4]=no.x,s[8]=Jt.x,s[1]=pi.y,s[5]=no.y,s[9]=Jt.y,s[2]=pi.z,s[6]=no.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],E=i[7],v=i[11],M=i[15],b=s[0],w=s[4],D=s[8],x=s[12],T=s[1],I=s[5],z=s[9],U=s[13],O=s[2],H=s[6],G=s[10],k=s[14],W=s[3],ue=s[7],oe=s[11],Te=s[15];return r[0]=o*b+a*T+c*O+l*W,r[4]=o*w+a*I+c*H+l*ue,r[8]=o*D+a*z+c*G+l*oe,r[12]=o*x+a*U+c*k+l*Te,r[1]=u*b+f*T+h*O+d*W,r[5]=u*w+f*I+h*H+d*ue,r[9]=u*D+f*z+h*G+d*oe,r[13]=u*x+f*U+h*k+d*Te,r[2]=_*b+g*T+m*O+p*W,r[6]=_*w+g*I+m*H+p*ue,r[10]=_*D+g*z+m*G+p*oe,r[14]=_*x+g*U+m*k+p*Te,r[3]=y*b+E*T+v*O+M*W,r[7]=y*w+E*I+v*H+M*ue,r[11]=y*D+E*z+v*G+M*oe,r[15]=y*x+E*U+v*k+M*Te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*f-s*l*f-r*a*h+i*l*h+s*a*d-i*c*d)+g*(+n*c*d-n*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+m*(+n*l*f-n*a*d-r*o*f+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-n*c*f+n*a*h+s*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=f*m*l-g*h*l+g*c*d-a*m*d-f*c*p+a*h*p,E=_*h*l-u*m*l-_*c*d+o*m*d+u*c*p-o*h*p,v=u*g*l-_*f*l+_*a*d-o*g*d-u*a*p+o*f*p,M=_*f*c-u*g*c-_*a*h+o*g*h+u*a*m-o*f*m,b=n*y+i*E+s*v+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=y*w,e[1]=(g*h*r-f*m*r-g*s*d+i*m*d+f*s*p-i*h*p)*w,e[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*p+i*c*p)*w,e[3]=(f*c*r-a*h*r-f*s*l+i*h*l+a*s*d-i*c*d)*w,e[4]=E*w,e[5]=(u*m*r-_*h*r+_*s*d-n*m*d-u*s*p+n*h*p)*w,e[6]=(_*c*r-o*m*r-_*s*l+n*m*l+o*s*p-n*c*p)*w,e[7]=(o*h*r-u*c*r+u*s*l-n*h*l-o*s*d+n*c*d)*w,e[8]=v*w,e[9]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*w,e[10]=(o*g*r-_*a*r+_*i*l-n*g*l-o*i*p+n*a*p)*w,e[11]=(u*a*r-o*f*r-u*i*l+n*f*l+o*i*d-n*a*d)*w,e[12]=M*w,e[13]=(u*g*s-_*f*s+_*i*h-n*g*h-u*i*m+n*f*m)*w,e[14]=(_*a*s-o*g*s-_*i*c+n*g*c+o*i*m-n*a*m)*w,e[15]=(o*f*s-u*a*s+u*i*c-n*f*c-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,_=r*f,g=o*u,m=o*f,p=a*f,y=c*l,E=c*u,v=c*f,M=i.x,b=i.y,w=i.z;return s[0]=(1-(g+p))*M,s[1]=(d+v)*M,s[2]=(_-E)*M,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(h+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(_+E)*w,s[9]=(m-y)*w,s[10]=(1-(h+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const l=1/r,u=1/o,f=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,n.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,c=2*r/(n-e),l=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,c=1/(n-e),l=1/(i-s),u=1/(o-r),f=(n+e)*c,h=(i+s)*l,d=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const hs=new Y,vn=new gt,Px=new Y(0,0,0),Cx=new Y(1,1,1),pi=new Y,no=new Y,Jt=new Y,yf=new gt,bf=new Ji;class ca{constructor(e=0,n=0,i=0,s=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lx=0;const Tf=new Y,ds=new Ji,$n=new gt,io=new Y,sr=new Y,Dx=new Y,Ux=new Ji,wf=new Y(1,0,0),Af=new Y(0,1,0),Rf=new Y(0,0,1),Ix={type:"added"},Pf={type:"removed"};class It extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new Y,n=new ca,i=new Ji,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ye}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,n){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?io.copy(e):io.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(sr,io,this.up):$n.lookAt(io,sr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ds.setFromRotationMatrix($n),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ix)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Pf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Pf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}It.DEFAULT_UP=new Y(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new Y,kn=new Y,ec=new Y,Wn=new Y,ps=new Y,ms=new Y,Cf=new Y,tc=new Y,nc=new Y,ic=new Y;let so=!1;class Sn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),xn.subVectors(e,n),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){xn.subVectors(s,n),kn.subVectors(i,n),ec.subVectors(e,n);const o=xn.dot(xn),a=xn.dot(kn),c=xn.dot(ec),l=kn.dot(kn),u=kn.dot(ec),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Wn),Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,n,i,s,r,o,a,c){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),this.getInterpolation(e,n,i,s,r,o,a,c)}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,Wn),c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c}static isFrontFacing(e,n,i,s){return xn.subVectors(i,n),kn.subVectors(e,n),xn.cross(kn).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),Sn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;ps.subVectors(s,i),ms.subVectors(r,i),tc.subVectors(e,i);const c=ps.dot(tc),l=ms.dot(tc);if(c<=0&&l<=0)return n.copy(i);nc.subVectors(e,s);const u=ps.dot(nc),f=ms.dot(nc);if(u>=0&&f<=u)return n.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(ps,o);ic.subVectors(e,r);const d=ps.dot(ic),_=ms.dot(ic);if(_>=0&&d<=_)return n.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(ms,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Cf.subVectors(r,s),a=(f-u)/(f-u+(d-_)),n.copy(s).addScaledVector(Cf,a);const p=1/(m+g+h);return o=g*p,a=h*p,n.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Nx=0;class Gr extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Ns,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jp,this.blendDst=Qp,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=el,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ro={h:0,s:0,l:0};function sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_n.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=_n.workingColorSpace){return this.r=e,this.g=n,this.b=i,_n.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=_n.workingColorSpace){if(e=_x(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=sc(o,r,e+1/3),this.g=sc(o,r,e),this.b=sc(o,r,e-1/3)}return _n.toWorkingColorSpace(this,s),this}setStyle(e,n=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ze){const i=fm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return _n.fromWorkingColorSpace(Ct.copy(this),e),Math.round(kt(Ct.r*255,0,255))*65536+Math.round(kt(Ct.g*255,0,255))*256+Math.round(kt(Ct.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_n.workingColorSpace){_n.fromWorkingColorSpace(Ct.copy(this),n);const i=Ct.r,s=Ct.g,r=Ct.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=_n.workingColorSpace){return _n.fromWorkingColorSpace(Ct.copy(this),n),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ze){_n.fromWorkingColorSpace(Ct.copy(this),e);const n=Ct.r,i=Ct.g,s=Ct.b;return e!==ze?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Mn),Mn.h+=e,Mn.s+=n,Mn.l+=i,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mn),e.getHSL(ro);const i=ka(Mn.h,ro.h,n),s=ka(Mn.s,ro.s,n),r=ka(Mn.l,ro.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new it;it.NAMES=fm;class hm extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new Y,oo=new Ge;class un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oo.fromBufferAttribute(this,n),oo.applyMatrix3(e),this.setXY(n,oo.x,oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class dm extends un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class pm extends un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Fx=0;const hn=new gt,rc=new It,gs=new Y,Qt=new Vr,rr=new Vr,Et=new Y;class ai extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?pm:dm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Qt.min,rr.min),Qt.expandByPoint(Et),Et.addVectors(Qt.max,rr.max),Qt.expandByPoint(Et)):(Qt.expandByPoint(rr.min),Qt.expandByPoint(rr.max))}Qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Et));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Et.fromBufferAttribute(a,l),c&&(gs.fromBufferAttribute(e,l),Et.add(gs)),s=Math.max(s,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new Y,u[T]=new Y;const f=new Y,h=new Y,d=new Y,_=new Ge,g=new Ge,m=new Ge,p=new Y,y=new Y;function E(T,I,z){f.fromArray(s,T*3),h.fromArray(s,I*3),d.fromArray(s,z*3),_.fromArray(o,T*2),g.fromArray(o,I*2),m.fromArray(o,z*2),h.sub(f),d.sub(f),g.sub(_),m.sub(_);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(U),y.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(U),l[T].add(p),l[I].add(p),l[z].add(p),u[T].add(y),u[I].add(y),u[z].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let T=0,I=v.length;T<I;++T){const z=v[T],U=z.start,O=z.count;for(let H=U,G=U+O;H<G;H+=3)E(i[H+0],i[H+1],i[H+2])}const M=new Y,b=new Y,w=new Y,D=new Y;function x(T){w.fromArray(r,T*3),D.copy(w);const I=l[T];M.copy(I),M.sub(w.multiplyScalar(w.dot(I))).normalize(),b.crossVectors(D,I);const U=b.dot(u[T])<0?-1:1;c[T*4]=M.x,c[T*4+1]=M.y,c[T*4+2]=M.z,c[T*4+3]=U}for(let T=0,I=v.length;T<I;++T){const z=v[T],U=z.start,O=z.count;for(let H=U,G=U+O;H<G;H+=3)x(i[H+0]),x(i[H+1]),x(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,c=new Y,l=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)h[_++]=l[d++]}return new un(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,i);c.push(d)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new gt,Rn=new Rx,ao=new zl,Df=new Y,_s=new Y,vs=new Y,xs=new Y,oc=new Y,co=new Y,lo=new Ge,uo=new Ge,fo=new Ge,Uf=new Y,If=new Y,Nf=new Y,ho=new Y,po=new Y;class ii extends It{constructor(e=new ai,n=new hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(oc.fromBufferAttribute(f,e),o?co.addScaledVector(oc,u):co.addScaledVector(oc.sub(n),u))}n.add(co)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(ao.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(ao,Df)===null||Rn.origin.distanceToSquared(Df)>(e.far-e.near)**2))&&(Lf.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&Rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),y=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let E=p,v=y;E<v;E+=3){const M=o.getX(E),b=o.getX(E+1),w=o.getX(E+2);i=mo(this,m,e,Rn,c,l,u,M,b,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=o.getX(g),y=o.getX(g+1),E=o.getX(g+2);i=mo(this,r,e,Rn,c,l,u,p,y,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),y=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let E=p,v=y;E<v;E+=3){const M=E,b=E+1,w=E+2;i=mo(this,m,e,Rn,c,l,u,M,b,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=g,y=g+1,E=g+2;i=mo(this,r,e,Rn,c,l,u,p,y,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function Ox(t,e,n,i,s,r,o,a){let c;if(e.side===jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===bi,a),c===null)return null;po.copy(a),po.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(po);return l<n.near||l>n.far?null:{distance:l,point:po.clone(),object:t}}function mo(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,_s),t.getVertexPosition(c,vs),t.getVertexPosition(l,xs);const u=Ox(t,e,n,i,_s,vs,xs,ho);if(u){s&&(lo.fromBufferAttribute(s,a),uo.fromBufferAttribute(s,c),fo.fromBufferAttribute(s,l),u.uv=Sn.getInterpolation(ho,_s,vs,xs,lo,uo,fo,new Ge)),r&&(lo.fromBufferAttribute(r,a),uo.fromBufferAttribute(r,c),fo.fromBufferAttribute(r,l),u.uv1=Sn.getInterpolation(ho,_s,vs,xs,lo,uo,fo,new Ge),u.uv2=u.uv1),o&&(Uf.fromBufferAttribute(o,a),If.fromBufferAttribute(o,c),Nf.fromBufferAttribute(o,l),u.normal=Sn.getInterpolation(ho,_s,vs,xs,Uf,If,Nf,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new Y,materialIndex:0};Sn.getNormal(_s,vs,xs,f.normal),u.face=f}return u}class $r extends ai{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new oi(l,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function _(g,m,p,y,E,v,M,b,w,D,x){const T=v/w,I=M/D,z=v/2,U=M/2,O=b/2,H=w+1,G=D+1;let k=0,W=0;const ue=new Y;for(let oe=0;oe<G;oe++){const Te=oe*I-U;for(let fe=0;fe<H;fe++){const K=fe*T-z;ue[g]=K*y,ue[m]=Te*E,ue[p]=O,l.push(ue.x,ue.y,ue.z),ue[g]=0,ue[m]=0,ue[p]=b>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(fe/w),f.push(1-oe/D),k+=1}}for(let oe=0;oe<D;oe++)for(let Te=0;Te<w;Te++){const fe=h+Te+H*oe,K=h+Te+H*(oe+1),ce=h+(Te+1)+H*(oe+1),_e=h+(Te+1)+H*oe;c.push(fe,K,_e),c.push(K,ce,_e),W+=6}a.addGroup(d,W,x),d+=W,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const s in i)e[s]=i[s]}return e}function Bx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mm(t){return t.getRenderTarget()===null?t.outputColorSpace:Bn}const zx={clone:$s,merge:Ht};var Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gm extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends gm{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($a*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ms=-90,Es=1;class Gx extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new pn(Ms,Es,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new pn(Ms,Es,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new pn(Ms,Es,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new pn(Ms,Es,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new pn(Ms,Es,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new pn(Ms,Es,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class _m extends ln{constructor(e,n,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $x extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?ze:ji),this.texture=new _m(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $r(5,5,5),r=new Qi({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:yi});r.uniforms.tEquirect.value=n;const o=new ii(s,r),a=n.minFilter;return n.minFilter===Ir&&(n.minFilter=dn),new Gx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const ac=new Y,kx=new Y,Wx=new Ye;class Bi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ac.subVectors(i,n).cross(kx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ac),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Wx.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new zl,go=new Y;class Hl{constructor(e=new Bi,n=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],d=i[9],_=i[10],g=i[11],m=i[12],p=i[13],y=i[14],E=i[15];return n[0].setComponents(a-s,f-c,g-h,E-m).normalize(),n[1].setComponents(a+s,f+c,g+h,E+m).normalize(),n[2].setComponents(a+r,f+l,g+d,E+p).normalize(),n[3].setComponents(a-r,f-l,g-d,E-p).normalize(),n[4].setComponents(a-o,f-u,g-_,E-y).normalize(),n[5].setComponents(a+o,f+u,g+_,E+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vm(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Xx(t,e){const n=e.isWebGL2,i=new WeakMap;function s(l,u){const f=l.array,h=l.usage,d=t.createBuffer();t.bindBuffer(u,d),t.bufferData(u,f,h),l.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,d=u.updateRange;t.bindBuffer(f,l),d.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(t.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,s(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Vl extends ai{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=e/a,h=n/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let E=0;E<l;E++){const v=E*f-r;_.push(v,-y,0),g.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const E=y+l*p,v=y+l*(p+1),M=y+1+l*(p+1),b=y+1+l*p;d.push(E,v,b),d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx="vec3 transformed = vec3( position );",e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n1=`#ifdef USE_IRIDESCENCE
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
#endif`,i1=`#ifdef USE_BUMPMAP
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h1=`#define PI 3.141592653589793
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
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p1=`vec3 transformedNormal = objectNormal;
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
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x1="gl_FragColor = linearToOutputTexel( gl_FragColor );",M1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
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
}`,L1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
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
#endif`,F1=`#if defined( USE_ENVMAP )
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
#endif`,O1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V1=`PhysicalMaterial material;
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
#endif`,G1=`struct PhysicalMaterial {
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
}`,$1=`
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K1=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q1=`#if defined( USE_POINTS_UV )
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
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
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
#endif`,sM=`#ifdef USE_MORPHTARGETS
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
#endif`,rM=`#ifdef USE_MORPHTARGETS
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
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
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
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AM=`float getShadowMask() {
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
}`,RM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,CM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,BM=`#ifdef USE_UV
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
#endif`,zM=`#ifdef USE_UV
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
#endif`,HM=`#ifdef USE_UV
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
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$M=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YM=`#include <common>
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
}`,jM=`#if DEPTH_PACKING == 3200
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
}`,KM=`#define DISTANCE
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
}`,ZM=`#define DISTANCE
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eE=`uniform float scale;
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
}`,tE=`uniform vec3 diffuse;
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
}`,nE=`#include <common>
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
}`,iE=`uniform vec3 diffuse;
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
}`,sE=`#define LAMBERT
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
}`,rE=`#define LAMBERT
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
}`,oE=`#define MATCAP
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
}`,aE=`#define MATCAP
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
}`,cE=`#define NORMAL
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
}`,lE=`#define NORMAL
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
}`,uE=`#define PHONG
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
}`,fE=`#define PHONG
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
}`,hE=`#define STANDARD
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
}`,dE=`#define STANDARD
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
}`,pE=`#define TOON
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
}`,mE=`#define TOON
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
}`,gE=`uniform float size;
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
}`,_E=`uniform vec3 diffuse;
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
}`,vE=`#include <common>
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
}`,xE=`uniform vec3 color;
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
}`,ME=`uniform float rotation;
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
}`,EE=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:jx,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Jx,begin_vertex:Qx,beginnormal_vertex:e1,bsdfs:t1,iridescence_fragment:n1,bumpmap_pars_fragment:i1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:r1,clipping_planes_pars_vertex:o1,clipping_planes_vertex:a1,color_fragment:c1,color_pars_fragment:l1,color_pars_vertex:u1,color_vertex:f1,common:h1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:_1,emissivemap_pars_fragment:v1,encodings_fragment:x1,encodings_pars_fragment:M1,envmap_fragment:E1,envmap_common_pars_fragment:S1,envmap_pars_fragment:y1,envmap_pars_vertex:b1,envmap_physical_pars_fragment:F1,envmap_vertex:T1,fog_vertex:w1,fog_pars_vertex:A1,fog_fragment:R1,fog_pars_fragment:P1,gradientmap_pars_fragment:C1,lightmap_fragment:L1,lightmap_pars_fragment:D1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:I1,lights_pars_begin:N1,lights_toon_fragment:O1,lights_toon_pars_fragment:B1,lights_phong_fragment:z1,lights_phong_pars_fragment:H1,lights_physical_fragment:V1,lights_physical_pars_fragment:G1,lights_fragment_begin:$1,lights_fragment_maps:k1,lights_fragment_end:W1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:j1,map_fragment:K1,map_pars_fragment:Z1,map_particle_fragment:J1,map_particle_pars_fragment:Q1,metalnessmap_fragment:eM,metalnessmap_pars_fragment:tM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:sM,morphtarget_vertex:rM,normal_fragment_begin:oM,normal_fragment_maps:aM,normal_pars_fragment:cM,normal_pars_vertex:lM,normal_vertex:uM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:dM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,output_fragment:gM,packing:_M,premultiplied_alpha_fragment:vM,project_vertex:xM,dithering_fragment:MM,dithering_pars_fragment:EM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:yM,shadowmap_pars_fragment:bM,shadowmap_pars_vertex:TM,shadowmap_vertex:wM,shadowmask_pars_fragment:AM,skinbase_vertex:RM,skinning_pars_vertex:PM,skinning_vertex:CM,skinnormal_vertex:LM,specularmap_fragment:DM,specularmap_pars_fragment:UM,tonemapping_fragment:IM,tonemapping_pars_fragment:NM,transmission_fragment:FM,transmission_pars_fragment:OM,uv_pars_fragment:BM,uv_pars_vertex:zM,uv_vertex:HM,worldpos_vertex:VM,background_vert:GM,background_frag:$M,backgroundCube_vert:kM,backgroundCube_frag:WM,cube_vert:XM,cube_frag:qM,depth_vert:YM,depth_frag:jM,distanceRGBA_vert:KM,distanceRGBA_frag:ZM,equirect_vert:JM,equirect_frag:QM,linedashed_vert:eE,linedashed_frag:tE,meshbasic_vert:nE,meshbasic_frag:iE,meshlambert_vert:sE,meshlambert_frag:rE,meshmatcap_vert:oE,meshmatcap_frag:aE,meshnormal_vert:cE,meshnormal_frag:lE,meshphong_vert:uE,meshphong_frag:fE,meshphysical_vert:hE,meshphysical_frag:dE,meshtoon_vert:pE,meshtoon_frag:mE,points_vert:gE,points_frag:_E,shadow_vert:vE,shadow_frag:xE,sprite_vert:ME,sprite_frag:EE},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaTest:{value:0}}},Un={basic:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ht([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ht([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ht([Me.points,Me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ht([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ht([Me.common,Me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ht([Me.sprite,Me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ht([Me.common,Me.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ht([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const _o={r:0,b:0,g:0};function SE(t,e,n,i,s,r,o){const a=new it(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function _(m,p){let y=!1,E=p.isScene===!0?p.background:null;switch(E&&E.isTexture&&(E=(p.backgroundBlurriness>0?n:e).get(E)),E===null?g(a,c):E&&E.isColor&&(g(E,1),y=!0),t.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),y=!0;break}(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===aa)?(u===void 0&&(u=new ii(new $r(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:$s(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=E.colorSpace!==ze,(f!==E||h!==E.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ii(new Vl(2,2),new Qi({name:"BackgroundMaterial",uniforms:$s(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=E.colorSpace!==ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(_o,mm(t)),i.buffers.color.setClear(_o.r,_o.g,_o.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function yE(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function f(O,H,G,k,W){let ue=!1;if(o){const oe=g(k,G,H);l!==oe&&(l=oe,d(l.object)),ue=p(O,k,G,W),ue&&y(O,k,G,W)}else{const oe=H.wireframe===!0;(l.geometry!==k.id||l.program!==G.id||l.wireframe!==oe)&&(l.geometry=k.id,l.program=G.id,l.wireframe=oe,ue=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,D(O,H,G,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(O){return i.isWebGL2?t.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?t.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,H,G){const k=G.wireframe===!0;let W=a[O.id];W===void 0&&(W={},a[O.id]=W);let ue=W[H.id];ue===void 0&&(ue={},W[H.id]=ue);let oe=ue[k];return oe===void 0&&(oe=m(h()),ue[k]=oe),oe}function m(O){const H=[],G=[],k=[];for(let W=0;W<s;W++)H[W]=0,G[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:k,object:O,attributes:{},index:null}}function p(O,H,G,k){const W=l.attributes,ue=H.attributes;let oe=0;const Te=G.getAttributes();for(const fe in Te)if(Te[fe].location>=0){const ce=W[fe];let _e=ue[fe];if(_e===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor)),ce===void 0||ce.attribute!==_e||_e&&ce.data!==_e.data)return!0;oe++}return l.attributesNum!==oe||l.index!==k}function y(O,H,G,k){const W={},ue=H.attributes;let oe=0;const Te=G.getAttributes();for(const fe in Te)if(Te[fe].location>=0){let ce=ue[fe];ce===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor));const _e={};_e.attribute=ce,ce&&ce.data&&(_e.data=ce.data),W[fe]=_e,oe++}l.attributes=W,l.attributesNum=oe,l.index=k}function E(){const O=l.newAttributes;for(let H=0,G=O.length;H<G;H++)O[H]=0}function v(O){M(O,0)}function M(O,H){const G=l.newAttributes,k=l.enabledAttributes,W=l.attributeDivisors;G[O]=1,k[O]===0&&(t.enableVertexAttribArray(O),k[O]=1),W[O]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),W[O]=H)}function b(){const O=l.newAttributes,H=l.enabledAttributes;for(let G=0,k=H.length;G<k;G++)H[G]!==O[G]&&(t.disableVertexAttribArray(G),H[G]=0)}function w(O,H,G,k,W,ue){i.isWebGL2===!0&&(G===t.INT||G===t.UNSIGNED_INT)?t.vertexAttribIPointer(O,H,G,W,ue):t.vertexAttribPointer(O,H,G,k,W,ue)}function D(O,H,G,k){if(i.isWebGL2===!1&&(O.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const W=k.attributes,ue=G.getAttributes(),oe=H.defaultAttributeValues;for(const Te in ue){const fe=ue[Te];if(fe.location>=0){let K=W[Te];if(K===void 0&&(Te==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),Te==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),K!==void 0){const ce=K.normalized,_e=K.itemSize,xe=n.get(K);if(xe===void 0)continue;const N=xe.buffer,Ie=xe.type,De=xe.bytesPerElement;if(K.isInterleavedBufferAttribute){const me=K.data,Le=me.stride,P=K.offset;if(me.isInstancedInterleavedBuffer){for(let C=0;C<fe.locationSize;C++)M(fe.location+C,me.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let C=0;C<fe.locationSize;C++)v(fe.location+C);t.bindBuffer(t.ARRAY_BUFFER,N);for(let C=0;C<fe.locationSize;C++)w(fe.location+C,_e/fe.locationSize,Ie,ce,Le*De,(P+_e/fe.locationSize*C)*De)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<fe.locationSize;me++)M(fe.location+me,K.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<fe.locationSize;me++)v(fe.location+me);t.bindBuffer(t.ARRAY_BUFFER,N);for(let me=0;me<fe.locationSize;me++)w(fe.location+me,_e/fe.locationSize,Ie,ce,_e*De,_e/fe.locationSize*me*De)}}else if(oe!==void 0){const ce=oe[Te];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(fe.location,ce);break;case 3:t.vertexAttrib3fv(fe.location,ce);break;case 4:t.vertexAttrib4fv(fe.location,ce);break;default:t.vertexAttrib1fv(fe.location,ce)}}}}b()}function x(){z();for(const O in a){const H=a[O];for(const G in H){const k=H[G];for(const W in k)_(k[W].object),delete k[W];delete H[G]}delete a[O]}}function T(O){if(a[O.id]===void 0)return;const H=a[O.id];for(const G in H){const k=H[G];for(const W in k)_(k[W].object),delete k[W];delete H[G]}delete a[O.id]}function I(O){for(const H in a){const G=a[H];if(G[O.id]===void 0)continue;const k=G[O.id];for(const W in k)_(k[W].object),delete k[W];delete G[O.id]}}function z(){U(),u=!0,l!==c&&(l=c,d(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:z,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:v,disableUnusedAttributes:b}}function bE(t,e,n,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,u){t.drawArrays(r,l,u),n.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,d;if(s)h=t,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,l,u,f),n.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function TE(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,v=o||e.has("OES_texture_float"),M=E&&v,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:b}}function wE(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Bi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const y=r?0:i,E=y*4;let v=p.clippingState||null;c.value=v,v=u(_,h,E,d);for(let M=0;M!==E;++M)v[M]=n[M];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==g;++E,v+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function AE(t){let e=new WeakMap;function n(o,a){return a===tl?o.mapping=Hs:a===nl&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===tl||a===nl)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $x(c.height/2);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class xm extends gm{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=4,Ff=[.125,.215,.35,.446,.526,.582],Hi=20,cc=new xm,Of=new it;let lc=null;const zi=(1+Math.sqrt(5))/2,Ss=1/zi,Bf=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,zi,Ss),new Y(0,zi,-Ss),new Y(Ss,0,zi),new Y(-Ss,0,zi),new Y(zi,Ss,0),new Y(-zi,Ss,0)];class zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){lc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Nr,format:bn,colorSpace:Bn,depthBuffer:!1},s=Hf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RE(r)),this._blurMaterial=PE(r,e,n)}return s}_compileMaterial(e){const n=new ii(this._lodPlanes[0],e);this._renderer.compile(n,cc)}_sceneToCubeUV(e,n,i,s){const a=new pn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Of),u.toneMapping=ri,u.autoClear=!1;const d=new hm({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new ii(new $r,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Of),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;vo(s,y*E,p>2?E:0,E,E),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Hs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;vo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,cc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bf[(s-1)%Bf.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ii(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let y=0;for(let w=0;w<Hi;++w){const D=w/g,x=Math.exp(-D*D/2);p.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const v=this._sizeLods[s],M=3*v*(s>E-Cs?s-E+Cs:0),b=4*(this._cubeSize-v);vo(n,M,b,3*v,2*v),c.setRenderTarget(n),c.render(f,cc)}}function RE(t){const e=[],n=[],i=[];let s=t;const r=t-Cs+1+Ff.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let c=1/a;o>t-Cs?c=Ff[o-t+Cs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),E=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,D=b>2?0:-1,x=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];y.set(x,g*_*b),E.set(h,m*_*b);const T=[b,b,b,b,b,b];v.set(T,p*_*b)}const M=new ai;M.setAttribute("position",new un(y,g)),M.setAttribute("uv",new un(E,m)),M.setAttribute("faceIndex",new un(v,p)),e.push(M),s>Cs&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hf(t,e,n){const i=new Zi(t,e,n);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function PE(t,e,n){const i=new Float32Array(Hi),s=new Y(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Vf(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Gf(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function CE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===tl||c===nl,u=c===Hs||c===Vs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new zf(t)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&s(f)){n===null&&(n=new zf(t));const h=l?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function DE(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let E=0,v=y.length;E<v;E+=3){const M=y[E+0],b=y[E+1],w=y[E+2];h.push(M,b,b,w,w,M)}}else{const y=_.array;g=_.version;for(let E=0,v=y.length/3-1;E<v;E+=3){const M=E+0,b=E+1,w=E+2;h.push(M,b,b,w,w,M)}}const m=new(om(h)?pm:dm)(h,1);m.version=g;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function UE(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,d){t.drawElements(r,d,a,h*c),n.update(d,r,1)}function f(h,d,_){if(_===0)return;let g,m;if(s)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,a,h*c,_),n.update(d,r,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function IE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function NE(t,e){return t[0]-e[0]}function FE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function OE(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new yt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let H=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",H)};var d=H;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let x=0;E===!0&&(x=1),v===!0&&(x=2),M===!0&&(x=3);let T=u.attributes.position.count*x,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const z=new Float32Array(T*I*4*g),U=new lm(z,T,I,g);U.type=ki,U.needsUpdate=!0;const O=x*4;for(let G=0;G<g;G++){const k=b[G],W=w[G],ue=D[G],oe=T*I*4*G;for(let Te=0;Te<k.count;Te++){const fe=Te*O;E===!0&&(o.fromBufferAttribute(k,Te),z[oe+fe+0]=o.x,z[oe+fe+1]=o.y,z[oe+fe+2]=o.z,z[oe+fe+3]=0),v===!0&&(o.fromBufferAttribute(W,Te),z[oe+fe+4]=o.x,z[oe+fe+5]=o.y,z[oe+fe+6]=o.z,z[oe+fe+7]=0),M===!0&&(o.fromBufferAttribute(ue,Te),z[oe+fe+8]=o.x,z[oe+fe+9]=o.y,z[oe+fe+10]=o.z,z[oe+fe+11]=ue.itemSize===4?o.w:1)}}m={count:g,texture:U,size:new Ge(T,I)},r.set(u,m),u.addEventListener("dispose",H)}let p=0;for(let E=0;E<h.length;E++)p+=h[E];const y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<_;v++){const M=g[v];M[0]=v,M[1]=h[v]}g.sort(FE);for(let v=0;v<8;v++)v<_&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(NE);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const M=a[v],b=M[0],w=M[1];b!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+v)!==m[b]&&u.setAttribute("morphTarget"+v,m[b]),p&&u.getAttribute("morphNormal"+v)!==p[b]&&u.setAttribute("morphNormal"+v,p[b]),s[v]=w,y+=w):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const E=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(t,"morphTargetBaseInfluence",E),f.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:c}}function BE(t,e,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);return s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER)),f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}const Mm=new ln,Em=new lm,Sm=new wx,ym=new _m,$f=[],kf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function _t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function la(t,e){let n=kf[e];n===void 0&&(n=new Int32Array(e),kf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2fv(this.addr,e),vt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_t(n,e))return;t.uniform3fv(this.addr,e),vt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4fv(this.addr,e),vt(n,e)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,i))return;qf.set(i),t.uniformMatrix2fv(this.addr,!1,qf),vt(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,i))return;Xf.set(i),t.uniformMatrix3fv(this.addr,!1,Xf),vt(n,i)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),vt(n,e)}else{if(_t(n,i))return;Wf.set(i),t.uniformMatrix4fv(this.addr,!1,Wf),vt(n,i)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2iv(this.addr,e),vt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3iv(this.addr,e),vt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4iv(this.addr,e),vt(n,e)}}function KE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2uiv(this.addr,e),vt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3uiv(this.addr,e),vt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4uiv(this.addr,e),vt(n,e)}}function eS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||Mm,s)}function tS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Sm,s)}function nS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||ym,s)}function iS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Em,s)}function sS(t){switch(t){case 5126:return zE;case 35664:return HE;case 35665:return VE;case 35666:return GE;case 35674:return $E;case 35675:return kE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return qE;case 35668:case 35672:return YE;case 35669:case 35673:return jE;case 5125:return KE;case 36294:return ZE;case 36295:return JE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}function rS(t,e){t.uniform1fv(this.addr,e)}function oS(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function aS(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function cS(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function lS(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uS(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fS(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hS(t,e){t.uniform1iv(this.addr,e)}function dS(t,e){t.uniform2iv(this.addr,e)}function pS(t,e){t.uniform3iv(this.addr,e)}function mS(t,e){t.uniform4iv(this.addr,e)}function gS(t,e){t.uniform1uiv(this.addr,e)}function _S(t,e){t.uniform2uiv(this.addr,e)}function vS(t,e){t.uniform3uiv(this.addr,e)}function xS(t,e){t.uniform4uiv(this.addr,e)}function MS(t,e,n){const i=this.cache,s=e.length,r=la(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||Mm,r[o])}function ES(t,e,n){const i=this.cache,s=e.length,r=la(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Sm,r[o])}function SS(t,e,n){const i=this.cache,s=e.length,r=la(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||ym,r[o])}function yS(t,e,n){const i=this.cache,s=e.length,r=la(n,s);_t(i,r)||(t.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Em,r[o])}function bS(t){switch(t){case 5126:return rS;case 35664:return oS;case 35665:return aS;case 35666:return cS;case 35674:return lS;case 35675:return uS;case 35676:return fS;case 5124:case 35670:return hS;case 35667:case 35671:return dS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return _S;case 36295:return vS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return yS}}class TS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=sS(n.type)}}class wS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=bS(n.type)}}class AS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function Yf(t,e){t.seq.push(e),t.map[e.id]=e}function RS(t,e,n){const i=t.name,s=i.length;for(uc.lastIndex=0;;){const r=uc.exec(i),o=uc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yf(n,l===void 0?new TS(a,t,e):new wS(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new AS(a),Yf(n,f)),n=f}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);RS(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function jf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let PS=0;function CS(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function LS(t){switch(t){case Bn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Kf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+CS(t.getShaderSource(e),o)}else return s}function DS(t,e){const n=LS(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function US(t,e){let n;switch(e){case Xv:n="Linear";break;case qv:n="Reinhard";break;case Yv:n="OptimizedCineon";break;case jv:n="ACESFilmic";break;case Kv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function IS(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function NS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function FS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function mr(t){return t!==""}function Zf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OS=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(t){return t.replace(OS,BS)}function BS(t,e){const n=Ve[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return al(n)}const zS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(t){return t.replace(zS,HS)}function HS(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VS(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function GS(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $S(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function kS(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case em:e="ENVMAP_BLENDING_MULTIPLY";break;case kv:e="ENVMAP_BLENDING_MIX";break;case Wv:e="ENVMAP_BLENDING_ADD";break}return e}function WS(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XS(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=VS(n),l=GS(n),u=$S(n),f=kS(n),h=WS(n),d=n.isWebGL2?"":IS(n),_=NS(r),g=s.createProgram();let m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[eh(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[d,eh(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ri?"#define TONE_MAPPING":"",n.toneMapping!==ri?Ve.tonemapping_pars_fragment:"",n.toneMapping!==ri?US("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,DS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(mr).join(`
`)),o=al(o),o=Zf(o,n),o=Jf(o,n),a=al(a),a=Zf(a,n),a=Jf(a,n),o=Qf(o),a=Qf(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+o,v=y+p+a,M=jf(s,s.VERTEX_SHADER,E),b=jf(s,s.FRAGMENT_SHADER,v);if(s.attachShader(g,M),s.attachShader(g,b),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),t.debug.checkShaderErrors){const x=s.getProgramInfoLog(g).trim(),T=s.getShaderInfoLog(M).trim(),I=s.getShaderInfoLog(b).trim();let z=!0,U=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,M,b);else{const O=Kf(s,M,"vertex"),H=Kf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+O+`
`+H)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||I==="")&&(U=!1);U&&(this.diagnostics={runnable:z,programLog:x,vertexShader:{log:T,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(M),s.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new Bo(s,g)),w};let D;return this.getAttributes=function(){return D===void 0&&(D=FS(s,g)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=PS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}let qS=0;class YS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jS(e),n.set(e,i)),i}}class jS{constructor(e){this.id=qS++,this.code=e,this.usedTimes=0}}function KS(t,e,n,i,s,r,o){const a=new um,c=new YS,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,T,I,z,U){const O=z.fog,H=U.geometry,G=x.isMeshStandardMaterial?z.environment:null,k=(x.isMeshStandardMaterial?n:e).get(x.envMap||G),W=k&&k.mapping===aa?k.image.height:null,ue=_[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Te=oe!==void 0?oe.length:0;let fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let K,ce,_e,xe;if(ue){const et=Un[ue];K=et.vertexShader,ce=et.fragmentShader}else K=x.vertexShader,ce=x.fragmentShader,c.update(x),_e=c.getVertexShaderID(x),xe=c.getFragmentShaderID(x);const N=t.getRenderTarget(),Ie=U.isInstancedMesh===!0,De=!!x.map,me=!!x.matcap,Le=!!k,P=!!x.aoMap,C=!!x.lightMap,V=!!x.bumpMap,ie=!!x.normalMap,Q=!!x.displacementMap,se=!!x.emissiveMap,de=!!x.metalnessMap,re=!!x.roughnessMap,le=x.clearcoat>0,ae=x.iridescence>0,A=x.sheen>0,S=x.transmission>0,B=le&&!!x.clearcoatMap,j=le&&!!x.clearcoatNormalMap,Z=le&&!!x.clearcoatRoughnessMap,he=ae&&!!x.iridescenceMap,L=ae&&!!x.iridescenceThicknessMap,J=A&&!!x.sheenColorMap,X=A&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Ee=!!x.specularColorMap,we=!!x.specularIntensityMap,ye=S&&!!x.transmissionMap,Se=S&&!!x.thicknessMap,Pe=!!x.gradientMap,Fe=!!x.alphaMap,at=x.alphaTest>0,F=!!x.extensions,ee=!!H.attributes.uv1,pe=!!H.attributes.uv2,be=!!H.attributes.uv3;return{isWebGL2:u,shaderID:ue,shaderName:x.type,vertexShader:K,fragmentShader:ce,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Bn,map:De,matcap:me,envMap:Le,envMapMode:Le&&k.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:C,bumpMap:V,normalMap:ie,displacementMap:h&&Q,emissiveMap:se,normalMapObjectSpace:ie&&x.normalMapType===mx,normalMapTangentSpace:ie&&x.normalMapType===sm,metalnessMap:de,roughnessMap:re,clearcoat:le,clearcoatMap:B,clearcoatNormalMap:j,clearcoatRoughnessMap:Z,iridescence:ae,iridescenceMap:he,iridescenceThicknessMap:L,sheen:A,sheenColorMap:J,sheenRoughnessMap:X,specularMap:ge,specularColorMap:Ee,specularIntensityMap:we,transmission:S,transmissionMap:ye,thicknessMap:Se,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Ns,alphaMap:Fe,alphaTest:at,combine:x.combine,mapUv:De&&g(x.map.channel),aoMapUv:P&&g(x.aoMap.channel),lightMapUv:C&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:ie&&g(x.normalMap.channel),displacementMapUv:Q&&g(x.displacementMap.channel),emissiveMapUv:se&&g(x.emissiveMap.channel),metalnessMapUv:de&&g(x.metalnessMap.channel),roughnessMapUv:re&&g(x.roughnessMap.channel),clearcoatMapUv:B&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:j&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:L&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:J&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&g(x.sheenRoughnessMap.channel),specularMapUv:ge&&g(x.specularMap.channel),specularColorMapUv:Ee&&g(x.specularColorMap.channel),specularIntensityMapUv:we&&g(x.specularIntensityMap.channel),transmissionMapUv:ye&&g(x.transmissionMap.channel),thicknessMapUv:Se&&g(x.thicknessMap.channel),alphaMapUv:Fe&&g(x.alphaMap.channel),vertexTangents:ie&&!!H.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:pe,vertexUv3s:be,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(De||Fe),fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:ri,useLegacyLights:t.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:F&&x.extensions.derivatives===!0,extensionFragDepth:F&&x.extensions.fragDepth===!0,extensionDrawBuffers:F&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(y(T,x),E(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),x.push(a.mask)}function v(x){const T=_[x.type];let I;if(T){const z=Un[T];I=zx.clone(z.uniforms)}else I=x.uniforms;return I}function M(x,T){let I;for(let z=0,U=l.length;z<U;z++){const O=l[z];if(O.cacheKey===T){I=O,++I.usedTimes;break}}return I===void 0&&(I=new XS(t,T,x,r),l.push(I)),I}function b(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:D}}function ZS(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function JS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function th(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,_,g,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function c(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function l(f,h){n.length>1&&n.sort(f||JS),i.length>1&&i.sort(h||th),s.length>1&&s.sort(h||th)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function QS(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new nh,t.set(i,[o])):s>=r.length?(o=new nh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ey(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new it};break;case"SpotLight":n={position:new Y,direction:new Y,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function ty(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ny=0;function iy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sy(t,e){const n=new ey,i=ty(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new Y);const r=new Y,o=new gt,a=new gt;function c(u,f){let h=0,d=0,_=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let g=0,m=0,p=0,y=0,E=0,v=0,M=0,b=0,w=0,D=0;u.sort(iy);const x=f===!0?Math.PI:1;for(let I=0,z=u.length;I<z;I++){const U=u[I],O=U.color,H=U.intensity,G=U.distance,k=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=O.r*H*x,d+=O.g*H*x,_+=O.b*H*x;else if(U.isLightProbe)for(let W=0;W<9;W++)s.probe[W].addScaledVector(U.sh.coefficients[W],H);else if(U.isDirectionalLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const ue=U.shadow,oe=i.get(U);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,s.directionalShadow[g]=oe,s.directionalShadowMap[g]=k,s.directionalShadowMatrix[g]=U.shadow.matrix,v++}s.directional[g]=W,g++}else if(U.isSpotLight){const W=n.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(O).multiplyScalar(H*x),W.distance=G,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,s.spot[p]=W;const ue=U.shadow;if(U.map&&(s.spotLightMap[w]=U.map,w++,ue.updateMatrices(U),U.castShadow&&D++),s.spotLightMatrix[p]=ue.matrix,U.castShadow){const oe=i.get(U);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,s.spotShadow[p]=oe,s.spotShadowMap[p]=k,b++}p++}else if(U.isRectAreaLight){const W=n.get(U);W.color.copy(O).multiplyScalar(H),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),s.rectArea[y]=W,y++}else if(U.isPointLight){const W=n.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*x),W.distance=U.distance,W.decay=U.decay,U.castShadow){const ue=U.shadow,oe=i.get(U);oe.shadowBias=ue.bias,oe.shadowNormalBias=ue.normalBias,oe.shadowRadius=ue.radius,oe.shadowMapSize=ue.mapSize,oe.shadowCameraNear=ue.camera.near,oe.shadowCameraFar=ue.camera.far,s.pointShadow[m]=oe,s.pointShadowMap[m]=k,s.pointShadowMatrix[m]=U.shadow.matrix,M++}s.point[m]=W,m++}else if(U.isHemisphereLight){const W=n.get(U);W.skyColor.copy(U.color).multiplyScalar(H*x),W.groundColor.copy(U.groundColor).multiplyScalar(H*x),s.hemi[E]=W,E++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==y||T.hemiLength!==E||T.numDirectionalShadows!==v||T.numPointShadows!==M||T.numSpotShadows!==b||T.numSpotMaps!==w)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=b+w-D,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=D,T.directionalLength=g,T.pointLength=m,T.spotLength=p,T.rectAreaLength=y,T.hemiLength=E,T.numDirectionalShadows=v,T.numPointShadows=M,T.numSpotShadows=b,T.numSpotMaps=w,s.version=ny++)}function l(u,f){let h=0,d=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let y=0,E=u.length;y<E;y++){const v=u[y];if(v.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(v.isSpotLight){const M=s.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(v.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const M=s.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function ih(t,e){const n=new sy(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function c(f){n.setup(i,f)}function l(f){n.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ry(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let c;return a===void 0?(c=new ih(t,e),n.set(r,[c])):o>=a.length?(c=new ih(t,e),a.push(c)):c=a[o],c}function s(){n=new WeakMap}return{get:i,dispose:s}}class oy extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ay extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
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
}`;function uy(t,e,n){let i=new Hl;const s=new Ge,r=new Ge,o=new yt,a=new oy({depthPacking:px}),c=new ay,l={},u=n.maxTextureSize,f={[bi]:jt,[jt]:bi,[ni]:ni},h=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:cy,fragmentShader:ly}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new ai;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ii(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zp;let p=this.type;this.render=function(M,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const D=t.getRenderTarget(),x=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),I=t.state;I.setBlending(yi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==Zn&&this.type===Zn,U=p===Zn&&this.type!==Zn;for(let O=0,H=M.length;O<H;O++){const G=M[O],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const W=k.getFrameExtents();if(s.multiply(W),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,k.mapSize.y=r.y)),k.map===null||z===!0||U===!0){const oe=this.type!==Zn?{minFilter:Gt,magFilter:Gt}:{};k.map!==null&&k.map.dispose(),k.map=new Zi(s.x,s.y,oe),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const ue=k.getViewportCount();for(let oe=0;oe<ue;oe++){const Te=k.getViewport(oe);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),I.viewport(o),k.updateMatrices(G,oe),i=k.getFrustum(),v(b,w,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===Zn&&y(k,w),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(D,x,T)};function y(M,b){const w=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zi(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,w,h,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,w,d,g,null)}function E(M,b,w,D){let x=null;const T=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)x=T;else if(x=w.isPointLight===!0?c:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=x.uuid,z=b.uuid;let U=l[I];U===void 0&&(U={},l[I]=U);let O=U[z];O===void 0&&(O=x.clone(),U[z]=O),x=O}if(x.visible=b.visible,x.wireframe=b.wireframe,D===Zn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=t.properties.get(x);I.light=w}return x}function v(M,b,w,D,x){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Zn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const z=e.update(M),U=M.material;if(Array.isArray(U)){const O=z.groups;for(let H=0,G=O.length;H<G;H++){const k=O[H],W=U[k.materialIndex];if(W&&W.visible){const ue=E(M,W,D,x);t.renderBufferDirect(w,null,z,ue,M,k)}}}else if(U.visible){const O=E(M,U,D,x);t.renderBufferDirect(w,null,z,O,M,null)}}const I=M.children;for(let z=0,U=I.length;z<U;z++)v(I[z],b,w,D,x)}}function fy(t,e,n){const i=n.isWebGL2;function s(){let F=!1;const ee=new yt;let pe=null;const be=new yt(0,0,0,0);return{setMask:function(Re){pe!==Re&&!F&&(t.colorMask(Re,Re,Re,Re),pe=Re)},setLocked:function(Re){F=Re},setClear:function(Re,et,tt,Rt,ui){ui===!0&&(Re*=Rt,et*=Rt,tt*=Rt),ee.set(Re,et,tt,Rt),be.equals(ee)===!1&&(t.clearColor(Re,et,tt,Rt),be.copy(ee))},reset:function(){F=!1,pe=null,be.set(-1,0,0,0)}}}function r(){let F=!1,ee=null,pe=null,be=null;return{setTest:function(Re){Re?N(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(Re){ee!==Re&&!F&&(t.depthMask(Re),ee=Re)},setFunc:function(Re){if(pe!==Re){switch(Re){case Ov:t.depthFunc(t.NEVER);break;case Bv:t.depthFunc(t.ALWAYS);break;case zv:t.depthFunc(t.LESS);break;case el:t.depthFunc(t.LEQUAL);break;case Hv:t.depthFunc(t.EQUAL);break;case Vv:t.depthFunc(t.GEQUAL);break;case Gv:t.depthFunc(t.GREATER);break;case $v:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Re}},setLocked:function(Re){F=Re},setClear:function(Re){be!==Re&&(t.clearDepth(Re),be=Re)},reset:function(){F=!1,ee=null,pe=null,be=null}}}function o(){let F=!1,ee=null,pe=null,be=null,Re=null,et=null,tt=null,Rt=null,ui=null;return{setTest:function(ct){F||(ct?N(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(ct){ee!==ct&&!F&&(t.stencilMask(ct),ee=ct)},setFunc:function(ct,fn,wn){(pe!==ct||be!==fn||Re!==wn)&&(t.stencilFunc(ct,fn,wn),pe=ct,be=fn,Re=wn)},setOp:function(ct,fn,wn){(et!==ct||tt!==fn||Rt!==wn)&&(t.stencilOp(ct,fn,wn),et=ct,tt=fn,Rt=wn)},setLocked:function(ct){F=ct},setClear:function(ct){ui!==ct&&(t.clearStencil(ct),ui=ct)},reset:function(){F=!1,ee=null,pe=null,be=null,Re=null,et=null,tt=null,Rt=null,ui=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,E=null,v=null,M=null,b=null,w=null,D=null,x=!1,T=null,I=null,z=null,U=null,O=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=k>=2);let ue=null,oe={};const Te=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),K=new yt().fromArray(Te),ce=new yt().fromArray(fe);function _e(F,ee,pe,be){const Re=new Uint8Array(4),et=t.createTexture();t.bindTexture(F,et),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<pe;tt++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(ee,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(ee+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return et}const xe={};xe[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),N(t.DEPTH_TEST),c.setFunc(el),Q(!1),se(Vu),N(t.CULL_FACE),V(yi);function N(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function Ie(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function De(F,ee){return d[F]!==ee?(t.bindFramebuffer(F,ee),d[F]=ee,i&&(F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ee),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ee)),!0):!1}function me(F,ee){let pe=g,be=!1;if(F)if(pe=_.get(ee),pe===void 0&&(pe=[],_.set(ee,pe)),F.isWebGLMultipleRenderTargets){const Re=F.texture;if(pe.length!==Re.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Re.length;et<tt;et++)pe[et]=t.COLOR_ATTACHMENT0+et;pe.length=Re.length,be=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,be=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,be=!0);be&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Le(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const P={[Ps]:t.FUNC_ADD,[wv]:t.FUNC_SUBTRACT,[Av]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Wu]=t.MIN,P[Xu]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(P[Wu]=F.MIN_EXT,P[Xu]=F.MAX_EXT)}const C={[Rv]:t.ZERO,[Pv]:t.ONE,[Cv]:t.SRC_COLOR,[Jp]:t.SRC_ALPHA,[Fv]:t.SRC_ALPHA_SATURATE,[Iv]:t.DST_COLOR,[Dv]:t.DST_ALPHA,[Lv]:t.ONE_MINUS_SRC_COLOR,[Qp]:t.ONE_MINUS_SRC_ALPHA,[Nv]:t.ONE_MINUS_DST_COLOR,[Uv]:t.ONE_MINUS_DST_ALPHA};function V(F,ee,pe,be,Re,et,tt,Rt){if(F===yi){p===!0&&(Ie(t.BLEND),p=!1);return}if(p===!1&&(N(t.BLEND),p=!0),F!==Tv){if(F!==y||Rt!==x){if((E!==Ps||b!==Ps)&&(t.blendEquation(t.FUNC_ADD),E=Ps,b=Ps),Rt)switch(F){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gu:t.blendFunc(t.ONE,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ku:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ku:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,w=null,D=null,y=F,x=Rt}return}Re=Re||ee,et=et||pe,tt=tt||be,(ee!==E||Re!==b)&&(t.blendEquationSeparate(P[ee],P[Re]),E=ee,b=Re),(pe!==v||be!==M||et!==w||tt!==D)&&(t.blendFuncSeparate(C[pe],C[be],C[et],C[tt]),v=pe,M=be,w=et,D=tt),y=F,x=!1}function ie(F,ee){F.side===ni?Ie(t.CULL_FACE):N(t.CULL_FACE);let pe=F.side===jt;ee&&(pe=!pe),Q(pe),F.blending===Ns&&F.transparent===!1?V(yi):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);const be=F.stencilWrite;l.setTest(be),be&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(F){T!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),T=F)}function se(F){F!==Sv?(N(t.CULL_FACE),F!==I&&(F===Vu?t.cullFace(t.BACK):F===yv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),I=F}function de(F){F!==z&&(G&&t.lineWidth(F),z=F)}function re(F,ee,pe){F?(N(t.POLYGON_OFFSET_FILL),(U!==ee||O!==pe)&&(t.polygonOffset(ee,pe),U=ee,O=pe)):Ie(t.POLYGON_OFFSET_FILL)}function le(F){F?N(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function ae(F){F===void 0&&(F=t.TEXTURE0+H-1),ue!==F&&(t.activeTexture(F),ue=F)}function A(F,ee,pe){pe===void 0&&(ue===null?pe=t.TEXTURE0+H-1:pe=ue);let be=oe[pe];be===void 0&&(be={type:void 0,texture:void 0},oe[pe]=be),(be.type!==F||be.texture!==ee)&&(ue!==pe&&(t.activeTexture(pe),ue=pe),t.bindTexture(F,ee||xe[F]),be.type=F,be.texture=ee)}function S(){const F=oe[ue];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(F){K.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function Se(F){ce.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ce.copy(F))}function Pe(F,ee){let pe=f.get(ee);pe===void 0&&(pe=new WeakMap,f.set(ee,pe));let be=pe.get(F);be===void 0&&(be=t.getUniformBlockIndex(ee,F.name),pe.set(F,be))}function Fe(F,ee){const be=f.get(ee).get(F);u.get(ee)!==be&&(t.uniformBlockBinding(ee,be,F.__bindingPointIndex),u.set(ee,be))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ue=null,oe={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,E=null,v=null,M=null,b=null,w=null,D=null,x=!1,T=null,I=null,z=null,U=null,O=null,K.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:N,disable:Ie,bindFramebuffer:De,drawBuffers:me,useProgram:Le,setBlending:V,setMaterial:ie,setFlipSided:Q,setCullFace:se,setLineWidth:de,setPolygonOffset:re,setScissorTest:le,activeTexture:ae,bindTexture:A,unbindTexture:S,compressedTexImage2D:B,compressedTexImage3D:j,texImage2D:Ee,texImage3D:we,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:X,texStorage3D:ge,texSubImage2D:Z,texSubImage3D:he,compressedTexSubImage2D:L,compressedTexSubImage3D:J,scissor:ye,viewport:Se,reset:at}}function hy(t,e,n,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return p?new OffscreenCanvas(A,S):qo("canvas")}function E(A,S,B,j){let Z=1;if((A.width>j||A.height>j)&&(Z=j/Math.max(A.width,A.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const he=S?vx:Math.floor,L=he(Z*A.width),J=he(Z*A.height);g===void 0&&(g=y(L,J));const X=B?y(L,J):g;return X.width=L,X.height=J,X.getContext("2d").drawImage(A,0,0,L,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+L+"x"+J+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Mf(A.width)&&Mf(A.height)}function M(A){return a?!1:A.wrapS!==yn||A.wrapT!==yn||A.minFilter!==Gt&&A.minFilter!==dn}function b(A,S){return A.generateMipmaps&&S&&A.minFilter!==Gt&&A.minFilter!==dn}function w(A){t.generateMipmap(A)}function D(A,S,B,j,Z=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he=S;return S===t.RED&&(B===t.FLOAT&&(he=t.R32F),B===t.HALF_FLOAT&&(he=t.R16F),B===t.UNSIGNED_BYTE&&(he=t.R8)),S===t.RG&&(B===t.FLOAT&&(he=t.RG32F),B===t.HALF_FLOAT&&(he=t.RG16F),B===t.UNSIGNED_BYTE&&(he=t.RG8)),S===t.RGBA&&(B===t.FLOAT&&(he=t.RGBA32F),B===t.HALF_FLOAT&&(he=t.RGBA16F),B===t.UNSIGNED_BYTE&&(he=j===ze&&Z===!1?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)),(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function x(A,S,B){return b(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===Gt||A===qu||A===Fa?t.NEAREST:t.LINEAR}function I(A){const S=A.target;S.removeEventListener("dispose",I),U(S),S.isVideoTexture&&_.delete(S)}function z(A){const S=A.target;S.removeEventListener("dispose",z),H(S)}function U(A){const S=i.get(A);if(S.__webglInit===void 0)return;const B=A.source,j=m.get(B);if(j){const Z=j[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(A),Object.keys(j).length===0&&m.delete(B)}i.remove(A)}function O(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const B=A.source,j=m.get(B);delete j[S.__cacheKey],o.memory.textures--}function H(A){const S=A.texture,B=i.get(A),j=i.get(S);if(j.__webglTexture!==void 0&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)t.deleteFramebuffer(B.__webglFramebuffer[Z]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[Z]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Z=0;Z<B.__webglColorRenderbuffer.length;Z++)B.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[Z]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,he=S.length;Z<he;Z++){const L=i.get(S[Z]);L.__webglTexture&&(t.deleteTexture(L.__webglTexture),o.memory.textures--),i.remove(S[Z])}i.remove(S),i.remove(A)}let G=0;function k(){G=0}function W(){const A=G;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),G+=1,A}function ue(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function oe(A,S){const B=i.get(A);if(A.isVideoTexture&&le(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(B,A,S);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function Te(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Ie(B,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function fe(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Ie(B,A,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function K(A,S){const B=i.get(A);if(A.version>0&&B.__version!==A.version){De(B,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const ce={[il]:t.REPEAT,[yn]:t.CLAMP_TO_EDGE,[sl]:t.MIRRORED_REPEAT},_e={[Gt]:t.NEAREST,[qu]:t.NEAREST_MIPMAP_NEAREST,[Fa]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[Zv]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR};function xe(A,S,B){if(B?(t.texParameteri(A,t.TEXTURE_WRAP_S,ce[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ce[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ce[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,_e[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,_e[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==yn||S.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Gt&&S.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Gt||S.minFilter!==Fa&&S.minFilter!==Ir||S.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function N(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I));const j=S.source;let Z=m.get(j);Z===void 0&&(Z={},m.set(j,Z));const he=ue(S);if(he!==A.__cacheKey){Z[he]===void 0&&(Z[he]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[he].usedTimes++;const L=Z[A.__cacheKey];L!==void 0&&(Z[A.__cacheKey].usedTimes--,L.usedTimes===0&&O(S)),A.__cacheKey=he,A.__webglTexture=Z[he].texture}return B}function Ie(A,S,B){let j=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=t.TEXTURE_3D);const Z=N(A,S),he=S.source;n.bindTexture(j,A.__webglTexture,t.TEXTURE0+B);const L=i.get(he);if(he.version!==L.__version||Z===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const J=M(S)&&v(S.image)===!1;let X=E(S.image,J,!1,u);X=ae(S,X);const ge=v(X)||a,Ee=r.convert(S.format,S.colorSpace);let we=r.convert(S.type),ye=D(S.internalFormat,Ee,we,S.colorSpace);xe(j,S,ge);let Se;const Pe=S.mipmaps,Fe=a&&S.isVideoTexture!==!0,at=L.__version===void 0||Z===!0,F=x(S,X,ge);if(S.isDepthTexture)ye=t.DEPTH_COMPONENT,a?S.type===ki?ye=t.DEPTH_COMPONENT32F:S.type===$i?ye=t.DEPTH_COMPONENT24:S.type===Fs?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:S.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===qi&&ye===t.DEPTH_COMPONENT&&S.type!==nm&&S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=$i,we=r.convert(S.type)),S.format===Gs&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,S.type!==Fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Fs,we=r.convert(S.type))),at&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ye,X.width,X.height):n.texImage2D(t.TEXTURE_2D,0,ye,X.width,X.height,0,Ee,we,null));else if(S.isDataTexture)if(Pe.length>0&&ge){Fe&&at&&n.texStorage2D(t.TEXTURE_2D,F,ye,Pe[0].width,Pe[0].height);for(let ee=0,pe=Pe.length;ee<pe;ee++)Se=Pe[ee],Fe?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ee,we,Se.data):n.texImage2D(t.TEXTURE_2D,ee,ye,Se.width,Se.height,0,Ee,we,Se.data);S.generateMipmaps=!1}else Fe?(at&&n.texStorage2D(t.TEXTURE_2D,F,ye,X.width,X.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,X.width,X.height,Ee,we,X.data)):n.texImage2D(t.TEXTURE_2D,0,ye,X.width,X.height,0,Ee,we,X.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,ye,Pe[0].width,Pe[0].height,X.depth);for(let ee=0,pe=Pe.length;ee<pe;ee++)Se=Pe[ee],S.format!==bn?Ee!==null?Fe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,X.depth,Ee,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,ye,Se.width,Se.height,X.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,X.depth,Ee,we,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,ye,Se.width,Se.height,X.depth,0,Ee,we,Se.data)}else{Fe&&at&&n.texStorage2D(t.TEXTURE_2D,F,ye,Pe[0].width,Pe[0].height);for(let ee=0,pe=Pe.length;ee<pe;ee++)Se=Pe[ee],S.format!==bn?Ee!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ee,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ee,we,Se.data):n.texImage2D(t.TEXTURE_2D,ee,ye,Se.width,Se.height,0,Ee,we,Se.data)}else if(S.isDataArrayTexture)Fe?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,ye,X.width,X.height,X.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Ee,we,X.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,X.width,X.height,X.depth,0,Ee,we,X.data);else if(S.isData3DTexture)Fe?(at&&n.texStorage3D(t.TEXTURE_3D,F,ye,X.width,X.height,X.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Ee,we,X.data)):n.texImage3D(t.TEXTURE_3D,0,ye,X.width,X.height,X.depth,0,Ee,we,X.data);else if(S.isFramebufferTexture){if(at)if(Fe)n.texStorage2D(t.TEXTURE_2D,F,ye,X.width,X.height);else{let ee=X.width,pe=X.height;for(let be=0;be<F;be++)n.texImage2D(t.TEXTURE_2D,be,ye,ee,pe,0,Ee,we,null),ee>>=1,pe>>=1}}else if(Pe.length>0&&ge){Fe&&at&&n.texStorage2D(t.TEXTURE_2D,F,ye,Pe[0].width,Pe[0].height);for(let ee=0,pe=Pe.length;ee<pe;ee++)Se=Pe[ee],Fe?n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Ee,we,Se):n.texImage2D(t.TEXTURE_2D,ee,ye,Ee,we,Se);S.generateMipmaps=!1}else Fe?(at&&n.texStorage2D(t.TEXTURE_2D,F,ye,X.width,X.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,we,X)):n.texImage2D(t.TEXTURE_2D,0,ye,Ee,we,X);b(S,ge)&&w(j),L.__version=he.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function De(A,S,B){if(S.image.length!==6)return;const j=N(A,S),Z=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const he=i.get(Z);if(Z.version!==he.__version||j===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const L=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,X=[];for(let ee=0;ee<6;ee++)!L&&!J?X[ee]=E(S.image[ee],!1,!0,l):X[ee]=J?S.image[ee].image:S.image[ee],X[ee]=ae(S,X[ee]);const ge=X[0],Ee=v(ge)||a,we=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),Se=D(S.internalFormat,we,ye,S.colorSpace),Pe=a&&S.isVideoTexture!==!0,Fe=he.__version===void 0||j===!0;let at=x(S,ge,Ee);xe(t.TEXTURE_CUBE_MAP,S,Ee);let F;if(L){Pe&&Fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Se,ge.width,ge.height);for(let ee=0;ee<6;ee++){F=X[ee].mipmaps;for(let pe=0;pe<F.length;pe++){const be=F[pe];S.format!==bn?we!==null?Pe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,be.width,be.height,we,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,be.width,be.height,we,ye,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Se,be.width,be.height,0,we,ye,be.data)}}}else{F=S.mipmaps,Pe&&Fe&&(F.length>0&&at++,n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Se,X[0].width,X[0].height));for(let ee=0;ee<6;ee++)if(J){Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,X[ee].width,X[ee].height,we,ye,X[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Se,X[ee].width,X[ee].height,0,we,ye,X[ee].data);for(let pe=0;pe<F.length;pe++){const Re=F[pe].image[ee].image;Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Re.width,Re.height,we,ye,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Se,Re.width,Re.height,0,we,ye,Re.data)}}else{Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we,ye,X[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Se,we,ye,X[ee]);for(let pe=0;pe<F.length;pe++){const be=F[pe];Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,we,ye,be.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Se,we,ye,be.image[ee])}}}b(S,Ee)&&w(t.TEXTURE_CUBE_MAP),he.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,B,j,Z){const he=r.convert(B.format,B.colorSpace),L=r.convert(B.type),J=D(B.internalFormat,he,L,B.colorSpace);i.get(S).__hasExternalTextures||(Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,J,S.width,S.height,S.depth,0,he,L,null):n.texImage2D(Z,0,J,S.width,S.height,0,he,L,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),re(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Z,i.get(B).__webglTexture,0,de(S)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,Z,i.get(B).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(A,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let j=t.DEPTH_COMPONENT16;if(B||re(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ki?j=t.DEPTH_COMPONENT32F:Z.type===$i&&(j=t.DEPTH_COMPONENT24));const he=de(S);re(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,j,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,he,j,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,j,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const j=de(S);B&&re(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,S.width,S.height):re(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const j=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<j.length;Z++){const he=j[Z],L=r.convert(he.format,he.colorSpace),J=r.convert(he.type),X=D(he.internalFormat,L,J,he.colorSpace),ge=de(S);B&&re(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,X,S.width,S.height):re(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,X,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,X,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe(S.depthTexture,0);const j=i.get(S.depthTexture).__webglTexture,Z=de(S);if(S.depthTexture.format===qi)re(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(S.depthTexture.format===Gs)re(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function C(A){const S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]=t.createRenderbuffer(),Le(S.__webglDepthbuffer[j],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Le(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(A,S,B){const j=i.get(A);S!==void 0&&me(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),B!==void 0&&C(A)}function ie(A){const S=A.texture,B=i.get(A),j=i.get(S);A.addEventListener("dispose",z),A.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=S.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,he=A.isWebGLMultipleRenderTargets===!0,L=v(A)||a;if(Z){B.__webglFramebuffer=[];for(let J=0;J<6;J++)B.__webglFramebuffer[J]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),he)if(s.drawBuffers){const J=A.texture;for(let X=0,ge=J.length;X<ge;X++){const Ee=i.get(J[X]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&re(A)===!1){const J=he?S:[S];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let X=0;X<J.length;X++){const ge=J[X];B.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[X]);const Ee=r.convert(ge.format,ge.colorSpace),we=r.convert(ge.type),ye=D(ge.internalFormat,Ee,we,ge.colorSpace,A.isXRRenderTarget===!0),Se=de(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ye,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,B.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),xe(t.TEXTURE_CUBE_MAP,S,L);for(let J=0;J<6;J++)me(B.__webglFramebuffer[J],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J);b(S,L)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){const J=A.texture;for(let X=0,ge=J.length;X<ge;X++){const Ee=J[X],we=i.get(Ee);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),xe(t.TEXTURE_2D,Ee,L),me(B.__webglFramebuffer,A,Ee,t.COLOR_ATTACHMENT0+X,t.TEXTURE_2D),b(Ee,L)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let J=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?J=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(J,j.__webglTexture),xe(J,S,L),me(B.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,J),b(S,L)&&w(J),n.unbindTexture()}A.depthBuffer&&C(A)}function Q(A){const S=v(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let j=0,Z=B.length;j<Z;j++){const he=B[j];if(b(he,S)){const L=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,J=i.get(he).__webglTexture;n.bindTexture(L,J),w(L),n.unbindTexture()}}}function se(A){if(a&&A.samples>0&&re(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,j=A.height;let Z=t.COLOR_BUFFER_BIT;const he=[],L=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=i.get(A),X=A.isWebGLMultipleRenderTargets===!0;if(X)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){he.push(t.COLOR_ATTACHMENT0+ge),A.depthBuffer&&he.push(L);const Ee=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(Ee===!1&&(A.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),X&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,J.__webglColorRenderbuffer[ge]),Ee===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[L]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[L])),X){const we=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,B,j,0,0,B,j,Z,t.NEAREST),d&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,J.__webglColorRenderbuffer[ge]);const Ee=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function de(A){return Math.min(f,A.samples)}function re(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(A){const S=o.render.frame;_.get(A)!==S&&(_.set(A,S),A.update())}function ae(A,S){const B=A.colorSpace,j=A.format,Z=A.type;return A.isCompressedTexture===!0||A.format===rl||B!==Bn&&B!==ji&&(B===ze?a===!1?e.has("EXT_sRGB")===!0&&j===bn?(A.format=rl,A.minFilter=dn,A.generateMipmaps=!1):S=am.sRGBToLinear(S):(j!==bn||Z!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=oe,this.setTexture2DArray=Te,this.setTexture3D=fe,this.setTextureCube=K,this.rebindTextures=V,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=me,this.useMultisampledRTT=re}function dy(t,e,n){const i=n.isWebGL2;function s(r,o=ji){let a;if(r===Ki)return t.UNSIGNED_BYTE;if(r===tx)return t.UNSIGNED_SHORT_4_4_4_4;if(r===nx)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Jv)return t.BYTE;if(r===Qv)return t.SHORT;if(r===nm)return t.UNSIGNED_SHORT;if(r===ex)return t.INT;if(r===$i)return t.UNSIGNED_INT;if(r===ki)return t.FLOAT;if(r===Nr)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ix)return t.ALPHA;if(r===bn)return t.RGBA;if(r===sx)return t.LUMINANCE;if(r===rx)return t.LUMINANCE_ALPHA;if(r===qi)return t.DEPTH_COMPONENT;if(r===Gs)return t.DEPTH_STENCIL;if(r===rl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ox)return t.RED;if(r===ax)return t.RED_INTEGER;if(r===cx)return t.RG;if(r===lx)return t.RG_INTEGER;if(r===ux)return t.RGBA_INTEGER;if(r===Oa||r===Ba||r===za||r===Ha)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Oa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Oa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yu||r===ju||r===Ku||r===Zu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ju)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ku)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ju||r===Qu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ju)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Qu)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ef||r===tf||r===nf||r===sf||r===rf||r===of||r===af||r===cf||r===lf||r===uf||r===ff||r===hf||r===df||r===pf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ef)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===of)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===af)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ff)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===df)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pf)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Va)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Va)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===hx||r===mf||r===gf||r===_f)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Va)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_f)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class py extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xo extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gy extends ln{constructor(e,n,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:qi,u!==qi&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qi&&(i=$i),i===void 0&&u===Gs&&(i=Fs),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1}}class _y extends ts{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const g=n.getContextAttributes();let m=null,p=null;const y=[],E=[],v=new Set,M=new Map,b=new pn;b.layers.enable(1),b.viewport=new yt;const w=new pn;w.layers.enable(2),w.viewport=new yt;const D=[b,w],x=new py;x.layers.enable(1),x.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=y[K];return ce===void 0&&(ce=new fc,y[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=y[K];return ce===void 0&&(ce=new fc,y[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=y[K];return ce===void 0&&(ce=new fc,y[K]=ce),ce.getHandSpace()};function z(K){const ce=E.indexOf(K.inputSource);if(ce===-1)return;const _e=y[ce];_e!==void 0&&(_e.update(K.inputSource,K.frame,l||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let K=0;K<y.length;K++){const ce=E[K];ce!==null&&(E[K]=null,y[K].disconnect(ce))}T=null,I=null,e.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,ce),s.updateRenderState({baseLayer:d}),p=new Zi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,_e=null,xe=null;g.depth&&(xe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?Gs:qi,_e=g.stencil?Fs:$i);const N={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(N),s.updateRenderState({layers:[h]}),p=new Zi(h.textureWidth,h.textureHeight,{format:bn,type:Ki,depthTexture:new gy(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ie=e.properties.get(p);Ie.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(K){for(let ce=0;ce<K.removed.length;ce++){const _e=K.removed[ce],xe=E.indexOf(_e);xe>=0&&(E[xe]=null,y[xe].disconnect(_e))}for(let ce=0;ce<K.added.length;ce++){const _e=K.added[ce];let xe=E.indexOf(_e);if(xe===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=E.length){E.push(_e),xe=Ie;break}else if(E[Ie]===null){E[Ie]=_e,xe=Ie;break}if(xe===-1)break}const N=y[xe];N&&N.connect(_e)}}const H=new Y,G=new Y;function k(K,ce,_e){H.setFromMatrixPosition(ce.matrixWorld),G.setFromMatrixPosition(_e.matrixWorld);const xe=H.distanceTo(G),N=ce.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,De=N[14]/(N[10]-1),me=N[14]/(N[10]+1),Le=(N[9]+1)/N[5],P=(N[9]-1)/N[5],C=(N[8]-1)/N[0],V=(Ie[8]+1)/Ie[0],ie=De*C,Q=De*V,se=xe/(-C+V),de=se*-C;ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(de),K.translateZ(se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const re=De+se,le=me+se,ae=ie-de,A=Q+(xe-de),S=Le*me/le*re,B=P*me/le*re;K.projectionMatrix.makePerspective(ae,A,S,B,re,le),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function W(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;x.near=w.near=b.near=K.near,x.far=w.far=b.far=K.far,(T!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,I=x.far);const ce=K.parent,_e=x.cameras;W(x,ce);for(let xe=0;xe<_e.length;xe++)W(_e[xe],ce);_e.length===2?k(x,b,w):x.projectionMatrix.copy(b.projectionMatrix),ue(K,x,ce)};function ue(K,ce,_e){_e===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const xe=K.children;for(let N=0,Ie=xe.length;N<Ie;N++)xe[N].updateMatrixWorld(!0);K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ol*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.getPlanes=function(){return v};let oe=null;function Te(K,ce){if(u=ce.getViewerPose(l||o),_=ce,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let xe=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let N=0;N<_e.length;N++){const Ie=_e[N];let De=null;if(d!==null)De=d.getViewport(Ie);else{const Le=f.getViewSubImage(h,Ie);De=Le.viewport,N===0&&(e.setRenderTargetTextures(p,Le.colorTexture,h.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let me=D[N];me===void 0&&(me=new pn,me.layers.enable(N),me.viewport=new yt,D[N]=me),me.matrix.fromArray(Ie.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Ie.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(De.x,De.y,De.width,De.height),N===0&&(x.matrix.copy(me.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(me)}}for(let _e=0;_e<y.length;_e++){const xe=E[_e],N=y[_e];xe!==null&&N!==void 0&&N.update(xe,ce,l||o)}if(oe&&oe(K,ce),ce.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ce.detectedPlanes});let _e=null;for(const xe of v)ce.detectedPlanes.has(xe)||(_e===null&&(_e=[]),_e.push(xe));if(_e!==null)for(const xe of _e)v.delete(xe),M.delete(xe),i.dispatchEvent({type:"planeremoved",data:xe});for(const xe of ce.detectedPlanes)if(!v.has(xe))v.add(xe),M.set(xe,ce.lastChangedTime),i.dispatchEvent({type:"planeadded",data:xe});else{const N=M.get(xe);xe.lastChangedTime>N&&(M.set(xe,xe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:xe}))}}_=null}const fe=new vm;fe.setAnimationLoop(Te),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}function vy(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xy(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,E){const v=E.program;i.uniformBlockBinding(y,v)}function l(y,E){let v=s[y.id];v===void 0&&(_(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));const M=E.program;i.updateUBOMapping(y,M);const b=e.render.frame;r[y.id]!==b&&(h(y),r[y.id]=b)}function u(y){const E=f();y.__bindingPointIndex=E;const v=t.createBuffer(),M=y.__size,b=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,M,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=s[y.id],v=y.uniforms,M=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let b=0,w=v.length;b<w;b++){const D=v[b];if(d(D,b,M)===!0){const x=D.__offset,T=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let z=0;z<T.length;z++){const U=T[z],O=g(U);typeof U=="number"?(D.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,x+I,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=U.elements[0],D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=U.elements[0],D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=U.elements[0]):(U.toArray(D.__data,I),I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,x,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(y,E,v){const M=y.value;if(v[E]===void 0){if(typeof M=="number")v[E]=M;else{const b=Array.isArray(M)?M:[M],w=[];for(let D=0;D<b.length;D++)w.push(b[D].clone());v[E]=w}return!0}else if(typeof M=="number"){if(v[E]!==M)return v[E]=M,!0}else{const b=Array.isArray(v[E])?v[E]:[v[E]],w=Array.isArray(M)?M:[M];for(let D=0;D<b.length;D++){const x=b[D];if(x.equals(w[D])===!1)return x.copy(w[D]),!0}}return!1}function _(y){const E=y.uniforms;let v=0;const M=16;let b=0;for(let w=0,D=E.length;w<D;w++){const x=E[w],T={boundary:0,storage:0},I=Array.isArray(x.value)?x.value:[x.value];for(let z=0,U=I.length;z<U;z++){const O=I[z],H=g(O);T.boundary+=H.boundary,T.storage+=H.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=v,w>0){b=v%M;const z=M-b;b!==0&&z-T.boundary<0&&(v+=M-b,x.__offset=v)}v+=T.storage}return b=v%M,b>0&&(v+=M-b),y.__size=v,y.__cache={},this}function g(y){const E={boundary:0,storage:0};return typeof y=="number"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function My(){const t=qo("canvas");return t.style.display="block",t}class bm{constructor(e={}){const{canvas:n=My(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let d=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=ri,this.toneMappingExposure=1;const p=this;let y=!1,E=0,v=0,M=null,b=-1,w=null;const D=new yt,x=new yt;let T=null,I=n.width,z=n.height,U=1,O=null,H=null;const G=new yt(0,0,I,z),k=new yt(0,0,I,z);let W=!1;const ue=new Hl;let oe=!1,Te=!1,fe=null;const K=new gt,ce=new Y,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return M===null?U:1}let N=i;function Ie(R,q){for(let te=0;te<R.length;te++){const $=R[te],ne=n.getContext($,q);if(ne!==null)return ne}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bl}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),N===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),N=Ie(q,R),N===null)throw Ie(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let De,me,Le,P,C,V,ie,Q,se,de,re,le,ae,A,S,B,j,Z,he,L,J,X,ge,Ee;function we(){De=new LE(N),me=new TE(N,De,e),De.init(me),X=new dy(N,De,me),Le=new fy(N,De,me),P=new IE(N),C=new ZS,V=new hy(N,De,Le,C,me,X,P),ie=new AE(p),Q=new CE(p),se=new Xx(N,me),ge=new yE(N,De,se,me),de=new DE(N,se,P,ge),re=new BE(N,de,se,P),he=new OE(N,me,V),B=new wE(C),le=new KS(p,ie,Q,De,me,ge,B),ae=new vy(p,C),A=new QS,S=new ry(De,me),Z=new SE(p,ie,Q,Le,re,h,c),j=new uy(p,re,me),Ee=new xy(N,P,me,Le),L=new bE(N,De,P,me),J=new UE(N,De,P,me),P.programs=le.programs,p.capabilities=me,p.extensions=De,p.properties=C,p.renderLists=A,p.shadowMap=j,p.state=Le,p.info=P}we();const ye=new _y(p,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=De.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=De.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(R){R!==void 0&&(U=R,this.setSize(I,z,!1))},this.getSize=function(R){return R.set(I,z)},this.setSize=function(R,q,te=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,z=q,n.width=Math.floor(R*U),n.height=Math.floor(q*U),te===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*U,z*U).floor()},this.setDrawingBufferSize=function(R,q,te){I=R,z=q,U=te,n.width=Math.floor(R*te),n.height=Math.floor(q*te),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,q,te,$){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,q,te,$),Le.viewport(D.copy(G).multiplyScalar(U).floor())},this.getScissor=function(R){return R.copy(k)},this.setScissor=function(R,q,te,$){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,q,te,$),Le.scissor(x.copy(k).multiplyScalar(U).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(R){Le.setScissorTest(W=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(R=!0,q=!0,te=!0){let $=0;R&&($|=N.COLOR_BUFFER_BIT),q&&($|=N.DEPTH_BUFFER_BIT),te&&($|=N.STENCIL_BUFFER_BIT),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),A.dispose(),S.dispose(),C.dispose(),ie.dispose(),Q.dispose(),re.dispose(),ge.dispose(),Ee.dispose(),le.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Re),ye.removeEventListener("sessionend",et),fe&&(fe.dispose(),fe=null),tt.stop()};function Se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=P.autoReset,q=j.enabled,te=j.autoUpdate,$=j.needsUpdate,ne=j.type;we(),P.autoReset=R,j.enabled=q,j.autoUpdate=te,j.needsUpdate=$,j.type=ne}function Fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),F(q)}function F(R){ee(R),C.remove(R)}function ee(R){const q=C.get(R).programs;q!==void 0&&(q.forEach(function(te){le.releaseProgram(te)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,te,$,ne,Ce){q===null&&(q=_e);const Ue=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=Hg(R,q,te,$,ne);Le.setMaterial($,Ue);let He=te.index,ke=1;$.wireframe===!0&&(He=de.getWireframeAttribute(te),ke=2);const We=te.drawRange,qe=te.attributes.position;let Ze=We.start*ke,Nt=(We.start+We.count)*ke;Ce!==null&&(Ze=Math.max(Ze,Ce.start*ke),Nt=Math.min(Nt,(Ce.start+Ce.count)*ke)),He!==null?(Ze=Math.max(Ze,0),Nt=Math.min(Nt,He.count)):qe!=null&&(Ze=Math.max(Ze,0),Nt=Math.min(Nt,qe.count));const gn=Nt-Ze;if(gn<0||gn===1/0)return;ge.setup(ne,$,Ne,te,He);let Ai,ft=L;if(He!==null&&(Ai=se.get(He),ft=J,ft.setIndex(Ai)),ne.isMesh)$.wireframe===!0?(Le.setLineWidth($.wireframeLinewidth*xe()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(ne.isLine){let je=$.linewidth;je===void 0&&(je=1),Le.setLineWidth(je*xe()),ne.isLineSegments?ft.setMode(N.LINES):ne.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else ne.isPoints?ft.setMode(N.POINTS):ne.isSprite&&ft.setMode(N.TRIANGLES);if(ne.isInstancedMesh)ft.renderInstances(Ze,gn,ne.count);else if(te.isInstancedBufferGeometry){const je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ea=Math.min(te.instanceCount,je);ft.renderInstances(Ze,gn,Ea)}else ft.render(Ze,gn)},this.compile=function(R,q){function te($,ne,Ce){$.transparent===!0&&$.side===ni&&$.forceSinglePass===!1?($.side=jt,$.needsUpdate=!0,qr($,ne,Ce),$.side=bi,$.needsUpdate=!0,qr($,ne,Ce),$.side=ni):qr($,ne,Ce)}_=S.get(R),_.init(),m.push(_),R.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights(p.useLegacyLights),R.traverse(function($){const ne=$.material;if(ne)if(Array.isArray(ne))for(let Ce=0;Ce<ne.length;Ce++){const Ue=ne[Ce];te(Ue,R,$)}else te(ne,R,$)}),m.pop(),_=null};let pe=null;function be(R){pe&&pe(R)}function Re(){tt.stop()}function et(){tt.start()}const tt=new vm;tt.setAnimationLoop(be),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(R){pe=R,ye.setAnimationLoop(R),R===null?tt.stop():tt.start()},ye.addEventListener("sessionstart",Re),ye.addEventListener("sessionend",et),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(q),q=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,q,M),_=S.get(R,m.length),_.init(),m.push(_),K.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ue.setFromProjectionMatrix(K),Te=this.localClippingEnabled,oe=B.init(this.clippingPlanes,Te),d=A.get(R,g.length),d.init(),g.push(d),Rt(R,q,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(O,H),oe===!0&&B.beginShadows();const te=_.state.shadowsArray;if(j.render(te,R,q),oe===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,R),_.setupLights(p.useLegacyLights),q.isArrayCamera){const $=q.cameras;for(let ne=0,Ce=$.length;ne<Ce;ne++){const Ue=$[ne];ui(d,R,Ue,Ue.viewport)}}else ui(d,R,q);M!==null&&(V.updateMultisampleRenderTarget(M),V.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(p,R,q),ge.resetDefaultState(),b=-1,w=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Rt(R,q,te,$){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){$&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(K);const Ue=re.update(R),Ne=R.material;Ne.visible&&d.push(R,Ue,Ne,te,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==P.render.frame&&(R.skeleton.update(),R.skeleton.frame=P.render.frame);const Ue=re.update(R),Ne=R.material;if($&&(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ce.copy(Ue.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(K)),Array.isArray(Ne)){const He=Ue.groups;for(let ke=0,We=He.length;ke<We;ke++){const qe=He[ke],Ze=Ne[qe.materialIndex];Ze&&Ze.visible&&d.push(R,Ue,Ze,te,ce.z,qe)}}else Ne.visible&&d.push(R,Ue,Ne,te,ce.z,null)}}const Ce=R.children;for(let Ue=0,Ne=Ce.length;Ue<Ne;Ue++)Rt(Ce[Ue],q,te,$)}function ui(R,q,te,$){const ne=R.opaque,Ce=R.transmissive,Ue=R.transparent;_.setupLightsView(te),oe===!0&&B.setGlobalState(p.clippingPlanes,te),Ce.length>0&&ct(ne,Ce,q,te),$&&Le.viewport(D.copy($)),ne.length>0&&fn(ne,q,te),Ce.length>0&&fn(Ce,q,te),Ue.length>0&&fn(Ue,q,te),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ct(R,q,te,$){if(fe===null){const Ne=me.isWebGL2;fe=new Zi(1024,1024,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Nr:Ki,minFilter:Ir,samples:Ne&&a===!0?4:0})}const ne=p.getRenderTarget();p.setRenderTarget(fe),p.clear();const Ce=p.toneMapping;p.toneMapping=ri,fn(R,te,$),V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe);let Ue=!1;for(let Ne=0,He=q.length;Ne<He;Ne++){const ke=q[Ne],We=ke.object,qe=ke.geometry,Ze=ke.material,Nt=ke.group;if(Ze.side===ni&&We.layers.test($.layers)){const gn=Ze.side;Ze.side=jt,Ze.needsUpdate=!0,wn(We,te,$,qe,Ze,Nt),Ze.side=gn,Ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(V.updateMultisampleRenderTarget(fe),V.updateRenderTargetMipmap(fe)),p.setRenderTarget(ne),p.toneMapping=Ce}function fn(R,q,te){const $=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Ce=R.length;ne<Ce;ne++){const Ue=R[ne],Ne=Ue.object,He=Ue.geometry,ke=$===null?Ue.material:$,We=Ue.group;Ne.layers.test(te.layers)&&wn(Ne,q,te,He,ke,We)}}function wn(R,q,te,$,ne,Ce){R.onBeforeRender(p,q,te,$,ne,Ce),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(p,q,te,$,R,Ce),ne.transparent===!0&&ne.side===ni&&ne.forceSinglePass===!1?(ne.side=jt,ne.needsUpdate=!0,p.renderBufferDirect(te,q,$,ne,R,Ce),ne.side=bi,ne.needsUpdate=!0,p.renderBufferDirect(te,q,$,ne,R,Ce),ne.side=ni):p.renderBufferDirect(te,q,$,ne,R,Ce),R.onAfterRender(p,q,te,$,ne,Ce)}function qr(R,q,te){q.isScene!==!0&&(q=_e);const $=C.get(R),ne=_.state.lights,Ce=_.state.shadowsArray,Ue=ne.state.version,Ne=le.getParameters(R,ne.state,Ce,q,te),He=le.getProgramCacheKey(Ne);let ke=$.programs;$.environment=R.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(R.isMeshStandardMaterial?Q:ie).get(R.envMap||$.environment),ke===void 0&&(R.addEventListener("dispose",at),ke=new Map,$.programs=ke);let We=ke.get(He);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===Ue)return ru(R,Ne),We}else Ne.uniforms=le.getUniforms(R),R.onBuild(te,Ne,p),R.onBeforeCompile(Ne,p),We=le.acquireProgram(Ne,He),ke.set(He,We),$.uniforms=Ne.uniforms;const qe=$.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=B.uniform),ru(R,Ne),$.needsLights=Gg(R),$.lightsStateVersion=Ue,$.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const Ze=We.getUniforms(),Nt=Bo.seqWithValue(Ze.seq,qe);return $.currentProgram=We,$.uniformsList=Nt,We}function ru(R,q){const te=C.get(R);te.outputColorSpace=q.outputColorSpace,te.instancing=q.instancing,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function Hg(R,q,te,$,ne){q.isScene!==!0&&(q=_e),V.resetTextureUnits();const Ce=q.fog,Ue=$.isMeshStandardMaterial?q.environment:null,Ne=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bn,He=($.isMeshStandardMaterial?Q:ie).get($.envMap||Ue),ke=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,We=!!$.normalMap&&!!te.attributes.tangent,qe=!!te.morphAttributes.position,Ze=!!te.morphAttributes.normal,Nt=!!te.morphAttributes.color,gn=$.toneMapped?p.toneMapping:ri,Ai=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ft=Ai!==void 0?Ai.length:0,je=C.get($),Ea=_.state.lights;if(oe===!0&&(Te===!0||R!==w)){const Kt=R===w&&$.id===b;B.setState($,R,Kt)}let Mt=!1;$.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ea.state.version||je.outputColorSpace!==Ne||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||je.envMap!==He||$.fog===!0&&je.fog!==Ce||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==B.numPlanes||je.numIntersection!==B.numIntersection)||je.vertexAlphas!==ke||je.vertexTangents!==We||je.morphTargets!==qe||je.morphNormals!==Ze||je.morphColors!==Nt||je.toneMapping!==gn||me.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(Mt=!0):(Mt=!0,je.__version=$.version);let Ri=je.currentProgram;Mt===!0&&(Ri=qr($,q,ne));let ou=!1,Qs=!1,Sa=!1;const Ft=Ri.getUniforms(),Pi=je.uniforms;if(Le.useProgram(Ri.program)&&(ou=!0,Qs=!0,Sa=!0),$.id!==b&&(b=$.id,Qs=!0),ou||w!==R){if(Ft.setValue(N,"projectionMatrix",R.projectionMatrix),me.logarithmicDepthBuffer&&Ft.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),w!==R&&(w=R,Qs=!0,Sa=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Kt=Ft.map.cameraPosition;Kt!==void 0&&Kt.setValue(N,ce.setFromMatrixPosition(R.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ne.isSkinnedMesh)&&Ft.setValue(N,"viewMatrix",R.matrixWorldInverse)}if(ne.isSkinnedMesh){Ft.setOptional(N,ne,"bindMatrix"),Ft.setOptional(N,ne,"bindMatrixInverse");const Kt=ne.skeleton;Kt&&(me.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ft.setValue(N,"boneTexture",Kt.boneTexture,V),Ft.setValue(N,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ya=te.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0&&me.isWebGL2===!0)&&he.update(ne,te,Ri),(Qs||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,Ft.setValue(N,"receiveShadow",ne.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Pi.envMap.value=He,Pi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Qs&&(Ft.setValue(N,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&Vg(Pi,Sa),Ce&&$.fog===!0&&ae.refreshFogUniforms(Pi,Ce),ae.refreshMaterialUniforms(Pi,$,U,z,fe),Bo.upload(N,je.uniformsList,Pi,V)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Bo.upload(N,je.uniformsList,Pi,V),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(N,"center",ne.center),Ft.setValue(N,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(N,"normalMatrix",ne.normalMatrix),Ft.setValue(N,"modelMatrix",ne.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Kt=$.uniformsGroups;for(let ba=0,$g=Kt.length;ba<$g;ba++)if(me.isWebGL2){const au=Kt[ba];Ee.update(au,Ri),Ee.bind(au,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Vg(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Gg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,q,te){C.get(R.texture).__webglTexture=q,C.get(R.depthTexture).__webglTexture=te;const $=C.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=te===void 0,$.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){const te=C.get(R);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,te=0){M=R,E=q,v=te;let $=!0,ne=null,Ce=!1,Ue=!1;if(R){const He=C.get(R);He.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(N.FRAMEBUFFER,null),$=!1):He.__webglFramebuffer===void 0?V.setupRenderTarget(R):He.__hasExternalTextures&&V.rebindTextures(R,C.get(R.texture).__webglTexture,C.get(R.depthTexture).__webglTexture);const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const We=C.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ne=We[q],Ce=!0):me.isWebGL2&&R.samples>0&&V.useMultisampledRTT(R)===!1?ne=C.get(R).__webglMultisampledFramebuffer:ne=We,D.copy(R.viewport),x.copy(R.scissor),T=R.scissorTest}else D.copy(G).multiplyScalar(U).floor(),x.copy(k).multiplyScalar(U).floor(),T=W;if(Le.bindFramebuffer(N.FRAMEBUFFER,ne)&&me.drawBuffers&&$&&Le.drawBuffers(R,ne),Le.viewport(D),Le.scissor(x),Le.setScissorTest(T),Ce){const He=C.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,te)}else if(Ue){const He=C.get(R.texture),ke=q||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.__webglTexture,te||0,ke)}b=-1},this.readRenderTargetPixels=function(R,q,te,$,ne,Ce,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=C.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){Le.bindFramebuffer(N.FRAMEBUFFER,Ne);try{const He=R.texture,ke=He.format,We=He.type;if(ke!==bn&&X.convert(ke)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===Nr&&(De.has("EXT_color_buffer_half_float")||me.isWebGL2&&De.has("EXT_color_buffer_float"));if(We!==Ki&&X.convert(We)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===ki&&(me.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-$&&te>=0&&te<=R.height-ne&&N.readPixels(q,te,$,ne,X.convert(ke),X.convert(We),Ce)}finally{const He=M!==null?C.get(M).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(R,q,te=0){const $=Math.pow(2,-te),ne=Math.floor(q.image.width*$),Ce=Math.floor(q.image.height*$);V.setTexture2D(q,0),N.copyTexSubImage2D(N.TEXTURE_2D,te,0,0,R.x,R.y,ne,Ce),Le.unbindTexture()},this.copyTextureToTexture=function(R,q,te,$=0){const ne=q.image.width,Ce=q.image.height,Ue=X.convert(te.format),Ne=X.convert(te.type);V.setTexture2D(te,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,te.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,te.unpackAlignment),q.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,R.x,R.y,ne,Ce,Ue,Ne,q.image.data):q.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,Ue,q.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,$,R.x,R.y,Ue,Ne,q.image),$===0&&te.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(R,q,te,$,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,Ne=R.max.z-R.min.z+1,He=X.convert($.format),ke=X.convert($.type);let We;if($.isData3DTexture)V.setTexture3D($,0),We=N.TEXTURE_3D;else if($.isDataArrayTexture)V.setTexture2DArray($,0),We=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);const qe=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Nt=N.getParameter(N.UNPACK_SKIP_PIXELS),gn=N.getParameter(N.UNPACK_SKIP_ROWS),Ai=N.getParameter(N.UNPACK_SKIP_IMAGES),ft=te.isCompressedTexture?te.mipmaps[0]:te.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,R.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,R.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,R.min.z),te.isDataTexture||te.isData3DTexture?N.texSubImage3D(We,ne,q.x,q.y,q.z,Ce,Ue,Ne,He,ke,ft.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(We,ne,q.x,q.y,q.z,Ce,Ue,Ne,He,ft.data)):N.texSubImage3D(We,ne,q.x,q.y,q.z,Ce,Ue,Ne,He,ke,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,gn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ai),ne===0&&$.generateMipmaps&&N.generateMipmap(We),Le.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?V.setTextureCube(R,0):R.isData3DTexture?V.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?V.setTexture2DArray(R,0):V.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){E=0,v=0,M=null,Le.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?Yi:im}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yi?ze:Bn}}class Ey extends bm{}Ey.prototype.isWebGL1Renderer=!0;class Sy extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class yy extends Gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sm,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const sh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class by{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Ty=new by;class Tm{constructor(e){this.manager=e!==void 0?e:Ty,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xn={};class wy extends Error{constructor(e,n){super(e),this.response=n}}class Ay extends Tm{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=sh.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:n,onProgress:i,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Xn[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){y();function y(){f.read().then(({done:E,value:v})=>{if(E)p.close();else{g+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let b=0,w=u.length;b<w;b++){const D=u[b];D.onProgress&&D.onProgress(M)}p.enqueue(v),y()}})}}});return new Response(m)}else throw new wy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{sh.add(e,l);const u=Xn[e];delete Xn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Xn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wm extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const hc=new gt,rh=new Y,oh=new Y;class Ry{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rh.setFromMatrixPosition(e.matrixWorld),n.position.copy(rh),oh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(oh),n.updateMatrixWorld(),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Py extends Ry{constructor(){super(new xm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cy extends wm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ly extends wm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ah{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);class Dy extends Tm{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new Ay(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e){function n(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,u,g))return!1;return!0}function i(l,u,f){for(let h=0,d=l.length;h<d;h++)if(l[h]!==u.getUint8(f+h))return!1;return!0}function s(l){const u=new DataView(l),f=u.getUint32(80,!0);let h,d,_,g=!1,m,p,y,E,v;for(let T=0;T<70;T++)u.getUint32(T,!1)==1129270351&&u.getUint8(T+4)==82&&u.getUint8(T+5)==61&&(g=!0,m=new Float32Array(f*3*3),p=u.getUint8(T+6)/255,y=u.getUint8(T+7)/255,E=u.getUint8(T+8)/255,v=u.getUint8(T+9)/255);const M=84,b=12*4+2,w=new ai,D=new Float32Array(f*3*3),x=new Float32Array(f*3*3);for(let T=0;T<f;T++){const I=M+T*b,z=u.getFloat32(I,!0),U=u.getFloat32(I+4,!0),O=u.getFloat32(I+8,!0);if(g){const H=u.getUint16(I+48,!0);H&32768?(h=p,d=y,_=E):(h=(H&31)/31,d=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const G=I+H*12,k=T*3*3+(H-1)*3;D[k]=u.getFloat32(G,!0),D[k+1]=u.getFloat32(G+4,!0),D[k+2]=u.getFloat32(G+8,!0),x[k]=z,x[k+1]=U,x[k+2]=O,g&&(m[k]=h,m[k+1]=d,m[k+2]=_)}}return w.setAttribute("position",new un(D,3)),w.setAttribute("normal",new un(x,3)),g&&(w.setAttribute("color",new un(m,3)),w.hasColors=!0,w.alpha=v),w}function r(l){const u=new ai,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let d=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),p=[],y=[],E=new Y;let v,M=0,b=0,w=0;for(;(v=f.exec(l))!==null;){b=w;const D=v[0];for(;(v=h.exec(D))!==null;){let I=0,z=0;const U=v[0];for(;(v=m.exec(U))!==null;)E.x=parseFloat(v[1]),E.y=parseFloat(v[2]),E.z=parseFloat(v[3]),z++;for(;(v=g.exec(U))!==null;)p.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),y.push(E.x,E.y,E.z),I++,w++;z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const x=b,T=w-b;u.addGroup(x,T,M),M++}return u.setAttribute("position",new oi(p,3)),u.setAttribute("normal",new oi(y,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=a(e);return n(c)?s(c):r(o(e))}}const ch={type:"change"},dc={type:"start"},lh={type:"end"};class Uy extends ts{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",le),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ch),i.update(),r=s.NONE},this.update=function(){const L=new Y,J=new Ji().setFromUnitVectors(e.up,new Y(0,1,0)),X=J.clone().invert(),ge=new Y,Ee=new Ji,we=2*Math.PI;return function(){const Se=i.object.position;L.copy(Se).sub(i.target),L.applyQuaternion(J),a.setFromVector3(L),i.autoRotate&&r===s.NONE&&x(w()),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Pe=i.minAzimuthAngle,Fe=i.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Fe)&&(Pe<-Math.PI?Pe+=we:Pe>Math.PI&&(Pe-=we),Fe<-Math.PI?Fe+=we:Fe>Math.PI&&(Fe-=we),Pe<=Fe?a.theta=Math.max(Pe,Math.min(Fe,a.theta)):a.theta=a.theta>(Pe+Fe)/2?Math.max(Pe,a.theta):Math.min(Fe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),L.setFromSpherical(a),L.applyQuaternion(X),Se.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||ge.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o?(i.dispatchEvent(ch),ge.copy(i.object.position),Ee.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",S),i.domElement.removeEventListener("pointerdown",V),i.domElement.removeEventListener("pointercancel",Q),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",ie),i.domElement.removeEventListener("pointerup",Q),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new ah,c=new ah;let l=1;const u=new Y;let f=!1;const h=new Ge,d=new Ge,_=new Ge,g=new Ge,m=new Ge,p=new Ge,y=new Ge,E=new Ge,v=new Ge,M=[],b={};function w(){return 2*Math.PI/60/60*i.autoRotateSpeed}function D(){return Math.pow(.95,i.zoomSpeed)}function x(L){c.theta-=L}function T(L){c.phi-=L}const I=function(){const L=new Y;return function(X,ge){L.setFromMatrixColumn(ge,0),L.multiplyScalar(-X),u.add(L)}}(),z=function(){const L=new Y;return function(X,ge){i.screenSpacePanning===!0?L.setFromMatrixColumn(ge,1):(L.setFromMatrixColumn(ge,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(X),u.add(L)}}(),U=function(){const L=new Y;return function(X,ge){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const we=i.object.position;L.copy(we).sub(i.target);let ye=L.length();ye*=Math.tan(i.object.fov/2*Math.PI/180),I(2*X*ye/Ee.clientHeight,i.object.matrix),z(2*ge*ye/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(X*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),z(ge*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(L){i.object.isPerspectiveCamera?l/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(L){i.object.isPerspectiveCamera?l*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(L){h.set(L.clientX,L.clientY)}function k(L){y.set(L.clientX,L.clientY)}function W(L){g.set(L.clientX,L.clientY)}function ue(L){d.set(L.clientX,L.clientY),_.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;x(2*Math.PI*_.x/J.clientHeight),T(2*Math.PI*_.y/J.clientHeight),h.copy(d),i.update()}function oe(L){E.set(L.clientX,L.clientY),v.subVectors(E,y),v.y>0?O(D()):v.y<0&&H(D()),y.copy(E),i.update()}function Te(L){m.set(L.clientX,L.clientY),p.subVectors(m,g).multiplyScalar(i.panSpeed),U(p.x,p.y),g.copy(m),i.update()}function fe(L){L.deltaY<0?H(D()):L.deltaY>0&&O(D()),i.update()}function K(L){let J=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?x(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?x(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),J=!0;break}J&&(L.preventDefault(),i.update())}function ce(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),J=.5*(M[0].pageY+M[1].pageY);h.set(L,J)}}function _e(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),J=.5*(M[0].pageY+M[1].pageY);g.set(L,J)}}function xe(){const L=M[0].pageX-M[1].pageX,J=M[0].pageY-M[1].pageY,X=Math.sqrt(L*L+J*J);y.set(0,X)}function N(){i.enableZoom&&xe(),i.enablePan&&_e()}function Ie(){i.enableZoom&&xe(),i.enableRotate&&ce()}function De(L){if(M.length==1)d.set(L.pageX,L.pageY);else{const X=he(L),ge=.5*(L.pageX+X.x),Ee=.5*(L.pageY+X.y);d.set(ge,Ee)}_.subVectors(d,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;x(2*Math.PI*_.x/J.clientHeight),T(2*Math.PI*_.y/J.clientHeight),h.copy(d)}function me(L){if(M.length===1)m.set(L.pageX,L.pageY);else{const J=he(L),X=.5*(L.pageX+J.x),ge=.5*(L.pageY+J.y);m.set(X,ge)}p.subVectors(m,g).multiplyScalar(i.panSpeed),U(p.x,p.y),g.copy(m)}function Le(L){const J=he(L),X=L.pageX-J.x,ge=L.pageY-J.y,Ee=Math.sqrt(X*X+ge*ge);E.set(0,Ee),v.set(0,Math.pow(E.y/y.y,i.zoomSpeed)),O(v.y),y.copy(E)}function P(L){i.enableZoom&&Le(L),i.enablePan&&me(L)}function C(L){i.enableZoom&&Le(L),i.enableRotate&&De(L)}function V(L){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",ie),i.domElement.addEventListener("pointerup",Q)),B(L),L.pointerType==="touch"?ae(L):se(L))}function ie(L){i.enabled!==!1&&(L.pointerType==="touch"?A(L):de(L))}function Q(L){j(L),M.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",ie),i.domElement.removeEventListener("pointerup",Q)),i.dispatchEvent(lh),r=s.NONE}function se(L){let J;switch(L.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case rs.DOLLY:if(i.enableZoom===!1)return;k(L),r=s.DOLLY;break;case rs.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;W(L),r=s.PAN}else{if(i.enableRotate===!1)return;G(L),r=s.ROTATE}break;case rs.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;G(L),r=s.ROTATE}else{if(i.enablePan===!1)return;W(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(dc)}function de(L){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ue(L);break;case s.DOLLY:if(i.enableZoom===!1)return;oe(L);break;case s.PAN:if(i.enablePan===!1)return;Te(L);break}}function re(L){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(L.preventDefault(),i.dispatchEvent(dc),fe(L),i.dispatchEvent(lh))}function le(L){i.enabled===!1||i.enablePan===!1||K(L)}function ae(L){switch(Z(L),M.length){case 1:switch(i.touches.ONE){case os.ROTATE:if(i.enableRotate===!1)return;ce(),r=s.TOUCH_ROTATE;break;case os.PAN:if(i.enablePan===!1)return;_e(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case os.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;N(),r=s.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ie(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(dc)}function A(L){switch(Z(L),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(L),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;me(L),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P(L),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(L),i.update();break;default:r=s.NONE}}function S(L){i.enabled!==!1&&L.preventDefault()}function B(L){M.push(L)}function j(L){delete b[L.pointerId];for(let J=0;J<M.length;J++)if(M[J].pointerId==L.pointerId){M.splice(J,1);return}}function Z(L){let J=b[L.pointerId];J===void 0&&(J=new Ge,b[L.pointerId]=J),J.set(L.pageX,L.pageY)}function he(L){const J=L.pointerId===M[0].pointerId?M[1]:M[0];return b[J.pointerId]}i.domElement.addEventListener("contextmenu",S),i.domElement.addEventListener("pointerdown",V),i.domElement.addEventListener("pointercancel",Q),i.domElement.addEventListener("wheel",re,{passive:!1}),this.update()}}const Iy=1e-5,Ny=1e-13,Fy=Math.PI*2;var Qe={EPS:Iy,NEPS:Ny,TAU:Fy};const Oy=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);var By=Oy;const zy=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);var Hy=zy;const Vy=t=>Math.atan2(t[1],t[0]);var $l=Vy,Gy=$l;const $y=$l,ky=t=>$y(t)*57.29577951308232;var Wy=ky;const Xy=()=>[0,0];var ua=Xy;const qy=ua,Yy=t=>{const e=qy();return e[0]=t[0],e[1]=t[1],e};var jy=Yy;const Ky=(t,e)=>(t[0]=e[0],t[1]=e[1],t);var Zy=Ky;const Jy=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);var Qy=Jy;const eb=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};var tb=eb;const nb=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);var ib=nb;const sb=(t,e)=>t[0]*e[0]+t[1]*e[1];var rb=sb;const ob=(t,e)=>t[0]===e[0]&&t[1]===e[1];var ab=ob;const{NEPS:cb}=Qe,Am=t=>Math.abs(t)<cb?0:t,lb=t=>Am(Math.sin(t)),ub=t=>Am(Math.cos(t));var qt={sin:lb,cos:ub};const{sin:fb,cos:hb}=qt,db=(t,e)=>(t[0]=hb(e),t[1]=fb(e),t);var Rm=db;const pb=Rm,mb=(t,e)=>pb(t,e*.017453292519943295);var gb=mb;const _b=(t,e)=>(t[0]=e,t[1]=e,t);var vb=_b;const xb=ua,Mb=(t,e)=>{const n=xb();return n[0]=t,n[1]=e,n};var Eb=Mb;const Sb=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);var yb=Sb;const bb=(t,e,n,i)=>{const s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};var Tb=bb;const wb=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);var Ab=wb;const Rb=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);var Pb=Rb;const Cb=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);var Lb=Cb;const Db=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);var Ub=Db;const Ib=(t,e,n,i)=>{const s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};var Pm=Ib;const{TAU:Nb}=Qe,Fb=ua,Ob=Pm,Bb=(t,e)=>Ob(t,e,Fb(),Nb/4);var zb=Bb;const Hb=(t,e)=>{const n=e[0],i=e[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};var Vb=Hb;const Gb=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);var $b=Gb;const kb=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);var Wb=kb;const Xb=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};var qb=Xb;const Yb=t=>{const e=t[0],n=t[1];return e*e+n*n};var jb=Yb;const Kb=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);var Zb=Kb;const Jb=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;var Qb=Jb;const eT=(t,e,n)=>{const i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};var tT=eT,Xe={abs:By,add:Hy,angle:Gy,angleDegrees:Wy,angleRadians:$l,clone:jy,copy:Zy,create:ua,cross:Qy,distance:tb,divide:ib,dot:rb,equals:ab,fromAngleDegrees:gb,fromAngleRadians:Rm,fromScalar:vb,fromValues:Eb,length:yb,lerp:Tb,max:Ab,min:Pb,multiply:Lb,negate:Ub,normal:zb,normalize:Vb,rotate:Pm,scale:$b,snap:Wb,squaredDistance:qb,squaredLength:jb,subtract:Zb,toString:Qb,transform:tT};const nT=t=>Object.assign({},t);var kl=nT;const{EPS:uh}=Qe,iT=Xe,sT=kl,rT=t=>{if(t.isClosed)return t;const e=sT(t);if(e.isClosed=!0,e.points.length>1){const n=e.points,i=n[0];let s=n[n.length-1];for(;iT.distance(i,s)<uh*uh&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};var Cm=rT;const oT=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);var aT=oT;const cT=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var Wl=cT;const lT=Wl,uT=t=>{const e=lT();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};var fT=uT;const hT=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);var Lm=hT;const dT=(t,e)=>{const n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=n*a-i*o,E=n*c-s*o,v=n*l-r*o,M=i*c-s*a,b=i*l-r*a,w=s*l-r*c,D=u*g-f*_,x=u*m-h*_,T=u*p-d*_,I=f*m-h*g,z=f*p-d*g,U=h*p-d*m;let O=y*U-E*z+v*I+M*T-b*x+w*D;return O?(O=1/O,t[0]=(a*U-c*z+l*I)*O,t[1]=(s*z-i*U-r*I)*O,t[2]=(g*w-m*b+p*M)*O,t[3]=(h*b-f*w-d*M)*O,t[4]=(c*T-o*U-l*x)*O,t[5]=(n*U-s*T+r*x)*O,t[6]=(m*v-_*w-p*E)*O,t[7]=(u*w-h*v+d*E)*O,t[8]=(o*z-a*T+l*D)*O,t[9]=(i*T-n*z-r*D)*O,t[10]=(_*b-g*v+p*y)*O,t[11]=(f*v-u*b-d*y)*O,t[12]=(a*x-o*I-c*D)*O,t[13]=(n*I-i*x+s*D)*O,t[14]=(g*E-_*M-m*y)*O,t[15]=(u*M-f*E+h*y)*O,t):null};var pT=dT;const mT=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];var gT=mT;const _T=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var Dm=_T;const{EPS:vT}=Qe,{sin:xT,cos:MT}=qt,ET=Dm,ST=(t,e,n)=>{let[i,s,r]=n;const o=i*i+s*s+r*r;if(Math.abs(o)<vT)return ET(t);const a=1/Math.sqrt(o);i*=a,s*=a,r*=a;const c=xT(e),l=MT(e),u=1-l;return t[0]=i*i*u+l,t[1]=s*i*u+r*c,t[2]=r*i*u-s*c,t[3]=0,t[4]=i*s*u-r*c,t[5]=s*s*u+l,t[6]=r*s*u+i*c,t[7]=0,t[8]=i*r*u+s*c,t[9]=s*r*u-i*c,t[10]=r*r*u+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Um=ST;const yT=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var bT=yT;const{sin:pc,cos:mc}=qt,TT=(t,e,n,i)=>{const s=pc(e),r=mc(e),o=pc(n),a=mc(n),c=pc(i),l=mc(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=c*o*r-l*s,t[5]=l*r+c*o*s,t[6]=c*a,t[7]=0,t[8]=c*s+l*o*r,t[9]=l*o*s-c*r,t[10]=l*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var wT=TT;const AT=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);var RT=AT;const PT=Wl,CT=(t,e,n,i,s,r,o,a,c,l,u,f,h,d,_,g)=>{const m=PT();return m[0]=t,m[1]=e,m[2]=n,m[3]=i,m[4]=s,m[5]=r,m[6]=o,m[7]=a,m[8]=c,m[9]=l,m[10]=u,m[11]=f,m[12]=h,m[13]=d,m[14]=_,m[15]=g,m};var LT=CT;const DT=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);var Im=DT;const UT=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);var Nm=UT;const IT=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];var fa=IT;const NT=fa,FT=(t,e)=>{const n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],c=Math.sqrt(n*n+i*i+s*s),l=Math.sqrt(r*r+o*o+a*a),u=c*l,f=u&&NT(t,e)/u;return Math.acos(Math.min(Math.max(f,-1),1))};var OT=FT;const BT=()=>[0,0,0];var ha=BT;const zT=ha,HT=t=>{const e=zT();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var VT=HT;const GT=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var Fm=GT;const $T=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],c=n[2];return t[0]=s*c-r*a,t[1]=r*o-i*c,t[2]=i*a-s*o,t};var kr=$T;const kT=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};var Om=kT;const WT=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);var XT=WT;const qT=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var YT=qT;const jT=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);var KT=jT;const ZT=ha,JT=(t,e,n)=>{const i=ZT();return i[0]=t,i[1]=e,i[2]=n,i};var QT=JT;const ew=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);var tw=ew;const nw=t=>{const e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};var Bm=nw;const iw=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);var sw=iw;const rw=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);var ow=rw;const aw=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);var cw=aw;const lw=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);var uw=lw;const fw=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);var hw=fw;const dw=(t,e)=>{const n=e[0],i=e[1],s=e[2];let r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};var Xl=dw;const pw=Im,mw=ha,gw=kr,_w=(t,e)=>{const n=pw(mw(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return gw(t,e,[i,s,r])};var vw=_w;const xw=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var Mw=xw;const Ew=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var Sw=Ew;const yw=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};var bw=yw;const Tw=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);var zm=Tw;const ww=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);var Aw=ww;const Rw=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};var Hm=Rw;const Pw=t=>{const e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};var Vm=Pw;const Cw=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);var da=Cw;const Lw=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;var Dw=Lw;const Uw=(t,e,n)=>{const i=e[0],s=e[1],r=e[2];let o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};var Iw=Uw,$e={abs:Im,add:Nm,angle:OT,clone:VT,copy:Fm,create:ha,cross:kr,distance:Om,divide:XT,dot:fa,equals:YT,fromScalar:KT,fromValues:QT,fromVec2:tw,length:Bm,lerp:sw,max:ow,min:cw,multiply:uw,negate:hw,normalize:Xl,orthogonal:vw,rotateX:Mw,rotateY:Sw,rotateZ:bw,scale:zm,snap:Aw,squaredDistance:Hm,squaredLength:Vm,subtract:da,toString:Dw,transform:Iw};const mi=$e,Nw=Um,Fw=(t,e,n)=>{const i=mi.normalize(mi.create(),e),s=mi.normalize(mi.create(),n),r=mi.cross(mi.create(),s,i),o=mi.dot(s,i);if(o===-1)return Nw(t,Math.PI,mi.orthogonal(r,i));const a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Ow=Fw;const{sin:Bw,cos:zw}=qt,Hw=(t,e)=>{const n=Bw(e),i=zw(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Vw=Hw;const{sin:Gw,cos:$w}=qt,kw=(t,e)=>{const n=Gw(e),i=$w(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Ww=kw;const{sin:Xw,cos:qw}=qt,Yw=(t,e)=>{const n=Xw(e),i=qw(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var jw=Yw;const Kw=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;var Zw=Kw;const Jw=t=>qn(t[1])&&qn(t[2])&&qn(t[3])&&qn(t[4])&&qn(t[6])&&qn(t[7])&&qn(t[8])&&qn(t[9])&&qn(t[11])&&t[15]===1,qn=t=>Math.abs(t)<Number.EPSILON;var Qw=Jw;const eA=t=>{const e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};var tA=eA;const nA=(t,e)=>{const[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};var iA=nA;const sA=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],_=e[11],g=e[12],m=e[13],p=e[14],y=e[15];let E=n[0],v=n[1],M=n[2],b=n[3];return t[0]=E*i+v*a+M*f+b*g,t[1]=E*s+v*c+M*h+b*m,t[2]=E*r+v*l+M*d+b*p,t[3]=E*o+v*u+M*_+b*y,E=n[4],v=n[5],M=n[6],b=n[7],t[4]=E*i+v*a+M*f+b*g,t[5]=E*s+v*c+M*h+b*m,t[6]=E*r+v*l+M*d+b*p,t[7]=E*o+v*u+M*_+b*y,E=n[8],v=n[9],M=n[10],b=n[11],t[8]=E*i+v*a+M*f+b*g,t[9]=E*s+v*c+M*h+b*m,t[10]=E*r+v*l+M*d+b*p,t[11]=E*o+v*u+M*_+b*y,E=n[12],v=n[13],M=n[14],b=n[15],t[12]=E*i+v*a+M*f+b*g,t[13]=E*s+v*c+M*h+b*m,t[14]=E*r+v*l+M*d+b*p,t[15]=E*o+v*u+M*_+b*y,t};var rA=sA;const{EPS:oA}=Qe,{sin:aA,cos:cA}=qt,lA=Lm,uA=(t,e,n,i)=>{let[s,r,o]=i;const a=s*s+r*r+o*o;if(Math.abs(a)<oA)return lA(t,e);const c=1/Math.sqrt(a);s*=c,r*=c,o*=c;const l=aA(n),u=cA(n),f=1-u,h=e[0],d=e[1],_=e[2],g=e[3],m=e[4],p=e[5],y=e[6],E=e[7],v=e[8],M=e[9],b=e[10],w=e[11],D=s*s*f+u,x=r*s*f+o*l,T=o*s*f-r*l,I=s*r*f-o*l,z=r*r*f+u,U=o*r*f+s*l,O=s*o*f+r*l,H=r*o*f-s*l,G=o*o*f+u;return t[0]=h*D+m*x+v*T,t[1]=d*D+p*x+M*T,t[2]=_*D+y*x+b*T,t[3]=g*D+E*x+w*T,t[4]=h*I+m*z+v*U,t[5]=d*I+p*z+M*U,t[6]=_*I+y*z+b*U,t[7]=g*I+E*z+w*U,t[8]=h*O+m*H+v*G,t[9]=d*O+p*H+M*G,t[10]=_*O+y*H+b*G,t[11]=g*O+E*H+w*G,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};var fA=uA;const{sin:hA,cos:dA}=qt,pA=(t,e,n)=>{const i=hA(n),s=dA(n),r=e[4],o=e[5],a=e[6],c=e[7],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+l*i,t[5]=o*s+u*i,t[6]=a*s+f*i,t[7]=c*s+h*i,t[8]=l*s-r*i,t[9]=u*s-o*i,t[10]=f*s-a*i,t[11]=h*s-c*i,t};var mA=pA;const{sin:gA,cos:_A}=qt,vA=(t,e,n)=>{const i=gA(n),s=_A(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-l*i,t[1]=o*s-u*i,t[2]=a*s-f*i,t[3]=c*s-h*i,t[8]=r*i+l*s,t[9]=o*i+u*s,t[10]=a*i+f*s,t[11]=c*i+h*s,t};var xA=vA;const{sin:MA,cos:EA}=qt,SA=(t,e,n)=>{const i=MA(n),s=EA(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[4],u=e[5],f=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+l*i,t[1]=o*s+u*i,t[2]=a*s+f*i,t[3]=c*s+h*i,t[4]=l*s-r*i,t[5]=u*s-o*i,t[6]=f*s-a*i,t[7]=h*s-c*i,t};var yA=SA;const bA=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};var TA=bA;const wA=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);var AA=wA;const RA=t=>t.map(e=>e.toFixed(7)).toString();var PA=RA;const CA=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];let o,a,c,l,u,f,h,d,_,g,m,p;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],c=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],_=e[8],g=e[9],m=e[10],p=e[11],t[0]=o,t[1]=a,t[2]=c,t[3]=l,t[4]=u,t[5]=f,t[6]=h,t[7]=d,t[8]=_,t[9]=g,t[10]=m,t[11]=p,t[12]=o*i+u*s+_*r+e[12],t[13]=a*i+f*s+g*r+e[13],t[14]=c*i+h*s+m*r+e[14],t[15]=l*i+d*s+p*r+e[15]),t};var LA=CA,ut={add:aT,clone:fT,copy:Lm,create:Wl,invert:pT,equals:gT,fromRotation:Um,fromScaling:bT,fromTaitBryanRotation:wT,fromTranslation:RT,fromValues:LT,fromVectorRotation:Ow,fromXRotation:Vw,fromYRotation:Ww,fromZRotation:jw,identity:Dm,isIdentity:Zw,isOnlyTransformScale:Qw,isMirroring:tA,mirrorByPlane:iA,multiply:rA,rotate:fA,rotateX:mA,rotateY:xA,rotateZ:yA,scale:TA,subtract:AA,toString:PA,translate:LA};const DA=ut,UA=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:DA.create()});var pa=UA;const{EPS:fh}=Qe,hh=Xe,IA=Cm,NA=pa,FA=(t,e)=>{const n={closed:!1};let{closed:i}=Object.assign({},n,t),s=NA();if(s.points=e.map(r=>hh.clone(r)),s.points.length>1){const r=s.points[0],o=s.points[s.points.length-1];hh.distance(r,o)<fh*fh&&(i=!0)}return i===!0&&(s=IA(s)),s};var ql=FA;const dh=ut,ph=Xe,OA=t=>(dh.isIdentity(t.transforms)||(t.points=t.points.map(e=>ph.transform(ph.create(),e,t.transforms)),t.transforms=dh.create()),t);var BA=OA;const zA=BA,HA=t=>zA(t).points;var js=HA;const{TAU:Mo}=Qe,dt=Xe,VA=ql,GA=js,$A=(t,e)=>{const n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:c}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=dt.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(c<4)throw new Error("segments must be four or more");const l=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");const u=GA(e);if(u.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let f=s[0],h=s[1];const d=u[u.length-1];f=Math.round(f*l)/l,h=Math.round(h*l)/l,i=dt.fromValues(Math.round(i[0]*l)/l,Math.round(i[1]*l)/l);const _=!o;let g=[];if(f===0||h===0)g.push(i);else{f=Math.abs(f),h=Math.abs(h);const p=r,y=Math.cos(p),E=Math.sin(p),v=dt.subtract(dt.create(),d,i);dt.scale(v,v,.5);const M=Math.round((y*v[0]+E*v[1])*l)/l,b=Math.round((-E*v[0]+y*v[1])*l)/l,w=dt.fromValues(M,b),D=w[0]*w[0]/(f*f)+w[1]*w[1]/(h*h);if(D>1){const W=Math.sqrt(D);f*=W,h*=W,f=Math.round(f*l)/l,h=Math.round(h*l)/l}let x=Math.sqrt((f*f*h*h-f*f*w[1]*w[1]-h*h*w[0]*w[0])/(f*f*w[1]*w[1]+h*h*w[0]*w[0]));_===a&&(x=-x);const T=dt.fromValues(f*w[1]/h,-h*w[0]/f);dt.scale(T,T,x);let I=dt.fromValues(y*T[0]-E*T[1],E*T[0]+y*T[1]);I=dt.add(I,I,dt.scale(dt.create(),dt.add(dt.create(),d,i),.5));const z=dt.fromValues((w[0]-T[0])/f,(w[1]-T[1])/h),U=dt.fromValues((-w[0]-T[0])/f,(-w[1]-T[1])/h),O=dt.angleRadians(z);let G=dt.angleRadians(U)-O;G=G%Mo,!_&&G>0?G-=Mo:_&&G<0&&(G+=Mo);let k=Math.ceil(Math.abs(G)/Mo*c)+1;k<1&&(k=1);for(let W=1;W<k;W++){const ue=O+W/k*G,oe=Math.cos(ue),Te=Math.sin(ue),fe=dt.fromValues(y*f*oe-E*h*Te,E*f*oe+y*h*Te);dt.add(fe,fe,I),g.push(fe)}k&&g.push(t.endpoint)}return g=u.concat(g),VA({},g)};var kA=$A;const WA=ql,XA=js,{equals:qA}=Xe,YA=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{const r=XA(i).slice();if(n.length>0&&r.length>0&&qA(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),WA({closed:e},n)};var Gm=YA;const jA=Gm,KA=pa,ZA=(t,e)=>jA(e,KA(t));var $m=ZA;const{TAU:JA}=Qe,en=Xe,QA=Xe,e2=$m,t2=js,n2=(t,e)=>{const n={segments:16};let{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");const r=t2(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let b=r[r.length-2];if("lastBezierControlPoint"in e&&(b=e.lastBezierControlPoint),!Array.isArray(b))throw new Error("the given path must contain TWO or more points if given a null control point");const w=en.scale(en.create(),r[r.length-1],2);en.subtract(w,w,b),i[0]=w}i.unshift(r[r.length-1]);const a=i.length-1,c=[];let l=1;for(let b=0;b<=a;++b)b>0&&(l*=b),c.push(l);const u=[];for(let b=0;b<=a;++b){const w=c[a]/(c[b]*c[a-b]);u.push(w)}const f=en.create(),h=en.create(),d=QA.create(),_=b=>{let w=1,D=Math.pow(1-b,a);const x=b!==1?1/(1-b):1,T=en.create();for(let I=0;I<=a;++I){I===a&&(D=1);const z=u[I]*w*D,U=en.scale(f,i[I],z);en.add(T,T,U),w*=b,D*=x}return T},g=[],m=[],p=a+1;for(let b=0;b<p;++b){const w=b/(p-1),D=_(w);g.push(D),m.push(w)}let y=1;const E=JA/s,v=Math.sin(E);for(;y<g.length-1;){const b=en.subtract(f,g[y],g[y-1]);en.normalize(b,b);const w=en.subtract(h,g[y+1],g[y]);en.normalize(w,w);const D=en.cross(d,b,w);if(Math.abs(D[2])>v){const x=m[y-1],T=m[y+1],I=x+(T-x)*1/3,z=x+(T-x)*2/3,U=_(I),O=_(z);g.splice(y,1,U,O),m.splice(y,1,I,z),y--,y<1&&(y=1)}else++y}g.shift();const M=e2(g,e);return M.lastBezierControlPoint=i[i.length-2],M};var i2=n2;const s2=Xe,mh=js,r2=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;const n=mh(t),i=mh(e),s=n.length;let r=0;do{let o=!1;for(let a=0;a<s;a++)if(!s2.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};var o2=r2;const a2=ut,c2=Xe,l2=pa,u2=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");const e=l2();e.transforms=a2.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){const i=c2.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};var f2=u2;const h2=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);var km=h2;const d2=kl,p2=t=>{const e=d2(t);return e.points=t.points.slice().reverse(),e};var m2=p2;const g2=Xe,_2=js,v2=t=>{const e=_2(t);let n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+g2.toString(i)+`,
`}),n+=`]
`,n};var x2=v2;const M2=t=>{const e=t.points,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){const o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};var E2=M2;const gh=ut,S2=(t,e)=>{const n=gh.multiply(gh.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var y2=S2;const b2=Xe,T2=km,w2=t=>{if(!T2(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if(b2.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};var A2=w2,li={appendArc:kA,appendBezier:i2,appendPoints:$m,clone:kl,close:Cm,concat:Gm,create:pa,equals:o2,fromPoints:ql,fromCompactBinary:f2,isA:km,reverse:m2,toPoints:js,toString:x2,toCompactBinary:E2,transform:y2,validate:A2};const R2=(t,e)=>Array.isArray(t)&&t.length>=e?t.every(n=>Number.isFinite(n)):!1,P2=(t,e)=>Number.isFinite(t)&&t>e,C2=(t,e)=>Number.isFinite(t)&&t>=e;var xt={isNumberArray:R2,isGT:P2,isGTE:C2};const{EPS:_h,TAU:ys}=Qe,Yn=Xe,L2=li,{isGT:D2,isGTE:gc,isNumberArray:U2}=xt,I2=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:ys,makeTangent:!1,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,makeTangent:o,segments:a}=Object.assign({},e,t);if(!U2(n,2))throw new Error("center must be an array of X and Y values");if(!D2(i,0))throw new Error("radius must be greater than zero");if(!gc(s,0))throw new Error("startAngle must be positive");if(!gc(r,0))throw new Error("endAngle must be positive");if(!gc(a,4))throw new Error("segments must be four or more");s=s%ys,r=r%ys;let c=ys;s<r&&(c=r-s),s>r&&(c=r+(ys-s));const l=Math.acos((i*i+i*i-_h*_h)/(2*i*i)),u=Yn.clone(n);let f;const h=[];if(c<l)f=Yn.fromAngleRadians(Yn.create(),s),Yn.scale(f,f,i),Yn.add(f,f,u),h.push(f);else{const d=Math.max(1,Math.floor(a*(c/ys)))+1;let _=d*.5/c;_>.25&&(_=.25);const g=o?d+2:d;for(let m=0;m<=g;m++){let p=m;o&&(p=(m-1)*(d-2*_)/d+_,p<0&&(p=0),p>d&&(p=d));const y=s+p*(c/d);f=Yn.fromAngleRadians(Yn.create(),y),Yn.scale(f,f,i),Yn.add(f,f,u),h.push(f)}}return L2.fromPoints({closed:!1},h)};var N2=I2;const F2=t=>Object.assign({},t);var O2=F2;const B2=ut,z2=t=>(t===void 0&&(t=[]),{sides:t,transforms:B2.create()});var ma=z2;const _c=Xe,H2=ma,V2=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");_c.equals(t[0],t[e-1])&&--e;const n=[];let i=t[e-1];for(let s=0;s<e;s++){const r=t[s];n.push([_c.clone(i),_c.clone(r)]),i=r}return H2(n)};var G2=V2;const $2=ut,vh=Xe,k2=ma,W2=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");const e=k2();e.transforms=$2.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){const i=vh.fromValues(t[n+0],t[n+1]),s=vh.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var X2=W2;const q2=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);var Wm=q2;const xh=ut,Eo=Xe,Y2=t=>(xh.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{const n=Eo.transform(Eo.create(),e[0],t.transforms),i=Eo.transform(Eo.create(),e[1],t.transforms);return[n,i]}),t.transforms=xh.create()),t);var j2=Y2;const K2=j2,Z2=t=>K2(t).sides;var Wr=Z2;const J2=ma,Q2=Wr,eR=t=>{const n=Q2(t).map(i=>[i[1],i[0]]);return n.reverse(),J2(n)};var Xm=eR;const or=Xe,tR=Wr,nR=t=>{const e=new Map,n=i=>{const s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},iR=t=>{const e=new Map;return nR(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},sR=t=>{const e=iR(tR(t)),n=[];for(;;){let i;for(const[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;const s=[],r=i[0];for(;;){s.push(i[0]);const o=i[1];if(o===r)break;const a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);const c=rR(i,a);a.length===0&&e.delete(o),i=c}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},rR=(t,e)=>{if(e.length===1)return e.pop();const n=or.create(),i=or.angleDegrees(or.subtract(n,t[1],t[0]));let s,r;e.forEach((a,c)=>{let u=or.angleDegrees(or.subtract(n,a[1],a[0]))-i;u<-180&&(u+=360),u>=180&&(u-=360),(r===void 0||u>s)&&(r=c,s=u)});const o=e[r];return e.splice(r,1),o};var qm=sR;const oR=Wr,aR=t=>{const n=oR(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};var cR=aR;const Mh=Xe,lR=Wr,uR=t=>{const e=lR(t);let n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+Mh.toString(i[0])+", "+Mh.toString(i[1])+`]
`}),n+=`]
`,n};var fR=uR;const hR=t=>{const e=t.sides,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){const o=r*4+21,a=e[r][0],c=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=c[0],s[o+3]=c[1]}return s};var dR=hR;const Eh=ut,pR=Xm,mR=(t,e)=>{const n=Eh.multiply(Eh.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?pR(i):i};var gR=mR;const _R=Xe,vR=Wm,xR=qm,MR=t=>{if(!vR(t))throw new Error("invalid geom2 structure");if(xR(t),t.sides.forEach(e=>{if(_R.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};var ER=MR,wt={clone:O2,create:ma,fromPoints:G2,fromCompactBinary:X2,isA:Wm,reverse:Xm,toOutlines:qm,toPoints:cR,toSides:Wr,toString:fR,toCompactBinary:dR,transform:gR,validate:ER};const{EPS:Sh,TAU:gi}=Qe,vc=Xe,yh=wt,{sin:SR,cos:yR}=qt,{isGTE:xc,isNumberArray:bh}=xt,bR=t=>{const e={center:[0,0],radius:[1,1],startAngle:0,endAngle:gi,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!bh(n,2))throw new Error("center must be an array of X and Y values");if(!bh(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!xc(s,0))throw new Error("startAngle must be positive");if(!xc(r,0))throw new Error("endAngle must be positive");if(!xc(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return yh.create();s=s%gi,r=r%gi;let a=gi;s<r&&(a=r-s),s>r&&(a=r+(gi-s));const c=Math.min(i[0],i[1]),l=Math.acos((c*c+c*c-Sh*Sh)/(2*c*c));if(a<l)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/gi));const u=vc.clone(n),f=a/o,h=[];o=a<gi?o+1:o;for(let d=0;d<o;d++){const _=f*d+s,g=vc.fromValues(i[0]*yR(_),i[1]*SR(_));vc.add(g,u,g),h.push(g)}return a<gi&&h.push(u),yh.fromPoints(h)};var Ym=bR;const{TAU:TR}=Qe,wR=Ym,{isGTE:AR}=xt,RR=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:TR,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!AR(i,0))throw new Error("radius must be positive");return i=[i,i],wR({center:n,radius:i,startAngle:s,endAngle:r,segments:o})};var jm=RR;const PR=t=>Object.assign({},t);var CR=PR;const LR=ut,DR=t=>(t===void 0&&(t=[]),{polygons:t,transforms:LR.create()});var Xr=DR;const UR=kr,Th=da,wh=Vm,IR=(t,e,n)=>{const i=[],s=[],r=[];Th(i,n,e),Th(s,t,e);const o=wh(UR(r,s,i)),a=wh(i);if(a===0)throw Error("a and b are the same point");return o/a},NR=(t,e,n)=>Math.sqrt(IR(t,e,n));var FR=NR;const OR=kr,BR=Xl,Ah=da,zR=(t,e,n,i)=>{const s=[0,0,0];return Ah(t,e,n),Ah(s,n,i),OR(t,t,s),BR(t,t)};var HR=zR;let VR=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};var GR=VR;let $R=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};var kR=$R;const WR=Om,XR=Hm;let qR=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?WR(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?XR(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};var YR=qR;const Mc=Nm,jR=Fm,KR=kr,Ec=fa,ZR=Bm,JR=Xl,So=zm,Sc=da,yc=YR,Km=0,QR=1,cl=2;let eP=class Zm{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=Km,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){const e=this.edge,n=e.next;let i=n.next;const s=Sc([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)jR(o,s),Sc(s,i.head().point,e.head().point),Mc(this.normal,this.normal,KR(r,o,s)),i=i.next,this.nVertices+=1;this.area=ZR(this.normal),this.normal=So(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{const u=s.lengthSquared();u>i&&(n=s,i=u),s=s.next}while(s!==this.edge);const r=n.tail().point,o=n.head().point,a=Sc([],o,r),c=Math.sqrt(i);So(a,a,1/c);const l=Ec(this.normal,a);So(a,a,-l),Mc(this.normal,this.normal,a),JR(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do Mc(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);So(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=Ec(this.normal,this.centroid)}distanceToPlane(e){return Ec(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){const s=n.opposite.face;let r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=cl,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){const i=e.opposite,s=i.face;n.push(s),s.mark=cl;let r=e.prev,o=e.next,a=i.prev,c=i.next;for(;r.opposite.face===s;)r=r.prev,c=c.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let l;for(l=c;l!==a.next;l=l.next)l.face=this;this.edge=o;let u;return u=this.connectHalfEdges(a,o),u&&n.push(u),u=this.connectHalfEdges(r,c),u&&n.push(u),this.computeNormalAndCentroid(),n}collectIndices(){const e=[];let n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){const r=new Zm,o=new yc(e,r),a=new yc(n,r),c=new yc(i,r);return o.next=c.prev=a,a.next=o.prev=c,c.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};var tP={VISIBLE:Km,NON_CONVEX:QR,DELETED:cl,Face:eP};const bc=fa,nP=FR,iP=HR,Rh=GR,sP=kR,{Face:jn,VISIBLE:bs,NON_CONVEX:Ph,DELETED:rP}=tP,oP=1,Ch=2;let aP=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new Rh,this.unclaimed=new Rh,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new sP(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){const a=e[o];if(a.mark===bs){const c=a.distanceToPlane(i.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){const e=[],n=[],i=[],s=[];let r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){const a=this.vertices[r],c=a.point;for(o=0;o<3;o+=1)c[o]<e[o]&&(e[o]=c[o],i[o]=a);for(o=0;o<3;o+=1)c[o]>n[o]&&(n[o]=c[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){const e=this.vertices,[n,i]=this.computeExtremes();let s,r,o,a,c=0,l=0;for(o=0;o<3;o+=1){const g=i[o].point[o]-n[o].point[o];g>c&&(c=g,l=o)}const u=n[l],f=i[l];for(c=0,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==u&&g!==f){const m=nP(g.point,u.point,f.point);m>c&&(c=m,s=g)}}const h=iP([],u.point,f.point,s.point),d=bc(u.point,h);for(c=-1,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==u&&g!==f&&g!==s){const m=Math.abs(bc(h,g.point)-d);m>c&&(c=m,r=g)}}const _=[];if(bc(r.point,h)-d<0)for(_.push(jn.createTriangle(u,f,s),jn.createTriangle(r,f,u),jn.createTriangle(r,s,f),jn.createTriangle(r,u,s)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge(g)),_[o+1].getEdge(1).setOpposite(_[g+1].getEdge(0))}else for(_.push(jn.createTriangle(u,s,f),jn.createTriangle(r,u,f),jn.createTriangle(r,f,s),jn.createTriangle(r,s,u)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge((3-o)%3)),_[o+1].getEdge(0).setOpposite(_[g+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(_[o]);for(o=0;o<e.length;o+=1){const g=e[o];if(g!==u&&g!==f&&g!==s&&g!==r){c=this.tolerance;let m;for(a=0;a<4;a+=1){const p=_[a].distanceToPlane(g.point);p>c&&(c=p,m=_[a])}m&&this.addVertexToFace(g,m)}}}reindexFaceAndVertices(){const e=[];for(let n=0;n<this.faces.length;n+=1){const i=this.faces[n];i.mark===bs&&e.push(i)}this.faces=e}collectFaces(e){const n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==bs)throw Error("attempt to include a destroyed face in the hull");const s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0;const s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){const r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=rP;let r;n?r=n.next:r=n=i.getEdge(0);do{const o=r.opposite,a=o.face;a.mark===bs&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){const i=jn.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){const o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");const o=i.opposite.face;let a=!1;if(n===Ch?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){const c=e.mergeAdjacentFaces(i,[]);for(let l=0;l<c.length;l+=1)this.deleteFaceVertices(c[l],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=Ph),!1}addVertexToHull(e){const n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===bs)for(;this.doAdjacentMerge(s,oP););}for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Ph)for(s.mark=bs;this.doAdjacentMerge(s,Ch););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};var cP=aP;const lP=cP,uP=(t,e={})=>{const n=new lP(t);return n.build(),n.collectFaces(e.skipTriangulation)};var fP=uP;const hP=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var Ks=hP;const dP=Ks,pP=$e,mP=(...t)=>{let e,n;return t.length===1?(e=dP(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>pP.clone(i)),e};var gP=mP;const _P=$e,vP=Ks,xP=t=>{const e=t.map(n=>_P.clone(n));return vP(e)};var MP=xP;const EP=Ks,SP=(t,e)=>{const n=EP(t);return n.plane=e,n};var yP=SP;const bP=()=>[0,0,0,0];var ga=bP;const TP=ga,wP=t=>{const e=TP();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};var Jm=wP;const AP=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);var Qm=AP;const RP=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];var eg=RP;const PP=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);var tg=PP;const Tc=$e,CP=(t,e,n)=>{const i=Tc.normalize(Tc.create(),e),s=Tc.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};var ng=CP;const LP=ga,DP=(t,e,n,i)=>{const s=LP();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};var ig=DP;const tn=$e,UP=ng,IP=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;const n=e.length;e.forEach(d=>{tn.add(t,t,d)}),tn.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,c=0;const l=tn.create();e.forEach(d=>{tn.subtract(l,d,t),i+=l[0]*l[0],s+=l[0]*l[1],r+=l[0]*l[2],o+=l[1]*l[1],a+=l[1]*l[2],c+=l[2]*l[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,c/=n,l[0]=0,l[1]=0,l[2]=0;const u=tn.create();let f=o*c-a*a;u[0]=f,u[1]=r*a-s*c,u[2]=s*a-r*o;let h=f*f;return tn.add(l,l,tn.scale(u,u,h)),f=i*c-r*r,u[0]=r*a-s*c,u[1]=f,u[2]=s*r-a*i,h=f*f,tn.dot(l,u)<0&&(h=-h),tn.add(l,l,tn.scale(u,u,h)),f=i*o-s*s,u[0]=s*a-r*o,u[1]=s*r-a*i,u[2]=f,h=f*f,tn.dot(l,u)<0&&(h=-h),tn.add(l,l,tn.scale(u,u,h)),UP(t,l,t)};var NP=IP;const Pn=$e,FP=(t,...e)=>{const n=e.length,i=Pn.create(),s=Pn.create(),r=o=>{const a=e[o],c=e[(o+1)%n],l=e[(o+2)%n];return Pn.subtract(i,c,a),Pn.subtract(s,l,a),Pn.cross(i,i,s),Pn.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?Pn.copy(t,r(0)):(e.forEach((o,a)=>{Pn.add(t,t,r(a))}),Pn.normalize(t,t)),t[3]=Pn.dot(t,e[0]),t};var sg=FP;const{EPS:wc}=Qe,Ot=$e,OP=(t,e,n,i)=>{let s=Ot.subtract(Ot.create(),n,e),r=Ot.subtract(Ot.create(),i,e);Ot.length(s)<wc&&(s=Ot.orthogonal(s,r)),Ot.length(r)<wc&&(r=Ot.orthogonal(r,s));let o=Ot.cross(Ot.create(),s,r);Ot.length(o)<wc&&(r=Ot.orthogonal(r,s),o=Ot.cross(o,s,r)),o=Ot.normalize(o,o);const a=Ot.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};var BP=OP;const zP=$e,HP=(t,e)=>{const n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return zP.fromValues(i,s,r)};var VP=HP;const GP=$e,$P=(t,e)=>GP.dot(t,e)-t[3];var rg=$P;const kP=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;var og=kP;const WP=ut,Bt=$e,XP=sg,qP=tg,YP=(t,e,n)=>{const i=WP.isMirroring(n),s=Bt.orthogonal(Bt.create(),e),r=Bt.cross(s,e,s),o=Bt.cross(Bt.create(),e,r);let a=Bt.fromScalar(Bt.create(),e[3]);Bt.multiply(a,a,e);let c=Bt.add(Bt.create(),a,r),l=Bt.add(Bt.create(),a,o);return a=Bt.transform(a,a,n),c=Bt.transform(c,c,n),l=Bt.transform(l,l,n),XP(t,a,c,l),i&&qP(t,t),t};var jP=YP,Zs={clone:Jm,copy:Qm,create:ga,equals:eg,flip:tg,fromNormalAndPoint:ng,fromValues:ig,fromNoisyPoints:NP,fromPoints:sg,fromPointsRandom:BP,projectionOfPoint:VP,signedDistanceToPoint:rg,toString:og,transform:jP};const Lh=Zs,KP=Ks,ZP=t=>{const e=t.vertices.slice().reverse(),n=KP(e);return t.plane&&(n.plane=Lh.flip(Lh.create(),t.plane)),n};var JP=ZP;const QP=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));var ag=QP;const Dh=Zs,Ni=$e,eC=t=>tC(t.vertices),tC=t=>{const e=t.length;if(e>2){const n=Dh.fromPoints(Dh.create(),...t);let i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){const o=t[r];if(!nC(i,s,o,n))return!1;i=s,s=o}}return!0},nC=(t,e,n,i)=>{const s=Ni.cross(Ni.create(),Ni.subtract(Ni.create(),e,t),Ni.subtract(Ni.create(),n,e));return Ni.dot(s,i)>=0};var cg=eC;const Uh=Zs,iC=t=>(t.plane||(t.plane=Uh.fromPoints(Uh.create(),...t.vertices)),t.plane);var Yl=iC;const sC=Yl,rC=t=>{const e=t.vertices.length;if(e<3)return 0;const n=t.vertices,i=sC(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let c=0,l=0,u=1,f=2;switch(a){case 1:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][1]*(n[f][2]-n[l][2]);c+=n[0][1]*(n[1][2]-n[e-1][2]),c/=2*i[0];break;case 2:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][2]*(n[f][0]-n[l][0]);c+=n[0][2]*(n[1][0]-n[e-1][0]),c/=2*i[1];break;case 3:default:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][0]*(n[f][1]-n[l][1]);c+=n[0][0]*(n[1][1]-n[e-1][1]),c/=2*i[2];break}return c};var lg=rC;const ar=$e,oC=t=>{const e=t.vertices,n=e.length,i=n===0?ar.create():ar.clone(e[0]),s=ar.clone(i);for(let r=1;r<n;r++)ar.min(i,i,e[r]),ar.max(s,s,e[r]);return[i,s]};var aC=oC;const cC=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];var lC=cC;const uC=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);var fC=uC;const hC=(t,e,n)=>{const[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};var dC=hC,pC={clone:Jm,copy:Qm,create:ga,dot:lC,equals:eg,fromScalar:fC,fromValues:ig,toString:og,transform:dC};const mC=pC,Ih=new WeakMap,gC=t=>{const e=Ih.get(t);if(e)return e;const n=t.vertices,i=mC.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,c=s,l=s;n.forEach(d=>{s[0]>d[0]&&(s=d),r[1]>d[1]&&(r=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),c[1]<d[1]&&(c=d),l[2]<d[2]&&(l=d)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+c[1])*.5,i[2]=(o[2]+l[2])*.5;const u=i[0]-a[0],f=i[1]-c[1],h=i[2]-l[2];return i[3]=Math.sqrt(u*u+f*f+h*h),Ih.set(t,i),i};var _C=gC;const Ac=$e,vC=t=>{let e=0;const n=t.vertices,i=Ac.create();for(let s=0;s<n.length-2;s++)Ac.cross(i,n[s+1],n[s+2]),e+=Ac.dot(n[0],i);return e/=6,e};var xC=vC;const MC=t=>t.vertices;var EC=MC;const SC=$e,yC=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${SC.toString(n)}, `}),e+="]",e};var bC=yC;const TC=ut,Nh=$e,wC=Ks,AC=(t,e)=>{const n=e.vertices.map(i=>Nh.transform(Nh.create(),i,t));return TC.isMirroring(t)&&n.reverse(),wC(n)};var RC=AC;const PC=rg,{NEPS:CC}=Qe,LC=$e,DC=ag,UC=cg,IC=lg,NC=Yl,FC=t=>{if(!DC(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(IC(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(LC.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!UC(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){const e=NC(t);t.vertices.forEach(n=>{const i=Math.abs(PC(e,n));if(i>CC)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};var OC=FC,rt={clone:gP,create:Ks,fromPoints:MP,fromPointsAndPlane:yP,invert:JP,isA:ag,isConvex:cg,measureArea:lg,measureBoundingBox:aC,measureBoundingSphere:_C,measureSignedVolume:xC,plane:Yl,toPoints:EC,toString:bC,transform:RC,validate:OC};const BC=fP,zC=Xr,HC=rt,VC=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const n=BC(t,{skipTriangulation:!0}).map(i=>{const s=i.map(r=>t[r]);return HC.create(s)});return zC(n)};var GC=VC;const $C=rt,kC=Xr,WC=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const e=t.map((i,s)=>$C.create(i));return kC(e)};var XC=WC;const qC=$e,YC=ut,jC=rt,KC=Xr,ZC=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");const e=KC();e.transforms=YC.clone(t.slice(1,17));const n=t[21];let i=22,s=t.length-n*3;for(;s<t.length;){const r=t[i];i++;const o=[];for(let a=0;a<r;a++)o.push(qC.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(jC.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var JC=ZC;const Fh=ut,QC=rt,eL=t=>(Fh.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>QC.transform(t.transforms,e)),t.transforms=Fh.create()),t);var tL=eL;const nL=tL,iL=t=>nL(t).polygons;var _a=iL;const sL=rt,rL=Xr,oL=_a,aL=t=>{const n=oL(t).map(i=>sL.invert(i));return rL(n)};var cL=aL;const lL=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);var ug=lL;const uL=rt,fL=_a,hL=t=>fL(t).map(i=>uL.toPoints(i));var dL=hL;const pL=rt,mL=_a,gL=t=>{const e=mL(t);let n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+pL.toString(i)+`
`}),n};var _L=gL;const vL=rt,xL=t=>{const e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((l,u)=>l+u.vertices.length,0);let r=[-1,-1,-1,-1];t.color&&(r=t.color);const o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,c=a+i;return e.forEach(l=>{const u=vL.toPoints(l);o[a]=u.length,a++;for(let f=0;f<u.length;f++){const h=u[f];o[c+0]=h[0],o[c+1]=h[1],o[c+2]=h[2],c+=3}}),o};var ML=xL;const Oh=ut,EL=(t,e)=>{const n=Oh.multiply(Oh.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var SL=EL;const yL=rt,bL=ug,TL=t=>{if(!bL(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(yL.validate),wL(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},wL=t=>{const e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{const o=`${s}`,a=`${i[(r+1)%i.length]}`,c=`${o}/${a}`,l=e.has(c)?e.get(c):0;e.set(c,l+1)})});const n=[];if(e.forEach((i,s)=>{const r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};var AL=TL,At={clone:CR,create:Xr,fromPointsConvex:GC,fromPoints:XC,fromCompactBinary:JC,invert:cL,isA:ug,toPoints:dL,toPolygons:_a,toString:_L,toCompactBinary:ML,transform:SL,validate:AL};const Bh=At,RL=rt,{isNumberArray:zh}=xt,PL=t=>{const e={center:[0,0,0],size:[2,2,2]},{center:n,size:i}=Object.assign({},e,t);if(!zh(n,3))throw new Error("center must be an array of X, Y and Z values");if(!zh(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(r=>r>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?Bh.create():Bh.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(r=>{const o=r[0].map(a=>[n[0]+i[0]/2*(2*!!(a&1)-1),n[1]+i[1]/2*(2*!!(a&2)-1),n[2]+i[2]/2*(2*!!(a&4)-1)]);return RL.create(o)}))};var jl=PL;const CL=jl,{isGTE:LL}=xt,DL=t=>{const e={center:[0,0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!LL(i,0))throw new Error("size must be positive");return i=[i,i,i],CL({center:n,size:i})};var UL=DL;const{EPS:Hh,TAU:_i}=Qe,St=$e,IL=At,NL=rt,{sin:FL,cos:OL}=qt,{isGT:BL,isGTE:Rc,isNumberArray:Pc}=xt,zL=t=>{const e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:_i,segments:32};let{center:n,height:i,startRadius:s,startAngle:r,endRadius:o,endAngle:a,segments:c}=Object.assign({},e,t);if(!Pc(n,3))throw new Error("center must be an array of X, Y and Z values");if(!BL(i,0))throw new Error("height must be greater then zero");if(!Pc(s,2))throw new Error("startRadius must be an array of X and Y values");if(!s.every(x=>x>=0))throw new Error("startRadius values must be positive");if(!Pc(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(x=>x>=0))throw new Error("endRadius values must be positive");if(o.every(x=>x===0)&&s.every(x=>x===0))throw new Error("at least one radius must be positive");if(!Rc(r,0))throw new Error("startAngle must be positive");if(!Rc(a,0))throw new Error("endAngle must be positive");if(!Rc(c,4))throw new Error("segments must be four or more");r=r%_i,a=a%_i;let l=_i;r<a&&(l=a-r),r>a&&(l=a+(_i-r));const u=Math.min(s[0],s[1],o[0],o[1]),f=Math.acos((u*u+u*u-Hh*Hh)/(2*u*u));if(l<f)throw new Error("startAngle and endAngle do not define a significant rotation");const h=Math.floor(c*(l/_i)),d=St.fromValues(0,0,-(i/2)),_=St.fromValues(0,0,i/2),g=St.subtract(St.create(),_,d),m=St.fromValues(1,0,0),p=St.fromValues(0,1,0),y=St.create(),E=St.create(),v=St.create(),M=(x,T,I)=>{const z=T*l+r;return St.scale(y,m,I[0]*OL(z)),St.scale(E,p,I[1]*FL(z)),St.add(y,y,E),St.scale(v,g,x),St.add(v,v,d),St.add(St.create(),y,v)},b=(...x)=>{const T=x.map(I=>St.add(St.create(),I,n));return NL.create(T)},w=[];for(let x=0;x<h;x++){const T=x/h;let I=(x+1)/h;l===_i&&x===h-1&&(I=0),o[0]===s[0]&&o[1]===s[1]?(w.push(b(d,M(0,I,o),M(0,T,o))),w.push(b(M(0,I,o),M(1,I,o),M(1,T,o),M(0,T,o))),w.push(b(_,M(1,T,o),M(1,I,o)))):(s[0]>0&&s[1]>0&&w.push(b(d,M(0,I,s),M(0,T,s))),(s[0]>0||s[1]>0)&&w.push(b(M(0,T,s),M(0,I,s),M(1,T,o))),o[0]>0&&o[1]>0&&w.push(b(_,M(1,T,o),M(1,I,o))),(o[0]>0||o[1]>0)&&w.push(b(M(1,T,o),M(0,I,s),M(1,I,o))))}return l<_i&&(w.push(b(d,M(0,0,s),_)),w.push(b(M(0,0,s),M(1,0,o),_)),w.push(b(d,_,M(0,1,s))),w.push(b(M(0,1,s),_,M(1,1,o)))),IL.create(w)};var fg=zL;const HL=At,VL=fg,{isGTE:GL}=xt,$L=t=>{const e={center:[0,0,0],height:2,radius:1,segments:32},{center:n,height:i,radius:s,segments:r}=Object.assign({},e,t);if(!GL(s,0))throw new Error("radius must be positive");return i===0||s===0?HL.create():VL({center:n,height:i,startRadius:[s,s],endRadius:[s,s],segments:r})};var hg=$L;const{TAU:Vh}=Qe,Ae=$e,Gh=At,$h=rt,{sin:kh,cos:Wh}=qt,{isGTE:kL,isNumberArray:Xh}=xt,WL=t=>{const e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!Xh(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Xh(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(_=>_>=0))throw new Error("radius values must be positive");if(!kL(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return Gh.create();const o=Ae.scale(Ae.create(),Ae.normalize(Ae.create(),r[0]),i[0]),a=Ae.scale(Ae.create(),Ae.normalize(Ae.create(),r[1]),i[1]),c=Ae.scale(Ae.create(),Ae.normalize(Ae.create(),r[2]),i[2]),l=Math.round(s/4);let u;const f=[],h=Ae.create(),d=Ae.create();for(let _=0;_<=s;_++){const g=Vh*_/s,m=Ae.add(Ae.create(),Ae.scale(h,o,Wh(g)),Ae.scale(d,a,kh(g)));if(_>0){let p,y;for(let E=0;E<=l;E++){const v=Vh/4*E/l,M=Wh(v),b=kh(v);if(E>0){let w=[],D;D=Ae.subtract(Ae.create(),Ae.scale(h,u,p),Ae.scale(d,c,y)),w.push(Ae.add(D,D,n)),D=Ae.subtract(Ae.create(),Ae.scale(h,m,p),Ae.scale(d,c,y)),w.push(Ae.add(D,D,n)),E<l&&(D=Ae.subtract(Ae.create(),Ae.scale(h,m,M),Ae.scale(d,c,b)),w.push(Ae.add(D,D,n))),D=Ae.subtract(Ae.create(),Ae.scale(h,u,M),Ae.scale(d,c,b)),w.push(Ae.add(D,D,n)),f.push($h.create(w)),w=[],D=Ae.add(Ae.create(),Ae.scale(h,u,p),Ae.scale(d,c,y)),w.push(Ae.add(Ae.create(),n,D)),D=Ae.add(D,Ae.scale(h,m,p),Ae.scale(d,c,y)),w.push(Ae.add(Ae.create(),n,D)),E<l&&(D=Ae.add(D,Ae.scale(h,m,M),Ae.scale(d,c,b)),w.push(Ae.add(Ae.create(),n,D))),D=Ae.add(D,Ae.scale(h,u,M),Ae.scale(d,c,b)),w.push(Ae.add(Ae.create(),n,D)),w.reverse(),f.push($h.create(w))}p=M,y=b}}u=m}return Gh.create(f)};var dg=WL;const XL=At,qL=rt,{isNumberArray:qh}=xt,YL=t=>{const e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:n,faces:i,colors:s,orientation:r}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(n.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(s){if(!Array.isArray(s))throw new Error("colors must be an array");if(s.length!==i.length)throw new Error("faces and colors must have the same length")}n.forEach((a,c)=>{if(!qh(a,3))throw new Error(`point ${c} must be an array of X, Y, Z values`)}),i.forEach((a,c)=>{if(a.length<3)throw new Error(`face ${c} must contain 3 or more indexes`);if(!qh(a,a.length))throw new Error(`face ${c} must be an array of numbers`)}),r!=="outward"&&i.forEach(a=>a.reverse());const o=i.map((a,c)=>{const l=qL.create(a.map(u=>n[u]));return s&&s[c]&&(l.color=s[c]),l});return XL.create(o)};var pg=YL;const Yh=ut,jh=$e,Kh=At,jL=pg,{isGTE:Zh}=xt,KL=t=>{const e={radius:1,frequency:6};let{radius:n,frequency:i}=Object.assign({},e,t);if(!Zh(n,0))throw new Error("radius must be positive");if(!Zh(i,6))throw new Error("frequency must be six or more");if(n===0)return Kh.create();i=Math.floor(i/6);const s=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],r=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(h,d,_)=>{const g=h[0],m=h[1],p=h[2];let y=_;const E=[],v=[];for(let M=0;M<d;M++)for(let b=0;b<d-M;b++){const w=M/d,D=(M+1)/d,x=b/(d-M),T=(b+1)/(d-M),I=d-M-1?b/(d-M-1):1,z=[];z[0]=a(a(g,m,x),p,w),z[1]=a(a(g,m,T),p,w),z[2]=a(a(g,m,I),p,D);for(let U=0;U<3;U++){const O=jh.length(z[U]);for(let H=0;H<3;H++)z[U][H]/=O}if(E.push(z[0],z[1],z[2]),v.push([y,y+1,y+2]),y+=3,b<d-M-1){const U=d-M-1?(b+1)/(d-M-1):1;z[0]=a(a(g,m,T),p,w),z[1]=a(a(g,m,U),p,D),z[2]=a(a(g,m,I),p,D);for(let O=0;O<3;O++){const H=jh.length(z[O]);for(let G=0;G<3;G++)z[O][G]/=H}E.push(z[0],z[1],z[2]),v.push([y,y+1,y+2]),y+=3}}return{points:E,triangles:v,offset:y}},a=(h,d,_)=>{const g=1-_,m=[];for(let p=0;p<3;p++)m[p]=h[p]*g+d[p]*_;return m};let c=[],l=[],u=0;for(let h=0;h<r.length;h++){const d=o([s[r[h][0]],s[r[h][1]],s[r[h][2]]],i,u);c=c.concat(d.points),l=l.concat(d.triangles),u=d.offset}let f=jL({points:c,faces:l,orientation:"inward"});return n!==1&&(f=Kh.transform(Yh.fromScaling(Yh.create(),[n,n,n]),f)),f};var ZL=KL;const JL=li,QL=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return JL.fromPoints({},t)};var e3=QL;const yo=wt,t3=t=>{const e={points:[],paths:[],orientation:"counterclockwise"},{points:n,paths:i,orientation:s}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let r=n;Array.isArray(n[0])&&(Array.isArray(n[0][0])||(r=[n])),r.forEach((u,f)=>{if(!Array.isArray(u))throw new Error("list of points "+f+" must be an array");if(u.length<3)throw new Error("list of points "+f+" must contain three or more points");u.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+f+", point "+d+" must be an array");if(h.length<2)throw new Error("list of points "+f+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let u=0;o=r.map(f=>f.map(h=>u++))}const a=[];r.forEach(u=>u.forEach(f=>a.push(f)));let c=[];o.forEach(u=>{const f=u.map(d=>a[d]),h=yo.fromPoints(f);c=c.concat(yo.toSides(h))});let l=yo.create(c);return s==="clockwise"&&(l=yo.reverse(l)),l};var n3=t3;const vi=Xe,Jh=wt,{isNumberArray:Qh}=xt,i3=t=>{const e={center:[0,0],size:[2,2]},{center:n,size:i}=Object.assign({},e,t);if(!Qh(n,2))throw new Error("center must be an array of X and Y values");if(!Qh(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return Jh.create();const s=[i[0]/2,i[1]/2],r=[s[0],-s[1]],o=[vi.subtract(vi.create(),n,s),vi.add(vi.create(),n,r),vi.add(vi.create(),n,s),vi.subtract(vi.create(),n,r)];return Jh.fromPoints(o)};var Kl=i3;const{EPS:zo,TAU:cr}=Qe,Cc=Xe,lt=$e,ed=At,ks=rt,{sin:s3,cos:r3}=qt,{isGTE:td,isNumberArray:nd}=xt,o3=jl,id=(t,e,n,i,s,r)=>{const o=cr/4*s/i,a=r3(o),c=s3(o),l=i-s;let u=n*a,f=e[2]-(n-n*c);r||(f=n-n*c-e[2]),u=u>zo?u:0;const h=lt.add(lt.create(),t,[e[0]-n,e[1]-n,f]),d=lt.add(lt.create(),t,[n-e[0],e[1]-n,f]),_=lt.add(lt.create(),t,[n-e[0],n-e[1],f]),g=lt.add(lt.create(),t,[e[0]-n,n-e[1],f]),m=[],p=[],y=[],E=[];for(let v=0;v<=l;v++){const M=l>0?cr/4*v/l:0,b=Cc.fromAngleRadians(Cc.create(),M);Cc.scale(b,b,u);const w=lt.fromVec2(lt.create(),b);m.push(lt.add(lt.create(),h,w)),lt.rotateZ(w,w,[0,0,0],cr/4),p.push(lt.add(lt.create(),d,w)),lt.rotateZ(w,w,[0,0,0],cr/4),y.push(lt.add(lt.create(),_,w)),lt.rotateZ(w,w,[0,0,0],cr/4),E.push(lt.add(lt.create(),g,w))}return r?[m,p,y,E]:(m.reverse(),p.reverse(),y.reverse(),E.reverse(),[E,y,p,m])},sd=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){const s=t[i],r=e[i];for(let o=0;o<s.length-1;o++)n.push(ks.create([s[o],s[o+1],r[o]])),o<r.length-1&&n.push(ks.create([r[o],s[o+1],r[o+1]]))}return n},rd=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i];const o=s[s.length-1],a=r[r.length-1],c=(i+1)%t.length;s=t[c],r=e[c];const l=s[0],u=r[0];n.push(ks.create([o,l,u,a]))}return n},a3=(t,e)=>{t=[t[3],t[2],t[1],t[0]],t=t.map(r=>r.slice().reverse());const n=[];t.forEach(r=>{r.forEach(o=>n.push(o))});const i=[];e.forEach(r=>{r.forEach(o=>i.push(o))});const s=[];for(let r=0;r<i.length;r++){const o=(r+1)%i.length;s.push(ks.create([n[r],n[o],i[o],i[r]]))}return s},c3=t=>{const e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!nd(n,3))throw new Error("center must be an array of X, Y and Z values");if(!nd(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(l=>l>=0))throw new Error("size values must be positive");if(!td(s,0))throw new Error("roundRadius must be positive");if(!td(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return ed.create();if(s===0)return o3({center:n,size:i});if(i=i.map(l=>l/2),s>i[0]-zo||s>i[1]-zo||s>i[2]-zo)throw new Error("roundRadius must be smaller than the radius of all dimensions");r=Math.floor(r/4);let o=null,a=null,c=[];for(let l=0;l<=r;l++){const u=id(n,i,s,r,l,!0),f=id(n,i,s,r,l,!1);if(l===0&&(c=c.concat(a3(f,u))),o&&(c=c.concat(sd(o,u),rd(o,u))),a&&(c=c.concat(sd(a,f),rd(a,f))),l===r){let h=u.map(d=>d[0]);c.push(ks.create(h)),h=f.map(d=>d[0]),c.push(ks.create(h))}o=u,a=f}return ed.create(c)};var l3=c3;const{EPS:u3,TAU:od}=Qe,ve=$e,ad=At,f3=rt,{sin:cd,cos:ld}=qt,{isGTE:bo,isNumberArray:h3}=xt,d3=hg,p3=t=>{const e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:n,height:i,radius:s,roundRadius:r,segments:o}=Object.assign({},e,t);if(!h3(n,3))throw new Error("center must be an array of X, Y and Z values");if(!bo(i,0))throw new Error("height must be positive");if(!bo(s,0))throw new Error("radius must be positive");if(!bo(r,0))throw new Error("roundRadius must be positive");if(r>s)throw new Error("roundRadius must be smaller than the radius");if(!bo(o,4))throw new Error("segments must be four or more");if(i===0||s===0)return ad.create();if(r===0)return d3({center:n,height:i,radius:s});const a=[0,0,-(i/2)],c=[0,0,i/2],l=ve.subtract(ve.create(),c,a),u=ve.length(l);if(2*r>u-u3)throw new Error("height must be larger than twice roundRadius");let f;Math.abs(l[0])>Math.abs(l[1])?f=ve.fromValues(0,1,0):f=ve.fromValues(1,0,0);const h=ve.scale(ve.create(),ve.normalize(ve.create(),l),r),d=ve.scale(ve.create(),ve.normalize(ve.create(),ve.cross(ve.create(),h,f)),s),_=ve.scale(ve.create(),ve.normalize(ve.create(),ve.cross(ve.create(),d,h)),s);ve.add(a,a,h),ve.subtract(c,c,h);const g=Math.floor(.25*o),m=b=>{const w=b.map(D=>ve.add(D,D,n));return f3.create(w)},p=[],y=ve.create(),E=ve.create();let v;for(let b=0;b<=o;b++){const w=od*b/o,D=ve.add(ve.create(),ve.scale(y,d,ld(w)),ve.scale(E,_,cd(w)));if(b>0){let x=[];x.push(ve.add(ve.create(),a,D)),x.push(ve.add(ve.create(),a,v)),x.push(ve.add(ve.create(),c,v)),x.push(ve.add(ve.create(),c,D)),p.push(m(x));let T,I;for(let z=0;z<=g;z++){const U=od/4*z/g,O=ld(U),H=cd(U);if(z>0){x=[];let G;G=ve.add(ve.create(),a,ve.subtract(y,ve.scale(y,v,T),ve.scale(E,h,I))),x.push(G),G=ve.add(ve.create(),a,ve.subtract(y,ve.scale(y,D,T),ve.scale(E,h,I))),x.push(G),z<g&&(G=ve.add(ve.create(),a,ve.subtract(y,ve.scale(y,D,O),ve.scale(E,h,H))),x.push(G)),G=ve.add(ve.create(),a,ve.subtract(y,ve.scale(y,v,O),ve.scale(E,h,H))),x.push(G),p.push(m(x)),x=[],G=ve.add(ve.create(),ve.scale(y,v,T),ve.scale(E,h,I)),ve.add(G,G,c),x.push(G),G=ve.add(ve.create(),ve.scale(y,D,T),ve.scale(E,h,I)),ve.add(G,G,c),x.push(G),z<g&&(G=ve.add(ve.create(),ve.scale(y,D,O),ve.scale(E,h,H)),ve.add(G,G,c),x.push(G)),G=ve.add(ve.create(),ve.scale(y,v,O),ve.scale(E,h,H)),ve.add(G,G,c),x.push(G),x.reverse(),p.push(m(x))}T=O,I=H}}v=D}return ad.create(p)};var m3=p3;const{EPS:ud,TAU:To}=Qe,ot=Xe,fd=wt,{isGTE:hd,isNumberArray:dd}=xt,g3=Kl,_3=t=>{const e={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!dd(n,2))throw new Error("center must be an array of X and Y values");if(!dd(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(g=>g>=0))throw new Error("size values must be positive");if(!hd(s,0))throw new Error("roundRadius must be positive");if(!hd(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return fd.create();if(s===0)return g3({center:n,size:i});if(i=i.map(g=>g/2),s>i[0]-ud||s>i[1]-ud)throw new Error("roundRadius must be smaller than the radius of all dimensions");const o=Math.floor(r/4),a=ot.add(ot.create(),n,[i[0]-s,i[1]-s]),c=ot.add(ot.create(),n,[s-i[0],i[1]-s]),l=ot.add(ot.create(),n,[s-i[0],s-i[1]]),u=ot.add(ot.create(),n,[i[0]-s,s-i[1]]),f=[],h=[],d=[],_=[];for(let g=0;g<=o;g++){const m=To/4*g/o,p=ot.fromAngleRadians(ot.create(),m);ot.scale(p,p,s),f.push(ot.add(ot.create(),a,p)),ot.rotate(p,p,ot.create(),To/4),h.push(ot.add(ot.create(),c,p)),ot.rotate(p,p,ot.create(),To/4),d.push(ot.add(ot.create(),l,p)),ot.rotate(p,p,ot.create(),To/4),_.push(ot.add(ot.create(),u,p))}return fd.fromPoints(f.concat(h,d,_))};var v3=_3;const x3=dg,{isGTE:M3}=xt,E3=t=>{const e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!M3(i,0))throw new Error("radius must be positive");return i=[i,i,i],x3({center:n,radius:i,segments:s,axes:r})};var S3=E3;const y3=Kl,{isGTE:b3}=xt,T3=t=>{const e={center:[0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!b3(i,0))throw new Error("size must be positive");return i=[i,i],y3({center:n,size:i})};var w3=T3;const{TAU:mg}=Qe,gr=Xe,A3=wt,{isGT:R3,isGTE:wo,isNumberArray:P3}=xt,C3=(t,e)=>t>0&&e>1&&e<t/2?Math.cos(Math.PI*e/t)/Math.cos(Math.PI*(e-1)/t):0,pd=(t,e,n,i)=>{const s=mg/t,r=[];for(let o=0;o<t;o++){const a=gr.fromAngleRadians(gr.create(),s*o+n);gr.scale(a,a,e),gr.add(a,i,a),r.push(a)}return r},L3=t=>{const e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:n,vertices:i,outerRadius:s,innerRadius:r,density:o,startAngle:a}=Object.assign({},e,t);if(!P3(n,2))throw new Error("center must be an array of X and Y values");if(!wo(i,2))throw new Error("vertices must be two or more");if(!R3(s,0))throw new Error("outerRadius must be greater than zero");if(!wo(r,0))throw new Error("innerRadius must be greater than zero");if(!wo(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%mg,r===0){if(!wo(o,2))throw new Error("density must be two or more");r=s*C3(i,o)}const c=gr.clone(n),l=pd(i,s,a,c),u=pd(i,r,a+Math.PI/i,c),f=[];for(let h=0;h<i;h++)f.push(l[h]),f.push(u[h]);return A3.fromPoints(f)};var D3=L3;const gg=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(gg(n)):e.concat(n),[]);var ns=gg;const U3=ns,md=ut,gd=Zs,_d=wt,vd=At,xd=li,I3=(t,...e)=>{const n={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:s}=Object.assign({},n,t);if(e=U3(e),e.length===0)throw new Error("wrong number of arguments");const r=gd.fromNormalAndPoint(gd.create(),s,i);if(Number.isNaN(r[0]))throw new Error("the given origin and normal do not define a proper plane");const o=md.mirrorByPlane(md.create(),r),a=e.map(c=>xd.isA(c)?xd.transform(o,c):_d.isA(c)?_d.transform(o,c):vd.isA(c)?vd.transform(o,c):c);return a.length===1?a[0]:a},N3=(...t)=>I3({normal:[1,0,0]},t);var F3={mirrorX:N3};const Md=Zs,Fi=$e,O3=t=>{const e=t.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const n=e.reduce((o,a)=>Fi.add(Fi.create(),o,a[0]),Fi.create());Fi.scale(n,n,1/e.length);let i,s=0;e.forEach(o=>{if(!Fi.equals(o[0],o[1])){const a=Fi.squaredDistance(n,o[0]);a>s&&(i=o,s=a)}});const r=e.find(o=>Fi.equals(o[1],i[0]));return Md.fromPoints(Md.create(),r[0],i[0],i[1])};var _g=O3;const B3=t=>(t||(t=[]),{edges:t});var is=B3;const z3=is,Ed=$e,H3=(...t)=>{let e,n;return t.length===1?(e=z3(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[Ed.clone(i[0]),Ed.clone(i[1])]),e};var V3=H3;const G3=$e,$3=(t,e)=>{const n=t.edges,i=e.edges;return n.length!==i.length?!1:n.reduce((r,o,a)=>{const c=i[a],l=G3.squaredDistance(o[0],c[0]);return r&&l<Number.EPSILON},!0)};var k3=$3;const Ao=$e,W3=is,X3=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");if(t.length<3)throw new Error("the given points must contain THREE or more points");const e=[];let n=t[t.length-1];return t.forEach(i=>{i.length===2&&e.push([Ao.fromVec2(Ao.create(),n),Ao.fromVec2(Ao.create(),i)]),i.length===3&&e.push([n,i]),n=i}),W3(e)};var q3=X3;const Ro=$e,Y3=is,j3=t=>{if(!Array.isArray(t))throw new Error("the given sides must be an array");const e=[];return t.forEach(n=>{e.push([Ro.fromVec2(Ro.create(),n[0]),Ro.fromVec2(Ro.create(),n[1])])}),Y3(e)};var K3=j3;const Z3=t=>!!(t&&typeof t=="object"&&"edges"in t&&Array.isArray(t.edges));var J3=Z3;const Q3=is,eD=(...t)=>{let e,n;return t.length===1?(e=Q3(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[i[1],i[0]]),e};var tD=eD;const nD=t=>t.edges;var iD=nD;const sD=(t,e)=>{let n,i,s,r,o,a=1;do{i=t,t=null;let c=null;for(o=0;i;){o++,s=i;let l=0;for(n=0;n<a&&(l++,s=s.nextZ,!!s);n++);let u=a;for(;l>0||u>0&&s;)l!==0&&(u===0||!s||e(i)<=e(s))?(r=i,i=i.nextZ,l--):(r=s,s=s.nextZ,u--),c?c.nextZ=r:t=r,r.prevZ=c,c=r;i=s}c.nextZ=null,a*=2}while(o>1);return t};var rD=sD;const oD=rD;let vg=class{constructor(e,n,i){this.i=e,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}};const aD=(t,e,n,i)=>{const s=new vg(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s},cD=t=>{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)};var xg={Node:vg,insertNode:aD,removeNode:cD,sortLinked:oD};const lD=(t,e,n,i,s,r,o,a)=>(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(r-a)-(s-o)*(i-a)>=0,uD=(t,e,n)=>(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);var Zl={area:uD,pointInTriangle:lD};const{Node:Sd,insertNode:yd,removeNode:Yo}=xg,{area:Yt}=Zl,fD=(t,e,n,i,s)=>{let r;if(s===_D(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=yd(o,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=yd(o,t[o],t[o+1],r);return r&&va(r,r.next)&&(Yo(r),r=r.next),r},Mg=(t,e)=>{if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(va(n,n.next)||Yt(n.prev,n,n.next)===0)){if(Yo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e},hD=(t,e,n)=>{let i=t;do{const s=i.prev,r=i.next.next;!va(s,r)&&Eg(s,i,i.next,r)&&Fr(s,r)&&Fr(r,s)&&(e.push(s.i/n),e.push(i.i/n),e.push(r.i/n),Yo(i),Yo(i.next),i=t=r),i=i.next}while(i!==t);return Mg(i)},dD=(t,e)=>{let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Eg(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1},Fr=(t,e)=>Yt(t.prev,t,t.next)<0?Yt(t,e,t.next)>=0&&Yt(t,t.prev,e)>=0:Yt(t,e,t.prev)<0||Yt(t,t.next,e)<0,pD=(t,e)=>{let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i},mD=(t,e)=>{const n=new Sd(t.i,t.x,t.y),i=new Sd(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i},gD=(t,e)=>t.next.i!==e.i&&t.prev.i!==e.i&&!dD(t,e)&&(Fr(t,e)&&Fr(e,t)&&pD(t,e)&&(Yt(t.prev,t,e.prev)||Yt(t,e.prev,e))||va(t,e)&&Yt(t.prev,t,t.next)>0&&Yt(e.prev,e,e.next)>0),Eg=(t,e,n,i)=>{const s=Math.sign(Yt(t,e,n)),r=Math.sign(Yt(t,e,i)),o=Math.sign(Yt(n,i,t)),a=Math.sign(Yt(n,i,e));return!!(s!==r&&o!==a||s===0&&Po(t,n,e)||r===0&&Po(t,i,e)||o===0&&Po(n,t,i)||a===0&&Po(n,e,i))},Po=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),_D=(t,e,n,i)=>{let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s},va=(t,e)=>t.x===e.x&&t.y===e.y;var Sg={cureLocalIntersections:hD,filterPoints:Mg,isValidDiagonal:gD,linkedPolygon:fD,locallyInside:Fr,splitPolygon:mD};const{filterPoints:ll,linkedPolygon:vD,locallyInside:xD,splitPolygon:MD}=Sg,{area:bd,pointInTriangle:ED}=Zl,SD=(t,e,n,i)=>{const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:t.length,l=vD(t,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(wD(l))}s.sort((r,o)=>r.x-o.x);for(let r=0;r<s.length;r++)n=yD(s[r],n),n=ll(n,n.next);return n},yD=(t,e)=>{const n=bD(t,e);if(!n)return e;const i=MD(n,t),s=ll(n,n.next);return ll(i,i.next),e===n?s:e},bD=(t,e)=>{let n=e;const i=t.x,s=t.y;let r=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>r){if(r=f,f===i){if(s===n.y)return n;if(s===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===r)return o;const a=o,c=o.x,l=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=c&&i!==n.x&&ED(s<l?i:r,s,c,l,s<l?r:i,s,n.x,n.y)){const f=Math.abs(s-n.y)/(i-n.x);xD(n,t)&&(f<u||f===u&&(n.x>o.x||n.x===o.x&&TD(o,n)))&&(o=n,u=f)}n=n.next}while(n!==a);return o},TD=(t,e)=>bd(t.prev,t,e.prev)<0&&bd(e.next,t,t.next)<0,wD=t=>{let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n};var AD=SD;const RD=AD,{removeNode:PD,sortLinked:CD}=xg,{cureLocalIntersections:LD,filterPoints:jo,isValidDiagonal:DD,linkedPolygon:UD,splitPolygon:ID}=Sg,{area:Vi,pointInTriangle:_r}=Zl,ND=(t,e,n=2)=>{const i=e&&e.length,s=i?e[0]*n:t.length;let r=UD(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f;if(i&&(r=RD(t,e,r,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(let h=n;h<s;h+=n){const d=t[h],_=t[h+1];d<a&&(a=d),_<c&&(c=_),d>l&&(l=d),_>u&&(u=_)}f=Math.max(l-a,u-c),f=f!==0?1/f:0}return Or(r,o,n,a,c,f),o},Or=(t,e,n,i,s,r,o)=>{if(!t)return;!o&&r&&zD(t,i,s,r);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,r?OD(t,i,s,r):FD(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),PD(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=LD(jo(t),e,n),Or(t,e,n,i,s,r,2)):o===2&&BD(t,e,n,i,s,r):Or(jo(t),e,n,i,s,r,1);break}}},FD=t=>{const e=t.prev,n=t,i=t.next;if(Vi(e,n,i)>=0)return!1;let s=t.next.next;for(;s!==t.prev;){if(_r(e.x,e.y,n.x,n.y,i.x,i.y,s.x,s.y)&&Vi(s.prev,s,s.next)>=0)return!1;s=s.next}return!0},OD=(t,e,n,i)=>{const s=t.prev,r=t,o=t.next;if(Vi(s,r,o)>=0)return!1;const a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,c=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,l=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,u=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,f=ul(a,c,e,n,i),h=ul(l,u,e,n,i);let d=t.prevZ,_=t.nextZ;for(;d&&d.z>=f&&_&&_.z<=h;){if(d!==t.prev&&d!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Vi(d.prev,d,d.next)>=0||(d=d.prevZ,_!==t.prev&&_!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&Vi(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;d&&d.z>=f;){if(d!==t.prev&&d!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Vi(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;_&&_.z<=h;){if(_!==t.prev&&_!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&Vi(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0},BD=(t,e,n,i,s,r)=>{let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DD(o,a)){let c=ID(o,a);o=jo(o,o.next),c=jo(c,c.next),Or(o,e,n,i,s,r),Or(c,e,n,i,s,r);return}a=a.next}o=o.next}while(o!==t)},zD=(t,e,n,i)=>{let s=t;do s.z===null&&(s.z=ul(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,CD(s,r=>r.z)},ul=(t,e,n,i,s)=>(t=32767*(t-n)*s,e=32767*(e-i)*s,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1);var HD=ND;const{NEPS:Lc}=Qe,VD=(t,e)=>Math.abs(t[0]-e[0])<=Lc&&Math.abs(t[1]-e[1])<=Lc&&Math.abs(t[2]-e[2])<=Lc;var GD=VD;const $D=t=>{let e=0;for(let n=0;n<t.length;n++){const i=(n+1)%t.length;e+=t[n][0]*t[i][1],e-=t[i][0]*t[n][1]}return e/2};var yg=$D;const kD=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};var WD=kD;const XD=(t,e,n,i,s,r)=>{const a=1/(t*i-e*n);let c=s*i-e*r,l=-s*n+t*r;return c*=a,l*=a,[c,l]};var qD=XD,bg={area:yg,solve2Linear:qD};const YD=yg,jD=t=>YD(t.vertices);var KD=jD;const ZD=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var JD=ZD;const QD=JD,eU=t=>{const e=t.vertices.slice().reverse();return QD(e)};var tU=eU;const nU=KD,iU=tU,sU=(t,e)=>{if(t.length===0)return 0;const n=e.vertices;return n.length<3?0:(nU(e)<0&&(e=iU(e)),t.reduce((s,r)=>s+rU(r,n),0)===t.length?1:0)},rU=(t,e)=>{const n=e.length,i=t[0],s=t[1];let r=e[n-1],o=e[0],a=r[1]>s,c=0,l=0;for(let u=n+1;--u;){const f=o[1]>s;if(a!==f){const h=r[0]>i,d=o[0]>i;(h&&d||o[0]-(o[1]-s)*(r[0]-o[0])/(r[1]-o[1])>=i)&&(c=!c)}a=f,r=o,o=e[++l]}return c};var oU=sU,aU={arePointsInside:oU};const{area:cU}=bg,{toOutlines:lU}=wt,{arePointsInside:uU}=aU,fU=t=>{const e=lU(t),n=[],i=[];e.forEach((o,a)=>{const c=cU(o);c<0?i.push(a):c>0&&n.push(a)});const s=[],r=[];return n.forEach((o,a)=>{const c=e[o];s[a]=[],i.forEach((l,u)=>{const f=e[l];uU([f[0]],{vertices:c})&&(s[a].push(l),r[u]||(r[u]=[]),r[u].push(a))})}),i.forEach((o,a)=>{if(r[a]&&r[a].length>1){const c=hU(r[a],l=>s[l].length);r[a].forEach((l,u)=>{u!==c&&(s[l]=s[l].filter(f=>f!==o))})}}),s.map((o,a)=>({solid:e[n[a]],holes:o.map(c=>e[c])}))},hU=(t,e)=>{let n,i;return t.forEach((s,r)=>{const o=e(s);(i===void 0||o<i)&&(n=r,i=o)}),n};var dU=fU;const pU=wt,Td=Zs,mU=Xe,Tt=$e,gU=_g,_U=dU;let vU=class{constructor(e){this.plane=gU(e);const n=Tt.orthogonal(Tt.create(),this.plane),i=Tt.cross(Tt.create(),this.plane,n);this.v=Tt.normalize(i,i),this.u=Tt.cross(Tt.create(),this.v,this.plane),this.basisMap=new Map;const s=e.edges.map(o=>o.map(a=>this.to2D(a))),r=pU.create(s);this.roots=_U(r)}to2D(e){const n=mU.fromValues(Tt.dot(e,this.u),Tt.dot(e,this.v));return this.basisMap.set(n,e),n}to3D(e){const n=this.basisMap.get(e);if(n)return n;{console.log("Warning: point not in original slice");const i=Tt.scale(Tt.create(),this.u,e[0]),s=Tt.scale(Tt.create(),this.v,e[1]),r=Tt.scale(Tt.create(),Td,Td[3]),o=Tt.add(i,i,r);return Tt.add(s,s,o)}}};var xU=vU;const MU=rt,EU=HD,SU=xU,yU=t=>{const e=new SU(t),n=[];return e.roots.forEach(({solid:i,holes:s})=>{let r=i.length;const o=[];s.forEach((f,h)=>{o.push(r),r+=f.length});const a=[i,...s].flat(),c=a.flat(),l=f=>e.to3D(a[f]),u=EU(c,o);for(let f=0;f<u.length;f+=3){const h=u.slice(f,f+3).map(l);n.push(MU.fromPointsAndPlane(h,e.plane))}}),n};var bU=yU;const wd=$e,TU=t=>t.reduce((e,n)=>e+=`[${wd.toString(n[0])}, ${wd.toString(n[1])}], `,""),wU=t=>`[${TU(t.edges)}]`;var AU=wU;const Co=$e,RU=is,PU=(t,e)=>{const n=e.edges.map(i=>[Co.transform(Co.create(),i[0],t),Co.transform(Co.create(),i[1],t)]);return RU(n)};var CU=PU,Jl={calculatePlane:_g,clone:V3,create:is,equals:k3,fromPoints:q3,fromSides:K3,isA:J3,reverse:tD,toEdges:iD,toPolygons:bU,toString:AU,transform:CU};const Ad=$e,LU=is,DU=t=>{if(!t.edges)return t;let e=t.edges;const n=new Map,i=new Map;e=e.filter(o=>!Ad.equals(o[0],o[1])),e.forEach(o=>{const a=o[0].toString(),c=o[1].toString();n.set(a,o[0]),n.set(c,o[1]),i.set(a,(i.get(a)||0)+1),i.set(c,(i.get(c)||0)-1)});const s=[],r=[];return i.forEach((o,a)=>{o<0&&s.push(a),o>0&&r.push(a)}),s.forEach(o=>{const a=n.get(o);let c=1/0,l;r.forEach(u=>{const f=n.get(u),h=Ad.distance(a,f);h<c&&(c=h,l=f)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${l} distance ${c}`),e=e.map(u=>u[0].toString()===o?[l,u[1]]:u[1].toString()===o?[u[0],l]:u)}),LU(e)};var UU=DU;const{EPS:Rd}=Qe,Ts=$e,Lo=rt,Pd=Jl,fl=(t,e)=>t===e?t:t<e?fl(e,t):e===1?1:e===0?t:fl(e,t%e),IU=(t,e)=>t*e/fl(t,e),Cd=(t,e)=>{const n=t/e.length;if(n===1)return e;const i=Ts.fromValues(n,n,n),s=[];return e.forEach(r=>{const o=Ts.subtract(Ts.create(),r[1],r[0]);Ts.divide(o,o,i);let a=r[0];for(let c=1;c<=n;++c){const l=Ts.add(Ts.create(),a,o);s.push([a,l]),a=l}}),s},Ld=Rd*Rd/2*Math.sin(Math.PI/3),NU=(t,e)=>{let n=Pd.toEdges(t),i=Pd.toEdges(e);if(n.length!==i.length){const r=IU(n.length,i.length);r!==n.length&&(n=Cd(r,n)),r!==i.length&&(i=Cd(r,i))}const s=[];return n.forEach((r,o)=>{const a=i[o],c=Lo.create([r[0],r[1],a[1]]),l=Lo.measureArea(c);Number.isFinite(l)&&l>Ld&&s.push(c);const u=Lo.create([r[0],a[1],a[0]]),f=Lo.measureArea(u);Number.isFinite(f)&&f>Ld&&s.push(u)}),s};var FU=NU;const Dd=ut,Ud=wt,OU=At,hl=rt,Si=Jl,BU=UU,Id=FU,zU=(t,e,n)=>{let i=null;return Ud.isA(n)&&(i=Si.fromSides(Ud.toSides(n))),hl.isA(n)&&(i=Si.fromPoints(hl.toPoints(n))),t===0||t===1?Si.transform(Dd.fromTranslation(Dd.create(),[0,0,t]),i):null},HU=(t,e)=>{const n={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:zU},{numberOfSlices:i,capStart:s,capEnd:r,close:o,repair:a,callback:c}=Object.assign({},n,t);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=BU(e));const l=i-1;let u=null,f=null,h=null,d=[];for(let _=0;_<i;_++){const g=c(_/l,_,e);if(g){if(!Si.isA(g))throw new Error("the callback function must return slice objects");if(Si.toEdges(g).length===0)throw new Error("the callback function must return slices with one or more edges");h&&(d=d.concat(Id(h,g))),_===0&&(u=g),_===i-1&&(f=g),h=g}}if(r){const _=Si.toPolygons(f);d=d.concat(_)}if(s){const _=Si.toPolygons(u).map(hl.invert);d=d.concat(_)}return!s&&!r&&o&&!Si.equals(f,u)&&(d=d.concat(Id(f,u))),OU.create(d)};var VU=HU;const{TAU:nn}=Qe,lr=ut,{mirrorX:GU}=F3,Do=wt,Dc=Jl,$U=VU,kU=(t,e)=>{const n={segments:12,startAngle:0,angle:nn,overflow:"cap"};let{segments:i,startAngle:s,angle:r,overflow:o}=Object.assign({},n,t);if(i<3)throw new Error("segments must be greater then 3");s=Math.abs(s)>nn?s%nn:s,r=Math.abs(r)>nn?r%nn:r;let a=s+r;if(a=Math.abs(a)>nn?a%nn:a,a<s){const y=s;s=a,a=y}let c=a-s;if(c<=0&&(c=nn),Math.abs(c)<nn){const y=nn/i;i=Math.floor(Math.abs(c)/y),Math.abs(c)>i*y&&i++}let l=Do.toSides(e);if(l.length===0)throw new Error("the given geometry cannot be empty");const u=l.filter(y=>y[0][0]<0),f=l.filter(y=>y[0][0]>=0);u.length>0&&f.length>0&&o==="cap"&&(u.length>f.length?(l=l.map(y=>{let E=y[0],v=y[1];return E=[Math.min(E[0],0),E[1]],v=[Math.min(v[0],0),v[1]],[E,v]}),e=Do.create(l),e=GU(e)):f.length>=u.length&&(l=l.map(y=>{let E=y[0],v=y[1];return E=[Math.max(E[0],0),E[1]],v=[Math.max(v[0],0),v[1]],[E,v]}),e=Do.create(l)));const d=c/i,_=Math.abs(c)<nn,g=Dc.fromSides(Do.toSides(e));Dc.reverse(g,g);const m=lr.create(),p=(y,E,v)=>{let M=d*E+s;return c===nn&&E===i&&(M=s),lr.multiply(m,lr.fromZRotation(m,M),lr.fromXRotation(lr.create(),nn/4)),Dc.transform(m,v)};return t={numberOfSlices:i+1,capStart:_,capEnd:_,close:!_,callback:p},$U(t,g)};var WU=kU;const XU=ns,Nd=ut,Fd=wt,Od=At,Bd=li,qU=(t,...e)=>{if(!Array.isArray(t))throw new Error("angles must be an array");if(e=XU(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=t[2],i=t[1],s=t[0],r=Nd.fromTaitBryanRotation(Nd.create(),n,i,s),o=e.map(a=>Bd.isA(a)?Bd.transform(r,a):Fd.isA(a)?Fd.transform(r,a):Od.isA(a)?Od.transform(r,a):a);return o.length===1?o[0]:o};var YU={rotate:qU};const jU=ns,zd=ut,Hd=wt,Vd=At,Gd=li,xa=(t,...e)=>{if(!Array.isArray(t))throw new Error("offset must be an array");if(e=jU(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=zd.fromTranslation(zd.create(),t),i=e.map(s=>Gd.isA(s)?Gd.transform(n,s):Hd.isA(s)?Hd.transform(n,s):Vd.isA(s)?Vd.transform(n,s):s);return i.length===1?i[0]:i},KU=(t,...e)=>xa([t,0,0],e),ZU=(t,...e)=>xa([0,t,0],e),JU=(t,...e)=>xa([0,0,t],e);var vr={translate:xa,translateX:KU,translateY:ZU,translateZ:JU};const{TAU:QU}=Qe,eI=WU,{rotate:tI}=YU,{translate:nI}=vr,iI=jm,{isGT:Uc,isGTE:Ic}=xt,sI=t=>{const e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:QU},{innerRadius:n,innerSegments:i,outerRadius:s,outerSegments:r,innerRotation:o,startAngle:a,outerRotation:c}=Object.assign({},e,t);if(!Uc(n,0))throw new Error("innerRadius must be greater than zero");if(!Ic(i,3))throw new Error("innerSegments must be three or more");if(!Uc(s,0))throw new Error("outerRadius must be greater than zero");if(!Ic(r,3))throw new Error("outerSegments must be three or more");if(!Ic(a,0))throw new Error("startAngle must be positive");if(!Uc(c,0))throw new Error("outerRotation must be greater than zero");if(n>=s)throw new Error("inner circle is too large to rotate about the outer circle");let l=iI({radius:n,segments:i});return o!==0&&(l=tI([0,0,o],l)),l=nI([s,0],l),eI({startAngle:a,angle:c,segments:r},l)};var rI=sI;const{NEPS:Ws}=Qe,ur=Xe,oI=wt,{isNumberArray:aI}=xt,dl=(t,e,n)=>Math.acos((t*t+e*e-n*n)/(2*t*e)),cI=(t,e,n)=>e>Ws?Math.sqrt(t*t+n*n-2*t*n*Math.cos(e)):Math.sqrt((t-n)*(t-n)+t*n*e*e*(1-e*e/12)),lI=t=>{if(Math.abs(t[0]+t[1]+t[2]-Math.PI)>Ws)throw new Error("AAA triangles require angles that sum to PI");const n=t[0],i=t[1],s=Math.PI-n-i,r=1,o=r/Math.sin(s)*Math.sin(n),a=r/Math.sin(s)*Math.sin(i);return Js(n,i,s,o,a,r)},uI=t=>{const e=t[0],n=t[1],i=Math.PI+Ws-e-n;if(i<Ws)throw new Error("AAS triangles require angles that sum to PI");const s=t[2],r=s/Math.sin(e)*Math.sin(n),o=s/Math.sin(e)*Math.sin(i);return Js(e,n,i,s,r,o)},fI=t=>{const e=t[0],n=t[2],i=Math.PI+Ws-e-n;if(i<Ws)throw new Error("ASA triangles require angles that sum to PI");const s=t[1],r=s/Math.sin(i)*Math.sin(e),o=s/Math.sin(i)*Math.sin(n);return Js(e,n,i,r,o,s)},hI=t=>{const e=t[0],n=t[1],i=t[2],s=cI(e,n,i),r=dl(s,e,i),o=Math.PI-r-n;return Js(r,n,o,i,s,e)},dI=t=>{const e=t[0],n=t[1],i=t[2],s=Math.asin(n*Math.sin(i)/e),r=Math.PI-s-i,o=e/Math.sin(i)*Math.sin(r);return Js(s,r,i,n,o,e)},pI=t=>{const e=t[1],n=t[2],i=t[0];if(e+n<=i||n+i<=e||i+e<=n)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const s=dl(n,i,e),r=dl(i,e,n),o=Math.PI-s-r;return Js(s,r,o,e,n,i)},Js=(t,e,n,i,s,r)=>{const o=ur.fromValues(0,0),a=ur.fromValues(r,0),c=ur.fromValues(i,0);return ur.add(c,ur.rotate(c,c,[0,0],Math.PI-e),a),oI.fromPoints([o,a,c])},mI=t=>{const e={type:"SSS",values:[1,1,1]};let{type:n,values:i}=Object.assign({},e,t);if(typeof n!="string")throw new Error("triangle type must be a string");if(n=n.toUpperCase(),!((n[0]==="A"||n[0]==="S")&&(n[1]==="A"||n[1]==="S")&&(n[2]==="A"||n[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!aI(i,3))throw new Error("triangle values must contain three values");if(!i.every(s=>s>0))throw new Error("triangle values must be greater than zero");switch(n){case"AAA":return lI(i);case"AAS":return uI(i);case"ASA":return fI(i);case"SAS":return hI(i);case"SSA":return dI(i);case"SSS":return pI(i);default:throw new Error("invalid triangle type, try again")}};var gI=mI,Uo={arc:N2,circle:jm,cube:UL,cuboid:jl,cylinder:hg,cylinderElliptic:fg,ellipse:Ym,ellipsoid:dg,geodesicSphere:ZL,line:e3,polygon:n3,polyhedron:pg,rectangle:Kl,roundedCuboid:l3,roundedCylinder:m3,roundedRectangle:v3,sphere:S3,square:w3,star:D3,torus:rI,triangle:gI};function _I({width:t,length:e}){const o=t+.5,a=e+.5,c=vr.translate([0,a/2+2.5/2,0],Uo.cuboid({size:[o+5,2.5,10]})),l=vr.translate([0,-a/2-2.5/2,0],Uo.cuboid({size:[o+5,2.5,10]})),u=vr.translate([o/2+2.5/2,0,0],Uo.cuboid({size:[2.5,a+5,10]})),f=vr.translate([-o/2-2.5/2,0,0],Uo.cuboid({size:[2.5,a+5,10]}));return[c,l,u,f]}var Tg={geom2:wt,geom3:At,path2:li,poly3:rt};const vI=()=>[0,1,0];var Ql=vI;const xI=Ql,MI=t=>{const e=xI();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var EI=MI;const Nc=Xe,SI=t=>{const e=Nc.normal(Nc.create(),t);return Nc.negate(e,e),e};var eu=SI;const $d=Xe,yI=t=>$d.scale($d.create(),t,t[2]);var Ma=yI;const fr=Xe,bI=eu,TI=Ma,wI=(t,e)=>{const n=TI(t),i=bI(t),s=fr.subtract(fr.create(),e,n),r=fr.dot(s,i);return fr.scale(s,i,r),fr.add(s,s,n),s};var AI=wI;const RI=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var wg=RI;const PI=Xe,CI=(t,e)=>{let n=PI.dot(e,t);return n=Math.abs(n-t[2]),n};var LI=CI;const DI=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var UI=DI;const hr=Xe,II=(t,e,n)=>{const i=hr.subtract(hr.create(),n,e);hr.normal(i,i),hr.normalize(i,i);const s=hr.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};var Ag=II;const NI=Ql,FI=(t,e,n)=>{const i=NI();return i[0]=t,i[1]=e,i[2]=n,i};var Rg=FI;const OI=Xe,{solve2Linear:BI}=bg,zI=(t,e)=>{const n=BI(t[0],t[1],e[0],e[1],t[2],e[2]);return OI.clone(n)};var HI=zI;const kd=Xe,VI=wg,GI=Rg,$I=(t,e)=>{const n=kd.negate(kd.create(),e),i=-e[2];return VI(t,GI(n[0],n[1],i))};var kI=$I;const WI=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;var XI=WI;const Wd=Xe,qI=Ag,YI=Ma,jI=eu,KI=(t,e,n)=>{const i=YI(e),s=jI(e);return Wd.transform(i,i,n),Wd.transform(s,s,n),qI(t,i,s)};var ZI=KI;const JI=Ma,QI=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=JI(t)[0]),n};var eN=QI,tN={clone:EI,closestPoint:AI,copy:wg,create:Ql,direction:eu,distanceToPoint:LI,equals:UI,fromPoints:Ag,fromValues:Rg,intersectPointOfLines:HI,origin:Ma,reverse:kI,toString:XI,transform:ZI,xAtY:eN};const nN=ns,In=Xe,dr=$e,Pg=wt,Cg=At,Lg=li,Xd=rt,Xs=new WeakMap,iN=t=>{let e=Xs.get(t);if(e)return e;const n=Lg.toPoints(t);let i;n.length===0?i=In.create():i=In.clone(n[0]);let s=In.clone(i);return n.forEach(r=>{In.min(i,i,r),In.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],Xs.set(t,e),e},sN=t=>{let e=Xs.get(t);if(e)return e;const n=Pg.toPoints(t);let i;n.length===0?i=In.create():i=In.clone(n[0]);let s=In.clone(i);return n.forEach(r=>{In.min(i,i,r),In.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],Xs.set(t,e),e},rN=t=>{let e=Xs.get(t);if(e)return e;const n=Cg.toPolygons(t);let i=dr.create();if(n.length>0){const r=Xd.toPoints(n[0]);dr.copy(i,r[0])}let s=dr.clone(i);return n.forEach(r=>{Xd.toPoints(r).forEach(o=>{dr.min(i,i,o),dr.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],Xs.set(t,e),e},oN=(...t)=>{if(t=nN(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>Lg.isA(n)?iN(n):Pg.isA(n)?sN(n):Cg.isA(n)?rN(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};var aN=oN;const{EPS:cN}=Qe,lN=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return cN*n/e};var uN=lN;const fN=ns,{geom2:hN,geom3:dN,path2:pN}=Tg,tu=uN,nu=aN,mN=t=>tu(nu(t),2),gN=t=>tu(nu(t),2),_N=t=>tu(nu(t),3),vN=(...t)=>{if(t=fN(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>pN.isA(n)?mN(n):hN.isA(n)?gN(n):dN.isA(n)?_N(n):0);return e.length===1?e[0]:e};var Dg=vN;const xN=(t,e)=>t-e;var MN=xN;const EN=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){const r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};var SN=EN,yN={fnNumberSort:MN,insertSorted:SN};const qd=ut,bN=Xe,pt=$e,Ug=function(t,e){arguments.length<2&&(e=pt.orthogonal(pt.create(),t)),this.v=pt.normalize(pt.create(),pt.cross(pt.create(),t,e)),this.u=pt.cross(pt.create(),this.v,t),this.plane=t,this.planeorigin=pt.scale(pt.create(),t,t[3])};Ug.prototype={getProjectionMatrix:function(){return qd.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const t=pt.scale(pt.create(),this.plane,this.plane[3]);return qd.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return bN.fromValues(pt.dot(t,this.u),pt.dot(t,this.v))},to3D:function(t){const e=pt.scale(pt.create(),this.u,t[0]),n=pt.scale(pt.create(),this.v,t[1]),i=pt.add(e,e,this.planeorigin);return pt.add(n,n,i)}};var TN=Ug;const{EPS:Kn}=Qe,xi=tN,En=Xe,wN=TN,ws=WD,{insertSorted:AN,fnNumberSort:RN}=yN,Yd=rt,PN=t=>{if(t.length<2)return t;const e=[],n=t.length,i=Yd.plane(t[0]),s=new wN(i),r=[],o=[],a=new Map,c=new Map,l=new Map,u=10/Kn;for(let _=0;_<n;_++){const g=t[_];let m=[],p=g.vertices.length,y=-1;if(p>0){let E,v;for(let M=0;M<p;M++){let b=s.to2D(g.vertices[M]);const w=Math.floor(b[1]*u);let D;l.has(w)?D=l.get(w):l.has(w+1)?D=l.get(w+1):l.has(w-1)?D=l.get(w-1):(D=b[1],l.set(w,b[1])),b=En.fromValues(b[0],D),m.push(b);const x=b[1];(M===0||x<E)&&(E=x,y=M),(M===0||x>v)&&(v=x);let T=c.get(x);T||(T={},c.set(x,T)),T[_]=!0}if(E>=v)m=[],p=0,y=-1;else{let M=a.get(E);M||(M=[],a.set(E,M)),M.push(_)}}m.reverse(),y=p-y-1,r.push(m),o.push(y)}const f=[];c.forEach((_,g)=>f.push(g)),f.sort(RN);let h=[],d=[];for(let _=0;_<f.length;_++){const g=[],m=f[_],p=c.get(m);for(let E=0;E<h.length;++E){const v=h[E],M=v.polygonindex;if(p[M]){const b=r[M],w=b.length;let D=v.leftvertexindex,x=v.rightvertexindex;for(;;){let I=D+1;if(I>=w&&(I=0),b[I][1]!==m)break;D=I}let T=x-1;if(T<0&&(T=w-1),b[T][1]===m&&(x=T),D!==v.leftvertexindex&&D===x)h.splice(E,1),--E;else{v.leftvertexindex=D,v.rightvertexindex=x,v.topleft=b[D],v.topright=b[x];let I=D+1;I>=w&&(I=0),v.bottomleft=b[I];let z=x-1;z<0&&(z=w-1),v.bottomright=b[z]}}}let y;if(_>=f.length-1)h=[],y=null;else{y=Number(f[_+1]);const E=.5*(m+y),v=a.get(m);for(const M in v){const b=v[M],w=r[b],D=w.length,x=o[b];let T=x;for(;;){let H=T+1;if(H>=D&&(H=0),w[H][1]!==m||H===x)break;T=H}let I=x;for(;;){let H=I-1;if(H<0&&(H=D-1),w[H][1]!==m||H===T)break;I=H}let z=T+1;z>=D&&(z=0);let U=I-1;U<0&&(U=D-1);const O={polygonindex:b,leftvertexindex:T,rightvertexindex:I,topleft:w[T],topright:w[I],bottomleft:w[z],bottomright:w[U]};AN(h,O,(H,G)=>{const k=ws(H.topleft,H.bottomleft,E),W=ws(G.topleft,G.bottomleft,E);return k>W?1:k<W?-1:0})}}for(const E in h){const v=h[E];let M=ws(v.topleft,v.bottomleft,m);const b=En.fromValues(M,m);M=ws(v.topright,v.bottomright,m);const w=En.fromValues(M,m);M=ws(v.topleft,v.bottomleft,y);const D=En.fromValues(M,y);M=ws(v.topright,v.bottomright,y);const x=En.fromValues(M,y),T={topleft:b,topright:w,bottomleft:D,bottomright:x,leftline:xi.fromPoints(xi.create(),b,D),rightline:xi.fromPoints(xi.create(),x,w)};if(g.length>0){const I=g[g.length-1],z=En.distance(T.topleft,I.topright),U=En.distance(T.bottomleft,I.bottomright);z<Kn&&U<Kn&&(T.topleft=I.topleft,T.leftline=I.leftline,T.bottomleft=I.bottomleft,g.splice(g.length-1,1))}g.push(T)}if(_>0){const E=new Set,v=new Set;for(let M=0;M<g.length;M++){const b=g[M];for(let w=0;w<d.length;w++)if(!v.has(w)){const D=d[w];if(En.distance(D.bottomleft,b.topleft)<Kn&&En.distance(D.bottomright,b.topright)<Kn){v.add(w);const x=xi.direction(b.leftline),T=xi.direction(D.leftline),I=x[0]-T[0],z=xi.direction(b.rightline),U=xi.direction(D.rightline),O=z[0]-U[0],H=Math.abs(I)<Kn,G=Math.abs(O)<Kn,k=H||I>=0,W=G||O>=0;k&&W&&(b.outpolygon=D.outpolygon,b.leftlinecontinues=H,b.rightlinecontinues=G,E.add(w));break}}}for(let M=0;M<d.length;M++)if(!E.has(M)){const b=d[M];b.outpolygon.rightpoints.push(b.bottomright),En.distance(b.bottomright,b.bottomleft)>Kn&&b.outpolygon.leftpoints.push(b.bottomleft),b.outpolygon.leftpoints.reverse();const D=b.outpolygon.rightpoints.concat(b.outpolygon.leftpoints).map(T=>s.to3D(T)),x=Yd.fromPointsAndPlane(D,i);x.vertices.length&&e.push(x)}}for(let E=0;E<g.length;E++){const v=g[E];v.outpolygon?(v.leftlinecontinues||v.outpolygon.leftpoints.push(v.topleft),v.rightlinecontinues||v.outpolygon.rightpoints.push(v.topright)):(v.outpolygon={leftpoints:[],rightpoints:[]},v.outpolygon.leftpoints.push(v.topleft),En.distance(v.topleft,v.topright)>Kn&&v.outpolygon.rightpoints.push(v.topright))}d=g}return e};var CN=PN;const jd=At,LN=rt,{NEPS:DN}=Qe,UN=CN,IN=t=>{if(t.isRetesselated)return t;const e=jd.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:LN.plane(r),index:o})),n=NN(e),i=[];n.forEach(r=>{if(Array.isArray(r)){const o=UN(r);i.push(...o)}else i.push(r)});const s=jd.create(i);return s.isRetesselated=!0,s},NN=t=>{let e=[t];const n=[];for(let s=3;s>=0;s--){const r=[],o=s===3?15e-9:DN;e.forEach(a=>{a.sort(FN(s,o));let c=0;for(let l=1;l<a.length;l++)a[l].plane[s]-a[c].plane[s]>o&&(l-c===1?n.push(a[c]):r.push(a.slice(c,l)),c=l);a.length-c===1?n.push(a[c]):r.push(a.slice(c))}),e=r}const i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},FN=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;var ON=IN;const Fc=$e,Ig=rt,BN=(t,e)=>{const n=Math.abs(Ig.measureArea(e));return Number.isFinite(n)&&n>t},zN=(t,e)=>{let n=e.map(s=>{const r=s.vertices.map(c=>Fc.snap(Fc.create(),c,t)),o=[];for(let c=0;c<r.length;c++){const l=(c+1)%r.length;Fc.equals(r[c],r[l])||o.push(r[c])}const a=Ig.create(o);return s.color&&(a.color=s.color),a});const i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>BN(i,s)),n};var Ng=zN;const HN=GD,Ls=$e,Ko=rt,VN=t=>{const e=Ko.toPoints(t),n=[];for(let i=0;i<e.length;i++){const s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){const s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},GN=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.set(n,e)},Oc=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.delete(n)},$N=(t,e)=>{const n=`${e.v2}:${e.v1}`;return t.get(n)},kN=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2;const o=Kd(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;const a=Kd(i,s,r,n);return[o,a]},WN=Ls.create(),XN=Ls.create(),Kd=(t,e,n,i)=>{const s=Ls.subtract(WN,e,t),r=Ls.subtract(XN,n,e);return Ls.cross(s,s,r),Ls.dot(s,i)},qN=t=>{let e;const n=[];for(;t.next;){const i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=Ko.create(n)),e},YN=t=>{if(t.length<2)return t;const e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){const r=n.shift(),o=VN(r);for(let a=0;a<o.length;a++){const c=o[a],l=$N(i,c);if(l){const u=kN(c,l,e);if(u[0]>=0&&u[1]>=0){const f=l.next,h=c.next;c.prev.next=l.next,c.next.prev=l.prev,l.prev.next=c.next,l.next.prev=c.prev,c.v1=null,c.v2=null,c.next=null,c.prev=null,Oc(i,l),l.v1=null,l.v2=null,l.next=null,l.prev=null;const d=(_,g,m)=>{const p={v1:m.v1,v2:g.v2,next:g.next,prev:m.prev};m.prev.next=p,g.next.prev=p,Oc(_,g),g.v1=null,g.v2=null,g.next=null,g.prev=null,Oc(_,m),m.v1=null,m.v2=null,m.next=null,m.prev=null};u[0]===0&&d(i,f,f.prev),u[1]===0&&d(i,h,h.prev)}}else c.next&&GN(i,c)}}const s=[];return i.forEach(r=>{const o=qN(r);o&&s.push(o)}),i.clear(),s},jN=(t,e)=>Math.abs(t[3]-e[3])<15e-8?HN(t,e):!1,KN=(t,e)=>{const n=[];e.forEach(s=>{const r=n.find(o=>jN(o[0],Ko.plane(s)));r?r[1].push(s):n.push([Ko.plane(s),[s]])});let i=[];return n.forEach(s=>{const r=s[1],o=YN(r);i=i.concat(o)}),i};var ZN=KN;const Zd=Qe,Cn=$e,JN=rt,Vt=t=>`${t}`,Jd=(t,e,n,i,s,r)=>{const o=Vt(i),a=Vt(s),c=`${o}/${a}`,l=`${a}/${o}`;if(t.has(l))return Ho(t,e,n,s,i,null),null;const u={vertex0:i,vertex1:s,polygonindex:r};return t.has(c)?t.get(c).push(u):t.set(c,[u]),e.has(o)?e.get(o).push(c):e.set(o,[c]),n.has(a)?n.get(a).push(c):n.set(a,[c]),c},Ho=(t,e,n,i,s,r)=>{const o=Vt(i),a=Vt(s),c=`${o}/${a}`;let l=-1;const u=t.get(c);for(let f=0;f<u.length;f++){const h=u[f];let d=Vt(h.vertex0);if(d===o&&(d=Vt(h.vertex1),d===a&&!(r!==null&&h.polygonindex!==r))){l=f;break}}u.splice(l,1),u.length===0&&t.delete(c),l=e.get(o).indexOf(c),e.get(o).splice(l,1),e.get(o).length===0&&e.delete(o),l=n.get(a).indexOf(c),n.get(a).splice(l,1),n.get(a).length===0&&n.delete(a)},QN=t=>{const e=new Map;for(let n=0;n<t.length;n++){const i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=Vt(r);for(let a=0;a<s;a++){let c=a+1;c===s&&(c=0);const l=i.vertices[c],u=Vt(l),f=`${o}/${u}`,h=`${u}/${o}`;if(e.has(h)){const d=e.get(h);d.splice(-1,1),d.length===0&&e.delete(h)}else{const d={vertex0:r,vertex1:l,polygonindex:n};e.has(f)?e.get(f).push(d):e.set(f,[d])}r=l,o=u}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){const n=new Map,i=new Map,s=new Map;for(const[o,a]of e)s.set(o,!0),a.forEach(c=>{const l=Vt(c.vertex0),u=Vt(c.vertex1);n.has(l)?n.get(l).push(o):n.set(l,[o]),i.has(u)?i.get(u).push(o):i.set(u,[o])});const r=t.slice(0);for(;e.size!==0;){for(const a of e.keys())s.set(a,!0);let o=!1;for(;;){const a=Array.from(s.keys());if(a.length===0)break;const c=a[0];let l=!0;if(e.has(c)){const f=e.get(c)[0];for(let h=0;h<2;h++){const d=h===0?f.vertex0:f.vertex1,_=h===0?f.vertex1:f.vertex0,g=Vt(d),m=Vt(_);let p=[];h===0?i.has(g)&&(p=i.get(g)):n.has(g)&&(p=n.get(g));for(let y=0;y<p.length;y++){const E=p[y],v=e.get(E)[0],M=h===0?v.vertex0:v.vertex1;if(h===0?v.vertex1:v.vertex0,Vt(M)===m){Ho(e,n,i,d,_,null),Ho(e,n,i,_,d,null),l=!1,h=2,o=!0;break}else{const w=d,D=_,x=M,T=Cn.subtract(Cn.create(),x,w),I=Cn.dot(Cn.subtract(Cn.create(),D,w),T)/Cn.dot(T,T);if(I>0&&I<1){const z=Cn.scale(Cn.create(),T,I);if(Cn.add(z,z,w),Cn.squaredDistance(z,D)<Zd.EPS*Zd.EPS){const O=v.polygonindex,H=r[O],G=Vt(v.vertex1);let k=-1;for(let fe=0;fe<H.vertices.length;fe++)if(Vt(H.vertices[fe])===G){k=fe;break}const W=H.vertices.slice(0);W.splice(k,0,_);const ue=JN.create(W);r[O]=ue,Ho(e,n,i,v.vertex0,v.vertex1,O);const oe=Jd(e,n,i,v.vertex0,_,O),Te=Jd(e,n,i,_,v.vertex1,O);oe!==null&&s.set(oe,!0),Te!==null&&s.set(Te,!0),l=!1,h=2,o=!0;break}}}}}}l&&s.delete(c)}if(!o)break}t=r}return e.clear(),t};var eF=QN;const Bc=$e,zc=rt,tF=(t,e,n)=>{const i=e.vertices.length;if(i>3){if(i>4){const o=[0,0,0];e.vertices.forEach(a=>Bc.add(o,o,a)),Bc.snap(o,Bc.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){const c=zc.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(c.color=e.color),n.push(c)}return}const s=zc.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=zc.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},nF=(t,e)=>{const n=[];return e.forEach(i=>{tF(t,i,n)}),n};var iF=nF;const sF=ns,rF=Dg,oF=wt,Fg=At,aF=li,cF=Ng,lF=ZN,uF=eF,fF=iF,hF=(t,e)=>e,dF=(t,e)=>e,pF=(t,e)=>{const n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=rF(e);let a=Fg.toPolygons(e);i&&(a=cF(o,a)),s&&(a=lF(o,a)),r&&(a=uF(a),a=fF(o,a));const c=Object.assign({},e);return c.polygons=a,c},mF=(t,...e)=>{if(e=sF(e),e.length===0)throw new Error("wrong number of arguments");const n=e.map(i=>{if(aF.isA(i))return hF(t,i);if(oF.isA(i))return dF(t,i);if(Fg.isA(i))return pF(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};var gF=mF;const _F=ns,Gi=Xe,pl=wt,ml=At,gl=li,iu=Dg,vF=Ng,xF=t=>{const e=iu(t),i=gl.toPoints(t).map(s=>Gi.snap(Gi.create(),s,e));return gl.create(i)},MF=t=>{const e=iu(t);let i=pl.toSides(t).map(s=>[Gi.snap(Gi.create(),s[0],e),Gi.snap(Gi.create(),s[1],e)]);return i=i.filter(s=>!Gi.equals(s[0],s[1])),pl.create(i)},EF=t=>{const e=iu(t),n=ml.toPolygons(t),i=vF(e,n);return ml.create(i)},SF=(...t)=>{if(t=_F(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>gl.isA(n)?xF(n):pl.isA(n)?MF(n):ml.isA(n)?EF(n):n);return e.length===1?e[0]:e};var yF=SF,bF={generalize:gF,snap:yF,retessellate:ON},su={geometries:Tg,modifiers:bF};const Og=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(Og(n)):e.concat(n),[]);var TF=Og;const wF=t=>Array.isArray(t)?t:t==null?[]:[t];var AF=wF,RF={flatten:TF,toArray:AF};const{geometries:Hc}=su,PF=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((m,p)=>{Hc.geom3.toPolygons(m).forEach(E=>{const v=E.vertices.length,M=v>=3?v-2:0;r+=M,o+=1})});const a=new Uint8Array(80);for(let m=0;m<80;m++)a[m]=65;const c=new Uint32Array(1);c[0]=r;const l=new ArrayBuffer(50*r),u=new Int8Array(l),f=new ArrayBuffer(50),h=new Int8Array(f),d=new Float32Array(f,0,12),_=new Uint16Array(f,48,1);let g=0;return t.forEach(m=>{Hc.geom3.toPolygons(m).forEach((y,E)=>{const v=y.vertices,M=v.length,b=Hc.poly3.plane(y);for(let w=0;w<M-2;w++){d[0]=b[0],d[1]=b[1],d[2]=b[2];let D=3;for(let x=0;x<3;x++){const T=x+(x>0?w:0),I=v[T];d[D++]=I[0],d[D++]=I[1],d[D++]=I[2]}_[0]=0,u.set(h,g),g+=50}e.statusCallback&&e.statusCallback({progress:100*E/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,c.buffer,l]};var CF={serializeBinary:PF};const{geometries:Bg}=su,LF=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=`solid JSCAD
${DF(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},DF=(t,e)=>{const n=[];return t.forEach((i,s)=>{n.push(UF(i)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},UF=(t,e)=>{const n=[];return Bg.geom3.toPolygons(t).forEach((s,r)=>{n.push(IF(s))}),n.join(`
`)},zg=t=>`${t[0]} ${t[1]} ${t[2]}`,Vc=t=>`vertex ${zg(t)}`,IF=t=>{const e=[];if(t.vertices.length>=3){const n=Vc(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){const s=`facet normal ${zg(Bg.poly3.plane(t))}
outer loop
${n}
${Vc(t.vertices[i+1])}
${Vc(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};var NF={serializeText:LF};const{geometries:FF,modifiers:OF}=su,{flatten:BF,toArray:zF}=RF,{serializeBinary:HF}=CF,{serializeText:VF}=NF,GF="application/sla",$F=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=BF(e);let i=e.filter(s=>FF.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=zF(OF.generalize({snap:!0,triangulate:!0},i)),t.binary?HF(i,t):VF(i,t)};var kF={mimeType:GF,serialize:$F};const WF={props:["width","length"],data(){return{stlData:null}},created(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.mesh=null},mounted(){this.initScene(),this.regenerateAndLoad()},watch:{width(){this.regenerateAndLoad()},length(){this.regenerateAndLoad()}},methods:{generateSTL(t,e){try{const n=_I({width:t,length:e});return kF.serialize({binary:!1},n).join(`
`)}catch(n){return console.error("Error generating JSCAD geometry or STL:",n),null}},regenerateAndLoad(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh=null);const t=this.generateSTL(this.width,this.length);if(!t)return;this.stlData=t;const e=new Blob([t],{type:"text/plain"}),n=URL.createObjectURL(e);new Dy().load(n,s=>{this.mesh=new ii(s,new yy({color:30719})),this.scene.add(this.mesh)},void 0,s=>{console.error("STLLoader error:",s)})},initScene(){this.scene=new Sy,this.camera=new pn(75,500/500,.1,1e3),this.camera.position.set(0,70,150),this.camera.lookAt(0,0,0),this.renderer=new bm({canvas:this.$refs.canvas,antialias:!0}),this.renderer.setSize(500,500),this.renderer.setClearColor(15790320);const t=new Ly(4210752);this.scene.add(t);const e=new Cy(16777215,1);e.position.set(1,1,1).normalize(),this.scene.add(e),this.controls=new Uy(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!0,this.controls.minDistance=50,this.controls.maxDistance=1e3,this.animate()},animate(){requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)},downloadSTL(){if(!this.stlData)return;const t=new Blob([this.stlData],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`SynthArmor_cover_${this.width}x${this.length}.stl`,e.click()}}},XF={class:"mt-6 flex flex-col items-center"},qF={ref:"canvas",class:"border border-gray-300 rounded-md"};function YF(t,e,n,i,s,r){return Il(),Nl("div",XF,[Lt("canvas",qF,null,512),Lt("button",{onClick:e[0]||(e[0]=(...o)=>r.downloadSTL&&r.downloadSTL(...o)),class:"mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"}," Download STL ")])}const jF=Ol(WF,[["render",YF],["__scopeId","data-v-944ea391"]]),KF={name:"App",components:{InputForm:Ev,ModelViewer:jF},data(){return{width:155,length:105}},methods:{updateDimensions(t){this.width=t.width,this.length=t.length}}},ZF={class:"max-w-2xl mx-auto min-h-screen flex flex-col justify-center items-center p-6"},JF={class:"w-full bg-white rounded shadow p-6"};function QF(t,e,n,i,s,r){const o=du("InputForm"),a=du("ModelViewer");return Il(),Nl("div",ZF,[e[0]||(e[0]=Lt("div",{class:"mb-8 text-center"},[Lt("h1",{class:"text-4xl font-bold mb-2"},"SynthArmor"),Lt("p",{class:"text-gray-600"}," Modify the dimensions of a 3D model and download your custom design instantly. ")],-1)),Lt("div",JF,[si(o,{onUpdateDimensions:r.updateDimensions},null,8,["onUpdateDimensions"]),si(a,{width:s.width,length:s.length},null,8,["width","length"])])])}const eO=Ol(KF,[["render",QF],["__scopeId","data-v-c87bd7d3"]]);pv(eO).mount("#app");
