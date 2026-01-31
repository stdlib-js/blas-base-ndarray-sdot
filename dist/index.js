"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(g,s){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-base-sdot/dist').ndarray;function o(e){var r=e[0],t=e[1];return d(q(r,0),u(r),i(r,0),a(r),u(t),i(t,0),a(t))}s.exports=o
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
