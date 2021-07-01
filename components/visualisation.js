import {AiOutlinePlus, AiOutlineColumnWidth} from 'react-icons/ai'
import {TiArrowRepeat} from 'react-icons/ti'

import { useEffect, useMemo, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Visualisation({
        sections: [sections, setSections], 
        curSection: [curSection, setCurSection], 
        defaultSection
    }){
    const styles = useTheme(require('../styles/visualisation.module.sass'));

    const nrows = useMemo(
        ()=>sections.reduce((x, c)=>Math.max(x, c.ratios.length), 0), 
        [sections]);
    const tlength = useMemo(()=>sections.reduce((s, c)=>s+c.length*(1+c.repeat), 0), 
        [sections]);

    const addNewSection = ()=>setSections([...sections, {...defaultSection()}]);

    const bar = useRef();
    useEffect(()=>{
        const Tone = require('tone');
        
        let STOP = false;
        const loop = ()=>{
            if(!bar.current) return;
            
            bar.current.style.left = `${
                Math.min(100, 100
                *Tone.Time(Tone.Transport.position).toTicks()
                /(Tone.Time('1m').toTicks()*tlength))
            }%`;
            if(!STOP) requestAnimationFrame(loop);
        };
        loop();

        return function cleanup(){ STOP = true; };
    }, [bar, tlength]);

    let subsectioncounter = 1;
    return <div style={{position:'relative'}}>
        <div className={styles.add_btn} onClick={addNewSection}>
            <AiOutlinePlus style={{verticalAlign:'middle'}}/>
        </div>
        <div className={styles.bar_parent}>
            <div ref={bar} className={styles.bar}></div>
        </div>
        <div className={styles.container}>
            {sections.map((S, section_i)=>
            <div 
                key={'section'+section_i} 
                className={
                    styles.section 
                    +(section_i == curSection && sections.length > 1 ?  ' '+styles.current: '')}
                style={{
                    flexBasis: `${100*S.length*(S.repeat+1)/tlength}%`,
                }}
                onClick={()=>setCurSection(section_i)}
                >
                {Array.from({length: S.repeat+1}, (_, repeat_i)=>
                <div
                    key={repeat_i}
                    className={styles.section_part 
                        +(repeat_i > 0 ? ' '+styles.repeated : '')
                        +((subsectioncounter++)%2 == 0 ? ' '+styles.even : '')}
                    >
                    {Array.from({length: nrows}, (_, i)=>{
                        const ratio = S.ratios[i] || 0;
                        const subdivide = S.subdivide[i] || 1;
                        const offset = S.offsets[i] || 0;
                        return <div key={'row'+i} className={styles.row}>
                            {Array.from({length: ratio * subdivide}, (_, j)=>
                                <div 
                                    className={styles.dot
                                        +(j%subdivide == 0 ? '' : ' '+styles.sub_dot)}
                                    key={'dot'+j}>
                                    <div
                                        style={{
                                            left: offset ? `${offset*100}%` : null,
                                        }}/>
                                </div>
                            )}
                        </div>
                    })}
                    <div className={styles.repeat_line}>
                        <TiArrowRepeat/>
                    </div>
                    {S.length != 1 && repeat_i == 0 ?
                        <div className={styles.scale_corner}>
                            <span>{String(S.length).substr(0, 4)}</span>
                            <AiOutlineColumnWidth style={{verticalAlign:'middle'}}/>
                        </div>
                        : ''
                    }
                </div>
                )}
            </div>
            )}
        </div>
    </div>
}