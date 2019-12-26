import { Rhythm } from './Rhythm';

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

/* export function render(music: Music<any>, duration = 1) {
  const block = unify<string>(music);
  let events = [];
  duration = (block[params.duration] || 1) * duration;
  if (block[params.monophony]) {
    events = events.concat(Rhythm.render(block[params.monophony], duration));
  }
  if (block[params.polyphony]) {
    events = events.concat(Rhythm.poly(block[params.polyphony], duration));
  }
  return events.reduce(
    (flat, e) => [
      ...flat,
      ...(typeof e.value === 'object'
        ? render(e.value, e[params.duration]).map(child => ({
            ...child,
            [params.time]: e[params.time] + (child[params.time] || 0),
            path: e.path.concat(child.path || [])
          }))
        : [
            {
              value: e.value,
              [params.time]: e[params.time],
              [params.duration]: e[params.duration],
              path: e.path
            }
          ])
    ],
    []
  );
} */

export function render2(music: Music<string>, verbose = false) {
  const length = eventDuration(music);

  /* const length =
    typeof music === 'object' && !Array.isArray(music)
      ? music['duration'] || 1
      : 1; */

  // The top level duration is special: it has no relational use => only one element at top
  // => find way to use array notation with top level duration

  const p = flat2(music).map(calculate2(length, verbose));

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

export function eventDuration(e, standard = 1) {
  if (typeof e !== 'object') {
    return standard;
  }
  if (Array.isArray(e.duration)) {
    // TBD: fix implement proper duration array notation + more
    // TBD: add possibility to pass duration further down
    // TBD: use elvis operator
    return (
      e.duration[0] * ((e[params.monophony] || []).length || 1) //e[params.polyphony].length
    );
  }
  return e.duration || standard;
}

export function flat2(music: Music<string>, props: any = {}) {
  const block = unify<string>(music);

  /* const bDuration = eventDuration(block); */

  // TBD find way to use array duration notation with root of object

  // drill props
  props = {
    ...props,
    length: (block.length || 1) * (props.length || 1), // TBD use elvis ?? operator
    velocity: (props.velocity || 1) * (block.velocity || 1) // TBD use elvis ?? operator
  }; // TBD remember which velocity was on which level? maybe map simplePath:velocity, same for length

  const m = block[params.monophony] || [];
  const p = block[params.polyphony] || [];

  const mDuration = m.reduce((total, e) => total + eventDuration(e), 0);
  const pDuration = p.reduce((max, e) => Math.max(max, eventDuration(e)), 0);
  // const pDuration = /* block.duration || */ 1;

  const allEvents = [...m, ...p];
  const stack = allEvents.reduce(
    (state, event) => {
      const isPoly = p.includes(event);
      const eDuration = eventDuration(event);
      // remember: dont drill path here
      const path = (props.path || []).concat([
        [
          isPoly ? event.time || 0 : state.time + (event.time || 0),
          isPoly ? pDuration : mDuration,
          eDuration
        ]
      ]);
      return {
        ...state,
        time: state.time + eDuration,
        events: state.events.concat(
          typeof event === 'object' // is object? => go deeper, is primitve => stop
            ? flat2(event, { ...props, path })
            : [
                {
                  [params.monophony]: event,
                  ...props,
                  path
                }
              ]
        )
      };
    },
    { events: [], time: 0, duration: 0 }
  );
  return (props.events || []).concat(stack.events);
}
