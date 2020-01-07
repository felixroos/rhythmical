import { Note } from 'tonal';
import { Instruments, Player } from './Player';

export interface RenderedEvent<T> {
  m: T;
  length: number;
  velocity: number;
  path: number[][];
  time: number;
  duration: number;
  names?: string[];
  block?: string;
}
const ns = "http://www.w3.org/2000/svg";
let renderStart = 0;
const debounce = 200;

declare type PianoRollOptions = {
  position?: number;
  flip?: false;
  head?: 0.5;
  instruments?: Instruments
}
export class Viz {
  static instrumentRange(events: RenderedEvent<string>[]) {

  }
  static pitchRange(events: RenderedEvent<string>[]) {
    return events.reduce((range, event) => [
      !!Note.midi(event.m) && (!range[0] || Note.midi(event.m) < Note.midi(range[0])) ? event.m : range[0],
      !!Note.midi(event.m) && (!range[1] || Note.midi(event.m) > Note.midi(range[1])) ? event.m : range[1],
    ], []);
  }


  static pianoRoll(output: { seconds: number, p: RenderedEvent<string>[] }, id: string, options: PianoRollOptions = {}) {

    let { position, flip, head, instruments } = {
      position: 0, flip: false, head: 0.5,
      ...options
    }
    const el = document.getElementById(id);
    /* if (Date.now() - renderStart < debounce) {
      return;
    } */
    renderStart = Date.now();
    const { levels, allEvents, instrumentKeys } = output.p.reduce((r, e) => {
      if (typeof e.m === 'string') { // !!Note.midi(e.m)
        r.allEvents.push(e);
      }
      r.levels = Math.max(e.path ? e.path.length : 0, r.levels);
      if (e['instrument'] && !r.instrumentKeys.includes(e['instrument'])) {
        r.instrumentKeys.push(e['instrument'])
      }
      return r;
    }, { levels: 0, allEvents: [], instrumentKeys: [] });
    let symbols = [];
    if (instruments) {
      symbols = Player.getInstrumentSymbols(instrumentKeys.map(k => instruments[k]))
        .filter(i => !!i)
    }
    const pitchEvents = allEvents.filter(e => !!Note.midi(e.m));
    const instrumentEvents = allEvents.filter(e => symbols.includes(e.m));
    const usedSymbols = symbols.filter(s => !!instrumentEvents.find(e => e.m === s));
    /* const levelColor = (level, velocity = 1) => `hsla(257,${level / levels * 100}%,74%, ${velocity})`; */
    /* const levelColor = (level, velocity = 1) => `hsla(257,${level / levels * 100}%,74%, ${level / levels})`; */
    const levelColor = (level, velocity = 1) => `hsla(${level / levels * 100},${level / levels * 100}%,74%, ${1 - (level / levels)})`;

    const blockColor = (block, setup: { h: string, s: string, l: string, a: string }) => {
      const params = {
        level: (b) => b.path.length / levels,
        velocity: (b) => b.velocity,
      };
      const parse = (v: string, f: number) => Math.round((Object.keys(params).includes(setup[v]) ? params[setup[v]](block) * f : setup[v]) * 10) / 10;
      return `hsla(${parse('h', 360)},${parse('s', 100)}%,${parse('l', 100)}%, ${parse('a', 1)})`;
    }

    const range = Viz.pitchRange(pitchEvents);
    const pitchCount = Note.midi(range[1]) - Note.midi(range[0]) + 1;
    const rows = pitchCount + symbols.length;
    const vp = [el.clientWidth, el.clientHeight];


    let pps, ppp;
    if (!flip) {
      pps = Math.max(vp[0] / output.seconds, 100); // pixels per second
      // ppp = vp[1] / pitchCount; // pixels per pitch
      ppp = vp[1] / rows; // pixels per pitch
    } else {
      pps = Math.max(vp[1] / output.seconds, 100); // pixels per second
      // ppp = vp[0] / pitchCount; // pixels per pitch
      ppp = vp[0] / rows; // pixels per pitch
    }

    const pitchPosition = (pitch) => {
      return ((Note.midi(range[1]) - Note.midi(pitch)) * ppp);
    }
    const svg = document.createElementNS(ns, "svg");
    const blocks = document.createElementNS(ns, "g");
    const pitches = document.createElementNS(ns, "g");
    /* svg.setAttribute("width", vp[0] + 'px');
    svg.setAttribute("height", vp[1] + 'px'); */
    svg.setAttribute("viewBox", `-${head * vp[0]} 0 ${vp[0]} ${vp[1]}`);

    output.p = output.p.filter(e => !!e.path).sort((a, b) => b.path.length - a.path.length);

    output.p.filter(e => !!e.block || !!Note.midi(e.m)).forEach((event: RenderedEvent<string>) => {
      let { time, duration, m } = event;
      let width, height, x, y, totalSize = 1, pitchRange = [m, m], fill = `rgba(183, 223, 69, ${event.velocity})`,
        stroke = 'rgb(37, 37, 37)';

      if (!!event.block) {
        /* if (event.path.length === 1) {
          return;
        } */
        const blockPitches =
          output.p.filter(e => e.path.length > event.path.length &&
            (':' + e.path.map(p => p.join('.')).join('-'))
              .includes((':' + event.path.map(p => p.join('.')).join('-'))))
            .map(p => ({ ...p, name: (':' + p.path.map(p => p.join('.')).join('-')) }))
        pitchRange = Viz.pitchRange(blockPitches);
        const customIndices = blockPitches.map(e => symbols.indexOf(e.m));
        
        const eventSize = customIndices.length ? Math.max(...customIndices) - Math.min(...customIndices) + 1 : 0;
        const pitchSize = pitchRange.length ? Note.midi(pitchRange[1]) - Note.midi(pitchRange[0]) + 1 : 0;
        totalSize = /* eventSize+ */pitchSize;
        const color = blockColor(event, { h: '257', s: 'level', l: 'level', a: '0.7' });
        fill = color;
        stroke = blockColor(event, { h: '257', s: 'level', l: 'level', a: '1' });

      } else if (!Note.midi(event.m)) {
        return;
      }

      if (!flip) {
        width = duration * pps;
        height = ppp * totalSize;
        x = ((time - position)) * pps;
        y = pitchPosition(pitchRange[1]) || 0;
        /* if ((x + duration * pps) < 0 || x > vp[0] || y < 0 || y > vp[1]) {
          return;
        } */
      } else {
        width = ppp * totalSize;
        height = duration * pps;
        x = vp[0] - pitchPosition(pitchRange[0]) || 0;
        y = vp[1] - (((output.seconds + time - position + duration) % output.seconds) * pps);

        /* if (x < 0 || x > vp[0] || (y + duration * pps) < 0 || y > vp[1]) {
          return;
        } */
      }
      const rect = document.createElementNS(ns, "rect");
      const radius = Math.floor(/* Math.min( */ppp / 2/* , 40) */);
      rect.setAttribute("width", Math.round(width * 2) / 2 + 'px');
      rect.setAttribute("height", Math.round(height * 2) / 2 + 'px');
      rect.setAttribute("x", Math.round(x * 2) / 2 + 'px');
      rect.setAttribute("y", Math.round(y * 2) / 2 + 'px');
      rect.setAttribute("rx", radius + 'px');
      rect.setAttribute("ry", radius + 'px');
      /* rect.setAttribute("z-index", (!event.block ? levels : event.path.length) + ''); */
      rect.setAttribute("fill", fill);
      rect.setAttribute("style", `stroke: ${stroke}; stroke-width: ${!!event.block ? 1 : 1}px;z-index:${(!event.block ? levels : event.path.length)}`);
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

    const playhead = document.getElementById('playhead') || document.createElementNS(ns, 'line');
    playhead.setAttributeNS(null, 'id', 'playhead');
    playhead.setAttributeNS(null, 'x1', '0');
    playhead.setAttributeNS(null, 'y1', 0 + '');
    playhead.setAttributeNS(null, 'x2', '0');
    playhead.setAttributeNS(null, 'y2', vp[1] + '');
    playhead.setAttributeNS(null, 'style', `stroke:white;stroke-width:2`);

    function getLoop(n = 0) {
      const loop = document.createElementNS(ns, "g");
      loop.appendChild(blocks.cloneNode(true));
      loop.appendChild(pitches.cloneNode(true));
      loop.setAttributeNS(null, 'transform', `translate(${n * output.seconds * pps + ''},0)`);
      return loop;
    }

    const before = getLoop(-1);
    svg.appendChild(before);
    const loop = getLoop(0);
    svg.appendChild(loop);
    const after = getLoop(1);
    svg.appendChild(after);

    svg.appendChild(playhead);

    el.appendChild(svg);
    const renderEnd = Date.now();
    const renderTime = renderEnd - renderStart;
    console.log(`took ${renderTime}ms to render`);
    return { svg, el, pps, ppp, flip, head, vp, output, playhead };
  }

  static updatePianoRoll({ svg, el, pps, flip, head, vp, output, playhead }, time) {
    if (!flip) {
      const offsetX = Math.round(((time % output.seconds) * pps - head * vp[0]) * 2) / 2;
      svg.setAttributeNS(null, 'viewBox', `${offsetX} 0 ${el.clientWidth} ${el.clientHeight}`);
      playhead.setAttributeNS(null, 'x1', head * vp[0] + offsetX + '');
      playhead.setAttributeNS(null, 'x2', head * vp[0] + offsetX + '');
      playhead.setAttributeNS(null, 'style', `stroke:white;stroke-width:2`);
    }
  }
}