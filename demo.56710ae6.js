// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/tone/build/Tone.js":[function(require,module,exports) {
var define;
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tone=e():t.Tone=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=148)}([function(t,e,i){"use strict";i.r(e),function(t){var s=i(93),n=function(){if(!(this instanceof n))throw new Error("constructor needs to be called with the 'new' keyword")};
/**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2019 Yotam Mann
 */n.prototype.toString=function(){for(var t in n){var e=t[0].match(/^[A-Z]$/),i=n[t]===this.constructor;if(n.isFunction(n[t])&&e&&i)return t}return"Tone"},n.prototype.dispose=function(){return this},n.prototype.set=function(t,e){if(n.isString(t)){var i={};i[t]=e,t=i}t:for(var s in t){e=t[s];var o=this;if(-1!==s.indexOf(".")){for(var a=s.split("."),r=0;r<a.length-1;r++)if((o=o[a[r]])instanceof n){a.splice(0,r+1);var l=a.join(".");o.set(l,e);continue t}s=a[a.length-1]}var u=o[s];n.isUndef(u)||(n.Signal&&u instanceof n.Signal||n.Param&&u instanceof n.Param?u.value!==e&&(u.value=e):u instanceof AudioParam?u.value!==e&&(u.value=e):n.TimeBase&&u instanceof n.TimeBase?o[s]=e:u instanceof n?u.set(e):u!==e&&(o[s]=e))}return this},n.prototype.get=function(t){n.isUndef(t)?t=this._collectDefaults(this.constructor):n.isString(t)&&(t=[t]);for(var e={},i=0;i<t.length;i++){var s=t[i],o=this,a=e;if(-1!==s.indexOf(".")){for(var r=s.split("."),l=0;l<r.length-1;l++){var u=r[l];a[u]=a[u]||{},a=a[u],o=o[u]}s=r[r.length-1]}var d=o[s];n.isObject(t[s])?a[s]=d.get():n.Signal&&d instanceof n.Signal?a[s]=d.value:n.Param&&d instanceof n.Param?a[s]=d.value:d instanceof AudioParam?a[s]=d.value:d instanceof n?a[s]=d.get():!n.isFunction(d)&&n.isDefined(d)&&(a[s]=d)}return e},n.prototype._collectDefaults=function(t){var e=[];if(n.isDefined(t.defaults)&&(e=Object.keys(t.defaults)),n.isDefined(t._super))for(var i=this._collectDefaults(t._super),s=0;s<i.length;s++)-1===e.indexOf(i[s])&&e.push(i[s]);return e},n.defaults=function(t,e,i){var s={};if(1===t.length&&n.isObject(t[0]))s=t[0];else for(var o=0;o<e.length;o++)s[e[o]]=t[o];return n.isDefined(i.defaults)?n.defaultArg(s,i.defaults):n.isObject(i)?n.defaultArg(s,i):s},n.defaultArg=function(t,e){if(n.isObject(t)&&n.isObject(e)){var i={};for(var s in t)i[s]=n.defaultArg(e[s],t[s]);for(var o in e)i[o]=n.defaultArg(t[o],e[o]);return i}return n.isUndef(t)?e:t},n.prototype.log=function(){if(this.debug||this.toString()===n.global.TONE_DEBUG_CLASS){var t=Array.from(arguments);t.unshift(this.toString()+":"),console.log.apply(void 0,t)}},n.prototype.assert=function(t,e){if(!t)throw new Error(e)},n.connectSeries=function(){for(var t=arguments[0],e=1;e<arguments.length;e++){var i=arguments[e];n.connect(t,i),t=i}return n},n.connect=function(t,e,i,s){for(;n.isDefined(e.input);)n.isArray(e.input)?(s=n.defaultArg(s,0),e=e.input[s],s=0):e.input&&(e=e.input);return e instanceof AudioParam?t.connect(e,i):e instanceof AudioNode&&t.connect(e,i,s),n},n.disconnect=function(t,e,i,s){if(e){for(var o=!1;!o;)n.isArray(e.input)?(n.isDefined(s)?n.disconnect(t,e.input[s],i):e.input.forEach(function(e){try{n.disconnect(t,e,i)}catch(t){}}),o=!0):e.input?e=e.input:o=!0;e instanceof AudioParam?t.disconnect(e,i):e instanceof AudioNode&&t.disconnect(e,i,s)}else t.disconnect();return n},n.isUndef=function(t){return void 0===t},n.isDefined=function(t){return!n.isUndef(t)},n.isFunction=function(t){return"function"==typeof t},n.isNumber=function(t){return"number"==typeof t},n.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object},n.isBoolean=function(t){return"boolean"==typeof t},n.isArray=function(t){return Array.isArray(t)},n.isString=function(t){return"string"==typeof t},n.isNote=function(t){return n.isString(t)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)},n.noOp=function(){},n.prototype._readOnly=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._readOnly(t[e]);else Object.defineProperty(this,t,{writable:!1,enumerable:!0})},n.prototype._writable=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this._writable(t[e]);else Object.defineProperty(this,t,{writable:!0})},n.State={Started:"started",Stopped:"stopped",Paused:"paused"},n.global=n.isUndef(t)?window:t,n.equalPowerScale=function(t){var e=.5*Math.PI;return Math.sin(t*e)},n.dbToGain=function(t){return Math.pow(10,t/20)},n.gainToDb=function(t){return Math.log(t)/Math.LN10*20},n.intervalToFrequencyRatio=function(t){return Math.pow(2,t/12)},n.prototype.now=function(){return n.context.now()},n.now=function(){return n.context.now()},n.prototype.immediate=function(){return n.context.currentTime},n.immediate=function(){return n.context.currentTime},n.extend=function(t,e){function i(){}n.isUndef(e)&&(e=n),i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t,t._super=e},n._audioContext=null,n.start=function(){return n.context.resume()},Object.defineProperty(n,"context",{get:function(){return n._audioContext},set:function(t){t.isContext?n._audioContext=t:n._audioContext=new n.Context(t),n.Context.emit("init",n._audioContext)}}),Object.defineProperty(n.prototype,"context",{get:function(){return n.context}}),n.setContext=function(t){n.context=t},Object.defineProperty(n.prototype,"blockTime",{get:function(){return 128/this.context.sampleRate}}),Object.defineProperty(n.prototype,"sampleTime",{get:function(){return 1/this.context.sampleRate}}),Object.defineProperty(n,"supported",{get:function(){var t=n.global.hasOwnProperty("AudioContext")||n.global.hasOwnProperty("webkitAudioContext"),e=n.global.hasOwnProperty("Promise");return t&&e}}),Object.defineProperty(n,"initialized",{get:function(){return Boolean(n.context)}}),n.getContext=function(t){if(n.initialized)t(n.context);else{var e=function(){t(n.context),n.Context.off("init",e)};n.Context.on("init",e)}return n},n.version=s.a,e.default=n}.call(this,i(147))},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20);if(s.default.supported){var n=new OfflineAudioContext(2,1,44100),o=n.createGain(),a=n.createGain();if(o.connect(a)!==a){var r=AudioNode.prototype.connect;AudioNode.prototype.connect=function(){return r.apply(this,arguments),arguments[0]}}}s.default.AudioNode=function(){s.default.call(this);var t=s.default.defaults(arguments,["context"],{context:s.default.context});this._context=t.context},s.default.extend(s.default.AudioNode),Object.defineProperty(s.default.AudioNode.prototype,"context",{get:function(){return this._context}}),s.default.AudioNode.prototype.createInsOuts=function(t,e){1===t?this.input=this.context.createGain():t>1&&(this.input=new Array(t)),1===e?this.output=this.context.createGain():e>1&&(this.output=new Array(e))},Object.defineProperty(s.default.AudioNode.prototype,"channelCount",{get:function(){return this.output.channelCount},set:function(t){return this.output.channelCount=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelCountMode",{get:function(){return this.output.channelCountMode},set:function(t){return this.output.channelCountMode=t}}),Object.defineProperty(s.default.AudioNode.prototype,"channelInterpretation",{get:function(){return this.output.channelInterpretation},set:function(t){return this.output.channelInterpretation=t}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfInputs",{get:function(){return this.input?s.default.isArray(this.input)?this.input.length:1:0}}),Object.defineProperty(s.default.AudioNode.prototype,"numberOfOutputs",{get:function(){return this.output?s.default.isArray(this.output)?this.output.length:1:0}}),s.default.AudioNode.prototype.connect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].connect(t,0,i)):s.default.connect(this.output,t,e,i),this},s.default.AudioNode.prototype.disconnect=function(t,e,i){return s.default.isArray(this.output)?(e=s.default.defaultArg(e,0),this.output[e].disconnect(t,0,i)):s.default.disconnect(this.output,t,e,i),this},s.default.AudioNode.prototype.chain=function(){var t=Array.from(arguments);return t.unshift(this),s.default.connectSeries.apply(void 0,t),this},s.default.AudioNode.prototype.fan=function(){for(var t=0;t<arguments.length;t++)this.connect(arguments[t]);return this},s.default.AudioNode.prototype.dispose=function(){return s.default.isDefined(this.input)&&(this.input instanceof AudioNode&&this.input.disconnect(),this.input=null),s.default.isDefined(this.output)&&(this.output instanceof AudioNode&&this.output.disconnect(),this.output=null),this._context=null,this};e.default=s.default.AudioNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(14),i(30),i(44),i(20),i(3);if(s.default.supported&&!s.default.global.AudioContext.prototype.createConstantSource){var n=function(t){this.context=t;for(var e=t.createBuffer(1,128,t.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=1;this._bufferSource=t.createBufferSource(),this._bufferSource.channelCount=1,this._bufferSource.channelCountMode="explicit",this._bufferSource.buffer=e,this._bufferSource.loop=!0;var n=this._output=t.createGain();this.offset=n.gain,this._bufferSource.connect(n)};n.prototype.start=function(t){return this._bufferSource.start(t),this},n.prototype.stop=function(t){return this._bufferSource.stop(t),this},n.prototype.connect=function(){return this._output.connect.apply(this._output,arguments),this},n.prototype.disconnect=function(){return this._output.disconnect.apply(this._output,arguments),this},AudioContext.prototype.createConstantSource=function(){return new n(this)},s.default.Context.prototype.createConstantSource=function(){return new n(this)}}s.default.Signal=function(){var t=s.default.defaults(arguments,["value","units"],s.default.Signal);s.default.Param.call(this,t),this._constantSource=this.context.createConstantSource(),this._constantSource.start(0),this._param=this._constantSource.offset,this.value=t.value,this.output=this._constantSource,this.input=this._param=this.output.offset},s.default.extend(s.default.Signal,s.default.Param),s.default.Signal.defaults={value:0,units:s.default.Type.Default,convert:!0},s.default.Signal.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Signal.prototype.disconnect=s.default.SignalBase.prototype.disconnect,s.default.Signal.prototype.getValueAtTime=function(t){return this._param.getValueAtTime?this._param.getValueAtTime(t):s.default.Param.prototype.getValueAtTime.call(this,t)},s.default.Signal.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._constantSource.stop(),this._constantSource.disconnect(),this._constantSource=null,this};e.default=s.default.Signal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(4),i(1);s.default.Gain=function(){var t=s.default.defaults(arguments,["gain","units"],s.default.Gain);s.default.AudioNode.call(this,t),this.input=this.output=this._gainNode=this.context.createGain(),this.gain=new s.default.Param({param:this._gainNode.gain,units:t.units,value:t.gain,convert:t.convert}),this._readOnly("gain")},s.default.extend(s.default.Gain,s.default.AudioNode),s.default.Gain.defaults={gain:1,convert:!0},s.default.Gain.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._gainNode.disconnect(),this._gainNode=null,this._writable("gain"),this.gain.dispose(),this.gain=null},e.default=s.default.Gain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63),i(46),i(45),i(20);s.default.Type={Default:"number",Time:"time",Frequency:"frequency",TransportTime:"transportTime",Ticks:"ticks",NormalRange:"normalRange",AudioRange:"audioRange",Decibels:"db",Interval:"interval",BPM:"bpm",Positive:"positive",Gain:"gain",Cents:"cents",Degrees:"degrees",MIDI:"midi",BarsBeatsSixteenths:"barsBeatsSixteenths",Samples:"samples",Hertz:"hertz",Note:"note",Milliseconds:"milliseconds",Seconds:"seconds",Notation:"notation"},s.default.prototype.toSeconds=function(t){return s.default.isNumber(t)?t:s.default.isUndef(t)?this.now():s.default.isString(t)||s.default.isObject(t)?new s.default.Time(t).toSeconds():t instanceof s.default.TimeBase?t.toSeconds():void 0},s.default.prototype.toFrequency=function(t){return s.default.isNumber(t)?t:s.default.isString(t)||s.default.isUndef(t)||s.default.isObject(t)?new s.default.Frequency(t).valueOf():t instanceof s.default.TimeBase?t.toFrequency():void 0},s.default.prototype.toTicks=function(t){return s.default.isNumber(t)||s.default.isString(t)||s.default.isObject(t)?new s.default.TransportTime(t).toTicks():s.default.isUndef(t)?s.default.Transport.ticks:t instanceof s.default.TimeBase?t.toTicks():void 0},e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(3),i(30);s.default.Multiply=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._mult=this.input[0]=this.output=new s.default.Gain,this._param=this.input[1]=this.output.gain,this.value=s.default.defaultArg(t,0)},s.default.extend(s.default.Multiply,s.default.Signal),s.default.Multiply.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._mult.dispose(),this._mult=null,this._param=null,this},e.default=s.default.Multiply},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(27),i(40),i(4),i(34),i(2),i(1);s.default.Source=function(t){t=s.default.defaultArg(t,s.default.Source.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.memory=100,this._synced=!1,this._scheduled=[],this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=t.mute},s.default.extend(s.default.Source,s.default.AudioNode),s.default.Source.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Source.prototype,"state",{get:function(){return this._synced?s.default.Transport.state===s.default.State.Started?this._state.getValueAtTime(s.default.Transport.seconds):s.default.State.Stopped:this._state.getValueAtTime(this.now())}}),Object.defineProperty(s.default.Source.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Source.prototype._start=s.default.noOp,s.default.Source.prototype.restart=s.default.noOp,s.default.Source.prototype._stop=s.default.noOp,s.default.Source.prototype.start=function(t,e,i){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),t=Math.max(t,this.context.currentTime)),this._state.getValueAtTime(t)===s.default.State.Started)this._state.cancel(t),this._state.setStateAtTime(s.default.State.Started,t),this.restart(t,e,i);else if(this._state.setStateAtTime(s.default.State.Started,t),this._synced){var n=this._state.get(t);n.offset=s.default.defaultArg(e,0),n.duration=i;var o=s.default.Transport.schedule(function(t){this._start(t,e,i)}.bind(this),t);this._scheduled.push(o),s.default.Transport.state===s.default.State.Started&&this._syncedStart(this.now(),s.default.Transport.seconds)}else this._start.apply(this,arguments);return this},s.default.Source.prototype.stop=function(t){if(s.default.isUndef(t)&&this._synced?t=s.default.Transport.seconds:(t=this.toSeconds(t),t=Math.max(t,this.context.currentTime)),this._synced){var e=s.default.Transport.schedule(this._stop.bind(this),t);this._scheduled.push(e)}else this._stop.apply(this,arguments);return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this},s.default.Source.prototype.sync=function(){return this._synced=!0,this._syncedStart=function(t,e){if(e>0){var i=this._state.get(e);if(i&&i.state===s.default.State.Started&&i.time!==e){var n,o=e-this.toSeconds(i.time);i.duration&&(n=this.toSeconds(i.duration)-o),this._start(t,this.toSeconds(i.offset)+o,n)}}}.bind(this),this._syncedStop=function(t){var e=s.default.Transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)===s.default.State.Started&&this._stop(t)}.bind(this),s.default.Transport.on("start loopStart",this._syncedStart),s.default.Transport.on("stop pause loopEnd",this._syncedStop),this},s.default.Source.prototype.unsync=function(){this._synced&&(s.default.Transport.off("stop pause loopEnd",this._syncedStop),s.default.Transport.off("start loopStart",this._syncedStart)),this._synced=!1;for(var t=0;t<this._scheduled.length;t++){var e=this._scheduled[t];s.default.Transport.clear(e)}return this._scheduled=[],this._state.cancel(0),this},s.default.Source.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this.unsync(),this._scheduled=null,this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this._state.dispose(),this._state=null},e.default=s.default.Source},function(t,e,i){"use strict";i.r(e);var s=i(0);i(30),i(44);if(s.default.supported&&!s.default.global.AudioContext.prototype._native_createWaveShaper){var n=navigator.userAgent.toLowerCase();if(n.includes("safari")&&!n.includes("chrome")){var o=function(t){for(var e in this._internalNode=this.input=this.output=t._native_createWaveShaper(),this._curve=null,this._internalNode)this._defineProperty(this._internalNode,e)};Object.defineProperty(o.prototype,"curve",{get:function(){return this._curve},set:function(t){this._curve=t;var e=new Float32Array(t.length+1);e.set(t,1),e[0]=t[0],this._internalNode.curve=e}}),o.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return"function"==typeof t[e]?t[e].bind(t):t[e]},set:function(i){t[e]=i}})},s.default.global.AudioContext.prototype._native_createWaveShaper=s.default.global.AudioContext.prototype.createWaveShaper,s.default.global.AudioContext.prototype.createWaveShaper=function(){return new o(this)}}}s.default.WaveShaper=function(t,e){s.default.SignalBase.call(this),this._shaper=this.input=this.output=this.context.createWaveShaper(),this._curve=null,Array.isArray(t)?this.curve=t:isFinite(t)||s.default.isUndef(t)?this._curve=new Float32Array(s.default.defaultArg(t,1024)):s.default.isFunction(t)&&(this._curve=new Float32Array(s.default.defaultArg(e,1024)),this.setMap(t))},s.default.extend(s.default.WaveShaper,s.default.SignalBase),s.default.WaveShaper.prototype.setMap=function(t){for(var e=new Array(this._curve.length),i=0,s=this._curve.length;i<s;i++){var n=i/(s-1)*2-1;e[i]=t(n,i)}return this.curve=e,this},Object.defineProperty(s.default.WaveShaper.prototype,"curve",{get:function(){return this._shaper.curve},set:function(t){this._curve=new Float32Array(t),this._shaper.curve=this._curve}}),Object.defineProperty(s.default.WaveShaper.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){if(!["none","2x","4x"].includes(t))throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");this._shaper.oversample=t}}),s.default.WaveShaper.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.disconnect(),this._shaper=null,this._curve=null,this};e.default=s.default.WaveShaper},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(1);s.default.Effect=function(){var t=s.default.defaults(arguments,["wet"],s.default.Effect);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this.effectSend=new s.default.Gain,this.effectReturn=new s.default.Gain,s.default.connect(this.input,this._dryWet.a),s.default.connect(this.input,this.effectSend),this.effectReturn.connect(this._dryWet.b),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.Effect,s.default.AudioNode),s.default.Effect.defaults={wet:1},s.default.Effect.prototype.connectEffect=function(t){return this.effectSend.chain(t,this.effectReturn),this},s.default.Effect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this.effectSend.dispose(),this.effectSend=null,this.effectReturn.dispose(),this.effectReturn=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.Effect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(1);s.default.Filter=function(){var t=s.default.defaults(arguments,["frequency","type","rolloff"],s.default.Filter);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._filters=[],this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(0,s.default.Type.Cents),this.gain=new s.default.Signal({value:t.gain,convert:!0,type:s.default.Type.Decibels}),this.Q=new s.default.Signal(t.Q),this._type=t.type,this._rolloff=t.rolloff,this.rolloff=t.rolloff,this._readOnly(["detune","frequency","gain","Q"])},s.default.extend(s.default.Filter,s.default.AudioNode),s.default.Filter.defaults={type:"lowpass",frequency:350,rolloff:-12,Q:1,gain:0},Object.defineProperty(s.default.Filter.prototype,"type",{get:function(){return this._type},set:function(t){if(-1===["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t))throw new TypeError("Tone.Filter: invalid type "+t);this._type=t;for(var e=0;e<this._filters.length;e++)this._filters[e].type=t}}),Object.defineProperty(s.default.Filter.prototype,"rolloff",{get:function(){return this._rolloff},set:function(t){t=parseInt(t,10);var e=[-12,-24,-48,-96].indexOf(t);if(-1===e)throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");e+=1,this._rolloff=t,this.input.disconnect();for(var i=0;i<this._filters.length;i++)this._filters[i].disconnect(),this._filters[i]=null;this._filters=new Array(e);for(var n=0;n<e;n++){var o=this.context.createBiquadFilter();o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[n]=o}var a=[this.input].concat(this._filters).concat([this.output]);s.default.connectSeries.apply(s.default,a)}}),s.default.Filter.prototype.getFrequencyResponse=function(t){t=s.default.defaultArg(t,128);for(var e=new Float32Array(t).map(function(){return 1}),i=new Float32Array(t),n=0;n<t;n++){var o=19980*Math.pow(n/t,2)+20;i[n]=o}var a=new Float32Array(t),r=new Float32Array(t);return this._filters.forEach(function(){var t=this.context.createBiquadFilter();t.type=this._type,t.Q.value=this.Q.value,t.frequency.value=this.frequency.value,t.gain.value=this.gain.value,t.getFrequencyResponse(i,a,r),a.forEach(function(t,i){e[i]*=t})}.bind(this)),e},s.default.Filter.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this);for(var t=0;t<this._filters.length;t++)this._filters[t].disconnect(),this._filters[t]=null;return this._filters=null,this._writable(["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.frequency=null,this.Q=null,this.detune.dispose(),this.detune=null,this.gain.dispose(),this.gain=null,this},e.default=s.default.Filter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.Merge=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(t,0),this._merger=this.output=this.context.createChannelMerger(t);for(var e=0;e<t;e++)this.input[e]=new s.default.Gain,this.input[e].connect(this._merger,0,e),this.input[e].channelCount=1,this.input[e].channelCountMode="explicit";this.left=this.input[0],this.right=this.input[1]},s.default.extend(s.default.Merge,s.default.AudioNode),s.default.Merge.prototype.dispose=function(){return this.input.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this.left=null,this.right=null,this._merger.disconnect(),this._merger=null,this},e.default=s.default.Merge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(35),i(4);s.default.supported&&(AudioBuffer.prototype.copyToChannel||(AudioBuffer.prototype.copyToChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<s.length;n++)s[n+i]=t[n]},AudioBuffer.prototype.copyFromChannel=function(t,e,i){var s=this.getChannelData(e);i=i||0;for(var n=0;n<t.length;n++)t[n]=s[n+i]})),s.default.Buffer=function(){var t=s.default.defaults(arguments,["url","onload","onerror"],s.default.Buffer);s.default.call(this),this._buffer=null,this._reversed=t.reverse,this._xhr=null,this.onload=s.default.noOp,t.url instanceof AudioBuffer||t.url instanceof s.default.Buffer?(this.set(t.url),this.loaded||(this.onload=t.onload)):s.default.isString(t.url)&&this.load(t.url).then(t.onload).catch(t.onerror)},s.default.extend(s.default.Buffer),s.default.Buffer.defaults={url:void 0,reverse:!1,onload:s.default.noOp,onerror:s.default.noOp},s.default.Buffer.prototype.set=function(t){return t instanceof s.default.Buffer?t.loaded?this._buffer=t.get():t.onload=function(){this.set(t),this.onload(this)}.bind(this):this._buffer=t,this._reversed&&this._reverse(),this},s.default.Buffer.prototype.get=function(){return this._buffer},s.default.Buffer.prototype.load=function(t,e,i){return new Promise(function(n,o){this._xhr=s.default.Buffer.load(t,function(t){this._xhr=null,this.set(t),n(this),this.onload(this),e&&e(this)}.bind(this),function(t){this._xhr=null,o(t),i&&i(t)}.bind(this))}.bind(this))},s.default.Buffer.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._buffer=null,this._xhr&&(s.default.Buffer._removeFromDownloadQueue(this._xhr),this._xhr.abort(),this._xhr=null),this},Object.defineProperty(s.default.Buffer.prototype,"loaded",{get:function(){return this.length>0}}),Object.defineProperty(s.default.Buffer.prototype,"duration",{get:function(){return this._buffer?this._buffer.duration:0}}),Object.defineProperty(s.default.Buffer.prototype,"length",{get:function(){return this._buffer?this._buffer.length:0}}),Object.defineProperty(s.default.Buffer.prototype,"numberOfChannels",{get:function(){return this._buffer?this._buffer.numberOfChannels:0}}),s.default.Buffer.prototype.fromArray=function(t){var e=t[0].length>0,i=e?t.length:1,s=e?t[0].length:t.length,n=this.context.createBuffer(i,s,this.context.sampleRate);e||1!==i||(t=[t]);for(var o=0;o<i;o++)n.copyToChannel(t[o],o);return this._buffer=n,this},s.default.Buffer.prototype.toMono=function(t){if(s.default.isNumber(t))this.fromArray(this.toArray(t));else{for(var e=new Float32Array(this.length),i=this.numberOfChannels,n=0;n<i;n++)for(var o=this.toArray(n),a=0;a<o.length;a++)e[a]+=o[a];e=e.map(function(t){return t/i}),this.fromArray(e)}return this},s.default.Buffer.prototype.toArray=function(t){if(s.default.isNumber(t))return this.getChannelData(t);if(1===this.numberOfChannels)return this.toArray(0);for(var e=[],i=0;i<this.numberOfChannels;i++)e[i]=this.getChannelData(i);return e},s.default.Buffer.prototype.getChannelData=function(t){return this._buffer.getChannelData(t)},s.default.Buffer.prototype.slice=function(t,e){e=s.default.defaultArg(e,this.duration);for(var i=Math.floor(this.context.sampleRate*this.toSeconds(t)),n=Math.floor(this.context.sampleRate*this.toSeconds(e)),o=[],a=0;a<this.numberOfChannels;a++)o[a]=this.toArray(a).slice(i,n);return(new s.default.Buffer).fromArray(o)},s.default.Buffer.prototype._reverse=function(){if(this.loaded)for(var t=0;t<this.numberOfChannels;t++)Array.prototype.reverse.call(this.getChannelData(t));return this},Object.defineProperty(s.default.Buffer.prototype,"reverse",{get:function(){return this._reversed},set:function(t){this._reversed!==t&&(this._reversed=t,this._reverse())}}),s.default.Emitter.mixin(s.default.Buffer),s.default.Buffer._downloadQueue=[],s.default.Buffer.baseUrl="",s.default.Buffer.fromArray=function(t){return(new s.default.Buffer).fromArray(t)},s.default.Buffer.fromUrl=function(t){var e=new s.default.Buffer;return e.load(t).then(function(){return e})},s.default.Buffer._removeFromDownloadQueue=function(t){var e=s.default.Buffer._downloadQueue.indexOf(t);-1!==e&&s.default.Buffer._downloadQueue.splice(e,1)},s.default.Buffer.load=function(t,e,i){e=s.default.defaultArg(e,s.default.noOp);var n=t.match(/\[(.+\|?)+\]$/);if(n){for(var o=n[1].split("|"),a=o[0],r=0;r<o.length;r++)if(s.default.Buffer.supportsType(o[r])){a=o[r];break}t=t.replace(n[0],a)}function l(t){if(s.default.Buffer._removeFromDownloadQueue(d),s.default.Buffer.emit("error",t),!i)throw t;i(t)}function u(){for(var t=0,e=0;e<s.default.Buffer._downloadQueue.length;e++)t+=s.default.Buffer._downloadQueue[e].progress;s.default.Buffer.emit("progress",t/s.default.Buffer._downloadQueue.length)}var d=new XMLHttpRequest;return d.open("GET",s.default.Buffer.baseUrl+t,!0),d.responseType="arraybuffer",d.progress=0,s.default.Buffer._downloadQueue.push(d),d.addEventListener("load",function(){200===d.status?s.default.context.decodeAudioData(d.response).then(function(t){d.progress=1,u(),e(t),s.default.Buffer._removeFromDownloadQueue(d),0===s.default.Buffer._downloadQueue.length&&s.default.Buffer.emit("load")}).catch(function(){s.default.Buffer._removeFromDownloadQueue(d),l("Tone.Buffer: could not decode audio data: "+t)}):l("Tone.Buffer: could not locate file: "+t)}),d.addEventListener("error",l),d.addEventListener("progress",function(t){t.lengthComputable&&(d.progress=t.loaded/t.total*.95,u())}),d.send(),d},s.default.Buffer.cancelDownloads=function(){return s.default.Buffer._downloadQueue.slice().forEach(function(t){s.default.Buffer._removeFromDownloadQueue(t),t.abort()}),s.default.Buffer},s.default.Buffer.supportsType=function(t){var e=t.split(".");return e=e[e.length-1],""!==document.createElement("audio").canPlayType("audio/"+e)},s.default.loaded=function(){var t,e;function i(){s.default.Buffer.off("load",t),s.default.Buffer.off("error",e)}return new Promise(function(i,n){t=function(){i()},e=function(){n()},s.default.Buffer.on("load",t),s.default.Buffer.on("error",e)}).then(i).catch(function(t){throw i(),new Error(t)})};e.default=s.default.Buffer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(17),i(26),i(1),i(2),i(22),i(4),i(28);s.default.LFO=function(){var t=s.default.defaults(arguments,["frequency","min","max"],s.default.LFO);s.default.AudioNode.call(this),this._oscillator=new s.default.Oscillator({frequency:t.frequency,type:t.type}),this.frequency=this._oscillator.frequency,this.amplitude=this._oscillator.volume,this.amplitude.units=s.default.Type.NormalRange,this.amplitude.value=t.amplitude,this._stoppedSignal=new s.default.Signal(0,s.default.Type.AudioRange),this._zeros=new s.default.Zero,this._stoppedValue=0,this._a2g=new s.default.AudioToGain,this._scaler=this.output=new s.default.Scale(t.min,t.max),this._units=s.default.Type.Default,this.units=t.units,this._oscillator.chain(this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),this._readOnly(["amplitude","frequency"]),this.phase=t.phase},s.default.extend(s.default.LFO,s.default.AudioNode),s.default.LFO.defaults={type:"sine",min:0,max:1,phase:0,frequency:"4n",amplitude:1,units:s.default.Type.Default},s.default.LFO.prototype.start=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this},s.default.LFO.prototype.stop=function(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this},s.default.LFO.prototype.sync=function(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this},s.default.LFO.prototype.unsync=function(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this},Object.defineProperty(s.default.LFO.prototype,"min",{get:function(){return this._toUnits(this._scaler.min)},set:function(t){t=this._fromUnits(t),this._scaler.min=t}}),Object.defineProperty(s.default.LFO.prototype,"max",{get:function(){return this._toUnits(this._scaler.max)},set:function(t){t=this._fromUnits(t),this._scaler.max=t}}),Object.defineProperty(s.default.LFO.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t,this._stoppedValue=this._oscillator._getInitialValue(),this._stoppedSignal.value=this._stoppedValue}}),Object.defineProperty(s.default.LFO.prototype,"units",{get:function(){return this._units},set:function(t){var e=this.min,i=this.max;this._units=t,this.min=e,this.max=i}}),Object.defineProperty(s.default.LFO.prototype,"state",{get:function(){return this._oscillator.state}}),s.default.LFO.prototype.connect=function(t){return t.constructor!==s.default.Signal&&t.constructor!==s.default.Param||(this.convert=t.convert,this.units=t.units),s.default.SignalBase.prototype.connect.apply(this,arguments),this},s.default.LFO.prototype._fromUnits=s.default.Param.prototype._fromUnits,s.default.LFO.prototype._toUnits=s.default.Param.prototype._toUnits,s.default.LFO.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["amplitude","frequency"]),this._oscillator.dispose(),this._oscillator=null,this._stoppedSignal.dispose(),this._stoppedSignal=null,this._zeros.dispose(),this._zeros=null,this._scaler.dispose(),this._scaler=null,this._a2g.dispose(),this._a2g=null,this.frequency=null,this.amplitude=null,this},e.default=s.default.LFO},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(90),i(2),i(3);s.default.Subtract=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.output=new s.default.Gain,this._neg=new s.default.Negate,this._param=this.input[1]=new s.default.Signal(t),this._param.chain(this._neg,this._sum)},s.default.extend(s.default.Subtract,s.default.Signal),s.default.Subtract.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._neg.dispose(),this._neg=null,this._sum.disconnect(),this._sum=null,this},e.default=s.default.Subtract},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(1),i(24);s.default.Param=function(){var t=s.default.defaults(arguments,["param","units","convert"],s.default.Param);s.default.AudioNode.call(this,t),this._param=this.input=t.param,this.units=t.units,this.convert=t.convert,this.overridden=!1,this._events=new s.default.Timeline(1e3),s.default.isDefined(t.value)&&this._param&&this.setValueAtTime(t.value,0)},s.default.extend(s.default.Param,s.default.AudioNode),s.default.Param.defaults={units:s.default.Type.Default,convert:!0,param:void 0},Object.defineProperty(s.default.Param.prototype,"value",{get:function(){var t=this.now();return this._toUnits(this.getValueAtTime(t))},set:function(t){this._initialValue=this._fromUnits(t),this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}}),Object.defineProperty(s.default.Param.prototype,"minValue",{get:function(){return this.units===s.default.Type.Time||this.units===s.default.Type.Frequency||this.units===s.default.Type.NormalRange||this.units===s.default.Type.Positive||this.units===s.default.Type.BPM?0:this.units===s.default.Type.AudioRange?-1:this.units===s.default.Type.Decibels?-1/0:this._param.minValue}}),Object.defineProperty(s.default.Param.prototype,"maxValue",{get:function(){return this.units===s.default.Type.NormalRange||this.units===s.default.Type.AudioRange?1:this._param.maxValue}}),s.default.Param.prototype._fromUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert)||this.overridden)return t;switch(this.units){case s.default.Type.Time:return this.toSeconds(t);case s.default.Type.Frequency:return this.toFrequency(t);case s.default.Type.Decibels:return s.default.dbToGain(t);case s.default.Type.NormalRange:return Math.min(Math.max(t,0),1);case s.default.Type.AudioRange:return Math.min(Math.max(t,-1),1);case s.default.Type.Positive:return Math.max(t,0);default:return t}},s.default.Param.prototype._toUnits=function(t){if(!this.convert&&!s.default.isUndef(this.convert))return t;switch(this.units){case s.default.Type.Decibels:return s.default.gainToDb(t);default:return t}},s.default.Param.prototype._minOutput=1e-5,s.default.Param.AutomationType={Linear:"linearRampToValueAtTime",Exponential:"exponentialRampToValueAtTime",Target:"setTargetAtTime",SetValue:"setValueAtTime",Cancel:"cancelScheduledValues"},s.default.Param.prototype.setValueAtTime=function(t,e){return e=this.toSeconds(e),t=this._fromUnits(t),this._events.add({type:s.default.Param.AutomationType.SetValue,value:t,time:e}),this.log(s.default.Param.AutomationType.SetValue,t,e),this._param.setValueAtTime(t,e),this},s.default.Param.prototype.getValueAtTime=function(t){t=this.toSeconds(t);var e=this._events.getAfter(t),i=this._events.get(t),n=s.default.defaultArg(this._initialValue,this._param.defaultValue),o=n;if(null===i)o=n;else if(i.type===s.default.Param.AutomationType.Target){var a,r=this._events.getBefore(i.time);a=null===r?n:r.value,o=this._exponentialApproach(i.time,a,i.value,i.constant,t)}else o=null===e?i.value:e.type===s.default.Param.AutomationType.Linear?this._linearInterpolate(i.time,i.value,e.time,e.value,t):e.type===s.default.Param.AutomationType.Exponential?this._exponentialInterpolate(i.time,i.value,e.time,e.value,t):i.value;return o},s.default.Param.prototype.setRampPoint=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),0===e&&(e=this._minOutput),this.setValueAtTime(this._toUnits(e),t),this},s.default.Param.prototype.linearRampToValueAtTime=function(t,e){return t=this._fromUnits(t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Linear,value:t,time:e}),this.log(s.default.Param.AutomationType.Linear,t,e),this._param.linearRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampToValueAtTime=function(t,e){return t=this._fromUnits(t),t=Math.max(this._minOutput,t),e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Exponential,time:e,value:t}),this.log(s.default.Param.AutomationType.Exponential,t,e),this._param.exponentialRampToValueAtTime(t,e),this},s.default.Param.prototype.exponentialRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.linearRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.linearRampToValueAtTime(t,i+this.toSeconds(e)),this},s.default.Param.prototype.targetRampTo=function(t,e,i){return i=this.toSeconds(i),this.setRampPoint(i),this.exponentialApproachValueAtTime(t,i,e),this},s.default.Param.prototype.exponentialApproachValueAtTime=function(t,e,i){var s=Math.log(this.toSeconds(i)+1)/Math.log(200);return e=this.toSeconds(e),this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+.9*i),this.linearRampToValueAtTime(t,e+i),this},s.default.Param.prototype.setTargetAtTime=function(t,e,i){if(t=this._fromUnits(t),i<=0)throw new Error("timeConstant must be greater than 0");return e=this.toSeconds(e),this._events.add({type:s.default.Param.AutomationType.Target,value:t,time:e,constant:i}),this.log(s.default.Param.AutomationType.Target,t,e,i),this._param.setTargetAtTime(t,e,i),this},s.default.Param.prototype.setValueCurveAtTime=function(t,e,i,n){n=s.default.defaultArg(n,1),i=this.toSeconds(i),e=this.toSeconds(e),this.setValueAtTime(t[0]*n,e);for(var o=i/(t.length-1),a=1;a<t.length;a++)this.linearRampToValueAtTime(t[a]*n,e+a*o);return this},s.default.Param.prototype.cancelScheduledValues=function(t){return t=this.toSeconds(t),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(s.default.Param.AutomationType.Cancel,t),this},s.default.Param.prototype.cancelAndHoldAtTime=function(t){t=this.toSeconds(t);var e=this.getValueAtTime(t);this.log("cancelAndHoldAtTime",t,"value="+e),this._param.cancelScheduledValues(t);var i=this._events.get(t),n=this._events.getAfter(t);return i&&i.time===t?n?this._events.cancel(n.time):this._events.cancel(t+this.sampleTime):n&&(this._events.cancel(n.time),n.type===s.default.Param.AutomationType.Linear?this.linearRampToValueAtTime(e,t):n.type===s.default.Param.AutomationType.Exponential&&this.exponentialRampToValueAtTime(e,t)),this._events.add({type:s.default.Param.AutomationType.SetValue,value:e,time:t}),this._param.setValueAtTime(e,t),this},s.default.Param.prototype.rampTo=function(t,e,i){return e=s.default.defaultArg(e,.1),this.units===s.default.Type.Frequency||this.units===s.default.Type.BPM||this.units===s.default.Type.Decibels?this.exponentialRampTo(t,e,i):this.linearRampTo(t,e,i),this},s.default.Param.prototype._exponentialApproach=function(t,e,i,s,n){return i+(e-i)*Math.exp(-(n-t)/s)},s.default.Param.prototype._linearInterpolate=function(t,e,i,s,n){return e+(n-t)/(i-t)*(s-e)},s.default.Param.prototype._exponentialInterpolate=function(t,e,i,s,n){return e*Math.pow(s/e,(n-t)/(i-t))},s.default.Param.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._param=null,this._events=null,this},e.default=s.default.Param},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(19),i(10),i(23);s.default.StereoEffect=function(){s.default.AudioNode.call(this);var t=s.default.defaults(arguments,["wet"],s.default.Effect);this.createInsOuts(1,1),this._dryWet=new s.default.CrossFade(t.wet),this.wet=this._dryWet.fade,this._split=new s.default.Split,this.effectSendL=this._split.left,this.effectSendR=this._split.right,this._merge=new s.default.Merge,this.effectReturnL=this._merge.left,this.effectReturnR=this._merge.right,s.default.connect(this.input,this._split),s.default.connect(this.input,this._dryWet,0,0),this._merge.connect(this._dryWet,0,1),this._dryWet.connect(this.output),this._readOnly(["wet"])},s.default.extend(s.default.StereoEffect,s.default.Effect),s.default.StereoEffect.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._dryWet.dispose(),this._dryWet=null,this._split.dispose(),this._split=null,this._merge.dispose(),this._merge=null,this.effectSendL=null,this.effectSendR=null,this.effectReturnL=null,this.effectReturnR=null,this._writable(["wet"]),this.wet=null,this},e.default=s.default.StereoEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(83),i(4),i(24),i(35),i(3),i(81),i(80),i(56);s.default.Transport=function(){s.default.Emitter.call(this),s.default.getContext(function(){this.loop=!1,this._loopStart=0,this._loopEnd=0,this._ppq=n.defaults.PPQ,this._clock=new s.default.Clock({callback:this._processTick.bind(this),frequency:0}),this._bindClockEvents(),this.bpm=this._clock.frequency,this.bpm._toUnits=this._toUnits.bind(this),this.bpm._fromUnits=this._fromUnits.bind(this),this.bpm.units=s.default.Type.BPM,this.bpm.value=n.defaults.bpm,this._readOnly("bpm"),this._timeSignature=n.defaults.timeSignature,this._scheduledEvents={},this._timeline=new s.default.Timeline,this._repeatedEvents=new s.default.IntervalTimeline,this._syncedSignals=[],this._swingTicks=n.defaults.PPQ/2,this._swingAmount=0,this.context.transport=this}.bind(this))},s.default.extend(s.default.Transport,s.default.Emitter),s.default.Transport.defaults={bpm:120,swing:0,swingSubdivision:"8n",timeSignature:4,loopStart:0,loopEnd:"4m",PPQ:192},s.default.Transport.prototype.isTransport=!0,s.default.Transport.prototype._processTick=function(t,e){if(this._swingAmount>0&&e%this._ppq!=0&&e%(2*this._swingTicks)!=0){var i=e%(2*this._swingTicks)/(2*this._swingTicks),n=Math.sin(i*Math.PI)*this._swingAmount;t+=s.default.Ticks(2*this._swingTicks/3).toSeconds()*n}this.loop&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._timeline.forEachAtTime(e,function(e){e.invoke(t)})},s.default.Transport.prototype.schedule=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.scheduleRepeat=function(t,e,i,n){var o=new s.default.TransportRepeatEvent(this,{callback:t,interval:s.default.Time(e),time:s.default.TransportTime(i),duration:s.default.Time(s.default.defaultArg(n,1/0))});return this._addEvent(o,this._repeatedEvents)},s.default.Transport.prototype.scheduleOnce=function(t,e){var i=new s.default.TransportEvent(this,{time:s.default.TransportTime(e),callback:t,once:!0});return this._addEvent(i,this._timeline)},s.default.Transport.prototype.clear=function(t){if(this._scheduledEvents.hasOwnProperty(t)){var e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this},s.default.Transport.prototype._addEvent=function(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id},s.default.Transport.prototype.cancel=function(t){return t=s.default.defaultArg(t,0),t=this.toTicks(t),this._timeline.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this._repeatedEvents.forEachFrom(t,function(t){this.clear(t.id)}.bind(this)),this},s.default.Transport.prototype._bindClockEvents=function(){this._clock.on("start",function(t,e){e=s.default.Ticks(e).toSeconds(),this.emit("start",t,e)}.bind(this)),this._clock.on("stop",function(t){this.emit("stop",t)}.bind(this)),this._clock.on("pause",function(t){this.emit("pause",t)}.bind(this))},Object.defineProperty(s.default.Transport.prototype,"state",{get:function(){return this._clock.getStateAtTime(this.now())}}),s.default.Transport.prototype.start=function(t,e){return s.default.isDefined(e)&&(e=this.toTicks(e)),this._clock.start(t,e),this},s.default.Transport.prototype.stop=function(t){return this._clock.stop(t),this},s.default.Transport.prototype.pause=function(t){return this._clock.pause(t),this},s.default.Transport.prototype.toggle=function(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!==s.default.State.Started?this.start(t):this.stop(t),this},Object.defineProperty(s.default.Transport.prototype,"timeSignature",{get:function(){return this._timeSignature},set:function(t){s.default.isArray(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}}),Object.defineProperty(s.default.Transport.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t)}}),s.default.Transport.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Transport.prototype,"swing",{get:function(){return this._swingAmount},set:function(t){this._swingAmount=t}}),Object.defineProperty(s.default.Transport.prototype,"swingSubdivision",{get:function(){return s.default.Ticks(this._swingTicks).toNotation()},set:function(t){this._swingTicks=this.toTicks(t)}}),Object.defineProperty(s.default.Transport.prototype,"position",{get:function(){var t=this.now(),e=this._clock.getTicksAtTime(t);return s.default.Ticks(e).toBarsBeatsSixteenths()},set:function(t){var e=this.toTicks(t);this.ticks=e}}),Object.defineProperty(s.default.Transport.prototype,"seconds",{get:function(){return this._clock.seconds},set:function(t){var e=this.now(),i=this.bpm.timeToTicks(t,e);this.ticks=i}}),Object.defineProperty(s.default.Transport.prototype,"progress",{get:function(){if(this.loop){var t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}return 0}}),Object.defineProperty(s.default.Transport.prototype,"ticks",{get:function(){return this._clock.ticks},set:function(t){if(this._clock.ticks!==t){var e=this.now();this.state===s.default.State.Started?(this.emit("stop",e),this._clock.setTicksAtTime(t,e),this.emit("start",e,this.seconds)):this._clock.setTicksAtTime(t,e)}}}),s.default.Transport.prototype.getTicksAtTime=function(t){return Math.round(this._clock.getTicksAtTime(t))},s.default.Transport.prototype.getSecondsAtTime=function(t){return this._clock.getSecondsAtTime(t)},Object.defineProperty(s.default.Transport.prototype,"PPQ",{get:function(){return this._ppq},set:function(t){var e=this.bpm.value;this._ppq=t,this.bpm.value=e}}),s.default.Transport.prototype._fromUnits=function(t){return 1/(60/t/this.PPQ)},s.default.Transport.prototype._toUnits=function(t){return t/this.PPQ*60},s.default.Transport.prototype.nextSubdivision=function(t){if(t=this.toTicks(t),this.state!==s.default.State.Started)return 0;var e=this.now(),i=t-this.getTicksAtTime(e)%t;return this._clock.nextTickTime(i,e)},s.default.Transport.prototype.syncSignal=function(t,e){if(!e){var i=this.now();e=0!==t.getValueAtTime(i)?t.getValueAtTime(i)/this.bpm.getValueAtTime(i):0}var n=new s.default.Gain(e);return this.bpm.chain(n,t._param),this._syncedSignals.push({ratio:n,signal:t,initial:t.value}),t.value=0,this},s.default.Transport.prototype.unsyncSignal=function(t){for(var e=this._syncedSignals.length-1;e>=0;e--){var i=this._syncedSignals[e];i.signal===t&&(i.ratio.dispose(),i.signal.value=i.initial,this._syncedSignals.splice(e,1))}return this},s.default.Transport.prototype.dispose=function(){return s.default.Emitter.prototype.dispose.call(this),this._clock.dispose(),this._clock=null,this._writable("bpm"),this.bpm=null,this._timeline.dispose(),this._timeline=null,this._repeatedEvents.dispose(),this._repeatedEvents=null,this};var n=s.default.Transport;s.default.Transport=new n,s.default.Context.on("init",function(t){t.transport&&t.transport.isTransport?s.default.Transport=t.transport:s.default.Transport=new n}),s.default.Context.on("close",function(t){t.transport&&t.transport.isTransport&&t.transport.dispose()}),e.default=s.default.Transport},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(6),i(16),i(64);s.default.Oscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.Oscillator);s.default.Source.call(this,t),this._oscillator=null,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._wave=null,this._partials=t.partials,this._partialCount=t.partialCount,this._phase=t.phase,this._type=t.type,t.partialCount&&t.type!==s.default.Oscillator.Type.Custom&&(this._type=this.baseType+t.partialCount.toString()),this.phase=this._phase,this._readOnly(["frequency","detune"])},s.default.extend(s.default.Oscillator,s.default.Source),s.default.Oscillator.defaults={type:"sine",frequency:440,detune:0,phase:0,partials:[],partialCount:0},s.default.Oscillator.Type={Sine:"sine",Triangle:"triangle",Sawtooth:"sawtooth",Square:"square",Custom:"custom"},s.default.Oscillator.prototype._start=function(t){this.log("start",t);var e=new s.default.OscillatorNode;this._oscillator=e,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),t=this.toSeconds(t),this._oscillator.start(t)},s.default.Oscillator.prototype._stop=function(t){return this.log("stop",t),this._oscillator&&(t=this.toSeconds(t),this._oscillator.stop(t)),this},s.default.Oscillator.prototype.restart=function(t){return this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(this.toSeconds(t)),this},s.default.Oscillator.prototype.syncFrequency=function(){return s.default.Transport.syncSignal(this.frequency),this},s.default.Oscillator.prototype.unsyncFrequency=function(){return s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Oscillator.prototype,"type",{get:function(){return this._type},set:function(t){var e=[s.default.Oscillator.Type.Sine,s.default.Oscillator.Type.Square,s.default.Oscillator.Type.Triangle,s.default.Oscillator.Type.Sawtooth].includes(t);if(0===this._phase&&e)this._wave=null,this._partialCount=0,null!==this._oscillator&&(this._oscillator.type=t);else{var i=this._getRealImaginary(t,this._phase),n=this.context.createPeriodicWave(i[0],i[1]);this._wave=n,null!==this._oscillator&&this._oscillator.setPeriodicWave(this._wave)}this._type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"baseType",{get:function(){return this._type.replace(this.partialCount,"")},set:function(t){this.partialCount&&this._type!==s.default.Oscillator.Type.Custom&&t!==s.default.Oscillator.Type.Custom?this.type=t+this.partialCount:this.type=t}}),Object.defineProperty(s.default.Oscillator.prototype,"partialCount",{get:function(){return this._partialCount},set:function(t){var e=this._type,i=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);i&&(e=i[1]),this._type!==s.default.Oscillator.Type.Custom&&(this.type=0===t?e:e+t.toString())}}),s.default.Oscillator.prototype.get=function(){var t=s.default.prototype.get.apply(this,arguments);return t.type!==s.default.Oscillator.Type.Custom&&delete t.partials,t},s.default.Oscillator.prototype._getRealImaginary=function(t,e){var i=2048,n=new Float32Array(i),o=new Float32Array(i),a=1;if(t===s.default.Oscillator.Type.Custom)a=this._partials.length+1,this._partialCount=this._partials.length,i=a;else{var r=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);r?(a=parseInt(r[2])+1,this._partialCount=parseInt(r[2]),t=r[1],i=a=Math.max(a,2)):this._partialCount=0,this._partials=[]}for(var l=1;l<i;++l){var u,d=2/(l*Math.PI);switch(t){case s.default.Oscillator.Type.Sine:u=l<=a?1:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Square:u=1&l?2*d:0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Sawtooth:u=d*(1&l?1:-1),this._partials[l-1]=u;break;case s.default.Oscillator.Type.Triangle:u=1&l?d*d*2*(l-1>>1&1?-1:1):0,this._partials[l-1]=u;break;case s.default.Oscillator.Type.Custom:u=this._partials[l-1];break;default:throw new TypeError("Tone.Oscillator: invalid type: "+t)}0!==u?(n[l]=-u*Math.sin(e*l),o[l]=u*Math.cos(e*l)):(n[l]=0,o[l]=0)}return[n,o]},s.default.Oscillator.prototype._inverseFFT=function(t,e,i){for(var s=0,n=t.length,o=0;o<n;o++)s+=t[o]*Math.cos(o*i)+e[o]*Math.sin(o*i);return s},s.default.Oscillator.prototype._getInitialValue=function(){for(var t=this._getRealImaginary(this._type,0),e=t[0],i=t[1],s=0,n=2*Math.PI,o=0;o<8;o++)s=Math.max(this._inverseFFT(e,i,o/8*n),s);return-this._inverseFFT(e,i,this._phase)/s},Object.defineProperty(s.default.Oscillator.prototype,"partials",{get:function(){return this._partials},set:function(t){this._partials=t,this.type=s.default.Oscillator.Type.Custom}}),Object.defineProperty(s.default.Oscillator.prototype,"phase",{get:function(){return this._phase*(180/Math.PI)},set:function(t){this._phase=t*Math.PI/180,this.type=this._type}}),s.default.Oscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._oscillator&&(this._oscillator.dispose(),this._oscillator=null),this._wave=null,this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._partials=null,this},e.default=s.default.Oscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Delay=function(){var t=s.default.defaults(arguments,["delayTime","maxDelay"],s.default.Delay);s.default.AudioNode.call(this,t),this._maxDelay=Math.max(this.toSeconds(t.maxDelay),this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(this._maxDelay),this.delayTime=new s.default.Param({param:this._delayNode.delayTime,units:s.default.Type.Time,value:t.delayTime}),this._readOnly("delayTime")},s.default.extend(s.default.Delay,s.default.AudioNode),s.default.Delay.defaults={maxDelay:1,delayTime:0},Object.defineProperty(s.default.Delay.prototype,"maxDelay",{get:function(){return this._maxDelay}}),s.default.Delay.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._delayNode.disconnect(),this._delayNode=null,this._writable("delayTime"),this.delayTime=null,this},e.default=s.default.Delay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Split=function(t){t=s.default.defaultArg(t,2),s.default.AudioNode.call(this),this.createInsOuts(0,t),this._splitter=this.input=this.context.createChannelSplitter(t);for(var e=0;e<t;e++)this.output[e]=new s.default.Gain,s.default.connect(this._splitter,this.output[e],e,0),this.output[e].channelCount=1,this.output[e].channelCountMode="explicit";this.left=this.output[0],this.right=this.output[1]},s.default.extend(s.default.Split,s.default.AudioNode),s.default.Split.prototype.dispose=function(){return this.output.forEach(function(t){t.dispose()}),s.default.AudioNode.prototype.dispose.call(this),this._splitter.disconnect(),this.left=null,this.right=null,this._splitter=null,this},e.default=s.default.Split},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(35),i(24),i(44),["baseLatency","destination","currentTime","sampleRate","listener","state"]),o=["suspend","close","resume","getOutputTimestamp","createMediaElementSource","createMediaStreamSource","createMediaStreamDestination","createBuffer","decodeAudioData","createBufferSource","createConstantSource","createGain","createDelay","createBiquadFilter","createIIRFilter","createWaveShaper","createPanner","createConvolver","createDynamicsCompressor","createAnalyser","createScriptProcessor","createStereoPanner","createOscillator","createPeriodicWave","createChannelSplitter","createChannelMerger","audioWorklet"];s.default.Context=function(){s.default.Emitter.call(this);var t=s.default.defaults(arguments,["context"],s.default.Context);if(!t.context&&(t.context=new s.default.global.AudioContext,!t.context))throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");for(this._context=t.context;this._context.rawContext;)this._context=this._context.rawContext;n.forEach(function(t){this._defineProperty(this._context,t)}.bind(this)),o.forEach(function(t){this._defineMethod(this._context,t)}.bind(this)),this._latencyHint=t.latencyHint,this._constants={},this.lookAhead=t.lookAhead,this._computedUpdateInterval=0,this._ticker=new a(this.emit.bind(this,"tick"),t.clockSource,t.updateInterval),this._timeouts=new s.default.Timeline,this._timeoutIds=0,this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=function(t){this.emit("statechange",t)}.bind(this)},s.default.extend(s.default.Context,s.default.Emitter),s.default.Emitter.mixin(s.default.Context),s.default.Context.defaults={clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.03},s.default.Context.prototype.isContext=!0,s.default.Context.prototype._defineProperty=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e]},set:function(i){t[e]=i}})},s.default.Context.prototype._defineMethod=function(t,e){s.default.isUndef(this[e])&&Object.defineProperty(this,e,{get:function(){return t[e].bind(t)}})},s.default.Context.prototype.now=function(){return this._context.currentTime+this.lookAhead},Object.defineProperty(s.default.Context.prototype,"destination",{get:function(){return this.master?this.master:this._context.destination}}),s.default.Context.prototype.resume=function(){return"suspended"===this._context.state&&this._context instanceof AudioContext?this._context.resume():Promise.resolve()},s.default.Context.prototype.close=function(){var t=Promise.resolve();return this!==s.default.global.TONE_AUDIO_CONTEXT&&(t=this.rawContext.close()),t.then(function(){s.default.Context.emit("close",this)}.bind(this))},s.default.Context.prototype.getConstant=function(t){if(this._constants[t])return this._constants[t];for(var e=this._context.createBuffer(1,128,this._context.sampleRate),i=e.getChannelData(0),s=0;s<i.length;s++)i[s]=t;var n=this._context.createBufferSource();return n.channelCount=1,n.channelCountMode="explicit",n.buffer=e,n.loop=!0,n.start(0),this._constants[t]=n,n},s.default.Context.prototype._timeoutLoop=function(){for(var t=this.now();this._timeouts&&this._timeouts.length&&this._timeouts.peek().time<=t;)this._timeouts.shift().callback()},s.default.Context.prototype.setTimeout=function(t,e){this._timeoutIds++;var i=this.now();return this._timeouts.add({callback:t,time:i+e,id:this._timeoutIds}),this._timeoutIds},s.default.Context.prototype.clearTimeout=function(t){return this._timeouts.forEach(function(e){e.id===t&&this.remove(e)}),this},Object.defineProperty(s.default.Context.prototype,"updateInterval",{get:function(){return this._ticker.updateInterval},set:function(t){this._ticker.updateInterval=t}}),Object.defineProperty(s.default.Context.prototype,"rawContext",{get:function(){return this._context}}),Object.defineProperty(s.default.Context.prototype,"clockSource",{get:function(){return this._ticker.type},set:function(t){this._ticker.type=t}}),Object.defineProperty(s.default.Context.prototype,"latencyHint",{get:function(){return this._latencyHint},set:function(t){var e=t;if(this._latencyHint=t,s.default.isString(t))switch(t){case"interactive":e=.1,this._context.latencyHint=t;break;case"playback":e=.8,this._context.latencyHint=t;break;case"balanced":e=.25,this._context.latencyHint=t;break;case"fastest":this._context.latencyHint="interactive",e=.01}this.lookAhead=e,this.updateInterval=e/3}}),s.default.Context.prototype.dispose=function(){return this.close().then(function(){for(var t in s.default.Emitter.prototype.dispose.call(this),this._ticker.dispose(),this._ticker=null,this._timeouts.dispose(),this._timeouts=null,this._constants)this._constants[t].disconnect();this._constants=null}.bind(this))};var a=function(t,e,i){this._type=e,this._updateInterval=i,this._callback=s.default.defaultArg(t,s.default.noOp),this._createClock()};if(a.Type={Worker:"worker",Timeout:"timeout",Offline:"offline"},a.prototype._createWorker=function(){s.default.global.URL=s.default.global.URL||s.default.global.webkitURL;var t=new Blob(["var timeoutTime = "+(1e3*this._updateInterval).toFixed(1)+";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]),e=URL.createObjectURL(t),i=new Worker(e);i.onmessage=this._callback.bind(this),this._worker=i},a.prototype._createTimeout=function(){this._timeout=setTimeout(function(){this._createTimeout(),this._callback()}.bind(this),1e3*this._updateInterval)},a.prototype._createClock=function(){if(this._type===a.Type.Worker)try{this._createWorker()}catch(t){this._type=a.Type.Timeout,this._createClock()}else this._type===a.Type.Timeout&&this._createTimeout()},Object.defineProperty(a.prototype,"updateInterval",{get:function(){return this._updateInterval},set:function(t){this._updateInterval=Math.max(t,128/44100),this._type===a.Type.Worker&&this._worker.postMessage(Math.max(1e3*t,1))}}),Object.defineProperty(a.prototype,"type",{get:function(){return this._type},set:function(t){this._disposeClock(),this._type=t,this._createClock()}}),a.prototype._disposeClock=function(){this._timeout&&(clearTimeout(this._timeout),this._timeout=null),this._worker&&(this._worker.terminate(),this._worker.onmessage=null,this._worker=null)},a.prototype.dispose=function(){this._disposeClock(),this._callback=null},s.default.supported&&!s.default.initialized){if(s.default.global.TONE_AUDIO_CONTEXT||(s.default.global.TONE_AUDIO_CONTEXT=new s.default.Context),s.default.context=s.default.global.TONE_AUDIO_CONTEXT,!s.default.global.TONE_SILENCE_LOGGING){var r="v";"dev"===s.default.version&&(r="");var l=" * Tone.js "+r+s.default.version+" * ";console.log("%c"+l,"background: #000; color: #fff")}}else s.default.supported||s.default.global.TONE_SILENCE_LOGGING||console.warn("This browser does not support Tone.js");e.default=s.default.Context},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4),i(40);s.default.Instrument=function(t){t=s.default.defaultArg(t,s.default.Instrument.defaults),s.default.AudioNode.call(this),this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._scheduledEvents=[]},s.default.extend(s.default.Instrument,s.default.AudioNode),s.default.Instrument.defaults={volume:0},s.default.Instrument.prototype.triggerAttack=s.default.noOp,s.default.Instrument.prototype.triggerRelease=s.default.noOp,s.default.Instrument.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this},s.default.Instrument.prototype._syncMethod=function(t,e){var i=this["_original_"+t]=this[t];this[t]=function(){var t=Array.prototype.slice.call(arguments),n=t[e],o=s.default.Transport.schedule(function(s){t[e]=s,i.apply(this,t)}.bind(this),n);this._scheduledEvents.push(o)}.bind(this)},s.default.Instrument.prototype.unsync=function(){return this._scheduledEvents.forEach(function(t){s.default.Transport.clear(t)}),this._scheduledEvents=[],this._original_triggerAttack&&(this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this},s.default.Instrument.prototype.triggerAttackRelease=function(t,e,i,s){return i=this.toSeconds(i),e=this.toSeconds(e),this.triggerAttack(t,i,s),this.triggerRelease(i+e),this},s.default.Instrument.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable(["volume"]),this.volume=null,this.unsync(),this._scheduledEvents=null,this},e.default=s.default.Instrument},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.AudioToGain=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return(t+1)/2})},s.default.extend(s.default.AudioToGain,s.default.SignalBase),s.default.AudioToGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.AudioToGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(89),i(3),i(1);s.default.CrossFade=function(t){s.default.AudioNode.call(this),this.createInsOuts(2,1),this.a=this.input[0]=new s.default.Gain,this.b=this.input[1]=new s.default.Gain,this.fade=new s.default.Signal(s.default.defaultArg(t,.5),s.default.Type.NormalRange),this._equalPowerA=new s.default.EqualPowerGain,this._equalPowerB=new s.default.EqualPowerGain,this._one=this.context.getConstant(1),this._invert=new s.default.Subtract,this.a.connect(this.output),this.b.connect(this.output),this.fade.chain(this._equalPowerB,this.b.gain),s.default.connect(this._one,this._invert,0,0),this.fade.connect(this._invert,0,1),this._invert.chain(this._equalPowerA,this.a.gain),this._readOnly("fade")},s.default.extend(s.default.CrossFade,s.default.AudioNode),s.default.CrossFade.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("fade"),this._equalPowerA.dispose(),this._equalPowerA=null,this._equalPowerB.dispose(),this._equalPowerB=null,this.fade.dispose(),this.fade=null,this._invert.dispose(),this._invert=null,this._one=null,this.a.dispose(),this.a=null,this.b.dispose(),this.b=null,this},e.default=s.default.CrossFade},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Timeline=function(){var t=s.default.defaults(arguments,["memory"],s.default.Timeline);s.default.call(this),this._timeline=[],this.memory=t.memory},s.default.extend(s.default.Timeline),s.default.Timeline.defaults={memory:1/0},Object.defineProperty(s.default.Timeline.prototype,"length",{get:function(){return this._timeline.length}}),s.default.Timeline.prototype.add=function(t){if(s.default.isUndef(t.time))throw new Error("Tone.Timeline: events must have a time attribute");t.time=t.time.valueOf();var e=this._search(t.time);if(this._timeline.splice(e+1,0,t),this.length>this.memory){var i=this.length-this.memory;this._timeline.splice(0,i)}return this},s.default.Timeline.prototype.remove=function(t){var e=this._timeline.indexOf(t);return-1!==e&&this._timeline.splice(e,1),this},s.default.Timeline.prototype.get=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return-1!==i?this._timeline[i]:null},s.default.Timeline.prototype.peek=function(){return this._timeline[0]},s.default.Timeline.prototype.shift=function(){return this._timeline.shift()},s.default.Timeline.prototype.getAfter=function(t,e){e=s.default.defaultArg(e,"time");var i=this._search(t,e);return i+1<this._timeline.length?this._timeline[i+1]:null},s.default.Timeline.prototype.getBefore=function(t,e){e=s.default.defaultArg(e,"time");var i=this._timeline.length;if(i>0&&this._timeline[i-1][e]<t)return this._timeline[i-1];var n=this._search(t,e);return n-1>=0?this._timeline[n-1]:null},s.default.Timeline.prototype.cancel=function(t){if(this._timeline.length>1){var e=this._search(t);if(e>=0)if(this._timeline[e].time===t){for(var i=e;i>=0&&this._timeline[i].time===t;i--)e=i;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else 1===this._timeline.length&&this._timeline[0].time>=t&&(this._timeline=[]);return this},s.default.Timeline.prototype.cancelBefore=function(t){var e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this},s.default.Timeline.prototype.previousEvent=function(t){var e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null},s.default.Timeline.prototype._search=function(t,e){if(0===this._timeline.length)return-1;e=s.default.defaultArg(e,"time");var i=0,n=this._timeline.length,o=n;if(n>0&&this._timeline[n-1][e]<=t)return n-1;for(;i<o;){var a=Math.floor(i+(o-i)/2),r=this._timeline[a],l=this._timeline[a+1];if(r[e]===t){for(var u=a;u<this._timeline.length;u++){this._timeline[u][e]===t&&(a=u)}return a}if(r[e]<t&&l[e]>t)return a;r[e]>t?o=a:i=a+1}return-1},s.default.Timeline.prototype._iterate=function(t,e,i){e=s.default.defaultArg(e,0),i=s.default.defaultArg(i,this._timeline.length-1),this._timeline.slice(e,i+1).forEach(function(e){t.call(this,e)}.bind(this))},s.default.Timeline.prototype.forEach=function(t){return this._iterate(t),this},s.default.Timeline.prototype.forEachBefore=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(e,0,i),this},s.default.Timeline.prototype.forEachAfter=function(t,e){var i=this._search(t);return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachBetween=function(t,e,i){var s=this._search(t),n=this._search(e);return-1!==s&&-1!==n?(this._timeline[s].time!==t&&(s+=1),this._timeline[n].time===e&&(n-=1),this._iterate(i,s,n)):-1===s&&this._iterate(i,0,n),this},s.default.Timeline.prototype.forEachFrom=function(t,e){for(var i=this._search(t);i>=0&&this._timeline[i].time>=t;)i--;return this._iterate(e,i+1),this},s.default.Timeline.prototype.forEachAtTime=function(t,e){var i=this._search(t);return-1!==i&&this._iterate(function(i){i.time===t&&e.call(this,i)},0,i),this},s.default.Timeline.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._timeline=null,this},e.default=s.default.Timeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(2);s.default.Monophonic=function(t){t=s.default.defaultArg(t,s.default.Monophonic.defaults),s.default.Instrument.call(this,t),this.portamento=t.portamento},s.default.extend(s.default.Monophonic,s.default.Instrument),s.default.Monophonic.defaults={portamento:0},s.default.Monophonic.prototype.triggerAttack=function(t,e,i){return this.log("triggerAttack",t,e,i),e=this.toSeconds(e),this._triggerEnvelopeAttack(e,i),this.setNote(t,e),this},s.default.Monophonic.prototype.triggerRelease=function(t){return this.log("triggerRelease",t),t=this.toSeconds(t),this._triggerEnvelopeRelease(t),this},s.default.Monophonic.prototype._triggerEnvelopeAttack=function(){},s.default.Monophonic.prototype._triggerEnvelopeRelease=function(){},s.default.Monophonic.prototype.getLevelAtTime=function(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)},s.default.Monophonic.prototype.setNote=function(t,e){if(e=this.toSeconds(e),this.portamento>0&&this.getLevelAtTime(e)>.05){var i=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(t,i,e)}else this.frequency.setValueAtTime(t,e);return this},e.default=s.default.Monophonic},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5),i(2);s.default.Scale=function(t,e){s.default.SignalBase.call(this),this._outputMin=s.default.defaultArg(t,0),this._outputMax=s.default.defaultArg(e,1),this._scale=this.input=new s.default.Multiply(1),this._add=this.output=new s.default.Add(0),this._scale.connect(this._add),this._setRange()},s.default.extend(s.default.Scale,s.default.SignalBase),Object.defineProperty(s.default.Scale.prototype,"min",{get:function(){return this._outputMin},set:function(t){this._outputMin=t,this._setRange()}}),Object.defineProperty(s.default.Scale.prototype,"max",{get:function(){return this._outputMax},set:function(t){this._outputMax=t,this._setRange()}}),s.default.Scale.prototype._setRange=function(){this._add.value=this._outputMin,this._scale.value=this._outputMax-this._outputMin},s.default.Scale.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._add.dispose(),this._add=null,this._scale.dispose(),this._scale=null,this},e.default=s.default.Scale},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3),i(1);s.default.Volume=function(){var t=s.default.defaults(arguments,["volume"],s.default.Volume);s.default.AudioNode.call(this,t),this.output=this.input=new s.default.Gain(t.volume,s.default.Type.Decibels),this._unmutedVolume=t.volume,this.volume=this.output.gain,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.Volume,s.default.AudioNode),s.default.Volume.defaults={volume:0,mute:!1},Object.defineProperty(s.default.Volume.prototype,"mute",{get:function(){return this.volume.value===-1/0},set:function(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}}),s.default.Volume.prototype.dispose=function(){return this.input.dispose(),s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this.volume.dispose(),this.volume=null,this},e.default=s.default.Volume},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(30);s.default.Zero=function(){s.default.SignalBase.call(this),this._gain=this.input=this.output=new s.default.Gain,s.default.connect(this.context.getConstant(0),this._gain)},s.default.extend(s.default.Zero,s.default.SignalBase),s.default.Zero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._gain.dispose(),this._gain=null,this},e.default=s.default.Zero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(3);s.default.Add=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._sum=this.input[0]=this.input[1]=this.output=new s.default.Gain,this._param=this.input[1]=new s.default.Signal(t),this._param.connect(this._sum)},s.default.extend(s.default.Add,s.default.Signal),s.default.Add.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._sum.dispose(),this._sum=null,this},e.default=s.default.Add},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1);s.default.SignalBase=function(){s.default.AudioNode.call(this)},s.default.extend(s.default.SignalBase,s.default.AudioNode),s.default.SignalBase.prototype.connect=function(t,e,i){return s.default.Signal&&s.default.Signal===t.constructor||s.default.Param&&s.default.Param===t.constructor?(t._param.cancelScheduledValues(0),t._param.setValueAtTime(0,0),t.overridden=!0):t instanceof AudioParam&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0)),s.default.AudioNode.prototype.connect.call(this,t,e,i),this},e.default=s.default.SignalBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(3);s.default.AmplitudeEnvelope=function(){s.default.Envelope.apply(this,arguments),this.input=this.output=new s.default.Gain,this._sig.connect(this.output.gain)},s.default.extend(s.default.AmplitudeEnvelope,s.default.Envelope),s.default.AmplitudeEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this},e.default=s.default.AmplitudeEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.BufferSource=function(){var t=s.default.defaults(arguments,["buffer","onload"],s.default.BufferSource);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._sourceStarted=!1,this._sourceStopped=!1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._source=this.context.createBufferSource(),s.default.connect(this._source,this._gainNode),this._source.onended=this._onended.bind(this),this._buffer=new s.default.Buffer(t.buffer,t.onload),this.playbackRate=new s.default.Param({param:this._source.playbackRate,units:s.default.Type.Positive,value:t.playbackRate}),this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut,this.curve=t.curve,this._onendedTimeout=-1,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd},s.default.extend(s.default.BufferSource,s.default.AudioNode),s.default.BufferSource.defaults={onended:s.default.noOp,onload:s.default.noOp,loop:!1,loopStart:0,loopEnd:0,fadeIn:0,fadeOut:0,curve:"linear",playbackRate:1},Object.defineProperty(s.default.BufferSource.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.BufferSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&this._startTime<=t&&(-1===this._stopTime||t<this._stopTime)&&!this._sourceStopped?s.default.State.Started:s.default.State.Stopped},s.default.BufferSource.prototype.start=function(t,e,i,n){this.log("start",t,e,i,n),this.assert(-1===this._startTime,"can only be started once"),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),e=this.loop?s.default.defaultArg(e,this.loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),e=Math.max(e,0),n=s.default.defaultArg(n,1);var o=this.toSeconds(this.fadeIn);if(o>0?(this._gainNode.gain.setValueAtTime(0,t),"linear"===this.curve?this._gainNode.gain.linearRampToValueAtTime(n,t+o):this._gainNode.gain.exponentialApproachValueAtTime(n,t,o)):this._gainNode.gain.setValueAtTime(n,t),this._startTime=t,s.default.isDefined(i)){var a=this.toSeconds(i);a=Math.max(a,0),this.stop(t+a)}if(this.loop){var r=this.loopEnd||this.buffer.duration,l=this.loopStart;e>=r&&(e=(e-l)%(r-l)+l)}return this._source.buffer=this.buffer.get(),this._source.loopEnd=this.loopEnd||this.buffer.duration,e<this.buffer.duration&&(this._sourceStarted=!0,this._source.start(t,e)),this},s.default.BufferSource.prototype.stop=function(t){this.log("stop",t),this.assert(this.buffer.loaded,"buffer is either not set or not loaded"),this.assert(!this._sourceStopped,"source is already stopped"),t=this.toSeconds(t),-1!==this._stopTime&&this.cancelStop();var e=this.toSeconds(this.fadeOut);return this._stopTime=t+e,e>0?"linear"===this.curve?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),s.default.context.clearTimeout(this._onendedTimeout),this._onendedTimeout=s.default.context.setTimeout(this._onended.bind(this),this._stopTime-this.now()),this},s.default.BufferSource.prototype.cancelStop=function(){if(-1!==this._startTime&&!this._sourceStopped){var t=this.toSeconds(this.fadeIn);this._gainNode.gain.cancelScheduledValues(this._startTime+t+this.sampleTime),this.context.clearTimeout(this._onendedTimeout),this._stopTime=-1}return this},s.default.BufferSource.prototype._onended=function(){if(!this._sourceStopped){this._sourceStopped=!0;var t="exponential"===this.curve?2*this.fadeOut:0;this._sourceStarted&&-1!==this._stopTime&&this._source.stop(this._stopTime+t),this.onended(this),setTimeout(function(){this._source&&(this._source.disconnect(),this._gainNode.disconnect())}.bind(this),1e3*t+100)}},Object.defineProperty(s.default.BufferSource.prototype,"loopStart",{get:function(){return this._source.loopStart},set:function(t){this._source.loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loopEnd",{get:function(){return this._source.loopEnd},set:function(t){this._source.loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.BufferSource.prototype,"loop",{get:function(){return this._source.loop},set:function(t){this._source.loop=t,this.cancelStop()}}),s.default.BufferSource.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._source.onended=null,this._source.disconnect(),this._source=null,this._gainNode.dispose(),this._gainNode=null,this._buffer.dispose(),this._buffer=null,this._startTime=-1,this.playbackRate=null,s.default.context.clearTimeout(this._onendedTimeout)),this},e.default=s.default.BufferSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(2),i(5),i(3);s.default.FeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.Effect.call(this,t),this._feedbackGain=new s.default.Gain(t.feedback,s.default.Type.NormalRange),this.feedback=this._feedbackGain.gain,this.effectReturn.chain(this._feedbackGain,this.effectSend),this._readOnly(["feedback"])},s.default.extend(s.default.FeedbackEffect,s.default.Effect),s.default.FeedbackEffect.defaults={feedback:.125},s.default.FeedbackEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._writable(["feedback"]),this._feedbackGain.dispose(),this._feedbackGain=null,this.feedback=null,this},e.default=s.default.FeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24),i(4);s.default.TimelineState=function(t){s.default.Timeline.call(this),this._initial=t},s.default.extend(s.default.TimelineState,s.default.Timeline),s.default.TimelineState.prototype.getValueAtTime=function(t){var e=this.get(t);return null!==e?e.state:this._initial},s.default.TimelineState.prototype.setStateAtTime=function(t,e){return this.add({state:t,time:e}),this},s.default.TimelineState.prototype.getLastState=function(t,e){e=this.toSeconds(e);for(var i=this._search(e);i>=0;i--){var s=this._timeline[i];if(s.state===t)return s}},s.default.TimelineState.prototype.getNextState=function(t,e){e=this.toSeconds(e);var i=this._search(e);if(-1!==i)for(var s=i;s<this._timeline.length;s++){var n=this._timeline[s];if(n.state===t)return n}},e.default=s.default.TimelineState},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.Emitter=function(){s.default.call(this),this._events={}},s.default.extend(s.default.Emitter),s.default.Emitter.prototype.on=function(t,e){for(var i=t.split(/\W+/),s=0;s<i.length;s++){var n=i[s];this._events.hasOwnProperty(n)||(this._events[n]=[]),this._events[n].push(e)}return this},s.default.Emitter.prototype.once=function(t,e){var i=function(){e.apply(this,arguments),this.off(t,i)}.bind(this);return this.on(t,i),this},s.default.Emitter.prototype.off=function(t,e){for(var i=t.split(/\W+/),n=0;n<i.length;n++)if(t=i[n],this._events.hasOwnProperty(t))if(s.default.isUndef(e))this._events[t]=[];else for(var o=this._events[t],a=0;a<o.length;a++)o[a]===e&&o.splice(a,1);return this},s.default.Emitter.prototype.emit=function(t){if(this._events){var e=Array.apply(null,arguments).slice(1);if(this._events.hasOwnProperty(t))for(var i=this._events[t].slice(0),s=0,n=i.length;s<n;s++)i[s].apply(this,e)}return this},s.default.Emitter.mixin=function(t){var e=["on","once","off","emit"];t._events={};for(var i=0;i<e.length;i++){var n=e[i],o=s.default.Emitter.prototype[n];t[n]=o}return s.default.Emitter},s.default.Emitter.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this._events=null,this},e.default=s.default.Emitter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(1),i(44);s.default.supported&&(AnalyserNode.prototype.getFloatTimeDomainData||(AnalyserNode.prototype.getFloatTimeDomainData=function(t){var e=new Uint8Array(t.length);this.getByteTimeDomainData(e);for(var i=0;i<e.length;i++)t[i]=(e[i]-128)/128})),s.default.Analyser=function(){var t=s.default.defaults(arguments,["type","size"],s.default.Analyser);s.default.AudioNode.call(this),this._analyser=this.input=this.output=this.context.createAnalyser(),this._type=t.type,this._buffer=null,this.size=t.size,this.type=t.type},s.default.extend(s.default.Analyser,s.default.AudioNode),s.default.Analyser.defaults={size:1024,type:"fft",smoothing:.8},s.default.Analyser.Type={Waveform:"waveform",FFT:"fft"},s.default.Analyser.prototype.getValue=function(){return this._type===s.default.Analyser.Type.FFT?this._analyser.getFloatFrequencyData(this._buffer):this._type===s.default.Analyser.Type.Waveform&&this._analyser.getFloatTimeDomainData(this._buffer),this._buffer},Object.defineProperty(s.default.Analyser.prototype,"size",{get:function(){return this._analyser.frequencyBinCount},set:function(t){this._analyser.fftSize=2*t,this._buffer=new Float32Array(t)}}),Object.defineProperty(s.default.Analyser.prototype,"type",{get:function(){return this._type},set:function(t){if(t!==s.default.Analyser.Type.Waveform&&t!==s.default.Analyser.Type.FFT)throw new TypeError("Tone.Analyser: invalid type: "+t);this._type=t}}),Object.defineProperty(s.default.Analyser.prototype,"smoothing",{get:function(){return this._analyser.smoothingTimeConstant},set:function(t){this._analyser.smoothingTimeConstant=t}}),s.default.Analyser.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.disconnect(),this._analyser=null,this._buffer=null};e.default=s.default.Analyser},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(50),i(69),i(49),i(68),i(67);s.default.OmniOscillator=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OmniOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._sourceType=void 0,this._oscillator=null,this.type=t.type,this._readOnly(["frequency","detune"]),this.set(t)},s.default.extend(s.default.OmniOscillator,s.default.Source),s.default.OmniOscillator.defaults={frequency:440,detune:0,type:"sine",phase:0};var n="PulseOscillator",o="PWMOscillator",a="Oscillator",r="FMOscillator",l="AMOscillator",u="FatOscillator";s.default.OmniOscillator.prototype._start=function(t){this._oscillator.start(t)},s.default.OmniOscillator.prototype._stop=function(t){this._oscillator.stop(t)},s.default.OmniOscillator.prototype.restart=function(t){this._oscillator.restart(t)},Object.defineProperty(s.default.OmniOscillator.prototype,"type",{get:function(){var t="";return this._sourceType===r?t="fm":this._sourceType===l?t="am":this._sourceType===u&&(t="fat"),t+this._oscillator.type},set:function(t){"fm"===t.substr(0,2)?(this._createNewOscillator(r),this._oscillator.type=t.substr(2)):"am"===t.substr(0,2)?(this._createNewOscillator(l),this._oscillator.type=t.substr(2)):"fat"===t.substr(0,3)?(this._createNewOscillator(u),this._oscillator.type=t.substr(3)):"pwm"===t?this._createNewOscillator(o):"pulse"===t?this._createNewOscillator(n):(this._createNewOscillator(a),this._oscillator.type=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partials",{get:function(){return this._oscillator.partials},set:function(t){this._oscillator.partials=t}}),Object.defineProperty(s.default.OmniOscillator.prototype,"partialCount",{get:function(){return this._oscillator.partialCount},set:function(t){this._oscillator.partialCount=t}}),s.default.OmniOscillator.prototype.set=function(t,e){return"type"===t?this.type=e:s.default.isObject(t)&&t.hasOwnProperty("type")&&(this.type=t.type),s.default.prototype.set.apply(this,arguments),this},s.default.OmniOscillator.prototype.get=function(t){var e=this._oscillator.get(t);return e.type=this.type,e},s.default.OmniOscillator.prototype._createNewOscillator=function(t){if(t!==this._sourceType){this._sourceType=t;var e=s.default[t],i=this.now();if(null!==this._oscillator){var n=this._oscillator;n.stop(i),this.context.setTimeout(function(){n.dispose(),n=null},this.blockTime)}this._oscillator=new e,this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this.state===s.default.State.Started&&this._oscillator.start(i)}},Object.defineProperty(s.default.OmniOscillator.prototype,"phase",{get:function(){return this._oscillator.phase},set:function(t){this._oscillator.phase=t}});var d={PulseOscillator:"pulse",PWMOscillator:"pwm",Oscillator:"oscillator",FMOscillator:"fm",AMOscillator:"am",FatOscillator:"fat"};Object.defineProperty(s.default.OmniOscillator.prototype,"sourceType",{get:function(){return d[this._sourceType]},set:function(t){var e="sine";"pwm"!==this._oscillator.type&&"pulse"!==this._oscillator.type&&(e=this._oscillator.type),t===d.FMOscillator?this.type="fm"+e:t===d.AMOscillator?this.type="am"+e:t===d.FatOscillator?this.type="fat"+e:t===d.Oscillator?this.type=e:t===d.PulseOscillator?this.type="pulse":t===d.PWMOscillator&&(this.type="pwm")}}),Object.defineProperty(s.default.OmniOscillator.prototype,"baseType",{get:function(){return this._oscillator.baseType},set:function(t){this.sourceType!==d.PulseOscillator&&this.sourceType!==d.PWMOscillator&&(this._oscillator.baseType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"width",{get:function(){return this._sourceType===n?this._oscillator.width:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"count",{get:function(){return this._sourceType===u?this._oscillator.count:void 0},set:function(t){this._sourceType===u&&(this._oscillator.count=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"spread",{get:function(){return this._sourceType===u?this._oscillator.spread:void 0},set:function(t){this._sourceType===u&&(this._oscillator.spread=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationType",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.modulationType:void 0},set:function(t){this._sourceType!==r&&this._sourceType!==l||(this._oscillator.modulationType=t)}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationIndex",{get:function(){return this._sourceType===r?this._oscillator.modulationIndex:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"harmonicity",{get:function(){return this._sourceType===r||this._sourceType===l?this._oscillator.harmonicity:void 0}}),Object.defineProperty(s.default.OmniOscillator.prototype,"modulationFrequency",{get:function(){return this._sourceType===o?this._oscillator.modulationFrequency:void 0}}),s.default.OmniOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.detune.dispose(),this.detune=null,this.frequency.dispose(),this.frequency=null,this._oscillator.dispose(),this._oscillator=null,this._sourceType=null,this},e.default=s.default.OmniOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(37),i(25);s.default.Synth=function(t){t=s.default.defaultArg(t,s.default.Synth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","frequency","detune","envelope"])},s.default.extend(s.default.Synth,s.default.Monophonic),s.default.Synth.defaults={oscillator:{type:"triangle"},envelope:{attack:.005,decay:.1,sustain:.3,release:1}},s.default.Synth.prototype._triggerEnvelopeAttack=function(t,e){return this.envelope.triggerAttack(t,e),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this},s.default.Synth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release)),this},s.default.Synth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.frequency=null,this.detune=null,this},e.default=s.default.Synth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.Noise=function(){var t=s.default.defaults(arguments,["type"],s.default.Noise);s.default.Source.call(this,t),this._source=null,this._type=t.type,this._playbackRate=t.playbackRate},s.default.extend(s.default.Noise,s.default.Source),s.default.Noise.defaults={type:"white",playbackRate:1},Object.defineProperty(s.default.Noise.prototype,"type",{get:function(){return this._type},set:function(t){if(this._type!==t){if(!(t in n))throw new TypeError("Tone.Noise: invalid type: "+t);if(this._type=t,this.state===s.default.State.Started){var e=this.now();this._stop(e),this._start(e)}}}}),Object.defineProperty(s.default.Noise.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}}),s.default.Noise.prototype._start=function(t){var e=n[this._type];this._source=new s.default.BufferSource(e).connect(this.output),this._source.loop=!0,this._source.playbackRate.value=this._playbackRate,this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))},s.default.Noise.prototype._stop=function(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)},s.default.Noise.prototype.restart=function(t){return this._stop(t),this._start(t),this},s.default.Noise.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),null!==this._source&&(this._source.disconnect(),this._source=null),this._buffer=null,this};var n={},o={};Object.defineProperty(n,"pink",{get:function(){if(!o.pink){for(var t=[],e=0;e<2;e++){var i,n,a,r,l,u,d,f=new Float32Array(220500);t[e]=f,i=n=a=r=l=u=d=0;for(var h=0;h<220500;h++){var c=2*Math.random()-1;i=.99886*i+.0555179*c,n=.99332*n+.0750759*c,a=.969*a+.153852*c,r=.8665*r+.3104856*c,l=.55*l+.5329522*c,u=-.7616*u-.016898*c,f[h]=i+n+a+r+l+u+d+.5362*c,f[h]*=.11,d=.115926*c}}o.pink=(new s.default.Buffer).fromArray(t)}return o.pink}}),Object.defineProperty(n,"brown",{get:function(){if(!o.brown){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0,a=0;a<220500;a++){var r=2*Math.random()-1;i[a]=(n+.02*r)/1.02,n=i[a],i[a]*=3.5}}o.brown=(new s.default.Buffer).fromArray(t)}return o.brown}}),Object.defineProperty(n,"white",{get:function(){if(!o.white){for(var t=[],e=0;e<2;e++){var i=new Float32Array(220500);t[e]=i;for(var n=0;n<220500;n++)i[n]=2*Math.random()-1}o.white=(new s.default.Buffer).fromArray(t)}return o.white}}),e.default=s.default.Noise},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(20),i(1);s.default.Master=function(){s.default.AudioNode.call(this),s.default.getContext(function(){this.createInsOuts(1,0),this._volume=this.output=new s.default.Volume,this.volume=this._volume.volume,this._readOnly("volume"),s.default.connectSeries(this.input,this.output,this.context.destination),this.context.master=this}.bind(this))},s.default.extend(s.default.Master,s.default.AudioNode),s.default.Master.defaults={volume:0,mute:!1},s.default.Master.prototype.isMaster=!0,Object.defineProperty(s.default.Master.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.Master.prototype.chain=function(){this.input.disconnect();var t=Array.from(arguments);t.unshift(this.input),t.push(this.output),s.default.connectSeries.apply(void 0,t)},s.default.Master.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null},s.default.AudioNode.prototype.toMaster=function(){return this.connect(this.context.master),this};var n=s.default.Master;s.default.Master=new n,s.default.Context.on("init",function(t){t.master&&t.master.isMaster?s.default.Master=t.master:s.default.Master=new n}),s.default.Context.on("close",function(t){t.master&&t.master.isMaster&&t.master.dispose()}),e.default=s.default.Master},function(t,e,i){"use strict";i.r(e);var s=i(0);i(86),i(47);s.default.FrequencyEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);t=s.default.defaultArg(t,s.default.FrequencyEnvelope.defaults),s.default.ScaledEnvelope.call(this,t),this._octaves=t.octaves,this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this.exponent=t.exponent},s.default.extend(s.default.FrequencyEnvelope,s.default.Envelope),s.default.FrequencyEnvelope.defaults={baseFrequency:200,octaves:4,exponent:1},Object.defineProperty(s.default.FrequencyEnvelope.prototype,"baseFrequency",{get:function(){return this._scale.min},set:function(t){this._scale.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._scale.max=this.baseFrequency*Math.pow(2,t)}}),Object.defineProperty(s.default.FrequencyEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.FrequencyEnvelope.prototype.dispose=function(){return s.default.ScaledEnvelope.prototype.dispose.call(this),this},e.default=s.default.FrequencyEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(26),i(61);s.default.ScaleExp=function(t,e,i){s.default.SignalBase.call(this),this._scale=this.output=new s.default.Scale(t,e),this._exp=this.input=new s.default.Pow(s.default.defaultArg(i,2)),this._exp.connect(this._scale)},s.default.extend(s.default.ScaleExp,s.default.SignalBase),Object.defineProperty(s.default.ScaleExp.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaleExp.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),s.default.ScaleExp.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaleExp},function(t,e,i){"use strict";i.r(e);var s=i(0);i(14),i(1);s.default.Compressor=function(){var t=s.default.defaults(arguments,["threshold","ratio"],s.default.Compressor);s.default.AudioNode.call(this),this._compressor=this.input=this.output=this.context.createDynamicsCompressor(),this.threshold=new s.default.Param({param:this._compressor.threshold,units:s.default.Type.Decibels,convert:!1}),this.attack=new s.default.Param(this._compressor.attack,s.default.Type.Time),this.release=new s.default.Param(this._compressor.release,s.default.Type.Time),this.knee=new s.default.Param({param:this._compressor.knee,units:s.default.Type.Decibels,convert:!1}),this.ratio=new s.default.Param({param:this._compressor.ratio,convert:!1}),this._readOnly(["knee","release","attack","ratio","threshold"]),this.set(t)},s.default.extend(s.default.Compressor,s.default.AudioNode),s.default.Compressor.defaults={ratio:12,threshold:-24,release:.25,attack:.003,knee:30},s.default.Compressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["knee","release","attack","ratio","threshold"]),this._compressor.disconnect(),this._compressor=null,this.attack.dispose(),this.attack=null,this.release.dispose(),this.release=null,this.threshold.dispose(),this.threshold=null,this.ratio.dispose(),this.ratio=null,this.knee.dispose(),this.knee=null,this},e.default=s.default.Compressor},function(t,e,i){"use strict";var s=i(0);i(92);if(s.default.supported){!s.default.global.hasOwnProperty("AudioContext")&&s.default.global.hasOwnProperty("webkitAudioContext")&&(s.default.global.AudioContext=s.default.global.webkitAudioContext),AudioContext.prototype.close||(AudioContext.prototype.close=function(){return s.default.isFunction(this.suspend)&&this.suspend(),Promise.resolve()}),AudioContext.prototype.resume||(AudioContext.prototype.resume=function(){var t=this.createBuffer(1,1,this.sampleRate),e=this.createBufferSource();return e.buffer=t,e.connect(this.destination),e.start(0),Promise.resolve()}),!AudioContext.prototype.createGain&&AudioContext.prototype.createGainNode&&(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),!AudioContext.prototype.createDelay&&AudioContext.prototype.createDelayNode&&(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode);var n=!1,o=new OfflineAudioContext(1,1,44100),a=new Uint32Array([1179011410,48,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,8,0,0,0,0]).buffer;try{var r=o.decodeAudioData(a);r&&s.default.isFunction(r.then)&&(n=!0)}catch(t){n=!1}n||(AudioContext.prototype._native_decodeAudioData=AudioContext.prototype.decodeAudioData,AudioContext.prototype.decodeAudioData=function(t){return new Promise(function(e,i){this._native_decodeAudioData(t,e,i)}.bind(this))})}},function(t,e,i){"use strict";i.r(e);var s=i(0);i(63);s.default.TransportTime=function(t,e){if(!(this instanceof s.default.TransportTime))return new s.default.TransportTime(t,e);s.default.Time.call(this,t,e)},s.default.extend(s.default.TransportTime,s.default.Time),s.default.TransportTime.prototype._now=function(){return s.default.Transport.seconds},e.default=s.default.TransportTime},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62);s.default.Frequency=function(t,e){if(!(this instanceof s.default.Frequency))return new s.default.Frequency(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Frequency,s.default.TimeBase),s.default.Frequency.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method:function(t){return"midi"===this._defaultUnits?t:s.default.Frequency.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method:function(t,e){var i=n[t.toLowerCase()]+12*(parseInt(e)+1);return"midi"===this._defaultUnits?i:s.default.Frequency.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method:function(t,e,i){var s=1;return t&&"0"!==t&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s*=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s*=this._beatsToUnits(parseFloat(i)/4)),s}}}),s.default.Frequency.prototype.transpose=function(t){return new this.constructor(this.valueOf()*s.default.intervalToFrequencyRatio(t))},s.default.Frequency.prototype.harmonize=function(t){return t.map(function(t){return this.transpose(t)}.bind(this))},s.default.Frequency.prototype.toMidi=function(){return s.default.Frequency.ftom(this.valueOf())},s.default.Frequency.prototype.toNote=function(){var t=this.toFrequency(),e=Math.log2(t/s.default.Frequency.A4),i=Math.round(12*e)+57,n=Math.floor(i/12);return n<0&&(i+=-12*n),o[i%12]+n.toString()},s.default.Frequency.prototype.toSeconds=function(){return 1/s.default.TimeBase.prototype.toSeconds.call(this)},s.default.Frequency.prototype.toFrequency=function(){return s.default.TimeBase.prototype.toFrequency.call(this)},s.default.Frequency.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*s.default.Transport.PPQ)},s.default.Frequency.prototype._noArg=function(){return 0},s.default.Frequency.prototype._frequencyToUnits=function(t){return t},s.default.Frequency.prototype._ticksToUnits=function(t){return 1/(60*t/(s.default.Transport.bpm.value*s.default.Transport.PPQ))},s.default.Frequency.prototype._beatsToUnits=function(t){return 1/s.default.TimeBase.prototype._beatsToUnits.call(this,t)},s.default.Frequency.prototype._secondsToUnits=function(t){return 1/t},s.default.Frequency.prototype._defaultUnits="hz";var n={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},o=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];s.default.Frequency.A4=440,s.default.Frequency.mtof=function(t){return s.default.Frequency.A4*Math.pow(2,(t-69)/12)},s.default.Frequency.ftom=function(t){return 69+Math.round(12*Math.log2(t/s.default.Frequency.A4))},e.default=s.default.Frequency},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(61),i(4),i(1);s.default.Envelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.AudioNode.call(this),this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this._attackCurve="linear",this._releaseCurve="exponential",this._sig=this.output=new s.default.Signal(0),this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve},s.default.extend(s.default.Envelope,s.default.AudioNode),s.default.Envelope.defaults={attack:.01,decay:.1,sustain:.5,release:1,attackCurve:"linear",decayCurve:"exponential",releaseCurve:"exponential"},Object.defineProperty(s.default.Envelope.prototype,"value",{get:function(){return this.getValueAtTime(this.now())}}),s.default.Envelope.prototype._getCurve=function(t,e){if(s.default.isString(t))return t;if(s.default.isArray(t))for(var i in s.default.Envelope.Type)if(s.default.Envelope.Type[i][e]===t)return i},s.default.Envelope.prototype._setCurve=function(t,e,i){if(s.default.Envelope.Type.hasOwnProperty(i)){var n=s.default.Envelope.Type[i];s.default.isObject(n)?this[t]=n[e]:this[t]=n}else{if(!s.default.isArray(i))throw new Error("Tone.Envelope: invalid curve: "+i);this[t]=i}},Object.defineProperty(s.default.Envelope.prototype,"attackCurve",{get:function(){return this._getCurve(this._attackCurve,"In")},set:function(t){this._setCurve("_attackCurve","In",t)}}),Object.defineProperty(s.default.Envelope.prototype,"releaseCurve",{get:function(){return this._getCurve(this._releaseCurve,"Out")},set:function(t){this._setCurve("_releaseCurve","Out",t)}}),Object.defineProperty(s.default.Envelope.prototype,"decayCurve",{get:function(){return this._decayCurve},set:function(t){if(!["linear","exponential"].includes(t))throw new Error("Tone.Envelope: invalid curve: "+t);this._decayCurve=t}}),s.default.Envelope.prototype.triggerAttack=function(t,e){this.log("triggerAttack",t,e),t=this.toSeconds(t);var i=this.toSeconds(this.attack),n=this.toSeconds(this.decay);e=s.default.defaultArg(e,1);var o=this.getValueAtTime(t);o>0&&(i=(1-o)/(1/i));if(0===i)this._sig.setValueAtTime(e,t);else if("linear"===this._attackCurve)this._sig.linearRampTo(e,i,t);else if("exponential"===this._attackCurve)this._sig.targetRampTo(e,i,t);else if(i>0){this._sig.cancelAndHoldAtTime(t);for(var a=this._attackCurve,r=1;r<a.length;r++)if(a[r-1]<=o&&o<=a[r]){(a=this._attackCurve.slice(r))[0]=o;break}this._sig.setValueCurveAtTime(a,t,i,e)}if(n){var l=e*this.sustain,u=t+i;this.log("decay",u),"linear"===this._decayCurve?this._sig.linearRampTo(l,n,u+this.sampleTime):"exponential"===this._decayCurve&&this._sig.exponentialApproachValueAtTime(l,u,n)}return this},s.default.Envelope.prototype.triggerRelease=function(t){this.log("triggerRelease",t),t=this.toSeconds(t);var e=this.getValueAtTime(t);if(e>0){var i=this.toSeconds(this.release);if("linear"===this._releaseCurve)this._sig.linearRampTo(0,i,t);else if("exponential"===this._releaseCurve)this._sig.targetRampTo(0,i,t);else{var n=this._releaseCurve;s.default.isArray(n)&&(this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(n,t,i,e))}}return this},s.default.Envelope.prototype.getValueAtTime=function(t){return this._sig.getValueAtTime(t)},s.default.Envelope.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),this.triggerAttack(e,i),this.triggerRelease(e+this.toSeconds(t)),this},s.default.Envelope.prototype.cancel=function(t){return this._sig.cancelScheduledValues(t),this},s.default.Envelope.prototype.connect=s.default.SignalBase.prototype.connect,function(){var t,e,i=[];for(t=0;t<128;t++)i[t]=Math.sin(t/127*(Math.PI/2));var n=[];for(t=0;t<127;t++){e=t/127;var o=Math.sin(e*(2*Math.PI)*6.4-Math.PI/2)+1;n[t]=o/10+.83*e}n[127]=1;var a=[];for(t=0;t<128;t++)a[t]=Math.ceil(t/127*5)/5;var r=[];for(t=0;t<128;t++)e=t/127,r[t]=.5*(1-Math.cos(Math.PI*e));var l,u=[];for(t=0;t<128;t++){e=t/127;var d=4*Math.pow(e,3)+.2,f=Math.cos(d*Math.PI*2*e);u[t]=Math.abs(f*(1-e))}function h(t){for(var e=new Array(t.length),i=0;i<t.length;i++)e[i]=1-t[i];return e}s.default.Envelope.Type={linear:"linear",exponential:"exponential",bounce:{In:h(u),Out:u},cosine:{In:i,Out:(l=i,l.slice(0).reverse())},step:{In:a,Out:h(a)},ripple:{In:n,Out:h(n)},sine:{In:r,Out:h(r)}}}(),s.default.Envelope.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._sig.dispose(),this._sig=null,this._attackCurve=null,this._releaseCurve=null,this},e.default=s.default.Envelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(7),i(28),i(3),i(2),i(20);if(s.default.supported&&!s.default.global.AudioContext.prototype.createStereoPanner){var n=function(t){this.context=t,this.pan=new s.default.Signal(0,s.default.Type.AudioRange);var e=new s.default.WaveShaper(function(t){return s.default.equalPowerScale((t+1)/2)},4096),i=new s.default.WaveShaper(function(t){return s.default.equalPowerScale(1-(t+1)/2)},4096),n=new s.default.Gain,o=new s.default.Gain,a=this.input=new s.default.Split;a._splitter.channelCountMode="explicit",(new s.default.Zero).fan(e,i);var r=this.output=new s.default.Merge;a.left.chain(n,r.left),a.right.chain(o,r.right),this.pan.chain(i,n.gain),this.pan.chain(e,o.gain)};n.prototype.disconnect=function(){this.output.disconnect.apply(this.output,arguments)},n.prototype.connect=function(){this.output.connect.apply(this.output,arguments)},AudioContext.prototype.createStereoPanner=function(){return new n(this)},s.default.Context.prototype.createStereoPanner=function(){return new n(this)}}i(22),i(1);s.default.Panner=function(){var t=s.default.defaults(arguments,["pan"],s.default.Panner);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createStereoPanner(),this.pan=this._panner.pan,this.pan.value=t.pan,this._readOnly("pan")},s.default.extend(s.default.Panner,s.default.AudioNode),s.default.Panner.defaults={pan:0},s.default.Panner.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable("pan"),this._panner.disconnect(),this._panner=null,this.pan=null,this};e.default=s.default.Panner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.FMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=this._carrier.detune,this.detune.value=t.detune,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),this.phase=t.phase,this._readOnly(["modulationIndex","frequency","detune","harmonicity"])},s.default.extend(s.default.FMOscillator,s.default.Source),s.default.FMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationIndex:2,modulationType:"square",harmonicity:1},s.default.FMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.FMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.FMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.FMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.FMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.FMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["modulationIndex","frequency","detune","harmonicity"]),this.frequency.dispose(),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this.modulationIndex.dispose(),this.modulationIndex=null,this},e.default=s.default.FMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(2),i(7),i(3);s.default.PulseOscillator=function(){var t=s.default.defaults(arguments,["frequency","width"],s.default.Oscillator);s.default.Source.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._widthGate=new s.default.Gain(0),this._sawtooth=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,type:"sawtooth",phase:t.phase}),this.frequency=this._sawtooth.frequency,this.detune=this._sawtooth.detune,this._thresh=new s.default.WaveShaper(function(t){return t<0?-1:1}),this._sawtooth.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),this._readOnly(["width","frequency","detune"])},s.default.extend(s.default.PulseOscillator,s.default.Source),s.default.PulseOscillator.defaults={frequency:440,detune:0,phase:0,width:.2},s.default.PulseOscillator.prototype._start=function(t){t=this.toSeconds(t),this._sawtooth.start(t),this._widthGate.gain.setValueAtTime(1,t)},s.default.PulseOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._sawtooth.stop(t),this._widthGate.gain.setValueAtTime(0,t)},s.default.PulseOscillator.prototype.restart=function(t){this._sawtooth.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)},Object.defineProperty(s.default.PulseOscillator.prototype,"phase",{get:function(){return this._sawtooth.phase},set:function(t){this._sawtooth.phase=t}}),Object.defineProperty(s.default.PulseOscillator.prototype,"type",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"baseType",{get:function(){return"pulse"}}),Object.defineProperty(s.default.PulseOscillator.prototype,"partials",{get:function(){return[]}}),s.default.PulseOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._sawtooth.dispose(),this._sawtooth=null,this._writable(["width","frequency","detune"]),this.width.dispose(),this.width=null,this._widthGate.dispose(),this._widthGate=null,this._thresh.dispose(),this._thresh=null,this.frequency=null,this.detune=null,this},e.default=s.default.PulseOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(4),i(34);s.default.Event=function(){var t=s.default.defaults(arguments,["callback","value"],s.default.Event);s.default.call(this),this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._state=new s.default.TimelineState(s.default.State.Stopped),this._playbackRate=1,this._startOffset=0,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this.playbackRate=t.playbackRate},s.default.extend(s.default.Event),s.default.Event.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,value:null,probability:1,mute:!1,humanize:!1},s.default.Event.prototype._rescheduleEvents=function(t){return t=s.default.defaultArg(t,-1),this._state.forEachFrom(t,function(t){var e;if(t.state===s.default.State.Started){s.default.isDefined(t.id)&&s.default.Transport.clear(t.id);var i=t.time+Math.round(this.startOffset/this._playbackRate);if(!0===this._loop||s.default.isNumber(this._loop)&&this._loop>1){e=1/0,s.default.isNumber(this._loop)&&(e=this._loop*this._getLoopDuration());var n=this._state.getAfter(i);null!==n&&(e=Math.min(e,n.time-i)),e!==1/0&&(this._state.setStateAtTime(s.default.State.Stopped,i+e+1),e=s.default.Ticks(e));var o=s.default.Ticks(this._getLoopDuration());t.id=s.default.Transport.scheduleRepeat(this._tick.bind(this),o,s.default.Ticks(i),e)}else t.id=s.default.Transport.schedule(this._tick.bind(this),s.default.Ticks(i))}}.bind(this)),this},Object.defineProperty(s.default.Event.prototype,"state",{get:function(){return this._state.getValueAtTime(s.default.Transport.ticks)}}),Object.defineProperty(s.default.Event.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t}}),Object.defineProperty(s.default.Event.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t}}),Object.defineProperty(s.default.Event.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t}}),s.default.Event.prototype.start=function(t){return t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Stopped&&(this._state.add({state:s.default.State.Started,time:t,id:void 0}),this._rescheduleEvents(t)),this},s.default.Event.prototype.stop=function(t){if(this.cancel(t),t=this.toTicks(t),this._state.getValueAtTime(t)===s.default.State.Started){this._state.setStateAtTime(s.default.State.Stopped,t);var e=this._state.getBefore(t),i=t;null!==e&&(i=e.time),this._rescheduleEvents(i)}return this},s.default.Event.prototype.cancel=function(t){return t=s.default.defaultArg(t,-1/0),t=this.toTicks(t),this._state.forEachFrom(t,function(t){s.default.Transport.clear(t.id)}),this._state.cancel(t),this},s.default.Event.prototype._tick=function(t){var e=s.default.Transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)===s.default.State.Started){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){var i=.02;s.default.isBoolean(this.humanize)||(i=this.toSeconds(this.humanize)),t+=(2*Math.random()-1)*i}this.callback(t,this.value)}},s.default.Event.prototype._getLoopDuration=function(){return Math.round((this._loopEnd-this._loopStart)/this._playbackRate)},Object.defineProperty(s.default.Event.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}}),Object.defineProperty(s.default.Event.prototype,"progress",{get:function(){if(this._loop){var t=s.default.Transport.ticks,e=this._state.get(t);if(null!==e&&e.state===s.default.State.Started){var i=this._getLoopDuration();return(t-e.time)%i/i}return 0}return 0}}),s.default.Event.prototype.dispose=function(){this.cancel(),this._state.dispose(),this._state=null,this.callback=null,this.value=null},e.default=s.default.Event},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(13),i(29),i(10),i(3),i(1);s.default.MidSideMerge=function(){s.default.AudioNode.call(this),this.createInsOuts(2,0),this.mid=this.input[0]=new s.default.Gain,this._left=new s.default.Add,this._timesTwoLeft=new s.default.Multiply(Math.SQRT1_2),this.side=this.input[1]=new s.default.Gain,this._right=new s.default.Subtract,this._timesTwoRight=new s.default.Multiply(Math.SQRT1_2),this._merge=this.output=new s.default.Merge,this.mid.connect(this._left,0,0),this.side.connect(this._left,0,1),this.mid.connect(this._right,0,0),this.side.connect(this._right,0,1),this._left.connect(this._timesTwoLeft),this._right.connect(this._timesTwoRight),this._timesTwoLeft.connect(this._merge,0,0),this._timesTwoRight.connect(this._merge,0,1)},s.default.extend(s.default.MidSideMerge,s.default.AudioNode),s.default.MidSideMerge.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._left.dispose(),this._left=null,this._timesTwoLeft.dispose(),this._timesTwoLeft=null,this._right.dispose(),this._right=null,this._timesTwoRight.dispose(),this._timesTwoRight=null,this._merge.dispose(),this._merge=null,this},e.default=s.default.MidSideMerge},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(13),i(2),i(19),i(1);s.default.MidSideSplit=function(){s.default.AudioNode.call(this),this.createInsOuts(0,2),this._split=this.input=new s.default.Split,this._midAdd=new s.default.Add,this.mid=this.output[0]=new s.default.Multiply(Math.SQRT1_2),this._sideSubtract=new s.default.Subtract,this.side=this.output[1]=new s.default.Multiply(Math.SQRT1_2),this._split.connect(this._midAdd,0,0),this._split.connect(this._midAdd,1,1),this._split.connect(this._sideSubtract,0,0),this._split.connect(this._sideSubtract,1,1),this._midAdd.connect(this.mid),this._sideSubtract.connect(this.side)},s.default.extend(s.default.MidSideSplit,s.default.AudioNode),s.default.MidSideSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midAdd.dispose(),this._midAdd=null,this._sideSubtract.dispose(),this._sideSubtract=null,this._split.dispose(),this._split=null,this},e.default=s.default.MidSideSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(9),i(1),i(59);s.default.LowpassCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance","dampening"],s.default.LowpassCombFilter);s.default.AudioNode.call(this),this._combFilter=this.output=new s.default.FeedbackCombFilter(t.delayTime,t.resonance),this.delayTime=this._combFilter.delayTime,this._lowpass=this.input=new s.default.Filter({frequency:t.dampening,type:"lowpass",Q:0,rolloff:-12}),this.dampening=this._lowpass.frequency,this.resonance=this._combFilter.resonance,this._lowpass.connect(this._combFilter),this._readOnly(["dampening","resonance","delayTime"])},s.default.extend(s.default.LowpassCombFilter,s.default.AudioNode),s.default.LowpassCombFilter.defaults={delayTime:.1,resonance:.5,dampening:3e3},s.default.LowpassCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["dampening","resonance","delayTime"]),this._combFilter.dispose(),this._combFilter=null,this.resonance=null,this.delayTime=null,this._lowpass.dispose(),this._lowpass=null,this.dampening=null,this},e.default=s.default.LowpassCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(45);s.default.Ticks=function(t,e){if(!(this instanceof s.default.Ticks))return new s.default.Ticks(t,e);s.default.TransportTime.call(this,t,e)},s.default.extend(s.default.Ticks,s.default.TransportTime),s.default.Ticks.prototype._defaultUnits="i",s.default.Ticks.prototype._now=function(){return s.default.Transport.ticks},s.default.Ticks.prototype._beatsToUnits=function(t){return this._getPPQ()*t},s.default.Ticks.prototype._secondsToUnits=function(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())},s.default.Ticks.prototype._ticksToUnits=function(t){return t},s.default.Ticks.prototype.toTicks=function(){return this.valueOf()},s.default.Ticks.prototype.toSeconds=function(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())},e.default=s.default.Ticks},function(t,e,i){"use strict";i.r(e);var s=i(0);i(55);s.default.TransportEvent=function(t,e){e=s.default.defaultArg(e,s.default.TransportEvent.defaults),s.default.call(this),this.Transport=t,this.id=s.default.TransportEvent._eventId++,this.time=s.default.Ticks(e.time),this.callback=e.callback,this._once=e.once},s.default.extend(s.default.TransportEvent),s.default.TransportEvent.defaults={once:!1,callback:s.default.noOp},s.default.TransportEvent._eventId=0,s.default.TransportEvent.prototype.invoke=function(t){this.callback&&(this.callback(t),this._once&&this.Transport&&this.Transport.clear(this.id))},s.default.TransportEvent.prototype.dispose=function(){return s.default.prototype.dispose.call(this),this.Transport=null,this.callback=null,this.time=null,this},e.default=s.default.TransportEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(82),i(34),i(24),i(14);s.default.TickSource=function(){var t=s.default.defaults(arguments,["frequency"],s.default.TickSource);this.frequency=new s.default.TickSignal(t.frequency),this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._tickOffset=new s.default.Timeline,this.setTicksAtTime(0,0)},s.default.extend(s.default.TickSource),s.default.TickSource.defaults={frequency:1},Object.defineProperty(s.default.TickSource.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.TickSource.prototype.start=function(t,e){return t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),s.default.isDefined(e)&&this.setTicksAtTime(e,t)),this},s.default.TickSource.prototype.stop=function(t){if(t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Stopped){var e=this._state.get(t);e.time>0&&(this._tickOffset.cancel(e.time),this._state.cancel(e.time))}return this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this.setTicksAtTime(0,t),this},s.default.TickSource.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&this._state.setStateAtTime(s.default.State.Paused,t),this},s.default.TickSource.prototype.cancel=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this},s.default.TickSource.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.ticks,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=this.frequency.getTicksAtTime(t.time)-this.frequency.getTicksAtTime(e)),n=t}.bind(this)),this._state.remove(i),o},Object.defineProperty(s.default.TickSource.prototype,"ticks",{get:function(){return this.getTicksAtTime(this.now())},set:function(t){this.setTicksAtTime(t,this.now())}}),Object.defineProperty(s.default.TickSource.prototype,"seconds",{get:function(){return this.getSecondsAtTime(this.now())},set:function(t){var e=this.now(),i=this.frequency.timeToTicks(t,e);this.setTicksAtTime(i,e)}}),s.default.TickSource.prototype.getSecondsAtTime=function(t){t=this.toSeconds(t);var e=this._state.getLastState(s.default.State.Stopped,t),i={state:s.default.State.Paused,time:t};this._state.add(i);var n=e,o=0;return this._state.forEachBetween(e.time,t+this.sampleTime,function(t){var e=n.time,i=this._tickOffset.get(t.time);i.time>=n.time&&(o=i.seconds,e=i.time),n.state===s.default.State.Started&&t.state!==s.default.State.Started&&(o+=t.time-e),n=t}.bind(this)),this._state.remove(i),o},s.default.TickSource.prototype.setTicksAtTime=function(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({time:e,ticks:t,seconds:this.frequency.getDurationOfTicks(t,e)}),this},s.default.TickSource.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.TickSource.prototype.getTimeOfTick=function(t,e){e=s.default.defaultArg(e,this.now());var i=this._tickOffset.get(e),n=this._state.get(e),o=Math.max(i.time,n.time),a=this.frequency.getTicksAtTime(o)+t-i.ticks;return this.frequency.getTimeOfTick(a)},s.default.TickSource.prototype.forEachTickBetween=function(t,e,i){var n=this._state.get(t);if(this._state.forEachBetween(t,e,function(e){n.state===s.default.State.Started&&e.state!==s.default.State.Started&&this.forEachTickBetween(Math.max(n.time,t),e.time-this.sampleTime,i),n=e}.bind(this)),t=Math.max(n.time,t),n.state===s.default.State.Started&&this._state){var o=this.frequency.getTicksAtTime(t),a=(o-this.frequency.getTicksAtTime(n.time))%1;0!==a&&(a=1-a);for(var r=this.frequency.getTimeOfTick(o+a),l=null;r<e&&this._state;){try{i(r,Math.round(this.getTicksAtTime(r)))}catch(t){l=t;break}this._state&&(r+=this.frequency.getDurationOfTicks(1,r))}}if(l)throw l;return this},s.default.TickSource.prototype.dispose=function(){return s.default.Param.prototype.dispose.call(this),this._state.dispose(),this._state=null,this._tickOffset.dispose(),this._tickOffset=null,this._writable("frequency"),this.frequency.dispose(),this.frequency=null,this},e.default=s.default.TickSource},function(t,e,i){"use strict";i.r(e);var s=i(0);i(87),i(13),i(2),i(4),i(18),i(1);s.default.Follower=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Follower);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._abs=new s.default.Abs,this._filter=this.context.createBiquadFilter(),this._filter.type="lowpass",this._filter.frequency.value=0,this._filter.Q.value=0,this._sub=new s.default.Subtract,this._delay=new s.default.Delay(this.blockTime),this._smoothing=t.smoothing,s.default.connect(this.input,this._delay),s.default.connect(this.input,this._sub,0,1),this._sub.chain(this._abs,this._filter,this.output),this.smoothing=t.smoothing},s.default.extend(s.default.Follower,s.default.AudioNode),s.default.Follower.defaults={smoothing:.05},Object.defineProperty(s.default.Follower.prototype,"smoothing",{get:function(){return this._smoothing},set:function(t){this._smoothing=t,this._filter.frequency.value=.5*s.default.Time(t).toFrequency()}}),s.default.Follower.prototype.connect=s.default.SignalBase.prototype.connect,s.default.Follower.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._filter.disconnect(),this._filter=null,this._delay.dispose(),this._delay=null,this._sub.disconnect(),this._sub=null,this._abs.dispose(),this._abs=null,this},e.default=s.default.Follower},function(t,e,i){"use strict";i.r(e);var s=i(0);i(42),i(2),i(14),i(18),i(3),i(1);s.default.FeedbackCombFilter=function(){var t=s.default.defaults(arguments,["delayTime","resonance"],s.default.FeedbackCombFilter);s.default.AudioNode.call(this),this._delay=this.input=this.output=new s.default.Delay(t.delayTime),this.delayTime=this._delay.delayTime,this._feedback=new s.default.Gain(t.resonance,s.default.Type.NormalRange),this.resonance=this._feedback.gain,this._delay.chain(this._feedback,this._delay),this._readOnly(["resonance","delayTime"])},s.default.extend(s.default.FeedbackCombFilter,s.default.AudioNode),s.default.FeedbackCombFilter.defaults={delayTime:.1,resonance:.5},s.default.FeedbackCombFilter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["resonance","delayTime"]),this._delay.dispose(),this._delay=null,this.delayTime=null,this._feedback.dispose(),this._feedback=null,this.resonance=null,this},e.default=s.default.FeedbackCombFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(9),i(2),i(3),i(1);s.default.MultibandSplit=function(){var t=s.default.defaults(arguments,["lowFrequency","highFrequency"],s.default.MultibandSplit);s.default.AudioNode.call(this),this.input=new s.default.Gain,this.output=new Array(3),this.low=this.output[0]=new s.default.Filter(0,"lowpass"),this._lowMidFilter=new s.default.Filter(0,"highpass"),this.mid=this.output[1]=new s.default.Filter(0,"lowpass"),this.high=this.output[2]=new s.default.Filter(0,"highpass"),this.lowFrequency=new s.default.Signal(t.lowFrequency,s.default.Type.Frequency),this.highFrequency=new s.default.Signal(t.highFrequency,s.default.Type.Frequency),this.Q=new s.default.Signal(t.Q),this.input.fan(this.low,this.high),this.input.chain(this._lowMidFilter,this.mid),this.lowFrequency.connect(this.low.frequency),this.lowFrequency.connect(this._lowMidFilter.frequency),this.highFrequency.connect(this.mid.frequency),this.highFrequency.connect(this.high.frequency),this.Q.connect(this.low.Q),this.Q.connect(this._lowMidFilter.Q),this.Q.connect(this.mid.Q),this.Q.connect(this.high.Q),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandSplit,s.default.AudioNode),s.default.MultibandSplit.defaults={lowFrequency:400,highFrequency:2500,Q:1},s.default.MultibandSplit.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.low=null,this._lowMidFilter.dispose(),this._lowMidFilter=null,this.mid.dispose(),this.mid=null,this.high.dispose(),this.high=null,this.lowFrequency.dispose(),this.lowFrequency=null,this.highFrequency.dispose(),this.highFrequency=null,this.Q.dispose(),this.Q=null,this},e.default=s.default.MultibandSplit},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.Pow=function(t){s.default.SignalBase.call(this),this._exp=s.default.defaultArg(t,1),this._expScaler=this.input=this.output=new s.default.WaveShaper(this._expFunc(this._exp),8192)},s.default.extend(s.default.Pow,s.default.SignalBase),Object.defineProperty(s.default.Pow.prototype,"value",{get:function(){return this._exp},set:function(t){this._exp=t,this._expScaler.setMap(this._expFunc(this._exp))}}),s.default.Pow.prototype._expFunc=function(t){return function(e){return Math.pow(Math.abs(e),t)}},s.default.Pow.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._expScaler.dispose(),this._expScaler=null,this},e.default=s.default.Pow},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.TimeBase=function(t,e){if(!(this instanceof s.default.TimeBase))return new s.default.TimeBase(t,e);if(this._val=t,this._units=e,s.default.isUndef(this._units)&&s.default.isString(this._val)&&parseFloat(this._val)==this._val&&"+"!==this._val.charAt(0))this._val=parseFloat(this._val),this._units=this._defaultUnits;else if(t&&t.constructor===this.constructor)this._val=t._val,this._units=t._units;else if(t instanceof s.default.TimeBase)switch(this._defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break;default:throw new Error("Unrecognized default units "+this._defaultUnits)}},s.default.extend(s.default.TimeBase),s.default.TimeBase.prototype._expressions={n:{regexp:/^(\d+)n(\.?)$/i,method:function(t,e){t=parseInt(t);var i="."===e?1.5:1;return 1===t?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/t)*i}},t:{regexp:/^(\d+)t$/i,method:function(t){return t=parseInt(t),this._beatsToUnits(8/(3*parseInt(t)))}},m:{regexp:/^(\d+)m$/i,method:function(t){return this._beatsToUnits(parseInt(t)*this._getTimeSignature())}},i:{regexp:/^(\d+)i$/i,method:function(t){return this._ticksToUnits(parseInt(t))}},hz:{regexp:/^(\d+(?:\.\d+)?)hz$/i,method:function(t){return this._frequencyToUnits(parseFloat(t))}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,method:function(t,e,i){var s=0;return t&&"0"!==t&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(s+=this._beatsToUnits(parseFloat(e))),i&&"0"!==i&&(s+=this._beatsToUnits(parseFloat(i)/4)),s}},s:{regexp:/^(\d+(?:\.\d+)?)s$/,method:function(t){return this._secondsToUnits(parseFloat(t))}},samples:{regexp:/^(\d+)samples$/,method:function(t){return parseInt(t)/this.context.sampleRate}},default:{regexp:/^(\d+(?:\.\d+)?)$/,method:function(t){return this._expressions[this._defaultUnits].method.call(this,t)}}},s.default.TimeBase.prototype._defaultUnits="s",s.default.TimeBase.prototype._getBpm=function(){return s.default.Transport?s.default.Transport.bpm.value:120},s.default.TimeBase.prototype._getTimeSignature=function(){return s.default.Transport?s.default.Transport.timeSignature:4},s.default.TimeBase.prototype._getPPQ=function(){return s.default.Transport?s.default.Transport.PPQ:192},s.default.TimeBase.prototype._now=function(){return this.now()},s.default.TimeBase.prototype._frequencyToUnits=function(t){return 1/t},s.default.TimeBase.prototype._beatsToUnits=function(t){return 60/this._getBpm()*t},s.default.TimeBase.prototype._secondsToUnits=function(t){return t},s.default.TimeBase.prototype._ticksToUnits=function(t){return t*(this._beatsToUnits(1)/this._getPPQ())},s.default.TimeBase.prototype._noArg=function(){return this._now()},s.default.TimeBase.prototype.valueOf=function(){if(s.default.isUndef(this._val))return this._noArg();if(s.default.isString(this._val)&&s.default.isUndef(this._units)){for(var t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(s.default.isObject(this._val)){var e=0;for(var i in this._val){var n=this._val[i];e+=new this.constructor(i).valueOf()*n}return e}if(s.default.isDefined(this._units)){var o=this._expressions[this._units],a=this._val.toString().trim().match(o.regexp);return a?o.method.apply(this,a.slice(1)):o.method.call(this,parseFloat(this._val))}return this._val},s.default.TimeBase.prototype.toSeconds=function(){return this.valueOf()},s.default.TimeBase.prototype.toFrequency=function(){return 1/this.toSeconds()},s.default.TimeBase.prototype.toSamples=function(){return this.toSeconds()*this.context.sampleRate},s.default.TimeBase.prototype.toMilliseconds=function(){return 1e3*this.toSeconds()},s.default.TimeBase.prototype.dispose=function(){this._val=null,this._units=null},e.default=s.default.TimeBase},function(t,e,i){"use strict";i.r(e);var s=i(0);i(62),i(46);s.default.Time=function(t,e){if(!(this instanceof s.default.Time))return new s.default.Time(t,e);s.default.TimeBase.call(this,t,e)},s.default.extend(s.default.Time,s.default.TimeBase),s.default.Time.prototype._expressions=Object.assign({},s.default.TimeBase.prototype._expressions,{quantize:{regexp:/^@(.+)/,method:function(t){if(s.default.Transport){var e=new this.constructor(t);return this._secondsToUnits(s.default.Transport.nextSubdivision(e))}return 0}},now:{regexp:/^\+(.+)/,method:function(t){return this._now()+new this.constructor(t)}}}),s.default.Time.prototype.quantize=function(t,e){e=s.default.defaultArg(e,1);var i=new this.constructor(t),n=this.valueOf();return n+(Math.round(n/i)*i-n)*e},s.default.Time.prototype.toNotation=function(){for(var t=this.toSeconds(),e=["1m"],i=1;i<8;i++){var n=Math.pow(2,i);e.push(n+"n."),e.push(n+"n"),e.push(n+"t")}e.push("0");var o=e[0],a=s.default.Time(e[0]).toSeconds();return e.forEach(function(e){var i=s.default.Time(e).toSeconds();Math.abs(i-t)<Math.abs(a-t)&&(o=e,a=i)}),o},s.default.Time.prototype.toBarsBeatsSixteenths=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;e=parseFloat(e.toFixed(4));var i=Math.floor(e/this._getTimeSignature()),s=e%1*4;return e=Math.floor(e)%this._getTimeSignature(),(s=s.toString()).length>3&&(s=parseFloat(parseFloat(s).toFixed(3))),[i,e,s].join(":")},s.default.Time.prototype.toTicks=function(){var t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.round(e*this._getPPQ())},s.default.Time.prototype.toSeconds=function(){return this.valueOf()},s.default.Time.prototype.toMidi=function(){return s.default.Frequency.ftom(this.toFrequency())},e.default=s.default.Time},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(3),i(1);s.default.supported&&(OscillatorNode.prototype.setPeriodicWave||(OscillatorNode.prototype.setPeriodicWave=OscillatorNode.prototype.setWaveTable),AudioContext.prototype.createPeriodicWave||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable)),s.default.OscillatorNode=function(){var t=s.default.defaults(arguments,["frequency","type"],s.default.OscillatorNode);s.default.AudioNode.call(this,t),this.onended=t.onended,this._startTime=-1,this._stopTime=-1,this._gainNode=this.output=new s.default.Gain(0),this._oscillator=this.context.createOscillator(),s.default.connect(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new s.default.Param({param:this._oscillator.frequency,units:s.default.Type.Frequency,value:t.frequency}),this.detune=new s.default.Param({param:this._oscillator.detune,units:s.default.Type.Cents,value:t.detune}),this._gain=1},s.default.extend(s.default.OscillatorNode,s.default.AudioNode),s.default.OscillatorNode.defaults={frequency:440,detune:0,type:"sine",onended:s.default.noOp},Object.defineProperty(s.default.OscillatorNode.prototype,"state",{get:function(){return this.getStateAtTime(this.now())}}),s.default.OscillatorNode.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),-1!==this._startTime&&t>=this._startTime&&(-1===this._stopTime||t<=this._stopTime)?s.default.State.Started:s.default.State.Stopped},s.default.OscillatorNode.prototype.start=function(t){if(this.log("start",t),-1!==this._startTime)throw new Error("cannot call OscillatorNode.start more than once");return this._startTime=this.toSeconds(t),this._startTime=Math.max(this._startTime,this.context.currentTime),this._oscillator.start(this._startTime),this._gainNode.gain.setValueAtTime(1,this._startTime),this},s.default.OscillatorNode.prototype.setPeriodicWave=function(t){return this._oscillator.setPeriodicWave(t),this},s.default.OscillatorNode.prototype.stop=function(t){return this.log("stop",t),this.assert(-1!==this._startTime,"'start' must be called before 'stop'"),this.cancelStop(),this._stopTime=this.toSeconds(t),this._stopTime=Math.max(this._stopTime,this.context.currentTime),this._stopTime>this._startTime?(this._gainNode.gain.setValueAtTime(0,this._stopTime),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(function(){this._oscillator.stop(this.now()),this.onended(),setTimeout(function(){this._oscillator&&(this._oscillator.disconnect(),this._gainNode.disconnect())}.bind(this),100)}.bind(this),this._stopTime-this.context.currentTime)):this._gainNode.gain.cancelScheduledValues(this._startTime),this},s.default.OscillatorNode.prototype.cancelStop=function(){return-1!==this._startTime&&(this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1),this},Object.defineProperty(s.default.OscillatorNode.prototype,"type",{get:function(){return this._oscillator.type},set:function(t){this._oscillator.type=t}}),s.default.OscillatorNode.prototype.dispose=function(){return this._wasDisposed||(this._wasDisposed=!0,this.context.clearTimeout(this._timeout),s.default.AudioNode.prototype.dispose.call(this),this.onended=null,this._oscillator.disconnect(),this._oscillator=null,this._gainNode.dispose(),this._gainNode=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null),this};e.default=s.default.OscillatorNode},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(6),i(57),i(32);s.default.Player=function(t){var e;t instanceof s.default.Buffer&&t.loaded?(t=t.get(),e=s.default.Player.defaults):e=s.default.defaults(arguments,["url","onload"],s.default.Player),s.default.Source.call(this,e),this.autostart=e.autostart,this._buffer=new s.default.Buffer({url:e.url,onload:this._onload.bind(this,e.onload),reverse:e.reverse}),t instanceof AudioBuffer&&this._buffer.set(t),this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this._activeSources=[],this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut},s.default.extend(s.default.Player,s.default.Source),s.default.Player.defaults={onload:s.default.noOp,playbackRate:1,loop:!1,autostart:!1,loopStart:0,loopEnd:0,reverse:!1,fadeIn:0,fadeOut:0},s.default.Player.prototype.load=function(t,e){return this._buffer.load(t,this._onload.bind(this,e))},s.default.Player.prototype._onload=function(t){(t=s.default.defaultArg(t,s.default.noOp))(this),this.autostart&&this.start()},s.default.Player.prototype._onSourceEnd=function(t){var e=this._activeSources.indexOf(t);this._activeSources.splice(e,1),0!==this._activeSources.length||this._synced||this._state.setStateAtTime(s.default.State.Stopped,s.default.now())},s.default.Player.prototype._start=function(t,e,i){e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toSeconds(e),this._synced&&(e*=this._playbackRate);var n=s.default.defaultArg(i,Math.max(this._buffer.duration-e,0));n=this.toSeconds(n),n/=this._playbackRate,t=this.toSeconds(t);var o=new s.default.BufferSource({buffer:this._buffer,loop:this._loop,loopStart:this._loopStart,loopEnd:this._loopEnd,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate,fadeIn:this.fadeIn,fadeOut:this.fadeOut}).connect(this.output);return this._loop||this._synced||this._state.setStateAtTime(s.default.State.Stopped,t+n),this._activeSources.push(o),this._loop&&s.default.isUndef(i)?o.start(t,e):o.start(t,e,n-this.toSeconds(this.fadeOut)),this},s.default.Player.prototype._stop=function(t){return t=this.toSeconds(t),this._activeSources.forEach(function(e){e.stop(t)}),this},s.default.Player.prototype.restart=function(t,e,i){return this._stop(t),this._start(t,e,i),this},s.default.Player.prototype.seek=function(t,e){return e=this.toSeconds(e),this._state.getValueAtTime(e)===s.default.State.Started&&(t=this.toSeconds(t),this._stop(e),this._start(e,t)),this},s.default.Player.prototype.setLoopPoints=function(t,e){return this.loopStart=t,this.loopEnd=e,this},Object.defineProperty(s.default.Player.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=t,this._activeSources.forEach(function(e){e.loopStart=t})}}),Object.defineProperty(s.default.Player.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=t,this._activeSources.forEach(function(e){e.loopEnd=t})}}),Object.defineProperty(s.default.Player.prototype,"buffer",{get:function(){return this._buffer},set:function(t){this._buffer.set(t)}}),Object.defineProperty(s.default.Player.prototype,"loop",{get:function(){return this._loop},set:function(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(function(e){e.loop=t}),t)){var e=this._state.getNextState(s.default.State.Stopped,this.now());e&&this._state.cancel(e.time)}}}),Object.defineProperty(s.default.Player.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t;var e=this.now(),i=this._state.getNextState(s.default.State.Stopped,e);i&&this._state.cancel(i.time),this._activeSources.forEach(function(i){i.cancelStop(),i.playbackRate.setValueAtTime(t,e)})}}),Object.defineProperty(s.default.Player.prototype,"reverse",{get:function(){return this._buffer.reverse},set:function(t){this._buffer.reverse=t}}),Object.defineProperty(s.default.Player.prototype,"loaded",{get:function(){return this._buffer.loaded}}),s.default.Player.prototype.dispose=function(){return this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,s.default.Source.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this},e.default=s.default.Player},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(37),i(2),i(9),i(25);s.default.MonoSynth=function(t){t=s.default.defaultArg(t,s.default.MonoSynth.defaults),s.default.Monophonic.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new s.default.Filter(t.filter),this.filter.frequency.value=5e3,this.filterEnvelope=new s.default.FrequencyEnvelope(t.filterEnvelope),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),this._readOnly(["oscillator","frequency","detune","filter","filterEnvelope","envelope"])},s.default.extend(s.default.MonoSynth,s.default.Monophonic),s.default.MonoSynth.defaults={frequency:"C4",detune:0,oscillator:{type:"square"},filter:{Q:6,type:"lowpass",rolloff:-24},envelope:{attack:.005,decay:.1,sustain:.9,release:1},filterEnvelope:{attack:.06,decay:.2,sustain:.5,release:2,baseFrequency:200,octaves:7,exponent:2}},s.default.MonoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.filterEnvelope.triggerAttack(t),this.oscillator.start(t),0===this.envelope.sustain&&this.oscillator.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.MonoSynth.prototype._triggerEnvelopeRelease=function(t){return this.envelope.triggerRelease(t),this.filterEnvelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MonoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["oscillator","frequency","detune","filter","filterEnvelope","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this.filterEnvelope.dispose(),this.filterEnvelope=null,this.filter.dispose(),this.filter=null,this.frequency=null,this.detune=null,this},e.default=s.default.MonoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3);s.default.FatOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","spread"],s.default.FatOscillator);s.default.Source.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._oscillators=[],this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,this._readOnly(["frequency","detune"])},s.default.extend(s.default.FatOscillator,s.default.Source),s.default.FatOscillator.defaults={frequency:440,detune:0,phase:0,spread:20,count:3,type:"sawtooth",partials:[],partialCount:0},s.default.FatOscillator.prototype._start=function(t){t=this.toSeconds(t),this._forEach(function(e){e.start(t)})},s.default.FatOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._forEach(function(e){e.stop(t)})},s.default.FatOscillator.prototype.restart=function(t){t=this.toSeconds(t),this._forEach(function(e){e.restart(t)})},s.default.FatOscillator.prototype._forEach=function(t){for(var e=0;e<this._oscillators.length;e++)t.call(this,this._oscillators[e],e)},Object.defineProperty(s.default.FatOscillator.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._forEach(function(e){e.type=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"spread",{get:function(){return this._spread},set:function(t){if(this._spread=t,this._oscillators.length>1){var e=-t/2,i=t/(this._oscillators.length-1);this._forEach(function(t,s){t.detune.value=e+i*s})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"count",{get:function(){return this._oscillators.length},set:function(t){if(t=Math.max(t,1),this._oscillators.length!==t){this._forEach(function(t){t.dispose()}),this._oscillators=[];for(var e=0;e<t;e++){var i=new s.default.Oscillator;this.type===s.default.Oscillator.Type.Custom?i.partials=this._partials:i.type=this._type,i.partialCount=this._partialCount,i.phase=this._phase+e/t*360,i.volume.value=-6-1.1*t,this.frequency.connect(i.frequency),this.detune.connect(i.detune),i.connect(this.output),this._oscillators[e]=i}this.spread=this._spread,this.state===s.default.State.Started&&this._forEach(function(t){t.start()})}}}),Object.defineProperty(s.default.FatOscillator.prototype,"phase",{get:function(){return this._phase},set:function(t){this._phase=t,this._forEach(function(e){e.phase=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"baseType",{get:function(){return this._oscillators[0].baseType},set:function(t){this._forEach(function(e){e.baseType=t}),this._type=this._oscillators[0].type}}),Object.defineProperty(s.default.FatOscillator.prototype,"partials",{get:function(){return this._oscillators[0].partials},set:function(t){this._partials=t,this._type=s.default.Oscillator.Type.Custom,this._forEach(function(e){e.partials=t})}}),Object.defineProperty(s.default.FatOscillator.prototype,"partialCount",{get:function(){return this._oscillators[0].partialCount},set:function(t){this._partialCount=t,this._forEach(function(e){e.partialCount=t}),this._type=this._oscillators[0].type}}),s.default.FatOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune"]),this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this._forEach(function(t){t.dispose()}),this._oscillators=null,this._partials=null,this},e.default=s.default.FatOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(17),i(5),i(3),i(22);s.default.AMOscillator=function(){var t=s.default.defaults(arguments,["frequency","type","modulationType"],s.default.AMOscillator);s.default.Source.call(this,t),this._carrier=new s.default.Oscillator(t.frequency,t.type),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this.detune.value=t.detune,this._modulator=new s.default.Oscillator(t.frequency,t.modulationType),this._modulationScale=new s.default.AudioToGain,this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.connect(this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this.phase=t.phase,this._readOnly(["frequency","detune","harmonicity"])},s.default.extend(s.default.AMOscillator,s.default.Oscillator),s.default.AMOscillator.defaults={frequency:440,detune:0,phase:0,type:"sine",modulationType:"square",harmonicity:1},s.default.AMOscillator.prototype._start=function(t){this._modulator.start(t),this._carrier.start(t)},s.default.AMOscillator.prototype._stop=function(t){this._modulator.stop(t),this._carrier.stop(t)},s.default.AMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._carrier.restart(t)},Object.defineProperty(s.default.AMOscillator.prototype,"type",{get:function(){return this._carrier.type},set:function(t){this._carrier.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"baseType",{get:function(){return this._carrier.baseType},set:function(t){this._carrier.baseType=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partialCount",{get:function(){return this._carrier.partialCount},set:function(t){this._carrier.partialCount=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"modulationType",{get:function(){return this._modulator.type},set:function(t){this._modulator.type=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"phase",{get:function(){return this._carrier.phase},set:function(t){this._carrier.phase=t,this._modulator.phase=t}}),Object.defineProperty(s.default.AMOscillator.prototype,"partials",{get:function(){return this._carrier.partials},set:function(t){this._carrier.partials=t}}),s.default.AMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._writable(["frequency","detune","harmonicity"]),this.frequency=null,this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this._modulationNode.dispose(),this._modulationNode=null,this._modulationScale.dispose(),this._modulationScale=null,this},e.default=s.default.AMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(50),i(17),i(5);s.default.PWMOscillator=function(){var t=s.default.defaults(arguments,["frequency","modulationFrequency"],s.default.PWMOscillator);s.default.Source.call(this,t),this._pulse=new s.default.PulseOscillator(t.modulationFrequency),this._pulse._sawtooth.type="sine",this._modulator=new s.default.Oscillator({frequency:t.frequency,detune:t.detune,phase:t.phase}),this._scale=new s.default.Multiply(2),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this.modulationFrequency=this._pulse.frequency,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),this._readOnly(["modulationFrequency","frequency","detune"])},s.default.extend(s.default.PWMOscillator,s.default.Source),s.default.PWMOscillator.defaults={frequency:440,detune:0,phase:0,modulationFrequency:.4},s.default.PWMOscillator.prototype._start=function(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)},s.default.PWMOscillator.prototype._stop=function(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)},s.default.PWMOscillator.prototype.restart=function(t){this._modulator.restart(t),this._pulse.restart(t)},Object.defineProperty(s.default.PWMOscillator.prototype,"type",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"baseType",{get:function(){return"pwm"}}),Object.defineProperty(s.default.PWMOscillator.prototype,"partials",{get:function(){return[]}}),Object.defineProperty(s.default.PWMOscillator.prototype,"phase",{get:function(){return this._modulator.phase},set:function(t){this._modulator.phase=t}}),s.default.PWMOscillator.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this._pulse.dispose(),this._pulse=null,this._scale.dispose(),this._scale=null,this._modulator.dispose(),this._modulator=null,this._writable(["modulationFrequency","frequency","detune"]),this.frequency=null,this.detune=null,this.modulationFrequency=null,this},e.default=s.default.PWMOscillator},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51),i(4),i(16);s.default.Part=function(){var t=s.default.defaults(arguments,["callback","events"],s.default.Part);s.default.Event.call(this,t),this._events=[];for(var e=0;e<t.events.length;e++)Array.isArray(t.events[e])?this.add(t.events[e][0],t.events[e][1]):this.add(t.events[e])},s.default.extend(s.default.Part,s.default.Event),s.default.Part.defaults={callback:s.default.noOp,loop:!1,loopEnd:"1m",loopStart:0,playbackRate:1,probability:1,humanize:!1,mute:!1,events:[]},s.default.Part.prototype.start=function(t,e){var i=this.toTicks(t);return this._state.getValueAtTime(i)!==s.default.State.Started&&(e=this._loop?s.default.defaultArg(e,this._loopStart):s.default.defaultArg(e,0),e=this.toTicks(e),this._state.add({state:s.default.State.Started,time:i,offset:e}),this._forEach(function(t){this._startNote(t,i,e)})),this},s.default.Part.prototype._startNote=function(t,e,i){e-=i,this._loop?t.startOffset>=this._loopStart&&t.startOffset<this._loopEnd?(t.startOffset<i&&(e+=this._getLoopDuration()),t.start(s.default.Ticks(e))):t.startOffset<this._loopStart&&t.startOffset>=i&&(t.loop=!1,t.start(s.default.Ticks(e))):t.startOffset>=i&&t.start(s.default.Ticks(e))},Object.defineProperty(s.default.Part.prototype,"startOffset",{get:function(){return this._startOffset},set:function(t){this._startOffset=t,this._forEach(function(t){t.startOffset+=this._startOffset})}}),s.default.Part.prototype.stop=function(t){var e=this.toTicks(t);return this._state.cancel(e),this._state.setStateAtTime(s.default.State.Stopped,e),this._forEach(function(e){e.stop(t)}),this},s.default.Part.prototype.at=function(t,e){t=s.default.TransportTime(t);for(var i=s.default.Ticks(1).toSeconds(),n=0;n<this._events.length;n++){var o=this._events[n];if(Math.abs(t.toTicks()-o.startOffset)<i)return s.default.isDefined(e)&&(o.value=e),o}return s.default.isDefined(e)?(this.add(t,e),this._events[this._events.length-1]):null},s.default.Part.prototype.add=function(t,e){var i;return t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t),e instanceof s.default.Event?(i=e).callback=this._tick.bind(this):i=new s.default.Event({callback:this._tick.bind(this),value:e}),i.startOffset=t,i.set({loopEnd:this.loopEnd,loopStart:this.loopStart,loop:this.loop,humanize:this.humanize,playbackRate:this.playbackRate,probability:this.probability}),this._events.push(i),this._restartEvent(i),this},s.default.Part.prototype._restartEvent=function(t){this._state.forEach(function(e){e.state===s.default.State.Started?this._startNote(t,e.time,e.offset):t.stop(s.default.Ticks(e.time))}.bind(this))},s.default.Part.prototype.remove=function(t,e){t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n.startOffset===t&&(s.default.isUndef(e)||s.default.isDefined(e)&&n.value===e)&&(this._events.splice(i,1),n.dispose())}return this},s.default.Part.prototype.removeAll=function(){return this._forEach(function(t){t.dispose()}),this._events=[],this},s.default.Part.prototype.cancel=function(t){return this._forEach(function(e){e.cancel(t)}),this._state.cancel(this.toTicks(t)),this},s.default.Part.prototype._forEach=function(t,e){if(this._events){e=s.default.defaultArg(e,this);for(var i=this._events.length-1;i>=0;i--){var n=this._events[i];n instanceof s.default.Part?n._forEach(t,e):t.call(e,n)}}return this},s.default.Part.prototype._setAll=function(t,e){this._forEach(function(i){i[t]=e})},s.default.Part.prototype._tick=function(t,e){this.mute||this.callback(t,e)},s.default.Part.prototype._testLoopBoundries=function(t){this._loop&&(t.startOffset<this._loopStart||t.startOffset>=this._loopEnd)?t.cancel(0):t.state===s.default.State.Stopped&&this._restartEvent(t)},Object.defineProperty(s.default.Part.prototype,"probability",{get:function(){return this._probability},set:function(t){this._probability=t,this._setAll("probability",t)}}),Object.defineProperty(s.default.Part.prototype,"humanize",{get:function(){return this._humanize},set:function(t){this._humanize=t,this._setAll("humanize",t)}}),Object.defineProperty(s.default.Part.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._forEach(function(e){e._loopStart=this._loopStart,e._loopEnd=this._loopEnd,e.loop=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopEnd",{get:function(){return s.default.Ticks(this._loopEnd).toSeconds()},set:function(t){this._loopEnd=this.toTicks(t),this._loop&&this._forEach(function(e){e.loopEnd=t,this._testLoopBoundries(e)})}}),Object.defineProperty(s.default.Part.prototype,"loopStart",{get:function(){return s.default.Ticks(this._loopStart).toSeconds()},set:function(t){this._loopStart=this.toTicks(t),this._loop&&this._forEach(function(t){t.loopStart=this.loopStart,this._testLoopBoundries(t)})}}),Object.defineProperty(s.default.Part.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this._setAll("playbackRate",t)}}),Object.defineProperty(s.default.Part.prototype,"length",{get:function(){return this._events.length}}),s.default.Part.prototype.dispose=function(){return s.default.Event.prototype.dispose.call(this),this.removeAll(),this.callback=null,this._events=null,this},e.default=s.default.Part},function(t,e,i){"use strict";i.r(e);var s=i(0);i(51);s.default.Loop=function(){var t=s.default.defaults(arguments,["callback","interval"],s.default.Loop);s.default.call(this),this._event=new s.default.Event({callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations},s.default.extend(s.default.Loop),s.default.Loop.defaults={interval:"4n",callback:s.default.noOp,playbackRate:1,iterations:1/0,probability:!0,mute:!1},s.default.Loop.prototype.start=function(t){return this._event.start(t),this},s.default.Loop.prototype.stop=function(t){return this._event.stop(t),this},s.default.Loop.prototype.cancel=function(t){return this._event.cancel(t),this},s.default.Loop.prototype._tick=function(t){this.callback(t)},Object.defineProperty(s.default.Loop.prototype,"state",{get:function(){return this._event.state}}),Object.defineProperty(s.default.Loop.prototype,"progress",{get:function(){return this._event.progress}}),Object.defineProperty(s.default.Loop.prototype,"interval",{get:function(){return this._event.loopEnd},set:function(t){this._event.loopEnd=t}}),Object.defineProperty(s.default.Loop.prototype,"playbackRate",{get:function(){return this._event.playbackRate},set:function(t){this._event.playbackRate=t}}),Object.defineProperty(s.default.Loop.prototype,"humanize",{get:function(){return this._event.humanize},set:function(t){this._event.humanize=t}}),Object.defineProperty(s.default.Loop.prototype,"probability",{get:function(){return this._event.probability},set:function(t){this._event.probability=t}}),Object.defineProperty(s.default.Loop.prototype,"mute",{get:function(){return this._event.mute},set:function(t){this._event.mute=t}}),Object.defineProperty(s.default.Loop.prototype,"iterations",{get:function(){return!0===this._event.loop?1/0:this._event.loop},set:function(t){this._event.loop=t===1/0||t}}),s.default.Loop.prototype.dispose=function(){this._event.dispose(),this._event=null,this.callback=null},e.default=s.default.Loop},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33);s.default.StereoXFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackLR=new s.default.Gain,this._feedbackRL=new s.default.Gain,this.effectReturnL.chain(this._feedbackLR,this.effectSendR),this.effectReturnR.chain(this._feedbackRL,this.effectSendL),this.feedback.fan(this._feedbackLR.gain,this._feedbackRL.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoXFeedbackEffect,s.default.StereoEffect),s.default.StereoXFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackLR.dispose(),this._feedbackLR=null,this._feedbackRL.dispose(),this._feedbackRL=null,this},e.default=s.default.StereoXFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(53),i(52);s.default.MidSideEffect=function(){s.default.Effect.apply(this,arguments),this._midSideSplit=new s.default.MidSideSplit,this._midSideMerge=new s.default.MidSideMerge,this.midSend=this._midSideSplit.mid,this.sideSend=this._midSideSplit.side,this.midReturn=this._midSideMerge.mid,this.sideReturn=this._midSideMerge.side,this.effectSend.connect(this._midSideSplit),this._midSideMerge.connect(this.effectReturn)},s.default.extend(s.default.MidSideEffect,s.default.Effect),s.default.MidSideEffect.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this.midSend=null,this.sideSend=null,this.midReturn=null,this.sideReturn=null,this},e.default=s.default.MidSideEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11),i(8);s.default.Convolver=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.Convolver);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this._buffer=new s.default.Buffer(t.url,function(e){this.buffer=e.get(),t.onload()}.bind(this)),this._buffer.loaded&&(this.buffer=this._buffer),this.normalize=t.normalize,this.connectEffect(this._convolver)},s.default.extend(s.default.Convolver,s.default.Effect),s.default.Convolver.defaults={onload:s.default.noOp,normalize:!0},Object.defineProperty(s.default.Convolver.prototype,"buffer",{get:function(){return this._buffer.length?this._buffer:null},set:function(t){this._buffer.set(t),this._convolver.buffer&&(this.effectSend.disconnect(),this._convolver.disconnect(),this._convolver=this.context.createConvolver(),this.connectEffect(this._convolver)),this._convolver.buffer=this._buffer.get()}}),Object.defineProperty(s.default.Convolver.prototype,"normalize",{get:function(){return this._convolver.normalize},set:function(t){this._convolver.normalize=t}}),s.default.Convolver.prototype.load=function(t,e){return this._buffer.load(t,function(t){this.buffer=t,e&&e()}.bind(this))},s.default.Convolver.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._buffer.dispose(),this._buffer=null,this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Convolver},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(5),i(13);s.default.Modulo=function(t){s.default.SignalBase.call(this),this.createInsOuts(1,0),this._shaper=new s.default.WaveShaper(Math.pow(2,16)),this._multiply=new s.default.Multiply,this._subtract=this.output=new s.default.Subtract,this._modSignal=new s.default.Signal(t),s.default.connect(this.input,this._shaper),s.default.connect(this.input,this._subtract),this._modSignal.connect(this._multiply,0,0),this._shaper.connect(this._multiply,0,1),this._multiply.connect(this._subtract,0,1),this._setWaveShaper(t)},s.default.extend(s.default.Modulo,s.default.SignalBase),s.default.Modulo.prototype._setWaveShaper=function(t){this._shaper.setMap(function(e){return Math.floor((e+1e-4)/t)})},Object.defineProperty(s.default.Modulo.prototype,"value",{get:function(){return this._modSignal.value},set:function(t){this._modSignal.value=t,this._setWaveShaper(t)}}),s.default.Modulo.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this._multiply.dispose(),this._multiply=null,this._subtract.dispose(),this._subtract=null,this._modSignal.dispose(),this._modSignal=null,this},e.default=s.default.Modulo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(20),i(92);s.default.OfflineContext=function(t,e,i){var n=new OfflineAudioContext(t,e*i,i);s.default.Context.call(this,{context:n,clockSource:"offline",lookAhead:0,updateInterval:128/i}),this._duration=e,this._currentTime=0},s.default.extend(s.default.OfflineContext,s.default.Context),s.default.OfflineContext.prototype.now=function(){return this._currentTime},s.default.OfflineContext.prototype.resume=function(){return Promise.resolve()},s.default.OfflineContext.prototype.render=function(){for(;this._duration-this._currentTime>=0;)this.emit("tick"),this._currentTime+=.005;return this._context.startRendering()},s.default.OfflineContext.prototype.close=function(){return this._context=null,Promise.resolve()},e.default=s.default.OfflineContext},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(11),i(76),i(40);s.default.Offline=function(t,e){var i=s.default.context.sampleRate,n=s.default.context,o=new s.default.OfflineContext(2,e,i);s.default.context=o;var a=t(s.default.Transport),r=null;return r=a&&s.default.isFunction(a.then)?a.then(function(){return o.render()}):o.render(),s.default.context=n,r.then(function(t){return new s.default.Buffer(t)})},e.default=s.default.Offline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(11);s.default.Buffers=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Buffers);for(var n in s.default.call(this),this._buffers={},this.baseUrl=i.baseUrl,this._loadingCount=0,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Buffers),s.default.Buffers.defaults={onload:s.default.noOp,baseUrl:""},s.default.Buffers.prototype.has=function(t){return this._buffers.hasOwnProperty(t)},s.default.Buffers.prototype.get=function(t){if(this.has(t))return this._buffers[t];throw new Error("Tone.Buffers: no buffer named "+t)},s.default.Buffers.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Buffers.prototype,"loaded",{get:function(){var t=!0;for(var e in this._buffers){var i=this.get(e);t=t&&i.loaded}return t}}),s.default.Buffers.prototype.add=function(t,e,i){return i=s.default.defaultArg(i,s.default.noOp),e instanceof s.default.Buffer?(this._buffers[t]=e,i(this)):e instanceof AudioBuffer?(this._buffers[t]=new s.default.Buffer(e),i(this)):s.default.isString(e)&&(this._buffers[t]=new s.default.Buffer(this.baseUrl+e,i)),this},s.default.Buffers.prototype.dispose=function(){for(var t in s.default.prototype.dispose.call(this),this._buffers)this._buffers[t].dispose();return this._buffers=null,this},e.default=s.default.Buffers},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlPattern=function(){var t=s.default.defaults(arguments,["values","type"],s.default.CtrlPattern);s.default.call(this),this.values=t.values,this.index=0,this._type=null,this._shuffled=null,this._direction=null,this.type=t.type},s.default.extend(s.default.CtrlPattern),s.default.CtrlPattern.Type={Up:"up",Down:"down",UpDown:"upDown",DownUp:"downUp",AlternateUp:"alternateUp",AlternateDown:"alternateDown",Random:"random",RandomWalk:"randomWalk",RandomOnce:"randomOnce"},s.default.CtrlPattern.defaults={type:s.default.CtrlPattern.Type.Up,values:[]},Object.defineProperty(s.default.CtrlPattern.prototype,"value",{get:function(){if(0!==this.values.length){if(1===this.values.length)return this.values[0];this.index=Math.min(this.index,this.values.length-1);var t=this.values[this.index];return this.type===s.default.CtrlPattern.Type.RandomOnce&&(this.values.length!==this._shuffled.length&&this._shuffleValues(),t=this.values[this._shuffled[this.index]]),t}}}),Object.defineProperty(s.default.CtrlPattern.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this._shuffled=null,this._type===s.default.CtrlPattern.Type.Up||this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.RandomOnce||this._type===s.default.CtrlPattern.Type.AlternateUp?this.index=0:this._type!==s.default.CtrlPattern.Type.Down&&this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this.index=this.values.length-1),this._type===s.default.CtrlPattern.Type.UpDown||this._type===s.default.CtrlPattern.Type.AlternateUp?this._direction=s.default.CtrlPattern.Type.Up:this._type!==s.default.CtrlPattern.Type.DownUp&&this._type!==s.default.CtrlPattern.Type.AlternateDown||(this._direction=s.default.CtrlPattern.Type.Down),this._type===s.default.CtrlPattern.Type.RandomOnce?this._shuffleValues():this._type===s.default.CtrlPattern.Type.Random&&(this.index=Math.floor(Math.random()*this.values.length))}}),s.default.CtrlPattern.prototype.next=function(){var t=this.type;return t===s.default.CtrlPattern.Type.Up?(this.index++,this.index>=this.values.length&&(this.index=0)):t===s.default.CtrlPattern.Type.Down?(this.index--,this.index<0&&(this.index=this.values.length-1)):t===s.default.CtrlPattern.Type.UpDown||t===s.default.CtrlPattern.Type.DownUp?(this._direction===s.default.CtrlPattern.Type.Up?this.index++:this.index--,this.index<0?(this.index=1,this._direction=s.default.CtrlPattern.Type.Up):this.index>=this.values.length&&(this.index=this.values.length-2,this._direction=s.default.CtrlPattern.Type.Down)):t===s.default.CtrlPattern.Type.Random?this.index=Math.floor(Math.random()*this.values.length):t===s.default.CtrlPattern.Type.RandomWalk?Math.random()<.5?(this.index--,this.index=Math.max(this.index,0)):(this.index++,this.index=Math.min(this.index,this.values.length-1)):t===s.default.CtrlPattern.Type.RandomOnce?(this.index++,this.index>=this.values.length&&(this.index=0,this._shuffleValues())):t===s.default.CtrlPattern.Type.AlternateUp?(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=2,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=1,this._direction=s.default.CtrlPattern.Type.Up),this.index>=this.values.length&&(this.index=0,this._direction=s.default.CtrlPattern.Type.Up)):t===s.default.CtrlPattern.Type.AlternateDown&&(this._direction===s.default.CtrlPattern.Type.Up?(this.index+=1,this._direction=s.default.CtrlPattern.Type.Down):(this.index-=2,this._direction=s.default.CtrlPattern.Type.Up),this.index<0&&(this.index=this.values.length-1,this._direction=s.default.CtrlPattern.Type.Down)),this.value},s.default.CtrlPattern.prototype._shuffleValues=function(){var t=[];this._shuffled=[];for(var e=0;e<this.values.length;e++)t[e]=e;for(;t.length>0;){var i=t.splice(Math.floor(t.length*Math.random()),1);this._shuffled.push(i[0])}},s.default.CtrlPattern.prototype.dispose=function(){this._shuffled=null,this.values=null},e.default=s.default.CtrlPattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(56),i(55);s.default.TransportRepeatEvent=function(t,e){s.default.TransportEvent.call(this,t,e),e=s.default.defaultArg(e,s.default.TransportRepeatEvent.defaults),this.duration=s.default.Ticks(e.duration),this._interval=s.default.Ticks(e.interval),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this),this.Transport.on("start loopStart",this._boundRestart),this._restart()},s.default.extend(s.default.TransportRepeatEvent,s.default.TransportEvent),s.default.TransportRepeatEvent.defaults={duration:1/0,interval:1},s.default.TransportRepeatEvent.prototype.invoke=function(t){this._createEvents(t),s.default.TransportEvent.prototype.invoke.call(this,t)},s.default.TransportRepeatEvent.prototype._createEvents=function(t){var e=this.Transport.getTicksAtTime(t);e>=this.time&&e>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)))},s.default.TransportRepeatEvent.prototype._restart=function(t){this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this._nextTick=this.time;var e=this.Transport.getTicksAtTime(t);e>this.time&&(this._nextTick=this.time+Math.ceil((e-this.time)/this._interval)*this._interval),this._currentId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick)),this._nextTick+=this._interval,this._nextId=this.Transport.scheduleOnce(this.invoke.bind(this),s.default.Ticks(this._nextTick))},s.default.TransportRepeatEvent.prototype.dispose=function(){return this.Transport.clear(this._currentId),this.Transport.clear(this._nextId),this.Transport.off("start loopStart",this._boundRestart),this._boundCreateEvents=null,s.default.TransportEvent.prototype.dispose.call(this),this.duration=null,this._interval=null,this},e.default=s.default.TransportRepeatEvent},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.IntervalTimeline=function(){s.default.call(this),this._root=null,this._length=0},s.default.extend(s.default.IntervalTimeline),s.default.IntervalTimeline.prototype.add=function(t){if(s.default.isUndef(t.time)||s.default.isUndef(t.duration))throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");t.time=t.time.valueOf();var e=new n(t.time,t.time+t.duration,t);for(null===this._root?this._root=e:this._root.insert(e),this._length++;null!==e;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this},s.default.IntervalTimeline.prototype.remove=function(t){if(null!==this._root){var e=[];this._root.search(t.time,e);for(var i=0;i<e.length;i++){var s=e[i];if(s.event===t){this._removeNode(s),this._length--;break}}}return this},Object.defineProperty(s.default.IntervalTimeline.prototype,"length",{get:function(){return this._length}}),s.default.IntervalTimeline.prototype.cancel=function(t){return this.forEachFrom(t,function(t){this.remove(t)}.bind(this)),this},s.default.IntervalTimeline.prototype._setRoot=function(t){this._root=t,null!==this._root&&(this._root.parent=null)},s.default.IntervalTimeline.prototype._replaceNodeInParent=function(t,e){null!==t.parent?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)},s.default.IntervalTimeline.prototype._removeNode=function(t){if(null===t.left&&null===t.right)this._replaceNodeInParent(t,null);else if(null===t.right)this._replaceNodeInParent(t,t.left);else if(null===t.left)this._replaceNodeInParent(t,t.right);else{var e,i;if(t.getBalance()>0)if(null===t.left.right)(e=t.left).right=t.right,i=e;else{for(e=t.left.right;null!==e.right;)e=e.right;e.parent.right=e.left,i=e.parent,e.left=t.left,e.right=t.right}else if(null===t.right.left)(e=t.right).left=t.left,i=e;else{for(e=t.right.left;null!==e.left;)e=e.left;e.parent.left=e.right,i=e.parent,e.left=t.left,e.right=t.right}null!==t.parent?t.isLeftChild()?t.parent.left=e:t.parent.right=e:this._setRoot(e),this._rebalance(i)}t.dispose()},s.default.IntervalTimeline.prototype._rotateLeft=function(t){var e=t.parent,i=t.isLeftChild(),s=t.right;t.right=s.left,s.left=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rotateRight=function(t){var e=t.parent,i=t.isLeftChild(),s=t.left;t.left=s.right,s.right=t,null!==e?i?e.left=s:e.right=s:this._setRoot(s)},s.default.IntervalTimeline.prototype._rebalance=function(t){var e=t.getBalance();e>1?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))},s.default.IntervalTimeline.prototype.get=function(t){if(null!==this._root){var e=[];if(this._root.search(t,e),e.length>0){for(var i=e[0],s=1;s<e.length;s++)e[s].low>i.low&&(i=e[s]);return i.event}}return null},s.default.IntervalTimeline.prototype.forEach=function(t){if(null!==this._root){var e=[];this._root.traverse(function(t){e.push(t)});for(var i=0;i<e.length;i++){var s=e[i].event;s&&t(s)}}return this},s.default.IntervalTimeline.prototype.forEachAtTime=function(t,e){if(null!==this._root){var i=[];this._root.search(t,i);for(var s=i.length-1;s>=0;s--){var n=i[s].event;n&&e(n)}}return this},s.default.IntervalTimeline.prototype.forEachFrom=function(t,e){if(null!==this._root){var i=[];this._root.searchAfter(t,i);for(var s=i.length-1;s>=0;s--){e(i[s].event)}}return this},s.default.IntervalTimeline.prototype.dispose=function(){var t=[];null!==this._root&&this._root.traverse(function(e){t.push(e)});for(var e=0;e<t.length;e++)t[e].dispose();return t=null,this._root=null,this};var n=function(t,e,i){this.event=i,this.low=t,this.high=e,this.max=this.high,this._left=null,this._right=null,this.parent=null,this.height=0};n.prototype.insert=function(t){t.low<=this.low?null===this.left?this.left=t:this.left.insert(t):null===this.right?this.right=t:this.right.insert(t)},n.prototype.search=function(t,e){t>this.max||(null!==this.left&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),this.low>t||null!==this.right&&this.right.search(t,e))},n.prototype.searchAfter=function(t,e){this.low>=t&&(e.push(this),null!==this.left&&this.left.searchAfter(t,e)),null!==this.right&&this.right.searchAfter(t,e)},n.prototype.traverse=function(t){t(this),null!==this.left&&this.left.traverse(t),null!==this.right&&this.right.traverse(t)},n.prototype.updateHeight=function(){null!==this.left&&null!==this.right?this.height=Math.max(this.left.height,this.right.height)+1:null!==this.right?this.height=this.right.height+1:null!==this.left?this.height=this.left.height+1:this.height=0},n.prototype.updateMax=function(){this.max=this.high,null!==this.left&&(this.max=Math.max(this.max,this.left.max)),null!==this.right&&(this.max=Math.max(this.max,this.right.max))},n.prototype.getBalance=function(){var t=0;return null!==this.left&&null!==this.right?t=this.left.height-this.right.height:null!==this.left?t=this.left.height+1:null!==this.right&&(t=-(this.right.height+1)),t},n.prototype.isLeftChild=function(){return null!==this.parent&&this.parent.left===this},Object.defineProperty(n.prototype,"left",{get:function(){return this._left},set:function(t){this._left=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),Object.defineProperty(n.prototype,"right",{get:function(){return this._right},set:function(t){this._right=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}}),n.prototype.dispose=function(){this.parent=null,this._left=null,this._right=null,this.event=null},e.default=s.default.IntervalTimeline},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2);function n(t){return function(e,i){i=this.toSeconds(i),t.apply(this,arguments);var s=this._events.get(i),n=this._events.previousEvent(s),o=this._getTicksUntilEvent(n,i);return s.ticks=Math.max(o,0),this}}s.default.TickSignal=function(t){t=s.default.defaultArg(t,1),s.default.Signal.call(this,{units:s.default.Type.Ticks,value:t}),this._events.memory=1/0,this.cancelScheduledValues(0),this._events.add({type:s.default.Param.AutomationType.SetValue,time:0,value:t})},s.default.extend(s.default.TickSignal,s.default.Signal),s.default.TickSignal.prototype.setValueAtTime=n(s.default.Signal.prototype.setValueAtTime),s.default.TickSignal.prototype.linearRampToValueAtTime=n(s.default.Signal.prototype.linearRampToValueAtTime),s.default.TickSignal.prototype.setTargetAtTime=function(t,e,i){e=this.toSeconds(e),this.setRampPoint(e),t=this._fromUnits(t);for(var s=this._events.get(e),n=Math.round(Math.max(1/i,1)),o=0;o<=n;o++){var a=i*o+e,r=this._exponentialApproach(s.time,s.value,t,i,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype.exponentialRampToValueAtTime=function(t,e){e=this.toSeconds(e),t=this._fromUnits(t);for(var i=this._events.get(e),s=Math.round(Math.max(10*(e-i.time),1)),n=(e-i.time)/s,o=0;o<=s;o++){var a=n*o+i.time,r=this._exponentialInterpolate(i.time,i.value,e,t,a);this.linearRampToValueAtTime(this._toUnits(r),a)}return this},s.default.TickSignal.prototype._getTicksUntilEvent=function(t,e){if(null===t)t={ticks:0,time:0};else if(s.default.isUndef(t.ticks)){var i=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(i,t.time)}var n=this.getValueAtTime(t.time),o=this.getValueAtTime(e);return this._events.get(e).time===e&&this._events.get(e).type===s.default.Param.AutomationType.SetValue&&(o=this.getValueAtTime(e-this.sampleTime)),.5*(e-t.time)*(n+o)+t.ticks},s.default.TickSignal.prototype.getTicksAtTime=function(t){t=this.toSeconds(t);var e=this._events.get(t);return Math.max(this._getTicksUntilEvent(e,t),0)},s.default.TickSignal.prototype.getDurationOfTicks=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this.getTimeOfTick(i+t)-e},s.default.TickSignal.prototype.getTimeOfTick=function(t){var e=this._events.get(t,"ticks"),i=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&i&&i.type===s.default.Param.AutomationType.Linear&&e.value!==i.value){var n=this.getValueAtTime(e.time),o=(this.getValueAtTime(i.time)-n)/(i.time-e.time),a=Math.sqrt(Math.pow(n,2)-2*o*(e.ticks-t)),r=(-n+a)/o;return(r>0?r:(-n-a)/o)+e.time}return e?0===e.value?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue},s.default.TickSignal.prototype.ticksToTime=function(t,e){return e=this.toSeconds(e),new s.default.Time(this.getDurationOfTicks(t,e))},s.default.TickSignal.prototype.timeToTicks=function(t,e){e=this.toSeconds(e),t=this.toSeconds(t);var i=this.getTicksAtTime(e),n=this.getTicksAtTime(e+t);return new s.default.Ticks(n-i)},e.default=s.default.TickSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(57),i(34),i(35),i(20);s.default.Clock=function(){var t=s.default.defaults(arguments,["callback","frequency"],s.default.Clock);s.default.Emitter.call(this),this.callback=t.callback,this._nextTick=0,this._tickSource=new s.default.TickSource(t.frequency),this._lastUpdate=0,this.frequency=this._tickSource.frequency,this._readOnly("frequency"),this._state=new s.default.TimelineState(s.default.State.Stopped),this._state.setStateAtTime(s.default.State.Stopped,0),this._boundLoop=this._loop.bind(this),this.context.on("tick",this._boundLoop)},s.default.extend(s.default.Clock,s.default.Emitter),s.default.Clock.defaults={callback:s.default.noOp,frequency:1},Object.defineProperty(s.default.Clock.prototype,"state",{get:function(){return this._state.getValueAtTime(this.now())}}),s.default.Clock.prototype.start=function(t,e){return this.context.resume(),t=this.toSeconds(t),this._state.getValueAtTime(t)!==s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Started,t),this._tickSource.start(t,e),t<this._lastUpdate&&this.emit("start",t,e)),this},s.default.Clock.prototype.stop=function(t){return t=this.toSeconds(t),this._state.cancel(t),this._state.setStateAtTime(s.default.State.Stopped,t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this},s.default.Clock.prototype.pause=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)===s.default.State.Started&&(this._state.setStateAtTime(s.default.State.Paused,t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this},Object.defineProperty(s.default.Clock.prototype,"ticks",{get:function(){return Math.ceil(this.getTicksAtTime(this.now()))},set:function(t){this._tickSource.ticks=t}}),Object.defineProperty(s.default.Clock.prototype,"seconds",{get:function(){return this._tickSource.seconds},set:function(t){this._tickSource.seconds=t}}),s.default.Clock.prototype.getSecondsAtTime=function(t){return this._tickSource.getSecondsAtTime(t)},s.default.Clock.prototype.setTicksAtTime=function(t,e){return this._tickSource.setTicksAtTime(t,e),this},s.default.Clock.prototype.getTicksAtTime=function(t){return this._tickSource.getTicksAtTime(t)},s.default.Clock.prototype.nextTickTime=function(t,e){e=this.toSeconds(e);var i=this.getTicksAtTime(e);return this._tickSource.getTimeOfTick(i+t,e)},s.default.Clock.prototype._loop=function(){var t=this._lastUpdate,e=this.now();this._lastUpdate=e,t!==e&&(this._state.forEachBetween(t,e,function(t){switch(t.state){case s.default.State.Started:var e=this._tickSource.getTicksAtTime(t.time);this.emit("start",t.time,e);break;case s.default.State.Stopped:0!==t.time&&this.emit("stop",t.time);break;case s.default.State.Paused:this.emit("pause",t.time)}}.bind(this)),this._tickSource.forEachTickBetween(t,e,function(t,e){this.callback(t,e)}.bind(this)))},s.default.Clock.prototype.getStateAtTime=function(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)},s.default.Clock.prototype.dispose=function(){s.default.Emitter.prototype.dispose.call(this),this.context.off("tick",this._boundLoop),this._writable("frequency"),this._tickSource.dispose(),this._tickSource=null,this.frequency=null,this._boundLoop=null,this._nextTick=1/0,this.callback=null,this._state.dispose(),this._state=null},e.default=s.default.Clock},function(t,e,i){"use strict";i.r(e);var s=i(0);i(2),i(5),i(7);s.default.GreaterThanZero=function(){s.default.SignalBase.call(this),this._thresh=this.output=new s.default.WaveShaper(function(t){return t<=0?0:1},127),this._scale=this.input=new s.default.Multiply(1e4),this._scale.connect(this._thresh)},s.default.extend(s.default.GreaterThanZero,s.default.SignalBase),s.default.GreaterThanZero.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._thresh.dispose(),this._thresh=null,this},e.default=s.default.GreaterThanZero},function(t,e,i){"use strict";i.r(e);var s=i(0);i(84),i(13),i(2);s.default.GreaterThan=function(t){s.default.Signal.call(this),this.createInsOuts(2,0),this._param=this.input[0]=new s.default.Subtract(t),this.input[1]=this._param.input[1],this._gtz=this.output=new s.default.GreaterThanZero,this._param.connect(this._gtz)},s.default.extend(s.default.GreaterThan,s.default.Signal),s.default.GreaterThan.prototype.dispose=function(){return s.default.Signal.prototype.dispose.call(this),this._gtz.dispose(),this._gtz=null,this},e.default=s.default.GreaterThan},function(t,e,i){"use strict";i.r(e);var s=i(0);i(47),i(26);s.default.ScaledEnvelope=function(){var t=s.default.defaults(arguments,["attack","decay","sustain","release"],s.default.Envelope);s.default.Envelope.call(this,t),t=s.default.defaultArg(t,s.default.ScaledEnvelope.defaults),this._exp=this.output=new s.default.Pow(t.exponent),this._scale=this.output=new s.default.Scale(t.min,t.max),this._sig.chain(this._exp,this._scale)},s.default.extend(s.default.ScaledEnvelope,s.default.Envelope),s.default.ScaledEnvelope.defaults={min:0,max:1,exponent:1},Object.defineProperty(s.default.ScaledEnvelope.prototype,"min",{get:function(){return this._scale.min},set:function(t){this._scale.min=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"max",{get:function(){return this._scale.max},set:function(t){this._scale.max=t}}),Object.defineProperty(s.default.ScaledEnvelope.prototype,"exponent",{get:function(){return this._exp.value},set:function(t){this._exp.value=t}}),s.default.ScaledEnvelope.prototype.dispose=function(){return s.default.Envelope.prototype.dispose.call(this),this._scale.dispose(),this._scale=null,this._exp.dispose(),this._exp=null,this},e.default=s.default.ScaledEnvelope},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(30);s.default.Abs=function(){s.default.SignalBase.call(this),this._abs=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:Math.abs(t)},1024)},s.default.extend(s.default.Abs,s.default.SignalBase),s.default.Abs.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._abs.dispose(),this._abs=null,this},e.default=s.default.Abs},function(t,e,i){"use strict";i.r(e);var s=i(0);i(3),i(1);s.default.Solo=function(){var t=s.default.defaults(arguments,["solo"],s.default.Solo);s.default.AudioNode.call(this),this.input=this.output=new s.default.Gain,this._soloBind=this._soloed.bind(this),this.context.on("solo",this._soloBind),this.solo=t.solo},s.default.extend(s.default.Solo,s.default.AudioNode),s.default.Solo.defaults={solo:!1},Object.defineProperty(s.default.Solo.prototype,"solo",{get:function(){return this._isSoloed()},set:function(t){t?this._addSolo():this._removeSolo(),this.context.emit("solo",this)}}),Object.defineProperty(s.default.Solo.prototype,"muted",{get:function(){return 0===this.input.gain.value}}),s.default.Solo.prototype._addSolo=function(){s.default.isArray(this.context._currentSolo)||(this.context._currentSolo=[]),this._isSoloed()||this.context._currentSolo.push(this)},s.default.Solo.prototype._removeSolo=function(){if(this._isSoloed()){var t=this.context._currentSolo.indexOf(this);this.context._currentSolo.splice(t,1)}},s.default.Solo.prototype._isSoloed=function(){return!!s.default.isArray(this.context._currentSolo)&&(0!==this.context._currentSolo.length&&-1!==this.context._currentSolo.indexOf(this))},s.default.Solo.prototype._noSolos=function(){return!s.default.isArray(this.context._currentSolo)||0===this.context._currentSolo.length},s.default.Solo.prototype._soloed=function(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0},s.default.Solo.prototype.dispose=function(){return this.context.off("solo",this._soloBind),this._removeSolo(),this._soloBind=null,s.default.AudioNode.prototype.dispose.call(this),this},e.default=s.default.Solo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7);s.default.EqualPowerGain=function(){s.default.SignalBase.call(this),this._eqPower=this.input=this.output=new s.default.WaveShaper(function(t){return Math.abs(t)<.001?0:s.default.equalPowerScale(t)}.bind(this),4096)},s.default.extend(s.default.EqualPowerGain,s.default.SignalBase),s.default.EqualPowerGain.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._eqPower.dispose(),this._eqPower=null,this},e.default=s.default.EqualPowerGain},function(t,e,i){"use strict";i.r(e);var s=i(0);i(5),i(2);s.default.Negate=function(){s.default.SignalBase.call(this),this._multiply=this.input=this.output=new s.default.Multiply(-1)},s.default.extend(s.default.Negate,s.default.SignalBase),s.default.Negate.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._multiply.dispose(),this._multiply=null,this},e.default=s.default.Negate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(48),i(27),i(1);s.default.PanVol=function(){var t=s.default.defaults(arguments,["pan","volume"],s.default.PanVol);s.default.AudioNode.call(this),this._panner=this.input=new s.default.Panner(t.pan),this.pan=this._panner.pan,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,this._readOnly(["pan","volume"])},s.default.extend(s.default.PanVol,s.default.AudioNode),s.default.PanVol.defaults={pan:0,volume:0,mute:!1},Object.defineProperty(s.default.PanVol.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.PanVol.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panner.dispose(),this._panner=null,this.pan=null,this._volume.dispose(),this._volume=null,this.volume=null,this},e.default=s.default.PanVol},function(t,e,i){"use strict";var s=i(0);if(s.default.supported){!s.default.global.hasOwnProperty("OfflineAudioContext")&&s.default.global.hasOwnProperty("webkitOfflineAudioContext")&&(s.default.global.OfflineAudioContext=s.default.global.webkitOfflineAudioContext);var n=new OfflineAudioContext(1,1,44100).startRendering();n&&s.default.isFunction(n.then)||(OfflineAudioContext.prototype._native_startRendering=OfflineAudioContext.prototype.startRendering,OfflineAudioContext.prototype.startRendering=function(){return new Promise(function(t){this.oncomplete=function(e){t(e.renderedBuffer)},this._native_startRendering()}.bind(this))})}},function(t,e,i){"use strict";e.a="13.8.25"},function(t,e,i){"use strict";i.r(e);var s=i(0);i(46);s.default.Midi=function(t,e){if(!(this instanceof s.default.Midi))return new s.default.Midi(t,e);s.default.Frequency.call(this,t,e)},s.default.extend(s.default.Midi,s.default.Frequency),s.default.Midi.prototype._defaultUnits="midi",s.default.Midi.prototype._frequencyToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._frequencyToUnits.call(this,t))},s.default.Midi.prototype._ticksToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._ticksToUnits.call(this,t))},s.default.Midi.prototype._beatsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._beatsToUnits.call(this,t))},s.default.Midi.prototype._secondsToUnits=function(t){return s.default.Frequency.ftom(s.default.Frequency.prototype._secondsToUnits.call(this,t))},s.default.Midi.prototype.toMidi=function(){return this.valueOf()},s.default.Midi.prototype.toFrequency=function(){return s.default.Frequency.mtof(this.toMidi())},s.default.Midi.prototype.transpose=function(t){return new this.constructor(this.toMidi()+t)},e.default=s.default.Midi},function(t,e,i){"use strict";i.r(e);var s=i(0);i(27),i(1);s.default.UserMedia=function(){var t=s.default.defaults(arguments,["volume"],s.default.UserMedia);s.default.AudioNode.call(this),this._mediaStream=null,this._stream=null,this._device=null,this._volume=this.output=new s.default.Volume(t.volume),this.volume=this._volume.volume,this._readOnly("volume"),this.mute=t.mute},s.default.extend(s.default.UserMedia,s.default.AudioNode),s.default.UserMedia.defaults={volume:0,mute:!1},s.default.UserMedia.prototype.open=function(t){return this.state===s.default.State.Started&&this.close(),s.default.UserMedia.enumerateDevices().then(function(e){var i;if(s.default.isNumber(t))i=e[t];else if(!(i=e.find(function(e){return e.label===t||e.deviceId===t}))&&e.length>0)i=e[0];else if(!i&&s.default.isDefined(t))throw new Error("Tone.UserMedia: no matching device: "+t);this._device=i;var n={audio:{echoCancellation:!1,sampleRate:this.context.sampleRate,noiseSuppression:!1,mozNoiseSuppression:!1}};return i&&(n.audio.deviceId=i.deviceId),navigator.mediaDevices.getUserMedia(n).then(function(t){return this._stream||(this._stream=t,this._mediaStream=this.context.createMediaStreamSource(t),s.default.connect(this._mediaStream,this.output)),this}.bind(this))}.bind(this))},s.default.UserMedia.prototype.close=function(){return this._stream&&(this._stream.getAudioTracks().forEach(function(t){t.stop()}),this._stream=null,this._mediaStream.disconnect(),this._mediaStream=null),this._device=null,this},s.default.UserMedia.enumerateDevices=function(){return navigator.mediaDevices.enumerateDevices().then(function(t){return t.filter(function(t){return"audioinput"===t.kind})})},Object.defineProperty(s.default.UserMedia.prototype,"state",{get:function(){return this._stream&&this._stream.active?s.default.State.Started:s.default.State.Stopped}}),Object.defineProperty(s.default.UserMedia.prototype,"deviceId",{get:function(){return this._device?this._device.deviceId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"groupId",{get:function(){return this._device?this._device.groupId:null}}),Object.defineProperty(s.default.UserMedia.prototype,"label",{get:function(){return this._device?this._device.label:null}}),Object.defineProperty(s.default.UserMedia.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),s.default.UserMedia.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this.close(),this._writable("volume"),this._volume.dispose(),this._volume=null,this.volume=null,this},Object.defineProperty(s.default.UserMedia,"supported",{get:function(){return s.default.isDefined(navigator.mediaDevices)&&s.default.isFunction(navigator.mediaDevices.getUserMedia)}}),e.default=s.default.UserMedia},function(t,e,i){"use strict";i.r(e);var s=i(0);i(65),i(27),i(1);s.default.Players=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload"],s.default.Players);for(var n in s.default.AudioNode.call(this,i),this._volume=this.output=new s.default.Volume(i.volume),this.volume=this._volume.volume,this._readOnly("volume"),this._volume.output.output.channelCount=2,this._volume.output.output.channelCountMode="explicit",this.mute=i.mute,this._players={},this._loadingCount=0,this._fadeIn=i.fadeIn,this._fadeOut=i.fadeOut,t)this._loadingCount++,this.add(n,t[n],this._bufferLoaded.bind(this,i.onload))},s.default.extend(s.default.Players,s.default.AudioNode),s.default.Players.defaults={volume:0,mute:!1,onload:s.default.noOp,fadeIn:0,fadeOut:0},s.default.Players.prototype._bufferLoaded=function(t){this._loadingCount--,0===this._loadingCount&&t&&t(this)},Object.defineProperty(s.default.Players.prototype,"mute",{get:function(){return this._volume.mute},set:function(t){this._volume.mute=t}}),Object.defineProperty(s.default.Players.prototype,"fadeIn",{get:function(){return this._fadeIn},set:function(t){this._fadeIn=t,this._forEach(function(e){e.fadeIn=t})}}),Object.defineProperty(s.default.Players.prototype,"fadeOut",{get:function(){return this._fadeOut},set:function(t){this._fadeOut=t,this._forEach(function(e){e.fadeOut=t})}}),Object.defineProperty(s.default.Players.prototype,"state",{get:function(){var t=!1;return this._forEach(function(e){t=t||e.state===s.default.State.Started}),t?s.default.State.Started:s.default.State.Stopped}}),s.default.Players.prototype.has=function(t){return this._players.hasOwnProperty(t)},s.default.Players.prototype.get=function(t){if(this.has(t))return this._players[t];throw new Error("Tone.Players: no player named "+t)},s.default.Players.prototype._forEach=function(t){for(var e in this._players)t(this._players[e],e);return this},Object.defineProperty(s.default.Players.prototype,"loaded",{get:function(){var t=!0;return this._forEach(function(e){t=t&&e.loaded}),t}}),s.default.Players.prototype.add=function(t,e,i){return this._players[t]=new s.default.Player(e,i).connect(this.output),this._players[t].fadeIn=this._fadeIn,this._players[t].fadeOut=this._fadeOut,this},s.default.Players.prototype.stopAll=function(t){this._forEach(function(e){e.stop(t)})},s.default.Players.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._volume.dispose(),this._volume=null,this._writable("volume"),this.volume=null,this.output=null,this._forEach(function(t){t.dispose()}),this._players=null,this},e.default=s.default.Players},function(t,e,i){"use strict";i.r(e);var s=i(0);i(6),i(11),i(32);s.default.GrainPlayer=function(){var t=s.default.defaults(arguments,["url","onload"],s.default.GrainPlayer);s.default.Source.call(this,t),this.buffer=new s.default.Buffer(t.url,t.onload.bind(void 0,this)),this._clock=new s.default.Clock(this._tick.bind(this),t.grainSize),this._loopStart=0,this._loopEnd=0,this._activeSources=[],this._playbackRate=t.playbackRate,this._grainSize=t.grainSize,this._overlap=t.overlap,this.detune=t.detune,this.overlap=t.overlap,this.loop=t.loop,this.playbackRate=t.playbackRate,this.grainSize=t.grainSize,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.reverse=t.reverse,this._clock.on("stop",this._onstop.bind(this))},s.default.extend(s.default.GrainPlayer,s.default.Source),s.default.GrainPlayer.defaults={onload:s.default.noOp,overlap:.1,grainSize:.2,playbackRate:1,detune:0,loop:!1,loopStart:0,loopEnd:0,reverse:!1},s.default.GrainPlayer.prototype._start=function(t,e,i){e=s.default.defaultArg(e,0),e=this.toSeconds(e),t=this.toSeconds(t),this._offset=e,this._clock.start(t),i&&this.stop(t+this.toSeconds(i))},s.default.GrainPlayer.prototype._stop=function(t){this._clock.stop(t)},s.default.GrainPlayer.prototype._onstop=function(t){this._activeSources.forEach(function(e){e.fadeOut=0,e.stop(t)})},s.default.GrainPlayer.prototype._tick=function(t){if(!this.loop&&this._offset>this.buffer.duration)this.stop(t);else{var e=this._offset<this._overlap?0:this._overlap,i=new s.default.BufferSource({buffer:this.buffer,fadeIn:e,fadeOut:this._overlap,loop:this.loop,loopStart:this._loopStart,loopEnd:this._loopEnd,playbackRate:s.default.intervalToFrequencyRatio(this.detune/100)}).connect(this.output);i.start(t,this._offset),this._offset+=this.grainSize,i.stop(t+this.grainSize/this.playbackRate),this._activeSources.push(i),i.onended=function(){var t=this._activeSources.indexOf(i);-1!==t&&this._activeSources.splice(t,1)}.bind(this)}},Object.defineProperty(s.default.GrainPlayer.prototype,"playbackRate",{get:function(){return this._playbackRate},set:function(t){this._playbackRate=t,this.grainSize=this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopStart",{get:function(){return this._loopStart},set:function(t){this._loopStart=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loopEnd",{get:function(){return this._loopEnd},set:function(t){this._loopEnd=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"reverse",{get:function(){return this.buffer.reverse},set:function(t){this.buffer.reverse=t}}),Object.defineProperty(s.default.GrainPlayer.prototype,"grainSize",{get:function(){return this._grainSize},set:function(t){this._grainSize=this.toSeconds(t),this._clock.frequency.value=this._playbackRate/this._grainSize}}),Object.defineProperty(s.default.GrainPlayer.prototype,"overlap",{get:function(){return this._overlap},set:function(t){this._overlap=this.toSeconds(t)}}),Object.defineProperty(s.default.GrainPlayer.prototype,"loaded",{get:function(){return this.buffer.loaded}}),s.default.GrainPlayer.prototype.dispose=function(){return s.default.Source.prototype.dispose.call(this),this.buffer.dispose(),this.buffer=null,this._clock.dispose(),this._clock=null,this._activeSources.forEach(function(t){t.dispose()}),this._activeSources=null,this},e.default=s.default.GrainPlayer},function(t,e,i){"use strict";i.r(e);var s=i(0);i(16),i(2),i(45);s.default.TransportTimelineSignal=function(){s.default.Signal.apply(this,arguments),this.output=this._outputSig=new s.default.Signal(this._initialValue),this._lastVal=this.value,this._synced=s.default.Transport.scheduleRepeat(this._onTick.bind(this),"1i"),this._bindAnchorValue=this._anchorValue.bind(this),s.default.Transport.on("start stop pause",this._bindAnchorValue),this._events.memory=1/0},s.default.extend(s.default.TransportTimelineSignal,s.default.Signal),s.default.TransportTimelineSignal.prototype._onTick=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);this._lastVal!==e&&(this._lastVal=e,this._outputSig.linearRampToValueAtTime(e,t))},s.default.TransportTimelineSignal.prototype._anchorValue=function(t){var e=this.getValueAtTime(s.default.Transport.seconds);return this._lastVal=e,this._outputSig.cancelScheduledValues(t),this._outputSig.setValueAtTime(e,t),this},s.default.TransportTimelineSignal.prototype.getValueAtTime=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.getValueAtTime.call(this,t)},s.default.TransportTimelineSignal.prototype.setValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.setValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.linearRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.linearRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime=function(t,e){return e=s.default.TransportTime(e),s.default.Signal.prototype.exponentialRampToValueAtTime.call(this,t,e),this},s.default.TransportTimelineSignal.prototype.setTargetAtTime=function(t,e,i){return e=s.default.TransportTime(e),s.default.Signal.prototype.setTargetAtTime.call(this,t,e,i),this},s.default.TransportTimelineSignal.prototype.cancelScheduledValues=function(t){return t=s.default.TransportTime(t),s.default.Signal.prototype.cancelScheduledValues.call(this,t),this},s.default.TransportTimelineSignal.prototype.setValueCurveAtTime=function(t,e,i,n){return e=s.default.TransportTime(e),i=s.default.TransportTime(i),s.default.Signal.prototype.setValueCurveAtTime.call(this,t,e,i,n),this},s.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime=function(t){return s.default.Signal.prototype.cancelAndHoldAtTime.call(this,s.default.TransportTime(t))},s.default.TransportTimelineSignal.prototype.dispose=function(){s.default.Transport.clear(this._synced),s.default.Transport.off("start stop pause",this._syncedCallback),this._events.cancel(0),s.default.Signal.prototype.dispose.call(this),this._outputSig.dispose(),this._outputSig=null},e.default=s.default.TransportTimelineSignal},function(t,e,i){"use strict";i.r(e);var s=i(0);i(29),i(5);s.default.Normalize=function(t,e){s.default.SignalBase.call(this),this._inputMin=s.default.defaultArg(t,0),this._inputMax=s.default.defaultArg(e,1),this._sub=this.input=new s.default.Add(0),this._div=this.output=new s.default.Multiply(1),this._sub.connect(this._div),this._setRange()},s.default.extend(s.default.Normalize,s.default.SignalBase),Object.defineProperty(s.default.Normalize.prototype,"min",{get:function(){return this._inputMin},set:function(t){this._inputMin=t,this._setRange()}}),Object.defineProperty(s.default.Normalize.prototype,"max",{get:function(){return this._inputMax},set:function(t){this._inputMax=t,this._setRange()}}),s.default.Normalize.prototype._setRange=function(){this._sub.value=-this._inputMin,this._div.value=1/(this._inputMax-this._inputMin)},s.default.Normalize.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._sub.dispose(),this._sub=null,this._div.dispose(),this._div=null,this},e.default=s.default.Normalize},function(t,e,i){"use strict";i.r(e);var s=i(0);i(7),i(2);s.default.GainToAudio=function(){s.default.SignalBase.call(this),this._norm=this.input=this.output=new s.default.WaveShaper(function(t){return 2*Math.abs(t)-1})},s.default.extend(s.default.GainToAudio,s.default.SignalBase),s.default.GainToAudio.prototype.dispose=function(){return s.default.SignalBase.prototype.dispose.call(this),this._norm.dispose(),this._norm=null,this},e.default=s.default.GainToAudio},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(78),i(32);s.default.Sampler=function(t){var e=Array.prototype.slice.call(arguments);e.shift();var i=s.default.defaults(e,["onload","baseUrl"],s.default.Sampler);s.default.Instrument.call(this,i);var n={};for(var o in t)if(s.default.isNote(o)){n[s.default.Frequency(o).toMidi()]=t[o]}else{if(isNaN(parseFloat(o)))throw new Error("Tone.Sampler: url keys must be the note's pitch");n[o]=t[o]}this._buffers=new s.default.Buffers(n,i.onload,i.baseUrl),this._activeSources={},this.attack=i.attack,this.release=i.release,this.curve=i.curve},s.default.extend(s.default.Sampler,s.default.Instrument),s.default.Sampler.defaults={attack:0,release:.1,onload:s.default.noOp,baseUrl:"",curve:"exponential"},s.default.Sampler.prototype._findClosest=function(t){for(var e=0;e<96;){if(this._buffers.has(t+e))return-e;if(this._buffers.has(t-e))return e;e++}throw new Error("No available buffers for note: "+t)},s.default.Sampler.prototype.triggerAttack=function(t,e,i){this.log("triggerAttack",t,e,i),Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var o=s.default.Frequency(t[n]).toMidi(),a=this._findClosest(o),r=o-a,l=this._buffers.get(r),u=s.default.intervalToFrequencyRatio(a),d=new s.default.BufferSource({buffer:l,playbackRate:u,fadeIn:this.attack,fadeOut:this.release,curve:this.curve}).connect(this.output);d.start(e,0,l.duration/u,i),s.default.isArray(this._activeSources[o])||(this._activeSources[o]=[]),this._activeSources[o].push(d),d.onended=function(){if(this._activeSources&&this._activeSources[o]){var t=this._activeSources[o].indexOf(d);-1!==t&&this._activeSources[o].splice(t,1)}}.bind(this)}return this},s.default.Sampler.prototype.triggerRelease=function(t,e){this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]);for(var i=0;i<t.length;i++){var n=s.default.Frequency(t[i]).toMidi();this._activeSources[n]&&this._activeSources[n].length&&(e=this.toSeconds(e),this._activeSources[n].forEach(function(t){t.stop(e)}),this._activeSources[n]=[])}return this},s.default.Sampler.prototype.releaseAll=function(t){for(var e in t=this.toSeconds(t),this._activeSources)for(var i=this._activeSources[e];i.length;){i.shift().stop(t)}return this},s.default.Sampler.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.Sampler.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.Sampler.prototype.add=function(t,e,i){if(s.default.isNote(t)){var n=s.default.Frequency(t).toMidi();this._buffers.add(n,e,i)}else{if(isNaN(parseFloat(t)))throw new Error("Tone.Sampler: note must be the note's pitch. Instead got "+t);this._buffers.add(t,e,i)}},Object.defineProperty(s.default.Sampler.prototype,"loaded",{get:function(){return this._buffers.loaded}}),s.default.Sampler.prototype.dispose=function(){for(var t in s.default.Instrument.prototype.dispose.call(this),this._buffers.dispose(),this._buffers=null,this._activeSources)this._activeSources[t].forEach(function(t){t.dispose()});return this._activeSources=null,this},e.default=s.default.Sampler},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(6);s.default.PolySynth=function(){var t=s.default.defaults(arguments,["polyphony","voice"],s.default.PolySynth);s.default.Instrument.call(this,t),(t=s.default.defaultArg(t,s.default.Instrument.defaults)).polyphony=Math.min(s.default.PolySynth.MAX_POLYPHONY,t.polyphony),this.voices=new Array(t.polyphony),this.assert(t.polyphony>0,"polyphony must be greater than 0"),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this._readOnly("detune");for(var e=0;e<t.polyphony;e++){var i=new t.voice(arguments[2],arguments[3]);if(!(i instanceof s.default.Monophonic))throw new Error("Synth constructor must be instance of Tone.Monophonic");this.voices[e]=i,i.index=e,i.connect(this.output),i.hasOwnProperty("detune")&&this.detune.connect(i.detune)}},s.default.extend(s.default.PolySynth,s.default.Instrument),s.default.PolySynth.defaults={polyphony:4,volume:0,detune:0,voice:s.default.Synth},s.default.PolySynth.prototype._getClosestVoice=function(t,e){var i=this.voices.find(function(i){if(Math.abs(i.frequency.getValueAtTime(t)-s.default.Frequency(e))<1e-4&&i.getLevelAtTime(t)>1e-5)return i});return i||this.voices.slice().sort(function(e,i){var s=e.getLevelAtTime(t+this.blockTime),n=i.getLevelAtTime(t+this.blockTime);return s<1e-5&&(s=0),n<1e-5&&(n=0),s-n}.bind(this))[0]},s.default.PolySynth.prototype.triggerAttack=function(t,e,i){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var s=this._getClosestVoice(e,t);s.triggerAttack(t,e,i),this.log("triggerAttack",s.index,t)}.bind(this)),this},s.default.PolySynth.prototype.triggerRelease=function(t,e){return Array.isArray(t)||(t=[t]),e=this.toSeconds(e),t.forEach(function(t){var i=this._getClosestVoice(e,t);this.log("triggerRelease",i.index,t),i.triggerRelease(e)}.bind(this)),this},s.default.PolySynth.prototype.triggerAttackRelease=function(t,e,i,n){if(i=this.toSeconds(i),this.triggerAttack(t,i,n),s.default.isArray(e)&&s.default.isArray(t))for(var o=0;o<t.length;o++){var a=e[Math.min(o,e.length-1)];this.triggerRelease(t[o],i+this.toSeconds(a))}else this.triggerRelease(t,i+this.toSeconds(e));return this},s.default.PolySynth.prototype.sync=function(){return this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this},s.default.PolySynth.prototype.set=function(t,e,i){for(var s=0;s<this.voices.length;s++)this.voices[s].set(t,e,i);return this},s.default.PolySynth.prototype.get=function(t){return this.voices[0].get(t)},s.default.PolySynth.prototype.releaseAll=function(t){return t=this.toSeconds(t),this.voices.forEach(function(e){e.triggerRelease(t)}),this},s.default.PolySynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this.voices.forEach(function(t){t.dispose()}),this._writable("detune"),this.detune.dispose(),this.detune=null,this.voices=null,this},s.default.PolySynth.MAX_POLYPHONY=20,e.default=s.default.PolySynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(21),i(39),i(54);s.default.PluckSynth=function(t){t=s.default.defaultArg(t,s.default.PluckSynth.defaults),s.default.Instrument.call(this,t),this._noise=new s.default.Noise("pink"),this.attackNoise=t.attackNoise,this._lfcf=new s.default.LowpassCombFilter({resonance:t.resonance,dampening:t.dampening}),this.resonance=this._lfcf.resonance,this.dampening=this._lfcf.dampening,this._noise.connect(this._lfcf),this._lfcf.connect(this.output),this._readOnly(["resonance","dampening"])},s.default.extend(s.default.PluckSynth,s.default.Instrument),s.default.PluckSynth.defaults={attackNoise:1,dampening:4e3,resonance:.7},s.default.PluckSynth.prototype.triggerAttack=function(t,e){t=this.toFrequency(t),e=this.toSeconds(e);var i=1/t;return this._lfcf.delayTime.setValueAtTime(i,e),this._noise.start(e),this._noise.stop(e+i*this.attackNoise),this},s.default.PluckSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._noise.dispose(),this._lfcf.dispose(),this._noise=null,this._lfcf=null,this._writable(["resonance","dampening"]),this.dampening=null,this.resonance=null,this},e.default=s.default.PluckSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(31),i(41),i(39),i(2),i(9),i(21);s.default.NoiseSynth=function(t){t=s.default.defaultArg(t,s.default.NoiseSynth.defaults),s.default.Instrument.call(this,t),this.noise=new s.default.Noise(t.noise),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.noise.chain(this.envelope,this.output),this._readOnly(["noise","envelope"])},s.default.extend(s.default.NoiseSynth,s.default.Instrument),s.default.NoiseSynth.defaults={noise:{type:"white"},envelope:{attack:.005,decay:.1,sustain:0}},s.default.NoiseSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),0===this.envelope.sustain&&this.noise.stop(t+this.envelope.attack+this.envelope.decay),this},s.default.NoiseSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.envelope.release),this},s.default.NoiseSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.NoiseSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},s.default.NoiseSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["noise","envelope"]),this.noise.dispose(),this.noise=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.NoiseSynth},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(21),i(49),i(9),i(41),i(31),i(3),i(26),i(5),[1,1.483,1.932,2.546,2.63,3.897]);s.default.MetalSynth=function(t){t=s.default.defaultArg(t,s.default.MetalSynth.defaults),s.default.Instrument.call(this,t),this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this._oscillators=[],this._freqMultipliers=[],this._amplitue=new s.default.Gain(0).connect(this.output),this._highpass=new s.default.Filter({type:"highpass",Q:-3.0102999566398125}).connect(this._amplitue),this._octaves=t.octaves,this._filterFreqScaler=new s.default.Scale(t.resonance,7e3),this.envelope=new s.default.Envelope({attack:t.envelope.attack,attackCurve:"linear",decay:t.envelope.decay,sustain:0,release:t.envelope.release}).chain(this._filterFreqScaler,this._highpass.frequency),this.envelope.connect(this._amplitue.gain);for(var e=0;e<n.length;e++){var i=new s.default.FMOscillator({type:"square",modulationType:"square",harmonicity:t.harmonicity,modulationIndex:t.modulationIndex});i.connect(this._highpass),this._oscillators[e]=i;var o=new s.default.Multiply(n[e]);this._freqMultipliers[e]=o,this.frequency.chain(o,i.frequency)}this.octaves=t.octaves},s.default.extend(s.default.MetalSynth,s.default.Instrument),s.default.MetalSynth.defaults={frequency:200,envelope:{attack:.001,decay:1.4,release:.2},harmonicity:5.1,modulationIndex:32,resonance:4e3,octaves:1.5},s.default.MetalSynth.prototype.triggerAttack=function(t,e){return t=this.toSeconds(t),e=s.default.defaultArg(e,1),this.envelope.triggerAttack(t,e),this._oscillators.forEach(function(e){e.start(t)}),0===this.envelope.sustain&&this._oscillators.forEach(function(e){e.stop(t+this.envelope.attack+this.envelope.decay)}.bind(this)),this},s.default.MetalSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this._oscillators.forEach(function(e){e.stop(t+this.envelope.release)}.bind(this)),this},s.default.MetalSynth.prototype.sync=function(){return this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0),this},s.default.MetalSynth.prototype.triggerAttackRelease=function(t,e,i){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,i),this.triggerRelease(e+t),this},Object.defineProperty(s.default.MetalSynth.prototype,"modulationIndex",{get:function(){return this._oscillators[0].modulationIndex.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].modulationIndex.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"harmonicity",{get:function(){return this._oscillators[0].harmonicity.value},set:function(t){for(var e=0;e<this._oscillators.length;e++)this._oscillators[e].harmonicity.value=t}}),Object.defineProperty(s.default.MetalSynth.prototype,"resonance",{get:function(){return this._filterFreqScaler.min},set:function(t){this._filterFreqScaler.min=t,this.octaves=this._octaves}}),Object.defineProperty(s.default.MetalSynth.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._filterFreqScaler.max=this._filterFreqScaler.min*Math.pow(2,t)}}),s.default.MetalSynth.prototype.dispose=function(){s.default.Instrument.prototype.dispose.call(this);for(var t=0;t<this._oscillators.length;t++)this._oscillators[t].dispose(),this._freqMultipliers[t].dispose();this._oscillators=null,this._freqMultipliers=null,this.frequency.dispose(),this.frequency=null,this._filterFreqScaler.dispose(),this._filterFreqScaler=null,this._amplitue.dispose(),this._amplitue=null,this.envelope.dispose(),this.envelope=null,this._highpass.dispose(),this._highpass=null},e.default=s.default.MetalSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(37),i(21),i(31);s.default.MembraneSynth=function(t){t=s.default.defaultArg(t,s.default.MembraneSynth.defaults),s.default.Instrument.call(this,t),this.oscillator=new s.default.OmniOscillator(t.oscillator),this.envelope=new s.default.AmplitudeEnvelope(t.envelope),this.octaves=t.octaves,this.pitchDecay=t.pitchDecay,this.oscillator.chain(this.envelope,this.output),this._readOnly(["oscillator","envelope"])},s.default.extend(s.default.MembraneSynth,s.default.Instrument),s.default.MembraneSynth.defaults={pitchDecay:.05,octaves:10,oscillator:{type:"sine"},envelope:{attack:.001,decay:.4,sustain:.01,release:1.4,attackCurve:"exponential"}},s.default.MembraneSynth.prototype.triggerAttack=function(t,e,i){e=this.toSeconds(e);var s=(t=this.toFrequency(t))*this.octaves;return this.oscillator.frequency.setValueAtTime(s,e),this.oscillator.frequency.exponentialRampToValueAtTime(t,e+this.toSeconds(this.pitchDecay)),this.envelope.triggerAttack(e,i),this.oscillator.start(e),0===this.envelope.sustain&&this.oscillator.stop(e+this.envelope.attack+this.envelope.decay),this},s.default.MembraneSynth.prototype.triggerRelease=function(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.oscillator.stop(t+this.envelope.release),this},s.default.MembraneSynth.prototype.dispose=function(){return s.default.Instrument.prototype.dispose.call(this),this._writable(["oscillator","envelope"]),this.oscillator.dispose(),this.oscillator=null,this.envelope.dispose(),this.envelope=null,this},e.default=s.default.MembraneSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25);s.default.FMSynth=function(t){t=s.default.defaultArg(t,s.default.FMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth(t.carrier),this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth(t.modulator),this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.modulationIndex=new s.default.Multiply(t.modulationIndex),this.modulationIndex.units=s.default.Type.Positive,this._modulationNode=new s.default.Gain(0),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this._readOnly(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.FMSynth,s.default.Monophonic),s.default.FMSynth.defaults={harmonicity:3,modulationIndex:10,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.FMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.FMSynth.prototype._triggerEnvelopeRelease=function(t){return t=this.toSeconds(t),this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.FMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","modulationIndex","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.modulationIndex.dispose(),this.modulationIndex=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.FMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(66),i(12),i(2),i(5),i(25),i(14);s.default.DuoSynth=function(t){t=s.default.defaultArg(t,s.default.DuoSynth.defaults),s.default.Monophonic.call(this,t),this.voice0=new s.default.MonoSynth(t.voice0),this.voice0.volume.value=-10,this.voice1=new s.default.MonoSynth(t.voice1),this.voice1.volume.value=-10,this._vibrato=new s.default.LFO(t.vibratoRate,-50,50),this._vibrato.start(),this.vibratoRate=this._vibrato.frequency,this._vibratoGain=new s.default.Gain(t.vibratoAmount,s.default.Type.Positive),this.vibratoAmount=this._vibratoGain.gain,this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this.frequency.connect(this.voice0.frequency),this.frequency.chain(this.harmonicity,this.voice1.frequency),this._vibrato.connect(this._vibratoGain),this._vibratoGain.fan(this.voice0.detune,this.voice1.detune),this.voice0.connect(this.output),this.voice1.connect(this.output),this._readOnly(["voice0","voice1","frequency","vibratoAmount","vibratoRate"])},s.default.extend(s.default.DuoSynth,s.default.Monophonic),s.default.DuoSynth.defaults={vibratoAmount:.5,vibratoRate:5,harmonicity:1.5,voice0:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}},voice1:{volume:-10,portamento:0,oscillator:{type:"sine"},filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}}},s.default.DuoSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this.voice0._triggerEnvelopeAttack(t,e),this.voice1._triggerEnvelopeAttack(t,e),this},s.default.DuoSynth.prototype._triggerEnvelopeRelease=function(t){return this.voice0._triggerEnvelopeRelease(t),this.voice1._triggerEnvelopeRelease(t),this},s.default.DuoSynth.prototype.getLevelAtTime=function(t){return(this.voice0.getLevelAtTime(t)+this.voice1.getLevelAtTime(t))/2},s.default.DuoSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["voice0","voice1","frequency","vibratoAmount","vibratoRate"]),this.voice0.dispose(),this.voice0=null,this.voice1.dispose(),this.voice1=null,this.frequency.dispose(),this.frequency=null,this._vibratoGain.dispose(),this._vibratoGain=null,this._vibrato=null,this.harmonicity.dispose(),this.harmonicity=null,this.vibratoAmount.dispose(),this.vibratoAmount=null,this.vibratoRate=null,this},e.default=s.default.DuoSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(38),i(2),i(5),i(25),i(22),i(3);s.default.AMSynth=function(t){t=s.default.defaultArg(t,s.default.AMSynth.defaults),s.default.Monophonic.call(this,t),this._carrier=new s.default.Synth,this._carrier.volume.value=-10,this.oscillator=this._carrier.oscillator.set(t.oscillator),this.envelope=this._carrier.envelope.set(t.envelope),this._modulator=new s.default.Synth,this._modulator.volume.value=-10,this.modulation=this._modulator.oscillator.set(t.modulation),this.modulationEnvelope=this._modulator.envelope.set(t.modulationEnvelope),this.frequency=new s.default.Signal(440,s.default.Type.Frequency),this.detune=new s.default.Signal(t.detune,s.default.Type.Cents),this.harmonicity=new s.default.Multiply(t.harmonicity),this.harmonicity.units=s.default.Type.Positive,this._modulationScale=new s.default.AudioToGain,this._modulationNode=new s.default.Gain,this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),this._readOnly(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])},s.default.extend(s.default.AMSynth,s.default.Monophonic),s.default.AMSynth.defaults={harmonicity:3,detune:0,oscillator:{type:"sine"},envelope:{attack:.01,decay:.01,sustain:1,release:.5},modulation:{type:"square"},modulationEnvelope:{attack:.5,decay:0,sustain:1,release:.5}},s.default.AMSynth.prototype._triggerEnvelopeAttack=function(t,e){return t=this.toSeconds(t),this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t),this},s.default.AMSynth.prototype._triggerEnvelopeRelease=function(t){return this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this},s.default.AMSynth.prototype.dispose=function(){return s.default.Monophonic.prototype.dispose.call(this),this._writable(["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"]),this._carrier.dispose(),this._carrier=null,this._modulator.dispose(),this._modulator=null,this.frequency.dispose(),this.frequency=null,this.detune.dispose(),this.detune=null,this.harmonicity.dispose(),this.harmonicity=null,this._modulationScale.dispose(),this._modulationScale=null,this._modulationNode.dispose(),this._modulationNode=null,this.oscillator=null,this.envelope=null,this.modulationEnvelope=null,this.modulation=null,this},e.default=s.default.AMSynth},function(t,e,i){"use strict";i.r(e);var s=i(0);i(70),i(16);s.default.Sequence=function(){var t=s.default.defaults(arguments,["callback","events","subdivision"],s.default.Sequence),e=t.events;if(delete t.events,s.default.Part.call(this,t),this._subdivision=this.toTicks(t.subdivision),s.default.isUndef(t.loopEnd)&&s.default.isDefined(e)&&(this._loopEnd=e.length*this._subdivision),this._loop=!0,s.default.isDefined(e))for(var i=0;i<e.length;i++)this.add(i,e[i])},s.default.extend(s.default.Sequence,s.default.Part),s.default.Sequence.defaults={subdivision:"4n"},Object.defineProperty(s.default.Sequence.prototype,"subdivision",{get:function(){return s.default.Ticks(this._subdivision).toSeconds()}}),s.default.Sequence.prototype.at=function(t,e){return s.default.isArray(e)&&this.remove(t),s.default.Part.prototype.at.call(this,this._indexTime(t),e)},s.default.Sequence.prototype.add=function(t,e){if(null===e)return this;if(s.default.isArray(e)){var i=Math.round(this._subdivision/e.length);e=new s.default.Sequence(this._tick.bind(this),e,s.default.Ticks(i))}return s.default.Part.prototype.add.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype.remove=function(t,e){return s.default.Part.prototype.remove.call(this,this._indexTime(t),e),this},s.default.Sequence.prototype._indexTime=function(t){return t instanceof s.default.TransportTime?t:s.default.Ticks(t*this._subdivision+this.startOffset).toSeconds()},s.default.Sequence.prototype.dispose=function(){return s.default.Part.prototype.dispose.call(this),this},e.default=s.default.Sequence},function(t,e,i){"use strict";i.r(e);var s=i(0);i(71),i(79);s.default.Pattern=function(){var t=s.default.defaults(arguments,["callback","values","pattern"],s.default.Pattern);s.default.Loop.call(this,t),this._pattern=new s.default.CtrlPattern({values:t.values,type:t.pattern,index:t.index})},s.default.extend(s.default.Pattern,s.default.Loop),s.default.Pattern.defaults={pattern:s.default.CtrlPattern.Type.Up,callback:s.default.noOp,values:[]},s.default.Pattern.prototype._tick=function(t){this.callback(t,this._pattern.value),this._pattern.next()},Object.defineProperty(s.default.Pattern.prototype,"index",{get:function(){return this._pattern.index},set:function(t){this._pattern.index=t}}),Object.defineProperty(s.default.Pattern.prototype,"values",{get:function(){return this._pattern.values},set:function(t){this._pattern.values=t}}),Object.defineProperty(s.default.Pattern.prototype,"value",{get:function(){return this._pattern.value}}),Object.defineProperty(s.default.Pattern.prototype,"pattern",{get:function(){return this._pattern.type},set:function(t){this._pattern.type=t}}),s.default.Pattern.prototype.dispose=function(){s.default.Loop.prototype.dispose.call(this),this._pattern.dispose(),this._pattern=null},e.default=s.default.Pattern},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(18),i(12);s.default.Vibrato=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Vibrato);s.default.Effect.call(this,t),this._delayNode=new s.default.Delay(0,t.maxDelay),this._lfo=new s.default.LFO({type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,this._readOnly(["frequency","depth"]),this.effectSend.chain(this._delayNode,this.effectReturn)},s.default.extend(s.default.Vibrato,s.default.Effect),s.default.Vibrato.defaults={maxDelay:.005,frequency:5,depth:.1,type:"sine"},Object.defineProperty(s.default.Vibrato.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.Vibrato.prototype.dispose=function(){s.default.Effect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._lfo.dispose(),this._lfo=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null},e.default=s.default.Vibrato},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15);s.default.Tremolo=function(){var t=s.default.defaults(arguments,["frequency","depth"],s.default.Tremolo);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO({phase:t.spread,min:1,max:0}),this._lfoR=new s.default.LFO({phase:t.spread,min:1,max:0}),this._amplitudeL=new s.default.Gain,this._amplitudeR=new s.default.Gain,this.frequency=new s.default.Signal(t.frequency,s.default.Type.Frequency),this.depth=new s.default.Signal(t.depth,s.default.Type.NormalRange),this._readOnly(["frequency","depth"]),this.effectSendL.chain(this._amplitudeL,this.effectReturnL),this.effectSendR.chain(this._amplitudeR,this.effectReturnR),this._lfoL.connect(this._amplitudeL.gain),this._lfoR.connect(this._amplitudeR.gain),this.frequency.fan(this._lfoL.frequency,this._lfoR.frequency),this.depth.fan(this._lfoR.amplitude,this._lfoL.amplitude),this.type=t.type,this.spread=t.spread},s.default.extend(s.default.Tremolo,s.default.StereoEffect),s.default.Tremolo.defaults={frequency:10,type:"sine",depth:.5,spread:180},s.default.Tremolo.prototype.start=function(t){return this._lfoL.start(t),this._lfoR.start(t),this},s.default.Tremolo.prototype.stop=function(t){return this._lfoL.stop(t),this._lfoR.stop(t),this},s.default.Tremolo.prototype.sync=function(t){return this._lfoL.sync(t),this._lfoR.sync(t),s.default.Transport.syncSignal(this.frequency),this},s.default.Tremolo.prototype.unsync=function(){return this._lfoL.unsync(),this._lfoR.unsync(),s.default.Transport.unsyncSignal(this.frequency),this},Object.defineProperty(s.default.Tremolo.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Tremolo.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Tremolo.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","depth"]),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._amplitudeL.dispose(),this._amplitudeL=null,this._amplitudeR.dispose(),this._amplitudeR=null,this.frequency=null,this.depth=null,this},e.default=s.default.Tremolo},function(t,e,i){"use strict";i.r(e);var s=i(0);i(73),i(2),i(5),i(13);s.default.StereoWidener=function(){var t=s.default.defaults(arguments,["width"],s.default.StereoWidener);s.default.MidSideEffect.call(this,t),this.width=new s.default.Signal(t.width,s.default.Type.NormalRange),this._readOnly(["width"]),this._twoTimesWidthMid=new s.default.Multiply(2),this._twoTimesWidthSide=new s.default.Multiply(2),this._midMult=new s.default.Multiply,this._twoTimesWidthMid.connect(this._midMult,0,1),this.midSend.chain(this._midMult,this.midReturn),this._oneMinusWidth=new s.default.Subtract,this._oneMinusWidth.connect(this._twoTimesWidthMid),s.default.connect(this.context.getConstant(1),this._oneMinusWidth,0,0),this.width.connect(this._oneMinusWidth,0,1),this._sideMult=new s.default.Multiply,this.width.connect(this._twoTimesWidthSide),this._twoTimesWidthSide.connect(this._sideMult,0,1),this.sideSend.chain(this._sideMult,this.sideReturn)},s.default.extend(s.default.StereoWidener,s.default.MidSideEffect),s.default.StereoWidener.defaults={width:.5},s.default.StereoWidener.prototype.dispose=function(){return s.default.MidSideEffect.prototype.dispose.call(this),this._writable(["width"]),this.width.dispose(),this.width=null,this._midMult.dispose(),this._midMult=null,this._sideMult.dispose(),this._sideMult=null,this._twoTimesWidthMid.dispose(),this._twoTimesWidthMid=null,this._twoTimesWidthSide.dispose(),this._twoTimesWidthSide=null,this._oneMinusWidth.dispose(),this._oneMinusWidth=null,this},e.default=s.default.StereoWidener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(15),i(33),i(3);s.default.StereoFeedbackEffect=function(){var t=s.default.defaults(arguments,["feedback"],s.default.FeedbackEffect);s.default.StereoEffect.call(this,t),this.feedback=new s.default.Signal(t.feedback,s.default.Type.NormalRange),this._feedbackL=new s.default.Gain,this._feedbackR=new s.default.Gain,this.effectReturnL.chain(this._feedbackL,this.effectSendL),this.effectReturnR.chain(this._feedbackR,this.effectSendR),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),this._readOnly(["feedback"])},s.default.extend(s.default.StereoFeedbackEffect,s.default.StereoEffect),s.default.StereoFeedbackEffect.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._writable(["feedback"]),this.feedback.dispose(),this.feedback=null,this._feedbackL.dispose(),this._feedbackL=null,this._feedbackR.dispose(),this._feedbackR=null,this},e.default=s.default.StereoFeedbackEffect},function(t,e,i){"use strict";i.r(e);var s=i(0);i(77),i(9),i(10),i(39),i(3),i(74);s.default.Reverb=function(){var t=s.default.defaults(arguments,["decay"],s.default.Reverb);s.default.Effect.call(this,t),this._convolver=this.context.createConvolver(),this.decay=t.decay,this.preDelay=t.preDelay,this.connectEffect(this._convolver)},s.default.extend(s.default.Reverb,s.default.Effect),s.default.Reverb.defaults={decay:1.5,preDelay:.01},s.default.Reverb.prototype.generate=function(){return s.default.Offline(function(){var t=new s.default.Noise,e=new s.default.Noise,i=new s.default.Merge;t.connect(i.left),e.connect(i.right);var n=(new s.default.Gain).toMaster();i.connect(n),t.start(0),e.start(0),n.gain.setValueAtTime(0,0),n.gain.setValueAtTime(1,this.preDelay),n.gain.exponentialApproachValueAtTime(0,this.preDelay,this.decay+this.preDelay)}.bind(this),this.decay+this.preDelay).then(function(t){return this._convolver.buffer=t.get(),this}.bind(this))},s.default.Reverb.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._convolver.disconnect(),this._convolver=null,this},e.default=s.default.Reverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(23),i(2),i(33),i(18);s.default.PitchShift=function(){var t=s.default.defaults(arguments,["pitch"],s.default.PitchShift);s.default.FeedbackEffect.call(this,t),this._frequency=new s.default.Signal(0),this._delayA=new s.default.Delay(0,1),this._lfoA=new s.default.LFO({min:0,max:.1,type:"sawtooth"}).connect(this._delayA.delayTime),this._delayB=new s.default.Delay(0,1),this._lfoB=new s.default.LFO({min:0,max:.1,type:"sawtooth",phase:180}).connect(this._delayB.delayTime),this._crossFade=new s.default.CrossFade,this._crossFadeLFO=new s.default.LFO({min:0,max:1,type:"triangle",phase:90}).connect(this._crossFade.fade),this._feedbackDelay=new s.default.Delay(t.delayTime),this.delayTime=this._feedbackDelay.delayTime,this._readOnly("delayTime"),this._pitch=t.pitch,this._windowSize=t.windowSize,this._delayA.connect(this._crossFade.a),this._delayB.connect(this._crossFade.b),this._frequency.fan(this._lfoA.frequency,this._lfoB.frequency,this._crossFadeLFO.frequency),this.effectSend.fan(this._delayA,this._delayB),this._crossFade.chain(this._feedbackDelay,this.effectReturn);var e=this.now();this._lfoA.start(e),this._lfoB.start(e),this._crossFadeLFO.start(e),this.windowSize=this._windowSize},s.default.extend(s.default.PitchShift,s.default.FeedbackEffect),s.default.PitchShift.defaults={pitch:0,windowSize:.1,delayTime:0,feedback:0},Object.defineProperty(s.default.PitchShift.prototype,"pitch",{get:function(){return this._pitch},set:function(t){this._pitch=t;var e=0;t<0?(this._lfoA.min=0,this._lfoA.max=this._windowSize,this._lfoB.min=0,this._lfoB.max=this._windowSize,e=s.default.intervalToFrequencyRatio(t-1)+1):(this._lfoA.min=this._windowSize,this._lfoA.max=0,this._lfoB.min=this._windowSize,this._lfoB.max=0,e=s.default.intervalToFrequencyRatio(t)-1),this._frequency.value=e*(1.2/this._windowSize)}}),Object.defineProperty(s.default.PitchShift.prototype,"windowSize",{get:function(){return this._windowSize},set:function(t){this._windowSize=this.toSeconds(t),this.pitch=this._pitch}}),s.default.PitchShift.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._frequency.dispose(),this._frequency=null,this._delayA.disconnect(),this._delayA=null,this._delayB.disconnect(),this._delayB=null,this._lfoA.dispose(),this._lfoA=null,this._lfoB.dispose(),this._lfoB=null,this._crossFade.dispose(),this._crossFade=null,this._crossFadeLFO.dispose(),this._crossFadeLFO=null,this._writable("delayTime"),this._feedbackDelay.dispose(),this._feedbackDelay=null,this.delayTime=null,this},e.default=s.default.PitchShift},function(t,e,i){"use strict";i.r(e);var s=i(0);i(72),i(2),i(18);s.default.PingPongDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.PingPongDelay);s.default.StereoXFeedbackEffect.call(this,t),this._leftDelay=new s.default.Delay(0,t.maxDelayTime),this._rightDelay=new s.default.Delay(0,t.maxDelayTime),this._rightPreDelay=new s.default.Delay(0,t.maxDelayTime),this.delayTime=new s.default.Signal(t.delayTime,s.default.Type.Time),this.effectSendL.chain(this._leftDelay,this.effectReturnL),this.effectSendR.chain(this._rightPreDelay,this._rightDelay,this.effectReturnR),this.delayTime.fan(this._leftDelay.delayTime,this._rightDelay.delayTime,this._rightPreDelay.delayTime),this._feedbackLR.disconnect(),this._feedbackLR.connect(this._rightDelay),this._readOnly(["delayTime"])},s.default.extend(s.default.PingPongDelay,s.default.StereoXFeedbackEffect),s.default.PingPongDelay.defaults={delayTime:.25,maxDelayTime:1},s.default.PingPongDelay.prototype.dispose=function(){return s.default.StereoXFeedbackEffect.prototype.dispose.call(this),this._leftDelay.dispose(),this._leftDelay=null,this._rightDelay.dispose(),this._rightDelay=null,this._rightPreDelay.dispose(),this._rightPreDelay=null,this._writable(["delayTime"]),this.delayTime.dispose(),this.delayTime=null,this},e.default=s.default.PingPongDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(9),i(15);s.default.Phaser=function(){var t=s.default.defaults(arguments,["frequency","octaves","baseFrequency"],s.default.Phaser);s.default.StereoEffect.call(this,t),this._lfoL=new s.default.LFO(t.frequency,0,1),this._lfoR=new s.default.LFO(t.frequency,0,1),this._lfoR.phase=180,this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this.Q=new s.default.Signal(t.Q,s.default.Type.Positive),this._filtersL=this._makeFilters(t.stages,this._lfoL,this.Q),this._filtersR=this._makeFilters(t.stages,this._lfoR,this.Q),this.frequency=this._lfoL.frequency,this.frequency.value=t.frequency,this.effectSendL.connect(this._filtersL[0]),this.effectSendR.connect(this._filtersR[0]),s.default.connect(this._filtersL[t.stages-1],this.effectReturnL),s.default.connect(this._filtersR[t.stages-1],this.effectReturnR),this._lfoL.frequency.connect(this._lfoR.frequency),this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this._lfoL.start(),this._lfoR.start(),this._readOnly(["frequency","Q"])},s.default.extend(s.default.Phaser,s.default.StereoEffect),s.default.Phaser.defaults={frequency:.5,octaves:3,stages:10,Q:10,baseFrequency:350},s.default.Phaser.prototype._makeFilters=function(t,e,i){for(var n=new Array(t),o=0;o<t;o++){var a=this.context.createBiquadFilter();a.type="allpass",i.connect(a.Q),e.connect(a.frequency),n[o]=a}return s.default.connectSeries.apply(s.default,n),n},Object.defineProperty(s.default.Phaser.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t;var e=this._baseFrequency*Math.pow(2,t);this._lfoL.max=e,this._lfoR.max=e}}),Object.defineProperty(s.default.Phaser.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._lfoL.min=t,this._lfoR.min=t,this.octaves=this._octaves}}),s.default.Phaser.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this),this._writable(["frequency","Q"]),this.Q.dispose(),this.Q=null,this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null;for(var t=0;t<this._filtersL.length;t++)this._filtersL[t].disconnect(),this._filtersL[t]=null;this._filtersL=null;for(var e=0;e<this._filtersR.length;e++)this._filtersR[e].disconnect(),this._filtersR[e]=null;return this._filtersR=null,this.frequency=null,this},e.default=s.default.Phaser},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(59),i(15),i(26),[.06748,.06404,.08212,.09004]),o=[.773,.802,.753,.733],a=[347,113,37];s.default.JCReverb=function(){var t=s.default.defaults(arguments,["roomSize"],s.default.JCReverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this._scaleRoomSize=new s.default.Scale(-.733,.197),this._allpassFilters=[],this._feedbackCombFilters=[];for(var e=0;e<a.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=a[e],this._allpassFilters.push(i)}for(var r=0;r<n.length;r++){var l=new s.default.FeedbackCombFilter(n[r],.1);this._scaleRoomSize.connect(l.resonance),l.resonance.value=o[r],s.default.connect(this._allpassFilters[this._allpassFilters.length-1],l),r<n.length/2?l.connect(this.effectReturnL):l.connect(this.effectReturnR),this._feedbackCombFilters.push(l)}this.roomSize.connect(this._scaleRoomSize),s.default.connectSeries.apply(s.default,this._allpassFilters),this.effectSendL.connect(this._allpassFilters[0]),this.effectSendR.connect(this._allpassFilters[0]),this._readOnly(["roomSize"])},s.default.extend(s.default.JCReverb,s.default.StereoEffect),s.default.JCReverb.defaults={roomSize:.5},s.default.JCReverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFilters.length;t++)this._allpassFilters[t].disconnect(),this._allpassFilters[t]=null;this._allpassFilters=null;for(var e=0;e<this._feedbackCombFilters.length;e++)this._feedbackCombFilters[e].dispose(),this._feedbackCombFilters[e]=null;return this._feedbackCombFilters=null,this._writable(["roomSize"]),this.roomSize.dispose(),this.roomSize=null,this._scaleRoomSize.dispose(),this._scaleRoomSize=null,this},e.default=s.default.JCReverb},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(54),i(15),i(2),i(19),i(10),i(42),[1557/44100,1617/44100,1491/44100,1422/44100,1277/44100,1356/44100,1188/44100,1116/44100]),o=[225,556,441,341];s.default.Freeverb=function(){var t=s.default.defaults(arguments,["roomSize","dampening"],s.default.Freeverb);s.default.StereoEffect.call(this,t),this.roomSize=new s.default.Signal(t.roomSize,s.default.Type.NormalRange),this.dampening=new s.default.Signal(t.dampening,s.default.Type.Frequency),this._combFilters=[],this._allpassFiltersL=[],this._allpassFiltersR=[];for(var e=0;e<o.length;e++){var i=this.context.createBiquadFilter();i.type="allpass",i.frequency.value=o[e],this._allpassFiltersL.push(i)}for(var a=0;a<o.length;a++){var r=this.context.createBiquadFilter();r.type="allpass",r.frequency.value=o[a],this._allpassFiltersR.push(r)}for(var l=0;l<n.length;l++){var u=new s.default.LowpassCombFilter(n[l]);l<n.length/2?this.effectSendL.chain(u,this._allpassFiltersL[0]):this.effectSendR.chain(u,this._allpassFiltersR[0]),this.roomSize.connect(u.resonance),this.dampening.connect(u.dampening),this._combFilters.push(u)}s.default.connectSeries.apply(s.default,this._allpassFiltersL),s.default.connectSeries.apply(s.default,this._allpassFiltersR),s.default.connect(this._allpassFiltersL[this._allpassFiltersL.length-1],this.effectReturnL),s.default.connect(this._allpassFiltersR[this._allpassFiltersR.length-1],this.effectReturnR),this._readOnly(["roomSize","dampening"])},s.default.extend(s.default.Freeverb,s.default.StereoEffect),s.default.Freeverb.defaults={roomSize:.7,dampening:3e3},s.default.Freeverb.prototype.dispose=function(){s.default.StereoEffect.prototype.dispose.call(this);for(var t=0;t<this._allpassFiltersL.length;t++)this._allpassFiltersL[t].disconnect(),this._allpassFiltersL[t]=null;this._allpassFiltersL=null;for(var e=0;e<this._allpassFiltersR.length;e++)this._allpassFiltersR[e].disconnect(),this._allpassFiltersR[e]=null;this._allpassFiltersR=null;for(var i=0;i<this._combFilters.length;i++)this._combFilters[i].dispose(),this._combFilters[i]=null;return this._combFilters=null,this._writable(["roomSize","dampening"]),this.roomSize.dispose(),this.roomSize=null,this.dampening.dispose(),this.dampening=null,this},e.default=s.default.Freeverb},function(t,e,i){"use strict";i.r(e);var s=i(0);i(33),i(2),i(18);s.default.FeedbackDelay=function(){var t=s.default.defaults(arguments,["delayTime","feedback"],s.default.FeedbackDelay);s.default.FeedbackEffect.call(this,t),this._delayNode=new s.default.Delay(t.delayTime,t.maxDelay),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),this._readOnly(["delayTime"])},s.default.extend(s.default.FeedbackDelay,s.default.FeedbackEffect),s.default.FeedbackDelay.defaults={delayTime:.25,maxDelay:1},s.default.FeedbackDelay.prototype.dispose=function(){return s.default.FeedbackEffect.prototype.dispose.call(this),this._delayNode.dispose(),this._delayNode=null,this._writable(["delayTime"]),this.delayTime=null,this},e.default=s.default.FeedbackDelay},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Distortion=function(){var t=s.default.defaults(arguments,["distortion"],s.default.Distortion);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._distortion=t.distortion,this.connectEffect(this._shaper),this.distortion=t.distortion,this.oversample=t.oversample},s.default.extend(s.default.Distortion,s.default.Effect),s.default.Distortion.defaults={distortion:.4,oversample:"none"},Object.defineProperty(s.default.Distortion.prototype,"distortion",{get:function(){return this._distortion},set:function(t){this._distortion=t;var e=100*t,i=Math.PI/180;this._shaper.setMap(function(t){return Math.abs(t)<.001?0:(3+e)*t*20*i/(Math.PI+e*Math.abs(t))})}}),Object.defineProperty(s.default.Distortion.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Distortion.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Distortion},function(t,e,i){"use strict";i.r(e);var s=i(0);i(12),i(15),i(18);s.default.Chorus=function(){var t=s.default.defaults(arguments,["frequency","delayTime","depth"],s.default.Chorus);s.default.StereoEffect.call(this,t),this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new s.default.LFO({frequency:t.frequency,min:0,max:1}),this._lfoR=new s.default.LFO({frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new s.default.Delay,this._delayNodeR=new s.default.Delay,this.frequency=this._lfoL.frequency,this.effectSendL.chain(this._delayNodeL,this.effectReturnL),this.effectSendR.chain(this._delayNodeR,this.effectReturnR),this.effectSendL.connect(this.effectReturnL),this.effectSendR.connect(this.effectReturnR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this._lfoL.start(),this._lfoR.start(),this._lfoL.frequency.connect(this._lfoR.frequency),this.depth=this._depth,this.frequency.value=t.frequency,this.type=t.type,this._readOnly(["frequency"]),this.spread=t.spread},s.default.extend(s.default.Chorus,s.default.StereoEffect),s.default.Chorus.defaults={frequency:1.5,delayTime:3.5,depth:.7,type:"sine",spread:180},Object.defineProperty(s.default.Chorus.prototype,"depth",{get:function(){return this._depth},set:function(t){this._depth=t;var e=this._delayTime*t;this._lfoL.min=Math.max(this._delayTime-e,0),this._lfoL.max=this._delayTime+e,this._lfoR.min=Math.max(this._delayTime-e,0),this._lfoR.max=this._delayTime+e}}),Object.defineProperty(s.default.Chorus.prototype,"delayTime",{get:function(){return 1e3*this._delayTime},set:function(t){this._delayTime=t/1e3,this.depth=this._depth}}),Object.defineProperty(s.default.Chorus.prototype,"type",{get:function(){return this._lfoL.type},set:function(t){this._lfoL.type=t,this._lfoR.type=t}}),Object.defineProperty(s.default.Chorus.prototype,"spread",{get:function(){return this._lfoR.phase-this._lfoL.phase},set:function(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}}),s.default.Chorus.prototype.dispose=function(){return s.default.StereoEffect.prototype.dispose.call(this),this._lfoL.dispose(),this._lfoL=null,this._lfoR.dispose(),this._lfoR=null,this._delayNodeL.dispose(),this._delayNodeL=null,this._delayNodeR.dispose(),this._delayNodeR=null,this._writable("frequency"),this.frequency=null,this},e.default=s.default.Chorus},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(7);s.default.Chebyshev=function(){var t=s.default.defaults(arguments,["order"],s.default.Chebyshev);s.default.Effect.call(this,t),this._shaper=new s.default.WaveShaper(4096),this._order=t.order,this.connectEffect(this._shaper),this.order=t.order,this.oversample=t.oversample},s.default.extend(s.default.Chebyshev,s.default.Effect),s.default.Chebyshev.defaults={order:1,oversample:"none"},s.default.Chebyshev.prototype._getCoefficient=function(t,e,i){return i.hasOwnProperty(e)?i[e]:(i[e]=0===e?0:1===e?t:2*t*this._getCoefficient(t,e-1,i)-this._getCoefficient(t,e-2,i),i[e])},Object.defineProperty(s.default.Chebyshev.prototype,"order",{get:function(){return this._order},set:function(t){this._order=t;for(var e=new Array(4096),i=e.length,s=0;s<i;++s){var n=2*s/i-1;e[s]=0===n?0:this._getCoefficient(n,t,{})}this._shaper.curve=e}}),Object.defineProperty(s.default.Chebyshev.prototype,"oversample",{get:function(){return this._shaper.oversample},set:function(t){this._shaper.oversample=t}}),s.default.Chebyshev.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._shaper.dispose(),this._shaper=null,this},e.default=s.default.Chebyshev},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(13),i(75);s.default.BitCrusher=function(){var t=s.default.defaults(arguments,["bits"],s.default.BitCrusher);s.default.Effect.call(this,t);var e=1/Math.pow(2,t.bits-1);this._subtract=new s.default.Subtract,this._modulo=new s.default.Modulo(e),this._bits=t.bits,this.effectSend.fan(this._subtract,this._modulo),this._modulo.connect(this._subtract,0,1),this._subtract.connect(this.effectReturn)},s.default.extend(s.default.BitCrusher,s.default.Effect),s.default.BitCrusher.defaults={bits:4},Object.defineProperty(s.default.BitCrusher.prototype,"bits",{get:function(){return this._bits},set:function(t){this._bits=t;var e=1/Math.pow(2,t-1);this._modulo.value=e}}),s.default.BitCrusher.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._subtract.dispose(),this._subtract=null,this._modulo.dispose(),this._modulo=null,this},e.default=s.default.BitCrusher},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(42),i(8),i(9);s.default.AutoWah=function(){var t=s.default.defaults(arguments,["baseFrequency","octaves","sensitivity"],s.default.AutoWah);s.default.Effect.call(this,t),this.follower=new s.default.Follower(t.follower),this._sweepRange=new s.default.ScaleExp(0,1,.5),this._baseFrequency=t.baseFrequency,this._octaves=t.octaves,this._inputBoost=new s.default.Gain,this._bandpass=new s.default.Filter({rolloff:-48,frequency:0,Q:t.Q}),this._peaking=new s.default.Filter(0,"peaking"),this._peaking.gain.value=t.gain,this.gain=this._peaking.gain,this.Q=this._bandpass.Q,this.effectSend.chain(this._inputBoost,this.follower,this._sweepRange),this._sweepRange.connect(this._bandpass.frequency),this._sweepRange.connect(this._peaking.frequency),this.effectSend.chain(this._bandpass,this._peaking,this.effectReturn),this._setSweepRange(),this.sensitivity=t.sensitivity,this._readOnly(["gain","Q"])},s.default.extend(s.default.AutoWah,s.default.Effect),s.default.AutoWah.defaults={baseFrequency:100,octaves:6,sensitivity:0,Q:2,gain:2,follower:{attack:.3,release:.5}},Object.defineProperty(s.default.AutoWah.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"baseFrequency",{get:function(){return this._baseFrequency},set:function(t){this._baseFrequency=t,this._setSweepRange()}}),Object.defineProperty(s.default.AutoWah.prototype,"sensitivity",{get:function(){return s.default.gainToDb(1/this._inputBoost.gain.value)},set:function(t){this._inputBoost.gain.value=1/s.default.dbToGain(t)}}),s.default.AutoWah.prototype._setSweepRange=function(){this._sweepRange.min=this._baseFrequency,this._sweepRange.max=Math.min(this._baseFrequency*Math.pow(2,this._octaves),this.context.sampleRate/2)},s.default.AutoWah.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this.follower.dispose(),this.follower=null,this._sweepRange.dispose(),this._sweepRange=null,this._bandpass.dispose(),this._bandpass=null,this._peaking.dispose(),this._peaking=null,this._inputBoost.dispose(),this._inputBoost=null,this._writable(["gain","Q"]),this.gain=null,this.Q=null,this},e.default=s.default.AutoWah},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(48);s.default.AutoPanner=function(){var t=s.default.defaults(arguments,["frequency"],s.default.AutoPanner);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth,min:-1,max:1}),this.depth=this._lfo.amplitude,this._panner=new s.default.Panner,this.frequency=this._lfo.frequency,this.connectEffect(this._panner),this._lfo.connect(this._panner.pan),this.type=t.type,this._readOnly(["depth","frequency"])},s.default.extend(s.default.AutoPanner,s.default.Effect),s.default.AutoPanner.defaults={frequency:1,type:"sine",depth:1},s.default.AutoPanner.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoPanner.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoPanner.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoPanner.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoPanner.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),s.default.AutoPanner.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this._panner.dispose(),this._panner=null,this._writable(["depth","frequency"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoPanner},function(t,e,i){"use strict";i.r(e);var s=i(0);i(8),i(12),i(9);s.default.AutoFilter=function(){var t=s.default.defaults(arguments,["frequency","baseFrequency","octaves"],s.default.AutoFilter);s.default.Effect.call(this,t),this._lfo=new s.default.LFO({frequency:t.frequency,amplitude:t.depth}),this.depth=this._lfo.amplitude,this.frequency=this._lfo.frequency,this.filter=new s.default.Filter(t.filter),this._octaves=0,this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.type=t.type,this._readOnly(["frequency","depth"]),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency},s.default.extend(s.default.AutoFilter,s.default.Effect),s.default.AutoFilter.defaults={frequency:1,type:"sine",depth:1,baseFrequency:200,octaves:2.6,filter:{type:"lowpass",rolloff:-12,Q:1}},s.default.AutoFilter.prototype.start=function(t){return this._lfo.start(t),this},s.default.AutoFilter.prototype.stop=function(t){return this._lfo.stop(t),this},s.default.AutoFilter.prototype.sync=function(t){return this._lfo.sync(t),this},s.default.AutoFilter.prototype.unsync=function(){return this._lfo.unsync(),this},Object.defineProperty(s.default.AutoFilter.prototype,"type",{get:function(){return this._lfo.type},set:function(t){this._lfo.type=t}}),Object.defineProperty(s.default.AutoFilter.prototype,"baseFrequency",{get:function(){return this._lfo.min},set:function(t){this._lfo.min=this.toFrequency(t),this.octaves=this._octaves}}),Object.defineProperty(s.default.AutoFilter.prototype,"octaves",{get:function(){return this._octaves},set:function(t){this._octaves=t,this._lfo.max=this.baseFrequency*Math.pow(2,t)}}),s.default.AutoFilter.prototype.dispose=function(){return s.default.Effect.prototype.dispose.call(this),this._lfo.dispose(),this._lfo=null,this.filter.dispose(),this.filter=null,this._writable(["frequency","depth"]),this.frequency=null,this.depth=null,this},e.default=s.default.AutoFilter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28);s.default.Listener=function(){s.default.call(this),this._orientation=[0,0,0,0,0,0],this._position=[0,0,0],s.default.getContext(function(){this.set(n.defaults)}.bind(this))},s.default.extend(s.default.Listener),s.default.Listener.defaults={positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:1,upX:0,upY:1,upZ:0},s.default.Listener.prototype.isListener=!0,s.default.Listener.prototype._rampTimeConstant=.01,s.default.Listener.prototype.setPosition=function(t,e,i){if(this.context.rawContext.listener.positionX){var s=this.now();this.context.rawContext.listener.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this.context.rawContext.listener.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this.context.rawContext.listener.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this.context.rawContext.listener.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Listener.prototype.setOrientation=function(t,e,i,s,n,o){if(this.context.rawContext.listener.forwardX){var a=this.now();this.context.rawContext.listener.forwardX.setTargetAtTime(t,a,this._rampTimeConstant),this.context.rawContext.listener.forwardY.setTargetAtTime(e,a,this._rampTimeConstant),this.context.rawContext.listener.forwardZ.setTargetAtTime(i,a,this._rampTimeConstant),this.context.rawContext.listener.upX.setTargetAtTime(s,a,this._rampTimeConstant),this.context.rawContext.listener.upY.setTargetAtTime(n,a,this._rampTimeConstant),this.context.rawContext.listener.upZ.setTargetAtTime(o,a,this._rampTimeConstant)}else this.context.rawContext.listener.setOrientation(t,e,i,s,n,o);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Listener.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Listener.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Listener.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Listener.prototype,"forwardX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Listener.prototype,"forwardY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Listener.prototype,"forwardZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),Object.defineProperty(s.default.Listener.prototype,"upX",{set:function(t){this._orientation[3]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[3]}}),Object.defineProperty(s.default.Listener.prototype,"upY",{set:function(t){this._orientation[4]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[4]}}),Object.defineProperty(s.default.Listener.prototype,"upZ",{set:function(t){this._orientation[5]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[5]}}),s.default.Listener.prototype.dispose=function(){return this._orientation=null,this._position=null,this};var n=s.default.Listener;s.default.Listener=new n,s.default.Context.on("init",function(t){t.listener&&t.listener.isListener?s.default.Listener=t.listener:s.default.Listener=new n}),e.default=s.default.Listener},function(t,e,i){"use strict";i.r(e);var s=i(0);i(24);s.default.Draw=function(){s.default.call(this),this._events=new s.default.Timeline,this.expiration=.25,this.anticipation=.008,this._boundDrawLoop=this._drawLoop.bind(this)},s.default.extend(s.default.Draw),s.default.Draw.prototype.schedule=function(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),1===this._events.length&&requestAnimationFrame(this._boundDrawLoop),this},s.default.Draw.prototype.cancel=function(t){return this._events.cancel(this.toSeconds(t)),this},s.default.Draw.prototype._drawLoop=function(){for(var t=s.default.context.currentTime;this._events.length&&this._events.peek().time-this.anticipation<=t;){var e=this._events.shift();t-e.time<=this.expiration&&e.callback()}this._events.length>0&&requestAnimationFrame(this._boundDrawLoop)},s.default.Draw=new s.default.Draw,e.default=s.default.Draw},function(t,e,i){"use strict";i.r(e);var s=i(0),n=(i(3),{});s.default.prototype.send=function(t,e){n.hasOwnProperty(t)||(n[t]=this.context.createGain()),e=s.default.defaultArg(e,0);var i=new s.default.Gain(e,s.default.Type.Decibels);return this.connect(i),i.connect(n[t]),i},s.default.prototype.receive=function(t,e){return n.hasOwnProperty(t)||(n[t]=this.context.createGain()),s.default.connect(n[t],this,0,e),this},s.default.Context.on("init",function(t){t.buses?n=t.buses:(n={},t.buses=n)}),e.default=s.default},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlRandom=function(){var t=s.default.defaults(arguments,["min","max"],s.default.CtrlRandom);s.default.call(this),this.min=t.min,this.max=t.max,this.integer=t.integer},s.default.extend(s.default.CtrlRandom),s.default.CtrlRandom.defaults={min:0,max:1,integer:!1},Object.defineProperty(s.default.CtrlRandom.prototype,"value",{get:function(){var t=this.toSeconds(this.min),e=this.toSeconds(this.max),i=Math.random(),s=i*t+(1-i)*e;return this.integer&&(s=Math.floor(s)),s}}),e.default=s.default.CtrlRandom},function(t,e,i){"use strict";i.r(e);var s=i(0);s.default.CtrlMarkov=function(t,e){s.default.call(this),this.values=s.default.defaultArg(t,{}),this.value=s.default.defaultArg(e,Object.keys(this.values)[0])},s.default.extend(s.default.CtrlMarkov),s.default.CtrlMarkov.prototype.next=function(){if(this.values.hasOwnProperty(this.value)){var t=this.values[this.value];if(s.default.isArray(t))for(var e=this._getProbDistribution(t),i=Math.random(),n=0,o=0;o<e.length;o++){var a=e[o];if(i>n&&i<n+a){var r=t[o];s.default.isObject(r)?this.value=r.value:this.value=r}n+=a}else this.value=t}return this.value},s.default.CtrlMarkov.prototype._getProbDistribution=function(t){for(var e=[],i=0,n=!1,o=0;o<t.length;o++){var a=t[o];s.default.isObject(a)?(n=!0,e[o]=a.probability):e[o]=1/t.length,i+=e[o]}if(n)for(var r=0;r<e.length;r++)e[r]=e[r]/i;return e},s.default.CtrlMarkov.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlMarkov},function(t,e,i){"use strict";i.r(e);var s=i(0);i(4);s.default.CtrlInterpolate=function(){var t=s.default.defaults(arguments,["values","index"],s.default.CtrlInterpolate);s.default.call(this),this.values=t.values,this.index=t.index},s.default.extend(s.default.CtrlInterpolate),s.default.CtrlInterpolate.defaults={index:0,values:[]},Object.defineProperty(s.default.CtrlInterpolate.prototype,"value",{get:function(){var t=this.index;t=Math.min(t,this.values.length-1);var e=Math.floor(t),i=this.values[e],s=this.values[Math.ceil(t)];return this._interpolate(t-e,i,s)}}),s.default.CtrlInterpolate.prototype._interpolate=function(t,e,i){if(s.default.isArray(e)){for(var n=[],o=0;o<e.length;o++)n[o]=this._interpolate(t,e[o],i[o]);return n}if(s.default.isObject(e)){var a={};for(var r in e)a[r]=this._interpolate(t,e[r],i[r]);return a}return(1-t)*(e=this._toNumber(e))+t*(i=this._toNumber(i))},s.default.CtrlInterpolate.prototype._toNumber=function(t){return s.default.isNumber(t)?t:this.toSeconds(t)},s.default.CtrlInterpolate.prototype.dispose=function(){this.values=null},e.default=s.default.CtrlInterpolate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Waveform=function(){var t=s.default.defaults(arguments,["size"],s.default.Waveform);t.type=s.default.Analyser.Type.Waveform,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.Waveform,s.default.AudioNode),s.default.Waveform.defaults={size:1024},s.default.Waveform.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.Waveform.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.Waveform.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.Waveform},function(t,e,i){"use strict";i.r(e);var s=i(0);i(23),i(10),i(19),i(2),i(22),i(28),i(1);s.default.Panner3D=function(){var t=s.default.defaults(arguments,["positionX","positionY","positionZ"],s.default.Panner3D);s.default.AudioNode.call(this),this._panner=this.input=this.output=this.context.createPanner(),this._panner.panningModel=t.panningModel,this._panner.maxDistance=t.maxDistance,this._panner.distanceModel=t.distanceModel,this._panner.coneOuterGain=t.coneOuterGain,this._panner.coneOuterAngle=t.coneOuterAngle,this._panner.coneInnerAngle=t.coneInnerAngle,this._panner.refDistance=t.refDistance,this._panner.rolloffFactor=t.rolloffFactor,this._orientation=[t.orientationX,t.orientationY,t.orientationZ],this._position=[t.positionX,t.positionY,t.positionZ],this.orientationX=t.orientationX,this.orientationY=t.orientationY,this.orientationZ=t.orientationZ,this.positionX=t.positionX,this.positionY=t.positionY,this.positionZ=t.positionZ},s.default.extend(s.default.Panner3D,s.default.AudioNode),s.default.Panner3D.defaults={positionX:0,positionY:0,positionZ:0,orientationX:0,orientationY:0,orientationZ:0,panningModel:"equalpower",maxDistance:1e4,distanceModel:"inverse",coneOuterGain:0,coneOuterAngle:360,coneInnerAngle:360,refDistance:1,rolloffFactor:1},s.default.Panner3D.prototype._rampTimeConstant=.01,s.default.Panner3D.prototype.setPosition=function(t,e,i){if(this._panner.positionX){var s=this.now();this._panner.positionX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.positionY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.positionZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setPosition(t,e,i);return this._position=Array.prototype.slice.call(arguments),this},s.default.Panner3D.prototype.setOrientation=function(t,e,i){if(this._panner.orientationX){var s=this.now();this._panner.orientationX.setTargetAtTime(t,s,this._rampTimeConstant),this._panner.orientationY.setTargetAtTime(e,s,this._rampTimeConstant),this._panner.orientationZ.setTargetAtTime(i,s,this._rampTimeConstant)}else this._panner.setOrientation(t,e,i);return this._orientation=Array.prototype.slice.call(arguments),this},Object.defineProperty(s.default.Panner3D.prototype,"positionX",{set:function(t){this._position[0]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionY",{set:function(t){this._position[1]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"positionZ",{set:function(t){this._position[2]=t,this.setPosition.apply(this,this._position)},get:function(){return this._position[2]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationX",{set:function(t){this._orientation[0]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[0]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationY",{set:function(t){this._orientation[1]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[1]}}),Object.defineProperty(s.default.Panner3D.prototype,"orientationZ",{set:function(t){this._orientation[2]=t,this.setOrientation.apply(this,this._orientation)},get:function(){return this._orientation[2]}}),s.default.Panner3D._aliasProperty=function(t){Object.defineProperty(s.default.Panner3D.prototype,t,{set:function(e){this._panner[t]=e},get:function(){return this._panner[t]}})},s.default.Panner3D._aliasProperty("panningModel"),s.default.Panner3D._aliasProperty("refDistance"),s.default.Panner3D._aliasProperty("rolloffFactor"),s.default.Panner3D._aliasProperty("distanceModel"),s.default.Panner3D._aliasProperty("coneInnerAngle"),s.default.Panner3D._aliasProperty("coneOuterAngle"),s.default.Panner3D._aliasProperty("coneOuterGain"),s.default.Panner3D._aliasProperty("maxDistance"),s.default.Panner3D.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._panner.disconnect(),this._panner=null,this._orientation=null,this._position=null,this},e.default=s.default.Panner3D},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(43),i(1);s.default.MultibandCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(arguments,s.default.MultibandCompressor.defaults),this._splitter=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this.lowFrequency=this._splitter.lowFrequency,this.highFrequency=this._splitter.highFrequency,this.output=new s.default.Gain,this.low=new s.default.Compressor(t.low),this.mid=new s.default.Compressor(t.mid),this.high=new s.default.Compressor(t.high),this._splitter.low.chain(this.low,this.output),this._splitter.mid.chain(this.mid,this.output),this._splitter.high.chain(this.high,this.output),this._readOnly(["high","mid","low","highFrequency","lowFrequency"])},s.default.extend(s.default.MultibandCompressor,s.default.AudioNode),s.default.MultibandCompressor.defaults={low:s.default.Compressor.defaults,mid:s.default.Compressor.defaults,high:s.default.Compressor.defaults,lowFrequency:250,highFrequency:2e3},s.default.MultibandCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._splitter.dispose(),this._writable(["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this._splitter=null,this.low=null,this.mid=null,this.high=null,this.lowFrequency=null,this.highFrequency=null,this},e.default=s.default.MultibandCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(10),i(1);s.default.Mono=function(){s.default.AudioNode.call(this),this.createInsOuts(1,0),this._merge=this.output=new s.default.Merge,s.default.connect(this.input,this._merge,0,0),s.default.connect(this.input,this._merge,0,1)},s.default.extend(s.default.Mono,s.default.AudioNode),s.default.Mono.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._merge.dispose(),this._merge=null,this},e.default=s.default.Mono},function(t,e,i){"use strict";i.r(e);var s=i(0);i(53),i(52),i(43),i(1);s.default.MidSideCompressor=function(t){s.default.AudioNode.call(this),t=s.default.defaultArg(t,s.default.MidSideCompressor.defaults),this._midSideSplit=this.input=new s.default.MidSideSplit,this._midSideMerge=this.output=new s.default.MidSideMerge,this.mid=new s.default.Compressor(t.mid),this.side=new s.default.Compressor(t.side),this._midSideSplit.mid.chain(this.mid,this._midSideMerge.mid),this._midSideSplit.side.chain(this.side,this._midSideMerge.side),this._readOnly(["mid","side"])},s.default.extend(s.default.MidSideCompressor,s.default.AudioNode),s.default.MidSideCompressor.defaults={mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},side:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10}},s.default.MidSideCompressor.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["mid","side"]),this.mid.dispose(),this.mid=null,this.side.dispose(),this.side=null,this._midSideSplit.dispose(),this._midSideSplit=null,this._midSideMerge.dispose(),this._midSideMerge=null,this},e.default=s.default.MidSideCompressor},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.Meter=function(){var t=s.default.defaults(arguments,["smoothing"],s.default.Meter);s.default.AudioNode.call(this),this.smoothing=t.smoothing,this._rms=0,this.input=this.output=this._analyser=new s.default.Analyser("waveform",256)},s.default.extend(s.default.Meter,s.default.AudioNode),s.default.Meter.defaults={smoothing:.8},s.default.Meter.prototype.getLevel=function(){for(var t=this._analyser.getValue(),e=0,i=0;i<t.length;i++){var n=t[i];e+=n*n}var o=Math.sqrt(e/t.length);return this._rms=Math.max(o,this._rms*this.smoothing),s.default.gainToDb(this._rms)},s.default.Meter.prototype.getValue=function(){return this._analyser.getValue()[0]},s.default.Meter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null,this},e.default=s.default.Meter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(43),i(1);s.default.Limiter=function(){var t=s.default.defaults(arguments,["threshold"],s.default.Limiter);s.default.AudioNode.call(this),this._compressor=this.input=this.output=new s.default.Compressor({attack:.001,decay:.001,threshold:t.threshold}),this.threshold=this._compressor.threshold,this._readOnly("threshold")},s.default.extend(s.default.Limiter,s.default.AudioNode),s.default.Limiter.defaults={threshold:-12},s.default.Limiter.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._compressor.dispose(),this._compressor=null,this._writable("threshold"),this.threshold=null,this},e.default=s.default.Limiter},function(t,e,i){"use strict";i.r(e);var s=i(0);i(58),i(85),i(1);s.default.Gate=function(){var t=s.default.defaults(arguments,["threshold","smoothing"],s.default.Gate);s.default.AudioNode.call(this),this.createInsOuts(1,1),this._follower=new s.default.Follower(t.smoothing),this._gt=new s.default.GreaterThan(s.default.dbToGain(t.threshold)),s.default.connect(this.input,this.output),s.default.connectSeries(this.input,this._follower,this._gt,this.output.gain)},s.default.extend(s.default.Gate,s.default.AudioNode),s.default.Gate.defaults={smoothing:.1,threshold:-40},Object.defineProperty(s.default.Gate.prototype,"threshold",{get:function(){return s.default.gainToDb(this._gt.value)},set:function(t){this._gt.value=s.default.dbToGain(t)}}),Object.defineProperty(s.default.Gate.prototype,"smoothing",{get:function(){return this._follower.smoothing},set:function(t){this._follower.smoothing=t}}),s.default.Gate.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._follower.dispose(),this._gt.dispose(),this._follower=null,this._gt=null,this},e.default=s.default.Gate},function(t,e,i){"use strict";i.r(e);var s=i(0);i(36),i(1);s.default.FFT=function(){var t=s.default.defaults(arguments,["size"],s.default.FFT);t.type=s.default.Analyser.Type.FFT,s.default.AudioNode.call(this),this._analyser=this.input=this.output=new s.default.Analyser(t)},s.default.extend(s.default.FFT,s.default.AudioNode),s.default.FFT.defaults={size:1024},s.default.FFT.prototype.getValue=function(){return this._analyser.getValue()},Object.defineProperty(s.default.FFT.prototype,"size",{get:function(){return this._analyser.size},set:function(t){this._analyser.size=t}}),s.default.FFT.prototype.dispose=function(){s.default.AudioNode.prototype.dispose.call(this),this._analyser.dispose(),this._analyser=null},e.default=s.default.FFT},function(t,e,i){"use strict";i.r(e);var s=i(0);i(60),i(3),i(1);s.default.EQ3=function(){var t=s.default.defaults(arguments,["low","mid","high"],s.default.EQ3);s.default.AudioNode.call(this),this.output=new s.default.Gain,this._multibandSplit=this.input=new s.default.MultibandSplit({lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this._lowGain=new s.default.Gain(t.low,s.default.Type.Decibels),this._midGain=new s.default.Gain(t.mid,s.default.Type.Decibels),this._highGain=new s.default.Gain(t.high,s.default.Type.Decibels),this.low=this._lowGain.gain,this.mid=this._midGain.gain,this.high=this._highGain.gain,this.Q=this._multibandSplit.Q,this.lowFrequency=this._multibandSplit.lowFrequency,this.highFrequency=this._multibandSplit.highFrequency,this._multibandSplit.low.chain(this._lowGain,this.output),this._multibandSplit.mid.chain(this._midGain,this.output),this._multibandSplit.high.chain(this._highGain,this.output),this._readOnly(["low","mid","high","lowFrequency","highFrequency"])},s.default.extend(s.default.EQ3,s.default.AudioNode),s.default.EQ3.defaults={low:0,mid:0,high:0,lowFrequency:400,highFrequency:2500},s.default.EQ3.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["low","mid","high","lowFrequency","highFrequency"]),this._multibandSplit.dispose(),this._multibandSplit=null,this.lowFrequency=null,this.highFrequency=null,this._lowGain.dispose(),this._lowGain=null,this._midGain.dispose(),this._midGain=null,this._highGain.dispose(),this._highGain=null,this.low=null,this.mid=null,this.high=null,this.Q=null,this},e.default=s.default.EQ3},function(t,e,i){"use strict";i.r(e);var s=i(0);i(91),i(88),i(1);s.default.Channel=function(){var t=s.default.defaults(arguments,["volume","pan"],s.default.PanVol);s.default.AudioNode.call(this,t),this._solo=this.input=new s.default.Solo(t.solo),this._panVol=this.output=new s.default.PanVol({pan:t.pan,volume:t.volume,mute:t.mute}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),this._readOnly(["pan","volume"])},s.default.extend(s.default.Channel,s.default.AudioNode),s.default.Channel.defaults={pan:0,volume:0,mute:!1,solo:!1},Object.defineProperty(s.default.Channel.prototype,"solo",{get:function(){return this._solo.solo},set:function(t){this._solo.solo=t}}),Object.defineProperty(s.default.Channel.prototype,"muted",{get:function(){return this._solo.muted||this.mute}}),Object.defineProperty(s.default.Channel.prototype,"mute",{get:function(){return this._panVol.mute},set:function(t){this._panVol.mute=t}}),s.default.Channel.prototype.dispose=function(){return s.default.AudioNode.prototype.dispose.call(this),this._writable(["pan","volume"]),this._panVol.dispose(),this._panVol=null,this.pan=null,this.volume=null,this._solo.dispose(),this._solo=null,this},e.default=s.default.Channel},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){i(31),i(36),i(146),i(43),i(23),i(47),i(145),i(59),i(144),i(9),i(58),i(41),i(143),i(12),i(142),i(54),i(10),i(141),i(140),i(52),i(53),i(139),i(138),i(60),i(48),i(137),i(91),i(86),i(88),i(19),i(27),i(136),i(135),i(134),i(79),i(133),i(1),i(11),i(78),i(132),i(83),i(20),i(18),i(131),i(35),i(3),i(81),i(130),i(40),i(77),i(76),i(14),i(24),i(34),i(16),i(56),i(80),i(129),i(128),i(127),i(126),i(125),i(124),i(74),i(123),i(8),i(122),i(33),i(121),i(120),i(73),i(119),i(118),i(117),i(116),i(15),i(115),i(114),i(72),i(113),i(112),i(51),i(71),i(70),i(111),i(110),i(109),i(108),i(107),i(21),i(106),i(105),i(25),i(66),i(104),i(103),i(102),i(101),i(38),i(87),i(29),i(22),i(89),i(100),i(85),i(84),i(75),i(5),i(90),i(99),i(61),i(26),i(42),i(2),i(30),i(13),i(82),i(98),i(7),i(28),i(68),i(32),i(67),i(49),i(97),i(39),i(37),i(17),i(64),i(65),i(96),i(50),i(69),i(6),i(57),i(95),i(46),i(94),i(55),i(63),i(62),i(45),i(4),t.exports=i(0).default}])});

},{}],"../src/Fractions.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Fractions =
/** @class */
function () {
  function Fractions() {}

  Fractions.add = function (a, b, cancel) {
    if (cancel === void 0) {
      cancel = true;
    }

    var _a;

    var lcm = Fractions.lcm(a[1], b[1]);
    _a = [a, b].map(function (f) {
      return Fractions.setDivisor(f, lcm);
    }), a = _a[0], b = _a[1];
    var sum = [a[0] + b[0], lcm];

    if (cancel) {
      return Fractions.cancel(sum);
    }

    return sum;
  };

  Fractions.cancel = function (a) {
    return Fractions.setDivisor(a, a[1] / Fractions.gcd(a[0], a[1]));
  };

  Fractions.setDivisor = function (a, divisor) {
    return [a[0] * divisor / a[1], divisor];
  };

  Fractions.lcm = function (x, y) {
    return !x || !y ? 0 : Math.abs(x * y / Fractions.gcd(x, y));
  };

  Fractions.gcd = function (x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }

    return x;
  };

  return Fractions;
}();

exports.Fractions = Fractions;
},{}],"../src/Rhythm.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Fractions_1 = require("./Fractions");

var Music_1 = require("./Music");

var Rhythm =
/** @class */
function () {
  function Rhythm() {}

  Rhythm.from = function (body) {
    if (!Array.isArray(body)) {
      return [body];
    }

    return body;
  };

  Rhythm.duration = function (path, whole) {
    if (whole === void 0) {
      whole = 1;
    }

    return path.reduce(function (f, p) {
      return f / p[1] * (p[2] || 1);
    }, whole);
  };

  Rhythm.time = function (path, whole) {
    if (whole === void 0) {
      whole = 1;
    }

    return path.reduce(function (_a, p, i) {
      var f = _a.f,
          t = _a.t;
      return {
        f: f / p[1] * (p[2] || 1),
        t: t + f / p[1] * path[i][0]
      };
    }, {
      f: whole,
      t: 0
    }).t;
  };

  Rhythm.oldDuration = function (divisions, whole) {
    if (whole === void 0) {
      whole = 1;
    }

    return divisions.reduce(function (f, d) {
      return f / d;
    }, whole);
  };

  Rhythm.oldTime = function (divisions, path, whole) {
    if (whole === void 0) {
      whole = 1;
    }

    return divisions.reduce(function (_a, d, i) {
      var f = _a.f,
          p = _a.p;
      return {
        f: f / d,
        p: p + f / d * path[i]
      };
    }, {
      f: whole,
      p: 0
    }).p;
  };

  Rhythm.addPaths = function (a, b, divisions) {
    var _a; // console.warn('addPaths is deprecated');


    _a = [a, b].sort(function (a, b) {
      return b.length - a.length;
    }), a = _a[0], b = _a[1];
    var added = a.map(function (n, i) {
      return n + (b[i] || 0);
    });

    if (!divisions) {
      return added;
    }

    return Rhythm.overflow(added, divisions);
  };
  /** recalculates path inside given divisions */


  Rhythm.overflow = function (path, divisions) {
    path = [].concat(path);

    for (var i = path.length - 1; i > 0; --i) {
      if (path[i] >= divisions[i]) {
        var rest = Math.floor(path[i] / divisions[i]);
        path[i] = path[i] % divisions[i];
        path[i - 1] += rest; // todo what happens if rest is too much for path[i-1]
      }
    }

    return path;
  };

  Rhythm.calculate = function (totalLength) {
    if (totalLength === void 0) {
      totalLength = 1;
    }

    return function (_a) {
      var time = _a.time,
          duration = _a.duration,
          path = _a.path,
          value = _a.value,
          length = _a.length;

      if (typeof value === 'number') {
        length = value;
      } else if (_typeof(value) === 'object' && value['length']) {
        length = value['length'];
      } else {
        length = 1;
      }

      return {
        value: value,
        path: path,
        time: time !== undefined ? time : Rhythm.time(path, totalLength),
        duration: duration !== undefined ? duration : Rhythm.duration(path, totalLength) * length
      };
    };
  };

  Rhythm.useValueAsDuration = function (event) {
    return __assign({}, event, {
      duration: event.duration * event.value
    });
  };

  Rhythm.useValueAsLength = function (event) {
    return __assign({}, event, {
      length: event.value
    });
  };

  Rhythm.poly = function (rhythms, length) {
    if (length === void 0) {
      length = 1;
    }

    var toArray = function toArray(r) {
      return !Array.isArray(r) ? [r] : r;
    };

    return rhythms.reduce(function (events, rhythm) {
      return events.concat(Rhythm.render(toArray(rhythm), length, true));
    }, []);
  };

  Rhythm.render = function (rhythm, length, poly) {
    if (length === void 0) {
      length = 1;
    }

    if (poly === void 0) {
      poly = false;
    }

    return Rhythm.flat(rhythm, [], poly).map(Rhythm.calculate(length)).filter(function (event) {
      return !!event.duration;
    });
  };

  Rhythm.spm = function (bpm, pulse) {
    return 60 / bpm * pulse;
  };
  /** Flattens the given possibly nested tree array to an array containing all values in sequential order.
   * You can then turn RhythmEvent[] back to the original nested array with Measure.expand. */


  Rhythm.flatten = function (tree, path, divisions) {
    if (path === void 0) {
      path = [];
    }

    if (divisions === void 0) {
      divisions = [];
    }

    if (!Array.isArray(tree)) {
      // is primitive value
      return [{
        path: path,
        divisions: divisions,
        value: tree
      }];
    }

    return tree.reduce(function (flat, item, index) {
      return flat.concat(Rhythm.flatten(item, path.concat([index]), divisions.concat([tree.length])));
    }, []);
  };

  Rhythm.isValid = function (items) {
    return items.reduce(function (valid, item) {
      return valid && item.divisions && item.path && item.divisions.length === item.path.length;
    }, true);
  };

  Rhythm.nest = function (items, fill) {
    if (fill === void 0) {
      fill = 0;
    }

    return items.reduce(function (nested, item) {
      if (item.path[0] >= item.divisions[0]) {
        console.error("invalid path " + item.path[0] + " in divisions " + item.divisions[0] + " on item", item);
        return nested;
      }

      if (item.path.length !== item.divisions.length) {
        console.error('invalid flat rhythm: different length of path / divisions', item);
        return nested;
      }

      if (nested.length && nested.length < item.divisions[0]) {
        console.error('ivalid flat rhythm: different divisions on same level > concat', items, nested);
        nested = nested.concat(Array(item.divisions[0] - nested.length).fill(fill));
        /* return nested; */
      }

      if (nested.length && nested.length > item.divisions[0]) {
        console.warn('flat rhythm: different divisions on same level', items, nested);
      }

      if (!nested.length && item.divisions[0]) {
        nested = new Array(item.divisions[0]).fill(fill);
      }

      if (item.path.length === 1) {
        /* if (expanded[item.path[0]] !== undefined) {
          if (!!expanded[item.path[0]]) {
            return expanded; // dont override if already not 0
          }
          console.warn('override path ', item.path[0], ':', expanded[item.path[0]], 'with', item.value);
        } */
        if (Math.round(item.path[0]) === item.path[0]) {
          nested[item.path[0]] = item.value;
        } else if (item.value !== fill) {// console.warn('fractured path! value "' + item.value + '" !== "' + fill + '"', item)
        }
      } else {
        nested[item.path[0]] = Rhythm.nest(items.filter(function (i) {
          return i.path.length > 1 && i.path[0] === item.path[0];
        }).map(function (i) {
          return __assign({}, i, {
            path: i.path.slice(1),
            divisions: i.divisions.slice(1)
          });
        }), fill);
      }

      return nested;
    }, []);
  };
  /** Turns a flat FlatEvent array to a (possibly) nested Array of its values. Reverts Measure.flatten. */


  Rhythm.expand = function (items) {
    console.warn('expand is deprecated');
    var lastSiblingIndex = -1;
    return items.reduce(function (expanded, item, index) {
      if (item.path.length === 1) {
        expanded[item.path[0]] = item.value;
      } else if (item.path[0] > lastSiblingIndex) {
        lastSiblingIndex = item.path[0];
        var siblings = items.filter(function (i, j) {
          return j >= index && i.path.length >= item.path.length;
        }).map(function (i) {
          return __assign({}, i, {
            path: i.path.slice(1)
          });
        });
        expanded[item.path[0]] = Rhythm.expand(siblings);
      }

      return expanded;
    }, []);
  };

  Rhythm.pathOf = function (value, tree) {
    var flat = Rhythm.flatten(tree);
    var match = flat.find(function (v) {
      return v.value === value;
    });

    if (match) {
      return match.path;
    }
  };

  Rhythm.simplePath = function (path) {
    return path.join('.').replace(/(\.0)*$/, ''); //.split('.');
  };

  Rhythm.haveSamePath = function (a, b) {
    return Rhythm.simplePath(a.path) === Rhythm.simplePath(b.path);
  };

  Rhythm.haveSameSlot = function (a, b) {
    return Rhythm.simplePath(a.path) === Rhythm.simplePath(b.path) && Rhythm.simplePath(a.divisions) === Rhythm.simplePath(b.divisions); //a.divisions.length === b.divisions.length
  };

  Rhythm.getPath = function (tree, path, withPath, flat) {
    if (withPath === void 0) {
      withPath = false;
    }

    if (typeof path === 'number') {
      path = [path];
    }

    flat = flat || Rhythm.flatten(tree);
    var match = flat.find(function (v) {
      var min = Math.min(path.length, v.path.length);
      return v.path.slice(0, min).join(',') === path.slice(0, min).join(',');
    });

    if (withPath) {
      return match;
    }

    return match ? match.value : undefined;
  };

  Rhythm.addPulse = function (rhythm, pulse, offset) {
    if (offset === void 0) {
      offset = 0;
    }

    var measures = Math.ceil(rhythm.length / pulse);
    return Rhythm.nest(Rhythm.flatten(rhythm).map(function (_a) {
      var value = _a.value,
          divisions = _a.divisions,
          path = _a.path;
      divisions = [measures].concat([pulse], divisions.slice(1));
      path = [Math.floor(path[0] / pulse)].concat([path[0] % pulse], path.slice(1));
      path = offset ? Rhythm.addPaths(path, [0, offset], divisions) : path;
      return {
        value: value,
        divisions: divisions,
        path: path
      };
    }));
  };
  /* static addPulses<T>(rhythm: NestedRhythm<T>, pulses: number[], offset: number = 0): NestedRhythm<T> {
    return Rhythm.nest(
      Rhythm.flatten(rhythm).map(({ value, divisions, path }) => {
        // const pulse = divisions[1] || 1;
        const pulse = path[0]
        const measures = Math.ceil(rhythm.length / pulse);
        divisions = [measures].concat([pulse], divisions.slice(1));
        path = [Math.floor(path[0] / pulse)].concat([path[0] % pulse], path.slice(1));
        path = offset ? Rhythm.addPaths(path, [0, offset], divisions) : path;
        return {
          value,
          divisions,
          path
        }
      })
    );
  } */


  Rhythm.removePulse = function (rhythm) {
    return Rhythm.nest(Rhythm.flatten(rhythm).map(function (_a) {
      var value = _a.value,
          divisions = _a.divisions,
          path = _a.path;
      return {
        value: value,
        divisions: [divisions[1] * divisions[0]].concat(divisions.slice(2)),
        path: [path[0] * divisions[1] + path[1]].concat(path.slice(2))
      };
    }));
  };

  Rhythm.nextItem = function (tree, path, move, withPath, flat) {
    if (move === void 0) {
      move = 1;
    }

    if (withPath === void 0) {
      withPath = false;
    }

    flat = Rhythm.flatten(tree);
    var match = Rhythm.getPath(tree, path, true, flat);

    if (match) {
      var index = (flat.indexOf(match) + move + flat.length) % flat.length;

      if (withPath) {
        return flat[index];
      }

      return flat[index] ? flat[index].value : undefined;
    }
  };

  Rhythm.nextValue = function (tree, value, move) {
    if (move === void 0) {
      move = 1;
    }

    var flat = Rhythm.flatten(tree);
    var match = flat.find(function (v) {
      return v.value === value;
    });

    if (match) {
      return Rhythm.nextItem(tree, match.path, move, false, flat);
    }
  };

  Rhythm.nextPath = function (tree, path, move) {
    if (move === void 0) {
      move = 1;
    }

    var flat = Rhythm.flatten(tree);

    if (!path) {
      return flat[0] ? flat[0].path : undefined;
    }

    var match = Rhythm.getPath(tree, path, true, flat);

    if (match) {
      var next = Rhythm.nextItem(tree, match.path, move, true, flat);
      return next ? next.path : undefined;
    }
  };

  Rhythm.getBlock = function (length, position, pulse) {
    if (pulse === void 0) {
      pulse = 4;
    }

    var blocks = {
      4: [4],
      2: position === 0 ? [2, 0] : [0, 2] // or any other 2 block

      /** ... */

    };
    Array(position).fill(0).concat(blocks[length]).concat(Array(pulse - position - length).fill(0));
    return blocks[length];
  };

  Rhythm.prototype.addGroove = function (items, pulse) {
    if (pulse === void 0) {
      pulse = 4;
    }

    var chordsPerBeat = pulse / items.length;

    if (chordsPerBeat < 0) {// need another grid... or just error??
    }

    if (Math.round(chordsPerBeat) !== chordsPerBeat) {// apply bjorklund to fill chords evenly
    }

    var rendered = Rhythm.render(items, pulse);
    var time = 0;
    return rendered.reduce(function (combined, chordEvent, index) {
      var _a; // const time = rendered.slice(0, index + 1).reduce((sum, track) => sum + track.duration, 0);


      combined = __assign({}, combined, (_a = {}, _a[chordEvent.value] = Rhythm.getBlock(chordEvent.duration, time), _a));
      time += chordEvent.duration;
      return combined;
    }, {});
  };
  /**
   * NEW SYNTAX
   */


  Rhythm.multiplyDivisions = function (divisions, factor) {
    return [divisions[0] * factor].concat(divisions.slice(1));
  };

  Rhythm.multiplyPath = function (path, divisions, factor) {
    path = path.map(function (v) {
      return factor * v;
    });
    return Rhythm.overflow(path, divisions);
  };

  Rhythm.multiplyEvents = function (rhythm, factor) {
    return Rhythm.fixTopLevel(rhythm.map(function (_a) {
      var value = _a.value,
          path = _a.path;
      return {
        value: value * factor,
        path: Rhythm.carry(path.map(function (f, i) {
          return [f[0] * factor, f[1] * (!i ? factor : 1) // f[1] * factor
          // f[1]
          ];
        }))
      };
    }));
  };

  Rhythm.divideEvents = function (rhythm, factor) {
    return Rhythm.multiplyEvents(rhythm, 1 / factor);
  };

  Rhythm.multiply = function (rhythm, factor) {
    return Rhythm.nested(Rhythm.multiplyEvents(Rhythm.flat(rhythm), factor));
  };

  Rhythm.divide = function (rhythm, divisor) {
    return Rhythm.multiply(rhythm, 1 / divisor);
  };

  Rhythm.maxArray = function (array) {
    if (!array || !array.length) {
      return;
    }

    return array.reduce(function (max, item) {
      return Math.max(max, item);
    }, array[0]);
  };
  /* static countChildren(item, poly = false) {
    if (item[params.monophony]) {
      return item[params.monophony].length * item['duration'][0] + 1;
    }
    return sum + item['duration'][0];
  } */

  /** Flattens the given possibly nested tree array to an array containing all values in sequential order.
   * You can then turn RhythmEvent[] back to the original nested array with Measure.expand. */


  Rhythm.flat = function (rhythm, path, poly, props) {
    if (path === void 0) {
      path = [];
    }

    if (poly === void 0) {
      poly = false;
    }

    if (props === void 0) {
      props = [];
    } // get total duration of rhythm


    var duration;

    if (!poly) {
      duration = rhythm.reduce(function (sum, item) {
        if (Array.isArray(item) || _typeof(item) !== 'object') {
          return sum + 1;
        }

        if (Array.isArray(item['duration'])) {
          if (item[Music_1.params.monophony]) {
            item['duration'] = item[Music_1.params.monophony].length * item['duration'][0]; //return sum + item['duration'];
          } else if (item[Music_1.params.polyphony]) {
            item['duration'] = item['duration'][0]; // poly
          } else {
            item['duration'] = item['duration'][0]; // poly
          }
        }

        return sum + (item['duration'] !== undefined ? item['duration'] : 1);
      }, 0);
    } else {
      duration = 1;
    }

    var time = 0;
    return rhythm.reduce(function (flat, item, index) {
      var i = time + (item['time'] || 0);

      if (!poly) {
        time += _typeof(item) === 'object' ? +(item['duration'] || 1) : 1;
      }

      if (_typeof(item) === 'object') {
        var collectedKeys_1 = ['voice', 'duration'];
        Object.keys(item).filter(function (key) {
          return collectedKeys_1.includes(key);
        }).forEach(function (key) {
          props[key] = [item[key]].concat(props[key] || []);
        });
      } else {
        props = Object.keys(props).reduce(function (p, key) {
          var _a;

          return __assign({}, p, (_a = {}, _a[key] = [null].concat(props[key]), _a));
        }, props);
      }

      if (!Array.isArray(item)) {
        if (props['duration'] && Array.isArray(props['duration'][0])) {
          item['duration'] = props['duration'][0][0] || 1;
          /* console.log(`item duration ${newDuration}/${duration}`, item); */
        }

        return flat.concat([{
          value: item,
          path: path.concat([[i, duration, item['duration'] || 1]])
        }]);
      }

      return flat.concat(Rhythm.flat(item, path.concat([[i, duration]]), poly, props)
      /* Rhythm.flat(item, path.concat([[index, rhythm.length]])) */
      );
    }, []);
  };

  Rhythm.nested = function (items, fill) {
    if (fill === void 0) {
      fill = 0;
    }

    return items.reduce(function (nested, item) {
      if (item.path[0][0] >= item.path[0][1]) {
        console.error("invalid path " + item.path[0] + " on item", item);
        return nested;
      }

      if (nested.length && nested.length < item.path[0][1]) {
        console.warn('ivalid flat rhythm: different divisions on same level > concat', items, nested);
        nested = nested.concat(Array(item.path[0][1] - nested.length).fill(fill));
        /* return nested; */
      }

      if (nested.length && nested.length > item.path[0][1]) {
        console.warn('flat rhythm: different divisions on same level', items, nested);
      }

      if (!nested.length && item.path[0][1]) {
        nested = new Array(item.path[0][1]).fill(fill);
      }

      if (item.path.length === 1) {
        if (Math.round(item.path[0][0]) === item.path[0][0]) {
          nested[item.path[0][0]] = item.value;
        } else if (item.value !== fill) {
          console.warn('fractured path! value "' + item.value + '" !== "' + fill + '"', item);
        }
      } else {
        nested[item.path[0][0]] = Rhythm.nested(items.filter(function (i) {
          return i.path.length > 1 && i.path[0][0] === item.path[0][0];
        }).map(function (i) {
          return __assign({}, i, {
            path: i.path.slice(1)
          });
        }), fill);
      }

      return nested;
    }, []);
  }; // aligns all paths to longest path length, filling each up with [0, 1]


  Rhythm.align = function () {
    var paths = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      paths[_i] = arguments[_i];
    }

    return paths.map(function (p) {
      return p.concat(Array(Rhythm.maxArray(paths.map(function (p) {
        return p.length;
      })) - p.length).fill([0, 1]));
    });
  }; // carries all fractions that are >=1 over to the next fraction to mimic notated rhythm behaviour


  Rhythm.carry = function (a) {
    a = [].concat(a);

    for (var i = a.length - 1; i > 0; --i) {
      a[i - 1][0] += Math.floor(a[i][0] / a[i][1]);
      a[i][0] = a[i][0] % a[i][1];
    }

    a[0][1] = Math.max(a[0][0] + 1, a[0][1]);
    return a;
  };

  Rhythm.add = function (a, b, cancel) {
    if (cancel === void 0) {
      cancel = false;
    }

    var _a;

    _a = Rhythm.align(a, b), a = _a[0], b = _a[1];
    return Rhythm.carry(a.map(function (f, i) {
      return Fractions_1.Fractions.add(f, b[i], cancel);
    }));
  };

  Rhythm.fixTopLevel = function (events) {
    // find max divisor on top level
    var max = Rhythm.maxArray(events.map(function (e) {
      return e.path[0][1];
    })); // use max divisor for all top levels

    return events.map(function (e) {
      return __assign({}, e, {
        path: e.path.map(function (f, i) {
          return !i ? [f[0], max] : f;
        })
      });
    });
  };
  /* Makes sure the top level is correct on all events + adds optional path to move the events */


  Rhythm.shiftEvents = function (events, path) {
    if (path) {
      events = events.map(function (e) {
        return __assign({}, e, {
          path: Rhythm.add(e.path, path)
        });
      });
    }

    return Rhythm.fixTopLevel(events).filter(function (e) {
      return !!e.value;
    });
  };

  Rhythm.shift = function (rhythm, path) {
    return Rhythm.nested(Rhythm.shiftEvents(Rhythm.flat(rhythm), path));
  };

  Rhythm.groupEvents = function (events, pulse, offset) {
    var wrapped = events.map(function (_a) {
      var value = _a.value,
          path = _a.path;
      path = [].concat([[Math.floor(path[0][0] / pulse), Math.ceil(path[0][1] / pulse)]], [[path[0][0] % pulse, pulse]], path.slice(1));
      return {
        value: value,
        path: path
      };
    });

    if (offset) {
      wrapped = Rhythm.shiftEvents(wrapped, [[0, 1], [offset, pulse]]);
    }

    return wrapped;
  };

  Rhythm.group = function (rhythm, pulse, offset) {
    return Rhythm.nested(Rhythm.groupEvents(Rhythm.flat(rhythm), pulse, offset));
  };

  Rhythm.ungroupEvents = function (events) {
    return events.map(function (_a) {
      var value = _a.value,
          path = _a.path;
      return {
        value: value,
        path: [[path[0][0] * path[1][1] + path[1][0], path[1][1] * path[0][1]]].concat(path.slice(2))
      };
    });
  };

  Rhythm.ungroup = function (rhythm) {
    return Rhythm.nested(Rhythm.ungroupEvents(Rhythm.flat(rhythm)));
  };

  Rhythm.combine = function (source, target) {
    var targetEvents = Rhythm.flat(target);
    var sourceEvents = Rhythm.flat(source);

    if (source.length > target.length) {
      targetEvents = Rhythm.shiftEvents(Rhythm.flat(target), [[0, source.length]]); // add empty bars
    } else if (target.length > source.length) {
      sourceEvents = Rhythm.shiftEvents(Rhythm.flat(source), [[0, target.length]]); // add empty bars
    }

    return Rhythm.nested(Rhythm.combineEvents(targetEvents, sourceEvents));
  };

  Rhythm.combineEvents = function (a, b) {
    return Rhythm.shiftEvents([].concat(a, b).filter(function (e) {
      return !!e.value;
    }));
  };

  Rhythm.isEqualPath = function (a, b) {
    var paths = Rhythm.align(a, b).map(function (p) {
      return JSON.stringify(p);
    });
    return paths[0] === paths[1];
  };

  Rhythm.insertEvents = function (sourceEvents, targetEvents, beat) {
    var pulses = targetEvents.map(function (e) {
      return e.path[1] ? e.path[1][1] : 1;
    });
    var beats = targetEvents[0].path[0][1] * pulses[0];

    if (beat === undefined) {
      beat = beats; // set to end if undefined
    } else if (beat < 0) {
      beat = beats + beat; // subtract from end
    } // handle negative offset


    sourceEvents = Rhythm.groupEvents(sourceEvents, pulses[0], beat);
    return Rhythm.combineEvents(targetEvents, sourceEvents);
  };

  Rhythm.insert = function (source, target, beat) {
    return Rhythm.nested(Rhythm.insertEvents(Rhythm.flat(source), Rhythm.flat(target), beat));
  };

  Rhythm.migratePath = function (divisions, path) {
    return divisions.map(function (d, index) {
      return [path ? path[index] : 0, d];
    });
  };

  return Rhythm;
}();

exports.Rhythm = Rhythm;
/*


static normalize(a: RhythmEvent<number>, depth) {
  const diff = depth - a.path.length;
  if (diff > 0) { // gets longer
    return {
      value: a.value,
      path: a.path.concat(Array(diff).fill(0)),
      divisions: a.divisions.concat(Array(diff).fill(1)),
    }
  }
  // const divisions = a.divisions.slice(0, depth);
  return {
    value: a.value * Rhythm.duration(a.divisions),
    path: a.path.slice(0, depth),
    divisions: a.divisions.slice(0, depth)
  }
} */

/*

  static f<T>(source: NestedRhythm<T>, target: NestedRhythm<T>, offset = 0) {
    let targetEvents = Rhythm.flatten(target);
    const pulses = targetEvents.map(e => e.divisions[1] || 1);
    source = Rhythm.addPulse(source, pulses[0], offset);

    const targetLength = source.length;
    if (targetLength >= target.length) {
      const fill = targetLength - target.length;
      target = target.concat(Array(fill).fill(0));
    }
    targetEvents = Rhythm.flatten(target);
    const sourceEvents = Rhythm.flatten(source)
      .map(event => ({ ...event, divisions: [target.length].concat(event.divisions.slice(1)) }))
      .filter(event => !!event.value || !targetEvents.find(e => Rhythm.haveSameSlot(e, event)))
      .map(event => ({ ...event, path: Rhythm.overflow(event.path, event.divisions) }));
    return Rhythm.nest(targetEvents.concat(sourceEvents));
  }

  static merge<T>(source: NestedRhythm<T>, target: NestedRhythm<T>, path = [0]) {
    const targetLength = source.length + path[0];
    if (targetLength >= target.length) {
      const fill = targetLength - target.length;
      target = target.concat(Array(fill).fill(0));
    }
    const targetEvents = Rhythm.flatten(target);
    const sourceEvents = Rhythm.flatten(source)
      .map(event => ({ ...event, divisions: [target.length].concat(event.divisions.slice(1)) }))
      .filter(event => !!event.value || !targetEvents.find(e => Rhythm.haveSameSlot(e, event)))
      .map(event => ({ ...event, path: Rhythm.addPaths(path, event.path, event.divisions) }));

    return Rhythm.nest(targetEvents.concat(sourceEvents));
  }
  */
},{"./Fractions":"../src/Fractions.ts","./Music":"../src/Music.ts"}],"../src/Music.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Rhythm_1 = require("./Rhythm");

exports.params = {
  monophony: 'm',
  polyphony: 'p',
  time: 'time',
  duration: 'duration',
  velocity: 'v'
};

function toObject(music, param) {
  if (param === void 0) {
    param = exports.params['monophony'];
  }

  var _a;

  if (_typeof(music) !== 'object' || Array.isArray(music)) {
    return _a = {}, _a[param] = music, _a;
  }

  return music;
}

exports.toObject = toObject;

function toArray(array) {
  if (!Array.isArray(array)) {
    return [array];
  }

  return array;
}

exports.toArray = toArray;

function unify(music) {
  var o = toObject(music);

  if (o[exports.params.monophony]) {
    o[exports.params.monophony] = toArray(o[exports.params.monophony]);
  }

  if (o[exports.params.polyphony]) {
    o[exports.params.polyphony] = toArray(o[exports.params.polyphony]);
  }

  return o;
}

exports.unify = unify;

function render2(music, transform) {
  var length = eventDuration(music);
  /* const length =
    typeof music === 'object' && !Array.isArray(music)
      ? music['duration'] || 1
      : 1; */
  // The top level duration is special: it has no relational use => only one element at top
  // => find way to use array notation with top level duration

  var flat = flat2(music, {}, transform);
  var p = flat.map(calculate2(length, false))
  /* .map(e => {
  const offset = Math.random() * error;
  return {
  ...e,
  time: e.time + offset,
  duration: e.duration - offset,
  velocity: e.velocity - velocityError * Math.random(),
  }
  }) */
  ;
  var seconds = music['seconds'] || length; // ||length;

  return {
    seconds: seconds,
    p: p
  };
}

exports.render2 = render2;

function calculate2(totalLength, verbose) {
  if (totalLength === void 0) {
    totalLength = 1;
  }

  if (verbose === void 0) {
    verbose = false;
  }

  return function (e) {
    var path = e.path,
        m = e.m,
        length = e.length,
        velocity = e.velocity;
    length = length || 1;
    return __assign({}, e, {
      m: m
    }, verbose ? e : {}, {
      time: Rhythm_1.Rhythm.time(path, totalLength),
      velocity: velocity,
      duration: Rhythm_1.Rhythm.duration(path, totalLength) * length
    });
  };
}

exports.calculate2 = calculate2;

function isSameSlot(pathsA, pathsB) {
  if (!pathsA || !pathsB) {
    return false;
  }

  var slotA = pathsA.map(function (p) {
    return p.join('.');
  }).join('-');
  var slotB = pathsB.map(function (p) {
    return p.join('.');
  }).join('-');
  return slotA === slotB;
}

exports.isSameSlot = isSameSlot;

function eventDuration(e, standard) {
  if (standard === void 0) {
    standard = 1;
  }

  if (_typeof(e) !== 'object') {
    return standard;
  }

  if (Array.isArray(e.duration)) {
    // TBD: fix implement proper duration array notation + more
    // TBD: add possibility to pass duration further down
    // TBD: use elvis operator
    return (// TBD; dont use length => use durations!! 
      e.duration[0] * ((e[exports.params.monophony] || []).length || 1) //e[params.polyphony].length

    );
  }

  return e.duration || standard;
}

exports.eventDuration = eventDuration;

function flat2(music, props, transform) {
  if (props === void 0) {
    props = {};
  }

  var block = unify(music);

  if (transform) {
    var transformed = transform({
      block: block,
      props: props
    });
    block = transformed.block;
    props = transformed.props;
  } // TBD find way to use array duration notation with root of object
  // drill props


  props = __assign({}, props, {
    length: (block.length || 1) * (props.length || 1),
    velocity: (props.velocity === undefined ? 1 : props.velocity) * (block.velocity === undefined ? 1 : block.velocity),
    instrument: block['instrument'] || props.instrument
  }); // TBD remember which velocity was on which level? maybe map simplePath:velocity, same for length
  // those props are merged into the rendered events / blocks (together with path)

  var eventProps = {
    velocity: props.velocity,
    instrument: props.instrument,
    length: props.length
  };
  var m = block[exports.params.monophony] || [];
  var p = block[exports.params.polyphony] || [];
  var mDuration = m.reduce(function (total, e) {
    return total + eventDuration(e);
  }, 0);
  var pDuration = p.reduce(function (max, e) {
    return Math.max(max, eventDuration(e));
  }, 0); // const pDuration = /* block.duration || */ 1;

  var allEvents = m.concat(p);
  var stack = allEvents.reduce(function (state, event, i) {
    var _a;

    var isPoly = p.includes(event);
    var eDuration = eventDuration(event); // remember: dont drill path here

    var path = (props.path || []).concat([[isPoly ? event.time || 0 : state.time + (event.time || 0), isPoly ? pDuration : mDuration, eDuration, i]]);
    return __assign({}, state, {
      time: state.time + eDuration,
      events: state.events.concat(_typeof(event) === 'object' // is object? => go deeper, is primitve => stop
      ? flat2(event, __assign({}, props, {
        path: path
      }), transform) : [__assign((_a = {}, _a[exports.params.monophony] = event, _a), eventProps, {
        path: path
      })])
    });
  }, {
    events: [],
    time: 0,
    duration: 0
  });

  if (props.path) {
    stack.events.push(__assign({
      block: '*',
      path: props.path
    }, eventProps));
  }

  return (props.events || []).concat(stack.events);
}

exports.flat2 = flat2;
},{"./Rhythm":"../src/Rhythm.ts"}],"tunes/swimming.yml":[function(require,module,exports) {
module.exports = {
  name: "Swimming",
  composer: "Koji Kondo",
  duration: 51,
  p: [{
    instrument: "synth",
    velocity: 0.5,
    m: ["*3", "A5 . F5*2 C5 . D5*2 F5 . F5", "C5*2 F5 . F5*2 C6 . A5 . G5", "A5 . F5*2 C5 . D5*2 F5 . F5", "[[C5*2 F5] [Bb5 A5 G5] F5*2]", "A5 . F5*2 C5 . D5*2 F5 . F5", "C5*2 F5 . F5*2 C6 . A5 . G5", "A5 . F5*2 C5 . D5*2 F5 . F5", "[C5*2 F5] [Bb5 A5 G5] F5*2", "A5 . F5*2 C5 . A5 . F5", "Ab5 . F5*2 Ab5 . G5*2", "A5 . F5*2 C5 . A5 . F5", "Ab5 . F5*2 C5 . C6*2", "A5 . F5*2 C5 . D5*2 F5 . F5", "[C5*2 F5] [Bb5 A5 G5] F5*2"]
  }, {
    instrument: "synth",
    velocity: 1,
    m: [["F4,Bb4,D5", [{
      m: "D4,G4,Bb4",
      duration: 2
    }, "Bb3,D4,F4"], [{
      duration: 2,
      m: "G3,C4,E4"
    }, "Ab3,F4 A3,Gb4"], "Bb3,E4,G4"], "r F3,A3,C3 F3,A3,C3 r F3,A3,C3 F3,A3,C3 r F3,Bb3,D3 F3,Bb3,D3 r F3,Bb3,Db3 F3,Bb3,Db3", "r F3,A3,C3 F3,A3,C3 r F3,A3,C3 F3,A3,C3 r F3,Bb3,D3 F3,Bb3,D3 r F3,B3,D3 F3,B3,D3", "r F3,A3,C3 F3,A3,C3 r F3,A3,C3 F3,A3,C3 r F3,Bb3,D3 F3,Bb3,D3 r F3,B3,D3 F3,B3,D3", "r A3,C4,E4 A3,C4,E4 r Ab3,C4,Eb4 Ab3,C4,Eb4 r F3,Bb3,D3 F3,Bb3,D3 r G3,C4,E4 A3,C4,E4", "r F3,A3,C4 F3,A3,C4 r F3,A3,C4 F3,A3,C4 r F3,Bb3,D3 F3,Bb3,D3 r F3,B3,D3 F3,B3,D3", "r F3,Bb3,D4 F3,Bb3,D4 r F3,Bb3,C4 F3,Bb3,C4 r F3,A3,C4 F3,A3,C4 r F3,A3,C4 F3,A3,C4", "r F3,A3,C3 F3,A3,C3 r F3,A3,C3 F3,A3,C3 r F3,Bb3,D3 F3,Bb3,D3 r F3,B3,D3 F3,B3,D3", "r A3,C4,E4 A3,C4,E4 r Ab3,C4,Eb4 Ab3,C4,Eb4 r F3,Bb3,D3 F3,Bb3,D3 r G3,C4,E4 A3,C4,E4", "r F3,A3,C3 F3,A3,C3 r F3,A3,C3 F3,A3,C3 r F3,Bb3,D3 F3,Bb3,D3 r F3,B3,D3 F3,B3,D3", "r F3,Bb3,D4 F3,Bb3,D4 r F3,Bb3,C4 F3,Bb3,C4 r F3,A3,C4 F3,A3,C4 r F3,A3,C4 F3,A3,C4", "r Bb3,D3,F4 Bb3,D3,F4 r Bb3,D3,F4 Bb3,D3,F4 r A3,C4,F4 A3,C4,F4 r A3,C4,F4 A3,C4,F4", "r Ab3,B3,F4 Ab3,B3,F4 r Ab3,B3,F4 Ab3,B3,F4 r G3,Bb3,F4 G3,Bb3,F4 r G3,Bb3,E4 G3,Bb3,E4", "r Bb3,D3,F4 Bb3,D3,F4 r Bb3,D3,F4 Bb3,D3,F4 r A3,C4,F4 A3,C4,F4 r A3,C4,F4 A3,C4,F4", "r Ab3,B3,F4 Ab3,B3,F4 r Ab3,B3,F4 Ab3,B3,F4 r G3,Bb3,F4 G3,Bb3,F4 r G3,Bb3,E4 G3,Bb3,E4", "r F3,A3,C3 F3,A3,C3 r F3,A3,C3 F3,A3,C3 r F3,Bb3,D3 F3,Bb3,D3 r F3,B3,D3 F3,B3,D3", "r F3,Bb3,D4 F3,Bb3,D4 r F3,Bb3,C4 F3,Bb3,C4 r F3,A3,C4 F3,A3,C4 r F3,A3,C4 F3,A3,C4"]
  }, {
    instrument: "synth",
    velocity: 0.8,
    m: ["G3 G3 C3 E3", "F2 D2 G2 C2", "F2 D2 G2 C2", "F2 A2 Bb2 B2", "A2 Ab2 G2 C2", "F2 A2 Bb2 B2", "G2 C2 F2 F2", "F2 A2 Bb2 B2", "A2 Ab2 G2 C2", "F2 A2 Bb2 B2", "G2 C2 F2 F2", "Bb2 Bb2 A2 A2", "[Ab2 Ab2 G2 [C2 D2 E2]]", "Bb2 Bb2 A2 A2", "[Ab2 Ab2 G2 [C2 D2 E2]]", "F2 A2 Bb2 B2", "G2 C2 F2 F2"]
  }],
  symbols: {
    m: [" | ", " . ", " "],
    p: [","],
    hierarchy: ["m", "p"],
    length: "_",
    duration: "*",
    rest: "r"
  }
};
},{}],"tunes/cantaloupe-island.json":[function(require,module,exports) {
module.exports = {
  "name": "Cataloupe Island",
  "duration": 32,
  "p": [{
    "name": "melody",
    "instrument": "synth",
    "duration": [1],
    "m": ["", "", "", "///F4 F4", "||Ab4/Bb4 |Bb4_2.5", "|/Ab4 |Bb4/C5 |Eb4/F4", "", "///F4 F4", "||Ab4/Bb4 |Bb4_2.5", "|/Ab4 |Bb4/Cb5 |Eb4/F4", "", ["", ["C5/Eb5 |C5/Eb5 "]], [["F4 / F4_6"], ""], ["", ["C5/Eb5 |C5/Eb5 "]], [["F4 / F4_6"], ""], "///F5 F5"]
  }, {
    "name": "bass",
    "instrument": "harp",
    "duration": [1],
    "m": ["F2_1.5/ C3_3//Eb3 F3", "F2_1.5/ C3_3//Eb3 F3", "F2_1.5/ C3_3//Eb3 F3", "F2_1.5/ C3_3//Eb3 F3", "F2_1.5/ C3_3//Eb3 F3", "F2_1.5/ C3_3//Eb3 F3", "F2_1.5/ C3_3//Eb3 F3", "F2_1.5/ C3_3//Eb3 F3", "Db2_1.5/ Ab2_3//B2 Db3", "Db2_1.5/ Ab2_3//B2 Db3", "Db2_1.5/ Ab2_3//B2 Db3", "Db2_1.5/ Ab2_3//B2 Db3", ["F2,C3,D3 ", ["", {
      "m": ["F2,C3,D3"],
      "length": 3
    }], "", ""], ["F2,C3,D3 ", ["", {
      "m": ["F2,C3,D3"],
      "length": 3
    }], "", ""], ["F2,C3,D3 ", ["", {
      "m": ["F2,C3,D3"],
      "length": 3
    }], "", ""], ["F2,C3,D3 ", ["", {
      "m": ["F2,C3,D3"],
      "length": 3
    }], "", ""]]
  }, {
    "name": "chords",
    "instrument": "piano",
    "duration": [1],
    "m": [" Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,C4/Bb3,D4 /C4,Eb4/Bb3,D4 Ab3,C4", " Ab3,B3/Bb3,Db4 /B3,Eb4/Bb3,Db4 Ab3,B3", " Ab3,B3/Bb3,Db4 /B3,Eb4/Bb3,Db4 Ab3,B3", " Ab3,B3/Bb3,Db4 /B3,Eb4/Bb3,Db4 Ab3,B3", " Ab3,B3/Bb3,Db4 |", ["G3,C4,D4 ", ["", {
      "m": ["G3,C4,D4"],
      "length": 3
    }], "", ""], ["G3,C4,D4 ", ["", {
      "m": ["G3,C4,D4"],
      "length": 3
    }], "", ""], ["G3,C4,D4 ", ["", {
      "m": ["G3,C4,D4"],
      "length": 3
    }], "", ""], ["G3,C4,D4 ", ["", {
      "m": ["G3,C4,D4"],
      "length": 3
    }], "", ""]]
  }],
  "symbols": {
    "m": ["|", "/", " "],
    "p": [","],
    "hierarchy": ["m", "p"],
    "length": "_",
    "duration": "*"
  }
};
},{}],"tunes/star-world.json":[function(require,module,exports) {
module.exports = {
  "piece": "Star World",
  "composer": "Koji Kondo",
  "duration": 12,
  "p": [{
    "instrument": "piano",
    "p": [[["C5 /C5 /C5 /D4 ", "C5 |D4 /B4", "/B4 /B4 /C4 ", "B4 /A4 /Bb4 /B4 "], ["C5 /C5 /C5 /D4 ", "C5 |D4 /B4", "/B4 /B4 /C4 ", "B4 /A4 /Bb4 /B4 "], ["C5 /C5 /C5 /D4 ", "C5 |D4 /B4", "/B4 /B4 /B4 ", "B4 /"]], [["A4 /A4 |A4 /", "A4 | /G4", "/G4 /G4 /", "G4 /|"], ["A4 /A4 |A4 /", "A4 | /G4", "/G4 /G4 /", "G4 /|"], ["A4 /A4 |A4 /", "A4 | /G4", "/G4 /G4 /G4 ", "G4 /"]], [["F4 /F4 |F4 /", "F4 | /E4", "/E4 /E4 /", "E4 /|"], ["F4 /F4 |F4 /", "F4 | /E4", "/E4 /E4 /", "E4 /|"], ["F4 /F4 |F4 /", "F4 | /E4", "/E4 /E4 /E4 ", "E4 /"]]]
  }, {
    "voice": "bass",
    "instrument": "harp",
    "m": [["D2|/A2", "D3|/A2", "C2|/G2", "C3 /C3 |G2"], ["D2|/A2", "D3|/A2", "C2|/G2", "C3 /C3 |G2"], ["D2|/A2", "D3|/A2", "C2 /C2 /C2 /C2 ", "C2|/G2"]]
  }],
  "symbols": {
    "m": ["|", "/", " "],
    "p": [","],
    "hierarchy": ["m", "p"],
    "length": "_",
    "duration": "*"
  }
};
},{}],"tunes/entchen-nested.json":[function(require,module,exports) {
module.exports = {
  "duration": 10,
  "m": [["C3", "D3", "E3", "F3"], ["G3", "G3"], ["A3", "A3", "A3", "A3"], ["G3"], ["A3", "A3", "A3", "A3"], ["G3"], ["F3", "F3", "F3", "F3"], ["E3", "E3"], ["D3", "D3", "D3", "D3"], ["C3"]]
};
},{}],"tunes/entchen-absolute.json":[function(require,module,exports) {
module.exports = {
  "seconds": 10,
  "p": [{
    "m": "C3",
    "time": 0,
    "duration": 0.25
  }, {
    "m": "D3",
    "time": 0.25,
    "duration": 0.25
  }, {
    "m": "E3",
    "time": 0.5,
    "duration": 0.25
  }, {
    "m": "F3",
    "time": 0.75,
    "duration": 0.25
  }, {
    "m": "G3",
    "time": 1,
    "duration": 0.5
  }, {
    "m": "G3",
    "time": 1.5,
    "duration": 0.5
  }, {
    "m": "A3",
    "time": 2,
    "duration": 0.25
  }, {
    "m": "A3",
    "time": 2.25,
    "duration": 0.25
  }, {
    "m": "A3",
    "time": 2.5,
    "duration": 0.25
  }, {
    "m": "A3",
    "time": 2.75,
    "duration": 0.25
  }, {
    "m": "G3",
    "time": 3,
    "duration": 1
  }, {
    "m": "A3",
    "time": 4,
    "duration": 0.25
  }, {
    "m": "A3",
    "time": 4.25,
    "duration": 0.25
  }, {
    "m": "A3",
    "time": 4.5,
    "duration": 0.25
  }, {
    "m": "A3",
    "time": 4.75,
    "duration": 0.25
  }, {
    "m": "G3",
    "time": 5,
    "duration": 1
  }, {
    "m": "F3",
    "time": 6,
    "duration": 0.25
  }, {
    "m": "F3",
    "time": 6.25,
    "duration": 0.25
  }, {
    "m": "F3",
    "time": 6.5,
    "duration": 0.25
  }, {
    "m": "F3",
    "time": 6.75,
    "duration": 0.25
  }, {
    "m": "E3",
    "time": 7,
    "duration": 0.5
  }, {
    "m": "E3",
    "time": 7.5,
    "duration": 0.5
  }, {
    "m": "D3",
    "time": 8,
    "duration": 0.25
  }, {
    "m": "D3",
    "time": 8.25,
    "duration": 0.25
  }, {
    "m": "D3",
    "time": 8.5,
    "duration": 0.25
  }, {
    "m": "D3",
    "time": 8.75,
    "duration": 0.25
  }, {
    "m": "C3",
    "time": 9,
    "duration": 1
  }]
};
},{}],"tunes/entchen-harmonized.yml":[function(require,module,exports) {
module.exports = {
  instrument: "piano",
  duration: 10,
  p: [{
    transpose: 12,
    m: ["C3 D3 E3 F3", "G3 G3", "A3 A3 A3 A3", "G3", "A3 A3 A3 A3", "G3", "F3 F3 F3 F3", "E3 E3", "D3 D3 D3 D3", "C3"]
  }, ["C3,E3,G3", "G3,B3,D3", "F3,A3,C3", "C3,E3,G3", "F3,A3,C3", "C3,E3,G3", "F3,A3,C3", "C3,E3,G3", "G3,B3,D3", "C3,E3,G3"]]
};
},{}],"tunes/time-of-the-falling-rain.json":[function(require,module,exports) {
module.exports = {
  "name": "Time of the Falling Rain",
  "composer": "Koji Kondo",
  "duration": 8,
  "p": [{
    "name": "chords",
    "velocity": 0.6,
    "duration": [1],
    "m": [["", {
      "duration": 3,
      "p": ["C3", "D3", "G3"]
    }], ["", {
      "duration": 3,
      "p": ["Db3", "Eb3", "Ab3"]
    }], ["", {
      "duration": 3,
      "p": ["D3", "E3", "A3"]
    }], ["", {
      "duration": 3,
      "p": ["Eb3", "F3", "Bb3"]
    }]]
  }, {
    "name": "bass",
    "duration": [1],
    "m": [[["C1", "G1"], {
      "duration": 3,
      "m": ["C2"]
    }], [["C1", "G1"], {
      "duration": 3,
      "m": ["C2"]
    }], [["C1", "G1"], {
      "duration": 3,
      "m": ["C2"]
    }], [["C1", "G1"], {
      "duration": 3,
      "m": ["C2"]
    }]]
  }]
};
},{}],"tunes/zelda-rescue.json":[function(require,module,exports) {
module.exports = {
  "name": "Princess Zeldas Rescue",
  "composer": "Koji Kondo",
  "duration": 48,
  "p": [{
    "instrument": "sawtooth",
    "duration": [1],
    "velocity": 0.9,
    "m": ["B3*2 D4", "A3*2|G3 A3", "B3*2 D4", "A3", "B3*2 D4", "A4*2 G4", "D4*2|C4 B3", "A3", "B3*2 D4", "A3*2|G3 A3", "B3*2 D4", "A3", "B3*2 D4", "A4*2 G4", "D5_2", "", "D5*2|C5 B4", "C5 B4|G4*2", "C5*2|B4 A4", "B4 A4|E4*2", "D5*2|C5 B4", "C5 B4/G4/C5", "G5_1.66", "//B3"]
  }, {
    "instrument": "synth",
    "velocity": 0.6,
    "duration": [1],
    "m": ["C2 G2|E3*2", "C2 G2|F#3*2", "C2 G2|E3*2", "C2 G2|F#3*2", "B1 D3|G3*2", "Bb1 Db3|G3*2", "A1 C3|G3*2", "D2 C3|F#3*2", "C2 G2|E3*2", "C2 G2|F#3*2", "C2 G2|E3*2", "C2 G2|F#3*2", "B1 D3|G3*2", "Bb1 Db3|G3*2", "A1 C3|G3*2", "D2 C3|F#3*2", "F2 C3|E3*2", "E2 B2|D3*2", "D2 A2|C3*2", "C2 G2|B2*2", "F2 C3|E3*2", "E2 B2|D3*2", "Eb2 Bb2|Db3*2", "D2 A2/C3/F3,G2"]
  }],
  "symbols": {
    "m": ["|", "/", " "],
    "p": [","],
    "hierarchy": ["m", "p"],
    "length": "_",
    "duration": "*"
  }
};
},{}],"tunes/zelda-rescue-intro.json":[function(require,module,exports) {
module.exports = {
  "name": "Princess Zeldas Rescue",
  "composer": "Koji Kondo",
  "duration": 36,
  "p": [{
    "name": "violin",
    "duration": [1],
    "m": [[["G3", "A3", "B3"], {
      "p": [["C4", "D4", "E4", "F4"], ["E3", "F3", "G3", "A3"]]
    }], [{
      "p": [["G4", "F4", "C5", "Bb4"], ["C4", "Bb3", "F4", "Eb4"], ["Eb3", "D3", "Ab3", "G3"]]
    }], [{
      "p": ["F#3", "D4", "B4"]
    }], [{
      "m": ["B3"],
      "duration": 2
    }, "D4"], [{
      "m": ["A3"],
      "duration": 2
    }, ["G3", "A3"]], [{
      "m": ["B3"],
      "duration": 2
    }, "D4"], ["A3"], [{
      "m": ["B3"],
      "duration": 2
    }, "D4"], [{
      "m": ["A4"],
      "duration": 2
    }, "G4"], [{
      "m": ["D4"],
      "duration": 2
    }, ["C4", "B3"]], ["A3"], [{
      "m": ["B3"],
      "duration": 2
    }, "D4"], [{
      "m": ["A3"],
      "duration": 2
    }, ["G3", "A3"]], [{
      "m": ["B3"],
      "duration": 2
    }, "D4"], ["A3"], [{
      "m": ["B3"],
      "duration": 2
    }, "D4"], [{
      "m": ["A4"],
      "duration": 2
    }, "G4"], ["D5"], ["D5"], [{
      "m": "D4",
      "duration": 2
    }, ["C4", "B3"]], [["C4", "B3"], {
      "m": "G3",
      "duration": 2
    }], [{
      "m": "C4",
      "duration": 2
    }, ["B3", "A3"]], [["B3", "A3"], {
      "m": "E3",
      "duration": 2
    }], [{
      "m": "D4",
      "duration": 2
    }, ["C4", "B3"]], [["C4", "B3"], "G3", "C4"], ["G4"], ["G4"]]
  }, {
    "name": "bass",
    "duration": [1],
    "m": [["", ["G2", "A2", "B2", "C3"]], ["Ab2", "Bb2"], ["G2"], [["C2", "G2"], {
      "duration": 2,
      "m": ["E3"]
    }], [["C2", "G2"], {
      "duration": 2,
      "m": ["F#3"]
    }], [["C2", "G2"], {
      "duration": 2,
      "m": ["E3"]
    }], [["C2", "G2"], {
      "duration": 2,
      "m": ["F#3"]
    }], [["B1", "D3"], {
      "duration": 2,
      "m": ["G3"]
    }], [["Bb1", "Db3"], {
      "duration": 2,
      "m": ["G3"]
    }], [["A1", "C3"], {
      "duration": 2,
      "m": ["G3"]
    }], [["D2", "C3"], {
      "duration": 2,
      "m": ["F#3"]
    }], [["C2", "G2"], {
      "duration": 2,
      "m": ["E3"]
    }], [["C2", "G2"], {
      "duration": 2,
      "m": ["F#3"]
    }], [["C2", "G2"], {
      "duration": 2,
      "m": ["E3"]
    }], [["C2", "G2"], {
      "duration": 2,
      "m": ["F#3"]
    }], [["B1", "D3"], {
      "duration": 2,
      "m": ["G3"]
    }], [["Bb1", "Db3"], {
      "duration": 2,
      "m": ["G3"]
    }], [["A1", "C3"], {
      "duration": 2,
      "m": ["G3"]
    }], [["D2", "C3"], {
      "duration": 2,
      "m": ["F#3"]
    }]]
  }]
};
},{}],"tunes/zeldas-rescue-brackets.yaml":[function(require,module,exports) {
module.exports = {
  name: "Princess Zeldas Rescue",
  composer: "Koji Kondo",
  duration: 48,
  instrument: "harp",
  p: ["[B3*2 D4] [A3*2 [G3 A3]] [B3*2 D4] [A3] [B3*2 D4] [A4*2 G4] [D4*2 [C4 B3]] [A3] [B3*2 D4] [A3*2 [G3 A3]] [B3*2 D4] [A3] [B3*2 D4] [A4*2 G4] D5*2 [D5*2 [C5 B4]] [[C5 B4] G4*2] [C5*2 [B4 A4]] [[B4 A4] E4*2] [D5*2 [C5 B4]]  [[C5 B4] G4 C5] [G5_1.6] [r r B3]", "[[C2 G2] E3*2] [[C2 G2] F#3*2] [[C2 G2] E3*2] [[C2 G2] F#3*2] [[B1 D3] G3*2] [[Bb1 Db3] G3*2] [[A1 C3] G3*2] [[D2 C3] F#3*2] [[C2 G2] E3*2] [[C2 G2] F#3*2] [[C2 G2] E3*2] [[C2 G2] F#3*2] [[B1 D3] G3*2] [[Bb1 Db3] G3*2] [[A1 C3] G3*2] [[D2 C3] F#3*2] [[F2 C3] E3*2] [[E2 B2] D3*2] [[D2 A2] C3*2] [[C2 G2] B2*2] [[F2 C3] E3*2] [[E2 B2] D3*2] [[Eb2 Bb2] Db3*2] [[D2 A2] C3 F3,G2]"]
};
},{}],"tunes/dub1.json":[function(require,module,exports) {
module.exports = {
  "duration": 3,
  "p": [{
    "velocity": 0.7,
    "instrument": "synth",
    "m": "C3*3 . C3_.5 C3_.5 | F2_.5 F2_.5 . F2"
  }, {
    "velocity": 0.9,
    "instrument": "harp",
    "m": "~ G3,Eb4 ~ Bb3,Eb4 . ~ Ab3,Eb4 ~ Eb4,Bb3"
  }, {
    "velocity": 0.7,
    "instrument": "synth",
    "m": "G4 Ab4"
  }, {
    "instrument": "drums",
    "p": ["bd | bd bd ~ ~ . ~", "~ hh ~ hh | ~ hh . ~ ~ hh hh", "~ ~ sd ~ | ~ ~ sd ~"]
  }],
  "symbols": {
    "m": [" | ", " . ", " "],
    "p": [","],
    "hierarchy": ["m", "p"],
    "length": "_",
    "duration": "*",
    "rest": "~",
    "trim": false
  }
};
},{}],"tunes/riddims/slengteng.json":[function(require,module,exports) {
module.exports = {
  "duration": 3,
  "p": [{
    "velocity": 0.7,
    "instrument": "square",
    "m": "Db2 D2 D2 D2 . Db2 D2 D2 D2 . Db2 D2 D2 D2 . G2_.5 F#2_.5"
  }, {
    "velocity": 0.9,
    "instrument": "synth",
    "m": "~ ~ D3,F#3,A3 ~ . ~ ~ D3,F#3,A3 ~ . ~ ~ D3,F#3,A3 ~ . ~ ~ C3,E3,G3 ~"
  }, {
    "instrument": "drums",
    "p": ["bd ~ ~ bd . bd", "hh hh . hh hh . hh hh . hh hh", "~ ~ sd ~ | ~ ~ sd ~"]
  }],
  "symbols": {
    "m": [" | ", " . ", " "],
    "p": [","],
    "hierarchy": ["m", "p"],
    "length": "_",
    "duration": "*",
    "rest": "~",
    "trim": false
  }
};
},{}],"tunes/edgyedgar.yml":[function(require,module,exports) {
module.exports = {
  instrument: "piano",
  duration: 32,
  chords: [["D6", "G7", "EbM7", "Eb7#11"], ["D7", "G7", "F#M7", "F7b9"], ["Cm7", "F7", "B7sus", "E7"], [["Em7", "A7b9"], ["DM7", "B7#11"], ["Em7", "A7b9"], "DM7"]]
};
},{}],"tunes/riddims/realrock.json":[function(require,module,exports) {
module.exports = {
  "duration": 3,
  "p": [{
    "velocity": 0.7,
    "instrument": "synth",
    "m": " ~ | ~ ~ F4 . Bb4*2 Ab4 | ~ | ~"
  }, {
    "velocity": 0.7,
    "instrument": "synth",
    "m": " ~ . Bb1 ~ ~ Bb1 . F2_.9 F2_.9 F2_.9 F2_.9 . F2_.9 F2_.9 F2_.9 F2_.9"
  }, {
    "velocity": 0.9,
    "instrument": "synth",
    "m": "~ ~ F3,Bb3,D3 ~ . ~ ~ F3,Bb3,D3 ~ . ~ ~ F3,Ab3,C3 ~ . ~ ~ F3,Ab3,C3 ~"
  }, {
    "instrument": "drums",
    "p": ["bd . ~", "hh hh . hh hh . hh hh . hh hh", "~ ~ sd ~ | ~ ~ sd ~"]
  }],
  "symbols": {
    "m": [" | ", " . ", " "],
    "p": [","],
    "hierarchy": ["m", "p"],
    "length": "_",
    "duration": "*",
    "rest": "~",
    "trim": false
  }
};
},{}],"tunes/tidal.json":[function(require,module,exports) {
module.exports = {
  "instrument": "tidal",
  "p": ["bd sd", "hh hh hh hh"],
  "symbols": {
    "m": [" | ", " . ", " "],
    "p": [","],
    "hierarchy": ["m", "p"],
    "length": "_",
    "duration": "/",
    "rest": "~",
    "trim": false
  }
};
},{}],"tunes/examples.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* import swimming from './swimming.json'; */

var swimming_yml_1 = __importDefault(require("./swimming.yml"));

var cantaloupe_island_json_1 = __importDefault(require("./cantaloupe-island.json"));

var star_world_json_1 = __importDefault(require("./star-world.json"));

var entchen_nested_json_1 = __importDefault(require("./entchen-nested.json"));

var entchen_absolute_json_1 = __importDefault(require("./entchen-absolute.json"));

var entchen_harmonized_yml_1 = __importDefault(require("./entchen-harmonized.yml"));

var time_of_the_falling_rain_json_1 = __importDefault(require("./time-of-the-falling-rain.json"));

var zelda_rescue_json_1 = __importDefault(require("./zelda-rescue.json"));

var zelda_rescue_intro_json_1 = __importDefault(require("./zelda-rescue-intro.json"));

var zeldas_rescue_brackets_yaml_1 = __importDefault(require("./zeldas-rescue-brackets.yaml"));

var dub1_json_1 = __importDefault(require("./dub1.json"));

var slengteng_json_1 = __importDefault(require("./riddims/slengteng.json"));

var edgyedgar_yml_1 = __importDefault(require("./edgyedgar.yml"));

var realrock_json_1 = __importDefault(require("./riddims/realrock.json"));

var tidal_json_1 = __importDefault(require("./tidal.json"));

exports.examples = {
  edgyEdgar: edgyedgar_yml_1.default,
  hometown: {
    "let": {
      "a": {
        "p": ["3,5"]
      }
    },
    "duration": [12],
    "instrument": "synth",
    "scale": "Eb3 lydian",
    "p": ["-7 -6 -5 -4 -5 -6 -7 -8", "[10*2 8 10] [11 [11 12 11] 10 9] [10*6 11 10] [9*2 11 9] [9] [7 9] 6 7", {
      "assign": {
        "transpose": [0, 1, 2, 3, 2, 1, 0, -1]
      },
      "m": "#a #a #a #a #a #a #a #a"
    }]
  },
  seasaw: {
    "let": {
      "a": {
        "p": ["3*4,5*3"],
        "m": "~ 10 8 5"
      }
    },
    "duration": 14,
    "instrument": "piano",
    "scale": "Eb3 lydian",
    "assign": {
      "transpose": [0, 1, 2, 3, 2, 1, 0, -1]
    },
    "p": "-7 -6 -5 -4 -5 -6 -7 -8",
    "m": ["#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a"]
  },
  chords: {
    "instrument": "piano",
    "duration": 4,
    "chords": ["CM7", ["Dm7", "G7"]],
    "m": "C2 [D2 G2]"
  },
  chordsB: {
    "instrument": "piano",
    "duration": 4,
    "chords": [{
      "chords": ["CM7"],
      "duration": 2
    }, "Dm7", "G7"],
    "m": "C2*2 D2 G2"
  },
  bebopChords2: {
    "let": {
      "a1": "A2,G3,C4,E4,G4",
      "a2": "A2,G#3,C4,E4,G#4",
      "a3": "A2,G3,C4,E4,A4",
      "a4": "Ab2,F#3,C4,Eb4,B4"
    },
    "instrument": "piano",
    "duration": 4,
    "scale": "Db3 bebop major",
    "m": [["#a2", "#a3", "#a4*2"]]
  },
  bebopChords: {
    "let": {
      "c": "1,5,8,11"
    },
    "instrument": "piano",
    "duration": 16,
    "scale": "Db3 bebop major",
    "m": [{
      "assign": {
        "transpose": [0, 1, 2, 3, 4, 5, 6, 7]
      },
      "m": ["#c", "#c", "#c", "#c", "#c", "#c", "#c", "#c"]
    }, {
      "assign": {
        "transpose": [8, 7, 6, 5, 4, 3, 2, 1]
      },
      "m": ["#c", "#c", "#c", "#c", "#c", "#c", "#c", "#c"]
    }]
  },
  contraryBebop: {
    "let": {
      "up": "1 2 3 4 5 6 7 8",
      "down": "9 8 7 6 5 4 3 2"
    },
    "instrument": "piano",
    "duration": 9,
    "scale": "C3 bebop major",
    "m": [{
      "assign": {
        "transpose": [8, 0]
      },
      "p": ["#up", "#down"]
    }, {
      "assign": {
        "transpose": [8, 0]
      },
      "p": ["#down", "#up"]
    }]
  },
  mirror: {
    "m": "C3 D3 E3 F3 G3 A3 B3 C4",
    "mirror": "C3"
  },
  transpose: {
    "transpose": 12,
    "m": "C3 D3 E3"
  },
  scale: {
    "duration": 2,
    "scale": "C3 major",
    "m": "1 2 3 4 5 6 7 8"
  },
  transposeScale: {
    "duration": 2,
    "scale": "C3 major",
    "transpose": 1,
    "m": "1 2 3 4 5 6 7 8"
  },
  scaleFall: {
    "let": {
      "fall": "8 6 7 5 6 4 5 3 4 2 3 1 2 -1 1*2"
    },
    "duration": 8,
    "instrument": "piano",
    "scale": "C4 mixolydian",
    "assign": {
      "transpose": [0, -2, -4]
    },
    "p": ["#fall", "#fall", "#fall"]
  },
  chordMelody: {
    "duration": 4,
    "instrument": "piano",
    "let": {
      "v": "3,5"
    },
    "scale": "F3 dorian",
    "assign": {
      "transpose": [0, 0, 1, 0, 2, 1, 0]
    },
    "m": "~ #v #v ~ #v*2 #v #v"
  },
  majorsteps: {
    "let": {
      "a": "3,5,8"
    },
    "duration": 12,
    "instrument": "piano",
    "scale": "C major",
    "assign": {
      "transpose": [0, 1, 2, 3, 4, 5, 6, 7]
    },
    "m": ["#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a*3"]
  },
  stepchords: {
    "let": {
      "a": "1,3,5,7"
    },
    "duration": 12,
    "instrument": "piano",
    "scale": "C bebop major",
    "m": [{
      "m": "#a",
      "transpose": 0
    }, {
      "m": "#a",
      "transpose": 1
    }, {
      "m": "#a",
      "transpose": 2
    }, {
      "m": "#a",
      "transpose": 3
    }, {
      "m": "#a",
      "transpose": 4
    }, {
      "m": "#a",
      "transpose": 5
    }, {
      "m": "#a",
      "transpose": 6
    }, {
      "m": "#a",
      "transpose": 7
    }, {
      "m": "#a",
      "transpose": 8,
      "duration": 3
    }]
  },
  stepchordsAssigned: {
    "let": {
      "a": "3,5,8"
    },
    "duration": 13.5,
    "instrument": "piano",
    "scale": "Eb3 major",
    "assign": {
      "transpose": [0, 1, 2, 3, 4, 5, 6, 7]
    },
    "m": ["#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a*2"]
  },
  ragasteps: {
    "let": {
      "a": {
        "p": ["1", "3", "5"],
        "m": ["8"]
      }
    },
    "duration": 18,
    "instrument": "piano",
    "scale": "C3 purvi raga",
    "assign": {
      "transpose": [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    "m": ["#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a", "#a"]
  },
  bruderjakob: {
    "duration": 32,
    "let": {
      "a": "C3 D3 E3 C3",
      "b": "E3 F3 G3*2",
      "c": "G3 A3 . G3 F3 . E3 . C3",
      "d": "C3 G2 C3*2"
    },
    "m": [{
      "p": ["#a #a #b #b #c #c #d #d", "~*2 #a #a #b #b #c #c"]
    }, {
      "p": ["#a #a #b #b #c #c #d #d", "#d #d #a #a #b #b #c #c"]
    }, {
      "p": ["#d #d ~*6"]
    }]
  },
  tidal: tidal_json_1.default,
  realRock: realrock_json_1.default,
  zeldasRescueBrackets: zeldas_rescue_brackets_yaml_1.default,

  /* vanillaDome, */
  zeldasRescue: zelda_rescue_json_1.default,
  slengTeng: slengteng_json_1.default,
  zeldasRescueVerbose: zelda_rescue_intro_json_1.default,
  timeOfTheFallingRain: time_of_the_falling_rain_json_1.default,
  swimming: swimming_yml_1.default,
  cantaloupe: cantaloupe_island_json_1.default,
  starworld: star_world_json_1.default,
  a: 'A4',
  fourth: ['Bb3', 'Eb4'],
  fourthShort: 'Bb3 Eb4',
  major1: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
  major1short: 'C4 D4 E4 F4 G4 A4 B4 C5',
  major4: {
    duration: 4,
    m: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']
  },
  major4short: {
    duration: 4,
    m: 'C4 D4 E4 F4 G4 A4 B4 C5'
  },
  entchen: entchen_nested_json_1.default,
  entchenAbsolute: entchen_absolute_json_1.default,
  entchenHarmonized: entchen_harmonized_yml_1.default,
  assign: {
    "duration": 4,
    "assign": {
      "duration": [1, 2]
    },
    "m": "C2 A2 D2 G2"
  },
  entchenShort: {
    "duration": 10,
    "m": ["C3 D3 E3 F3", "G3 G3", "A3 A3 A3 A3", "G3", "A3 A3 A3 A3", "G3", "F3 F3 F3 F3", "E3 E3", "D3 D3 D3 D3", "C3"]
  },
  entchenSlashes: {
    "duration": 10,
    "m": "C3 D3 E3 F3/G3 G3/A3 A3 A3 A3/G3/A3 A3 A3 A3/G3/F3 F3 F3 F3/E3 E3/D3 D3 D3 D3/C3"
  },
  entchenBrackets: {
    "duration": 10,
    "m": "[C3 D3 E3 F3] [G3 G3] [A3 A3 A3 A3] G3 [A3 A3 A3 A3] G3 [F3 F3 F3 F3] [E3 E3] [D3 D3 D3 D3] C3"
  },
  entchenFeet: {
    "duration": 10,
    "m": "C3 D3 E3 F3 . G3 G3 . A3 A3 A3 A3 . G3 . A3 A3 A3 A3 . G3 . F3 F3 F3 F3 . E3 E3 . D3 D3 D3 D3 . C3"
  },
  bolero: {
    instrument: "tidal",
    duration: 6.75,
    m: [[['ht', 'mt mt mt'], ['ht', 'mt mt mt'], ['ht', 'mt']], [['ht', 'mt mt mt'], ['ht', 'mt mt mt'], ['ht ht ht', 'mt mt mt']]]
  },
  boleroBrackets: {
    instrument: "tidal",
    duration: 6.75,
    m: '[[ht [mt mt mt]] [ht [mt mt mt]] [ht mt]] [[ht [mt mt mt]] [ht [mt mt mt]] [[ht ht ht] [mt mt mt]]]'
  },
  boleroFeet: {
    instrument: "tidal",
    duration: 6.75,
    m: '[ht [mt mt mt]] [ht [mt mt mt]] [ht mt] | [ht [mt mt mt]] [ht [mt mt mt]] [[ht ht ht] [mt mt mt]]'
  },
  boleroFeet2: {
    instrument: "tidal",
    duration: 6.75,
    m: 'ht [mt mt mt] . ht [mt mt mt] . ht mt | ht [mt mt mt] . ht [mt mt mt] . [ht ht ht] [mt mt mt]'
  },
  pumuckel: {
    instrument: "piano",
    duration: 8,
    m: [[{
      m: 'A3',
      duration: 3
    }, 'F#3'], [{
      m: 'A3',
      duration: 3
    }, 'F#3'], ['A3', 'G3', 'G3', 'E3'], ['B3', 'A3', 'A3', 'F#3'], [{
      m: 'A3',
      duration: 3
    }, 'F#3'], [{
      m: 'A3',
      duration: 3
    }, 'F#3'], ['A3', 'G3', 'G3', 'C#3'], [{
      m: 'D3',
      duration: 3
    }, 'F#3']]
  },
  pumuckelShort: {
    instrument: "piano",
    duration: 8,
    m: [['A3*3', 'F#3'], ['A3*3', 'F#3'], ['A3', 'G3', 'G3', 'E3'], ['B3', 'A3', 'A3', 'F#3'], ['A3*3', 'F#3'], ['A3*3', 'F#3'], ['A3', 'G3', 'G3', 'C#3'], ['D3*3', 'F#3']]
  },
  pumuckelBrackets: {
    instrument: "piano",
    duration: 8,
    m: "[A3*3 F#3] [A3*3 F#3] [A3 G3 G3 E3] [B3 A3 A3 F#3] [A3*3 F#3] [A3*3 F#3] [A3 G3 G3 C#3] [D3*3 F#3]"
  },
  funkytown: {
    duration: 4,
    m: [[['C5', ''], ['C5', ''], ['Bb4', ''], ['C5', '']], ['', ['G4', ''], '', ['G4', '']], [['C5', ''], ['F5', ''], ['E5', ''], ['C5', '']], '']
  },
  funkytownShort: {
    duration: 4,
    m: ['C5 /C5 /Bb4 /C5 ', '/G4 |/G4 ', 'C5 /F5 /E5 /C5 ', '']
  },
  funkytownBrackets: {
    duration: 4,
    m: "[[C5 r] [C5 r] [Bb4 r] [C5 r]] [r [G4 r] r [G4 r]] [[C5 r] [F5 r] [E5 r] [C5 r]] r"
  },
  funkytownBracketsFeet1: {
    duration: 4,
    m: "[C5 r] [C5 r] [Bb4 r] [C5 r] . r [G4 r] r [G4 r] . [C5 r] [F5 r] [E5 r] [C5 r] . r"
  },
  funkytownBracketsFeet2: {
    duration: 4,
    m: "C5 r . C5 r . Bb4 r . C5 r | r . G4 r . r . G4 r | C5 r . F5 r . E5 r . C5 r | r"
  },
  funkytownLengths: {
    duration: 4,
    m: [[{
      m: 'C5',
      length: 0.5
    }, {
      m: 'C5',
      length: 0.5
    }, {
      m: 'Bb4',
      length: 0.5
    }, {
      m: 'C5',
      length: 0.5
    }], ['r', {
      m: 'G4',
      length: 0.5
    }, 'r', {
      m: 'G4',
      length: 0.5
    }], [{
      m: 'C5',
      length: 0.5
    }, {
      m: 'F5',
      length: 0.5
    }, {
      m: 'E5',
      length: 0.5
    }, {
      m: 'C5',
      length: 0.5
    }], 'r']
  },
  funkytownLengthsBrackets: {
    duration: 4,
    m: "[C5_.5 C5_.5 Bb4_.5 C5_.5] [r G4_.5 r G4_.5] [C5_.5 F5_.5 E5_.5 C5_.5] r"
  },
  funkytownLengthsFeet: {
    "duration": 4,
    "m": "C5_.5 C5_.5 Bb4_.5 C5_.5 . r G4_.5 r G4_.5 . C5_.5 F5_.5 E5_.5 C5_.5 . r"
  },
  funkytownPoly: {
    duration: 4,
    p: [{
      m: [[['C5', ''], ['C5', ''], ['Bb4', ''], ['C5', '']], ['', ['G4', ''], '', ['G4', '']], [['C5', ''], ['F5', ''], ['E5', ''], ['C5', '']], '']
    }, {
      m: [['C2', 'C3', 'C2', 'C3'], ['C2', 'C3', 'C2', 'C3'], ['C2', 'C3', 'C2', 'C3'], ['C2', 'C3', 'C2', 'C3']]
    }]
  },
  funkytownPolyShort: {
    duration: 4,
    p: ["C5_.5 C5_.5 Bb4_.5 C5_.5 . r G4_.5 r G4_.5 . C5_.5 F5_.5 E5_.5 C5_.5 . r", 'C2 C3 C2 C3 . C2 C3 C2 C3 . C2 C3 C2 C3 . C2 C3 C2 C3']
  },
  funkytownPolyB: {
    duration: 8,
    p: [{
      m: [[{
        p: ['D5', 'B4']
      }, {
        p: ['D5', 'B4']
      }, {
        p: ['D5', 'B4']
      }, {
        p: ['D5', 'B4']
      }], [{
        p: ['C5', 'A4']
      }, {
        p: ['C5', 'A4']
      }, {
        p: ['C5', 'A4']
      }, {
        p: ['C5', 'A4']
      }], [{
        p: ['B4', 'G4']
      }, {
        p: ['B4', 'G4']
      }, {
        p: ['B4', 'G4']
      }, {
        p: ['B4', 'G4']
      }], [{
        p: ['A4', 'F4']
      }, {
        p: ['A4', 'F4']
      }, {
        p: ['A4', 'F4']
      }, {
        p: ['G4', 'D4']
      }], [['G4', ''], ['G4', ''], ['F4', ''], ['G4', '']], ['', ['D4', ''], '', ['D4', '']], [['G4', ''], ['C5', ''], ['B4', ''], ['G4', '']], []]
    }, {
      m: [['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3']]
    }]
  },
  funkytownPolyC: {
    duration: 8,
    p: [{
      m: [['D5,B4', 'D5,B4', 'D5,B4', 'D5,B4'], ['C5,A4', 'C5,A4', 'C5,A4', 'C5,A4'], ['B4,G4', 'B4,G4', 'B4,G4', 'B4,G4'], ['A4,F4', 'A4,F4', 'A4,F4', 'G4,D4'], [['G4', ''], ['G4', ''], ['F4', ''], ['G4', '']], ['', ['D4', ''], '', ['D4', '']], [['G4', ''], ['C5', ''], ['B4', ''], ['G4', '']], []]
    }, {
      m: [['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3'], ['G2', 'G3', 'G2', 'G3']]
    }]
  },
  funkytownPolyCShort: {
    duration: 8,
    p: ['D5,B4 D5,B4 D5,B4 D5,B4 . C5,A4 C5,A4 C5,A4 C5,A4 . B4,G4 B4,G4 B4,G4 B4,G4 . A4,F4 A4,F4 A4,F4 G4,D4 . G4_.5 G4_.5 F4_.5 G4_.5 . r D4_.5 r D4_.5 . G4_.5 C5_.5 B4_.5 G4_.5 . r', 'G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3 . G2 G3 G2 G3']
  },
  triplets: {
    duration: 4,
    p: [{
      voice: 'melody',
      m: [['E4', 'C4', 'E4', 'C5'], ['A4', 'F4', 'G4']]
    }, {
      voice: 'bass',
      m: [['C4', 'G3', 'C4', 'G3'], ['F3', 'C3', 'F3', ['C3', 'G3']]]
    }]
  },
  tripletsShort: {
    duration: 4,
    p: ["E4 C4 E4 C5 | A4 F4 G4", "[C4 G3 C4 G3] [F3 C3 F3 [C3 G3]]"]
  },
  quartuplets: {
    duration: 4,
    p: [{
      voice: 'melody',
      m: [['E4', 'C4', 'E4', 'C5'], ['A4', 'F4', 'G4']]
    }, {
      voice: 'bass',
      m: [['C4', 'G3', 'C4'], ['F3', 'C3', ['F3', 'G3']]]
    }]
  },
  quartupletsShort: {
    "duration": 4,
    "p": ["E4 C4 E4 C5 | A4 F4 G4", "[C4 G3 C4] [F3 C3 [F3 G3]]"]
  },
  timeChange: {
    duration: 3.5,
    p: [{
      voice: 'melody',
      m: [{
        duration: 4,
        m: ['E4', 'C4', 'E4', 'C5']
      }, {
        duration: 3,
        m: ['A4', 'F4', 'G4']
      }]
    }, {
      voice: 'bass',
      m: [{
        duration: 4,
        m: ['C4', 'G3', 'C4', 'G3']
      }, {
        duration: 3,
        m: ['F3', 'C3', ['F3', 'G3']]
      }]
    }]
  },
  timeChangeB: {
    duration: 8.5,
    p: [{
      voice: 'melody',
      m: [{
        duration: 8,
        m: [['E4', 'C4', 'E4', 'C5'], ['A4', 'F4', 'G4', 'D4']]
      }, {
        duration: 9,
        m: [['E4', 'C4', 'E4'], ['A4', 'F4', 'D4'], ['B3', 'G4', 'F4']]
      }]
    }, {
      voice: 'bass',
      m: [{
        duration: 8,
        m: [['C4', 'G3', 'C4', ['G3', 'Gb3']], ['F3', 'C3', 'F3', ['G3', 'B3']]]
      }, {
        duration: 9,
        m: [['C4', 'G3', ['C4', 'G3']], ['F3', 'C3', ['F3', 'G3']], ['G3', 'D3', ['G3', 'B3']]]
      }]
    }]
  },
  timeChangeC: {
    duration: 8.5,
    p: [{
      voice: 'melody',
      m: [{
        duration: [4],
        m: [['E4', 'C4', 'E4', 'C5'], ['A4', 'F4', 'G4', 'D4']]
      }, {
        duration: [3],
        m: [['E4', 'C4', 'E4'], ['A4', 'F4', 'D4'], ['B3', 'G4', 'F4']]
      }]
    }, {
      voice: 'bass',
      m: [{
        duration: [4],
        m: [['C4', 'G3', 'C4', ['G3', 'Gb3']], ['F3', 'C3', 'F3', ['G3', 'B3']]]
      }, {
        duration: [3],
        m: [['C4', 'G3', ['C4', 'G3']], ['F3', 'C3', ['F3', 'G3']], ['G3', 'D3', ['G3', 'B3']]]
      }]
    }]
  },
  sevenfour: {
    duration: 3.5,
    p: [{
      voice: 'melody',
      m: ['E4', 'C4', 'E4', 'C5', 'A4', 'F4', 'G4']
    }, {
      voice: 'bass',
      m: ['C4', 'G3', 'C4', 'G3', 'F3', 'C3', ['F3', 'G3']]
    }]
  },
  jingleBells: {
    duration: 16,
    m: [[['E4', 'E4'], 'E4'], [['E4', 'E4'], 'E4'], ['E4', 'G4', 'C4', 'D4'], ['E4'], [['F4', 'F4'], [{
      duration: 3,
      m: 'F4'
    }, 'F4']], [['F4', 'E4'], ['E4', ['E4', 'E4']]], ['E4', 'D4', 'D4', 'E4'], ['D4', 'G4'], [['E4', 'E4'], 'E4'], [['E4', 'E4'], 'E4'], ['E4', 'G4', 'C4', 'D4'], ['E4'], [['F4', 'F4'], [{
      duration: 3,
      m: 'F4'
    }, 'F4']], [['F4', 'E4'], ['E4', ['E4', 'E4']]], ['G4', 'G4', 'F4', 'D4'], ['C4']]
  },
  length: {
    duration: 8,
    p: [[[{
      m: 'C4',
      length: 8
    }, {
      m: 'E4',
      length: 6
    }, {
      m: 'G4',
      length: 4
    }, {
      m: 'B4',
      length: 2
    }], [], [{
      m: 'A3',
      length: 8
    }, {
      m: 'C4',
      length: 6
    }, {
      m: 'E4',
      length: 4
    }, {
      m: 'G4',
      length: 2
    }], [], [{
      m: 'D4',
      length: 8
    }, {
      m: 'F4',
      length: 6
    }, {
      m: 'A4',
      length: 4
    }, {
      m: 'C5',
      length: 2
    }], [], [{
      m: 'G3',
      length: 8
    }, {
      m: 'B3',
      length: 6
    }, {
      m: 'D4',
      length: 4
    }, {
      m: 'F4',
      length: 2
    }], []], ['C3', 'A2', 'D3', 'G2']]
  },
  lengthShort: {
    duration: 8,
    p: ["C4_8 E4_6 G4_4 B4_2 . r . A3_8 C4_6 E4_4 G4_2 . r . D4_8 F4_6 A4_4 C5_2 . r . G3_8 B3_6 D4_4 F4_2 . r", 'C3 A2 D3 G2']
  },
  length2: {
    duration: 8,
    p: [{
      length: [8, 6, 4, 2],
      duration: [1, 1, 1, 5],
      m: ['C4', 'E4', 'G4', 'B4', 'A3', 'C4', 'E4', 'G4', 'D4', 'F4', 'A4', 'C5', 'G3', 'B3', 'D4', 'F4']
    }, {
      m: ['C3', 'A2', 'D3', 'G2']
    }]
  },
  syncopation: {
    duration: 24,
    p: [{
      instrument: "harp",
      m: [['', ['E4', 'F4', 'G4', {
        m: 'D4',
        length: 7
      }]], [], ['', ['E4', 'F4', 'G4', {
        m: 'D4',
        length: 7
      }]], [], ['', ['C4', {
        m: 'D4',
        duration: 2
      }, 'E4']], ['B3', {
        m: 'B3',
        duration: 2
      }, ''], ['', ['C4', 'D4', 'E4', {
        m: 'B3',
        length: 7
      }]], [{
        m: '',
        duration: 3
      }, 'A3'], [{
        m: 'G#3',
        duration: 1.5
      }, {
        m: 'D#4',
        duration: 2.5
      }], [[{
        m: 'Eb4',
        duration: 3
      }, 'Eb4'], ['F4', 'Eb4', 'F4', {
        m: 'G4',
        length: 9
      }]], [], []
      /* [
          { m: 'E4', duration: 1.5 },
          { m: 'G4', duration: 2.5 }
        ],
        [
          ['G4', ['G4', 'G4']],
          ['A4', 'G4', 'A4', { m: 'B4', length: 9 }]
        ],
        [],
        [] */
      ]
    }, {
      instrument: "piano",
      m: [{
        p: ['E3', 'G3']
      }, {
        p: ['F3', 'Bb3']
      }, {
        p: ['E3', 'G3']
      }, [{
        p: ['D3', 'A3']
      }, {
        p: ['F3', 'G#3']
      }], {
        p: ['C3', 'G3']
      }, [{
        p: ['E3', 'A3']
      }, {
        p: ['D3', 'G#3']
      }], {
        p: ['C3', 'G3']
      }, [{
        p: ['E3', 'A3']
      }, {
        p: ['D#3', 'A3']
      }], {
        p: ['D#3', 'G#3']
      }, {
        p: ['Eb3', 'Ab3']
      }, {
        p: ['F3', 'C3']
      }, ['', {
        p: ['G#3', 'D3']
      }]
      /* [],
        [],
        [],
        [] */
      ]
    }, {
      instrument: "harp",
      m: [['C2'], ['G2'], ['C2'], ['B2', 'E2'], ['A2'], ['F2', 'E2'], ['A2'], ['F#2', 'B2'], ['E2'], ['F2'], ['D2'], ['E2']
      /*['A2'],
        ['A2'],
        ['F#2'],
        ['B2'] */
      ]
    }]
  },
  nestedVelocity: {
    duration: 2,
    m: ['C3', {
      duration: 7,
      velocity: 0.5,
      m: ['E3', {
        duration: 6,
        velocity: 0.5,
        m: ['G3', {
          duration: 5,
          velocity: 0.5,
          m: ['B3', {
            duration: 4,
            velocity: 0.5,
            m: ['D4', {
              duration: 3,
              velocity: 0.5,
              m: ['F4', {
                duration: 2,
                velocity: 0.5,
                m: ['A4', {
                  velocity: 0.5,
                  m: 'C5'
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  },
  shepard: {
    duration: 9,
    m: [{
      p: [{
        m: 'C3',
        velocity: 0.916
      }, {
        m: 'C2',
        velocity: 0.083
      }]
    }, {
      p: [{
        m: 'C#3',
        velocity: 0.833
      }, {
        m: 'C#2',
        velocity: 0.166
      }]
    }, {
      p: [{
        m: 'D3',
        velocity: 0.75
      }, {
        m: 'D2',
        velocity: 0.25
      }]
    }, {
      p: [{
        m: 'D#3',
        velocity: 0.666
      }, {
        m: 'D#2',
        velocity: 0.333
      }]
    }, {
      p: [{
        m: 'E3',
        velocity: 0.616
      }, {
        m: 'E2',
        velocity: 0.416
      }]
    }, {
      p: [{
        m: 'F3',
        velocity: 0.583
      }, {
        m: 'F2',
        velocity: 0.5
      }]
    }, {
      p: [{
        m: 'F#3',
        velocity: 0.5
      }, {
        m: 'F#2',
        velocity: 0.583
      }]
    }, {
      p: [{
        m: 'G3',
        velocity: 0.416
      }, {
        m: 'G2',
        velocity: 0.616
      }]
    }, {
      p: [{
        m: 'G#3',
        velocity: 0.333
      }, {
        m: 'G#2',
        velocity: 0.666
      }]
    }, {
      p: [{
        m: 'A3',
        velocity: 0.25
      }, {
        m: 'A2',
        velocity: 0.75
      }]
    }, {
      p: [{
        m: 'A#3',
        velocity: 0.166
      }, {
        m: 'A#2',
        velocity: 0.833
      }]
    }, {
      p: [{
        m: 'B3',
        velocity: 0.083
      }, {
        m: 'B2',
        velocity: 0.916
      }]
    }]
  },
  parallel: {
    seconds: 3,
    p: [{
      duration: [1],
      m: ['C3', 'D3']
    }, {
      duration: [1],
      m: ['E3', 'F3', 'G3']
    }]
  },
  instruments: {
    "m": "A4",
    instrument: "synth"
  },
  dub1: dub1_json_1.default
};
},{"./swimming.yml":"tunes/swimming.yml","./cantaloupe-island.json":"tunes/cantaloupe-island.json","./star-world.json":"tunes/star-world.json","./entchen-nested.json":"tunes/entchen-nested.json","./entchen-absolute.json":"tunes/entchen-absolute.json","./entchen-harmonized.yml":"tunes/entchen-harmonized.yml","./time-of-the-falling-rain.json":"tunes/time-of-the-falling-rain.json","./zelda-rescue.json":"tunes/zelda-rescue.json","./zelda-rescue-intro.json":"tunes/zelda-rescue-intro.json","./zeldas-rescue-brackets.yaml":"tunes/zeldas-rescue-brackets.yaml","./dub1.json":"tunes/dub1.json","./riddims/slengteng.json":"tunes/riddims/slengteng.json","./edgyedgar.yml":"tunes/edgyedgar.yml","./riddims/realrock.json":"tunes/riddims/realrock.json","./tidal.json":"tunes/tidal.json"}],"Editor.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Editor =
/** @class */
function () {
  function Editor() {}

  Editor.init = function (div, ace, options) {
    var editor = ace.edit(div);
    var theme = options.theme,
        mode = options.mode,
        value = options.value,
        change = options.change,
        raw = options.raw;
    editor.setTheme("ace/theme/" + theme);
    editor.session.setMode("ace/mode/" + mode);

    if (mode === 'json') {
      editor.setValue(Editor.prettyJson(value), -1);
    } else {
      editor.setValue(value, -1);
    }

    if (change) {
      editor.getSession().on('change', function () {
        change(editor.getValue(), editor);
      });
    }

    return editor;
  };

  Editor.prettyJson = function (json, compact) {
    if (compact === void 0) {
      compact = false;
    }

    var string = JSON.stringify(json, function (k, v) {
      if (compact && Array.isArray(v) && v.reduce(function (d, e) {
        var chars = d.chars + (e + '').length;
        var allStrings = d.allStrings && ['string', 'number'].includes(_typeof(e));
        return {
          valid: d.valid && chars < 60 && allStrings,
          allStrings: allStrings,
          chars: chars
        };
      }, {
        allStrings: true,
        chars: 0,
        valid: true
      }).valid) {
        return JSON.stringify(v);
      }

      return v;
    }, 2);

    if (compact) {
      return string.replace(/\\/g, '').replace(/\"\[/g, '[').replace(/\]\"/g, ']').replace(/\"\{/g, '{').replace(/\}\"/g, '}');
    }

    return string;
  };

  return Editor;
}();

exports.Editor = Editor;
},{}],"../node_modules/tonal-note/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenize = tokenize;
exports.fromMidi = fromMidi;
exports.enharmonic = exports.simplify = exports.build = exports.from = exports.altToAcc = exports.stepToLetter = exports.oct = exports.chroma = exports.freqToMidi = exports.freq = exports.midiToFreq = exports.midi = exports.pc = exports.name = exports.props = exports.names = void 0;
var NAMES = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" ");

var names = function (accTypes) {
  return typeof accTypes !== "string" ? NAMES.slice() : NAMES.filter(function (n) {
    var acc = n[1] || " ";
    return accTypes.indexOf(acc) !== -1;
  });
};

exports.names = names;
var SHARPS = names(" #");
var FLATS = names(" b");
var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;

function tokenize(str) {
  if (typeof str !== "string") str = "";
  var m = REGEX.exec(str);
  return [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]];
}

var NO_NOTE = Object.freeze({
  pc: null,
  name: null,
  step: null,
  alt: null,
  oct: null,
  octStr: null,
  chroma: null,
  midi: null,
  freq: null
});
var SEMI = [0, 2, 4, 5, 7, 9, 11];

var properties = function (str) {
  var tokens = tokenize(str);
  if (tokens[0] === "" || tokens[3] !== "") return NO_NOTE;
  var letter = tokens[0],
      acc = tokens[1],
      octStr = tokens[2];
  var p = {
    letter: letter,
    acc: acc,
    octStr: octStr,
    pc: letter + acc,
    name: letter + acc + octStr,
    step: (letter.charCodeAt(0) + 3) % 7,
    alt: acc[0] === "b" ? -acc.length : acc.length,
    oct: octStr.length ? +octStr : null,
    chroma: 0,
    midi: null,
    freq: null
  };
  p.chroma = (SEMI[p.step] + p.alt + 120) % 12;
  p.midi = p.oct !== null ? SEMI[p.step] + p.alt + 12 * (p.oct + 1) : null;
  p.freq = midiToFreq(p.midi);
  return Object.freeze(p);
};

var memo = function (fn, cache) {
  if (cache === void 0) {
    cache = {};
  }

  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
};

var props = memo(properties);
exports.props = props;

var name = function (str) {
  return props(str).name;
};

exports.name = name;

var pc = function (str) {
  return props(str).pc;
};

exports.pc = pc;

var isMidiRange = function (m) {
  return m >= 0 && m <= 127;
};

var midi = function (note) {
  if (typeof note !== "number" && typeof note !== "string") {
    return null;
  }

  var midi = props(note).midi;
  var value = midi || midi === 0 ? midi : +note;
  return isMidiRange(value) ? value : null;
};

exports.midi = midi;

var midiToFreq = function (midi, tuning) {
  if (tuning === void 0) {
    tuning = 440;
  }

  return typeof midi === "number" ? Math.pow(2, (midi - 69) / 12) * tuning : null;
};

exports.midiToFreq = midiToFreq;

var freq = function (note) {
  return props(note).freq || midiToFreq(note);
};

exports.freq = freq;
var L2 = Math.log(2);
var L440 = Math.log(440);

var freqToMidi = function (freq) {
  var v = 12 * (Math.log(freq) - L440) / L2 + 69;
  return Math.round(v * 100) / 100;
};

exports.freqToMidi = freqToMidi;

var chroma = function (str) {
  return props(str).chroma;
};

exports.chroma = chroma;

var oct = function (str) {
  return props(str).oct;
};

exports.oct = oct;
var LETTERS = "CDEFGAB";

var stepToLetter = function (step) {
  return LETTERS[step];
};

exports.stepToLetter = stepToLetter;

var fillStr = function (s, n) {
  return Array(n + 1).join(s);
};

var numToStr = function (num, op) {
  return typeof num !== "number" ? "" : op(num);
};

var altToAcc = function (alt) {
  return numToStr(alt, function (alt) {
    return alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
  });
};

exports.altToAcc = altToAcc;

var from = function (fromProps, baseNote) {
  if (fromProps === void 0) {
    fromProps = {};
  }

  if (baseNote === void 0) {
    baseNote = null;
  }

  var _a = baseNote ? Object.assign({}, props(baseNote), fromProps) : fromProps,
      step = _a.step,
      alt = _a.alt,
      oct = _a.oct;

  if (typeof step !== "number") return null;
  var letter = stepToLetter(step);
  if (!letter) return null;
  var pc = letter + altToAcc(alt);
  return oct || oct === 0 ? pc + oct : pc;
};

exports.from = from;
var build = from;
exports.build = build;

function fromMidi(num, sharps) {
  if (sharps === void 0) {
    sharps = false;
  }

  num = Math.round(num);
  var pcs = sharps === true ? SHARPS : FLATS;
  var pc = pcs[num % 12];
  var o = Math.floor(num / 12) - 1;
  return pc + o;
}

var simplify = function (note, sameAcc) {
  if (sameAcc === void 0) {
    sameAcc = true;
  }

  var _a = props(note),
      alt = _a.alt,
      chroma = _a.chroma,
      midi = _a.midi;

  if (chroma === null) return null;
  var alteration = alt;
  var useSharps = sameAcc === false ? alteration < 0 : alteration > 0;
  return midi === null ? pc(fromMidi(chroma, useSharps)) : fromMidi(midi, useSharps);
};

exports.simplify = simplify;

var enharmonic = function (note) {
  return simplify(note, false);
};

exports.enharmonic = enharmonic;
},{}],"../node_modules/tonal-array/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.rotate = rotate;
exports.sort = sort;
exports.unique = unique;
exports.permutations = exports.shuffle = exports.compact = void 0;

var _tonalNote = require("tonal-note");

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-array.svg?style=flat-square)](https://www.npmjs.com/package/tonal-array)
 *
 * Tonal array utilities. Create ranges, sort notes, ...
 *
 * @example
 * import * as Array;
 * Array.sort(["f", "a", "c"]) // => ["C", "F", "A"]
 *
 * @example
 * const Array = require("tonal-array")
 * Array.range(1, 4) // => [1, 2, 3, 4]
 *
 * @module Array
 */
// ascending range
function ascR(b, n) {
  for (var a = []; n--; a[n] = n + b) {
    ;
  }

  return a;
} // descending range


function descR(b, n) {
  for (var a = []; n--; a[n] = b - n) {
    ;
  }

  return a;
}
/**
 * Create a numeric range
 *
 * @param {Number} from
 * @param {Number} to
 * @return {Array}
 *
 * @example
 * Array.range(-2, 2) // => [-2, -1, 0, 1, 2]
 * Array.range(2, -2) // => [2, 1, 0, -1, -2]
 */


function range(a, b) {
  return a === null || b === null ? [] : a < b ? ascR(a, b - a + 1) : descR(a, a - b + 1);
}
/**
 *
 * Rotates a list a number of times. It"s completly agnostic about the
 * contents of the list.
 *
 * @param {Integer} times - the number of rotations
 * @param {Array} array
 * @return {Array} the rotated array
 * @example
 * Array.rotate(1, [1, 2, 3]) // => [2, 3, 1]
 */


function rotate(times, arr) {
  var len = arr.length;
  var n = (times % len + len) % len;
  return arr.slice(n, len).concat(arr.slice(0, n));
}
/**
 * Return a copy of the array with the null values removed
 * @function
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * Array.compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
 */


var compact = function (arr) {
  return arr.filter(function (n) {
    return n === 0 || n;
  });
}; // a function that get note heights (with negative number for pitch classes)


exports.compact = compact;

var height = function (name) {
  var m = (0, _tonalNote.props)(name).midi;
  return m !== null ? m : (0, _tonalNote.props)(name + "-100").midi;
};
/**
 * Sort an array of notes in ascending order
 *
 * @param {String|Array} notes
 * @return {Array} sorted array of notes
 */


function sort(src) {
  return compact(src.map(_tonalNote.name)).sort(function (a, b) {
    return height(a) > height(b);
  });
}
/**
 * Get sorted notes with duplicates removed
 *
 * @function
 * @param {Array} notes
 */


function unique(arr) {
  return sort(arr).filter(function (n, i, a) {
    return i === 0 || n !== a[i - 1];
  });
}
/**
 * Randomizes the order of the specified array in-place, using the Fisher–Yates shuffle.
 *
 * @private
 * @function
 * @param {Array|String} arr - the array
 * @return {Array} the shuffled array
 *
 * @example
 * Array.shuffle(["C", "D", "E", "F"])
 */


var shuffle = function (arr, rnd) {
  if (rnd === void 0) rnd = Math.random;
  var i, t;
  var m = arr.length;

  while (m) {
    i = rnd() * m-- | 0;
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
};
/**
 * Get all permutations of an array
 * http://stackoverflow.com/questions/9960908/permutations-in-javascript
 *
 * @param {Array} array - the array
 * @return {Array<Array>} an array with all the permutations
 */


exports.shuffle = shuffle;

var permutations = function (arr) {
  if (arr.length === 0) {
    return [[]];
  }

  return permutations(arr.slice(1)).reduce(function (acc, perm) {
    return acc.concat(arr.map(function (e, pos) {
      var newPerm = perm.slice();
      newPerm.splice(pos, 0, arr[0]);
      return newPerm;
    }));
  }, []);
};

exports.permutations = permutations;
},{"tonal-note":"../node_modules/tonal-note/build/es6.js"}],"../node_modules/tonal-interval/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.props = props;
exports.fromSemitones = exports.invert = exports.simplify = exports.build = exports.ic = exports.chroma = exports.semitones = exports.name = exports.num = exports.altToQ = exports.qToAlt = exports.tokenize = exports.names = void 0;
var IVL_TNL = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
var IVL_STR = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
var REGEX = new RegExp("^" + IVL_TNL + "|" + IVL_STR + "$");
var SIZES = [0, 2, 4, 5, 7, 9, 11];
var TYPES = "PMMPPMM";
var CLASSES = [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
var NAMES = "1P 2m 2M 3m 3M 4P 5P 6m 6M 7m 7M 8P".split(" ");

var names = function (types) {
  return typeof types !== "string" ? NAMES.slice() : NAMES.filter(function (n) {
    return types.indexOf(n[1]) !== -1;
  });
};

exports.names = names;

var tokenize = function (str) {
  var m = REGEX.exec("" + str);
  if (m === null) return null;
  return m[1] ? [m[1], m[2]] : [m[4], m[3]];
};

exports.tokenize = tokenize;
var NO_IVL = Object.freeze({
  name: null,
  num: null,
  q: null,
  step: null,
  alt: null,
  dir: null,
  type: null,
  simple: null,
  semitones: null,
  chroma: null,
  oct: null
});

var fillStr = function (s, n) {
  return Array(Math.abs(n) + 1).join(s);
};

var qToAlt = function (type, q) {
  if (q === "M" && type === "M") return 0;
  if (q === "P" && type === "P") return 0;
  if (q === "m" && type === "M") return -1;
  if (/^A+$/.test(q)) return q.length;
  if (/^d+$/.test(q)) return type === "P" ? -q.length : -q.length - 1;
  return null;
};

exports.qToAlt = qToAlt;

var altToQ = function (type, alt) {
  if (alt === 0) return type === "M" ? "M" : "P";else if (alt === -1 && type === "M") return "m";else if (alt > 0) return fillStr("A", alt);else if (alt < 0) return fillStr("d", type === "P" ? alt : alt + 1);else return null;
};

exports.altToQ = altToQ;

var numToStep = function (num) {
  return (Math.abs(num) - 1) % 7;
};

var properties = function (str) {
  var t = tokenize(str);
  if (t === null) return NO_IVL;
  var p = {
    num: 0,
    q: "d",
    name: "",
    type: "M",
    step: 0,
    dir: -1,
    simple: 1,
    alt: 0,
    oct: 0,
    semitones: 0,
    chroma: 0,
    ic: 0
  };
  p.num = +t[0];
  p.q = t[1];
  p.step = numToStep(p.num);
  p.type = TYPES[p.step];
  if (p.type === "M" && p.q === "P") return NO_IVL;
  p.name = "" + p.num + p.q;
  p.dir = p.num < 0 ? -1 : 1;
  p.simple = p.num === 8 || p.num === -8 ? p.num : p.dir * (p.step + 1);
  p.alt = qToAlt(p.type, p.q);
  p.oct = Math.floor((Math.abs(p.num) - 1) / 7);
  p.semitones = p.dir * (SIZES[p.step] + p.alt + 12 * p.oct);
  p.chroma = (p.dir * (SIZES[p.step] + p.alt) % 12 + 12) % 12;
  return Object.freeze(p);
};

var cache = {};

function props(str) {
  if (typeof str !== "string") return NO_IVL;
  return cache[str] || (cache[str] = properties(str));
}

var num = function (str) {
  return props(str).num;
};

exports.num = num;

var name = function (str) {
  return props(str).name;
};

exports.name = name;

var semitones = function (str) {
  return props(str).semitones;
};

exports.semitones = semitones;

var chroma = function (str) {
  return props(str).chroma;
};

exports.chroma = chroma;

var ic = function (ivl) {
  if (typeof ivl === "string") ivl = props(ivl).chroma;
  return typeof ivl === "number" ? CLASSES[ivl % 12] : null;
};

exports.ic = ic;

var build = function (_a) {
  var _b = _a === void 0 ? {} : _a,
      num = _b.num,
      step = _b.step,
      alt = _b.alt,
      _c = _b.oct,
      oct = _c === void 0 ? 1 : _c,
      dir = _b.dir;

  if (step !== undefined) num = step + 1 + 7 * oct;
  if (num === undefined) return null;
  if (typeof alt !== "number") return null;
  var d = typeof dir !== "number" ? "" : dir < 0 ? "-" : "";
  var type = TYPES[numToStep(num)];
  return d + num + altToQ(type, alt);
};

exports.build = build;

var simplify = function (str) {
  var p = props(str);
  if (p === NO_IVL) return null;
  var intervalProps = p;
  return intervalProps.simple + intervalProps.q;
};

exports.simplify = simplify;

var invert = function (str) {
  var p = props(str);
  if (p === NO_IVL) return null;
  var intervalProps = p;
  var step = (7 - intervalProps.step) % 7;
  var alt = intervalProps.type === "P" ? -intervalProps.alt : -(intervalProps.alt + 1);
  return build({
    step: step,
    alt: alt,
    oct: intervalProps.oct,
    dir: intervalProps.dir
  });
};

exports.invert = invert;
var IN = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7];
var IQ = "P m M m M P d P m M m M".split(" ");

var fromSemitones = function (num) {
  var d = num < 0 ? -1 : 1;
  var n = Math.abs(num);
  var c = n % 12;
  var o = Math.floor(n / 12);
  return d * (IN[c] + 7 * o) + IQ[c];
};

exports.fromSemitones = fromSemitones;
},{}],"../node_modules/tonal-distance/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transpose = transpose;
exports.trFifths = trFifths;
exports.fifths = fifths;
exports.transposeBy = transposeBy;
exports.addIntervals = addIntervals;
exports.add = add;
exports.subtract = subtract;
exports.interval = interval;
exports.semitones = semitones;

var _tonalNote = require("tonal-note");

var _tonalInterval = require("tonal-interval");

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-distance.svg)](https://www.npmjs.com/package/tonal-distance)
 * [![tonal](https://img.shields.io/badge/tonal-distance-yellow.svg)](https://github.com/danigb/tonal/tree/master/packages/tonal/distance)
 *
 * Transpose notes by intervals and find distances between notes
 *
 * @example
 * // es6
 * import * as Distance from "tonal-distance"
 * Distance.interval("C3", "C4") // => "1P"
 *
 * @example
 * // es6 import selected functions
 * import { interval, semitones, transpose } from "tonal-distance"
 *
 * semitones("C" ,"D") // => 2
 * interval("C4", "G4") // => "5P"
 * transpose("C4", "P5") // => "G4"
 *
 * @example
 * // included in tonal facade
 * const Tonal = require("tonal");
 * Tonal.Distance.transpose("C4", "P5")
 * Tonal.Distance.transposeBy("P5", "C4")
 *
 * @module Distance
 */
// Map from letter step to number of fifths starting from "C":
// { C: 0, D: 2, E: 4, F: -1, G: 1, A: 3, B: 5 }
var FIFTHS = [0, 2, 4, -1, 1, 3, 5]; // Given a number of fifths, return the octaves they span

var fOcts = function (f) {
  return Math.floor(f * 7 / 12);
}; // Get the number of octaves it span each step


var FIFTH_OCTS = FIFTHS.map(fOcts);

var encode = function (ref) {
  var step = ref.step;
  var alt = ref.alt;
  var oct = ref.oct;
  var dir = ref.dir;
  if (dir === void 0) dir = 1;
  var f = FIFTHS[step] + 7 * alt;

  if (oct === null) {
    return [dir * f];
  }

  var o = oct - FIFTH_OCTS[step] - 4 * alt;
  return [dir * f, dir * o];
}; // We need to get the steps from fifths
// Fifths for CDEFGAB are [ 0, 2, 4, -1, 1, 3, 5 ]
// We add 1 to fifths to avoid negative numbers, so:
// for ["F", "C", "G", "D", "A", "E", "B"] we have:


var STEPS = [3, 0, 4, 1, 5, 2, 6]; // Return the number of fifths as if it were unaltered

function unaltered(f) {
  var i = (f + 1) % 7;
  return i < 0 ? 7 + i : i;
}

var decode = function (f, o, dir) {
  var step = STEPS[unaltered(f)];
  var alt = Math.floor((f + 1) / 7);

  if (o === undefined) {
    return {
      step: step,
      alt: alt,
      dir: dir
    };
  }

  var oct = o + 4 * alt + FIFTH_OCTS[step];
  return {
    step: step,
    alt: alt,
    oct: oct,
    dir: dir
  };
};

var memo = function (fn, cache) {
  if (cache === void 0) cache = {};
  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
};

var encoder = function (props) {
  return memo(function (str) {
    var p = props(str);
    return p.name === null ? null : encode(p);
  });
};

var encodeNote = encoder(_tonalNote.props);
var encodeIvl = encoder(_tonalInterval.props);
/**
 * Transpose a note by an interval. The note can be a pitch class.
 *
 * This function can be partially applied.
 *
 * @param {string} note
 * @param {string} interval
 * @return {string} the transposed note
 * @example
 * import { tranpose } from "tonal-distance"
 * transpose("d3", "3M") // => "F#3"
 * // it works with pitch classes
 * transpose("D", "3M") // => "F#"
 * // can be partially applied
 * ["C", "D", "E", "F", "G"].map(transpose("M3)) // => ["E", "F#", "G#", "A", "B"]
 */

function transpose(note, interval) {
  if (arguments.length === 1) {
    return function (i) {
      return transpose(note, i);
    };
  }

  var n = encodeNote(note);
  var i = encodeIvl(interval);

  if (n === null || i === null) {
    return null;
  }

  var tr = n.length === 1 ? [n[0] + i[0]] : [n[0] + i[0], n[1] + i[1]];
  return (0, _tonalNote.build)(decode(tr[0], tr[1]));
}
/**
 * Transpose a pitch class by a number of perfect fifths.
 *
 * It can be partially applied.
 *
 * @function
 * @param {string} pitchClass - the pitch class
 * @param {Integer} fifhts - the number of fifths
 * @return {string} the transposed pitch class
 *
 * @example
 * import { trFifths } from "tonal-transpose"
 * [0, 1, 2, 3, 4].map(trFifths("C")) // => ["C", "G", "D", "A", "E"]
 * // or using tonal
 * Distance.trFifths("G4", 1) // => "D"
 */


function trFifths(note, fifths) {
  if (arguments.length === 1) {
    return function (f) {
      return trFifths(note, f);
    };
  }

  var n = encodeNote(note);

  if (n === null) {
    return null;
  }

  return (0, _tonalNote.build)(decode(n[0] + fifths));
}
/**
 * Get the distance in fifths between pitch classes
 *
 * Can be partially applied.
 *
 * @param {string} to - note or pitch class
 * @param {string} from - note or pitch class
 */


function fifths(from, to) {
  if (arguments.length === 1) {
    return function (to) {
      return fifths(from, to);
    };
  }

  var f = encodeNote(from);
  var t = encodeNote(to);

  if (t === null || f === null) {
    return null;
  }

  return t[0] - f[0];
}
/**
 * The same as transpose with the arguments inverted.
 *
 * Can be partially applied.
 *
 * @param {string} note
 * @param {string} interval
 * @return {string} the transposed note
 * @example
 * import { tranposeBy } from "tonal-distance"
 * transposeBy("3m", "5P") // => "7m"
 */


function transposeBy(interval, note) {
  if (arguments.length === 1) {
    return function (n) {
      return transpose(n, interval);
    };
  }

  return transpose(note, interval);
}

var isDescending = function (e) {
  return e[0] * 7 + e[1] * 12 < 0;
};

var decodeIvl = function (i) {
  return isDescending(i) ? decode(-i[0], -i[1], -1) : decode(i[0], i[1], 1);
};

function addIntervals(ivl1, ivl2, dir) {
  var i1 = encodeIvl(ivl1);
  var i2 = encodeIvl(ivl2);

  if (i1 === null || i2 === null) {
    return null;
  }

  var i = [i1[0] + dir * i2[0], i1[1] + dir * i2[1]];
  return (0, _tonalInterval.build)(decodeIvl(i));
}
/**
 * Add two intervals
 *
 * Can be partially applied.
 *
 * @param {string} interval1
 * @param {string} interval2
 * @return {string} the resulting interval
 * @example
 * import { add } from "tonal-distance"
 * add("3m", "5P") // => "7m"
 */


function add(ivl1, ivl2) {
  if (arguments.length === 1) {
    return function (i2) {
      return add(ivl1, i2);
    };
  }

  return addIntervals(ivl1, ivl2, 1);
}
/**
 * Subtract two intervals
 *
 * Can be partially applied
 *
 * @param {string} minuend
 * @param {string} subtrahend
 * @return {string} interval diference
 */


function subtract(ivl1, ivl2) {
  if (arguments.length === 1) {
    return function (i2) {
      return add(ivl1, i2);
    };
  }

  return addIntervals(ivl1, ivl2, -1);
}
/**
 * Find the interval between two pitches. It works with pitch classes
 * (both must be pitch classes and the interval is always ascending)
 *
 * Can be partially applied
 *
 * @param {string} from - distance from
 * @param {string} to - distance to
 * @return {string} the interval distance
 *
 * @example
 * import { interval } from "tonal-distance"
 * interval("C2", "C3") // => "P8"
 * interval("G", "B") // => "M3"
 *
 * @example
 * import * as Distance from "tonal-distance"
 * Distance.interval("M2", "P5") // => "P4"
 */


function interval(from, to) {
  if (arguments.length === 1) {
    return function (t) {
      return interval(from, t);
    };
  }

  var f = encodeNote(from);
  var t = encodeNote(to);

  if (f === null || t === null || f.length !== t.length) {
    return null;
  }

  var d = f.length === 1 ? [t[0] - f[0], -Math.floor((t[0] - f[0]) * 7 / 12)] : [t[0] - f[0], t[1] - f[1]];
  return (0, _tonalInterval.build)(decodeIvl(d));
}
/**
 * Get the distance between two notes in semitones
 *
 * @param {String|Pitch} from - first note
 * @param {String|Pitch} to - last note
 * @return {Integer} the distance in semitones or null if not valid notes
 * @example
 * import { semitones } from "tonal-distance"
 * semitones("C3", "A2") // => -3
 * // or use tonal
 * Tonal.Distance.semitones("C3", "G3") // => 7
 */


function semitones(from, to) {
  if (arguments.length === 1) {
    return function (t) {
      return semitones(from, t);
    };
  }

  var f = (0, _tonalNote.props)(from);
  var t = (0, _tonalNote.props)(to);
  return f.midi !== null && t.midi !== null ? t.midi - f.midi : f.chroma !== null && t.chroma !== null ? (t.chroma - f.chroma + 12) % 12 : null;
}
},{"tonal-note":"../node_modules/tonal-note/build/es6.js","tonal-interval":"../node_modules/tonal-interval/build/es6.js"}],"../node_modules/tonal-dictionary/build/data/scales.json":[function(require,module,exports) {
module.exports = {
  "chromatic": ["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"],
  "lydian": ["1P 2M 3M 4A 5P 6M 7M"],
  "major": ["1P 2M 3M 4P 5P 6M 7M", ["ionian"]],
  "mixolydian": ["1P 2M 3M 4P 5P 6M 7m", ["dominant"]],
  "dorian": ["1P 2M 3m 4P 5P 6M 7m"],
  "aeolian": ["1P 2M 3m 4P 5P 6m 7m", ["minor"]],
  "phrygian": ["1P 2m 3m 4P 5P 6m 7m"],
  "locrian": ["1P 2m 3m 4P 5d 6m 7m"],
  "melodic minor": ["1P 2M 3m 4P 5P 6M 7M"],
  "melodic minor second mode": ["1P 2m 3m 4P 5P 6M 7m"],
  "lydian augmented": ["1P 2M 3M 4A 5A 6M 7M"],
  "lydian dominant": ["1P 2M 3M 4A 5P 6M 7m", ["lydian b7"]],
  "melodic minor fifth mode": [
    "1P 2M 3M 4P 5P 6m 7m",
    ["hindu", "mixolydian b6M"]
  ],
  "locrian #2": ["1P 2M 3m 4P 5d 6m 7m", ["half-diminished"]],
  "altered": [
    "1P 2m 3m 3M 5d 6m 7m",
    ["super locrian", "diminished whole tone", "pomeroy"]
  ],
  "harmonic minor": ["1P 2M 3m 4P 5P 6m 7M"],
  "phrygian dominant": ["1P 2m 3M 4P 5P 6m 7m", ["spanish", "phrygian major"]],
  "half-whole diminished": ["1P 2m 3m 3M 4A 5P 6M 7m", ["dominant diminished"]],
  "diminished": ["1P 2M 3m 4P 5d 6m 6M 7M", ["whole-half diminished"]],
  "major pentatonic": ["1P 2M 3M 5P 6M", ["pentatonic"]],
  "lydian pentatonic": ["1P 3M 4A 5P 7M", ["chinese"]],
  "mixolydian pentatonic": ["1P 3M 4P 5P 7m", ["indian"]],
  "locrian pentatonic": [
    "1P 3m 4P 5d 7m",
    ["minor seven flat five pentatonic"]
  ],
  "minor pentatonic": ["1P 3m 4P 5P 7m"],
  "minor six pentatonic": ["1P 3m 4P 5P 6M"],
  "minor hexatonic": ["1P 2M 3m 4P 5P 7M"],
  "flat three pentatonic": ["1P 2M 3m 5P 6M", ["kumoi"]],
  "flat six pentatonic": ["1P 2M 3M 5P 6m"],
  "major flat two pentatonic": ["1P 2m 3M 5P 6M"],
  "whole tone pentatonic": ["1P 3M 5d 6m 7m"],
  "ionian pentatonic": ["1P 3M 4P 5P 7M"],
  "lydian #5P pentatonic": ["1P 3M 4A 5A 7M"],
  "lydian dominant pentatonic": ["1P 3M 4A 5P 7m"],
  "minor #7M pentatonic": ["1P 3m 4P 5P 7M"],
  "super locrian pentatonic": ["1P 3m 4d 5d 7m"],
  "in-sen": ["1P 2m 4P 5P 7m"],
  "iwato": ["1P 2m 4P 5d 7m"],
  "hirajoshi": ["1P 2M 3m 5P 6m"],
  "kumoijoshi": ["1P 2m 4P 5P 6m"],
  "pelog": ["1P 2m 3m 5P 6m"],
  "vietnamese 1": ["1P 3m 4P 5P 6m"],
  "vietnamese 2": ["1P 3m 4P 5P 7m"],
  "prometheus": ["1P 2M 3M 4A 6M 7m"],
  "prometheus neopolitan": ["1P 2m 3M 4A 6M 7m"],
  "ritusen": ["1P 2M 4P 5P 6M"],
  "scriabin": ["1P 2m 3M 5P 6M"],
  "piongio": ["1P 2M 4P 5P 6M 7m"],
  "major blues": ["1P 2M 3m 3M 5P 6M"],
  "minor blues": ["1P 3m 4P 5d 5P 7m", ["blues"]],
  "composite blues": ["1P 2M 3m 3M 4P 5d 5P 6M 7m"],
  "augmented": ["1P 2A 3M 5P 5A 7M"],
  "augmented heptatonic": ["1P 2A 3M 4P 5P 5A 7M"],
  "dorian #4": ["1P 2M 3m 4A 5P 6M 7m"],
  "lydian diminished": ["1P 2M 3m 4A 5P 6M 7M"],
  "whole tone": ["1P 2M 3M 4A 5A 7m"],
  "leading whole tone": ["1P 2M 3M 4A 5A 7m 7M"],
  "lydian minor": ["1P 2M 3M 4A 5P 6m 7m"],
  "locrian major": ["1P 2M 3M 4P 5d 6m 7m", ["arabian"]],
  "neopolitan": ["1P 2m 3m 4P 5P 6m 7M"],
  "neopolitan minor": ["1P 2m 3m 4P 5P 6m 7M"],
  "neopolitan major": ["1P 2m 3m 4P 5P 6M 7M", ["dorian b2"]],
  "neopolitan major pentatonic": ["1P 3M 4P 5d 7m"],
  "romanian minor": ["1P 2M 3m 5d 5P 6M 7m"],
  "double harmonic lydian": ["1P 2m 3M 4A 5P 6m 7M"],
  "harmonic major": ["1P 2M 3M 4P 5P 6m 7M"],
  "double harmonic major": ["1P 2m 3M 4P 5P 6m 7M", ["gypsy"]],
  "egyptian": ["1P 2M 4P 5P 7m"],
  "hungarian minor": ["1P 2M 3m 4A 5P 6m 7M"],
  "hungarian major": ["1P 2A 3M 4A 5P 6M 7m"],
  "oriental": ["1P 2m 3M 4P 5d 6M 7m"],
  "spanish heptatonic": ["1P 2m 3m 3M 4P 5P 6m 7m"],
  "flamenco": ["1P 2m 3m 3M 4A 5P 7m"],
  "balinese": ["1P 2m 3m 4P 5P 6m 7M"],
  "todi raga": ["1P 2m 3m 4A 5P 6m 7M"],
  "malkos raga": ["1P 3m 4P 6m 7m"],
  "kafi raga": ["1P 3m 3M 4P 5P 6M 7m 7M"],
  "purvi raga": ["1P 2m 3M 4P 4A 5P 6m 7M"],
  "persian": ["1P 2m 3M 4P 5d 6m 7M"],
  "bebop": ["1P 2M 3M 4P 5P 6M 7m 7M"],
  "bebop dominant": ["1P 2M 3M 4P 5P 6M 7m 7M"],
  "bebop minor": ["1P 2M 3m 3M 4P 5P 6M 7m"],
  "bebop major": ["1P 2M 3M 4P 5P 5A 6M 7M"],
  "bebop locrian": ["1P 2m 3m 4P 5d 5P 6m 7m"],
  "minor bebop": ["1P 2M 3m 4P 5P 6m 7m 7M"],
  "mystery #1": ["1P 2m 3M 5d 6m 7m"],
  "enigmatic": ["1P 2m 3M 5d 6m 7m 7M"],
  "minor six diminished": ["1P 2M 3m 4P 5P 6m 6M 7M"],
  "ionian augmented": ["1P 2M 3M 4P 5A 6M 7M"],
  "lydian #9": ["1P 2m 3M 4A 5P 6M 7M"],
  "ichikosucho": ["1P 2M 3M 4P 5d 5P 6M 7M"],
  "six tone symmetric": ["1P 2m 3M 4P 5A 6M"]
}
;
},{}],"../node_modules/tonal-dictionary/build/data/chords.json":[function(require,module,exports) {
module.exports = {
  "4": ["1P 4P 7m 10m", ["quartal"]],
  "64": ["5P 8P 10M"],
  "5": ["1P 5P"],
  "M": ["1P 3M 5P", ["Major", ""]],
  "M#5": ["1P 3M 5A", ["augmented", "maj#5", "Maj#5", "+", "aug"]],
  "M#5add9": ["1P 3M 5A 9M", ["+add9"]],
  "M13": ["1P 3M 5P 7M 9M 13M", ["maj13", "Maj13"]],
  "M13#11": [
    "1P 3M 5P 7M 9M 11A 13M",
    ["maj13#11", "Maj13#11", "M13+4", "M13#4"]
  ],
  "M6": ["1P 3M 5P 13M", ["6"]],
  "M6#11": ["1P 3M 5P 6M 11A", ["M6b5", "6#11", "6b5"]],
  "M69": ["1P 3M 5P 6M 9M", ["69"]],
  "M69#11": ["1P 3M 5P 6M 9M 11A"],
  "M7#11": ["1P 3M 5P 7M 11A", ["maj7#11", "Maj7#11", "M7+4", "M7#4"]],
  "M7#5": ["1P 3M 5A 7M", ["maj7#5", "Maj7#5", "maj9#5", "M7+"]],
  "M7#5sus4": ["1P 4P 5A 7M"],
  "M7#9#11": ["1P 3M 5P 7M 9A 11A"],
  "M7add13": ["1P 3M 5P 6M 7M 9M"],
  "M7b5": ["1P 3M 5d 7M"],
  "M7b6": ["1P 3M 6m 7M"],
  "M7b9": ["1P 3M 5P 7M 9m"],
  "M7sus4": ["1P 4P 5P 7M"],
  "M9": ["1P 3M 5P 7M 9M", ["maj9", "Maj9"]],
  "M9#11": ["1P 3M 5P 7M 9M 11A", ["maj9#11", "Maj9#11", "M9+4", "M9#4"]],
  "M9#5": ["1P 3M 5A 7M 9M", ["Maj9#5"]],
  "M9#5sus4": ["1P 4P 5A 7M 9M"],
  "M9b5": ["1P 3M 5d 7M 9M"],
  "M9sus4": ["1P 4P 5P 7M 9M"],
  "Madd9": ["1P 3M 5P 9M", ["2", "add9", "add2"]],
  "Maj7": ["1P 3M 5P 7M", ["maj7", "M7"]],
  "Mb5": ["1P 3M 5d"],
  "Mb6": ["1P 3M 13m"],
  "Msus2": ["1P 2M 5P", ["add9no3", "sus2"]],
  "Msus4": ["1P 4P 5P", ["sus", "sus4"]],
  "Maddb9": ["1P 3M 5P 9m"],
  "7": ["1P 3M 5P 7m", ["Dominant", "Dom"]],
  "9": ["1P 3M 5P 7m 9M", ["79"]],
  "11": ["1P 5P 7m 9M 11P"],
  "13": ["1P 3M 5P 7m 9M 13M", ["13_"]],
  "11b9": ["1P 5P 7m 9m 11P"],
  "13#11": ["1P 3M 5P 7m 9M 11A 13M", ["13+4", "13#4"]],
  "13#9": ["1P 3M 5P 7m 9A 13M", ["13#9_"]],
  "13#9#11": ["1P 3M 5P 7m 9A 11A 13M"],
  "13b5": ["1P 3M 5d 6M 7m 9M"],
  "13b9": ["1P 3M 5P 7m 9m 13M"],
  "13b9#11": ["1P 3M 5P 7m 9m 11A 13M"],
  "13no5": ["1P 3M 7m 9M 13M"],
  "13sus4": ["1P 4P 5P 7m 9M 13M", ["13sus"]],
  "69#11": ["1P 3M 5P 6M 9M 11A"],
  "7#11": ["1P 3M 5P 7m 11A", ["7+4", "7#4", "7#11_", "7#4_"]],
  "7#11b13": ["1P 3M 5P 7m 11A 13m", ["7b5b13"]],
  "7#5": ["1P 3M 5A 7m", ["+7", "7aug", "aug7"]],
  "7#5#9": ["1P 3M 5A 7m 9A", ["7alt", "7#5#9_", "7#9b13_"]],
  "7#5b9": ["1P 3M 5A 7m 9m"],
  "7#5b9#11": ["1P 3M 5A 7m 9m 11A"],
  "7#5sus4": ["1P 4P 5A 7m"],
  "7#9": ["1P 3M 5P 7m 9A", ["7#9_"]],
  "7#9#11": ["1P 3M 5P 7m 9A 11A", ["7b5#9"]],
  "7#9#11b13": ["1P 3M 5P 7m 9A 11A 13m"],
  "7#9b13": ["1P 3M 5P 7m 9A 13m"],
  "7add6": ["1P 3M 5P 7m 13M", ["67", "7add13"]],
  "7b13": ["1P 3M 7m 13m"],
  "7b5": ["1P 3M 5d 7m"],
  "7b6": ["1P 3M 5P 6m 7m"],
  "7b9": ["1P 3M 5P 7m 9m"],
  "7b9#11": ["1P 3M 5P 7m 9m 11A", ["7b5b9"]],
  "7b9#9": ["1P 3M 5P 7m 9m 9A"],
  "7b9b13": ["1P 3M 5P 7m 9m 13m"],
  "7b9b13#11": ["1P 3M 5P 7m 9m 11A 13m", ["7b9#11b13", "7b5b9b13"]],
  "7no5": ["1P 3M 7m"],
  "7sus4": ["1P 4P 5P 7m", ["7sus"]],
  "7sus4b9": [
    "1P 4P 5P 7m 9m",
    ["susb9", "7susb9", "7b9sus", "7b9sus4", "phryg"]
  ],
  "7sus4b9b13": ["1P 4P 5P 7m 9m 13m", ["7b9b13sus4"]],
  "9#11": ["1P 3M 5P 7m 9M 11A", ["9+4", "9#4", "9#11_", "9#4_"]],
  "9#11b13": ["1P 3M 5P 7m 9M 11A 13m", ["9b5b13"]],
  "9#5": ["1P 3M 5A 7m 9M", ["9+"]],
  "9#5#11": ["1P 3M 5A 7m 9M 11A"],
  "9b13": ["1P 3M 7m 9M 13m"],
  "9b5": ["1P 3M 5d 7m 9M"],
  "9no5": ["1P 3M 7m 9M"],
  "9sus4": ["1P 4P 5P 7m 9M", ["9sus"]],
  "m": ["1P 3m 5P"],
  "m#5": ["1P 3m 5A", ["m+", "mb6"]],
  "m11": ["1P 3m 5P 7m 9M 11P", ["_11"]],
  "m11A 5": ["1P 3m 6m 7m 9M 11P"],
  "m11b5": ["1P 3m 7m 12d 2M 4P", ["h11", "_11b5"]],
  "m13": ["1P 3m 5P 7m 9M 11P 13M", ["_13"]],
  "m6": ["1P 3m 4P 5P 13M", ["_6"]],
  "m69": ["1P 3m 5P 6M 9M", ["_69"]],
  "m7": ["1P 3m 5P 7m", ["minor7", "_", "_7"]],
  "m7#5": ["1P 3m 6m 7m"],
  "m7add11": ["1P 3m 5P 7m 11P", ["m7add4"]],
  "m7b5": ["1P 3m 5d 7m", ["half-diminished", "h7", "_7b5"]],
  "m9": ["1P 3m 5P 7m 9M", ["_9"]],
  "m9#5": ["1P 3m 6m 7m 9M"],
  "m9b5": ["1P 3m 7m 12d 2M", ["h9", "-9b5"]],
  "mMaj7": ["1P 3m 5P 7M", ["mM7", "_M7"]],
  "mMaj7b6": ["1P 3m 5P 6m 7M", ["mM7b6"]],
  "mM9": ["1P 3m 5P 7M 9M", ["mMaj9", "-M9"]],
  "mM9b6": ["1P 3m 5P 6m 7M 9M", ["mMaj9b6"]],
  "mb6M7": ["1P 3m 6m 7M"],
  "mb6b9": ["1P 3m 6m 9m"],
  "o": ["1P 3m 5d", ["mb5", "dim"]],
  "o7": ["1P 3m 5d 13M", ["diminished", "m6b5", "dim7"]],
  "o7M7": ["1P 3m 5d 6M 7M"],
  "oM7": ["1P 3m 5d 7M"],
  "sus24": ["1P 2M 4P 5P", ["sus4add9"]],
  "+add#9": ["1P 3M 5A 9A"],
  "madd4": ["1P 3m 4P 5P"],
  "madd9": ["1P 3m 5P 9M"]
}
;
},{}],"../node_modules/tonal-pcset/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chroma = chroma;
exports.chromas = chromas;
exports.modes = modes;
exports.isChroma = isChroma;
exports.intervals = intervals;
exports.isEqual = isEqual;
exports.isSubsetOf = isSubsetOf;
exports.isSupersetOf = isSupersetOf;
exports.includes = includes;
exports.filter = filter;

var _tonalNote = require("tonal-note");

var _tonalInterval = require("tonal-interval");

var _tonalArray = require("tonal-array");

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-pcset.svg?style=flat-square)](https://www.npmjs.com/package/tonal-pcset)
 * [![tonal](https://img.shields.io/badge/tonal-pcset-yellow.svg?style=flat-square)](https://www.npmjs.com/browse/keyword/tonal)
 *
 * `tonal-pcset` is a collection of functions to work with pitch class sets, oriented
 * to make comparations (isEqual, isSubset, isSuperset)
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * You can install via npm: `npm i --save tonal-pcset`
 *
 * ```js
 * // es6
 * import PcSet from "tonal-pcset"
 * var PcSet = require("tonal-pcset")
 *
 * PcSet.isEqual("c2 d5 e6", "c6 e3 d1") // => true
 * ```
 *
 * ## API documentation
 *
 * @module PcSet
 */
var chr = function (str) {
  return (0, _tonalNote.chroma)(str) || (0, _tonalInterval.chroma)(str) || 0;
};

var pcsetNum = function (set) {
  return parseInt(chroma(set), 2);
};

var clen = function (chroma) {
  return chroma.replace(/0/g, "").length;
};
/**
 * Get chroma of a pitch class set. A chroma identifies each set uniquely.
 * It"s a 12-digit binary each presenting one semitone of the octave.
 *
 * Note that this function accepts a chroma as parameter and return it
 * without modification.
 *
 * @param {Array|String} set - the pitch class set
 * @return {string} a binary representation of the pitch class set
 * @example
 * PcSet.chroma(["C", "D", "E"]) // => "1010100000000"
 */


function chroma(set) {
  if (isChroma(set)) {
    return set;
  }

  if (!Array.isArray(set)) {
    return "";
  }

  var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  set.map(chr).forEach(function (i) {
    b[i] = 1;
  });
  return b.join("");
}

var all = null;
/**
 * Get a list of all possible chromas (all possible scales)
 * More information: http://allthescales.org/
 * @return {Array} an array of possible chromas from '10000000000' to '11111111111'
 *
 */

function chromas(n) {
  all = all || (0, _tonalArray.range)(2048, 4095).map(function (n) {
    return n.toString(2);
  });
  return typeof n === "number" ? all.filter(function (chroma) {
    return clen(chroma) === n;
  }) : all.slice();
}
/**
 * Given a a list of notes or a pcset chroma, produce the rotations
 * of the chroma discarding the ones that starts with "0"
 *
 * This is used, for example, to get all the modes of a scale.
 *
 * @param {Array|String} set - the list of notes or pitchChr of the set
 * @param {Boolean} normalize - (Optional, true by default) remove all
 * the rotations that starts with "0"
 * @return {Array<String>} an array with all the modes of the chroma
 *
 * @example
 * PcSet.modes(["C", "D", "E"]).map(PcSet.intervals)
 */


function modes(set, normalize) {
  normalize = normalize !== false;
  var binary = chroma(set).split("");
  return (0, _tonalArray.compact)(binary.map(function (_, i) {
    var r = (0, _tonalArray.rotate)(i, binary);
    return normalize && r[0] === "0" ? null : r.join("");
  }));
}

var REGEX = /^[01]{12}$/;
/**
 * Test if the given string is a pitch class set chroma.
 * @param {string} chroma - the pitch class set chroma
 * @return {Boolean} true if its a valid pcset chroma
 * @example
 * PcSet.isChroma("101010101010") // => true
 * PcSet.isChroma("101001") // => false
 */

function isChroma(set) {
  return REGEX.test(set);
}

var IVLS = "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M".split(" ");
/**
 * Given a pcset (notes or chroma) return it"s intervals
 * @param {String|Array} pcset - the pitch class set (notes or chroma)
 * @return {Array} intervals or empty array if not valid pcset
 * @example
 * PcSet.intervals("1010100000000") => ["1P", "2M", "3M"]
 */

function intervals(set) {
  if (!isChroma(set)) {
    return [];
  }

  return (0, _tonalArray.compact)(set.split("").map(function (d, i) {
    return d === "1" ? IVLS[i] : null;
  }));
}
/**
 * Test if two pitch class sets are identical
 *
 * @param {Array|String} set1 - one of the pitch class sets
 * @param {Array|String} set2 - the other pitch class set
 * @return {Boolean} true if they are equal
 * @example
 * PcSet.isEqual(["c2", "d3"], ["c5", "d2"]) // => true
 */


function isEqual(s1, s2) {
  if (arguments.length === 1) {
    return function (s) {
      return isEqual(s1, s);
    };
  }

  return chroma(s1) === chroma(s2);
}
/**
 * Create a function that test if a collection of notes is a
 * subset of a given set
 *
 * The function can be partially applied
 *
 * @param {Array|String} set - an array of notes or a chroma set string to test against
 * @param {Array|String} notes - an array of notes or a chroma set
 * @return {boolean} true if notes is a subset of set, false otherwise
 * @example
 * const inCMajor = PcSet.isSubsetOf(["C", "E", "G"])
 * inCMajor(["e6", "c4"]) // => true
 * inCMajor(["e6", "c4", "d3"]) // => false
 */


function isSubsetOf(set, notes) {
  if (arguments.length > 1) {
    return isSubsetOf(set)(notes);
  }

  set = pcsetNum(set);
  return function (notes) {
    notes = pcsetNum(notes);
    return notes !== set && (notes & set) === notes;
  };
}
/**
 * Create a function that test if a collectio of notes is a
 * superset of a given set (it contains all notes and at least one more)
 *
 * @param {Array|String} set - an array of notes or a chroma set string to test against
 * @param {Array|String} notes - an array of notes or a chroma set
 * @return {boolean} true if notes is a superset of set, false otherwise
 * @example
 * const extendsCMajor = PcSet.isSupersetOf(["C", "E", "G"])
 * extendsCMajor(["e6", "a", "c4", "g2"]) // => true
 * extendsCMajor(["c6", "e4", "g3"]) // => false
 */


function isSupersetOf(set, notes) {
  if (arguments.length > 1) {
    return isSupersetOf(set)(notes);
  }

  set = pcsetNum(set);
  return function (notes) {
    notes = pcsetNum(notes);
    return notes !== set && (notes | set) === notes;
  };
}
/**
 * Test if a given pitch class set includes a note
 * @param {Array|String} set - the base set to test against
 * @param {String|Pitch} note - the note to test
 * @return {Boolean} true if the note is included in the pcset
 * @example
 * PcSet.includes(["C", "D", "E"], "C4") // => true
 * PcSet.includes(["C", "D", "E"], "C#4") // => false
 */


function includes(set, note) {
  if (arguments.length > 1) {
    return includes(set)(note);
  }

  set = chroma(set);
  return function (note) {
    return set[chr(note)] === "1";
  };
}
/**
 * Filter a list with a pitch class set
 *
 * @param {Array|String} set - the pitch class set notes
 * @param {Array|String} notes - the note list to be filtered
 * @return {Array} the filtered notes
 *
 * @example
 * PcSet.filter(["C", "D", "E"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "d2", "c3", "d3" ])
 * PcSet.filter(["C2"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "c3" ])
 */


function filter(set, notes) {
  if (arguments.length === 1) {
    return function (n) {
      return filter(set, n);
    };
  }

  return notes.filter(includes(set));
}
},{"tonal-note":"../node_modules/tonal-note/build/es6.js","tonal-interval":"../node_modules/tonal-interval/build/es6.js","tonal-array":"../node_modules/tonal-array/build/es6.js"}],"../node_modules/tonal-dictionary/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pcset = exports.chord = exports.scale = exports.combine = exports.dictionary = void 0;

var _scales = _interopRequireDefault(require("./data/scales.json"));

var _chords = _interopRequireDefault(require("./data/chords.json"));

var _tonalPcset = require("tonal-pcset");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-dictionary.svg)](https://www.npmjs.com/package/tonal-dictionary)
 *
 * `tonal-dictionary` contains a dictionary of musical scales and chords
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Dictionary from "tonal-dictionary"
 * // es5
 * const Dictionary = require("tonal-dictionary")
 *
 * @example
 * Dictionary.chord("Maj7") // => ["1P", "3M", "5P", "7M"]
 *
 * @module Dictionary
 */
var dictionary = function (raw) {
  var keys = Object.keys(raw).sort();
  var data = [];
  var index = [];

  var add = function (name, ivls, chroma) {
    data[name] = ivls;
    index[chroma] = index[chroma] || [];
    index[chroma].push(name);
  };

  keys.forEach(function (key) {
    var ivls = raw[key][0].split(" ");
    var alias = raw[key][1];
    var chr = (0, _tonalPcset.chroma)(ivls);
    add(key, ivls, chr);

    if (alias) {
      alias.forEach(function (a) {
        return add(a, ivls, chr);
      });
    }
  });
  var allKeys = Object.keys(data).sort();

  var dict = function (name) {
    return data[name];
  };

  dict.names = function (p) {
    if (typeof p === "string") {
      return (index[p] || []).slice();
    } else {
      return (p === true ? allKeys : keys).slice();
    }
  };

  return dict;
};

exports.dictionary = dictionary;

var combine = function (a, b) {
  var dict = function (name) {
    return a(name) || b(name);
  };

  dict.names = function (p) {
    return a.names(p).concat(b.names(p));
  };

  return dict;
};
/**
 * A dictionary of scales: a function that given a scale name (without tonic)
 * returns an array of intervals
 *
 * @function
 * @param {string} name
 * @return {Array} intervals
 * @example
 * import { scale } from "tonal-dictionary"
 * scale("major") // => ["1P", "2M", ...]
 * scale.names(); // => ["major", ...]
 */


exports.combine = combine;
var scale = dictionary(_scales.default);
/**
 * A dictionary of chords: a function that given a chord type
 * returns an array of intervals
 *
 * @function
 * @param {string} type
 * @return {Array} intervals
 * @example
 * import { chord } from "tonal-dictionary"
 * chord("Maj7") // => ["1P", "3M", ...]
 * chord.names(); // => ["Maj3", ...]
 */

exports.scale = scale;
var chord = dictionary(_chords.default);
exports.chord = chord;
var pcset = combine(scale, chord);
exports.pcset = pcset;
},{"./data/scales.json":"../node_modules/tonal-dictionary/build/data/scales.json","./data/chords.json":"../node_modules/tonal-dictionary/build/data/chords.json","tonal-pcset":"../node_modules/tonal-pcset/build/es6.js"}],"../node_modules/tonal-scale/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notes = notes;
exports.exists = exists;
exports.tokenize = tokenize;
exports.subsets = exports.supersets = exports.toScale = exports.chords = exports.modeNames = exports.intervals = exports.names = exports.props = void 0;

var _tonalNote = require("tonal-note");

var _tonalPcset = require("tonal-pcset");

var _tonalDistance = require("tonal-distance");

var _tonalDictionary = require("tonal-dictionary");

var _tonalArray = require("tonal-array");

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-scale.svg?style=flat-square)](https://www.npmjs.com/package/tonal-scale)
 *
 * A scale is a collection of pitches in ascending or descending order.
 *
 * This module provides functions to get and manipulate scales.
 *
 * @example
 * // es6
 * import * as Scale from "tonal-scale"
 * // es5
 * const Scale = require("tonal-scale");
 *
 * @example
 * Scale.notes("Ab bebop") // => [ "Ab", "Bb", "C", "Db", "Eb", "F", "Gb", "G" ]
 * Scale.names() => ["major", "minor", ...]
 * @module Scale
 */
var NO_SCALE = Object.freeze({
  name: null,
  intervals: [],
  names: [],
  chroma: null,
  setnum: null
});

var properties = function (name) {
  var intervals = (0, _tonalDictionary.scale)(name);

  if (!intervals) {
    return NO_SCALE;
  }

  var s = {
    intervals: intervals,
    name: name
  };
  s.chroma = (0, _tonalPcset.chroma)(intervals);
  s.setnum = parseInt(s.chroma, 2);
  s.names = _tonalDictionary.scale.names(s.chroma);
  return Object.freeze(s);
};

var memoize = function (fn, cache) {
  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
};
/**
 * Get scale properties. It returns an object with:
 * - name: the scale name
 * - names: a list with all possible names (includes the current)
 * - intervals: an array with the scale intervals
 * - chroma:  scale croma (see pcset)
 * - setnum: scale chroma number
 *
 * @function
 * @param {string} name - the scale name (without tonic)
 * @return {Object}
 */


var props = memoize(properties, {});
/**
 * Return the available scale names
 *
 * @function
 * @param {boolean} [aliases=false] - true to include aliases
 * @return {Array} the scale names
 *
 * @example
 * Scale.names() // => ["maj7", ...]
 */

exports.props = props;
var names = _tonalDictionary.scale.names;
/**
 * Given a scale name, return its intervals. The name can be the type and
 * optionally the tonic (which is ignored)
 *
 * It retruns an empty array when no scale found
 *
 * @function
 * @param {string} name - the scale name (tonic and type, tonic is optional)
 * @return {Array<string>} the scale intervals if is a known scale or an empty
 * array if no scale found
 * @example
 * Scale.intervals("major") // => [ "1P", "2M", "3M", "4P", "5P", "6M", "7M" ]
 */

exports.names = names;

var intervals = function (name) {
  var p = tokenize(name);
  return props(p[1]).intervals;
};
/**
 * Get the notes (pitch classes) of a scale.
 *
 * Note that it always returns an array, and the values are only pitch classes.
 *
 * @function
 * @param {string} tonic
 * @param {string} nameOrTonic - the scale name or tonic (if 2nd param)
 * @param {string} [name] - the scale name without tonic
 * @return {Array} a pitch classes array
 *
 * @example
 * Scale.notes("C", "major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("C major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("C4", "major") // => [ "C", "D", "E", "F", "G", "A", "B" ]
 * Scale.notes("A4", "no-scale") // => []
 * Scale.notes("blah", "major") // => []
 */


exports.intervals = intervals;

function notes(nameOrTonic, name) {
  var p = tokenize(nameOrTonic);
  name = name || p[1];
  return intervals(name).map((0, _tonalDistance.transpose)(p[0]));
}
/**
 * Check if the given name is a known scale from the scales dictionary
 *
 * @function
 * @param {string} name - the scale name
 * @return {Boolean}
 */


function exists(name) {
  var p = tokenize(name);
  return (0, _tonalDictionary.scale)(p[1]) !== undefined;
}
/**
 * Given a string with a scale name and (optionally) a tonic, split
 * that components.
 *
 * It retuns an array with the form [ name, tonic ] where tonic can be a
 * note name or null and name can be any arbitrary string
 * (this function doesn"t check if that scale name exists)
 *
 * @function
 * @param {string} name - the scale name
 * @return {Array} an array [tonic, name]
 * @example
 * Scale.tokenize("C mixolydean") // => ["C", "mixolydean"]
 * Scale.tokenize("anything is valid") // => ["", "anything is valid"]
 * Scale.tokenize() // => ["", ""]
 */


function tokenize(str) {
  if (typeof str !== "string") {
    return ["", ""];
  }

  var i = str.indexOf(" ");
  var tonic = (0, _tonalNote.name)(str.substring(0, i)) || (0, _tonalNote.name)(str) || "";
  var name = tonic !== "" ? str.substring(tonic.length + 1) : str;
  return [tonic, name.length ? name : ""];
}
/**
 * Find mode names of a scale
 *
 * @function
 * @param {string} name - scale name
 * @example
 * Scale.modeNames("C pentatonic") // => [
 *   ["C", "major pentatonic"],
 *   ["D", "egyptian"],
 *   ["E", "malkos raga"],
 *   ["G", "ritusen"],
 *   ["A", "minor pentatonic"]
 * ]
 */


var modeNames = function (name) {
  var ivls = intervals(name);
  var tonics = notes(name);
  return (0, _tonalPcset.modes)(ivls).map(function (chroma, i) {
    var name = _tonalDictionary.scale.names(chroma)[0];

    if (name) {
      return [tonics[i] || ivls[i], name];
    }
  }).filter(function (x) {
    return x;
  });
};
/**
 * Get all chords that fits a given scale
 *
 * @function
 * @param {string} name - the scale name
 * @return {Array<string>} - the chord names
 *
 * @example
 * Scale.chords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]
 */


exports.modeNames = modeNames;

var chords = function (name) {
  var inScale = (0, _tonalPcset.isSubsetOf)(intervals(name));
  return _tonalDictionary.chord.names().filter(function (name) {
    return inScale((0, _tonalDictionary.chord)(name));
  });
};
/**
 * Given an array of notes, return the scale: a pitch class set starting from
 * the first note of the array
 *
 * @function
 * @param {Array} notes
 * @return {Array}
 * @example
 * Scale.toScale(['C4', 'c3', 'C5', 'C4', 'c4']) // => ["C"]
 * Scale.toScale(['D4', 'c#5', 'A5', 'F#6']) // => ["D", "F#", "A", "C#"]
 */


exports.chords = chords;

var toScale = function (notes) {
  var pcset = (0, _tonalArray.compact)(notes.map(_tonalNote.pc));

  if (!pcset.length) {
    return pcset;
  }

  var tonic = pcset[0];
  var scale = (0, _tonalArray.unique)(pcset);
  return (0, _tonalArray.rotate)(scale.indexOf(tonic), scale);
};
/**
 * Get all scales names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of scale names
 * @example
 * Scale.supersets("major") // => ["bebop", "bebop dominant", "bebop major", "chromatic", "ichikosucho"]
 */


exports.toScale = toScale;

var supersets = function (name) {
  if (!intervals(name).length) {
    return [];
  }

  var isSuperset = (0, _tonalPcset.isSupersetOf)(intervals(name));
  return _tonalDictionary.scale.names().filter(function (name) {
    return isSuperset((0, _tonalDictionary.scale)(name));
  });
};
/**
 * Find all scales names that are a subset of the given one
 * (has less notes but all from the given scale)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of scale names
 *
 * @example
 * Scale.subsets("major") // => ["ionian pentatonic", "major pentatonic", "ritusen"]
 */


exports.supersets = supersets;

var subsets = function (name) {
  var isSubset = (0, _tonalPcset.isSubsetOf)(intervals(name));
  return _tonalDictionary.scale.names().filter(function (name) {
    return isSubset((0, _tonalDictionary.scale)(name));
  });
};

exports.subsets = subsets;
},{"tonal-note":"../node_modules/tonal-note/build/es6.js","tonal-pcset":"../node_modules/tonal-pcset/build/es6.js","tonal-distance":"../node_modules/tonal-distance/build/es6.js","tonal-dictionary":"../node_modules/tonal-dictionary/build/es6.js","tonal-array":"../node_modules/tonal-array/build/es6.js"}],"../node_modules/tonal-chord/build/es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notes = notes;
exports.tokenize = tokenize;
exports.subsets = exports.supersets = exports.exists = exports.intervals = exports.props = exports.names = void 0;

var _tonalNote = require("tonal-note");

var _tonalDistance = require("tonal-distance");

var _tonalDictionary = require("tonal-dictionary");

var _tonalPcset = require("tonal-pcset");

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-chord.svg)](https://www.npmjs.com/package/tonal-chord)
 * [![tonal](https://img.shields.io/badge/tonal-chord-yellow.svg)](https://www.npmjs.com/browse/keyword/tonal)
 *
 * `tonal-chord` is a collection of functions to manipulate musical chords
 *
 * This is part of [tonal](https://www.npmjs.com/package/tonal) music theory library.
 *
 * @example
 * // es6
 * import * as Chord from "tonal-chord"
 * // es5
 * const Chord = require("tonal-chord")
 *
 * @example
 * Chord.notes("CMaj7") // => ["C", "E", "G", "B"]
 *
 * @module Chord
 */

/**
 * Return the available chord names
 *
 * @function
 * @param {boolean} aliases - true to include aliases
 * @return {Array} the chord names
 *
 * @example
 * Chord.names() // => ["maj7", ...]
 */
var names = _tonalDictionary.chord.names;
exports.names = names;
var NO_CHORD = Object.freeze({
  name: null,
  names: [],
  intervals: [],
  chroma: null,
  setnum: null
});

var properties = function (name) {
  var intervals = (0, _tonalDictionary.chord)(name);

  if (!intervals) {
    return NO_CHORD;
  }

  var s = {
    intervals: intervals,
    name: name
  };
  s.chroma = (0, _tonalPcset.chroma)(intervals);
  s.setnum = parseInt(s.chroma, 2);
  s.names = _tonalDictionary.chord.names(s.chroma);
  return s;
};

var memo = function (fn, cache) {
  if (cache === void 0) cache = {};
  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
};
/**
 * Get chord properties. It returns an object with:
 *
 * - name: the chord name
 * - names: a list with all possible names (includes the current)
 * - intervals: an array with the chord intervals
 * - chroma:  chord croma (see pcset)
 * - setnum: chord chroma number
 *
 * @function
 * @param {string} name - the chord name (without tonic)
 * @return {Object} an object with the properties or a object with all properties
 * set to null if not valid chord name
 */


var props = memo(properties);
/**
 * Get chord intervals. It always returns an array
 *
 * @function
 * @param {string} name - the chord name (optionally a tonic and type)
 * @return {Array<String>} a list of intervals or null if the type is not known
 */

exports.props = props;

var intervals = function (name) {
  return props(tokenize(name)[1]).intervals;
};
/**
 * Get the chord notes of a chord. This function accepts either a chord name
 * (for example: "Cmaj7") or a list of notes.
 *
 * It always returns an array, even if the chord is not found.
 *
 * @function
 * @param {string} nameOrTonic - name of the chord or the tonic (if the second parameter is present)
 * @param {string} [name] - (Optional) name if the first parameter is the tonic
 * @return {Array} an array of notes or an empty array
 *
 * @example
 * Chord.notes("Cmaj7") // => ["C", "E", "G", "B"]
 * Chord.notes("C", "maj7") // => ["C", "E", "G", "B"]
 */


exports.intervals = intervals;

function notes(nameOrTonic, name) {
  if (name) {
    return props(name).intervals.map((0, _tonalDistance.transpose)(nameOrTonic));
  }

  var ref = tokenize(nameOrTonic);
  var tonic = ref[0];
  var type = ref[1];
  return props(type).intervals.map((0, _tonalDistance.transpose)(tonic));
}
/**
 * Check if a given name correspond to a chord in the dictionary
 *
 * @function
 * @param {string} name
 * @return {Boolean}
 * @example
 * Chord.exists("CMaj7") // => true
 * Chord.exists("Maj7") // => true
 * Chord.exists("Ablah") // => false
 */


var exists = function (name) {
  return (0, _tonalDictionary.chord)(tokenize(name)[1]) !== undefined;
};
/**
 * Get all chords names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of chord names
 */


exports.exists = exists;

var supersets = function (name) {
  if (!intervals(name).length) {
    return [];
  }

  var isSuperset = (0, _tonalPcset.isSupersetOf)(intervals(name));
  return _tonalDictionary.chord.names().filter(function (name) {
    return isSuperset((0, _tonalDictionary.chord)(name));
  });
};
/**
 * Find all chords names that are a subset of the given one
 * (has less notes but all from the given chord)
 *
 * @function
 * @param {string} name
 * @return {Array} a list of chord names
 */


exports.supersets = supersets;

var subsets = function (name) {
  var isSubset = (0, _tonalPcset.isSubsetOf)(intervals(name));
  return _tonalDictionary.chord.names().filter(function (name) {
    return isSubset((0, _tonalDictionary.chord)(name));
  });
}; // 6, 64, 7, 9, 11 and 13 are consider part of the chord
// (see https://github.com/danigb/tonal/issues/55)


exports.subsets = subsets;
var NUM_TYPES = /^(6|64|7|9|11|13)$/;
/**
 * Tokenize a chord name. It returns an array with the tonic and chord type
 * If not tonic is found, all the name is considered the chord name.
 *
 * This function does NOT check if the chord type exists or not. It only tries
 * to split the tonic and chord type.
 *
 * @function
 * @param {string} name - the chord name
 * @return {Array} an array with [tonic, type]
 * @example
 * Chord.tokenize("Cmaj7") // => [ "C", "maj7" ]
 * Chord.tokenize("C7") // => [ "C", "7" ]
 * Chord.tokenize("mMaj7") // => [ "", "mMaj7" ]
 * Chord.tokenize("Cnonsense") // => [ "C", "nonsense" ]
 */

function tokenize(name) {
  var p = (0, _tonalNote.tokenize)(name);

  if (p[0] === "") {
    return ["", name];
  } // aug is augmented (see https://github.com/danigb/tonal/issues/55)


  if (p[0] === "A" && p[3] === "ug") {
    return ["", "aug"];
  }

  if (NUM_TYPES.test(p[2])) {
    return [p[0] + p[1], p[2] + p[3]];
  } else {
    return [p[0] + p[1] + p[2], p[3]];
  }
}
},{"tonal-note":"../node_modules/tonal-note/build/es6.js","tonal-distance":"../node_modules/tonal-distance/build/es6.js","tonal-dictionary":"../node_modules/tonal-dictionary/build/es6.js","tonal-pcset":"../node_modules/tonal-pcset/build/es6.js"}],"../node_modules/tonal/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PcSet = exports.Chord = exports.Scale = exports.Dictionary = exports.Distance = exports.Interval = exports.Note = exports.Array = exports.scale = exports.chord = exports.freq = exports.midi = exports.note = exports.interval = exports.transpose = void 0;

var Array = _interopRequireWildcard(require("tonal-array"));

exports.Array = Array;

var Note = _interopRequireWildcard(require("tonal-note"));

exports.Note = Note;

var Interval = _interopRequireWildcard(require("tonal-interval"));

exports.Interval = Interval;

var Distance = _interopRequireWildcard(require("tonal-distance"));

exports.Distance = Distance;

var Dictionary = _interopRequireWildcard(require("tonal-dictionary"));

exports.Dictionary = Dictionary;

var Scale = _interopRequireWildcard(require("tonal-scale"));

exports.Scale = Scale;

var Chord = _interopRequireWildcard(require("tonal-chord"));

exports.Chord = Chord;

var PcSet = _interopRequireWildcard(require("tonal-pcset"));

exports.PcSet = PcSet;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * [![npm version](https://img.shields.io/npm/v/tonal-key.svg?style=flat-square)](https://www.npmjs.com/package/tonal-key)
 *
 * The `Tonal` module is a facade to the rest of the modules. They are namespaced,
 * so for example to use `pc` function from `tonal-note` you have to write:
 * `Tonal.Note.pc`
 *
 * It exports the following modules:
 * - Note
 * - Interval
 * - Distance
 * - Scale
 * - Chord
 * - PcSet
 *
 * Additionally this facade exports some functions without namespace (see "Methods" below)
 *
 * @example
 * // es6 modules
 * import * as Tonal from "tonal"
 * Tonal.Note.name("cx") // => "C##"
 *
 * @example
 * import { Note } from "tonal"
 * Note.name("bb") // => "Bb"
 *
 * @example
 * // es5 node modules
 * var Tonal = require("tonal");
 * Tonal.Distance.transpose(Tonal.Note.pc("C#2"), "M3") // => "E#"
 * Tonal.Chord.notes("Dmaj7") // => ["D", "F#", "A", "C#"]
 *
 * @module Tonal
 */

/**
 * Transpose a note by an interval
 * @function
 * @param {string} note
 * @param {string} interval
 * @return {string} the transported note
 * @see Distance.transpose
 */
const transpose = Distance.transpose;
/**
 * Get the interval from two notes
 * @function
 * @param {string} from
 * @param {string} to
 * @return {string} the interval in reverse shorthand notation
 * @see Distance.interval
 */

exports.transpose = transpose;
const interval = Distance.interval;
/**
 * Get note properties
 * @function
 * @param {string} note - the note name
 * @return {Object}
 * @see Note.props
 * @example
 * Tonal.note("A4").chroma // => 9
 */

exports.interval = interval;
const note = Note.props;
/**
 * Get midi note number
 * @function
 * @param {string} note
 * @return {Number}
 * @see Note.midi
 * @example
 * Tonal.midi("A4") // => 49
 */

exports.note = note;
const midi = Note.midi;
/**
 * Get note frequency using equal tempered tuning at 440
 * @function
 * @param {string} note
 * @return {Number}
 * @see Note.freq
 * @example
 * Tonal.freq("A4") // => 440
 */

exports.midi = midi;
const freq = Note.freq;
/**
 * Get intervals from a chord type
 * @function
 * @param {string} type - the chord type (no tonic)
 * @return {Array} an array of intervals or undefined if the chord type is not known
 * @see Dictionary.chord
 * @example
 * Tonal.chord("m7b5") // => ["1P", "3m", "5d", "7m"]
 */

exports.freq = freq;
const chord = Dictionary.chord;
/**
 * Get intervals from scale name
 * @function
 * @param {string} name - the scale name (without tonic)
 * @return {Array} an array of intervals or undefiend if the scale is not kown
 * @example
 * Tonal.scale("major") // => ["1P", "2M", "3M"...]
 */

exports.chord = chord;
const scale = Dictionary.scale;
exports.scale = scale;
},{"tonal-array":"../node_modules/tonal-array/build/es6.js","tonal-note":"../node_modules/tonal-note/build/es6.js","tonal-interval":"../node_modules/tonal-interval/build/es6.js","tonal-distance":"../node_modules/tonal-distance/build/es6.js","tonal-dictionary":"../node_modules/tonal-dictionary/build/es6.js","tonal-scale":"../node_modules/tonal-scale/build/es6.js","tonal-chord":"../node_modules/tonal-chord/build/es6.js","tonal-pcset":"../node_modules/tonal-pcset/build/es6.js"}],"Player.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tone_1 = __importDefault(require("tone"));

var tonal_1 = require("tonal");

var active, stopNext, playNext, drawLoop;

var Player =
/** @class */
function () {
  function Player() {}
  /* instruments: Instruments, drawCallback?: (time: number) => any, grain = 1 / 30 */


  Player.play = function (events, options) {
    var _a = __assign({
      grain: 1 / 30
    }, options),
        draw = _a.draw,
        grain = _a.grain;

    Player.startDrawing(draw, grain);

    if (tone_1.default.Transport.state === 'paused') {
      tone_1.default.Transport.start();
      return;
    }

    playNext = events;

    if (active) {
      stopNext = true;
      console.log('already started... wait for loop end');
      return;
    }

    Player.playNow(0, options);
  };

  Player.startDrawing = function (callback, grain) {
    if (grain === void 0) {
      grain = 1 / 30;
    }

    if (callback) {
      drawLoop = new tone_1.default.Loop(function (time) {
        tone_1.default.Draw.schedule(function () {
          return callback(tone_1.default.Transport.seconds);
        }, time);
      }, grain).start(0);
    }
  };

  Player.getInstrumentSymbols = function (instruments) {
    return Object.keys(instruments).filter(function (key) {
      return !!instruments[key].customSymbols;
    }).reduce(function (symbols, key) {
      return symbols.concat(instruments[key].customSymbols || []);
    }, []);
  };

  Player.playEvents = function (events, options) {
    options = __assign({
      customSymbols: [],
      restSymbols: ['~', 'r']
    }, options);
    var length = options.length,
        instruments = options.instruments,
        time = options.time,
        restSymbols = options.restSymbols,
        customSymbols = options.customSymbols;

    if (!instruments) {
      instruments = {
        default: Player.defaultSynth()
      };
    }

    customSymbols = (customSymbols || []).concat(Player.getInstrumentSymbols(instruments));
    var ahead = 0.06;
    events.push({
      time: length - ahead,
      type: 'loopmark'
    });
    var part = new tone_1.default.Part(function (t, e) {
      if (e.type === 'loopmark') {
        if (stopNext) {
          part.stop(t);
          tone_1.default.Transport.cancel();
          stopNext = false;
        }

        if (playNext) {
          Player.playNow(0, options);
        }

        return;
      }

      var value = e.value || e.m;

      if (!customSymbols.includes(value) && !tonal_1.Note.midi(value)) {
        if (!!value && !restSymbols.includes(value)) {
          console.warn("unknown symbol " + value);
        }

        return;
      }

      if (e.velocity === 0) {
        return;
      }

      var instrument = e.instrument && instruments[e.instrument] ? instruments[e.instrument] : instruments.standard;

      if (e.instrument && !instruments[e.instrument]) {
        console.warn("instrument \"" + e.instrument + "\" not found. falling back to standard instrument");
      }

      if (!instrument) {
        console.warn('standard instrument not found! cannot play ', e);
      }

      instrument.triggerAttackRelease(value, e.duration, t, e.velocity || 0.9);
    }, events).start(time || '+0');
    part.loop = true;
    part.loopEnd = length;

    if (tone_1.default.Transport.state !== 'started') {
      tone_1.default.Transport.start('+0.05');
    }
  };

  Player.playNow = function (time, options) {
    active = playNext;
    playNext = false;
    stopNext = false;
    Player.playEvents(active.p, __assign({
      length: active.seconds,
      time: time
    }, options));
  };

  Player.stopDrawing = function () {
    if (drawLoop) {
      drawLoop.stop();
    }
  };

  Player.stop = function () {
    playNext = false;
    stopNext = false;
    active = false;
    Player.stopDrawing();
    tone_1.default.Transport.cancel();
    tone_1.default.Transport.stop();
  };

  Player.pause = function () {
    tone_1.default.Transport.pause();
    Player.stopDrawing();
  };

  Player.defaultSynth = function () {
    return new tone_1.default.PolySynth({
      polyphony: 20,
      volume: -12,
      detune: 0,
      voice: tone_1.default.Synth
    }).set({
      envelope: {
        attack: 0.02,
        decay: 0.04,
        sustain: 0.5,
        release: 0.15
      },
      oscillator: {
        type: 'amsine'
      }
    }).toMaster();
  };

  return Player;
}();

exports.Player = Player;
},{"tone":"../node_modules/tone/build/Tone.js","tonal":"../node_modules/tonal/index.js"}],"Viz.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tonal_1 = require("tonal");

var Player_1 = require("./Player");

var ns = "http://www.w3.org/2000/svg";
var renderStart = 0;
var debounce = 200;

var Viz =
/** @class */
function () {
  function Viz() {}

  Viz.instrumentRange = function (events) {};

  Viz.pitchRange = function (events) {
    return events.reduce(function (range, event) {
      return [!!tonal_1.Note.midi(event.m) && (!range[0] || tonal_1.Note.midi(event.m) < tonal_1.Note.midi(range[0])) ? event.m : range[0], !!tonal_1.Note.midi(event.m) && (!range[1] || tonal_1.Note.midi(event.m) > tonal_1.Note.midi(range[1])) ? event.m : range[1]];
    }, []);
  };

  Viz.pianoRoll = function (output, id, options) {
    if (options === void 0) {
      options = {};
    }

    var _a = __assign({
      position: 0,
      flip: false,
      head: 0.5
    }, options),
        position = _a.position,
        flip = _a.flip,
        head = _a.head,
        instruments = _a.instruments;

    var el = document.getElementById(id);
    /* if (Date.now() - renderStart < debounce) {
      return;
    } */

    renderStart = Date.now();

    var _b = output.p.reduce(function (r, e) {
      if (typeof e.m === 'string') {
        // !!Note.midi(e.m)
        r.allEvents.push(e);
      }

      r.levels = Math.max(e.path ? e.path.length : 0, r.levels);

      if (e['instrument'] && !r.instrumentKeys.includes(e['instrument'])) {
        r.instrumentKeys.push(e['instrument']);
      }

      return r;
    }, {
      levels: 0,
      allEvents: [],
      instrumentKeys: []
    }),
        levels = _b.levels,
        allEvents = _b.allEvents,
        instrumentKeys = _b.instrumentKeys;

    var symbols = [];

    if (instruments) {
      symbols = Player_1.Player.getInstrumentSymbols(instrumentKeys.map(function (k) {
        return instruments[k];
      })).filter(function (i) {
        return !!i;
      });
    }

    var pitchEvents = allEvents.filter(function (e) {
      return !!tonal_1.Note.midi(e.m);
    });
    var instrumentEvents = allEvents.filter(function (e) {
      return symbols.includes(e.m);
    });
    var usedSymbols = symbols.filter(function (s) {
      return !!instrumentEvents.find(function (e) {
        return e.m === s;
      });
    });
    /* const levelColor = (level, velocity = 1) => `hsla(257,${level / levels * 100}%,74%, ${velocity})`; */

    /* const levelColor = (level, velocity = 1) => `hsla(257,${level / levels * 100}%,74%, ${level / levels})`; */

    var levelColor = function levelColor(level, velocity) {
      if (velocity === void 0) {
        velocity = 1;
      }

      return "hsla(" + level / levels * 100 + "," + level / levels * 100 + "%,74%, " + (1 - level / levels) + ")";
    };

    var blockColor = function blockColor(block, setup) {
      var params = {
        level: function level(b) {
          return b.path.length / levels;
        },
        velocity: function velocity(b) {
          return b.velocity;
        }
      };

      var parse = function parse(v, f) {
        return Math.round((Object.keys(params).includes(setup[v]) ? params[setup[v]](block) * f : setup[v]) * 10) / 10;
      };

      return "hsla(" + parse('h', 360) + "," + parse('s', 100) + "%," + parse('l', 100) + "%, " + parse('a', 1) + ")";
    };

    var range = Viz.pitchRange(pitchEvents);
    var pitchCount = tonal_1.Note.midi(range[1]) - tonal_1.Note.midi(range[0]) + 1;
    var rows = pitchCount + symbols.length;
    var vp = [el.clientWidth, el.clientHeight];
    var pps, ppp;

    if (!flip) {
      pps = Math.max(vp[0] / output.seconds, 100); // pixels per second
      // ppp = vp[1] / pitchCount; // pixels per pitch

      ppp = vp[1] / rows; // pixels per pitch
    } else {
      pps = Math.max(vp[1] / output.seconds, 100); // pixels per second
      // ppp = vp[0] / pitchCount; // pixels per pitch

      ppp = vp[0] / rows; // pixels per pitch
    }

    var pitchPosition = function pitchPosition(pitch) {
      return (tonal_1.Note.midi(range[1]) - tonal_1.Note.midi(pitch)) * ppp;
    };

    var svg = document.createElementNS(ns, "svg");
    var blocks = document.createElementNS(ns, "g");
    var pitches = document.createElementNS(ns, "g");
    /* svg.setAttribute("width", vp[0] + 'px');
    svg.setAttribute("height", vp[1] + 'px'); */

    svg.setAttribute("viewBox", "-" + head * vp[0] + " 0 " + vp[0] + " " + vp[1]);
    output.p = output.p.filter(function (e) {
      return !!e.path;
    }).sort(function (a, b) {
      return b.path.length - a.path.length;
    });
    output.p.filter(function (e) {
      return !!e.block || !!tonal_1.Note.midi(e.m);
    }).forEach(function (event) {
      var time = event.time,
          duration = event.duration,
          m = event.m;
      var width,
          height,
          x,
          y,
          totalSize = 1,
          pitchRange = [m, m],
          fill = "rgba(183, 223, 69, " + event.velocity + ")",
          stroke = 'rgb(37, 37, 37)';

      if (!!event.block) {
        /* if (event.path.length === 1) {
          return;
        } */
        var blockPitches = output.p.filter(function (e) {
          return e.path.length > event.path.length && (':' + e.path.map(function (p) {
            return p.join('.');
          }).join('-')).includes(':' + event.path.map(function (p) {
            return p.join('.');
          }).join('-'));
        }).map(function (p) {
          return __assign({}, p, {
            name: ':' + p.path.map(function (p) {
              return p.join('.');
            }).join('-')
          });
        });
        pitchRange = Viz.pitchRange(blockPitches);
        var customIndices = blockPitches.map(function (e) {
          return symbols.indexOf(e.m);
        });
        var eventSize = customIndices.length ? Math.max.apply(Math, customIndices) - Math.min.apply(Math, customIndices) + 1 : 0;
        var pitchSize = pitchRange.length ? tonal_1.Note.midi(pitchRange[1]) - tonal_1.Note.midi(pitchRange[0]) + 1 : 0;
        totalSize =
        /* eventSize+ */
        pitchSize;
        var color = blockColor(event, {
          h: '257',
          s: 'level',
          l: 'level',
          a: '0.7'
        });
        fill = color;
        stroke = blockColor(event, {
          h: '257',
          s: 'level',
          l: 'level',
          a: '1'
        });
      } else if (!tonal_1.Note.midi(event.m)) {
        return;
      }

      if (!flip) {
        width = duration * pps;
        height = ppp * totalSize;
        x = (time - position) * pps;
        y = pitchPosition(pitchRange[1]) || 0;
        /* if ((x + duration * pps) < 0 || x > vp[0] || y < 0 || y > vp[1]) {
          return;
        } */
      } else {
        width = ppp * totalSize;
        height = duration * pps;
        x = vp[0] - pitchPosition(pitchRange[0]) || 0;
        y = vp[1] - (output.seconds + time - position + duration) % output.seconds * pps;
        /* if (x < 0 || x > vp[0] || (y + duration * pps) < 0 || y > vp[1]) {
          return;
        } */
      }

      var rect = document.createElementNS(ns, "rect");
      var radius = Math.floor(
      /* Math.min( */
      ppp / 2
      /* , 40) */
      );
      rect.setAttribute("width", Math.round(width * 2) / 2 + 'px');
      rect.setAttribute("height", Math.round(height * 2) / 2 + 'px');
      rect.setAttribute("x", Math.round(x * 2) / 2 + 'px');
      rect.setAttribute("y", Math.round(y * 2) / 2 + 'px');
      rect.setAttribute("rx", radius + 'px');
      rect.setAttribute("ry", radius + 'px');
      /* rect.setAttribute("z-index", (!event.block ? levels : event.path.length) + ''); */

      rect.setAttribute("fill", fill);
      rect.setAttribute("style", "stroke: " + stroke + "; stroke-width: " + (!!event.block ? 1 : 1) + "px;z-index:" + (!event.block ? levels : event.path.length));
      /* svg.appendChild(rect); */

      if (!!event.block) {
        blocks.prepend(rect);
      } else {
        pitches.prepend(rect);
      }
    });

    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    var playhead = document.getElementById('playhead') || document.createElementNS(ns, 'line');
    playhead.setAttributeNS(null, 'id', 'playhead');
    playhead.setAttributeNS(null, 'x1', '0');
    playhead.setAttributeNS(null, 'y1', 0 + '');
    playhead.setAttributeNS(null, 'x2', '0');
    playhead.setAttributeNS(null, 'y2', vp[1] + '');
    playhead.setAttributeNS(null, 'style', "stroke:white;stroke-width:2");

    function getLoop(n) {
      if (n === void 0) {
        n = 0;
      }

      var loop = document.createElementNS(ns, "g");
      loop.appendChild(blocks.cloneNode(true));
      loop.appendChild(pitches.cloneNode(true));
      loop.setAttributeNS(null, 'transform', "translate(" + (n * output.seconds * pps + '') + ",0)");
      return loop;
    }

    var before = getLoop(-1);
    svg.appendChild(before);
    var loop = getLoop(0);
    svg.appendChild(loop);
    var after = getLoop(1);
    svg.appendChild(after);
    svg.appendChild(playhead);
    el.appendChild(svg);
    var renderEnd = Date.now();
    var renderTime = renderEnd - renderStart;
    console.log("took " + renderTime + "ms to render");
    return {
      svg: svg,
      el: el,
      pps: pps,
      ppp: ppp,
      flip: flip,
      head: head,
      vp: vp,
      output: output,
      playhead: playhead
    };
  };

  Viz.updatePianoRoll = function (_a, time) {
    var svg = _a.svg,
        el = _a.el,
        pps = _a.pps,
        flip = _a.flip,
        head = _a.head,
        vp = _a.vp,
        output = _a.output,
        playhead = _a.playhead;

    if (!flip) {
      var offsetX = Math.round((time % output.seconds * pps - head * vp[0]) * 2) / 2;
      svg.setAttributeNS(null, 'viewBox', offsetX + " 0 " + el.clientWidth + " " + el.clientHeight);
      playhead.setAttributeNS(null, 'x1', head * vp[0] + offsetX + '');
      playhead.setAttributeNS(null, 'x2', head * vp[0] + offsetX + '');
      playhead.setAttributeNS(null, 'style', "stroke:white;stroke-width:2");
    }
  };

  return Viz;
}();

exports.Viz = Viz;
},{"tonal":"../node_modules/tonal/index.js","./Player":"Player.ts"}],"tutorial/tutorials.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _00repl_md_1 = __importDefault(require("./00repl.md"));

var _01basics_md_1 = __importDefault(require("./01basics.md"));

var _02rhythm_md_1 = __importDefault(require("./02rhythm.md"));

var _03durations_md_1 = __importDefault(require("./03durations.md"));

var _04polyphony_md_1 = __importDefault(require("./04polyphony.md"));

var _05advanced_md_1 = __importDefault(require("./05advanced.md"));

var _06scripting_md_1 = __importDefault(require("./06scripting.md"));

exports.default = [_00repl_md_1.default, _01basics_md_1.default, _02rhythm_md_1.default, _03durations_md_1.default, _04polyphony_md_1.default, _05advanced_md_1.default, _06scripting_md_1.default];
},{"./00repl.md":"tutorial/00repl.md","./01basics.md":"tutorial/01basics.md","./02rhythm.md":"tutorial/02rhythm.md","./03durations.md":"tutorial/03durations.md","./04polyphony.md":"tutorial/04polyphony.md","./05advanced.md":"tutorial/05advanced.md","./06scripting.md":"tutorial/06scripting.md"}],"samples/harp/C1.mp3":[function(require,module,exports) {
module.exports = "/C1.907306e9.mp3";
},{}],"samples/harp/Db1.mp3":[function(require,module,exports) {
module.exports = "/Db1.7b9fab68.mp3";
},{}],"samples/harp/D1.mp3":[function(require,module,exports) {
module.exports = "/D1.a64266eb.mp3";
},{}],"samples/harp/Eb1.mp3":[function(require,module,exports) {
module.exports = "/Eb1.684dcb07.mp3";
},{}],"samples/harp/E1.mp3":[function(require,module,exports) {
module.exports = "/E1.1a928f38.mp3";
},{}],"samples/harp/F1.mp3":[function(require,module,exports) {
module.exports = "/F1.a07c489c.mp3";
},{}],"samples/harp/Gb1.mp3":[function(require,module,exports) {
module.exports = "/Gb1.b2b3dc82.mp3";
},{}],"samples/harp/G1.mp3":[function(require,module,exports) {
module.exports = "/G1.2bec3cf0.mp3";
},{}],"samples/harp/Ab1.mp3":[function(require,module,exports) {
module.exports = "/Ab1.ac24c150.mp3";
},{}],"samples/harp/A1.mp3":[function(require,module,exports) {
module.exports = "/A1.73f09bc2.mp3";
},{}],"samples/harp/Bb1.mp3":[function(require,module,exports) {
module.exports = "/Bb1.1f362051.mp3";
},{}],"samples/harp/B1.mp3":[function(require,module,exports) {
module.exports = "/B1.96b9194d.mp3";
},{}],"samples/harp/C2.mp3":[function(require,module,exports) {
module.exports = "/C2.6b08d6dc.mp3";
},{}],"samples/harp/Db2.mp3":[function(require,module,exports) {
module.exports = "/Db2.c2d3a8fb.mp3";
},{}],"samples/harp/D2.mp3":[function(require,module,exports) {
module.exports = "/D2.efd9408a.mp3";
},{}],"samples/harp/Eb2.mp3":[function(require,module,exports) {
module.exports = "/Eb2.5857b299.mp3";
},{}],"samples/harp/E2.mp3":[function(require,module,exports) {
module.exports = "/E2.18c484e0.mp3";
},{}],"samples/harp/F2.mp3":[function(require,module,exports) {
module.exports = "/F2.01db0e7d.mp3";
},{}],"samples/harp/Gb2.mp3":[function(require,module,exports) {
module.exports = "/Gb2.cea7d9a7.mp3";
},{}],"samples/harp/G2.mp3":[function(require,module,exports) {
module.exports = "/G2.ae875034.mp3";
},{}],"samples/harp/Ab2.mp3":[function(require,module,exports) {
module.exports = "/Ab2.9b47aaf6.mp3";
},{}],"samples/harp/A2.mp3":[function(require,module,exports) {
module.exports = "/A2.c5dcdc4e.mp3";
},{}],"samples/harp/Bb2.mp3":[function(require,module,exports) {
module.exports = "/Bb2.95afdcfb.mp3";
},{}],"samples/harp/B2.mp3":[function(require,module,exports) {
module.exports = "/B2.e2d707cb.mp3";
},{}],"samples/harp/C3.mp3":[function(require,module,exports) {
module.exports = "/C3.68bb9847.mp3";
},{}],"samples/harp/Db3.mp3":[function(require,module,exports) {
module.exports = "/Db3.60105a50.mp3";
},{}],"samples/harp/D3.mp3":[function(require,module,exports) {
module.exports = "/D3.6a069a10.mp3";
},{}],"samples/harp/Eb3.mp3":[function(require,module,exports) {
module.exports = "/Eb3.d4859f28.mp3";
},{}],"samples/harp/E3.mp3":[function(require,module,exports) {
module.exports = "/E3.6b5ba478.mp3";
},{}],"samples/harp/F3.mp3":[function(require,module,exports) {
module.exports = "/F3.b8ed4f4e.mp3";
},{}],"samples/harp/Gb3.mp3":[function(require,module,exports) {
module.exports = "/Gb3.034278c2.mp3";
},{}],"samples/harp/G3.mp3":[function(require,module,exports) {
module.exports = "/G3.fec7b53d.mp3";
},{}],"samples/harp/Ab3.mp3":[function(require,module,exports) {
module.exports = "/Ab3.f0849e50.mp3";
},{}],"samples/harp/A3.mp3":[function(require,module,exports) {
module.exports = "/A3.f81e26fb.mp3";
},{}],"samples/harp/Bb3.mp3":[function(require,module,exports) {
module.exports = "/Bb3.067ccb88.mp3";
},{}],"samples/harp/B3.mp3":[function(require,module,exports) {
module.exports = "/B3.d1629ed2.mp3";
},{}],"samples/harp/C4.mp3":[function(require,module,exports) {
module.exports = "/C4.100caf9b.mp3";
},{}],"samples/harp/Db4.mp3":[function(require,module,exports) {
module.exports = "/Db4.263abb43.mp3";
},{}],"samples/harp/D4.mp3":[function(require,module,exports) {
module.exports = "/D4.43f56cce.mp3";
},{}],"samples/harp/Eb4.mp3":[function(require,module,exports) {
module.exports = "/Eb4.e4bb511c.mp3";
},{}],"samples/harp/E4.mp3":[function(require,module,exports) {
module.exports = "/E4.f9927b53.mp3";
},{}],"samples/harp/F4.mp3":[function(require,module,exports) {
module.exports = "/F4.9c699f1d.mp3";
},{}],"samples/harp/Gb4.mp3":[function(require,module,exports) {
module.exports = "/Gb4.c7c8d2e0.mp3";
},{}],"samples/harp/G4.mp3":[function(require,module,exports) {
module.exports = "/G4.e413c659.mp3";
},{}],"samples/harp/Ab4.mp3":[function(require,module,exports) {
module.exports = "/Ab4.a3657bae.mp3";
},{}],"samples/harp/A4.mp3":[function(require,module,exports) {
module.exports = "/A4.d38447a2.mp3";
},{}],"samples/harp/Bb4.mp3":[function(require,module,exports) {
module.exports = "/Bb4.397d9a65.mp3";
},{}],"samples/harp/B4.mp3":[function(require,module,exports) {
module.exports = "/B4.292d4e6c.mp3";
},{}],"samples/harp/C5.mp3":[function(require,module,exports) {
module.exports = "/C5.1a6dc8de.mp3";
},{}],"samples/harp/Db5.mp3":[function(require,module,exports) {
module.exports = "/Db5.084dbc36.mp3";
},{}],"samples/harp/D5.mp3":[function(require,module,exports) {
module.exports = "/D5.5b657247.mp3";
},{}],"samples/harp/Eb5.mp3":[function(require,module,exports) {
module.exports = "/Eb5.1fa1c233.mp3";
},{}],"samples/harp/E5.mp3":[function(require,module,exports) {
module.exports = "/E5.3c71de9b.mp3";
},{}],"samples/harp/F5.mp3":[function(require,module,exports) {
module.exports = "/F5.5b22349b.mp3";
},{}],"samples/harp/Gb5.mp3":[function(require,module,exports) {
module.exports = "/Gb5.5d124aa3.mp3";
},{}],"samples/harp/G5.mp3":[function(require,module,exports) {
module.exports = "/G5.b3f7defd.mp3";
},{}],"samples/harp/Ab5.mp3":[function(require,module,exports) {
module.exports = "/Ab5.3b555467.mp3";
},{}],"samples/harp/A5.mp3":[function(require,module,exports) {
module.exports = "/A5.058e512d.mp3";
},{}],"samples/harp/Bb5.mp3":[function(require,module,exports) {
module.exports = "/Bb5.23e5379f.mp3";
},{}],"samples/harp/B5.mp3":[function(require,module,exports) {
module.exports = "/B5.5e578a4a.mp3";
},{}],"samples/harp/C6.mp3":[function(require,module,exports) {
module.exports = "/C6.3d98b93c.mp3";
},{}],"samples/harp/Db6.mp3":[function(require,module,exports) {
module.exports = "/Db6.bd447280.mp3";
},{}],"samples/harp/D6.mp3":[function(require,module,exports) {
module.exports = "/D6.aff506bc.mp3";
},{}],"samples/harp/Eb6.mp3":[function(require,module,exports) {
module.exports = "/Eb6.d48d10ca.mp3";
},{}],"samples/harp/E6.mp3":[function(require,module,exports) {
module.exports = "/E6.c945447e.mp3";
},{}],"samples/harp/F6.mp3":[function(require,module,exports) {
module.exports = "/F6.4c969872.mp3";
},{}],"samples/harp/Gb6.mp3":[function(require,module,exports) {
module.exports = "/Gb6.c395882d.mp3";
},{}],"samples/harp/G6.mp3":[function(require,module,exports) {
module.exports = "/G6.b97a5a62.mp3";
},{}],"samples/harp/Ab6.mp3":[function(require,module,exports) {
module.exports = "/Ab6.2266ccd1.mp3";
},{}],"samples/harp/A6.mp3":[function(require,module,exports) {
module.exports = "/A6.495efb2a.mp3";
},{}],"samples/harp/Bb6.mp3":[function(require,module,exports) {
module.exports = "/Bb6.17624d58.mp3";
},{}],"samples/harp/B6.mp3":[function(require,module,exports) {
module.exports = "/B6.06c07026.mp3";
},{}],"samples/harp/C7.mp3":[function(require,module,exports) {
module.exports = "/C7.94135437.mp3";
},{}],"samples/harp/Db7.mp3":[function(require,module,exports) {
module.exports = "/Db7.c2085090.mp3";
},{}],"samples/harp/D7.mp3":[function(require,module,exports) {
module.exports = "/D7.2c6a5d09.mp3";
},{}],"samples/harp/Eb7.mp3":[function(require,module,exports) {
module.exports = "/Eb7.33def7a8.mp3";
},{}],"samples/harp/E7.mp3":[function(require,module,exports) {
module.exports = "/E7.a5c110e4.mp3";
},{}],"samples/harp/F7.mp3":[function(require,module,exports) {
module.exports = "/F7.890c8a2c.mp3";
},{}],"samples/harp/Gb7.mp3":[function(require,module,exports) {
module.exports = "/Gb7.4390c42d.mp3";
},{}],"samples/harp/G7.mp3":[function(require,module,exports) {
module.exports = "/G7.f60dd413.mp3";
},{}],"samples/harp/Ab7.mp3":[function(require,module,exports) {
module.exports = "/Ab7.fcd19642.mp3";
},{}],"samples/harp/A7.mp3":[function(require,module,exports) {
module.exports = "/A7.e4b44a7c.mp3";
},{}],"samples/harp/Bb7.mp3":[function(require,module,exports) {
module.exports = "/Bb7.68118492.mp3";
},{}],"samples/harp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.harp = void 0;

var _C = _interopRequireDefault(require("./harp/C1.mp3"));

var _Db = _interopRequireDefault(require("./harp/Db1.mp3"));

var _D = _interopRequireDefault(require("./harp/D1.mp3"));

var _Eb = _interopRequireDefault(require("./harp/Eb1.mp3"));

var _E = _interopRequireDefault(require("./harp/E1.mp3"));

var _F = _interopRequireDefault(require("./harp/F1.mp3"));

var _Gb = _interopRequireDefault(require("./harp/Gb1.mp3"));

var _G = _interopRequireDefault(require("./harp/G1.mp3"));

var _Ab = _interopRequireDefault(require("./harp/Ab1.mp3"));

var _A = _interopRequireDefault(require("./harp/A1.mp3"));

var _Bb = _interopRequireDefault(require("./harp/Bb1.mp3"));

var _B = _interopRequireDefault(require("./harp/B1.mp3"));

var _C2 = _interopRequireDefault(require("./harp/C2.mp3"));

var _Db2 = _interopRequireDefault(require("./harp/Db2.mp3"));

var _D2 = _interopRequireDefault(require("./harp/D2.mp3"));

var _Eb2 = _interopRequireDefault(require("./harp/Eb2.mp3"));

var _E2 = _interopRequireDefault(require("./harp/E2.mp3"));

var _F2 = _interopRequireDefault(require("./harp/F2.mp3"));

var _Gb2 = _interopRequireDefault(require("./harp/Gb2.mp3"));

var _G2 = _interopRequireDefault(require("./harp/G2.mp3"));

var _Ab2 = _interopRequireDefault(require("./harp/Ab2.mp3"));

var _A2 = _interopRequireDefault(require("./harp/A2.mp3"));

var _Bb2 = _interopRequireDefault(require("./harp/Bb2.mp3"));

var _B2 = _interopRequireDefault(require("./harp/B2.mp3"));

var _C3 = _interopRequireDefault(require("./harp/C3.mp3"));

var _Db3 = _interopRequireDefault(require("./harp/Db3.mp3"));

var _D3 = _interopRequireDefault(require("./harp/D3.mp3"));

var _Eb3 = _interopRequireDefault(require("./harp/Eb3.mp3"));

var _E3 = _interopRequireDefault(require("./harp/E3.mp3"));

var _F3 = _interopRequireDefault(require("./harp/F3.mp3"));

var _Gb3 = _interopRequireDefault(require("./harp/Gb3.mp3"));

var _G3 = _interopRequireDefault(require("./harp/G3.mp3"));

var _Ab3 = _interopRequireDefault(require("./harp/Ab3.mp3"));

var _A3 = _interopRequireDefault(require("./harp/A3.mp3"));

var _Bb3 = _interopRequireDefault(require("./harp/Bb3.mp3"));

var _B3 = _interopRequireDefault(require("./harp/B3.mp3"));

var _C4 = _interopRequireDefault(require("./harp/C4.mp3"));

var _Db4 = _interopRequireDefault(require("./harp/Db4.mp3"));

var _D4 = _interopRequireDefault(require("./harp/D4.mp3"));

var _Eb4 = _interopRequireDefault(require("./harp/Eb4.mp3"));

var _E4 = _interopRequireDefault(require("./harp/E4.mp3"));

var _F4 = _interopRequireDefault(require("./harp/F4.mp3"));

var _Gb4 = _interopRequireDefault(require("./harp/Gb4.mp3"));

var _G4 = _interopRequireDefault(require("./harp/G4.mp3"));

var _Ab4 = _interopRequireDefault(require("./harp/Ab4.mp3"));

var _A4 = _interopRequireDefault(require("./harp/A4.mp3"));

var _Bb4 = _interopRequireDefault(require("./harp/Bb4.mp3"));

var _B4 = _interopRequireDefault(require("./harp/B4.mp3"));

var _C5 = _interopRequireDefault(require("./harp/C5.mp3"));

var _Db5 = _interopRequireDefault(require("./harp/Db5.mp3"));

var _D5 = _interopRequireDefault(require("./harp/D5.mp3"));

var _Eb5 = _interopRequireDefault(require("./harp/Eb5.mp3"));

var _E5 = _interopRequireDefault(require("./harp/E5.mp3"));

var _F5 = _interopRequireDefault(require("./harp/F5.mp3"));

var _Gb5 = _interopRequireDefault(require("./harp/Gb5.mp3"));

var _G5 = _interopRequireDefault(require("./harp/G5.mp3"));

var _Ab5 = _interopRequireDefault(require("./harp/Ab5.mp3"));

var _A5 = _interopRequireDefault(require("./harp/A5.mp3"));

var _Bb5 = _interopRequireDefault(require("./harp/Bb5.mp3"));

var _B5 = _interopRequireDefault(require("./harp/B5.mp3"));

var _C6 = _interopRequireDefault(require("./harp/C6.mp3"));

var _Db6 = _interopRequireDefault(require("./harp/Db6.mp3"));

var _D6 = _interopRequireDefault(require("./harp/D6.mp3"));

var _Eb6 = _interopRequireDefault(require("./harp/Eb6.mp3"));

var _E6 = _interopRequireDefault(require("./harp/E6.mp3"));

var _F6 = _interopRequireDefault(require("./harp/F6.mp3"));

var _Gb6 = _interopRequireDefault(require("./harp/Gb6.mp3"));

var _G6 = _interopRequireDefault(require("./harp/G6.mp3"));

var _Ab6 = _interopRequireDefault(require("./harp/Ab6.mp3"));

var _A6 = _interopRequireDefault(require("./harp/A6.mp3"));

var _Bb6 = _interopRequireDefault(require("./harp/Bb6.mp3"));

var _B6 = _interopRequireDefault(require("./harp/B6.mp3"));

var _C7 = _interopRequireDefault(require("./harp/C7.mp3"));

var _Db7 = _interopRequireDefault(require("./harp/Db7.mp3"));

var _D7 = _interopRequireDefault(require("./harp/D7.mp3"));

var _Eb7 = _interopRequireDefault(require("./harp/Eb7.mp3"));

var _E7 = _interopRequireDefault(require("./harp/E7.mp3"));

var _F7 = _interopRequireDefault(require("./harp/F7.mp3"));

var _Gb7 = _interopRequireDefault(require("./harp/Gb7.mp3"));

var _G7 = _interopRequireDefault(require("./harp/G7.mp3"));

var _Ab7 = _interopRequireDefault(require("./harp/Ab7.mp3"));

var _A7 = _interopRequireDefault(require("./harp/A7.mp3"));

var _Bb7 = _interopRequireDefault(require("./harp/Bb7.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var harp = [_C.default, _Db.default, _D.default, _Eb.default, _E.default, _F.default, _Gb.default, _G.default, _Ab.default, _A.default, _Bb.default, _B.default, _C2.default, _Db2.default, _D2.default, _Eb2.default, _E2.default, _F2.default, _Gb2.default, _G2.default, _Ab2.default, _A2.default, _Bb2.default, _B2.default, _C3.default, _Db3.default, _D3.default, _Eb3.default, _E3.default, _F3.default, _Gb3.default, _G3.default, _Ab3.default, _A3.default, _Bb3.default, _B3.default, _C4.default, _Db4.default, _D4.default, _Eb4.default, _E4.default, _F4.default, _Gb4.default, _G4.default, _Ab4.default, _A4.default, _Bb4.default, _B4.default, _C5.default, _Db5.default, _D5.default, _Eb5.default, _E5.default, _F5.default, _Gb5.default, _G5.default, _Ab5.default, _A5.default, _Bb5.default, _B5.default, _C6.default, _Db6.default, _D6.default, _Eb6.default, _E6.default, _F6.default, _Gb6.default, _G6.default, _Ab6.default, _A6.default, _Bb6.default, _B6.default, _C7.default, _Db7.default, _D7.default, _Eb7.default, _E7.default, _F7.default, _Gb7.default, _G7.default, _Ab7.default, _A7.default, _Bb7.default];
exports.harp = harp;
},{"./harp/C1.mp3":"samples/harp/C1.mp3","./harp/Db1.mp3":"samples/harp/Db1.mp3","./harp/D1.mp3":"samples/harp/D1.mp3","./harp/Eb1.mp3":"samples/harp/Eb1.mp3","./harp/E1.mp3":"samples/harp/E1.mp3","./harp/F1.mp3":"samples/harp/F1.mp3","./harp/Gb1.mp3":"samples/harp/Gb1.mp3","./harp/G1.mp3":"samples/harp/G1.mp3","./harp/Ab1.mp3":"samples/harp/Ab1.mp3","./harp/A1.mp3":"samples/harp/A1.mp3","./harp/Bb1.mp3":"samples/harp/Bb1.mp3","./harp/B1.mp3":"samples/harp/B1.mp3","./harp/C2.mp3":"samples/harp/C2.mp3","./harp/Db2.mp3":"samples/harp/Db2.mp3","./harp/D2.mp3":"samples/harp/D2.mp3","./harp/Eb2.mp3":"samples/harp/Eb2.mp3","./harp/E2.mp3":"samples/harp/E2.mp3","./harp/F2.mp3":"samples/harp/F2.mp3","./harp/Gb2.mp3":"samples/harp/Gb2.mp3","./harp/G2.mp3":"samples/harp/G2.mp3","./harp/Ab2.mp3":"samples/harp/Ab2.mp3","./harp/A2.mp3":"samples/harp/A2.mp3","./harp/Bb2.mp3":"samples/harp/Bb2.mp3","./harp/B2.mp3":"samples/harp/B2.mp3","./harp/C3.mp3":"samples/harp/C3.mp3","./harp/Db3.mp3":"samples/harp/Db3.mp3","./harp/D3.mp3":"samples/harp/D3.mp3","./harp/Eb3.mp3":"samples/harp/Eb3.mp3","./harp/E3.mp3":"samples/harp/E3.mp3","./harp/F3.mp3":"samples/harp/F3.mp3","./harp/Gb3.mp3":"samples/harp/Gb3.mp3","./harp/G3.mp3":"samples/harp/G3.mp3","./harp/Ab3.mp3":"samples/harp/Ab3.mp3","./harp/A3.mp3":"samples/harp/A3.mp3","./harp/Bb3.mp3":"samples/harp/Bb3.mp3","./harp/B3.mp3":"samples/harp/B3.mp3","./harp/C4.mp3":"samples/harp/C4.mp3","./harp/Db4.mp3":"samples/harp/Db4.mp3","./harp/D4.mp3":"samples/harp/D4.mp3","./harp/Eb4.mp3":"samples/harp/Eb4.mp3","./harp/E4.mp3":"samples/harp/E4.mp3","./harp/F4.mp3":"samples/harp/F4.mp3","./harp/Gb4.mp3":"samples/harp/Gb4.mp3","./harp/G4.mp3":"samples/harp/G4.mp3","./harp/Ab4.mp3":"samples/harp/Ab4.mp3","./harp/A4.mp3":"samples/harp/A4.mp3","./harp/Bb4.mp3":"samples/harp/Bb4.mp3","./harp/B4.mp3":"samples/harp/B4.mp3","./harp/C5.mp3":"samples/harp/C5.mp3","./harp/Db5.mp3":"samples/harp/Db5.mp3","./harp/D5.mp3":"samples/harp/D5.mp3","./harp/Eb5.mp3":"samples/harp/Eb5.mp3","./harp/E5.mp3":"samples/harp/E5.mp3","./harp/F5.mp3":"samples/harp/F5.mp3","./harp/Gb5.mp3":"samples/harp/Gb5.mp3","./harp/G5.mp3":"samples/harp/G5.mp3","./harp/Ab5.mp3":"samples/harp/Ab5.mp3","./harp/A5.mp3":"samples/harp/A5.mp3","./harp/Bb5.mp3":"samples/harp/Bb5.mp3","./harp/B5.mp3":"samples/harp/B5.mp3","./harp/C6.mp3":"samples/harp/C6.mp3","./harp/Db6.mp3":"samples/harp/Db6.mp3","./harp/D6.mp3":"samples/harp/D6.mp3","./harp/Eb6.mp3":"samples/harp/Eb6.mp3","./harp/E6.mp3":"samples/harp/E6.mp3","./harp/F6.mp3":"samples/harp/F6.mp3","./harp/Gb6.mp3":"samples/harp/Gb6.mp3","./harp/G6.mp3":"samples/harp/G6.mp3","./harp/Ab6.mp3":"samples/harp/Ab6.mp3","./harp/A6.mp3":"samples/harp/A6.mp3","./harp/Bb6.mp3":"samples/harp/Bb6.mp3","./harp/B6.mp3":"samples/harp/B6.mp3","./harp/C7.mp3":"samples/harp/C7.mp3","./harp/Db7.mp3":"samples/harp/Db7.mp3","./harp/D7.mp3":"samples/harp/D7.mp3","./harp/Eb7.mp3":"samples/harp/Eb7.mp3","./harp/E7.mp3":"samples/harp/E7.mp3","./harp/F7.mp3":"samples/harp/F7.mp3","./harp/Gb7.mp3":"samples/harp/Gb7.mp3","./harp/G7.mp3":"samples/harp/G7.mp3","./harp/Ab7.mp3":"samples/harp/Ab7.mp3","./harp/A7.mp3":"samples/harp/A7.mp3","./harp/Bb7.mp3":"samples/harp/Bb7.mp3"}],"samples/piano/C1.mp3":[function(require,module,exports) {
module.exports = "/C1.5f73c8a3.mp3";
},{}],"samples/piano/Db1.mp3":[function(require,module,exports) {
module.exports = "/Db1.5d513735.mp3";
},{}],"samples/piano/D1.mp3":[function(require,module,exports) {
module.exports = "/D1.81e7aa4a.mp3";
},{}],"samples/piano/Eb1.mp3":[function(require,module,exports) {
module.exports = "/Eb1.de9dbe24.mp3";
},{}],"samples/piano/E1.mp3":[function(require,module,exports) {
module.exports = "/E1.4bd31250.mp3";
},{}],"samples/piano/F1.mp3":[function(require,module,exports) {
module.exports = "/F1.a3c3028c.mp3";
},{}],"samples/piano/Gb1.mp3":[function(require,module,exports) {
module.exports = "/Gb1.c500fc0a.mp3";
},{}],"samples/piano/G1.mp3":[function(require,module,exports) {
module.exports = "/G1.9f8950fa.mp3";
},{}],"samples/piano/Ab1.mp3":[function(require,module,exports) {
module.exports = "/Ab1.5fbc9fba.mp3";
},{}],"samples/piano/A1.mp3":[function(require,module,exports) {
module.exports = "/A1.3852674f.mp3";
},{}],"samples/piano/Bb1.mp3":[function(require,module,exports) {
module.exports = "/Bb1.d34201ef.mp3";
},{}],"samples/piano/B1.mp3":[function(require,module,exports) {
module.exports = "/B1.659a0937.mp3";
},{}],"samples/piano/C2.mp3":[function(require,module,exports) {
module.exports = "/C2.5e089c65.mp3";
},{}],"samples/piano/Db2.mp3":[function(require,module,exports) {
module.exports = "/Db2.abb3156c.mp3";
},{}],"samples/piano/D2.mp3":[function(require,module,exports) {
module.exports = "/D2.322b0070.mp3";
},{}],"samples/piano/Eb2.mp3":[function(require,module,exports) {
module.exports = "/Eb2.284c117d.mp3";
},{}],"samples/piano/E2.mp3":[function(require,module,exports) {
module.exports = "/E2.a2cbee5d.mp3";
},{}],"samples/piano/F2.mp3":[function(require,module,exports) {
module.exports = "/F2.0682cf0d.mp3";
},{}],"samples/piano/Gb2.mp3":[function(require,module,exports) {
module.exports = "/Gb2.e7f70120.mp3";
},{}],"samples/piano/G2.mp3":[function(require,module,exports) {
module.exports = "/G2.b5aeb0aa.mp3";
},{}],"samples/piano/Ab2.mp3":[function(require,module,exports) {
module.exports = "/Ab2.db4c0bbd.mp3";
},{}],"samples/piano/A2.mp3":[function(require,module,exports) {
module.exports = "/A2.4e77ab4c.mp3";
},{}],"samples/piano/Bb2.mp3":[function(require,module,exports) {
module.exports = "/Bb2.043b528f.mp3";
},{}],"samples/piano/B2.mp3":[function(require,module,exports) {
module.exports = "/B2.82227709.mp3";
},{}],"samples/piano/C3.mp3":[function(require,module,exports) {
module.exports = "/C3.4d31bf1b.mp3";
},{}],"samples/piano/Db3.mp3":[function(require,module,exports) {
module.exports = "/Db3.486072d6.mp3";
},{}],"samples/piano/D3.mp3":[function(require,module,exports) {
module.exports = "/D3.424eb472.mp3";
},{}],"samples/piano/Eb3.mp3":[function(require,module,exports) {
module.exports = "/Eb3.b12dcb8a.mp3";
},{}],"samples/piano/E3.mp3":[function(require,module,exports) {
module.exports = "/E3.d4703c14.mp3";
},{}],"samples/piano/F3.mp3":[function(require,module,exports) {
module.exports = "/F3.243f29d4.mp3";
},{}],"samples/piano/Gb3.mp3":[function(require,module,exports) {
module.exports = "/Gb3.bd091a69.mp3";
},{}],"samples/piano/G3.mp3":[function(require,module,exports) {
module.exports = "/G3.75b4f83e.mp3";
},{}],"samples/piano/Ab3.mp3":[function(require,module,exports) {
module.exports = "/Ab3.9b7e3a83.mp3";
},{}],"samples/piano/A3.mp3":[function(require,module,exports) {
module.exports = "/A3.e6430827.mp3";
},{}],"samples/piano/Bb3.mp3":[function(require,module,exports) {
module.exports = "/Bb3.5706a62d.mp3";
},{}],"samples/piano/B3.mp3":[function(require,module,exports) {
module.exports = "/B3.30b1b625.mp3";
},{}],"samples/piano/C4.mp3":[function(require,module,exports) {
module.exports = "/C4.cd44b5e9.mp3";
},{}],"samples/piano/Db4.mp3":[function(require,module,exports) {
module.exports = "/Db4.d4de60c2.mp3";
},{}],"samples/piano/D4.mp3":[function(require,module,exports) {
module.exports = "/D4.bb20b105.mp3";
},{}],"samples/piano/Eb4.mp3":[function(require,module,exports) {
module.exports = "/Eb4.43988946.mp3";
},{}],"samples/piano/E4.mp3":[function(require,module,exports) {
module.exports = "/E4.d83454ee.mp3";
},{}],"samples/piano/F4.mp3":[function(require,module,exports) {
module.exports = "/F4.abfdcb9f.mp3";
},{}],"samples/piano/Gb4.mp3":[function(require,module,exports) {
module.exports = "/Gb4.719b4624.mp3";
},{}],"samples/piano/G4.mp3":[function(require,module,exports) {
module.exports = "/G4.3402148e.mp3";
},{}],"samples/piano/Ab4.mp3":[function(require,module,exports) {
module.exports = "/Ab4.af7ca01b.mp3";
},{}],"samples/piano/A4.mp3":[function(require,module,exports) {
module.exports = "/A4.3cc37e64.mp3";
},{}],"samples/piano/Bb4.mp3":[function(require,module,exports) {
module.exports = "/Bb4.010890bb.mp3";
},{}],"samples/piano/B4.mp3":[function(require,module,exports) {
module.exports = "/B4.74e2bbd8.mp3";
},{}],"samples/piano/C5.mp3":[function(require,module,exports) {
module.exports = "/C5.34c53a5c.mp3";
},{}],"samples/piano/Db5.mp3":[function(require,module,exports) {
module.exports = "/Db5.89a0b98c.mp3";
},{}],"samples/piano/D5.mp3":[function(require,module,exports) {
module.exports = "/D5.856b20d4.mp3";
},{}],"samples/piano/Eb5.mp3":[function(require,module,exports) {
module.exports = "/Eb5.87b0d17d.mp3";
},{}],"samples/piano/E5.mp3":[function(require,module,exports) {
module.exports = "/E5.1f89e776.mp3";
},{}],"samples/piano/F5.mp3":[function(require,module,exports) {
module.exports = "/F5.7d13ff1b.mp3";
},{}],"samples/piano/Gb5.mp3":[function(require,module,exports) {
module.exports = "/Gb5.ffa3866c.mp3";
},{}],"samples/piano/G5.mp3":[function(require,module,exports) {
module.exports = "/G5.125b5b09.mp3";
},{}],"samples/piano/Ab5.mp3":[function(require,module,exports) {
module.exports = "/Ab5.515589c7.mp3";
},{}],"samples/piano/A5.mp3":[function(require,module,exports) {
module.exports = "/A5.e74d0278.mp3";
},{}],"samples/piano/Bb5.mp3":[function(require,module,exports) {
module.exports = "/Bb5.5e953029.mp3";
},{}],"samples/piano/B5.mp3":[function(require,module,exports) {
module.exports = "/B5.1d6caee8.mp3";
},{}],"samples/piano/C6.mp3":[function(require,module,exports) {
module.exports = "/C6.78e94448.mp3";
},{}],"samples/piano/Db6.mp3":[function(require,module,exports) {
module.exports = "/Db6.72e17eb3.mp3";
},{}],"samples/piano/D6.mp3":[function(require,module,exports) {
module.exports = "/D6.272f1b47.mp3";
},{}],"samples/piano/Eb6.mp3":[function(require,module,exports) {
module.exports = "/Eb6.47f76a41.mp3";
},{}],"samples/piano/E6.mp3":[function(require,module,exports) {
module.exports = "/E6.b0cf6e91.mp3";
},{}],"samples/piano/F6.mp3":[function(require,module,exports) {
module.exports = "/F6.5e98a006.mp3";
},{}],"samples/piano/Gb6.mp3":[function(require,module,exports) {
module.exports = "/Gb6.b027c596.mp3";
},{}],"samples/piano/G6.mp3":[function(require,module,exports) {
module.exports = "/G6.3fa3e3b1.mp3";
},{}],"samples/piano/Ab6.mp3":[function(require,module,exports) {
module.exports = "/Ab6.8fc506fe.mp3";
},{}],"samples/piano/A6.mp3":[function(require,module,exports) {
module.exports = "/A6.d83a8188.mp3";
},{}],"samples/piano/Bb6.mp3":[function(require,module,exports) {
module.exports = "/Bb6.778038e1.mp3";
},{}],"samples/piano/B6.mp3":[function(require,module,exports) {
module.exports = "/B6.a1c21560.mp3";
},{}],"samples/piano/C7.mp3":[function(require,module,exports) {
module.exports = "/C7.9c3d2337.mp3";
},{}],"samples/piano/Db7.mp3":[function(require,module,exports) {
module.exports = "/Db7.8826179e.mp3";
},{}],"samples/piano/D7.mp3":[function(require,module,exports) {
module.exports = "/D7.e0155d96.mp3";
},{}],"samples/piano/Eb7.mp3":[function(require,module,exports) {
module.exports = "/Eb7.59eeaa21.mp3";
},{}],"samples/piano/E7.mp3":[function(require,module,exports) {
module.exports = "/E7.53d21324.mp3";
},{}],"samples/piano/F7.mp3":[function(require,module,exports) {
module.exports = "/F7.1ed933f7.mp3";
},{}],"samples/piano/Gb7.mp3":[function(require,module,exports) {
module.exports = "/Gb7.f9bd6310.mp3";
},{}],"samples/piano/G7.mp3":[function(require,module,exports) {
module.exports = "/G7.0214b339.mp3";
},{}],"samples/piano/Ab7.mp3":[function(require,module,exports) {
module.exports = "/Ab7.ae4fdd34.mp3";
},{}],"samples/piano/A7.mp3":[function(require,module,exports) {
module.exports = "/A7.d61f3983.mp3";
},{}],"samples/piano/Bb7.mp3":[function(require,module,exports) {
module.exports = "/Bb7.1cbd176a.mp3";
},{}],"samples/piano/B7.mp3":[function(require,module,exports) {
module.exports = "/B7.1d15ecad.mp3";
},{}],"samples/piano/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.piano = void 0;

var _C = _interopRequireDefault(require("./C1.mp3"));

var _Db = _interopRequireDefault(require("./Db1.mp3"));

var _D = _interopRequireDefault(require("./D1.mp3"));

var _Eb = _interopRequireDefault(require("./Eb1.mp3"));

var _E = _interopRequireDefault(require("./E1.mp3"));

var _F = _interopRequireDefault(require("./F1.mp3"));

var _Gb = _interopRequireDefault(require("./Gb1.mp3"));

var _G = _interopRequireDefault(require("./G1.mp3"));

var _Ab = _interopRequireDefault(require("./Ab1.mp3"));

var _A = _interopRequireDefault(require("./A1.mp3"));

var _Bb = _interopRequireDefault(require("./Bb1.mp3"));

var _B = _interopRequireDefault(require("./B1.mp3"));

var _C2 = _interopRequireDefault(require("./C2.mp3"));

var _Db2 = _interopRequireDefault(require("./Db2.mp3"));

var _D2 = _interopRequireDefault(require("./D2.mp3"));

var _Eb2 = _interopRequireDefault(require("./Eb2.mp3"));

var _E2 = _interopRequireDefault(require("./E2.mp3"));

var _F2 = _interopRequireDefault(require("./F2.mp3"));

var _Gb2 = _interopRequireDefault(require("./Gb2.mp3"));

var _G2 = _interopRequireDefault(require("./G2.mp3"));

var _Ab2 = _interopRequireDefault(require("./Ab2.mp3"));

var _A2 = _interopRequireDefault(require("./A2.mp3"));

var _Bb2 = _interopRequireDefault(require("./Bb2.mp3"));

var _B2 = _interopRequireDefault(require("./B2.mp3"));

var _C3 = _interopRequireDefault(require("./C3.mp3"));

var _Db3 = _interopRequireDefault(require("./Db3.mp3"));

var _D3 = _interopRequireDefault(require("./D3.mp3"));

var _Eb3 = _interopRequireDefault(require("./Eb3.mp3"));

var _E3 = _interopRequireDefault(require("./E3.mp3"));

var _F3 = _interopRequireDefault(require("./F3.mp3"));

var _Gb3 = _interopRequireDefault(require("./Gb3.mp3"));

var _G3 = _interopRequireDefault(require("./G3.mp3"));

var _Ab3 = _interopRequireDefault(require("./Ab3.mp3"));

var _A3 = _interopRequireDefault(require("./A3.mp3"));

var _Bb3 = _interopRequireDefault(require("./Bb3.mp3"));

var _B3 = _interopRequireDefault(require("./B3.mp3"));

var _C4 = _interopRequireDefault(require("./C4.mp3"));

var _Db4 = _interopRequireDefault(require("./Db4.mp3"));

var _D4 = _interopRequireDefault(require("./D4.mp3"));

var _Eb4 = _interopRequireDefault(require("./Eb4.mp3"));

var _E4 = _interopRequireDefault(require("./E4.mp3"));

var _F4 = _interopRequireDefault(require("./F4.mp3"));

var _Gb4 = _interopRequireDefault(require("./Gb4.mp3"));

var _G4 = _interopRequireDefault(require("./G4.mp3"));

var _Ab4 = _interopRequireDefault(require("./Ab4.mp3"));

var _A4 = _interopRequireDefault(require("./A4.mp3"));

var _Bb4 = _interopRequireDefault(require("./Bb4.mp3"));

var _B4 = _interopRequireDefault(require("./B4.mp3"));

var _C5 = _interopRequireDefault(require("./C5.mp3"));

var _Db5 = _interopRequireDefault(require("./Db5.mp3"));

var _D5 = _interopRequireDefault(require("./D5.mp3"));

var _Eb5 = _interopRequireDefault(require("./Eb5.mp3"));

var _E5 = _interopRequireDefault(require("./E5.mp3"));

var _F5 = _interopRequireDefault(require("./F5.mp3"));

var _Gb5 = _interopRequireDefault(require("./Gb5.mp3"));

var _G5 = _interopRequireDefault(require("./G5.mp3"));

var _Ab5 = _interopRequireDefault(require("./Ab5.mp3"));

var _A5 = _interopRequireDefault(require("./A5.mp3"));

var _Bb5 = _interopRequireDefault(require("./Bb5.mp3"));

var _B5 = _interopRequireDefault(require("./B5.mp3"));

var _C6 = _interopRequireDefault(require("./C6.mp3"));

var _Db6 = _interopRequireDefault(require("./Db6.mp3"));

var _D6 = _interopRequireDefault(require("./D6.mp3"));

var _Eb6 = _interopRequireDefault(require("./Eb6.mp3"));

var _E6 = _interopRequireDefault(require("./E6.mp3"));

var _F6 = _interopRequireDefault(require("./F6.mp3"));

var _Gb6 = _interopRequireDefault(require("./Gb6.mp3"));

var _G6 = _interopRequireDefault(require("./G6.mp3"));

var _Ab6 = _interopRequireDefault(require("./Ab6.mp3"));

var _A6 = _interopRequireDefault(require("./A6.mp3"));

var _Bb6 = _interopRequireDefault(require("./Bb6.mp3"));

var _B6 = _interopRequireDefault(require("./B6.mp3"));

var _C7 = _interopRequireDefault(require("./C7.mp3"));

var _Db7 = _interopRequireDefault(require("./Db7.mp3"));

var _D7 = _interopRequireDefault(require("./D7.mp3"));

var _Eb7 = _interopRequireDefault(require("./Eb7.mp3"));

var _E7 = _interopRequireDefault(require("./E7.mp3"));

var _F7 = _interopRequireDefault(require("./F7.mp3"));

var _Gb7 = _interopRequireDefault(require("./Gb7.mp3"));

var _G7 = _interopRequireDefault(require("./G7.mp3"));

var _Ab7 = _interopRequireDefault(require("./Ab7.mp3"));

var _A7 = _interopRequireDefault(require("./A7.mp3"));

var _Bb7 = _interopRequireDefault(require("./Bb7.mp3"));

var _B7 = _interopRequireDefault(require("./B7.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var piano = {
  C1: _C.default,
  Db1: _Db.default,
  D1: _D.default,
  Eb1: _Eb.default,
  E1: _E.default,
  F1: _F.default,
  Gb1: _Gb.default,
  G1: _G.default,
  Ab1: _Ab.default,
  A1: _A.default,
  Bb1: _Bb.default,
  B1: _B.default,
  C2: _C2.default,
  Db2: _Db2.default,
  D2: _D2.default,
  Eb2: _Eb2.default,
  E2: _E2.default,
  F2: _F2.default,
  Gb2: _Gb2.default,
  G2: _G2.default,
  Ab2: _Ab2.default,
  A2: _A2.default,
  Bb2: _Bb2.default,
  B2: _B2.default,
  C3: _C3.default,
  Db3: _Db3.default,
  D3: _D3.default,
  Eb3: _Eb3.default,
  E3: _E3.default,
  F3: _F3.default,
  Gb3: _Gb3.default,
  G3: _G3.default,
  Ab3: _Ab3.default,
  A3: _A3.default,
  Bb3: _Bb3.default,
  B3: _B3.default,
  C4: _C4.default,
  Db4: _Db4.default,
  D4: _D4.default,
  Eb4: _Eb4.default,
  E4: _E4.default,
  F4: _F4.default,
  Gb4: _Gb4.default,
  G4: _G4.default,
  Ab4: _Ab4.default,
  A4: _A4.default,
  Bb4: _Bb4.default,
  B4: _B4.default,
  C5: _C5.default,
  Db5: _Db5.default,
  D5: _D5.default,
  Eb5: _Eb5.default,
  E5: _E5.default,
  F5: _F5.default,
  Gb5: _Gb5.default,
  G5: _G5.default,
  Ab5: _Ab5.default,
  A5: _A5.default,
  Bb5: _Bb5.default,
  B5: _B5.default,
  C6: _C6.default,
  Db6: _Db6.default,
  D6: _D6.default,
  Eb6: _Eb6.default,
  E6: _E6.default,
  F6: _F6.default,
  Gb6: _Gb6.default,
  G6: _G6.default,
  Ab6: _Ab6.default,
  A6: _A6.default,
  Bb6: _Bb6.default,
  B6: _B6.default,
  C7: _C7.default,
  Db7: _Db7.default,
  D7: _D7.default,
  Eb7: _Eb7.default,
  E7: _E7.default,
  F7: _F7.default,
  Gb7: _Gb7.default,
  G7: _G7.default,
  Ab7: _Ab7.default,
  A7: _A7.default,
  Bb7: _Bb7.default,
  B7: _B7.default
};
exports.piano = piano;
},{"./C1.mp3":"samples/piano/C1.mp3","./Db1.mp3":"samples/piano/Db1.mp3","./D1.mp3":"samples/piano/D1.mp3","./Eb1.mp3":"samples/piano/Eb1.mp3","./E1.mp3":"samples/piano/E1.mp3","./F1.mp3":"samples/piano/F1.mp3","./Gb1.mp3":"samples/piano/Gb1.mp3","./G1.mp3":"samples/piano/G1.mp3","./Ab1.mp3":"samples/piano/Ab1.mp3","./A1.mp3":"samples/piano/A1.mp3","./Bb1.mp3":"samples/piano/Bb1.mp3","./B1.mp3":"samples/piano/B1.mp3","./C2.mp3":"samples/piano/C2.mp3","./Db2.mp3":"samples/piano/Db2.mp3","./D2.mp3":"samples/piano/D2.mp3","./Eb2.mp3":"samples/piano/Eb2.mp3","./E2.mp3":"samples/piano/E2.mp3","./F2.mp3":"samples/piano/F2.mp3","./Gb2.mp3":"samples/piano/Gb2.mp3","./G2.mp3":"samples/piano/G2.mp3","./Ab2.mp3":"samples/piano/Ab2.mp3","./A2.mp3":"samples/piano/A2.mp3","./Bb2.mp3":"samples/piano/Bb2.mp3","./B2.mp3":"samples/piano/B2.mp3","./C3.mp3":"samples/piano/C3.mp3","./Db3.mp3":"samples/piano/Db3.mp3","./D3.mp3":"samples/piano/D3.mp3","./Eb3.mp3":"samples/piano/Eb3.mp3","./E3.mp3":"samples/piano/E3.mp3","./F3.mp3":"samples/piano/F3.mp3","./Gb3.mp3":"samples/piano/Gb3.mp3","./G3.mp3":"samples/piano/G3.mp3","./Ab3.mp3":"samples/piano/Ab3.mp3","./A3.mp3":"samples/piano/A3.mp3","./Bb3.mp3":"samples/piano/Bb3.mp3","./B3.mp3":"samples/piano/B3.mp3","./C4.mp3":"samples/piano/C4.mp3","./Db4.mp3":"samples/piano/Db4.mp3","./D4.mp3":"samples/piano/D4.mp3","./Eb4.mp3":"samples/piano/Eb4.mp3","./E4.mp3":"samples/piano/E4.mp3","./F4.mp3":"samples/piano/F4.mp3","./Gb4.mp3":"samples/piano/Gb4.mp3","./G4.mp3":"samples/piano/G4.mp3","./Ab4.mp3":"samples/piano/Ab4.mp3","./A4.mp3":"samples/piano/A4.mp3","./Bb4.mp3":"samples/piano/Bb4.mp3","./B4.mp3":"samples/piano/B4.mp3","./C5.mp3":"samples/piano/C5.mp3","./Db5.mp3":"samples/piano/Db5.mp3","./D5.mp3":"samples/piano/D5.mp3","./Eb5.mp3":"samples/piano/Eb5.mp3","./E5.mp3":"samples/piano/E5.mp3","./F5.mp3":"samples/piano/F5.mp3","./Gb5.mp3":"samples/piano/Gb5.mp3","./G5.mp3":"samples/piano/G5.mp3","./Ab5.mp3":"samples/piano/Ab5.mp3","./A5.mp3":"samples/piano/A5.mp3","./Bb5.mp3":"samples/piano/Bb5.mp3","./B5.mp3":"samples/piano/B5.mp3","./C6.mp3":"samples/piano/C6.mp3","./Db6.mp3":"samples/piano/Db6.mp3","./D6.mp3":"samples/piano/D6.mp3","./Eb6.mp3":"samples/piano/Eb6.mp3","./E6.mp3":"samples/piano/E6.mp3","./F6.mp3":"samples/piano/F6.mp3","./Gb6.mp3":"samples/piano/Gb6.mp3","./G6.mp3":"samples/piano/G6.mp3","./Ab6.mp3":"samples/piano/Ab6.mp3","./A6.mp3":"samples/piano/A6.mp3","./Bb6.mp3":"samples/piano/Bb6.mp3","./B6.mp3":"samples/piano/B6.mp3","./C7.mp3":"samples/piano/C7.mp3","./Db7.mp3":"samples/piano/Db7.mp3","./D7.mp3":"samples/piano/D7.mp3","./Eb7.mp3":"samples/piano/Eb7.mp3","./E7.mp3":"samples/piano/E7.mp3","./F7.mp3":"samples/piano/F7.mp3","./Gb7.mp3":"samples/piano/Gb7.mp3","./G7.mp3":"samples/piano/G7.mp3","./Ab7.mp3":"samples/piano/Ab7.mp3","./A7.mp3":"samples/piano/A7.mp3","./Bb7.mp3":"samples/piano/Bb7.mp3","./B7.mp3":"samples/piano/B7.mp3"}],"samples/smw/bass.wav":[function(require,module,exports) {
module.exports = "/bass.146de3a6.wav";
},{}],"samples/smw/02 Title_00-loop64.wav":[function(require,module,exports) {
module.exports = "/02 Title_00-loop64.e0f4fd79.wav";
},{}],"samples/smw/02 Title_0c-loop64.wav":[function(require,module,exports) {
module.exports = "/02 Title_0c-loop64.d9747d7e.wav";
},{}],"samples/smw/02 Title_01-loop64.wav":[function(require,module,exports) {
module.exports = "/02 Title_01-loop64.b386a866.wav";
},{}],"samples/smw/02 Title_04-loop64.wav":[function(require,module,exports) {
module.exports = "/02 Title_04-loop64.4cb9a06b.wav";
},{}],"samples/smw/02 Title_08-loop64.wav":[function(require,module,exports) {
module.exports = "/02 Title_08-loop64.264779ab.wav";
},{}],"samples/smw/02 Title_0a-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_0a-noloop.66e6ad87.wav";
},{}],"samples/smw/02 Title_0b-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_0b-noloop.3283a90b.wav";
},{}],"samples/smw/02 Title_0f-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_0f-noloop.6d41b13f.wav";
},{}],"samples/smw/02 Title_06-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_06-noloop.1a45b29f.wav";
},{}],"samples/smw/02 Title_10-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_10-noloop.0be971e2.wav";
},{}],"samples/smw/02 Title_12-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_12-noloop.6f85f003.wav";
},{}],"samples/smw/02 Title_13-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_13-noloop.a25d7685.wav";
},{}],"samples/smw/02 Title_c6-noloop.wav":[function(require,module,exports) {
module.exports = "/02 Title_c6-noloop.ac7c5a65.wav";
},{}],"samples/smw/02 Title_0d-loop1184.wav":[function(require,module,exports) {
module.exports = "/02 Title_0d-loop1184.d25e5dd2.wav";
},{}],"samples/smw/02 Title_0e-loop4752.wav":[function(require,module,exports) {
module.exports = "/02 Title_0e-loop4752.58a6b09d.wav";
},{}],"samples/smw/02 Title_02-loop416.wav":[function(require,module,exports) {
module.exports = "/02 Title_02-loop416.fa56beea.wav";
},{}],"samples/smw/02 Title_03-loop528.wav":[function(require,module,exports) {
module.exports = "/02 Title_03-loop528.fc8638d7.wav";
},{}],"samples/smw/02 Title_05-loop528.wav":[function(require,module,exports) {
module.exports = "/02 Title_05-loop528.54d4d81a.wav";
},{}],"samples/smw/02 Title_07-loop2800.wav":[function(require,module,exports) {
module.exports = "/02 Title_07-loop2800.e19c65d6.wav";
},{}],"samples/smw/02 Title_09-loop5536.wav":[function(require,module,exports) {
module.exports = "/02 Title_09-loop5536.7d803798.wav";
},{}],"samples/smw/02 Title_11-loop2304.wav":[function(require,module,exports) {
module.exports = "/02 Title_11-loop2304.9bb0ddd1.wav";
},{}],"samples/smw/soundbank.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "_00", {
  enumerable: true,
  get: function () {
    return _Title_00Loop.default;
  }
});
Object.defineProperty(exports, "_0c", {
  enumerable: true,
  get: function () {
    return _Title_0cLoop.default;
  }
});
Object.defineProperty(exports, "_01", {
  enumerable: true,
  get: function () {
    return _Title_01Loop.default;
  }
});
Object.defineProperty(exports, "_04", {
  enumerable: true,
  get: function () {
    return _Title_04Loop.default;
  }
});
Object.defineProperty(exports, "_08", {
  enumerable: true,
  get: function () {
    return _Title_08Loop.default;
  }
});
Object.defineProperty(exports, "_0a", {
  enumerable: true,
  get: function () {
    return _Title_0aNoloop.default;
  }
});
Object.defineProperty(exports, "_0b", {
  enumerable: true,
  get: function () {
    return _Title_0bNoloop.default;
  }
});
Object.defineProperty(exports, "_0f", {
  enumerable: true,
  get: function () {
    return _Title_0fNoloop.default;
  }
});
Object.defineProperty(exports, "_06", {
  enumerable: true,
  get: function () {
    return _Title_06Noloop.default;
  }
});
Object.defineProperty(exports, "_10", {
  enumerable: true,
  get: function () {
    return _Title_10Noloop.default;
  }
});
Object.defineProperty(exports, "_12", {
  enumerable: true,
  get: function () {
    return _Title_12Noloop.default;
  }
});
Object.defineProperty(exports, "_13", {
  enumerable: true,
  get: function () {
    return _Title_13Noloop.default;
  }
});
Object.defineProperty(exports, "_c6", {
  enumerable: true,
  get: function () {
    return _Title_c6Noloop.default;
  }
});
Object.defineProperty(exports, "_0d", {
  enumerable: true,
  get: function () {
    return _Title_0dLoop.default;
  }
});
Object.defineProperty(exports, "_0e", {
  enumerable: true,
  get: function () {
    return _Title_0eLoop.default;
  }
});
Object.defineProperty(exports, "_02", {
  enumerable: true,
  get: function () {
    return _Title_02Loop.default;
  }
});
Object.defineProperty(exports, "_03", {
  enumerable: true,
  get: function () {
    return _Title_03Loop.default;
  }
});
Object.defineProperty(exports, "_05", {
  enumerable: true,
  get: function () {
    return _Title_05Loop.default;
  }
});
Object.defineProperty(exports, "_07", {
  enumerable: true,
  get: function () {
    return _Title_07Loop.default;
  }
});
Object.defineProperty(exports, "_09", {
  enumerable: true,
  get: function () {
    return _Title_09Loop.default;
  }
});
Object.defineProperty(exports, "_11", {
  enumerable: true,
  get: function () {
    return _Title_11Loop.default;
  }
});

var _bass = _interopRequireDefault(require("./bass.wav"));

var _Title_00Loop = _interopRequireDefault(require("./02 Title_00-loop64.wav"));

var _Title_0cLoop = _interopRequireDefault(require("./02 Title_0c-loop64.wav"));

var _Title_01Loop = _interopRequireDefault(require("./02 Title_01-loop64.wav"));

var _Title_04Loop = _interopRequireDefault(require("./02 Title_04-loop64.wav"));

var _Title_08Loop = _interopRequireDefault(require("./02 Title_08-loop64.wav"));

var _Title_0aNoloop = _interopRequireDefault(require("./02 Title_0a-noloop.wav"));

var _Title_0bNoloop = _interopRequireDefault(require("./02 Title_0b-noloop.wav"));

var _Title_0fNoloop = _interopRequireDefault(require("./02 Title_0f-noloop.wav"));

var _Title_06Noloop = _interopRequireDefault(require("./02 Title_06-noloop.wav"));

var _Title_10Noloop = _interopRequireDefault(require("./02 Title_10-noloop.wav"));

var _Title_12Noloop = _interopRequireDefault(require("./02 Title_12-noloop.wav"));

var _Title_13Noloop = _interopRequireDefault(require("./02 Title_13-noloop.wav"));

var _Title_c6Noloop = _interopRequireDefault(require("./02 Title_c6-noloop.wav"));

var _Title_0dLoop = _interopRequireDefault(require("./02 Title_0d-loop1184.wav"));

var _Title_0eLoop = _interopRequireDefault(require("./02 Title_0e-loop4752.wav"));

var _Title_02Loop = _interopRequireDefault(require("./02 Title_02-loop416.wav"));

var _Title_03Loop = _interopRequireDefault(require("./02 Title_03-loop528.wav"));

var _Title_05Loop = _interopRequireDefault(require("./02 Title_05-loop528.wav"));

var _Title_07Loop = _interopRequireDefault(require("./02 Title_07-loop2800.wav"));

var _Title_09Loop = _interopRequireDefault(require("./02 Title_09-loop5536.wav"));

var _Title_11Loop = _interopRequireDefault(require("./02 Title_11-loop2304.wav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./bass.wav":"samples/smw/bass.wav","./02 Title_00-loop64.wav":"samples/smw/02 Title_00-loop64.wav","./02 Title_0c-loop64.wav":"samples/smw/02 Title_0c-loop64.wav","./02 Title_01-loop64.wav":"samples/smw/02 Title_01-loop64.wav","./02 Title_04-loop64.wav":"samples/smw/02 Title_04-loop64.wav","./02 Title_08-loop64.wav":"samples/smw/02 Title_08-loop64.wav","./02 Title_0a-noloop.wav":"samples/smw/02 Title_0a-noloop.wav","./02 Title_0b-noloop.wav":"samples/smw/02 Title_0b-noloop.wav","./02 Title_0f-noloop.wav":"samples/smw/02 Title_0f-noloop.wav","./02 Title_06-noloop.wav":"samples/smw/02 Title_06-noloop.wav","./02 Title_10-noloop.wav":"samples/smw/02 Title_10-noloop.wav","./02 Title_12-noloop.wav":"samples/smw/02 Title_12-noloop.wav","./02 Title_13-noloop.wav":"samples/smw/02 Title_13-noloop.wav","./02 Title_c6-noloop.wav":"samples/smw/02 Title_c6-noloop.wav","./02 Title_0d-loop1184.wav":"samples/smw/02 Title_0d-loop1184.wav","./02 Title_0e-loop4752.wav":"samples/smw/02 Title_0e-loop4752.wav","./02 Title_02-loop416.wav":"samples/smw/02 Title_02-loop416.wav","./02 Title_03-loop528.wav":"samples/smw/02 Title_03-loop528.wav","./02 Title_05-loop528.wav":"samples/smw/02 Title_05-loop528.wav","./02 Title_07-loop2800.wav":"samples/smw/02 Title_07-loop2800.wav","./02 Title_09-loop5536.wav":"samples/smw/02 Title_09-loop5536.wav","./02 Title_11-loop2304.wav":"samples/smw/02 Title_11-loop2304.wav"}],"section.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tone_1 = __importDefault(require("tone"));

var tonal_1 = require("tonal");

function section(voices, sample, options) {
  var _a = __assign({
    root: 'A4',
    loop: false
  }, options),
      root = _a.root,
      loop = _a.loop;

  var players = Array(voices).fill(0).map(function (_, i) {
    return new tone_1.default.Player({
      url: sample,
      loop: loop,

      /* loopEnd: 64 / 1000, */
      onload: function onload() {
        /* console.log(`voice ${i} ready`); */
      }
    });
  });
  var rootFrequency = tonal_1.Note.freq(root);
  var s = {
    triggerAttackRelease: function triggerAttackRelease(value, duration, time) {
      var player = players.find(function (p) {
        return p.state === 'stopped';
      });

      if (!player) {
        console.warn('not enough players! cannot play', value);
        return;
      }

      player.playbackRate = tonal_1.Note.freq(value) / rootFrequency;
      player.start(time);

      if (loop) {
        player.stop(time + duration);
      }
    },
    toMaster: function toMaster() {
      players.forEach(function (p) {
        return p.toMaster();
      });
      return s;
    },
    connect: function connect(dest) {
      players.forEach(function (p) {
        return p.connect(dest);
      });
      return s;
    }
  };
  return s;
}

exports.section = section;
},{"tone":"../node_modules/tone/build/Tone.js","tonal":"../node_modules/tonal/index.js"}],"sampler.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tonal_1 = require("tonal");

var tone_1 = __importDefault(require("tone"));

function sampler(samples, options) {
  if (options === void 0) {
    options = {};
  }

  options = __assign({
    volume: -12,
    attack: 0.05
  }, options);
  var sampler = new tone_1.default.Sampler(samples, options);
  var s = {
    triggerAttackRelease: function triggerAttackRelease(note, duration, velocity) {
      if (options['transpose']) {
        note = tonal_1.Distance.transpose(note, tonal_1.Interval.fromSemitones(options['transpose']));
      }

      sampler.triggerAttackRelease(tonal_1.Note.simplify(note), duration, velocity);
    },
    connect: function connect(dest) {
      sampler.connect(dest);
      return s;
    },
    toMaster: function toMaster() {
      sampler.toMaster();
      return s;
    }
  };
  return s;
}

exports.sampler = sampler;
},{"tonal":"../node_modules/tonal/index.js","tone":"../node_modules/tone/build/Tone.js"}],"samples/drummer/kick.wav":[function(require,module,exports) {
module.exports = "/kick.034b20d7.wav";
},{}],"samples/drummer/snare.wav":[function(require,module,exports) {
module.exports = "/snare.923ae725.wav";
},{}],"samples/drummer/hihat.wav":[function(require,module,exports) {
module.exports = "/hihat.42c42a27.wav";
},{}],"samples/drummer/ride.wav":[function(require,module,exports) {
module.exports = "/ride.8b5fc901.wav";
},{}],"samples/drummer/crash.wav":[function(require,module,exports) {
module.exports = "/crash.a9f0f155.wav";
},{}],"samples/drummer/rimshot.wav":[function(require,module,exports) {
module.exports = "/rimshot.2d949fd5.wav";
},{}],"samples/drumset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drumSamples = exports.drumset = exports.drumsounds = exports.rimshot = exports.crash = exports.ride = exports.hihat = exports.snare = exports.kick = void 0;

var _kick = _interopRequireDefault(require("./drummer/kick.wav"));

var _snare = _interopRequireDefault(require("./drummer/snare.wav"));

var _hihat = _interopRequireDefault(require("./drummer/hihat.wav"));

var _ride = _interopRequireDefault(require("./drummer/ride.wav"));

var _crash = _interopRequireDefault(require("./drummer/crash.wav"));

var _rimshot = _interopRequireDefault(require("./drummer/rimshot.wav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
bd = bass drum
cb = cow bell
ch = closed hat
cl = clave
cp = clap
cy = cymbal
hc = high conga
ht = high tom
lc = low conga
lt = low tom
ma = ?
mc = middle conga
mt = middle tom
oh = open hat
rs = rim shot
sd = snare drum
*/
var kick = _kick.default;
exports.kick = kick;
var snare = _snare.default;
exports.snare = snare;
var hihat = _hihat.default;
exports.hihat = hihat;
var ride = _ride.default;
exports.ride = ride;
var crash = _crash.default;
exports.crash = crash;
var rimshot = _rimshot.default;
exports.rimshot = rimshot;
var drumsounds = {
  kick: kick,
  snare: snare,
  hihat: hihat,
  ride: ride,
  crash: crash,
  rimshot: rimshot,
  bd: _kick.default,
  sd: _snare.default,
  hh: _hihat.default
};
exports.drumsounds = drumsounds;
var drumset = [kick, snare, hihat, ride, crash, rimshot];
exports.drumset = drumset;
var drumSamples = {
  C1: kick,
  C2: snare,
  C3: hihat,
  C4: ride,
  C5: crash,
  C6: rimshot
};
exports.drumSamples = drumSamples;
},{"./drummer/kick.wav":"samples/drummer/kick.wav","./drummer/snare.wav":"samples/drummer/snare.wav","./drummer/hihat.wav":"samples/drummer/hihat.wav","./drummer/ride.wav":"samples/drummer/ride.wav","./drummer/crash.wav":"samples/drummer/crash.wav","./drummer/rimshot.wav":"samples/drummer/rimshot.wav"}],"samples/tidal/default/bd/BT0A0D0.wav":[function(require,module,exports) {
module.exports = "/BT0A0D0.3fd89d71.wav";
},{}],"samples/tidal/default/sn/ST0T0S3.wav":[function(require,module,exports) {
module.exports = "/ST0T0S3.68cf59c4.wav";
},{}],"samples/tidal/default/hh/000_hh3closedhh.wav":[function(require,module,exports) {
module.exports = "/000_hh3closedhh.7d37ca0e.wav";
},{}],"samples/tidal/default/cp/HANDCLP0.wav":[function(require,module,exports) {
module.exports = "/HANDCLP0.2e71d9ea.wav";
},{}],"samples/tidal/default/mt/MT0D3.wav":[function(require,module,exports) {
module.exports = "/MT0D3.6ac0a6b4.wav";
},{}],"samples/tidal/default/ht/HT0D3.wav":[function(require,module,exports) {
module.exports = "/HT0D3.896b6185.wav";
},{}],"samples/tidal/default/lt/LT0D3.wav":[function(require,module,exports) {
module.exports = "/LT0D3.47f01b5a.wav";
},{}],"samples/tidal/tidal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BT0A0D = _interopRequireDefault(require("./default/bd/BT0A0D0.wav"));

var _ST0T0S = _interopRequireDefault(require("./default/sn/ST0T0S3.wav"));

var _hh3closedhh = _interopRequireDefault(require("./default/hh/000_hh3closedhh.wav"));

var _HANDCLP = _interopRequireDefault(require("./default/cp/HANDCLP0.wav"));

var _MT0D = _interopRequireDefault(require("./default/mt/MT0D3.wav"));

var _HT0D = _interopRequireDefault(require("./default/ht/HT0D3.wav"));

var _LT0D = _interopRequireDefault(require("./default/lt/LT0D3.wav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  bd: _BT0A0D.default,
  sd: _ST0T0S.default,
  hh: _hh3closedhh.default,
  cp: _HANDCLP.default,
  ht: _HT0D.default,
  mt: _MT0D.default,
  lt: _LT0D.default
};
exports.default = _default;
},{"./default/bd/BT0A0D0.wav":"samples/tidal/default/bd/BT0A0D0.wav","./default/sn/ST0T0S3.wav":"samples/tidal/default/sn/ST0T0S3.wav","./default/hh/000_hh3closedhh.wav":"samples/tidal/default/hh/000_hh3closedhh.wav","./default/cp/HANDCLP0.wav":"samples/tidal/default/cp/HANDCLP0.wav","./default/mt/MT0D3.wav":"samples/tidal/default/mt/MT0D3.wav","./default/ht/HT0D3.wav":"samples/tidal/default/ht/HT0D3.wav","./default/lt/LT0D3.wav":"samples/tidal/default/lt/LT0D3.wav"}],"rack.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tone_1 = __importDefault(require("tone")); //TBD add transpose option for keys


function rack(samples, options) {
  if (options === void 0) {
    options = {};
  }

  options = __assign({
    volume: -12,
    attack: 0.05
  }, options);
  var players = new tone_1.default.Players(samples, options);
  var s = {
    customSymbols: Object.keys(samples),
    triggerAttackRelease: function triggerAttackRelease(key, duration, time, velocity) {
      if (!players.has(key)) {
        console.warn("key " + key + " not found for playback");
        return;
      }

      var player = players.get(key);
      player.start(time);
      player.stop(time + duration);
    },
    connect: function connect(dest) {
      players.connect(dest);
      return s;
    },
    toMaster: function toMaster() {
      players.toMaster();
      return s;
    }
  };
  return s;
}

exports.rack = rack;
},{"tone":"../node_modules/tone/build/Tone.js"}],"../src/Brackets.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
;

var Brackets =
/** @class */
function () {
  function Brackets() {}
  /** START OF ALTERNATIVE IMPLEMENTATION
   * The following methods are alternatives to using JSON.parse. They still do not work correctly with marked feet */


  Brackets.outerPair = function (string) {
    var openingBracket = string.indexOf('[');

    if (openingBracket === -1) {
      return false;
    }

    var i = openingBracket + 1;
    var chars = string.split('');
    var open = 1;

    while (open > 0) {
      if (chars[i] === '[') {
        ++open;
      }

      if (chars[i] === ']') {
        --open;
      }

      ++i;
    }

    return [openingBracket, i - 1];
  };

  Brackets.outerPairs = function (string) {
    var pairs = [];
    var i = 0;

    while (string) {
      var pair = Brackets.outerPair(string);

      if (pair) {
        pairs.push(pair.map(function (_i) {
          return _i + i;
        }));
        i += pair[1];
        string = string.slice(pair[1]);
      } else {
        string = '';
      }
    }

    return pairs;
  };

  Brackets.split = function (string, modify) {
    if (modify === void 0) {
      modify = function modify(s) {
        return [s];
      };
    }

    var pairs = Brackets.outerPairs(string);

    if (!pairs.length) {
      return string;
    }

    return pairs.reduce(function (state, pair, i) {
      var next = pairs[i + 1];
      /* const before = modify(string.slice(state.index, pair[0]));
      let inside = modify(string.slice(pair[0] + 1, pair[1]));
      const after = modify(string.slice(pair[1] + 1, next ? next[0] : string.length)); */

      var before = string.slice(state.index, pair[0]);
      var inside = string.slice(pair[0] + 1, pair[1]);
      var after = string.slice(pair[1] + 1, next ? next[0] : string.length);
      var parts = [before, inside, after].map(modify);
      return {
        index: state.index + next ? next[0] : 0,

        /* parts: [before, (inside.length === 1 ? inside : [inside]), after] */

        /* parts: [before, [inside], after] */
        parts: state.parts.concat(parts[0], parts[1].length === 1 ? parts[1] : [parts[1]], parts[2])
      };
    }, {
      parts: [],
      index: 0
    }).parts.filter(function (s) {
      return !!s;
    });
  };

  Brackets.resolve = function (string, modify) {
    if (modify === void 0) {
      modify = function modify(s) {
        return [s];
      };
    }

    if (typeof string === 'string') {
      string = Brackets.split(string, modify);
    }

    if (typeof string === 'string') {
      return string;
    }

    if (Array.isArray(string)) {
      return string.map(function (part) {
        return Brackets.resolve(part, modify);
      });
    }
  };
  /** END OF ALTERNATIVE IMPLEMENTATION */


  Brackets.simplify = function (strings) {
    if (typeof strings === 'string') {
      return strings;
    }

    strings = strings.filter(function (s) {
      return typeof s === 'string' && !!s || s.length;
    });

    if (strings.length === 1) {
      return strings[0];
    }

    return strings;
  };

  Brackets.divide = function (string, symbol) {
    var divided = string.split(symbol);
    return Brackets.simplify(divided);
  };

  Brackets.divideHierarchy = function (string, symbolHierarchy) {
    if (!symbolHierarchy.length) {
      return string;
    }

    var divided = Brackets.divide(string, symbolHierarchy[0]);
    symbolHierarchy = symbolHierarchy.slice(1);

    if (typeof divided === 'string') {
      return Brackets.divideHierarchy(divided, symbolHierarchy);
    }

    return divided.map(function (part) {
      return Brackets.divideHierarchy(part, symbolHierarchy);
    });
  };

  Brackets.rabbit = function (hole, fn) {
    hole = fn(hole);

    if (Array.isArray(hole)) {
      hole = hole.map(function (channel) {
        return Brackets.rabbit(channel, fn);
      });
    }

    return hole;
  };

  Brackets.simplifyDeep = function (nested) {
    if (typeof nested === 'string') {
      return Brackets.simplify(nested);
    }

    return Brackets.rabbit(nested, function (sub) {
      return Brackets.simplify(sub);
    });
  };

  Brackets.divideDeep = function (tree, divideHierarchy) {
    if (divideHierarchy === void 0) {
      divideHierarchy = [' | ', ' . ', ' '];
    }

    var divided = Brackets.rabbit(tree, function (s) {
      if (typeof s === 'string') {
        return Brackets.divideHierarchy(s, divideHierarchy);
      }

      return s;
    });
    return Brackets.simplifyDeep(divided);
  };

  Brackets.toJson = function (string) {
    var symbols = '\\w\\d#\\*\\.\\|\\~\\-';
    var opening = '\\[';
    var closing = '\\]';
    var space = '\\s';
    var toParse = ('[' + string + ']').replace(new RegExp("([" + symbols + "|" + space + "]+)", 'g'), '"$1"').replace(new RegExp("" + closing + space + "*" + opening, 'g'), '],[').replace(new RegExp("\"" + opening, 'g'), '",[').replace(new RegExp(closing + "\"", 'g'), '],"').split(' ').join('","');

    try {
      var parsed = Brackets.simplifyDeep(JSON.parse(toParse));

      if (parsed.length === 1) {
        return parsed[0];
      }

      return parsed;
    } catch (_a) {
      console.error("cannot parse " + toParse + " from \"" + string + "\"");
      return string;
    }
  };

  return Brackets;
}();

exports.Brackets = Brackets;
},{}],"transforms.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Music_1 = require("../src/Music");

var tonal_1 = require("tonal");

var Brackets_1 = require("../src/Brackets");

exports.defaultSymbols = {
  m: [' | ', ' . ', ' '],
  p: [','],
  hierarchy: ['m', 'p'],
  length: '_',
  duration: '*',
  fraction: '/',
  transpose: '@',
  trim: false
};
exports.transforms = {
  let: function _let(_a) {
    var block = _a.block,
        props = _a.props;
    var lets = block['let'] || {};
    lets = Object.keys(lets).reduce(function (_lets, key) {
      var _a;

      return __assign({}, _lets, (_a = {}, _a[key] = resolveStringSymbols(lets[key], props['symbols']), _a));
    }, {});
    props = __assign({}, props, {
      let: __assign({}, lets, props['let'])
    });
    block = mapEvents(block, function (b) {
      if (typeof b === 'string' && b[0] === '#') {
        return props['let'][b.replace('#', '')];
      }

      return b;
    });
    return {
      block: block,
      props: props
    };
  },
  string: function string(_a) {
    var block = _a.block,
        props = _a.props;
    props = __assign({}, props, {
      symbols: block['symbols'] || props['symbols']
    });
    block = mapEvents(block, function (e) {
      return resolveStringSymbols(e, props['symbols']);
    });
    block = simplifyBlock(block);
    return {
      block: block,
      props: props
    };
  },
  transpose: function transpose(_a) {
    var block = _a.block,
        props = _a.props;

    if (block['transpose']) {
      props = __assign({}, props, {
        transpose: block['transpose'] + (props['transpose'] || 0)
      });
    }

    if (props['transpose']) {
      block = mapEvents(block, function (e) {
        if (typeof e === 'string' && !isNaN(parseInt(e))) {
          var n = parseInt(e);
          var sum = n + props['transpose'];
          var comma = 0; // this shit is needed because 0 does not exist...

          if (n <= 0 && sum > 0) {
            comma = 1;
          } else if (n > 0 && sum <= 0) {
            comma = -1;
          }

          return sum + comma + '';
        }

        if (typeof e === 'string' && !!tonal_1.Note.midi(e)) {
          return tonal_1.Note.simplify(tonal_1.Distance.transpose(e, tonal_1.Interval.fromSemitones(props['transpose'])));
        }

        return e;
      });
    }

    return {
      props: props,
      block: block
    };
  },
  scale: function scale(_a) {
    var block = _a.block,
        props = _a.props;

    if (block['scale']) {
      props = __assign({}, props, {
        scale: block['scale']
      });
    }

    if (props['scale']) {
      block = mapEvents(block, function (e) {
        if (!['string', 'number'].includes(_typeof(e))) {
          return e;
        }

        if (isNumberString(e)) {
          e = parseInt(e);
        }

        if (typeof e === 'number' && !isNaN(e)
        /* && e */
        ) {
            var scale = props['scale'].split(' ').slice(1).join(' ');
            var intervals = tonal_1.Scale.intervals(scale);
            var root = tonal_1.Note.props(props['scale'].split(' ')[0]);

            if (!root.pc) {
              throw new Error('scale: no root set!');
            }

            var octave = root.oct || 3;
            var index = e - 1;
            var step = index < 0 ? intervals.length - Math.abs(index + 1) % intervals.length : index;

            if (index < 0) {
              octave = Math.floor((index + 1) / intervals.length) + octave;
            } else {
              octave = Math.floor(index / intervals.length) + octave;
            }

            return tonal_1.Distance.transpose(root.pc + octave, intervals[step % intervals.length]);
          }

        return e;
      });
    }

    return {
      block: block,
      props: props
    };
  },
  chords: function chords(_a) {
    var block = _a.block,
        props = _a.props;

    if (block['chords']) {
      var octave_1 = 3;

      if (typeof block['chords'] === 'string') {
        block['chords'] = resolveStringSymbols(block['chords'], {
          chords: [' | ', ' . ', ' '],
          hierarchy: ['chords'],
          length: '_',
          duration: '*',

          /* fraction: '/', */
          transpose: '@',
          trim: false
        });
        console.log('resolved', block['chords']);
      }

      var events = Music_1.toArray(block['chords']).map(function (chord) {
        var _a;

        if (Array.isArray(chord)) {
          return {
            chords: chord
          };
        }

        if (_typeof(chord) === 'object') {
          return __assign({}, chord);
        }

        return _a = {}, _a[Music_1.params.polyphony] = tonal_1.Chord.notes(chord).map(function (n) {
          return n + octave_1;
        }), _a;
      });

      if (block[Music_1.params.monophony]) {
        block[Music_1.params.polyphony] = (block[Music_1.params.polyphony] || []).concat([events]);
      } else {
        block[Music_1.params.monophony] = events;
      }
    }

    return {
      block: block,
      props: props
    };
  },
  assign: function assign(_a) {
    var block = _a.block,
        props = _a.props;

    if (block['assign']) {
      block = mapEvents(block, function (e, i) {
        var toAssign = Object.keys(block['assign']).reduce(function (assign, prop) {
          var _a;

          var values = block['assign'][prop];
          return __assign({}, assign, (_a = {}, _a[prop] = values[i % values.length], _a));
        }, {});
        return __assign({}, Music_1.unify(e), toAssign);
      });
    }

    return {
      block: block,
      props: props
    };
  },
  mirror: function mirror(_a) {
    var block = _a.block,
        props = _a.props;

    if (block['mirror']) {
      props = __assign({}, props, {
        mirror: block['mirror']
      });
    }

    if (props['mirror']) {
      block = mapEvents(block, function (e) {
        if (!isNoteString(e)) {
          return e;
        }

        var semitones = tonal_1.Interval.semitones(tonal_1.Distance.interval(props['mirror'], e));
        return tonal_1.Distance.transpose(e, tonal_1.Interval.fromSemitones(semitones * -2));
      });
    }

    return {
      block: block,
      props: props
    };
  }
};

var Transforms =
/** @class */
function () {
  function Transforms() {}

  Transforms.combine = function (transforms) {
    return function (params) {
      return transforms.reduce(function (transformed, transform) {
        return transform(transformed);
      }, params);
    };
  };

  return Transforms;
}();

exports.Transforms = Transforms;

function resolveFeet(event, symbols) {
  if (symbols === void 0) {
    symbols = exports.defaultSymbols;
  }

  if (!symbols.hierarchy) {
    return event;
  }

  var e = event;
  symbols.hierarchy.forEach(function (type) {
    if (symbols[type] && typeof e === 'string') {
      symbols[type].forEach(function (symbol) {
        var _a;

        if (typeof e === 'string' && e.includes(symbol)) {
          var events = e.split(symbol).filter(function (_e) {
            return !symbols.trim || !!_e;
          });

          if (events.length === 1) {
            e = events[0];
          } else if (type === symbols.hierarchy[0]) {
            e = events;
          } else {
            e = (_a = {}, _a[type] = events, _a);
          }
        }
      });
    }
  });

  if (typeof e === 'string') {
    if (symbols.length && event.includes(symbols.length)) {
      var s = event.split(symbols.length);
      e = {
        m: s[0],
        length: parseFloat(s[1])
      };
    } else if (symbols.duration && event.includes(symbols.duration)) {
      var s = event.split(symbols.duration);
      e = {
        m: s[0],
        duration: parseFloat(s[1])
      };
    } else if (symbols.fraction && event.includes(symbols.fraction)) {
      var s = event.split(symbols.fraction);
      e = {
        m: s[0],
        duration: 1 / parseFloat(s[1])
      };
    } else if (symbols.transpose && event.includes(symbols.transpose)) {
      var s = event.split(symbols.transpose);
      e = {
        m: s[0],
        transpose: parseFloat(s[1])
      };
    }
  }

  if (Array.isArray(e)) {
    e = e.map(function (_e) {
      return resolveFeet(_e, symbols);
    });
  }

  return e;
}

exports.resolveFeet = resolveFeet;

function resolveStringSymbols(event, symbols) {
  if (symbols === void 0) {
    symbols = exports.defaultSymbols;
  }

  if (typeof event === 'string' && event.includes('[')) {
    event = Brackets_1.Brackets.toJson(event);
  }

  if (typeof event === 'string') {
    event = resolveFeet(event, symbols);
  }

  return event;
}

exports.resolveStringSymbols = resolveStringSymbols;

function mapEvents(block, fn) {
  var _a;

  return __assign({}, block, (_a = {}, _a[Music_1.params.monophony] = (block[Music_1.params.monophony] || []).map(fn), _a[Music_1.params.polyphony] = (block[Music_1.params.polyphony] || []).map(fn), _a));
}

function simplifyBlock(block) {
  var _a;

  if (block[Music_1.params.monophony] && Array.isArray(block[Music_1.params.monophony]) && block[Music_1.params.monophony].length === 1 && Array.isArray(block[Music_1.params.monophony][0])) {
    return __assign({}, block, (_a = {}, _a[Music_1.params.monophony] = block[Music_1.params.monophony][0], _a));
  }

  return block;
}

function isNumberString(e) {
  return typeof e === 'string' && !isNaN(parseInt(e));
}

function isNoteString(e) {
  return typeof e === 'string' && !!tonal_1.Note.midi(e) && !isNumberString(e);
}
},{"../src/Music":"../src/Music.ts","tonal":"../node_modules/tonal/index.js","../src/Brackets":"../src/Brackets.ts"}],"demo.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tone_1 = __importDefault(require("tone"));

var Music_1 = require("../src/Music");

var examples_1 = require("./tunes/examples");

var Editor_1 = require("./Editor");

var Player_1 = require("./Player");

var Viz_1 = require("./Viz");

var tutorials_1 = __importDefault(require("./tutorial/tutorials"));
/* import tut from './tutorial/scripting.md'; */


var harp_js_1 = require("./samples/harp.js");

var index_js_1 = require("./samples/piano/index.js");

var smwSoundbank = __importStar(require("./samples/smw/soundbank.js"));

var section_1 = require("./section");

var sampler_1 = require("./sampler");

var drumset_js_1 = require("./samples/drumset.js");

var tidal_js_1 = __importDefault(require("./samples/tidal/tidal.js"));

var rack_1 = require("./rack");

var transforms_1 = require("./transforms");

var demoLoaded = false;

function loadDemo() {
  demoLoaded = true;
  var exampleKeys = Object.keys(examples_1.examples);
  /* let json = examples[exampleKeys[Math.floor(Math.random() * exampleKeys.length)]]; */

  var json = examples_1.examples.swimming;
  var flip = false;
  var reverb = new tone_1.default.Reverb({
    decay: 0.5,
    preDelay: 0.02,
    wet: 0.5
  }).toMaster();
  reverb.generate().then(function (r) {
    return console.log('ready', r);
  });
  /* const synth = new Tone.PolySynth(20, Tone.Synth).toMaster(); */

  var synth = new tone_1.default.PolySynth({
    polyphony: 20,
    volume: -12,
    detune: 0,
    voice: tone_1.default.Synth
  }).set({
    envelope: {
      attack: 0.02,
      decay: 0.04,
      sustain: 0.5,
      release: 0.15
    },
    oscillator: {
      type: 'amsine'
    }
  }).connect(reverb);
  var smw = {
    bass: section_1.section(16, smwSoundbank._08, {
      root: 'D4',
      loop: true
    }),
    flute: section_1.section(16, smwSoundbank._00, {
      root: 'D4',
      loop: true
    }),
    ePiano: section_1.section(16, smwSoundbank._0c, {
      root: 'D4',
      loop: true
    }),
    violin: section_1.section(16, smwSoundbank._01, {
      root: 'D4',
      loop: true
    }),
    cello: section_1.section(16, smwSoundbank._04, {
      root: 'D4',
      loop: true
    }),
    trumpet: section_1.section(16, smwSoundbank._08, {
      root: 'D4',
      loop: true
    }),
    uprightPiano: section_1.section(16, smwSoundbank._0a, {
      root: 'G3',
      loop: false
    }),
    bongo: section_1.section(16, smwSoundbank._10, {
      root: 'D4',
      loop: false
    }),
    hit: section_1.section(16, smwSoundbank._12, {
      root: 'D4',
      loop: false
    }),
    clap: section_1.section(16, smwSoundbank._13, {
      root: 'D4',
      loop: false
    }),
    '???': section_1.section(16, smwSoundbank._c6, {
      root: 'D4',
      loop: false
    }),
    slapBass: section_1.section(16, smwSoundbank._0d, {
      root: 'D4',
      loop: false
    }),
    woodblock: section_1.section(16, smwSoundbank._0e, {
      root: 'D4',
      loop: false
    }),
    marimba: section_1.section(16, smwSoundbank._02, {
      root: 'F4',
      loop: false
    }),
    xylophone: section_1.section(16, smwSoundbank._03, {
      root: 'F4',
      loop: false
    }),
    bassGuitar: section_1.section(16, smwSoundbank._05, {
      root: 'C2',
      loop: true
    }),
    steelGuitar: section_1.section(16, smwSoundbank._07, {
      root: 'D3',
      loop: false
    }),
    steelDrum: section_1.section(16, smwSoundbank._09, {
      root: 'F4',
      loop: false
    }),
    distortedGuitar: section_1.section(16, smwSoundbank._11, {
      root: 'G#3',
      loop: false
    }),
    smwDrums: rack_1.rack({
      sd: smwSoundbank._0b,
      bd: smwSoundbank._0f,
      hh: smwSoundbank._06
    })
  };
  var smwInstruments = Object.keys(smw).reduce(function (i, k) {
    var _a;

    return __assign({}, i, (_a = {}, _a[k] = smw[k].connect(reverb), _a));
  }, {});

  var instruments = __assign({
    synth: synth,
    sawtooth: new tone_1.default.PolySynth({
      polyphony: 20,
      volume: -22,
      detune: 0,
      voice: tone_1.default.Synth
    }).set({
      envelope: {
        attack: 0.1,
        decay: 2,
        sustain: 0.3,
        release: 0.15
      },
      oscillator: {
        type: 'amsawtooth'
      }
    }).connect(reverb),
    square: new tone_1.default.PolySynth({
      polyphony: 20,
      volume: -18,
      detune: 0,
      voice: tone_1.default.Synth
    }).set({
      envelope: {
        attack: 0.02,
        decay: 0.04,
        sustain: 0.5,
        release: 0.15
      },
      oscillator: {
        type: 'amsquare'
      }
    }).connect(reverb),
    standard: synth,
    harp: sampler_1.sampler(harp_js_1.harp, {
      transpose: -24
    }).connect(reverb),
    piano: sampler_1.sampler(index_js_1.piano).connect(reverb),
    drums: rack_1.rack(drumset_js_1.drumsounds).connect(reverb),
    tidal: rack_1.rack(tidal_js_1.default).connect(reverb)
  }, smwInstruments);

  function renderJson(json, position) {
    if (position === void 0) {
      position = 0;
    }

    var rendered = Music_1.render2(json, transforms_1.Transforms.combine([transforms_1.transforms.string, transforms_1.transforms.let, transforms_1.transforms.transpose, transforms_1.transforms.scale, transforms_1.transforms.chords, transforms_1.transforms.assign, transforms_1.transforms.mirror]));
    var prettyOutput = rendered.p.map(function (e) {
      return e.path ? __assign({}, e, {
        path: '[' + e.path.map(function (p) {
          return "[" + p[0] + ", " + p[1] + ", " + (p[2] || '"?"') + "]";
        }).join(', ') + ']'
      }) : e;
    });
    var viz = Viz_1.Viz.pianoRoll(rendered, 'viz', {
      position: position,
      flip: flip,
      instruments: instruments
    });
    return {
      rendered: rendered,
      viz: viz,
      prettyOutput: prettyOutput
      /* .map(e => [e.time, 'note', e.m, e.duration]) */

    };
  }

  var prettyOutput, rendered, viz, outputeditor;
  var tutorial = 0;

  function loadTutorial() {
    document.getElementById('markdown').innerHTML = tutorials_1.default[tutorial % tutorials_1.default.length];
    document.getElementById('tutorial').scrollTop = 0;
    listenExampleClicks();
  }

  function nextTutorial() {
    tutorial += 1;
    loadTutorial();
  }

  function prevTutorial() {
    tutorial -= 1;
    loadTutorial();
  }

  loadTutorial();
  document.getElementById('nextTutorial').addEventListener('click', function () {
    return nextTutorial();
  });
  document.getElementById('prevTutorial').addEventListener('click', function () {
    return prevTutorial();
  });

  function play() {
    if (!rendered || !viz) {
      return;
      /* { rendered, viz } = renderJson(json); */
    }

    Player_1.Player.play(rendered, {
      instruments: instruments,
      customSymbols: Object.keys(__assign({}, drumset_js_1.drumsounds, tidal_js_1.default)),
      draw: function draw(time) {
        return Viz_1.Viz.updatePianoRoll(viz, time);
      }
    });
  }

  document.getElementById('play').addEventListener('click', function () {
    play();
  });
  document.getElementById('stop').addEventListener('click', function () {
    Player_1.Player.stop();
  });
  document.getElementById('pause').addEventListener('click', function () {
    Player_1.Player.pause();
  });
  document.getElementById('format').addEventListener('click', function () {
    try {
      json = JSON.parse(editor.getValue());
      editor.setValue(Editor_1.Editor.prettyJson(json), -1);
    } catch (_a) {
      console.warn('could not format: invalid json');
    }
  });
  var editor = Editor_1.Editor.init('ace', ace, {
    theme: 'monokai',
    mode: 'json',
    value: json,
    change: function change(value) {
      if (!value) {
        return;
      } // Get document, or throw exception on error

      /* try {
        const doc = yaml.safeLoad(value);
        console.log(doc);
      } catch (e) {
        console.log(e);
      }
      return; */


      try {
        json = JSON.parse(value);
        var render = renderJson(json, tone_1.default.Transport.seconds);
        prettyOutput = render.prettyOutput;
        viz = render.viz;
        rendered = render.rendered;

        if (!outputeditor) {
          outputeditor = Editor_1.Editor.init('output', ace, {
            theme: 'monokai',
            mode: 'json',
            value: prettyOutput
          });
        }

        outputeditor.setValue(Editor_1.Editor.prettyJson(prettyOutput, true), -1);
      } catch (e) {
        console.error('RenderError:', e);
        /* console.log(value); */

        /* console.log(prettyOutput); */
      }
    }
  });
  loadTune(json);

  function loadTune(json) {
    editor.setValue(Editor_1.Editor.prettyJson(json), -1); // autoplay?

    /* const { prettyOutput } = renderJson(json);
    outputeditor.setValue(Editor.prettyJson(prettyOutput), -1); */
  }

  function listenExampleClicks() {
    Object.keys(examples_1.examples).forEach(function (example) {
      var id = 'example-' + example;

      if (!document.getElementById(id)) {
        /* console.log('unused example', id); */
        return;
      }

      document.getElementById(id).addEventListener('click', function () {
        loadTune(examples_1.examples[example]);
      });
    });
  }
}

window.onload = function () {
  loadDemo();
};

setTimeout(function () {
  if (!demoLoaded) {
    loadDemo();
  }
}, 1000);
},{"tone":"../node_modules/tone/build/Tone.js","../src/Music":"../src/Music.ts","./tunes/examples":"tunes/examples.ts","./Editor":"Editor.ts","./Player":"Player.ts","./Viz":"Viz.ts","./tutorial/tutorials":"tutorial/tutorials.ts","./samples/harp.js":"samples/harp.js","./samples/piano/index.js":"samples/piano/index.js","./samples/smw/soundbank.js":"samples/smw/soundbank.js","./section":"section.ts","./sampler":"sampler.ts","./samples/drumset.js":"samples/drumset.js","./samples/tidal/tidal.js":"samples/tidal/tidal.js","./rack":"rack.ts","./transforms":"transforms.ts"}],"../node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"../node_modules/parcel/src/builtins/loaders/browser/html-loader.js":[function(require,module,exports) {
module.exports = function loadHTMLBundle(bundle) {
  return fetch(bundle).then(function (res) {
    return res.text();
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel/src/builtins/bundle-loader.js");b.register("html",require("../node_modules/parcel/src/builtins/loaders/browser/html-loader.js"));b.load([["00repl.1fd792c3.html","tutorial/00repl.md"],["01basics.dcd6b589.html","tutorial/01basics.md"],["02rhythm.d6d78c4f.html","tutorial/02rhythm.md"],["03durations.b4b49d34.html","tutorial/03durations.md"],["04polyphony.55eec868.html","tutorial/04polyphony.md"],["05advanced.c35b37c9.html","tutorial/05advanced.md"],["06scripting.78bc5c33.html","tutorial/06scripting.md"]]).then(function(){require("demo.ts");});
},{}]},{},[0], null)
//# sourceMappingURL=/demo.56710ae6.js.map