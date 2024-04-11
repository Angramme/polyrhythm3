import { useTheme } from "../hooks/useTheme"
import { getSynthNames, getSynthIconTypes } from "../lib/instruments";
import { FaDrum } from "react-icons/fa";
import { FaDrumSteelpan } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { ImBell } from "react-icons/im";
import { GiChopsticks } from "react-icons/gi";

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
    const synth_types = getSynthIconTypes();

    const number_of_tracks = useMemo(
        () => sections.reduce((s, v) => Math.max(s, v.ratios.length), -1),
        [sections]
    );

    const handler = (id)=>(val)=>{
        instrumentIDs[id] = val;
        setInstrumentIDs(clone(instrumentIDs));
    }

    const iconMap = {
        'kickdrum': <FaDrum/>,
        'bongo': <FaDrumSteelpan/>,
        'bell': <FaBell/>,
        'cowbell': <ImBell/>,
        'clave': <GiChopsticks/>,
    };

    return <div className={styles.container} style={style}>
        <table>
            {instrumentIDs
            .slice(0, number_of_tracks)
            .map((inst, i)=>
            <tr key={i}>
                <td>track {i+1} uses <b>{synth_names[inst]}</b></td>
                <td>
                    {synth_types.map((type, j)=>
                        <div key={j} className={styles.button} onClick={()=>handler(i)(j)} value={j} style={{display: 'inline', position: 'relative', margin: '0.5rem', border:'solid 2px black', borderColor: inst==j ? 'red' : 'rgba(0,0,0,0)', padding: '2px', borderRadius: '2px', cursor: 'pointer'}}>
                            {iconMap[type]}
                        </div>
                        )
                    }
                </td>
            </tr>    
            )}
        </table>
    </div>
}