import Field from './field'
import RatioPicker from './ratiopicker'

import clone from 'just-clone'

import { useEffect, useMemo } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Editor({
        sections: [sections, setSections], 
        curSection: [curSection, setCurSection],
    }){
    const styles = useTheme(require('../styles/editor.module.sass'));

    const S = useMemo(()=>sections[curSection], [sections, curSection]);

    const up = (cb)=>(vals)=>{
        if(vals == null || vals == undefined) return;
        cb(vals);
        setSections(clone(sections)); // we have to deep clone, otherwise React does weird shit
    };

    return <div className={styles.container}>
        <div className={styles.flex_container}>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <th>ratios</th>
                    <td>
                        <RatioPicker 
                            className={styles.picker}
                            name="ratios" 
                            defaultValue={S.ratios.join(':')}
                            min={0} step={1}
                            onInput={up(vals=>S.ratios=vals)}/>
                    </td>
                </tr>
                <tr>
                    <th>subdivides</th>
                    <td>
                    <RatioPicker 
                        name="subdivide" 
                        defaultValue={S.subdivide.join(':')}
                        step={1} min={1}
                        onInput={up(vals=>S.subdivide=vals)}/>
                    </td>
                </tr>
                <tr>
                    <th>offsets</th>
                    <td>
                    <RatioPicker 
                        name="offsets" 
                        defaultValue={S.offsets.join(':')}
                        max={1} min={0}
                        onInput={up(vals=>S.offsets=vals)}/>
                    </td>
                </tr>
                </tbody>
            </table>
            <table className={styles.single_fields+' '+styles.table}>
                <tbody>
                <tr>
                    <th>scale</th>
                    <td>
                    <Field 
                        type="number" min="0" defaultValue={S.length}
                        onInput={up(val=>S.length = val)}/>
                    </td>
                </tr>
                <tr>
                    <th>repeat</th>
                    <td>
                    <Field 
                        type="number" step="1" min="0" defaultValue={S.repeat}
                        onInput={up(val=>S.repeat = val)}/>
                    </td>
                </tr>
                <tr>
                    <th>swing</th>
                    <td>
                    <Field 
                        type="number" min="0" max="1" defaultValue={S.swing}
                        onInput={up(val=>S.swing = val)}/>
                    </td>
                </tr>
                <tr className={styles.remove_btn}>
                    <th>remove</th>
                    <td>
                    <Field type="button" value="remove" {...(sections.length <= 1 ? {disabled:true} : {})}
                        onClick={up(()=>{
                            if(sections.length > 1){
                                setCurSection(Math.max(0, curSection-1));
                                return sections.splice(sections.indexOf(S), 1);
                            }
                        })}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}