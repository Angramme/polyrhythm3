import CTX from "./global_context";
const Tone = require("tone");

const SYNTHS = [
  {
    name: "string",
    make: () =>
      new Tone.PluckSynth({
        attackNoise: 1,
        dampening: 4000,
        resonance: 0.75,
      }),
    trigger: (synth) => (duration, time, accent) =>
      synth.triggerAttackRelease(accent ? "C5" : "C4", duration, time, 0.2),
  },
  {
    name: "hi-hat",
    make: () =>
      new Tone.NoiseSynth({
        volume: -15,
        filter: {
          Q: 1,
        },
        envelope: {
          attack: 0.01,
          decay: 0.15,
        },
        filterEnvelope: {
          attack: 0.01,
          decay: 0.03,
          baseFrequency: 4000,
          octaves: -2.5,
          exponent: 4,
        },
      }),
    trigger: (synth) => (duration, time, accent) =>
      synth.triggerAttackRelease(duration, time, 0.8),
  },
  {
    name: "kick",
    make: () =>
      new Tone.MembraneSynth({
        pitchDecay: 0.05,
        octaves: 2,
        oscillator: {
          type: "sine",
        },
        envelope: {
          attack: 0.001,
          decay: 0.2,
          sustain: 0.05,
          release: 0.01,
          attackCurve: "exponential",
        },
      }),
    trigger: (synth) => (duration, time, accent) =>
      synth.triggerAttackRelease(accent ? "G2" : "E2", duration, time, 0.8),
  },
  {
    name: "click",
    make: () =>
      new Tone.AMSynth({
        harmonicity: 3,
        detune: 0,
        oscillator: {
          type: "triangle",
        },
        envelope: {
          attack: 0.01,
          decay: 0.01,
          sustain: 0.8,
          release: 0.4,
        },
        modulation: {
          type: "square",
        },
        modulationEnvelope: {
          attack: 0.5,
          decay: 0,
          sustain: 1,
          release: 0.5,
        },
      }),
    trigger: (synth) => (duration, time, accent) =>
      synth.triggerAttackRelease(
        accent ? "C5" : "F5",
        0.1,
        time,
        accent ? 1 : 0.8
      ),
  },
].concat([
  'Cowbell-1.wav',
  'Cowbell-2.wav',
  'Cowbell-3.wav',
  'Clave-1.wav',
  'Closed-Hi-Hat-1.wav',
  'Ensoniq-SQ-1-Ride-Cymbal.wav',
].map(name=>{

  return {
    name: name.split('.')[0],
    make: ()=>
      new Tone.Player(`/sounds/${name}`),
    trigger: (synth)=> (duration, time, accent) => {
      synth.restart(time, 0, duration);
    }
  };
}));

const SYNTH_NAMES = SYNTHS.map((S) => S.name);
export const getSynthNames = () => SYNTH_NAMES;
function makeSynth(id) {
  return [SYNTHS[id].make(), id];
}
function makeTrigger([synth, id]) {
  return SYNTHS[id].trigger(synth);
}

export function init(instruments, trackn) {
  const c = CTX();

  if (!c.old_synths) c.old_synths = [];

  c.synths = instruments.slice(0, trackn).map((id, i) => {
    if (c.old_synths[i] && c.old_synths[i][0] && c.old_synths[i][1] == id) {
      // recycle if it is the same type of instrument
      const ret = [c.old_synths[i][0], id];
      c.old_synths[i][0] = null;
      return ret;
    } else {
      // otherwise create new
      const [nsynth, nid] = makeSynth(id);
      return [nsynth.toMaster(), nid];
    }
  });
  if (c.old_synths) {
    // delete unused cached instruments
    c.old_synths.forEach(([synth, id]) => {
      if (synth) {
        // if null then it was reused or already deleted
        synth.disconnect();
        synth.dispose();
      }
    });
    c.old_synths = [];
  }
  c.triggers = c.synths.map((x) => makeTrigger(x));

  return function cleanup() {
    // delete references to old instruments
    c.triggers = [];

    c.old_synths = c.synths;
    c.synths = [];
  };
}

export const getSynths = () => CTX().synths;
export const getInstruments = () => CTX().triggers;
export const getNewInstrument = (trackid) => {
  return trackid % getSynthNames().length;
};
