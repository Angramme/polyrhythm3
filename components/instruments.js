import { useTheme } from "../hooks/useTheme"
import { getSynthNames } from "../lib/instruments";

import clone from 'just-clone'

export default function instruments({
        style,
        instruments: [instruments, setInstruments]
    }){
    const styles = useTheme(require('../styles/instruments.module.sass'));
    const synth_names = getSynthNames();

    const handler = (id)=>({target})=>{
        const val = Number(target.value);
        instruments[id] = val;
        setInstruments(clone(instruments));
    }

    return <div className={styles.container} style={style}>
        {instruments.map((inst, i)=>
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