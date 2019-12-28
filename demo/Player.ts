import Tone from 'tone';
import { Note } from 'tonal';

let active, stopNext, playNext, drawLoop;

declare interface Instrument {
  triggerAttackRelease: (value: string, duration: number, time: number, velocity: number) => any;
  [key: string]: any;
}

declare type Instruments = { [key: string]: Instrument };
declare type PlayOptions = {
  instruments: Instruments;
  draw?: (time: number) => any;
  grain?: number;
  customSymbols?: string[];
  restSymbols?: string[];
  length?: number;
  time?: number;
};
export class Player {
  /* instruments: Instruments, drawCallback?: (time: number) => any, grain = 1 / 30 */
  static play(events, options: PlayOptions) {
    let { draw, grain } = { grain: 1 / 30, ...options };
    Player.startDrawing(draw, grain);
    if (Tone.Transport.state === 'paused') {
      Tone.Transport.start();
      return;
    }
    playNext = events;
    if (active) {
      stopNext = true;
      console.log('already started... wait for loop end');
      return;
    }
    Player.playNow(0, options);
  }

  static startDrawing(callback, grain = 1 / 30) {
    if (callback) {
      drawLoop = new Tone.Loop((time) => {
        Tone.Draw.schedule(() => callback(Tone.Transport.seconds), time)
      }, grain).start(0);
    }
  }

  static playEvents(events, options: PlayOptions) {
    options = { customSymbols: [], restSymbols: ['~', 'r'], ...options };
    let { length, instruments, time, customSymbols, restSymbols } = options;
    if (!instruments) {
      instruments = {
        default: Player.defaultSynth()
      }
    }
    const ahead = 0.06;
    events.push({ time: length - ahead, type: 'loopmark' });
    const part = new Tone.Part((t, e) => {
      if (e.type === 'loopmark') {
        if (stopNext) {
          part.stop(t);
          Tone.Transport.cancel();
          stopNext = false;
        }
        if (playNext) {
          Player.playNow(0, options);
        }
        return;
      }
      let value = e.value || e.m;
      if (!customSymbols.includes(value) && !Note.midi(value)) {
        if (!!value && !restSymbols.includes(value)) {
          console.warn(`unknown symbol ${value}`)
        }
        return;
      }
      if (e.velocity === 0) {
        return;
      }
      const instrument = e.instrument && instruments[e.instrument] ? instruments[e.instrument] : instruments.standard;
      if (e.instrument && !instruments[e.instrument]) {
        console.warn(`instrument "${e.instrument}" not found. falling back to standard instrument`);
      }
      if (!instrument) {
        console.warn('standard instrument not found! cannot play ', e);
      }
      instrument.triggerAttackRelease(value, e.duration, t, e.velocity || 0.9);
    }, events).start(time || '+0');

    part.loop = true;
    part.loopEnd = length;
    if (Tone.Transport.state !== 'started') {
      Tone.Transport.start('+0.05');
    }
  }

  static playNow(time, options: PlayOptions) {
    active = playNext;
    playNext = false;
    stopNext = false;
    Player.playEvents(active.p, { length: active.seconds, time, ...options });
  }

  static stopDrawing() {
    if (drawLoop) {
      drawLoop.stop();
    }
  }

  static stop() {
    playNext = false;
    stopNext = false;
    active = false;
    Player.stopDrawing();
    Tone.Transport.cancel();
    Tone.Transport.stop();
  }
  static pause() {
    Tone.Transport.pause();
    Player.stopDrawing();
  }

  static defaultSynth() {
    return new Tone.PolySynth({
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
    }).toMaster();
  }
}
