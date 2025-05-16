import Visualisation from "./visualisation"
import Editor from "./editor";
import Controls from "./controls";
import TopBar from "./topbar";
import Instruments from "./instruments";

import { useTheme } from "../hooks/useTheme";
import useRhythm from "../hooks/useStore";
import { useCallback } from "react";
// import { FeedbackPop } from "./feedback-pop";


export default function Main(){
    const styles = useTheme(require("styles/main.module.sass"));

    const editMode = useRhythm(useCallback(state => state.editMode, []));
    
    return <div className={styles.container}>
        <TopBar/>
        {/* <FeedbackPop/> */}
        <Visualisation/>
        <Controls/>
        {editMode == 'section' ? 
        <Editor/>
            : ''}
        {editMode == 'instrument' ? 
        <Instruments/>
            : ''}
        <div style={{marginTop:'5rem'}}></div>
    </div>
}