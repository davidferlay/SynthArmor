(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ot={},Zs=[],Jn=()=>{},F_=()=>!1,Ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Af=t=>t.startsWith("onUpdate:"),Nt=Object.assign,Rf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},O_=Object.prototype.hasOwnProperty,Qe=(t,e)=>O_.call(t,e),Ie=Array.isArray,Ks=t=>po(t)==="[object Map]",za=t=>po(t)==="[object Set]",gu=t=>po(t)==="[object Date]",Be=t=>typeof t=="function",_t=t=>typeof t=="string",Qn=t=>typeof t=="symbol",at=t=>t!==null&&typeof t=="object",Tm=t=>(at(t)||Be(t))&&Be(t.then)&&Be(t.catch),Am=Object.prototype.toString,po=t=>Am.call(t),B_=t=>po(t).slice(8,-1),Rm=t=>po(t)==="[object Object]",Cf=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qr=Tf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},H_=/-(\w)/g,An=Va(t=>t.replace(H_,(e,n)=>n?n.toUpperCase():"")),z_=/\B([A-Z])/g,Vi=Va(t=>t.replace(z_,"-$1").toLowerCase()),ka=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sl=Va(t=>t?`on${ka(t)}`:""),ds=(t,e)=>!Object.is(t,e),xa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},V_=t=>{const e=_t(t)?Number(t):NaN;return isNaN(e)?t:e};let _u;const Ga=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pf(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=_t(i)?W_(i):Pf(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(_t(t)||at(t))return t}const k_=/;(?![^(]*\))/g,G_=/:([^]+)/,$_=/\/\*[^]*?\*\//g;function W_(t){const e={};return t.replace($_,"").split(k_).forEach(n=>{if(n){const i=n.split(G_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $a(t){let e="";if(_t(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=$a(t[n]);i&&(e+=i+" ")}else if(at(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const X_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",q_=Tf(X_);function Pm(t){return!!t||t===""}function j_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Wa(t[i],e[i]);return n}function Wa(t,e){if(t===e)return!0;let n=gu(t),i=gu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Qn(t),i=Qn(e),n||i)return t===e;if(n=Ie(t),i=Ie(e),n||i)return n&&i?j_(t,e):!1;if(n=at(t),i=at(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wa(t[o],e[o]))return!1}}return String(t)===String(e)}function Lm(t,e){return t.findIndex(n=>Wa(n,e))}const Dm=t=>!!(t&&t.__v_isRef===!0),Um=t=>_t(t)?t:t==null?"":Ie(t)||at(t)&&(t.toString===Am||!Be(t.toString))?Dm(t)?Um(t.value):JSON.stringify(t,Im,2):String(t),Im=(t,e)=>Dm(e)?Im(t,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[bl(i,r)+" =>"]=s,n),{})}:za(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bl(n))}:Qn(e)?bl(e):at(e)&&!Ie(e)&&!Rm(e)?String(e):e,bl=(t,e="")=>{var n;return Qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pn;class Y_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=pn;try{return pn=this,e()}finally{pn=n}}}on(){pn=this}off(){pn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Z_(){return pn}let ct;const wl=new WeakSet;class Nm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pn&&pn.active&&pn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wl.has(this)&&(wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Om(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vu(this),Bm(this);const e=ct,n=Hn;ct=this,Hn=!0;try{return this.fn()}finally{Hm(this),ct=e,Hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uf(e);this.deps=this.depsTail=void 0,vu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jc(this)&&this.run()}get dirty(){return jc(this)}}let Fm=0,jr,Yr;function Om(t,e=!1){if(t.flags|=8,e){t.next=Yr,Yr=t;return}t.next=jr,jr=t}function Lf(){Fm++}function Df(){if(--Fm>0)return;if(Yr){let e=Yr;for(Yr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;jr;){let e=jr;for(jr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Bm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Uf(i),K_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function jc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===to))return;t.globalVersion=to;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!jc(t)){t.flags&=-3;return}const n=ct,i=Hn;ct=t,Hn=!0;try{Bm(t);const s=t.fn(t._value);(e.version===0||ds(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ct=n,Hn=i,Hm(t),t.flags&=-3}}function Uf(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Uf(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function K_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Hn=!0;const Vm=[];function ki(){Vm.push(Hn),Hn=!1}function Gi(){const t=Vm.pop();Hn=t===void 0?!0:t}function vu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ct;ct=void 0;try{e()}finally{ct=n}}}let to=0;class J_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class km{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ct||!Hn||ct===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ct)n=this.activeLink=new J_(ct,this),ct.deps?(n.prevDep=ct.depsTail,ct.depsTail.nextDep=n,ct.depsTail=n):ct.deps=ct.depsTail=n,Gm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ct.depsTail,n.nextDep=void 0,ct.depsTail.nextDep=n,ct.depsTail=n,ct.deps===n&&(ct.deps=i)}return n}trigger(e){this.version++,to++,this.notify(e)}notify(e){Lf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Df()}}}function Gm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Gm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yc=new WeakMap,ps=Symbol(""),Zc=Symbol(""),no=Symbol("");function zt(t,e,n){if(Hn&&ct){let i=Yc.get(t);i||Yc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new km),s.map=i,s.key=n),s.track()}}function gi(t,e,n,i,s,r){const o=Yc.get(t);if(!o){to++;return}const a=l=>{l&&l.trigger()};if(Lf(),e==="clear")o.forEach(a);else{const l=Ie(t),c=l&&Cf(n);if(l&&n==="length"){const f=Number(i);o.forEach((u,h)=>{(h==="length"||h===no||!Qn(h)&&h>=f)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(no)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ps)),Ks(t)&&a(o.get(Zc)));break;case"delete":l||(a(o.get(ps)),Ks(t)&&a(o.get(Zc)));break;case"set":Ks(t)&&a(o.get(ps));break}}Df()}function Ss(t){const e=tt(t);return e===t?e:(zt(e,"iterate",no),zn(t)?e:e.map(Qt))}function Xa(t){return zt(t=tt(t),"iterate",no),t}const Q_={__proto__:null,[Symbol.iterator](){return Tl(this,Symbol.iterator,Qt)},concat(...t){return Ss(this).concat(...t.map(e=>Ie(e)?Ss(e):e))},entries(){return Tl(this,"entries",t=>(t[1]=Qt(t[1]),t))},every(t,e){return ti(this,"every",t,e,void 0,arguments)},filter(t,e){return ti(this,"filter",t,e,n=>n.map(Qt),arguments)},find(t,e){return ti(this,"find",t,e,Qt,arguments)},findIndex(t,e){return ti(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ti(this,"findLast",t,e,Qt,arguments)},findLastIndex(t,e){return ti(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ti(this,"forEach",t,e,void 0,arguments)},includes(...t){return Al(this,"includes",t)},indexOf(...t){return Al(this,"indexOf",t)},join(t){return Ss(this).join(t)},lastIndexOf(...t){return Al(this,"lastIndexOf",t)},map(t,e){return ti(this,"map",t,e,void 0,arguments)},pop(){return br(this,"pop")},push(...t){return br(this,"push",t)},reduce(t,...e){return xu(this,"reduce",t,e)},reduceRight(t,...e){return xu(this,"reduceRight",t,e)},shift(){return br(this,"shift")},some(t,e){return ti(this,"some",t,e,void 0,arguments)},splice(...t){return br(this,"splice",t)},toReversed(){return Ss(this).toReversed()},toSorted(t){return Ss(this).toSorted(t)},toSpliced(...t){return Ss(this).toSpliced(...t)},unshift(...t){return br(this,"unshift",t)},values(){return Tl(this,"values",Qt)}};function Tl(t,e,n){const i=Xa(t),s=i[e]();return i!==t&&!zn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const ev=Array.prototype;function ti(t,e,n,i,s,r){const o=Xa(t),a=o!==t&&!zn(t),l=o[e];if(l!==ev[e]){const u=l.apply(t,r);return a?Qt(u):u}let c=n;o!==t&&(a?c=function(u,h){return n.call(this,Qt(u),h,t)}:n.length>2&&(c=function(u,h){return n.call(this,u,h,t)}));const f=l.call(o,c,i);return a&&s?s(f):f}function xu(t,e,n,i){const s=Xa(t);let r=n;return s!==t&&(zn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Qt(a),l,t)}),s[e](r,...i)}function Al(t,e,n){const i=tt(t);zt(i,"iterate",no);const s=i[e](...n);return(s===-1||s===!1)&&Of(n[0])?(n[0]=tt(n[0]),i[e](...n)):s}function br(t,e,n=[]){ki(),Lf();const i=tt(t)[e].apply(t,n);return Df(),Gi(),i}const tv=Tf("__proto__,__v_isRef,__isVue"),$m=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qn));function nv(t){Qn(t)||(t=String(t));const e=tt(this);return zt(e,"has",t),e.hasOwnProperty(t)}class Wm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?hv:Ym:r?jm:qm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!s){let l;if(o&&(l=Q_[n]))return l;if(n==="hasOwnProperty")return nv}const a=Reflect.get(e,n,Kt(e)?e:i);return(Qn(n)?$m.has(n):tv(n))||(s||zt(e,"get",n),r)?a:Kt(a)?o&&Cf(n)?a:a.value:at(a)?s?Zm(a):Nf(a):a}}class Xm extends Wm{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ar(r);if(!zn(i)&&!ar(i)&&(r=tt(r),i=tt(i)),!Ie(e)&&Kt(r)&&!Kt(i))return l?!1:(r.value=i,!0)}const o=Ie(e)&&Cf(n)?Number(n)<e.length:Qe(e,n),a=Reflect.set(e,n,i,Kt(e)?e:s);return e===tt(s)&&(o?ds(i,r)&&gi(e,"set",n,i):gi(e,"add",n,i)),a}deleteProperty(e,n){const i=Qe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&gi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Qn(n)||!$m.has(n))&&zt(e,"has",n),i}ownKeys(e){return zt(e,"iterate",Ie(e)?"length":ps),Reflect.ownKeys(e)}}class iv extends Wm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const sv=new Xm,rv=new iv,ov=new Xm(!0);const Kc=t=>t,So=t=>Reflect.getPrototypeOf(t);function av(t,e,n){return function(...i){const s=this.__v_raw,r=tt(s),o=Ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),f=n?Kc:e?Jc:Qt;return!e&&zt(r,"iterate",l?Zc:ps),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function bo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lv(t,e){const n={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);t||(ds(s,a)&&zt(o,"get",s),zt(o,"get",a));const{has:l}=So(o),c=e?Kc:t?Jc:Qt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&zt(tt(s),"iterate",ps),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return t||(ds(s,a)&&zt(o,"has",s),zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?Kc:t?Jc:Qt;return!t&&zt(l,"iterate",ps),a.forEach((f,u)=>s.call(r,c(f),c(u),o))}};return Nt(n,t?{add:bo("add"),set:bo("set"),delete:bo("delete"),clear:bo("clear")}:{add(s){!e&&!zn(s)&&!ar(s)&&(s=tt(s));const r=tt(this);return So(r).has.call(r,s)||(r.add(s),gi(r,"add",s,s)),this},set(s,r){!e&&!zn(r)&&!ar(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=So(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const f=l.call(o,s);return o.set(s,r),c?ds(r,f)&&gi(o,"set",s,r):gi(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=So(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&gi(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&gi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=av(s,t,e)}),n}function If(t,e){const n=lv(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Qe(n,s)&&s in i?n:i,s,r)}const cv={get:If(!1,!1)},fv={get:If(!1,!0)},uv={get:If(!0,!1)};const qm=new WeakMap,jm=new WeakMap,Ym=new WeakMap,hv=new WeakMap;function dv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(t){return t.__v_skip||!Object.isExtensible(t)?0:dv(B_(t))}function Nf(t){return ar(t)?t:Ff(t,!1,sv,cv,qm)}function mv(t){return Ff(t,!1,ov,fv,jm)}function Zm(t){return Ff(t,!0,rv,uv,Ym)}function Ff(t,e,n,i,s){if(!at(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=pv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Js(t){return ar(t)?Js(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function zn(t){return!!(t&&t.__v_isShallow)}function Of(t){return t?!!t.__v_raw:!1}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function gv(t){return!Qe(t,"__v_skip")&&Object.isExtensible(t)&&Cm(t,"__v_skip",!0),t}const Qt=t=>at(t)?Nf(t):t,Jc=t=>at(t)?Zm(t):t;function Kt(t){return t?t.__v_isRef===!0:!1}function _v(t){return Kt(t)?t.value:t}const vv={get:(t,e,n)=>e==="__v_raw"?t:_v(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Kt(s)&&!Kt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Km(t){return Js(t)?t:new Proxy(t,vv)}class xv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new km(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return Om(this,!0),!0}get value(){const e=this.dep.track();return zm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yv(t,e,n=!1){let i,s;return Be(t)?i=t:(i=t.get,s=t.set),new xv(i,s,n)}const wo={},Ta=new WeakMap;let is;function Mv(t,e=!1,n=is){if(n){let i=Ta.get(n);i||Ta.set(n,i=[]),i.push(t)}}function Ev(t,e,n=ot){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>s?x:zn(x)||s===!1||s===0?_i(x,1):_i(x);let f,u,h,d,_=!1,g=!1;if(Kt(t)?(u=()=>t.value,_=zn(t)):Js(t)?(u=()=>c(t),_=!0):Ie(t)?(g=!0,_=t.some(x=>Js(x)||zn(x)),u=()=>t.map(x=>{if(Kt(x))return x.value;if(Js(x))return c(x);if(Be(x))return l?l(x,2):x()})):Be(t)?e?u=l?()=>l(t,2):t:u=()=>{if(h){ki();try{h()}finally{Gi()}}const x=is;is=f;try{return l?l(t,3,[d]):t(d)}finally{is=x}}:u=Jn,e&&s){const x=u,M=s===!0?1/0:s;u=()=>_i(x(),M)}const m=Z_(),p=()=>{f.stop(),m&&m.active&&Rf(m.effects,f)};if(r&&e){const x=e;e=(...M)=>{x(...M),p()}}let S=g?new Array(t.length).fill(wo):wo;const y=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(e){const M=f.run();if(s||_||(g?M.some((E,T)=>ds(E,S[T])):ds(M,S))){h&&h();const E=is;is=f;try{const T=[M,S===wo?void 0:g&&S[0]===wo?[]:S,d];l?l(e,3,T):e(...T),S=M}finally{is=E}}}else f.run()};return a&&a(y),f=new Nm(u),f.scheduler=o?()=>o(y,!1):y,d=x=>Mv(x,!1,f),h=f.onStop=()=>{const x=Ta.get(f);if(x){if(l)l(x,4);else for(const M of x)M();Ta.delete(f)}},e?i?y(!0):S=f.run():o?o(y.bind(null,!0),!0):f.run(),p.pause=f.pause.bind(f),p.resume=f.resume.bind(f),p.stop=p,p}function _i(t,e=1/0,n){if(e<=0||!at(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Kt(t))_i(t.value,e,n);else if(Ie(t))for(let i=0;i<t.length;i++)_i(t[i],e,n);else if(za(t)||Ks(t))t.forEach(i=>{_i(i,e,n)});else if(Rm(t)){for(const i in t)_i(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&_i(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mo(t,e,n,i){try{return i?t(...i):t()}catch(s){qa(s,e,n)}}function Vn(t,e,n,i){if(Be(t)){const s=mo(t,e,n,i);return s&&Tm(s)&&s.catch(r=>{qa(r,e,n)}),s}if(Ie(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Vn(t[r],e,n,i));return s}}function qa(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,l,c)===!1)return}a=a.parent}if(r){ki(),mo(r,null,10,[t,l,c]),Gi();return}}Sv(t,n,s,i,o)}function Sv(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Yt=[];let jn=-1;const Qs=[];let Ii=null,Xs=0;const Jm=Promise.resolve();let Aa=null;function bv(t){const e=Aa||Jm;return t?e.then(this?t.bind(this):t):e}function wv(t){let e=jn+1,n=Yt.length;for(;e<n;){const i=e+n>>>1,s=Yt[i],r=io(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Bf(t){if(!(t.flags&1)){const e=io(t),n=Yt[Yt.length-1];!n||!(t.flags&2)&&e>=io(n)?Yt.push(t):Yt.splice(wv(e),0,t),t.flags|=1,Qm()}}function Qm(){Aa||(Aa=Jm.then(tg))}function Tv(t){Ie(t)?Qs.push(...t):Ii&&t.id===-1?Ii.splice(Xs+1,0,t):t.flags&1||(Qs.push(t),t.flags|=1),Qm()}function yu(t,e,n=jn+1){for(;n<Yt.length;n++){const i=Yt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Yt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function eg(t){if(Qs.length){const e=[...new Set(Qs)].sort((n,i)=>io(n)-io(i));if(Qs.length=0,Ii){Ii.push(...e);return}for(Ii=e,Xs=0;Xs<Ii.length;Xs++){const n=Ii[Xs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ii=null,Xs=0}}const io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tg(t){try{for(jn=0;jn<Yt.length;jn++){const e=Yt[jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jn<Yt.length;jn++){const e=Yt[jn];e&&(e.flags&=-2)}jn=-1,Yt.length=0,eg(),Aa=null,(Yt.length||Qs.length)&&tg()}}let sn=null,ng=null;function Ra(t){const e=sn;return sn=t,ng=t&&t.type.__scopeId||null,e}function ig(t,e=sn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Lu(-1);const r=Ra(e);let o;try{o=t(...s)}finally{Ra(r),i._d&&Lu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Je(t,e){if(sn===null)return t;const n=Ja(sn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ot]=e[s];r&&(Be(r)&&(r={mounted:r,updated:r}),r.deep&&_i(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ji(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ki(),Vn(l,n,8,[t.el,a,t,e]),Gi())}}const Av=Symbol("_vte"),sg=t=>t.__isTeleport,Ni=Symbol("_leaveCb"),To=Symbol("_enterCb");function Rv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hg(()=>{t.isMounted=!0}),dg(()=>{t.isUnmounting=!0}),t}const Mn=[Function,Array],rg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},og=t=>{const e=t.subTree;return e.component?og(e.component):e},Cv={name:"BaseTransition",props:rg,setup(t,{slots:e}){const n=Rx(),i=Rv();return()=>{const s=e.default&&cg(e.default(),!0);if(!s||!s.length)return;const r=ag(s),o=tt(t),{mode:a}=o;if(i.isLeaving)return Rl(r);const l=Mu(r);if(!l)return Rl(r);let c=Qc(l,o,i,n,u=>c=u);l.type!==en&&so(l,c);let f=n.subTree&&Mu(n.subTree);if(f&&f.type!==en&&!os(l,f)&&og(n).type!==en){let u=Qc(f,o,i,n);if(so(f,u),a==="out-in"&&l.type!==en)return i.isLeaving=!0,u.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete u.afterLeave,f=void 0},Rl(r);a==="in-out"&&l.type!==en?u.delayLeave=(h,d,_)=>{const g=lg(i,f);g[String(f.key)]=f,h[Ni]=()=>{d(),h[Ni]=void 0,delete c.delayedLeave,f=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return r}}};function ag(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==en){e=n;break}}return e}const Pv=Cv;function lg(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Qc(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:S,onAppearCancelled:y}=e,x=String(t.key),M=lg(n,t),E=(v,w)=>{v&&Vn(v,i,9,w)},T=(v,w)=>{const N=w[1];E(v,w),Ie(v)?v.every(U=>U.length<=1)&&N():v.length<=1&&N()},L={mode:o,persisted:a,beforeEnter(v){let w=l;if(!n.isMounted)if(r)w=m||l;else return;v[Ni]&&v[Ni](!0);const N=M[x];N&&os(t,N)&&N.el[Ni]&&N.el[Ni](),E(w,[v])},enter(v){let w=c,N=f,U=u;if(!n.isMounted)if(r)w=p||c,N=S||f,U=y||u;else return;let I=!1;const F=v[To]=B=>{I||(I=!0,B?E(U,[v]):E(N,[v]),L.delayedLeave&&L.delayedLeave(),v[To]=void 0)};w?T(w,[v,F]):F()},leave(v,w){const N=String(t.key);if(v[To]&&v[To](!0),n.isUnmounting)return w();E(h,[v]);let U=!1;const I=v[Ni]=F=>{U||(U=!0,w(),F?E(g,[v]):E(_,[v]),v[Ni]=void 0,M[N]===t&&delete M[N])};M[N]=t,d?T(d,[v,I]):I()},clone(v){const w=Qc(v,e,n,i,s);return s&&s(w),w}};return L}function Rl(t){if(ja(t))return t=Hi(t),t.children=null,t}function Mu(t){if(!ja(t))return sg(t.type)&&t.children?ag(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Be(n.default))return n.default()}}function so(t,e){t.shapeFlag&6&&t.component?(t.transition=e,so(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cg(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Fn?(o.patchFlag&128&&s++,i=i.concat(cg(o.children,e,a))):(e||o.type!==en)&&i.push(a!=null?Hi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function fg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ca(t,e,n,i,s=!1){if(Ie(t)){t.forEach((_,g)=>Ca(_,e&&(Ie(e)?e[g]:e),n,i,s));return}if(Zr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ca(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ja(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,f=a.refs===ot?a.refs={}:a.refs,u=a.setupState,h=tt(u),d=u===ot?()=>!1:_=>Qe(h,_);if(c!=null&&c!==l&&(_t(c)?(f[c]=null,d(c)&&(u[c]=null)):Kt(c)&&(c.value=null)),Be(l))mo(l,a,12,[o,f]);else{const _=_t(l),g=Kt(l);if(_||g){const m=()=>{if(t.f){const p=_?d(l)?u[l]:f[l]:l.value;s?Ie(p)&&Rf(p,r):Ie(p)?p.includes(r)||p.push(r):_?(f[l]=[r],d(l)&&(u[l]=f[l])):(l.value=[r],t.k&&(f[t.k]=l.value))}else _?(f[l]=o,d(l)&&(u[l]=o)):g&&(l.value=o,t.k&&(f[t.k]=o))};o?(m.id=-1,dn(m,n)):m()}}}Ga().requestIdleCallback;Ga().cancelIdleCallback;const Zr=t=>!!t.type.__asyncLoader,ja=t=>t.type.__isKeepAlive;function Lv(t,e){ug(t,"a",e)}function Dv(t,e){ug(t,"da",e)}function ug(t,e,n=It){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ya(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ja(s.parent.vnode)&&Uv(i,e,n,s),s=s.parent}}function Uv(t,e,n,i){const s=Ya(e,t,i,!0);pg(()=>{Rf(i[e],s)},n)}function Ya(t,e,n=It,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ki();const a=go(n),l=Vn(e,n,t,o);return a(),Gi(),l});return i?s.unshift(r):s.push(r),r}}const Mi=t=>(e,n=It)=>{(!oo||t==="sp")&&Ya(t,(...i)=>e(...i),n)},Iv=Mi("bm"),hg=Mi("m"),Nv=Mi("bu"),Fv=Mi("u"),dg=Mi("bum"),pg=Mi("um"),Ov=Mi("sp"),Bv=Mi("rtg"),Hv=Mi("rtc");function zv(t,e=It){Ya("ec",t,e)}const Vv="components";function wr(t,e){return Gv(Vv,t,!0,e)||t}const kv=Symbol.for("v-ndc");function Gv(t,e,n=!0,i=!1){const s=sn||It;if(s){const r=s.type;{const a=Ux(r,!1);if(a&&(a===e||a===An(e)||a===ka(An(e))))return r}const o=Eu(s[t]||r[t],e)||Eu(s.appContext[t],e);return!o&&i?r:o}}function Eu(t,e){return t&&(t[e]||t[An(e)]||t[ka(An(e))])}function $v(t,e,n,i){let s;const r=n,o=Ie(t);if(o||_t(t)){const a=o&&Js(t);let l=!1;a&&(l=!zn(t),t=Xa(t)),s=new Array(t.length);for(let c=0,f=t.length;c<f;c++)s[c]=e(l?Qt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(at(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const f=a[l];s[l]=e(t[f],f,l,r)}}else s=[];return s}const ef=t=>t?Ng(t)?Ja(t):ef(t.parent):null,Kr=Nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ef(t.parent),$root:t=>ef(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>gg(t),$forceUpdate:t=>t.f||(t.f=()=>{Bf(t.update)}),$nextTick:t=>t.n||(t.n=bv.bind(t.proxy)),$watch:t=>hx.bind(t)}),Cl=(t,e)=>t!==ot&&!t.__isScriptSetup&&Qe(t,e),Wv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Cl(i,e))return o[e]=1,i[e];if(s!==ot&&Qe(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Qe(c,e))return o[e]=3,r[e];if(n!==ot&&Qe(n,e))return o[e]=4,n[e];tf&&(o[e]=0)}}const f=Kr[e];let u,h;if(f)return e==="$attrs"&&zt(t.attrs,"get",""),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ot&&Qe(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Qe(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Cl(s,e)?(s[e]=n,!0):i!==ot&&Qe(i,e)?(i[e]=n,!0):Qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==ot&&Qe(t,o)||Cl(e,o)||(a=r[0])&&Qe(a,o)||Qe(i,o)||Qe(Kr,o)||Qe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Su(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tf=!0;function Xv(t){const e=gg(t),n=t.proxy,i=t.ctx;tf=!1,e.beforeCreate&&bu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:y,unmounted:x,render:M,renderTracked:E,renderTriggered:T,errorCaptured:L,serverPrefetch:v,expose:w,inheritAttrs:N,components:U,directives:I,filters:F}=e;if(c&&qv(c,i,null),o)for(const G in o){const W=o[G];Be(W)&&(i[G]=W.bind(n))}if(s){const G=s.call(n,n);at(G)&&(t.data=Nf(G))}if(tf=!0,r)for(const G in r){const W=r[G],oe=Be(W)?W.bind(n,n):Be(W.get)?W.get.bind(n,n):Jn,ee=!Be(W)&&Be(W.set)?W.set.bind(n):Jn,be=Nx({get:oe,set:ee});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>be.value,set:ce=>be.value=ce})}if(a)for(const G in a)mg(a[G],i,n,G);if(l){const G=Be(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{Qv(W,G[W])})}f&&bu(f,t,"c");function z(G,W){Ie(W)?W.forEach(oe=>G(oe.bind(n))):W&&G(W.bind(n))}if(z(Iv,u),z(hg,h),z(Nv,d),z(Fv,_),z(Lv,g),z(Dv,m),z(zv,L),z(Hv,E),z(Bv,T),z(dg,S),z(pg,x),z(Ov,v),Ie(w))if(w.length){const G=t.exposed||(t.exposed={});w.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:oe=>n[W]=oe})})}else t.exposed||(t.exposed={});M&&t.render===Jn&&(t.render=M),N!=null&&(t.inheritAttrs=N),U&&(t.components=U),I&&(t.directives=I),v&&fg(t)}function qv(t,e,n=Jn){Ie(t)&&(t=nf(t));for(const i in t){const s=t[i];let r;at(s)?"default"in s?r=ya(s.from||i,s.default,!0):r=ya(s.from||i):r=ya(s),Kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function bu(t,e,n){Vn(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function mg(t,e,n,i){let s=i.includes(".")?Pg(n,i):()=>n[i];if(_t(t)){const r=e[t];Be(r)&&Ll(s,r)}else if(Be(t))Ll(s,t.bind(n));else if(at(t))if(Ie(t))t.forEach(r=>mg(r,e,n,i));else{const r=Be(t.handler)?t.handler.bind(n):e[t.handler];Be(r)&&Ll(s,r,t)}}function gg(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Pa(l,c,o,!0)),Pa(l,e,o)),at(e)&&r.set(e,l),l}function Pa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Pa(t,r,n,!0),s&&s.forEach(o=>Pa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=jv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jv={data:wu,props:Tu,emits:Tu,methods:zr,computed:zr,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:zr,directives:zr,watch:Zv,provide:wu,inject:Yv};function wu(t,e){return e?t?function(){return Nt(Be(t)?t.call(this,this):t,Be(e)?e.call(this,this):e)}:e:t}function Yv(t,e){return zr(nf(t),nf(e))}function nf(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function zr(t,e){return t?Nt(Object.create(null),t,e):e}function Tu(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:Nt(Object.create(null),Su(t),Su(e??{})):e}function Zv(t,e){if(!t)return e;if(!e)return t;const n=Nt(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function _g(){return{app:null,config:{isNativeTag:F_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kv=0;function Jv(t,e){return function(i,s=null){Be(i)||(i=Nt({},i)),s!=null&&!at(s)&&(s=null);const r=_g(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Kv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ox,get config(){return r.config},set config(f){},use(f,...u){return o.has(f)||(f&&Be(f.install)?(o.add(f),f.install(c,...u)):Be(f)&&(o.add(f),f(c,...u))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,u){return u?(r.components[f]=u,c):r.components[f]},directive(f,u){return u?(r.directives[f]=u,c):r.directives[f]},mount(f,u,h){if(!l){const d=c._ceVNode||bt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(d,f,h),l=!0,c._container=f,f.__vue_app__=c,Ja(d.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Vn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(f,u){return r.provides[f]=u,c},runWithContext(f){const u=er;er=c;try{return f()}finally{er=u}}};return c}}let er=null;function Qv(t,e){if(It){let n=It.provides;const i=It.parent&&It.parent.provides;i===n&&(n=It.provides=Object.create(i)),n[t]=e}}function ya(t,e,n=!1){const i=It||sn;if(i||er){const s=er?er._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Be(e)?e.call(i&&i.proxy):e}}const vg={},xg=()=>Object.create(vg),yg=t=>Object.getPrototypeOf(t)===vg;function ex(t,e,n,i=!1){const s={},r=xg();t.propsDefaults=Object.create(null),Mg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:mv(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function tx(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=tt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Za(t.emitsOptions,h))continue;const d=e[h];if(l)if(Qe(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const _=An(h);s[_]=sf(l,a,_,d,t,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Mg(t,e,s,r)&&(c=!0);let f;for(const u in a)(!e||!Qe(e,u)&&((f=Vi(u))===u||!Qe(e,f)))&&(l?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=sf(l,a,u,void 0,t,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!Qe(e,u))&&(delete r[u],c=!0)}c&&gi(t.attrs,"set","")}function Mg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(qr(l))continue;const c=e[l];let f;s&&Qe(s,f=An(l))?!r||!r.includes(f)?n[f]=c:(a||(a={}))[f]=c:Za(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(n),c=a||ot;for(let f=0;f<r.length;f++){const u=r[f];n[u]=sf(s,l,u,c[u],t,!Qe(c,u))}}return o}function sf(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Be(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const f=go(s);i=c[n]=l.call(null,e),f()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Vi(n))&&(i=!0))}return i}const nx=new WeakMap;function Eg(t,e,n=!1){const i=n?nx:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Be(t)){const f=u=>{l=!0;const[h,d]=Eg(u,e,!0);Nt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!l)return at(t)&&i.set(t,Zs),Zs;if(Ie(r))for(let f=0;f<r.length;f++){const u=An(r[f]);Au(u)&&(o[u]=ot)}else if(r)for(const f in r){const u=An(f);if(Au(u)){const h=r[f],d=o[u]=Ie(h)||Be(h)?{type:h}:Nt({},h),_=d.type;let g=!1,m=!0;if(Ie(_))for(let p=0;p<_.length;++p){const S=_[p],y=Be(S)&&S.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(m=!1)}else g=Be(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||Qe(d,"default"))&&a.push(u)}}const c=[o,a];return at(t)&&i.set(t,c),c}function Au(t){return t[0]!=="$"&&!qr(t)}const Sg=t=>t[0]==="_"||t==="$stable",Hf=t=>Ie(t)?t.map(Yn):[Yn(t)],ix=(t,e,n)=>{if(e._n)return e;const i=ig((...s)=>Hf(e(...s)),n);return i._c=!1,i},bg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Sg(s))continue;const r=t[s];if(Be(r))e[s]=ix(s,r,i);else if(r!=null){const o=Hf(r);e[s]=()=>o}}},wg=(t,e)=>{const n=Hf(e);t.slots.default=()=>n},Tg=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},sx=(t,e,n)=>{const i=t.slots=xg();if(t.vnode.shapeFlag&32){const s=e._;s?(Tg(i,e,n),n&&Cm(i,"_",s,!0)):bg(e,i)}else e&&wg(t,e)},rx=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ot;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Tg(s,e,n):(r=!e.$stable,bg(e,s)),o=e}else e&&(wg(t,e),o={default:1});if(r)for(const a in s)!Sg(a)&&o[a]==null&&delete s[a]},dn=xx;function ox(t){return ax(t)}function ax(t,e){const n=Ga();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=Jn,insertStaticContent:_}=t,g=(P,D,V,ie=null,Q=null,ne=null,me=void 0,re=null,fe=!!D.dynamicChildren)=>{if(P===D)return;P&&!os(P,D)&&(ie=A(P),ce(P,Q,ne,!0),P=null),D.patchFlag===-2&&(fe=!1,D.dynamicChildren=null);const{type:ae,ref:R,shapeFlag:b}=D;switch(ae){case Ka:m(P,D,V,ie);break;case en:p(P,D,V,ie);break;case Dl:P==null&&S(D,V,ie,me);break;case Fn:U(P,D,V,ie,Q,ne,me,re,fe);break;default:b&1?M(P,D,V,ie,Q,ne,me,re,fe):b&6?I(P,D,V,ie,Q,ne,me,re,fe):(b&64||b&128)&&ae.process(P,D,V,ie,Q,ne,me,re,fe,de)}R!=null&&Q&&Ca(R,P&&P.ref,ne,D||P,!D)},m=(P,D,V,ie)=>{if(P==null)i(D.el=a(D.children),V,ie);else{const Q=D.el=P.el;D.children!==P.children&&c(Q,D.children)}},p=(P,D,V,ie)=>{P==null?i(D.el=l(D.children||""),V,ie):D.el=P.el},S=(P,D,V,ie)=>{[P.el,P.anchor]=_(P.children,D,V,ie,P.el,P.anchor)},y=({el:P,anchor:D},V,ie)=>{let Q;for(;P&&P!==D;)Q=h(P),i(P,V,ie),P=Q;i(D,V,ie)},x=({el:P,anchor:D})=>{let V;for(;P&&P!==D;)V=h(P),s(P),P=V;s(D)},M=(P,D,V,ie,Q,ne,me,re,fe)=>{D.type==="svg"?me="svg":D.type==="math"&&(me="mathml"),P==null?E(D,V,ie,Q,ne,me,re,fe):v(P,D,Q,ne,me,re,fe)},E=(P,D,V,ie,Q,ne,me,re)=>{let fe,ae;const{props:R,shapeFlag:b,transition:H,dirs:q}=P;if(fe=P.el=o(P.type,ne,R&&R.is,R),b&8?f(fe,P.children):b&16&&L(P.children,fe,null,ie,Q,Pl(P,ne),me,re),q&&ji(P,null,ie,"created"),T(fe,P,P.scopeId,me,ie),R){for(const he in R)he!=="value"&&!qr(he)&&r(fe,he,null,R[he],ne,ie);"value"in R&&r(fe,"value",null,R.value,ne),(ae=R.onVnodeBeforeMount)&&$n(ae,ie,P)}q&&ji(P,null,ie,"beforeMount");const Z=lx(Q,H);Z&&H.beforeEnter(fe),i(fe,D,V),((ae=R&&R.onVnodeMounted)||Z||q)&&dn(()=>{ae&&$n(ae,ie,P),Z&&H.enter(fe),q&&ji(P,null,ie,"mounted")},Q)},T=(P,D,V,ie,Q)=>{if(V&&d(P,V),ie)for(let ne=0;ne<ie.length;ne++)d(P,ie[ne]);if(Q){let ne=Q.subTree;if(D===ne||Dg(ne.type)&&(ne.ssContent===D||ne.ssFallback===D)){const me=Q.vnode;T(P,me,me.scopeId,me.slotScopeIds,Q.parent)}}},L=(P,D,V,ie,Q,ne,me,re,fe=0)=>{for(let ae=fe;ae<P.length;ae++){const R=P[ae]=re?Fi(P[ae]):Yn(P[ae]);g(null,R,D,V,ie,Q,ne,me,re)}},v=(P,D,V,ie,Q,ne,me)=>{const re=D.el=P.el;let{patchFlag:fe,dynamicChildren:ae,dirs:R}=D;fe|=P.patchFlag&16;const b=P.props||ot,H=D.props||ot;let q;if(V&&Yi(V,!1),(q=H.onVnodeBeforeUpdate)&&$n(q,V,D,P),R&&ji(D,P,V,"beforeUpdate"),V&&Yi(V,!0),(b.innerHTML&&H.innerHTML==null||b.textContent&&H.textContent==null)&&f(re,""),ae?w(P.dynamicChildren,ae,re,V,ie,Pl(D,Q),ne):me||W(P,D,re,null,V,ie,Pl(D,Q),ne,!1),fe>0){if(fe&16)N(re,b,H,V,Q);else if(fe&2&&b.class!==H.class&&r(re,"class",null,H.class,Q),fe&4&&r(re,"style",b.style,H.style,Q),fe&8){const Z=D.dynamicProps;for(let he=0;he<Z.length;he++){const ye=Z[he],Me=b[ye],j=H[ye];(j!==Me||ye==="value")&&r(re,ye,Me,j,Q,V)}}fe&1&&P.children!==D.children&&f(re,D.children)}else!me&&ae==null&&N(re,b,H,V,Q);((q=H.onVnodeUpdated)||R)&&dn(()=>{q&&$n(q,V,D,P),R&&ji(D,P,V,"updated")},ie)},w=(P,D,V,ie,Q,ne,me)=>{for(let re=0;re<D.length;re++){const fe=P[re],ae=D[re],R=fe.el&&(fe.type===Fn||!os(fe,ae)||fe.shapeFlag&70)?u(fe.el):V;g(fe,ae,R,null,ie,Q,ne,me,!0)}},N=(P,D,V,ie,Q)=>{if(D!==V){if(D!==ot)for(const ne in D)!qr(ne)&&!(ne in V)&&r(P,ne,D[ne],null,Q,ie);for(const ne in V){if(qr(ne))continue;const me=V[ne],re=D[ne];me!==re&&ne!=="value"&&r(P,ne,re,me,Q,ie)}"value"in V&&r(P,"value",D.value,V.value,Q)}},U=(P,D,V,ie,Q,ne,me,re,fe)=>{const ae=D.el=P?P.el:a(""),R=D.anchor=P?P.anchor:a("");let{patchFlag:b,dynamicChildren:H,slotScopeIds:q}=D;q&&(re=re?re.concat(q):q),P==null?(i(ae,V,ie),i(R,V,ie),L(D.children||[],V,R,Q,ne,me,re,fe)):b>0&&b&64&&H&&P.dynamicChildren?(w(P.dynamicChildren,H,V,Q,ne,me,re),(D.key!=null||Q&&D===Q.subTree)&&Ag(P,D,!0)):W(P,D,V,R,Q,ne,me,re,fe)},I=(P,D,V,ie,Q,ne,me,re,fe)=>{D.slotScopeIds=re,P==null?D.shapeFlag&512?Q.ctx.activate(D,V,ie,me,fe):F(D,V,ie,Q,ne,me,fe):B(P,D,fe)},F=(P,D,V,ie,Q,ne,me)=>{const re=P.component=Ax(P,ie,Q);if(ja(P)&&(re.ctx.renderer=de),Cx(re,!1,me),re.asyncDep){if(Q&&Q.registerDep(re,z,me),!P.el){const fe=re.subTree=bt(en);p(null,fe,D,V)}}else z(re,P,D,V,Q,ne,me)},B=(P,D,V)=>{const ie=D.component=P.component;if(_x(P,D,V))if(ie.asyncDep&&!ie.asyncResolved){G(ie,D,V);return}else ie.next=D,ie.update();else D.el=P.el,ie.vnode=D},z=(P,D,V,ie,Q,ne,me)=>{const re=()=>{if(P.isMounted){let{next:b,bu:H,u:q,parent:Z,vnode:he}=P;{const Re=Rg(P);if(Re){b&&(b.el=he.el,G(P,b,me)),Re.asyncDep.then(()=>{P.isUnmounted||re()});return}}let ye=b,Me;Yi(P,!1),b?(b.el=he.el,G(P,b,me)):b=he,H&&xa(H),(Me=b.props&&b.props.onVnodeBeforeUpdate)&&$n(Me,Z,b,he),Yi(P,!0);const j=Cu(P),Te=P.subTree;P.subTree=j,g(Te,j,u(Te.el),A(Te),P,Q,ne),b.el=j.el,ye===null&&vx(P,j.el),q&&dn(q,Q),(Me=b.props&&b.props.onVnodeUpdated)&&dn(()=>$n(Me,Z,b,he),Q)}else{let b;const{el:H,props:q}=D,{bm:Z,m:he,parent:ye,root:Me,type:j}=P,Te=Zr(D);Yi(P,!1),Z&&xa(Z),!Te&&(b=q&&q.onVnodeBeforeMount)&&$n(b,ye,D),Yi(P,!0);{Me.ce&&Me.ce._injectChildStyle(j);const Re=P.subTree=Cu(P);g(null,Re,V,ie,P,Q,ne),D.el=Re.el}if(he&&dn(he,Q),!Te&&(b=q&&q.onVnodeMounted)){const Re=D;dn(()=>$n(b,ye,Re),Q)}(D.shapeFlag&256||ye&&Zr(ye.vnode)&&ye.vnode.shapeFlag&256)&&P.a&&dn(P.a,Q),P.isMounted=!0,D=V=ie=null}};P.scope.on();const fe=P.effect=new Nm(re);P.scope.off();const ae=P.update=fe.run.bind(fe),R=P.job=fe.runIfDirty.bind(fe);R.i=P,R.id=P.uid,fe.scheduler=()=>Bf(R),Yi(P,!0),ae()},G=(P,D,V)=>{D.component=P;const ie=P.vnode.props;P.vnode=D,P.next=null,tx(P,D.props,ie,V),rx(P,D.children,V),ki(),yu(P),Gi()},W=(P,D,V,ie,Q,ne,me,re,fe=!1)=>{const ae=P&&P.children,R=P?P.shapeFlag:0,b=D.children,{patchFlag:H,shapeFlag:q}=D;if(H>0){if(H&128){ee(ae,b,V,ie,Q,ne,me,re,fe);return}else if(H&256){oe(ae,b,V,ie,Q,ne,me,re,fe);return}}q&8?(R&16&&_e(ae,Q,ne),b!==ae&&f(V,b)):R&16?q&16?ee(ae,b,V,ie,Q,ne,me,re,fe):_e(ae,Q,ne,!0):(R&8&&f(V,""),q&16&&L(b,V,ie,Q,ne,me,re,fe))},oe=(P,D,V,ie,Q,ne,me,re,fe)=>{P=P||Zs,D=D||Zs;const ae=P.length,R=D.length,b=Math.min(ae,R);let H;for(H=0;H<b;H++){const q=D[H]=fe?Fi(D[H]):Yn(D[H]);g(P[H],q,V,null,Q,ne,me,re,fe)}ae>R?_e(P,Q,ne,!0,!1,b):L(D,V,ie,Q,ne,me,re,fe,b)},ee=(P,D,V,ie,Q,ne,me,re,fe)=>{let ae=0;const R=D.length;let b=P.length-1,H=R-1;for(;ae<=b&&ae<=H;){const q=P[ae],Z=D[ae]=fe?Fi(D[ae]):Yn(D[ae]);if(os(q,Z))g(q,Z,V,null,Q,ne,me,re,fe);else break;ae++}for(;ae<=b&&ae<=H;){const q=P[b],Z=D[H]=fe?Fi(D[H]):Yn(D[H]);if(os(q,Z))g(q,Z,V,null,Q,ne,me,re,fe);else break;b--,H--}if(ae>b){if(ae<=H){const q=H+1,Z=q<R?D[q].el:ie;for(;ae<=H;)g(null,D[ae]=fe?Fi(D[ae]):Yn(D[ae]),V,Z,Q,ne,me,re,fe),ae++}}else if(ae>H)for(;ae<=b;)ce(P[ae],Q,ne,!0),ae++;else{const q=ae,Z=ae,he=new Map;for(ae=Z;ae<=H;ae++){const Ee=D[ae]=fe?Fi(D[ae]):Yn(D[ae]);Ee.key!=null&&he.set(Ee.key,ae)}let ye,Me=0;const j=H-Z+1;let Te=!1,Re=0;const De=new Array(j);for(ae=0;ae<j;ae++)De[ae]=0;for(ae=q;ae<=b;ae++){const Ee=P[ae];if(Me>=j){ce(Ee,Q,ne,!0);continue}let Fe;if(Ee.key!=null)Fe=he.get(Ee.key);else for(ye=Z;ye<=H;ye++)if(De[ye-Z]===0&&os(Ee,D[ye])){Fe=ye;break}Fe===void 0?ce(Ee,Q,ne,!0):(De[Fe-Z]=ae+1,Fe>=Re?Re=Fe:Te=!0,g(Ee,D[Fe],V,null,Q,ne,me,re,fe),Me++)}const Ae=Te?cx(De):Zs;for(ye=Ae.length-1,ae=j-1;ae>=0;ae--){const Ee=Z+ae,Fe=D[Ee],Ke=Ee+1<R?D[Ee+1].el:ie;De[ae]===0?g(null,Fe,V,Ke,Q,ne,me,re,fe):Te&&(ye<0||ae!==Ae[ye]?be(Fe,V,Ke,2):ye--)}}},be=(P,D,V,ie,Q=null)=>{const{el:ne,type:me,transition:re,children:fe,shapeFlag:ae}=P;if(ae&6){be(P.component.subTree,D,V,ie);return}if(ae&128){P.suspense.move(D,V,ie);return}if(ae&64){me.move(P,D,V,de);return}if(me===Fn){i(ne,D,V);for(let b=0;b<fe.length;b++)be(fe[b],D,V,ie);i(P.anchor,D,V);return}if(me===Dl){y(P,D,V);return}if(ie!==2&&ae&1&&re)if(ie===0)re.beforeEnter(ne),i(ne,D,V),dn(()=>re.enter(ne),Q);else{const{leave:b,delayLeave:H,afterLeave:q}=re,Z=()=>i(ne,D,V),he=()=>{b(ne,()=>{Z(),q&&q()})};H?H(ne,Z,he):he()}else i(ne,D,V)},ce=(P,D,V,ie=!1,Q=!1)=>{const{type:ne,props:me,ref:re,children:fe,dynamicChildren:ae,shapeFlag:R,patchFlag:b,dirs:H,cacheIndex:q}=P;if(b===-2&&(Q=!1),re!=null&&Ca(re,null,V,P,!0),q!=null&&(D.renderCache[q]=void 0),R&256){D.ctx.deactivate(P);return}const Z=R&1&&H,he=!Zr(P);let ye;if(he&&(ye=me&&me.onVnodeBeforeUnmount)&&$n(ye,D,P),R&6)ge(P.component,V,ie);else{if(R&128){P.suspense.unmount(V,ie);return}Z&&ji(P,null,D,"beforeUnmount"),R&64?P.type.remove(P,D,V,de,ie):ae&&!ae.hasOnce&&(ne!==Fn||b>0&&b&64)?_e(ae,D,V,!1,!0):(ne===Fn&&b&384||!Q&&R&16)&&_e(fe,D,V),ie&&Y(P)}(he&&(ye=me&&me.onVnodeUnmounted)||Z)&&dn(()=>{ye&&$n(ye,D,P),Z&&ji(P,null,D,"unmounted")},V)},Y=P=>{const{type:D,el:V,anchor:ie,transition:Q}=P;if(D===Fn){se(V,ie);return}if(D===Dl){x(P);return}const ne=()=>{s(V),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(P.shapeFlag&1&&Q&&!Q.persisted){const{leave:me,delayLeave:re}=Q,fe=()=>me(V,ne);re?re(P.el,ne,fe):fe()}else ne()},se=(P,D)=>{let V;for(;P!==D;)V=h(P),s(P),P=V;s(D)},ge=(P,D,V)=>{const{bum:ie,scope:Q,job:ne,subTree:me,um:re,m:fe,a:ae}=P;Ru(fe),Ru(ae),ie&&xa(ie),Q.stop(),ne&&(ne.flags|=8,ce(me,P,D,V)),re&&dn(re,D),dn(()=>{P.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},_e=(P,D,V,ie=!1,Q=!1,ne=0)=>{for(let me=ne;me<P.length;me++)ce(P[me],D,V,ie,Q)},A=P=>{if(P.shapeFlag&6)return A(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=h(P.anchor||P.el),V=D&&D[Av];return V?h(V):D};let ue=!1;const Se=(P,D,V)=>{P==null?D._vnode&&ce(D._vnode,null,null,!0):g(D._vnode||null,P,D,null,null,null,V),D._vnode=P,ue||(ue=!0,yu(),eg(),ue=!1)},de={p:g,um:ce,m:be,r:Y,mt:F,mc:L,pc:W,pbc:w,n:A,o:t};return{render:Se,hydrate:void 0,createApp:Jv(Se)}}function Pl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lx(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ag(t,e,n=!1){const i=t.children,s=e.children;if(Ie(i)&&Ie(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ag(o,a)),a.type===Ka&&(a.el=o.el)}}function cx(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Rg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rg(e)}function Ru(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fx=Symbol.for("v-scx"),ux=()=>ya(fx);function Ll(t,e,n){return Cg(t,e,n)}function Cg(t,e,n=ot){const{immediate:i,deep:s,flush:r,once:o}=n,a=Nt({},n),l=e&&i||!e&&r!=="post";let c;if(oo){if(r==="sync"){const d=ux();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Jn,d.resume=Jn,d.pause=Jn,d}}const f=It;a.call=(d,_,g)=>Vn(d,f,_,g);let u=!1;r==="post"?a.scheduler=d=>{dn(d,f&&f.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,_)=>{_?d():Bf(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,f&&(d.id=f.uid,d.i=f))};const h=Ev(t,e,a);return oo&&(c?c.push(h):l&&h()),h}function hx(t,e,n){const i=this.proxy,s=_t(t)?t.includes(".")?Pg(i,t):()=>i[t]:t.bind(i,i);let r;Be(e)?r=e:(r=e.handler,n=e);const o=go(this),a=Cg(s,r.bind(i),n);return o(),a}function Pg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const dx=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${Vi(e)}Modifiers`];function px(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ot;let s=n;const r=e.startsWith("update:"),o=r&&dx(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>_t(f)?f.trim():f)),o.number&&(s=n.map(qc)));let a,l=i[a=Sl(e)]||i[a=Sl(An(e))];!l&&r&&(l=i[a=Sl(Vi(e))]),l&&Vn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vn(c,t,6,s)}}function Lg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Be(t)){const l=c=>{const f=Lg(c,e,!0);f&&(a=!0,Nt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(at(t)&&i.set(t,null),null):(Ie(r)?r.forEach(l=>o[l]=null):Nt(o,r),at(t)&&i.set(t,o),o)}function Za(t,e){return!t||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(t,e[0].toLowerCase()+e.slice(1))||Qe(t,Vi(e))||Qe(t,e))}function Cu(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:f,props:u,data:h,setupState:d,ctx:_,inheritAttrs:g}=t,m=Ra(t);let p,S;try{if(n.shapeFlag&4){const x=s||i,M=x;p=Yn(c.call(M,x,f,u,d,h,_)),S=a}else{const x=e;p=Yn(x.length>1?x(u,{attrs:a,slots:o,emit:l}):x(u,null)),S=e.props?a:mx(a)}}catch(x){Jr.length=0,qa(x,t,1),p=bt(en)}let y=p;if(S&&g!==!1){const x=Object.keys(S),{shapeFlag:M}=y;x.length&&M&7&&(r&&x.some(Af)&&(S=gx(S,r)),y=Hi(y,S,!1,!0))}return n.dirs&&(y=Hi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&so(y,n.transition),p=y,Ra(m),p}const mx=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ha(n))&&((e||(e={}))[n]=t[n]);return e},gx=(t,e)=>{const n={};for(const i in t)(!Af(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function _x(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Pu(i,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==i[h]&&!Za(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pu(i,o,c):!0:!!o;return!1}function Pu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Za(n,r))return!0}return!1}function vx({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dg=t=>t.__isSuspense;function xx(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):Tv(t)}const Fn=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Dl=Symbol.for("v-stc"),Jr=[];let _n=null;function tn(t=!1){Jr.push(_n=t?null:[])}function yx(){Jr.pop(),_n=Jr[Jr.length-1]||null}let ro=1;function Lu(t,e=!1){ro+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function Ug(t){return t.dynamicChildren=ro>0?_n||Zs:null,yx(),ro>0&&_n&&_n.push(t),t}function gn(t,e,n,i,s,r){return Ug(le(t,e,n,i,s,r,!0))}function Mx(t,e,n,i,s){return Ug(bt(t,e,n,i,s,!0))}function La(t){return t?t.__v_isVNode===!0:!1}function os(t,e){return t.type===e.type&&t.key===e.key}const Ig=({key:t})=>t??null,Ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||Kt(t)||Be(t)?{i:sn,r:t,k:e,f:!!n}:t:null);function le(t,e=null,n=null,i=0,s=null,r=t===Fn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ig(e),ref:e&&Ma(e),scopeId:ng,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return a?(zf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),ro>0&&!o&&_n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_n.push(l),l}const bt=Ex;function Ex(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===kv)&&(t=en),La(t)){const a=Hi(t,e,!0);return n&&zf(a,n),ro>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag=-2,a}if(Ix(t)&&(t=t.__vccOpts),e){e=Sx(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=$a(a)),at(l)&&(Of(l)&&!Ie(l)&&(l=Nt({},l)),e.style=Pf(l))}const o=_t(t)?1:Dg(t)?128:sg(t)?64:at(t)?4:Be(t)?2:0;return le(t,e,n,i,s,o,r,!0)}function Sx(t){return t?Of(t)||yg(t)?Nt({},t):t:null}function Hi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?bx(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ig(c),ref:e&&e.ref?n&&r?Ie(r)?r.concat(Ma(e)):[r,Ma(e)]:Ma(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hi(t.ssContent),ssFallback:t.ssFallback&&Hi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&so(f,l.clone(f)),f}function mn(t=" ",e=0){return bt(Ka,null,t,e)}function Ao(t="",e=!1){return e?(tn(),Mx(en,null,t)):bt(en,null,t)}function Yn(t){return t==null||typeof t=="boolean"?bt(en):Ie(t)?bt(Fn,null,t.slice()):La(t)?Fi(t):bt(Ka,null,String(t))}function Fi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hi(t)}function zf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!yg(e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:sn},n=32):(e=String(e),i&64?(n=16,e=[mn(e)]):n=8);t.children=e,t.shapeFlag|=n}function bx(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=$a([e.class,i.class]));else if(s==="style")e.style=Pf([e.style,i.style]);else if(Ha(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ie(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function $n(t,e,n,i=null){Vn(t,e,7,[n,i])}const wx=_g();let Tx=0;function Ax(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||wx,r={uid:Tx++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Y_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eg(i,s),emitsOptions:Lg(i,s),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:i.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=px.bind(null,r),t.ce&&t.ce(r),r}let It=null;const Rx=()=>It||sn;let Da,rf;{const t=Ga(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>It=n),rf=e("__VUE_SSR_SETTERS__",n=>oo=n)}const go=t=>{const e=It;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},Du=()=>{It&&It.scope.off(),Da(null)};function Ng(t){return t.vnode.shapeFlag&4}let oo=!1;function Cx(t,e=!1,n=!1){e&&rf(e);const{props:i,children:s}=t.vnode,r=Ng(t);ex(t,i,r,e),sx(t,s,n);const o=r?Px(t,e):void 0;return e&&rf(!1),o}function Px(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wv);const{setup:i}=n;if(i){ki();const s=t.setupContext=i.length>1?Dx(t):null,r=go(t),o=mo(i,t,0,[t.props,s]),a=Tm(o);if(Gi(),r(),(a||t.sp)&&!Zr(t)&&fg(t),a){if(o.then(Du,Du),e)return o.then(l=>{Uu(t,l)}).catch(l=>{qa(l,t,0)});t.asyncDep=o}else Uu(t,o)}else Fg(t)}function Uu(t,e,n){Be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:at(e)&&(t.setupState=Km(e)),Fg(t)}function Fg(t,e,n){const i=t.type;t.render||(t.render=i.render||Jn);{const s=go(t);ki();try{Xv(t)}finally{Gi(),s()}}}const Lx={get(t,e){return zt(t,"get",""),t[e]}};function Dx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Lx),slots:t.slots,emit:t.emit,expose:e}}function Ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Km(gv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kr)return Kr[n](t)},has(e,n){return n in e||n in Kr}})):t.proxy}function Ux(t,e=!0){return Be(t)?t.displayName||t.name:t.name||e&&t.__name}function Ix(t){return Be(t)&&"__vccOpts"in t}const Nx=(t,e)=>yv(t,e,oo);function Fx(t,e,n){const i=arguments.length;return i===2?at(e)&&!Ie(e)?La(e)?bt(t,null,[e]):bt(t,e):bt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&La(n)&&(n=[n]),bt(t,e,n))}const Ox="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let of;const Iu=typeof window<"u"&&window.trustedTypes;if(Iu)try{of=Iu.createPolicy("vue",{createHTML:t=>t})}catch{}const Og=of?t=>of.createHTML(t):t=>t,Bx="http://www.w3.org/2000/svg",Hx="http://www.w3.org/1998/Math/MathML",mi=typeof document<"u"?document:null,Nu=mi&&mi.createElement("template"),zx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?mi.createElementNS(Bx,t):e==="mathml"?mi.createElementNS(Hx,t):n?mi.createElement(t,{is:n}):mi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>mi.createTextNode(t),createComment:t=>mi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Nu.innerHTML=Og(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Nu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Si="transition",Tr="animation",ao=Symbol("_vtc"),Bg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vx=Nt({},rg,Bg),kx=t=>(t.displayName="Transition",t.props=Vx,t),Gx=kx((t,{slots:e})=>Fx(Pv,$x(t),e)),Zi=(t,e=[])=>{Ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fu=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function $x(t){const e={};for(const U in t)U in Bg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:f=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=Wx(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:y,onLeave:x,onLeaveCancelled:M,onBeforeAppear:E=p,onAppear:T=S,onAppearCancelled:L=y}=e,v=(U,I,F,B)=>{U._enterCancelled=B,Ki(U,I?f:a),Ki(U,I?c:o),F&&F()},w=(U,I)=>{U._isLeaving=!1,Ki(U,u),Ki(U,d),Ki(U,h),I&&I()},N=U=>(I,F)=>{const B=U?T:S,z=()=>v(I,U,F);Zi(B,[I,z]),Ou(()=>{Ki(I,U?l:r),ni(I,U?f:a),Fu(B)||Bu(I,i,g,z)})};return Nt(e,{onBeforeEnter(U){Zi(p,[U]),ni(U,r),ni(U,o)},onBeforeAppear(U){Zi(E,[U]),ni(U,l),ni(U,c)},onEnter:N(!1),onAppear:N(!0),onLeave(U,I){U._isLeaving=!0;const F=()=>w(U,I);ni(U,u),U._enterCancelled?(ni(U,h),Vu()):(Vu(),ni(U,h)),Ou(()=>{U._isLeaving&&(Ki(U,u),ni(U,d),Fu(x)||Bu(U,i,m,F))}),Zi(x,[U,F])},onEnterCancelled(U){v(U,!1,void 0,!0),Zi(y,[U])},onAppearCancelled(U){v(U,!0,void 0,!0),Zi(L,[U])},onLeaveCancelled(U){w(U),Zi(M,[U])}})}function Wx(t){if(t==null)return null;if(at(t))return[Ul(t.enter),Ul(t.leave)];{const e=Ul(t);return[e,e]}}function Ul(t){return V_(t)}function ni(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ao]||(t[ao]=new Set)).add(e)}function Ki(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ao];n&&(n.delete(e),n.size||(t[ao]=void 0))}function Ou(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xx=0;function Bu(t,e,n,i){const s=t._endId=++Xx,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=qx(t,e);if(!o)return i();const c=o+"end";let f=0;const u=()=>{t.removeEventListener(c,h),r()},h=d=>{d.target===t&&++f>=l&&u()};setTimeout(()=>{f<l&&u()},a+1),t.addEventListener(c,h)}function qx(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${Si}Delay`),r=i(`${Si}Duration`),o=Hu(s,r),a=i(`${Tr}Delay`),l=i(`${Tr}Duration`),c=Hu(a,l);let f=null,u=0,h=0;e===Si?o>0&&(f=Si,u=o,h=r.length):e===Tr?c>0&&(f=Tr,u=c,h=l.length):(u=Math.max(o,c),f=u>0?o>c?Si:Tr:null,h=f?f===Si?r.length:l.length:0);const d=f===Si&&/\b(transform|all)(,|$)/.test(i(`${Si}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:d}}function Hu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>zu(n)+zu(t[i])))}function zu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vu(){return document.body.offsetHeight}function jx(t,e,n){const i=t[ao];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ua=Symbol("_vod"),Hg=Symbol("_vsh"),Yx={beforeMount(t,{value:e},{transition:n}){t[Ua]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ar(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Ar(t,!0),i.enter(t)):i.leave(t,()=>{Ar(t,!1)}):Ar(t,e))},beforeUnmount(t,{value:e}){Ar(t,e)}};function Ar(t,e){t.style.display=e?t[Ua]:"none",t[Hg]=!e}const Zx=Symbol(""),Kx=/(^|;)\s*display\s*:/;function Jx(t,e,n){const i=t.style,s=_t(n);let r=!1;if(n&&!s){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ea(i,a,"")}else for(const o in e)n[o]==null&&Ea(i,o,"");for(const o in n)o==="display"&&(r=!0),Ea(i,o,n[o])}else if(s){if(e!==n){const o=i[Zx];o&&(n+=";"+o),i.cssText=n,r=Kx.test(n)}}else e&&t.removeAttribute("style");Ua in t&&(t[Ua]=r?i.display:"",t[Hg]&&(i.display="none"))}const ku=/\s*!important$/;function Ea(t,e,n){if(Ie(n))n.forEach(i=>Ea(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Qx(t,e);ku.test(n)?t.setProperty(Vi(i),n.replace(ku,""),"important"):t[i]=n}}const Gu=["Webkit","Moz","ms"],Il={};function Qx(t,e){const n=Il[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return Il[e]=i;i=ka(i);for(let s=0;s<Gu.length;s++){const r=Gu[s]+i;if(r in t)return Il[e]=r}return e}const $u="http://www.w3.org/1999/xlink";function Wu(t,e,n,i,s,r=q_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($u,e.slice(6,e.length)):t.setAttributeNS($u,e,n):n==null||r&&!Pm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Qn(n)?String(n):n)}function Xu(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Og(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Pm(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function as(t,e,n,i){t.addEventListener(e,n,i)}function e1(t,e,n,i){t.removeEventListener(e,n,i)}const qu=Symbol("_vei");function t1(t,e,n,i,s=null){const r=t[qu]||(t[qu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=n1(e);if(i){const c=r[e]=r1(i,s);as(t,a,c,l)}else o&&(e1(t,a,o,l),r[e]=void 0)}}const ju=/(?:Once|Passive|Capture)$/;function n1(t){let e;if(ju.test(t)){e={};let i;for(;i=t.match(ju);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vi(t.slice(2)),e]}let Nl=0;const i1=Promise.resolve(),s1=()=>Nl||(i1.then(()=>Nl=0),Nl=Date.now());function r1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Vn(o1(i,n.value),e,5,[i])};return n.value=t,n.attached=s1(),n}function o1(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Yu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,a1=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?jx(t,i,o):e==="style"?Jx(t,n,i):Ha(e)?Af(e)||t1(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):l1(t,e,i,o))?(Xu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wu(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_t(i))?Xu(t,An(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Wu(t,e,i,o))};function l1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yu(e)&&Be(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yu(e)&&_t(n)?!1:e in t}const Ia=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ie(e)?n=>xa(e,n):e};function c1(t){t.target.composing=!0}function Zu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const tr=Symbol("_assign"),lt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[tr]=Ia(s);const r=i||s.props&&s.props.type==="number";as(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=qc(a)),t[tr](a)}),n&&as(t,"change",()=>{t.value=t.value.trim()}),e||(as(t,"compositionstart",c1),as(t,"compositionend",Zu),as(t,"change",Zu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[tr]=Ia(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?qc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Ro={deep:!0,created(t,e,n){t[tr]=Ia(n),as(t,"change",()=>{const i=t._modelValue,s=f1(t),r=t.checked,o=t[tr];if(Ie(i)){const a=Lm(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(za(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(zg(t,r))})},mounted:Ku,beforeUpdate(t,e,n){t[tr]=Ia(n),Ku(t,e,n)}};function Ku(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ie(e))s=Lm(e,i.props.value)>-1;else if(za(e))s=e.has(i.props.value);else{if(e===n)return;s=Wa(e,zg(t,!0))}t.checked!==s&&(t.checked=s)}function f1(t){return"_value"in t?t._value:t.value}function zg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const u1=["ctrl","shift","alt","meta"],h1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>u1.some(n=>t[`${n}Key`]&&!e.includes(n))},Vg=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=h1[e[o]];if(a&&a(s,e))return}return t(s,...r)})},d1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nr=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=Vi(s.key);if(e.some(o=>o===r||d1[o]===r))return t(s)})},p1=Nt({patchProp:a1},zx);let Ju;function m1(){return Ju||(Ju=ox(p1))}const g1=(...t)=>{const e=m1().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=v1(i);if(!s)return;const r=e._component;!Be(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function v1(t){return _t(t)?document.querySelector(t):t}const mr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},x1={name:"BasicForm",props:{initialWidth:{type:Number,default:155},initialDepth:{type:Number,default:105},initialSafety:{type:Number,default:0}},data(){return{localWidth:this.initialWidth,localDepth:this.initialDepth,localSafety:this.initialSafety}},methods:{emitValues(){this.$emit("update-dimensions",{width:this.localWidth,depth:this.localDepth,safety:this.localSafety})}}},y1={class:"mb-6 p-4 border border-gray-300 rounded"},M1={class:"flex-1 mb-4"},E1={class:"flex items-center space-x-2 mt-1"},S1={class:"flex-1 mb-4"},b1={class:"flex items-center space-x-2 mt-1"},w1={class:"flex-1 mb-4"};function T1(t,e,n,i,s,r){return tn(),gn("fieldset",y1,[e[22]||(e[22]=le("legend",{class:"px-2 text-lg font-semibold"},"Dimensions",-1)),le("form",{onSubmit:e[16]||(e[16]=Vg(()=>{},["prevent"])),class:"flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end",style:{width:"100%","max-width":"600px",margin:"0 auto","box-sizing":"border-box"}},[le("div",M1,[e[18]||(e[18]=le("label",{class:"block text-sm font-medium text-gray-700"},"Width (mm):",-1)),le("div",E1,[Je(le("input",{type:"range","onUpdate:modelValue":e[0]||(e[0]=o=>s.localWidth=o),onInput:e[1]||(e[1]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",class:"w-full"},null,544),[[lt,s.localWidth,void 0,{number:!0}]]),Je(le("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=o=>s.localWidth=o),onBlur:e[3]||(e[3]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[4]||(e[4]=nr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[5]||(e[5]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",placeholder:"155",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[lt,s.localWidth,void 0,{number:!0}]]),e[17]||(e[17]=mn(" mm "))])]),le("div",S1,[e[20]||(e[20]=le("label",{class:"block text-sm font-medium text-gray-700"},"Depth (mm):",-1)),le("div",b1,[Je(le("input",{type:"range","onUpdate:modelValue":e[6]||(e[6]=o=>s.localDepth=o),onInput:e[7]||(e[7]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",class:"w-full"},null,544),[[lt,s.localDepth,void 0,{number:!0}]]),Je(le("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=o=>s.localDepth=o),onBlur:e[9]||(e[9]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[10]||(e[10]=nr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[11]||(e[11]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",placeholder:"105",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[lt,s.localDepth,void 0,{number:!0}]]),e[19]||(e[19]=mn(" mm "))])]),le("div",w1,[e[21]||(e[21]=le("label",{class:"block text-sm font-medium text-gray-700"},"Safety Offset (mm):",-1)),Je(le("input",{"onUpdate:modelValue":e[12]||(e[12]=o=>s.localSafety=o),onBlur:e[13]||(e[13]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[14]||(e[14]=nr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[15]||(e[15]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",min:"-2",max:"2",step:"0.1",placeholder:"0",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[lt,s.localSafety,void 0,{number:!0}]])])],32)])}const A1=mr(x1,[["render",T1]]),R1={name:"AdvancedForm",props:{initialBottomHeight:{type:Number,default:15},initialTopHeight:{type:Number,default:25},initialBorderThickness:{type:Number,default:2.5}},data(){return{localBottomHeight:this.initialBottomHeight,localTopHeight:this.initialTopHeight,localBorderThickness:this.initialBorderThickness}},methods:{emitValues(){this.$emit("update-advanced",{bottomHeight:this.localBottomHeight,topHeight:this.localTopHeight,borderThickness:this.localBorderThickness})}}},C1={class:"mb-6 p-4 border border-gray-300 rounded"},P1={class:"flex-1 mb-4"},L1={class:"flex items-center space-x-2 mt-1"},D1={class:"flex-1 mb-4"},U1={class:"flex items-center space-x-2 mt-1"},I1={class:"flex-1 mb-4"};function N1(t,e,n,i,s,r){return tn(),gn("fieldset",C1,[e[22]||(e[22]=le("legend",{class:"px-2 text-lg font-semibold"},"Advanced Settings",-1)),le("form",{onSubmit:e[16]||(e[16]=Vg(()=>{},["prevent"])),class:"flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end mt-4",style:{width:"100%","max-width":"600px",margin:"0 auto","box-sizing":"border-box"}},[le("div",P1,[e[18]||(e[18]=le("label",{class:"block text-sm font-medium text-gray-700"},"Bottom Height (mm):",-1)),le("div",L1,[Je(le("input",{type:"range","onUpdate:modelValue":e[0]||(e[0]=o=>s.localBottomHeight=o),onInput:e[1]||(e[1]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",class:"w-full"},null,544),[[lt,s.localBottomHeight,void 0,{number:!0}]]),Je(le("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=o=>s.localBottomHeight=o),onBlur:e[3]||(e[3]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[4]||(e[4]=nr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[5]||(e[5]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",placeholder:"15",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[lt,s.localBottomHeight,void 0,{number:!0}]]),e[17]||(e[17]=mn(" mm "))])]),le("div",D1,[e[20]||(e[20]=le("label",{class:"block text-sm font-medium text-gray-700"},"Top Height (mm):",-1)),le("div",U1,[Je(le("input",{type:"range","onUpdate:modelValue":e[6]||(e[6]=o=>s.localTopHeight=o),onInput:e[7]||(e[7]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",class:"w-full"},null,544),[[lt,s.localTopHeight,void 0,{number:!0}]]),Je(le("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=o=>s.localTopHeight=o),onBlur:e[9]||(e[9]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[10]||(e[10]=nr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[11]||(e[11]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",placeholder:"25",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[lt,s.localTopHeight,void 0,{number:!0}]]),e[19]||(e[19]=mn(" mm "))])]),le("div",I1,[e[21]||(e[21]=le("label",{class:"block text-sm font-medium text-gray-700"},"Border Thickness (mm):",-1)),Je(le("input",{"onUpdate:modelValue":e[12]||(e[12]=o=>s.localBorderThickness=o),onBlur:e[13]||(e[13]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[14]||(e[14]=nr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[15]||(e[15]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"2.5",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[lt,s.localBorderThickness,void 0,{number:!0}]])])],32)])}const F1=mr(R1,[["render",N1]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="152",Fl={ROTATE:0,DOLLY:1,PAN:2},O1=0,Qu=1,B1=2,kg=1,H1=2,pi=3,zi=0,rn=1,vi=2,Bi=0,ir=1,eh=2,th=3,nh=4,z1=5,qs=100,V1=101,k1=102,ih=103,sh=104,G1=200,$1=201,W1=202,X1=203,Gg=204,$g=205,q1=206,j1=207,Y1=208,Z1=209,K1=210,J1=0,Q1=1,ey=2,af=3,ty=4,ny=5,iy=6,sy=7,Wg=0,ry=1,oy=2,yi=0,ay=1,ly=2,cy=3,fy=4,uy=5,Xg=300,lr=301,cr=302,lf=303,cf=304,Qa=306,ff=1e3,On=1001,uf=1002,jt=1003,rh=1004,Ol=1005,Sn=1006,hy=1007,lo=1008,vs=1009,dy=1010,py=1011,qg=1012,my=1013,us=1014,hs=1015,co=1016,gy=1017,_y=1018,sr=1020,vy=1021,Bn=1023,xy=1024,yy=1025,ms=1026,fr=1027,My=1028,Ey=1029,Sy=1030,by=1031,wy=1033,Bl=33776,Hl=33777,zl=33778,Vl=33779,oh=35840,ah=35841,lh=35842,ch=35843,Ty=36196,fh=37492,uh=37496,hh=37808,dh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,yh=37816,Mh=37817,Eh=37818,Sh=37819,bh=37820,wh=37821,kl=36492,Ay=36283,Th=36284,Ah=36285,Rh=36286,jg=3e3,gs=3001,Ry=3200,Cy=3201,Yg=0,Py=1,_s="",ze="srgb",ei="srgb-linear",Zg="display-p3",Gl=7680,Ly=519,Ch=35044,Ph="300 es",hf=1035;class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lh=1234567;const rr=Math.PI/180,fo=180/Math.PI;function gr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function kf(t,e){return(t%e+e)%e}function Dy(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Uy(t,e,n){return t!==e?(n-t)/(e-t):0}function Qr(t,e,n){return(1-n)*t+n*e}function Iy(t,e,n,i){return Qr(t,e,1-Math.exp(-n*i))}function Ny(t,e=1){return e-Math.abs(kf(t,e*2)-e)}function Fy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Oy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function By(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Hy(t,e){return t+Math.random()*(e-t)}function zy(t){return t*(.5-Math.random())}function Vy(t){t!==void 0&&(Lh=t);let e=Lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ky(t){return t*rr}function Gy(t){return t*fo}function df(t){return(t&t-1)===0&&t!==0}function $y(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Kg(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Wy(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),f=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*f,l*u,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*u,a*c);break;case"ZXZ":t.set(l*u,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*d,a*c);break;case"YXY":t.set(l*d,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*d,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vr(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Dh={DEG2RAD:rr,RAD2DEG:fo,generateUUID:gr,clamp:Zt,euclideanModulo:kf,mapLinear:Dy,inverseLerp:Uy,lerp:Qr,damp:Iy,pingpong:Ny,smoothstep:Fy,smootherstep:Oy,randInt:By,randFloat:Hy,randFloatSpread:zy,seededRandom:Vy,degToRad:ky,radToDeg:Gy,isPowerOfTwo:df,ceilPowerOfTwo:$y,floorPowerOfTwo:Kg,setQuaternionFromProperEuler:Wy,normalize:Jt,denormalize:Vr};class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],M=s[2],E=s[5],T=s[8];return r[0]=o*g+a*S+l*M,r[3]=o*m+a*y+l*E,r[6]=o*p+a*x+l*T,r[1]=c*g+f*S+u*M,r[4]=c*m+f*y+u*E,r[7]=c*p+f*x+u*T,r[2]=h*g+d*S+_*M,r[5]=h*m+d*y+_*E,r[8]=h*p+d*x+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*r,d=c*r-o*l,_=n*u+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(s*c-f*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(f*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=d*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($l.makeScale(e,n)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,n){return this.premultiply($l.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Ye;function Jg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Uh={};function eo(t){t in Uh||(Uh[t]=!0,console.warn(t))}function or(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Xy=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qy=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jy(t){return t.convertSRGBToLinear().applyMatrix3(qy)}function Yy(t){return t.applyMatrix3(Xy).convertLinearToSRGB()}const Zy={[ei]:t=>t,[ze]:t=>t.convertSRGBToLinear(),[Zg]:jy},Ky={[ei]:t=>t,[ze]:t=>t.convertLinearToSRGB(),[Zg]:Yy},Ln={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ei},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zy[e],s=Ky[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let bs;class Qg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Na("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=or(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(or(n[i]/255)*255):n[i]=or(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class e0{constructor(e=null){this.isSource=!0,this.uuid=gr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xl(s[o].image)):r.push(Xl(s[o]))}else r=Xl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Xl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jy=0;class vn extends Ms{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=On,s=On,r=Sn,o=lo,a=Bn,l=vs,c=vn.DEFAULT_ANISOTROPY,f=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=gr(),this.name="",this.source=new e0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===gs?ze:_s),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?gs:jg}set encoding(e){eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gs?ze:_s}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Xg;vn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(d+1)/2,M=(p+1)/2,E=(f+h)/4,T=(u+g)/4,L=(_+m)/4;return y>x&&y>M?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=T/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=L/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=T/r,s=L/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(h-f)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xs extends Ms{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===gs?ze:_s),this.texture=new vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new e0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class t0 extends vn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qy extends vn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(u!==g||l!==h||c!==d||f!==_){let m=1-a;const p=l*h+c*d+f*_+u*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,p*S);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const x=a*S;if(l=l*m+h*x,c=c*m+d*x,f=f*m+_*x,u=u*m+g*x,m===1-a){const M=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=M,c*=M,f*=M,u*=M}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],u=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+f*u+l*d-c*h,e[n+1]=l*_+f*h+c*u-a*d,e[n+2]=c*_+f*d+a*h-l*u,e[n+3]=f*_-a*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),u=a(r/2),h=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*f*u+c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u-h*d*_;break;case"YXZ":this._x=h*f*u+c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u+h*d*_;break;case"ZXY":this._x=h*f*u-c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u-h*d*_;break;case"ZYX":this._x=h*f*u-c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u+h*d*_;break;case"YZX":this._x=h*f*u+c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u-h*d*_;break;case"XZY":this._x=h*f*u-c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],u=n[10],h=i+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ih.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*s-a*i,f=l*i+a*n-r*s,u=l*s+r*i-o*n,h=-r*n-o*i-a*s;return this.x=c*l+h*-r+f*-a-u*-o,this.y=f*l+h*-o+u*-r-c*-a,this.z=u*l+h*-a+c*-o-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new k,Ih=new _r;class _o{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox),ws.applyMatrix4(e.matrixWorld),this.union(ws);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)si.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(si)}else s.boundingBox===null&&s.computeBoundingBox(),ws.copy(s.boundingBox),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Co.subVectors(this.max,Rr),Ts.subVectors(e.a,Rr),As.subVectors(e.b,Rr),Rs.subVectors(e.c,Rr),bi.subVectors(As,Ts),wi.subVectors(Rs,As),Ji.subVectors(Ts,Rs);let n=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-Ji.z,Ji.y,bi.z,0,-bi.x,wi.z,0,-wi.x,Ji.z,0,-Ji.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-Ji.y,Ji.x,0];return!jl(n,Ts,As,Rs,Co)||(n=[1,0,0,0,1,0,0,0,1],!jl(n,Ts,As,Rs,Co))?!1:(Po.crossVectors(bi,wi),n=[Po.x,Po.y,Po.z],jl(n,Ts,As,Rs,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new k,new k,new k,new k,new k,new k,new k,new k],si=new k,ws=new _o,Ts=new k,As=new k,Rs=new k,bi=new k,wi=new k,Ji=new k,Rr=new k,Co=new k,Po=new k,Qi=new k;function jl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Qi.fromArray(t,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=n.dot(Qi),f=i.dot(Qi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const eM=new _o,Cr=new k,Yl=new k;class el{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const n=Cr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Yl)),this.expandByPoint(Cr.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new k,Zl=new k,Lo=new k,Ti=new k,Kl=new k,Do=new k,Jl=new k;class n0{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Zl.copy(e).add(n).multiplyScalar(.5),Lo.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Zl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Lo),a=Ti.dot(this.direction),l=-Ti.dot(Lo),c=Ti.lengthSq(),f=Math.abs(1-o*o);let u,h,d,_;if(f>0)if(u=o*l-a,h=o*a-l,_=r*f,u>=0)if(h>=-_)if(h<=_){const g=1/f;u*=g,h*=g,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zl).addScaledVector(Lo,h),d}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,s,r){Kl.subVectors(n,e),Do.subVectors(i,e),Jl.crossVectors(Kl,Do);let o=this.direction.dot(Jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(Do.crossVectors(Ti,Do));if(l<0)return null;const c=a*this.direction.dot(Kl.cross(Ti));if(c<0||l+c>o)return null;const f=-a*Ti.dot(Jl);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,l,c,f,u,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*f,d=o*u,_=a*f,g=a*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=d+_*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=_+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,d=l*u,_=c*f,g=c*u;n[0]=h+g*a,n[4]=_*a-d,n[8]=o*c,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=d*a-_,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,d=l*u,_=c*f,g=c*u;n[0]=h-g*a,n[4]=-o*u,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*f,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,d=o*u,_=a*f,g=a*u;n[0]=l*f,n[4]=_*c-d,n[8]=h*c+g,n[1]=l*u,n[5]=g*c+h,n[9]=d*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;n[0]=l*f,n[4]=g-h*u,n[8]=_*u+d,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=d*u+_,n[10]=h-g*u}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=h*u+g,n[5]=o*f,n[9]=d*u-_,n[2]=_*u-d,n[6]=a*f,n[10]=g*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,n,i){const s=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Ai.crossVectors(i,an),Ai.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ai.crossVectors(i,an)),Ai.normalize(),Uo.crossVectors(an,Ai),s[0]=Ai.x,s[4]=Uo.x,s[8]=an.x,s[1]=Ai.y,s[5]=Uo.y,s[9]=an.y,s[2]=Ai.z,s[6]=Uo.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],y=i[7],x=i[11],M=i[15],E=s[0],T=s[4],L=s[8],v=s[12],w=s[1],N=s[5],U=s[9],I=s[13],F=s[2],B=s[6],z=s[10],G=s[14],W=s[3],oe=s[7],ee=s[11],be=s[15];return r[0]=o*E+a*w+l*F+c*W,r[4]=o*T+a*N+l*B+c*oe,r[8]=o*L+a*U+l*z+c*ee,r[12]=o*v+a*I+l*G+c*be,r[1]=f*E+u*w+h*F+d*W,r[5]=f*T+u*N+h*B+d*oe,r[9]=f*L+u*U+h*z+d*ee,r[13]=f*v+u*I+h*G+d*be,r[2]=_*E+g*w+m*F+p*W,r[6]=_*T+g*N+m*B+p*oe,r[10]=_*L+g*U+m*z+p*ee,r[14]=_*v+g*I+m*G+p*be,r[3]=S*E+y*w+x*F+M*W,r[7]=S*T+y*N+x*B+M*oe,r[11]=S*L+y*U+x*z+M*ee,r[15]=S*v+y*I+x*G+M*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*a*h+i*c*h+s*a*d-i*l*d)+g*(+n*l*d-n*c*h+r*o*h-s*o*d+s*c*f-r*l*f)+m*(+n*c*u-n*a*d-r*o*u+i*o*d+r*a*f-i*c*f)+p*(-s*a*f-n*l*u+n*a*h+s*o*u-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=u*m*c-g*h*c+g*l*d-a*m*d-u*l*p+a*h*p,y=_*h*c-f*m*c-_*l*d+o*m*d+f*l*p-o*h*p,x=f*g*c-_*u*c+_*a*d-o*g*d-f*a*p+o*u*p,M=_*u*l-f*g*l-_*a*h+o*g*h+f*a*m-o*u*m,E=n*S+i*y+s*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(g*h*r-u*m*r-g*s*d+i*m*d+u*s*p-i*h*p)*T,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*p+i*l*p)*T,e[3]=(u*l*r-a*h*r-u*s*c+i*h*c+a*s*d-i*l*d)*T,e[4]=y*T,e[5]=(f*m*r-_*h*r+_*s*d-n*m*d-f*s*p+n*h*p)*T,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*p-n*l*p)*T,e[7]=(o*h*r-f*l*r+f*s*c-n*h*c-o*s*d+n*l*d)*T,e[8]=x*T,e[9]=(_*u*r-f*g*r-_*i*d+n*g*d+f*i*p-n*u*p)*T,e[10]=(o*g*r-_*a*r+_*i*c-n*g*c-o*i*p+n*a*p)*T,e[11]=(f*a*r-o*u*r-f*i*c+n*u*c+o*i*d-n*a*d)*T,e[12]=M*T,e[13]=(f*g*s-_*u*s+_*i*h-n*g*h-f*i*m+n*u*m)*T,e[14]=(_*a*s-o*g*s-_*i*l+n*g*l+o*i*m-n*a*m)*T,e[15]=(o*u*s-f*a*s+f*i*l-n*u*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,f=o+o,u=a+a,h=r*c,d=r*f,_=r*u,g=o*f,m=o*u,p=a*u,S=l*c,y=l*f,x=l*u,M=i.x,E=i.y,T=i.z;return s[0]=(1-(g+p))*M,s[1]=(d+x)*M,s[2]=(_-y)*M,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(_+y)*T,s[9]=(m-S)*T,s[10]=(1-(h+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const c=1/r,f=1/o,u=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=f,Dn.elements[5]*=f,Dn.elements[6]*=f,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,n.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,l=2*r/(n-e),c=2*r/(i-s),f=(n+e)/(n-e),u=(i+s)/(i-s),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,l=1/(n-e),c=1/(i-s),f=1/(o-r),u=(n+e)*l,h=(i+s)*c,d=(o+r)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cs=new k,Dn=new St,tM=new k(0,0,0),nM=new k(1,1,1),Ai=new k,Uo=new k,an=new k,Nh=new St,Fh=new _r;class tl{constructor(e=0,n=0,i=0,s=tl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tl.DEFAULT_ORDER="XYZ";class i0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const Oh=new k,Ps=new _r,oi=new St,Io=new k,Pr=new k,sM=new k,rM=new _r,Bh=new k(1,0,0),Hh=new k(0,1,0),zh=new k(0,0,1),oM={type:"added"},Vh={type:"removed"};class Dt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new k,n=new tl,i=new _r,s=new k(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Ye}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new i0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,n){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Io.copy(e):Io.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Pr,Io,this.up):oi.lookAt(Io,Pr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(oi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Vh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Vh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,rM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new k(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new k,ai=new k,Ql=new k,li=new k,Ls=new k,Ds=new k,kh=new k,ec=new k,tc=new k,nc=new k;let No=!1;class bn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Un.subVectors(e,n),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Un.subVectors(s,n),ai.subVectors(i,n),Ql.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(ai),l=Un.dot(Ql),c=ai.dot(ai),f=ai.dot(Ql),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,d=(c*l-a*f)*h,_=(o*f-a*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,li),li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,n,i,s,r,o,a,l){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),this.getInterpolation(e,n,i,s,r,o,a,l)}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,li),l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l}static isFrontFacing(e,n,i,s){return Un.subVectors(i,n),ai.subVectors(e,n),Un.cross(ai).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Un.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return No===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),No=!0),bn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Ds.subVectors(r,i),ec.subVectors(e,i);const l=Ls.dot(ec),c=Ds.dot(ec);if(l<=0&&c<=0)return n.copy(i);tc.subVectors(e,s);const f=Ls.dot(tc),u=Ds.dot(tc);if(f>=0&&u<=f)return n.copy(s);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ls,o);nc.subVectors(e,r);const d=Ls.dot(nc),_=Ds.dot(nc);if(_>=0&&d<=_)return n.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ds,a);const m=f*_-d*u;if(m<=0&&u-f>=0&&d-_>=0)return kh.subVectors(r,s),a=(u-f)/(u-f+(d-_)),n.copy(s).addScaledVector(kh,a);const p=1/(m+g+h);return o=g*p,a=h*p,n.copy(i).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let aM=0;class vr extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=ir,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gg,this.blendDst=$g,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=af,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ly,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gl,this.stencilZFail=Gl,this.stencilZPass=Gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function ic(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ln.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Ln.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ln.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Ln.workingColorSpace){if(e=kf(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ic(o,r,e+1/3),this.g=ic(o,r,e),this.b=ic(o,r,e-1/3)}return Ln.toWorkingColorSpace(this,s),this}setStyle(e,n=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ze){const i=s0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Wl(e.r),this.g=Wl(e.g),this.b=Wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Ln.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Zt(Ht.r*255,0,255))*65536+Math.round(Zt(Ht.g*255,0,255))*256+Math.round(Zt(Ht.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ln.workingColorSpace){Ln.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ln.workingColorSpace){return Ln.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ze){Ln.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,s=Ht.b;return e!==ze?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(In),In.h+=e,In.s+=n,In.l+=i,this.setHSL(In.h,In.s,In.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(In),e.getHSL(Fo);const i=Qr(In.h,Fo.h,n),s=Qr(In.s,Fo.s,n),r=Qr(In.l,Fo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new nt;nt.NAMES=s0;class r0 extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new k,Oo=new Ge;class xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ch,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oo.fromBufferAttribute(this,n),Oo.applyMatrix3(e),this.setXY(n,Oo.x,Oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class o0 extends xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class a0 extends xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tn extends xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let lM=0;const En=new St,sc=new Dt,Us=new k,ln=new _o,Lr=new _o,Ct=new k;class kn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jg(e)?a0:o0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(ln.min,Lr.min),ln.expandByPoint(Ct),Ct.addVectors(ln.max,Lr.max),ln.expandByPoint(Ct)):(ln.expandByPoint(Lr.min),ln.expandByPoint(Lr.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ct.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),Ct.add(Us)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<a;w++)c[w]=new k,f[w]=new k;const u=new k,h=new k,d=new k,_=new Ge,g=new Ge,m=new Ge,p=new k,S=new k;function y(w,N,U){u.fromArray(s,w*3),h.fromArray(s,N*3),d.fromArray(s,U*3),_.fromArray(o,w*2),g.fromArray(o,N*2),m.fromArray(o,U*2),h.sub(u),d.sub(u),g.sub(_),m.sub(_);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(I),S.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(I),c[w].add(p),c[N].add(p),c[U].add(p),f[w].add(S),f[N].add(S),f[U].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,N=x.length;w<N;++w){const U=x[w],I=U.start,F=U.count;for(let B=I,z=I+F;B<z;B+=3)y(i[B+0],i[B+1],i[B+2])}const M=new k,E=new k,T=new k,L=new k;function v(w){T.fromArray(r,w*3),L.copy(T);const N=c[w];M.copy(N),M.sub(T.multiplyScalar(T.dot(N))).normalize(),E.crossVectors(L,N);const I=E.dot(f[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=I}for(let w=0,N=x.length;w<N;++w){const U=x[w],I=U.start,F=U.count;for(let B=I,z=I+F;B<z;B+=3)v(i[B+0]),v(i[B+1]),v(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,f=new k,u=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*f;for(let p=0;p<f;p++)h[_++]=c[d++]}return new xn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(n))}const r=e.morphAttributes;for(const c in r){const f=[],u=r[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gh=new St,Wn=new n0,Bo=new el,$h=new k,Is=new k,Ns=new k,Fs=new k,rc=new k,Ho=new k,zo=new Ge,Vo=new Ge,ko=new Ge,Wh=new k,Xh=new k,qh=new k,Go=new k,$o=new k;class xi extends Dt{constructor(e=new kn,n=new r0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=a[l],u=r[l];f!==0&&(rc.fromBufferAttribute(u,e),o?Ho.addScaledVector(rc,f):Ho.addScaledVector(rc.sub(n),f))}n.add(Ho)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Bo.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Bo,$h)===null||Wn.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(Gh),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,_=u.length;d<_;d++){const g=u[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=p,x=S;y<x;y+=3){const M=o.getX(y),E=o.getX(y+1),T=o.getX(y+2);i=Wo(this,m,e,Wn,l,c,f,M,E,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);i=Wo(this,r,e,Wn,l,c,f,p,S,y),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,_=u.length;d<_;d++){const g=u[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let y=p,x=S;y<x;y+=3){const M=y,E=y+1,T=y+2;i=Wo(this,m,e,Wn,l,c,f,M,E,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=g,S=g+1,y=g+2;i=Wo(this,r,e,Wn,l,c,f,p,S,y),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function cM(t,e,n,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;$o.copy(a),$o.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($o);return c<n.near||c>n.far?null:{distance:c,point:$o.clone(),object:t}}function Wo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Is),t.getVertexPosition(l,Ns),t.getVertexPosition(c,Fs);const f=cM(t,e,n,i,Is,Ns,Fs,Go);if(f){s&&(zo.fromBufferAttribute(s,a),Vo.fromBufferAttribute(s,l),ko.fromBufferAttribute(s,c),f.uv=bn.getInterpolation(Go,Is,Ns,Fs,zo,Vo,ko,new Ge)),r&&(zo.fromBufferAttribute(r,a),Vo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,c),f.uv1=bn.getInterpolation(Go,Is,Ns,Fs,zo,Vo,ko,new Ge),f.uv2=f.uv1),o&&(Wh.fromBufferAttribute(o,a),Xh.fromBufferAttribute(o,l),qh.fromBufferAttribute(o,c),f.normal=bn.getInterpolation(Go,Is,Ns,Fs,Wh,Xh,qh,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new k,materialIndex:0};bn.getNormal(Is,Ns,Fs,u.normal),f.face=u}return f}class vo extends kn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(f,3)),this.setAttribute("uv",new Tn(u,2));function _(g,m,p,S,y,x,M,E,T,L,v){const w=x/T,N=M/L,U=x/2,I=M/2,F=E/2,B=T+1,z=L+1;let G=0,W=0;const oe=new k;for(let ee=0;ee<z;ee++){const be=ee*N-I;for(let ce=0;ce<B;ce++){const Y=ce*w-U;oe[g]=Y*S,oe[m]=be*y,oe[p]=F,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=E>0?1:-1,f.push(oe.x,oe.y,oe.z),u.push(ce/T),u.push(1-ee/L),G+=1}}for(let ee=0;ee<L;ee++)for(let be=0;be<T;be++){const ce=h+be+B*ee,Y=h+be+B*(ee+1),se=h+(be+1)+B*(ee+1),ge=h+(be+1)+B*ee;l.push(ce,Y,ge),l.push(Y,se,ge),W+=6}a.addGroup(d,W,v),d+=W,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=ur(t[n]);for(const s in i)e[s]=i[s]}return e}function fM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function l0(t){return t.getRenderTarget()===null?t.outputColorSpace:ei}const uM={clone:ur,merge:Xt};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class c0 extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends c0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,Bs=1;class pM extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new wn(Os,Bs,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new wn(Os,Bs,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new wn(Os,Bs,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wn(Os,Bs,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new wn(Os,Bs,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new wn(Os,Bs,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,f=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=yi,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(f),e.toneMapping=u,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class f0 extends vn{constructor(e,n,i,s,r,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:lr,super(e,n,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mM extends xs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gs?ze:_s),this.texture=new f0(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vo(5,5,5),r=new ys({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Bi});r.uniforms.tEquirect.value=n;const o=new xi(s,r),a=n.minFilter;return n.minFilter===lo&&(n.minFilter=Sn),new pM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const oc=new k,gM=new k,_M=new Ye;class ss{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=oc.subVectors(i,n).cross(gM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(oc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_M.getNormalMatrix(e),s=this.coplanarPoint(oc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new el,Xo=new k;class Gf{constructor(e=new ss,n=new ss,i=new ss,s=new ss,r=new ss,o=new ss){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],f=i[6],u=i[7],h=i[8],d=i[9],_=i[10],g=i[11],m=i[12],p=i[13],S=i[14],y=i[15];return n[0].setComponents(a-s,u-l,g-h,y-m).normalize(),n[1].setComponents(a+s,u+l,g+h,y+m).normalize(),n[2].setComponents(a+r,u+c,g+d,y+p).normalize(),n[3].setComponents(a-r,u-c,g-d,y-p).normalize(),n[4].setComponents(a-o,u-f,g-_,y-S).normalize(),n[5].setComponents(a+o,u+f,g+_,y+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function vM(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,f){const u=c.array,h=c.usage,d=t.createBuffer();t.bindBuffer(f,d),t.bufferData(f,u,h),c.onUploadCallback();let _;if(u instanceof Float32Array)_=t.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=t.SHORT;else if(u instanceof Uint32Array)_=t.UNSIGNED_INT;else if(u instanceof Int32Array)_=t.INT;else if(u instanceof Int8Array)_=t.BYTE;else if(u instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,f,u){const h=f.array,d=f.updateRange;t.bindBuffer(u,c),d.count===-1?t.bufferSubData(u,0,h):(n?t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,s(c,f)):u.version<c.version&&(r(u.buffer,c,f),u.version=c.version)}return{get:o,remove:a,update:l}}class $f extends kn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,u=e/a,h=n/l,d=[],_=[],g=[],m=[];for(let p=0;p<f;p++){const S=p*h-o;for(let y=0;y<c;y++){const x=y*u-r;_.push(x,-S,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,x=S+c*(p+1),M=S+1+c*(p+1),E=S+1+c*p;d.push(y,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.width,e.height,e.widthSegments,e.heightSegments)}}var xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM="vec3 transformed = vec3( position );",TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RM=`#ifdef USE_IRIDESCENCE
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
#endif`,CM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,BM=`#define PI 3.141592653589793
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
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zM=`vec3 transformedNormal = objectNormal;
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
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
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
}`,iE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
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
#endif`,lE=`#if defined( USE_ENVMAP )
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
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
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
#endif`,pE=`struct PhysicalMaterial {
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
}`,mE=`
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,EE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wE=`#if defined( USE_POINTS_UV )
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
#endif`,TE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CE=`#ifdef USE_MORPHNORMALS
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
#endif`,PE=`#ifdef USE_MORPHTARGETS
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
#endif`,LE=`#ifdef USE_MORPHTARGETS
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
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OE=`#ifdef USE_NORMALMAP
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
#endif`,BE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
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
}`,eS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,sS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lS=`#ifdef USE_TRANSMISSION
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
#endif`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#ifdef USE_UV
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
#endif`,uS=`#ifdef USE_UV
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
#endif`,hS=`#ifdef USE_UV
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yS=`#include <common>
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
}`,MS=`#if DEPTH_PACKING == 3200
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
}`,ES=`#define DISTANCE
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
}`,SS=`#define DISTANCE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TS=`uniform float scale;
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
}`,AS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,CS=`uniform vec3 diffuse;
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
}`,PS=`#define LAMBERT
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
}`,LS=`#define LAMBERT
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
}`,DS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,IS=`#define NORMAL
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
}`,NS=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,OS=`#define PHONG
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
}`,BS=`#define STANDARD
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
}`,HS=`#define STANDARD
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
}`,zS=`#define TOON
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
}`,VS=`#define TOON
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
}`,kS=`uniform float size;
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
}`,GS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,WS=`uniform vec3 color;
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
}`,XS=`uniform float rotation;
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
}`,qS=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:MM,alphatest_pars_fragment:EM,aomap_fragment:SM,aomap_pars_fragment:bM,begin_vertex:wM,beginnormal_vertex:TM,bsdfs:AM,iridescence_fragment:RM,bumpmap_pars_fragment:CM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:IM,color_pars_fragment:NM,color_pars_vertex:FM,color_vertex:OM,common:BM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:zM,displacementmap_pars_vertex:VM,displacementmap_vertex:kM,emissivemap_fragment:GM,emissivemap_pars_fragment:$M,encodings_fragment:WM,encodings_pars_fragment:XM,envmap_fragment:qM,envmap_common_pars_fragment:jM,envmap_pars_fragment:YM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:lE,envmap_vertex:KM,fog_vertex:JM,fog_pars_vertex:QM,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_fragment:iE,lightmap_pars_fragment:sE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:oE,lights_pars_begin:aE,lights_toon_fragment:cE,lights_toon_pars_fragment:fE,lights_phong_fragment:uE,lights_phong_pars_fragment:hE,lights_physical_fragment:dE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:_E,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:SE,map_particle_fragment:bE,map_particle_pars_fragment:wE,metalnessmap_fragment:TE,metalnessmap_pars_fragment:AE,morphcolor_vertex:RE,morphnormal_vertex:CE,morphtarget_pars_vertex:PE,morphtarget_vertex:LE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:IE,normal_pars_vertex:NE,normal_vertex:FE,normalmap_pars_fragment:OE,clearcoat_normal_fragment_begin:BE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:VE,output_fragment:kE,packing:GE,premultiplied_alpha_fragment:$E,project_vertex:WE,dithering_fragment:XE,dithering_pars_fragment:qE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:ZE,shadowmap_pars_vertex:KE,shadowmap_vertex:JE,shadowmask_pars_fragment:QE,skinbase_vertex:eS,skinning_pars_vertex:tS,skinning_vertex:nS,skinnormal_vertex:iS,specularmap_fragment:sS,specularmap_pars_fragment:rS,tonemapping_fragment:oS,tonemapping_pars_fragment:aS,transmission_fragment:lS,transmission_pars_fragment:cS,uv_pars_fragment:fS,uv_pars_vertex:uS,uv_vertex:hS,worldpos_vertex:dS,background_vert:pS,background_frag:mS,backgroundCube_vert:gS,backgroundCube_frag:_S,cube_vert:vS,cube_frag:xS,depth_vert:yS,depth_frag:MS,distanceRGBA_vert:ES,distanceRGBA_frag:SS,equirect_vert:bS,equirect_frag:wS,linedashed_vert:TS,linedashed_frag:AS,meshbasic_vert:RS,meshbasic_frag:CS,meshlambert_vert:PS,meshlambert_frag:LS,meshmatcap_vert:DS,meshmatcap_frag:US,meshnormal_vert:IS,meshnormal_frag:NS,meshphong_vert:FS,meshphong_frag:OS,meshphysical_vert:BS,meshphysical_frag:HS,meshtoon_vert:zS,meshtoon_frag:VS,points_vert:kS,points_frag:GS,shadow_vert:$S,shadow_frag:WS,sprite_vert:XS,sprite_frag:qS},xe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaTest:{value:0}}},Zn={basic:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xt([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xt([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xt([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Xt([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Xt([xe.lights,xe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Zn.physical={uniforms:Xt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const qo={r:0,b:0,g:0};function jS(t,e,n,i,s,r,o){const a=new nt(0);let l=r===!0?0:1,c,f,u=null,h=0,d=null;function _(m,p){let S=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?n:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),S=!0),t.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),S=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),S=!0;break}(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Qa)?(f===void 0&&(f=new xi(new vo(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:ur(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=y.colorSpace!==ze,(u!==y||h!==y.version||d!==t.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xi(new $f(2,2),new ys({name:"BackgroundMaterial",uniforms:ur(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(qo,l0(t)),i.buffers.color.setClear(qo.r,qo.g,qo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function YS(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,f=!1;function u(F,B,z,G,W){let oe=!1;if(o){const ee=g(G,z,B);c!==ee&&(c=ee,d(c.object)),oe=p(F,G,z,W),oe&&S(F,G,z,W)}else{const ee=B.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==ee)&&(c.geometry=G.id,c.program=z.id,c.wireframe=ee,oe=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),(oe||f)&&(f=!1,L(F,B,z,G),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?t.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,B,z){const G=z.wireframe===!0;let W=a[F.id];W===void 0&&(W={},a[F.id]=W);let oe=W[B.id];oe===void 0&&(oe={},W[B.id]=oe);let ee=oe[G];return ee===void 0&&(ee=m(h()),oe[G]=ee),ee}function m(F){const B=[],z=[],G=[];for(let W=0;W<s;W++)B[W]=0,z[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:G,object:F,attributes:{},index:null}}function p(F,B,z,G){const W=c.attributes,oe=B.attributes;let ee=0;const be=z.getAttributes();for(const ce in be)if(be[ce].location>=0){const se=W[ce];let ge=oe[ce];if(ge===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor)),se===void 0||se.attribute!==ge||ge&&se.data!==ge.data)return!0;ee++}return c.attributesNum!==ee||c.index!==G}function S(F,B,z,G){const W={},oe=B.attributes;let ee=0;const be=z.getAttributes();for(const ce in be)if(be[ce].location>=0){let se=oe[ce];se===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));const ge={};ge.attribute=se,se&&se.data&&(ge.data=se.data),W[ce]=ge,ee++}c.attributes=W,c.attributesNum=ee,c.index=G}function y(){const F=c.newAttributes;for(let B=0,z=F.length;B<z;B++)F[B]=0}function x(F){M(F,0)}function M(F,B){const z=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;z[F]=1,G[F]===0&&(t.enableVertexAttribArray(F),G[F]=1),W[F]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),W[F]=B)}function E(){const F=c.newAttributes,B=c.enabledAttributes;for(let z=0,G=B.length;z<G;z++)B[z]!==F[z]&&(t.disableVertexAttribArray(z),B[z]=0)}function T(F,B,z,G,W,oe){i.isWebGL2===!0&&(z===t.INT||z===t.UNSIGNED_INT)?t.vertexAttribIPointer(F,B,z,W,oe):t.vertexAttribPointer(F,B,z,G,W,oe)}function L(F,B,z,G){if(i.isWebGL2===!1&&(F.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=G.attributes,oe=z.getAttributes(),ee=B.defaultAttributeValues;for(const be in oe){const ce=oe[be];if(ce.location>=0){let Y=W[be];if(Y===void 0&&(be==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),be==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),Y!==void 0){const se=Y.normalized,ge=Y.itemSize,_e=n.get(Y);if(_e===void 0)continue;const A=_e.buffer,ue=_e.type,Se=_e.bytesPerElement;if(Y.isInterleavedBufferAttribute){const de=Y.data,Pe=de.stride,P=Y.offset;if(de.isInstancedInterleavedBuffer){for(let D=0;D<ce.locationSize;D++)M(ce.location+D,de.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let D=0;D<ce.locationSize;D++)x(ce.location+D);t.bindBuffer(t.ARRAY_BUFFER,A);for(let D=0;D<ce.locationSize;D++)T(ce.location+D,ge/ce.locationSize,ue,se,Pe*Se,(P+ge/ce.locationSize*D)*Se)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<ce.locationSize;de++)M(ce.location+de,Y.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<ce.locationSize;de++)x(ce.location+de);t.bindBuffer(t.ARRAY_BUFFER,A);for(let de=0;de<ce.locationSize;de++)T(ce.location+de,ge/ce.locationSize,ue,se,ge*Se,ge/ce.locationSize*de*Se)}}else if(ee!==void 0){const se=ee[be];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(ce.location,se);break;case 3:t.vertexAttrib3fv(ce.location,se);break;case 4:t.vertexAttrib4fv(ce.location,se);break;default:t.vertexAttrib1fv(ce.location,se)}}}}E()}function v(){U();for(const F in a){const B=a[F];for(const z in B){const G=B[z];for(const W in G)_(G[W].object),delete G[W];delete B[z]}delete a[F]}}function w(F){if(a[F.id]===void 0)return;const B=a[F.id];for(const z in B){const G=B[z];for(const W in G)_(G[W].object),delete G[W];delete B[z]}delete a[F.id]}function N(F){for(const B in a){const z=a[B];if(z[F.id]===void 0)continue;const G=z[F.id];for(const W in G)_(G[W].object),delete G[W];delete z[F.id]}}function U(){I(),f=!0,c!==l&&(c=l,d(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function ZS(t,e,n,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,f){t.drawArrays(r,c,f),n.update(f,r,1)}function l(c,f,u){if(u===0)return;let h,d;if(s)h=t,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,c,f,u),n.update(f,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function KS(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,x=o||e.has("OES_texture_float"),M=y&&x,E=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function JS(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ss,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=t.get(u);if(!s||_===null||_.length===0||r&&!m)r?f(null):c();else{const S=r?0:i,y=S*4;let x=p.clippingState||null;l.value=x,x=f(_,h,y,d);for(let M=0;M!==y;++M)x[M]=n[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==g;++y,x+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function QS(t){let e=new WeakMap;function n(o,a){return a===lf?o.mapping=lr:a===cf&&(o.mapping=cr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===lf||a===cf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class h0 extends c0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,jh=[.125,.215,.35,.446,.526,.582],ls=20,ac=new h0,Yh=new nt;let lc=null;const rs=(1+Math.sqrt(5))/2,Hs=1/rs,Zh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,rs,Hs),new k(0,rs,-Hs),new k(Hs,0,rs),new k(-Hs,0,rs),new k(rs,Hs,0),new k(-rs,Hs,0)];class Kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){lc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc),e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:co,format:Bn,colorSpace:ei,depthBuffer:!1},s=Jh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(r)),this._blurMaterial=tb(r,e,n)}return s}_compileMaterial(e){const n=new xi(this._lodPlanes[0],e);this._renderer.compile(n,ac)}_sceneToCubeUV(e,n,i,s){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Yh),f.toneMapping=yi,f.autoClear=!1;const d=new r0({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new xi(new vo,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Yh),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;jo(s,S*y,p>2?y:0,y,y),f.setRenderTarget(s),g&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===lr||e.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;jo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zh[(s-1)%Zh.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new xi(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),g=r/_,m=isFinite(r)?1+Math.floor(f*g):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let S=0;for(let T=0;T<ls;++T){const L=T/g,v=Math.exp(-L*L/2);p.push(v),T===0?S+=v:T<m&&(S+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const x=this._sizeLods[s],M=3*x*(s>y-js?s-y+js:0),E=4*(this._cubeSize-x);jo(n,M,E,3*x,2*x),l.setRenderTarget(n),l.render(u,ac)}}function eb(t){const e=[],n=[],i=[];let s=t;const r=t-js+1+jh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-js?l=jh[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),y=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,L=E>2?0:-1,v=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(v,g*_*E),y.set(h,m*_*E);const w=[E,E,E,E,E,E];x.set(w,p*_*E)}const M=new kn;M.setAttribute("position",new xn(S,g)),M.setAttribute("uv",new xn(y,m)),M.setAttribute("faceIndex",new xn(x,p)),e.push(M),s>js&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jh(t,e,n){const i=new xs(t,e,n);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function tb(t,e,n){const i=new Float32Array(ls),s=new k(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Qh(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ed(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function nb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lf||l===cf,f=l===lr||l===cr;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return n===null&&(n=new Kh(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||f&&u&&s(u)){n===null&&(n=new Kh(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ib(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sb(t,e,n,i){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(u){const h=u.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(u){const h=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,x=S.length;y<x;y+=3){const M=S[y+0],E=S[y+1],T=S[y+2];h.push(M,E,E,T,T,M)}}else{const S=_.array;g=_.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const M=y+0,E=y+1,T=y+2;h.push(M,E,E,T,T,M)}}const m=new(Jg(h)?a0:o0)(h,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function f(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function rb(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function f(h,d){t.drawElements(r,d,a,h*l),n.update(d,r,1)}function u(h,d,_){if(_===0)return;let g,m;if(s)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,a,h*l,_),n.update(d,r,_)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=u}function ob(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ab(t,e){return t[0]-e[0]}function lb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function cb(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,u){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(f);if(m===void 0||m.count!==g){let B=function(){I.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var d=B;m!==void 0&&m.texture.dispose();const y=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let v=0;y===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let w=f.attributes.position.count*v,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*N*4*g),I=new t0(U,w,N,g);I.type=hs,I.needsUpdate=!0;const F=v*4;for(let z=0;z<g;z++){const G=E[z],W=T[z],oe=L[z],ee=w*N*4*z;for(let be=0;be<G.count;be++){const ce=be*F;y===!0&&(o.fromBufferAttribute(G,be),U[ee+ce+0]=o.x,U[ee+ce+1]=o.y,U[ee+ce+2]=o.z,U[ee+ce+3]=0),x===!0&&(o.fromBufferAttribute(W,be),U[ee+ce+4]=o.x,U[ee+ce+5]=o.y,U[ee+ce+6]=o.z,U[ee+ce+7]=0),M===!0&&(o.fromBufferAttribute(oe,be),U[ee+ce+8]=o.x,U[ee+ce+9]=o.y,U[ee+ce+10]=o.z,U[ee+ce+11]=oe.itemSize===4?o.w:1)}}m={count:g,texture:I,size:new Ge(w,N)},r.set(f,m),f.addEventListener("dispose",B)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const S=f.morphTargetsRelative?1:1-p;u.getUniforms().setValue(t,"morphTargetBaseInfluence",S),u.getUniforms().setValue(t,"morphTargetInfluences",h),u.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[f.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];i[f.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(lb);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ab);const m=f.morphAttributes.position,p=f.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const M=a[x],E=M[0],T=M[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+x)!==m[E]&&f.setAttribute("morphTarget"+x,m[E]),p&&f.getAttribute("morphNormal"+x)!==p[E]&&f.setAttribute("morphNormal"+x,p[E]),s[x]=T,S+=T):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),p&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),s[x]=0)}const y=f.morphTargetsRelative?1:1-S;u.getUniforms().setValue(t,"morphTargetBaseInfluence",y),u.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function fb(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);return s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const d0=new vn,p0=new t0,m0=new Qy,g0=new f0,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function xr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nl(t,e){let n=nd[e];n===void 0&&(n=new Int32Array(e),nd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function mb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;rd.set(i),t.uniformMatrix2fv(this.addr,!1,rd),Tt(n,i)}}function gb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;sd.set(i),t.uniformMatrix3fv(this.addr,!1,sd),Tt(n,i)}}function _b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;id.set(i),t.uniformMatrix4fv(this.addr,!1,id),Tt(n,i)}}function vb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function Mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function Eb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function Tb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||d0,s)}function Ab(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||m0,s)}function Rb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||g0,s)}function Cb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||p0,s)}function Pb(t){switch(t){case 5126:return ub;case 35664:return hb;case 35665:return db;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return vb;case 35667:case 35671:return xb;case 35668:case 35672:return yb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Sb;case 36295:return bb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}function Lb(t,e){t.uniform1fv(this.addr,e)}function Db(t,e){const n=xr(e,this.size,2);t.uniform2fv(this.addr,n)}function Ub(t,e){const n=xr(e,this.size,3);t.uniform3fv(this.addr,n)}function Ib(t,e){const n=xr(e,this.size,4);t.uniform4fv(this.addr,n)}function Nb(t,e){const n=xr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Fb(t,e){const n=xr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ob(t,e){const n=xr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Bb(t,e){t.uniform1iv(this.addr,e)}function Hb(t,e){t.uniform2iv(this.addr,e)}function zb(t,e){t.uniform3iv(this.addr,e)}function Vb(t,e){t.uniform4iv(this.addr,e)}function kb(t,e){t.uniform1uiv(this.addr,e)}function Gb(t,e){t.uniform2uiv(this.addr,e)}function $b(t,e){t.uniform3uiv(this.addr,e)}function Wb(t,e){t.uniform4uiv(this.addr,e)}function Xb(t,e,n){const i=this.cache,s=e.length,r=nl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||d0,r[o])}function qb(t,e,n){const i=this.cache,s=e.length,r=nl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||m0,r[o])}function jb(t,e,n){const i=this.cache,s=e.length,r=nl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||g0,r[o])}function Yb(t,e,n){const i=this.cache,s=e.length,r=nl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||p0,r[o])}function Zb(t){switch(t){case 5126:return Lb;case 35664:return Db;case 35665:return Ub;case 35666:return Ib;case 35674:return Nb;case 35675:return Fb;case 35676:return Ob;case 5124:case 35670:return Bb;case 35667:case 35671:return Hb;case 35668:case 35672:return zb;case 35669:case 35673:return Vb;case 5125:return kb;case 36294:return Gb;case 36295:return $b;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Yb}}class Kb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Pb(n.type)}}class Jb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Zb(n.type)}}class Qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function od(t,e){t.seq.push(e),t.map[e.id]=e}function ew(t,e,n){const i=t.name,s=i.length;for(cc.lastIndex=0;;){const r=cc.exec(i),o=cc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){od(n,c===void 0?new Kb(a,t,e):new Jb(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new Qb(a),od(n,u)),n=u}}}class Sa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);ew(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function ad(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let tw=0;function nw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function iw(t){switch(t){case ei:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function ld(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+nw(t.getShaderSource(e),o)}else return s}function sw(t,e){const n=iw(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function rw(t,e){let n;switch(e){case ay:n="Linear";break;case ly:n="Reinhard";break;case cy:n="OptimizedCineon";break;case fy:n="ACESFilmic";break;case uy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ow(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function aw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function kr(t){return t!==""}function cd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(t){return t.replace(cw,fw)}function fw(t,e){const n=ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return pf(n)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(t){return t.replace(uw,hw)}function hw(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===H1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function pw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function gw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wg:e="ENVMAP_BLENDING_MULTIPLY";break;case ry:e="ENVMAP_BLENDING_MIX";break;case oy:e="ENVMAP_BLENDING_ADD";break}return e}function _w(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vw(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=dw(n),c=pw(n),f=mw(n),u=gw(n),h=_w(n),d=n.isWebGL2?"":ow(n),_=aw(r),g=s.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[hd(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[d,hd(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?ke.tonemapping_pars_fragment:"",n.toneMapping!==yi?rw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,sw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kr).join(`
`)),o=pf(o),o=cd(o,n),o=fd(o,n),a=pf(a),a=cd(a,n),a=fd(a,n),o=ud(o),a=ud(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,x=S+p+a,M=ad(s,s.VERTEX_SHADER,y),E=ad(s,s.FRAGMENT_SHADER,x);if(s.attachShader(g,M),s.attachShader(g,E),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),t.debug.checkShaderErrors){const v=s.getProgramInfoLog(g).trim(),w=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(E).trim();let U=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,M,E);else{const F=ld(s,M,"vertex"),B=ld(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+F+`
`+B)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:U,programLog:v,vertexShader:{log:w,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(M),s.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new Sa(s,g)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=lw(s,g)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=tw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let xw=0;class yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Mw(e),n.set(e,i)),i}}class Mw{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function Ew(t,e,n,i,s,r,o){const a=new i0,l=new yw,c=[],f=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,w,N,U,I){const F=U.fog,B=I.geometry,z=v.isMeshStandardMaterial?U.environment:null,G=(v.isMeshStandardMaterial?n:e).get(v.envMap||z),W=G&&G.mapping===Qa?G.image.height:null,oe=_[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,be=ee!==void 0?ee.length:0;let ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let Y,se,ge,_e;if(oe){const st=Zn[oe];Y=st.vertexShader,se=st.fragmentShader}else Y=v.vertexShader,se=v.fragmentShader,l.update(v),ge=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const A=t.getRenderTarget(),ue=I.isInstancedMesh===!0,Se=!!v.map,de=!!v.matcap,Pe=!!G,P=!!v.aoMap,D=!!v.lightMap,V=!!v.bumpMap,ie=!!v.normalMap,Q=!!v.displacementMap,ne=!!v.emissiveMap,me=!!v.metalnessMap,re=!!v.roughnessMap,fe=v.clearcoat>0,ae=v.iridescence>0,R=v.sheen>0,b=v.transmission>0,H=fe&&!!v.clearcoatMap,q=fe&&!!v.clearcoatNormalMap,Z=fe&&!!v.clearcoatRoughnessMap,he=ae&&!!v.iridescenceMap,ye=ae&&!!v.iridescenceThicknessMap,Me=R&&!!v.sheenColorMap,j=R&&!!v.sheenRoughnessMap,Te=!!v.specularMap,Re=!!v.specularColorMap,De=!!v.specularIntensityMap,Ae=b&&!!v.transmissionMap,Ee=b&&!!v.thicknessMap,Fe=!!v.gradientMap,Ke=!!v.alphaMap,pt=v.alphaTest>0,O=!!v.extensions,K=!!B.attributes.uv1,pe=!!B.attributes.uv2,we=!!B.attributes.uv3;return{isWebGL2:f,shaderID:oe,shaderName:v.type,vertexShader:Y,fragmentShader:se,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:ue,instancingColor:ue&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:A===null?t.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ei,map:Se,matcap:de,envMap:Pe,envMapMode:Pe&&G.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:D,bumpMap:V,normalMap:ie,displacementMap:h&&Q,emissiveMap:ne,normalMapObjectSpace:ie&&v.normalMapType===Py,normalMapTangentSpace:ie&&v.normalMapType===Yg,metalnessMap:me,roughnessMap:re,clearcoat:fe,clearcoatMap:H,clearcoatNormalMap:q,clearcoatRoughnessMap:Z,iridescence:ae,iridescenceMap:he,iridescenceThicknessMap:ye,sheen:R,sheenColorMap:Me,sheenRoughnessMap:j,specularMap:Te,specularColorMap:Re,specularIntensityMap:De,transmission:b,transmissionMap:Ae,thicknessMap:Ee,gradientMap:Fe,opaque:v.transparent===!1&&v.blending===ir,alphaMap:Ke,alphaTest:pt,combine:v.combine,mapUv:Se&&g(v.map.channel),aoMapUv:P&&g(v.aoMap.channel),lightMapUv:D&&g(v.lightMap.channel),bumpMapUv:V&&g(v.bumpMap.channel),normalMapUv:ie&&g(v.normalMap.channel),displacementMapUv:Q&&g(v.displacementMap.channel),emissiveMapUv:ne&&g(v.emissiveMap.channel),metalnessMapUv:me&&g(v.metalnessMap.channel),roughnessMapUv:re&&g(v.roughnessMap.channel),clearcoatMapUv:H&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:j&&g(v.sheenRoughnessMap.channel),specularMapUv:Te&&g(v.specularMap.channel),specularColorMapUv:Re&&g(v.specularColorMap.channel),specularIntensityMapUv:De&&g(v.specularIntensityMap.channel),transmissionMapUv:Ae&&g(v.transmissionMap.channel),thicknessMapUv:Ee&&g(v.thicknessMap.channel),alphaMapUv:Ke&&g(v.alphaMap.channel),vertexTangents:ie&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:pe,vertexUv3s:we,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Se||Ke),fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:v.toneMapped?t.toneMapping:yi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:O&&v.extensions.derivatives===!0,extensionFragDepth:O&&v.extensions.fragDepth===!0,extensionDrawBuffers:O&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(S(w,v),y(w,v),w.push(t.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function S(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),v.push(a.mask)}function x(v){const w=_[v.type];let N;if(w){const U=Zn[w];N=uM.clone(U.uniforms)}else N=v.uniforms;return N}function M(v,w){let N;for(let U=0,I=c.length;U<I;U++){const F=c[U];if(F.cacheKey===w){N=F,++N.usedTimes;break}}return N===void 0&&(N=new vw(t,w,v,r),c.push(N)),N}function E(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:L}}function Sw(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function bw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function dd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pd(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,h,d,_,g,m){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},t[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,h,d,_,g,m){const p=o(u,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(u,h,d,_,g,m){const p=o(u,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(u,h){n.length>1&&n.sort(u||bw),i.length>1&&i.sort(h||dd),s.length>1&&s.sort(h||dd)}function f(){for(let u=e,h=t.length;u<h;u++){const d=t[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function ww(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new pd,t.set(i,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new nt};break;case"SpotLight":n={position:new k,direction:new k,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Aw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Rw=0;function Cw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Pw(t,e){const n=new Tw,i=Aw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)s.probe.push(new k);const r=new k,o=new St,a=new St;function l(f,u){let h=0,d=0,_=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let g=0,m=0,p=0,S=0,y=0,x=0,M=0,E=0,T=0,L=0;f.sort(Cw);const v=u===!0?Math.PI:1;for(let N=0,U=f.length;N<U;N++){const I=f[N],F=I.color,B=I.intensity,z=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*B*v,d+=F.g*B*v,_+=F.b*B*v;else if(I.isLightProbe)for(let W=0;W<9;W++)s.probe[W].addScaledVector(I.sh.coefficients[W],B);else if(I.isDirectionalLight){const W=n.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const oe=I.shadow,ee=i.get(I);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,s.directionalShadow[g]=ee,s.directionalShadowMap[g]=G,s.directionalShadowMatrix[g]=I.shadow.matrix,x++}s.directional[g]=W,g++}else if(I.isSpotLight){const W=n.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(B*v),W.distance=z,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,s.spot[p]=W;const oe=I.shadow;if(I.map&&(s.spotLightMap[T]=I.map,T++,oe.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[p]=oe.matrix,I.castShadow){const ee=i.get(I);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,s.spotShadow[p]=ee,s.spotShadowMap[p]=G,E++}p++}else if(I.isRectAreaLight){const W=n.get(I);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=W,S++}else if(I.isPointLight){const W=n.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*v),W.distance=I.distance,W.decay=I.decay,I.castShadow){const oe=I.shadow,ee=i.get(I);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,ee.shadowCameraNear=oe.camera.near,ee.shadowCameraFar=oe.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=I.shadow.matrix,M++}s.point[m]=W,m++}else if(I.isHemisphereLight){const W=n.get(I);W.skyColor.copy(I.color).multiplyScalar(B*v),W.groundColor.copy(I.groundColor).multiplyScalar(B*v),s.hemi[y]=W,y++}}S>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=_;const w=s.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==S||w.hemiLength!==y||w.numDirectionalShadows!==x||w.numPointShadows!==M||w.numSpotShadows!==E||w.numSpotMaps!==T)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=E+T-L,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=L,w.directionalLength=g,w.pointLength=m,w.spotLength=p,w.rectAreaLength=S,w.hemiLength=y,w.numDirectionalShadows=x,w.numPointShadows=M,w.numSpotShadows=E,w.numSpotMaps=T,s.version=Rw++)}function c(f,u){let h=0,d=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let S=0,y=f.length;S<y;S++){const x=f[S];if(x.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=s.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=s.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function md(t,e){const n=new Pw(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lw(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let l;return a===void 0?(l=new md(t,e),n.set(r,[l])):o>=a.length?(l=new md(t,e),a.push(l)):l=a[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class Dw extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uw extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
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
}`;function Fw(t,e,n){let i=new Gf;const s=new Ge,r=new Ge,o=new Lt,a=new Dw({depthPacking:Cy}),l=new Uw,c={},f=n.maxTextureSize,u={[zi]:rn,[rn]:zi,[vi]:vi},h=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Iw,fragmentShader:Nw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new kn;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xi(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let p=this.type;this.render=function(M,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),v=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Bi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==pi&&this.type===pi,I=p===pi&&this.type!==pi;for(let F=0,B=M.length;F<B;F++){const z=M[F],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||U===!0||I===!0){const ee=this.type!==pi?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new xs(s.x,s.y,ee),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const oe=G.getViewportCount();for(let ee=0;ee<oe;ee++){const be=G.getViewport(ee);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),N.viewport(o),G.updateMatrices(z,ee),i=G.getFrustum(),x(E,T,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===pi&&S(G,T),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(L,v,w)};function S(M,E){const T=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new xs(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(E,null,T,h,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(E,null,T,d,g,null)}function y(M,E,T,L){let v=null;const w=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)v=w;else if(v=T.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,U=E.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let F=I[U];F===void 0&&(F=v.clone(),I[U]=F),v=F}if(v.visible=E.visible,v.wireframe=E.wireframe,L===pi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=t.properties.get(v);N.light=T}return v}function x(M,E,T,L,v){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===pi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const U=e.update(M),I=M.material;if(Array.isArray(I)){const F=U.groups;for(let B=0,z=F.length;B<z;B++){const G=F[B],W=I[G.materialIndex];if(W&&W.visible){const oe=y(M,W,L,v);t.renderBufferDirect(T,null,U,oe,M,G)}}}else if(I.visible){const F=y(M,I,L,v);t.renderBufferDirect(T,null,U,F,M,null)}}const N=M.children;for(let U=0,I=N.length;U<I;U++)x(N[U],E,T,L,v)}}function Ow(t,e,n){const i=n.isWebGL2;function s(){let O=!1;const K=new Lt;let pe=null;const we=new Lt(0,0,0,0);return{setMask:function(Le){pe!==Le&&!O&&(t.colorMask(Le,Le,Le,Le),pe=Le)},setLocked:function(Le){O=Le},setClear:function(Le,st,rt,Ot,Ei){Ei===!0&&(Le*=Ot,st*=Ot,rt*=Ot),K.set(Le,st,rt,Ot),we.equals(K)===!1&&(t.clearColor(Le,st,rt,Ot),we.copy(K))},reset:function(){O=!1,pe=null,we.set(-1,0,0,0)}}}function r(){let O=!1,K=null,pe=null,we=null;return{setTest:function(Le){Le?A(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Le){K!==Le&&!O&&(t.depthMask(Le),K=Le)},setFunc:function(Le){if(pe!==Le){switch(Le){case J1:t.depthFunc(t.NEVER);break;case Q1:t.depthFunc(t.ALWAYS);break;case ey:t.depthFunc(t.LESS);break;case af:t.depthFunc(t.LEQUAL);break;case ty:t.depthFunc(t.EQUAL);break;case ny:t.depthFunc(t.GEQUAL);break;case iy:t.depthFunc(t.GREATER);break;case sy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Le}},setLocked:function(Le){O=Le},setClear:function(Le){we!==Le&&(t.clearDepth(Le),we=Le)},reset:function(){O=!1,K=null,pe=null,we=null}}}function o(){let O=!1,K=null,pe=null,we=null,Le=null,st=null,rt=null,Ot=null,Ei=null;return{setTest:function(mt){O||(mt?A(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(mt){K!==mt&&!O&&(t.stencilMask(mt),K=mt)},setFunc:function(mt,yn,Gn){(pe!==mt||we!==yn||Le!==Gn)&&(t.stencilFunc(mt,yn,Gn),pe=mt,we=yn,Le=Gn)},setOp:function(mt,yn,Gn){(st!==mt||rt!==yn||Ot!==Gn)&&(t.stencilOp(mt,yn,Gn),st=mt,rt=yn,Ot=Gn)},setLocked:function(mt){O=mt},setClear:function(mt){Ei!==mt&&(t.clearStencil(mt),Ei=mt)},reset:function(){O=!1,K=null,pe=null,we=null,Le=null,st=null,rt=null,Ot=null,Ei=null}}}const a=new s,l=new r,c=new o,f=new WeakMap,u=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,T=null,L=null,v=!1,w=null,N=null,U=null,I=null,F=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=G>=2);let oe=null,ee={};const be=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Y=new Lt().fromArray(be),se=new Lt().fromArray(ce);function ge(O,K,pe,we){const Le=new Uint8Array(4),st=t.createTexture();t.bindTexture(O,st),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<pe;rt++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(K,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(K+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return st}const _e={};_e[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),A(t.DEPTH_TEST),l.setFunc(af),Q(!1),ne(Qu),A(t.CULL_FACE),V(Bi);function A(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function ue(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function Se(O,K){return d[O]!==K?(t.bindFramebuffer(O,K),d[O]=K,i&&(O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=K),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=K)),!0):!1}function de(O,K){let pe=g,we=!1;if(O)if(pe=_.get(K),pe===void 0&&(pe=[],_.set(K,pe)),O.isWebGLMultipleRenderTargets){const Le=O.texture;if(pe.length!==Le.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let st=0,rt=Le.length;st<rt;st++)pe[st]=t.COLOR_ATTACHMENT0+st;pe.length=Le.length,we=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,we=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,we=!0);we&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Pe(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const P={[qs]:t.FUNC_ADD,[V1]:t.FUNC_SUBTRACT,[k1]:t.FUNC_REVERSE_SUBTRACT};if(i)P[ih]=t.MIN,P[sh]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[ih]=O.MIN_EXT,P[sh]=O.MAX_EXT)}const D={[G1]:t.ZERO,[$1]:t.ONE,[W1]:t.SRC_COLOR,[Gg]:t.SRC_ALPHA,[K1]:t.SRC_ALPHA_SATURATE,[Y1]:t.DST_COLOR,[q1]:t.DST_ALPHA,[X1]:t.ONE_MINUS_SRC_COLOR,[$g]:t.ONE_MINUS_SRC_ALPHA,[Z1]:t.ONE_MINUS_DST_COLOR,[j1]:t.ONE_MINUS_DST_ALPHA};function V(O,K,pe,we,Le,st,rt,Ot){if(O===Bi){p===!0&&(ue(t.BLEND),p=!1);return}if(p===!1&&(A(t.BLEND),p=!0),O!==z1){if(O!==S||Ot!==v){if((y!==qs||E!==qs)&&(t.blendEquation(t.FUNC_ADD),y=qs,E=qs),Ot)switch(O){case ir:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eh:t.blendFunc(t.ONE,t.ONE);break;case th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ir:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,T=null,L=null,S=O,v=Ot}return}Le=Le||K,st=st||pe,rt=rt||we,(K!==y||Le!==E)&&(t.blendEquationSeparate(P[K],P[Le]),y=K,E=Le),(pe!==x||we!==M||st!==T||rt!==L)&&(t.blendFuncSeparate(D[pe],D[we],D[st],D[rt]),x=pe,M=we,T=st,L=rt),S=O,v=!1}function ie(O,K){O.side===vi?ue(t.CULL_FACE):A(t.CULL_FACE);let pe=O.side===rn;K&&(pe=!pe),Q(pe),O.blending===ir&&O.transparent===!1?V(Bi):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const we=O.stencilWrite;c.setTest(we),we&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?A(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(O){w!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),w=O)}function ne(O){O!==O1?(A(t.CULL_FACE),O!==N&&(O===Qu?t.cullFace(t.BACK):O===B1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),N=O}function me(O){O!==U&&(z&&t.lineWidth(O),U=O)}function re(O,K,pe){O?(A(t.POLYGON_OFFSET_FILL),(I!==K||F!==pe)&&(t.polygonOffset(K,pe),I=K,F=pe)):ue(t.POLYGON_OFFSET_FILL)}function fe(O){O?A(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function ae(O){O===void 0&&(O=t.TEXTURE0+B-1),oe!==O&&(t.activeTexture(O),oe=O)}function R(O,K,pe){pe===void 0&&(oe===null?pe=t.TEXTURE0+B-1:pe=oe);let we=ee[pe];we===void 0&&(we={type:void 0,texture:void 0},ee[pe]=we),(we.type!==O||we.texture!==K)&&(oe!==pe&&(t.activeTexture(pe),oe=pe),t.bindTexture(O,K||_e[O]),we.type=O,we.texture=K)}function b(){const O=ee[oe];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){Y.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Y.copy(O))}function Ee(O){se.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function Fe(O,K){let pe=u.get(K);pe===void 0&&(pe=new WeakMap,u.set(K,pe));let we=pe.get(O);we===void 0&&(we=t.getUniformBlockIndex(K,O.name),pe.set(O,we))}function Ke(O,K){const we=u.get(K).get(O);f.get(K)!==we&&(t.uniformBlockBinding(K,we,O.__bindingPointIndex),f.set(K,we))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},oe=null,ee={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,T=null,L=null,v=!1,w=null,N=null,U=null,I=null,F=null,Y.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:A,disable:ue,bindFramebuffer:Se,drawBuffers:de,useProgram:Pe,setBlending:V,setMaterial:ie,setFlipSided:Q,setCullFace:ne,setLineWidth:me,setPolygonOffset:re,setScissorTest:fe,activeTexture:ae,bindTexture:R,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:q,texImage2D:Re,texImage3D:De,updateUBOMapping:Fe,uniformBlockBinding:Ke,texStorage2D:j,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:he,compressedTexSubImage2D:ye,compressedTexSubImage3D:Me,scissor:Ae,viewport:Ee,reset:pt}}function Bw(t,e,n,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,f=s.maxTextureSize,u=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,b){return p?new OffscreenCanvas(R,b):Na("canvas")}function y(R,b,H,q){let Z=1;if((R.width>q||R.height>q)&&(Z=q/Math.max(R.width,R.height)),Z<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const he=b?Kg:Math.floor,ye=he(Z*R.width),Me=he(Z*R.height);g===void 0&&(g=S(ye,Me));const j=H?S(ye,Me):g;return j.width=ye,j.height=Me,j.getContext("2d").drawImage(R,0,0,ye,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+Me+")."),j}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return df(R.width)&&df(R.height)}function M(R){return a?!1:R.wrapS!==On||R.wrapT!==On||R.minFilter!==jt&&R.minFilter!==Sn}function E(R,b){return R.generateMipmaps&&b&&R.minFilter!==jt&&R.minFilter!==Sn}function T(R){t.generateMipmap(R)}function L(R,b,H,q,Z=!1){if(a===!1)return b;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he=b;return b===t.RED&&(H===t.FLOAT&&(he=t.R32F),H===t.HALF_FLOAT&&(he=t.R16F),H===t.UNSIGNED_BYTE&&(he=t.R8)),b===t.RG&&(H===t.FLOAT&&(he=t.RG32F),H===t.HALF_FLOAT&&(he=t.RG16F),H===t.UNSIGNED_BYTE&&(he=t.RG8)),b===t.RGBA&&(H===t.FLOAT&&(he=t.RGBA32F),H===t.HALF_FLOAT&&(he=t.RGBA16F),H===t.UNSIGNED_BYTE&&(he=q===ze&&Z===!1?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)),(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function v(R,b,H){return E(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Sn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){return R===jt||R===rh||R===Ol?t.NEAREST:t.LINEAR}function N(R){const b=R.target;b.removeEventListener("dispose",N),I(b),b.isVideoTexture&&_.delete(b)}function U(R){const b=R.target;b.removeEventListener("dispose",U),B(b)}function I(R){const b=i.get(R);if(b.__webglInit===void 0)return;const H=R.source,q=m.get(H);if(q){const Z=q[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(R),Object.keys(q).length===0&&m.delete(H)}i.remove(R)}function F(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const H=R.source,q=m.get(H);delete q[b.__cacheKey],o.memory.textures--}function B(R){const b=R.texture,H=i.get(R),q=i.get(b);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)t.deleteFramebuffer(H.__webglFramebuffer[Z]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[Z]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Z=0;Z<H.__webglColorRenderbuffer.length;Z++)H.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[Z]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Z=0,he=b.length;Z<he;Z++){const ye=i.get(b[Z]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(b[Z])}i.remove(b),i.remove(R)}let z=0;function G(){z=0}function W(){const R=z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),z+=1,R}function oe(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ee(R,b){const H=i.get(R);if(R.isVideoTexture&&fe(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,R,b);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+b)}function be(R,b){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ue(H,R,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+b)}function ce(R,b){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ue(H,R,b);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+b)}function Y(R,b){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Se(H,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+b)}const se={[ff]:t.REPEAT,[On]:t.CLAMP_TO_EDGE,[uf]:t.MIRRORED_REPEAT},ge={[jt]:t.NEAREST,[rh]:t.NEAREST_MIPMAP_NEAREST,[Ol]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[hy]:t.LINEAR_MIPMAP_NEAREST,[lo]:t.LINEAR_MIPMAP_LINEAR};function _e(R,b,H){if(H?(t.texParameteri(R,t.TEXTURE_WRAP_S,se[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,se[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,se[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ge[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ge[b.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==On||b.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(b.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==jt&&b.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===jt||b.minFilter!==Ol&&b.minFilter!==lo||b.type===hs&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function A(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",N));const q=b.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const he=oe(b);if(he!==R.__cacheKey){Z[he]===void 0&&(Z[he]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[he].usedTimes++;const ye=Z[R.__cacheKey];ye!==void 0&&(Z[R.__cacheKey].usedTimes--,ye.usedTimes===0&&F(b)),R.__cacheKey=he,R.__webglTexture=Z[he].texture}return H}function ue(R,b,H){let q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=t.TEXTURE_3D);const Z=A(R,b),he=b.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+H);const ye=i.get(he);if(he.version!==ye.__version||Z===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Me=M(b)&&x(b.image)===!1;let j=y(b.image,Me,!1,f);j=ae(b,j);const Te=x(j)||a,Re=r.convert(b.format,b.colorSpace);let De=r.convert(b.type),Ae=L(b.internalFormat,Re,De,b.colorSpace);_e(q,b,Te);let Ee;const Fe=b.mipmaps,Ke=a&&b.isVideoTexture!==!0,pt=ye.__version===void 0||Z===!0,O=v(b,j,Te);if(b.isDepthTexture)Ae=t.DEPTH_COMPONENT,a?b.type===hs?Ae=t.DEPTH_COMPONENT32F:b.type===us?Ae=t.DEPTH_COMPONENT24:b.type===sr?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:b.type===hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ms&&Ae===t.DEPTH_COMPONENT&&b.type!==qg&&b.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=us,De=r.convert(b.type)),b.format===fr&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,b.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=sr,De=r.convert(b.type))),pt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Ae,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,Ae,j.width,j.height,0,Re,De,null));else if(b.isDataTexture)if(Fe.length>0&&Te){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Fe[0].width,Fe[0].height);for(let K=0,pe=Fe.length;K<pe;K++)Ee=Fe[K],Ke?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Re,De,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Ae,Ee.width,Ee.height,0,Re,De,Ee.data);b.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,Re,De,j.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,j.width,j.height,0,Re,De,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Ae,Fe[0].width,Fe[0].height,j.depth);for(let K=0,pe=Fe.length;K<pe;K++)Ee=Fe[K],b.format!==Bn?Re!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,j.depth,Re,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ae,Ee.width,Ee.height,j.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,j.depth,Re,De,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ae,Ee.width,Ee.height,j.depth,0,Re,De,Ee.data)}else{Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Fe[0].width,Fe[0].height);for(let K=0,pe=Fe.length;K<pe;K++)Ee=Fe[K],b.format!==Bn?Re!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Re,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ae,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Re,De,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Ae,Ee.width,Ee.height,0,Re,De,Ee.data)}else if(b.isDataArrayTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Ae,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Re,De,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,j.width,j.height,j.depth,0,Re,De,j.data);else if(b.isData3DTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_3D,O,Ae,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Re,De,j.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,j.width,j.height,j.depth,0,Re,De,j.data);else if(b.isFramebufferTexture){if(pt)if(Ke)n.texStorage2D(t.TEXTURE_2D,O,Ae,j.width,j.height);else{let K=j.width,pe=j.height;for(let we=0;we<O;we++)n.texImage2D(t.TEXTURE_2D,we,Ae,K,pe,0,Re,De,null),K>>=1,pe>>=1}}else if(Fe.length>0&&Te){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Fe[0].width,Fe[0].height);for(let K=0,pe=Fe.length;K<pe;K++)Ee=Fe[K],Ke?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Re,De,Ee):n.texImage2D(t.TEXTURE_2D,K,Ae,Re,De,Ee);b.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,De,j)):n.texImage2D(t.TEXTURE_2D,0,Ae,Re,De,j);E(b,Te)&&T(q),ye.__version=he.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Se(R,b,H){if(b.image.length!==6)return;const q=A(R,b),Z=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const he=i.get(Z);if(Z.version!==he.__version||q===!0){n.activeTexture(t.TEXTURE0+H),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,j=[];for(let K=0;K<6;K++)!ye&&!Me?j[K]=y(b.image[K],!1,!0,c):j[K]=Me?b.image[K].image:b.image[K],j[K]=ae(b,j[K]);const Te=j[0],Re=x(Te)||a,De=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type),Ee=L(b.internalFormat,De,Ae,b.colorSpace),Fe=a&&b.isVideoTexture!==!0,Ke=he.__version===void 0||q===!0;let pt=v(b,Te,Re);_e(t.TEXTURE_CUBE_MAP,b,Re);let O;if(ye){Fe&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Ee,Te.width,Te.height);for(let K=0;K<6;K++){O=j[K].mipmaps;for(let pe=0;pe<O.length;pe++){const we=O[pe];b.format!==Bn?De!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,we.width,we.height,De,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,we.width,we.height,De,Ae,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Ee,we.width,we.height,0,De,Ae,we.data)}}}else{O=b.mipmaps,Fe&&Ke&&(O.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Ee,j[0].width,j[0].height));for(let K=0;K<6;K++)if(Me){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,j[K].width,j[K].height,De,Ae,j[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,j[K].width,j[K].height,0,De,Ae,j[K].data);for(let pe=0;pe<O.length;pe++){const Le=O[pe].image[K].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Le.width,Le.height,De,Ae,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ee,Le.width,Le.height,0,De,Ae,Le.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,Ae,j[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,De,Ae,j[K]);for(let pe=0;pe<O.length;pe++){const we=O[pe];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,De,Ae,we.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Ee,De,Ae,we.image[K])}}}E(b,Re)&&T(t.TEXTURE_CUBE_MAP),he.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,H,q,Z){const he=r.convert(H.format,H.colorSpace),ye=r.convert(H.type),Me=L(H.internalFormat,he,ye,H.colorSpace);i.get(b).__hasExternalTextures||(Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,Me,b.width,b.height,b.depth,0,he,ye,null):n.texImage2D(Z,0,Me,b.width,b.height,0,he,ye,null)),n.bindFramebuffer(t.FRAMEBUFFER,R),re(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,i.get(H).__webglTexture,0,me(b)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,i.get(H).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,b,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let q=t.DEPTH_COMPONENT16;if(H||re(b)){const Z=b.depthTexture;Z&&Z.isDepthTexture&&(Z.type===hs?q=t.DEPTH_COMPONENT32F:Z.type===us&&(q=t.DEPTH_COMPONENT24));const he=me(b);re(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,q,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,he,q,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const q=me(b);H&&re(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,b.width,b.height):re(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0;Z<q.length;Z++){const he=q[Z],ye=r.convert(he.format,he.colorSpace),Me=r.convert(he.type),j=L(he.internalFormat,ye,Me,he.colorSpace),Te=me(b);H&&re(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,j,b.width,b.height):re(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,j,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const q=i.get(b.depthTexture).__webglTexture,Z=me(b);if(b.depthTexture.format===ms)re(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(b.depthTexture.format===fr)re(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function D(R){const b=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");P(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]=t.createRenderbuffer(),Pe(b.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),Pe(b.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(R,b,H){const q=i.get(R);b!==void 0&&de(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),H!==void 0&&D(R)}function ie(R){const b=R.texture,H=i.get(R),q=i.get(b);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=b.version,o.memory.textures++);const Z=R.isWebGLCubeRenderTarget===!0,he=R.isWebGLMultipleRenderTargets===!0,ye=x(R)||a;if(Z){H.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)H.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),he)if(s.drawBuffers){const Me=R.texture;for(let j=0,Te=Me.length;j<Te;j++){const Re=i.get(Me[j]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&re(R)===!1){const Me=he?b:[b];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<Me.length;j++){const Te=Me[j];H.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const Re=r.convert(Te.format,Te.colorSpace),De=r.convert(Te.type),Ae=L(Te.internalFormat,Re,De,Te.colorSpace,R.isXRRenderTarget===!0),Ee=me(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Ae,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,H.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),_e(t.TEXTURE_CUBE_MAP,b,ye);for(let Me=0;Me<6;Me++)de(H.__webglFramebuffer[Me],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me);E(b,ye)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){const Me=R.texture;for(let j=0,Te=Me.length;j<Te;j++){const Re=Me[j],De=i.get(Re);n.bindTexture(t.TEXTURE_2D,De.__webglTexture),_e(t.TEXTURE_2D,Re,ye),de(H.__webglFramebuffer,R,Re,t.COLOR_ATTACHMENT0+j,t.TEXTURE_2D),E(Re,ye)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?Me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Me,q.__webglTexture),_e(Me,b,ye),de(H.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,Me),E(b,ye)&&T(Me),n.unbindTexture()}R.depthBuffer&&D(R)}function Q(R){const b=x(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let q=0,Z=H.length;q<Z;q++){const he=H[q];if(E(he,b)){const ye=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(he).__webglTexture;n.bindTexture(ye,Me),T(ye),n.unbindTexture()}}}function ne(R){if(a&&R.samples>0&&re(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,q=R.height;let Z=t.COLOR_BUFFER_BIT;const he=[],ye=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),j=R.isWebGLMultipleRenderTargets===!0;if(j)for(let Te=0;Te<b.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){he.push(t.COLOR_ATTACHMENT0+Te),R.depthBuffer&&he.push(ye);const Re=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Re===!1&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),j&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]),Re===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),j){const De=i.get(b[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,H,q,0,0,H,q,Z,t.NEAREST),d&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let Te=0;Te<b.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const Re=i.get(b[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function me(R){return Math.min(u,R.samples)}function re(R){const b=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(R){const b=o.render.frame;_.get(R)!==b&&(_.set(R,b),R.update())}function ae(R,b){const H=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.format===hf||H!==ei&&H!==_s&&(H===ze?a===!1?e.has("EXT_sRGB")===!0&&q===Bn?(R.format=hf,R.minFilter=Sn,R.generateMipmaps=!1):b=Qg.sRGBToLinear(b):(q!==Bn||Z!==vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=ee,this.setTexture2DArray=be,this.setTexture3D=ce,this.setTextureCube=Y,this.rebindTextures=V,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=de,this.useMultisampledRTT=re}function Hw(t,e,n){const i=n.isWebGL2;function s(r,o=_s){let a;if(r===vs)return t.UNSIGNED_BYTE;if(r===gy)return t.UNSIGNED_SHORT_4_4_4_4;if(r===_y)return t.UNSIGNED_SHORT_5_5_5_1;if(r===dy)return t.BYTE;if(r===py)return t.SHORT;if(r===qg)return t.UNSIGNED_SHORT;if(r===my)return t.INT;if(r===us)return t.UNSIGNED_INT;if(r===hs)return t.FLOAT;if(r===co)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vy)return t.ALPHA;if(r===Bn)return t.RGBA;if(r===xy)return t.LUMINANCE;if(r===yy)return t.LUMINANCE_ALPHA;if(r===ms)return t.DEPTH_COMPONENT;if(r===fr)return t.DEPTH_STENCIL;if(r===hf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===My)return t.RED;if(r===Ey)return t.RED_INTEGER;if(r===Sy)return t.RG;if(r===by)return t.RG_INTEGER;if(r===wy)return t.RGBA_INTEGER;if(r===Bl||r===Hl||r===zl||r===Vl)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oh||r===ah||r===lh||r===ch)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===oh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ty)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fh||r===uh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fh)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===uh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hh||r===dh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===yh||r===Mh||r===Eh||r===Sh||r===bh||r===wh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ph)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===kl)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ay||r===Th||r===Ah||r===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===kl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Th)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class zw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yo extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class kw extends vn{constructor(e,n,i,s,r,o,a,l,c,f){if(f=f!==void 0?f:ms,f!==ms&&f!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ms&&(i=us),i===void 0&&f===fr&&(i=sr),super(null,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1}}class Gw extends Ms{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,_=null;const g=n.getContextAttributes();let m=null,p=null;const S=[],y=[],x=new Set,M=new Map,E=new wn;E.layers.enable(1),E.viewport=new Lt;const T=new wn;T.layers.enable(2),T.viewport=new Lt;const L=[E,T],v=new zw;v.layers.enable(1),v.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=S[Y];return se===void 0&&(se=new fc,S[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=S[Y];return se===void 0&&(se=new fc,S[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=S[Y];return se===void 0&&(se=new fc,S[Y]=se),se.getHandSpace()};function U(Y){const se=y.indexOf(Y.inputSource);if(se===-1)return;const ge=S[se];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",F);for(let Y=0;Y<S.length;Y++){const se=y[Y];se!==null&&(y[Y]=null,S[Y].disconnect(se))}w=null,N=null,e.setRenderTarget(m),d=null,h=null,u=null,s=null,p=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",I),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,se),s.updateRenderState({baseLayer:d}),p=new xs(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:vs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,ge=null,_e=null;g.depth&&(_e=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=g.stencil?fr:ms,ge=g.stencil?sr:us);const A={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,n),h=u.createProjectionLayer(A),s.updateRenderState({layers:[h]}),p=new xs(h.textureWidth,h.textureHeight,{format:Bn,type:vs,depthTexture:new kw(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ue=e.properties.get(p);ue.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(Y){for(let se=0;se<Y.removed.length;se++){const ge=Y.removed[se],_e=y.indexOf(ge);_e>=0&&(y[_e]=null,S[_e].disconnect(ge))}for(let se=0;se<Y.added.length;se++){const ge=Y.added[se];let _e=y.indexOf(ge);if(_e===-1){for(let ue=0;ue<S.length;ue++)if(ue>=y.length){y.push(ge),_e=ue;break}else if(y[ue]===null){y[ue]=ge,_e=ue;break}if(_e===-1)break}const A=S[_e];A&&A.connect(ge)}}const B=new k,z=new k;function G(Y,se,ge){B.setFromMatrixPosition(se.matrixWorld),z.setFromMatrixPosition(ge.matrixWorld);const _e=B.distanceTo(z),A=se.projectionMatrix.elements,ue=ge.projectionMatrix.elements,Se=A[14]/(A[10]-1),de=A[14]/(A[10]+1),Pe=(A[9]+1)/A[5],P=(A[9]-1)/A[5],D=(A[8]-1)/A[0],V=(ue[8]+1)/ue[0],ie=Se*D,Q=Se*V,ne=_e/(-D+V),me=ne*-D;se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(me),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const re=Se+ne,fe=de+ne,ae=ie-me,R=Q+(_e-me),b=Pe*de/fe*re,H=P*de/fe*re;Y.projectionMatrix.makePerspective(ae,R,b,H,re,fe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function W(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.near=T.near=E.near=Y.near,v.far=T.far=E.far=Y.far,(w!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,N=v.far);const se=Y.parent,ge=v.cameras;W(v,se);for(let _e=0;_e<ge.length;_e++)W(ge[_e],se);ge.length===2?G(v,E,T):v.projectionMatrix.copy(E.projectionMatrix),oe(Y,v,se)};function oe(Y,se,ge){ge===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const _e=Y.children;for(let A=0,ue=_e.length;A<ue;A++)_e[A].updateMatrixWorld(!0);Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.getPlanes=function(){return x};let ee=null;function be(Y,se){if(f=se.getViewerPose(c||o),_=se,f!==null){const ge=f.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let A=0;A<ge.length;A++){const ue=ge[A];let Se=null;if(d!==null)Se=d.getViewport(ue);else{const Pe=u.getViewSubImage(h,ue);Se=Pe.viewport,A===0&&(e.setRenderTargetTextures(p,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(p))}let de=L[A];de===void 0&&(de=new wn,de.layers.enable(A),de.viewport=new Lt,L[A]=de),de.matrix.fromArray(ue.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ue.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Se.x,Se.y,Se.width,Se.height),A===0&&(v.matrix.copy(de.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(de)}}for(let ge=0;ge<S.length;ge++){const _e=y[ge],A=S[ge];_e!==null&&A!==void 0&&A.update(_e,se,c||o)}if(ee&&ee(Y,se),se.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:se.detectedPlanes});let ge=null;for(const _e of x)se.detectedPlanes.has(_e)||(ge===null&&(ge=[]),ge.push(_e));if(ge!==null)for(const _e of ge)x.delete(_e),M.delete(_e),i.dispatchEvent({type:"planeremoved",data:_e});for(const _e of se.detectedPlanes)if(!x.has(_e))x.add(_e),M.set(_e,se.lastChangedTime),i.dispatchEvent({type:"planeadded",data:_e});else{const A=M.get(_e);_e.lastChangedTime>A&&(M.set(_e,_e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:_e}))}}_=null}const ce=new u0;ce.setAnimationLoop(be),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}}function $w(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,l0(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ww(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function c(S,y){let x=s[S.id];x===void 0&&(_(S),x=f(S),s[S.id]=x,S.addEventListener("dispose",m));const M=y.program;i.updateUBOMapping(S,M);const E=e.render.frame;r[S.id]!==E&&(h(S),r[S.id]=E)}function f(S){const y=u();S.__bindingPointIndex=y;const x=t.createBuffer(),M=S.__size,E=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=s[S.id],x=S.uniforms,M=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,T=x.length;E<T;E++){const L=x[E];if(d(L,E,M)===!0){const v=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let U=0;U<w.length;U++){const I=w[U],F=g(I);typeof I=="number"?(L.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,v+N,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,N),N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,v,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,y,x){const M=S.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const E=Array.isArray(M)?M:[M],T=[];for(let L=0;L<E.length;L++)T.push(E[L].clone());x[y]=T}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],T=Array.isArray(M)?M:[M];for(let L=0;L<E.length;L++){const v=E[L];if(v.equals(T[L])===!1)return v.copy(T[L]),!0}}return!1}function _(S){const y=S.uniforms;let x=0;const M=16;let E=0;for(let T=0,L=y.length;T<L;T++){const v=y[T],w={boundary:0,storage:0},N=Array.isArray(v.value)?v.value:[v.value];for(let U=0,I=N.length;U<I;U++){const F=N[U],B=g(F);w.boundary+=B.boundary,w.storage+=B.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=x,T>0){E=x%M;const U=M-E;E!==0&&U-w.boundary<0&&(x+=M-E,v.__offset=x)}x+=w.storage}return E=x%M,E>0&&(x+=M-E),S.__size=x,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function Xw(){const t=Na("canvas");return t.style.display="block",t}class _0{constructor(e={}){const{canvas:n=Xw(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let d=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=yi,this.toneMappingExposure=1;const p=this;let S=!1,y=0,x=0,M=null,E=-1,T=null;const L=new Lt,v=new Lt;let w=null,N=n.width,U=n.height,I=1,F=null,B=null;const z=new Lt(0,0,N,U),G=new Lt(0,0,N,U);let W=!1;const oe=new Gf;let ee=!1,be=!1,ce=null;const Y=new St,se=new k,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return M===null?I:1}let A=i;function ue(C,X){for(let J=0;J<C.length;J++){const $=C[J],te=n.getContext($,X);if(te!==null)return te}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Ke,!1),A===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),A=ue(X,C),A===null)throw ue(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,de,Pe,P,D,V,ie,Q,ne,me,re,fe,ae,R,b,H,q,Z,he,ye,Me,j,Te,Re;function De(){Se=new ib(A),de=new KS(A,Se,e),Se.init(de),j=new Hw(A,Se,de),Pe=new Ow(A,Se,de),P=new ob(A),D=new Sw,V=new Bw(A,Se,Pe,D,de,j,P),ie=new QS(p),Q=new nb(p),ne=new vM(A,de),Te=new YS(A,Se,ne,de),me=new sb(A,ne,P,Te),re=new fb(A,me,ne,P),he=new cb(A,de,V),H=new JS(D),fe=new Ew(p,ie,Q,Se,de,Te,H),ae=new $w(p,D),R=new ww,b=new Lw(Se,de),Z=new jS(p,ie,Q,Pe,re,h,l),q=new Fw(p,re,de),Re=new Ww(A,P,de,Pe),ye=new ZS(A,Se,P,de),Me=new rb(A,Se,P,de),P.programs=fe.programs,p.capabilities=de,p.extensions=Se,p.properties=D,p.renderLists=R,p.shadowMap=q,p.state=Pe,p.info=P}De();const Ae=new Gw(p,A);this.xr=Ae,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(N,U,!1))},this.getSize=function(C){return C.set(N,U)},this.setSize=function(C,X,J=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,U=X,n.width=Math.floor(C*I),n.height=Math.floor(X*I),J===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(N*I,U*I).floor()},this.setDrawingBufferSize=function(C,X,J){N=C,U=X,I=J,n.width=Math.floor(C*J),n.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,X,J,$){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,X,J,$),Pe.viewport(L.copy(z).multiplyScalar(I).floor())},this.getScissor=function(C){return C.copy(G)},this.setScissor=function(C,X,J,$){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,X,J,$),Pe.scissor(v.copy(G).multiplyScalar(I).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){Pe.setScissorTest(W=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,X=!0,J=!0){let $=0;C&&($|=A.COLOR_BUFFER_BIT),X&&($|=A.DEPTH_BUFFER_BIT),J&&($|=A.STENCIL_BUFFER_BIT),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Ke,!1),R.dispose(),b.dispose(),D.dispose(),ie.dispose(),Q.dispose(),re.dispose(),Te.dispose(),Re.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Le),Ae.removeEventListener("sessionend",st),ce&&(ce.dispose(),ce=null),rt.stop()};function Ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=P.autoReset,X=q.enabled,J=q.autoUpdate,$=q.needsUpdate,te=q.type;De(),P.autoReset=C,q.enabled=X,q.autoUpdate=J,q.needsUpdate=$,q.type=te}function Ke(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){const X=C.target;X.removeEventListener("dispose",pt),O(X)}function O(C){K(C),D.remove(C)}function K(C){const X=D.get(C).programs;X!==void 0&&(X.forEach(function(J){fe.releaseProgram(J)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,$,te,Ue){X===null&&(X=ge);const Ne=te.isMesh&&te.matrixWorld.determinant()<0,Oe=D_(C,X,J,$,te);Pe.setMaterial($,Ne);let Ve=J.index,We=1;$.wireframe===!0&&(Ve=me.getWireframeAttribute(J),We=2);const Xe=J.drawRange,qe=J.attributes.position;let it=Xe.start*We,Vt=(Xe.start+Xe.count)*We;Ue!==null&&(it=Math.max(it,Ue.start*We),Vt=Math.min(Vt,(Ue.start+Ue.count)*We)),Ve!==null?(it=Math.max(it,0),Vt=Math.min(Vt,Ve.count)):qe!=null&&(it=Math.max(it,0),Vt=Math.min(Vt,qe.count));const Pn=Vt-it;if(Pn<0||Pn===1/0)return;Te.setup(te,$,Oe,J,Ve);let Wi,vt=ye;if(Ve!==null&&(Wi=ne.get(Ve),vt=Me,vt.setIndex(Wi)),te.isMesh)$.wireframe===!0?(Pe.setLineWidth($.wireframeLinewidth*_e()),vt.setMode(A.LINES)):vt.setMode(A.TRIANGLES);else if(te.isLine){let Ze=$.linewidth;Ze===void 0&&(Ze=1),Pe.setLineWidth(Ze*_e()),te.isLineSegments?vt.setMode(A.LINES):te.isLineLoop?vt.setMode(A.LINE_LOOP):vt.setMode(A.LINE_STRIP)}else te.isPoints?vt.setMode(A.POINTS):te.isSprite&&vt.setMode(A.TRIANGLES);if(te.isInstancedMesh)vt.renderInstances(it,Pn,te.count);else if(J.isInstancedBufferGeometry){const Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,xl=Math.min(J.instanceCount,Ze);vt.renderInstances(it,Pn,xl)}else vt.render(it,Pn)},this.compile=function(C,X){function J($,te,Ue){$.transparent===!0&&$.side===vi&&$.forceSinglePass===!1?($.side=rn,$.needsUpdate=!0,Eo($,te,Ue),$.side=zi,$.needsUpdate=!0,Eo($,te,Ue),$.side=vi):Eo($,te,Ue)}_=b.get(C),_.init(),m.push(_),C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights(p.useLegacyLights),C.traverse(function($){const te=$.material;if(te)if(Array.isArray(te))for(let Ue=0;Ue<te.length;Ue++){const Ne=te[Ue];J(Ne,C,$)}else J(te,C,$)}),m.pop(),_=null};let pe=null;function we(C){pe&&pe(C)}function Le(){rt.stop()}function st(){rt.start()}const rt=new u0;rt.setAnimationLoop(we),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(C){pe=C,Ae.setAnimationLoop(C),C===null?rt.stop():rt.start()},Ae.addEventListener("sessionstart",Le),Ae.addEventListener("sessionend",st),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(X),X=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,X,M),_=b.get(C,m.length),_.init(),m.push(_),Y.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),oe.setFromProjectionMatrix(Y),be=this.localClippingEnabled,ee=H.init(this.clippingPlanes,be),d=R.get(C,g.length),d.init(),g.push(d),Ot(C,X,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(F,B),ee===!0&&H.beginShadows();const J=_.state.shadowsArray;if(q.render(J,C,X),ee===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,C),_.setupLights(p.useLegacyLights),X.isArrayCamera){const $=X.cameras;for(let te=0,Ue=$.length;te<Ue;te++){const Ne=$[te];Ei(d,C,Ne,Ne.viewport)}}else Ei(d,C,X);M!==null&&(V.updateMultisampleRenderTarget(M),V.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(p,C,X),Te.resetDefaultState(),E=-1,T=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Ot(C,X,J,$){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||oe.intersectsSprite(C)){$&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Y);const Ne=re.update(C),Oe=C.material;Oe.visible&&d.push(C,Ne,Oe,J,se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||oe.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==P.render.frame&&(C.skeleton.update(),C.skeleton.frame=P.render.frame);const Ne=re.update(C),Oe=C.material;if($&&(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),se.copy(Ne.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(Y)),Array.isArray(Oe)){const Ve=Ne.groups;for(let We=0,Xe=Ve.length;We<Xe;We++){const qe=Ve[We],it=Oe[qe.materialIndex];it&&it.visible&&d.push(C,Ne,it,J,se.z,qe)}}else Oe.visible&&d.push(C,Ne,Oe,J,se.z,null)}}const Ue=C.children;for(let Ne=0,Oe=Ue.length;Ne<Oe;Ne++)Ot(Ue[Ne],X,J,$)}function Ei(C,X,J,$){const te=C.opaque,Ue=C.transmissive,Ne=C.transparent;_.setupLightsView(J),ee===!0&&H.setGlobalState(p.clippingPlanes,J),Ue.length>0&&mt(te,Ue,X,J),$&&Pe.viewport(L.copy($)),te.length>0&&yn(te,X,J),Ue.length>0&&yn(Ue,X,J),Ne.length>0&&yn(Ne,X,J),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function mt(C,X,J,$){if(ce===null){const Oe=de.isWebGL2;ce=new xs(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?co:vs,minFilter:lo,samples:Oe&&a===!0?4:0})}const te=p.getRenderTarget();p.setRenderTarget(ce),p.clear();const Ue=p.toneMapping;p.toneMapping=yi,yn(C,J,$),V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce);let Ne=!1;for(let Oe=0,Ve=X.length;Oe<Ve;Oe++){const We=X[Oe],Xe=We.object,qe=We.geometry,it=We.material,Vt=We.group;if(it.side===vi&&Xe.layers.test($.layers)){const Pn=it.side;it.side=rn,it.needsUpdate=!0,Gn(Xe,J,$,qe,it,Vt),it.side=Pn,it.needsUpdate=!0,Ne=!0}}Ne===!0&&(V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce)),p.setRenderTarget(te),p.toneMapping=Ue}function yn(C,X,J){const $=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Ue=C.length;te<Ue;te++){const Ne=C[te],Oe=Ne.object,Ve=Ne.geometry,We=$===null?Ne.material:$,Xe=Ne.group;Oe.layers.test(J.layers)&&Gn(Oe,X,J,Ve,We,Xe)}}function Gn(C,X,J,$,te,Ue){C.onBeforeRender(p,X,J,$,te,Ue),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(p,X,J,$,C,Ue),te.transparent===!0&&te.side===vi&&te.forceSinglePass===!1?(te.side=rn,te.needsUpdate=!0,p.renderBufferDirect(J,X,$,te,C,Ue),te.side=zi,te.needsUpdate=!0,p.renderBufferDirect(J,X,$,te,C,Ue),te.side=vi):p.renderBufferDirect(J,X,$,te,C,Ue),C.onAfterRender(p,X,J,$,te,Ue)}function Eo(C,X,J){X.isScene!==!0&&(X=ge);const $=D.get(C),te=_.state.lights,Ue=_.state.shadowsArray,Ne=te.state.version,Oe=fe.getParameters(C,te.state,Ue,X,J),Ve=fe.getProgramCacheKey(Oe);let We=$.programs;$.environment=C.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(C.isMeshStandardMaterial?Q:ie).get(C.envMap||$.environment),We===void 0&&(C.addEventListener("dispose",pt),We=new Map,$.programs=We);let Xe=We.get(Ve);if(Xe!==void 0){if($.currentProgram===Xe&&$.lightsStateVersion===Ne)return du(C,Oe),Xe}else Oe.uniforms=fe.getUniforms(C),C.onBuild(J,Oe,p),C.onBeforeCompile(Oe,p),Xe=fe.acquireProgram(Oe,Ve),We.set(Ve,Xe),$.uniforms=Oe.uniforms;const qe=$.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=H.uniform),du(C,Oe),$.needsLights=I_(C),$.lightsStateVersion=Ne,$.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix);const it=Xe.getUniforms(),Vt=Sa.seqWithValue(it.seq,qe);return $.currentProgram=Xe,$.uniformsList=Vt,Xe}function du(C,X){const J=D.get(C);J.outputColorSpace=X.outputColorSpace,J.instancing=X.instancing,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function D_(C,X,J,$,te){X.isScene!==!0&&(X=ge),V.resetTextureUnits();const Ue=X.fog,Ne=$.isMeshStandardMaterial?X.environment:null,Oe=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ei,Ve=($.isMeshStandardMaterial?Q:ie).get($.envMap||Ne),We=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!$.normalMap&&!!J.attributes.tangent,qe=!!J.morphAttributes.position,it=!!J.morphAttributes.normal,Vt=!!J.morphAttributes.color,Pn=$.toneMapped?p.toneMapping:yi,Wi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vt=Wi!==void 0?Wi.length:0,Ze=D.get($),xl=_.state.lights;if(ee===!0&&(be===!0||C!==T)){const on=C===T&&$.id===E;H.setState($,C,on)}let Rt=!1;$.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==xl.state.version||Ze.outputColorSpace!==Oe||te.isInstancedMesh&&Ze.instancing===!1||!te.isInstancedMesh&&Ze.instancing===!0||te.isSkinnedMesh&&Ze.skinning===!1||!te.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==Ve||$.fog===!0&&Ze.fog!==Ue||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==H.numPlanes||Ze.numIntersection!==H.numIntersection)||Ze.vertexAlphas!==We||Ze.vertexTangents!==Xe||Ze.morphTargets!==qe||Ze.morphNormals!==it||Ze.morphColors!==Vt||Ze.toneMapping!==Pn||de.isWebGL2===!0&&Ze.morphTargetsCount!==vt)&&(Rt=!0):(Rt=!0,Ze.__version=$.version);let Xi=Ze.currentProgram;Rt===!0&&(Xi=Eo($,X,te));let pu=!1,Sr=!1,yl=!1;const kt=Xi.getUniforms(),qi=Ze.uniforms;if(Pe.useProgram(Xi.program)&&(pu=!0,Sr=!0,yl=!0),$.id!==E&&(E=$.id,Sr=!0),pu||T!==C){if(kt.setValue(A,"projectionMatrix",C.projectionMatrix),de.logarithmicDepthBuffer&&kt.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),T!==C&&(T=C,Sr=!0,yl=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const on=kt.map.cameraPosition;on!==void 0&&on.setValue(A,se.setFromMatrixPosition(C.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&kt.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||te.isSkinnedMesh)&&kt.setValue(A,"viewMatrix",C.matrixWorldInverse)}if(te.isSkinnedMesh){kt.setOptional(A,te,"bindMatrix"),kt.setOptional(A,te,"bindMatrixInverse");const on=te.skeleton;on&&(de.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),kt.setValue(A,"boneTexture",on.boneTexture,V),kt.setValue(A,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ml=J.morphAttributes;if((Ml.position!==void 0||Ml.normal!==void 0||Ml.color!==void 0&&de.isWebGL2===!0)&&he.update(te,J,Xi),(Sr||Ze.receiveShadow!==te.receiveShadow)&&(Ze.receiveShadow=te.receiveShadow,kt.setValue(A,"receiveShadow",te.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(qi.envMap.value=Ve,qi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Sr&&(kt.setValue(A,"toneMappingExposure",p.toneMappingExposure),Ze.needsLights&&U_(qi,yl),Ue&&$.fog===!0&&ae.refreshFogUniforms(qi,Ue),ae.refreshMaterialUniforms(qi,$,I,U,ce),Sa.upload(A,Ze.uniformsList,qi,V)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Sa.upload(A,Ze.uniformsList,qi,V),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&kt.setValue(A,"center",te.center),kt.setValue(A,"modelViewMatrix",te.modelViewMatrix),kt.setValue(A,"normalMatrix",te.normalMatrix),kt.setValue(A,"modelMatrix",te.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const on=$.uniformsGroups;for(let El=0,N_=on.length;El<N_;El++)if(de.isWebGL2){const mu=on[El];Re.update(mu,Xi),Re.bind(mu,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function U_(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function I_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,X,J){D.get(C.texture).__webglTexture=X,D.get(C.depthTexture).__webglTexture=J;const $=D.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const J=D.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,J=0){M=C,y=X,x=J;let $=!0,te=null,Ue=!1,Ne=!1;if(C){const Ve=D.get(C);Ve.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(A.FRAMEBUFFER,null),$=!1):Ve.__webglFramebuffer===void 0?V.setupRenderTarget(C):Ve.__hasExternalTextures&&V.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const Xe=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(te=Xe[X],Ue=!0):de.isWebGL2&&C.samples>0&&V.useMultisampledRTT(C)===!1?te=D.get(C).__webglMultisampledFramebuffer:te=Xe,L.copy(C.viewport),v.copy(C.scissor),w=C.scissorTest}else L.copy(z).multiplyScalar(I).floor(),v.copy(G).multiplyScalar(I).floor(),w=W;if(Pe.bindFramebuffer(A.FRAMEBUFFER,te)&&de.drawBuffers&&$&&Pe.drawBuffers(C,te),Pe.viewport(L),Pe.scissor(v),Pe.setScissorTest(w),Ue){const Ve=D.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,J)}else if(Ne){const Ve=D.get(C.texture),We=X||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ve.__webglTexture,J||0,We)}E=-1},this.readRenderTargetPixels=function(C,X,J,$,te,Ue,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){Pe.bindFramebuffer(A.FRAMEBUFFER,Oe);try{const Ve=C.texture,We=Ve.format,Xe=Ve.type;if(We!==Bn&&j.convert(We)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===co&&(Se.has("EXT_color_buffer_half_float")||de.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Xe!==vs&&j.convert(Xe)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===hs&&(de.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-$&&J>=0&&J<=C.height-te&&A.readPixels(X,J,$,te,j.convert(We),j.convert(Xe),Ue)}finally{const Ve=M!==null?D.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(A.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,X,J=0){const $=Math.pow(2,-J),te=Math.floor(X.image.width*$),Ue=Math.floor(X.image.height*$);V.setTexture2D(X,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,C.x,C.y,te,Ue),Pe.unbindTexture()},this.copyTextureToTexture=function(C,X,J,$=0){const te=X.image.width,Ue=X.image.height,Ne=j.convert(J.format),Oe=j.convert(J.type);V.setTexture2D(J,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,J.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,$,C.x,C.y,te,Ue,Ne,Oe,X.image.data):X.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,$,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ne,X.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,$,C.x,C.y,Ne,Oe,X.image),$===0&&J.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J,$,te=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Ve=j.convert($.format),We=j.convert($.type);let Xe;if($.isData3DTexture)V.setTexture3D($,0),Xe=A.TEXTURE_3D;else if($.isDataArrayTexture)V.setTexture2DArray($,0),Xe=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);const qe=A.getParameter(A.UNPACK_ROW_LENGTH),it=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Vt=A.getParameter(A.UNPACK_SKIP_PIXELS),Pn=A.getParameter(A.UNPACK_SKIP_ROWS),Wi=A.getParameter(A.UNPACK_SKIP_IMAGES),vt=J.isCompressedTexture?J.mipmaps[0]:J.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,vt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,C.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,C.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?A.texSubImage3D(Xe,te,X.x,X.y,X.z,Ue,Ne,Oe,Ve,We,vt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Xe,te,X.x,X.y,X.z,Ue,Ne,Oe,Ve,vt.data)):A.texSubImage3D(Xe,te,X.x,X.y,X.z,Ue,Ne,Oe,Ve,We,vt),A.pixelStorei(A.UNPACK_ROW_LENGTH,qe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,it),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Vt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Wi),te===0&&$.generateMipmaps&&A.generateMipmap(Xe),Pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?V.setTextureCube(C,0):C.isData3DTexture?V.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?V.setTexture2DArray(C,0):V.setTexture2D(C,0),Pe.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,Pe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?gs:jg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gs?ze:ei}}class qw extends _0{}qw.prototype.isWebGL1Renderer=!0;class jw extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mf extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gd=new k,_d=new k,vd=new St,uc=new n0,Zo=new el;class Yw extends Dt{constructor(e=new kn,n=new mf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)gd.fromBufferAttribute(n,s-1),_d.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=gd.distanceTo(_d);e.setAttribute("lineDistance",new Tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;vd.copy(s).invert(),uc.copy(e.ray).applyMatrix4(vd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new k,f=new k,u=new k,h=new k,d=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const p=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let y=p,x=S-1;y<x;y+=d){const M=_.getX(y),E=_.getX(y+1);if(c.fromBufferAttribute(m,M),f.fromBufferAttribute(m,E),uc.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let y=p,x=S-1;y<x;y+=d){if(c.fromBufferAttribute(m,y),f.fromBufferAttribute(m,y+1),uc.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||n.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const xd=new k,yd=new k;class Md extends Yw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)xd.fromBufferAttribute(n,s),yd.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xd.distanceTo(yd);e.setAttribute("lineDistance",new Tn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Ko=new k,Jo=new k,hc=new k,Qo=new bn;class Ed extends kn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const s=Math.pow(10,4),r=Math.cos(rr*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],u=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=Qo;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Qo.getNormal(hc),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,x=u[S],M=u[y],E=Qo[f[S]],T=Qo[f[y]],L=`${x}_${M}`,v=`${M}_${x}`;v in h&&h[v]?(hc.dot(h[v].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(T.x,T.y,T.z)),h[v]=null):L in h||(h[L]={index0:c[S],index1:c[y],normal:hc.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:m}=h[_];Ko.fromBufferAttribute(a,g),Jo.fromBufferAttribute(a,m),d.push(Ko.x,Ko.y,Ko.z),d.push(Jo.x,Jo.y,Jo.z)}this.setAttribute("position",new Tn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zw extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yg,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Sd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Kw{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null}}}const Jw=new Kw;class v0{constructor(e){this.manager=e!==void 0?e:Jw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ci={};class Qw extends Error{constructor(e,n){super(e),this.response=n}}class eT extends v0{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Sd.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:n,onProgress:i,onError:s});return}ci[e]=[],ci[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=ci[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,T=f.length;E<T;E++){const L=f[E];L.onProgress&&L.onProgress(M)}p.enqueue(x),S()}})}}});return new Response(m)}else throw new Qw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Sd.add(e,c);const f=ci[e];delete ci[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const f=ci[e];if(f===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xf extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class tT extends Xf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const dc=new St,bd=new k,wd=new k;class nT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gf,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),n.position.copy(bd),wd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wd),n.updateMatrixWorld(),dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iT extends nT{constructor(){super(new h0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Td extends Xf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new iT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sT extends Xf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);class Ad extends v0{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new eT(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function n(c){const f=new DataView(c),u=32/8*3+32/8*3*3+16/8,h=f.getUint32(80,!0);if(80+32/8+h*u===f.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,f,g))return!1;return!0}function i(c,f,u){for(let h=0,d=c.length;h<d;h++)if(c[h]!==f.getUint8(u+h))return!1;return!0}function s(c){const f=new DataView(c),u=f.getUint32(80,!0);let h,d,_,g=!1,m,p,S,y,x;for(let w=0;w<70;w++)f.getUint32(w,!1)==1129270351&&f.getUint8(w+4)==82&&f.getUint8(w+5)==61&&(g=!0,m=new Float32Array(u*3*3),p=f.getUint8(w+6)/255,S=f.getUint8(w+7)/255,y=f.getUint8(w+8)/255,x=f.getUint8(w+9)/255);const M=84,E=12*4+2,T=new kn,L=new Float32Array(u*3*3),v=new Float32Array(u*3*3);for(let w=0;w<u;w++){const N=M+w*E,U=f.getFloat32(N,!0),I=f.getFloat32(N+4,!0),F=f.getFloat32(N+8,!0);if(g){const B=f.getUint16(N+48,!0);B&32768?(h=p,d=S,_=y):(h=(B&31)/31,d=(B>>5&31)/31,_=(B>>10&31)/31)}for(let B=1;B<=3;B++){const z=N+B*12,G=w*3*3+(B-1)*3;L[G]=f.getFloat32(z,!0),L[G+1]=f.getFloat32(z+4,!0),L[G+2]=f.getFloat32(z+8,!0),v[G]=U,v[G+1]=I,v[G+2]=F,g&&(m[G]=h,m[G+1]=d,m[G+2]=_)}}return T.setAttribute("position",new xn(L,3)),T.setAttribute("normal",new xn(v,3)),g&&(T.setAttribute("color",new xn(m,3)),T.hasColors=!0,T.alpha=x),T}function r(c){const f=new kn,u=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let d=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),p=[],S=[],y=new k;let x,M=0,E=0,T=0;for(;(x=u.exec(c))!==null;){E=T;const L=x[0];for(;(x=h.exec(L))!==null;){let N=0,U=0;const I=x[0];for(;(x=m.exec(I))!==null;)y.x=parseFloat(x[1]),y.y=parseFloat(x[2]),y.z=parseFloat(x[3]),U++;for(;(x=g.exec(I))!==null;)p.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])),S.push(y.x,y.y,y.z),N++,T++;U!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),N!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const v=E,w=T-E;f.addGroup(v,w,M),M++}return f.setAttribute("position",new Tn(p,3)),f.setAttribute("normal",new Tn(S,3)),f}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const f=new Uint8Array(c.length);for(let u=0;u<c.length;u++)f[u]=c.charCodeAt(u)&255;return f.buffer||f}else return c}const l=a(e);return n(l)?s(l):r(o(e))}}const pc={type:"change"},mc={type:"start"},gc={type:"end"};class rT extends Ms{constructor(e,n){super();const i=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Fl.ROTATE,MIDDLE:Fl.DOLLY,RIGHT:Fl.PAN},this.target=new k;const r=1e-6,o=new k;let a=1,l=s.NONE,c=s.NONE,f=0,u=0,h=0;const d=new k,_=new Ge,g=new Ge,m=new k,p=new Ge,S=new Ge,y=new Ge,x=new Ge,M=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const A=i.domElement.getBoundingClientRect(),ue=i.domElement.ownerDocument.documentElement;i.screen.left=A.left+window.pageXOffset-ue.clientLeft,i.screen.top=A.top+window.pageYOffset-ue.clientTop,i.screen.width=A.width,i.screen.height=A.height};const T=function(){const A=new Ge;return function(Se,de){return A.set((Se-i.screen.left)/i.screen.width,(de-i.screen.top)/i.screen.height),A}}(),L=function(){const A=new Ge;return function(Se,de){return A.set((Se-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-de))/i.screen.width),A}}();this.rotateCamera=function(){const A=new k,ue=new _r,Se=new k,de=new k,Pe=new k,P=new k;return function(){P.set(g.x-_.x,g.y-_.y,0);let V=P.length();V?(d.copy(i.object.position).sub(i.target),Se.copy(d).normalize(),de.copy(i.object.up).normalize(),Pe.crossVectors(de,Se).normalize(),de.setLength(g.y-_.y),Pe.setLength(g.x-_.x),P.copy(de.add(Pe)),A.crossVectors(P,d).normalize(),V*=i.rotateSpeed,ue.setFromAxisAngle(A,V),d.applyQuaternion(ue),i.object.up.applyQuaternion(ue),m.copy(A),h=V):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),d.copy(i.object.position).sub(i.target),ue.setFromAxisAngle(m,h),d.applyQuaternion(ue),i.object.up.applyQuaternion(ue)),_.copy(g)}}(),this.zoomCamera=function(){let A;l===s.TOUCH_ZOOM_PAN?(A=f/u,f=u,i.object.isPerspectiveCamera?d.multiplyScalar(A):i.object.isOrthographicCamera?(i.object.zoom=Dh.clamp(i.object.zoom/A,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(A=1+(S.y-p.y)*i.zoomSpeed,A!==1&&A>0&&(i.object.isPerspectiveCamera?d.multiplyScalar(A):i.object.isOrthographicCamera?(i.object.zoom=Dh.clamp(i.object.zoom/A,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(S):p.y+=(S.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const A=new Ge,ue=new k,Se=new k;return function(){if(A.copy(x).sub(y),A.lengthSq()){if(i.object.isOrthographicCamera){const Pe=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,P=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;A.x*=Pe,A.y*=P}A.multiplyScalar(d.length()*i.panSpeed),Se.copy(d).cross(i.object.up).setLength(A.x),Se.add(ue.copy(i.object.up).setLength(A.y)),i.object.position.add(Se),i.target.add(Se),i.staticMoving?y.copy(x):y.add(A.subVectors(x,y).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(d.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,d.setLength(i.maxDistance)),p.copy(S)),d.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,d.setLength(i.minDistance)),p.copy(S)))},this.update=function(){d.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,d),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>r&&(i.dispatchEvent(pc),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>r||a!==i.object.zoom)&&(i.dispatchEvent(pc),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=s.NONE,c=s.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),d.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(pc),o.copy(i.object.position),a=i.object.zoom};function v(A){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",N)),Y(A),A.pointerType==="touch"?oe(A):B(A))}function w(A){i.enabled!==!1&&(A.pointerType==="touch"?ee(A):z(A))}function N(A){i.enabled!==!1&&(A.pointerType==="touch"?be(A):G(),se(A),M.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N)))}function U(A){se(A)}function I(A){i.enabled!==!1&&(window.removeEventListener("keydown",I),c===s.NONE&&(A.code===i.keys[s.ROTATE]&&!i.noRotate?c=s.ROTATE:A.code===i.keys[s.ZOOM]&&!i.noZoom?c=s.ZOOM:A.code===i.keys[s.PAN]&&!i.noPan&&(c=s.PAN)))}function F(){i.enabled!==!1&&(c=s.NONE,window.addEventListener("keydown",I))}function B(A){if(l===s.NONE)switch(A.button){case i.mouseButtons.LEFT:l=s.ROTATE;break;case i.mouseButtons.MIDDLE:l=s.ZOOM;break;case i.mouseButtons.RIGHT:l=s.PAN;break}const ue=c!==s.NONE?c:l;ue===s.ROTATE&&!i.noRotate?(g.copy(L(A.pageX,A.pageY)),_.copy(g)):ue===s.ZOOM&&!i.noZoom?(p.copy(T(A.pageX,A.pageY)),S.copy(p)):ue===s.PAN&&!i.noPan&&(y.copy(T(A.pageX,A.pageY)),x.copy(y)),i.dispatchEvent(mc)}function z(A){const ue=c!==s.NONE?c:l;ue===s.ROTATE&&!i.noRotate?(_.copy(g),g.copy(L(A.pageX,A.pageY))):ue===s.ZOOM&&!i.noZoom?S.copy(T(A.pageX,A.pageY)):ue===s.PAN&&!i.noPan&&x.copy(T(A.pageX,A.pageY))}function G(){l=s.NONE,i.dispatchEvent(gc)}function W(A){if(i.enabled!==!1&&i.noZoom!==!0){switch(A.preventDefault(),A.deltaMode){case 2:p.y-=A.deltaY*.025;break;case 1:p.y-=A.deltaY*.01;break;default:p.y-=A.deltaY*25e-5;break}i.dispatchEvent(mc),i.dispatchEvent(gc)}}function oe(A){switch(ge(A),M.length){case 1:l=s.TOUCH_ROTATE,g.copy(L(M[0].pageX,M[0].pageY)),_.copy(g);break;default:l=s.TOUCH_ZOOM_PAN;const ue=M[0].pageX-M[1].pageX,Se=M[0].pageY-M[1].pageY;u=f=Math.sqrt(ue*ue+Se*Se);const de=(M[0].pageX+M[1].pageX)/2,Pe=(M[0].pageY+M[1].pageY)/2;y.copy(T(de,Pe)),x.copy(y);break}i.dispatchEvent(mc)}function ee(A){switch(ge(A),M.length){case 1:_.copy(g),g.copy(L(A.pageX,A.pageY));break;default:const ue=_e(A),Se=A.pageX-ue.x,de=A.pageY-ue.y;u=Math.sqrt(Se*Se+de*de);const Pe=(A.pageX+ue.x)/2,P=(A.pageY+ue.y)/2;x.copy(T(Pe,P));break}}function be(A){switch(M.length){case 0:l=s.NONE;break;case 1:l=s.TOUCH_ROTATE,g.copy(L(A.pageX,A.pageY)),_.copy(g);break;case 2:l=s.TOUCH_ZOOM_PAN;for(let ue=0;ue<M.length;ue++)if(M[ue].pointerId!==A.pointerId){const Se=E[M[ue].pointerId];g.copy(L(Se.x,Se.y)),_.copy(g);break}break}i.dispatchEvent(gc)}function ce(A){i.enabled!==!1&&A.preventDefault()}function Y(A){M.push(A)}function se(A){delete E[A.pointerId];for(let ue=0;ue<M.length;ue++)if(M[ue].pointerId==A.pointerId){M.splice(ue,1);return}}function ge(A){let ue=E[A.pointerId];ue===void 0&&(ue=new Ge,E[A.pointerId]=ue),ue.set(A.pageX,A.pageY)}function _e(A){const ue=A.pointerId===M[0].pointerId?M[1]:M[0];return E[ue.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ce),i.domElement.removeEventListener("pointerdown",v),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",W),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N),window.removeEventListener("keydown",I),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",ce),this.domElement.addEventListener("pointerdown",v),this.domElement.addEventListener("pointercancel",U),this.domElement.addEventListener("wheel",W,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",F),this.handleResize(),this.update()}}function oT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const aT=1e-5,lT=1e-13,cT=Math.PI*2;var je={EPS:aT,NEPS:lT,TAU:cT};const fT=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);var uT=fT;const hT=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);var dT=hT;const pT=t=>Math.atan2(t[1],t[0]);var qf=pT,mT=qf;const gT=qf,_T=t=>gT(t)*57.29577951308232;var vT=_T;const xT=()=>[0,0];var il=xT;const yT=il,MT=t=>{const e=yT();return e[0]=t[0],e[1]=t[1],e};var ET=MT;const ST=(t,e)=>(t[0]=e[0],t[1]=e[1],t);var bT=ST;const wT=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);var TT=wT;const AT=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};var RT=AT;const CT=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);var PT=CT;const LT=(t,e)=>t[0]*e[0]+t[1]*e[1];var DT=LT;const UT=(t,e)=>t[0]===e[0]&&t[1]===e[1];var IT=UT;const{NEPS:NT}=je,x0=t=>Math.abs(t)<NT?0:t,FT=t=>x0(Math.sin(t)),OT=t=>x0(Math.cos(t));var Ft={sin:FT,cos:OT};const{sin:BT,cos:HT}=Ft,zT=(t,e)=>(t[0]=HT(e),t[1]=BT(e),t);var y0=zT;const VT=y0,kT=(t,e)=>VT(t,e*.017453292519943295);var GT=kT;const $T=(t,e)=>(t[0]=e,t[1]=e,t);var WT=$T;const XT=il,qT=(t,e)=>{const n=XT();return n[0]=t,n[1]=e,n};var jT=qT;const YT=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);var ZT=YT;const KT=(t,e,n,i)=>{const s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};var JT=KT;const QT=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);var eA=QT;const tA=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);var nA=tA;const iA=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);var sA=iA;const rA=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);var oA=rA;const aA=(t,e,n,i)=>{const s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};var M0=aA;const{TAU:lA}=je,cA=il,fA=M0,uA=(t,e)=>fA(t,e,cA(),lA/4);var hA=uA;const dA=(t,e)=>{const n=e[0],i=e[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};var pA=dA;const mA=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);var gA=mA;const _A=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);var vA=_A;const xA=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};var yA=xA;const MA=t=>{const e=t[0],n=t[1];return e*e+n*n};var EA=MA;const SA=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);var bA=SA;const wA=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;var TA=wA;const AA=(t,e,n)=>{const i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};var RA=AA,$e={abs:uT,add:dT,angle:mT,angleDegrees:vT,angleRadians:qf,clone:ET,copy:bT,create:il,cross:TT,distance:RT,divide:PT,dot:DT,equals:IT,fromAngleDegrees:GT,fromAngleRadians:y0,fromScalar:WT,fromValues:jT,length:ZT,lerp:JT,max:eA,min:nA,multiply:sA,negate:oA,normal:hA,normalize:pA,rotate:M0,scale:gA,snap:vA,squaredDistance:yA,squaredLength:EA,subtract:bA,toString:TA,transform:RA};const CA=t=>Object.assign({},t);var jf=CA;const{EPS:Rd}=je,PA=$e,LA=jf,DA=t=>{if(t.isClosed)return t;const e=LA(t);if(e.isClosed=!0,e.points.length>1){const n=e.points,i=n[0];let s=n[n.length-1];for(;PA.distance(i,s)<Rd*Rd&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};var E0=DA;const UA=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);var IA=UA;const NA=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var Yf=NA;const FA=Yf,OA=t=>{const e=FA();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};var BA=OA;const HA=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);var S0=HA;const zA=(t,e)=>{const n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=n*a-i*o,y=n*l-s*o,x=n*c-r*o,M=i*l-s*a,E=i*c-r*a,T=s*c-r*l,L=f*g-u*_,v=f*m-h*_,w=f*p-d*_,N=u*m-h*g,U=u*p-d*g,I=h*p-d*m;let F=S*I-y*U+x*N+M*w-E*v+T*L;return F?(F=1/F,t[0]=(a*I-l*U+c*N)*F,t[1]=(s*U-i*I-r*N)*F,t[2]=(g*T-m*E+p*M)*F,t[3]=(h*E-u*T-d*M)*F,t[4]=(l*w-o*I-c*v)*F,t[5]=(n*I-s*w+r*v)*F,t[6]=(m*x-_*T-p*y)*F,t[7]=(f*T-h*x+d*y)*F,t[8]=(o*U-a*w+c*L)*F,t[9]=(i*w-n*U-r*L)*F,t[10]=(_*E-g*x+p*S)*F,t[11]=(u*x-f*E-d*S)*F,t[12]=(a*v-o*N-l*L)*F,t[13]=(n*N-i*v+s*L)*F,t[14]=(g*y-_*M-m*S)*F,t[15]=(f*M-u*y+h*S)*F,t):null};var VA=zA;const kA=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];var GA=kA;const $A=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var b0=$A;const{EPS:WA}=je,{sin:XA,cos:qA}=Ft,jA=b0,YA=(t,e,n)=>{let[i,s,r]=n;const o=i*i+s*s+r*r;if(Math.abs(o)<WA)return jA(t);const a=1/Math.sqrt(o);i*=a,s*=a,r*=a;const l=XA(e),c=qA(e),f=1-c;return t[0]=i*i*f+c,t[1]=s*i*f+r*l,t[2]=r*i*f-s*l,t[3]=0,t[4]=i*s*f-r*l,t[5]=s*s*f+c,t[6]=r*s*f+i*l,t[7]=0,t[8]=i*r*f+s*l,t[9]=s*r*f-i*l,t[10]=r*r*f+c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var w0=YA;const ZA=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var KA=ZA;const{sin:_c,cos:vc}=Ft,JA=(t,e,n,i)=>{const s=_c(e),r=vc(e),o=_c(n),a=vc(n),l=_c(i),c=vc(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=l*o*r-c*s,t[5]=c*r+l*o*s,t[6]=l*a,t[7]=0,t[8]=l*s+c*o*r,t[9]=c*o*s-l*r,t[10]=c*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var QA=JA;const e2=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);var t2=e2;const n2=Yf,i2=(t,e,n,i,s,r,o,a,l,c,f,u,h,d,_,g)=>{const m=n2();return m[0]=t,m[1]=e,m[2]=n,m[3]=i,m[4]=s,m[5]=r,m[6]=o,m[7]=a,m[8]=l,m[9]=c,m[10]=f,m[11]=u,m[12]=h,m[13]=d,m[14]=_,m[15]=g,m};var s2=i2;const r2=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);var T0=r2;const o2=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);var A0=o2;const a2=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];var sl=a2;const l2=sl,c2=(t,e)=>{const n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],l=Math.sqrt(n*n+i*i+s*s),c=Math.sqrt(r*r+o*o+a*a),f=l*c,u=f&&l2(t,e)/f;return Math.acos(Math.min(Math.max(u,-1),1))};var f2=c2;const u2=()=>[0,0,0];var rl=u2;const h2=rl,d2=t=>{const e=h2();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var p2=d2;const m2=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var R0=m2;const g2=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],l=n[2];return t[0]=s*l-r*a,t[1]=r*o-i*l,t[2]=i*a-s*o,t};var xo=g2;const _2=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};var C0=_2;const v2=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);var x2=v2;const y2=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var M2=y2;const E2=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);var S2=E2;const b2=rl,w2=(t,e,n)=>{const i=b2();return i[0]=t,i[1]=e,i[2]=n,i};var T2=w2;const A2=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);var R2=A2;const C2=t=>{const e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};var P0=C2;const P2=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);var L2=P2;const D2=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);var U2=D2;const I2=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);var N2=I2;const F2=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);var O2=F2;const B2=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);var H2=B2;const z2=(t,e)=>{const n=e[0],i=e[1],s=e[2];let r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};var Zf=z2;const V2=T0,k2=rl,G2=xo,$2=(t,e)=>{const n=V2(k2(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return G2(t,e,[i,s,r])};var W2=$2;const X2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var q2=X2;const j2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var Y2=j2;const Z2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};var K2=Z2;const J2=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);var L0=J2;const Q2=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);var eR=Q2;const tR=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};var D0=tR;const nR=t=>{const e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};var U0=nR;const iR=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);var ol=iR;const sR=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;var rR=sR;const oR=(t,e,n)=>{const i=e[0],s=e[1],r=e[2];let o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};var aR=oR,He={abs:T0,add:A0,angle:f2,clone:p2,copy:R0,create:rl,cross:xo,distance:C0,divide:x2,dot:sl,equals:M2,fromScalar:S2,fromValues:T2,fromVec2:R2,length:P0,lerp:L2,max:U2,min:N2,multiply:O2,negate:H2,normalize:Zf,orthogonal:W2,rotateX:q2,rotateY:Y2,rotateZ:K2,scale:L0,snap:eR,squaredDistance:D0,squaredLength:U0,subtract:ol,toString:rR,transform:aR};const Ri=He,lR=w0,cR=(t,e,n)=>{const i=Ri.normalize(Ri.create(),e),s=Ri.normalize(Ri.create(),n),r=Ri.cross(Ri.create(),s,i),o=Ri.dot(s,i);if(o===-1)return lR(t,Math.PI,Ri.orthogonal(r,i));const a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var fR=cR;const{sin:uR,cos:hR}=Ft,dR=(t,e)=>{const n=uR(e),i=hR(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var pR=dR;const{sin:mR,cos:gR}=Ft,_R=(t,e)=>{const n=mR(e),i=gR(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var vR=_R;const{sin:xR,cos:yR}=Ft,MR=(t,e)=>{const n=xR(e),i=yR(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var ER=MR;const SR=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;var bR=SR;const wR=t=>fi(t[1])&&fi(t[2])&&fi(t[3])&&fi(t[4])&&fi(t[6])&&fi(t[7])&&fi(t[8])&&fi(t[9])&&fi(t[11])&&t[15]===1,fi=t=>Math.abs(t)<Number.EPSILON;var TR=wR;const AR=t=>{const e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};var RR=AR;const CR=(t,e)=>{const[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};var PR=CR;const LR=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],f=e[7],u=e[8],h=e[9],d=e[10],_=e[11],g=e[12],m=e[13],p=e[14],S=e[15];let y=n[0],x=n[1],M=n[2],E=n[3];return t[0]=y*i+x*a+M*u+E*g,t[1]=y*s+x*l+M*h+E*m,t[2]=y*r+x*c+M*d+E*p,t[3]=y*o+x*f+M*_+E*S,y=n[4],x=n[5],M=n[6],E=n[7],t[4]=y*i+x*a+M*u+E*g,t[5]=y*s+x*l+M*h+E*m,t[6]=y*r+x*c+M*d+E*p,t[7]=y*o+x*f+M*_+E*S,y=n[8],x=n[9],M=n[10],E=n[11],t[8]=y*i+x*a+M*u+E*g,t[9]=y*s+x*l+M*h+E*m,t[10]=y*r+x*c+M*d+E*p,t[11]=y*o+x*f+M*_+E*S,y=n[12],x=n[13],M=n[14],E=n[15],t[12]=y*i+x*a+M*u+E*g,t[13]=y*s+x*l+M*h+E*m,t[14]=y*r+x*c+M*d+E*p,t[15]=y*o+x*f+M*_+E*S,t};var DR=LR;const{EPS:UR}=je,{sin:IR,cos:NR}=Ft,FR=S0,OR=(t,e,n,i)=>{let[s,r,o]=i;const a=s*s+r*r+o*o;if(Math.abs(a)<UR)return FR(t,e);const l=1/Math.sqrt(a);s*=l,r*=l,o*=l;const c=IR(n),f=NR(n),u=1-f,h=e[0],d=e[1],_=e[2],g=e[3],m=e[4],p=e[5],S=e[6],y=e[7],x=e[8],M=e[9],E=e[10],T=e[11],L=s*s*u+f,v=r*s*u+o*c,w=o*s*u-r*c,N=s*r*u-o*c,U=r*r*u+f,I=o*r*u+s*c,F=s*o*u+r*c,B=r*o*u-s*c,z=o*o*u+f;return t[0]=h*L+m*v+x*w,t[1]=d*L+p*v+M*w,t[2]=_*L+S*v+E*w,t[3]=g*L+y*v+T*w,t[4]=h*N+m*U+x*I,t[5]=d*N+p*U+M*I,t[6]=_*N+S*U+E*I,t[7]=g*N+y*U+T*I,t[8]=h*F+m*B+x*z,t[9]=d*F+p*B+M*z,t[10]=_*F+S*B+E*z,t[11]=g*F+y*B+T*z,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};var BR=OR;const{sin:HR,cos:zR}=Ft,VR=(t,e,n)=>{const i=HR(n),s=zR(n),r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+c*i,t[5]=o*s+f*i,t[6]=a*s+u*i,t[7]=l*s+h*i,t[8]=c*s-r*i,t[9]=f*s-o*i,t[10]=u*s-a*i,t[11]=h*s-l*i,t};var kR=VR;const{sin:GR,cos:$R}=Ft,WR=(t,e,n)=>{const i=GR(n),s=$R(n),r=e[0],o=e[1],a=e[2],l=e[3],c=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-c*i,t[1]=o*s-f*i,t[2]=a*s-u*i,t[3]=l*s-h*i,t[8]=r*i+c*s,t[9]=o*i+f*s,t[10]=a*i+u*s,t[11]=l*i+h*s,t};var XR=WR;const{sin:qR,cos:jR}=Ft,YR=(t,e,n)=>{const i=qR(n),s=jR(n),r=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],u=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+c*i,t[1]=o*s+f*i,t[2]=a*s+u*i,t[3]=l*s+h*i,t[4]=c*s-r*i,t[5]=f*s-o*i,t[6]=u*s-a*i,t[7]=h*s-l*i,t};var ZR=YR;const KR=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};var JR=KR;const QR=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);var eC=QR;const tC=t=>t.map(e=>e.toFixed(7)).toString();var nC=tC;const iC=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];let o,a,l,c,f,u,h,d,_,g,m,p;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],l=e[2],c=e[3],f=e[4],u=e[5],h=e[6],d=e[7],_=e[8],g=e[9],m=e[10],p=e[11],t[0]=o,t[1]=a,t[2]=l,t[3]=c,t[4]=f,t[5]=u,t[6]=h,t[7]=d,t[8]=_,t[9]=g,t[10]=m,t[11]=p,t[12]=o*i+f*s+_*r+e[12],t[13]=a*i+u*s+g*r+e[13],t[14]=l*i+h*s+m*r+e[14],t[15]=c*i+d*s+p*r+e[15]),t};var sC=iC,dt={add:IA,clone:BA,copy:S0,create:Yf,invert:VA,equals:GA,fromRotation:w0,fromScaling:KA,fromTaitBryanRotation:QA,fromTranslation:t2,fromValues:s2,fromVectorRotation:fR,fromXRotation:pR,fromYRotation:vR,fromZRotation:ER,identity:b0,isIdentity:bR,isOnlyTransformScale:TR,isMirroring:RR,mirrorByPlane:PR,multiply:DR,rotate:BR,rotateX:kR,rotateY:XR,rotateZ:ZR,scale:JR,subtract:eC,toString:nC,translate:sC};const rC=dt,oC=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:rC.create()});var al=oC;const{EPS:Cd}=je,Pd=$e,aC=E0,lC=al,cC=(t,e)=>{const n={closed:!1};let{closed:i}=Object.assign({},n,t),s=lC();if(s.points=e.map(r=>Pd.clone(r)),s.points.length>1){const r=s.points[0],o=s.points[s.points.length-1];Pd.distance(r,o)<Cd*Cd&&(i=!0)}return i===!0&&(s=aC(s)),s};var Kf=cC;const Ld=dt,Dd=$e,fC=t=>(Ld.isIdentity(t.transforms)||(t.points=t.points.map(e=>Dd.transform(Dd.create(),e,t.transforms)),t.transforms=Ld.create()),t);var uC=fC;const hC=uC,dC=t=>hC(t).points;var yr=dC;const{TAU:ea}=je,yt=$e,pC=Kf,mC=yr,gC=(t,e)=>{const n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:l}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=yt.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(l<4)throw new Error("segments must be four or more");const c=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");const f=mC(e);if(f.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let u=s[0],h=s[1];const d=f[f.length-1];u=Math.round(u*c)/c,h=Math.round(h*c)/c,i=yt.fromValues(Math.round(i[0]*c)/c,Math.round(i[1]*c)/c);const _=!o;let g=[];if(u===0||h===0)g.push(i);else{u=Math.abs(u),h=Math.abs(h);const p=r,S=Math.cos(p),y=Math.sin(p),x=yt.subtract(yt.create(),d,i);yt.scale(x,x,.5);const M=Math.round((S*x[0]+y*x[1])*c)/c,E=Math.round((-y*x[0]+S*x[1])*c)/c,T=yt.fromValues(M,E),L=T[0]*T[0]/(u*u)+T[1]*T[1]/(h*h);if(L>1){const W=Math.sqrt(L);u*=W,h*=W,u=Math.round(u*c)/c,h=Math.round(h*c)/c}let v=Math.sqrt((u*u*h*h-u*u*T[1]*T[1]-h*h*T[0]*T[0])/(u*u*T[1]*T[1]+h*h*T[0]*T[0]));_===a&&(v=-v);const w=yt.fromValues(u*T[1]/h,-h*T[0]/u);yt.scale(w,w,v);let N=yt.fromValues(S*w[0]-y*w[1],y*w[0]+S*w[1]);N=yt.add(N,N,yt.scale(yt.create(),yt.add(yt.create(),d,i),.5));const U=yt.fromValues((T[0]-w[0])/u,(T[1]-w[1])/h),I=yt.fromValues((-T[0]-w[0])/u,(-T[1]-w[1])/h),F=yt.angleRadians(U);let z=yt.angleRadians(I)-F;z=z%ea,!_&&z>0?z-=ea:_&&z<0&&(z+=ea);let G=Math.ceil(Math.abs(z)/ea*l)+1;G<1&&(G=1);for(let W=1;W<G;W++){const oe=F+W/G*z,ee=Math.cos(oe),be=Math.sin(oe),ce=yt.fromValues(S*u*ee-y*h*be,y*u*ee+S*h*be);yt.add(ce,ce,N),g.push(ce)}G&&g.push(t.endpoint)}return g=f.concat(g),pC({},g)};var _C=gC;const vC=Kf,xC=yr,{equals:yC}=$e,MC=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{const r=xC(i).slice();if(n.length>0&&r.length>0&&yC(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),vC({closed:e},n)};var I0=MC;const EC=I0,SC=al,bC=(t,e)=>EC(e,SC(t));var N0=bC;const{TAU:wC}=je,cn=$e,TC=$e,AC=N0,RC=yr,CC=(t,e)=>{const n={segments:16};let{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");const r=RC(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let E=r[r.length-2];if("lastBezierControlPoint"in e&&(E=e.lastBezierControlPoint),!Array.isArray(E))throw new Error("the given path must contain TWO or more points if given a null control point");const T=cn.scale(cn.create(),r[r.length-1],2);cn.subtract(T,T,E),i[0]=T}i.unshift(r[r.length-1]);const a=i.length-1,l=[];let c=1;for(let E=0;E<=a;++E)E>0&&(c*=E),l.push(c);const f=[];for(let E=0;E<=a;++E){const T=l[a]/(l[E]*l[a-E]);f.push(T)}const u=cn.create(),h=cn.create(),d=TC.create(),_=E=>{let T=1,L=Math.pow(1-E,a);const v=E!==1?1/(1-E):1,w=cn.create();for(let N=0;N<=a;++N){N===a&&(L=1);const U=f[N]*T*L,I=cn.scale(u,i[N],U);cn.add(w,w,I),T*=E,L*=v}return w},g=[],m=[],p=a+1;for(let E=0;E<p;++E){const T=E/(p-1),L=_(T);g.push(L),m.push(T)}let S=1;const y=wC/s,x=Math.sin(y);for(;S<g.length-1;){const E=cn.subtract(u,g[S],g[S-1]);cn.normalize(E,E);const T=cn.subtract(h,g[S+1],g[S]);cn.normalize(T,T);const L=cn.cross(d,E,T);if(Math.abs(L[2])>x){const v=m[S-1],w=m[S+1],N=v+(w-v)*1/3,U=v+(w-v)*2/3,I=_(N),F=_(U);g.splice(S,1,I,F),m.splice(S,1,N,U),S--,S<1&&(S=1)}else++S}g.shift();const M=AC(g,e);return M.lastBezierControlPoint=i[i.length-2],M};var PC=CC;const LC=$e,Ud=yr,DC=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;const n=Ud(t),i=Ud(e),s=n.length;let r=0;do{let o=!1;for(let a=0;a<s;a++)if(!LC.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};var UC=DC;const IC=dt,NC=$e,FC=al,OC=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");const e=FC();e.transforms=IC.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){const i=NC.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};var BC=OC;const HC=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);var F0=HC;const zC=jf,VC=t=>{const e=zC(t);return e.points=t.points.slice().reverse(),e};var kC=VC;const GC=$e,$C=yr,WC=t=>{const e=$C(t);let n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+GC.toString(i)+`,
`}),n+=`]
`,n};var XC=WC;const qC=t=>{const e=t.points,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){const o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};var jC=qC;const Id=dt,YC=(t,e)=>{const n=Id.multiply(Id.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var ZC=YC;const KC=$e,JC=F0,QC=t=>{if(!JC(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if(KC.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};var eP=QC,Rn={appendArc:_C,appendBezier:PC,appendPoints:N0,clone:jf,close:E0,concat:I0,create:al,equals:UC,fromPoints:Kf,fromCompactBinary:BC,isA:F0,reverse:kC,toPoints:yr,toString:XC,toCompactBinary:jC,transform:ZC,validate:eP};const tP=(t,e)=>Array.isArray(t)&&t.length>=e?t.every(n=>Number.isFinite(n)):!1,nP=(t,e)=>Number.isFinite(t)&&t>e,iP=(t,e)=>Number.isFinite(t)&&t>=e;var At={isNumberArray:tP,isGT:nP,isGTE:iP};const{EPS:Nd,TAU:zs}=je,ui=$e,sP=Rn,{isGT:rP,isGTE:xc,isNumberArray:oP}=At,aP=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:zs,makeTangent:!1,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,makeTangent:o,segments:a}=Object.assign({},e,t);if(!oP(n,2))throw new Error("center must be an array of X and Y values");if(!rP(i,0))throw new Error("radius must be greater than zero");if(!xc(s,0))throw new Error("startAngle must be positive");if(!xc(r,0))throw new Error("endAngle must be positive");if(!xc(a,4))throw new Error("segments must be four or more");s=s%zs,r=r%zs;let l=zs;s<r&&(l=r-s),s>r&&(l=r+(zs-s));const c=Math.acos((i*i+i*i-Nd*Nd)/(2*i*i)),f=ui.clone(n);let u;const h=[];if(l<c)u=ui.fromAngleRadians(ui.create(),s),ui.scale(u,u,i),ui.add(u,u,f),h.push(u);else{const d=Math.max(1,Math.floor(a*(l/zs)))+1;let _=d*.5/l;_>.25&&(_=.25);const g=o?d+2:d;for(let m=0;m<=g;m++){let p=m;o&&(p=(m-1)*(d-2*_)/d+_,p<0&&(p=0),p>d&&(p=d));const S=s+p*(l/d);u=ui.fromAngleRadians(ui.create(),S),ui.scale(u,u,i),ui.add(u,u,f),h.push(u)}}return sP.fromPoints({closed:!1},h)};var lP=aP;const cP=t=>Object.assign({},t);var fP=cP;const uP=dt,hP=t=>(t===void 0&&(t=[]),{sides:t,transforms:uP.create()});var ll=hP;const yc=$e,dP=ll,pP=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");yc.equals(t[0],t[e-1])&&--e;const n=[];let i=t[e-1];for(let s=0;s<e;s++){const r=t[s];n.push([yc.clone(i),yc.clone(r)]),i=r}return dP(n)};var mP=pP;const gP=dt,Fd=$e,_P=ll,vP=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");const e=_P();e.transforms=gP.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){const i=Fd.fromValues(t[n+0],t[n+1]),s=Fd.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var xP=vP;const yP=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);var O0=yP;const Od=dt,ta=$e,MP=t=>(Od.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{const n=ta.transform(ta.create(),e[0],t.transforms),i=ta.transform(ta.create(),e[1],t.transforms);return[n,i]}),t.transforms=Od.create()),t);var EP=MP;const SP=EP,bP=t=>SP(t).sides;var yo=bP;const wP=ll,TP=yo,AP=t=>{const n=TP(t).map(i=>[i[1],i[0]]);return n.reverse(),wP(n)};var B0=AP;const Dr=$e,RP=yo,CP=t=>{const e=new Map,n=i=>{const s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},PP=t=>{const e=new Map;return CP(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},LP=t=>{const e=PP(RP(t)),n=[];for(;;){let i;for(const[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;const s=[],r=i[0];for(;;){s.push(i[0]);const o=i[1];if(o===r)break;const a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);const l=DP(i,a);a.length===0&&e.delete(o),i=l}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},DP=(t,e)=>{if(e.length===1)return e.pop();const n=Dr.create(),i=Dr.angleDegrees(Dr.subtract(n,t[1],t[0]));let s,r;e.forEach((a,l)=>{let f=Dr.angleDegrees(Dr.subtract(n,a[1],a[0]))-i;f<-180&&(f+=360),f>=180&&(f-=360),(r===void 0||f>s)&&(r=l,s=f)});const o=e[r];return e.splice(r,1),o};var H0=LP;const UP=yo,IP=t=>{const n=UP(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};var NP=IP;const Bd=$e,FP=yo,OP=t=>{const e=FP(t);let n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+Bd.toString(i[0])+", "+Bd.toString(i[1])+`]
`}),n+=`]
`,n};var BP=OP;const HP=t=>{const e=t.sides,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){const o=r*4+21,a=e[r][0],l=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=l[0],s[o+3]=l[1]}return s};var zP=HP;const Hd=dt,VP=B0,kP=(t,e)=>{const n=Hd.multiply(Hd.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?VP(i):i};var GP=kP;const $P=$e,WP=O0,XP=H0,qP=t=>{if(!WP(t))throw new Error("invalid geom2 structure");if(XP(t),t.sides.forEach(e=>{if($P.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};var jP=qP,ht={clone:fP,create:ll,fromPoints:mP,fromCompactBinary:xP,isA:O0,reverse:B0,toOutlines:H0,toPoints:NP,toSides:yo,toString:BP,toCompactBinary:zP,transform:GP,validate:jP};const{EPS:zd,TAU:Ci}=je,Mc=$e,Vd=ht,{sin:YP,cos:ZP}=Ft,{isGTE:Ec,isNumberArray:kd}=At,KP=t=>{const e={center:[0,0],radius:[1,1],startAngle:0,endAngle:Ci,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!kd(n,2))throw new Error("center must be an array of X and Y values");if(!kd(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!Ec(s,0))throw new Error("startAngle must be positive");if(!Ec(r,0))throw new Error("endAngle must be positive");if(!Ec(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return Vd.create();s=s%Ci,r=r%Ci;let a=Ci;s<r&&(a=r-s),s>r&&(a=r+(Ci-s));const l=Math.min(i[0],i[1]),c=Math.acos((l*l+l*l-zd*zd)/(2*l*l));if(a<c)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/Ci));const f=Mc.clone(n),u=a/o,h=[];o=a<Ci?o+1:o;for(let d=0;d<o;d++){const _=u*d+s,g=Mc.fromValues(i[0]*ZP(_),i[1]*YP(_));Mc.add(g,f,g),h.push(g)}return a<Ci&&h.push(f),Vd.fromPoints(h)};var z0=KP;const{TAU:JP}=je,QP=z0,{isGTE:eL}=At,tL=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:JP,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!eL(i,0))throw new Error("radius must be positive");return i=[i,i],QP({center:n,radius:i,startAngle:s,endAngle:r,segments:o})};var V0=tL;const nL=t=>Object.assign({},t);var iL=nL;const sL=dt,rL=t=>(t===void 0&&(t=[]),{polygons:t,transforms:sL.create()});var Mo=rL;const oL=xo,Gd=ol,$d=U0,aL=(t,e,n)=>{const i=[],s=[],r=[];Gd(i,n,e),Gd(s,t,e);const o=$d(oL(r,s,i)),a=$d(i);if(a===0)throw Error("a and b are the same point");return o/a},lL=(t,e,n)=>Math.sqrt(aL(t,e,n));var cL=lL;const fL=xo,uL=Zf,Wd=ol,hL=(t,e,n,i)=>{const s=[0,0,0];return Wd(t,e,n),Wd(s,n,i),fL(t,t,s),uL(t,t)};var dL=hL;let pL=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};var mL=pL;let gL=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};var _L=gL;const vL=C0,xL=D0;let yL=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?vL(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?xL(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};var ML=yL;const Sc=A0,EL=R0,SL=xo,bc=sl,bL=P0,wL=Zf,na=L0,wc=ol,Tc=ML,k0=0,TL=1,gf=2;let AL=class G0{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=k0,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){const e=this.edge,n=e.next;let i=n.next;const s=wc([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)EL(o,s),wc(s,i.head().point,e.head().point),Sc(this.normal,this.normal,SL(r,o,s)),i=i.next,this.nVertices+=1;this.area=bL(this.normal),this.normal=na(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{const f=s.lengthSquared();f>i&&(n=s,i=f),s=s.next}while(s!==this.edge);const r=n.tail().point,o=n.head().point,a=wc([],o,r),l=Math.sqrt(i);na(a,a,1/l);const c=bc(this.normal,a);na(a,a,-c),Sc(this.normal,this.normal,a),wL(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do Sc(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);na(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=bc(this.normal,this.centroid)}distanceToPlane(e){return bc(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){const s=n.opposite.face;let r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=gf,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){const i=e.opposite,s=i.face;n.push(s),s.mark=gf;let r=e.prev,o=e.next,a=i.prev,l=i.next;for(;r.opposite.face===s;)r=r.prev,l=l.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let c;for(c=l;c!==a.next;c=c.next)c.face=this;this.edge=o;let f;return f=this.connectHalfEdges(a,o),f&&n.push(f),f=this.connectHalfEdges(r,l),f&&n.push(f),this.computeNormalAndCentroid(),n}collectIndices(){const e=[];let n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){const r=new G0,o=new Tc(e,r),a=new Tc(n,r),l=new Tc(i,r);return o.next=l.prev=a,a.next=o.prev=l,l.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};var RL={VISIBLE:k0,NON_CONVEX:TL,DELETED:gf,Face:AL};const Ac=sl,CL=cL,PL=dL,Xd=mL,LL=_L,{Face:hi,VISIBLE:Vs,NON_CONVEX:qd,DELETED:DL}=RL,UL=1,jd=2;let IL=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new Xd,this.unclaimed=new Xd,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new LL(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){const a=e[o];if(a.mark===Vs){const l=a.distanceToPlane(i.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){const e=[],n=[],i=[],s=[];let r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){const a=this.vertices[r],l=a.point;for(o=0;o<3;o+=1)l[o]<e[o]&&(e[o]=l[o],i[o]=a);for(o=0;o<3;o+=1)l[o]>n[o]&&(n[o]=l[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){const e=this.vertices,[n,i]=this.computeExtremes();let s,r,o,a,l=0,c=0;for(o=0;o<3;o+=1){const g=i[o].point[o]-n[o].point[o];g>l&&(l=g,c=o)}const f=n[c],u=i[c];for(l=0,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u){const m=CL(g.point,f.point,u.point);m>l&&(l=m,s=g)}}const h=PL([],f.point,u.point,s.point),d=Ac(f.point,h);for(l=-1,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u&&g!==s){const m=Math.abs(Ac(h,g.point)-d);m>l&&(l=m,r=g)}}const _=[];if(Ac(r.point,h)-d<0)for(_.push(hi.createTriangle(f,u,s),hi.createTriangle(r,u,f),hi.createTriangle(r,s,u),hi.createTriangle(r,f,s)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge(g)),_[o+1].getEdge(1).setOpposite(_[g+1].getEdge(0))}else for(_.push(hi.createTriangle(f,s,u),hi.createTriangle(r,f,u),hi.createTriangle(r,u,s),hi.createTriangle(r,s,f)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge((3-o)%3)),_[o+1].getEdge(0).setOpposite(_[g+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(_[o]);for(o=0;o<e.length;o+=1){const g=e[o];if(g!==f&&g!==u&&g!==s&&g!==r){l=this.tolerance;let m;for(a=0;a<4;a+=1){const p=_[a].distanceToPlane(g.point);p>l&&(l=p,m=_[a])}m&&this.addVertexToFace(g,m)}}}reindexFaceAndVertices(){const e=[];for(let n=0;n<this.faces.length;n+=1){const i=this.faces[n];i.mark===Vs&&e.push(i)}this.faces=e}collectFaces(e){const n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==Vs)throw Error("attempt to include a destroyed face in the hull");const s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0;const s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){const r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=DL;let r;n?r=n.next:r=n=i.getEdge(0);do{const o=r.opposite,a=o.face;a.mark===Vs&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){const i=hi.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){const o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");const o=i.opposite.face;let a=!1;if(n===jd?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){const l=e.mergeAdjacentFaces(i,[]);for(let c=0;c<l.length;c+=1)this.deleteFaceVertices(l[c],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=qd),!1}addVertexToHull(e){const n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Vs)for(;this.doAdjacentMerge(s,UL););}for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===qd)for(s.mark=Vs;this.doAdjacentMerge(s,jd););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};var NL=IL;const FL=NL,OL=(t,e={})=>{const n=new FL(t);return n.build(),n.collectFaces(e.skipTriangulation)};var BL=OL;const HL=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var Mr=HL;const zL=Mr,VL=He,kL=(...t)=>{let e,n;return t.length===1?(e=zL(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>VL.clone(i)),e};var GL=kL;const $L=He,WL=Mr,XL=t=>{const e=t.map(n=>$L.clone(n));return WL(e)};var qL=XL;const jL=Mr,YL=(t,e)=>{const n=jL(t);return n.plane=e,n};var ZL=YL;const KL=()=>[0,0,0,0];var cl=KL;const JL=cl,QL=t=>{const e=JL();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};var $0=QL;const e3=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);var W0=e3;const t3=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];var X0=t3;const n3=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);var q0=n3;const Rc=He,i3=(t,e,n)=>{const i=Rc.normalize(Rc.create(),e),s=Rc.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};var j0=i3;const s3=cl,r3=(t,e,n,i)=>{const s=s3();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};var Y0=r3;const fn=He,o3=j0,a3=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;const n=e.length;e.forEach(d=>{fn.add(t,t,d)}),fn.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,l=0;const c=fn.create();e.forEach(d=>{fn.subtract(c,d,t),i+=c[0]*c[0],s+=c[0]*c[1],r+=c[0]*c[2],o+=c[1]*c[1],a+=c[1]*c[2],l+=c[2]*c[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,l/=n,c[0]=0,c[1]=0,c[2]=0;const f=fn.create();let u=o*l-a*a;f[0]=u,f[1]=r*a-s*l,f[2]=s*a-r*o;let h=u*u;return fn.add(c,c,fn.scale(f,f,h)),u=i*l-r*r,f[0]=r*a-s*l,f[1]=u,f[2]=s*r-a*i,h=u*u,fn.dot(c,f)<0&&(h=-h),fn.add(c,c,fn.scale(f,f,h)),u=i*o-s*s,f[0]=s*a-r*o,f[1]=s*r-a*i,f[2]=u,h=u*u,fn.dot(c,f)<0&&(h=-h),fn.add(c,c,fn.scale(f,f,h)),o3(t,c,t)};var l3=a3;const Xn=He,c3=(t,...e)=>{const n=e.length,i=Xn.create(),s=Xn.create(),r=o=>{const a=e[o],l=e[(o+1)%n],c=e[(o+2)%n];return Xn.subtract(i,l,a),Xn.subtract(s,c,a),Xn.cross(i,i,s),Xn.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?Xn.copy(t,r(0)):(e.forEach((o,a)=>{Xn.add(t,t,r(a))}),Xn.normalize(t,t)),t[3]=Xn.dot(t,e[0]),t};var Z0=c3;const{EPS:Cc}=je,Gt=He,f3=(t,e,n,i)=>{let s=Gt.subtract(Gt.create(),n,e),r=Gt.subtract(Gt.create(),i,e);Gt.length(s)<Cc&&(s=Gt.orthogonal(s,r)),Gt.length(r)<Cc&&(r=Gt.orthogonal(r,s));let o=Gt.cross(Gt.create(),s,r);Gt.length(o)<Cc&&(r=Gt.orthogonal(r,s),o=Gt.cross(o,s,r)),o=Gt.normalize(o,o);const a=Gt.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};var u3=f3;const h3=He,d3=(t,e)=>{const n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return h3.fromValues(i,s,r)};var p3=d3;const m3=He,g3=(t,e)=>m3.dot(t,e)-t[3];var K0=g3;const _3=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;var J0=_3;const v3=dt,$t=He,x3=Z0,y3=q0,M3=(t,e,n)=>{const i=v3.isMirroring(n),s=$t.orthogonal($t.create(),e),r=$t.cross(s,e,s),o=$t.cross($t.create(),e,r);let a=$t.fromScalar($t.create(),e[3]);$t.multiply(a,a,e);let l=$t.add($t.create(),a,r),c=$t.add($t.create(),a,o);return a=$t.transform(a,a,n),l=$t.transform(l,l,n),c=$t.transform(c,c,n),x3(t,a,l,c),i&&y3(t,t),t};var E3=M3,$i={clone:$0,copy:W0,create:cl,equals:X0,flip:q0,fromNormalAndPoint:j0,fromValues:Y0,fromNoisyPoints:l3,fromPoints:Z0,fromPointsRandom:u3,projectionOfPoint:p3,signedDistanceToPoint:K0,toString:J0,transform:E3};const Yd=$i,S3=Mr,b3=t=>{const e=t.vertices.slice().reverse(),n=S3(e);return t.plane&&(n.plane=Yd.flip(Yd.create(),t.plane)),n};var w3=b3;const T3=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));var Q0=T3;const Zd=$i,ts=He,A3=t=>R3(t.vertices),R3=t=>{const e=t.length;if(e>2){const n=Zd.fromPoints(Zd.create(),...t);let i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){const o=t[r];if(!C3(i,s,o,n))return!1;i=s,s=o}}return!0},C3=(t,e,n,i)=>{const s=ts.cross(ts.create(),ts.subtract(ts.create(),e,t),ts.subtract(ts.create(),n,e));return ts.dot(s,i)>=0};var e_=A3;const Kd=$i,P3=t=>(t.plane||(t.plane=Kd.fromPoints(Kd.create(),...t.vertices)),t.plane);var Jf=P3;const L3=Jf,D3=t=>{const e=t.vertices.length;if(e<3)return 0;const n=t.vertices,i=L3(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let l=0,c=0,f=1,u=2;switch(a){case 1:for(f=1;f<e;f++)c=f-1,u=(f+1)%e,l+=n[f][1]*(n[u][2]-n[c][2]);l+=n[0][1]*(n[1][2]-n[e-1][2]),l/=2*i[0];break;case 2:for(f=1;f<e;f++)c=f-1,u=(f+1)%e,l+=n[f][2]*(n[u][0]-n[c][0]);l+=n[0][2]*(n[1][0]-n[e-1][0]),l/=2*i[1];break;case 3:default:for(f=1;f<e;f++)c=f-1,u=(f+1)%e,l+=n[f][0]*(n[u][1]-n[c][1]);l+=n[0][0]*(n[1][1]-n[e-1][1]),l/=2*i[2];break}return l};var t_=D3;const Ur=He,U3=t=>{const e=t.vertices,n=e.length,i=n===0?Ur.create():Ur.clone(e[0]),s=Ur.clone(i);for(let r=1;r<n;r++)Ur.min(i,i,e[r]),Ur.max(s,s,e[r]);return[i,s]};var I3=U3;const N3=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];var F3=N3;const O3=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);var B3=O3;const H3=(t,e,n)=>{const[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};var z3=H3,V3={clone:$0,copy:W0,create:cl,dot:F3,equals:X0,fromScalar:B3,fromValues:Y0,toString:J0,transform:z3};const k3=V3,Jd=new WeakMap,G3=t=>{const e=Jd.get(t);if(e)return e;const n=t.vertices,i=k3.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,l=s,c=s;n.forEach(d=>{s[0]>d[0]&&(s=d),r[1]>d[1]&&(r=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),l[1]<d[1]&&(l=d),c[2]<d[2]&&(c=d)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+l[1])*.5,i[2]=(o[2]+c[2])*.5;const f=i[0]-a[0],u=i[1]-l[1],h=i[2]-c[2];return i[3]=Math.sqrt(f*f+u*u+h*h),Jd.set(t,i),i};var $3=G3;const Pc=He,W3=t=>{let e=0;const n=t.vertices,i=Pc.create();for(let s=0;s<n.length-2;s++)Pc.cross(i,n[s+1],n[s+2]),e+=Pc.dot(n[0],i);return e/=6,e};var X3=W3;const q3=t=>t.vertices;var j3=q3;const Y3=He,Z3=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${Y3.toString(n)}, `}),e+="]",e};var K3=Z3;const J3=dt,Qd=He,Q3=Mr,eD=(t,e)=>{const n=e.vertices.map(i=>Qd.transform(Qd.create(),i,t));return J3.isMirroring(t)&&n.reverse(),Q3(n)};var tD=eD;const nD=K0,{NEPS:iD}=je,sD=He,rD=Q0,oD=e_,aD=t_,lD=Jf,cD=t=>{if(!rD(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(aD(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(sD.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!oD(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){const e=lD(t);t.vertices.forEach(n=>{const i=Math.abs(nD(e,n));if(i>iD)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};var fD=cD,et={clone:GL,create:Mr,fromPoints:qL,fromPointsAndPlane:ZL,invert:w3,isA:Q0,isConvex:e_,measureArea:t_,measureBoundingBox:I3,measureBoundingSphere:$3,measureSignedVolume:X3,plane:Jf,toPoints:j3,toString:K3,transform:tD,validate:fD};const uD=BL,hD=Mo,dD=et,pD=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const n=uD(t,{skipTriangulation:!0}).map(i=>{const s=i.map(r=>t[r]);return dD.create(s)});return hD(n)};var mD=pD;const gD=et,_D=Mo,vD=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const e=t.map((i,s)=>gD.create(i));return _D(e)};var xD=vD;const yD=He,MD=dt,ED=et,SD=Mo,bD=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");const e=SD();e.transforms=MD.clone(t.slice(1,17));const n=t[21];let i=22,s=t.length-n*3;for(;s<t.length;){const r=t[i];i++;const o=[];for(let a=0;a<r;a++)o.push(yD.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(ED.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var wD=bD;const ep=dt,TD=et,AD=t=>(ep.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>TD.transform(t.transforms,e)),t.transforms=ep.create()),t);var RD=AD;const CD=RD,PD=t=>CD(t).polygons;var fl=PD;const LD=et,DD=Mo,UD=fl,ID=t=>{const n=UD(t).map(i=>LD.invert(i));return DD(n)};var ND=ID;const FD=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);var n_=FD;const OD=et,BD=fl,HD=t=>BD(t).map(i=>OD.toPoints(i));var zD=HD;const VD=et,kD=fl,GD=t=>{const e=kD(t);let n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+VD.toString(i)+`
`}),n};var $D=GD;const WD=et,XD=t=>{const e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((c,f)=>c+f.vertices.length,0);let r=[-1,-1,-1,-1];t.color&&(r=t.color);const o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,l=a+i;return e.forEach(c=>{const f=WD.toPoints(c);o[a]=f.length,a++;for(let u=0;u<f.length;u++){const h=f[u];o[l+0]=h[0],o[l+1]=h[1],o[l+2]=h[2],l+=3}}),o};var qD=XD;const tp=dt,jD=(t,e)=>{const n=tp.multiply(tp.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var YD=jD;const ZD=et,KD=n_,JD=t=>{if(!KD(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(ZD.validate),QD(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},QD=t=>{const e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{const o=`${s}`,a=`${i[(r+1)%i.length]}`,l=`${o}/${a}`,c=e.has(l)?e.get(l):0;e.set(l,c+1)})});const n=[];if(e.forEach((i,s)=>{const r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};var eU=JD,ut={clone:iL,create:Mo,fromPointsConvex:mD,fromPoints:xD,fromCompactBinary:wD,invert:ND,isA:n_,toPoints:zD,toPolygons:fl,toString:$D,toCompactBinary:qD,transform:YD,validate:eU};const np=ut,tU=et,{isNumberArray:ip}=At,nU=t=>{const e={center:[0,0,0],size:[2,2,2]},{center:n,size:i}=Object.assign({},e,t);if(!ip(n,3))throw new Error("center must be an array of X, Y and Z values");if(!ip(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(r=>r>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?np.create():np.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(r=>{const o=r[0].map(a=>[n[0]+i[0]/2*(2*!!(a&1)-1),n[1]+i[1]/2*(2*!!(a&2)-1),n[2]+i[2]/2*(2*!!(a&4)-1)]);return tU.create(o)}))};var Qf=nU;const iU=Qf,{isGTE:sU}=At,rU=t=>{const e={center:[0,0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!sU(i,0))throw new Error("size must be positive");return i=[i,i,i],iU({center:n,size:i})};var oU=rU;const{EPS:sp,TAU:Pi}=je,Pt=He,aU=ut,lU=et,{sin:cU,cos:fU}=Ft,{isGT:uU,isGTE:Lc,isNumberArray:Dc}=At,hU=t=>{const e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:Pi,segments:32};let{center:n,height:i,startRadius:s,startAngle:r,endRadius:o,endAngle:a,segments:l}=Object.assign({},e,t);if(!Dc(n,3))throw new Error("center must be an array of X, Y and Z values");if(!uU(i,0))throw new Error("height must be greater then zero");if(!Dc(s,2))throw new Error("startRadius must be an array of X and Y values");if(!s.every(v=>v>=0))throw new Error("startRadius values must be positive");if(!Dc(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(v=>v>=0))throw new Error("endRadius values must be positive");if(o.every(v=>v===0)&&s.every(v=>v===0))throw new Error("at least one radius must be positive");if(!Lc(r,0))throw new Error("startAngle must be positive");if(!Lc(a,0))throw new Error("endAngle must be positive");if(!Lc(l,4))throw new Error("segments must be four or more");r=r%Pi,a=a%Pi;let c=Pi;r<a&&(c=a-r),r>a&&(c=a+(Pi-r));const f=Math.min(s[0],s[1],o[0],o[1]),u=Math.acos((f*f+f*f-sp*sp)/(2*f*f));if(c<u)throw new Error("startAngle and endAngle do not define a significant rotation");const h=Math.floor(l*(c/Pi)),d=Pt.fromValues(0,0,-(i/2)),_=Pt.fromValues(0,0,i/2),g=Pt.subtract(Pt.create(),_,d),m=Pt.fromValues(1,0,0),p=Pt.fromValues(0,1,0),S=Pt.create(),y=Pt.create(),x=Pt.create(),M=(v,w,N)=>{const U=w*c+r;return Pt.scale(S,m,N[0]*fU(U)),Pt.scale(y,p,N[1]*cU(U)),Pt.add(S,S,y),Pt.scale(x,g,v),Pt.add(x,x,d),Pt.add(Pt.create(),S,x)},E=(...v)=>{const w=v.map(N=>Pt.add(Pt.create(),N,n));return lU.create(w)},T=[];for(let v=0;v<h;v++){const w=v/h;let N=(v+1)/h;c===Pi&&v===h-1&&(N=0),o[0]===s[0]&&o[1]===s[1]?(T.push(E(d,M(0,N,o),M(0,w,o))),T.push(E(M(0,N,o),M(1,N,o),M(1,w,o),M(0,w,o))),T.push(E(_,M(1,w,o),M(1,N,o)))):(s[0]>0&&s[1]>0&&T.push(E(d,M(0,N,s),M(0,w,s))),(s[0]>0||s[1]>0)&&T.push(E(M(0,w,s),M(0,N,s),M(1,w,o))),o[0]>0&&o[1]>0&&T.push(E(_,M(1,w,o),M(1,N,o))),(o[0]>0||o[1]>0)&&T.push(E(M(1,w,o),M(0,N,s),M(1,N,o))))}return c<Pi&&(T.push(E(d,M(0,0,s),_)),T.push(E(M(0,0,s),M(1,0,o),_)),T.push(E(d,_,M(0,1,s))),T.push(E(M(0,1,s),_,M(1,1,o)))),aU.create(T)};var i_=hU;const dU=ut,pU=i_,{isGTE:mU}=At,gU=t=>{const e={center:[0,0,0],height:2,radius:1,segments:32},{center:n,height:i,radius:s,segments:r}=Object.assign({},e,t);if(!mU(s,0))throw new Error("radius must be positive");return i===0||s===0?dU.create():pU({center:n,height:i,startRadius:[s,s],endRadius:[s,s],segments:r})};var s_=gU;const{TAU:rp}=je,Ce=He,op=ut,ap=et,{sin:lp,cos:cp}=Ft,{isGTE:_U,isNumberArray:fp}=At,vU=t=>{const e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!fp(n,3))throw new Error("center must be an array of X, Y and Z values");if(!fp(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(_=>_>=0))throw new Error("radius values must be positive");if(!_U(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return op.create();const o=Ce.scale(Ce.create(),Ce.normalize(Ce.create(),r[0]),i[0]),a=Ce.scale(Ce.create(),Ce.normalize(Ce.create(),r[1]),i[1]),l=Ce.scale(Ce.create(),Ce.normalize(Ce.create(),r[2]),i[2]),c=Math.round(s/4);let f;const u=[],h=Ce.create(),d=Ce.create();for(let _=0;_<=s;_++){const g=rp*_/s,m=Ce.add(Ce.create(),Ce.scale(h,o,cp(g)),Ce.scale(d,a,lp(g)));if(_>0){let p,S;for(let y=0;y<=c;y++){const x=rp/4*y/c,M=cp(x),E=lp(x);if(y>0){let T=[],L;L=Ce.subtract(Ce.create(),Ce.scale(h,f,p),Ce.scale(d,l,S)),T.push(Ce.add(L,L,n)),L=Ce.subtract(Ce.create(),Ce.scale(h,m,p),Ce.scale(d,l,S)),T.push(Ce.add(L,L,n)),y<c&&(L=Ce.subtract(Ce.create(),Ce.scale(h,m,M),Ce.scale(d,l,E)),T.push(Ce.add(L,L,n))),L=Ce.subtract(Ce.create(),Ce.scale(h,f,M),Ce.scale(d,l,E)),T.push(Ce.add(L,L,n)),u.push(ap.create(T)),T=[],L=Ce.add(Ce.create(),Ce.scale(h,f,p),Ce.scale(d,l,S)),T.push(Ce.add(Ce.create(),n,L)),L=Ce.add(L,Ce.scale(h,m,p),Ce.scale(d,l,S)),T.push(Ce.add(Ce.create(),n,L)),y<c&&(L=Ce.add(L,Ce.scale(h,m,M),Ce.scale(d,l,E)),T.push(Ce.add(Ce.create(),n,L))),L=Ce.add(L,Ce.scale(h,f,M),Ce.scale(d,l,E)),T.push(Ce.add(Ce.create(),n,L)),T.reverse(),u.push(ap.create(T))}p=M,S=E}}f=m}return op.create(u)};var r_=vU;const xU=ut,yU=et,{isNumberArray:up}=At,MU=t=>{const e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:n,faces:i,colors:s,orientation:r}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(n.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(s){if(!Array.isArray(s))throw new Error("colors must be an array");if(s.length!==i.length)throw new Error("faces and colors must have the same length")}n.forEach((a,l)=>{if(!up(a,3))throw new Error(`point ${l} must be an array of X, Y, Z values`)}),i.forEach((a,l)=>{if(a.length<3)throw new Error(`face ${l} must contain 3 or more indexes`);if(!up(a,a.length))throw new Error(`face ${l} must be an array of numbers`)}),r!=="outward"&&i.forEach(a=>a.reverse());const o=i.map((a,l)=>{const c=yU.create(a.map(f=>n[f]));return s&&s[l]&&(c.color=s[l]),c});return xU.create(o)};var o_=MU;const hp=dt,dp=He,pp=ut,EU=o_,{isGTE:mp}=At,SU=t=>{const e={radius:1,frequency:6};let{radius:n,frequency:i}=Object.assign({},e,t);if(!mp(n,0))throw new Error("radius must be positive");if(!mp(i,6))throw new Error("frequency must be six or more");if(n===0)return pp.create();i=Math.floor(i/6);const s=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],r=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(h,d,_)=>{const g=h[0],m=h[1],p=h[2];let S=_;const y=[],x=[];for(let M=0;M<d;M++)for(let E=0;E<d-M;E++){const T=M/d,L=(M+1)/d,v=E/(d-M),w=(E+1)/(d-M),N=d-M-1?E/(d-M-1):1,U=[];U[0]=a(a(g,m,v),p,T),U[1]=a(a(g,m,w),p,T),U[2]=a(a(g,m,N),p,L);for(let I=0;I<3;I++){const F=dp.length(U[I]);for(let B=0;B<3;B++)U[I][B]/=F}if(y.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3,E<d-M-1){const I=d-M-1?(E+1)/(d-M-1):1;U[0]=a(a(g,m,w),p,T),U[1]=a(a(g,m,I),p,L),U[2]=a(a(g,m,N),p,L);for(let F=0;F<3;F++){const B=dp.length(U[F]);for(let z=0;z<3;z++)U[F][z]/=B}y.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3}}return{points:y,triangles:x,offset:S}},a=(h,d,_)=>{const g=1-_,m=[];for(let p=0;p<3;p++)m[p]=h[p]*g+d[p]*_;return m};let l=[],c=[],f=0;for(let h=0;h<r.length;h++){const d=o([s[r[h][0]],s[r[h][1]],s[r[h][2]]],i,f);l=l.concat(d.points),c=c.concat(d.triangles),f=d.offset}let u=EU({points:l,faces:c,orientation:"inward"});return n!==1&&(u=pp.transform(hp.fromScaling(hp.create(),[n,n,n]),u)),u};var bU=SU;const wU=Rn,TU=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return wU.fromPoints({},t)};var AU=TU;const ia=ht,RU=t=>{const e={points:[],paths:[],orientation:"counterclockwise"},{points:n,paths:i,orientation:s}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let r=n;Array.isArray(n[0])&&(Array.isArray(n[0][0])||(r=[n])),r.forEach((f,u)=>{if(!Array.isArray(f))throw new Error("list of points "+u+" must be an array");if(f.length<3)throw new Error("list of points "+u+" must contain three or more points");f.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+u+", point "+d+" must be an array");if(h.length<2)throw new Error("list of points "+u+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let f=0;o=r.map(u=>u.map(h=>f++))}const a=[];r.forEach(f=>f.forEach(u=>a.push(u)));let l=[];o.forEach(f=>{const u=f.map(d=>a[d]),h=ia.fromPoints(u);l=l.concat(ia.toSides(h))});let c=ia.create(l);return s==="clockwise"&&(c=ia.reverse(c)),c};var CU=RU;const Li=$e,gp=ht,{isNumberArray:_p}=At,PU=t=>{const e={center:[0,0],size:[2,2]},{center:n,size:i}=Object.assign({},e,t);if(!_p(n,2))throw new Error("center must be an array of X and Y values");if(!_p(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return gp.create();const s=[i[0]/2,i[1]/2],r=[s[0],-s[1]],o=[Li.subtract(Li.create(),n,s),Li.add(Li.create(),n,r),Li.add(Li.create(),n,s),Li.subtract(Li.create(),n,r)];return gp.fromPoints(o)};var eu=PU;const{EPS:ba,TAU:Ir}=je,Uc=$e,gt=He,vp=ut,hr=et,{sin:LU,cos:DU}=Ft,{isGTE:xp,isNumberArray:yp}=At,UU=Qf,Mp=(t,e,n,i,s,r)=>{const o=Ir/4*s/i,a=DU(o),l=LU(o),c=i-s;let f=n*a,u=e[2]-(n-n*l);r||(u=n-n*l-e[2]),f=f>ba?f:0;const h=gt.add(gt.create(),t,[e[0]-n,e[1]-n,u]),d=gt.add(gt.create(),t,[n-e[0],e[1]-n,u]),_=gt.add(gt.create(),t,[n-e[0],n-e[1],u]),g=gt.add(gt.create(),t,[e[0]-n,n-e[1],u]),m=[],p=[],S=[],y=[];for(let x=0;x<=c;x++){const M=c>0?Ir/4*x/c:0,E=Uc.fromAngleRadians(Uc.create(),M);Uc.scale(E,E,f);const T=gt.fromVec2(gt.create(),E);m.push(gt.add(gt.create(),h,T)),gt.rotateZ(T,T,[0,0,0],Ir/4),p.push(gt.add(gt.create(),d,T)),gt.rotateZ(T,T,[0,0,0],Ir/4),S.push(gt.add(gt.create(),_,T)),gt.rotateZ(T,T,[0,0,0],Ir/4),y.push(gt.add(gt.create(),g,T))}return r?[m,p,S,y]:(m.reverse(),p.reverse(),S.reverse(),y.reverse(),[y,S,p,m])},Ep=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){const s=t[i],r=e[i];for(let o=0;o<s.length-1;o++)n.push(hr.create([s[o],s[o+1],r[o]])),o<r.length-1&&n.push(hr.create([r[o],s[o+1],r[o+1]]))}return n},Sp=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i];const o=s[s.length-1],a=r[r.length-1],l=(i+1)%t.length;s=t[l],r=e[l];const c=s[0],f=r[0];n.push(hr.create([o,c,f,a]))}return n},IU=(t,e)=>{t=[t[3],t[2],t[1],t[0]],t=t.map(r=>r.slice().reverse());const n=[];t.forEach(r=>{r.forEach(o=>n.push(o))});const i=[];e.forEach(r=>{r.forEach(o=>i.push(o))});const s=[];for(let r=0;r<i.length;r++){const o=(r+1)%i.length;s.push(hr.create([n[r],n[o],i[o],i[r]]))}return s},NU=t=>{const e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!yp(n,3))throw new Error("center must be an array of X, Y and Z values");if(!yp(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(c=>c>=0))throw new Error("size values must be positive");if(!xp(s,0))throw new Error("roundRadius must be positive");if(!xp(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return vp.create();if(s===0)return UU({center:n,size:i});if(i=i.map(c=>c/2),s>i[0]-ba||s>i[1]-ba||s>i[2]-ba)throw new Error("roundRadius must be smaller than the radius of all dimensions");r=Math.floor(r/4);let o=null,a=null,l=[];for(let c=0;c<=r;c++){const f=Mp(n,i,s,r,c,!0),u=Mp(n,i,s,r,c,!1);if(c===0&&(l=l.concat(IU(u,f))),o&&(l=l.concat(Ep(o,f),Sp(o,f))),a&&(l=l.concat(Ep(a,u),Sp(a,u))),c===r){let h=f.map(d=>d[0]);l.push(hr.create(h)),h=u.map(d=>d[0]),l.push(hr.create(h))}o=f,a=u}return vp.create(l)};var FU=NU;const{EPS:OU,TAU:bp}=je,ve=He,wp=ut,BU=et,{sin:Tp,cos:Ap}=Ft,{isGTE:sa,isNumberArray:HU}=At,zU=s_,VU=t=>{const e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:n,height:i,radius:s,roundRadius:r,segments:o}=Object.assign({},e,t);if(!HU(n,3))throw new Error("center must be an array of X, Y and Z values");if(!sa(i,0))throw new Error("height must be positive");if(!sa(s,0))throw new Error("radius must be positive");if(!sa(r,0))throw new Error("roundRadius must be positive");if(r>s)throw new Error("roundRadius must be smaller than the radius");if(!sa(o,4))throw new Error("segments must be four or more");if(i===0||s===0)return wp.create();if(r===0)return zU({center:n,height:i,radius:s});const a=[0,0,-(i/2)],l=[0,0,i/2],c=ve.subtract(ve.create(),l,a),f=ve.length(c);if(2*r>f-OU)throw new Error("height must be larger than twice roundRadius");let u;Math.abs(c[0])>Math.abs(c[1])?u=ve.fromValues(0,1,0):u=ve.fromValues(1,0,0);const h=ve.scale(ve.create(),ve.normalize(ve.create(),c),r),d=ve.scale(ve.create(),ve.normalize(ve.create(),ve.cross(ve.create(),h,u)),s),_=ve.scale(ve.create(),ve.normalize(ve.create(),ve.cross(ve.create(),d,h)),s);ve.add(a,a,h),ve.subtract(l,l,h);const g=Math.floor(.25*o),m=E=>{const T=E.map(L=>ve.add(L,L,n));return BU.create(T)},p=[],S=ve.create(),y=ve.create();let x;for(let E=0;E<=o;E++){const T=bp*E/o,L=ve.add(ve.create(),ve.scale(S,d,Ap(T)),ve.scale(y,_,Tp(T)));if(E>0){let v=[];v.push(ve.add(ve.create(),a,L)),v.push(ve.add(ve.create(),a,x)),v.push(ve.add(ve.create(),l,x)),v.push(ve.add(ve.create(),l,L)),p.push(m(v));let w,N;for(let U=0;U<=g;U++){const I=bp/4*U/g,F=Ap(I),B=Tp(I);if(U>0){v=[];let z;z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,x,w),ve.scale(y,h,N))),v.push(z),z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,L,w),ve.scale(y,h,N))),v.push(z),U<g&&(z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,L,F),ve.scale(y,h,B))),v.push(z)),z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,x,F),ve.scale(y,h,B))),v.push(z),p.push(m(v)),v=[],z=ve.add(ve.create(),ve.scale(S,x,w),ve.scale(y,h,N)),ve.add(z,z,l),v.push(z),z=ve.add(ve.create(),ve.scale(S,L,w),ve.scale(y,h,N)),ve.add(z,z,l),v.push(z),U<g&&(z=ve.add(ve.create(),ve.scale(S,L,F),ve.scale(y,h,B)),ve.add(z,z,l),v.push(z)),z=ve.add(ve.create(),ve.scale(S,x,F),ve.scale(y,h,B)),ve.add(z,z,l),v.push(z),v.reverse(),p.push(m(v))}w=F,N=B}}x=L}return wp.create(p)};var kU=VU;const{EPS:Rp,TAU:ra}=je,ft=$e,Cp=ht,{isGTE:Pp,isNumberArray:Lp}=At,GU=eu,$U=t=>{const e={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!Lp(n,2))throw new Error("center must be an array of X and Y values");if(!Lp(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(g=>g>=0))throw new Error("size values must be positive");if(!Pp(s,0))throw new Error("roundRadius must be positive");if(!Pp(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return Cp.create();if(s===0)return GU({center:n,size:i});if(i=i.map(g=>g/2),s>i[0]-Rp||s>i[1]-Rp)throw new Error("roundRadius must be smaller than the radius of all dimensions");const o=Math.floor(r/4),a=ft.add(ft.create(),n,[i[0]-s,i[1]-s]),l=ft.add(ft.create(),n,[s-i[0],i[1]-s]),c=ft.add(ft.create(),n,[s-i[0],s-i[1]]),f=ft.add(ft.create(),n,[i[0]-s,s-i[1]]),u=[],h=[],d=[],_=[];for(let g=0;g<=o;g++){const m=ra/4*g/o,p=ft.fromAngleRadians(ft.create(),m);ft.scale(p,p,s),u.push(ft.add(ft.create(),a,p)),ft.rotate(p,p,ft.create(),ra/4),h.push(ft.add(ft.create(),l,p)),ft.rotate(p,p,ft.create(),ra/4),d.push(ft.add(ft.create(),c,p)),ft.rotate(p,p,ft.create(),ra/4),_.push(ft.add(ft.create(),f,p))}return Cp.fromPoints(u.concat(h,d,_))};var WU=$U;const XU=r_,{isGTE:qU}=At,jU=t=>{const e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!qU(i,0))throw new Error("radius must be positive");return i=[i,i,i],XU({center:n,radius:i,segments:s,axes:r})};var YU=jU;const ZU=eu,{isGTE:KU}=At,JU=t=>{const e={center:[0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!KU(i,0))throw new Error("size must be positive");return i=[i,i],ZU({center:n,size:i})};var QU=JU;const{TAU:a_}=je,Gr=$e,eI=ht,{isGT:tI,isGTE:oa,isNumberArray:nI}=At,iI=(t,e)=>t>0&&e>1&&e<t/2?Math.cos(Math.PI*e/t)/Math.cos(Math.PI*(e-1)/t):0,Dp=(t,e,n,i)=>{const s=a_/t,r=[];for(let o=0;o<t;o++){const a=Gr.fromAngleRadians(Gr.create(),s*o+n);Gr.scale(a,a,e),Gr.add(a,i,a),r.push(a)}return r},sI=t=>{const e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:n,vertices:i,outerRadius:s,innerRadius:r,density:o,startAngle:a}=Object.assign({},e,t);if(!nI(n,2))throw new Error("center must be an array of X and Y values");if(!oa(i,2))throw new Error("vertices must be two or more");if(!tI(s,0))throw new Error("outerRadius must be greater than zero");if(!oa(r,0))throw new Error("innerRadius must be greater than zero");if(!oa(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%a_,r===0){if(!oa(o,2))throw new Error("density must be two or more");r=s*iI(i,o)}const l=Gr.clone(n),c=Dp(i,s,a,l),f=Dp(i,r,a+Math.PI/i,l),u=[];for(let h=0;h<i;h++)u.push(c[h]),u.push(f[h]);return eI.fromPoints(u)};var rI=sI;const l_=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(l_(n)):e.concat(n),[]);var Cn=l_;const oI=Cn,Up=dt,Ip=$i,Np=ht,Fp=ut,Op=Rn,ul=(t,...e)=>{const n={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:s}=Object.assign({},n,t);if(e=oI(e),e.length===0)throw new Error("wrong number of arguments");const r=Ip.fromNormalAndPoint(Ip.create(),s,i);if(Number.isNaN(r[0]))throw new Error("the given origin and normal do not define a proper plane");const o=Up.mirrorByPlane(Up.create(),r),a=e.map(l=>Op.isA(l)?Op.transform(o,l):Np.isA(l)?Np.transform(o,l):Fp.isA(l)?Fp.transform(o,l):l);return a.length===1?a[0]:a},aI=(...t)=>ul({normal:[1,0,0]},t),lI=(...t)=>ul({normal:[0,1,0]},t),cI=(...t)=>ul({normal:[0,0,1]},t);var $r={mirror:ul,mirrorX:aI,mirrorY:lI,mirrorZ:cI};const Bp=$i,ns=He,fI=t=>{const e=t.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const n=e.reduce((o,a)=>ns.add(ns.create(),o,a[0]),ns.create());ns.scale(n,n,1/e.length);let i,s=0;e.forEach(o=>{if(!ns.equals(o[0],o[1])){const a=ns.squaredDistance(n,o[0]);a>s&&(i=o,s=a)}});const r=e.find(o=>ns.equals(o[1],i[0]));return Bp.fromPoints(Bp.create(),r[0],i[0],i[1])};var c_=fI;const uI=t=>(t||(t=[]),{edges:t});var Es=uI;const hI=Es,Hp=He,dI=(...t)=>{let e,n;return t.length===1?(e=hI(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[Hp.clone(i[0]),Hp.clone(i[1])]),e};var pI=dI;const mI=He,gI=(t,e)=>{const n=t.edges,i=e.edges;return n.length!==i.length?!1:n.reduce((r,o,a)=>{const l=i[a],c=mI.squaredDistance(o[0],l[0]);return r&&c<Number.EPSILON},!0)};var _I=gI;const aa=He,vI=Es,xI=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");if(t.length<3)throw new Error("the given points must contain THREE or more points");const e=[];let n=t[t.length-1];return t.forEach(i=>{i.length===2&&e.push([aa.fromVec2(aa.create(),n),aa.fromVec2(aa.create(),i)]),i.length===3&&e.push([n,i]),n=i}),vI(e)};var yI=xI;const la=He,MI=Es,EI=t=>{if(!Array.isArray(t))throw new Error("the given sides must be an array");const e=[];return t.forEach(n=>{e.push([la.fromVec2(la.create(),n[0]),la.fromVec2(la.create(),n[1])])}),MI(e)};var SI=EI;const bI=t=>!!(t&&typeof t=="object"&&"edges"in t&&Array.isArray(t.edges));var wI=bI;const TI=Es,AI=(...t)=>{let e,n;return t.length===1?(e=TI(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[i[1],i[0]]),e};var RI=AI;const CI=t=>t.edges;var PI=CI;const LI=(t,e)=>{let n,i,s,r,o,a=1;do{i=t,t=null;let l=null;for(o=0;i;){o++,s=i;let c=0;for(n=0;n<a&&(c++,s=s.nextZ,!!s);n++);let f=a;for(;c>0||f>0&&s;)c!==0&&(f===0||!s||e(i)<=e(s))?(r=i,i=i.nextZ,c--):(r=s,s=s.nextZ,f--),l?l.nextZ=r:t=r,r.prevZ=l,l=r;i=s}l.nextZ=null,a*=2}while(o>1);return t};var DI=LI;const UI=DI;let f_=class{constructor(e,n,i){this.i=e,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}};const II=(t,e,n,i)=>{const s=new f_(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s},NI=t=>{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)};var u_={Node:f_,insertNode:II,removeNode:NI,sortLinked:UI};const FI=(t,e,n,i,s,r,o,a)=>(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(r-a)-(s-o)*(i-a)>=0,OI=(t,e,n)=>(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);var tu={area:OI,pointInTriangle:FI};const{Node:zp,insertNode:Vp,removeNode:Fa}=u_,{area:nn}=tu,BI=(t,e,n,i,s)=>{let r;if(s===$I(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Vp(o,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Vp(o,t[o],t[o+1],r);return r&&hl(r,r.next)&&(Fa(r),r=r.next),r},h_=(t,e)=>{if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(hl(n,n.next)||nn(n.prev,n,n.next)===0)){if(Fa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e},HI=(t,e,n)=>{let i=t;do{const s=i.prev,r=i.next.next;!hl(s,r)&&d_(s,i,i.next,r)&&uo(s,r)&&uo(r,s)&&(e.push(s.i/n),e.push(i.i/n),e.push(r.i/n),Fa(i),Fa(i.next),i=t=r),i=i.next}while(i!==t);return h_(i)},zI=(t,e)=>{let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&d_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1},uo=(t,e)=>nn(t.prev,t,t.next)<0?nn(t,e,t.next)>=0&&nn(t,t.prev,e)>=0:nn(t,e,t.prev)<0||nn(t,t.next,e)<0,VI=(t,e)=>{let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i},kI=(t,e)=>{const n=new zp(t.i,t.x,t.y),i=new zp(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i},GI=(t,e)=>t.next.i!==e.i&&t.prev.i!==e.i&&!zI(t,e)&&(uo(t,e)&&uo(e,t)&&VI(t,e)&&(nn(t.prev,t,e.prev)||nn(t,e.prev,e))||hl(t,e)&&nn(t.prev,t,t.next)>0&&nn(e.prev,e,e.next)>0),d_=(t,e,n,i)=>{const s=Math.sign(nn(t,e,n)),r=Math.sign(nn(t,e,i)),o=Math.sign(nn(n,i,t)),a=Math.sign(nn(n,i,e));return!!(s!==r&&o!==a||s===0&&ca(t,n,e)||r===0&&ca(t,i,e)||o===0&&ca(n,t,i)||a===0&&ca(n,e,i))},ca=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),$I=(t,e,n,i)=>{let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s},hl=(t,e)=>t.x===e.x&&t.y===e.y;var p_={cureLocalIntersections:HI,filterPoints:h_,isValidDiagonal:GI,linkedPolygon:BI,locallyInside:uo,splitPolygon:kI};const{filterPoints:_f,linkedPolygon:WI,locallyInside:XI,splitPolygon:qI}=p_,{area:kp,pointInTriangle:jI}=tu,YI=(t,e,n,i)=>{const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=WI(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(QI(c))}s.sort((r,o)=>r.x-o.x);for(let r=0;r<s.length;r++)n=ZI(s[r],n),n=_f(n,n.next);return n},ZI=(t,e)=>{const n=KI(t,e);if(!n)return e;const i=qI(n,t),s=_f(n,n.next);return _f(i,i.next),e===n?s:e},KI=(t,e)=>{let n=e;const i=t.x,s=t.y;let r=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const u=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>r){if(r=u,u===i){if(s===n.y)return n;if(s===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===r)return o;const a=o,l=o.x,c=o.y;let f=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&jI(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){const u=Math.abs(s-n.y)/(i-n.x);XI(n,t)&&(u<f||u===f&&(n.x>o.x||n.x===o.x&&JI(o,n)))&&(o=n,f=u)}n=n.next}while(n!==a);return o},JI=(t,e)=>kp(t.prev,t,e.prev)<0&&kp(e.next,t,t.next)<0,QI=t=>{let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n};var eN=YI;const tN=eN,{removeNode:nN,sortLinked:iN}=u_,{cureLocalIntersections:sN,filterPoints:Oa,isValidDiagonal:rN,linkedPolygon:oN,splitPolygon:aN}=p_,{area:cs,pointInTriangle:Wr}=tu,lN=(t,e,n=2)=>{const i=e&&e.length,s=i?e[0]*n:t.length;let r=oN(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,u;if(i&&(r=tN(t,e,r,n)),t.length>80*n){a=c=t[0],l=f=t[1];for(let h=n;h<s;h+=n){const d=t[h],_=t[h+1];d<a&&(a=d),_<l&&(l=_),d>c&&(c=d),_>f&&(f=_)}u=Math.max(c-a,f-l),u=u!==0?1/u:0}return ho(r,o,n,a,l,u),o},ho=(t,e,n,i,s,r,o)=>{if(!t)return;!o&&r&&hN(t,i,s,r);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,r?fN(t,i,s,r):cN(t)){e.push(l.i/n),e.push(t.i/n),e.push(c.i/n),nN(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=sN(Oa(t),e,n),ho(t,e,n,i,s,r,2)):o===2&&uN(t,e,n,i,s,r):ho(Oa(t),e,n,i,s,r,1);break}}},cN=t=>{const e=t.prev,n=t,i=t.next;if(cs(e,n,i)>=0)return!1;let s=t.next.next;for(;s!==t.prev;){if(Wr(e.x,e.y,n.x,n.y,i.x,i.y,s.x,s.y)&&cs(s.prev,s,s.next)>=0)return!1;s=s.next}return!0},fN=(t,e,n,i)=>{const s=t.prev,r=t,o=t.next;if(cs(s,r,o)>=0)return!1;const a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,l=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,c=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,f=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,u=vf(a,l,e,n,i),h=vf(c,f,e,n,i);let d=t.prevZ,_=t.nextZ;for(;d&&d.z>=u&&_&&_.z<=h;){if(d!==t.prev&&d!==t.next&&Wr(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&cs(d.prev,d,d.next)>=0||(d=d.prevZ,_!==t.prev&&_!==t.next&&Wr(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&cs(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;d&&d.z>=u;){if(d!==t.prev&&d!==t.next&&Wr(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&cs(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;_&&_.z<=h;){if(_!==t.prev&&_!==t.next&&Wr(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&cs(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0},uN=(t,e,n,i,s,r)=>{let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rN(o,a)){let l=aN(o,a);o=Oa(o,o.next),l=Oa(l,l.next),ho(o,e,n,i,s,r),ho(l,e,n,i,s,r);return}a=a.next}o=o.next}while(o!==t)},hN=(t,e,n,i)=>{let s=t;do s.z===null&&(s.z=vf(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,iN(s,r=>r.z)},vf=(t,e,n,i,s)=>(t=32767*(t-n)*s,e=32767*(e-i)*s,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1);var dN=lN;const{NEPS:Ic}=je,pN=(t,e)=>Math.abs(t[0]-e[0])<=Ic&&Math.abs(t[1]-e[1])<=Ic&&Math.abs(t[2]-e[2])<=Ic;var mN=pN;const gN=t=>{let e=0;for(let n=0;n<t.length;n++){const i=(n+1)%t.length;e+=t[n][0]*t[i][1],e-=t[i][0]*t[n][1]}return e/2};var m_=gN;const _N=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};var vN=_N;const xN=(t,e,n,i,s,r)=>{const a=1/(t*i-e*n);let l=s*i-e*r,c=-s*n+t*r;return l*=a,c*=a,[l,c]};var yN=xN,dl={area:m_,cos:Ft.cos,sin:Ft.sin,solve2Linear:yN};const MN=m_,EN=t=>MN(t.vertices);var SN=EN;const bN=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var wN=bN;const TN=wN,AN=t=>{const e=t.vertices.slice().reverse();return TN(e)};var RN=AN;const CN=SN,PN=RN,LN=(t,e)=>{if(t.length===0)return 0;const n=e.vertices;return n.length<3?0:(CN(e)<0&&(e=PN(e)),t.reduce((s,r)=>s+DN(r,n),0)===t.length?1:0)},DN=(t,e)=>{const n=e.length,i=t[0],s=t[1];let r=e[n-1],o=e[0],a=r[1]>s,l=0,c=0;for(let f=n+1;--f;){const u=o[1]>s;if(a!==u){const h=r[0]>i,d=o[0]>i;(h&&d||o[0]-(o[1]-s)*(r[0]-o[0])/(r[1]-o[1])>=i)&&(l=!l)}a=u,r=o,o=e[++c]}return l};var UN=LN,IN={arePointsInside:UN};const{area:NN}=dl,{toOutlines:FN}=ht,{arePointsInside:ON}=IN,BN=t=>{const e=FN(t),n=[],i=[];e.forEach((o,a)=>{const l=NN(o);l<0?i.push(a):l>0&&n.push(a)});const s=[],r=[];return n.forEach((o,a)=>{const l=e[o];s[a]=[],i.forEach((c,f)=>{const u=e[c];ON([u[0]],{vertices:l})&&(s[a].push(c),r[f]||(r[f]=[]),r[f].push(a))})}),i.forEach((o,a)=>{if(r[a]&&r[a].length>1){const l=HN(r[a],c=>s[c].length);r[a].forEach((c,f)=>{f!==l&&(s[c]=s[c].filter(u=>u!==o))})}}),s.map((o,a)=>({solid:e[n[a]],holes:o.map(l=>e[l])}))},HN=(t,e)=>{let n,i;return t.forEach((s,r)=>{const o=e(s);(i===void 0||o<i)&&(n=r,i=o)}),n};var zN=BN;const VN=ht,Gp=$i,kN=$e,Ut=He,GN=c_,$N=zN;let WN=class{constructor(e){this.plane=GN(e);const n=Ut.orthogonal(Ut.create(),this.plane),i=Ut.cross(Ut.create(),this.plane,n);this.v=Ut.normalize(i,i),this.u=Ut.cross(Ut.create(),this.v,this.plane),this.basisMap=new Map;const s=e.edges.map(o=>o.map(a=>this.to2D(a))),r=VN.create(s);this.roots=$N(r)}to2D(e){const n=kN.fromValues(Ut.dot(e,this.u),Ut.dot(e,this.v));return this.basisMap.set(n,e),n}to3D(e){const n=this.basisMap.get(e);if(n)return n;{console.log("Warning: point not in original slice");const i=Ut.scale(Ut.create(),this.u,e[0]),s=Ut.scale(Ut.create(),this.v,e[1]),r=Ut.scale(Ut.create(),Gp,Gp[3]),o=Ut.add(i,i,r);return Ut.add(s,s,o)}}};var XN=WN;const qN=et,jN=dN,YN=XN,ZN=t=>{const e=new YN(t),n=[];return e.roots.forEach(({solid:i,holes:s})=>{let r=i.length;const o=[];s.forEach((u,h)=>{o.push(r),r+=u.length});const a=[i,...s].flat(),l=a.flat(),c=u=>e.to3D(a[u]),f=jN(l,o);for(let u=0;u<f.length;u+=3){const h=f.slice(u,u+3).map(c);n.push(qN.fromPointsAndPlane(h,e.plane))}}),n};var KN=ZN;const $p=He,JN=t=>t.reduce((e,n)=>e+=`[${$p.toString(n[0])}, ${$p.toString(n[1])}], `,""),QN=t=>`[${JN(t.edges)}]`;var eF=QN;const fa=He,tF=Es,nF=(t,e)=>{const n=e.edges.map(i=>[fa.transform(fa.create(),i[0],t),fa.transform(fa.create(),i[1],t)]);return tF(n)};var iF=nF,nu={calculatePlane:c_,clone:pI,create:Es,equals:_I,fromPoints:yI,fromSides:SI,isA:wI,reverse:RI,toEdges:PI,toPolygons:KN,toString:eF,transform:iF};const Wp=He,sF=Es,rF=t=>{if(!t.edges)return t;let e=t.edges;const n=new Map,i=new Map;e=e.filter(o=>!Wp.equals(o[0],o[1])),e.forEach(o=>{const a=o[0].toString(),l=o[1].toString();n.set(a,o[0]),n.set(l,o[1]),i.set(a,(i.get(a)||0)+1),i.set(l,(i.get(l)||0)-1)});const s=[],r=[];return i.forEach((o,a)=>{o<0&&s.push(a),o>0&&r.push(a)}),s.forEach(o=>{const a=n.get(o);let l=1/0,c;r.forEach(f=>{const u=n.get(f),h=Wp.distance(a,u);h<l&&(l=h,c=u)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${c} distance ${l}`),e=e.map(f=>f[0].toString()===o?[c,f[1]]:f[1].toString()===o?[f[0],c]:f)}),sF(e)};var oF=rF;const{EPS:Xp}=je,ks=He,ua=et,qp=nu,xf=(t,e)=>t===e?t:t<e?xf(e,t):e===1?1:e===0?t:xf(e,t%e),aF=(t,e)=>t*e/xf(t,e),jp=(t,e)=>{const n=t/e.length;if(n===1)return e;const i=ks.fromValues(n,n,n),s=[];return e.forEach(r=>{const o=ks.subtract(ks.create(),r[1],r[0]);ks.divide(o,o,i);let a=r[0];for(let l=1;l<=n;++l){const c=ks.add(ks.create(),a,o);s.push([a,c]),a=c}}),s},Yp=Xp*Xp/2*Math.sin(Math.PI/3),lF=(t,e)=>{let n=qp.toEdges(t),i=qp.toEdges(e);if(n.length!==i.length){const r=aF(n.length,i.length);r!==n.length&&(n=jp(r,n)),r!==i.length&&(i=jp(r,i))}const s=[];return n.forEach((r,o)=>{const a=i[o],l=ua.create([r[0],r[1],a[1]]),c=ua.measureArea(l);Number.isFinite(c)&&c>Yp&&s.push(l);const f=ua.create([r[0],a[1],a[0]]),u=ua.measureArea(f);Number.isFinite(u)&&u>Yp&&s.push(f)}),s};var cF=lF;const Zp=dt,Kp=ht,fF=ut,yf=et,Oi=nu,uF=oF,Jp=cF,hF=(t,e,n)=>{let i=null;return Kp.isA(n)&&(i=Oi.fromSides(Kp.toSides(n))),yf.isA(n)&&(i=Oi.fromPoints(yf.toPoints(n))),t===0||t===1?Oi.transform(Zp.fromTranslation(Zp.create(),[0,0,t]),i):null},dF=(t,e)=>{const n={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:hF},{numberOfSlices:i,capStart:s,capEnd:r,close:o,repair:a,callback:l}=Object.assign({},n,t);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=uF(e));const c=i-1;let f=null,u=null,h=null,d=[];for(let _=0;_<i;_++){const g=l(_/c,_,e);if(g){if(!Oi.isA(g))throw new Error("the callback function must return slice objects");if(Oi.toEdges(g).length===0)throw new Error("the callback function must return slices with one or more edges");h&&(d=d.concat(Jp(h,g))),_===0&&(f=g),_===i-1&&(u=g),h=g}}if(r){const _=Oi.toPolygons(u);d=d.concat(_)}if(s){const _=Oi.toPolygons(f).map(yf.invert);d=d.concat(_)}return!s&&!r&&o&&!Oi.equals(u,f)&&(d=d.concat(Jp(u,f))),fF.create(d)};var pF=dF;const{TAU:un}=je,Nr=dt,{mirrorX:mF}=$r,ha=ht,Nc=nu,gF=pF,_F=(t,e)=>{const n={segments:12,startAngle:0,angle:un,overflow:"cap"};let{segments:i,startAngle:s,angle:r,overflow:o}=Object.assign({},n,t);if(i<3)throw new Error("segments must be greater then 3");s=Math.abs(s)>un?s%un:s,r=Math.abs(r)>un?r%un:r;let a=s+r;if(a=Math.abs(a)>un?a%un:a,a<s){const S=s;s=a,a=S}let l=a-s;if(l<=0&&(l=un),Math.abs(l)<un){const S=un/i;i=Math.floor(Math.abs(l)/S),Math.abs(l)>i*S&&i++}let c=ha.toSides(e);if(c.length===0)throw new Error("the given geometry cannot be empty");const f=c.filter(S=>S[0][0]<0),u=c.filter(S=>S[0][0]>=0);f.length>0&&u.length>0&&o==="cap"&&(f.length>u.length?(c=c.map(S=>{let y=S[0],x=S[1];return y=[Math.min(y[0],0),y[1]],x=[Math.min(x[0],0),x[1]],[y,x]}),e=ha.create(c),e=mF(e)):u.length>=f.length&&(c=c.map(S=>{let y=S[0],x=S[1];return y=[Math.max(y[0],0),y[1]],x=[Math.max(x[0],0),x[1]],[y,x]}),e=ha.create(c)));const d=l/i,_=Math.abs(l)<un,g=Nc.fromSides(ha.toSides(e));Nc.reverse(g,g);const m=Nr.create(),p=(S,y,x)=>{let M=d*y+s;return l===un&&y===i&&(M=s),Nr.multiply(m,Nr.fromZRotation(m,M),Nr.fromXRotation(Nr.create(),un/4)),Nc.transform(m,x)};return t={numberOfSlices:i+1,capStart:_,capEnd:_,close:!_,callback:p},gF(t,g)};var vF=_F;const xF=Cn,Qp=dt,em=ht,tm=ut,nm=Rn,pl=(t,...e)=>{if(!Array.isArray(t))throw new Error("angles must be an array");if(e=xF(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=t[2],i=t[1],s=t[0],r=Qp.fromTaitBryanRotation(Qp.create(),n,i,s),o=e.map(a=>nm.isA(a)?nm.transform(r,a):em.isA(a)?em.transform(r,a):tm.isA(a)?tm.transform(r,a):a);return o.length===1?o[0]:o},yF=(t,...e)=>pl([t,0,0],e),MF=(t,...e)=>pl([0,t,0],e),EF=(t,...e)=>pl([0,0,t],e);var Xr={rotate:pl,rotateX:yF,rotateY:MF,rotateZ:EF};const SF=Cn,im=dt,sm=ht,rm=ut,om=Rn,ml=(t,...e)=>{if(!Array.isArray(t))throw new Error("offset must be an array");if(e=SF(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=im.fromTranslation(im.create(),t),i=e.map(s=>om.isA(s)?om.transform(n,s):sm.isA(s)?sm.transform(n,s):rm.isA(s)?rm.transform(n,s):s);return i.length===1?i[0]:i},bF=(t,...e)=>ml([t,0,0],e),wF=(t,...e)=>ml([0,t,0],e),TF=(t,...e)=>ml([0,0,t],e);var Mt={translate:ml,translateX:bF,translateY:wF,translateZ:TF};const{TAU:AF}=je,RF=vF,{rotate:CF}=Xr,{translate:PF}=Mt,LF=V0,{isGT:Fc,isGTE:Oc}=At,DF=t=>{const e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:AF},{innerRadius:n,innerSegments:i,outerRadius:s,outerSegments:r,innerRotation:o,startAngle:a,outerRotation:l}=Object.assign({},e,t);if(!Fc(n,0))throw new Error("innerRadius must be greater than zero");if(!Oc(i,3))throw new Error("innerSegments must be three or more");if(!Fc(s,0))throw new Error("outerRadius must be greater than zero");if(!Oc(r,3))throw new Error("outerSegments must be three or more");if(!Oc(a,0))throw new Error("startAngle must be positive");if(!Fc(l,0))throw new Error("outerRotation must be greater than zero");if(n>=s)throw new Error("inner circle is too large to rotate about the outer circle");let c=LF({radius:n,segments:i});return o!==0&&(c=CF([0,0,o],c)),c=PF([s,0],c),RF({startAngle:a,angle:l,segments:r},c)};var UF=DF;const{NEPS:dr}=je,Fr=$e,IF=ht,{isNumberArray:NF}=At,Mf=(t,e,n)=>Math.acos((t*t+e*e-n*n)/(2*t*e)),FF=(t,e,n)=>e>dr?Math.sqrt(t*t+n*n-2*t*n*Math.cos(e)):Math.sqrt((t-n)*(t-n)+t*n*e*e*(1-e*e/12)),OF=t=>{if(Math.abs(t[0]+t[1]+t[2]-Math.PI)>dr)throw new Error("AAA triangles require angles that sum to PI");const n=t[0],i=t[1],s=Math.PI-n-i,r=1,o=r/Math.sin(s)*Math.sin(n),a=r/Math.sin(s)*Math.sin(i);return Er(n,i,s,o,a,r)},BF=t=>{const e=t[0],n=t[1],i=Math.PI+dr-e-n;if(i<dr)throw new Error("AAS triangles require angles that sum to PI");const s=t[2],r=s/Math.sin(e)*Math.sin(n),o=s/Math.sin(e)*Math.sin(i);return Er(e,n,i,s,r,o)},HF=t=>{const e=t[0],n=t[2],i=Math.PI+dr-e-n;if(i<dr)throw new Error("ASA triangles require angles that sum to PI");const s=t[1],r=s/Math.sin(i)*Math.sin(e),o=s/Math.sin(i)*Math.sin(n);return Er(e,n,i,r,o,s)},zF=t=>{const e=t[0],n=t[1],i=t[2],s=FF(e,n,i),r=Mf(s,e,i),o=Math.PI-r-n;return Er(r,n,o,i,s,e)},VF=t=>{const e=t[0],n=t[1],i=t[2],s=Math.asin(n*Math.sin(i)/e),r=Math.PI-s-i,o=e/Math.sin(i)*Math.sin(r);return Er(s,r,i,n,o,e)},kF=t=>{const e=t[1],n=t[2],i=t[0];if(e+n<=i||n+i<=e||i+e<=n)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const s=Mf(n,i,e),r=Mf(i,e,n),o=Math.PI-s-r;return Er(s,r,o,e,n,i)},Er=(t,e,n,i,s,r)=>{const o=Fr.fromValues(0,0),a=Fr.fromValues(r,0),l=Fr.fromValues(i,0);return Fr.add(l,Fr.rotate(l,l,[0,0],Math.PI-e),a),IF.fromPoints([o,a,l])},GF=t=>{const e={type:"SSS",values:[1,1,1]};let{type:n,values:i}=Object.assign({},e,t);if(typeof n!="string")throw new Error("triangle type must be a string");if(n=n.toUpperCase(),!((n[0]==="A"||n[0]==="S")&&(n[1]==="A"||n[1]==="S")&&(n[2]==="A"||n[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!NF(i,3))throw new Error("triangle values must contain three values");if(!i.every(s=>s>0))throw new Error("triangle values must be greater than zero");switch(n){case"AAA":return OF(i);case"AAS":return BF(i);case"ASA":return HF(i);case"SAS":return zF(i);case"SSA":return VF(i);case"SSS":return kF(i);default:throw new Error("invalid triangle type, try again")}};var $F=GF,hn={arc:lP,circle:V0,cube:oU,cuboid:Qf,cylinder:s_,cylinderElliptic:i_,ellipse:z0,ellipsoid:r_,geodesicSphere:bU,line:AU,polygon:CU,polyhedron:o_,rectangle:eu,roundedCuboid:FU,roundedCylinder:kU,roundedRectangle:WU,sphere:YU,square:QU,star:rI,torus:UF,triangle:$F};const WF=ht,XF=ut,qF=Rn,jF=t=>{let e;for(const n of t){let i=0;if(WF.isA(n)&&(i=1),XF.isA(n)&&(i=2),qF.isA(n)&&(i=3),e&&i!==e)return!1;e=i}return!0};var YF=jF,iu={geom2:ht,geom3:ut,path2:Rn,poly3:et};const{EPS:ZF}=je,KF=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return ZF*n/e};var JF=KF;const QF=Cn,Kn=$e,Or=He,g_=ht,__=ut,v_=Rn,am=et,pr=new WeakMap,eO=t=>{let e=pr.get(t);if(e)return e;const n=v_.toPoints(t);let i;n.length===0?i=Kn.create():i=Kn.clone(n[0]);let s=Kn.clone(i);return n.forEach(r=>{Kn.min(i,i,r),Kn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],pr.set(t,e),e},tO=t=>{let e=pr.get(t);if(e)return e;const n=g_.toPoints(t);let i;n.length===0?i=Kn.create():i=Kn.clone(n[0]);let s=Kn.clone(i);return n.forEach(r=>{Kn.min(i,i,r),Kn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],pr.set(t,e),e},nO=t=>{let e=pr.get(t);if(e)return e;const n=__.toPolygons(t);let i=Or.create();if(n.length>0){const r=am.toPoints(n[0]);Or.copy(i,r[0])}let s=Or.clone(i);return n.forEach(r=>{am.toPoints(r).forEach(o=>{Or.min(i,i,o),Or.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],pr.set(t,e),e},iO=(...t)=>{if(t=QF(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>v_.isA(n)?eO(n):g_.isA(n)?tO(n):__.isA(n)?nO(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};var su=iO;const sO=Cn,{geom2:rO,geom3:oO,path2:aO}=iu,ru=JF,ou=su,lO=t=>ru(ou(t),2),cO=t=>ru(ou(t),2),fO=t=>ru(ou(t),3),uO=(...t)=>{if(t=sO(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>aO.isA(n)?lO(n):rO.isA(n)?cO(n):oO.isA(n)?fO(n):0);return e.length===1?e[0]:e};var au=uO;const lm=$e,hO=ht,dO=(t,e)=>{if(e.vertices.length<4)return null;const n=[],i=e.vertices.filter((o,a)=>o[2]>0?(n.push(a),!0):!1);if(i.length!==2)throw new Error("Assertion failed: fromFakePolygon: not enough points found");const s=i.map(o=>{const a=Math.round(o[0]/t)*t+0,l=Math.round(o[1]/t)*t+0;return lm.fromValues(a,l)});if(lm.equals(s[0],s[1]))return null;const r=n[1]-n[0];if(r===1||r===3)r===1&&s.reverse();else throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");return s},pO=(t,e)=>{const n=e.map(i=>dO(t,i)).filter(i=>i!==null);return hO.create(n)};var mO=pO;const Di=He,gO=ht,_O=ut,vO=et,xO=(t,e,n)=>{const i=[Di.fromVec2(Di.create(),n[0],t),Di.fromVec2(Di.create(),n[1],t),Di.fromVec2(Di.create(),n[1],e),Di.fromVec2(Di.create(),n[0],e)];return vO.create(i)},yO=(t,e)=>{const i=gO.toSides(e).map(r=>xO(t.z0,t.z1,r));return _O.create(i)};var MO=yO;const EO=()=>[0,1,0];var lu=EO;const SO=lu,bO=t=>{const e=SO();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var wO=bO;const Bc=$e,TO=t=>{const e=Bc.normal(Bc.create(),t);return Bc.negate(e,e),e};var cu=TO;const cm=$e,AO=t=>cm.scale(cm.create(),t,t[2]);var gl=AO;const Br=$e,RO=cu,CO=gl,PO=(t,e)=>{const n=CO(t),i=RO(t),s=Br.subtract(Br.create(),e,n),r=Br.dot(s,i);return Br.scale(s,i,r),Br.add(s,s,n),s};var LO=PO;const DO=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var x_=DO;const UO=$e,IO=(t,e)=>{let n=UO.dot(e,t);return n=Math.abs(n-t[2]),n};var NO=IO;const FO=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var OO=FO;const Hr=$e,BO=(t,e,n)=>{const i=Hr.subtract(Hr.create(),n,e);Hr.normal(i,i),Hr.normalize(i,i);const s=Hr.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};var y_=BO;const HO=lu,zO=(t,e,n)=>{const i=HO();return i[0]=t,i[1]=e,i[2]=n,i};var M_=zO;const VO=$e,{solve2Linear:kO}=dl,GO=(t,e)=>{const n=kO(t[0],t[1],e[0],e[1],t[2],e[2]);return VO.clone(n)};var $O=GO;const fm=$e,WO=x_,XO=M_,qO=(t,e)=>{const n=fm.negate(fm.create(),e),i=-e[2];return WO(t,XO(n[0],n[1],i))};var jO=qO;const YO=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;var ZO=YO;const um=$e,KO=y_,JO=gl,QO=cu,eB=(t,e,n)=>{const i=JO(e),s=QO(e);return um.transform(i,i,n),um.transform(s,s,n),KO(t,i,s)};var tB=eB;const nB=gl,iB=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=nB(t)[0]),n};var sB=iB,rB={clone:wO,closestPoint:LO,copy:x_,create:lu,direction:cu,distanceToPoint:NO,equals:OO,fromPoints:y_,fromValues:M_,intersectPointOfLines:$O,origin:gl,reverse:jO,toString:ZO,transform:tB,xAtY:sB};const hm=dt,oB=$e,Et=He,E_=function(t,e){arguments.length<2&&(e=Et.orthogonal(Et.create(),t)),this.v=Et.normalize(Et.create(),Et.cross(Et.create(),t,e)),this.u=Et.cross(Et.create(),this.v,t),this.plane=t,this.planeorigin=Et.scale(Et.create(),t,t[3])};E_.prototype={getProjectionMatrix:function(){return hm.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const t=Et.scale(Et.create(),this.plane,this.plane[3]);return hm.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return oB.fromValues(Et.dot(t,this.u),Et.dot(t,this.v))},to3D:function(t){const e=Et.scale(Et.create(),this.u,t[0]),n=Et.scale(Et.create(),this.v,t[1]),i=Et.add(e,e,this.planeorigin);return Et.add(n,n,i)}};var aB=E_;const lB=(t,e)=>t-e;var cB=lB;const fB=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){const r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};var uB=fB;const{TAU:S4}=je;var hB={fnNumberSort:cB,insertSorted:uB};const{EPS:di}=je,Ui=rB,Nn=$e,dB=aB,Gs=vN,{insertSorted:pB,fnNumberSort:mB}=hB,dm=et,gB=t=>{if(t.length<2)return t;const e=[],n=t.length,i=dm.plane(t[0]),s=new dB(i),r=[],o=[],a=new Map,l=new Map,c=new Map,f=10/di;for(let _=0;_<n;_++){const g=t[_];let m=[],p=g.vertices.length,S=-1;if(p>0){let y,x;for(let M=0;M<p;M++){let E=s.to2D(g.vertices[M]);const T=Math.floor(E[1]*f);let L;c.has(T)?L=c.get(T):c.has(T+1)?L=c.get(T+1):c.has(T-1)?L=c.get(T-1):(L=E[1],c.set(T,E[1])),E=Nn.fromValues(E[0],L),m.push(E);const v=E[1];(M===0||v<y)&&(y=v,S=M),(M===0||v>x)&&(x=v);let w=l.get(v);w||(w={},l.set(v,w)),w[_]=!0}if(y>=x)m=[],p=0,S=-1;else{let M=a.get(y);M||(M=[],a.set(y,M)),M.push(_)}}m.reverse(),S=p-S-1,r.push(m),o.push(S)}const u=[];l.forEach((_,g)=>u.push(g)),u.sort(mB);let h=[],d=[];for(let _=0;_<u.length;_++){const g=[],m=u[_],p=l.get(m);for(let y=0;y<h.length;++y){const x=h[y],M=x.polygonindex;if(p[M]){const E=r[M],T=E.length;let L=x.leftvertexindex,v=x.rightvertexindex;for(;;){let N=L+1;if(N>=T&&(N=0),E[N][1]!==m)break;L=N}let w=v-1;if(w<0&&(w=T-1),E[w][1]===m&&(v=w),L!==x.leftvertexindex&&L===v)h.splice(y,1),--y;else{x.leftvertexindex=L,x.rightvertexindex=v,x.topleft=E[L],x.topright=E[v];let N=L+1;N>=T&&(N=0),x.bottomleft=E[N];let U=v-1;U<0&&(U=T-1),x.bottomright=E[U]}}}let S;if(_>=u.length-1)h=[],S=null;else{S=Number(u[_+1]);const y=.5*(m+S),x=a.get(m);for(const M in x){const E=x[M],T=r[E],L=T.length,v=o[E];let w=v;for(;;){let B=w+1;if(B>=L&&(B=0),T[B][1]!==m||B===v)break;w=B}let N=v;for(;;){let B=N-1;if(B<0&&(B=L-1),T[B][1]!==m||B===w)break;N=B}let U=w+1;U>=L&&(U=0);let I=N-1;I<0&&(I=L-1);const F={polygonindex:E,leftvertexindex:w,rightvertexindex:N,topleft:T[w],topright:T[N],bottomleft:T[U],bottomright:T[I]};pB(h,F,(B,z)=>{const G=Gs(B.topleft,B.bottomleft,y),W=Gs(z.topleft,z.bottomleft,y);return G>W?1:G<W?-1:0})}}for(const y in h){const x=h[y];let M=Gs(x.topleft,x.bottomleft,m);const E=Nn.fromValues(M,m);M=Gs(x.topright,x.bottomright,m);const T=Nn.fromValues(M,m);M=Gs(x.topleft,x.bottomleft,S);const L=Nn.fromValues(M,S);M=Gs(x.topright,x.bottomright,S);const v=Nn.fromValues(M,S),w={topleft:E,topright:T,bottomleft:L,bottomright:v,leftline:Ui.fromPoints(Ui.create(),E,L),rightline:Ui.fromPoints(Ui.create(),v,T)};if(g.length>0){const N=g[g.length-1],U=Nn.distance(w.topleft,N.topright),I=Nn.distance(w.bottomleft,N.bottomright);U<di&&I<di&&(w.topleft=N.topleft,w.leftline=N.leftline,w.bottomleft=N.bottomleft,g.splice(g.length-1,1))}g.push(w)}if(_>0){const y=new Set,x=new Set;for(let M=0;M<g.length;M++){const E=g[M];for(let T=0;T<d.length;T++)if(!x.has(T)){const L=d[T];if(Nn.distance(L.bottomleft,E.topleft)<di&&Nn.distance(L.bottomright,E.topright)<di){x.add(T);const v=Ui.direction(E.leftline),w=Ui.direction(L.leftline),N=v[0]-w[0],U=Ui.direction(E.rightline),I=Ui.direction(L.rightline),F=U[0]-I[0],B=Math.abs(N)<di,z=Math.abs(F)<di,G=B||N>=0,W=z||F>=0;G&&W&&(E.outpolygon=L.outpolygon,E.leftlinecontinues=B,E.rightlinecontinues=z,y.add(T));break}}}for(let M=0;M<d.length;M++)if(!y.has(M)){const E=d[M];E.outpolygon.rightpoints.push(E.bottomright),Nn.distance(E.bottomright,E.bottomleft)>di&&E.outpolygon.leftpoints.push(E.bottomleft),E.outpolygon.leftpoints.reverse();const L=E.outpolygon.rightpoints.concat(E.outpolygon.leftpoints).map(w=>s.to3D(w)),v=dm.fromPointsAndPlane(L,i);v.vertices.length&&e.push(v)}}for(let y=0;y<g.length;y++){const x=g[y];x.outpolygon?(x.leftlinecontinues||x.outpolygon.leftpoints.push(x.topleft),x.rightlinecontinues||x.outpolygon.rightpoints.push(x.topright)):(x.outpolygon={leftpoints:[],rightpoints:[]},x.outpolygon.leftpoints.push(x.topleft),Nn.distance(x.topleft,x.topright)>di&&x.outpolygon.rightpoints.push(x.topright))}d=g}return e};var _B=gB;const pm=ut,vB=et,{NEPS:xB}=je,yB=_B,MB=t=>{if(t.isRetesselated)return t;const e=pm.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:vB.plane(r),index:o})),n=EB(e),i=[];n.forEach(r=>{if(Array.isArray(r)){const o=yB(r);i.push(...o)}else i.push(r)});const s=pm.create(i);return s.isRetesselated=!0,s},EB=t=>{let e=[t];const n=[];for(let s=3;s>=0;s--){const r=[],o=s===3?15e-9:xB;e.forEach(a=>{a.sort(SB(s,o));let l=0;for(let c=1;c<a.length;c++)a[c].plane[s]-a[l].plane[s]>o&&(c-l===1?n.push(a[l]):r.push(a.slice(l,c)),l=c);a.length-l===1?n.push(a[l]):r.push(a.slice(l))}),e=r}const i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},SB=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;var S_=MB;const{EPS:$s}=je,mm=su,bB=(t,e)=>{if(t.polygons.length===0||e.polygons.length===0)return!1;const n=mm(t),i=n[0],s=n[1],r=mm(e),o=r[0],a=r[1];return!(o[0]-s[0]>$s||i[0]-a[0]>$s||o[1]-s[1]>$s||i[1]-a[1]>$s||o[2]-s[2]>$s||i[2]-a[2]>$s)};var wB=bB;const gm=$i,TB=et;let AB=class Ef{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygontreenodes=[],this.parent=e}invert(){const e=[this];let n;for(let i=0;i<e.length;i++){n=e[i],n.plane&&(n.plane=gm.flip(gm.create(),n.plane)),n.front&&e.push(n.front),n.back&&e.push(n.back);const s=n.front;n.front=n.back,n.back=s}}clipPolygons(e,n){let i={node:this,polygontreenodes:e},s;const r=[];do{if(s=i.node,e=i.polygontreenodes,s.plane){const o=s.plane,a=[],l=[],c=n?a:l,f=e.length;for(let h=0;h<f;h++){const d=e[h];d.isRemoved()||d.splitByPlane(o,c,a,l,a)}s.front&&l.length>0&&r.push({node:s.front,polygontreenodes:l});const u=a.length;if(s.back&&u>0)r.push({node:s.back,polygontreenodes:a});else for(let h=0;h<u;h++)a[h].remove()}i=r.pop()}while(i!==void 0)}clipTo(e,n){let i=this;const s=[];do i.polygontreenodes.length>0&&e.rootnode.clipPolygons(i.polygontreenodes,n),i.front&&s.push(i.front),i.back&&s.push(i.back),i=s.pop();while(i!==void 0)}addPolygonTreeNodes(e){let n={node:this,polygontreenodes:e};const i=[];do{const s=n.node,r=n.polygontreenodes;if(r.length===0){n=i.pop();continue}if(!s.plane){let c=0;c=Math.floor(r.length/2);const f=r[c].getPolygon();s.plane=TB.plane(f)}const o=[],a=[],l=r.length;for(let c=0;c<l;++c)r[c].splitByPlane(s.plane,s.polygontreenodes,a,o,a);o.length>0&&(s.front||(s.front=new Ef(s)),l===o.length&&a.length===0?s.front.polygontreenodes=o:i.push({node:s.front,polygontreenodes:o})),a.length>0&&(s.back||(s.back=new Ef(s)),l===a.length&&o.length===0?s.back.polygontreenodes=a:i.push({node:s.back,polygontreenodes:a})),n=i.pop()}while(n!==void 0)}};var RB=AB;const Ws=He,CB=(t,e,n)=>{const i=Ws.subtract(Ws.create(),n,e);let s=(t[3]-Ws.dot(t,e))/Ws.dot(t,i);return Number.isNaN(s)&&(s=0),s>1&&(s=1),s<0&&(s=0),Ws.scale(i,i,s),Ws.add(i,e,i),i};var PB=CB;const{EPS:da}=je,LB=$i,pa=He,Hc=et,DB=PB,UB=(t,e)=>{const n={type:null,front:null,back:null},i=e.vertices,s=i.length,r=Hc.plane(e);if(LB.equals(r,t))n.type=0;else{let o=!1,a=!1;const l=[],c=-da;for(let f=0;f<s;f++){const u=pa.dot(t,i[f])-t[3],h=u<c;l.push(h),u>da&&(o=!0),u<c&&(a=!0)}if(!o&&!a){const f=pa.dot(t,r);n.type=f>=0?0:1}else if(!a)n.type=2;else if(!o)n.type=3;else{n.type=4;const f=[],u=[];let h=l[0];for(let _=0;_<s;_++){const g=i[_];let m=_+1;m>=s&&(m=0);const p=l[m];if(h===p)h?u.push(g):f.push(g);else{const S=i[m],y=DB(t,g,S);h?(u.push(g),u.push(y),f.push(y)):(f.push(g),f.push(y),u.push(y))}h=p}const d=da*da;if(u.length>=3){let _=u[u.length-1];for(let g=0;g<u.length;g++){const m=u[g];pa.squaredDistance(m,_)<d&&(u.splice(g,1),g--),_=m}}if(f.length>=3){let _=f[f.length-1];for(let g=0;g<f.length;g++){const m=f[g];pa.squaredDistance(m,_)<d&&(f.splice(g,1),g--),_=m}}f.length>=3&&(n.front=Hc.fromPointsAndPlane(f,r)),u.length>=3&&(n.back=Hc.fromPointsAndPlane(u,r))}}return n};var IB=UB;const{EPS:NB}=je,FB=He,_m=et,OB=IB;let BB=class b_{constructor(e,n){this.parent=e,this.children=[],this.polygon=n,this.removed=!1}addPolygons(e){if(!this.isRootNode())throw new Error("Assertion failed");const n=this;e.forEach(i=>{n.addChild(i)})}remove(){if(!this.removed){this.removed=!0,this.polygon=null;const e=this.parent.children,n=e.indexOf(this);if(n<0)throw new Error("Assertion failed");e.splice(n,1),this.parent.recursivelyInvalidatePolygon()}}isRemoved(){return this.removed}isRootNode(){return!this.parent}invert(){if(!this.isRootNode())throw new Error("Assertion failed");this.invertSub()}getPolygon(){if(!this.polygon)throw new Error("Assertion failed");return this.polygon}getPolygons(e){let n=[this];const i=[n];let s,r,o,a;for(s=0;s<i.length;++s)for(n=i[s],r=0,o=n.length;r<o;r++)a=n[r],a.polygon?e.push(a.polygon):a.children.length>0&&i.push(a.children)}splitByPlane(e,n,i,s,r){if(this.children.length){const o=[this.children];let a,l,c,f,u;for(a=0;a<o.length;a++)for(u=o[a],l=0,c=u.length;l<c;l++)f=u[l],f.children.length>0?o.push(f.children):f._splitByPlane(e,n,i,s,r)}else this._splitByPlane(e,n,i,s,r)}_splitByPlane(e,n,i,s,r){const o=this.polygon;if(o){const a=_m.measureBoundingSphere(o),l=a[3]+NB,c=a,f=FB.dot(e,c)-e[3];if(f>l)s.push(this);else if(f<-l)r.push(this);else{const u=OB(e,o);switch(u.type){case 0:n.push(this);break;case 1:i.push(this);break;case 2:s.push(this);break;case 3:r.push(this);break;case 4:if(u.front){const h=this.addChild(u.front);s.push(h)}if(u.back){const h=this.addChild(u.back);r.push(h)}break}}}}addChild(e){const n=new b_(this,e);return this.children.push(n),n}invertSub(){let e=[this];const n=[e];let i,s,r,o;for(i=0;i<n.length;i++)for(e=n[i],s=0,r=e.length;s<r;s++)o=e[s],o.polygon&&(o.polygon=_m.invert(o.polygon)),o.children.length>0&&n.push(o.children)}recursivelyInvalidatePolygon(){this.polygon=null,this.parent&&this.parent.recursivelyInvalidatePolygon()}clear(){let e=[this];const n=[e];for(let i=0;i<n.length;++i){e=n[i];const s=e.length;for(let r=0;r<s;r++){const o=e[r];o.polygon&&(o.polygon=null),o.parent&&(o.parent=null),o.children.length>0&&n.push(o.children),o.children=[]}}}toString(){let e="",n=[this];const i=[n];let s,r,o,a;for(s=0;s<i.length;++s){n=i[s];const l=" ".repeat(s);for(r=0,o=n.length;r<o;r++)a=n[r],e+=`${l}PolygonTreeNode (${a.isRootNode()}): ${a.children.length}`,a.polygon?e+=`
 ${l}polygon: ${a.polygon.vertices}
`:e+=`
`,a.children.length>0&&i.push(a.children)}return e}};var HB=BB;const zB=RB,VB=HB;let kB=class{constructor(e){this.polygonTree=new VB,this.rootnode=new zB(null),e&&this.addPolygons(e)}invert(){this.polygonTree.invert(),this.rootnode.invert()}clipTo(e,n=!1){this.rootnode.clipTo(e,n)}allPolygons(){const e=[];return this.polygonTree.getPolygons(e),e}addPolygons(e){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=this.polygonTree.addChild(e[i]);this.rootnode.addPolygonTreeNodes(n)}clear(){this.polygonTree.clear()}toString(){return"Tree: "+this.polygonTree.toString("")}};var GB=kB,fu={Tree:GB};const ma=ut,$B=wB,{Tree:vm}=fu,WB=(t,e)=>{if(!$B(t,e))return ma.clone(t);const n=new vm(ma.toPolygons(t)),i=new vm(ma.toPolygons(e));n.invert(),n.clipTo(i),i.clipTo(n,!0),n.addPolygons(i.allPolygons()),n.invert();const s=n.allPolygons();return ma.create(s)};var XB=WB;const qB=Cn,jB=S_,YB=XB,ZB=(...t)=>{t=qB(t);let e=t.shift();return t.forEach(n=>{e=YB(e,n)}),e=jB(e),e};var w_=ZB;const KB=Cn,JB=ut,QB=au,eH=mO,tH=MO,nH=w_,iH=(...t)=>{t=KB(t);const e=t.map(s=>tH({z0:-1,z1:1},s)),n=nH(e),i=QB(n);return eH(i,JB.toPolygons(n))};var sH=iH;const rH=Cn,oH=YF,aH=ht,lH=ut,cH=sH,fH=w_,uH=(...t)=>{if(t=rH(t),t.length===0)throw new Error("wrong number of arguments");if(!oH(t))throw new Error("only subtract of the types are supported");const e=t[0];return aH.isA(e)?cH(t):lH.isA(e)?fH(t):e};var hH=uH;const ga=oT(hH);function dH({width:t,depth:e,safety:n=0,bottomHeight:i=15,topHeight:s=25,borderThickness:r=2.5,enableBackHole:o=!1,backHoleXOffset:a=0,backHoleWidth:l=55,backHoleHeight:c=10,enableFrontHole:f=!1,frontHoleXOffset:u=0,frontHoleWidth:h=55,frontHoleHeight:d=10,enableRightHole:_=!1,rightHoleXOffset:g=0,rightHoleWidth:m=55,rightHoleHeight:p=10,enableLeftHole:S=!1,leftHoleXOffset:y=0,leftHoleWidth:x=55,leftHoleHeight:M=10}){const E=r*2,T=t+n,L=e+n,v=-i/2,w=Mt.translate([0,L/2+r/2,v],hn.cuboid({size:[T+E,r,i]})),N=Mt.translate([0,-L/2-r/2,v],hn.cuboid({size:[T+E,r,i]})),U=Mt.translate([T/2+r/2,0,v],hn.cuboid({size:[r,L+E,i]})),I=Mt.translate([-T/2-r/2,0,v],hn.cuboid({size:[r,L+E,i]}));let F=N;if(o){const A=hn.cuboid({size:[l,r+E,c]}),ue=Mt.translate([a,-L/2-r/2,-i+c/2],A);F=ga(F,ue)}let B=w;if(f){const A=hn.cuboid({size:[h,r+E,d]}),ue=Mt.translate([-u,L/2+r/2,-i+d/2],A);B=ga(B,ue)}let z=I,G=U;if(_){const A=hn.cuboid({size:[r+E,m,p]}),ue=Mt.translate([-T/2-r/2,-g,-i+p/2],A);z=ga(z,ue)}if(S){const A=hn.cuboid({size:[r+E,x,M]}),ue=Mt.translate([T/2+r/2,y,-i+M/2],A);G=ga(G,ue)}const W=s/2,oe=T-r/2,ee=L-r/2,be=Mt.translate([0,ee/2+r/2,W],hn.cuboid({size:[oe+E,r,s]})),ce=Mt.translate([0,-ee/2-r/2,W],hn.cuboid({size:[oe+E,r,s]})),Y=Mt.translate([oe/2+r/2,0,W],hn.cuboid({size:[r,ee+E,s]})),se=Mt.translate([-oe/2-r/2,0,W],hn.cuboid({size:[r,ee+E,s]})),ge=s+r/2,_e=Mt.translate([0,0,ge],hn.cuboid({size:[oe+E,ee+E,r]}));return[B,F,G,z,be,ce,Y,se,_e]}const{solve2Linear:w4}=dl,{EPS:T4}=je,{geom2:A4,geom3:R4,path2:C4}=iu,{Tree:P4}=fu,{Tree:L4}=fu,{EPS:D4,TAU:U4}=je,{EPS:I4,TAU:N4}=je,{area:F4}=dl,{TAU:O4}=je,zc=He,T_=et,pH=(t,e)=>{const n=Math.abs(T_.measureArea(e));return Number.isFinite(n)&&n>t},mH=(t,e)=>{let n=e.map(s=>{const r=s.vertices.map(l=>zc.snap(zc.create(),l,t)),o=[];for(let l=0;l<r.length;l++){const c=(l+1)%r.length;zc.equals(r[l],r[c])||o.push(r[l])}const a=T_.create(o);return s.color&&(a.color=s.color),a});const i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>pH(i,s)),n};var A_=mH;const gH=mN,Ys=He,Ba=et,_H=t=>{const e=Ba.toPoints(t),n=[];for(let i=0;i<e.length;i++){const s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){const s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},vH=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.set(n,e)},Vc=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.delete(n)},xH=(t,e)=>{const n=`${e.v2}:${e.v1}`;return t.get(n)},yH=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2;const o=xm(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;const a=xm(i,s,r,n);return[o,a]},MH=Ys.create(),EH=Ys.create(),xm=(t,e,n,i)=>{const s=Ys.subtract(MH,e,t),r=Ys.subtract(EH,n,e);return Ys.cross(s,s,r),Ys.dot(s,i)},SH=t=>{let e;const n=[];for(;t.next;){const i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=Ba.create(n)),e},bH=t=>{if(t.length<2)return t;const e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){const r=n.shift(),o=_H(r);for(let a=0;a<o.length;a++){const l=o[a],c=xH(i,l);if(c){const f=yH(l,c,e);if(f[0]>=0&&f[1]>=0){const u=c.next,h=l.next;l.prev.next=c.next,l.next.prev=c.prev,c.prev.next=l.next,c.next.prev=l.prev,l.v1=null,l.v2=null,l.next=null,l.prev=null,Vc(i,c),c.v1=null,c.v2=null,c.next=null,c.prev=null;const d=(_,g,m)=>{const p={v1:m.v1,v2:g.v2,next:g.next,prev:m.prev};m.prev.next=p,g.next.prev=p,Vc(_,g),g.v1=null,g.v2=null,g.next=null,g.prev=null,Vc(_,m),m.v1=null,m.v2=null,m.next=null,m.prev=null};f[0]===0&&d(i,u,u.prev),f[1]===0&&d(i,h,h.prev)}}else l.next&&vH(i,l)}}const s=[];return i.forEach(r=>{const o=SH(r);o&&s.push(o)}),i.clear(),s},wH=(t,e)=>Math.abs(t[3]-e[3])<15e-8?gH(t,e):!1,TH=(t,e)=>{const n=[];e.forEach(s=>{const r=n.find(o=>wH(o[0],Ba.plane(s)));r?r[1].push(s):n.push([Ba.plane(s),[s]])});let i=[];return n.forEach(s=>{const r=s[1],o=bH(r);i=i.concat(o)}),i};var AH=TH;const ym=je,qn=He,RH=et,qt=t=>`${t}`,Mm=(t,e,n,i,s,r)=>{const o=qt(i),a=qt(s),l=`${o}/${a}`,c=`${a}/${o}`;if(t.has(c))return wa(t,e,n,s,i,null),null;const f={vertex0:i,vertex1:s,polygonindex:r};return t.has(l)?t.get(l).push(f):t.set(l,[f]),e.has(o)?e.get(o).push(l):e.set(o,[l]),n.has(a)?n.get(a).push(l):n.set(a,[l]),l},wa=(t,e,n,i,s,r)=>{const o=qt(i),a=qt(s),l=`${o}/${a}`;let c=-1;const f=t.get(l);for(let u=0;u<f.length;u++){const h=f[u];let d=qt(h.vertex0);if(d===o&&(d=qt(h.vertex1),d===a&&!(r!==null&&h.polygonindex!==r))){c=u;break}}f.splice(c,1),f.length===0&&t.delete(l),c=e.get(o).indexOf(l),e.get(o).splice(c,1),e.get(o).length===0&&e.delete(o),c=n.get(a).indexOf(l),n.get(a).splice(c,1),n.get(a).length===0&&n.delete(a)},CH=t=>{const e=new Map;for(let n=0;n<t.length;n++){const i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=qt(r);for(let a=0;a<s;a++){let l=a+1;l===s&&(l=0);const c=i.vertices[l],f=qt(c),u=`${o}/${f}`,h=`${f}/${o}`;if(e.has(h)){const d=e.get(h);d.splice(-1,1),d.length===0&&e.delete(h)}else{const d={vertex0:r,vertex1:c,polygonindex:n};e.has(u)?e.get(u).push(d):e.set(u,[d])}r=c,o=f}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){const n=new Map,i=new Map,s=new Map;for(const[o,a]of e)s.set(o,!0),a.forEach(l=>{const c=qt(l.vertex0),f=qt(l.vertex1);n.has(c)?n.get(c).push(o):n.set(c,[o]),i.has(f)?i.get(f).push(o):i.set(f,[o])});const r=t.slice(0);for(;e.size!==0;){for(const a of e.keys())s.set(a,!0);let o=!1;for(;;){const a=Array.from(s.keys());if(a.length===0)break;const l=a[0];let c=!0;if(e.has(l)){const u=e.get(l)[0];for(let h=0;h<2;h++){const d=h===0?u.vertex0:u.vertex1,_=h===0?u.vertex1:u.vertex0,g=qt(d),m=qt(_);let p=[];h===0?i.has(g)&&(p=i.get(g)):n.has(g)&&(p=n.get(g));for(let S=0;S<p.length;S++){const y=p[S],x=e.get(y)[0],M=h===0?x.vertex0:x.vertex1;if(h===0?x.vertex1:x.vertex0,qt(M)===m){wa(e,n,i,d,_,null),wa(e,n,i,_,d,null),c=!1,h=2,o=!0;break}else{const T=d,L=_,v=M,w=qn.subtract(qn.create(),v,T),N=qn.dot(qn.subtract(qn.create(),L,T),w)/qn.dot(w,w);if(N>0&&N<1){const U=qn.scale(qn.create(),w,N);if(qn.add(U,U,T),qn.squaredDistance(U,L)<ym.EPS*ym.EPS){const F=x.polygonindex,B=r[F],z=qt(x.vertex1);let G=-1;for(let ce=0;ce<B.vertices.length;ce++)if(qt(B.vertices[ce])===z){G=ce;break}const W=B.vertices.slice(0);W.splice(G,0,_);const oe=RH.create(W);r[F]=oe,wa(e,n,i,x.vertex0,x.vertex1,F);const ee=Mm(e,n,i,x.vertex0,_,F),be=Mm(e,n,i,_,x.vertex1,F);ee!==null&&s.set(ee,!0),be!==null&&s.set(be,!0),c=!1,h=2,o=!0;break}}}}}}c&&s.delete(l)}if(!o)break}t=r}return e.clear(),t};var PH=CH;const kc=He,Gc=et,LH=(t,e,n)=>{const i=e.vertices.length;if(i>3){if(i>4){const o=[0,0,0];e.vertices.forEach(a=>kc.add(o,o,a)),kc.snap(o,kc.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){const l=Gc.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(l.color=e.color),n.push(l)}return}const s=Gc.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=Gc.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},DH=(t,e)=>{const n=[];return e.forEach(i=>{LH(t,i,n)}),n};var UH=DH;const IH=Cn,NH=au,FH=ht,R_=ut,OH=Rn,BH=A_,HH=AH,zH=PH,VH=UH,kH=(t,e)=>e,GH=(t,e)=>e,$H=(t,e)=>{const n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=NH(e);let a=R_.toPolygons(e);i&&(a=BH(o,a)),s&&(a=HH(o,a)),r&&(a=zH(a),a=VH(o,a));const l=Object.assign({},e);return l.polygons=a,l},WH=(t,...e)=>{if(e=IH(e),e.length===0)throw new Error("wrong number of arguments");const n=e.map(i=>{if(OH.isA(i))return kH(t,i);if(FH.isA(i))return GH(t,i);if(R_.isA(i))return $H(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};var XH=WH;const qH=Cn,fs=$e,Sf=ht,bf=ut,wf=Rn,uu=au,jH=A_,YH=t=>{const e=uu(t),i=wf.toPoints(t).map(s=>fs.snap(fs.create(),s,e));return wf.create(i)},ZH=t=>{const e=uu(t);let i=Sf.toSides(t).map(s=>[fs.snap(fs.create(),s[0],e),fs.snap(fs.create(),s[1],e)]);return i=i.filter(s=>!fs.equals(s[0],s[1])),Sf.create(i)},KH=t=>{const e=uu(t),n=bf.toPolygons(t),i=jH(e,n);return bf.create(i)},JH=(...t)=>{if(t=qH(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>wf.isA(n)?YH(n):Sf.isA(n)?ZH(n):bf.isA(n)?KH(n):n);return e.length===1?e[0]:e};var QH=JH,ez={generalize:XH,snap:QH,retessellate:S_};const{translate:B4}=Mt,tz=Cn,nz=ht,iz=ut,sz=Rn,rz=su,{translate:oz}=Mt,$c=(t,e)=>{const n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t),r=rz(e),o=[0,0,0];return i[0]&&(o[0]=s[0]-(r[0][0]+(r[1][0]-r[0][0])/2)),i[1]&&(o[1]=s[1]-(r[0][1]+(r[1][1]-r[0][1])/2)),i[2]&&(o[2]=s[2]-(r[0][2]+(r[1][2]-r[0][2])/2)),oz(o,e)},_l=(t,...e)=>{const n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t);if(e=tz(e),e.length===0)throw new Error("wrong number of arguments");if(s.length!==3)throw new Error("relativeTo must be an array of length 3");t={axes:i,relativeTo:s};const r=e.map(o=>sz.isA(o)||nz.isA(o)||iz.isA(o)?$c(t,o):o);return r.length===1?r[0]:r},az=(...t)=>_l({axes:[!0,!1,!1]},t),lz=(...t)=>_l({axes:[!1,!0,!1]},t),cz=(...t)=>_l({axes:[!1,!1,!0]},t);var _a={center:_l,centerX:az,centerY:lz,centerZ:cz};const fz=Cn,Em=dt,Sm=ht,bm=ut,wm=Rn,vl=(t,...e)=>{if(!Array.isArray(t))throw new Error("factors must be an array");if(e=fz(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(1);if(t[0]<=0||t[1]<=0||t[2]<=0)throw new Error("factors must be positive");const n=Em.fromScaling(Em.create(),t),i=e.map(s=>wm.isA(s)?wm.transform(n,s):Sm.isA(s)?Sm.transform(n,s):bm.isA(s)?bm.transform(n,s):s);return i.length===1?i[0]:i},uz=(t,...e)=>vl([t,1,1],e),hz=(t,...e)=>vl([1,t,1],e),dz=(t,...e)=>vl([1,1,t],e);var va={scale:vl,scaleX:uz,scaleY:hz,scaleZ:dz};_a.center,_a.centerX,_a.centerY,_a.centerZ,$r.mirror,$r.mirrorX,$r.mirrorY,$r.mirrorZ,Xr.rotate,Xr.rotateX,Xr.rotateY,Xr.rotateZ,va.scale,va.scaleX,va.scaleY,va.scaleZ,Mt.translate,Mt.translateX,Mt.translateY,Mt.translateZ;var hu={geometries:iu,modifiers:ez};const C_=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(C_(n)):e.concat(n),[]);var pz=C_;const mz=t=>Array.isArray(t)?t:t==null?[]:[t];var gz=mz,_z={flatten:pz,toArray:gz};const{geometries:Wc}=hu,vz=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((m,p)=>{Wc.geom3.toPolygons(m).forEach(y=>{const x=y.vertices.length,M=x>=3?x-2:0;r+=M,o+=1})});const a=new Uint8Array(80);for(let m=0;m<80;m++)a[m]=65;const l=new Uint32Array(1);l[0]=r;const c=new ArrayBuffer(50*r),f=new Int8Array(c),u=new ArrayBuffer(50),h=new Int8Array(u),d=new Float32Array(u,0,12),_=new Uint16Array(u,48,1);let g=0;return t.forEach(m=>{Wc.geom3.toPolygons(m).forEach((S,y)=>{const x=S.vertices,M=x.length,E=Wc.poly3.plane(S);for(let T=0;T<M-2;T++){d[0]=E[0],d[1]=E[1],d[2]=E[2];let L=3;for(let v=0;v<3;v++){const w=v+(v>0?T:0),N=x[w];d[L++]=N[0],d[L++]=N[1],d[L++]=N[2]}_[0]=0,f.set(h,g),g+=50}e.statusCallback&&e.statusCallback({progress:100*y/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,l.buffer,c]};var xz={serializeBinary:vz};const{geometries:P_}=hu,yz=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=`solid JSCAD
${Mz(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},Mz=(t,e)=>{const n=[];return t.forEach((i,s)=>{n.push(Ez(i)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},Ez=(t,e)=>{const n=[];return P_.geom3.toPolygons(t).forEach((s,r)=>{n.push(Sz(s))}),n.join(`
`)},L_=t=>`${t[0]} ${t[1]} ${t[2]}`,Xc=t=>`vertex ${L_(t)}`,Sz=t=>{const e=[];if(t.vertices.length>=3){const n=Xc(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){const s=`facet normal ${L_(P_.poly3.plane(t))}
outer loop
${n}
${Xc(t.vertices[i+1])}
${Xc(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};var bz={serializeText:yz};const{geometries:wz,modifiers:Tz}=hu,{flatten:Az,toArray:Rz}=_z,{serializeBinary:Cz}=xz,{serializeText:Pz}=bz,Lz="application/sla",Dz=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=Az(e);let i=e.filter(s=>wz.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=Rz(Tz.generalize({snap:!0,triangulate:!0},i)),t.binary?Cz(i,t):Pz(i,t)};var Uz={mimeType:Lz,serialize:Dz};const Iz={props:["width","depth","safety","bottomHeight","topHeight","borderThickness","enableBackHole","backHoleXOffset","backHoleWidth","backHoleHeight","enableFrontHole","frontHoleXOffset","frontHoleWidth","frontHoleHeight","enableRightHole","rightHoleXOffset","rightHoleWidth","rightHoleHeight","enableLeftHole","leftHoleXOffset","leftHoleWidth","leftHoleHeight"],data(){return{stlData:null,currentWidth:0,currentDepth:0,currentSafety:0,currentBottomHeight:0,currentTopHeight:0,currentBorderThickness:0,tweenDuration:1e3,edgeLines:null}},computed:{allOptions(){return{width:this.width,depth:this.depth,safety:this.safety,bottomHeight:this.bottomHeight,topHeight:this.topHeight,borderThickness:this.borderThickness,enableBackHole:this.enableBackHole,backHoleXOffset:this.backHoleXOffset,backHoleWidth:this.backHoleWidth,backHoleHeight:this.backHoleHeight,enableFrontHole:this.enableFrontHole,frontHoleXOffset:this.frontHoleXOffset,frontHoleWidth:this.frontHoleWidth,frontHoleHeight:this.frontHoleHeight,enableRightHole:this.enableRightHole,rightHoleXOffset:this.rightHoleXOffset,rightHoleWidth:this.rightHoleWidth,rightHoleHeight:this.rightHoleHeight,enableLeftHole:this.enableLeftHole,leftHoleXOffset:this.leftHoleXOffset,leftHoleWidth:this.leftHoleWidth,leftHoleHeight:this.leftHoleHeight}}},watch:{allOptions:{deep:!0,handler(t,e){if(!e)return;const n=["width","depth","safety","bottomHeight","topHeight","borderThickness"];if(n.some(s=>t[s]!==e[s])){const s=n.reduce((o,a)=>(o[a]=e[a],o),{}),r=n.reduce((o,a)=>(o[a]=t[a],o),{});this.animateDimensionsTransition(s,r)}else this.rebuildMesh()}}},created(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.mesh=null},mounted(){this.currentWidth=this.width,this.currentDepth=this.depth,this.currentSafety=this.safety,this.currentBottomHeight=this.bottomHeight,this.currentTopHeight=this.topHeight,this.currentBorderThickness=this.borderThickness,this.initScene(),this.createInitialMesh()},methods:{generateSTL(t,e,n,i,s,r){const o=l=>Math.max(0,Number(l)||0),a={width:t,depth:e,safety:n,bottomHeight:i,topHeight:s,borderThickness:r,enableBackHole:this.enableBackHole,backHoleXOffset:this.backHoleXOffset,backHoleWidth:this.backHoleWidth,backHoleHeight:o(this.backHoleHeight),enableFrontHole:this.enableFrontHole,frontHoleXOffset:this.frontHoleXOffset,frontHoleWidth:this.frontHoleWidth,frontHoleHeight:o(this.frontHoleHeight),enableRightHole:this.enableRightHole,rightHoleXOffset:this.rightHoleXOffset,rightHoleWidth:this.rightHoleWidth,rightHoleHeight:o(this.rightHoleHeight),enableLeftHole:this.enableLeftHole,leftHoleXOffset:this.leftHoleXOffset,leftHoleWidth:this.leftHoleWidth,leftHoleHeight:o(this.leftHoleHeight)};try{const l=dH(a);return Uz.serialize({binary:!1},l).join(`
`)}catch(l){return console.error("Error generating geometry or STL:",l),null}},createInitialMesh(){const t=this.generateSTL(this.width,this.depth,this.safety,this.bottomHeight,this.topHeight,this.borderThickness);if(!t)return;this.stlData=t;const n=new Ad().parse(t),i=new Zw({color:11066076,roughness:.6,metalness:.1});this.mesh=new xi(n,i),this.scene.add(this.mesh);const s=new Ed(n),r=new mf({color:3355443});this.edgeLines=new Md(s,r),this.scene.add(this.edgeLines)},rebuildMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose()),this.edgeLines&&(this.scene.remove(this.edgeLines),this.edgeLines.geometry.dispose()),this.createInitialMesh()},animateDimensionsTransition(t,e){const n=performance.now(),i=this.tweenDuration,s=new Ad,r=o=>{const a=Math.min((o-n)/i,1),l={};for(const f of Object.keys(t))l[f]=t[f]+(e[f]-t[f])*a;const c=this.generateSTL(l.width,l.depth,l.safety,l.bottomHeight,l.topHeight,l.borderThickness);if(c){const f=s.parse(c);this.mesh&&(this.mesh.geometry.dispose(),this.mesh.geometry=f),this.edgeLines&&(this.scene.remove(this.edgeLines),this.edgeLines.geometry.dispose());const u=new Ed(f);this.edgeLines=new Md(u,new mf({color:3355443})),this.scene.add(this.edgeLines),this.stlData=c}a<1?requestAnimationFrame(r):(this.currentWidth=e.width,this.currentDepth=e.depth,this.currentSafety=e.safety,this.currentBottomHeight=e.bottomHeight,this.currentTopHeight=e.topHeight,this.currentBorderThickness=e.borderThickness)};requestAnimationFrame(r)},initScene(){this.scene=new jw,this.camera=new wn(75,600/500,.1,1e3),this.camera.position.set(0,150,100),this.camera.up.set(0,0,1),this.camera.lookAt(0,0,10),this.renderer=new _0({canvas:this.$refs.canvas,antialias:!0}),this.renderer.setSize(600,500),this.renderer.setClearColor(16250871),this.scene.add(new sT(7368816,.5));const n=new tT(16777215,4473924,.6);n.position.set(0,200,0),this.scene.add(n);const i=new Td(16777215,.8);i.position.set(1,1,1).normalize(),this.scene.add(i);const s=new Td(16777215,.4);s.position.set(-1,-1,1).normalize(),this.scene.add(s),this.controls=new rT(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.8,this.controls.dynamicDampingFactor=.05,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/2,this.animate()},animate(){requestAnimationFrame(this.animate.bind(this)),this.controls.update(),this.renderer.render(this.scene,this.camera)},downloadSTL(){if(!this.stlData)return;const t=new Blob([this.stlData],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`SynthArmor_cover_${this.width}x${this.depth}_safetyOffset${this.safety}_bottomHeight${this.bottomHeight}_topHeight${this.topHeight}_borderThickness${this.borderThickness}.stl`,e.click()}}},Nz={class:"mt-2 mb-2 flex flex-col items-center"},Fz={class:"w-full max-w-[600px] flex flex-col items-center"},Oz={ref:"canvas",class:"rounded-md w-full max-w-[600px] border border-gray-300 border-t-0 border-b-0"};function Bz(t,e,n,i,s,r){return tn(),gn("div",Nz,[le("div",Fz,[e[0]||(e[0]=le("div",{class:"bg-gray-300 h-[1px] w-[95%]"},null,-1)),le("canvas",Oz,null,512),e[1]||(e[1]=le("div",{class:"bg-gray-300 h-[1px] w-[95%]"},null,-1))])])}const Hz=mr(Iz,[["render",Bz]]),zz={name:"FAQ",data(){return{faqs:[{question:"What is this?",answer:"This web app lets you quickly generate a custom 3D model for gear cover protection. Simply enter your equipment’s dimensions, adjust a safety offset if needed, and download an STL file ready for 3D printing.",open:!1},{question:"How does it work?",answer:`
            <ol class="list-decimal pl-6 mt-2">
              <li><strong>Enter Dimensions:</strong> Provide the exact width and depth of your machine.</li>
              <li><strong>Adjust for Fit:</strong> Use the "Safety Offset" to add a small buffer for a secure fit.</li>
              <li><strong>Automatic Preview:</strong> The model updates automatically as you modify the values.</li>
              <li><strong>Download STL:</strong> Click the download button to save your custom design for 3D printing.</li>
            </ol>
          `,open:!1},{question:"A Word of Caution",answer:"Please note that you are solely responsible for ensuring that the generated model fits your machine. Always double-check the dimensions before printing.",open:!1}]}},methods:{toggle(t){this.faqs[t].open=!this.faqs[t].open}}},Vz={class:"w-full max-w-[600px] mt-8"},kz=["onClick"],Gz={class:"text-lg font-medium text-gray-700"},$z={class:"px-6 py-4 bg-gray-50"},Wz=["innerHTML"];function Xz(t,e,n,i,s,r){return tn(),gn("div",Vz,[e[1]||(e[1]=le("h2",{class:"text-2xl font-bold mb-6 text-gray-800 text-center"},"FAQ",-1)),(tn(!0),gn(Fn,null,$v(s.faqs,(o,a)=>(tn(),gn("div",{key:a,class:"mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"},[le("button",{onClick:l=>r.toggle(a),class:"w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"},[le("span",Gz,Um(o.question),1),(tn(),gn("svg",{class:$a(["w-5 h-5 text-gray-500 transform transition-transform duration-300",{"rotate-180":o.open}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e[0]||(e[0]=[le("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],8,kz),bt(Gx,{name:"faq-collapse"},{default:ig(()=>[Je(le("div",$z,[le("div",{innerHTML:o.answer,class:"text-gray-600"},null,8,Wz)],512),[[Yx,o.open]])]),_:2},1024)]))),128))])}const qz=mr(zz,[["render",Xz],["__scopeId","data-v-9b75b70f"]]),jz={name:"HoleOptionsForm",props:{initialEnableBackHole:{type:Boolean,default:!1},initialBackHoleXOffset:{type:Number,default:0},initialBackHoleWidth:{type:Number,default:55},initialBackHoleHeight:{type:Number,default:10},initialEnableFrontHole:{type:Boolean,default:!1},initialFrontHoleXOffset:{type:Number,default:0},initialFrontHoleWidth:{type:Number,default:55},initialFrontHoleHeight:{type:Number,default:10},initialEnableRightHole:{type:Boolean,default:!1},initialRightHoleXOffset:{type:Number,default:0},initialRightHoleWidth:{type:Number,default:55},initialRightHoleHeight:{type:Number,default:10},initialEnableLeftHole:{type:Boolean,default:!1},initialLeftHoleXOffset:{type:Number,default:0},initialLeftHoleWidth:{type:Number,default:55},initialLeftHoleHeight:{type:Number,default:10}},data(){return{local:{enableBackHole:this.initialEnableBackHole,backHoleXOffset:this.initialBackHoleXOffset,backHoleWidth:this.initialBackHoleWidth,backHoleHeight:this.initialBackHoleHeight,enableFrontHole:this.initialEnableFrontHole,frontHoleXOffset:this.initialFrontHoleXOffset,frontHoleWidth:this.initialFrontHoleWidth,frontHoleHeight:this.initialFrontHoleHeight,enableRightHole:this.initialEnableRightHole,rightHoleXOffset:this.initialRightHoleXOffset,rightHoleWidth:this.initialRightHoleWidth,rightHoleHeight:this.initialRightHoleHeight,enableLeftHole:this.initialEnableLeftHole,leftHoleXOffset:this.initialLeftHoleXOffset,leftHoleWidth:this.initialLeftHoleWidth,leftHoleHeight:this.initialLeftHoleHeight}}},watch:{local:{deep:!0,handler(){this.$emit("update-hole-options",{...this.local})}}}},Yz={class:"mb-6 p-4 border border-gray-300 rounded"},Zz={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Kz={class:"inline-flex items-center"},Jz={key:0,class:"mt-2 space-y-2"},Qz={class:"mt-1"},e4={class:"inline-flex items-center"},t4={key:0,class:"mt-2 space-y-2"},n4={class:"mt-1"},i4={class:"inline-flex items-center"},s4={key:0,class:"mt-2 space-y-2"},r4={class:"mt-1"},o4={class:"inline-flex items-center"},a4={key:0,class:"mt-2 space-y-2"},l4={class:"mt-1"};function c4(t,e,n,i,s,r){return tn(),gn("fieldset",Yz,[e[40]||(e[40]=le("legend",{class:"px-2 text-lg font-semibold"},"Hole Options",-1)),le("div",Zz,[le("div",null,[le("label",Kz,[Je(le("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=o=>s.local.enableBackHole=o),class:"mr-2"},null,512),[[Ro,s.local.enableBackHole]]),e[20]||(e[20]=mn(" Enable Back Hole "))]),s.local.enableBackHole?(tn(),gn("div",Jz,[le("div",null,[e[22]||(e[22]=le("label",{class:"block text-sm"},"Offset X (mm):",-1)),Je(le("input",{type:"range","onUpdate:modelValue":e[1]||(e[1]=o=>s.local.backHoleXOffset=o),min:"-100",max:"100",step:"1",class:"w-full"},null,512),[[lt,s.local.backHoleXOffset,void 0,{number:!0}]]),le("div",Qz,[Je(le("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=o=>s.local.backHoleXOffset=o),class:"w-20 p-1 border rounded"},null,512),[[lt,s.local.backHoleXOffset,void 0,{number:!0}]]),e[21]||(e[21]=mn(" mm "))])]),le("div",null,[e[23]||(e[23]=le("label",{class:"block text-sm"},"Width (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=o=>s.local.backHoleWidth=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.backHoleWidth,void 0,{number:!0}]])]),le("div",null,[e[24]||(e[24]=le("label",{class:"block text-sm"},"Height (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=o=>s.local.backHoleHeight=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.backHoleHeight,void 0,{number:!0}]])])])):Ao("",!0)]),le("div",null,[le("label",e4,[Je(le("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=o=>s.local.enableFrontHole=o),class:"mr-2"},null,512),[[Ro,s.local.enableFrontHole]]),e[25]||(e[25]=mn(" Enable Front Hole "))]),s.local.enableFrontHole?(tn(),gn("div",t4,[le("div",null,[e[27]||(e[27]=le("label",{class:"block text-sm"},"Offset X (mm):",-1)),Je(le("input",{type:"range","onUpdate:modelValue":e[6]||(e[6]=o=>s.local.frontHoleXOffset=o),min:"-100",max:"100",step:"1",class:"w-full"},null,512),[[lt,s.local.frontHoleXOffset,void 0,{number:!0}]]),le("div",n4,[Je(le("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=o=>s.local.frontHoleXOffset=o),class:"w-20 p-1 border rounded"},null,512),[[lt,s.local.frontHoleXOffset,void 0,{number:!0}]]),e[26]||(e[26]=mn(" mm "))])]),le("div",null,[e[28]||(e[28]=le("label",{class:"block text-sm"},"Width (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=o=>s.local.frontHoleWidth=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.frontHoleWidth,void 0,{number:!0}]])]),le("div",null,[e[29]||(e[29]=le("label",{class:"block text-sm"},"Height (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=o=>s.local.frontHoleHeight=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.frontHoleHeight,void 0,{number:!0}]])])])):Ao("",!0)]),le("div",null,[le("label",i4,[Je(le("input",{type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=o=>s.local.enableRightHole=o),class:"mr-2"},null,512),[[Ro,s.local.enableRightHole]]),e[30]||(e[30]=mn(" Enable Right Hole "))]),s.local.enableRightHole?(tn(),gn("div",s4,[le("div",null,[e[32]||(e[32]=le("label",{class:"block text-sm"},"Offset X (mm):",-1)),Je(le("input",{type:"range","onUpdate:modelValue":e[11]||(e[11]=o=>s.local.rightHoleXOffset=o),min:"-100",max:"100",step:"1",class:"w-full"},null,512),[[lt,s.local.rightHoleXOffset,void 0,{number:!0}]]),le("div",r4,[Je(le("input",{type:"number","onUpdate:modelValue":e[12]||(e[12]=o=>s.local.rightHoleXOffset=o),class:"w-20 p-1 border rounded"},null,512),[[lt,s.local.rightHoleXOffset,void 0,{number:!0}]]),e[31]||(e[31]=mn(" mm "))])]),le("div",null,[e[33]||(e[33]=le("label",{class:"block text-sm"},"Width (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[13]||(e[13]=o=>s.local.rightHoleWidth=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.rightHoleWidth,void 0,{number:!0}]])]),le("div",null,[e[34]||(e[34]=le("label",{class:"block text-sm"},"Height (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[14]||(e[14]=o=>s.local.rightHoleHeight=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.rightHoleHeight,void 0,{number:!0}]])])])):Ao("",!0)]),le("div",null,[le("label",o4,[Je(le("input",{type:"checkbox","onUpdate:modelValue":e[15]||(e[15]=o=>s.local.enableLeftHole=o),class:"mr-2"},null,512),[[Ro,s.local.enableLeftHole]]),e[35]||(e[35]=mn(" Enable Left Hole "))]),s.local.enableLeftHole?(tn(),gn("div",a4,[le("div",null,[e[37]||(e[37]=le("label",{class:"block text-sm"},"Offset X (mm):",-1)),Je(le("input",{type:"range","onUpdate:modelValue":e[16]||(e[16]=o=>s.local.leftHoleXOffset=o),min:"-100",max:"100",step:"1",class:"w-full"},null,512),[[lt,s.local.leftHoleXOffset,void 0,{number:!0}]]),le("div",l4,[Je(le("input",{type:"number","onUpdate:modelValue":e[17]||(e[17]=o=>s.local.leftHoleXOffset=o),class:"w-20 p-1 border rounded"},null,512),[[lt,s.local.leftHoleXOffset,void 0,{number:!0}]]),e[36]||(e[36]=mn(" mm "))])]),le("div",null,[e[38]||(e[38]=le("label",{class:"block text-sm"},"Width (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[18]||(e[18]=o=>s.local.leftHoleWidth=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.leftHoleWidth,void 0,{number:!0}]])]),le("div",null,[e[39]||(e[39]=le("label",{class:"block text-sm"},"Height (mm):",-1)),Je(le("input",{type:"number","onUpdate:modelValue":e[19]||(e[19]=o=>s.local.leftHoleHeight=o),min:"0",class:"w-full p-2 border rounded"},null,512),[[lt,s.local.leftHoleHeight,void 0,{number:!0}]])])])):Ao("",!0)])])])}const f4=mr(jz,[["render",c4]]),u4="/SynthArmor/dev/SynthArmor_logo.png",h4={name:"App",components:{BasicForm:A1,AdvancedForm:F1,ModelViewer:Hz,FAQ:qz,HoleOptionsForm:f4},data(){return{width:155,depth:105,safety:0,bottomHeight:15,topHeight:25,borderThickness:2.5,enableBackHole:!1,backHoleXOffset:0,backHoleWidth:55,backHoleHeight:10,enableFrontHole:!1,frontHoleXOffset:0,frontHoleWidth:55,frontHoleHeight:10,enableRightHole:!1,rightHoleXOffset:0,rightHoleWidth:55,rightHoleHeight:10,enableLeftHole:!1,leftHoleXOffset:0,leftHoleWidth:55,leftHoleHeight:10}},methods:{updateBasic({width:t,depth:e,safety:n}){this.width=t,this.depth=e,this.safety=n},updateAdvanced({bottomHeight:t,topHeight:e,borderThickness:n}){this.bottomHeight=t,this.topHeight=e,this.borderThickness=n},updateHoleOptions(t){Object.assign(this,t)},downloadModel(){this.$refs.modelViewer.downloadSTL()}}},d4={class:"max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6"},p4={class:"w-full max-w-[600px] bg-white rounded shadow p-6"};function m4(t,e,n,i,s,r){const o=wr("BasicForm"),a=wr("ModelViewer"),l=wr("AdvancedForm"),c=wr("HoleOptionsForm"),f=wr("FAQ");return tn(),gn("div",d4,[e[1]||(e[1]=le("img",{src:u4,alt:"SynthArmor Logo",class:"w-40 mb-4"},null,-1)),e[2]||(e[2]=le("div",{class:"mb-8 text-center"},[le("p",{class:"text-gray-600"}," Modify the dimensions of a 3D model and download your custom design instantly. ")],-1)),le("div",p4,[bt(o,{"initial-width":s.width,"initial-depth":s.depth,"initial-safety":s.safety,onUpdateDimensions:r.updateBasic},null,8,["initial-width","initial-depth","initial-safety","onUpdateDimensions"]),bt(a,{ref:"modelViewer",width:s.width,depth:s.depth,safety:s.safety,"bottom-height":s.bottomHeight,"top-height":s.topHeight,"border-thickness":s.borderThickness,"enable-back-hole":s.enableBackHole,"back-hole-x-offset":s.backHoleXOffset,"back-hole-width":s.backHoleWidth,"back-hole-height":s.backHoleHeight,"enable-front-hole":s.enableFrontHole,"front-hole-x-offset":s.frontHoleXOffset,"front-hole-width":s.frontHoleWidth,"front-hole-height":s.frontHoleHeight,"enable-right-hole":s.enableRightHole,"right-hole-x-offset":s.rightHoleXOffset,"right-hole-width":s.rightHoleWidth,"right-hole-height":s.rightHoleHeight,"enable-left-hole":s.enableLeftHole,"left-hole-x-offset":s.leftHoleXOffset,"left-hole-width":s.leftHoleWidth,"left-hole-height":s.leftHoleHeight},null,8,["width","depth","safety","bottom-height","top-height","border-thickness","enable-back-hole","back-hole-x-offset","back-hole-width","back-hole-height","enable-front-hole","front-hole-x-offset","front-hole-width","front-hole-height","enable-right-hole","right-hole-x-offset","right-hole-width","right-hole-height","enable-left-hole","left-hole-x-offset","left-hole-width","left-hole-height"]),bt(l,{"initial-bottom-height":s.bottomHeight,"initial-top-height":s.topHeight,"initial-border-thickness":s.borderThickness,onUpdateAdvanced:r.updateAdvanced},null,8,["initial-bottom-height","initial-top-height","initial-border-thickness","onUpdateAdvanced"]),bt(c,{"initial-enable-back-hole":s.enableBackHole,"initial-back-hole-x-offset":s.backHoleXOffset,"initial-back-hole-width":s.backHoleWidth,"initial-back-hole-height":s.backHoleHeight,"initial-enable-front-hole":s.enableFrontHole,"initial-front-hole-x-offset":s.frontHoleXOffset,"initial-front-hole-width":s.frontHoleWidth,"initial-front-hole-height":s.frontHoleHeight,"initial-enable-right-hole":s.enableRightHole,"initial-right-hole-x-offset":s.rightHoleXOffset,"initial-right-hole-width":s.rightHoleWidth,"initial-right-hole-height":s.rightHoleHeight,"initial-enable-left-hole":s.enableLeftHole,"initial-left-hole-x-offset":s.leftHoleXOffset,"initial-left-hole-width":s.leftHoleWidth,"initial-left-hole-height":s.leftHoleHeight,onUpdateHoleOptions:r.updateHoleOptions},null,8,["initial-enable-back-hole","initial-back-hole-x-offset","initial-back-hole-width","initial-back-hole-height","initial-enable-front-hole","initial-front-hole-x-offset","initial-front-hole-width","initial-front-hole-height","initial-enable-right-hole","initial-right-hole-x-offset","initial-right-hole-width","initial-right-hole-height","initial-enable-left-hole","initial-left-hole-x-offset","initial-left-hole-width","initial-left-hole-height","onUpdateHoleOptions"]),le("button",{onClick:e[0]||(e[0]=(...u)=>r.downloadModel&&r.downloadModel(...u)),class:"mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 block mx-auto"}," Download file ")]),bt(f)])}const g4=mr(h4,[["render",m4]]);g1(g4).mount("#app");
