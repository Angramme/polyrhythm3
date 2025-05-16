// import { useDarkMode } from "next-dark-mode";
import { persist } from 'zustand/middleware';
import { create } from "zustand";
import { useEffect, useMemo, useState } from "react";


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

export const useDarkMode = create(persist(
    set => ({
        darkModeActive: false,
        setDark: (d) => set({ darkModeActive: d }),
        toggleDarkMode: () => set(state => ({ darkModeActive: !state.darkModeActive })),
    }),
    {
        name: "dark-mode", // default to LocalStorage
    }
));

export function useTheme(styles){
    const dark = useDarkMode().darkModeActive;
    // const [isClient, setIsClient] = useState(false)
    // useEffect(()=>setIsClient(true), []);
    return useMemo(()=>applyClassEverywhere(styles, dark ? 'dark' : 'light'), [dark, styles]);
}