import Tone from 'tone';

let active, stopNext, playNext;

export class Player {
  static play(events, synth) {
    playNext = events;
    if (active) {
      stopNext = true;
      console.log('already started... wait for loop end');
      return;
    }
    Player.playNow(0, synth);
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
      if (!value || value === 'r') {
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

  static stop() {
    playNext = false;
    stopNext = false;
    active = false;
    Tone.Transport.cancel();
    Tone.Transport.stop();
  }
}
