import { NestedRhythm } from './Rhythm';

export interface Nested<T> extends Array<T | Nested<T>> { };

export class Brackets {


  /** START OF ALTERNATIVE IMPLEMENTATION
   * The following methods are alternatives to using JSON.parse. They still do not work correctly with marked feet */
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
  /** END OF ALTERNATIVE IMPLEMENTATION */



  static simplify(strings: string[] | string): string[] | string {
    if (typeof strings === 'string') {
      return strings;
    }
    strings = strings.filter(s => (typeof s === 'string' && !!s) || s.length);
    if (strings.length === 1) {
      return strings[0];
    }
    return strings;
  }

  static divide(string: string, symbol: string): string[] | string {
    const divided = string.split(symbol);
    return Brackets.simplify(divided);
  }

  static divideHierarchy(string: string, symbolHierarchy: string[]) {
    if (!symbolHierarchy.length) {
      return string;
    }
    const divided = Brackets.divide(string, symbolHierarchy[0]);
    symbolHierarchy = symbolHierarchy.slice(1);
    if (typeof divided === 'string') {
      return Brackets.divideHierarchy(divided, symbolHierarchy);
    }
    return divided.map(part => Brackets.divideHierarchy(part, symbolHierarchy));
  }

  static rabbit(hole, fn) {
    hole = fn(hole);
    if (Array.isArray(hole)) {
      hole = hole.map(channel => Brackets.rabbit(channel, fn))
    }
    return hole;
  }


  static simplifyDeep(nested: string | Nested<string>) {
    if (typeof nested === 'string') {
      return Brackets.simplify(nested);
    }
    return Brackets.rabbit(nested, (sub) => {
      return Brackets.simplify(sub);
    });
  }

  static divideDeep(tree: Nested<string> | string, divideHierarchy = [' | ', ' . ', ' ']) {
    const divided = Brackets.rabbit(tree, (s) => {
      if (typeof s === 'string') {
        return Brackets.divideHierarchy(s, divideHierarchy);
      }
      return s;
    });
    return Brackets.simplifyDeep(divided);
  }

  static toJson(string) {
    const symbols = '\\w\\d#\\*\\.\\|\\~\\-';
    const opening = '\\[';
    const closing = '\\]';
    const space = '\\s';
    let toParse =
      ('[' + string + ']')
        .replace(new RegExp(`([${symbols}|${space}]+)`, 'g'), '"$1"')
        .replace(new RegExp(`${closing}${space}*${opening}`, 'g'), '],[')
        .replace(new RegExp(`"${opening}`, 'g'), '",[')
        .replace(new RegExp(`${closing}"`, 'g'), '],"')
        .split(' ').join('","')
    try {
      let parsed = Brackets.simplifyDeep(JSON.parse(toParse));
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