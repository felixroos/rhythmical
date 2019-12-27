import Tone from 'tone';
import { render2 } from '../src/Music';
import { examples } from './tunes/examples';
import { Editor } from './Editor';
import { Player } from './Player';
import { Viz } from './Viz';
import tutorial from './tutorial/tutorial.md';

const exampleKeys = Object.keys(examples);
let json = examples[exampleKeys[Math.floor(Math.random() * exampleKeys.length)]];
/* let json = examples.swimming; */
/* let json = 'A4'; */

const flip = false;

var reverb = new Tone.Reverb({
  decay: 0.6,
  preDelay: 0.01,
  wet: 0.5,
}
).toMaster();
reverb.generate().then((r) => console.log('ready', r));
/* const synth = new Tone.PolySynth(20, Tone.Synth).toMaster(); */
const synth = new Tone.PolySynth(20, Tone.Synth).connect(reverb);

synth.set({
  envelope: {
    attack: 0.02,
    decay: 0.04,
    sustain: 0.5,
    release: 0.15
  },
  oscillator: {
    type: 'amsine'
  },
  volume: -12
});


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

let { rendered, prettyOutput } = renderJson(json);

declare const ace: any;

window.onload = () => {

  document.getElementById('tutorial').innerHTML = tutorial;
  function play(json) {
    const { rendered, viz } = renderJson(json);
    Player.play(rendered, synth, (time) => Viz.updatePianoRoll(viz, time), 1 / 30);
  }

  document.getElementById('play').addEventListener('click', () => {
    play(json);
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

  const outputeditor = Editor.init('output', ace, {
    theme: 'monokai',
    mode: 'json',
    value: prettyOutput
  });

  const editor = Editor.init('ace', ace, {
    theme: 'monokai',
    mode: 'json',
    value: json,
    change: value => {
      try {
        json = JSON.parse(value);
        const { rendered, prettyOutput } = renderJson(json, Tone.Transport.seconds);
        outputeditor.setValue(Editor.prettyJson(prettyOutput), -1);
        /* tune = parsed; */
      } catch (e) {
        console.warn('invalid json');
      }
    }
  });

  function loadTune(json) {
    editor.setValue(Editor.prettyJson(json), -1);
    const { prettyOutput } = renderJson(json);
    outputeditor.setValue(Editor.prettyJson(prettyOutput), -1);
  }

  Object.keys(examples).forEach(example => {
    const id = 'example-' + example;
    if (!document.getElementById(id)) {
      console.log('unused example', id);
      return;
    }
    document.getElementById(id).addEventListener('click', () => {
      loadTune(examples[example]);
      /* play(examples[example]); */
    });
  });
};
