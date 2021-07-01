import { useTheme } from "../hooks/useTheme"


export default function instruments({
        style,
        instruments: [instruments, setInstruments]
    }){
    const styles = useTheme(require('../styles/instruments.module.sass'));
    const synth_names = [
        'pluck',
        'kick',
        'crash cymbal',
    ];

    return <div className={styles.container} style={style}>
        {instruments.map((inst, i)=>
        <div key={i} className={styles.instrument}>
            <div className={styles.header}>track {i} uses</div>
            <div className={styles.body}>
                {/* {synth_names[inst]} */}
                <select key={i}>
                    {synth_names.map((v, i)=>
                    <option value={i}>{v}</option>
                    )}
                </select>
            </div>
        </div>    
        )}
    </div>
}