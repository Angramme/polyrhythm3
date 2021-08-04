import CTX from './global_context'
const Tone = require('tone');

// export const getSynthNames = ()=>[
//         'pluck',
//         'kick',
//         'crash cymbal',
//     ];
export const getSynthNames = ()=>[
        'kick',
        'string',
        'hi-hat',
        'click',
    ];
function makeSynth(id){
    // return [new [
    //     Tone.PluckSynth,
    //     Tone.MembraneSynth,
    //     Tone.MetalSynth,
    // ][id](), id];

    return [
        [
            ()=>new Tone.MembraneSynth({ // kick
                pitchDecay: 0.05 ,
                octaves: 2 ,
                oscillator: {
                    type: 'sine'
                }  ,
                envelope: {
                    attack: 0.001 ,
                    decay: 0.2 ,
                    sustain: 0.05 ,
                    release: 0.01 ,
                    attackCurve: 'exponential'
                }
            }),
            ()=>new Tone.PluckSynth({ // string
                attackNoise  : 1 ,
                dampening  : 4000 ,
                resonance  : 0.7
            }),
            // ()=>new Tone.PluckSynth({ // string
            //     attackNoise  : 1 ,
            //     dampening  : 4000 ,
            //     resonance  : 0.7
            // }),
            ()=>new Tone.Synth({ // click
                oscillator: {
                    type: 'sine',
                    modulationFrequency: 0.2
                },
                envelope: {
                    //attack: 0,
                    decay: 0.1,
                    //sustain: 0,
                    release: 0.1,
                }  
            }),
            ()=>new Tone.NoiseSynth({ // hihat
                volume:-15,
                filter : {
                    Q : 1
                },
                envelope : {
                    attack : 0.01,
                    decay : 0.15
                },
                filterEnvelope : {
                    attack : 0.01,
                    decay : 0.03,
                    baseFrequency : 4000,
                    octaves : -2.5,
                    exponent : 4,
                }
            }),
        ][id]()
    , id];
}
function makeTrigger([synth, id]){
    // return [
    //     (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'E3' : 'E2', duration, time, 1.2),
    //     (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'C1' : 'F1', duration, time, accent ? 1 : 0.8),
    //     (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'C3' : 'F3', duration, time, 0.2),
    // ][id];
    return [
        (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'E2' : 'C2', duration, time, 0.8),
        (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'C5' : 'C4', duration, time, 0.2),
        (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'C5' : 'F4', duration, time, accent ? 1 : 0.8),
        (duration, time, accent)=>synth.triggerAttackRelease(accent ? 'C5' : 'C4', duration, time, 0.8),
    ][id];
    // return (duration, time, accent)=>{
    //     console.log("trigger", time, Tone.now());
    //     return x(duration, time, accent);
    // }
}

export function init(instruments, trackn){
    const c = CTX();

    // c.vol = c.old_vol || new Tone.Volume('-22').toDestination();
    // c.old_vol = null;

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
                // return [nsynth.connect(c.vol), nid];
                // return [nsynth.toDestination(), nid];
                return [nsynth.toMaster(), nid];
            }
        });
    if(c.old_synths){ // delete unused cached instruments
        c.old_synths
            .forEach(([synth, id])=>{
                if(synth){ // if null then it was reused or already deleted
                    synth.disconnect();
                    synth.dispose(); 
                }
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

        // if(c.old_vol) c.old_vol.dispose();
        // c.old_vol = c.vol;
        // c.vol = null;
    }
}

export const getSynths = ()=>CTX().synths;
export const getInstruments = ()=>CTX().triggers;
export const getNewInstrument = (trackid)=>{
    return trackid % getSynthNames().length;
}