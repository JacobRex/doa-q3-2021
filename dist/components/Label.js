(function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],d=0,s=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&s.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={"components/Label":0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;o.push(["1857","chunk-vendors"]),n()})({1857:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:[e.$s.Label,e.$s["variant__"+e.variant]],on:{click:e.emitClick}},[e._t("default")],2)},a=[],o=(n("caad"),{name:"CLabel",props:{kind:{type:String,default:"normal",validator:function(e){return["normal","bold","positive","important","critical"].includes(e)}}},methods:{emitClick:function(){this.$emit("click")}}}),i=o,l=n("f58a"),c=n("2877");function u(e){this["s"]=l["default"].locals||l["default"]}var f=Object(c["a"])(i,r,a,!1,u,null,null),d=f.exports;t["default"]=d},7952:function(e,t,n){e.exports={Label:"v0-2-14_Label_de670755e4468e04318f48cb082451a2",variant__normal:"v0-2-14_Label_5d0d43d1325755586f6825b31653d77d",variant__bold:"v0-2-14_Label_0f87211921f0b62f9d49b5f0c16ad992",variant__positive:"v0-2-14_Label_063cadd1420b0e78db3835728b8c2e35",variant__important:"v0-2-14_Label_d99ca6fa52fb582c9f41d3e7460b9e35",variant__critical:"v0-2-14_Label_fc041520a0ec2b7b589ea9790d664deb"}},f58a:function(e,t,n){"use strict";var r=n("7952"),a=n.n(r);n.d(t,"default",(function(){return a.a}))}});
//# sourceMappingURL=Label.js.map