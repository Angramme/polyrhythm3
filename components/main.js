import Visualisation from "./visualisation"
import Editor from "./editor";
import Controls from "./controls";
import TopBar from "./topbar";
import Instruments from "./instruments";

const Tone = require('tone');

import { queryToSections } from "../lib/serialization";
import { sectionsToImgURL } from "../lib/sectionsToImgURL";
import favicon from '../lib/favicon'
import { init as initSynths, updateInstruments, getInstruments, getNewInstrument } from '../lib/instruments'

import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/dist/client/router";
import { useTheme } from "../hooks/useTheme";

export default function Main(){
    // TODO:
    // midi export
    // dragging
    // instruments
    // PWA https://able.bio/drenther/building-a-progressive-web-app-with-nextjs-part-i--00edasw

    const styles = useTheme(require("../styles/main.module.sass"));

    const make_default_section = ()=>({
        length: 1,
        repeat: 0,
        swing: 0,
        ratios: [1, 4], 
        subdivide: [1],
        offsets: [0],
    });

    const router = useRouter();

    const [editMode, setEditMode] = useState('section');

    const [instruments, setInstruments] = useState(Array.from({length: 10}, (v, i)=>getNewInstrument(i)));

    const [sections, setSections] = useState([make_default_section()]);
    const [curSection, setCurSection] = useState(0);

    const [paused, setPaused] = useState(true);
    const [bpm, setBpm] = useState(100);

    // load state from query
    useEffect(()=>{
        if(Object.keys(router.query).length <= 0) return;
        console.log('found state in url, proceeding to load...');
        
        setSections(queryToSections(router.query));
        setBpm(Number(router.query.bpm));

        // remove query params
        window.history.replaceState({}, document.title, window.location.pathname);
    }, [router.query]);

    // play / pause
    useEffect(()=>{        
        if(paused) Tone.Transport.pause();
        else Tone.Transport.start();
    }, [paused]);

    // bpm
    useEffect(()=>{        
        Tone.Transport.bpm.rampTo(bpm, .2); // seconds
    }, [bpm]);

    // context startup
    useEffect(()=>{
        const onclick = ()=>{
            Tone.start();
        };
        window.addEventListener('click', onclick);
        return function cleanup(){
            window.removeEventListener('click', onclick);
        }
    }, []);

    // init synths
    const number_of_tracks = useMemo(
        ()=>sections.reduce((s, v)=>Math.max(s, v.ratios.length), -1), 
        [sections]);
    useEffect(()=>{
        return initSynths(instruments, number_of_tracks);
    }, [instruments, number_of_tracks]);

    // sections to actual sound
    useEffect(()=>{
        const { withScale } = require('../lib/helpers');
        const scheduleSections = require('../lib/scheduleSections').default;

        const measure_count = sections.reduce(
            (s, c)=> s+ c.length * (c.repeat+1), 
            0);

        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = withScale(measure_count)('1m');
        Tone.Transport.timeSignature = [4, 4];

        scheduleSections((time, {accent, duration, track})=>{
            try{
                getInstruments()[track](duration, time, accent);
            }catch(err){
                console.warn(err);
            }
        }, sections);

        return function cleanup(){
            Tone.Transport.cancel(0);
        }
    }, [sections]);

    // dynamic favicon
    useEffect(()=>{
        favicon(sectionsToImgURL(sections));
    }, [sections]);
    
    return <div className={styles.container}>
        <Visualisation 
            sections={[sections, setSections]} 
            curSection={[curSection, setCurSection]} 
            defaultSection={make_default_section}
            editMode={[editMode, setEditMode]}/>
        <Controls
            paused={[paused, setPaused]}
            bpm={[bpm, setBpm]}
            editMode={[editMode, setEditMode]}/>
        {editMode == 'section' ? 
        <Editor 
            sections={[sections, setSections]} 
            curSection={[curSection, setCurSection]}/>
            : ''}
        {editMode == 'instrument' ? 
        <Instruments
            instruments={[instruments, setInstruments]}/>
            : ''}
        <TopBar
            sections={sections} bpm={bpm}/>
    </div>
}