import { useTheme } from "../hooks/useTheme"
import { getSynthNames } from "../lib/instruments";

import Dropdown from '../components/dropdown'

import clone from 'just-clone'
import useStore from "../hooks/useStore";
import { useCallback, useMemo } from "react";
import shallow from "zustand/shallow";

export default function instruments({
        style,
    }){
    const [instrumentIDs, setInstrumentIDs, sections] = useStore(useCallback(
        state => [state.instrumentIDs, state.setInstrumentIDs, state.sections], []), shallow);

    const styles = useTheme(require('../styles/instruments.module.sass'));
    const synth_names = getSynthNames();

    const number_of_tracks = useMemo(
        () => sections.reduce((s, v) => Math.max(s, v.ratios.length), -1),
        [sections]
    );

    const handler = (id)=>(obj)=>{
        const val = Number(obj.value);
        instrumentIDs[id] = val;
        setInstrumentIDs(clone(instrumentIDs));
    }

    return <div className={styles.container} style={style}>
        {instrumentIDs
        .slice(0, number_of_tracks)
        .map((inst, i)=>
        <div key={i} className={styles.instrument}>
            <div className={styles.header}>track {i+1} uses</div>
            <div className={styles.body}>
                <Dropdown onChange={handler(i)} value={{
                        value: inst, label: synth_names[inst] }} 
                    options={synth_names.map((v, j)=>({
                        value: j,
                        label: v,
                    }))}/>
                {/* <select key={i} defaultValue={inst} onChange={handler(i)}>
                    {synth_names.map((v, j)=>
                    <option value={j} key={j}>{v}</option>
                    )}
                </select> */}
            </div>
        </div>    
        )}
    </div>
}