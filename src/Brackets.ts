import { NestedRhythm } from './Rhythm';

export class Brackets {
  static outerPair(string: string): number[] | false {
    let openingBracket = string.indexOf('[');
    if (openingBracket === -1) {
      return false;
    }
    let i = openingBracket + 1;
    const chars = string.split('');
    let open = 1;
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
  }

  static outerPairs(string: string) {
    let pairs = [];
    let i = 0;
    while (string) {
      const pair = Brackets.outerPair(string);
      if (pair) {
        pairs.push(pair.map(_i => _i + i));
        i += pair[1];
        string = string.slice(pair[1]);
      } else {
        string = '';
      }
    }
    return pairs;
  }

  static split(string: string, modify: (part: string) => string[] = s => [s]) {
    const pairs = Brackets.outerPairs(string);
    if (!pairs.length) {
      return string;
    }
    return pairs.reduce((state, pair, i) => {
      const next = pairs[i + 1];
      /* const before = modify(string.slice(state.index, pair[0]));
      let inside = modify(string.slice(pair[0] + 1, pair[1]));
      const after = modify(string.slice(pair[1] + 1, next ? next[0] : string.length)); */
      const before = string.slice(state.index, pair[0]);
      let inside = string.slice(pair[0] + 1, pair[1]);
      const after = string.slice(pair[1] + 1, next ? next[0] : string.length);
      const parts = [before, inside, after].map(modify);
      return {
        index: state.index + next ? next[0] : 0,
        /* parts: [before, (inside.length === 1 ? inside : [inside]), after] */
        /* parts: [before, [inside], after] */
        parts: [
          ...state.parts,
          ...parts[0],
          ...(parts[1].length === 1 ? parts[1] : [parts[1]]),
          ...parts[2]
        ]
      }
    }, { parts: [], index: 0 }).parts.filter(s => !!s)
  }

  static resolve(string: string | NestedRhythm<string>, modify: (string: string) => string[] = s => [s]) {
    if (typeof string === 'string') {
      string = Brackets.split(string, modify);
    }
    if (typeof string === 'string') {
      return string;
    }
    if (Array.isArray(string)) {
      return string.map(part => Brackets.resolve(part, modify));
    }
  }

  static parse(string) {
    const symbol = '[\\w\\d#\\.\\|]';
    const opening = '\\[';
    const closing = '\\]';
    const space = '\\s';
    const spaceAfterOpening = new RegExp(`${opening}${space}+`, 'g');
    const spaceBeforeClosing = new RegExp(`${space}+${closing}`, 'g');
    const symbolsBeforeOpening = new RegExp(`(${symbol}+)${space}*${opening}`, 'g');
    const symbolsAfterClosing = new RegExp(`${closing}${space}*(${symbol}+)`, 'g');
    const spaceBetween = new RegExp(`${closing}${space}*${opening}`, 'g');
    const symbolsAfterOpening = new RegExp(`${opening}(${symbol}+)`, 'g');
    const symbolsBeforeClosing = new RegExp(`(${symbol}+)${closing}`, 'g');
    const outerClosing = new RegExp(`${closing}"${closing}$`);
    const outerOpening = new RegExp(`^${opening}"${opening}`);
    const toParse = `[${
      string
        .replace(spaceAfterOpening, '[') // trim spaces after opening brackets
        .replace(spaceBeforeClosing, ']') // trim spaces before closing brackets
        .replace(symbolsBeforeOpening, '$1",[')
        .replace(symbolsAfterClosing, '],"$1')
        .replace(spaceBetween, '],[')
        .split(' ').join('","')
      }]`
      .replace(symbolsAfterOpening, '["$1')
      .replace(symbolsBeforeClosing, '$1"]')
      .replace(outerClosing, ']')
      .replace(outerOpening, '[');


    try {
      const parsed = JSON.parse(toParse);//.map(s => s.split(' '));
      if (parsed.length === 1) {
        return parsed[0];
      }
      return parsed;
    } catch {
      console.error(`cannot parse ${toParse} from "${string}"`);
      return string;
    }
  }
}