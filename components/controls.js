import Field from './field';

import {RiPauseLine, RiPlayLine, RiStopLine, RiSoundModuleLine} from 'react-icons/ri'
import { useTheme } from '../hooks/useTheme';

export default function Controls({
        paused: [paused, setPaused],
        bpm: [bpm, setBpm],
        editMode: [editMode, setEditMode],
        style,
    }){

    const styles = useTheme(require('../styles/controls.module.sass'));

    return <div className={styles.container} style={style}>
        {/* <div className={styles.title}>
            Controls
        </div> */}
        <div className={styles.transport_bar}>
            <div 
                className={styles.transport_button}
                onClick={()=>setPaused(!paused)}
                >
                {paused ? 
                <RiPlayLine style={{verticalAlign:'middle'}}/> :
                <RiPauseLine style={{verticalAlign:'middle'}}/>
                }
            </div>
            <div 
                className={styles.transport_button}
                onClick={()=>{
                    require('tone').Transport.stop();
                    setPaused(true);
                }}
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
                className={styles.settings_button}
                onClick={()=>setEditMode(editMode == 'section' ? 'instrument' : 'section')}>
                <RiSoundModuleLine style={{verticalAlign:'middle'}}/>
            </div>
    
        </div>
    </div>
}