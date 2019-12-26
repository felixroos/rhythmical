import Tone from 'tone';
import { render2 } from '../src/Music';
import { examples } from './tunes/examples';
import { Editor } from './Editor';
import { Player } from './Player';


import tutorial from './tutorial/tutorial.md';

let json = examples.swimming;
/* let json = 'A4'; */

const synth = new Tone.PolySynth(20, Tone.Synth).toMaster();
synth.set({
  envelope: {
    attack: 0.02,
    decay: 0.04,
    sustain: 0.5,
    release: 0.05
  },
  oscillator: {
    type: 'amsine'
  },
  volume: -16
});

function renderJson(json) {
  const rendered = render2(json, false);
  return {
    ...rendered,
    p: rendered.p.map(e =>
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
    )
    /* .map(e => [e.time, 'note', e.m, e.duration]) */
  };
}

let rendered = renderJson(json);

declare const ace: any;

window.onload = () => {
  document.getElementById('tutorial').innerHTML = tutorial;
  function play(json) {
    const events = renderJson(json);
    Player.play(events, synth);
  }

  function stop() {
    Player.stop();
  }

  document.getElementById('play').addEventListener('click', () => {
    play(json);
  });
  document.getElementById('stop').addEventListener('click', () => {
    stop();
  });

  const outputeditor = Editor.init('output', ace, {
    theme: 'monokai',
    mode: 'json',
    value: rendered
  });

  const editor = Editor.init('ace', ace, {
    theme: 'monokai',
    mode: 'json',
    value: json,
    change: value => {
      try {
        json = JSON.parse(value);
        rendered = renderJson(json);
        outputeditor.setValue(Editor.prettyJson(rendered), -1);
        /* tune = parsed; */
        console.log('valid json', json);
      } catch (e) {
        console.warn('invalid json');
      }
    }
  });

  function loadTune(json) {
    editor.setValue(Editor.prettyJson(json), -1);
    rendered = renderJson(json);
    outputeditor.setValue(Editor.prettyJson(rendered), -1);
  }

  Object.keys(examples).forEach(example => {
    const id = 'example-' + example;
    if (!document.getElementById(id)) {
      console.log('unused example', id);
      return;
    }
    document.getElementById(id).addEventListener('click', () => {
      loadTune(examples[example]);
      play(examples[example]);
    });
  });
};
