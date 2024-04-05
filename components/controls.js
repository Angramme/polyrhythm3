import {Field} from './field';

import {RiPauseLine, RiPlayLine, RiStopLine, RiSoundModuleLine} from 'react-icons/ri'
import { useTheme } from '../hooks/useTheme';

import useStore from '../hooks/useStore';
import { useCallback } from 'react';
import shallow from 'zustand/shallow';

export default function Controls({
        style,
    }){

    const [ paused, pause, play, bpm, setBpm, editMode, setEditMode ] = useStore(useCallback(state => 
        [state.paused, state.pause, state.play, state.bpm, state.setBpm, state.editMode, state.setEditMode], []), shallow);

    const styles = useTheme(require('../styles/controls.module.sass'));

    return <div className={styles.container} style={style}>
        {/* <div className={styles.title}>
            Controls
        </div> */}
        <div className={styles.transport_bar}>
            <div 
                className={styles.transport_button}
                onClick={useCallback(()=>(paused ? play : pause)(), [paused])}
                >
                {paused ? 
                <RiPlayLine style={{verticalAlign:'middle'}}/> :
                <RiPauseLine style={{verticalAlign:'middle'}}/>
                }
            </div>
            <div 
                className={styles.transport_button}
                onClick={useCallback(()=>{
                    require('tone').Transport.stop();
                    pause();
                }, [])}
                >
                <RiStopLine style={{verticalAlign:'middle'}}/>
            </div>
            <div style={{paddingLeft: '2em', paddingRight:'.5em'}}>
                bpm
            </div>
            <div>
                <Field
                    style={{width: '4em'}}
                    type="number"
                    defaultValue={bpm}
                    onInput={value=>setBpm(value)}
                    />
            </div>
            <div 
                className={styles.settings_button +(editMode=='instrument' ? ' '+styles.edit_mode : '')}
                onClick={useCallback(()=>
                    setEditMode(editMode == 'section' ? 'instrument' : 'section'), 
                [editMode])}>
                <RiSoundModuleLine style={{verticalAlign:'middle'}}/>
            </div>
    
        </div>
    </div>
}