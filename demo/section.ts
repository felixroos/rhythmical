import Tone from 'tone';
import { Note } from 'tonal';

export function section(voices, sample, options: { root: string, loop: boolean, detune?: number }) {
  let { root, loop } = { root: 'A4', loop: false, ...options };
  const players = Array(voices).fill(0).map((_, i) => new Tone.Player({
    url: sample,
    loop,
    /* loopEnd: 64 / 1000, */
    onload: () => {
      /* console.log(`voice ${i} ready`); */
    }
  }));
  const rootFrequency = Note.freq(root);
  const s = {
    triggerAttackRelease: (value, duration, time) => {
      const player = players.find(p => p.state === 'stopped');
      if (!player) {
        console.warn('not enough players! cannot play', value);
        return;
      }
      player.playbackRate = Note.freq(value) / rootFrequency;
      player.start(time);
      if (loop) {
        player.stop(time + duration);
      }
    },
    toMaster: () => {
      players.forEach(p => p.toMaster());
      return s;
    },
    connect: (dest) => {
      players.forEach(p => p.connect(dest));
      return s;
    }
  }
  return s;
}