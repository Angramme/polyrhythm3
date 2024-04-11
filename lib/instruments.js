import CTX from "./global_context";
const Tone = require("tone");

const SYNTHS = [
  
].concat([
  ['bell.wav', 'bell'],
  ['bongo.wav', 'bongo'],
  ['bonk.wav', 'bongo'],
  ['clave1.wav', 'clave'],
  ['clave2.wav', 'clave'],
  ['clave3.wav', 'clave'],
  ['cow1.wav', 'cowbell'],
  ['cow2.wav', 'cowbell'],
  ['cow3.wav', 'cowbell'],
  ['kick.wav', 'kickdrum'],
].map(([name,type])=>{

  return {
    name: name.split('.')[0],
    make: ()=>
      // new Tone.Player(`https://${window.location.host}/sounds/${name}`),
      new Tone.Player(`/sounds/${name}`),
    trigger: (synth)=> (duration, time, accent) => {
      synth.restart(time, 0, duration);
    },
    icon: type,
  };
}));

const SYNTH_NAMES = SYNTHS.map((S) => S.name);
const SYNTH_ICON_TYPES = SYNTHS.map((S) => S.icon);
export const getSynthNames = () => SYNTH_NAMES;
export const getSynthIconTypes = () => SYNTH_ICON_TYPES;
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
