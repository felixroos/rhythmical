import { MusicObject, Music, TransformParams, params, unify, Transform, toArray } from '../src/Music';
import { Distance, Interval, Note, Scale, Chord } from 'tonal';
import { Brackets } from '../src/Brackets';

export const defaultSymbols: { [key: string]: any } = {
  m: [' | ', ' . ', ' '],
  p: [','],
  hierarchy: ['m', 'p'],
  length: '_',
  duration: '*',
  fraction: '/',
  transpose: '@',
  trim: false
};

export const transforms: { [key: string]: Transform<string | number> } = {
  let: ({ block, props }: TransformParams<string>) => {
    let lets = block['let'] || {};
    lets = Object.keys(lets).reduce((_lets, key) => {
      return {
        ..._lets,
        [key]: resolveStringSymbols(lets[key], props['symbols'])
      }
    }, {});
    props = {
      ...props,
      let: {
        ...lets,
        ...props['let']
      }
    };
    block = mapEvents(block, (b) => {
      if (typeof b === 'string' && b[0] === '#') {
        return props['let'][b.replace('#', '')];
      }
      return b;
    });
    return { block, props };
  },
  string: ({ block, props }) => {
    props = {
      ...props,
      symbols: block['symbols'] || props['symbols']
    }
    block = mapEvents(block, e => resolveStringSymbols(e, props['symbols']));
    block = simplifyBlock(block);
    return { block, props };
  },
  transpose: ({ block, props }) => {
    if (block['transpose']) {
      props = {
        ...props,
        transpose: block['transpose'] + (props['transpose'] || 0)
      }
    }
    if (props['transpose']) {
      block = mapEvents(block, (e) => {
        if (typeof e === 'string' && !isNaN(parseInt(e))) {
          const n = parseInt(e);
          const sum = n + props['transpose'];
          let comma = 0; // this shit is needed because 0 does not exist...
          if (n <= 0 && sum > 0) {
            comma = 1;
          } else if (n > 0 && sum <= 0) {
            comma = -1;
          }
          return (sum + comma) + '';
        }
        if (typeof e === 'string' && !!Note.midi(e)) {
          return Note.simplify(<string>Distance.transpose(e, Interval.fromSemitones(props['transpose'])));
        }
        return e;
      });
    }
    return { props, block };
  },
  scale: ({ block, props }) => {
    if (block['scale']) {
      props = {
        ...props,
        scale: block['scale']
      }
    }
    if (props['scale']) {
      block = mapEvents(block, (e) => {
        if (!['string', 'number'].includes(typeof e)) {
          return e;
        }
        if (isNumberString(<string>e)) {
          e = parseInt(<string>e);
        }
        if (typeof e === 'number' && !isNaN(e) /* && e */) {
          const scale = props['scale'].split(' ').slice(1).join(' ');
          const intervals = Scale.intervals(scale);
          const root = Note.props(props['scale'].split(' ')[0]);
          if (!root.pc) {
            throw new Error('scale: no root set!');
          }
          let octave = root.oct || 3;
          const index = e - 1;
          const step = index < 0 ? intervals.length - (Math.abs(index + 1) % intervals.length) : index;
          if (index < 0) {
            octave = Math.floor(((index + 1) / intervals.length)) + octave;
          } else {
            octave = Math.floor((index / intervals.length)) + octave;
          }
          return <string>Distance.transpose(root.pc + octave, intervals[step % intervals.length])
        }
        return e;
      })
    }
    return { block, props };
  },
  chords: ({ block, props }: { block: MusicObject<string>, props: any }) => {
    if (block['chords']) {
      const octave = 3;
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

      const events = toArray(block['chords']).map(chord => {
        if (Array.isArray(chord)) {
          return { chords: chord };
        }
        if (typeof chord === 'object') {
          return { ...chord };
        }
        return {
          [params.polyphony]: Chord.notes(chord).map(n => n + octave)
        }
      });
      if (block[params.monophony]) {
        block[params.polyphony] = (block[params.polyphony] || []).concat([events]);
      } else {
        block[params.monophony] = events;
      }
    }
    return { block, props };
  },
  assign: ({ block, props }) => {
    if (block['assign']) {
      block = mapEvents(block, (e, i) => {
        const toAssign = Object.keys(block['assign']).reduce((assign, prop) => {
          const values = block['assign'][prop];
          return {
            ...assign,
            [prop]: values[i % values.length]
          }
        }, {});
        return {
          ...unify(e),
          ...toAssign
        }
      });
    }
    return { block, props };
  },
  mirror: ({ block, props }) => {
    if (block['mirror']) {
      props = {
        ...props,
        mirror: block['mirror']
      }
    }
    if (props['mirror']) {
      block = mapEvents<string | number>(block, e => {
        if (!isNoteString(e)) {
          return e;
        }
        const semitones = Interval.semitones(<string>Distance.interval(props['mirror'], <string>e));
        return <string>Distance.transpose(<string>e, Interval.fromSemitones(semitones * -2));
      });
    }
    return { block, props };
  }
}

export class Transforms {
  static combine<T>(transforms: Transform<T>[]): Transform<T> {
    return (params: TransformParams<T>) => transforms.reduce((transformed, transform) => transform(transformed), params);
  }
}

export function resolveFeet(event: string, symbols = defaultSymbols): Music<string> {
  if (!symbols.hierarchy) {
    return event;
  }
  let e: Music<string> = event;
  symbols.hierarchy.forEach(type => {
    if (symbols[type] && typeof e === 'string') {
      symbols[type].forEach(symbol => {
        if (typeof e === 'string' && e.includes(symbol)) {
          let events = e.split(symbol).filter(_e => !symbols.trim || !!_e);
          if (events.length === 1) {
            e = events[0];
          } else if (type === symbols.hierarchy[0]) {
            e = events;
          } else {
            e = { [type]: events };
          }
        }
      });
    }
  });
  if (typeof e === 'string') {
    if (symbols.length && event.includes(symbols.length)) {
      const s = event.split(symbols.length);
      e = { m: s[0], length: parseFloat(s[1]) };
    } else if (symbols.duration && event.includes(symbols.duration)) {
      const s = event.split(symbols.duration);
      e = { m: s[0], duration: parseFloat(s[1]) };
    } else if (symbols.fraction && event.includes(symbols.fraction)) {
      const s = event.split(symbols.fraction);
      e = { m: s[0], duration: 1 / parseFloat(s[1]) };
    } else if (symbols.transpose && event.includes(symbols.transpose)) {
      const s = event.split(symbols.transpose);
      e = { m: s[0], transpose: parseFloat(s[1]) };
    }
  }
  if (Array.isArray(e)) {
    e = e.map(_e => resolveFeet(_e, symbols));
  }
  return e;
}

export function resolveStringSymbols(event, symbols = defaultSymbols) {
  if (typeof event === 'string' && event.includes('[')) {
    event = Brackets.toJson(event);
  }
  if (typeof event === 'string') {
    event = resolveFeet(event, symbols);
  }
  return event;
}
function mapEvents<T>(block: MusicObject<T>, fn: (event: Music<T>, index?: number) => Music<T>) {
  return {
    ...block,
    [params.monophony]: (block[params.monophony] || []).map(fn),
    [params.polyphony]: (block[params.polyphony] || []).map(fn)
  }
}
function simplifyBlock<T>(block: MusicObject<T>): MusicObject<T> {
  if (
    block[params.monophony] &&
    Array.isArray(block[params.monophony]) &&
    block[params.monophony].length === 1 &&
    Array.isArray(block[params.monophony][0])) {
    return {
      ...block,
      [params.monophony]: block[params.monophony][0]
    }
  }
  return block;
}
function isNumberString(e) {
  return typeof e === 'string' && !isNaN(parseInt(e));
}
function isNoteString(e) {
  return typeof e === 'string' && !!Note.midi(e) && !isNumberString(e);
}