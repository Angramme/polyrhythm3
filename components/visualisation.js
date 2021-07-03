import {AiOutlinePlus, AiOutlineColumnWidth} from 'react-icons/ai'
import {TiArrowRepeat} from 'react-icons/ti'

import { useEffect, useMemo, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

const Tone = require('tone');


export default function Visualisation({
        sections: [sections, setSections], 
        curSection: [curSection, setCurSection], 
        editMode: [editMode],
        bpm: [bpm],
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
    const bar_parent = useRef();
    useEffect(()=>{
        const total_time = (Tone.Time('1m').toTicks()*tlength);
        let total_width = null;
        const calc_total_width = ()=>{
            total_width = bar_parent.current.offsetWidth;
        }
        calc_total_width();
        window.addEventListener('resize', calc_total_width);

        let STOP = false;
        let last_pos = 0;
        const animQ = 0.06;
        const Qstep = total_width*animQ;
        const loop = ()=>{
            if(!bar.current || !bar_parent.current) return;
            
            let new_pos = Math.min(total_width, 
                total_width
                *Tone.Time(Tone.Transport.position).toTicks()
                /total_time);
            new_pos = Math.round(new_pos/Qstep)*Qstep;

            if(new_pos != last_pos){
                bar.current.style.transform = `translateX(${
                    new_pos
                }px)`;
                bar.current.style.transition = new_pos != 0 ? 
                    `transform ${60*animQ*tlength*4/bpm}s linear` :
                    null;
                last_pos = new_pos;
            }
            if(!STOP) requestAnimationFrame(loop);
        };
        loop();

        return function cleanup(){ 
            STOP = true;
            window.removeEventListener('resize', calc_total_width); 
        };
    }, [bar_parent.current, tlength]);

    let subsectioncounter = 1;
    return <div style={{position:'relative'}}>
        <div className={styles.add_btn} onClick={addNewSection}>
            <AiOutlinePlus style={{verticalAlign:'middle'}}/>
        </div>
        <div ref={bar_parent} className={styles.bar_parent}>
            <div ref={bar} className={styles.bar}></div>
        </div>
        <div className={styles.container}>
            {sections.map((S, section_i)=>
            <div 
                key={'section'+section_i} 
                className={
                    styles.section 
                    +(section_i == curSection && sections.length > 1 && editMode=='section' ?  
                        ' '+styles.current: '')}
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