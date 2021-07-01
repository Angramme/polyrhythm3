const Tone = require('tone')
const { withScale, addTimes } = require('./helpers');

export default function scheduleSections(callback, sections){
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
                ir++){

                const accent = ir % subd == 0;
                Tone.Transport.schedule(time=>callback(time, {
                        accent,
                        duration: withScale(S.length* .98 / (r*subd))(`1n`),
                        track: ri,
                    }), cur_time);
                cur_time = addTimes(cur_time, step);
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