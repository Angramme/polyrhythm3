import {Field} from './field'

import {AiOutlinePlus} from 'react-icons/ai'

import { useEffect, useMemo, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function RatioPicker(
    {className, name, onInput, defaultValue, min, max, step, delimiter, ...args}){
    
    const styles = useTheme(require('../styles/ratiopicker.module.sass'));
    
    const default_ratios = useMemo(()=>
        (defaultValue || '').split(delimiter || ':').map(Number),
        [defaultValue, delimiter]);

    const [ratios, setRatios] = useState(default_ratios);

    useEffect(()=>{
        if(onInput) onInput(ratios);
    }, [ratios]);

    useEffect(()=>{
        setRatios(default_ratios);
    }, [default_ratios]);

    return <div className={styles.container +(className ? ' '+className : '')}>
        <div className={styles.ratios}>
            {ratios.map((num, i)=><div key={i}>
                <Field 
                    className={styles.field} 
                    defaultValue={num}
                    type="number"
                    step={step} min={min} max={max}
                    onInput={(value, str_val)=>{
                        if(value.length <= 0) return;
                        if(str_val == '0' && i == ratios.length-1) ratios.splice(i, 1);
                        else ratios[i] = Number(value);
                        setRatios([...ratios]);
                    }}
                    />
                {i < ratios.length-1 ? 
                    <div className={styles.delimiter}> : </div> 
                : ''}
            </div>)}
        </div>
        <div 
            className={styles.add_btn}
            onClick={()=>setRatios([...ratios, min || 0])}
            >
            <AiOutlinePlus style={{verticalAlign:'middle'}}/>
        </div>
    </div>
}