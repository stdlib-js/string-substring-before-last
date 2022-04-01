// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).substringBeforeLast=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=f,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"string"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var E=function(r){return y.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=P,O=_,x=w;var V=E,S=function(r){var e,t,n;if(null==r)return x.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[O]=t:delete r[O],n},k=b()?S:V,I=String.prototype.valueOf;var A=k,F=function(r){try{return I.call(r),!0}catch(r){return!1}},R=b();var $=function(r){return"object"==typeof r&&(r instanceof String||(R?F(r):"[object String]"===A(r)))},M=m,C=$;var N=d,B=function(r){return M(r)||C(r)},G=$;N(B,"isPrimitive",m),N(B,"isObject",G);var L=B,Z=Math.floor;var W=function(r){return Z(r)===r},X=W;var z=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&X(r.length)&&r.length>=0&&r.length<=9007199254740991};var U=function(r){return"number"==typeof r},Y=Number,D=Y.prototype.toString;var q=k,H=Y,J=function(r){try{return D.call(r),!0}catch(r){return!1}},K=b();var Q=function(r){return"object"==typeof r&&(r instanceof H||(K?J(r):"[object Number]"===q(r)))},rr=U,er=Q;var tr=d,nr=function(r){return rr(r)||er(r)},ir=Q;tr(nr,"isPrimitive",U),tr(nr,"isObject",ir);var ar=nr,or=Number.POSITIVE_INFINITY,ur=Y.NEGATIVE_INFINITY,cr=or,sr=ur,fr=W;var lr=function(r){return r<cr&&r>sr&&fr(r)},pr=ar.isPrimitive,vr=lr;var gr=function(r){return pr(r)&&vr(r)},dr=ar.isObject,mr=lr;var hr=function(r){return dr(r)&&mr(r.valueOf())},br=gr,wr=hr;var yr=d,Er=function(r){return br(r)||wr(r)},jr=hr;yr(Er,"isPrimitive",gr),yr(Er,"isObject",jr);var Pr=Er;var _r=function(r){return r!=r},Tr=ar.isPrimitive,Or=_r;var xr=function(r){return Tr(r)&&Or(r)},Vr=ar.isObject,Sr=_r;var kr=function(r){return Vr(r)&&Sr(r.valueOf())},Ir=xr,Ar=kr;var Fr=d,Rr=function(r){return Ir(r)||Ar(r)},$r=kr;Fr(Rr,"isPrimitive",xr),Fr(Rr,"isObject",$r);var Mr=z,Cr=Pr.isPrimitive,Nr=L.isPrimitive,Br=Rr.isPrimitive;var Gr=function(r,e,t){var n,i,a;if(!Mr(r)&&!Nr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Cr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Nr(r)){if(!Nr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Br(e)){for(a=i;a<n;a++)if(Br(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Lr=Gr,Zr=L.isPrimitive;var Wr=function(r){if(!Zr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Xr=L.isPrimitive;var zr=function(r){if(!Xr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ur=Wr,Yr=zr,Dr=L.isPrimitive;var qr=function(r){return Dr(r)&&r===Yr(r)&&r!==Ur(r)},Hr=or,Jr=ur;var Kr=function(r){return r==r&&r>Jr&&r<Hr},Qr=Pr.isPrimitive;var re=function(r){return Qr(r)&&r>=0},ee=Pr.isObject;var te=function(r){return ee(r)&&r.valueOf()>=0},ne=re,ie=te;var ae=d,oe=function(r){return ne(r)||ie(r)},ue=te;ae(oe,"isPrimitive",re),ae(oe,"isObject",ue);var ce=oe.isPrimitive,se=L.isPrimitive;var fe=function(r,e){var t,n;if(!se(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ce(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},le=Pr.isPrimitive,pe=L.isPrimitive;var ve=function(r,e,t){var n,i;if(!pe(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!pe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!le(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},ge=fe,de=ve;var me=function(r,e,t){var n=!1,i=e-r.length;return i<0||(de(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ge("0",i):ge("0",i)+r,n&&(r="-"+r)),r},he=qr,be=zr,we=Wr,ye=Kr,Ee=ar.isPrimitive,je=me;var Pe=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ye(n)){if(!Ee(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=je(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=je(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=he(r.specifier)?be(t):we(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},_e=L.isPrimitive,Te=/[-\/\\^$*+?.()|[\]{}]/g;var Oe=function(r){var e,t;if(!_e(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Te,"\\$&"):(e=(e=r.substring(1,t)).replace(Te,"\\$&"),r=r[0]+e+r.substring(t))},xe=/./;var Ve=function(r){return"boolean"==typeof r},Se=Boolean.prototype.toString;var ke=k,Ie=function(r){try{return Se.call(r),!0}catch(r){return!1}},Ae=b();var Fe=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ae?Ie(r):"[object Boolean]"===ke(r)))},Re=Ve,$e=Fe;var Me=d,Ce=function(r){return Re(r)||$e(r)},Ne=Fe;Me(Ce,"isPrimitive",Ve),Me(Ce,"isObject",Ne);var Be=Ce;var Ge=function(){return new Function("return this;")()},Le="object"==typeof self?self:null,Ze="object"==typeof window?window:null,We="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Xe="object"==typeof We?We:null;module.exports=Xe;var ze=Be.isPrimitive,Ue=Ge,Ye=Le,De=Ze,qe=r(Object.freeze({__proto__:null}));var He=function(r){if(arguments.length){if(!ze(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ue()}if(Ye)return Ye;if(De)return De;if(qe)return qe;throw new Error("unexpected error. Unable to resolve global object.")},Je=He(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array,rt=xe,et=Ke,tt=Qe;var nt=function(){return"function"==typeof rt||"object"==typeof tt||"function"==typeof et};var it=function(){return/^\s*function\s*([^(]*)/i},at=it;d(at,"REGEXP",it());var ot=at,ut=k;var ct=Array.isArray?Array.isArray:function(r){return"[object Array]"===ut(r)};var st=function(r){return null!==r&&"object"==typeof r};d(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ct(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(st));var ft=st;var lt=k,pt=ot.REGEXP,vt=function(r){return ft(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var gt=function(r){var e,t,n;if(("Object"===(t=lt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pt.exec(n.toString()))return e[1]}return vt(r)?"Buffer":t},dt=gt;var mt=gt;var ht=function(r){var e;return null===r?"null":"object"===(e=typeof r)?dt(r).toLowerCase():e},bt=function(r){return mt(r).toLowerCase()},wt=nt()?bt:ht;var yt=function(r){return"function"===wt(r)},Et=RegExp.prototype.exec;var jt=k,Pt=function(r){try{return Et.call(r),!0}catch(r){return!1}},_t=b();var Tt=Oe,Ot=yt,xt=L.isPrimitive,Vt=function(r){return"object"==typeof r&&(r instanceof RegExp||(_t?Pt(r):"[object RegExp]"===jt(r)))};var St=qr,kt=zr,It=Wr,At=function(r,e,t){if(!xt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(xt(e))e=Tt(e),e=new RegExp(e,"g");else if(!Vt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!xt(t)&&!Ot(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ft=Kr,Rt=ar.isPrimitive,$t=function(r){return Math.abs(r)},Mt=/e\+(\d)$/,Ct=/e-(\d)$/,Nt=/^(\d+)$/,Bt=/^(\d+)e/,Gt=/\.0$/,Lt=/\.0*e/,Zt=/(\..*[^0])0*e/;var Wt=function(r){var e,t,n=parseFloat(r.arg);if(!Ft(n)){if(!Rt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":$t(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=At(t,Zt,"$1e"),t=At(t,Lt,"e"),t=At(t,Gt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=At(t,Mt,"e+0$1"),t=At(t,Ct,"e-0$1"),r.alternate&&(t=At(t,Nt,"$1."),t=At(t,Bt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=St(r.specifier)?kt(t):It(t)},Xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var zt=fe;var Ut=L.isPrimitive,Yt=Lr,Dt=_r,qt=Pe,Ht=Wt,Jt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Xt.exec(r);a;)(t=r.slice(e,Xt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Xt.lastIndex,a=Xt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Kt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+zt(" ",n):zt(" ",n)+r},Qt=me,rn=String.fromCharCode;var en=function(r){var e,t,n,i,a,o,u,c,s;if(!Ut(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Jt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Ut(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Yt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Dt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Dt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Dt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Dt(a)?String(n.arg):rn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Ht(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Qt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Kt(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},tn=L.isPrimitive,nn=en;return function(r,e){var t;if(!tn(r))throw new TypeError(nn("invalid argument. First argument must be a string. Value: `%s`.",r));if(!tn(e))throw new TypeError(nn("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1===(t=r.lastIndexOf(e))?r:r.substring(0,t)}}));
//# sourceMappingURL=bundle.js.map
