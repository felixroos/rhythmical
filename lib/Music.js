"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rhythm_1 = require("./Rhythm");
exports.params = {
    monophony: 'm',
    polyphony: 'p',
    time: 'time',
    duration: 'duration',
    velocity: 'v'
};
function toObject(music, param = exports.params['monophony']) {
    if (typeof music !== 'object' || Array.isArray(music)) {
        return { [param]: music };
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
    const o = toObject(music);
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
    const length = eventDuration(music);
    /* const length =
      typeof music === 'object' && !Array.isArray(music)
        ? music['duration'] || 1
        : 1; */
    // The top level duration is special: it has no relational use => only one element at top
    // => find way to use array notation with top level duration
    let flat = flat2(music, {}, transform);
    const p = flat.map(calculate2(length, false)) /* .map(e => {
      const offset = Math.random() * error;
      return {
        ...e,
        time: e.time + offset,
        duration: e.duration - offset,
        velocity: e.velocity - velocityError * Math.random(),
      }
    }) */;
    const seconds = music['seconds'] || length; // ||length;
    return {
        seconds,
        p
    };
}
exports.render2 = render2;
function calculate2(totalLength = 1, verbose = false) {
    return e => {
        let { path, m, length, velocity } = e;
        length = length || 1;
        return Object.assign(Object.assign(Object.assign(Object.assign({}, e), { m }), (verbose ? e : {})), { time: Rhythm_1.Rhythm.time(path, totalLength), velocity, duration: Rhythm_1.Rhythm.duration(path, totalLength) * length });
    };
}
exports.calculate2 = calculate2;
function isSameSlot(pathsA, pathsB) {
    if (!pathsA || !pathsB) {
        return false;
    }
    const slotA = pathsA.map(p => p.join('.')).join('-');
    const slotB = pathsB.map(p => p.join('.')).join('-');
    return slotA === slotB;
}
exports.isSameSlot = isSameSlot;
function eventDuration(e, standard = 1) {
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
function flat2(music, props = {}, transform) {
    let block = unify(music);
    if (transform) {
        const transformed = transform({ block, props });
        block = transformed.block;
        props = transformed.props;
    }
    // TBD find way to use array duration notation with root of object
    // drill props
    props = Object.assign(Object.assign({}, props), { length: (block.length || 1) * (props.length || 1), velocity: (props.velocity === undefined ? 1 : props.velocity) * (block.velocity === undefined ? 1 : block.velocity), instrument: block['instrument'] || props.instrument }); // TBD remember which velocity was on which level? maybe map simplePath:velocity, same for length
    // those props are merged into the rendered events / blocks (together with path)
    const eventProps = {
        velocity: props.velocity,
        instrument: props.instrument,
        length: props.length,
    };
    const m = (block[exports.params.monophony] || []);
    const p = (block[exports.params.polyphony] || []);
    const mDuration = m.reduce((total, e) => total + eventDuration(e), 0);
    const pDuration = p.reduce((max, e) => Math.max(max, eventDuration(e)), 0);
    // const pDuration = /* block.duration || */ 1;
    const allEvents = [...m, ...p];
    const stack = allEvents.reduce((state, event, i) => {
        const isPoly = p.includes(event);
        const eDuration = eventDuration(event);
        // remember: dont drill path here
        const path = (props.path || []).concat([
            [
                isPoly ? event.time || 0 : state.time + (event.time || 0),
                isPoly ? pDuration : mDuration,
                eDuration,
                i
            ]
        ]);
        return Object.assign(Object.assign({}, state), { time: state.time + eDuration, events: state.events.concat(typeof event === 'object' // is object? => go deeper, is primitve => stop
                ? flat2(event, Object.assign(Object.assign({}, props), { path }), transform)
                : [
                    Object.assign(Object.assign({ [exports.params.monophony]: event }, eventProps), { path })
                ]) });
    }, { events: [], time: 0, duration: 0 });
    if (props.path) {
        stack.events.push(Object.assign({ block: '*', path: props.path }, eventProps));
    }
    return (props.events || []).concat(stack.events);
}
exports.flat2 = flat2;
