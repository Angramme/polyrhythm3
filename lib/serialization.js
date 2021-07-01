
const d1 = '_';
const d2 = 'a';

export function sectionsToQuery(sections, bpm){
    return '?' + Object.entries({
        lengths: sections.map(x=>x.length).join(d1),
        repeats: sections.map(x=>x.repeat).join(d1),
        swings: sections.map(x=>x.swing).join(d1),
        ratios: sections.map(x=>x.ratios.join(d2)).join(d1),
        subdivides: sections.map(x=>x.subdivide.join(d2)).join(d1),
        offsets: sections.map(x=>x.offsets.join(d2)).join(d1),
        bpm: bpm,
    })
    .map(([k, v])=>`&${k}=${v}`)
    .join('')
    .slice(1);
}

export function queryToSections(query){
    const lens = query.lengths.split(d1).map(Number);
    const reps = query.repeats.split(d1).map(Number);
    const swins = query.swings.split(d1).map(Number);

    const rats = query.ratios.split(d1).map(x=>x.split(d2).map(Number));
    const subs = query.subdivides.split(d1).map(x=>x.split(d2).map(Number));
    const offs = query.offsets.split(d1).map(x=>x.split(d2).map(Number));

    return lens.map((len, i)=>({
        length: len,
        repeat: reps[i],
        swing: swins[i],
        ratios: rats[i],
        subdivide: subs[i],
        offsets: offs[i],
    }));
}