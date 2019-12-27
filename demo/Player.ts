import Tone from 'tone';
import { Note } from 'tonal';

let active, stopNext, playNext, drawLoop;

export class Player {
  static play(events, synth, drawCallback?: (time: number) => any, grain = 1 / 30) {
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
    Player.playNow(0, synth);
    console.log('play', Tone.Transport.seconds);
  }

  static startDrawing(callback, grain = 1 / 30) {
    if (callback) {
      console.log('start draw!');
      drawLoop = new Tone.Loop((time) => {
        Tone.Draw.schedule(() => callback(Tone.Transport.seconds), time)
      }, grain).start(0);
    }
  }

  static playEvents(events, options) {
    let { length, synth, time } = options;
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
          Player.playNow(0, synth);
        }
        console.log('loop end: do nothing');
        return;
      }
      const value = e.value || e.m;
      if (!Note.midi(value)) {
        return;
      }
      if (e.velocity === 0) {
        return;
      }
      synth.triggerAttackRelease(value, e.duration, t, e.velocity || 0.9);
    }, events /* .map(e => ({ ...e, value: e.m })) */).start(time || '+0');

    part.loop = true;
    part.loopEnd = length;
    console.log('length', length);
    if (Tone.Transport.state !== 'started') {
      console.log('start transport...');
      Tone.Transport.start('+0.05');
    }
  }

  static playNow(time, synth) {
    active = playNext;
    playNext = false;
    stopNext = false;
    Player.playEvents(active.p, { length: active.seconds, synth, time });
  }

  static stopDrawing() {
    if (drawLoop) {
      console.log('STOP DRAW');
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
