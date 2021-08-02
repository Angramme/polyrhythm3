import { BiCoffeeTogo, BiShare, BiMoon, BiSun } from 'react-icons/bi'
import { SiAboutDotMe, SiMidi } from 'react-icons/si'

import { sectionsToQuery } from '../lib/serialization'
import { copyTextToClipboard } from '../lib/clipboard'
import { useDarkMode } from 'next-dark-mode'
import { useTheme } from '../hooks/useTheme'

import useStore from '../hooks/useStore'
import { useCallback } from 'react'

export default function Social(){
    
    const styles = useTheme(require('../styles/topbar.module.sass'));

    const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
    const toggleDarkMode = ()=>darkModeActive ? switchToLightMode() : switchToDarkMode();

    return <> 
    <div className={styles.left}>
        <div className={styles.button}>
            <a
                href="https://ozi.vercel.app"
                target="_blank"
                >
                <SiAboutDotMe style={{verticalAlign:'middle'}}/> 
            </a>
            <div className={styles.tooltip}>my website</div>
        </div>
        <div className={styles.button}>
            <a
                href="https://www.buymeacoffee.com/angramme"
                target="_blank"
                >
                <BiCoffeeTogo style={{verticalAlign:'middle'}}/> 
                {/* <img 
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
                    alt="Buy me a coffee"
                    className={styles.coffee_img}/> */}
            </a>
            <div className={styles.tooltip}>buy me a coffee</div>
        </div>
    </div>
    <div className={styles.right}>
        <div 
            className={styles.button}
            >
            <BiShare 
                style={{verticalAlign:'middle'}}
                onClick={useCallback(()=>{
                    let state = useStore.getState();
                    let val = 
                        window.location.origin + window.location.pathname
                        + sectionsToQuery(state.sections, state.bpm);
                    console.log(val);
                    copyTextToClipboard(val);
                    setTimeout(()=>alert('copied the url to clipboard!'), 100);
                }, [])}/> 
            <div className={styles.tooltip}>share your rhythm</div>
        </div>
        <div className={styles.button}>            
            <SiMidi style={{verticalAlign:'middle', cursor:'not-allowed'}}/> 
            <div className={styles.tooltip}>export midi</div>
        </div>
        <div className={styles.button}>
            <span onClick={toggleDarkMode}>
                {darkModeActive ?
                    <BiMoon style={{verticalAlign:'middle'}}/> :
                    <BiSun style={{verticalAlign:'middle'}}/> 
                }
            </span>
            <div className={styles.tooltip}>
                switch to {darkModeActive ? 'light' : 'dark'} mode</div>
        </div>
    </div>
    </>
}