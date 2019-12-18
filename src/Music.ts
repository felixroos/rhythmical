import { TimedEvent, Rhythm } from './Rhythm';

export type MusicObject<T> = {
  name?: string;
  t?: number,
  d?: number,
  n?: number, // play n times
  type?: 'relative' | 'absolute',
  v?: Music<T>[] | Music<T>, // value
  p?: Music<T>[] | Music<T>, // polyphony shorthand
  m?: Music<T>[] | Music<T>, // monophony shorthand
};

export type Music<T> = T | T[] | MusicObject<T>;

const params = {
  monophony: 'm',
  polyphony: 'p',
  time: 'time',
  duration: 'duration'
}

export function toObject(music: Music<any>, param = params['monophony']) {
  if (typeof music !== 'object' || Array.isArray(music)) {
    return { [param]: music }
  }
  return music;
}

export function toArray<T>(array: T): T[] {
  if (!Array.isArray(array)) {
    return [array];
  }
  return array;
}

export function unify<T>(music: Music<T>): MusicObject<T>[] {
  /* return toObject(toArray(music).map(m => toObject(m))); */
  const o = toObject(music);
  if (o[params.monophony]) {
    o[params.monophony] = toArray(o[params.monophony]);
  }
  if (o[params.polyphony]) {
    o[params.polyphony] = toArray(o[params.polyphony]);
  }
  return o;
}

export function render(music: Music<any>, duration = 1) {
  const block = unify<string>(music);
  let events = [];
  duration = (block[params.duration] || 1) * duration;
  if (block[params.monophony]) {
    events = events.concat(Rhythm.render(block[params.monophony], duration));
  }
  if (block[params.polyphony]) {
    events = events.concat(Rhythm.poly(block[params.polyphony], block[params.duration] || 1));
  }
  return events.reduce((flat, e) => [
    ...flat,
    ...(typeof e.value === 'object' ? render(e.value, e.duration).map(child => ({
      ...child,
      [params.time]: e[params.time] + (child[params.time] || 0),
      // [params.duration]: e[params.duration],// * (child[params.duration] || 1), // use ??
      path: e.path.concat(child.path || [])
    })) : [
        {
          value: e.value,
          [params.time]: e[params.time],
          [params.duration]: e[params.duration],
          path: e.path
        }
      ])
  ], []);
}
