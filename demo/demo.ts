import Tone from 'tone';
import { render2 } from '../src/Music';
import { examples } from './tunes/examples';
import { Editor } from './Editor';
import { Player } from './Player';
import { Viz } from './Viz';
import tutorial from './tutorial/tutorial.md';

import { harp as harpSamples } from './samples/harp.js';
import { piano as pianoSamples } from './samples/piano/index.js';

import * as smwSoundbank from './samples/smw/soundbank.js';
import { section } from './section';
import { sampler } from './sampler';
import { drumsounds } from './samples/drumset.js';
import tidalsounds from './samples/tidal/tidal.js';
import { rack } from './rack';

/* import * as yaml from 'js-yaml'; */
declare const ace: any;

window.onload = () => {

  const exampleKeys = Object.keys(examples);
  /* let json = examples[exampleKeys[Math.floor(Math.random() * exampleKeys.length)]]; */
  let json = examples.swimming;
  const flip = false;


  var reverb = new Tone.Reverb({
    decay: 0.5,
    preDelay: 0.02,
    wet: 0.5,
  }
  ).toMaster();
  reverb.generate().then((r) => console.log('ready', r));
  /* const synth = new Tone.PolySynth(20, Tone.Synth).toMaster(); */
  const synth = new Tone.PolySynth({
    polyphony: 20,
    volume: -12,
    detune: 0,
    voice: Tone.Synth
  }).set({
    envelope: {
      attack: 0.02,
      decay: 0.04,
      sustain: 0.5,
      release: 0.15
    },
    oscillator: {
      type: 'amsine'
    },
  }).connect(reverb);

  const smw = {
    bass: section(16, smwSoundbank._08, { root: 'D4', loop: true }), // 64
    flute: section(16, smwSoundbank._00, { root: 'D4', loop: true }), // 64
    ePiano: section(16, smwSoundbank._0c, { root: 'D4', loop: true }), // 64
    violin: section(16, smwSoundbank._01, { root: 'D4', loop: true }), // 64
    cello: section(16, smwSoundbank._04, { root: 'D4', loop: true }), // 64
    trumpet: section(16, smwSoundbank._08, { root: 'D4', loop: true }),
    uprightPiano: section(16, smwSoundbank._0a, { root: 'G3', loop: false }), // zu tief
    /* snare: section(16, smwSoundbank._0b, { root: 'D4', loop: false }),
    kick: section(16, smwSoundbank._0f, { root: 'D4', loop: false }),
    hihat: section(16, smwSoundbank._06, { root: 'D4', loop: false }), */
    bongo: section(16, smwSoundbank._10, { root: 'D4', loop: false }),
    hit: section(16, smwSoundbank._12, { root: 'D4', loop: false }),
    clap: section(16, smwSoundbank._13, { root: 'D4', loop: false }),
    '???': section(16, smwSoundbank._c6, { root: 'D4', loop: false }),
    slapBass: section(16, smwSoundbank._0d, { root: 'D4', loop: false }), // 1184
    woodblock: section(16, smwSoundbank._0e, { root: 'D4', loop: false }), // 4752
    marimba: section(16, smwSoundbank._02, { root: 'F4', loop: false }), // 416 // seems detuned
    xylophone: section(16, smwSoundbank._03, { root: 'F4', loop: false }), // 528
    bassGuitar: section(16, smwSoundbank._05, { root: 'C2', loop: true }), // 528
    steelGuitar: section(16, smwSoundbank._07, { root: 'D3', loop: false }), // 2800
    steelDrum: section(16, smwSoundbank._09, { root: 'F4', loop: false }), //5536
    distortedGuitar: section(16, smwSoundbank._11, { root: 'G#3', loop: false }), //2304
    smwDrums: rack({ sd: smwSoundbank._0b, bd: smwSoundbank._0f, hh: smwSoundbank._06 }).connect(reverb)
  }

  const instruments = {
    synth,
    sawtooth: new Tone.PolySynth({
      polyphony: 20,
      volume: -22,
      detune: 0,
      voice: Tone.Synth
    }).set({
      envelope: {
        attack: 0.1,
        decay: 2,
        sustain: 0.3,
        release: 0.15
      },
      oscillator: {
        type: 'amsawtooth'
      },
    }).connect(reverb),
    square: new Tone.PolySynth({
      polyphony: 20,
      volume: -18,
      detune: 0,
      voice: Tone.Synth
    }).set({
      envelope: {
        attack: 0.02,
        decay: 0.04,
        sustain: 0.5,
        release: 0.15
      },
      oscillator: {
        type: 'amsquare'
      },
    }).connect(reverb),
    standard: synth,
    harp: sampler(harpSamples, { transpose: -24 }).connect(reverb),
    piano: sampler(pianoSamples).connect(reverb),
    drums: rack(drumsounds).connect(reverb),
    tidal: rack(tidalsounds).connect(reverb),
    ...(Object.keys(smw).reduce((i, k) => ({ ...i, [k]: smw[k].connect(reverb) }), {}))
  }

  function renderJson(json, position = 0) {
    const rendered = render2(json, false);
    const prettyOutput = rendered.p.map(e =>
      e.path
        ? {
          ...e,
          path:
            '[' +
            e.path
              .map(p => `[${p[0]}, ${p[1]}, ${p[2] || '"?"'}]`)
              .join(', ') +
            ']'
        }
        : e
    );
    const viz = Viz.pianoRoll(rendered, 'viz', position, flip);
    return {
      rendered,
      viz,
      prettyOutput
      /* .map(e => [e.time, 'note', e.m, e.duration]) */
    };
  }

  let prettyOutput, rendered, viz, outputeditor;

  document.getElementById('tutorial').innerHTML = tutorial;
  function play() {
    if (!rendered || !viz) {
      return;
      /* { rendered, viz } = renderJson(json); */
    }
    Player.play(rendered, {
      instruments,
      customSymbols: Object.keys({ ...drumsounds, ...tidalsounds }),
      draw: (time) => Viz.updatePianoRoll(viz, time)
    });
  }

  document.getElementById('play').addEventListener('click', () => {
    play();
  });
  document.getElementById('stop').addEventListener('click', () => {
    Player.stop();
  });
  document.getElementById('pause').addEventListener('click', () => {
    Player.pause();
  });
  document.getElementById('format').addEventListener('click', () => {
    try {
      json = JSON.parse(editor.getValue());
      editor.setValue(Editor.prettyJson(json), -1);
    } catch {
      console.warn('could not format: invalid json');
    }
  });


  const editor = Editor.init('ace', ace, {
    theme: 'monokai',
    mode: 'json',
    value: json,
    change: value => {
      // Get document, or throw exception on error
      /* try {
        const doc = yaml.safeLoad(value);
        console.log(doc);
      } catch (e) {
        console.log(e);
      }
      return; */
      try {
        console.log('render..');
        json = JSON.parse(value);
        const render = renderJson(json, Tone.Transport.seconds);
        prettyOutput = render.prettyOutput;
        viz = render.viz;
        rendered = render.rendered;

        if (!outputeditor) {
          outputeditor = Editor.init('output', ace, {
            theme: 'monokai',
            mode: 'json',
            value: prettyOutput
          });
        }
        outputeditor.setValue(Editor.prettyJson(prettyOutput, true), -1);
      } catch (e) {
        console.warn('invalid json');
      }
    }
  });
  loadTune(json);

  function loadTune(json) {
    editor.setValue(Editor.prettyJson(json), -1);
    // autoplay?
    /* const { prettyOutput } = renderJson(json);
    outputeditor.setValue(Editor.prettyJson(prettyOutput), -1); */
  }

  Object.keys(examples).forEach(example => {
    const id = 'example-' + example;
    if (!document.getElementById(id)) {
      console.log('unused example', id);
      return;
    }
    document.getElementById(id).addEventListener('click', () => {
      loadTune(examples[example]);
    });
  });
};
