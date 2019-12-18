import Tone from 'tone';
import { render } from '../src/Music';
import { Rhythm } from '../src/Rhythm';

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

function playEvents(events, length, synth) {
  const part = new Tone.Part((time, e) => {
    if (e.value === 'r') {
      return;
    }
    synth.triggerAttackRelease(e.value, e.duration, time);
  }, events).start(0);
  part.loop = true;
  part.loopEnd = length;
  Tone.Transport.start('+1');
}

document.getElementById('play').addEventListener('click', () => {
  let snippet = document.getElementById('snippet')['value'];
  const json = JSON.parse(snippet);
  console.log('click!', snippet);
  const events = render(json, 20);
  playEvents(events, 20, synth);
})