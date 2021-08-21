const Tone = require('tone')
const { withScale, addTimes } = require('./helpers');

export default function scheduleSections(callback, sections){
    const measure_count = sections.reduce(
        (s, c) => s + c.length * (c.repeat + 1),
        0
    );

    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = withScale(measure_count)("1m");
    Tone.Transport.timeSignature = [4, 4];

    let start_time = 0;
    sections.forEach((S, si)=>{
        const mduration = withScale(S.length)(`${1 + S.repeat}m`);
        S.ratios.forEach((r, ri)=>{
            if(r <= 0) return;
            const subd = S.subdivide[ri] || 1;
            const step = withScale(S.length/(r*subd))(`1n`);
            const offst = withScale(S.offsets[ri] || 0)(step);

            for(
                let ir = 0, cur_time = addTimes(start_time, offst); 
                ir < r*subd*(1 + S.repeat); 
                ir++, cur_time = addTimes(cur_time, step)){

                const note_accent = ir % subd == 0;
                const note_duration = withScale(S.length* .98 / (r*subd))(`1n`);
                const note_config = {
                        accent: note_accent,
                        duration: note_duration,
                        track: ri,
                    };
                Tone.Transport.schedule(time=>callback(time, note_config), cur_time);
            }
        });
        Tone.Transport.schedule(time=>{
            // swing
            setTimeout(()=>{
                Tone.Transport.swing = S.swing;
            }, (time - Tone.Transport.now())*1000 );
        }, start_time);
        start_time = addTimes(start_time, mduration);
    })
}