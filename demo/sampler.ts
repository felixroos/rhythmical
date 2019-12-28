
import { Distance, Interval } from 'tonal';
import Tone from 'tone';

export function sampler(samples, options = {}) {
  options = { volume: -12, attack: 0.05, ...options }
  let sampler = new Tone.Sampler(samples, options);
  const s = {
    triggerAttackRelease: (note, duration, velocity) => {
      if (options['transpose']) {
        note = Distance.transpose(note, Interval.fromSemitones(options['transpose']));
      }
      sampler.triggerAttackRelease(note, duration, velocity);
    },
    connect: (dest) => { sampler.connect(dest); return s },
    toMaster: () => { sampler.toMaster(); return s },
  }
  return s;
}