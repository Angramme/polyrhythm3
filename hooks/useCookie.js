import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useCookie = create(persist(
    set => ({
        accepted: false,
        setAccepted: (d) => {
            set({ accepted: d });
            if(d) window.clarity('consent');
            else window.clarity('consent', false);
        },
    }),
    {
        name: "coooookies", // default to LocalStorage
    }
));