import MidiWriter from 'midi-writer-js'

export default function sectionsToMIDI(sections){
    let maxN = sections.reduce((a, c)=>Math.max(c.ratios.length, a), 0);
    let ticks = Array.from({length: maxN}, ()=>0);
    let whole = 128*4;

    let track = new MidiWriter.Track();

    for(let S of sections){
        // length: 1,
        // repeat: 0,
        // swing: 0,
        // ratios: [1, 4], 
        // subdivide: [1],
        // offsets: [0],

        let len = whole * S.length;
        for(let i=0; i<S.offsets.length; i++){
            ticks[i] += S.offsets[i] * len / S.ratios[i] / (S.subdivide[i] || 1) |0;
        }
        for(let rep=0; rep<S.repeat+1; rep++){
            for(let i=0; i<S.ratios.length; i++){
                let dur = len / S.ratios[i] / (S.subdivide[i] || 1);
                for(let j=0; j<S.ratios[i]; j++){
                    track.addEvent(new MidiWriter.NoteEvent({
                        pitch: `${"CDEFGAB"[i%7]}${i/7 +3 |0}`,
                        duration: `T${Math.min(dur |0, 50)}`,
                        startTick: ticks[i],
                    }));
                    ticks[i] += dur |0;
                    for(let h=0; h<S.subdivide[i]-1; h++){
                        track.addEvent(new MidiWriter.NoteEvent({
                            pitch: `${"CDEFGAB"[i%7]}${i/7 +3 |0}`,
                            duration: `T${Math.min(dur |0, 50)}`,
                            startTick: ticks[i],
                            velocity: .7,
                        }));
                        ticks[i] += dur |0;
                    }
                }
            }
        }
        for(let i=0; i<S.offsets.length; i++){
            ticks[i] -= S.offsets[i] * len / S.ratios[i] / (S.subdivide[i] || 1) |0;
        }
    }

    var write = new MidiWriter.Writer(track);
    return write.dataUri();
}