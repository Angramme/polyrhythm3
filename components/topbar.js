import { BiCoffeeTogo, BiShare, BiMoon, BiSun, BiHelpCircle } from 'react-icons/bi'
import { SiAboutdotme, SiMidi } from 'react-icons/si'

import { stateToQuery } from '../lib/serialization'
import { copyTextToClipboard } from '../lib/clipboard'
import { useDarkMode } from 'next-dark-mode'
import { useTheme } from '../hooks/useTheme'

import useStore from '../hooks/useStore'
import { useCallback, useState } from 'react'

import Cookies from 'js-cookie'

import download from 'downloadjs'
import sectionsToMIDI from '../lib/sectionsToMIDI'

export default function Social(){
    
    const styles = useTheme(require('../styles/topbar.module.sass'));

    const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
    const toggleDarkMode = ()=>darkModeActive ? switchToLightMode() : switchToDarkMode();

    const [popOpen, setPopOpen] = useState(false);
    const [popCallback, setPopCallback] = useState({cb:()=>null});
    const [thanks, setThanks] = useState(false);
    let ignored = false;
    let randompop = null;

    const openPopup = useCallback((callback)=>{
        if(Cookies.get('is_supporter_already') == 'yes')
            return callback();
        if(ignored && Math.random() > randompop){
            randompop += .15;
            return callback();
        }
        setPopOpen(true);
        setPopCallback({cb: (...x)=>{
            ignored = true;
            randompop = .1;
            setPopOpen(false);
            callback(...x);
        }});
    }, []);

    const coffeeButton = useCallback(()=>{
        setThanks(true);
        Cookies.set('is_supporter_already', 'yes', {expires: 111});
    }, []);

    return <> 
    <div className={styles.sellout}
        style={{ display: popOpen ? null : 'none' }}>
        <div className={styles.sellout_box}>
            {thanks ? <>
                <h1>Thank you! {'<3'}</h1>
                <p>What a C H A D.</p>
                </>
                :
                <>
                <h1>Ooops! Looks like this is a premium feature!</h1>
                <p>Just kidding it's not. (But it could be)</p>
                <p>Oh and by the way, did you know you can support me on 
                    <a 
                        href="https://www.buymeacoffee.com/angramme" 
                        target="_blank"> buymeacoffee.com/angramme</a>
                    ?</p> 
                </>
            }
            <div className={styles.coffee_btns}>
                {thanks ? '' : <a
                    href="https://www.buymeacoffee.com/angramme"
                    target="_blank"
                    className={styles.coffee_button}
                    onClick={coffeeButton}
                    >
                    <img 
                        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
                        alt="Buy me a coffee"
                        className={styles.coffee_img}/>
                    <span className={styles.coffee_text}>
                        Buy me a coffee
                    </span>
                </a>}
                <div
                    className={styles.imbroke}
                    onClick={useCallback(popCallback.cb, [popCallback])}
                    >
                    {thanks ? "Continue" : "Nah fam, I'm broke"}
                </div>
            </div>
        </div>
    </div>
    <div className={styles.displacer}></div>
    <div className={styles.left}>
        <div className={styles.button}>
            <a
                href="https://ozi.vercel.app"
                target="_blank"
                rel="noopener"
                >
                <SiAboutdotme style={{verticalAlign:'middle'}}/> 
            </a>
            <div className={styles.tooltip}>my website</div>
        </div>
        <div className={styles.button}>
            <a
                href="https://www.buymeacoffee.com/angramme"
                target="_blank"
                rel="noopener"
                >
                <BiCoffeeTogo style={{verticalAlign:'middle'}}/> 
            </a>
            <div className={styles.tooltip}>buy me a coffee</div>
        </div>
        <div className={styles.button}>
            <a
                href="https://github.com/Angramme/polyrhythm3#tutorial"
                target="_blank"
                rel="noopener"
                >
                <BiHelpCircle style={{verticalAlign:'middle'}}/> 
            </a>
            <div className={styles.tooltip}>Open help page.</div>
        </div>
    </div>
    <div className={styles.right}>
        <div 
            className={styles.button}
            >
            <BiShare 
                style={{verticalAlign:'middle'}}
                onClick={useCallback(()=>{
                    openPopup(()=>{
                        let state = useStore.getState();
                        let val = 
                            window.location.origin + window.location.pathname
                            + stateToQuery(state.sections, state.bpm, state.instrumentIDs);
                        copyTextToClipboard(val);
                        setTimeout(()=>alert('copied the url to clipboard! '), 100);
                    })
                }, [])}/> 
            <div className={styles.tooltip}>share your rhythm</div>
        </div>
        <div className={styles.button}>            
            <SiMidi 
                style={{verticalAlign:'middle'}}
                onClick={useCallback(()=>{
                    openPopup(()=>{
                        download(
                            sectionsToMIDI(useStore.getState().sections),
                            "Polyrhythm.mid",
                            );
                    });
                }, [])}/> 
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