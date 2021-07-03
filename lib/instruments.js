import CTX from './global_context'
const Tone = require('tone');

export const getSynthNames = ()=>[
        'pluck',
        'kick',
        'crash cymbal',
    ];
function makeSynth(id){
    return [new [
        Tone.PluckSynth,
        Tone.MembraneSynth,
        Tone.MetalSynth,
    ][id](), id];
}
function makeTrigger([synth, id]){
    return [
        (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'E3' : 'E2', duration, time, 1.2),
        (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'C1' : 'F1', duration, time, accent ? 1 : 0.8),
        (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'C3' : 'F3', duration, time, 0.2),
    ][id];
}

export function init(instruments, trackn){
    const c = CTX();

    c.vol = c.old_vol || new Tone.Volume('-22').toDestination();
    c.old_vol = null;

    if(!c.old_synths) c.old_synths = [];

    c.synths = instruments
        .slice(0, trackn)
        .map((id, i)=>{
            if(c.old_synths[i] && c.old_synths[i][0] && c.old_synths[i][1] == id){
                // recycle if it is the same type of instrument
                const ret = [c.old_synths[i][0], id]; 
                c.old_synths[i][0] = null;
                return ret;
            }else{
                // otherwise create new
                const [nsynth, nid] = makeSynth(id);
                return [nsynth.connect(c.vol), nid];
            }
        });
    if(c.old_synths){ // delete unused cached instruments
        c.old_synths
            .forEach(([synth, id])=>{
                if(synth) synth.dispose(); // if null then it was reused or already deleted
            });
        c.old_synths = [];
    }
    c.triggers = c.synths
        .map(x=>makeTrigger(x));

    return function cleanup(){
        // delete references to old instruments
        c.triggers = [];

        c.old_synths = c.synths;
        c.synths = [];

        if(c.old_vol) c.old_vol.dispose();
        c.old_vol = c.vol;
        c.vol = null;
    }
}

export const getSynths = ()=>CTX().synths;
export const getInstruments = ()=>CTX().triggers;
export const getNewInstrument = (trackid)=>{
    return trackid % getSynthNames().length;
}