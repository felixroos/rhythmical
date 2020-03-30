"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Rhythm_1 = require("./Rhythm");
exports.params = {
    monophony: 'm',
    polyphony: 'p',
    time: 'time',
    duration: 'duration',
    velocity: 'v'
};
function toObject(music, param) {
    var _a;
    if (param === void 0) { param = exports.params['monophony']; }
    if (typeof music !== 'object' || Array.isArray(music)) {
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
    var p = flat.map(calculate2(length, false)) /* .map(e => {
      const offset = Math.random() * error;
      return {
        ...e,
        time: e.time + offset,
        duration: e.duration - offset,
        velocity: e.velocity - velocityError * Math.random(),
      }
    }) */;
    var seconds = music['seconds'] || length; // ||length;
    return {
        seconds: seconds,
        p: p
    };
}
exports.render2 = render2;
function calculate2(totalLength, verbose) {
    if (totalLength === void 0) { totalLength = 1; }
    if (verbose === void 0) { verbose = false; }
    return function (e) {
        var path = e.path, m = e.m, length = e.length, velocity = e.velocity;
        length = length || 1;
        return __assign(__assign(__assign(__assign({}, e), { m: m }), (verbose ? e : {})), { time: Rhythm_1.Rhythm.time(path, totalLength), velocity: velocity, duration: Rhythm_1.Rhythm.duration(path, totalLength) * length });
    };
}
exports.calculate2 = calculate2;
function isSameSlot(pathsA, pathsB) {
    if (!pathsA || !pathsB) {
        return false;
    }
    var slotA = pathsA.map(function (p) { return p.join('.'); }).join('-');
    var slotB = pathsB.map(function (p) { return p.join('.'); }).join('-');
    return slotA === slotB;
}
exports.isSameSlot = isSameSlot;
function eventDuration(e, standard) {
    if (standard === void 0) { standard = 1; }
    if (typeof e !== 'object') {
        return standard;
    }
    if (Array.isArray(e.duration)) {
        // TBD: fix implement proper duration array notation + more
        // TBD: add possibility to pass duration further down
        // TBD: use elvis operator
        return (
        // TBD; dont use length => use durations!! 
        e.duration[0] * ((e[exports.params.monophony] || []).length || 1) //e[params.polyphony].length
        );
    }
    return e.duration || standard;
}
exports.eventDuration = eventDuration;
function flat2(music, props, transform) {
    if (props === void 0) { props = {}; }
    var block = unify(music);
    if (transform) {
        var transformed = transform({ block: block, props: props });
        block = transformed.block;
        props = transformed.props;
    }
    // TBD find way to use array duration notation with root of object
    // drill props
    props = __assign(__assign({}, props), { length: (block.length || 1) * (props.length || 1), velocity: (props.velocity === undefined ? 1 : props.velocity) * (block.velocity === undefined ? 1 : block.velocity), instrument: block['instrument'] || props.instrument }); // TBD remember which velocity was on which level? maybe map simplePath:velocity, same for length
    // those props are merged into the rendered events / blocks (together with path)
    var eventProps = {
        velocity: props.velocity,
        instrument: props.instrument,
        length: props.length
    };
    var m = (block[exports.params.monophony] || []);
    var p = (block[exports.params.polyphony] || []);
    var mDuration = m.reduce(function (total, e) { return total + eventDuration(e); }, 0);
    var pDuration = p.reduce(function (max, e) { return Math.max(max, eventDuration(e)); }, 0);
    // const pDuration = /* block.duration || */ 1;
    var allEvents = __spreadArrays(m, p);
    var stack = allEvents.reduce(function (state, event, i) {
        var _a;
        var isPoly = p.includes(event);
        var eDuration = eventDuration(event);
        // remember: dont drill path here
        var path = (props.path || []).concat([
            [
                isPoly ? event.time || 0 : state.time + (event.time || 0),
                isPoly ? pDuration : mDuration,
                eDuration,
                i
            ]
        ]);
        return __assign(__assign({}, state), { time: state.time + eDuration, events: state.events.concat(typeof event === 'object' // is object? => go deeper, is primitve => stop
                ? flat2(event, __assign(__assign({}, props), { path: path }), transform)
                : [
                    __assign(__assign((_a = {}, _a[exports.params.monophony] = event, _a), eventProps), { path: path })
                ]) });
    }, { events: [], time: 0, duration: 0 });
    if (props.path) {
        stack.events.push(__assign({ block: '*', path: props.path }, eventProps));
    }
    return (props.events || []).concat(stack.events);
}
exports.flat2 = flat2;
