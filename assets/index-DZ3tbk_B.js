(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const it={},Xs=[],Vn=()=>{},D0=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ql=t=>t.startsWith("onUpdate:"),Rt=Object.assign,jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},U0=Object.prototype.hasOwnProperty,Ke=(t,e)=>U0.call(t,e),Ie=Array.isArray,qs=t=>_a(t)==="[object Map]",Tp=t=>_a(t)==="[object Set]",Oe=t=>typeof t=="function",ht=t=>typeof t=="string",Ii=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",wp=t=>(ct(t)||Oe(t))&&Oe(t.then)&&Oe(t.catch),Ap=Object.prototype.toString,_a=t=>Ap.call(t),I0=t=>_a(t).slice(8,-1),Rp=t=>_a(t)==="[object Object]",Yl=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N0=/-(\w)/g,vn=va(t=>t.replace(N0,(e,n)=>n?n.toUpperCase():"")),F0=/\B([A-Z])/g,Ni=va(t=>t.replace(F0,"-$1").toLowerCase()),xa=va(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=va(t=>t?`on${xa(t)}`:""),ls=(t,e)=>!Object.is(t,e),Ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},gl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},O0=t=>{const e=ht(t)?Number(t):NaN;return isNaN(e)?t:e};let Du;const Ma=()=>Du||(Du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ht(i)?V0(i):Zl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ht(t)||ct(t))return t}const B0=/;(?![^(]*\))/g,z0=/:([^]+)/,H0=/\/\*[^]*?\*\//g;function V0(t){const e={};return t.replace(H0,"").split(B0).forEach(n=>{if(n){const i=n.split(z0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ea(t){let e="";if(ht(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=Ea(t[n]);i&&(e+=i+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const G0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$0=Xl(G0);function Pp(t){return!!t||t===""}const Lp=t=>!!(t&&t.__v_isRef===!0),Dp=t=>ht(t)?t:t==null?"":Ie(t)||ct(t)&&(t.toString===Ap||!Oe(t.toString))?Lp(t)?Dp(t.value):JSON.stringify(t,Up,2):String(t),Up=(t,e)=>Lp(e)?Up(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Ya(i,r)+" =>"]=s,n),{})}:Tp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ya(n))}:Ii(e)?Ya(e):ct(e)&&!Ie(e)&&!Rp(e)?String(e):e,Ya=(t,e="")=>{var n;return Ii(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class k0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=cn;try{return cn=this,e()}finally{cn=n}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function W0(){return cn}let rt;const Za=new WeakSet;class Ip{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Za.has(this)&&(Za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uu(this),Op(this);const e=rt,n=Cn;rt=this,Cn=!0;try{return this.fn()}finally{Bp(this),rt=e,Cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ql(e);this.deps=this.depsTail=void 0,Uu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_l(this)&&this.run()}get dirty(){return _l(this)}}let Np=0,Or,Br;function Fp(t,e=!1){if(t.flags|=8,e){t.next=Br,Br=t;return}t.next=Or,Or=t}function Kl(){Np++}function Jl(){if(--Np>0)return;if(Br){let e=Br;for(Br=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Or;){let e=Or;for(Or=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Op(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Ql(i),X0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function _l(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wr))return;t.globalVersion=Wr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_l(t)){t.flags&=-3;return}const n=rt,i=Cn;rt=t,Cn=!0;try{Op(t);const s=t.fn(t._value);(e.version===0||ls(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{rt=n,Cn=i,Bp(t),t.flags&=-3}}function Ql(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ql(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function X0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Cn=!0;const Hp=[];function Fi(){Hp.push(Cn),Cn=!1}function Oi(){const t=Hp.pop();Cn=t===void 0?!0:t}function Uu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=rt;rt=void 0;try{e()}finally{rt=n}}}let Wr=0;class q0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!rt||!Cn||rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==rt)n=this.activeLink=new q0(rt,this),rt.deps?(n.prevDep=rt.depsTail,rt.depsTail.nextDep=n,rt.depsTail=n):rt.deps=rt.depsTail=n,Gp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=rt.depsTail,n.nextDep=void 0,rt.depsTail.nextDep=n,rt.depsTail=n,rt.deps===n&&(rt.deps=i)}return n}trigger(e){this.version++,Wr++,this.notify(e)}notify(e){Kl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jl()}}}function Gp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Gp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vl=new WeakMap,us=Symbol(""),xl=Symbol(""),Xr=Symbol("");function It(t,e,n){if(Cn&&rt){let i=vl.get(t);i||vl.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Vp),s.map=i,s.key=n),s.track()}}function ri(t,e,n,i,s,r){const o=vl.get(t);if(!o){Wr++;return}const a=c=>{c&&c.trigger()};if(Kl(),e==="clear")o.forEach(a);else{const c=Ie(t),l=c&&Yl(n);if(c&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Xr||!Ii(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Xr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(us)),qs(t)&&a(o.get(xl)));break;case"delete":c||(a(o.get(us)),qs(t)&&a(o.get(xl)));break;case"set":qs(t)&&a(o.get(us));break}}Jl()}function Ms(t){const e=Je(t);return e===t?e:(It(e,"iterate",Xr),Pn(t)?e:e.map(Zt))}function ya(t){return It(t=Je(t),"iterate",Xr),t}const j0={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,Zt)},concat(...t){return Ms(this).concat(...t.map(e=>Ie(e)?Ms(e):e))},entries(){return Ka(this,"entries",t=>(t[1]=Zt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Zt),arguments)},find(t,e){return $n(this,"find",t,e,Zt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Zt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ja(this,"includes",t)},indexOf(...t){return Ja(this,"indexOf",t)},join(t){return Ms(this).join(t)},lastIndexOf(...t){return Ja(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return gr(this,"pop")},push(...t){return gr(this,"push",t)},reduce(t,...e){return Iu(this,"reduce",t,e)},reduceRight(t,...e){return Iu(this,"reduceRight",t,e)},shift(){return gr(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return gr(this,"splice",t)},toReversed(){return Ms(this).toReversed()},toSorted(t){return Ms(this).toSorted(t)},toSpliced(...t){return Ms(this).toSpliced(...t)},unshift(...t){return gr(this,"unshift",t)},values(){return Ka(this,"values",Zt)}};function Ka(t,e,n){const i=ya(t),s=i[e]();return i!==t&&!Pn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const Y0=Array.prototype;function $n(t,e,n,i,s,r){const o=ya(t),a=o!==t&&!Pn(t),c=o[e];if(c!==Y0[e]){const f=c.apply(t,r);return a?Zt(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,Zt(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,i);return a&&s?s(u):u}function Iu(t,e,n,i){const s=ya(t);let r=n;return s!==t&&(Pn(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,Zt(a),c,t)}),s[e](r,...i)}function Ja(t,e,n){const i=Je(t);It(i,"iterate",Xr);const s=i[e](...n);return(s===-1||s===!1)&&iu(n[0])?(n[0]=Je(n[0]),i[e](...n)):s}function gr(t,e,n=[]){Fi(),Kl();const i=Je(t)[e].apply(t,n);return Jl(),Oi(),i}const Z0=Xl("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ii));function K0(t){Ii(t)||(t=String(t));const e=Je(this);return It(e,"has",t),e.hasOwnProperty(t)}class kp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?a_:jp:r?qp:Xp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!s){let c;if(o&&(c=j0[n]))return c;if(n==="hasOwnProperty")return K0}const a=Reflect.get(e,n,qt(e)?e:i);return(Ii(n)?$p.has(n):Z0(n))||(s||It(e,"get",n),r)?a:qt(a)?o&&Yl(n)?a:a.value:ct(a)?s?Yp(a):tu(a):a}}class Wp extends kp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=er(r);if(!Pn(i)&&!er(i)&&(r=Je(r),i=Je(i)),!Ie(e)&&qt(r)&&!qt(i))return c?!1:(r.value=i,!0)}const o=Ie(e)&&Yl(n)?Number(n)<e.length:Ke(e,n),a=Reflect.set(e,n,i,qt(e)?e:s);return e===Je(s)&&(o?ls(i,r)&&ri(e,"set",n,i):ri(e,"add",n,i)),a}deleteProperty(e,n){const i=Ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&ri(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ii(n)||!$p.has(n))&&It(e,"has",n),i}ownKeys(e){return It(e,"iterate",Ie(e)?"length":us),Reflect.ownKeys(e)}}class J0 extends kp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Q0=new Wp,e_=new J0,t_=new Wp(!0);const Ml=t=>t,ho=t=>Reflect.getPrototypeOf(t);function n_(t,e,n){return function(...i){const s=this.__v_raw,r=Je(s),o=qs(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Ml:e?El:Zt;return!e&&It(r,"iterate",c?xl:us),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function i_(t,e){const n={get(s){const r=this.__v_raw,o=Je(r),a=Je(s);t||(ls(s,a)&&It(o,"get",s),It(o,"get",a));const{has:c}=ho(o),l=e?Ml:t?El:Zt;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&It(Je(s),"iterate",us),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Je(r),a=Je(s);return t||(ls(s,a)&&It(o,"has",s),It(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=Je(a),l=e?Ml:t?El:Zt;return!t&&It(c,"iterate",us),a.forEach((u,f)=>s.call(r,l(u),l(f),o))}};return Rt(n,t?{add:po("add"),set:po("set"),delete:po("delete"),clear:po("clear")}:{add(s){!e&&!Pn(s)&&!er(s)&&(s=Je(s));const r=Je(this);return ho(r).has.call(r,s)||(r.add(s),ri(r,"add",s,s)),this},set(s,r){!e&&!Pn(r)&&!er(r)&&(r=Je(r));const o=Je(this),{has:a,get:c}=ho(o);let l=a.call(o,s);l||(s=Je(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?ls(r,u)&&ri(o,"set",s,r):ri(o,"add",s,r),this},delete(s){const r=Je(this),{has:o,get:a}=ho(r);let c=o.call(r,s);c||(s=Je(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&ri(r,"delete",s,void 0),l},clear(){const s=Je(this),r=s.size!==0,o=s.clear();return r&&ri(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=n_(s,t,e)}),n}function eu(t,e){const n=i_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ke(n,s)&&s in i?n:i,s,r)}const s_={get:eu(!1,!1)},r_={get:eu(!1,!0)},o_={get:eu(!0,!1)};const Xp=new WeakMap,qp=new WeakMap,jp=new WeakMap,a_=new WeakMap;function c_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function l_(t){return t.__v_skip||!Object.isExtensible(t)?0:c_(I0(t))}function tu(t){return er(t)?t:nu(t,!1,Q0,s_,Xp)}function u_(t){return nu(t,!1,t_,r_,qp)}function Yp(t){return nu(t,!0,e_,o_,jp)}function nu(t,e,n,i,s){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=l_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function js(t){return er(t)?js(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function iu(t){return t?!!t.__v_raw:!1}function Je(t){const e=t&&t.__v_raw;return e?Je(e):t}function f_(t){return!Ke(t,"__v_skip")&&Object.isExtensible(t)&&Cp(t,"__v_skip",!0),t}const Zt=t=>ct(t)?tu(t):t,El=t=>ct(t)?Yp(t):t;function qt(t){return t?t.__v_isRef===!0:!1}function h_(t){return qt(t)?t.value:t}const d_={get:(t,e,n)=>e==="__v_raw"?t:h_(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return qt(s)&&!qt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Zp(t){return js(t)?t:new Proxy(t,d_)}class p_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return Fp(this,!0),!0}get value(){const e=this.dep.track();return zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function m_(t,e,n=!1){let i,s;return Oe(t)?i=t:(i=t.get,s=t.set),new p_(i,s,n)}const mo={},sa=new WeakMap;let Ji;function g_(t,e=!1,n=Ji){if(n){let i=sa.get(n);i||sa.set(n,i=[]),i.push(t)}}function __(t,e,n=it){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=x=>s?x:Pn(x)||s===!1||s===0?oi(x,1):oi(x);let u,f,h,d,_=!1,g=!1;if(qt(t)?(f=()=>t.value,_=Pn(t)):js(t)?(f=()=>l(t),_=!0):Ie(t)?(g=!0,_=t.some(x=>js(x)||Pn(x)),f=()=>t.map(x=>{if(qt(x))return x.value;if(js(x))return l(x);if(Oe(x))return c?c(x,2):x()})):Oe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){Fi();try{h()}finally{Oi()}}const x=Ji;Ji=u;try{return c?c(t,3,[d]):t(d)}finally{Ji=x}}:f=Vn,e&&s){const x=f,M=s===!0?1/0:s;f=()=>oi(x(),M)}const m=W0(),p=()=>{u.stop(),m&&m.active&&jl(m.effects,u)};if(r&&e){const x=e;e=(...M)=>{x(...M),p()}}let S=g?new Array(t.length).fill(mo):mo;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const M=u.run();if(s||_||(g?M.some((b,w)=>ls(b,S[w])):ls(M,S))){h&&h();const b=Ji;Ji=u;try{const w=[M,S===mo?void 0:g&&S[0]===mo?[]:S,d];c?c(e,3,w):e(...w),S=M}finally{Ji=b}}}else u.run()};return a&&a(E),u=new Ip(f),u.scheduler=o?()=>o(E,!1):E,d=x=>g_(x,!1,u),h=u.onStop=()=>{const x=sa.get(u);if(x){if(c)c(x,4);else for(const M of x)M();sa.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function oi(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,qt(t))oi(t.value,e,n);else if(Ie(t))for(let i=0;i<t.length;i++)oi(t[i],e,n);else if(Tp(t)||qs(t))t.forEach(i=>{oi(i,e,n)});else if(Rp(t)){for(const i in t)oi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&oi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,i){try{return i?t(...i):t()}catch(s){Sa(s,e,n)}}function Ln(t,e,n,i){if(Oe(t)){const s=io(t,e,n,i);return s&&wp(s)&&s.catch(r=>{Sa(r,e,n)}),s}if(Ie(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Ln(t[r],e,n,i));return s}}function Sa(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||it;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(r){Fi(),io(r,null,10,[t,c,l]),Oi();return}}v_(t,n,s,i,o)}function v_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const kt=[];let On=-1;const Ys=[];let Ai=null,Vs=0;const Kp=Promise.resolve();let ra=null;function x_(t){const e=ra||Kp;return t?e.then(this?t.bind(this):t):e}function M_(t){let e=On+1,n=kt.length;for(;e<n;){const i=e+n>>>1,s=kt[i],r=qr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function su(t){if(!(t.flags&1)){const e=qr(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=qr(n)?kt.push(t):kt.splice(M_(e),0,t),t.flags|=1,Jp()}}function Jp(){ra||(ra=Kp.then(em))}function E_(t){Ie(t)?Ys.push(...t):Ai&&t.id===-1?Ai.splice(Vs+1,0,t):t.flags&1||(Ys.push(t),t.flags|=1),Jp()}function Nu(t,e,n=On+1){for(;n<kt.length;n++){const i=kt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;kt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qp(t){if(Ys.length){const e=[...new Set(Ys)].sort((n,i)=>qr(n)-qr(i));if(Ys.length=0,Ai){Ai.push(...e);return}for(Ai=e,Vs=0;Vs<Ai.length;Vs++){const n=Ai[Vs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ai=null,Vs=0}}const qr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function em(t){try{for(On=0;On<kt.length;On++){const e=kt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<kt.length;On++){const e=kt[On];e&&(e.flags&=-2)}On=-1,kt.length=0,Qp(),ra=null,(kt.length||Ys.length)&&em()}}let Jt=null,tm=null;function oa(t){const e=Jt;return Jt=t,tm=t&&t.type.__scopeId||null,e}function nm(t,e=Jt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Xu(-1);const r=oa(e);let o;try{o=t(...s)}finally{oa(r),i._d&&Xu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function wi(t,e){if(Jt===null)return t;const n=Ra(Jt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=it]=e[s];r&&(Oe(r)&&(r={mounted:r,updated:r}),r.deep&&oi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Vi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Fi(),Ln(c,n,8,[t.el,a,t,e]),Oi())}}const y_=Symbol("_vte"),im=t=>t.__isTeleport,Ri=Symbol("_leaveCb"),go=Symbol("_enterCb");function S_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fm(()=>{t.isMounted=!0}),hm(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],sm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},rm=t=>{const e=t.subTree;return e.component?rm(e.component):e},b_={name:"BaseTransition",props:sm,setup(t,{slots:e}){const n=bv(),i=S_();return()=>{const s=e.default&&cm(e.default(),!0);if(!s||!s.length)return;const r=om(s),o=Je(t),{mode:a}=o;if(i.isLeaving)return Qa(r);const c=Fu(r);if(!c)return Qa(r);let l=yl(c,o,i,n,f=>l=f);c.type!==_n&&jr(c,l);let u=n.subTree&&Fu(n.subTree);if(u&&u.type!==_n&&!ts(c,u)&&rm(n).type!==_n){let f=yl(u,o,i,n);if(jr(u,f),a==="out-in"&&c.type!==_n)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Qa(r);a==="in-out"&&c.type!==_n?f.delayLeave=(h,d,_)=>{const g=am(i,u);g[String(u.key)]=u,h[Ri]=()=>{d(),h[Ri]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{_(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function om(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_n){e=n;break}}return e}const T_=b_;function am(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function yl(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:S,onAppearCancelled:E}=e,x=String(t.key),M=am(n,t),b=(v,T)=>{v&&Ln(v,i,9,T)},w=(v,T)=>{const N=T[1];b(v,T),Ie(v)?v.every(U=>U.length<=1)&&N():v.length<=1&&N()},D={mode:o,persisted:a,beforeEnter(v){let T=c;if(!n.isMounted)if(r)T=m||c;else return;v[Ri]&&v[Ri](!0);const N=M[x];N&&ts(t,N)&&N.el[Ri]&&N.el[Ri](),b(T,[v])},enter(v){let T=l,N=u,U=f;if(!n.isMounted)if(r)T=p||l,N=S||u,U=E||f;else return;let I=!1;const F=v[go]=B=>{I||(I=!0,B?b(U,[v]):b(N,[v]),D.delayedLeave&&D.delayedLeave(),v[go]=void 0)};T?w(T,[v,F]):F()},leave(v,T){const N=String(t.key);if(v[go]&&v[go](!0),n.isUnmounting)return T();b(h,[v]);let U=!1;const I=v[Ri]=F=>{U||(U=!0,T(),F?b(g,[v]):b(_,[v]),v[Ri]=void 0,M[N]===t&&delete M[N])};M[N]=t,d?w(d,[v,I]):I()},clone(v){const T=yl(v,e,n,i,s);return s&&s(T),T}};return D}function Qa(t){if(ba(t))return t=Di(t),t.children=null,t}function Fu(t){if(!ba(t))return im(t.type)&&t.children?om(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Oe(n.default))return n.default()}}function jr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cm(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Tn?(o.patchFlag&128&&s++,i=i.concat(cm(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?Di(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function lm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function aa(t,e,n,i,s=!1){if(Ie(t)){t.forEach((_,g)=>aa(_,e&&(Ie(e)?e[g]:e),n,i,s));return}if(zr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&aa(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ra(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState,h=Je(f),d=f===it?()=>!1:_=>Ke(h,_);if(l!=null&&l!==c&&(ht(l)?(u[l]=null,d(l)&&(f[l]=null)):qt(l)&&(l.value=null)),Oe(c))io(c,a,12,[o,u]);else{const _=ht(c),g=qt(c);if(_||g){const m=()=>{if(t.f){const p=_?d(c)?f[c]:u[c]:c.value;s?Ie(p)&&jl(p,r):Ie(p)?p.includes(r)||p.push(r):_?(u[c]=[r],d(c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else _?(u[c]=o,d(c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,an(m,n)):m()}}}Ma().requestIdleCallback;Ma().cancelIdleCallback;const zr=t=>!!t.type.__asyncLoader,ba=t=>t.type.__isKeepAlive;function w_(t,e){um(t,"a",e)}function A_(t,e){um(t,"da",e)}function um(t,e,n=At){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ta(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&R_(i,e,n,s),s=s.parent}}function R_(t,e,n,i){const s=Ta(e,t,i,!0);dm(()=>{jl(i[e],s)},n)}function Ta(t,e,n=At,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Fi();const a=so(n),c=Ln(e,n,t,o);return a(),Oi(),c});return i?s.unshift(r):s.push(r),r}}const hi=t=>(e,n=At)=>{(!Zr||t==="sp")&&Ta(t,(...i)=>e(...i),n)},C_=hi("bm"),fm=hi("m"),P_=hi("bu"),L_=hi("u"),hm=hi("bum"),dm=hi("um"),D_=hi("sp"),U_=hi("rtg"),I_=hi("rtc");function N_(t,e=At){Ta("ec",t,e)}const F_="components";function ec(t,e){return B_(F_,t,!0,e)||t}const O_=Symbol.for("v-ndc");function B_(t,e,n=!0,i=!1){const s=Jt||At;if(s){const r=s.type;{const a=Cv(r,!1);if(a&&(a===e||a===vn(e)||a===xa(vn(e))))return r}const o=Ou(s[t]||r[t],e)||Ou(s.appContext[t],e);return!o&&i?r:o}}function Ou(t,e){return t&&(t[e]||t[vn(e)]||t[xa(vn(e))])}function z_(t,e,n,i){let s;const r=n,o=Ie(t);if(o||ht(t)){const a=o&&js(t);let c=!1;a&&(c=!Pn(t),t=ya(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?Zt(t[l]):t[l],l,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ct(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,r)}}else s=[];return s}const Sl=t=>t?Um(t)?Ra(t):Sl(t.parent):null,Hr=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mm(t),$forceUpdate:t=>t.f||(t.f=()=>{su(t.update)}),$nextTick:t=>t.n||(t.n=x_.bind(t.proxy)),$watch:t=>av.bind(t)}),tc=(t,e)=>t!==it&&!t.__isScriptSetup&&Ke(t,e),H_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(tc(i,e))return o[e]=1,i[e];if(s!==it&&Ke(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Ke(l,e))return o[e]=3,r[e];if(n!==it&&Ke(n,e))return o[e]=4,n[e];bl&&(o[e]=0)}}const u=Hr[e];let f,h;if(u)return e==="$attrs"&&It(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==it&&Ke(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Ke(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return tc(s,e)?(s[e]=n,!0):i!==it&&Ke(i,e)?(i[e]=n,!0):Ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==it&&Ke(t,o)||tc(e,o)||(a=r[0])&&Ke(a,o)||Ke(i,o)||Ke(Hr,o)||Ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bu(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bl=!0;function V_(t){const e=mm(t),n=t.proxy,i=t.ctx;bl=!1,e.beforeCreate&&zu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:E,unmounted:x,render:M,renderTracked:b,renderTriggered:w,errorCaptured:D,serverPrefetch:v,expose:T,inheritAttrs:N,components:U,directives:I,filters:F}=e;if(l&&G_(l,i,null),o)for(const $ in o){const k=o[$];Oe(k)&&(i[$]=k.bind(n))}if(s){const $=s.call(n,n);ct($)&&(t.data=tu($))}if(bl=!0,r)for(const $ in r){const k=r[$],le=Oe(k)?k.bind(n,n):Oe(k.get)?k.get.bind(n,n):Vn,ie=!Oe(k)&&Oe(k.set)?k.set.bind(n):Vn,we=Lv({get:le,set:ie});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>we.value,set:ce=>we.value=ce})}if(a)for(const $ in a)pm(a[$],i,n,$);if(c){const $=Oe(c)?c.call(n):c;Reflect.ownKeys($).forEach(k=>{j_(k,$[k])})}u&&zu(u,t,"c");function V($,k){Ie(k)?k.forEach(le=>$(le.bind(n))):k&&$(k.bind(n))}if(V(C_,f),V(fm,h),V(P_,d),V(L_,_),V(w_,g),V(A_,m),V(N_,D),V(I_,b),V(U_,w),V(hm,S),V(dm,x),V(D_,v),Ie(T))if(T.length){const $=t.exposed||(t.exposed={});T.forEach(k=>{Object.defineProperty($,k,{get:()=>n[k],set:le=>n[k]=le})})}else t.exposed||(t.exposed={});M&&t.render===Vn&&(t.render=M),N!=null&&(t.inheritAttrs=N),U&&(t.components=U),I&&(t.directives=I),v&&lm(t)}function G_(t,e,n=Vn){Ie(t)&&(t=Tl(t));for(const i in t){const s=t[i];let r;ct(s)?"default"in s?r=Jo(s.from||i,s.default,!0):r=Jo(s.from||i):r=Jo(s),qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function zu(t,e,n){Ln(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function pm(t,e,n,i){let s=i.includes(".")?Cm(n,i):()=>n[i];if(ht(t)){const r=e[t];Oe(r)&&ic(s,r)}else if(Oe(t))ic(s,t.bind(n));else if(ct(t))if(Ie(t))t.forEach(r=>pm(r,e,n,i));else{const r=Oe(t.handler)?t.handler.bind(n):e[t.handler];Oe(r)&&ic(s,r,t)}}function mm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>ca(c,l,o,!0)),ca(c,e,o)),ct(e)&&r.set(e,c),c}function ca(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ca(t,r,n,!0),s&&s.forEach(o=>ca(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=$_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $_={data:Hu,props:Vu,emits:Vu,methods:Lr,computed:Lr,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:Lr,directives:Lr,watch:W_,provide:Hu,inject:k_};function Hu(t,e){return e?t?function(){return Rt(Oe(t)?t.call(this,this):t,Oe(e)?e.call(this,this):e)}:e:t}function k_(t,e){return Lr(Tl(t),Tl(e))}function Tl(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Lr(t,e){return t?Rt(Object.create(null),t,e):e}function Vu(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:Rt(Object.create(null),Bu(t),Bu(e??{})):e}function W_(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const i in e)n[i]=Ht(t[i],e[i]);return n}function gm(){return{app:null,config:{isNativeTag:D0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X_=0;function q_(t,e){return function(i,s=null){Oe(i)||(i=Rt({},i)),s!=null&&!ct(s)&&(s=null);const r=gm(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:X_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Uv,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Oe(u.install)?(o.add(u),u.install(l,...f)):Oe(u)&&(o.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,h){if(!c){const d=l._ceVNode||Xt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(d,u,h),c=!0,l._container=u,u.__vue_app__=l,Ra(d.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ln(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){const f=Zs;Zs=l;try{return u()}finally{Zs=f}}};return l}}let Zs=null;function j_(t,e){if(At){let n=At.provides;const i=At.parent&&At.parent.provides;i===n&&(n=At.provides=Object.create(i)),n[t]=e}}function Jo(t,e,n=!1){const i=At||Jt;if(i||Zs){const s=Zs?Zs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Oe(e)?e.call(i&&i.proxy):e}}const _m={},vm=()=>Object.create(_m),xm=t=>Object.getPrototypeOf(t)===_m;function Y_(t,e,n,i=!1){const s={},r=vm();t.propsDefaults=Object.create(null),Mm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:u_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Z_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Je(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(wa(t.emitsOptions,h))continue;const d=e[h];if(c)if(Ke(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const _=vn(h);s[_]=wl(c,a,_,d,t,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{Mm(t,e,s,r)&&(l=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=Ni(f))===f||!Ke(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=wl(c,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Ke(e,f))&&(delete r[f],l=!0)}l&&ri(t.attrs,"set","")}function Mm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fr(c))continue;const l=e[c];let u;s&&Ke(s,u=vn(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:wa(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=Je(n),l=a||it;for(let u=0;u<r.length;u++){const f=r[u];n[f]=wl(s,c,f,l[f],t,!Ke(l,f))}}return o}function wl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const u=so(s);i=l[n]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ni(n))&&(i=!0))}return i}const K_=new WeakMap;function Em(t,e,n=!1){const i=n?K_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Oe(t)){const u=f=>{c=!0;const[h,d]=Em(f,e,!0);Rt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ct(t)&&i.set(t,Xs),Xs;if(Ie(r))for(let u=0;u<r.length;u++){const f=vn(r[u]);Gu(f)&&(o[f]=it)}else if(r)for(const u in r){const f=vn(u);if(Gu(f)){const h=r[u],d=o[f]=Ie(h)||Oe(h)?{type:h}:Rt({},h),_=d.type;let g=!1,m=!0;if(Ie(_))for(let p=0;p<_.length;++p){const S=_[p],E=Oe(S)&&S.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(m=!1)}else g=Oe(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||Ke(d,"default"))&&a.push(f)}}const l=[o,a];return ct(t)&&i.set(t,l),l}function Gu(t){return t[0]!=="$"&&!Fr(t)}const ym=t=>t[0]==="_"||t==="$stable",ru=t=>Ie(t)?t.map(Bn):[Bn(t)],J_=(t,e,n)=>{if(e._n)return e;const i=nm((...s)=>ru(e(...s)),n);return i._c=!1,i},Sm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ym(s))continue;const r=t[s];if(Oe(r))e[s]=J_(s,r,i);else if(r!=null){const o=ru(r);e[s]=()=>o}}},bm=(t,e)=>{const n=ru(e);t.slots.default=()=>n},Tm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Q_=(t,e,n)=>{const i=t.slots=vm();if(t.vnode.shapeFlag&32){const s=e._;s?(Tm(i,e,n),n&&Cp(i,"_",s,!0)):Sm(e,i)}else e&&bm(t,e)},ev=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=it;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Tm(s,e,n):(r=!e.$stable,Sm(e,s)),o=e}else e&&(bm(t,e),o={default:1});if(r)for(const a in s)!ym(a)&&o[a]==null&&delete s[a]},an=pv;function tv(t){return nv(t)}function nv(t,e){const n=Ma();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Vn,insertStaticContent:_}=t,g=(P,L,H,ne=null,Q=null,te=null,pe=void 0,se=null,ae=!!L.dynamicChildren)=>{if(P===L)return;P&&!ts(P,L)&&(ne=R(P),ce(P,Q,te,!0),P=null),L.patchFlag===-2&&(ae=!1,L.dynamicChildren=null);const{type:oe,ref:A,shapeFlag:y}=L;switch(oe){case Aa:m(P,L,H,ne);break;case _n:p(P,L,H,ne);break;case sc:P==null&&S(L,H,ne,pe);break;case Tn:U(P,L,H,ne,Q,te,pe,se,ae);break;default:y&1?M(P,L,H,ne,Q,te,pe,se,ae):y&6?I(P,L,H,ne,Q,te,pe,se,ae):(y&64||y&128)&&oe.process(P,L,H,ne,Q,te,pe,se,ae,fe)}A!=null&&Q&&aa(A,P&&P.ref,te,L||P,!L)},m=(P,L,H,ne)=>{if(P==null)i(L.el=a(L.children),H,ne);else{const Q=L.el=P.el;L.children!==P.children&&l(Q,L.children)}},p=(P,L,H,ne)=>{P==null?i(L.el=c(L.children||""),H,ne):L.el=P.el},S=(P,L,H,ne)=>{[P.el,P.anchor]=_(P.children,L,H,ne,P.el,P.anchor)},E=({el:P,anchor:L},H,ne)=>{let Q;for(;P&&P!==L;)Q=h(P),i(P,H,ne),P=Q;i(L,H,ne)},x=({el:P,anchor:L})=>{let H;for(;P&&P!==L;)H=h(P),s(P),P=H;s(L)},M=(P,L,H,ne,Q,te,pe,se,ae)=>{L.type==="svg"?pe="svg":L.type==="math"&&(pe="mathml"),P==null?b(L,H,ne,Q,te,pe,se,ae):v(P,L,Q,te,pe,se,ae)},b=(P,L,H,ne,Q,te,pe,se)=>{let ae,oe;const{props:A,shapeFlag:y,transition:z,dirs:q}=P;if(ae=P.el=o(P.type,te,A&&A.is,A),y&8?u(ae,P.children):y&16&&D(P.children,ae,null,ne,Q,nc(P,te),pe,se),q&&Vi(P,null,ne,"created"),w(ae,P,P.scopeId,pe,ne),A){for(const ue in A)ue!=="value"&&!Fr(ue)&&r(ae,ue,null,A[ue],te,ne);"value"in A&&r(ae,"value",null,A.value,te),(oe=A.onVnodeBeforeMount)&&Un(oe,ne,P)}q&&Vi(P,null,ne,"beforeMount");const Z=iv(Q,z);Z&&z.beforeEnter(ae),i(ae,L,H),((oe=A&&A.onVnodeMounted)||Z||q)&&an(()=>{oe&&Un(oe,ne,P),Z&&z.enter(ae),q&&Vi(P,null,ne,"mounted")},Q)},w=(P,L,H,ne,Q)=>{if(H&&d(P,H),ne)for(let te=0;te<ne.length;te++)d(P,ne[te]);if(Q){let te=Q.subTree;if(L===te||Lm(te.type)&&(te.ssContent===L||te.ssFallback===L)){const pe=Q.vnode;w(P,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},D=(P,L,H,ne,Q,te,pe,se,ae=0)=>{for(let oe=ae;oe<P.length;oe++){const A=P[oe]=se?Ci(P[oe]):Bn(P[oe]);g(null,A,L,H,ne,Q,te,pe,se)}},v=(P,L,H,ne,Q,te,pe)=>{const se=L.el=P.el;let{patchFlag:ae,dynamicChildren:oe,dirs:A}=L;ae|=P.patchFlag&16;const y=P.props||it,z=L.props||it;let q;if(H&&Gi(H,!1),(q=z.onVnodeBeforeUpdate)&&Un(q,H,L,P),A&&Vi(L,P,H,"beforeUpdate"),H&&Gi(H,!0),(y.innerHTML&&z.innerHTML==null||y.textContent&&z.textContent==null)&&u(se,""),oe?T(P.dynamicChildren,oe,se,H,ne,nc(L,Q),te):pe||k(P,L,se,null,H,ne,nc(L,Q),te,!1),ae>0){if(ae&16)N(se,y,z,H,Q);else if(ae&2&&y.class!==z.class&&r(se,"class",null,z.class,Q),ae&4&&r(se,"style",y.style,z.style,Q),ae&8){const Z=L.dynamicProps;for(let ue=0;ue<Z.length;ue++){const xe=Z[ue],Me=y[xe],j=z[xe];(j!==Me||xe==="value")&&r(se,xe,Me,j,Q,H)}}ae&1&&P.children!==L.children&&u(se,L.children)}else!pe&&oe==null&&N(se,y,z,H,Q);((q=z.onVnodeUpdated)||A)&&an(()=>{q&&Un(q,H,L,P),A&&Vi(L,P,H,"updated")},ne)},T=(P,L,H,ne,Q,te,pe)=>{for(let se=0;se<L.length;se++){const ae=P[se],oe=L[se],A=ae.el&&(ae.type===Tn||!ts(ae,oe)||ae.shapeFlag&70)?f(ae.el):H;g(ae,oe,A,null,ne,Q,te,pe,!0)}},N=(P,L,H,ne,Q)=>{if(L!==H){if(L!==it)for(const te in L)!Fr(te)&&!(te in H)&&r(P,te,L[te],null,Q,ne);for(const te in H){if(Fr(te))continue;const pe=H[te],se=L[te];pe!==se&&te!=="value"&&r(P,te,se,pe,Q,ne)}"value"in H&&r(P,"value",L.value,H.value,Q)}},U=(P,L,H,ne,Q,te,pe,se,ae)=>{const oe=L.el=P?P.el:a(""),A=L.anchor=P?P.anchor:a("");let{patchFlag:y,dynamicChildren:z,slotScopeIds:q}=L;q&&(se=se?se.concat(q):q),P==null?(i(oe,H,ne),i(A,H,ne),D(L.children||[],H,A,Q,te,pe,se,ae)):y>0&&y&64&&z&&P.dynamicChildren?(T(P.dynamicChildren,z,H,Q,te,pe,se),(L.key!=null||Q&&L===Q.subTree)&&wm(P,L,!0)):k(P,L,H,A,Q,te,pe,se,ae)},I=(P,L,H,ne,Q,te,pe,se,ae)=>{L.slotScopeIds=se,P==null?L.shapeFlag&512?Q.ctx.activate(L,H,ne,pe,ae):F(L,H,ne,Q,te,pe,ae):B(P,L,ae)},F=(P,L,H,ne,Q,te,pe)=>{const se=P.component=Sv(P,ne,Q);if(ba(P)&&(se.ctx.renderer=fe),Tv(se,!1,pe),se.asyncDep){if(Q&&Q.registerDep(se,V,pe),!P.el){const ae=se.subTree=Xt(_n);p(null,ae,L,H)}}else V(se,P,L,H,Q,te,pe)},B=(P,L,H)=>{const ne=L.component=P.component;if(hv(P,L,H))if(ne.asyncDep&&!ne.asyncResolved){$(ne,L,H);return}else ne.next=L,ne.update();else L.el=P.el,ne.vnode=L},V=(P,L,H,ne,Q,te,pe)=>{const se=()=>{if(P.isMounted){let{next:y,bu:z,u:q,parent:Z,vnode:ue}=P;{const Ae=Am(P);if(Ae){y&&(y.el=ue.el,$(P,y,pe)),Ae.asyncDep.then(()=>{P.isUnmounted||se()});return}}let xe=y,Me;Gi(P,!1),y?(y.el=ue.el,$(P,y,pe)):y=ue,z&&Ko(z),(Me=y.props&&y.props.onVnodeBeforeUpdate)&&Un(Me,Z,y,ue),Gi(P,!0);const j=ku(P),be=P.subTree;P.subTree=j,g(be,j,f(be.el),R(be),P,Q,te),y.el=j.el,xe===null&&dv(P,j.el),q&&an(q,Q),(Me=y.props&&y.props.onVnodeUpdated)&&an(()=>Un(Me,Z,y,ue),Q)}else{let y;const{el:z,props:q}=L,{bm:Z,m:ue,parent:xe,root:Me,type:j}=P,be=zr(L);Gi(P,!1),Z&&Ko(Z),!be&&(y=q&&q.onVnodeBeforeMount)&&Un(y,xe,L),Gi(P,!0);{Me.ce&&Me.ce._injectChildStyle(j);const Ae=P.subTree=ku(P);g(null,Ae,H,ne,P,Q,te),L.el=Ae.el}if(ue&&an(ue,Q),!be&&(y=q&&q.onVnodeMounted)){const Ae=L;an(()=>Un(y,xe,Ae),Q)}(L.shapeFlag&256||xe&&zr(xe.vnode)&&xe.vnode.shapeFlag&256)&&P.a&&an(P.a,Q),P.isMounted=!0,L=H=ne=null}};P.scope.on();const ae=P.effect=new Ip(se);P.scope.off();const oe=P.update=ae.run.bind(ae),A=P.job=ae.runIfDirty.bind(ae);A.i=P,A.id=P.uid,ae.scheduler=()=>su(A),Gi(P,!0),oe()},$=(P,L,H)=>{L.component=P;const ne=P.vnode.props;P.vnode=L,P.next=null,Z_(P,L.props,ne,H),ev(P,L.children,H),Fi(),Nu(P),Oi()},k=(P,L,H,ne,Q,te,pe,se,ae=!1)=>{const oe=P&&P.children,A=P?P.shapeFlag:0,y=L.children,{patchFlag:z,shapeFlag:q}=L;if(z>0){if(z&128){ie(oe,y,H,ne,Q,te,pe,se,ae);return}else if(z&256){le(oe,y,H,ne,Q,te,pe,se,ae);return}}q&8?(A&16&&ve(oe,Q,te),y!==oe&&u(H,y)):A&16?q&16?ie(oe,y,H,ne,Q,te,pe,se,ae):ve(oe,Q,te,!0):(A&8&&u(H,""),q&16&&D(y,H,ne,Q,te,pe,se,ae))},le=(P,L,H,ne,Q,te,pe,se,ae)=>{P=P||Xs,L=L||Xs;const oe=P.length,A=L.length,y=Math.min(oe,A);let z;for(z=0;z<y;z++){const q=L[z]=ae?Ci(L[z]):Bn(L[z]);g(P[z],q,H,null,Q,te,pe,se,ae)}oe>A?ve(P,Q,te,!0,!1,y):D(L,H,ne,Q,te,pe,se,ae,y)},ie=(P,L,H,ne,Q,te,pe,se,ae)=>{let oe=0;const A=L.length;let y=P.length-1,z=A-1;for(;oe<=y&&oe<=z;){const q=P[oe],Z=L[oe]=ae?Ci(L[oe]):Bn(L[oe]);if(ts(q,Z))g(q,Z,H,null,Q,te,pe,se,ae);else break;oe++}for(;oe<=y&&oe<=z;){const q=P[y],Z=L[z]=ae?Ci(L[z]):Bn(L[z]);if(ts(q,Z))g(q,Z,H,null,Q,te,pe,se,ae);else break;y--,z--}if(oe>y){if(oe<=z){const q=z+1,Z=q<A?L[q].el:ne;for(;oe<=z;)g(null,L[oe]=ae?Ci(L[oe]):Bn(L[oe]),H,Z,Q,te,pe,se,ae),oe++}}else if(oe>z)for(;oe<=y;)ce(P[oe],Q,te,!0),oe++;else{const q=oe,Z=oe,ue=new Map;for(oe=Z;oe<=z;oe++){const Ee=L[oe]=ae?Ci(L[oe]):Bn(L[oe]);Ee.key!=null&&ue.set(Ee.key,oe)}let xe,Me=0;const j=z-Z+1;let be=!1,Ae=0;const Le=new Array(j);for(oe=0;oe<j;oe++)Le[oe]=0;for(oe=q;oe<=y;oe++){const Ee=P[oe];if(Me>=j){ce(Ee,Q,te,!0);continue}let Ne;if(Ee.key!=null)Ne=ue.get(Ee.key);else for(xe=Z;xe<=z;xe++)if(Le[xe-Z]===0&&ts(Ee,L[xe])){Ne=xe;break}Ne===void 0?ce(Ee,Q,te,!0):(Le[Ne-Z]=oe+1,Ne>=Ae?Ae=Ne:be=!0,g(Ee,L[Ne],H,null,Q,te,pe,se,ae),Me++)}const Te=be?sv(Le):Xs;for(xe=Te.length-1,oe=j-1;oe>=0;oe--){const Ee=Z+oe,Ne=L[Ee],Ze=Ee+1<A?L[Ee+1].el:ne;Le[oe]===0?g(null,Ne,H,Ze,Q,te,pe,se,ae):be&&(xe<0||oe!==Te[xe]?we(Ne,H,Ze,2):xe--)}}},we=(P,L,H,ne,Q=null)=>{const{el:te,type:pe,transition:se,children:ae,shapeFlag:oe}=P;if(oe&6){we(P.component.subTree,L,H,ne);return}if(oe&128){P.suspense.move(L,H,ne);return}if(oe&64){pe.move(P,L,H,fe);return}if(pe===Tn){i(te,L,H);for(let y=0;y<ae.length;y++)we(ae[y],L,H,ne);i(P.anchor,L,H);return}if(pe===sc){E(P,L,H);return}if(ne!==2&&oe&1&&se)if(ne===0)se.beforeEnter(te),i(te,L,H),an(()=>se.enter(te),Q);else{const{leave:y,delayLeave:z,afterLeave:q}=se,Z=()=>i(te,L,H),ue=()=>{y(te,()=>{Z(),q&&q()})};z?z(te,Z,ue):ue()}else i(te,L,H)},ce=(P,L,H,ne=!1,Q=!1)=>{const{type:te,props:pe,ref:se,children:ae,dynamicChildren:oe,shapeFlag:A,patchFlag:y,dirs:z,cacheIndex:q}=P;if(y===-2&&(Q=!1),se!=null&&aa(se,null,H,P,!0),q!=null&&(L.renderCache[q]=void 0),A&256){L.ctx.deactivate(P);return}const Z=A&1&&z,ue=!zr(P);let xe;if(ue&&(xe=pe&&pe.onVnodeBeforeUnmount)&&Un(xe,L,P),A&6)me(P.component,H,ne);else{if(A&128){P.suspense.unmount(H,ne);return}Z&&Vi(P,null,L,"beforeUnmount"),A&64?P.type.remove(P,L,H,fe,ne):oe&&!oe.hasOnce&&(te!==Tn||y>0&&y&64)?ve(oe,L,H,!1,!0):(te===Tn&&y&384||!Q&&A&16)&&ve(ae,L,H),ne&&Y(P)}(ue&&(xe=pe&&pe.onVnodeUnmounted)||Z)&&an(()=>{xe&&Un(xe,L,P),Z&&Vi(P,null,L,"unmounted")},H)},Y=P=>{const{type:L,el:H,anchor:ne,transition:Q}=P;if(L===Tn){re(H,ne);return}if(L===sc){x(P);return}const te=()=>{s(H),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(P.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:se}=Q,ae=()=>pe(H,te);se?se(P.el,te,ae):ae()}else te()},re=(P,L)=>{let H;for(;P!==L;)H=h(P),s(P),P=H;s(L)},me=(P,L,H)=>{const{bum:ne,scope:Q,job:te,subTree:pe,um:se,m:ae,a:oe}=P;$u(ae),$u(oe),ne&&Ko(ne),Q.stop(),te&&(te.flags|=8,ce(pe,P,L,H)),se&&an(se,L),an(()=>{P.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},ve=(P,L,H,ne=!1,Q=!1,te=0)=>{for(let pe=te;pe<P.length;pe++)ce(P[pe],L,H,ne,Q)},R=P=>{if(P.shapeFlag&6)return R(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const L=h(P.anchor||P.el),H=L&&L[y_];return H?h(H):L};let de=!1;const ye=(P,L,H)=>{P==null?L._vnode&&ce(L._vnode,null,null,!0):g(L._vnode||null,P,L,null,null,null,H),L._vnode=P,de||(de=!0,Nu(),Qp(),de=!1)},fe={p:g,um:ce,m:we,r:Y,mt:F,mc:D,pc:k,pbc:T,n:R,o:t};return{render:ye,hydrate:void 0,createApp:q_(ye)}}function nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function iv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wm(t,e,n=!1){const i=t.children,s=e.children;if(Ie(i)&&Ie(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ci(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&wm(o,a)),a.type===Aa&&(a.el=o.el)}}function sv(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Am(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Am(e)}function $u(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const rv=Symbol.for("v-scx"),ov=()=>Jo(rv);function ic(t,e,n){return Rm(t,e,n)}function Rm(t,e,n=it){const{immediate:i,deep:s,flush:r,once:o}=n,a=Rt({},n),c=e&&i||!e&&r!=="post";let l;if(Zr){if(r==="sync"){const d=ov();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=Vn,d.resume=Vn,d.pause=Vn,d}}const u=At;a.call=(d,_,g)=>Ln(d,u,_,g);let f=!1;r==="post"?a.scheduler=d=>{an(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():su(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=__(t,e,a);return Zr&&(l?l.push(h):c&&h()),h}function av(t,e,n){const i=this.proxy,s=ht(t)?t.includes(".")?Cm(i,t):()=>i[t]:t.bind(i,i);let r;Oe(e)?r=e:(r=e.handler,n=e);const o=so(this),a=Rm(s,r.bind(i),n);return o(),a}function Cm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const cv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vn(e)}Modifiers`]||t[`${Ni(e)}Modifiers`];function lv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||it;let s=n;const r=e.startsWith("update:"),o=r&&cv(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>ht(u)?u.trim():u)),o.number&&(s=n.map(gl)));let a,c=i[a=ja(e)]||i[a=ja(vn(e))];!c&&r&&(c=i[a=ja(Ni(e))]),c&&Ln(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ln(l,t,6,s)}}function Pm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Oe(t)){const c=l=>{const u=Pm(l,e,!0);u&&(a=!0,Rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ct(t)&&i.set(t,null),null):(Ie(r)?r.forEach(c=>o[c]=null):Rt(o,r),ct(t)&&i.set(t,o),o)}function wa(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(t,e[0].toLowerCase()+e.slice(1))||Ke(t,Ni(e))||Ke(t,e))}function ku(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=t,m=oa(t);let p,S;try{if(n.shapeFlag&4){const x=s||i,M=x;p=Bn(l.call(M,x,u,f,d,h,_)),S=a}else{const x=e;p=Bn(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),S=e.props?a:uv(a)}}catch(x){Vr.length=0,Sa(x,t,1),p=Xt(_n)}let E=p;if(S&&g!==!1){const x=Object.keys(S),{shapeFlag:M}=E;x.length&&M&7&&(r&&x.some(ql)&&(S=fv(S,r)),E=Di(E,S,!1,!0))}return n.dirs&&(E=Di(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&jr(E,n.transition),p=E,oa(m),p}const uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},fv=(t,e)=>{const n={};for(const i in t)(!ql(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function hv(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Wu(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!wa(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Wu(i,o,l):!0:!!o;return!1}function Wu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!wa(n,r))return!0}return!1}function dv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lm=t=>t.__isSuspense;function pv(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):E_(t)}const Tn=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),sc=Symbol.for("v-stc"),Vr=[];let ln=null;function rs(t=!1){Vr.push(ln=t?null:[])}function mv(){Vr.pop(),ln=Vr[Vr.length-1]||null}let Yr=1;function Xu(t,e=!1){Yr+=t,t<0&&ln&&e&&(ln.hasOnce=!0)}function gv(t){return t.dynamicChildren=Yr>0?ln||Xs:null,mv(),Yr>0&&ln&&ln.push(t),t}function os(t,e,n,i,s,r){return gv(Ye(t,e,n,i,s,r,!0))}function la(t){return t?t.__v_isVNode===!0:!1}function ts(t,e){return t.type===e.type&&t.key===e.key}const Dm=({key:t})=>t??null,Qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||qt(t)||Oe(t)?{i:Jt,r:t,k:e,f:!!n}:t:null);function Ye(t,e=null,n=null,i=0,s=null,r=t===Tn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dm(e),ref:e&&Qo(e),scopeId:tm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Jt};return a?(ou(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ht(n)?8:16),Yr>0&&!o&&ln&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ln.push(c),c}const Xt=_v;function _v(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===O_)&&(t=_n),la(t)){const a=Di(t,e,!0);return n&&ou(a,n),Yr>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag=-2,a}if(Pv(t)&&(t=t.__vccOpts),e){e=vv(e);let{class:a,style:c}=e;a&&!ht(a)&&(e.class=Ea(a)),ct(c)&&(iu(c)&&!Ie(c)&&(c=Rt({},c)),e.style=Zl(c))}const o=ht(t)?1:Lm(t)?128:im(t)?64:ct(t)?4:Oe(t)?2:0;return Ye(t,e,n,i,s,o,r,!0)}function vv(t){return t?iu(t)||xm(t)?Rt({},t):t:null}function Di(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?Mv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Dm(l),ref:e&&e.ref?n&&r?Ie(r)?r.concat(Qo(e)):[r,Qo(e)]:Qo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Di(t.ssContent),ssFallback:t.ssFallback&&Di(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&jr(u,c.clone(u)),u}function xv(t=" ",e=0){return Xt(Aa,null,t,e)}function Bn(t){return t==null||typeof t=="boolean"?Xt(_n):Ie(t)?Xt(Tn,null,t.slice()):la(t)?Ci(t):Xt(Aa,null,String(t))}function Ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Di(t)}function ou(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ou(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xm(e)?e._ctx=Jt:s===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Jt},n=32):(e=String(e),i&64?(n=16,e=[xv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ea([e.class,i.class]));else if(s==="style")e.style=Zl([e.style,i.style]);else if(ga(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ie(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Un(t,e,n,i=null){Ln(t,e,7,[n,i])}const Ev=gm();let yv=0;function Sv(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Ev,r={uid:yv++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new k0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Em(i,s),emitsOptions:Pm(i,s),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=lv.bind(null,r),t.ce&&t.ce(r),r}let At=null;const bv=()=>At||Jt;let ua,Al;{const t=Ma(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ua=e("__VUE_INSTANCE_SETTERS__",n=>At=n),Al=e("__VUE_SSR_SETTERS__",n=>Zr=n)}const so=t=>{const e=At;return ua(t),t.scope.on(),()=>{t.scope.off(),ua(e)}},qu=()=>{At&&At.scope.off(),ua(null)};function Um(t){return t.vnode.shapeFlag&4}let Zr=!1;function Tv(t,e=!1,n=!1){e&&Al(e);const{props:i,children:s}=t.vnode,r=Um(t);Y_(t,i,r,e),Q_(t,s,n);const o=r?wv(t,e):void 0;return e&&Al(!1),o}function wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,H_);const{setup:i}=n;if(i){Fi();const s=t.setupContext=i.length>1?Rv(t):null,r=so(t),o=io(i,t,0,[t.props,s]),a=wp(o);if(Oi(),r(),(a||t.sp)&&!zr(t)&&lm(t),a){if(o.then(qu,qu),e)return o.then(c=>{ju(t,c)}).catch(c=>{Sa(c,t,0)});t.asyncDep=o}else ju(t,o)}else Im(t)}function ju(t,e,n){Oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=Zp(e)),Im(t)}function Im(t,e,n){const i=t.type;t.render||(t.render=i.render||Vn);{const s=so(t);Fi();try{V_(t)}finally{Oi(),s()}}}const Av={get(t,e){return It(t,"get",""),t[e]}};function Rv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Av),slots:t.slots,emit:t.emit,expose:e}}function Ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zp(f_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hr)return Hr[n](t)},has(e,n){return n in e||n in Hr}})):t.proxy}function Cv(t,e=!0){return Oe(t)?t.displayName||t.name:t.name||e&&t.__name}function Pv(t){return Oe(t)&&"__vccOpts"in t}const Lv=(t,e)=>m_(t,e,Zr);function Dv(t,e,n){const i=arguments.length;return i===2?ct(e)&&!Ie(e)?la(e)?Xt(t,null,[e]):Xt(t,e):Xt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&la(n)&&(n=[n]),Xt(t,e,n))}const Uv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{Rl=Yu.createPolicy("vue",{createHTML:t=>t})}catch{}const Nm=Rl?t=>Rl.createHTML(t):t=>t,Iv="http://www.w3.org/2000/svg",Nv="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,Zu=si&&si.createElement("template"),Fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?si.createElementNS(Iv,t):e==="mathml"?si.createElementNS(Nv,t):n?si.createElement(t,{is:n}):si.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>si.createTextNode(t),createComment:t=>si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Zu.innerHTML=Nm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Zu.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mi="transition",_r="animation",Kr=Symbol("_vtc"),Fm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ov=Rt({},sm,Fm),Bv=t=>(t.displayName="Transition",t.props=Ov,t),zv=Bv((t,{slots:e})=>Dv(T_,Hv(t),e)),$i=(t,e=[])=>{Ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ku=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Hv(t){const e={};for(const U in t)U in Fm||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=Vv(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:E,onLeave:x,onLeaveCancelled:M,onBeforeAppear:b=p,onAppear:w=S,onAppearCancelled:D=E}=e,v=(U,I,F,B)=>{U._enterCancelled=B,ki(U,I?u:a),ki(U,I?l:o),F&&F()},T=(U,I)=>{U._isLeaving=!1,ki(U,f),ki(U,d),ki(U,h),I&&I()},N=U=>(I,F)=>{const B=U?w:S,V=()=>v(I,U,F);$i(B,[I,V]),Ju(()=>{ki(I,U?c:r),kn(I,U?u:a),Ku(B)||Qu(I,i,g,V)})};return Rt(e,{onBeforeEnter(U){$i(p,[U]),kn(U,r),kn(U,o)},onBeforeAppear(U){$i(b,[U]),kn(U,c),kn(U,l)},onEnter:N(!1),onAppear:N(!0),onLeave(U,I){U._isLeaving=!0;const F=()=>T(U,I);kn(U,f),U._enterCancelled?(kn(U,h),nf()):(nf(),kn(U,h)),Ju(()=>{U._isLeaving&&(ki(U,f),kn(U,d),Ku(x)||Qu(U,i,m,F))}),$i(x,[U,F])},onEnterCancelled(U){v(U,!1,void 0,!0),$i(E,[U])},onAppearCancelled(U){v(U,!0,void 0,!0),$i(D,[U])},onLeaveCancelled(U){T(U),$i(M,[U])}})}function Vv(t){if(t==null)return null;if(ct(t))return[rc(t.enter),rc(t.leave)];{const e=rc(t);return[e,e]}}function rc(t){return O0(t)}function kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Kr]||(t[Kr]=new Set)).add(e)}function ki(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Kr];n&&(n.delete(e),n.size||(t[Kr]=void 0))}function Ju(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Gv=0;function Qu(t,e,n,i){const s=t._endId=++Gv,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=$v(t,e);if(!o)return i();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),r()},h=d=>{d.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function $v(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${mi}Delay`),r=i(`${mi}Duration`),o=ef(s,r),a=i(`${_r}Delay`),c=i(`${_r}Duration`),l=ef(a,c);let u=null,f=0,h=0;e===mi?o>0&&(u=mi,f=o,h=r.length):e===_r?l>0&&(u=_r,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?mi:_r:null,h=u?u===mi?r.length:c.length:0);const d=u===mi&&/\b(transform|all)(,|$)/.test(i(`${mi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function ef(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>tf(n)+tf(t[i])))}function tf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nf(){return document.body.offsetHeight}function kv(t,e,n){const i=t[Kr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fa=Symbol("_vod"),Om=Symbol("_vsh"),Wv={beforeMount(t,{value:e},{transition:n}){t[fa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):vr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),vr(t,!0),i.enter(t)):i.leave(t,()=>{vr(t,!1)}):vr(t,e))},beforeUnmount(t,{value:e}){vr(t,e)}};function vr(t,e){t.style.display=e?t[fa]:"none",t[Om]=!e}const Xv=Symbol(""),qv=/(^|;)\s*display\s*:/;function jv(t,e,n){const i=t.style,s=ht(n);let r=!1;if(n&&!s){if(e)if(ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ea(i,a,"")}else for(const o in e)n[o]==null&&ea(i,o,"");for(const o in n)o==="display"&&(r=!0),ea(i,o,n[o])}else if(s){if(e!==n){const o=i[Xv];o&&(n+=";"+o),i.cssText=n,r=qv.test(n)}}else e&&t.removeAttribute("style");fa in t&&(t[fa]=r?i.display:"",t[Om]&&(i.display="none"))}const sf=/\s*!important$/;function ea(t,e,n){if(Ie(n))n.forEach(i=>ea(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Yv(t,e);sf.test(n)?t.setProperty(Ni(i),n.replace(sf,""),"important"):t[i]=n}}const rf=["Webkit","Moz","ms"],oc={};function Yv(t,e){const n=oc[e];if(n)return n;let i=vn(e);if(i!=="filter"&&i in t)return oc[e]=i;i=xa(i);for(let s=0;s<rf.length;s++){const r=rf[s]+i;if(r in t)return oc[e]=r}return e}const of="http://www.w3.org/1999/xlink";function af(t,e,n,i,s,r=$0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(of,e.slice(6,e.length)):t.setAttributeNS(of,e,n):n==null||r&&!Pp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ii(n)?String(n):n)}function cf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Nm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Pp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Gs(t,e,n,i){t.addEventListener(e,n,i)}function Zv(t,e,n,i){t.removeEventListener(e,n,i)}const lf=Symbol("_vei");function Kv(t,e,n,i,s=null){const r=t[lf]||(t[lf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=Jv(e);if(i){const l=r[e]=tx(i,s);Gs(t,a,l,c)}else o&&(Zv(t,a,o,c),r[e]=void 0)}}const uf=/(?:Once|Passive|Capture)$/;function Jv(t){let e;if(uf.test(t)){e={};let i;for(;i=t.match(uf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ni(t.slice(2)),e]}let ac=0;const Qv=Promise.resolve(),ex=()=>ac||(Qv.then(()=>ac=0),ac=Date.now());function tx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ln(nx(i,n.value),e,5,[i])};return n.value=t,n.attached=ex(),n}function nx(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ff=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ix=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?kv(t,i,o):e==="style"?jv(t,n,i):ga(e)?ql(e)||Kv(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sx(t,e,i,o))?(cf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&af(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ht(i))?cf(t,vn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),af(t,e,i,o))};function sx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ff(e)&&Oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ff(e)&&ht(n)?!1:e in t}const hf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ie(e)?n=>Ko(e,n):e};function rx(t){t.target.composing=!0}function df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cc=Symbol("_assign"),Wi={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[cc]=hf(s);const r=i||s.props&&s.props.type==="number";Gs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=gl(a)),t[cc](a)}),n&&Gs(t,"change",()=>{t.value=t.value.trim()}),e||(Gs(t,"compositionstart",rx),Gs(t,"compositionend",df),Gs(t,"change",df))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[cc]=hf(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?gl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},ox=["ctrl","shift","alt","meta"],ax={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ox.some(n=>t[`${n}Key`]&&!e.includes(n))},cx=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=ax[e[o]];if(a&&a(s,e))return}return t(s,...r)})},lx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xi=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=Ni(s.key);if(e.some(o=>o===r||lx[o]===r))return t(s)})},ux=Rt({patchProp:ix},Fv);let pf;function fx(){return pf||(pf=tv(ux))}const hx=(...t)=>{const e=fx().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=px(i);if(!s)return;const r=e._component;!Oe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,dx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function dx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function px(t){return ht(t)?document.querySelector(t):t}const Ca=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},mx={name:"InputForm",props:{initialWidth:{type:Number,default:155},initialDepth:{type:Number,default:105},initialSafety:{type:Number,default:0},initialBottomHeight:{type:Number,default:15},initialTopHeight:{type:Number,default:25},initialBorderThickness:{type:Number,default:2.5}},data(){return{localWidth:this.initialWidth,localDepth:this.initialDepth,localSafety:this.initialSafety,localBottomHeight:this.initialBottomHeight,localTopHeight:this.initialTopHeight,localBorderThickness:this.initialBorderThickness}},methods:{emitValues(){this.$emit("update-dimensions",{width:this.localWidth,depth:this.localDepth,safety:this.localSafety,bottomHeight:this.localBottomHeight,topHeight:this.localTopHeight,borderThickness:this.localBorderThickness})}}},gx={class:"flex-1 mb-4"},_x={class:"flex-1 mb-4"},vx={class:"flex-1 mb-4"},xx={class:"flex items-center space-x-2 mt-1"},Mx={class:"flex-1 mb-4"},Ex={class:"flex-1 mb-4"},yx={class:"flex-1 mb-4"};function Sx(t,e,n,i,s,r){return rs(),os("form",{onSubmit:e[28]||(e[28]=cx(()=>{},["prevent"])),class:"flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end",style:{width:"100%","max-width":"600px",margin:"0 auto","box-sizing":"border-box"}},[Ye("div",gx,[e[29]||(e[29]=Ye("label",{class:"block text-sm font-medium text-gray-700"},"Width (mm):",-1)),wi(Ye("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.localWidth=o),onBlur:e[1]||(e[1]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[2]||(e[2]=Xi((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[3]||(e[3]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter width",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[Wi,s.localWidth,void 0,{number:!0}]])]),Ye("div",_x,[e[30]||(e[30]=Ye("label",{class:"block text-sm font-medium text-gray-700"},"Depth (mm):",-1)),wi(Ye("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s.localDepth=o),onBlur:e[5]||(e[5]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[6]||(e[6]=Xi((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[7]||(e[7]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter depth",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[Wi,s.localDepth,void 0,{number:!0}]])]),Ye("div",vx,[e[31]||(e[31]=Ye("label",{class:"block text-sm font-medium text-gray-700"},"Safety Offset (mm):",-1)),Ye("div",xx,[wi(Ye("input",{type:"range","onUpdate:modelValue":e[8]||(e[8]=o=>s.localSafety=o),onBlur:e[9]||(e[9]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[10]||(e[10]=Xi((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[11]||(e[11]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"-2",max:"2",step:"0.1",class:"w-full"},null,544),[[Wi,s.localSafety,void 0,{number:!0}]]),wi(Ye("input",{type:"number","onUpdate:modelValue":e[12]||(e[12]=o=>s.localSafety=o),onBlur:e[13]||(e[13]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[14]||(e[14]=Xi((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[15]||(e[15]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"-2",max:"2",step:"0.1",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[Wi,s.localSafety,void 0,{number:!0}]])])]),Ye("div",Mx,[e[32]||(e[32]=Ye("label",{class:"block text-sm font-medium text-gray-700"},"Bottom Height (mm):",-1)),wi(Ye("input",{"onUpdate:modelValue":e[16]||(e[16]=o=>s.localBottomHeight=o),onBlur:e[17]||(e[17]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[18]||(e[18]=Xi((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[19]||(e[19]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter bottom height",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[Wi,s.localBottomHeight,void 0,{number:!0}]])]),Ye("div",Ex,[e[33]||(e[33]=Ye("label",{class:"block text-sm font-medium text-gray-700"},"Top Height (mm):",-1)),wi(Ye("input",{"onUpdate:modelValue":e[20]||(e[20]=o=>s.localTopHeight=o),onBlur:e[21]||(e[21]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[22]||(e[22]=Xi((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[23]||(e[23]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter top height",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[Wi,s.localTopHeight,void 0,{number:!0}]])]),Ye("div",yx,[e[34]||(e[34]=Ye("label",{class:"block text-sm font-medium text-gray-700"},"Border Thickness (mm):",-1)),wi(Ye("input",{"onUpdate:modelValue":e[24]||(e[24]=o=>s.localBorderThickness=o),onBlur:e[25]||(e[25]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[26]||(e[26]=Xi((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[27]||(e[27]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter border thickness",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[Wi,s.localBorderThickness,void 0,{number:!0}]])])],32)}const bx=Ca(mx,[["render",Sx]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const au="152",lc={ROTATE:0,DOLLY:1,PAN:2},Tx=0,mf=1,wx=2,Bm=1,Ax=2,ni=3,Ui=0,Qt=1,ai=2,Li=0,Ks=1,gf=2,_f=3,vf=4,Rx=5,$s=100,Cx=101,Px=102,xf=103,Mf=104,Lx=200,Dx=201,Ux=202,Ix=203,zm=204,Hm=205,Nx=206,Fx=207,Ox=208,Bx=209,zx=210,Hx=0,Vx=1,Gx=2,Cl=3,$x=4,kx=5,Wx=6,Xx=7,Vm=0,qx=1,jx=2,li=0,Yx=1,Zx=2,Kx=3,Jx=4,Qx=5,Gm=300,tr=301,nr=302,Pl=303,Ll=304,Pa=306,Dl=1e3,An=1001,Ul=1002,$t=1003,Ef=1004,uc=1005,mn=1006,e1=1007,Jr=1008,ps=1009,t1=1010,n1=1011,$m=1012,i1=1013,as=1014,cs=1015,Qr=1016,s1=1017,r1=1018,Js=1020,o1=1021,Rn=1023,a1=1024,c1=1025,fs=1026,ir=1027,l1=1028,u1=1029,f1=1030,h1=1031,d1=1033,fc=33776,hc=33777,dc=33778,pc=33779,yf=35840,Sf=35841,bf=35842,Tf=35843,p1=36196,wf=37492,Af=37496,Rf=37808,Cf=37809,Pf=37810,Lf=37811,Df=37812,Uf=37813,If=37814,Nf=37815,Ff=37816,Of=37817,Bf=37818,zf=37819,Hf=37820,Vf=37821,mc=36492,m1=36283,Gf=36284,$f=36285,kf=36286,km=3e3,hs=3001,g1=3200,_1=3201,Wm=0,v1=1,ds="",Be="srgb",Gn="srgb-linear",Xm="display-p3",gc=7680,x1=519,Wf=35044,Xf="300 es",Il=1035;class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const Gr=Math.PI/180,eo=180/Math.PI;function cr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[t&255]+Dt[t>>8&255]+Dt[t>>16&255]+Dt[t>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[n&63|128]+Dt[n>>8&255]+"-"+Dt[n>>16&255]+Dt[n>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function cu(t,e){return(t%e+e)%e}function M1(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function E1(t,e,n){return t!==e?(n-t)/(e-t):0}function $r(t,e,n){return(1-n)*t+n*e}function y1(t,e,n,i){return $r(t,e,1-Math.exp(-n*i))}function S1(t,e=1){return e-Math.abs(cu(t,e*2)-e)}function b1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function T1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function w1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function A1(t,e){return t+Math.random()*(e-t)}function R1(t){return t*(.5-Math.random())}function C1(t){t!==void 0&&(qf=t);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P1(t){return t*Gr}function L1(t){return t*eo}function Nl(t){return(t&t-1)===0&&t!==0}function D1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function qm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function U1(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*u,c*f,c*h,a*l);break;case"YZY":t.set(c*h,a*u,c*f,a*l);break;case"ZXZ":t.set(c*f,c*h,a*u,a*l);break;case"XZX":t.set(a*u,c*_,c*d,a*l);break;case"YXY":t.set(c*d,a*u,c*_,a*l);break;case"ZYZ":t.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dr(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const jf={DEG2RAD:Gr,RAD2DEG:eo,generateUUID:cr,clamp:Wt,euclideanModulo:cu,mapLinear:M1,inverseLerp:E1,lerp:$r,damp:y1,pingpong:S1,smoothstep:b1,smootherstep:T1,randInt:w1,randFloat:A1,randFloatSpread:R1,seededRandom:C1,degToRad:P1,radToDeg:L1,isPowerOfTwo:Nl,ceilPowerOfTwo:D1,floorPowerOfTwo:qm,setQuaternionFromProperEuler:U1,normalize:Yt,denormalize:Dr};class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],S=s[1],E=s[4],x=s[7],M=s[2],b=s[5],w=s[8];return r[0]=o*g+a*S+c*M,r[3]=o*m+a*E+c*b,r[6]=o*p+a*x+c*w,r[1]=l*g+u*S+f*M,r[4]=l*m+u*E+f*b,r[7]=l*p+u*x+f*w,r[2]=h*g+d*S+_*M,r[5]=h*m+d*E+_*b,r[8]=h*p+d*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,_=n*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*l-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*n-s*c)*g,e[5]=(s*r-a*n)*g,e[6]=d*g,e[7]=(i*c-l*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new qe;function jm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ha(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Yf={};function kr(t){t in Yf||(Yf[t]=!0,console.warn(t))}function Qs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const I1=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),N1=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function F1(t){return t.convertSRGBToLinear().applyMatrix3(N1)}function O1(t){return t.applyMatrix3(I1).convertLinearToSRGB()}const B1={[Gn]:t=>t,[Be]:t=>t.convertSRGBToLinear(),[Xm]:F1},z1={[Gn]:t=>t,[Be]:t=>t.convertLinearToSRGB(),[Xm]:O1},Mn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Gn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=B1[e],s=z1[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Es;class Ym{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=ha("canvas")),Es.width=e.width,Es.height=e.height;const i=Es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ha("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qs(n[i]/255)*255):n[i]=Qs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zm{constructor(e=null){this.isSource=!0,this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ym.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H1=0;class un extends _s{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=An,s=An,r=mn,o=Jr,a=Rn,c=ps,l=un.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=cr(),this.name="",this.source=new Zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===hs?Be:ds),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?hs:km}set encoding(e){kr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hs?Be:ds}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Gm;un.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,x=(d+1)/2,M=(p+1)/2,b=(u+h)/4,w=(f+g)/4,D=(_+m)/4;return E>x&&E>M?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=w/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=D/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=D/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-g)/S,this.z=(h-u)/S,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ms extends _s{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(kr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===hs?Be:ds),this.texture=new un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Zm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Km extends un{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V1 extends un{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(f!==g||c!==h||l!==d||u!==_){let m=1-a;const p=c*h+l*d+u*_+f*g,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const M=Math.sqrt(E),b=Math.atan2(M,p*S);m=Math.sin(m*b)/M,a=Math.sin(a*b)/M}const x=a*S;if(c=c*m+h*x,l=l*m+d*x,u=u*m+_*x,f=f*m+g*x,m===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+u*f+c*d-l*h,e[n+1]=c*_+u*h+l*f-a*d,e[n+2]=l*_+u*d+a*h-c*f,e[n+3]=u*_-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-n)*u)/l,h=Math.sin(n*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*s-a*i,u=c*i+a*n-r*s,f=c*s+r*i-o*n,h=-r*n-o*i-a*s;return this.x=l*c+h*-r+u*-a-f*-o,this.y=u*c+h*-o+f*-r-l*-a,this.z=f*c+h*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new W,Zf=new lr;class ro{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox),ys.applyMatrix4(e.matrixWorld),this.union(ys);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Xn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xn)}else s.boundingBox===null&&s.computeBoundingBox(),ys.copy(s.boundingBox),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),_o.subVectors(this.max,xr),Ss.subVectors(e.a,xr),bs.subVectors(e.b,xr),Ts.subVectors(e.c,xr),gi.subVectors(bs,Ss),_i.subVectors(Ts,bs),qi.subVectors(Ss,Ts);let n=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-qi.z,qi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,qi.z,0,-qi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-qi.y,qi.x,0];return!Ec(n,Ss,bs,Ts,_o)||(n=[1,0,0,0,1,0,0,0,1],!Ec(n,Ss,bs,Ts,_o))?!1:(vo.crossVectors(gi,_i),n=[vo.x,vo.y,vo.z],Ec(n,Ss,bs,Ts,_o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,ys=new ro,Ss=new W,bs=new W,Ts=new W,gi=new W,_i=new W,qi=new W,xr=new W,_o=new W,vo=new W,ji=new W;function Ec(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ji.fromArray(t,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=e.dot(ji),l=n.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const G1=new ro,Mr=new W,yc=new W;class lu{constructor(e=new W,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):G1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const n=Mr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(yc)),this.expandByPoint(Mr.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new W,Sc=new W,xo=new W,vi=new W,bc=new W,Mo=new W,Tc=new W;class $1{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Sc.copy(e).add(n).multiplyScalar(.5),xo.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(Sc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(xo),a=vi.dot(this.direction),c=-vi.dot(xo),l=vi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*c-a,h=o*a-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Sc).addScaledVector(xo,h),d}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,s,r){bc.subVectors(n,e),Mo.subVectors(i,e),Tc.crossVectors(bc,Mo);let o=this.direction.dot(Tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const c=a*this.direction.dot(Mo.crossVectors(vi,Mo));if(c<0)return null;const l=a*this.direction.dot(bc.cross(vi));if(l<0||c+l>o)return null;const u=-a*vi.dot(Tc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,c,l,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=d+_*l,n[5]=h-g*l,n[9]=-a*c,n[2]=g-h*l,n[6]=_+d*l,n[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,_=l*u,g=l*f;n[0]=h+g*a,n[4]=_*a-d,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-_,n[6]=g+h*a,n[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,_=l*u,g=l*f;n[0]=h-g*a,n[4]=-o*f,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=c*u,n[4]=_*l-d,n[8]=h*l+g,n[1]=c*f,n[5]=g*l+h,n[9]=d*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*u,n[4]=g-h*f,n[8]=_*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=d*f+_,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+g,n[5]=o*u,n[9]=d*f-_,n[2]=_*f-d,n[6]=a*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k1,e,W1)}lookAt(e,n,i){const s=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),xi.crossVectors(i,tn),xi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),xi.crossVectors(i,tn)),xi.normalize(),Eo.crossVectors(tn,xi),s[0]=xi.x,s[4]=Eo.x,s[8]=tn.x,s[1]=xi.y,s[5]=Eo.y,s[9]=tn.y,s[2]=xi.z,s[6]=Eo.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],E=i[7],x=i[11],M=i[15],b=s[0],w=s[4],D=s[8],v=s[12],T=s[1],N=s[5],U=s[9],I=s[13],F=s[2],B=s[6],V=s[10],$=s[14],k=s[3],le=s[7],ie=s[11],we=s[15];return r[0]=o*b+a*T+c*F+l*k,r[4]=o*w+a*N+c*B+l*le,r[8]=o*D+a*U+c*V+l*ie,r[12]=o*v+a*I+c*$+l*we,r[1]=u*b+f*T+h*F+d*k,r[5]=u*w+f*N+h*B+d*le,r[9]=u*D+f*U+h*V+d*ie,r[13]=u*v+f*I+h*$+d*we,r[2]=_*b+g*T+m*F+p*k,r[6]=_*w+g*N+m*B+p*le,r[10]=_*D+g*U+m*V+p*ie,r[14]=_*v+g*I+m*$+p*we,r[3]=S*b+E*T+x*F+M*k,r[7]=S*w+E*N+x*B+M*le,r[11]=S*D+E*U+x*V+M*ie,r[15]=S*v+E*I+x*$+M*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*f-s*l*f-r*a*h+i*l*h+s*a*d-i*c*d)+g*(+n*c*d-n*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+m*(+n*l*f-n*a*d-r*o*f+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-n*c*f+n*a*h+s*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=f*m*l-g*h*l+g*c*d-a*m*d-f*c*p+a*h*p,E=_*h*l-u*m*l-_*c*d+o*m*d+u*c*p-o*h*p,x=u*g*l-_*f*l+_*a*d-o*g*d-u*a*p+o*f*p,M=_*f*c-u*g*c-_*a*h+o*g*h+u*a*m-o*f*m,b=n*S+i*E+s*x+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=S*w,e[1]=(g*h*r-f*m*r-g*s*d+i*m*d+f*s*p-i*h*p)*w,e[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*p+i*c*p)*w,e[3]=(f*c*r-a*h*r-f*s*l+i*h*l+a*s*d-i*c*d)*w,e[4]=E*w,e[5]=(u*m*r-_*h*r+_*s*d-n*m*d-u*s*p+n*h*p)*w,e[6]=(_*c*r-o*m*r-_*s*l+n*m*l+o*s*p-n*c*p)*w,e[7]=(o*h*r-u*c*r+u*s*l-n*h*l-o*s*d+n*c*d)*w,e[8]=x*w,e[9]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*w,e[10]=(o*g*r-_*a*r+_*i*l-n*g*l-o*i*p+n*a*p)*w,e[11]=(u*a*r-o*f*r-u*i*l+n*f*l+o*i*d-n*a*d)*w,e[12]=M*w,e[13]=(u*g*s-_*f*s+_*i*h-n*g*h-u*i*m+n*f*m)*w,e[14]=(_*a*s-o*g*s-_*i*c+n*g*c+o*i*m-n*a*m)*w,e[15]=(o*f*s-u*a*s+u*i*c-n*f*c-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,_=r*f,g=o*u,m=o*f,p=a*f,S=c*l,E=c*u,x=c*f,M=i.x,b=i.y,w=i.z;return s[0]=(1-(g+p))*M,s[1]=(d+x)*M,s[2]=(_-E)*M,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(h+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(_+E)*w,s[9]=(m-S)*w,s[10]=(1-(h+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=ws.set(s[0],s[1],s[2]).length();const o=ws.set(s[4],s[5],s[6]).length(),a=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const l=1/r,u=1/o,f=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,n.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,c=2*r/(n-e),l=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,c=1/(n-e),l=1/(i-s),u=1/(o-r),f=(n+e)*c,h=(i+s)*l,d=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ws=new W,En=new vt,k1=new W(0,0,0),W1=new W(1,1,1),xi=new W,Eo=new W,tn=new W,Kf=new vt,Jf=new lr;class La{constructor(e=0,n=0,i=0,s=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class Jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X1=0;const Qf=new W,As=new lr,jn=new vt,yo=new W,Er=new W,q1=new W,j1=new lr,eh=new W(1,0,0),th=new W(0,1,0),nh=new W(0,0,1),Y1={type:"added"},ih={type:"removed"};class Nt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new W,n=new La,i=new lr,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,n){return Qf.copy(e).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yo.copy(e):yo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Er,yo,this.up):jn.lookAt(yo,Er,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),As.setFromRotationMatrix(jn),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Y1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ih)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(ih)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,q1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,j1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new W(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new W,Yn=new W,wc=new W,Zn=new W,Rs=new W,Cs=new W,sh=new W,Ac=new W,Rc=new W,Cc=new W;let So=!1;class wn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),yn.subVectors(e,n),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){yn.subVectors(s,n),Yn.subVectors(i,n),wc.subVectors(e,n);const o=yn.dot(yn),a=yn.dot(Yn),c=yn.dot(wc),l=Yn.dot(Yn),u=Yn.dot(wc),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,s,r,o,a,c){return So===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),So=!0),this.getInterpolation(e,n,i,s,r,o,a,c)}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,Zn),c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c}static isFrontFacing(e,n,i,s){return yn.subVectors(i,n),Yn.subVectors(e,n),yn.cross(Yn).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),yn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return So===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),So=!0),wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),Ac.subVectors(e,i);const c=Rs.dot(Ac),l=Cs.dot(Ac);if(c<=0&&l<=0)return n.copy(i);Rc.subVectors(e,s);const u=Rs.dot(Rc),f=Cs.dot(Rc);if(u>=0&&f<=u)return n.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Rs,o);Cc.subVectors(e,r);const d=Rs.dot(Cc),_=Cs.dot(Cc);if(_>=0&&d<=_)return n.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(Cs,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return sh.subVectors(r,s),a=(f-u)/(f-u+(d-_)),n.copy(s).addScaledVector(sh,a);const p=1/(m+g+h);return o=g*p,a=h*p,n.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Z1=0;class oo extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Ks,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zm,this.blendDst=Hm,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gc,this.stencilZFail=gc,this.stencilZPass=gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Pc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Mn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mn.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Mn.workingColorSpace){if(e=cu(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Pc(o,r,e+1/3),this.g=Pc(o,r,e),this.b=Pc(o,r,e-1/3)}return Mn.toWorkingColorSpace(this,s),this}setStyle(e,n=Be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Be){const i=Qm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return Mn.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Wt(Ut.r*255,0,255))*65536+Math.round(Wt(Ut.g*255,0,255))*256+Math.round(Wt(Ut.b*255,0,255))}getHexString(e=Be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mn.workingColorSpace){Mn.fromWorkingColorSpace(Ut.copy(this),n);const i=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Mn.workingColorSpace){return Mn.fromWorkingColorSpace(Ut.copy(this),n),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Be){Mn.fromWorkingColorSpace(Ut.copy(this),e);const n=Ut.r,i=Ut.g,s=Ut.b;return e!==Be?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Sn),Sn.h+=e,Sn.s+=n,Sn.l+=i,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Sn),e.getHSL(bo);const i=$r(Sn.h,bo.h,n),s=$r(Sn.s,bo.s,n),r=$r(Sn.l,bo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new st;st.NAMES=Qm;class eg extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new W,To=new Ve;class fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)To.fromBufferAttribute(this,n),To.applyMatrix3(e),this.setXY(n,To.x,To.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Dr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Dr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Dr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Dr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tg extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ng extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let K1=0;const pn=new vt,Lc=new Nt,Ps=new W,nn=new ro,yr=new ro,St=new W;class fi extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jm(e)?ng:tg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(nn.min,yr.min),nn.expandByPoint(St),St.addVectors(nn.max,yr.max),nn.expandByPoint(St)):(nn.expandByPoint(yr.min),nn.expandByPoint(yr.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(St));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)St.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),St.add(Ps)),s=Math.max(s,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new W,u[T]=new W;const f=new W,h=new W,d=new W,_=new Ve,g=new Ve,m=new Ve,p=new W,S=new W;function E(T,N,U){f.fromArray(s,T*3),h.fromArray(s,N*3),d.fromArray(s,U*3),_.fromArray(o,T*2),g.fromArray(o,N*2),m.fromArray(o,U*2),h.sub(f),d.sub(f),g.sub(_),m.sub(_);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(I),S.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(I),l[T].add(p),l[N].add(p),l[U].add(p),u[T].add(S),u[N].add(S),u[U].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,N=x.length;T<N;++T){const U=x[T],I=U.start,F=U.count;for(let B=I,V=I+F;B<V;B+=3)E(i[B+0],i[B+1],i[B+2])}const M=new W,b=new W,w=new W,D=new W;function v(T){w.fromArray(r,T*3),D.copy(w);const N=l[T];M.copy(N),M.sub(w.multiplyScalar(w.dot(N))).normalize(),b.crossVectors(D,N);const I=b.dot(u[T])<0?-1:1;c[T*4]=M.x,c[T*4+1]=M.y,c[T*4+2]=M.z,c[T*4+3]=I}for(let T=0,N=x.length;T<N;++T){const U=x[T],I=U.start,F=U.count;for(let B=I,V=I+F;B<V;B+=3)v(i[B+0]),v(i[B+1]),v(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new W,r=new W,o=new W,a=new W,c=new W,l=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)h[_++]=l[d++]}return new fn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fi,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,i);c.push(d)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new vt,In=new $1,wo=new lu,oh=new W,Ls=new W,Ds=new W,Us=new W,Dc=new W,Ao=new W,Ro=new Ve,Co=new Ve,Po=new Ve,ah=new W,ch=new W,lh=new W,Lo=new W,Do=new W;class ci extends Nt{constructor(e=new fi,n=new eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Dc.fromBufferAttribute(f,e),o?Ao.addScaledVector(Dc,u):Ao.addScaledVector(Dc.sub(n),u))}n.add(Ao)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),In.copy(e.ray).recast(e.near),!(wo.containsPoint(In.origin)===!1&&(In.intersectSphere(wo,oh)===null||In.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(rh.copy(r).invert(),In.copy(e.ray).applyMatrix4(rh),!(i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let E=p,x=S;E<x;E+=3){const M=o.getX(E),b=o.getX(E+1),w=o.getX(E+2);i=Uo(this,m,e,In,c,l,u,M,b,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=o.getX(g),S=o.getX(g+1),E=o.getX(g+2);i=Uo(this,r,e,In,c,l,u,p,S,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let E=p,x=S;E<x;E+=3){const M=E,b=E+1,w=E+2;i=Uo(this,m,e,In,c,l,u,M,b,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=g,S=g+1,E=g+2;i=Uo(this,r,e,In,c,l,u,p,S,E),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function J1(t,e,n,i,s,r,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ui,a),c===null)return null;Do.copy(a),Do.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Do);return l<n.near||l>n.far?null:{distance:l,point:Do.clone(),object:t}}function Uo(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,Ls),t.getVertexPosition(c,Ds),t.getVertexPosition(l,Us);const u=J1(t,e,n,i,Ls,Ds,Us,Lo);if(u){s&&(Ro.fromBufferAttribute(s,a),Co.fromBufferAttribute(s,c),Po.fromBufferAttribute(s,l),u.uv=wn.getInterpolation(Lo,Ls,Ds,Us,Ro,Co,Po,new Ve)),r&&(Ro.fromBufferAttribute(r,a),Co.fromBufferAttribute(r,c),Po.fromBufferAttribute(r,l),u.uv1=wn.getInterpolation(Lo,Ls,Ds,Us,Ro,Co,Po,new Ve),u.uv2=u.uv1),o&&(ah.fromBufferAttribute(o,a),ch.fromBufferAttribute(o,c),lh.fromBufferAttribute(o,l),u.normal=wn.getInterpolation(Lo,Ls,Ds,Us,ah,ch,lh,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new W,materialIndex:0};wn.getNormal(Ls,Ds,Us,f.normal),u.face=f}return u}class ao extends fi{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ui(l,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(f,2));function _(g,m,p,S,E,x,M,b,w,D,v){const T=x/w,N=M/D,U=x/2,I=M/2,F=b/2,B=w+1,V=D+1;let $=0,k=0;const le=new W;for(let ie=0;ie<V;ie++){const we=ie*N-I;for(let ce=0;ce<B;ce++){const Y=ce*T-U;le[g]=Y*S,le[m]=we*E,le[p]=F,l.push(le.x,le.y,le.z),le[g]=0,le[m]=0,le[p]=b>0?1:-1,u.push(le.x,le.y,le.z),f.push(ce/w),f.push(1-ie/D),$+=1}}for(let ie=0;ie<D;ie++)for(let we=0;we<w;we++){const ce=h+we+B*ie,Y=h+we+B*(ie+1),re=h+(we+1)+B*(ie+1),me=h+(we+1)+B*ie;c.push(ce,Y,me),c.push(Y,re,me),k+=6}a.addGroup(d,k,v),d+=k,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=sr(t[n]);for(const s in i)e[s]=i[s]}return e}function Q1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ig(t){return t.getRenderTarget()===null?t.outputColorSpace:Gn}const eM={clone:sr,merge:Vt};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gs extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sg extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends sg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Ns=1;class iM extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new gn(Is,Ns,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new gn(Is,Ns,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new gn(Is,Ns,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new gn(Is,Ns,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new gn(Is,Ns,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new gn(Is,Ns,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=li,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class rg extends un{constructor(e,n,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:tr,super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sM extends ms{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(kr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hs?Be:ds),this.texture=new rg(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ao(5,5,5),r=new gs({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Li});r.uniforms.tEquirect.value=n;const o=new ci(s,r),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=mn),new iM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const Uc=new W,rM=new W,oM=new qe;class Qi{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Uc.subVectors(i,n).cross(rM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oM.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new lu,Io=new W;class uu{constructor(e=new Qi,n=new Qi,i=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],d=i[9],_=i[10],g=i[11],m=i[12],p=i[13],S=i[14],E=i[15];return n[0].setComponents(a-s,f-c,g-h,E-m).normalize(),n[1].setComponents(a+s,f+c,g+h,E+m).normalize(),n[2].setComponents(a+r,f+l,g+d,E+p).normalize(),n[3].setComponents(a-r,f-l,g-d,E-p).normalize(),n[4].setComponents(a-o,f-u,g-_,E-S).normalize(),n[5].setComponents(a+o,f+u,g+_,E+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function og(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function aM(t,e){const n=e.isWebGL2,i=new WeakMap;function s(l,u){const f=l.array,h=l.usage,d=t.createBuffer();t.bindBuffer(u,d),t.bufferData(u,f,h),l.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,d=u.updateRange;t.bindBuffer(f,l),d.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(t.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,s(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class fu extends fi{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=e/a,h=n/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let E=0;E<l;E++){const x=E*f-r;_.push(x,-S,0),g.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const E=S+l*p,x=S+l*(p+1),M=S+1+l*(p+1),b=S+1+l*p;d.push(E,x,b),d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(g,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}var cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM="vec3 transformed = vec3( position );",mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_M=`#ifdef USE_IRIDESCENCE
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
#endif`,vM=`#ifdef USE_BUMPMAP
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,AM=`#define PI 3.141592653589793
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
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",NM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
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
}`,XM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#endif`,KM=`#if defined( USE_ENVMAP )
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
#endif`,JM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
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
#endif`,iE=`struct PhysicalMaterial {
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
}`,sE=`
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
#endif`,rE=`#if defined( RE_IndirectDiffuse )
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,aE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,hE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pE=`#if defined( USE_POINTS_UV )
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
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_E=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
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
#endif`,xE=`#ifdef USE_MORPHTARGETS
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
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
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
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GE=`float getShadowMask() {
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
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#ifdef USE_UV
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
#endif`,ey=`#ifdef USE_UV
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
#endif`,ty=`#ifdef USE_UV
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
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ly=`#include <common>
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
}`,uy=`#if DEPTH_PACKING == 3200
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
}`,fy=`#define DISTANCE
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
}`,hy=`#define DISTANCE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,my=`uniform float scale;
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,vy=`uniform vec3 diffuse;
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
}`,xy=`#define LAMBERT
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
}`,My=`#define LAMBERT
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
}`,Ey=`#define MATCAP
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
}`,yy=`#define MATCAP
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
}`,Sy=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,Ty=`#define PHONG
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
}`,wy=`#define PHONG
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
}`,Ay=`#define STANDARD
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
}`,Ry=`#define STANDARD
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
}`,Cy=`#define TOON
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
}`,Py=`#define TOON
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
}`,Ly=`uniform float size;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Iy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,He={alphamap_fragment:cM,alphamap_pars_fragment:lM,alphatest_fragment:uM,alphatest_pars_fragment:fM,aomap_fragment:hM,aomap_pars_fragment:dM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:_M,bumpmap_pars_fragment:vM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:EM,clipping_planes_vertex:yM,color_fragment:SM,color_pars_fragment:bM,color_pars_vertex:TM,color_vertex:wM,common:AM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:PM,displacementmap_vertex:LM,emissivemap_fragment:DM,emissivemap_pars_fragment:UM,encodings_fragment:IM,encodings_pars_fragment:NM,envmap_fragment:FM,envmap_common_pars_fragment:OM,envmap_pars_fragment:BM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:KM,envmap_vertex:HM,fog_vertex:VM,fog_pars_vertex:GM,fog_fragment:$M,fog_pars_fragment:kM,gradientmap_pars_fragment:WM,lightmap_fragment:XM,lightmap_pars_fragment:qM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:YM,lights_pars_begin:ZM,lights_toon_fragment:JM,lights_toon_pars_fragment:QM,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:sE,lights_fragment_maps:rE,lights_fragment_end:oE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:cE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:uE,map_fragment:fE,map_pars_fragment:hE,map_particle_fragment:dE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:ME,normal_fragment_begin:EE,normal_fragment_maps:yE,normal_pars_fragment:SE,normal_pars_vertex:bE,normal_vertex:TE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:PE,output_fragment:LE,packing:DE,premultiplied_alpha_fragment:UE,project_vertex:IE,dithering_fragment:NE,dithering_pars_fragment:FE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:HE,shadowmap_vertex:VE,shadowmask_pars_fragment:GE,skinbase_vertex:$E,skinning_pars_vertex:kE,skinning_vertex:WE,skinnormal_vertex:XE,specularmap_fragment:qE,specularmap_pars_fragment:jE,tonemapping_fragment:YE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:JE,uv_pars_fragment:QE,uv_pars_vertex:ey,uv_vertex:ty,worldpos_vertex:ny,background_vert:iy,background_frag:sy,backgroundCube_vert:ry,backgroundCube_frag:oy,cube_vert:ay,cube_frag:cy,depth_vert:ly,depth_frag:uy,distanceRGBA_vert:fy,distanceRGBA_frag:hy,equirect_vert:dy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:_y,meshbasic_frag:vy,meshlambert_vert:xy,meshlambert_frag:My,meshmatcap_vert:Ey,meshmatcap_frag:yy,meshnormal_vert:Sy,meshnormal_frag:by,meshphong_vert:Ty,meshphong_frag:wy,meshphysical_vert:Ay,meshphysical_frag:Ry,meshtoon_vert:Cy,meshtoon_frag:Py,points_vert:Ly,points_frag:Dy,shadow_vert:Uy,shadow_frag:Iy,sprite_vert:Ny,sprite_frag:Fy},_e={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}}},zn={basic:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Vt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Vt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Vt([_e.points,_e.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Vt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Vt([_e.common,_e.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Vt([_e.sprite,_e.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Vt([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Vt([_e.lights,_e.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};zn.physical={uniforms:Vt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const No={r:0,b:0,g:0};function Oy(t,e,n,i,s,r,o){const a=new st(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function _(m,p){let S=!1,E=p.isScene===!0?p.background:null;switch(E&&E.isTexture&&(E=(p.backgroundBlurriness>0?n:e).get(E)),E===null?g(a,c):E&&E.isColor&&(g(E,1),S=!0),t.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),S=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),S=!0;break}(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Pa)?(u===void 0&&(u=new ci(new ao(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:sr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=E.colorSpace!==Be,(f!==E||h!==E.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ci(new fu(2,2),new gs({name:"BackgroundMaterial",uniforms:sr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=E.colorSpace!==Be,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,h=E.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB(No,ig(t)),i.buffers.color.setClear(No.r,No.g,No.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function By(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function f(F,B,V,$,k){let le=!1;if(o){const ie=g($,V,B);l!==ie&&(l=ie,d(l.object)),le=p(F,$,V,k),le&&S(F,$,V,k)}else{const ie=B.wireframe===!0;(l.geometry!==$.id||l.program!==V.id||l.wireframe!==ie)&&(l.geometry=$.id,l.program=V.id,l.wireframe=ie,le=!0)}k!==null&&n.update(k,t.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,D(F,B,V,$),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(k).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?t.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,B,V){const $=V.wireframe===!0;let k=a[F.id];k===void 0&&(k={},a[F.id]=k);let le=k[B.id];le===void 0&&(le={},k[B.id]=le);let ie=le[$];return ie===void 0&&(ie=m(h()),le[$]=ie),ie}function m(F){const B=[],V=[],$=[];for(let k=0;k<s;k++)B[k]=0,V[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:$,object:F,attributes:{},index:null}}function p(F,B,V,$){const k=l.attributes,le=B.attributes;let ie=0;const we=V.getAttributes();for(const ce in we)if(we[ce].location>=0){const re=k[ce];let me=le[ce];if(me===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;ie++}return l.attributesNum!==ie||l.index!==$}function S(F,B,V,$){const k={},le=B.attributes;let ie=0;const we=V.getAttributes();for(const ce in we)if(we[ce].location>=0){let re=le[ce];re===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const me={};me.attribute=re,re&&re.data&&(me.data=re.data),k[ce]=me,ie++}l.attributes=k,l.attributesNum=ie,l.index=$}function E(){const F=l.newAttributes;for(let B=0,V=F.length;B<V;B++)F[B]=0}function x(F){M(F,0)}function M(F,B){const V=l.newAttributes,$=l.enabledAttributes,k=l.attributeDivisors;V[F]=1,$[F]===0&&(t.enableVertexAttribArray(F),$[F]=1),k[F]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),k[F]=B)}function b(){const F=l.newAttributes,B=l.enabledAttributes;for(let V=0,$=B.length;V<$;V++)B[V]!==F[V]&&(t.disableVertexAttribArray(V),B[V]=0)}function w(F,B,V,$,k,le){i.isWebGL2===!0&&(V===t.INT||V===t.UNSIGNED_INT)?t.vertexAttribIPointer(F,B,V,k,le):t.vertexAttribPointer(F,B,V,$,k,le)}function D(F,B,V,$){if(i.isWebGL2===!1&&(F.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const k=$.attributes,le=V.getAttributes(),ie=B.defaultAttributeValues;for(const we in le){const ce=le[we];if(ce.location>=0){let Y=k[we];if(Y===void 0&&(we==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),we==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),Y!==void 0){const re=Y.normalized,me=Y.itemSize,ve=n.get(Y);if(ve===void 0)continue;const R=ve.buffer,de=ve.type,ye=ve.bytesPerElement;if(Y.isInterleavedBufferAttribute){const fe=Y.data,Ce=fe.stride,P=Y.offset;if(fe.isInstancedInterleavedBuffer){for(let L=0;L<ce.locationSize;L++)M(ce.location+L,fe.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let L=0;L<ce.locationSize;L++)x(ce.location+L);t.bindBuffer(t.ARRAY_BUFFER,R);for(let L=0;L<ce.locationSize;L++)w(ce.location+L,me/ce.locationSize,de,re,Ce*ye,(P+me/ce.locationSize*L)*ye)}else{if(Y.isInstancedBufferAttribute){for(let fe=0;fe<ce.locationSize;fe++)M(ce.location+fe,Y.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let fe=0;fe<ce.locationSize;fe++)x(ce.location+fe);t.bindBuffer(t.ARRAY_BUFFER,R);for(let fe=0;fe<ce.locationSize;fe++)w(ce.location+fe,me/ce.locationSize,de,re,me*ye,me/ce.locationSize*fe*ye)}}else if(ie!==void 0){const re=ie[we];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(ce.location,re);break;case 3:t.vertexAttrib3fv(ce.location,re);break;case 4:t.vertexAttrib4fv(ce.location,re);break;default:t.vertexAttrib1fv(ce.location,re)}}}}b()}function v(){U();for(const F in a){const B=a[F];for(const V in B){const $=B[V];for(const k in $)_($[k].object),delete $[k];delete B[V]}delete a[F]}}function T(F){if(a[F.id]===void 0)return;const B=a[F.id];for(const V in B){const $=B[V];for(const k in $)_($[k].object),delete $[k];delete B[V]}delete a[F.id]}function N(F){for(const B in a){const V=a[B];if(V[F.id]===void 0)continue;const $=V[F.id];for(const k in $)_($[k].object),delete $[k];delete V[F.id]}}function U(){I(),u=!0,l!==c&&(l=c,d(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:U,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:x,disableUnusedAttributes:b}}function zy(t,e,n,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,u){t.drawArrays(r,l,u),n.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,d;if(s)h=t,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,l,u,f),n.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Hy(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,x=o||e.has("OES_texture_float"),M=E&&x,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:E,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:b}}function Vy(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Qi,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,E=S*4;let x=p.clippingState||null;c.value=x,x=u(_,h,E,d);for(let M=0;M!==E;++M)x[M]=n[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=d;E!==g;++E,x+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Gy(t){let e=new WeakMap;function n(o,a){return a===Pl?o.mapping=tr:a===Ll&&(o.mapping=nr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Pl||a===Ll)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sM(c.height/2);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ag extends sg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=4,uh=[.125,.215,.35,.446,.526,.582],ns=20,Ic=new ag,fh=new st;let Nc=null;const es=(1+Math.sqrt(5))/2,Fs=1/es,hh=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,es,Fs),new W(0,es,-Fs),new W(Fs,0,es),new W(-Fs,0,es),new W(es,Fs,0),new W(-es,Fs,0)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Nc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Qr,format:Rn,colorSpace:Gn,depthBuffer:!1},s=ph(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$y(r)),this._blurMaterial=ky(r,e,n)}return s}_compileMaterial(e){const n=new ci(this._lodPlanes[0],e);this._renderer.compile(n,Ic)}_sceneToCubeUV(e,n,i,s){const a=new gn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(fh),u.toneMapping=li,u.autoClear=!1;const d=new eg({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new ci(new ao,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(fh),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;Fo(s,S*E,p>2?E:0,E,E),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ci(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Fo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Ic)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hh[(s-1)%hh.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ci(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let S=0;for(let w=0;w<ns;++w){const D=w/g,v=Math.exp(-D*D/2);p.push(v),w===0?S+=v:w<m&&(S+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const x=this._sizeLods[s],M=3*x*(s>E-ks?s-E+ks:0),b=4*(this._cubeSize-x);Fo(n,M,b,3*x,2*x),c.setRenderTarget(n),c.render(f,Ic)}}function $y(t){const e=[],n=[],i=[];let s=t;const r=t-ks+1+uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let c=1/a;o>t-ks?c=uh[o-t+ks-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),E=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,D=b>2?0:-1,v=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];S.set(v,g*_*b),E.set(h,m*_*b);const T=[b,b,b,b,b,b];x.set(T,p*_*b)}const M=new fi;M.setAttribute("position",new fn(S,g)),M.setAttribute("uv",new fn(E,m)),M.setAttribute("faceIndex",new fn(x,p)),e.push(M),s>ks&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ph(t,e,n){const i=new ms(t,e,n);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function ky(t,e,n){const i=new Float32Array(ns),s=new W(0,1,0);return new gs({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function mh(){return new gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function gh(){return new gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function Wy(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pl||c===Ll,u=c===tr||c===nr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new dh(t)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&s(f)){n===null&&(n=new dh(t));const h=l?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Xy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qy(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let E=0,x=S.length;E<x;E+=3){const M=S[E+0],b=S[E+1],w=S[E+2];h.push(M,b,b,w,w,M)}}else{const S=_.array;g=_.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const M=E+0,b=E+1,w=E+2;h.push(M,b,b,w,w,M)}}const m=new(jm(h)?ng:tg)(h,1);m.version=g;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function jy(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,d){t.drawElements(r,d,a,h*c),n.update(d,r,1)}function f(h,d,_){if(_===0)return;let g,m;if(s)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,a,h*c,_),n.update(d,r,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Yy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Zy(t,e){return t[0]-e[0]}function Ky(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Jy(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new Tt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let B=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var d=B;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let v=0;E===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let T=u.attributes.position.count*v,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const U=new Float32Array(T*N*4*g),I=new Km(U,T,N,g);I.type=cs,I.needsUpdate=!0;const F=v*4;for(let V=0;V<g;V++){const $=b[V],k=w[V],le=D[V],ie=T*N*4*V;for(let we=0;we<$.count;we++){const ce=we*F;E===!0&&(o.fromBufferAttribute($,we),U[ie+ce+0]=o.x,U[ie+ce+1]=o.y,U[ie+ce+2]=o.z,U[ie+ce+3]=0),x===!0&&(o.fromBufferAttribute(k,we),U[ie+ce+4]=o.x,U[ie+ce+5]=o.y,U[ie+ce+6]=o.z,U[ie+ce+7]=0),M===!0&&(o.fromBufferAttribute(le,we),U[ie+ce+8]=o.x,U[ie+ce+9]=o.y,U[ie+ce+10]=o.z,U[ie+ce+11]=le.itemSize===4?o.w:1)}}m={count:g,texture:I,size:new Ve(T,N)},r.set(u,m),u.addEventListener("dispose",B)}let p=0;for(let E=0;E<h.length;E++)p+=h[E];const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",S),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(Ky);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Zy);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const M=a[x],b=M[0],w=M[1];b!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+x)!==m[b]&&u.setAttribute("morphTarget"+x,m[b]),p&&u.getAttribute("morphNormal"+x)!==p[b]&&u.setAttribute("morphNormal"+x,p[b]),s[x]=w,S+=w):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const E=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(t,"morphTargetBaseInfluence",E),f.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:c}}function Qy(t,e,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);return s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER)),f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}const cg=new un,lg=new Km,ug=new V1,fg=new rg,_h=[],vh=[],xh=new Float32Array(16),Mh=new Float32Array(9),Eh=new Float32Array(4);function ur(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Da(t,e){let n=vh[e];n===void 0&&(n=new Int32Array(e),vh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function nS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xt(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function iS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function sS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(xt(n,i))return;Eh.set(i),t.uniformMatrix2fv(this.addr,!1,Eh),Mt(n,i)}}function rS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(xt(n,i))return;Mh.set(i),t.uniformMatrix3fv(this.addr,!1,Mh),Mt(n,i)}}function oS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(xt(n,i))return;xh.set(i),t.uniformMatrix4fv(this.addr,!1,xh),Mt(n,i)}}function aS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function lS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function uS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function fS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xt(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function dS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xt(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function pS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xt(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function mS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||cg,s)}function gS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||ug,s)}function _S(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||fg,s)}function vS(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||lg,s)}function xS(t){switch(t){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return sS;case 35675:return rS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return cS;case 35668:case 35672:return lS;case 35669:case 35673:return uS;case 5125:return fS;case 36294:return hS;case 36295:return dS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return vS}}function MS(t,e){t.uniform1fv(this.addr,e)}function ES(t,e){const n=ur(e,this.size,2);t.uniform2fv(this.addr,n)}function yS(t,e){const n=ur(e,this.size,3);t.uniform3fv(this.addr,n)}function SS(t,e){const n=ur(e,this.size,4);t.uniform4fv(this.addr,n)}function bS(t,e){const n=ur(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TS(t,e){const n=ur(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wS(t,e){const n=ur(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AS(t,e){t.uniform1iv(this.addr,e)}function RS(t,e){t.uniform2iv(this.addr,e)}function CS(t,e){t.uniform3iv(this.addr,e)}function PS(t,e){t.uniform4iv(this.addr,e)}function LS(t,e){t.uniform1uiv(this.addr,e)}function DS(t,e){t.uniform2uiv(this.addr,e)}function US(t,e){t.uniform3uiv(this.addr,e)}function IS(t,e){t.uniform4uiv(this.addr,e)}function NS(t,e,n){const i=this.cache,s=e.length,r=Da(n,s);xt(i,r)||(t.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||cg,r[o])}function FS(t,e,n){const i=this.cache,s=e.length,r=Da(n,s);xt(i,r)||(t.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||ug,r[o])}function OS(t,e,n){const i=this.cache,s=e.length,r=Da(n,s);xt(i,r)||(t.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||fg,r[o])}function BS(t,e,n){const i=this.cache,s=e.length,r=Da(n,s);xt(i,r)||(t.uniform1iv(this.addr,r),Mt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||lg,r[o])}function zS(t){switch(t){case 5126:return MS;case 35664:return ES;case 35665:return yS;case 35666:return SS;case 35674:return bS;case 35675:return TS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return PS;case 5125:return LS;case 36294:return DS;case 36295:return US;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return BS}}class HS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=xS(n.type)}}class VS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=zS(n.type)}}class GS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function yh(t,e){t.seq.push(e),t.map[e.id]=e}function $S(t,e,n){const i=t.name,s=i.length;for(Fc.lastIndex=0;;){const r=Fc.exec(i),o=Fc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yh(n,l===void 0?new HS(a,t,e):new VS(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new GS(a),yh(n,f)),n=f}}}class ta{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);$S(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Sh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let kS=0;function WS(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function XS(t){switch(t){case Gn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function bh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+WS(t.getShaderSource(e),o)}else return s}function qS(t,e){const n=XS(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function jS(t,e){let n;switch(e){case Yx:n="Linear";break;case Zx:n="Reinhard";break;case Kx:n="OptimizedCineon";break;case Jx:n="ACESFilmic";break;case Qx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function YS(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function ZS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ur(t){return t!==""}function Th(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(t){return t.replace(JS,QS)}function QS(t,e){const n=He[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Fl(n)}const eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(t){return t.replace(eb,tb)}function tb(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ax?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function ib(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function rb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vm:e="ENVMAP_BLENDING_MULTIPLY";break;case qx:e="ENVMAP_BLENDING_MIX";break;case jx:e="ENVMAP_BLENDING_ADD";break}return e}function ob(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ab(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=nb(n),l=ib(n),u=sb(n),f=rb(n),h=ob(n),d=n.isWebGL2?"":YS(n),_=ZS(r),g=s.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Rh(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[d,Rh(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==li?"#define TONE_MAPPING":"",n.toneMapping!==li?He.tonemapping_pars_fragment:"",n.toneMapping!==li?jS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,qS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ur).join(`
`)),o=Fl(o),o=Th(o,n),o=wh(o,n),a=Fl(a),a=Th(a,n),a=wh(a,n),o=Ah(o),a=Ah(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+o,x=S+p+a,M=Sh(s,s.VERTEX_SHADER,E),b=Sh(s,s.FRAGMENT_SHADER,x);if(s.attachShader(g,M),s.attachShader(g,b),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),t.debug.checkShaderErrors){const v=s.getProgramInfoLog(g).trim(),T=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(b).trim();let U=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,M,b);else{const F=bh(s,M,"vertex"),B=bh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+F+`
`+B)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(T===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:U,programLog:v,vertexShader:{log:T,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(M),s.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new ta(s,g)),w};let D;return this.getAttributes=function(){return D===void 0&&(D=KS(s,g)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=kS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}let cb=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ub(e),n.set(e,i)),i}}class ub{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}}function fb(t,e,n,i,s,r,o){const a=new Jm,c=new lb,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,T,N,U,I){const F=U.fog,B=I.geometry,V=v.isMeshStandardMaterial?U.environment:null,$=(v.isMeshStandardMaterial?n:e).get(v.envMap||V),k=$&&$.mapping===Pa?$.image.height:null,le=_[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,we=ie!==void 0?ie.length:0;let ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let Y,re,me,ve;if(le){const tt=zn[le];Y=tt.vertexShader,re=tt.fragmentShader}else Y=v.vertexShader,re=v.fragmentShader,c.update(v),me=c.getVertexShaderID(v),ve=c.getFragmentShaderID(v);const R=t.getRenderTarget(),de=I.isInstancedMesh===!0,ye=!!v.map,fe=!!v.matcap,Ce=!!$,P=!!v.aoMap,L=!!v.lightMap,H=!!v.bumpMap,ne=!!v.normalMap,Q=!!v.displacementMap,te=!!v.emissiveMap,pe=!!v.metalnessMap,se=!!v.roughnessMap,ae=v.clearcoat>0,oe=v.iridescence>0,A=v.sheen>0,y=v.transmission>0,z=ae&&!!v.clearcoatMap,q=ae&&!!v.clearcoatNormalMap,Z=ae&&!!v.clearcoatRoughnessMap,ue=oe&&!!v.iridescenceMap,xe=oe&&!!v.iridescenceThicknessMap,Me=A&&!!v.sheenColorMap,j=A&&!!v.sheenRoughnessMap,be=!!v.specularMap,Ae=!!v.specularColorMap,Le=!!v.specularIntensityMap,Te=y&&!!v.transmissionMap,Ee=y&&!!v.thicknessMap,Ne=!!v.gradientMap,Ze=!!v.alphaMap,lt=v.alphaTest>0,O=!!v.extensions,K=!!B.attributes.uv1,he=!!B.attributes.uv2,Se=!!B.attributes.uv3;return{isWebGL2:u,shaderID:le,shaderName:v.type,vertexShader:Y,fragmentShader:re,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:de,instancingColor:de&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:R===null?t.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gn,map:ye,matcap:fe,envMap:Ce,envMapMode:Ce&&$.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:L,bumpMap:H,normalMap:ne,displacementMap:h&&Q,emissiveMap:te,normalMapObjectSpace:ne&&v.normalMapType===v1,normalMapTangentSpace:ne&&v.normalMapType===Wm,metalnessMap:pe,roughnessMap:se,clearcoat:ae,clearcoatMap:z,clearcoatNormalMap:q,clearcoatRoughnessMap:Z,iridescence:oe,iridescenceMap:ue,iridescenceThicknessMap:xe,sheen:A,sheenColorMap:Me,sheenRoughnessMap:j,specularMap:be,specularColorMap:Ae,specularIntensityMap:Le,transmission:y,transmissionMap:Te,thicknessMap:Ee,gradientMap:Ne,opaque:v.transparent===!1&&v.blending===Ks,alphaMap:Ze,alphaTest:lt,combine:v.combine,mapUv:ye&&g(v.map.channel),aoMapUv:P&&g(v.aoMap.channel),lightMapUv:L&&g(v.lightMap.channel),bumpMapUv:H&&g(v.bumpMap.channel),normalMapUv:ne&&g(v.normalMap.channel),displacementMapUv:Q&&g(v.displacementMap.channel),emissiveMapUv:te&&g(v.emissiveMap.channel),metalnessMapUv:pe&&g(v.metalnessMap.channel),roughnessMapUv:se&&g(v.roughnessMap.channel),clearcoatMapUv:z&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:j&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:Ae&&g(v.specularColorMap.channel),specularIntensityMapUv:Le&&g(v.specularIntensityMap.channel),transmissionMapUv:Te&&g(v.transmissionMap.channel),thicknessMapUv:Ee&&g(v.thicknessMap.channel),alphaMapUv:Ze&&g(v.alphaMap.channel),vertexTangents:ne&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:he,vertexUv3s:Se,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(ye||Ze),fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:v.toneMapped?t.toneMapping:li,useLegacyLights:t.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ai,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:O&&v.extensions.derivatives===!0,extensionFragDepth:O&&v.extensions.fragDepth===!0,extensionDrawBuffers:O&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)T.push(N),T.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(S(T,v),E(T,v),T.push(t.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function S(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function E(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),v.push(a.mask)}function x(v){const T=_[v.type];let N;if(T){const U=zn[T];N=eM.clone(U.uniforms)}else N=v.uniforms;return N}function M(v,T){let N;for(let U=0,I=l.length;U<I;U++){const F=l[U];if(F.cacheKey===T){N=F,++N.usedTimes;break}}return N===void 0&&(N=new ab(t,T,v,r),l.push(N)),N}function b(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function w(v){c.remove(v)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:D}}function hb(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function db(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ch(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ph(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,_,g,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function c(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function l(f,h){n.length>1&&n.sort(f||db),i.length>1&&i.sort(h||Ch),s.length>1&&s.sort(h||Ch)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function pb(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Ph,t.set(i,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function mb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new st};break;case"SpotLight":n={position:new W,direction:new W,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function gb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _b=0;function vb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xb(t,e){const n=new mb,i=gb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new W);const r=new W,o=new vt,a=new vt;function c(u,f){let h=0,d=0,_=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let g=0,m=0,p=0,S=0,E=0,x=0,M=0,b=0,w=0,D=0;u.sort(vb);const v=f===!0?Math.PI:1;for(let N=0,U=u.length;N<U;N++){const I=u[N],F=I.color,B=I.intensity,V=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*B*v,d+=F.g*B*v,_+=F.b*B*v;else if(I.isLightProbe)for(let k=0;k<9;k++)s.probe[k].addScaledVector(I.sh.coefficients[k],B);else if(I.isDirectionalLight){const k=n.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const le=I.shadow,ie=i.get(I);ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,s.directionalShadow[g]=ie,s.directionalShadowMap[g]=$,s.directionalShadowMatrix[g]=I.shadow.matrix,x++}s.directional[g]=k,g++}else if(I.isSpotLight){const k=n.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(F).multiplyScalar(B*v),k.distance=V,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,s.spot[p]=k;const le=I.shadow;if(I.map&&(s.spotLightMap[w]=I.map,w++,le.updateMatrices(I),I.castShadow&&D++),s.spotLightMatrix[p]=le.matrix,I.castShadow){const ie=i.get(I);ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,s.spotShadow[p]=ie,s.spotShadowMap[p]=$,b++}p++}else if(I.isRectAreaLight){const k=n.get(I);k.color.copy(F).multiplyScalar(B),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=k,S++}else if(I.isPointLight){const k=n.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*v),k.distance=I.distance,k.decay=I.decay,I.castShadow){const le=I.shadow,ie=i.get(I);ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,ie.shadowCameraNear=le.camera.near,ie.shadowCameraFar=le.camera.far,s.pointShadow[m]=ie,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=I.shadow.matrix,M++}s.point[m]=k,m++}else if(I.isHemisphereLight){const k=n.get(I);k.skyColor.copy(I.color).multiplyScalar(B*v),k.groundColor.copy(I.groundColor).multiplyScalar(B*v),s.hemi[E]=k,E++}}S>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==S||T.hemiLength!==E||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==b||T.numSpotMaps!==w)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=b+w-D,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=D,T.directionalLength=g,T.pointLength=m,T.spotLength=p,T.rectAreaLength=S,T.hemiLength=E,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=b,T.numSpotMaps=w,s.version=_b++)}function l(u,f){let h=0,d=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let S=0,E=u.length;S<E;S++){const x=u[S];if(x.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=s.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=s.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Lh(t,e){const n=new xb(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function c(f){n.setup(i,f)}function l(f){n.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Mb(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let c;return a===void 0?(c=new Lh(t,e),n.set(r,[c])):o>=a.length?(c=new Lh(t,e),a.push(c)):c=a[o],c}function s(){n=new WeakMap}return{get:i,dispose:s}}class Eb extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`;function Tb(t,e,n){let i=new uu;const s=new Ve,r=new Ve,o=new Tt,a=new Eb({depthPacking:_1}),c=new yb,l={},u=n.maxTextureSize,f={[Ui]:Qt,[Qt]:Ui,[ai]:ai},h=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Sb,fragmentShader:bb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new fi;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ci(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bm;let p=this.type;this.render=function(M,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const D=t.getRenderTarget(),v=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Li),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==ni&&this.type===ni,I=p===ni&&this.type!==ni;for(let F=0,B=M.length;F<B;F++){const V=M[F],$=V.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const k=$.getFrameExtents();if(s.multiply(k),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,$.mapSize.y=r.y)),$.map===null||U===!0||I===!0){const ie=this.type!==ni?{minFilter:$t,magFilter:$t}:{};$.map!==null&&$.map.dispose(),$.map=new ms(s.x,s.y,ie),$.map.texture.name=V.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const le=$.getViewportCount();for(let ie=0;ie<le;ie++){const we=$.getViewport(ie);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),N.viewport(o),$.updateMatrices(V,ie),i=$.getFrustum(),x(b,w,$.camera,V,this.type)}$.isPointLightShadow!==!0&&this.type===ni&&S($,w),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(D,v,T)};function S(M,b){const w=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ms(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,w,h,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,w,d,g,null)}function E(M,b,w,D){let v=null;const T=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)v=T;else if(v=w.isPointLight===!0?c:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=v.uuid,U=b.uuid;let I=l[N];I===void 0&&(I={},l[N]=I);let F=I[U];F===void 0&&(F=v.clone(),I[U]=F),v=F}if(v.visible=b.visible,v.wireframe=b.wireframe,D===ni?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:f[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=t.properties.get(v);N.light=w}return v}function x(M,b,w,D,v){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===ni)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const U=e.update(M),I=M.material;if(Array.isArray(I)){const F=U.groups;for(let B=0,V=F.length;B<V;B++){const $=F[B],k=I[$.materialIndex];if(k&&k.visible){const le=E(M,k,D,v);t.renderBufferDirect(w,null,U,le,M,$)}}}else if(I.visible){const F=E(M,I,D,v);t.renderBufferDirect(w,null,U,F,M,null)}}const N=M.children;for(let U=0,I=N.length;U<I;U++)x(N[U],b,w,D,v)}}function wb(t,e,n){const i=n.isWebGL2;function s(){let O=!1;const K=new Tt;let he=null;const Se=new Tt(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!O&&(t.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){O=Pe},setClear:function(Pe,tt,nt,Lt,pi){pi===!0&&(Pe*=Lt,tt*=Lt,nt*=Lt),K.set(Pe,tt,nt,Lt),Se.equals(K)===!1&&(t.clearColor(Pe,tt,nt,Lt),Se.copy(K))},reset:function(){O=!1,he=null,Se.set(-1,0,0,0)}}}function r(){let O=!1,K=null,he=null,Se=null;return{setTest:function(Pe){Pe?R(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Pe){K!==Pe&&!O&&(t.depthMask(Pe),K=Pe)},setFunc:function(Pe){if(he!==Pe){switch(Pe){case Hx:t.depthFunc(t.NEVER);break;case Vx:t.depthFunc(t.ALWAYS);break;case Gx:t.depthFunc(t.LESS);break;case Cl:t.depthFunc(t.LEQUAL);break;case $x:t.depthFunc(t.EQUAL);break;case kx:t.depthFunc(t.GEQUAL);break;case Wx:t.depthFunc(t.GREATER);break;case Xx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){Se!==Pe&&(t.clearDepth(Pe),Se=Pe)},reset:function(){O=!1,K=null,he=null,Se=null}}}function o(){let O=!1,K=null,he=null,Se=null,Pe=null,tt=null,nt=null,Lt=null,pi=null;return{setTest:function(ut){O||(ut?R(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(ut){K!==ut&&!O&&(t.stencilMask(ut),K=ut)},setFunc:function(ut,hn,Dn){(he!==ut||Se!==hn||Pe!==Dn)&&(t.stencilFunc(ut,hn,Dn),he=ut,Se=hn,Pe=Dn)},setOp:function(ut,hn,Dn){(tt!==ut||nt!==hn||Lt!==Dn)&&(t.stencilOp(ut,hn,Dn),tt=ut,nt=hn,Lt=Dn)},setLocked:function(ut){O=ut},setClear:function(ut){pi!==ut&&(t.clearStencil(ut),pi=ut)},reset:function(){O=!1,K=null,he=null,Se=null,Pe=null,tt=null,nt=null,Lt=null,pi=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,E=null,x=null,M=null,b=null,w=null,D=null,v=!1,T=null,N=null,U=null,I=null,F=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=$>=2);let le=null,ie={};const we=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Y=new Tt().fromArray(we),re=new Tt().fromArray(ce);function me(O,K,he,Se){const Pe=new Uint8Array(4),tt=t.createTexture();t.bindTexture(O,tt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<he;nt++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(K,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(K+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return tt}const ve={};ve[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),R(t.DEPTH_TEST),c.setFunc(Cl),Q(!1),te(mf),R(t.CULL_FACE),H(Li);function R(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function de(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function ye(O,K){return d[O]!==K?(t.bindFramebuffer(O,K),d[O]=K,i&&(O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=K),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=K)),!0):!1}function fe(O,K){let he=g,Se=!1;if(O)if(he=_.get(K),he===void 0&&(he=[],_.set(K,he)),O.isWebGLMultipleRenderTargets){const Pe=O.texture;if(he.length!==Pe.length||he[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=Pe.length;tt<nt;tt++)he[tt]=t.COLOR_ATTACHMENT0+tt;he.length=Pe.length,Se=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,Se=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,Se=!0);Se&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ce(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const P={[$s]:t.FUNC_ADD,[Cx]:t.FUNC_SUBTRACT,[Px]:t.FUNC_REVERSE_SUBTRACT};if(i)P[xf]=t.MIN,P[Mf]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[xf]=O.MIN_EXT,P[Mf]=O.MAX_EXT)}const L={[Lx]:t.ZERO,[Dx]:t.ONE,[Ux]:t.SRC_COLOR,[zm]:t.SRC_ALPHA,[zx]:t.SRC_ALPHA_SATURATE,[Ox]:t.DST_COLOR,[Nx]:t.DST_ALPHA,[Ix]:t.ONE_MINUS_SRC_COLOR,[Hm]:t.ONE_MINUS_SRC_ALPHA,[Bx]:t.ONE_MINUS_DST_COLOR,[Fx]:t.ONE_MINUS_DST_ALPHA};function H(O,K,he,Se,Pe,tt,nt,Lt){if(O===Li){p===!0&&(de(t.BLEND),p=!1);return}if(p===!1&&(R(t.BLEND),p=!0),O!==Rx){if(O!==S||Lt!==v){if((E!==$s||b!==$s)&&(t.blendEquation(t.FUNC_ADD),E=$s,b=$s),Lt)switch(O){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gf:t.blendFunc(t.ONE,t.ONE);break;case _f:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _f:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,w=null,D=null,S=O,v=Lt}return}Pe=Pe||K,tt=tt||he,nt=nt||Se,(K!==E||Pe!==b)&&(t.blendEquationSeparate(P[K],P[Pe]),E=K,b=Pe),(he!==x||Se!==M||tt!==w||nt!==D)&&(t.blendFuncSeparate(L[he],L[Se],L[tt],L[nt]),x=he,M=Se,w=tt,D=nt),S=O,v=!1}function ne(O,K){O.side===ai?de(t.CULL_FACE):R(t.CULL_FACE);let he=O.side===Qt;K&&(he=!he),Q(he),O.blending===Ks&&O.transparent===!1?H(Li):H(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;l.setTest(Se),Se&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?R(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(O){T!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),T=O)}function te(O){O!==Tx?(R(t.CULL_FACE),O!==N&&(O===mf?t.cullFace(t.BACK):O===wx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),N=O}function pe(O){O!==U&&(V&&t.lineWidth(O),U=O)}function se(O,K,he){O?(R(t.POLYGON_OFFSET_FILL),(I!==K||F!==he)&&(t.polygonOffset(K,he),I=K,F=he)):de(t.POLYGON_OFFSET_FILL)}function ae(O){O?R(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function oe(O){O===void 0&&(O=t.TEXTURE0+B-1),le!==O&&(t.activeTexture(O),le=O)}function A(O,K,he){he===void 0&&(le===null?he=t.TEXTURE0+B-1:he=le);let Se=ie[he];Se===void 0&&(Se={type:void 0,texture:void 0},ie[he]=Se),(Se.type!==O||Se.texture!==K)&&(le!==he&&(t.activeTexture(he),le=he),t.bindTexture(O,K||ve[O]),Se.type=O,Se.texture=K)}function y(){const O=ie[le];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(O){Y.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Y.copy(O))}function Ee(O){re.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Ne(O,K){let he=f.get(K);he===void 0&&(he=new WeakMap,f.set(K,he));let Se=he.get(O);Se===void 0&&(Se=t.getUniformBlockIndex(K,O.name),he.set(O,Se))}function Ze(O,K){const Se=f.get(K).get(O);u.get(K)!==Se&&(t.uniformBlockBinding(K,Se,O.__bindingPointIndex),u.set(K,Se))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},le=null,ie={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,E=null,x=null,M=null,b=null,w=null,D=null,v=!1,T=null,N=null,U=null,I=null,F=null,Y.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:R,disable:de,bindFramebuffer:ye,drawBuffers:fe,useProgram:Ce,setBlending:H,setMaterial:ne,setFlipSided:Q,setCullFace:te,setLineWidth:pe,setPolygonOffset:se,setScissorTest:ae,activeTexture:oe,bindTexture:A,unbindTexture:y,compressedTexImage2D:z,compressedTexImage3D:q,texImage2D:Ae,texImage3D:Le,updateUBOMapping:Ne,uniformBlockBinding:Ze,texStorage2D:j,texStorage3D:be,texSubImage2D:Z,texSubImage3D:ue,compressedTexSubImage2D:xe,compressedTexSubImage3D:Me,scissor:Te,viewport:Ee,reset:lt}}function Ab(t,e,n,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,y){return p?new OffscreenCanvas(A,y):ha("canvas")}function E(A,y,z,q){let Z=1;if((A.width>q||A.height>q)&&(Z=q/Math.max(A.width,A.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ue=y?qm:Math.floor,xe=ue(Z*A.width),Me=ue(Z*A.height);g===void 0&&(g=S(xe,Me));const j=z?S(xe,Me):g;return j.width=xe,j.height=Me,j.getContext("2d").drawImage(A,0,0,xe,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+Me+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Nl(A.width)&&Nl(A.height)}function M(A){return a?!1:A.wrapS!==An||A.wrapT!==An||A.minFilter!==$t&&A.minFilter!==mn}function b(A,y){return A.generateMipmaps&&y&&A.minFilter!==$t&&A.minFilter!==mn}function w(A){t.generateMipmap(A)}function D(A,y,z,q,Z=!1){if(a===!1)return y;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue=y;return y===t.RED&&(z===t.FLOAT&&(ue=t.R32F),z===t.HALF_FLOAT&&(ue=t.R16F),z===t.UNSIGNED_BYTE&&(ue=t.R8)),y===t.RG&&(z===t.FLOAT&&(ue=t.RG32F),z===t.HALF_FLOAT&&(ue=t.RG16F),z===t.UNSIGNED_BYTE&&(ue=t.RG8)),y===t.RGBA&&(z===t.FLOAT&&(ue=t.RGBA32F),z===t.HALF_FLOAT&&(ue=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ue=q===Be&&Z===!1?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)),(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function v(A,y,z){return b(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){return A===$t||A===Ef||A===uc?t.NEAREST:t.LINEAR}function N(A){const y=A.target;y.removeEventListener("dispose",N),I(y),y.isVideoTexture&&_.delete(y)}function U(A){const y=A.target;y.removeEventListener("dispose",U),B(y)}function I(A){const y=i.get(A);if(y.__webglInit===void 0)return;const z=A.source,q=m.get(z);if(q){const Z=q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(A),Object.keys(q).length===0&&m.delete(z)}i.remove(A)}function F(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const z=A.source,q=m.get(z);delete q[y.__cacheKey],o.memory.textures--}function B(A){const y=A.texture,z=i.get(A),q=i.get(y);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)t.deleteFramebuffer(z.__webglFramebuffer[Z]),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[Z]);else{if(t.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Z=0;Z<z.__webglColorRenderbuffer.length;Z++)z.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[Z]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,ue=y.length;Z<ue;Z++){const xe=i.get(y[Z]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(y[Z])}i.remove(y),i.remove(A)}let V=0;function $(){V=0}function k(){const A=V;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),V+=1,A}function le(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ie(A,y){const z=i.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,A,y);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+y)}function we(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){de(z,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+y)}function ce(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){de(z,A,y);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+y)}function Y(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ye(z,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+y)}const re={[Dl]:t.REPEAT,[An]:t.CLAMP_TO_EDGE,[Ul]:t.MIRRORED_REPEAT},me={[$t]:t.NEAREST,[Ef]:t.NEAREST_MIPMAP_NEAREST,[uc]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[e1]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR};function ve(A,y,z){if(z?(t.texParameteri(A,t.TEXTURE_WRAP_S,re[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,re[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,re[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,me[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,me[y.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==An||y.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,T(y.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==$t&&y.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===$t||y.minFilter!==uc&&y.minFilter!==Jr||y.type===cs&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Qr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function R(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",N));const q=y.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const ue=le(y);if(ue!==A.__cacheKey){Z[ue]===void 0&&(Z[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[ue].usedTimes++;const xe=Z[A.__cacheKey];xe!==void 0&&(Z[A.__cacheKey].usedTimes--,xe.usedTimes===0&&F(y)),A.__cacheKey=ue,A.__webglTexture=Z[ue].texture}return z}function de(A,y,z){let q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=t.TEXTURE_3D);const Z=R(A,y),ue=y.source;n.bindTexture(q,A.__webglTexture,t.TEXTURE0+z);const xe=i.get(ue);if(ue.version!==xe.__version||Z===!0){n.activeTexture(t.TEXTURE0+z),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Me=M(y)&&x(y.image)===!1;let j=E(y.image,Me,!1,u);j=oe(y,j);const be=x(j)||a,Ae=r.convert(y.format,y.colorSpace);let Le=r.convert(y.type),Te=D(y.internalFormat,Ae,Le,y.colorSpace);ve(q,y,be);let Ee;const Ne=y.mipmaps,Ze=a&&y.isVideoTexture!==!0,lt=xe.__version===void 0||Z===!0,O=v(y,j,be);if(y.isDepthTexture)Te=t.DEPTH_COMPONENT,a?y.type===cs?Te=t.DEPTH_COMPONENT32F:y.type===as?Te=t.DEPTH_COMPONENT24:y.type===Js?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:y.type===cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===fs&&Te===t.DEPTH_COMPONENT&&y.type!==$m&&y.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=as,Le=r.convert(y.type)),y.format===ir&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,y.type!==Js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Js,Le=r.convert(y.type))),lt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Te,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,Te,j.width,j.height,0,Ae,Le,null));else if(y.isDataTexture)if(Ne.length>0&&be){Ze&&lt&&n.texStorage2D(t.TEXTURE_2D,O,Te,Ne[0].width,Ne[0].height);for(let K=0,he=Ne.length;K<he;K++)Ee=Ne[K],Ze?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ae,Le,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Te,Ee.width,Ee.height,0,Ae,Le,Ee.data);y.generateMipmaps=!1}else Ze?(lt&&n.texStorage2D(t.TEXTURE_2D,O,Te,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,Ae,Le,j.data)):n.texImage2D(t.TEXTURE_2D,0,Te,j.width,j.height,0,Ae,Le,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Te,Ne[0].width,Ne[0].height,j.depth);for(let K=0,he=Ne.length;K<he;K++)Ee=Ne[K],y.format!==Rn?Ae!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,j.depth,Ae,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Te,Ee.width,Ee.height,j.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,j.depth,Ae,Le,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Te,Ee.width,Ee.height,j.depth,0,Ae,Le,Ee.data)}else{Ze&&lt&&n.texStorage2D(t.TEXTURE_2D,O,Te,Ne[0].width,Ne[0].height);for(let K=0,he=Ne.length;K<he;K++)Ee=Ne[K],y.format!==Rn?Ae!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ae,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Ae,Le,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Te,Ee.width,Ee.height,0,Ae,Le,Ee.data)}else if(y.isDataArrayTexture)Ze?(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Te,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ae,Le,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,j.width,j.height,j.depth,0,Ae,Le,j.data);else if(y.isData3DTexture)Ze?(lt&&n.texStorage3D(t.TEXTURE_3D,O,Te,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ae,Le,j.data)):n.texImage3D(t.TEXTURE_3D,0,Te,j.width,j.height,j.depth,0,Ae,Le,j.data);else if(y.isFramebufferTexture){if(lt)if(Ze)n.texStorage2D(t.TEXTURE_2D,O,Te,j.width,j.height);else{let K=j.width,he=j.height;for(let Se=0;Se<O;Se++)n.texImage2D(t.TEXTURE_2D,Se,Te,K,he,0,Ae,Le,null),K>>=1,he>>=1}}else if(Ne.length>0&&be){Ze&&lt&&n.texStorage2D(t.TEXTURE_2D,O,Te,Ne[0].width,Ne[0].height);for(let K=0,he=Ne.length;K<he;K++)Ee=Ne[K],Ze?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ae,Le,Ee):n.texImage2D(t.TEXTURE_2D,K,Te,Ae,Le,Ee);y.generateMipmaps=!1}else Ze?(lt&&n.texStorage2D(t.TEXTURE_2D,O,Te,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Le,j)):n.texImage2D(t.TEXTURE_2D,0,Te,Ae,Le,j);b(y,be)&&w(q),xe.__version=ue.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ye(A,y,z){if(y.image.length!==6)return;const q=R(A,y),Z=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const ue=i.get(Z);if(Z.version!==ue.__version||q===!0){n.activeTexture(t.TEXTURE0+z),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,Me=y.image[0]&&y.image[0].isDataTexture,j=[];for(let K=0;K<6;K++)!xe&&!Me?j[K]=E(y.image[K],!1,!0,l):j[K]=Me?y.image[K].image:y.image[K],j[K]=oe(y,j[K]);const be=j[0],Ae=x(be)||a,Le=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),Ee=D(y.internalFormat,Le,Te,y.colorSpace),Ne=a&&y.isVideoTexture!==!0,Ze=ue.__version===void 0||q===!0;let lt=v(y,be,Ae);ve(t.TEXTURE_CUBE_MAP,y,Ae);let O;if(xe){Ne&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,lt,Ee,be.width,be.height);for(let K=0;K<6;K++){O=j[K].mipmaps;for(let he=0;he<O.length;he++){const Se=O[he];y.format!==Rn?Le!==null?Ne?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,Se.width,Se.height,Le,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,Se.width,Se.height,Le,Te,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,Ee,Se.width,Se.height,0,Le,Te,Se.data)}}}else{O=y.mipmaps,Ne&&Ze&&(O.length>0&&lt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,lt,Ee,j[0].width,j[0].height));for(let K=0;K<6;K++)if(Me){Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,j[K].width,j[K].height,Le,Te,j[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,j[K].width,j[K].height,0,Le,Te,j[K].data);for(let he=0;he<O.length;he++){const Pe=O[he].image[K].image;Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Pe.width,Pe.height,Le,Te,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ee,Pe.width,Pe.height,0,Le,Te,Pe.data)}}else{Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,Te,j[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Le,Te,j[K]);for(let he=0;he<O.length;he++){const Se=O[he];Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,Le,Te,Se.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,Ee,Le,Te,Se.image[K])}}}b(y,Ae)&&w(t.TEXTURE_CUBE_MAP),ue.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function fe(A,y,z,q,Z){const ue=r.convert(z.format,z.colorSpace),xe=r.convert(z.type),Me=D(z.internalFormat,ue,xe,z.colorSpace);i.get(y).__hasExternalTextures||(Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,Me,y.width,y.height,y.depth,0,ue,xe,null):n.texImage2D(Z,0,Me,y.width,y.height,0,ue,xe,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),se(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,i.get(z).__webglTexture,0,pe(y)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,i.get(z).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(A,y,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let q=t.DEPTH_COMPONENT16;if(z||se(y)){const Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===cs?q=t.DEPTH_COMPONENT32F:Z.type===as&&(q=t.DEPTH_COMPONENT24));const ue=pe(y);se(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,q,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,q,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const q=pe(y);z&&se(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,y.width,y.height):se(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<q.length;Z++){const ue=q[Z],xe=r.convert(ue.format,ue.colorSpace),Me=r.convert(ue.type),j=D(ue.internalFormat,xe,Me,ue.colorSpace),be=pe(y);z&&se(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,j,y.width,y.height):se(y)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,j,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,j,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ie(y.depthTexture,0);const q=i.get(y.depthTexture).__webglTexture,Z=pe(y);if(y.depthTexture.format===fs)se(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(y.depthTexture.format===ir)se(y)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function L(A){const y=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");P(y.__webglFramebuffer,A)}else if(z){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]=t.createRenderbuffer(),Ce(y.__webglDepthbuffer[q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),Ce(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(A,y,z){const q=i.get(A);y!==void 0&&fe(q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),z!==void 0&&L(A)}function ne(A){const y=A.texture,z=i.get(A),q=i.get(y);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=y.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,ue=A.isWebGLMultipleRenderTargets===!0,xe=x(A)||a;if(Z){z.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)z.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(z.__webglFramebuffer=t.createFramebuffer(),ue)if(s.drawBuffers){const Me=A.texture;for(let j=0,be=Me.length;j<be;j++){const Ae=i.get(Me[j]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&se(A)===!1){const Me=ue?y:[y];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<Me.length;j++){const be=Me[j];z.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[j]);const Ae=r.convert(be.format,be.colorSpace),Le=r.convert(be.type),Te=D(be.internalFormat,Ae,Le,be.colorSpace,A.isXRRenderTarget===!0),Ee=pe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Te,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,z.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ve(t.TEXTURE_CUBE_MAP,y,xe);for(let Me=0;Me<6;Me++)fe(z.__webglFramebuffer[Me],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me);b(y,xe)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const Me=A.texture;for(let j=0,be=Me.length;j<be;j++){const Ae=Me[j],Le=i.get(Ae);n.bindTexture(t.TEXTURE_2D,Le.__webglTexture),ve(t.TEXTURE_2D,Ae,xe),fe(z.__webglFramebuffer,A,Ae,t.COLOR_ATTACHMENT0+j,t.TEXTURE_2D),b(Ae,xe)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Me=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Me,q.__webglTexture),ve(Me,y,xe),fe(z.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,Me),b(y,xe)&&w(Me),n.unbindTexture()}A.depthBuffer&&L(A)}function Q(A){const y=x(A)||a,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let q=0,Z=z.length;q<Z;q++){const ue=z[q];if(b(ue,y)){const xe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ue).__webglTexture;n.bindTexture(xe,Me),w(xe),n.unbindTexture()}}}function te(A){if(a&&A.samples>0&&se(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,q=A.height;let Z=t.COLOR_BUFFER_BIT;const ue=[],xe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(A),j=A.isWebGLMultipleRenderTargets===!0;if(j)for(let be=0;be<y.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let be=0;be<y.length;be++){ue.push(t.COLOR_ATTACHMENT0+be),A.depthBuffer&&ue.push(xe);const Ae=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ae===!1&&(A.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),j&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[be]),Ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),j){const Le=i.get(y[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,z,q,0,0,z,q,Z,t.NEAREST),d&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let be=0;be<y.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const Ae=i.get(y[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function pe(A){return Math.min(f,A.samples)}function se(A){const y=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(A){const y=o.render.frame;_.get(A)!==y&&(_.set(A,y),A.update())}function oe(A,y){const z=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.format===Il||z!==Gn&&z!==ds&&(z===Be?a===!1?e.has("EXT_sRGB")===!0&&q===Rn?(A.format=Il,A.minFilter=mn,A.generateMipmaps=!1):y=Ym.sRGBToLinear(y):(q!==Rn||Z!==ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=ie,this.setTexture2DArray=we,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=H,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=se}function Rb(t,e,n){const i=n.isWebGL2;function s(r,o=ds){let a;if(r===ps)return t.UNSIGNED_BYTE;if(r===s1)return t.UNSIGNED_SHORT_4_4_4_4;if(r===r1)return t.UNSIGNED_SHORT_5_5_5_1;if(r===t1)return t.BYTE;if(r===n1)return t.SHORT;if(r===$m)return t.UNSIGNED_SHORT;if(r===i1)return t.INT;if(r===as)return t.UNSIGNED_INT;if(r===cs)return t.FLOAT;if(r===Qr)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===o1)return t.ALPHA;if(r===Rn)return t.RGBA;if(r===a1)return t.LUMINANCE;if(r===c1)return t.LUMINANCE_ALPHA;if(r===fs)return t.DEPTH_COMPONENT;if(r===ir)return t.DEPTH_STENCIL;if(r===Il)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===l1)return t.RED;if(r===u1)return t.RED_INTEGER;if(r===f1)return t.RG;if(r===h1)return t.RG_INTEGER;if(r===d1)return t.RGBA_INTEGER;if(r===fc||r===hc||r===dc||r===pc)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===Sf||r===bf||r===Tf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===yf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===p1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wf||r===Af)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===wf)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Af)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rf||r===Cf||r===Pf||r===Lf||r===Df||r===Uf||r===If||r===Nf||r===Ff||r===Of||r===Bf||r===zf||r===Hf||r===Vf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ff)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Of)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vf)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===mc)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===m1||r===Gf||r===$f||r===kf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===mc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$f)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Js?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class Cb extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oo extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pb={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Lb extends un{constructor(e,n,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:fs,u!==fs&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fs&&(i=as),i===void 0&&u===ir&&(i=Js),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1}}class Db extends _s{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const g=n.getContextAttributes();let m=null,p=null;const S=[],E=[],x=new Set,M=new Map,b=new gn;b.layers.enable(1),b.viewport=new Tt;const w=new gn;w.layers.enable(2),w.viewport=new Tt;const D=[b,w],v=new Cb;v.layers.enable(1),v.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=S[Y];return re===void 0&&(re=new Oc,S[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=S[Y];return re===void 0&&(re=new Oc,S[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=S[Y];return re===void 0&&(re=new Oc,S[Y]=re),re.getHandSpace()};function U(Y){const re=E.indexOf(Y.inputSource);if(re===-1)return;const me=S[re];me!==void 0&&(me.update(Y.inputSource,Y.frame,l||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",F);for(let Y=0;Y<S.length;Y++){const re=E[Y];re!==null&&(E[Y]=null,S[Y].disconnect(re))}T=null,N=null,e.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",I),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,re),s.updateRenderState({baseLayer:d}),p=new ms(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:ps,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,me=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?ir:fs,me=g.stencil?Js:as);const R={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(R),s.updateRenderState({layers:[h]}),p=new ms(h.textureWidth,h.textureHeight,{format:Rn,type:ps,depthTexture:new Lb(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const de=e.properties.get(p);de.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(Y){for(let re=0;re<Y.removed.length;re++){const me=Y.removed[re],ve=E.indexOf(me);ve>=0&&(E[ve]=null,S[ve].disconnect(me))}for(let re=0;re<Y.added.length;re++){const me=Y.added[re];let ve=E.indexOf(me);if(ve===-1){for(let de=0;de<S.length;de++)if(de>=E.length){E.push(me),ve=de;break}else if(E[de]===null){E[de]=me,ve=de;break}if(ve===-1)break}const R=S[ve];R&&R.connect(me)}}const B=new W,V=new W;function $(Y,re,me){B.setFromMatrixPosition(re.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);const ve=B.distanceTo(V),R=re.projectionMatrix.elements,de=me.projectionMatrix.elements,ye=R[14]/(R[10]-1),fe=R[14]/(R[10]+1),Ce=(R[9]+1)/R[5],P=(R[9]-1)/R[5],L=(R[8]-1)/R[0],H=(de[8]+1)/de[0],ne=ye*L,Q=ye*H,te=ve/(-L+H),pe=te*-L;re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pe),Y.translateZ(te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const se=ye+te,ae=fe+te,oe=ne-pe,A=Q+(ve-pe),y=Ce*fe/ae*se,z=P*fe/ae*se;Y.projectionMatrix.makePerspective(oe,A,y,z,se,ae),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function k(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.near=w.near=b.near=Y.near,v.far=w.far=b.far=Y.far,(T!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far);const re=Y.parent,me=v.cameras;k(v,re);for(let ve=0;ve<me.length;ve++)k(me[ve],re);me.length===2?$(v,b,w):v.projectionMatrix.copy(b.projectionMatrix),le(Y,v,re)};function le(Y,re,me){me===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const ve=Y.children;for(let R=0,de=ve.length;R<de;R++)ve[R].updateMatrixWorld(!0);Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=eo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.getPlanes=function(){return x};let ie=null;function we(Y,re){if(u=re.getViewerPose(l||o),_=re,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ve=!1;me.length!==v.cameras.length&&(v.cameras.length=0,ve=!0);for(let R=0;R<me.length;R++){const de=me[R];let ye=null;if(d!==null)ye=d.getViewport(de);else{const Ce=f.getViewSubImage(h,de);ye=Ce.viewport,R===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let fe=D[R];fe===void 0&&(fe=new gn,fe.layers.enable(R),fe.viewport=new Tt,D[R]=fe),fe.matrix.fromArray(de.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(de.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ye.x,ye.y,ye.width,ye.height),R===0&&(v.matrix.copy(fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ve===!0&&v.cameras.push(fe)}}for(let me=0;me<S.length;me++){const ve=E[me],R=S[me];ve!==null&&R!==void 0&&R.update(ve,re,l||o)}if(ie&&ie(Y,re),re.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:re.detectedPlanes});let me=null;for(const ve of x)re.detectedPlanes.has(ve)||(me===null&&(me=[]),me.push(ve));if(me!==null)for(const ve of me)x.delete(ve),M.delete(ve),i.dispatchEvent({type:"planeremoved",data:ve});for(const ve of re.detectedPlanes)if(!x.has(ve))x.add(ve),M.set(ve,re.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ve});else{const R=M.get(ve);ve.lastChangedTime>R&&(M.set(ve,ve.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ve}))}}_=null}const ce=new og;ce.setAnimationLoop(we),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}function Ub(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ig(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ib(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function l(S,E){let x=s[S.id];x===void 0&&(_(S),x=u(S),s[S.id]=x,S.addEventListener("dispose",m));const M=E.program;i.updateUBOMapping(S,M);const b=e.render.frame;r[S.id]!==b&&(h(S),r[S.id]=b)}function u(S){const E=f();S.__bindingPointIndex=E;const x=t.createBuffer(),M=S.__size,b=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=s[S.id],x=S.uniforms,M=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let b=0,w=x.length;b<w;b++){const D=x[b];if(d(D,b,M)===!0){const v=D.__offset,T=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let U=0;U<T.length;U++){const I=T[U],F=g(I);typeof I=="number"?(D.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,v+N,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=I.elements[0],D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=I.elements[0],D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=I.elements[0]):(I.toArray(D.__data,N),N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,v,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,E,x){const M=S.value;if(x[E]===void 0){if(typeof M=="number")x[E]=M;else{const b=Array.isArray(M)?M:[M],w=[];for(let D=0;D<b.length;D++)w.push(b[D].clone());x[E]=w}return!0}else if(typeof M=="number"){if(x[E]!==M)return x[E]=M,!0}else{const b=Array.isArray(x[E])?x[E]:[x[E]],w=Array.isArray(M)?M:[M];for(let D=0;D<b.length;D++){const v=b[D];if(v.equals(w[D])===!1)return v.copy(w[D]),!0}}return!1}function _(S){const E=S.uniforms;let x=0;const M=16;let b=0;for(let w=0,D=E.length;w<D;w++){const v=E[w],T={boundary:0,storage:0},N=Array.isArray(v.value)?v.value:[v.value];for(let U=0,I=N.length;U<I;U++){const F=N[U],B=g(F);T.boundary+=B.boundary,T.storage+=B.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=x,w>0){b=x%M;const U=M-b;b!==0&&U-T.boundary<0&&(x+=M-b,v.__offset=x)}x+=T.storage}return b=x%M,b>0&&(x+=M-b),S.__size=x,S.__cache={},this}function g(S){const E={boundary:0,storage:0};return typeof S=="number"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function Nb(){const t=ha("canvas");return t.style.display="block",t}class hg{constructor(e={}){const{canvas:n=Nb(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let d=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Be,this.useLegacyLights=!0,this.toneMapping=li,this.toneMappingExposure=1;const p=this;let S=!1,E=0,x=0,M=null,b=-1,w=null;const D=new Tt,v=new Tt;let T=null,N=n.width,U=n.height,I=1,F=null,B=null;const V=new Tt(0,0,N,U),$=new Tt(0,0,N,U);let k=!1;const le=new uu;let ie=!1,we=!1,ce=null;const Y=new vt,re=new W,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return M===null?I:1}let R=i;function de(C,X){for(let J=0;J<C.length;J++){const G=C[J],ee=n.getContext(G,X);if(ee!==null)return ee}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${au}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Ze,!1),R===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),R=de(X,C),R===null)throw de(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ye,fe,Ce,P,L,H,ne,Q,te,pe,se,ae,oe,A,y,z,q,Z,ue,xe,Me,j,be,Ae;function Le(){ye=new Xy(R),fe=new Hy(R,ye,e),ye.init(fe),j=new Rb(R,ye,fe),Ce=new wb(R,ye,fe),P=new Yy(R),L=new hb,H=new Ab(R,ye,Ce,L,fe,j,P),ne=new Gy(p),Q=new Wy(p),te=new aM(R,fe),be=new By(R,ye,te,fe),pe=new qy(R,te,P,be),se=new Qy(R,pe,te,P),ue=new Jy(R,fe,H),z=new Vy(L),ae=new fb(p,ne,Q,ye,fe,be,z),oe=new Ub(p,L),A=new pb,y=new Mb(ye,fe),Z=new Oy(p,ne,Q,Ce,se,h,c),q=new Tb(p,se,fe),Ae=new Ib(R,P,fe,Ce),xe=new zy(R,ye,P,fe),Me=new jy(R,ye,P,fe),P.programs=ae.programs,p.capabilities=fe,p.extensions=ye,p.properties=L,p.renderLists=A,p.shadowMap=q,p.state=Ce,p.info=P}Le();const Te=new Db(p,R);this.xr=Te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(N,U,!1))},this.getSize=function(C){return C.set(N,U)},this.setSize=function(C,X,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,U=X,n.width=Math.floor(C*I),n.height=Math.floor(X*I),J===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(N*I,U*I).floor()},this.setDrawingBufferSize=function(C,X,J){N=C,U=X,I=J,n.width=Math.floor(C*J),n.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,X,J,G){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,X,J,G),Ce.viewport(D.copy(V).multiplyScalar(I).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,X,J,G){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,J,G),Ce.scissor(v.copy($).multiplyScalar(I).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(C){Ce.setScissorTest(k=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,X=!0,J=!0){let G=0;C&&(G|=R.COLOR_BUFFER_BIT),X&&(G|=R.DEPTH_BUFFER_BIT),J&&(G|=R.STENCIL_BUFFER_BIT),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Ze,!1),A.dispose(),y.dispose(),L.dispose(),ne.dispose(),Q.dispose(),se.dispose(),be.dispose(),Ae.dispose(),ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Pe),Te.removeEventListener("sessionend",tt),ce&&(ce.dispose(),ce=null),nt.stop()};function Ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=P.autoReset,X=q.enabled,J=q.autoUpdate,G=q.needsUpdate,ee=q.type;Le(),P.autoReset=C,q.enabled=X,q.autoUpdate=J,q.needsUpdate=G,q.type=ee}function Ze(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function lt(C){const X=C.target;X.removeEventListener("dispose",lt),O(X)}function O(C){K(C),L.remove(C)}function K(C){const X=L.get(C).programs;X!==void 0&&(X.forEach(function(J){ae.releaseProgram(J)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,G,ee,De){X===null&&(X=me);const Ue=ee.isMesh&&ee.matrixWorld.determinant()<0,Fe=R0(C,X,J,G,ee);Ce.setMaterial(G,Ue);let ze=J.index,$e=1;G.wireframe===!0&&(ze=pe.getWireframeAttribute(J),$e=2);const ke=J.drawRange,Xe=J.attributes.position;let Qe=ke.start*$e,Ft=(ke.start+ke.count)*$e;De!==null&&(Qe=Math.max(Qe,De.start*$e),Ft=Math.min(Ft,(De.start+De.count)*$e)),ze!==null?(Qe=Math.max(Qe,0),Ft=Math.min(Ft,ze.count)):Xe!=null&&(Qe=Math.max(Qe,0),Ft=Math.min(Ft,Xe.count));const xn=Ft-Qe;if(xn<0||xn===1/0)return;be.setup(ee,G,Fe,J,ze);let Bi,pt=xe;if(ze!==null&&(Bi=te.get(ze),pt=Me,pt.setIndex(Bi)),ee.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*ve()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(ee.isLine){let je=G.linewidth;je===void 0&&(je=1),Ce.setLineWidth(je*ve()),ee.isLineSegments?pt.setMode(R.LINES):ee.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else ee.isPoints?pt.setMode(R.POINTS):ee.isSprite&&pt.setMode(R.TRIANGLES);if(ee.isInstancedMesh)pt.renderInstances(Qe,xn,ee.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ka=Math.min(J.instanceCount,je);pt.renderInstances(Qe,xn,ka)}else pt.render(Qe,xn)},this.compile=function(C,X){function J(G,ee,De){G.transparent===!0&&G.side===ai&&G.forceSinglePass===!1?(G.side=Qt,G.needsUpdate=!0,fo(G,ee,De),G.side=Ui,G.needsUpdate=!0,fo(G,ee,De),G.side=ai):fo(G,ee,De)}_=y.get(C),_.init(),m.push(_),C.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights(p.useLegacyLights),C.traverse(function(G){const ee=G.material;if(ee)if(Array.isArray(ee))for(let De=0;De<ee.length;De++){const Ue=ee[De];J(Ue,C,G)}else J(ee,C,G)}),m.pop(),_=null};let he=null;function Se(C){he&&he(C)}function Pe(){nt.stop()}function tt(){nt.start()}const nt=new og;nt.setAnimationLoop(Se),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(C){he=C,Te.setAnimationLoop(C),C===null?nt.stop():nt.start()},Te.addEventListener("sessionstart",Pe),Te.addEventListener("sessionend",tt),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,X,M),_=y.get(C,m.length),_.init(),m.push(_),Y.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),le.setFromProjectionMatrix(Y),we=this.localClippingEnabled,ie=z.init(this.clippingPlanes,we),d=A.get(C,g.length),d.init(),g.push(d),Lt(C,X,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(F,B),ie===!0&&z.beginShadows();const J=_.state.shadowsArray;if(q.render(J,C,X),ie===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,C),_.setupLights(p.useLegacyLights),X.isArrayCamera){const G=X.cameras;for(let ee=0,De=G.length;ee<De;ee++){const Ue=G[ee];pi(d,C,Ue,Ue.viewport)}}else pi(d,C,X);M!==null&&(H.updateMultisampleRenderTarget(M),H.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(p,C,X),be.resetDefaultState(),b=-1,w=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Lt(C,X,J,G){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){G&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Y);const Ue=se.update(C),Fe=C.material;Fe.visible&&d.push(C,Ue,Fe,J,re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==P.render.frame&&(C.skeleton.update(),C.skeleton.frame=P.render.frame);const Ue=se.update(C),Fe=C.material;if(G&&(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),re.copy(Ue.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(Y)),Array.isArray(Fe)){const ze=Ue.groups;for(let $e=0,ke=ze.length;$e<ke;$e++){const Xe=ze[$e],Qe=Fe[Xe.materialIndex];Qe&&Qe.visible&&d.push(C,Ue,Qe,J,re.z,Xe)}}else Fe.visible&&d.push(C,Ue,Fe,J,re.z,null)}}const De=C.children;for(let Ue=0,Fe=De.length;Ue<Fe;Ue++)Lt(De[Ue],X,J,G)}function pi(C,X,J,G){const ee=C.opaque,De=C.transmissive,Ue=C.transparent;_.setupLightsView(J),ie===!0&&z.setGlobalState(p.clippingPlanes,J),De.length>0&&ut(ee,De,X,J),G&&Ce.viewport(D.copy(G)),ee.length>0&&hn(ee,X,J),De.length>0&&hn(De,X,J),Ue.length>0&&hn(Ue,X,J),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ut(C,X,J,G){if(ce===null){const Fe=fe.isWebGL2;ce=new ms(1024,1024,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Qr:ps,minFilter:Jr,samples:Fe&&a===!0?4:0})}const ee=p.getRenderTarget();p.setRenderTarget(ce),p.clear();const De=p.toneMapping;p.toneMapping=li,hn(C,J,G),H.updateMultisampleRenderTarget(ce),H.updateRenderTargetMipmap(ce);let Ue=!1;for(let Fe=0,ze=X.length;Fe<ze;Fe++){const $e=X[Fe],ke=$e.object,Xe=$e.geometry,Qe=$e.material,Ft=$e.group;if(Qe.side===ai&&ke.layers.test(G.layers)){const xn=Qe.side;Qe.side=Qt,Qe.needsUpdate=!0,Dn(ke,J,G,Xe,Qe,Ft),Qe.side=xn,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(H.updateMultisampleRenderTarget(ce),H.updateRenderTargetMipmap(ce)),p.setRenderTarget(ee),p.toneMapping=De}function hn(C,X,J){const G=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,De=C.length;ee<De;ee++){const Ue=C[ee],Fe=Ue.object,ze=Ue.geometry,$e=G===null?Ue.material:G,ke=Ue.group;Fe.layers.test(J.layers)&&Dn(Fe,X,J,ze,$e,ke)}}function Dn(C,X,J,G,ee,De){C.onBeforeRender(p,X,J,G,ee,De),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(p,X,J,G,C,De),ee.transparent===!0&&ee.side===ai&&ee.forceSinglePass===!1?(ee.side=Qt,ee.needsUpdate=!0,p.renderBufferDirect(J,X,G,ee,C,De),ee.side=Ui,ee.needsUpdate=!0,p.renderBufferDirect(J,X,G,ee,C,De),ee.side=ai):p.renderBufferDirect(J,X,G,ee,C,De),C.onAfterRender(p,X,J,G,ee,De)}function fo(C,X,J){X.isScene!==!0&&(X=me);const G=L.get(C),ee=_.state.lights,De=_.state.shadowsArray,Ue=ee.state.version,Fe=ae.getParameters(C,ee.state,De,X,J),ze=ae.getProgramCacheKey(Fe);let $e=G.programs;G.environment=C.isMeshStandardMaterial?X.environment:null,G.fog=X.fog,G.envMap=(C.isMeshStandardMaterial?Q:ne).get(C.envMap||G.environment),$e===void 0&&(C.addEventListener("dispose",lt),$e=new Map,G.programs=$e);let ke=$e.get(ze);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Ue)return Cu(C,Fe),ke}else Fe.uniforms=ae.getUniforms(C),C.onBuild(J,Fe,p),C.onBeforeCompile(Fe,p),ke=ae.acquireProgram(Fe,ze),$e.set(ze,ke),G.uniforms=Fe.uniforms;const Xe=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=z.uniform),Cu(C,Fe),G.needsLights=P0(C),G.lightsStateVersion=Ue,G.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMap.value=ee.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotShadowMap.value=ee.state.spotShadowMap,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMap.value=ee.state.pointShadowMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Qe=ke.getUniforms(),Ft=ta.seqWithValue(Qe.seq,Xe);return G.currentProgram=ke,G.uniformsList=Ft,ke}function Cu(C,X){const J=L.get(C);J.outputColorSpace=X.outputColorSpace,J.instancing=X.instancing,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function R0(C,X,J,G,ee){X.isScene!==!0&&(X=me),H.resetTextureUnits();const De=X.fog,Ue=G.isMeshStandardMaterial?X.environment:null,Fe=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Gn,ze=(G.isMeshStandardMaterial?Q:ne).get(G.envMap||Ue),$e=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!G.normalMap&&!!J.attributes.tangent,Xe=!!J.morphAttributes.position,Qe=!!J.morphAttributes.normal,Ft=!!J.morphAttributes.color,xn=G.toneMapped?p.toneMapping:li,Bi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pt=Bi!==void 0?Bi.length:0,je=L.get(G),ka=_.state.lights;if(ie===!0&&(we===!0||C!==w)){const en=C===w&&G.id===b;z.setState(G,C,en)}let yt=!1;G.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ka.state.version||je.outputColorSpace!==Fe||ee.isInstancedMesh&&je.instancing===!1||!ee.isInstancedMesh&&je.instancing===!0||ee.isSkinnedMesh&&je.skinning===!1||!ee.isSkinnedMesh&&je.skinning===!0||je.envMap!==ze||G.fog===!0&&je.fog!==De||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==z.numPlanes||je.numIntersection!==z.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==ke||je.morphTargets!==Xe||je.morphNormals!==Qe||je.morphColors!==Ft||je.toneMapping!==xn||fe.isWebGL2===!0&&je.morphTargetsCount!==pt)&&(yt=!0):(yt=!0,je.__version=G.version);let zi=je.currentProgram;yt===!0&&(zi=fo(G,X,ee));let Pu=!1,mr=!1,Wa=!1;const Ot=zi.getUniforms(),Hi=je.uniforms;if(Ce.useProgram(zi.program)&&(Pu=!0,mr=!0,Wa=!0),G.id!==b&&(b=G.id,mr=!0),Pu||w!==C){if(Ot.setValue(R,"projectionMatrix",C.projectionMatrix),fe.logarithmicDepthBuffer&&Ot.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,mr=!0,Wa=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const en=Ot.map.cameraPosition;en!==void 0&&en.setValue(R,re.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ot.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ee.isSkinnedMesh)&&Ot.setValue(R,"viewMatrix",C.matrixWorldInverse)}if(ee.isSkinnedMesh){Ot.setOptional(R,ee,"bindMatrix"),Ot.setOptional(R,ee,"bindMatrixInverse");const en=ee.skeleton;en&&(fe.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ot.setValue(R,"boneTexture",en.boneTexture,H),Ot.setValue(R,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xa=J.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0&&fe.isWebGL2===!0)&&ue.update(ee,J,zi),(mr||je.receiveShadow!==ee.receiveShadow)&&(je.receiveShadow=ee.receiveShadow,Ot.setValue(R,"receiveShadow",ee.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Hi.envMap.value=ze,Hi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),mr&&(Ot.setValue(R,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&C0(Hi,Wa),De&&G.fog===!0&&oe.refreshFogUniforms(Hi,De),oe.refreshMaterialUniforms(Hi,G,I,U,ce),ta.upload(R,je.uniformsList,Hi,H)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ta.upload(R,je.uniformsList,Hi,H),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ot.setValue(R,"center",ee.center),Ot.setValue(R,"modelViewMatrix",ee.modelViewMatrix),Ot.setValue(R,"normalMatrix",ee.normalMatrix),Ot.setValue(R,"modelMatrix",ee.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const en=G.uniformsGroups;for(let qa=0,L0=en.length;qa<L0;qa++)if(fe.isWebGL2){const Lu=en[qa];Ae.update(Lu,zi),Ae.bind(Lu,zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zi}function C0(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function P0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,X,J){L.get(C.texture).__webglTexture=X,L.get(C.depthTexture).__webglTexture=J;const G=L.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=J===void 0,G.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const J=L.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,J=0){M=C,E=X,x=J;let G=!0,ee=null,De=!1,Ue=!1;if(C){const ze=L.get(C);ze.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(R.FRAMEBUFFER,null),G=!1):ze.__webglFramebuffer===void 0?H.setupRenderTarget(C):ze.__hasExternalTextures&&H.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const ke=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ee=ke[X],De=!0):fe.isWebGL2&&C.samples>0&&H.useMultisampledRTT(C)===!1?ee=L.get(C).__webglMultisampledFramebuffer:ee=ke,D.copy(C.viewport),v.copy(C.scissor),T=C.scissorTest}else D.copy(V).multiplyScalar(I).floor(),v.copy($).multiplyScalar(I).floor(),T=k;if(Ce.bindFramebuffer(R.FRAMEBUFFER,ee)&&fe.drawBuffers&&G&&Ce.drawBuffers(C,ee),Ce.viewport(D),Ce.scissor(v),Ce.setScissorTest(T),De){const ze=L.get(C.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,J)}else if(Ue){const ze=L.get(C.texture),$e=X||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ze.__webglTexture,J||0,$e)}b=-1},this.readRenderTargetPixels=function(C,X,J,G,ee,De,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Ce.bindFramebuffer(R.FRAMEBUFFER,Fe);try{const ze=C.texture,$e=ze.format,ke=ze.type;if($e!==Rn&&j.convert($e)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=ke===Qr&&(ye.has("EXT_color_buffer_half_float")||fe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ke!==ps&&j.convert(ke)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===cs&&(fe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-G&&J>=0&&J<=C.height-ee&&R.readPixels(X,J,G,ee,j.convert($e),j.convert(ke),De)}finally{const ze=M!==null?L.get(M).__webglFramebuffer:null;Ce.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,X,J=0){const G=Math.pow(2,-J),ee=Math.floor(X.image.width*G),De=Math.floor(X.image.height*G);H.setTexture2D(X,0),R.copyTexSubImage2D(R.TEXTURE_2D,J,0,0,C.x,C.y,ee,De),Ce.unbindTexture()},this.copyTextureToTexture=function(C,X,J,G=0){const ee=X.image.width,De=X.image.height,Ue=j.convert(J.format),Fe=j.convert(J.type);H.setTexture2D(J,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,J.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,G,C.x,C.y,ee,De,Ue,Fe,X.image.data):X.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,G,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ue,X.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,G,C.x,C.y,Ue,Fe,X.image),G===0&&J.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J,G,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=C.max.x-C.min.x+1,Ue=C.max.y-C.min.y+1,Fe=C.max.z-C.min.z+1,ze=j.convert(G.format),$e=j.convert(G.type);let ke;if(G.isData3DTexture)H.setTexture3D(G,0),ke=R.TEXTURE_3D;else if(G.isDataArrayTexture)H.setTexture2DArray(G,0),ke=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const Xe=R.getParameter(R.UNPACK_ROW_LENGTH),Qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ft=R.getParameter(R.UNPACK_SKIP_PIXELS),xn=R.getParameter(R.UNPACK_SKIP_ROWS),Bi=R.getParameter(R.UNPACK_SKIP_IMAGES),pt=J.isCompressedTexture?J.mipmaps[0]:J.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,C.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,C.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?R.texSubImage3D(ke,ee,X.x,X.y,X.z,De,Ue,Fe,ze,$e,pt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(ke,ee,X.x,X.y,X.z,De,Ue,Fe,ze,pt.data)):R.texSubImage3D(ke,ee,X.x,X.y,X.z,De,Ue,Fe,ze,$e,pt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Xe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,xn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Bi),ee===0&&G.generateMipmaps&&R.generateMipmap(ke),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?H.setTextureCube(C,0):C.isData3DTexture?H.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?H.setTexture2DArray(C,0):H.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){E=0,x=0,M=null,Ce.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?hs:km}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hs?Be:Gn}}class Fb extends hg{}Fb.prototype.isWebGL1Renderer=!0;class Ob extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Bb extends oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wm,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Dh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class zb{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Hb=new zb;class dg{constructor(e){this.manager=e!==void 0?e:Hb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Kn={};class Vb extends Error{constructor(e,n){super(e),this.response=n}}class Gb extends dg{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Dh.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:n,onProgress:i,onError:s});return}Kn[e]=[],Kn[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Kn[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){f.read().then(({done:E,value:x})=>{if(E)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let b=0,w=u.length;b<w;b++){const D=u[b];D.onProgress&&D.onProgress(M)}p.enqueue(x),S()}})}}});return new Response(m)}else throw new Vb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Dh.add(e,l);const u=Kn[e];delete Kn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pg extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Bc=new vt,Uh=new W,Ih=new W;class $b{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uu,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Uh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Uh),Ih.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ih),n.updateMatrixWorld(),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kb extends $b{constructor(){super(new ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wb extends pg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xb extends pg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=au);class Nh extends dg{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new Gb(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e){function n(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,u,g))return!1;return!0}function i(l,u,f){for(let h=0,d=l.length;h<d;h++)if(l[h]!==u.getUint8(f+h))return!1;return!0}function s(l){const u=new DataView(l),f=u.getUint32(80,!0);let h,d,_,g=!1,m,p,S,E,x;for(let T=0;T<70;T++)u.getUint32(T,!1)==1129270351&&u.getUint8(T+4)==82&&u.getUint8(T+5)==61&&(g=!0,m=new Float32Array(f*3*3),p=u.getUint8(T+6)/255,S=u.getUint8(T+7)/255,E=u.getUint8(T+8)/255,x=u.getUint8(T+9)/255);const M=84,b=12*4+2,w=new fi,D=new Float32Array(f*3*3),v=new Float32Array(f*3*3);for(let T=0;T<f;T++){const N=M+T*b,U=u.getFloat32(N,!0),I=u.getFloat32(N+4,!0),F=u.getFloat32(N+8,!0);if(g){const B=u.getUint16(N+48,!0);B&32768?(h=p,d=S,_=E):(h=(B&31)/31,d=(B>>5&31)/31,_=(B>>10&31)/31)}for(let B=1;B<=3;B++){const V=N+B*12,$=T*3*3+(B-1)*3;D[$]=u.getFloat32(V,!0),D[$+1]=u.getFloat32(V+4,!0),D[$+2]=u.getFloat32(V+8,!0),v[$]=U,v[$+1]=I,v[$+2]=F,g&&(m[$]=h,m[$+1]=d,m[$+2]=_)}}return w.setAttribute("position",new fn(D,3)),w.setAttribute("normal",new fn(v,3)),g&&(w.setAttribute("color",new fn(m,3)),w.hasColors=!0,w.alpha=x),w}function r(l){const u=new fi,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let d=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),p=[],S=[],E=new W;let x,M=0,b=0,w=0;for(;(x=f.exec(l))!==null;){b=w;const D=x[0];for(;(x=h.exec(D))!==null;){let N=0,U=0;const I=x[0];for(;(x=m.exec(I))!==null;)E.x=parseFloat(x[1]),E.y=parseFloat(x[2]),E.z=parseFloat(x[3]),U++;for(;(x=g.exec(I))!==null;)p.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])),S.push(E.x,E.y,E.z),N++,w++;U!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),N!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const v=b,T=w-b;u.addGroup(v,T,M),M++}return u.setAttribute("position",new ui(p,3)),u.setAttribute("normal",new ui(S,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=a(e);return n(c)?s(c):r(o(e))}}const zc={type:"change"},Hc={type:"start"},Vc={type:"end"};class qb extends _s{constructor(e,n){super();const i=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:lc.ROTATE,MIDDLE:lc.DOLLY,RIGHT:lc.PAN},this.target=new W;const r=1e-6,o=new W;let a=1,c=s.NONE,l=s.NONE,u=0,f=0,h=0;const d=new W,_=new Ve,g=new Ve,m=new W,p=new Ve,S=new Ve,E=new Ve,x=new Ve,M=[],b={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const R=i.domElement.getBoundingClientRect(),de=i.domElement.ownerDocument.documentElement;i.screen.left=R.left+window.pageXOffset-de.clientLeft,i.screen.top=R.top+window.pageYOffset-de.clientTop,i.screen.width=R.width,i.screen.height=R.height};const w=function(){const R=new Ve;return function(ye,fe){return R.set((ye-i.screen.left)/i.screen.width,(fe-i.screen.top)/i.screen.height),R}}(),D=function(){const R=new Ve;return function(ye,fe){return R.set((ye-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-fe))/i.screen.width),R}}();this.rotateCamera=function(){const R=new W,de=new lr,ye=new W,fe=new W,Ce=new W,P=new W;return function(){P.set(g.x-_.x,g.y-_.y,0);let H=P.length();H?(d.copy(i.object.position).sub(i.target),ye.copy(d).normalize(),fe.copy(i.object.up).normalize(),Ce.crossVectors(fe,ye).normalize(),fe.setLength(g.y-_.y),Ce.setLength(g.x-_.x),P.copy(fe.add(Ce)),R.crossVectors(P,d).normalize(),H*=i.rotateSpeed,de.setFromAxisAngle(R,H),d.applyQuaternion(de),i.object.up.applyQuaternion(de),m.copy(R),h=H):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),d.copy(i.object.position).sub(i.target),de.setFromAxisAngle(m,h),d.applyQuaternion(de),i.object.up.applyQuaternion(de)),_.copy(g)}}(),this.zoomCamera=function(){let R;c===s.TOUCH_ZOOM_PAN?(R=u/f,u=f,i.object.isPerspectiveCamera?d.multiplyScalar(R):i.object.isOrthographicCamera?(i.object.zoom=jf.clamp(i.object.zoom/R,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(R=1+(S.y-p.y)*i.zoomSpeed,R!==1&&R>0&&(i.object.isPerspectiveCamera?d.multiplyScalar(R):i.object.isOrthographicCamera?(i.object.zoom=jf.clamp(i.object.zoom/R,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(S):p.y+=(S.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const R=new Ve,de=new W,ye=new W;return function(){if(R.copy(x).sub(E),R.lengthSq()){if(i.object.isOrthographicCamera){const Ce=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,P=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;R.x*=Ce,R.y*=P}R.multiplyScalar(d.length()*i.panSpeed),ye.copy(d).cross(i.object.up).setLength(R.x),ye.add(de.copy(i.object.up).setLength(R.y)),i.object.position.add(ye),i.target.add(ye),i.staticMoving?E.copy(x):E.add(R.subVectors(x,E).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(d.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,d.setLength(i.maxDistance)),p.copy(S)),d.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,d.setLength(i.minDistance)),p.copy(S)))},this.update=function(){d.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,d),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>r&&(i.dispatchEvent(zc),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>r||a!==i.object.zoom)&&(i.dispatchEvent(zc),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=s.NONE,l=s.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),d.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(zc),o.copy(i.object.position),a=i.object.zoom};function v(R){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",N)),Y(R),R.pointerType==="touch"?le(R):B(R))}function T(R){i.enabled!==!1&&(R.pointerType==="touch"?ie(R):V(R))}function N(R){i.enabled!==!1&&(R.pointerType==="touch"?we(R):$(),re(R),M.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",N)))}function U(R){re(R)}function I(R){i.enabled!==!1&&(window.removeEventListener("keydown",I),l===s.NONE&&(R.code===i.keys[s.ROTATE]&&!i.noRotate?l=s.ROTATE:R.code===i.keys[s.ZOOM]&&!i.noZoom?l=s.ZOOM:R.code===i.keys[s.PAN]&&!i.noPan&&(l=s.PAN)))}function F(){i.enabled!==!1&&(l=s.NONE,window.addEventListener("keydown",I))}function B(R){if(c===s.NONE)switch(R.button){case i.mouseButtons.LEFT:c=s.ROTATE;break;case i.mouseButtons.MIDDLE:c=s.ZOOM;break;case i.mouseButtons.RIGHT:c=s.PAN;break}const de=l!==s.NONE?l:c;de===s.ROTATE&&!i.noRotate?(g.copy(D(R.pageX,R.pageY)),_.copy(g)):de===s.ZOOM&&!i.noZoom?(p.copy(w(R.pageX,R.pageY)),S.copy(p)):de===s.PAN&&!i.noPan&&(E.copy(w(R.pageX,R.pageY)),x.copy(E)),i.dispatchEvent(Hc)}function V(R){const de=l!==s.NONE?l:c;de===s.ROTATE&&!i.noRotate?(_.copy(g),g.copy(D(R.pageX,R.pageY))):de===s.ZOOM&&!i.noZoom?S.copy(w(R.pageX,R.pageY)):de===s.PAN&&!i.noPan&&x.copy(w(R.pageX,R.pageY))}function $(){c=s.NONE,i.dispatchEvent(Vc)}function k(R){if(i.enabled!==!1&&i.noZoom!==!0){switch(R.preventDefault(),R.deltaMode){case 2:p.y-=R.deltaY*.025;break;case 1:p.y-=R.deltaY*.01;break;default:p.y-=R.deltaY*25e-5;break}i.dispatchEvent(Hc),i.dispatchEvent(Vc)}}function le(R){switch(me(R),M.length){case 1:c=s.TOUCH_ROTATE,g.copy(D(M[0].pageX,M[0].pageY)),_.copy(g);break;default:c=s.TOUCH_ZOOM_PAN;const de=M[0].pageX-M[1].pageX,ye=M[0].pageY-M[1].pageY;f=u=Math.sqrt(de*de+ye*ye);const fe=(M[0].pageX+M[1].pageX)/2,Ce=(M[0].pageY+M[1].pageY)/2;E.copy(w(fe,Ce)),x.copy(E);break}i.dispatchEvent(Hc)}function ie(R){switch(me(R),M.length){case 1:_.copy(g),g.copy(D(R.pageX,R.pageY));break;default:const de=ve(R),ye=R.pageX-de.x,fe=R.pageY-de.y;f=Math.sqrt(ye*ye+fe*fe);const Ce=(R.pageX+de.x)/2,P=(R.pageY+de.y)/2;x.copy(w(Ce,P));break}}function we(R){switch(M.length){case 0:c=s.NONE;break;case 1:c=s.TOUCH_ROTATE,g.copy(D(R.pageX,R.pageY)),_.copy(g);break;case 2:c=s.TOUCH_ZOOM_PAN;for(let de=0;de<M.length;de++)if(M[de].pointerId!==R.pointerId){const ye=b[M[de].pointerId];g.copy(D(ye.x,ye.y)),_.copy(g);break}break}i.dispatchEvent(Vc)}function ce(R){i.enabled!==!1&&R.preventDefault()}function Y(R){M.push(R)}function re(R){delete b[R.pointerId];for(let de=0;de<M.length;de++)if(M[de].pointerId==R.pointerId){M.splice(de,1);return}}function me(R){let de=b[R.pointerId];de===void 0&&(de=new Ve,b[R.pointerId]=de),de.set(R.pageX,R.pageY)}function ve(R){const de=R.pointerId===M[0].pointerId?M[1]:M[0];return b[de.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ce),i.domElement.removeEventListener("pointerdown",v),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",k),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",N),window.removeEventListener("keydown",I),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",ce),this.domElement.addEventListener("pointerdown",v),this.domElement.addEventListener("pointercancel",U),this.domElement.addEventListener("wheel",k,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",F),this.handleResize(),this.update()}}const jb=1e-5,Yb=1e-13,Zb=Math.PI*2;var et={EPS:jb,NEPS:Yb,TAU:Zb};const Kb=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);var Jb=Kb;const Qb=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);var eT=Qb;const tT=t=>Math.atan2(t[1],t[0]);var du=tT,nT=du;const iT=du,sT=t=>iT(t)*57.29577951308232;var rT=sT;const oT=()=>[0,0];var Ua=oT;const aT=Ua,cT=t=>{const e=aT();return e[0]=t[0],e[1]=t[1],e};var lT=cT;const uT=(t,e)=>(t[0]=e[0],t[1]=e[1],t);var fT=uT;const hT=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);var dT=hT;const pT=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};var mT=pT;const gT=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);var _T=gT;const vT=(t,e)=>t[0]*e[0]+t[1]*e[1];var xT=vT;const MT=(t,e)=>t[0]===e[0]&&t[1]===e[1];var ET=MT;const{NEPS:yT}=et,mg=t=>Math.abs(t)<yT?0:t,ST=t=>mg(Math.sin(t)),bT=t=>mg(Math.cos(t));var jt={sin:ST,cos:bT};const{sin:TT,cos:wT}=jt,AT=(t,e)=>(t[0]=wT(e),t[1]=TT(e),t);var gg=AT;const RT=gg,CT=(t,e)=>RT(t,e*.017453292519943295);var PT=CT;const LT=(t,e)=>(t[0]=e,t[1]=e,t);var DT=LT;const UT=Ua,IT=(t,e)=>{const n=UT();return n[0]=t,n[1]=e,n};var NT=IT;const FT=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);var OT=FT;const BT=(t,e,n,i)=>{const s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};var zT=BT;const HT=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);var VT=HT;const GT=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);var $T=GT;const kT=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);var WT=kT;const XT=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);var qT=XT;const jT=(t,e,n,i)=>{const s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};var _g=jT;const{TAU:YT}=et,ZT=Ua,KT=_g,JT=(t,e)=>KT(t,e,ZT(),YT/4);var QT=JT;const ew=(t,e)=>{const n=e[0],i=e[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};var tw=ew;const nw=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);var iw=nw;const sw=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);var rw=sw;const ow=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};var aw=ow;const cw=t=>{const e=t[0],n=t[1];return e*e+n*n};var lw=cw;const uw=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);var fw=uw;const hw=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;var dw=hw;const pw=(t,e,n)=>{const i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};var mw=pw,We={abs:Jb,add:eT,angle:nT,angleDegrees:rT,angleRadians:du,clone:lT,copy:fT,create:Ua,cross:dT,distance:mT,divide:_T,dot:xT,equals:ET,fromAngleDegrees:PT,fromAngleRadians:gg,fromScalar:DT,fromValues:NT,length:OT,lerp:zT,max:VT,min:$T,multiply:WT,negate:qT,normal:QT,normalize:tw,rotate:_g,scale:iw,snap:rw,squaredDistance:aw,squaredLength:lw,subtract:fw,toString:dw,transform:mw};const gw=t=>Object.assign({},t);var pu=gw;const{EPS:Fh}=et,_w=We,vw=pu,xw=t=>{if(t.isClosed)return t;const e=vw(t);if(e.isClosed=!0,e.points.length>1){const n=e.points,i=n[0];let s=n[n.length-1];for(;_w.distance(i,s)<Fh*Fh&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};var vg=xw;const Mw=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);var Ew=Mw;const yw=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var mu=yw;const Sw=mu,bw=t=>{const e=Sw();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};var Tw=bw;const ww=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);var xg=ww;const Aw=(t,e)=>{const n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=n*a-i*o,E=n*c-s*o,x=n*l-r*o,M=i*c-s*a,b=i*l-r*a,w=s*l-r*c,D=u*g-f*_,v=u*m-h*_,T=u*p-d*_,N=f*m-h*g,U=f*p-d*g,I=h*p-d*m;let F=S*I-E*U+x*N+M*T-b*v+w*D;return F?(F=1/F,t[0]=(a*I-c*U+l*N)*F,t[1]=(s*U-i*I-r*N)*F,t[2]=(g*w-m*b+p*M)*F,t[3]=(h*b-f*w-d*M)*F,t[4]=(c*T-o*I-l*v)*F,t[5]=(n*I-s*T+r*v)*F,t[6]=(m*x-_*w-p*E)*F,t[7]=(u*w-h*x+d*E)*F,t[8]=(o*U-a*T+l*D)*F,t[9]=(i*T-n*U-r*D)*F,t[10]=(_*b-g*x+p*S)*F,t[11]=(f*x-u*b-d*S)*F,t[12]=(a*v-o*N-c*D)*F,t[13]=(n*N-i*v+s*D)*F,t[14]=(g*E-_*M-m*S)*F,t[15]=(u*M-f*E+h*S)*F,t):null};var Rw=Aw;const Cw=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];var Pw=Cw;const Lw=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var Mg=Lw;const{EPS:Dw}=et,{sin:Uw,cos:Iw}=jt,Nw=Mg,Fw=(t,e,n)=>{let[i,s,r]=n;const o=i*i+s*s+r*r;if(Math.abs(o)<Dw)return Nw(t);const a=1/Math.sqrt(o);i*=a,s*=a,r*=a;const c=Uw(e),l=Iw(e),u=1-l;return t[0]=i*i*u+l,t[1]=s*i*u+r*c,t[2]=r*i*u-s*c,t[3]=0,t[4]=i*s*u-r*c,t[5]=s*s*u+l,t[6]=r*s*u+i*c,t[7]=0,t[8]=i*r*u+s*c,t[9]=s*r*u-i*c,t[10]=r*r*u+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Eg=Fw;const Ow=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var Bw=Ow;const{sin:Gc,cos:$c}=jt,zw=(t,e,n,i)=>{const s=Gc(e),r=$c(e),o=Gc(n),a=$c(n),c=Gc(i),l=$c(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=c*o*r-l*s,t[5]=l*r+c*o*s,t[6]=c*a,t[7]=0,t[8]=c*s+l*o*r,t[9]=l*o*s-c*r,t[10]=l*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Hw=zw;const Vw=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);var Gw=Vw;const $w=mu,kw=(t,e,n,i,s,r,o,a,c,l,u,f,h,d,_,g)=>{const m=$w();return m[0]=t,m[1]=e,m[2]=n,m[3]=i,m[4]=s,m[5]=r,m[6]=o,m[7]=a,m[8]=c,m[9]=l,m[10]=u,m[11]=f,m[12]=h,m[13]=d,m[14]=_,m[15]=g,m};var Ww=kw;const Xw=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);var yg=Xw;const qw=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);var Sg=qw;const jw=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];var Ia=jw;const Yw=Ia,Zw=(t,e)=>{const n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],c=Math.sqrt(n*n+i*i+s*s),l=Math.sqrt(r*r+o*o+a*a),u=c*l,f=u&&Yw(t,e)/u;return Math.acos(Math.min(Math.max(f,-1),1))};var Kw=Zw;const Jw=()=>[0,0,0];var Na=Jw;const Qw=Na,eA=t=>{const e=Qw();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var tA=eA;const nA=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var bg=nA;const iA=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],c=n[2];return t[0]=s*c-r*a,t[1]=r*o-i*c,t[2]=i*a-s*o,t};var co=iA;const sA=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};var Tg=sA;const rA=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);var oA=rA;const aA=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var cA=aA;const lA=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);var uA=lA;const fA=Na,hA=(t,e,n)=>{const i=fA();return i[0]=t,i[1]=e,i[2]=n,i};var dA=hA;const pA=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);var mA=pA;const gA=t=>{const e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};var wg=gA;const _A=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);var vA=_A;const xA=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);var MA=xA;const EA=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);var yA=EA;const SA=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);var bA=SA;const TA=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);var wA=TA;const AA=(t,e)=>{const n=e[0],i=e[1],s=e[2];let r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};var gu=AA;const RA=yg,CA=Na,PA=co,LA=(t,e)=>{const n=RA(CA(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return PA(t,e,[i,s,r])};var DA=LA;const UA=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var IA=UA;const NA=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var FA=NA;const OA=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};var BA=OA;const zA=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);var Ag=zA;const HA=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);var VA=HA;const GA=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};var Rg=GA;const $A=t=>{const e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};var Cg=$A;const kA=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);var Fa=kA;const WA=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;var XA=WA;const qA=(t,e,n)=>{const i=e[0],s=e[1],r=e[2];let o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};var jA=qA,Ge={abs:yg,add:Sg,angle:Kw,clone:tA,copy:bg,create:Na,cross:co,distance:Tg,divide:oA,dot:Ia,equals:cA,fromScalar:uA,fromValues:dA,fromVec2:mA,length:wg,lerp:vA,max:MA,min:yA,multiply:bA,negate:wA,normalize:gu,orthogonal:DA,rotateX:IA,rotateY:FA,rotateZ:BA,scale:Ag,snap:VA,squaredDistance:Rg,squaredLength:Cg,subtract:Fa,toString:XA,transform:jA};const Mi=Ge,YA=Eg,ZA=(t,e,n)=>{const i=Mi.normalize(Mi.create(),e),s=Mi.normalize(Mi.create(),n),r=Mi.cross(Mi.create(),s,i),o=Mi.dot(s,i);if(o===-1)return YA(t,Math.PI,Mi.orthogonal(r,i));const a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var KA=ZA;const{sin:JA,cos:QA}=jt,e2=(t,e)=>{const n=JA(e),i=QA(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var t2=e2;const{sin:n2,cos:i2}=jt,s2=(t,e)=>{const n=n2(e),i=i2(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var r2=s2;const{sin:o2,cos:a2}=jt,c2=(t,e)=>{const n=o2(e),i=a2(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var l2=c2;const u2=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;var f2=u2;const h2=t=>Jn(t[1])&&Jn(t[2])&&Jn(t[3])&&Jn(t[4])&&Jn(t[6])&&Jn(t[7])&&Jn(t[8])&&Jn(t[9])&&Jn(t[11])&&t[15]===1,Jn=t=>Math.abs(t)<Number.EPSILON;var d2=h2;const p2=t=>{const e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};var m2=p2;const g2=(t,e)=>{const[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};var _2=g2;const v2=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],_=e[11],g=e[12],m=e[13],p=e[14],S=e[15];let E=n[0],x=n[1],M=n[2],b=n[3];return t[0]=E*i+x*a+M*f+b*g,t[1]=E*s+x*c+M*h+b*m,t[2]=E*r+x*l+M*d+b*p,t[3]=E*o+x*u+M*_+b*S,E=n[4],x=n[5],M=n[6],b=n[7],t[4]=E*i+x*a+M*f+b*g,t[5]=E*s+x*c+M*h+b*m,t[6]=E*r+x*l+M*d+b*p,t[7]=E*o+x*u+M*_+b*S,E=n[8],x=n[9],M=n[10],b=n[11],t[8]=E*i+x*a+M*f+b*g,t[9]=E*s+x*c+M*h+b*m,t[10]=E*r+x*l+M*d+b*p,t[11]=E*o+x*u+M*_+b*S,E=n[12],x=n[13],M=n[14],b=n[15],t[12]=E*i+x*a+M*f+b*g,t[13]=E*s+x*c+M*h+b*m,t[14]=E*r+x*l+M*d+b*p,t[15]=E*o+x*u+M*_+b*S,t};var x2=v2;const{EPS:M2}=et,{sin:E2,cos:y2}=jt,S2=xg,b2=(t,e,n,i)=>{let[s,r,o]=i;const a=s*s+r*r+o*o;if(Math.abs(a)<M2)return S2(t,e);const c=1/Math.sqrt(a);s*=c,r*=c,o*=c;const l=E2(n),u=y2(n),f=1-u,h=e[0],d=e[1],_=e[2],g=e[3],m=e[4],p=e[5],S=e[6],E=e[7],x=e[8],M=e[9],b=e[10],w=e[11],D=s*s*f+u,v=r*s*f+o*l,T=o*s*f-r*l,N=s*r*f-o*l,U=r*r*f+u,I=o*r*f+s*l,F=s*o*f+r*l,B=r*o*f-s*l,V=o*o*f+u;return t[0]=h*D+m*v+x*T,t[1]=d*D+p*v+M*T,t[2]=_*D+S*v+b*T,t[3]=g*D+E*v+w*T,t[4]=h*N+m*U+x*I,t[5]=d*N+p*U+M*I,t[6]=_*N+S*U+b*I,t[7]=g*N+E*U+w*I,t[8]=h*F+m*B+x*V,t[9]=d*F+p*B+M*V,t[10]=_*F+S*B+b*V,t[11]=g*F+E*B+w*V,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};var T2=b2;const{sin:w2,cos:A2}=jt,R2=(t,e,n)=>{const i=w2(n),s=A2(n),r=e[4],o=e[5],a=e[6],c=e[7],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+l*i,t[5]=o*s+u*i,t[6]=a*s+f*i,t[7]=c*s+h*i,t[8]=l*s-r*i,t[9]=u*s-o*i,t[10]=f*s-a*i,t[11]=h*s-c*i,t};var C2=R2;const{sin:P2,cos:L2}=jt,D2=(t,e,n)=>{const i=P2(n),s=L2(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-l*i,t[1]=o*s-u*i,t[2]=a*s-f*i,t[3]=c*s-h*i,t[8]=r*i+l*s,t[9]=o*i+u*s,t[10]=a*i+f*s,t[11]=c*i+h*s,t};var U2=D2;const{sin:I2,cos:N2}=jt,F2=(t,e,n)=>{const i=I2(n),s=N2(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[4],u=e[5],f=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+l*i,t[1]=o*s+u*i,t[2]=a*s+f*i,t[3]=c*s+h*i,t[4]=l*s-r*i,t[5]=u*s-o*i,t[6]=f*s-a*i,t[7]=h*s-c*i,t};var O2=F2;const B2=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};var z2=B2;const H2=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);var V2=H2;const G2=t=>t.map(e=>e.toFixed(7)).toString();var $2=G2;const k2=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];let o,a,c,l,u,f,h,d,_,g,m,p;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],c=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],_=e[8],g=e[9],m=e[10],p=e[11],t[0]=o,t[1]=a,t[2]=c,t[3]=l,t[4]=u,t[5]=f,t[6]=h,t[7]=d,t[8]=_,t[9]=g,t[10]=m,t[11]=p,t[12]=o*i+u*s+_*r+e[12],t[13]=a*i+f*s+g*r+e[13],t[14]=c*i+h*s+m*r+e[14],t[15]=l*i+d*s+p*r+e[15]),t};var W2=k2,dt={add:Ew,clone:Tw,copy:xg,create:mu,invert:Rw,equals:Pw,fromRotation:Eg,fromScaling:Bw,fromTaitBryanRotation:Hw,fromTranslation:Gw,fromValues:Ww,fromVectorRotation:KA,fromXRotation:t2,fromYRotation:r2,fromZRotation:l2,identity:Mg,isIdentity:f2,isOnlyTransformScale:d2,isMirroring:m2,mirrorByPlane:_2,multiply:x2,rotate:T2,rotateX:C2,rotateY:U2,rotateZ:O2,scale:z2,subtract:V2,toString:$2,translate:W2};const X2=dt,q2=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:X2.create()});var Oa=q2;const{EPS:Oh}=et,Bh=We,j2=vg,Y2=Oa,Z2=(t,e)=>{const n={closed:!1};let{closed:i}=Object.assign({},n,t),s=Y2();if(s.points=e.map(r=>Bh.clone(r)),s.points.length>1){const r=s.points[0],o=s.points[s.points.length-1];Bh.distance(r,o)<Oh*Oh&&(i=!0)}return i===!0&&(s=j2(s)),s};var _u=Z2;const zh=dt,Hh=We,K2=t=>(zh.isIdentity(t.transforms)||(t.points=t.points.map(e=>Hh.transform(Hh.create(),e,t.transforms)),t.transforms=zh.create()),t);var J2=K2;const Q2=J2,eR=t=>Q2(t).points;var fr=eR;const{TAU:Bo}=et,gt=We,tR=_u,nR=fr,iR=(t,e)=>{const n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:c}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=gt.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(c<4)throw new Error("segments must be four or more");const l=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");const u=nR(e);if(u.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let f=s[0],h=s[1];const d=u[u.length-1];f=Math.round(f*l)/l,h=Math.round(h*l)/l,i=gt.fromValues(Math.round(i[0]*l)/l,Math.round(i[1]*l)/l);const _=!o;let g=[];if(f===0||h===0)g.push(i);else{f=Math.abs(f),h=Math.abs(h);const p=r,S=Math.cos(p),E=Math.sin(p),x=gt.subtract(gt.create(),d,i);gt.scale(x,x,.5);const M=Math.round((S*x[0]+E*x[1])*l)/l,b=Math.round((-E*x[0]+S*x[1])*l)/l,w=gt.fromValues(M,b),D=w[0]*w[0]/(f*f)+w[1]*w[1]/(h*h);if(D>1){const k=Math.sqrt(D);f*=k,h*=k,f=Math.round(f*l)/l,h=Math.round(h*l)/l}let v=Math.sqrt((f*f*h*h-f*f*w[1]*w[1]-h*h*w[0]*w[0])/(f*f*w[1]*w[1]+h*h*w[0]*w[0]));_===a&&(v=-v);const T=gt.fromValues(f*w[1]/h,-h*w[0]/f);gt.scale(T,T,v);let N=gt.fromValues(S*T[0]-E*T[1],E*T[0]+S*T[1]);N=gt.add(N,N,gt.scale(gt.create(),gt.add(gt.create(),d,i),.5));const U=gt.fromValues((w[0]-T[0])/f,(w[1]-T[1])/h),I=gt.fromValues((-w[0]-T[0])/f,(-w[1]-T[1])/h),F=gt.angleRadians(U);let V=gt.angleRadians(I)-F;V=V%Bo,!_&&V>0?V-=Bo:_&&V<0&&(V+=Bo);let $=Math.ceil(Math.abs(V)/Bo*c)+1;$<1&&($=1);for(let k=1;k<$;k++){const le=F+k/$*V,ie=Math.cos(le),we=Math.sin(le),ce=gt.fromValues(S*f*ie-E*h*we,E*f*ie+S*h*we);gt.add(ce,ce,N),g.push(ce)}$&&g.push(t.endpoint)}return g=u.concat(g),tR({},g)};var sR=iR;const rR=_u,oR=fr,{equals:aR}=We,cR=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{const r=oR(i).slice();if(n.length>0&&r.length>0&&aR(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),rR({closed:e},n)};var Pg=cR;const lR=Pg,uR=Oa,fR=(t,e)=>lR(e,uR(t));var Lg=fR;const{TAU:hR}=et,sn=We,dR=We,pR=Lg,mR=fr,gR=(t,e)=>{const n={segments:16};let{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");const r=mR(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let b=r[r.length-2];if("lastBezierControlPoint"in e&&(b=e.lastBezierControlPoint),!Array.isArray(b))throw new Error("the given path must contain TWO or more points if given a null control point");const w=sn.scale(sn.create(),r[r.length-1],2);sn.subtract(w,w,b),i[0]=w}i.unshift(r[r.length-1]);const a=i.length-1,c=[];let l=1;for(let b=0;b<=a;++b)b>0&&(l*=b),c.push(l);const u=[];for(let b=0;b<=a;++b){const w=c[a]/(c[b]*c[a-b]);u.push(w)}const f=sn.create(),h=sn.create(),d=dR.create(),_=b=>{let w=1,D=Math.pow(1-b,a);const v=b!==1?1/(1-b):1,T=sn.create();for(let N=0;N<=a;++N){N===a&&(D=1);const U=u[N]*w*D,I=sn.scale(f,i[N],U);sn.add(T,T,I),w*=b,D*=v}return T},g=[],m=[],p=a+1;for(let b=0;b<p;++b){const w=b/(p-1),D=_(w);g.push(D),m.push(w)}let S=1;const E=hR/s,x=Math.sin(E);for(;S<g.length-1;){const b=sn.subtract(f,g[S],g[S-1]);sn.normalize(b,b);const w=sn.subtract(h,g[S+1],g[S]);sn.normalize(w,w);const D=sn.cross(d,b,w);if(Math.abs(D[2])>x){const v=m[S-1],T=m[S+1],N=v+(T-v)*1/3,U=v+(T-v)*2/3,I=_(N),F=_(U);g.splice(S,1,I,F),m.splice(S,1,N,U),S--,S<1&&(S=1)}else++S}g.shift();const M=pR(g,e);return M.lastBezierControlPoint=i[i.length-2],M};var _R=gR;const vR=We,Vh=fr,xR=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;const n=Vh(t),i=Vh(e),s=n.length;let r=0;do{let o=!1;for(let a=0;a<s;a++)if(!vR.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};var MR=xR;const ER=dt,yR=We,SR=Oa,bR=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");const e=SR();e.transforms=ER.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){const i=yR.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};var TR=bR;const wR=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);var Dg=wR;const AR=pu,RR=t=>{const e=AR(t);return e.points=t.points.slice().reverse(),e};var CR=RR;const PR=We,LR=fr,DR=t=>{const e=LR(t);let n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+PR.toString(i)+`,
`}),n+=`]
`,n};var UR=DR;const IR=t=>{const e=t.points,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){const o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};var NR=IR;const Gh=dt,FR=(t,e)=>{const n=Gh.multiply(Gh.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var OR=FR;const BR=We,zR=Dg,HR=t=>{if(!zR(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if(BR.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};var VR=HR,di={appendArc:sR,appendBezier:_R,appendPoints:Lg,clone:pu,close:vg,concat:Pg,create:Oa,equals:MR,fromPoints:_u,fromCompactBinary:TR,isA:Dg,reverse:CR,toPoints:fr,toString:UR,toCompactBinary:NR,transform:OR,validate:VR};const GR=(t,e)=>Array.isArray(t)&&t.length>=e?t.every(n=>Number.isFinite(n)):!1,$R=(t,e)=>Number.isFinite(t)&&t>e,kR=(t,e)=>Number.isFinite(t)&&t>=e;var Et={isNumberArray:GR,isGT:$R,isGTE:kR};const{EPS:$h,TAU:Os}=et,Qn=We,WR=di,{isGT:XR,isGTE:kc,isNumberArray:qR}=Et,jR=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:Os,makeTangent:!1,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,makeTangent:o,segments:a}=Object.assign({},e,t);if(!qR(n,2))throw new Error("center must be an array of X and Y values");if(!XR(i,0))throw new Error("radius must be greater than zero");if(!kc(s,0))throw new Error("startAngle must be positive");if(!kc(r,0))throw new Error("endAngle must be positive");if(!kc(a,4))throw new Error("segments must be four or more");s=s%Os,r=r%Os;let c=Os;s<r&&(c=r-s),s>r&&(c=r+(Os-s));const l=Math.acos((i*i+i*i-$h*$h)/(2*i*i)),u=Qn.clone(n);let f;const h=[];if(c<l)f=Qn.fromAngleRadians(Qn.create(),s),Qn.scale(f,f,i),Qn.add(f,f,u),h.push(f);else{const d=Math.max(1,Math.floor(a*(c/Os)))+1;let _=d*.5/c;_>.25&&(_=.25);const g=o?d+2:d;for(let m=0;m<=g;m++){let p=m;o&&(p=(m-1)*(d-2*_)/d+_,p<0&&(p=0),p>d&&(p=d));const S=s+p*(c/d);f=Qn.fromAngleRadians(Qn.create(),S),Qn.scale(f,f,i),Qn.add(f,f,u),h.push(f)}}return WR.fromPoints({closed:!1},h)};var YR=jR;const ZR=t=>Object.assign({},t);var KR=ZR;const JR=dt,QR=t=>(t===void 0&&(t=[]),{sides:t,transforms:JR.create()});var Ba=QR;const Wc=We,eC=Ba,tC=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");Wc.equals(t[0],t[e-1])&&--e;const n=[];let i=t[e-1];for(let s=0;s<e;s++){const r=t[s];n.push([Wc.clone(i),Wc.clone(r)]),i=r}return eC(n)};var nC=tC;const iC=dt,kh=We,sC=Ba,rC=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");const e=sC();e.transforms=iC.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){const i=kh.fromValues(t[n+0],t[n+1]),s=kh.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var oC=rC;const aC=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);var Ug=aC;const Wh=dt,zo=We,cC=t=>(Wh.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{const n=zo.transform(zo.create(),e[0],t.transforms),i=zo.transform(zo.create(),e[1],t.transforms);return[n,i]}),t.transforms=Wh.create()),t);var lC=cC;const uC=lC,fC=t=>uC(t).sides;var lo=fC;const hC=Ba,dC=lo,pC=t=>{const n=dC(t).map(i=>[i[1],i[0]]);return n.reverse(),hC(n)};var Ig=pC;const Sr=We,mC=lo,gC=t=>{const e=new Map,n=i=>{const s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},_C=t=>{const e=new Map;return gC(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},vC=t=>{const e=_C(mC(t)),n=[];for(;;){let i;for(const[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;const s=[],r=i[0];for(;;){s.push(i[0]);const o=i[1];if(o===r)break;const a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);const c=xC(i,a);a.length===0&&e.delete(o),i=c}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},xC=(t,e)=>{if(e.length===1)return e.pop();const n=Sr.create(),i=Sr.angleDegrees(Sr.subtract(n,t[1],t[0]));let s,r;e.forEach((a,c)=>{let u=Sr.angleDegrees(Sr.subtract(n,a[1],a[0]))-i;u<-180&&(u+=360),u>=180&&(u-=360),(r===void 0||u>s)&&(r=c,s=u)});const o=e[r];return e.splice(r,1),o};var Ng=vC;const MC=lo,EC=t=>{const n=MC(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};var yC=EC;const Xh=We,SC=lo,bC=t=>{const e=SC(t);let n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+Xh.toString(i[0])+", "+Xh.toString(i[1])+`]
`}),n+=`]
`,n};var TC=bC;const wC=t=>{const e=t.sides,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){const o=r*4+21,a=e[r][0],c=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=c[0],s[o+3]=c[1]}return s};var AC=wC;const qh=dt,RC=Ig,CC=(t,e)=>{const n=qh.multiply(qh.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?RC(i):i};var PC=CC;const LC=We,DC=Ug,UC=Ng,IC=t=>{if(!DC(t))throw new Error("invalid geom2 structure");if(UC(t),t.sides.forEach(e=>{if(LC.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};var NC=IC,Ct={clone:KR,create:Ba,fromPoints:nC,fromCompactBinary:oC,isA:Ug,reverse:Ig,toOutlines:Ng,toPoints:yC,toSides:lo,toString:TC,toCompactBinary:AC,transform:PC,validate:NC};const{EPS:jh,TAU:Ei}=et,Xc=We,Yh=Ct,{sin:FC,cos:OC}=jt,{isGTE:qc,isNumberArray:Zh}=Et,BC=t=>{const e={center:[0,0],radius:[1,1],startAngle:0,endAngle:Ei,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!Zh(n,2))throw new Error("center must be an array of X and Y values");if(!Zh(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!qc(s,0))throw new Error("startAngle must be positive");if(!qc(r,0))throw new Error("endAngle must be positive");if(!qc(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return Yh.create();s=s%Ei,r=r%Ei;let a=Ei;s<r&&(a=r-s),s>r&&(a=r+(Ei-s));const c=Math.min(i[0],i[1]),l=Math.acos((c*c+c*c-jh*jh)/(2*c*c));if(a<l)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/Ei));const u=Xc.clone(n),f=a/o,h=[];o=a<Ei?o+1:o;for(let d=0;d<o;d++){const _=f*d+s,g=Xc.fromValues(i[0]*OC(_),i[1]*FC(_));Xc.add(g,u,g),h.push(g)}return a<Ei&&h.push(u),Yh.fromPoints(h)};var Fg=BC;const{TAU:zC}=et,HC=Fg,{isGTE:VC}=Et,GC=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:zC,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!VC(i,0))throw new Error("radius must be positive");return i=[i,i],HC({center:n,radius:i,startAngle:s,endAngle:r,segments:o})};var Og=GC;const $C=t=>Object.assign({},t);var kC=$C;const WC=dt,XC=t=>(t===void 0&&(t=[]),{polygons:t,transforms:WC.create()});var uo=XC;const qC=co,Kh=Fa,Jh=Cg,jC=(t,e,n)=>{const i=[],s=[],r=[];Kh(i,n,e),Kh(s,t,e);const o=Jh(qC(r,s,i)),a=Jh(i);if(a===0)throw Error("a and b are the same point");return o/a},YC=(t,e,n)=>Math.sqrt(jC(t,e,n));var ZC=YC;const KC=co,JC=gu,Qh=Fa,QC=(t,e,n,i)=>{const s=[0,0,0];return Qh(t,e,n),Qh(s,n,i),KC(t,t,s),JC(t,t)};var eP=QC;let tP=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};var nP=tP;let iP=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};var sP=iP;const rP=Tg,oP=Rg;let aP=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?rP(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?oP(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};var cP=aP;const jc=Sg,lP=bg,uP=co,Yc=Ia,fP=wg,hP=gu,Ho=Ag,Zc=Fa,Kc=cP,Bg=0,dP=1,Ol=2;let pP=class zg{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=Bg,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){const e=this.edge,n=e.next;let i=n.next;const s=Zc([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)lP(o,s),Zc(s,i.head().point,e.head().point),jc(this.normal,this.normal,uP(r,o,s)),i=i.next,this.nVertices+=1;this.area=fP(this.normal),this.normal=Ho(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{const u=s.lengthSquared();u>i&&(n=s,i=u),s=s.next}while(s!==this.edge);const r=n.tail().point,o=n.head().point,a=Zc([],o,r),c=Math.sqrt(i);Ho(a,a,1/c);const l=Yc(this.normal,a);Ho(a,a,-l),jc(this.normal,this.normal,a),hP(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do jc(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);Ho(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=Yc(this.normal,this.centroid)}distanceToPlane(e){return Yc(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){const s=n.opposite.face;let r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=Ol,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){const i=e.opposite,s=i.face;n.push(s),s.mark=Ol;let r=e.prev,o=e.next,a=i.prev,c=i.next;for(;r.opposite.face===s;)r=r.prev,c=c.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let l;for(l=c;l!==a.next;l=l.next)l.face=this;this.edge=o;let u;return u=this.connectHalfEdges(a,o),u&&n.push(u),u=this.connectHalfEdges(r,c),u&&n.push(u),this.computeNormalAndCentroid(),n}collectIndices(){const e=[];let n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){const r=new zg,o=new Kc(e,r),a=new Kc(n,r),c=new Kc(i,r);return o.next=c.prev=a,a.next=o.prev=c,c.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};var mP={VISIBLE:Bg,NON_CONVEX:dP,DELETED:Ol,Face:pP};const Jc=Ia,gP=ZC,_P=eP,ed=nP,vP=sP,{Face:ei,VISIBLE:Bs,NON_CONVEX:td,DELETED:xP}=mP,MP=1,nd=2;let EP=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new ed,this.unclaimed=new ed,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new vP(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){const a=e[o];if(a.mark===Bs){const c=a.distanceToPlane(i.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){const e=[],n=[],i=[],s=[];let r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){const a=this.vertices[r],c=a.point;for(o=0;o<3;o+=1)c[o]<e[o]&&(e[o]=c[o],i[o]=a);for(o=0;o<3;o+=1)c[o]>n[o]&&(n[o]=c[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){const e=this.vertices,[n,i]=this.computeExtremes();let s,r,o,a,c=0,l=0;for(o=0;o<3;o+=1){const g=i[o].point[o]-n[o].point[o];g>c&&(c=g,l=o)}const u=n[l],f=i[l];for(c=0,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==u&&g!==f){const m=gP(g.point,u.point,f.point);m>c&&(c=m,s=g)}}const h=_P([],u.point,f.point,s.point),d=Jc(u.point,h);for(c=-1,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==u&&g!==f&&g!==s){const m=Math.abs(Jc(h,g.point)-d);m>c&&(c=m,r=g)}}const _=[];if(Jc(r.point,h)-d<0)for(_.push(ei.createTriangle(u,f,s),ei.createTriangle(r,f,u),ei.createTriangle(r,s,f),ei.createTriangle(r,u,s)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge(g)),_[o+1].getEdge(1).setOpposite(_[g+1].getEdge(0))}else for(_.push(ei.createTriangle(u,s,f),ei.createTriangle(r,u,f),ei.createTriangle(r,f,s),ei.createTriangle(r,s,u)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge((3-o)%3)),_[o+1].getEdge(0).setOpposite(_[g+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(_[o]);for(o=0;o<e.length;o+=1){const g=e[o];if(g!==u&&g!==f&&g!==s&&g!==r){c=this.tolerance;let m;for(a=0;a<4;a+=1){const p=_[a].distanceToPlane(g.point);p>c&&(c=p,m=_[a])}m&&this.addVertexToFace(g,m)}}}reindexFaceAndVertices(){const e=[];for(let n=0;n<this.faces.length;n+=1){const i=this.faces[n];i.mark===Bs&&e.push(i)}this.faces=e}collectFaces(e){const n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==Bs)throw Error("attempt to include a destroyed face in the hull");const s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0;const s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){const r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=xP;let r;n?r=n.next:r=n=i.getEdge(0);do{const o=r.opposite,a=o.face;a.mark===Bs&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){const i=ei.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){const o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");const o=i.opposite.face;let a=!1;if(n===nd?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){const c=e.mergeAdjacentFaces(i,[]);for(let l=0;l<c.length;l+=1)this.deleteFaceVertices(c[l],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=td),!1}addVertexToHull(e){const n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Bs)for(;this.doAdjacentMerge(s,MP););}for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===td)for(s.mark=Bs;this.doAdjacentMerge(s,nd););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};var yP=EP;const SP=yP,bP=(t,e={})=>{const n=new SP(t);return n.build(),n.collectFaces(e.skipTriangulation)};var TP=bP;const wP=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var hr=wP;const AP=hr,RP=Ge,CP=(...t)=>{let e,n;return t.length===1?(e=AP(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>RP.clone(i)),e};var PP=CP;const LP=Ge,DP=hr,UP=t=>{const e=t.map(n=>LP.clone(n));return DP(e)};var IP=UP;const NP=hr,FP=(t,e)=>{const n=NP(t);return n.plane=e,n};var OP=FP;const BP=()=>[0,0,0,0];var za=BP;const zP=za,HP=t=>{const e=zP();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};var Hg=HP;const VP=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);var Vg=VP;const GP=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];var Gg=GP;const $P=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);var $g=$P;const Qc=Ge,kP=(t,e,n)=>{const i=Qc.normalize(Qc.create(),e),s=Qc.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};var kg=kP;const WP=za,XP=(t,e,n,i)=>{const s=WP();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};var Wg=XP;const rn=Ge,qP=kg,jP=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;const n=e.length;e.forEach(d=>{rn.add(t,t,d)}),rn.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,c=0;const l=rn.create();e.forEach(d=>{rn.subtract(l,d,t),i+=l[0]*l[0],s+=l[0]*l[1],r+=l[0]*l[2],o+=l[1]*l[1],a+=l[1]*l[2],c+=l[2]*l[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,c/=n,l[0]=0,l[1]=0,l[2]=0;const u=rn.create();let f=o*c-a*a;u[0]=f,u[1]=r*a-s*c,u[2]=s*a-r*o;let h=f*f;return rn.add(l,l,rn.scale(u,u,h)),f=i*c-r*r,u[0]=r*a-s*c,u[1]=f,u[2]=s*r-a*i,h=f*f,rn.dot(l,u)<0&&(h=-h),rn.add(l,l,rn.scale(u,u,h)),f=i*o-s*s,u[0]=s*a-r*o,u[1]=s*r-a*i,u[2]=f,h=f*f,rn.dot(l,u)<0&&(h=-h),rn.add(l,l,rn.scale(u,u,h)),qP(t,l,t)};var YP=jP;const Nn=Ge,ZP=(t,...e)=>{const n=e.length,i=Nn.create(),s=Nn.create(),r=o=>{const a=e[o],c=e[(o+1)%n],l=e[(o+2)%n];return Nn.subtract(i,c,a),Nn.subtract(s,l,a),Nn.cross(i,i,s),Nn.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?Nn.copy(t,r(0)):(e.forEach((o,a)=>{Nn.add(t,t,r(a))}),Nn.normalize(t,t)),t[3]=Nn.dot(t,e[0]),t};var Xg=ZP;const{EPS:el}=et,Bt=Ge,KP=(t,e,n,i)=>{let s=Bt.subtract(Bt.create(),n,e),r=Bt.subtract(Bt.create(),i,e);Bt.length(s)<el&&(s=Bt.orthogonal(s,r)),Bt.length(r)<el&&(r=Bt.orthogonal(r,s));let o=Bt.cross(Bt.create(),s,r);Bt.length(o)<el&&(r=Bt.orthogonal(r,s),o=Bt.cross(o,s,r)),o=Bt.normalize(o,o);const a=Bt.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};var JP=KP;const QP=Ge,eL=(t,e)=>{const n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return QP.fromValues(i,s,r)};var tL=eL;const nL=Ge,iL=(t,e)=>nL.dot(t,e)-t[3];var qg=iL;const sL=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;var jg=sL;const rL=dt,zt=Ge,oL=Xg,aL=$g,cL=(t,e,n)=>{const i=rL.isMirroring(n),s=zt.orthogonal(zt.create(),e),r=zt.cross(s,e,s),o=zt.cross(zt.create(),e,r);let a=zt.fromScalar(zt.create(),e[3]);zt.multiply(a,a,e);let c=zt.add(zt.create(),a,r),l=zt.add(zt.create(),a,o);return a=zt.transform(a,a,n),c=zt.transform(c,c,n),l=zt.transform(l,l,n),oL(t,a,c,l),i&&aL(t,t),t};var lL=cL,dr={clone:Hg,copy:Vg,create:za,equals:Gg,flip:$g,fromNormalAndPoint:kg,fromValues:Wg,fromNoisyPoints:YP,fromPoints:Xg,fromPointsRandom:JP,projectionOfPoint:tL,signedDistanceToPoint:qg,toString:jg,transform:lL};const id=dr,uL=hr,fL=t=>{const e=t.vertices.slice().reverse(),n=uL(e);return t.plane&&(n.plane=id.flip(id.create(),t.plane)),n};var hL=fL;const dL=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));var Yg=dL;const sd=dr,Zi=Ge,pL=t=>mL(t.vertices),mL=t=>{const e=t.length;if(e>2){const n=sd.fromPoints(sd.create(),...t);let i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){const o=t[r];if(!gL(i,s,o,n))return!1;i=s,s=o}}return!0},gL=(t,e,n,i)=>{const s=Zi.cross(Zi.create(),Zi.subtract(Zi.create(),e,t),Zi.subtract(Zi.create(),n,e));return Zi.dot(s,i)>=0};var Zg=pL;const rd=dr,_L=t=>(t.plane||(t.plane=rd.fromPoints(rd.create(),...t.vertices)),t.plane);var vu=_L;const vL=vu,xL=t=>{const e=t.vertices.length;if(e<3)return 0;const n=t.vertices,i=vL(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let c=0,l=0,u=1,f=2;switch(a){case 1:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][1]*(n[f][2]-n[l][2]);c+=n[0][1]*(n[1][2]-n[e-1][2]),c/=2*i[0];break;case 2:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][2]*(n[f][0]-n[l][0]);c+=n[0][2]*(n[1][0]-n[e-1][0]),c/=2*i[1];break;case 3:default:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][0]*(n[f][1]-n[l][1]);c+=n[0][0]*(n[1][1]-n[e-1][1]),c/=2*i[2];break}return c};var Kg=xL;const br=Ge,ML=t=>{const e=t.vertices,n=e.length,i=n===0?br.create():br.clone(e[0]),s=br.clone(i);for(let r=1;r<n;r++)br.min(i,i,e[r]),br.max(s,s,e[r]);return[i,s]};var EL=ML;const yL=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];var SL=yL;const bL=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);var TL=bL;const wL=(t,e,n)=>{const[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};var AL=wL,RL={clone:Hg,copy:Vg,create:za,dot:SL,equals:Gg,fromScalar:TL,fromValues:Wg,toString:jg,transform:AL};const CL=RL,od=new WeakMap,PL=t=>{const e=od.get(t);if(e)return e;const n=t.vertices,i=CL.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,c=s,l=s;n.forEach(d=>{s[0]>d[0]&&(s=d),r[1]>d[1]&&(r=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),c[1]<d[1]&&(c=d),l[2]<d[2]&&(l=d)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+c[1])*.5,i[2]=(o[2]+l[2])*.5;const u=i[0]-a[0],f=i[1]-c[1],h=i[2]-l[2];return i[3]=Math.sqrt(u*u+f*f+h*h),od.set(t,i),i};var LL=PL;const tl=Ge,DL=t=>{let e=0;const n=t.vertices,i=tl.create();for(let s=0;s<n.length-2;s++)tl.cross(i,n[s+1],n[s+2]),e+=tl.dot(n[0],i);return e/=6,e};var UL=DL;const IL=t=>t.vertices;var NL=IL;const FL=Ge,OL=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${FL.toString(n)}, `}),e+="]",e};var BL=OL;const zL=dt,ad=Ge,HL=hr,VL=(t,e)=>{const n=e.vertices.map(i=>ad.transform(ad.create(),i,t));return zL.isMirroring(t)&&n.reverse(),HL(n)};var GL=VL;const $L=qg,{NEPS:kL}=et,WL=Ge,XL=Yg,qL=Zg,jL=Kg,YL=vu,ZL=t=>{if(!XL(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(jL(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(WL.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!qL(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){const e=YL(t);t.vertices.forEach(n=>{const i=Math.abs($L(e,n));if(i>kL)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};var KL=ZL,ot={clone:PP,create:hr,fromPoints:IP,fromPointsAndPlane:OP,invert:hL,isA:Yg,isConvex:Zg,measureArea:Kg,measureBoundingBox:EL,measureBoundingSphere:LL,measureSignedVolume:UL,plane:vu,toPoints:NL,toString:BL,transform:GL,validate:KL};const JL=TP,QL=uo,e3=ot,t3=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const n=JL(t,{skipTriangulation:!0}).map(i=>{const s=i.map(r=>t[r]);return e3.create(s)});return QL(n)};var n3=t3;const i3=ot,s3=uo,r3=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const e=t.map((i,s)=>i3.create(i));return s3(e)};var o3=r3;const a3=Ge,c3=dt,l3=ot,u3=uo,f3=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");const e=u3();e.transforms=c3.clone(t.slice(1,17));const n=t[21];let i=22,s=t.length-n*3;for(;s<t.length;){const r=t[i];i++;const o=[];for(let a=0;a<r;a++)o.push(a3.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(l3.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var h3=f3;const cd=dt,d3=ot,p3=t=>(cd.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>d3.transform(t.transforms,e)),t.transforms=cd.create()),t);var m3=p3;const g3=m3,_3=t=>g3(t).polygons;var Ha=_3;const v3=ot,x3=uo,M3=Ha,E3=t=>{const n=M3(t).map(i=>v3.invert(i));return x3(n)};var y3=E3;const S3=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);var Jg=S3;const b3=ot,T3=Ha,w3=t=>T3(t).map(i=>b3.toPoints(i));var A3=w3;const R3=ot,C3=Ha,P3=t=>{const e=C3(t);let n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+R3.toString(i)+`
`}),n};var L3=P3;const D3=ot,U3=t=>{const e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((l,u)=>l+u.vertices.length,0);let r=[-1,-1,-1,-1];t.color&&(r=t.color);const o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,c=a+i;return e.forEach(l=>{const u=D3.toPoints(l);o[a]=u.length,a++;for(let f=0;f<u.length;f++){const h=u[f];o[c+0]=h[0],o[c+1]=h[1],o[c+2]=h[2],c+=3}}),o};var I3=U3;const ld=dt,N3=(t,e)=>{const n=ld.multiply(ld.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var F3=N3;const O3=ot,B3=Jg,z3=t=>{if(!B3(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(O3.validate),H3(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},H3=t=>{const e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{const o=`${s}`,a=`${i[(r+1)%i.length]}`,c=`${o}/${a}`,l=e.has(c)?e.get(c):0;e.set(c,l+1)})});const n=[];if(e.forEach((i,s)=>{const r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};var V3=z3,Pt={clone:kC,create:uo,fromPointsConvex:n3,fromPoints:o3,fromCompactBinary:h3,invert:y3,isA:Jg,toPoints:A3,toPolygons:Ha,toString:L3,toCompactBinary:I3,transform:F3,validate:V3};const ud=Pt,G3=ot,{isNumberArray:fd}=Et,$3=t=>{const e={center:[0,0,0],size:[2,2,2]},{center:n,size:i}=Object.assign({},e,t);if(!fd(n,3))throw new Error("center must be an array of X, Y and Z values");if(!fd(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(r=>r>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?ud.create():ud.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(r=>{const o=r[0].map(a=>[n[0]+i[0]/2*(2*!!(a&1)-1),n[1]+i[1]/2*(2*!!(a&2)-1),n[2]+i[2]/2*(2*!!(a&4)-1)]);return G3.create(o)}))};var xu=$3;const k3=xu,{isGTE:W3}=Et,X3=t=>{const e={center:[0,0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!W3(i,0))throw new Error("size must be positive");return i=[i,i,i],k3({center:n,size:i})};var q3=X3;const{EPS:hd,TAU:yi}=et,bt=Ge,j3=Pt,Y3=ot,{sin:Z3,cos:K3}=jt,{isGT:J3,isGTE:nl,isNumberArray:il}=Et,Q3=t=>{const e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:yi,segments:32};let{center:n,height:i,startRadius:s,startAngle:r,endRadius:o,endAngle:a,segments:c}=Object.assign({},e,t);if(!il(n,3))throw new Error("center must be an array of X, Y and Z values");if(!J3(i,0))throw new Error("height must be greater then zero");if(!il(s,2))throw new Error("startRadius must be an array of X and Y values");if(!s.every(v=>v>=0))throw new Error("startRadius values must be positive");if(!il(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(v=>v>=0))throw new Error("endRadius values must be positive");if(o.every(v=>v===0)&&s.every(v=>v===0))throw new Error("at least one radius must be positive");if(!nl(r,0))throw new Error("startAngle must be positive");if(!nl(a,0))throw new Error("endAngle must be positive");if(!nl(c,4))throw new Error("segments must be four or more");r=r%yi,a=a%yi;let l=yi;r<a&&(l=a-r),r>a&&(l=a+(yi-r));const u=Math.min(s[0],s[1],o[0],o[1]),f=Math.acos((u*u+u*u-hd*hd)/(2*u*u));if(l<f)throw new Error("startAngle and endAngle do not define a significant rotation");const h=Math.floor(c*(l/yi)),d=bt.fromValues(0,0,-(i/2)),_=bt.fromValues(0,0,i/2),g=bt.subtract(bt.create(),_,d),m=bt.fromValues(1,0,0),p=bt.fromValues(0,1,0),S=bt.create(),E=bt.create(),x=bt.create(),M=(v,T,N)=>{const U=T*l+r;return bt.scale(S,m,N[0]*K3(U)),bt.scale(E,p,N[1]*Z3(U)),bt.add(S,S,E),bt.scale(x,g,v),bt.add(x,x,d),bt.add(bt.create(),S,x)},b=(...v)=>{const T=v.map(N=>bt.add(bt.create(),N,n));return Y3.create(T)},w=[];for(let v=0;v<h;v++){const T=v/h;let N=(v+1)/h;l===yi&&v===h-1&&(N=0),o[0]===s[0]&&o[1]===s[1]?(w.push(b(d,M(0,N,o),M(0,T,o))),w.push(b(M(0,N,o),M(1,N,o),M(1,T,o),M(0,T,o))),w.push(b(_,M(1,T,o),M(1,N,o)))):(s[0]>0&&s[1]>0&&w.push(b(d,M(0,N,s),M(0,T,s))),(s[0]>0||s[1]>0)&&w.push(b(M(0,T,s),M(0,N,s),M(1,T,o))),o[0]>0&&o[1]>0&&w.push(b(_,M(1,T,o),M(1,N,o))),(o[0]>0||o[1]>0)&&w.push(b(M(1,T,o),M(0,N,s),M(1,N,o))))}return l<yi&&(w.push(b(d,M(0,0,s),_)),w.push(b(M(0,0,s),M(1,0,o),_)),w.push(b(d,_,M(0,1,s))),w.push(b(M(0,1,s),_,M(1,1,o)))),j3.create(w)};var Qg=Q3;const eD=Pt,tD=Qg,{isGTE:nD}=Et,iD=t=>{const e={center:[0,0,0],height:2,radius:1,segments:32},{center:n,height:i,radius:s,segments:r}=Object.assign({},e,t);if(!nD(s,0))throw new Error("radius must be positive");return i===0||s===0?eD.create():tD({center:n,height:i,startRadius:[s,s],endRadius:[s,s],segments:r})};var e0=iD;const{TAU:dd}=et,Re=Ge,pd=Pt,md=ot,{sin:gd,cos:_d}=jt,{isGTE:sD,isNumberArray:vd}=Et,rD=t=>{const e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!vd(n,3))throw new Error("center must be an array of X, Y and Z values");if(!vd(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(_=>_>=0))throw new Error("radius values must be positive");if(!sD(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return pd.create();const o=Re.scale(Re.create(),Re.normalize(Re.create(),r[0]),i[0]),a=Re.scale(Re.create(),Re.normalize(Re.create(),r[1]),i[1]),c=Re.scale(Re.create(),Re.normalize(Re.create(),r[2]),i[2]),l=Math.round(s/4);let u;const f=[],h=Re.create(),d=Re.create();for(let _=0;_<=s;_++){const g=dd*_/s,m=Re.add(Re.create(),Re.scale(h,o,_d(g)),Re.scale(d,a,gd(g)));if(_>0){let p,S;for(let E=0;E<=l;E++){const x=dd/4*E/l,M=_d(x),b=gd(x);if(E>0){let w=[],D;D=Re.subtract(Re.create(),Re.scale(h,u,p),Re.scale(d,c,S)),w.push(Re.add(D,D,n)),D=Re.subtract(Re.create(),Re.scale(h,m,p),Re.scale(d,c,S)),w.push(Re.add(D,D,n)),E<l&&(D=Re.subtract(Re.create(),Re.scale(h,m,M),Re.scale(d,c,b)),w.push(Re.add(D,D,n))),D=Re.subtract(Re.create(),Re.scale(h,u,M),Re.scale(d,c,b)),w.push(Re.add(D,D,n)),f.push(md.create(w)),w=[],D=Re.add(Re.create(),Re.scale(h,u,p),Re.scale(d,c,S)),w.push(Re.add(Re.create(),n,D)),D=Re.add(D,Re.scale(h,m,p),Re.scale(d,c,S)),w.push(Re.add(Re.create(),n,D)),E<l&&(D=Re.add(D,Re.scale(h,m,M),Re.scale(d,c,b)),w.push(Re.add(Re.create(),n,D))),D=Re.add(D,Re.scale(h,u,M),Re.scale(d,c,b)),w.push(Re.add(Re.create(),n,D)),w.reverse(),f.push(md.create(w))}p=M,S=b}}u=m}return pd.create(f)};var t0=rD;const oD=Pt,aD=ot,{isNumberArray:xd}=Et,cD=t=>{const e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:n,faces:i,colors:s,orientation:r}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(n.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(s){if(!Array.isArray(s))throw new Error("colors must be an array");if(s.length!==i.length)throw new Error("faces and colors must have the same length")}n.forEach((a,c)=>{if(!xd(a,3))throw new Error(`point ${c} must be an array of X, Y, Z values`)}),i.forEach((a,c)=>{if(a.length<3)throw new Error(`face ${c} must contain 3 or more indexes`);if(!xd(a,a.length))throw new Error(`face ${c} must be an array of numbers`)}),r!=="outward"&&i.forEach(a=>a.reverse());const o=i.map((a,c)=>{const l=aD.create(a.map(u=>n[u]));return s&&s[c]&&(l.color=s[c]),l});return oD.create(o)};var n0=cD;const Md=dt,Ed=Ge,yd=Pt,lD=n0,{isGTE:Sd}=Et,uD=t=>{const e={radius:1,frequency:6};let{radius:n,frequency:i}=Object.assign({},e,t);if(!Sd(n,0))throw new Error("radius must be positive");if(!Sd(i,6))throw new Error("frequency must be six or more");if(n===0)return yd.create();i=Math.floor(i/6);const s=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],r=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(h,d,_)=>{const g=h[0],m=h[1],p=h[2];let S=_;const E=[],x=[];for(let M=0;M<d;M++)for(let b=0;b<d-M;b++){const w=M/d,D=(M+1)/d,v=b/(d-M),T=(b+1)/(d-M),N=d-M-1?b/(d-M-1):1,U=[];U[0]=a(a(g,m,v),p,w),U[1]=a(a(g,m,T),p,w),U[2]=a(a(g,m,N),p,D);for(let I=0;I<3;I++){const F=Ed.length(U[I]);for(let B=0;B<3;B++)U[I][B]/=F}if(E.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3,b<d-M-1){const I=d-M-1?(b+1)/(d-M-1):1;U[0]=a(a(g,m,T),p,w),U[1]=a(a(g,m,I),p,D),U[2]=a(a(g,m,N),p,D);for(let F=0;F<3;F++){const B=Ed.length(U[F]);for(let V=0;V<3;V++)U[F][V]/=B}E.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3}}return{points:E,triangles:x,offset:S}},a=(h,d,_)=>{const g=1-_,m=[];for(let p=0;p<3;p++)m[p]=h[p]*g+d[p]*_;return m};let c=[],l=[],u=0;for(let h=0;h<r.length;h++){const d=o([s[r[h][0]],s[r[h][1]],s[r[h][2]]],i,u);c=c.concat(d.points),l=l.concat(d.triangles),u=d.offset}let f=lD({points:c,faces:l,orientation:"inward"});return n!==1&&(f=yd.transform(Md.fromScaling(Md.create(),[n,n,n]),f)),f};var fD=uD;const hD=di,dD=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return hD.fromPoints({},t)};var pD=dD;const Vo=Ct,mD=t=>{const e={points:[],paths:[],orientation:"counterclockwise"},{points:n,paths:i,orientation:s}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let r=n;Array.isArray(n[0])&&(Array.isArray(n[0][0])||(r=[n])),r.forEach((u,f)=>{if(!Array.isArray(u))throw new Error("list of points "+f+" must be an array");if(u.length<3)throw new Error("list of points "+f+" must contain three or more points");u.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+f+", point "+d+" must be an array");if(h.length<2)throw new Error("list of points "+f+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let u=0;o=r.map(f=>f.map(h=>u++))}const a=[];r.forEach(u=>u.forEach(f=>a.push(f)));let c=[];o.forEach(u=>{const f=u.map(d=>a[d]),h=Vo.fromPoints(f);c=c.concat(Vo.toSides(h))});let l=Vo.create(c);return s==="clockwise"&&(l=Vo.reverse(l)),l};var gD=mD;const Si=We,bd=Ct,{isNumberArray:Td}=Et,_D=t=>{const e={center:[0,0],size:[2,2]},{center:n,size:i}=Object.assign({},e,t);if(!Td(n,2))throw new Error("center must be an array of X and Y values");if(!Td(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return bd.create();const s=[i[0]/2,i[1]/2],r=[s[0],-s[1]],o=[Si.subtract(Si.create(),n,s),Si.add(Si.create(),n,r),Si.add(Si.create(),n,s),Si.subtract(Si.create(),n,r)];return bd.fromPoints(o)};var Mu=_D;const{EPS:na,TAU:Tr}=et,sl=We,ft=Ge,wd=Pt,rr=ot,{sin:vD,cos:xD}=jt,{isGTE:Ad,isNumberArray:Rd}=Et,MD=xu,Cd=(t,e,n,i,s,r)=>{const o=Tr/4*s/i,a=xD(o),c=vD(o),l=i-s;let u=n*a,f=e[2]-(n-n*c);r||(f=n-n*c-e[2]),u=u>na?u:0;const h=ft.add(ft.create(),t,[e[0]-n,e[1]-n,f]),d=ft.add(ft.create(),t,[n-e[0],e[1]-n,f]),_=ft.add(ft.create(),t,[n-e[0],n-e[1],f]),g=ft.add(ft.create(),t,[e[0]-n,n-e[1],f]),m=[],p=[],S=[],E=[];for(let x=0;x<=l;x++){const M=l>0?Tr/4*x/l:0,b=sl.fromAngleRadians(sl.create(),M);sl.scale(b,b,u);const w=ft.fromVec2(ft.create(),b);m.push(ft.add(ft.create(),h,w)),ft.rotateZ(w,w,[0,0,0],Tr/4),p.push(ft.add(ft.create(),d,w)),ft.rotateZ(w,w,[0,0,0],Tr/4),S.push(ft.add(ft.create(),_,w)),ft.rotateZ(w,w,[0,0,0],Tr/4),E.push(ft.add(ft.create(),g,w))}return r?[m,p,S,E]:(m.reverse(),p.reverse(),S.reverse(),E.reverse(),[E,S,p,m])},Pd=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){const s=t[i],r=e[i];for(let o=0;o<s.length-1;o++)n.push(rr.create([s[o],s[o+1],r[o]])),o<r.length-1&&n.push(rr.create([r[o],s[o+1],r[o+1]]))}return n},Ld=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i];const o=s[s.length-1],a=r[r.length-1],c=(i+1)%t.length;s=t[c],r=e[c];const l=s[0],u=r[0];n.push(rr.create([o,l,u,a]))}return n},ED=(t,e)=>{t=[t[3],t[2],t[1],t[0]],t=t.map(r=>r.slice().reverse());const n=[];t.forEach(r=>{r.forEach(o=>n.push(o))});const i=[];e.forEach(r=>{r.forEach(o=>i.push(o))});const s=[];for(let r=0;r<i.length;r++){const o=(r+1)%i.length;s.push(rr.create([n[r],n[o],i[o],i[r]]))}return s},yD=t=>{const e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!Rd(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Rd(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(l=>l>=0))throw new Error("size values must be positive");if(!Ad(s,0))throw new Error("roundRadius must be positive");if(!Ad(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return wd.create();if(s===0)return MD({center:n,size:i});if(i=i.map(l=>l/2),s>i[0]-na||s>i[1]-na||s>i[2]-na)throw new Error("roundRadius must be smaller than the radius of all dimensions");r=Math.floor(r/4);let o=null,a=null,c=[];for(let l=0;l<=r;l++){const u=Cd(n,i,s,r,l,!0),f=Cd(n,i,s,r,l,!1);if(l===0&&(c=c.concat(ED(f,u))),o&&(c=c.concat(Pd(o,u),Ld(o,u))),a&&(c=c.concat(Pd(a,f),Ld(a,f))),l===r){let h=u.map(d=>d[0]);c.push(rr.create(h)),h=f.map(d=>d[0]),c.push(rr.create(h))}o=u,a=f}return wd.create(c)};var SD=yD;const{EPS:bD,TAU:Dd}=et,ge=Ge,Ud=Pt,TD=ot,{sin:Id,cos:Nd}=jt,{isGTE:Go,isNumberArray:wD}=Et,AD=e0,RD=t=>{const e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:n,height:i,radius:s,roundRadius:r,segments:o}=Object.assign({},e,t);if(!wD(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Go(i,0))throw new Error("height must be positive");if(!Go(s,0))throw new Error("radius must be positive");if(!Go(r,0))throw new Error("roundRadius must be positive");if(r>s)throw new Error("roundRadius must be smaller than the radius");if(!Go(o,4))throw new Error("segments must be four or more");if(i===0||s===0)return Ud.create();if(r===0)return AD({center:n,height:i,radius:s});const a=[0,0,-(i/2)],c=[0,0,i/2],l=ge.subtract(ge.create(),c,a),u=ge.length(l);if(2*r>u-bD)throw new Error("height must be larger than twice roundRadius");let f;Math.abs(l[0])>Math.abs(l[1])?f=ge.fromValues(0,1,0):f=ge.fromValues(1,0,0);const h=ge.scale(ge.create(),ge.normalize(ge.create(),l),r),d=ge.scale(ge.create(),ge.normalize(ge.create(),ge.cross(ge.create(),h,f)),s),_=ge.scale(ge.create(),ge.normalize(ge.create(),ge.cross(ge.create(),d,h)),s);ge.add(a,a,h),ge.subtract(c,c,h);const g=Math.floor(.25*o),m=b=>{const w=b.map(D=>ge.add(D,D,n));return TD.create(w)},p=[],S=ge.create(),E=ge.create();let x;for(let b=0;b<=o;b++){const w=Dd*b/o,D=ge.add(ge.create(),ge.scale(S,d,Nd(w)),ge.scale(E,_,Id(w)));if(b>0){let v=[];v.push(ge.add(ge.create(),a,D)),v.push(ge.add(ge.create(),a,x)),v.push(ge.add(ge.create(),c,x)),v.push(ge.add(ge.create(),c,D)),p.push(m(v));let T,N;for(let U=0;U<=g;U++){const I=Dd/4*U/g,F=Nd(I),B=Id(I);if(U>0){v=[];let V;V=ge.add(ge.create(),a,ge.subtract(S,ge.scale(S,x,T),ge.scale(E,h,N))),v.push(V),V=ge.add(ge.create(),a,ge.subtract(S,ge.scale(S,D,T),ge.scale(E,h,N))),v.push(V),U<g&&(V=ge.add(ge.create(),a,ge.subtract(S,ge.scale(S,D,F),ge.scale(E,h,B))),v.push(V)),V=ge.add(ge.create(),a,ge.subtract(S,ge.scale(S,x,F),ge.scale(E,h,B))),v.push(V),p.push(m(v)),v=[],V=ge.add(ge.create(),ge.scale(S,x,T),ge.scale(E,h,N)),ge.add(V,V,c),v.push(V),V=ge.add(ge.create(),ge.scale(S,D,T),ge.scale(E,h,N)),ge.add(V,V,c),v.push(V),U<g&&(V=ge.add(ge.create(),ge.scale(S,D,F),ge.scale(E,h,B)),ge.add(V,V,c),v.push(V)),V=ge.add(ge.create(),ge.scale(S,x,F),ge.scale(E,h,B)),ge.add(V,V,c),v.push(V),v.reverse(),p.push(m(v))}T=F,N=B}}x=D}return Ud.create(p)};var CD=RD;const{EPS:Fd,TAU:$o}=et,at=We,Od=Ct,{isGTE:Bd,isNumberArray:zd}=Et,PD=Mu,LD=t=>{const e={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!zd(n,2))throw new Error("center must be an array of X and Y values");if(!zd(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(g=>g>=0))throw new Error("size values must be positive");if(!Bd(s,0))throw new Error("roundRadius must be positive");if(!Bd(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return Od.create();if(s===0)return PD({center:n,size:i});if(i=i.map(g=>g/2),s>i[0]-Fd||s>i[1]-Fd)throw new Error("roundRadius must be smaller than the radius of all dimensions");const o=Math.floor(r/4),a=at.add(at.create(),n,[i[0]-s,i[1]-s]),c=at.add(at.create(),n,[s-i[0],i[1]-s]),l=at.add(at.create(),n,[s-i[0],s-i[1]]),u=at.add(at.create(),n,[i[0]-s,s-i[1]]),f=[],h=[],d=[],_=[];for(let g=0;g<=o;g++){const m=$o/4*g/o,p=at.fromAngleRadians(at.create(),m);at.scale(p,p,s),f.push(at.add(at.create(),a,p)),at.rotate(p,p,at.create(),$o/4),h.push(at.add(at.create(),c,p)),at.rotate(p,p,at.create(),$o/4),d.push(at.add(at.create(),l,p)),at.rotate(p,p,at.create(),$o/4),_.push(at.add(at.create(),u,p))}return Od.fromPoints(f.concat(h,d,_))};var DD=LD;const UD=t0,{isGTE:ID}=Et,ND=t=>{const e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!ID(i,0))throw new Error("radius must be positive");return i=[i,i,i],UD({center:n,radius:i,segments:s,axes:r})};var FD=ND;const OD=Mu,{isGTE:BD}=Et,zD=t=>{const e={center:[0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!BD(i,0))throw new Error("size must be positive");return i=[i,i],OD({center:n,size:i})};var HD=zD;const{TAU:i0}=et,Ir=We,VD=Ct,{isGT:GD,isGTE:ko,isNumberArray:$D}=Et,kD=(t,e)=>t>0&&e>1&&e<t/2?Math.cos(Math.PI*e/t)/Math.cos(Math.PI*(e-1)/t):0,Hd=(t,e,n,i)=>{const s=i0/t,r=[];for(let o=0;o<t;o++){const a=Ir.fromAngleRadians(Ir.create(),s*o+n);Ir.scale(a,a,e),Ir.add(a,i,a),r.push(a)}return r},WD=t=>{const e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:n,vertices:i,outerRadius:s,innerRadius:r,density:o,startAngle:a}=Object.assign({},e,t);if(!$D(n,2))throw new Error("center must be an array of X and Y values");if(!ko(i,2))throw new Error("vertices must be two or more");if(!GD(s,0))throw new Error("outerRadius must be greater than zero");if(!ko(r,0))throw new Error("innerRadius must be greater than zero");if(!ko(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%i0,r===0){if(!ko(o,2))throw new Error("density must be two or more");r=s*kD(i,o)}const c=Ir.clone(n),l=Hd(i,s,a,c),u=Hd(i,r,a+Math.PI/i,c),f=[];for(let h=0;h<i;h++)f.push(l[h]),f.push(u[h]);return VD.fromPoints(f)};var XD=WD;const s0=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(s0(n)):e.concat(n),[]);var vs=s0;const qD=vs,Vd=dt,Gd=dr,$d=Ct,kd=Pt,Wd=di,jD=(t,...e)=>{const n={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:s}=Object.assign({},n,t);if(e=qD(e),e.length===0)throw new Error("wrong number of arguments");const r=Gd.fromNormalAndPoint(Gd.create(),s,i);if(Number.isNaN(r[0]))throw new Error("the given origin and normal do not define a proper plane");const o=Vd.mirrorByPlane(Vd.create(),r),a=e.map(c=>Wd.isA(c)?Wd.transform(o,c):$d.isA(c)?$d.transform(o,c):kd.isA(c)?kd.transform(o,c):c);return a.length===1?a[0]:a},YD=(...t)=>jD({normal:[1,0,0]},t);var ZD={mirrorX:YD};const Xd=dr,Ki=Ge,KD=t=>{const e=t.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const n=e.reduce((o,a)=>Ki.add(Ki.create(),o,a[0]),Ki.create());Ki.scale(n,n,1/e.length);let i,s=0;e.forEach(o=>{if(!Ki.equals(o[0],o[1])){const a=Ki.squaredDistance(n,o[0]);a>s&&(i=o,s=a)}});const r=e.find(o=>Ki.equals(o[1],i[0]));return Xd.fromPoints(Xd.create(),r[0],i[0],i[1])};var r0=KD;const JD=t=>(t||(t=[]),{edges:t});var xs=JD;const QD=xs,qd=Ge,eU=(...t)=>{let e,n;return t.length===1?(e=QD(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[qd.clone(i[0]),qd.clone(i[1])]),e};var tU=eU;const nU=Ge,iU=(t,e)=>{const n=t.edges,i=e.edges;return n.length!==i.length?!1:n.reduce((r,o,a)=>{const c=i[a],l=nU.squaredDistance(o[0],c[0]);return r&&l<Number.EPSILON},!0)};var sU=iU;const Wo=Ge,rU=xs,oU=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");if(t.length<3)throw new Error("the given points must contain THREE or more points");const e=[];let n=t[t.length-1];return t.forEach(i=>{i.length===2&&e.push([Wo.fromVec2(Wo.create(),n),Wo.fromVec2(Wo.create(),i)]),i.length===3&&e.push([n,i]),n=i}),rU(e)};var aU=oU;const Xo=Ge,cU=xs,lU=t=>{if(!Array.isArray(t))throw new Error("the given sides must be an array");const e=[];return t.forEach(n=>{e.push([Xo.fromVec2(Xo.create(),n[0]),Xo.fromVec2(Xo.create(),n[1])])}),cU(e)};var uU=lU;const fU=t=>!!(t&&typeof t=="object"&&"edges"in t&&Array.isArray(t.edges));var hU=fU;const dU=xs,pU=(...t)=>{let e,n;return t.length===1?(e=dU(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[i[1],i[0]]),e};var mU=pU;const gU=t=>t.edges;var _U=gU;const vU=(t,e)=>{let n,i,s,r,o,a=1;do{i=t,t=null;let c=null;for(o=0;i;){o++,s=i;let l=0;for(n=0;n<a&&(l++,s=s.nextZ,!!s);n++);let u=a;for(;l>0||u>0&&s;)l!==0&&(u===0||!s||e(i)<=e(s))?(r=i,i=i.nextZ,l--):(r=s,s=s.nextZ,u--),c?c.nextZ=r:t=r,r.prevZ=c,c=r;i=s}c.nextZ=null,a*=2}while(o>1);return t};var xU=vU;const MU=xU;let o0=class{constructor(e,n,i){this.i=e,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}};const EU=(t,e,n,i)=>{const s=new o0(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s},yU=t=>{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)};var a0={Node:o0,insertNode:EU,removeNode:yU,sortLinked:MU};const SU=(t,e,n,i,s,r,o,a)=>(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(r-a)-(s-o)*(i-a)>=0,bU=(t,e,n)=>(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);var Eu={area:bU,pointInTriangle:SU};const{Node:jd,insertNode:Yd,removeNode:da}=a0,{area:Kt}=Eu,TU=(t,e,n,i,s)=>{let r;if(s===LU(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Yd(o,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Yd(o,t[o],t[o+1],r);return r&&Va(r,r.next)&&(da(r),r=r.next),r},c0=(t,e)=>{if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Va(n,n.next)||Kt(n.prev,n,n.next)===0)){if(da(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e},wU=(t,e,n)=>{let i=t;do{const s=i.prev,r=i.next.next;!Va(s,r)&&l0(s,i,i.next,r)&&to(s,r)&&to(r,s)&&(e.push(s.i/n),e.push(i.i/n),e.push(r.i/n),da(i),da(i.next),i=t=r),i=i.next}while(i!==t);return c0(i)},AU=(t,e)=>{let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&l0(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1},to=(t,e)=>Kt(t.prev,t,t.next)<0?Kt(t,e,t.next)>=0&&Kt(t,t.prev,e)>=0:Kt(t,e,t.prev)<0||Kt(t,t.next,e)<0,RU=(t,e)=>{let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i},CU=(t,e)=>{const n=new jd(t.i,t.x,t.y),i=new jd(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i},PU=(t,e)=>t.next.i!==e.i&&t.prev.i!==e.i&&!AU(t,e)&&(to(t,e)&&to(e,t)&&RU(t,e)&&(Kt(t.prev,t,e.prev)||Kt(t,e.prev,e))||Va(t,e)&&Kt(t.prev,t,t.next)>0&&Kt(e.prev,e,e.next)>0),l0=(t,e,n,i)=>{const s=Math.sign(Kt(t,e,n)),r=Math.sign(Kt(t,e,i)),o=Math.sign(Kt(n,i,t)),a=Math.sign(Kt(n,i,e));return!!(s!==r&&o!==a||s===0&&qo(t,n,e)||r===0&&qo(t,i,e)||o===0&&qo(n,t,i)||a===0&&qo(n,e,i))},qo=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),LU=(t,e,n,i)=>{let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s},Va=(t,e)=>t.x===e.x&&t.y===e.y;var u0={cureLocalIntersections:wU,filterPoints:c0,isValidDiagonal:PU,linkedPolygon:TU,locallyInside:to,splitPolygon:CU};const{filterPoints:Bl,linkedPolygon:DU,locallyInside:UU,splitPolygon:IU}=u0,{area:Zd,pointInTriangle:NU}=Eu,FU=(t,e,n,i)=>{const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:t.length,l=DU(t,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(HU(l))}s.sort((r,o)=>r.x-o.x);for(let r=0;r<s.length;r++)n=OU(s[r],n),n=Bl(n,n.next);return n},OU=(t,e)=>{const n=BU(t,e);if(!n)return e;const i=IU(n,t),s=Bl(n,n.next);return Bl(i,i.next),e===n?s:e},BU=(t,e)=>{let n=e;const i=t.x,s=t.y;let r=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>r){if(r=f,f===i){if(s===n.y)return n;if(s===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===r)return o;const a=o,c=o.x,l=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=c&&i!==n.x&&NU(s<l?i:r,s,c,l,s<l?r:i,s,n.x,n.y)){const f=Math.abs(s-n.y)/(i-n.x);UU(n,t)&&(f<u||f===u&&(n.x>o.x||n.x===o.x&&zU(o,n)))&&(o=n,u=f)}n=n.next}while(n!==a);return o},zU=(t,e)=>Zd(t.prev,t,e.prev)<0&&Zd(e.next,t,t.next)<0,HU=t=>{let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n};var VU=FU;const GU=VU,{removeNode:$U,sortLinked:kU}=a0,{cureLocalIntersections:WU,filterPoints:pa,isValidDiagonal:XU,linkedPolygon:qU,splitPolygon:jU}=u0,{area:is,pointInTriangle:Nr}=Eu,YU=(t,e,n=2)=>{const i=e&&e.length,s=i?e[0]*n:t.length;let r=qU(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f;if(i&&(r=GU(t,e,r,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(let h=n;h<s;h+=n){const d=t[h],_=t[h+1];d<a&&(a=d),_<c&&(c=_),d>l&&(l=d),_>u&&(u=_)}f=Math.max(l-a,u-c),f=f!==0?1/f:0}return no(r,o,n,a,c,f),o},no=(t,e,n,i,s,r,o)=>{if(!t)return;!o&&r&&QU(t,i,s,r);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,r?KU(t,i,s,r):ZU(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),$U(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=WU(pa(t),e,n),no(t,e,n,i,s,r,2)):o===2&&JU(t,e,n,i,s,r):no(pa(t),e,n,i,s,r,1);break}}},ZU=t=>{const e=t.prev,n=t,i=t.next;if(is(e,n,i)>=0)return!1;let s=t.next.next;for(;s!==t.prev;){if(Nr(e.x,e.y,n.x,n.y,i.x,i.y,s.x,s.y)&&is(s.prev,s,s.next)>=0)return!1;s=s.next}return!0},KU=(t,e,n,i)=>{const s=t.prev,r=t,o=t.next;if(is(s,r,o)>=0)return!1;const a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,c=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,l=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,u=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,f=zl(a,c,e,n,i),h=zl(l,u,e,n,i);let d=t.prevZ,_=t.nextZ;for(;d&&d.z>=f&&_&&_.z<=h;){if(d!==t.prev&&d!==t.next&&Nr(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&is(d.prev,d,d.next)>=0||(d=d.prevZ,_!==t.prev&&_!==t.next&&Nr(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&is(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;d&&d.z>=f;){if(d!==t.prev&&d!==t.next&&Nr(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&is(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;_&&_.z<=h;){if(_!==t.prev&&_!==t.next&&Nr(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&is(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0},JU=(t,e,n,i,s,r)=>{let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&XU(o,a)){let c=jU(o,a);o=pa(o,o.next),c=pa(c,c.next),no(o,e,n,i,s,r),no(c,e,n,i,s,r);return}a=a.next}o=o.next}while(o!==t)},QU=(t,e,n,i)=>{let s=t;do s.z===null&&(s.z=zl(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,kU(s,r=>r.z)},zl=(t,e,n,i,s)=>(t=32767*(t-n)*s,e=32767*(e-i)*s,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1);var eI=YU;const{NEPS:rl}=et,tI=(t,e)=>Math.abs(t[0]-e[0])<=rl&&Math.abs(t[1]-e[1])<=rl&&Math.abs(t[2]-e[2])<=rl;var nI=tI;const iI=t=>{let e=0;for(let n=0;n<t.length;n++){const i=(n+1)%t.length;e+=t[n][0]*t[i][1],e-=t[i][0]*t[n][1]}return e/2};var f0=iI;const sI=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};var rI=sI;const oI=(t,e,n,i,s,r)=>{const a=1/(t*i-e*n);let c=s*i-e*r,l=-s*n+t*r;return c*=a,l*=a,[c,l]};var aI=oI,h0={area:f0,solve2Linear:aI};const cI=f0,lI=t=>cI(t.vertices);var uI=lI;const fI=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var hI=fI;const dI=hI,pI=t=>{const e=t.vertices.slice().reverse();return dI(e)};var mI=pI;const gI=uI,_I=mI,vI=(t,e)=>{if(t.length===0)return 0;const n=e.vertices;return n.length<3?0:(gI(e)<0&&(e=_I(e)),t.reduce((s,r)=>s+xI(r,n),0)===t.length?1:0)},xI=(t,e)=>{const n=e.length,i=t[0],s=t[1];let r=e[n-1],o=e[0],a=r[1]>s,c=0,l=0;for(let u=n+1;--u;){const f=o[1]>s;if(a!==f){const h=r[0]>i,d=o[0]>i;(h&&d||o[0]-(o[1]-s)*(r[0]-o[0])/(r[1]-o[1])>=i)&&(c=!c)}a=f,r=o,o=e[++l]}return c};var MI=vI,EI={arePointsInside:MI};const{area:yI}=h0,{toOutlines:SI}=Ct,{arePointsInside:bI}=EI,TI=t=>{const e=SI(t),n=[],i=[];e.forEach((o,a)=>{const c=yI(o);c<0?i.push(a):c>0&&n.push(a)});const s=[],r=[];return n.forEach((o,a)=>{const c=e[o];s[a]=[],i.forEach((l,u)=>{const f=e[l];bI([f[0]],{vertices:c})&&(s[a].push(l),r[u]||(r[u]=[]),r[u].push(a))})}),i.forEach((o,a)=>{if(r[a]&&r[a].length>1){const c=wI(r[a],l=>s[l].length);r[a].forEach((l,u)=>{u!==c&&(s[l]=s[l].filter(f=>f!==o))})}}),s.map((o,a)=>({solid:e[n[a]],holes:o.map(c=>e[c])}))},wI=(t,e)=>{let n,i;return t.forEach((s,r)=>{const o=e(s);(i===void 0||o<i)&&(n=r,i=o)}),n};var AI=TI;const RI=Ct,Kd=dr,CI=We,wt=Ge,PI=r0,LI=AI;let DI=class{constructor(e){this.plane=PI(e);const n=wt.orthogonal(wt.create(),this.plane),i=wt.cross(wt.create(),this.plane,n);this.v=wt.normalize(i,i),this.u=wt.cross(wt.create(),this.v,this.plane),this.basisMap=new Map;const s=e.edges.map(o=>o.map(a=>this.to2D(a))),r=RI.create(s);this.roots=LI(r)}to2D(e){const n=CI.fromValues(wt.dot(e,this.u),wt.dot(e,this.v));return this.basisMap.set(n,e),n}to3D(e){const n=this.basisMap.get(e);if(n)return n;{console.log("Warning: point not in original slice");const i=wt.scale(wt.create(),this.u,e[0]),s=wt.scale(wt.create(),this.v,e[1]),r=wt.scale(wt.create(),Kd,Kd[3]),o=wt.add(i,i,r);return wt.add(s,s,o)}}};var UI=DI;const II=ot,NI=eI,FI=UI,OI=t=>{const e=new FI(t),n=[];return e.roots.forEach(({solid:i,holes:s})=>{let r=i.length;const o=[];s.forEach((f,h)=>{o.push(r),r+=f.length});const a=[i,...s].flat(),c=a.flat(),l=f=>e.to3D(a[f]),u=NI(c,o);for(let f=0;f<u.length;f+=3){const h=u.slice(f,f+3).map(l);n.push(II.fromPointsAndPlane(h,e.plane))}}),n};var BI=OI;const Jd=Ge,zI=t=>t.reduce((e,n)=>e+=`[${Jd.toString(n[0])}, ${Jd.toString(n[1])}], `,""),HI=t=>`[${zI(t.edges)}]`;var VI=HI;const jo=Ge,GI=xs,$I=(t,e)=>{const n=e.edges.map(i=>[jo.transform(jo.create(),i[0],t),jo.transform(jo.create(),i[1],t)]);return GI(n)};var kI=$I,yu={calculatePlane:r0,clone:tU,create:xs,equals:sU,fromPoints:aU,fromSides:uU,isA:hU,reverse:mU,toEdges:_U,toPolygons:BI,toString:VI,transform:kI};const Qd=Ge,WI=xs,XI=t=>{if(!t.edges)return t;let e=t.edges;const n=new Map,i=new Map;e=e.filter(o=>!Qd.equals(o[0],o[1])),e.forEach(o=>{const a=o[0].toString(),c=o[1].toString();n.set(a,o[0]),n.set(c,o[1]),i.set(a,(i.get(a)||0)+1),i.set(c,(i.get(c)||0)-1)});const s=[],r=[];return i.forEach((o,a)=>{o<0&&s.push(a),o>0&&r.push(a)}),s.forEach(o=>{const a=n.get(o);let c=1/0,l;r.forEach(u=>{const f=n.get(u),h=Qd.distance(a,f);h<c&&(c=h,l=f)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${l} distance ${c}`),e=e.map(u=>u[0].toString()===o?[l,u[1]]:u[1].toString()===o?[u[0],l]:u)}),WI(e)};var qI=XI;const{EPS:ep}=et,zs=Ge,Yo=ot,tp=yu,Hl=(t,e)=>t===e?t:t<e?Hl(e,t):e===1?1:e===0?t:Hl(e,t%e),jI=(t,e)=>t*e/Hl(t,e),np=(t,e)=>{const n=t/e.length;if(n===1)return e;const i=zs.fromValues(n,n,n),s=[];return e.forEach(r=>{const o=zs.subtract(zs.create(),r[1],r[0]);zs.divide(o,o,i);let a=r[0];for(let c=1;c<=n;++c){const l=zs.add(zs.create(),a,o);s.push([a,l]),a=l}}),s},ip=ep*ep/2*Math.sin(Math.PI/3),YI=(t,e)=>{let n=tp.toEdges(t),i=tp.toEdges(e);if(n.length!==i.length){const r=jI(n.length,i.length);r!==n.length&&(n=np(r,n)),r!==i.length&&(i=np(r,i))}const s=[];return n.forEach((r,o)=>{const a=i[o],c=Yo.create([r[0],r[1],a[1]]),l=Yo.measureArea(c);Number.isFinite(l)&&l>ip&&s.push(c);const u=Yo.create([r[0],a[1],a[0]]),f=Yo.measureArea(u);Number.isFinite(f)&&f>ip&&s.push(u)}),s};var ZI=YI;const sp=dt,rp=Ct,KI=Pt,Vl=ot,Pi=yu,JI=qI,op=ZI,QI=(t,e,n)=>{let i=null;return rp.isA(n)&&(i=Pi.fromSides(rp.toSides(n))),Vl.isA(n)&&(i=Pi.fromPoints(Vl.toPoints(n))),t===0||t===1?Pi.transform(sp.fromTranslation(sp.create(),[0,0,t]),i):null},eN=(t,e)=>{const n={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:QI},{numberOfSlices:i,capStart:s,capEnd:r,close:o,repair:a,callback:c}=Object.assign({},n,t);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=JI(e));const l=i-1;let u=null,f=null,h=null,d=[];for(let _=0;_<i;_++){const g=c(_/l,_,e);if(g){if(!Pi.isA(g))throw new Error("the callback function must return slice objects");if(Pi.toEdges(g).length===0)throw new Error("the callback function must return slices with one or more edges");h&&(d=d.concat(op(h,g))),_===0&&(u=g),_===i-1&&(f=g),h=g}}if(r){const _=Pi.toPolygons(f);d=d.concat(_)}if(s){const _=Pi.toPolygons(u).map(Vl.invert);d=d.concat(_)}return!s&&!r&&o&&!Pi.equals(f,u)&&(d=d.concat(op(f,u))),KI.create(d)};var tN=eN;const{TAU:on}=et,wr=dt,{mirrorX:nN}=ZD,Zo=Ct,ol=yu,iN=tN,sN=(t,e)=>{const n={segments:12,startAngle:0,angle:on,overflow:"cap"};let{segments:i,startAngle:s,angle:r,overflow:o}=Object.assign({},n,t);if(i<3)throw new Error("segments must be greater then 3");s=Math.abs(s)>on?s%on:s,r=Math.abs(r)>on?r%on:r;let a=s+r;if(a=Math.abs(a)>on?a%on:a,a<s){const S=s;s=a,a=S}let c=a-s;if(c<=0&&(c=on),Math.abs(c)<on){const S=on/i;i=Math.floor(Math.abs(c)/S),Math.abs(c)>i*S&&i++}let l=Zo.toSides(e);if(l.length===0)throw new Error("the given geometry cannot be empty");const u=l.filter(S=>S[0][0]<0),f=l.filter(S=>S[0][0]>=0);u.length>0&&f.length>0&&o==="cap"&&(u.length>f.length?(l=l.map(S=>{let E=S[0],x=S[1];return E=[Math.min(E[0],0),E[1]],x=[Math.min(x[0],0),x[1]],[E,x]}),e=Zo.create(l),e=nN(e)):f.length>=u.length&&(l=l.map(S=>{let E=S[0],x=S[1];return E=[Math.max(E[0],0),E[1]],x=[Math.max(x[0],0),x[1]],[E,x]}),e=Zo.create(l)));const d=c/i,_=Math.abs(c)<on,g=ol.fromSides(Zo.toSides(e));ol.reverse(g,g);const m=wr.create(),p=(S,E,x)=>{let M=d*E+s;return c===on&&E===i&&(M=s),wr.multiply(m,wr.fromZRotation(m,M),wr.fromXRotation(wr.create(),on/4)),ol.transform(m,x)};return t={numberOfSlices:i+1,capStart:_,capEnd:_,close:!_,callback:p},iN(t,g)};var rN=sN;const oN=vs,ap=dt,cp=Ct,lp=Pt,up=di,aN=(t,...e)=>{if(!Array.isArray(t))throw new Error("angles must be an array");if(e=oN(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=t[2],i=t[1],s=t[0],r=ap.fromTaitBryanRotation(ap.create(),n,i,s),o=e.map(a=>up.isA(a)?up.transform(r,a):cp.isA(a)?cp.transform(r,a):lp.isA(a)?lp.transform(r,a):a);return o.length===1?o[0]:o};var cN={rotate:aN};const lN=vs,fp=dt,hp=Ct,dp=Pt,pp=di,Ga=(t,...e)=>{if(!Array.isArray(t))throw new Error("offset must be an array");if(e=lN(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=fp.fromTranslation(fp.create(),t),i=e.map(s=>pp.isA(s)?pp.transform(n,s):hp.isA(s)?hp.transform(n,s):dp.isA(s)?dp.transform(n,s):s);return i.length===1?i[0]:i},uN=(t,...e)=>Ga([t,0,0],e),fN=(t,...e)=>Ga([0,t,0],e),hN=(t,...e)=>Ga([0,0,t],e);var ii={translate:Ga,translateX:uN,translateY:fN,translateZ:hN};const{TAU:dN}=et,pN=rN,{rotate:mN}=cN,{translate:gN}=ii,_N=Og,{isGT:al,isGTE:cl}=Et,vN=t=>{const e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:dN},{innerRadius:n,innerSegments:i,outerRadius:s,outerSegments:r,innerRotation:o,startAngle:a,outerRotation:c}=Object.assign({},e,t);if(!al(n,0))throw new Error("innerRadius must be greater than zero");if(!cl(i,3))throw new Error("innerSegments must be three or more");if(!al(s,0))throw new Error("outerRadius must be greater than zero");if(!cl(r,3))throw new Error("outerSegments must be three or more");if(!cl(a,0))throw new Error("startAngle must be positive");if(!al(c,0))throw new Error("outerRotation must be greater than zero");if(n>=s)throw new Error("inner circle is too large to rotate about the outer circle");let l=_N({radius:n,segments:i});return o!==0&&(l=mN([0,0,o],l)),l=gN([s,0],l),pN({startAngle:a,angle:c,segments:r},l)};var xN=vN;const{NEPS:or}=et,Ar=We,MN=Ct,{isNumberArray:EN}=Et,Gl=(t,e,n)=>Math.acos((t*t+e*e-n*n)/(2*t*e)),yN=(t,e,n)=>e>or?Math.sqrt(t*t+n*n-2*t*n*Math.cos(e)):Math.sqrt((t-n)*(t-n)+t*n*e*e*(1-e*e/12)),SN=t=>{if(Math.abs(t[0]+t[1]+t[2]-Math.PI)>or)throw new Error("AAA triangles require angles that sum to PI");const n=t[0],i=t[1],s=Math.PI-n-i,r=1,o=r/Math.sin(s)*Math.sin(n),a=r/Math.sin(s)*Math.sin(i);return pr(n,i,s,o,a,r)},bN=t=>{const e=t[0],n=t[1],i=Math.PI+or-e-n;if(i<or)throw new Error("AAS triangles require angles that sum to PI");const s=t[2],r=s/Math.sin(e)*Math.sin(n),o=s/Math.sin(e)*Math.sin(i);return pr(e,n,i,s,r,o)},TN=t=>{const e=t[0],n=t[2],i=Math.PI+or-e-n;if(i<or)throw new Error("ASA triangles require angles that sum to PI");const s=t[1],r=s/Math.sin(i)*Math.sin(e),o=s/Math.sin(i)*Math.sin(n);return pr(e,n,i,r,o,s)},wN=t=>{const e=t[0],n=t[1],i=t[2],s=yN(e,n,i),r=Gl(s,e,i),o=Math.PI-r-n;return pr(r,n,o,i,s,e)},AN=t=>{const e=t[0],n=t[1],i=t[2],s=Math.asin(n*Math.sin(i)/e),r=Math.PI-s-i,o=e/Math.sin(i)*Math.sin(r);return pr(s,r,i,n,o,e)},RN=t=>{const e=t[1],n=t[2],i=t[0];if(e+n<=i||n+i<=e||i+e<=n)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const s=Gl(n,i,e),r=Gl(i,e,n),o=Math.PI-s-r;return pr(s,r,o,e,n,i)},pr=(t,e,n,i,s,r)=>{const o=Ar.fromValues(0,0),a=Ar.fromValues(r,0),c=Ar.fromValues(i,0);return Ar.add(c,Ar.rotate(c,c,[0,0],Math.PI-e),a),MN.fromPoints([o,a,c])},CN=t=>{const e={type:"SSS",values:[1,1,1]};let{type:n,values:i}=Object.assign({},e,t);if(typeof n!="string")throw new Error("triangle type must be a string");if(n=n.toUpperCase(),!((n[0]==="A"||n[0]==="S")&&(n[1]==="A"||n[1]==="S")&&(n[2]==="A"||n[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!EN(i,3))throw new Error("triangle values must contain three values");if(!i.every(s=>s>0))throw new Error("triangle values must be greater than zero");switch(n){case"AAA":return SN(i);case"AAS":return bN(i);case"ASA":return TN(i);case"SAS":return wN(i);case"SSA":return AN(i);case"SSS":return RN(i);default:throw new Error("invalid triangle type, try again")}};var PN=CN,bi={arc:YR,circle:Og,cube:q3,cuboid:xu,cylinder:e0,cylinderElliptic:Qg,ellipse:Fg,ellipsoid:t0,geodesicSphere:fD,line:pD,polygon:gD,polyhedron:n0,rectangle:Mu,roundedCuboid:SD,roundedCylinder:CD,roundedRectangle:DD,sphere:FD,square:HD,star:XD,torus:xN,triangle:PN};function LN({width:t,depth:e,safety:n=0,bottomHeight:i=15,topHeight:s=25,borderThickness:r=2.5}){const o=r*2,a=t+n,c=e+n,l=-i/2,u=ii.translate([0,c/2+r/2,l],bi.cuboid({size:[a+o,r,i]})),f=ii.translate([0,-c/2-r/2,l],bi.cuboid({size:[a+o,r,i]})),h=ii.translate([a/2+r/2,0,l],bi.cuboid({size:[r,c+o,i]})),d=ii.translate([-a/2-r/2,0,l],bi.cuboid({size:[r,c+o,i]})),_=s/2,g=a-r/2,m=c-r/2,p=ii.translate([0,m/2+r/2,_],bi.cuboid({size:[g+o,r,s]})),S=ii.translate([0,-m/2-r/2,_],bi.cuboid({size:[g+o,r,s]})),E=ii.translate([g/2+r/2,0,_],bi.cuboid({size:[r,m+o,s]})),x=ii.translate([-g/2-r/2,0,_],bi.cuboid({size:[r,m+o,s]}));return[u,f,h,d,p,S,E,x]}var d0={geom2:Ct,geom3:Pt,path2:di,poly3:ot};const DN=()=>[0,1,0];var Su=DN;const UN=Su,IN=t=>{const e=UN();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var NN=IN;const ll=We,FN=t=>{const e=ll.normal(ll.create(),t);return ll.negate(e,e),e};var bu=FN;const mp=We,ON=t=>mp.scale(mp.create(),t,t[2]);var $a=ON;const Rr=We,BN=bu,zN=$a,HN=(t,e)=>{const n=zN(t),i=BN(t),s=Rr.subtract(Rr.create(),e,n),r=Rr.dot(s,i);return Rr.scale(s,i,r),Rr.add(s,s,n),s};var VN=HN;const GN=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var p0=GN;const $N=We,kN=(t,e)=>{let n=$N.dot(e,t);return n=Math.abs(n-t[2]),n};var WN=kN;const XN=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var qN=XN;const Cr=We,jN=(t,e,n)=>{const i=Cr.subtract(Cr.create(),n,e);Cr.normal(i,i),Cr.normalize(i,i);const s=Cr.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};var m0=jN;const YN=Su,ZN=(t,e,n)=>{const i=YN();return i[0]=t,i[1]=e,i[2]=n,i};var g0=ZN;const KN=We,{solve2Linear:JN}=h0,QN=(t,e)=>{const n=JN(t[0],t[1],e[0],e[1],t[2],e[2]);return KN.clone(n)};var eF=QN;const gp=We,tF=p0,nF=g0,iF=(t,e)=>{const n=gp.negate(gp.create(),e),i=-e[2];return tF(t,nF(n[0],n[1],i))};var sF=iF;const rF=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;var oF=rF;const _p=We,aF=m0,cF=$a,lF=bu,uF=(t,e,n)=>{const i=cF(e),s=lF(e);return _p.transform(i,i,n),_p.transform(s,s,n),aF(t,i,s)};var fF=uF;const hF=$a,dF=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=hF(t)[0]),n};var pF=dF,mF={clone:NN,closestPoint:VN,copy:p0,create:Su,direction:bu,distanceToPoint:WN,equals:qN,fromPoints:m0,fromValues:g0,intersectPointOfLines:eF,origin:$a,reverse:sF,toString:oF,transform:fF,xAtY:pF};const gF=vs,Hn=We,Pr=Ge,_0=Ct,v0=Pt,x0=di,vp=ot,ar=new WeakMap,_F=t=>{let e=ar.get(t);if(e)return e;const n=x0.toPoints(t);let i;n.length===0?i=Hn.create():i=Hn.clone(n[0]);let s=Hn.clone(i);return n.forEach(r=>{Hn.min(i,i,r),Hn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],ar.set(t,e),e},vF=t=>{let e=ar.get(t);if(e)return e;const n=_0.toPoints(t);let i;n.length===0?i=Hn.create():i=Hn.clone(n[0]);let s=Hn.clone(i);return n.forEach(r=>{Hn.min(i,i,r),Hn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],ar.set(t,e),e},xF=t=>{let e=ar.get(t);if(e)return e;const n=v0.toPolygons(t);let i=Pr.create();if(n.length>0){const r=vp.toPoints(n[0]);Pr.copy(i,r[0])}let s=Pr.clone(i);return n.forEach(r=>{vp.toPoints(r).forEach(o=>{Pr.min(i,i,o),Pr.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],ar.set(t,e),e},MF=(...t)=>{if(t=gF(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>x0.isA(n)?_F(n):_0.isA(n)?vF(n):v0.isA(n)?xF(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};var EF=MF;const{EPS:yF}=et,SF=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return yF*n/e};var bF=SF;const TF=vs,{geom2:wF,geom3:AF,path2:RF}=d0,Tu=bF,wu=EF,CF=t=>Tu(wu(t),2),PF=t=>Tu(wu(t),2),LF=t=>Tu(wu(t),3),DF=(...t)=>{if(t=TF(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>RF.isA(n)?CF(n):wF.isA(n)?PF(n):AF.isA(n)?LF(n):0);return e.length===1?e[0]:e};var M0=DF;const UF=(t,e)=>t-e;var IF=UF;const NF=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){const r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};var FF=NF,OF={fnNumberSort:IF,insertSorted:FF};const xp=dt,BF=We,_t=Ge,E0=function(t,e){arguments.length<2&&(e=_t.orthogonal(_t.create(),t)),this.v=_t.normalize(_t.create(),_t.cross(_t.create(),t,e)),this.u=_t.cross(_t.create(),this.v,t),this.plane=t,this.planeorigin=_t.scale(_t.create(),t,t[3])};E0.prototype={getProjectionMatrix:function(){return xp.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const t=_t.scale(_t.create(),this.plane,this.plane[3]);return xp.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return BF.fromValues(_t.dot(t,this.u),_t.dot(t,this.v))},to3D:function(t){const e=_t.scale(_t.create(),this.u,t[0]),n=_t.scale(_t.create(),this.v,t[1]),i=_t.add(e,e,this.planeorigin);return _t.add(n,n,i)}};var zF=E0;const{EPS:ti}=et,Ti=mF,bn=We,HF=zF,Hs=rI,{insertSorted:VF,fnNumberSort:GF}=OF,Mp=ot,$F=t=>{if(t.length<2)return t;const e=[],n=t.length,i=Mp.plane(t[0]),s=new HF(i),r=[],o=[],a=new Map,c=new Map,l=new Map,u=10/ti;for(let _=0;_<n;_++){const g=t[_];let m=[],p=g.vertices.length,S=-1;if(p>0){let E,x;for(let M=0;M<p;M++){let b=s.to2D(g.vertices[M]);const w=Math.floor(b[1]*u);let D;l.has(w)?D=l.get(w):l.has(w+1)?D=l.get(w+1):l.has(w-1)?D=l.get(w-1):(D=b[1],l.set(w,b[1])),b=bn.fromValues(b[0],D),m.push(b);const v=b[1];(M===0||v<E)&&(E=v,S=M),(M===0||v>x)&&(x=v);let T=c.get(v);T||(T={},c.set(v,T)),T[_]=!0}if(E>=x)m=[],p=0,S=-1;else{let M=a.get(E);M||(M=[],a.set(E,M)),M.push(_)}}m.reverse(),S=p-S-1,r.push(m),o.push(S)}const f=[];c.forEach((_,g)=>f.push(g)),f.sort(GF);let h=[],d=[];for(let _=0;_<f.length;_++){const g=[],m=f[_],p=c.get(m);for(let E=0;E<h.length;++E){const x=h[E],M=x.polygonindex;if(p[M]){const b=r[M],w=b.length;let D=x.leftvertexindex,v=x.rightvertexindex;for(;;){let N=D+1;if(N>=w&&(N=0),b[N][1]!==m)break;D=N}let T=v-1;if(T<0&&(T=w-1),b[T][1]===m&&(v=T),D!==x.leftvertexindex&&D===v)h.splice(E,1),--E;else{x.leftvertexindex=D,x.rightvertexindex=v,x.topleft=b[D],x.topright=b[v];let N=D+1;N>=w&&(N=0),x.bottomleft=b[N];let U=v-1;U<0&&(U=w-1),x.bottomright=b[U]}}}let S;if(_>=f.length-1)h=[],S=null;else{S=Number(f[_+1]);const E=.5*(m+S),x=a.get(m);for(const M in x){const b=x[M],w=r[b],D=w.length,v=o[b];let T=v;for(;;){let B=T+1;if(B>=D&&(B=0),w[B][1]!==m||B===v)break;T=B}let N=v;for(;;){let B=N-1;if(B<0&&(B=D-1),w[B][1]!==m||B===T)break;N=B}let U=T+1;U>=D&&(U=0);let I=N-1;I<0&&(I=D-1);const F={polygonindex:b,leftvertexindex:T,rightvertexindex:N,topleft:w[T],topright:w[N],bottomleft:w[U],bottomright:w[I]};VF(h,F,(B,V)=>{const $=Hs(B.topleft,B.bottomleft,E),k=Hs(V.topleft,V.bottomleft,E);return $>k?1:$<k?-1:0})}}for(const E in h){const x=h[E];let M=Hs(x.topleft,x.bottomleft,m);const b=bn.fromValues(M,m);M=Hs(x.topright,x.bottomright,m);const w=bn.fromValues(M,m);M=Hs(x.topleft,x.bottomleft,S);const D=bn.fromValues(M,S);M=Hs(x.topright,x.bottomright,S);const v=bn.fromValues(M,S),T={topleft:b,topright:w,bottomleft:D,bottomright:v,leftline:Ti.fromPoints(Ti.create(),b,D),rightline:Ti.fromPoints(Ti.create(),v,w)};if(g.length>0){const N=g[g.length-1],U=bn.distance(T.topleft,N.topright),I=bn.distance(T.bottomleft,N.bottomright);U<ti&&I<ti&&(T.topleft=N.topleft,T.leftline=N.leftline,T.bottomleft=N.bottomleft,g.splice(g.length-1,1))}g.push(T)}if(_>0){const E=new Set,x=new Set;for(let M=0;M<g.length;M++){const b=g[M];for(let w=0;w<d.length;w++)if(!x.has(w)){const D=d[w];if(bn.distance(D.bottomleft,b.topleft)<ti&&bn.distance(D.bottomright,b.topright)<ti){x.add(w);const v=Ti.direction(b.leftline),T=Ti.direction(D.leftline),N=v[0]-T[0],U=Ti.direction(b.rightline),I=Ti.direction(D.rightline),F=U[0]-I[0],B=Math.abs(N)<ti,V=Math.abs(F)<ti,$=B||N>=0,k=V||F>=0;$&&k&&(b.outpolygon=D.outpolygon,b.leftlinecontinues=B,b.rightlinecontinues=V,E.add(w));break}}}for(let M=0;M<d.length;M++)if(!E.has(M)){const b=d[M];b.outpolygon.rightpoints.push(b.bottomright),bn.distance(b.bottomright,b.bottomleft)>ti&&b.outpolygon.leftpoints.push(b.bottomleft),b.outpolygon.leftpoints.reverse();const D=b.outpolygon.rightpoints.concat(b.outpolygon.leftpoints).map(T=>s.to3D(T)),v=Mp.fromPointsAndPlane(D,i);v.vertices.length&&e.push(v)}}for(let E=0;E<g.length;E++){const x=g[E];x.outpolygon?(x.leftlinecontinues||x.outpolygon.leftpoints.push(x.topleft),x.rightlinecontinues||x.outpolygon.rightpoints.push(x.topright)):(x.outpolygon={leftpoints:[],rightpoints:[]},x.outpolygon.leftpoints.push(x.topleft),bn.distance(x.topleft,x.topright)>ti&&x.outpolygon.rightpoints.push(x.topright))}d=g}return e};var kF=$F;const Ep=Pt,WF=ot,{NEPS:XF}=et,qF=kF,jF=t=>{if(t.isRetesselated)return t;const e=Ep.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:WF.plane(r),index:o})),n=YF(e),i=[];n.forEach(r=>{if(Array.isArray(r)){const o=qF(r);i.push(...o)}else i.push(r)});const s=Ep.create(i);return s.isRetesselated=!0,s},YF=t=>{let e=[t];const n=[];for(let s=3;s>=0;s--){const r=[],o=s===3?15e-9:XF;e.forEach(a=>{a.sort(ZF(s,o));let c=0;for(let l=1;l<a.length;l++)a[l].plane[s]-a[c].plane[s]>o&&(l-c===1?n.push(a[c]):r.push(a.slice(c,l)),c=l);a.length-c===1?n.push(a[c]):r.push(a.slice(c))}),e=r}const i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},ZF=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;var KF=jF;const ul=Ge,y0=ot,JF=(t,e)=>{const n=Math.abs(y0.measureArea(e));return Number.isFinite(n)&&n>t},QF=(t,e)=>{let n=e.map(s=>{const r=s.vertices.map(c=>ul.snap(ul.create(),c,t)),o=[];for(let c=0;c<r.length;c++){const l=(c+1)%r.length;ul.equals(r[c],r[l])||o.push(r[c])}const a=y0.create(o);return s.color&&(a.color=s.color),a});const i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>JF(i,s)),n};var S0=QF;const eO=nI,Ws=Ge,ma=ot,tO=t=>{const e=ma.toPoints(t),n=[];for(let i=0;i<e.length;i++){const s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){const s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},nO=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.set(n,e)},fl=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.delete(n)},iO=(t,e)=>{const n=`${e.v2}:${e.v1}`;return t.get(n)},sO=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2;const o=yp(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;const a=yp(i,s,r,n);return[o,a]},rO=Ws.create(),oO=Ws.create(),yp=(t,e,n,i)=>{const s=Ws.subtract(rO,e,t),r=Ws.subtract(oO,n,e);return Ws.cross(s,s,r),Ws.dot(s,i)},aO=t=>{let e;const n=[];for(;t.next;){const i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=ma.create(n)),e},cO=t=>{if(t.length<2)return t;const e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){const r=n.shift(),o=tO(r);for(let a=0;a<o.length;a++){const c=o[a],l=iO(i,c);if(l){const u=sO(c,l,e);if(u[0]>=0&&u[1]>=0){const f=l.next,h=c.next;c.prev.next=l.next,c.next.prev=l.prev,l.prev.next=c.next,l.next.prev=c.prev,c.v1=null,c.v2=null,c.next=null,c.prev=null,fl(i,l),l.v1=null,l.v2=null,l.next=null,l.prev=null;const d=(_,g,m)=>{const p={v1:m.v1,v2:g.v2,next:g.next,prev:m.prev};m.prev.next=p,g.next.prev=p,fl(_,g),g.v1=null,g.v2=null,g.next=null,g.prev=null,fl(_,m),m.v1=null,m.v2=null,m.next=null,m.prev=null};u[0]===0&&d(i,f,f.prev),u[1]===0&&d(i,h,h.prev)}}else c.next&&nO(i,c)}}const s=[];return i.forEach(r=>{const o=aO(r);o&&s.push(o)}),i.clear(),s},lO=(t,e)=>Math.abs(t[3]-e[3])<15e-8?eO(t,e):!1,uO=(t,e)=>{const n=[];e.forEach(s=>{const r=n.find(o=>lO(o[0],ma.plane(s)));r?r[1].push(s):n.push([ma.plane(s),[s]])});let i=[];return n.forEach(s=>{const r=s[1],o=cO(r);i=i.concat(o)}),i};var fO=uO;const Sp=et,Fn=Ge,hO=ot,Gt=t=>`${t}`,bp=(t,e,n,i,s,r)=>{const o=Gt(i),a=Gt(s),c=`${o}/${a}`,l=`${a}/${o}`;if(t.has(l))return ia(t,e,n,s,i,null),null;const u={vertex0:i,vertex1:s,polygonindex:r};return t.has(c)?t.get(c).push(u):t.set(c,[u]),e.has(o)?e.get(o).push(c):e.set(o,[c]),n.has(a)?n.get(a).push(c):n.set(a,[c]),c},ia=(t,e,n,i,s,r)=>{const o=Gt(i),a=Gt(s),c=`${o}/${a}`;let l=-1;const u=t.get(c);for(let f=0;f<u.length;f++){const h=u[f];let d=Gt(h.vertex0);if(d===o&&(d=Gt(h.vertex1),d===a&&!(r!==null&&h.polygonindex!==r))){l=f;break}}u.splice(l,1),u.length===0&&t.delete(c),l=e.get(o).indexOf(c),e.get(o).splice(l,1),e.get(o).length===0&&e.delete(o),l=n.get(a).indexOf(c),n.get(a).splice(l,1),n.get(a).length===0&&n.delete(a)},dO=t=>{const e=new Map;for(let n=0;n<t.length;n++){const i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=Gt(r);for(let a=0;a<s;a++){let c=a+1;c===s&&(c=0);const l=i.vertices[c],u=Gt(l),f=`${o}/${u}`,h=`${u}/${o}`;if(e.has(h)){const d=e.get(h);d.splice(-1,1),d.length===0&&e.delete(h)}else{const d={vertex0:r,vertex1:l,polygonindex:n};e.has(f)?e.get(f).push(d):e.set(f,[d])}r=l,o=u}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){const n=new Map,i=new Map,s=new Map;for(const[o,a]of e)s.set(o,!0),a.forEach(c=>{const l=Gt(c.vertex0),u=Gt(c.vertex1);n.has(l)?n.get(l).push(o):n.set(l,[o]),i.has(u)?i.get(u).push(o):i.set(u,[o])});const r=t.slice(0);for(;e.size!==0;){for(const a of e.keys())s.set(a,!0);let o=!1;for(;;){const a=Array.from(s.keys());if(a.length===0)break;const c=a[0];let l=!0;if(e.has(c)){const f=e.get(c)[0];for(let h=0;h<2;h++){const d=h===0?f.vertex0:f.vertex1,_=h===0?f.vertex1:f.vertex0,g=Gt(d),m=Gt(_);let p=[];h===0?i.has(g)&&(p=i.get(g)):n.has(g)&&(p=n.get(g));for(let S=0;S<p.length;S++){const E=p[S],x=e.get(E)[0],M=h===0?x.vertex0:x.vertex1;if(h===0?x.vertex1:x.vertex0,Gt(M)===m){ia(e,n,i,d,_,null),ia(e,n,i,_,d,null),l=!1,h=2,o=!0;break}else{const w=d,D=_,v=M,T=Fn.subtract(Fn.create(),v,w),N=Fn.dot(Fn.subtract(Fn.create(),D,w),T)/Fn.dot(T,T);if(N>0&&N<1){const U=Fn.scale(Fn.create(),T,N);if(Fn.add(U,U,w),Fn.squaredDistance(U,D)<Sp.EPS*Sp.EPS){const F=x.polygonindex,B=r[F],V=Gt(x.vertex1);let $=-1;for(let ce=0;ce<B.vertices.length;ce++)if(Gt(B.vertices[ce])===V){$=ce;break}const k=B.vertices.slice(0);k.splice($,0,_);const le=hO.create(k);r[F]=le,ia(e,n,i,x.vertex0,x.vertex1,F);const ie=bp(e,n,i,x.vertex0,_,F),we=bp(e,n,i,_,x.vertex1,F);ie!==null&&s.set(ie,!0),we!==null&&s.set(we,!0),l=!1,h=2,o=!0;break}}}}}}l&&s.delete(c)}if(!o)break}t=r}return e.clear(),t};var pO=dO;const hl=Ge,dl=ot,mO=(t,e,n)=>{const i=e.vertices.length;if(i>3){if(i>4){const o=[0,0,0];e.vertices.forEach(a=>hl.add(o,o,a)),hl.snap(o,hl.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){const c=dl.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(c.color=e.color),n.push(c)}return}const s=dl.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=dl.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},gO=(t,e)=>{const n=[];return e.forEach(i=>{mO(t,i,n)}),n};var _O=gO;const vO=vs,xO=M0,MO=Ct,b0=Pt,EO=di,yO=S0,SO=fO,bO=pO,TO=_O,wO=(t,e)=>e,AO=(t,e)=>e,RO=(t,e)=>{const n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=xO(e);let a=b0.toPolygons(e);i&&(a=yO(o,a)),s&&(a=SO(o,a)),r&&(a=bO(a),a=TO(o,a));const c=Object.assign({},e);return c.polygons=a,c},CO=(t,...e)=>{if(e=vO(e),e.length===0)throw new Error("wrong number of arguments");const n=e.map(i=>{if(EO.isA(i))return wO(t,i);if(MO.isA(i))return AO(t,i);if(b0.isA(i))return RO(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};var PO=CO;const LO=vs,ss=We,$l=Ct,kl=Pt,Wl=di,Au=M0,DO=S0,UO=t=>{const e=Au(t),i=Wl.toPoints(t).map(s=>ss.snap(ss.create(),s,e));return Wl.create(i)},IO=t=>{const e=Au(t);let i=$l.toSides(t).map(s=>[ss.snap(ss.create(),s[0],e),ss.snap(ss.create(),s[1],e)]);return i=i.filter(s=>!ss.equals(s[0],s[1])),$l.create(i)},NO=t=>{const e=Au(t),n=kl.toPolygons(t),i=DO(e,n);return kl.create(i)},FO=(...t)=>{if(t=LO(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>Wl.isA(n)?UO(n):$l.isA(n)?IO(n):kl.isA(n)?NO(n):n);return e.length===1?e[0]:e};var OO=FO,BO={generalize:PO,snap:OO,retessellate:KF},Ru={geometries:d0,modifiers:BO};const T0=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(T0(n)):e.concat(n),[]);var zO=T0;const HO=t=>Array.isArray(t)?t:t==null?[]:[t];var VO=HO,GO={flatten:zO,toArray:VO};const{geometries:pl}=Ru,$O=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((m,p)=>{pl.geom3.toPolygons(m).forEach(E=>{const x=E.vertices.length,M=x>=3?x-2:0;r+=M,o+=1})});const a=new Uint8Array(80);for(let m=0;m<80;m++)a[m]=65;const c=new Uint32Array(1);c[0]=r;const l=new ArrayBuffer(50*r),u=new Int8Array(l),f=new ArrayBuffer(50),h=new Int8Array(f),d=new Float32Array(f,0,12),_=new Uint16Array(f,48,1);let g=0;return t.forEach(m=>{pl.geom3.toPolygons(m).forEach((S,E)=>{const x=S.vertices,M=x.length,b=pl.poly3.plane(S);for(let w=0;w<M-2;w++){d[0]=b[0],d[1]=b[1],d[2]=b[2];let D=3;for(let v=0;v<3;v++){const T=v+(v>0?w:0),N=x[T];d[D++]=N[0],d[D++]=N[1],d[D++]=N[2]}_[0]=0,u.set(h,g),g+=50}e.statusCallback&&e.statusCallback({progress:100*E/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,c.buffer,l]};var kO={serializeBinary:$O};const{geometries:w0}=Ru,WO=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=`solid JSCAD
${XO(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},XO=(t,e)=>{const n=[];return t.forEach((i,s)=>{n.push(qO(i)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},qO=(t,e)=>{const n=[];return w0.geom3.toPolygons(t).forEach((s,r)=>{n.push(jO(s))}),n.join(`
`)},A0=t=>`${t[0]} ${t[1]} ${t[2]}`,ml=t=>`vertex ${A0(t)}`,jO=t=>{const e=[];if(t.vertices.length>=3){const n=ml(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){const s=`facet normal ${A0(w0.poly3.plane(t))}
outer loop
${n}
${ml(t.vertices[i+1])}
${ml(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};var YO={serializeText:WO};const{geometries:ZO,modifiers:KO}=Ru,{flatten:JO,toArray:QO}=GO,{serializeBinary:eB}=kO,{serializeText:tB}=YO,nB="application/sla",iB=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=JO(e);let i=e.filter(s=>ZO.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=QO(KO.generalize({snap:!0,triangulate:!0},i)),t.binary?eB(i,t):tB(i,t)};var sB={mimeType:nB,serialize:iB};const rB={props:["width","depth","safety","bottomHeight","topHeight","borderThickness"],data(){return{stlData:null,currentWidth:0,currentDepth:0,currentSafety:0,currentBottomHeight:0,currentTopHeight:0,currentBorderThickness:0,tweenDuration:1e3}},computed:{targetDimensions(){return{width:this.width,depth:this.depth,safety:this.safety,bottomHeight:this.bottomHeight,topHeight:this.topHeight,borderThickness:this.borderThickness}}},watch:{targetDimensions:{handler(t,e){!e||e.width===t.width&&e.depth===t.depth&&e.safety===t.safety&&e.bottomHeight===t.bottomHeight&&e.topHeight===t.topHeight&&e.borderThickness===t.borderThickness||this.animateDimensionsTransition({width:this.currentWidth,depth:this.currentDepth,safety:this.currentSafety,bottomHeight:this.currentBottomHeight,topHeight:this.currentTopHeight,borderThickness:this.currentBorderThickness},t)},deep:!0}},created(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.mesh=null},mounted(){this.currentWidth=this.width,this.currentDepth=this.depth,this.currentSafety=this.safety,this.currentBottomHeight=this.bottomHeight,this.currentTopHeight=this.topHeight,this.currentBorderThickness=this.borderThickness,this.initScene(),this.createInitialMesh()},methods:{generateSTL(t,e,n,i,s,r){try{const o=LN({width:t,depth:e,safety:n,bottomHeight:i,topHeight:s,borderThickness:r});return sB.serialize({binary:!1},o).join(`
`)}catch(o){return console.error("Error generating geometry or STL:",o),null}},createInitialMesh(){const t=this.generateSTL(this.width,this.depth,this.safety,this.bottomHeight,this.topHeight,this.borderThickness);if(!t)return;this.stlData=t;const n=new Nh().parse(t),i=new Bb({color:30719});this.mesh=new ci(n,i),this.scene.add(this.mesh)},animateDimensionsTransition(t,e){const n=performance.now(),i=this.tweenDuration,s=new Nh,r=o=>{const a=o-n,c=Math.min(a/i,1),l=t.width+(e.width-t.width)*c,u=t.depth+(e.depth-t.depth)*c,f=t.safety+(e.safety-t.safety)*c,h=t.bottomHeight+(e.bottomHeight-t.bottomHeight)*c,d=t.topHeight+(e.topHeight-t.topHeight)*c,_=t.borderThickness+(e.borderThickness-t.borderThickness)*c,g=this.generateSTL(l,u,f,h,d,_);if(g){const m=s.parse(g);this.mesh&&(this.mesh.geometry.dispose(),this.mesh.geometry=m),this.stlData=g}c<1?requestAnimationFrame(r):(this.currentWidth=e.width,this.currentDepth=e.depth,this.currentSafety=e.safety,this.currentBottomHeight=e.bottomHeight,this.currentTopHeight=e.topHeight,this.currentBorderThickness=e.borderThickness)};requestAnimationFrame(r)},initScene(){this.scene=new Ob,this.camera=new gn(75,600/500,.1,1e3),this.camera.position.set(0,150,100),this.camera.lookAt(0,0,10),this.camera.up.set(0,0,1),this.renderer=new hg({canvas:this.$refs.canvas,antialias:!0}),this.renderer.setSize(600,500),this.renderer.setClearColor(15790320);const n=new Xb(4210752);this.scene.add(n);const i=new Wb(16777215,1);i.position.set(1,1,1).normalize(),this.scene.add(i),this.controls=new qb(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.8,this.controls.noZoom=!1,this.controls.noPan=!1,this.controls.staticMoving=!1,this.controls.dynamicDampingFactor=.05,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/2,this.animate()},animate(){requestAnimationFrame(this.animate),this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera)},downloadSTL(){if(!this.stlData)return;const t=new Blob([this.stlData],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`SynthArmor_cover_${this.width}x${this.depth}_safetyOffset${this.safety}_bottomHeight${this.bottomHeight}_topHeight${this.topHeight}_borderThickness${this.borderThickness}.stl`,e.click()}}},oB={class:"mt-6 flex flex-col items-center"},aB={ref:"canvas",class:"border border-gray-300 rounded-md w-full max-w-[600px]"};function cB(t,e,n,i,s,r){return rs(),os("div",oB,[Ye("canvas",aB,null,512),Ye("button",{onClick:e[0]||(e[0]=(...o)=>r.downloadSTL&&r.downloadSTL(...o)),class:"mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"}," Download STL ")])}const lB=Ca(rB,[["render",cB]]),uB={name:"FAQ",data(){return{faqs:[{question:"What is this?",answer:"This web app lets you quickly generate a custom 3D model for gear cover protection. Simply enter your equipment’s dimensions, adjust a safety offset if needed, and download an STL file ready for 3D printing.",open:!1},{question:"How does it work?",answer:`
            <ol class="list-decimal pl-6 mt-2">
              <li><strong>Enter Dimensions:</strong> Provide the exact width and depth of your machine.</li>
              <li><strong>Adjust for Fit:</strong> Use the "Safety Offset" to add a small buffer for a secure fit.</li>
              <li><strong>Automatic Preview:</strong> The model updates automatically as you modify the values.</li>
              <li><strong>Download STL:</strong> Click the download button to save your custom design for 3D printing.</li>
            </ol>
          `,open:!1},{question:"A Word of Caution",answer:"Please note that you are solely responsible for ensuring that the generated model fits your machine. Always double-check the dimensions before printing.",open:!1}]}},methods:{toggle(t){this.faqs[t].open=!this.faqs[t].open}}},fB={class:"w-full max-w-[600px] mt-8"},hB=["onClick"],dB={class:"text-lg font-medium text-gray-700"},pB={class:"px-6 py-4 bg-gray-50"},mB=["innerHTML"];function gB(t,e,n,i,s,r){return rs(),os("div",fB,[e[1]||(e[1]=Ye("h2",{class:"text-2xl font-bold mb-6 text-gray-800 text-center"},"FAQ",-1)),(rs(!0),os(Tn,null,z_(s.faqs,(o,a)=>(rs(),os("div",{key:a,class:"mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"},[Ye("button",{onClick:c=>r.toggle(a),class:"w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"},[Ye("span",dB,Dp(o.question),1),(rs(),os("svg",{class:Ea(["w-5 h-5 text-gray-500 transform transition-transform duration-300",{"rotate-180":o.open}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e[0]||(e[0]=[Ye("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],8,hB),Xt(zv,{name:"faq-collapse"},{default:nm(()=>[wi(Ye("div",pB,[Ye("div",{innerHTML:o.answer,class:"text-gray-600"},null,8,mB)],512),[[Wv,o.open]])]),_:2},1024)]))),128))])}const _B=Ca(uB,[["render",gB],["__scopeId","data-v-9b75b70f"]]),vB={name:"App",components:{InputForm:bx,ModelViewer:lB,FAQ:_B},data(){return{width:155,depth:105,safety:0,bottomHeight:15,topHeight:25,borderThickness:2.5}},methods:{updateDimensions({width:t,depth:e,safety:n,bottomHeight:i,topHeight:s,borderThickness:r}){this.width=t,this.depth=e,this.safety=n,this.bottomHeight=i,this.topHeight=s,this.borderThickness=r}}},xB={class:"max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6"},MB={class:"w-full max-w-[600px] bg-white rounded shadow p-6"};function EB(t,e,n,i,s,r){const o=ec("InputForm"),a=ec("ModelViewer"),c=ec("FAQ");return rs(),os("div",xB,[e[0]||(e[0]=Ye("div",{class:"mb-8 text-center"},[Ye("h1",{class:"text-4xl font-bold mb-2"},"SynthArmor"),Ye("p",{class:"text-gray-600"}," Modify the dimensions of a 3D model and download your custom design instantly. ")],-1)),Ye("div",MB,[Xt(o,{"initial-width":s.width,"initial-depth":s.depth,"initial-safety":s.safety,"initial-bottom-height":s.bottomHeight,"initial-top-height":s.topHeight,"initial-border-thickness":s.borderThickness,onUpdateDimensions:r.updateDimensions},null,8,["initial-width","initial-depth","initial-safety","initial-bottom-height","initial-top-height","initial-border-thickness","onUpdateDimensions"]),Xt(a,{width:s.width,depth:s.depth,safety:s.safety,"bottom-height":s.bottomHeight,"top-height":s.topHeight,"border-thickness":s.borderThickness},null,8,["width","depth","safety","bottom-height","top-height","border-thickness"])]),Xt(c)])}const yB=Ca(vB,[["render",EB]]);hx(yB).mount("#app");
