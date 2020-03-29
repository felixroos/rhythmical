import k from './drummer/kick.wav';
import s from './drummer/snare.wav';
import h from './drummer/hihat.wav';
import r from './drummer/ride.wav';
import c from './drummer/crash.wav';
import rs from './drummer/rimshot.wav';

/*
bd = bass drum
cb = cow bell
ch = closed hat
cl = clave
cp = clap
cy = cymbal
hc = high conga
ht = high tom
lc = low conga
lt = low tom
ma = ?
mc = middle conga
mt = middle tom
oh = open hat
rs = rim shot
sd = snare drum
*/
export const kick = k;
export const snare = s;
export const hihat = h;
export const ride = r;
export const crash = c;
export const rimshot = rs;
export const drumsounds = {
  kick,
  snare,
  hihat,
  ride,
  crash,
  rimshot,
  bd: k,
  sd: s,
  hh: h
};
export const drumset = [kick, snare, hihat, ride, crash, rimshot];
export const drumSamples = {
  C1: kick,
  C2: snare,
  C3: hihat,
  C4: ride,
  C5: crash,
  C6: rimshot
};
