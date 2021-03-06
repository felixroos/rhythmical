import Tone from 'tone';

//TBD add transpose option for keys

export function rack(samples: { [key: string]: any }, options = {}) {
  options = { volume: -12, attack: 0.05, ...options }
  let players = new Tone.Players(samples, options);

  const s = {
    customSymbols: Object.keys(samples),
    triggerAttackRelease: (key, duration, time, velocity) => {
      if (!players.has(key)) {
        console.warn(`key ${key} not found for playback`);
        return;
      }
      const player = players.get(key);
      player.start(time);
      player.stop(time + duration);
    },
    connect: (dest) => { players.connect(dest); return s },
    toMaster: () => { players.toMaster(); return s },
  }
  return s;
}