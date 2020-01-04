import { Rhythm } from './Rhythm';
import { Brackets } from './Brackets';

export interface MusicObject<T> {
  name?: string;
  time?: number;
  n?: number; // play n times
  type?: 'relative' | 'absolute';
  duration?: number;
  length?: number;
  velocity?: number;
  v?: Music<T>[] | Music<T>; // value
  p?: Music<T>[] | Music<T>; // polyphony shorthand
  m?: Music<T>[] | Music<T>; // monophony shorthand
}

export type Music<T> = T | T[] | MusicObject<T>;

export interface Song extends MusicObject<string> {
  bpm: number;
  p: Music<string>[];
}

export declare type TransformParams<T> = { block: MusicObject<T>, props: Object };
export declare type Transform<T> = (params: TransformParams<T>) => TransformParams<T>;

export const params = {
  monophony: 'm',
  polyphony: 'p',
  time: 'time',
  duration: 'duration',
  velocity: 'v'
};

export function toObject(music: Music<any>, param = params['monophony']) {
  if (typeof music !== 'object' || Array.isArray(music)) {
    return { [param]: music };
  }
  return music;
}

export function toArray<T>(array: T): T[] {
  if (!Array.isArray(array)) {
    return [array];
  }
  return array;
}

export function unify<T>(music: Music<T>): MusicObject<T> {
  const o = toObject(music);
  if (o[params.monophony]) {
    o[params.monophony] = toArray(o[params.monophony]);
  }
  if (o[params.polyphony]) {
    o[params.polyphony] = toArray(o[params.polyphony]);
  }
  return o;
}


export function render2(music: Music<string>, transform?: Transform<string>) {
  const length = eventDuration(music);

  /* const length =
    typeof music === 'object' && !Array.isArray(music)
      ? music['duration'] || 1
      : 1; */

  // The top level duration is special: it has no relational use => only one element at top
  // => find way to use array notation with top level duration
  let flat = flat2(music, {}, transform);

  const p = flat.map(calculate2(length, false))/* .map(e => {
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

export function calculate2(totalLength = 1, verbose = false): any {
  return e => {
    let { path, m, length, velocity } = e;
    length = length || 1;
    return {
      ...e,
      m,
      ...(verbose ? e : {}),
      time: Rhythm.time(path, totalLength),
      velocity,
      duration: Rhythm.duration(path, totalLength) * length
    };
  };
}

export function isSameSlot(pathsA, pathsB) {
  if (!pathsA || !pathsB) {
    return false;
  }
  const slotA = pathsA.map(p => p.join('.')).join('-');
  const slotB = pathsB.map(p => p.join('.')).join('-');
  return slotA === slotB;
}

export function eventDuration(e, standard = 1) {
  if (typeof e !== 'object') {
    return standard;
  }
  if (Array.isArray(e.duration)) {
    // TBD: fix implement proper duration array notation + more
    // TBD: add possibility to pass duration further down
    // TBD: use elvis operator
    return (
      // TBD; dont use length => use durations!! 
      e.duration[0] * ((e[params.monophony] || []).length || 1) //e[params.polyphony].length
    );
  }
  return e.duration || standard;
}

export function resolveStringSymbols(event, symbols = {
  m: [' | ', ' . ', ' '],
  p: [','],
  hierarchy: ['m', 'p'],
  length: '_',
  duration: '*',
  trim: false
}) {
  if (typeof event === 'string' && event.includes('[')) {
    event = Brackets.parse(event);
    // TBD fix: ht [mt mt mt] . ht [mt mt mt] . ht mt | ht [mt mt mt] . ht [mt mt mt] . [ht ht ht] [mt mt mt]
  }
  if (typeof event === 'string' && symbols.hierarchy) {
    symbols.hierarchy.forEach(type => {
      if (symbols[type] && typeof event === 'string') {
        symbols[type].forEach(symbol => {
          if (typeof event === 'string' && event.includes(symbol)) {
            event = [{ [type]: event.split(symbol).filter(e => !symbols.trim || !!e) }];
          }
        })
      }
    })
  }
  if (typeof event !== 'string') {
    return event;
  }
  if (symbols.length && event.includes(symbols.length)) {
    const s = event.split(symbols.length);
    event = { m: s[0], length: parseFloat(s[1]) };
  } else if (symbols.duration && event.includes(symbols.duration)) {
    const s = event.split(symbols.duration);
    event = { m: s[0], duration: parseFloat(s[1]) };
  }
  return event;
}

export function flat2(music: Music<string>, props: any = {}, transform?: Transform<string>) {
  let block = unify<string>(music);

  if (transform) {
    const transformed = transform({ block, props });
    block = transformed.block;
    props = transformed.props;
  }
  // TBD find way to use array duration notation with root of object
  // drill props
  props = {
    ...props,
    length: (block.length || 1) * (props.length || 1), // TBD use elvis ?? operator
    velocity: (props.velocity === undefined ? 1 : props.velocity) * (block.velocity === undefined ? 1 : block.velocity), // TBD use elvis ?? operator
    instrument: block['instrument'] || props.instrument
    //names: (props.names || []).concat(block.name ? [block.name] : []), // TBD use elvis ?? operator
    //voices: (props.voices || []).concat(block['voice'] ? [block['voice']] : []), // TBD use elvis ?? operator
  }; // TBD remember which velocity was on which level? maybe map simplePath:velocity, same for length
  // those props are merged into the rendered events / blocks (together with path)
  const eventProps = {
    velocity: props.velocity,
    instrument: props.instrument,
    length: props.length,
  };
  /* const m = (block[params.monophony] || []).map(e => resolveStringSymbols(e, props.symbols));
  const p = (block[params.polyphony] || []).map(e => resolveStringSymbols(e, props.symbols)); */
  const m = (block[params.monophony] || []);
  const p = (block[params.polyphony] || []);
  const mDuration = m.reduce((total, e) => total + eventDuration(e), 0);
  const pDuration = p.reduce((max, e) => Math.max(max, eventDuration(e)), 0);
  // const pDuration = /* block.duration || */ 1;

  const allEvents = [...m, ...p];
  const stack = allEvents.reduce(
    (state, event, i) => {
      const isPoly = p.includes(event);
      // event = resolveStringSymbols(event);

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

      return {
        ...state,
        time: state.time + eDuration,
        events: state.events.concat(
          typeof event === 'object' // is object? => go deeper, is primitve => stop
            ? flat2(event, { ...props, path }, transform)
            : [
              {
                [params.monophony]: event,
                ...eventProps,
                path
              }
            ]
        )
      };
    },
    { events: [], time: 0, duration: 0 }
  );
  if (props.path) {
    stack.events.push({
      block: '*',
      path: props.path,
      ...eventProps
    });
  }
  return (props.events || []).concat(stack.events);
}
