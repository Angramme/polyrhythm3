import create from "zustand"
import { getNewInstrument } from '../lib/instruments'

const make_default_section = ()=>({
    length: 1,
    repeat: 0,
    swing: 0,
    ratios: [1, 4], 
    subdivide: [1],
    offsets: [0],
});

const useStore = create(set => ({
    sections: [make_default_section()],
    curSection: 0,
    editMode: 'section',
    instrumentIDs: Array.from({length: 10}, (v, i)=>getNewInstrument(i)),

    addSection: (sec = make_default_section()) => 
        set(state => ({ sections: [...state.sections, sec] })),
    setSections: (secs) => set({ sections: secs }),
    
    setInstrumentIDs: (x) => set({ instrumentIDs: x }),

    setCurSection: (nw) => set({ curSection: nw }),
    setEditMode: (em) => set({ editMode: em }),

    paused: true,
    bpm: 100,

    pause: ()=> set({ paused: true }),
    play: ()=> set({ paused: false }),
    setBpm: (bpm)=> set({ bpm: bpm }),
}));
export default useStore;