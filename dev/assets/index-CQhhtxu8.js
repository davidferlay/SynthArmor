(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const at={},Ys=[],Kn=()=>{},N_=()=>!1,Ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tf=t=>t.startsWith("onUpdate:"),Nt=Object.assign,Af=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},F_=Object.prototype.hasOwnProperty,et=(t,e)=>F_.call(t,e),Ie=Array.isArray,Zs=t=>ho(t)==="[object Map]",Ba=t=>ho(t)==="[object Set]",mu=t=>ho(t)==="[object Date]",He=t=>typeof t=="function",_t=t=>typeof t=="string",Jn=t=>typeof t=="symbol",lt=t=>t!==null&&typeof t=="object",wm=t=>(lt(t)||He(t))&&He(t.then)&&He(t.catch),Tm=Object.prototype.toString,ho=t=>Tm.call(t),O_=t=>ho(t).slice(8,-1),Am=t=>ho(t)==="[object Object]",Rf=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xr=wf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),za=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},H_=/-(\w)/g,Tn=za(t=>t.replace(H_,(e,n)=>n?n.toUpperCase():"")),B_=/\B([A-Z])/g,zi=za(t=>t.replace(B_,"-$1").toLowerCase()),Va=za(t=>t.charAt(0).toUpperCase()+t.slice(1)),El=za(t=>t?`on${Va(t)}`:""),hs=(t,e)=>!Object.is(t,e),va=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Rm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},z_=t=>{const e=_t(t)?Number(t):NaN;return isNaN(e)?t:e};let gu;const ka=()=>gu||(gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cf(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=_t(i)?$_(i):Cf(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(_t(t)||lt(t))return t}const V_=/;(?![^(]*\))/g,k_=/:([^]+)/,G_=/\/\*[^]*?\*\//g;function $_(t){const e={};return t.replace(G_,"").split(V_).forEach(n=>{if(n){const i=n.split(k_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ga(t){let e="";if(_t(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=Ga(t[n]);i&&(e+=i+" ")}else if(lt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const W_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X_=wf(W_);function Cm(t){return!!t||t===""}function q_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=$a(t[i],e[i]);return n}function $a(t,e){if(t===e)return!0;let n=mu(t),i=mu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Jn(t),i=Jn(e),n||i)return t===e;if(n=Ie(t),i=Ie(e),n||i)return n&&i?q_(t,e):!1;if(n=lt(t),i=lt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!$a(t[o],e[o]))return!1}}return String(t)===String(e)}function Pm(t,e){return t.findIndex(n=>$a(n,e))}const Lm=t=>!!(t&&t.__v_isRef===!0),Dm=t=>_t(t)?t:t==null?"":Ie(t)||lt(t)&&(t.toString===Tm||!He(t.toString))?Lm(t)?Dm(t.value):JSON.stringify(t,Um,2):String(t),Um=(t,e)=>Lm(e)?Um(t,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Sl(i,r)+" =>"]=s,n),{})}:Ba(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sl(n))}:Jn(e)?Sl(e):lt(e)&&!Ie(e)&&!Am(e)?String(e):e,Sl=(t,e="")=>{var n;return Jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pn;class j_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=pn;try{return pn=this,e()}finally{pn=n}}}on(){pn=this}off(){pn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Y_(){return pn}let ct;const bl=new WeakSet;class Im{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pn&&pn.active&&pn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bl.has(this)&&(bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_u(this),Om(this);const e=ct,n=Hn;ct=this,Hn=!0;try{return this.fn()}finally{Hm(this),ct=e,Hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Df(e);this.deps=this.depsTail=void 0,_u(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let Nm=0,qr,jr;function Fm(t,e=!1){if(t.flags|=8,e){t.next=jr,jr=t;return}t.next=qr,qr=t}function Pf(){Nm++}function Lf(){if(--Nm>0)return;if(jr){let e=jr;for(jr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qr;){let e=qr;for(qr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Om(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Df(i),Z_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===eo))return;t.globalVersion=eo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!qc(t)){t.flags&=-3;return}const n=ct,i=Hn;ct=t,Hn=!0;try{Om(t);const s=t.fn(t._value);(e.version===0||hs(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ct=n,Hn=i,Hm(t),t.flags&=-3}}function Df(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Df(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Z_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Hn=!0;const zm=[];function Vi(){zm.push(Hn),Hn=!1}function ki(){const t=zm.pop();Hn=t===void 0?!0:t}function _u(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ct;ct=void 0;try{e()}finally{ct=n}}}let eo=0;class K_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vm{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ct||!Hn||ct===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ct)n=this.activeLink=new K_(ct,this),ct.deps?(n.prevDep=ct.depsTail,ct.depsTail.nextDep=n,ct.depsTail=n):ct.deps=ct.depsTail=n,km(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ct.depsTail,n.nextDep=void 0,ct.depsTail.nextDep=n,ct.depsTail=n,ct.deps===n&&(ct.deps=i)}return n}trigger(e){this.version++,eo++,this.notify(e)}notify(e){Pf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Lf()}}}function km(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)km(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const jc=new WeakMap,ds=Symbol(""),Yc=Symbol(""),to=Symbol("");function zt(t,e,n){if(Hn&&ct){let i=jc.get(t);i||jc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Vm),s.map=i,s.key=n),s.track()}}function mi(t,e,n,i,s,r){const o=jc.get(t);if(!o){eo++;return}const a=l=>{l&&l.trigger()};if(Pf(),e==="clear")o.forEach(a);else{const l=Ie(t),c=l&&Rf(n);if(l&&n==="length"){const f=Number(i);o.forEach((u,h)=>{(h==="length"||h===to||!Jn(h)&&h>=f)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(to)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),Zs(t)&&a(o.get(Yc)));break;case"delete":l||(a(o.get(ds)),Zs(t)&&a(o.get(Yc)));break;case"set":Zs(t)&&a(o.get(ds));break}}Lf()}function Es(t){const e=nt(t);return e===t?e:(zt(e,"iterate",to),Bn(t)?e:e.map(Qt))}function Wa(t){return zt(t=nt(t),"iterate",to),t}const J_={__proto__:null,[Symbol.iterator](){return wl(this,Symbol.iterator,Qt)},concat(...t){return Es(this).concat(...t.map(e=>Ie(e)?Es(e):e))},entries(){return wl(this,"entries",t=>(t[1]=Qt(t[1]),t))},every(t,e){return ei(this,"every",t,e,void 0,arguments)},filter(t,e){return ei(this,"filter",t,e,n=>n.map(Qt),arguments)},find(t,e){return ei(this,"find",t,e,Qt,arguments)},findIndex(t,e){return ei(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ei(this,"findLast",t,e,Qt,arguments)},findLastIndex(t,e){return ei(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ei(this,"forEach",t,e,void 0,arguments)},includes(...t){return Tl(this,"includes",t)},indexOf(...t){return Tl(this,"indexOf",t)},join(t){return Es(this).join(t)},lastIndexOf(...t){return Tl(this,"lastIndexOf",t)},map(t,e){return ei(this,"map",t,e,void 0,arguments)},pop(){return Sr(this,"pop")},push(...t){return Sr(this,"push",t)},reduce(t,...e){return vu(this,"reduce",t,e)},reduceRight(t,...e){return vu(this,"reduceRight",t,e)},shift(){return Sr(this,"shift")},some(t,e){return ei(this,"some",t,e,void 0,arguments)},splice(...t){return Sr(this,"splice",t)},toReversed(){return Es(this).toReversed()},toSorted(t){return Es(this).toSorted(t)},toSpliced(...t){return Es(this).toSpliced(...t)},unshift(...t){return Sr(this,"unshift",t)},values(){return wl(this,"values",Qt)}};function wl(t,e,n){const i=Wa(t),s=i[e]();return i!==t&&!Bn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const Q_=Array.prototype;function ei(t,e,n,i,s,r){const o=Wa(t),a=o!==t&&!Bn(t),l=o[e];if(l!==Q_[e]){const u=l.apply(t,r);return a?Qt(u):u}let c=n;o!==t&&(a?c=function(u,h){return n.call(this,Qt(u),h,t)}:n.length>2&&(c=function(u,h){return n.call(this,u,h,t)}));const f=l.call(o,c,i);return a&&s?s(f):f}function vu(t,e,n,i){const s=Wa(t);let r=n;return s!==t&&(Bn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Qt(a),l,t)}),s[e](r,...i)}function Tl(t,e,n){const i=nt(t);zt(i,"iterate",to);const s=i[e](...n);return(s===-1||s===!1)&&Ff(n[0])?(n[0]=nt(n[0]),i[e](...n)):s}function Sr(t,e,n=[]){Vi(),Pf();const i=nt(t)[e].apply(t,n);return Lf(),ki(),i}const ev=wf("__proto__,__v_isRef,__isVue"),Gm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jn));function tv(t){Jn(t)||(t=String(t));const e=nt(this);return zt(e,"has",t),e.hasOwnProperty(t)}class $m{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?uv:jm:r?qm:Xm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!s){let l;if(o&&(l=J_[n]))return l;if(n==="hasOwnProperty")return tv}const a=Reflect.get(e,n,Kt(e)?e:i);return(Jn(n)?Gm.has(n):ev(n))||(s||zt(e,"get",n),r)?a:Kt(a)?o&&Rf(n)?a:a.value:lt(a)?s?Ym(a):If(a):a}}class Wm extends $m{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=or(r);if(!Bn(i)&&!or(i)&&(r=nt(r),i=nt(i)),!Ie(e)&&Kt(r)&&!Kt(i))return l?!1:(r.value=i,!0)}const o=Ie(e)&&Rf(n)?Number(n)<e.length:et(e,n),a=Reflect.set(e,n,i,Kt(e)?e:s);return e===nt(s)&&(o?hs(i,r)&&mi(e,"set",n,i):mi(e,"add",n,i)),a}deleteProperty(e,n){const i=et(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&mi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Jn(n)||!Gm.has(n))&&zt(e,"has",n),i}ownKeys(e){return zt(e,"iterate",Ie(e)?"length":ds),Reflect.ownKeys(e)}}class nv extends $m{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const iv=new Wm,sv=new nv,rv=new Wm(!0);const Zc=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function ov(t,e,n){return function(...i){const s=this.__v_raw,r=nt(s),o=Zs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),f=n?Zc:e?Kc:Qt;return!e&&zt(r,"iterate",l?Yc:ds),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function So(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function av(t,e){const n={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);t||(hs(s,a)&&zt(o,"get",s),zt(o,"get",a));const{has:l}=Eo(o),c=e?Zc:t?Kc:Qt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&zt(nt(s),"iterate",ds),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return t||(hs(s,a)&&zt(o,"has",s),zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=nt(a),c=e?Zc:t?Kc:Qt;return!t&&zt(l,"iterate",ds),a.forEach((f,u)=>s.call(r,c(f),c(u),o))}};return Nt(n,t?{add:So("add"),set:So("set"),delete:So("delete"),clear:So("clear")}:{add(s){!e&&!Bn(s)&&!or(s)&&(s=nt(s));const r=nt(this);return Eo(r).has.call(r,s)||(r.add(s),mi(r,"add",s,s)),this},set(s,r){!e&&!Bn(r)&&!or(r)&&(r=nt(r));const o=nt(this),{has:a,get:l}=Eo(o);let c=a.call(o,s);c||(s=nt(s),c=a.call(o,s));const f=l.call(o,s);return o.set(s,r),c?hs(r,f)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=Eo(r);let l=o.call(r,s);l||(s=nt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ov(s,t,e)}),n}function Uf(t,e){const n=av(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(et(n,s)&&s in i?n:i,s,r)}const lv={get:Uf(!1,!1)},cv={get:Uf(!1,!0)},fv={get:Uf(!0,!1)};const Xm=new WeakMap,qm=new WeakMap,jm=new WeakMap,uv=new WeakMap;function hv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dv(t){return t.__v_skip||!Object.isExtensible(t)?0:hv(O_(t))}function If(t){return or(t)?t:Nf(t,!1,iv,lv,Xm)}function pv(t){return Nf(t,!1,rv,cv,qm)}function Ym(t){return Nf(t,!0,sv,fv,jm)}function Nf(t,e,n,i,s){if(!lt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=dv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ks(t){return or(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function Bn(t){return!!(t&&t.__v_isShallow)}function Ff(t){return t?!!t.__v_raw:!1}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function mv(t){return!et(t,"__v_skip")&&Object.isExtensible(t)&&Rm(t,"__v_skip",!0),t}const Qt=t=>lt(t)?If(t):t,Kc=t=>lt(t)?Ym(t):t;function Kt(t){return t?t.__v_isRef===!0:!1}function gv(t){return Kt(t)?t.value:t}const _v={get:(t,e,n)=>e==="__v_raw"?t:gv(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Kt(s)&&!Kt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Zm(t){return Ks(t)?t:new Proxy(t,_v)}class vv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vm(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return Fm(this,!0),!0}get value(){const e=this.dep.track();return Bm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xv(t,e,n=!1){let i,s;return He(t)?i=t:(i=t.get,s=t.set),new vv(i,s,n)}const bo={},wa=new WeakMap;let ns;function yv(t,e=!1,n=ns){if(n){let i=wa.get(n);i||wa.set(n,i=[]),i.push(t)}}function Mv(t,e,n=at){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>s?x:Bn(x)||s===!1||s===0?gi(x,1):gi(x);let f,u,h,d,_=!1,g=!1;if(Kt(t)?(u=()=>t.value,_=Bn(t)):Ks(t)?(u=()=>c(t),_=!0):Ie(t)?(g=!0,_=t.some(x=>Ks(x)||Bn(x)),u=()=>t.map(x=>{if(Kt(x))return x.value;if(Ks(x))return c(x);if(He(x))return l?l(x,2):x()})):He(t)?e?u=l?()=>l(t,2):t:u=()=>{if(h){Vi();try{h()}finally{ki()}}const x=ns;ns=f;try{return l?l(t,3,[d]):t(d)}finally{ns=x}}:u=Kn,e&&s){const x=u,M=s===!0?1/0:s;u=()=>gi(x(),M)}const m=Y_(),p=()=>{f.stop(),m&&m.active&&Af(m.effects,f)};if(r&&e){const x=e;e=(...M)=>{x(...M),p()}}let S=g?new Array(t.length).fill(bo):bo;const y=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(e){const M=f.run();if(s||_||(g?M.some((E,T)=>hs(E,S[T])):hs(M,S))){h&&h();const E=ns;ns=f;try{const T=[M,S===bo?void 0:g&&S[0]===bo?[]:S,d];l?l(e,3,T):e(...T),S=M}finally{ns=E}}}else f.run()};return a&&a(y),f=new Im(u),f.scheduler=o?()=>o(y,!1):y,d=x=>yv(x,!1,f),h=f.onStop=()=>{const x=wa.get(f);if(x){if(l)l(x,4);else for(const M of x)M();wa.delete(f)}},e?i?y(!0):S=f.run():o?o(y.bind(null,!0),!0):f.run(),p.pause=f.pause.bind(f),p.resume=f.resume.bind(f),p.stop=p,p}function gi(t,e=1/0,n){if(e<=0||!lt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Kt(t))gi(t.value,e,n);else if(Ie(t))for(let i=0;i<t.length;i++)gi(t[i],e,n);else if(Ba(t)||Zs(t))t.forEach(i=>{gi(i,e,n)});else if(Am(t)){for(const i in t)gi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&gi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function po(t,e,n,i){try{return i?t(...i):t()}catch(s){Xa(s,e,n)}}function zn(t,e,n,i){if(He(t)){const s=po(t,e,n,i);return s&&wm(s)&&s.catch(r=>{Xa(r,e,n)}),s}if(Ie(t)){const s=[];for(let r=0;r<t.length;r++)s.push(zn(t[r],e,n,i));return s}}function Xa(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,l,c)===!1)return}a=a.parent}if(r){Vi(),po(r,null,10,[t,l,c]),ki();return}}Ev(t,n,s,i,o)}function Ev(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Yt=[];let qn=-1;const Js=[];let Ui=null,Ws=0;const Km=Promise.resolve();let Ta=null;function Sv(t){const e=Ta||Km;return t?e.then(this?t.bind(this):t):e}function bv(t){let e=qn+1,n=Yt.length;for(;e<n;){const i=e+n>>>1,s=Yt[i],r=no(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Of(t){if(!(t.flags&1)){const e=no(t),n=Yt[Yt.length-1];!n||!(t.flags&2)&&e>=no(n)?Yt.push(t):Yt.splice(bv(e),0,t),t.flags|=1,Jm()}}function Jm(){Ta||(Ta=Km.then(eg))}function wv(t){Ie(t)?Js.push(...t):Ui&&t.id===-1?Ui.splice(Ws+1,0,t):t.flags&1||(Js.push(t),t.flags|=1),Jm()}function xu(t,e,n=qn+1){for(;n<Yt.length;n++){const i=Yt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Yt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qm(t){if(Js.length){const e=[...new Set(Js)].sort((n,i)=>no(n)-no(i));if(Js.length=0,Ui){Ui.push(...e);return}for(Ui=e,Ws=0;Ws<Ui.length;Ws++){const n=Ui[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ui=null,Ws=0}}const no=t=>t.id==null?t.flags&2?-1:1/0:t.id;function eg(t){try{for(qn=0;qn<Yt.length;qn++){const e=Yt[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<Yt.length;qn++){const e=Yt[qn];e&&(e.flags&=-2)}qn=-1,Yt.length=0,Qm(),Ta=null,(Yt.length||Js.length)&&eg()}}let sn=null,tg=null;function Aa(t){const e=sn;return sn=t,tg=t&&t.type.__scopeId||null,e}function ng(t,e=sn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Pu(-1);const r=Aa(e);let o;try{o=t(...s)}finally{Aa(r),i._d&&Pu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ge(t,e){if(sn===null)return t;const n=Ka(sn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=at]=e[s];r&&(He(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function qi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Vi(),zn(l,n,8,[t.el,a,t,e]),ki())}}const Tv=Symbol("_vte"),ig=t=>t.__isTeleport,Ii=Symbol("_leaveCb"),wo=Symbol("_enterCb");function Av(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ug(()=>{t.isMounted=!0}),hg(()=>{t.isUnmounting=!0}),t}const yn=[Function,Array],sg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},rg=t=>{const e=t.subTree;return e.component?rg(e.component):e},Rv={name:"BaseTransition",props:sg,setup(t,{slots:e}){const n=Rx(),i=Av();return()=>{const s=e.default&&lg(e.default(),!0);if(!s||!s.length)return;const r=og(s),o=nt(t),{mode:a}=o;if(i.isLeaving)return Al(r);const l=yu(r);if(!l)return Al(r);let c=Jc(l,o,i,n,u=>c=u);l.type!==en&&io(l,c);let f=n.subTree&&yu(n.subTree);if(f&&f.type!==en&&!rs(l,f)&&rg(n).type!==en){let u=Jc(f,o,i,n);if(io(f,u),a==="out-in"&&l.type!==en)return i.isLeaving=!0,u.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete u.afterLeave,f=void 0},Al(r);a==="in-out"&&l.type!==en?u.delayLeave=(h,d,_)=>{const g=ag(i,f);g[String(f.key)]=f,h[Ii]=()=>{d(),h[Ii]=void 0,delete c.delayedLeave,f=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return r}}};function og(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==en){e=n;break}}return e}const Cv=Rv;function ag(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Jc(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:S,onAppearCancelled:y}=e,x=String(t.key),M=ag(n,t),E=(v,w)=>{v&&zn(v,i,9,w)},T=(v,w)=>{const N=w[1];E(v,w),Ie(v)?v.every(U=>U.length<=1)&&N():v.length<=1&&N()},L={mode:o,persisted:a,beforeEnter(v){let w=l;if(!n.isMounted)if(r)w=m||l;else return;v[Ii]&&v[Ii](!0);const N=M[x];N&&rs(t,N)&&N.el[Ii]&&N.el[Ii](),E(w,[v])},enter(v){let w=c,N=f,U=u;if(!n.isMounted)if(r)w=p||c,N=S||f,U=y||u;else return;let I=!1;const F=v[wo]=H=>{I||(I=!0,H?E(U,[v]):E(N,[v]),L.delayedLeave&&L.delayedLeave(),v[wo]=void 0)};w?T(w,[v,F]):F()},leave(v,w){const N=String(t.key);if(v[wo]&&v[wo](!0),n.isUnmounting)return w();E(h,[v]);let U=!1;const I=v[Ii]=F=>{U||(U=!0,w(),F?E(g,[v]):E(_,[v]),v[Ii]=void 0,M[N]===t&&delete M[N])};M[N]=t,d?T(d,[v,I]):I()},clone(v){const w=Jc(v,e,n,i,s);return s&&s(w),w}};return L}function Al(t){if(qa(t))return t=Hi(t),t.children=null,t}function yu(t){if(!qa(t))return ig(t.type)&&t.children?og(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&He(n.default))return n.default()}}function io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lg(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Nn?(o.patchFlag&128&&s++,i=i.concat(lg(o.children,e,a))):(e||o.type!==en)&&i.push(a!=null?Hi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function cg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ra(t,e,n,i,s=!1){if(Ie(t)){t.forEach((_,g)=>Ra(_,e&&(Ie(e)?e[g]:e),n,i,s));return}if(Yr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ra(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ka(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,f=a.refs===at?a.refs={}:a.refs,u=a.setupState,h=nt(u),d=u===at?()=>!1:_=>et(h,_);if(c!=null&&c!==l&&(_t(c)?(f[c]=null,d(c)&&(u[c]=null)):Kt(c)&&(c.value=null)),He(l))po(l,a,12,[o,f]);else{const _=_t(l),g=Kt(l);if(_||g){const m=()=>{if(t.f){const p=_?d(l)?u[l]:f[l]:l.value;s?Ie(p)&&Af(p,r):Ie(p)?p.includes(r)||p.push(r):_?(f[l]=[r],d(l)&&(u[l]=f[l])):(l.value=[r],t.k&&(f[t.k]=l.value))}else _?(f[l]=o,d(l)&&(u[l]=o)):g&&(l.value=o,t.k&&(f[t.k]=o))};o?(m.id=-1,dn(m,n)):m()}}}ka().requestIdleCallback;ka().cancelIdleCallback;const Yr=t=>!!t.type.__asyncLoader,qa=t=>t.type.__isKeepAlive;function Pv(t,e){fg(t,"a",e)}function Lv(t,e){fg(t,"da",e)}function fg(t,e,n=It){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ja(e,i,n),n){let s=n.parent;for(;s&&s.parent;)qa(s.parent.vnode)&&Dv(i,e,n,s),s=s.parent}}function Dv(t,e,n,i){const s=ja(e,t,i,!0);dg(()=>{Af(i[e],s)},n)}function ja(t,e,n=It,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vi();const a=mo(n),l=zn(e,n,t,o);return a(),ki(),l});return i?s.unshift(r):s.push(r),r}}const yi=t=>(e,n=It)=>{(!ro||t==="sp")&&ja(t,(...i)=>e(...i),n)},Uv=yi("bm"),ug=yi("m"),Iv=yi("bu"),Nv=yi("u"),hg=yi("bum"),dg=yi("um"),Fv=yi("sp"),Ov=yi("rtg"),Hv=yi("rtc");function Bv(t,e=It){ja("ec",t,e)}const zv="components";function br(t,e){return kv(zv,t,!0,e)||t}const Vv=Symbol.for("v-ndc");function kv(t,e,n=!0,i=!1){const s=sn||It;if(s){const r=s.type;{const a=Ux(r,!1);if(a&&(a===e||a===Tn(e)||a===Va(Tn(e))))return r}const o=Mu(s[t]||r[t],e)||Mu(s.appContext[t],e);return!o&&i?r:o}}function Mu(t,e){return t&&(t[e]||t[Tn(e)]||t[Va(Tn(e))])}function Gv(t,e,n,i){let s;const r=n,o=Ie(t);if(o||_t(t)){const a=o&&Ks(t);let l=!1;a&&(l=!Bn(t),t=Wa(t)),s=new Array(t.length);for(let c=0,f=t.length;c<f;c++)s[c]=e(l?Qt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(lt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const f=a[l];s[l]=e(t[f],f,l,r)}}else s=[];return s}const Qc=t=>t?Ig(t)?Ka(t):Qc(t.parent):null,Zr=Nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mg(t),$forceUpdate:t=>t.f||(t.f=()=>{Of(t.update)}),$nextTick:t=>t.n||(t.n=Sv.bind(t.proxy)),$watch:t=>ux.bind(t)}),Rl=(t,e)=>t!==at&&!t.__isScriptSetup&&et(t,e),$v={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Rl(i,e))return o[e]=1,i[e];if(s!==at&&et(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&et(c,e))return o[e]=3,r[e];if(n!==at&&et(n,e))return o[e]=4,n[e];ef&&(o[e]=0)}}const f=Zr[e];let u,h;if(f)return e==="$attrs"&&zt(t.attrs,"get",""),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==at&&et(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,et(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Rl(s,e)?(s[e]=n,!0):i!==at&&et(i,e)?(i[e]=n,!0):et(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==at&&et(t,o)||Rl(e,o)||(a=r[0])&&et(a,o)||et(i,o)||et(Zr,o)||et(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:et(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eu(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ef=!0;function Wv(t){const e=mg(t),n=t.proxy,i=t.ctx;ef=!1,e.beforeCreate&&Su(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:y,unmounted:x,render:M,renderTracked:E,renderTriggered:T,errorCaptured:L,serverPrefetch:v,expose:w,inheritAttrs:N,components:U,directives:I,filters:F}=e;if(c&&Xv(c,i,null),o)for(const G in o){const W=o[G];He(W)&&(i[G]=W.bind(n))}if(s){const G=s.call(n,n);lt(G)&&(t.data=If(G))}if(ef=!0,r)for(const G in r){const W=r[G],ae=He(W)?W.bind(n,n):He(W.get)?W.get.bind(n,n):Kn,te=!He(W)&&He(W.set)?W.set.bind(n):Kn,be=Nx({get:ae,set:te});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>be.value,set:ce=>be.value=ce})}if(a)for(const G in a)pg(a[G],i,n,G);if(l){const G=He(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{Jv(W,G[W])})}f&&Su(f,t,"c");function z(G,W){Ie(W)?W.forEach(ae=>G(ae.bind(n))):W&&G(W.bind(n))}if(z(Uv,u),z(ug,h),z(Iv,d),z(Nv,_),z(Pv,g),z(Lv,m),z(Bv,L),z(Hv,E),z(Ov,T),z(hg,S),z(dg,x),z(Fv,v),Ie(w))if(w.length){const G=t.exposed||(t.exposed={});w.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:ae=>n[W]=ae})})}else t.exposed||(t.exposed={});M&&t.render===Kn&&(t.render=M),N!=null&&(t.inheritAttrs=N),U&&(t.components=U),I&&(t.directives=I),v&&cg(t)}function Xv(t,e,n=Kn){Ie(t)&&(t=tf(t));for(const i in t){const s=t[i];let r;lt(s)?"default"in s?r=xa(s.from||i,s.default,!0):r=xa(s.from||i):r=xa(s),Kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Su(t,e,n){zn(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function pg(t,e,n,i){let s=i.includes(".")?Cg(n,i):()=>n[i];if(_t(t)){const r=e[t];He(r)&&Pl(s,r)}else if(He(t))Pl(s,t.bind(n));else if(lt(t))if(Ie(t))t.forEach(r=>pg(r,e,n,i));else{const r=He(t.handler)?t.handler.bind(n):e[t.handler];He(r)&&Pl(s,r,t)}}function mg(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ca(l,c,o,!0)),Ca(l,e,o)),lt(e)&&r.set(e,l),l}function Ca(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ca(t,r,n,!0),s&&s.forEach(o=>Ca(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=qv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qv={data:bu,props:wu,emits:wu,methods:Br,computed:Br,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Br,directives:Br,watch:Yv,provide:bu,inject:jv};function bu(t,e){return e?t?function(){return Nt(He(t)?t.call(this,this):t,He(e)?e.call(this,this):e)}:e:t}function jv(t,e){return Br(tf(t),tf(e))}function tf(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Br(t,e){return t?Nt(Object.create(null),t,e):e}function wu(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:Nt(Object.create(null),Eu(t),Eu(e??{})):e}function Yv(t,e){if(!t)return e;if(!e)return t;const n=Nt(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function gg(){return{app:null,config:{isNativeTag:N_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zv=0;function Kv(t,e){return function(i,s=null){He(i)||(i=Nt({},i)),s!=null&&!lt(s)&&(s=null);const r=gg(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Zv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ox,get config(){return r.config},set config(f){},use(f,...u){return o.has(f)||(f&&He(f.install)?(o.add(f),f.install(c,...u)):He(f)&&(o.add(f),f(c,...u))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,u){return u?(r.components[f]=u,c):r.components[f]},directive(f,u){return u?(r.directives[f]=u,c):r.directives[f]},mount(f,u,h){if(!l){const d=c._ceVNode||bt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(d,f,h),l=!0,c._container=f,f.__vue_app__=c,Ka(d.component)}},onUnmount(f){a.push(f)},unmount(){l&&(zn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(f,u){return r.provides[f]=u,c},runWithContext(f){const u=Qs;Qs=c;try{return f()}finally{Qs=u}}};return c}}let Qs=null;function Jv(t,e){if(It){let n=It.provides;const i=It.parent&&It.parent.provides;i===n&&(n=It.provides=Object.create(i)),n[t]=e}}function xa(t,e,n=!1){const i=It||sn;if(i||Qs){const s=Qs?Qs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&He(e)?e.call(i&&i.proxy):e}}const _g={},vg=()=>Object.create(_g),xg=t=>Object.getPrototypeOf(t)===_g;function Qv(t,e,n,i=!1){const s={},r=vg();t.propsDefaults=Object.create(null),yg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:pv(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function ex(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=nt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Ya(t.emitsOptions,h))continue;const d=e[h];if(l)if(et(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const _=Tn(h);s[_]=nf(l,a,_,d,t,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{yg(t,e,s,r)&&(c=!0);let f;for(const u in a)(!e||!et(e,u)&&((f=zi(u))===u||!et(e,f)))&&(l?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=nf(l,a,u,void 0,t,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!et(e,u))&&(delete r[u],c=!0)}c&&mi(t.attrs,"set","")}function yg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xr(l))continue;const c=e[l];let f;s&&et(s,f=Tn(l))?!r||!r.includes(f)?n[f]=c:(a||(a={}))[f]=c:Ya(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=nt(n),c=a||at;for(let f=0;f<r.length;f++){const u=r[f];n[u]=nf(s,l,u,c[u],t,!et(c,u))}}return o}function nf(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const f=mo(s);i=c[n]=l.call(null,e),f()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===zi(n))&&(i=!0))}return i}const tx=new WeakMap;function Mg(t,e,n=!1){const i=n?tx:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!He(t)){const f=u=>{l=!0;const[h,d]=Mg(u,e,!0);Nt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!l)return lt(t)&&i.set(t,Ys),Ys;if(Ie(r))for(let f=0;f<r.length;f++){const u=Tn(r[f]);Tu(u)&&(o[u]=at)}else if(r)for(const f in r){const u=Tn(f);if(Tu(u)){const h=r[f],d=o[u]=Ie(h)||He(h)?{type:h}:Nt({},h),_=d.type;let g=!1,m=!0;if(Ie(_))for(let p=0;p<_.length;++p){const S=_[p],y=He(S)&&S.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(m=!1)}else g=He(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||et(d,"default"))&&a.push(u)}}const c=[o,a];return lt(t)&&i.set(t,c),c}function Tu(t){return t[0]!=="$"&&!Xr(t)}const Eg=t=>t[0]==="_"||t==="$stable",Hf=t=>Ie(t)?t.map(jn):[jn(t)],nx=(t,e,n)=>{if(e._n)return e;const i=ng((...s)=>Hf(e(...s)),n);return i._c=!1,i},Sg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Eg(s))continue;const r=t[s];if(He(r))e[s]=nx(s,r,i);else if(r!=null){const o=Hf(r);e[s]=()=>o}}},bg=(t,e)=>{const n=Hf(e);t.slots.default=()=>n},wg=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},ix=(t,e,n)=>{const i=t.slots=vg();if(t.vnode.shapeFlag&32){const s=e._;s?(wg(i,e,n),n&&Rm(i,"_",s,!0)):Sg(e,i)}else e&&bg(t,e)},sx=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=at;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:wg(s,e,n):(r=!e.$stable,Sg(e,s)),o=e}else e&&(bg(t,e),o={default:1});if(r)for(const a in s)!Eg(a)&&o[a]==null&&delete s[a]},dn=vx;function rx(t){return ox(t)}function ox(t,e){const n=ka();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=Kn,insertStaticContent:_}=t,g=(P,D,V,se=null,ee=null,ie=null,me=void 0,oe=null,fe=!!D.dynamicChildren)=>{if(P===D)return;P&&!rs(P,D)&&(se=A(P),ce(P,ee,ie,!0),P=null),D.patchFlag===-2&&(fe=!1,D.dynamicChildren=null);const{type:le,ref:R,shapeFlag:b}=D;switch(le){case Za:m(P,D,V,se);break;case en:p(P,D,V,se);break;case Ll:P==null&&S(D,V,se,me);break;case Nn:U(P,D,V,se,ee,ie,me,oe,fe);break;default:b&1?M(P,D,V,se,ee,ie,me,oe,fe):b&6?I(P,D,V,se,ee,ie,me,oe,fe):(b&64||b&128)&&le.process(P,D,V,se,ee,ie,me,oe,fe,de)}R!=null&&ee&&Ra(R,P&&P.ref,ie,D||P,!D)},m=(P,D,V,se)=>{if(P==null)i(D.el=a(D.children),V,se);else{const ee=D.el=P.el;D.children!==P.children&&c(ee,D.children)}},p=(P,D,V,se)=>{P==null?i(D.el=l(D.children||""),V,se):D.el=P.el},S=(P,D,V,se)=>{[P.el,P.anchor]=_(P.children,D,V,se,P.el,P.anchor)},y=({el:P,anchor:D},V,se)=>{let ee;for(;P&&P!==D;)ee=h(P),i(P,V,se),P=ee;i(D,V,se)},x=({el:P,anchor:D})=>{let V;for(;P&&P!==D;)V=h(P),s(P),P=V;s(D)},M=(P,D,V,se,ee,ie,me,oe,fe)=>{D.type==="svg"?me="svg":D.type==="math"&&(me="mathml"),P==null?E(D,V,se,ee,ie,me,oe,fe):v(P,D,ee,ie,me,oe,fe)},E=(P,D,V,se,ee,ie,me,oe)=>{let fe,le;const{props:R,shapeFlag:b,transition:B,dirs:q}=P;if(fe=P.el=o(P.type,ie,R&&R.is,R),b&8?f(fe,P.children):b&16&&L(P.children,fe,null,se,ee,Cl(P,ie),me,oe),q&&qi(P,null,se,"created"),T(fe,P,P.scopeId,me,se),R){for(const he in R)he!=="value"&&!Xr(he)&&r(fe,he,null,R[he],ie,se);"value"in R&&r(fe,"value",null,R.value,ie),(le=R.onVnodeBeforeMount)&&Gn(le,se,P)}q&&qi(P,null,se,"beforeMount");const K=ax(ee,B);K&&B.beforeEnter(fe),i(fe,D,V),((le=R&&R.onVnodeMounted)||K||q)&&dn(()=>{le&&Gn(le,se,P),K&&B.enter(fe),q&&qi(P,null,se,"mounted")},ee)},T=(P,D,V,se,ee)=>{if(V&&d(P,V),se)for(let ie=0;ie<se.length;ie++)d(P,se[ie]);if(ee){let ie=ee.subTree;if(D===ie||Lg(ie.type)&&(ie.ssContent===D||ie.ssFallback===D)){const me=ee.vnode;T(P,me,me.scopeId,me.slotScopeIds,ee.parent)}}},L=(P,D,V,se,ee,ie,me,oe,fe=0)=>{for(let le=fe;le<P.length;le++){const R=P[le]=oe?Ni(P[le]):jn(P[le]);g(null,R,D,V,se,ee,ie,me,oe)}},v=(P,D,V,se,ee,ie,me)=>{const oe=D.el=P.el;let{patchFlag:fe,dynamicChildren:le,dirs:R}=D;fe|=P.patchFlag&16;const b=P.props||at,B=D.props||at;let q;if(V&&ji(V,!1),(q=B.onVnodeBeforeUpdate)&&Gn(q,V,D,P),R&&qi(D,P,V,"beforeUpdate"),V&&ji(V,!0),(b.innerHTML&&B.innerHTML==null||b.textContent&&B.textContent==null)&&f(oe,""),le?w(P.dynamicChildren,le,oe,V,se,Cl(D,ee),ie):me||W(P,D,oe,null,V,se,Cl(D,ee),ie,!1),fe>0){if(fe&16)N(oe,b,B,V,ee);else if(fe&2&&b.class!==B.class&&r(oe,"class",null,B.class,ee),fe&4&&r(oe,"style",b.style,B.style,ee),fe&8){const K=D.dynamicProps;for(let he=0;he<K.length;he++){const ye=K[he],Me=b[ye],Y=B[ye];(Y!==Me||ye==="value")&&r(oe,ye,Me,Y,ee,V)}}fe&1&&P.children!==D.children&&f(oe,D.children)}else!me&&le==null&&N(oe,b,B,V,ee);((q=B.onVnodeUpdated)||R)&&dn(()=>{q&&Gn(q,V,D,P),R&&qi(D,P,V,"updated")},se)},w=(P,D,V,se,ee,ie,me)=>{for(let oe=0;oe<D.length;oe++){const fe=P[oe],le=D[oe],R=fe.el&&(fe.type===Nn||!rs(fe,le)||fe.shapeFlag&70)?u(fe.el):V;g(fe,le,R,null,se,ee,ie,me,!0)}},N=(P,D,V,se,ee)=>{if(D!==V){if(D!==at)for(const ie in D)!Xr(ie)&&!(ie in V)&&r(P,ie,D[ie],null,ee,se);for(const ie in V){if(Xr(ie))continue;const me=V[ie],oe=D[ie];me!==oe&&ie!=="value"&&r(P,ie,oe,me,ee,se)}"value"in V&&r(P,"value",D.value,V.value,ee)}},U=(P,D,V,se,ee,ie,me,oe,fe)=>{const le=D.el=P?P.el:a(""),R=D.anchor=P?P.anchor:a("");let{patchFlag:b,dynamicChildren:B,slotScopeIds:q}=D;q&&(oe=oe?oe.concat(q):q),P==null?(i(le,V,se),i(R,V,se),L(D.children||[],V,R,ee,ie,me,oe,fe)):b>0&&b&64&&B&&P.dynamicChildren?(w(P.dynamicChildren,B,V,ee,ie,me,oe),(D.key!=null||ee&&D===ee.subTree)&&Tg(P,D,!0)):W(P,D,V,R,ee,ie,me,oe,fe)},I=(P,D,V,se,ee,ie,me,oe,fe)=>{D.slotScopeIds=oe,P==null?D.shapeFlag&512?ee.ctx.activate(D,V,se,me,fe):F(D,V,se,ee,ie,me,fe):H(P,D,fe)},F=(P,D,V,se,ee,ie,me)=>{const oe=P.component=Ax(P,se,ee);if(qa(P)&&(oe.ctx.renderer=de),Cx(oe,!1,me),oe.asyncDep){if(ee&&ee.registerDep(oe,z,me),!P.el){const fe=oe.subTree=bt(en);p(null,fe,D,V)}}else z(oe,P,D,V,ee,ie,me)},H=(P,D,V)=>{const se=D.component=P.component;if(gx(P,D,V))if(se.asyncDep&&!se.asyncResolved){G(se,D,V);return}else se.next=D,se.update();else D.el=P.el,se.vnode=D},z=(P,D,V,se,ee,ie,me)=>{const oe=()=>{if(P.isMounted){let{next:b,bu:B,u:q,parent:K,vnode:he}=P;{const Re=Ag(P);if(Re){b&&(b.el=he.el,G(P,b,me)),Re.asyncDep.then(()=>{P.isUnmounted||oe()});return}}let ye=b,Me;ji(P,!1),b?(b.el=he.el,G(P,b,me)):b=he,B&&va(B),(Me=b.props&&b.props.onVnodeBeforeUpdate)&&Gn(Me,K,b,he),ji(P,!0);const Y=Ru(P),Te=P.subTree;P.subTree=Y,g(Te,Y,u(Te.el),A(Te),P,ee,ie),b.el=Y.el,ye===null&&_x(P,Y.el),q&&dn(q,ee),(Me=b.props&&b.props.onVnodeUpdated)&&dn(()=>Gn(Me,K,b,he),ee)}else{let b;const{el:B,props:q}=D,{bm:K,m:he,parent:ye,root:Me,type:Y}=P,Te=Yr(D);ji(P,!1),K&&va(K),!Te&&(b=q&&q.onVnodeBeforeMount)&&Gn(b,ye,D),ji(P,!0);{Me.ce&&Me.ce._injectChildStyle(Y);const Re=P.subTree=Ru(P);g(null,Re,V,se,P,ee,ie),D.el=Re.el}if(he&&dn(he,ee),!Te&&(b=q&&q.onVnodeMounted)){const Re=D;dn(()=>Gn(b,ye,Re),ee)}(D.shapeFlag&256||ye&&Yr(ye.vnode)&&ye.vnode.shapeFlag&256)&&P.a&&dn(P.a,ee),P.isMounted=!0,D=V=se=null}};P.scope.on();const fe=P.effect=new Im(oe);P.scope.off();const le=P.update=fe.run.bind(fe),R=P.job=fe.runIfDirty.bind(fe);R.i=P,R.id=P.uid,fe.scheduler=()=>Of(R),ji(P,!0),le()},G=(P,D,V)=>{D.component=P;const se=P.vnode.props;P.vnode=D,P.next=null,ex(P,D.props,se,V),sx(P,D.children,V),Vi(),xu(P),ki()},W=(P,D,V,se,ee,ie,me,oe,fe=!1)=>{const le=P&&P.children,R=P?P.shapeFlag:0,b=D.children,{patchFlag:B,shapeFlag:q}=D;if(B>0){if(B&128){te(le,b,V,se,ee,ie,me,oe,fe);return}else if(B&256){ae(le,b,V,se,ee,ie,me,oe,fe);return}}q&8?(R&16&&_e(le,ee,ie),b!==le&&f(V,b)):R&16?q&16?te(le,b,V,se,ee,ie,me,oe,fe):_e(le,ee,ie,!0):(R&8&&f(V,""),q&16&&L(b,V,se,ee,ie,me,oe,fe))},ae=(P,D,V,se,ee,ie,me,oe,fe)=>{P=P||Ys,D=D||Ys;const le=P.length,R=D.length,b=Math.min(le,R);let B;for(B=0;B<b;B++){const q=D[B]=fe?Ni(D[B]):jn(D[B]);g(P[B],q,V,null,ee,ie,me,oe,fe)}le>R?_e(P,ee,ie,!0,!1,b):L(D,V,se,ee,ie,me,oe,fe,b)},te=(P,D,V,se,ee,ie,me,oe,fe)=>{let le=0;const R=D.length;let b=P.length-1,B=R-1;for(;le<=b&&le<=B;){const q=P[le],K=D[le]=fe?Ni(D[le]):jn(D[le]);if(rs(q,K))g(q,K,V,null,ee,ie,me,oe,fe);else break;le++}for(;le<=b&&le<=B;){const q=P[b],K=D[B]=fe?Ni(D[B]):jn(D[B]);if(rs(q,K))g(q,K,V,null,ee,ie,me,oe,fe);else break;b--,B--}if(le>b){if(le<=B){const q=B+1,K=q<R?D[q].el:se;for(;le<=B;)g(null,D[le]=fe?Ni(D[le]):jn(D[le]),V,K,ee,ie,me,oe,fe),le++}}else if(le>B)for(;le<=b;)ce(P[le],ee,ie,!0),le++;else{const q=le,K=le,he=new Map;for(le=K;le<=B;le++){const Ee=D[le]=fe?Ni(D[le]):jn(D[le]);Ee.key!=null&&he.set(Ee.key,le)}let ye,Me=0;const Y=B-K+1;let Te=!1,Re=0;const De=new Array(Y);for(le=0;le<Y;le++)De[le]=0;for(le=q;le<=b;le++){const Ee=P[le];if(Me>=Y){ce(Ee,ee,ie,!0);continue}let Fe;if(Ee.key!=null)Fe=he.get(Ee.key);else for(ye=K;ye<=B;ye++)if(De[ye-K]===0&&rs(Ee,D[ye])){Fe=ye;break}Fe===void 0?ce(Ee,ee,ie,!0):(De[Fe-K]=le+1,Fe>=Re?Re=Fe:Te=!0,g(Ee,D[Fe],V,null,ee,ie,me,oe,fe),Me++)}const Ae=Te?lx(De):Ys;for(ye=Ae.length-1,le=Y-1;le>=0;le--){const Ee=K+le,Fe=D[Ee],Qe=Ee+1<R?D[Ee+1].el:se;De[le]===0?g(null,Fe,V,Qe,ee,ie,me,oe,fe):Te&&(ye<0||le!==Ae[ye]?be(Fe,V,Qe,2):ye--)}}},be=(P,D,V,se,ee=null)=>{const{el:ie,type:me,transition:oe,children:fe,shapeFlag:le}=P;if(le&6){be(P.component.subTree,D,V,se);return}if(le&128){P.suspense.move(D,V,se);return}if(le&64){me.move(P,D,V,de);return}if(me===Nn){i(ie,D,V);for(let b=0;b<fe.length;b++)be(fe[b],D,V,se);i(P.anchor,D,V);return}if(me===Ll){y(P,D,V);return}if(se!==2&&le&1&&oe)if(se===0)oe.beforeEnter(ie),i(ie,D,V),dn(()=>oe.enter(ie),ee);else{const{leave:b,delayLeave:B,afterLeave:q}=oe,K=()=>i(ie,D,V),he=()=>{b(ie,()=>{K(),q&&q()})};B?B(ie,K,he):he()}else i(ie,D,V)},ce=(P,D,V,se=!1,ee=!1)=>{const{type:ie,props:me,ref:oe,children:fe,dynamicChildren:le,shapeFlag:R,patchFlag:b,dirs:B,cacheIndex:q}=P;if(b===-2&&(ee=!1),oe!=null&&Ra(oe,null,V,P,!0),q!=null&&(D.renderCache[q]=void 0),R&256){D.ctx.deactivate(P);return}const K=R&1&&B,he=!Yr(P);let ye;if(he&&(ye=me&&me.onVnodeBeforeUnmount)&&Gn(ye,D,P),R&6)ge(P.component,V,se);else{if(R&128){P.suspense.unmount(V,se);return}K&&qi(P,null,D,"beforeUnmount"),R&64?P.type.remove(P,D,V,de,se):le&&!le.hasOnce&&(ie!==Nn||b>0&&b&64)?_e(le,D,V,!1,!0):(ie===Nn&&b&384||!ee&&R&16)&&_e(fe,D,V),se&&Z(P)}(he&&(ye=me&&me.onVnodeUnmounted)||K)&&dn(()=>{ye&&Gn(ye,D,P),K&&qi(P,null,D,"unmounted")},V)},Z=P=>{const{type:D,el:V,anchor:se,transition:ee}=P;if(D===Nn){re(V,se);return}if(D===Ll){x(P);return}const ie=()=>{s(V),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(P.shapeFlag&1&&ee&&!ee.persisted){const{leave:me,delayLeave:oe}=ee,fe=()=>me(V,ie);oe?oe(P.el,ie,fe):fe()}else ie()},re=(P,D)=>{let V;for(;P!==D;)V=h(P),s(P),P=V;s(D)},ge=(P,D,V)=>{const{bum:se,scope:ee,job:ie,subTree:me,um:oe,m:fe,a:le}=P;Au(fe),Au(le),se&&va(se),ee.stop(),ie&&(ie.flags|=8,ce(me,P,D,V)),oe&&dn(oe,D),dn(()=>{P.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},_e=(P,D,V,se=!1,ee=!1,ie=0)=>{for(let me=ie;me<P.length;me++)ce(P[me],D,V,se,ee)},A=P=>{if(P.shapeFlag&6)return A(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=h(P.anchor||P.el),V=D&&D[Tv];return V?h(V):D};let ue=!1;const Se=(P,D,V)=>{P==null?D._vnode&&ce(D._vnode,null,null,!0):g(D._vnode||null,P,D,null,null,null,V),D._vnode=P,ue||(ue=!0,xu(),Qm(),ue=!1)},de={p:g,um:ce,m:be,r:Z,mt:F,mc:L,pc:W,pbc:w,n:A,o:t};return{render:Se,hydrate:void 0,createApp:Kv(Se)}}function Cl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ji({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ax(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tg(t,e,n=!1){const i=t.children,s=e.children;if(Ie(i)&&Ie(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ni(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Tg(o,a)),a.type===Za&&(a.el=o.el)}}function lx(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ag(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ag(e)}function Au(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const cx=Symbol.for("v-scx"),fx=()=>xa(cx);function Pl(t,e,n){return Rg(t,e,n)}function Rg(t,e,n=at){const{immediate:i,deep:s,flush:r,once:o}=n,a=Nt({},n),l=e&&i||!e&&r!=="post";let c;if(ro){if(r==="sync"){const d=fx();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Kn,d.resume=Kn,d.pause=Kn,d}}const f=It;a.call=(d,_,g)=>zn(d,f,_,g);let u=!1;r==="post"?a.scheduler=d=>{dn(d,f&&f.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,_)=>{_?d():Of(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,f&&(d.id=f.uid,d.i=f))};const h=Mv(t,e,a);return ro&&(c?c.push(h):l&&h()),h}function ux(t,e,n){const i=this.proxy,s=_t(t)?t.includes(".")?Cg(i,t):()=>i[t]:t.bind(i,i);let r;He(e)?r=e:(r=e.handler,n=e);const o=mo(this),a=Rg(s,r.bind(i),n);return o(),a}function Cg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const hx=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tn(e)}Modifiers`]||t[`${zi(e)}Modifiers`];function dx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||at;let s=n;const r=e.startsWith("update:"),o=r&&hx(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>_t(f)?f.trim():f)),o.number&&(s=n.map(Xc)));let a,l=i[a=El(e)]||i[a=El(Tn(e))];!l&&r&&(l=i[a=El(zi(e))]),l&&zn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zn(c,t,6,s)}}function Pg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!He(t)){const l=c=>{const f=Pg(c,e,!0);f&&(a=!0,Nt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(lt(t)&&i.set(t,null),null):(Ie(r)?r.forEach(l=>o[l]=null):Nt(o,r),lt(t)&&i.set(t,o),o)}function Ya(t,e){return!t||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(t,e[0].toLowerCase()+e.slice(1))||et(t,zi(e))||et(t,e))}function Ru(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:f,props:u,data:h,setupState:d,ctx:_,inheritAttrs:g}=t,m=Aa(t);let p,S;try{if(n.shapeFlag&4){const x=s||i,M=x;p=jn(c.call(M,x,f,u,d,h,_)),S=a}else{const x=e;p=jn(x.length>1?x(u,{attrs:a,slots:o,emit:l}):x(u,null)),S=e.props?a:px(a)}}catch(x){Kr.length=0,Xa(x,t,1),p=bt(en)}let y=p;if(S&&g!==!1){const x=Object.keys(S),{shapeFlag:M}=y;x.length&&M&7&&(r&&x.some(Tf)&&(S=mx(S,r)),y=Hi(y,S,!1,!0))}return n.dirs&&(y=Hi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&io(y,n.transition),p=y,Aa(m),p}const px=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ha(n))&&((e||(e={}))[n]=t[n]);return e},mx=(t,e)=>{const n={};for(const i in t)(!Tf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function gx(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Cu(i,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==i[h]&&!Ya(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Cu(i,o,c):!0:!!o;return!1}function Cu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Ya(n,r))return!0}return!1}function _x({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lg=t=>t.__isSuspense;function vx(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):wv(t)}const Nn=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Ll=Symbol.for("v-stc"),Kr=[];let gn=null;function tn(t=!1){Kr.push(gn=t?null:[])}function xx(){Kr.pop(),gn=Kr[Kr.length-1]||null}let so=1;function Pu(t,e=!1){so+=t,t<0&&gn&&e&&(gn.hasOnce=!0)}function Dg(t){return t.dynamicChildren=so>0?gn||Ys:null,xx(),so>0&&gn&&gn.push(t),t}function mn(t,e,n,i,s,r){return Dg(j(t,e,n,i,s,r,!0))}function yx(t,e,n,i,s){return Dg(bt(t,e,n,i,s,!0))}function Pa(t){return t?t.__v_isVNode===!0:!1}function rs(t,e){return t.type===e.type&&t.key===e.key}const Ug=({key:t})=>t??null,ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||Kt(t)||He(t)?{i:sn,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,i=0,s=null,r=t===Nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ug(e),ref:e&&ya(e),scopeId:tg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return a?(Bf(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),so>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const bt=Mx;function Mx(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Vv)&&(t=en),Pa(t)){const a=Hi(t,e,!0);return n&&Bf(a,n),so>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(t)]=a:gn.push(a)),a.patchFlag=-2,a}if(Ix(t)&&(t=t.__vccOpts),e){e=Ex(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=Ga(a)),lt(l)&&(Ff(l)&&!Ie(l)&&(l=Nt({},l)),e.style=Cf(l))}const o=_t(t)?1:Lg(t)?128:ig(t)?64:lt(t)?4:He(t)?2:0;return j(t,e,n,i,s,o,r,!0)}function Ex(t){return t?Ff(t)||xg(t)?Nt({},t):t:null}function Hi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?bx(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ug(c),ref:e&&e.ref?n&&r?Ie(r)?r.concat(ya(e)):[r,ya(e)]:ya(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hi(t.ssContent),ssFallback:t.ssFallback&&Hi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&io(f,l.clone(f)),f}function Sx(t=" ",e=0){return bt(Za,null,t,e)}function To(t="",e=!1){return e?(tn(),yx(en,null,t)):bt(en,null,t)}function jn(t){return t==null||typeof t=="boolean"?bt(en):Ie(t)?bt(Nn,null,t.slice()):Pa(t)?Ni(t):bt(Za,null,String(t))}function Ni(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hi(t)}function Bf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Bf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xg(e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:sn},n=32):(e=String(e),i&64?(n=16,e=[Sx(e)]):n=8);t.children=e,t.shapeFlag|=n}function bx(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ga([e.class,i.class]));else if(s==="style")e.style=Cf([e.style,i.style]);else if(Ha(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ie(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Gn(t,e,n,i=null){zn(t,e,7,[n,i])}const wx=gg();let Tx=0;function Ax(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||wx,r={uid:Tx++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mg(i,s),emitsOptions:Pg(i,s),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=dx.bind(null,r),t.ce&&t.ce(r),r}let It=null;const Rx=()=>It||sn;let La,sf;{const t=ka(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};La=e("__VUE_INSTANCE_SETTERS__",n=>It=n),sf=e("__VUE_SSR_SETTERS__",n=>ro=n)}const mo=t=>{const e=It;return La(t),t.scope.on(),()=>{t.scope.off(),La(e)}},Lu=()=>{It&&It.scope.off(),La(null)};function Ig(t){return t.vnode.shapeFlag&4}let ro=!1;function Cx(t,e=!1,n=!1){e&&sf(e);const{props:i,children:s}=t.vnode,r=Ig(t);Qv(t,i,r,e),ix(t,s,n);const o=r?Px(t,e):void 0;return e&&sf(!1),o}function Px(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$v);const{setup:i}=n;if(i){Vi();const s=t.setupContext=i.length>1?Dx(t):null,r=mo(t),o=po(i,t,0,[t.props,s]),a=wm(o);if(ki(),r(),(a||t.sp)&&!Yr(t)&&cg(t),a){if(o.then(Lu,Lu),e)return o.then(l=>{Du(t,l)}).catch(l=>{Xa(l,t,0)});t.asyncDep=o}else Du(t,o)}else Ng(t)}function Du(t,e,n){He(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:lt(e)&&(t.setupState=Zm(e)),Ng(t)}function Ng(t,e,n){const i=t.type;t.render||(t.render=i.render||Kn);{const s=mo(t);Vi();try{Wv(t)}finally{ki(),s()}}}const Lx={get(t,e){return zt(t,"get",""),t[e]}};function Dx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Lx),slots:t.slots,emit:t.emit,expose:e}}function Ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zm(mv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zr)return Zr[n](t)},has(e,n){return n in e||n in Zr}})):t.proxy}function Ux(t,e=!0){return He(t)?t.displayName||t.name:t.name||e&&t.__name}function Ix(t){return He(t)&&"__vccOpts"in t}const Nx=(t,e)=>xv(t,e,ro);function Fx(t,e,n){const i=arguments.length;return i===2?lt(e)&&!Ie(e)?Pa(e)?bt(t,null,[e]):bt(t,e):bt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Pa(n)&&(n=[n]),bt(t,e,n))}const Ox="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rf;const Uu=typeof window<"u"&&window.trustedTypes;if(Uu)try{rf=Uu.createPolicy("vue",{createHTML:t=>t})}catch{}const Fg=rf?t=>rf.createHTML(t):t=>t,Hx="http://www.w3.org/2000/svg",Bx="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,Iu=pi&&pi.createElement("template"),zx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?pi.createElementNS(Hx,t):e==="mathml"?pi.createElementNS(Bx,t):n?pi.createElement(t,{is:n}):pi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>pi.createTextNode(t),createComment:t=>pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Iu.innerHTML=Fg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Iu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ei="transition",wr="animation",oo=Symbol("_vtc"),Og={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vx=Nt({},sg,Og),kx=t=>(t.displayName="Transition",t.props=Vx,t),Gx=kx((t,{slots:e})=>Fx(Cv,$x(t),e)),Yi=(t,e=[])=>{Ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Nu=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function $x(t){const e={};for(const U in t)U in Og||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:f=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=Wx(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:y,onLeave:x,onLeaveCancelled:M,onBeforeAppear:E=p,onAppear:T=S,onAppearCancelled:L=y}=e,v=(U,I,F,H)=>{U._enterCancelled=H,Zi(U,I?f:a),Zi(U,I?c:o),F&&F()},w=(U,I)=>{U._isLeaving=!1,Zi(U,u),Zi(U,d),Zi(U,h),I&&I()},N=U=>(I,F)=>{const H=U?T:S,z=()=>v(I,U,F);Yi(H,[I,z]),Fu(()=>{Zi(I,U?l:r),ti(I,U?f:a),Nu(H)||Ou(I,i,g,z)})};return Nt(e,{onBeforeEnter(U){Yi(p,[U]),ti(U,r),ti(U,o)},onBeforeAppear(U){Yi(E,[U]),ti(U,l),ti(U,c)},onEnter:N(!1),onAppear:N(!0),onLeave(U,I){U._isLeaving=!0;const F=()=>w(U,I);ti(U,u),U._enterCancelled?(ti(U,h),zu()):(zu(),ti(U,h)),Fu(()=>{U._isLeaving&&(Zi(U,u),ti(U,d),Nu(x)||Ou(U,i,m,F))}),Yi(x,[U,F])},onEnterCancelled(U){v(U,!1,void 0,!0),Yi(y,[U])},onAppearCancelled(U){v(U,!0,void 0,!0),Yi(L,[U])},onLeaveCancelled(U){w(U),Yi(M,[U])}})}function Wx(t){if(t==null)return null;if(lt(t))return[Dl(t.enter),Dl(t.leave)];{const e=Dl(t);return[e,e]}}function Dl(t){return z_(t)}function ti(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[oo]||(t[oo]=new Set)).add(e)}function Zi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[oo];n&&(n.delete(e),n.size||(t[oo]=void 0))}function Fu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Xx=0;function Ou(t,e,n,i){const s=t._endId=++Xx,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=qx(t,e);if(!o)return i();const c=o+"end";let f=0;const u=()=>{t.removeEventListener(c,h),r()},h=d=>{d.target===t&&++f>=l&&u()};setTimeout(()=>{f<l&&u()},a+1),t.addEventListener(c,h)}function qx(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${Ei}Delay`),r=i(`${Ei}Duration`),o=Hu(s,r),a=i(`${wr}Delay`),l=i(`${wr}Duration`),c=Hu(a,l);let f=null,u=0,h=0;e===Ei?o>0&&(f=Ei,u=o,h=r.length):e===wr?c>0&&(f=wr,u=c,h=l.length):(u=Math.max(o,c),f=u>0?o>c?Ei:wr:null,h=f?f===Ei?r.length:l.length:0);const d=f===Ei&&/\b(transform|all)(,|$)/.test(i(`${Ei}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:d}}function Hu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Bu(n)+Bu(t[i])))}function Bu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zu(){return document.body.offsetHeight}function jx(t,e,n){const i=t[oo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Da=Symbol("_vod"),Hg=Symbol("_vsh"),Yx={beforeMount(t,{value:e},{transition:n}){t[Da]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Tr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Tr(t,!0),i.enter(t)):i.leave(t,()=>{Tr(t,!1)}):Tr(t,e))},beforeUnmount(t,{value:e}){Tr(t,e)}};function Tr(t,e){t.style.display=e?t[Da]:"none",t[Hg]=!e}const Zx=Symbol(""),Kx=/(^|;)\s*display\s*:/;function Jx(t,e,n){const i=t.style,s=_t(n);let r=!1;if(n&&!s){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ma(i,a,"")}else for(const o in e)n[o]==null&&Ma(i,o,"");for(const o in n)o==="display"&&(r=!0),Ma(i,o,n[o])}else if(s){if(e!==n){const o=i[Zx];o&&(n+=";"+o),i.cssText=n,r=Kx.test(n)}}else e&&t.removeAttribute("style");Da in t&&(t[Da]=r?i.display:"",t[Hg]&&(i.display="none"))}const Vu=/\s*!important$/;function Ma(t,e,n){if(Ie(n))n.forEach(i=>Ma(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Qx(t,e);Vu.test(n)?t.setProperty(zi(i),n.replace(Vu,""),"important"):t[i]=n}}const ku=["Webkit","Moz","ms"],Ul={};function Qx(t,e){const n=Ul[e];if(n)return n;let i=Tn(e);if(i!=="filter"&&i in t)return Ul[e]=i;i=Va(i);for(let s=0;s<ku.length;s++){const r=ku[s]+i;if(r in t)return Ul[e]=r}return e}const Gu="http://www.w3.org/1999/xlink";function $u(t,e,n,i,s,r=X_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gu,e.slice(6,e.length)):t.setAttributeNS(Gu,e,n):n==null||r&&!Cm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Jn(n)?String(n):n)}function Wu(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Cm(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function os(t,e,n,i){t.addEventListener(e,n,i)}function e1(t,e,n,i){t.removeEventListener(e,n,i)}const Xu=Symbol("_vei");function t1(t,e,n,i,s=null){const r=t[Xu]||(t[Xu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=n1(e);if(i){const c=r[e]=r1(i,s);os(t,a,c,l)}else o&&(e1(t,a,o,l),r[e]=void 0)}}const qu=/(?:Once|Passive|Capture)$/;function n1(t){let e;if(qu.test(t)){e={};let i;for(;i=t.match(qu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zi(t.slice(2)),e]}let Il=0;const i1=Promise.resolve(),s1=()=>Il||(i1.then(()=>Il=0),Il=Date.now());function r1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;zn(o1(i,n.value),e,5,[i])};return n.value=t,n.attached=s1(),n}function o1(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ju=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,a1=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?jx(t,i,o):e==="style"?Jx(t,n,i):Ha(e)?Tf(e)||t1(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):l1(t,e,i,o))?(Wu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$u(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_t(i))?Wu(t,Tn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),$u(t,e,i,o))};function l1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ju(e)&&He(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ju(e)&&_t(n)?!1:e in t}const Ua=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ie(e)?n=>va(e,n):e};function c1(t){t.target.composing=!0}function Yu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const er=Symbol("_assign"),Je={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[er]=Ua(s);const r=i||s.props&&s.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Xc(a)),t[er](a)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",c1),os(t,"compositionend",Yu),os(t,"change",Yu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[er]=Ua(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Xc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Ao={deep:!0,created(t,e,n){t[er]=Ua(n),os(t,"change",()=>{const i=t._modelValue,s=f1(t),r=t.checked,o=t[er];if(Ie(i)){const a=Pm(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ba(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Bg(t,r))})},mounted:Zu,beforeUpdate(t,e,n){t[er]=Ua(n),Zu(t,e,n)}};function Zu(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ie(e))s=Pm(e,i.props.value)>-1;else if(Ba(e))s=e.has(i.props.value);else{if(e===n)return;s=$a(e,Bg(t,!0))}t.checked!==s&&(t.checked=s)}function f1(t){return"_value"in t?t._value:t.value}function Bg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const u1=["ctrl","shift","alt","meta"],h1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>u1.some(n=>t[`${n}Key`]&&!e.includes(n))},zg=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=h1[e[o]];if(a&&a(s,e))return}return t(s,...r)})},d1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tr=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=zi(s.key);if(e.some(o=>o===r||d1[o]===r))return t(s)})},p1=Nt({patchProp:a1},zx);let Ku;function m1(){return Ku||(Ku=rx(p1))}const g1=(...t)=>{const e=m1().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=v1(i);if(!s)return;const r=e._component;!He(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function v1(t){return _t(t)?document.querySelector(t):t}const pr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},x1={name:"BasicForm",props:{initialWidth:{type:Number,default:155},initialDepth:{type:Number,default:105},initialSafety:{type:Number,default:0}},data(){return{localWidth:this.initialWidth,localDepth:this.initialDepth,localSafety:this.initialSafety}},methods:{emitValues(){this.$emit("update-dimensions",{width:this.localWidth,depth:this.localDepth,safety:this.localSafety})}}},y1={class:"mb-6 p-4 border border-gray-300 rounded"},M1={class:"flex-1 mb-4"},E1={class:"flex items-center space-x-2 mt-1"},S1={class:"flex-1 mb-4"},b1={class:"flex items-center space-x-2 mt-1"},w1={class:"flex-1 mb-4"},T1={class:"mt-1 flex items-center space-x-1"};function A1(t,e,n,i,s,r){return tn(),mn("fieldset",y1,[e[23]||(e[23]=j("legend",{class:"px-2 text-lg font-semibold"},"Dimensions",-1)),j("form",{onSubmit:e[16]||(e[16]=zg(()=>{},["prevent"])),class:"flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end",style:{width:"100%","max-width":"600px",margin:"0 auto","box-sizing":"border-box"}},[j("div",M1,[e[18]||(e[18]=j("label",{class:"block text-sm font-medium text-gray-700"},"Width:",-1)),j("div",E1,[Ge(j("input",{type:"range","onUpdate:modelValue":e[0]||(e[0]=o=>s.localWidth=o),onInput:e[1]||(e[1]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",class:"flex-1"},null,544),[[Je,s.localWidth,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=o=>s.localWidth=o),onBlur:e[3]||(e[3]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[4]||(e[4]=tr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[5]||(e[5]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",placeholder:"155",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[Je,s.localWidth,void 0,{number:!0}]]),e[17]||(e[17]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])]),j("div",S1,[e[20]||(e[20]=j("label",{class:"block text-sm font-medium text-gray-700"},"Depth:",-1)),j("div",b1,[Ge(j("input",{type:"range","onUpdate:modelValue":e[6]||(e[6]=o=>s.localDepth=o),onInput:e[7]||(e[7]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",class:"flex-1"},null,544),[[Je,s.localDepth,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=o=>s.localDepth=o),onBlur:e[9]||(e[9]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[10]||(e[10]=tr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[11]||(e[11]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"300",step:"1",placeholder:"105",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[Je,s.localDepth,void 0,{number:!0}]]),e[19]||(e[19]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])]),j("div",w1,[e[22]||(e[22]=j("label",{class:"block text-sm font-medium text-gray-700"},"Safety Offset:",-1)),j("div",T1,[Ge(j("input",{"onUpdate:modelValue":e[12]||(e[12]=o=>s.localSafety=o),onBlur:e[13]||(e[13]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[14]||(e[14]=tr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[15]||(e[15]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",min:"-2",max:"2",step:"0.1",placeholder:"0",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[Je,s.localSafety,void 0,{number:!0}]]),e[21]||(e[21]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])])],32)])}const R1=pr(x1,[["render",A1]]),C1={name:"AdvancedForm",props:{initialBottomHeight:{type:Number,default:15},initialTopHeight:{type:Number,default:25},initialBorderThickness:{type:Number,default:2.5}},data(){return{localBottomHeight:this.initialBottomHeight,localTopHeight:this.initialTopHeight,localBorderThickness:this.initialBorderThickness}},methods:{emitValues(){this.$emit("update-advanced",{bottomHeight:this.localBottomHeight,topHeight:this.localTopHeight,borderThickness:this.localBorderThickness})}}},P1={class:"mb-6 p-4 border border-gray-300 rounded"},L1={class:"flex-1 mb-4"},D1={class:"flex items-center space-x-2 mt-1"},U1={class:"flex-1 mb-4"},I1={class:"flex items-center space-x-2 mt-1"},N1={class:"flex-1 mb-4"},F1={class:"mt-1 flex items-center space-x-1"};function O1(t,e,n,i,s,r){return tn(),mn("fieldset",P1,[e[23]||(e[23]=j("legend",{class:"px-2 text-lg font-semibold"},"Advanced Settings",-1)),j("form",{onSubmit:e[16]||(e[16]=zg(()=>{},["prevent"])),class:"flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end mt-4",style:{width:"100%","max-width":"600px",margin:"0 auto","box-sizing":"border-box"}},[j("div",L1,[e[18]||(e[18]=j("label",{class:"block text-sm font-medium text-gray-700"},"Bottom Height:",-1)),j("div",D1,[Ge(j("input",{type:"range","onUpdate:modelValue":e[0]||(e[0]=o=>s.localBottomHeight=o),onInput:e[1]||(e[1]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",class:"flex-1"},null,544),[[Je,s.localBottomHeight,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=o=>s.localBottomHeight=o),onBlur:e[3]||(e[3]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[4]||(e[4]=tr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[5]||(e[5]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",placeholder:"15",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[Je,s.localBottomHeight,void 0,{number:!0}]]),e[17]||(e[17]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])]),j("div",U1,[e[20]||(e[20]=j("label",{class:"block text-sm font-medium text-gray-700"},"Top Height:",-1)),j("div",I1,[Ge(j("input",{type:"range","onUpdate:modelValue":e[6]||(e[6]=o=>s.localTopHeight=o),onInput:e[7]||(e[7]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",class:"flex-1"},null,544),[[Je,s.localTopHeight,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=o=>s.localTopHeight=o),onBlur:e[9]||(e[9]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[10]||(e[10]=tr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[11]||(e[11]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"0",max:"100",step:"1",placeholder:"25",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[Je,s.localTopHeight,void 0,{number:!0}]]),e[19]||(e[19]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])]),j("div",N1,[e[22]||(e[22]=j("label",{class:"block text-sm font-medium text-gray-700"},"Border Thickness:",-1)),j("div",F1,[Ge(j("input",{"onUpdate:modelValue":e[12]||(e[12]=o=>s.localBorderThickness=o),onBlur:e[13]||(e[13]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[14]||(e[14]=tr((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[15]||(e[15]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",min:"0",step:"0.1",placeholder:"2.5",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[Je,s.localBorderThickness,void 0,{number:!0}]]),e[21]||(e[21]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])])],32)])}const H1=pr(C1,[["render",O1]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="152",Nl={ROTATE:0,DOLLY:1,PAN:2},B1=0,Ju=1,z1=2,Vg=1,V1=2,di=3,Bi=0,rn=1,_i=2,Oi=0,nr=1,Qu=2,eh=3,th=4,k1=5,Xs=100,G1=101,$1=102,nh=103,ih=104,W1=200,X1=201,q1=202,j1=203,kg=204,Gg=205,Y1=206,Z1=207,K1=208,J1=209,Q1=210,ey=0,ty=1,ny=2,of=3,iy=4,sy=5,ry=6,oy=7,$g=0,ay=1,ly=2,xi=0,cy=1,fy=2,uy=3,hy=4,dy=5,Wg=300,ar=301,lr=302,af=303,lf=304,Ja=306,cf=1e3,Fn=1001,ff=1002,jt=1003,sh=1004,Fl=1005,En=1006,py=1007,ao=1008,_s=1009,my=1010,gy=1011,Xg=1012,_y=1013,fs=1014,us=1015,lo=1016,vy=1017,xy=1018,ir=1020,yy=1021,On=1023,My=1024,Ey=1025,ps=1026,cr=1027,Sy=1028,by=1029,wy=1030,Ty=1031,Ay=1033,Ol=33776,Hl=33777,Bl=33778,zl=33779,rh=35840,oh=35841,ah=35842,lh=35843,Ry=36196,ch=37492,fh=37496,uh=37808,hh=37809,dh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,yh=37817,Mh=37818,Eh=37819,Sh=37820,bh=37821,Vl=36492,Cy=36283,wh=36284,Th=36285,Ah=36286,qg=3e3,ms=3001,Py=3200,Ly=3201,jg=0,Dy=1,gs="",ze="srgb",Qn="srgb-linear",Yg="display-p3",kl=7680,Uy=519,Rh=35044,Ch="300 es",uf=1035;class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const sr=Math.PI/180,co=180/Math.PI;function mr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function Vf(t,e){return(t%e+e)%e}function Iy(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Ny(t,e,n){return t!==e?(n-t)/(e-t):0}function Jr(t,e,n){return(1-n)*t+n*e}function Fy(t,e,n,i){return Jr(t,e,1-Math.exp(-n*i))}function Oy(t,e=1){return e-Math.abs(Vf(t,e*2)-e)}function Hy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function By(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function zy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Vy(t,e){return t+Math.random()*(e-t)}function ky(t){return t*(.5-Math.random())}function Gy(t){t!==void 0&&(Ph=t);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $y(t){return t*sr}function Wy(t){return t*co}function hf(t){return(t&t-1)===0&&t!==0}function Xy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Zg(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function qy(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),f=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*f,l*u,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*u,a*c);break;case"ZXZ":t.set(l*u,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*d,a*c);break;case"YXY":t.set(l*d,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*d,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Lh={DEG2RAD:sr,RAD2DEG:co,generateUUID:mr,clamp:Zt,euclideanModulo:Vf,mapLinear:Iy,inverseLerp:Ny,lerp:Jr,damp:Fy,pingpong:Oy,smoothstep:Hy,smootherstep:By,randInt:zy,randFloat:Vy,randFloatSpread:ky,seededRandom:Gy,degToRad:$y,radToDeg:Wy,isPowerOfTwo:hf,ceilPowerOfTwo:Xy,floorPowerOfTwo:Zg,setQuaternionFromProperEuler:qy,normalize:Jt,denormalize:zr};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],M=s[2],E=s[5],T=s[8];return r[0]=o*g+a*S+l*M,r[3]=o*m+a*y+l*E,r[6]=o*p+a*x+l*T,r[1]=c*g+f*S+u*M,r[4]=c*m+f*y+u*E,r[7]=c*p+f*x+u*T,r[2]=h*g+d*S+_*M,r[5]=h*m+d*y+_*E,r[8]=h*p+d*x+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*r,d=c*r-o*l,_=n*u+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(s*c-f*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(f*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=d*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gl.makeScale(e,n)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gl.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gl=new Ze;function Kg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Dh={};function Qr(t){t in Dh||(Dh[t]=!0,console.warn(t))}function rr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $l(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const jy=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Yy=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Zy(t){return t.convertSRGBToLinear().applyMatrix3(Yy)}function Ky(t){return t.applyMatrix3(jy).convertLinearToSRGB()}const Jy={[Qn]:t=>t,[ze]:t=>t.convertSRGBToLinear(),[Yg]:Zy},Qy={[Qn]:t=>t,[ze]:t=>t.convertLinearToSRGB(),[Yg]:Ky},Pn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Qn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Jy[e],s=Qy[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ss;class Jg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Ia("canvas")),Ss.width=e.width,Ss.height=e.height;const i=Ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(rr(n[i]/255)*255):n[i]=rr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qg{constructor(e=null){this.isSource=!0,this.uuid=mr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Wl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class _n extends ys{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Fn,s=Fn,r=En,o=ao,a=On,l=_s,c=_n.DEFAULT_ANISOTROPY,f=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=mr(),this.name="",this.source=new Qg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===ms?ze:gs),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?ms:qg}set encoding(e){Qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ms?ze:gs}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Wg;_n.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(d+1)/2,M=(p+1)/2,E=(f+h)/4,T=(u+g)/4,L=(_+m)/4;return y>x&&y>M?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=T/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=L/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=T/r,s=L/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(h-f)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vs extends ys{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ms?ze:gs),this.texture=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:En,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class e0 extends _n{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tM extends _n{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(u!==g||l!==h||c!==d||f!==_){let m=1-a;const p=l*h+c*d+f*_+u*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,p*S);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const x=a*S;if(l=l*m+h*x,c=c*m+d*x,f=f*m+_*x,u=u*m+g*x,m===1-a){const M=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=M,c*=M,f*=M,u*=M}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],u=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+f*u+l*d-c*h,e[n+1]=l*_+f*h+c*u-a*d,e[n+2]=c*_+f*d+a*h-l*u,e[n+3]=f*_-a*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),u=a(r/2),h=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*f*u+c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u-h*d*_;break;case"YXZ":this._x=h*f*u+c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u+h*d*_;break;case"ZXY":this._x=h*f*u-c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u-h*d*_;break;case"ZYX":this._x=h*f*u-c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u+h*d*_;break;case"YZX":this._x=h*f*u+c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u-h*d*_;break;case"XZY":this._x=h*f*u-c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],u=n[10],h=i+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*s-a*i,f=l*i+a*n-r*s,u=l*s+r*i-o*n,h=-r*n-o*i-a*s;return this.x=c*l+h*-r+f*-a-u*-o,this.y=f*l+h*-o+u*-r-c*-a,this.z=u*l+h*-a+c*-o-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new k,Uh=new gr;class go{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)ii.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ii)}else s.boundingBox===null&&s.computeBoundingBox(),bs.copy(s.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Ro.subVectors(this.max,Ar),ws.subVectors(e.a,Ar),Ts.subVectors(e.b,Ar),As.subVectors(e.c,Ar),Si.subVectors(Ts,ws),bi.subVectors(As,Ts),Ki.subVectors(ws,As);let n=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Ki.z,Ki.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Ki.z,0,-Ki.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Ki.y,Ki.x,0];return!ql(n,ws,Ts,As,Ro)||(n=[1,0,0,0,1,0,0,0,1],!ql(n,ws,Ts,As,Ro))?!1:(Co.crossVectors(Si,bi),n=[Co.x,Co.y,Co.z],ql(n,ws,Ts,As,Ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new k,new k,new k,new k,new k,new k,new k,new k],ii=new k,bs=new go,ws=new k,Ts=new k,As=new k,Si=new k,bi=new k,Ki=new k,Ar=new k,Ro=new k,Co=new k,Ji=new k;function ql(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ji.fromArray(t,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),f=i.dot(Ji);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const nM=new go,Rr=new k,jl=new k;class Qa{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const n=Rr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(jl)),this.expandByPoint(Rr.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new k,Yl=new k,Po=new k,wi=new k,Zl=new k,Lo=new k,Kl=new k;class t0{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Yl.copy(e).add(n).multiplyScalar(.5),Po.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(Yl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Po),a=wi.dot(this.direction),l=-wi.dot(Po),c=wi.lengthSq(),f=Math.abs(1-o*o);let u,h,d,_;if(f>0)if(u=o*l-a,h=o*a-l,_=r*f,u>=0)if(h>=-_)if(h<=_){const g=1/f;u*=g,h*=g,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yl).addScaledVector(Po,h),d}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,s,r){Zl.subVectors(n,e),Lo.subVectors(i,e),Kl.crossVectors(Zl,Lo);let o=this.direction.dot(Kl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(Lo.crossVectors(wi,Lo));if(l<0)return null;const c=a*this.direction.dot(Zl.cross(wi));if(c<0||l+c>o)return null;const f=-a*wi.dot(Kl);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,l,c,f,u,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*f,d=o*u,_=a*f,g=a*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=d+_*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=_+d*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,d=l*u,_=c*f,g=c*u;n[0]=h+g*a,n[4]=_*a-d,n[8]=o*c,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=d*a-_,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,d=l*u,_=c*f,g=c*u;n[0]=h-g*a,n[4]=-o*u,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*f,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,d=o*u,_=a*f,g=a*u;n[0]=l*f,n[4]=_*c-d,n[8]=h*c+g,n[1]=l*u,n[5]=g*c+h,n[9]=d*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;n[0]=l*f,n[4]=g-h*u,n[8]=_*u+d,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=d*u+_,n[10]=h-g*u}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=h*u+g,n[5]=o*f,n[9]=d*u-_,n[2]=_*u-d,n[6]=a*f,n[10]=g*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iM,e,sM)}lookAt(e,n,i){const s=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Ti.crossVectors(i,an),Ti.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ti.crossVectors(i,an)),Ti.normalize(),Do.crossVectors(an,Ti),s[0]=Ti.x,s[4]=Do.x,s[8]=an.x,s[1]=Ti.y,s[5]=Do.y,s[9]=an.y,s[2]=Ti.z,s[6]=Do.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],y=i[7],x=i[11],M=i[15],E=s[0],T=s[4],L=s[8],v=s[12],w=s[1],N=s[5],U=s[9],I=s[13],F=s[2],H=s[6],z=s[10],G=s[14],W=s[3],ae=s[7],te=s[11],be=s[15];return r[0]=o*E+a*w+l*F+c*W,r[4]=o*T+a*N+l*H+c*ae,r[8]=o*L+a*U+l*z+c*te,r[12]=o*v+a*I+l*G+c*be,r[1]=f*E+u*w+h*F+d*W,r[5]=f*T+u*N+h*H+d*ae,r[9]=f*L+u*U+h*z+d*te,r[13]=f*v+u*I+h*G+d*be,r[2]=_*E+g*w+m*F+p*W,r[6]=_*T+g*N+m*H+p*ae,r[10]=_*L+g*U+m*z+p*te,r[14]=_*v+g*I+m*G+p*be,r[3]=S*E+y*w+x*F+M*W,r[7]=S*T+y*N+x*H+M*ae,r[11]=S*L+y*U+x*z+M*te,r[15]=S*v+y*I+x*G+M*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*a*h+i*c*h+s*a*d-i*l*d)+g*(+n*l*d-n*c*h+r*o*h-s*o*d+s*c*f-r*l*f)+m*(+n*c*u-n*a*d-r*o*u+i*o*d+r*a*f-i*c*f)+p*(-s*a*f-n*l*u+n*a*h+s*o*u-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=u*m*c-g*h*c+g*l*d-a*m*d-u*l*p+a*h*p,y=_*h*c-f*m*c-_*l*d+o*m*d+f*l*p-o*h*p,x=f*g*c-_*u*c+_*a*d-o*g*d-f*a*p+o*u*p,M=_*u*l-f*g*l-_*a*h+o*g*h+f*a*m-o*u*m,E=n*S+i*y+s*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(g*h*r-u*m*r-g*s*d+i*m*d+u*s*p-i*h*p)*T,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*p+i*l*p)*T,e[3]=(u*l*r-a*h*r-u*s*c+i*h*c+a*s*d-i*l*d)*T,e[4]=y*T,e[5]=(f*m*r-_*h*r+_*s*d-n*m*d-f*s*p+n*h*p)*T,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*p-n*l*p)*T,e[7]=(o*h*r-f*l*r+f*s*c-n*h*c-o*s*d+n*l*d)*T,e[8]=x*T,e[9]=(_*u*r-f*g*r-_*i*d+n*g*d+f*i*p-n*u*p)*T,e[10]=(o*g*r-_*a*r+_*i*c-n*g*c-o*i*p+n*a*p)*T,e[11]=(f*a*r-o*u*r-f*i*c+n*u*c+o*i*d-n*a*d)*T,e[12]=M*T,e[13]=(f*g*s-_*u*s+_*i*h-n*g*h-f*i*m+n*u*m)*T,e[14]=(_*a*s-o*g*s-_*i*l+n*g*l+o*i*m-n*a*m)*T,e[15]=(o*u*s-f*a*s+f*i*l-n*u*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,f=o+o,u=a+a,h=r*c,d=r*f,_=r*u,g=o*f,m=o*u,p=a*u,S=l*c,y=l*f,x=l*u,M=i.x,E=i.y,T=i.z;return s[0]=(1-(g+p))*M,s[1]=(d+x)*M,s[2]=(_-y)*M,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(_+y)*T,s[9]=(m-S)*T,s[10]=(1-(h+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const c=1/r,f=1/o,u=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,n.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,l=2*r/(n-e),c=2*r/(i-s),f=(n+e)/(n-e),u=(i+s)/(i-s),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,l=1/(n-e),c=1/(i-s),f=1/(o-r),u=(n+e)*l,h=(i+s)*c,d=(o+r)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rs=new k,Ln=new St,iM=new k(0,0,0),sM=new k(1,1,1),Ti=new k,Do=new k,an=new k,Ih=new St,Nh=new gr;class el{constructor(e=0,n=0,i=0,s=el.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}el.DEFAULT_ORDER="XYZ";class n0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const Fh=new k,Cs=new gr,ri=new St,Uo=new k,Cr=new k,oM=new k,aM=new gr,Oh=new k(1,0,0),Hh=new k(0,1,0),Bh=new k(0,0,1),lM={type:"added"},zh={type:"removed"};class Dt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new k,n=new el,i=new gr,s=new k(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Ze}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new n0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,n){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Uo.copy(e):Uo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Cr,Uo,this.up):ri.lookAt(Uo,Cr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ri),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(zh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,aM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new k(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new k,oi=new k,Jl=new k,ai=new k,Ps=new k,Ls=new k,Vh=new k,Ql=new k,ec=new k,tc=new k;let Io=!1;class Sn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Dn.subVectors(e,n),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Dn.subVectors(s,n),oi.subVectors(i,n),Jl.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(oi),l=Dn.dot(Jl),c=oi.dot(oi),f=oi.dot(Jl),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,d=(c*l-a*f)*h,_=(o*f-a*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,n,i,s,r,o,a,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,n,i,s,r,o,a,l)}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,ai),l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l}static isFrontFacing(e,n,i,s){return Dn.subVectors(i,n),oi.subVectors(e,n),Dn.cross(oi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),Sn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ls.subVectors(r,i),Ql.subVectors(e,i);const l=Ps.dot(Ql),c=Ls.dot(Ql);if(l<=0&&c<=0)return n.copy(i);ec.subVectors(e,s);const f=Ps.dot(ec),u=Ls.dot(ec);if(f>=0&&u<=f)return n.copy(s);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ps,o);tc.subVectors(e,r);const d=Ps.dot(tc),_=Ls.dot(tc);if(_>=0&&d<=_)return n.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ls,a);const m=f*_-d*u;if(m<=0&&u-f>=0&&d-_>=0)return Vh.subVectors(r,s),a=(u-f)/(u-f+(d-_)),n.copy(s).addScaledVector(Vh,a);const p=1/(m+g+h);return o=g*p,a=h*p,n.copy(i).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cM=0;class _r extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=nr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=kg,this.blendDst=Gg,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=of,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kl,this.stencilZFail=kl,this.stencilZPass=kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},No={h:0,s:0,l:0};function nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Pn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Pn.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Pn.workingColorSpace){if(e=Vf(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=nc(o,r,e+1/3),this.g=nc(o,r,e),this.b=nc(o,r,e-1/3)}return Pn.toWorkingColorSpace(this,s),this}setStyle(e,n=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ze){const i=i0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=$l(e.r),this.g=$l(e.g),this.b=$l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Pn.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Zt(Bt.r*255,0,255))*65536+Math.round(Zt(Bt.g*255,0,255))*256+Math.round(Zt(Bt.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pn.workingColorSpace){Pn.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Pn.workingColorSpace){return Pn.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=ze){Pn.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,s=Bt.b;return e!==ze?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Un),Un.h+=e,Un.s+=n,Un.l+=i,this.setHSL(Un.h,Un.s,Un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Un),e.getHSL(No);const i=Jr(Un.h,No.h,n),s=Jr(Un.s,No.s,n),r=Jr(Un.l,No.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new it;it.NAMES=i0;class s0 extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new k,Fo=new $e;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fo.fromBufferAttribute(this,n),Fo.applyMatrix3(e),this.setXY(n,Fo.x,Fo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class r0 extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o0 extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fM=0;const Mn=new St,ic=new Dt,Ds=new k,ln=new go,Pr=new go,Ct=new k;class Vn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?o0:r0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(ln.min,Pr.min),ln.expandByPoint(Ct),Ct.addVectors(ln.max,Pr.max),ln.expandByPoint(Ct)):(ln.expandByPoint(Pr.min),ln.expandByPoint(Pr.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ct.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Ct.add(Ds)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let w=0;w<a;w++)c[w]=new k,f[w]=new k;const u=new k,h=new k,d=new k,_=new $e,g=new $e,m=new $e,p=new k,S=new k;function y(w,N,U){u.fromArray(s,w*3),h.fromArray(s,N*3),d.fromArray(s,U*3),_.fromArray(o,w*2),g.fromArray(o,N*2),m.fromArray(o,U*2),h.sub(u),d.sub(u),g.sub(_),m.sub(_);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(I),S.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(I),c[w].add(p),c[N].add(p),c[U].add(p),f[w].add(S),f[N].add(S),f[U].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,N=x.length;w<N;++w){const U=x[w],I=U.start,F=U.count;for(let H=I,z=I+F;H<z;H+=3)y(i[H+0],i[H+1],i[H+2])}const M=new k,E=new k,T=new k,L=new k;function v(w){T.fromArray(r,w*3),L.copy(T);const N=c[w];M.copy(N),M.sub(T.multiplyScalar(T.dot(N))).normalize(),E.crossVectors(L,N);const I=E.dot(f[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=I}for(let w=0,N=x.length;w<N;++w){const U=x[w],I=U.start,F=U.count;for(let H=I,z=I+F;H<z;H+=3)v(i[H+0]),v(i[H+1]),v(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,f=new k,u=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*f;for(let p=0;p<f;p++)h[_++]=c[d++]}return new vn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(n))}const r=e.morphAttributes;for(const c in r){const f=[],u=r[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new St,$n=new t0,Oo=new Qa,Gh=new k,Us=new k,Is=new k,Ns=new k,sc=new k,Ho=new k,Bo=new $e,zo=new $e,Vo=new $e,$h=new k,Wh=new k,Xh=new k,ko=new k,Go=new k;class vi extends Dt{constructor(e=new Vn,n=new s0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=a[l],u=r[l];f!==0&&(sc.fromBufferAttribute(u,e),o?Ho.addScaledVector(sc,f):Ho.addScaledVector(sc.sub(n),f))}n.add(Ho)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(Oo.containsPoint($n.origin)===!1&&($n.intersectSphere(Oo,Gh)===null||$n.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(kh.copy(r).invert(),$n.copy(e.ray).applyMatrix4(kh),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,_=u.length;d<_;d++){const g=u[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=p,x=S;y<x;y+=3){const M=o.getX(y),E=o.getX(y+1),T=o.getX(y+2);i=$o(this,m,e,$n,l,c,f,M,E,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);i=$o(this,r,e,$n,l,c,f,p,S,y),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,_=u.length;d<_;d++){const g=u[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let y=p,x=S;y<x;y+=3){const M=y,E=y+1,T=y+2;i=$o(this,m,e,$n,l,c,f,M,E,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=g,S=g+1,y=g+2;i=$o(this,r,e,$n,l,c,f,p,S,y),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function uM(t,e,n,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Go);return c<n.near||c>n.far?null:{distance:c,point:Go.clone(),object:t}}function $o(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Us),t.getVertexPosition(l,Is),t.getVertexPosition(c,Ns);const f=uM(t,e,n,i,Us,Is,Ns,ko);if(f){s&&(Bo.fromBufferAttribute(s,a),zo.fromBufferAttribute(s,l),Vo.fromBufferAttribute(s,c),f.uv=Sn.getInterpolation(ko,Us,Is,Ns,Bo,zo,Vo,new $e)),r&&(Bo.fromBufferAttribute(r,a),zo.fromBufferAttribute(r,l),Vo.fromBufferAttribute(r,c),f.uv1=Sn.getInterpolation(ko,Us,Is,Ns,Bo,zo,Vo,new $e),f.uv2=f.uv1),o&&($h.fromBufferAttribute(o,a),Wh.fromBufferAttribute(o,l),Xh.fromBufferAttribute(o,c),f.normal=Sn.getInterpolation(ko,Us,Is,Ns,$h,Wh,Xh,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new k,materialIndex:0};Sn.getNormal(Us,Is,Ns,u.normal),f.face=u}return f}class _o extends Vn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(f,3)),this.setAttribute("uv",new wn(u,2));function _(g,m,p,S,y,x,M,E,T,L,v){const w=x/T,N=M/L,U=x/2,I=M/2,F=E/2,H=T+1,z=L+1;let G=0,W=0;const ae=new k;for(let te=0;te<z;te++){const be=te*N-I;for(let ce=0;ce<H;ce++){const Z=ce*w-U;ae[g]=Z*S,ae[m]=be*y,ae[p]=F,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[p]=E>0?1:-1,f.push(ae.x,ae.y,ae.z),u.push(ce/T),u.push(1-te/L),G+=1}}for(let te=0;te<L;te++)for(let be=0;be<T;be++){const ce=h+be+H*te,Z=h+be+H*(te+1),re=h+(be+1)+H*(te+1),ge=h+(be+1)+H*te;l.push(ce,Z,ge),l.push(Z,re,ge),W+=6}a.addGroup(d,W,v),d+=W,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=fr(t[n]);for(const s in i)e[s]=i[s]}return e}function hM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a0(t){return t.getRenderTarget()===null?t.outputColorSpace:Qn}const dM={clone:fr,merge:Xt};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l0 extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends l0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class gM extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new bn(Fs,Os,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new bn(Fs,Os,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new bn(Fs,Os,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new bn(Fs,Os,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new bn(Fs,Os,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new bn(Fs,Os,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,f=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=xi,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(f),e.toneMapping=u,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class c0 extends _n{constructor(e,n,i,s,r,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ar,super(e,n,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _M extends vs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ms?ze:gs),this.texture=new c0(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _o(5,5,5),r=new xs({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Oi});r.uniforms.tEquirect.value=n;const o=new vi(s,r),a=n.minFilter;return n.minFilter===ao&&(n.minFilter=En),new gM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const rc=new k,vM=new k,xM=new Ze;class is{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=rc.subVectors(i,n).cross(vM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xM.getNormalMatrix(e),s=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Qa,Wo=new k;class kf{constructor(e=new is,n=new is,i=new is,s=new is,r=new is,o=new is){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],f=i[6],u=i[7],h=i[8],d=i[9],_=i[10],g=i[11],m=i[12],p=i[13],S=i[14],y=i[15];return n[0].setComponents(a-s,u-l,g-h,y-m).normalize(),n[1].setComponents(a+s,u+l,g+h,y+m).normalize(),n[2].setComponents(a+r,u+c,g+d,y+p).normalize(),n[3].setComponents(a-r,u-c,g-d,y-p).normalize(),n[4].setComponents(a-o,u-f,g-_,y-S).normalize(),n[5].setComponents(a+o,u+f,g+_,y+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function yM(t,e){const n=e.isWebGL2,i=new WeakMap;function s(c,f){const u=c.array,h=c.usage,d=t.createBuffer();t.bindBuffer(f,d),t.bufferData(f,u,h),c.onUploadCallback();let _;if(u instanceof Float32Array)_=t.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=t.SHORT;else if(u instanceof Uint32Array)_=t.UNSIGNED_INT;else if(u instanceof Int32Array)_=t.INT;else if(u instanceof Int8Array)_=t.BYTE;else if(u instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,f,u){const h=f.array,d=f.updateRange;t.bindBuffer(u,c),d.count===-1?t.bufferSubData(u,0,h):(n?t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,s(c,f)):u.version<c.version&&(r(u.buffer,c,f),u.version=c.version)}return{get:o,remove:a,update:l}}class Gf extends Vn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,u=e/a,h=n/l,d=[],_=[],g=[],m=[];for(let p=0;p<f;p++){const S=p*h-o;for(let y=0;y<c;y++){const x=y*u-r;_.push(x,-S,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,x=S+c*(p+1),M=S+1+c*(p+1),E=S+1+c*p;d.push(y,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gf(e.width,e.height,e.widthSegments,e.heightSegments)}}var MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM="vec3 transformed = vec3( position );",RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
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
}`,rE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
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
#endif`,fE=`#if defined( USE_ENVMAP )
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
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
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
#endif`,gE=`struct PhysicalMaterial {
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
}`,_E=`
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AE=`#if defined( USE_POINTS_UV )
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
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
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
#endif`,DE=`#ifdef USE_MORPHTARGETS
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
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tS=`float getShadowMask() {
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
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,hS=`#ifdef USE_UV
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
#endif`,dS=`#ifdef USE_UV
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
#endif`,pS=`#ifdef USE_UV
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
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_S=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
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
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ES=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
}`,bS=`#define DISTANCE
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
}`,wS=`#define DISTANCE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RS=`uniform float scale;
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
}`,CS=`uniform vec3 diffuse;
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
}`,PS=`#include <common>
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
}`,LS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,US=`#define LAMBERT
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
}`,IS=`#define MATCAP
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
}`,NS=`#define MATCAP
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
}`,FS=`#define NORMAL
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
}`,OS=`#define NORMAL
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
}`,HS=`#define PHONG
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
}`,BS=`#define PHONG
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
}`,zS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
}`,kS=`#define TOON
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
}`,GS=`#define TOON
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
}`,$S=`uniform float size;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,qS=`uniform vec3 color;
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
}`,jS=`uniform float rotation;
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
}`,YS=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:MM,alphamap_pars_fragment:EM,alphatest_fragment:SM,alphatest_pars_fragment:bM,aomap_fragment:wM,aomap_pars_fragment:TM,begin_vertex:AM,beginnormal_vertex:RM,bsdfs:CM,iridescence_fragment:PM,bumpmap_pars_fragment:LM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:NM,color_fragment:FM,color_pars_fragment:OM,color_pars_vertex:HM,color_vertex:BM,common:zM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:kM,displacementmap_pars_vertex:GM,displacementmap_vertex:$M,emissivemap_fragment:WM,emissivemap_pars_fragment:XM,encodings_fragment:qM,encodings_pars_fragment:jM,envmap_fragment:YM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:KM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:fE,envmap_vertex:QM,fog_vertex:eE,fog_pars_vertex:tE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:sE,lightmap_fragment:rE,lightmap_pars_fragment:oE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:lE,lights_pars_begin:cE,lights_toon_fragment:uE,lights_toon_pars_fragment:hE,lights_phong_fragment:dE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:gE,lights_fragment_begin:_E,lights_fragment_maps:vE,lights_fragment_end:xE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:SE,map_fragment:bE,map_pars_fragment:wE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:CE,morphcolor_vertex:PE,morphnormal_vertex:LE,morphtarget_pars_vertex:DE,morphtarget_vertex:UE,normal_fragment_begin:IE,normal_fragment_maps:NE,normal_pars_fragment:FE,normal_pars_vertex:OE,normal_vertex:HE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:GE,output_fragment:$E,packing:WE,premultiplied_alpha_fragment:XE,project_vertex:qE,dithering_fragment:jE,dithering_pars_fragment:YE,roughnessmap_fragment:ZE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:QE,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:sS,skinnormal_vertex:rS,specularmap_fragment:oS,specularmap_pars_fragment:aS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:fS,transmission_pars_fragment:uS,uv_pars_fragment:hS,uv_pars_vertex:dS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:_S,backgroundCube_vert:vS,backgroundCube_frag:xS,cube_vert:yS,cube_frag:MS,depth_vert:ES,depth_frag:SS,distanceRGBA_vert:bS,distanceRGBA_frag:wS,equirect_vert:TS,equirect_frag:AS,linedashed_vert:RS,linedashed_frag:CS,meshbasic_vert:PS,meshbasic_frag:LS,meshlambert_vert:DS,meshlambert_frag:US,meshmatcap_vert:IS,meshmatcap_frag:NS,meshnormal_vert:FS,meshnormal_frag:OS,meshphong_vert:HS,meshphong_frag:BS,meshphysical_vert:zS,meshphysical_frag:VS,meshtoon_vert:kS,meshtoon_frag:GS,points_vert:$S,points_frag:WS,shadow_vert:XS,shadow_frag:qS,sprite_vert:jS,sprite_frag:YS},xe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaTest:{value:0}}},Yn={basic:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new it(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xt([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xt([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xt([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Xt([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Xt([xe.lights,xe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yn.physical={uniforms:Xt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Xo={r:0,b:0,g:0};function ZS(t,e,n,i,s,r,o){const a=new it(0);let l=r===!0?0:1,c,f,u=null,h=0,d=null;function _(m,p){let S=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?n:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),S=!0),t.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),S=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),S=!0;break}(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ja)?(f===void 0&&(f=new vi(new _o(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:fr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=y.colorSpace!==ze,(u!==y||h!==y.version||d!==t.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new vi(new Gf(2,2),new xs({name:"BackgroundMaterial",uniforms:fr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Xo,a0(t)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function KS(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,f=!1;function u(F,H,z,G,W){let ae=!1;if(o){const te=g(G,z,H);c!==te&&(c=te,d(c.object)),ae=p(F,G,z,W),ae&&S(F,G,z,W)}else{const te=H.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==te)&&(c.geometry=G.id,c.program=z.id,c.wireframe=te,ae=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),(ae||f)&&(f=!1,L(F,H,z,G),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?t.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,H,z){const G=z.wireframe===!0;let W=a[F.id];W===void 0&&(W={},a[F.id]=W);let ae=W[H.id];ae===void 0&&(ae={},W[H.id]=ae);let te=ae[G];return te===void 0&&(te=m(h()),ae[G]=te),te}function m(F){const H=[],z=[],G=[];for(let W=0;W<s;W++)H[W]=0,z[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:z,attributeDivisors:G,object:F,attributes:{},index:null}}function p(F,H,z,G){const W=c.attributes,ae=H.attributes;let te=0;const be=z.getAttributes();for(const ce in be)if(be[ce].location>=0){const re=W[ce];let ge=ae[ce];if(ge===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor)),re===void 0||re.attribute!==ge||ge&&re.data!==ge.data)return!0;te++}return c.attributesNum!==te||c.index!==G}function S(F,H,z,G){const W={},ae=H.attributes;let te=0;const be=z.getAttributes();for(const ce in be)if(be[ce].location>=0){let re=ae[ce];re===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const ge={};ge.attribute=re,re&&re.data&&(ge.data=re.data),W[ce]=ge,te++}c.attributes=W,c.attributesNum=te,c.index=G}function y(){const F=c.newAttributes;for(let H=0,z=F.length;H<z;H++)F[H]=0}function x(F){M(F,0)}function M(F,H){const z=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;z[F]=1,G[F]===0&&(t.enableVertexAttribArray(F),G[F]=1),W[F]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),W[F]=H)}function E(){const F=c.newAttributes,H=c.enabledAttributes;for(let z=0,G=H.length;z<G;z++)H[z]!==F[z]&&(t.disableVertexAttribArray(z),H[z]=0)}function T(F,H,z,G,W,ae){i.isWebGL2===!0&&(z===t.INT||z===t.UNSIGNED_INT)?t.vertexAttribIPointer(F,H,z,W,ae):t.vertexAttribPointer(F,H,z,G,W,ae)}function L(F,H,z,G){if(i.isWebGL2===!1&&(F.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=G.attributes,ae=z.getAttributes(),te=H.defaultAttributeValues;for(const be in ae){const ce=ae[be];if(ce.location>=0){let Z=W[be];if(Z===void 0&&(be==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),be==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){const re=Z.normalized,ge=Z.itemSize,_e=n.get(Z);if(_e===void 0)continue;const A=_e.buffer,ue=_e.type,Se=_e.bytesPerElement;if(Z.isInterleavedBufferAttribute){const de=Z.data,Pe=de.stride,P=Z.offset;if(de.isInstancedInterleavedBuffer){for(let D=0;D<ce.locationSize;D++)M(ce.location+D,de.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let D=0;D<ce.locationSize;D++)x(ce.location+D);t.bindBuffer(t.ARRAY_BUFFER,A);for(let D=0;D<ce.locationSize;D++)T(ce.location+D,ge/ce.locationSize,ue,re,Pe*Se,(P+ge/ce.locationSize*D)*Se)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<ce.locationSize;de++)M(ce.location+de,Z.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<ce.locationSize;de++)x(ce.location+de);t.bindBuffer(t.ARRAY_BUFFER,A);for(let de=0;de<ce.locationSize;de++)T(ce.location+de,ge/ce.locationSize,ue,re,ge*Se,ge/ce.locationSize*de*Se)}}else if(te!==void 0){const re=te[be];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(ce.location,re);break;case 3:t.vertexAttrib3fv(ce.location,re);break;case 4:t.vertexAttrib4fv(ce.location,re);break;default:t.vertexAttrib1fv(ce.location,re)}}}}E()}function v(){U();for(const F in a){const H=a[F];for(const z in H){const G=H[z];for(const W in G)_(G[W].object),delete G[W];delete H[z]}delete a[F]}}function w(F){if(a[F.id]===void 0)return;const H=a[F.id];for(const z in H){const G=H[z];for(const W in G)_(G[W].object),delete G[W];delete H[z]}delete a[F.id]}function N(F){for(const H in a){const z=a[H];if(z[F.id]===void 0)continue;const G=z[F.id];for(const W in G)_(G[W].object),delete G[W];delete z[F.id]}}function U(){I(),f=!0,c!==l&&(c=l,d(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function JS(t,e,n,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,f){t.drawArrays(r,c,f),n.update(f,r,1)}function l(c,f,u){if(u===0)return;let h,d;if(s)h=t,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,c,f,u),n.update(f,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function QS(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,x=o||e.has("OES_texture_float"),M=y&&x,E=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function eb(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new is,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=t.get(u);if(!s||_===null||_.length===0||r&&!m)r?f(null):c();else{const S=r?0:i,y=S*4;let x=p.clippingState||null;l.value=x,x=f(_,h,y,d);for(let M=0;M!==y;++M)x[M]=n[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==g;++y,x+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function tb(t){let e=new WeakMap;function n(o,a){return a===af?o.mapping=ar:a===lf&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===af||a===lf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _M(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class u0 extends l0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,qh=[.125,.215,.35,.446,.526,.582],as=20,oc=new u0,jh=new it;let ac=null;const ss=(1+Math.sqrt(5))/2,Hs=1/ss,Yh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ss,Hs),new k(0,ss,-Hs),new k(Hs,0,ss),new k(-Hs,0,ss),new k(ss,Hs,0),new k(-ss,Hs,0)];class Zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){ac=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac),e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:lo,format:On,colorSpace:Qn,depthBuffer:!1},s=Kh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nb(r)),this._blurMaterial=ib(r,e,n)}return s}_compileMaterial(e){const n=new vi(this._lodPlanes[0],e);this._renderer.compile(n,oc)}_sceneToCubeUV(e,n,i,s){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(jh),f.toneMapping=xi,f.autoClear=!1;const d=new s0({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new vi(new _o,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(jh),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;qo(s,S*y,p>2?y:0,y,y),f.setRenderTarget(s),g&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ar||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;qo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,oc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yh[(s-1)%Yh.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new vi(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),g=r/_,m=isFinite(r)?1+Math.floor(f*g):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let S=0;for(let T=0;T<as;++T){const L=T/g,v=Math.exp(-L*L/2);p.push(v),T===0?S+=v:T<m&&(S+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const x=this._sizeLods[s],M=3*x*(s>y-qs?s-y+qs:0),E=4*(this._cubeSize-x);qo(n,M,E,3*x,2*x),l.setRenderTarget(n),l.render(u,oc)}}function nb(t){const e=[],n=[],i=[];let s=t;const r=t-qs+1+qh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-qs?l=qh[o-t+qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),y=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,L=E>2?0:-1,v=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(v,g*_*E),y.set(h,m*_*E);const w=[E,E,E,E,E,E];x.set(w,p*_*E)}const M=new Vn;M.setAttribute("position",new vn(S,g)),M.setAttribute("uv",new vn(y,m)),M.setAttribute("faceIndex",new vn(x,p)),e.push(M),s>qs&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kh(t,e,n){const i=new vs(t,e,n);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function ib(t,e,n){const i=new Float32Array(as),s=new k(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$f(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Jh(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Qh(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function $f(){return`

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
	`}function sb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===af||l===lf,f=l===ar||l===lr;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return n===null&&(n=new Zh(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||f&&u&&s(u)){n===null&&(n=new Zh(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function rb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ob(t,e,n,i){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(u){const h=u.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(u){const h=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,x=S.length;y<x;y+=3){const M=S[y+0],E=S[y+1],T=S[y+2];h.push(M,E,E,T,T,M)}}else{const S=_.array;g=_.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const M=y+0,E=y+1,T=y+2;h.push(M,E,E,T,T,M)}}const m=new(Kg(h)?o0:r0)(h,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function f(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function ab(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function f(h,d){t.drawElements(r,d,a,h*l),n.update(d,r,1)}function u(h,d,_){if(_===0)return;let g,m;if(s)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,a,h*l,_),n.update(d,r,_)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=u}function lb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function cb(t,e){return t[0]-e[0]}function fb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ub(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,u){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(f);if(m===void 0||m.count!==g){let H=function(){I.dispose(),r.delete(f),f.removeEventListener("dispose",H)};var d=H;m!==void 0&&m.texture.dispose();const y=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let v=0;y===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let w=f.attributes.position.count*v,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*N*4*g),I=new e0(U,w,N,g);I.type=us,I.needsUpdate=!0;const F=v*4;for(let z=0;z<g;z++){const G=E[z],W=T[z],ae=L[z],te=w*N*4*z;for(let be=0;be<G.count;be++){const ce=be*F;y===!0&&(o.fromBufferAttribute(G,be),U[te+ce+0]=o.x,U[te+ce+1]=o.y,U[te+ce+2]=o.z,U[te+ce+3]=0),x===!0&&(o.fromBufferAttribute(W,be),U[te+ce+4]=o.x,U[te+ce+5]=o.y,U[te+ce+6]=o.z,U[te+ce+7]=0),M===!0&&(o.fromBufferAttribute(ae,be),U[te+ce+8]=o.x,U[te+ce+9]=o.y,U[te+ce+10]=o.z,U[te+ce+11]=ae.itemSize===4?o.w:1)}}m={count:g,texture:I,size:new $e(w,N)},r.set(f,m),f.addEventListener("dispose",H)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const S=f.morphTargetsRelative?1:1-p;u.getUniforms().setValue(t,"morphTargetBaseInfluence",S),u.getUniforms().setValue(t,"morphTargetInfluences",h),u.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[f.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];i[f.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(fb);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(cb);const m=f.morphAttributes.position,p=f.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const M=a[x],E=M[0],T=M[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+x)!==m[E]&&f.setAttribute("morphTarget"+x,m[E]),p&&f.getAttribute("morphNormal"+x)!==p[E]&&f.setAttribute("morphNormal"+x,p[E]),s[x]=T,S+=T):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),p&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),s[x]=0)}const y=f.morphTargetsRelative?1:1-S;u.getUniforms().setValue(t,"morphTargetBaseInfluence",y),u.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:l}}function hb(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);return s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const h0=new _n,d0=new e0,p0=new tM,m0=new c0,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function vr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tl(t,e){let n=td[e];n===void 0&&(n=new Int32Array(e),td[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function db(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function _b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;sd.set(i),t.uniformMatrix2fv(this.addr,!1,sd),Tt(n,i)}}function vb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;id.set(i),t.uniformMatrix3fv(this.addr,!1,id),Tt(n,i)}}function xb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;nd.set(i),t.uniformMatrix4fv(this.addr,!1,nd),Tt(n,i)}}function yb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function Eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function Sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function Tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function Rb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||h0,s)}function Cb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||p0,s)}function Pb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||m0,s)}function Lb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||d0,s)}function Db(t){switch(t){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return vb;case 35676:return xb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return Sb;case 5125:return bb;case 36294:return wb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ub(t,e){t.uniform1fv(this.addr,e)}function Ib(t,e){const n=vr(e,this.size,2);t.uniform2fv(this.addr,n)}function Nb(t,e){const n=vr(e,this.size,3);t.uniform3fv(this.addr,n)}function Fb(t,e){const n=vr(e,this.size,4);t.uniform4fv(this.addr,n)}function Ob(t,e){const n=vr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Hb(t,e){const n=vr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Bb(t,e){const n=vr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zb(t,e){t.uniform1iv(this.addr,e)}function Vb(t,e){t.uniform2iv(this.addr,e)}function kb(t,e){t.uniform3iv(this.addr,e)}function Gb(t,e){t.uniform4iv(this.addr,e)}function $b(t,e){t.uniform1uiv(this.addr,e)}function Wb(t,e){t.uniform2uiv(this.addr,e)}function Xb(t,e){t.uniform3uiv(this.addr,e)}function qb(t,e){t.uniform4uiv(this.addr,e)}function jb(t,e,n){const i=this.cache,s=e.length,r=tl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||h0,r[o])}function Yb(t,e,n){const i=this.cache,s=e.length,r=tl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||p0,r[o])}function Zb(t,e,n){const i=this.cache,s=e.length,r=tl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||m0,r[o])}function Kb(t,e,n){const i=this.cache,s=e.length,r=tl(n,s);wt(i,r)||(t.uniform1iv(this.addr,r),Tt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||d0,r[o])}function Jb(t){switch(t){case 5126:return Ub;case 35664:return Ib;case 35665:return Nb;case 35666:return Fb;case 35674:return Ob;case 35675:return Hb;case 35676:return Bb;case 5124:case 35670:return zb;case 35667:case 35671:return Vb;case 35668:case 35672:return kb;case 35669:case 35673:return Gb;case 5125:return $b;case 36294:return Wb;case 36295:return Xb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Kb}}class Qb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Db(n.type)}}class ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Jb(n.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function rd(t,e){t.seq.push(e),t.map[e.id]=e}function nw(t,e,n){const i=t.name,s=i.length;for(lc.lastIndex=0;;){const r=lc.exec(i),o=lc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(n,c===void 0?new Qb(a,t,e):new ew(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new tw(a),rd(n,u)),n=u}}}class Ea{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);nw(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function od(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let iw=0;function sw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function rw(t){switch(t){case Qn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function ad(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+sw(t.getShaderSource(e),o)}else return s}function ow(t,e){const n=rw(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function aw(t,e){let n;switch(e){case cy:n="Linear";break;case fy:n="Reinhard";break;case uy:n="OptimizedCineon";break;case hy:n="ACESFilmic";break;case dy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vr(t){return t!==""}function ld(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(t){return t.replace(uw,hw)}function hw(t,e){const n=ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return df(n)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(t){return t.replace(dw,pw)}function pw(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Vg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===V1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function gw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _w(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function vw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $g:e="ENVMAP_BLENDING_MULTIPLY";break;case ay:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function xw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yw(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=mw(n),c=gw(n),f=_w(n),u=vw(n),h=xw(n),d=n.isWebGL2?"":lw(n),_=cw(r),g=s.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[d,ud(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?ke.tonemapping_pars_fragment:"",n.toneMapping!==xi?aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,ow("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vr).join(`
`)),o=df(o),o=ld(o,n),o=cd(o,n),a=df(a),a=ld(a,n),a=cd(a,n),o=fd(o),a=fd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,x=S+p+a,M=od(s,s.VERTEX_SHADER,y),E=od(s,s.FRAGMENT_SHADER,x);if(s.attachShader(g,M),s.attachShader(g,E),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),t.debug.checkShaderErrors){const v=s.getProgramInfoLog(g).trim(),w=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(E).trim();let U=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,M,E);else{const F=ad(s,M,"vertex"),H=ad(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+F+`
`+H)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:U,programLog:v,vertexShader:{log:w,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(M),s.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new Ea(s,g)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=fw(s,g)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let Mw=0;class Ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Sw(e),n.set(e,i)),i}}class Sw{constructor(e){this.id=Mw++,this.code=e,this.usedTimes=0}}function bw(t,e,n,i,s,r,o){const a=new n0,l=new Ew,c=[],f=s.isWebGL2,u=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,w,N,U,I){const F=U.fog,H=I.geometry,z=v.isMeshStandardMaterial?U.environment:null,G=(v.isMeshStandardMaterial?n:e).get(v.envMap||z),W=G&&G.mapping===Ja?G.image.height:null,ae=_[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,be=te!==void 0?te.length:0;let ce=0;H.morphAttributes.position!==void 0&&(ce=1),H.morphAttributes.normal!==void 0&&(ce=2),H.morphAttributes.color!==void 0&&(ce=3);let Z,re,ge,_e;if(ae){const rt=Yn[ae];Z=rt.vertexShader,re=rt.fragmentShader}else Z=v.vertexShader,re=v.fragmentShader,l.update(v),ge=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const A=t.getRenderTarget(),ue=I.isInstancedMesh===!0,Se=!!v.map,de=!!v.matcap,Pe=!!G,P=!!v.aoMap,D=!!v.lightMap,V=!!v.bumpMap,se=!!v.normalMap,ee=!!v.displacementMap,ie=!!v.emissiveMap,me=!!v.metalnessMap,oe=!!v.roughnessMap,fe=v.clearcoat>0,le=v.iridescence>0,R=v.sheen>0,b=v.transmission>0,B=fe&&!!v.clearcoatMap,q=fe&&!!v.clearcoatNormalMap,K=fe&&!!v.clearcoatRoughnessMap,he=le&&!!v.iridescenceMap,ye=le&&!!v.iridescenceThicknessMap,Me=R&&!!v.sheenColorMap,Y=R&&!!v.sheenRoughnessMap,Te=!!v.specularMap,Re=!!v.specularColorMap,De=!!v.specularIntensityMap,Ae=b&&!!v.transmissionMap,Ee=b&&!!v.thicknessMap,Fe=!!v.gradientMap,Qe=!!v.alphaMap,pt=v.alphaTest>0,O=!!v.extensions,J=!!H.attributes.uv1,pe=!!H.attributes.uv2,we=!!H.attributes.uv3;return{isWebGL2:f,shaderID:ae,shaderName:v.type,vertexShader:Z,fragmentShader:re,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:ue,instancingColor:ue&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:A===null?t.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qn,map:Se,matcap:de,envMap:Pe,envMapMode:Pe&&G.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:D,bumpMap:V,normalMap:se,displacementMap:h&&ee,emissiveMap:ie,normalMapObjectSpace:se&&v.normalMapType===Dy,normalMapTangentSpace:se&&v.normalMapType===jg,metalnessMap:me,roughnessMap:oe,clearcoat:fe,clearcoatMap:B,clearcoatNormalMap:q,clearcoatRoughnessMap:K,iridescence:le,iridescenceMap:he,iridescenceThicknessMap:ye,sheen:R,sheenColorMap:Me,sheenRoughnessMap:Y,specularMap:Te,specularColorMap:Re,specularIntensityMap:De,transmission:b,transmissionMap:Ae,thicknessMap:Ee,gradientMap:Fe,opaque:v.transparent===!1&&v.blending===nr,alphaMap:Qe,alphaTest:pt,combine:v.combine,mapUv:Se&&g(v.map.channel),aoMapUv:P&&g(v.aoMap.channel),lightMapUv:D&&g(v.lightMap.channel),bumpMapUv:V&&g(v.bumpMap.channel),normalMapUv:se&&g(v.normalMap.channel),displacementMapUv:ee&&g(v.displacementMap.channel),emissiveMapUv:ie&&g(v.emissiveMap.channel),metalnessMapUv:me&&g(v.metalnessMap.channel),roughnessMapUv:oe&&g(v.roughnessMap.channel),clearcoatMapUv:B&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(v.sheenRoughnessMap.channel),specularMapUv:Te&&g(v.specularMap.channel),specularColorMapUv:Re&&g(v.specularColorMap.channel),specularIntensityMapUv:De&&g(v.specularIntensityMap.channel),transmissionMapUv:Ae&&g(v.transmissionMap.channel),thicknessMapUv:Ee&&g(v.thicknessMap.channel),alphaMapUv:Qe&&g(v.alphaMap.channel),vertexTangents:se&&!!H.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:pe,vertexUv3s:we,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Se||Qe),fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:v.toneMapped?t.toneMapping:xi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_i,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:O&&v.extensions.derivatives===!0,extensionFragDepth:O&&v.extensions.fragDepth===!0,extensionDrawBuffers:O&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(S(w,v),y(w,v),w.push(t.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function S(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),v.push(a.mask)}function x(v){const w=_[v.type];let N;if(w){const U=Yn[w];N=dM.clone(U.uniforms)}else N=v.uniforms;return N}function M(v,w){let N;for(let U=0,I=c.length;U<I;U++){const F=c[U];if(F.cacheKey===w){N=F,++N.usedTimes;break}}return N===void 0&&(N=new yw(t,w,v,r),c.push(N)),N}function E(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:L}}function ww(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function Tw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dd(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,h,d,_,g,m){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},t[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,h,d,_,g,m){const p=o(u,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(u,h,d,_,g,m){const p=o(u,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(u,h){n.length>1&&n.sort(u||Tw),i.length>1&&i.sort(h||hd),s.length>1&&s.sort(h||hd)}function f(){for(let u=e,h=t.length;u<h;u++){const d=t[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function Aw(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new dd,t.set(i,[o])):s>=r.length?(o=new dd,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new it};break;case"SpotLight":n={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Pw=0;function Lw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Dw(t,e){const n=new Rw,i=Cw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)s.probe.push(new k);const r=new k,o=new St,a=new St;function l(f,u){let h=0,d=0,_=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let g=0,m=0,p=0,S=0,y=0,x=0,M=0,E=0,T=0,L=0;f.sort(Lw);const v=u===!0?Math.PI:1;for(let N=0,U=f.length;N<U;N++){const I=f[N],F=I.color,H=I.intensity,z=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*H*v,d+=F.g*H*v,_+=F.b*H*v;else if(I.isLightProbe)for(let W=0;W<9;W++)s.probe[W].addScaledVector(I.sh.coefficients[W],H);else if(I.isDirectionalLight){const W=n.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const ae=I.shadow,te=i.get(I);te.shadowBias=ae.bias,te.shadowNormalBias=ae.normalBias,te.shadowRadius=ae.radius,te.shadowMapSize=ae.mapSize,s.directionalShadow[g]=te,s.directionalShadowMap[g]=G,s.directionalShadowMatrix[g]=I.shadow.matrix,x++}s.directional[g]=W,g++}else if(I.isSpotLight){const W=n.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(H*v),W.distance=z,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,s.spot[p]=W;const ae=I.shadow;if(I.map&&(s.spotLightMap[T]=I.map,T++,ae.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[p]=ae.matrix,I.castShadow){const te=i.get(I);te.shadowBias=ae.bias,te.shadowNormalBias=ae.normalBias,te.shadowRadius=ae.radius,te.shadowMapSize=ae.mapSize,s.spotShadow[p]=te,s.spotShadowMap[p]=G,E++}p++}else if(I.isRectAreaLight){const W=n.get(I);W.color.copy(F).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=W,S++}else if(I.isPointLight){const W=n.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*v),W.distance=I.distance,W.decay=I.decay,I.castShadow){const ae=I.shadow,te=i.get(I);te.shadowBias=ae.bias,te.shadowNormalBias=ae.normalBias,te.shadowRadius=ae.radius,te.shadowMapSize=ae.mapSize,te.shadowCameraNear=ae.camera.near,te.shadowCameraFar=ae.camera.far,s.pointShadow[m]=te,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=I.shadow.matrix,M++}s.point[m]=W,m++}else if(I.isHemisphereLight){const W=n.get(I);W.skyColor.copy(I.color).multiplyScalar(H*v),W.groundColor.copy(I.groundColor).multiplyScalar(H*v),s.hemi[y]=W,y++}}S>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=_;const w=s.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==S||w.hemiLength!==y||w.numDirectionalShadows!==x||w.numPointShadows!==M||w.numSpotShadows!==E||w.numSpotMaps!==T)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=E+T-L,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=L,w.directionalLength=g,w.pointLength=m,w.spotLength=p,w.rectAreaLength=S,w.hemiLength=y,w.numDirectionalShadows=x,w.numPointShadows=M,w.numSpotShadows=E,w.numSpotMaps=T,s.version=Pw++)}function c(f,u){let h=0,d=0,_=0,g=0,m=0;const p=u.matrixWorldInverse;for(let S=0,y=f.length;S<y;S++){const x=f[S];if(x.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=s.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=s.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function pd(t,e){const n=new Dw(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Uw(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let l;return a===void 0?(l=new pd(t,e),n.set(r,[l])):o>=a.length?(l=new pd(t,e),a.push(l)):l=a[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class Iw extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nw extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ow=`uniform sampler2D shadow_pass;
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
}`;function Hw(t,e,n){let i=new kf;const s=new $e,r=new $e,o=new Lt,a=new Iw({depthPacking:Ly}),l=new Nw,c={},f=n.maxTextureSize,u={[Bi]:rn,[rn]:Bi,[_i]:_i},h=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Fw,fragmentShader:Ow}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vi(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vg;let p=this.type;this.render=function(M,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),v=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Oi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==di&&this.type===di,I=p===di&&this.type!==di;for(let F=0,H=M.length;F<H;F++){const z=M[F],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||U===!0||I===!0){const te=this.type!==di?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new vs(s.x,s.y,te),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const ae=G.getViewportCount();for(let te=0;te<ae;te++){const be=G.getViewport(te);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),N.viewport(o),G.updateMatrices(z,te),i=G.getFrustum(),x(E,T,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===di&&S(G,T),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(L,v,w)};function S(M,E){const T=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vs(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(E,null,T,h,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(E,null,T,d,g,null)}function y(M,E,T,L){let v=null;const w=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)v=w;else if(v=T.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,U=E.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let F=I[U];F===void 0&&(F=v.clone(),I[U]=F),v=F}if(v.visible=E.visible,v.wireframe=E.wireframe,L===di?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=t.properties.get(v);N.light=T}return v}function x(M,E,T,L,v){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===di)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const U=e.update(M),I=M.material;if(Array.isArray(I)){const F=U.groups;for(let H=0,z=F.length;H<z;H++){const G=F[H],W=I[G.materialIndex];if(W&&W.visible){const ae=y(M,W,L,v);t.renderBufferDirect(T,null,U,ae,M,G)}}}else if(I.visible){const F=y(M,I,L,v);t.renderBufferDirect(T,null,U,F,M,null)}}const N=M.children;for(let U=0,I=N.length;U<I;U++)x(N[U],E,T,L,v)}}function Bw(t,e,n){const i=n.isWebGL2;function s(){let O=!1;const J=new Lt;let pe=null;const we=new Lt(0,0,0,0);return{setMask:function(Le){pe!==Le&&!O&&(t.colorMask(Le,Le,Le,Le),pe=Le)},setLocked:function(Le){O=Le},setClear:function(Le,rt,ot,Ot,Mi){Mi===!0&&(Le*=Ot,rt*=Ot,ot*=Ot),J.set(Le,rt,ot,Ot),we.equals(J)===!1&&(t.clearColor(Le,rt,ot,Ot),we.copy(J))},reset:function(){O=!1,pe=null,we.set(-1,0,0,0)}}}function r(){let O=!1,J=null,pe=null,we=null;return{setTest:function(Le){Le?A(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Le){J!==Le&&!O&&(t.depthMask(Le),J=Le)},setFunc:function(Le){if(pe!==Le){switch(Le){case ey:t.depthFunc(t.NEVER);break;case ty:t.depthFunc(t.ALWAYS);break;case ny:t.depthFunc(t.LESS);break;case of:t.depthFunc(t.LEQUAL);break;case iy:t.depthFunc(t.EQUAL);break;case sy:t.depthFunc(t.GEQUAL);break;case ry:t.depthFunc(t.GREATER);break;case oy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Le}},setLocked:function(Le){O=Le},setClear:function(Le){we!==Le&&(t.clearDepth(Le),we=Le)},reset:function(){O=!1,J=null,pe=null,we=null}}}function o(){let O=!1,J=null,pe=null,we=null,Le=null,rt=null,ot=null,Ot=null,Mi=null;return{setTest:function(mt){O||(mt?A(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(mt){J!==mt&&!O&&(t.stencilMask(mt),J=mt)},setFunc:function(mt,xn,kn){(pe!==mt||we!==xn||Le!==kn)&&(t.stencilFunc(mt,xn,kn),pe=mt,we=xn,Le=kn)},setOp:function(mt,xn,kn){(rt!==mt||ot!==xn||Ot!==kn)&&(t.stencilOp(mt,xn,kn),rt=mt,ot=xn,Ot=kn)},setLocked:function(mt){O=mt},setClear:function(mt){Mi!==mt&&(t.clearStencil(mt),Mi=mt)},reset:function(){O=!1,J=null,pe=null,we=null,Le=null,rt=null,ot=null,Ot=null,Mi=null}}}const a=new s,l=new r,c=new o,f=new WeakMap,u=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,T=null,L=null,v=!1,w=null,N=null,U=null,I=null,F=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=G>=2);let ae=null,te={};const be=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),Z=new Lt().fromArray(be),re=new Lt().fromArray(ce);function ge(O,J,pe,we){const Le=new Uint8Array(4),rt=t.createTexture();t.bindTexture(O,rt),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<pe;ot++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(J,0,t.RGBA,1,1,we,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(J+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return rt}const _e={};_e[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),A(t.DEPTH_TEST),l.setFunc(of),ee(!1),ie(Ju),A(t.CULL_FACE),V(Oi);function A(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function ue(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function Se(O,J){return d[O]!==J?(t.bindFramebuffer(O,J),d[O]=J,i&&(O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=J),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=J)),!0):!1}function de(O,J){let pe=g,we=!1;if(O)if(pe=_.get(J),pe===void 0&&(pe=[],_.set(J,pe)),O.isWebGLMultipleRenderTargets){const Le=O.texture;if(pe.length!==Le.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let rt=0,ot=Le.length;rt<ot;rt++)pe[rt]=t.COLOR_ATTACHMENT0+rt;pe.length=Le.length,we=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,we=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,we=!0);we&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Pe(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const P={[Xs]:t.FUNC_ADD,[G1]:t.FUNC_SUBTRACT,[$1]:t.FUNC_REVERSE_SUBTRACT};if(i)P[nh]=t.MIN,P[ih]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[nh]=O.MIN_EXT,P[ih]=O.MAX_EXT)}const D={[W1]:t.ZERO,[X1]:t.ONE,[q1]:t.SRC_COLOR,[kg]:t.SRC_ALPHA,[Q1]:t.SRC_ALPHA_SATURATE,[K1]:t.DST_COLOR,[Y1]:t.DST_ALPHA,[j1]:t.ONE_MINUS_SRC_COLOR,[Gg]:t.ONE_MINUS_SRC_ALPHA,[J1]:t.ONE_MINUS_DST_COLOR,[Z1]:t.ONE_MINUS_DST_ALPHA};function V(O,J,pe,we,Le,rt,ot,Ot){if(O===Oi){p===!0&&(ue(t.BLEND),p=!1);return}if(p===!1&&(A(t.BLEND),p=!0),O!==k1){if(O!==S||Ot!==v){if((y!==Xs||E!==Xs)&&(t.blendEquation(t.FUNC_ADD),y=Xs,E=Xs),Ot)switch(O){case nr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qu:t.blendFunc(t.ONE,t.ONE);break;case eh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case th:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case nr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case eh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case th:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,T=null,L=null,S=O,v=Ot}return}Le=Le||J,rt=rt||pe,ot=ot||we,(J!==y||Le!==E)&&(t.blendEquationSeparate(P[J],P[Le]),y=J,E=Le),(pe!==x||we!==M||rt!==T||ot!==L)&&(t.blendFuncSeparate(D[pe],D[we],D[rt],D[ot]),x=pe,M=we,T=rt,L=ot),S=O,v=!1}function se(O,J){O.side===_i?ue(t.CULL_FACE):A(t.CULL_FACE);let pe=O.side===rn;J&&(pe=!pe),ee(pe),O.blending===nr&&O.transparent===!1?V(Oi):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const we=O.stencilWrite;c.setTest(we),we&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),oe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?A(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(O){w!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),w=O)}function ie(O){O!==B1?(A(t.CULL_FACE),O!==N&&(O===Ju?t.cullFace(t.BACK):O===z1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),N=O}function me(O){O!==U&&(z&&t.lineWidth(O),U=O)}function oe(O,J,pe){O?(A(t.POLYGON_OFFSET_FILL),(I!==J||F!==pe)&&(t.polygonOffset(J,pe),I=J,F=pe)):ue(t.POLYGON_OFFSET_FILL)}function fe(O){O?A(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function le(O){O===void 0&&(O=t.TEXTURE0+H-1),ae!==O&&(t.activeTexture(O),ae=O)}function R(O,J,pe){pe===void 0&&(ae===null?pe=t.TEXTURE0+H-1:pe=ae);let we=te[pe];we===void 0&&(we={type:void 0,texture:void 0},te[pe]=we),(we.type!==O||we.texture!==J)&&(ae!==pe&&(t.activeTexture(pe),ae=pe),t.bindTexture(O,J||_e[O]),we.type=O,we.texture=J)}function b(){const O=te[ae];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){Z.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Z.copy(O))}function Ee(O){re.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Fe(O,J){let pe=u.get(J);pe===void 0&&(pe=new WeakMap,u.set(J,pe));let we=pe.get(O);we===void 0&&(we=t.getUniformBlockIndex(J,O.name),pe.set(O,we))}function Qe(O,J){const we=u.get(J).get(O);f.get(J)!==we&&(t.uniformBlockBinding(J,we,O.__bindingPointIndex),f.set(J,we))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ae=null,te={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,T=null,L=null,v=!1,w=null,N=null,U=null,I=null,F=null,Z.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:A,disable:ue,bindFramebuffer:Se,drawBuffers:de,useProgram:Pe,setBlending:V,setMaterial:se,setFlipSided:ee,setCullFace:ie,setLineWidth:me,setPolygonOffset:oe,setScissorTest:fe,activeTexture:le,bindTexture:R,unbindTexture:b,compressedTexImage2D:B,compressedTexImage3D:q,texImage2D:Re,texImage3D:De,updateUBOMapping:Fe,uniformBlockBinding:Qe,texStorage2D:Y,texStorage3D:Te,texSubImage2D:K,texSubImage3D:he,compressedTexSubImage2D:ye,compressedTexSubImage3D:Me,scissor:Ae,viewport:Ee,reset:pt}}function zw(t,e,n,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,f=s.maxTextureSize,u=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,b){return p?new OffscreenCanvas(R,b):Ia("canvas")}function y(R,b,B,q){let K=1;if((R.width>q||R.height>q)&&(K=q/Math.max(R.width,R.height)),K<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const he=b?Zg:Math.floor,ye=he(K*R.width),Me=he(K*R.height);g===void 0&&(g=S(ye,Me));const Y=B?S(ye,Me):g;return Y.width=ye,Y.height=Me,Y.getContext("2d").drawImage(R,0,0,ye,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+Me+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return hf(R.width)&&hf(R.height)}function M(R){return a?!1:R.wrapS!==Fn||R.wrapT!==Fn||R.minFilter!==jt&&R.minFilter!==En}function E(R,b){return R.generateMipmaps&&b&&R.minFilter!==jt&&R.minFilter!==En}function T(R){t.generateMipmap(R)}function L(R,b,B,q,K=!1){if(a===!1)return b;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he=b;return b===t.RED&&(B===t.FLOAT&&(he=t.R32F),B===t.HALF_FLOAT&&(he=t.R16F),B===t.UNSIGNED_BYTE&&(he=t.R8)),b===t.RG&&(B===t.FLOAT&&(he=t.RG32F),B===t.HALF_FLOAT&&(he=t.RG16F),B===t.UNSIGNED_BYTE&&(he=t.RG8)),b===t.RGBA&&(B===t.FLOAT&&(he=t.RGBA32F),B===t.HALF_FLOAT&&(he=t.RGBA16F),B===t.UNSIGNED_BYTE&&(he=q===ze&&K===!1?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)),(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function v(R,b,B){return E(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==En?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){return R===jt||R===sh||R===Fl?t.NEAREST:t.LINEAR}function N(R){const b=R.target;b.removeEventListener("dispose",N),I(b),b.isVideoTexture&&_.delete(b)}function U(R){const b=R.target;b.removeEventListener("dispose",U),H(b)}function I(R){const b=i.get(R);if(b.__webglInit===void 0)return;const B=R.source,q=m.get(B);if(q){const K=q[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&F(R),Object.keys(q).length===0&&m.delete(B)}i.remove(R)}function F(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const B=R.source,q=m.get(B);delete q[b.__cacheKey],o.memory.textures--}function H(R){const b=R.texture,B=i.get(R),q=i.get(b);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)t.deleteFramebuffer(B.__webglFramebuffer[K]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[K]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let K=0;K<B.__webglColorRenderbuffer.length;K++)B.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[K]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let K=0,he=b.length;K<he;K++){const ye=i.get(b[K]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(b[K])}i.remove(b),i.remove(R)}let z=0;function G(){z=0}function W(){const R=z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),z+=1,R}function ae(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function te(R,b){const B=i.get(R);if(R.isVideoTexture&&fe(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,R,b);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function be(R,b){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ue(B,R,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function ce(R,b){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ue(B,R,b);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function Z(R,b){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Se(B,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}const re={[cf]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[ff]:t.MIRRORED_REPEAT},ge={[jt]:t.NEAREST,[sh]:t.NEAREST_MIPMAP_NEAREST,[Fl]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[py]:t.LINEAR_MIPMAP_NEAREST,[ao]:t.LINEAR_MIPMAP_LINEAR};function _e(R,b,B){if(B?(t.texParameteri(R,t.TEXTURE_WRAP_S,re[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,re[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,re[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ge[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ge[b.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==Fn||b.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,w(b.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==jt&&b.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===jt||b.minFilter!==Fl&&b.minFilter!==ao||b.type===us&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function A(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",N));const q=b.source;let K=m.get(q);K===void 0&&(K={},m.set(q,K));const he=ae(b);if(he!==R.__cacheKey){K[he]===void 0&&(K[he]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[he].usedTimes++;const ye=K[R.__cacheKey];ye!==void 0&&(K[R.__cacheKey].usedTimes--,ye.usedTimes===0&&F(b)),R.__cacheKey=he,R.__webglTexture=K[he].texture}return B}function ue(R,b,B){let q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=t.TEXTURE_3D);const K=A(R,b),he=b.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+B);const ye=i.get(he);if(he.version!==ye.__version||K===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Me=M(b)&&x(b.image)===!1;let Y=y(b.image,Me,!1,f);Y=le(b,Y);const Te=x(Y)||a,Re=r.convert(b.format,b.colorSpace);let De=r.convert(b.type),Ae=L(b.internalFormat,Re,De,b.colorSpace);_e(q,b,Te);let Ee;const Fe=b.mipmaps,Qe=a&&b.isVideoTexture!==!0,pt=ye.__version===void 0||K===!0,O=v(b,Y,Te);if(b.isDepthTexture)Ae=t.DEPTH_COMPONENT,a?b.type===us?Ae=t.DEPTH_COMPONENT32F:b.type===fs?Ae=t.DEPTH_COMPONENT24:b.type===ir?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:b.type===us&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ps&&Ae===t.DEPTH_COMPONENT&&b.type!==Xg&&b.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=fs,De=r.convert(b.type)),b.format===cr&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,b.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ir,De=r.convert(b.type))),pt&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,Ae,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,Ae,Y.width,Y.height,0,Re,De,null));else if(b.isDataTexture)if(Fe.length>0&&Te){Qe&&pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Fe[0].width,Fe[0].height);for(let J=0,pe=Fe.length;J<pe;J++)Ee=Fe[J],Qe?n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Re,De,Ee.data):n.texImage2D(t.TEXTURE_2D,J,Ae,Ee.width,Ee.height,0,Re,De,Ee.data);b.generateMipmaps=!1}else Qe?(pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Re,De,Y.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,Y.width,Y.height,0,Re,De,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Ae,Fe[0].width,Fe[0].height,Y.depth);for(let J=0,pe=Fe.length;J<pe;J++)Ee=Fe[J],b.format!==On?Re!==null?Qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,Y.depth,Re,Ee.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Ae,Ee.width,Ee.height,Y.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,Y.depth,Re,De,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Ae,Ee.width,Ee.height,Y.depth,0,Re,De,Ee.data)}else{Qe&&pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Fe[0].width,Fe[0].height);for(let J=0,pe=Fe.length;J<pe;J++)Ee=Fe[J],b.format!==On?Re!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Re,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Ae,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ee.width,Ee.height,Re,De,Ee.data):n.texImage2D(t.TEXTURE_2D,J,Ae,Ee.width,Ee.height,0,Re,De,Ee.data)}else if(b.isDataArrayTexture)Qe?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Ae,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Re,De,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,Y.width,Y.height,Y.depth,0,Re,De,Y.data);else if(b.isData3DTexture)Qe?(pt&&n.texStorage3D(t.TEXTURE_3D,O,Ae,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Re,De,Y.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,Y.width,Y.height,Y.depth,0,Re,De,Y.data);else if(b.isFramebufferTexture){if(pt)if(Qe)n.texStorage2D(t.TEXTURE_2D,O,Ae,Y.width,Y.height);else{let J=Y.width,pe=Y.height;for(let we=0;we<O;we++)n.texImage2D(t.TEXTURE_2D,we,Ae,J,pe,0,Re,De,null),J>>=1,pe>>=1}}else if(Fe.length>0&&Te){Qe&&pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Fe[0].width,Fe[0].height);for(let J=0,pe=Fe.length;J<pe;J++)Ee=Fe[J],Qe?n.texSubImage2D(t.TEXTURE_2D,J,0,0,Re,De,Ee):n.texImage2D(t.TEXTURE_2D,J,Ae,Re,De,Ee);b.generateMipmaps=!1}else Qe?(pt&&n.texStorage2D(t.TEXTURE_2D,O,Ae,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,De,Y)):n.texImage2D(t.TEXTURE_2D,0,Ae,Re,De,Y);E(b,Te)&&T(q),ye.__version=he.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Se(R,b,B){if(b.image.length!==6)return;const q=A(R,b),K=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const he=i.get(K);if(K.version!==he.__version||q===!0){n.activeTexture(t.TEXTURE0+B),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let J=0;J<6;J++)!ye&&!Me?Y[J]=y(b.image[J],!1,!0,c):Y[J]=Me?b.image[J].image:b.image[J],Y[J]=le(b,Y[J]);const Te=Y[0],Re=x(Te)||a,De=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type),Ee=L(b.internalFormat,De,Ae,b.colorSpace),Fe=a&&b.isVideoTexture!==!0,Qe=he.__version===void 0||q===!0;let pt=v(b,Te,Re);_e(t.TEXTURE_CUBE_MAP,b,Re);let O;if(ye){Fe&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Ee,Te.width,Te.height);for(let J=0;J<6;J++){O=Y[J].mipmaps;for(let pe=0;pe<O.length;pe++){const we=O[pe];b.format!==On?De!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,we.width,we.height,De,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,we.width,we.height,De,Ae,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ee,we.width,we.height,0,De,Ae,we.data)}}}else{O=b.mipmaps,Fe&&Qe&&(O.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,Ee,Y[0].width,Y[0].height));for(let J=0;J<6;J++)if(Me){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Y[J].width,Y[J].height,De,Ae,Y[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,Y[J].width,Y[J].height,0,De,Ae,Y[J].data);for(let pe=0;pe<O.length;pe++){const Le=O[pe].image[J].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Le.width,Le.height,De,Ae,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ee,Le.width,Le.height,0,De,Ae,Le.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,Ae,Y[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,De,Ae,Y[J]);for(let pe=0;pe<O.length;pe++){const we=O[pe];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,De,Ae,we.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ee,De,Ae,we.image[J])}}}E(b,Re)&&T(t.TEXTURE_CUBE_MAP),he.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,B,q,K){const he=r.convert(B.format,B.colorSpace),ye=r.convert(B.type),Me=L(B.internalFormat,he,ye,B.colorSpace);i.get(b).__hasExternalTextures||(K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,0,Me,b.width,b.height,b.depth,0,he,ye,null):n.texImage2D(K,0,Me,b.width,b.height,0,he,ye,null)),n.bindFramebuffer(t.FRAMEBUFFER,R),oe(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,K,i.get(B).__webglTexture,0,me(b)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,K,i.get(B).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let q=t.DEPTH_COMPONENT16;if(B||oe(b)){const K=b.depthTexture;K&&K.isDepthTexture&&(K.type===us?q=t.DEPTH_COMPONENT32F:K.type===fs&&(q=t.DEPTH_COMPONENT24));const he=me(b);oe(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,q,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,he,q,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const q=me(b);B&&oe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,b.width,b.height):oe(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let K=0;K<q.length;K++){const he=q[K],ye=r.convert(he.format,he.colorSpace),Me=r.convert(he.type),Y=L(he.internalFormat,ye,Me,he.colorSpace),Te=me(b);B&&oe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,Y,b.width,b.height):oe(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,Y,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Y,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),te(b.depthTexture,0);const q=i.get(b.depthTexture).__webglTexture,K=me(b);if(b.depthTexture.format===ps)oe(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(b.depthTexture.format===cr)oe(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function D(R){const b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");P(b.__webglFramebuffer,R)}else if(B){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]=t.createRenderbuffer(),Pe(b.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),Pe(b.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(R,b,B){const q=i.get(R);b!==void 0&&de(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),B!==void 0&&D(R)}function se(R){const b=R.texture,B=i.get(R),q=i.get(b);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=b.version,o.memory.textures++);const K=R.isWebGLCubeRenderTarget===!0,he=R.isWebGLMultipleRenderTargets===!0,ye=x(R)||a;if(K){B.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)B.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),he)if(s.drawBuffers){const Me=R.texture;for(let Y=0,Te=Me.length;Y<Te;Y++){const Re=i.get(Me[Y]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&oe(R)===!1){const Me=he?b:[b];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<Me.length;Y++){const Te=Me[Y];B.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const Re=r.convert(Te.format,Te.colorSpace),De=r.convert(Te.type),Ae=L(Te.internalFormat,Re,De,Te.colorSpace,R.isXRRenderTarget===!0),Ee=me(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,Ae,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),_e(t.TEXTURE_CUBE_MAP,b,ye);for(let Me=0;Me<6;Me++)de(B.__webglFramebuffer[Me],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me);E(b,ye)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){const Me=R.texture;for(let Y=0,Te=Me.length;Y<Te;Y++){const Re=Me[Y],De=i.get(Re);n.bindTexture(t.TEXTURE_2D,De.__webglTexture),_e(t.TEXTURE_2D,Re,ye),de(B.__webglFramebuffer,R,Re,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),E(Re,ye)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?Me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Me,q.__webglTexture),_e(Me,b,ye),de(B.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,Me),E(b,ye)&&T(Me),n.unbindTexture()}R.depthBuffer&&D(R)}function ee(R){const b=x(R)||a,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let q=0,K=B.length;q<K;q++){const he=B[q];if(E(he,b)){const ye=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(he).__webglTexture;n.bindTexture(ye,Me),T(ye),n.unbindTexture()}}}function ie(R){if(a&&R.samples>0&&oe(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,q=R.height;let K=t.COLOR_BUFFER_BIT;const he=[],ye=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let Te=0;Te<b.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){he.push(t.COLOR_ATTACHMENT0+Te),R.depthBuffer&&he.push(ye);const Re=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Re===!1&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]),Re===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),Y){const De=i.get(b[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,K,t.NEAREST),d&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let Te=0;Te<b.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const Re=i.get(b[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function me(R){return Math.min(u,R.samples)}function oe(R){const b=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(R){const b=o.render.frame;_.get(R)!==b&&(_.set(R,b),R.update())}function le(R,b){const B=R.colorSpace,q=R.format,K=R.type;return R.isCompressedTexture===!0||R.format===uf||B!==Qn&&B!==gs&&(B===ze?a===!1?e.has("EXT_sRGB")===!0&&q===On?(R.format=uf,R.minFilter=En,R.generateMipmaps=!1):b=Jg.sRGBToLinear(b):(q!==On||K!==_s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=te,this.setTexture2DArray=be,this.setTexture3D=ce,this.setTextureCube=Z,this.rebindTextures=V,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=de,this.useMultisampledRTT=oe}function Vw(t,e,n){const i=n.isWebGL2;function s(r,o=gs){let a;if(r===_s)return t.UNSIGNED_BYTE;if(r===vy)return t.UNSIGNED_SHORT_4_4_4_4;if(r===xy)return t.UNSIGNED_SHORT_5_5_5_1;if(r===my)return t.BYTE;if(r===gy)return t.SHORT;if(r===Xg)return t.UNSIGNED_SHORT;if(r===_y)return t.INT;if(r===fs)return t.UNSIGNED_INT;if(r===us)return t.FLOAT;if(r===lo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yy)return t.ALPHA;if(r===On)return t.RGBA;if(r===My)return t.LUMINANCE;if(r===Ey)return t.LUMINANCE_ALPHA;if(r===ps)return t.DEPTH_COMPONENT;if(r===cr)return t.DEPTH_STENCIL;if(r===uf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sy)return t.RED;if(r===by)return t.RED_INTEGER;if(r===wy)return t.RG;if(r===Ty)return t.RG_INTEGER;if(r===Ay)return t.RGBA_INTEGER;if(r===Ol||r===Hl||r===Bl||r===zl)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===oh||r===ah||r===lh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===rh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ry)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ch||r===fh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ch)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uh||r===hh||r===dh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===yh||r===Mh||r===Eh||r===Sh||r===bh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===uh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_h)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vl)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Cy||r===wh||r===Th||r===Ah)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Th)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ah)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ir?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class kw extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jo extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gw={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class $w extends _n{constructor(e,n,i,s,r,o,a,l,c,f){if(f=f!==void 0?f:ps,f!==ps&&f!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ps&&(i=fs),i===void 0&&f===cr&&(i=ir),super(null,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1}}class Ww extends ys{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,_=null;const g=n.getContextAttributes();let m=null,p=null;const S=[],y=[],x=new Set,M=new Map,E=new bn;E.layers.enable(1),E.viewport=new Lt;const T=new bn;T.layers.enable(2),T.viewport=new Lt;const L=[E,T],v=new kw;v.layers.enable(1),v.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=S[Z];return re===void 0&&(re=new cc,S[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=S[Z];return re===void 0&&(re=new cc,S[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=S[Z];return re===void 0&&(re=new cc,S[Z]=re),re.getHandSpace()};function U(Z){const re=y.indexOf(Z.inputSource);if(re===-1)return;const ge=S[re];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,c||o),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function I(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",F);for(let Z=0;Z<S.length;Z++){const re=y[Z];re!==null&&(y[Z]=null,S[Z].disconnect(re))}w=null,N=null,e.setRenderTarget(m),d=null,h=null,u=null,s=null,p=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",I),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,re),s.updateRenderState({baseLayer:d}),p=new vs(d.framebufferWidth,d.framebufferHeight,{format:On,type:_s,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,ge=null,_e=null;g.depth&&(_e=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?cr:ps,ge=g.stencil?ir:fs);const A={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,n),h=u.createProjectionLayer(A),s.updateRenderState({layers:[h]}),p=new vs(h.textureWidth,h.textureHeight,{format:On,type:_s,depthTexture:new $w(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ue=e.properties.get(p);ue.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(Z){for(let re=0;re<Z.removed.length;re++){const ge=Z.removed[re],_e=y.indexOf(ge);_e>=0&&(y[_e]=null,S[_e].disconnect(ge))}for(let re=0;re<Z.added.length;re++){const ge=Z.added[re];let _e=y.indexOf(ge);if(_e===-1){for(let ue=0;ue<S.length;ue++)if(ue>=y.length){y.push(ge),_e=ue;break}else if(y[ue]===null){y[ue]=ge,_e=ue;break}if(_e===-1)break}const A=S[_e];A&&A.connect(ge)}}const H=new k,z=new k;function G(Z,re,ge){H.setFromMatrixPosition(re.matrixWorld),z.setFromMatrixPosition(ge.matrixWorld);const _e=H.distanceTo(z),A=re.projectionMatrix.elements,ue=ge.projectionMatrix.elements,Se=A[14]/(A[10]-1),de=A[14]/(A[10]+1),Pe=(A[9]+1)/A[5],P=(A[9]-1)/A[5],D=(A[8]-1)/A[0],V=(ue[8]+1)/ue[0],se=Se*D,ee=Se*V,ie=_e/(-D+V),me=ie*-D;re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(me),Z.translateZ(ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const oe=Se+ie,fe=de+ie,le=se-me,R=ee+(_e-me),b=Pe*de/fe*oe,B=P*de/fe*oe;Z.projectionMatrix.makePerspective(le,R,b,B,oe,fe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function W(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;v.near=T.near=E.near=Z.near,v.far=T.far=E.far=Z.far,(w!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,N=v.far);const re=Z.parent,ge=v.cameras;W(v,re);for(let _e=0;_e<ge.length;_e++)W(ge[_e],re);ge.length===2?G(v,E,T):v.projectionMatrix.copy(E.projectionMatrix),ae(Z,v,re)};function ae(Z,re,ge){ge===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0);const _e=Z.children;for(let A=0,ue=_e.length;A<ue;A++)_e[A].updateMatrixWorld(!0);Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=co*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.getPlanes=function(){return x};let te=null;function be(Z,re){if(f=re.getViewerPose(c||o),_=re,f!==null){const ge=f.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let A=0;A<ge.length;A++){const ue=ge[A];let Se=null;if(d!==null)Se=d.getViewport(ue);else{const Pe=u.getViewSubImage(h,ue);Se=Pe.viewport,A===0&&(e.setRenderTargetTextures(p,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(p))}let de=L[A];de===void 0&&(de=new bn,de.layers.enable(A),de.viewport=new Lt,L[A]=de),de.matrix.fromArray(ue.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ue.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Se.x,Se.y,Se.width,Se.height),A===0&&(v.matrix.copy(de.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(de)}}for(let ge=0;ge<S.length;ge++){const _e=y[ge],A=S[ge];_e!==null&&A!==void 0&&A.update(_e,re,c||o)}if(te&&te(Z,re),re.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:re.detectedPlanes});let ge=null;for(const _e of x)re.detectedPlanes.has(_e)||(ge===null&&(ge=[]),ge.push(_e));if(ge!==null)for(const _e of ge)x.delete(_e),M.delete(_e),i.dispatchEvent({type:"planeremoved",data:_e});for(const _e of re.detectedPlanes)if(!x.has(_e))x.add(_e),M.set(_e,re.lastChangedTime),i.dispatchEvent({type:"planeadded",data:_e});else{const A=M.get(_e);_e.lastChangedTime>A&&(M.set(_e,_e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:_e}))}}_=null}const ce=new f0;ce.setAnimationLoop(be),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}function Xw(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,a0(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qw(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function c(S,y){let x=s[S.id];x===void 0&&(_(S),x=f(S),s[S.id]=x,S.addEventListener("dispose",m));const M=y.program;i.updateUBOMapping(S,M);const E=e.render.frame;r[S.id]!==E&&(h(S),r[S.id]=E)}function f(S){const y=u();S.__bindingPointIndex=y;const x=t.createBuffer(),M=S.__size,E=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=s[S.id],x=S.uniforms,M=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,T=x.length;E<T;E++){const L=x[E];if(d(L,E,M)===!0){const v=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let U=0;U<w.length;U++){const I=w[U],F=g(I);typeof I=="number"?(L.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,v+N,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,N),N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,v,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,y,x){const M=S.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const E=Array.isArray(M)?M:[M],T=[];for(let L=0;L<E.length;L++)T.push(E[L].clone());x[y]=T}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],T=Array.isArray(M)?M:[M];for(let L=0;L<E.length;L++){const v=E[L];if(v.equals(T[L])===!1)return v.copy(T[L]),!0}}return!1}function _(S){const y=S.uniforms;let x=0;const M=16;let E=0;for(let T=0,L=y.length;T<L;T++){const v=y[T],w={boundary:0,storage:0},N=Array.isArray(v.value)?v.value:[v.value];for(let U=0,I=N.length;U<I;U++){const F=N[U],H=g(F);w.boundary+=H.boundary,w.storage+=H.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=x,T>0){E=x%M;const U=M-E;E!==0&&U-w.boundary<0&&(x+=M-E,v.__offset=x)}x+=w.storage}return E=x%M,E>0&&(x+=M-E),S.__size=x,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function jw(){const t=Ia("canvas");return t.style.display="block",t}class g0{constructor(e={}){const{canvas:n=jw(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let d=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=xi,this.toneMappingExposure=1;const p=this;let S=!1,y=0,x=0,M=null,E=-1,T=null;const L=new Lt,v=new Lt;let w=null,N=n.width,U=n.height,I=1,F=null,H=null;const z=new Lt(0,0,N,U),G=new Lt(0,0,N,U);let W=!1;const ae=new kf;let te=!1,be=!1,ce=null;const Z=new St,re=new k,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return M===null?I:1}let A=i;function ue(C,X){for(let Q=0;Q<C.length;Q++){const $=C[Q],ne=n.getContext($,X);if(ne!==null)return ne}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Qe,!1),A===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),A=ue(X,C),A===null)throw ue(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,de,Pe,P,D,V,se,ee,ie,me,oe,fe,le,R,b,B,q,K,he,ye,Me,Y,Te,Re;function De(){Se=new rb(A),de=new QS(A,Se,e),Se.init(de),Y=new Vw(A,Se,de),Pe=new Bw(A,Se,de),P=new lb(A),D=new ww,V=new zw(A,Se,Pe,D,de,Y,P),se=new tb(p),ee=new sb(p),ie=new yM(A,de),Te=new KS(A,Se,ie,de),me=new ob(A,ie,P,Te),oe=new hb(A,me,ie,P),he=new ub(A,de,V),B=new eb(D),fe=new bw(p,se,ee,Se,de,Te,B),le=new Xw(p,D),R=new Aw,b=new Uw(Se,de),K=new ZS(p,se,ee,Pe,oe,h,l),q=new Hw(p,oe,de),Re=new qw(A,P,de,Pe),ye=new JS(A,Se,P,de),Me=new ab(A,Se,P,de),P.programs=fe.programs,p.capabilities=de,p.extensions=Se,p.properties=D,p.renderLists=R,p.shadowMap=q,p.state=Pe,p.info=P}De();const Ae=new Ww(p,A);this.xr=Ae,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(N,U,!1))},this.getSize=function(C){return C.set(N,U)},this.setSize=function(C,X,Q=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,U=X,n.width=Math.floor(C*I),n.height=Math.floor(X*I),Q===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(N*I,U*I).floor()},this.setDrawingBufferSize=function(C,X,Q){N=C,U=X,I=Q,n.width=Math.floor(C*Q),n.height=Math.floor(X*Q),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,X,Q,$){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,X,Q,$),Pe.viewport(L.copy(z).multiplyScalar(I).floor())},this.getScissor=function(C){return C.copy(G)},this.setScissor=function(C,X,Q,$){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,X,Q,$),Pe.scissor(v.copy(G).multiplyScalar(I).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){Pe.setScissorTest(W=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){H=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,X=!0,Q=!0){let $=0;C&&($|=A.COLOR_BUFFER_BIT),X&&($|=A.DEPTH_BUFFER_BIT),Q&&($|=A.STENCIL_BUFFER_BIT),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Qe,!1),R.dispose(),b.dispose(),D.dispose(),se.dispose(),ee.dispose(),oe.dispose(),Te.dispose(),Re.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Le),Ae.removeEventListener("sessionend",rt),ce&&(ce.dispose(),ce=null),ot.stop()};function Ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=P.autoReset,X=q.enabled,Q=q.autoUpdate,$=q.needsUpdate,ne=q.type;De(),P.autoReset=C,q.enabled=X,q.autoUpdate=Q,q.needsUpdate=$,q.type=ne}function Qe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){const X=C.target;X.removeEventListener("dispose",pt),O(X)}function O(C){J(C),D.remove(C)}function J(C){const X=D.get(C).programs;X!==void 0&&(X.forEach(function(Q){fe.releaseProgram(Q)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Q,$,ne,Ue){X===null&&(X=ge);const Ne=ne.isMesh&&ne.matrixWorld.determinant()<0,Oe=L_(C,X,Q,$,ne);Pe.setMaterial($,Ne);let Ve=Q.index,Xe=1;$.wireframe===!0&&(Ve=me.getWireframeAttribute(Q),Xe=2);const qe=Q.drawRange,je=Q.attributes.position;let st=qe.start*Xe,Vt=(qe.start+qe.count)*Xe;Ue!==null&&(st=Math.max(st,Ue.start*Xe),Vt=Math.min(Vt,(Ue.start+Ue.count)*Xe)),Ve!==null?(st=Math.max(st,0),Vt=Math.min(Vt,Ve.count)):je!=null&&(st=Math.max(st,0),Vt=Math.min(Vt,je.count));const Cn=Vt-st;if(Cn<0||Cn===1/0)return;Te.setup(ne,$,Oe,Q,Ve);let $i,vt=ye;if(Ve!==null&&($i=ie.get(Ve),vt=Me,vt.setIndex($i)),ne.isMesh)$.wireframe===!0?(Pe.setLineWidth($.wireframeLinewidth*_e()),vt.setMode(A.LINES)):vt.setMode(A.TRIANGLES);else if(ne.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),Pe.setLineWidth(Ke*_e()),ne.isLineSegments?vt.setMode(A.LINES):ne.isLineLoop?vt.setMode(A.LINE_LOOP):vt.setMode(A.LINE_STRIP)}else ne.isPoints?vt.setMode(A.POINTS):ne.isSprite&&vt.setMode(A.TRIANGLES);if(ne.isInstancedMesh)vt.renderInstances(st,Cn,ne.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,vl=Math.min(Q.instanceCount,Ke);vt.renderInstances(st,Cn,vl)}else vt.render(st,Cn)},this.compile=function(C,X){function Q($,ne,Ue){$.transparent===!0&&$.side===_i&&$.forceSinglePass===!1?($.side=rn,$.needsUpdate=!0,Mo($,ne,Ue),$.side=Bi,$.needsUpdate=!0,Mo($,ne,Ue),$.side=_i):Mo($,ne,Ue)}_=b.get(C),_.init(),m.push(_),C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights(p.useLegacyLights),C.traverse(function($){const ne=$.material;if(ne)if(Array.isArray(ne))for(let Ue=0;Ue<ne.length;Ue++){const Ne=ne[Ue];Q(Ne,C,$)}else Q(ne,C,$)}),m.pop(),_=null};let pe=null;function we(C){pe&&pe(C)}function Le(){ot.stop()}function rt(){ot.start()}const ot=new f0;ot.setAnimationLoop(we),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(C){pe=C,Ae.setAnimationLoop(C),C===null?ot.stop():ot.start()},Ae.addEventListener("sessionstart",Le),Ae.addEventListener("sessionend",rt),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(X),X=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,X,M),_=b.get(C,m.length),_.init(),m.push(_),Z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ae.setFromProjectionMatrix(Z),be=this.localClippingEnabled,te=B.init(this.clippingPlanes,be),d=R.get(C,g.length),d.init(),g.push(d),Ot(C,X,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(F,H),te===!0&&B.beginShadows();const Q=_.state.shadowsArray;if(q.render(Q,C,X),te===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(d,C),_.setupLights(p.useLegacyLights),X.isArrayCamera){const $=X.cameras;for(let ne=0,Ue=$.length;ne<Ue;ne++){const Ne=$[ne];Mi(d,C,Ne,Ne.viewport)}}else Mi(d,C,X);M!==null&&(V.updateMultisampleRenderTarget(M),V.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(p,C,X),Te.resetDefaultState(),E=-1,T=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Ot(C,X,Q,$){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ae.intersectsSprite(C)){$&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Z);const Ne=oe.update(C),Oe=C.material;Oe.visible&&d.push(C,Ne,Oe,Q,re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ae.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==P.render.frame&&(C.skeleton.update(),C.skeleton.frame=P.render.frame);const Ne=oe.update(C),Oe=C.material;if($&&(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),re.copy(Ne.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(Z)),Array.isArray(Oe)){const Ve=Ne.groups;for(let Xe=0,qe=Ve.length;Xe<qe;Xe++){const je=Ve[Xe],st=Oe[je.materialIndex];st&&st.visible&&d.push(C,Ne,st,Q,re.z,je)}}else Oe.visible&&d.push(C,Ne,Oe,Q,re.z,null)}}const Ue=C.children;for(let Ne=0,Oe=Ue.length;Ne<Oe;Ne++)Ot(Ue[Ne],X,Q,$)}function Mi(C,X,Q,$){const ne=C.opaque,Ue=C.transmissive,Ne=C.transparent;_.setupLightsView(Q),te===!0&&B.setGlobalState(p.clippingPlanes,Q),Ue.length>0&&mt(ne,Ue,X,Q),$&&Pe.viewport(L.copy($)),ne.length>0&&xn(ne,X,Q),Ue.length>0&&xn(Ue,X,Q),Ne.length>0&&xn(Ne,X,Q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function mt(C,X,Q,$){if(ce===null){const Oe=de.isWebGL2;ce=new vs(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?lo:_s,minFilter:ao,samples:Oe&&a===!0?4:0})}const ne=p.getRenderTarget();p.setRenderTarget(ce),p.clear();const Ue=p.toneMapping;p.toneMapping=xi,xn(C,Q,$),V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce);let Ne=!1;for(let Oe=0,Ve=X.length;Oe<Ve;Oe++){const Xe=X[Oe],qe=Xe.object,je=Xe.geometry,st=Xe.material,Vt=Xe.group;if(st.side===_i&&qe.layers.test($.layers)){const Cn=st.side;st.side=rn,st.needsUpdate=!0,kn(qe,Q,$,je,st,Vt),st.side=Cn,st.needsUpdate=!0,Ne=!0}}Ne===!0&&(V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce)),p.setRenderTarget(ne),p.toneMapping=Ue}function xn(C,X,Q){const $=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Ue=C.length;ne<Ue;ne++){const Ne=C[ne],Oe=Ne.object,Ve=Ne.geometry,Xe=$===null?Ne.material:$,qe=Ne.group;Oe.layers.test(Q.layers)&&kn(Oe,X,Q,Ve,Xe,qe)}}function kn(C,X,Q,$,ne,Ue){C.onBeforeRender(p,X,Q,$,ne,Ue),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(p,X,Q,$,C,Ue),ne.transparent===!0&&ne.side===_i&&ne.forceSinglePass===!1?(ne.side=rn,ne.needsUpdate=!0,p.renderBufferDirect(Q,X,$,ne,C,Ue),ne.side=Bi,ne.needsUpdate=!0,p.renderBufferDirect(Q,X,$,ne,C,Ue),ne.side=_i):p.renderBufferDirect(Q,X,$,ne,C,Ue),C.onAfterRender(p,X,Q,$,ne,Ue)}function Mo(C,X,Q){X.isScene!==!0&&(X=ge);const $=D.get(C),ne=_.state.lights,Ue=_.state.shadowsArray,Ne=ne.state.version,Oe=fe.getParameters(C,ne.state,Ue,X,Q),Ve=fe.getProgramCacheKey(Oe);let Xe=$.programs;$.environment=C.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(C.isMeshStandardMaterial?ee:se).get(C.envMap||$.environment),Xe===void 0&&(C.addEventListener("dispose",pt),Xe=new Map,$.programs=Xe);let qe=Xe.get(Ve);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===Ne)return hu(C,Oe),qe}else Oe.uniforms=fe.getUniforms(C),C.onBuild(Q,Oe,p),C.onBeforeCompile(Oe,p),qe=fe.acquireProgram(Oe,Ve),Xe.set(Ve,qe),$.uniforms=Oe.uniforms;const je=$.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=B.uniform),hu(C,Oe),$.needsLights=U_(C),$.lightsStateVersion=Ne,$.needsLights&&(je.ambientLightColor.value=ne.state.ambient,je.lightProbe.value=ne.state.probe,je.directionalLights.value=ne.state.directional,je.directionalLightShadows.value=ne.state.directionalShadow,je.spotLights.value=ne.state.spot,je.spotLightShadows.value=ne.state.spotShadow,je.rectAreaLights.value=ne.state.rectArea,je.ltc_1.value=ne.state.rectAreaLTC1,je.ltc_2.value=ne.state.rectAreaLTC2,je.pointLights.value=ne.state.point,je.pointLightShadows.value=ne.state.pointShadow,je.hemisphereLights.value=ne.state.hemi,je.directionalShadowMap.value=ne.state.directionalShadowMap,je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,je.spotShadowMap.value=ne.state.spotShadowMap,je.spotLightMatrix.value=ne.state.spotLightMatrix,je.spotLightMap.value=ne.state.spotLightMap,je.pointShadowMap.value=ne.state.pointShadowMap,je.pointShadowMatrix.value=ne.state.pointShadowMatrix);const st=qe.getUniforms(),Vt=Ea.seqWithValue(st.seq,je);return $.currentProgram=qe,$.uniformsList=Vt,qe}function hu(C,X){const Q=D.get(C);Q.outputColorSpace=X.outputColorSpace,Q.instancing=X.instancing,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function L_(C,X,Q,$,ne){X.isScene!==!0&&(X=ge),V.resetTextureUnits();const Ue=X.fog,Ne=$.isMeshStandardMaterial?X.environment:null,Oe=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Qn,Ve=($.isMeshStandardMaterial?ee:se).get($.envMap||Ne),Xe=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,qe=!!$.normalMap&&!!Q.attributes.tangent,je=!!Q.morphAttributes.position,st=!!Q.morphAttributes.normal,Vt=!!Q.morphAttributes.color,Cn=$.toneMapped?p.toneMapping:xi,$i=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=$i!==void 0?$i.length:0,Ke=D.get($),vl=_.state.lights;if(te===!0&&(be===!0||C!==T)){const on=C===T&&$.id===E;B.setState($,C,on)}let Rt=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==vl.state.version||Ke.outputColorSpace!==Oe||ne.isInstancedMesh&&Ke.instancing===!1||!ne.isInstancedMesh&&Ke.instancing===!0||ne.isSkinnedMesh&&Ke.skinning===!1||!ne.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Ve||$.fog===!0&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==B.numPlanes||Ke.numIntersection!==B.numIntersection)||Ke.vertexAlphas!==Xe||Ke.vertexTangents!==qe||Ke.morphTargets!==je||Ke.morphNormals!==st||Ke.morphColors!==Vt||Ke.toneMapping!==Cn||de.isWebGL2===!0&&Ke.morphTargetsCount!==vt)&&(Rt=!0):(Rt=!0,Ke.__version=$.version);let Wi=Ke.currentProgram;Rt===!0&&(Wi=Mo($,X,ne));let du=!1,Er=!1,xl=!1;const kt=Wi.getUniforms(),Xi=Ke.uniforms;if(Pe.useProgram(Wi.program)&&(du=!0,Er=!0,xl=!0),$.id!==E&&(E=$.id,Er=!0),du||T!==C){if(kt.setValue(A,"projectionMatrix",C.projectionMatrix),de.logarithmicDepthBuffer&&kt.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),T!==C&&(T=C,Er=!0,xl=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const on=kt.map.cameraPosition;on!==void 0&&on.setValue(A,re.setFromMatrixPosition(C.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&kt.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||ne.isSkinnedMesh)&&kt.setValue(A,"viewMatrix",C.matrixWorldInverse)}if(ne.isSkinnedMesh){kt.setOptional(A,ne,"bindMatrix"),kt.setOptional(A,ne,"bindMatrixInverse");const on=ne.skeleton;on&&(de.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),kt.setValue(A,"boneTexture",on.boneTexture,V),kt.setValue(A,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yl=Q.morphAttributes;if((yl.position!==void 0||yl.normal!==void 0||yl.color!==void 0&&de.isWebGL2===!0)&&he.update(ne,Q,Wi),(Er||Ke.receiveShadow!==ne.receiveShadow)&&(Ke.receiveShadow=ne.receiveShadow,kt.setValue(A,"receiveShadow",ne.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xi.envMap.value=Ve,Xi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Er&&(kt.setValue(A,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&D_(Xi,xl),Ue&&$.fog===!0&&le.refreshFogUniforms(Xi,Ue),le.refreshMaterialUniforms(Xi,$,I,U,ce),Ea.upload(A,Ke.uniformsList,Xi,V)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ea.upload(A,Ke.uniformsList,Xi,V),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&kt.setValue(A,"center",ne.center),kt.setValue(A,"modelViewMatrix",ne.modelViewMatrix),kt.setValue(A,"normalMatrix",ne.normalMatrix),kt.setValue(A,"modelMatrix",ne.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const on=$.uniformsGroups;for(let Ml=0,I_=on.length;Ml<I_;Ml++)if(de.isWebGL2){const pu=on[Ml];Re.update(pu,Wi),Re.bind(pu,Wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wi}function D_(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function U_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,X,Q){D.get(C.texture).__webglTexture=X,D.get(C.depthTexture).__webglTexture=Q;const $=D.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Q===void 0,$.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const Q=D.get(C);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,Q=0){M=C,y=X,x=Q;let $=!0,ne=null,Ue=!1,Ne=!1;if(C){const Ve=D.get(C);Ve.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(A.FRAMEBUFFER,null),$=!1):Ve.__webglFramebuffer===void 0?V.setupRenderTarget(C):Ve.__hasExternalTextures&&V.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const qe=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ne=qe[X],Ue=!0):de.isWebGL2&&C.samples>0&&V.useMultisampledRTT(C)===!1?ne=D.get(C).__webglMultisampledFramebuffer:ne=qe,L.copy(C.viewport),v.copy(C.scissor),w=C.scissorTest}else L.copy(z).multiplyScalar(I).floor(),v.copy(G).multiplyScalar(I).floor(),w=W;if(Pe.bindFramebuffer(A.FRAMEBUFFER,ne)&&de.drawBuffers&&$&&Pe.drawBuffers(C,ne),Pe.viewport(L),Pe.scissor(v),Pe.setScissorTest(w),Ue){const Ve=D.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,Q)}else if(Ne){const Ve=D.get(C.texture),Xe=X||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ve.__webglTexture,Q||0,Xe)}E=-1},this.readRenderTargetPixels=function(C,X,Q,$,ne,Ue,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){Pe.bindFramebuffer(A.FRAMEBUFFER,Oe);try{const Ve=C.texture,Xe=Ve.format,qe=Ve.type;if(Xe!==On&&Y.convert(Xe)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=qe===lo&&(Se.has("EXT_color_buffer_half_float")||de.isWebGL2&&Se.has("EXT_color_buffer_float"));if(qe!==_s&&Y.convert(qe)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===us&&(de.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-$&&Q>=0&&Q<=C.height-ne&&A.readPixels(X,Q,$,ne,Y.convert(Xe),Y.convert(qe),Ue)}finally{const Ve=M!==null?D.get(M).__webglFramebuffer:null;Pe.bindFramebuffer(A.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,X,Q=0){const $=Math.pow(2,-Q),ne=Math.floor(X.image.width*$),Ue=Math.floor(X.image.height*$);V.setTexture2D(X,0),A.copyTexSubImage2D(A.TEXTURE_2D,Q,0,0,C.x,C.y,ne,Ue),Pe.unbindTexture()},this.copyTextureToTexture=function(C,X,Q,$=0){const ne=X.image.width,Ue=X.image.height,Ne=Y.convert(Q.format),Oe=Y.convert(Q.type);V.setTexture2D(Q,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,Q.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,Q.unpackAlignment),X.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,$,C.x,C.y,ne,Ue,Ne,Oe,X.image.data):X.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,$,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ne,X.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,$,C.x,C.y,Ne,Oe,X.image),$===0&&Q.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Q,$,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Ve=Y.convert($.format),Xe=Y.convert($.type);let qe;if($.isData3DTexture)V.setTexture3D($,0),qe=A.TEXTURE_3D;else if($.isDataArrayTexture)V.setTexture2DArray($,0),qe=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);const je=A.getParameter(A.UNPACK_ROW_LENGTH),st=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Vt=A.getParameter(A.UNPACK_SKIP_PIXELS),Cn=A.getParameter(A.UNPACK_SKIP_ROWS),$i=A.getParameter(A.UNPACK_SKIP_IMAGES),vt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,vt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,C.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,C.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,C.min.z),Q.isDataTexture||Q.isData3DTexture?A.texSubImage3D(qe,ne,X.x,X.y,X.z,Ue,Ne,Oe,Ve,Xe,vt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(qe,ne,X.x,X.y,X.z,Ue,Ne,Oe,Ve,vt.data)):A.texSubImage3D(qe,ne,X.x,X.y,X.z,Ue,Ne,Oe,Ve,Xe,vt),A.pixelStorei(A.UNPACK_ROW_LENGTH,je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,st),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Vt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Cn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,$i),ne===0&&$.generateMipmaps&&A.generateMipmap(qe),Pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?V.setTextureCube(C,0):C.isData3DTexture?V.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?V.setTexture2DArray(C,0):V.setTexture2D(C,0),Pe.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,Pe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?ms:qg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ms?ze:Qn}}class Yw extends g0{}Yw.prototype.isWebGL1Renderer=!0;class Zw extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pf extends _r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const md=new k,gd=new k,_d=new St,fc=new t0,Yo=new Qa;class Kw extends Dt{constructor(e=new Vn,n=new pf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)md.fromBufferAttribute(n,s-1),gd.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=md.distanceTo(gd);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;_d.copy(s).invert(),fc.copy(e.ray).applyMatrix4(_d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new k,f=new k,u=new k,h=new k,d=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const p=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let y=p,x=S-1;y<x;y+=d){const M=_.getX(y),E=_.getX(y+1);if(c.fromBufferAttribute(m,M),f.fromBufferAttribute(m,E),fc.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let y=p,x=S-1;y<x;y+=d){if(c.fromBufferAttribute(m,y),f.fromBufferAttribute(m,y+1),fc.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||n.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const vd=new k,xd=new k;class yd extends Kw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)vd.fromBufferAttribute(n,s),xd.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vd.distanceTo(xd);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Zo=new k,Ko=new k,uc=new k,Jo=new Sn;class Md extends Vn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const s=Math.pow(10,4),r=Math.cos(sr*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],u=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=Jo;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Jo.getNormal(uc),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,x=u[S],M=u[y],E=Jo[f[S]],T=Jo[f[y]],L=`${x}_${M}`,v=`${M}_${x}`;v in h&&h[v]?(uc.dot(h[v].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(T.x,T.y,T.z)),h[v]=null):L in h||(h[L]={index0:c[S],index1:c[y],normal:uc.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:m}=h[_];Zo.fromBufferAttribute(a,g),Ko.fromBufferAttribute(a,m),d.push(Zo.x,Zo.y,Zo.z),d.push(Ko.x,Ko.y,Ko.z)}this.setAttribute("position",new wn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Jw extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jg,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ed={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Qw{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null}}}const eT=new Qw;class _0{constructor(e){this.manager=e!==void 0?e:eT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const li={};class tT extends Error{constructor(e,n){super(e),this.response=n}}class nT extends _0{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ed.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(li[e]!==void 0){li[e].push({onLoad:n,onProgress:i,onError:s});return}li[e]=[],li[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=li[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,T=f.length;E<T;E++){const L=f[E];L.onProgress&&L.onProgress(M)}p.enqueue(x),S()}})}}});return new Response(m)}else throw new tT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Ed.add(e,c);const f=li[e];delete li[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const f=li[e];if(f===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wf extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class iT extends Wf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const hc=new St,Sd=new k,bd=new k;class sT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sd),bd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bd),n.updateMatrixWorld(),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rT extends sT{constructor(){super(new u0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wd extends Wf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new rT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oT extends Wf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);class Td extends _0{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new nT(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function n(c){const f=new DataView(c),u=32/8*3+32/8*3*3+16/8,h=f.getUint32(80,!0);if(80+32/8+h*u===f.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,f,g))return!1;return!0}function i(c,f,u){for(let h=0,d=c.length;h<d;h++)if(c[h]!==f.getUint8(u+h))return!1;return!0}function s(c){const f=new DataView(c),u=f.getUint32(80,!0);let h,d,_,g=!1,m,p,S,y,x;for(let w=0;w<70;w++)f.getUint32(w,!1)==1129270351&&f.getUint8(w+4)==82&&f.getUint8(w+5)==61&&(g=!0,m=new Float32Array(u*3*3),p=f.getUint8(w+6)/255,S=f.getUint8(w+7)/255,y=f.getUint8(w+8)/255,x=f.getUint8(w+9)/255);const M=84,E=12*4+2,T=new Vn,L=new Float32Array(u*3*3),v=new Float32Array(u*3*3);for(let w=0;w<u;w++){const N=M+w*E,U=f.getFloat32(N,!0),I=f.getFloat32(N+4,!0),F=f.getFloat32(N+8,!0);if(g){const H=f.getUint16(N+48,!0);H&32768?(h=p,d=S,_=y):(h=(H&31)/31,d=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const z=N+H*12,G=w*3*3+(H-1)*3;L[G]=f.getFloat32(z,!0),L[G+1]=f.getFloat32(z+4,!0),L[G+2]=f.getFloat32(z+8,!0),v[G]=U,v[G+1]=I,v[G+2]=F,g&&(m[G]=h,m[G+1]=d,m[G+2]=_)}}return T.setAttribute("position",new vn(L,3)),T.setAttribute("normal",new vn(v,3)),g&&(T.setAttribute("color",new vn(m,3)),T.hasColors=!0,T.alpha=x),T}function r(c){const f=new Vn,u=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let d=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),p=[],S=[],y=new k;let x,M=0,E=0,T=0;for(;(x=u.exec(c))!==null;){E=T;const L=x[0];for(;(x=h.exec(L))!==null;){let N=0,U=0;const I=x[0];for(;(x=m.exec(I))!==null;)y.x=parseFloat(x[1]),y.y=parseFloat(x[2]),y.z=parseFloat(x[3]),U++;for(;(x=g.exec(I))!==null;)p.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])),S.push(y.x,y.y,y.z),N++,T++;U!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),N!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const v=E,w=T-E;f.addGroup(v,w,M),M++}return f.setAttribute("position",new wn(p,3)),f.setAttribute("normal",new wn(S,3)),f}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const f=new Uint8Array(c.length);for(let u=0;u<c.length;u++)f[u]=c.charCodeAt(u)&255;return f.buffer||f}else return c}const l=a(e);return n(l)?s(l):r(o(e))}}const dc={type:"change"},pc={type:"start"},mc={type:"end"};class aT extends ys{constructor(e,n){super();const i=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Nl.ROTATE,MIDDLE:Nl.DOLLY,RIGHT:Nl.PAN},this.target=new k;const r=1e-6,o=new k;let a=1,l=s.NONE,c=s.NONE,f=0,u=0,h=0;const d=new k,_=new $e,g=new $e,m=new k,p=new $e,S=new $e,y=new $e,x=new $e,M=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const A=i.domElement.getBoundingClientRect(),ue=i.domElement.ownerDocument.documentElement;i.screen.left=A.left+window.pageXOffset-ue.clientLeft,i.screen.top=A.top+window.pageYOffset-ue.clientTop,i.screen.width=A.width,i.screen.height=A.height};const T=function(){const A=new $e;return function(Se,de){return A.set((Se-i.screen.left)/i.screen.width,(de-i.screen.top)/i.screen.height),A}}(),L=function(){const A=new $e;return function(Se,de){return A.set((Se-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-de))/i.screen.width),A}}();this.rotateCamera=function(){const A=new k,ue=new gr,Se=new k,de=new k,Pe=new k,P=new k;return function(){P.set(g.x-_.x,g.y-_.y,0);let V=P.length();V?(d.copy(i.object.position).sub(i.target),Se.copy(d).normalize(),de.copy(i.object.up).normalize(),Pe.crossVectors(de,Se).normalize(),de.setLength(g.y-_.y),Pe.setLength(g.x-_.x),P.copy(de.add(Pe)),A.crossVectors(P,d).normalize(),V*=i.rotateSpeed,ue.setFromAxisAngle(A,V),d.applyQuaternion(ue),i.object.up.applyQuaternion(ue),m.copy(A),h=V):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),d.copy(i.object.position).sub(i.target),ue.setFromAxisAngle(m,h),d.applyQuaternion(ue),i.object.up.applyQuaternion(ue)),_.copy(g)}}(),this.zoomCamera=function(){let A;l===s.TOUCH_ZOOM_PAN?(A=f/u,f=u,i.object.isPerspectiveCamera?d.multiplyScalar(A):i.object.isOrthographicCamera?(i.object.zoom=Lh.clamp(i.object.zoom/A,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(A=1+(S.y-p.y)*i.zoomSpeed,A!==1&&A>0&&(i.object.isPerspectiveCamera?d.multiplyScalar(A):i.object.isOrthographicCamera?(i.object.zoom=Lh.clamp(i.object.zoom/A,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(S):p.y+=(S.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const A=new $e,ue=new k,Se=new k;return function(){if(A.copy(x).sub(y),A.lengthSq()){if(i.object.isOrthographicCamera){const Pe=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,P=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;A.x*=Pe,A.y*=P}A.multiplyScalar(d.length()*i.panSpeed),Se.copy(d).cross(i.object.up).setLength(A.x),Se.add(ue.copy(i.object.up).setLength(A.y)),i.object.position.add(Se),i.target.add(Se),i.staticMoving?y.copy(x):y.add(A.subVectors(x,y).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(d.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,d.setLength(i.maxDistance)),p.copy(S)),d.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,d.setLength(i.minDistance)),p.copy(S)))},this.update=function(){d.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,d),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>r&&(i.dispatchEvent(dc),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>r||a!==i.object.zoom)&&(i.dispatchEvent(dc),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=s.NONE,c=s.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),d.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(dc),o.copy(i.object.position),a=i.object.zoom};function v(A){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",N)),Z(A),A.pointerType==="touch"?ae(A):H(A))}function w(A){i.enabled!==!1&&(A.pointerType==="touch"?te(A):z(A))}function N(A){i.enabled!==!1&&(A.pointerType==="touch"?be(A):G(),re(A),M.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N)))}function U(A){re(A)}function I(A){i.enabled!==!1&&(window.removeEventListener("keydown",I),c===s.NONE&&(A.code===i.keys[s.ROTATE]&&!i.noRotate?c=s.ROTATE:A.code===i.keys[s.ZOOM]&&!i.noZoom?c=s.ZOOM:A.code===i.keys[s.PAN]&&!i.noPan&&(c=s.PAN)))}function F(){i.enabled!==!1&&(c=s.NONE,window.addEventListener("keydown",I))}function H(A){if(l===s.NONE)switch(A.button){case i.mouseButtons.LEFT:l=s.ROTATE;break;case i.mouseButtons.MIDDLE:l=s.ZOOM;break;case i.mouseButtons.RIGHT:l=s.PAN;break}const ue=c!==s.NONE?c:l;ue===s.ROTATE&&!i.noRotate?(g.copy(L(A.pageX,A.pageY)),_.copy(g)):ue===s.ZOOM&&!i.noZoom?(p.copy(T(A.pageX,A.pageY)),S.copy(p)):ue===s.PAN&&!i.noPan&&(y.copy(T(A.pageX,A.pageY)),x.copy(y)),i.dispatchEvent(pc)}function z(A){const ue=c!==s.NONE?c:l;ue===s.ROTATE&&!i.noRotate?(_.copy(g),g.copy(L(A.pageX,A.pageY))):ue===s.ZOOM&&!i.noZoom?S.copy(T(A.pageX,A.pageY)):ue===s.PAN&&!i.noPan&&x.copy(T(A.pageX,A.pageY))}function G(){l=s.NONE,i.dispatchEvent(mc)}function W(A){if(i.enabled!==!1&&i.noZoom!==!0){switch(A.preventDefault(),A.deltaMode){case 2:p.y-=A.deltaY*.025;break;case 1:p.y-=A.deltaY*.01;break;default:p.y-=A.deltaY*25e-5;break}i.dispatchEvent(pc),i.dispatchEvent(mc)}}function ae(A){switch(ge(A),M.length){case 1:l=s.TOUCH_ROTATE,g.copy(L(M[0].pageX,M[0].pageY)),_.copy(g);break;default:l=s.TOUCH_ZOOM_PAN;const ue=M[0].pageX-M[1].pageX,Se=M[0].pageY-M[1].pageY;u=f=Math.sqrt(ue*ue+Se*Se);const de=(M[0].pageX+M[1].pageX)/2,Pe=(M[0].pageY+M[1].pageY)/2;y.copy(T(de,Pe)),x.copy(y);break}i.dispatchEvent(pc)}function te(A){switch(ge(A),M.length){case 1:_.copy(g),g.copy(L(A.pageX,A.pageY));break;default:const ue=_e(A),Se=A.pageX-ue.x,de=A.pageY-ue.y;u=Math.sqrt(Se*Se+de*de);const Pe=(A.pageX+ue.x)/2,P=(A.pageY+ue.y)/2;x.copy(T(Pe,P));break}}function be(A){switch(M.length){case 0:l=s.NONE;break;case 1:l=s.TOUCH_ROTATE,g.copy(L(A.pageX,A.pageY)),_.copy(g);break;case 2:l=s.TOUCH_ZOOM_PAN;for(let ue=0;ue<M.length;ue++)if(M[ue].pointerId!==A.pointerId){const Se=E[M[ue].pointerId];g.copy(L(Se.x,Se.y)),_.copy(g);break}break}i.dispatchEvent(mc)}function ce(A){i.enabled!==!1&&A.preventDefault()}function Z(A){M.push(A)}function re(A){delete E[A.pointerId];for(let ue=0;ue<M.length;ue++)if(M[ue].pointerId==A.pointerId){M.splice(ue,1);return}}function ge(A){let ue=E[A.pointerId];ue===void 0&&(ue=new $e,E[A.pointerId]=ue),ue.set(A.pageX,A.pageY)}function _e(A){const ue=A.pointerId===M[0].pointerId?M[1]:M[0];return E[ue.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ce),i.domElement.removeEventListener("pointerdown",v),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",W),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N),window.removeEventListener("keydown",I),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",ce),this.domElement.addEventListener("pointerdown",v),this.domElement.addEventListener("pointercancel",U),this.domElement.addEventListener("wheel",W,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",F),this.handleResize(),this.update()}}function lT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const cT=1e-5,fT=1e-13,uT=Math.PI*2;var Ye={EPS:cT,NEPS:fT,TAU:uT};const hT=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);var dT=hT;const pT=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);var mT=pT;const gT=t=>Math.atan2(t[1],t[0]);var Xf=gT,_T=Xf;const vT=Xf,xT=t=>vT(t)*57.29577951308232;var yT=xT;const MT=()=>[0,0];var nl=MT;const ET=nl,ST=t=>{const e=ET();return e[0]=t[0],e[1]=t[1],e};var bT=ST;const wT=(t,e)=>(t[0]=e[0],t[1]=e[1],t);var TT=wT;const AT=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);var RT=AT;const CT=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};var PT=CT;const LT=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);var DT=LT;const UT=(t,e)=>t[0]*e[0]+t[1]*e[1];var IT=UT;const NT=(t,e)=>t[0]===e[0]&&t[1]===e[1];var FT=NT;const{NEPS:OT}=Ye,v0=t=>Math.abs(t)<OT?0:t,HT=t=>v0(Math.sin(t)),BT=t=>v0(Math.cos(t));var Ft={sin:HT,cos:BT};const{sin:zT,cos:VT}=Ft,kT=(t,e)=>(t[0]=VT(e),t[1]=zT(e),t);var x0=kT;const GT=x0,$T=(t,e)=>GT(t,e*.017453292519943295);var WT=$T;const XT=(t,e)=>(t[0]=e,t[1]=e,t);var qT=XT;const jT=nl,YT=(t,e)=>{const n=jT();return n[0]=t,n[1]=e,n};var ZT=YT;const KT=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);var JT=KT;const QT=(t,e,n,i)=>{const s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};var eA=QT;const tA=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);var nA=tA;const iA=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);var sA=iA;const rA=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);var oA=rA;const aA=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);var lA=aA;const cA=(t,e,n,i)=>{const s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};var y0=cA;const{TAU:fA}=Ye,uA=nl,hA=y0,dA=(t,e)=>hA(t,e,uA(),fA/4);var pA=dA;const mA=(t,e)=>{const n=e[0],i=e[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};var gA=mA;const _A=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);var vA=_A;const xA=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);var yA=xA;const MA=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};var EA=MA;const SA=t=>{const e=t[0],n=t[1];return e*e+n*n};var bA=SA;const wA=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);var TA=wA;const AA=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;var RA=AA;const CA=(t,e,n)=>{const i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};var PA=CA,We={abs:dT,add:mT,angle:_T,angleDegrees:yT,angleRadians:Xf,clone:bT,copy:TT,create:nl,cross:RT,distance:PT,divide:DT,dot:IT,equals:FT,fromAngleDegrees:WT,fromAngleRadians:x0,fromScalar:qT,fromValues:ZT,length:JT,lerp:eA,max:nA,min:sA,multiply:oA,negate:lA,normal:pA,normalize:gA,rotate:y0,scale:vA,snap:yA,squaredDistance:EA,squaredLength:bA,subtract:TA,toString:RA,transform:PA};const LA=t=>Object.assign({},t);var qf=LA;const{EPS:Ad}=Ye,DA=We,UA=qf,IA=t=>{if(t.isClosed)return t;const e=UA(t);if(e.isClosed=!0,e.points.length>1){const n=e.points,i=n[0];let s=n[n.length-1];for(;DA.distance(i,s)<Ad*Ad&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};var M0=IA;const NA=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);var FA=NA;const OA=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var jf=OA;const HA=jf,BA=t=>{const e=HA();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};var zA=BA;const VA=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);var E0=VA;const kA=(t,e)=>{const n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=n*a-i*o,y=n*l-s*o,x=n*c-r*o,M=i*l-s*a,E=i*c-r*a,T=s*c-r*l,L=f*g-u*_,v=f*m-h*_,w=f*p-d*_,N=u*m-h*g,U=u*p-d*g,I=h*p-d*m;let F=S*I-y*U+x*N+M*w-E*v+T*L;return F?(F=1/F,t[0]=(a*I-l*U+c*N)*F,t[1]=(s*U-i*I-r*N)*F,t[2]=(g*T-m*E+p*M)*F,t[3]=(h*E-u*T-d*M)*F,t[4]=(l*w-o*I-c*v)*F,t[5]=(n*I-s*w+r*v)*F,t[6]=(m*x-_*T-p*y)*F,t[7]=(f*T-h*x+d*y)*F,t[8]=(o*U-a*w+c*L)*F,t[9]=(i*w-n*U-r*L)*F,t[10]=(_*E-g*x+p*S)*F,t[11]=(u*x-f*E-d*S)*F,t[12]=(a*v-o*N-l*L)*F,t[13]=(n*N-i*v+s*L)*F,t[14]=(g*y-_*M-m*S)*F,t[15]=(f*M-u*y+h*S)*F,t):null};var GA=kA;const $A=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];var WA=$A;const XA=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var S0=XA;const{EPS:qA}=Ye,{sin:jA,cos:YA}=Ft,ZA=S0,KA=(t,e,n)=>{let[i,s,r]=n;const o=i*i+s*s+r*r;if(Math.abs(o)<qA)return ZA(t);const a=1/Math.sqrt(o);i*=a,s*=a,r*=a;const l=jA(e),c=YA(e),f=1-c;return t[0]=i*i*f+c,t[1]=s*i*f+r*l,t[2]=r*i*f-s*l,t[3]=0,t[4]=i*s*f-r*l,t[5]=s*s*f+c,t[6]=r*s*f+i*l,t[7]=0,t[8]=i*r*f+s*l,t[9]=s*r*f-i*l,t[10]=r*r*f+c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var b0=KA;const JA=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var QA=JA;const{sin:gc,cos:_c}=Ft,e2=(t,e,n,i)=>{const s=gc(e),r=_c(e),o=gc(n),a=_c(n),l=gc(i),c=_c(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=l*o*r-c*s,t[5]=c*r+l*o*s,t[6]=l*a,t[7]=0,t[8]=l*s+c*o*r,t[9]=c*o*s-l*r,t[10]=c*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var t2=e2;const n2=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);var i2=n2;const s2=jf,r2=(t,e,n,i,s,r,o,a,l,c,f,u,h,d,_,g)=>{const m=s2();return m[0]=t,m[1]=e,m[2]=n,m[3]=i,m[4]=s,m[5]=r,m[6]=o,m[7]=a,m[8]=l,m[9]=c,m[10]=f,m[11]=u,m[12]=h,m[13]=d,m[14]=_,m[15]=g,m};var o2=r2;const a2=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);var w0=a2;const l2=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);var T0=l2;const c2=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];var il=c2;const f2=il,u2=(t,e)=>{const n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],l=Math.sqrt(n*n+i*i+s*s),c=Math.sqrt(r*r+o*o+a*a),f=l*c,u=f&&f2(t,e)/f;return Math.acos(Math.min(Math.max(u,-1),1))};var h2=u2;const d2=()=>[0,0,0];var sl=d2;const p2=sl,m2=t=>{const e=p2();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var g2=m2;const _2=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var A0=_2;const v2=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],l=n[2];return t[0]=s*l-r*a,t[1]=r*o-i*l,t[2]=i*a-s*o,t};var vo=v2;const x2=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};var R0=x2;const y2=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);var M2=y2;const E2=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var S2=E2;const b2=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);var w2=b2;const T2=sl,A2=(t,e,n)=>{const i=T2();return i[0]=t,i[1]=e,i[2]=n,i};var R2=A2;const C2=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);var P2=C2;const L2=t=>{const e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};var C0=L2;const D2=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);var U2=D2;const I2=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);var N2=I2;const F2=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);var O2=F2;const H2=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);var B2=H2;const z2=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);var V2=z2;const k2=(t,e)=>{const n=e[0],i=e[1],s=e[2];let r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};var Yf=k2;const G2=w0,$2=sl,W2=vo,X2=(t,e)=>{const n=G2($2(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return W2(t,e,[i,s,r])};var q2=X2;const j2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var Y2=j2;const Z2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var K2=Z2;const J2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};var Q2=J2;const eR=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);var P0=eR;const tR=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);var nR=tR;const iR=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};var L0=iR;const sR=t=>{const e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};var D0=sR;const rR=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);var rl=rR;const oR=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;var aR=oR;const lR=(t,e,n)=>{const i=e[0],s=e[1],r=e[2];let o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};var cR=lR,Be={abs:w0,add:T0,angle:h2,clone:g2,copy:A0,create:sl,cross:vo,distance:R0,divide:M2,dot:il,equals:S2,fromScalar:w2,fromValues:R2,fromVec2:P2,length:C0,lerp:U2,max:N2,min:O2,multiply:B2,negate:V2,normalize:Yf,orthogonal:q2,rotateX:Y2,rotateY:K2,rotateZ:Q2,scale:P0,snap:nR,squaredDistance:L0,squaredLength:D0,subtract:rl,toString:aR,transform:cR};const Ai=Be,fR=b0,uR=(t,e,n)=>{const i=Ai.normalize(Ai.create(),e),s=Ai.normalize(Ai.create(),n),r=Ai.cross(Ai.create(),s,i),o=Ai.dot(s,i);if(o===-1)return fR(t,Math.PI,Ai.orthogonal(r,i));const a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var hR=uR;const{sin:dR,cos:pR}=Ft,mR=(t,e)=>{const n=dR(e),i=pR(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var gR=mR;const{sin:_R,cos:vR}=Ft,xR=(t,e)=>{const n=_R(e),i=vR(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var yR=xR;const{sin:MR,cos:ER}=Ft,SR=(t,e)=>{const n=MR(e),i=ER(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var bR=SR;const wR=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;var TR=wR;const AR=t=>ci(t[1])&&ci(t[2])&&ci(t[3])&&ci(t[4])&&ci(t[6])&&ci(t[7])&&ci(t[8])&&ci(t[9])&&ci(t[11])&&t[15]===1,ci=t=>Math.abs(t)<Number.EPSILON;var RR=AR;const CR=t=>{const e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};var PR=CR;const LR=(t,e)=>{const[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};var DR=LR;const UR=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],c=e[6],f=e[7],u=e[8],h=e[9],d=e[10],_=e[11],g=e[12],m=e[13],p=e[14],S=e[15];let y=n[0],x=n[1],M=n[2],E=n[3];return t[0]=y*i+x*a+M*u+E*g,t[1]=y*s+x*l+M*h+E*m,t[2]=y*r+x*c+M*d+E*p,t[3]=y*o+x*f+M*_+E*S,y=n[4],x=n[5],M=n[6],E=n[7],t[4]=y*i+x*a+M*u+E*g,t[5]=y*s+x*l+M*h+E*m,t[6]=y*r+x*c+M*d+E*p,t[7]=y*o+x*f+M*_+E*S,y=n[8],x=n[9],M=n[10],E=n[11],t[8]=y*i+x*a+M*u+E*g,t[9]=y*s+x*l+M*h+E*m,t[10]=y*r+x*c+M*d+E*p,t[11]=y*o+x*f+M*_+E*S,y=n[12],x=n[13],M=n[14],E=n[15],t[12]=y*i+x*a+M*u+E*g,t[13]=y*s+x*l+M*h+E*m,t[14]=y*r+x*c+M*d+E*p,t[15]=y*o+x*f+M*_+E*S,t};var IR=UR;const{EPS:NR}=Ye,{sin:FR,cos:OR}=Ft,HR=E0,BR=(t,e,n,i)=>{let[s,r,o]=i;const a=s*s+r*r+o*o;if(Math.abs(a)<NR)return HR(t,e);const l=1/Math.sqrt(a);s*=l,r*=l,o*=l;const c=FR(n),f=OR(n),u=1-f,h=e[0],d=e[1],_=e[2],g=e[3],m=e[4],p=e[5],S=e[6],y=e[7],x=e[8],M=e[9],E=e[10],T=e[11],L=s*s*u+f,v=r*s*u+o*c,w=o*s*u-r*c,N=s*r*u-o*c,U=r*r*u+f,I=o*r*u+s*c,F=s*o*u+r*c,H=r*o*u-s*c,z=o*o*u+f;return t[0]=h*L+m*v+x*w,t[1]=d*L+p*v+M*w,t[2]=_*L+S*v+E*w,t[3]=g*L+y*v+T*w,t[4]=h*N+m*U+x*I,t[5]=d*N+p*U+M*I,t[6]=_*N+S*U+E*I,t[7]=g*N+y*U+T*I,t[8]=h*F+m*H+x*z,t[9]=d*F+p*H+M*z,t[10]=_*F+S*H+E*z,t[11]=g*F+y*H+T*z,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};var zR=BR;const{sin:VR,cos:kR}=Ft,GR=(t,e,n)=>{const i=VR(n),s=kR(n),r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+c*i,t[5]=o*s+f*i,t[6]=a*s+u*i,t[7]=l*s+h*i,t[8]=c*s-r*i,t[9]=f*s-o*i,t[10]=u*s-a*i,t[11]=h*s-l*i,t};var $R=GR;const{sin:WR,cos:XR}=Ft,qR=(t,e,n)=>{const i=WR(n),s=XR(n),r=e[0],o=e[1],a=e[2],l=e[3],c=e[8],f=e[9],u=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-c*i,t[1]=o*s-f*i,t[2]=a*s-u*i,t[3]=l*s-h*i,t[8]=r*i+c*s,t[9]=o*i+f*s,t[10]=a*i+u*s,t[11]=l*i+h*s,t};var jR=qR;const{sin:YR,cos:ZR}=Ft,KR=(t,e,n)=>{const i=YR(n),s=ZR(n),r=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],u=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+c*i,t[1]=o*s+f*i,t[2]=a*s+u*i,t[3]=l*s+h*i,t[4]=c*s-r*i,t[5]=f*s-o*i,t[6]=u*s-a*i,t[7]=h*s-l*i,t};var JR=KR;const QR=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};var eC=QR;const tC=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);var nC=tC;const iC=t=>t.map(e=>e.toFixed(7)).toString();var sC=iC;const rC=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];let o,a,l,c,f,u,h,d,_,g,m,p;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],l=e[2],c=e[3],f=e[4],u=e[5],h=e[6],d=e[7],_=e[8],g=e[9],m=e[10],p=e[11],t[0]=o,t[1]=a,t[2]=l,t[3]=c,t[4]=f,t[5]=u,t[6]=h,t[7]=d,t[8]=_,t[9]=g,t[10]=m,t[11]=p,t[12]=o*i+f*s+_*r+e[12],t[13]=a*i+u*s+g*r+e[13],t[14]=l*i+h*s+m*r+e[14],t[15]=c*i+d*s+p*r+e[15]),t};var oC=rC,dt={add:FA,clone:zA,copy:E0,create:jf,invert:GA,equals:WA,fromRotation:b0,fromScaling:QA,fromTaitBryanRotation:t2,fromTranslation:i2,fromValues:o2,fromVectorRotation:hR,fromXRotation:gR,fromYRotation:yR,fromZRotation:bR,identity:S0,isIdentity:TR,isOnlyTransformScale:RR,isMirroring:PR,mirrorByPlane:DR,multiply:IR,rotate:zR,rotateX:$R,rotateY:jR,rotateZ:JR,scale:eC,subtract:nC,toString:sC,translate:oC};const aC=dt,lC=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:aC.create()});var ol=lC;const{EPS:Rd}=Ye,Cd=We,cC=M0,fC=ol,uC=(t,e)=>{const n={closed:!1};let{closed:i}=Object.assign({},n,t),s=fC();if(s.points=e.map(r=>Cd.clone(r)),s.points.length>1){const r=s.points[0],o=s.points[s.points.length-1];Cd.distance(r,o)<Rd*Rd&&(i=!0)}return i===!0&&(s=cC(s)),s};var Zf=uC;const Pd=dt,Ld=We,hC=t=>(Pd.isIdentity(t.transforms)||(t.points=t.points.map(e=>Ld.transform(Ld.create(),e,t.transforms)),t.transforms=Pd.create()),t);var dC=hC;const pC=dC,mC=t=>pC(t).points;var xr=mC;const{TAU:Qo}=Ye,yt=We,gC=Zf,_C=xr,vC=(t,e)=>{const n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:l}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=yt.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(l<4)throw new Error("segments must be four or more");const c=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");const f=_C(e);if(f.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let u=s[0],h=s[1];const d=f[f.length-1];u=Math.round(u*c)/c,h=Math.round(h*c)/c,i=yt.fromValues(Math.round(i[0]*c)/c,Math.round(i[1]*c)/c);const _=!o;let g=[];if(u===0||h===0)g.push(i);else{u=Math.abs(u),h=Math.abs(h);const p=r,S=Math.cos(p),y=Math.sin(p),x=yt.subtract(yt.create(),d,i);yt.scale(x,x,.5);const M=Math.round((S*x[0]+y*x[1])*c)/c,E=Math.round((-y*x[0]+S*x[1])*c)/c,T=yt.fromValues(M,E),L=T[0]*T[0]/(u*u)+T[1]*T[1]/(h*h);if(L>1){const W=Math.sqrt(L);u*=W,h*=W,u=Math.round(u*c)/c,h=Math.round(h*c)/c}let v=Math.sqrt((u*u*h*h-u*u*T[1]*T[1]-h*h*T[0]*T[0])/(u*u*T[1]*T[1]+h*h*T[0]*T[0]));_===a&&(v=-v);const w=yt.fromValues(u*T[1]/h,-h*T[0]/u);yt.scale(w,w,v);let N=yt.fromValues(S*w[0]-y*w[1],y*w[0]+S*w[1]);N=yt.add(N,N,yt.scale(yt.create(),yt.add(yt.create(),d,i),.5));const U=yt.fromValues((T[0]-w[0])/u,(T[1]-w[1])/h),I=yt.fromValues((-T[0]-w[0])/u,(-T[1]-w[1])/h),F=yt.angleRadians(U);let z=yt.angleRadians(I)-F;z=z%Qo,!_&&z>0?z-=Qo:_&&z<0&&(z+=Qo);let G=Math.ceil(Math.abs(z)/Qo*l)+1;G<1&&(G=1);for(let W=1;W<G;W++){const ae=F+W/G*z,te=Math.cos(ae),be=Math.sin(ae),ce=yt.fromValues(S*u*te-y*h*be,y*u*te+S*h*be);yt.add(ce,ce,N),g.push(ce)}G&&g.push(t.endpoint)}return g=f.concat(g),gC({},g)};var xC=vC;const yC=Zf,MC=xr,{equals:EC}=We,SC=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{const r=MC(i).slice();if(n.length>0&&r.length>0&&EC(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),yC({closed:e},n)};var U0=SC;const bC=U0,wC=ol,TC=(t,e)=>bC(e,wC(t));var I0=TC;const{TAU:AC}=Ye,cn=We,RC=We,CC=I0,PC=xr,LC=(t,e)=>{const n={segments:16};let{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");const r=PC(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let E=r[r.length-2];if("lastBezierControlPoint"in e&&(E=e.lastBezierControlPoint),!Array.isArray(E))throw new Error("the given path must contain TWO or more points if given a null control point");const T=cn.scale(cn.create(),r[r.length-1],2);cn.subtract(T,T,E),i[0]=T}i.unshift(r[r.length-1]);const a=i.length-1,l=[];let c=1;for(let E=0;E<=a;++E)E>0&&(c*=E),l.push(c);const f=[];for(let E=0;E<=a;++E){const T=l[a]/(l[E]*l[a-E]);f.push(T)}const u=cn.create(),h=cn.create(),d=RC.create(),_=E=>{let T=1,L=Math.pow(1-E,a);const v=E!==1?1/(1-E):1,w=cn.create();for(let N=0;N<=a;++N){N===a&&(L=1);const U=f[N]*T*L,I=cn.scale(u,i[N],U);cn.add(w,w,I),T*=E,L*=v}return w},g=[],m=[],p=a+1;for(let E=0;E<p;++E){const T=E/(p-1),L=_(T);g.push(L),m.push(T)}let S=1;const y=AC/s,x=Math.sin(y);for(;S<g.length-1;){const E=cn.subtract(u,g[S],g[S-1]);cn.normalize(E,E);const T=cn.subtract(h,g[S+1],g[S]);cn.normalize(T,T);const L=cn.cross(d,E,T);if(Math.abs(L[2])>x){const v=m[S-1],w=m[S+1],N=v+(w-v)*1/3,U=v+(w-v)*2/3,I=_(N),F=_(U);g.splice(S,1,I,F),m.splice(S,1,N,U),S--,S<1&&(S=1)}else++S}g.shift();const M=CC(g,e);return M.lastBezierControlPoint=i[i.length-2],M};var DC=LC;const UC=We,Dd=xr,IC=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;const n=Dd(t),i=Dd(e),s=n.length;let r=0;do{let o=!1;for(let a=0;a<s;a++)if(!UC.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};var NC=IC;const FC=dt,OC=We,HC=ol,BC=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");const e=HC();e.transforms=FC.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){const i=OC.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};var zC=BC;const VC=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);var N0=VC;const kC=qf,GC=t=>{const e=kC(t);return e.points=t.points.slice().reverse(),e};var $C=GC;const WC=We,XC=xr,qC=t=>{const e=XC(t);let n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+WC.toString(i)+`,
`}),n+=`]
`,n};var jC=qC;const YC=t=>{const e=t.points,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){const o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};var ZC=YC;const Ud=dt,KC=(t,e)=>{const n=Ud.multiply(Ud.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var JC=KC;const QC=We,eP=N0,tP=t=>{if(!eP(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if(QC.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};var nP=tP,An={appendArc:xC,appendBezier:DC,appendPoints:I0,clone:qf,close:M0,concat:U0,create:ol,equals:NC,fromPoints:Zf,fromCompactBinary:zC,isA:N0,reverse:$C,toPoints:xr,toString:jC,toCompactBinary:ZC,transform:JC,validate:nP};const iP=(t,e)=>Array.isArray(t)&&t.length>=e?t.every(n=>Number.isFinite(n)):!1,sP=(t,e)=>Number.isFinite(t)&&t>e,rP=(t,e)=>Number.isFinite(t)&&t>=e;var At={isNumberArray:iP,isGT:sP,isGTE:rP};const{EPS:Id,TAU:Bs}=Ye,fi=We,oP=An,{isGT:aP,isGTE:vc,isNumberArray:lP}=At,cP=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:Bs,makeTangent:!1,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,makeTangent:o,segments:a}=Object.assign({},e,t);if(!lP(n,2))throw new Error("center must be an array of X and Y values");if(!aP(i,0))throw new Error("radius must be greater than zero");if(!vc(s,0))throw new Error("startAngle must be positive");if(!vc(r,0))throw new Error("endAngle must be positive");if(!vc(a,4))throw new Error("segments must be four or more");s=s%Bs,r=r%Bs;let l=Bs;s<r&&(l=r-s),s>r&&(l=r+(Bs-s));const c=Math.acos((i*i+i*i-Id*Id)/(2*i*i)),f=fi.clone(n);let u;const h=[];if(l<c)u=fi.fromAngleRadians(fi.create(),s),fi.scale(u,u,i),fi.add(u,u,f),h.push(u);else{const d=Math.max(1,Math.floor(a*(l/Bs)))+1;let _=d*.5/l;_>.25&&(_=.25);const g=o?d+2:d;for(let m=0;m<=g;m++){let p=m;o&&(p=(m-1)*(d-2*_)/d+_,p<0&&(p=0),p>d&&(p=d));const S=s+p*(l/d);u=fi.fromAngleRadians(fi.create(),S),fi.scale(u,u,i),fi.add(u,u,f),h.push(u)}}return oP.fromPoints({closed:!1},h)};var fP=cP;const uP=t=>Object.assign({},t);var hP=uP;const dP=dt,pP=t=>(t===void 0&&(t=[]),{sides:t,transforms:dP.create()});var al=pP;const xc=We,mP=al,gP=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");xc.equals(t[0],t[e-1])&&--e;const n=[];let i=t[e-1];for(let s=0;s<e;s++){const r=t[s];n.push([xc.clone(i),xc.clone(r)]),i=r}return mP(n)};var _P=gP;const vP=dt,Nd=We,xP=al,yP=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");const e=xP();e.transforms=vP.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){const i=Nd.fromValues(t[n+0],t[n+1]),s=Nd.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var MP=yP;const EP=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);var F0=EP;const Fd=dt,ea=We,SP=t=>(Fd.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{const n=ea.transform(ea.create(),e[0],t.transforms),i=ea.transform(ea.create(),e[1],t.transforms);return[n,i]}),t.transforms=Fd.create()),t);var bP=SP;const wP=bP,TP=t=>wP(t).sides;var xo=TP;const AP=al,RP=xo,CP=t=>{const n=RP(t).map(i=>[i[1],i[0]]);return n.reverse(),AP(n)};var O0=CP;const Lr=We,PP=xo,LP=t=>{const e=new Map,n=i=>{const s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},DP=t=>{const e=new Map;return LP(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},UP=t=>{const e=DP(PP(t)),n=[];for(;;){let i;for(const[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;const s=[],r=i[0];for(;;){s.push(i[0]);const o=i[1];if(o===r)break;const a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);const l=IP(i,a);a.length===0&&e.delete(o),i=l}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},IP=(t,e)=>{if(e.length===1)return e.pop();const n=Lr.create(),i=Lr.angleDegrees(Lr.subtract(n,t[1],t[0]));let s,r;e.forEach((a,l)=>{let f=Lr.angleDegrees(Lr.subtract(n,a[1],a[0]))-i;f<-180&&(f+=360),f>=180&&(f-=360),(r===void 0||f>s)&&(r=l,s=f)});const o=e[r];return e.splice(r,1),o};var H0=UP;const NP=xo,FP=t=>{const n=NP(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};var OP=FP;const Od=We,HP=xo,BP=t=>{const e=HP(t);let n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+Od.toString(i[0])+", "+Od.toString(i[1])+`]
`}),n+=`]
`,n};var zP=BP;const VP=t=>{const e=t.sides,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){const o=r*4+21,a=e[r][0],l=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=l[0],s[o+3]=l[1]}return s};var kP=VP;const Hd=dt,GP=O0,$P=(t,e)=>{const n=Hd.multiply(Hd.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?GP(i):i};var WP=$P;const XP=We,qP=F0,jP=H0,YP=t=>{if(!qP(t))throw new Error("invalid geom2 structure");if(jP(t),t.sides.forEach(e=>{if(XP.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};var ZP=YP,ht={clone:hP,create:al,fromPoints:_P,fromCompactBinary:MP,isA:F0,reverse:O0,toOutlines:H0,toPoints:OP,toSides:xo,toString:zP,toCompactBinary:kP,transform:WP,validate:ZP};const{EPS:Bd,TAU:Ri}=Ye,yc=We,zd=ht,{sin:KP,cos:JP}=Ft,{isGTE:Mc,isNumberArray:Vd}=At,QP=t=>{const e={center:[0,0],radius:[1,1],startAngle:0,endAngle:Ri,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!Vd(n,2))throw new Error("center must be an array of X and Y values");if(!Vd(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!Mc(s,0))throw new Error("startAngle must be positive");if(!Mc(r,0))throw new Error("endAngle must be positive");if(!Mc(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return zd.create();s=s%Ri,r=r%Ri;let a=Ri;s<r&&(a=r-s),s>r&&(a=r+(Ri-s));const l=Math.min(i[0],i[1]),c=Math.acos((l*l+l*l-Bd*Bd)/(2*l*l));if(a<c)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/Ri));const f=yc.clone(n),u=a/o,h=[];o=a<Ri?o+1:o;for(let d=0;d<o;d++){const _=u*d+s,g=yc.fromValues(i[0]*JP(_),i[1]*KP(_));yc.add(g,f,g),h.push(g)}return a<Ri&&h.push(f),zd.fromPoints(h)};var B0=QP;const{TAU:eL}=Ye,tL=B0,{isGTE:nL}=At,iL=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:eL,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!nL(i,0))throw new Error("radius must be positive");return i=[i,i],tL({center:n,radius:i,startAngle:s,endAngle:r,segments:o})};var z0=iL;const sL=t=>Object.assign({},t);var rL=sL;const oL=dt,aL=t=>(t===void 0&&(t=[]),{polygons:t,transforms:oL.create()});var yo=aL;const lL=vo,kd=rl,Gd=D0,cL=(t,e,n)=>{const i=[],s=[],r=[];kd(i,n,e),kd(s,t,e);const o=Gd(lL(r,s,i)),a=Gd(i);if(a===0)throw Error("a and b are the same point");return o/a},fL=(t,e,n)=>Math.sqrt(cL(t,e,n));var uL=fL;const hL=vo,dL=Yf,$d=rl,pL=(t,e,n,i)=>{const s=[0,0,0];return $d(t,e,n),$d(s,n,i),hL(t,t,s),dL(t,t)};var mL=pL;let gL=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};var _L=gL;let vL=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};var xL=vL;const yL=R0,ML=L0;let EL=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?yL(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?ML(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};var SL=EL;const Ec=T0,bL=A0,wL=vo,Sc=il,TL=C0,AL=Yf,ta=P0,bc=rl,wc=SL,V0=0,RL=1,mf=2;let CL=class k0{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=V0,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){const e=this.edge,n=e.next;let i=n.next;const s=bc([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)bL(o,s),bc(s,i.head().point,e.head().point),Ec(this.normal,this.normal,wL(r,o,s)),i=i.next,this.nVertices+=1;this.area=TL(this.normal),this.normal=ta(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{const f=s.lengthSquared();f>i&&(n=s,i=f),s=s.next}while(s!==this.edge);const r=n.tail().point,o=n.head().point,a=bc([],o,r),l=Math.sqrt(i);ta(a,a,1/l);const c=Sc(this.normal,a);ta(a,a,-c),Ec(this.normal,this.normal,a),AL(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do Ec(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);ta(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=Sc(this.normal,this.centroid)}distanceToPlane(e){return Sc(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){const s=n.opposite.face;let r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=mf,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){const i=e.opposite,s=i.face;n.push(s),s.mark=mf;let r=e.prev,o=e.next,a=i.prev,l=i.next;for(;r.opposite.face===s;)r=r.prev,l=l.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let c;for(c=l;c!==a.next;c=c.next)c.face=this;this.edge=o;let f;return f=this.connectHalfEdges(a,o),f&&n.push(f),f=this.connectHalfEdges(r,l),f&&n.push(f),this.computeNormalAndCentroid(),n}collectIndices(){const e=[];let n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){const r=new k0,o=new wc(e,r),a=new wc(n,r),l=new wc(i,r);return o.next=l.prev=a,a.next=o.prev=l,l.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};var PL={VISIBLE:V0,NON_CONVEX:RL,DELETED:mf,Face:CL};const Tc=il,LL=uL,DL=mL,Wd=_L,UL=xL,{Face:ui,VISIBLE:zs,NON_CONVEX:Xd,DELETED:IL}=PL,NL=1,qd=2;let FL=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new Wd,this.unclaimed=new Wd,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new UL(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){const a=e[o];if(a.mark===zs){const l=a.distanceToPlane(i.point);if(l>s&&(s=l,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){const e=[],n=[],i=[],s=[];let r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){const a=this.vertices[r],l=a.point;for(o=0;o<3;o+=1)l[o]<e[o]&&(e[o]=l[o],i[o]=a);for(o=0;o<3;o+=1)l[o]>n[o]&&(n[o]=l[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){const e=this.vertices,[n,i]=this.computeExtremes();let s,r,o,a,l=0,c=0;for(o=0;o<3;o+=1){const g=i[o].point[o]-n[o].point[o];g>l&&(l=g,c=o)}const f=n[c],u=i[c];for(l=0,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u){const m=LL(g.point,f.point,u.point);m>l&&(l=m,s=g)}}const h=DL([],f.point,u.point,s.point),d=Tc(f.point,h);for(l=-1,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==f&&g!==u&&g!==s){const m=Math.abs(Tc(h,g.point)-d);m>l&&(l=m,r=g)}}const _=[];if(Tc(r.point,h)-d<0)for(_.push(ui.createTriangle(f,u,s),ui.createTriangle(r,u,f),ui.createTriangle(r,s,u),ui.createTriangle(r,f,s)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge(g)),_[o+1].getEdge(1).setOpposite(_[g+1].getEdge(0))}else for(_.push(ui.createTriangle(f,s,u),ui.createTriangle(r,f,u),ui.createTriangle(r,u,s),ui.createTriangle(r,s,f)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge((3-o)%3)),_[o+1].getEdge(0).setOpposite(_[g+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(_[o]);for(o=0;o<e.length;o+=1){const g=e[o];if(g!==f&&g!==u&&g!==s&&g!==r){l=this.tolerance;let m;for(a=0;a<4;a+=1){const p=_[a].distanceToPlane(g.point);p>l&&(l=p,m=_[a])}m&&this.addVertexToFace(g,m)}}}reindexFaceAndVertices(){const e=[];for(let n=0;n<this.faces.length;n+=1){const i=this.faces[n];i.mark===zs&&e.push(i)}this.faces=e}collectFaces(e){const n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==zs)throw Error("attempt to include a destroyed face in the hull");const s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0;const s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){const r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=IL;let r;n?r=n.next:r=n=i.getEdge(0);do{const o=r.opposite,a=o.face;a.mark===zs&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){const i=ui.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){const o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");const o=i.opposite.face;let a=!1;if(n===qd?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){const l=e.mergeAdjacentFaces(i,[]);for(let c=0;c<l.length;c+=1)this.deleteFaceVertices(l[c],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=Xd),!1}addVertexToHull(e){const n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===zs)for(;this.doAdjacentMerge(s,NL););}for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Xd)for(s.mark=zs;this.doAdjacentMerge(s,qd););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};var OL=FL;const HL=OL,BL=(t,e={})=>{const n=new HL(t);return n.build(),n.collectFaces(e.skipTriangulation)};var zL=BL;const VL=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var yr=VL;const kL=yr,GL=Be,$L=(...t)=>{let e,n;return t.length===1?(e=kL(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>GL.clone(i)),e};var WL=$L;const XL=Be,qL=yr,jL=t=>{const e=t.map(n=>XL.clone(n));return qL(e)};var YL=jL;const ZL=yr,KL=(t,e)=>{const n=ZL(t);return n.plane=e,n};var JL=KL;const QL=()=>[0,0,0,0];var ll=QL;const e3=ll,t3=t=>{const e=e3();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};var G0=t3;const n3=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);var $0=n3;const i3=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];var W0=i3;const s3=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);var X0=s3;const Ac=Be,r3=(t,e,n)=>{const i=Ac.normalize(Ac.create(),e),s=Ac.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};var q0=r3;const o3=ll,a3=(t,e,n,i)=>{const s=o3();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};var j0=a3;const fn=Be,l3=q0,c3=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;const n=e.length;e.forEach(d=>{fn.add(t,t,d)}),fn.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,l=0;const c=fn.create();e.forEach(d=>{fn.subtract(c,d,t),i+=c[0]*c[0],s+=c[0]*c[1],r+=c[0]*c[2],o+=c[1]*c[1],a+=c[1]*c[2],l+=c[2]*c[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,l/=n,c[0]=0,c[1]=0,c[2]=0;const f=fn.create();let u=o*l-a*a;f[0]=u,f[1]=r*a-s*l,f[2]=s*a-r*o;let h=u*u;return fn.add(c,c,fn.scale(f,f,h)),u=i*l-r*r,f[0]=r*a-s*l,f[1]=u,f[2]=s*r-a*i,h=u*u,fn.dot(c,f)<0&&(h=-h),fn.add(c,c,fn.scale(f,f,h)),u=i*o-s*s,f[0]=s*a-r*o,f[1]=s*r-a*i,f[2]=u,h=u*u,fn.dot(c,f)<0&&(h=-h),fn.add(c,c,fn.scale(f,f,h)),l3(t,c,t)};var f3=c3;const Wn=Be,u3=(t,...e)=>{const n=e.length,i=Wn.create(),s=Wn.create(),r=o=>{const a=e[o],l=e[(o+1)%n],c=e[(o+2)%n];return Wn.subtract(i,l,a),Wn.subtract(s,c,a),Wn.cross(i,i,s),Wn.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?Wn.copy(t,r(0)):(e.forEach((o,a)=>{Wn.add(t,t,r(a))}),Wn.normalize(t,t)),t[3]=Wn.dot(t,e[0]),t};var Y0=u3;const{EPS:Rc}=Ye,Gt=Be,h3=(t,e,n,i)=>{let s=Gt.subtract(Gt.create(),n,e),r=Gt.subtract(Gt.create(),i,e);Gt.length(s)<Rc&&(s=Gt.orthogonal(s,r)),Gt.length(r)<Rc&&(r=Gt.orthogonal(r,s));let o=Gt.cross(Gt.create(),s,r);Gt.length(o)<Rc&&(r=Gt.orthogonal(r,s),o=Gt.cross(o,s,r)),o=Gt.normalize(o,o);const a=Gt.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};var d3=h3;const p3=Be,m3=(t,e)=>{const n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return p3.fromValues(i,s,r)};var g3=m3;const _3=Be,v3=(t,e)=>_3.dot(t,e)-t[3];var Z0=v3;const x3=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;var K0=x3;const y3=dt,$t=Be,M3=Y0,E3=X0,S3=(t,e,n)=>{const i=y3.isMirroring(n),s=$t.orthogonal($t.create(),e),r=$t.cross(s,e,s),o=$t.cross($t.create(),e,r);let a=$t.fromScalar($t.create(),e[3]);$t.multiply(a,a,e);let l=$t.add($t.create(),a,r),c=$t.add($t.create(),a,o);return a=$t.transform(a,a,n),l=$t.transform(l,l,n),c=$t.transform(c,c,n),M3(t,a,l,c),i&&E3(t,t),t};var b3=S3,Gi={clone:G0,copy:$0,create:ll,equals:W0,flip:X0,fromNormalAndPoint:q0,fromValues:j0,fromNoisyPoints:f3,fromPoints:Y0,fromPointsRandom:d3,projectionOfPoint:g3,signedDistanceToPoint:Z0,toString:K0,transform:b3};const jd=Gi,w3=yr,T3=t=>{const e=t.vertices.slice().reverse(),n=w3(e);return t.plane&&(n.plane=jd.flip(jd.create(),t.plane)),n};var A3=T3;const R3=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));var J0=R3;const Yd=Gi,es=Be,C3=t=>P3(t.vertices),P3=t=>{const e=t.length;if(e>2){const n=Yd.fromPoints(Yd.create(),...t);let i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){const o=t[r];if(!L3(i,s,o,n))return!1;i=s,s=o}}return!0},L3=(t,e,n,i)=>{const s=es.cross(es.create(),es.subtract(es.create(),e,t),es.subtract(es.create(),n,e));return es.dot(s,i)>=0};var Q0=C3;const Zd=Gi,D3=t=>(t.plane||(t.plane=Zd.fromPoints(Zd.create(),...t.vertices)),t.plane);var Kf=D3;const U3=Kf,I3=t=>{const e=t.vertices.length;if(e<3)return 0;const n=t.vertices,i=U3(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let l=0,c=0,f=1,u=2;switch(a){case 1:for(f=1;f<e;f++)c=f-1,u=(f+1)%e,l+=n[f][1]*(n[u][2]-n[c][2]);l+=n[0][1]*(n[1][2]-n[e-1][2]),l/=2*i[0];break;case 2:for(f=1;f<e;f++)c=f-1,u=(f+1)%e,l+=n[f][2]*(n[u][0]-n[c][0]);l+=n[0][2]*(n[1][0]-n[e-1][0]),l/=2*i[1];break;case 3:default:for(f=1;f<e;f++)c=f-1,u=(f+1)%e,l+=n[f][0]*(n[u][1]-n[c][1]);l+=n[0][0]*(n[1][1]-n[e-1][1]),l/=2*i[2];break}return l};var e_=I3;const Dr=Be,N3=t=>{const e=t.vertices,n=e.length,i=n===0?Dr.create():Dr.clone(e[0]),s=Dr.clone(i);for(let r=1;r<n;r++)Dr.min(i,i,e[r]),Dr.max(s,s,e[r]);return[i,s]};var F3=N3;const O3=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];var H3=O3;const B3=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);var z3=B3;const V3=(t,e,n)=>{const[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};var k3=V3,G3={clone:G0,copy:$0,create:ll,dot:H3,equals:W0,fromScalar:z3,fromValues:j0,toString:K0,transform:k3};const $3=G3,Kd=new WeakMap,W3=t=>{const e=Kd.get(t);if(e)return e;const n=t.vertices,i=$3.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,l=s,c=s;n.forEach(d=>{s[0]>d[0]&&(s=d),r[1]>d[1]&&(r=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),l[1]<d[1]&&(l=d),c[2]<d[2]&&(c=d)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+l[1])*.5,i[2]=(o[2]+c[2])*.5;const f=i[0]-a[0],u=i[1]-l[1],h=i[2]-c[2];return i[3]=Math.sqrt(f*f+u*u+h*h),Kd.set(t,i),i};var X3=W3;const Cc=Be,q3=t=>{let e=0;const n=t.vertices,i=Cc.create();for(let s=0;s<n.length-2;s++)Cc.cross(i,n[s+1],n[s+2]),e+=Cc.dot(n[0],i);return e/=6,e};var j3=q3;const Y3=t=>t.vertices;var Z3=Y3;const K3=Be,J3=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${K3.toString(n)}, `}),e+="]",e};var Q3=J3;const eD=dt,Jd=Be,tD=yr,nD=(t,e)=>{const n=e.vertices.map(i=>Jd.transform(Jd.create(),i,t));return eD.isMirroring(t)&&n.reverse(),tD(n)};var iD=nD;const sD=Z0,{NEPS:rD}=Ye,oD=Be,aD=J0,lD=Q0,cD=e_,fD=Kf,uD=t=>{if(!aD(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(cD(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(oD.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!lD(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){const e=fD(t);t.vertices.forEach(n=>{const i=Math.abs(sD(e,n));if(i>rD)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};var hD=uD,tt={clone:WL,create:yr,fromPoints:YL,fromPointsAndPlane:JL,invert:A3,isA:J0,isConvex:Q0,measureArea:e_,measureBoundingBox:F3,measureBoundingSphere:X3,measureSignedVolume:j3,plane:Kf,toPoints:Z3,toString:Q3,transform:iD,validate:hD};const dD=zL,pD=yo,mD=tt,gD=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const n=dD(t,{skipTriangulation:!0}).map(i=>{const s=i.map(r=>t[r]);return mD.create(s)});return pD(n)};var _D=gD;const vD=tt,xD=yo,yD=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const e=t.map((i,s)=>vD.create(i));return xD(e)};var MD=yD;const ED=Be,SD=dt,bD=tt,wD=yo,TD=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");const e=wD();e.transforms=SD.clone(t.slice(1,17));const n=t[21];let i=22,s=t.length-n*3;for(;s<t.length;){const r=t[i];i++;const o=[];for(let a=0;a<r;a++)o.push(ED.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(bD.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var AD=TD;const Qd=dt,RD=tt,CD=t=>(Qd.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>RD.transform(t.transforms,e)),t.transforms=Qd.create()),t);var PD=CD;const LD=PD,DD=t=>LD(t).polygons;var cl=DD;const UD=tt,ID=yo,ND=cl,FD=t=>{const n=ND(t).map(i=>UD.invert(i));return ID(n)};var OD=FD;const HD=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);var t_=HD;const BD=tt,zD=cl,VD=t=>zD(t).map(i=>BD.toPoints(i));var kD=VD;const GD=tt,$D=cl,WD=t=>{const e=$D(t);let n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+GD.toString(i)+`
`}),n};var XD=WD;const qD=tt,jD=t=>{const e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((c,f)=>c+f.vertices.length,0);let r=[-1,-1,-1,-1];t.color&&(r=t.color);const o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,l=a+i;return e.forEach(c=>{const f=qD.toPoints(c);o[a]=f.length,a++;for(let u=0;u<f.length;u++){const h=f[u];o[l+0]=h[0],o[l+1]=h[1],o[l+2]=h[2],l+=3}}),o};var YD=jD;const ep=dt,ZD=(t,e)=>{const n=ep.multiply(ep.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var KD=ZD;const JD=tt,QD=t_,eU=t=>{if(!QD(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(JD.validate),tU(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},tU=t=>{const e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{const o=`${s}`,a=`${i[(r+1)%i.length]}`,l=`${o}/${a}`,c=e.has(l)?e.get(l):0;e.set(l,c+1)})});const n=[];if(e.forEach((i,s)=>{const r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};var nU=eU,ut={clone:rL,create:yo,fromPointsConvex:_D,fromPoints:MD,fromCompactBinary:AD,invert:OD,isA:t_,toPoints:kD,toPolygons:cl,toString:XD,toCompactBinary:YD,transform:KD,validate:nU};const tp=ut,iU=tt,{isNumberArray:np}=At,sU=t=>{const e={center:[0,0,0],size:[2,2,2]},{center:n,size:i}=Object.assign({},e,t);if(!np(n,3))throw new Error("center must be an array of X, Y and Z values");if(!np(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(r=>r>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?tp.create():tp.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(r=>{const o=r[0].map(a=>[n[0]+i[0]/2*(2*!!(a&1)-1),n[1]+i[1]/2*(2*!!(a&2)-1),n[2]+i[2]/2*(2*!!(a&4)-1)]);return iU.create(o)}))};var Jf=sU;const rU=Jf,{isGTE:oU}=At,aU=t=>{const e={center:[0,0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!oU(i,0))throw new Error("size must be positive");return i=[i,i,i],rU({center:n,size:i})};var lU=aU;const{EPS:ip,TAU:Ci}=Ye,Pt=Be,cU=ut,fU=tt,{sin:uU,cos:hU}=Ft,{isGT:dU,isGTE:Pc,isNumberArray:Lc}=At,pU=t=>{const e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:Ci,segments:32};let{center:n,height:i,startRadius:s,startAngle:r,endRadius:o,endAngle:a,segments:l}=Object.assign({},e,t);if(!Lc(n,3))throw new Error("center must be an array of X, Y and Z values");if(!dU(i,0))throw new Error("height must be greater then zero");if(!Lc(s,2))throw new Error("startRadius must be an array of X and Y values");if(!s.every(v=>v>=0))throw new Error("startRadius values must be positive");if(!Lc(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(v=>v>=0))throw new Error("endRadius values must be positive");if(o.every(v=>v===0)&&s.every(v=>v===0))throw new Error("at least one radius must be positive");if(!Pc(r,0))throw new Error("startAngle must be positive");if(!Pc(a,0))throw new Error("endAngle must be positive");if(!Pc(l,4))throw new Error("segments must be four or more");r=r%Ci,a=a%Ci;let c=Ci;r<a&&(c=a-r),r>a&&(c=a+(Ci-r));const f=Math.min(s[0],s[1],o[0],o[1]),u=Math.acos((f*f+f*f-ip*ip)/(2*f*f));if(c<u)throw new Error("startAngle and endAngle do not define a significant rotation");const h=Math.floor(l*(c/Ci)),d=Pt.fromValues(0,0,-(i/2)),_=Pt.fromValues(0,0,i/2),g=Pt.subtract(Pt.create(),_,d),m=Pt.fromValues(1,0,0),p=Pt.fromValues(0,1,0),S=Pt.create(),y=Pt.create(),x=Pt.create(),M=(v,w,N)=>{const U=w*c+r;return Pt.scale(S,m,N[0]*hU(U)),Pt.scale(y,p,N[1]*uU(U)),Pt.add(S,S,y),Pt.scale(x,g,v),Pt.add(x,x,d),Pt.add(Pt.create(),S,x)},E=(...v)=>{const w=v.map(N=>Pt.add(Pt.create(),N,n));return fU.create(w)},T=[];for(let v=0;v<h;v++){const w=v/h;let N=(v+1)/h;c===Ci&&v===h-1&&(N=0),o[0]===s[0]&&o[1]===s[1]?(T.push(E(d,M(0,N,o),M(0,w,o))),T.push(E(M(0,N,o),M(1,N,o),M(1,w,o),M(0,w,o))),T.push(E(_,M(1,w,o),M(1,N,o)))):(s[0]>0&&s[1]>0&&T.push(E(d,M(0,N,s),M(0,w,s))),(s[0]>0||s[1]>0)&&T.push(E(M(0,w,s),M(0,N,s),M(1,w,o))),o[0]>0&&o[1]>0&&T.push(E(_,M(1,w,o),M(1,N,o))),(o[0]>0||o[1]>0)&&T.push(E(M(1,w,o),M(0,N,s),M(1,N,o))))}return c<Ci&&(T.push(E(d,M(0,0,s),_)),T.push(E(M(0,0,s),M(1,0,o),_)),T.push(E(d,_,M(0,1,s))),T.push(E(M(0,1,s),_,M(1,1,o)))),cU.create(T)};var n_=pU;const mU=ut,gU=n_,{isGTE:_U}=At,vU=t=>{const e={center:[0,0,0],height:2,radius:1,segments:32},{center:n,height:i,radius:s,segments:r}=Object.assign({},e,t);if(!_U(s,0))throw new Error("radius must be positive");return i===0||s===0?mU.create():gU({center:n,height:i,startRadius:[s,s],endRadius:[s,s],segments:r})};var i_=vU;const{TAU:sp}=Ye,Ce=Be,rp=ut,op=tt,{sin:ap,cos:lp}=Ft,{isGTE:xU,isNumberArray:cp}=At,yU=t=>{const e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!cp(n,3))throw new Error("center must be an array of X, Y and Z values");if(!cp(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(_=>_>=0))throw new Error("radius values must be positive");if(!xU(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return rp.create();const o=Ce.scale(Ce.create(),Ce.normalize(Ce.create(),r[0]),i[0]),a=Ce.scale(Ce.create(),Ce.normalize(Ce.create(),r[1]),i[1]),l=Ce.scale(Ce.create(),Ce.normalize(Ce.create(),r[2]),i[2]),c=Math.round(s/4);let f;const u=[],h=Ce.create(),d=Ce.create();for(let _=0;_<=s;_++){const g=sp*_/s,m=Ce.add(Ce.create(),Ce.scale(h,o,lp(g)),Ce.scale(d,a,ap(g)));if(_>0){let p,S;for(let y=0;y<=c;y++){const x=sp/4*y/c,M=lp(x),E=ap(x);if(y>0){let T=[],L;L=Ce.subtract(Ce.create(),Ce.scale(h,f,p),Ce.scale(d,l,S)),T.push(Ce.add(L,L,n)),L=Ce.subtract(Ce.create(),Ce.scale(h,m,p),Ce.scale(d,l,S)),T.push(Ce.add(L,L,n)),y<c&&(L=Ce.subtract(Ce.create(),Ce.scale(h,m,M),Ce.scale(d,l,E)),T.push(Ce.add(L,L,n))),L=Ce.subtract(Ce.create(),Ce.scale(h,f,M),Ce.scale(d,l,E)),T.push(Ce.add(L,L,n)),u.push(op.create(T)),T=[],L=Ce.add(Ce.create(),Ce.scale(h,f,p),Ce.scale(d,l,S)),T.push(Ce.add(Ce.create(),n,L)),L=Ce.add(L,Ce.scale(h,m,p),Ce.scale(d,l,S)),T.push(Ce.add(Ce.create(),n,L)),y<c&&(L=Ce.add(L,Ce.scale(h,m,M),Ce.scale(d,l,E)),T.push(Ce.add(Ce.create(),n,L))),L=Ce.add(L,Ce.scale(h,f,M),Ce.scale(d,l,E)),T.push(Ce.add(Ce.create(),n,L)),T.reverse(),u.push(op.create(T))}p=M,S=E}}f=m}return rp.create(u)};var s_=yU;const MU=ut,EU=tt,{isNumberArray:fp}=At,SU=t=>{const e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:n,faces:i,colors:s,orientation:r}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(n.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(s){if(!Array.isArray(s))throw new Error("colors must be an array");if(s.length!==i.length)throw new Error("faces and colors must have the same length")}n.forEach((a,l)=>{if(!fp(a,3))throw new Error(`point ${l} must be an array of X, Y, Z values`)}),i.forEach((a,l)=>{if(a.length<3)throw new Error(`face ${l} must contain 3 or more indexes`);if(!fp(a,a.length))throw new Error(`face ${l} must be an array of numbers`)}),r!=="outward"&&i.forEach(a=>a.reverse());const o=i.map((a,l)=>{const c=EU.create(a.map(f=>n[f]));return s&&s[l]&&(c.color=s[l]),c});return MU.create(o)};var r_=SU;const up=dt,hp=Be,dp=ut,bU=r_,{isGTE:pp}=At,wU=t=>{const e={radius:1,frequency:6};let{radius:n,frequency:i}=Object.assign({},e,t);if(!pp(n,0))throw new Error("radius must be positive");if(!pp(i,6))throw new Error("frequency must be six or more");if(n===0)return dp.create();i=Math.floor(i/6);const s=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],r=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(h,d,_)=>{const g=h[0],m=h[1],p=h[2];let S=_;const y=[],x=[];for(let M=0;M<d;M++)for(let E=0;E<d-M;E++){const T=M/d,L=(M+1)/d,v=E/(d-M),w=(E+1)/(d-M),N=d-M-1?E/(d-M-1):1,U=[];U[0]=a(a(g,m,v),p,T),U[1]=a(a(g,m,w),p,T),U[2]=a(a(g,m,N),p,L);for(let I=0;I<3;I++){const F=hp.length(U[I]);for(let H=0;H<3;H++)U[I][H]/=F}if(y.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3,E<d-M-1){const I=d-M-1?(E+1)/(d-M-1):1;U[0]=a(a(g,m,w),p,T),U[1]=a(a(g,m,I),p,L),U[2]=a(a(g,m,N),p,L);for(let F=0;F<3;F++){const H=hp.length(U[F]);for(let z=0;z<3;z++)U[F][z]/=H}y.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3}}return{points:y,triangles:x,offset:S}},a=(h,d,_)=>{const g=1-_,m=[];for(let p=0;p<3;p++)m[p]=h[p]*g+d[p]*_;return m};let l=[],c=[],f=0;for(let h=0;h<r.length;h++){const d=o([s[r[h][0]],s[r[h][1]],s[r[h][2]]],i,f);l=l.concat(d.points),c=c.concat(d.triangles),f=d.offset}let u=bU({points:l,faces:c,orientation:"inward"});return n!==1&&(u=dp.transform(up.fromScaling(up.create(),[n,n,n]),u)),u};var TU=wU;const AU=An,RU=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return AU.fromPoints({},t)};var CU=RU;const na=ht,PU=t=>{const e={points:[],paths:[],orientation:"counterclockwise"},{points:n,paths:i,orientation:s}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let r=n;Array.isArray(n[0])&&(Array.isArray(n[0][0])||(r=[n])),r.forEach((f,u)=>{if(!Array.isArray(f))throw new Error("list of points "+u+" must be an array");if(f.length<3)throw new Error("list of points "+u+" must contain three or more points");f.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+u+", point "+d+" must be an array");if(h.length<2)throw new Error("list of points "+u+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let f=0;o=r.map(u=>u.map(h=>f++))}const a=[];r.forEach(f=>f.forEach(u=>a.push(u)));let l=[];o.forEach(f=>{const u=f.map(d=>a[d]),h=na.fromPoints(u);l=l.concat(na.toSides(h))});let c=na.create(l);return s==="clockwise"&&(c=na.reverse(c)),c};var LU=PU;const Pi=We,mp=ht,{isNumberArray:gp}=At,DU=t=>{const e={center:[0,0],size:[2,2]},{center:n,size:i}=Object.assign({},e,t);if(!gp(n,2))throw new Error("center must be an array of X and Y values");if(!gp(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return mp.create();const s=[i[0]/2,i[1]/2],r=[s[0],-s[1]],o=[Pi.subtract(Pi.create(),n,s),Pi.add(Pi.create(),n,r),Pi.add(Pi.create(),n,s),Pi.subtract(Pi.create(),n,r)];return mp.fromPoints(o)};var Qf=DU;const{EPS:Sa,TAU:Ur}=Ye,Dc=We,gt=Be,_p=ut,ur=tt,{sin:UU,cos:IU}=Ft,{isGTE:vp,isNumberArray:xp}=At,NU=Jf,yp=(t,e,n,i,s,r)=>{const o=Ur/4*s/i,a=IU(o),l=UU(o),c=i-s;let f=n*a,u=e[2]-(n-n*l);r||(u=n-n*l-e[2]),f=f>Sa?f:0;const h=gt.add(gt.create(),t,[e[0]-n,e[1]-n,u]),d=gt.add(gt.create(),t,[n-e[0],e[1]-n,u]),_=gt.add(gt.create(),t,[n-e[0],n-e[1],u]),g=gt.add(gt.create(),t,[e[0]-n,n-e[1],u]),m=[],p=[],S=[],y=[];for(let x=0;x<=c;x++){const M=c>0?Ur/4*x/c:0,E=Dc.fromAngleRadians(Dc.create(),M);Dc.scale(E,E,f);const T=gt.fromVec2(gt.create(),E);m.push(gt.add(gt.create(),h,T)),gt.rotateZ(T,T,[0,0,0],Ur/4),p.push(gt.add(gt.create(),d,T)),gt.rotateZ(T,T,[0,0,0],Ur/4),S.push(gt.add(gt.create(),_,T)),gt.rotateZ(T,T,[0,0,0],Ur/4),y.push(gt.add(gt.create(),g,T))}return r?[m,p,S,y]:(m.reverse(),p.reverse(),S.reverse(),y.reverse(),[y,S,p,m])},Mp=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){const s=t[i],r=e[i];for(let o=0;o<s.length-1;o++)n.push(ur.create([s[o],s[o+1],r[o]])),o<r.length-1&&n.push(ur.create([r[o],s[o+1],r[o+1]]))}return n},Ep=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i];const o=s[s.length-1],a=r[r.length-1],l=(i+1)%t.length;s=t[l],r=e[l];const c=s[0],f=r[0];n.push(ur.create([o,c,f,a]))}return n},FU=(t,e)=>{t=[t[3],t[2],t[1],t[0]],t=t.map(r=>r.slice().reverse());const n=[];t.forEach(r=>{r.forEach(o=>n.push(o))});const i=[];e.forEach(r=>{r.forEach(o=>i.push(o))});const s=[];for(let r=0;r<i.length;r++){const o=(r+1)%i.length;s.push(ur.create([n[r],n[o],i[o],i[r]]))}return s},OU=t=>{const e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!xp(n,3))throw new Error("center must be an array of X, Y and Z values");if(!xp(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(c=>c>=0))throw new Error("size values must be positive");if(!vp(s,0))throw new Error("roundRadius must be positive");if(!vp(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return _p.create();if(s===0)return NU({center:n,size:i});if(i=i.map(c=>c/2),s>i[0]-Sa||s>i[1]-Sa||s>i[2]-Sa)throw new Error("roundRadius must be smaller than the radius of all dimensions");r=Math.floor(r/4);let o=null,a=null,l=[];for(let c=0;c<=r;c++){const f=yp(n,i,s,r,c,!0),u=yp(n,i,s,r,c,!1);if(c===0&&(l=l.concat(FU(u,f))),o&&(l=l.concat(Mp(o,f),Ep(o,f))),a&&(l=l.concat(Mp(a,u),Ep(a,u))),c===r){let h=f.map(d=>d[0]);l.push(ur.create(h)),h=u.map(d=>d[0]),l.push(ur.create(h))}o=f,a=u}return _p.create(l)};var HU=OU;const{EPS:BU,TAU:Sp}=Ye,ve=Be,bp=ut,zU=tt,{sin:wp,cos:Tp}=Ft,{isGTE:ia,isNumberArray:VU}=At,kU=i_,GU=t=>{const e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:n,height:i,radius:s,roundRadius:r,segments:o}=Object.assign({},e,t);if(!VU(n,3))throw new Error("center must be an array of X, Y and Z values");if(!ia(i,0))throw new Error("height must be positive");if(!ia(s,0))throw new Error("radius must be positive");if(!ia(r,0))throw new Error("roundRadius must be positive");if(r>s)throw new Error("roundRadius must be smaller than the radius");if(!ia(o,4))throw new Error("segments must be four or more");if(i===0||s===0)return bp.create();if(r===0)return kU({center:n,height:i,radius:s});const a=[0,0,-(i/2)],l=[0,0,i/2],c=ve.subtract(ve.create(),l,a),f=ve.length(c);if(2*r>f-BU)throw new Error("height must be larger than twice roundRadius");let u;Math.abs(c[0])>Math.abs(c[1])?u=ve.fromValues(0,1,0):u=ve.fromValues(1,0,0);const h=ve.scale(ve.create(),ve.normalize(ve.create(),c),r),d=ve.scale(ve.create(),ve.normalize(ve.create(),ve.cross(ve.create(),h,u)),s),_=ve.scale(ve.create(),ve.normalize(ve.create(),ve.cross(ve.create(),d,h)),s);ve.add(a,a,h),ve.subtract(l,l,h);const g=Math.floor(.25*o),m=E=>{const T=E.map(L=>ve.add(L,L,n));return zU.create(T)},p=[],S=ve.create(),y=ve.create();let x;for(let E=0;E<=o;E++){const T=Sp*E/o,L=ve.add(ve.create(),ve.scale(S,d,Tp(T)),ve.scale(y,_,wp(T)));if(E>0){let v=[];v.push(ve.add(ve.create(),a,L)),v.push(ve.add(ve.create(),a,x)),v.push(ve.add(ve.create(),l,x)),v.push(ve.add(ve.create(),l,L)),p.push(m(v));let w,N;for(let U=0;U<=g;U++){const I=Sp/4*U/g,F=Tp(I),H=wp(I);if(U>0){v=[];let z;z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,x,w),ve.scale(y,h,N))),v.push(z),z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,L,w),ve.scale(y,h,N))),v.push(z),U<g&&(z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,L,F),ve.scale(y,h,H))),v.push(z)),z=ve.add(ve.create(),a,ve.subtract(S,ve.scale(S,x,F),ve.scale(y,h,H))),v.push(z),p.push(m(v)),v=[],z=ve.add(ve.create(),ve.scale(S,x,w),ve.scale(y,h,N)),ve.add(z,z,l),v.push(z),z=ve.add(ve.create(),ve.scale(S,L,w),ve.scale(y,h,N)),ve.add(z,z,l),v.push(z),U<g&&(z=ve.add(ve.create(),ve.scale(S,L,F),ve.scale(y,h,H)),ve.add(z,z,l),v.push(z)),z=ve.add(ve.create(),ve.scale(S,x,F),ve.scale(y,h,H)),ve.add(z,z,l),v.push(z),v.reverse(),p.push(m(v))}w=F,N=H}}x=L}return bp.create(p)};var $U=GU;const{EPS:Ap,TAU:sa}=Ye,ft=We,Rp=ht,{isGTE:Cp,isNumberArray:Pp}=At,WU=Qf,XU=t=>{const e={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!Pp(n,2))throw new Error("center must be an array of X and Y values");if(!Pp(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(g=>g>=0))throw new Error("size values must be positive");if(!Cp(s,0))throw new Error("roundRadius must be positive");if(!Cp(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return Rp.create();if(s===0)return WU({center:n,size:i});if(i=i.map(g=>g/2),s>i[0]-Ap||s>i[1]-Ap)throw new Error("roundRadius must be smaller than the radius of all dimensions");const o=Math.floor(r/4),a=ft.add(ft.create(),n,[i[0]-s,i[1]-s]),l=ft.add(ft.create(),n,[s-i[0],i[1]-s]),c=ft.add(ft.create(),n,[s-i[0],s-i[1]]),f=ft.add(ft.create(),n,[i[0]-s,s-i[1]]),u=[],h=[],d=[],_=[];for(let g=0;g<=o;g++){const m=sa/4*g/o,p=ft.fromAngleRadians(ft.create(),m);ft.scale(p,p,s),u.push(ft.add(ft.create(),a,p)),ft.rotate(p,p,ft.create(),sa/4),h.push(ft.add(ft.create(),l,p)),ft.rotate(p,p,ft.create(),sa/4),d.push(ft.add(ft.create(),c,p)),ft.rotate(p,p,ft.create(),sa/4),_.push(ft.add(ft.create(),f,p))}return Rp.fromPoints(u.concat(h,d,_))};var qU=XU;const jU=s_,{isGTE:YU}=At,ZU=t=>{const e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!YU(i,0))throw new Error("radius must be positive");return i=[i,i,i],jU({center:n,radius:i,segments:s,axes:r})};var KU=ZU;const JU=Qf,{isGTE:QU}=At,eI=t=>{const e={center:[0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!QU(i,0))throw new Error("size must be positive");return i=[i,i],JU({center:n,size:i})};var tI=eI;const{TAU:o_}=Ye,kr=We,nI=ht,{isGT:iI,isGTE:ra,isNumberArray:sI}=At,rI=(t,e)=>t>0&&e>1&&e<t/2?Math.cos(Math.PI*e/t)/Math.cos(Math.PI*(e-1)/t):0,Lp=(t,e,n,i)=>{const s=o_/t,r=[];for(let o=0;o<t;o++){const a=kr.fromAngleRadians(kr.create(),s*o+n);kr.scale(a,a,e),kr.add(a,i,a),r.push(a)}return r},oI=t=>{const e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:n,vertices:i,outerRadius:s,innerRadius:r,density:o,startAngle:a}=Object.assign({},e,t);if(!sI(n,2))throw new Error("center must be an array of X and Y values");if(!ra(i,2))throw new Error("vertices must be two or more");if(!iI(s,0))throw new Error("outerRadius must be greater than zero");if(!ra(r,0))throw new Error("innerRadius must be greater than zero");if(!ra(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%o_,r===0){if(!ra(o,2))throw new Error("density must be two or more");r=s*rI(i,o)}const l=kr.clone(n),c=Lp(i,s,a,l),f=Lp(i,r,a+Math.PI/i,l),u=[];for(let h=0;h<i;h++)u.push(c[h]),u.push(f[h]);return nI.fromPoints(u)};var aI=oI;const a_=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(a_(n)):e.concat(n),[]);var Rn=a_;const lI=Rn,Dp=dt,Up=Gi,Ip=ht,Np=ut,Fp=An,fl=(t,...e)=>{const n={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:s}=Object.assign({},n,t);if(e=lI(e),e.length===0)throw new Error("wrong number of arguments");const r=Up.fromNormalAndPoint(Up.create(),s,i);if(Number.isNaN(r[0]))throw new Error("the given origin and normal do not define a proper plane");const o=Dp.mirrorByPlane(Dp.create(),r),a=e.map(l=>Fp.isA(l)?Fp.transform(o,l):Ip.isA(l)?Ip.transform(o,l):Np.isA(l)?Np.transform(o,l):l);return a.length===1?a[0]:a},cI=(...t)=>fl({normal:[1,0,0]},t),fI=(...t)=>fl({normal:[0,1,0]},t),uI=(...t)=>fl({normal:[0,0,1]},t);var Gr={mirror:fl,mirrorX:cI,mirrorY:fI,mirrorZ:uI};const Op=Gi,ts=Be,hI=t=>{const e=t.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const n=e.reduce((o,a)=>ts.add(ts.create(),o,a[0]),ts.create());ts.scale(n,n,1/e.length);let i,s=0;e.forEach(o=>{if(!ts.equals(o[0],o[1])){const a=ts.squaredDistance(n,o[0]);a>s&&(i=o,s=a)}});const r=e.find(o=>ts.equals(o[1],i[0]));return Op.fromPoints(Op.create(),r[0],i[0],i[1])};var l_=hI;const dI=t=>(t||(t=[]),{edges:t});var Ms=dI;const pI=Ms,Hp=Be,mI=(...t)=>{let e,n;return t.length===1?(e=pI(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[Hp.clone(i[0]),Hp.clone(i[1])]),e};var gI=mI;const _I=Be,vI=(t,e)=>{const n=t.edges,i=e.edges;return n.length!==i.length?!1:n.reduce((r,o,a)=>{const l=i[a],c=_I.squaredDistance(o[0],l[0]);return r&&c<Number.EPSILON},!0)};var xI=vI;const oa=Be,yI=Ms,MI=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");if(t.length<3)throw new Error("the given points must contain THREE or more points");const e=[];let n=t[t.length-1];return t.forEach(i=>{i.length===2&&e.push([oa.fromVec2(oa.create(),n),oa.fromVec2(oa.create(),i)]),i.length===3&&e.push([n,i]),n=i}),yI(e)};var EI=MI;const aa=Be,SI=Ms,bI=t=>{if(!Array.isArray(t))throw new Error("the given sides must be an array");const e=[];return t.forEach(n=>{e.push([aa.fromVec2(aa.create(),n[0]),aa.fromVec2(aa.create(),n[1])])}),SI(e)};var wI=bI;const TI=t=>!!(t&&typeof t=="object"&&"edges"in t&&Array.isArray(t.edges));var AI=TI;const RI=Ms,CI=(...t)=>{let e,n;return t.length===1?(e=RI(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[i[1],i[0]]),e};var PI=CI;const LI=t=>t.edges;var DI=LI;const UI=(t,e)=>{let n,i,s,r,o,a=1;do{i=t,t=null;let l=null;for(o=0;i;){o++,s=i;let c=0;for(n=0;n<a&&(c++,s=s.nextZ,!!s);n++);let f=a;for(;c>0||f>0&&s;)c!==0&&(f===0||!s||e(i)<=e(s))?(r=i,i=i.nextZ,c--):(r=s,s=s.nextZ,f--),l?l.nextZ=r:t=r,r.prevZ=l,l=r;i=s}l.nextZ=null,a*=2}while(o>1);return t};var II=UI;const NI=II;let c_=class{constructor(e,n,i){this.i=e,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}};const FI=(t,e,n,i)=>{const s=new c_(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s},OI=t=>{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)};var f_={Node:c_,insertNode:FI,removeNode:OI,sortLinked:NI};const HI=(t,e,n,i,s,r,o,a)=>(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(r-a)-(s-o)*(i-a)>=0,BI=(t,e,n)=>(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);var eu={area:BI,pointInTriangle:HI};const{Node:Bp,insertNode:zp,removeNode:Na}=f_,{area:nn}=eu,zI=(t,e,n,i,s)=>{let r;if(s===XI(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=zp(o,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=zp(o,t[o],t[o+1],r);return r&&ul(r,r.next)&&(Na(r),r=r.next),r},u_=(t,e)=>{if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(ul(n,n.next)||nn(n.prev,n,n.next)===0)){if(Na(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e},VI=(t,e,n)=>{let i=t;do{const s=i.prev,r=i.next.next;!ul(s,r)&&h_(s,i,i.next,r)&&fo(s,r)&&fo(r,s)&&(e.push(s.i/n),e.push(i.i/n),e.push(r.i/n),Na(i),Na(i.next),i=t=r),i=i.next}while(i!==t);return u_(i)},kI=(t,e)=>{let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&h_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1},fo=(t,e)=>nn(t.prev,t,t.next)<0?nn(t,e,t.next)>=0&&nn(t,t.prev,e)>=0:nn(t,e,t.prev)<0||nn(t,t.next,e)<0,GI=(t,e)=>{let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i},$I=(t,e)=>{const n=new Bp(t.i,t.x,t.y),i=new Bp(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i},WI=(t,e)=>t.next.i!==e.i&&t.prev.i!==e.i&&!kI(t,e)&&(fo(t,e)&&fo(e,t)&&GI(t,e)&&(nn(t.prev,t,e.prev)||nn(t,e.prev,e))||ul(t,e)&&nn(t.prev,t,t.next)>0&&nn(e.prev,e,e.next)>0),h_=(t,e,n,i)=>{const s=Math.sign(nn(t,e,n)),r=Math.sign(nn(t,e,i)),o=Math.sign(nn(n,i,t)),a=Math.sign(nn(n,i,e));return!!(s!==r&&o!==a||s===0&&la(t,n,e)||r===0&&la(t,i,e)||o===0&&la(n,t,i)||a===0&&la(n,e,i))},la=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),XI=(t,e,n,i)=>{let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s},ul=(t,e)=>t.x===e.x&&t.y===e.y;var d_={cureLocalIntersections:VI,filterPoints:u_,isValidDiagonal:WI,linkedPolygon:zI,locallyInside:fo,splitPolygon:$I};const{filterPoints:gf,linkedPolygon:qI,locallyInside:jI,splitPolygon:YI}=d_,{area:Vp,pointInTriangle:ZI}=eu,KI=(t,e,n,i)=>{const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=qI(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(tN(c))}s.sort((r,o)=>r.x-o.x);for(let r=0;r<s.length;r++)n=JI(s[r],n),n=gf(n,n.next);return n},JI=(t,e)=>{const n=QI(t,e);if(!n)return e;const i=YI(n,t),s=gf(n,n.next);return gf(i,i.next),e===n?s:e},QI=(t,e)=>{let n=e;const i=t.x,s=t.y;let r=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const u=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>r){if(r=u,u===i){if(s===n.y)return n;if(s===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===r)return o;const a=o,l=o.x,c=o.y;let f=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&ZI(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){const u=Math.abs(s-n.y)/(i-n.x);jI(n,t)&&(u<f||u===f&&(n.x>o.x||n.x===o.x&&eN(o,n)))&&(o=n,f=u)}n=n.next}while(n!==a);return o},eN=(t,e)=>Vp(t.prev,t,e.prev)<0&&Vp(e.next,t,t.next)<0,tN=t=>{let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n};var nN=KI;const iN=nN,{removeNode:sN,sortLinked:rN}=f_,{cureLocalIntersections:oN,filterPoints:Fa,isValidDiagonal:aN,linkedPolygon:lN,splitPolygon:cN}=d_,{area:ls,pointInTriangle:$r}=eu,fN=(t,e,n=2)=>{const i=e&&e.length,s=i?e[0]*n:t.length;let r=lN(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,u;if(i&&(r=iN(t,e,r,n)),t.length>80*n){a=c=t[0],l=f=t[1];for(let h=n;h<s;h+=n){const d=t[h],_=t[h+1];d<a&&(a=d),_<l&&(l=_),d>c&&(c=d),_>f&&(f=_)}u=Math.max(c-a,f-l),u=u!==0?1/u:0}return uo(r,o,n,a,l,u),o},uo=(t,e,n,i,s,r,o)=>{if(!t)return;!o&&r&&pN(t,i,s,r);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,r?hN(t,i,s,r):uN(t)){e.push(l.i/n),e.push(t.i/n),e.push(c.i/n),sN(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=oN(Fa(t),e,n),uo(t,e,n,i,s,r,2)):o===2&&dN(t,e,n,i,s,r):uo(Fa(t),e,n,i,s,r,1);break}}},uN=t=>{const e=t.prev,n=t,i=t.next;if(ls(e,n,i)>=0)return!1;let s=t.next.next;for(;s!==t.prev;){if($r(e.x,e.y,n.x,n.y,i.x,i.y,s.x,s.y)&&ls(s.prev,s,s.next)>=0)return!1;s=s.next}return!0},hN=(t,e,n,i)=>{const s=t.prev,r=t,o=t.next;if(ls(s,r,o)>=0)return!1;const a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,l=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,c=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,f=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,u=_f(a,l,e,n,i),h=_f(c,f,e,n,i);let d=t.prevZ,_=t.nextZ;for(;d&&d.z>=u&&_&&_.z<=h;){if(d!==t.prev&&d!==t.next&&$r(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&ls(d.prev,d,d.next)>=0||(d=d.prevZ,_!==t.prev&&_!==t.next&&$r(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&ls(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;d&&d.z>=u;){if(d!==t.prev&&d!==t.next&&$r(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&ls(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;_&&_.z<=h;){if(_!==t.prev&&_!==t.next&&$r(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&ls(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0},dN=(t,e,n,i,s,r)=>{let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&aN(o,a)){let l=cN(o,a);o=Fa(o,o.next),l=Fa(l,l.next),uo(o,e,n,i,s,r),uo(l,e,n,i,s,r);return}a=a.next}o=o.next}while(o!==t)},pN=(t,e,n,i)=>{let s=t;do s.z===null&&(s.z=_f(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,rN(s,r=>r.z)},_f=(t,e,n,i,s)=>(t=32767*(t-n)*s,e=32767*(e-i)*s,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1);var mN=fN;const{NEPS:Uc}=Ye,gN=(t,e)=>Math.abs(t[0]-e[0])<=Uc&&Math.abs(t[1]-e[1])<=Uc&&Math.abs(t[2]-e[2])<=Uc;var _N=gN;const vN=t=>{let e=0;for(let n=0;n<t.length;n++){const i=(n+1)%t.length;e+=t[n][0]*t[i][1],e-=t[i][0]*t[n][1]}return e/2};var p_=vN;const xN=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};var yN=xN;const MN=(t,e,n,i,s,r)=>{const a=1/(t*i-e*n);let l=s*i-e*r,c=-s*n+t*r;return l*=a,c*=a,[l,c]};var EN=MN,hl={area:p_,cos:Ft.cos,sin:Ft.sin,solve2Linear:EN};const SN=p_,bN=t=>SN(t.vertices);var wN=bN;const TN=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var AN=TN;const RN=AN,CN=t=>{const e=t.vertices.slice().reverse();return RN(e)};var PN=CN;const LN=wN,DN=PN,UN=(t,e)=>{if(t.length===0)return 0;const n=e.vertices;return n.length<3?0:(LN(e)<0&&(e=DN(e)),t.reduce((s,r)=>s+IN(r,n),0)===t.length?1:0)},IN=(t,e)=>{const n=e.length,i=t[0],s=t[1];let r=e[n-1],o=e[0],a=r[1]>s,l=0,c=0;for(let f=n+1;--f;){const u=o[1]>s;if(a!==u){const h=r[0]>i,d=o[0]>i;(h&&d||o[0]-(o[1]-s)*(r[0]-o[0])/(r[1]-o[1])>=i)&&(l=!l)}a=u,r=o,o=e[++c]}return l};var NN=UN,FN={arePointsInside:NN};const{area:ON}=hl,{toOutlines:HN}=ht,{arePointsInside:BN}=FN,zN=t=>{const e=HN(t),n=[],i=[];e.forEach((o,a)=>{const l=ON(o);l<0?i.push(a):l>0&&n.push(a)});const s=[],r=[];return n.forEach((o,a)=>{const l=e[o];s[a]=[],i.forEach((c,f)=>{const u=e[c];BN([u[0]],{vertices:l})&&(s[a].push(c),r[f]||(r[f]=[]),r[f].push(a))})}),i.forEach((o,a)=>{if(r[a]&&r[a].length>1){const l=VN(r[a],c=>s[c].length);r[a].forEach((c,f)=>{f!==l&&(s[c]=s[c].filter(u=>u!==o))})}}),s.map((o,a)=>({solid:e[n[a]],holes:o.map(l=>e[l])}))},VN=(t,e)=>{let n,i;return t.forEach((s,r)=>{const o=e(s);(i===void 0||o<i)&&(n=r,i=o)}),n};var kN=zN;const GN=ht,kp=Gi,$N=We,Ut=Be,WN=l_,XN=kN;let qN=class{constructor(e){this.plane=WN(e);const n=Ut.orthogonal(Ut.create(),this.plane),i=Ut.cross(Ut.create(),this.plane,n);this.v=Ut.normalize(i,i),this.u=Ut.cross(Ut.create(),this.v,this.plane),this.basisMap=new Map;const s=e.edges.map(o=>o.map(a=>this.to2D(a))),r=GN.create(s);this.roots=XN(r)}to2D(e){const n=$N.fromValues(Ut.dot(e,this.u),Ut.dot(e,this.v));return this.basisMap.set(n,e),n}to3D(e){const n=this.basisMap.get(e);if(n)return n;{console.log("Warning: point not in original slice");const i=Ut.scale(Ut.create(),this.u,e[0]),s=Ut.scale(Ut.create(),this.v,e[1]),r=Ut.scale(Ut.create(),kp,kp[3]),o=Ut.add(i,i,r);return Ut.add(s,s,o)}}};var jN=qN;const YN=tt,ZN=mN,KN=jN,JN=t=>{const e=new KN(t),n=[];return e.roots.forEach(({solid:i,holes:s})=>{let r=i.length;const o=[];s.forEach((u,h)=>{o.push(r),r+=u.length});const a=[i,...s].flat(),l=a.flat(),c=u=>e.to3D(a[u]),f=ZN(l,o);for(let u=0;u<f.length;u+=3){const h=f.slice(u,u+3).map(c);n.push(YN.fromPointsAndPlane(h,e.plane))}}),n};var QN=JN;const Gp=Be,eF=t=>t.reduce((e,n)=>e+=`[${Gp.toString(n[0])}, ${Gp.toString(n[1])}], `,""),tF=t=>`[${eF(t.edges)}]`;var nF=tF;const ca=Be,iF=Ms,sF=(t,e)=>{const n=e.edges.map(i=>[ca.transform(ca.create(),i[0],t),ca.transform(ca.create(),i[1],t)]);return iF(n)};var rF=sF,tu={calculatePlane:l_,clone:gI,create:Ms,equals:xI,fromPoints:EI,fromSides:wI,isA:AI,reverse:PI,toEdges:DI,toPolygons:QN,toString:nF,transform:rF};const $p=Be,oF=Ms,aF=t=>{if(!t.edges)return t;let e=t.edges;const n=new Map,i=new Map;e=e.filter(o=>!$p.equals(o[0],o[1])),e.forEach(o=>{const a=o[0].toString(),l=o[1].toString();n.set(a,o[0]),n.set(l,o[1]),i.set(a,(i.get(a)||0)+1),i.set(l,(i.get(l)||0)-1)});const s=[],r=[];return i.forEach((o,a)=>{o<0&&s.push(a),o>0&&r.push(a)}),s.forEach(o=>{const a=n.get(o);let l=1/0,c;r.forEach(f=>{const u=n.get(f),h=$p.distance(a,u);h<l&&(l=h,c=u)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${c} distance ${l}`),e=e.map(f=>f[0].toString()===o?[c,f[1]]:f[1].toString()===o?[f[0],c]:f)}),oF(e)};var lF=aF;const{EPS:Wp}=Ye,Vs=Be,fa=tt,Xp=tu,vf=(t,e)=>t===e?t:t<e?vf(e,t):e===1?1:e===0?t:vf(e,t%e),cF=(t,e)=>t*e/vf(t,e),qp=(t,e)=>{const n=t/e.length;if(n===1)return e;const i=Vs.fromValues(n,n,n),s=[];return e.forEach(r=>{const o=Vs.subtract(Vs.create(),r[1],r[0]);Vs.divide(o,o,i);let a=r[0];for(let l=1;l<=n;++l){const c=Vs.add(Vs.create(),a,o);s.push([a,c]),a=c}}),s},jp=Wp*Wp/2*Math.sin(Math.PI/3),fF=(t,e)=>{let n=Xp.toEdges(t),i=Xp.toEdges(e);if(n.length!==i.length){const r=cF(n.length,i.length);r!==n.length&&(n=qp(r,n)),r!==i.length&&(i=qp(r,i))}const s=[];return n.forEach((r,o)=>{const a=i[o],l=fa.create([r[0],r[1],a[1]]),c=fa.measureArea(l);Number.isFinite(c)&&c>jp&&s.push(l);const f=fa.create([r[0],a[1],a[0]]),u=fa.measureArea(f);Number.isFinite(u)&&u>jp&&s.push(f)}),s};var uF=fF;const Yp=dt,Zp=ht,hF=ut,xf=tt,Fi=tu,dF=lF,Kp=uF,pF=(t,e,n)=>{let i=null;return Zp.isA(n)&&(i=Fi.fromSides(Zp.toSides(n))),xf.isA(n)&&(i=Fi.fromPoints(xf.toPoints(n))),t===0||t===1?Fi.transform(Yp.fromTranslation(Yp.create(),[0,0,t]),i):null},mF=(t,e)=>{const n={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:pF},{numberOfSlices:i,capStart:s,capEnd:r,close:o,repair:a,callback:l}=Object.assign({},n,t);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=dF(e));const c=i-1;let f=null,u=null,h=null,d=[];for(let _=0;_<i;_++){const g=l(_/c,_,e);if(g){if(!Fi.isA(g))throw new Error("the callback function must return slice objects");if(Fi.toEdges(g).length===0)throw new Error("the callback function must return slices with one or more edges");h&&(d=d.concat(Kp(h,g))),_===0&&(f=g),_===i-1&&(u=g),h=g}}if(r){const _=Fi.toPolygons(u);d=d.concat(_)}if(s){const _=Fi.toPolygons(f).map(xf.invert);d=d.concat(_)}return!s&&!r&&o&&!Fi.equals(u,f)&&(d=d.concat(Kp(u,f))),hF.create(d)};var gF=mF;const{TAU:un}=Ye,Ir=dt,{mirrorX:_F}=Gr,ua=ht,Ic=tu,vF=gF,xF=(t,e)=>{const n={segments:12,startAngle:0,angle:un,overflow:"cap"};let{segments:i,startAngle:s,angle:r,overflow:o}=Object.assign({},n,t);if(i<3)throw new Error("segments must be greater then 3");s=Math.abs(s)>un?s%un:s,r=Math.abs(r)>un?r%un:r;let a=s+r;if(a=Math.abs(a)>un?a%un:a,a<s){const S=s;s=a,a=S}let l=a-s;if(l<=0&&(l=un),Math.abs(l)<un){const S=un/i;i=Math.floor(Math.abs(l)/S),Math.abs(l)>i*S&&i++}let c=ua.toSides(e);if(c.length===0)throw new Error("the given geometry cannot be empty");const f=c.filter(S=>S[0][0]<0),u=c.filter(S=>S[0][0]>=0);f.length>0&&u.length>0&&o==="cap"&&(f.length>u.length?(c=c.map(S=>{let y=S[0],x=S[1];return y=[Math.min(y[0],0),y[1]],x=[Math.min(x[0],0),x[1]],[y,x]}),e=ua.create(c),e=_F(e)):u.length>=f.length&&(c=c.map(S=>{let y=S[0],x=S[1];return y=[Math.max(y[0],0),y[1]],x=[Math.max(x[0],0),x[1]],[y,x]}),e=ua.create(c)));const d=l/i,_=Math.abs(l)<un,g=Ic.fromSides(ua.toSides(e));Ic.reverse(g,g);const m=Ir.create(),p=(S,y,x)=>{let M=d*y+s;return l===un&&y===i&&(M=s),Ir.multiply(m,Ir.fromZRotation(m,M),Ir.fromXRotation(Ir.create(),un/4)),Ic.transform(m,x)};return t={numberOfSlices:i+1,capStart:_,capEnd:_,close:!_,callback:p},vF(t,g)};var yF=xF;const MF=Rn,Jp=dt,Qp=ht,em=ut,tm=An,dl=(t,...e)=>{if(!Array.isArray(t))throw new Error("angles must be an array");if(e=MF(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=t[2],i=t[1],s=t[0],r=Jp.fromTaitBryanRotation(Jp.create(),n,i,s),o=e.map(a=>tm.isA(a)?tm.transform(r,a):Qp.isA(a)?Qp.transform(r,a):em.isA(a)?em.transform(r,a):a);return o.length===1?o[0]:o},EF=(t,...e)=>dl([t,0,0],e),SF=(t,...e)=>dl([0,t,0],e),bF=(t,...e)=>dl([0,0,t],e);var Wr={rotate:dl,rotateX:EF,rotateY:SF,rotateZ:bF};const wF=Rn,nm=dt,im=ht,sm=ut,rm=An,pl=(t,...e)=>{if(!Array.isArray(t))throw new Error("offset must be an array");if(e=wF(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=nm.fromTranslation(nm.create(),t),i=e.map(s=>rm.isA(s)?rm.transform(n,s):im.isA(s)?im.transform(n,s):sm.isA(s)?sm.transform(n,s):s);return i.length===1?i[0]:i},TF=(t,...e)=>pl([t,0,0],e),AF=(t,...e)=>pl([0,t,0],e),RF=(t,...e)=>pl([0,0,t],e);var Mt={translate:pl,translateX:TF,translateY:AF,translateZ:RF};const{TAU:CF}=Ye,PF=yF,{rotate:LF}=Wr,{translate:DF}=Mt,UF=z0,{isGT:Nc,isGTE:Fc}=At,IF=t=>{const e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:CF},{innerRadius:n,innerSegments:i,outerRadius:s,outerSegments:r,innerRotation:o,startAngle:a,outerRotation:l}=Object.assign({},e,t);if(!Nc(n,0))throw new Error("innerRadius must be greater than zero");if(!Fc(i,3))throw new Error("innerSegments must be three or more");if(!Nc(s,0))throw new Error("outerRadius must be greater than zero");if(!Fc(r,3))throw new Error("outerSegments must be three or more");if(!Fc(a,0))throw new Error("startAngle must be positive");if(!Nc(l,0))throw new Error("outerRotation must be greater than zero");if(n>=s)throw new Error("inner circle is too large to rotate about the outer circle");let c=UF({radius:n,segments:i});return o!==0&&(c=LF([0,0,o],c)),c=DF([s,0],c),PF({startAngle:a,angle:l,segments:r},c)};var NF=IF;const{NEPS:hr}=Ye,Nr=We,FF=ht,{isNumberArray:OF}=At,yf=(t,e,n)=>Math.acos((t*t+e*e-n*n)/(2*t*e)),HF=(t,e,n)=>e>hr?Math.sqrt(t*t+n*n-2*t*n*Math.cos(e)):Math.sqrt((t-n)*(t-n)+t*n*e*e*(1-e*e/12)),BF=t=>{if(Math.abs(t[0]+t[1]+t[2]-Math.PI)>hr)throw new Error("AAA triangles require angles that sum to PI");const n=t[0],i=t[1],s=Math.PI-n-i,r=1,o=r/Math.sin(s)*Math.sin(n),a=r/Math.sin(s)*Math.sin(i);return Mr(n,i,s,o,a,r)},zF=t=>{const e=t[0],n=t[1],i=Math.PI+hr-e-n;if(i<hr)throw new Error("AAS triangles require angles that sum to PI");const s=t[2],r=s/Math.sin(e)*Math.sin(n),o=s/Math.sin(e)*Math.sin(i);return Mr(e,n,i,s,r,o)},VF=t=>{const e=t[0],n=t[2],i=Math.PI+hr-e-n;if(i<hr)throw new Error("ASA triangles require angles that sum to PI");const s=t[1],r=s/Math.sin(i)*Math.sin(e),o=s/Math.sin(i)*Math.sin(n);return Mr(e,n,i,r,o,s)},kF=t=>{const e=t[0],n=t[1],i=t[2],s=HF(e,n,i),r=yf(s,e,i),o=Math.PI-r-n;return Mr(r,n,o,i,s,e)},GF=t=>{const e=t[0],n=t[1],i=t[2],s=Math.asin(n*Math.sin(i)/e),r=Math.PI-s-i,o=e/Math.sin(i)*Math.sin(r);return Mr(s,r,i,n,o,e)},$F=t=>{const e=t[1],n=t[2],i=t[0];if(e+n<=i||n+i<=e||i+e<=n)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const s=yf(n,i,e),r=yf(i,e,n),o=Math.PI-s-r;return Mr(s,r,o,e,n,i)},Mr=(t,e,n,i,s,r)=>{const o=Nr.fromValues(0,0),a=Nr.fromValues(r,0),l=Nr.fromValues(i,0);return Nr.add(l,Nr.rotate(l,l,[0,0],Math.PI-e),a),FF.fromPoints([o,a,l])},WF=t=>{const e={type:"SSS",values:[1,1,1]};let{type:n,values:i}=Object.assign({},e,t);if(typeof n!="string")throw new Error("triangle type must be a string");if(n=n.toUpperCase(),!((n[0]==="A"||n[0]==="S")&&(n[1]==="A"||n[1]==="S")&&(n[2]==="A"||n[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!OF(i,3))throw new Error("triangle values must contain three values");if(!i.every(s=>s>0))throw new Error("triangle values must be greater than zero");switch(n){case"AAA":return BF(i);case"AAS":return zF(i);case"ASA":return VF(i);case"SAS":return kF(i);case"SSA":return GF(i);case"SSS":return $F(i);default:throw new Error("invalid triangle type, try again")}};var XF=WF,hn={arc:fP,circle:z0,cube:lU,cuboid:Jf,cylinder:i_,cylinderElliptic:n_,ellipse:B0,ellipsoid:s_,geodesicSphere:TU,line:CU,polygon:LU,polyhedron:r_,rectangle:Qf,roundedCuboid:HU,roundedCylinder:$U,roundedRectangle:qU,sphere:KU,square:tI,star:aI,torus:NF,triangle:XF};const qF=ht,jF=ut,YF=An,ZF=t=>{let e;for(const n of t){let i=0;if(qF.isA(n)&&(i=1),jF.isA(n)&&(i=2),YF.isA(n)&&(i=3),e&&i!==e)return!1;e=i}return!0};var KF=ZF,nu={geom2:ht,geom3:ut,path2:An,poly3:tt};const{EPS:JF}=Ye,QF=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return JF*n/e};var eO=QF;const tO=Rn,Zn=We,Fr=Be,m_=ht,g_=ut,__=An,om=tt,dr=new WeakMap,nO=t=>{let e=dr.get(t);if(e)return e;const n=__.toPoints(t);let i;n.length===0?i=Zn.create():i=Zn.clone(n[0]);let s=Zn.clone(i);return n.forEach(r=>{Zn.min(i,i,r),Zn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],dr.set(t,e),e},iO=t=>{let e=dr.get(t);if(e)return e;const n=m_.toPoints(t);let i;n.length===0?i=Zn.create():i=Zn.clone(n[0]);let s=Zn.clone(i);return n.forEach(r=>{Zn.min(i,i,r),Zn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],dr.set(t,e),e},sO=t=>{let e=dr.get(t);if(e)return e;const n=g_.toPolygons(t);let i=Fr.create();if(n.length>0){const r=om.toPoints(n[0]);Fr.copy(i,r[0])}let s=Fr.clone(i);return n.forEach(r=>{om.toPoints(r).forEach(o=>{Fr.min(i,i,o),Fr.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],dr.set(t,e),e},rO=(...t)=>{if(t=tO(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>__.isA(n)?nO(n):m_.isA(n)?iO(n):g_.isA(n)?sO(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};var iu=rO;const oO=Rn,{geom2:aO,geom3:lO,path2:cO}=nu,su=eO,ru=iu,fO=t=>su(ru(t),2),uO=t=>su(ru(t),2),hO=t=>su(ru(t),3),dO=(...t)=>{if(t=oO(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>cO.isA(n)?fO(n):aO.isA(n)?uO(n):lO.isA(n)?hO(n):0);return e.length===1?e[0]:e};var ou=dO;const am=We,pO=ht,mO=(t,e)=>{if(e.vertices.length<4)return null;const n=[],i=e.vertices.filter((o,a)=>o[2]>0?(n.push(a),!0):!1);if(i.length!==2)throw new Error("Assertion failed: fromFakePolygon: not enough points found");const s=i.map(o=>{const a=Math.round(o[0]/t)*t+0,l=Math.round(o[1]/t)*t+0;return am.fromValues(a,l)});if(am.equals(s[0],s[1]))return null;const r=n[1]-n[0];if(r===1||r===3)r===1&&s.reverse();else throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");return s},gO=(t,e)=>{const n=e.map(i=>mO(t,i)).filter(i=>i!==null);return pO.create(n)};var _O=gO;const Li=Be,vO=ht,xO=ut,yO=tt,MO=(t,e,n)=>{const i=[Li.fromVec2(Li.create(),n[0],t),Li.fromVec2(Li.create(),n[1],t),Li.fromVec2(Li.create(),n[1],e),Li.fromVec2(Li.create(),n[0],e)];return yO.create(i)},EO=(t,e)=>{const i=vO.toSides(e).map(r=>MO(t.z0,t.z1,r));return xO.create(i)};var SO=EO;const bO=()=>[0,1,0];var au=bO;const wO=au,TO=t=>{const e=wO();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var AO=TO;const Oc=We,RO=t=>{const e=Oc.normal(Oc.create(),t);return Oc.negate(e,e),e};var lu=RO;const lm=We,CO=t=>lm.scale(lm.create(),t,t[2]);var ml=CO;const Or=We,PO=lu,LO=ml,DO=(t,e)=>{const n=LO(t),i=PO(t),s=Or.subtract(Or.create(),e,n),r=Or.dot(s,i);return Or.scale(s,i,r),Or.add(s,s,n),s};var UO=DO;const IO=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var v_=IO;const NO=We,FO=(t,e)=>{let n=NO.dot(e,t);return n=Math.abs(n-t[2]),n};var OO=FO;const HO=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var BO=HO;const Hr=We,zO=(t,e,n)=>{const i=Hr.subtract(Hr.create(),n,e);Hr.normal(i,i),Hr.normalize(i,i);const s=Hr.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};var x_=zO;const VO=au,kO=(t,e,n)=>{const i=VO();return i[0]=t,i[1]=e,i[2]=n,i};var y_=kO;const GO=We,{solve2Linear:$O}=hl,WO=(t,e)=>{const n=$O(t[0],t[1],e[0],e[1],t[2],e[2]);return GO.clone(n)};var XO=WO;const cm=We,qO=v_,jO=y_,YO=(t,e)=>{const n=cm.negate(cm.create(),e),i=-e[2];return qO(t,jO(n[0],n[1],i))};var ZO=YO;const KO=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;var JO=KO;const fm=We,QO=x_,eH=ml,tH=lu,nH=(t,e,n)=>{const i=eH(e),s=tH(e);return fm.transform(i,i,n),fm.transform(s,s,n),QO(t,i,s)};var iH=nH;const sH=ml,rH=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=sH(t)[0]),n};var oH=rH,aH={clone:AO,closestPoint:UO,copy:v_,create:au,direction:lu,distanceToPoint:OO,equals:BO,fromPoints:x_,fromValues:y_,intersectPointOfLines:XO,origin:ml,reverse:ZO,toString:JO,transform:iH,xAtY:oH};const um=dt,lH=We,Et=Be,M_=function(t,e){arguments.length<2&&(e=Et.orthogonal(Et.create(),t)),this.v=Et.normalize(Et.create(),Et.cross(Et.create(),t,e)),this.u=Et.cross(Et.create(),this.v,t),this.plane=t,this.planeorigin=Et.scale(Et.create(),t,t[3])};M_.prototype={getProjectionMatrix:function(){return um.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const t=Et.scale(Et.create(),this.plane,this.plane[3]);return um.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return lH.fromValues(Et.dot(t,this.u),Et.dot(t,this.v))},to3D:function(t){const e=Et.scale(Et.create(),this.u,t[0]),n=Et.scale(Et.create(),this.v,t[1]),i=Et.add(e,e,this.planeorigin);return Et.add(n,n,i)}};var cH=M_;const fH=(t,e)=>t-e;var uH=fH;const hH=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){const r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};var dH=hH;const{TAU:V4}=Ye;var pH={fnNumberSort:uH,insertSorted:dH};const{EPS:hi}=Ye,Di=aH,In=We,mH=cH,ks=yN,{insertSorted:gH,fnNumberSort:_H}=pH,hm=tt,vH=t=>{if(t.length<2)return t;const e=[],n=t.length,i=hm.plane(t[0]),s=new mH(i),r=[],o=[],a=new Map,l=new Map,c=new Map,f=10/hi;for(let _=0;_<n;_++){const g=t[_];let m=[],p=g.vertices.length,S=-1;if(p>0){let y,x;for(let M=0;M<p;M++){let E=s.to2D(g.vertices[M]);const T=Math.floor(E[1]*f);let L;c.has(T)?L=c.get(T):c.has(T+1)?L=c.get(T+1):c.has(T-1)?L=c.get(T-1):(L=E[1],c.set(T,E[1])),E=In.fromValues(E[0],L),m.push(E);const v=E[1];(M===0||v<y)&&(y=v,S=M),(M===0||v>x)&&(x=v);let w=l.get(v);w||(w={},l.set(v,w)),w[_]=!0}if(y>=x)m=[],p=0,S=-1;else{let M=a.get(y);M||(M=[],a.set(y,M)),M.push(_)}}m.reverse(),S=p-S-1,r.push(m),o.push(S)}const u=[];l.forEach((_,g)=>u.push(g)),u.sort(_H);let h=[],d=[];for(let _=0;_<u.length;_++){const g=[],m=u[_],p=l.get(m);for(let y=0;y<h.length;++y){const x=h[y],M=x.polygonindex;if(p[M]){const E=r[M],T=E.length;let L=x.leftvertexindex,v=x.rightvertexindex;for(;;){let N=L+1;if(N>=T&&(N=0),E[N][1]!==m)break;L=N}let w=v-1;if(w<0&&(w=T-1),E[w][1]===m&&(v=w),L!==x.leftvertexindex&&L===v)h.splice(y,1),--y;else{x.leftvertexindex=L,x.rightvertexindex=v,x.topleft=E[L],x.topright=E[v];let N=L+1;N>=T&&(N=0),x.bottomleft=E[N];let U=v-1;U<0&&(U=T-1),x.bottomright=E[U]}}}let S;if(_>=u.length-1)h=[],S=null;else{S=Number(u[_+1]);const y=.5*(m+S),x=a.get(m);for(const M in x){const E=x[M],T=r[E],L=T.length,v=o[E];let w=v;for(;;){let H=w+1;if(H>=L&&(H=0),T[H][1]!==m||H===v)break;w=H}let N=v;for(;;){let H=N-1;if(H<0&&(H=L-1),T[H][1]!==m||H===w)break;N=H}let U=w+1;U>=L&&(U=0);let I=N-1;I<0&&(I=L-1);const F={polygonindex:E,leftvertexindex:w,rightvertexindex:N,topleft:T[w],topright:T[N],bottomleft:T[U],bottomright:T[I]};gH(h,F,(H,z)=>{const G=ks(H.topleft,H.bottomleft,y),W=ks(z.topleft,z.bottomleft,y);return G>W?1:G<W?-1:0})}}for(const y in h){const x=h[y];let M=ks(x.topleft,x.bottomleft,m);const E=In.fromValues(M,m);M=ks(x.topright,x.bottomright,m);const T=In.fromValues(M,m);M=ks(x.topleft,x.bottomleft,S);const L=In.fromValues(M,S);M=ks(x.topright,x.bottomright,S);const v=In.fromValues(M,S),w={topleft:E,topright:T,bottomleft:L,bottomright:v,leftline:Di.fromPoints(Di.create(),E,L),rightline:Di.fromPoints(Di.create(),v,T)};if(g.length>0){const N=g[g.length-1],U=In.distance(w.topleft,N.topright),I=In.distance(w.bottomleft,N.bottomright);U<hi&&I<hi&&(w.topleft=N.topleft,w.leftline=N.leftline,w.bottomleft=N.bottomleft,g.splice(g.length-1,1))}g.push(w)}if(_>0){const y=new Set,x=new Set;for(let M=0;M<g.length;M++){const E=g[M];for(let T=0;T<d.length;T++)if(!x.has(T)){const L=d[T];if(In.distance(L.bottomleft,E.topleft)<hi&&In.distance(L.bottomright,E.topright)<hi){x.add(T);const v=Di.direction(E.leftline),w=Di.direction(L.leftline),N=v[0]-w[0],U=Di.direction(E.rightline),I=Di.direction(L.rightline),F=U[0]-I[0],H=Math.abs(N)<hi,z=Math.abs(F)<hi,G=H||N>=0,W=z||F>=0;G&&W&&(E.outpolygon=L.outpolygon,E.leftlinecontinues=H,E.rightlinecontinues=z,y.add(T));break}}}for(let M=0;M<d.length;M++)if(!y.has(M)){const E=d[M];E.outpolygon.rightpoints.push(E.bottomright),In.distance(E.bottomright,E.bottomleft)>hi&&E.outpolygon.leftpoints.push(E.bottomleft),E.outpolygon.leftpoints.reverse();const L=E.outpolygon.rightpoints.concat(E.outpolygon.leftpoints).map(w=>s.to3D(w)),v=hm.fromPointsAndPlane(L,i);v.vertices.length&&e.push(v)}}for(let y=0;y<g.length;y++){const x=g[y];x.outpolygon?(x.leftlinecontinues||x.outpolygon.leftpoints.push(x.topleft),x.rightlinecontinues||x.outpolygon.rightpoints.push(x.topright)):(x.outpolygon={leftpoints:[],rightpoints:[]},x.outpolygon.leftpoints.push(x.topleft),In.distance(x.topleft,x.topright)>hi&&x.outpolygon.rightpoints.push(x.topright))}d=g}return e};var xH=vH;const dm=ut,yH=tt,{NEPS:MH}=Ye,EH=xH,SH=t=>{if(t.isRetesselated)return t;const e=dm.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:yH.plane(r),index:o})),n=bH(e),i=[];n.forEach(r=>{if(Array.isArray(r)){const o=EH(r);i.push(...o)}else i.push(r)});const s=dm.create(i);return s.isRetesselated=!0,s},bH=t=>{let e=[t];const n=[];for(let s=3;s>=0;s--){const r=[],o=s===3?15e-9:MH;e.forEach(a=>{a.sort(wH(s,o));let l=0;for(let c=1;c<a.length;c++)a[c].plane[s]-a[l].plane[s]>o&&(c-l===1?n.push(a[l]):r.push(a.slice(l,c)),l=c);a.length-l===1?n.push(a[l]):r.push(a.slice(l))}),e=r}const i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},wH=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;var E_=SH;const{EPS:Gs}=Ye,pm=iu,TH=(t,e)=>{if(t.polygons.length===0||e.polygons.length===0)return!1;const n=pm(t),i=n[0],s=n[1],r=pm(e),o=r[0],a=r[1];return!(o[0]-s[0]>Gs||i[0]-a[0]>Gs||o[1]-s[1]>Gs||i[1]-a[1]>Gs||o[2]-s[2]>Gs||i[2]-a[2]>Gs)};var AH=TH;const mm=Gi,RH=tt;let CH=class Mf{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygontreenodes=[],this.parent=e}invert(){const e=[this];let n;for(let i=0;i<e.length;i++){n=e[i],n.plane&&(n.plane=mm.flip(mm.create(),n.plane)),n.front&&e.push(n.front),n.back&&e.push(n.back);const s=n.front;n.front=n.back,n.back=s}}clipPolygons(e,n){let i={node:this,polygontreenodes:e},s;const r=[];do{if(s=i.node,e=i.polygontreenodes,s.plane){const o=s.plane,a=[],l=[],c=n?a:l,f=e.length;for(let h=0;h<f;h++){const d=e[h];d.isRemoved()||d.splitByPlane(o,c,a,l,a)}s.front&&l.length>0&&r.push({node:s.front,polygontreenodes:l});const u=a.length;if(s.back&&u>0)r.push({node:s.back,polygontreenodes:a});else for(let h=0;h<u;h++)a[h].remove()}i=r.pop()}while(i!==void 0)}clipTo(e,n){let i=this;const s=[];do i.polygontreenodes.length>0&&e.rootnode.clipPolygons(i.polygontreenodes,n),i.front&&s.push(i.front),i.back&&s.push(i.back),i=s.pop();while(i!==void 0)}addPolygonTreeNodes(e){let n={node:this,polygontreenodes:e};const i=[];do{const s=n.node,r=n.polygontreenodes;if(r.length===0){n=i.pop();continue}if(!s.plane){let c=0;c=Math.floor(r.length/2);const f=r[c].getPolygon();s.plane=RH.plane(f)}const o=[],a=[],l=r.length;for(let c=0;c<l;++c)r[c].splitByPlane(s.plane,s.polygontreenodes,a,o,a);o.length>0&&(s.front||(s.front=new Mf(s)),l===o.length&&a.length===0?s.front.polygontreenodes=o:i.push({node:s.front,polygontreenodes:o})),a.length>0&&(s.back||(s.back=new Mf(s)),l===a.length&&o.length===0?s.back.polygontreenodes=a:i.push({node:s.back,polygontreenodes:a})),n=i.pop()}while(n!==void 0)}};var PH=CH;const $s=Be,LH=(t,e,n)=>{const i=$s.subtract($s.create(),n,e);let s=(t[3]-$s.dot(t,e))/$s.dot(t,i);return Number.isNaN(s)&&(s=0),s>1&&(s=1),s<0&&(s=0),$s.scale(i,i,s),$s.add(i,e,i),i};var DH=LH;const{EPS:ha}=Ye,UH=Gi,da=Be,Hc=tt,IH=DH,NH=(t,e)=>{const n={type:null,front:null,back:null},i=e.vertices,s=i.length,r=Hc.plane(e);if(UH.equals(r,t))n.type=0;else{let o=!1,a=!1;const l=[],c=-ha;for(let f=0;f<s;f++){const u=da.dot(t,i[f])-t[3],h=u<c;l.push(h),u>ha&&(o=!0),u<c&&(a=!0)}if(!o&&!a){const f=da.dot(t,r);n.type=f>=0?0:1}else if(!a)n.type=2;else if(!o)n.type=3;else{n.type=4;const f=[],u=[];let h=l[0];for(let _=0;_<s;_++){const g=i[_];let m=_+1;m>=s&&(m=0);const p=l[m];if(h===p)h?u.push(g):f.push(g);else{const S=i[m],y=IH(t,g,S);h?(u.push(g),u.push(y),f.push(y)):(f.push(g),f.push(y),u.push(y))}h=p}const d=ha*ha;if(u.length>=3){let _=u[u.length-1];for(let g=0;g<u.length;g++){const m=u[g];da.squaredDistance(m,_)<d&&(u.splice(g,1),g--),_=m}}if(f.length>=3){let _=f[f.length-1];for(let g=0;g<f.length;g++){const m=f[g];da.squaredDistance(m,_)<d&&(f.splice(g,1),g--),_=m}}f.length>=3&&(n.front=Hc.fromPointsAndPlane(f,r)),u.length>=3&&(n.back=Hc.fromPointsAndPlane(u,r))}}return n};var FH=NH;const{EPS:OH}=Ye,HH=Be,gm=tt,BH=FH;let zH=class S_{constructor(e,n){this.parent=e,this.children=[],this.polygon=n,this.removed=!1}addPolygons(e){if(!this.isRootNode())throw new Error("Assertion failed");const n=this;e.forEach(i=>{n.addChild(i)})}remove(){if(!this.removed){this.removed=!0,this.polygon=null;const e=this.parent.children,n=e.indexOf(this);if(n<0)throw new Error("Assertion failed");e.splice(n,1),this.parent.recursivelyInvalidatePolygon()}}isRemoved(){return this.removed}isRootNode(){return!this.parent}invert(){if(!this.isRootNode())throw new Error("Assertion failed");this.invertSub()}getPolygon(){if(!this.polygon)throw new Error("Assertion failed");return this.polygon}getPolygons(e){let n=[this];const i=[n];let s,r,o,a;for(s=0;s<i.length;++s)for(n=i[s],r=0,o=n.length;r<o;r++)a=n[r],a.polygon?e.push(a.polygon):a.children.length>0&&i.push(a.children)}splitByPlane(e,n,i,s,r){if(this.children.length){const o=[this.children];let a,l,c,f,u;for(a=0;a<o.length;a++)for(u=o[a],l=0,c=u.length;l<c;l++)f=u[l],f.children.length>0?o.push(f.children):f._splitByPlane(e,n,i,s,r)}else this._splitByPlane(e,n,i,s,r)}_splitByPlane(e,n,i,s,r){const o=this.polygon;if(o){const a=gm.measureBoundingSphere(o),l=a[3]+OH,c=a,f=HH.dot(e,c)-e[3];if(f>l)s.push(this);else if(f<-l)r.push(this);else{const u=BH(e,o);switch(u.type){case 0:n.push(this);break;case 1:i.push(this);break;case 2:s.push(this);break;case 3:r.push(this);break;case 4:if(u.front){const h=this.addChild(u.front);s.push(h)}if(u.back){const h=this.addChild(u.back);r.push(h)}break}}}}addChild(e){const n=new S_(this,e);return this.children.push(n),n}invertSub(){let e=[this];const n=[e];let i,s,r,o;for(i=0;i<n.length;i++)for(e=n[i],s=0,r=e.length;s<r;s++)o=e[s],o.polygon&&(o.polygon=gm.invert(o.polygon)),o.children.length>0&&n.push(o.children)}recursivelyInvalidatePolygon(){this.polygon=null,this.parent&&this.parent.recursivelyInvalidatePolygon()}clear(){let e=[this];const n=[e];for(let i=0;i<n.length;++i){e=n[i];const s=e.length;for(let r=0;r<s;r++){const o=e[r];o.polygon&&(o.polygon=null),o.parent&&(o.parent=null),o.children.length>0&&n.push(o.children),o.children=[]}}}toString(){let e="",n=[this];const i=[n];let s,r,o,a;for(s=0;s<i.length;++s){n=i[s];const l=" ".repeat(s);for(r=0,o=n.length;r<o;r++)a=n[r],e+=`${l}PolygonTreeNode (${a.isRootNode()}): ${a.children.length}`,a.polygon?e+=`
 ${l}polygon: ${a.polygon.vertices}
`:e+=`
`,a.children.length>0&&i.push(a.children)}return e}};var VH=zH;const kH=PH,GH=VH;let $H=class{constructor(e){this.polygonTree=new GH,this.rootnode=new kH(null),e&&this.addPolygons(e)}invert(){this.polygonTree.invert(),this.rootnode.invert()}clipTo(e,n=!1){this.rootnode.clipTo(e,n)}allPolygons(){const e=[];return this.polygonTree.getPolygons(e),e}addPolygons(e){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=this.polygonTree.addChild(e[i]);this.rootnode.addPolygonTreeNodes(n)}clear(){this.polygonTree.clear()}toString(){return"Tree: "+this.polygonTree.toString("")}};var WH=$H,cu={Tree:WH};const pa=ut,XH=AH,{Tree:_m}=cu,qH=(t,e)=>{if(!XH(t,e))return pa.clone(t);const n=new _m(pa.toPolygons(t)),i=new _m(pa.toPolygons(e));n.invert(),n.clipTo(i),i.clipTo(n,!0),n.addPolygons(i.allPolygons()),n.invert();const s=n.allPolygons();return pa.create(s)};var jH=qH;const YH=Rn,ZH=E_,KH=jH,JH=(...t)=>{t=YH(t);let e=t.shift();return t.forEach(n=>{e=KH(e,n)}),e=ZH(e),e};var b_=JH;const QH=Rn,eB=ut,tB=ou,nB=_O,iB=SO,sB=b_,rB=(...t)=>{t=QH(t);const e=t.map(s=>iB({z0:-1,z1:1},s)),n=sB(e),i=tB(n);return nB(i,eB.toPolygons(n))};var oB=rB;const aB=Rn,lB=KF,cB=ht,fB=ut,uB=oB,hB=b_,dB=(...t)=>{if(t=aB(t),t.length===0)throw new Error("wrong number of arguments");if(!lB(t))throw new Error("only subtract of the types are supported");const e=t[0];return cB.isA(e)?uB(t):fB.isA(e)?hB(t):e};var pB=dB;const ma=lT(pB);function mB({width:t,depth:e,safety:n=0,bottomHeight:i=15,topHeight:s=25,borderThickness:r=2.5,enableBackHole:o=!1,backHoleXOffset:a=0,backHoleWidth:l=55,backHoleHeight:c=10,enableFrontHole:f=!1,frontHoleXOffset:u=0,frontHoleWidth:h=55,frontHoleHeight:d=10,enableRightHole:_=!1,rightHoleXOffset:g=0,rightHoleWidth:m=55,rightHoleHeight:p=10,enableLeftHole:S=!1,leftHoleXOffset:y=0,leftHoleWidth:x=55,leftHoleHeight:M=10}){const E=r*2,T=t+n,L=e+n,v=-i/2,w=Mt.translate([0,L/2+r/2,v],hn.cuboid({size:[T+E,r,i]})),N=Mt.translate([0,-L/2-r/2,v],hn.cuboid({size:[T+E,r,i]})),U=Mt.translate([T/2+r/2,0,v],hn.cuboid({size:[r,L+E,i]})),I=Mt.translate([-T/2-r/2,0,v],hn.cuboid({size:[r,L+E,i]}));let F=N;if(o){const A=hn.cuboid({size:[l,r+E,c]}),ue=Mt.translate([a,-L/2-r/2,-i+c/2],A);F=ma(F,ue)}let H=w;if(f){const A=hn.cuboid({size:[h,r+E,d]}),ue=Mt.translate([-u,L/2+r/2,-i+d/2],A);H=ma(H,ue)}let z=I,G=U;if(_){const A=hn.cuboid({size:[r+E,m,p]}),ue=Mt.translate([-T/2-r/2,-g,-i+p/2],A);z=ma(z,ue)}if(S){const A=hn.cuboid({size:[r+E,x,M]}),ue=Mt.translate([T/2+r/2,y,-i+M/2],A);G=ma(G,ue)}const W=s/2,ae=T-r/2,te=L-r/2,be=Mt.translate([0,te/2+r/2,W],hn.cuboid({size:[ae+E,r,s]})),ce=Mt.translate([0,-te/2-r/2,W],hn.cuboid({size:[ae+E,r,s]})),Z=Mt.translate([ae/2+r/2,0,W],hn.cuboid({size:[r,te+E,s]})),re=Mt.translate([-ae/2-r/2,0,W],hn.cuboid({size:[r,te+E,s]})),ge=s+r/2,_e=Mt.translate([0,0,ge],hn.cuboid({size:[ae+E,te+E,r]}));return[H,F,G,z,be,ce,Z,re,_e]}const{solve2Linear:G4}=hl,{EPS:$4}=Ye,{geom2:W4,geom3:X4,path2:q4}=nu,{Tree:j4}=cu,{Tree:Y4}=cu,{EPS:Z4,TAU:K4}=Ye,{EPS:J4,TAU:Q4}=Ye,{area:eV}=hl,{TAU:tV}=Ye,Bc=Be,w_=tt,gB=(t,e)=>{const n=Math.abs(w_.measureArea(e));return Number.isFinite(n)&&n>t},_B=(t,e)=>{let n=e.map(s=>{const r=s.vertices.map(l=>Bc.snap(Bc.create(),l,t)),o=[];for(let l=0;l<r.length;l++){const c=(l+1)%r.length;Bc.equals(r[l],r[c])||o.push(r[l])}const a=w_.create(o);return s.color&&(a.color=s.color),a});const i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>gB(i,s)),n};var T_=_B;const vB=_N,js=Be,Oa=tt,xB=t=>{const e=Oa.toPoints(t),n=[];for(let i=0;i<e.length;i++){const s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){const s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},yB=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.set(n,e)},zc=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.delete(n)},MB=(t,e)=>{const n=`${e.v2}:${e.v1}`;return t.get(n)},EB=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2;const o=vm(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;const a=vm(i,s,r,n);return[o,a]},SB=js.create(),bB=js.create(),vm=(t,e,n,i)=>{const s=js.subtract(SB,e,t),r=js.subtract(bB,n,e);return js.cross(s,s,r),js.dot(s,i)},wB=t=>{let e;const n=[];for(;t.next;){const i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=Oa.create(n)),e},TB=t=>{if(t.length<2)return t;const e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){const r=n.shift(),o=xB(r);for(let a=0;a<o.length;a++){const l=o[a],c=MB(i,l);if(c){const f=EB(l,c,e);if(f[0]>=0&&f[1]>=0){const u=c.next,h=l.next;l.prev.next=c.next,l.next.prev=c.prev,c.prev.next=l.next,c.next.prev=l.prev,l.v1=null,l.v2=null,l.next=null,l.prev=null,zc(i,c),c.v1=null,c.v2=null,c.next=null,c.prev=null;const d=(_,g,m)=>{const p={v1:m.v1,v2:g.v2,next:g.next,prev:m.prev};m.prev.next=p,g.next.prev=p,zc(_,g),g.v1=null,g.v2=null,g.next=null,g.prev=null,zc(_,m),m.v1=null,m.v2=null,m.next=null,m.prev=null};f[0]===0&&d(i,u,u.prev),f[1]===0&&d(i,h,h.prev)}}else l.next&&yB(i,l)}}const s=[];return i.forEach(r=>{const o=wB(r);o&&s.push(o)}),i.clear(),s},AB=(t,e)=>Math.abs(t[3]-e[3])<15e-8?vB(t,e):!1,RB=(t,e)=>{const n=[];e.forEach(s=>{const r=n.find(o=>AB(o[0],Oa.plane(s)));r?r[1].push(s):n.push([Oa.plane(s),[s]])});let i=[];return n.forEach(s=>{const r=s[1],o=TB(r);i=i.concat(o)}),i};var CB=RB;const xm=Ye,Xn=Be,PB=tt,qt=t=>`${t}`,ym=(t,e,n,i,s,r)=>{const o=qt(i),a=qt(s),l=`${o}/${a}`,c=`${a}/${o}`;if(t.has(c))return ba(t,e,n,s,i,null),null;const f={vertex0:i,vertex1:s,polygonindex:r};return t.has(l)?t.get(l).push(f):t.set(l,[f]),e.has(o)?e.get(o).push(l):e.set(o,[l]),n.has(a)?n.get(a).push(l):n.set(a,[l]),l},ba=(t,e,n,i,s,r)=>{const o=qt(i),a=qt(s),l=`${o}/${a}`;let c=-1;const f=t.get(l);for(let u=0;u<f.length;u++){const h=f[u];let d=qt(h.vertex0);if(d===o&&(d=qt(h.vertex1),d===a&&!(r!==null&&h.polygonindex!==r))){c=u;break}}f.splice(c,1),f.length===0&&t.delete(l),c=e.get(o).indexOf(l),e.get(o).splice(c,1),e.get(o).length===0&&e.delete(o),c=n.get(a).indexOf(l),n.get(a).splice(c,1),n.get(a).length===0&&n.delete(a)},LB=t=>{const e=new Map;for(let n=0;n<t.length;n++){const i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=qt(r);for(let a=0;a<s;a++){let l=a+1;l===s&&(l=0);const c=i.vertices[l],f=qt(c),u=`${o}/${f}`,h=`${f}/${o}`;if(e.has(h)){const d=e.get(h);d.splice(-1,1),d.length===0&&e.delete(h)}else{const d={vertex0:r,vertex1:c,polygonindex:n};e.has(u)?e.get(u).push(d):e.set(u,[d])}r=c,o=f}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){const n=new Map,i=new Map,s=new Map;for(const[o,a]of e)s.set(o,!0),a.forEach(l=>{const c=qt(l.vertex0),f=qt(l.vertex1);n.has(c)?n.get(c).push(o):n.set(c,[o]),i.has(f)?i.get(f).push(o):i.set(f,[o])});const r=t.slice(0);for(;e.size!==0;){for(const a of e.keys())s.set(a,!0);let o=!1;for(;;){const a=Array.from(s.keys());if(a.length===0)break;const l=a[0];let c=!0;if(e.has(l)){const u=e.get(l)[0];for(let h=0;h<2;h++){const d=h===0?u.vertex0:u.vertex1,_=h===0?u.vertex1:u.vertex0,g=qt(d),m=qt(_);let p=[];h===0?i.has(g)&&(p=i.get(g)):n.has(g)&&(p=n.get(g));for(let S=0;S<p.length;S++){const y=p[S],x=e.get(y)[0],M=h===0?x.vertex0:x.vertex1;if(h===0?x.vertex1:x.vertex0,qt(M)===m){ba(e,n,i,d,_,null),ba(e,n,i,_,d,null),c=!1,h=2,o=!0;break}else{const T=d,L=_,v=M,w=Xn.subtract(Xn.create(),v,T),N=Xn.dot(Xn.subtract(Xn.create(),L,T),w)/Xn.dot(w,w);if(N>0&&N<1){const U=Xn.scale(Xn.create(),w,N);if(Xn.add(U,U,T),Xn.squaredDistance(U,L)<xm.EPS*xm.EPS){const F=x.polygonindex,H=r[F],z=qt(x.vertex1);let G=-1;for(let ce=0;ce<H.vertices.length;ce++)if(qt(H.vertices[ce])===z){G=ce;break}const W=H.vertices.slice(0);W.splice(G,0,_);const ae=PB.create(W);r[F]=ae,ba(e,n,i,x.vertex0,x.vertex1,F);const te=ym(e,n,i,x.vertex0,_,F),be=ym(e,n,i,_,x.vertex1,F);te!==null&&s.set(te,!0),be!==null&&s.set(be,!0),c=!1,h=2,o=!0;break}}}}}}c&&s.delete(l)}if(!o)break}t=r}return e.clear(),t};var DB=LB;const Vc=Be,kc=tt,UB=(t,e,n)=>{const i=e.vertices.length;if(i>3){if(i>4){const o=[0,0,0];e.vertices.forEach(a=>Vc.add(o,o,a)),Vc.snap(o,Vc.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){const l=kc.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(l.color=e.color),n.push(l)}return}const s=kc.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=kc.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},IB=(t,e)=>{const n=[];return e.forEach(i=>{UB(t,i,n)}),n};var NB=IB;const FB=Rn,OB=ou,HB=ht,A_=ut,BB=An,zB=T_,VB=CB,kB=DB,GB=NB,$B=(t,e)=>e,WB=(t,e)=>e,XB=(t,e)=>{const n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=OB(e);let a=A_.toPolygons(e);i&&(a=zB(o,a)),s&&(a=VB(o,a)),r&&(a=kB(a),a=GB(o,a));const l=Object.assign({},e);return l.polygons=a,l},qB=(t,...e)=>{if(e=FB(e),e.length===0)throw new Error("wrong number of arguments");const n=e.map(i=>{if(BB.isA(i))return $B(t,i);if(HB.isA(i))return WB(t,i);if(A_.isA(i))return XB(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};var jB=qB;const YB=Rn,cs=We,Ef=ht,Sf=ut,bf=An,fu=ou,ZB=T_,KB=t=>{const e=fu(t),i=bf.toPoints(t).map(s=>cs.snap(cs.create(),s,e));return bf.create(i)},JB=t=>{const e=fu(t);let i=Ef.toSides(t).map(s=>[cs.snap(cs.create(),s[0],e),cs.snap(cs.create(),s[1],e)]);return i=i.filter(s=>!cs.equals(s[0],s[1])),Ef.create(i)},QB=t=>{const e=fu(t),n=Sf.toPolygons(t),i=ZB(e,n);return Sf.create(i)},ez=(...t)=>{if(t=YB(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>bf.isA(n)?KB(n):Ef.isA(n)?JB(n):Sf.isA(n)?QB(n):n);return e.length===1?e[0]:e};var tz=ez,nz={generalize:jB,snap:tz,retessellate:E_};const{translate:nV}=Mt,iz=Rn,sz=ht,rz=ut,oz=An,az=iu,{translate:lz}=Mt,Gc=(t,e)=>{const n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t),r=az(e),o=[0,0,0];return i[0]&&(o[0]=s[0]-(r[0][0]+(r[1][0]-r[0][0])/2)),i[1]&&(o[1]=s[1]-(r[0][1]+(r[1][1]-r[0][1])/2)),i[2]&&(o[2]=s[2]-(r[0][2]+(r[1][2]-r[0][2])/2)),lz(o,e)},gl=(t,...e)=>{const n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t);if(e=iz(e),e.length===0)throw new Error("wrong number of arguments");if(s.length!==3)throw new Error("relativeTo must be an array of length 3");t={axes:i,relativeTo:s};const r=e.map(o=>oz.isA(o)||sz.isA(o)||rz.isA(o)?Gc(t,o):o);return r.length===1?r[0]:r},cz=(...t)=>gl({axes:[!0,!1,!1]},t),fz=(...t)=>gl({axes:[!1,!0,!1]},t),uz=(...t)=>gl({axes:[!1,!1,!0]},t);var ga={center:gl,centerX:cz,centerY:fz,centerZ:uz};const hz=Rn,Mm=dt,Em=ht,Sm=ut,bm=An,_l=(t,...e)=>{if(!Array.isArray(t))throw new Error("factors must be an array");if(e=hz(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(1);if(t[0]<=0||t[1]<=0||t[2]<=0)throw new Error("factors must be positive");const n=Mm.fromScaling(Mm.create(),t),i=e.map(s=>bm.isA(s)?bm.transform(n,s):Em.isA(s)?Em.transform(n,s):Sm.isA(s)?Sm.transform(n,s):s);return i.length===1?i[0]:i},dz=(t,...e)=>_l([t,1,1],e),pz=(t,...e)=>_l([1,t,1],e),mz=(t,...e)=>_l([1,1,t],e);var _a={scale:_l,scaleX:dz,scaleY:pz,scaleZ:mz};ga.center,ga.centerX,ga.centerY,ga.centerZ,Gr.mirror,Gr.mirrorX,Gr.mirrorY,Gr.mirrorZ,Wr.rotate,Wr.rotateX,Wr.rotateY,Wr.rotateZ,_a.scale,_a.scaleX,_a.scaleY,_a.scaleZ,Mt.translate,Mt.translateX,Mt.translateY,Mt.translateZ;var uu={geometries:nu,modifiers:nz};const R_=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(R_(n)):e.concat(n),[]);var gz=R_;const _z=t=>Array.isArray(t)?t:t==null?[]:[t];var vz=_z,xz={flatten:gz,toArray:vz};const{geometries:$c}=uu,yz=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((m,p)=>{$c.geom3.toPolygons(m).forEach(y=>{const x=y.vertices.length,M=x>=3?x-2:0;r+=M,o+=1})});const a=new Uint8Array(80);for(let m=0;m<80;m++)a[m]=65;const l=new Uint32Array(1);l[0]=r;const c=new ArrayBuffer(50*r),f=new Int8Array(c),u=new ArrayBuffer(50),h=new Int8Array(u),d=new Float32Array(u,0,12),_=new Uint16Array(u,48,1);let g=0;return t.forEach(m=>{$c.geom3.toPolygons(m).forEach((S,y)=>{const x=S.vertices,M=x.length,E=$c.poly3.plane(S);for(let T=0;T<M-2;T++){d[0]=E[0],d[1]=E[1],d[2]=E[2];let L=3;for(let v=0;v<3;v++){const w=v+(v>0?T:0),N=x[w];d[L++]=N[0],d[L++]=N[1],d[L++]=N[2]}_[0]=0,f.set(h,g),g+=50}e.statusCallback&&e.statusCallback({progress:100*y/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,l.buffer,c]};var Mz={serializeBinary:yz};const{geometries:C_}=uu,Ez=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=`solid JSCAD
${Sz(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},Sz=(t,e)=>{const n=[];return t.forEach((i,s)=>{n.push(bz(i)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},bz=(t,e)=>{const n=[];return C_.geom3.toPolygons(t).forEach((s,r)=>{n.push(wz(s))}),n.join(`
`)},P_=t=>`${t[0]} ${t[1]} ${t[2]}`,Wc=t=>`vertex ${P_(t)}`,wz=t=>{const e=[];if(t.vertices.length>=3){const n=Wc(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){const s=`facet normal ${P_(C_.poly3.plane(t))}
outer loop
${n}
${Wc(t.vertices[i+1])}
${Wc(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};var Tz={serializeText:Ez};const{geometries:Az,modifiers:Rz}=uu,{flatten:Cz,toArray:Pz}=xz,{serializeBinary:Lz}=Mz,{serializeText:Dz}=Tz,Uz="application/sla",Iz=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=Cz(e);let i=e.filter(s=>Az.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=Pz(Rz.generalize({snap:!0,triangulate:!0},i)),t.binary?Lz(i,t):Dz(i,t)};var Nz={mimeType:Uz,serialize:Iz};const Fz={props:["width","depth","safety","bottomHeight","topHeight","borderThickness","enableBackHole","backHoleXOffset","backHoleWidth","backHoleHeight","enableFrontHole","frontHoleXOffset","frontHoleWidth","frontHoleHeight","enableRightHole","rightHoleXOffset","rightHoleWidth","rightHoleHeight","enableLeftHole","leftHoleXOffset","leftHoleWidth","leftHoleHeight"],data(){return{stlData:null,currentWidth:0,currentDepth:0,currentSafety:0,currentBottomHeight:0,currentTopHeight:0,currentBorderThickness:0,tweenDuration:1e3,edgeLines:null}},computed:{allOptions(){return{width:this.width,depth:this.depth,safety:this.safety,bottomHeight:this.bottomHeight,topHeight:this.topHeight,borderThickness:this.borderThickness,enableBackHole:this.enableBackHole,backHoleXOffset:this.backHoleXOffset,backHoleWidth:this.backHoleWidth,backHoleHeight:this.backHoleHeight,enableFrontHole:this.enableFrontHole,frontHoleXOffset:this.frontHoleXOffset,frontHoleWidth:this.frontHoleWidth,frontHoleHeight:this.frontHoleHeight,enableRightHole:this.enableRightHole,rightHoleXOffset:this.rightHoleXOffset,rightHoleWidth:this.rightHoleWidth,rightHoleHeight:this.rightHoleHeight,enableLeftHole:this.enableLeftHole,leftHoleXOffset:this.leftHoleXOffset,leftHoleWidth:this.leftHoleWidth,leftHoleHeight:this.leftHoleHeight}}},watch:{allOptions:{deep:!0,handler(t,e){if(!e)return;const n=["width","depth","safety","bottomHeight","topHeight","borderThickness"];if(n.some(s=>t[s]!==e[s])){const s=n.reduce((o,a)=>(o[a]=e[a],o),{}),r=n.reduce((o,a)=>(o[a]=t[a],o),{});this.animateDimensionsTransition(s,r)}else this.rebuildMesh()}}},created(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.mesh=null},mounted(){this.currentWidth=this.width,this.currentDepth=this.depth,this.currentSafety=this.safety,this.currentBottomHeight=this.bottomHeight,this.currentTopHeight=this.topHeight,this.currentBorderThickness=this.borderThickness,this.initScene(),this.createInitialMesh()},methods:{generateSTL(t,e,n,i,s,r){const o=l=>Math.max(0,Number(l)||0),a={width:t,depth:e,safety:n,bottomHeight:i,topHeight:s,borderThickness:r,enableBackHole:this.enableBackHole,backHoleXOffset:this.backHoleXOffset,backHoleWidth:this.backHoleWidth,backHoleHeight:o(this.backHoleHeight),enableFrontHole:this.enableFrontHole,frontHoleXOffset:this.frontHoleXOffset,frontHoleWidth:this.frontHoleWidth,frontHoleHeight:o(this.frontHoleHeight),enableRightHole:this.enableRightHole,rightHoleXOffset:this.rightHoleXOffset,rightHoleWidth:this.rightHoleWidth,rightHoleHeight:o(this.rightHoleHeight),enableLeftHole:this.enableLeftHole,leftHoleXOffset:this.leftHoleXOffset,leftHoleWidth:this.leftHoleWidth,leftHoleHeight:o(this.leftHoleHeight)};try{const l=mB(a);return Nz.serialize({binary:!1},l).join(`
`)}catch(l){return console.error("Error generating geometry or STL:",l),null}},createInitialMesh(){const t=this.generateSTL(this.width,this.depth,this.safety,this.bottomHeight,this.topHeight,this.borderThickness);if(!t)return;this.stlData=t;const n=new Td().parse(t),i=new Jw({color:11066076,roughness:.6,metalness:.1});this.mesh=new vi(n,i),this.scene.add(this.mesh);const s=new Md(n),r=new pf({color:3355443});this.edgeLines=new yd(s,r),this.scene.add(this.edgeLines)},rebuildMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose()),this.edgeLines&&(this.scene.remove(this.edgeLines),this.edgeLines.geometry.dispose()),this.createInitialMesh()},animateDimensionsTransition(t,e){const n=performance.now(),i=this.tweenDuration,s=new Td,r=o=>{const a=Math.min((o-n)/i,1),l={};for(const f of Object.keys(t))l[f]=t[f]+(e[f]-t[f])*a;const c=this.generateSTL(l.width,l.depth,l.safety,l.bottomHeight,l.topHeight,l.borderThickness);if(c){const f=s.parse(c);this.mesh&&(this.mesh.geometry.dispose(),this.mesh.geometry=f),this.edgeLines&&(this.scene.remove(this.edgeLines),this.edgeLines.geometry.dispose());const u=new Md(f);this.edgeLines=new yd(u,new pf({color:3355443})),this.scene.add(this.edgeLines),this.stlData=c}a<1?requestAnimationFrame(r):(this.currentWidth=e.width,this.currentDepth=e.depth,this.currentSafety=e.safety,this.currentBottomHeight=e.bottomHeight,this.currentTopHeight=e.topHeight,this.currentBorderThickness=e.borderThickness)};requestAnimationFrame(r)},initScene(){this.scene=new Zw,this.camera=new bn(75,600/500,.1,1e3),this.camera.position.set(0,150,100),this.camera.up.set(0,0,1),this.camera.lookAt(0,0,10),this.renderer=new g0({canvas:this.$refs.canvas,antialias:!0}),this.renderer.setSize(600,500),this.renderer.setClearColor(16250871),this.scene.add(new oT(7368816,.5));const n=new iT(16777215,4473924,.6);n.position.set(0,200,0),this.scene.add(n);const i=new wd(16777215,.8);i.position.set(1,1,1).normalize(),this.scene.add(i);const s=new wd(16777215,.4);s.position.set(-1,-1,1).normalize(),this.scene.add(s),this.controls=new aT(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.8,this.controls.dynamicDampingFactor=.05,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/2,this.animate()},animate(){requestAnimationFrame(this.animate.bind(this)),this.controls.update(),this.renderer.render(this.scene,this.camera)},downloadSTL(){if(!this.stlData)return;const t=new Blob([this.stlData],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`SynthArmor_cover_${this.width}x${this.depth}_safetyOffset${this.safety}_bottomHeight${this.bottomHeight}_topHeight${this.topHeight}_borderThickness${this.borderThickness}.stl`,e.click()}}},Oz={class:"mt-2 mb-2 flex flex-col items-center"},Hz={class:"w-full max-w-[600px] flex flex-col items-center"},Bz={ref:"canvas",class:"rounded-md w-full max-w-[600px] border border-gray-300 border-t-0 border-b-0"};function zz(t,e,n,i,s,r){return tn(),mn("div",Oz,[j("div",Hz,[e[0]||(e[0]=j("div",{class:"bg-gray-300 h-[1px] w-[95%]"},null,-1)),j("canvas",Bz,null,512),e[1]||(e[1]=j("div",{class:"bg-gray-300 h-[1px] w-[95%]"},null,-1))])])}const Vz=pr(Fz,[["render",zz]]),kz={name:"FAQ",data(){return{faqs:[{question:"What is this?",answer:"This web app lets you quickly generate a custom 3D model for gear cover protection. Simply enter your equipment’s dimensions, adjust a safety offset if needed, and download an STL file ready for 3D printing.",open:!1},{question:"How does it work?",answer:`
            <ol class="list-decimal pl-6 mt-2">
              <li><strong>Enter Dimensions:</strong> Provide the exact width and depth of your machine.</li>
              <li><strong>Adjust for Fit:</strong> Use the "Safety Offset" to add a small buffer for a secure fit.</li>
              <li><strong>Automatic Preview:</strong> The model updates automatically as you modify the values.</li>
              <li><strong>Download STL:</strong> Click the download button to save your custom design for 3D printing.</li>
            </ol>
          `,open:!1},{question:"A Word of Caution",answer:"Please note that you are solely responsible for ensuring that the generated model fits your machine. Always double-check the dimensions before printing.",open:!1}]}},methods:{toggle(t){this.faqs[t].open=!this.faqs[t].open}}},Gz={class:"w-full max-w-[600px] mt-8"},$z=["onClick"],Wz={class:"text-lg font-medium text-gray-700"},Xz={class:"px-6 py-4 bg-gray-50"},qz=["innerHTML"];function jz(t,e,n,i,s,r){return tn(),mn("div",Gz,[e[1]||(e[1]=j("h2",{class:"text-2xl font-bold mb-6 text-gray-800 text-center"},"FAQ",-1)),(tn(!0),mn(Nn,null,Gv(s.faqs,(o,a)=>(tn(),mn("div",{key:a,class:"mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"},[j("button",{onClick:l=>r.toggle(a),class:"w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"},[j("span",Wz,Dm(o.question),1),(tn(),mn("svg",{class:Ga(["w-5 h-5 text-gray-500 transform transition-transform duration-300",{"rotate-180":o.open}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e[0]||(e[0]=[j("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],8,$z),bt(Gx,{name:"faq-collapse"},{default:ng(()=>[Ge(j("div",Xz,[j("div",{innerHTML:o.answer,class:"text-gray-600"},null,8,qz)],512),[[Yx,o.open]])]),_:2},1024)]))),128))])}const Yz=pr(kz,[["render",jz],["__scopeId","data-v-9b75b70f"]]),Zz={name:"HoleOptionsForm",props:{initialEnableBackHole:{type:Boolean,default:!1},initialBackHoleXOffset:{type:Number,default:0},initialBackHoleWidth:{type:Number,default:55},initialBackHoleHeight:{type:Number,default:10},initialEnableFrontHole:{type:Boolean,default:!1},initialFrontHoleXOffset:{type:Number,default:0},initialFrontHoleWidth:{type:Number,default:55},initialFrontHoleHeight:{type:Number,default:10},initialEnableRightHole:{type:Boolean,default:!1},initialRightHoleXOffset:{type:Number,default:0},initialRightHoleWidth:{type:Number,default:55},initialRightHoleHeight:{type:Number,default:10},initialEnableLeftHole:{type:Boolean,default:!1},initialLeftHoleXOffset:{type:Number,default:0},initialLeftHoleWidth:{type:Number,default:55},initialLeftHoleHeight:{type:Number,default:10},bottomHeight:{type:Number,required:!0}},data(){return{local:{enableBackHole:this.initialEnableBackHole,backHoleXOffset:this.initialBackHoleXOffset,backHoleWidth:this.initialBackHoleWidth,backHoleHeight:this.initialBackHoleHeight,enableFrontHole:this.initialEnableFrontHole,frontHoleXOffset:this.initialFrontHoleXOffset,frontHoleWidth:this.initialFrontHoleWidth,frontHoleHeight:this.initialFrontHoleHeight,enableRightHole:this.initialEnableRightHole,rightHoleXOffset:this.initialRightHoleXOffset,rightHoleWidth:this.initialRightHoleWidth,rightHoleHeight:this.initialRightHoleHeight,enableLeftHole:this.initialEnableLeftHole,leftHoleXOffset:this.initialLeftHoleXOffset,leftHoleWidth:this.initialLeftHoleWidth,leftHoleHeight:this.initialLeftHoleHeight}}},watch:{local:{deep:!0,handler(){this.$emit("update-hole-options",{...this.local})}}}},Kz={class:"mb-6 p-4 border border-gray-300 rounded"},Jz={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Qz={class:"inline-flex items-center mb-2"},e4={key:0,class:"space-y-2"},t4={class:"flex items-center space-x-2"},n4={class:"flex items-center space-x-2"},i4={class:"flex items-center space-x-2"},s4=["max"],r4=["max"],o4={class:"inline-flex items-center mb-2"},a4={key:0,class:"space-y-2"},l4={class:"flex items-center space-x-2"},c4={class:"flex items-center space-x-2"},f4={class:"flex items-center space-x-2"},u4=["max"],h4=["max"],d4={class:"inline-flex items-center mb-2"},p4={key:0,class:"space-y-2"},m4={class:"flex items-center space-x-2"},g4={class:"flex items-center space-x-2"},_4={class:"flex items-center space-x-2"},v4=["max"],x4=["max"],y4={class:"inline-flex items-center mb-2"},M4={key:0,class:"space-y-2"},E4={class:"flex items-center space-x-2"},S4={class:"flex items-center space-x-2"},b4={class:"flex items-center space-x-2"},w4=["max"],T4=["max"];function A4(t,e,n,i,s,r){return tn(),mn("fieldset",Kz,[e[56]||(e[56]=j("legend",{class:"px-2 text-lg font-semibold"},"Hole Options",-1)),j("div",Jz,[j("div",null,[j("div",Qz,[Ge(j("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=o=>s.local.enableBackHole=o),class:"mr-2"},null,512),[[Ao,s.local.enableBackHole]]),e[28]||(e[28]=j("span",{class:"text-sm font-medium text-gray-700"},"Enable Back Hole",-1))]),s.local.enableBackHole?(tn(),mn("div",e4,[j("div",t4,[e[29]||(e[29]=j("label",{class:"w-24 text-sm text-gray-700"},"Position:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[1]||(e[1]=o=>s.local.backHoleXOffset=o),min:"-100",max:"100",step:"1",class:"flex-1"},null,512),[[Je,s.local.backHoleXOffset,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=o=>s.local.backHoleXOffset=o),min:"-100",max:"100",step:"1",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.backHoleXOffset,void 0,{number:!0}]]),e[30]||(e[30]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",n4,[e[31]||(e[31]=j("label",{class:"w-24 text-sm text-gray-700"},"Width:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[3]||(e[3]=o=>s.local.backHoleWidth=o),min:"0",max:"300",step:"1",class:"flex-1"},null,512),[[Je,s.local.backHoleWidth,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=o=>s.local.backHoleWidth=o),min:"0",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.backHoleWidth,void 0,{number:!0}]]),e[32]||(e[32]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",i4,[e[33]||(e[33]=j("label",{class:"w-24 text-sm text-gray-700"},"Height:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[5]||(e[5]=o=>s.local.backHoleHeight=o),min:"0",max:n.bottomHeight,step:"1",class:"flex-1"},null,8,s4),[[Je,s.local.backHoleHeight,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=o=>s.local.backHoleHeight=o),min:"0",max:n.bottomHeight,class:"p-2 border border-gray-300 rounded-md w-16"},null,8,r4),[[Je,s.local.backHoleHeight,void 0,{number:!0}]]),e[34]||(e[34]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])])):To("",!0)]),j("div",null,[j("div",o4,[Ge(j("input",{type:"checkbox","onUpdate:modelValue":e[7]||(e[7]=o=>s.local.enableFrontHole=o),class:"mr-2"},null,512),[[Ao,s.local.enableFrontHole]]),e[35]||(e[35]=j("span",{class:"text-sm font-medium text-gray-700"},"Enable Front Hole",-1))]),s.local.enableFrontHole?(tn(),mn("div",a4,[j("div",l4,[e[36]||(e[36]=j("label",{class:"w-24 text-sm text-gray-700"},"Position:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[8]||(e[8]=o=>s.local.frontHoleXOffset=o),min:"-100",max:"100",step:"1",class:"flex-1"},null,512),[[Je,s.local.frontHoleXOffset,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=o=>s.local.frontHoleXOffset=o),min:"-100",max:"100",step:"1",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.frontHoleXOffset,void 0,{number:!0}]]),e[37]||(e[37]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",c4,[e[38]||(e[38]=j("label",{class:"w-24 text-sm text-gray-700"},"Width:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[10]||(e[10]=o=>s.local.frontHoleWidth=o),min:"0",max:"300",step:"1",class:"flex-1"},null,512),[[Je,s.local.frontHoleWidth,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[11]||(e[11]=o=>s.local.frontHoleWidth=o),min:"0",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.frontHoleWidth,void 0,{number:!0}]]),e[39]||(e[39]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",f4,[e[40]||(e[40]=j("label",{class:"w-24 text-sm text-gray-700"},"Height:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[12]||(e[12]=o=>s.local.frontHoleHeight=o),min:"0",max:n.bottomHeight,step:"1",class:"flex-1"},null,8,u4),[[Je,s.local.frontHoleHeight,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[13]||(e[13]=o=>s.local.frontHoleHeight=o),min:"0",max:n.bottomHeight,class:"p-2 border border-gray-300 rounded-md w-16"},null,8,h4),[[Je,s.local.frontHoleHeight,void 0,{number:!0}]]),e[41]||(e[41]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])])):To("",!0)]),j("div",null,[j("div",d4,[Ge(j("input",{type:"checkbox","onUpdate:modelValue":e[14]||(e[14]=o=>s.local.enableRightHole=o),class:"mr-2"},null,512),[[Ao,s.local.enableRightHole]]),e[42]||(e[42]=j("span",{class:"text-sm font-medium text-gray-700"},"Enable Right Hole",-1))]),s.local.enableRightHole?(tn(),mn("div",p4,[j("div",m4,[e[43]||(e[43]=j("label",{class:"w-24 text-sm text-gray-700"},"Position:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[15]||(e[15]=o=>s.local.rightHoleXOffset=o),min:"-100",max:"100",step:"1",class:"flex-1"},null,512),[[Je,s.local.rightHoleXOffset,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[16]||(e[16]=o=>s.local.rightHoleXOffset=o),min:"-100",max:"100",step:"1",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.rightHoleXOffset,void 0,{number:!0}]]),e[44]||(e[44]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",g4,[e[45]||(e[45]=j("label",{class:"w-24 text-sm text-gray-700"},"Width:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[17]||(e[17]=o=>s.local.rightHoleWidth=o),min:"0",max:"300",step:"1",class:"flex-1"},null,512),[[Je,s.local.rightHoleWidth,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[18]||(e[18]=o=>s.local.rightHoleWidth=o),min:"0",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.rightHoleWidth,void 0,{number:!0}]]),e[46]||(e[46]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",_4,[e[47]||(e[47]=j("label",{class:"w-24 text-sm text-gray-700"},"Height:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[19]||(e[19]=o=>s.local.rightHoleHeight=o),min:"0",max:n.bottomHeight,step:"1",class:"flex-1"},null,8,v4),[[Je,s.local.rightHoleHeight,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[20]||(e[20]=o=>s.local.rightHoleHeight=o),min:"0",max:n.bottomHeight,class:"p-2 border border-gray-300 rounded-md w-16"},null,8,x4),[[Je,s.local.rightHoleHeight,void 0,{number:!0}]]),e[48]||(e[48]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])])):To("",!0)]),j("div",null,[j("div",y4,[Ge(j("input",{type:"checkbox","onUpdate:modelValue":e[21]||(e[21]=o=>s.local.enableLeftHole=o),class:"mr-2"},null,512),[[Ao,s.local.enableLeftHole]]),e[49]||(e[49]=j("span",{class:"text-sm font-medium text-gray-700"},"Enable Left Hole",-1))]),s.local.enableLeftHole?(tn(),mn("div",M4,[j("div",E4,[e[50]||(e[50]=j("label",{class:"w-24 text-sm text-gray-700"},"Position:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[22]||(e[22]=o=>s.local.leftHoleXOffset=o),min:"-100",max:"100",step:"1",class:"flex-1"},null,512),[[Je,s.local.leftHoleXOffset,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[23]||(e[23]=o=>s.local.leftHoleXOffset=o),min:"-100",max:"100",step:"1",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.leftHoleXOffset,void 0,{number:!0}]]),e[51]||(e[51]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",S4,[e[52]||(e[52]=j("label",{class:"w-24 text-sm text-gray-700"},"Width:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[24]||(e[24]=o=>s.local.leftHoleWidth=o),min:"0",max:"300",step:"1",class:"flex-1"},null,512),[[Je,s.local.leftHoleWidth,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[25]||(e[25]=o=>s.local.leftHoleWidth=o),min:"0",class:"p-2 border border-gray-300 rounded-md w-16"},null,512),[[Je,s.local.leftHoleWidth,void 0,{number:!0}]]),e[53]||(e[53]=j("span",{class:"text-sm text-gray-700"},"mm",-1))]),j("div",b4,[e[54]||(e[54]=j("label",{class:"w-24 text-sm text-gray-700"},"Height:",-1)),Ge(j("input",{type:"range","onUpdate:modelValue":e[26]||(e[26]=o=>s.local.leftHoleHeight=o),min:"0",max:n.bottomHeight,step:"1",class:"flex-1"},null,8,w4),[[Je,s.local.leftHoleHeight,void 0,{number:!0}]]),Ge(j("input",{type:"number","onUpdate:modelValue":e[27]||(e[27]=o=>s.local.leftHoleHeight=o),min:"0",max:n.bottomHeight,class:"p-2 border border-gray-300 rounded-md w-16"},null,8,T4),[[Je,s.local.leftHoleHeight,void 0,{number:!0}]]),e[55]||(e[55]=j("span",{class:"text-sm text-gray-700"},"mm",-1))])])):To("",!0)])])])}const R4=pr(Zz,[["render",A4]]),C4="/SynthArmor/dev/SynthArmor_logo.png",P4={name:"App",components:{BasicForm:R1,AdvancedForm:H1,ModelViewer:Vz,FAQ:Yz,HoleOptionsForm:R4},data(){return{width:155,depth:105,safety:0,bottomHeight:15,topHeight:25,borderThickness:2.5,enableBackHole:!1,backHoleXOffset:0,backHoleWidth:55,backHoleHeight:10,enableFrontHole:!1,frontHoleXOffset:0,frontHoleWidth:55,frontHoleHeight:10,enableRightHole:!1,rightHoleXOffset:0,rightHoleWidth:55,rightHoleHeight:10,enableLeftHole:!1,leftHoleXOffset:0,leftHoleWidth:55,leftHoleHeight:10}},methods:{updateBasic({width:t,depth:e,safety:n}){this.width=t,this.depth=e,this.safety=n},updateAdvanced({bottomHeight:t,topHeight:e,borderThickness:n}){this.bottomHeight=t,this.topHeight=e,this.borderThickness=n},updateHoleOptions(t){Object.assign(this,t)},downloadModel(){this.$refs.modelViewer.downloadSTL()}}},L4={class:"max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6"},D4={class:"w-full max-w-[600px] bg-white rounded shadow p-6"};function U4(t,e,n,i,s,r){const o=br("BasicForm"),a=br("ModelViewer"),l=br("AdvancedForm"),c=br("HoleOptionsForm"),f=br("FAQ");return tn(),mn("div",L4,[e[1]||(e[1]=j("img",{src:C4,alt:"SynthArmor Logo",class:"w-40 mb-4"},null,-1)),e[2]||(e[2]=j("div",{class:"mb-8 text-center"},[j("p",{class:"text-gray-600"}," Modify the dimensions of a 3D model and download your custom design instantly. ")],-1)),j("div",D4,[bt(o,{"initial-width":s.width,"initial-depth":s.depth,"initial-safety":s.safety,onUpdateDimensions:r.updateBasic},null,8,["initial-width","initial-depth","initial-safety","onUpdateDimensions"]),bt(a,{ref:"modelViewer",width:s.width,depth:s.depth,safety:s.safety,"bottom-height":s.bottomHeight,"top-height":s.topHeight,"border-thickness":s.borderThickness,"enable-back-hole":s.enableBackHole,"back-hole-x-offset":s.backHoleXOffset,"back-hole-width":s.backHoleWidth,"back-hole-height":s.backHoleHeight,"enable-front-hole":s.enableFrontHole,"front-hole-x-offset":s.frontHoleXOffset,"front-hole-width":s.frontHoleWidth,"front-hole-height":s.frontHoleHeight,"enable-right-hole":s.enableRightHole,"right-hole-x-offset":s.rightHoleXOffset,"right-hole-width":s.rightHoleWidth,"right-hole-height":s.rightHoleHeight,"enable-left-hole":s.enableLeftHole,"left-hole-x-offset":s.leftHoleXOffset,"left-hole-width":s.leftHoleWidth,"left-hole-height":s.leftHoleHeight},null,8,["width","depth","safety","bottom-height","top-height","border-thickness","enable-back-hole","back-hole-x-offset","back-hole-width","back-hole-height","enable-front-hole","front-hole-x-offset","front-hole-width","front-hole-height","enable-right-hole","right-hole-x-offset","right-hole-width","right-hole-height","enable-left-hole","left-hole-x-offset","left-hole-width","left-hole-height"]),bt(l,{"initial-bottom-height":s.bottomHeight,"initial-top-height":s.topHeight,"initial-border-thickness":s.borderThickness,onUpdateAdvanced:r.updateAdvanced},null,8,["initial-bottom-height","initial-top-height","initial-border-thickness","onUpdateAdvanced"]),bt(c,{"initial-enable-back-hole":s.enableBackHole,"initial-back-hole-x-offset":s.backHoleXOffset,"initial-back-hole-width":s.backHoleWidth,"initial-back-hole-height":s.backHoleHeight,"initial-enable-front-hole":s.enableFrontHole,"initial-front-hole-x-offset":s.frontHoleXOffset,"initial-front-hole-width":s.frontHoleWidth,"initial-front-hole-height":s.frontHoleHeight,"initial-enable-right-hole":s.enableRightHole,"initial-right-hole-x-offset":s.rightHoleXOffset,"initial-right-hole-width":s.rightHoleWidth,"initial-right-hole-height":s.rightHoleHeight,"initial-enable-left-hole":s.enableLeftHole,"initial-left-hole-x-offset":s.leftHoleXOffset,"initial-left-hole-width":s.leftHoleWidth,"initial-left-hole-height":s.leftHoleHeight,"bottom-height":s.bottomHeight,onUpdateHoleOptions:r.updateHoleOptions},null,8,["initial-enable-back-hole","initial-back-hole-x-offset","initial-back-hole-width","initial-back-hole-height","initial-enable-front-hole","initial-front-hole-x-offset","initial-front-hole-width","initial-front-hole-height","initial-enable-right-hole","initial-right-hole-x-offset","initial-right-hole-width","initial-right-hole-height","initial-enable-left-hole","initial-left-hole-x-offset","initial-left-hole-width","initial-left-hole-height","bottom-height","onUpdateHoleOptions"]),j("button",{onClick:e[0]||(e[0]=(...u)=>r.downloadModel&&r.downloadModel(...u)),class:"mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 block mx-auto"}," Download file ")]),bt(f)])}const I4=pr(P4,[["render",U4]]);g1(I4).mount("#app");
