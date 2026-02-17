
const d1 = '_';
const d2 = 'a';

export function stateToQuery(sections, bpm, instrumentIDs){
    const number_of_tracks = sections.reduce((s, v) => Math.max(s, v.ratios.length), -1);
    const params = {
        lengths: sections.map(x=>x.length).join(d1),
        repeats: sections.map(x=>x.repeat).join(d1),
        swings: sections.map(x=>x.swing).join(d1),
        ratios: sections.map(x=>x.ratios.join(d2)).join(d1),
        subdivides: sections.map(x=>x.subdivide.join(d2)).join(d1),
        offsets: sections.map(x=>x.offsets.join(d2)).join(d1),
        bpm: bpm,
    };
    if (instrumentIDs && number_of_tracks > 0) {
        params.instruments = instrumentIDs.slice(0, number_of_tracks).join(d1);
    }
    return '?' + Object.entries(params)
    .map(([k, v])=>`&${k}=${v}`)
    .join('')
    .slice(1);
}

function parseInstruments(str) {
    return str.split(d1).map(Number);
}

export function queryToState(query){
    const lens = query.lengths.split(d1).map(Number);
    const reps = query.repeats.split(d1).map(Number);
    const swins = query.swings.split(d1).map(Number);

    const rats = query.ratios.split(d1).map(x=>x.split(d2).map(Number));
    const subs = query.subdivides.split(d1).map(x=>x.split(d2).map(Number));
    const offs = query.offsets.split(d1).map(x=>x.split(d2).map(Number));

    const sections = lens.map((len, i)=>({
        length: len,
        repeat: reps[i],
        swing: swins[i],
        ratios: rats[i],
        subdivide: subs[i],
        offsets: offs[i],
    }));

    return {
        sections,
        instrumentIDs: query.instruments ? parseInstruments(query.instruments) : null,
    };
}

export function queryToSections(query){
    return queryToState(query).sections;
}