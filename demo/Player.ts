import Tone from 'tone';
import { Note, Interval, Distance } from 'tonal';

let active, stopNext, playNext, drawLoop;

declare interface Instrument {
  triggerAttackRelease: (value: string, duration: number, velocity: number) => any;
  [key: string]: any;
}

declare type Instruments = { [key: string]: Instrument };

export class Player {
  static play(events, instruments: Instruments, drawCallback?: (time: number) => any, grain = 1 / 30) {
    Player.startDrawing(drawCallback, grain);
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
    Player.playNow(0, instruments);
    console.log('play', Tone.Transport.seconds);
  }

  static startDrawing(callback, grain = 1 / 30) {
    if (callback) {
      drawLoop = new Tone.Loop((time) => {
        Tone.Draw.schedule(() => callback(Tone.Transport.seconds), time)
      }, grain).start(0);
    }
  }

  static playEvents(events, options) {
    let { length, instruments, time } = options;
    const ahead = 0.06;
    events.push({ time: length - ahead, type: 'loopmark' });
    const part = new Tone.Part((t, e) => {
      if (e.type === 'loopmark') {
        /* t += ahead; */
        if (stopNext) {
          part.stop(t);
          Tone.Transport.cancel();
          stopNext = false;
          console.log('loop end: stop next');
        }
        if (playNext) {
          console.log('loop end: play next');
          Player.playNow(0, instruments);
        }
        console.log('loop end: do nothing');
        return;
      }
      let value = e.value || e.m;
      if (!Note.midi(value)) {
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
    }, events /* .map(e => ({ ...e, value: e.m })) */).start(time || '+0');

    part.loop = true;
    part.loopEnd = length;
    console.log('length', length);
    if (Tone.Transport.state !== 'started') {
      console.log('start transport...');
      Tone.Transport.start('+0.05');
    }
  }

  static playNow(time, instruments: Instruments) {
    active = playNext;
    playNext = false;
    stopNext = false;
    Player.playEvents(active.p, { length: active.seconds, instruments, time });
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
}
