import {AiOutlinePlus, AiOutlineColumnWidth} from 'react-icons/ai'
import {TiArrowRepeat} from 'react-icons/ti'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import useStore from '../hooks/useStore';
import shallow from 'zustand/shallow'

const Tone = require('tone');


export default function Visualisation(){
    const [sections, swapSections, addNewSection, curSection, setCurSection, bpm, editMode] = useStore(
        useCallback(state => [state.sections, state.swapSections, state.addSection, state.curSection, state.setCurSection, state.bpm, state.editMode], []), shallow);

    const styles = useTheme(require('../styles/visualisation.module.sass'));

    const nrows = useMemo(
        ()=>sections.reduce((x, c)=>Math.max(x, c.ratios.length), 0), 
        [sections]);
    const tlength = useMemo(()=>sections.reduce((s, c)=>s+c.length*(1+c.repeat), 0), 
        [sections]);

    /// BAR ANIMATION
    const bar = useRef();
    const bar_parent = useRef();
    useEffect(()=>{
        const total_time = (Tone.Time('1m').toTicks()*tlength);
        

        let STOP = false;
        let last_pos = 0;
        const animQ = 0.06;

        let total_width = null;
        let Qstep = null;

        const calc_total_width = ()=>{
            total_width = bar_parent.current.offsetWidth;
            Qstep = total_width*animQ;
        }
        calc_total_width();
        window.addEventListener('resize', calc_total_width);

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


    /// SECTION DRAGGING
    let dragged = useRef(null);
    let initialX = useRef(null);

    const ondragover = useCallback((E)=>{
        E.preventDefault();
        E.dataTransfer.dropEffect = 'move';
    }, []);
    const ondragenter = useCallback((E)=>{
        E.preventDefault();
        const par = E.target.closest('.'+styles.section);
        if(!par.dragover_count) par.dragover_count = 0;
        par.dragover_count++;
        par.classList.add(styles.dragover);
    }, []);
    const ondragleave = useCallback((E)=>{
        E.preventDefault();
        const par = E.target.closest('.'+styles.section);
        par.dragover_count--;
        if(par.dragover_count == 0)
            par.classList.remove(styles.dragover);
    }, []);
    const ondragstart = useCallback((index)=>(E)=>{
        setCurSection(index);

        E.dataTransfer.effectAllowed = 'move';
        E.dataTransfer.setData('number', index);
        
        let dragImage = document.createElement("div");
        dragImage.style.visibility = "hidden";
        E.dataTransfer.setDragImage(dragImage, 0, 0);

        const BB = E.target.getBoundingClientRect();
        initialX.current = (BB.left+BB.right)/2;

        E.target.style.transition = 'transform .2s';
        E.target.style.transform = 
            `translate(${E.clientX-initialX.current}px, ${- E.target.offsetHeight*.5 |0}px)
        scale(.5)`;
        setTimeout(()=>{
            E.target.style.transition = null,
            dragged.current = E.target;
        }, 150);
    }, []);
    const ondragend = useCallback((E)=>{
        dragged.current = null;    
        E.target.style.transition = null;
        E.target.style.transform = null;
        E.target.style.zIndex = null;
    }, []);
    const ondrag = useCallback((E)=>{
        if(!dragged.current) return;
        const style = dragged.current.style; 
        style.transform = 
            `translate(${E.clientX-initialX.current}px, ${-dragged.current.offsetHeight*.5 |0}px)
            scale(.5)`;
        style.zIndex = 11;

    }, [dragged, initialX]);
    const ondrop = useCallback((index)=>(E)=>{
        dragged.current.style.transition = null;
        dragged.current.style.transform = null;
        dragged.current.style.zIndex = null;
        dragged.current = null;    
        const par = E.target.closest('.'+styles.section);
        par.dragover_count = 0;
        par.classList.remove(styles.dragover);

        setCurSection(index);
        swapSections(index, Number(E.dataTransfer.getData('number')));
    }, []);

    let subsectioncounter = 1;
    return <div style={{position:'relative'}}>
        <div className={styles.add_btn} onClick={()=>addNewSection()}>
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
                    cursor: curSection == section_i ? 'grab' : 'pointer',
                }}
                onClick={()=>setCurSection(section_i)}
                onDragStart={ondragstart(section_i)}
                onDragEnd={ondragend}
                onDragOver={ondragover}
                onDrag={ondrag}
                onDragEnter={ondragenter}
                onDragLeave={ondragleave}
                onDrop={ondrop(section_i)}
                draggable={true}
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