(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function El(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const nt={},Cs=[],Nn=()=>{},qg=()=>!1,ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Sl=t=>t.startsWith("onUpdate:"),Xt=Object.assign,yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yg=Object.prototype.hasOwnProperty,Ze=(t,e)=>Yg.call(t,e),Oe=Array.isArray,xr=t=>ta(t)==="[object Map]",jg=t=>ta(t)==="[object Set]",Fe=t=>typeof t=="function",Tt=t=>typeof t=="string",ks=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",tp=t=>(gt(t)||Fe(t))&&Fe(t.then)&&Fe(t.catch),Zg=Object.prototype.toString,ta=t=>Zg.call(t),Kg=t=>ta(t).slice(8,-1),Jg=t=>ta(t)==="[object Object]",bl=t=>Tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mr=El(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qg=/-(\w)/g,mn=na(t=>t.replace(Qg,(e,n)=>n?n.toUpperCase():"")),e0=/\B([A-Z])/g,Qi=na(t=>t.replace(e0,"-$1").toLowerCase()),ia=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=na(t=>t?`on${ia(t)}`:""),Wi=(t,e)=>!Object.is(t,e),Oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},np=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pf;const sa=()=>pf||(pf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tl(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Tt(i)?s0(i):Tl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Tt(t)||gt(t))return t}const t0=/;(?![^(]*\))/g,n0=/:([^]+)/,i0=/\/\*[^]*?\*\//g;function s0(t){const e={};return t.replace(i0,"").split(t0).forEach(n=>{if(n){const i=n.split(n0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wl(t){let e="";if(Tt(t))e=t;else if(Oe(t))for(let n=0;n<t.length;n++){const i=wl(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const r0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o0=El(r0);function ip(t){return!!t||t===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class a0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rn;try{return rn=this,e()}finally{rn=n}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function c0(){return rn}let st;const Ca=new WeakSet;class sp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&rn.active&&rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||op(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mf(this),ap(this);const e=st,n=Tn;st=this,Tn=!0;try{return this.fn()}finally{cp(this),st=e,Tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cl(e);this.deps=this.depsTail=void 0,mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let rp=0,Er,Sr;function op(t,e=!1){if(t.flags|=8,e){t.next=Sr,Sr=t;return}t.next=Er,Er=t}function Al(){rp++}function Rl(){if(--rp>0)return;if(Sr){let e=Sr;for(Sr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Er;){let e=Er;for(Er=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function ap(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Cl(i),l0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Pr))return;t.globalVersion=Pr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!qc(t)){t.flags&=-3;return}const n=st,i=Tn;st=t,Tn=!0;try{ap(t);const s=t.fn(t._value);(e.version===0||Wi(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{st=n,Tn=i,cp(t),t.flags&=-3}}function Cl(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Cl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function l0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tn=!0;const fp=[];function Ti(){fp.push(Tn),Tn=!1}function wi(){const t=fp.pop();Tn=t===void 0?!0:t}function mf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=st;st=void 0;try{e()}finally{st=n}}}let Pr=0;class f0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class up{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!st||!Tn||st===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==st)n=this.activeLink=new f0(st,this),st.deps?(n.prevDep=st.depsTail,st.depsTail.nextDep=n,st.depsTail=n):st.deps=st.depsTail=n,hp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=st.depsTail,n.nextDep=void 0,st.depsTail.nextDep=n,st.depsTail=n,st.deps===n&&(st.deps=i)}return n}trigger(e){this.version++,Pr++,this.notify(e)}notify(e){Al();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rl()}}}function hp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)hp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yc=new WeakMap,Xi=Symbol(""),jc=Symbol(""),Lr=Symbol("");function Dt(t,e,n){if(Tn&&st){let i=Yc.get(t);i||Yc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new up),s.map=i,s.key=n),s.track()}}function ei(t,e,n,i,s,r){const o=Yc.get(t);if(!o){Pr++;return}const a=c=>{c&&c.trigger()};if(Al(),e==="clear")o.forEach(a);else{const c=Oe(t),l=c&&bl(n);if(c&&n==="length"){const f=Number(i);o.forEach((u,h)=>{(h==="length"||h===Lr||!ks(h)&&h>=f)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Lr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Xi)),xr(t)&&a(o.get(jc)));break;case"delete":c||(a(o.get(Xi)),xr(t)&&a(o.get(jc)));break;case"set":xr(t)&&a(o.get(Xi));break}}Rl()}function is(t){const e=Je(t);return e===t?e:(Dt(e,"iterate",Lr),Fn(t)?e:e.map(on))}function Pl(t){return Dt(t=Je(t),"iterate",Lr),t}const u0={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,on)},concat(...t){return is(this).concat(...t.map(e=>Oe(e)?is(e):e))},entries(){return Pa(this,"entries",t=>(t[1]=on(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(on),arguments)},find(t,e){return zn(this,"find",t,e,on,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,on,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return La(this,"includes",t)},indexOf(...t){return La(this,"indexOf",t)},join(t){return is(this).join(t)},lastIndexOf(...t){return La(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return Qs(this,"pop")},push(...t){return Qs(this,"push",t)},reduce(t,...e){return gf(this,"reduce",t,e)},reduceRight(t,...e){return gf(this,"reduceRight",t,e)},shift(){return Qs(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return Qs(this,"splice",t)},toReversed(){return is(this).toReversed()},toSorted(t){return is(this).toSorted(t)},toSpliced(...t){return is(this).toSpliced(...t)},unshift(...t){return Qs(this,"unshift",t)},values(){return Pa(this,"values",on)}};function Pa(t,e,n){const i=Pl(t),s=i[e]();return i!==t&&!Fn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const h0=Array.prototype;function zn(t,e,n,i,s,r){const o=Pl(t),a=o!==t&&!Fn(t),c=o[e];if(c!==h0[e]){const u=c.apply(t,r);return a?on(u):u}let l=n;o!==t&&(a?l=function(u,h){return n.call(this,on(u),h,t)}:n.length>2&&(l=function(u,h){return n.call(this,u,h,t)}));const f=c.call(o,l,i);return a&&s?s(f):f}function gf(t,e,n,i){const s=Pl(t);let r=n;return s!==t&&(Fn(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,on(a),c,t)}),s[e](r,...i)}function La(t,e,n){const i=Je(t);Dt(i,"iterate",Lr);const s=i[e](...n);return(s===-1||s===!1)&&Il(n[0])?(n[0]=Je(n[0]),i[e](...n)):s}function Qs(t,e,n=[]){Ti(),Al();const i=Je(t)[e].apply(t,n);return Rl(),wi(),i}const d0=El("__proto__,__v_isRef,__isVue"),dp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ks));function p0(t){ks(t)||(t=String(t));const e=Je(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class pp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?b0:vp:r?_p:gp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!s){let c;if(o&&(c=u0[n]))return c;if(n==="hasOwnProperty")return p0}const a=Reflect.get(e,n,Wt(e)?e:i);return(ks(n)?dp.has(n):d0(n))||(s||Dt(e,"get",n),r)?a:Wt(a)?o&&bl(n)?a:a.value:gt(a)?s?xp(a):Dl(a):a}}class mp extends pp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=Ns(r);if(!Fn(i)&&!Ns(i)&&(r=Je(r),i=Je(i)),!Oe(e)&&Wt(r)&&!Wt(i))return c?!1:(r.value=i,!0)}const o=Oe(e)&&bl(n)?Number(n)<e.length:Ze(e,n),a=Reflect.set(e,n,i,Wt(e)?e:s);return e===Je(s)&&(o?Wi(i,r)&&ei(e,"set",n,i):ei(e,"add",n,i)),a}deleteProperty(e,n){const i=Ze(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&ei(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ks(n)||!dp.has(n))&&Dt(e,"has",n),i}ownKeys(e){return Dt(e,"iterate",Oe(e)?"length":Xi),Reflect.ownKeys(e)}}class m0 extends pp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const g0=new mp,_0=new m0,v0=new mp(!0);const Zc=t=>t,Zr=t=>Reflect.getPrototypeOf(t);function x0(t,e,n){return function(...i){const s=this.__v_raw,r=Je(s),o=xr(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),f=n?Zc:e?Kc:on;return!e&&Dt(r,"iterate",c?jc:Xi),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function Kr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function M0(t,e){const n={get(s){const r=this.__v_raw,o=Je(r),a=Je(s);t||(Wi(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:c}=Zr(o),l=e?Zc:t?Kc:on;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Dt(Je(s),"iterate",Xi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Je(r),a=Je(s);return t||(Wi(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=Je(a),l=e?Zc:t?Kc:on;return!t&&Dt(c,"iterate",Xi),a.forEach((f,u)=>s.call(r,l(f),l(u),o))}};return Xt(n,t?{add:Kr("add"),set:Kr("set"),delete:Kr("delete"),clear:Kr("clear")}:{add(s){!e&&!Fn(s)&&!Ns(s)&&(s=Je(s));const r=Je(this);return Zr(r).has.call(r,s)||(r.add(s),ei(r,"add",s,s)),this},set(s,r){!e&&!Fn(r)&&!Ns(r)&&(r=Je(r));const o=Je(this),{has:a,get:c}=Zr(o);let l=a.call(o,s);l||(s=Je(s),l=a.call(o,s));const f=c.call(o,s);return o.set(s,r),l?Wi(r,f)&&ei(o,"set",s,r):ei(o,"add",s,r),this},delete(s){const r=Je(this),{has:o,get:a}=Zr(r);let c=o.call(r,s);c||(s=Je(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&ei(r,"delete",s,void 0),l},clear(){const s=Je(this),r=s.size!==0,o=s.clear();return r&&ei(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=x0(s,t,e)}),n}function Ll(t,e){const n=M0(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ze(n,s)&&s in i?n:i,s,r)}const E0={get:Ll(!1,!1)},S0={get:Ll(!1,!0)},y0={get:Ll(!0,!1)};const gp=new WeakMap,_p=new WeakMap,vp=new WeakMap,b0=new WeakMap;function T0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w0(t){return t.__v_skip||!Object.isExtensible(t)?0:T0(Kg(t))}function Dl(t){return Ns(t)?t:Ul(t,!1,g0,E0,gp)}function A0(t){return Ul(t,!1,v0,S0,_p)}function xp(t){return Ul(t,!0,_0,y0,vp)}function Ul(t,e,n,i,s){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=w0(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function yr(t){return Ns(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ns(t){return!!(t&&t.__v_isReadonly)}function Fn(t){return!!(t&&t.__v_isShallow)}function Il(t){return t?!!t.__v_raw:!1}function Je(t){const e=t&&t.__v_raw;return e?Je(e):t}function R0(t){return!Ze(t,"__v_skip")&&Object.isExtensible(t)&&np(t,"__v_skip",!0),t}const on=t=>gt(t)?Dl(t):t,Kc=t=>gt(t)?xp(t):t;function Wt(t){return t?t.__v_isRef===!0:!1}function C0(t){return Wt(t)?t.value:t}const P0={get:(t,e,n)=>e==="__v_raw"?t:C0(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Wt(s)&&!Wt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Mp(t){return yr(t)?t:new Proxy(t,P0)}class L0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new up(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return op(this,!0),!0}get value(){const e=this.dep.track();return lp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function D0(t,e,n=!1){let i,s;return Fe(t)?i=t:(i=t.get,s=t.set),new L0(i,s,n)}const Jr={},ko=new WeakMap;let Oi;function U0(t,e=!1,n=Oi){if(n){let i=ko.get(n);i||ko.set(n,i=[]),i.push(t)}}function I0(t,e,n=nt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=v=>s?v:Fn(v)||s===!1||s===0?ti(v,1):ti(v);let f,u,h,d,_=!1,g=!1;if(Wt(t)?(u=()=>t.value,_=Fn(t)):yr(t)?(u=()=>l(t),_=!0):Oe(t)?(g=!0,_=t.some(v=>yr(v)||Fn(v)),u=()=>t.map(v=>{if(Wt(v))return v.value;if(yr(v))return l(v);if(Fe(v))return c?c(v,2):v()})):Fe(t)?e?u=c?()=>c(t,2):t:u=()=>{if(h){Ti();try{h()}finally{wi()}}const v=Oi;Oi=f;try{return c?c(t,3,[d]):t(d)}finally{Oi=v}}:u=Nn,e&&s){const v=u,M=s===!0?1/0:s;u=()=>ti(v(),M)}const m=c0(),p=()=>{f.stop(),m&&m.active&&yl(m.effects,f)};if(r&&e){const v=e;e=(...M)=>{v(...M),p()}}let y=g?new Array(t.length).fill(Jr):Jr;const E=v=>{if(!(!(f.flags&1)||!f.dirty&&!v))if(e){const M=f.run();if(s||_||(g?M.some((b,w)=>Wi(b,y[w])):Wi(M,y))){h&&h();const b=Oi;Oi=f;try{const w=[M,y===Jr?void 0:g&&y[0]===Jr?[]:y,d];c?c(e,3,w):e(...w),y=M}finally{Oi=b}}}else f.run()};return a&&a(E),f=new sp(u),f.scheduler=o?()=>o(E,!1):E,d=v=>U0(v,!1,f),h=f.onStop=()=>{const v=ko.get(f);if(v){if(c)c(v,4);else for(const M of v)M();ko.delete(f)}},e?i?E(!0):y=f.run():o?o(E.bind(null,!0),!0):f.run(),p.pause=f.pause.bind(f),p.resume=f.resume.bind(f),p.stop=p,p}function ti(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Wt(t))ti(t.value,e,n);else if(Oe(t))for(let i=0;i<t.length;i++)ti(t[i],e,n);else if(jg(t)||xr(t))t.forEach(i=>{ti(i,e,n)});else if(Jg(t)){for(const i in t)ti(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ti(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(t,e,n,i){try{return i?t(...i):t()}catch(s){ra(s,e,n)}}function On(t,e,n,i){if(Fe(t)){const s=Hr(t,e,n,i);return s&&tp(s)&&s.catch(r=>{ra(r,e,n)}),s}if(Oe(t)){const s=[];for(let r=0;r<t.length;r++)s.push(On(t[r],e,n,i));return s}}function ra(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,c,l)===!1)return}a=a.parent}if(r){Ti(),Hr(r,null,10,[t,c,l]),wi();return}}N0(t,n,s,i,o)}function N0(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const $t=[];let Ln=-1;const Ps=[];let Mi=null,bs=0;const Ep=Promise.resolve();let Wo=null;function F0(t){const e=Wo||Ep;return t?e.then(this?t.bind(this):t):e}function O0(t){let e=Ln+1,n=$t.length;for(;e<n;){const i=e+n>>>1,s=$t[i],r=Dr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Nl(t){if(!(t.flags&1)){const e=Dr(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=Dr(n)?$t.push(t):$t.splice(O0(e),0,t),t.flags|=1,Sp()}}function Sp(){Wo||(Wo=Ep.then(bp))}function B0(t){Oe(t)?Ps.push(...t):Mi&&t.id===-1?Mi.splice(bs+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1),Sp()}function _f(t,e,n=Ln+1){for(;n<$t.length;n++){const i=$t[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;$t.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yp(t){if(Ps.length){const e=[...new Set(Ps)].sort((n,i)=>Dr(n)-Dr(i));if(Ps.length=0,Mi){Mi.push(...e);return}for(Mi=e,bs=0;bs<Mi.length;bs++){const n=Mi[bs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mi=null,bs=0}}const Dr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function bp(t){try{for(Ln=0;Ln<$t.length;Ln++){const e=$t[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<$t.length;Ln++){const e=$t[Ln];e&&(e.flags&=-2)}Ln=-1,$t.length=0,yp(),Wo=null,($t.length||Ps.length)&&bp()}}let an=null,Tp=null;function Xo(t){const e=an;return an=t,Tp=t&&t.type.__scopeId||null,e}function z0(t,e=an,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Rf(-1);const r=Xo(e);let o;try{o=t(...s)}finally{Xo(r),i._d&&Rf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qr(t,e){if(an===null)return t;const n=la(an),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=nt]=e[s];r&&(Fe(r)&&(r={mounted:r,updated:r}),r.deep&&ti(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Pi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Ti(),On(c,n,8,[t.el,a,t,e]),wi())}}const V0=Symbol("_vte"),H0=t=>t.__isTeleport;function Fl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Fl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qo(t,e,n,i,s=!1){if(Oe(t)){t.forEach((_,g)=>qo(_,e&&(Oe(e)?e[g]:e),n,i,s));return}if(br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qo(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?la(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,f=a.refs===nt?a.refs={}:a.refs,u=a.setupState,h=Je(u),d=u===nt?()=>!1:_=>Ze(h,_);if(l!=null&&l!==c&&(Tt(l)?(f[l]=null,d(l)&&(u[l]=null)):Wt(l)&&(l.value=null)),Fe(c))Hr(c,a,12,[o,f]);else{const _=Tt(c),g=Wt(c);if(_||g){const m=()=>{if(t.f){const p=_?d(c)?u[c]:f[c]:c.value;s?Oe(p)&&yl(p,r):Oe(p)?p.includes(r)||p.push(r):_?(f[c]=[r],d(c)&&(u[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else _?(f[c]=o,d(c)&&(u[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(m.id=-1,sn(m,n)):m()}}}sa().requestIdleCallback;sa().cancelIdleCallback;const br=t=>!!t.type.__asyncLoader,Ap=t=>t.type.__isKeepAlive;function G0(t,e){Rp(t,"a",e)}function $0(t,e){Rp(t,"da",e)}function Rp(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(oa(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ap(s.parent.vnode)&&k0(i,e,n,s),s=s.parent}}function k0(t,e,n,i){const s=oa(e,t,i,!0);Cp(()=>{yl(i[e],s)},n)}function oa(t,e,n=Ut,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ti();const a=Gr(n),c=On(e,n,t,o);return a(),wi(),c});return i?s.unshift(r):s.push(r),r}}const ci=t=>(e,n=Ut)=>{(!Nr||t==="sp")&&oa(t,(...i)=>e(...i),n)},W0=ci("bm"),X0=ci("m"),q0=ci("bu"),Y0=ci("u"),j0=ci("bum"),Cp=ci("um"),Z0=ci("sp"),K0=ci("rtg"),J0=ci("rtc");function Q0(t,e=Ut){oa("ec",t,e)}const e_="components";function vf(t,e){return n_(e_,t,!0,e)||t}const t_=Symbol.for("v-ndc");function n_(t,e,n=!0,i=!1){const s=an||Ut;if(s){const r=s.type;{const a=W_(r,!1);if(a&&(a===e||a===mn(e)||a===ia(mn(e))))return r}const o=xf(s[t]||r[t],e)||xf(s.appContext[t],e);return!o&&i?r:o}}function xf(t,e){return t&&(t[e]||t[mn(e)]||t[ia(mn(e))])}const Jc=t=>t?Zp(t)?la(t):Jc(t.parent):null,Tr=Xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jc(t.parent),$root:t=>Jc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lp(t),$forceUpdate:t=>t.f||(t.f=()=>{Nl(t.update)}),$nextTick:t=>t.n||(t.n=F0.bind(t.proxy)),$watch:t=>b_.bind(t)}),Da=(t,e)=>t!==nt&&!t.__isScriptSetup&&Ze(t,e),i_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Da(i,e))return o[e]=1,i[e];if(s!==nt&&Ze(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Ze(l,e))return o[e]=3,r[e];if(n!==nt&&Ze(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const f=Tr[e];let u,h;if(f)return e==="$attrs"&&Dt(t.attrs,"get",""),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==nt&&Ze(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Ze(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Da(s,e)?(s[e]=n,!0):i!==nt&&Ze(i,e)?(i[e]=n,!0):Ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==nt&&Ze(t,o)||Da(e,o)||(a=r[0])&&Ze(a,o)||Ze(i,o)||Ze(Tr,o)||Ze(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mf(t){return Oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function s_(t){const e=Lp(t),n=t.proxy,i=t.ctx;Qc=!1,e.beforeCreate&&Ef(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:E,unmounted:v,render:M,renderTracked:b,renderTriggered:w,errorCaptured:D,serverPrefetch:x,expose:T,inheritAttrs:I,components:B,directives:U,filters:F}=e;if(l&&r_(l,i,null),o)for(const $ in o){const k=o[$];Fe(k)&&(i[$]=k.bind(n))}if(s){const $=s.call(n,n);gt($)&&(t.data=Dl($))}if(Qc=!0,r)for(const $ in r){const k=r[$],le=Fe(k)?k.bind(n,n):Fe(k.get)?k.get.bind(n,n):Nn,ie=!Fe(k)&&Fe(k.set)?k.set.bind(n):Nn,we=q_({get:le,set:ie});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>we.value,set:ce=>we.value=ce})}if(a)for(const $ in a)Pp(a[$],i,n,$);if(c){const $=Fe(c)?c.call(n):c;Reflect.ownKeys($).forEach(k=>{u_(k,$[k])})}f&&Ef(f,t,"c");function H($,k){Oe(k)?k.forEach(le=>$(le.bind(n))):k&&$(k.bind(n))}if(H(W0,u),H(X0,h),H(q0,d),H(Y0,_),H(G0,g),H($0,m),H(Q0,D),H(J0,b),H(K0,w),H(j0,y),H(Cp,v),H(Z0,x),Oe(T))if(T.length){const $=t.exposed||(t.exposed={});T.forEach(k=>{Object.defineProperty($,k,{get:()=>n[k],set:le=>n[k]=le})})}else t.exposed||(t.exposed={});M&&t.render===Nn&&(t.render=M),I!=null&&(t.inheritAttrs=I),B&&(t.components=B),U&&(t.directives=U),x&&wp(t)}function r_(t,e,n=Nn){Oe(t)&&(t=el(t));for(const i in t){const s=t[i];let r;gt(s)?"default"in s?r=Bo(s.from||i,s.default,!0):r=Bo(s.from||i):r=Bo(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ef(t,e,n){On(Oe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pp(t,e,n,i){let s=i.includes(".")?Wp(n,i):()=>n[i];if(Tt(t)){const r=e[t];Fe(r)&&Ia(s,r)}else if(Fe(t))Ia(s,t.bind(n));else if(gt(t))if(Oe(t))t.forEach(r=>Pp(r,e,n,i));else{const r=Fe(t.handler)?t.handler.bind(n):e[t.handler];Fe(r)&&Ia(s,r,t)}}function Lp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Yo(c,l,o,!0)),Yo(c,e,o)),gt(e)&&r.set(e,c),c}function Yo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Yo(t,r,n,!0),s&&s.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=o_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const o_={data:Sf,props:yf,emits:yf,methods:dr,computed:dr,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:dr,directives:dr,watch:c_,provide:Sf,inject:a_};function Sf(t,e){return e?t?function(){return Xt(Fe(t)?t.call(this,this):t,Fe(e)?e.call(this,this):e)}:e:t}function a_(t,e){return dr(el(t),el(e))}function el(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function zt(t,e){return t?[...new Set([].concat(t,e))]:e}function dr(t,e){return t?Xt(Object.create(null),t,e):e}function yf(t,e){return t?Oe(t)&&Oe(e)?[...new Set([...t,...e])]:Xt(Object.create(null),Mf(t),Mf(e??{})):e}function c_(t,e){if(!t)return e;if(!e)return t;const n=Xt(Object.create(null),t);for(const i in e)n[i]=zt(t[i],e[i]);return n}function Dp(){return{app:null,config:{isNativeTag:qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l_=0;function f_(t,e){return function(i,s=null){Fe(i)||(i=Xt({},i)),s!=null&&!gt(s)&&(s=null);const r=Dp(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:l_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Y_,get config(){return r.config},set config(f){},use(f,...u){return o.has(f)||(f&&Fe(f.install)?(o.add(f),f.install(l,...u)):Fe(f)&&(o.add(f),f(l,...u))),l},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),l},component(f,u){return u?(r.components[f]=u,l):r.components[f]},directive(f,u){return u?(r.directives[f]=u,l):r.directives[f]},mount(f,u,h){if(!c){const d=l._ceVNode||si(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(d,f,h),c=!0,l._container=f,f.__vue_app__=l,la(d.component)}},onUnmount(f){a.push(f)},unmount(){c&&(On(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,u){return r.provides[f]=u,l},runWithContext(f){const u=Ls;Ls=l;try{return f()}finally{Ls=u}}};return l}}let Ls=null;function u_(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function Bo(t,e,n=!1){const i=Ut||an;if(i||Ls){const s=Ls?Ls._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Fe(e)?e.call(i&&i.proxy):e}}const Up={},Ip=()=>Object.create(Up),Np=t=>Object.getPrototypeOf(t)===Up;function h_(t,e,n,i=!1){const s={},r=Ip();t.propsDefaults=Object.create(null),Fp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:A0(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function d_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Je(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(aa(t.emitsOptions,h))continue;const d=e[h];if(c)if(Ze(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const _=mn(h);s[_]=tl(c,a,_,d,t,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{Fp(t,e,s,r)&&(l=!0);let f;for(const u in a)(!e||!Ze(e,u)&&((f=Qi(u))===u||!Ze(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=tl(c,a,u,void 0,t,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!Ze(e,u))&&(delete r[u],l=!0)}l&&ei(t.attrs,"set","")}function Fp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mr(c))continue;const l=e[c];let f;s&&Ze(s,f=mn(c))?!r||!r.includes(f)?n[f]=l:(a||(a={}))[f]=l:aa(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=Je(n),l=a||nt;for(let f=0;f<r.length;f++){const u=r[f];n[u]=tl(s,c,u,l[u],t,!Ze(l,u))}}return o}function tl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Fe(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const f=Gr(s);i=l[n]=c.call(null,e),f()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Qi(n))&&(i=!0))}return i}const p_=new WeakMap;function Op(t,e,n=!1){const i=n?p_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Fe(t)){const f=u=>{c=!0;const[h,d]=Op(u,e,!0);Xt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return gt(t)&&i.set(t,Cs),Cs;if(Oe(r))for(let f=0;f<r.length;f++){const u=mn(r[f]);bf(u)&&(o[u]=nt)}else if(r)for(const f in r){const u=mn(f);if(bf(u)){const h=r[f],d=o[u]=Oe(h)||Fe(h)?{type:h}:Xt({},h),_=d.type;let g=!1,m=!0;if(Oe(_))for(let p=0;p<_.length;++p){const y=_[p],E=Fe(y)&&y.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(m=!1)}else g=Fe(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||Ze(d,"default"))&&a.push(u)}}const l=[o,a];return gt(t)&&i.set(t,l),l}function bf(t){return t[0]!=="$"&&!Mr(t)}const Bp=t=>t[0]==="_"||t==="$stable",Ol=t=>Oe(t)?t.map(Dn):[Dn(t)],m_=(t,e,n)=>{if(e._n)return e;const i=z0((...s)=>Ol(e(...s)),n);return i._c=!1,i},zp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Bp(s))continue;const r=t[s];if(Fe(r))e[s]=m_(s,r,i);else if(r!=null){const o=Ol(r);e[s]=()=>o}}},Vp=(t,e)=>{const n=Ol(e);t.slots.default=()=>n},Hp=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},g_=(t,e,n)=>{const i=t.slots=Ip();if(t.vnode.shapeFlag&32){const s=e._;s?(Hp(i,e,n),n&&np(i,"_",s,!0)):zp(e,i)}else e&&Vp(t,e)},__=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Hp(s,e,n):(r=!e.$stable,zp(e,s)),o=e}else e&&(Vp(t,e),o={default:1});if(r)for(const a in s)!Bp(a)&&o[a]==null&&delete s[a]},sn=L_;function v_(t){return x_(t)}function x_(t,e){const n=sa();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=Nn,insertStaticContent:_}=t,g=(P,L,V,ne=null,Q=null,te=null,pe=void 0,se=null,ae=!!L.dynamicChildren)=>{if(P===L)return;P&&!er(P,L)&&(ne=R(P),ce(P,Q,te,!0),P=null),L.patchFlag===-2&&(ae=!1,L.dynamicChildren=null);const{type:oe,ref:A,shapeFlag:S}=L;switch(oe){case ca:m(P,L,V,ne);break;case Ur:p(P,L,V,ne);break;case Na:P==null&&y(L,V,ne,pe);break;case Qn:B(P,L,V,ne,Q,te,pe,se,ae);break;default:S&1?M(P,L,V,ne,Q,te,pe,se,ae):S&6?U(P,L,V,ne,Q,te,pe,se,ae):(S&64||S&128)&&oe.process(P,L,V,ne,Q,te,pe,se,ae,ue)}A!=null&&Q&&qo(A,P&&P.ref,te,L||P,!L)},m=(P,L,V,ne)=>{if(P==null)i(L.el=a(L.children),V,ne);else{const Q=L.el=P.el;L.children!==P.children&&l(Q,L.children)}},p=(P,L,V,ne)=>{P==null?i(L.el=c(L.children||""),V,ne):L.el=P.el},y=(P,L,V,ne)=>{[P.el,P.anchor]=_(P.children,L,V,ne,P.el,P.anchor)},E=({el:P,anchor:L},V,ne)=>{let Q;for(;P&&P!==L;)Q=h(P),i(P,V,ne),P=Q;i(L,V,ne)},v=({el:P,anchor:L})=>{let V;for(;P&&P!==L;)V=h(P),s(P),P=V;s(L)},M=(P,L,V,ne,Q,te,pe,se,ae)=>{L.type==="svg"?pe="svg":L.type==="math"&&(pe="mathml"),P==null?b(L,V,ne,Q,te,pe,se,ae):x(P,L,Q,te,pe,se,ae)},b=(P,L,V,ne,Q,te,pe,se)=>{let ae,oe;const{props:A,shapeFlag:S,transition:O,dirs:q}=P;if(ae=P.el=o(P.type,te,A&&A.is,A),S&8?f(ae,P.children):S&16&&D(P.children,ae,null,ne,Q,Ua(P,te),pe,se),q&&Pi(P,null,ne,"created"),w(ae,P,P.scopeId,pe,ne),A){for(const fe in A)fe!=="value"&&!Mr(fe)&&r(ae,fe,null,A[fe],te,ne);"value"in A&&r(ae,"value",null,A.value,te),(oe=A.onVnodeBeforeMount)&&An(oe,ne,P)}q&&Pi(P,null,ne,"beforeMount");const Z=M_(Q,O);Z&&O.beforeEnter(ae),i(ae,L,V),((oe=A&&A.onVnodeMounted)||Z||q)&&sn(()=>{oe&&An(oe,ne,P),Z&&O.enter(ae),q&&Pi(P,null,ne,"mounted")},Q)},w=(P,L,V,ne,Q)=>{if(V&&d(P,V),ne)for(let te=0;te<ne.length;te++)d(P,ne[te]);if(Q){let te=Q.subTree;if(L===te||qp(te.type)&&(te.ssContent===L||te.ssFallback===L)){const pe=Q.vnode;w(P,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},D=(P,L,V,ne,Q,te,pe,se,ae=0)=>{for(let oe=ae;oe<P.length;oe++){const A=P[oe]=se?Ei(P[oe]):Dn(P[oe]);g(null,A,L,V,ne,Q,te,pe,se)}},x=(P,L,V,ne,Q,te,pe)=>{const se=L.el=P.el;let{patchFlag:ae,dynamicChildren:oe,dirs:A}=L;ae|=P.patchFlag&16;const S=P.props||nt,O=L.props||nt;let q;if(V&&Li(V,!1),(q=O.onVnodeBeforeUpdate)&&An(q,V,L,P),A&&Pi(L,P,V,"beforeUpdate"),V&&Li(V,!0),(S.innerHTML&&O.innerHTML==null||S.textContent&&O.textContent==null)&&f(se,""),oe?T(P.dynamicChildren,oe,se,V,ne,Ua(L,Q),te):pe||k(P,L,se,null,V,ne,Ua(L,Q),te,!1),ae>0){if(ae&16)I(se,S,O,V,Q);else if(ae&2&&S.class!==O.class&&r(se,"class",null,O.class,Q),ae&4&&r(se,"style",S.style,O.style,Q),ae&8){const Z=L.dynamicProps;for(let fe=0;fe<Z.length;fe++){const xe=Z[fe],Me=S[xe],Y=O[xe];(Y!==Me||xe==="value")&&r(se,xe,Me,Y,Q,V)}}ae&1&&P.children!==L.children&&f(se,L.children)}else!pe&&oe==null&&I(se,S,O,V,Q);((q=O.onVnodeUpdated)||A)&&sn(()=>{q&&An(q,V,L,P),A&&Pi(L,P,V,"updated")},ne)},T=(P,L,V,ne,Q,te,pe)=>{for(let se=0;se<L.length;se++){const ae=P[se],oe=L[se],A=ae.el&&(ae.type===Qn||!er(ae,oe)||ae.shapeFlag&70)?u(ae.el):V;g(ae,oe,A,null,ne,Q,te,pe,!0)}},I=(P,L,V,ne,Q)=>{if(L!==V){if(L!==nt)for(const te in L)!Mr(te)&&!(te in V)&&r(P,te,L[te],null,Q,ne);for(const te in V){if(Mr(te))continue;const pe=V[te],se=L[te];pe!==se&&te!=="value"&&r(P,te,se,pe,Q,ne)}"value"in V&&r(P,"value",L.value,V.value,Q)}},B=(P,L,V,ne,Q,te,pe,se,ae)=>{const oe=L.el=P?P.el:a(""),A=L.anchor=P?P.anchor:a("");let{patchFlag:S,dynamicChildren:O,slotScopeIds:q}=L;q&&(se=se?se.concat(q):q),P==null?(i(oe,V,ne),i(A,V,ne),D(L.children||[],V,A,Q,te,pe,se,ae)):S>0&&S&64&&O&&P.dynamicChildren?(T(P.dynamicChildren,O,V,Q,te,pe,se),(L.key!=null||Q&&L===Q.subTree)&&Gp(P,L,!0)):k(P,L,V,A,Q,te,pe,se,ae)},U=(P,L,V,ne,Q,te,pe,se,ae)=>{L.slotScopeIds=se,P==null?L.shapeFlag&512?Q.ctx.activate(L,V,ne,pe,ae):F(L,V,ne,Q,te,pe,ae):z(P,L,ae)},F=(P,L,V,ne,Q,te,pe)=>{const se=P.component=V_(P,ne,Q);if(Ap(P)&&(se.ctx.renderer=ue),H_(se,!1,pe),se.asyncDep){if(Q&&Q.registerDep(se,H,pe),!P.el){const ae=se.subTree=si(Ur);p(null,ae,L,V)}}else H(se,P,L,V,Q,te,pe)},z=(P,L,V)=>{const ne=L.component=P.component;if(C_(P,L,V))if(ne.asyncDep&&!ne.asyncResolved){$(ne,L,V);return}else ne.next=L,ne.update();else L.el=P.el,ne.vnode=L},H=(P,L,V,ne,Q,te,pe)=>{const se=()=>{if(P.isMounted){let{next:S,bu:O,u:q,parent:Z,vnode:fe}=P;{const Ae=$p(P);if(Ae){S&&(S.el=fe.el,$(P,S,pe)),Ae.asyncDep.then(()=>{P.isUnmounted||se()});return}}let xe=S,Me;Li(P,!1),S?(S.el=fe.el,$(P,S,pe)):S=fe,O&&Oo(O),(Me=S.props&&S.props.onVnodeBeforeUpdate)&&An(Me,Z,S,fe),Li(P,!0);const Y=wf(P),be=P.subTree;P.subTree=Y,g(be,Y,u(be.el),R(be),P,Q,te),S.el=Y.el,xe===null&&P_(P,Y.el),q&&sn(q,Q),(Me=S.props&&S.props.onVnodeUpdated)&&sn(()=>An(Me,Z,S,fe),Q)}else{let S;const{el:O,props:q}=L,{bm:Z,m:fe,parent:xe,root:Me,type:Y}=P,be=br(L);Li(P,!1),Z&&Oo(Z),!be&&(S=q&&q.onVnodeBeforeMount)&&An(S,xe,L),Li(P,!0);{Me.ce&&Me.ce._injectChildStyle(Y);const Ae=P.subTree=wf(P);g(null,Ae,V,ne,P,Q,te),L.el=Ae.el}if(fe&&sn(fe,Q),!be&&(S=q&&q.onVnodeMounted)){const Ae=L;sn(()=>An(S,xe,Ae),Q)}(L.shapeFlag&256||xe&&br(xe.vnode)&&xe.vnode.shapeFlag&256)&&P.a&&sn(P.a,Q),P.isMounted=!0,L=V=ne=null}};P.scope.on();const ae=P.effect=new sp(se);P.scope.off();const oe=P.update=ae.run.bind(ae),A=P.job=ae.runIfDirty.bind(ae);A.i=P,A.id=P.uid,ae.scheduler=()=>Nl(A),Li(P,!0),oe()},$=(P,L,V)=>{L.component=P;const ne=P.vnode.props;P.vnode=L,P.next=null,d_(P,L.props,ne,V),__(P,L.children,V),Ti(),_f(P),wi()},k=(P,L,V,ne,Q,te,pe,se,ae=!1)=>{const oe=P&&P.children,A=P?P.shapeFlag:0,S=L.children,{patchFlag:O,shapeFlag:q}=L;if(O>0){if(O&128){ie(oe,S,V,ne,Q,te,pe,se,ae);return}else if(O&256){le(oe,S,V,ne,Q,te,pe,se,ae);return}}q&8?(A&16&&ve(oe,Q,te),S!==oe&&f(V,S)):A&16?q&16?ie(oe,S,V,ne,Q,te,pe,se,ae):ve(oe,Q,te,!0):(A&8&&f(V,""),q&16&&D(S,V,ne,Q,te,pe,se,ae))},le=(P,L,V,ne,Q,te,pe,se,ae)=>{P=P||Cs,L=L||Cs;const oe=P.length,A=L.length,S=Math.min(oe,A);let O;for(O=0;O<S;O++){const q=L[O]=ae?Ei(L[O]):Dn(L[O]);g(P[O],q,V,null,Q,te,pe,se,ae)}oe>A?ve(P,Q,te,!0,!1,S):D(L,V,ne,Q,te,pe,se,ae,S)},ie=(P,L,V,ne,Q,te,pe,se,ae)=>{let oe=0;const A=L.length;let S=P.length-1,O=A-1;for(;oe<=S&&oe<=O;){const q=P[oe],Z=L[oe]=ae?Ei(L[oe]):Dn(L[oe]);if(er(q,Z))g(q,Z,V,null,Q,te,pe,se,ae);else break;oe++}for(;oe<=S&&oe<=O;){const q=P[S],Z=L[O]=ae?Ei(L[O]):Dn(L[O]);if(er(q,Z))g(q,Z,V,null,Q,te,pe,se,ae);else break;S--,O--}if(oe>S){if(oe<=O){const q=O+1,Z=q<A?L[q].el:ne;for(;oe<=O;)g(null,L[oe]=ae?Ei(L[oe]):Dn(L[oe]),V,Z,Q,te,pe,se,ae),oe++}}else if(oe>O)for(;oe<=S;)ce(P[oe],Q,te,!0),oe++;else{const q=oe,Z=oe,fe=new Map;for(oe=Z;oe<=O;oe++){const Ee=L[oe]=ae?Ei(L[oe]):Dn(L[oe]);Ee.key!=null&&fe.set(Ee.key,oe)}let xe,Me=0;const Y=O-Z+1;let be=!1,Ae=0;const Le=new Array(Y);for(oe=0;oe<Y;oe++)Le[oe]=0;for(oe=q;oe<=S;oe++){const Ee=P[oe];if(Me>=Y){ce(Ee,Q,te,!0);continue}let Ie;if(Ee.key!=null)Ie=fe.get(Ee.key);else for(xe=Z;xe<=O;xe++)if(Le[xe-Z]===0&&er(Ee,L[xe])){Ie=xe;break}Ie===void 0?ce(Ee,Q,te,!0):(Le[Ie-Z]=oe+1,Ie>=Ae?Ae=Ie:be=!0,g(Ee,L[Ie],V,null,Q,te,pe,se,ae),Me++)}const Te=be?E_(Le):Cs;for(xe=Te.length-1,oe=Y-1;oe>=0;oe--){const Ee=Z+oe,Ie=L[Ee],je=Ee+1<A?L[Ee+1].el:ne;Le[oe]===0?g(null,Ie,V,je,Q,te,pe,se,ae):be&&(xe<0||oe!==Te[xe]?we(Ie,V,je,2):xe--)}}},we=(P,L,V,ne,Q=null)=>{const{el:te,type:pe,transition:se,children:ae,shapeFlag:oe}=P;if(oe&6){we(P.component.subTree,L,V,ne);return}if(oe&128){P.suspense.move(L,V,ne);return}if(oe&64){pe.move(P,L,V,ue);return}if(pe===Qn){i(te,L,V);for(let S=0;S<ae.length;S++)we(ae[S],L,V,ne);i(P.anchor,L,V);return}if(pe===Na){E(P,L,V);return}if(ne!==2&&oe&1&&se)if(ne===0)se.beforeEnter(te),i(te,L,V),sn(()=>se.enter(te),Q);else{const{leave:S,delayLeave:O,afterLeave:q}=se,Z=()=>i(te,L,V),fe=()=>{S(te,()=>{Z(),q&&q()})};O?O(te,Z,fe):fe()}else i(te,L,V)},ce=(P,L,V,ne=!1,Q=!1)=>{const{type:te,props:pe,ref:se,children:ae,dynamicChildren:oe,shapeFlag:A,patchFlag:S,dirs:O,cacheIndex:q}=P;if(S===-2&&(Q=!1),se!=null&&qo(se,null,V,P,!0),q!=null&&(L.renderCache[q]=void 0),A&256){L.ctx.deactivate(P);return}const Z=A&1&&O,fe=!br(P);let xe;if(fe&&(xe=pe&&pe.onVnodeBeforeUnmount)&&An(xe,L,P),A&6)me(P.component,V,ne);else{if(A&128){P.suspense.unmount(V,ne);return}Z&&Pi(P,null,L,"beforeUnmount"),A&64?P.type.remove(P,L,V,ue,ne):oe&&!oe.hasOnce&&(te!==Qn||S>0&&S&64)?ve(oe,L,V,!1,!0):(te===Qn&&S&384||!Q&&A&16)&&ve(ae,L,V),ne&&j(P)}(fe&&(xe=pe&&pe.onVnodeUnmounted)||Z)&&sn(()=>{xe&&An(xe,L,P),Z&&Pi(P,null,L,"unmounted")},V)},j=P=>{const{type:L,el:V,anchor:ne,transition:Q}=P;if(L===Qn){re(V,ne);return}if(L===Na){v(P);return}const te=()=>{s(V),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(P.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:se}=Q,ae=()=>pe(V,te);se?se(P.el,te,ae):ae()}else te()},re=(P,L)=>{let V;for(;P!==L;)V=h(P),s(P),P=V;s(L)},me=(P,L,V)=>{const{bum:ne,scope:Q,job:te,subTree:pe,um:se,m:ae,a:oe}=P;Tf(ae),Tf(oe),ne&&Oo(ne),Q.stop(),te&&(te.flags|=8,ce(pe,P,L,V)),se&&sn(se,L),sn(()=>{P.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},ve=(P,L,V,ne=!1,Q=!1,te=0)=>{for(let pe=te;pe<P.length;pe++)ce(P[pe],L,V,ne,Q)},R=P=>{if(P.shapeFlag&6)return R(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const L=h(P.anchor||P.el),V=L&&L[V0];return V?h(V):L};let de=!1;const Se=(P,L,V)=>{P==null?L._vnode&&ce(L._vnode,null,null,!0):g(L._vnode||null,P,L,null,null,null,V),L._vnode=P,de||(de=!0,_f(),yp(),de=!1)},ue={p:g,um:ce,m:we,r:j,mt:F,mc:D,pc:k,pbc:T,n:R,o:t};return{render:Se,hydrate:void 0,createApp:f_(Se)}}function Ua({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Li({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function M_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gp(t,e,n=!1){const i=t.children,s=e.children;if(Oe(i)&&Oe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ei(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Gp(o,a)),a.type===ca&&(a.el=o.el)}}function E_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function $p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$p(e)}function Tf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const S_=Symbol.for("v-scx"),y_=()=>Bo(S_);function Ia(t,e,n){return kp(t,e,n)}function kp(t,e,n=nt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Xt({},n),c=e&&i||!e&&r!=="post";let l;if(Nr){if(r==="sync"){const d=y_();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=Nn,d.resume=Nn,d.pause=Nn,d}}const f=Ut;a.call=(d,_,g)=>On(d,f,_,g);let u=!1;r==="post"?a.scheduler=d=>{sn(d,f&&f.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,_)=>{_?d():Nl(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,f&&(d.id=f.uid,d.i=f))};const h=I0(t,e,a);return Nr&&(l?l.push(h):c&&h()),h}function b_(t,e,n){const i=this.proxy,s=Tt(t)?t.includes(".")?Wp(i,t):()=>i[t]:t.bind(i,i);let r;Fe(e)?r=e:(r=e.handler,n=e);const o=Gr(this),a=kp(s,r.bind(i),n);return o(),a}function Wp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const T_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Qi(e)}Modifiers`];function w_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||nt;let s=n;const r=e.startsWith("update:"),o=r&&T_(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>Tt(f)?f.trim():f)),o.number&&(s=n.map(Xc)));let a,c=i[a=Ra(e)]||i[a=Ra(mn(e))];!c&&r&&(c=i[a=Ra(Qi(e))]),c&&On(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,On(l,t,6,s)}}function Xp(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Fe(t)){const c=l=>{const f=Xp(l,e,!0);f&&(a=!0,Xt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(gt(t)&&i.set(t,null),null):(Oe(r)?r.forEach(c=>o[c]=null):Xt(o,r),gt(t)&&i.set(t,o),o)}function aa(t,e){return!t||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(t,e[0].toLowerCase()+e.slice(1))||Ze(t,Qi(e))||Ze(t,e))}function wf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:u,data:h,setupState:d,ctx:_,inheritAttrs:g}=t,m=Xo(t);let p,y;try{if(n.shapeFlag&4){const v=s||i,M=v;p=Dn(l.call(M,v,f,u,d,h,_)),y=a}else{const v=e;p=Dn(v.length>1?v(u,{attrs:a,slots:o,emit:c}):v(u,null)),y=e.props?a:A_(a)}}catch(v){wr.length=0,ra(v,t,1),p=si(Ur)}let E=p;if(y&&g!==!1){const v=Object.keys(y),{shapeFlag:M}=E;v.length&&M&7&&(r&&v.some(Sl)&&(y=R_(y,r)),E=Fs(E,y,!1,!0))}return n.dirs&&(E=Fs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Fl(E,n.transition),p=E,Xo(m),p}const A_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ea(n))&&((e||(e={}))[n]=t[n]);return e},R_=(t,e)=>{const n={};for(const i in t)(!Sl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function C_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Af(i,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==i[h]&&!aa(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Af(i,o,l):!0:!!o;return!1}function Af(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!aa(n,r))return!0}return!1}function P_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const qp=t=>t.__isSuspense;function L_(t,e){e&&e.pendingBranch?Oe(t)?e.effects.push(...t):e.effects.push(t):B0(t)}const Qn=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Ur=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),wr=[];let cn=null;function Bl(t=!1){wr.push(cn=t?null:[])}function D_(){wr.pop(),cn=wr[wr.length-1]||null}let Ir=1;function Rf(t,e=!1){Ir+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function U_(t){return t.dynamicChildren=Ir>0?cn||Cs:null,D_(),Ir>0&&cn&&cn.push(t),t}function zl(t,e,n,i,s,r){return U_(ft(t,e,n,i,s,r,!0))}function Yp(t){return t?t.__v_isVNode===!0:!1}function er(t,e){return t.type===e.type&&t.key===e.key}const jp=({key:t})=>t??null,zo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Tt(t)||Wt(t)||Fe(t)?{i:an,r:t,k:e,f:!!n}:t:null);function ft(t,e=null,n=null,i=0,s=null,r=t===Qn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jp(e),ref:e&&zo(e),scopeId:Tp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:an};return a?(Vl(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Tt(n)?8:16),Ir>0&&!o&&cn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&cn.push(c),c}const si=I_;function I_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===t_)&&(t=Ur),Yp(t)){const a=Fs(t,e,!0);return n&&Vl(a,n),Ir>0&&!r&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag=-2,a}if(X_(t)&&(t=t.__vccOpts),e){e=N_(e);let{class:a,style:c}=e;a&&!Tt(a)&&(e.class=wl(a)),gt(c)&&(Il(c)&&!Oe(c)&&(c=Xt({},c)),e.style=Tl(c))}const o=Tt(t)?1:qp(t)?128:H0(t)?64:gt(t)?4:Fe(t)?2:0;return ft(t,e,n,i,s,o,r,!0)}function N_(t){return t?Il(t)||Np(t)?Xt({},t):t:null}function Fs(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?O_(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&jp(l),ref:e&&e.ref?n&&r?Oe(r)?r.concat(zo(e)):[r,zo(e)]:zo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fs(t.ssContent),ssFallback:t.ssFallback&&Fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&Fl(f,c.clone(f)),f}function F_(t=" ",e=0){return si(ca,null,t,e)}function Dn(t){return t==null||typeof t=="boolean"?si(Ur):Oe(t)?si(Qn,null,t.slice()):Yp(t)?Ei(t):si(ca,null,String(t))}function Ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fs(t)}function Vl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Oe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Vl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Np(e)?e._ctx=an:s===3&&an&&(an.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:an},n=32):(e=String(e),i&64?(n=16,e=[F_(e)]):n=8);t.children=e,t.shapeFlag|=n}function O_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wl([e.class,i.class]));else if(s==="style")e.style=Tl([e.style,i.style]);else if(ea(s)){const r=e[s],o=i[s];o&&r!==o&&!(Oe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function An(t,e,n,i=null){On(t,e,7,[n,i])}const B_=Dp();let z_=0;function V_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||B_,r={uid:z_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new a0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Op(i,s),emitsOptions:Xp(i,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=w_.bind(null,r),t.ce&&t.ce(r),r}let Ut=null,jo,nl;{const t=sa(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};jo=e("__VUE_INSTANCE_SETTERS__",n=>Ut=n),nl=e("__VUE_SSR_SETTERS__",n=>Nr=n)}const Gr=t=>{const e=Ut;return jo(t),t.scope.on(),()=>{t.scope.off(),jo(e)}},Cf=()=>{Ut&&Ut.scope.off(),jo(null)};function Zp(t){return t.vnode.shapeFlag&4}let Nr=!1;function H_(t,e=!1,n=!1){e&&nl(e);const{props:i,children:s}=t.vnode,r=Zp(t);h_(t,i,r,e),g_(t,s,n);const o=r?G_(t,e):void 0;return e&&nl(!1),o}function G_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,i_);const{setup:i}=n;if(i){Ti();const s=t.setupContext=i.length>1?k_(t):null,r=Gr(t),o=Hr(i,t,0,[t.props,s]),a=tp(o);if(wi(),r(),(a||t.sp)&&!br(t)&&wp(t),a){if(o.then(Cf,Cf),e)return o.then(c=>{Pf(t,c)}).catch(c=>{ra(c,t,0)});t.asyncDep=o}else Pf(t,o)}else Kp(t)}function Pf(t,e,n){Fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=Mp(e)),Kp(t)}function Kp(t,e,n){const i=t.type;t.render||(t.render=i.render||Nn);{const s=Gr(t);Ti();try{s_(t)}finally{wi(),s()}}}const $_={get(t,e){return Dt(t,"get",""),t[e]}};function k_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$_),slots:t.slots,emit:t.emit,expose:e}}function la(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Mp(R0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tr)return Tr[n](t)},has(e,n){return n in e||n in Tr}})):t.proxy}function W_(t,e=!0){return Fe(t)?t.displayName||t.name:t.name||e&&t.__name}function X_(t){return Fe(t)&&"__vccOpts"in t}const q_=(t,e)=>D0(t,e,Nr),Y_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let il;const Lf=typeof window<"u"&&window.trustedTypes;if(Lf)try{il=Lf.createPolicy("vue",{createHTML:t=>t})}catch{}const Jp=il?t=>il.createHTML(t):t=>t,j_="http://www.w3.org/2000/svg",Z_="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Df=Jn&&Jn.createElement("template"),K_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Jn.createElementNS(j_,t):e==="mathml"?Jn.createElementNS(Z_,t):n?Jn.createElement(t,{is:n}):Jn.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Df.innerHTML=Jp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Df.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},J_=Symbol("_vtc");function Q_(t,e,n){const i=t[J_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Uf=Symbol("_vod"),ev=Symbol("_vsh"),tv=Symbol(""),nv=/(^|;)\s*display\s*:/;function iv(t,e,n){const i=t.style,s=Tt(n);let r=!1;if(n&&!s){if(e)if(Tt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vo(i,a,"")}else for(const o in e)n[o]==null&&Vo(i,o,"");for(const o in n)o==="display"&&(r=!0),Vo(i,o,n[o])}else if(s){if(e!==n){const o=i[tv];o&&(n+=";"+o),i.cssText=n,r=nv.test(n)}}else e&&t.removeAttribute("style");Uf in t&&(t[Uf]=r?i.display:"",t[ev]&&(i.display="none"))}const If=/\s*!important$/;function Vo(t,e,n){if(Oe(n))n.forEach(i=>Vo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=sv(t,e);If.test(n)?t.setProperty(Qi(i),n.replace(If,""),"important"):t[i]=n}}const Nf=["Webkit","Moz","ms"],Fa={};function sv(t,e){const n=Fa[e];if(n)return n;let i=mn(e);if(i!=="filter"&&i in t)return Fa[e]=i;i=ia(i);for(let s=0;s<Nf.length;s++){const r=Nf[s]+i;if(r in t)return Fa[e]=r}return e}const Ff="http://www.w3.org/1999/xlink";function Of(t,e,n,i,s,r=o0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ff,e.slice(6,e.length)):t.setAttributeNS(Ff,e,n):n==null||r&&!ip(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ks(n)?String(n):n)}function Bf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ip(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ts(t,e,n,i){t.addEventListener(e,n,i)}function rv(t,e,n,i){t.removeEventListener(e,n,i)}const zf=Symbol("_vei");function ov(t,e,n,i,s=null){const r=t[zf]||(t[zf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=av(e);if(i){const l=r[e]=fv(i,s);Ts(t,a,l,c)}else o&&(rv(t,a,o,c),r[e]=void 0)}}const Vf=/(?:Once|Passive|Capture)$/;function av(t){let e;if(Vf.test(t)){e={};let i;for(;i=t.match(Vf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qi(t.slice(2)),e]}let Oa=0;const cv=Promise.resolve(),lv=()=>Oa||(cv.then(()=>Oa=0),Oa=Date.now());function fv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;On(uv(i,n.value),e,5,[i])};return n.value=t,n.attached=lv(),n}function uv(t,e){if(Oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Hf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hv=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Q_(t,i,o):e==="style"?iv(t,n,i):ea(e)?Sl(e)||ov(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dv(t,e,i,o))?(Bf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Of(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?Bf(t,mn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Of(t,e,i,o))};function dv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hf(e)&&Fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hf(e)&&Tt(n)?!1:e in t}const Gf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Oe(e)?n=>Oo(e,n):e};function pv(t){t.target.composing=!0}function $f(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ba=Symbol("_assign"),eo={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ba]=Gf(s);const r=i||s.props&&s.props.type==="number";Ts(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Xc(a)),t[Ba](a)}),n&&Ts(t,"change",()=>{t.value=t.value.trim()}),e||(Ts(t,"compositionstart",pv),Ts(t,"compositionend",$f),Ts(t,"change",$f))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ba]=Gf(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Xc(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},mv=["ctrl","shift","alt","meta"],gv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mv.some(n=>t[`${n}Key`]&&!e.includes(n))},_v=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=gv[e[o]];if(a&&a(s,e))return}return t(s,...r)})},vv=Xt({patchProp:hv},K_);let kf;function xv(){return kf||(kf=v_(vv))}const Mv=(...t)=>{const e=xv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Sv(i);if(!s)return;const r=e._component;!Fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ev(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ev(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Sv(t){return Tt(t)?document.querySelector(t):t}const Hl=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},yv={name:"InputForm",props:{initialWidth:{type:Number,default:155},initialLength:{type:Number,default:105},initialSafety:{type:Number,default:0}},data(){return{localWidth:this.initialWidth,localLength:this.initialLength,localSafety:this.initialSafety}},methods:{emitValues(){this.$emit("update-dimensions",{width:this.localWidth,length:this.localLength,safety:this.localSafety})}}},bv={class:"flex-1 mb-4 sm:mb-0"},Tv={class:"flex-1 mb-4 sm:mb-0"},wv={class:"flex-1 mb-4 sm:mb-0"},Av={class:"flex items-center space-x-2 mt-1"};function Rv(t,e,n,i,s,r){return Bl(),zl("form",{onSubmit:e[4]||(e[4]=_v((...o)=>r.emitValues&&r.emitValues(...o),["prevent"])),class:"flex flex-col sm:flex-row sm:space-x-4 items-end",style:{width:"100%","max-width":"600px",margin:"0 auto","box-sizing":"border-box"}},[ft("div",bv,[e[5]||(e[5]=ft("label",{class:"block text-sm font-medium text-gray-700"},"Width (mm):",-1)),Qr(ft("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.localWidth=o),type:"number",placeholder:"Enter width",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,512),[[eo,s.localWidth,void 0,{number:!0}]])]),ft("div",Tv,[e[6]||(e[6]=ft("label",{class:"block text-sm font-medium text-gray-700"},"Length (mm):",-1)),Qr(ft("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.localLength=o),type:"number",placeholder:"Enter length",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,512),[[eo,s.localLength,void 0,{number:!0}]])]),ft("div",wv,[e[7]||(e[7]=ft("label",{class:"block text-sm font-medium text-gray-700"}," Safety Offset (mm): ",-1)),ft("div",Av,[Qr(ft("input",{type:"range","onUpdate:modelValue":e[2]||(e[2]=o=>s.localSafety=o),min:"-2",max:"2",step:"0.1",class:"w-full"},null,512),[[eo,s.localSafety,void 0,{number:!0}]]),Qr(ft("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=o=>s.localSafety=o),min:"-2",max:"2",step:"0.1",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[eo,s.localSafety,void 0,{number:!0}]])])]),e[8]||(e[8]=ft("div",null,[ft("button",{type:"submit",class:"mt-4 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"}," Update ")],-1))],32)}const Cv=Hl(yv,[["render",Rv]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="152",za={ROTATE:0,DOLLY:1,PAN:2},Pv=0,Wf=1,Lv=2,Qp=1,Dv=2,Kn=3,bi=0,Zt=1,ni=2,yi=0,Ds=1,Xf=2,qf=3,Yf=4,Uv=5,ws=100,Iv=101,Nv=102,jf=103,Zf=104,Fv=200,Ov=201,Bv=202,zv=203,em=204,tm=205,Vv=206,Hv=207,Gv=208,$v=209,kv=210,Wv=0,Xv=1,qv=2,sl=3,Yv=4,jv=5,Zv=6,Kv=7,nm=0,Jv=1,Qv=2,ri=0,ex=1,tx=2,nx=3,ix=4,sx=5,im=300,Os=301,Bs=302,rl=303,ol=304,fa=306,al=1e3,yn=1001,cl=1002,Gt=1003,Kf=1004,Va=1005,dn=1006,rx=1007,Fr=1008,Zi=1009,ox=1010,ax=1011,sm=1012,cx=1013,$i=1014,ki=1015,Or=1016,lx=1017,fx=1018,Us=1020,ux=1021,bn=1023,hx=1024,dx=1025,qi=1026,zs=1027,px=1028,mx=1029,gx=1030,_x=1031,vx=1033,Ha=33776,Ga=33777,$a=33778,ka=33779,Jf=35840,Qf=35841,eu=35842,tu=35843,xx=36196,nu=37492,iu=37496,su=37808,ru=37809,ou=37810,au=37811,cu=37812,lu=37813,fu=37814,uu=37815,hu=37816,du=37817,pu=37818,mu=37819,gu=37820,_u=37821,Wa=36492,Mx=36283,vu=36284,xu=36285,Mu=36286,rm=3e3,Yi=3001,Ex=3200,Sx=3201,om=0,yx=1,ji="",Be="srgb",Bn="srgb-linear",am="display-p3",Xa=7680,bx=519,Eu=35044,Su="300 es",ll=1035;class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const Ar=Math.PI/180,Br=180/Math.PI;function Ws(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[t&255]+Pt[t>>8&255]+Pt[t>>16&255]+Pt[t>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[n&63|128]+Pt[n>>8&255]+"-"+Pt[n>>16&255]+Pt[n>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function $l(t,e){return(t%e+e)%e}function Tx(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function wx(t,e,n){return t!==e?(n-t)/(e-t):0}function Rr(t,e,n){return(1-n)*t+n*e}function Ax(t,e,n,i){return Rr(t,e,1-Math.exp(-n*i))}function Rx(t,e=1){return e-Math.abs($l(t,e*2)-e)}function Cx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Px(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Lx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Dx(t,e){return t+Math.random()*(e-t)}function Ux(t){return t*(.5-Math.random())}function Ix(t){t!==void 0&&(yu=t);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nx(t){return t*Ar}function Fx(t){return t*Br}function fl(t){return(t&t-1)===0&&t!==0}function Ox(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Bx(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((e+i)/2),f=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*f,c*u,c*h,a*l);break;case"YZY":t.set(c*h,a*f,c*u,a*l);break;case"ZXZ":t.set(c*u,c*h,a*f,a*l);break;case"XZX":t.set(a*f,c*_,c*d,a*l);break;case"YXY":t.set(c*d,a*f,c*_,a*l);break;case"ZYZ":t.set(c*_,c*d,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pr(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const bu={DEG2RAD:Ar,RAD2DEG:Br,generateUUID:Ws,clamp:kt,euclideanModulo:$l,mapLinear:Tx,inverseLerp:wx,lerp:Rr,damp:Ax,pingpong:Rx,smoothstep:Cx,smootherstep:Px,randInt:Lx,randFloat:Dx,randFloatSpread:Ux,seededRandom:Ix,degToRad:Nx,radToDeg:Fx,isPowerOfTwo:fl,ceilPowerOfTwo:Ox,floorPowerOfTwo:cm,setQuaternionFromProperEuler:Bx,normalize:Yt,denormalize:pr};class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=n,f[4]=r,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],u=i[7],h=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],y=s[1],E=s[4],v=s[7],M=s[2],b=s[5],w=s[8];return r[0]=o*g+a*y+c*M,r[3]=o*m+a*E+c*b,r[6]=o*p+a*v+c*w,r[1]=l*g+f*y+u*M,r[4]=l*m+f*E+u*b,r[7]=l*p+f*v+u*w,r[2]=h*g+d*y+_*M,r[5]=h*m+d*E+_*b,r[8]=h*p+d*v+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return n*o*f-n*a*l-i*r*f+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*o-a*l,h=a*c-f*r,d=l*r-o*c,_=n*u+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(s*l-f*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(f*n-s*c)*g,e[5]=(s*r-a*n)*g,e[6]=d*g,e[7]=(i*c-l*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qa.makeScale(e,n)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,n){return this.premultiply(qa.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new qe;function lm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Tu={};function Cr(t){t in Tu||(Tu[t]=!0,console.warn(t))}function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ya(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const zx=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Vx=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Hx(t){return t.convertSRGBToLinear().applyMatrix3(Vx)}function Gx(t){return t.applyMatrix3(zx).convertLinearToSRGB()}const $x={[Bn]:t=>t,[Be]:t=>t.convertSRGBToLinear(),[am]:Hx},kx={[Bn]:t=>t,[Be]:t=>t.convertLinearToSRGB(),[am]:Gx},_n={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Bn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$x[e],s=kx[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ss;class fm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=Zo("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Is(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class um{constructor(e=null){this.isSource=!0,this.uuid=Ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ja(s[o].image)):r.push(ja(s[o]))}else r=ja(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function ja(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fm.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wx=0;class ln extends es{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=yn,s=yn,r=dn,o=Fr,a=bn,c=Zi,l=ln.DEFAULT_ANISOTROPY,f=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ws(),this.name="",this.source=new um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Yi?Be:ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case al:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case al:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?Yi:rm}set encoding(e){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yi?Be:ji}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=im;ln.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,v=(d+1)/2,M=(p+1)/2,b=(f+h)/4,w=(u+g)/4,D=(_+m)/4;return E>v&&E>M?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=w/i):v>M?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=D/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=D/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(h-f)/y,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ki extends es{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yi?Be:ji),this.texture=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:dn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new um(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hm extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xx extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],f=i[s+2],u=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=f,e[n+3]=u;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(u!==g||c!==h||l!==d||f!==_){let m=1-a;const p=c*h+l*d+f*_+u*g,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const M=Math.sqrt(E),b=Math.atan2(M,p*y);m=Math.sin(m*b)/M,a=Math.sin(a*b)/M}const v=a*y;if(c=c*m+h*v,l=l*m+d*v,f=f*m+_*v,u=u*m+g*v,m===1-a){const M=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=M,l*=M,f*=M,u*=M}}e[n]=c,e[n+1]=l,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],f=i[s+3],u=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+f*u+c*d-l*h,e[n+1]=c*_+f*h+l*u-a*d,e[n+2]=l*_+f*d+a*h-c*u,e[n+3]=f*_-a*u-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(s/2),u=a(r/2),h=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*f*u+l*d*_,this._y=l*d*u-h*f*_,this._z=l*f*_+h*d*u,this._w=l*f*u-h*d*_;break;case"YXZ":this._x=h*f*u+l*d*_,this._y=l*d*u-h*f*_,this._z=l*f*_-h*d*u,this._w=l*f*u+h*d*_;break;case"ZXY":this._x=h*f*u-l*d*_,this._y=l*d*u+h*f*_,this._z=l*f*_+h*d*u,this._w=l*f*u-h*d*_;break;case"ZYX":this._x=h*f*u-l*d*_,this._y=l*d*u+h*f*_,this._z=l*f*_-h*d*u,this._w=l*f*u+h*d*_;break;case"YZX":this._x=h*f*u+l*d*_,this._y=l*d*u+h*f*_,this._z=l*f*_-h*d*u,this._w=l*f*u-h*d*_;break;case"XZY":this._x=h*f*u-l*d*_,this._y=l*d*u-h*f*_,this._z=l*f*_+h*d*u,this._w=l*f*u+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],f=n[6],u=n[10],h=i+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(f-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,f=n._w;return this._x=i*f+o*a+s*l-r*c,this._y=s*f+o*c+r*a-i*l,this._z=r*f+o*l+i*c-s*a,this._w=o*f-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-n)*f)/l,h=Math.sin(n*f)/l;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*s-a*i,f=c*i+a*n-r*s,u=c*s+r*i-o*n,h=-r*n-o*i-a*s;return this.x=l*c+h*-r+f*-a-u*-o,this.y=f*c+h*-o+u*-r-l*-a,this.z=u*c+h*-a+l*-o-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new W,wu=new Xs;class $r{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox),rs.applyMatrix4(e.matrixWorld),this.union(rs);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Hn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else s.boundingBox===null&&s.computeBoundingBox(),rs.copy(s.boundingBox),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),to.subVectors(this.max,tr),os.subVectors(e.a,tr),as.subVectors(e.b,tr),cs.subVectors(e.c,tr),ui.subVectors(as,os),hi.subVectors(cs,as),Di.subVectors(os,cs);let n=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!Ka(n,os,as,cs,to)||(n=[1,0,0,0,1,0,0,0,1],!Ka(n,os,as,cs,to))?!1:(no.crossVectors(ui,hi),n=[no.x,no.y,no.z],Ka(n,os,as,cs,to))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new W,new W,new W,new W,new W,new W,new W,new W],Hn=new W,rs=new $r,os=new W,as=new W,cs=new W,ui=new W,hi=new W,Di=new W,tr=new W,to=new W,no=new W,Ui=new W;function Ka(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ui.fromArray(t,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=e.dot(Ui),l=n.dot(Ui),f=i.dot(Ui);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const qx=new $r,nr=new W,Ja=new W;class kl{constructor(e=new W,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const n=nr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Ja)),this.expandByPoint(nr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new W,Qa=new W,io=new W,di=new W,ec=new W,so=new W,tc=new W;class Yx{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,n),Gn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Qa.copy(e).add(n).multiplyScalar(.5),io.copy(n).sub(e).normalize(),di.copy(this.origin).sub(Qa);const r=e.distanceTo(n)*.5,o=-this.direction.dot(io),a=di.dot(this.direction),c=-di.dot(io),l=di.lengthSq(),f=Math.abs(1-o*o);let u,h,d,_;if(f>0)if(u=o*c-a,h=o*a-c,_=r*f,u>=0)if(h>=-_)if(h<=_){const g=1/f;u*=g,h*=g,d=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h<=-_?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l):h<=_?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qa).addScaledVector(io,h),d}intersectSphere(e,n){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,n,i,s,r){ec.subVectors(n,e),so.subVectors(i,e),tc.crossVectors(ec,so);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const c=a*this.direction.dot(so.crossVectors(di,so));if(c<0)return null;const l=a*this.direction.dot(ec.cross(di));if(l<0||c+l>o)return null;const f=-a*di.dot(tc);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,c,l,f,u,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*f,d=o*u,_=a*f,g=a*u;n[0]=c*f,n[4]=-c*u,n[8]=l,n[1]=d+_*l,n[5]=h-g*l,n[9]=-a*c,n[2]=g-h*l,n[6]=_+d*l,n[10]=o*c}else if(e.order==="YXZ"){const h=c*f,d=c*u,_=l*f,g=l*u;n[0]=h+g*a,n[4]=_*a-d,n[8]=o*l,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=d*a-_,n[6]=g+h*a,n[10]=o*c}else if(e.order==="ZXY"){const h=c*f,d=c*u,_=l*f,g=l*u;n[0]=h-g*a,n[4]=-o*u,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*f,n[9]=g-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const h=o*f,d=o*u,_=a*f,g=a*u;n[0]=c*f,n[4]=_*l-d,n[8]=h*l+g,n[1]=c*u,n[5]=g*l+h,n[9]=d*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*f,n[4]=g-h*u,n[8]=_*u+d,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-l*f,n[6]=d*u+_,n[10]=h-g*u}else if(e.order==="XZY"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*f,n[4]=-u,n[8]=l*f,n[1]=h*u+g,n[5]=o*f,n[9]=d*u-_,n[2]=_*u-d,n[6]=a*f,n[10]=g*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jx,e,Zx)}lookAt(e,n,i){const s=this.elements;return Jt.subVectors(e,n),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),pi.crossVectors(i,Jt),pi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),pi.crossVectors(i,Jt)),pi.normalize(),ro.crossVectors(Jt,pi),s[0]=pi.x,s[4]=ro.x,s[8]=Jt.x,s[1]=pi.y,s[5]=ro.y,s[9]=Jt.y,s[2]=pi.z,s[6]=ro.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],u=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],E=i[7],v=i[11],M=i[15],b=s[0],w=s[4],D=s[8],x=s[12],T=s[1],I=s[5],B=s[9],U=s[13],F=s[2],z=s[6],H=s[10],$=s[14],k=s[3],le=s[7],ie=s[11],we=s[15];return r[0]=o*b+a*T+c*F+l*k,r[4]=o*w+a*I+c*z+l*le,r[8]=o*D+a*B+c*H+l*ie,r[12]=o*x+a*U+c*$+l*we,r[1]=f*b+u*T+h*F+d*k,r[5]=f*w+u*I+h*z+d*le,r[9]=f*D+u*B+h*H+d*ie,r[13]=f*x+u*U+h*$+d*we,r[2]=_*b+g*T+m*F+p*k,r[6]=_*w+g*I+m*z+p*le,r[10]=_*D+g*B+m*H+p*ie,r[14]=_*x+g*U+m*$+p*we,r[3]=y*b+E*T+v*F+M*k,r[7]=y*w+E*I+v*z+M*le,r[11]=y*D+E*B+v*H+M*ie,r[15]=y*x+E*U+v*$+M*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*u-s*l*u-r*a*h+i*l*h+s*a*d-i*c*d)+g*(+n*c*d-n*l*h+r*o*h-s*o*d+s*l*f-r*c*f)+m*(+n*l*u-n*a*d-r*o*u+i*o*d+r*a*f-i*l*f)+p*(-s*a*f-n*c*u+n*a*h+s*o*u-i*o*h+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=u*m*l-g*h*l+g*c*d-a*m*d-u*c*p+a*h*p,E=_*h*l-f*m*l-_*c*d+o*m*d+f*c*p-o*h*p,v=f*g*l-_*u*l+_*a*d-o*g*d-f*a*p+o*u*p,M=_*u*c-f*g*c-_*a*h+o*g*h+f*a*m-o*u*m,b=n*y+i*E+s*v+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=y*w,e[1]=(g*h*r-u*m*r-g*s*d+i*m*d+u*s*p-i*h*p)*w,e[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*p+i*c*p)*w,e[3]=(u*c*r-a*h*r-u*s*l+i*h*l+a*s*d-i*c*d)*w,e[4]=E*w,e[5]=(f*m*r-_*h*r+_*s*d-n*m*d-f*s*p+n*h*p)*w,e[6]=(_*c*r-o*m*r-_*s*l+n*m*l+o*s*p-n*c*p)*w,e[7]=(o*h*r-f*c*r+f*s*l-n*h*l-o*s*d+n*c*d)*w,e[8]=v*w,e[9]=(_*u*r-f*g*r-_*i*d+n*g*d+f*i*p-n*u*p)*w,e[10]=(o*g*r-_*a*r+_*i*l-n*g*l-o*i*p+n*a*p)*w,e[11]=(f*a*r-o*u*r-f*i*l+n*u*l+o*i*d-n*a*d)*w,e[12]=M*w,e[13]=(f*g*s-_*u*s+_*i*h-n*g*h-f*i*m+n*u*m)*w,e[14]=(_*a*s-o*g*s-_*i*c+n*g*c+o*i*m-n*a*m)*w,e[15]=(o*u*s-f*a*s+f*i*c-n*u*c-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,f=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+i,f*c-s*o,0,l*c-s*a,f*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,f=o+o,u=a+a,h=r*l,d=r*f,_=r*u,g=o*f,m=o*u,p=a*u,y=c*l,E=c*f,v=c*u,M=i.x,b=i.y,w=i.z;return s[0]=(1-(g+p))*M,s[1]=(d+v)*M,s[2]=(_-E)*M,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(h+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(_+E)*w,s[9]=(m-y)*w,s[10]=(1-(h+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const l=1/r,f=1/o,u=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=f,vn.elements[5]*=f,vn.elements[6]*=f,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,n.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,c=2*r/(n-e),l=2*r/(i-s),f=(n+e)/(n-e),u=(i+s)/(i-s),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,c=1/(n-e),l=1/(i-s),f=1/(o-r),u=(n+e)*c,h=(i+s)*l,d=(o+r)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ls=new W,vn=new _t,jx=new W(0,0,0),Zx=new W(1,1,1),pi=new W,ro=new W,Jt=new W,Au=new _t,Ru=new Xs;class ua{constructor(e=0,n=0,i=0,s=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class dm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kx=0;const Cu=new W,fs=new Xs,$n=new _t,oo=new W,ir=new W,Jx=new W,Qx=new Xs,Pu=new W(1,0,0),Lu=new W(0,1,0),Du=new W(0,0,1),e1={type:"added"},Uu={type:"removed"};class It extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new W,n=new ua,i=new Xs,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,n){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oo.copy(e):oo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ir,oo,this.up):$n.lookAt(oo,ir,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),fs.setFromRotationMatrix($n),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(e1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Uu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Uu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}It.DEFAULT_UP=new W(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new W,kn=new W,nc=new W,Wn=new W,us=new W,hs=new W,Iu=new W,ic=new W,sc=new W,rc=new W;let ao=!1;class Sn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),xn.subVectors(e,n),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){xn.subVectors(s,n),kn.subVectors(i,n),nc.subVectors(e,n);const o=xn.dot(xn),a=xn.dot(kn),c=xn.dot(nc),l=kn.dot(kn),f=kn.dot(nc),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,d=(l*c-a*f)*h,_=(o*f-a*c)*h;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Wn),Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,n,i,s,r,o,a,c){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),this.getInterpolation(e,n,i,s,r,o,a,c)}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,Wn),c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c}static isFrontFacing(e,n,i,s){return xn.subVectors(i,n),kn.subVectors(e,n),xn.cross(kn).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ao=!0),Sn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;us.subVectors(s,i),hs.subVectors(r,i),ic.subVectors(e,i);const c=us.dot(ic),l=hs.dot(ic);if(c<=0&&l<=0)return n.copy(i);sc.subVectors(e,s);const f=us.dot(sc),u=hs.dot(sc);if(f>=0&&u<=f)return n.copy(s);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(us,o);rc.subVectors(e,r);const d=us.dot(rc),_=hs.dot(rc);if(_>=0&&d<=_)return n.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(hs,a);const m=f*_-d*u;if(m<=0&&u-f>=0&&d-_>=0)return Iu.subVectors(r,s),a=(u-f)/(u-f+(d-_)),n.copy(s).addScaledVector(Iu,a);const p=1/(m+g+h);return o=g*p,a=h*p,n.copy(i).addScaledVector(us,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let t1=0;class kr extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Ds,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=em,this.blendDst=tm,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},co={h:0,s:0,l:0};function oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_n.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=_n.workingColorSpace){return this.r=e,this.g=n,this.b=i,_n.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=_n.workingColorSpace){if(e=$l(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=oc(o,r,e+1/3),this.g=oc(o,r,e),this.b=oc(o,r,e-1/3)}return _n.toWorkingColorSpace(this,s),this}setStyle(e,n=Be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Be){const i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return _n.fromWorkingColorSpace(Lt.copy(this),e),Math.round(kt(Lt.r*255,0,255))*65536+Math.round(kt(Lt.g*255,0,255))*256+Math.round(kt(Lt.b*255,0,255))}getHexString(e=Be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_n.workingColorSpace){_n.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,n=_n.workingColorSpace){return _n.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Be){_n.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,s=Lt.b;return e!==Be?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Mn),Mn.h+=e,Mn.s+=n,Mn.l+=i,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mn),e.getHSL(co);const i=Rr(Mn.h,co.h,n),s=Rr(Mn.s,co.s,n),r=Rr(Mn.l,co.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new it;it.NAMES=pm;class mm extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new W,lo=new He;class fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Eu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)lo.fromBufferAttribute(this,n),lo.applyMatrix3(e),this.setXY(n,lo.x,lo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix3(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix4(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyNormalMatrix(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.transformDirection(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class gm extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _m extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let n1=0;const hn=new _t,ac=new It,ds=new W,Qt=new $r,sr=new $r,St=new W;class ai extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lm(e)?_m:gm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Qt.min,sr.min),Qt.expandByPoint(St),St.addVectors(Qt.max,sr.max),Qt.expandByPoint(St)):(Qt.expandByPoint(sr.min),Qt.expandByPoint(sr.max))}Qt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(St));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)St.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(e,l),St.add(ds)),s=Math.max(s,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let T=0;T<a;T++)l[T]=new W,f[T]=new W;const u=new W,h=new W,d=new W,_=new He,g=new He,m=new He,p=new W,y=new W;function E(T,I,B){u.fromArray(s,T*3),h.fromArray(s,I*3),d.fromArray(s,B*3),_.fromArray(o,T*2),g.fromArray(o,I*2),m.fromArray(o,B*2),h.sub(u),d.sub(u),g.sub(_),m.sub(_);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(U),y.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(U),l[T].add(p),l[I].add(p),l[B].add(p),f[T].add(y),f[I].add(y),f[B].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let T=0,I=v.length;T<I;++T){const B=v[T],U=B.start,F=B.count;for(let z=U,H=U+F;z<H;z+=3)E(i[z+0],i[z+1],i[z+2])}const M=new W,b=new W,w=new W,D=new W;function x(T){w.fromArray(r,T*3),D.copy(w);const I=l[T];M.copy(I),M.sub(w.multiplyScalar(w.dot(I))).normalize(),b.crossVectors(D,I);const U=b.dot(f[T])<0?-1:1;c[T*4]=M.x,c[T*4+1]=M.y,c[T*4+2]=M.z,c[T*4+3]=U}for(let T=0,I=v.length;T<I;++T){const B=v[T],U=B.start,F=B.count;for(let z=U,H=U+F;z<H;z+=3)x(i[z+0]),x(i[z+1]),x(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new W,r=new W,o=new W,a=new W,c=new W,l=new W,f=new W,u=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(f),c.add(f),l.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*f;for(let p=0;p<f;p++)h[_++]=l[d++]}return new fn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let f=0,u=l.length;f<u;f++){const h=l[f],d=e(h,i);c.push(d)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const d=l[u];f.push(d.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(n))}const r=e.morphAttributes;for(const l in r){const f=[],u=r[l];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(n));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new _t,Rn=new Yx,fo=new kl,Fu=new W,ps=new W,ms=new W,gs=new W,cc=new W,uo=new W,ho=new He,po=new He,mo=new He,Ou=new W,Bu=new W,zu=new W,go=new W,_o=new W;class ii extends It{constructor(e=new ai,n=new mm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=a[c],u=r[c];f!==0&&(cc.fromBufferAttribute(u,e),o?uo.addScaledVector(cc,f):uo.addScaledVector(cc.sub(n),f))}n.add(uo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(fo.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(fo,Fu)===null||Rn.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&Rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,_=u.length;d<_;d++){const g=u[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),y=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let E=p,v=y;E<v;E+=3){const M=o.getX(E),b=o.getX(E+1),w=o.getX(E+2);i=vo(this,m,e,Rn,c,l,f,M,b,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=o.getX(g),y=o.getX(g+1),E=o.getX(g+2);i=vo(this,r,e,Rn,c,l,f,p,y,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,_=u.length;d<_;d++){const g=u[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),y=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let E=p,v=y;E<v;E+=3){const M=E,b=E+1,w=E+2;i=vo(this,m,e,Rn,c,l,f,M,b,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=g,y=g+1,E=g+2;i=vo(this,r,e,Rn,c,l,f,p,y,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function i1(t,e,n,i,s,r,o,a){let c;if(e.side===Zt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===bi,a),c===null)return null;_o.copy(a),_o.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(_o);return l<n.near||l>n.far?null:{distance:l,point:_o.clone(),object:t}}function vo(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,ps),t.getVertexPosition(c,ms),t.getVertexPosition(l,gs);const f=i1(t,e,n,i,ps,ms,gs,go);if(f){s&&(ho.fromBufferAttribute(s,a),po.fromBufferAttribute(s,c),mo.fromBufferAttribute(s,l),f.uv=Sn.getInterpolation(go,ps,ms,gs,ho,po,mo,new He)),r&&(ho.fromBufferAttribute(r,a),po.fromBufferAttribute(r,c),mo.fromBufferAttribute(r,l),f.uv1=Sn.getInterpolation(go,ps,ms,gs,ho,po,mo,new He),f.uv2=f.uv1),o&&(Ou.fromBufferAttribute(o,a),Bu.fromBufferAttribute(o,c),zu.fromBufferAttribute(o,l),f.normal=Sn.getInterpolation(go,ps,ms,gs,Ou,Bu,zu,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new W,materialIndex:0};Sn.getNormal(ps,ms,gs,u.normal),f.face=u}return f}class Wr extends ai{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],f=[],u=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new oi(l,3)),this.setAttribute("normal",new oi(f,3)),this.setAttribute("uv",new oi(u,2));function _(g,m,p,y,E,v,M,b,w,D,x){const T=v/w,I=M/D,B=v/2,U=M/2,F=b/2,z=w+1,H=D+1;let $=0,k=0;const le=new W;for(let ie=0;ie<H;ie++){const we=ie*I-U;for(let ce=0;ce<z;ce++){const j=ce*T-B;le[g]=j*y,le[m]=we*E,le[p]=F,l.push(le.x,le.y,le.z),le[g]=0,le[m]=0,le[p]=b>0?1:-1,f.push(le.x,le.y,le.z),u.push(ce/w),u.push(1-ie/D),$+=1}}for(let ie=0;ie<D;ie++)for(let we=0;we<w;we++){const ce=h+we+z*ie,j=h+we+z*(ie+1),re=h+(we+1)+z*(ie+1),me=h+(we+1)+z*ie;c.push(ce,j,me),c.push(j,re,me),k+=6}a.addGroup(d,k,x),d+=k,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const s in i)e[s]=i[s]}return e}function s1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vm(t){return t.getRenderTarget()===null?t.outputColorSpace:Bn}const r1={clone:Vs,merge:Vt};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xm extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends xm{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,vs=1;class c1 extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new pn(_s,vs,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new pn(_s,vs,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new pn(_s,vs,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new pn(_s,vs,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new pn(_s,vs,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new pn(_s,vs,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,c,l]=this.children,f=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,l),e.setRenderTarget(f),e.toneMapping=u,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Mm extends ln{constructor(e,n,i,s,r,o,a,c,l,f){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,s,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l1 extends Ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?Be:ji),this.texture=new Mm(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wr(5,5,5),r=new Ji({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:yi});r.uniforms.tEquirect.value=n;const o=new ii(s,r),a=n.minFilter;return n.minFilter===Fr&&(n.minFilter=dn),new c1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const lc=new W,f1=new W,u1=new qe;class Bi{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=lc.subVectors(i,n).cross(f1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||u1.getNormalMatrix(e),s=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new kl,xo=new W;class Wl{constructor(e=new Bi,n=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],f=i[6],u=i[7],h=i[8],d=i[9],_=i[10],g=i[11],m=i[12],p=i[13],y=i[14],E=i[15];return n[0].setComponents(a-s,u-c,g-h,E-m).normalize(),n[1].setComponents(a+s,u+c,g+h,E+m).normalize(),n[2].setComponents(a+r,u+l,g+d,E+p).normalize(),n[3].setComponents(a-r,u-l,g-d,E-p).normalize(),n[4].setComponents(a-o,u-f,g-_,E-y).normalize(),n[5].setComponents(a+o,u+f,g+_,E+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Em(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function h1(t,e){const n=e.isWebGL2,i=new WeakMap;function s(l,f){const u=l.array,h=l.usage,d=t.createBuffer();t.bindBuffer(f,d),t.bufferData(f,u,h),l.onUploadCallback();let _;if(u instanceof Float32Array)_=t.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=t.SHORT;else if(u instanceof Uint32Array)_=t.UNSIGNED_INT;else if(u instanceof Int32Array)_=t.INT;else if(u instanceof Int8Array)_=t.BYTE;else if(u instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,f,u){const h=f.array,d=f.updateRange;t.bindBuffer(u,l),d.count===-1?t.bufferSubData(u,0,h):(n?t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f&&(t.deleteBuffer(f.buffer),i.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,s(l,f)):u.version<l.version&&(r(u.buffer,l,f),u.version=l.version)}return{get:o,remove:a,update:c}}class Xl extends ai{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,f=c+1,u=e/a,h=n/c,d=[],_=[],g=[],m=[];for(let p=0;p<f;p++){const y=p*h-o;for(let E=0;E<l;E++){const v=E*u-r;_.push(v,-y,0),g.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const E=y+l*p,v=y+l*(p+1),M=y+1+l*(p+1),b=y+1+l*p;d.push(E,v,b),d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1="vec3 transformed = vec3( position );",M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S1=`#ifdef USE_IRIDESCENCE
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
#endif`,y1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D1=`#define PI 3.141592653589793
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
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I1=`vec3 transformedNormal = objectNormal;
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
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
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
}`,K1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#endif`,nM=`#if defined( USE_ENVMAP )
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
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
#endif`,cM=`struct PhysicalMaterial {
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
}`,lM=`
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
#endif`,fM=`#if defined( RE_IndirectDiffuse )
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yM=`#ifdef USE_MORPHNORMALS
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
#endif`,bM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
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
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,UM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qM=`float getShadowMask() {
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
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
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
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#ifdef USE_UV
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
#endif`,rE=`#ifdef USE_UV
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
#endif`,oE=`#ifdef USE_UV
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
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pE=`#include <common>
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
}`,mE=`#if DEPTH_PACKING == 3200
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
}`,gE=`#define DISTANCE
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
}`,_E=`#define DISTANCE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ME=`uniform float scale;
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
}`,EE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,yE=`uniform vec3 diffuse;
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
}`,bE=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,AE=`#define MATCAP
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
}`,RE=`#define NORMAL
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
}`,CE=`#define NORMAL
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
}`,PE=`#define PHONG
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
}`,LE=`#define PHONG
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
}`,DE=`#define STANDARD
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
}`,UE=`#define STANDARD
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
}`,IE=`#define TOON
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
}`,NE=`#define TOON
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
}`,FE=`uniform float size;
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
}`,OE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,zE=`uniform vec3 color;
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
}`,VE=`uniform float rotation;
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
}`,HE=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:d1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:_1,aomap_pars_fragment:v1,begin_vertex:x1,beginnormal_vertex:M1,bsdfs:E1,iridescence_fragment:S1,bumpmap_pars_fragment:y1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:A1,color_fragment:R1,color_pars_fragment:C1,color_pars_vertex:P1,color_vertex:L1,common:D1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:I1,displacementmap_pars_vertex:N1,displacementmap_vertex:F1,emissivemap_fragment:O1,emissivemap_pars_fragment:B1,encodings_fragment:z1,encodings_pars_fragment:V1,envmap_fragment:H1,envmap_common_pars_fragment:G1,envmap_pars_fragment:$1,envmap_pars_vertex:k1,envmap_physical_pars_fragment:nM,envmap_vertex:W1,fog_vertex:X1,fog_pars_vertex:q1,fog_fragment:Y1,fog_pars_fragment:j1,gradientmap_pars_fragment:Z1,lightmap_fragment:K1,lightmap_pars_fragment:J1,lights_lambert_fragment:Q1,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:sM,lights_phong_fragment:rM,lights_phong_pars_fragment:oM,lights_physical_fragment:aM,lights_physical_pars_fragment:cM,lights_fragment_begin:lM,lights_fragment_maps:fM,lights_fragment_end:uM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:_M,map_particle_fragment:vM,map_particle_pars_fragment:xM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphcolor_vertex:SM,morphnormal_vertex:yM,morphtarget_pars_vertex:bM,morphtarget_vertex:TM,normal_fragment_begin:wM,normal_fragment_maps:AM,normal_pars_fragment:RM,normal_pars_vertex:CM,normal_vertex:PM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:UM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:NM,output_fragment:FM,packing:OM,premultiplied_alpha_fragment:BM,project_vertex:zM,dithering_fragment:VM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:WM,shadowmap_vertex:XM,shadowmask_pars_fragment:qM,skinbase_vertex:YM,skinning_pars_vertex:jM,skinning_vertex:ZM,skinnormal_vertex:KM,specularmap_fragment:JM,specularmap_pars_fragment:QM,tonemapping_fragment:eE,tonemapping_pars_fragment:tE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:sE,uv_pars_vertex:rE,uv_vertex:oE,worldpos_vertex:aE,background_vert:cE,background_frag:lE,backgroundCube_vert:fE,backgroundCube_frag:uE,cube_vert:hE,cube_frag:dE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:gE,distanceRGBA_frag:_E,equirect_vert:vE,equirect_frag:xE,linedashed_vert:ME,linedashed_frag:EE,meshbasic_vert:SE,meshbasic_frag:yE,meshlambert_vert:bE,meshlambert_frag:TE,meshmatcap_vert:wE,meshmatcap_frag:AE,meshnormal_vert:RE,meshnormal_frag:CE,meshphong_vert:PE,meshphong_frag:LE,meshphysical_vert:DE,meshphysical_frag:UE,meshtoon_vert:IE,meshtoon_frag:NE,points_vert:FE,points_frag:OE,shadow_vert:BE,shadow_frag:zE,sprite_vert:VE,sprite_frag:HE},_e={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}}},Un={basic:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Vt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Vt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Vt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Vt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Vt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Vt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Vt([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Vt([_e.lights,_e.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Un.physical={uniforms:Vt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Mo={r:0,b:0,g:0};function GE(t,e,n,i,s,r,o){const a=new it(0);let c=r===!0?0:1,l,f,u=null,h=0,d=null;function _(m,p){let y=!1,E=p.isScene===!0?p.background:null;switch(E&&E.isTexture&&(E=(p.backgroundBlurriness>0?n:e).get(E)),E===null?g(a,c):E&&E.isColor&&(g(E,1),y=!0),t.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),y=!0;break}(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===fa)?(f===void 0&&(f=new ii(new Wr(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Vs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=E.colorSpace!==Be,(u!==E||h!==E.version||d!==t.toneMapping)&&(f.material.needsUpdate=!0,u=E,h=E.version,d=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ii(new Xl(2,2),new Ji({name:"BackgroundMaterial",uniforms:Vs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=E.colorSpace!==Be,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(Mo,vm(t)),i.buffers.color.setClear(Mo.r,Mo.g,Mo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function $E(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,f=!1;function u(F,z,H,$,k){let le=!1;if(o){const ie=g($,H,z);l!==ie&&(l=ie,d(l.object)),le=p(F,$,H,k),le&&y(F,$,H,k)}else{const ie=z.wireframe===!0;(l.geometry!==$.id||l.program!==H.id||l.wireframe!==ie)&&(l.geometry=$.id,l.program=H.id,l.wireframe=ie,le=!0)}k!==null&&n.update(k,t.ELEMENT_ARRAY_BUFFER),(le||f)&&(f=!1,D(F,z,H,$),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(k).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?t.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,z,H){const $=H.wireframe===!0;let k=a[F.id];k===void 0&&(k={},a[F.id]=k);let le=k[z.id];le===void 0&&(le={},k[z.id]=le);let ie=le[$];return ie===void 0&&(ie=m(h()),le[$]=ie),ie}function m(F){const z=[],H=[],$=[];for(let k=0;k<s;k++)z[k]=0,H[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:$,object:F,attributes:{},index:null}}function p(F,z,H,$){const k=l.attributes,le=z.attributes;let ie=0;const we=H.getAttributes();for(const ce in we)if(we[ce].location>=0){const re=k[ce];let me=le[ce];if(me===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;ie++}return l.attributesNum!==ie||l.index!==$}function y(F,z,H,$){const k={},le=z.attributes;let ie=0;const we=H.getAttributes();for(const ce in we)if(we[ce].location>=0){let re=le[ce];re===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const me={};me.attribute=re,re&&re.data&&(me.data=re.data),k[ce]=me,ie++}l.attributes=k,l.attributesNum=ie,l.index=$}function E(){const F=l.newAttributes;for(let z=0,H=F.length;z<H;z++)F[z]=0}function v(F){M(F,0)}function M(F,z){const H=l.newAttributes,$=l.enabledAttributes,k=l.attributeDivisors;H[F]=1,$[F]===0&&(t.enableVertexAttribArray(F),$[F]=1),k[F]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),k[F]=z)}function b(){const F=l.newAttributes,z=l.enabledAttributes;for(let H=0,$=z.length;H<$;H++)z[H]!==F[H]&&(t.disableVertexAttribArray(H),z[H]=0)}function w(F,z,H,$,k,le){i.isWebGL2===!0&&(H===t.INT||H===t.UNSIGNED_INT)?t.vertexAttribIPointer(F,z,H,k,le):t.vertexAttribPointer(F,z,H,$,k,le)}function D(F,z,H,$){if(i.isWebGL2===!1&&(F.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const k=$.attributes,le=H.getAttributes(),ie=z.defaultAttributeValues;for(const we in le){const ce=le[we];if(ce.location>=0){let j=k[we];if(j===void 0&&(we==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),we==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const re=j.normalized,me=j.itemSize,ve=n.get(j);if(ve===void 0)continue;const R=ve.buffer,de=ve.type,Se=ve.bytesPerElement;if(j.isInterleavedBufferAttribute){const ue=j.data,Ce=ue.stride,P=j.offset;if(ue.isInstancedInterleavedBuffer){for(let L=0;L<ce.locationSize;L++)M(ce.location+L,ue.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let L=0;L<ce.locationSize;L++)v(ce.location+L);t.bindBuffer(t.ARRAY_BUFFER,R);for(let L=0;L<ce.locationSize;L++)w(ce.location+L,me/ce.locationSize,de,re,Ce*Se,(P+me/ce.locationSize*L)*Se)}else{if(j.isInstancedBufferAttribute){for(let ue=0;ue<ce.locationSize;ue++)M(ce.location+ue,j.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ue=0;ue<ce.locationSize;ue++)v(ce.location+ue);t.bindBuffer(t.ARRAY_BUFFER,R);for(let ue=0;ue<ce.locationSize;ue++)w(ce.location+ue,me/ce.locationSize,de,re,me*Se,me/ce.locationSize*ue*Se)}}else if(ie!==void 0){const re=ie[we];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(ce.location,re);break;case 3:t.vertexAttrib3fv(ce.location,re);break;case 4:t.vertexAttrib4fv(ce.location,re);break;default:t.vertexAttrib1fv(ce.location,re)}}}}b()}function x(){B();for(const F in a){const z=a[F];for(const H in z){const $=z[H];for(const k in $)_($[k].object),delete $[k];delete z[H]}delete a[F]}}function T(F){if(a[F.id]===void 0)return;const z=a[F.id];for(const H in z){const $=z[H];for(const k in $)_($[k].object),delete $[k];delete z[H]}delete a[F.id]}function I(F){for(const z in a){const H=a[z];if(H[F.id]===void 0)continue;const $=H[F.id];for(const k in $)_($[k].object),delete $[k];delete H[F.id]}}function B(){U(),f=!0,l!==c&&(l=c,d(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:B,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:v,disableUnusedAttributes:b}}function kE(t,e,n,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,f){t.drawArrays(r,l,f),n.update(f,r,1)}function c(l,f,u){if(u===0)return;let h,d;if(s)h=t,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,l,f,u),n.update(f,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function WE(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,v=o||e.has("OES_texture_float"),M=E&&v,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:b}}function XE(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Bi,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=t.get(u);if(!s||_===null||_.length===0||r&&!m)r?f(null):l();else{const y=r?0:i,E=y*4;let v=p.clippingState||null;c.value=v,v=f(_,h,E,d);for(let M=0;M!==E;++M)v[M]=n[M];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==g;++E,v+=4)o.copy(u[E]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function qE(t){let e=new WeakMap;function n(o,a){return a===rl?o.mapping=Os:a===ol&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===rl||a===ol)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new l1(c.height/2);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Sm extends xm{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,Vu=[.125,.215,.35,.446,.526,.582],Vi=20,fc=new Sm,Hu=new it;let uc=null;const zi=(1+Math.sqrt(5))/2,xs=1/zi,Gu=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,zi,xs),new W(0,zi,-xs),new W(xs,0,zi),new W(-xs,0,zi),new W(zi,xs,0),new W(-zi,xs,0)];class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){uc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Or,format:bn,colorSpace:Bn,depthBuffer:!1},s=ku(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(r)),this._blurMaterial=jE(r,e,n)}return s}_compileMaterial(e){const n=new ii(this._lodPlanes[0],e);this._renderer.compile(n,fc)}_sceneToCubeUV(e,n,i,s){const a=new pn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Hu),f.toneMapping=ri,f.autoClear=!1;const d=new mm({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new ii(new Wr,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Hu),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;Eo(s,y*E,p>2?E:0,E,E),f.setRenderTarget(s),g&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Os||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Eo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,fc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gu[(s-1)%Gu.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new ii(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vi-1),g=r/_,m=isFinite(r)?1+Math.floor(f*g):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let y=0;for(let w=0;w<Vi;++w){const D=w/g,x=Math.exp(-D*D/2);p.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const v=this._sizeLods[s],M=3*v*(s>E-As?s-E+As:0),b=4*(this._cubeSize-v);Eo(n,M,b,3*v,2*v),c.setRenderTarget(n),c.render(u,fc)}}function YE(t){const e=[],n=[],i=[];let s=t;const r=t-As+1+Vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let c=1/a;o>t-As?c=Vu[o-t+As-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),E=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,D=b>2?0:-1,x=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];y.set(x,g*_*b),E.set(h,m*_*b);const T=[b,b,b,b,b,b];v.set(T,p*_*b)}const M=new ai;M.setAttribute("position",new fn(y,g)),M.setAttribute("uv",new fn(E,m)),M.setAttribute("faceIndex",new fn(v,p)),e.push(M),s>As&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ku(t,e,n){const i=new Ki(t,e,n);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function jE(t,e,n){const i=new Float32Array(Vi),s=new W(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ql(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Wu(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Xu(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function ZE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===rl||c===ol,f=c===Os||c===Bs;if(l||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return n===null&&(n=new $u(t)),u=l?n.fromEquirectangular(a,u):n.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||f&&u&&s(u)){n===null&&(n=new $u(t));const h=l?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function KE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function JE(t,e,n,i){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function c(u){const h=u.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function l(u){const h=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let E=0,v=y.length;E<v;E+=3){const M=y[E+0],b=y[E+1],w=y[E+2];h.push(M,b,b,w,w,M)}}else{const y=_.array;g=_.version;for(let E=0,v=y.length/3-1;E<v;E+=3){const M=E+0,b=E+1,w=E+2;h.push(M,b,b,w,w,M)}}const m=new(lm(h)?_m:gm)(h,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function f(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function QE(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function f(h,d){t.drawElements(r,d,a,h*c),n.update(d,r,1)}function u(h,d,_){if(_===0)return;let g,m;if(s)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,a,h*c,_),n.update(d,r,_)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=u}function eS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function tS(t,e){return t[0]-e[0]}function nS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function iS(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new bt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,f,u){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(f);if(m===void 0||m.count!==g){let z=function(){U.dispose(),r.delete(f),f.removeEventListener("dispose",z)};var d=z;m!==void 0&&m.texture.dispose();const E=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,b=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let x=0;E===!0&&(x=1),v===!0&&(x=2),M===!0&&(x=3);let T=f.attributes.position.count*x,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const B=new Float32Array(T*I*4*g),U=new hm(B,T,I,g);U.type=ki,U.needsUpdate=!0;const F=x*4;for(let H=0;H<g;H++){const $=b[H],k=w[H],le=D[H],ie=T*I*4*H;for(let we=0;we<$.count;we++){const ce=we*F;E===!0&&(o.fromBufferAttribute($,we),B[ie+ce+0]=o.x,B[ie+ce+1]=o.y,B[ie+ce+2]=o.z,B[ie+ce+3]=0),v===!0&&(o.fromBufferAttribute(k,we),B[ie+ce+4]=o.x,B[ie+ce+5]=o.y,B[ie+ce+6]=o.z,B[ie+ce+7]=0),M===!0&&(o.fromBufferAttribute(le,we),B[ie+ce+8]=o.x,B[ie+ce+9]=o.y,B[ie+ce+10]=o.z,B[ie+ce+11]=le.itemSize===4?o.w:1)}}m={count:g,texture:U,size:new He(T,I)},r.set(f,m),f.addEventListener("dispose",z)}let p=0;for(let E=0;E<h.length;E++)p+=h[E];const y=f.morphTargetsRelative?1:1-p;u.getUniforms().setValue(t,"morphTargetBaseInfluence",y),u.getUniforms().setValue(t,"morphTargetInfluences",h),u.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[f.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];i[f.id]=g}for(let v=0;v<_;v++){const M=g[v];M[0]=v,M[1]=h[v]}g.sort(nS);for(let v=0;v<8;v++)v<_&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(tS);const m=f.morphAttributes.position,p=f.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const M=a[v],b=M[0],w=M[1];b!==Number.MAX_SAFE_INTEGER&&w?(m&&f.getAttribute("morphTarget"+v)!==m[b]&&f.setAttribute("morphTarget"+v,m[b]),p&&f.getAttribute("morphNormal"+v)!==p[b]&&f.setAttribute("morphNormal"+v,p[b]),s[v]=w,y+=w):(m&&f.hasAttribute("morphTarget"+v)===!0&&f.deleteAttribute("morphTarget"+v),p&&f.hasAttribute("morphNormal"+v)===!0&&f.deleteAttribute("morphNormal"+v),s[v]=0)}const E=f.morphTargetsRelative?1:1-y;u.getUniforms().setValue(t,"morphTargetBaseInfluence",E),u.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:c}}function sS(t,e,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,f=c.geometry,u=e.get(c,f);return s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER)),u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}const ym=new ln,bm=new hm,Tm=new Xx,wm=new Mm,qu=[],Yu=[],ju=new Float32Array(16),Zu=new Float32Array(9),Ku=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ha(t,e){let n=Yu[e];n===void 0&&(n=new Int32Array(e),Yu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function aS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function cS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function lS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;Ku.set(i),t.uniformMatrix2fv(this.addr,!1,Ku),xt(n,i)}}function fS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;Zu.set(i),t.uniformMatrix3fv(this.addr,!1,Zu),xt(n,i)}}function uS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;ju.set(i),t.uniformMatrix4fv(this.addr,!1,ju),xt(n,i)}}function hS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function pS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function mS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function gS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function vS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function xS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function MS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||ym,s)}function ES(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Tm,s)}function SS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||wm,s)}function yS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||bm,s)}function bS(t){switch(t){case 5126:return rS;case 35664:return oS;case 35665:return aS;case 35666:return cS;case 35674:return lS;case 35675:return fS;case 35676:return uS;case 5124:case 35670:return hS;case 35667:case 35671:return dS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return _S;case 36295:return vS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return yS}}function TS(t,e){t.uniform1fv(this.addr,e)}function wS(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function AS(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function RS(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function CS(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PS(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LS(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DS(t,e){t.uniform1iv(this.addr,e)}function US(t,e){t.uniform2iv(this.addr,e)}function IS(t,e){t.uniform3iv(this.addr,e)}function NS(t,e){t.uniform4iv(this.addr,e)}function FS(t,e){t.uniform1uiv(this.addr,e)}function OS(t,e){t.uniform2uiv(this.addr,e)}function BS(t,e){t.uniform3uiv(this.addr,e)}function zS(t,e){t.uniform4uiv(this.addr,e)}function VS(t,e,n){const i=this.cache,s=e.length,r=ha(n,s);vt(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||ym,r[o])}function HS(t,e,n){const i=this.cache,s=e.length,r=ha(n,s);vt(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Tm,r[o])}function GS(t,e,n){const i=this.cache,s=e.length,r=ha(n,s);vt(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||wm,r[o])}function $S(t,e,n){const i=this.cache,s=e.length,r=ha(n,s);vt(i,r)||(t.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||bm,r[o])}function kS(t){switch(t){case 5126:return TS;case 35664:return wS;case 35665:return AS;case 35666:return RS;case 35674:return CS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return DS;case 35667:case 35671:return US;case 35668:case 35672:return IS;case 35669:case 35673:return NS;case 5125:return FS;case 36294:return OS;case 36295:return BS;case 36296:return zS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return $S}}class WS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=bS(n.type)}}class XS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=kS(n.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function Ju(t,e){t.seq.push(e),t.map[e.id]=e}function YS(t,e,n){const i=t.name,s=i.length;for(hc.lastIndex=0;;){const r=hc.exec(i),o=hc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ju(n,l===void 0?new WS(a,t,e):new XS(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new qS(a),Ju(n,u)),n=u}}}class Ho{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);YS(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Qu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let jS=0;function ZS(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function KS(t){switch(t){case Bn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function eh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+ZS(t.getShaderSource(e),o)}else return s}function JS(t,e){const n=KS(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function QS(t,e){let n;switch(e){case ex:n="Linear";break;case tx:n="Reinhard";break;case nx:n="OptimizedCineon";break;case ix:n="ACESFilmic";break;case sx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ey(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function ty(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ny(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function mr(t){return t!==""}function th(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(t){return t.replace(iy,sy)}function sy(t,e){const n=Ve[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return ul(n)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(t){return t.replace(ry,oy)}function oy(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ay(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case Bs:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ly(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function fy(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nm:e="ENVMAP_BLENDING_MULTIPLY";break;case Jv:e="ENVMAP_BLENDING_MIX";break;case Qv:e="ENVMAP_BLENDING_ADD";break}return e}function uy(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hy(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=ay(n),l=cy(n),f=ly(n),u=fy(n),h=uy(n),d=n.isWebGL2?"":ey(n),_=ty(r),g=s.createProgram();let m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[sh(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[d,sh(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ri?"#define TONE_MAPPING":"",n.toneMapping!==ri?Ve.tonemapping_pars_fragment:"",n.toneMapping!==ri?QS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,JS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(mr).join(`
`)),o=ul(o),o=th(o,n),o=nh(o,n),a=ul(a),a=th(a,n),a=nh(a,n),o=ih(o),a=ih(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+o,v=y+p+a,M=Qu(s,s.VERTEX_SHADER,E),b=Qu(s,s.FRAGMENT_SHADER,v);if(s.attachShader(g,M),s.attachShader(g,b),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),t.debug.checkShaderErrors){const x=s.getProgramInfoLog(g).trim(),T=s.getShaderInfoLog(M).trim(),I=s.getShaderInfoLog(b).trim();let B=!0,U=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,M,b);else{const F=eh(s,M,"vertex"),z=eh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+F+`
`+z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||I==="")&&(U=!1);U&&(this.diagnostics={runnable:B,programLog:x,vertexShader:{log:T,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(M),s.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new Ho(s,g)),w};let D;return this.getAttributes=function(){return D===void 0&&(D=ny(s,g)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=jS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}let dy=0;class py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new my(e),n.set(e,i)),i}}class my{constructor(e){this.id=dy++,this.code=e,this.usedTimes=0}}function gy(t,e,n,i,s,r,o){const a=new dm,c=new py,l=[],f=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,T,I,B,U){const F=B.fog,z=U.geometry,H=x.isMeshStandardMaterial?B.environment:null,$=(x.isMeshStandardMaterial?n:e).get(x.envMap||H),k=$&&$.mapping===fa?$.image.height:null,le=_[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,we=ie!==void 0?ie.length:0;let ce=0;z.morphAttributes.position!==void 0&&(ce=1),z.morphAttributes.normal!==void 0&&(ce=2),z.morphAttributes.color!==void 0&&(ce=3);let j,re,me,ve;if(le){const et=Un[le];j=et.vertexShader,re=et.fragmentShader}else j=x.vertexShader,re=x.fragmentShader,c.update(x),me=c.getVertexShaderID(x),ve=c.getFragmentShaderID(x);const R=t.getRenderTarget(),de=U.isInstancedMesh===!0,Se=!!x.map,ue=!!x.matcap,Ce=!!$,P=!!x.aoMap,L=!!x.lightMap,V=!!x.bumpMap,ne=!!x.normalMap,Q=!!x.displacementMap,te=!!x.emissiveMap,pe=!!x.metalnessMap,se=!!x.roughnessMap,ae=x.clearcoat>0,oe=x.iridescence>0,A=x.sheen>0,S=x.transmission>0,O=ae&&!!x.clearcoatMap,q=ae&&!!x.clearcoatNormalMap,Z=ae&&!!x.clearcoatRoughnessMap,fe=oe&&!!x.iridescenceMap,xe=oe&&!!x.iridescenceThicknessMap,Me=A&&!!x.sheenColorMap,Y=A&&!!x.sheenRoughnessMap,be=!!x.specularMap,Ae=!!x.specularColorMap,Le=!!x.specularIntensityMap,Te=S&&!!x.transmissionMap,Ee=S&&!!x.thicknessMap,Ie=!!x.gradientMap,je=!!x.alphaMap,at=x.alphaTest>0,N=!!x.extensions,K=!!z.attributes.uv1,he=!!z.attributes.uv2,ye=!!z.attributes.uv3;return{isWebGL2:f,shaderID:le,shaderName:x.type,vertexShader:j,fragmentShader:re,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:de,instancingColor:de&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:R===null?t.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bn,map:Se,matcap:ue,envMap:Ce,envMapMode:Ce&&$.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:L,bumpMap:V,normalMap:ne,displacementMap:h&&Q,emissiveMap:te,normalMapObjectSpace:ne&&x.normalMapType===yx,normalMapTangentSpace:ne&&x.normalMapType===om,metalnessMap:pe,roughnessMap:se,clearcoat:ae,clearcoatMap:O,clearcoatNormalMap:q,clearcoatRoughnessMap:Z,iridescence:oe,iridescenceMap:fe,iridescenceThicknessMap:xe,sheen:A,sheenColorMap:Me,sheenRoughnessMap:Y,specularMap:be,specularColorMap:Ae,specularIntensityMap:Le,transmission:S,transmissionMap:Te,thicknessMap:Ee,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===Ds,alphaMap:je,alphaTest:at,combine:x.combine,mapUv:Se&&g(x.map.channel),aoMapUv:P&&g(x.aoMap.channel),lightMapUv:L&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:ne&&g(x.normalMap.channel),displacementMapUv:Q&&g(x.displacementMap.channel),emissiveMapUv:te&&g(x.emissiveMap.channel),metalnessMapUv:pe&&g(x.metalnessMap.channel),roughnessMapUv:se&&g(x.roughnessMap.channel),clearcoatMapUv:O&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:Ae&&g(x.specularColorMap.channel),specularIntensityMapUv:Le&&g(x.specularIntensityMap.channel),transmissionMapUv:Te&&g(x.transmissionMap.channel),thicknessMapUv:Ee&&g(x.thicknessMap.channel),alphaMapUv:je&&g(x.alphaMap.channel),vertexTangents:ne&&!!z.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:he,vertexUv3s:ye,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(Se||je),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:ri,useLegacyLights:t.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:N&&x.extensions.derivatives===!0,extensionFragDepth:N&&x.extensions.fragDepth===!0,extensionDrawBuffers:N&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(y(T,x),E(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),x.push(a.mask)}function v(x){const T=_[x.type];let I;if(T){const B=Un[T];I=r1.clone(B.uniforms)}else I=x.uniforms;return I}function M(x,T){let I;for(let B=0,U=l.length;B<U;B++){const F=l[B];if(F.cacheKey===T){I=F,++I.usedTimes;break}}return I===void 0&&(I=new hy(t,T,x,r),l.push(I)),I}function b(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:D}}function _y(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function vy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function oh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,h,d,_,g,m){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},t[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,h,d,_,g,m){const p=o(u,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function c(u,h,d,_,g,m){const p=o(u,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function l(u,h){n.length>1&&n.sort(u||vy),i.length>1&&i.sort(h||rh),s.length>1&&s.sort(h||rh)}function f(){for(let u=e,h=t.length;u<h;u++){const d=t[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:f,sort:l}}function xy(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new oh,t.set(i,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function My(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new it};break;case"SpotLight":n={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function Ey(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Sy=0;function yy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function by(t,e){const n=new My,i=Ey(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)s.probe.push(new W);const r=new W,o=new _t,a=new _t;function c(f,u){let h=0,d=0,_=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let g=0,m=0,p=0,y=0,E=0,v=0,M=0,b=0,w=0,D=0;f.sort(yy);const x=u===!0?Math.PI:1;for(let I=0,B=f.length;I<B;I++){const U=f[I],F=U.color,z=U.intensity,H=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=F.r*z*x,d+=F.g*z*x,_+=F.b*z*x;else if(U.isLightProbe)for(let k=0;k<9;k++)s.probe[k].addScaledVector(U.sh.coefficients[k],z);else if(U.isDirectionalLight){const k=n.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const le=U.shadow,ie=i.get(U);ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,s.directionalShadow[g]=ie,s.directionalShadowMap[g]=$,s.directionalShadowMatrix[g]=U.shadow.matrix,v++}s.directional[g]=k,g++}else if(U.isSpotLight){const k=n.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(F).multiplyScalar(z*x),k.distance=H,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,s.spot[p]=k;const le=U.shadow;if(U.map&&(s.spotLightMap[w]=U.map,w++,le.updateMatrices(U),U.castShadow&&D++),s.spotLightMatrix[p]=le.matrix,U.castShadow){const ie=i.get(U);ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,s.spotShadow[p]=ie,s.spotShadowMap[p]=$,b++}p++}else if(U.isRectAreaLight){const k=n.get(U);k.color.copy(F).multiplyScalar(z),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),s.rectArea[y]=k,y++}else if(U.isPointLight){const k=n.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*x),k.distance=U.distance,k.decay=U.decay,U.castShadow){const le=U.shadow,ie=i.get(U);ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,ie.shadowCameraNear=le.camera.near,ie.shadowCameraFar=le.camera.far,s.pointShadow[m]=ie,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=U.shadow.matrix,M++}s.point[m]=k,m++}else if(U.isHemisphereLight){const k=n.get(U);k.skyColor.copy(U.color).multiplyScalar(z*x),k.groundColor.copy(U.groundColor).multiplyScalar(z*x),s.hemi[E]=k,E++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==y||T.hemiLength!==E||T.numDirectionalShadows!==v||T.numPointShadows!==M||T.numSpotShadows!==b||T.numSpotMaps!==w)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=b+w-D,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=D,T.directionalLength=g,T.pointLength=m,T.spotLength=p,T.rectAreaLength=y,T.hemiLength=E,T.numDirectionalShadows=v,T.numPointShadows=M,T.numSpotShadows=b,T.numSpotMaps=w,s.version=Sy++)}function l(f,u){let h=0,d=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let y=0,E=f.length;y<E;y++){const v=f[y];if(v.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(v.isSpotLight){const M=s.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(v.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const M=s.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function ah(t,e){const n=new by(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){n.setup(i,u)}function l(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ty(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let c;return a===void 0?(c=new ah(t,e),n.set(r,[c])):o>=a.length?(c=new ah(t,e),a.push(c)):c=a[o],c}function s(){n=new WeakMap}return{get:i,dispose:s}}class wy extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ay extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`;function Py(t,e,n){let i=new Wl;const s=new He,r=new He,o=new bt,a=new wy({depthPacking:Sx}),c=new Ay,l={},f=n.maxTextureSize,u={[bi]:Zt,[Zt]:bi,[ni]:ni},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new ai;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ii(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qp;let p=this.type;this.render=function(M,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const D=t.getRenderTarget(),x=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),I=t.state;I.setBlending(yi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Kn&&this.type===Kn,U=p===Kn&&this.type!==Kn;for(let F=0,z=M.length;F<z;F++){const H=M[F],$=H.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const k=$.getFrameExtents();if(s.multiply(k),r.copy($.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/k.x),s.x=r.x*k.x,$.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/k.y),s.y=r.y*k.y,$.mapSize.y=r.y)),$.map===null||B===!0||U===!0){const ie=this.type!==Kn?{minFilter:Gt,magFilter:Gt}:{};$.map!==null&&$.map.dispose(),$.map=new Ki(s.x,s.y,ie),$.map.texture.name=H.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const le=$.getViewportCount();for(let ie=0;ie<le;ie++){const we=$.getViewport(ie);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),I.viewport(o),$.updateMatrices(H,ie),i=$.getFrustum(),v(b,w,$.camera,H,this.type)}$.isPointLightShadow!==!0&&this.type===Kn&&y($,w),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(D,x,T)};function y(M,b){const w=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ki(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,w,h,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,w,d,g,null)}function E(M,b,w,D){let x=null;const T=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)x=T;else if(x=w.isPointLight===!0?c:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=x.uuid,B=b.uuid;let U=l[I];U===void 0&&(U={},l[I]=U);let F=U[B];F===void 0&&(F=x.clone(),U[B]=F),x=F}if(x.visible=b.visible,x.wireframe=b.wireframe,D===Kn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=t.properties.get(x);I.light=w}return x}function v(M,b,w,D,x){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Kn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const B=e.update(M),U=M.material;if(Array.isArray(U)){const F=B.groups;for(let z=0,H=F.length;z<H;z++){const $=F[z],k=U[$.materialIndex];if(k&&k.visible){const le=E(M,k,D,x);t.renderBufferDirect(w,null,B,le,M,$)}}}else if(U.visible){const F=E(M,U,D,x);t.renderBufferDirect(w,null,B,F,M,null)}}const I=M.children;for(let B=0,U=I.length;B<U;B++)v(I[B],b,w,D,x)}}function Ly(t,e,n){const i=n.isWebGL2;function s(){let N=!1;const K=new bt;let he=null;const ye=new bt(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!N&&(t.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){N=Pe},setClear:function(Pe,et,tt,Ct,fi){fi===!0&&(Pe*=Ct,et*=Ct,tt*=Ct),K.set(Pe,et,tt,Ct),ye.equals(K)===!1&&(t.clearColor(Pe,et,tt,Ct),ye.copy(K))},reset:function(){N=!1,he=null,ye.set(-1,0,0,0)}}}function r(){let N=!1,K=null,he=null,ye=null;return{setTest:function(Pe){Pe?R(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Pe){K!==Pe&&!N&&(t.depthMask(Pe),K=Pe)},setFunc:function(Pe){if(he!==Pe){switch(Pe){case Wv:t.depthFunc(t.NEVER);break;case Xv:t.depthFunc(t.ALWAYS);break;case qv:t.depthFunc(t.LESS);break;case sl:t.depthFunc(t.LEQUAL);break;case Yv:t.depthFunc(t.EQUAL);break;case jv:t.depthFunc(t.GEQUAL);break;case Zv:t.depthFunc(t.GREATER);break;case Kv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Pe}},setLocked:function(Pe){N=Pe},setClear:function(Pe){ye!==Pe&&(t.clearDepth(Pe),ye=Pe)},reset:function(){N=!1,K=null,he=null,ye=null}}}function o(){let N=!1,K=null,he=null,ye=null,Pe=null,et=null,tt=null,Ct=null,fi=null;return{setTest:function(ct){N||(ct?R(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(ct){K!==ct&&!N&&(t.stencilMask(ct),K=ct)},setFunc:function(ct,un,wn){(he!==ct||ye!==un||Pe!==wn)&&(t.stencilFunc(ct,un,wn),he=ct,ye=un,Pe=wn)},setOp:function(ct,un,wn){(et!==ct||tt!==un||Ct!==wn)&&(t.stencilOp(ct,un,wn),et=ct,tt=un,Ct=wn)},setLocked:function(ct){N=ct},setClear:function(ct){fi!==ct&&(t.clearStencil(ct),fi=ct)},reset:function(){N=!1,K=null,he=null,ye=null,Pe=null,et=null,tt=null,Ct=null,fi=null}}}const a=new s,c=new r,l=new o,f=new WeakMap,u=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,E=null,v=null,M=null,b=null,w=null,D=null,x=!1,T=null,I=null,B=null,U=null,F=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=$>=2);let le=null,ie={};const we=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),j=new bt().fromArray(we),re=new bt().fromArray(ce);function me(N,K,he,ye){const Pe=new Uint8Array(4),et=t.createTexture();t.bindTexture(N,et),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<he;tt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(K,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(K+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return et}const ve={};ve[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),R(t.DEPTH_TEST),c.setFunc(sl),Q(!1),te(Wf),R(t.CULL_FACE),V(yi);function R(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function de(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Se(N,K){return d[N]!==K?(t.bindFramebuffer(N,K),d[N]=K,i&&(N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=K),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=K)),!0):!1}function ue(N,K){let he=g,ye=!1;if(N)if(he=_.get(K),he===void 0&&(he=[],_.set(K,he)),N.isWebGLMultipleRenderTargets){const Pe=N.texture;if(he.length!==Pe.length||he[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Pe.length;et<tt;et++)he[et]=t.COLOR_ATTACHMENT0+et;he.length=Pe.length,ye=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,ye=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,ye=!0);ye&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ce(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const P={[ws]:t.FUNC_ADD,[Iv]:t.FUNC_SUBTRACT,[Nv]:t.FUNC_REVERSE_SUBTRACT};if(i)P[jf]=t.MIN,P[Zf]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(P[jf]=N.MIN_EXT,P[Zf]=N.MAX_EXT)}const L={[Fv]:t.ZERO,[Ov]:t.ONE,[Bv]:t.SRC_COLOR,[em]:t.SRC_ALPHA,[kv]:t.SRC_ALPHA_SATURATE,[Gv]:t.DST_COLOR,[Vv]:t.DST_ALPHA,[zv]:t.ONE_MINUS_SRC_COLOR,[tm]:t.ONE_MINUS_SRC_ALPHA,[$v]:t.ONE_MINUS_DST_COLOR,[Hv]:t.ONE_MINUS_DST_ALPHA};function V(N,K,he,ye,Pe,et,tt,Ct){if(N===yi){p===!0&&(de(t.BLEND),p=!1);return}if(p===!1&&(R(t.BLEND),p=!0),N!==Uv){if(N!==y||Ct!==x){if((E!==ws||b!==ws)&&(t.blendEquation(t.FUNC_ADD),E=ws,b=ws),Ct)switch(N){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.ONE,t.ONE);break;case qf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,M=null,w=null,D=null,y=N,x=Ct}return}Pe=Pe||K,et=et||he,tt=tt||ye,(K!==E||Pe!==b)&&(t.blendEquationSeparate(P[K],P[Pe]),E=K,b=Pe),(he!==v||ye!==M||et!==w||tt!==D)&&(t.blendFuncSeparate(L[he],L[ye],L[et],L[tt]),v=he,M=ye,w=et,D=tt),y=N,x=!1}function ne(N,K){N.side===ni?de(t.CULL_FACE):R(t.CULL_FACE);let he=N.side===Zt;K&&(he=!he),Q(he),N.blending===Ds&&N.transparent===!1?V(yi):V(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const ye=N.stencilWrite;l.setTest(ye),ye&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?R(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){T!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),T=N)}function te(N){N!==Pv?(R(t.CULL_FACE),N!==I&&(N===Wf?t.cullFace(t.BACK):N===Lv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),I=N}function pe(N){N!==B&&(H&&t.lineWidth(N),B=N)}function se(N,K,he){N?(R(t.POLYGON_OFFSET_FILL),(U!==K||F!==he)&&(t.polygonOffset(K,he),U=K,F=he)):de(t.POLYGON_OFFSET_FILL)}function ae(N){N?R(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function oe(N){N===void 0&&(N=t.TEXTURE0+z-1),le!==N&&(t.activeTexture(N),le=N)}function A(N,K,he){he===void 0&&(le===null?he=t.TEXTURE0+z-1:he=le);let ye=ie[he];ye===void 0&&(ye={type:void 0,texture:void 0},ie[he]=ye),(ye.type!==N||ye.texture!==K)&&(le!==he&&(t.activeTexture(he),le=he),t.bindTexture(N,K||ve[N]),ye.type=N,ye.texture=K)}function S(){const N=ie[le];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){j.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function Ee(N){re.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function Ie(N,K){let he=u.get(K);he===void 0&&(he=new WeakMap,u.set(K,he));let ye=he.get(N);ye===void 0&&(ye=t.getUniformBlockIndex(K,N.name),he.set(N,ye))}function je(N,K){const ye=u.get(K).get(N);f.get(K)!==ye&&(t.uniformBlockBinding(K,ye,N.__bindingPointIndex),f.set(K,ye))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},le=null,ie={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,E=null,v=null,M=null,b=null,w=null,D=null,x=!1,T=null,I=null,B=null,U=null,F=null,j.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:R,disable:de,bindFramebuffer:Se,drawBuffers:ue,useProgram:Ce,setBlending:V,setMaterial:ne,setFlipSided:Q,setCullFace:te,setLineWidth:pe,setPolygonOffset:se,setScissorTest:ae,activeTexture:oe,bindTexture:A,unbindTexture:S,compressedTexImage2D:O,compressedTexImage3D:q,texImage2D:Ae,texImage3D:Le,updateUBOMapping:Ie,uniformBlockBinding:je,texStorage2D:Y,texStorage3D:be,texSubImage2D:Z,texSubImage3D:fe,compressedTexSubImage2D:xe,compressedTexSubImage3D:Me,scissor:Te,viewport:Ee,reset:at}}function Dy(t,e,n,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,f=s.maxTextureSize,u=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return p?new OffscreenCanvas(A,S):Zo("canvas")}function E(A,S,O,q){let Z=1;if((A.width>q||A.height>q)&&(Z=q/Math.max(A.width,A.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=S?cm:Math.floor,xe=fe(Z*A.width),Me=fe(Z*A.height);g===void 0&&(g=y(xe,Me));const Y=O?y(xe,Me):g;return Y.width=xe,Y.height=Me,Y.getContext("2d").drawImage(A,0,0,xe,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+Me+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return fl(A.width)&&fl(A.height)}function M(A){return a?!1:A.wrapS!==yn||A.wrapT!==yn||A.minFilter!==Gt&&A.minFilter!==dn}function b(A,S){return A.generateMipmaps&&S&&A.minFilter!==Gt&&A.minFilter!==dn}function w(A){t.generateMipmap(A)}function D(A,S,O,q,Z=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=S;return S===t.RED&&(O===t.FLOAT&&(fe=t.R32F),O===t.HALF_FLOAT&&(fe=t.R16F),O===t.UNSIGNED_BYTE&&(fe=t.R8)),S===t.RG&&(O===t.FLOAT&&(fe=t.RG32F),O===t.HALF_FLOAT&&(fe=t.RG16F),O===t.UNSIGNED_BYTE&&(fe=t.RG8)),S===t.RGBA&&(O===t.FLOAT&&(fe=t.RGBA32F),O===t.HALF_FLOAT&&(fe=t.RGBA16F),O===t.UNSIGNED_BYTE&&(fe=q===Be&&Z===!1?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)),(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(A,S,O){return b(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===Gt||A===Kf||A===Va?t.NEAREST:t.LINEAR}function I(A){const S=A.target;S.removeEventListener("dispose",I),U(S),S.isVideoTexture&&_.delete(S)}function B(A){const S=A.target;S.removeEventListener("dispose",B),z(S)}function U(A){const S=i.get(A);if(S.__webglInit===void 0)return;const O=A.source,q=m.get(O);if(q){const Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(A),Object.keys(q).length===0&&m.delete(O)}i.remove(A)}function F(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const O=A.source,q=m.get(O);delete q[S.__cacheKey],o.memory.textures--}function z(A){const S=A.texture,O=i.get(A),q=i.get(S);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)t.deleteFramebuffer(O.__webglFramebuffer[Z]),O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[Z]);else{if(t.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,fe=S.length;Z<fe;Z++){const xe=i.get(S[Z]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(S[Z])}i.remove(S),i.remove(A)}let H=0;function $(){H=0}function k(){const A=H;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),H+=1,A}function le(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ie(A,S){const O=i.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(O,A,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function we(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){de(O,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function ce(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){de(O,A,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function j(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Se(O,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const re={[al]:t.REPEAT,[yn]:t.CLAMP_TO_EDGE,[cl]:t.MIRRORED_REPEAT},me={[Gt]:t.NEAREST,[Kf]:t.NEAREST_MIPMAP_NEAREST,[Va]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[rx]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR};function ve(A,S,O){if(O?(t.texParameteri(A,t.TEXTURE_WRAP_S,re[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,re[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,re[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,me[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,me[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==yn||S.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Gt&&S.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Gt||S.minFilter!==Va&&S.minFilter!==Fr||S.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Or&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function R(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I));const q=S.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const fe=le(S);if(fe!==A.__cacheKey){Z[fe]===void 0&&(Z[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[fe].usedTimes++;const xe=Z[A.__cacheKey];xe!==void 0&&(Z[A.__cacheKey].usedTimes--,xe.usedTimes===0&&F(S)),A.__cacheKey=fe,A.__webglTexture=Z[fe].texture}return O}function de(A,S,O){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const Z=R(A,S),fe=S.source;n.bindTexture(q,A.__webglTexture,t.TEXTURE0+O);const xe=i.get(fe);if(fe.version!==xe.__version||Z===!0){n.activeTexture(t.TEXTURE0+O),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Me=M(S)&&v(S.image)===!1;let Y=E(S.image,Me,!1,f);Y=oe(S,Y);const be=v(Y)||a,Ae=r.convert(S.format,S.colorSpace);let Le=r.convert(S.type),Te=D(S.internalFormat,Ae,Le,S.colorSpace);ve(q,S,be);let Ee;const Ie=S.mipmaps,je=a&&S.isVideoTexture!==!0,at=xe.__version===void 0||Z===!0,N=x(S,Y,be);if(S.isDepthTexture)Te=t.DEPTH_COMPONENT,a?S.type===ki?Te=t.DEPTH_COMPONENT32F:S.type===$i?Te=t.DEPTH_COMPONENT24:S.type===Us?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:S.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===qi&&Te===t.DEPTH_COMPONENT&&S.type!==sm&&S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=$i,Le=r.convert(S.type)),S.format===zs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,S.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Us,Le=r.convert(S.type))),at&&(je?n.texStorage2D(t.TEXTURE_2D,1,Te,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,Te,Y.width,Y.height,0,Ae,Le,null));else if(S.isDataTexture)if(Ie.length>0&&be){je&&at&&n.texStorage2D(t.TEXTURE_2D,N,Te,Ie[0].width,Ie[0].height);for(let K=0,he=Ie.length;K<he;K++)Ee=Ie[K],je?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ae,Le,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Te,Ee.width,Ee.height,0,Ae,Le,Ee.data);S.generateMipmaps=!1}else je?(at&&n.texStorage2D(t.TEXTURE_2D,N,Te,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Ae,Le,Y.data)):n.texImage2D(t.TEXTURE_2D,0,Te,Y.width,Y.height,0,Ae,Le,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,Te,Ie[0].width,Ie[0].height,Y.depth);for(let K=0,he=Ie.length;K<he;K++)Ee=Ie[K],S.format!==bn?Ae!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,Y.depth,Ae,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Te,Ee.width,Ee.height,Y.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,Y.depth,Ae,Le,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Te,Ee.width,Ee.height,Y.depth,0,Ae,Le,Ee.data)}else{je&&at&&n.texStorage2D(t.TEXTURE_2D,N,Te,Ie[0].width,Ie[0].height);for(let K=0,he=Ie.length;K<he;K++)Ee=Ie[K],S.format!==bn?Ae!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ae,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ae,Le,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Te,Ee.width,Ee.height,0,Ae,Le,Ee.data)}else if(S.isDataArrayTexture)je?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,Te,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ae,Le,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,Y.width,Y.height,Y.depth,0,Ae,Le,Y.data);else if(S.isData3DTexture)je?(at&&n.texStorage3D(t.TEXTURE_3D,N,Te,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ae,Le,Y.data)):n.texImage3D(t.TEXTURE_3D,0,Te,Y.width,Y.height,Y.depth,0,Ae,Le,Y.data);else if(S.isFramebufferTexture){if(at)if(je)n.texStorage2D(t.TEXTURE_2D,N,Te,Y.width,Y.height);else{let K=Y.width,he=Y.height;for(let ye=0;ye<N;ye++)n.texImage2D(t.TEXTURE_2D,ye,Te,K,he,0,Ae,Le,null),K>>=1,he>>=1}}else if(Ie.length>0&&be){je&&at&&n.texStorage2D(t.TEXTURE_2D,N,Te,Ie[0].width,Ie[0].height);for(let K=0,he=Ie.length;K<he;K++)Ee=Ie[K],je?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ae,Le,Ee):n.texImage2D(t.TEXTURE_2D,K,Te,Ae,Le,Ee);S.generateMipmaps=!1}else je?(at&&n.texStorage2D(t.TEXTURE_2D,N,Te,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Le,Y)):n.texImage2D(t.TEXTURE_2D,0,Te,Ae,Le,Y);b(S,be)&&w(q),xe.__version=fe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Se(A,S,O){if(S.image.length!==6)return;const q=R(A,S),Z=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const fe=i.get(Z);if(Z.version!==fe.__version||q===!0){n.activeTexture(t.TEXTURE0+O),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Me=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let K=0;K<6;K++)!xe&&!Me?Y[K]=E(S.image[K],!1,!0,l):Y[K]=Me?S.image[K].image:S.image[K],Y[K]=oe(S,Y[K]);const be=Y[0],Ae=v(be)||a,Le=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),Ee=D(S.internalFormat,Le,Te,S.colorSpace),Ie=a&&S.isVideoTexture!==!0,je=fe.__version===void 0||q===!0;let at=x(S,be,Ae);ve(t.TEXTURE_CUBE_MAP,S,Ae);let N;if(xe){Ie&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Ee,be.width,be.height);for(let K=0;K<6;K++){N=Y[K].mipmaps;for(let he=0;he<N.length;he++){const ye=N[he];S.format!==bn?Le!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,ye.width,ye.height,Le,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,ye.width,ye.height,Le,Te,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ee,ye.width,ye.height,0,Le,Te,ye.data)}}}else{N=S.mipmaps,Ie&&je&&(N.length>0&&at++,n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Ee,Y[0].width,Y[0].height));for(let K=0;K<6;K++)if(Me){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Y[K].width,Y[K].height,Le,Te,Y[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Y[K].width,Y[K].height,0,Le,Te,Y[K].data);for(let he=0;he<N.length;he++){const Pe=N[he].image[K].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Pe.width,Pe.height,Le,Te,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ee,Pe.width,Pe.height,0,Le,Te,Pe.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,Te,Y[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Le,Te,Y[K]);for(let he=0;he<N.length;he++){const ye=N[he];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Le,Te,ye.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ee,Le,Te,ye.image[K])}}}b(S,Ae)&&w(t.TEXTURE_CUBE_MAP),fe.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,O,q,Z){const fe=r.convert(O.format,O.colorSpace),xe=r.convert(O.type),Me=D(O.internalFormat,fe,xe,O.colorSpace);i.get(S).__hasExternalTextures||(Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,Me,S.width,S.height,S.depth,0,fe,xe,null):n.texImage2D(Z,0,Me,S.width,S.height,0,fe,xe,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),se(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,i.get(O).__webglTexture,0,pe(S)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,i.get(O).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(A,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let q=t.DEPTH_COMPONENT16;if(O||se(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ki?q=t.DEPTH_COMPONENT32F:Z.type===$i&&(q=t.DEPTH_COMPONENT24));const fe=pe(S);se(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,q,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,q,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const q=pe(S);O&&se(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):se(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<q.length;Z++){const fe=q[Z],xe=r.convert(fe.format,fe.colorSpace),Me=r.convert(fe.type),Y=D(fe.internalFormat,xe,Me,fe.colorSpace),be=pe(S);O&&se(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Y,S.width,S.height):se(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,Y,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Y,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie(S.depthTexture,0);const q=i.get(S.depthTexture).__webglTexture,Z=pe(S);if(S.depthTexture.format===qi)se(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(S.depthTexture.format===zs)se(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function L(A){const S=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=t.createRenderbuffer(),Ce(S.__webglDepthbuffer[q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ce(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(A,S,O){const q=i.get(A);S!==void 0&&ue(q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),O!==void 0&&L(A)}function ne(A){const S=A.texture,O=i.get(A),q=i.get(S);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,xe=v(A)||a;if(Z){O.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)O.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(O.__webglFramebuffer=t.createFramebuffer(),fe)if(s.drawBuffers){const Me=A.texture;for(let Y=0,be=Me.length;Y<be;Y++){const Ae=i.get(Me[Y]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&se(A)===!1){const Me=fe?S:[S];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<Me.length;Y++){const be=Me[Y];O.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const Ae=r.convert(be.format,be.colorSpace),Le=r.convert(be.type),Te=D(be.internalFormat,Ae,Le,be.colorSpace,A.isXRRenderTarget===!0),Ee=pe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Te,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ve(t.TEXTURE_CUBE_MAP,S,xe);for(let Me=0;Me<6;Me++)ue(O.__webglFramebuffer[Me],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me);b(S,xe)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){const Me=A.texture;for(let Y=0,be=Me.length;Y<be;Y++){const Ae=Me[Y],Le=i.get(Ae);n.bindTexture(t.TEXTURE_2D,Le.__webglTexture),ve(t.TEXTURE_2D,Ae,xe),ue(O.__webglFramebuffer,A,Ae,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),b(Ae,xe)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Me=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Me,q.__webglTexture),ve(Me,S,xe),ue(O.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,Me),b(S,xe)&&w(Me),n.unbindTexture()}A.depthBuffer&&L(A)}function Q(A){const S=v(A)||a,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let q=0,Z=O.length;q<Z;q++){const fe=O[q];if(b(fe,S)){const xe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(fe).__webglTexture;n.bindTexture(xe,Me),w(xe),n.unbindTexture()}}}function te(A){if(a&&A.samples>0&&se(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,q=A.height;let Z=t.COLOR_BUFFER_BIT;const fe=[],xe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let be=0;be<S.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let be=0;be<S.length;be++){fe.push(t.COLOR_ATTACHMENT0+be),A.depthBuffer&&fe.push(xe);const Ae=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ae===!1&&(A.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[be]),Ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),Y){const Le=i.get(S[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,O,q,0,0,O,q,Z,t.NEAREST),d&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let be=0;be<S.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const Ae=i.get(S[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function pe(A){return Math.min(u,A.samples)}function se(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(A){const S=o.render.frame;_.get(A)!==S&&(_.set(A,S),A.update())}function oe(A,S){const O=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.format===ll||O!==Bn&&O!==ji&&(O===Be?a===!1?e.has("EXT_sRGB")===!0&&q===bn?(A.format=ll,A.minFilter=dn,A.generateMipmaps=!1):S=fm.sRGBToLinear(S):(q!==bn||Z!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=ie,this.setTexture2DArray=we,this.setTexture3D=ce,this.setTextureCube=j,this.rebindTextures=V,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=se}function Uy(t,e,n){const i=n.isWebGL2;function s(r,o=ji){let a;if(r===Zi)return t.UNSIGNED_BYTE;if(r===lx)return t.UNSIGNED_SHORT_4_4_4_4;if(r===fx)return t.UNSIGNED_SHORT_5_5_5_1;if(r===ox)return t.BYTE;if(r===ax)return t.SHORT;if(r===sm)return t.UNSIGNED_SHORT;if(r===cx)return t.INT;if(r===$i)return t.UNSIGNED_INT;if(r===ki)return t.FLOAT;if(r===Or)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ux)return t.ALPHA;if(r===bn)return t.RGBA;if(r===hx)return t.LUMINANCE;if(r===dx)return t.LUMINANCE_ALPHA;if(r===qi)return t.DEPTH_COMPONENT;if(r===zs)return t.DEPTH_STENCIL;if(r===ll)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===px)return t.RED;if(r===mx)return t.RED_INTEGER;if(r===gx)return t.RG;if(r===_x)return t.RG_INTEGER;if(r===vx)return t.RGBA_INTEGER;if(r===Ha||r===Ga||r===$a||r===ka)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ha)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ha)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ga)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jf||r===Qf||r===eu||r===tu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Jf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nu||r===iu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===nu)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===iu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===fu||r===uu||r===hu||r===du||r===pu||r===mu||r===gu||r===_u)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===su)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ru)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ou)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===au)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===du)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gu)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_u)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Wa)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Mx||r===vu||r===xu||r===Mu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===vu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class Iy extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class So extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new So;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Fy extends ln{constructor(e,n,i,s,r,o,a,c,l,f){if(f=f!==void 0?f:qi,f!==qi&&f!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===qi&&(i=$i),i===void 0&&f===zs&&(i=Us),super(null,s,r,o,a,c,f,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1}}class Oy extends es{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,h=null,d=null,_=null;const g=n.getContextAttributes();let m=null,p=null;const y=[],E=[],v=new Set,M=new Map,b=new pn;b.layers.enable(1),b.viewport=new bt;const w=new pn;w.layers.enable(2),w.viewport=new bt;const D=[b,w],x=new Iy;x.layers.enable(1),x.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=y[j];return re===void 0&&(re=new dc,y[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=y[j];return re===void 0&&(re=new dc,y[j]=re),re.getGripSpace()},this.getHand=function(j){let re=y[j];return re===void 0&&(re=new dc,y[j]=re),re.getHandSpace()};function B(j){const re=E.indexOf(j.inputSource);if(re===-1)return;const me=y[re];me!==void 0&&(me.update(j.inputSource,j.frame,l||o),me.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F);for(let j=0;j<y.length;j++){const re=E[j];re!==null&&(E[j]=null,y[j].disconnect(re))}T=null,I=null,e.setRenderTarget(m),d=null,h=null,u=null,s=null,p=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,re),s.updateRenderState({baseLayer:d}),p=new Ki(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,me=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?zs:qi,me=g.stencil?Us:$i);const R={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,n),h=u.createProjectionLayer(R),s.updateRenderState({layers:[h]}),p=new Ki(h.textureWidth,h.textureHeight,{format:bn,type:Zi,depthTexture:new Fy(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const de=e.properties.get(p);de.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(j){for(let re=0;re<j.removed.length;re++){const me=j.removed[re],ve=E.indexOf(me);ve>=0&&(E[ve]=null,y[ve].disconnect(me))}for(let re=0;re<j.added.length;re++){const me=j.added[re];let ve=E.indexOf(me);if(ve===-1){for(let de=0;de<y.length;de++)if(de>=E.length){E.push(me),ve=de;break}else if(E[de]===null){E[de]=me,ve=de;break}if(ve===-1)break}const R=y[ve];R&&R.connect(me)}}const z=new W,H=new W;function $(j,re,me){z.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(me.matrixWorld);const ve=z.distanceTo(H),R=re.projectionMatrix.elements,de=me.projectionMatrix.elements,Se=R[14]/(R[10]-1),ue=R[14]/(R[10]+1),Ce=(R[9]+1)/R[5],P=(R[9]-1)/R[5],L=(R[8]-1)/R[0],V=(de[8]+1)/de[0],ne=Se*L,Q=Se*V,te=ve/(-L+V),pe=te*-L;re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pe),j.translateZ(te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const se=Se+te,ae=ue+te,oe=ne-pe,A=Q+(ve-pe),S=Ce*ue/ae*se,O=P*ue/ae*se;j.projectionMatrix.makePerspective(oe,A,S,O,se,ae),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function k(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;x.near=w.near=b.near=j.near,x.far=w.far=b.far=j.far,(T!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,I=x.far);const re=j.parent,me=x.cameras;k(x,re);for(let ve=0;ve<me.length;ve++)k(me[ve],re);me.length===2?$(x,b,w):x.projectionMatrix.copy(b.projectionMatrix),le(j,x,re)};function le(j,re,me){me===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ve=j.children;for(let R=0,de=ve.length;R<de;R++)ve[R].updateMatrixWorld(!0);j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Br*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.getPlanes=function(){return v};let ie=null;function we(j,re){if(f=re.getViewerPose(l||o),_=re,f!==null){const me=f.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ve=!1;me.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let R=0;R<me.length;R++){const de=me[R];let Se=null;if(d!==null)Se=d.getViewport(de);else{const Ce=u.getViewSubImage(h,de);Se=Ce.viewport,R===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let ue=D[R];ue===void 0&&(ue=new pn,ue.layers.enable(R),ue.viewport=new bt,D[R]=ue),ue.matrix.fromArray(de.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(de.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Se.x,Se.y,Se.width,Se.height),R===0&&(x.matrix.copy(ue.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(ue)}}for(let me=0;me<y.length;me++){const ve=E[me],R=y[me];ve!==null&&R!==void 0&&R.update(ve,re,l||o)}if(ie&&ie(j,re),re.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:re.detectedPlanes});let me=null;for(const ve of v)re.detectedPlanes.has(ve)||(me===null&&(me=[]),me.push(ve));if(me!==null)for(const ve of me)v.delete(ve),M.delete(ve),i.dispatchEvent({type:"planeremoved",data:ve});for(const ve of re.detectedPlanes)if(!v.has(ve))v.add(ve),M.set(ve,re.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ve});else{const R=M.get(ve);ve.lastChangedTime>R&&(M.set(ve,ve.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ve}))}}_=null}const ce=new Em;ce.setAnimationLoop(we),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}function By(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zy(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,E){const v=E.program;i.uniformBlockBinding(y,v)}function l(y,E){let v=s[y.id];v===void 0&&(_(y),v=f(y),s[y.id]=v,y.addEventListener("dispose",m));const M=E.program;i.updateUBOMapping(y,M);const b=e.render.frame;r[y.id]!==b&&(h(y),r[y.id]=b)}function f(y){const E=u();y.__bindingPointIndex=E;const v=t.createBuffer(),M=y.__size,b=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,M,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=s[y.id],v=y.uniforms,M=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let b=0,w=v.length;b<w;b++){const D=v[b];if(d(D,b,M)===!0){const x=D.__offset,T=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let B=0;B<T.length;B++){const U=T[B],F=g(U);typeof U=="number"?(D.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,x+I,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=U.elements[0],D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=U.elements[0],D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=U.elements[0]):(U.toArray(D.__data,I),I+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,x,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(y,E,v){const M=y.value;if(v[E]===void 0){if(typeof M=="number")v[E]=M;else{const b=Array.isArray(M)?M:[M],w=[];for(let D=0;D<b.length;D++)w.push(b[D].clone());v[E]=w}return!0}else if(typeof M=="number"){if(v[E]!==M)return v[E]=M,!0}else{const b=Array.isArray(v[E])?v[E]:[v[E]],w=Array.isArray(M)?M:[M];for(let D=0;D<b.length;D++){const x=b[D];if(x.equals(w[D])===!1)return x.copy(w[D]),!0}}return!1}function _(y){const E=y.uniforms;let v=0;const M=16;let b=0;for(let w=0,D=E.length;w<D;w++){const x=E[w],T={boundary:0,storage:0},I=Array.isArray(x.value)?x.value:[x.value];for(let B=0,U=I.length;B<U;B++){const F=I[B],z=g(F);T.boundary+=z.boundary,T.storage+=z.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=v,w>0){b=v%M;const B=M-b;b!==0&&B-T.boundary<0&&(v+=M-b,x.__offset=v)}v+=T.storage}return b=v%M,b>0&&(v+=M-b),y.__size=v,y.__cache={},this}function g(y){const E={boundary:0,storage:0};return typeof y=="number"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function Vy(){const t=Zo("canvas");return t.style.display="block",t}class Am{constructor(e={}){const{canvas:n=Vy(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let d=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Be,this.useLegacyLights=!0,this.toneMapping=ri,this.toneMappingExposure=1;const p=this;let y=!1,E=0,v=0,M=null,b=-1,w=null;const D=new bt,x=new bt;let T=null,I=n.width,B=n.height,U=1,F=null,z=null;const H=new bt(0,0,I,B),$=new bt(0,0,I,B);let k=!1;const le=new Wl;let ie=!1,we=!1,ce=null;const j=new _t,re=new W,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return M===null?U:1}let R=i;function de(C,X){for(let J=0;J<C.length;J++){const G=C[J],ee=n.getContext(G,X);if(ee!==null)return ee}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gl}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",je,!1),R===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),R=de(X,C),R===null)throw de(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,ue,Ce,P,L,V,ne,Q,te,pe,se,ae,oe,A,S,O,q,Z,fe,xe,Me,Y,be,Ae;function Le(){Se=new KE(R),ue=new WE(R,Se,e),Se.init(ue),Y=new Uy(R,Se,ue),Ce=new Ly(R,Se,ue),P=new eS(R),L=new _y,V=new Dy(R,Se,Ce,L,ue,Y,P),ne=new qE(p),Q=new ZE(p),te=new h1(R,ue),be=new $E(R,Se,te,ue),pe=new JE(R,te,P,be),se=new sS(R,pe,te,P),fe=new iS(R,ue,V),O=new XE(L),ae=new gy(p,ne,Q,Se,ue,be,O),oe=new By(p,L),A=new xy,S=new Ty(Se,ue),Z=new GE(p,ne,Q,Ce,se,h,c),q=new Py(p,se,ue),Ae=new zy(R,P,ue,Ce),xe=new kE(R,Se,P,ue),Me=new QE(R,Se,P,ue),P.programs=ae.programs,p.capabilities=ue,p.extensions=Se,p.properties=L,p.renderLists=A,p.shadowMap=q,p.state=Ce,p.info=P}Le();const Te=new Oy(p,R);this.xr=Te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(I,B,!1))},this.getSize=function(C){return C.set(I,B)},this.setSize=function(C,X,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,B=X,n.width=Math.floor(C*U),n.height=Math.floor(X*U),J===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(I*U,B*U).floor()},this.setDrawingBufferSize=function(C,X,J){I=C,B=X,U=J,n.width=Math.floor(C*J),n.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,X,J,G){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,X,J,G),Ce.viewport(D.copy(H).multiplyScalar(U).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,X,J,G){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,J,G),Ce.scissor(x.copy($).multiplyScalar(U).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(C){Ce.setScissorTest(k=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,X=!0,J=!0){let G=0;C&&(G|=R.COLOR_BUFFER_BIT),X&&(G|=R.DEPTH_BUFFER_BIT),J&&(G|=R.STENCIL_BUFFER_BIT),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",je,!1),A.dispose(),S.dispose(),L.dispose(),ne.dispose(),Q.dispose(),se.dispose(),be.dispose(),Ae.dispose(),ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Pe),Te.removeEventListener("sessionend",et),ce&&(ce.dispose(),ce=null),tt.stop()};function Ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=P.autoReset,X=q.enabled,J=q.autoUpdate,G=q.needsUpdate,ee=q.type;Le(),P.autoReset=C,q.enabled=X,q.autoUpdate=J,q.needsUpdate=G,q.type=ee}function je(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function at(C){const X=C.target;X.removeEventListener("dispose",at),N(X)}function N(C){K(C),L.remove(C)}function K(C){const X=L.get(C).programs;X!==void 0&&(X.forEach(function(J){ae.releaseProgram(J)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,G,ee,De){X===null&&(X=me);const Ue=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=$g(C,X,J,G,ee);Ce.setMaterial(G,Ue);let ze=J.index,$e=1;G.wireframe===!0&&(ze=pe.getWireframeAttribute(J),$e=2);const ke=J.drawRange,Xe=J.attributes.position;let Ke=ke.start*$e,Nt=(ke.start+ke.count)*$e;De!==null&&(Ke=Math.max(Ke,De.start*$e),Nt=Math.min(Nt,(De.start+De.count)*$e)),ze!==null?(Ke=Math.max(Ke,0),Nt=Math.min(Nt,ze.count)):Xe!=null&&(Ke=Math.max(Ke,0),Nt=Math.min(Nt,Xe.count));const gn=Nt-Ke;if(gn<0||gn===1/0)return;be.setup(ee,G,Ne,J,ze);let Ai,ht=xe;if(ze!==null&&(Ai=te.get(ze),ht=Me,ht.setIndex(Ai)),ee.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*ve()),ht.setMode(R.LINES)):ht.setMode(R.TRIANGLES);else if(ee.isLine){let Ye=G.linewidth;Ye===void 0&&(Ye=1),Ce.setLineWidth(Ye*ve()),ee.isLineSegments?ht.setMode(R.LINES):ee.isLineLoop?ht.setMode(R.LINE_LOOP):ht.setMode(R.LINE_STRIP)}else ee.isPoints?ht.setMode(R.POINTS):ee.isSprite&&ht.setMode(R.TRIANGLES);if(ee.isInstancedMesh)ht.renderInstances(Ke,gn,ee.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ba=Math.min(J.instanceCount,Ye);ht.renderInstances(Ke,gn,ba)}else ht.render(Ke,gn)},this.compile=function(C,X){function J(G,ee,De){G.transparent===!0&&G.side===ni&&G.forceSinglePass===!1?(G.side=Zt,G.needsUpdate=!0,jr(G,ee,De),G.side=bi,G.needsUpdate=!0,jr(G,ee,De),G.side=ni):jr(G,ee,De)}_=S.get(C),_.init(),m.push(_),C.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights(p.useLegacyLights),C.traverse(function(G){const ee=G.material;if(ee)if(Array.isArray(ee))for(let De=0;De<ee.length;De++){const Ue=ee[De];J(Ue,C,G)}else J(ee,C,G)}),m.pop(),_=null};let he=null;function ye(C){he&&he(C)}function Pe(){tt.stop()}function et(){tt.start()}const tt=new Em;tt.setAnimationLoop(ye),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(C){he=C,Te.setAnimationLoop(C),C===null?tt.stop():tt.start()},Te.addEventListener("sessionstart",Pe),Te.addEventListener("sessionend",et),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,X,M),_=S.get(C,m.length),_.init(),m.push(_),j.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),le.setFromProjectionMatrix(j),we=this.localClippingEnabled,ie=O.init(this.clippingPlanes,we),d=A.get(C,g.length),d.init(),g.push(d),Ct(C,X,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(F,z),ie===!0&&O.beginShadows();const J=_.state.shadowsArray;if(q.render(J,C,X),ie===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,C),_.setupLights(p.useLegacyLights),X.isArrayCamera){const G=X.cameras;for(let ee=0,De=G.length;ee<De;ee++){const Ue=G[ee];fi(d,C,Ue,Ue.viewport)}}else fi(d,C,X);M!==null&&(V.updateMultisampleRenderTarget(M),V.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(p,C,X),be.resetDefaultState(),b=-1,w=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Ct(C,X,J,G){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){G&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Ue=se.update(C),Ne=C.material;Ne.visible&&d.push(C,Ue,Ne,J,re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==P.render.frame&&(C.skeleton.update(),C.skeleton.frame=P.render.frame);const Ue=se.update(C),Ne=C.material;if(G&&(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),re.copy(Ue.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(j)),Array.isArray(Ne)){const ze=Ue.groups;for(let $e=0,ke=ze.length;$e<ke;$e++){const Xe=ze[$e],Ke=Ne[Xe.materialIndex];Ke&&Ke.visible&&d.push(C,Ue,Ke,J,re.z,Xe)}}else Ne.visible&&d.push(C,Ue,Ne,J,re.z,null)}}const De=C.children;for(let Ue=0,Ne=De.length;Ue<Ne;Ue++)Ct(De[Ue],X,J,G)}function fi(C,X,J,G){const ee=C.opaque,De=C.transmissive,Ue=C.transparent;_.setupLightsView(J),ie===!0&&O.setGlobalState(p.clippingPlanes,J),De.length>0&&ct(ee,De,X,J),G&&Ce.viewport(D.copy(G)),ee.length>0&&un(ee,X,J),De.length>0&&un(De,X,J),Ue.length>0&&un(Ue,X,J),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ct(C,X,J,G){if(ce===null){const Ne=ue.isWebGL2;ce=new Ki(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Or:Zi,minFilter:Fr,samples:Ne&&a===!0?4:0})}const ee=p.getRenderTarget();p.setRenderTarget(ce),p.clear();const De=p.toneMapping;p.toneMapping=ri,un(C,J,G),V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce);let Ue=!1;for(let Ne=0,ze=X.length;Ne<ze;Ne++){const $e=X[Ne],ke=$e.object,Xe=$e.geometry,Ke=$e.material,Nt=$e.group;if(Ke.side===ni&&ke.layers.test(G.layers)){const gn=Ke.side;Ke.side=Zt,Ke.needsUpdate=!0,wn(ke,J,G,Xe,Ke,Nt),Ke.side=gn,Ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce)),p.setRenderTarget(ee),p.toneMapping=De}function un(C,X,J){const G=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,De=C.length;ee<De;ee++){const Ue=C[ee],Ne=Ue.object,ze=Ue.geometry,$e=G===null?Ue.material:G,ke=Ue.group;Ne.layers.test(J.layers)&&wn(Ne,X,J,ze,$e,ke)}}function wn(C,X,J,G,ee,De){C.onBeforeRender(p,X,J,G,ee,De),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(p,X,J,G,C,De),ee.transparent===!0&&ee.side===ni&&ee.forceSinglePass===!1?(ee.side=Zt,ee.needsUpdate=!0,p.renderBufferDirect(J,X,G,ee,C,De),ee.side=bi,ee.needsUpdate=!0,p.renderBufferDirect(J,X,G,ee,C,De),ee.side=ni):p.renderBufferDirect(J,X,G,ee,C,De),C.onAfterRender(p,X,J,G,ee,De)}function jr(C,X,J){X.isScene!==!0&&(X=me);const G=L.get(C),ee=_.state.lights,De=_.state.shadowsArray,Ue=ee.state.version,Ne=ae.getParameters(C,ee.state,De,X,J),ze=ae.getProgramCacheKey(Ne);let $e=G.programs;G.environment=C.isMeshStandardMaterial?X.environment:null,G.fog=X.fog,G.envMap=(C.isMeshStandardMaterial?Q:ne).get(C.envMap||G.environment),$e===void 0&&(C.addEventListener("dispose",at),$e=new Map,G.programs=$e);let ke=$e.get(ze);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Ue)return uf(C,Ne),ke}else Ne.uniforms=ae.getUniforms(C),C.onBuild(J,Ne,p),C.onBeforeCompile(Ne,p),ke=ae.acquireProgram(Ne,ze),$e.set(ze,ke),G.uniforms=Ne.uniforms;const Xe=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=O.uniform),uf(C,Ne),G.needsLights=Wg(C),G.lightsStateVersion=Ue,G.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMap.value=ee.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotShadowMap.value=ee.state.spotShadowMap,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMap.value=ee.state.pointShadowMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Ke=ke.getUniforms(),Nt=Ho.seqWithValue(Ke.seq,Xe);return G.currentProgram=ke,G.uniformsList=Nt,ke}function uf(C,X){const J=L.get(C);J.outputColorSpace=X.outputColorSpace,J.instancing=X.instancing,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function $g(C,X,J,G,ee){X.isScene!==!0&&(X=me),V.resetTextureUnits();const De=X.fog,Ue=G.isMeshStandardMaterial?X.environment:null,Ne=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bn,ze=(G.isMeshStandardMaterial?Q:ne).get(G.envMap||Ue),$e=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!G.normalMap&&!!J.attributes.tangent,Xe=!!J.morphAttributes.position,Ke=!!J.morphAttributes.normal,Nt=!!J.morphAttributes.color,gn=G.toneMapped?p.toneMapping:ri,Ai=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ht=Ai!==void 0?Ai.length:0,Ye=L.get(G),ba=_.state.lights;if(ie===!0&&(we===!0||C!==w)){const Kt=C===w&&G.id===b;O.setState(G,C,Kt)}let Et=!1;G.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ba.state.version||Ye.outputColorSpace!==Ne||ee.isInstancedMesh&&Ye.instancing===!1||!ee.isInstancedMesh&&Ye.instancing===!0||ee.isSkinnedMesh&&Ye.skinning===!1||!ee.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==ze||G.fog===!0&&Ye.fog!==De||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==O.numPlanes||Ye.numIntersection!==O.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==ke||Ye.morphTargets!==Xe||Ye.morphNormals!==Ke||Ye.morphColors!==Nt||Ye.toneMapping!==gn||ue.isWebGL2===!0&&Ye.morphTargetsCount!==ht)&&(Et=!0):(Et=!0,Ye.__version=G.version);let Ri=Ye.currentProgram;Et===!0&&(Ri=jr(G,X,ee));let hf=!1,Js=!1,Ta=!1;const Ft=Ri.getUniforms(),Ci=Ye.uniforms;if(Ce.useProgram(Ri.program)&&(hf=!0,Js=!0,Ta=!0),G.id!==b&&(b=G.id,Js=!0),hf||w!==C){if(Ft.setValue(R,"projectionMatrix",C.projectionMatrix),ue.logarithmicDepthBuffer&&Ft.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,Js=!0,Ta=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Kt=Ft.map.cameraPosition;Kt!==void 0&&Kt.setValue(R,re.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ft.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ee.isSkinnedMesh)&&Ft.setValue(R,"viewMatrix",C.matrixWorldInverse)}if(ee.isSkinnedMesh){Ft.setOptional(R,ee,"bindMatrix"),Ft.setOptional(R,ee,"bindMatrixInverse");const Kt=ee.skeleton;Kt&&(ue.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ft.setValue(R,"boneTexture",Kt.boneTexture,V),Ft.setValue(R,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wa=J.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&ue.isWebGL2===!0)&&fe.update(ee,J,Ri),(Js||Ye.receiveShadow!==ee.receiveShadow)&&(Ye.receiveShadow=ee.receiveShadow,Ft.setValue(R,"receiveShadow",ee.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ci.envMap.value=ze,Ci.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Js&&(Ft.setValue(R,"toneMappingExposure",p.toneMappingExposure),Ye.needsLights&&kg(Ci,Ta),De&&G.fog===!0&&oe.refreshFogUniforms(Ci,De),oe.refreshMaterialUniforms(Ci,G,U,B,ce),Ho.upload(R,Ye.uniformsList,Ci,V)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ho.upload(R,Ye.uniformsList,Ci,V),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ft.setValue(R,"center",ee.center),Ft.setValue(R,"modelViewMatrix",ee.modelViewMatrix),Ft.setValue(R,"normalMatrix",ee.normalMatrix),Ft.setValue(R,"modelMatrix",ee.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Kt=G.uniformsGroups;for(let Aa=0,Xg=Kt.length;Aa<Xg;Aa++)if(ue.isWebGL2){const df=Kt[Aa];Ae.update(df,Ri),Ae.bind(df,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function kg(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Wg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,X,J){L.get(C.texture).__webglTexture=X,L.get(C.depthTexture).__webglTexture=J;const G=L.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=J===void 0,G.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const J=L.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,J=0){M=C,E=X,v=J;let G=!0,ee=null,De=!1,Ue=!1;if(C){const ze=L.get(C);ze.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(R.FRAMEBUFFER,null),G=!1):ze.__webglFramebuffer===void 0?V.setupRenderTarget(C):ze.__hasExternalTextures&&V.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const ke=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ee=ke[X],De=!0):ue.isWebGL2&&C.samples>0&&V.useMultisampledRTT(C)===!1?ee=L.get(C).__webglMultisampledFramebuffer:ee=ke,D.copy(C.viewport),x.copy(C.scissor),T=C.scissorTest}else D.copy(H).multiplyScalar(U).floor(),x.copy($).multiplyScalar(U).floor(),T=k;if(Ce.bindFramebuffer(R.FRAMEBUFFER,ee)&&ue.drawBuffers&&G&&Ce.drawBuffers(C,ee),Ce.viewport(D),Ce.scissor(x),Ce.setScissorTest(T),De){const ze=L.get(C.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,J)}else if(Ue){const ze=L.get(C.texture),$e=X||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ze.__webglTexture,J||0,$e)}b=-1},this.readRenderTargetPixels=function(C,X,J,G,ee,De,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){Ce.bindFramebuffer(R.FRAMEBUFFER,Ne);try{const ze=C.texture,$e=ze.format,ke=ze.type;if($e!==bn&&Y.convert($e)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=ke===Or&&(Se.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ke!==Zi&&Y.convert(ke)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===ki&&(ue.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-G&&J>=0&&J<=C.height-ee&&R.readPixels(X,J,G,ee,Y.convert($e),Y.convert(ke),De)}finally{const ze=M!==null?L.get(M).__webglFramebuffer:null;Ce.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,X,J=0){const G=Math.pow(2,-J),ee=Math.floor(X.image.width*G),De=Math.floor(X.image.height*G);V.setTexture2D(X,0),R.copyTexSubImage2D(R.TEXTURE_2D,J,0,0,C.x,C.y,ee,De),Ce.unbindTexture()},this.copyTextureToTexture=function(C,X,J,G=0){const ee=X.image.width,De=X.image.height,Ue=Y.convert(J.format),Ne=Y.convert(J.type);V.setTexture2D(J,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,J.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,C.x,C.y,ee,De,Ue,Ne,X.image.data):X.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ue,X.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,G,C.x,C.y,Ue,Ne,X.image),G===0&&J.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J,G,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=C.max.x-C.min.x+1,Ue=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,ze=Y.convert(G.format),$e=Y.convert(G.type);let ke;if(G.isData3DTexture)V.setTexture3D(G,0),ke=R.TEXTURE_3D;else if(G.isDataArrayTexture)V.setTexture2DArray(G,0),ke=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const Xe=R.getParameter(R.UNPACK_ROW_LENGTH),Ke=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Nt=R.getParameter(R.UNPACK_SKIP_PIXELS),gn=R.getParameter(R.UNPACK_SKIP_ROWS),Ai=R.getParameter(R.UNPACK_SKIP_IMAGES),ht=J.isCompressedTexture?J.mipmaps[0]:J.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ht.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ht.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,C.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,C.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?R.texSubImage3D(ke,ee,X.x,X.y,X.z,De,Ue,Ne,ze,$e,ht.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(ke,ee,X.x,X.y,X.z,De,Ue,Ne,ze,ht.data)):R.texSubImage3D(ke,ee,X.x,X.y,X.z,De,Ue,Ne,ze,$e,ht),R.pixelStorei(R.UNPACK_ROW_LENGTH,Xe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ke),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ai),ee===0&&G.generateMipmaps&&R.generateMipmap(ke),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?V.setTextureCube(C,0):C.isData3DTexture?V.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?V.setTexture2DArray(C,0):V.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){E=0,v=0,M=null,Ce.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?Yi:rm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yi?Be:Bn}}class Hy extends Am{}Hy.prototype.isWebGL1Renderer=!0;class Gy extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $y extends kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=om,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ch={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class ky{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null}}}const Wy=new ky;class Rm{constructor(e){this.manager=e!==void 0?e:Wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xn={};class Xy extends Error{constructor(e,n){super(e),this.response=n}}class qy extends Rm{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ch.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:n,onProgress:i,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=Xn[e],u=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:E,value:v})=>{if(E)p.close();else{g+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let b=0,w=f.length;b<w;b++){const D=f[b];D.onProgress&&D.onProgress(M)}p.enqueue(v),y()}})}}});return new Response(m)}else throw new Xy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{ch.add(e,l);const f=Xn[e];delete Xn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const f=Xn[e];if(f===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cm extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const pc=new _t,lh=new W,fh=new W;class Yy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),n.position.copy(lh),fh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fh),n.updateMatrixWorld(),pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jy extends Yy{constructor(){super(new Sm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zy extends Cm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new jy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ky extends Cm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);class uh extends Rm{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new qy(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e){function n(l){const f=new DataView(l),u=32/8*3+32/8*3*3+16/8,h=f.getUint32(80,!0);if(80+32/8+h*u===f.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,f,g))return!1;return!0}function i(l,f,u){for(let h=0,d=l.length;h<d;h++)if(l[h]!==f.getUint8(u+h))return!1;return!0}function s(l){const f=new DataView(l),u=f.getUint32(80,!0);let h,d,_,g=!1,m,p,y,E,v;for(let T=0;T<70;T++)f.getUint32(T,!1)==1129270351&&f.getUint8(T+4)==82&&f.getUint8(T+5)==61&&(g=!0,m=new Float32Array(u*3*3),p=f.getUint8(T+6)/255,y=f.getUint8(T+7)/255,E=f.getUint8(T+8)/255,v=f.getUint8(T+9)/255);const M=84,b=12*4+2,w=new ai,D=new Float32Array(u*3*3),x=new Float32Array(u*3*3);for(let T=0;T<u;T++){const I=M+T*b,B=f.getFloat32(I,!0),U=f.getFloat32(I+4,!0),F=f.getFloat32(I+8,!0);if(g){const z=f.getUint16(I+48,!0);z&32768?(h=p,d=y,_=E):(h=(z&31)/31,d=(z>>5&31)/31,_=(z>>10&31)/31)}for(let z=1;z<=3;z++){const H=I+z*12,$=T*3*3+(z-1)*3;D[$]=f.getFloat32(H,!0),D[$+1]=f.getFloat32(H+4,!0),D[$+2]=f.getFloat32(H+8,!0),x[$]=B,x[$+1]=U,x[$+2]=F,g&&(m[$]=h,m[$+1]=d,m[$+2]=_)}}return w.setAttribute("position",new fn(D,3)),w.setAttribute("normal",new fn(x,3)),g&&(w.setAttribute("color",new fn(m,3)),w.hasColors=!0,w.alpha=v),w}function r(l){const f=new ai,u=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let d=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),p=[],y=[],E=new W;let v,M=0,b=0,w=0;for(;(v=u.exec(l))!==null;){b=w;const D=v[0];for(;(v=h.exec(D))!==null;){let I=0,B=0;const U=v[0];for(;(v=m.exec(U))!==null;)E.x=parseFloat(v[1]),E.y=parseFloat(v[2]),E.z=parseFloat(v[3]),B++;for(;(v=g.exec(U))!==null;)p.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),y.push(E.x,E.y,E.z),I++,w++;B!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const x=b,T=w-b;f.addGroup(x,T,M),M++}return f.setAttribute("position",new oi(p,3)),f.setAttribute("normal",new oi(y,3)),f}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const f=new Uint8Array(l.length);for(let u=0;u<l.length;u++)f[u]=l.charCodeAt(u)&255;return f.buffer||f}else return l}const c=a(e);return n(c)?s(c):r(o(e))}}const mc={type:"change"},gc={type:"start"},_c={type:"end"};class Jy extends es{constructor(e,n){super();const i=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:za.ROTATE,MIDDLE:za.DOLLY,RIGHT:za.PAN},this.target=new W;const r=1e-6,o=new W;let a=1,c=s.NONE,l=s.NONE,f=0,u=0,h=0;const d=new W,_=new He,g=new He,m=new W,p=new He,y=new He,E=new He,v=new He,M=[],b={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const R=i.domElement.getBoundingClientRect(),de=i.domElement.ownerDocument.documentElement;i.screen.left=R.left+window.pageXOffset-de.clientLeft,i.screen.top=R.top+window.pageYOffset-de.clientTop,i.screen.width=R.width,i.screen.height=R.height};const w=function(){const R=new He;return function(Se,ue){return R.set((Se-i.screen.left)/i.screen.width,(ue-i.screen.top)/i.screen.height),R}}(),D=function(){const R=new He;return function(Se,ue){return R.set((Se-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-ue))/i.screen.width),R}}();this.rotateCamera=function(){const R=new W,de=new Xs,Se=new W,ue=new W,Ce=new W,P=new W;return function(){P.set(g.x-_.x,g.y-_.y,0);let V=P.length();V?(d.copy(i.object.position).sub(i.target),Se.copy(d).normalize(),ue.copy(i.object.up).normalize(),Ce.crossVectors(ue,Se).normalize(),ue.setLength(g.y-_.y),Ce.setLength(g.x-_.x),P.copy(ue.add(Ce)),R.crossVectors(P,d).normalize(),V*=i.rotateSpeed,de.setFromAxisAngle(R,V),d.applyQuaternion(de),i.object.up.applyQuaternion(de),m.copy(R),h=V):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),d.copy(i.object.position).sub(i.target),de.setFromAxisAngle(m,h),d.applyQuaternion(de),i.object.up.applyQuaternion(de)),_.copy(g)}}(),this.zoomCamera=function(){let R;c===s.TOUCH_ZOOM_PAN?(R=f/u,f=u,i.object.isPerspectiveCamera?d.multiplyScalar(R):i.object.isOrthographicCamera?(i.object.zoom=bu.clamp(i.object.zoom/R,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(R=1+(y.y-p.y)*i.zoomSpeed,R!==1&&R>0&&(i.object.isPerspectiveCamera?d.multiplyScalar(R):i.object.isOrthographicCamera?(i.object.zoom=bu.clamp(i.object.zoom/R,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(y):p.y+=(y.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const R=new He,de=new W,Se=new W;return function(){if(R.copy(v).sub(E),R.lengthSq()){if(i.object.isOrthographicCamera){const Ce=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,P=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;R.x*=Ce,R.y*=P}R.multiplyScalar(d.length()*i.panSpeed),Se.copy(d).cross(i.object.up).setLength(R.x),Se.add(de.copy(i.object.up).setLength(R.y)),i.object.position.add(Se),i.target.add(Se),i.staticMoving?E.copy(v):E.add(R.subVectors(v,E).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(d.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,d.setLength(i.maxDistance)),p.copy(y)),d.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,d.setLength(i.minDistance)),p.copy(y)))},this.update=function(){d.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,d),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>r&&(i.dispatchEvent(mc),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>r||a!==i.object.zoom)&&(i.dispatchEvent(mc),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=s.NONE,l=s.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),d.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(mc),o.copy(i.object.position),a=i.object.zoom};function x(R){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",I)),j(R),R.pointerType==="touch"?le(R):z(R))}function T(R){i.enabled!==!1&&(R.pointerType==="touch"?ie(R):H(R))}function I(R){i.enabled!==!1&&(R.pointerType==="touch"?we(R):$(),re(R),M.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",I)))}function B(R){re(R)}function U(R){i.enabled!==!1&&(window.removeEventListener("keydown",U),l===s.NONE&&(R.code===i.keys[s.ROTATE]&&!i.noRotate?l=s.ROTATE:R.code===i.keys[s.ZOOM]&&!i.noZoom?l=s.ZOOM:R.code===i.keys[s.PAN]&&!i.noPan&&(l=s.PAN)))}function F(){i.enabled!==!1&&(l=s.NONE,window.addEventListener("keydown",U))}function z(R){if(c===s.NONE)switch(R.button){case i.mouseButtons.LEFT:c=s.ROTATE;break;case i.mouseButtons.MIDDLE:c=s.ZOOM;break;case i.mouseButtons.RIGHT:c=s.PAN;break}const de=l!==s.NONE?l:c;de===s.ROTATE&&!i.noRotate?(g.copy(D(R.pageX,R.pageY)),_.copy(g)):de===s.ZOOM&&!i.noZoom?(p.copy(w(R.pageX,R.pageY)),y.copy(p)):de===s.PAN&&!i.noPan&&(E.copy(w(R.pageX,R.pageY)),v.copy(E)),i.dispatchEvent(gc)}function H(R){const de=l!==s.NONE?l:c;de===s.ROTATE&&!i.noRotate?(_.copy(g),g.copy(D(R.pageX,R.pageY))):de===s.ZOOM&&!i.noZoom?y.copy(w(R.pageX,R.pageY)):de===s.PAN&&!i.noPan&&v.copy(w(R.pageX,R.pageY))}function $(){c=s.NONE,i.dispatchEvent(_c)}function k(R){if(i.enabled!==!1&&i.noZoom!==!0){switch(R.preventDefault(),R.deltaMode){case 2:p.y-=R.deltaY*.025;break;case 1:p.y-=R.deltaY*.01;break;default:p.y-=R.deltaY*25e-5;break}i.dispatchEvent(gc),i.dispatchEvent(_c)}}function le(R){switch(me(R),M.length){case 1:c=s.TOUCH_ROTATE,g.copy(D(M[0].pageX,M[0].pageY)),_.copy(g);break;default:c=s.TOUCH_ZOOM_PAN;const de=M[0].pageX-M[1].pageX,Se=M[0].pageY-M[1].pageY;u=f=Math.sqrt(de*de+Se*Se);const ue=(M[0].pageX+M[1].pageX)/2,Ce=(M[0].pageY+M[1].pageY)/2;E.copy(w(ue,Ce)),v.copy(E);break}i.dispatchEvent(gc)}function ie(R){switch(me(R),M.length){case 1:_.copy(g),g.copy(D(R.pageX,R.pageY));break;default:const de=ve(R),Se=R.pageX-de.x,ue=R.pageY-de.y;u=Math.sqrt(Se*Se+ue*ue);const Ce=(R.pageX+de.x)/2,P=(R.pageY+de.y)/2;v.copy(w(Ce,P));break}}function we(R){switch(M.length){case 0:c=s.NONE;break;case 1:c=s.TOUCH_ROTATE,g.copy(D(R.pageX,R.pageY)),_.copy(g);break;case 2:c=s.TOUCH_ZOOM_PAN;for(let de=0;de<M.length;de++)if(M[de].pointerId!==R.pointerId){const Se=b[M[de].pointerId];g.copy(D(Se.x,Se.y)),_.copy(g);break}break}i.dispatchEvent(_c)}function ce(R){i.enabled!==!1&&R.preventDefault()}function j(R){M.push(R)}function re(R){delete b[R.pointerId];for(let de=0;de<M.length;de++)if(M[de].pointerId==R.pointerId){M.splice(de,1);return}}function me(R){let de=b[R.pointerId];de===void 0&&(de=new He,b[R.pointerId]=de),de.set(R.pageX,R.pageY)}function ve(R){const de=R.pointerId===M[0].pointerId?M[1]:M[0];return b[de.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ce),i.domElement.removeEventListener("pointerdown",x),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",k),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",I),window.removeEventListener("keydown",U),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",ce),this.domElement.addEventListener("pointerdown",x),this.domElement.addEventListener("pointercancel",B),this.domElement.addEventListener("wheel",k,{passive:!1}),window.addEventListener("keydown",U),window.addEventListener("keyup",F),this.handleResize(),this.update()}}const Qy=1e-5,eb=1e-13,tb=Math.PI*2;var Qe={EPS:Qy,NEPS:eb,TAU:tb};const nb=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);var ib=nb;const sb=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);var rb=sb;const ob=t=>Math.atan2(t[1],t[0]);var Yl=ob,ab=Yl;const cb=Yl,lb=t=>cb(t)*57.29577951308232;var fb=lb;const ub=()=>[0,0];var da=ub;const hb=da,db=t=>{const e=hb();return e[0]=t[0],e[1]=t[1],e};var pb=db;const mb=(t,e)=>(t[0]=e[0],t[1]=e[1],t);var gb=mb;const _b=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);var vb=_b;const xb=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};var Mb=xb;const Eb=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);var Sb=Eb;const yb=(t,e)=>t[0]*e[0]+t[1]*e[1];var bb=yb;const Tb=(t,e)=>t[0]===e[0]&&t[1]===e[1];var wb=Tb;const{NEPS:Ab}=Qe,Pm=t=>Math.abs(t)<Ab?0:t,Rb=t=>Pm(Math.sin(t)),Cb=t=>Pm(Math.cos(t));var qt={sin:Rb,cos:Cb};const{sin:Pb,cos:Lb}=qt,Db=(t,e)=>(t[0]=Lb(e),t[1]=Pb(e),t);var Lm=Db;const Ub=Lm,Ib=(t,e)=>Ub(t,e*.017453292519943295);var Nb=Ib;const Fb=(t,e)=>(t[0]=e,t[1]=e,t);var Ob=Fb;const Bb=da,zb=(t,e)=>{const n=Bb();return n[0]=t,n[1]=e,n};var Vb=zb;const Hb=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);var Gb=Hb;const $b=(t,e,n,i)=>{const s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};var kb=$b;const Wb=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);var Xb=Wb;const qb=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);var Yb=qb;const jb=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);var Zb=jb;const Kb=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);var Jb=Kb;const Qb=(t,e,n,i)=>{const s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};var Dm=Qb;const{TAU:eT}=Qe,tT=da,nT=Dm,iT=(t,e)=>nT(t,e,tT(),eT/4);var sT=iT;const rT=(t,e)=>{const n=e[0],i=e[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};var oT=rT;const aT=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);var cT=aT;const lT=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);var fT=lT;const uT=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};var hT=uT;const dT=t=>{const e=t[0],n=t[1];return e*e+n*n};var pT=dT;const mT=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);var gT=mT;const _T=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;var vT=_T;const xT=(t,e,n)=>{const i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};var MT=xT,We={abs:ib,add:rb,angle:ab,angleDegrees:fb,angleRadians:Yl,clone:pb,copy:gb,create:da,cross:vb,distance:Mb,divide:Sb,dot:bb,equals:wb,fromAngleDegrees:Nb,fromAngleRadians:Lm,fromScalar:Ob,fromValues:Vb,length:Gb,lerp:kb,max:Xb,min:Yb,multiply:Zb,negate:Jb,normal:sT,normalize:oT,rotate:Dm,scale:cT,snap:fT,squaredDistance:hT,squaredLength:pT,subtract:gT,toString:vT,transform:MT};const ET=t=>Object.assign({},t);var jl=ET;const{EPS:hh}=Qe,ST=We,yT=jl,bT=t=>{if(t.isClosed)return t;const e=yT(t);if(e.isClosed=!0,e.points.length>1){const n=e.points,i=n[0];let s=n[n.length-1];for(;ST.distance(i,s)<hh*hh&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};var Um=bT;const TT=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);var wT=TT;const AT=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var Zl=AT;const RT=Zl,CT=t=>{const e=RT();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};var PT=CT;const LT=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);var Im=LT;const DT=(t,e)=>{const n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=n*a-i*o,E=n*c-s*o,v=n*l-r*o,M=i*c-s*a,b=i*l-r*a,w=s*l-r*c,D=f*g-u*_,x=f*m-h*_,T=f*p-d*_,I=u*m-h*g,B=u*p-d*g,U=h*p-d*m;let F=y*U-E*B+v*I+M*T-b*x+w*D;return F?(F=1/F,t[0]=(a*U-c*B+l*I)*F,t[1]=(s*B-i*U-r*I)*F,t[2]=(g*w-m*b+p*M)*F,t[3]=(h*b-u*w-d*M)*F,t[4]=(c*T-o*U-l*x)*F,t[5]=(n*U-s*T+r*x)*F,t[6]=(m*v-_*w-p*E)*F,t[7]=(f*w-h*v+d*E)*F,t[8]=(o*B-a*T+l*D)*F,t[9]=(i*T-n*B-r*D)*F,t[10]=(_*b-g*v+p*y)*F,t[11]=(u*v-f*b-d*y)*F,t[12]=(a*x-o*I-c*D)*F,t[13]=(n*I-i*x+s*D)*F,t[14]=(g*E-_*M-m*y)*F,t[15]=(f*M-u*E+h*y)*F,t):null};var UT=DT;const IT=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];var NT=IT;const FT=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var Nm=FT;const{EPS:OT}=Qe,{sin:BT,cos:zT}=qt,VT=Nm,HT=(t,e,n)=>{let[i,s,r]=n;const o=i*i+s*s+r*r;if(Math.abs(o)<OT)return VT(t);const a=1/Math.sqrt(o);i*=a,s*=a,r*=a;const c=BT(e),l=zT(e),f=1-l;return t[0]=i*i*f+l,t[1]=s*i*f+r*c,t[2]=r*i*f-s*c,t[3]=0,t[4]=i*s*f-r*c,t[5]=s*s*f+l,t[6]=r*s*f+i*c,t[7]=0,t[8]=i*r*f+s*c,t[9]=s*r*f-i*c,t[10]=r*r*f+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Fm=HT;const GT=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var $T=GT;const{sin:vc,cos:xc}=qt,kT=(t,e,n,i)=>{const s=vc(e),r=xc(e),o=vc(n),a=xc(n),c=vc(i),l=xc(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=c*o*r-l*s,t[5]=l*r+c*o*s,t[6]=c*a,t[7]=0,t[8]=c*s+l*o*r,t[9]=l*o*s-c*r,t[10]=l*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var WT=kT;const XT=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);var qT=XT;const YT=Zl,jT=(t,e,n,i,s,r,o,a,c,l,f,u,h,d,_,g)=>{const m=YT();return m[0]=t,m[1]=e,m[2]=n,m[3]=i,m[4]=s,m[5]=r,m[6]=o,m[7]=a,m[8]=c,m[9]=l,m[10]=f,m[11]=u,m[12]=h,m[13]=d,m[14]=_,m[15]=g,m};var ZT=jT;const KT=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);var Om=KT;const JT=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);var Bm=JT;const QT=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];var pa=QT;const ew=pa,tw=(t,e)=>{const n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],c=Math.sqrt(n*n+i*i+s*s),l=Math.sqrt(r*r+o*o+a*a),f=c*l,u=f&&ew(t,e)/f;return Math.acos(Math.min(Math.max(u,-1),1))};var nw=tw;const iw=()=>[0,0,0];var ma=iw;const sw=ma,rw=t=>{const e=sw();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var ow=rw;const aw=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var zm=aw;const cw=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],c=n[2];return t[0]=s*c-r*a,t[1]=r*o-i*c,t[2]=i*a-s*o,t};var Xr=cw;const lw=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};var Vm=lw;const fw=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);var uw=fw;const hw=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var dw=hw;const pw=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);var mw=pw;const gw=ma,_w=(t,e,n)=>{const i=gw();return i[0]=t,i[1]=e,i[2]=n,i};var vw=_w;const xw=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);var Mw=xw;const Ew=t=>{const e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};var Hm=Ew;const Sw=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);var yw=Sw;const bw=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);var Tw=bw;const ww=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);var Aw=ww;const Rw=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);var Cw=Rw;const Pw=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);var Lw=Pw;const Dw=(t,e)=>{const n=e[0],i=e[1],s=e[2];let r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};var Kl=Dw;const Uw=Om,Iw=ma,Nw=Xr,Fw=(t,e)=>{const n=Uw(Iw(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return Nw(t,e,[i,s,r])};var Ow=Fw;const Bw=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var zw=Bw;const Vw=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var Hw=Vw;const Gw=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};var $w=Gw;const kw=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);var Gm=kw;const Ww=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);var Xw=Ww;const qw=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};var $m=qw;const Yw=t=>{const e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};var km=Yw;const jw=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);var ga=jw;const Zw=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;var Kw=Zw;const Jw=(t,e,n)=>{const i=e[0],s=e[1],r=e[2];let o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};var Qw=Jw,Ge={abs:Om,add:Bm,angle:nw,clone:ow,copy:zm,create:ma,cross:Xr,distance:Vm,divide:uw,dot:pa,equals:dw,fromScalar:mw,fromValues:vw,fromVec2:Mw,length:Hm,lerp:yw,max:Tw,min:Aw,multiply:Cw,negate:Lw,normalize:Kl,orthogonal:Ow,rotateX:zw,rotateY:Hw,rotateZ:$w,scale:Gm,snap:Xw,squaredDistance:$m,squaredLength:km,subtract:ga,toString:Kw,transform:Qw};const mi=Ge,eA=Fm,tA=(t,e,n)=>{const i=mi.normalize(mi.create(),e),s=mi.normalize(mi.create(),n),r=mi.cross(mi.create(),s,i),o=mi.dot(s,i);if(o===-1)return eA(t,Math.PI,mi.orthogonal(r,i));const a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var nA=tA;const{sin:iA,cos:sA}=qt,rA=(t,e)=>{const n=iA(e),i=sA(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var oA=rA;const{sin:aA,cos:cA}=qt,lA=(t,e)=>{const n=aA(e),i=cA(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var fA=lA;const{sin:uA,cos:hA}=qt,dA=(t,e)=>{const n=uA(e),i=hA(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var pA=dA;const mA=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;var gA=mA;const _A=t=>qn(t[1])&&qn(t[2])&&qn(t[3])&&qn(t[4])&&qn(t[6])&&qn(t[7])&&qn(t[8])&&qn(t[9])&&qn(t[11])&&t[15]===1,qn=t=>Math.abs(t)<Number.EPSILON;var vA=_A;const xA=t=>{const e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};var MA=xA;const EA=(t,e)=>{const[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};var SA=EA;const yA=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],c=e[5],l=e[6],f=e[7],u=e[8],h=e[9],d=e[10],_=e[11],g=e[12],m=e[13],p=e[14],y=e[15];let E=n[0],v=n[1],M=n[2],b=n[3];return t[0]=E*i+v*a+M*u+b*g,t[1]=E*s+v*c+M*h+b*m,t[2]=E*r+v*l+M*d+b*p,t[3]=E*o+v*f+M*_+b*y,E=n[4],v=n[5],M=n[6],b=n[7],t[4]=E*i+v*a+M*u+b*g,t[5]=E*s+v*c+M*h+b*m,t[6]=E*r+v*l+M*d+b*p,t[7]=E*o+v*f+M*_+b*y,E=n[8],v=n[9],M=n[10],b=n[11],t[8]=E*i+v*a+M*u+b*g,t[9]=E*s+v*c+M*h+b*m,t[10]=E*r+v*l+M*d+b*p,t[11]=E*o+v*f+M*_+b*y,E=n[12],v=n[13],M=n[14],b=n[15],t[12]=E*i+v*a+M*u+b*g,t[13]=E*s+v*c+M*h+b*m,t[14]=E*r+v*l+M*d+b*p,t[15]=E*o+v*f+M*_+b*y,t};var bA=yA;const{EPS:TA}=Qe,{sin:wA,cos:AA}=qt,RA=Im,CA=(t,e,n,i)=>{let[s,r,o]=i;const a=s*s+r*r+o*o;if(Math.abs(a)<TA)return RA(t,e);const c=1/Math.sqrt(a);s*=c,r*=c,o*=c;const l=wA(n),f=AA(n),u=1-f,h=e[0],d=e[1],_=e[2],g=e[3],m=e[4],p=e[5],y=e[6],E=e[7],v=e[8],M=e[9],b=e[10],w=e[11],D=s*s*u+f,x=r*s*u+o*l,T=o*s*u-r*l,I=s*r*u-o*l,B=r*r*u+f,U=o*r*u+s*l,F=s*o*u+r*l,z=r*o*u-s*l,H=o*o*u+f;return t[0]=h*D+m*x+v*T,t[1]=d*D+p*x+M*T,t[2]=_*D+y*x+b*T,t[3]=g*D+E*x+w*T,t[4]=h*I+m*B+v*U,t[5]=d*I+p*B+M*U,t[6]=_*I+y*B+b*U,t[7]=g*I+E*B+w*U,t[8]=h*F+m*z+v*H,t[9]=d*F+p*z+M*H,t[10]=_*F+y*z+b*H,t[11]=g*F+E*z+w*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};var PA=CA;const{sin:LA,cos:DA}=qt,UA=(t,e,n)=>{const i=LA(n),s=DA(n),r=e[4],o=e[5],a=e[6],c=e[7],l=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+l*i,t[5]=o*s+f*i,t[6]=a*s+u*i,t[7]=c*s+h*i,t[8]=l*s-r*i,t[9]=f*s-o*i,t[10]=u*s-a*i,t[11]=h*s-c*i,t};var IA=UA;const{sin:NA,cos:FA}=qt,OA=(t,e,n)=>{const i=NA(n),s=FA(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-l*i,t[1]=o*s-f*i,t[2]=a*s-u*i,t[3]=c*s-h*i,t[8]=r*i+l*s,t[9]=o*i+f*s,t[10]=a*i+u*s,t[11]=c*i+h*s,t};var BA=OA;const{sin:zA,cos:VA}=qt,HA=(t,e,n)=>{const i=zA(n),s=VA(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[4],f=e[5],u=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+l*i,t[1]=o*s+f*i,t[2]=a*s+u*i,t[3]=c*s+h*i,t[4]=l*s-r*i,t[5]=f*s-o*i,t[6]=u*s-a*i,t[7]=h*s-c*i,t};var GA=HA;const $A=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};var kA=$A;const WA=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);var XA=WA;const qA=t=>t.map(e=>e.toFixed(7)).toString();var YA=qA;const jA=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];let o,a,c,l,f,u,h,d,_,g,m,p;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],c=e[2],l=e[3],f=e[4],u=e[5],h=e[6],d=e[7],_=e[8],g=e[9],m=e[10],p=e[11],t[0]=o,t[1]=a,t[2]=c,t[3]=l,t[4]=f,t[5]=u,t[6]=h,t[7]=d,t[8]=_,t[9]=g,t[10]=m,t[11]=p,t[12]=o*i+f*s+_*r+e[12],t[13]=a*i+u*s+g*r+e[13],t[14]=c*i+h*s+m*r+e[14],t[15]=l*i+d*s+p*r+e[15]),t};var ZA=jA,ut={add:wT,clone:PT,copy:Im,create:Zl,invert:UT,equals:NT,fromRotation:Fm,fromScaling:$T,fromTaitBryanRotation:WT,fromTranslation:qT,fromValues:ZT,fromVectorRotation:nA,fromXRotation:oA,fromYRotation:fA,fromZRotation:pA,identity:Nm,isIdentity:gA,isOnlyTransformScale:vA,isMirroring:MA,mirrorByPlane:SA,multiply:bA,rotate:PA,rotateX:IA,rotateY:BA,rotateZ:GA,scale:kA,subtract:XA,toString:YA,translate:ZA};const KA=ut,JA=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:KA.create()});var _a=JA;const{EPS:dh}=Qe,ph=We,QA=Um,e2=_a,t2=(t,e)=>{const n={closed:!1};let{closed:i}=Object.assign({},n,t),s=e2();if(s.points=e.map(r=>ph.clone(r)),s.points.length>1){const r=s.points[0],o=s.points[s.points.length-1];ph.distance(r,o)<dh*dh&&(i=!0)}return i===!0&&(s=QA(s)),s};var Jl=t2;const mh=ut,gh=We,n2=t=>(mh.isIdentity(t.transforms)||(t.points=t.points.map(e=>gh.transform(gh.create(),e,t.transforms)),t.transforms=mh.create()),t);var i2=n2;const s2=i2,r2=t=>s2(t).points;var Ys=r2;const{TAU:yo}=Qe,pt=We,o2=Jl,a2=Ys,c2=(t,e)=>{const n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:c}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=pt.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(c<4)throw new Error("segments must be four or more");const l=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");const f=a2(e);if(f.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let u=s[0],h=s[1];const d=f[f.length-1];u=Math.round(u*l)/l,h=Math.round(h*l)/l,i=pt.fromValues(Math.round(i[0]*l)/l,Math.round(i[1]*l)/l);const _=!o;let g=[];if(u===0||h===0)g.push(i);else{u=Math.abs(u),h=Math.abs(h);const p=r,y=Math.cos(p),E=Math.sin(p),v=pt.subtract(pt.create(),d,i);pt.scale(v,v,.5);const M=Math.round((y*v[0]+E*v[1])*l)/l,b=Math.round((-E*v[0]+y*v[1])*l)/l,w=pt.fromValues(M,b),D=w[0]*w[0]/(u*u)+w[1]*w[1]/(h*h);if(D>1){const k=Math.sqrt(D);u*=k,h*=k,u=Math.round(u*l)/l,h=Math.round(h*l)/l}let x=Math.sqrt((u*u*h*h-u*u*w[1]*w[1]-h*h*w[0]*w[0])/(u*u*w[1]*w[1]+h*h*w[0]*w[0]));_===a&&(x=-x);const T=pt.fromValues(u*w[1]/h,-h*w[0]/u);pt.scale(T,T,x);let I=pt.fromValues(y*T[0]-E*T[1],E*T[0]+y*T[1]);I=pt.add(I,I,pt.scale(pt.create(),pt.add(pt.create(),d,i),.5));const B=pt.fromValues((w[0]-T[0])/u,(w[1]-T[1])/h),U=pt.fromValues((-w[0]-T[0])/u,(-w[1]-T[1])/h),F=pt.angleRadians(B);let H=pt.angleRadians(U)-F;H=H%yo,!_&&H>0?H-=yo:_&&H<0&&(H+=yo);let $=Math.ceil(Math.abs(H)/yo*c)+1;$<1&&($=1);for(let k=1;k<$;k++){const le=F+k/$*H,ie=Math.cos(le),we=Math.sin(le),ce=pt.fromValues(y*u*ie-E*h*we,E*u*ie+y*h*we);pt.add(ce,ce,I),g.push(ce)}$&&g.push(t.endpoint)}return g=f.concat(g),o2({},g)};var l2=c2;const f2=Jl,u2=Ys,{equals:h2}=We,d2=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{const r=u2(i).slice();if(n.length>0&&r.length>0&&h2(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),f2({closed:e},n)};var Wm=d2;const p2=Wm,m2=_a,g2=(t,e)=>p2(e,m2(t));var Xm=g2;const{TAU:_2}=Qe,en=We,v2=We,x2=Xm,M2=Ys,E2=(t,e)=>{const n={segments:16};let{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");const r=M2(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let b=r[r.length-2];if("lastBezierControlPoint"in e&&(b=e.lastBezierControlPoint),!Array.isArray(b))throw new Error("the given path must contain TWO or more points if given a null control point");const w=en.scale(en.create(),r[r.length-1],2);en.subtract(w,w,b),i[0]=w}i.unshift(r[r.length-1]);const a=i.length-1,c=[];let l=1;for(let b=0;b<=a;++b)b>0&&(l*=b),c.push(l);const f=[];for(let b=0;b<=a;++b){const w=c[a]/(c[b]*c[a-b]);f.push(w)}const u=en.create(),h=en.create(),d=v2.create(),_=b=>{let w=1,D=Math.pow(1-b,a);const x=b!==1?1/(1-b):1,T=en.create();for(let I=0;I<=a;++I){I===a&&(D=1);const B=f[I]*w*D,U=en.scale(u,i[I],B);en.add(T,T,U),w*=b,D*=x}return T},g=[],m=[],p=a+1;for(let b=0;b<p;++b){const w=b/(p-1),D=_(w);g.push(D),m.push(w)}let y=1;const E=_2/s,v=Math.sin(E);for(;y<g.length-1;){const b=en.subtract(u,g[y],g[y-1]);en.normalize(b,b);const w=en.subtract(h,g[y+1],g[y]);en.normalize(w,w);const D=en.cross(d,b,w);if(Math.abs(D[2])>v){const x=m[y-1],T=m[y+1],I=x+(T-x)*1/3,B=x+(T-x)*2/3,U=_(I),F=_(B);g.splice(y,1,U,F),m.splice(y,1,I,B),y--,y<1&&(y=1)}else++y}g.shift();const M=x2(g,e);return M.lastBezierControlPoint=i[i.length-2],M};var S2=E2;const y2=We,_h=Ys,b2=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;const n=_h(t),i=_h(e),s=n.length;let r=0;do{let o=!1;for(let a=0;a<s;a++)if(!y2.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};var T2=b2;const w2=ut,A2=We,R2=_a,C2=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");const e=R2();e.transforms=w2.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){const i=A2.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};var P2=C2;const L2=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);var qm=L2;const D2=jl,U2=t=>{const e=D2(t);return e.points=t.points.slice().reverse(),e};var I2=U2;const N2=We,F2=Ys,O2=t=>{const e=F2(t);let n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+N2.toString(i)+`,
`}),n+=`]
`,n};var B2=O2;const z2=t=>{const e=t.points,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){const o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};var V2=z2;const vh=ut,H2=(t,e)=>{const n=vh.multiply(vh.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var G2=H2;const $2=We,k2=qm,W2=t=>{if(!k2(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if($2.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};var X2=W2,li={appendArc:l2,appendBezier:S2,appendPoints:Xm,clone:jl,close:Um,concat:Wm,create:_a,equals:T2,fromPoints:Jl,fromCompactBinary:P2,isA:qm,reverse:I2,toPoints:Ys,toString:B2,toCompactBinary:V2,transform:G2,validate:X2};const q2=(t,e)=>Array.isArray(t)&&t.length>=e?t.every(n=>Number.isFinite(n)):!1,Y2=(t,e)=>Number.isFinite(t)&&t>e,j2=(t,e)=>Number.isFinite(t)&&t>=e;var Mt={isNumberArray:q2,isGT:Y2,isGTE:j2};const{EPS:xh,TAU:Ms}=Qe,Yn=We,Z2=li,{isGT:K2,isGTE:Mc,isNumberArray:J2}=Mt,Q2=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:Ms,makeTangent:!1,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,makeTangent:o,segments:a}=Object.assign({},e,t);if(!J2(n,2))throw new Error("center must be an array of X and Y values");if(!K2(i,0))throw new Error("radius must be greater than zero");if(!Mc(s,0))throw new Error("startAngle must be positive");if(!Mc(r,0))throw new Error("endAngle must be positive");if(!Mc(a,4))throw new Error("segments must be four or more");s=s%Ms,r=r%Ms;let c=Ms;s<r&&(c=r-s),s>r&&(c=r+(Ms-s));const l=Math.acos((i*i+i*i-xh*xh)/(2*i*i)),f=Yn.clone(n);let u;const h=[];if(c<l)u=Yn.fromAngleRadians(Yn.create(),s),Yn.scale(u,u,i),Yn.add(u,u,f),h.push(u);else{const d=Math.max(1,Math.floor(a*(c/Ms)))+1;let _=d*.5/c;_>.25&&(_=.25);const g=o?d+2:d;for(let m=0;m<=g;m++){let p=m;o&&(p=(m-1)*(d-2*_)/d+_,p<0&&(p=0),p>d&&(p=d));const y=s+p*(c/d);u=Yn.fromAngleRadians(Yn.create(),y),Yn.scale(u,u,i),Yn.add(u,u,f),h.push(u)}}return Z2.fromPoints({closed:!1},h)};var eR=Q2;const tR=t=>Object.assign({},t);var nR=tR;const iR=ut,sR=t=>(t===void 0&&(t=[]),{sides:t,transforms:iR.create()});var va=sR;const Ec=We,rR=va,oR=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");Ec.equals(t[0],t[e-1])&&--e;const n=[];let i=t[e-1];for(let s=0;s<e;s++){const r=t[s];n.push([Ec.clone(i),Ec.clone(r)]),i=r}return rR(n)};var aR=oR;const cR=ut,Mh=We,lR=va,fR=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");const e=lR();e.transforms=cR.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){const i=Mh.fromValues(t[n+0],t[n+1]),s=Mh.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var uR=fR;const hR=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);var Ym=hR;const Eh=ut,bo=We,dR=t=>(Eh.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{const n=bo.transform(bo.create(),e[0],t.transforms),i=bo.transform(bo.create(),e[1],t.transforms);return[n,i]}),t.transforms=Eh.create()),t);var pR=dR;const mR=pR,gR=t=>mR(t).sides;var qr=gR;const _R=va,vR=qr,xR=t=>{const n=vR(t).map(i=>[i[1],i[0]]);return n.reverse(),_R(n)};var jm=xR;const rr=We,MR=qr,ER=t=>{const e=new Map,n=i=>{const s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},SR=t=>{const e=new Map;return ER(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},yR=t=>{const e=SR(MR(t)),n=[];for(;;){let i;for(const[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;const s=[],r=i[0];for(;;){s.push(i[0]);const o=i[1];if(o===r)break;const a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);const c=bR(i,a);a.length===0&&e.delete(o),i=c}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},bR=(t,e)=>{if(e.length===1)return e.pop();const n=rr.create(),i=rr.angleDegrees(rr.subtract(n,t[1],t[0]));let s,r;e.forEach((a,c)=>{let f=rr.angleDegrees(rr.subtract(n,a[1],a[0]))-i;f<-180&&(f+=360),f>=180&&(f-=360),(r===void 0||f>s)&&(r=c,s=f)});const o=e[r];return e.splice(r,1),o};var Zm=yR;const TR=qr,wR=t=>{const n=TR(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};var AR=wR;const Sh=We,RR=qr,CR=t=>{const e=RR(t);let n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+Sh.toString(i[0])+", "+Sh.toString(i[1])+`]
`}),n+=`]
`,n};var PR=CR;const LR=t=>{const e=t.sides,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){const o=r*4+21,a=e[r][0],c=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=c[0],s[o+3]=c[1]}return s};var DR=LR;const yh=ut,UR=jm,IR=(t,e)=>{const n=yh.multiply(yh.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?UR(i):i};var NR=IR;const FR=We,OR=Ym,BR=Zm,zR=t=>{if(!OR(t))throw new Error("invalid geom2 structure");if(BR(t),t.sides.forEach(e=>{if(FR.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};var VR=zR,At={clone:nR,create:va,fromPoints:aR,fromCompactBinary:uR,isA:Ym,reverse:jm,toOutlines:Zm,toPoints:AR,toSides:qr,toString:PR,toCompactBinary:DR,transform:NR,validate:VR};const{EPS:bh,TAU:gi}=Qe,Sc=We,Th=At,{sin:HR,cos:GR}=qt,{isGTE:yc,isNumberArray:wh}=Mt,$R=t=>{const e={center:[0,0],radius:[1,1],startAngle:0,endAngle:gi,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!wh(n,2))throw new Error("center must be an array of X and Y values");if(!wh(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!yc(s,0))throw new Error("startAngle must be positive");if(!yc(r,0))throw new Error("endAngle must be positive");if(!yc(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return Th.create();s=s%gi,r=r%gi;let a=gi;s<r&&(a=r-s),s>r&&(a=r+(gi-s));const c=Math.min(i[0],i[1]),l=Math.acos((c*c+c*c-bh*bh)/(2*c*c));if(a<l)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/gi));const f=Sc.clone(n),u=a/o,h=[];o=a<gi?o+1:o;for(let d=0;d<o;d++){const _=u*d+s,g=Sc.fromValues(i[0]*GR(_),i[1]*HR(_));Sc.add(g,f,g),h.push(g)}return a<gi&&h.push(f),Th.fromPoints(h)};var Km=$R;const{TAU:kR}=Qe,WR=Km,{isGTE:XR}=Mt,qR=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:kR,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!XR(i,0))throw new Error("radius must be positive");return i=[i,i],WR({center:n,radius:i,startAngle:s,endAngle:r,segments:o})};var Jm=qR;const YR=t=>Object.assign({},t);var jR=YR;const ZR=ut,KR=t=>(t===void 0&&(t=[]),{polygons:t,transforms:ZR.create()});var Yr=KR;const JR=Xr,Ah=ga,Rh=km,QR=(t,e,n)=>{const i=[],s=[],r=[];Ah(i,n,e),Ah(s,t,e);const o=Rh(JR(r,s,i)),a=Rh(i);if(a===0)throw Error("a and b are the same point");return o/a},eC=(t,e,n)=>Math.sqrt(QR(t,e,n));var tC=eC;const nC=Xr,iC=Kl,Ch=ga,sC=(t,e,n,i)=>{const s=[0,0,0];return Ch(t,e,n),Ch(s,n,i),nC(t,t,s),iC(t,t)};var rC=sC;let oC=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};var aC=oC;let cC=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};var lC=cC;const fC=Vm,uC=$m;let hC=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?fC(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?uC(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};var dC=hC;const bc=Bm,pC=zm,mC=Xr,Tc=pa,gC=Hm,_C=Kl,To=Gm,wc=ga,Ac=dC,Qm=0,vC=1,hl=2;let xC=class eg{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=Qm,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){const e=this.edge,n=e.next;let i=n.next;const s=wc([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)pC(o,s),wc(s,i.head().point,e.head().point),bc(this.normal,this.normal,mC(r,o,s)),i=i.next,this.nVertices+=1;this.area=gC(this.normal),this.normal=To(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{const f=s.lengthSquared();f>i&&(n=s,i=f),s=s.next}while(s!==this.edge);const r=n.tail().point,o=n.head().point,a=wc([],o,r),c=Math.sqrt(i);To(a,a,1/c);const l=Tc(this.normal,a);To(a,a,-l),bc(this.normal,this.normal,a),_C(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do bc(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);To(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=Tc(this.normal,this.centroid)}distanceToPlane(e){return Tc(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){const s=n.opposite.face;let r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=hl,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){const i=e.opposite,s=i.face;n.push(s),s.mark=hl;let r=e.prev,o=e.next,a=i.prev,c=i.next;for(;r.opposite.face===s;)r=r.prev,c=c.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let l;for(l=c;l!==a.next;l=l.next)l.face=this;this.edge=o;let f;return f=this.connectHalfEdges(a,o),f&&n.push(f),f=this.connectHalfEdges(r,c),f&&n.push(f),this.computeNormalAndCentroid(),n}collectIndices(){const e=[];let n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){const r=new eg,o=new Ac(e,r),a=new Ac(n,r),c=new Ac(i,r);return o.next=c.prev=a,a.next=o.prev=c,c.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};var MC={VISIBLE:Qm,NON_CONVEX:vC,DELETED:hl,Face:xC};const Rc=pa,EC=tC,SC=rC,Ph=aC,yC=lC,{Face:jn,VISIBLE:Es,NON_CONVEX:Lh,DELETED:bC}=MC,TC=1,Dh=2;let wC=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new Ph,this.unclaimed=new Ph,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new yC(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){const a=e[o];if(a.mark===Es){const c=a.distanceToPlane(i.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){const e=[],n=[],i=[],s=[];let r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){const a=this.vertices[r],c=a.point;for(o=0;o<3;o+=1)c[o]<e[o]&&(e[o]=c[o],i[o]=a);for(o=0;o<3;o+=1)c[o]>n[o]&&(n[o]=c[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){const e=this.vertices,[n,i]=this.computeExtremes();let s,r,o,a,c=0,l=0;for(o=0;o<3;o+=1){const g=i[o].point[o]-n[o].point[o];g>c&&(c=g,l=o)}const f=n[l],u=i[l];for(c=0,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u){const m=EC(g.point,f.point,u.point);m>c&&(c=m,s=g)}}const h=SC([],f.point,u.point,s.point),d=Rc(f.point,h);for(c=-1,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u&&g!==s){const m=Math.abs(Rc(h,g.point)-d);m>c&&(c=m,r=g)}}const _=[];if(Rc(r.point,h)-d<0)for(_.push(jn.createTriangle(f,u,s),jn.createTriangle(r,u,f),jn.createTriangle(r,s,u),jn.createTriangle(r,f,s)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge(g)),_[o+1].getEdge(1).setOpposite(_[g+1].getEdge(0))}else for(_.push(jn.createTriangle(f,s,u),jn.createTriangle(r,f,u),jn.createTriangle(r,u,s),jn.createTriangle(r,s,f)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge((3-o)%3)),_[o+1].getEdge(0).setOpposite(_[g+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(_[o]);for(o=0;o<e.length;o+=1){const g=e[o];if(g!==f&&g!==u&&g!==s&&g!==r){c=this.tolerance;let m;for(a=0;a<4;a+=1){const p=_[a].distanceToPlane(g.point);p>c&&(c=p,m=_[a])}m&&this.addVertexToFace(g,m)}}}reindexFaceAndVertices(){const e=[];for(let n=0;n<this.faces.length;n+=1){const i=this.faces[n];i.mark===Es&&e.push(i)}this.faces=e}collectFaces(e){const n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==Es)throw Error("attempt to include a destroyed face in the hull");const s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0;const s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){const r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=bC;let r;n?r=n.next:r=n=i.getEdge(0);do{const o=r.opposite,a=o.face;a.mark===Es&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){const i=jn.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){const o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");const o=i.opposite.face;let a=!1;if(n===Dh?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){const c=e.mergeAdjacentFaces(i,[]);for(let l=0;l<c.length;l+=1)this.deleteFaceVertices(c[l],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=Lh),!1}addVertexToHull(e){const n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Es)for(;this.doAdjacentMerge(s,TC););}for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Lh)for(s.mark=Es;this.doAdjacentMerge(s,Dh););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};var AC=wC;const RC=AC,CC=(t,e={})=>{const n=new RC(t);return n.build(),n.collectFaces(e.skipTriangulation)};var PC=CC;const LC=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var js=LC;const DC=js,UC=Ge,IC=(...t)=>{let e,n;return t.length===1?(e=DC(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>UC.clone(i)),e};var NC=IC;const FC=Ge,OC=js,BC=t=>{const e=t.map(n=>FC.clone(n));return OC(e)};var zC=BC;const VC=js,HC=(t,e)=>{const n=VC(t);return n.plane=e,n};var GC=HC;const $C=()=>[0,0,0,0];var xa=$C;const kC=xa,WC=t=>{const e=kC();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};var tg=WC;const XC=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);var ng=XC;const qC=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];var ig=qC;const YC=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);var sg=YC;const Cc=Ge,jC=(t,e,n)=>{const i=Cc.normalize(Cc.create(),e),s=Cc.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};var rg=jC;const ZC=xa,KC=(t,e,n,i)=>{const s=ZC();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};var og=KC;const tn=Ge,JC=rg,QC=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;const n=e.length;e.forEach(d=>{tn.add(t,t,d)}),tn.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,c=0;const l=tn.create();e.forEach(d=>{tn.subtract(l,d,t),i+=l[0]*l[0],s+=l[0]*l[1],r+=l[0]*l[2],o+=l[1]*l[1],a+=l[1]*l[2],c+=l[2]*l[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,c/=n,l[0]=0,l[1]=0,l[2]=0;const f=tn.create();let u=o*c-a*a;f[0]=u,f[1]=r*a-s*c,f[2]=s*a-r*o;let h=u*u;return tn.add(l,l,tn.scale(f,f,h)),u=i*c-r*r,f[0]=r*a-s*c,f[1]=u,f[2]=s*r-a*i,h=u*u,tn.dot(l,f)<0&&(h=-h),tn.add(l,l,tn.scale(f,f,h)),u=i*o-s*s,f[0]=s*a-r*o,f[1]=s*r-a*i,f[2]=u,h=u*u,tn.dot(l,f)<0&&(h=-h),tn.add(l,l,tn.scale(f,f,h)),JC(t,l,t)};var eP=QC;const Cn=Ge,tP=(t,...e)=>{const n=e.length,i=Cn.create(),s=Cn.create(),r=o=>{const a=e[o],c=e[(o+1)%n],l=e[(o+2)%n];return Cn.subtract(i,c,a),Cn.subtract(s,l,a),Cn.cross(i,i,s),Cn.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?Cn.copy(t,r(0)):(e.forEach((o,a)=>{Cn.add(t,t,r(a))}),Cn.normalize(t,t)),t[3]=Cn.dot(t,e[0]),t};var ag=tP;const{EPS:Pc}=Qe,Ot=Ge,nP=(t,e,n,i)=>{let s=Ot.subtract(Ot.create(),n,e),r=Ot.subtract(Ot.create(),i,e);Ot.length(s)<Pc&&(s=Ot.orthogonal(s,r)),Ot.length(r)<Pc&&(r=Ot.orthogonal(r,s));let o=Ot.cross(Ot.create(),s,r);Ot.length(o)<Pc&&(r=Ot.orthogonal(r,s),o=Ot.cross(o,s,r)),o=Ot.normalize(o,o);const a=Ot.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};var iP=nP;const sP=Ge,rP=(t,e)=>{const n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return sP.fromValues(i,s,r)};var oP=rP;const aP=Ge,cP=(t,e)=>aP.dot(t,e)-t[3];var cg=cP;const lP=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;var lg=lP;const fP=ut,Bt=Ge,uP=ag,hP=sg,dP=(t,e,n)=>{const i=fP.isMirroring(n),s=Bt.orthogonal(Bt.create(),e),r=Bt.cross(s,e,s),o=Bt.cross(Bt.create(),e,r);let a=Bt.fromScalar(Bt.create(),e[3]);Bt.multiply(a,a,e);let c=Bt.add(Bt.create(),a,r),l=Bt.add(Bt.create(),a,o);return a=Bt.transform(a,a,n),c=Bt.transform(c,c,n),l=Bt.transform(l,l,n),uP(t,a,c,l),i&&hP(t,t),t};var pP=dP,Zs={clone:tg,copy:ng,create:xa,equals:ig,flip:sg,fromNormalAndPoint:rg,fromValues:og,fromNoisyPoints:eP,fromPoints:ag,fromPointsRandom:iP,projectionOfPoint:oP,signedDistanceToPoint:cg,toString:lg,transform:pP};const Uh=Zs,mP=js,gP=t=>{const e=t.vertices.slice().reverse(),n=mP(e);return t.plane&&(n.plane=Uh.flip(Uh.create(),t.plane)),n};var _P=gP;const vP=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));var fg=vP;const Ih=Zs,Ni=Ge,xP=t=>MP(t.vertices),MP=t=>{const e=t.length;if(e>2){const n=Ih.fromPoints(Ih.create(),...t);let i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){const o=t[r];if(!EP(i,s,o,n))return!1;i=s,s=o}}return!0},EP=(t,e,n,i)=>{const s=Ni.cross(Ni.create(),Ni.subtract(Ni.create(),e,t),Ni.subtract(Ni.create(),n,e));return Ni.dot(s,i)>=0};var ug=xP;const Nh=Zs,SP=t=>(t.plane||(t.plane=Nh.fromPoints(Nh.create(),...t.vertices)),t.plane);var Ql=SP;const yP=Ql,bP=t=>{const e=t.vertices.length;if(e<3)return 0;const n=t.vertices,i=yP(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let c=0,l=0,f=1,u=2;switch(a){case 1:for(f=1;f<e;f++)l=f-1,u=(f+1)%e,c+=n[f][1]*(n[u][2]-n[l][2]);c+=n[0][1]*(n[1][2]-n[e-1][2]),c/=2*i[0];break;case 2:for(f=1;f<e;f++)l=f-1,u=(f+1)%e,c+=n[f][2]*(n[u][0]-n[l][0]);c+=n[0][2]*(n[1][0]-n[e-1][0]),c/=2*i[1];break;case 3:default:for(f=1;f<e;f++)l=f-1,u=(f+1)%e,c+=n[f][0]*(n[u][1]-n[l][1]);c+=n[0][0]*(n[1][1]-n[e-1][1]),c/=2*i[2];break}return c};var hg=bP;const or=Ge,TP=t=>{const e=t.vertices,n=e.length,i=n===0?or.create():or.clone(e[0]),s=or.clone(i);for(let r=1;r<n;r++)or.min(i,i,e[r]),or.max(s,s,e[r]);return[i,s]};var wP=TP;const AP=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];var RP=AP;const CP=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);var PP=CP;const LP=(t,e,n)=>{const[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};var DP=LP,UP={clone:tg,copy:ng,create:xa,dot:RP,equals:ig,fromScalar:PP,fromValues:og,toString:lg,transform:DP};const IP=UP,Fh=new WeakMap,NP=t=>{const e=Fh.get(t);if(e)return e;const n=t.vertices,i=IP.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,c=s,l=s;n.forEach(d=>{s[0]>d[0]&&(s=d),r[1]>d[1]&&(r=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),c[1]<d[1]&&(c=d),l[2]<d[2]&&(l=d)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+c[1])*.5,i[2]=(o[2]+l[2])*.5;const f=i[0]-a[0],u=i[1]-c[1],h=i[2]-l[2];return i[3]=Math.sqrt(f*f+u*u+h*h),Fh.set(t,i),i};var FP=NP;const Lc=Ge,OP=t=>{let e=0;const n=t.vertices,i=Lc.create();for(let s=0;s<n.length-2;s++)Lc.cross(i,n[s+1],n[s+2]),e+=Lc.dot(n[0],i);return e/=6,e};var BP=OP;const zP=t=>t.vertices;var VP=zP;const HP=Ge,GP=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${HP.toString(n)}, `}),e+="]",e};var $P=GP;const kP=ut,Oh=Ge,WP=js,XP=(t,e)=>{const n=e.vertices.map(i=>Oh.transform(Oh.create(),i,t));return kP.isMirroring(t)&&n.reverse(),WP(n)};var qP=XP;const YP=cg,{NEPS:jP}=Qe,ZP=Ge,KP=fg,JP=ug,QP=hg,eL=Ql,tL=t=>{if(!KP(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(QP(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(ZP.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!JP(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){const e=eL(t);t.vertices.forEach(n=>{const i=Math.abs(YP(e,n));if(i>jP)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};var nL=tL,rt={clone:NC,create:js,fromPoints:zC,fromPointsAndPlane:GC,invert:_P,isA:fg,isConvex:ug,measureArea:hg,measureBoundingBox:wP,measureBoundingSphere:FP,measureSignedVolume:BP,plane:Ql,toPoints:VP,toString:$P,transform:qP,validate:nL};const iL=PC,sL=Yr,rL=rt,oL=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const n=iL(t,{skipTriangulation:!0}).map(i=>{const s=i.map(r=>t[r]);return rL.create(s)});return sL(n)};var aL=oL;const cL=rt,lL=Yr,fL=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const e=t.map((i,s)=>cL.create(i));return lL(e)};var uL=fL;const hL=Ge,dL=ut,pL=rt,mL=Yr,gL=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");const e=mL();e.transforms=dL.clone(t.slice(1,17));const n=t[21];let i=22,s=t.length-n*3;for(;s<t.length;){const r=t[i];i++;const o=[];for(let a=0;a<r;a++)o.push(hL.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(pL.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var _L=gL;const Bh=ut,vL=rt,xL=t=>(Bh.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>vL.transform(t.transforms,e)),t.transforms=Bh.create()),t);var ML=xL;const EL=ML,SL=t=>EL(t).polygons;var Ma=SL;const yL=rt,bL=Yr,TL=Ma,wL=t=>{const n=TL(t).map(i=>yL.invert(i));return bL(n)};var AL=wL;const RL=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);var dg=RL;const CL=rt,PL=Ma,LL=t=>PL(t).map(i=>CL.toPoints(i));var DL=LL;const UL=rt,IL=Ma,NL=t=>{const e=IL(t);let n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+UL.toString(i)+`
`}),n};var FL=NL;const OL=rt,BL=t=>{const e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((l,f)=>l+f.vertices.length,0);let r=[-1,-1,-1,-1];t.color&&(r=t.color);const o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,c=a+i;return e.forEach(l=>{const f=OL.toPoints(l);o[a]=f.length,a++;for(let u=0;u<f.length;u++){const h=f[u];o[c+0]=h[0],o[c+1]=h[1],o[c+2]=h[2],c+=3}}),o};var zL=BL;const zh=ut,VL=(t,e)=>{const n=zh.multiply(zh.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var HL=VL;const GL=rt,$L=dg,kL=t=>{if(!$L(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(GL.validate),WL(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},WL=t=>{const e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{const o=`${s}`,a=`${i[(r+1)%i.length]}`,c=`${o}/${a}`,l=e.has(c)?e.get(c):0;e.set(c,l+1)})});const n=[];if(e.forEach((i,s)=>{const r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};var XL=kL,Rt={clone:jR,create:Yr,fromPointsConvex:aL,fromPoints:uL,fromCompactBinary:_L,invert:AL,isA:dg,toPoints:DL,toPolygons:Ma,toString:FL,toCompactBinary:zL,transform:HL,validate:XL};const Vh=Rt,qL=rt,{isNumberArray:Hh}=Mt,YL=t=>{const e={center:[0,0,0],size:[2,2,2]},{center:n,size:i}=Object.assign({},e,t);if(!Hh(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Hh(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(r=>r>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?Vh.create():Vh.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(r=>{const o=r[0].map(a=>[n[0]+i[0]/2*(2*!!(a&1)-1),n[1]+i[1]/2*(2*!!(a&2)-1),n[2]+i[2]/2*(2*!!(a&4)-1)]);return qL.create(o)}))};var ef=YL;const jL=ef,{isGTE:ZL}=Mt,KL=t=>{const e={center:[0,0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!ZL(i,0))throw new Error("size must be positive");return i=[i,i,i],jL({center:n,size:i})};var JL=KL;const{EPS:Gh,TAU:_i}=Qe,yt=Ge,QL=Rt,e3=rt,{sin:t3,cos:n3}=qt,{isGT:i3,isGTE:Dc,isNumberArray:Uc}=Mt,s3=t=>{const e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:_i,segments:32};let{center:n,height:i,startRadius:s,startAngle:r,endRadius:o,endAngle:a,segments:c}=Object.assign({},e,t);if(!Uc(n,3))throw new Error("center must be an array of X, Y and Z values");if(!i3(i,0))throw new Error("height must be greater then zero");if(!Uc(s,2))throw new Error("startRadius must be an array of X and Y values");if(!s.every(x=>x>=0))throw new Error("startRadius values must be positive");if(!Uc(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(x=>x>=0))throw new Error("endRadius values must be positive");if(o.every(x=>x===0)&&s.every(x=>x===0))throw new Error("at least one radius must be positive");if(!Dc(r,0))throw new Error("startAngle must be positive");if(!Dc(a,0))throw new Error("endAngle must be positive");if(!Dc(c,4))throw new Error("segments must be four or more");r=r%_i,a=a%_i;let l=_i;r<a&&(l=a-r),r>a&&(l=a+(_i-r));const f=Math.min(s[0],s[1],o[0],o[1]),u=Math.acos((f*f+f*f-Gh*Gh)/(2*f*f));if(l<u)throw new Error("startAngle and endAngle do not define a significant rotation");const h=Math.floor(c*(l/_i)),d=yt.fromValues(0,0,-(i/2)),_=yt.fromValues(0,0,i/2),g=yt.subtract(yt.create(),_,d),m=yt.fromValues(1,0,0),p=yt.fromValues(0,1,0),y=yt.create(),E=yt.create(),v=yt.create(),M=(x,T,I)=>{const B=T*l+r;return yt.scale(y,m,I[0]*n3(B)),yt.scale(E,p,I[1]*t3(B)),yt.add(y,y,E),yt.scale(v,g,x),yt.add(v,v,d),yt.add(yt.create(),y,v)},b=(...x)=>{const T=x.map(I=>yt.add(yt.create(),I,n));return e3.create(T)},w=[];for(let x=0;x<h;x++){const T=x/h;let I=(x+1)/h;l===_i&&x===h-1&&(I=0),o[0]===s[0]&&o[1]===s[1]?(w.push(b(d,M(0,I,o),M(0,T,o))),w.push(b(M(0,I,o),M(1,I,o),M(1,T,o),M(0,T,o))),w.push(b(_,M(1,T,o),M(1,I,o)))):(s[0]>0&&s[1]>0&&w.push(b(d,M(0,I,s),M(0,T,s))),(s[0]>0||s[1]>0)&&w.push(b(M(0,T,s),M(0,I,s),M(1,T,o))),o[0]>0&&o[1]>0&&w.push(b(_,M(1,T,o),M(1,I,o))),(o[0]>0||o[1]>0)&&w.push(b(M(1,T,o),M(0,I,s),M(1,I,o))))}return l<_i&&(w.push(b(d,M(0,0,s),_)),w.push(b(M(0,0,s),M(1,0,o),_)),w.push(b(d,_,M(0,1,s))),w.push(b(M(0,1,s),_,M(1,1,o)))),QL.create(w)};var pg=s3;const r3=Rt,o3=pg,{isGTE:a3}=Mt,c3=t=>{const e={center:[0,0,0],height:2,radius:1,segments:32},{center:n,height:i,radius:s,segments:r}=Object.assign({},e,t);if(!a3(s,0))throw new Error("radius must be positive");return i===0||s===0?r3.create():o3({center:n,height:i,startRadius:[s,s],endRadius:[s,s],segments:r})};var mg=c3;const{TAU:$h}=Qe,Re=Ge,kh=Rt,Wh=rt,{sin:Xh,cos:qh}=qt,{isGTE:l3,isNumberArray:Yh}=Mt,f3=t=>{const e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!Yh(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Yh(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(_=>_>=0))throw new Error("radius values must be positive");if(!l3(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return kh.create();const o=Re.scale(Re.create(),Re.normalize(Re.create(),r[0]),i[0]),a=Re.scale(Re.create(),Re.normalize(Re.create(),r[1]),i[1]),c=Re.scale(Re.create(),Re.normalize(Re.create(),r[2]),i[2]),l=Math.round(s/4);let f;const u=[],h=Re.create(),d=Re.create();for(let _=0;_<=s;_++){const g=$h*_/s,m=Re.add(Re.create(),Re.scale(h,o,qh(g)),Re.scale(d,a,Xh(g)));if(_>0){let p,y;for(let E=0;E<=l;E++){const v=$h/4*E/l,M=qh(v),b=Xh(v);if(E>0){let w=[],D;D=Re.subtract(Re.create(),Re.scale(h,f,p),Re.scale(d,c,y)),w.push(Re.add(D,D,n)),D=Re.subtract(Re.create(),Re.scale(h,m,p),Re.scale(d,c,y)),w.push(Re.add(D,D,n)),E<l&&(D=Re.subtract(Re.create(),Re.scale(h,m,M),Re.scale(d,c,b)),w.push(Re.add(D,D,n))),D=Re.subtract(Re.create(),Re.scale(h,f,M),Re.scale(d,c,b)),w.push(Re.add(D,D,n)),u.push(Wh.create(w)),w=[],D=Re.add(Re.create(),Re.scale(h,f,p),Re.scale(d,c,y)),w.push(Re.add(Re.create(),n,D)),D=Re.add(D,Re.scale(h,m,p),Re.scale(d,c,y)),w.push(Re.add(Re.create(),n,D)),E<l&&(D=Re.add(D,Re.scale(h,m,M),Re.scale(d,c,b)),w.push(Re.add(Re.create(),n,D))),D=Re.add(D,Re.scale(h,f,M),Re.scale(d,c,b)),w.push(Re.add(Re.create(),n,D)),w.reverse(),u.push(Wh.create(w))}p=M,y=b}}f=m}return kh.create(u)};var gg=f3;const u3=Rt,h3=rt,{isNumberArray:jh}=Mt,d3=t=>{const e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:n,faces:i,colors:s,orientation:r}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(n.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(s){if(!Array.isArray(s))throw new Error("colors must be an array");if(s.length!==i.length)throw new Error("faces and colors must have the same length")}n.forEach((a,c)=>{if(!jh(a,3))throw new Error(`point ${c} must be an array of X, Y, Z values`)}),i.forEach((a,c)=>{if(a.length<3)throw new Error(`face ${c} must contain 3 or more indexes`);if(!jh(a,a.length))throw new Error(`face ${c} must be an array of numbers`)}),r!=="outward"&&i.forEach(a=>a.reverse());const o=i.map((a,c)=>{const l=h3.create(a.map(f=>n[f]));return s&&s[c]&&(l.color=s[c]),l});return u3.create(o)};var _g=d3;const Zh=ut,Kh=Ge,Jh=Rt,p3=_g,{isGTE:Qh}=Mt,m3=t=>{const e={radius:1,frequency:6};let{radius:n,frequency:i}=Object.assign({},e,t);if(!Qh(n,0))throw new Error("radius must be positive");if(!Qh(i,6))throw new Error("frequency must be six or more");if(n===0)return Jh.create();i=Math.floor(i/6);const s=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],r=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(h,d,_)=>{const g=h[0],m=h[1],p=h[2];let y=_;const E=[],v=[];for(let M=0;M<d;M++)for(let b=0;b<d-M;b++){const w=M/d,D=(M+1)/d,x=b/(d-M),T=(b+1)/(d-M),I=d-M-1?b/(d-M-1):1,B=[];B[0]=a(a(g,m,x),p,w),B[1]=a(a(g,m,T),p,w),B[2]=a(a(g,m,I),p,D);for(let U=0;U<3;U++){const F=Kh.length(B[U]);for(let z=0;z<3;z++)B[U][z]/=F}if(E.push(B[0],B[1],B[2]),v.push([y,y+1,y+2]),y+=3,b<d-M-1){const U=d-M-1?(b+1)/(d-M-1):1;B[0]=a(a(g,m,T),p,w),B[1]=a(a(g,m,U),p,D),B[2]=a(a(g,m,I),p,D);for(let F=0;F<3;F++){const z=Kh.length(B[F]);for(let H=0;H<3;H++)B[F][H]/=z}E.push(B[0],B[1],B[2]),v.push([y,y+1,y+2]),y+=3}}return{points:E,triangles:v,offset:y}},a=(h,d,_)=>{const g=1-_,m=[];for(let p=0;p<3;p++)m[p]=h[p]*g+d[p]*_;return m};let c=[],l=[],f=0;for(let h=0;h<r.length;h++){const d=o([s[r[h][0]],s[r[h][1]],s[r[h][2]]],i,f);c=c.concat(d.points),l=l.concat(d.triangles),f=d.offset}let u=p3({points:c,faces:l,orientation:"inward"});return n!==1&&(u=Jh.transform(Zh.fromScaling(Zh.create(),[n,n,n]),u)),u};var g3=m3;const _3=li,v3=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return _3.fromPoints({},t)};var x3=v3;const wo=At,M3=t=>{const e={points:[],paths:[],orientation:"counterclockwise"},{points:n,paths:i,orientation:s}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let r=n;Array.isArray(n[0])&&(Array.isArray(n[0][0])||(r=[n])),r.forEach((f,u)=>{if(!Array.isArray(f))throw new Error("list of points "+u+" must be an array");if(f.length<3)throw new Error("list of points "+u+" must contain three or more points");f.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+u+", point "+d+" must be an array");if(h.length<2)throw new Error("list of points "+u+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let f=0;o=r.map(u=>u.map(h=>f++))}const a=[];r.forEach(f=>f.forEach(u=>a.push(u)));let c=[];o.forEach(f=>{const u=f.map(d=>a[d]),h=wo.fromPoints(u);c=c.concat(wo.toSides(h))});let l=wo.create(c);return s==="clockwise"&&(l=wo.reverse(l)),l};var E3=M3;const vi=We,ed=At,{isNumberArray:td}=Mt,S3=t=>{const e={center:[0,0],size:[2,2]},{center:n,size:i}=Object.assign({},e,t);if(!td(n,2))throw new Error("center must be an array of X and Y values");if(!td(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return ed.create();const s=[i[0]/2,i[1]/2],r=[s[0],-s[1]],o=[vi.subtract(vi.create(),n,s),vi.add(vi.create(),n,r),vi.add(vi.create(),n,s),vi.subtract(vi.create(),n,r)];return ed.fromPoints(o)};var tf=S3;const{EPS:Go,TAU:ar}=Qe,Ic=We,lt=Ge,nd=Rt,Hs=rt,{sin:y3,cos:b3}=qt,{isGTE:id,isNumberArray:sd}=Mt,T3=ef,rd=(t,e,n,i,s,r)=>{const o=ar/4*s/i,a=b3(o),c=y3(o),l=i-s;let f=n*a,u=e[2]-(n-n*c);r||(u=n-n*c-e[2]),f=f>Go?f:0;const h=lt.add(lt.create(),t,[e[0]-n,e[1]-n,u]),d=lt.add(lt.create(),t,[n-e[0],e[1]-n,u]),_=lt.add(lt.create(),t,[n-e[0],n-e[1],u]),g=lt.add(lt.create(),t,[e[0]-n,n-e[1],u]),m=[],p=[],y=[],E=[];for(let v=0;v<=l;v++){const M=l>0?ar/4*v/l:0,b=Ic.fromAngleRadians(Ic.create(),M);Ic.scale(b,b,f);const w=lt.fromVec2(lt.create(),b);m.push(lt.add(lt.create(),h,w)),lt.rotateZ(w,w,[0,0,0],ar/4),p.push(lt.add(lt.create(),d,w)),lt.rotateZ(w,w,[0,0,0],ar/4),y.push(lt.add(lt.create(),_,w)),lt.rotateZ(w,w,[0,0,0],ar/4),E.push(lt.add(lt.create(),g,w))}return r?[m,p,y,E]:(m.reverse(),p.reverse(),y.reverse(),E.reverse(),[E,y,p,m])},od=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){const s=t[i],r=e[i];for(let o=0;o<s.length-1;o++)n.push(Hs.create([s[o],s[o+1],r[o]])),o<r.length-1&&n.push(Hs.create([r[o],s[o+1],r[o+1]]))}return n},ad=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i];const o=s[s.length-1],a=r[r.length-1],c=(i+1)%t.length;s=t[c],r=e[c];const l=s[0],f=r[0];n.push(Hs.create([o,l,f,a]))}return n},w3=(t,e)=>{t=[t[3],t[2],t[1],t[0]],t=t.map(r=>r.slice().reverse());const n=[];t.forEach(r=>{r.forEach(o=>n.push(o))});const i=[];e.forEach(r=>{r.forEach(o=>i.push(o))});const s=[];for(let r=0;r<i.length;r++){const o=(r+1)%i.length;s.push(Hs.create([n[r],n[o],i[o],i[r]]))}return s},A3=t=>{const e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!sd(n,3))throw new Error("center must be an array of X, Y and Z values");if(!sd(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(l=>l>=0))throw new Error("size values must be positive");if(!id(s,0))throw new Error("roundRadius must be positive");if(!id(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return nd.create();if(s===0)return T3({center:n,size:i});if(i=i.map(l=>l/2),s>i[0]-Go||s>i[1]-Go||s>i[2]-Go)throw new Error("roundRadius must be smaller than the radius of all dimensions");r=Math.floor(r/4);let o=null,a=null,c=[];for(let l=0;l<=r;l++){const f=rd(n,i,s,r,l,!0),u=rd(n,i,s,r,l,!1);if(l===0&&(c=c.concat(w3(u,f))),o&&(c=c.concat(od(o,f),ad(o,f))),a&&(c=c.concat(od(a,u),ad(a,u))),l===r){let h=f.map(d=>d[0]);c.push(Hs.create(h)),h=u.map(d=>d[0]),c.push(Hs.create(h))}o=f,a=u}return nd.create(c)};var R3=A3;const{EPS:C3,TAU:cd}=Qe,ge=Ge,ld=Rt,P3=rt,{sin:fd,cos:ud}=qt,{isGTE:Ao,isNumberArray:L3}=Mt,D3=mg,U3=t=>{const e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:n,height:i,radius:s,roundRadius:r,segments:o}=Object.assign({},e,t);if(!L3(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Ao(i,0))throw new Error("height must be positive");if(!Ao(s,0))throw new Error("radius must be positive");if(!Ao(r,0))throw new Error("roundRadius must be positive");if(r>s)throw new Error("roundRadius must be smaller than the radius");if(!Ao(o,4))throw new Error("segments must be four or more");if(i===0||s===0)return ld.create();if(r===0)return D3({center:n,height:i,radius:s});const a=[0,0,-(i/2)],c=[0,0,i/2],l=ge.subtract(ge.create(),c,a),f=ge.length(l);if(2*r>f-C3)throw new Error("height must be larger than twice roundRadius");let u;Math.abs(l[0])>Math.abs(l[1])?u=ge.fromValues(0,1,0):u=ge.fromValues(1,0,0);const h=ge.scale(ge.create(),ge.normalize(ge.create(),l),r),d=ge.scale(ge.create(),ge.normalize(ge.create(),ge.cross(ge.create(),h,u)),s),_=ge.scale(ge.create(),ge.normalize(ge.create(),ge.cross(ge.create(),d,h)),s);ge.add(a,a,h),ge.subtract(c,c,h);const g=Math.floor(.25*o),m=b=>{const w=b.map(D=>ge.add(D,D,n));return P3.create(w)},p=[],y=ge.create(),E=ge.create();let v;for(let b=0;b<=o;b++){const w=cd*b/o,D=ge.add(ge.create(),ge.scale(y,d,ud(w)),ge.scale(E,_,fd(w)));if(b>0){let x=[];x.push(ge.add(ge.create(),a,D)),x.push(ge.add(ge.create(),a,v)),x.push(ge.add(ge.create(),c,v)),x.push(ge.add(ge.create(),c,D)),p.push(m(x));let T,I;for(let B=0;B<=g;B++){const U=cd/4*B/g,F=ud(U),z=fd(U);if(B>0){x=[];let H;H=ge.add(ge.create(),a,ge.subtract(y,ge.scale(y,v,T),ge.scale(E,h,I))),x.push(H),H=ge.add(ge.create(),a,ge.subtract(y,ge.scale(y,D,T),ge.scale(E,h,I))),x.push(H),B<g&&(H=ge.add(ge.create(),a,ge.subtract(y,ge.scale(y,D,F),ge.scale(E,h,z))),x.push(H)),H=ge.add(ge.create(),a,ge.subtract(y,ge.scale(y,v,F),ge.scale(E,h,z))),x.push(H),p.push(m(x)),x=[],H=ge.add(ge.create(),ge.scale(y,v,T),ge.scale(E,h,I)),ge.add(H,H,c),x.push(H),H=ge.add(ge.create(),ge.scale(y,D,T),ge.scale(E,h,I)),ge.add(H,H,c),x.push(H),B<g&&(H=ge.add(ge.create(),ge.scale(y,D,F),ge.scale(E,h,z)),ge.add(H,H,c),x.push(H)),H=ge.add(ge.create(),ge.scale(y,v,F),ge.scale(E,h,z)),ge.add(H,H,c),x.push(H),x.reverse(),p.push(m(x))}T=F,I=z}}v=D}return ld.create(p)};var I3=U3;const{EPS:hd,TAU:Ro}=Qe,ot=We,dd=At,{isGTE:pd,isNumberArray:md}=Mt,N3=tf,F3=t=>{const e={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!md(n,2))throw new Error("center must be an array of X and Y values");if(!md(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(g=>g>=0))throw new Error("size values must be positive");if(!pd(s,0))throw new Error("roundRadius must be positive");if(!pd(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return dd.create();if(s===0)return N3({center:n,size:i});if(i=i.map(g=>g/2),s>i[0]-hd||s>i[1]-hd)throw new Error("roundRadius must be smaller than the radius of all dimensions");const o=Math.floor(r/4),a=ot.add(ot.create(),n,[i[0]-s,i[1]-s]),c=ot.add(ot.create(),n,[s-i[0],i[1]-s]),l=ot.add(ot.create(),n,[s-i[0],s-i[1]]),f=ot.add(ot.create(),n,[i[0]-s,s-i[1]]),u=[],h=[],d=[],_=[];for(let g=0;g<=o;g++){const m=Ro/4*g/o,p=ot.fromAngleRadians(ot.create(),m);ot.scale(p,p,s),u.push(ot.add(ot.create(),a,p)),ot.rotate(p,p,ot.create(),Ro/4),h.push(ot.add(ot.create(),c,p)),ot.rotate(p,p,ot.create(),Ro/4),d.push(ot.add(ot.create(),l,p)),ot.rotate(p,p,ot.create(),Ro/4),_.push(ot.add(ot.create(),f,p))}return dd.fromPoints(u.concat(h,d,_))};var O3=F3;const B3=gg,{isGTE:z3}=Mt,V3=t=>{const e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!z3(i,0))throw new Error("radius must be positive");return i=[i,i,i],B3({center:n,radius:i,segments:s,axes:r})};var H3=V3;const G3=tf,{isGTE:$3}=Mt,k3=t=>{const e={center:[0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!$3(i,0))throw new Error("size must be positive");return i=[i,i],G3({center:n,size:i})};var W3=k3;const{TAU:vg}=Qe,gr=We,X3=At,{isGT:q3,isGTE:Co,isNumberArray:Y3}=Mt,j3=(t,e)=>t>0&&e>1&&e<t/2?Math.cos(Math.PI*e/t)/Math.cos(Math.PI*(e-1)/t):0,gd=(t,e,n,i)=>{const s=vg/t,r=[];for(let o=0;o<t;o++){const a=gr.fromAngleRadians(gr.create(),s*o+n);gr.scale(a,a,e),gr.add(a,i,a),r.push(a)}return r},Z3=t=>{const e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:n,vertices:i,outerRadius:s,innerRadius:r,density:o,startAngle:a}=Object.assign({},e,t);if(!Y3(n,2))throw new Error("center must be an array of X and Y values");if(!Co(i,2))throw new Error("vertices must be two or more");if(!q3(s,0))throw new Error("outerRadius must be greater than zero");if(!Co(r,0))throw new Error("innerRadius must be greater than zero");if(!Co(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%vg,r===0){if(!Co(o,2))throw new Error("density must be two or more");r=s*j3(i,o)}const c=gr.clone(n),l=gd(i,s,a,c),f=gd(i,r,a+Math.PI/i,c),u=[];for(let h=0;h<i;h++)u.push(l[h]),u.push(f[h]);return X3.fromPoints(u)};var K3=Z3;const xg=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(xg(n)):e.concat(n),[]);var ts=xg;const J3=ts,_d=ut,vd=Zs,xd=At,Md=Rt,Ed=li,Q3=(t,...e)=>{const n={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:s}=Object.assign({},n,t);if(e=J3(e),e.length===0)throw new Error("wrong number of arguments");const r=vd.fromNormalAndPoint(vd.create(),s,i);if(Number.isNaN(r[0]))throw new Error("the given origin and normal do not define a proper plane");const o=_d.mirrorByPlane(_d.create(),r),a=e.map(c=>Ed.isA(c)?Ed.transform(o,c):xd.isA(c)?xd.transform(o,c):Md.isA(c)?Md.transform(o,c):c);return a.length===1?a[0]:a},eD=(...t)=>Q3({normal:[1,0,0]},t);var tD={mirrorX:eD};const Sd=Zs,Fi=Ge,nD=t=>{const e=t.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const n=e.reduce((o,a)=>Fi.add(Fi.create(),o,a[0]),Fi.create());Fi.scale(n,n,1/e.length);let i,s=0;e.forEach(o=>{if(!Fi.equals(o[0],o[1])){const a=Fi.squaredDistance(n,o[0]);a>s&&(i=o,s=a)}});const r=e.find(o=>Fi.equals(o[1],i[0]));return Sd.fromPoints(Sd.create(),r[0],i[0],i[1])};var Mg=nD;const iD=t=>(t||(t=[]),{edges:t});var ns=iD;const sD=ns,yd=Ge,rD=(...t)=>{let e,n;return t.length===1?(e=sD(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[yd.clone(i[0]),yd.clone(i[1])]),e};var oD=rD;const aD=Ge,cD=(t,e)=>{const n=t.edges,i=e.edges;return n.length!==i.length?!1:n.reduce((r,o,a)=>{const c=i[a],l=aD.squaredDistance(o[0],c[0]);return r&&l<Number.EPSILON},!0)};var lD=cD;const Po=Ge,fD=ns,uD=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");if(t.length<3)throw new Error("the given points must contain THREE or more points");const e=[];let n=t[t.length-1];return t.forEach(i=>{i.length===2&&e.push([Po.fromVec2(Po.create(),n),Po.fromVec2(Po.create(),i)]),i.length===3&&e.push([n,i]),n=i}),fD(e)};var hD=uD;const Lo=Ge,dD=ns,pD=t=>{if(!Array.isArray(t))throw new Error("the given sides must be an array");const e=[];return t.forEach(n=>{e.push([Lo.fromVec2(Lo.create(),n[0]),Lo.fromVec2(Lo.create(),n[1])])}),dD(e)};var mD=pD;const gD=t=>!!(t&&typeof t=="object"&&"edges"in t&&Array.isArray(t.edges));var _D=gD;const vD=ns,xD=(...t)=>{let e,n;return t.length===1?(e=vD(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[i[1],i[0]]),e};var MD=xD;const ED=t=>t.edges;var SD=ED;const yD=(t,e)=>{let n,i,s,r,o,a=1;do{i=t,t=null;let c=null;for(o=0;i;){o++,s=i;let l=0;for(n=0;n<a&&(l++,s=s.nextZ,!!s);n++);let f=a;for(;l>0||f>0&&s;)l!==0&&(f===0||!s||e(i)<=e(s))?(r=i,i=i.nextZ,l--):(r=s,s=s.nextZ,f--),c?c.nextZ=r:t=r,r.prevZ=c,c=r;i=s}c.nextZ=null,a*=2}while(o>1);return t};var bD=yD;const TD=bD;let Eg=class{constructor(e,n,i){this.i=e,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}};const wD=(t,e,n,i)=>{const s=new Eg(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s},AD=t=>{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)};var Sg={Node:Eg,insertNode:wD,removeNode:AD,sortLinked:TD};const RD=(t,e,n,i,s,r,o,a)=>(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(r-a)-(s-o)*(i-a)>=0,CD=(t,e,n)=>(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);var nf={area:CD,pointInTriangle:RD};const{Node:bd,insertNode:Td,removeNode:Ko}=Sg,{area:jt}=nf,PD=(t,e,n,i,s)=>{let r;if(s===FD(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Td(o,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Td(o,t[o],t[o+1],r);return r&&Ea(r,r.next)&&(Ko(r),r=r.next),r},yg=(t,e)=>{if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ea(n,n.next)||jt(n.prev,n,n.next)===0)){if(Ko(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e},LD=(t,e,n)=>{let i=t;do{const s=i.prev,r=i.next.next;!Ea(s,r)&&bg(s,i,i.next,r)&&zr(s,r)&&zr(r,s)&&(e.push(s.i/n),e.push(i.i/n),e.push(r.i/n),Ko(i),Ko(i.next),i=t=r),i=i.next}while(i!==t);return yg(i)},DD=(t,e)=>{let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&bg(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1},zr=(t,e)=>jt(t.prev,t,t.next)<0?jt(t,e,t.next)>=0&&jt(t,t.prev,e)>=0:jt(t,e,t.prev)<0||jt(t,t.next,e)<0,UD=(t,e)=>{let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i},ID=(t,e)=>{const n=new bd(t.i,t.x,t.y),i=new bd(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i},ND=(t,e)=>t.next.i!==e.i&&t.prev.i!==e.i&&!DD(t,e)&&(zr(t,e)&&zr(e,t)&&UD(t,e)&&(jt(t.prev,t,e.prev)||jt(t,e.prev,e))||Ea(t,e)&&jt(t.prev,t,t.next)>0&&jt(e.prev,e,e.next)>0),bg=(t,e,n,i)=>{const s=Math.sign(jt(t,e,n)),r=Math.sign(jt(t,e,i)),o=Math.sign(jt(n,i,t)),a=Math.sign(jt(n,i,e));return!!(s!==r&&o!==a||s===0&&Do(t,n,e)||r===0&&Do(t,i,e)||o===0&&Do(n,t,i)||a===0&&Do(n,e,i))},Do=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),FD=(t,e,n,i)=>{let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s},Ea=(t,e)=>t.x===e.x&&t.y===e.y;var Tg={cureLocalIntersections:LD,filterPoints:yg,isValidDiagonal:ND,linkedPolygon:PD,locallyInside:zr,splitPolygon:ID};const{filterPoints:dl,linkedPolygon:OD,locallyInside:BD,splitPolygon:zD}=Tg,{area:wd,pointInTriangle:VD}=nf,HD=(t,e,n,i)=>{const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:t.length,l=OD(t,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(WD(l))}s.sort((r,o)=>r.x-o.x);for(let r=0;r<s.length;r++)n=GD(s[r],n),n=dl(n,n.next);return n},GD=(t,e)=>{const n=$D(t,e);if(!n)return e;const i=zD(n,t),s=dl(n,n.next);return dl(i,i.next),e===n?s:e},$D=(t,e)=>{let n=e;const i=t.x,s=t.y;let r=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const u=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>r){if(r=u,u===i){if(s===n.y)return n;if(s===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===r)return o;const a=o,c=o.x,l=o.y;let f=1/0;n=o;do{if(i>=n.x&&n.x>=c&&i!==n.x&&VD(s<l?i:r,s,c,l,s<l?r:i,s,n.x,n.y)){const u=Math.abs(s-n.y)/(i-n.x);BD(n,t)&&(u<f||u===f&&(n.x>o.x||n.x===o.x&&kD(o,n)))&&(o=n,f=u)}n=n.next}while(n!==a);return o},kD=(t,e)=>wd(t.prev,t,e.prev)<0&&wd(e.next,t,t.next)<0,WD=t=>{let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n};var XD=HD;const qD=XD,{removeNode:YD,sortLinked:jD}=Sg,{cureLocalIntersections:ZD,filterPoints:Jo,isValidDiagonal:KD,linkedPolygon:JD,splitPolygon:QD}=Tg,{area:Hi,pointInTriangle:_r}=nf,eU=(t,e,n=2)=>{const i=e&&e.length,s=i?e[0]*n:t.length;let r=JD(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,f,u;if(i&&(r=qD(t,e,r,n)),t.length>80*n){a=l=t[0],c=f=t[1];for(let h=n;h<s;h+=n){const d=t[h],_=t[h+1];d<a&&(a=d),_<c&&(c=_),d>l&&(l=d),_>f&&(f=_)}u=Math.max(l-a,f-c),u=u!==0?1/u:0}return Vr(r,o,n,a,c,u),o},Vr=(t,e,n,i,s,r,o)=>{if(!t)return;!o&&r&&sU(t,i,s,r);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,r?nU(t,i,s,r):tU(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),YD(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=ZD(Jo(t),e,n),Vr(t,e,n,i,s,r,2)):o===2&&iU(t,e,n,i,s,r):Vr(Jo(t),e,n,i,s,r,1);break}}},tU=t=>{const e=t.prev,n=t,i=t.next;if(Hi(e,n,i)>=0)return!1;let s=t.next.next;for(;s!==t.prev;){if(_r(e.x,e.y,n.x,n.y,i.x,i.y,s.x,s.y)&&Hi(s.prev,s,s.next)>=0)return!1;s=s.next}return!0},nU=(t,e,n,i)=>{const s=t.prev,r=t,o=t.next;if(Hi(s,r,o)>=0)return!1;const a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,c=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,l=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,f=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,u=pl(a,c,e,n,i),h=pl(l,f,e,n,i);let d=t.prevZ,_=t.nextZ;for(;d&&d.z>=u&&_&&_.z<=h;){if(d!==t.prev&&d!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Hi(d.prev,d,d.next)>=0||(d=d.prevZ,_!==t.prev&&_!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&Hi(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;d&&d.z>=u;){if(d!==t.prev&&d!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Hi(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;_&&_.z<=h;){if(_!==t.prev&&_!==t.next&&_r(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&Hi(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0},iU=(t,e,n,i,s,r)=>{let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&KD(o,a)){let c=QD(o,a);o=Jo(o,o.next),c=Jo(c,c.next),Vr(o,e,n,i,s,r),Vr(c,e,n,i,s,r);return}a=a.next}o=o.next}while(o!==t)},sU=(t,e,n,i)=>{let s=t;do s.z===null&&(s.z=pl(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,jD(s,r=>r.z)},pl=(t,e,n,i,s)=>(t=32767*(t-n)*s,e=32767*(e-i)*s,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1);var rU=eU;const{NEPS:Nc}=Qe,oU=(t,e)=>Math.abs(t[0]-e[0])<=Nc&&Math.abs(t[1]-e[1])<=Nc&&Math.abs(t[2]-e[2])<=Nc;var aU=oU;const cU=t=>{let e=0;for(let n=0;n<t.length;n++){const i=(n+1)%t.length;e+=t[n][0]*t[i][1],e-=t[i][0]*t[n][1]}return e/2};var wg=cU;const lU=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};var fU=lU;const uU=(t,e,n,i,s,r)=>{const a=1/(t*i-e*n);let c=s*i-e*r,l=-s*n+t*r;return c*=a,l*=a,[c,l]};var hU=uU,Ag={area:wg,solve2Linear:hU};const dU=wg,pU=t=>dU(t.vertices);var mU=pU;const gU=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var _U=gU;const vU=_U,xU=t=>{const e=t.vertices.slice().reverse();return vU(e)};var MU=xU;const EU=mU,SU=MU,yU=(t,e)=>{if(t.length===0)return 0;const n=e.vertices;return n.length<3?0:(EU(e)<0&&(e=SU(e)),t.reduce((s,r)=>s+bU(r,n),0)===t.length?1:0)},bU=(t,e)=>{const n=e.length,i=t[0],s=t[1];let r=e[n-1],o=e[0],a=r[1]>s,c=0,l=0;for(let f=n+1;--f;){const u=o[1]>s;if(a!==u){const h=r[0]>i,d=o[0]>i;(h&&d||o[0]-(o[1]-s)*(r[0]-o[0])/(r[1]-o[1])>=i)&&(c=!c)}a=u,r=o,o=e[++l]}return c};var TU=yU,wU={arePointsInside:TU};const{area:AU}=Ag,{toOutlines:RU}=At,{arePointsInside:CU}=wU,PU=t=>{const e=RU(t),n=[],i=[];e.forEach((o,a)=>{const c=AU(o);c<0?i.push(a):c>0&&n.push(a)});const s=[],r=[];return n.forEach((o,a)=>{const c=e[o];s[a]=[],i.forEach((l,f)=>{const u=e[l];CU([u[0]],{vertices:c})&&(s[a].push(l),r[f]||(r[f]=[]),r[f].push(a))})}),i.forEach((o,a)=>{if(r[a]&&r[a].length>1){const c=LU(r[a],l=>s[l].length);r[a].forEach((l,f)=>{f!==c&&(s[l]=s[l].filter(u=>u!==o))})}}),s.map((o,a)=>({solid:e[n[a]],holes:o.map(c=>e[c])}))},LU=(t,e)=>{let n,i;return t.forEach((s,r)=>{const o=e(s);(i===void 0||o<i)&&(n=r,i=o)}),n};var DU=PU;const UU=At,Ad=Zs,IU=We,wt=Ge,NU=Mg,FU=DU;let OU=class{constructor(e){this.plane=NU(e);const n=wt.orthogonal(wt.create(),this.plane),i=wt.cross(wt.create(),this.plane,n);this.v=wt.normalize(i,i),this.u=wt.cross(wt.create(),this.v,this.plane),this.basisMap=new Map;const s=e.edges.map(o=>o.map(a=>this.to2D(a))),r=UU.create(s);this.roots=FU(r)}to2D(e){const n=IU.fromValues(wt.dot(e,this.u),wt.dot(e,this.v));return this.basisMap.set(n,e),n}to3D(e){const n=this.basisMap.get(e);if(n)return n;{console.log("Warning: point not in original slice");const i=wt.scale(wt.create(),this.u,e[0]),s=wt.scale(wt.create(),this.v,e[1]),r=wt.scale(wt.create(),Ad,Ad[3]),o=wt.add(i,i,r);return wt.add(s,s,o)}}};var BU=OU;const zU=rt,VU=rU,HU=BU,GU=t=>{const e=new HU(t),n=[];return e.roots.forEach(({solid:i,holes:s})=>{let r=i.length;const o=[];s.forEach((u,h)=>{o.push(r),r+=u.length});const a=[i,...s].flat(),c=a.flat(),l=u=>e.to3D(a[u]),f=VU(c,o);for(let u=0;u<f.length;u+=3){const h=f.slice(u,u+3).map(l);n.push(zU.fromPointsAndPlane(h,e.plane))}}),n};var $U=GU;const Rd=Ge,kU=t=>t.reduce((e,n)=>e+=`[${Rd.toString(n[0])}, ${Rd.toString(n[1])}], `,""),WU=t=>`[${kU(t.edges)}]`;var XU=WU;const Uo=Ge,qU=ns,YU=(t,e)=>{const n=e.edges.map(i=>[Uo.transform(Uo.create(),i[0],t),Uo.transform(Uo.create(),i[1],t)]);return qU(n)};var jU=YU,sf={calculatePlane:Mg,clone:oD,create:ns,equals:lD,fromPoints:hD,fromSides:mD,isA:_D,reverse:MD,toEdges:SD,toPolygons:$U,toString:XU,transform:jU};const Cd=Ge,ZU=ns,KU=t=>{if(!t.edges)return t;let e=t.edges;const n=new Map,i=new Map;e=e.filter(o=>!Cd.equals(o[0],o[1])),e.forEach(o=>{const a=o[0].toString(),c=o[1].toString();n.set(a,o[0]),n.set(c,o[1]),i.set(a,(i.get(a)||0)+1),i.set(c,(i.get(c)||0)-1)});const s=[],r=[];return i.forEach((o,a)=>{o<0&&s.push(a),o>0&&r.push(a)}),s.forEach(o=>{const a=n.get(o);let c=1/0,l;r.forEach(f=>{const u=n.get(f),h=Cd.distance(a,u);h<c&&(c=h,l=u)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${l} distance ${c}`),e=e.map(f=>f[0].toString()===o?[l,f[1]]:f[1].toString()===o?[f[0],l]:f)}),ZU(e)};var JU=KU;const{EPS:Pd}=Qe,Ss=Ge,Io=rt,Ld=sf,ml=(t,e)=>t===e?t:t<e?ml(e,t):e===1?1:e===0?t:ml(e,t%e),QU=(t,e)=>t*e/ml(t,e),Dd=(t,e)=>{const n=t/e.length;if(n===1)return e;const i=Ss.fromValues(n,n,n),s=[];return e.forEach(r=>{const o=Ss.subtract(Ss.create(),r[1],r[0]);Ss.divide(o,o,i);let a=r[0];for(let c=1;c<=n;++c){const l=Ss.add(Ss.create(),a,o);s.push([a,l]),a=l}}),s},Ud=Pd*Pd/2*Math.sin(Math.PI/3),eI=(t,e)=>{let n=Ld.toEdges(t),i=Ld.toEdges(e);if(n.length!==i.length){const r=QU(n.length,i.length);r!==n.length&&(n=Dd(r,n)),r!==i.length&&(i=Dd(r,i))}const s=[];return n.forEach((r,o)=>{const a=i[o],c=Io.create([r[0],r[1],a[1]]),l=Io.measureArea(c);Number.isFinite(l)&&l>Ud&&s.push(c);const f=Io.create([r[0],a[1],a[0]]),u=Io.measureArea(f);Number.isFinite(u)&&u>Ud&&s.push(f)}),s};var tI=eI;const Id=ut,Nd=At,nI=Rt,gl=rt,Si=sf,iI=JU,Fd=tI,sI=(t,e,n)=>{let i=null;return Nd.isA(n)&&(i=Si.fromSides(Nd.toSides(n))),gl.isA(n)&&(i=Si.fromPoints(gl.toPoints(n))),t===0||t===1?Si.transform(Id.fromTranslation(Id.create(),[0,0,t]),i):null},rI=(t,e)=>{const n={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:sI},{numberOfSlices:i,capStart:s,capEnd:r,close:o,repair:a,callback:c}=Object.assign({},n,t);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=iI(e));const l=i-1;let f=null,u=null,h=null,d=[];for(let _=0;_<i;_++){const g=c(_/l,_,e);if(g){if(!Si.isA(g))throw new Error("the callback function must return slice objects");if(Si.toEdges(g).length===0)throw new Error("the callback function must return slices with one or more edges");h&&(d=d.concat(Fd(h,g))),_===0&&(f=g),_===i-1&&(u=g),h=g}}if(r){const _=Si.toPolygons(u);d=d.concat(_)}if(s){const _=Si.toPolygons(f).map(gl.invert);d=d.concat(_)}return!s&&!r&&o&&!Si.equals(u,f)&&(d=d.concat(Fd(u,f))),nI.create(d)};var oI=rI;const{TAU:nn}=Qe,cr=ut,{mirrorX:aI}=tD,No=At,Fc=sf,cI=oI,lI=(t,e)=>{const n={segments:12,startAngle:0,angle:nn,overflow:"cap"};let{segments:i,startAngle:s,angle:r,overflow:o}=Object.assign({},n,t);if(i<3)throw new Error("segments must be greater then 3");s=Math.abs(s)>nn?s%nn:s,r=Math.abs(r)>nn?r%nn:r;let a=s+r;if(a=Math.abs(a)>nn?a%nn:a,a<s){const y=s;s=a,a=y}let c=a-s;if(c<=0&&(c=nn),Math.abs(c)<nn){const y=nn/i;i=Math.floor(Math.abs(c)/y),Math.abs(c)>i*y&&i++}let l=No.toSides(e);if(l.length===0)throw new Error("the given geometry cannot be empty");const f=l.filter(y=>y[0][0]<0),u=l.filter(y=>y[0][0]>=0);f.length>0&&u.length>0&&o==="cap"&&(f.length>u.length?(l=l.map(y=>{let E=y[0],v=y[1];return E=[Math.min(E[0],0),E[1]],v=[Math.min(v[0],0),v[1]],[E,v]}),e=No.create(l),e=aI(e)):u.length>=f.length&&(l=l.map(y=>{let E=y[0],v=y[1];return E=[Math.max(E[0],0),E[1]],v=[Math.max(v[0],0),v[1]],[E,v]}),e=No.create(l)));const d=c/i,_=Math.abs(c)<nn,g=Fc.fromSides(No.toSides(e));Fc.reverse(g,g);const m=cr.create(),p=(y,E,v)=>{let M=d*E+s;return c===nn&&E===i&&(M=s),cr.multiply(m,cr.fromZRotation(m,M),cr.fromXRotation(cr.create(),nn/4)),Fc.transform(m,v)};return t={numberOfSlices:i+1,capStart:_,capEnd:_,close:!_,callback:p},cI(t,g)};var fI=lI;const uI=ts,Od=ut,Bd=At,zd=Rt,Vd=li,hI=(t,...e)=>{if(!Array.isArray(t))throw new Error("angles must be an array");if(e=uI(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=t[2],i=t[1],s=t[0],r=Od.fromTaitBryanRotation(Od.create(),n,i,s),o=e.map(a=>Vd.isA(a)?Vd.transform(r,a):Bd.isA(a)?Bd.transform(r,a):zd.isA(a)?zd.transform(r,a):a);return o.length===1?o[0]:o};var dI={rotate:hI};const pI=ts,Hd=ut,Gd=At,$d=Rt,kd=li,Sa=(t,...e)=>{if(!Array.isArray(t))throw new Error("offset must be an array");if(e=pI(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=Hd.fromTranslation(Hd.create(),t),i=e.map(s=>kd.isA(s)?kd.transform(n,s):Gd.isA(s)?Gd.transform(n,s):$d.isA(s)?$d.transform(n,s):s);return i.length===1?i[0]:i},mI=(t,...e)=>Sa([t,0,0],e),gI=(t,...e)=>Sa([0,t,0],e),_I=(t,...e)=>Sa([0,0,t],e);var vr={translate:Sa,translateX:mI,translateY:gI,translateZ:_I};const{TAU:vI}=Qe,xI=fI,{rotate:MI}=dI,{translate:EI}=vr,SI=Jm,{isGT:Oc,isGTE:Bc}=Mt,yI=t=>{const e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:vI},{innerRadius:n,innerSegments:i,outerRadius:s,outerSegments:r,innerRotation:o,startAngle:a,outerRotation:c}=Object.assign({},e,t);if(!Oc(n,0))throw new Error("innerRadius must be greater than zero");if(!Bc(i,3))throw new Error("innerSegments must be three or more");if(!Oc(s,0))throw new Error("outerRadius must be greater than zero");if(!Bc(r,3))throw new Error("outerSegments must be three or more");if(!Bc(a,0))throw new Error("startAngle must be positive");if(!Oc(c,0))throw new Error("outerRotation must be greater than zero");if(n>=s)throw new Error("inner circle is too large to rotate about the outer circle");let l=SI({radius:n,segments:i});return o!==0&&(l=MI([0,0,o],l)),l=EI([s,0],l),xI({startAngle:a,angle:c,segments:r},l)};var bI=yI;const{NEPS:Gs}=Qe,lr=We,TI=At,{isNumberArray:wI}=Mt,_l=(t,e,n)=>Math.acos((t*t+e*e-n*n)/(2*t*e)),AI=(t,e,n)=>e>Gs?Math.sqrt(t*t+n*n-2*t*n*Math.cos(e)):Math.sqrt((t-n)*(t-n)+t*n*e*e*(1-e*e/12)),RI=t=>{if(Math.abs(t[0]+t[1]+t[2]-Math.PI)>Gs)throw new Error("AAA triangles require angles that sum to PI");const n=t[0],i=t[1],s=Math.PI-n-i,r=1,o=r/Math.sin(s)*Math.sin(n),a=r/Math.sin(s)*Math.sin(i);return Ks(n,i,s,o,a,r)},CI=t=>{const e=t[0],n=t[1],i=Math.PI+Gs-e-n;if(i<Gs)throw new Error("AAS triangles require angles that sum to PI");const s=t[2],r=s/Math.sin(e)*Math.sin(n),o=s/Math.sin(e)*Math.sin(i);return Ks(e,n,i,s,r,o)},PI=t=>{const e=t[0],n=t[2],i=Math.PI+Gs-e-n;if(i<Gs)throw new Error("ASA triangles require angles that sum to PI");const s=t[1],r=s/Math.sin(i)*Math.sin(e),o=s/Math.sin(i)*Math.sin(n);return Ks(e,n,i,r,o,s)},LI=t=>{const e=t[0],n=t[1],i=t[2],s=AI(e,n,i),r=_l(s,e,i),o=Math.PI-r-n;return Ks(r,n,o,i,s,e)},DI=t=>{const e=t[0],n=t[1],i=t[2],s=Math.asin(n*Math.sin(i)/e),r=Math.PI-s-i,o=e/Math.sin(i)*Math.sin(r);return Ks(s,r,i,n,o,e)},UI=t=>{const e=t[1],n=t[2],i=t[0];if(e+n<=i||n+i<=e||i+e<=n)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const s=_l(n,i,e),r=_l(i,e,n),o=Math.PI-s-r;return Ks(s,r,o,e,n,i)},Ks=(t,e,n,i,s,r)=>{const o=lr.fromValues(0,0),a=lr.fromValues(r,0),c=lr.fromValues(i,0);return lr.add(c,lr.rotate(c,c,[0,0],Math.PI-e),a),TI.fromPoints([o,a,c])},II=t=>{const e={type:"SSS",values:[1,1,1]};let{type:n,values:i}=Object.assign({},e,t);if(typeof n!="string")throw new Error("triangle type must be a string");if(n=n.toUpperCase(),!((n[0]==="A"||n[0]==="S")&&(n[1]==="A"||n[1]==="S")&&(n[2]==="A"||n[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!wI(i,3))throw new Error("triangle values must contain three values");if(!i.every(s=>s>0))throw new Error("triangle values must be greater than zero");switch(n){case"AAA":return RI(i);case"AAS":return CI(i);case"ASA":return PI(i);case"SAS":return LI(i);case"SSA":return DI(i);case"SSS":return UI(i);default:throw new Error("invalid triangle type, try again")}};var NI=II,Fo={arc:eR,circle:Jm,cube:JL,cuboid:ef,cylinder:mg,cylinderElliptic:pg,ellipse:Km,ellipsoid:gg,geodesicSphere:g3,line:x3,polygon:E3,polyhedron:_g,rectangle:tf,roundedCuboid:R3,roundedCylinder:I3,roundedRectangle:O3,sphere:H3,square:W3,star:K3,torus:bI,triangle:NI};function FI({width:t,length:e,safety:n=0}){const o=t+n,a=e+n,c=vr.translate([0,a/2+2.5/2,0],Fo.cuboid({size:[o+5,2.5,10]})),l=vr.translate([0,-a/2-2.5/2,0],Fo.cuboid({size:[o+5,2.5,10]})),f=vr.translate([o/2+2.5/2,0,0],Fo.cuboid({size:[2.5,a+5,10]})),u=vr.translate([-o/2-2.5/2,0,0],Fo.cuboid({size:[2.5,a+5,10]}));return[c,l,f,u]}var Rg={geom2:At,geom3:Rt,path2:li,poly3:rt};const OI=()=>[0,1,0];var rf=OI;const BI=rf,zI=t=>{const e=BI();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var VI=zI;const zc=We,HI=t=>{const e=zc.normal(zc.create(),t);return zc.negate(e,e),e};var of=HI;const Wd=We,GI=t=>Wd.scale(Wd.create(),t,t[2]);var ya=GI;const fr=We,$I=of,kI=ya,WI=(t,e)=>{const n=kI(t),i=$I(t),s=fr.subtract(fr.create(),e,n),r=fr.dot(s,i);return fr.scale(s,i,r),fr.add(s,s,n),s};var XI=WI;const qI=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var Cg=qI;const YI=We,jI=(t,e)=>{let n=YI.dot(e,t);return n=Math.abs(n-t[2]),n};var ZI=jI;const KI=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var JI=KI;const ur=We,QI=(t,e,n)=>{const i=ur.subtract(ur.create(),n,e);ur.normal(i,i),ur.normalize(i,i);const s=ur.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};var Pg=QI;const eN=rf,tN=(t,e,n)=>{const i=eN();return i[0]=t,i[1]=e,i[2]=n,i};var Lg=tN;const nN=We,{solve2Linear:iN}=Ag,sN=(t,e)=>{const n=iN(t[0],t[1],e[0],e[1],t[2],e[2]);return nN.clone(n)};var rN=sN;const Xd=We,oN=Cg,aN=Lg,cN=(t,e)=>{const n=Xd.negate(Xd.create(),e),i=-e[2];return oN(t,aN(n[0],n[1],i))};var lN=cN;const fN=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;var uN=fN;const qd=We,hN=Pg,dN=ya,pN=of,mN=(t,e,n)=>{const i=dN(e),s=pN(e);return qd.transform(i,i,n),qd.transform(s,s,n),hN(t,i,s)};var gN=mN;const _N=ya,vN=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=_N(t)[0]),n};var xN=vN,MN={clone:VI,closestPoint:XI,copy:Cg,create:rf,direction:of,distanceToPoint:ZI,equals:JI,fromPoints:Pg,fromValues:Lg,intersectPointOfLines:rN,origin:ya,reverse:lN,toString:uN,transform:gN,xAtY:xN};const EN=ts,In=We,hr=Ge,Dg=At,Ug=Rt,Ig=li,Yd=rt,$s=new WeakMap,SN=t=>{let e=$s.get(t);if(e)return e;const n=Ig.toPoints(t);let i;n.length===0?i=In.create():i=In.clone(n[0]);let s=In.clone(i);return n.forEach(r=>{In.min(i,i,r),In.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],$s.set(t,e),e},yN=t=>{let e=$s.get(t);if(e)return e;const n=Dg.toPoints(t);let i;n.length===0?i=In.create():i=In.clone(n[0]);let s=In.clone(i);return n.forEach(r=>{In.min(i,i,r),In.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],$s.set(t,e),e},bN=t=>{let e=$s.get(t);if(e)return e;const n=Ug.toPolygons(t);let i=hr.create();if(n.length>0){const r=Yd.toPoints(n[0]);hr.copy(i,r[0])}let s=hr.clone(i);return n.forEach(r=>{Yd.toPoints(r).forEach(o=>{hr.min(i,i,o),hr.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],$s.set(t,e),e},TN=(...t)=>{if(t=EN(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>Ig.isA(n)?SN(n):Dg.isA(n)?yN(n):Ug.isA(n)?bN(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};var wN=TN;const{EPS:AN}=Qe,RN=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return AN*n/e};var CN=RN;const PN=ts,{geom2:LN,geom3:DN,path2:UN}=Rg,af=CN,cf=wN,IN=t=>af(cf(t),2),NN=t=>af(cf(t),2),FN=t=>af(cf(t),3),ON=(...t)=>{if(t=PN(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>UN.isA(n)?IN(n):LN.isA(n)?NN(n):DN.isA(n)?FN(n):0);return e.length===1?e[0]:e};var Ng=ON;const BN=(t,e)=>t-e;var zN=BN;const VN=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){const r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};var HN=VN,GN={fnNumberSort:zN,insertSorted:HN};const jd=ut,$N=We,mt=Ge,Fg=function(t,e){arguments.length<2&&(e=mt.orthogonal(mt.create(),t)),this.v=mt.normalize(mt.create(),mt.cross(mt.create(),t,e)),this.u=mt.cross(mt.create(),this.v,t),this.plane=t,this.planeorigin=mt.scale(mt.create(),t,t[3])};Fg.prototype={getProjectionMatrix:function(){return jd.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const t=mt.scale(mt.create(),this.plane,this.plane[3]);return jd.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return $N.fromValues(mt.dot(t,this.u),mt.dot(t,this.v))},to3D:function(t){const e=mt.scale(mt.create(),this.u,t[0]),n=mt.scale(mt.create(),this.v,t[1]),i=mt.add(e,e,this.planeorigin);return mt.add(n,n,i)}};var kN=Fg;const{EPS:Zn}=Qe,xi=MN,En=We,WN=kN,ys=fU,{insertSorted:XN,fnNumberSort:qN}=GN,Zd=rt,YN=t=>{if(t.length<2)return t;const e=[],n=t.length,i=Zd.plane(t[0]),s=new WN(i),r=[],o=[],a=new Map,c=new Map,l=new Map,f=10/Zn;for(let _=0;_<n;_++){const g=t[_];let m=[],p=g.vertices.length,y=-1;if(p>0){let E,v;for(let M=0;M<p;M++){let b=s.to2D(g.vertices[M]);const w=Math.floor(b[1]*f);let D;l.has(w)?D=l.get(w):l.has(w+1)?D=l.get(w+1):l.has(w-1)?D=l.get(w-1):(D=b[1],l.set(w,b[1])),b=En.fromValues(b[0],D),m.push(b);const x=b[1];(M===0||x<E)&&(E=x,y=M),(M===0||x>v)&&(v=x);let T=c.get(x);T||(T={},c.set(x,T)),T[_]=!0}if(E>=v)m=[],p=0,y=-1;else{let M=a.get(E);M||(M=[],a.set(E,M)),M.push(_)}}m.reverse(),y=p-y-1,r.push(m),o.push(y)}const u=[];c.forEach((_,g)=>u.push(g)),u.sort(qN);let h=[],d=[];for(let _=0;_<u.length;_++){const g=[],m=u[_],p=c.get(m);for(let E=0;E<h.length;++E){const v=h[E],M=v.polygonindex;if(p[M]){const b=r[M],w=b.length;let D=v.leftvertexindex,x=v.rightvertexindex;for(;;){let I=D+1;if(I>=w&&(I=0),b[I][1]!==m)break;D=I}let T=x-1;if(T<0&&(T=w-1),b[T][1]===m&&(x=T),D!==v.leftvertexindex&&D===x)h.splice(E,1),--E;else{v.leftvertexindex=D,v.rightvertexindex=x,v.topleft=b[D],v.topright=b[x];let I=D+1;I>=w&&(I=0),v.bottomleft=b[I];let B=x-1;B<0&&(B=w-1),v.bottomright=b[B]}}}let y;if(_>=u.length-1)h=[],y=null;else{y=Number(u[_+1]);const E=.5*(m+y),v=a.get(m);for(const M in v){const b=v[M],w=r[b],D=w.length,x=o[b];let T=x;for(;;){let z=T+1;if(z>=D&&(z=0),w[z][1]!==m||z===x)break;T=z}let I=x;for(;;){let z=I-1;if(z<0&&(z=D-1),w[z][1]!==m||z===T)break;I=z}let B=T+1;B>=D&&(B=0);let U=I-1;U<0&&(U=D-1);const F={polygonindex:b,leftvertexindex:T,rightvertexindex:I,topleft:w[T],topright:w[I],bottomleft:w[B],bottomright:w[U]};XN(h,F,(z,H)=>{const $=ys(z.topleft,z.bottomleft,E),k=ys(H.topleft,H.bottomleft,E);return $>k?1:$<k?-1:0})}}for(const E in h){const v=h[E];let M=ys(v.topleft,v.bottomleft,m);const b=En.fromValues(M,m);M=ys(v.topright,v.bottomright,m);const w=En.fromValues(M,m);M=ys(v.topleft,v.bottomleft,y);const D=En.fromValues(M,y);M=ys(v.topright,v.bottomright,y);const x=En.fromValues(M,y),T={topleft:b,topright:w,bottomleft:D,bottomright:x,leftline:xi.fromPoints(xi.create(),b,D),rightline:xi.fromPoints(xi.create(),x,w)};if(g.length>0){const I=g[g.length-1],B=En.distance(T.topleft,I.topright),U=En.distance(T.bottomleft,I.bottomright);B<Zn&&U<Zn&&(T.topleft=I.topleft,T.leftline=I.leftline,T.bottomleft=I.bottomleft,g.splice(g.length-1,1))}g.push(T)}if(_>0){const E=new Set,v=new Set;for(let M=0;M<g.length;M++){const b=g[M];for(let w=0;w<d.length;w++)if(!v.has(w)){const D=d[w];if(En.distance(D.bottomleft,b.topleft)<Zn&&En.distance(D.bottomright,b.topright)<Zn){v.add(w);const x=xi.direction(b.leftline),T=xi.direction(D.leftline),I=x[0]-T[0],B=xi.direction(b.rightline),U=xi.direction(D.rightline),F=B[0]-U[0],z=Math.abs(I)<Zn,H=Math.abs(F)<Zn,$=z||I>=0,k=H||F>=0;$&&k&&(b.outpolygon=D.outpolygon,b.leftlinecontinues=z,b.rightlinecontinues=H,E.add(w));break}}}for(let M=0;M<d.length;M++)if(!E.has(M)){const b=d[M];b.outpolygon.rightpoints.push(b.bottomright),En.distance(b.bottomright,b.bottomleft)>Zn&&b.outpolygon.leftpoints.push(b.bottomleft),b.outpolygon.leftpoints.reverse();const D=b.outpolygon.rightpoints.concat(b.outpolygon.leftpoints).map(T=>s.to3D(T)),x=Zd.fromPointsAndPlane(D,i);x.vertices.length&&e.push(x)}}for(let E=0;E<g.length;E++){const v=g[E];v.outpolygon?(v.leftlinecontinues||v.outpolygon.leftpoints.push(v.topleft),v.rightlinecontinues||v.outpolygon.rightpoints.push(v.topright)):(v.outpolygon={leftpoints:[],rightpoints:[]},v.outpolygon.leftpoints.push(v.topleft),En.distance(v.topleft,v.topright)>Zn&&v.outpolygon.rightpoints.push(v.topright))}d=g}return e};var jN=YN;const Kd=Rt,ZN=rt,{NEPS:KN}=Qe,JN=jN,QN=t=>{if(t.isRetesselated)return t;const e=Kd.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:ZN.plane(r),index:o})),n=eF(e),i=[];n.forEach(r=>{if(Array.isArray(r)){const o=JN(r);i.push(...o)}else i.push(r)});const s=Kd.create(i);return s.isRetesselated=!0,s},eF=t=>{let e=[t];const n=[];for(let s=3;s>=0;s--){const r=[],o=s===3?15e-9:KN;e.forEach(a=>{a.sort(tF(s,o));let c=0;for(let l=1;l<a.length;l++)a[l].plane[s]-a[c].plane[s]>o&&(l-c===1?n.push(a[c]):r.push(a.slice(c,l)),c=l);a.length-c===1?n.push(a[c]):r.push(a.slice(c))}),e=r}const i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},tF=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;var nF=QN;const Vc=Ge,Og=rt,iF=(t,e)=>{const n=Math.abs(Og.measureArea(e));return Number.isFinite(n)&&n>t},sF=(t,e)=>{let n=e.map(s=>{const r=s.vertices.map(c=>Vc.snap(Vc.create(),c,t)),o=[];for(let c=0;c<r.length;c++){const l=(c+1)%r.length;Vc.equals(r[c],r[l])||o.push(r[c])}const a=Og.create(o);return s.color&&(a.color=s.color),a});const i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>iF(i,s)),n};var Bg=sF;const rF=aU,Rs=Ge,Qo=rt,oF=t=>{const e=Qo.toPoints(t),n=[];for(let i=0;i<e.length;i++){const s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){const s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},aF=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.set(n,e)},Hc=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.delete(n)},cF=(t,e)=>{const n=`${e.v2}:${e.v1}`;return t.get(n)},lF=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2;const o=Jd(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;const a=Jd(i,s,r,n);return[o,a]},fF=Rs.create(),uF=Rs.create(),Jd=(t,e,n,i)=>{const s=Rs.subtract(fF,e,t),r=Rs.subtract(uF,n,e);return Rs.cross(s,s,r),Rs.dot(s,i)},hF=t=>{let e;const n=[];for(;t.next;){const i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=Qo.create(n)),e},dF=t=>{if(t.length<2)return t;const e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){const r=n.shift(),o=oF(r);for(let a=0;a<o.length;a++){const c=o[a],l=cF(i,c);if(l){const f=lF(c,l,e);if(f[0]>=0&&f[1]>=0){const u=l.next,h=c.next;c.prev.next=l.next,c.next.prev=l.prev,l.prev.next=c.next,l.next.prev=c.prev,c.v1=null,c.v2=null,c.next=null,c.prev=null,Hc(i,l),l.v1=null,l.v2=null,l.next=null,l.prev=null;const d=(_,g,m)=>{const p={v1:m.v1,v2:g.v2,next:g.next,prev:m.prev};m.prev.next=p,g.next.prev=p,Hc(_,g),g.v1=null,g.v2=null,g.next=null,g.prev=null,Hc(_,m),m.v1=null,m.v2=null,m.next=null,m.prev=null};f[0]===0&&d(i,u,u.prev),f[1]===0&&d(i,h,h.prev)}}else c.next&&aF(i,c)}}const s=[];return i.forEach(r=>{const o=hF(r);o&&s.push(o)}),i.clear(),s},pF=(t,e)=>Math.abs(t[3]-e[3])<15e-8?rF(t,e):!1,mF=(t,e)=>{const n=[];e.forEach(s=>{const r=n.find(o=>pF(o[0],Qo.plane(s)));r?r[1].push(s):n.push([Qo.plane(s),[s]])});let i=[];return n.forEach(s=>{const r=s[1],o=dF(r);i=i.concat(o)}),i};var gF=mF;const Qd=Qe,Pn=Ge,_F=rt,Ht=t=>`${t}`,ep=(t,e,n,i,s,r)=>{const o=Ht(i),a=Ht(s),c=`${o}/${a}`,l=`${a}/${o}`;if(t.has(l))return $o(t,e,n,s,i,null),null;const f={vertex0:i,vertex1:s,polygonindex:r};return t.has(c)?t.get(c).push(f):t.set(c,[f]),e.has(o)?e.get(o).push(c):e.set(o,[c]),n.has(a)?n.get(a).push(c):n.set(a,[c]),c},$o=(t,e,n,i,s,r)=>{const o=Ht(i),a=Ht(s),c=`${o}/${a}`;let l=-1;const f=t.get(c);for(let u=0;u<f.length;u++){const h=f[u];let d=Ht(h.vertex0);if(d===o&&(d=Ht(h.vertex1),d===a&&!(r!==null&&h.polygonindex!==r))){l=u;break}}f.splice(l,1),f.length===0&&t.delete(c),l=e.get(o).indexOf(c),e.get(o).splice(l,1),e.get(o).length===0&&e.delete(o),l=n.get(a).indexOf(c),n.get(a).splice(l,1),n.get(a).length===0&&n.delete(a)},vF=t=>{const e=new Map;for(let n=0;n<t.length;n++){const i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=Ht(r);for(let a=0;a<s;a++){let c=a+1;c===s&&(c=0);const l=i.vertices[c],f=Ht(l),u=`${o}/${f}`,h=`${f}/${o}`;if(e.has(h)){const d=e.get(h);d.splice(-1,1),d.length===0&&e.delete(h)}else{const d={vertex0:r,vertex1:l,polygonindex:n};e.has(u)?e.get(u).push(d):e.set(u,[d])}r=l,o=f}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){const n=new Map,i=new Map,s=new Map;for(const[o,a]of e)s.set(o,!0),a.forEach(c=>{const l=Ht(c.vertex0),f=Ht(c.vertex1);n.has(l)?n.get(l).push(o):n.set(l,[o]),i.has(f)?i.get(f).push(o):i.set(f,[o])});const r=t.slice(0);for(;e.size!==0;){for(const a of e.keys())s.set(a,!0);let o=!1;for(;;){const a=Array.from(s.keys());if(a.length===0)break;const c=a[0];let l=!0;if(e.has(c)){const u=e.get(c)[0];for(let h=0;h<2;h++){const d=h===0?u.vertex0:u.vertex1,_=h===0?u.vertex1:u.vertex0,g=Ht(d),m=Ht(_);let p=[];h===0?i.has(g)&&(p=i.get(g)):n.has(g)&&(p=n.get(g));for(let y=0;y<p.length;y++){const E=p[y],v=e.get(E)[0],M=h===0?v.vertex0:v.vertex1;if(h===0?v.vertex1:v.vertex0,Ht(M)===m){$o(e,n,i,d,_,null),$o(e,n,i,_,d,null),l=!1,h=2,o=!0;break}else{const w=d,D=_,x=M,T=Pn.subtract(Pn.create(),x,w),I=Pn.dot(Pn.subtract(Pn.create(),D,w),T)/Pn.dot(T,T);if(I>0&&I<1){const B=Pn.scale(Pn.create(),T,I);if(Pn.add(B,B,w),Pn.squaredDistance(B,D)<Qd.EPS*Qd.EPS){const F=v.polygonindex,z=r[F],H=Ht(v.vertex1);let $=-1;for(let ce=0;ce<z.vertices.length;ce++)if(Ht(z.vertices[ce])===H){$=ce;break}const k=z.vertices.slice(0);k.splice($,0,_);const le=_F.create(k);r[F]=le,$o(e,n,i,v.vertex0,v.vertex1,F);const ie=ep(e,n,i,v.vertex0,_,F),we=ep(e,n,i,_,v.vertex1,F);ie!==null&&s.set(ie,!0),we!==null&&s.set(we,!0),l=!1,h=2,o=!0;break}}}}}}l&&s.delete(c)}if(!o)break}t=r}return e.clear(),t};var xF=vF;const Gc=Ge,$c=rt,MF=(t,e,n)=>{const i=e.vertices.length;if(i>3){if(i>4){const o=[0,0,0];e.vertices.forEach(a=>Gc.add(o,o,a)),Gc.snap(o,Gc.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){const c=$c.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(c.color=e.color),n.push(c)}return}const s=$c.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=$c.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},EF=(t,e)=>{const n=[];return e.forEach(i=>{MF(t,i,n)}),n};var SF=EF;const yF=ts,bF=Ng,TF=At,zg=Rt,wF=li,AF=Bg,RF=gF,CF=xF,PF=SF,LF=(t,e)=>e,DF=(t,e)=>e,UF=(t,e)=>{const n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=bF(e);let a=zg.toPolygons(e);i&&(a=AF(o,a)),s&&(a=RF(o,a)),r&&(a=CF(a),a=PF(o,a));const c=Object.assign({},e);return c.polygons=a,c},IF=(t,...e)=>{if(e=yF(e),e.length===0)throw new Error("wrong number of arguments");const n=e.map(i=>{if(wF.isA(i))return LF(t,i);if(TF.isA(i))return DF(t,i);if(zg.isA(i))return UF(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};var NF=IF;const FF=ts,Gi=We,vl=At,xl=Rt,Ml=li,lf=Ng,OF=Bg,BF=t=>{const e=lf(t),i=Ml.toPoints(t).map(s=>Gi.snap(Gi.create(),s,e));return Ml.create(i)},zF=t=>{const e=lf(t);let i=vl.toSides(t).map(s=>[Gi.snap(Gi.create(),s[0],e),Gi.snap(Gi.create(),s[1],e)]);return i=i.filter(s=>!Gi.equals(s[0],s[1])),vl.create(i)},VF=t=>{const e=lf(t),n=xl.toPolygons(t),i=OF(e,n);return xl.create(i)},HF=(...t)=>{if(t=FF(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>Ml.isA(n)?BF(n):vl.isA(n)?zF(n):xl.isA(n)?VF(n):n);return e.length===1?e[0]:e};var GF=HF,$F={generalize:NF,snap:GF,retessellate:nF},ff={geometries:Rg,modifiers:$F};const Vg=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(Vg(n)):e.concat(n),[]);var kF=Vg;const WF=t=>Array.isArray(t)?t:t==null?[]:[t];var XF=WF,qF={flatten:kF,toArray:XF};const{geometries:kc}=ff,YF=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((m,p)=>{kc.geom3.toPolygons(m).forEach(E=>{const v=E.vertices.length,M=v>=3?v-2:0;r+=M,o+=1})});const a=new Uint8Array(80);for(let m=0;m<80;m++)a[m]=65;const c=new Uint32Array(1);c[0]=r;const l=new ArrayBuffer(50*r),f=new Int8Array(l),u=new ArrayBuffer(50),h=new Int8Array(u),d=new Float32Array(u,0,12),_=new Uint16Array(u,48,1);let g=0;return t.forEach(m=>{kc.geom3.toPolygons(m).forEach((y,E)=>{const v=y.vertices,M=v.length,b=kc.poly3.plane(y);for(let w=0;w<M-2;w++){d[0]=b[0],d[1]=b[1],d[2]=b[2];let D=3;for(let x=0;x<3;x++){const T=x+(x>0?w:0),I=v[T];d[D++]=I[0],d[D++]=I[1],d[D++]=I[2]}_[0]=0,f.set(h,g),g+=50}e.statusCallback&&e.statusCallback({progress:100*E/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,c.buffer,l]};var jF={serializeBinary:YF};const{geometries:Hg}=ff,ZF=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=`solid JSCAD
${KF(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},KF=(t,e)=>{const n=[];return t.forEach((i,s)=>{n.push(JF(i)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},JF=(t,e)=>{const n=[];return Hg.geom3.toPolygons(t).forEach((s,r)=>{n.push(QF(s))}),n.join(`
`)},Gg=t=>`${t[0]} ${t[1]} ${t[2]}`,Wc=t=>`vertex ${Gg(t)}`,QF=t=>{const e=[];if(t.vertices.length>=3){const n=Wc(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){const s=`facet normal ${Gg(Hg.poly3.plane(t))}
outer loop
${n}
${Wc(t.vertices[i+1])}
${Wc(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};var eO={serializeText:ZF};const{geometries:tO,modifiers:nO}=ff,{flatten:iO,toArray:sO}=qF,{serializeBinary:rO}=jF,{serializeText:oO}=eO,aO="application/sla",cO=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=iO(e);let i=e.filter(s=>tO.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=sO(nO.generalize({snap:!0,triangulate:!0},i)),t.binary?rO(i,t):oO(i,t)};var lO={mimeType:aO,serialize:cO};const fO={props:["width","length","safety"],data(){return{stlData:null,currentWidth:0,currentLength:0,currentSafety:0,tweenDuration:1e3}},computed:{targetDimensions(){return{width:this.width,length:this.length,safety:this.safety}}},watch:{targetDimensions:{handler(t,e){!e||e.width===t.width&&e.length===t.length&&e.safety===t.safety||this.animateDimensionsTransition({width:this.currentWidth,length:this.currentLength,safety:this.currentSafety},t)},deep:!0}},created(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.mesh=null},mounted(){this.currentWidth=this.width,this.currentLength=this.length,this.currentSafety=this.safety,this.initScene(),this.createInitialMesh()},methods:{generateSTL(t,e,n){try{const i=FI({width:t,length:e,safety:n});return lO.serialize({binary:!1},i).join(`
`)}catch(i){return console.error("Error generating geometry or STL:",i),null}},createInitialMesh(){const t=this.generateSTL(this.width,this.length,this.safety);if(!t)return;this.stlData=t;const n=new uh().parse(t),i=new $y({color:30719});this.mesh=new ii(n,i),this.scene.add(this.mesh)},animateDimensionsTransition(t,e){const n=performance.now(),i=this.tweenDuration,s=new uh,r=o=>{const a=o-n,c=Math.min(a/i,1),l=t.width+(e.width-t.width)*c,f=t.length+(e.length-t.length)*c,u=t.safety+(e.safety-t.safety)*c,h=this.generateSTL(l,f,u);if(h){const d=s.parse(h);this.mesh&&(this.mesh.geometry.dispose(),this.mesh.geometry=d),this.stlData=h}c<1?requestAnimationFrame(r):(this.currentWidth=e.width,this.currentLength=e.length,this.currentSafety=e.safety)};requestAnimationFrame(r)},initScene(){this.scene=new Gy,this.camera=new pn(75,600/500,.1,1e3),this.camera.position.set(0,70,150),this.camera.lookAt(0,0,0),this.renderer=new Am({canvas:this.$refs.canvas,antialias:!0}),this.renderer.setSize(600,500),this.renderer.setClearColor(15790320);const n=new Ky(4210752);this.scene.add(n);const i=new Zy(16777215,1);i.position.set(1,1,1).normalize(),this.scene.add(i),this.controls=new Jy(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.8,this.controls.noZoom=!1,this.controls.noPan=!1,this.controls.staticMoving=!1,this.controls.dynamicDampingFactor=.05,this.animate()},animate(){requestAnimationFrame(this.animate),this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera)},downloadSTL(){if(!this.stlData)return;const t=new Blob([this.stlData],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`SynthArmor_cover_${this.width}x${this.length}_safety${this.safety}.stl`,e.click()}}},uO={class:"mt-6 flex flex-col items-center"},hO={ref:"canvas",class:"border border-gray-300 rounded-md w-full max-w-[600px]"};function dO(t,e,n,i,s,r){return Bl(),zl("div",uO,[ft("canvas",hO,null,512),ft("button",{onClick:e[0]||(e[0]=(...o)=>r.downloadSTL&&r.downloadSTL(...o)),class:"mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"}," Download STL ")])}const pO=Hl(fO,[["render",dO]]),mO={name:"App",components:{InputForm:Cv,ModelViewer:pO},data(){return{width:155,length:105,safety:0}},methods:{updateDimensions({width:t,length:e,safety:n}){this.width=t,this.length=e,this.safety=n}}},gO={class:"max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6"},_O={class:"w-full max-w-[600px] bg-white rounded shadow p-6"};function vO(t,e,n,i,s,r){const o=vf("InputForm"),a=vf("ModelViewer");return Bl(),zl("div",gO,[e[0]||(e[0]=ft("div",{class:"mb-8 text-center"},[ft("h1",{class:"text-4xl font-bold mb-2"},"SynthArmor"),ft("p",{class:"text-gray-600"}," Modify the dimensions of a 3D model and download your custom design instantly. ")],-1)),ft("div",_O,[si(o,{"initial-width":s.width,"initial-length":s.length,"initial-safety":s.safety,onUpdateDimensions:r.updateDimensions},null,8,["initial-width","initial-length","initial-safety","onUpdateDimensions"]),si(a,{width:s.width,length:s.length,safety:s.safety},null,8,["width","length","safety"])])])}const xO=Hl(mO,[["render",vO]]);Mv(xO).mount("#app");
