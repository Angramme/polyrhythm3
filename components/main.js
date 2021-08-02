import Visualisation from "./visualisation"
import Editor from "./editor";
import Controls from "./controls";
import TopBar from "./topbar";
import Instruments from "./instruments";

import { useTheme } from "../hooks/useTheme";
import useStore from "../hooks/useStore";
import { useCallback } from "react";


export default function Main(){
    const styles = useTheme(require("../styles/main.module.sass"));

    const editMode = useStore(useCallback(state => state.editMode, []));
    
    return <div className={styles.container}>
        <Visualisation/>
        <Controls/>
        {editMode == 'section' ? 
        <Editor/>
            : ''}
        {editMode == 'instrument' ? 
        <Instruments/>
            : ''}
        <TopBar/>
    </div>
}