import { useTheme } from "../hooks/useTheme"
import { getSynthNames } from "../lib/instruments";

import clone from 'just-clone'
import useStore from "../hooks/useStore";
import { useCallback } from "react";
import shallow from "zustand/shallow";

export default function instruments({
        style,
    }){
    const [instrumentIDs, setInstrumentIDs] = useStore(useCallback(
        state => [state.instrumentIDs, state.setInstrumentIDs], []), shallow);

    const styles = useTheme(require('../styles/instruments.module.sass'));
    const synth_names = getSynthNames();

    const handler = (id)=>({target})=>{
        const val = Number(target.value);
        instrumentIDs[id] = val;
        setInstrumentIDs(clone(instrumentIDs));
    }

    return <div className={styles.container} style={style}>
        {instrumentIDs.map((inst, i)=>
        <div key={i} className={styles.instrument}>
            <div className={styles.header}>track {i+1} uses</div>
            <div className={styles.body}>
                <select key={i} defaultValue={inst} onChange={handler(i)}>
                    {synth_names.map((v, j)=>
                    <option value={j} key={j}>{v}</option>
                    )}
                </select>
            </div>
        </div>    
        )}
    </div>
}