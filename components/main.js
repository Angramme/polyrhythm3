import Visualisation from "./visualisation"
import Editor from "./editor";
import Controls from "./controls";
import TopBar from "./topbar";
import Instruments from "./instruments";

const Tone = require('tone');
import CTX from '../lib/global_context'

import { queryToSections } from "../lib/serialization";
import { sectionsToImgURL } from "../lib/sectionsToImgURL";
import favicon from '../lib/favicon'

import { useEffect, useRef, useState } from "react";
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

    const [instruments, setInstruments] = useState([0, 1, 2]);

    const [sections, setSections] = useState([make_default_section()]);
    const [curSection, setCurSection] = useState(0);

    const [paused, setPaused] = useState(true);
    const [bpm, setBpm] = useState(100);

    // load state from query
    useEffect(()=>{
        if(Object.keys(router.query).length <= 0) return;
        requestAnimationFrame(()=>{
            setSections(queryToSections(router.query));
            setBpm(Number(router.query.bpm));
        });
        router.push({
            query:{}
        }, undefined, { shallow:true });
    }, []);

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
    useEffect(()=>{
        const c = CTX();

        const vol = new Tone.Volume('-22').toDestination();
        
        c.synths = [
            new Tone.PluckSynth().connect(vol),
            new Tone.MembraneSynth().connect(vol),
            new Tone.MetalSynth().connect(vol),
        ];
        c.triggers = [
            (duration, time, accent)=>c.synths[0].triggerAttackRelease(accent ? 'E3' : 'E2', duration, time, 1.2),
            (duration, time, accent)=>c.synths[1].triggerAttackRelease(accent ? 'C1' : 'F1', duration, time, accent ? 1 : 0.8),
            (duration, time, accent)=>c.synths[2].triggerAttackRelease('C3', duration, time, 0.2),
        ];

        c.instruments = instruments.map((x)=>c.triggers[x]);

        return function cleanup(){
            c.synths.forEach(sn=>sn.dispose());
            vol.dispose();
        }
    }, [instruments]);

    // sections to actual sound
    useEffect(()=>{
        const c = CTX();
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
                c.instruments[track](duration, time, accent);
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
        requestAnimationFrame(()=>favicon(sectionsToImgURL(sections)));
    }, [sections]);
    
    return <div className={styles.container}>
        <Visualisation 
            sections={[sections, setSections]} 
            curSection={[curSection, setCurSection]} 
            defaultSection={make_default_section}/>
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