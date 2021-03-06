require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&"undefined"!=typeof exports?module.exports=t():e.Papa=t()}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;U(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!U(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=m,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=U(t.step),t.chunk=U(t.chunk),t.complete=U(t.complete),t.error=U(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&U(e.read)&&U(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,m=!0,_=",",v="\r\n",s='"',a=s+s,i=!1,r=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(_=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(m=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);"boolean"==typeof t.escapeFormulae&&(o=t.escapeFormulae)}();var h=new RegExp(q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,i);if("object"==typeof e[0])return f(r||u(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:u(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e){if("object"!=typeof e)return[];var t=[];for(var i in e)t.push(i);return t}function f(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&m){for(var a=0;a<e.length;a++)0<a&&(r+=_),r+=y(e[a],a);0<t.length&&(r+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=_);var g=n&&s?e[p]:p;r+=y(t[o][g],p)}o<t.length-1&&(!i||0<h&&!f)&&(r+=v)}}return r}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===o&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(h,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(_)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=w,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(U(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(U(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){U(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else U(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&U(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(U(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!U(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){U(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{r.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(_){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(U(_.step)){var p=_.step;_.step=function(e){if(c=e,m())g();else{if(g(),0===c.data.length)return;i+=e.data.length,_.preview&&i>_.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function v(e){return"greedy"===_.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),_.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return m()&&function(){if(!c)return;function e(e,t){U(_.transformHeader)&&(e=_.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;m()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!_.header&&!_.dynamicTyping&&!_.transform)return c;function e(e,t){var i,r=_.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];_.header&&(n=i>=l.length?"__parsed_extra":l[i]),_.transform&&(s=_.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s}return _.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);_.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function m(){return _.header&&0===l.length}function y(e,t){return i=e,_.dynamicTypingFunction&&void 0===_.dynamicTyping[i]&&(_.dynamicTyping[i]=_.dynamicTypingFunction(i)),!0===(_.dynamicTyping[i]||_.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var i}function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(e,t,i){var r=_.quoteChar||'"';if(_.newline||(_.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(q(t)+"([^]*?)"+q(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,_.delimiter)U(_.delimiter)&&(_.delimiter=_.delimiter(e),c.meta.delimiter=_.delimiter);else{var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new w({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&v(p.data[g]))c++;else{var m=p.data[g].length;l+=m,void 0!==o?0<m&&(d+=Math.abs(m-o),o=m):o=m}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(_.delimiter=s),bestDelimiter:s}}(e,_.newline,_.skipEmptyLines,_.comments,_.delimitersToGuess);n.successful?_.delimiter=n.bestDelimiter:(h=!0,_.delimiter=b.DefaultDelimiter),c.meta.delimiter=_.delimiter}var s=E(_);return _.preview&&_.header&&s.preview++,a=e,o=new w(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=U(_.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,U(_.complete)&&_.complete(c),a=""}}function q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,t,i){if("string"!=typeof a)throw new Error("Input must be a string");var r=a.length,e=D.length,n=I.length,s=T.length,o=U(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(i)return R();if(!T||f.substring(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),g=a.indexOf(I,M),m=new RegExp(q(z)+q(O),"g"),_=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substring(M,M+s)===T){if(-1===g)return R();M=g+n,g=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<g||-1===g)){if(!(p<_)){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,_,g);if(v&&void 0!==v.nextDelim){p=v.nextDelim,_=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===g)break;if(f.push(a.substring(M,g)),C(g+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(_=M,M++;;){if(-1===(_=a.indexOf(O,_+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),E();if(_===r-1)return E(a.substring(M,_).replace(m,O));if(O!==z||a[_+1]!==z){if(O===z||0===_||a[_-1]!==z){-1!==p&&p<_+1&&(p=a.indexOf(D,_+1)),-1!==g&&g<_+1&&(g=a.indexOf(I,_+1));var y=w(-1===g?p:Math.min(p,g));if(a[_+1+y]===D){f.push(a.substring(M,_).replace(m,O)),a[M=_+1+y+e]!==O&&(_=a.indexOf(O,M)),p=a.indexOf(D,M),g=a.indexOf(I,M);break}var k=w(g);if(a.substring(_+1+k,_+1+k+n)===I){if(f.push(a.substring(M,_).replace(m,O)),C(_+1+k+n),p=a.indexOf(D,M),_=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),_++}}else _++}return E();function b(e){h.push(e),d=M}function w(e){var t=0;if(-1!==e){var i=a.substring(_+1,e);i&&""===i.trim()&&(t=i.length)}return t}function E(e){return i||(void 0===e&&(e=a.substring(M)),f.push(e),M=r,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],g=a.indexOf(I,M)}function R(e){return{data:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(t||0)}}}function S(){A(R()),h=[],u=[]}function x(e,t,i){var r={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<i||-1===i)){var s=a.indexOf(D,n);if(-1===s)return r;n<s&&(n=a.indexOf(O,n+1)),r=x(s,n,i)}else r={nextDelim:e,quoteSearch:t};return r}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function m(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(U(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else U(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=a[e];U(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=E(e[i]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function U(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});
},{}],2:[function(require,module,exports){
const {Writable, Readable} = require("stream");
const {EventEmitter} = require("events");

class ReReadable extends Writable {

    constructor(options) {

        options = Object.assign({
            length: 1048576,
            highWaterMark: 32,
            dropInterval: 1e3
        }, options);

        super(options);

        this._readableOptions = options;

        this._highWaterMark = options.highWaterMark;
        this._bufArrLength = options.length;

        this._reading = 0;
        this._bufArr = [];
        this.hiBufCr = 0;
        this.loBufCr = 0;
        this._waiting = null;
        this._ended = new Promise((res) => this.on("finish", res));

    }

    _write(chunk, encoding, callback) {
        this._bufArr.push([chunk, encoding]);
        if (this._bufArr.length > this._bufArrLength) {
            this._waiting = callback;
            this.drop();
        } else {
            callback();
        }
        this.emit("wrote");
    }

    _writev(chunks, callback) {
        this._bufArr.push(...chunks.map(({chunk, encoding}) => [chunk, encoding]));
        if (this._bufArr.length > this._bufArrLength) {
            this._waiting = callback;
            this.drop();
        } else {
            callback();
        }
        this.emit("wrote");
    }

    updateBufPosition(bufCr) {
        this.hiBufCr = bufCr > this.hiBufCr ? bufCr : this.hiBufCr;
        this.loBufCr = bufCr > this.loBufCr ? bufCr : this.loBufCr;
        if (this._waiting && this.hiBufCr >= this._bufArrLength - this._highWaterMark) {
            const cb = this._waiting;
            this._waiting = null;
            cb();
        }
    }

    drop() {
        if (this._bufArr.length > this._bufArrLength)
            this.emit("drop", this._bufArr.splice(0, this._bufArr.length - this._bufArrLength).length);
    }

    rewind() {
        return this.tail(-1);
    }

    tail(count) {
        let end = false;
        this._ended.then(() => ret._read(end = true));
        this.setMaxListeners(++this._reading + EventEmitter.defaultMaxListeners);

        const ret = new Readable(Object.assign(this._readableOptions, {
            read: () => {
                if (ret.bufCr < this._bufArr.length) {
                    while(ret.bufCr < this._bufArr.length) {                 // while there's anything to read
                        const resp = ret.push(...this._bufArr[ret.bufCr++]); // push to readable
                        if (!resp && !end) break;                            // until there's not willing to read and we're not ended
                    }
                    this.updateBufPosition(ret.bufCr);
                } else if (!end) {
                    this.once("wrote", ret._read);
                }

                if (end)
                    ret.push(null);
            }
        }));

        ret.bufCr = count < this._bufArr.length && count > 0 ? this._bufArr.length - count : 0;

        this.on("drop", (count) => {
            ret.bufCr -= count;
            if (ret.bufCr < 0) {
                ret.emit("drop", -ret.bufCr);
                ret.bufCr = 0;
            }
        });

        return ret;
    }
}

module.exports = {ReReadable};

},{"events":28,"stream":35}],3:[function(require,module,exports){
(function (Buffer){(function (){
const scramjet = require(".");

/**
 * A facilitation stream created for easy splitting or parsing buffers.
 *
 * Useful for working on built-in Node.js streams from files, parsing binary formats etc.
 *
 * A simple use case would be:
 *
 * ```javascript
 *  fs.createReadStream('pixels.rgba')
 *      .pipe(new BufferStream)         // pipe a buffer stream into scramjet
 *      .breakup(4)                     // split into 4 byte fragments
 *      .parse(buffer => [
 *          buffer.readInt8(0),            // the output is a stream of R,G,B and Alpha
 *          buffer.readInt8(1),            // values from 0-255 in an array.
 *          buffer.readInt8(2),
 *          buffer.readInt8(3)
 *      ]);
 * ```
 *
 * @memberof module:scramjet.
 * @borrows BufferStream#stringify as BufferStream#toStringStream
 * @borrows BufferStream#shift as BufferStream#pop
 * @borrows BufferStream#parse as BufferStream#toDataStream
 * @extends DataStream
 */
class BufferStream extends scramjet.DataStream {

    /**
     * Creates the BufferStream
     *
     * @param {DataStreamOptions} [opts={}] Stream options passed to superclass
     * @test test/methods/buffer-stream-constructor.js
     */
    constructor(...args) {
        super(...args);
        this.buffer = [];
    }

    /**
     * Shift Function
     *
     * @callback ShiftBufferCallback
     * @memberof module:scramjet~
     * @param {Buffer|any} shifted shifted bytes
     */

    /**
     * Shift given number of bytes from the original stream
     *
     * Works the same way as {@see DataStream.shift}, but in this case extracts
     * the given number of bytes.
     *
     * @chainable
     * @param {number} chars The number of bytes to shift
     * @param {ShiftBufferCallback} func Function that receives a string of shifted bytes
     *
     * @test test/methods/string-stream-shift.js
     */
    shift(bytes, func) {
        const ret = Buffer.alloc(bytes);
        const str = this.tap()._selfInstance();
        let offs = 0;

        const chunkHandler = (chunk) => {
            const length = Math.min(ret.length - offs, chunk.length);
            chunk.copy(ret, offs, 0, length);
            offs += length;
            if (length >= bytes) {
                unHook()
                    .then(
                        () => {
                            str.write(chunk.slice(length));
                            this.pipe(str);
                        }
                    );
            }
        };

        const endHandler = (...args) => {
            if (ret.length < bytes) {
                unHook();
            }
            str.end(...args);
        };

        const errorHandler = str.emit.bind(str, "error");

        const unHook = () => {
            this.removeListener("data", chunkHandler);
            this.removeListener("end", endHandler);
            this.removeListener("error", errorHandler);
            return func(ret);
        };


        this.on("data", chunkHandler);
        this.on("end", endHandler);
        this.on("error", errorHandler);

        return str;
    }

    /**
     * Splits the buffer stream into buffer objects
     *
     * @chainable
     * @param  {string|Buffer} splitter the buffer or string that the stream
     *                                  should be split by.
     * @return {BufferStream}  the re-split buffer stream.
     * @test test/methods/buffer-stream-split.js
     */
    split(splitter) {
        if (splitter instanceof Buffer || typeof splitter === "string") {
            const needle = Buffer.from(splitter);
            return this.tap().pipe(this._selfInstance({
                transform(buffer, enc, callback) {
                    if (Buffer.isBuffer(this._haystack) && this._haystack.length > 0) {
                        this._haystack = Buffer.from([this._haystack, buffer]);
                    } else {
                        this._haystack = buffer;
                    }

                    let pos;
                    while((pos = this._haystack.indexOf(needle)) > -1) {
                        this.push(Buffer.from(this._haystack.slice(0, pos)));
                        this._haystack = this._haystack.slice(pos + needle.length);
                    }

                    callback();
                },
                flush(callback) {
                    if (this._haystack && this._haystack.length) this.push(this._haystack);

                    this._haystack = null;
                    callback();
                }
            }));
        }
    }

    /**
     * Breaks up a stream apart into chunks of the specified length
     *
     * @chainable
     * @param  {number} number the desired chunk length
     * @return {BufferStream}  the resulting buffer stream.
     * @test test/methods/buffer-stream-breakup.js
     */
    breakup(number) {
        if (number <= 0 || !isFinite(+number))
            throw new Error("Breakup number is invalid - must be a positive, finite integer.");

        return this.tap().pipe(this._selfInstance({
            transform(chunk, encoding, callback) {
                if (Buffer.isBuffer(this.buffer)) {
                    chunk = Buffer.concat([this.buffer, chunk]);
                }
                let offset;
                for (offset = 0; offset < chunk.length - number; offset += number) {
                    this.push(chunk.slice(offset, offset + number));
                }
                this.buffer = chunk.slice(offset);
                callback();
            },
            flush(callback) {
                this.push(this.buffer);
                this.buffer = null;
                callback();
            }
        }));

    }

    /**
     * Creates a string stream from the given buffer stream
     *
     * Still it returns a DataStream derivative and isn't the typical node.js
     * stream so you can do all your transforms when you like.
     *
     * @param  {string|any} [encoding="utf-8"] The encoding to be used to convert the buffers
     *                           to streams.
     * @return {StringStream}  The converted stream.
     * @test test/methods/buffer-stream-tostringstream.js
     */
    stringify(encoding = "utf-8") {
        return this.pipe(new scramjet.StringStream(encoding, {objectMode: true}));
    }

    /**
     * @callback BufferParseCallback
     * @memberof module:scramjet~
     * @param {Buffer} chunk the transformed chunk
     * @return {Promise<any>|any}  the promise should be resolved with the parsed object
     */

    /**
     * Parses every buffer to object
     *
     * The method MUST parse EVERY buffer into a single object, so the buffer
     * stream here should already be split or broken up.
     *
     * @param  {BufferParseCallback} parser The transform function
     * @return {DataStream}  The parsed objects stream.
     * @test test/methods/buffer-stream-parse.js
     */
    parse(parser) {
        return this.tap().map(parser, scramjet.DataStream);
    }

    /**
     * @meta.noReadme
     * @ignore
     */
    _transform(chunk, encoding, callback) {
        this.push(Buffer.from(chunk, encoding));
        return callback();
    }

    /**
     * Creates a pipeline of streams and returns a scramjet stream.
     *
     * @see DataStream.pipeline
     * @static
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|string|Readable} readable the initial readable argument that is streamable by scramjet.from
     * @param {Array<AsyncFunction|Function|Transform>} ...transforms Transform functions (as in {@link DataStream..use}) or Transform streams (any number of these as consecutive arguments)
     *
     * @returns {BufferStream} a new StringStream instance of the resulting pipeline
     */
    static pipeline(...args) {
        return scramjet.DataStream.pipeline.call(this, ...args);
    }

    /**
     * Create BufferStream from anything.
     *
     * @see module:scramjet.from
     *
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|Readable} stream argument to be turned into new stream
     * @param {DataStreamOptions|Writable} [options={}] options passed to the new stream if created
     * @return {BufferStream}          new StringStream.
     */
    static from(...args) {
        return scramjet.DataStream.from.call(this, ...args);
    }

}

BufferStream.prototype.pop = BufferStream.prototype.shift;
BufferStream.prototype.toDataStream = BufferStream.prototype.parse;
BufferStream.prototype.toStringStream = BufferStream.prototype.stringify;

module.exports = BufferStream;

}).call(this)}).call(this,require("buffer").Buffer)
},{".":5,"buffer":27}],4:[function(require,module,exports){
const {PromiseTransformStream} = require("./util/promise-transform-stream");
const {Readable, Writable, Transform} = require("stream");
const scramjet = require(".");

const {
    AsyncGeneratorFunction,
    GeneratorFunction,
    resolveCalleeBlackboxed,
    pipeIfTarget
} = require("./util/utils");

/**
 * DataStream is the primary stream type for Scramjet. When you parse your
 * stream, just pipe it you can then perform calculations on the data objects
 * streamed through your flow.
 *
 * Use as:
 *
 * ```javascript
 * const { DataStream } = require('scramjet');
 *
 * await (DataStream.from(aStream) // create a DataStream
 *     .map(findInFiles)           // read some data asynchronously
 *     .map(sendToAPI)             // send the data somewhere
 *     .run());                    // wait until end
 * ```
 * @memberof module:scramjet.
 * @alias DataStream
 * @borrows module:scramjet.DataStream#bufferify as module:scramjet.DataStream#toBufferStream
 * @borrows module:scramjet.DataStream#stringify as module:scramjet.DataStream#toStringStream
 * @extends import("stream").PassThrough
 */
class DataStream extends PromiseTransformStream {

    /**
     * Create the DataStream.
     *
     * @param {DataStreamOptions} [opts={}] Stream options passed to superclass
     *
     * @test test/methods/data-stream-constructor.js
     */
    constructor(opts) {
        super(Object.assign({
            objectMode: true,
            writableObjectMode: true,
            readableObjectMode: true
        }, opts));
    }

    /**
     * Returns a DataStream from pretty much anything sensibly possible.
     *
     * Depending on type:
     * * `self` will return self immediately
     * * `Readable` stream will get piped to the current stream with errors forwarded
     * * `Array` will get iterated and all items will be pushed to the returned stream.
     *   The stream will also be ended in such case.
     * * `GeneratorFunction` will get executed to return the iterator which will be used as source for items
     * * `AsyncGeneratorFunction` will also work as above (including generators) in node v10.
     * * `Iterable`s iterator will be used as a source for streams
     *
     * You can also pass a `Function` or `AsyncFunction` that will be executed and it's outcome will be
     * passed again to `from` and piped to the initially returned stream. Any additional arguments will be
     * passed as arguments to the function.
     *
     * If a `String` is passed, scramjet will attempt to resolve it as a module and use the outcome
     * as an argument to `from` as in the Function case described above. For more information see {@link modules.md}
     *
     * A simple example from a generator:
     *
     * ```javascript
     * DataStream
     *   .from(function* () {
     *      while(x < 100) yield {x: x++};
     *   })
     *   .each(console.log)
     *   // {x: 0}
     *   // {x: 1}
     *   // ...
     *   // {x: 99}
     * ```
     *
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Promise<any>|Function|string|Readable} input argument to be turned into new stream
     * @param {DataStreamOptions|Writable} [options={}] options for creation of a new stream or the target stream
     * @param {any[]} ...args additional arguments for the stream - will be passed to the function or generator
     * @return {DataStream}
     */
    static from(input, options, ...args) {
        const target = options instanceof this && options;

        const {errors: {StreamError}} = scramjet;

        if (input instanceof this) {
            return target ? input.pipe(target) : input;
        }

        if (input instanceof Readable || (
            typeof input.readable === "boolean" &&
            typeof input.pipe === "function" &&
            typeof input.on === "function"
        )) {
            const out = target || new this(
                Object.assign(
                    {},
                    options,
                    { referrer: input instanceof DataStream ? input : null }
                )
            );

            input.pipe(out);
            input.on("error", e => out.raise(e));
            return out;
        }

        if (input instanceof GeneratorFunction || input instanceof AsyncGeneratorFunction) {
            const iterator = input(...args);
            const iteratorStream = this.fromIterator(iterator, options);
            return pipeIfTarget(iteratorStream, target);
        }

        if (Array.isArray(input))
            return pipeIfTarget(this.fromArray(input, options), target);

        const iter = input[Symbol.iterator] || (Symbol.asyncIterator && input[Symbol.asyncIterator]);
        if (iter) {
            try {
                const iterator = iter.call(input);
                return pipeIfTarget(this.fromIterator(iterator, options), target);
            } catch(e) {
                const out = target || new this();
                out.raise(new StreamError(e, out, "EXTERNAL", null));

                return out;
            }
        }

        if (input instanceof Promise) {
            const out = new this(Object.assign({}, options));

            input
                .then(source => this.from(source, out))
                .catch(e => out.raise(new StreamError(e, out, "EXTERNAL", null)));

            return out;
        }

        if (typeof input === "function") {
            const out = new this(Object.assign({}, options));

            Promise.resolve(options)
                .then(input)
                .then(source => this.from(source, out))
                .catch(e => out.raise(new StreamError(e, out, "EXTERNAL", null)));

            return out;
        }

        if (typeof input === "string") {
            return new DataStream([]).use(input, ...args);
        }

        throw new Error("Cannot return a stream from passed object");
    }

    /**
     * @callback MapCallback
     * @memberof module:scramjet~
     * @param {any} chunk the chunk to be mapped
     * @returns {Promise<any>|any}  the mapped object
     */

    /**
     * Transforms stream objects into new ones, just like Array.prototype.map
     * does.
     *
     * Map takes an argument which is the Function function operating on every element
     * of the stream. If the function returns a Promise or is an AsyncFunction then the
     * stream will await for the outcome of the operation before pushing the data forwards.
     *
     * A simple example that turns stream of urls into stream of responses
     *
     * ```javascript
     * stream.map(async url => fetch(url));
     * ```
     *
     * Multiple subsequent map operations (as well as filter, do, each and other simple ops)
     * will be merged together into a single operation to improve performance. Such behaviour
     * can be suppressed by chaining `.tap()` after `.map()`.
     *
     * @param {MapCallback} func The function that creates the new object
     * @param {function(new:DataStream)} [ClassType=this.constructor] The class to be mapped to.
     * @chainable
     *
     * @test test/methods/data-stream-map.js
     */
    map(func, ClassType = this.constructor) {
        return this.pipe(new ClassType({
            promiseTransform: func,
            referrer: this
        }));
    }

    /**
     * @callback FilterCallback
     * @memberof module:scramjet~
     * @param {any} chunk the chunk to be filtered or not
     * @returns {Promise<Boolean>|Boolean} information if the object should remain in the filtered stream.
     */

    /**
     * Filters object based on the function outcome, just like Array.prototype.filter.
     *
     * Filter takes a Function argument which should be a Function or an AsyncFunction that
     * will be called on each stream item. If the outcome of the operation is `falsy` (`0`, `''`,
     * `false`, `null` or `undefined`) the item will be filtered from subsequent operations
     * and will not be pushed to the output of the stream. Otherwise the item will not be affected.
     *
     * A simple example that filters out non-2xx responses from a stream
     *
     * ```javascript
     * stream.filter(({statusCode}) => !(statusCode >= 200 && statusCode < 300));
     * ```
     *
     * @chainable
     * @param  {FilterCallback} func The function that filters the object
     *
     * @test test/methods/data-stream-filter.js
     */
    filter(func) {
        return this.pipe(this._selfInstance({
            promiseTransform: func,
            afterTransform: (chunk, ret) => ret ? chunk : Promise.reject(DataStream.filter),
            referrer: this
        }));
    }

    /**
     * @callback ReduceCallback
     * @memberof module:scramjet~
     * @param {any} accumulator the accumulator - the object initially passed or returned by the previous reduce operation
     * @param {object} chunk the stream chunk.
     * @return {Promise<any>|any}  accumulator for the next pass
     */

    /**
     * Reduces the stream into a given accumulator
     *
     * Works similarly to Array.prototype.reduce, so whatever you return in the
     * former operation will be the first operand to the latter. The result is a
     * promise that's resolved with the return value of the last transform executed.
     *
     * A simple example that sums values from a stream
     *
     * ```javascript
     * stream.reduce((accumulator, {value}) => accumulator + value);
     * ```
     *
     * This method is serial - meaning that any processing on an entry will
     * occur only after the previous entry is fully processed. This does mean
     * it's much slower than parallel functions.
     *
     * @async
     * @param {ReduceCallback} func The into object will be passed as the  first argument, the data object from the stream as the second.
     * @param {object} into Any object passed initially to the transform function
     *
     * @test test/methods/data-stream-reduce.js
     */
    reduce(func, into) {

        let last = Promise.resolve(into);

        return this.tap()
            .pipe(new PromiseTransformStream({
                promiseTransform: (chunk) => {
                    return last = last.then((acc) => func(acc, chunk));
                },
                referrer: this,
                initial: into
            }))
            .resume()
            .whenFinished()
            .then(() => last);
    }

    /**
     * @callback DoCallback
     * @memberof module:scramjet~
     * @async
     * @param {object} chunk source stream chunk
     * @returns {Promise<any>|any} the outcome is discarded
     */

    /**
     * Perform an asynchronous operation without changing or resuming the stream.
     *
     * In essence the stream will use the call to keep the backpressure, but the resolving value
     * has no impact on the streamed data (except for possible mutation of the chunk itself)
     *
     * @chainable
     * @param {DoCallback} func the async function
     */
    do(func) {
        return this.map(async (chunk) => (await func(chunk), chunk));
    }

    /**
     * Processes a number of functions in parallel, returns a stream of arrays of results.
     *
     * This method is to allow running multiple asynchronous operations and receive all the
     * results at one, just like Promise.all behaves.
     *
     * Keep in mind that if one of your methods rejects, this behaves just like Promise.all
     * you won't be able to receive partial results.
     *
     * @chainable
     * @param {Function[]} functions list of async functions to run
     *
     * @test test/methods/data-stream-all.js
     */
    all(functions) {
        return this.map(chunk => {
            const chunkPromise = Promise.resolve(chunk);
            return Promise.all(functions.map(func => chunkPromise.then(func)));
        });
    }

    /**
     * Processes a number of functions in parallel, returns the first resolved.
     *
     * This method is to allow running multiple asynchronous operations awaiting just the
     * result of the quickest to execute, just like Promise.race behaves.
     *
     * Keep in mind that if one of your methods it will only raise an error if that was
     * the first method to reject.
     *
     * @chainable
     * @param {Function[]} functions list of async functions to run
     *
     * @test test/methods/data-stream-race.js
     */
    race(functions) {
        return this.map(chunk => {
            const chunkPromise = Promise.resolve(chunk);
            return Promise.race(functions.map(func => chunkPromise.then(func)));
        });
    }

    /**
     * Allows processing items without keeping order
     *
     * This method useful if you are not concerned about the order in which the
     * chunks are being pushed out of the operation. The `maxParallel` option is
     * still used for keeping a number of simultaneous number of parallel operations
     * that are currently happening.
     *
     * @param {MapCallback} func the async function that will be unordered
     */
    unorder(func) {
        const waiting = [];
        const processing = Array(this._options.maxParallel).fill(null);
        const out = this._selfInstance({referrer: this});

        this
            .each(async chunk => {
                // we're using this race condition on purpose
                /* eslint-disable require-atomic-updates */
                let slot = processing.findIndex(x => x === null);
                if (slot < 0 && processing.length < this._options.maxParallel) slot = processing.length;
                if (slot < 0) slot = await new Promise(res => waiting.push(res));

                processing[slot] = Promise
                    .resolve(chunk)
                    .then(func)
                    .then(result => out.whenWrote(result))
                    .then(() => {
                        const next = waiting.shift();
                        if (next) next(slot);
                        else processing[slot] = null;
                    });
                /* eslint-enable require-atomic-updates */
            })
            .run()
            .then(() => Promise.all(processing))
            .then(() => out.end());

        return out;
    }

    /**
     * @callback IntoCallback
     * @memberof module:scramjet~
     * @async
     * @param {*} into stream passed to the into method
     * @param {any} chunk source stream chunk
     * @return {Promise<any>|any} resolution for the old stream (for flow control only)
     */

    /**
     * Allows own implementation of stream chaining.
     *
     * The async Function is called on every chunk and should implement writes in it's own way. The
     * resolution will be awaited for flow control. The passed `into` argument is passed as the first
     * argument to every call.
     *
     * It returns the DataStream passed as the second argument.
     *
     * @chainable
     * @param  {IntoCallback} func the method that processes incoming chunks
     * @param  {DataStream} into the DataStream derived class
     *
     * @test test/methods/data-stream-into.js
     */
    into(func, into) {
        if (!(into instanceof DataStream)) throw new Error("Stream must be passed!");

        if (!into._options.referrer)
            into.setOptions({referrer: this});

        this.tap()
            .catch(e => into.raise(e))
            .pipe(new (this.constructor)({
                promiseTransform: async (chunk) => {
                    try {
                        await func(into, chunk);
                    } catch(e) {
                        into.raise(e);
                    }
                },
                referrer: this
            }))
            .on("end", () => into.end())
            .resume();

        return into;
    }

    /**
     * @callback UseCallback
     * @memberof module:scramjet~
     * @async
     * @param {DataStream} stream
     * @param  {any[]} ...parameters
     * @returns {DataStream}
     */

    /**
     * Calls the passed method in place with the stream as first argument, returns result.
     *
     * The main intention of this method is to run scramjet modules - transforms that allow complex transforms of
     * streams. These modules can also be run with [scramjet-cli](https://github.com/signicode/scramjet-cli) directly
     * from the command line.
     *
     * @chainable
     * @param {AsyncGeneratorFunction|GeneratorFunction|UseCallback|string|Readable} func if passed, the function will be called on self to add an option to inspect the stream in place, while not breaking the transform chain. Alternatively this can be a relative path to a scramjet-module. Lastly it can be a Transform stream.
     * @param {any[]} ...parameters any additional parameters top be passed to the module
     * @test test/methods/data-stream-use.js
     */
    use(func, ...parameters) {
        if (typeof func == "string") {
            func = require(func.startsWith(".") ? resolveCalleeBlackboxed(func) : func);
        }

        if (func instanceof Transform || (
            typeof func.readable === "boolean" && func.readable &&
            typeof func.writable === "boolean" && func.writable &&
            typeof func.pipe === "function" &&
            typeof func.on === "function"
        )) {
            return this.constructor.from(this.pipe(func));
        }

        if (func instanceof GeneratorFunction || func instanceof AsyncGeneratorFunction) {
            return this.constructor.from(func, {}, this, ...parameters);
        }

        if (typeof func === "function") {
            const result = func(this, ...parameters);
            if (result instanceof Promise) {
                const out = new this.constructor();
                result
                    .then(res => this.constructor.from(res).pipe(out))
                    .catch(e => out.raise(e));

                return out;
            } else {
                return result;
            }
        }

        throw new Error("Unknown argument type.");
    }

    /**
     * Consumes all stream items doing nothing. Resolves when the stream is ended.
     *
     * This is very convienient if you're looking to use up the stream in operations that work on each entry like `map`. This uncorks the stream
     * and allows all preceding operations to be run at any speed.
     *
     * All the data of the current stream will be discarded.
     *
     * The function returns a promise that is resolved when the stream ends.
     *
     * @async
     */
    async run() {
        return this.tap()
            .pipe(new DataStream())
            .on("data", () => 0)
            .whenEnd();
    }

    /**
     * Creates a pipeline of streams and returns a scramjet stream.
     *
     * This is similar to node.js stream pipeline method, but also takes scramjet modules
     * as possibilities in an array of transforms. It may be used to run a series of non-scramjet
     * transform streams.
     *
     * The first argument is anything streamable and will be sanitized by {@link DataStream..from}.
     *
     * Each following argument will be understood as a transform and can be any of:
     * * AsyncFunction or Function - will be executed by {@link DataStream..use}
     * * A transform stream that will be piped to the preceding stream
     *
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|string|Readable} readable the initial readable argument that is streamable by scramjet.from
     * @param {Array<AsyncFunction|Function|Transform>} ...transforms Transform functions (as in {@link DataStream..use}) or Transform streams (any number of these as consecutive arguments)
     *
     * @returns {DataStream} a new DataStream instance of the resulting pipeline
     */
    static pipeline(readable, ...transforms) {
        const out = new this();
        let current = this.from(readable);

        (async () => {
            for (let transform of transforms) {
                if (transform instanceof Transform || (
                    typeof transform.readable === "boolean" && transform.readable &&
                    typeof transform.writable === "boolean" && transform.writable &&
                    typeof transform.pipe === "function" &&
                    typeof transform.on === "function"
                )) {
                    current = this.from(current.pipe(transform));
                } else {
                    current = this.from(current).use(transform);
                }
            }

            this
                .from(current)
                .pipe(out);

        })()
            .then()
            .catch(e => {
                return out.raise(e);
            });

        return out;
    }

    /**
     * Stops merging transform Functions at the current place in the command chain.
     *
     * @name tap
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @method
     * @test test/methods/data-stream-tap.js
     */

    /**
     * Reads a chunk from the stream and resolves the promise when read.
     *
     * @async
     * @name whenRead
     * @memberof module:scramjet.DataStream#
     * @method
     */

    /**
     * Writes a chunk to the stream and returns a Promise resolved when more chunks can be written.
     *
     * @async
     * @name whenWrote
     * @memberof module:scramjet.DataStream#
     * @method
     * @param {*} chunk a chunk to write
     * @param {any[]} ...more more chunks to write
     */

    /**
     * Resolves when stream ends - rejects on uncaught error
     *
     * @async
     * @name whenEnd
     * @memberof module:scramjet.DataStream#
     * @method
     */

    /**
     * Returns a promise that resolves when the stream is drained
     *
     * @async
     * @name whenDrained
     * @memberof module:scramjet.DataStream#
     * @method
     */

    /**
     * Returns a promise that resolves (!) when the stream is errors
     *
     * @async
     * @name whenError
     * @memberof module:scramjet.DataStream#
     * @method
     */

    /**
     * Allows resetting stream options.
     *
     * It's much easier to use this in chain than constructing new stream:
     *
     * ```javascript
     *     stream.map(myMapper).filter(myFilter).setOptions({maxParallel: 2})
     * ```
     *
     * @meta.conditions keep-order,chain
     *
     * @memberof module:scramjet.DataStream#
     * @name setOptions
     * @method
     * @param {DataStreamOptions} options
     * @chainable
     */

    /**
     * Returns a copy of the stream
     *
     * Creates a new stream and pushes all the data from the current one to the new one.
     * This can be called serveral times.
     *
     * @chainable
     * @param {TeeCallback|Writable} func The duplicate stream will be passed as first argument.
     */
    copy() {
        return this.tap().pipe(this._selfInstance());
    }

    /**
     * Duplicate the stream
     *
     * Creates a duplicate stream instance and passes it to the Function.
     *
     * @chainable
     * @param {TeeCallback|Writable} func The duplicate stream will be passed as first argument.
     *
     * @test test/methods/data-stream-tee.js
     */
    tee(func) {
        if (func instanceof Writable)
            return (this.tap().pipe(func), this);
        func(this.pipe(this._selfInstance()));
        return this.tap();
    }

    /**
     * @callback TeeCallback
     * @memberof module:scramjet~
     * @param {DataStream} teed The teed stream
     */

    /**
     * Performs an operation on every chunk, without changing the stream
     *
     * This is a shorthand for ```stream.on("data", func)``` but with flow control.
     * Warning: this resumes the stream!
     *
     * @chainable
     * @param  {MapCallback} func a Function called for each chunk.
     */
    each(func) {
        return this.tap().map(
            (a) => Promise.resolve(func(a))
                .then(() => a)
        ).resume();
    }

    /**
     * Reads the stream while the function outcome is truthy.
     *
     * Stops reading and emits end as soon as it finds the first chunk that evaluates
     * to false. If you're processing a file until a certain point or you just need to
     * confirm existence of some data, you can use it to end the stream before reaching end.
     *
     * Keep in mind that whatever you piped to the stream will still need to be handled.
     *
     * @chainable
     * @param  {FilterCallback} func The condition check
     *
     * @test test/methods/data-stream-while.js
     */
    while(func) {
        let condition = true;
        const out = this._selfInstance();
        return this.tap().pipe(out.filter(
            (chunk) => {
                const result = condition && func(chunk);
                if (condition != result) {
                    condition = result;
                    this.unpipe(out);
                    out.end();
                }

                return Promise
                    .resolve(result)
                    .then(result => result ? chunk : Promise.reject(DataStream.filter));
            }
        ));
    }

    /**
     * Reads the stream until the function outcome is truthy.
     *
     * Works opposite of while.
     *
     * @chainable
     * @param  {FilterCallback} func The condition check
     *
     * @test test/methods/data-stream-until.js
     */
    until(func) {
        let condition = false;
        const out = this._selfInstance();
        return this.tap().pipe(out).filter(
            (chunk) => {
                const result = condition || func(chunk);
                const ref = !result ? chunk : Promise.reject(DataStream.filter);

                if (condition != result) {
                    condition = result;
                    this.unpipe(out);
                    out.end();
                }

                return ref;
            }
        );
    }

    /**
     * Provides a way to catch errors in chained streams.
     *
     * The handler will be called as asynchronous
     *  - if it resolves then the error will be muted.
     *  - if it rejects then the error will be passed to the next handler
     *
     * If no handlers will resolve the error, an `error` event will be emitted
     *
     * @chainable
     * @name catch
     * @memberof module:scramjet.DataStream#
     * @method
     * @param {Function} callback Error handler (async function)
     *
     * @test test/methods/data-stream-catch.js
     */

    /**
     * Executes all error handlers and if none resolves, then emits an error.
     *
     * The returned promise will always be resolved even if there are no successful handlers.
     *
     * @async
     * @name raise
     * @memberof module:scramjet.DataStream#
     * @method
     * @param {Error} err The thrown error
     *
     * @test test/methods/data-stream-raise.js
     */

    /**
     * Override of node.js Readable pipe.
     *
     * Except for calling overridden method it proxies errors to piped stream.
     *
     * @name pipe
     * @chainable
     * @ignore
     * @method
     * @memberof module:scramjet.DataStream#
     * @param  {NodeJS.WritableStream} to  Writable stream to write to
     * @param  {WritableOptions} [options={}]
     * @return {NodeJS.WritableStream}  the `to` stream
     */

    /**
     * Creates a BufferStream.
     *
     * The passed serializer must return a buffer.
     *
     * @meta.noReadme
     * @chainable
     * @param  {MapCallback} serializer A method that converts chunks to buffers
     * @return {BufferStream}  the resulting stream
     *
     * @test test/methods/data-stream-tobufferstream.js
     */
    bufferify(serializer) {
        return this.map(serializer, scramjet.BufferStream);
    }

    /**
     * Creates a StringStream.
     *
     * The passed serializer must return a string. If no serializer is passed chunks
     * toString method will be used.
     *
     * @chainable
     * @param  {MapCallback|never} [serializer] A method that converts chunks to strings
     * @return {StringStream} the resulting stream
     *
     * @test test/methods/data-stream-tostringstream.js
     */
    stringify(serializer = a => `${a}`) {
        return this.map(serializer, scramjet.StringStream);
    }

    /**
     * Create a DataStream from an Array
     *
     * @param  {Array<*>} array list of chunks
     * @param {DataStreamOptions} [options={}] the read stream options
     * @return {DataStream}
     *
     * @test test/methods/data-stream-fromarray.js
     */
    static fromArray(array, options = {}) {
        const ret = new this(options);
        array = array.slice();
        array.forEach((item) => ret.write(item));
        ret.end();
        return ret;
    }

    /**
     * Create a DataStream from an Iterator
     *
     * Doesn't end the stream until it reaches end of the iterator.
     *
     * @param {Iterator<any>} iterator the iterator object
     * @param {DataStreamOptions} [options={}] the read stream options
     * @return {DataStream}
     *
     * @test test/methods/data-stream-fromiterator.js
     */
    static fromIterator(iterator, options) {
        return new this(Object.assign({}, options, {
            // TODO: handle count argument
            // problem here is how do we know which promises are resolved and until where?
            // need to queue a number of promises up to maxParallel, but push them with
            // Promise.all with the previous one.
            async parallelRead() {
                const read = await iterator.next();
                if (read.done) {
                    return read.value ? [await read.value, null] : [null];
                } else {
                    return [await read.value];
                }
            }
        }));
    }

    /**
     * Aggregates the stream into a single Array
     *
     * In fact it's just a shorthand for reducing the stream into an Array.
     *
     * @async
     * @param  {Array} [initial=[]] Array to begin with (defaults to an empty array).
     * @returns {any[]}
     */
    toArray(initial = []) {
        return this.reduce(
            (arr, item) => (arr.push(item), arr),
            initial
        );
    }

    /**
     * Returns an async generator
     *
     * @return {Generator<Promise<any>>} Returns an iterator that returns a promise for each item.
     */
    toGenerator() {
        this.tap();
        const ref = this;
        return function* () {
            let ended = false;
            ref.on("end", () => ended = true);
            while (!ended) {
                yield ref.whenRead();
            }
            return;
        };
    }

    /**
     * Returns a new instance of self.
     *
     * Normally this doesn't have to be overridden.
     * When the constructor would use some special arguments this may be used to
     * override the object construction in {@link tee}...
     *
     * @meta.noReadme
     * @memberof module:scramjet.DataStream#
     * @name _selfInstance
     * @method
     * @return {DataStream}  an empty instance of the same class.
     * @test test/methods/data-stream-selfinstance.js
     */
}

/**
 * Transform async callback. The passed transform should return a new chunk, unless
 * the output should be filtered - if so, the transform should return `undefined`.
 *
 * Additionally the function can reject with `DataStream.filter` - the result will be
 * filtered and no other transforms will be run on the chunk.
 *
 * @callback ScramjetTransformCallback
 * @memberof module:scramjet~
 * @param {Buffer|string|any} chunk the stream chunk
 * @param {string} encoding encoding of the chunk
 * @returns {Promise<any|undefined>|any|undefined} the result, undefined will be treated as filtered out.
 */

/**
 * Write async callback. Await your async write and resolve.
 *
 * @callback ScramjetWriteCallback
 * @memberof module:scramjet~
 * @param {Buffer|string|any} chunk the stream chunk
 * @param {string} encoding encoding of the chunk
 * @returns {Promise<void>|void} should resolve when the write ends
 */

/**
 * Read async callback. Simply await your async operations and return the result as array.
 *
 * @callback ScramjetReadCallback
 * @memberof module:scramjet~
 * @param {number} count the number of chunks that should be read ("this is more like a set of guideline than actual rules").
 * @returns {Array<any>|Promise<Array<any>>} the read chunk.
 */

/**
 * Standard options for scramjet streams.
 *
 * Defines async transforms or read/write methods for a stream.
 * @typedef {object} DataStreamOptions
 * @memberof module:scramjet~
 * @property {ScramjetReadCallback} [promiseRead=null] an async function returning the next read item
 * @property {ScramjetWriteCallback} [promiseWrite=null] an async function writing the next written item
 * @property {ScramjetTransformCallback} [promiseTransform=null] an async function returning a transformed chunk
 * @property {ScramjetReadCallback} [promiseFlush=null] an async function run before transform stream ends to push last chunks from the buffer
 * @property {ScramjetTransformCallback} [beforeTransform=null] an async function run before the transform
 * @property {ScramjetTransformCallback} [afterTransform=null] an async function run after the transform
 * @property {number} [maxParallel=os.cpus.length*2] the number of transforms done in parallel
 * @property {DataStream} [referrer=null] a referring stream to point to (if possible the transforms will be pushed to it
 * @property {boolean} [objectMode=true] should the object mode be used instead of creating a new stream)
 * @property {number} [highWaterMark] The maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource. Default: 16384 (16KB), or 16 for objectMode streams.
 * @property {string} [encoding] If specified, then buffers will be decoded to strings using the specified encoding. Default: null.
 * @property {boolean} [emitClose] Whether or not the stream should emit 'close' after it has been destroyed. Default: true.
 * @property {Function} [read] Implementation for the stream._read() method.
 * @property {Function} [destroy] Implementation for the stream._destroy() method.
 * @property {Function} [construct] Implementation for the stream._construct() method.
 * @property {boolean} [autoDestroy] Whether this stream should automatically call .destroy() on itself after ending. Default: true.
 */

DataStream.prototype.toBufferStream = DataStream.prototype.bufferify;
DataStream.prototype.toStringStream = DataStream.prototype.stringify;

module.exports = DataStream;

},{".":5,"./util/promise-transform-stream":14,"./util/utils":16,"stream":35}],5:[function(require,module,exports){
/** @ignore */
const {plgctor} = require("./util/promise-transform-stream");

/**
 * Scramjet main exports expose all the stream classes and a number of methods.
 *
 * All scramjet streams allow writing, reading or transform modes - currently
 * exclusively (meaning you can't have two at once). Any of the scramjet streams
 * can be constructed with the following options passed to mimic node.js standard streams:
 *
 * * `async promiseTransform(chunk)` - transform method that resolves with a single output chunk
 * * `async promiseWrite(chunk)` - write method that that resolves when chunk is written
 * * `async promiseRead(count)` - read method that resolves with an array of chunks when called
 *
 * See {@link https://nodejs.org/api/stream.html#stream_api_for_stream_implementers node.js API for stream implementers for details}
 *
 * The object exposes the following classes:
 *
 * * `DataStream` {@see DataStream} - the basic object stream of any type
 * * `StringStream` {@see StringStream} - a stream of strings
 * * `BufferStream` {@see BufferStream} - a stream of buffers
 * * `MultiStream` {@see MultiStream} - a group of streams
 * * `NumberStream` {@see NumberStream} - a stream of numbers
 * * `WindowStream` {@see WindowStream} - a stream of windows of objects
 *
 * The general concept of Scramjet streams is facilitating node's TransformStream mechanism so that you don't need
 * to create a number of streams and create the pipeline, but use the concept of chaining instead. When you call `parse`
 * method for instance, scramjet creates a new stream, pipes it to the callee and forwards errors.
 *
 * What's worth mentioning - scramjet tries to limit the number of created transform streams and pushes the transforms
 * one after another into the same stream class therefore a code `stream.map(transform1).map(transform2).filter(transform3)`
 * will only operate on a single transform stream that evaluates all three transforms one after another.
 *
 * @exports scramjet
 * @module scramjet
 */
module.exports = {
    /**
     * Creates a DataStream that's piped from the passed readable.
     *
     * @memberof module:scramjet
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|string|Readable} input argument to be turned into new stream
     * @param {DataStreamOptions|Writable} [options={}] options for creation of a new stream or the target stream
     * @param {any[]} ...args additional arguments for the stream - will be passed to the function or generator
     * @return {DataStream}
     */
    from(...args) {
        return this.DataStream.from(...args);
    },

    /**
     * Creates a DataStream from an Array
     *
     * @memberof module:scramjet
     * @param  {Array} array list of chunks
     * @param {DataStreamOptions} [options={}] the read stream options
     * @return {DataStream}
     */
    fromArray(...args) {
        return this.DataStream.fromArray(...args);
    },

    get ScramjetOptions() { return require("./util/options"); },

    /**
     * Creates a safe wrapper for scramjet transform module. See [Modules documentation](modules.md) for more info.
     *
     * @param {UseCallback} transform
     * @param {CreateModuleOptions} [options={}]
     * @param  {any[]} ...initialArgs
     * @return {Function} a scramjet module function
     */
    createTransformModule(transform, {StreamClass = module.exports.DataStream} = {}, ...initialArgs) {
        return function (stream, ...extraArgs) {
            return StreamClass.from(stream)
                .use(transform, ...initialArgs, ...extraArgs);
        };
    },

    /**
     * Creates a safe wrapper for scramjet read module. See [Modules documentation](modules.md) for more info.
     *
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|string|Readable} anything
     * @param {CreateModuleOptions} [options={}]
     * @param  {any[]} ...initialArgs
     * @return {Function} a scramjet module function
     */
    createReadModule(anything, {StreamClass = module.exports.DataStream} = {}, ...initialArgs) {
        StreamClass = StreamClass || this.DataStream;

        return (...extraArgs) => {
            return StreamClass.from(anything, ...initialArgs, ...extraArgs);
        };
    },

    /**
     * Options for createModule
     *
     * @typedef {object} CreateModuleOptions
     * @memberof module:scramjet~
     * @prop {DataStream} StreamClass defines what class should the module assume
     */

    get errors()  { return require("./util/stream-errors"); },

    /**
     * @ignore
     * @see {@link buffer-stream.md}
     */
    get BufferStream() { return require("./buffer-stream"); },

    /**
     * @ignore
     * @see {@link data-stream.md}
     */
    get DataStream() { return require("./data-stream"); },

    /**
     * @ignore
     * @see {@link multi-stream.md}
     */
    get MultiStream() { return require("./multi-stream"); },

    /**
     * @ignore
     * @see {@link string-stream.md}
     */
    get StringStream() { return require("./string-stream"); },

    /**
     * Provides a lazy-load accessor to PromiseTransformStream - the base class of scramjet streams
     *
     * @ignore
     */
    get PromiseTransformStream() { return require("./util/promise-transform-stream").PromiseTransformStream; },

    /**
     * Definition of a single mixin for a specific Scramjet class. Should contain any number of stream methods.
     *
     * @typedef {object} StreamMixin
     * @memberof module:scramjet~
     * @property {Function} constructor optional constructor that will be called in the stream constructor (this has to be an own property!)
     */

    /**
     * Definition of a plugin in Scramjet
     *
     * @typedef {object} ScramjetPlugin
     * @memberof module:scramjet~
     * @internal
     * @property {StreamMixin} BufferStream definition of constructor and properties for the BufferStream prototype.
     * @property {StreamMixin} DataStream definition of constructor and properties for the DataStream prototype.
     * @property {StreamMixin} MultiStream definition of constructor and properties for the MultiStream prototype.
     * @property {StreamMixin} StringStream definition of constructor and properties for the StringStream prototype.
     */

    /**
     * Plugs in methods for any of the classes
     *
     * @static
     * @memberof module:scramjet
     * @param  {ScramjetPlugin} mixin the plugin object
     * @return {ScramjetPlugin}
     *
     * @test test/methods/scramjet-plugin.js
     */
    plugin(mixins) {
        for (const key of Object.keys(mixins)) {
            if (key in this) {
                const Mixin = mixins[key];
                const Stream = this[key];
                if (Object.prototype.hasOwnProperty.call(Mixin, "constructor") && Stream[plgctor]) {
                    Stream[plgctor].ctors.push(Mixin.constructor);
                    delete Mixin.constructor;
                }
                Object.getOwnPropertyNames(Mixin).forEach(
                    (prop) => Object.defineProperty(Stream.prototype, prop, Object.getOwnPropertyDescriptor(Mixin, prop))
                );
            } else {
                this[key] = mixins[key];
            }
        }
        return this;
    },

    /**
     * Gets an API version (this may be important for future use)
     *
     * @static
     * @memberof module:scramjet
     * @param {number} version The required version (currently only: 1)
     * @return {ScramjetPlugin}
     */
    API(version) {
        if (version === 1) {
            return module.exports;
        }
    }
};

// ----- Externals documentation -----

/**
 * Asynchronous Generator.
 *
 * @ignore
 * @external AsyncGeneratorFunction
 * @see https://github.com/tc39/proposal-async-iteration#async-generator-functions
 */

/**
 * Generator function (`function* ()`).
 *
 * @ignore
 * @external GeneratorFunction
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
 */

/**
 * Simple Node.js Passthrough stream.
 *
 * @ignore
 * @external stream.PassThrough
 * @see https://nodejs.org/api/stream.html#stream_class_stream_passthrough
 */

},{"./buffer-stream":3,"./data-stream":4,"./multi-stream":6,"./string-stream":7,"./util/options":13,"./util/promise-transform-stream":14,"./util/stream-errors":15}],6:[function(require,module,exports){
const OUT = Symbol("OUT");

/** @ignore */
const mergesortStream = require("./util/merge-sort-stream");
/** @ignore */
const EventEmitter = require("events").EventEmitter;
/** @ignore */
const scramjet = require("./");
const { DataStream, PromiseTransformStream } = scramjet;

/**
 * An object consisting of multiple streams than can be refined or muxed.
 *
 * The idea behind a MultiStream is being able to mux and demux streams when needed.
 *
 * Usage:
 * ```javascript
 * new MultiStream([...streams])
 *  .mux();
 *
 * new MultiStream(function*(){ yield* streams; })
 *  .map(stream => stream.filter(myFilter))
 *  .mux();
 * ```
 *
 * @memberof module:scramjet.
 */
class MultiStream extends EventEmitter {

    /**
     * Crates an instance of MultiStream with the specified stream list
     *
     * @param  {stream.Readable[]|AsyncGenerator<Readable>|Generator<Readable>} streams the list of readable streams (other objects will be filtered out!)
     * @param  {object} [options={}] Optional options for the super object. ;)
     *
     * @test test/methods/multi-stream-constructor.js
     */
    constructor(streams, ...args) {

        super(args.length ? args[0] : streams);

        /**
         * Array of all streams
         * @type {Array}
         */
        this.streams = [];

        /**
         * Source of the MultiStream.
         *
         * This is nulled when the stream ends and is used to control the
         *
         * @type {DataStream}
         */
        this.source = null;

        if (Array.isArray(streams)) {
            streams.forEach((str) => this.add(str));
        } else if (streams) {
            this.source = scramjet.DataStream
                .from(streams)
                .do(stream => this.add(stream))
                .run()
                .then(() => this._checkEmpty(true))
            ;
        }
    }

    /**
     * Constructs MultiStream from any number of streams-likes
     *
     * @param {Array<Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|string|Readable>} streams the array of input streamlike elements
     * @param {function(new:DataStream)} [StreamClass=DataStream]
     * @returns {MultiStream}
     */
    static from(streams, StreamClass = DataStream) {
        if (!(StreamClass.prototype instanceof PromiseTransformStream))
            throw new Error("From can instantiate stream-like classes only");

        // We should handle non-arrays here as well
        return new this(streams.map(x => StreamClass.from(x)));
    }

    /**
     * Returns the current stream length
     * @return {number}
     */
    get length() {
        return this.streams.length;
    }


    /**
     * @callback MultiMapCallback
     * @memberof module:scramjet~
     * @async
     * @param {DataStream} stream
     * @returns {DataStream}
     */

    /**
     * Returns new MultiStream with the streams returned by the transform.
     *
     * Runs a callback for every stream, returns a new MultiStream of mapped
     * streams and creates a new MultiStream consisting of streams returned
     * by the Function.
     *
     * @chainable
     * @param  {MultiMapCallback} aFunc Add callback (normally you need only this)
     * @param  {MultiMapCallback} rFunc Remove callback, called when the stream is removed
     * @return {Promise<MultiStream>}  the mapped instance
     *
     * @test test/methods/multi-stream-map.js
     */
    map(aFunc, rFunc) {
        return Promise.all(
            this.streams.map(
                (s) => {
                    return Promise.resolve(s)
                        .then(aFunc)
                    ;
                }
            )
        ).then(
            (streams) => {
                const out = new (this.constructor)(
                    streams
                );

                this.on(
                    "add",
                    (stream) => Promise.resolve(stream)
                        .then(aFunc)
                        .then(out.add.bind(out))
                );

                if (rFunc)
                    this.on(
                        "remove",
                        (stream) => Promise.resolve(stream)
                            .then(rFunc)
                            .then(out.remove.bind(out))
                    );

                return out;
            }
        );
    }

    /**
     * Calls Array.prototype.find on the streams
     *
     * @param  {any[]} ...args arguments for
     * @return {DataStream}  found DataStream
     */
    find(...args) {
        return this.streams.find(...args);
    }

    each(aFunc, rFunc) {
        return Promise.all(
            this.streams.map(
                (s) => {
                    return Promise.resolve(s)
                        .then(aFunc)
                    ;
                }
            )
        ).then(
            () => {
                this.on(
                    "add",
                    (stream) => Promise.resolve(stream).then(aFunc)
                );

                if (rFunc)
                    this.on(
                        "remove",
                        (stream) => Promise.resolve(stream).then(rFunc)
                    );

                return this;
            }
        );
    }

    /**
     * Filters the stream list and returns a new MultiStream with only the
     * streams for which the Function returned true
     *
     * @chainable
     * @param  {Function} func Filter ran in Promise::then (so you can
     *                                  return a promise or a boolean)
     * @return {MultiStream}  the filtered instance
     *
     * @test test/methods/multi-stream-filter.js
     */
    filter(func) {
        return Promise.all(
            this.streams.map(
                (s) => Promise.resolve(s)
                    .then(func)
                    .then((o) => o ? s : null)
            )
        ).then(
            (streams) => {
                const out = new (this.constructor)(
                    streams.filter((s) => s)
                );
                this.on(
                    "add",
                    (stream) => Promise.resolve(stream)
                        .then(func)
                        .then(out.add.bind(out))
                );
                this.on(
                    "remove", out.remove.bind(out)
                );
                return out;
            }
        );
    }

    /**
     * Muxes the streams into a single one
     *
     * @todo For now using comparator will not affect the mergesort.
     * @todo Sorting requires all the streams to be constantly flowing, any
     *       single one drain results in draining the muxed too even if there
     *       were possible data on other streams.
     *
     * @param  {Function} [comparator] Should return -1 0 or 1 depending on the
     *                                  desired order. If passed the chunks will
     *                                  be added in a sorted order.
     * @param {function(new:DataStream)} [ClassType=DataStream] the class to be outputted
     * @return {DataStream}  The resulting DataStream
     *
     * @test test/methods/multi-stream-mux.js
     */
    mux(comparator = undefined, ClassType = scramjet.DataStream) {

        this[OUT] = new ClassType();

        if (!comparator) {

            const unpipeStream = (stream) => {
                if (stream) stream.unpipe(this[OUT]);
                this[OUT].setMaxListeners(this.streams.length);
            };

            const pipeStream = (stream) => {
                this[OUT].setMaxListeners(this.streams.length);
                stream.pipe(this[OUT], {end: false});
            };

            this.on("add", pipeStream);
            this.on("remove", unpipeStream);

            this.streams.forEach(pipeStream);

            this.on("empty", () => this[OUT].end());

            return this[OUT];
        }

        return mergesortStream(this, comparator, 0, ClassType);
    }

    /**
     * Adds a stream to the MultiStream
     *
     * If the stream was muxed, filtered or mapped, this stream will undergo the
     * same transforms and conditions as if it was added in constructor.
     *
     * @meta.noReadme
     * @param {Readable} stream [description]
     *
     * @test test/methods/multi-stream-add.js
     */
    add(stream) {

        if (stream) {
            this.streams.push(stream);
            this.setMaxListeners(this.streams.length + EventEmitter.defaultMaxListeners);
            this.emit("add", stream, this.streams.length - 1);
            stream.on("end", () => this.remove(stream));
        }

        return this;
    }

    /**
     * Removes a stream from the MultiStream
     *
     * If the stream was muxed, filtered or mapped, it will be removed from same
     * streams.
     *
     * @meta.noReadme
     * @param {Readable} stream [description]
     *
     * @test test/methods/multi-stream-remove.js
     */
    remove(stream) {

        const strIndex = this.streams.indexOf(stream);
        if (strIndex >= 0) {
            this.setMaxListeners(this.streams.length + EventEmitter.defaultMaxListeners);
            this.streams.splice(strIndex, 1);
            this.emit("remove", stream, strIndex);
        }

        this._checkEmpty();

        return this;
    }

    _checkEmpty(ended) {
        if (ended) this.source = null;
        if (!this.source && !this.streams.length) this.emit("empty");
    }

}

module.exports = MultiStream;

},{"./":5,"./util/merge-sort-stream":9,"events":28}],7:[function(require,module,exports){
(function (Buffer){(function (){
/** @ignore */
const scramjet = require(".");

/** @ignore */
const SPLIT_LINE = /\r\n?|\n/g;

/**
 * A stream of string objects for further transformation on top of DataStream.
 *
 * Example:
 *
 * ```js
 * StringStream.from(async () => (await fetch('https://example.com/data/article.txt')).text())
 *     .lines()
 *     .append("\r\n")
 *     .pipe(fs.createWriteStream('./path/to/file.txt'))
 * ```
 * @extends DataStream
 * @memberof module:scramjet.
 * @scope public
 */
class StringStream extends scramjet.DataStream {

    /**
     * Constructs the stream with the given encoding
     *
     * @param  {string} [encoding="utf-8"] the encoding to use
     * @param  {DataStreamOptions} [options={}] the encoding to use
     * @return {StringStream}  the created data stream
     *
     * @test test/methods/string-stream-constructor.js
     */
    constructor(encoding, options) {
        super(typeof encoding === "string" ? options : encoding);

        this.buffer = "";
        this.encoding = typeof encoding === "string" ? encoding : "utf8";
    }

    /**
     * @callback ShiftStringCallback
     * @memberof module:scramjet~
     * @param {string|any} shifted Shifted chars
     */

    /**
     * Shifts given length of chars from the original stream
     *
     * Works the same way as {@see DataStream.shift}, but in this case extracts
     * the given number of characters.
     *
     * @chainable
     * @alias module:scramjet.StringStream#pop
     * @alias module:scramjet.StringStream#shift
     * @param {number} bytes The number of characters to shift.
     * @param {ShiftStringCallback} func Function that receives a string of shifted chars.
     *
     * @test test/methods/string-stream-shift.js
     */
    shift(bytes, func) {
        const ret = "";
        const str = this.tap()._selfInstance({
            referrer: this
        });
        let offs = 0;

        const chunkHandler = (chunk) => {
            const length = Math.min(bytes - offs, chunk.length);
            chunk.substr(0, length);
            offs += length;
            if (length >= bytes) {
                unHook()
                    .then(
                        () => {
                            str.write(chunk.slice(length));
                            this.pipe(str);
                        }
                    );
            }
        };

        const endHandler = (...args) => {
            if (ret.length < bytes) {
                unHook();
            }
            str.end(...args);
        };

        const errorHandler = str.emit.bind(str, "error");

        const unHook = () => {
            this.removeListener("data", chunkHandler);
            this.removeListener("end", endHandler);
            this.removeListener("error", errorHandler);
            return Promise.resolve(ret)
                .then(func);
        };


        this.on("data", chunkHandler);
        this.on("end", endHandler);
        this.on("error", errorHandler);

        return str;
    }

    /**
     * A handy split by line regex to quickly get a line-by-line stream
     */
    static get SPLIT_LINE() {
        return SPLIT_LINE;
    }

    /**
     * Splits the string stream by the specified RegExp or string
     *
     * @chainable
     * @param  {RegExp|string} splitter What to split by
     *
     * @test test/methods/string-stream-split.js
     */
    split(splitter) {
        if (splitter instanceof RegExp || typeof splitter === "string") {
            return this.tap().pipe(this._selfInstance({
                transform(chunk, encoding, callback) {
                    this.buffer += chunk.toString(this.encoding);
                    const newChunks = this.buffer.split(splitter);
                    while(newChunks.length > 1) {
                        this.push(newChunks.shift());
                    }
                    this.buffer = newChunks[0];
                    callback();
                },
                flush(callback) {
                    this.push(this.buffer);
                    this.buffer = "";
                    callback();
                },
                referrer: this
            }));
        } else if (splitter instanceof Function) {
            return this.tap().pipe(new (this.constructor)({
                transform: splitter,
                referrer: this
            }));
        }
    }

    /**
     * Finds matches in the string stream and streams the match results
     *
     * @chainable
     * @param  {RegExp} matcher A function that will be called for every
     *                             stream chunk.
     *
     * @test test/methods/string-stream-match.js
     */
    match(matcher) {
        if (matcher instanceof RegExp) {
            const replaceRegex = (matcher.source.search(/\((?!\?)/g) > -1) ?
                new RegExp("[\\s\\S]*?" + matcher.source, (matcher.ignoreCase ? "i" : "") + (matcher.multiline ? "m" : "") + (matcher.unicode ? "u" : "") + "g") :
                new RegExp("[\\s\\S]*?(" + matcher.source + ")", (matcher.ignoreCase ? "i" : "") + (matcher.multiline ? "m" : "") + (matcher.unicode ? "u" : "") + "g")
                ;

            return this.tap().pipe(this._selfInstance({
                transform(chunk, encoding, callback) {
                    this.buffer = (this.buffer || "") + chunk.toString("utf-8");
                    this.buffer = this.buffer.replace(replaceRegex, (...match) => {
                        this.push(match.slice(1, match.length - 2).join(""));
                        return "";
                    });

                    callback();
                },
                referrer: this
            }));

        }
        throw new Error("Matcher must be a RegExp!");
    }

    /**
     * Transforms the StringStream to BufferStream
     *
     * Creates a buffer stream from the given string stream. Still it returns a
     * DataStream derivative and isn't the typical node.js stream so you can do
     * all your transforms when you like.
     *
     * @meta.noReadme
     * @chainable
     * @return {BufferStream}  The converted stream.
     *
     * @test test/methods/string-stream-tobufferstream.js
     */
    toBufferStream() {
        return this.tap().map(
            (str) => Buffer.from(str, this.encoding),
            new scramjet.BufferStream({
                referrer: this
            })
        );
    }

    toStringStream(encoding) {
        if (encoding)
            return this.tap().pipe(this._selfInstance(encoding, {
                referrer: this
            }));
        else
            return this;
    }

    /**
     * @callback ParseCallback
     * @memberof module:scramjet~
     * @param {string} chunk the transformed chunk
     * @return {Promise<any>|any}  the promise should be resolved with the parsed object
     */

    /**
      * Parses every string to object
      *
      * The method MUST parse EVERY string into a single object, so the string
      * stream here should already be split.
      *
      * @chainable
      * @param  {ParseCallback} parser The transform function
      * @param {function(new:DataStream)} [StreamClass] the output stream class to return
      * @return {DataStream}  The parsed objects stream.
      *
      * @test test/methods/string-stream-parse.js
      */
    parse(parser, StreamClass = scramjet.DataStream) {
        return this.tap().map(parser, StreamClass);
    }

    /**
     * Alias for {@link StringStream#parse}
     * @memberof module:scramjet.StringStream#
     * @method toDataStream
     */

    /**
      * @meta.noReadme
      * @ignore
      */
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString(this.encoding));
        return callback();
    }

    /**
     * Creates a StringStream and writes a specific string.
     *
     * @param  {string} stream   the string to push the your stream
     * @param  {string} encoding optional encoding
     * @return {StringStream}          new StringStream.
     */
    static fromString(stream, encoding) {
        const st =  new this(encoding || "utf-8");
        st.end(stream);
        return st;
    }

    /**
     * Creates a pipeline of streams and returns a scramjet stream.
     *
     * @see DataStream.pipeline
     * @static
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|string|Readable} readable the initial readable argument that is streamable by scramjet.from
     * @param {AsyncFunction|Function|Transform} transforms Transform functions (as in {@link DataStream..use}) or Transform streams (any number of these as consecutive arguments)
     *
     * @returns {StringStream} a new StringStream instance of the resulting pipeline
     */
    static pipeline(...args) {
        return scramjet.DataStream.pipeline.call(this, ...args);
    }

    /**
     * Create StringStream from anything.
     *
     * @see DataStream.from
     * @see module:scramjet.from
     *
     * @param {string|Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|Readable} source argument to be turned into new stream
     * @param {DataStreamOptions|Writable} [options={}]
     * @return {StringStream}          new StringStream.
     */
    static from(source, options, ...args) {
        try {
            return scramjet.DataStream.from.call(this, source, options, ...args);
        } catch(e) {
            if (typeof source === "string") {
                return this.fromString(source);
            }
            throw e;
        }
    }

}

/**
 * @ignore
 */
StringStream.prototype.pop = StringStream.prototype.shift;

module.exports = StringStream;

}).call(this)}).call(this,require("buffer").Buffer)
},{".":5,"buffer":27}],8:[function(require,module,exports){
// eslint-disable-next-line node/no-unsupported-features/es-syntax
module.exports = Object.getPrototypeOf(async function*(){}).constructor;

},{}],9:[function(require,module,exports){
const DataStream = require("../../").DataStream;
const DefaultBufferLength = 16;

const wrapComparator = (comparator) => (a, b) => comparator(a[0], b[0]);
const DefaultComparator = (a, b) => {
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
};

module.exports = (multi, passedComparator, bufferLength, Clazz) => {

    bufferLength = bufferLength || DefaultBufferLength;

    Clazz = Clazz || DataStream;

    const comparator = wrapComparator(passedComparator || DefaultComparator);

    const out = new Clazz();
    const readIndex = new Map();
    const endIndex = new WeakMap();

    const rest = [];

    const onceTouchedStream = (stream) => {
        return Promise.race([
            new Promise((res) => stream.on("readable", res)),
            endIndex.get(stream)
        ]);
    };

    const getMoreItemsForEntry = (stream, arr) => {
        while (arr.length < bufferLength) {
            let haveMore = stream.read();

            if (haveMore !== null)
                arr.push(haveMore);
            else
                break;
        }

        if (arr.length || !readIndex.has(stream))
            return Promise.resolve(arr);

        return onceTouchedStream(stream)
            .then(
                () => getMoreItemsForEntry(stream, arr),
                () => Promise.resolve(arr)
            );
    };

    const getMoreItems = () => {
        const ret = [];
        for (let entry of readIndex.entries()) {
            ret.push(getMoreItemsForEntry(...entry));
        }

        if (!ret.length)
            return Promise.resolve([]);

        return Promise.all(ret);
    };

    // TODO: rewrite as generator?
    const getSorted = (inArys) => {
        const arr = [];
        const arys = inArys.slice();

        let min_length = 0;
        let j = 0;

        if (rest.length) {
            arys.push(rest);
        }

        if (!arys.length)
            return [];

        while (true) {  // eslint-disable-line
            let cnt = 0;

            for (let ary of arys)
                cnt += ary.length > j;

            if (cnt === arys.length) {
                for (let i = 0; i < arys.length; i++) {
                    arr.push([arys[i][j], i, j, arys[i].length - j - 1]);
                }
                min_length = ++j;
            } else {
                break;
            }
        }

        arr.sort(comparator);

        const ret = [];
        while (min_length > 0 && arr.length > 0) {

            const item = arr.shift();
            arys[item[1]].shift(item[2]);
            ret.push(item[0]);
            min_length = item[3];
        }

        return ret;
    };

    const writeSorted = (sorted) => {
        let ret = true;

        for (var i = 0; i < sorted.length; i++) {
            ret = out.write(sorted[i]);
        }

        return ret || new Promise((res) => out.once("drain", () => res(sorted.end)));
    };

    let removing = null;
    let pushing = null;
    const pushMoreItems = () => {

        if (pushing)
            return pushing;

        pushing =
            getMoreItems()
                .then(
                    (arys) => getSorted(arys)
                )
                .then(
                    writeSorted
                )
                .catch(
                    (e) => e instanceof Error ? out.emit("error", e) : (pushing = null, Promise.resolve())
                )
                .then(
                    () => {
                        pushing = null;

                        if (readIndex.size) {
                            pushMoreItems();
                        } else if (rest.length) {
                            return writeSorted(rest.sort(passedComparator));
                        }
                    }
                );

        return pushing;
    };

    const onEmpty = () => {
        return Promise.resolve(pushing)
            .then(() => out.end());
    };

    multi.each(
        (addedStream) => {
            const endPromise = new Promise(
                (res, rej) => addedStream.on("end", () => {
                    multi.remove(addedStream);
                    rej();
                })
            );

            endPromise.catch(() => 0);

            readIndex.set(addedStream, []);
            endIndex.set(
                addedStream,
                endPromise
            );
        },
        (removedStream) => {
            removing = Promise.all([
                getMoreItemsForEntry(removedStream, readIndex.get(removedStream))
                    .then(
                        (items) => {
                            readIndex.delete(removedStream);
                            rest.push(...items);
                        }
                    ),
                removing
            ]).then(
                () => readIndex.size ? pushMoreItems() : onEmpty()
            );
        }
    ).then(
        pushMoreItems
    ).catch(
        e => out.emit("error", e)
    );

    return out;
};

},{"../../":5}],10:[function(require,module,exports){
const { StreamError } = require("./stream-errors");

/**
 * Generate read methods on the stream class.
 *
 * @internal
 * @param  {DataStreamOptions} newOptions Sanitized options passed to scramjet stream
 * @return {Boolean} returns true if creation of new stream is not necessary (promise can be pushed to queue)
 */
module.exports = () => function mkRead(newOptions) {
    this.setOptions(
        {
            // transforms: [],
            promiseRead: newOptions.promiseRead
        }
    );

    let chunks = [];
    let done = false;
    // TODO: implement the actual parallel logic - items can be promises and should be flushed when resolved.
    const pushSome = () => Array.prototype.findIndex.call(chunks, chunk => {
        return !this.push(chunk);
    }) + 1;

    // let last = Promise.resolve();
    // let processing = [];

    this.on("pipe", () => {
        throw new Error("Cannot pipe to a Readable stream");
    });

    this._read = async (size) => {
        try {
            let add = 0;
            if (!done) {
                const nw = await this._options.promiseRead(size);
                chunks.push(...nw);
                add = nw.length;
            }
            const pushed = pushSome();
            chunks = chunks.slice(pushed || Infinity);

            // Yes, it could be reassigned, but only with true so we don't need to care
            // eslint-disable-next-line require-atomic-updates
            done = done || !add;

            if (done && !chunks.length) {
                await new Promise((res, rej) => this._flush((err) => err ? rej(err) : res()));
                this.push(null);
            }

            // console.log("read", pushed, chunks, add, size);
            // TODO: check for existence of transforms and push to transform directly.
            // TODO: but in both cases transform methods must be there... which aren't there now.
            // TODO: at least the subset that makes the transform - yes, otherwise all that transform stuff
            // TODO: is useless and can be bypassed...
        } catch(e) {
            await this.raise(new StreamError(e, this));
            return this._read(size);
        }
    };

};

},{"./stream-errors":15}],11:[function(require,module,exports){
(function (process){(function (){
const ignore = () => 0;
const { StreamError } = require("./stream-errors");


/**
 * Generate transform methods on the stream class.
 *
 * @internal
 * @memberof PromiseTransformStream
 * @param  {DataStreamOptions} newOptions Sanitized options passed to scramjet stream
 * @return {Boolean} returns true if creation of new stream is not necessary (promise can be pushed to queue)
 */
module.exports = ({filter}) => function mkTransform(newOptions) {
    this.setOptions(
        {
            transforms: [],
            beforeTransform: newOptions.beforeTransform,
            afterTransform: newOptions.afterTransform,
            promiseFlush: newOptions.promiseFlush
        }
    );

    this.cork();
    if (newOptions.referrer instanceof this.constructor && !newOptions.referrer._tapped && !newOptions.referrer._options.promiseFlush) {
        return true;
    }

    process.nextTick(this.uncork.bind(this));

    this.pushTransform(newOptions);

    if (this._scramjet_options.transforms.length) {

        const processing = [];
        let last = Promise.resolve();

        this._transform = (chunk, encoding, callback) => {
            if (!this._scramjet_options.transforms.length) {
                return last.then(
                    () => callback(null, chunk)
                );
            }

            const prev = last;
            const ref = last = Promise
                .all([
                    this._scramjet_options.transforms.reduce(
                        (prev, transform) => prev.then(transform),
                        Promise.resolve(chunk)
                    ).catch(
                        (err) => err === filter ? filter : Promise.reject(err)
                    ),
                    prev
                ])
                .catch(
                    async (e) => {
                        if (e instanceof Error) {
                            return Promise.all([
                                this.raise(new StreamError(e, this, "EXTERNAL", chunk), chunk),
                                prev
                            ]);
                        } else {
                            throw new Error("New stream error raised without cause!");
                        }
                    }
                )
                .then(
                    (args) => {
                        if (args && args[0] !== filter && typeof args[0] !== "undefined") {
                            try {
                                this.push(args[0]);
                            } catch(e) {
                                return this.raise(new StreamError(e, this, "INTERNAL", chunk), chunk);
                            }
                        }
                    }
                );

            processing.push(ref);   // append item to queue
            if (processing.length >= this._options.maxParallel) {
                processing[processing.length - this._options.maxParallel]
                    .then(() => callback())
                    .catch(ignore);
            } else {
                callback();
            }

            ref.then(
                () => {
                    const next = processing.shift();
                    return ref !== next && this.raise(new StreamError(new Error(`Promise resolved out of sequence in ${this.name}!`), this, "TRANSFORM_OUT_OF_SEQ", chunk), chunk);
                }
            );

        };

        this._flush = (callback) => {
            if (this._scramjet_options.runFlush) {
                last
                    .then(this._scramjet_options.runFlush)
                    .then(
                        (data) => {
                            if (Array.isArray(data))
                                data.forEach(item => this.push(item));
                            else if (data)
                                this.push(data);
                        },
                        e => this.raise(e)
                    )
                    .then(() => callback());
            } else {
                last.then(() => callback());
            }
        };
    }
};

}).call(this)}).call(this,require('_process'))
},{"./stream-errors":15,"_process":33}],12:[function(require,module,exports){
const { StreamError } = require("./stream-errors");

/**
 * Generate write methods on the stream class.
 *
 * @internal
 * @param  {DataStreamOptions} newOptions Sanitized options passed to scramjet stream
 * @return {Boolean} returns true if creation of new stream is not necessary (promise can be pushed to queue)
 */
module.exports = () => function mkWrite(newOptions) {
    this.tap().setOptions(
        {
            // transforms: [],
            promiseWrite: newOptions.promiseWrite
        }
    );

    this.pipe = () => {
        throw new Error("Method not allowed on a Writable only stream");
    };

    this._write = (chunk, encoding, callback) => {
        Promise.resolve(chunk)
            .then((chunk) => this._options.promiseWrite(chunk, encoding))
            .then(() => callback())
            .catch(
                (e) => this.raise(new StreamError(e, this, "EXTERNAL", chunk), chunk)
            );
    };

};

},{"./stream-errors":15}],13:[function(require,module,exports){
const { EventEmitter } = require("events");
const _declarations = Symbol("declarations");
const _values = Symbol("values");
const _chain = Symbol("chain");
const _owner = Symbol("owner");

const isClass = cls => cls && typeof cls === "function" && cls.prototype.constructor === cls && cls !== Object;
const _superClass = (cls) => {
    return isClass(cls) && cls.prototype.__proto__ && cls.prototype.__proto__.constructor;
};

const inheritedProxy = (parent) => {
    return new Proxy({}, {
        has(target, prop) {
            return prop in target || parent && prop in parent;
        },
        get(target, prop) {
            if (prop in target)
                return target[prop];

            return parent && parent[prop];
        },
        set(target, prop, value) {
            if (prop in target)
                throw new Error(`Option "${prop}" already defined`);

            target[prop] = value;
            return true;
        }
    });
};

const findProxyForInstance = (ref, instance) => {
    return findProxyForClass(ref.__proto__.constructor[_declarations], instance.__proto__.constructor);
};

const findProxyForClass = (map, cls) => {
    if (!isClass(cls)) {
        throw new Error("Cannot get options declaration for a non-constructor");
    }

    if (map.has(cls))
        return map.get(cls);

    const superClass = _superClass(cls);
    const parent = isClass(superClass) ? findProxyForClass(map, superClass) : null;

    const declaration = inheritedProxy(parent);
    map.set(cls, declaration);

    return declaration;
};

const DefaultDefinition = {};

/**
 * Scramjet options for streams
 */
module.exports = class ScramjetOptions extends EventEmitter {
    /**
     *
     * @param {PromiseTransformStream} owner
     * @param {ScramjetOptions} chain
     */
    constructor(owner, chain, initial) {
        super();
        this[_owner] = owner;
        this[_chain] = chain;
        this[_declarations] = findProxyForInstance(this, owner);
        this[_values] = {};
        Object.assign(this[_values], initial);
    }

    get proxy() {
        const value = new Proxy(this, {
            has(target, key) {
                if (!(key in target[_declarations]))
                    return false;
                return key in target[_values] || target[_declarations][key].value;
            },
            ownKeys(target) {
                return Object.keys(target[_values]);
            },
            getOwnPropertyDescriptor(target, key) {
                if (key in target[_values]) {
                    return {
                        value: this.get(target, key),
                        enumerable: true,
                        configurable: true,
                        writable: true
                    };
                }
            },
            get(target, key) {
                if (key in target[_declarations]) {
                    if (key in target[_values])
                        return target[_values][key];

                    if (target[_chain] && target[_declarations][key].chained && Object.prototype.hasOwnProperty.call(target[_chain], key))
                        return target[_chain][key];

                    return target[_declarations][key].value;
                }

                throw new Error(`Attempting to access undeclared option: ${key}`);
            },
            set(target, key, value) {
                if (key in target[_declarations]) {
                    target[_values][key] = value;
                    return;
                }

                throw new Error(`Attempting to set undeclared option: ${key}`);
            }
        });

        Object.defineProperty(this, "proxy", { value });
        return value;
    }

    /**
     * Declares a usable option.
     *
     * @param {Function<PromiseTransformStream>} cls
     * @param {string} name
     * @param {object} definition
     */
    static declare(cls, name, { chained = false, value } = DefaultDefinition) {
        this[_declarations] = this[_declarations] || new Map();
        const optionsList = findProxyForClass(this[_declarations], cls);

        optionsList[name] = { chained, value };
    }
};

},{"events":28}],14:[function(require,module,exports){
const {Transform, Readable} = require("stream");
const {EventEmitter} = require("events");
const DefaultHighWaterMark = require("os").cpus().length * 2;

const filter = Symbol("FILTER");
const plgctor = Symbol("plgctor");
const storector = Symbol("storector");

let seq = 0;

const shared = { filter, DefaultHighWaterMark, plgctor, storector };
const mkTransform = require("./mk-transform")(shared);
const mkRead = require("./mk-read")(shared);
const mkWrite = require("./mk-write")(shared);
const {StreamError} = require("./stream-errors");

const rename = (ob, fr, to) => {
    if (ob[fr]) {
        ob[to] = ob[fr];
        delete ob[fr];
    }
};

const checkOptions = (options) => {
    rename(options, "parallelRead", "promiseRead");
    rename(options, "parallelWrite", "promiseWrite");
    rename(options, "parallelTransform", "promiseTransform");
    rename(options, "flushPromise", "promiseFlush");

    if (["promiseRead", "promiseWrite", "promiseTransform"].reduce((acc, key) => acc += (options[key] ? 1 : 0), 0) > 1)
        throw new Error("Scramjet stream can be either Read, Write or Transform");
};

/**
 * This class is an underlying class for all Scramjet streams.
 *
 * It allows creation of simple transform streams that use async functions for transforms, reading or writing.
 *
 * @internal
 * @extends stream.PassThrough
 */
class PromiseTransformStream extends Transform {

    constructor(options) {
        options = options || {};
        const newOptions = Object.assign({
            objectMode: true,
            promiseRead: null,
            promiseWrite: null,
            promiseTransform: null,
            promiseFlush: null,
            beforeTransform: null,
            afterTransform: null
        }, options);

        checkOptions(newOptions);

        super(newOptions);

        this._tapped = false;

        this._error_handlers = [];
        this._scramjet_options = {
            referrer: options.referrer,
            constructed: (new Error().stack)
        };

        this.seq = seq++;

        this.setMaxListeners(DefaultHighWaterMark);
        this.setOptions(newOptions);

        if (newOptions.promiseRead) {
            this.type = "Read";
            mkRead.call(this, newOptions);
            this.tap();
        } else if (newOptions.promiseWrite) {
            this.type = "Write";
            mkWrite.call(this, newOptions);
        } else if (newOptions.transform || !newOptions.promiseTransform) {
            this.type = "Transform-";
            this.tap();
        } else {
            this.type = "Transform";
            if (newOptions.promiseTransform && mkTransform.call(this, newOptions)) { // returns true if transform can be pushed to referring stream
                return options.referrer.pushTransform(options);
            }
        }

        const pluginConstructors = this.constructor[plgctor].get();
        if (pluginConstructors.length) {

            let ret;
            pluginConstructors.find(
                (Ctor) => ret = Ctor.call(this, options)
            );

            if (typeof ret !== "undefined") {
                return ret;
            }
        }
    }

    get name() {
        return `${this.constructor.name}(${this._options.name || this.seq})`;
    }

    set name(name) {
        this.setOptions({name});
    }

    get constructed() {
        return this._scramjet_options.constructed;
    }

    get _options() {
        if (this._scramjet_options.referrer && this._scramjet_options.referrer !== this) {
            return Object.assign({maxParallel: DefaultHighWaterMark}, this._scramjet_options.referrer._options, this._scramjet_options);
        }
        return Object.assign({maxParallel: DefaultHighWaterMark}, this._scramjet_options);
    }

    setOptions(...options) {
        Object.assign(this._scramjet_options, ...options);

        if (this._scramjet_options.maxParallel)
            this.setMaxListeners(this._scramjet_options.maxParallel);

        if (this._flushed) {
            options.forEach(
                ({promiseFlush}) => Promise
                    .resolve()
                    .then(promiseFlush)
                    .catch(e => this.raise(e))
            );
        }

        return this;
    }

    setMaxListeners(value) {
        return super.setMaxListeners.call(this, value + EventEmitter.defaultMaxListeners);
    }

    static get [plgctor]() {
        const proto = Object.getPrototypeOf(this);
        return {
            ctors: this[storector] = Object.prototype.hasOwnProperty.call(this, storector) ? this[storector] : [],
            get: () => proto[plgctor] ? proto[plgctor].get().concat(this[storector]) : this[storector]
        };
    }

    async whenRead(count) {
        return Promise.race([
            new Promise((res) => {

                const read = () => {
                    const ret = this.read(count);
                    if (ret !== null) {
                        return res(ret);
                    } else {
                        this.once("readable", read);
                    }
                };
                read();
            }),
            this.whenError(),
            this.whenEnd()
        ]);
    }

    async whenDrained() {
        return this._scramjet_drainPromise || (this._scramjet_drainPromise = new Promise(
            (res, rej) => this
                .once("drain", () => {
                    this._scramjet_drainPromise = null;
                    res();
                })
                .whenError().then(rej)
        ));
    }

    async whenWrote(...data) {
        let ret;
        for (var item of data)
            ret = this.write(item);

        if (ret) {
            return;
        } else {
            return this.whenDrained();
        }
    }

    async whenError() {
        return this._scramjet_errPromise || (this._scramjet_errPromise = new Promise((res) => {
            this.once("error", (e) => {
                this._scramjet_errPromise = null;
                res(e);
            });
        }));
    }

    async whenEnd() {
        return this._scramjet_endPromise || (this._scramjet_endPromise = new Promise((res, rej) => {
            this.whenError().then(rej);
            this.on("end", () => res());
        }));
    }

    async whenFinished() {
        return this._scramjet_finishPromise || (this._scramjet_finishPromise = new Promise((res, rej) => {
            this.whenError().then(rej);
            this.on("finish", () => res());
        }));
    }

    catch(callback) {
        this._error_handlers.push(callback);
        return this;
    }

    async raise(err, ...args) {
        return this._error_handlers
            .reduce(
                (promise, handler) => promise.catch(
                    (lastError) => handler(
                        lastError instanceof StreamError
                            ? lastError
                            : new StreamError(lastError, this, err.code, err.chunk),
                        ...args
                    )
                ),
                Promise.reject(err)
            )
            .catch(
                (err) => this.emit("error", err, ...args)
            );
    }

    pipe(to, options) {
        if (to === this) {
            return this;
        }

        if (this !== to && to instanceof PromiseTransformStream) {
            to.setOptions({referrer: this});
            this.on("error", err => to.raise(err));
            this.tap().catch(async (err, ...args) => {
                await to.raise(err, ...args);
                return filter;
            });
        } else if (to instanceof Readable) {
            this.on("error", (...err) => to.emit("error", ...err));
        }

        return super.pipe(to, options || {end: true});
    }

    graph(func) {
        let referrer = this;
        const ret = [];
        while(referrer) {
            ret.push(referrer);
            referrer = referrer._options.referrer;
        }
        func(ret);
        return this;
    }

    tap() {
        this._tapped = true;
        return this;
    }

    dropTransform(transform) {
        if (!this._scramjet_options.transforms) {
            if (!this._transform.currentTransform)
                return this;

            this._transform = this._transform.currentTransform;
            return this;
        }
        let i = 0;
        while (i++ < 1000) {
            const x = this._scramjet_options.transforms.findIndex(t => t.ref === transform);
            if (x > -1) {
                this._scramjet_options.transforms.splice(x, 1);
            } else {
                return this;
            }
        }
        throw new Error("Maximum remove attempt count reached!");
    }

    pushTransform(options) {

        if (typeof options.promiseTransform === "function") {
            if (!this._scramjet_options.transforms) {
                this._pushedTransform = options.promiseTransform;
                return this;
            }

            const markTransform = (bound) => {
                bound.ref = options.promiseTransform;
                return bound;
            };

            const before = typeof options.beforeTransform === "function";
            const after = typeof options.afterTransform === "function";

            if (before)
                this._scramjet_options.transforms.push(markTransform(
                    options.beforeTransform.bind(this)
                ));

            if (after)
                this._scramjet_options.transforms.push(markTransform(
                    async (chunk) => options.afterTransform.call(
                        this,
                        chunk,
                        await options.promiseTransform.call(this, chunk)
                    )
                ));
            else
                this._scramjet_options.transforms.push(markTransform(
                    options.promiseTransform.bind(this)
                ));

        }

        if (typeof options.promiseFlush === "function") {
            if (this._scramjet_options.runFlush) {
                throw new Error("Promised Flush cannot be overwritten!");
            } else {
                this._scramjet_options.runFlush = options.promiseFlush;
            }
        }

        return this;
    }

    _selfInstance(...args) {
        return new this.constructor(...args);
    }

    async _transform(chunk, encoding, callback) {
        if (!this._delayed_first) {
            await new Promise(res => res());
            this._delayed_first = 1;
        }

        try {
            if (this._pushedTransform)
                chunk = await this._pushedTransform(chunk);
            callback(null, chunk);
        } catch(err) {
            callback(err);
        }
    }

    _flush(callback) {
        const last = Promise.resolve();

        if (this._scramjet_options.runFlush) {
            last
                .then(this._scramjet_options.runFlush)
                .then(
                    (data) => {
                        if (Array.isArray(data))
                            data.forEach(item => this.push(item));
                        else if (data)
                            this.push(data);

                        callback();
                    },
                    e => this.raise(e)
                );
        } else {
            last.then(() => callback());
        }
    }

    static get filter() { return filter; }
}

module.exports = {
    plgctor: plgctor,
    PromiseTransformStream
};

},{"./mk-read":10,"./mk-transform":11,"./mk-write":12,"./stream-errors":15,"events":28,"os":31,"stream":35}],15:[function(require,module,exports){
const os = require("os");
const combineStack = (stack, ...errors) => {
    return errors.reduce(
        (stack, trace) => {
            if (!trace) return stack;
            if (trace.indexOf("\n") >= 0)
                return stack + os.EOL + trace.substr(trace.indexOf("\n") + 1);

            else
                return stack + os.EOL + trace;
        },
        stack
    );
};

class StreamError extends Error {

    constructor(cause, stream, code = "GENERAL", chunk = null) {
        code = cause.code || code;
        stream = cause.stream || stream;
        chunk = cause.chunk || chunk;

        super(cause.message);

        if (cause instanceof StreamError)
            return cause;

        this.chunk = chunk;
        this.stream = stream;
        this.code = "ERR_SCRAMJET_" + code;
        this.cause = cause;

        const stack = this.stack;
        Object.defineProperty(this, "stack", {
            get: function () {
                return combineStack(
                    stack,
                    "  caused by:",
                    cause.stack,
                    `  --- raised in ${stream.name} constructed ---`,
                    stream.constructed
                );
            }
        });

        /** Needed to fix babel errors. */
        this.constructor = StreamError;
        this.__proto__ = StreamError.prototype;
    }

}

/**
 * Stream errors class
 *
 * @module scramjet/errors
 * @prop {Class<StreamError>} StreamError
 * @prop {Function} combineStack
 */
module.exports = {StreamError, combineStack};

},{"os":31}],16:[function(require,module,exports){
(function (__dirname){(function (){
const {dirname, resolve} = require("path");

/** @ignore */
const getCalleeDirname = function(depth) {
    const p = Error.prepareStackTrace;
    Error.prepareStackTrace = (dummy, stack) => stack;
    const e = new Error();
    Error.captureStackTrace(e, arguments.callee);
    const stack = e.stack;
    Error.prepareStackTrace = p;
    return dirname(stack[depth].getFileName());
};

const resolveCalleeRelative = function(depth, ...relatives) {
    return resolve(getCalleeDirname(depth + 1), ...relatives);
};

/** @ignore */
const resolveCalleeBlackboxed = function() {
    const p = Error.prepareStackTrace;
    Error.prepareStackTrace = (dummy, stack) => stack;
    const e = new Error();
    Error.captureStackTrace(e, arguments.callee);
    const stack = e.stack;
    Error.prepareStackTrace = p;

    let pos = stack.find(entry => entry.getFileName().indexOf(resolve(__dirname, "..")) === -1);

    return resolve(dirname(pos.getFileName()), ...arguments);
};

/**
 * @external AsyncGeneratorFunction
 */
let AsyncGeneratorFunction = function() {};
try {
    AsyncGeneratorFunction = require("./async-generator-constructor");
} catch (e) {} // eslint-disable-line

/**
 * @external GeneratorFunction
 */
const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;

/** @ignore */
const pipeIfTarget = (stream, target) => (target ? stream.pipe(target) : stream);

/** @ignore */
const pipeThen = async (func, target) => Promise
    .resolve()
    .then(func)
    .then(x => x.pipe(target))
    .catch(e => target.raise(e));

/**
 * @external stream.PassThrough
 * @see https://nodejs.org/api/stream.html#stream_class_stream_passthrough
 */

module.exports = {
    AsyncGeneratorFunction,
    GeneratorFunction,
    getCalleeDirname,
    resolveCalleeRelative,
    resolveCalleeBlackboxed,
    pipeIfTarget,
    pipeThen
};

}).call(this)}).call(this,"/node_modules/scramjet-core/lib/util")
},{"./async-generator-constructor":8,"path":32}],17:[function(require,module,exports){
module.exports = {};

},{}],18:[function(require,module,exports){
(function (global){(function (){
const scramjet = require("./");
const { PromiseTransformStream, StringStream, DataStream, MultiStream } = scramjet;
const { EventEmitter } = require("events");
const { ReReadable } = require("rereadable-stream");
const { AsyncGeneratorFunction, GeneratorFunction } = require("scramjet-core/lib/util/utils");

const os = require("os");
const path = require("path");

/** @ignore */
const {getCalleeDirname} = require("scramjet-core/lib/util/utils");

module.exports = {

    constructor() {
        this.TimeSource = Date;
        this.setTimeout = setTimeout;
        this.clearTimeout = clearTimeout;

        this.buffer = null;
    },

    /**
     * Pulls in any readable stream, resolves when the pulled stream ends.
     *
     * You can also pass anything that can be passed to `DataStream.from`.
     *
     * Does not preserve order, does not end this stream.
     *
     * @async
     * @memberof module:scramjet.DataStream#
     * @param {Array|Iterable<any>|AsyncGeneratorFunction|GeneratorFunction|AsyncFunction|Function|string|Readable} pullable
     * @param {any[]} ...args any additional args
     * @returns {Promise<any>} resolved when incoming stream ends, rejects on incoming error
     *
     * @test test/methods/data-stream-pull.js
     */
    async pull(pullable, ...args) {
        return new Promise((res, rej) => {
            const incoming = this.constructor.from(pullable, {}, ...args);

            incoming.pipe(this, { end: false });
            incoming.on("end", res);
            incoming.on("error", rej);
        });
    },

    /**
     * Shift Function
     *
     * @callback ShiftCallback
     * @memberof module:scramjet~
     * @param {Array<object>|any} shifted an array of shifted chunks
     */

    /**
     * Shifts the first n items from the stream and pushes out the remaining ones.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {number} count The number of items to shift.
     * @param {ShiftCallback} func Function that receives an array of shifted items
     *
     * @test test/methods/data-stream-shift.js
     */
    shift(count, func) {
        const ret = [];
        const str = this.tap()._selfInstance({referrer: this});

        const chunkHandler = (chunk) => {
            ret.push(chunk);
            if (ret.length >= count) {
                this.pause();
                unHook().then(
                    () => this.resume().pipe(str)
                );
            }
        };

        const endHandler = (...args) => {
            unHook().then(
                () => str.end(...args)
            );
        };

        const errorHandler = str.emit.bind(str, "error");

        let hooked = true;
        const unHook = () => {
            if (hooked) {
                hooked = false;
                this.removeListener("data", chunkHandler);
                this.removeListener("end", endHandler);
                this.removeListener("error", errorHandler);
            }
            return Promise.resolve(ret)
                .then(func);
        };

        this.on("data", chunkHandler);
        this.on("end", endHandler);
        this.on("error", errorHandler);

        return str;
    },

    /**
     * Allows previewing some of the streams data without removing them from the stream.
     *
     * Important: Peek does not resume the flow.
     *
     * @memberof module:scramjet.DataStream#
     * @param  {number} count The number of items to view before
     * @param  {ShiftCallback} func Function called before other streams
     * @chainable
     */
    peek(count, func) {
        const ref = this._selfInstance({referrer: this});

        this
            .tap()
            .pipe(ref)
            .shift(count, batch => {
                this.unpipe(ref);
                return func(batch);
            });

        return this;
    },

    /**
     * Slices out a part of the stream to the passed Function.
     *
     * Returns a stream consisting of an array of items with `0` to `start`
     * omitted and `length` items after `start` included. Works similarly to
     * Array.prototype.slice.
     *
     * Takes count from the moment it's called. Any previous items will not be
     * taken into account.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {number} [start=0] omit this number of entries.
     * @param {number} [length=Infinity] get this number of entries to the resulting stream
     *
     * @test test/methods/data-stream-slice.js
     */
    slice(start = 0, length = Infinity) {
        let n = 0;

        let stream = this;
        if (start > 0) {
            stream = this.shift(start, () => 0);
        }

        if (length === Infinity) {
            return this;
        }

        return stream.until(() => n++ >= length);
    },

    /**
     * Transforms stream objects by assigning the properties from the returned
     * data along with data from original ones.
     *
     * The original objects are unaltered.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {MapCallback|object} func The function that returns new object properties or just the new properties
     *
     * @test test/methods/data-stream-assign.js
     */
    assign(func) {
        if (typeof func === "function") {
            return this.map(
                (chunk) => Promise.resolve(func(chunk))
                    .then(obj => Object.assign({}, chunk, obj))
            );
        } else {
            return this.map(
                (chunk) => Object.assign({}, chunk, func)
            );
        }
    },

    /**
     * Called only before the stream ends without passing any items
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {Function} callback Function called when stream ends
     *
     * @test test/methods/data-stream-empty.js
     */
    empty(callback) {
        let z = false;
        const promiseTransform = () => {
            z = true;
            this.dropTransform(promiseTransform);
        };

        this.pushTransform({promiseTransform})
            .tap()
            .whenEnd()
            .then(
                () => (z || Promise.resolve().then(callback)),
                () => 0
            );

        return this;
    },


    /**
     * Pushes any data at call time (essentially at the beginning of the stream)
     *
     * This is a synchronous only function.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {any[]} ...item list of items to unshift (you can pass more items)
     */
    unshift(...items) {
        items.forEach(
            item => this.write(item)
        );
        return this.tap();
    },

    /**
     * Pushes any data at end of stream
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {*} item list of items to push at end
     * @meta.noreadme
     *
     * @test test/methods/data-stream-endwith.js
     */
    endWith(...items) {
        // TODO: overhead on unneeded transform, but requires changes in core.
        // TODO: should accept similar args as `from`
        return this.pipe(this._selfInstance({
            referrer: this,
            promiseTransform: (a) => a,
            flushPromise: () => items
        }));
    },

    /**
     * Accumulates data into the object.
     *
     * Works very similarly to reduce, but result of previous operations have
     * no influence over the accumulator in the next one.
     *
     * Method works in parallel.
     *
     * @async
     * @memberof module:scramjet.DataStream#
     * @param  {AccumulateCallback} func The accumulation function
     * @param  {*} into Accumulator object
     * @return {Promise<any>}  resolved with the "into" object on stream end.
     * @meta.noreadme
     *
     * @test test/methods/data-stream-accumulate.js
     */
    async accumulate(func, into) {
        return new Promise((res, rej) => {
            const bound = async (chunk) => (await func(into, chunk), Promise.reject(DataStream.filter));
            bound.to = func;

            this.tap().pipe(new PromiseTransformStream({
                promiseTransform: bound,
                referrer: this
            }))
                .on("end", () => res(into))
                .on("error", rej)
                .resume();
        });
    },

    /**
     * @callback AccumulateCallback
     * @memberof module:scramjet~
     * @param {*} accumulator Accumulator passed to accumulate function
     * @param {*} chunk the stream chunk
     * @return {Promise<any>|*} resolved when all operations are completed
     */

    /**
     * Consumes the stream by running each Function
     *
     * @deprecated use {@link DataStream#each} instead
     *
     * @async
     * @memberof module:scramjet.DataStream#
     * @param {ConsumeCallback|AsyncGeneratorFunction|GeneratorFunction} func the consument
     * @param {any[]} ...args additional args will be passed to generators
     * @meta.noreadme
     */
    async consume(func, ...args) {
        let runFunc = func;
        if (func instanceof GeneratorFunction || func instanceof AsyncGeneratorFunction) {
            const gen = await func(...args);
            await gen.next();
            runFunc = async item => {
                await gen.next(item);
            };
        }

        return this.tap()
            .do(runFunc)
            .resume()
            .whenEnd();
    },

    /**
     * @callback ConsumeCallback
     * @memberof module:scramjet~
     * @param {*} chunk the stream chunk
     * @return {Promise<any>|*} resolved when all operations are completed
     */

    /**
     * Reduces the stream into the given object, returning it immediately.
     *
     * The main difference to reduce is that only the first object will be
     * returned at once (however the method will be called with the previous
     * entry).
     * If the object is an instance of EventEmitter then it will propagate the
     * error from the previous stream.
     *
     * This method is serial - meaning that any processing on an entry will
     * occur only after the previous entry is fully processed. This does mean
     * it's much slower than parallel functions.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {ReduceCallback} func The into object will be passed as the first argument, the data object from the stream as the second.
     * @param  {*|EventEmitter} into Any object passed initially to the transform  function
     * @return {*} whatever was passed as into
     *
     * @test test/methods/data-stream-reduceNow.js
     */
    reduceNow(func, into) {
        const prm = this.reduce(func, into);

        if (into instanceof EventEmitter) {
            prm.catch((e) => into.emit("error", e));
        }

        return into;
    },

    /**
     * @callback RemapCallback
     * @memberof module:scramjet~
     * @param {Function} emit a method to emit objects in the remapped stream
     * @param {*} chunk the chunk from the original stream
     * @returns {Promise<any>|*} promise to be resolved when chunk has been processed
     */

    /**
     * Remaps the stream into a new stream.
     *
     * This means that every item may emit as many other items as we like.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {RemapCallback} func A Function that is called on every chunk
     * @param  {function(new:DataStream)} [ClassType=this.constructor] Optional DataStream subclass to be constructed
     *
     * @test test/methods/data-stream-remap.js
     */
    remap(func, ClassType = this.constructor) {

        const ref = new (ClassType || this.constructor)({referrer: this});

        return this.into(
            async (str, chunk) => {
                let out = [];
                await func((newChunk) => out.push(newChunk), chunk);

                let last = true;
                for (const val of out)
                    last = ref.write(val);

                return last ? null : ref.whenDrained();
            },
            ref
        );
    },

    /**
     * Takes any method that returns any iterable and flattens the result.
     *
     * The passed Function must return an iterable (otherwise an error will be emitted). The resulting stream will
     * consist of all the items of the returned iterables, one iterable after another.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {FlatMapCallback} func A Function that is called on every chunk
     * @param {function(new:DataStream)} [ClassType=this.constructor] Optional DataStream subclass to be constructed
     * @param {any[]} ...args additional args will be passed to generators
     *
     * @test test/methods/data-stream-flatmap.js
     */
    flatMap(func, ClassType, ...args) {
        if (typeof ClassType !== "function")
            ClassType = this.constructor;

        const ref = new ClassType({referrer: this});
        const iteratorSymbol = Symbol.asyncIterator;

        return this.into(
            async (ref, chunk) => {
                const out = await func(chunk, ...args);
                if (!out) {
                    throw new Error("Non iterable object returned for flatMap!");
                }

                if (iteratorSymbol && out[iteratorSymbol]) {
                    const iterator = out[iteratorSymbol]();
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        const item = await iterator.next();
                        if (item.done) return;
                        if (!ref.write(item.value)) await ref.whenDrained();
                    }
                } else {
                    await ref.whenWrote(...out);
                }
            },
            ref
        );
    },

    /**
     * @callback FlatMapCallback
     * @memberof module:scramjet~
     * @param {*} chunk the chunk from the original stream
     * @returns {AsyncGenerator<any, void, any>|Promise<Iterable<any>>|Iterable<any>}  promise to be resolved when chunk has been processed
     */

    /**
     * A shorthand for streams of arrays or iterables to flatten them.
     *
     * More efficient equivalent of: `.flatmap(i => i);`
     * Works on streams of async iterables too.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @return {DataStream}
     *
     * @test test/methods/data-stream-flatten.js
     */
    flatten() {
        const iteratorSymbol = Symbol.asyncIterator;
        let wroteAll = Promise.resolve();

        return this.into(
            async (ref, chunk) => {
                const prevWrote = wroteAll;
                let res;
                wroteAll = new Promise(_res => res = _res);

                if (iteratorSymbol && chunk[iteratorSymbol]) {
                    const iterator = chunk[iteratorSymbol]();
                    await prevWrote;
                    // eslint-disable-next-line no-constant-condition
                    while (true) {
                        const item = await iterator.next();
                        
                        if (item.value && !ref.write(item.value)) await ref.whenDrained();
                        if (item.done) return res();
                    }
                } else {
                    let last = true;
                    await prevWrote;
                    for (const val of chunk) {
                        last = ref.write(val);
                        if (!last) await ref.whenDrained();
                    }
                    return res();
                }
            },
            this._selfInstance()
        );
    },

    /**
     * Returns a new stream that will append the passed streams to the callee
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {Readable[]} ...streams Streams to be injected into the current stream
     *
     * @test test/methods/data-stream-concat.js
     */
    concat(...streams) {
        const out = this._selfInstance({referrer: this});

        streams.unshift(this);

        const next = () => {
            if (streams.length)
                streams.shift()
                    .on("end", next)
                    .pipe(out, {end: !streams.length});
        };
        next();

        return out;
    },

    /**
     * @callback JoinCallback
     * @memberof module:scramjet~
     * @param {*} previous the chunk before
     * @param {*} next the chunk after
     * @returns {Promise<*>|*}  promise that is resolved with the joining item
     */

    /**
     * Method will put the passed object between items. It can also be a function call or generator / iterator.
     *
     * If a generator or iterator is passed, when the iteration is done no items will be interweaved.
     * Generator receives
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {*|AsyncGeneratorFunction|GeneratorFunction|JoinCallback} item An object that should be interweaved between stream items
     * @param {any[]} ...args additional args will be passed to generators
     *
     * @test test/methods/data-stream-join.js
     */
    join(item, ...args) {
        const ref = this._selfInstance({referrer: this});

        let prev;
        let consumer;
        if (typeof item !== "function") {
            consumer = (cur) => Promise.all([
                ref.whenWrote(item),
                ref.whenWrote(cur)
            ]);
        } else if (item instanceof GeneratorFunction || item instanceof AsyncGeneratorFunction) {
            const iterator = item(...args);
            consumer = cur => Promise.resolve()
                .then(() => iterator.next(prev))
                .then(({value, done}) => Promise.all([
                    !done && ref.whenWrote(value),
                    ref.whenWrote(prev = cur)
                ]))
            ;
        } else {
            consumer = cur =>
                Promise.resolve([prev, prev = cur])
                    .then(([prev, cur]) => item(prev, cur, ...args),)
                    .then(joint => Promise.all([
                        joint && ref.whenWrote(joint),
                        ref.whenWrote(cur)
                    ]))
            ;
        }

        this.shift(1, ([first]) => ref.push(prev = first))
            .consume(consumer)
            .then(() => ref.end());

        return ref;
    },

    /**
     * Keep a buffer of n-chunks for use with {@see DataStream..rewind}
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {number} [count=Infinity] Number of objects or -1 for all the stream
     *
     * @test test/methods/data-stream-keep.js
     */
    keep(count = -1) {
        if (count < 0)
            count = Infinity;

        this.pipe(this.buffer = new ReReadable({ length: count, objectMode: true }));

        return this.tap();
    },

    /**
     * Rewinds the buffered chunks the specified length backwards. Requires a prior call to {@see DataStream..keep}
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {number} [count=Infinity] Number of objects or -1 for all the buffer
     */
    rewind(count = -1) {
        if (count < 0)
            count = Infinity;

        if (this.buffer) {
            return this.buffer.tail(count).pipe(this._selfInstance());
        } else {
            throw new Error("Stream not buffered, cannot rewind.");
        }
    },

    /**
     * Returns a stream that stacks up incoming items always feeding out the newest items first.
     * It returns the older items when read
     *
     * When the stack length exceeds the given `count` the given `drop` function is awaited
     * and used for flow control.
     *
     * By default the drop function ignores and quietly disposes of items not read before overflow.
     *
     * @chainable
     * @param {number} [count=1000]
     * @param {function} [drop]
     * @memberof module:scramjet.DataStream#
     *
     * @test test/methods/data-stream-stack.js
     */
    stack(count = 1000, drop = () => 0) {
        if (count < 0)
            count = Infinity;

        return this.tap().use(
            source => {
                const stack = [];
                const waiting = [];
                let end = false;
                const target = new this.constructor({referrer: this, promiseRead() {
                    if (end) {
                        if (stack.length) {
                            const out = stack.slice().reverse();
                            stack.length = 0;
                            return out;
                        } else {
                            return [];
                        }
                    }
                    if (stack.length) {
                        return [stack.pop()];
                    }

                    return new Promise(res => {
                        waiting.push(res);
                    });
                }});

                source
                    .each(item => {
                        if (waiting.length === 0) {
                            stack.push(item);
                            if (stack.length > count) {
                                return drop(stack.shift());
                            }
                        } else {
                            waiting.shift()([item]);
                        }
                    })
                    .catch(
                        e => target.raise(e)
                    )
                    .whenEnd()
                    .then(() => {
                        end = true;
                        if (waiting.length) {
                            console.log(waiting[0]);
                            waiting.shift()([]);
                        }
                    });

                return target;
            }
        );
    },

    /**
     * Distributes processing into multiple sub-processes or threads if you like.
     *
     * @todo Currently order is not kept.
     * @todo Example test breaks travis-ci build
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {AffinityCallback|Function|number} [affinity] A Function that affixes the item to specific output stream which must exist in the object for each chunk, must return a string. A number may be passed to identify how many round-robin threads to start up. Defaults to Round Robin to twice the number of CPU threads.
     * @param {Function|DataStreamOptions} [clusterFunc] stream transforms similar to {@see DataStream#use method}
     * @param {DataStreamOptions} [options] Options
     *
     * @test test/methods/data-stream-distribute.js
     */
    distribute(affinity, clusterFunc = null, {
        plugins = [],
        options = {}
    } = {}) {

        if (!clusterFunc && affinity) {
            clusterFunc = affinity;
            affinity = os.cpus().length * 2;
        }

        if (typeof affinity === "number") {
            const roundRobinLength = affinity;
            let z = 0;
            options.threads = affinity;
            affinity = () => z = ++z % roundRobinLength;
        }

        if (!Array.isArray(clusterFunc))
            clusterFunc = [clusterFunc];

        const streams = this
            .separate(affinity, options.createOptions, this.constructor)
            .cluster(clusterFunc, {
                plugins,
                threads: options.threads,
                StreamClass: this.constructor
            });

        return streams.mux();
    },

    /**
     * Separates stream into a hash of streams. Does not create new streams!
     *
     * @chainable
     * @meta.noreadme
     * @memberof module:scramjet.DataStream#
     * @param {object} streams the object hash of streams. Keys must be the outputs of the affinity function
     * @param {AffinityCallback} affinity the Function that affixes the item to specific streams which must exist in the object for each chunk.
     */
    separateInto(streams, affinity) {
        this.consume(
            async (chunk) => {
                const streamId = await affinity(chunk);
                const found = streams[streamId];

                if (found) {
                    return found.whenWrote(chunk);
                }

                throw new Error("Output for " + streamId + " not found in " + JSON.stringify(chunk));
            }
        );
        return this;
    },

    /**
     * @callback AffinityCallback
     * @memberof module:scramjet~
     * @param {*} chunk
     * @returns {Symbol|string}
     */

    /**
     * Separates execution to multiple streams using the hashes returned by the passed Function.
     *
     * Calls the given Function for a hash, then makes sure all items with the same hash are processed within a single
     * stream. Thanks to that streams can be distributed to multiple threads.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {AffinityCallback} affinity the affinity function
     * @param {DataStreamOptions} [createOptions] options to use to create the separated streams
     * @param {function(new:DataStream)} [ClassType=this.constructor] options to use to create the separated streams
     * @return {MultiStream} separated stream
     *
     * @test test/methods/data-stream-separate.js
     */
    separate(affinity, createOptions = {}, ClassType = this.constructor) {
        const ret = new MultiStream();
        const hashes = new Map();

        ClassType = ClassType || this.constructor;

        const pushChunk = async (hash, chunk) => {
            const _hash = hash.toString();
            let rightStream;
            if (!hashes.has(_hash)) {
                rightStream = new ClassType(createOptions);
                rightStream._separateId = _hash;
                hashes.set(_hash, rightStream);
                ret.add(rightStream);
            } else {
                rightStream = hashes.get(_hash);
            }

            return rightStream.whenWrote(chunk);
        };

        this.pipe(
            new this.constructor({
                async promiseTransform(chunk) {
                    try {
                        const hash = await affinity(chunk);
                        if (Array.isArray(hash)) return Promise.all(hash.map(str => pushChunk(str, chunk)));
                        else return pushChunk(hash, chunk);
                    } catch (e) {
                        ret.emit("error", e);
                    }
                },
                referrer: this
            })
                .on("end", () => {
                    ret.streams.forEach(stream => stream.end());
                })
                .resume()
        );

        return ret;
    },

    /**
     * @memberof module:scramjet~
     * @typedef {Function} DelegateCallback
     */

    /**
     * Delegates work to a specified worker.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {DelegateCallback} delegateFunc A function to be run in the sub-thread.
     * @param  {StreamWorker}     worker
     * @param  {Array}            [plugins=[]]
     */
    delegate(delegateFunc, worker, plugins = []) {
        const ret = this._selfInstance({referrer: this});
        return worker.delegate(this, delegateFunc, plugins).pipe(ret);
    },

    /**
     * Limit the rate of the stream to a given number of chunks per second or given timeframe.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {number}      cps Chunks per timeframe, the default timeframe is 1000 ms.
     * @param  {RateOptions} [options={}] Options for the limiter controlling the timeframe and time source. Both must work on same units.
     */
    rate(cps, {windowSize = 1000, getTime = Date.now, setTimeout = global.setTimeout} = {}) {
        const refs = [];

        const defer = (time) => new Promise(res => setTimeout(res, time));

        return this.do(
            () => {
                const time = getTime();
                refs.push(time);

                if (refs.length <= cps) return; // DRY fail on purpose here - we don't need to slice the lemon twice.

                refs.splice(0, refs.find(x => x < time - windowSize));
                if (refs.length <= cps) return;

                return defer(time - refs.shift() + windowSize);
            }
        );
    },

    /**
     * @typedef {object} RateOptions
     * @memberof module:scramjet~
     * @param  {number}   [timeFrame=1000] The size of the window to look for streams.
     * @param  {Function} [getTime=Date.now] Time source - anything that returns time.
     * @param  {Function} [setTimeout=setTimeout] Timing function that works identically to setTimeout.
     */

    /**
     * Aggregates chunks in arrays given number of number of items long.
     *
     * This can be used for micro-batch processing.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {number} count How many items to aggregate
     *
     * @test test/methods/data-stream-batch.js
     */
    batch(count) {
        let arr = [];

        const ret = this.tap().pipe(new this.constructor({
            promiseTransform(chunk) {
                arr.push(chunk);
                if (arr.length >= count) {
                    const push = arr;
                    arr = [];
                    return push;
                }
                return Promise.reject(DataStream.filter);
            },
            promiseFlush() {
                if (arr.length > 0) {
                    return [arr];
                } else
                    return [];
            },
            referrer: this
        }));

        return ret;
    },

    /**
     * Aggregates chunks to arrays not delaying output by more than the given number of ms.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {number} ms    Maximum amount of milliseconds
     * @param  {number} [count] Maximum number of items in batch (otherwise no limit)
     *
     * @test test/methods/data-stream-timebatch.js
     */
    timeBatch(ms, count = Infinity) {
        let arr = [];

        const setTimeout = this.setTimeout;
        const clearTimeout = this.clearTimeout;

        let ret = this._selfInstance({referrer: this});

        let pushTimeout = null;

        const push = () => {
            if (pushTimeout) {
                clearTimeout(pushTimeout);
                pushTimeout = null;
            }
            const last = ret.whenWrote(arr);
            arr = [];
            return last;
        };

        this.consume(async (chunk) => {
            arr.push(chunk);
            if (arr.length >= count) {
                await push();
            } else if (!pushTimeout) {
                pushTimeout = setTimeout(push, ms);
            }
        }).then(async () => {
            if (arr.length) {
                clearTimeout(pushTimeout);
                await ret.whenWrote(arr);
            }
            ret.end();
        });

        return ret;
    },

    /**
     * Performs the Nagle's algorithm on the data. In essence it waits until we receive some more data and releases them
     * in bulk.
     *
     * @memberof module:scramjet.DataStream#
     * @todo needs more work, for now it's simply waiting some time, not checking the queues.
     * @param  {number} [size=32] maximum number of items to wait for
     * @param  {number} [ms=10]   milliseconds to wait for more data
     * @chainable
     * @meta.noreadme
     */
    nagle(size = 32, ms = 10) {
        return this.timeBatch(size, ms)
            .flatten();
    },

    /**
     * Returns a WindowStream of the specified length
     *
     * @memberof module:scramjet.DataStream#
     * @chainable
     * @param {number} length
     * @returns {WindowStream} a stream of array's
     * @meta.noreadme
     */
    window(length) {
        if (!(+length > 0))
            throw new Error("Length argument must be a positive integer!");

        const arr = [];
        return this.into(
            (out, chunk) => {
                arr.push(chunk);
                if (arr.length > length)
                    arr.shift();

                return out.whenWrote(arr.slice());
            },
            new scramjet.WindowStream()
        );
    },

    /**
     * Transforms the stream to a streamed JSON array.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {Iterable<any>} [enclosure='[]'] Any iterable object of two items (beginning and end)
     * @return {StringStream}
     * @meta.noreadme
     *
     * @test test/methods/data-stream-tojsonarray.js
     */
    toJSONArray(enclosure = ["[\n", "\n]"], separator = ",\n", stringify = JSON.stringify) {
        const ref = new StringStream({referrer: this});

        this.shift(1, ([first]) => (ref.push(enclosure[0]), ref.whenWrote(stringify(first))))
            .consume(
                (chunk) => Promise.all([
                    ref.whenWrote(separator),
                    ref.whenWrote(stringify(chunk))
                ])
            )
            .then(
                () => ref.end(enclosure[1])
            );

        return ref;
    },

    /**
     * Transforms the stream to a streamed JSON object.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {MapCallback} [entryCallback] async function returning an entry (array of [key, value])
     * @param  {Iterable<any>} [enclosure='{}'] Any iterable object of two items (beginning and end)
     * @return {StringStream}
     * @meta.noreadme
     *
     * @test test/methods/data-stream-tojsonobject.js
     */
    toJSONObject(entryCallback, enclosure = ["{\n","\n}"], separator = ",\n") {
        let ref = this;

        return ref.map((item) => [entryCallback(item), item])
            .toJSONArray(enclosure, separator, ([key, value]) => JSON.stringify(key.toString()) + ":" + JSON.stringify(value));
    },


    /**
     * Returns a StringStream containing JSON per item with optional end line
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {Boolean|string} [endline=os.EOL] whether to add endlines (boolean or string as delimiter)
     * @return {StringStream}  output stream
     */
    JSONStringify(eol = os.EOL) {
        if (!eol)
            eol = "";

        return this.stringify((item) => JSON.stringify(item) + eol);
    },

    /**
     * Stringifies CSV to DataString using 'papaparse' module.
     *
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param {object} [options={}] options for the papaparse.unparse module.
     * @return {StringStream}  stream of parsed items
     *
     * @test test/methods/data-stream-csv.js
     */
    CSVStringify(options = {}) {
        const Papa = require("papaparse");
        let header = null;
        let start = 1;
        options = Object.assign({
            header: true,
            newline: os.EOL
        }, options);

        const outOptions = Object.assign({}, options, {
            header: false
        });

        return this
            .timeBatch(16, 64)
            .map((arr) => {
                const out = [];
                if (!header) {
                    header = Object.keys(arr[0]);
                    if (options.header) out.push(header);
                }
                for (const item of arr)
                    out.push(header.map(key => item[key]));

                const x = Papa.unparse(out, outOptions) + options.newline;
                if (start) {
                    start = 0;
                    return x;
                }
                return x;
            })
            .pipe(new StringStream());
    },

    /**
     * @typedef {object} ExecDataOptions
     * @memberof module:scramjet~
     * @property {UseCallback} [parse] scramjet module to transform the stream to string or buffer stream
     * @property {UseCallback} [stringify] scramjet module to transform from string or buffer stream to wanted version
     * @extends StringStream.ExecOptions
     */

    /**
     * Executes a given sub-process with arguments and pipes the current stream into it while returning the output as another DataStream.
     *
     * Pipes the current stream into the sub-processes stdin.
     * The data is serialized and deserialized as JSON lines by default. You
     * can provide your own alternative methods in the ExecOptions object.
     *
     * Note: if you're piping both stderr and stdout (options.stream=3) keep in mind that chunks may get mixed up!
     *
     * @param {string} command command to execute
     * @memberof module:scramjet.DataStream#
     * @param {ExecDataOptions|any} [options={}] options to be passed to `spawn` and defining serialization.
     * @param {string[]} ...args additional args will be passed to function
     *
     * @test test/methods/data-stream-exec.js
     */
    exec(command, options = {}, ...args) {
        const resolvedCmd = path.resolve(getCalleeDirname(1), command);
        const stringify = options.stringify || (stream => stream.JSONStringify());
        const parse = options.parse || (stream => stream.JSONParse());

        return this
            .use(stringify)
            .exec(resolvedCmd, options, ...args)
            .use(parse);
    },

    /**
     * Injects a ```debugger``` statement when called.
     *
     * @meta.noreadme
     * @chainable
     * @memberof module:scramjet.DataStream#
     * @param  {Function} func if passed, the function will be called on self to add an option to inspect the stream in place, while not breaking the transform chain
     * @return {DataStream}  self
     *
     * @test test/methods/data-stream-debug.js
     */
    debug(func) {
        debugger; // eslint-disable-line
        this.use(func);
        return this;
    },

};

module.exports.pop = module.exports.shift;
module.exports.group = module.exports.separate;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./":"scramjet","events":28,"os":31,"papaparse":1,"path":32,"rereadable-stream":2,"scramjet-core/lib/util/utils":16}],19:[function(require,module,exports){
const scramjet = require("./");
const os = require("os");

module.exports = {
    /**
     * Re-routes streams to a new MultiStream of specified size
     *
     * @meta.noreadme
     * @memberof module:scramjet.MultiStream#
     * @todo NYT: not yet tested
     * @todo NYD: not yet documented
     * @param  {Function} [policy=Affinity.RoundRobin] [description]
     * @param  {number} [count=os.cpus().length]       [description]
     * @return {MultiStream}                             [description]
     */
    route(policy, count = os.cpus().length) {
        const affine = policy(null, count);
        return this.mux().separate(
            async (item) => await affine(item)
        );
    },

    /**
     * Map stream synchronously
     *
     * @chainable
     * @memberof module:scramjet.MultiStream#
     * @param  {Function} transform mapping function ran on every stream (SYNCHRONOUS!)
     */
    smap(transform) {
        const out = new this.constructor(this.streams.map(transform));
        this.each(
            (stream) => out.add(transform(stream)),
            (stream) => out.remove(transform(stream))
        );
        return out;
    },

    /**
     * Distribute options
     *
     * @typedef {object} DistributeOptions
     * @memberof module:scramjet~
     * @prop {Array} [plugins=[]] a list of scramjet plugins to load (if omitted, will use just the ones in scramjet itself)
     * @prop {string} [StreamClass=DataStream] the class to deserialize the stream to.
     * @prop {number} [threads=os.cpus().length * 2] maximum threads to use - defaults to number of processor threads in os, but it may be sensible to go over this value if you'd intend to run synchronous code.
     * @prop {DataStreamOptions} [createOptions={}] maximum threads to use - defaults to number of processor threads in os, but it may be sensible to go over this value if you'd intend to run synchronous code.
     * @prop {StreamWorker} [StreamWorker=scramjet.StreamWorker] worker implementation.
     */

    /**
     * Distributes processing to multiple forked subprocesses.
     *
     * @chainable
     * @memberof module:scramjet.MultiStream#
     * @param {Function|string} clusterFunc a cluster callback with all operations working similarly to DataStream::use
     * @param {DistributeOptions} [options={}]
     */
    cluster(clusterFunc, {plugins = [], threads = os.cpus().length * 2, StreamClass = scramjet.DataStream, createOptions = {}, StreamWorker = scramjet.StreamWorker} = {}) {
        const out = new this.constructor();

        StreamWorker.fork(threads);

        this.each(
            (stream) => StreamWorker
                .fork(threads)
                .then(
                    ([worker]) => out.add(worker.delegate(stream, [clusterFunc], plugins).pipe(new StreamClass(createOptions)))
                )
        );

        return out;
    },

};

},{"./":"scramjet","os":31}],20:[function(require,module,exports){
const {DataStream} = require("./");

/**
 * Simple scramjet stream that by default contains numbers or other containing with `valueOf` method. The streams
 * provides simple methods like `sum`, `average`. It derives from DataStream so it's still fully supporting all `map`,
 * `reduce` etc.
 *
 * @memberof module:scramjet.
 * @extends DataStream
 */
class NumberStream extends DataStream {

    /**
     * @callback ValueOfCallback
     * @memberof module:scramjet~
     * @param {*} chunk stream object
     * @returns {Promise<number>|number} value of the object
     */

    /**
     * NumberStream options
     *
     * @typedef {object} NumberStreamOptions
     * @memberof module:scramjet~
     * @prop {ValueOfCallback} [valueOf=x => +x] value of the data item function.
     * @extends DataStreamOptions
     */

    /**
     * Creates an instance of NumberStream.
     * @param {NumberStreamOptions} options
     * @memberof module:scramjet
     */
    constructor(options, ...args) {
        super(options, ...args);
    }

    get _valueOf() {
        return this._options.valueOf || ((x) => +x);
    }

    /**
     * Calculates the sum of all items in the stream.
     *
     * @return {Promise<number>|any}
     */
    async sum() {
        const _valueOf = this._valueOf;
        return this.reduce(async (a, x) => a + await _valueOf(x), 0);
    }

    /**
     * Calculates the sum of all items in the stream.
     *
     * @return {Promise<number>|any}
     */
    async avg() {
        let cnt = 0;
        const _valueOf = this._valueOf;
        return this.reduce(async (a, x) => (cnt * a + await _valueOf(x)) / ++cnt, 0);
    }

}

module.exports = NumberStream;

},{"./":"scramjet"}],21:[function(require,module,exports){
(function (__dirname){(function (){
const {DataStream, StringStream} = require("../");
const ref = {};
const {fork} = require("child_process");
const os = require("os");

const net = require("net");

let workerSeq = 0;
const workers = [];

/**
 * StreamWorker class - intended for internal use
 *
 * This class provides control over the subprocesses, including:
 *  - spawning
 *  - communicating
 *  - delivering streams
 *
 * @internal
 * @memberof module:scramjet
 */
class StreamWorker {

    /**
     * Private constructor
     */
    constructor(def) {
        if (def !== ref) {
            throw new Error("Private constructor");
        }

        this._refcount = 0;

        this.timeout = 1e3;
        this.child = null;
        this.resolving = null;

        this.ip = "localhost";
        this.port = 0;
    }

    /**
     * Spawns the worker if necessary and provides the port information to it.
     *
     * @async
     * @return {StreamWorker}
     */
    async spawn() {
        return this.resolving || (this.resolving = new Promise((res, rej) => {
            this._child = fork(__dirname + "/stream-child", [this.ip, this.timeout]);

            let resolved = false;
            let rejected = false;

            this._child.once("message", ({port}) => (this.port = +port, resolved = true, res(this)));
            this._child.once("error", (e) => (rejected = true, rej(e)));
            this._child.once("exit", (code) => {
                if (!code) // no error, child exited, clear the promise so that it respawns when needed
                    this.resolving = null;
                else
                    this.resolving = Promise.reject(new Error("Child exited with non-zero status code: " + code));
            });

            setTimeout(() => resolved || rejected || (rejected = true) && rej(new Error("StreamWorker child timeout!")), this.timeout);
        }));
    }

    /**
     * Delegates a stream to the child using tcp socket.
     *
     * The stream gets serialized using JSON and passed on to the sub-process.
     * The sub-process then performs transforms on the stream and pushes them back to the main process.
     * The stream gets deserialized and outputted to the returned DataStream.
     *
     * @param  {DataStream} input stream to be delegated
     * @param  {TeeCallback[]|Array} delegateFunc Array of transforms or arrays describing ['module', 'method']
     * @param  {any[]} [plugins=[]] List of plugins to load in the child
     * @return {DataStream} stream after transforms and back to the main process.
     */
    delegate(input, delegateFunc, plugins = []) {

        const sock = new net.Socket().setNoDelay(true);

        const _in = new DataStream();

        const _out = _in
            .JSONStringify()
            .pipe(sock.connect(this.port, this.ip))
            .pipe(new StringStream)
            .JSONParse()
            .filter(
                ({error}) => {
                    if (error) {
                        const err = new Error(error.message);
                        err.stack = "[child]" + error.stack;
                    }
                    return true;
                }
            )
        ;

        _in.unshift({
            type: 0, // 0 - start, 1 - end
            plugins,
            streamClass: input.constructor.name,
            transforms: delegateFunc.map(
                func => typeof func === "function" ? func.toString() : (Array.isArray(func) ? func : [func])
            )
        });

        input.pipe(_in);

        return _out;
    }

    /**
     * Spawns (Preforks) a given number of subprocesses and returns the worker asynchronously.
     *
     * @async
     * @param  {number}  [count=os.cpus().length] Number of processes to spawn. If other subprocesses are active only the missing ones will be spawned.
     * @return {Array<StreamWorker>}  list of StreamWorkers
     */
    static async fork(count = os.cpus().length) {

        for (let i = workers.length; i < count; i++)
            workers.push(new StreamWorker(ref));

        return Promise.all(new Array(count).fill(1).map(() => this._getWorker()));
    }

    /**
     * Picks next worker (not necessarily free one!)
     *
     * @async
     * @return {StreamWorker}
     */
    static async _getWorker() {
        // TODO: Use free / not fully utilized workers first.

        return workers[workerSeq = ++workerSeq % workers.length].spawn();
    }

}

module.exports = StreamWorker;

}).call(this)}).call(this,"/node_modules/scramjet/lib")
},{"../":"scramjet","child_process":24,"net":24,"os":31}],22:[function(require,module,exports){
(function (process){(function (){
const {DataStream} = require("./");
const {spawn} = require("child_process");
const path = require("path");

const platform = require("os").platform();

/** @ignore */
const getCalleeDirname = require("scramjet-core/lib/util/utils").getCalleeDirname;

module.exports = {

    /**
     * Splits the string stream by the specified regexp or string
     *
     * @chainable
     * @memberof module:scramjet.StringStream#
     * @param  {string|RegExp} [eol=/\r?\n/] End of line string or regex
     *
     * @test test/methods/string-stream-split.js
     */
    lines(eol = /\r?\n/) {
        return this.split(eol);
    },

    /**
     * Parses each entry as JSON.
     * Ignores empty lines
     *
     * @chainable
     * @memberof module:scramjet.StringStream#
     * @param {Boolean} [perLine=true] instructs to split per line
     * @return {DataStream}  stream of parsed items
     */
    JSONParse(perLine = true) {
        let str = this;
        if (perLine) {
            str = str.lines();
        }

        return str.filter(a => a !== "").parse(JSON.parse);
    },

    /**
     * Parses CSV to DataString using 'papaparse' module.
     *
     * @chainable
     * @memberof module:scramjet.StringStream#
     * @param {object} [options={}] options for the papaparse.parse method.
     * @return {DataStream}  stream of parsed items
     * @test test/methods/data-stream-separate.js
     */
    CSVParse(options = {}) {
        const out = new DataStream();
        require("papaparse").parse(this, Object.assign(options, {
            chunk: async ({data, errors}, parser) => {
                if (errors.length) {
                    return out.raise(Object.assign(new Error(), errors[0]));
                }

                if (!out.write(data)) {
                    parser.pause();
                    await out.whenDrained();
                    parser.resume();
                }
            },
            complete: () => {
                out.end();
            },
            error: (e) => {
                out.emit("error", e);
            }
        }));

        return out.flatten();
    },

    /**
     * Appends given argument to all the items.
     *
     * @chainable
     * @memberof module:scramjet.StringStream#
     * @param {ThenFunction|string} param the argument to append. If function passed then it will be called and resolved and the resolution will be appended.
     *
     * @test test/methods/string-stream-append.js
     */
    append(param) {
        return typeof param === "function" ? this.map(item => Promise.resolve(item).then(param).then((result) => item + result)) : this.map(item => item + param);
    },

    /**
     * Prepends given argument to all the items.
     *
     * @chainable
     * @memberof module:scramjet.StringStream#
     * @param {ThenFunction|string} param the argument to prepend. If function passed then it will be called and resolved
     *                              and the resolution will be prepended.
     *
     * @test test/methods/string-stream-prepend.js
     */
    prepend(param) {
        return typeof param === "function" ? this.map(item => Promise.resolve(item).then(param).then((result) => result + item)) : this.map(item => param + item);
    },

    /**
     * @typedef {object} ExecOptions
     * @memberof module:scramjet~
     * @property {number} [stream=1] (bitwise) the output stdio number to push out (defaults to stdout = 1)
     * @property {string[]} [interpreter=[]] defaults to nothing, except on windows where "cmd.exe /c" will be spawned by default
     * @extends child_process.SpawnOptions
     */

    /**
     * Executes a given sub-process with arguments and pipes the current stream into it while returning the output as another DataStream.
     *
     * Pipes the current stream into the sub-processes stdin.
     * The data is serialized and deserialized as JSON lines by default. You
     * can provide your own alternative methods in the ExecOptions object.
     *
     * Note: if you're piping both stderr and stdout (options.stream=3) keep in mind that chunks may get mixed up!
     *
     * @param {string} command command to execute
     * @memberof module:scramjet.StringStream#
     * @param {ExecOptions|any} [options={}] options to be passed to `spawn` and defining serialization.
     * @param {string[]} ...args additional arguments (will overwrite to SpawnOptions args even if not given)
     *
     * @test test/methods/string-stream-exec.js
     */
    exec(command, options, ...args) {
        const shell = process.env.SHELL ? [process.env.SHELL] : platform === "win32" ? ["cmd.exe","/c"] : [];
        const { stream = 1, interpreter = shell } = (options || {});

        const out = this.tap()._selfInstance({referrer: this});

        const spawnOptions = Object.assign({}, options);
        spawnOptions.stdio = ["pipe", "pipe", "pipe"];

        const resolvedCommand = path.resolve(getCalleeDirname(1), command);

        const actualArgs = interpreter && interpreter.length ? [...interpreter.slice(1), resolvedCommand, ...args] : args;
        const actualCmd = interpreter && interpreter.length ? interpreter[0] : resolvedCommand;

        let end = 1;
        const ended = () => end-- || out.end();

        const proc = spawn(actualCmd, actualArgs, spawnOptions);
        this.catch(e => proc.kill(e.signal));
        proc.on("error", e => {
            ended();
            return out.raise(e);
        });
        proc.on("exit", async exitCode => {
            if (exitCode > 0) {
                const error = Object.assign(new Error(`Non-zero exitcode (${exitCode}) returned from command "${resolvedCommand}"`), {exitCode});
                await out.raise(error);
            }

            ended();
        });

        this.pipe(proc.stdin);
        proc.stdin.on("error", async e => {
            if (!(e.code === "EPIPE")) {
                await out.raise(e);
            }
            // ignore EPIPE after end
        });
        if (stream & 1) proc.stdout.on("end", () => ended()).pipe(out, {end: false});
        if (stream & 2) proc.stderr.on("end", () => ended()).pipe(out, {end: false});

        return out;

    }

};

}).call(this)}).call(this,require('_process'))
},{"./":"scramjet","_process":33,"child_process":24,"os":31,"papaparse":1,"path":32,"scramjet-core/lib/util/utils":16}],23:[function(require,module,exports){
const {NumberStream} = require("./");

/**
 * A stream for moving window calculation with some simple methods.
 *
 * In essence it's a stream of Array's containing a list of items - a window.
 * It's best used when created by the `DataStream..window`` method.
 *
 * @memberof module:scramjet.
 * @extends NumberStream
 */
class WindowStream extends NumberStream {

    /**
     * Calculates moving sum of items, the output NumberStream will contain the moving sum.
     *
     * @chainable
     * @param {ValueOfCallback} [valueOf] value of method for array items
     * @return {NumberStream}
     */
    sum(valueOf = (x) => +x) {
        return this.map(
            arr => arr.reduce((a, x) => a + valueOf(x)),
            NumberStream
        );
    }

    /**
     * Calculates the moving average of the window and returns the NumberStream
     *
     * @chainable
     * @param {ValueOfCallback} [valueOf] value of method for array items
     * @return {NumberStream}
     */
    avg(valueOf = (x) => +x) {
        let cnt = 0;
        return this.map(
            arr => arr.reduce((a, x) => (cnt * a + valueOf(x)) / ++cnt, 0),
            NumberStream
        );
    }
}

module.exports = WindowStream;

},{"./":"scramjet"}],24:[function(require,module,exports){

},{}],25:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],26:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],27:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":25,"buffer":27,"ieee754":29}],28:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],29:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],30:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],31:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};

},{}],32:[function(require,module,exports){
(function (process){(function (){
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;

}).call(this)}).call(this,require('_process'))
},{"_process":33}],33:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],34:[function(require,module,exports){
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":27}],35:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/lib/_stream_readable.js');
Stream.Writable = require('readable-stream/lib/_stream_writable.js');
Stream.Duplex = require('readable-stream/lib/_stream_duplex.js');
Stream.Transform = require('readable-stream/lib/_stream_transform.js');
Stream.PassThrough = require('readable-stream/lib/_stream_passthrough.js');
Stream.finished = require('readable-stream/lib/internal/streams/end-of-stream.js')
Stream.pipeline = require('readable-stream/lib/internal/streams/pipeline.js')

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":28,"inherits":30,"readable-stream/lib/_stream_duplex.js":37,"readable-stream/lib/_stream_passthrough.js":38,"readable-stream/lib/_stream_readable.js":39,"readable-stream/lib/_stream_transform.js":40,"readable-stream/lib/_stream_writable.js":41,"readable-stream/lib/internal/streams/end-of-stream.js":45,"readable-stream/lib/internal/streams/pipeline.js":47}],36:[function(require,module,exports){
'use strict';

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

},{}],37:[function(require,module,exports){
(function (process){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = require('./_stream_readable');

var Writable = require('./_stream_writable');

require('inherits')(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
}).call(this)}).call(this,require('_process'))
},{"./_stream_readable":39,"./_stream_writable":41,"_process":33,"inherits":30}],38:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

require('inherits')(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":40,"inherits":30}],39:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = require('events').EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = require('./internal/streams/stream');
/*</replacement>*/


var Buffer = require('buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = require('util');

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = require('./internal/streams/buffer_list');

var destroyImpl = require('./internal/streams/destroy');

var _require = require('./internal/streams/state'),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = require('../errors').codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

require('inherits')(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = require('./internal/streams/from');
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../errors":36,"./_stream_duplex":37,"./internal/streams/async_iterator":42,"./internal/streams/buffer_list":43,"./internal/streams/destroy":44,"./internal/streams/from":46,"./internal/streams/state":48,"./internal/streams/stream":49,"_process":33,"buffer":27,"events":28,"inherits":30,"string_decoder/":50,"util":26}],40:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';

module.exports = Transform;

var _require$codes = require('../errors').codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = require('./_stream_duplex');

require('inherits')(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}
},{"../errors":36,"./_stream_duplex":37,"inherits":30}],41:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';

module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/

var Stream = require('./internal/streams/stream');
/*</replacement>*/


var Buffer = require('buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = require('./internal/streams/destroy');

var _require = require('./internal/streams/state'),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = require('../errors').codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

require('inherits')(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../errors":36,"./_stream_duplex":37,"./internal/streams/destroy":44,"./internal/streams/state":48,"./internal/streams/stream":49,"_process":33,"buffer":27,"inherits":30,"util-deprecate":51}],42:[function(require,module,exports){
(function (process){(function (){
'use strict';

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = require('./end-of-stream');

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
}).call(this)}).call(this,require('_process'))
},{"./end-of-stream":45,"_process":33}],43:[function(require,module,exports){
'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('buffer'),
    Buffer = _require.Buffer;

var _require2 = require('util'),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();
},{"buffer":27,"util":26}],44:[function(require,module,exports){
(function (process){(function (){
'use strict'; // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
}).call(this)}).call(this,require('_process'))
},{"_process":33}],45:[function(require,module,exports){
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;
},{"../../../errors":36}],46:[function(require,module,exports){
module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};

},{}],47:[function(require,module,exports){
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = require('../../../errors').codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = require('./end-of-stream');
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;
},{"../../../errors":36,"./end-of-stream":45}],48:[function(require,module,exports){
'use strict';

var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};
},{"../../../errors":36}],49:[function(require,module,exports){
module.exports = require('events').EventEmitter;

},{"events":28}],50:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":34}],51:[function(require,module,exports){
(function (global){(function (){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"scramjet":[function(require,module,exports){
module.exports = require("scramjet-core");

module.exports = module.exports.plugin({
    /**
     * A Stream Worker class
     *
     * @inject StreamWorker
     * @memberof module:scramjet
     * @type {StreamWorker}
     */
    StreamWorker: require("./stream-worker")
});

module.exports = module.exports.plugin({
    DataStream: require("./data-stream"),
    BufferStream: require("./buffer-stream"),
    StringStream: require("./string-stream"),
    NumberStream: require("./number-stream"),
    MultiStream: require("./multi-stream")
}).plugin({
    WindowStream: require("./window-stream")
});

},{"./buffer-stream":17,"./data-stream":18,"./multi-stream":19,"./number-stream":20,"./stream-worker":21,"./string-stream":22,"./window-stream":23,"scramjet-core":5}]},{},[]);
