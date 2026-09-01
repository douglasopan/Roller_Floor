(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cs="170",Go=0,js=1,Ho=2,io=1,ro=2,Ze=3,mn=0,ve=1,Ke=2,fn=0,$n=1,Js=2,Qs=3,ta=4,ko=5,An=100,Wo=101,Xo=102,qo=103,Yo=104,$o=200,Zo=201,Ko=202,jo=203,Hr=204,kr=205,Jo=206,Qo=207,tl=208,el=209,nl=210,il=211,rl=212,sl=213,al=214,Wr=0,Xr=1,qr=2,jn=3,Yr=4,$r=5,Zr=6,Kr=7,so=0,ol=1,ll=2,pn=0,cl=1,hl=2,ul=3,ao=4,dl=5,fl=6,pl=7,oo=300,Jn=301,Qn=302,jr=303,Jr=304,er=306,Qr=1e3,Rn=1001,ts=1002,Ne=1003,ml=1004,Ai=1005,Be=1006,or=1007,Cn=1008,tn=1009,lo=1010,co=1011,_i=1012,Ps=1013,Pn=1014,je=1015,xi=1016,Ls=1017,Ds=1018,ti=1020,ho=35902,uo=1021,fo=1022,Ue=1023,po=1024,mo=1025,Zn=1026,ei=1027,go=1028,Is=1029,_o=1030,Us=1031,Ns=1033,Yi=33776,$i=33777,Zi=33778,Ki=33779,es=35840,ns=35841,is=35842,rs=35843,ss=36196,as=37492,os=37496,ls=37808,cs=37809,hs=37810,us=37811,ds=37812,fs=37813,ps=37814,ms=37815,gs=37816,_s=37817,vs=37818,xs=37819,Ms=37820,Ss=37821,ji=36492,Es=36494,ys=36495,vo=36283,Ts=36284,bs=36285,As=36286,gl=3200,_l=3201,xo=0,vl=1,un="",Ae="srgb",ii="srgb-linear",nr="linear",Kt="srgb",In=7680,ea=519,xl=512,Ml=513,Sl=514,Mo=515,El=516,yl=517,Tl=518,bl=519,na=35044,ia="300 es",Je=2e3,Qi=2001;class ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lr=Math.PI/180,ws=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[i&255]+ue[i>>8&255]+ue[i>>16&255]+ue[i>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Al(i,t){return(i%t+t)%t}function cr(i,t,e){return(1-e)*i+e*t}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,r,s,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],_=n[8],M=r[0],p=r[3],h=r[6],A=r[1],T=r[4],S=r[7],G=r[2],D=r[5],C=r[8];return s[0]=a*M+o*A+l*G,s[3]=a*p+o*T+l*D,s[6]=a*h+o*S+l*C,s[1]=c*M+u*A+d*G,s[4]=c*p+u*T+d*D,s[7]=c*h+u*S+d*C,s[2]=f*M+m*A+_*G,s[5]=f*p+m*T+_*D,s[8]=f*h+m*S+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*s,m=c*s-a*l,_=e*d+n*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(r*c-u*n)*M,t[2]=(o*n-r*a)*M,t[3]=f*M,t[4]=(u*e-r*l)*M,t[5]=(r*s-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(hr.makeScale(t,e)),this}rotate(t){return this.premultiply(hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new Ft;function So(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wl(){const i=tr("canvas");return i.style.display="block",i}const ra={};function pi(i){i in ra||(ra[i]=!0,console.warn(i))}function Rl(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Cl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pl(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kt={enabled:!0,workingColorSpace:ii,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(i.r=Qe(i.r),i.g=Qe(i.g),i.b=Qe(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===un?nr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qe(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const sa=[.64,.33,.3,.6,.15,.06],aa=[.2126,.7152,.0722],oa=[.3127,.329],la=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ca=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[ii]:{primaries:sa,whitePoint:oa,transfer:nr,toXYZ:la,fromXYZ:ca,luminanceCoefficients:aa,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:sa,whitePoint:oa,transfer:Kt,toXYZ:la,fromXYZ:ca,luminanceCoefficients:aa,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});let Un;class Ll{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=tr("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qe(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qe(e[n]/255)*255):e[n]=Qe(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dl=0;class Eo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ur(r[a].image)):s.push(ur(r[a]))}else s=ur(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Il=0;class xe extends ri{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=Rn,r=Rn,s=Be,a=Cn,o=Ue,l=tn,c=xe.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Mi(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=oo;xe.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,r=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],M=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(m+1)/2,G=(h+1)/2,D=(u+f)/4,C=(d+M)/4,F=(_+p)/4;return T>S&&T>G?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=D/n,s=C/n):S>G?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=D/r,s=F/r):G<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),n=C/s,r=F/s),this.set(n,r,s,e),this}let A=Math.sqrt((p-_)*(p-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(d-M)/A,this.z=(f-u)/A,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ul extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yo extends xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nl extends xe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=M;return}if(d!==M||l!==f||c!==m||u!==_){let p=1-o;const h=l*f+c*m+u*_+d*M,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const G=Math.sqrt(T),D=Math.atan2(G,h*A);p=Math.sin(p*D)/G,o=Math.sin(o*D)/G}const S=o*A;if(l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,d=d*p+M*S,p===1-o){const G=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=G,c*=G,u*=G,d*=G}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+u*d+l*m-c*f,t[e+1]=l*_+u*f+c*d-o*m,t[e+2]=c*_+u*m+o*f-l*d,t[e+3]=u*_-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),f=l(n/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dr=new N,ha=new Si;class Ei{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pe):Pe.fromBufferAttribute(s,a),Pe.applyMatrix4(t.matrixWorld),this.expandByPoint(Pe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wi.copy(n.boundingBox)),wi.applyMatrix4(t.matrixWorld),this.union(wi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pe),Pe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ci),Ri.subVectors(this.max,ci),Nn.subVectors(t.a,ci),Fn.subVectors(t.b,ci),On.subVectors(t.c,ci),sn.subVectors(Fn,Nn),an.subVectors(On,Fn),vn.subVectors(Nn,On);let e=[0,-sn.z,sn.y,0,-an.z,an.y,0,-vn.z,vn.y,sn.z,0,-sn.x,an.z,0,-an.x,vn.z,0,-vn.x,-sn.y,sn.x,0,-an.y,an.x,0,-vn.y,vn.x,0];return!fr(e,Nn,Fn,On,Ri)||(e=[1,0,0,0,1,0,0,0,1],!fr(e,Nn,Fn,On,Ri))?!1:(Ci.crossVectors(sn,an),e=[Ci.x,Ci.y,Ci.z],fr(e,Nn,Fn,On,Ri))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const We=[new N,new N,new N,new N,new N,new N,new N,new N],Pe=new N,wi=new Ei,Nn=new N,Fn=new N,On=new N,sn=new N,an=new N,vn=new N,ci=new N,Ri=new N,Ci=new N,xn=new N;function fr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xn.fromArray(i,s);const o=r.x*Math.abs(xn.x)+r.y*Math.abs(xn.y)+r.z*Math.abs(xn.z),l=t.dot(xn),c=e.dot(xn),u=n.dot(xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Fl=new Ei,hi=new N,pr=new N;class Fs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fl.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hi.subVectors(t,this.center);const e=hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(hi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hi.copy(t.center).add(pr)),this.expandByPoint(hi.copy(t.center).sub(pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xe=new N,mr=new N,Pi=new N,on=new N,gr=new N,Li=new N,_r=new N;class Ol{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.origin).addScaledVector(this.direction,e),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){mr.copy(t).add(e).multiplyScalar(.5),Pi.copy(e).sub(t).normalize(),on.copy(this.origin).sub(mr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Pi),o=on.dot(this.direction),l=-on.dot(Pi),c=on.lengthSq(),u=Math.abs(1-a*a);let d,f,m,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mr).addScaledVector(Pi,f),m}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);const n=Xe.dot(this.direction),r=Xe.dot(Xe)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,n,r,s){gr.subVectors(e,t),Li.subVectors(n,t),_r.crossVectors(gr,Li);let a=this.direction.dot(_r),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,t);const l=o*this.direction.dot(Li.crossVectors(on,Li));if(l<0)return null;const c=o*this.direction.dot(gr.cross(on));if(c<0||l+c>a)return null;const u=-o*on.dot(_r);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,a,o,l,c,u,d,f,m,_,M,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,d,f,m,_,M,p)}set(t,e,n,r,s,a,o,l,c,u,d,f,m,_,M,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Bn.setFromMatrixColumn(t,0).length(),s=1/Bn.setFromMatrixColumn(t,1).length(),a=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*d,_=o*u,M=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*d,_=c*u,M=c*d;e[0]=f+M*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*d,_=c*u,M=c*d;e[0]=f-M*o,e[4]=-a*d,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*d,_=o*u,M=o*d;e[0]=l*u,e[4]=_*c-m,e[8]=f*c+M,e[1]=l*d,e[5]=M*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*u,e[4]=M-f*d,e[8]=_*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+_,e[10]=f-M*d}else if(t.order==="XZY"){const f=a*l,m=a*c,_=o*l,M=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+M,e[5]=a*u,e[9]=m*d-_,e[2]=_*d-m,e[6]=o*u,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bl,t,zl)}lookAt(t,e,n){const r=this.elements;return Se.subVectors(t,e),Se.lengthSq()===0&&(Se.z=1),Se.normalize(),ln.crossVectors(n,Se),ln.lengthSq()===0&&(Math.abs(n.z)===1?Se.x+=1e-4:Se.z+=1e-4,Se.normalize(),ln.crossVectors(n,Se)),ln.normalize(),Di.crossVectors(Se,ln),r[0]=ln.x,r[4]=Di.x,r[8]=Se.x,r[1]=ln.y,r[5]=Di.y,r[9]=Se.y,r[2]=ln.z,r[6]=Di.z,r[10]=Se.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],_=n[2],M=n[6],p=n[10],h=n[14],A=n[3],T=n[7],S=n[11],G=n[15],D=r[0],C=r[4],F=r[8],E=r[12],x=r[1],P=r[5],$=r[9],H=r[13],J=r[2],Q=r[6],Z=r[10],et=r[14],k=r[3],lt=r[7],R=r[11],b=r[15];return s[0]=a*D+o*x+l*J+c*k,s[4]=a*C+o*P+l*Q+c*lt,s[8]=a*F+o*$+l*Z+c*R,s[12]=a*E+o*H+l*et+c*b,s[1]=u*D+d*x+f*J+m*k,s[5]=u*C+d*P+f*Q+m*lt,s[9]=u*F+d*$+f*Z+m*R,s[13]=u*E+d*H+f*et+m*b,s[2]=_*D+M*x+p*J+h*k,s[6]=_*C+M*P+p*Q+h*lt,s[10]=_*F+M*$+p*Z+h*R,s[14]=_*E+M*H+p*et+h*b,s[3]=A*D+T*x+S*J+G*k,s[7]=A*C+T*P+S*Q+G*lt,s[11]=A*F+T*$+S*Z+G*R,s[15]=A*E+T*H+S*et+G*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],_=t[3],M=t[7],p=t[11],h=t[15];return _*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*m-n*l*m)+M*(+e*l*m-e*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+p*(+e*c*d-e*o*m-s*a*d+n*a*m+s*o*u-n*c*u)+h*(-r*o*u-e*l*d+e*o*f+r*a*d-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],_=t[12],M=t[13],p=t[14],h=t[15],A=d*p*c-M*f*c+M*l*m-o*p*m-d*l*h+o*f*h,T=_*f*c-u*p*c-_*l*m+a*p*m+u*l*h-a*f*h,S=u*M*c-_*d*c+_*o*m-a*M*m-u*o*h+a*d*h,G=_*d*l-u*M*l-_*o*f+a*M*f+u*o*p-a*d*p,D=e*A+n*T+r*S+s*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return t[0]=A*C,t[1]=(M*f*s-d*p*s-M*r*m+n*p*m+d*r*h-n*f*h)*C,t[2]=(o*p*s-M*l*s+M*r*c-n*p*c-o*r*h+n*l*h)*C,t[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*m-n*l*m)*C,t[4]=T*C,t[5]=(u*p*s-_*f*s+_*r*m-e*p*m-u*r*h+e*f*h)*C,t[6]=(_*l*s-a*p*s-_*r*c+e*p*c+a*r*h-e*l*h)*C,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*m+e*l*m)*C,t[8]=S*C,t[9]=(_*d*s-u*M*s-_*n*m+e*M*m+u*n*h-e*d*h)*C,t[10]=(a*M*s-_*o*s+_*n*c-e*M*c-a*n*h+e*o*h)*C,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*m-e*o*m)*C,t[12]=G*C,t[13]=(u*M*r-_*d*r+_*n*f-e*M*f-u*n*p+e*d*p)*C,t[14]=(_*o*r-a*M*r-_*n*l+e*M*l+a*n*p-e*o*p)*C,t[15]=(a*d*r-u*o*r+u*n*l-e*d*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,f=s*c,m=s*u,_=s*d,M=a*u,p=a*d,h=o*d,A=l*c,T=l*u,S=l*d,G=n.x,D=n.y,C=n.z;return r[0]=(1-(M+h))*G,r[1]=(m+S)*G,r[2]=(_-T)*G,r[3]=0,r[4]=(m-S)*D,r[5]=(1-(f+h))*D,r[6]=(p+A)*D,r[7]=0,r[8]=(_+T)*C,r[9]=(p-A)*C,r[10]=(1-(f+M))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Bn.set(r[0],r[1],r[2]).length();const a=Bn.set(r[4],r[5],r[6]).length(),o=Bn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Le.copy(this);const c=1/s,u=1/a,d=1/o;return Le.elements[0]*=c,Le.elements[1]*=c,Le.elements[2]*=c,Le.elements[4]*=u,Le.elements[5]*=u,Le.elements[6]*=u,Le.elements[8]*=d,Le.elements[9]*=d,Le.elements[10]*=d,e.setFromRotationMatrix(Le),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Je){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),f=(n+r)/(n-r);let m,_;if(o===Je)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Qi)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Je){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(a-s),f=(e+t)*c,m=(n+r)*u;let _,M;if(o===Je)_=(a+s)*d,M=-2*d;else if(o===Qi)_=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bn=new N,Le=new ie,Bl=new N(0,0,0),zl=new N(1,1,1),ln=new N,Di=new N,Se=new N,ua=new ie,da=new Si;class Ge{constructor(t=0,e=0,n=0,r=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return da.setFromEuler(this),this.setFromQuaternion(da,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vl=0;const fa=new N,zn=new Si,qe=new ie,Ii=new N,ui=new N,Gl=new N,Hl=new Si,pa=new N(1,0,0),ma=new N(0,1,0),ga=new N(0,0,1),_a={type:"added"},kl={type:"removed"},Vn={type:"childadded",child:null},vr={type:"childremoved",child:null};class fe extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new N,e=new Ge,n=new Si,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ft}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis(pa,t)}rotateY(t){return this.rotateOnAxis(ma,t)}rotateZ(t){return this.rotateOnAxis(ga,t)}translateOnAxis(t,e){return fa.copy(t).applyQuaternion(this.quaternion),this.position.add(fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pa,t)}translateY(t){return this.translateOnAxis(ma,t)}translateZ(t){return this.translateOnAxis(ga,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ii.copy(t):Ii.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(ui,Ii,this.up):qe.lookAt(Ii,ui,this.up),this.quaternion.setFromRotationMatrix(qe),r&&(qe.extractRotation(r.matrixWorld),zn.setFromRotationMatrix(qe),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_a),Vn.child=t,this.dispatchEvent(Vn),Vn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kl),vr.child=t,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_a),Vn.child=t,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,t,Gl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,Hl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}fe.DEFAULT_UP=new N(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const De=new N,Ye=new N,xr=new N,$e=new N,Gn=new N,Hn=new N,va=new N,Mr=new N,Sr=new N,Er=new N,yr=new jt,Tr=new jt,br=new jt;class Ie{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),De.subVectors(t,e),r.cross(De);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){De.subVectors(r,e),Ye.subVectors(n,e),xr.subVectors(t,e);const a=De.dot(De),o=De.dot(Ye),l=De.dot(xr),c=Ye.dot(Ye),u=Ye.dot(xr),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,$e)===null?!1:$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,$e)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$e.x),l.addScaledVector(a,$e.y),l.addScaledVector(o,$e.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return yr.setScalar(0),Tr.setScalar(0),br.setScalar(0),yr.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),br.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(yr,s.x),a.addScaledVector(Tr,s.y),a.addScaledVector(br,s.z),a}static isFrontFacing(t,e,n,r){return De.subVectors(n,e),Ye.subVectors(t,e),De.cross(Ye).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),De.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ie.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Gn.subVectors(r,n),Hn.subVectors(s,n),Mr.subVectors(t,n);const l=Gn.dot(Mr),c=Hn.dot(Mr);if(l<=0&&c<=0)return e.copy(n);Sr.subVectors(t,r);const u=Gn.dot(Sr),d=Hn.dot(Sr);if(u>=0&&d<=u)return e.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Gn,a);Er.subVectors(t,s);const m=Gn.dot(Er),_=Hn.dot(Er);if(_>=0&&m<=_)return e.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Hn,o);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return va.subVectors(s,r),o=(d-u)/(d-u+(m-_)),e.copy(r).addScaledVector(va,o);const h=1/(p+M+f);return a=M*h,o=f*h,e.copy(n).addScaledVector(Gn,a).addScaledVector(Hn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Ar(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=kt.workingColorSpace){if(t=Al(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ar(a,s,t+1/3),this.g=Ar(a,s,t),this.b=Ar(a,s,t-1/3)}return kt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ae){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=bo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qe(t.r),this.g=Qe(t.g),this.b=Qe(t.b),this}copyLinearToSRGB(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return kt.fromWorkingColorSpace(de.copy(this),t),Math.round(_e(de.r*255,0,255))*65536+Math.round(_e(de.g*255,0,255))*256+Math.round(_e(de.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(de.copy(this),e);const n=de.r,r=de.g,s=de.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(de.copy(this),e),t.r=de.r,t.g=de.g,t.b=de.b,t}getStyle(t=Ae){kt.fromWorkingColorSpace(de.copy(this),t);const e=de.r,n=de.g,r=de.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(Ui);const n=cr(cn.h,Ui.h,e),r=cr(cn.s,Ui.s,e),s=cr(cn.l,Ui.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const de=new Xt;Xt.NAMES=bo;let Wl=0;class yi extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Mi(),this.name="",this.blending=$n,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=kr,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=In,this.stencilZFail=In,this.stencilZPass=In,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==kr&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==In&&(n.stencilFail=this.stencilFail),this.stencilZFail!==In&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==In&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vi extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new N,Ni=new qt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=na,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ni.fromBufferAttribute(this,e),Ni.applyMatrix3(t),this.setXY(e,Ni.x,Ni.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),r=ge(r,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==na&&(t.usage=this.usage),t}}class Ao extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wo extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xl=0;const be=new ie,wr=new fe,kn=new N,Ee=new Ei,di=new Ei,le=new N;class en extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(So(t)?wo:Ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return be.makeRotationFromQuaternion(t),this.applyMatrix4(be),this}rotateX(t){return be.makeRotationX(t),this.applyMatrix4(be),this}rotateY(t){return be.makeRotationY(t),this.applyMatrix4(be),this}rotateZ(t){return be.makeRotationZ(t),this.applyMatrix4(be),this}translate(t,e,n){return be.makeTranslation(t,e,n),this.applyMatrix4(be),this}scale(t,e,n){return be.makeScale(t,e,n),this.applyMatrix4(be),this}lookAt(t){return wr.lookAt(t),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ee.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Ee.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Ee.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Ee.min),this.boundingBox.expandByPoint(Ee.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ee.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];di.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(Ee.min,di.min),Ee.expandByPoint(le),le.addVectors(Ee.max,di.max),Ee.expandByPoint(le)):(Ee.expandByPoint(di.min),Ee.expandByPoint(di.max))}Ee.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)le.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(le));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)le.fromBufferAttribute(o,c),l&&(kn.fromBufferAttribute(t,c),le.add(kn)),r=Math.max(r,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;const c=new N,u=new N,d=new N,f=new qt,m=new qt,_=new qt,M=new N,p=new N;function h(F,E,x){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),f.fromBufferAttribute(s,F),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),u.sub(c),d.sub(c),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(P),o[F].add(M),o[E].add(M),o[x].add(M),l[F].add(p),l[E].add(p),l[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let F=0,E=A.length;F<E;++F){const x=A[F],P=x.start,$=x.count;for(let H=P,J=P+$;H<J;H+=3)h(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const T=new N,S=new N,G=new N,D=new N;function C(F){G.fromBufferAttribute(r,F),D.copy(G);const E=o[F];T.copy(E),T.sub(G.multiplyScalar(G.dot(E))).normalize(),S.crossVectors(D,E);const P=S.dot(l[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,P)}for(let F=0,E=A.length;F<E;++F){const x=A[F],P=x.start,$=x.count;for(let H=P,J=P+$;H<J;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new Ve(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new ie,Mn=new Ol,Fi=new Fs,Ma=new N,Oi=new N,Bi=new N,zi=new N,Rr=new N,Vi=new N,Sa=new N,Gi=new N;class ce extends fe{constructor(t=new en,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Vi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Rr.fromBufferAttribute(d,t),a?Vi.addScaledVector(Rr,u):Vi.addScaledVector(Rr.sub(e),u))}e.add(Vi)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(s),Mn.copy(t.ray).recast(t.near),!(Fi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Fi,Ma)===null||Mn.origin.distanceToSquared(Ma)>(t.far-t.near)**2))&&(xa.copy(s).invert(),Mn.copy(t.ray).applyMatrix4(xa),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const p=f[_],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,G=T;S<G;S+=3){const D=o.getX(S),C=o.getX(S+1),F=o.getX(S+2);r=Hi(this,h,t,n,c,u,d,D,C,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,h=M;p<h;p+=3){const A=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);r=Hi(this,a,t,n,c,u,d,A,T,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const p=f[_],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=A,G=T;S<G;S+=3){const D=S,C=S+1,F=S+2;r=Hi(this,h,t,n,c,u,d,D,C,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,h=M;p<h;p+=3){const A=p,T=p+1,S=p+2;r=Hi(this,a,t,n,c,u,d,A,T,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function ql(i,t,e,n,r,s,a,o){let l;if(t.side===ve?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===mn,o),l===null)return null;Gi.copy(o),Gi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Gi);return c<e.near||c>e.far?null:{distance:c,point:Gi.clone(),object:i}}function Hi(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Oi),i.getVertexPosition(l,Bi),i.getVertexPosition(c,zi);const u=ql(i,t,e,n,Oi,Bi,zi,Sa);if(u){const d=new N;Ie.getBarycoord(Sa,Oi,Bi,zi,d),r&&(u.uv=Ie.getInterpolatedAttribute(r,o,l,c,d,new qt)),s&&(u.uv1=Ie.getInterpolatedAttribute(s,o,l,c,d,new qt)),a&&(u.normal=Ie.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Ie.getNormal(Oi,Bi,zi,f.normal),u.face=f,u.barycoord=d}return u}class ze extends en{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function _(M,p,h,A,T,S,G,D,C,F,E){const x=S/C,P=G/F,$=S/2,H=G/2,J=D/2,Q=C+1,Z=F+1;let et=0,k=0;const lt=new N;for(let R=0;R<Z;R++){const b=R*P-H;for(let it=0;it<Q;it++){const ct=it*x-$;lt[M]=ct*A,lt[p]=b*T,lt[h]=J,c.push(lt.x,lt.y,lt.z),lt[M]=0,lt[p]=0,lt[h]=D>0?1:-1,u.push(lt.x,lt.y,lt.z),d.push(it/C),d.push(1-R/F),et+=1}}for(let R=0;R<F;R++)for(let b=0;b<C;b++){const it=f+b+Q*R,ct=f+b+Q*(R+1),O=f+(b+1)+Q*(R+1),X=f+(b+1)+Q*R;l.push(it,ct,X),l.push(ct,O,X),k+=6}o.addGroup(m,k,E),m+=k,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function pe(i){const t={};for(let e=0;e<i.length;e++){const n=ni(i[e]);for(const r in n)t[r]=n[r]}return t}function Yl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ro(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const $l={clone:ni,merge:pe};var Zl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zl,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=Yl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Co extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Je}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new N,Ea=new qt,ya=new qt;class we extends Co{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hn.x,hn.y).multiplyScalar(-t/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-t/hn.z)}getViewSize(t,e){return this.getViewBounds(t,Ea,ya),e.subVectors(ya,Ea)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wn=-90,Xn=1;class jl extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new we(Wn,Xn,t,e);r.layers=this.layers,this.add(r);const s=new we(Wn,Xn,t,e);s.layers=this.layers,this.add(s);const a=new we(Wn,Xn,t,e);a.layers=this.layers,this.add(a);const o=new we(Wn,Xn,t,e);o.layers=this.layers,this.add(o);const l=new we(Wn,Xn,t,e);l.layers=this.layers,this.add(l);const c=new we(Wn,Xn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Je)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Po extends xe{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Jn,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jl extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Po(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ze(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ve,blending:fn});s.uniforms.tEquirect.value=e;const a=new ce(r,s),o=e.minFilter;return e.minFilter===Cn&&(e.minFilter=Be),new jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Cr=new N,Ql=new N,tc=new Ft;class Tn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Cr.subVectors(n,e).cross(Ql.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Cr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tc.getNormalMatrix(t),r=this.coplanarPoint(Cr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new Fs,ki=new N;class Os{constructor(t=new Tn,e=new Tn,n=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Je){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],M=r[10],p=r[11],h=r[12],A=r[13],T=r[14],S=r[15];if(n[0].setComponents(l-s,f-c,p-m,S-h).normalize(),n[1].setComponents(l+s,f+c,p+m,S+h).normalize(),n[2].setComponents(l+a,f+u,p+_,S+A).normalize(),n[3].setComponents(l-a,f-u,p-_,S-A).normalize(),n[4].setComponents(l-o,f-d,p-M,S-T).normalize(),e===Je)n[5].setComponents(l+o,f+d,p+M,S+T).normalize();else if(e===Qi)n[5].setComponents(o,d,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(t){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ki.x=r.normal.x>0?t.max.x:t.min.x,ki.y=r.normal.y>0?t.max.y:t.min.y,ki.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lo(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ec(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){const _=d[f],M=d[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){const M=d[m];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ir extends en{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=t/o,f=e/l,m=[],_=[],M=[],p=[];for(let h=0;h<u;h++){const A=h*f-a;for(let T=0;T<c;T++){const S=T*d-s;_.push(S,-A,0),M.push(0,0,1),p.push(T/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const T=A+c*h,S=A+c*(h+1),G=A+1+c*(h+1),D=A+1+c*h;m.push(T,S,D),m.push(S,G,D)}this.setIndex(m),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(M,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}var nc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ic=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ac=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mc=`#ifdef USE_IRIDESCENCE
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
#endif`,gc=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bc=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Ac=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,wc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ic=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Nc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fc=`#ifdef USE_ENVMAP
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
#endif`,Oc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
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
#endif`,zc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kc=`#ifdef USE_GRADIENTMAP
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
}`,Wc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,$c=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,th=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,eh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uh=`#if defined( USE_POINTS_UV )
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
#endif`,dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ph=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_h=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Mh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Th=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ah=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ch=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ph=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ih=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wh=`#ifdef USE_SKINNING
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
#endif`,Xh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zh=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kh=`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,Qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,tu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,au=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ou=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,lu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,hu=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,du=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fu=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pu=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mu=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gu=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_u=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vu=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mu=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Eu=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Tu=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Au=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ru=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Du=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:nc,alphahash_pars_fragment:ic,alphamap_fragment:rc,alphamap_pars_fragment:sc,alphatest_fragment:ac,alphatest_pars_fragment:oc,aomap_fragment:lc,aomap_pars_fragment:cc,batching_pars_vertex:hc,batching_vertex:uc,begin_vertex:dc,beginnormal_vertex:fc,bsdfs:pc,iridescence_fragment:mc,bumpmap_pars_fragment:gc,clipping_planes_fragment:_c,clipping_planes_pars_fragment:vc,clipping_planes_pars_vertex:xc,clipping_planes_vertex:Mc,color_fragment:Sc,color_pars_fragment:Ec,color_pars_vertex:yc,color_vertex:Tc,common:bc,cube_uv_reflection_fragment:Ac,defaultnormal_vertex:wc,displacementmap_pars_vertex:Rc,displacementmap_vertex:Cc,emissivemap_fragment:Pc,emissivemap_pars_fragment:Lc,colorspace_fragment:Dc,colorspace_pars_fragment:Ic,envmap_fragment:Uc,envmap_common_pars_fragment:Nc,envmap_pars_fragment:Fc,envmap_pars_vertex:Oc,envmap_physical_pars_fragment:$c,envmap_vertex:Bc,fog_vertex:zc,fog_pars_vertex:Vc,fog_fragment:Gc,fog_pars_fragment:Hc,gradientmap_pars_fragment:kc,lightmap_pars_fragment:Wc,lights_lambert_fragment:Xc,lights_lambert_pars_fragment:qc,lights_pars_begin:Yc,lights_toon_fragment:Zc,lights_toon_pars_fragment:Kc,lights_phong_fragment:jc,lights_phong_pars_fragment:Jc,lights_physical_fragment:Qc,lights_physical_pars_fragment:th,lights_fragment_begin:eh,lights_fragment_maps:nh,lights_fragment_end:ih,logdepthbuf_fragment:rh,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:ah,logdepthbuf_vertex:oh,map_fragment:lh,map_pars_fragment:ch,map_particle_fragment:hh,map_particle_pars_fragment:uh,metalnessmap_fragment:dh,metalnessmap_pars_fragment:fh,morphinstance_vertex:ph,morphcolor_vertex:mh,morphnormal_vertex:gh,morphtarget_pars_vertex:_h,morphtarget_vertex:vh,normal_fragment_begin:xh,normal_fragment_maps:Mh,normal_pars_fragment:Sh,normal_pars_vertex:Eh,normal_vertex:yh,normalmap_pars_fragment:Th,clearcoat_normal_fragment_begin:bh,clearcoat_normal_fragment_maps:Ah,clearcoat_pars_fragment:wh,iridescence_pars_fragment:Rh,opaque_fragment:Ch,packing:Ph,premultiplied_alpha_fragment:Lh,project_vertex:Dh,dithering_fragment:Ih,dithering_pars_fragment:Uh,roughnessmap_fragment:Nh,roughnessmap_pars_fragment:Fh,shadowmap_pars_fragment:Oh,shadowmap_pars_vertex:Bh,shadowmap_vertex:zh,shadowmask_pars_fragment:Vh,skinbase_vertex:Gh,skinning_pars_vertex:Hh,skinning_vertex:kh,skinnormal_vertex:Wh,specularmap_fragment:Xh,specularmap_pars_fragment:qh,tonemapping_fragment:Yh,tonemapping_pars_fragment:$h,transmission_fragment:Zh,transmission_pars_fragment:Kh,uv_pars_fragment:jh,uv_pars_vertex:Jh,uv_vertex:Qh,worldpos_vertex:tu,background_vert:eu,background_frag:nu,backgroundCube_vert:iu,backgroundCube_frag:ru,cube_vert:su,cube_frag:au,depth_vert:ou,depth_frag:lu,distanceRGBA_vert:cu,distanceRGBA_frag:hu,equirect_vert:uu,equirect_frag:du,linedashed_vert:fu,linedashed_frag:pu,meshbasic_vert:mu,meshbasic_frag:gu,meshlambert_vert:_u,meshlambert_frag:vu,meshmatcap_vert:xu,meshmatcap_frag:Mu,meshnormal_vert:Su,meshnormal_frag:Eu,meshphong_vert:yu,meshphong_frag:Tu,meshphysical_vert:bu,meshphysical_frag:Au,meshtoon_vert:wu,meshtoon_frag:Ru,points_vert:Cu,points_frag:Pu,shadow_vert:Lu,shadow_frag:Du,sprite_vert:Iu,sprite_frag:Uu},ot={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Oe={basic:{uniforms:pe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:pe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:pe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:pe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:pe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:pe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:pe([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:pe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:pe([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:pe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:pe([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:pe([ot.common,ot.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:pe([ot.lights,ot.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Oe.physical={uniforms:pe([Oe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Wi={r:0,b:0,g:0},En=new Ge,Nu=new ie;function Fu(i,t,e,n,r,s,a){const o=new Xt(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function _(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function M(A){let T=!1;const S=_(A);S===null?h(o,l):S&&S.isColor&&(h(S,1),T=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,a):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,T){const S=_(T);S&&(S.isCubeTexture||S.mapping===er)?(u===void 0&&(u=new ce(new ze(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ni(Oe.backgroundCube.uniforms),vertexShader:Oe.backgroundCube.vertexShader,fragmentShader:Oe.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(G,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),En.copy(T.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nu.makeRotationFromEuler(En)),u.material.toneMapped=kt.getTransfer(S.colorSpace)!==Kt,(d!==S||f!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ce(new ir(2,2),new gn({name:"BackgroundMaterial",uniforms:ni(Oe.background.uniforms),vertexShader:Oe.background.vertexShader,fragmentShader:Oe.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=kt.getTransfer(S.colorSpace)!==Kt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,T){A.getRGB(Wi,Ro(i)),n.buffers.color.setClear(Wi.r,Wi.g,Wi.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(o,l)},render:M,addToRenderList:p}}function Ou(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(x,P,$,H,J){let Q=!1;const Z=d(H,$,P);s!==Z&&(s=Z,c(s.object)),Q=m(x,H,$,J),Q&&_(x,H,$,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(x,P,$,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,P,$){const H=$.wireframe===!0;let J=n[x.id];J===void 0&&(J={},n[x.id]=J);let Q=J[P.id];Q===void 0&&(Q={},J[P.id]=Q);let Z=Q[H];return Z===void 0&&(Z=f(l()),Q[H]=Z),Z}function f(x){const P=[],$=[],H=[];for(let J=0;J<e;J++)P[J]=0,$[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:$,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,P,$,H){const J=s.attributes,Q=P.attributes;let Z=0;const et=$.getAttributes();for(const k in et)if(et[k].location>=0){const R=J[k];let b=Q[k];if(b===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(b=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(b=x.instanceColor)),R===void 0||R.attribute!==b||b&&R.data!==b.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function _(x,P,$,H){const J={},Q=P.attributes;let Z=0;const et=$.getAttributes();for(const k in et)if(et[k].location>=0){let R=Q[k];R===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(R=x.instanceColor));const b={};b.attribute=R,R&&R.data&&(b.data=R.data),J[k]=b,Z++}s.attributes=J,s.attributesNum=Z,s.index=H}function M(){const x=s.newAttributes;for(let P=0,$=x.length;P<$;P++)x[P]=0}function p(x){h(x,0)}function h(x,P){const $=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;$[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),J[x]!==P&&(i.vertexAttribDivisor(x,P),J[x]=P)}function A(){const x=s.newAttributes,P=s.enabledAttributes;for(let $=0,H=P.length;$<H;$++)P[$]!==x[$]&&(i.disableVertexAttribArray($),P[$]=0)}function T(x,P,$,H,J,Q,Z){Z===!0?i.vertexAttribIPointer(x,P,$,J,Q):i.vertexAttribPointer(x,P,$,H,J,Q)}function S(x,P,$,H){M();const J=H.attributes,Q=$.getAttributes(),Z=P.defaultAttributeValues;for(const et in Q){const k=Q[et];if(k.location>=0){let lt=J[et];if(lt===void 0&&(et==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),et==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){const R=lt.normalized,b=lt.itemSize,it=t.get(lt);if(it===void 0)continue;const ct=it.buffer,O=it.type,X=it.bytesPerElement,nt=O===i.INT||O===i.UNSIGNED_INT||lt.gpuType===Ps;if(lt.isInterleavedBufferAttribute){const q=lt.data,at=q.stride,pt=lt.offset;if(q.isInstancedInterleavedBuffer){for(let Mt=0;Mt<k.locationSize;Mt++)h(k.location+Mt,q.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Mt=0;Mt<k.locationSize;Mt++)p(k.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Mt=0;Mt<k.locationSize;Mt++)T(k.location+Mt,b/k.locationSize,O,R,at*X,(pt+b/k.locationSize*Mt)*X,nt)}else{if(lt.isInstancedBufferAttribute){for(let q=0;q<k.locationSize;q++)h(k.location+q,lt.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let q=0;q<k.locationSize;q++)p(k.location+q);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let q=0;q<k.locationSize;q++)T(k.location+q,b/k.locationSize,O,R,b*X,b/k.locationSize*q*X,nt)}}else if(Z!==void 0){const R=Z[et];if(R!==void 0)switch(R.length){case 2:i.vertexAttrib2fv(k.location,R);break;case 3:i.vertexAttrib3fv(k.location,R);break;case 4:i.vertexAttrib4fv(k.location,R);break;default:i.vertexAttrib1fv(k.location,R)}}}}A()}function G(){F();for(const x in n){const P=n[x];for(const $ in P){const H=P[$];for(const J in H)u(H[J].object),delete H[J];delete P[$]}delete n[x]}}function D(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const $ in P){const H=P[$];for(const J in H)u(H[J].object),delete H[J];delete P[$]}delete n[x.id]}function C(x){for(const P in n){const $=n[P];if($[x.id]===void 0)continue;const H=$[x.id];for(const J in H)u(H[J].object),delete H[J];delete $[x.id]}}function F(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:G,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:p,disableUnusedAttributes:A}}function Bu(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];e.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let _=0;for(let M=0;M<d;M++)_+=u[M]*f[M];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zu(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Ue&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==je&&!F)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=_>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:G,maxSamples:D}}function Vu(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Tn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const A=s?0:n,T=A*4;let S=h.clippingState||null;l.value=S,S=u(_,f,T,m);for(let G=0;G!==T;++G)S[G]=e[G];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,_){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const h=m+M*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,S=m;T!==M;++T,S+=4)a.copy(d[T]).applyMatrix4(A,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function Gu(i){let t=new WeakMap;function e(a,o){return o===jr?a.mapping=Jn:o===Jr&&(a.mapping=Qn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===jr||o===Jr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Bs extends Co{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yn=4,Ta=[.125,.215,.35,.446,.526,.582],wn=20,Pr=new Bs,ba=new Xt;let Lr=null,Dr=0,Ir=0,Ur=!1;const bn=(1+Math.sqrt(5))/2,qn=1/bn,Aa=[new N(-bn,qn,0),new N(bn,qn,0),new N(-qn,0,bn),new N(qn,0,bn),new N(0,bn,-qn),new N(0,bn,qn),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class wa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lr,Dr,Ir),this._renderer.xr.enabled=Ur,t.scissorTest=!1,Xi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jn||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:xi,format:Ue,colorSpace:ii,depthBuffer:!1},r=Ra(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hu(s)),this._blurMaterial=ku(s,t,e)}return r}_compileMaterial(t){const e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,r){const o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ba),u.toneMapping=pn,u.autoClear=!1;const m=new vi({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),_=new ce(new ze,m);let M=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,M=!0):(m.color.copy(ba),M=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const T=this._cubeSize;Xi(r,A*T,h>2?T:0,T,T),u.setRenderTarget(r),M&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Jn||t.mapping===Qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ca());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Xi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Aa[(r-s-1)%Aa.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ce(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wn-1),M=s/_,p=isFinite(s)?1+Math.floor(u*M):wn;p>wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wn}`);const h=[];let A=0;for(let C=0;C<wn;++C){const F=C/M,E=Math.exp(-F*F/2);h.push(E),C===0?A+=E:C<p&&(A+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const S=this._sizeLods[r],G=3*S*(r>T-Yn?r-T+Yn:0),D=4*(this._cubeSize-S);Xi(e,G,D,3*S,2*S),l.setRenderTarget(e),l.render(d,Pr)}}function Hu(i){const t=[],e=[],n=[];let r=i;const s=i-Yn+1+Ta.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Yn?l=Ta[a-i+Yn-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,M=3,p=2,h=1,A=new Float32Array(M*_*m),T=new Float32Array(p*_*m),S=new Float32Array(h*_*m);for(let D=0;D<m;D++){const C=D%3*2/3-1,F=D>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];A.set(E,M*_*D),T.set(f,p*_*D);const x=[D,D,D,D,D,D];S.set(x,h*_*D)}const G=new en;G.setAttribute("position",new Ve(A,M)),G.setAttribute("uv",new Ve(T,p)),G.setAttribute("faceIndex",new Ve(S,h)),t.push(G),r>Yn&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ra(i,t,e){const n=new Ln(i,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ku(i,t,e){const n=new Float32Array(wn),r=new N(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zs(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ca(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zs(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Pa(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function zs(){return`

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
	`}function Wu(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===jr||l===Jr,u=l===Jn||l===Qn;if(c||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wa(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new wa(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&pi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qu(i,t,e,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let p=0,h=M.length;p<h;p++)t.remove(M[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const M=m[_];for(let p=0,h=M.length;p<h;p++)t.update(M[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let T=0,S=A.length;T<S;T+=3){const G=A[T+0],D=A[T+1],C=A[T+2];f.push(G,D,D,C,C,G)}}else if(_!==void 0){const A=_.array;M=_.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const G=T+0,D=T+1,C=T+2;f.push(G,D,D,C,C,G)}}else return;const p=new(So(f)?wo:Ao)(f,1);p.version=M;const h=s.get(d);h&&t.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Yu(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*a),e.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,f*a,_),e.update(m,n,_))}function u(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];e.update(p,n,1)}function d(f,m,_,M){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,M,0,_);let h=0;for(let A=0;A<_;A++)h+=m[A]*M[A];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $u(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Zu(i,t,e){const n=new WeakMap,r=new jt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let G=o.attributes.position.count*S,D=1;G>t.maxTextureSize&&(D=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const C=new Float32Array(G*D*4*d),F=new yo(C,G,D,d);F.type=je,F.needsUpdate=!0;const E=S*4;for(let P=0;P<d;P++){const $=h[P],H=A[P],J=T[P],Q=G*D*4*P;for(let Z=0;Z<$.count;Z++){const et=Z*E;_===!0&&(r.fromBufferAttribute($,Z),C[Q+et+0]=r.x,C[Q+et+1]=r.y,C[Q+et+2]=r.z,C[Q+et+3]=0),M===!0&&(r.fromBufferAttribute(H,Z),C[Q+et+4]=r.x,C[Q+et+5]=r.y,C[Q+et+6]=r.z,C[Q+et+7]=0),p===!0&&(r.fromBufferAttribute(J,Z),C[Q+et+8]=r.x,C[Q+et+9]=r.y,C[Q+et+10]=r.z,C[Q+et+11]=J.itemSize===4?r.w:1)}}f={count:d,texture:F,size:new qt(G,D)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ku(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Do extends xe{constructor(t,e,n,r,s,a,o,l,c,u=Zn){if(u!==Zn&&u!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=Pn),n===void 0&&u===ei&&(n=ti),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Io=new xe,La=new Do(1,1),Uo=new yo,No=new Nl,Fo=new Po,Da=[],Ia=[],Ua=new Float32Array(16),Na=new Float32Array(9),Fa=new Float32Array(4);function si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Da[r];if(s===void 0&&(s=new Float32Array(r),Da[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=Ia[t];e===void 0&&(e=new Int32Array(t),Ia[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ju(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function Qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function ed(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Fa.set(n),i.uniformMatrix2fv(this.addr,!1,Fa),oe(e,n)}}function nd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Na.set(n),i.uniformMatrix3fv(this.addr,!1,Na),oe(e,n)}}function id(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;Ua.set(n),i.uniformMatrix4fv(this.addr,!1,Ua),oe(e,n)}}function rd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function ld(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function dd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(La.compareFunction=Mo,s=La):s=Io,e.setTexture2D(t||s,r)}function fd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||No,r)}function pd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Fo,r)}function md(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Uo,r)}function gd(i){switch(i){case 5126:return ju;case 35664:return Ju;case 35665:return Qu;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return hd;case 36296:return ud;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(i,t){i.uniform1fv(this.addr,t)}function vd(i,t){const e=si(t,this.size,2);i.uniform2fv(this.addr,e)}function xd(i,t){const e=si(t,this.size,3);i.uniform3fv(this.addr,e)}function Md(i,t){const e=si(t,this.size,4);i.uniform4fv(this.addr,e)}function Sd(i,t){const e=si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ed(i,t){const e=si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yd(i,t){const e=si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Td(i,t){i.uniform1iv(this.addr,t)}function bd(i,t){i.uniform2iv(this.addr,t)}function Ad(i,t){i.uniform3iv(this.addr,t)}function wd(i,t){i.uniform4iv(this.addr,t)}function Rd(i,t){i.uniform1uiv(this.addr,t)}function Cd(i,t){i.uniform2uiv(this.addr,t)}function Pd(i,t){i.uniform3uiv(this.addr,t)}function Ld(i,t){i.uniform4uiv(this.addr,t)}function Dd(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Io,s[a])}function Id(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||No,s[a])}function Ud(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Fo,s[a])}function Nd(i,t,e){const n=this.cache,r=t.length,s=rr(e,r);ae(n,s)||(i.uniform1iv(this.addr,s),oe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Uo,s[a])}function Fd(i){switch(i){case 5126:return _d;case 35664:return vd;case 35665:return xd;case 35666:return Md;case 35674:return Sd;case 35675:return Ed;case 35676:return yd;case 5124:case 35670:return Td;case 35667:case 35671:return bd;case 35668:case 35672:return Ad;case 35669:case 35673:return wd;case 5125:return Rd;case 36294:return Cd;case 36295:return Pd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return Ud;case 36289:case 36303:case 36311:case 36292:return Nd}}class Od{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gd(e.type)}}class Bd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fd(e.type)}}class zd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function Oa(i,t){i.seq.push(t),i.map[t.id]=t}function Vd(i,t,e){const n=i.name,r=n.length;for(Nr.lastIndex=0;;){const s=Nr.exec(n),a=Nr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Oa(e,c===void 0?new Od(o,i,t):new Bd(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new zd(o),Oa(e,d)),e=d}}}class Ji{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Vd(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ba(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gd=37297;let Hd=0;function kd(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const za=new Ft;function Wd(i){kt._getMatrix(za,kt.workingColorSpace,i);const t=`mat3( ${za.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case nr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Va(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+kd(i.getShaderSource(t),a)}else return r}function Xd(i,t){const e=Wd(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qd(i,t){let e;switch(t){case cl:e="Linear";break;case hl:e="Reinhard";break;case ul:e="Cineon";break;case ao:e="ACESFilmic";break;case fl:e="AgX";break;case pl:e="Neutral";break;case dl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qi=new N;function Yd(){kt.getLuminanceCoefficients(qi);const i=qi.x.toFixed(4),t=qi.y.toFixed(4),e=qi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $d(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mi).join(`
`)}function Zd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function mi(i){return i!==""}function Ga(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ha(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rs(i){return i.replace(jd,Qd)}const Jd=new Map;function Qd(i,t){let e=Bt[t];if(e===void 0){const n=Jd.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rs(e)}const tf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(i){return i.replace(tf,ef)}function ef(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===io?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ro?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ze&&(t="SHADOWMAP_TYPE_VSM"),t}function rf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jn:case Qn:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qn:t="ENVMAP_MODE_REFRACTION";break}return t}function af(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case so:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case ll:t="ENVMAP_BLENDING_ADD";break}return t}function of(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lf(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=nf(e),c=rf(e),u=sf(e),d=af(e),f=of(e),m=$d(e),_=Zd(s),M=r.createProgram();let p,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(mi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(mi).join(`
`),h.length>0&&(h+=`
`)):(p=[Wa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mi).join(`
`),h=[Wa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==pn?qd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Xd("linearToOutputTexel",e.outputColorSpace),Yd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mi).join(`
`)),a=Rs(a),a=Ga(a,e),a=Ha(a,e),o=Rs(o),o=Ga(o,e),o=Ha(o,e),a=ka(a),o=ka(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+p+a,S=A+h+o,G=Ba(r,r.VERTEX_SHADER,T),D=Ba(r,r.FRAGMENT_SHADER,S);r.attachShader(M,G),r.attachShader(M,D),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(P){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(M).trim(),H=r.getShaderInfoLog(G).trim(),J=r.getShaderInfoLog(D).trim();let Q=!0,Z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,G,D);else{const et=Va(r,G,"vertex"),k=Va(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+et+`
`+k)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(H===""||J==="")&&(Z=!1);Z&&(P.diagnostics={runnable:Q,programLog:$,vertexShader:{log:H,prefix:p},fragmentShader:{log:J,prefix:h}})}r.deleteShader(G),r.deleteShader(D),F=new Ji(r,M),E=Kd(r,M)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,Gd)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hd++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=D,this}let cf=0;class hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uf(t),e.set(t,n)),n}}class uf{constructor(t){this.id=cf++,this.code=t,this.usedTimes=0}}function df(i,t,e,n,r,s,a){const o=new To,l=new hf,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,P,$,H){const J=$.fog,Q=H.geometry,Z=E.isMeshStandardMaterial?$.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),k=et&&et.mapping===er?et.image.height:null,lt=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const R=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,b=R!==void 0?R.length:0;let it=0;Q.morphAttributes.position!==void 0&&(it=1),Q.morphAttributes.normal!==void 0&&(it=2),Q.morphAttributes.color!==void 0&&(it=3);let ct,O,X,nt;if(lt){const Zt=Oe[lt];ct=Zt.vertexShader,O=Zt.fragmentShader}else ct=E.vertexShader,O=E.fragmentShader,l.update(E),X=l.getVertexShaderID(E),nt=l.getFragmentShaderID(E);const q=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),pt=H.isInstancedMesh===!0,Mt=H.isBatchedMesh===!0,Ct=!!E.map,At=!!E.matcap,zt=!!et,w=!!E.aoMap,Jt=!!E.lightMap,Pt=!!E.bumpMap,Lt=!!E.normalMap,St=!!E.displacementMap,Ht=!!E.emissiveMap,xt=!!E.metalnessMap,y=!!E.roughnessMap,g=E.anisotropy>0,B=E.clearcoat>0,K=E.dispersion>0,tt=E.iridescence>0,Y=E.sheen>0,Et=E.transmission>0,ht=g&&!!E.anisotropyMap,gt=B&&!!E.clearcoatMap,Vt=B&&!!E.clearcoatNormalMap,rt=B&&!!E.clearcoatRoughnessMap,_t=tt&&!!E.iridescenceMap,Rt=tt&&!!E.iridescenceThicknessMap,Dt=Y&&!!E.sheenColorMap,vt=Y&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,Ot=!!E.specularColorMap,Qt=!!E.specularIntensityMap,L=Et&&!!E.transmissionMap,ut=Et&&!!E.thicknessMap,W=!!E.gradientMap,j=!!E.alphaMap,mt=E.alphaTest>0,dt=!!E.alphaHash,Ut=!!E.extensions;let re=pn;E.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(re=i.toneMapping);const he={shaderID:lt,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:O,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:nt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Mt,batchingColor:Mt&&H._colorsTexture!==null,instancing:pt,instancingColor:pt&&H.instanceColor!==null,instancingMorph:pt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ii,alphaToCoverage:!!E.alphaToCoverage,map:Ct,matcap:At,envMap:zt,envMapMode:zt&&et.mapping,envMapCubeUVHeight:k,aoMap:w,lightMap:Jt,bumpMap:Pt,normalMap:Lt,displacementMap:f&&St,emissiveMap:Ht,normalMapObjectSpace:Lt&&E.normalMapType===vl,normalMapTangentSpace:Lt&&E.normalMapType===xo,metalnessMap:xt,roughnessMap:y,anisotropy:g,anisotropyMap:ht,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:rt,dispersion:K,iridescence:tt,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:Gt,specularColorMap:Ot,specularIntensityMap:Qt,transmission:Et,transmissionMap:L,thicknessMap:ut,gradientMap:W,opaque:E.transparent===!1&&E.blending===$n&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:dt,combine:E.combine,mapUv:Ct&&M(E.map.channel),aoMapUv:w&&M(E.aoMap.channel),lightMapUv:Jt&&M(E.lightMap.channel),bumpMapUv:Pt&&M(E.bumpMap.channel),normalMapUv:Lt&&M(E.normalMap.channel),displacementMapUv:St&&M(E.displacementMap.channel),emissiveMapUv:Ht&&M(E.emissiveMap.channel),metalnessMapUv:xt&&M(E.metalnessMap.channel),roughnessMapUv:y&&M(E.roughnessMap.channel),anisotropyMapUv:ht&&M(E.anisotropyMap.channel),clearcoatMapUv:gt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:vt&&M(E.sheenRoughnessMap.channel),specularMapUv:Gt&&M(E.specularMap.channel),specularColorMapUv:Ot&&M(E.specularColorMap.channel),specularIntensityMapUv:Qt&&M(E.specularIntensityMap.channel),transmissionMapUv:L&&M(E.transmissionMap.channel),thicknessMapUv:ut&&M(E.thicknessMap.channel),alphaMapUv:j&&M(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Lt||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Ct||j),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:at,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:it,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Ct&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:Ht&&E.emissiveMap.isVideoTexture===!0&&kt.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ke,flipSided:E.side===ve,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function h(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)x.push(P),x.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(A(x,E),T(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function A(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function T(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const x=_[E.type];let P;if(x){const $=Oe[x];P=$l.clone($.uniforms)}else P=E.uniforms;return P}function G(E,x){let P;for(let $=0,H=u.length;$<H;$++){const J=u[$];if(J.cacheKey===x){P=J,++P.usedTimes;break}}return P===void 0&&(P=new lf(i,x,E,s),u.push(P)),P}function D(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:G,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:F}}function ff(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qa(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,f,m,_,M,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:M,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=M,h.group=p),t++,h}function o(d,f,m,_,M,p){const h=a(d,f,m,_,M,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(d,f,m,_,M,p){const h=a(d,f,m,_,M,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||pf),n.length>1&&n.sort(f||Xa),r.length>1&&r.sort(f||Xa)}function u(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function mf(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new qa,i.set(n,[a])):r>=s.length?(a=new qa,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Xt};break;case"SpotLight":e={position:new N,direction:new N,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function _f(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vf=0;function xf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mf(i){const t=new gf,e=_f(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new ie,a=new ie;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,M=0,p=0,h=0,A=0,T=0,S=0,G=0,D=0,C=0;c.sort(xf);for(let E=0,x=c.length;E<x;E++){const P=c[E],$=P.color,H=P.intensity,J=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=$.r*H,d+=$.g*H,f+=$.b*H;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],H);C++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,k=e.get(P);k.shadowIntensity=et.intensity,k.shadowBias=et.bias,k.shadowNormalBias=et.normalBias,k.shadowRadius=et.radius,k.shadowMapSize=et.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=P.shadow.matrix,A++}n.directional[m]=Z,m++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy($).multiplyScalar(H),Z.distance=J,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[M]=Z;const et=P.shadow;if(P.map&&(n.spotLightMap[G]=P.map,G++,et.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[M]=et.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=et.intensity,k.shadowBias=et.bias,k.shadowNormalBias=et.normalBias,k.shadowRadius=et.radius,k.shadowMapSize=et.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=Q,S++}M++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy($).multiplyScalar(H),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=Z,p++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const et=P.shadow,k=e.get(P);k.shadowIntensity=et.intensity,k.shadowBias=et.bias,k.shadowNormalBias=et.normalBias,k.shadowRadius=et.radius,k.shadowMapSize=et.mapSize,k.shadowCameraNear=et.camera.near,k.shadowCameraFar=et.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=P.shadow.matrix,T++}n.point[_]=Z,_++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(H),Z.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[h]=Z,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==_||F.spotLength!==M||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==S||F.numSpotMaps!==G||F.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+G-D,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,F.directionalLength=m,F.pointLength=_,F.spotLength=M,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=S,F.numSpotMaps=G,F.numLightProbes=C,n.version=vf++)}function l(c,u){let d=0,f=0,m=0,_=0,M=0;const p=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const T=c[h];if(T.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const S=n.hemi[M];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Ya(i){const t=new Mf(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Sf(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ya(i),t.set(r,[o])):s>=a.length?(o=new Ya(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ef extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yf extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bf=`uniform sampler2D shadow_pass;
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
}`;function Af(i,t,e){let n=new Os;const r=new qt,s=new qt,a=new jt,o=new Ef({depthPacking:_l}),l=new yf,c={},u=e.maxTextureSize,d={[mn]:ve,[ve]:mn,[Ke]:Ke},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Tf,fragmentShader:bf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ce(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let h=this.type;this.render=function(D,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),$=i.state;$.setBlending(fn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const H=h!==Ze&&this.type===Ze,J=h===Ze&&this.type!==Ze;for(let Q=0,Z=D.length;Q<Z;Q++){const et=D[Q],k=et.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const lt=k.getFrameExtents();if(r.multiply(lt),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/lt.x),r.x=s.x*lt.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/lt.y),r.y=s.y*lt.y,k.mapSize.y=s.y)),k.map===null||H===!0||J===!0){const b=this.type!==Ze?{minFilter:Ne,magFilter:Ne}:{};k.map!==null&&k.map.dispose(),k.map=new Ln(r.x,r.y,b),k.map.texture.name=et.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const R=k.getViewportCount();for(let b=0;b<R;b++){const it=k.getViewport(b);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),$.viewport(a),k.updateMatrices(et,b),n=k.getFrustum(),S(C,F,k.camera,et,this.type)}k.isPointLightShadow!==!0&&this.type===Ze&&A(k,F),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,P)};function A(D,C){const F=t.update(M);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ln(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(C,null,F,f,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(C,null,F,m,M,null)}function T(D,C,F,E){let x=null;const P=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)x=P;else if(x=F.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=x.uuid,H=C.uuid;let J=c[$];J===void 0&&(J={},c[$]=J);let Q=J[H];Q===void 0&&(Q=x.clone(),J[H]=Q,C.addEventListener("dispose",G)),x=Q}if(x.visible=C.visible,x.wireframe=C.wireframe,E===Ze?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=i.properties.get(x);$.light=F}return x}function S(D,C,F,E,x){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===Ze)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const H=t.update(D),J=D.material;if(Array.isArray(J)){const Q=H.groups;for(let Z=0,et=Q.length;Z<et;Z++){const k=Q[Z],lt=J[k.materialIndex];if(lt&&lt.visible){const R=T(D,lt,E,x);D.onBeforeShadow(i,D,C,F,H,R,k),i.renderBufferDirect(F,null,H,R,D,k),D.onAfterShadow(i,D,C,F,H,R,k)}}}else if(J.visible){const Q=T(D,J,E,x);D.onBeforeShadow(i,D,C,F,H,Q,null),i.renderBufferDirect(F,null,H,Q,D,null),D.onAfterShadow(i,D,C,F,H,Q,null)}}const $=D.children;for(let H=0,J=$.length;H<J;H++)S($[H],C,F,E,x)}function G(D){D.target.removeEventListener("dispose",G);for(const F in c){const E=c[F],x=D.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const wf={[Wr]:Xr,[qr]:Zr,[Yr]:Kr,[jn]:$r,[Xr]:Wr,[Zr]:qr,[Kr]:Yr,[$r]:jn};function Rf(i,t){function e(){let L=!1;const ut=new jt;let W=null;const j=new jt(0,0,0,0);return{setMask:function(mt){W!==mt&&!L&&(i.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){L=mt},setClear:function(mt,dt,Ut,re,he){he===!0&&(mt*=re,dt*=re,Ut*=re),ut.set(mt,dt,Ut,re),j.equals(ut)===!1&&(i.clearColor(mt,dt,Ut,re),j.copy(ut))},reset:function(){L=!1,W=null,j.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,W=null,j=null,mt=null;return{setReversed:function(dt){if(ut!==dt){const Ut=t.get("EXT_clip_control");ut?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const re=mt;mt=null,this.setClear(re)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?q(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(dt){W!==dt&&!L&&(i.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=wf[dt]),j!==dt){switch(dt){case Wr:i.depthFunc(i.NEVER);break;case Xr:i.depthFunc(i.ALWAYS);break;case qr:i.depthFunc(i.LESS);break;case jn:i.depthFunc(i.LEQUAL);break;case Yr:i.depthFunc(i.EQUAL);break;case $r:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case Kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=dt}},setLocked:function(dt){L=dt},setClear:function(dt){mt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),mt=dt)},reset:function(){L=!1,W=null,j=null,mt=null,ut=!1}}}function r(){let L=!1,ut=null,W=null,j=null,mt=null,dt=null,Ut=null,re=null,he=null;return{setTest:function(Zt){L||(Zt?q(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Zt){ut!==Zt&&!L&&(i.stencilMask(Zt),ut=Zt)},setFunc:function(Zt,Re,He){(W!==Zt||j!==Re||mt!==He)&&(i.stencilFunc(Zt,Re,He),W=Zt,j=Re,mt=He)},setOp:function(Zt,Re,He){(dt!==Zt||Ut!==Re||re!==He)&&(i.stencilOp(Zt,Re,He),dt=Zt,Ut=Re,re=He)},setLocked:function(Zt){L=Zt},setClear:function(Zt){he!==Zt&&(i.clearStencil(Zt),he=Zt)},reset:function(){L=!1,ut=null,W=null,j=null,mt=null,dt=null,Ut=null,re=null,he=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],_=null,M=!1,p=null,h=null,A=null,T=null,S=null,G=null,D=null,C=new Xt(0,0,0),F=0,E=!1,x=null,P=null,$=null,H=null,J=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,et=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(k)[1]),Z=et>=1):k.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Z=et>=2);let lt=null,R={};const b=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),ct=new jt().fromArray(b),O=new jt().fromArray(it);function X(L,ut,W,j){const mt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<W;Ut++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ut+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return dt}const nt={};nt[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(jn),Pt(!1),Lt(js),q(i.CULL_FACE),w(fn);function q(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function at(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function pt(L,ut){return d[L]!==ut?(i.bindFramebuffer(L,ut),d[L]=ut,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Mt(L,ut){let W=m,j=!1;if(L){W=f.get(ut),W===void 0&&(W=[],f.set(ut,W));const mt=L.textures;if(W.length!==mt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ut=mt.length;dt<Ut;dt++)W[dt]=i.COLOR_ATTACHMENT0+dt;W.length=mt.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function Ct(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const At={[An]:i.FUNC_ADD,[Wo]:i.FUNC_SUBTRACT,[Xo]:i.FUNC_REVERSE_SUBTRACT};At[qo]=i.MIN,At[Yo]=i.MAX;const zt={[$o]:i.ZERO,[Zo]:i.ONE,[Ko]:i.SRC_COLOR,[Hr]:i.SRC_ALPHA,[nl]:i.SRC_ALPHA_SATURATE,[tl]:i.DST_COLOR,[Jo]:i.DST_ALPHA,[jo]:i.ONE_MINUS_SRC_COLOR,[kr]:i.ONE_MINUS_SRC_ALPHA,[el]:i.ONE_MINUS_DST_COLOR,[Qo]:i.ONE_MINUS_DST_ALPHA,[il]:i.CONSTANT_COLOR,[rl]:i.ONE_MINUS_CONSTANT_COLOR,[sl]:i.CONSTANT_ALPHA,[al]:i.ONE_MINUS_CONSTANT_ALPHA};function w(L,ut,W,j,mt,dt,Ut,re,he,Zt){if(L===fn){M===!0&&(at(i.BLEND),M=!1);return}if(M===!1&&(q(i.BLEND),M=!0),L!==ko){if(L!==p||Zt!==E){if((h!==An||S!==An)&&(i.blendEquation(i.FUNC_ADD),h=An,S=An),Zt)switch(L){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFunc(i.ONE,i.ONE);break;case Qs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ta:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,T=null,G=null,D=null,C.set(0,0,0),F=0,p=L,E=Zt}return}mt=mt||ut,dt=dt||W,Ut=Ut||j,(ut!==h||mt!==S)&&(i.blendEquationSeparate(At[ut],At[mt]),h=ut,S=mt),(W!==A||j!==T||dt!==G||Ut!==D)&&(i.blendFuncSeparate(zt[W],zt[j],zt[dt],zt[Ut]),A=W,T=j,G=dt,D=Ut),(re.equals(C)===!1||he!==F)&&(i.blendColor(re.r,re.g,re.b,he),C.copy(re),F=he),p=L,E=!1}function Jt(L,ut){L.side===Ke?at(i.CULL_FACE):q(i.CULL_FACE);let W=L.side===ve;ut&&(W=!W),Pt(W),L.blending===$n&&L.transparent===!1?w(fn):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function Lt(L){L!==Go?(q(i.CULL_FACE),L!==P&&(L===js?i.cullFace(i.BACK):L===Ho?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),P=L}function St(L){L!==$&&(Z&&i.lineWidth(L),$=L)}function Ht(L,ut,W){L?(q(i.POLYGON_OFFSET_FILL),(H!==ut||J!==W)&&(i.polygonOffset(ut,W),H=ut,J=W)):at(i.POLYGON_OFFSET_FILL)}function xt(L){L?q(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function y(L){L===void 0&&(L=i.TEXTURE0+Q-1),lt!==L&&(i.activeTexture(L),lt=L)}function g(L,ut,W){W===void 0&&(lt===null?W=i.TEXTURE0+Q-1:W=lt);let j=R[W];j===void 0&&(j={type:void 0,texture:void 0},R[W]=j),(j.type!==L||j.texture!==ut)&&(lt!==W&&(i.activeTexture(W),lt=W),i.bindTexture(L,ut||nt[L]),j.type=L,j.texture=ut)}function B(){const L=R[lt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){ct.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function vt(L){O.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),O.copy(L))}function Gt(L,ut){let W=c.get(ut);W===void 0&&(W=new WeakMap,c.set(ut,W));let j=W.get(L);j===void 0&&(j=i.getUniformBlockIndex(ut,L.name),W.set(L,j))}function Ot(L,ut){const j=c.get(ut).get(L);l.get(ut)!==j&&(i.uniformBlockBinding(ut,j,L.__bindingPointIndex),l.set(ut,j))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,R={},d={},f=new WeakMap,m=[],_=null,M=!1,p=null,h=null,A=null,T=null,S=null,G=null,D=null,C=new Xt(0,0,0),F=0,E=!1,x=null,P=null,$=null,H=null,J=null,ct.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:at,bindFramebuffer:pt,drawBuffers:Mt,useProgram:Ct,setBlending:w,setMaterial:Jt,setFlipSided:Pt,setCullFace:Lt,setLineWidth:St,setPolygonOffset:Ht,setScissorTest:xt,activeTexture:y,bindTexture:g,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:_t,texImage3D:Rt,updateUBOMapping:Gt,uniformBlockBinding:Ot,texStorage2D:Vt,texStorage3D:rt,texSubImage2D:Y,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Dt,viewport:vt,reset:Qt}}function $a(i,t,e,n){const r=Cf(n);switch(e){case uo:return i*t;case po:return i*t;case mo:return i*t*2;case go:return i*t/r.components*r.byteLength;case Is:return i*t/r.components*r.byteLength;case _o:return i*t*2/r.components*r.byteLength;case Us:return i*t*2/r.components*r.byteLength;case fo:return i*t*3/r.components*r.byteLength;case Ue:return i*t*4/r.components*r.byteLength;case Ns:return i*t*4/r.components*r.byteLength;case Yi:case $i:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zi:case Ki:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ns:case rs:return Math.max(i,16)*Math.max(t,8)/4;case es:case is:return Math.max(i,8)*Math.max(t,8)/2;case ss:case as:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case us:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ds:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ps:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ms:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _s:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xs:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ms:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ss:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ji:case Es:case ys:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vo:case Ts:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bs:case As:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cf(i){switch(i){case tn:case lo:return{byteLength:1,components:1};case _i:case co:case xi:return{byteLength:2,components:1};case Ls:case Ds:return{byteLength:2,components:4};case Pn:case Ps:case je:return{byteLength:4,components:1};case ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Pf(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):tr("canvas")}function M(y,g,B){let K=1;const tt=xt(y);if((tt.width>B||tt.height>B)&&(K=B/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(K*tt.width),Et=Math.floor(K*tt.height);d===void 0&&(d=_(Y,Et));const ht=g?_(Y,Et):d;return ht.width=Y,ht.height=Et,ht.getContext("2d").drawImage(y,0,0,Y,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+Et+")."),ht}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,g,B,K,tt=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=g;if(g===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),g===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),g===i.RGBA){const Et=tt?nr:kt.getTransfer(K);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Et===Kt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function S(y,g){let B;return y?g===null||g===Pn||g===ti?B=i.DEPTH24_STENCIL8:g===je?B=i.DEPTH32F_STENCIL8:g===_i&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pn||g===ti?B=i.DEPTH_COMPONENT24:g===je?B=i.DEPTH_COMPONENT32F:g===_i&&(B=i.DEPTH_COMPONENT16),B}function G(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ne&&y.minFilter!==Be?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function D(y){const g=y.target;g.removeEventListener("dispose",D),F(g),g.isVideoTexture&&u.delete(g)}function C(y){const g=y.target;g.removeEventListener("dispose",C),x(g)}function F(y){const g=n.get(y);if(g.__webglInit===void 0)return;const B=y.source,K=f.get(B);if(K){const tt=K[g.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(y),Object.keys(K).length===0&&f.delete(B)}n.remove(y)}function E(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const B=y.source,K=f.get(B);delete K[g.__cacheKey],a.memory.textures--}function x(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let tt=0;tt<g.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(g.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)i.deleteFramebuffer(g.__webglFramebuffer[K]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=y.textures;for(let K=0,tt=B.length;K<tt;K++){const Y=n.get(B[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(y)}let P=0;function $(){P=0}function H(){const y=P;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),P+=1,y}function J(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Q(y,g){const B=n.get(y);if(y.isVideoTexture&&St(y),y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(B,y,g);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function Z(y,g){const B=n.get(y);if(y.version>0&&B.__version!==y.version){O(B,y,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function et(y,g){const B=n.get(y);if(y.version>0&&B.__version!==y.version){O(B,y,g);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function k(y,g){const B=n.get(y);if(y.version>0&&B.__version!==y.version){X(B,y,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const lt={[Qr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[ts]:i.MIRRORED_REPEAT},R={[Ne]:i.NEAREST,[ml]:i.NEAREST_MIPMAP_NEAREST,[Ai]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[or]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},b={[xl]:i.NEVER,[bl]:i.ALWAYS,[Ml]:i.LESS,[Mo]:i.LEQUAL,[Sl]:i.EQUAL,[Tl]:i.GEQUAL,[El]:i.GREATER,[yl]:i.NOTEQUAL};function it(y,g){if(g.type===je&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Be||g.magFilter===or||g.magFilter===Ai||g.magFilter===Cn||g.minFilter===Be||g.minFilter===or||g.minFilter===Ai||g.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,lt[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,lt[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,lt[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,R[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,R[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,b[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ne||g.minFilter!==Ai&&g.minFilter!==Cn||g.type===je&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ct(y,g){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",D));const K=g.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const Y=J(g);if(Y!==y.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[Y].usedTimes++;const Et=tt[y.__cacheKey];Et!==void 0&&(tt[y.__cacheKey].usedTimes--,Et.usedTimes===0&&E(g)),y.__cacheKey=Y,y.__webglTexture=tt[Y].texture}return B}function O(y,g,B){let K=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=i.TEXTURE_3D);const tt=ct(y,g),Y=g.source;e.bindTexture(K,y.__webglTexture,i.TEXTURE0+B);const Et=n.get(Y);if(Y.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ht=kt.getPrimaries(kt.workingColorSpace),gt=g.colorSpace===un?null:kt.getPrimaries(g.colorSpace),Vt=g.colorSpace===un||ht===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let rt=M(g.image,!1,r.maxTextureSize);rt=Ht(g,rt);const _t=s.convert(g.format,g.colorSpace),Rt=s.convert(g.type);let Dt=T(g.internalFormat,_t,Rt,g.colorSpace,g.isVideoTexture);it(K,g);let vt;const Gt=g.mipmaps,Ot=g.isVideoTexture!==!0,Qt=Et.__version===void 0||tt===!0,L=Y.dataReady,ut=G(g,rt);if(g.isDepthTexture)Dt=S(g.format===ei,g.type),Qt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,_t,Rt,null));else if(g.isDataTexture)if(Gt.length>0){Ot&&Qt&&e.texStorage2D(i.TEXTURE_2D,ut,Dt,Gt[0].width,Gt[0].height);for(let W=0,j=Gt.length;W<j;W++)vt=Gt[W],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(i.TEXTURE_2D,W,Dt,vt.width,vt.height,0,_t,Rt,vt.data);g.generateMipmaps=!1}else Ot?(Qt&&e.texStorage2D(i.TEXTURE_2D,ut,Dt,rt.width,rt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,Rt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,_t,Rt,rt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ot&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Dt,Gt[0].width,Gt[0].height,rt.depth);for(let W=0,j=Gt.length;W<j;W++)if(vt=Gt[W],g.format!==Ue)if(_t!==null)if(Ot){if(L)if(g.layerUpdates.size>0){const mt=$a(vt.width,vt.height,g.format,g.type);for(const dt of g.layerUpdates){const Ut=vt.data.subarray(dt*mt/vt.data.BYTES_PER_ELEMENT,(dt+1)*mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,dt,vt.width,vt.height,1,_t,Ut)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,vt.width,vt.height,rt.depth,_t,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Dt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,vt.width,vt.height,rt.depth,_t,Rt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Dt,vt.width,vt.height,rt.depth,0,_t,Rt,vt.data)}else{Ot&&Qt&&e.texStorage2D(i.TEXTURE_2D,ut,Dt,Gt[0].width,Gt[0].height);for(let W=0,j=Gt.length;W<j;W++)vt=Gt[W],g.format!==Ue?_t!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(i.TEXTURE_2D,W,Dt,vt.width,vt.height,0,_t,Rt,vt.data)}else if(g.isDataArrayTexture)if(Ot){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Dt,rt.width,rt.height,rt.depth),L)if(g.layerUpdates.size>0){const W=$a(rt.width,rt.height,g.format,g.type);for(const j of g.layerUpdates){const mt=rt.data.subarray(j*W/rt.data.BYTES_PER_ELEMENT,(j+1)*W/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,_t,Rt,mt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,Rt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,_t,Rt,rt.data);else if(g.isData3DTexture)Ot?(Qt&&e.texStorage3D(i.TEXTURE_3D,ut,Dt,rt.width,rt.height,rt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,Rt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,_t,Rt,rt.data);else if(g.isFramebufferTexture){if(Qt)if(Ot)e.texStorage2D(i.TEXTURE_2D,ut,Dt,rt.width,rt.height);else{let W=rt.width,j=rt.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,Dt,W,j,0,_t,Rt,null),W>>=1,j>>=1}}else if(Gt.length>0){if(Ot&&Qt){const W=xt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Dt,W.width,W.height)}for(let W=0,j=Gt.length;W<j;W++)vt=Gt[W],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,_t,Rt,vt):e.texImage2D(i.TEXTURE_2D,W,Dt,_t,Rt,vt);g.generateMipmaps=!1}else if(Ot){if(Qt){const W=xt(rt);e.texStorage2D(i.TEXTURE_2D,ut,Dt,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Rt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,_t,Rt,rt);p(g)&&h(K),Et.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function X(y,g,B){if(g.image.length!==6)return;const K=ct(y,g),tt=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+B);const Y=n.get(tt);if(tt.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Et=kt.getPrimaries(kt.workingColorSpace),ht=g.colorSpace===un?null:kt.getPrimaries(g.colorSpace),gt=g.colorSpace===un||Et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Vt=g.isCompressedTexture||g.image[0].isCompressedTexture,rt=g.image[0]&&g.image[0].isDataTexture,_t=[];for(let j=0;j<6;j++)!Vt&&!rt?_t[j]=M(g.image[j],!0,r.maxCubemapSize):_t[j]=rt?g.image[j].image:g.image[j],_t[j]=Ht(g,_t[j]);const Rt=_t[0],Dt=s.convert(g.format,g.colorSpace),vt=s.convert(g.type),Gt=T(g.internalFormat,Dt,vt,g.colorSpace),Ot=g.isVideoTexture!==!0,Qt=Y.__version===void 0||K===!0,L=tt.dataReady;let ut=G(g,Rt);it(i.TEXTURE_CUBE_MAP,g);let W;if(Vt){Ot&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Gt,Rt.width,Rt.height);for(let j=0;j<6;j++){W=_t[j].mipmaps;for(let mt=0;mt<W.length;mt++){const dt=W[mt];g.format!==Ue?Dt!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,Gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,dt.width,dt.height,Dt,vt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,Gt,dt.width,dt.height,0,Dt,vt,dt.data)}}}else{if(W=g.mipmaps,Ot&&Qt){W.length>0&&ut++;const j=xt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(rt){Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t[j].width,_t[j].height,Dt,vt,_t[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,_t[j].width,_t[j].height,0,Dt,vt,_t[j].data);for(let mt=0;mt<W.length;mt++){const Ut=W[mt].image[j].image;Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Ut.width,Ut.height,Dt,vt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,Gt,Ut.width,Ut.height,0,Dt,vt,Ut.data)}}else{Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Dt,vt,_t[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,Dt,vt,_t[j]);for(let mt=0;mt<W.length;mt++){const dt=W[mt];Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Dt,vt,dt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,Gt,Dt,vt,dt.image[j])}}}p(g)&&h(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function nt(y,g,B,K,tt,Y){const Et=s.convert(B.format,B.colorSpace),ht=s.convert(B.type),gt=T(B.internalFormat,Et,ht,B.colorSpace),Vt=n.get(g),rt=n.get(B);if(rt.__renderTarget=g,!Vt.__hasExternalTextures){const _t=Math.max(1,g.width>>Y),Rt=Math.max(1,g.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,gt,_t,Rt,g.depth,0,Et,ht,null):e.texImage2D(tt,Y,gt,_t,Rt,0,Et,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Lt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,rt.__webglTexture,0,Pt(g)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,rt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(y,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const K=g.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Y=S(g.stencilBuffer,tt),Et=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Pt(g);Lt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,y)}else{const K=g.textures;for(let tt=0;tt<K.length;tt++){const Y=K[tt],Et=s.convert(Y.format,Y.colorSpace),ht=s.convert(Y.type),gt=T(Y.internalFormat,Et,ht,Y.colorSpace),Vt=Pt(g);B&&Lt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,gt,g.width,g.height):Lt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,gt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,gt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(g.depthTexture);K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const tt=K.__webglTexture,Y=Pt(g);if(g.depthTexture.format===Zn)Lt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(g.depthTexture.format===ei)Lt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function pt(y){const g=n.get(y),B=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const tt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),g.__depthDisposeCallback=tt}g.__boundDepthTexture=K}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");at(g.__webglFramebuffer,y)}else if(B){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=i.createRenderbuffer(),q(g.__webglDepthbuffer[K],y,!1);else{const tt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),q(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(y,g,B){const K=n.get(y);g!==void 0&&nt(K.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&pt(y)}function Ct(y){const g=y.texture,B=n.get(y),K=n.get(g);y.addEventListener("dispose",C);const tt=y.textures,Y=y.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=g.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let gt=0;gt<g.mipmaps.length;gt++)B.__webglFramebuffer[ht][gt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<g.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ht=0,gt=tt.length;ht<gt;ht++){const Vt=n.get(tt[ht]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Lt(y)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const gt=tt[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Vt=s.convert(gt.format,gt.colorSpace),rt=s.convert(gt.type),_t=T(gt.internalFormat,Vt,rt,gt.colorSpace,y.isXRRenderTarget===!0),Rt=Pt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,_t,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),q(B.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),it(i.TEXTURE_CUBE_MAP,g);for(let ht=0;ht<6;ht++)if(g.mipmaps&&g.mipmaps.length>0)for(let gt=0;gt<g.mipmaps.length;gt++)nt(B.__webglFramebuffer[ht][gt],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else nt(B.__webglFramebuffer[ht],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(g)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,gt=tt.length;ht<gt;ht++){const Vt=tt[ht],rt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),it(i.TEXTURE_2D,Vt),nt(B.__webglFramebuffer,y,Vt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),p(Vt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ht=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),it(ht,g),g.mipmaps&&g.mipmaps.length>0)for(let gt=0;gt<g.mipmaps.length;gt++)nt(B.__webglFramebuffer[gt],y,g,i.COLOR_ATTACHMENT0,ht,gt);else nt(B.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ht,0);p(g)&&h(ht),e.unbindTexture()}y.depthBuffer&&pt(y)}function At(y){const g=y.textures;for(let B=0,K=g.length;B<K;B++){const tt=g[B];if(p(tt)){const Y=A(y),Et=n.get(tt).__webglTexture;e.bindTexture(Y,Et),h(Y),e.unbindTexture()}}}const zt=[],w=[];function Jt(y){if(y.samples>0){if(Lt(y)===!1){const g=y.textures,B=y.width,K=y.height;let tt=i.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(y),ht=g.length>1;if(ht)for(let gt=0;gt<g.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<g.length;gt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const Vt=n.get(g[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,tt,i.NEAREST),l===!0&&(zt.length=0,w.length=0,zt.push(i.COLOR_ATTACHMENT0+gt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(zt.push(Y),w.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<g.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const Vt=n.get(g[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Pt(y){return Math.min(r.maxSamples,y.samples)}function Lt(y){const g=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function St(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function Ht(y,g){const B=y.colorSpace,K=y.format,tt=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==ii&&B!==un&&(kt.getTransfer(B)===Kt?(K!==Ue||tt!==tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function xt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=$,this.setTexture2D=Q,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=k,this.rebindTextures=Mt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Lt}function Lf(i,t){function e(n,r=un){let s;const a=kt.getTransfer(r);if(n===tn)return i.UNSIGNED_BYTE;if(n===Ls)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ds)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lo)return i.BYTE;if(n===co)return i.SHORT;if(n===_i)return i.UNSIGNED_SHORT;if(n===Ps)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===je)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===uo)return i.ALPHA;if(n===fo)return i.RGB;if(n===Ue)return i.RGBA;if(n===po)return i.LUMINANCE;if(n===mo)return i.LUMINANCE_ALPHA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===Is)return i.RED_INTEGER;if(n===_o)return i.RG;if(n===Us)return i.RG_INTEGER;if(n===Ns)return i.RGBA_INTEGER;if(n===Yi||n===$i||n===Zi||n===Ki)if(a===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yi)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ki)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yi)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$i)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zi)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ki)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===es||n===ns||n===is||n===rs)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===es)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ns)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===is)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ss||n===as||n===os)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ss||n===as)return a===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===os)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ls||n===cs||n===hs||n===us||n===ds||n===fs||n===ps||n===ms||n===gs||n===_s||n===vs||n===xs||n===Ms||n===Ss)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ls)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===us)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ds)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ps)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ms)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_s)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ms)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ss)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ji||n===Es||n===ys)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ji)return a===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Es)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ys)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===Ts||n===bs||n===As)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ji)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ts)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===As)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Df extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dn extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const If={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),h=this._getHandJoint(c,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(If)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ff{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new xe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:Uf,fragmentShader:Nf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Of extends ri{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const M=new Ff,p=e.getContextAttributes();let h=null,A=null;const T=[],S=[],G=new qt;let D=null;const C=new we;C.viewport=new jt;const F=new we;F.viewport=new jt;const E=[C,F],x=new Df;let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let X=T[O];return X===void 0&&(X=new Fr,T[O]=X),X.getTargetRaySpace()},this.getControllerGrip=function(O){let X=T[O];return X===void 0&&(X=new Fr,T[O]=X),X.getGripSpace()},this.getHand=function(O){let X=T[O];return X===void 0&&(X=new Fr,T[O]=X),X.getHandSpace()};function H(O){const X=S.indexOf(O.inputSource);if(X===-1)return;const nt=T[X];nt!==void 0&&(nt.update(O.inputSource,O.frame,c||a),nt.dispatchEvent({type:O.type,data:O.inputSource}))}function J(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Q);for(let O=0;O<T.length;O++){const X=S[O];X!==null&&(S[O]=null,T[O].disconnect(X))}P=null,$=null,M.reset(),t.setRenderTarget(h),m=null,f=null,d=null,r=null,A=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(G),r.renderState.layers===void 0){const X={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,X),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Ln(m.framebufferWidth,m.framebufferHeight,{format:Ue,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,nt=null,q=null;p.depth&&(q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=p.stencil?ei:Zn,nt=p.stencil?ti:Pn);const at={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(at),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Ln(f.textureWidth,f.textureHeight,{format:Ue,type:tn,depthTexture:new Do(f.textureWidth,f.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(O){for(let X=0;X<O.removed.length;X++){const nt=O.removed[X],q=S.indexOf(nt);q>=0&&(S[q]=null,T[q].disconnect(nt))}for(let X=0;X<O.added.length;X++){const nt=O.added[X];let q=S.indexOf(nt);if(q===-1){for(let pt=0;pt<T.length;pt++)if(pt>=S.length){S.push(nt),q=pt;break}else if(S[pt]===null){S[pt]=nt,q=pt;break}if(q===-1)break}const at=T[q];at&&at.connect(nt)}}const Z=new N,et=new N;function k(O,X,nt){Z.setFromMatrixPosition(X.matrixWorld),et.setFromMatrixPosition(nt.matrixWorld);const q=Z.distanceTo(et),at=X.projectionMatrix.elements,pt=nt.projectionMatrix.elements,Mt=at[14]/(at[10]-1),Ct=at[14]/(at[10]+1),At=(at[9]+1)/at[5],zt=(at[9]-1)/at[5],w=(at[8]-1)/at[0],Jt=(pt[8]+1)/pt[0],Pt=Mt*w,Lt=Mt*Jt,St=q/(-w+Jt),Ht=St*-w;if(X.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ht),O.translateZ(St),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),at[10]===-1)O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const xt=Mt+St,y=Ct+St,g=Pt-Ht,B=Lt+(q-Ht),K=At*Ct/y*xt,tt=zt*Ct/y*xt;O.projectionMatrix.makePerspective(g,B,K,tt,xt,y),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function lt(O,X){X===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(X.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let X=O.near,nt=O.far;M.texture!==null&&(M.depthNear>0&&(X=M.depthNear),M.depthFar>0&&(nt=M.depthFar)),x.near=F.near=C.near=X,x.far=F.far=C.far=nt,(P!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,$=x.far),C.layers.mask=O.layers.mask|2,F.layers.mask=O.layers.mask|4,x.layers.mask=C.layers.mask|F.layers.mask;const q=O.parent,at=x.cameras;lt(x,q);for(let pt=0;pt<at.length;pt++)lt(at[pt],q);at.length===2?k(x,C,F):x.projectionMatrix.copy(C.projectionMatrix),R(O,x,q)};function R(O,X,nt){nt===null?O.matrix.copy(X.matrixWorld):(O.matrix.copy(nt.matrixWorld),O.matrix.invert(),O.matrix.multiply(X.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ws*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let b=null;function it(O,X){if(u=X.getViewerPose(c||a),_=X,u!==null){const nt=u.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let q=!1;nt.length!==x.cameras.length&&(x.cameras.length=0,q=!0);for(let pt=0;pt<nt.length;pt++){const Mt=nt[pt];let Ct=null;if(m!==null)Ct=m.getViewport(Mt);else{const zt=d.getViewSubImage(f,Mt);Ct=zt.viewport,pt===0&&(t.setRenderTargetTextures(A,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(A))}let At=E[pt];At===void 0&&(At=new we,At.layers.enable(pt),At.viewport=new jt,E[pt]=At),At.matrix.fromArray(Mt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Mt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),pt===0&&(x.matrix.copy(At.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),q===!0&&x.cameras.push(At)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")){const pt=d.getDepthInformation(nt[0]);pt&&pt.isValid&&pt.texture&&M.init(t,pt,r.renderState)}}for(let nt=0;nt<T.length;nt++){const q=S[nt],at=T[nt];q!==null&&at!==void 0&&at.update(q,X,c||a)}b&&b(O,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),_=null}const ct=new Lo;ct.setAnimationLoop(it),this.setAnimationLoop=function(O){b=O},this.dispose=function(){}}}const yn=new Ge,Bf=new ie;function zf(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Ro(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,A,T):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===ve&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===ve&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=t.get(h),T=A.envMap,S=A.envMapRotation;T&&(p.envMap.value=T,yn.copy(S),yn.x*=-1,yn.y*=-1,yn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),p.envMapRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(yn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,A,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=T*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ve&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const A=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vf(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;n.uniformBlockBinding(A,S)}function c(A,T){let S=r[A.id];S===void 0&&(_(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",p));const G=T.program;n.updateUBOMapping(A,G);const D=t.render.frame;s[A.id]!==D&&(f(A),s[A.id]=D)}function u(A){const T=d();A.__bindingPointIndex=T;const S=i.createBuffer(),G=A.__size,D=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,G,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=r[A.id],S=A.uniforms,G=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,C=S.length;D<C;D++){const F=Array.isArray(S[D])?S[D]:[S[D]];for(let E=0,x=F.length;E<x;E++){const P=F[E];if(m(P,D,E,G)===!0){const $=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let Q=0;Q<H.length;Q++){const Z=H[Q],et=M(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,$+J,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,J),J+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,S,G){const D=A.value,C=T+"_"+S;if(G[C]===void 0)return typeof D=="number"||typeof D=="boolean"?G[C]=D:G[C]=D.clone(),!0;{const F=G[C];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return G[C]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function _(A){const T=A.uniforms;let S=0;const G=16;for(let C=0,F=T.length;C<F;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let x=0,P=E.length;x<P;x++){const $=E[x],H=Array.isArray($.value)?$.value:[$.value];for(let J=0,Q=H.length;J<Q;J++){const Z=H[J],et=M(Z),k=S%G,lt=k%et.boundary,R=k+lt;S+=lt,R!==0&&G-R<et.storage&&(S+=G-R),$.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=et.storage}}}const D=S%G;return D>0&&(S+=G-D),A.__size=S,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Gf{constructor(t={}){const{canvas:e=wl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,h=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=pn,this.toneMappingExposure=1;const S=this;let G=!1,D=0,C=0,F=null,E=-1,x=null;const P=new jt,$=new jt;let H=null;const J=new Xt(0);let Q=0,Z=e.width,et=e.height,k=1,lt=null,R=null;const b=new jt(0,0,Z,et),it=new jt(0,0,Z,et);let ct=!1;const O=new Os;let X=!1,nt=!1;const q=new ie,at=new ie,pt=new N,Mt=new jt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function zt(){return F===null?k:1}let w=n;function Jt(v,I){return e.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cs}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),w===null){const I="webgl2";if(w=Jt(I,v),w===null)throw Jt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Pt,Lt,St,Ht,xt,y,g,B,K,tt,Y,Et,ht,gt,Vt,rt,_t,Rt,Dt,vt,Gt,Ot,Qt,L;function ut(){Pt=new Xu(w),Pt.init(),Ot=new Lf(w,Pt),Lt=new zu(w,Pt,t,Ot),St=new Rf(w,Pt),Lt.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),Ht=new $u(w),xt=new ff,y=new Pf(w,Pt,St,xt,Lt,Ot,Ht),g=new Gu(S),B=new Wu(S),K=new ec(w),Qt=new Ou(w,K),tt=new qu(w,K,Ht,Qt),Y=new Ku(w,tt,K,Ht),Dt=new Zu(w,Lt,y),rt=new Vu(xt),Et=new df(S,g,B,Pt,Lt,Qt,rt),ht=new zf(S,xt),gt=new mf,Vt=new Sf(Pt),Rt=new Fu(S,g,B,St,Y,m,l),_t=new Af(S,Y,Lt),L=new Vf(w,Ht,Lt,St),vt=new Bu(w,Pt,Ht),Gt=new Yu(w,Pt,Ht),Ht.programs=Et.programs,S.capabilities=Lt,S.extensions=Pt,S.properties=xt,S.renderLists=gt,S.shadowMap=_t,S.state=St,S.info=Ht}ut();const W=new Of(S,w);this.xr=W,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Pt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Pt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(Z,et,!1))},this.getSize=function(v){return v.set(Z,et)},this.setSize=function(v,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,et=I,e.width=Math.floor(v*k),e.height=Math.floor(I*k),z===!0&&(e.style.width=v+"px",e.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Z*k,et*k).floor()},this.setDrawingBufferSize=function(v,I,z){Z=v,et=I,k=z,e.width=Math.floor(v*z),e.height=Math.floor(I*z),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(b)},this.setViewport=function(v,I,z,V){v.isVector4?b.set(v.x,v.y,v.z,v.w):b.set(v,I,z,V),St.viewport(P.copy(b).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(it)},this.setScissor=function(v,I,z,V){v.isVector4?it.set(v.x,v.y,v.z,v.w):it.set(v,I,z,V),St.scissor($.copy(it).multiplyScalar(k).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(v){St.setScissorTest(ct=v)},this.setOpaqueSort=function(v){lt=v},this.setTransparentSort=function(v){R=v},this.getClearColor=function(v){return v.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(v=!0,I=!0,z=!0){let V=0;if(v){let U=!1;if(F!==null){const st=F.texture.format;U=st===Ns||st===Us||st===Is}if(U){const st=F.texture.type,ft=st===tn||st===Pn||st===_i||st===ti||st===Ls||st===Ds,yt=Rt.getClearColor(),Tt=Rt.getClearAlpha(),It=yt.r,Nt=yt.g,bt=yt.b;ft?(_[0]=It,_[1]=Nt,_[2]=bt,_[3]=Tt,w.clearBufferuiv(w.COLOR,0,_)):(M[0]=It,M[1]=Nt,M[2]=bt,M[3]=Tt,w.clearBufferiv(w.COLOR,0,M))}else V|=w.COLOR_BUFFER_BIT}I&&(V|=w.DEPTH_BUFFER_BIT),z&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Vt.dispose(),xt.dispose(),g.dispose(),B.dispose(),Y.dispose(),Qt.dispose(),L.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",ks),W.removeEventListener("sessionend",Ws),_n.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const v=Ht.autoReset,I=_t.enabled,z=_t.autoUpdate,V=_t.needsUpdate,U=_t.type;ut(),Ht.autoReset=v,_t.enabled=I,_t.autoUpdate=z,_t.needsUpdate=V,_t.type=U}function dt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ut(v){const I=v.target;I.removeEventListener("dispose",Ut),re(I)}function re(v){he(v),xt.remove(v)}function he(v){const I=xt.get(v).programs;I!==void 0&&(I.forEach(function(z){Et.releaseProgram(z)}),v.isShaderMaterial&&Et.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,z,V,U,st){I===null&&(I=Ct);const ft=U.isMesh&&U.matrixWorld.determinant()<0,yt=Bo(v,I,z,V,U);St.setMaterial(V,ft);let Tt=z.index,It=1;if(V.wireframe===!0){if(Tt=tt.getWireframeAttribute(z),Tt===void 0)return;It=2}const Nt=z.drawRange,bt=z.attributes.position;let Wt=Nt.start*It,te=(Nt.start+Nt.count)*It;st!==null&&(Wt=Math.max(Wt,st.start*It),te=Math.min(te,(st.start+st.count)*It)),Tt!==null?(Wt=Math.max(Wt,0),te=Math.min(te,Tt.count)):bt!=null&&(Wt=Math.max(Wt,0),te=Math.min(te,bt.count));const ee=te-Wt;if(ee<0||ee===1/0)return;Qt.setup(U,V,yt,z,Tt);let me,Yt=vt;if(Tt!==null&&(me=K.get(Tt),Yt=Gt,Yt.setIndex(me)),U.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*zt()),Yt.setMode(w.LINES)):Yt.setMode(w.TRIANGLES);else if(U.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),St.setLineWidth(wt*zt()),U.isLineSegments?Yt.setMode(w.LINES):U.isLineLoop?Yt.setMode(w.LINE_LOOP):Yt.setMode(w.LINE_STRIP)}else U.isPoints?Yt.setMode(w.POINTS):U.isSprite&&Yt.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,ke=U._multiDrawCounts,$t=U._multiDrawCount,Ce=Tt?K.get(Tt).bytesPerElement:1,Dn=xt.get(V).currentProgram.getUniforms();for(let Me=0;Me<$t;Me++)Dn.setValue(w,"_gl_DrawID",Me),Yt.render(wt[Me]/Ce,ke[Me])}else if(U.isInstancedMesh)Yt.renderInstances(Wt,ee,U.count);else if(z.isInstancedBufferGeometry){const wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ke=Math.min(z.instanceCount,wt);Yt.renderInstances(Wt,ee,ke)}else Yt.render(Wt,ee)};function Zt(v,I,z){v.transparent===!0&&v.side===Ke&&v.forceSinglePass===!1?(v.side=ve,v.needsUpdate=!0,bi(v,I,z),v.side=mn,v.needsUpdate=!0,bi(v,I,z),v.side=Ke):bi(v,I,z)}this.compile=function(v,I,z=null){z===null&&(z=v),h=Vt.get(z),h.init(I),T.push(h),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),v!==z&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const V=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const yt=st[ft];Zt(yt,z,U),V.add(yt)}else Zt(st,z,U),V.add(st)}),T.pop(),h=null,V},this.compileAsync=function(v,I,z=null){const V=this.compile(v,I,z);return new Promise(U=>{function st(){if(V.forEach(function(ft){xt.get(ft).currentProgram.isReady()&&V.delete(ft)}),V.size===0){U(v);return}setTimeout(st,10)}Pt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Re=null;function He(v){Re&&Re(v)}function ks(){_n.stop()}function Ws(){_n.start()}const _n=new Lo;_n.setAnimationLoop(He),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(v){Re=v,W.setAnimationLoop(v),v===null?_n.stop():_n.start()},W.addEventListener("sessionstart",ks),W.addEventListener("sessionend",Ws),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,I,F),h=Vt.get(v,T.length),h.init(I),T.push(h),at.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),O.setFromProjectionMatrix(at),nt=this.localClippingEnabled,X=rt.init(this.clippingPlanes,nt),p=gt.get(v,A.length),p.init(),A.push(p),W.enabled===!0&&W.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&ar(st,I,-1/0,S.sortObjects)}ar(v,I,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(lt,R),At=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,At&&Rt.addToRenderList(p,v),this.info.render.frame++,X===!0&&rt.beginShadows();const z=h.state.shadowsArray;_t.render(z,v,I),X===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,U=p.transmissive;if(h.setupLights(),I.isArrayCamera){const st=I.cameras;if(U.length>0)for(let ft=0,yt=st.length;ft<yt;ft++){const Tt=st[ft];qs(V,U,v,Tt)}At&&Rt.render(v);for(let ft=0,yt=st.length;ft<yt;ft++){const Tt=st[ft];Xs(p,v,Tt,Tt.viewport)}}else U.length>0&&qs(V,U,v,I),At&&Rt.render(v),Xs(p,v,I);F!==null&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(S,v,I),Qt.resetDefaultState(),E=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],X===!0&&rt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function ar(v,I,z,V){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||O.intersectsSprite(v)){V&&Mt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(at);const ft=Y.update(v),yt=v.material;yt.visible&&p.push(v,ft,yt,z,Mt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||O.intersectsObject(v))){const ft=Y.update(v),yt=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Mt.copy(v.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Mt.copy(ft.boundingSphere.center)),Mt.applyMatrix4(v.matrixWorld).applyMatrix4(at)),Array.isArray(yt)){const Tt=ft.groups;for(let It=0,Nt=Tt.length;It<Nt;It++){const bt=Tt[It],Wt=yt[bt.materialIndex];Wt&&Wt.visible&&p.push(v,ft,Wt,z,Mt.z,bt)}}else yt.visible&&p.push(v,ft,yt,z,Mt.z,null)}}const st=v.children;for(let ft=0,yt=st.length;ft<yt;ft++)ar(st[ft],I,z,V)}function Xs(v,I,z,V){const U=v.opaque,st=v.transmissive,ft=v.transparent;h.setupLightsView(z),X===!0&&rt.setGlobalState(S.clippingPlanes,z),V&&St.viewport(P.copy(V)),U.length>0&&Ti(U,I,z),st.length>0&&Ti(st,I,z),ft.length>0&&Ti(ft,I,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function qs(v,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new Ln(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?xi:tn,minFilter:Cn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const st=h.state.transmissionRenderTarget[V.id],ft=V.viewport||P;st.setSize(ft.z,ft.w);const yt=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(J),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),At&&Rt.render(z);const Tt=S.toneMapping;S.toneMapping=pn;const It=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),X===!0&&rt.setGlobalState(S.clippingPlanes,V),Ti(v,z,V),y.updateMultisampleRenderTarget(st),y.updateRenderTargetMipmap(st),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let bt=0,Wt=I.length;bt<Wt;bt++){const te=I[bt],ee=te.object,me=te.geometry,Yt=te.material,wt=te.group;if(Yt.side===Ke&&ee.layers.test(V.layers)){const ke=Yt.side;Yt.side=ve,Yt.needsUpdate=!0,Ys(ee,z,V,me,Yt,wt),Yt.side=ke,Yt.needsUpdate=!0,Nt=!0}}Nt===!0&&(y.updateMultisampleRenderTarget(st),y.updateRenderTargetMipmap(st))}S.setRenderTarget(yt),S.setClearColor(J,Q),It!==void 0&&(V.viewport=It),S.toneMapping=Tt}function Ti(v,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,st=v.length;U<st;U++){const ft=v[U],yt=ft.object,Tt=ft.geometry,It=V===null?ft.material:V,Nt=ft.group;yt.layers.test(z.layers)&&Ys(yt,I,z,Tt,It,Nt)}}function Ys(v,I,z,V,U,st){v.onBeforeRender(S,I,z,V,U,st),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,I,z,V,v,st),U.transparent===!0&&U.side===Ke&&U.forceSinglePass===!1?(U.side=ve,U.needsUpdate=!0,S.renderBufferDirect(z,I,V,U,v,st),U.side=mn,U.needsUpdate=!0,S.renderBufferDirect(z,I,V,U,v,st),U.side=Ke):S.renderBufferDirect(z,I,V,U,v,st),v.onAfterRender(S,I,z,V,U,st)}function bi(v,I,z){I.isScene!==!0&&(I=Ct);const V=xt.get(v),U=h.state.lights,st=h.state.shadowsArray,ft=U.state.version,yt=Et.getParameters(v,U.state,st,I,z),Tt=Et.getProgramCacheKey(yt);let It=V.programs;V.environment=v.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(v.isMeshStandardMaterial?B:g).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,It===void 0&&(v.addEventListener("dispose",Ut),It=new Map,V.programs=It);let Nt=It.get(Tt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===ft)return Zs(v,yt),Nt}else yt.uniforms=Et.getUniforms(v),v.onBeforeCompile(yt,S),Nt=Et.acquireProgram(yt,Tt),It.set(Tt,Nt),V.uniforms=yt.uniforms;const bt=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=rt.uniform),Zs(v,yt),V.needsLights=Vo(v),V.lightsStateVersion=ft,V.needsLights&&(bt.ambientLightColor.value=U.state.ambient,bt.lightProbe.value=U.state.probe,bt.directionalLights.value=U.state.directional,bt.directionalLightShadows.value=U.state.directionalShadow,bt.spotLights.value=U.state.spot,bt.spotLightShadows.value=U.state.spotShadow,bt.rectAreaLights.value=U.state.rectArea,bt.ltc_1.value=U.state.rectAreaLTC1,bt.ltc_2.value=U.state.rectAreaLTC2,bt.pointLights.value=U.state.point,bt.pointLightShadows.value=U.state.pointShadow,bt.hemisphereLights.value=U.state.hemi,bt.directionalShadowMap.value=U.state.directionalShadowMap,bt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,bt.spotShadowMap.value=U.state.spotShadowMap,bt.spotLightMatrix.value=U.state.spotLightMatrix,bt.spotLightMap.value=U.state.spotLightMap,bt.pointShadowMap.value=U.state.pointShadowMap,bt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function $s(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Ji.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Zs(v,I){const z=xt.get(v);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Bo(v,I,z,V,U){I.isScene!==!0&&(I=Ct),y.resetTextureUnits();const st=I.fog,ft=V.isMeshStandardMaterial?I.environment:null,yt=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ii,Tt=(V.isMeshStandardMaterial?B:g).get(V.envMap||ft),It=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),bt=!!z.morphAttributes.position,Wt=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let ee=pn;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ee=S.toneMapping);const me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Yt=me!==void 0?me.length:0,wt=xt.get(V),ke=h.state.lights;if(X===!0&&(nt===!0||v!==x)){const Te=v===x&&V.id===E;rt.setState(V,v,Te)}let $t=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ke.state.version||wt.outputColorSpace!==yt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==Tt||V.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==rt.numPlanes||wt.numIntersection!==rt.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Nt||wt.morphTargets!==bt||wt.morphNormals!==Wt||wt.morphColors!==te||wt.toneMapping!==ee||wt.morphTargetsCount!==Yt)&&($t=!0):($t=!0,wt.__version=V.version);let Ce=wt.currentProgram;$t===!0&&(Ce=bi(V,I,U));let Dn=!1,Me=!1,ai=!1;const ne=Ce.getUniforms(),Fe=wt.uniforms;if(St.useProgram(Ce.program)&&(Dn=!0,Me=!0,ai=!0),V.id!==E&&(E=V.id,Me=!0),Dn||x!==v){St.buffers.depth.getReversed()?(q.copy(v.projectionMatrix),Cl(q),Pl(q),ne.setValue(w,"projectionMatrix",q)):ne.setValue(w,"projectionMatrix",v.projectionMatrix),ne.setValue(w,"viewMatrix",v.matrixWorldInverse);const nn=ne.map.cameraPosition;nn!==void 0&&nn.setValue(w,pt.setFromMatrixPosition(v.matrixWorld)),Lt.logarithmicDepthBuffer&&ne.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ne.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Me=!0,ai=!0)}if(U.isSkinnedMesh){ne.setOptional(w,U,"bindMatrix"),ne.setOptional(w,U,"bindMatrixInverse");const Te=U.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ne.setValue(w,"boneTexture",Te.boneTexture,y))}U.isBatchedMesh&&(ne.setOptional(w,U,"batchingTexture"),ne.setValue(w,"batchingTexture",U._matricesTexture,y),ne.setOptional(w,U,"batchingIdTexture"),ne.setValue(w,"batchingIdTexture",U._indirectTexture,y),ne.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&ne.setValue(w,"batchingColorTexture",U._colorsTexture,y));const oi=z.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Dt.update(U,z,Ce),(Me||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,ne.setValue(w,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Fe.envMap.value=Tt,Fe.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Fe.envMapIntensity.value=I.environmentIntensity),Me&&(ne.setValue(w,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&zo(Fe,ai),st&&V.fog===!0&&ht.refreshFogUniforms(Fe,st),ht.refreshMaterialUniforms(Fe,V,k,et,h.state.transmissionRenderTarget[v.id]),Ji.upload(w,$s(wt),Fe,y)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ji.upload(w,$s(wt),Fe,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ne.setValue(w,"center",U.center),ne.setValue(w,"modelViewMatrix",U.modelViewMatrix),ne.setValue(w,"normalMatrix",U.normalMatrix),ne.setValue(w,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Te=V.uniformsGroups;for(let nn=0,rn=Te.length;nn<rn;nn++){const Ks=Te[nn];L.update(Ks,Ce),L.bind(Ks,Ce)}}return Ce}function zo(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Vo(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,I,z){xt.get(v.texture).__webglTexture=I,xt.get(v.depthTexture).__webglTexture=z;const V=xt.get(v);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){const z=xt.get(v);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,z=0){F=v,D=I,C=z;let V=!0,U=null,st=!1,ft=!1;if(v){const Tt=xt.get(v);if(Tt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(Tt.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(Tt.__hasExternalTextures)y.rebindTextures(v,xt.get(v.texture).__webglTexture,xt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const bt=v.depthTexture;if(Tt.__boundDepthTexture!==bt){if(bt!==null&&xt.has(bt)&&(v.width!==bt.image.width||v.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const It=v.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Nt=xt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Nt[I])?U=Nt[I][z]:U=Nt[I],st=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?U=xt.get(v).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[z]:U=Nt,P.copy(v.viewport),$.copy(v.scissor),H=v.scissorTest}else P.copy(b).multiplyScalar(k).floor(),$.copy(it).multiplyScalar(k).floor(),H=ct;if(St.bindFramebuffer(w.FRAMEBUFFER,U)&&V&&St.drawBuffers(v,U),St.viewport(P),St.scissor($),St.setScissorTest(H),st){const Tt=xt.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,z)}else if(ft){const Tt=xt.get(v.texture),It=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,z||0,It)}E=-1},this.readRenderTargetPixels=function(v,I,z,V,U,st,ft){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){St.bindFramebuffer(w.FRAMEBUFFER,yt);try{const Tt=v.texture,It=Tt.format,Nt=Tt.type;if(!Lt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-V&&z>=0&&z<=v.height-U&&w.readPixels(I,z,V,U,Ot.convert(It),Ot.convert(Nt),st)}finally{const Tt=F!==null?xt.get(F).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(v,I,z,V,U,st,ft){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const Tt=v.texture,It=Tt.format,Nt=Tt.type;if(!Lt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-V&&z>=0&&z<=v.height-U){St.bindFramebuffer(w.FRAMEBUFFER,yt);const bt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,bt),w.bufferData(w.PIXEL_PACK_BUFFER,st.byteLength,w.STREAM_READ),w.readPixels(I,z,V,U,Ot.convert(It),Ot.convert(Nt),0);const Wt=F!==null?xt.get(F).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,Wt);const te=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Rl(w,te,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,bt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,st),w.deleteBuffer(bt),w.deleteSync(te),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,I=null,z=0){v.isTexture!==!0&&(pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);const V=Math.pow(2,-z),U=Math.floor(v.image.width*V),st=Math.floor(v.image.height*V),ft=I!==null?I.x:0,yt=I!==null?I.y:0;y.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,ft,yt,U,st),St.unbindTexture()},this.copyTextureToTexture=function(v,I,z=null,V=null,U=0){v.isTexture!==!0&&(pi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,v=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let st,ft,yt,Tt,It,Nt,bt,Wt,te;const ee=v.isCompressedTexture?v.mipmaps[U]:v.image;z!==null?(st=z.max.x-z.min.x,ft=z.max.y-z.min.y,yt=z.isBox3?z.max.z-z.min.z:1,Tt=z.min.x,It=z.min.y,Nt=z.isBox3?z.min.z:0):(st=ee.width,ft=ee.height,yt=ee.depth||1,Tt=0,It=0,Nt=0),V!==null?(bt=V.x,Wt=V.y,te=V.z):(bt=0,Wt=0,te=0);const me=Ot.convert(I.format),Yt=Ot.convert(I.type);let wt;I.isData3DTexture?(y.setTexture3D(I,0),wt=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(y.setTexture2DArray(I,0),wt=w.TEXTURE_2D_ARRAY):(y.setTexture2D(I,0),wt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const ke=w.getParameter(w.UNPACK_ROW_LENGTH),$t=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ce=w.getParameter(w.UNPACK_SKIP_PIXELS),Dn=w.getParameter(w.UNPACK_SKIP_ROWS),Me=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ee.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,It),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nt);const ai=v.isDataArrayTexture||v.isData3DTexture,ne=I.isDataArrayTexture||I.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Fe=xt.get(v),oi=xt.get(I),Te=xt.get(Fe.__renderTarget),nn=xt.get(oi.__renderTarget);St.bindFramebuffer(w.READ_FRAMEBUFFER,Te.__webglFramebuffer),St.bindFramebuffer(w.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let rn=0;rn<yt;rn++)ai&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(v).__webglTexture,U,Nt+rn),v.isDepthTexture?(ne&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(I).__webglTexture,U,te+rn),w.blitFramebuffer(Tt,It,st,ft,bt,Wt,st,ft,w.DEPTH_BUFFER_BIT,w.NEAREST)):ne?w.copyTexSubImage3D(wt,U,bt,Wt,te+rn,Tt,It,st,ft):w.copyTexSubImage2D(wt,U,bt,Wt,te+rn,Tt,It,st,ft);St.bindFramebuffer(w.READ_FRAMEBUFFER,null),St.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ne?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(wt,U,bt,Wt,te,st,ft,yt,me,Yt,ee.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(wt,U,bt,Wt,te,st,ft,yt,me,ee.data):w.texSubImage3D(wt,U,bt,Wt,te,st,ft,yt,me,Yt,ee):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,U,bt,Wt,st,ft,me,Yt,ee.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,U,bt,Wt,ee.width,ee.height,me,ee.data):w.texSubImage2D(w.TEXTURE_2D,U,bt,Wt,st,ft,me,Yt,ee);w.pixelStorei(w.UNPACK_ROW_LENGTH,ke),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,$t),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Me),U===0&&I.generateMipmaps&&w.generateMipmap(wt),St.unbindTexture()},this.copyTextureToTexture3D=function(v,I,z=null,V=null,U=0){return v.isTexture!==!0&&(pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,v=arguments[2],I=arguments[3],U=arguments[4]||0),pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,z,V,U)},this.initRenderTarget=function(v){xt.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),St.unbindTexture()},this.resetState=function(){D=0,C=0,F=null,St.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}class Hf extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vs extends en{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new N,u=new qt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class sr extends en{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new N,f=new N,m=[],_=[],M=[],p=[];for(let h=0;h<=n;h++){const A=[],T=h/n;let S=0;h===0&&a===0?S=.5/e:h===n&&l===Math.PI&&(S=-.5/e);for(let G=0;G<=e;G++){const D=G/e;d.x=-t*Math.cos(r+D*s)*Math.sin(a+T*o),d.y=t*Math.cos(a+T*o),d.z=t*Math.sin(r+D*s)*Math.sin(a+T*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),p.push(D+S,1-T),A.push(c++)}u.push(A)}for(let h=0;h<n;h++)for(let A=0;A<e;A++){const T=u[h][A+1],S=u[h][A],G=u[h+1][A],D=u[h+1][A+1];(h!==0||a>0)&&m.push(T,S,D),(h!==n-1||l<Math.PI)&&m.push(S,G,D)}this.setIndex(m),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(M,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gi extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gs extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Or=new ie,Za=new N,Ka=new N;class Oo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Za.setFromMatrixPosition(t.matrixWorld),e.position.copy(Za),Ka.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ka),e.updateMatrixWorld(),Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ja=new ie,fi=new N,Br=new N;class kf extends Oo{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fi.setFromMatrixPosition(t.matrixWorld),n.position.copy(fi),Br.copy(n.position),Br.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Br),n.updateMatrixWorld(),r.makeTranslation(-fi.x,-fi.y,-fi.z),ja.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja)}}class Wf extends Gs{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new kf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xf extends Oo{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ja extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Xf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qf extends Gs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cs);class Yf{constructor(t){this.container=t,this.scene=null,this.camera=null,this.renderer=null,this.ballLight=null,this.dirLight=null,this.ambientLight=null,this.shakeIntensity=0,this.shakeDecay=8,this.cameraBasePos=new N,this.cameraTarget=new N(0,0,0),this.init()}init(){this.scene=new Hf,this.renderer=new Gf({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ro,this.renderer.toneMapping=ao,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement),this.setupCamera(),this.setupLighting(),window.addEventListener("resize",()=>this.onWindowResize())}setupCamera(){const t=this.container.clientWidth/this.container.clientHeight,e=10;this.camera=new Bs(-e*t/2,e*t/2,e/2,-e/2,.1,100),this.cameraBasePos.set(0,15,12),this.camera.position.copy(this.cameraBasePos),this.camera.lookAt(0,0,0)}setupLighting(){this.ambientLight=new qf(16777215,.75),this.scene.add(this.ambientLight),this.dirLight=new Ja(16777215,1.3),this.dirLight.position.set(10,20,12),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=40,this.dirLight.shadow.camera.left=-12,this.dirLight.shadow.camera.right=12,this.dirLight.shadow.camera.top=12,this.dirLight.shadow.camera.bottom=-12,this.dirLight.shadow.bias=-.001,this.scene.add(this.dirLight);const t=new Ja(8961023,.4);t.position.set(-10,15,-8),this.scene.add(t),this.ballLight=new Wf(16777215,.8,6),this.ballLight.position.set(0,1.5,0),this.scene.add(this.ballLight)}setTheme(t){this.scene&&(this.scene.background=new Xt(t.bgGradient[0]))}fitToGrid(t,e){const n=this.container.clientWidth/this.container.clientHeight,r=2.4,s=e+r,a=(t+r)*1.25;let o;if(n<1,o=Math.max(a,s/n),this.camera.left=-o*n/2,this.camera.right=o*n/2,this.camera.top=o/2,this.camera.bottom=-o/2,this.camera.updateProjectionMatrix(),this.dirLight){const l=o/1.5;this.dirLight.shadow.camera.left=-l,this.dirLight.shadow.camera.right=l,this.dirLight.shadow.camera.top=l,this.dirLight.shadow.camera.bottom=-l,this.dirLight.shadow.camera.updateProjectionMatrix()}}triggerCameraShake(t=.15){this.shakeIntensity=t}update(t,e){if(e&&this.ballLight&&this.ballLight.position.set(e.x,1.2,e.z),this.shakeIntensity>.001){const n=(Math.random()-.5)*this.shakeIntensity,r=(Math.random()-.5)*this.shakeIntensity;this.camera.position.set(this.cameraBasePos.x+n,this.cameraBasePos.y,this.cameraBasePos.z+r),this.shakeIntensity-=this.shakeDecay*t*this.shakeIntensity}else this.camera.position.copy(this.cameraBasePos),this.shakeIntensity=0}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){if(!this.container||!this.renderer||!this.camera)return;const t=this.container.clientWidth,e=this.container.clientHeight,n=t/e,r=this.camera.top-this.camera.bottom;this.camera.left=-r*n/2,this.camera.right=r*n/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}}class $f{constructor(t=.42){this.radius=t,this.mesh=null,this.innerMesh=null,this.gridPosition={r:0,c:0},this.targetWorldPos=new N,this.currentWorldPos=new N,this.isMoving=!1,this.squashVector=new N(1,1,1),this.squashVelocity=new N(0,0,0),this.createMesh()}createMesh(){const t=new dn,e=new sr(this.radius,32,32),n=new gi({color:15134456,metalness:.92,roughness:.12,envMapIntensity:1.5});this.innerMesh=new ce(e,n),this.innerMesh.castShadow=!0,this.innerMesh.receiveShadow=!1,this.innerMesh.position.y=this.radius;const r=new Vs(this.radius*.9,24),s=new vi({color:0,transparent:!0,opacity:.35}),a=new ce(r,s);a.rotation.x=-Math.PI/2,a.position.y=.02,t.add(a),t.add(this.innerMesh),this.mesh=t}setGridPosition(t,e,n=1,r=0,s=0){this.gridPosition={r:t,c:e};const a=e*n+r,o=t*n+s;this.currentWorldPos.set(a,0,o),this.targetWorldPos.copy(this.currentWorldPos),this.mesh.position.copy(this.currentWorldPos)}triggerWallImpact(t){Math.abs(t.z)>.5?this.squashVector.set(1.22,1.15,.72):Math.abs(t.x)>.5&&this.squashVector.set(.72,1.15,1.22)}update(t,e){if(e&&e.lengthSq()>1e-5){const r=e.length()/this.radius,s=e.clone().normalize(),a=new N(s.z,0,-s.x).normalize();this.innerMesh.rotateOnWorldAxis(a,r)}this.squashVector.x+=(1-this.squashVector.x)*Math.min(1,t*18),this.squashVector.y+=(1-this.squashVector.y)*Math.min(1,t*18),this.squashVector.z+=(1-this.squashVector.z)*Math.min(1,t*18),this.innerMesh.scale.copy(this.squashVector)}}class Zf{constructor(t=1){this.cellSize=t,this.group=new dn,this.floorTiles=new Map,this.wallMeshes=[],this.levelData=null,this.theme=null,this.offsetX=0,this.offsetZ=0}build(t,e){this.clear(),this.levelData=t,this.theme=e;const n=t.rows,r=t.cols;this.offsetX=-((r-1)*this.cellSize)/2,this.offsetZ=-((n-1)*this.cellSize)/2;const s=new ze(this.cellSize*.98,.75,this.cellSize*.98),a=new ze(this.cellSize*.88,.1,this.cellSize*.88),o=new gi({color:e.wallColor,roughness:.5,metalness:.2}),l=new gi({color:e.wallTopColor,roughness:.3,metalness:.3}),c=new ze(this.cellSize*.94,.2,this.cellSize*.94);for(let m=0;m<n;m++)for(let _=0;_<r;_++){const M=_*this.cellSize+this.offsetX,p=m*this.cellSize+this.offsetZ;if(t.grid[m][_]===1){const A=new dn,T=new ce(s,o);T.position.set(M,.375,p),T.castShadow=!0,T.receiveShadow=!0;const S=new ce(a,l);S.position.set(M,.75,p),A.add(T),A.add(S),this.group.add(A),this.wallMeshes.push(A)}else{const A=new gi({color:e.unpaintedFloor,roughness:.6,metalness:.05}),T=new ce(c,A);T.position.set(M,-.1,p),T.receiveShadow=!0,T.castShadow=!1,this.group.add(T),this.floorTiles.set(`${m},${_}`,{r:m,c:_,mesh:T,material:A,isPainted:!1,popScale:1,paintProgress:0,x:M,z:p})}}const u=new ze(r*this.cellSize+.5,.3,n*this.cellSize+.5),d=new gi({color:724244,roughness:.9}),f=new ce(u,d);return f.position.set(0,-.25,0),this.group.add(f),this.group}paintTile(t,e){const n=`${t},${e}`,r=this.floorTiles.get(n);if(!r)return!1;const s=r.isPainted;return r.isPainted||(r.isPainted=!0,r.popScale=1.16,r.material.color.setHex(this.theme.paintColor),r.material.roughness=.2,r.material.metalness=.15),!s}getTileWorldPos(t,e){const n=e*this.cellSize+this.offsetX,r=t*this.cellSize+this.offsetZ;return new N(n,0,r)}isWall(t,e){return!this.levelData||t<0||t>=this.levelData.rows||e<0||e>=this.levelData.cols?!0:this.levelData.grid[t][e]===1}update(t){for(const e of this.floorTiles.values())e.popScale>1&&(e.popScale+=(1-e.popScale)*Math.min(1,t*14),e.mesh.scale.set(e.popScale,e.popScale,e.popScale))}clear(){for(;this.group.children.length>0;){const t=this.group.children[0];this.group.remove(t),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}this.floorTiles.clear(),this.wallMeshes=[]}}var Hs={};(function i(t,e,n,r){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!t.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),b=R.getContext("2d");b.fillRect(0,0,1,1);var it=R.transferToImageBitmap();b.createPattern(it,"no-repeat")}catch{return!1}return!0})();function l(){}function c(R){var b=e.exports.Promise,it=b!==void 0?b:t.Promise;return typeof it=="function"?new it(R):(R(l,l),null)}var u=(function(R,b){return{transform:function(it){if(R)return it;if(b.has(it))return b.get(it);var ct=new OffscreenCanvas(it.width,it.height),O=ct.getContext("2d");return O.drawImage(it,0,0),b.set(it,ct),ct},clear:function(){b.clear()}}})(o,new Map),d=(function(){var R=Math.floor(16.666666666666668),b,it,ct={},O=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(X){var nt=Math.random();return ct[nt]=requestAnimationFrame(function q(at){O===at||O+R-1<at?(O=at,delete ct[nt],X()):ct[nt]=requestAnimationFrame(q)}),nt},it=function(X){ct[X]&&cancelAnimationFrame(ct[X])}):(b=function(X){return setTimeout(X,R)},it=function(X){return clearTimeout(X)}),{frame:b,cancel:it}})(),f=(function(){var R,b,it={};function ct(O){function X(nt,q){O.postMessage({options:nt||{},callback:q})}O.init=function(q){var at=q.transferControlToOffscreen();O.postMessage({canvas:at},[at])},O.fire=function(q,at,pt){if(b)return X(q,null),b;var Mt=Math.random().toString(36).slice(2);return b=c(function(Ct){function At(zt){zt.data.callback===Mt&&(delete it[Mt],O.removeEventListener("message",At),b=null,u.clear(),pt(),Ct())}O.addEventListener("message",At),X(q,Mt),it[Mt]=At.bind(null,{data:{callback:Mt}})}),b},O.reset=function(){O.postMessage({reset:!0});for(var q in it)it[q](),delete it[q]}}return function(){if(R)return R;if(!n&&s){var O=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([O])))}catch(X){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",X),null}ct(R)}return R}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(R,b){return b?b(R):R}function M(R){return R!=null}function p(R,b,it){return _(R&&M(R[b])?R[b]:m[b],it)}function h(R){return R<0?0:Math.floor(R)}function A(R,b){return Math.floor(Math.random()*(b-R))+R}function T(R){return parseInt(R,16)}function S(R){return R.map(G)}function G(R){var b=String(R).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:T(b.substring(0,2)),g:T(b.substring(2,4)),b:T(b.substring(4,6))}}function D(R){var b=p(R,"origin",Object);return b.x=p(b,"x",Number),b.y=p(b,"y",Number),b}function C(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function F(R){var b=R.getBoundingClientRect();R.width=b.width,R.height=b.height}function E(R){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=R,b}function x(R,b,it,ct,O,X,nt,q,at){R.save(),R.translate(b,it),R.rotate(X),R.scale(ct,O),R.arc(0,0,1,nt,q,at),R.restore()}function P(R){var b=R.angle*(Math.PI/180),it=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-b+(.5*it-Math.random()*it),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function $(R,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var it=b.tick++/b.totalTicks,ct=b.x+b.random*b.tiltCos,O=b.y+b.random*b.tiltSin,X=b.wobbleX+b.random*b.tiltCos,nt=b.wobbleY+b.random*b.tiltSin;if(R.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-it)+")",R.beginPath(),a&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))R.fill(et(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(X-ct)*.1,Math.abs(nt-O)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var q=Math.PI/10*b.wobble,at=Math.abs(X-ct)*.1,pt=Math.abs(nt-O)*.1,Mt=b.shape.bitmap.width*b.scalar,Ct=b.shape.bitmap.height*b.scalar,At=new DOMMatrix([Math.cos(q)*at,Math.sin(q)*at,-Math.sin(q)*pt,Math.cos(q)*pt,b.x,b.y]);At.multiplySelf(new DOMMatrix(b.shape.matrix));var zt=R.createPattern(u.transform(b.shape.bitmap),"no-repeat");zt.setTransform(At),R.globalAlpha=1-it,R.fillStyle=zt,R.fillRect(b.x-Mt/2,b.y-Ct/2,Mt,Ct),R.globalAlpha=1}else if(b.shape==="circle")R.ellipse?R.ellipse(b.x,b.y,Math.abs(X-ct)*b.ovalScalar,Math.abs(nt-O)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):x(R,b.x,b.y,Math.abs(X-ct)*b.ovalScalar,Math.abs(nt-O)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var w=Math.PI/2*3,Jt=4*b.scalar,Pt=8*b.scalar,Lt=b.x,St=b.y,Ht=5,xt=Math.PI/Ht;Ht--;)Lt=b.x+Math.cos(w)*Pt,St=b.y+Math.sin(w)*Pt,R.lineTo(Lt,St),w+=xt,Lt=b.x+Math.cos(w)*Jt,St=b.y+Math.sin(w)*Jt,R.lineTo(Lt,St),w+=xt;else R.moveTo(Math.floor(b.x),Math.floor(b.y)),R.lineTo(Math.floor(b.wobbleX),Math.floor(O)),R.lineTo(Math.floor(X),Math.floor(nt)),R.lineTo(Math.floor(ct),Math.floor(b.wobbleY));return R.closePath(),R.fill(),b.tick<b.totalTicks}function H(R,b,it,ct,O){var X=b.slice(),nt=R.getContext("2d"),q,at,pt=c(function(Mt){function Ct(){q=at=null,nt.clearRect(0,0,ct.width,ct.height),u.clear(),O(),Mt()}function At(){n&&!(ct.width===r.width&&ct.height===r.height)&&(ct.width=R.width=r.width,ct.height=R.height=r.height),!ct.width&&!ct.height&&(it(R),ct.width=R.width,ct.height=R.height),nt.clearRect(0,0,ct.width,ct.height),X=X.filter(function(zt){return $(nt,zt)}),X.length?q=d.frame(At):Ct()}q=d.frame(At),at=Ct});return{addFettis:function(Mt){return X=X.concat(Mt),pt},canvas:R,promise:pt,reset:function(){q&&d.cancel(q),at&&at()}}}function J(R,b){var it=!R,ct=!!p(b||{},"resize"),O=!1,X=p(b,"disableForReducedMotion",Boolean),nt=s&&!!p(b||{},"useWorker"),q=nt?f():null,at=it?C:F,pt=R&&q?!!R.__confetti_initialized:!1,Mt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ct;function At(w,Jt,Pt){for(var Lt=p(w,"particleCount",h),St=p(w,"angle",Number),Ht=p(w,"spread",Number),xt=p(w,"startVelocity",Number),y=p(w,"decay",Number),g=p(w,"gravity",Number),B=p(w,"drift",Number),K=p(w,"colors",S),tt=p(w,"ticks",Number),Y=p(w,"shapes"),Et=p(w,"scalar"),ht=!!p(w,"flat"),gt=D(w),Vt=Lt,rt=[],_t=R.width*gt.x,Rt=R.height*gt.y;Vt--;)rt.push(P({x:_t,y:Rt,angle:St,spread:Ht,startVelocity:xt,color:K[Vt%K.length],shape:Y[A(0,Y.length)],ticks:tt,decay:y,gravity:g,drift:B,scalar:Et,flat:ht}));return Ct?Ct.addFettis(rt):(Ct=H(R,rt,at,Jt,Pt),Ct.promise)}function zt(w){var Jt=X||p(w,"disableForReducedMotion",Boolean),Pt=p(w,"zIndex",Number);if(Jt&&Mt)return c(function(xt){xt()});it&&Ct?R=Ct.canvas:it&&!R&&(R=E(Pt),document.body.appendChild(R)),ct&&!pt&&at(R);var Lt={width:R.width,height:R.height};q&&!pt&&q.init(R),pt=!0,q&&(R.__confetti_initialized=!0);function St(){if(q){var xt={getBoundingClientRect:function(){if(!it)return R.getBoundingClientRect()}};at(xt),q.postMessage({resize:{width:xt.width,height:xt.height}});return}Lt.width=Lt.height=null}function Ht(){Ct=null,ct&&(O=!1,t.removeEventListener("resize",St)),it&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,pt=!1)}return ct&&!O&&(O=!0,t.addEventListener("resize",St,!1)),q?q.fire(w,Lt,Ht):At(w,Lt,Ht)}return zt.reset=function(){q&&q.reset(),Ct&&Ct.reset()},zt}var Q;function Z(){return Q||(Q=J(null,{useWorker:!0,resize:!0})),Q}function et(R,b,it,ct,O,X,nt){var q=new Path2D(R),at=new Path2D;at.addPath(q,new DOMMatrix(b));var pt=new Path2D;return pt.addPath(at,new DOMMatrix([Math.cos(nt)*O,Math.sin(nt)*O,-Math.sin(nt)*X,Math.cos(nt)*X,it,ct])),pt}function k(R){if(!a)throw new Error("path confetti are not supported in this browser");var b,it;typeof R=="string"?b=R:(b=R.path,it=R.matrix);var ct=new Path2D(b),O=document.createElement("canvas"),X=O.getContext("2d");if(!it){for(var nt=1e3,q=nt,at=nt,pt=0,Mt=0,Ct,At,zt=0;zt<nt;zt+=2)for(var w=0;w<nt;w+=2)X.isPointInPath(ct,zt,w,"nonzero")&&(q=Math.min(q,zt),at=Math.min(at,w),pt=Math.max(pt,zt),Mt=Math.max(Mt,w));Ct=pt-q,At=Mt-at;var Jt=10,Pt=Math.min(Jt/Ct,Jt/At);it=[Pt,0,0,Pt,-Math.round(Ct/2+q)*Pt,-Math.round(At/2+at)*Pt]}return{type:"path",path:b,matrix:it}}function lt(R){var b,it=1,ct="#000000",O='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?b=R:(b=R.text,it="scalar"in R?R.scalar:it,O="fontFamily"in R?R.fontFamily:O,ct="color"in R?R.color:ct);var X=10*it,nt=""+X+"px "+O,q=new OffscreenCanvas(X,X),at=q.getContext("2d");at.font=nt;var pt=at.measureText(b),Mt=Math.ceil(pt.actualBoundingBoxRight+pt.actualBoundingBoxLeft),Ct=Math.ceil(pt.actualBoundingBoxAscent+pt.actualBoundingBoxDescent),At=2,zt=pt.actualBoundingBoxLeft+At,w=pt.actualBoundingBoxAscent+At;Mt+=At+At,Ct+=At+At,q=new OffscreenCanvas(Mt,Ct),at=q.getContext("2d"),at.font=nt,at.fillStyle=ct,at.fillText(b,zt,w);var Jt=1/it;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[Jt,0,0,Jt,-Mt*Jt/2,-Ct*Jt/2]}}e.exports=function(){return Z().apply(this,arguments)},e.exports.reset=function(){Z().reset()},e.exports.create=J,e.exports.shapeFromPath=k,e.exports.shapeFromText=lt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Hs,!1);const Kf=Hs.exports;Hs.exports.create;class jf{constructor(){this.group=new dn,this.particles=[]}emitPaintSplatter(t,e,n=10){const r=new sr(.06,8,8),s=new vi({color:e});for(let a=0;a<n;a++){const o=new ce(r,s);o.position.copy(t),o.position.y+=.05;const l=Math.random()*Math.PI*2,c=.8+Math.random()*1.6,u=Math.cos(l)*c,d=Math.sin(l)*c,f=1.2+Math.random()*2;this.group.add(o),this.particles.push({mesh:o,velocity:new N(u,f,d),gravity:9.8,life:1,decay:2.2+Math.random()*1.5,scale:1})}}emitWallImpactSparks(t,e,n=12){const r=new ze(.05,.05,.05),s=new vi({color:16777215});for(let a=0;a<n;a++){const o=new ce(r,s);o.position.copy(t);const l=(Math.random()-.5)*2,c=(Math.random()-.5)*2,u=-e.x*2.5+l,d=-e.z*2.5+c,f=1.5+Math.random()*2.2;this.group.add(o),this.particles.push({mesh:o,velocity:new N(u,f,d),gravity:12,life:1,decay:3.5,scale:1})}}triggerVictoryCelebration(t=["#ff3366","#00e5ff","#ff9f1c","#10b981","#ffffff"]){const n={origin:{y:.7},colors:t};function r(s,a){Kf({...n,...a,particleCount:Math.floor(200*s)})}r(.25,{spread:26,startVelocity:55}),r(.2,{spread:60}),r(.35,{spread:100,decay:.91,scalar:.8}),r(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),r(.1,{spread:120,startVelocity:45})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.life-=n.decay*t,n.life<=0){this.group.remove(n.mesh),n.mesh.geometry&&n.mesh.geometry.dispose(),n.mesh.material&&n.mesh.material.dispose(),this.particles.splice(e,1);continue}n.velocity.y-=n.gravity*t,n.mesh.position.addScaledVector(n.velocity,t),n.mesh.position.y<.05&&(n.mesh.position.y=.05,n.velocity.x*=.5,n.velocity.z*=.5);const r=Math.max(.001,n.life);n.mesh.scale.set(r,r,r)}}clear(){for(const t of this.particles)this.group.remove(t.mesh),t.mesh.geometry&&t.mesh.geometry.dispose(),t.mesh.material&&t.mesh.material.dispose();this.particles=[]}}class Jf{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("roller_floor_muted")==="true",this.rollingOsc=null,this.rollingGain=null,this.isRolling=!1,this.currentPaintTone=0,this.lastPaintTime=0}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}catch(t){console.warn("Web Audio API não suportada neste navegador",t)}}ensureContext(){this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("roller_floor_muted",this.isMuted?"true":"false"),this.isMuted&&this.stopRollingSound(),this.isMuted}playUiClick(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(600,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(900,this.ctx.currentTime+.05),e.gain.setValueAtTime(.12,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.05)}playTilePaint(t=0){if(this.isMuted||(this.ensureContext(),!this.ctx))return;const e=Date.now();e-this.lastPaintTime>600&&(this.currentPaintTone=0),this.lastPaintTime=e;const n=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880],r=Math.min(Math.floor(t*n.length),n.length-1),s=n[r]||440,a=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type="triangle",a.frequency.setValueAtTime(s*1.5,this.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(s,this.ctx.currentTime+.08),l.type="lowpass",l.frequency.setValueAtTime(2500,this.ctx.currentTime),o.gain.setValueAtTime(.16,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.09),a.connect(l),l.connect(o),o.connect(this.ctx.destination),a.start(),a.stop(this.ctx.currentTime+.09)}playWallHit(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(160,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(45,this.ctx.currentTime+.12),e.gain.setValueAtTime(.35,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.12)}startRollingSound(){if(!(this.isMuted||this.isRolling)&&(this.ensureContext(),!!this.ctx))try{this.isRolling=!0,this.rollingOsc=this.ctx.createOscillator(),this.rollingGain=this.ctx.createGain();const t=this.ctx.createBiquadFilter();this.rollingOsc.type="triangle",this.rollingOsc.frequency.setValueAtTime(95,this.ctx.currentTime),t.type="lowpass",t.frequency.setValueAtTime(320,this.ctx.currentTime),this.rollingGain.gain.setValueAtTime(.01,this.ctx.currentTime),this.rollingGain.gain.linearRampToValueAtTime(.1,this.ctx.currentTime+.05),this.rollingOsc.connect(t),t.connect(this.rollingGain),this.rollingGain.connect(this.ctx.destination),this.rollingOsc.start()}catch{}}stopRollingSound(){if(this.isRolling&&(this.isRolling=!1,this.rollingGain&&this.ctx))try{this.rollingGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.05),setTimeout(()=>{if(this.rollingOsc){try{this.rollingOsc.stop()}catch{}this.rollingOsc.disconnect(),this.rollingOsc=null}},60)}catch{this.rollingOsc=null}}playVictoryFanfare(){if(this.isMuted||(this.ensureContext(),!this.ctx))return;[{f:523.25,d:.1,delay:0},{f:659.25,d:.1,delay:.1},{f:783.99,d:.12,delay:.2},{f:1046.5,d:.45,delay:.32}].forEach(e=>{setTimeout(()=>{if(!this.ctx||this.isMuted)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e.f,this.ctx.currentTime),r.gain.setValueAtTime(.22,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e.d),n.connect(r),r.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+e.d)},e.delay*1e3)})}}const Qa="roller_floor_profile",zr="roller_floor_leaderboard",Vr=["⚡","🎨","🚀","⭐","🔥","👑","💎","🎮","🐯","🎯"],to=[{rank:1,name:"SplatMaster_BR",avatar:"👑",level:142,moves:1240,stars:420},{rank:2,name:"NeonRoller",avatar:"⚡",level:118,moves:1090,stars:350},{rank:3,name:"PixelPainter",avatar:"🎨",level:95,moves:920,stars:280},{rank:4,name:"Speedy_99",avatar:"🚀",level:84,moves:810,stars:245},{rank:5,name:"CyberSphere",avatar:"💎",level:72,moves:750,stars:210},{rank:6,name:"AstroBall",avatar:"⭐",level:65,moves:690,stars:190},{rank:7,name:"Lucas_Games",avatar:"🎮",level:54,moves:580,stars:160},{rank:8,name:"MatrixRoller",avatar:"🔥",level:43,moves:460,stars:125},{rank:9,name:"MazeRunner",avatar:"🐯",level:36,moves:390,stars:105},{rank:10,name:"ColorSplash",avatar:"🎯",level:28,moves:310,stars:80}];class Qf{constructor(){this.profile=this.loadProfile(),this.scores=this.loadScores()}loadProfile(){try{const n=localStorage.getItem(Qa);if(n)return JSON.parse(n)}catch{}const e={name:`Jogador_${Math.floor(100+Math.random()*900)}`,avatar:Vr[Math.floor(Math.random()*Vr.length)],highestLevel:1,totalMoves:0,totalStars:0,levelsCompleted:0};return this.saveProfile(e),e}saveProfile(t){this.profile=t,localStorage.setItem(Qa,JSON.stringify(t))}loadScores(){try{const t=localStorage.getItem(zr);if(t)return JSON.parse(t)}catch{}return localStorage.setItem(zr,JSON.stringify(to)),[...to]}saveScores(t){this.scores=t,localStorage.setItem(zr,JSON.stringify(t))}recordLevelComplete(t,e,n){this.profile.totalMoves+=e,this.profile.totalStars+=n,this.profile.levelsCompleted+=1,t>=this.profile.highestLevel&&(this.profile.highestLevel=t+1),this.saveProfile(this.profile),this.syncPlayerScore()}syncPlayerScore(){let t=[...this.scores];t=t.filter(e=>e.name!==this.profile.name),t.push({name:this.profile.name,avatar:this.profile.avatar,level:this.profile.highestLevel,moves:this.profile.totalMoves,stars:this.profile.totalStars,isCurrentPlayer:!0}),t.sort((e,n)=>n.level!==e.level?n.level-e.level:e.moves-n.moves),t.forEach((e,n)=>{e.rank=n+1}),this.saveScores(t)}getTopScores(t=15){return this.syncPlayerScore(),this.scores.slice(0,t)}getPlayerRank(){this.syncPlayerScore();const t=this.scores.find(e=>e.name===this.profile.name);return t?t.rank:this.scores.length}getAvatars(){return Vr}}class tp{constructor({onRestart:t,onNextLevel:e,onToggleAudio:n,onOpenLeaderboard:r,onSelectDirection:s}){this.onRestart=t,this.onNextLevel=e,this.onToggleAudio=n,this.onOpenLeaderboard=r,this.onSelectDirection=s,this.levelBadge=document.getElementById("hud-level-badge"),this.movesCount=document.getElementById("hud-moves-count"),this.percentText=document.getElementById("hud-percent-text"),this.progressBarFill=document.getElementById("hud-progress-fill"),this.audioBtn=document.getElementById("btn-audio-toggle"),this.restartBtn=document.getElementById("btn-restart"),this.leaderboardBtn=document.getElementById("btn-leaderboard"),this.infoBtn=document.getElementById("btn-info"),this.victoryModal=document.getElementById("modal-victory"),this.victoryStars=document.getElementById("victory-stars"),this.victoryLevel=document.getElementById("victory-level"),this.victoryMoves=document.getElementById("victory-moves"),this.btnNextLevel=document.getElementById("btn-next-level"),this.leaderboardModal=document.getElementById("modal-leaderboard"),this.leaderboardList=document.getElementById("leaderboard-list"),this.playerNameInput=document.getElementById("player-name-input"),this.avatarPicker=document.getElementById("avatar-picker"),this.btnCloseLeaderboard=document.getElementById("btn-close-leaderboard"),this.infoModal=document.getElementById("modal-info"),this.btnCloseInfo=document.getElementById("btn-close-info"),this.initEvents()}initEvents(){this.restartBtn.addEventListener("click",()=>this.onRestart()),this.audioBtn.addEventListener("click",()=>this.onToggleAudio()),this.leaderboardBtn.addEventListener("click",()=>this.onOpenLeaderboard()),this.infoBtn.addEventListener("click",()=>this.toggleInfoModal(!0)),this.btnCloseInfo.addEventListener("click",()=>this.toggleInfoModal(!1)),this.btnCloseLeaderboard.addEventListener("click",()=>this.toggleLeaderboardModal(!1)),this.btnNextLevel.addEventListener("click",()=>{this.toggleVictoryModal(!1),this.onNextLevel()}),document.querySelectorAll(".dpad-btn").forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation();const r=e.dataset.dir;r&&this.onSelectDirection&&this.onSelectDirection(r)})})}updateState(t){this.levelBadge&&(this.levelBadge.textContent=`NÍVEL ${t.level}`),this.movesCount&&(this.movesCount.textContent=`${t.moves}`),this.percentText&&(this.percentText.textContent=`${t.percent}%`),this.progressBarFill&&(this.progressBarFill.style.width=`${t.percent}%`,t.theme&&(this.progressBarFill.style.backgroundColor=t.theme.paintCss,this.progressBarFill.style.boxShadow=`0 0 12px ${t.theme.paintGlow}`))}updateAudioButton(t){this.audioBtn&&(this.audioBtn.innerHTML=t?'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>':'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>')}showVictory({level:t,moves:e,stars:n,theme:r}){this.victoryLevel.textContent=`Nível ${t} Completo!`,this.victoryMoves.textContent=`${e} movimentos`,this.victoryStars.innerHTML="";for(let s=1;s<=3;s++){const a=document.createElement("span");a.className=`star-icon ${s<=n?"active":"inactive"}`,a.textContent="★",this.victoryStars.appendChild(a)}this.btnNextLevel&&r&&(this.btnNextLevel.style.backgroundColor=r.paintCss,this.btnNextLevel.style.boxShadow=`0 4px 20px ${r.paintGlow}`),this.toggleVictoryModal(!0)}toggleVictoryModal(t){this.victoryModal&&this.victoryModal.classList.toggle("active",t)}toggleLeaderboardModal(t){this.leaderboardModal&&this.leaderboardModal.classList.toggle("active",t)}toggleInfoModal(t){this.infoModal&&this.infoModal.classList.toggle("active",t)}renderLeaderboard(t){const e=t.getTopScores(),n=t.profile,r=t.getAvatars();this.playerNameInput&&(this.playerNameInput.value=n.name,this.playerNameInput.onchange=()=>{n.name=this.playerNameInput.value.trim()||"Jogador",t.saveProfile(n),this.renderLeaderboard(t)}),this.avatarPicker&&(this.avatarPicker.innerHTML="",r.forEach(s=>{const a=document.createElement("button");a.className=`avatar-choice-btn ${n.avatar===s?"selected":""}`,a.textContent=s,a.onclick=()=>{n.avatar=s,t.saveProfile(n),this.renderLeaderboard(t)},this.avatarPicker.appendChild(a)})),this.leaderboardList&&(this.leaderboardList.innerHTML="",e.forEach(s=>{const a=document.createElement("div");a.className=`leaderboard-item ${s.isCurrentPlayer?"is-player":""}`;const o=s.rank===1?"🥇":s.rank===2?"🥈":s.rank===3?"🥉":`#${s.rank}`;a.innerHTML=`
          <div class="lb-rank">${o}</div>
          <div class="lb-avatar">${s.avatar||"⚡"}</div>
          <div class="lb-info">
            <div class="lb-name">${s.name} ${s.isCurrentPlayer?'<span class="lb-you-tag">VOCÊ</span>':""}</div>
            <div class="lb-stats">Nível ${s.level} • ${s.moves||0} mov.</div>
          </div>
          <div class="lb-stars">★ ${s.stars||0}</div>
        `,this.leaderboardList.appendChild(a)}))}}class ep{constructor(t,e){this.targetElement=t,this.onDirection=e,this.startX=0,this.startY=0,this.isPointerDown=!1,this.minSwipeDistance=24,this.hasSwiped=!1,this.isEnabled=!0,this.init()}init(){window.addEventListener("keydown",t=>this.handleKeyDown(t)),this.targetElement.addEventListener("pointerdown",t=>this.handlePointerDown(t),{passive:!1}),window.addEventListener("pointermove",t=>this.handlePointerMove(t),{passive:!1}),window.addEventListener("pointerup",t=>this.handlePointerUp(t)),window.addEventListener("pointercancel",t=>this.handlePointerUp(t)),this.targetElement.addEventListener("touchstart",t=>t.preventDefault(),{passive:!1}),this.targetElement.addEventListener("touchmove",t=>t.preventDefault(),{passive:!1})}setEnabled(t){this.isEnabled=t}handleKeyDown(t){if(!this.isEnabled)return;let e=null;switch(t.key){case"ArrowUp":case"w":case"W":e="UP";break;case"ArrowDown":case"s":case"S":e="DOWN";break;case"ArrowLeft":case"a":case"A":e="LEFT";break;case"ArrowRight":case"d":case"D":e="RIGHT";break}e&&(t.preventDefault(),this.onDirection(e))}handlePointerDown(t){this.isEnabled&&(this.isPointerDown=!0,this.hasSwiped=!1,this.startX=t.clientX,this.startY=t.clientY)}handlePointerMove(t){if(!this.isPointerDown||this.hasSwiped||!this.isEnabled)return;const e=t.clientX-this.startX,n=t.clientY-this.startY,r=Math.abs(e),s=Math.abs(n);(r>=this.minSwipeDistance||s>=this.minSwipeDistance)&&(this.hasSwiped=!0,t.preventDefault(),r>s?this.onDirection(e>0?"RIGHT":"LEFT"):this.onDirection(n>0?"DOWN":"UP"))}handlePointerUp(t){this.isPointerDown=!1,this.hasSwiped=!1}}const Gr=[{dr:-1,dc:0,name:"UP"},{dr:1,dc:0,name:"DOWN"},{dr:0,dc:-1,name:"LEFT"},{dr:0,dc:1,name:"RIGHT"}],eo=[{width:4,height:4,grid:[[1,1,1,1,1,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,0,0,0,0,1],[1,1,1,1,1,1]],spawn:{r:1,c:1}},{width:5,height:5,grid:[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,0,1,0,1],[1,0,0,0,0,0,1],[1,0,1,0,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],spawn:{r:1,c:1}},{width:6,height:6,grid:[[1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,1],[1,0,1,0,1,0,1,1],[1,0,0,0,0,0,0,1],[1,1,0,1,0,1,0,1],[1,0,0,0,0,0,0,1],[1,0,1,0,0,1,0,1],[1,1,1,1,1,1,1,1]],spawn:{r:1,c:1}}];class np{static generate(t){if(t<=eo.length){const s=eo[t-1],a=s.grid.map(l=>[...l]),o=this.countFloorTiles(a);return{levelNumber:t,rows:a.length,cols:a[0].length,grid:a,spawn:{...s.spawn},totalFloor:o}}let e;t<=6?e=5:t<=12?e=6:t<=20?e=7:t<=35?e=8:e=Math.min(10,8+Math.floor((t-35)/15));let n=e+2,r=e+2;for(let s=0;s<80;s++){const a=this.createCandidateMaze(n,r,t,s),o=this.solveAndValidate(a.grid,a.spawn);if(o.isFullyPaintable&&o.totalFloor>=e*e*.45)return{levelNumber:t,rows:a.grid.length,cols:a.grid[0].length,grid:a.grid,spawn:a.spawn,totalFloor:o.totalFloor}}return this.createGuaranteedFallback(t,e)}static createCandidateMaze(t,e,n,r){const s=Array.from({length:t},()=>Array(e).fill(1));for(let l=1;l<t-1;l++)for(let c=1;c<e-1;c++)s[l][c]=0;const a={r:1,c:1},o=Math.floor(2+Math.random()*(t-2)*1.2);for(let l=0;l<o;l++){const c=1+Math.floor(Math.random()*(t-2)),u=1+Math.floor(Math.random()*(e-2));if(!(c===a.r&&u===a.c)&&(s[c][u]=1,Math.random()>.6)){const d=Gr[Math.floor(Math.random()*Gr.length)],f=c+d.dr,m=u+d.dc;f>0&&f<t-1&&m>0&&m<e-1&&!(f===a.r&&m===a.c)&&(s[f][m]=1)}}return{grid:s,spawn:a}}static solveAndValidate(t,e){const n=t.length,r=t[0].length;for(let d=0;d<n;d++)for(let f=0;f<r;f++)t[d][f];if(t[e.r][e.c]!==0)return{isFullyPaintable:!1,totalFloor:0};const s=new Set,a=new Set,o=[],l=`${e.r},${e.c}`;for(s.add(l),a.add(l),o.push(e);o.length>0;){const d=o.shift();for(const f of Gr){let m=d.r,_=d.c;const M=[];for(;;){const p=m+f.dr,h=_+f.dc;if(p<0||p>=n||h<0||h>=r||t[p][h]===1)break;m=p,_=h,M.push({r:m,c:_})}if(M.length>0){M.forEach(h=>a.add(`${h.r},${h.c}`));const p=`${m},${_}`;s.has(p)||(s.add(p),o.push({r:m,c:_}))}}}let c=0;for(let d=0;d<n;d++)for(let f=0;f<r;f++)t[d][f]===0&&(a.has(`${d},${f}`)?c++:t[d][f]=1);return{isFullyPaintable:c>=9&&c===a.size,totalFloor:c,paintedCount:a.size}}static createGuaranteedFallback(t,e){const n=e+2,r=e+2,s=Array.from({length:n},()=>Array(r).fill(1));for(let l=1;l<n-1;l++)for(let c=1;c<r-1;c++)s[l][c]=0;for(let l=2;l<n-2;l+=2)for(let c=2;c<r-2;c+=2)s[l][c]=1;const a={r:1,c:1},o=this.solveAndValidate(s,a);return{levelNumber:t,rows:n,cols:r,grid:s,spawn:a,totalFloor:o.totalFloor}}static countFloorTiles(t){let e=0;for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++)t[n][r]===0&&e++;return e}}const no=[{id:"neon-coral",name:"Neon Coral",paintColor:16724838,paintCss:"#ff3366",paintGlow:"rgba(255, 51, 102, 0.4)",wallColor:1974840,wallTopColor:2830674,unpaintedFloor:15856633,bgGradient:["#141727","#0d0e19"]},{id:"cyber-cyan",name:"Cyber Cyan",paintColor:58879,paintCss:"#00e5ff",paintGlow:"rgba(0, 229, 255, 0.4)",wallColor:1451062,wallTopColor:2176850,unpaintedFloor:15791610,bgGradient:["#0f172a","#080d19"]},{id:"electric-violet",name:"Electric Violet",paintColor:10309341,paintCss:"#9d4edd",paintGlow:"rgba(157, 78, 221, 0.4)",wallColor:2234934,wallTopColor:3483732,unpaintedFloor:16118523,bgGradient:["#191228","#0e0a17"]},{id:"lime-splash",name:"Lime Splash",paintColor:1096065,paintCss:"#10b981",paintGlow:"rgba(16, 185, 129, 0.4)",wallColor:1649443,wallTopColor:2507318,unpaintedFloor:15793652,bgGradient:["#0f2017","#08130e"]},{id:"mango-burst",name:"Mango Burst",paintColor:16752412,paintCss:"#ff9f1c",paintGlow:"rgba(255, 159, 28, 0.4)",wallColor:3023638,wallTopColor:4732451,unpaintedFloor:16776439,bgGradient:["#21160b","#130d06"]},{id:"bubblegum-pink",name:"Bubblegum Pink",paintColor:16196997,paintCss:"#f72585",paintGlow:"rgba(247, 37, 133, 0.4)",wallColor:2955054,wallTopColor:4531014,unpaintedFloor:16642808,bgGradient:["#1f0d20","#120713"]},{id:"royal-azure",name:"Royal Azure",paintColor:3835647,paintCss:"#3a86ff",paintGlow:"rgba(58, 134, 255, 0.4)",wallColor:1516091,wallTopColor:2372956,unpaintedFloor:15857406,bgGradient:["#0e172e","#070c1b"]},{id:"sunset-amber",name:"Sunset Amber",paintColor:16733184,paintCss:"#ff5400",paintGlow:"rgba(255, 84, 0, 0.4)",wallColor:2890519,wallTopColor:4598565,unpaintedFloor:16774642,bgGradient:["#1d100d","#100806"]}];function ip(i){const t=(i-1)%no.length;return no[t]}const rp={UP:{dr:-1,dc:0,vec:new N(0,0,-1)},DOWN:{dr:1,dc:0,vec:new N(0,0,1)},LEFT:{dr:0,dc:-1,vec:new N(-1,0,0)},RIGHT:{dr:0,dc:1,vec:new N(1,0,0)}};class sp{constructor({renderer:t,ball:e,gridMap:n,particles:r,audio:s,leaderboard:a,onStateChange:o}){this.renderer=t,this.ball=e,this.gridMap=n,this.particles=r,this.audio=s,this.leaderboard=a,this.onStateChange=o,this.currentLevel=1,this.levelData=null,this.theme=null,this.paintedCount=0,this.totalFloorCount=0,this.moves=0,this.moveHistory=[],this.isRolling=!1,this.queuedDirection=null,this.isVictory=!1,this.rollSpeed=22,this.rollPath=[],this.currentPathIndex=0,this.pathSegmentProgress=0}loadLevel(t){this.currentLevel=t,this.levelData=np.generate(t),this.theme=ip(t),this.moves=0,this.moveHistory=[],this.isRolling=!1,this.queuedDirection=null,this.isVictory=!1,this.rollPath=[],this.gridMap.build(this.levelData,this.theme),this.renderer.setTheme(this.theme),this.renderer.fitToGrid(this.levelData.rows,this.levelData.cols);const e=this.levelData.spawn;this.ball.setGridPosition(e.r,e.c,this.gridMap.cellSize,this.gridMap.offsetX,this.gridMap.offsetZ),this.paintedCount=0,this.totalFloorCount=this.levelData.totalFloor,this.paintAt(e.r,e.c,!1),this.notifyState()}handleInput(t){if(!this.isVictory){if(this.isRolling){this.queuedDirection=t;return}this.executeRoll(t)}}executeRoll(t){const e=rp[t];if(!e)return;const n=this.ball.gridPosition.r,r=this.ball.gridPosition.c,s=[];let a=n,o=r;for(;;){const l=a+e.dr,c=o+e.dc;if(this.gridMap.isWall(l,c))break;a=l,o=c,s.push({r:a,c:o,worldPos:this.gridMap.getTileWorldPos(a,o)})}s.length>0&&(this.moveHistory.push({from:{r:n,c:r},paintedBefore:this.paintedCount}),this.moves++,this.isRolling=!0,this.rollDirection=e,this.rollPath=s,this.currentPathIndex=0,this.pathSegmentProgress=0,this.audio.startRollingSound(),this.notifyState())}paintAt(t,e,n=!0){if(this.gridMap.paintTile(t,e)){this.paintedCount++;const s=this.paintedCount/this.totalFloorCount;n&&this.audio.playTilePaint(s);const a=this.gridMap.getTileWorldPos(t,e);this.particles.emitPaintSplatter(a,this.theme.paintColor,8)}}update(t){if(this.isRolling)if(this.currentPathIndex<this.rollPath.length){const e=this.rollPath[this.currentPathIndex],n=e.worldPos,r=this.ball.mesh.position,s=r.distanceTo(n),a=this.rollSpeed*t;if(s<=a){const o=n.clone().sub(r);r.copy(n),this.ball.update(t,o),this.paintAt(e.r,e.c,!0),this.ball.gridPosition={r:e.r,c:e.c},this.currentPathIndex++,this.currentPathIndex>=this.rollPath.length&&this.finishRoll()}else{const l=n.clone().sub(r).normalize().multiplyScalar(a);r.add(l),this.ball.update(t,l)}}else this.finishRoll()}finishRoll(){if(this.isRolling=!1,this.audio.stopRollingSound(),this.rollDirection){this.ball.triggerWallImpact(this.rollDirection.vec),this.audio.playWallHit(),this.renderer.triggerCameraShake(.12);const t=this.ball.mesh.position;this.particles.emitWallImpactSparks(t,this.rollDirection.vec,10)}if(this.notifyState(),this.paintedCount>=this.totalFloorCount&&!this.isVictory){this.triggerVictory();return}if(this.queuedDirection){const t=this.queuedDirection;this.queuedDirection=null,this.executeRoll(t)}}triggerVictory(){this.isVictory=!0,this.audio.playVictoryFanfare(),this.particles.triggerVictoryCelebration([this.theme.paintCss,"#ffffff","#ffd700","#00e5ff"]);const t=this.calculateStars();this.leaderboard.recordLevelComplete(this.currentLevel,this.moves,t),this.onVictoryCallback&&this.onVictoryCallback({level:this.currentLevel,moves:this.moves,stars:t,theme:this.theme})}calculateStars(){const t=Math.max(4,Math.floor(this.totalFloorCount/3.2));return this.moves<=t?3:this.moves<=t*1.5?2:1}restartLevel(){this.loadLevel(this.currentLevel)}nextLevel(){this.loadLevel(this.currentLevel+1)}notifyState(){if(this.onStateChange){const t=this.totalFloorCount>0?Math.min(100,Math.round(this.paintedCount/this.totalFloorCount*100)):0;this.onStateChange({level:this.currentLevel,moves:this.moves,paintedCount:this.paintedCount,totalFloorCount:this.totalFloorCount,percent:t,theme:this.theme,isVictory:this.isVictory})}}}window.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("canvas-container"),t=document.getElementById("tutorial-hint"),e=new Yf(i),n=new $f(.44),r=new Zf(1),s=new jf,a=new Jf,o=new Qf;e.scene.add(r.group),e.scene.add(n.mesh),e.scene.add(s.group);let l=null;const c=new tp({onRestart:()=>{a.playUiClick(),l&&l.restartLevel()},onNextLevel:()=>{a.playUiClick(),l&&l.nextLevel()},onToggleAudio:()=>{const m=a.toggleMute();c.updateAudioButton(m)},onOpenLeaderboard:()=>{a.playUiClick(),c.renderLeaderboard(o),c.toggleLeaderboardModal(!0)},onSelectDirection:m=>{l&&l.handleInput(m)}});c.updateAudioButton(a.isMuted),l=new sp({renderer:e,ball:n,gridMap:r,particles:s,audio:a,leaderboard:o,onStateChange:m=>{c.updateState(m),m.level>1&&t&&(t.style.display="none")}}),l.onVictoryCallback=m=>{c.showVictory(m)},new ep(i,m=>{a.ensureContext(),l.handleInput(m)});const u=o.profile.highestLevel||1;l.loadLevel(u);let d=performance.now();function f(m){requestAnimationFrame(f);const _=Math.min((m-d)/1e3,.1);d=m,l.update(_),r.update(_),s.update(_),e.update(_,n.mesh.position),e.render()}requestAnimationFrame(f)});
