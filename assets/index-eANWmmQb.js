(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const rt={},Zs=[],qn=()=>{},A_=()=>!1,Ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yu=t=>t.startsWith("onUpdate:"),Dt=Object.assign,Mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R_=Object.prototype.hasOwnProperty,Je=(t,e)=>R_.call(t,e),Ie=Array.isArray,Ks=t=>Ia(t)==="[object Map]",xm=t=>Ia(t)==="[object Set]",Oe=t=>typeof t=="function",mt=t=>typeof t=="string",Bi=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",ym=t=>(ct(t)||Oe(t))&&Oe(t.then)&&Oe(t.catch),Mm=Object.prototype.toString,Ia=t=>Mm.call(t),C_=t=>Ia(t).slice(8,-1),Em=t=>Ia(t)==="[object Object]",Eu=t=>mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gr=xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},P_=/-(\w)/g,En=Na(t=>t.replace(P_,(e,n)=>n?n.toUpperCase():"")),L_=/\B([A-Z])/g,zi=Na(t=>t.replace(L_,"-$1").toLowerCase()),Fa=Na(t=>t.charAt(0).toUpperCase()+t.slice(1)),gc=Na(t=>t?`on${Fa(t)}`:""),hs=(t,e)=>!Object.is(t,e),pa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Vl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},D_=t=>{const e=mt(t)?Number(t):NaN;return isNaN(e)?t:e};let uf;const Oa=()=>uf||(uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Su(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=mt(i)?F_(i):Su(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(mt(t)||ct(t))return t}const U_=/;(?![^(]*\))/g,I_=/:([^]+)/,N_=/\/\*[^]*?\*\//g;function F_(t){const e={};return t.replace(N_,"").split(U_).forEach(n=>{if(n){const i=n.split(I_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ba(t){let e="";if(mt(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=Ba(t[n]);i&&(e+=i+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const O_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B_=xu(O_);function bm(t){return!!t||t===""}const Tm=t=>!!(t&&t.__v_isRef===!0),wm=t=>mt(t)?t:t==null?"":Ie(t)||ct(t)&&(t.toString===Mm||!Oe(t.toString))?Tm(t)?wm(t.value):JSON.stringify(t,Am,2):String(t),Am=(t,e)=>Tm(e)?Am(t,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[_c(i,r)+" =>"]=s,n),{})}:xm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_c(n))}:Bi(e)?_c(e):ct(e)&&!Ie(e)&&!Em(e)?String(e):e,_c=(t,e="")=>{var n;return Bi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let un;class z_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function H_(){return un}let ot;const vc=new WeakSet;class Rm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&un.active&&un.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ff(this),Lm(this);const e=ot,n=In;ot=this,In=!0;try{return this.fn()}finally{Dm(this),ot=e,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wu(e);this.deps=this.depsTail=void 0,ff(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$l(this)&&this.run()}get dirty(){return $l(this)}}let Cm=0,kr,Wr;function Pm(t,e=!1){if(t.flags|=8,e){t.next=Wr,Wr=t;return}t.next=kr,kr=t}function bu(){Cm++}function Tu(){if(--Cm>0)return;if(Wr){let e=Wr;for(Wr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;kr;){let e=kr;for(kr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Lm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),wu(i),V_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function $l(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Um(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Um(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Kr))return;t.globalVersion=Kr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!$l(t)){t.flags&=-3;return}const n=ot,i=In;ot=t,In=!0;try{Lm(t);const s=t.fn(t._value);(e.version===0||hs(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ot=n,In=i,Dm(t),t.flags&=-3}}function wu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)wu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function V_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let In=!0;const Im=[];function Hi(){Im.push(In),In=!1}function Vi(){const t=Im.pop();In=t===void 0?!0:t}function ff(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ot;ot=void 0;try{e()}finally{ot=n}}}let Kr=0;class $_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nm{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ot||!In||ot===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ot)n=this.activeLink=new $_(ot,this),ot.deps?(n.prevDep=ot.depsTail,ot.depsTail.nextDep=n,ot.depsTail=n):ot.deps=ot.depsTail=n,Fm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ot.depsTail,n.nextDep=void 0,ot.depsTail.nextDep=n,ot.depsTail=n,ot.deps===n&&(ot.deps=i)}return n}trigger(e){this.version++,Kr++,this.notify(e)}notify(e){bu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tu()}}}function Fm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Gl=new WeakMap,ds=Symbol(""),kl=Symbol(""),Jr=Symbol("");function Ot(t,e,n){if(In&&ot){let i=Gl.get(t);i||Gl.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Nm),s.map=i,s.key=n),s.track()}}function ui(t,e,n,i,s,r){const o=Gl.get(t);if(!o){Kr++;return}const a=c=>{c&&c.trigger()};if(bu(),e==="clear")o.forEach(a);else{const c=Ie(t),l=c&&Eu(n);if(c&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Jr||!Bi(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Jr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(ds)),Ks(t)&&a(o.get(kl)));break;case"delete":c||(a(o.get(ds)),Ks(t)&&a(o.get(kl)));break;case"set":Ks(t)&&a(o.get(ds));break}}Tu()}function Es(t){const e=et(t);return e===t?e:(Ot(e,"iterate",Jr),Nn(t)?e:e.map(Kt))}function za(t){return Ot(t=et(t),"iterate",Jr),t}const G_={__proto__:null,[Symbol.iterator](){return xc(this,Symbol.iterator,Kt)},concat(...t){return Es(this).concat(...t.map(e=>Ie(e)?Es(e):e))},entries(){return xc(this,"entries",t=>(t[1]=Kt(t[1]),t))},every(t,e){return jn(this,"every",t,e,void 0,arguments)},filter(t,e){return jn(this,"filter",t,e,n=>n.map(Kt),arguments)},find(t,e){return jn(this,"find",t,e,Kt,arguments)},findIndex(t,e){return jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return jn(this,"findLast",t,e,Kt,arguments)},findLastIndex(t,e){return jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return Es(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return jn(this,"map",t,e,void 0,arguments)},pop(){return Mr(this,"pop")},push(...t){return Mr(this,"push",t)},reduce(t,...e){return hf(this,"reduce",t,e)},reduceRight(t,...e){return hf(this,"reduceRight",t,e)},shift(){return Mr(this,"shift")},some(t,e){return jn(this,"some",t,e,void 0,arguments)},splice(...t){return Mr(this,"splice",t)},toReversed(){return Es(this).toReversed()},toSorted(t){return Es(this).toSorted(t)},toSpliced(...t){return Es(this).toSpliced(...t)},unshift(...t){return Mr(this,"unshift",t)},values(){return xc(this,"values",Kt)}};function xc(t,e,n){const i=za(t),s=i[e]();return i!==t&&!Nn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const k_=Array.prototype;function jn(t,e,n,i,s,r){const o=za(t),a=o!==t&&!Nn(t),c=o[e];if(c!==k_[e]){const f=c.apply(t,r);return a?Kt(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,Kt(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,i);return a&&s?s(u):u}function hf(t,e,n,i){const s=za(t);let r=n;return s!==t&&(Nn(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,Kt(a),c,t)}),s[e](r,...i)}function yc(t,e,n){const i=et(t);Ot(i,"iterate",Jr);const s=i[e](...n);return(s===-1||s===!1)&&Pu(n[0])?(n[0]=et(n[0]),i[e](...n)):s}function Mr(t,e,n=[]){Hi(),bu();const i=et(t)[e].apply(t,n);return Tu(),Vi(),i}const W_=xu("__proto__,__v_isRef,__isVue"),Om=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bi));function X_(t){Bi(t)||(t=String(t));const e=et(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class Bm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?nv:$m:r?Vm:Hm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!s){let c;if(o&&(c=G_[n]))return c;if(n==="hasOwnProperty")return X_}const a=Reflect.get(e,n,jt(e)?e:i);return(Bi(n)?Om.has(n):W_(n))||(s||Ot(e,"get",n),r)?a:jt(a)?o&&Eu(n)?a:a.value:ct(a)?s?Gm(a):Ru(a):a}}class zm extends Bm{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=rr(r);if(!Nn(i)&&!rr(i)&&(r=et(r),i=et(i)),!Ie(e)&&jt(r)&&!jt(i))return c?!1:(r.value=i,!0)}const o=Ie(e)&&Eu(n)?Number(n)<e.length:Je(e,n),a=Reflect.set(e,n,i,jt(e)?e:s);return e===et(s)&&(o?hs(i,r)&&ui(e,"set",n,i):ui(e,"add",n,i)),a}deleteProperty(e,n){const i=Je(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&ui(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Bi(n)||!Om.has(n))&&Ot(e,"has",n),i}ownKeys(e){return Ot(e,"iterate",Ie(e)?"length":ds),Reflect.ownKeys(e)}}class q_ extends Bm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Y_=new zm,j_=new q_,Z_=new zm(!0);const Wl=t=>t,xo=t=>Reflect.getPrototypeOf(t);function K_(t,e,n){return function(...i){const s=this.__v_raw,r=et(s),o=Ks(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...i),u=n?Wl:e?Xl:Kt;return!e&&Ot(r,"iterate",c?kl:ds),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function J_(t,e){const n={get(s){const r=this.__v_raw,o=et(r),a=et(s);t||(hs(s,a)&&Ot(o,"get",s),Ot(o,"get",a));const{has:c}=xo(o),l=e?Wl:t?Xl:Kt;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Ot(et(s),"iterate",ds),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=et(r),a=et(s);return t||(hs(s,a)&&Ot(o,"has",s),Ot(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=et(a),l=e?Wl:t?Xl:Kt;return!t&&Ot(c,"iterate",ds),a.forEach((u,f)=>s.call(r,l(u),l(f),o))}};return Dt(n,t?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(s){!e&&!Nn(s)&&!rr(s)&&(s=et(s));const r=et(this);return xo(r).has.call(r,s)||(r.add(s),ui(r,"add",s,s)),this},set(s,r){!e&&!Nn(r)&&!rr(r)&&(r=et(r));const o=et(this),{has:a,get:c}=xo(o);let l=a.call(o,s);l||(s=et(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?hs(r,u)&&ui(o,"set",s,r):ui(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=xo(r);let c=o.call(r,s);c||(s=et(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&ui(r,"delete",s,void 0),l},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=K_(s,t,e)}),n}function Au(t,e){const n=J_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Je(n,s)&&s in i?n:i,s,r)}const Q_={get:Au(!1,!1)},ev={get:Au(!1,!0)},tv={get:Au(!0,!1)};const Hm=new WeakMap,Vm=new WeakMap,$m=new WeakMap,nv=new WeakMap;function iv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sv(t){return t.__v_skip||!Object.isExtensible(t)?0:iv(C_(t))}function Ru(t){return rr(t)?t:Cu(t,!1,Y_,Q_,Hm)}function rv(t){return Cu(t,!1,Z_,ev,Vm)}function Gm(t){return Cu(t,!0,j_,tv,$m)}function Cu(t,e,n,i,s){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=sv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Js(t){return rr(t)?Js(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function Nn(t){return!!(t&&t.__v_isShallow)}function Pu(t){return t?!!t.__v_raw:!1}function et(t){const e=t&&t.__v_raw;return e?et(e):t}function ov(t){return!Je(t,"__v_skip")&&Object.isExtensible(t)&&Sm(t,"__v_skip",!0),t}const Kt=t=>ct(t)?Ru(t):t,Xl=t=>ct(t)?Gm(t):t;function jt(t){return t?t.__v_isRef===!0:!1}function av(t){return jt(t)?t.value:t}const cv={get:(t,e,n)=>e==="__v_raw"?t:av(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return jt(s)&&!jt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function km(t){return Js(t)?t:new Proxy(t,cv)}class lv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nm(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return Pm(this,!0),!0}get value(){const e=this.dep.track();return Um(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uv(t,e,n=!1){let i,s;return Oe(t)?i=t:(i=t.get,s=t.set),new lv(i,s,n)}const Mo={},Ma=new WeakMap;let ts;function fv(t,e=!1,n=ts){if(n){let i=Ma.get(n);i||Ma.set(n,i=[]),i.push(t)}}function hv(t,e,n=rt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=n,l=x=>s?x:Nn(x)||s===!1||s===0?fi(x,1):fi(x);let u,f,h,d,_=!1,g=!1;if(jt(t)?(f=()=>t.value,_=Nn(t)):Js(t)?(f=()=>l(t),_=!0):Ie(t)?(g=!0,_=t.some(x=>Js(x)||Nn(x)),f=()=>t.map(x=>{if(jt(x))return x.value;if(Js(x))return l(x);if(Oe(x))return c?c(x,2):x()})):Oe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){Hi();try{h()}finally{Vi()}}const x=ts;ts=u;try{return c?c(t,3,[d]):t(d)}finally{ts=x}}:f=qn,e&&s){const x=f,M=s===!0?1/0:s;f=()=>fi(x(),M)}const m=H_(),p=()=>{u.stop(),m&&m.active&&Mu(m.effects,u)};if(r&&e){const x=e;e=(...M)=>{x(...M),p()}}let S=g?new Array(t.length).fill(Mo):Mo;const y=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const M=u.run();if(s||_||(g?M.some((E,w)=>hs(E,S[w])):hs(M,S))){h&&h();const E=ts;ts=u;try{const w=[M,S===Mo?void 0:g&&S[0]===Mo?[]:S,d];c?c(e,3,w):e(...w),S=M}finally{ts=E}}}else u.run()};return a&&a(y),u=new Rm(f),u.scheduler=o?()=>o(y,!1):y,d=x=>fv(x,!1,u),h=u.onStop=()=>{const x=Ma.get(u);if(x){if(c)c(x,4);else for(const M of x)M();Ma.delete(u)}},e?i?y(!0):S=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function fi(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,jt(t))fi(t.value,e,n);else if(Ie(t))for(let i=0;i<t.length;i++)fi(t[i],e,n);else if(xm(t)||Ks(t))t.forEach(i=>{fi(i,e,n)});else if(Em(t)){for(const i in t)fi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&fi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lo(t,e,n,i){try{return i?t(...i):t()}catch(s){Ha(s,e,n)}}function Fn(t,e,n,i){if(Oe(t)){const s=lo(t,e,n,i);return s&&ym(s)&&s.catch(r=>{Ha(r,e,n)}),s}if(Ie(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Fn(t[r],e,n,i));return s}}function Ha(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||rt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(r){Hi(),lo(r,null,10,[t,c,l]),Vi();return}}dv(t,n,s,i,o)}function dv(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const qt=[];let Gn=-1;const Qs=[];let Ri=null,Ws=0;const Wm=Promise.resolve();let Ea=null;function pv(t){const e=Ea||Wm;return t?e.then(this?t.bind(this):t):e}function mv(t){let e=Gn+1,n=qt.length;for(;e<n;){const i=e+n>>>1,s=qt[i],r=Qr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Lu(t){if(!(t.flags&1)){const e=Qr(t),n=qt[qt.length-1];!n||!(t.flags&2)&&e>=Qr(n)?qt.push(t):qt.splice(mv(e),0,t),t.flags|=1,Xm()}}function Xm(){Ea||(Ea=Wm.then(Ym))}function gv(t){Ie(t)?Qs.push(...t):Ri&&t.id===-1?Ri.splice(Ws+1,0,t):t.flags&1||(Qs.push(t),t.flags|=1),Xm()}function df(t,e,n=Gn+1){for(;n<qt.length;n++){const i=qt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;qt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qm(t){if(Qs.length){const e=[...new Set(Qs)].sort((n,i)=>Qr(n)-Qr(i));if(Qs.length=0,Ri){Ri.push(...e);return}for(Ri=e,Ws=0;Ws<Ri.length;Ws++){const n=Ri[Ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ri=null,Ws=0}}const Qr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ym(t){try{for(Gn=0;Gn<qt.length;Gn++){const e=qt[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),lo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<qt.length;Gn++){const e=qt[Gn];e&&(e.flags&=-2)}Gn=-1,qt.length=0,qm(),Ea=null,(qt.length||Qs.length)&&Ym()}}let Qt=null,jm=null;function Sa(t){const e=Qt;return Qt=t,jm=t&&t.type.__scopeId||null,e}function Zm(t,e=Qt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&bf(-1);const r=Sa(e);let o;try{o=t(...s)}finally{Sa(r),i._d&&bf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Di(t,e){if(Qt===null)return t;const n=Wa(Qt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,c=rt]=e[s];r&&(Oe(r)&&(r={mounted:r,updated:r}),r.deep&&fi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Xi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Hi(),Fn(c,n,8,[t.el,a,t,e]),Vi())}}const _v=Symbol("_vte"),Km=t=>t.__isTeleport,Ci=Symbol("_leaveCb"),Eo=Symbol("_enterCb");function vv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rg(()=>{t.isMounted=!0}),og(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],Jm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},Qm=t=>{const e=t.subTree;return e.component?Qm(e.component):e},xv={name:"BaseTransition",props:Jm,setup(t,{slots:e}){const n=xx(),i=vv();return()=>{const s=e.default&&ng(e.default(),!0);if(!s||!s.length)return;const r=eg(s),o=et(t),{mode:a}=o;if(i.isLeaving)return Mc(r);const c=pf(r);if(!c)return Mc(r);let l=ql(c,o,i,n,f=>l=f);c.type!==yn&&eo(c,l);let u=n.subTree&&pf(n.subTree);if(u&&u.type!==yn&&!ss(c,u)&&Qm(n).type!==yn){let f=ql(u,o,i,n);if(eo(u,f),a==="out-in"&&c.type!==yn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Mc(r);a==="in-out"&&c.type!==yn?f.delayLeave=(h,d,_)=>{const g=tg(i,u);g[String(u.key)]=u,h[Ci]=()=>{d(),h[Ci]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{_(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function eg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==yn){e=n;break}}return e}const yv=xv;function tg(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ql(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:S,onAppearCancelled:y}=e,x=String(t.key),M=tg(n,t),E=(v,T)=>{v&&Fn(v,i,9,T)},w=(v,T)=>{const N=T[1];E(v,T),Ie(v)?v.every(U=>U.length<=1)&&N():v.length<=1&&N()},L={mode:o,persisted:a,beforeEnter(v){let T=c;if(!n.isMounted)if(r)T=m||c;else return;v[Ci]&&v[Ci](!0);const N=M[x];N&&ss(t,N)&&N.el[Ci]&&N.el[Ci](),E(T,[v])},enter(v){let T=l,N=u,U=f;if(!n.isMounted)if(r)T=p||l,N=S||u,U=y||f;else return;let I=!1;const F=v[Eo]=B=>{I||(I=!0,B?E(U,[v]):E(N,[v]),L.delayedLeave&&L.delayedLeave(),v[Eo]=void 0)};T?w(T,[v,F]):F()},leave(v,T){const N=String(t.key);if(v[Eo]&&v[Eo](!0),n.isUnmounting)return T();E(h,[v]);let U=!1;const I=v[Ci]=F=>{U||(U=!0,T(),F?E(g,[v]):E(_,[v]),v[Ci]=void 0,M[N]===t&&delete M[N])};M[N]=t,d?w(d,[v,I]):I()},clone(v){const T=ql(v,e,n,i,s);return s&&s(T),T}};return L}function Mc(t){if(Va(t))return t=Fi(t),t.children=null,t}function pf(t){if(!Va(t))return Km(t.type)&&t.children?eg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Oe(n.default))return n.default()}}function eo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,eo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ng(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ln?(o.patchFlag&128&&s++,i=i.concat(ng(o.children,e,a))):(e||o.type!==yn)&&i.push(a!=null?Fi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ig(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ba(t,e,n,i,s=!1){if(Ie(t)){t.forEach((_,g)=>ba(_,e&&(Ie(e)?e[g]:e),n,i,s));return}if(Xr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ba(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Wa(i.component):i.el,o=s?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,f=a.setupState,h=et(f),d=f===rt?()=>!1:_=>Je(h,_);if(l!=null&&l!==c&&(mt(l)?(u[l]=null,d(l)&&(f[l]=null)):jt(l)&&(l.value=null)),Oe(c))lo(c,a,12,[o,u]);else{const _=mt(c),g=jt(c);if(_||g){const m=()=>{if(t.f){const p=_?d(c)?f[c]:u[c]:c.value;s?Ie(p)&&Mu(p,r):Ie(p)?p.includes(r)||p.push(r):_?(u[c]=[r],d(c)&&(f[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else _?(u[c]=o,d(c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ln(m,n)):m()}}}Oa().requestIdleCallback;Oa().cancelIdleCallback;const Xr=t=>!!t.type.__asyncLoader,Va=t=>t.type.__isKeepAlive;function Mv(t,e){sg(t,"a",e)}function Ev(t,e){sg(t,"da",e)}function sg(t,e,n=Lt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($a(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Va(s.parent.vnode)&&Sv(i,e,n,s),s=s.parent}}function Sv(t,e,n,i){const s=$a(e,t,i,!0);ag(()=>{Mu(i[e],s)},n)}function $a(t,e,n=Lt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Hi();const a=uo(n),c=Fn(e,n,t,o);return a(),Vi(),c});return i?s.unshift(r):s.push(r),r}}const mi=t=>(e,n=Lt)=>{(!no||t==="sp")&&$a(t,(...i)=>e(...i),n)},bv=mi("bm"),rg=mi("m"),Tv=mi("bu"),wv=mi("u"),og=mi("bum"),ag=mi("um"),Av=mi("sp"),Rv=mi("rtg"),Cv=mi("rtc");function Pv(t,e=Lt){$a("ec",t,e)}const Lv="components";function So(t,e){return Uv(Lv,t,!0,e)||t}const Dv=Symbol.for("v-ndc");function Uv(t,e,n=!0,i=!1){const s=Qt||Lt;if(s){const r=s.type;{const a=bx(r,!1);if(a&&(a===e||a===En(e)||a===Fa(En(e))))return r}const o=mf(s[t]||r[t],e)||mf(s.appContext[t],e);return!o&&i?r:o}}function mf(t,e){return t&&(t[e]||t[En(e)]||t[Fa(En(e))])}function Iv(t,e,n,i){let s;const r=n,o=Ie(t);if(o||mt(t)){const a=o&&Js(t);let c=!1;a&&(c=!Nn(t),t=za(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?Kt(t[l]):t[l],l,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ct(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,r)}}else s=[];return s}const Yl=t=>t?Ag(t)?Wa(t):Yl(t.parent):null,qr=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yl(t.parent),$root:t=>Yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lg(t),$forceUpdate:t=>t.f||(t.f=()=>{Lu(t.update)}),$nextTick:t=>t.n||(t.n=pv.bind(t.proxy)),$watch:t=>nx.bind(t)}),Ec=(t,e)=>t!==rt&&!t.__isScriptSetup&&Je(t,e),Nv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ec(i,e))return o[e]=1,i[e];if(s!==rt&&Je(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Je(l,e))return o[e]=3,r[e];if(n!==rt&&Je(n,e))return o[e]=4,n[e];jl&&(o[e]=0)}}const u=qr[e];let f,h;if(u)return e==="$attrs"&&Ot(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==rt&&Je(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Je(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ec(s,e)?(s[e]=n,!0):i!==rt&&Je(i,e)?(i[e]=n,!0):Je(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==rt&&Je(t,o)||Ec(e,o)||(a=r[0])&&Je(a,o)||Je(i,o)||Je(qr,o)||Je(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Je(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gf(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jl=!0;function Fv(t){const e=lg(t),n=t.proxy,i=t.ctx;jl=!1,e.beforeCreate&&_f(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:y,unmounted:x,render:M,renderTracked:E,renderTriggered:w,errorCaptured:L,serverPrefetch:v,expose:T,inheritAttrs:N,components:U,directives:I,filters:F}=e;if(l&&Ov(l,i,null),o)for(const G in o){const W=o[G];Oe(W)&&(i[G]=W.bind(n))}if(s){const G=s.call(n,n);ct(G)&&(t.data=Ru(G))}if(jl=!0,r)for(const G in r){const W=r[G],oe=Oe(W)?W.bind(n,n):Oe(W.get)?W.get.bind(n,n):qn,ee=!Oe(W)&&Oe(W.set)?W.set.bind(n):qn,Se=wx({get:oe,set:ee});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>Se.value,set:ce=>Se.value=ce})}if(a)for(const G in a)cg(a[G],i,n,G);if(c){const G=Oe(c)?c.call(n):c;Reflect.ownKeys(G).forEach(W=>{Gv(W,G[W])})}u&&_f(u,t,"c");function H(G,W){Ie(W)?W.forEach(oe=>G(oe.bind(n))):W&&G(W.bind(n))}if(H(bv,f),H(rg,h),H(Tv,d),H(wv,_),H(Mv,g),H(Ev,m),H(Pv,L),H(Cv,E),H(Rv,w),H(og,S),H(ag,x),H(Av,v),Ie(T))if(T.length){const G=t.exposed||(t.exposed={});T.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:oe=>n[W]=oe})})}else t.exposed||(t.exposed={});M&&t.render===qn&&(t.render=M),N!=null&&(t.inheritAttrs=N),U&&(t.components=U),I&&(t.directives=I),v&&ig(t)}function Ov(t,e,n=qn){Ie(t)&&(t=Zl(t));for(const i in t){const s=t[i];let r;ct(s)?"default"in s?r=ma(s.from||i,s.default,!0):r=ma(s.from||i):r=ma(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function _f(t,e,n){Fn(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function cg(t,e,n,i){let s=i.includes(".")?Sg(n,i):()=>n[i];if(mt(t)){const r=e[t];Oe(r)&&bc(s,r)}else if(Oe(t))bc(s,t.bind(n));else if(ct(t))if(Ie(t))t.forEach(r=>cg(r,e,n,i));else{const r=Oe(t.handler)?t.handler.bind(n):e[t.handler];Oe(r)&&bc(s,r,t)}}function lg(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(l=>Ta(c,l,o,!0)),Ta(c,e,o)),ct(e)&&r.set(e,c),c}function Ta(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ta(t,r,n,!0),s&&s.forEach(o=>Ta(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Bv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Bv={data:vf,props:xf,emits:xf,methods:Fr,computed:Fr,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Fr,directives:Fr,watch:Hv,provide:vf,inject:zv};function vf(t,e){return e?t?function(){return Dt(Oe(t)?t.call(this,this):t,Oe(e)?e.call(this,this):e)}:e:t}function zv(t,e){return Fr(Zl(t),Zl(e))}function Zl(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fr(t,e){return t?Dt(Object.create(null),t,e):e}function xf(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:Dt(Object.create(null),gf(t),gf(e??{})):e}function Hv(t,e){if(!t)return e;if(!e)return t;const n=Dt(Object.create(null),t);for(const i in e)n[i]=Gt(t[i],e[i]);return n}function ug(){return{app:null,config:{isNativeTag:A_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vv=0;function $v(t,e){return function(i,s=null){Oe(i)||(i=Dt({},i)),s!=null&&!ct(s)&&(s=null);const r=ug(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Vv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Rx,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Oe(u.install)?(o.add(u),u.install(l,...f)):Oe(u)&&(o.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,h){if(!c){const d=l._ceVNode||Bt(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(d,u,h),c=!0,l._container=u,u.__vue_app__=l,Wa(d.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Fn(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){const f=er;er=l;try{return u()}finally{er=f}}};return l}}let er=null;function Gv(t,e){if(Lt){let n=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===n&&(n=Lt.provides=Object.create(i)),n[t]=e}}function ma(t,e,n=!1){const i=Lt||Qt;if(i||er){const s=er?er._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Oe(e)?e.call(i&&i.proxy):e}}const fg={},hg=()=>Object.create(fg),dg=t=>Object.getPrototypeOf(t)===fg;function kv(t,e,n,i=!1){const s={},r=hg();t.propsDefaults=Object.create(null),pg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:rv(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Wv(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=et(s),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ga(t.emitsOptions,h))continue;const d=e[h];if(c)if(Je(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const _=En(h);s[_]=Kl(c,a,_,d,t,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{pg(t,e,s,r)&&(l=!0);let u;for(const f in a)(!e||!Je(e,f)&&((u=zi(f))===f||!Je(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Kl(c,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Je(e,f))&&(delete r[f],l=!0)}l&&ui(t.attrs,"set","")}function pg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Gr(c))continue;const l=e[c];let u;s&&Je(s,u=En(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ga(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=et(n),l=a||rt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Kl(s,c,f,l[f],t,!Je(l,f))}}return o}function Kl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Je(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const u=uo(s);i=l[n]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===zi(n))&&(i=!0))}return i}const Xv=new WeakMap;function mg(t,e,n=!1){const i=n?Xv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let c=!1;if(!Oe(t)){const u=f=>{c=!0;const[h,d]=mg(f,e,!0);Dt(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ct(t)&&i.set(t,Zs),Zs;if(Ie(r))for(let u=0;u<r.length;u++){const f=En(r[u]);yf(f)&&(o[f]=rt)}else if(r)for(const u in r){const f=En(u);if(yf(f)){const h=r[u],d=o[f]=Ie(h)||Oe(h)?{type:h}:Dt({},h),_=d.type;let g=!1,m=!0;if(Ie(_))for(let p=0;p<_.length;++p){const S=_[p],y=Oe(S)&&S.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(m=!1)}else g=Oe(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||Je(d,"default"))&&a.push(f)}}const l=[o,a];return ct(t)&&i.set(t,l),l}function yf(t){return t[0]!=="$"&&!Gr(t)}const gg=t=>t[0]==="_"||t==="$stable",Du=t=>Ie(t)?t.map(kn):[kn(t)],qv=(t,e,n)=>{if(e._n)return e;const i=Zm((...s)=>Du(e(...s)),n);return i._c=!1,i},_g=(t,e,n)=>{const i=t._ctx;for(const s in t){if(gg(s))continue;const r=t[s];if(Oe(r))e[s]=qv(s,r,i);else if(r!=null){const o=Du(r);e[s]=()=>o}}},vg=(t,e)=>{const n=Du(e);t.slots.default=()=>n},xg=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},Yv=(t,e,n)=>{const i=t.slots=hg();if(t.vnode.shapeFlag&32){const s=e._;s?(xg(i,e,n),n&&Sm(i,"_",s,!0)):_g(e,i)}else e&&vg(t,e)},jv=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:xg(s,e,n):(r=!e.$stable,_g(e,s)),o=e}else e&&(vg(t,e),o={default:1});if(r)for(const a in s)!gg(a)&&o[a]==null&&delete s[a]},ln=lx;function Zv(t){return Kv(t)}function Kv(t,e){const n=Oa();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=qn,insertStaticContent:_}=t,g=(P,D,V,ie=null,Q=null,ne=null,pe=void 0,re=null,le=!!D.dynamicChildren)=>{if(P===D)return;P&&!ss(P,D)&&(ie=A(P),ce(P,Q,ne,!0),P=null),D.patchFlag===-2&&(le=!1,D.dynamicChildren=null);const{type:ae,ref:R,shapeFlag:b}=D;switch(ae){case ka:m(P,D,V,ie);break;case yn:p(P,D,V,ie);break;case Tc:P==null&&S(D,V,ie,pe);break;case Ln:U(P,D,V,ie,Q,ne,pe,re,le);break;default:b&1?M(P,D,V,ie,Q,ne,pe,re,le):b&6?I(P,D,V,ie,Q,ne,pe,re,le):(b&64||b&128)&&ae.process(P,D,V,ie,Q,ne,pe,re,le,he)}R!=null&&Q&&ba(R,P&&P.ref,ne,D||P,!D)},m=(P,D,V,ie)=>{if(P==null)i(D.el=a(D.children),V,ie);else{const Q=D.el=P.el;D.children!==P.children&&l(Q,D.children)}},p=(P,D,V,ie)=>{P==null?i(D.el=c(D.children||""),V,ie):D.el=P.el},S=(P,D,V,ie)=>{[P.el,P.anchor]=_(P.children,D,V,ie,P.el,P.anchor)},y=({el:P,anchor:D},V,ie)=>{let Q;for(;P&&P!==D;)Q=h(P),i(P,V,ie),P=Q;i(D,V,ie)},x=({el:P,anchor:D})=>{let V;for(;P&&P!==D;)V=h(P),s(P),P=V;s(D)},M=(P,D,V,ie,Q,ne,pe,re,le)=>{D.type==="svg"?pe="svg":D.type==="math"&&(pe="mathml"),P==null?E(D,V,ie,Q,ne,pe,re,le):v(P,D,Q,ne,pe,re,le)},E=(P,D,V,ie,Q,ne,pe,re)=>{let le,ae;const{props:R,shapeFlag:b,transition:z,dirs:q}=P;if(le=P.el=o(P.type,ne,R&&R.is,R),b&8?u(le,P.children):b&16&&L(P.children,le,null,ie,Q,Sc(P,ne),pe,re),q&&Xi(P,null,ie,"created"),w(le,P,P.scopeId,pe,ie),R){for(const fe in R)fe!=="value"&&!Gr(fe)&&r(le,fe,null,R[fe],ne,ie);"value"in R&&r(le,"value",null,R.value,ne),(ae=R.onVnodeBeforeMount)&&zn(ae,ie,P)}q&&Xi(P,null,ie,"beforeMount");const Z=Jv(Q,z);Z&&z.beforeEnter(le),i(le,D,V),((ae=R&&R.onVnodeMounted)||Z||q)&&ln(()=>{ae&&zn(ae,ie,P),Z&&z.enter(le),q&&Xi(P,null,ie,"mounted")},Q)},w=(P,D,V,ie,Q)=>{if(V&&d(P,V),ie)for(let ne=0;ne<ie.length;ne++)d(P,ie[ne]);if(Q){let ne=Q.subTree;if(D===ne||Tg(ne.type)&&(ne.ssContent===D||ne.ssFallback===D)){const pe=Q.vnode;w(P,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},L=(P,D,V,ie,Q,ne,pe,re,le=0)=>{for(let ae=le;ae<P.length;ae++){const R=P[ae]=re?Pi(P[ae]):kn(P[ae]);g(null,R,D,V,ie,Q,ne,pe,re)}},v=(P,D,V,ie,Q,ne,pe)=>{const re=D.el=P.el;let{patchFlag:le,dynamicChildren:ae,dirs:R}=D;le|=P.patchFlag&16;const b=P.props||rt,z=D.props||rt;let q;if(V&&qi(V,!1),(q=z.onVnodeBeforeUpdate)&&zn(q,V,D,P),R&&Xi(D,P,V,"beforeUpdate"),V&&qi(V,!0),(b.innerHTML&&z.innerHTML==null||b.textContent&&z.textContent==null)&&u(re,""),ae?T(P.dynamicChildren,ae,re,V,ie,Sc(D,Q),ne):pe||W(P,D,re,null,V,ie,Sc(D,Q),ne,!1),le>0){if(le&16)N(re,b,z,V,Q);else if(le&2&&b.class!==z.class&&r(re,"class",null,z.class,Q),le&4&&r(re,"style",b.style,z.style,Q),le&8){const Z=D.dynamicProps;for(let fe=0;fe<Z.length;fe++){const xe=Z[fe],ye=b[xe],Y=z[xe];(Y!==ye||xe==="value")&&r(re,xe,ye,Y,Q,V)}}le&1&&P.children!==D.children&&u(re,D.children)}else!pe&&ae==null&&N(re,b,z,V,Q);((q=z.onVnodeUpdated)||R)&&ln(()=>{q&&zn(q,V,D,P),R&&Xi(D,P,V,"updated")},ie)},T=(P,D,V,ie,Q,ne,pe)=>{for(let re=0;re<D.length;re++){const le=P[re],ae=D[re],R=le.el&&(le.type===Ln||!ss(le,ae)||le.shapeFlag&70)?f(le.el):V;g(le,ae,R,null,ie,Q,ne,pe,!0)}},N=(P,D,V,ie,Q)=>{if(D!==V){if(D!==rt)for(const ne in D)!Gr(ne)&&!(ne in V)&&r(P,ne,D[ne],null,Q,ie);for(const ne in V){if(Gr(ne))continue;const pe=V[ne],re=D[ne];pe!==re&&ne!=="value"&&r(P,ne,re,pe,Q,ie)}"value"in V&&r(P,"value",D.value,V.value,Q)}},U=(P,D,V,ie,Q,ne,pe,re,le)=>{const ae=D.el=P?P.el:a(""),R=D.anchor=P?P.anchor:a("");let{patchFlag:b,dynamicChildren:z,slotScopeIds:q}=D;q&&(re=re?re.concat(q):q),P==null?(i(ae,V,ie),i(R,V,ie),L(D.children||[],V,R,Q,ne,pe,re,le)):b>0&&b&64&&z&&P.dynamicChildren?(T(P.dynamicChildren,z,V,Q,ne,pe,re),(D.key!=null||Q&&D===Q.subTree)&&yg(P,D,!0)):W(P,D,V,R,Q,ne,pe,re,le)},I=(P,D,V,ie,Q,ne,pe,re,le)=>{D.slotScopeIds=re,P==null?D.shapeFlag&512?Q.ctx.activate(D,V,ie,pe,le):F(D,V,ie,Q,ne,pe,le):B(P,D,le)},F=(P,D,V,ie,Q,ne,pe)=>{const re=P.component=vx(P,ie,Q);if(Va(P)&&(re.ctx.renderer=he),yx(re,!1,pe),re.asyncDep){if(Q&&Q.registerDep(re,H,pe),!P.el){const le=re.subTree=Bt(yn);p(null,le,D,V)}}else H(re,P,D,V,Q,ne,pe)},B=(P,D,V)=>{const ie=D.component=P.component;if(ax(P,D,V))if(ie.asyncDep&&!ie.asyncResolved){G(ie,D,V);return}else ie.next=D,ie.update();else D.el=P.el,ie.vnode=D},H=(P,D,V,ie,Q,ne,pe)=>{const re=()=>{if(P.isMounted){let{next:b,bu:z,u:q,parent:Z,vnode:fe}=P;{const Ae=Mg(P);if(Ae){b&&(b.el=fe.el,G(P,b,pe)),Ae.asyncDep.then(()=>{P.isUnmounted||re()});return}}let xe=b,ye;qi(P,!1),b?(b.el=fe.el,G(P,b,pe)):b=fe,z&&pa(z),(ye=b.props&&b.props.onVnodeBeforeUpdate)&&zn(ye,Z,b,fe),qi(P,!0);const Y=Ef(P),Te=P.subTree;P.subTree=Y,g(Te,Y,f(Te.el),A(Te),P,Q,ne),b.el=Y.el,xe===null&&cx(P,Y.el),q&&ln(q,Q),(ye=b.props&&b.props.onVnodeUpdated)&&ln(()=>zn(ye,Z,b,fe),Q)}else{let b;const{el:z,props:q}=D,{bm:Z,m:fe,parent:xe,root:ye,type:Y}=P,Te=Xr(D);qi(P,!1),Z&&pa(Z),!Te&&(b=q&&q.onVnodeBeforeMount)&&zn(b,xe,D),qi(P,!0);{ye.ce&&ye.ce._injectChildStyle(Y);const Ae=P.subTree=Ef(P);g(null,Ae,V,ie,P,Q,ne),D.el=Ae.el}if(fe&&ln(fe,Q),!Te&&(b=q&&q.onVnodeMounted)){const Ae=D;ln(()=>zn(b,xe,Ae),Q)}(D.shapeFlag&256||xe&&Xr(xe.vnode)&&xe.vnode.shapeFlag&256)&&P.a&&ln(P.a,Q),P.isMounted=!0,D=V=ie=null}};P.scope.on();const le=P.effect=new Rm(re);P.scope.off();const ae=P.update=le.run.bind(le),R=P.job=le.runIfDirty.bind(le);R.i=P,R.id=P.uid,le.scheduler=()=>Lu(R),qi(P,!0),ae()},G=(P,D,V)=>{D.component=P;const ie=P.vnode.props;P.vnode=D,P.next=null,Wv(P,D.props,ie,V),jv(P,D.children,V),Hi(),df(P),Vi()},W=(P,D,V,ie,Q,ne,pe,re,le=!1)=>{const ae=P&&P.children,R=P?P.shapeFlag:0,b=D.children,{patchFlag:z,shapeFlag:q}=D;if(z>0){if(z&128){ee(ae,b,V,ie,Q,ne,pe,re,le);return}else if(z&256){oe(ae,b,V,ie,Q,ne,pe,re,le);return}}q&8?(R&16&&ge(ae,Q,ne),b!==ae&&u(V,b)):R&16?q&16?ee(ae,b,V,ie,Q,ne,pe,re,le):ge(ae,Q,ne,!0):(R&8&&u(V,""),q&16&&L(b,V,ie,Q,ne,pe,re,le))},oe=(P,D,V,ie,Q,ne,pe,re,le)=>{P=P||Zs,D=D||Zs;const ae=P.length,R=D.length,b=Math.min(ae,R);let z;for(z=0;z<b;z++){const q=D[z]=le?Pi(D[z]):kn(D[z]);g(P[z],q,V,null,Q,ne,pe,re,le)}ae>R?ge(P,Q,ne,!0,!1,b):L(D,V,ie,Q,ne,pe,re,le,b)},ee=(P,D,V,ie,Q,ne,pe,re,le)=>{let ae=0;const R=D.length;let b=P.length-1,z=R-1;for(;ae<=b&&ae<=z;){const q=P[ae],Z=D[ae]=le?Pi(D[ae]):kn(D[ae]);if(ss(q,Z))g(q,Z,V,null,Q,ne,pe,re,le);else break;ae++}for(;ae<=b&&ae<=z;){const q=P[b],Z=D[z]=le?Pi(D[z]):kn(D[z]);if(ss(q,Z))g(q,Z,V,null,Q,ne,pe,re,le);else break;b--,z--}if(ae>b){if(ae<=z){const q=z+1,Z=q<R?D[q].el:ie;for(;ae<=z;)g(null,D[ae]=le?Pi(D[ae]):kn(D[ae]),V,Z,Q,ne,pe,re,le),ae++}}else if(ae>z)for(;ae<=b;)ce(P[ae],Q,ne,!0),ae++;else{const q=ae,Z=ae,fe=new Map;for(ae=Z;ae<=z;ae++){const Me=D[ae]=le?Pi(D[ae]):kn(D[ae]);Me.key!=null&&fe.set(Me.key,ae)}let xe,ye=0;const Y=z-Z+1;let Te=!1,Ae=0;const Le=new Array(Y);for(ae=0;ae<Y;ae++)Le[ae]=0;for(ae=q;ae<=b;ae++){const Me=P[ae];if(ye>=Y){ce(Me,Q,ne,!0);continue}let Ne;if(Me.key!=null)Ne=fe.get(Me.key);else for(xe=Z;xe<=z;xe++)if(Le[xe-Z]===0&&ss(Me,D[xe])){Ne=xe;break}Ne===void 0?ce(Me,Q,ne,!0):(Le[Ne-Z]=ae+1,Ne>=Ae?Ae=Ne:Te=!0,g(Me,D[Ne],V,null,Q,ne,pe,re,le),ye++)}const we=Te?Qv(Le):Zs;for(xe=we.length-1,ae=Y-1;ae>=0;ae--){const Me=Z+ae,Ne=D[Me],Ke=Me+1<R?D[Me+1].el:ie;Le[ae]===0?g(null,Ne,V,Ke,Q,ne,pe,re,le):Te&&(xe<0||ae!==we[xe]?Se(Ne,V,Ke,2):xe--)}}},Se=(P,D,V,ie,Q=null)=>{const{el:ne,type:pe,transition:re,children:le,shapeFlag:ae}=P;if(ae&6){Se(P.component.subTree,D,V,ie);return}if(ae&128){P.suspense.move(D,V,ie);return}if(ae&64){pe.move(P,D,V,he);return}if(pe===Ln){i(ne,D,V);for(let b=0;b<le.length;b++)Se(le[b],D,V,ie);i(P.anchor,D,V);return}if(pe===Tc){y(P,D,V);return}if(ie!==2&&ae&1&&re)if(ie===0)re.beforeEnter(ne),i(ne,D,V),ln(()=>re.enter(ne),Q);else{const{leave:b,delayLeave:z,afterLeave:q}=re,Z=()=>i(ne,D,V),fe=()=>{b(ne,()=>{Z(),q&&q()})};z?z(ne,Z,fe):fe()}else i(ne,D,V)},ce=(P,D,V,ie=!1,Q=!1)=>{const{type:ne,props:pe,ref:re,children:le,dynamicChildren:ae,shapeFlag:R,patchFlag:b,dirs:z,cacheIndex:q}=P;if(b===-2&&(Q=!1),re!=null&&ba(re,null,V,P,!0),q!=null&&(D.renderCache[q]=void 0),R&256){D.ctx.deactivate(P);return}const Z=R&1&&z,fe=!Xr(P);let xe;if(fe&&(xe=pe&&pe.onVnodeBeforeUnmount)&&zn(xe,D,P),R&6)me(P.component,V,ie);else{if(R&128){P.suspense.unmount(V,ie);return}Z&&Xi(P,null,D,"beforeUnmount"),R&64?P.type.remove(P,D,V,he,ie):ae&&!ae.hasOnce&&(ne!==Ln||b>0&&b&64)?ge(ae,D,V,!1,!0):(ne===Ln&&b&384||!Q&&R&16)&&ge(le,D,V),ie&&j(P)}(fe&&(xe=pe&&pe.onVnodeUnmounted)||Z)&&ln(()=>{xe&&zn(xe,D,P),Z&&Xi(P,null,D,"unmounted")},V)},j=P=>{const{type:D,el:V,anchor:ie,transition:Q}=P;if(D===Ln){se(V,ie);return}if(D===Tc){x(P);return}const ne=()=>{s(V),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(P.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:re}=Q,le=()=>pe(V,ne);re?re(P.el,ne,le):le()}else ne()},se=(P,D)=>{let V;for(;P!==D;)V=h(P),s(P),P=V;s(D)},me=(P,D,V)=>{const{bum:ie,scope:Q,job:ne,subTree:pe,um:re,m:le,a:ae}=P;Mf(le),Mf(ae),ie&&pa(ie),Q.stop(),ne&&(ne.flags|=8,ce(pe,P,D,V)),re&&ln(re,D),ln(()=>{P.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ge=(P,D,V,ie=!1,Q=!1,ne=0)=>{for(let pe=ne;pe<P.length;pe++)ce(P[pe],D,V,ie,Q)},A=P=>{if(P.shapeFlag&6)return A(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=h(P.anchor||P.el),V=D&&D[_v];return V?h(V):D};let ue=!1;const Ee=(P,D,V)=>{P==null?D._vnode&&ce(D._vnode,null,null,!0):g(D._vnode||null,P,D,null,null,null,V),D._vnode=P,ue||(ue=!0,df(),qm(),ue=!1)},he={p:g,um:ce,m:Se,r:j,mt:F,mc:L,pc:W,pbc:T,n:A,o:t};return{render:Ee,hydrate:void 0,createApp:$v(Ee)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yg(t,e,n=!1){const i=t.children,s=e.children;if(Ie(i)&&Ie(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Pi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&yg(o,a)),a.type===ka&&(a.el=o.el)}}function Qv(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(s=n[n.length-1],t[s]<l){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Mg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mg(e)}function Mf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ex=Symbol.for("v-scx"),tx=()=>ma(ex);function bc(t,e,n){return Eg(t,e,n)}function Eg(t,e,n=rt){const{immediate:i,deep:s,flush:r,once:o}=n,a=Dt({},n),c=e&&i||!e&&r!=="post";let l;if(no){if(r==="sync"){const d=tx();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=qn,d.resume=qn,d.pause=qn,d}}const u=Lt;a.call=(d,_,g)=>Fn(d,u,_,g);let f=!1;r==="post"?a.scheduler=d=>{ln(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():Lu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=hv(t,e,a);return no&&(l?l.push(h):c&&h()),h}function nx(t,e,n){const i=this.proxy,s=mt(t)?t.includes(".")?Sg(i,t):()=>i[t]:t.bind(i,i);let r;Oe(e)?r=e:(r=e.handler,n=e);const o=uo(this),a=Eg(s,r.bind(i),n);return o(),a}function Sg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const ix=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${En(e)}Modifiers`]||t[`${zi(e)}Modifiers`];function sx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||rt;let s=n;const r=e.startsWith("update:"),o=r&&ix(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>mt(u)?u.trim():u)),o.number&&(s=n.map(Vl)));let a,c=i[a=gc(e)]||i[a=gc(En(e))];!c&&r&&(c=i[a=gc(zi(e))]),c&&Fn(c,t,6,s);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fn(l,t,6,s)}}function bg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Oe(t)){const c=l=>{const u=bg(l,e,!0);u&&(a=!0,Dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(ct(t)&&i.set(t,null),null):(Ie(r)?r.forEach(c=>o[c]=null):Dt(o,r),ct(t)&&i.set(t,o),o)}function Ga(t,e){return!t||!Ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(t,e[0].toLowerCase()+e.slice(1))||Je(t,zi(e))||Je(t,e))}function Ef(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=t,m=Sa(t);let p,S;try{if(n.shapeFlag&4){const x=s||i,M=x;p=kn(l.call(M,x,u,f,d,h,_)),S=a}else{const x=e;p=kn(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),S=e.props?a:rx(a)}}catch(x){Yr.length=0,Ha(x,t,1),p=Bt(yn)}let y=p;if(S&&g!==!1){const x=Object.keys(S),{shapeFlag:M}=y;x.length&&M&7&&(r&&x.some(yu)&&(S=ox(S,r)),y=Fi(y,S,!1,!0))}return n.dirs&&(y=Fi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&eo(y,n.transition),p=y,Sa(m),p}const rx=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ua(n))&&((e||(e={}))[n]=t[n]);return e},ox=(t,e)=>{const n={};for(const i in t)(!yu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function ax(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Sf(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Ga(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Sf(i,o,l):!0:!!o;return!1}function Sf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Ga(n,r))return!0}return!1}function cx({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tg=t=>t.__isSuspense;function lx(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):gv(t)}const Ln=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),Tc=Symbol.for("v-stc"),Yr=[];let fn=null;function Ui(t=!1){Yr.push(fn=t?null:[])}function ux(){Yr.pop(),fn=Yr[Yr.length-1]||null}let to=1;function bf(t,e=!1){to+=t,t<0&&fn&&e&&(fn.hasOnce=!0)}function fx(t){return t.dynamicChildren=to>0?fn||Zs:null,ux(),to>0&&fn&&fn.push(t),t}function Ii(t,e,n,i,s,r){return fx(Xe(t,e,n,i,s,r,!0))}function wa(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return t.type===e.type&&t.key===e.key}const wg=({key:t})=>t??null,ga=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?mt(t)||jt(t)||Oe(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function Xe(t,e=null,n=null,i=0,s=null,r=t===Ln?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wg(e),ref:e&&ga(e),scopeId:jm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qt};return a?(Uu(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=mt(n)?8:16),to>0&&!o&&fn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&fn.push(c),c}const Bt=hx;function hx(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Dv)&&(t=yn),wa(t)){const a=Fi(t,e,!0);return n&&Uu(a,n),to>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag=-2,a}if(Tx(t)&&(t=t.__vccOpts),e){e=dx(e);let{class:a,style:c}=e;a&&!mt(a)&&(e.class=Ba(a)),ct(c)&&(Pu(c)&&!Ie(c)&&(c=Dt({},c)),e.style=Su(c))}const o=mt(t)?1:Tg(t)?128:Km(t)?64:ct(t)?4:Oe(t)?2:0;return Xe(t,e,n,i,s,o,r,!0)}function dx(t){return t?Pu(t)||dg(t)?Dt({},t):t:null}function Fi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=t,l=e?mx(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&wg(l),ref:e&&e.ref?n&&r?Ie(r)?r.concat(ga(e)):[r,ga(e)]:ga(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ln?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fi(t.ssContent),ssFallback:t.ssFallback&&Fi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&eo(u,c.clone(u)),u}function px(t=" ",e=0){return Bt(ka,null,t,e)}function kn(t){return t==null||typeof t=="boolean"?Bt(yn):Ie(t)?Bt(Ln,null,t.slice()):wa(t)?Pi(t):Bt(ka,null,String(t))}function Pi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fi(t)}function Uu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!dg(e)?e._ctx=Qt:s===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),i&64?(n=16,e=[px(e)]):n=8);t.children=e,t.shapeFlag|=n}function mx(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ba([e.class,i.class]));else if(s==="style")e.style=Su([e.style,i.style]);else if(Ua(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ie(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function zn(t,e,n,i=null){Fn(t,e,7,[n,i])}const gx=ug();let _x=0;function vx(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||gx,r={uid:_x++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new z_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mg(i,s),emitsOptions:bg(i,s),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sx.bind(null,r),t.ce&&t.ce(r),r}let Lt=null;const xx=()=>Lt||Qt;let Aa,Jl;{const t=Oa(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Aa=e("__VUE_INSTANCE_SETTERS__",n=>Lt=n),Jl=e("__VUE_SSR_SETTERS__",n=>no=n)}const uo=t=>{const e=Lt;return Aa(t),t.scope.on(),()=>{t.scope.off(),Aa(e)}},Tf=()=>{Lt&&Lt.scope.off(),Aa(null)};function Ag(t){return t.vnode.shapeFlag&4}let no=!1;function yx(t,e=!1,n=!1){e&&Jl(e);const{props:i,children:s}=t.vnode,r=Ag(t);kv(t,i,r,e),Yv(t,s,n);const o=r?Mx(t,e):void 0;return e&&Jl(!1),o}function Mx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Nv);const{setup:i}=n;if(i){Hi();const s=t.setupContext=i.length>1?Sx(t):null,r=uo(t),o=lo(i,t,0,[t.props,s]),a=ym(o);if(Vi(),r(),(a||t.sp)&&!Xr(t)&&ig(t),a){if(o.then(Tf,Tf),e)return o.then(c=>{wf(t,c)}).catch(c=>{Ha(c,t,0)});t.asyncDep=o}else wf(t,o)}else Rg(t)}function wf(t,e,n){Oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=km(e)),Rg(t)}function Rg(t,e,n){const i=t.type;t.render||(t.render=i.render||qn);{const s=uo(t);Hi();try{Fv(t)}finally{Vi(),s()}}}const Ex={get(t,e){return Ot(t,"get",""),t[e]}};function Sx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ex),slots:t.slots,emit:t.emit,expose:e}}function Wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(km(ov(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qr)return qr[n](t)},has(e,n){return n in e||n in qr}})):t.proxy}function bx(t,e=!0){return Oe(t)?t.displayName||t.name:t.name||e&&t.__name}function Tx(t){return Oe(t)&&"__vccOpts"in t}const wx=(t,e)=>uv(t,e,no);function Ax(t,e,n){const i=arguments.length;return i===2?ct(e)&&!Ie(e)?wa(e)?Bt(t,null,[e]):Bt(t,e):Bt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&wa(n)&&(n=[n]),Bt(t,e,n))}const Rx="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ql;const Af=typeof window<"u"&&window.trustedTypes;if(Af)try{Ql=Af.createPolicy("vue",{createHTML:t=>t})}catch{}const Cg=Ql?t=>Ql.createHTML(t):t=>t,Cx="http://www.w3.org/2000/svg",Px="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,Rf=li&&li.createElement("template"),Lx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?li.createElementNS(Cx,t):e==="mathml"?li.createElementNS(Px,t):n?li.createElement(t,{is:n}):li.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>li.createTextNode(t),createComment:t=>li.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>li.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Rf.innerHTML=Cg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Rf.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_i="transition",Er="animation",io=Symbol("_vtc"),Pg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dx=Dt({},Jm,Pg),Ux=t=>(t.displayName="Transition",t.props=Dx,t),Ix=Ux((t,{slots:e})=>Ax(yv,Nx(t),e)),Yi=(t,e=[])=>{Ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cf=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Nx(t){const e={};for(const U in t)U in Pg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=Fx(s),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:y,onLeave:x,onLeaveCancelled:M,onBeforeAppear:E=p,onAppear:w=S,onAppearCancelled:L=y}=e,v=(U,I,F,B)=>{U._enterCancelled=B,ji(U,I?u:a),ji(U,I?l:o),F&&F()},T=(U,I)=>{U._isLeaving=!1,ji(U,f),ji(U,d),ji(U,h),I&&I()},N=U=>(I,F)=>{const B=U?w:S,H=()=>v(I,U,F);Yi(B,[I,H]),Pf(()=>{ji(I,U?c:r),Zn(I,U?u:a),Cf(B)||Lf(I,i,g,H)})};return Dt(e,{onBeforeEnter(U){Yi(p,[U]),Zn(U,r),Zn(U,o)},onBeforeAppear(U){Yi(E,[U]),Zn(U,c),Zn(U,l)},onEnter:N(!1),onAppear:N(!0),onLeave(U,I){U._isLeaving=!0;const F=()=>T(U,I);Zn(U,f),U._enterCancelled?(Zn(U,h),If()):(If(),Zn(U,h)),Pf(()=>{U._isLeaving&&(ji(U,f),Zn(U,d),Cf(x)||Lf(U,i,m,F))}),Yi(x,[U,F])},onEnterCancelled(U){v(U,!1,void 0,!0),Yi(y,[U])},onAppearCancelled(U){v(U,!0,void 0,!0),Yi(L,[U])},onLeaveCancelled(U){T(U),Yi(M,[U])}})}function Fx(t){if(t==null)return null;if(ct(t))return[wc(t.enter),wc(t.leave)];{const e=wc(t);return[e,e]}}function wc(t){return D_(t)}function Zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[io]||(t[io]=new Set)).add(e)}function ji(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[io];n&&(n.delete(e),n.size||(t[io]=void 0))}function Pf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ox=0;function Lf(t,e,n,i){const s=t._endId=++Ox,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=Bx(t,e);if(!o)return i();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),r()},h=d=>{d.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function Bx(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${_i}Delay`),r=i(`${_i}Duration`),o=Df(s,r),a=i(`${Er}Delay`),c=i(`${Er}Duration`),l=Df(a,c);let u=null,f=0,h=0;e===_i?o>0&&(u=_i,f=o,h=r.length):e===Er?l>0&&(u=Er,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?_i:Er:null,h=u?u===_i?r.length:c.length:0);const d=u===_i&&/\b(transform|all)(,|$)/.test(i(`${_i}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Df(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Uf(n)+Uf(t[i])))}function Uf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function If(){return document.body.offsetHeight}function zx(t,e,n){const i=t[io];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ra=Symbol("_vod"),Lg=Symbol("_vsh"),Hx={beforeMount(t,{value:e},{transition:n}){t[Ra]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Sr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Sr(t,!0),i.enter(t)):i.leave(t,()=>{Sr(t,!1)}):Sr(t,e))},beforeUnmount(t,{value:e}){Sr(t,e)}};function Sr(t,e){t.style.display=e?t[Ra]:"none",t[Lg]=!e}const Vx=Symbol(""),$x=/(^|;)\s*display\s*:/;function Gx(t,e,n){const i=t.style,s=mt(n);let r=!1;if(n&&!s){if(e)if(mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&_a(i,a,"")}else for(const o in e)n[o]==null&&_a(i,o,"");for(const o in n)o==="display"&&(r=!0),_a(i,o,n[o])}else if(s){if(e!==n){const o=i[Vx];o&&(n+=";"+o),i.cssText=n,r=$x.test(n)}}else e&&t.removeAttribute("style");Ra in t&&(t[Ra]=r?i.display:"",t[Lg]&&(i.display="none"))}const Nf=/\s*!important$/;function _a(t,e,n){if(Ie(n))n.forEach(i=>_a(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=kx(t,e);Nf.test(n)?t.setProperty(zi(i),n.replace(Nf,""),"important"):t[i]=n}}const Ff=["Webkit","Moz","ms"],Ac={};function kx(t,e){const n=Ac[e];if(n)return n;let i=En(e);if(i!=="filter"&&i in t)return Ac[e]=i;i=Fa(i);for(let s=0;s<Ff.length;s++){const r=Ff[s]+i;if(r in t)return Ac[e]=r}return e}const Of="http://www.w3.org/1999/xlink";function Bf(t,e,n,i,s,r=B_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Of,e.slice(6,e.length)):t.setAttributeNS(Of,e,n):n==null||r&&!bm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Bi(n)?String(n):n)}function zf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=bm(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xs(t,e,n,i){t.addEventListener(e,n,i)}function Wx(t,e,n,i){t.removeEventListener(e,n,i)}const Hf=Symbol("_vei");function Xx(t,e,n,i,s=null){const r=t[Hf]||(t[Hf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=qx(e);if(i){const l=r[e]=Zx(i,s);Xs(t,a,l,c)}else o&&(Wx(t,a,o,c),r[e]=void 0)}}const Vf=/(?:Once|Passive|Capture)$/;function qx(t){let e;if(Vf.test(t)){e={};let i;for(;i=t.match(Vf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zi(t.slice(2)),e]}let Rc=0;const Yx=Promise.resolve(),jx=()=>Rc||(Yx.then(()=>Rc=0),Rc=Date.now());function Zx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Fn(Kx(i,n.value),e,5,[i])};return n.value=t,n.attached=jx(),n}function Kx(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const $f=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jx=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?zx(t,i,o):e==="style"?Gx(t,n,i):Ua(e)?yu(e)||Xx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qx(t,e,i,o))?(zf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!mt(i))?zf(t,En(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Bf(t,e,i,o))};function Qx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&$f(e)&&Oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $f(e)&&mt(n)?!1:e in t}const Gf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ie(e)?n=>pa(e,n):e};function e1(t){t.target.composing=!0}function kf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cc=Symbol("_assign"),cs={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Cc]=Gf(s);const r=i||s.props&&s.props.type==="number";Xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Vl(a)),t[Cc](a)}),n&&Xs(t,"change",()=>{t.value=t.value.trim()}),e||(Xs(t,"compositionstart",e1),Xs(t,"compositionend",kf),Xs(t,"change",kf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Cc]=Gf(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Vl(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},t1=["ctrl","shift","alt","meta"],n1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>t1.some(n=>t[`${n}Key`]&&!e.includes(n))},Dg=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=n1[e[o]];if(a&&a(s,e))return}return t(s,...r)})},i1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ls=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=s=>{if(!("key"in s))return;const r=zi(s.key);if(e.some(o=>o===r||i1[o]===r))return t(s)})},s1=Dt({patchProp:Jx},Lx);let Wf;function r1(){return Wf||(Wf=Zv(s1))}const o1=(...t)=>{const e=r1().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=c1(i);if(!s)return;const r=e._component;!Oe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,a1(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function a1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function c1(t){return mt(t)?document.querySelector(t):t}const fo=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},l1={name:"BasicForm",props:{initialWidth:{type:Number,default:155},initialDepth:{type:Number,default:105},initialSafety:{type:Number,default:0}},data(){return{localWidth:this.initialWidth,localDepth:this.initialDepth,localSafety:this.initialSafety}},methods:{emitValues(){this.$emit("update-dimensions",{width:this.localWidth,depth:this.localDepth,safety:this.localSafety})}}},u1={class:"flex-1 mb-4"},f1={class:"flex-1 mb-4"},h1={class:"flex-1 mb-4"},d1={class:"flex items-center space-x-2 mt-1"};function p1(t,e,n,i,s,r){return Ui(),Ii("form",{onSubmit:e[16]||(e[16]=Dg(()=>{},["prevent"])),class:"flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end",style:{width:"100%","max-width":"600px",margin:"0 auto","box-sizing":"border-box"}},[Xe("div",u1,[e[17]||(e[17]=Xe("label",{class:"block text-sm font-medium text-gray-700"},"Width (mm):",-1)),Di(Xe("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.localWidth=o),onBlur:e[1]||(e[1]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[2]||(e[2]=ls((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[3]||(e[3]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter width",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[cs,s.localWidth,void 0,{number:!0}]])]),Xe("div",f1,[e[18]||(e[18]=Xe("label",{class:"block text-sm font-medium text-gray-700"},"Depth (mm):",-1)),Di(Xe("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s.localDepth=o),onBlur:e[5]||(e[5]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[6]||(e[6]=ls((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[7]||(e[7]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter depth",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[cs,s.localDepth,void 0,{number:!0}]])]),Xe("div",h1,[e[19]||(e[19]=Xe("label",{class:"block text-sm font-medium text-gray-700"},"Safety Offset (mm):",-1)),Xe("div",d1,[Di(Xe("input",{type:"range","onUpdate:modelValue":e[8]||(e[8]=o=>s.localSafety=o),onBlur:e[9]||(e[9]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[10]||(e[10]=ls((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[11]||(e[11]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"-2",max:"2",step:"0.1",class:"w-full"},null,544),[[cs,s.localSafety,void 0,{number:!0}]]),Di(Xe("input",{type:"number","onUpdate:modelValue":e[12]||(e[12]=o=>s.localSafety=o),onBlur:e[13]||(e[13]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[14]||(e[14]=ls((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[15]||(e[15]=(...o)=>r.emitValues&&r.emitValues(...o)),min:"-2",max:"2",step:"0.1",class:"p-2 border border-gray-300 rounded-md w-16"},null,544),[[cs,s.localSafety,void 0,{number:!0}]])])])],32)}const m1=fo(l1,[["render",p1]]),g1={name:"AdvancedForm",props:{initialBottomHeight:{type:Number,default:15},initialTopHeight:{type:Number,default:25},initialBorderThickness:{type:Number,default:2.5}},data(){return{localBottomHeight:this.initialBottomHeight,localTopHeight:this.initialTopHeight,localBorderThickness:this.initialBorderThickness}},methods:{emitValues(){this.$emit("update-advanced",{bottomHeight:this.localBottomHeight,topHeight:this.localTopHeight,borderThickness:this.localBorderThickness})}}},_1={class:"flex-1 mb-4"},v1={class:"flex-1 mb-4"},x1={class:"flex-1 mb-4"};function y1(t,e,n,i,s,r){return Ui(),Ii("form",{onSubmit:e[12]||(e[12]=Dg(()=>{},["prevent"])),class:"flex flex-col sm:flex-row sm:flex-wrap sm:space-x-4 items-end mt-4",style:{width:"100%","max-width":"600px",margin:"20px auto 0","box-sizing":"border-box"}},[Xe("div",_1,[e[13]||(e[13]=Xe("label",{class:"block text-sm font-medium text-gray-700"},"Bottom Height (mm):",-1)),Di(Xe("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.localBottomHeight=o),onBlur:e[1]||(e[1]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[2]||(e[2]=ls((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[3]||(e[3]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter bottom height",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[cs,s.localBottomHeight,void 0,{number:!0}]])]),Xe("div",v1,[e[14]||(e[14]=Xe("label",{class:"block text-sm font-medium text-gray-700"},"Top Height (mm):",-1)),Di(Xe("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s.localTopHeight=o),onBlur:e[5]||(e[5]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[6]||(e[6]=ls((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[7]||(e[7]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter top height",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[cs,s.localTopHeight,void 0,{number:!0}]])]),Xe("div",x1,[e[15]||(e[15]=Xe("label",{class:"block text-sm font-medium text-gray-700"},"Border Thickness (mm):",-1)),Di(Xe("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>s.localBorderThickness=o),onBlur:e[9]||(e[9]=(...o)=>r.emitValues&&r.emitValues(...o)),onKeyup:e[10]||(e[10]=ls((...o)=>r.emitValues&&r.emitValues(...o),["enter"])),onChange:e[11]||(e[11]=(...o)=>r.emitValues&&r.emitValues(...o)),type:"number",placeholder:"Enter border thickness",class:"mt-1 p-2 border border-gray-300 rounded-md w-full"},null,544),[[cs,s.localBorderThickness,void 0,{number:!0}]])])],32)}const M1=fo(g1,[["render",y1]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="152",Pc={ROTATE:0,DOLLY:1,PAN:2},E1=0,Xf=1,S1=2,Ug=1,b1=2,ci=3,Oi=0,en=1,hi=2,Ni=0,tr=1,qf=2,Yf=3,jf=4,T1=5,qs=100,w1=101,A1=102,Zf=103,Kf=104,R1=200,C1=201,P1=202,L1=203,Ig=204,Ng=205,D1=206,U1=207,I1=208,N1=209,F1=210,O1=0,B1=1,z1=2,eu=3,H1=4,V1=5,$1=6,G1=7,Fg=0,k1=1,W1=2,pi=0,X1=1,q1=2,Y1=3,j1=4,Z1=5,Og=300,or=301,ar=302,tu=303,nu=304,Xa=306,iu=1e3,Dn=1001,su=1002,Xt=1003,Jf=1004,Lc=1005,_n=1006,K1=1007,so=1008,_s=1009,J1=1010,Q1=1011,Bg=1012,ey=1013,us=1014,fs=1015,ro=1016,ty=1017,ny=1018,nr=1020,iy=1021,Un=1023,sy=1024,ry=1025,ps=1026,cr=1027,oy=1028,ay=1029,cy=1030,ly=1031,uy=1033,Dc=33776,Uc=33777,Ic=33778,Nc=33779,Qf=35840,eh=35841,th=35842,nh=35843,fy=36196,ih=37492,sh=37496,rh=37808,oh=37809,ah=37810,ch=37811,lh=37812,uh=37813,fh=37814,hh=37815,dh=37816,ph=37817,mh=37818,gh=37819,_h=37820,vh=37821,Fc=36492,hy=36283,xh=36284,yh=36285,Mh=36286,zg=3e3,ms=3001,dy=3200,py=3201,Hg=0,my=1,gs="",ze="srgb",Yn="srgb-linear",Vg="display-p3",Oc=7680,gy=519,Eh=35044,Sh="300 es",ru=1035;class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bh=1234567;const ir=Math.PI/180,oo=180/Math.PI;function dr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Nu(t,e){return(t%e+e)%e}function _y(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function vy(t,e,n){return t!==e?(n-t)/(e-t):0}function jr(t,e,n){return(1-n)*t+n*e}function xy(t,e,n,i){return jr(t,e,1-Math.exp(-n*i))}function yy(t,e=1){return e-Math.abs(Nu(t,e*2)-e)}function My(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Ey(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Sy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function by(t,e){return t+Math.random()*(e-t)}function Ty(t){return t*(.5-Math.random())}function wy(t){t!==void 0&&(bh=t);let e=bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ay(t){return t*ir}function Ry(t){return t*oo}function ou(t){return(t&t-1)===0&&t!==0}function Cy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $g(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Py(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*u,c*f,c*h,a*l);break;case"YZY":t.set(c*h,a*u,c*f,a*l);break;case"ZXZ":t.set(c*f,c*h,a*u,a*l);break;case"XZX":t.set(a*u,c*_,c*d,a*l);break;case"YXY":t.set(c*d,a*u,c*_,a*l);break;case"ZYZ":t.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Or(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Th={DEG2RAD:ir,RAD2DEG:oo,generateUUID:dr,clamp:Yt,euclideanModulo:Nu,mapLinear:_y,inverseLerp:vy,lerp:jr,damp:xy,pingpong:yy,smoothstep:My,smootherstep:Ey,randInt:Sy,randFloat:by,randFloatSpread:Ty,seededRandom:wy,degToRad:Ay,radToDeg:Ry,isPowerOfTwo:ou,ceilPowerOfTwo:Cy,floorPowerOfTwo:$g,setQuaternionFromProperEuler:Py,normalize:Zt,denormalize:Or};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],S=s[1],y=s[4],x=s[7],M=s[2],E=s[5],w=s[8];return r[0]=o*g+a*S+c*M,r[3]=o*m+a*y+c*E,r[6]=o*p+a*x+c*w,r[1]=l*g+u*S+f*M,r[4]=l*m+u*y+f*E,r[7]=l*p+u*x+f*w,r[2]=h*g+d*S+_*M,r[5]=h*m+d*y+_*E,r[8]=h*p+d*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,_=n*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*l-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*n-s*c)*g,e[5]=(s*r-a*n)*g,e[6]=d*g,e[7]=(i*c-l*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new je;function Gg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const wh={};function Zr(t){t in wh||(wh[t]=!0,console.warn(t))}function sr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Ly=new je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dy=new je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Uy(t){return t.convertSRGBToLinear().applyMatrix3(Dy)}function Iy(t){return t.applyMatrix3(Ly).convertLinearToSRGB()}const Ny={[Yn]:t=>t,[ze]:t=>t.convertSRGBToLinear(),[Vg]:Uy},Fy={[Yn]:t=>t,[ze]:t=>t.convertLinearToSRGB(),[Vg]:Iy},wn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Yn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ny[e],s=Fy[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ss;class kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Ca("canvas")),Ss.width=e.width,Ss.height=e.height;const i=Ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=sr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(sr(n[i]/255)*255):n[i]=sr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Wg{constructor(e=null){this.isSource=!0,this.uuid=dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hc(s[o].image)):r.push(Hc(s[o]))}else r=Hc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oy=0;class hn extends ys{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Dn,s=Dn,r=_n,o=so,a=Un,c=_s,l=hn.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=dr(),this.name="",this.source=new Wg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ms?ze:gs),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case iu:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case su:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case iu:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case su:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?ms:zg}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ms?ze:gs}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Og;hn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(l+1)/2,x=(d+1)/2,M=(p+1)/2,E=(u+h)/4,w=(f+g)/4,L=(_+m)/4;return y>x&&y>M?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=w/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=L/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=L/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-g)/S,this.z=(h-u)/S,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vs extends ys{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ms?ze:gs),this.texture=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xg extends hn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class By extends hn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(f!==g||c!==h||l!==d||u!==_){let m=1-a;const p=c*h+l*d+u*_+f*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,p*S);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const x=a*S;if(c=c*m+h*x,l=l*m+d*x,u=u*m+_*x,f=f*m+g*x,m===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+u*f+c*d-l*h,e[n+1]=c*_+u*h+l*f-a*d,e[n+2]=l*_+u*d+a*h-c*f,e[n+3]=u*_-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f+h*d*_;break;case"YZX":this._x=h*u*f+l*d*_,this._y=l*d*f+h*u*_,this._z=l*u*_-h*d*f,this._w=l*u*f-h*d*_;break;case"XZY":this._x=h*u*f-l*d*_,this._y=l*d*f-h*u*_,this._z=l*u*_+h*d*f,this._w=l*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-n)*u)/l,h=Math.sin(n*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ah.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*s-a*i,u=c*i+a*n-r*s,f=c*s+r*i-o*n,h=-r*n-o*i-a*s;return this.x=l*c+h*-r+u*-a-f*-o,this.y=u*c+h*-o+f*-r-l*-a,this.z=f*c+h*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new $,Ah=new pr;class ho{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Jn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else s.boundingBox===null&&s.computeBoundingBox(),bs.copy(s.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),bo.subVectors(this.max,br),Ts.subVectors(e.a,br),ws.subVectors(e.b,br),As.subVectors(e.c,br),vi.subVectors(ws,Ts),xi.subVectors(As,ws),Zi.subVectors(Ts,As);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Zi.z,Zi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Zi.z,0,-Zi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Zi.y,Zi.x,0];return!$c(n,Ts,ws,As,bo)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,Ts,ws,As,bo))?!1:(To.crossVectors(vi,xi),n=[To.x,To.y,To.z],$c(n,Ts,ws,As,bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new $,new $,new $,new $,new $,new $,new $,new $],Jn=new $,bs=new ho,Ts=new $,ws=new $,As=new $,vi=new $,xi=new $,Zi=new $,br=new $,bo=new $,To=new $,Ki=new $;function $c(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ki.fromArray(t,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=n.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const zy=new ho,Tr=new $,Gc=new $;class qa{constructor(e=new $,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):zy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const n=Tr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Gc)),this.expandByPoint(Tr.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new $,kc=new $,wo=new $,yi=new $,Wc=new $,Ao=new $,Xc=new $;class qg{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){kc.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(kc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(wo),a=yi.dot(this.direction),c=-yi.dot(wo),l=yi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*c-a,h=o*a-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(kc).addScaledVector(wo,h),d}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,s,r){Wc.subVectors(n,e),Ao.subVectors(i,e),Xc.crossVectors(Wc,Ao);let o=this.direction.dot(Xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const c=a*this.direction.dot(Ao.crossVectors(yi,Ao));if(c<0)return null;const l=a*this.direction.dot(Wc.cross(yi));if(l<0||c+l>o)return null;const u=-a*yi.dot(Xc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,s,r,o,a,c,l,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=d+_*l,n[5]=h-g*l,n[9]=-a*c,n[2]=g-h*l,n[6]=_+d*l,n[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,_=l*u,g=l*f;n[0]=h+g*a,n[4]=_*a-d,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-_,n[6]=g+h*a,n[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,_=l*u,g=l*f;n[0]=h-g*a,n[4]=-o*f,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;n[0]=c*u,n[4]=_*l-d,n[8]=h*l+g,n[1]=c*f,n[5]=g*l+h,n[9]=d*l-_,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*u,n[4]=g-h*f,n[8]=_*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=d*f+_,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*c,d=o*l,_=a*c,g=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+g,n[5]=o*u,n[9]=d*f-_,n[2]=_*f-d,n[6]=a*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Vy)}lookAt(e,n,i){const s=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Mi.crossVectors(i,nn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Mi.crossVectors(i,nn)),Mi.normalize(),Ro.crossVectors(nn,Mi),s[0]=Mi.x,s[4]=Ro.x,s[8]=nn.x,s[1]=Mi.y,s[5]=Ro.y,s[9]=nn.y,s[2]=Mi.z,s[6]=Ro.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],y=i[7],x=i[11],M=i[15],E=s[0],w=s[4],L=s[8],v=s[12],T=s[1],N=s[5],U=s[9],I=s[13],F=s[2],B=s[6],H=s[10],G=s[14],W=s[3],oe=s[7],ee=s[11],Se=s[15];return r[0]=o*E+a*T+c*F+l*W,r[4]=o*w+a*N+c*B+l*oe,r[8]=o*L+a*U+c*H+l*ee,r[12]=o*v+a*I+c*G+l*Se,r[1]=u*E+f*T+h*F+d*W,r[5]=u*w+f*N+h*B+d*oe,r[9]=u*L+f*U+h*H+d*ee,r[13]=u*v+f*I+h*G+d*Se,r[2]=_*E+g*T+m*F+p*W,r[6]=_*w+g*N+m*B+p*oe,r[10]=_*L+g*U+m*H+p*ee,r[14]=_*v+g*I+m*G+p*Se,r[3]=S*E+y*T+x*F+M*W,r[7]=S*w+y*N+x*B+M*oe,r[11]=S*L+y*U+x*H+M*ee,r[15]=S*v+y*I+x*G+M*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*c*f-s*l*f-r*a*h+i*l*h+s*a*d-i*c*d)+g*(+n*c*d-n*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+m*(+n*l*f-n*a*d-r*o*f+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-n*c*f+n*a*h+s*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=f*m*l-g*h*l+g*c*d-a*m*d-f*c*p+a*h*p,y=_*h*l-u*m*l-_*c*d+o*m*d+u*c*p-o*h*p,x=u*g*l-_*f*l+_*a*d-o*g*d-u*a*p+o*f*p,M=_*f*c-u*g*c-_*a*h+o*g*h+u*a*m-o*f*m,E=n*S+i*y+s*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=S*w,e[1]=(g*h*r-f*m*r-g*s*d+i*m*d+f*s*p-i*h*p)*w,e[2]=(a*m*r-g*c*r+g*s*l-i*m*l-a*s*p+i*c*p)*w,e[3]=(f*c*r-a*h*r-f*s*l+i*h*l+a*s*d-i*c*d)*w,e[4]=y*w,e[5]=(u*m*r-_*h*r+_*s*d-n*m*d-u*s*p+n*h*p)*w,e[6]=(_*c*r-o*m*r-_*s*l+n*m*l+o*s*p-n*c*p)*w,e[7]=(o*h*r-u*c*r+u*s*l-n*h*l-o*s*d+n*c*d)*w,e[8]=x*w,e[9]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*w,e[10]=(o*g*r-_*a*r+_*i*l-n*g*l-o*i*p+n*a*p)*w,e[11]=(u*a*r-o*f*r-u*i*l+n*f*l+o*i*d-n*a*d)*w,e[12]=M*w,e[13]=(u*g*s-_*f*s+_*i*h-n*g*h-u*i*m+n*f*m)*w,e[14]=(_*a*s-o*g*s-_*i*c+n*g*c+o*i*m-n*a*m)*w,e[15]=(o*f*s-u*a*s+u*i*c-n*f*c-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,_=r*f,g=o*u,m=o*f,p=a*f,S=c*l,y=c*u,x=c*f,M=i.x,E=i.y,w=i.z;return s[0]=(1-(g+p))*M,s[1]=(d+x)*M,s[2]=(_-y)*M,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(h+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(_+y)*w,s[9]=(m-S)*w,s[10]=(1-(h+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const l=1/r,u=1/o,f=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,n.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o){const a=this.elements,c=2*r/(n-e),l=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,s,r,o){const a=this.elements,c=1/(n-e),l=1/(i-s),u=1/(o-r),f=(n+e)*c,h=(i+s)*l,d=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rs=new $,An=new Mt,Hy=new $(0,0,0),Vy=new $(1,1,1),Mi=new $,Ro=new $,nn=new $,Rh=new Mt,Ch=new pr;class Ya{constructor(e=0,n=0,i=0,s=Ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ya.DEFAULT_ORDER="XYZ";class Yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $y=0;const Ph=new $,Cs=new pr,ei=new Mt,Co=new $,wr=new $,Gy=new $,ky=new pr,Lh=new $(1,0,0),Dh=new $(0,1,0),Uh=new $(0,0,1),Wy={type:"added"},Ih={type:"removed"};class Ct extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new $,n=new Ya,i=new pr,s=new $(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,n){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Co.copy(e):Co.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(wr,Co,this.up):ei.lookAt(Co,wr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ei),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ih)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Ih)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,ky,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new $(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new $,ti=new $,qc=new $,ni=new $,Ps=new $,Ls=new $,Nh=new $,Yc=new $,jc=new $,Zc=new $;let Po=!1;class vn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Rn.subVectors(e,n),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Rn.subVectors(s,n),ti.subVectors(i,n),qc.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(ti),c=Rn.dot(qc),l=ti.dot(ti),u=ti.dot(qc),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,n,i,s,r,o,a,c){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),this.getInterpolation(e,n,i,s,r,o,a,c)}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,ni),c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c}static isFrontFacing(e,n,i,s){return Rn.subVectors(i,n),ti.subVectors(e,n),Rn.cross(ti).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Rn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,r){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),vn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}getInterpolation(e,n,i,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ls.subVectors(r,i),Yc.subVectors(e,i);const c=Ps.dot(Yc),l=Ls.dot(Yc);if(c<=0&&l<=0)return n.copy(i);jc.subVectors(e,s);const u=Ps.dot(jc),f=Ls.dot(jc);if(u>=0&&f<=u)return n.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Ps,o);Zc.subVectors(e,r);const d=Ps.dot(Zc),_=Ls.dot(Zc);if(_>=0&&d<=_)return n.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),n.copy(i).addScaledVector(Ls,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Nh.subVectors(r,s),a=(f-u)/(f-u+(d-_)),n.copy(s).addScaledVector(Nh,a);const p=1/(m+g+h);return o=g*p,a=h*p,n.copy(i).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xy=0;class mr extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=tr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ig,this.blendDst=Ng,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=eu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oc,this.stencilZFail=Oc,this.stencilZPass=Oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=wn.workingColorSpace){return this.r=e,this.g=n,this.b=i,wn.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=wn.workingColorSpace){if(e=Nu(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Kc(o,r,e+1/3),this.g=Kc(o,r,e),this.b=Kc(o,r,e-1/3)}return wn.toWorkingColorSpace(this,s),this}setStyle(e,n=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ze){const i=jg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return wn.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Yt(Ft.r*255,0,255))*65536+Math.round(Yt(Ft.g*255,0,255))*256+Math.round(Yt(Ft.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wn.workingColorSpace){wn.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=wn.workingColorSpace){return wn.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=ze){wn.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,s=Ft.b;return e!==ze?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Cn),Cn.h+=e,Cn.s+=n,Cn.l+=i,this.setHSL(Cn.h,Cn.s,Cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Cn),e.getHSL(Lo);const i=jr(Cn.h,Lo.h,n),s=jr(Cn.s,Lo.s,n),r=jr(Cn.l,Lo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new tt;tt.NAMES=jg;class Zg extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new $,Do=new $e;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Eh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Or(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Or(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Or(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Or(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Kg extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jg extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mn extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qy=0;const gn=new Mt,Jc=new Ct,Ds=new $,sn=new ho,Ar=new ho,wt=new $;class On extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gg(e)?Jg:Kg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(sn.min,Ar.min),sn.expandByPoint(wt),wt.addVectors(sn.max,Ar.max),sn.expandByPoint(wt)):(sn.expandByPoint(Ar.min),sn.expandByPoint(Ar.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)wt.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),wt.add(Ds)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,r=n.normal.array,o=n.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new $,u[T]=new $;const f=new $,h=new $,d=new $,_=new $e,g=new $e,m=new $e,p=new $,S=new $;function y(T,N,U){f.fromArray(s,T*3),h.fromArray(s,N*3),d.fromArray(s,U*3),_.fromArray(o,T*2),g.fromArray(o,N*2),m.fromArray(o,U*2),h.sub(f),d.sub(f),g.sub(_),m.sub(_);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(I),S.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(I),l[T].add(p),l[N].add(p),l[U].add(p),u[T].add(S),u[N].add(S),u[U].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,N=x.length;T<N;++T){const U=x[T],I=U.start,F=U.count;for(let B=I,H=I+F;B<H;B+=3)y(i[B+0],i[B+1],i[B+2])}const M=new $,E=new $,w=new $,L=new $;function v(T){w.fromArray(r,T*3),L.copy(w);const N=l[T];M.copy(N),M.sub(w.multiplyScalar(w.dot(N))).normalize(),E.crossVectors(L,N);const I=E.dot(u[T])<0?-1:1;c[T*4]=M.x,c[T*4+1]=M.y,c[T*4+2]=M.z,c[T*4+3]=I}for(let T=0,N=x.length;T<N;++T){const U=x[T],I=U.start,F=U.count;for(let B=I,H=I+F;B<H;B+=3)v(i[B+0]),v(i[B+1]),v(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new $,r=new $,o=new $,a=new $,c=new $,l=new $,u=new $,f=new $;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)h[_++]=l[d++]}return new dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,i);c.push(d)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new Mt,Hn=new qg,Uo=new qa,Oh=new $,Us=new $,Is=new $,Ns=new $,Qc=new $,Io=new $,No=new $e,Fo=new $e,Oo=new $e,Bh=new $,zh=new $,Hh=new $,Bo=new $,zo=new $;class di extends Ct{constructor(e=new On,n=new Zg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Qc.fromBufferAttribute(f,e),o?Io.addScaledVector(Qc,u):Io.addScaledVector(Qc.sub(n),u))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(Uo.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Uo,Oh)===null||Hn.origin.distanceToSquared(Oh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=p,x=S;y<x;y+=3){const M=o.getX(y),E=o.getX(y+1),w=o.getX(y+2);i=Ho(this,m,e,Hn,c,l,u,M,E,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);i=Ho(this,r,e,Hn,c,l,u,p,S,y),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=r[g.materialIndex],p=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let y=p,x=S;y<x;y+=3){const M=y,E=y+1,w=y+2;i=Ho(this,m,e,Hn,c,l,u,M,E,w),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=d,m=_;g<m;g+=3){const p=g,S=g+1,y=g+2;i=Ho(this,r,e,Hn,c,l,u,p,S,y),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function Yy(t,e,n,i,s,r,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Oi,a),c===null)return null;zo.copy(a),zo.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(zo);return l<n.near||l>n.far?null:{distance:l,point:zo.clone(),object:t}}function Ho(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,Us),t.getVertexPosition(c,Is),t.getVertexPosition(l,Ns);const u=Yy(t,e,n,i,Us,Is,Ns,Bo);if(u){s&&(No.fromBufferAttribute(s,a),Fo.fromBufferAttribute(s,c),Oo.fromBufferAttribute(s,l),u.uv=vn.getInterpolation(Bo,Us,Is,Ns,No,Fo,Oo,new $e)),r&&(No.fromBufferAttribute(r,a),Fo.fromBufferAttribute(r,c),Oo.fromBufferAttribute(r,l),u.uv1=vn.getInterpolation(Bo,Us,Is,Ns,No,Fo,Oo,new $e),u.uv2=u.uv1),o&&(Bh.fromBufferAttribute(o,a),zh.fromBufferAttribute(o,c),Hh.fromBufferAttribute(o,l),u.normal=vn.getInterpolation(Bo,Us,Is,Ns,Bh,zh,Hh,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new $,materialIndex:0};vn.getNormal(Us,Is,Ns,f.normal),u.face=f}return u}class po extends On{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Mn(l,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(f,2));function _(g,m,p,S,y,x,M,E,w,L,v){const T=x/w,N=M/L,U=x/2,I=M/2,F=E/2,B=w+1,H=L+1;let G=0,W=0;const oe=new $;for(let ee=0;ee<H;ee++){const Se=ee*N-I;for(let ce=0;ce<B;ce++){const j=ce*T-U;oe[g]=j*S,oe[m]=Se*y,oe[p]=F,l.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=E>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(ce/w),f.push(1-ee/L),G+=1}}for(let ee=0;ee<L;ee++)for(let Se=0;Se<w;Se++){const ce=h+Se+B*ee,j=h+Se+B*(ee+1),se=h+(Se+1)+B*(ee+1),me=h+(Se+1)+B*ee;c.push(ce,j,me),c.push(j,se,me),W+=6}a.addGroup(d,W,v),d+=W,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=lr(t[n]);for(const s in i)e[s]=i[s]}return e}function jy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qg(t){return t.getRenderTarget()===null?t.outputColorSpace:Yn}const Zy={clone:lr,merge:kt};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e0 extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends e0{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class Qy extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new xn(Fs,Os,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new xn(Fs,Os,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new xn(Fs,Os,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new xn(Fs,Os,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new xn(Fs,Os,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new xn(Fs,Os,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=pi,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,r),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class t0 extends hn{constructor(e,n,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:or,super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eM extends vs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ms?ze:gs),this.texture=new t0(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new po(5,5,5),r=new xs({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ni});r.uniforms.tEquirect.value=n;const o=new di(s,r),a=n.minFilter;return n.minFilter===so&&(n.minFilter=_n),new Qy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const el=new $,tM=new $,nM=new je;class ns{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=el.subVectors(i,n).cross(tM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(el),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nM.getNormalMatrix(e),s=this.coplanarPoint(el).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new qa,Vo=new $;class Fu{constructor(e=new ns,n=new ns,i=new ns,s=new ns,r=new ns,o=new ns){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],f=i[7],h=i[8],d=i[9],_=i[10],g=i[11],m=i[12],p=i[13],S=i[14],y=i[15];return n[0].setComponents(a-s,f-c,g-h,y-m).normalize(),n[1].setComponents(a+s,f+c,g+h,y+m).normalize(),n[2].setComponents(a+r,f+l,g+d,y+p).normalize(),n[3].setComponents(a-r,f-l,g-d,y-p).normalize(),n[4].setComponents(a-o,f-u,g-_,y-S).normalize(),n[5].setComponents(a+o,f+u,g+_,y+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function n0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function iM(t,e){const n=e.isWebGL2,i=new WeakMap;function s(l,u){const f=l.array,h=l.usage,d=t.createBuffer();t.bindBuffer(u,d),t.bufferData(u,f,h),l.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,d=u.updateRange;t.bindBuffer(f,l),d.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(t.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,s(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Ou extends On{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=e/a,h=n/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let y=0;y<l;y++){const x=y*f-r;_.push(x,-S,0),g.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,x=S+l*(p+1),M=S+1+l*(p+1),E=S+1+l*p;d.push(y,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new Mn(_,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.widthSegments,e.heightSegments)}}var sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM="vec3 transformed = vec3( position );",fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dM=`#ifdef USE_IRIDESCENCE
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
#endif`,pM=`#ifdef USE_BUMPMAP
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,$M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XM=`uniform bool receiveShadow;
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
#endif`,qM=`#if defined( USE_ENVMAP )
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
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
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
#endif`,QM=`struct PhysicalMaterial {
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
}`,eE=`
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BE=`float getShadowMask() {
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
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#ifdef USE_UV
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
#endif`,ZE=`#ifdef USE_UV
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
#endif`,KE=`#ifdef USE_UV
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
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rS=`#include <common>
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
}`,oS=`#if DEPTH_PACKING == 3200
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
}`,aS=`#define DISTANCE
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
}`,cS=`#define DISTANCE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fS=`uniform float scale;
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
}`,hS=`uniform vec3 diffuse;
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
}`,dS=`#include <common>
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,vS=`#define MATCAP
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
}`,xS=`#define NORMAL
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
}`,yS=`#define NORMAL
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
}`,MS=`#define PHONG
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
}`,ES=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,bS=`#define STANDARD
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
}`,TS=`#define TOON
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
}`,wS=`#define TOON
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
}`,AS=`uniform float size;
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
}`,RS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,PS=`uniform vec3 color;
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
}`,LS=`uniform float rotation;
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
}`,DS=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:sM,alphamap_pars_fragment:rM,alphatest_fragment:oM,alphatest_pars_fragment:aM,aomap_fragment:cM,aomap_pars_fragment:lM,begin_vertex:uM,beginnormal_vertex:fM,bsdfs:hM,iridescence_fragment:dM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:yM,color_pars_vertex:MM,color_vertex:EM,common:SM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:TM,displacementmap_pars_vertex:wM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,encodings_fragment:PM,encodings_pars_fragment:LM,envmap_fragment:DM,envmap_common_pars_fragment:UM,envmap_pars_fragment:IM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:qM,envmap_vertex:FM,fog_vertex:OM,fog_pars_vertex:BM,fog_fragment:zM,fog_pars_fragment:HM,gradientmap_pars_fragment:VM,lightmap_fragment:$M,lightmap_pars_fragment:GM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:WM,lights_pars_begin:XM,lights_toon_fragment:YM,lights_toon_pars_fragment:jM,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:JM,lights_physical_pars_fragment:QM,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:oE,map_fragment:aE,map_pars_fragment:cE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphcolor_vertex:dE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:yE,normal_vertex:ME,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:wE,output_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:PE,dithering_fragment:LE,dithering_pars_fragment:DE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:FE,shadowmap_vertex:OE,shadowmask_pars_fragment:BE,skinbase_vertex:zE,skinning_pars_vertex:HE,skinning_vertex:VE,skinnormal_vertex:$E,specularmap_fragment:GE,specularmap_pars_fragment:kE,tonemapping_fragment:WE,tonemapping_pars_fragment:XE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:KE,worldpos_vertex:JE,background_vert:QE,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:sS,depth_vert:rS,depth_frag:oS,distanceRGBA_vert:aS,distanceRGBA_frag:cS,equirect_vert:lS,equirect_frag:uS,linedashed_vert:fS,linedashed_frag:hS,meshbasic_vert:dS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:MS,meshphong_frag:ES,meshphysical_vert:SS,meshphysical_frag:bS,meshtoon_vert:TS,meshtoon_frag:wS,points_vert:AS,points_frag:RS,shadow_vert:CS,shadow_frag:PS,sprite_vert:LS,sprite_frag:DS},ve={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaTest:{value:0}}},Wn={basic:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:kt([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:kt([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:kt([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:kt([ve.common,ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:kt([ve.lights,ve.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Wn.physical={uniforms:kt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const $o={r:0,b:0,g:0};function US(t,e,n,i,s,r,o){const a=new tt(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function _(m,p){let S=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?n:e).get(y)),y===null?g(a,c):y&&y.isColor&&(g(y,1),S=!0),t.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),S=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),S=!0;break}(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Xa)?(u===void 0&&(u=new di(new po(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:lr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==ze,(f!==y||h!==y.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new di(new Ou(2,2),new xs({name:"BackgroundMaterial",uniforms:lr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=y.colorSpace!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){m.getRGB($o,Qg(t)),i.buffers.color.setClear($o.r,$o.g,$o.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function IS(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function f(F,B,H,G,W){let oe=!1;if(o){const ee=g(G,H,B);l!==ee&&(l=ee,d(l.object)),oe=p(F,G,H,W),oe&&S(F,G,H,W)}else{const ee=B.wireframe===!0;(l.geometry!==G.id||l.program!==H.id||l.wireframe!==ee)&&(l.geometry=G.id,l.program=H.id,l.wireframe=ee,oe=!0)}W!==null&&n.update(W,t.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,L(F,B,H,G),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function h(){return i.isWebGL2?t.createVertexArray():r.createVertexArrayOES()}function d(F){return i.isWebGL2?t.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function g(F,B,H){const G=H.wireframe===!0;let W=a[F.id];W===void 0&&(W={},a[F.id]=W);let oe=W[B.id];oe===void 0&&(oe={},W[B.id]=oe);let ee=oe[G];return ee===void 0&&(ee=m(h()),oe[G]=ee),ee}function m(F){const B=[],H=[],G=[];for(let W=0;W<s;W++)B[W]=0,H[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:G,object:F,attributes:{},index:null}}function p(F,B,H,G){const W=l.attributes,oe=B.attributes;let ee=0;const Se=H.getAttributes();for(const ce in Se)if(Se[ce].location>=0){const se=W[ce];let me=oe[ce];if(me===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(me=F.instanceColor)),se===void 0||se.attribute!==me||me&&se.data!==me.data)return!0;ee++}return l.attributesNum!==ee||l.index!==G}function S(F,B,H,G){const W={},oe=B.attributes;let ee=0;const Se=H.getAttributes();for(const ce in Se)if(Se[ce].location>=0){let se=oe[ce];se===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));const me={};me.attribute=se,se&&se.data&&(me.data=se.data),W[ce]=me,ee++}l.attributes=W,l.attributesNum=ee,l.index=G}function y(){const F=l.newAttributes;for(let B=0,H=F.length;B<H;B++)F[B]=0}function x(F){M(F,0)}function M(F,B){const H=l.newAttributes,G=l.enabledAttributes,W=l.attributeDivisors;H[F]=1,G[F]===0&&(t.enableVertexAttribArray(F),G[F]=1),W[F]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),W[F]=B)}function E(){const F=l.newAttributes,B=l.enabledAttributes;for(let H=0,G=B.length;H<G;H++)B[H]!==F[H]&&(t.disableVertexAttribArray(H),B[H]=0)}function w(F,B,H,G,W,oe){i.isWebGL2===!0&&(H===t.INT||H===t.UNSIGNED_INT)?t.vertexAttribIPointer(F,B,H,W,oe):t.vertexAttribPointer(F,B,H,G,W,oe)}function L(F,B,H,G){if(i.isWebGL2===!1&&(F.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const W=G.attributes,oe=H.getAttributes(),ee=B.defaultAttributeValues;for(const Se in oe){const ce=oe[Se];if(ce.location>=0){let j=W[Se];if(j===void 0&&(Se==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),Se==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const se=j.normalized,me=j.itemSize,ge=n.get(j);if(ge===void 0)continue;const A=ge.buffer,ue=ge.type,Ee=ge.bytesPerElement;if(j.isInterleavedBufferAttribute){const he=j.data,Ce=he.stride,P=j.offset;if(he.isInstancedInterleavedBuffer){for(let D=0;D<ce.locationSize;D++)M(ce.location+D,he.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let D=0;D<ce.locationSize;D++)x(ce.location+D);t.bindBuffer(t.ARRAY_BUFFER,A);for(let D=0;D<ce.locationSize;D++)w(ce.location+D,me/ce.locationSize,ue,se,Ce*Ee,(P+me/ce.locationSize*D)*Ee)}else{if(j.isInstancedBufferAttribute){for(let he=0;he<ce.locationSize;he++)M(ce.location+he,j.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let he=0;he<ce.locationSize;he++)x(ce.location+he);t.bindBuffer(t.ARRAY_BUFFER,A);for(let he=0;he<ce.locationSize;he++)w(ce.location+he,me/ce.locationSize,ue,se,me*Ee,me/ce.locationSize*he*Ee)}}else if(ee!==void 0){const se=ee[Se];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(ce.location,se);break;case 3:t.vertexAttrib3fv(ce.location,se);break;case 4:t.vertexAttrib4fv(ce.location,se);break;default:t.vertexAttrib1fv(ce.location,se)}}}}E()}function v(){U();for(const F in a){const B=a[F];for(const H in B){const G=B[H];for(const W in G)_(G[W].object),delete G[W];delete B[H]}delete a[F]}}function T(F){if(a[F.id]===void 0)return;const B=a[F.id];for(const H in B){const G=B[H];for(const W in G)_(G[W].object),delete G[W];delete B[H]}delete a[F.id]}function N(F){for(const B in a){const H=a[B];if(H[F.id]===void 0)continue;const G=H[F.id];for(const W in G)_(G[W].object),delete G[W];delete H[F.id]}}function U(){I(),u=!0,l!==c&&(l=c,d(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:U,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function NS(t,e,n,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,u){t.drawArrays(r,l,u),n.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,d;if(s)h=t,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,l,u,f),n.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function FS(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,x=o||e.has("OES_texture_float"),M=y&&x,E=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function OS(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ns,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,y=S*4;let x=p.clippingState||null;c.value=x,x=u(_,h,y,d);for(let M=0;M!==y;++M)x[M]=n[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==g;++y,x+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function BS(t){let e=new WeakMap;function n(o,a){return a===tu?o.mapping=or:a===nu&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===tu||a===nu)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new eM(c.height/2);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class i0 extends e0{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=4,Vh=[.125,.215,.35,.446,.526,.582],rs=20,tl=new i0,$h=new tt;let nl=null;const is=(1+Math.sqrt(5))/2,Bs=1/is,Gh=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,is,Bs),new $(0,is,-Bs),new $(Bs,0,is),new $(-Bs,0,is),new $(is,Bs,0),new $(-is,Bs,0)];class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){nl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl),e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ro,format:Un,colorSpace:Yn,depthBuffer:!1},s=Wh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zS(r)),this._blurMaterial=HS(r,e,n)}return s}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,tl)}_sceneToCubeUV(e,n,i,s){const a=new xn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor($h),u.toneMapping=pi,u.autoClear=!1;const d=new Zg({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new di(new po,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy($h),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Go(s,S*y,p>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Go(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,tl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gh[(s-1)%Gh.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new di(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let S=0;for(let w=0;w<rs;++w){const L=w/g,v=Math.exp(-L*L/2);p.push(v),w===0?S+=v:w<m&&(S+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const x=this._sizeLods[s],M=3*x*(s>y-Ys?s-y+Ys:0),E=4*(this._cubeSize-x);Go(n,M,E,3*x,2*x),c.setRenderTarget(n),c.render(f,tl)}}function zS(t){const e=[],n=[],i=[];let s=t;const r=t-Ys+1+Vh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let c=1/a;o>t-Ys?c=Vh[o-t+Ys-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),y=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,L=E>2?0:-1,v=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];S.set(v,g*_*E),y.set(h,m*_*E);const T=[E,E,E,E,E,E];x.set(T,p*_*E)}const M=new On;M.setAttribute("position",new dn(S,g)),M.setAttribute("uv",new dn(y,m)),M.setAttribute("faceIndex",new dn(x,p)),e.push(M),s>Ys&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wh(t,e,n){const i=new vs(t,e,n);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function HS(t,e,n){const i=new Float32Array(rs),s=new $(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Xh(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function qh(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Bu(){return`

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
	`}function VS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===tu||c===nu,u=c===or||c===ar;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new kh(t)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&s(f)){n===null&&(n=new kh(t));const h=l?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $S(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function GS(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],t.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,x=S.length;y<x;y+=3){const M=S[y+0],E=S[y+1],w=S[y+2];h.push(M,E,E,w,w,M)}}else{const S=_.array;g=_.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const M=y+0,E=y+1,w=y+2;h.push(M,E,E,w,w,M)}}const m=new(Gg(h)?Jg:Kg)(h,1);m.version=g;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function kS(t,e,n,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,d){t.drawElements(r,d,a,h*c),n.update(d,r,1)}function f(h,d,_){if(_===0)return;let g,m;if(s)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,a,h*c,_),n.update(d,r,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function WS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function XS(t,e){return t[0]-e[0]}function qS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function YS(t,e,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new Rt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let B=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var d=B;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let v=0;y===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let T=u.attributes.position.count*v,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const U=new Float32Array(T*N*4*g),I=new Xg(U,T,N,g);I.type=fs,I.needsUpdate=!0;const F=v*4;for(let H=0;H<g;H++){const G=E[H],W=w[H],oe=L[H],ee=T*N*4*H;for(let Se=0;Se<G.count;Se++){const ce=Se*F;y===!0&&(o.fromBufferAttribute(G,Se),U[ee+ce+0]=o.x,U[ee+ce+1]=o.y,U[ee+ce+2]=o.z,U[ee+ce+3]=0),x===!0&&(o.fromBufferAttribute(W,Se),U[ee+ce+4]=o.x,U[ee+ce+5]=o.y,U[ee+ce+6]=o.z,U[ee+ce+7]=0),M===!0&&(o.fromBufferAttribute(oe,Se),U[ee+ce+8]=o.x,U[ee+ce+9]=o.y,U[ee+ce+10]=o.z,U[ee+ce+11]=oe.itemSize===4?o.w:1)}}m={count:g,texture:I,size:new $e(T,N)},r.set(u,m),u.addEventListener("dispose",B)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const S=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",S),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(qS);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(XS);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const M=a[x],E=M[0],w=M[1];E!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+x)!==m[E]&&u.setAttribute("morphTarget"+x,m[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),s[x]=w,S+=w):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:c}}function jS(t,e,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);return s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER)),f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}const s0=new hn,r0=new Xg,o0=new By,a0=new t0,Yh=[],jh=[],Zh=new Float32Array(16),Kh=new Float32Array(9),Jh=new Float32Array(4);function gr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ja(t,e){let n=jh[e];n===void 0&&(n=new Int32Array(e),jh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function JS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function QS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(Et(n,i))return;Jh.set(i),t.uniformMatrix2fv(this.addr,!1,Jh),St(n,i)}}function tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(Et(n,i))return;Kh.set(i),t.uniformMatrix3fv(this.addr,!1,Kh),St(n,i)}}function nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(Et(n,i))return;Zh.set(i),t.uniformMatrix4fv(this.addr,!1,Zh),St(n,i)}}function ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function ab(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function fb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||s0,s)}function hb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||o0,s)}function db(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||a0,s)}function pb(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||r0,s)}function mb(t){switch(t){case 5126:return ZS;case 35664:return KS;case 35665:return JS;case 35666:return QS;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return cb;case 36295:return lb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(t,e){t.uniform1fv(this.addr,e)}function _b(t,e){const n=gr(e,this.size,2);t.uniform2fv(this.addr,n)}function vb(t,e){const n=gr(e,this.size,3);t.uniform3fv(this.addr,n)}function xb(t,e){const n=gr(e,this.size,4);t.uniform4fv(this.addr,n)}function yb(t,e){const n=gr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Mb(t,e){const n=gr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Eb(t,e){const n=gr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Sb(t,e){t.uniform1iv(this.addr,e)}function bb(t,e){t.uniform2iv(this.addr,e)}function Tb(t,e){t.uniform3iv(this.addr,e)}function wb(t,e){t.uniform4iv(this.addr,e)}function Ab(t,e){t.uniform1uiv(this.addr,e)}function Rb(t,e){t.uniform2uiv(this.addr,e)}function Cb(t,e){t.uniform3uiv(this.addr,e)}function Pb(t,e){t.uniform4uiv(this.addr,e)}function Lb(t,e,n){const i=this.cache,s=e.length,r=ja(n,s);Et(i,r)||(t.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||s0,r[o])}function Db(t,e,n){const i=this.cache,s=e.length,r=ja(n,s);Et(i,r)||(t.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||o0,r[o])}function Ub(t,e,n){const i=this.cache,s=e.length,r=ja(n,s);Et(i,r)||(t.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a0,r[o])}function Ib(t,e,n){const i=this.cache,s=e.length,r=ja(n,s);Et(i,r)||(t.uniform1iv(this.addr,r),St(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||r0,r[o])}function Nb(t){switch(t){case 5126:return gb;case 35664:return _b;case 35665:return vb;case 35666:return xb;case 35674:return yb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Sb;case 35667:case 35671:return bb;case 35668:case 35672:return Tb;case 35669:case 35673:return wb;case 5125:return Ab;case 36294:return Rb;case 36295:return Cb;case 36296:return Pb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Ib}}class Fb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=mb(n.type)}}class Ob{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Nb(n.type)}}class Bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Qh(t,e){t.seq.push(e),t.map[e.id]=e}function zb(t,e,n){const i=t.name,s=i.length;for(il.lastIndex=0;;){const r=il.exec(i),o=il.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qh(n,l===void 0?new Fb(a,t,e):new Ob(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Bb(a),Qh(n,f)),n=f}}}class va{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);zb(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function ed(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Hb=0;function Vb(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function $b(t){switch(t){case Yn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function td(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+Vb(t.getShaderSource(e),o)}else return s}function Gb(t,e){const n=$b(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function kb(t,e){let n;switch(e){case X1:n="Linear";break;case q1:n="Reinhard";break;case Y1:n="OptimizedCineon";break;case j1:n="ACESFilmic";break;case Z1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Wb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Br).join(`
`)}function Xb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Br(t){return t!==""}function nd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(t){return t.replace(Yb,jb)}function jb(t,e){const n=Ve[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return au(n)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(t){return t.replace(Zb,Kb)}function Kb(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===b1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Qb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function tT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fg:e="ENVMAP_BLENDING_MULTIPLY";break;case k1:e="ENVMAP_BLENDING_MIX";break;case W1:e="ENVMAP_BLENDING_ADD";break}return e}function nT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iT(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Jb(n),l=Qb(n),u=eT(n),f=tT(n),h=nT(n),d=n.isWebGL2?"":Wb(n),_=Xb(r),g=s.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[_].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[rd(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[d,rd(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==pi?kb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,Gb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Br).join(`
`)),o=au(o),o=nd(o,n),o=id(o,n),a=au(a),a=nd(a,n),a=id(a,n),o=sd(o),a=sd(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,x=S+p+a,M=ed(s,s.VERTEX_SHADER,y),E=ed(s,s.FRAGMENT_SHADER,x);if(s.attachShader(g,M),s.attachShader(g,E),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),t.debug.checkShaderErrors){const v=s.getProgramInfoLog(g).trim(),T=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(E).trim();let U=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,M,E);else{const F=td(s,M,"vertex"),B=td(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+F+`
`+B)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(T===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:U,programLog:v,vertexShader:{log:T,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(M),s.deleteShader(E);let w;this.getUniforms=function(){return w===void 0&&(w=new va(s,g)),w};let L;return this.getAttributes=function(){return L===void 0&&(L=qb(s,g)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let sT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oT(e),n.set(e,i)),i}}class oT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function aT(t,e,n,i,s,r,o){const a=new Yg,c=new rT,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,T,N,U,I){const F=U.fog,B=I.geometry,H=v.isMeshStandardMaterial?U.environment:null,G=(v.isMeshStandardMaterial?n:e).get(v.envMap||H),W=G&&G.mapping===Xa?G.image.height:null,oe=_[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=ee!==void 0?ee.length:0;let ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let j,se,me,ge;if(oe){const it=Wn[oe];j=it.vertexShader,se=it.fragmentShader}else j=v.vertexShader,se=v.fragmentShader,c.update(v),me=c.getVertexShaderID(v),ge=c.getFragmentShaderID(v);const A=t.getRenderTarget(),ue=I.isInstancedMesh===!0,Ee=!!v.map,he=!!v.matcap,Ce=!!G,P=!!v.aoMap,D=!!v.lightMap,V=!!v.bumpMap,ie=!!v.normalMap,Q=!!v.displacementMap,ne=!!v.emissiveMap,pe=!!v.metalnessMap,re=!!v.roughnessMap,le=v.clearcoat>0,ae=v.iridescence>0,R=v.sheen>0,b=v.transmission>0,z=le&&!!v.clearcoatMap,q=le&&!!v.clearcoatNormalMap,Z=le&&!!v.clearcoatRoughnessMap,fe=ae&&!!v.iridescenceMap,xe=ae&&!!v.iridescenceThicknessMap,ye=R&&!!v.sheenColorMap,Y=R&&!!v.sheenRoughnessMap,Te=!!v.specularMap,Ae=!!v.specularColorMap,Le=!!v.specularIntensityMap,we=b&&!!v.transmissionMap,Me=b&&!!v.thicknessMap,Ne=!!v.gradientMap,Ke=!!v.alphaMap,ht=v.alphaTest>0,O=!!v.extensions,K=!!B.attributes.uv1,de=!!B.attributes.uv2,be=!!B.attributes.uv3;return{isWebGL2:u,shaderID:oe,shaderName:v.type,vertexShader:j,fragmentShader:se,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:ue,instancingColor:ue&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:A===null?t.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yn,map:Ee,matcap:he,envMap:Ce,envMapMode:Ce&&G.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:D,bumpMap:V,normalMap:ie,displacementMap:h&&Q,emissiveMap:ne,normalMapObjectSpace:ie&&v.normalMapType===my,normalMapTangentSpace:ie&&v.normalMapType===Hg,metalnessMap:pe,roughnessMap:re,clearcoat:le,clearcoatMap:z,clearcoatNormalMap:q,clearcoatRoughnessMap:Z,iridescence:ae,iridescenceMap:fe,iridescenceThicknessMap:xe,sheen:R,sheenColorMap:ye,sheenRoughnessMap:Y,specularMap:Te,specularColorMap:Ae,specularIntensityMap:Le,transmission:b,transmissionMap:we,thicknessMap:Me,gradientMap:Ne,opaque:v.transparent===!1&&v.blending===tr,alphaMap:Ke,alphaTest:ht,combine:v.combine,mapUv:Ee&&g(v.map.channel),aoMapUv:P&&g(v.aoMap.channel),lightMapUv:D&&g(v.lightMap.channel),bumpMapUv:V&&g(v.bumpMap.channel),normalMapUv:ie&&g(v.normalMap.channel),displacementMapUv:Q&&g(v.displacementMap.channel),emissiveMapUv:ne&&g(v.emissiveMap.channel),metalnessMapUv:pe&&g(v.metalnessMap.channel),roughnessMapUv:re&&g(v.roughnessMap.channel),clearcoatMapUv:z&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(v.sheenRoughnessMap.channel),specularMapUv:Te&&g(v.specularMap.channel),specularColorMapUv:Ae&&g(v.specularColorMap.channel),specularIntensityMapUv:Le&&g(v.specularIntensityMap.channel),transmissionMapUv:we&&g(v.transmissionMap.channel),thicknessMapUv:Me&&g(v.thicknessMap.channel),alphaMapUv:Ke&&g(v.alphaMap.channel),vertexTangents:ie&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:de,vertexUv3s:be,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ee||Ke),fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:v.toneMapped?t.toneMapping:pi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hi,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:O&&v.extensions.derivatives===!0,extensionFragDepth:O&&v.extensions.fragDepth===!0,extensionDrawBuffers:O&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)T.push(N),T.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(S(T,v),y(T,v),T.push(t.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function S(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),v.push(a.mask)}function x(v){const T=_[v.type];let N;if(T){const U=Wn[T];N=Zy.clone(U.uniforms)}else N=v.uniforms;return N}function M(v,T){let N;for(let U=0,I=l.length;U<I;U++){const F=l[U];if(F.cacheKey===T){N=F,++N.usedTimes;break}}return N===void 0&&(N=new iT(t,T,v,r),l.push(N)),N}function E(v){if(--v.usedTimes===0){const T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function w(v){c.remove(v)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:L}}function cT(){let t=new WeakMap;function e(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,a){t.get(r)[o]=a}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function lT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function od(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ad(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,_,g,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function c(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function l(f,h){n.length>1&&n.sort(f||lT),i.length>1&&i.sort(h||od),s.length>1&&s.sort(h||od)}function u(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function uT(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new ad,t.set(i,[o])):s>=r.length?(o=new ad,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new tt};break;case"SpotLight":n={position:new $,direction:new $,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dT=0;function pT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mT(t,e){const n=new fT,i=hT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new $);const r=new $,o=new Mt,a=new Mt;function c(u,f){let h=0,d=0,_=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let g=0,m=0,p=0,S=0,y=0,x=0,M=0,E=0,w=0,L=0;u.sort(pT);const v=f===!0?Math.PI:1;for(let N=0,U=u.length;N<U;N++){const I=u[N],F=I.color,B=I.intensity,H=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*B*v,d+=F.g*B*v,_+=F.b*B*v;else if(I.isLightProbe)for(let W=0;W<9;W++)s.probe[W].addScaledVector(I.sh.coefficients[W],B);else if(I.isDirectionalLight){const W=n.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const oe=I.shadow,ee=i.get(I);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,s.directionalShadow[g]=ee,s.directionalShadowMap[g]=G,s.directionalShadowMatrix[g]=I.shadow.matrix,x++}s.directional[g]=W,g++}else if(I.isSpotLight){const W=n.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(B*v),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,s.spot[p]=W;const oe=I.shadow;if(I.map&&(s.spotLightMap[w]=I.map,w++,oe.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[p]=oe.matrix,I.castShadow){const ee=i.get(I);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,s.spotShadow[p]=ee,s.spotShadowMap[p]=G,E++}p++}else if(I.isRectAreaLight){const W=n.get(I);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=W,S++}else if(I.isPointLight){const W=n.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*v),W.distance=I.distance,W.decay=I.decay,I.castShadow){const oe=I.shadow,ee=i.get(I);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,ee.shadowCameraNear=oe.camera.near,ee.shadowCameraFar=oe.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=I.shadow.matrix,M++}s.point[m]=W,m++}else if(I.isHemisphereLight){const W=n.get(I);W.skyColor.copy(I.color).multiplyScalar(B*v),W.groundColor.copy(I.groundColor).multiplyScalar(B*v),s.hemi[y]=W,y++}}S>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==E||T.numSpotMaps!==w)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=E+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,T.directionalLength=g,T.pointLength=m,T.spotLength=p,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=E,T.numSpotMaps=w,s.version=dT++)}function l(u,f){let h=0,d=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const x=u[S];if(x.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=s.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=s.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function cd(t,e){const n=new mT(t,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function c(f){n.setup(i,f)}function l(f){n.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gT(t,e){let n=new WeakMap;function i(r,o=0){const a=n.get(r);let c;return a===void 0?(c=new cd(t,e),n.set(r,[c])):o>=a.length?(c=new cd(t,e),a.push(c)):c=a[o],c}function s(){n=new WeakMap}return{get:i,dispose:s}}class _T extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vT extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
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
}`;function MT(t,e,n){let i=new Fu;const s=new $e,r=new $e,o=new Rt,a=new _T({depthPacking:py}),c=new vT,l={},u=n.maxTextureSize,f={[Oi]:en,[en]:Oi,[hi]:hi},h=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:xT,fragmentShader:yT}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new On;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new di(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let p=this.type;this.render=function(M,E,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),v=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Ni),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==ci&&this.type===ci,I=p===ci&&this.type!==ci;for(let F=0,B=M.length;F<B;F++){const H=M[F],G=H.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||U===!0||I===!0){const ee=this.type!==ci?{minFilter:Xt,magFilter:Xt}:{};G.map!==null&&G.map.dispose(),G.map=new vs(s.x,s.y,ee),G.map.texture.name=H.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const oe=G.getViewportCount();for(let ee=0;ee<oe;ee++){const Se=G.getViewport(ee);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),N.viewport(o),G.updateMatrices(H,ee),i=G.getFrustum(),x(E,w,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===ci&&S(G,w),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(L,v,T)};function S(M,E){const w=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vs(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(E,null,w,h,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(E,null,w,d,g,null)}function y(M,E,w,L){let v=null;const T=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)v=T;else if(v=w.isPointLight===!0?c:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,U=E.uuid;let I=l[N];I===void 0&&(I={},l[N]=I);let F=I[U];F===void 0&&(F=v.clone(),I[U]=F),v=F}if(v.visible=E.visible,v.wireframe=E.wireframe,L===ci?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=t.properties.get(v);N.light=w}return v}function x(M,E,w,L,v){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===ci)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const U=e.update(M),I=M.material;if(Array.isArray(I)){const F=U.groups;for(let B=0,H=F.length;B<H;B++){const G=F[B],W=I[G.materialIndex];if(W&&W.visible){const oe=y(M,W,L,v);t.renderBufferDirect(w,null,U,oe,M,G)}}}else if(I.visible){const F=y(M,I,L,v);t.renderBufferDirect(w,null,U,F,M,null)}}const N=M.children;for(let U=0,I=N.length;U<I;U++)x(N[U],E,w,L,v)}}function ET(t,e,n){const i=n.isWebGL2;function s(){let O=!1;const K=new Rt;let de=null;const be=new Rt(0,0,0,0);return{setMask:function(Pe){de!==Pe&&!O&&(t.colorMask(Pe,Pe,Pe,Pe),de=Pe)},setLocked:function(Pe){O=Pe},setClear:function(Pe,it,st,It,gi){gi===!0&&(Pe*=It,it*=It,st*=It),K.set(Pe,it,st,It),be.equals(K)===!1&&(t.clearColor(Pe,it,st,It),be.copy(K))},reset:function(){O=!1,de=null,be.set(-1,0,0,0)}}}function r(){let O=!1,K=null,de=null,be=null;return{setTest:function(Pe){Pe?A(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Pe){K!==Pe&&!O&&(t.depthMask(Pe),K=Pe)},setFunc:function(Pe){if(de!==Pe){switch(Pe){case O1:t.depthFunc(t.NEVER);break;case B1:t.depthFunc(t.ALWAYS);break;case z1:t.depthFunc(t.LESS);break;case eu:t.depthFunc(t.LEQUAL);break;case H1:t.depthFunc(t.EQUAL);break;case V1:t.depthFunc(t.GEQUAL);break;case $1:t.depthFunc(t.GREATER);break;case G1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){be!==Pe&&(t.clearDepth(Pe),be=Pe)},reset:function(){O=!1,K=null,de=null,be=null}}}function o(){let O=!1,K=null,de=null,be=null,Pe=null,it=null,st=null,It=null,gi=null;return{setTest:function(dt){O||(dt?A(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(dt){K!==dt&&!O&&(t.stencilMask(dt),K=dt)},setFunc:function(dt,pn,Bn){(de!==dt||be!==pn||Pe!==Bn)&&(t.stencilFunc(dt,pn,Bn),de=dt,be=pn,Pe=Bn)},setOp:function(dt,pn,Bn){(it!==dt||st!==pn||It!==Bn)&&(t.stencilOp(dt,pn,Bn),it=dt,st=pn,It=Bn)},setLocked:function(dt){O=dt},setClear:function(dt){gi!==dt&&(t.clearStencil(dt),gi=dt)},reset:function(){O=!1,K=null,de=null,be=null,Pe=null,it=null,st=null,It=null,gi=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,w=null,L=null,v=!1,T=null,N=null,U=null,I=null,F=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=G>=2);let oe=null,ee={};const Se=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),j=new Rt().fromArray(Se),se=new Rt().fromArray(ce);function me(O,K,de,be){const Pe=new Uint8Array(4),it=t.createTexture();t.bindTexture(O,it),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<de;st++)i&&(O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY)?t.texImage3D(K,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(K+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return it}const ge={};ge[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),A(t.DEPTH_TEST),c.setFunc(eu),Q(!1),ne(Xf),A(t.CULL_FACE),V(Ni);function A(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function ue(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function Ee(O,K){return d[O]!==K?(t.bindFramebuffer(O,K),d[O]=K,i&&(O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=K),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=K)),!0):!1}function he(O,K){let de=g,be=!1;if(O)if(de=_.get(K),de===void 0&&(de=[],_.set(K,de)),O.isWebGLMultipleRenderTargets){const Pe=O.texture;if(de.length!==Pe.length||de[0]!==t.COLOR_ATTACHMENT0){for(let it=0,st=Pe.length;it<st;it++)de[it]=t.COLOR_ATTACHMENT0+it;de.length=Pe.length,be=!0}}else de[0]!==t.COLOR_ATTACHMENT0&&(de[0]=t.COLOR_ATTACHMENT0,be=!0);else de[0]!==t.BACK&&(de[0]=t.BACK,be=!0);be&&(n.isWebGL2?t.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Ce(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const P={[qs]:t.FUNC_ADD,[w1]:t.FUNC_SUBTRACT,[A1]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Zf]=t.MIN,P[Kf]=t.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(P[Zf]=O.MIN_EXT,P[Kf]=O.MAX_EXT)}const D={[R1]:t.ZERO,[C1]:t.ONE,[P1]:t.SRC_COLOR,[Ig]:t.SRC_ALPHA,[F1]:t.SRC_ALPHA_SATURATE,[I1]:t.DST_COLOR,[D1]:t.DST_ALPHA,[L1]:t.ONE_MINUS_SRC_COLOR,[Ng]:t.ONE_MINUS_SRC_ALPHA,[N1]:t.ONE_MINUS_DST_COLOR,[U1]:t.ONE_MINUS_DST_ALPHA};function V(O,K,de,be,Pe,it,st,It){if(O===Ni){p===!0&&(ue(t.BLEND),p=!1);return}if(p===!1&&(A(t.BLEND),p=!0),O!==T1){if(O!==S||It!==v){if((y!==qs||E!==qs)&&(t.blendEquation(t.FUNC_ADD),y=qs,E=qs),It)switch(O){case tr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qf:t.blendFunc(t.ONE,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case tr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,M=null,w=null,L=null,S=O,v=It}return}Pe=Pe||K,it=it||de,st=st||be,(K!==y||Pe!==E)&&(t.blendEquationSeparate(P[K],P[Pe]),y=K,E=Pe),(de!==x||be!==M||it!==w||st!==L)&&(t.blendFuncSeparate(D[de],D[be],D[it],D[st]),x=de,M=be,w=it,L=st),S=O,v=!1}function ie(O,K){O.side===hi?ue(t.CULL_FACE):A(t.CULL_FACE);let de=O.side===en;K&&(de=!de),Q(de),O.blending===tr&&O.transparent===!1?V(Ni):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);const be=O.stencilWrite;l.setTest(be),be&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?A(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(O){T!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),T=O)}function ne(O){O!==E1?(A(t.CULL_FACE),O!==N&&(O===Xf?t.cullFace(t.BACK):O===S1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),N=O}function pe(O){O!==U&&(H&&t.lineWidth(O),U=O)}function re(O,K,de){O?(A(t.POLYGON_OFFSET_FILL),(I!==K||F!==de)&&(t.polygonOffset(K,de),I=K,F=de)):ue(t.POLYGON_OFFSET_FILL)}function le(O){O?A(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function ae(O){O===void 0&&(O=t.TEXTURE0+B-1),oe!==O&&(t.activeTexture(O),oe=O)}function R(O,K,de){de===void 0&&(oe===null?de=t.TEXTURE0+B-1:de=oe);let be=ee[de];be===void 0&&(be={type:void 0,texture:void 0},ee[de]=be),(be.type!==O||be.texture!==K)&&(oe!==de&&(t.activeTexture(de),oe=de),t.bindTexture(O,K||ge[O]),be.type=O,be.texture=K)}function b(){const O=ee[oe];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(O){j.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),j.copy(O))}function Me(O){se.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function Ne(O,K){let de=f.get(K);de===void 0&&(de=new WeakMap,f.set(K,de));let be=de.get(O);be===void 0&&(be=t.getUniformBlockIndex(K,O.name),de.set(O,be))}function Ke(O,K){const be=f.get(K).get(O);u.get(K)!==be&&(t.uniformBlockBinding(K,be,O.__bindingPointIndex),u.set(K,be))}function ht(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},oe=null,ee={},d={},_=new WeakMap,g=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,w=null,L=null,v=!1,T=null,N=null,U=null,I=null,F=null,j.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:A,disable:ue,bindFramebuffer:Ee,drawBuffers:he,useProgram:Ce,setBlending:V,setMaterial:ie,setFlipSided:Q,setCullFace:ne,setLineWidth:pe,setPolygonOffset:re,setScissorTest:le,activeTexture:ae,bindTexture:R,unbindTexture:b,compressedTexImage2D:z,compressedTexImage3D:q,texImage2D:Ae,texImage3D:Le,updateUBOMapping:Ne,uniformBlockBinding:Ke,texStorage2D:Y,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:fe,compressedTexSubImage2D:xe,compressedTexSubImage3D:ye,scissor:we,viewport:Me,reset:ht}}function ST(t,e,n,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,b){return p?new OffscreenCanvas(R,b):Ca("canvas")}function y(R,b,z,q){let Z=1;if((R.width>q||R.height>q)&&(Z=q/Math.max(R.width,R.height)),Z<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const fe=b?$g:Math.floor,xe=fe(Z*R.width),ye=fe(Z*R.height);g===void 0&&(g=S(xe,ye));const Y=z?S(xe,ye):g;return Y.width=xe,Y.height=ye,Y.getContext("2d").drawImage(R,0,0,xe,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+ye+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return ou(R.width)&&ou(R.height)}function M(R){return a?!1:R.wrapS!==Dn||R.wrapT!==Dn||R.minFilter!==Xt&&R.minFilter!==_n}function E(R,b){return R.generateMipmaps&&b&&R.minFilter!==Xt&&R.minFilter!==_n}function w(R){t.generateMipmap(R)}function L(R,b,z,q,Z=!1){if(a===!1)return b;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe=b;return b===t.RED&&(z===t.FLOAT&&(fe=t.R32F),z===t.HALF_FLOAT&&(fe=t.R16F),z===t.UNSIGNED_BYTE&&(fe=t.R8)),b===t.RG&&(z===t.FLOAT&&(fe=t.RG32F),z===t.HALF_FLOAT&&(fe=t.RG16F),z===t.UNSIGNED_BYTE&&(fe=t.RG8)),b===t.RGBA&&(z===t.FLOAT&&(fe=t.RGBA32F),z===t.HALF_FLOAT&&(fe=t.RGBA16F),z===t.UNSIGNED_BYTE&&(fe=q===ze&&Z===!1?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)),(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function v(R,b,z){return E(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==Xt&&R.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){return R===Xt||R===Jf||R===Lc?t.NEAREST:t.LINEAR}function N(R){const b=R.target;b.removeEventListener("dispose",N),I(b),b.isVideoTexture&&_.delete(b)}function U(R){const b=R.target;b.removeEventListener("dispose",U),B(b)}function I(R){const b=i.get(R);if(b.__webglInit===void 0)return;const z=R.source,q=m.get(z);if(q){const Z=q[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(R),Object.keys(q).length===0&&m.delete(z)}i.remove(R)}function F(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const z=R.source,q=m.get(z);delete q[b.__cacheKey],o.memory.textures--}function B(R){const b=R.texture,z=i.get(R),q=i.get(b);if(q.__webglTexture!==void 0&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)t.deleteFramebuffer(z.__webglFramebuffer[Z]),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[Z]);else{if(t.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Z=0;Z<z.__webglColorRenderbuffer.length;Z++)z.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[Z]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Z=0,fe=b.length;Z<fe;Z++){const xe=i.get(b[Z]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(b[Z])}i.remove(b),i.remove(R)}let H=0;function G(){H=0}function W(){const R=H;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),H+=1,R}function oe(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ee(R,b){const z=i.get(R);if(R.isVideoTexture&&le(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,R,b);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+b)}function Se(R,b){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ue(z,R,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+b)}function ce(R,b){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ue(z,R,b);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+b)}function j(R,b){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Ee(z,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+b)}const se={[iu]:t.REPEAT,[Dn]:t.CLAMP_TO_EDGE,[su]:t.MIRRORED_REPEAT},me={[Xt]:t.NEAREST,[Jf]:t.NEAREST_MIPMAP_NEAREST,[Lc]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[K1]:t.LINEAR_MIPMAP_NEAREST,[so]:t.LINEAR_MIPMAP_LINEAR};function ge(R,b,z){if(z?(t.texParameteri(R,t.TEXTURE_WRAP_S,se[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,se[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,se[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,me[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,me[b.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==Dn||b.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(b.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Xt&&b.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Xt||b.minFilter!==Lc&&b.minFilter!==so||b.type===fs&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===ro&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function A(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",N));const q=b.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const fe=oe(b);if(fe!==R.__cacheKey){Z[fe]===void 0&&(Z[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[fe].usedTimes++;const xe=Z[R.__cacheKey];xe!==void 0&&(Z[R.__cacheKey].usedTimes--,xe.usedTimes===0&&F(b)),R.__cacheKey=fe,R.__webglTexture=Z[fe].texture}return z}function ue(R,b,z){let q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=t.TEXTURE_3D);const Z=A(R,b),fe=b.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+z);const xe=i.get(fe);if(fe.version!==xe.__version||Z===!0){n.activeTexture(t.TEXTURE0+z),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ye=M(b)&&x(b.image)===!1;let Y=y(b.image,ye,!1,u);Y=ae(b,Y);const Te=x(Y)||a,Ae=r.convert(b.format,b.colorSpace);let Le=r.convert(b.type),we=L(b.internalFormat,Ae,Le,b.colorSpace);ge(q,b,Te);let Me;const Ne=b.mipmaps,Ke=a&&b.isVideoTexture!==!0,ht=xe.__version===void 0||Z===!0,O=v(b,Y,Te);if(b.isDepthTexture)we=t.DEPTH_COMPONENT,a?b.type===fs?we=t.DEPTH_COMPONENT32F:b.type===us?we=t.DEPTH_COMPONENT24:b.type===nr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:b.type===fs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ps&&we===t.DEPTH_COMPONENT&&b.type!==Bg&&b.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=us,Le=r.convert(b.type)),b.format===cr&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,b.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=nr,Le=r.convert(b.type))),ht&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,we,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,we,Y.width,Y.height,0,Ae,Le,null));else if(b.isDataTexture)if(Ne.length>0&&Te){Ke&&ht&&n.texStorage2D(t.TEXTURE_2D,O,we,Ne[0].width,Ne[0].height);for(let K=0,de=Ne.length;K<de;K++)Me=Ne[K],Ke?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Ae,Le,Me.data):n.texImage2D(t.TEXTURE_2D,K,we,Me.width,Me.height,0,Ae,Le,Me.data);b.generateMipmaps=!1}else Ke?(ht&&n.texStorage2D(t.TEXTURE_2D,O,we,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Ae,Le,Y.data)):n.texImage2D(t.TEXTURE_2D,0,we,Y.width,Y.height,0,Ae,Le,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,we,Ne[0].width,Ne[0].height,Y.depth);for(let K=0,de=Ne.length;K<de;K++)Me=Ne[K],b.format!==Un?Ae!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,Y.depth,Ae,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,Y.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,Y.depth,Ae,Le,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,Y.depth,0,Ae,Le,Me.data)}else{Ke&&ht&&n.texStorage2D(t.TEXTURE_2D,O,we,Ne[0].width,Ne[0].height);for(let K=0,de=Ne.length;K<de;K++)Me=Ne[K],b.format!==Un?Ae!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Ae,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,K,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Ae,Le,Me.data):n.texImage2D(t.TEXTURE_2D,K,we,Me.width,Me.height,0,Ae,Le,Me.data)}else if(b.isDataArrayTexture)Ke?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,we,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ae,Le,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,Y.width,Y.height,Y.depth,0,Ae,Le,Y.data);else if(b.isData3DTexture)Ke?(ht&&n.texStorage3D(t.TEXTURE_3D,O,we,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ae,Le,Y.data)):n.texImage3D(t.TEXTURE_3D,0,we,Y.width,Y.height,Y.depth,0,Ae,Le,Y.data);else if(b.isFramebufferTexture){if(ht)if(Ke)n.texStorage2D(t.TEXTURE_2D,O,we,Y.width,Y.height);else{let K=Y.width,de=Y.height;for(let be=0;be<O;be++)n.texImage2D(t.TEXTURE_2D,be,we,K,de,0,Ae,Le,null),K>>=1,de>>=1}}else if(Ne.length>0&&Te){Ke&&ht&&n.texStorage2D(t.TEXTURE_2D,O,we,Ne[0].width,Ne[0].height);for(let K=0,de=Ne.length;K<de;K++)Me=Ne[K],Ke?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ae,Le,Me):n.texImage2D(t.TEXTURE_2D,K,we,Ae,Le,Me);b.generateMipmaps=!1}else Ke?(ht&&n.texStorage2D(t.TEXTURE_2D,O,we,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Le,Y)):n.texImage2D(t.TEXTURE_2D,0,we,Ae,Le,Y);E(b,Te)&&w(q),xe.__version=fe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ee(R,b,z){if(b.image.length!==6)return;const q=A(R,b),Z=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const fe=i.get(Z);if(Z.version!==fe.__version||q===!0){n.activeTexture(t.TEXTURE0+z),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const xe=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let K=0;K<6;K++)!xe&&!ye?Y[K]=y(b.image[K],!1,!0,l):Y[K]=ye?b.image[K].image:b.image[K],Y[K]=ae(b,Y[K]);const Te=Y[0],Ae=x(Te)||a,Le=r.convert(b.format,b.colorSpace),we=r.convert(b.type),Me=L(b.internalFormat,Le,we,b.colorSpace),Ne=a&&b.isVideoTexture!==!0,Ke=fe.__version===void 0||q===!0;let ht=v(b,Te,Ae);ge(t.TEXTURE_CUBE_MAP,b,Ae);let O;if(xe){Ne&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,Me,Te.width,Te.height);for(let K=0;K<6;K++){O=Y[K].mipmaps;for(let de=0;de<O.length;de++){const be=O[de];b.format!==Un?Le!==null?Ne?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,be.width,be.height,Le,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,Me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,be.width,be.height,Le,we,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,Me,be.width,be.height,0,Le,we,be.data)}}}else{O=b.mipmaps,Ne&&Ke&&(O.length>0&&ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,Me,Y[0].width,Y[0].height));for(let K=0;K<6;K++)if(ye){Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Y[K].width,Y[K].height,Le,we,Y[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,Y[K].width,Y[K].height,0,Le,we,Y[K].data);for(let de=0;de<O.length;de++){const Pe=O[de].image[K].image;Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Pe.width,Pe.height,Le,we,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,Me,Pe.width,Pe.height,0,Le,we,Pe.data)}}else{Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,we,Y[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,Le,we,Y[K]);for(let de=0;de<O.length;de++){const be=O[de];Ne?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Le,we,be.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,Me,Le,we,be.image[K])}}}E(b,Ae)&&w(t.TEXTURE_CUBE_MAP),fe.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function he(R,b,z,q,Z){const fe=r.convert(z.format,z.colorSpace),xe=r.convert(z.type),ye=L(z.internalFormat,fe,xe,z.colorSpace);i.get(b).__hasExternalTextures||(Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,ye,b.width,b.height,b.depth,0,fe,xe,null):n.texImage2D(Z,0,ye,b.width,b.height,0,fe,xe,null)),n.bindFramebuffer(t.FRAMEBUFFER,R),re(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,i.get(z).__webglTexture,0,pe(b)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,i.get(z).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,b,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let q=t.DEPTH_COMPONENT16;if(z||re(b)){const Z=b.depthTexture;Z&&Z.isDepthTexture&&(Z.type===fs?q=t.DEPTH_COMPONENT32F:Z.type===us&&(q=t.DEPTH_COMPONENT24));const fe=pe(b);re(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,q,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,q,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const q=pe(b);z&&re(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,b.width,b.height):re(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0;Z<q.length;Z++){const fe=q[Z],xe=r.convert(fe.format,fe.colorSpace),ye=r.convert(fe.type),Y=L(fe.internalFormat,xe,ye,fe.colorSpace),Te=pe(b);z&&re(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,Y,b.width,b.height):re(b)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,Y,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Y,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function P(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const q=i.get(b.depthTexture).__webglTexture,Z=pe(b);if(b.depthTexture.format===ps)re(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(b.depthTexture.format===cr)re(b)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function D(R){const b=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");P(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]=t.createRenderbuffer(),Ce(b.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),Ce(b.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(R,b,z){const q=i.get(R);b!==void 0&&he(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),z!==void 0&&D(R)}function ie(R){const b=R.texture,z=i.get(R),q=i.get(b);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=b.version,o.memory.textures++);const Z=R.isWebGLCubeRenderTarget===!0,fe=R.isWebGLMultipleRenderTargets===!0,xe=x(R)||a;if(Z){z.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)z.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(z.__webglFramebuffer=t.createFramebuffer(),fe)if(s.drawBuffers){const ye=R.texture;for(let Y=0,Te=ye.length;Y<Te;Y++){const Ae=i.get(ye[Y]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&re(R)===!1){const ye=fe?b:[b];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<ye.length;Y++){const Te=ye[Y];z.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const Ae=r.convert(Te.format,Te.colorSpace),Le=r.convert(Te.type),we=L(Te.internalFormat,Ae,Le,Te.colorSpace,R.isXRRenderTarget===!0),Me=pe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,we,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ge(t.TEXTURE_CUBE_MAP,b,xe);for(let ye=0;ye<6;ye++)he(z.__webglFramebuffer[ye],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye);E(b,xe)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){const ye=R.texture;for(let Y=0,Te=ye.length;Y<Te;Y++){const Ae=ye[Y],Le=i.get(Ae);n.bindTexture(t.TEXTURE_2D,Le.__webglTexture),ge(t.TEXTURE_2D,Ae,xe),he(z.__webglFramebuffer,R,Ae,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),E(Ae,xe)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ye=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,q.__webglTexture),ge(ye,b,xe),he(z.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,ye),E(b,xe)&&w(ye),n.unbindTexture()}R.depthBuffer&&D(R)}function Q(R){const b=x(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let q=0,Z=z.length;q<Z;q++){const fe=z[q];if(E(fe,b)){const xe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(fe).__webglTexture;n.bindTexture(xe,ye),w(xe),n.unbindTexture()}}}function ne(R){if(a&&R.samples>0&&re(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,q=R.height;let Z=t.COLOR_BUFFER_BIT;const fe=[],xe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let Te=0;Te<b.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){fe.push(t.COLOR_ATTACHMENT0+Te),R.depthBuffer&&fe.push(xe);const Ae=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ae===!1&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]),Ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),Y){const Le=i.get(b[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,z,q,0,0,z,q,Z,t.NEAREST),d&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let Te=0;Te<b.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);const Ae=i.get(b[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function pe(R){return Math.min(f,R.samples)}function re(R){const b=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(R){const b=o.render.frame;_.get(R)!==b&&(_.set(R,b),R.update())}function ae(R,b){const z=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.format===ru||z!==Yn&&z!==gs&&(z===ze?a===!1?e.has("EXT_sRGB")===!0&&q===Un?(R.format=ru,R.minFilter=_n,R.generateMipmaps=!1):b=kg.sRGBToLinear(b):(q!==Un||Z!==_s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=ee,this.setTexture2DArray=Se,this.setTexture3D=ce,this.setTextureCube=j,this.rebindTextures=V,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=he,this.useMultisampledRTT=re}function bT(t,e,n){const i=n.isWebGL2;function s(r,o=gs){let a;if(r===_s)return t.UNSIGNED_BYTE;if(r===ty)return t.UNSIGNED_SHORT_4_4_4_4;if(r===ny)return t.UNSIGNED_SHORT_5_5_5_1;if(r===J1)return t.BYTE;if(r===Q1)return t.SHORT;if(r===Bg)return t.UNSIGNED_SHORT;if(r===ey)return t.INT;if(r===us)return t.UNSIGNED_INT;if(r===fs)return t.FLOAT;if(r===ro)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===iy)return t.ALPHA;if(r===Un)return t.RGBA;if(r===sy)return t.LUMINANCE;if(r===ry)return t.LUMINANCE_ALPHA;if(r===ps)return t.DEPTH_COMPONENT;if(r===cr)return t.DEPTH_STENCIL;if(r===ru)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===oy)return t.RED;if(r===ay)return t.RED_INTEGER;if(r===cy)return t.RG;if(r===ly)return t.RG_INTEGER;if(r===uy)return t.RGBA_INTEGER;if(r===Dc||r===Uc||r===Ic||r===Nc)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Dc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Dc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qf||r===eh||r===th||r===nh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Qf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ih||r===sh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ih)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rh||r===oh||r===ah||r===ch||r===lh||r===uh||r===fh||r===hh||r===dh||r===ph||r===mh||r===gh||r===_h||r===vh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ph)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vh)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Fc)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===hy||r===xh||r===yh||r===Mh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Fc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===nr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[r]!==void 0?t[r]:null}return{convert:s}}class TT extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ko extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wT={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wT)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ko;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class AT extends hn{constructor(e,n,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:ps,u!==ps&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ps&&(i=us),i===void 0&&u===cr&&(i=nr),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1}}class RT extends ys{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,_=null;const g=n.getContextAttributes();let m=null,p=null;const S=[],y=[],x=new Set,M=new Map,E=new xn;E.layers.enable(1),E.viewport=new Rt;const w=new xn;w.layers.enable(2),w.viewport=new Rt;const L=[E,w],v=new TT;v.layers.enable(1),v.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=S[j];return se===void 0&&(se=new sl,S[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=S[j];return se===void 0&&(se=new sl,S[j]=se),se.getGripSpace()},this.getHand=function(j){let se=S[j];return se===void 0&&(se=new sl,S[j]=se),se.getHandSpace()};function U(j){const se=y.indexOf(j.inputSource);if(se===-1)return;const me=S[se];me!==void 0&&(me.update(j.inputSource,j.frame,l||o),me.dispatchEvent({type:j.type,data:j.inputSource}))}function I(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",F);for(let j=0;j<S.length;j++){const se=y[j];se!==null&&(y[j]=null,S[j].disconnect(se))}T=null,N=null,e.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",I),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,se),s.updateRenderState({baseLayer:d}),p=new vs(d.framebufferWidth,d.framebufferHeight,{format:Un,type:_s,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,me=null,ge=null;g.depth&&(ge=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=g.stencil?cr:ps,me=g.stencil?nr:us);const A={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(A),s.updateRenderState({layers:[h]}),p=new vs(h.textureWidth,h.textureHeight,{format:Un,type:_s,depthTexture:new AT(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ue=e.properties.get(p);ue.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(j){for(let se=0;se<j.removed.length;se++){const me=j.removed[se],ge=y.indexOf(me);ge>=0&&(y[ge]=null,S[ge].disconnect(me))}for(let se=0;se<j.added.length;se++){const me=j.added[se];let ge=y.indexOf(me);if(ge===-1){for(let ue=0;ue<S.length;ue++)if(ue>=y.length){y.push(me),ge=ue;break}else if(y[ue]===null){y[ue]=me,ge=ue;break}if(ge===-1)break}const A=S[ge];A&&A.connect(me)}}const B=new $,H=new $;function G(j,se,me){B.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(me.matrixWorld);const ge=B.distanceTo(H),A=se.projectionMatrix.elements,ue=me.projectionMatrix.elements,Ee=A[14]/(A[10]-1),he=A[14]/(A[10]+1),Ce=(A[9]+1)/A[5],P=(A[9]-1)/A[5],D=(A[8]-1)/A[0],V=(ue[8]+1)/ue[0],ie=Ee*D,Q=Ee*V,ne=ge/(-D+V),pe=ne*-D;se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pe),j.translateZ(ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const re=Ee+ne,le=he+ne,ae=ie-pe,R=Q+(ge-pe),b=Ce*he/le*re,z=P*he/le*re;j.projectionMatrix.makePerspective(ae,R,b,z,re,le),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function W(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;v.near=w.near=E.near=j.near,v.far=w.far=E.far=j.far,(T!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far);const se=j.parent,me=v.cameras;W(v,se);for(let ge=0;ge<me.length;ge++)W(me[ge],se);me.length===2?G(v,E,w):v.projectionMatrix.copy(E.projectionMatrix),oe(j,v,se)};function oe(j,se,me){me===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ge=j.children;for(let A=0,ue=ge.length;A<ue;A++)ge[A].updateMatrixWorld(!0);j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=oo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.getPlanes=function(){return x};let ee=null;function Se(j,se){if(u=se.getViewerPose(l||o),_=se,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ge=!1;me.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let A=0;A<me.length;A++){const ue=me[A];let Ee=null;if(d!==null)Ee=d.getViewport(ue);else{const Ce=f.getViewSubImage(h,ue);Ee=Ce.viewport,A===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let he=L[A];he===void 0&&(he=new xn,he.layers.enable(A),he.viewport=new Rt,L[A]=he),he.matrix.fromArray(ue.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ue.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),A===0&&(v.matrix.copy(he.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ge===!0&&v.cameras.push(he)}}for(let me=0;me<S.length;me++){const ge=y[me],A=S[me];ge!==null&&A!==void 0&&A.update(ge,se,l||o)}if(ee&&ee(j,se),se.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:se.detectedPlanes});let me=null;for(const ge of x)se.detectedPlanes.has(ge)||(me===null&&(me=[]),me.push(ge));if(me!==null)for(const ge of me)x.delete(ge),M.delete(ge),i.dispatchEvent({type:"planeremoved",data:ge});for(const ge of se.detectedPlanes)if(!x.has(ge))x.add(ge),M.set(ge,se.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ge});else{const A=M.get(ge);ge.lastChangedTime>A&&(M.set(ge,ge.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ge}))}}_=null}const ce=new n0;ce.setAnimationLoop(Se),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}function CT(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PT(t,e,n,i){let s={},r={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function l(S,y){let x=s[S.id];x===void 0&&(_(S),x=u(S),s[S.id]=x,S.addEventListener("dispose",m));const M=y.program;i.updateUBOMapping(S,M);const E=e.render.frame;r[S.id]!==E&&(h(S),r[S.id]=E)}function u(S){const y=f();S.__bindingPointIndex=y;const x=t.createBuffer(),M=S.__size,E=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,M,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=s[S.id],x=S.uniforms,M=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){const L=x[E];if(d(L,E,M)===!0){const v=L.__offset,T=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let U=0;U<T.length;U++){const I=T[U],F=g(I);typeof I=="number"?(L.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,v+N,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,N),N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,v,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,y,x){const M=S.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const E=Array.isArray(M)?M:[M],w=[];for(let L=0;L<E.length;L++)w.push(E[L].clone());x[y]=w}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],w=Array.isArray(M)?M:[M];for(let L=0;L<E.length;L++){const v=E[L];if(v.equals(w[L])===!1)return v.copy(w[L]),!0}}return!1}function _(S){const y=S.uniforms;let x=0;const M=16;let E=0;for(let w=0,L=y.length;w<L;w++){const v=y[w],T={boundary:0,storage:0},N=Array.isArray(v.value)?v.value:[v.value];for(let U=0,I=N.length;U<I;U++){const F=N[U],B=g(F);T.boundary+=B.boundary,T.storage+=B.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=x,w>0){E=x%M;const U=M-E;E!==0&&U-T.boundary<0&&(x+=M-E,v.__offset=x)}x+=T.storage}return E=x%M,E>0&&(x+=M-E),S.__size=x,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}function LT(){const t=Ca("canvas");return t.style.display="block",t}class c0{constructor(e={}){const{canvas:n=LT(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let d=null,_=null;const g=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=pi,this.toneMappingExposure=1;const p=this;let S=!1,y=0,x=0,M=null,E=-1,w=null;const L=new Rt,v=new Rt;let T=null,N=n.width,U=n.height,I=1,F=null,B=null;const H=new Rt(0,0,N,U),G=new Rt(0,0,N,U);let W=!1;const oe=new Fu;let ee=!1,Se=!1,ce=null;const j=new Mt,se=new $,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return M===null?I:1}let A=i;function ue(C,X){for(let J=0;J<C.length;J++){const k=C[J],te=n.getContext(k,X);if(te!==null)return te}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Iu}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Ke,!1),A===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),A=ue(X,C),A===null)throw ue(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,he,Ce,P,D,V,ie,Q,ne,pe,re,le,ae,R,b,z,q,Z,fe,xe,ye,Y,Te,Ae;function Le(){Ee=new $S(A),he=new FS(A,Ee,e),Ee.init(he),Y=new bT(A,Ee,he),Ce=new ET(A,Ee,he),P=new WS(A),D=new cT,V=new ST(A,Ee,Ce,D,he,Y,P),ie=new BS(p),Q=new VS(p),ne=new iM(A,he),Te=new IS(A,Ee,ne,he),pe=new GS(A,ne,P,Te),re=new jS(A,pe,ne,P),fe=new YS(A,he,V),z=new OS(D),le=new aT(p,ie,Q,Ee,he,Te,z),ae=new CT(p,D),R=new uT,b=new gT(Ee,he),Z=new US(p,ie,Q,Ce,re,h,c),q=new MT(p,re,he),Ae=new PT(A,P,he,Ce),xe=new NS(A,Ee,P,he),ye=new kS(A,Ee,P,he),P.programs=le.programs,p.capabilities=he,p.extensions=Ee,p.properties=D,p.renderLists=R,p.shadowMap=q,p.state=Ce,p.info=P}Le();const we=new RT(p,A);this.xr=we,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(N,U,!1))},this.getSize=function(C){return C.set(N,U)},this.setSize=function(C,X,J=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,U=X,n.width=Math.floor(C*I),n.height=Math.floor(X*I),J===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(N*I,U*I).floor()},this.setDrawingBufferSize=function(C,X,J){N=C,U=X,I=J,n.width=Math.floor(C*J),n.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,X,J,k){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,X,J,k),Ce.viewport(L.copy(H).multiplyScalar(I).floor())},this.getScissor=function(C){return C.copy(G)},this.setScissor=function(C,X,J,k){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,X,J,k),Ce.scissor(v.copy(G).multiplyScalar(I).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){Ce.setScissorTest(W=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,X=!0,J=!0){let k=0;C&&(k|=A.COLOR_BUFFER_BIT),X&&(k|=A.DEPTH_BUFFER_BIT),J&&(k|=A.STENCIL_BUFFER_BIT),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Ke,!1),R.dispose(),b.dispose(),D.dispose(),ie.dispose(),Q.dispose(),re.dispose(),Te.dispose(),Ae.dispose(),le.dispose(),we.dispose(),we.removeEventListener("sessionstart",Pe),we.removeEventListener("sessionend",it),ce&&(ce.dispose(),ce=null),st.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=P.autoReset,X=q.enabled,J=q.autoUpdate,k=q.needsUpdate,te=q.type;Le(),P.autoReset=C,q.enabled=X,q.autoUpdate=J,q.needsUpdate=k,q.type=te}function Ke(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const X=C.target;X.removeEventListener("dispose",ht),O(X)}function O(C){K(C),D.remove(C)}function K(C){const X=D.get(C).programs;X!==void 0&&(X.forEach(function(J){le.releaseProgram(J)}),C.isShaderMaterial&&le.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,k,te,De){X===null&&(X=me);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Fe=S_(C,X,J,k,te);Ce.setMaterial(k,Ue);let He=J.index,ke=1;k.wireframe===!0&&(He=pe.getWireframeAttribute(J),ke=2);const We=J.drawRange,qe=J.attributes.position;let nt=We.start*ke,zt=(We.start+We.count)*ke;De!==null&&(nt=Math.max(nt,De.start*ke),zt=Math.min(zt,(De.start+De.count)*ke)),He!==null?(nt=Math.max(nt,0),zt=Math.min(zt,He.count)):qe!=null&&(nt=Math.max(nt,0),zt=Math.min(zt,qe.count));const Tn=zt-nt;if(Tn<0||Tn===1/0)return;Te.setup(te,k,Fe,J,He);let Gi,gt=xe;if(He!==null&&(Gi=ne.get(He),gt=ye,gt.setIndex(Gi)),te.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*ge()),gt.setMode(A.LINES)):gt.setMode(A.TRIANGLES);else if(te.isLine){let Ze=k.linewidth;Ze===void 0&&(Ze=1),Ce.setLineWidth(Ze*ge()),te.isLineSegments?gt.setMode(A.LINES):te.isLineLoop?gt.setMode(A.LINE_LOOP):gt.setMode(A.LINE_STRIP)}else te.isPoints?gt.setMode(A.POINTS):te.isSprite&&gt.setMode(A.TRIANGLES);if(te.isInstancedMesh)gt.renderInstances(nt,Tn,te.count);else if(J.isInstancedBufferGeometry){const Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,hc=Math.min(J.instanceCount,Ze);gt.renderInstances(nt,Tn,hc)}else gt.render(nt,Tn)},this.compile=function(C,X){function J(k,te,De){k.transparent===!0&&k.side===hi&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,vo(k,te,De),k.side=Oi,k.needsUpdate=!0,vo(k,te,De),k.side=hi):vo(k,te,De)}_=b.get(C),_.init(),m.push(_),C.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights(p.useLegacyLights),C.traverse(function(k){const te=k.material;if(te)if(Array.isArray(te))for(let De=0;De<te.length;De++){const Ue=te[De];J(Ue,C,k)}else J(te,C,k)}),m.pop(),_=null};let de=null;function be(C){de&&de(C)}function Pe(){st.stop()}function it(){st.start()}const st=new n0;st.setAnimationLoop(be),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(C){de=C,we.setAnimationLoop(C),C===null?st.stop():st.start()},we.addEventListener("sessionstart",Pe),we.addEventListener("sessionend",it),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,X,M),_=b.get(C,m.length),_.init(),m.push(_),j.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),oe.setFromProjectionMatrix(j),Se=this.localClippingEnabled,ee=z.init(this.clippingPlanes,Se),d=R.get(C,g.length),d.init(),g.push(d),It(C,X,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(F,B),ee===!0&&z.beginShadows();const J=_.state.shadowsArray;if(q.render(J,C,X),ee===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,C),_.setupLights(p.useLegacyLights),X.isArrayCamera){const k=X.cameras;for(let te=0,De=k.length;te<De;te++){const Ue=k[te];gi(d,C,Ue,Ue.viewport)}}else gi(d,C,X);M!==null&&(V.updateMultisampleRenderTarget(M),V.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(p,C,X),Te.resetDefaultState(),E=-1,w=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function It(C,X,J,k){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||oe.intersectsSprite(C)){k&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Ue=re.update(C),Fe=C.material;Fe.visible&&d.push(C,Ue,Fe,J,se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||oe.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==P.render.frame&&(C.skeleton.update(),C.skeleton.frame=P.render.frame);const Ue=re.update(C),Fe=C.material;if(k&&(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),se.copy(Ue.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(j)),Array.isArray(Fe)){const He=Ue.groups;for(let ke=0,We=He.length;ke<We;ke++){const qe=He[ke],nt=Fe[qe.materialIndex];nt&&nt.visible&&d.push(C,Ue,nt,J,se.z,qe)}}else Fe.visible&&d.push(C,Ue,Fe,J,se.z,null)}}const De=C.children;for(let Ue=0,Fe=De.length;Ue<Fe;Ue++)It(De[Ue],X,J,k)}function gi(C,X,J,k){const te=C.opaque,De=C.transmissive,Ue=C.transparent;_.setupLightsView(J),ee===!0&&z.setGlobalState(p.clippingPlanes,J),De.length>0&&dt(te,De,X,J),k&&Ce.viewport(L.copy(k)),te.length>0&&pn(te,X,J),De.length>0&&pn(De,X,J),Ue.length>0&&pn(Ue,X,J),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function dt(C,X,J,k){if(ce===null){const Fe=he.isWebGL2;ce=new vs(1024,1024,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ro:_s,minFilter:so,samples:Fe&&a===!0?4:0})}const te=p.getRenderTarget();p.setRenderTarget(ce),p.clear();const De=p.toneMapping;p.toneMapping=pi,pn(C,J,k),V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce);let Ue=!1;for(let Fe=0,He=X.length;Fe<He;Fe++){const ke=X[Fe],We=ke.object,qe=ke.geometry,nt=ke.material,zt=ke.group;if(nt.side===hi&&We.layers.test(k.layers)){const Tn=nt.side;nt.side=en,nt.needsUpdate=!0,Bn(We,J,k,qe,nt,zt),nt.side=Tn,nt.needsUpdate=!0,Ue=!0}}Ue===!0&&(V.updateMultisampleRenderTarget(ce),V.updateRenderTargetMipmap(ce)),p.setRenderTarget(te),p.toneMapping=De}function pn(C,X,J){const k=X.isScene===!0?X.overrideMaterial:null;for(let te=0,De=C.length;te<De;te++){const Ue=C[te],Fe=Ue.object,He=Ue.geometry,ke=k===null?Ue.material:k,We=Ue.group;Fe.layers.test(J.layers)&&Bn(Fe,X,J,He,ke,We)}}function Bn(C,X,J,k,te,De){C.onBeforeRender(p,X,J,k,te,De),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(p,X,J,k,C,De),te.transparent===!0&&te.side===hi&&te.forceSinglePass===!1?(te.side=en,te.needsUpdate=!0,p.renderBufferDirect(J,X,k,te,C,De),te.side=Oi,te.needsUpdate=!0,p.renderBufferDirect(J,X,k,te,C,De),te.side=hi):p.renderBufferDirect(J,X,k,te,C,De),C.onAfterRender(p,X,J,k,te,De)}function vo(C,X,J){X.isScene!==!0&&(X=me);const k=D.get(C),te=_.state.lights,De=_.state.shadowsArray,Ue=te.state.version,Fe=le.getParameters(C,te.state,De,X,J),He=le.getProgramCacheKey(Fe);let ke=k.programs;k.environment=C.isMeshStandardMaterial?X.environment:null,k.fog=X.fog,k.envMap=(C.isMeshStandardMaterial?Q:ie).get(C.envMap||k.environment),ke===void 0&&(C.addEventListener("dispose",ht),ke=new Map,k.programs=ke);let We=ke.get(He);if(We!==void 0){if(k.currentProgram===We&&k.lightsStateVersion===Ue)return af(C,Fe),We}else Fe.uniforms=le.getUniforms(C),C.onBuild(J,Fe,p),C.onBeforeCompile(Fe,p),We=le.acquireProgram(Fe,He),ke.set(He,We),k.uniforms=Fe.uniforms;const qe=k.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=z.uniform),af(C,Fe),k.needsLights=T_(C),k.lightsStateVersion=Ue,k.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix);const nt=We.getUniforms(),zt=va.seqWithValue(nt.seq,qe);return k.currentProgram=We,k.uniformsList=zt,We}function af(C,X){const J=D.get(C);J.outputColorSpace=X.outputColorSpace,J.instancing=X.instancing,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function S_(C,X,J,k,te){X.isScene!==!0&&(X=me),V.resetTextureUnits();const De=X.fog,Ue=k.isMeshStandardMaterial?X.environment:null,Fe=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Yn,He=(k.isMeshStandardMaterial?Q:ie).get(k.envMap||Ue),ke=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!k.normalMap&&!!J.attributes.tangent,qe=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,zt=!!J.morphAttributes.color,Tn=k.toneMapped?p.toneMapping:pi,Gi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,gt=Gi!==void 0?Gi.length:0,Ze=D.get(k),hc=_.state.lights;if(ee===!0&&(Se===!0||C!==w)){const tn=C===w&&k.id===E;z.setState(k,C,tn)}let Tt=!1;k.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==hc.state.version||Ze.outputColorSpace!==Fe||te.isInstancedMesh&&Ze.instancing===!1||!te.isInstancedMesh&&Ze.instancing===!0||te.isSkinnedMesh&&Ze.skinning===!1||!te.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==He||k.fog===!0&&Ze.fog!==De||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==z.numPlanes||Ze.numIntersection!==z.numIntersection)||Ze.vertexAlphas!==ke||Ze.vertexTangents!==We||Ze.morphTargets!==qe||Ze.morphNormals!==nt||Ze.morphColors!==zt||Ze.toneMapping!==Tn||he.isWebGL2===!0&&Ze.morphTargetsCount!==gt)&&(Tt=!0):(Tt=!0,Ze.__version=k.version);let ki=Ze.currentProgram;Tt===!0&&(ki=vo(k,X,te));let cf=!1,yr=!1,dc=!1;const Ht=ki.getUniforms(),Wi=Ze.uniforms;if(Ce.useProgram(ki.program)&&(cf=!0,yr=!0,dc=!0),k.id!==E&&(E=k.id,yr=!0),cf||w!==C){if(Ht.setValue(A,"projectionMatrix",C.projectionMatrix),he.logarithmicDepthBuffer&&Ht.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,yr=!0,dc=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const tn=Ht.map.cameraPosition;tn!==void 0&&tn.setValue(A,se.setFromMatrixPosition(C.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ht.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||te.isSkinnedMesh)&&Ht.setValue(A,"viewMatrix",C.matrixWorldInverse)}if(te.isSkinnedMesh){Ht.setOptional(A,te,"bindMatrix"),Ht.setOptional(A,te,"bindMatrixInverse");const tn=te.skeleton;tn&&(he.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ht.setValue(A,"boneTexture",tn.boneTexture,V),Ht.setValue(A,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pc=J.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0&&he.isWebGL2===!0)&&fe.update(te,J,ki),(yr||Ze.receiveShadow!==te.receiveShadow)&&(Ze.receiveShadow=te.receiveShadow,Ht.setValue(A,"receiveShadow",te.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wi.envMap.value=He,Wi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),yr&&(Ht.setValue(A,"toneMappingExposure",p.toneMappingExposure),Ze.needsLights&&b_(Wi,dc),De&&k.fog===!0&&ae.refreshFogUniforms(Wi,De),ae.refreshMaterialUniforms(Wi,k,I,U,ce),va.upload(A,Ze.uniformsList,Wi,V)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(va.upload(A,Ze.uniformsList,Wi,V),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ht.setValue(A,"center",te.center),Ht.setValue(A,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(A,"normalMatrix",te.normalMatrix),Ht.setValue(A,"modelMatrix",te.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const tn=k.uniformsGroups;for(let mc=0,w_=tn.length;mc<w_;mc++)if(he.isWebGL2){const lf=tn[mc];Ae.update(lf,ki),Ae.bind(lf,ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ki}function b_(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function T_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,X,J){D.get(C.texture).__webglTexture=X,D.get(C.depthTexture).__webglTexture=J;const k=D.get(C);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=J===void 0,k.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const J=D.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,J=0){M=C,y=X,x=J;let k=!0,te=null,De=!1,Ue=!1;if(C){const He=D.get(C);He.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(A.FRAMEBUFFER,null),k=!1):He.__webglFramebuffer===void 0?V.setupRenderTarget(C):He.__hasExternalTextures&&V.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);const We=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(te=We[X],De=!0):he.isWebGL2&&C.samples>0&&V.useMultisampledRTT(C)===!1?te=D.get(C).__webglMultisampledFramebuffer:te=We,L.copy(C.viewport),v.copy(C.scissor),T=C.scissorTest}else L.copy(H).multiplyScalar(I).floor(),v.copy(G).multiplyScalar(I).floor(),T=W;if(Ce.bindFramebuffer(A.FRAMEBUFFER,te)&&he.drawBuffers&&k&&Ce.drawBuffers(C,te),Ce.viewport(L),Ce.scissor(v),Ce.setScissorTest(T),De){const He=D.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,J)}else if(Ue){const He=D.get(C.texture),ke=X||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,He.__webglTexture,J||0,ke)}E=-1},this.readRenderTargetPixels=function(C,X,J,k,te,De,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Ce.bindFramebuffer(A.FRAMEBUFFER,Fe);try{const He=C.texture,ke=He.format,We=He.type;if(ke!==Un&&Y.convert(ke)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===ro&&(Ee.has("EXT_color_buffer_half_float")||he.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(We!==_s&&Y.convert(We)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===fs&&(he.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-k&&J>=0&&J<=C.height-te&&A.readPixels(X,J,k,te,Y.convert(ke),Y.convert(We),De)}finally{const He=M!==null?D.get(M).__webglFramebuffer:null;Ce.bindFramebuffer(A.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(C,X,J=0){const k=Math.pow(2,-J),te=Math.floor(X.image.width*k),De=Math.floor(X.image.height*k);V.setTexture2D(X,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,C.x,C.y,te,De),Ce.unbindTexture()},this.copyTextureToTexture=function(C,X,J,k=0){const te=X.image.width,De=X.image.height,Ue=Y.convert(J.format),Fe=Y.convert(J.type);V.setTexture2D(J,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,J.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,k,C.x,C.y,te,De,Ue,Fe,X.image.data):X.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,k,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ue,X.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,k,C.x,C.y,Ue,Fe,X.image),k===0&&J.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J,k,te=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=C.max.x-C.min.x+1,Ue=C.max.y-C.min.y+1,Fe=C.max.z-C.min.z+1,He=Y.convert(k.format),ke=Y.convert(k.type);let We;if(k.isData3DTexture)V.setTexture3D(k,0),We=A.TEXTURE_3D;else if(k.isDataArrayTexture)V.setTexture2DArray(k,0),We=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const qe=A.getParameter(A.UNPACK_ROW_LENGTH),nt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),zt=A.getParameter(A.UNPACK_SKIP_PIXELS),Tn=A.getParameter(A.UNPACK_SKIP_ROWS),Gi=A.getParameter(A.UNPACK_SKIP_IMAGES),gt=J.isCompressedTexture?J.mipmaps[0]:J.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,gt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,gt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,C.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,C.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?A.texSubImage3D(We,te,X.x,X.y,X.z,De,Ue,Fe,He,ke,gt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(We,te,X.x,X.y,X.z,De,Ue,Fe,He,gt.data)):A.texSubImage3D(We,te,X.x,X.y,X.z,De,Ue,Fe,He,ke,gt),A.pixelStorei(A.UNPACK_ROW_LENGTH,qe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,nt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,zt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Tn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Gi),te===0&&k.generateMipmaps&&A.generateMipmap(We),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?V.setTextureCube(C,0):C.isData3DTexture?V.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?V.setTexture2DArray(C,0):V.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,Ce.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?ms:zg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ms?ze:Yn}}class DT extends c0{}DT.prototype.isWebGL1Renderer=!0;class UT extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class cu extends mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ld=new $,ud=new $,fd=new Mt,rl=new qg,Wo=new qa;class IT extends Ct{constructor(e=new On,n=new cu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)ld.fromBufferAttribute(n,s-1),ud.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=ld.distanceTo(ud);e.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;fd.copy(s).invert(),rl.copy(e.ray).applyMatrix4(fd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new $,u=new $,f=new $,h=new $,d=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const p=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let y=p,x=S-1;y<x;y+=d){const M=_.getX(y),E=_.getX(y+1);if(l.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),rl.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||n.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let y=p,x=S-1;y<x;y+=d){if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),rl.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||n.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const hd=new $,dd=new $;class pd extends IT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)hd.fromBufferAttribute(n,s),dd.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hd.distanceTo(dd);e.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Xo=new $,qo=new $,ol=new $,Yo=new vn;class md extends On{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const s=Math.pow(10,4),r=Math.cos(ir*n),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=Yo;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Yo.getNormal(ol),f[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const y=(S+1)%3,x=f[S],M=f[y],E=Yo[u[S]],w=Yo[u[y]],L=`${x}_${M}`,v=`${M}_${x}`;v in h&&h[v]?(ol.dot(h[v].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(w.x,w.y,w.z)),h[v]=null):L in h||(h[L]={index0:l[S],index1:l[y],normal:ol.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:m}=h[_];Xo.fromBufferAttribute(a,g),qo.fromBufferAttribute(a,m),d.push(Xo.x,Xo.y,Xo.z),d.push(qo.x,qo.y,qo.z)}this.setAttribute("position",new Mn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class NT extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hg,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const gd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class FT{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const OT=new FT;class l0{constructor(e){this.manager=e!==void 0?e:OT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ii={};class BT extends Error{constructor(e,n){super(e),this.response=n}}class zT extends l0{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gd.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:n,onProgress:i,onError:s});return}ii[e]=[],ii[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ii[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){f.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,w=u.length;E<w;E++){const L=u[E];L.onProgress&&L.onProgress(M)}p.enqueue(x),S()}})}}});return new Response(m)}else throw new BT(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{gd.add(e,l);const u=ii[e];delete ii[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ii[e];if(u===void 0)throw this.manager.itemError(e),l;delete ii[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zu extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class HT extends zu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const al=new Mt,_d=new $,vd=new $;class VT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fu,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),n.position.copy(_d),vd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(vd),n.updateMatrixWorld(),al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $T extends VT{constructor(){super(new i0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xd extends zu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new $T}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class GT extends zu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);class yd extends l0{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new zT(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e){function n(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(i(_,u,g))return!1;return!0}function i(l,u,f){for(let h=0,d=l.length;h<d;h++)if(l[h]!==u.getUint8(f+h))return!1;return!0}function s(l){const u=new DataView(l),f=u.getUint32(80,!0);let h,d,_,g=!1,m,p,S,y,x;for(let T=0;T<70;T++)u.getUint32(T,!1)==1129270351&&u.getUint8(T+4)==82&&u.getUint8(T+5)==61&&(g=!0,m=new Float32Array(f*3*3),p=u.getUint8(T+6)/255,S=u.getUint8(T+7)/255,y=u.getUint8(T+8)/255,x=u.getUint8(T+9)/255);const M=84,E=12*4+2,w=new On,L=new Float32Array(f*3*3),v=new Float32Array(f*3*3);for(let T=0;T<f;T++){const N=M+T*E,U=u.getFloat32(N,!0),I=u.getFloat32(N+4,!0),F=u.getFloat32(N+8,!0);if(g){const B=u.getUint16(N+48,!0);B&32768?(h=p,d=S,_=y):(h=(B&31)/31,d=(B>>5&31)/31,_=(B>>10&31)/31)}for(let B=1;B<=3;B++){const H=N+B*12,G=T*3*3+(B-1)*3;L[G]=u.getFloat32(H,!0),L[G+1]=u.getFloat32(H+4,!0),L[G+2]=u.getFloat32(H+8,!0),v[G]=U,v[G+1]=I,v[G+2]=F,g&&(m[G]=h,m[G+1]=d,m[G+2]=_)}}return w.setAttribute("position",new dn(L,3)),w.setAttribute("normal",new dn(v,3)),g&&(w.setAttribute("color",new dn(m,3)),w.hasColors=!0,w.alpha=x),w}function r(l){const u=new On,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let d=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),p=[],S=[],y=new $;let x,M=0,E=0,w=0;for(;(x=f.exec(l))!==null;){E=w;const L=x[0];for(;(x=h.exec(L))!==null;){let N=0,U=0;const I=x[0];for(;(x=m.exec(I))!==null;)y.x=parseFloat(x[1]),y.y=parseFloat(x[2]),y.z=parseFloat(x[3]),U++;for(;(x=g.exec(I))!==null;)p.push(parseFloat(x[1]),parseFloat(x[2]),parseFloat(x[3])),S.push(y.x,y.y,y.z),N++,w++;U!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),N!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const v=E,T=w-E;u.addGroup(v,T,M),M++}return u.setAttribute("position",new Mn(p,3)),u.setAttribute("normal",new Mn(S,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=a(e);return n(c)?s(c):r(o(e))}}const cl={type:"change"},ll={type:"start"},ul={type:"end"};class kT extends ys{constructor(e,n){super();const i=this,s={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Pc.ROTATE,MIDDLE:Pc.DOLLY,RIGHT:Pc.PAN},this.target=new $;const r=1e-6,o=new $;let a=1,c=s.NONE,l=s.NONE,u=0,f=0,h=0;const d=new $,_=new $e,g=new $e,m=new $,p=new $e,S=new $e,y=new $e,x=new $e,M=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const A=i.domElement.getBoundingClientRect(),ue=i.domElement.ownerDocument.documentElement;i.screen.left=A.left+window.pageXOffset-ue.clientLeft,i.screen.top=A.top+window.pageYOffset-ue.clientTop,i.screen.width=A.width,i.screen.height=A.height};const w=function(){const A=new $e;return function(Ee,he){return A.set((Ee-i.screen.left)/i.screen.width,(he-i.screen.top)/i.screen.height),A}}(),L=function(){const A=new $e;return function(Ee,he){return A.set((Ee-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-he))/i.screen.width),A}}();this.rotateCamera=function(){const A=new $,ue=new pr,Ee=new $,he=new $,Ce=new $,P=new $;return function(){P.set(g.x-_.x,g.y-_.y,0);let V=P.length();V?(d.copy(i.object.position).sub(i.target),Ee.copy(d).normalize(),he.copy(i.object.up).normalize(),Ce.crossVectors(he,Ee).normalize(),he.setLength(g.y-_.y),Ce.setLength(g.x-_.x),P.copy(he.add(Ce)),A.crossVectors(P,d).normalize(),V*=i.rotateSpeed,ue.setFromAxisAngle(A,V),d.applyQuaternion(ue),i.object.up.applyQuaternion(ue),m.copy(A),h=V):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),d.copy(i.object.position).sub(i.target),ue.setFromAxisAngle(m,h),d.applyQuaternion(ue),i.object.up.applyQuaternion(ue)),_.copy(g)}}(),this.zoomCamera=function(){let A;c===s.TOUCH_ZOOM_PAN?(A=u/f,u=f,i.object.isPerspectiveCamera?d.multiplyScalar(A):i.object.isOrthographicCamera?(i.object.zoom=Th.clamp(i.object.zoom/A,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(A=1+(S.y-p.y)*i.zoomSpeed,A!==1&&A>0&&(i.object.isPerspectiveCamera?d.multiplyScalar(A):i.object.isOrthographicCamera?(i.object.zoom=Th.clamp(i.object.zoom/A,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?p.copy(S):p.y+=(S.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){const A=new $e,ue=new $,Ee=new $;return function(){if(A.copy(x).sub(y),A.lengthSq()){if(i.object.isOrthographicCamera){const Ce=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,P=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;A.x*=Ce,A.y*=P}A.multiplyScalar(d.length()*i.panSpeed),Ee.copy(d).cross(i.object.up).setLength(A.x),Ee.add(ue.copy(i.object.up).setLength(A.y)),i.object.position.add(Ee),i.target.add(Ee),i.staticMoving?y.copy(x):y.add(A.subVectors(x,y).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(d.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,d.setLength(i.maxDistance)),p.copy(S)),d.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,d.setLength(i.minDistance)),p.copy(S)))},this.update=function(){d.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,d),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>r&&(i.dispatchEvent(cl),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>r||a!==i.object.zoom)&&(i.dispatchEvent(cl),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=s.NONE,l=s.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),d.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(cl),o.copy(i.object.position),a=i.object.zoom};function v(A){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",N)),j(A),A.pointerType==="touch"?oe(A):B(A))}function T(A){i.enabled!==!1&&(A.pointerType==="touch"?ee(A):H(A))}function N(A){i.enabled!==!1&&(A.pointerType==="touch"?Se(A):G(),se(A),M.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",N)))}function U(A){se(A)}function I(A){i.enabled!==!1&&(window.removeEventListener("keydown",I),l===s.NONE&&(A.code===i.keys[s.ROTATE]&&!i.noRotate?l=s.ROTATE:A.code===i.keys[s.ZOOM]&&!i.noZoom?l=s.ZOOM:A.code===i.keys[s.PAN]&&!i.noPan&&(l=s.PAN)))}function F(){i.enabled!==!1&&(l=s.NONE,window.addEventListener("keydown",I))}function B(A){if(c===s.NONE)switch(A.button){case i.mouseButtons.LEFT:c=s.ROTATE;break;case i.mouseButtons.MIDDLE:c=s.ZOOM;break;case i.mouseButtons.RIGHT:c=s.PAN;break}const ue=l!==s.NONE?l:c;ue===s.ROTATE&&!i.noRotate?(g.copy(L(A.pageX,A.pageY)),_.copy(g)):ue===s.ZOOM&&!i.noZoom?(p.copy(w(A.pageX,A.pageY)),S.copy(p)):ue===s.PAN&&!i.noPan&&(y.copy(w(A.pageX,A.pageY)),x.copy(y)),i.dispatchEvent(ll)}function H(A){const ue=l!==s.NONE?l:c;ue===s.ROTATE&&!i.noRotate?(_.copy(g),g.copy(L(A.pageX,A.pageY))):ue===s.ZOOM&&!i.noZoom?S.copy(w(A.pageX,A.pageY)):ue===s.PAN&&!i.noPan&&x.copy(w(A.pageX,A.pageY))}function G(){c=s.NONE,i.dispatchEvent(ul)}function W(A){if(i.enabled!==!1&&i.noZoom!==!0){switch(A.preventDefault(),A.deltaMode){case 2:p.y-=A.deltaY*.025;break;case 1:p.y-=A.deltaY*.01;break;default:p.y-=A.deltaY*25e-5;break}i.dispatchEvent(ll),i.dispatchEvent(ul)}}function oe(A){switch(me(A),M.length){case 1:c=s.TOUCH_ROTATE,g.copy(L(M[0].pageX,M[0].pageY)),_.copy(g);break;default:c=s.TOUCH_ZOOM_PAN;const ue=M[0].pageX-M[1].pageX,Ee=M[0].pageY-M[1].pageY;f=u=Math.sqrt(ue*ue+Ee*Ee);const he=(M[0].pageX+M[1].pageX)/2,Ce=(M[0].pageY+M[1].pageY)/2;y.copy(w(he,Ce)),x.copy(y);break}i.dispatchEvent(ll)}function ee(A){switch(me(A),M.length){case 1:_.copy(g),g.copy(L(A.pageX,A.pageY));break;default:const ue=ge(A),Ee=A.pageX-ue.x,he=A.pageY-ue.y;f=Math.sqrt(Ee*Ee+he*he);const Ce=(A.pageX+ue.x)/2,P=(A.pageY+ue.y)/2;x.copy(w(Ce,P));break}}function Se(A){switch(M.length){case 0:c=s.NONE;break;case 1:c=s.TOUCH_ROTATE,g.copy(L(A.pageX,A.pageY)),_.copy(g);break;case 2:c=s.TOUCH_ZOOM_PAN;for(let ue=0;ue<M.length;ue++)if(M[ue].pointerId!==A.pointerId){const Ee=E[M[ue].pointerId];g.copy(L(Ee.x,Ee.y)),_.copy(g);break}break}i.dispatchEvent(ul)}function ce(A){i.enabled!==!1&&A.preventDefault()}function j(A){M.push(A)}function se(A){delete E[A.pointerId];for(let ue=0;ue<M.length;ue++)if(M[ue].pointerId==A.pointerId){M.splice(ue,1);return}}function me(A){let ue=E[A.pointerId];ue===void 0&&(ue=new $e,E[A.pointerId]=ue),ue.set(A.pageX,A.pageY)}function ge(A){const ue=A.pointerId===M[0].pointerId?M[1]:M[0];return E[ue.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",ce),i.domElement.removeEventListener("pointerdown",v),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",W),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",N),window.removeEventListener("keydown",I),window.removeEventListener("keyup",F)},this.domElement.addEventListener("contextmenu",ce),this.domElement.addEventListener("pointerdown",v),this.domElement.addEventListener("pointercancel",U),this.domElement.addEventListener("wheel",W,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",F),this.handleResize(),this.update()}}function WT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const XT=1e-5,qT=1e-13,YT=Math.PI*2;var Ye={EPS:XT,NEPS:qT,TAU:YT};const jT=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);var ZT=jT;const KT=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);var JT=KT;const QT=t=>Math.atan2(t[1],t[0]);var Hu=QT,ew=Hu;const tw=Hu,nw=t=>tw(t)*57.29577951308232;var iw=nw;const sw=()=>[0,0];var Za=sw;const rw=Za,ow=t=>{const e=rw();return e[0]=t[0],e[1]=t[1],e};var aw=ow;const cw=(t,e)=>(t[0]=e[0],t[1]=e[1],t);var lw=cw;const uw=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);var fw=uw;const hw=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};var dw=hw;const pw=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);var mw=pw;const gw=(t,e)=>t[0]*e[0]+t[1]*e[1];var _w=gw;const vw=(t,e)=>t[0]===e[0]&&t[1]===e[1];var xw=vw;const{NEPS:yw}=Ye,u0=t=>Math.abs(t)<yw?0:t,Mw=t=>u0(Math.sin(t)),Ew=t=>u0(Math.cos(t));var Ut={sin:Mw,cos:Ew};const{sin:Sw,cos:bw}=Ut,Tw=(t,e)=>(t[0]=bw(e),t[1]=Sw(e),t);var f0=Tw;const ww=f0,Aw=(t,e)=>ww(t,e*.017453292519943295);var Rw=Aw;const Cw=(t,e)=>(t[0]=e,t[1]=e,t);var Pw=Cw;const Lw=Za,Dw=(t,e)=>{const n=Lw();return n[0]=t,n[1]=e,n};var Uw=Dw;const Iw=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);var Nw=Iw;const Fw=(t,e,n,i)=>{const s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};var Ow=Fw;const Bw=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);var zw=Bw;const Hw=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);var Vw=Hw;const $w=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);var Gw=$w;const kw=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);var Ww=kw;const Xw=(t,e,n,i)=>{const s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};var h0=Xw;const{TAU:qw}=Ye,Yw=Za,jw=h0,Zw=(t,e)=>jw(t,e,Yw(),qw/4);var Kw=Zw;const Jw=(t,e)=>{const n=e[0],i=e[1];let s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};var Qw=Jw;const eA=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);var tA=eA;const nA=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);var iA=nA;const sA=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};var rA=sA;const oA=t=>{const e=t[0],n=t[1];return e*e+n*n};var aA=oA;const cA=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);var lA=cA;const uA=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;var fA=uA;const hA=(t,e,n)=>{const i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};var dA=hA,Ge={abs:ZT,add:JT,angle:ew,angleDegrees:iw,angleRadians:Hu,clone:aw,copy:lw,create:Za,cross:fw,distance:dw,divide:mw,dot:_w,equals:xw,fromAngleDegrees:Rw,fromAngleRadians:f0,fromScalar:Pw,fromValues:Uw,length:Nw,lerp:Ow,max:zw,min:Vw,multiply:Gw,negate:Ww,normal:Kw,normalize:Qw,rotate:h0,scale:tA,snap:iA,squaredDistance:rA,squaredLength:aA,subtract:lA,toString:fA,transform:dA};const pA=t=>Object.assign({},t);var Vu=pA;const{EPS:Md}=Ye,mA=Ge,gA=Vu,_A=t=>{if(t.isClosed)return t;const e=gA(t);if(e.isClosed=!0,e.points.length>1){const n=e.points,i=n[0];let s=n[n.length-1];for(;mA.distance(i,s)<Md*Md&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};var d0=_A;const vA=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);var xA=vA;const yA=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var $u=yA;const MA=$u,EA=t=>{const e=MA();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};var SA=EA;const bA=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);var p0=bA;const TA=(t,e)=>{const n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=n*a-i*o,y=n*c-s*o,x=n*l-r*o,M=i*c-s*a,E=i*l-r*a,w=s*l-r*c,L=u*g-f*_,v=u*m-h*_,T=u*p-d*_,N=f*m-h*g,U=f*p-d*g,I=h*p-d*m;let F=S*I-y*U+x*N+M*T-E*v+w*L;return F?(F=1/F,t[0]=(a*I-c*U+l*N)*F,t[1]=(s*U-i*I-r*N)*F,t[2]=(g*w-m*E+p*M)*F,t[3]=(h*E-f*w-d*M)*F,t[4]=(c*T-o*I-l*v)*F,t[5]=(n*I-s*T+r*v)*F,t[6]=(m*x-_*w-p*y)*F,t[7]=(u*w-h*x+d*y)*F,t[8]=(o*U-a*T+l*L)*F,t[9]=(i*T-n*U-r*L)*F,t[10]=(_*E-g*x+p*S)*F,t[11]=(f*x-u*E-d*S)*F,t[12]=(a*v-o*N-c*L)*F,t[13]=(n*N-i*v+s*L)*F,t[14]=(g*y-_*M-m*S)*F,t[15]=(u*M-f*y+h*S)*F,t):null};var wA=TA;const AA=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];var RA=AA;const CA=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var m0=CA;const{EPS:PA}=Ye,{sin:LA,cos:DA}=Ut,UA=m0,IA=(t,e,n)=>{let[i,s,r]=n;const o=i*i+s*s+r*r;if(Math.abs(o)<PA)return UA(t);const a=1/Math.sqrt(o);i*=a,s*=a,r*=a;const c=LA(e),l=DA(e),u=1-l;return t[0]=i*i*u+l,t[1]=s*i*u+r*c,t[2]=r*i*u-s*c,t[3]=0,t[4]=i*s*u-r*c,t[5]=s*s*u+l,t[6]=r*s*u+i*c,t[7]=0,t[8]=i*r*u+s*c,t[9]=s*r*u-i*c,t[10]=r*r*u+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var g0=IA;const NA=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);var FA=NA;const{sin:fl,cos:hl}=Ut,OA=(t,e,n,i)=>{const s=fl(e),r=hl(e),o=fl(n),a=hl(n),c=fl(i),l=hl(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=c*o*r-l*s,t[5]=l*r+c*o*s,t[6]=c*a,t[7]=0,t[8]=c*s+l*o*r,t[9]=l*o*s-c*r,t[10]=l*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var BA=OA;const zA=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);var HA=zA;const VA=$u,$A=(t,e,n,i,s,r,o,a,c,l,u,f,h,d,_,g)=>{const m=VA();return m[0]=t,m[1]=e,m[2]=n,m[3]=i,m[4]=s,m[5]=r,m[6]=o,m[7]=a,m[8]=c,m[9]=l,m[10]=u,m[11]=f,m[12]=h,m[13]=d,m[14]=_,m[15]=g,m};var GA=$A;const kA=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);var _0=kA;const WA=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);var v0=WA;const XA=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];var Ka=XA;const qA=Ka,YA=(t,e)=>{const n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],c=Math.sqrt(n*n+i*i+s*s),l=Math.sqrt(r*r+o*o+a*a),u=c*l,f=u&&qA(t,e)/u;return Math.acos(Math.min(Math.max(f,-1),1))};var jA=YA;const ZA=()=>[0,0,0];var Ja=ZA;const KA=Ja,JA=t=>{const e=KA();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var QA=JA;const e2=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var x0=e2;const t2=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],c=n[2];return t[0]=s*c-r*a,t[1]=r*o-i*c,t[2]=i*a-s*o,t};var mo=t2;const n2=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};var y0=n2;const i2=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);var s2=i2;const r2=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var o2=r2;const a2=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);var c2=a2;const l2=Ja,u2=(t,e,n)=>{const i=l2();return i[0]=t,i[1]=e,i[2]=n,i};var f2=u2;const h2=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);var d2=h2;const p2=t=>{const e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};var M0=p2;const m2=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);var g2=m2;const _2=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);var v2=_2;const x2=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);var y2=x2;const M2=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);var E2=M2;const S2=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);var b2=S2;const T2=(t,e)=>{const n=e[0],i=e[1],s=e[2];let r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};var Gu=T2;const w2=_0,A2=Ja,R2=mo,C2=(t,e)=>{const n=w2(A2(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return R2(t,e,[i,s,r])};var P2=C2;const L2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var D2=L2;const U2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};var I2=U2;const N2=(t,e,n,i)=>{const s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};var F2=N2;const O2=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);var E0=O2;const B2=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);var z2=B2;const H2=(t,e)=>{const n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};var S0=H2;const V2=t=>{const e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};var b0=V2;const $2=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);var Qa=$2;const G2=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;var k2=G2;const W2=(t,e,n)=>{const i=e[0],s=e[1],r=e[2];let o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};var X2=W2,Be={abs:_0,add:v0,angle:jA,clone:QA,copy:x0,create:Ja,cross:mo,distance:y0,divide:s2,dot:Ka,equals:o2,fromScalar:c2,fromValues:f2,fromVec2:d2,length:M0,lerp:g2,max:v2,min:y2,multiply:E2,negate:b2,normalize:Gu,orthogonal:P2,rotateX:D2,rotateY:I2,rotateZ:F2,scale:E0,snap:z2,squaredDistance:S0,squaredLength:b0,subtract:Qa,toString:k2,transform:X2};const Ei=Be,q2=g0,Y2=(t,e,n)=>{const i=Ei.normalize(Ei.create(),e),s=Ei.normalize(Ei.create(),n),r=Ei.cross(Ei.create(),s,i),o=Ei.dot(s,i);if(o===-1)return q2(t,Math.PI,Ei.orthogonal(r,i));const a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var j2=Y2;const{sin:Z2,cos:K2}=Ut,J2=(t,e)=>{const n=Z2(e),i=K2(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var Q2=J2;const{sin:eR,cos:tR}=Ut,nR=(t,e)=>{const n=eR(e),i=tR(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var iR=nR;const{sin:sR,cos:rR}=Ut,oR=(t,e)=>{const n=sR(e),i=rR(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};var aR=oR;const cR=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;var lR=cR;const uR=t=>si(t[1])&&si(t[2])&&si(t[3])&&si(t[4])&&si(t[6])&&si(t[7])&&si(t[8])&&si(t[9])&&si(t[11])&&t[15]===1,si=t=>Math.abs(t)<Number.EPSILON;var fR=uR;const hR=t=>{const e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};var dR=hR;const pR=(t,e)=>{const[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};var mR=pR;const gR=(t,e,n)=>{const i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],_=e[11],g=e[12],m=e[13],p=e[14],S=e[15];let y=n[0],x=n[1],M=n[2],E=n[3];return t[0]=y*i+x*a+M*f+E*g,t[1]=y*s+x*c+M*h+E*m,t[2]=y*r+x*l+M*d+E*p,t[3]=y*o+x*u+M*_+E*S,y=n[4],x=n[5],M=n[6],E=n[7],t[4]=y*i+x*a+M*f+E*g,t[5]=y*s+x*c+M*h+E*m,t[6]=y*r+x*l+M*d+E*p,t[7]=y*o+x*u+M*_+E*S,y=n[8],x=n[9],M=n[10],E=n[11],t[8]=y*i+x*a+M*f+E*g,t[9]=y*s+x*c+M*h+E*m,t[10]=y*r+x*l+M*d+E*p,t[11]=y*o+x*u+M*_+E*S,y=n[12],x=n[13],M=n[14],E=n[15],t[12]=y*i+x*a+M*f+E*g,t[13]=y*s+x*c+M*h+E*m,t[14]=y*r+x*l+M*d+E*p,t[15]=y*o+x*u+M*_+E*S,t};var _R=gR;const{EPS:vR}=Ye,{sin:xR,cos:yR}=Ut,MR=p0,ER=(t,e,n,i)=>{let[s,r,o]=i;const a=s*s+r*r+o*o;if(Math.abs(a)<vR)return MR(t,e);const c=1/Math.sqrt(a);s*=c,r*=c,o*=c;const l=xR(n),u=yR(n),f=1-u,h=e[0],d=e[1],_=e[2],g=e[3],m=e[4],p=e[5],S=e[6],y=e[7],x=e[8],M=e[9],E=e[10],w=e[11],L=s*s*f+u,v=r*s*f+o*l,T=o*s*f-r*l,N=s*r*f-o*l,U=r*r*f+u,I=o*r*f+s*l,F=s*o*f+r*l,B=r*o*f-s*l,H=o*o*f+u;return t[0]=h*L+m*v+x*T,t[1]=d*L+p*v+M*T,t[2]=_*L+S*v+E*T,t[3]=g*L+y*v+w*T,t[4]=h*N+m*U+x*I,t[5]=d*N+p*U+M*I,t[6]=_*N+S*U+E*I,t[7]=g*N+y*U+w*I,t[8]=h*F+m*B+x*H,t[9]=d*F+p*B+M*H,t[10]=_*F+S*B+E*H,t[11]=g*F+y*B+w*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};var SR=ER;const{sin:bR,cos:TR}=Ut,wR=(t,e,n)=>{const i=bR(n),s=TR(n),r=e[4],o=e[5],a=e[6],c=e[7],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+l*i,t[5]=o*s+u*i,t[6]=a*s+f*i,t[7]=c*s+h*i,t[8]=l*s-r*i,t[9]=u*s-o*i,t[10]=f*s-a*i,t[11]=h*s-c*i,t};var AR=wR;const{sin:RR,cos:CR}=Ut,PR=(t,e,n)=>{const i=RR(n),s=CR(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-l*i,t[1]=o*s-u*i,t[2]=a*s-f*i,t[3]=c*s-h*i,t[8]=r*i+l*s,t[9]=o*i+u*s,t[10]=a*i+f*s,t[11]=c*i+h*s,t};var LR=PR;const{sin:DR,cos:UR}=Ut,IR=(t,e,n)=>{const i=DR(n),s=UR(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[4],u=e[5],f=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+l*i,t[1]=o*s+u*i,t[2]=a*s+f*i,t[3]=c*s+h*i,t[4]=l*s-r*i,t[5]=u*s-o*i,t[6]=f*s-a*i,t[7]=h*s-c*i,t};var NR=IR;const FR=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};var OR=FR;const BR=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);var zR=BR;const HR=t=>t.map(e=>e.toFixed(7)).toString();var VR=HR;const $R=(t,e,n)=>{const i=n[0],s=n[1],r=n[2];let o,a,c,l,u,f,h,d,_,g,m,p;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],c=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],_=e[8],g=e[9],m=e[10],p=e[11],t[0]=o,t[1]=a,t[2]=c,t[3]=l,t[4]=u,t[5]=f,t[6]=h,t[7]=d,t[8]=_,t[9]=g,t[10]=m,t[11]=p,t[12]=o*i+u*s+_*r+e[12],t[13]=a*i+f*s+g*r+e[13],t[14]=c*i+h*s+m*r+e[14],t[15]=l*i+d*s+p*r+e[15]),t};var GR=$R,ft={add:xA,clone:SA,copy:p0,create:$u,invert:wA,equals:RA,fromRotation:g0,fromScaling:FA,fromTaitBryanRotation:BA,fromTranslation:HA,fromValues:GA,fromVectorRotation:j2,fromXRotation:Q2,fromYRotation:iR,fromZRotation:aR,identity:m0,isIdentity:lR,isOnlyTransformScale:fR,isMirroring:dR,mirrorByPlane:mR,multiply:_R,rotate:SR,rotateX:AR,rotateY:LR,rotateZ:NR,scale:OR,subtract:zR,toString:VR,translate:GR};const kR=ft,WR=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:kR.create()});var ec=WR;const{EPS:Ed}=Ye,Sd=Ge,XR=d0,qR=ec,YR=(t,e)=>{const n={closed:!1};let{closed:i}=Object.assign({},n,t),s=qR();if(s.points=e.map(r=>Sd.clone(r)),s.points.length>1){const r=s.points[0],o=s.points[s.points.length-1];Sd.distance(r,o)<Ed*Ed&&(i=!0)}return i===!0&&(s=XR(s)),s};var ku=YR;const bd=ft,Td=Ge,jR=t=>(bd.isIdentity(t.transforms)||(t.points=t.points.map(e=>Td.transform(Td.create(),e,t.transforms)),t.transforms=bd.create()),t);var ZR=jR;const KR=ZR,JR=t=>KR(t).points;var _r=JR;const{TAU:jo}=Ye,vt=Ge,QR=ku,eC=_r,tC=(t,e)=>{const n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16};let{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:c}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=vt.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(c<4)throw new Error("segments must be four or more");const l=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");const u=eC(e);if(u.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let f=s[0],h=s[1];const d=u[u.length-1];f=Math.round(f*l)/l,h=Math.round(h*l)/l,i=vt.fromValues(Math.round(i[0]*l)/l,Math.round(i[1]*l)/l);const _=!o;let g=[];if(f===0||h===0)g.push(i);else{f=Math.abs(f),h=Math.abs(h);const p=r,S=Math.cos(p),y=Math.sin(p),x=vt.subtract(vt.create(),d,i);vt.scale(x,x,.5);const M=Math.round((S*x[0]+y*x[1])*l)/l,E=Math.round((-y*x[0]+S*x[1])*l)/l,w=vt.fromValues(M,E),L=w[0]*w[0]/(f*f)+w[1]*w[1]/(h*h);if(L>1){const W=Math.sqrt(L);f*=W,h*=W,f=Math.round(f*l)/l,h=Math.round(h*l)/l}let v=Math.sqrt((f*f*h*h-f*f*w[1]*w[1]-h*h*w[0]*w[0])/(f*f*w[1]*w[1]+h*h*w[0]*w[0]));_===a&&(v=-v);const T=vt.fromValues(f*w[1]/h,-h*w[0]/f);vt.scale(T,T,v);let N=vt.fromValues(S*T[0]-y*T[1],y*T[0]+S*T[1]);N=vt.add(N,N,vt.scale(vt.create(),vt.add(vt.create(),d,i),.5));const U=vt.fromValues((w[0]-T[0])/f,(w[1]-T[1])/h),I=vt.fromValues((-w[0]-T[0])/f,(-w[1]-T[1])/h),F=vt.angleRadians(U);let H=vt.angleRadians(I)-F;H=H%jo,!_&&H>0?H-=jo:_&&H<0&&(H+=jo);let G=Math.ceil(Math.abs(H)/jo*c)+1;G<1&&(G=1);for(let W=1;W<G;W++){const oe=F+W/G*H,ee=Math.cos(oe),Se=Math.sin(oe),ce=vt.fromValues(S*f*ee-y*h*Se,y*f*ee+S*h*Se);vt.add(ce,ce,N),g.push(ce)}G&&g.push(t.endpoint)}return g=u.concat(g),QR({},g)};var nC=tC;const iC=ku,sC=_r,{equals:rC}=Ge,oC=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{const r=sC(i).slice();if(n.length>0&&r.length>0&&rC(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),iC({closed:e},n)};var T0=oC;const aC=T0,cC=ec,lC=(t,e)=>aC(e,cC(t));var w0=lC;const{TAU:uC}=Ye,rn=Ge,fC=Ge,hC=w0,dC=_r,pC=(t,e)=>{const n={segments:16};let{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");const r=dC(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let E=r[r.length-2];if("lastBezierControlPoint"in e&&(E=e.lastBezierControlPoint),!Array.isArray(E))throw new Error("the given path must contain TWO or more points if given a null control point");const w=rn.scale(rn.create(),r[r.length-1],2);rn.subtract(w,w,E),i[0]=w}i.unshift(r[r.length-1]);const a=i.length-1,c=[];let l=1;for(let E=0;E<=a;++E)E>0&&(l*=E),c.push(l);const u=[];for(let E=0;E<=a;++E){const w=c[a]/(c[E]*c[a-E]);u.push(w)}const f=rn.create(),h=rn.create(),d=fC.create(),_=E=>{let w=1,L=Math.pow(1-E,a);const v=E!==1?1/(1-E):1,T=rn.create();for(let N=0;N<=a;++N){N===a&&(L=1);const U=u[N]*w*L,I=rn.scale(f,i[N],U);rn.add(T,T,I),w*=E,L*=v}return T},g=[],m=[],p=a+1;for(let E=0;E<p;++E){const w=E/(p-1),L=_(w);g.push(L),m.push(w)}let S=1;const y=uC/s,x=Math.sin(y);for(;S<g.length-1;){const E=rn.subtract(f,g[S],g[S-1]);rn.normalize(E,E);const w=rn.subtract(h,g[S+1],g[S]);rn.normalize(w,w);const L=rn.cross(d,E,w);if(Math.abs(L[2])>x){const v=m[S-1],T=m[S+1],N=v+(T-v)*1/3,U=v+(T-v)*2/3,I=_(N),F=_(U);g.splice(S,1,I,F),m.splice(S,1,N,U),S--,S<1&&(S=1)}else++S}g.shift();const M=hC(g,e);return M.lastBezierControlPoint=i[i.length-2],M};var mC=pC;const gC=Ge,wd=_r,_C=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;const n=wd(t),i=wd(e),s=n.length;let r=0;do{let o=!1;for(let a=0;a<s;a++)if(!gC.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};var vC=_C;const xC=ft,yC=Ge,MC=ec,EC=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");const e=MC();e.transforms=xC.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){const i=yC.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};var SC=EC;const bC=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);var A0=bC;const TC=Vu,wC=t=>{const e=TC(t);return e.points=t.points.slice().reverse(),e};var AC=wC;const RC=Ge,CC=_r,PC=t=>{const e=CC(t);let n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+RC.toString(i)+`,
`}),n+=`]
`,n};var LC=PC;const DC=t=>{const e=t.points,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){const o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};var UC=DC;const Ad=ft,IC=(t,e)=>{const n=Ad.multiply(Ad.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var NC=IC;const FC=Ge,OC=A0,BC=t=>{if(!OC(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if(FC.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};var zC=BC,Sn={appendArc:nC,appendBezier:mC,appendPoints:w0,clone:Vu,close:d0,concat:T0,create:ec,equals:vC,fromPoints:ku,fromCompactBinary:SC,isA:A0,reverse:AC,toPoints:_r,toString:LC,toCompactBinary:UC,transform:NC,validate:zC};const HC=(t,e)=>Array.isArray(t)&&t.length>=e?t.every(n=>Number.isFinite(n)):!1,VC=(t,e)=>Number.isFinite(t)&&t>e,$C=(t,e)=>Number.isFinite(t)&&t>=e;var bt={isNumberArray:HC,isGT:VC,isGTE:$C};const{EPS:Rd,TAU:zs}=Ye,ri=Ge,GC=Sn,{isGT:kC,isGTE:dl,isNumberArray:WC}=bt,XC=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:zs,makeTangent:!1,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,makeTangent:o,segments:a}=Object.assign({},e,t);if(!WC(n,2))throw new Error("center must be an array of X and Y values");if(!kC(i,0))throw new Error("radius must be greater than zero");if(!dl(s,0))throw new Error("startAngle must be positive");if(!dl(r,0))throw new Error("endAngle must be positive");if(!dl(a,4))throw new Error("segments must be four or more");s=s%zs,r=r%zs;let c=zs;s<r&&(c=r-s),s>r&&(c=r+(zs-s));const l=Math.acos((i*i+i*i-Rd*Rd)/(2*i*i)),u=ri.clone(n);let f;const h=[];if(c<l)f=ri.fromAngleRadians(ri.create(),s),ri.scale(f,f,i),ri.add(f,f,u),h.push(f);else{const d=Math.max(1,Math.floor(a*(c/zs)))+1;let _=d*.5/c;_>.25&&(_=.25);const g=o?d+2:d;for(let m=0;m<=g;m++){let p=m;o&&(p=(m-1)*(d-2*_)/d+_,p<0&&(p=0),p>d&&(p=d));const S=s+p*(c/d);f=ri.fromAngleRadians(ri.create(),S),ri.scale(f,f,i),ri.add(f,f,u),h.push(f)}}return GC.fromPoints({closed:!1},h)};var qC=XC;const YC=t=>Object.assign({},t);var jC=YC;const ZC=ft,KC=t=>(t===void 0&&(t=[]),{sides:t,transforms:ZC.create()});var tc=KC;const pl=Ge,JC=tc,QC=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");pl.equals(t[0],t[e-1])&&--e;const n=[];let i=t[e-1];for(let s=0;s<e;s++){const r=t[s];n.push([pl.clone(i),pl.clone(r)]),i=r}return JC(n)};var eP=QC;const tP=ft,Cd=Ge,nP=tc,iP=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");const e=nP();e.transforms=tP.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){const i=Cd.fromValues(t[n+0],t[n+1]),s=Cd.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var sP=iP;const rP=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);var R0=rP;const Pd=ft,Zo=Ge,oP=t=>(Pd.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{const n=Zo.transform(Zo.create(),e[0],t.transforms),i=Zo.transform(Zo.create(),e[1],t.transforms);return[n,i]}),t.transforms=Pd.create()),t);var aP=oP;const cP=aP,lP=t=>cP(t).sides;var go=lP;const uP=tc,fP=go,hP=t=>{const n=fP(t).map(i=>[i[1],i[0]]);return n.reverse(),uP(n)};var C0=hP;const Rr=Ge,dP=go,pP=t=>{const e=new Map,n=i=>{const s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},mP=t=>{const e=new Map;return pP(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},gP=t=>{const e=mP(dP(t)),n=[];for(;;){let i;for(const[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;const s=[],r=i[0];for(;;){s.push(i[0]);const o=i[1];if(o===r)break;const a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);const c=_P(i,a);a.length===0&&e.delete(o),i=c}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},_P=(t,e)=>{if(e.length===1)return e.pop();const n=Rr.create(),i=Rr.angleDegrees(Rr.subtract(n,t[1],t[0]));let s,r;e.forEach((a,c)=>{let u=Rr.angleDegrees(Rr.subtract(n,a[1],a[0]))-i;u<-180&&(u+=360),u>=180&&(u-=360),(r===void 0||u>s)&&(r=c,s=u)});const o=e[r];return e.splice(r,1),o};var P0=gP;const vP=go,xP=t=>{const n=vP(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};var yP=xP;const Ld=Ge,MP=go,EP=t=>{const e=MP(t);let n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+Ld.toString(i[0])+", "+Ld.toString(i[1])+`]
`}),n+=`]
`,n};var SP=EP;const bP=t=>{const e=t.sides,n=t.transforms;let i=[-1,-1,-1,-1];t.color&&(i=t.color);const s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){const o=r*4+21,a=e[r][0],c=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=c[0],s[o+3]=c[1]}return s};var TP=bP;const Dd=ft,wP=C0,AP=(t,e)=>{const n=Dd.multiply(Dd.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?wP(i):i};var RP=AP;const CP=Ge,PP=R0,LP=P0,DP=t=>{if(!PP(t))throw new Error("invalid geom2 structure");if(LP(t),t.sides.forEach(e=>{if(CP.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};var UP=DP,ut={clone:jC,create:tc,fromPoints:eP,fromCompactBinary:sP,isA:R0,reverse:C0,toOutlines:P0,toPoints:yP,toSides:go,toString:SP,toCompactBinary:TP,transform:RP,validate:UP};const{EPS:Ud,TAU:Si}=Ye,ml=Ge,Id=ut,{sin:IP,cos:NP}=Ut,{isGTE:gl,isNumberArray:Nd}=bt,FP=t=>{const e={center:[0,0],radius:[1,1],startAngle:0,endAngle:Si,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!Nd(n,2))throw new Error("center must be an array of X and Y values");if(!Nd(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!gl(s,0))throw new Error("startAngle must be positive");if(!gl(r,0))throw new Error("endAngle must be positive");if(!gl(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return Id.create();s=s%Si,r=r%Si;let a=Si;s<r&&(a=r-s),s>r&&(a=r+(Si-s));const c=Math.min(i[0],i[1]),l=Math.acos((c*c+c*c-Ud*Ud)/(2*c*c));if(a<l)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/Si));const u=ml.clone(n),f=a/o,h=[];o=a<Si?o+1:o;for(let d=0;d<o;d++){const _=f*d+s,g=ml.fromValues(i[0]*NP(_),i[1]*IP(_));ml.add(g,u,g),h.push(g)}return a<Si&&h.push(u),Id.fromPoints(h)};var L0=FP;const{TAU:OP}=Ye,BP=L0,{isGTE:zP}=bt,HP=t=>{const e={center:[0,0],radius:1,startAngle:0,endAngle:OP,segments:32};let{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!zP(i,0))throw new Error("radius must be positive");return i=[i,i],BP({center:n,radius:i,startAngle:s,endAngle:r,segments:o})};var D0=HP;const VP=t=>Object.assign({},t);var $P=VP;const GP=ft,kP=t=>(t===void 0&&(t=[]),{polygons:t,transforms:GP.create()});var _o=kP;const WP=mo,Fd=Qa,Od=b0,XP=(t,e,n)=>{const i=[],s=[],r=[];Fd(i,n,e),Fd(s,t,e);const o=Od(WP(r,s,i)),a=Od(i);if(a===0)throw Error("a and b are the same point");return o/a},qP=(t,e,n)=>Math.sqrt(XP(t,e,n));var YP=qP;const jP=mo,ZP=Gu,Bd=Qa,KP=(t,e,n,i)=>{const s=[0,0,0];return Bd(t,e,n),Bd(s,n,i),jP(t,t,s),ZP(t,t)};var JP=KP;let QP=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};var eL=QP;let tL=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};var nL=tL;const iL=y0,sL=S0;let rL=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?iL(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?sL(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};var oL=rL;const _l=v0,aL=x0,cL=mo,vl=Ka,lL=M0,uL=Gu,Ko=E0,xl=Qa,yl=oL,U0=0,fL=1,lu=2;let hL=class I0{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=U0,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){const e=this.edge,n=e.next;let i=n.next;const s=xl([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)aL(o,s),xl(s,i.head().point,e.head().point),_l(this.normal,this.normal,cL(r,o,s)),i=i.next,this.nVertices+=1;this.area=lL(this.normal),this.normal=Ko(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{const u=s.lengthSquared();u>i&&(n=s,i=u),s=s.next}while(s!==this.edge);const r=n.tail().point,o=n.head().point,a=xl([],o,r),c=Math.sqrt(i);Ko(a,a,1/c);const l=vl(this.normal,a);Ko(a,a,-l),_l(this.normal,this.normal,a),uL(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do _l(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);Ko(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=vl(this.normal,this.centroid)}distanceToPlane(e){return vl(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){const s=n.opposite.face;let r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=lu,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){const i=e.opposite,s=i.face;n.push(s),s.mark=lu;let r=e.prev,o=e.next,a=i.prev,c=i.next;for(;r.opposite.face===s;)r=r.prev,c=c.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let l;for(l=c;l!==a.next;l=l.next)l.face=this;this.edge=o;let u;return u=this.connectHalfEdges(a,o),u&&n.push(u),u=this.connectHalfEdges(r,c),u&&n.push(u),this.computeNormalAndCentroid(),n}collectIndices(){const e=[];let n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){const r=new I0,o=new yl(e,r),a=new yl(n,r),c=new yl(i,r);return o.next=c.prev=a,a.next=o.prev=c,c.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};var dL={VISIBLE:U0,NON_CONVEX:fL,DELETED:lu,Face:hL};const Ml=Ka,pL=YP,mL=JP,zd=eL,gL=nL,{Face:oi,VISIBLE:Hs,NON_CONVEX:Hd,DELETED:_L}=dL,vL=1,Vd=2;let xL=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new zd,this.unclaimed=new zd,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new gL(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){const i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){const a=e[o];if(a.mark===Hs){const c=a.distanceToPlane(i.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){const e=[],n=[],i=[],s=[];let r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){const a=this.vertices[r],c=a.point;for(o=0;o<3;o+=1)c[o]<e[o]&&(e[o]=c[o],i[o]=a);for(o=0;o<3;o+=1)c[o]>n[o]&&(n[o]=c[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){const e=this.vertices,[n,i]=this.computeExtremes();let s,r,o,a,c=0,l=0;for(o=0;o<3;o+=1){const g=i[o].point[o]-n[o].point[o];g>c&&(c=g,l=o)}const u=n[l],f=i[l];for(c=0,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==u&&g!==f){const m=pL(g.point,u.point,f.point);m>c&&(c=m,s=g)}}const h=mL([],u.point,f.point,s.point),d=Ml(u.point,h);for(c=-1,o=0;o<this.vertices.length;o+=1){const g=this.vertices[o];if(g!==u&&g!==f&&g!==s){const m=Math.abs(Ml(h,g.point)-d);m>c&&(c=m,r=g)}}const _=[];if(Ml(r.point,h)-d<0)for(_.push(oi.createTriangle(u,f,s),oi.createTriangle(r,f,u),oi.createTriangle(r,s,f),oi.createTriangle(r,u,s)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge(g)),_[o+1].getEdge(1).setOpposite(_[g+1].getEdge(0))}else for(_.push(oi.createTriangle(u,s,f),oi.createTriangle(r,u,f),oi.createTriangle(r,f,s),oi.createTriangle(r,s,u)),o=0;o<3;o+=1){const g=(o+1)%3;_[o+1].getEdge(2).setOpposite(_[0].getEdge((3-o)%3)),_[o+1].getEdge(0).setOpposite(_[g+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(_[o]);for(o=0;o<e.length;o+=1){const g=e[o];if(g!==u&&g!==f&&g!==s&&g!==r){c=this.tolerance;let m;for(a=0;a<4;a+=1){const p=_[a].distanceToPlane(g.point);p>c&&(c=p,m=_[a])}m&&this.addVertexToFace(g,m)}}}reindexFaceAndVertices(){const e=[];for(let n=0;n<this.faces.length;n+=1){const i=this.faces[n];i.mark===Hs&&e.push(i)}this.faces=e}collectFaces(e){const n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==Hs)throw Error("attempt to include a destroyed face in the hull");const s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0;const s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){const r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=_L;let r;n?r=n.next:r=n=i.getEdge(0);do{const o=r.opposite,a=o.face;a.mark===Hs&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){const i=oi.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){const o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");const o=i.opposite.face;let a=!1;if(n===Vd?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){const c=e.mergeAdjacentFaces(i,[]);for(let l=0;l<c.length;l+=1)this.deleteFaceVertices(c[l],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=Hd),!1}addVertexToHull(e){const n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Hs)for(;this.doAdjacentMerge(s,vL););}for(let i=0;i<this.newFaces.length;i+=1){const s=this.newFaces[i];if(s.mark===Hd)for(s.mark=Hs;this.doAdjacentMerge(s,Vd););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};var yL=xL;const ML=yL,EL=(t,e={})=>{const n=new ML(t);return n.build(),n.collectFaces(e.skipTriangulation)};var SL=EL;const bL=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var vr=bL;const TL=vr,wL=Be,AL=(...t)=>{let e,n;return t.length===1?(e=TL(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>wL.clone(i)),e};var RL=AL;const CL=Be,PL=vr,LL=t=>{const e=t.map(n=>CL.clone(n));return PL(e)};var DL=LL;const UL=vr,IL=(t,e)=>{const n=UL(t);return n.plane=e,n};var NL=IL;const FL=()=>[0,0,0,0];var nc=FL;const OL=nc,BL=t=>{const e=OL();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};var N0=BL;const zL=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);var F0=zL;const HL=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];var O0=HL;const VL=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);var B0=VL;const El=Be,$L=(t,e,n)=>{const i=El.normalize(El.create(),e),s=El.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};var z0=$L;const GL=nc,kL=(t,e,n,i)=>{const s=GL();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};var H0=kL;const on=Be,WL=z0,XL=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;const n=e.length;e.forEach(d=>{on.add(t,t,d)}),on.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,c=0;const l=on.create();e.forEach(d=>{on.subtract(l,d,t),i+=l[0]*l[0],s+=l[0]*l[1],r+=l[0]*l[2],o+=l[1]*l[1],a+=l[1]*l[2],c+=l[2]*l[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,c/=n,l[0]=0,l[1]=0,l[2]=0;const u=on.create();let f=o*c-a*a;u[0]=f,u[1]=r*a-s*c,u[2]=s*a-r*o;let h=f*f;return on.add(l,l,on.scale(u,u,h)),f=i*c-r*r,u[0]=r*a-s*c,u[1]=f,u[2]=s*r-a*i,h=f*f,on.dot(l,u)<0&&(h=-h),on.add(l,l,on.scale(u,u,h)),f=i*o-s*s,u[0]=s*a-r*o,u[1]=s*r-a*i,u[2]=f,h=f*f,on.dot(l,u)<0&&(h=-h),on.add(l,l,on.scale(u,u,h)),WL(t,l,t)};var qL=XL;const Vn=Be,YL=(t,...e)=>{const n=e.length,i=Vn.create(),s=Vn.create(),r=o=>{const a=e[o],c=e[(o+1)%n],l=e[(o+2)%n];return Vn.subtract(i,c,a),Vn.subtract(s,l,a),Vn.cross(i,i,s),Vn.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?Vn.copy(t,r(0)):(e.forEach((o,a)=>{Vn.add(t,t,r(a))}),Vn.normalize(t,t)),t[3]=Vn.dot(t,e[0]),t};var V0=YL;const{EPS:Sl}=Ye,Vt=Be,jL=(t,e,n,i)=>{let s=Vt.subtract(Vt.create(),n,e),r=Vt.subtract(Vt.create(),i,e);Vt.length(s)<Sl&&(s=Vt.orthogonal(s,r)),Vt.length(r)<Sl&&(r=Vt.orthogonal(r,s));let o=Vt.cross(Vt.create(),s,r);Vt.length(o)<Sl&&(r=Vt.orthogonal(r,s),o=Vt.cross(o,s,r)),o=Vt.normalize(o,o);const a=Vt.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};var ZL=jL;const KL=Be,JL=(t,e)=>{const n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return KL.fromValues(i,s,r)};var QL=JL;const e3=Be,t3=(t,e)=>e3.dot(t,e)-t[3];var $0=t3;const n3=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;var G0=n3;const i3=ft,$t=Be,s3=V0,r3=B0,o3=(t,e,n)=>{const i=i3.isMirroring(n),s=$t.orthogonal($t.create(),e),r=$t.cross(s,e,s),o=$t.cross($t.create(),e,r);let a=$t.fromScalar($t.create(),e[3]);$t.multiply(a,a,e);let c=$t.add($t.create(),a,r),l=$t.add($t.create(),a,o);return a=$t.transform(a,a,n),c=$t.transform(c,c,n),l=$t.transform(l,l,n),s3(t,a,c,l),i&&r3(t,t),t};var a3=o3,$i={clone:N0,copy:F0,create:nc,equals:O0,flip:B0,fromNormalAndPoint:z0,fromValues:H0,fromNoisyPoints:qL,fromPoints:V0,fromPointsRandom:ZL,projectionOfPoint:QL,signedDistanceToPoint:$0,toString:G0,transform:a3};const $d=$i,c3=vr,l3=t=>{const e=t.vertices.slice().reverse(),n=c3(e);return t.plane&&(n.plane=$d.flip($d.create(),t.plane)),n};var u3=l3;const f3=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));var k0=f3;const Gd=$i,Qi=Be,h3=t=>d3(t.vertices),d3=t=>{const e=t.length;if(e>2){const n=Gd.fromPoints(Gd.create(),...t);let i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){const o=t[r];if(!p3(i,s,o,n))return!1;i=s,s=o}}return!0},p3=(t,e,n,i)=>{const s=Qi.cross(Qi.create(),Qi.subtract(Qi.create(),e,t),Qi.subtract(Qi.create(),n,e));return Qi.dot(s,i)>=0};var W0=h3;const kd=$i,m3=t=>(t.plane||(t.plane=kd.fromPoints(kd.create(),...t.vertices)),t.plane);var Wu=m3;const g3=Wu,_3=t=>{const e=t.vertices.length;if(e<3)return 0;const n=t.vertices,i=g3(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let c=0,l=0,u=1,f=2;switch(a){case 1:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][1]*(n[f][2]-n[l][2]);c+=n[0][1]*(n[1][2]-n[e-1][2]),c/=2*i[0];break;case 2:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][2]*(n[f][0]-n[l][0]);c+=n[0][2]*(n[1][0]-n[e-1][0]),c/=2*i[1];break;case 3:default:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][0]*(n[f][1]-n[l][1]);c+=n[0][0]*(n[1][1]-n[e-1][1]),c/=2*i[2];break}return c};var X0=_3;const Cr=Be,v3=t=>{const e=t.vertices,n=e.length,i=n===0?Cr.create():Cr.clone(e[0]),s=Cr.clone(i);for(let r=1;r<n;r++)Cr.min(i,i,e[r]),Cr.max(s,s,e[r]);return[i,s]};var x3=v3;const y3=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];var M3=y3;const E3=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);var S3=E3;const b3=(t,e,n)=>{const[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};var T3=b3,w3={clone:N0,copy:F0,create:nc,dot:M3,equals:O0,fromScalar:S3,fromValues:H0,toString:G0,transform:T3};const A3=w3,Wd=new WeakMap,R3=t=>{const e=Wd.get(t);if(e)return e;const n=t.vertices,i=A3.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,c=s,l=s;n.forEach(d=>{s[0]>d[0]&&(s=d),r[1]>d[1]&&(r=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),c[1]<d[1]&&(c=d),l[2]<d[2]&&(l=d)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+c[1])*.5,i[2]=(o[2]+l[2])*.5;const u=i[0]-a[0],f=i[1]-c[1],h=i[2]-l[2];return i[3]=Math.sqrt(u*u+f*f+h*h),Wd.set(t,i),i};var C3=R3;const bl=Be,P3=t=>{let e=0;const n=t.vertices,i=bl.create();for(let s=0;s<n.length-2;s++)bl.cross(i,n[s+1],n[s+2]),e+=bl.dot(n[0],i);return e/=6,e};var L3=P3;const D3=t=>t.vertices;var U3=D3;const I3=Be,N3=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${I3.toString(n)}, `}),e+="]",e};var F3=N3;const O3=ft,Xd=Be,B3=vr,z3=(t,e)=>{const n=e.vertices.map(i=>Xd.transform(Xd.create(),i,t));return O3.isMirroring(t)&&n.reverse(),B3(n)};var H3=z3;const V3=$0,{NEPS:$3}=Ye,G3=Be,k3=k0,W3=W0,X3=X0,q3=Wu,Y3=t=>{if(!k3(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(X3(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(G3.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!W3(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){const e=q3(t);t.vertices.forEach(n=>{const i=Math.abs(V3(e,n));if(i>$3)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};var j3=Y3,Qe={clone:RL,create:vr,fromPoints:DL,fromPointsAndPlane:NL,invert:u3,isA:k0,isConvex:W0,measureArea:X0,measureBoundingBox:x3,measureBoundingSphere:C3,measureSignedVolume:L3,plane:Wu,toPoints:U3,toString:F3,transform:H3,validate:j3};const Z3=SL,K3=_o,J3=Qe,Q3=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const n=Z3(t,{skipTriangulation:!0}).map(i=>{const s=i.map(r=>t[r]);return J3.create(s)});return K3(n)};var eD=Q3;const tD=Qe,nD=_o,iD=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");const e=t.map((i,s)=>tD.create(i));return nD(e)};var sD=iD;const rD=Be,oD=ft,aD=Qe,cD=_o,lD=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");const e=cD();e.transforms=oD.clone(t.slice(1,17));const n=t[21];let i=22,s=t.length-n*3;for(;s<t.length;){const r=t[i];i++;const o=[];for(let a=0;a<r;a++)o.push(rD.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(aD.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};var uD=lD;const qd=ft,fD=Qe,hD=t=>(qd.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>fD.transform(t.transforms,e)),t.transforms=qd.create()),t);var dD=hD;const pD=dD,mD=t=>pD(t).polygons;var ic=mD;const gD=Qe,_D=_o,vD=ic,xD=t=>{const n=vD(t).map(i=>gD.invert(i));return _D(n)};var yD=xD;const MD=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);var q0=MD;const ED=Qe,SD=ic,bD=t=>SD(t).map(i=>ED.toPoints(i));var TD=bD;const wD=Qe,AD=ic,RD=t=>{const e=AD(t);let n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+wD.toString(i)+`
`}),n};var CD=RD;const PD=Qe,LD=t=>{const e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((l,u)=>l+u.vertices.length,0);let r=[-1,-1,-1,-1];t.color&&(r=t.color);const o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,c=a+i;return e.forEach(l=>{const u=PD.toPoints(l);o[a]=u.length,a++;for(let f=0;f<u.length;f++){const h=u[f];o[c+0]=h[0],o[c+1]=h[1],o[c+2]=h[2],c+=3}}),o};var DD=LD;const Yd=ft,UD=(t,e)=>{const n=Yd.multiply(Yd.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};var ID=UD;const ND=Qe,FD=q0,OD=t=>{if(!FD(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(ND.validate),BD(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},BD=t=>{const e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{const o=`${s}`,a=`${i[(r+1)%i.length]}`,c=`${o}/${a}`,l=e.has(c)?e.get(c):0;e.set(c,l+1)})});const n=[];if(e.forEach((i,s)=>{const r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};var zD=OD,lt={clone:$P,create:_o,fromPointsConvex:eD,fromPoints:sD,fromCompactBinary:uD,invert:yD,isA:q0,toPoints:TD,toPolygons:ic,toString:CD,toCompactBinary:DD,transform:ID,validate:zD};const jd=lt,HD=Qe,{isNumberArray:Zd}=bt,VD=t=>{const e={center:[0,0,0],size:[2,2,2]},{center:n,size:i}=Object.assign({},e,t);if(!Zd(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Zd(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(r=>r>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?jd.create():jd.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(r=>{const o=r[0].map(a=>[n[0]+i[0]/2*(2*!!(a&1)-1),n[1]+i[1]/2*(2*!!(a&2)-1),n[2]+i[2]/2*(2*!!(a&4)-1)]);return HD.create(o)}))};var Xu=VD;const $D=Xu,{isGTE:GD}=bt,kD=t=>{const e={center:[0,0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!GD(i,0))throw new Error("size must be positive");return i=[i,i,i],$D({center:n,size:i})};var WD=kD;const{EPS:Kd,TAU:bi}=Ye,At=Be,XD=lt,qD=Qe,{sin:YD,cos:jD}=Ut,{isGT:ZD,isGTE:Tl,isNumberArray:wl}=bt,KD=t=>{const e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:bi,segments:32};let{center:n,height:i,startRadius:s,startAngle:r,endRadius:o,endAngle:a,segments:c}=Object.assign({},e,t);if(!wl(n,3))throw new Error("center must be an array of X, Y and Z values");if(!ZD(i,0))throw new Error("height must be greater then zero");if(!wl(s,2))throw new Error("startRadius must be an array of X and Y values");if(!s.every(v=>v>=0))throw new Error("startRadius values must be positive");if(!wl(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(v=>v>=0))throw new Error("endRadius values must be positive");if(o.every(v=>v===0)&&s.every(v=>v===0))throw new Error("at least one radius must be positive");if(!Tl(r,0))throw new Error("startAngle must be positive");if(!Tl(a,0))throw new Error("endAngle must be positive");if(!Tl(c,4))throw new Error("segments must be four or more");r=r%bi,a=a%bi;let l=bi;r<a&&(l=a-r),r>a&&(l=a+(bi-r));const u=Math.min(s[0],s[1],o[0],o[1]),f=Math.acos((u*u+u*u-Kd*Kd)/(2*u*u));if(l<f)throw new Error("startAngle and endAngle do not define a significant rotation");const h=Math.floor(c*(l/bi)),d=At.fromValues(0,0,-(i/2)),_=At.fromValues(0,0,i/2),g=At.subtract(At.create(),_,d),m=At.fromValues(1,0,0),p=At.fromValues(0,1,0),S=At.create(),y=At.create(),x=At.create(),M=(v,T,N)=>{const U=T*l+r;return At.scale(S,m,N[0]*jD(U)),At.scale(y,p,N[1]*YD(U)),At.add(S,S,y),At.scale(x,g,v),At.add(x,x,d),At.add(At.create(),S,x)},E=(...v)=>{const T=v.map(N=>At.add(At.create(),N,n));return qD.create(T)},w=[];for(let v=0;v<h;v++){const T=v/h;let N=(v+1)/h;l===bi&&v===h-1&&(N=0),o[0]===s[0]&&o[1]===s[1]?(w.push(E(d,M(0,N,o),M(0,T,o))),w.push(E(M(0,N,o),M(1,N,o),M(1,T,o),M(0,T,o))),w.push(E(_,M(1,T,o),M(1,N,o)))):(s[0]>0&&s[1]>0&&w.push(E(d,M(0,N,s),M(0,T,s))),(s[0]>0||s[1]>0)&&w.push(E(M(0,T,s),M(0,N,s),M(1,T,o))),o[0]>0&&o[1]>0&&w.push(E(_,M(1,T,o),M(1,N,o))),(o[0]>0||o[1]>0)&&w.push(E(M(1,T,o),M(0,N,s),M(1,N,o))))}return l<bi&&(w.push(E(d,M(0,0,s),_)),w.push(E(M(0,0,s),M(1,0,o),_)),w.push(E(d,_,M(0,1,s))),w.push(E(M(0,1,s),_,M(1,1,o)))),XD.create(w)};var Y0=KD;const JD=lt,QD=Y0,{isGTE:eU}=bt,tU=t=>{const e={center:[0,0,0],height:2,radius:1,segments:32},{center:n,height:i,radius:s,segments:r}=Object.assign({},e,t);if(!eU(s,0))throw new Error("radius must be positive");return i===0||s===0?JD.create():QD({center:n,height:i,startRadius:[s,s],endRadius:[s,s],segments:r})};var j0=tU;const{TAU:Jd}=Ye,Re=Be,Qd=lt,ep=Qe,{sin:tp,cos:np}=Ut,{isGTE:nU,isNumberArray:ip}=bt,iU=t=>{const e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!ip(n,3))throw new Error("center must be an array of X, Y and Z values");if(!ip(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(_=>_>=0))throw new Error("radius values must be positive");if(!nU(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return Qd.create();const o=Re.scale(Re.create(),Re.normalize(Re.create(),r[0]),i[0]),a=Re.scale(Re.create(),Re.normalize(Re.create(),r[1]),i[1]),c=Re.scale(Re.create(),Re.normalize(Re.create(),r[2]),i[2]),l=Math.round(s/4);let u;const f=[],h=Re.create(),d=Re.create();for(let _=0;_<=s;_++){const g=Jd*_/s,m=Re.add(Re.create(),Re.scale(h,o,np(g)),Re.scale(d,a,tp(g)));if(_>0){let p,S;for(let y=0;y<=l;y++){const x=Jd/4*y/l,M=np(x),E=tp(x);if(y>0){let w=[],L;L=Re.subtract(Re.create(),Re.scale(h,u,p),Re.scale(d,c,S)),w.push(Re.add(L,L,n)),L=Re.subtract(Re.create(),Re.scale(h,m,p),Re.scale(d,c,S)),w.push(Re.add(L,L,n)),y<l&&(L=Re.subtract(Re.create(),Re.scale(h,m,M),Re.scale(d,c,E)),w.push(Re.add(L,L,n))),L=Re.subtract(Re.create(),Re.scale(h,u,M),Re.scale(d,c,E)),w.push(Re.add(L,L,n)),f.push(ep.create(w)),w=[],L=Re.add(Re.create(),Re.scale(h,u,p),Re.scale(d,c,S)),w.push(Re.add(Re.create(),n,L)),L=Re.add(L,Re.scale(h,m,p),Re.scale(d,c,S)),w.push(Re.add(Re.create(),n,L)),y<l&&(L=Re.add(L,Re.scale(h,m,M),Re.scale(d,c,E)),w.push(Re.add(Re.create(),n,L))),L=Re.add(L,Re.scale(h,u,M),Re.scale(d,c,E)),w.push(Re.add(Re.create(),n,L)),w.reverse(),f.push(ep.create(w))}p=M,S=E}}u=m}return Qd.create(f)};var Z0=iU;const sU=lt,rU=Qe,{isNumberArray:sp}=bt,oU=t=>{const e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:n,faces:i,colors:s,orientation:r}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(n.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(s){if(!Array.isArray(s))throw new Error("colors must be an array");if(s.length!==i.length)throw new Error("faces and colors must have the same length")}n.forEach((a,c)=>{if(!sp(a,3))throw new Error(`point ${c} must be an array of X, Y, Z values`)}),i.forEach((a,c)=>{if(a.length<3)throw new Error(`face ${c} must contain 3 or more indexes`);if(!sp(a,a.length))throw new Error(`face ${c} must be an array of numbers`)}),r!=="outward"&&i.forEach(a=>a.reverse());const o=i.map((a,c)=>{const l=rU.create(a.map(u=>n[u]));return s&&s[c]&&(l.color=s[c]),l});return sU.create(o)};var K0=oU;const rp=ft,op=Be,ap=lt,aU=K0,{isGTE:cp}=bt,cU=t=>{const e={radius:1,frequency:6};let{radius:n,frequency:i}=Object.assign({},e,t);if(!cp(n,0))throw new Error("radius must be positive");if(!cp(i,6))throw new Error("frequency must be six or more");if(n===0)return ap.create();i=Math.floor(i/6);const s=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],r=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(h,d,_)=>{const g=h[0],m=h[1],p=h[2];let S=_;const y=[],x=[];for(let M=0;M<d;M++)for(let E=0;E<d-M;E++){const w=M/d,L=(M+1)/d,v=E/(d-M),T=(E+1)/(d-M),N=d-M-1?E/(d-M-1):1,U=[];U[0]=a(a(g,m,v),p,w),U[1]=a(a(g,m,T),p,w),U[2]=a(a(g,m,N),p,L);for(let I=0;I<3;I++){const F=op.length(U[I]);for(let B=0;B<3;B++)U[I][B]/=F}if(y.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3,E<d-M-1){const I=d-M-1?(E+1)/(d-M-1):1;U[0]=a(a(g,m,T),p,w),U[1]=a(a(g,m,I),p,L),U[2]=a(a(g,m,N),p,L);for(let F=0;F<3;F++){const B=op.length(U[F]);for(let H=0;H<3;H++)U[F][H]/=B}y.push(U[0],U[1],U[2]),x.push([S,S+1,S+2]),S+=3}}return{points:y,triangles:x,offset:S}},a=(h,d,_)=>{const g=1-_,m=[];for(let p=0;p<3;p++)m[p]=h[p]*g+d[p]*_;return m};let c=[],l=[],u=0;for(let h=0;h<r.length;h++){const d=o([s[r[h][0]],s[r[h][1]],s[r[h][2]]],i,u);c=c.concat(d.points),l=l.concat(d.triangles),u=d.offset}let f=aU({points:c,faces:l,orientation:"inward"});return n!==1&&(f=ap.transform(rp.fromScaling(rp.create(),[n,n,n]),f)),f};var lU=cU;const uU=Sn,fU=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return uU.fromPoints({},t)};var hU=fU;const Jo=ut,dU=t=>{const e={points:[],paths:[],orientation:"counterclockwise"},{points:n,paths:i,orientation:s}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let r=n;Array.isArray(n[0])&&(Array.isArray(n[0][0])||(r=[n])),r.forEach((u,f)=>{if(!Array.isArray(u))throw new Error("list of points "+f+" must be an array");if(u.length<3)throw new Error("list of points "+f+" must contain three or more points");u.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+f+", point "+d+" must be an array");if(h.length<2)throw new Error("list of points "+f+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let u=0;o=r.map(f=>f.map(h=>u++))}const a=[];r.forEach(u=>u.forEach(f=>a.push(f)));let c=[];o.forEach(u=>{const f=u.map(d=>a[d]),h=Jo.fromPoints(f);c=c.concat(Jo.toSides(h))});let l=Jo.create(c);return s==="clockwise"&&(l=Jo.reverse(l)),l};var pU=dU;const Ti=Ge,lp=ut,{isNumberArray:up}=bt,mU=t=>{const e={center:[0,0],size:[2,2]},{center:n,size:i}=Object.assign({},e,t);if(!up(n,2))throw new Error("center must be an array of X and Y values");if(!up(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return lp.create();const s=[i[0]/2,i[1]/2],r=[s[0],-s[1]],o=[Ti.subtract(Ti.create(),n,s),Ti.add(Ti.create(),n,r),Ti.add(Ti.create(),n,s),Ti.subtract(Ti.create(),n,r)];return lp.fromPoints(o)};var qu=mU;const{EPS:xa,TAU:Pr}=Ye,Al=Ge,pt=Be,fp=lt,ur=Qe,{sin:gU,cos:_U}=Ut,{isGTE:hp,isNumberArray:dp}=bt,vU=Xu,pp=(t,e,n,i,s,r)=>{const o=Pr/4*s/i,a=_U(o),c=gU(o),l=i-s;let u=n*a,f=e[2]-(n-n*c);r||(f=n-n*c-e[2]),u=u>xa?u:0;const h=pt.add(pt.create(),t,[e[0]-n,e[1]-n,f]),d=pt.add(pt.create(),t,[n-e[0],e[1]-n,f]),_=pt.add(pt.create(),t,[n-e[0],n-e[1],f]),g=pt.add(pt.create(),t,[e[0]-n,n-e[1],f]),m=[],p=[],S=[],y=[];for(let x=0;x<=l;x++){const M=l>0?Pr/4*x/l:0,E=Al.fromAngleRadians(Al.create(),M);Al.scale(E,E,u);const w=pt.fromVec2(pt.create(),E);m.push(pt.add(pt.create(),h,w)),pt.rotateZ(w,w,[0,0,0],Pr/4),p.push(pt.add(pt.create(),d,w)),pt.rotateZ(w,w,[0,0,0],Pr/4),S.push(pt.add(pt.create(),_,w)),pt.rotateZ(w,w,[0,0,0],Pr/4),y.push(pt.add(pt.create(),g,w))}return r?[m,p,S,y]:(m.reverse(),p.reverse(),S.reverse(),y.reverse(),[y,S,p,m])},mp=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){const s=t[i],r=e[i];for(let o=0;o<s.length-1;o++)n.push(ur.create([s[o],s[o+1],r[o]])),o<r.length-1&&n.push(ur.create([r[o],s[o+1],r[o+1]]))}return n},gp=(t,e)=>{const n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i];const o=s[s.length-1],a=r[r.length-1],c=(i+1)%t.length;s=t[c],r=e[c];const l=s[0],u=r[0];n.push(ur.create([o,l,u,a]))}return n},xU=(t,e)=>{t=[t[3],t[2],t[1],t[0]],t=t.map(r=>r.slice().reverse());const n=[];t.forEach(r=>{r.forEach(o=>n.push(o))});const i=[];e.forEach(r=>{r.forEach(o=>i.push(o))});const s=[];for(let r=0;r<i.length;r++){const o=(r+1)%i.length;s.push(ur.create([n[r],n[o],i[o],i[r]]))}return s},yU=t=>{const e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!dp(n,3))throw new Error("center must be an array of X, Y and Z values");if(!dp(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(l=>l>=0))throw new Error("size values must be positive");if(!hp(s,0))throw new Error("roundRadius must be positive");if(!hp(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return fp.create();if(s===0)return vU({center:n,size:i});if(i=i.map(l=>l/2),s>i[0]-xa||s>i[1]-xa||s>i[2]-xa)throw new Error("roundRadius must be smaller than the radius of all dimensions");r=Math.floor(r/4);let o=null,a=null,c=[];for(let l=0;l<=r;l++){const u=pp(n,i,s,r,l,!0),f=pp(n,i,s,r,l,!1);if(l===0&&(c=c.concat(xU(f,u))),o&&(c=c.concat(mp(o,u),gp(o,u))),a&&(c=c.concat(mp(a,f),gp(a,f))),l===r){let h=u.map(d=>d[0]);c.push(ur.create(h)),h=f.map(d=>d[0]),c.push(ur.create(h))}o=u,a=f}return fp.create(c)};var MU=yU;const{EPS:EU,TAU:_p}=Ye,_e=Be,vp=lt,SU=Qe,{sin:xp,cos:yp}=Ut,{isGTE:Qo,isNumberArray:bU}=bt,TU=j0,wU=t=>{const e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:n,height:i,radius:s,roundRadius:r,segments:o}=Object.assign({},e,t);if(!bU(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Qo(i,0))throw new Error("height must be positive");if(!Qo(s,0))throw new Error("radius must be positive");if(!Qo(r,0))throw new Error("roundRadius must be positive");if(r>s)throw new Error("roundRadius must be smaller than the radius");if(!Qo(o,4))throw new Error("segments must be four or more");if(i===0||s===0)return vp.create();if(r===0)return TU({center:n,height:i,radius:s});const a=[0,0,-(i/2)],c=[0,0,i/2],l=_e.subtract(_e.create(),c,a),u=_e.length(l);if(2*r>u-EU)throw new Error("height must be larger than twice roundRadius");let f;Math.abs(l[0])>Math.abs(l[1])?f=_e.fromValues(0,1,0):f=_e.fromValues(1,0,0);const h=_e.scale(_e.create(),_e.normalize(_e.create(),l),r),d=_e.scale(_e.create(),_e.normalize(_e.create(),_e.cross(_e.create(),h,f)),s),_=_e.scale(_e.create(),_e.normalize(_e.create(),_e.cross(_e.create(),d,h)),s);_e.add(a,a,h),_e.subtract(c,c,h);const g=Math.floor(.25*o),m=E=>{const w=E.map(L=>_e.add(L,L,n));return SU.create(w)},p=[],S=_e.create(),y=_e.create();let x;for(let E=0;E<=o;E++){const w=_p*E/o,L=_e.add(_e.create(),_e.scale(S,d,yp(w)),_e.scale(y,_,xp(w)));if(E>0){let v=[];v.push(_e.add(_e.create(),a,L)),v.push(_e.add(_e.create(),a,x)),v.push(_e.add(_e.create(),c,x)),v.push(_e.add(_e.create(),c,L)),p.push(m(v));let T,N;for(let U=0;U<=g;U++){const I=_p/4*U/g,F=yp(I),B=xp(I);if(U>0){v=[];let H;H=_e.add(_e.create(),a,_e.subtract(S,_e.scale(S,x,T),_e.scale(y,h,N))),v.push(H),H=_e.add(_e.create(),a,_e.subtract(S,_e.scale(S,L,T),_e.scale(y,h,N))),v.push(H),U<g&&(H=_e.add(_e.create(),a,_e.subtract(S,_e.scale(S,L,F),_e.scale(y,h,B))),v.push(H)),H=_e.add(_e.create(),a,_e.subtract(S,_e.scale(S,x,F),_e.scale(y,h,B))),v.push(H),p.push(m(v)),v=[],H=_e.add(_e.create(),_e.scale(S,x,T),_e.scale(y,h,N)),_e.add(H,H,c),v.push(H),H=_e.add(_e.create(),_e.scale(S,L,T),_e.scale(y,h,N)),_e.add(H,H,c),v.push(H),U<g&&(H=_e.add(_e.create(),_e.scale(S,L,F),_e.scale(y,h,B)),_e.add(H,H,c),v.push(H)),H=_e.add(_e.create(),_e.scale(S,x,F),_e.scale(y,h,B)),_e.add(H,H,c),v.push(H),v.reverse(),p.push(m(v))}T=F,N=B}}x=L}return vp.create(p)};var AU=wU;const{EPS:Mp,TAU:ea}=Ye,at=Ge,Ep=ut,{isGTE:Sp,isNumberArray:bp}=bt,RU=qu,CU=t=>{const e={center:[0,0],size:[2,2],roundRadius:.2,segments:32};let{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!bp(n,2))throw new Error("center must be an array of X and Y values");if(!bp(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(g=>g>=0))throw new Error("size values must be positive");if(!Sp(s,0))throw new Error("roundRadius must be positive");if(!Sp(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return Ep.create();if(s===0)return RU({center:n,size:i});if(i=i.map(g=>g/2),s>i[0]-Mp||s>i[1]-Mp)throw new Error("roundRadius must be smaller than the radius of all dimensions");const o=Math.floor(r/4),a=at.add(at.create(),n,[i[0]-s,i[1]-s]),c=at.add(at.create(),n,[s-i[0],i[1]-s]),l=at.add(at.create(),n,[s-i[0],s-i[1]]),u=at.add(at.create(),n,[i[0]-s,s-i[1]]),f=[],h=[],d=[],_=[];for(let g=0;g<=o;g++){const m=ea/4*g/o,p=at.fromAngleRadians(at.create(),m);at.scale(p,p,s),f.push(at.add(at.create(),a,p)),at.rotate(p,p,at.create(),ea/4),h.push(at.add(at.create(),c,p)),at.rotate(p,p,at.create(),ea/4),d.push(at.add(at.create(),l,p)),at.rotate(p,p,at.create(),ea/4),_.push(at.add(at.create(),u,p))}return Ep.fromPoints(f.concat(h,d,_))};var PU=CU;const LU=Z0,{isGTE:DU}=bt,UU=t=>{const e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]};let{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!DU(i,0))throw new Error("radius must be positive");return i=[i,i,i],LU({center:n,radius:i,segments:s,axes:r})};var IU=UU;const NU=qu,{isGTE:FU}=bt,OU=t=>{const e={center:[0,0],size:2};let{center:n,size:i}=Object.assign({},e,t);if(!FU(i,0))throw new Error("size must be positive");return i=[i,i],NU({center:n,size:i})};var BU=OU;const{TAU:J0}=Ye,zr=Ge,zU=ut,{isGT:HU,isGTE:ta,isNumberArray:VU}=bt,$U=(t,e)=>t>0&&e>1&&e<t/2?Math.cos(Math.PI*e/t)/Math.cos(Math.PI*(e-1)/t):0,Tp=(t,e,n,i)=>{const s=J0/t,r=[];for(let o=0;o<t;o++){const a=zr.fromAngleRadians(zr.create(),s*o+n);zr.scale(a,a,e),zr.add(a,i,a),r.push(a)}return r},GU=t=>{const e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0};let{center:n,vertices:i,outerRadius:s,innerRadius:r,density:o,startAngle:a}=Object.assign({},e,t);if(!VU(n,2))throw new Error("center must be an array of X and Y values");if(!ta(i,2))throw new Error("vertices must be two or more");if(!HU(s,0))throw new Error("outerRadius must be greater than zero");if(!ta(r,0))throw new Error("innerRadius must be greater than zero");if(!ta(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%J0,r===0){if(!ta(o,2))throw new Error("density must be two or more");r=s*$U(i,o)}const c=zr.clone(n),l=Tp(i,s,a,c),u=Tp(i,r,a+Math.PI/i,c),f=[];for(let h=0;h<i;h++)f.push(l[h]),f.push(u[h]);return zU.fromPoints(f)};var kU=GU;const Q0=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(Q0(n)):e.concat(n),[]);var bn=Q0;const WU=bn,wp=ft,Ap=$i,Rp=ut,Cp=lt,Pp=Sn,sc=(t,...e)=>{const n={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:s}=Object.assign({},n,t);if(e=WU(e),e.length===0)throw new Error("wrong number of arguments");const r=Ap.fromNormalAndPoint(Ap.create(),s,i);if(Number.isNaN(r[0]))throw new Error("the given origin and normal do not define a proper plane");const o=wp.mirrorByPlane(wp.create(),r),a=e.map(c=>Pp.isA(c)?Pp.transform(o,c):Rp.isA(c)?Rp.transform(o,c):Cp.isA(c)?Cp.transform(o,c):c);return a.length===1?a[0]:a},XU=(...t)=>sc({normal:[1,0,0]},t),qU=(...t)=>sc({normal:[0,1,0]},t),YU=(...t)=>sc({normal:[0,0,1]},t);var Hr={mirror:sc,mirrorX:XU,mirrorY:qU,mirrorZ:YU};const Lp=$i,es=Be,jU=t=>{const e=t.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");const n=e.reduce((o,a)=>es.add(es.create(),o,a[0]),es.create());es.scale(n,n,1/e.length);let i,s=0;e.forEach(o=>{if(!es.equals(o[0],o[1])){const a=es.squaredDistance(n,o[0]);a>s&&(i=o,s=a)}});const r=e.find(o=>es.equals(o[1],i[0]));return Lp.fromPoints(Lp.create(),r[0],i[0],i[1])};var e_=jU;const ZU=t=>(t||(t=[]),{edges:t});var Ms=ZU;const KU=Ms,Dp=Be,JU=(...t)=>{let e,n;return t.length===1?(e=KU(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[Dp.clone(i[0]),Dp.clone(i[1])]),e};var QU=JU;const eI=Be,tI=(t,e)=>{const n=t.edges,i=e.edges;return n.length!==i.length?!1:n.reduce((r,o,a)=>{const c=i[a],l=eI.squaredDistance(o[0],c[0]);return r&&l<Number.EPSILON},!0)};var nI=tI;const na=Be,iI=Ms,sI=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");if(t.length<3)throw new Error("the given points must contain THREE or more points");const e=[];let n=t[t.length-1];return t.forEach(i=>{i.length===2&&e.push([na.fromVec2(na.create(),n),na.fromVec2(na.create(),i)]),i.length===3&&e.push([n,i]),n=i}),iI(e)};var rI=sI;const ia=Be,oI=Ms,aI=t=>{if(!Array.isArray(t))throw new Error("the given sides must be an array");const e=[];return t.forEach(n=>{e.push([ia.fromVec2(ia.create(),n[0]),ia.fromVec2(ia.create(),n[1])])}),oI(e)};var cI=aI;const lI=t=>!!(t&&typeof t=="object"&&"edges"in t&&Array.isArray(t.edges));var uI=lI;const fI=Ms,hI=(...t)=>{let e,n;return t.length===1?(e=fI(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[i[1],i[0]]),e};var dI=hI;const pI=t=>t.edges;var mI=pI;const gI=(t,e)=>{let n,i,s,r,o,a=1;do{i=t,t=null;let c=null;for(o=0;i;){o++,s=i;let l=0;for(n=0;n<a&&(l++,s=s.nextZ,!!s);n++);let u=a;for(;l>0||u>0&&s;)l!==0&&(u===0||!s||e(i)<=e(s))?(r=i,i=i.nextZ,l--):(r=s,s=s.nextZ,u--),c?c.nextZ=r:t=r,r.prevZ=c,c=r;i=s}c.nextZ=null,a*=2}while(o>1);return t};var _I=gI;const vI=_I;let t_=class{constructor(e,n,i){this.i=e,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}};const xI=(t,e,n,i)=>{const s=new t_(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s},yI=t=>{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)};var n_={Node:t_,insertNode:xI,removeNode:yI,sortLinked:vI};const MI=(t,e,n,i,s,r,o,a)=>(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(r-a)-(s-o)*(i-a)>=0,EI=(t,e,n)=>(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);var Yu={area:EI,pointInTriangle:MI};const{Node:Up,insertNode:Ip,removeNode:Pa}=n_,{area:Jt}=Yu,SI=(t,e,n,i,s)=>{let r;if(s===CI(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Ip(o,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Ip(o,t[o],t[o+1],r);return r&&rc(r,r.next)&&(Pa(r),r=r.next),r},i_=(t,e)=>{if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(rc(n,n.next)||Jt(n.prev,n,n.next)===0)){if(Pa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e},bI=(t,e,n)=>{let i=t;do{const s=i.prev,r=i.next.next;!rc(s,r)&&s_(s,i,i.next,r)&&ao(s,r)&&ao(r,s)&&(e.push(s.i/n),e.push(i.i/n),e.push(r.i/n),Pa(i),Pa(i.next),i=t=r),i=i.next}while(i!==t);return i_(i)},TI=(t,e)=>{let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&s_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1},ao=(t,e)=>Jt(t.prev,t,t.next)<0?Jt(t,e,t.next)>=0&&Jt(t,t.prev,e)>=0:Jt(t,e,t.prev)<0||Jt(t,t.next,e)<0,wI=(t,e)=>{let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i},AI=(t,e)=>{const n=new Up(t.i,t.x,t.y),i=new Up(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i},RI=(t,e)=>t.next.i!==e.i&&t.prev.i!==e.i&&!TI(t,e)&&(ao(t,e)&&ao(e,t)&&wI(t,e)&&(Jt(t.prev,t,e.prev)||Jt(t,e.prev,e))||rc(t,e)&&Jt(t.prev,t,t.next)>0&&Jt(e.prev,e,e.next)>0),s_=(t,e,n,i)=>{const s=Math.sign(Jt(t,e,n)),r=Math.sign(Jt(t,e,i)),o=Math.sign(Jt(n,i,t)),a=Math.sign(Jt(n,i,e));return!!(s!==r&&o!==a||s===0&&sa(t,n,e)||r===0&&sa(t,i,e)||o===0&&sa(n,t,i)||a===0&&sa(n,e,i))},sa=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),CI=(t,e,n,i)=>{let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s},rc=(t,e)=>t.x===e.x&&t.y===e.y;var r_={cureLocalIntersections:bI,filterPoints:i_,isValidDiagonal:RI,linkedPolygon:SI,locallyInside:ao,splitPolygon:AI};const{filterPoints:uu,linkedPolygon:PI,locallyInside:LI,splitPolygon:DI}=r_,{area:Np,pointInTriangle:UI}=Yu,II=(t,e,n,i)=>{const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:t.length,l=PI(t,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(BI(l))}s.sort((r,o)=>r.x-o.x);for(let r=0;r<s.length;r++)n=NI(s[r],n),n=uu(n,n.next);return n},NI=(t,e)=>{const n=FI(t,e);if(!n)return e;const i=DI(n,t),s=uu(n,n.next);return uu(i,i.next),e===n?s:e},FI=(t,e)=>{let n=e;const i=t.x,s=t.y;let r=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>r){if(r=f,f===i){if(s===n.y)return n;if(s===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===r)return o;const a=o,c=o.x,l=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=c&&i!==n.x&&UI(s<l?i:r,s,c,l,s<l?r:i,s,n.x,n.y)){const f=Math.abs(s-n.y)/(i-n.x);LI(n,t)&&(f<u||f===u&&(n.x>o.x||n.x===o.x&&OI(o,n)))&&(o=n,u=f)}n=n.next}while(n!==a);return o},OI=(t,e)=>Np(t.prev,t,e.prev)<0&&Np(e.next,t,t.next)<0,BI=t=>{let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n};var zI=II;const HI=zI,{removeNode:VI,sortLinked:$I}=n_,{cureLocalIntersections:GI,filterPoints:La,isValidDiagonal:kI,linkedPolygon:WI,splitPolygon:XI}=r_,{area:os,pointInTriangle:Vr}=Yu,qI=(t,e,n=2)=>{const i=e&&e.length,s=i?e[0]*n:t.length;let r=WI(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f;if(i&&(r=HI(t,e,r,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(let h=n;h<s;h+=n){const d=t[h],_=t[h+1];d<a&&(a=d),_<c&&(c=_),d>l&&(l=d),_>u&&(u=_)}f=Math.max(l-a,u-c),f=f!==0?1/f:0}return co(r,o,n,a,c,f),o},co=(t,e,n,i,s,r,o)=>{if(!t)return;!o&&r&&KI(t,i,s,r);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,r?jI(t,i,s,r):YI(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),VI(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=GI(La(t),e,n),co(t,e,n,i,s,r,2)):o===2&&ZI(t,e,n,i,s,r):co(La(t),e,n,i,s,r,1);break}}},YI=t=>{const e=t.prev,n=t,i=t.next;if(os(e,n,i)>=0)return!1;let s=t.next.next;for(;s!==t.prev;){if(Vr(e.x,e.y,n.x,n.y,i.x,i.y,s.x,s.y)&&os(s.prev,s,s.next)>=0)return!1;s=s.next}return!0},jI=(t,e,n,i)=>{const s=t.prev,r=t,o=t.next;if(os(s,r,o)>=0)return!1;const a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,c=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,l=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,u=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,f=fu(a,c,e,n,i),h=fu(l,u,e,n,i);let d=t.prevZ,_=t.nextZ;for(;d&&d.z>=f&&_&&_.z<=h;){if(d!==t.prev&&d!==t.next&&Vr(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&os(d.prev,d,d.next)>=0||(d=d.prevZ,_!==t.prev&&_!==t.next&&Vr(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&os(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;d&&d.z>=f;){if(d!==t.prev&&d!==t.next&&Vr(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&os(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;_&&_.z<=h;){if(_!==t.prev&&_!==t.next&&Vr(s.x,s.y,r.x,r.y,o.x,o.y,_.x,_.y)&&os(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0},ZI=(t,e,n,i,s,r)=>{let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kI(o,a)){let c=XI(o,a);o=La(o,o.next),c=La(c,c.next),co(o,e,n,i,s,r),co(c,e,n,i,s,r);return}a=a.next}o=o.next}while(o!==t)},KI=(t,e,n,i)=>{let s=t;do s.z===null&&(s.z=fu(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,$I(s,r=>r.z)},fu=(t,e,n,i,s)=>(t=32767*(t-n)*s,e=32767*(e-i)*s,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1);var JI=qI;const{NEPS:Rl}=Ye,QI=(t,e)=>Math.abs(t[0]-e[0])<=Rl&&Math.abs(t[1]-e[1])<=Rl&&Math.abs(t[2]-e[2])<=Rl;var eN=QI;const tN=t=>{let e=0;for(let n=0;n<t.length;n++){const i=(n+1)%t.length;e+=t[n][0]*t[i][1],e-=t[i][0]*t[n][1]}return e/2};var o_=tN;const nN=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};var iN=nN;const sN=(t,e,n,i,s,r)=>{const a=1/(t*i-e*n);let c=s*i-e*r,l=-s*n+t*r;return c*=a,l*=a,[c,l]};var rN=sN,oc={area:o_,cos:Ut.cos,sin:Ut.sin,solve2Linear:rN};const oN=o_,aN=t=>oN(t.vertices);var cN=aN;const lN=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});var uN=lN;const fN=uN,hN=t=>{const e=t.vertices.slice().reverse();return fN(e)};var dN=hN;const pN=cN,mN=dN,gN=(t,e)=>{if(t.length===0)return 0;const n=e.vertices;return n.length<3?0:(pN(e)<0&&(e=mN(e)),t.reduce((s,r)=>s+_N(r,n),0)===t.length?1:0)},_N=(t,e)=>{const n=e.length,i=t[0],s=t[1];let r=e[n-1],o=e[0],a=r[1]>s,c=0,l=0;for(let u=n+1;--u;){const f=o[1]>s;if(a!==f){const h=r[0]>i,d=o[0]>i;(h&&d||o[0]-(o[1]-s)*(r[0]-o[0])/(r[1]-o[1])>=i)&&(c=!c)}a=f,r=o,o=e[++l]}return c};var vN=gN,xN={arePointsInside:vN};const{area:yN}=oc,{toOutlines:MN}=ut,{arePointsInside:EN}=xN,SN=t=>{const e=MN(t),n=[],i=[];e.forEach((o,a)=>{const c=yN(o);c<0?i.push(a):c>0&&n.push(a)});const s=[],r=[];return n.forEach((o,a)=>{const c=e[o];s[a]=[],i.forEach((l,u)=>{const f=e[l];EN([f[0]],{vertices:c})&&(s[a].push(l),r[u]||(r[u]=[]),r[u].push(a))})}),i.forEach((o,a)=>{if(r[a]&&r[a].length>1){const c=bN(r[a],l=>s[l].length);r[a].forEach((l,u)=>{u!==c&&(s[l]=s[l].filter(f=>f!==o))})}}),s.map((o,a)=>({solid:e[n[a]],holes:o.map(c=>e[c])}))},bN=(t,e)=>{let n,i;return t.forEach((s,r)=>{const o=e(s);(i===void 0||o<i)&&(n=r,i=o)}),n};var TN=SN;const wN=ut,Fp=$i,AN=Ge,Pt=Be,RN=e_,CN=TN;let PN=class{constructor(e){this.plane=RN(e);const n=Pt.orthogonal(Pt.create(),this.plane),i=Pt.cross(Pt.create(),this.plane,n);this.v=Pt.normalize(i,i),this.u=Pt.cross(Pt.create(),this.v,this.plane),this.basisMap=new Map;const s=e.edges.map(o=>o.map(a=>this.to2D(a))),r=wN.create(s);this.roots=CN(r)}to2D(e){const n=AN.fromValues(Pt.dot(e,this.u),Pt.dot(e,this.v));return this.basisMap.set(n,e),n}to3D(e){const n=this.basisMap.get(e);if(n)return n;{console.log("Warning: point not in original slice");const i=Pt.scale(Pt.create(),this.u,e[0]),s=Pt.scale(Pt.create(),this.v,e[1]),r=Pt.scale(Pt.create(),Fp,Fp[3]),o=Pt.add(i,i,r);return Pt.add(s,s,o)}}};var LN=PN;const DN=Qe,UN=JI,IN=LN,NN=t=>{const e=new IN(t),n=[];return e.roots.forEach(({solid:i,holes:s})=>{let r=i.length;const o=[];s.forEach((f,h)=>{o.push(r),r+=f.length});const a=[i,...s].flat(),c=a.flat(),l=f=>e.to3D(a[f]),u=UN(c,o);for(let f=0;f<u.length;f+=3){const h=u.slice(f,f+3).map(l);n.push(DN.fromPointsAndPlane(h,e.plane))}}),n};var FN=NN;const Op=Be,ON=t=>t.reduce((e,n)=>e+=`[${Op.toString(n[0])}, ${Op.toString(n[1])}], `,""),BN=t=>`[${ON(t.edges)}]`;var zN=BN;const ra=Be,HN=Ms,VN=(t,e)=>{const n=e.edges.map(i=>[ra.transform(ra.create(),i[0],t),ra.transform(ra.create(),i[1],t)]);return HN(n)};var $N=VN,ju={calculatePlane:e_,clone:QU,create:Ms,equals:nI,fromPoints:rI,fromSides:cI,isA:uI,reverse:dI,toEdges:mI,toPolygons:FN,toString:zN,transform:$N};const Bp=Be,GN=Ms,kN=t=>{if(!t.edges)return t;let e=t.edges;const n=new Map,i=new Map;e=e.filter(o=>!Bp.equals(o[0],o[1])),e.forEach(o=>{const a=o[0].toString(),c=o[1].toString();n.set(a,o[0]),n.set(c,o[1]),i.set(a,(i.get(a)||0)+1),i.set(c,(i.get(c)||0)-1)});const s=[],r=[];return i.forEach((o,a)=>{o<0&&s.push(a),o>0&&r.push(a)}),s.forEach(o=>{const a=n.get(o);let c=1/0,l;r.forEach(u=>{const f=n.get(u),h=Bp.distance(a,f);h<c&&(c=h,l=f)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${l} distance ${c}`),e=e.map(u=>u[0].toString()===o?[l,u[1]]:u[1].toString()===o?[u[0],l]:u)}),GN(e)};var WN=kN;const{EPS:zp}=Ye,Vs=Be,oa=Qe,Hp=ju,hu=(t,e)=>t===e?t:t<e?hu(e,t):e===1?1:e===0?t:hu(e,t%e),XN=(t,e)=>t*e/hu(t,e),Vp=(t,e)=>{const n=t/e.length;if(n===1)return e;const i=Vs.fromValues(n,n,n),s=[];return e.forEach(r=>{const o=Vs.subtract(Vs.create(),r[1],r[0]);Vs.divide(o,o,i);let a=r[0];for(let c=1;c<=n;++c){const l=Vs.add(Vs.create(),a,o);s.push([a,l]),a=l}}),s},$p=zp*zp/2*Math.sin(Math.PI/3),qN=(t,e)=>{let n=Hp.toEdges(t),i=Hp.toEdges(e);if(n.length!==i.length){const r=XN(n.length,i.length);r!==n.length&&(n=Vp(r,n)),r!==i.length&&(i=Vp(r,i))}const s=[];return n.forEach((r,o)=>{const a=i[o],c=oa.create([r[0],r[1],a[1]]),l=oa.measureArea(c);Number.isFinite(l)&&l>$p&&s.push(c);const u=oa.create([r[0],a[1],a[0]]),f=oa.measureArea(u);Number.isFinite(f)&&f>$p&&s.push(u)}),s};var YN=qN;const Gp=ft,kp=ut,jN=lt,du=Qe,Li=ju,ZN=WN,Wp=YN,KN=(t,e,n)=>{let i=null;return kp.isA(n)&&(i=Li.fromSides(kp.toSides(n))),du.isA(n)&&(i=Li.fromPoints(du.toPoints(n))),t===0||t===1?Li.transform(Gp.fromTranslation(Gp.create(),[0,0,t]),i):null},JN=(t,e)=>{const n={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:KN},{numberOfSlices:i,capStart:s,capEnd:r,close:o,repair:a,callback:c}=Object.assign({},n,t);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=ZN(e));const l=i-1;let u=null,f=null,h=null,d=[];for(let _=0;_<i;_++){const g=c(_/l,_,e);if(g){if(!Li.isA(g))throw new Error("the callback function must return slice objects");if(Li.toEdges(g).length===0)throw new Error("the callback function must return slices with one or more edges");h&&(d=d.concat(Wp(h,g))),_===0&&(u=g),_===i-1&&(f=g),h=g}}if(r){const _=Li.toPolygons(f);d=d.concat(_)}if(s){const _=Li.toPolygons(u).map(du.invert);d=d.concat(_)}return!s&&!r&&o&&!Li.equals(f,u)&&(d=d.concat(Wp(f,u))),jN.create(d)};var QN=JN;const{TAU:an}=Ye,Lr=ft,{mirrorX:eF}=Hr,aa=ut,Cl=ju,tF=QN,nF=(t,e)=>{const n={segments:12,startAngle:0,angle:an,overflow:"cap"};let{segments:i,startAngle:s,angle:r,overflow:o}=Object.assign({},n,t);if(i<3)throw new Error("segments must be greater then 3");s=Math.abs(s)>an?s%an:s,r=Math.abs(r)>an?r%an:r;let a=s+r;if(a=Math.abs(a)>an?a%an:a,a<s){const S=s;s=a,a=S}let c=a-s;if(c<=0&&(c=an),Math.abs(c)<an){const S=an/i;i=Math.floor(Math.abs(c)/S),Math.abs(c)>i*S&&i++}let l=aa.toSides(e);if(l.length===0)throw new Error("the given geometry cannot be empty");const u=l.filter(S=>S[0][0]<0),f=l.filter(S=>S[0][0]>=0);u.length>0&&f.length>0&&o==="cap"&&(u.length>f.length?(l=l.map(S=>{let y=S[0],x=S[1];return y=[Math.min(y[0],0),y[1]],x=[Math.min(x[0],0),x[1]],[y,x]}),e=aa.create(l),e=eF(e)):f.length>=u.length&&(l=l.map(S=>{let y=S[0],x=S[1];return y=[Math.max(y[0],0),y[1]],x=[Math.max(x[0],0),x[1]],[y,x]}),e=aa.create(l)));const d=c/i,_=Math.abs(c)<an,g=Cl.fromSides(aa.toSides(e));Cl.reverse(g,g);const m=Lr.create(),p=(S,y,x)=>{let M=d*y+s;return c===an&&y===i&&(M=s),Lr.multiply(m,Lr.fromZRotation(m,M),Lr.fromXRotation(Lr.create(),an/4)),Cl.transform(m,x)};return t={numberOfSlices:i+1,capStart:_,capEnd:_,close:!_,callback:p},tF(t,g)};var iF=nF;const sF=bn,Xp=ft,qp=ut,Yp=lt,jp=Sn,ac=(t,...e)=>{if(!Array.isArray(t))throw new Error("angles must be an array");if(e=sF(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=t[2],i=t[1],s=t[0],r=Xp.fromTaitBryanRotation(Xp.create(),n,i,s),o=e.map(a=>jp.isA(a)?jp.transform(r,a):qp.isA(a)?qp.transform(r,a):Yp.isA(a)?Yp.transform(r,a):a);return o.length===1?o[0]:o},rF=(t,...e)=>ac([t,0,0],e),oF=(t,...e)=>ac([0,t,0],e),aF=(t,...e)=>ac([0,0,t],e);var $r={rotate:ac,rotateX:rF,rotateY:oF,rotateZ:aF};const cF=bn,Zp=ft,Kp=ut,Jp=lt,Qp=Sn,cc=(t,...e)=>{if(!Array.isArray(t))throw new Error("offset must be an array");if(e=cF(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);const n=Zp.fromTranslation(Zp.create(),t),i=e.map(s=>Qp.isA(s)?Qp.transform(n,s):Kp.isA(s)?Kp.transform(n,s):Jp.isA(s)?Jp.transform(n,s):s);return i.length===1?i[0]:i},lF=(t,...e)=>cc([t,0,0],e),uF=(t,...e)=>cc([0,t,0],e),fF=(t,...e)=>cc([0,0,t],e);var xt={translate:cc,translateX:lF,translateY:uF,translateZ:fF};const{TAU:hF}=Ye,dF=iF,{rotate:pF}=$r,{translate:mF}=xt,gF=D0,{isGT:Pl,isGTE:Ll}=bt,_F=t=>{const e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:hF},{innerRadius:n,innerSegments:i,outerRadius:s,outerSegments:r,innerRotation:o,startAngle:a,outerRotation:c}=Object.assign({},e,t);if(!Pl(n,0))throw new Error("innerRadius must be greater than zero");if(!Ll(i,3))throw new Error("innerSegments must be three or more");if(!Pl(s,0))throw new Error("outerRadius must be greater than zero");if(!Ll(r,3))throw new Error("outerSegments must be three or more");if(!Ll(a,0))throw new Error("startAngle must be positive");if(!Pl(c,0))throw new Error("outerRotation must be greater than zero");if(n>=s)throw new Error("inner circle is too large to rotate about the outer circle");let l=gF({radius:n,segments:i});return o!==0&&(l=pF([0,0,o],l)),l=mF([s,0],l),dF({startAngle:a,angle:c,segments:r},l)};var vF=_F;const{NEPS:fr}=Ye,Dr=Ge,xF=ut,{isNumberArray:yF}=bt,pu=(t,e,n)=>Math.acos((t*t+e*e-n*n)/(2*t*e)),MF=(t,e,n)=>e>fr?Math.sqrt(t*t+n*n-2*t*n*Math.cos(e)):Math.sqrt((t-n)*(t-n)+t*n*e*e*(1-e*e/12)),EF=t=>{if(Math.abs(t[0]+t[1]+t[2]-Math.PI)>fr)throw new Error("AAA triangles require angles that sum to PI");const n=t[0],i=t[1],s=Math.PI-n-i,r=1,o=r/Math.sin(s)*Math.sin(n),a=r/Math.sin(s)*Math.sin(i);return xr(n,i,s,o,a,r)},SF=t=>{const e=t[0],n=t[1],i=Math.PI+fr-e-n;if(i<fr)throw new Error("AAS triangles require angles that sum to PI");const s=t[2],r=s/Math.sin(e)*Math.sin(n),o=s/Math.sin(e)*Math.sin(i);return xr(e,n,i,s,r,o)},bF=t=>{const e=t[0],n=t[2],i=Math.PI+fr-e-n;if(i<fr)throw new Error("ASA triangles require angles that sum to PI");const s=t[1],r=s/Math.sin(i)*Math.sin(e),o=s/Math.sin(i)*Math.sin(n);return xr(e,n,i,r,o,s)},TF=t=>{const e=t[0],n=t[1],i=t[2],s=MF(e,n,i),r=pu(s,e,i),o=Math.PI-r-n;return xr(r,n,o,i,s,e)},wF=t=>{const e=t[0],n=t[1],i=t[2],s=Math.asin(n*Math.sin(i)/e),r=Math.PI-s-i,o=e/Math.sin(i)*Math.sin(r);return xr(s,r,i,n,o,e)},AF=t=>{const e=t[1],n=t[2],i=t[0];if(e+n<=i||n+i<=e||i+e<=n)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");const s=pu(n,i,e),r=pu(i,e,n),o=Math.PI-s-r;return xr(s,r,o,e,n,i)},xr=(t,e,n,i,s,r)=>{const o=Dr.fromValues(0,0),a=Dr.fromValues(r,0),c=Dr.fromValues(i,0);return Dr.add(c,Dr.rotate(c,c,[0,0],Math.PI-e),a),xF.fromPoints([o,a,c])},RF=t=>{const e={type:"SSS",values:[1,1,1]};let{type:n,values:i}=Object.assign({},e,t);if(typeof n!="string")throw new Error("triangle type must be a string");if(n=n.toUpperCase(),!((n[0]==="A"||n[0]==="S")&&(n[1]==="A"||n[1]==="S")&&(n[2]==="A"||n[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!yF(i,3))throw new Error("triangle values must contain three values");if(!i.every(s=>s>0))throw new Error("triangle values must be greater than zero");switch(n){case"AAA":return EF(i);case"AAS":return SF(i);case"ASA":return bF(i);case"SAS":return TF(i);case"SSA":return wF(i);case"SSS":return AF(i);default:throw new Error("invalid triangle type, try again")}};var CF=RF,cn={arc:qC,circle:D0,cube:WD,cuboid:Xu,cylinder:j0,cylinderElliptic:Y0,ellipse:L0,ellipsoid:Z0,geodesicSphere:lU,line:hU,polygon:pU,polyhedron:K0,rectangle:qu,roundedCuboid:MU,roundedCylinder:AU,roundedRectangle:PU,sphere:IU,square:BU,star:kU,torus:vF,triangle:CF};const PF=ut,LF=lt,DF=Sn,UF=t=>{let e;for(const n of t){let i=0;if(PF.isA(n)&&(i=1),LF.isA(n)&&(i=2),DF.isA(n)&&(i=3),e&&i!==e)return!1;e=i}return!0};var IF=UF,Zu={geom2:ut,geom3:lt,path2:Sn,poly3:Qe};const{EPS:NF}=Ye,FF=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return NF*n/e};var OF=FF;const BF=bn,Xn=Ge,Ur=Be,a_=ut,c_=lt,l_=Sn,em=Qe,hr=new WeakMap,zF=t=>{let e=hr.get(t);if(e)return e;const n=l_.toPoints(t);let i;n.length===0?i=Xn.create():i=Xn.clone(n[0]);let s=Xn.clone(i);return n.forEach(r=>{Xn.min(i,i,r),Xn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],hr.set(t,e),e},HF=t=>{let e=hr.get(t);if(e)return e;const n=a_.toPoints(t);let i;n.length===0?i=Xn.create():i=Xn.clone(n[0]);let s=Xn.clone(i);return n.forEach(r=>{Xn.min(i,i,r),Xn.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],hr.set(t,e),e},VF=t=>{let e=hr.get(t);if(e)return e;const n=c_.toPolygons(t);let i=Ur.create();if(n.length>0){const r=em.toPoints(n[0]);Ur.copy(i,r[0])}let s=Ur.clone(i);return n.forEach(r=>{em.toPoints(r).forEach(o=>{Ur.min(i,i,o),Ur.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],hr.set(t,e),e},$F=(...t)=>{if(t=BF(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>l_.isA(n)?zF(n):a_.isA(n)?HF(n):c_.isA(n)?VF(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};var Ku=$F;const GF=bn,{geom2:kF,geom3:WF,path2:XF}=Zu,Ju=OF,Qu=Ku,qF=t=>Ju(Qu(t),2),YF=t=>Ju(Qu(t),2),jF=t=>Ju(Qu(t),3),ZF=(...t)=>{if(t=GF(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>XF.isA(n)?qF(n):kF.isA(n)?YF(n):WF.isA(n)?jF(n):0);return e.length===1?e[0]:e};var ef=ZF;const tm=Ge,KF=ut,JF=(t,e)=>{if(e.vertices.length<4)return null;const n=[],i=e.vertices.filter((o,a)=>o[2]>0?(n.push(a),!0):!1);if(i.length!==2)throw new Error("Assertion failed: fromFakePolygon: not enough points found");const s=i.map(o=>{const a=Math.round(o[0]/t)*t+0,c=Math.round(o[1]/t)*t+0;return tm.fromValues(a,c)});if(tm.equals(s[0],s[1]))return null;const r=n[1]-n[0];if(r===1||r===3)r===1&&s.reverse();else throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");return s},QF=(t,e)=>{const n=e.map(i=>JF(t,i)).filter(i=>i!==null);return KF.create(n)};var eO=QF;const wi=Be,tO=ut,nO=lt,iO=Qe,sO=(t,e,n)=>{const i=[wi.fromVec2(wi.create(),n[0],t),wi.fromVec2(wi.create(),n[1],t),wi.fromVec2(wi.create(),n[1],e),wi.fromVec2(wi.create(),n[0],e)];return iO.create(i)},rO=(t,e)=>{const i=tO.toSides(e).map(r=>sO(t.z0,t.z1,r));return nO.create(i)};var oO=rO;const aO=()=>[0,1,0];var tf=aO;const cO=tf,lO=t=>{const e=cO();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};var uO=lO;const Dl=Ge,fO=t=>{const e=Dl.normal(Dl.create(),t);return Dl.negate(e,e),e};var nf=fO;const nm=Ge,hO=t=>nm.scale(nm.create(),t,t[2]);var lc=hO;const Ir=Ge,dO=nf,pO=lc,mO=(t,e)=>{const n=pO(t),i=dO(t),s=Ir.subtract(Ir.create(),e,n),r=Ir.dot(s,i);return Ir.scale(s,i,r),Ir.add(s,s,n),s};var gO=mO;const _O=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);var u_=_O;const vO=Ge,xO=(t,e)=>{let n=vO.dot(e,t);return n=Math.abs(n-t[2]),n};var yO=xO;const MO=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];var EO=MO;const Nr=Ge,SO=(t,e,n)=>{const i=Nr.subtract(Nr.create(),n,e);Nr.normal(i,i),Nr.normalize(i,i);const s=Nr.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};var f_=SO;const bO=tf,TO=(t,e,n)=>{const i=bO();return i[0]=t,i[1]=e,i[2]=n,i};var h_=TO;const wO=Ge,{solve2Linear:AO}=oc,RO=(t,e)=>{const n=AO(t[0],t[1],e[0],e[1],t[2],e[2]);return wO.clone(n)};var CO=RO;const im=Ge,PO=u_,LO=h_,DO=(t,e)=>{const n=im.negate(im.create(),e),i=-e[2];return PO(t,LO(n[0],n[1],i))};var UO=DO;const IO=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;var NO=IO;const sm=Ge,FO=f_,OO=lc,BO=nf,zO=(t,e,n)=>{const i=OO(e),s=BO(e);return sm.transform(i,i,n),sm.transform(s,s,n),FO(t,i,s)};var HO=zO;const VO=lc,$O=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=VO(t)[0]),n};var GO=$O,kO={clone:uO,closestPoint:gO,copy:u_,create:tf,direction:nf,distanceToPoint:yO,equals:EO,fromPoints:f_,fromValues:h_,intersectPointOfLines:CO,origin:lc,reverse:UO,toString:NO,transform:HO,xAtY:GO};const rm=ft,WO=Ge,yt=Be,d_=function(t,e){arguments.length<2&&(e=yt.orthogonal(yt.create(),t)),this.v=yt.normalize(yt.create(),yt.cross(yt.create(),t,e)),this.u=yt.cross(yt.create(),this.v,t),this.plane=t,this.planeorigin=yt.scale(yt.create(),t,t[3])};d_.prototype={getProjectionMatrix:function(){return rm.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){const t=yt.scale(yt.create(),this.plane,this.plane[3]);return rm.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return WO.fromValues(yt.dot(t,this.u),yt.dot(t,this.v))},to3D:function(t){const e=yt.scale(yt.create(),this.u,t[0]),n=yt.scale(yt.create(),this.v,t[1]),i=yt.add(e,e,this.planeorigin);return yt.add(n,n,i)}};var XO=d_;const qO=(t,e)=>t-e;var YO=qO;const jO=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){const r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};var ZO=jO;const{TAU:W4}=Ye;var KO={fnNumberSort:YO,insertSorted:ZO};const{EPS:ai}=Ye,Ai=kO,Pn=Ge,JO=XO,$s=iN,{insertSorted:QO,fnNumberSort:eB}=KO,om=Qe,tB=t=>{if(t.length<2)return t;const e=[],n=t.length,i=om.plane(t[0]),s=new JO(i),r=[],o=[],a=new Map,c=new Map,l=new Map,u=10/ai;for(let _=0;_<n;_++){const g=t[_];let m=[],p=g.vertices.length,S=-1;if(p>0){let y,x;for(let M=0;M<p;M++){let E=s.to2D(g.vertices[M]);const w=Math.floor(E[1]*u);let L;l.has(w)?L=l.get(w):l.has(w+1)?L=l.get(w+1):l.has(w-1)?L=l.get(w-1):(L=E[1],l.set(w,E[1])),E=Pn.fromValues(E[0],L),m.push(E);const v=E[1];(M===0||v<y)&&(y=v,S=M),(M===0||v>x)&&(x=v);let T=c.get(v);T||(T={},c.set(v,T)),T[_]=!0}if(y>=x)m=[],p=0,S=-1;else{let M=a.get(y);M||(M=[],a.set(y,M)),M.push(_)}}m.reverse(),S=p-S-1,r.push(m),o.push(S)}const f=[];c.forEach((_,g)=>f.push(g)),f.sort(eB);let h=[],d=[];for(let _=0;_<f.length;_++){const g=[],m=f[_],p=c.get(m);for(let y=0;y<h.length;++y){const x=h[y],M=x.polygonindex;if(p[M]){const E=r[M],w=E.length;let L=x.leftvertexindex,v=x.rightvertexindex;for(;;){let N=L+1;if(N>=w&&(N=0),E[N][1]!==m)break;L=N}let T=v-1;if(T<0&&(T=w-1),E[T][1]===m&&(v=T),L!==x.leftvertexindex&&L===v)h.splice(y,1),--y;else{x.leftvertexindex=L,x.rightvertexindex=v,x.topleft=E[L],x.topright=E[v];let N=L+1;N>=w&&(N=0),x.bottomleft=E[N];let U=v-1;U<0&&(U=w-1),x.bottomright=E[U]}}}let S;if(_>=f.length-1)h=[],S=null;else{S=Number(f[_+1]);const y=.5*(m+S),x=a.get(m);for(const M in x){const E=x[M],w=r[E],L=w.length,v=o[E];let T=v;for(;;){let B=T+1;if(B>=L&&(B=0),w[B][1]!==m||B===v)break;T=B}let N=v;for(;;){let B=N-1;if(B<0&&(B=L-1),w[B][1]!==m||B===T)break;N=B}let U=T+1;U>=L&&(U=0);let I=N-1;I<0&&(I=L-1);const F={polygonindex:E,leftvertexindex:T,rightvertexindex:N,topleft:w[T],topright:w[N],bottomleft:w[U],bottomright:w[I]};QO(h,F,(B,H)=>{const G=$s(B.topleft,B.bottomleft,y),W=$s(H.topleft,H.bottomleft,y);return G>W?1:G<W?-1:0})}}for(const y in h){const x=h[y];let M=$s(x.topleft,x.bottomleft,m);const E=Pn.fromValues(M,m);M=$s(x.topright,x.bottomright,m);const w=Pn.fromValues(M,m);M=$s(x.topleft,x.bottomleft,S);const L=Pn.fromValues(M,S);M=$s(x.topright,x.bottomright,S);const v=Pn.fromValues(M,S),T={topleft:E,topright:w,bottomleft:L,bottomright:v,leftline:Ai.fromPoints(Ai.create(),E,L),rightline:Ai.fromPoints(Ai.create(),v,w)};if(g.length>0){const N=g[g.length-1],U=Pn.distance(T.topleft,N.topright),I=Pn.distance(T.bottomleft,N.bottomright);U<ai&&I<ai&&(T.topleft=N.topleft,T.leftline=N.leftline,T.bottomleft=N.bottomleft,g.splice(g.length-1,1))}g.push(T)}if(_>0){const y=new Set,x=new Set;for(let M=0;M<g.length;M++){const E=g[M];for(let w=0;w<d.length;w++)if(!x.has(w)){const L=d[w];if(Pn.distance(L.bottomleft,E.topleft)<ai&&Pn.distance(L.bottomright,E.topright)<ai){x.add(w);const v=Ai.direction(E.leftline),T=Ai.direction(L.leftline),N=v[0]-T[0],U=Ai.direction(E.rightline),I=Ai.direction(L.rightline),F=U[0]-I[0],B=Math.abs(N)<ai,H=Math.abs(F)<ai,G=B||N>=0,W=H||F>=0;G&&W&&(E.outpolygon=L.outpolygon,E.leftlinecontinues=B,E.rightlinecontinues=H,y.add(w));break}}}for(let M=0;M<d.length;M++)if(!y.has(M)){const E=d[M];E.outpolygon.rightpoints.push(E.bottomright),Pn.distance(E.bottomright,E.bottomleft)>ai&&E.outpolygon.leftpoints.push(E.bottomleft),E.outpolygon.leftpoints.reverse();const L=E.outpolygon.rightpoints.concat(E.outpolygon.leftpoints).map(T=>s.to3D(T)),v=om.fromPointsAndPlane(L,i);v.vertices.length&&e.push(v)}}for(let y=0;y<g.length;y++){const x=g[y];x.outpolygon?(x.leftlinecontinues||x.outpolygon.leftpoints.push(x.topleft),x.rightlinecontinues||x.outpolygon.rightpoints.push(x.topright)):(x.outpolygon={leftpoints:[],rightpoints:[]},x.outpolygon.leftpoints.push(x.topleft),Pn.distance(x.topleft,x.topright)>ai&&x.outpolygon.rightpoints.push(x.topright))}d=g}return e};var nB=tB;const am=lt,iB=Qe,{NEPS:sB}=Ye,rB=nB,oB=t=>{if(t.isRetesselated)return t;const e=am.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:iB.plane(r),index:o})),n=aB(e),i=[];n.forEach(r=>{if(Array.isArray(r)){const o=rB(r);i.push(...o)}else i.push(r)});const s=am.create(i);return s.isRetesselated=!0,s},aB=t=>{let e=[t];const n=[];for(let s=3;s>=0;s--){const r=[],o=s===3?15e-9:sB;e.forEach(a=>{a.sort(cB(s,o));let c=0;for(let l=1;l<a.length;l++)a[l].plane[s]-a[c].plane[s]>o&&(l-c===1?n.push(a[c]):r.push(a.slice(c,l)),c=l);a.length-c===1?n.push(a[c]):r.push(a.slice(c))}),e=r}const i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},cB=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;var p_=oB;const{EPS:Gs}=Ye,cm=Ku,lB=(t,e)=>{if(t.polygons.length===0||e.polygons.length===0)return!1;const n=cm(t),i=n[0],s=n[1],r=cm(e),o=r[0],a=r[1];return!(o[0]-s[0]>Gs||i[0]-a[0]>Gs||o[1]-s[1]>Gs||i[1]-a[1]>Gs||o[2]-s[2]>Gs||i[2]-a[2]>Gs)};var uB=lB;const lm=$i,fB=Qe;let hB=class mu{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygontreenodes=[],this.parent=e}invert(){const e=[this];let n;for(let i=0;i<e.length;i++){n=e[i],n.plane&&(n.plane=lm.flip(lm.create(),n.plane)),n.front&&e.push(n.front),n.back&&e.push(n.back);const s=n.front;n.front=n.back,n.back=s}}clipPolygons(e,n){let i={node:this,polygontreenodes:e},s;const r=[];do{if(s=i.node,e=i.polygontreenodes,s.plane){const o=s.plane,a=[],c=[],l=n?a:c,u=e.length;for(let h=0;h<u;h++){const d=e[h];d.isRemoved()||d.splitByPlane(o,l,a,c,a)}s.front&&c.length>0&&r.push({node:s.front,polygontreenodes:c});const f=a.length;if(s.back&&f>0)r.push({node:s.back,polygontreenodes:a});else for(let h=0;h<f;h++)a[h].remove()}i=r.pop()}while(i!==void 0)}clipTo(e,n){let i=this;const s=[];do i.polygontreenodes.length>0&&e.rootnode.clipPolygons(i.polygontreenodes,n),i.front&&s.push(i.front),i.back&&s.push(i.back),i=s.pop();while(i!==void 0)}addPolygonTreeNodes(e){let n={node:this,polygontreenodes:e};const i=[];do{const s=n.node,r=n.polygontreenodes;if(r.length===0){n=i.pop();continue}if(!s.plane){let l=0;l=Math.floor(r.length/2);const u=r[l].getPolygon();s.plane=fB.plane(u)}const o=[],a=[],c=r.length;for(let l=0;l<c;++l)r[l].splitByPlane(s.plane,s.polygontreenodes,a,o,a);o.length>0&&(s.front||(s.front=new mu(s)),c===o.length&&a.length===0?s.front.polygontreenodes=o:i.push({node:s.front,polygontreenodes:o})),a.length>0&&(s.back||(s.back=new mu(s)),c===a.length&&o.length===0?s.back.polygontreenodes=a:i.push({node:s.back,polygontreenodes:a})),n=i.pop()}while(n!==void 0)}};var dB=hB;const ks=Be,pB=(t,e,n)=>{const i=ks.subtract(ks.create(),n,e);let s=(t[3]-ks.dot(t,e))/ks.dot(t,i);return Number.isNaN(s)&&(s=0),s>1&&(s=1),s<0&&(s=0),ks.scale(i,i,s),ks.add(i,e,i),i};var mB=pB;const{EPS:ca}=Ye,gB=$i,la=Be,Ul=Qe,_B=mB,vB=(t,e)=>{const n={type:null,front:null,back:null},i=e.vertices,s=i.length,r=Ul.plane(e);if(gB.equals(r,t))n.type=0;else{let o=!1,a=!1;const c=[],l=-ca;for(let u=0;u<s;u++){const f=la.dot(t,i[u])-t[3],h=f<l;c.push(h),f>ca&&(o=!0),f<l&&(a=!0)}if(!o&&!a){const u=la.dot(t,r);n.type=u>=0?0:1}else if(!a)n.type=2;else if(!o)n.type=3;else{n.type=4;const u=[],f=[];let h=c[0];for(let _=0;_<s;_++){const g=i[_];let m=_+1;m>=s&&(m=0);const p=c[m];if(h===p)h?f.push(g):u.push(g);else{const S=i[m],y=_B(t,g,S);h?(f.push(g),f.push(y),u.push(y)):(u.push(g),u.push(y),f.push(y))}h=p}const d=ca*ca;if(f.length>=3){let _=f[f.length-1];for(let g=0;g<f.length;g++){const m=f[g];la.squaredDistance(m,_)<d&&(f.splice(g,1),g--),_=m}}if(u.length>=3){let _=u[u.length-1];for(let g=0;g<u.length;g++){const m=u[g];la.squaredDistance(m,_)<d&&(u.splice(g,1),g--),_=m}}u.length>=3&&(n.front=Ul.fromPointsAndPlane(u,r)),f.length>=3&&(n.back=Ul.fromPointsAndPlane(f,r))}}return n};var xB=vB;const{EPS:yB}=Ye,MB=Be,um=Qe,EB=xB;let SB=class m_{constructor(e,n){this.parent=e,this.children=[],this.polygon=n,this.removed=!1}addPolygons(e){if(!this.isRootNode())throw new Error("Assertion failed");const n=this;e.forEach(i=>{n.addChild(i)})}remove(){if(!this.removed){this.removed=!0,this.polygon=null;const e=this.parent.children,n=e.indexOf(this);if(n<0)throw new Error("Assertion failed");e.splice(n,1),this.parent.recursivelyInvalidatePolygon()}}isRemoved(){return this.removed}isRootNode(){return!this.parent}invert(){if(!this.isRootNode())throw new Error("Assertion failed");this.invertSub()}getPolygon(){if(!this.polygon)throw new Error("Assertion failed");return this.polygon}getPolygons(e){let n=[this];const i=[n];let s,r,o,a;for(s=0;s<i.length;++s)for(n=i[s],r=0,o=n.length;r<o;r++)a=n[r],a.polygon?e.push(a.polygon):a.children.length>0&&i.push(a.children)}splitByPlane(e,n,i,s,r){if(this.children.length){const o=[this.children];let a,c,l,u,f;for(a=0;a<o.length;a++)for(f=o[a],c=0,l=f.length;c<l;c++)u=f[c],u.children.length>0?o.push(u.children):u._splitByPlane(e,n,i,s,r)}else this._splitByPlane(e,n,i,s,r)}_splitByPlane(e,n,i,s,r){const o=this.polygon;if(o){const a=um.measureBoundingSphere(o),c=a[3]+yB,l=a,u=MB.dot(e,l)-e[3];if(u>c)s.push(this);else if(u<-c)r.push(this);else{const f=EB(e,o);switch(f.type){case 0:n.push(this);break;case 1:i.push(this);break;case 2:s.push(this);break;case 3:r.push(this);break;case 4:if(f.front){const h=this.addChild(f.front);s.push(h)}if(f.back){const h=this.addChild(f.back);r.push(h)}break}}}}addChild(e){const n=new m_(this,e);return this.children.push(n),n}invertSub(){let e=[this];const n=[e];let i,s,r,o;for(i=0;i<n.length;i++)for(e=n[i],s=0,r=e.length;s<r;s++)o=e[s],o.polygon&&(o.polygon=um.invert(o.polygon)),o.children.length>0&&n.push(o.children)}recursivelyInvalidatePolygon(){this.polygon=null,this.parent&&this.parent.recursivelyInvalidatePolygon()}clear(){let e=[this];const n=[e];for(let i=0;i<n.length;++i){e=n[i];const s=e.length;for(let r=0;r<s;r++){const o=e[r];o.polygon&&(o.polygon=null),o.parent&&(o.parent=null),o.children.length>0&&n.push(o.children),o.children=[]}}}toString(){let e="",n=[this];const i=[n];let s,r,o,a;for(s=0;s<i.length;++s){n=i[s];const c=" ".repeat(s);for(r=0,o=n.length;r<o;r++)a=n[r],e+=`${c}PolygonTreeNode (${a.isRootNode()}): ${a.children.length}`,a.polygon?e+=`
 ${c}polygon: ${a.polygon.vertices}
`:e+=`
`,a.children.length>0&&i.push(a.children)}return e}};var bB=SB;const TB=dB,wB=bB;let AB=class{constructor(e){this.polygonTree=new wB,this.rootnode=new TB(null),e&&this.addPolygons(e)}invert(){this.polygonTree.invert(),this.rootnode.invert()}clipTo(e,n=!1){this.rootnode.clipTo(e,n)}allPolygons(){const e=[];return this.polygonTree.getPolygons(e),e}addPolygons(e){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=this.polygonTree.addChild(e[i]);this.rootnode.addPolygonTreeNodes(n)}clear(){this.polygonTree.clear()}toString(){return"Tree: "+this.polygonTree.toString("")}};var RB=AB,sf={Tree:RB};const ua=lt,CB=uB,{Tree:fm}=sf,PB=(t,e)=>{if(!CB(t,e))return ua.clone(t);const n=new fm(ua.toPolygons(t)),i=new fm(ua.toPolygons(e));n.invert(),n.clipTo(i),i.clipTo(n,!0),n.addPolygons(i.allPolygons()),n.invert();const s=n.allPolygons();return ua.create(s)};var LB=PB;const DB=bn,UB=p_,IB=LB,NB=(...t)=>{t=DB(t);let e=t.shift();return t.forEach(n=>{e=IB(e,n)}),e=UB(e),e};var g_=NB;const FB=bn,OB=lt,BB=ef,zB=eO,HB=oO,VB=g_,$B=(...t)=>{t=FB(t);const e=t.map(s=>HB({z0:-1,z1:1},s)),n=VB(e),i=BB(n);return zB(i,OB.toPolygons(n))};var GB=$B;const kB=bn,WB=IF,XB=ut,qB=lt,YB=GB,jB=g_,ZB=(...t)=>{if(t=kB(t),t.length===0)throw new Error("wrong number of arguments");if(!WB(t))throw new Error("only subtract of the types are supported");const e=t[0];return XB.isA(e)?YB(t):qB.isA(e)?jB(t):e};var KB=ZB;const fa=WT(KB);function JB({width:t,depth:e,safety:n=0,bottomHeight:i=15,topHeight:s=25,borderThickness:r=2.5,enableBackHole:o=!1,backHoleXOffset:a=0,backHoleWidth:c=55,backHoleHeight:l=10,enableFrontHole:u=!0,frontHoleXOffset:f=20,frontHoleWidth:h=100,frontHoleHeight:d=15,enableLeftHole:_=!0,leftHoleYOffset:g=-20,leftHoleWidth:m=55,leftHoleHeight:p=10,enableRightHole:S=!1,rightHoleYOffset:y=0,rightHoleWidth:x=55,rightHoleHeight:M=10}){const E=r*2,w=t+n,L=e+n,v=-i/2,T=xt.translate([0,L/2+r/2,v],cn.cuboid({size:[w+E,r,i]})),N=xt.translate([0,-L/2-r/2,v],cn.cuboid({size:[w+E,r,i]})),U=xt.translate([w/2+r/2,0,v],cn.cuboid({size:[r,L+E,i]})),I=xt.translate([-w/2-r/2,0,v],cn.cuboid({size:[r,L+E,i]}));let F=N;if(o){const A=cn.cuboid({size:[c,r+E,l]}),ue=xt.translate([a,-L/2-r/2,-i+l/2],A);F=fa(N,ue)}let B=T;if(u){const A=cn.cuboid({size:[h,r+E,d]}),ue=xt.translate([f,L/2+r/2,-i+d/2],A);B=fa(T,ue)}let H=U;if(_){const A=cn.cuboid({size:[r+E,m,p]}),ue=xt.translate([w/2+r/2,g,-i+p/2],A);H=fa(U,ue)}let G=I;if(S){const A=cn.cuboid({size:[r+E,x,M]}),ue=xt.translate([-w/2-r/2,y,-i+M/2],A);G=fa(I,ue)}const W=s/2,oe=w-r/2,ee=L-r/2,Se=xt.translate([0,ee/2+r/2,W],cn.cuboid({size:[oe+E,r,s]})),ce=xt.translate([0,-ee/2-r/2,W],cn.cuboid({size:[oe+E,r,s]})),j=xt.translate([oe/2+r/2,0,W],cn.cuboid({size:[r,ee+E,s]})),se=xt.translate([-oe/2-r/2,0,W],cn.cuboid({size:[r,ee+E,s]})),me=s+r/2,ge=xt.translate([0,0,me],cn.cuboid({size:[oe+E,ee+E,r]}));return[B,F,H,G,Se,ce,j,se,ge]}const{solve2Linear:q4}=oc,{EPS:Y4}=Ye,{geom2:j4,geom3:Z4,path2:K4}=Zu,{Tree:J4}=sf,{Tree:Q4}=sf,{EPS:eH,TAU:tH}=Ye,{EPS:nH,TAU:iH}=Ye,{area:sH}=oc,{TAU:rH}=Ye,Il=Be,__=Qe,QB=(t,e)=>{const n=Math.abs(__.measureArea(e));return Number.isFinite(n)&&n>t},ez=(t,e)=>{let n=e.map(s=>{const r=s.vertices.map(c=>Il.snap(Il.create(),c,t)),o=[];for(let c=0;c<r.length;c++){const l=(c+1)%r.length;Il.equals(r[c],r[l])||o.push(r[c])}const a=__.create(o);return s.color&&(a.color=s.color),a});const i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>QB(i,s)),n};var v_=ez;const tz=eN,js=Be,Da=Qe,nz=t=>{const e=Da.toPoints(t),n=[];for(let i=0;i<e.length;i++){const s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){const s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},iz=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.set(n,e)},Nl=(t,e)=>{const n=`${e.v1}:${e.v2}`;t.delete(n)},sz=(t,e)=>{const n=`${e.v2}:${e.v1}`;return t.get(n)},rz=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2;const o=hm(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;const a=hm(i,s,r,n);return[o,a]},oz=js.create(),az=js.create(),hm=(t,e,n,i)=>{const s=js.subtract(oz,e,t),r=js.subtract(az,n,e);return js.cross(s,s,r),js.dot(s,i)},cz=t=>{let e;const n=[];for(;t.next;){const i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=Da.create(n)),e},lz=t=>{if(t.length<2)return t;const e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){const r=n.shift(),o=nz(r);for(let a=0;a<o.length;a++){const c=o[a],l=sz(i,c);if(l){const u=rz(c,l,e);if(u[0]>=0&&u[1]>=0){const f=l.next,h=c.next;c.prev.next=l.next,c.next.prev=l.prev,l.prev.next=c.next,l.next.prev=c.prev,c.v1=null,c.v2=null,c.next=null,c.prev=null,Nl(i,l),l.v1=null,l.v2=null,l.next=null,l.prev=null;const d=(_,g,m)=>{const p={v1:m.v1,v2:g.v2,next:g.next,prev:m.prev};m.prev.next=p,g.next.prev=p,Nl(_,g),g.v1=null,g.v2=null,g.next=null,g.prev=null,Nl(_,m),m.v1=null,m.v2=null,m.next=null,m.prev=null};u[0]===0&&d(i,f,f.prev),u[1]===0&&d(i,h,h.prev)}}else c.next&&iz(i,c)}}const s=[];return i.forEach(r=>{const o=cz(r);o&&s.push(o)}),i.clear(),s},uz=(t,e)=>Math.abs(t[3]-e[3])<15e-8?tz(t,e):!1,fz=(t,e)=>{const n=[];e.forEach(s=>{const r=n.find(o=>uz(o[0],Da.plane(s)));r?r[1].push(s):n.push([Da.plane(s),[s]])});let i=[];return n.forEach(s=>{const r=s[1],o=lz(r);i=i.concat(o)}),i};var hz=fz;const dm=Ye,$n=Be,dz=Qe,Wt=t=>`${t}`,pm=(t,e,n,i,s,r)=>{const o=Wt(i),a=Wt(s),c=`${o}/${a}`,l=`${a}/${o}`;if(t.has(l))return ya(t,e,n,s,i,null),null;const u={vertex0:i,vertex1:s,polygonindex:r};return t.has(c)?t.get(c).push(u):t.set(c,[u]),e.has(o)?e.get(o).push(c):e.set(o,[c]),n.has(a)?n.get(a).push(c):n.set(a,[c]),c},ya=(t,e,n,i,s,r)=>{const o=Wt(i),a=Wt(s),c=`${o}/${a}`;let l=-1;const u=t.get(c);for(let f=0;f<u.length;f++){const h=u[f];let d=Wt(h.vertex0);if(d===o&&(d=Wt(h.vertex1),d===a&&!(r!==null&&h.polygonindex!==r))){l=f;break}}u.splice(l,1),u.length===0&&t.delete(c),l=e.get(o).indexOf(c),e.get(o).splice(l,1),e.get(o).length===0&&e.delete(o),l=n.get(a).indexOf(c),n.get(a).splice(l,1),n.get(a).length===0&&n.delete(a)},pz=t=>{const e=new Map;for(let n=0;n<t.length;n++){const i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=Wt(r);for(let a=0;a<s;a++){let c=a+1;c===s&&(c=0);const l=i.vertices[c],u=Wt(l),f=`${o}/${u}`,h=`${u}/${o}`;if(e.has(h)){const d=e.get(h);d.splice(-1,1),d.length===0&&e.delete(h)}else{const d={vertex0:r,vertex1:l,polygonindex:n};e.has(f)?e.get(f).push(d):e.set(f,[d])}r=l,o=u}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){const n=new Map,i=new Map,s=new Map;for(const[o,a]of e)s.set(o,!0),a.forEach(c=>{const l=Wt(c.vertex0),u=Wt(c.vertex1);n.has(l)?n.get(l).push(o):n.set(l,[o]),i.has(u)?i.get(u).push(o):i.set(u,[o])});const r=t.slice(0);for(;e.size!==0;){for(const a of e.keys())s.set(a,!0);let o=!1;for(;;){const a=Array.from(s.keys());if(a.length===0)break;const c=a[0];let l=!0;if(e.has(c)){const f=e.get(c)[0];for(let h=0;h<2;h++){const d=h===0?f.vertex0:f.vertex1,_=h===0?f.vertex1:f.vertex0,g=Wt(d),m=Wt(_);let p=[];h===0?i.has(g)&&(p=i.get(g)):n.has(g)&&(p=n.get(g));for(let S=0;S<p.length;S++){const y=p[S],x=e.get(y)[0],M=h===0?x.vertex0:x.vertex1;if(h===0?x.vertex1:x.vertex0,Wt(M)===m){ya(e,n,i,d,_,null),ya(e,n,i,_,d,null),l=!1,h=2,o=!0;break}else{const w=d,L=_,v=M,T=$n.subtract($n.create(),v,w),N=$n.dot($n.subtract($n.create(),L,w),T)/$n.dot(T,T);if(N>0&&N<1){const U=$n.scale($n.create(),T,N);if($n.add(U,U,w),$n.squaredDistance(U,L)<dm.EPS*dm.EPS){const F=x.polygonindex,B=r[F],H=Wt(x.vertex1);let G=-1;for(let ce=0;ce<B.vertices.length;ce++)if(Wt(B.vertices[ce])===H){G=ce;break}const W=B.vertices.slice(0);W.splice(G,0,_);const oe=dz.create(W);r[F]=oe,ya(e,n,i,x.vertex0,x.vertex1,F);const ee=pm(e,n,i,x.vertex0,_,F),Se=pm(e,n,i,_,x.vertex1,F);ee!==null&&s.set(ee,!0),Se!==null&&s.set(Se,!0),l=!1,h=2,o=!0;break}}}}}}l&&s.delete(c)}if(!o)break}t=r}return e.clear(),t};var mz=pz;const Fl=Be,Ol=Qe,gz=(t,e,n)=>{const i=e.vertices.length;if(i>3){if(i>4){const o=[0,0,0];e.vertices.forEach(a=>Fl.add(o,o,a)),Fl.snap(o,Fl.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){const c=Ol.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(c.color=e.color),n.push(c)}return}const s=Ol.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=Ol.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},_z=(t,e)=>{const n=[];return e.forEach(i=>{gz(t,i,n)}),n};var vz=_z;const xz=bn,yz=ef,Mz=ut,x_=lt,Ez=Sn,Sz=v_,bz=hz,Tz=mz,wz=vz,Az=(t,e)=>e,Rz=(t,e)=>e,Cz=(t,e)=>{const n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=yz(e);let a=x_.toPolygons(e);i&&(a=Sz(o,a)),s&&(a=bz(o,a)),r&&(a=Tz(a),a=wz(o,a));const c=Object.assign({},e);return c.polygons=a,c},Pz=(t,...e)=>{if(e=xz(e),e.length===0)throw new Error("wrong number of arguments");const n=e.map(i=>{if(Ez.isA(i))return Az(t,i);if(Mz.isA(i))return Rz(t,i);if(x_.isA(i))return Cz(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};var Lz=Pz;const Dz=bn,as=Ge,gu=ut,_u=lt,vu=Sn,rf=ef,Uz=v_,Iz=t=>{const e=rf(t),i=vu.toPoints(t).map(s=>as.snap(as.create(),s,e));return vu.create(i)},Nz=t=>{const e=rf(t);let i=gu.toSides(t).map(s=>[as.snap(as.create(),s[0],e),as.snap(as.create(),s[1],e)]);return i=i.filter(s=>!as.equals(s[0],s[1])),gu.create(i)},Fz=t=>{const e=rf(t),n=_u.toPolygons(t),i=Uz(e,n);return _u.create(i)},Oz=(...t)=>{if(t=Dz(t),t.length===0)throw new Error("wrong number of arguments");const e=t.map(n=>vu.isA(n)?Iz(n):gu.isA(n)?Nz(n):_u.isA(n)?Fz(n):n);return e.length===1?e[0]:e};var Bz=Oz,zz={generalize:Lz,snap:Bz,retessellate:p_};const{translate:oH}=xt,Hz=bn,Vz=ut,$z=lt,Gz=Sn,kz=Ku,{translate:Wz}=xt,Bl=(t,e)=>{const n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t),r=kz(e),o=[0,0,0];return i[0]&&(o[0]=s[0]-(r[0][0]+(r[1][0]-r[0][0])/2)),i[1]&&(o[1]=s[1]-(r[0][1]+(r[1][1]-r[0][1])/2)),i[2]&&(o[2]=s[2]-(r[0][2]+(r[1][2]-r[0][2])/2)),Wz(o,e)},uc=(t,...e)=>{const n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t);if(e=Hz(e),e.length===0)throw new Error("wrong number of arguments");if(s.length!==3)throw new Error("relativeTo must be an array of length 3");t={axes:i,relativeTo:s};const r=e.map(o=>Gz.isA(o)||Vz.isA(o)||$z.isA(o)?Bl(t,o):o);return r.length===1?r[0]:r},Xz=(...t)=>uc({axes:[!0,!1,!1]},t),qz=(...t)=>uc({axes:[!1,!0,!1]},t),Yz=(...t)=>uc({axes:[!1,!1,!0]},t);var ha={center:uc,centerX:Xz,centerY:qz,centerZ:Yz};const jz=bn,mm=ft,gm=ut,_m=lt,vm=Sn,fc=(t,...e)=>{if(!Array.isArray(t))throw new Error("factors must be an array");if(e=jz(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(1);if(t[0]<=0||t[1]<=0||t[2]<=0)throw new Error("factors must be positive");const n=mm.fromScaling(mm.create(),t),i=e.map(s=>vm.isA(s)?vm.transform(n,s):gm.isA(s)?gm.transform(n,s):_m.isA(s)?_m.transform(n,s):s);return i.length===1?i[0]:i},Zz=(t,...e)=>fc([t,1,1],e),Kz=(t,...e)=>fc([1,t,1],e),Jz=(t,...e)=>fc([1,1,t],e);var da={scale:fc,scaleX:Zz,scaleY:Kz,scaleZ:Jz};ha.center,ha.centerX,ha.centerY,ha.centerZ,Hr.mirror,Hr.mirrorX,Hr.mirrorY,Hr.mirrorZ,$r.rotate,$r.rotateX,$r.rotateY,$r.rotateZ,da.scale,da.scaleX,da.scaleY,da.scaleZ,xt.translate,xt.translateX,xt.translateY,xt.translateZ;var of={geometries:Zu,modifiers:zz};const y_=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(y_(n)):e.concat(n),[]);var Qz=y_;const e4=t=>Array.isArray(t)?t:t==null?[]:[t];var t4=e4,n4={flatten:Qz,toArray:t4};const{geometries:zl}=of,i4=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((m,p)=>{zl.geom3.toPolygons(m).forEach(y=>{const x=y.vertices.length,M=x>=3?x-2:0;r+=M,o+=1})});const a=new Uint8Array(80);for(let m=0;m<80;m++)a[m]=65;const c=new Uint32Array(1);c[0]=r;const l=new ArrayBuffer(50*r),u=new Int8Array(l),f=new ArrayBuffer(50),h=new Int8Array(f),d=new Float32Array(f,0,12),_=new Uint16Array(f,48,1);let g=0;return t.forEach(m=>{zl.geom3.toPolygons(m).forEach((S,y)=>{const x=S.vertices,M=x.length,E=zl.poly3.plane(S);for(let w=0;w<M-2;w++){d[0]=E[0],d[1]=E[1],d[2]=E[2];let L=3;for(let v=0;v<3;v++){const T=v+(v>0?w:0),N=x[T];d[L++]=N[0],d[L++]=N[1],d[L++]=N[2]}_[0]=0,u.set(h,g),g+=50}e.statusCallback&&e.statusCallback({progress:100*y/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,c.buffer,l]};var s4={serializeBinary:i4};const{geometries:M_}=of,r4=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});const n=`solid JSCAD
${o4(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},o4=(t,e)=>{const n=[];return t.forEach((i,s)=>{n.push(a4(i)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},a4=(t,e)=>{const n=[];return M_.geom3.toPolygons(t).forEach((s,r)=>{n.push(c4(s))}),n.join(`
`)},E_=t=>`${t[0]} ${t[1]} ${t[2]}`,Hl=t=>`vertex ${E_(t)}`,c4=t=>{const e=[];if(t.vertices.length>=3){const n=Hl(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){const s=`facet normal ${E_(M_.poly3.plane(t))}
outer loop
${n}
${Hl(t.vertices[i+1])}
${Hl(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};var l4={serializeText:r4};const{geometries:u4,modifiers:f4}=of,{flatten:h4,toArray:d4}=n4,{serializeBinary:p4}=s4,{serializeText:m4}=l4,g4="application/sla",_4=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=h4(e);let i=e.filter(s=>u4.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=d4(f4.generalize({snap:!0,triangulate:!0},i)),t.binary?p4(i,t):m4(i,t)};var v4={mimeType:g4,serialize:_4};const x4={props:["width","depth","safety","bottomHeight","topHeight","borderThickness"],data(){return{stlData:null,currentWidth:0,currentDepth:0,currentSafety:0,currentBottomHeight:0,currentTopHeight:0,currentBorderThickness:0,tweenDuration:1e3,edgeLines:null}},computed:{targetDimensions(){return{width:this.width,depth:this.depth,safety:this.safety,bottomHeight:this.bottomHeight,topHeight:this.topHeight,borderThickness:this.borderThickness}}},watch:{targetDimensions:{handler(t,e){!e||e.width===t.width&&e.depth===t.depth&&e.safety===t.safety&&e.bottomHeight===t.bottomHeight&&e.topHeight===t.topHeight&&e.borderThickness===t.borderThickness||this.animateDimensionsTransition({width:this.currentWidth,depth:this.currentDepth,safety:this.currentSafety,bottomHeight:this.currentBottomHeight,topHeight:this.currentTopHeight,borderThickness:this.currentBorderThickness},t)},deep:!0}},created(){this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.mesh=null},mounted(){this.currentWidth=this.width,this.currentDepth=this.depth,this.currentSafety=this.safety,this.currentBottomHeight=this.bottomHeight,this.currentTopHeight=this.topHeight,this.currentBorderThickness=this.borderThickness,this.initScene(),this.createInitialMesh()},methods:{generateSTL(t,e,n,i,s,r){try{const o=JB({width:t,depth:e,safety:n,bottomHeight:i,topHeight:s,borderThickness:r});return v4.serialize({binary:!1},o).join(`
`)}catch(o){return console.error("Error generating geometry or STL:",o),null}},createInitialMesh(){const t=this.generateSTL(this.width,this.depth,this.safety,this.bottomHeight,this.topHeight,this.borderThickness);if(!t)return;this.stlData=t;const n=new yd().parse(t),i=new NT({color:11066076,roughness:.6,metalness:.1});this.mesh=new di(n,i),this.scene.add(this.mesh);const s=new md(n),r=new cu({color:3355443}),o=new pd(s,r);this.scene.add(o),this.edgeLines=o},animateDimensionsTransition(t,e){const n=performance.now(),i=this.tweenDuration,s=new yd,r=o=>{const a=o-n,c=Math.min(a/i,1),l=t.width+(e.width-t.width)*c,u=t.depth+(e.depth-t.depth)*c,f=t.safety+(e.safety-t.safety)*c,h=t.bottomHeight+(e.bottomHeight-t.bottomHeight)*c,d=t.topHeight+(e.topHeight-t.topHeight)*c,_=t.borderThickness+(e.borderThickness-t.borderThickness)*c,g=this.generateSTL(l,u,f,h,d,_);if(g){const m=s.parse(g);this.mesh&&(this.mesh.geometry.dispose(),this.mesh.geometry=m),this.edgeLines&&(this.scene.remove(this.edgeLines),this.edgeLines.geometry.dispose());const p=new md(m),S=new pd(p,new cu({color:3355443}));this.scene.add(S),this.edgeLines=S,this.stlData=g}c<1?requestAnimationFrame(r):(this.currentWidth=e.width,this.currentDepth=e.depth,this.currentSafety=e.safety,this.currentBottomHeight=e.bottomHeight,this.currentTopHeight=e.topHeight,this.currentBorderThickness=e.borderThickness)};requestAnimationFrame(r)},initScene(){this.scene=new UT,this.camera=new xn(75,600/500,.1,1e3),this.camera.position.set(0,150,100),this.camera.lookAt(0,0,10),this.camera.up.set(0,0,1),this.renderer=new c0({canvas:this.$refs.canvas,antialias:!0}),this.renderer.setSize(600,500),this.renderer.setClearColor(16250871);const n=new GT(7368816,.5);this.scene.add(n);const i=new HT(16777215,4473924,.6);i.position.set(0,200,0),this.scene.add(i);const s=new xd(16777215,.8);s.position.set(1,1,1).normalize(),this.scene.add(s);const r=new xd(16777215,.4);r.position.set(-1,-1,1).normalize(),this.scene.add(r),this.controls=new kT(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.8,this.controls.noZoom=!1,this.controls.noPan=!1,this.controls.staticMoving=!1,this.controls.dynamicDampingFactor=.05,this.controls.minPolarAngle=Math.PI/4,this.controls.maxPolarAngle=Math.PI/2,this.animate()},animate(){requestAnimationFrame(this.animate.bind(this)),this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera)},downloadSTL(){if(!this.stlData)return;const t=new Blob([this.stlData],{type:"application/octet-stream"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`SynthArmor_cover_${this.width}x${this.depth}_safetyOffset${this.safety}_bottomHeight${this.bottomHeight}_topHeight${this.topHeight}_borderThickness${this.borderThickness}.stl`,e.click()}}},y4={class:"mt-2 mb-2 flex flex-col items-center"},M4={class:"w-full max-w-[600px] flex flex-col items-center"},E4={ref:"canvas",class:"rounded-md w-full max-w-[600px] border border-gray-300 border-t-0 border-b-0"};function S4(t,e,n,i,s,r){return Ui(),Ii("div",y4,[Xe("div",M4,[e[0]||(e[0]=Xe("div",{class:"bg-gray-300 h-[1px] w-[95%]"},null,-1)),Xe("canvas",E4,null,512),e[1]||(e[1]=Xe("div",{class:"bg-gray-300 h-[1px] w-[95%]"},null,-1))])])}const b4=fo(x4,[["render",S4]]),T4={name:"FAQ",data(){return{faqs:[{question:"What is this?",answer:"This web app lets you quickly generate a custom 3D model for gear cover protection. Simply enter your equipment’s dimensions, adjust a safety offset if needed, and download an STL file ready for 3D printing.",open:!1},{question:"How does it work?",answer:`
            <ol class="list-decimal pl-6 mt-2">
              <li><strong>Enter Dimensions:</strong> Provide the exact width and depth of your machine.</li>
              <li><strong>Adjust for Fit:</strong> Use the "Safety Offset" to add a small buffer for a secure fit.</li>
              <li><strong>Automatic Preview:</strong> The model updates automatically as you modify the values.</li>
              <li><strong>Download STL:</strong> Click the download button to save your custom design for 3D printing.</li>
            </ol>
          `,open:!1},{question:"A Word of Caution",answer:"Please note that you are solely responsible for ensuring that the generated model fits your machine. Always double-check the dimensions before printing.",open:!1}]}},methods:{toggle(t){this.faqs[t].open=!this.faqs[t].open}}},w4={class:"w-full max-w-[600px] mt-8"},A4=["onClick"],R4={class:"text-lg font-medium text-gray-700"},C4={class:"px-6 py-4 bg-gray-50"},P4=["innerHTML"];function L4(t,e,n,i,s,r){return Ui(),Ii("div",w4,[e[1]||(e[1]=Xe("h2",{class:"text-2xl font-bold mb-6 text-gray-800 text-center"},"FAQ",-1)),(Ui(!0),Ii(Ln,null,Iv(s.faqs,(o,a)=>(Ui(),Ii("div",{key:a,class:"mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"},[Xe("button",{onClick:c=>r.toggle(a),class:"w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"},[Xe("span",R4,wm(o.question),1),(Ui(),Ii("svg",{class:Ba(["w-5 h-5 text-gray-500 transform transition-transform duration-300",{"rotate-180":o.open}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e[0]||(e[0]=[Xe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],8,A4),Bt(Ix,{name:"faq-collapse"},{default:Zm(()=>[Di(Xe("div",C4,[Xe("div",{innerHTML:o.answer,class:"text-gray-600"},null,8,P4)],512),[[Hx,o.open]])]),_:2},1024)]))),128))])}const D4=fo(T4,[["render",L4],["__scopeId","data-v-9b75b70f"]]),U4="/SynthArmor/SynthArmor_logo.png",I4={name:"App",components:{BasicForm:m1,AdvancedForm:M1,ModelViewer:b4,FAQ:D4},data(){return{width:155,depth:105,safety:0,bottomHeight:15,topHeight:25,borderThickness:2.5}},methods:{updateBasic({width:t,depth:e,safety:n}){this.width=t,this.depth=e,this.safety=n},updateAdvanced({bottomHeight:t,topHeight:e,borderThickness:n}){this.bottomHeight=t,this.topHeight=e,this.borderThickness=n},downloadModel(){this.$refs.modelViewer.downloadSTL()}}},N4={class:"max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-center p-6"},F4={class:"w-full max-w-[600px] bg-white rounded shadow p-6"};function O4(t,e,n,i,s,r){const o=So("BasicForm"),a=So("ModelViewer"),c=So("AdvancedForm"),l=So("FAQ");return Ui(),Ii("div",N4,[e[1]||(e[1]=Xe("img",{src:U4,alt:"SynthArmor Logo",class:"w-40 mb-4"},null,-1)),e[2]||(e[2]=Xe("div",{class:"mb-8 text-center"},[Xe("p",{class:"text-gray-600"}," Modify the dimensions of a 3D model and download your custom design instantly. ")],-1)),Xe("div",F4,[Bt(o,{"initial-width":s.width,"initial-depth":s.depth,"initial-safety":s.safety,onUpdateDimensions:r.updateBasic},null,8,["initial-width","initial-depth","initial-safety","onUpdateDimensions"]),Bt(a,{ref:"modelViewer",width:s.width,depth:s.depth,safety:s.safety,"bottom-height":s.bottomHeight,"top-height":s.topHeight,"border-thickness":s.borderThickness},null,8,["width","depth","safety","bottom-height","top-height","border-thickness"]),Bt(c,{"initial-bottom-height":s.bottomHeight,"initial-top-height":s.topHeight,"initial-border-thickness":s.borderThickness,onUpdateAdvanced:r.updateAdvanced},null,8,["initial-bottom-height","initial-top-height","initial-border-thickness","onUpdateAdvanced"]),Xe("button",{onClick:e[0]||(e[0]=(...u)=>r.downloadModel&&r.downloadModel(...u)),class:"mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 block mx-auto"}," Download file ")]),Bt(l)])}const B4=fo(I4,[["render",O4]]);o1(B4).mount("#app");
