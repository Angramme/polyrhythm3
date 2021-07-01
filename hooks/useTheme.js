import { useDarkMode } from "next-dark-mode";

export function useTheme(styles){
    const dark = useDarkMode().darkModeActive;
    return applyClassEverywhere(styles, dark ? 'dark' : 'light');
}

export function applyClassEverywhere(styles, className){
    const x = styles[className];
    if(!x) return styles;
    let ret = { dark: x };
    Object.entries(styles).forEach(([k, v])=>{
        if(k == className) return;
        ret[k] = v + ' ' + x;
    });
    return ret;
}