import { create } from "zustand";
import { persist } from "zustand/middleware";


interface Supporter{
    is_supporter: boolean
    setIsSupporter: (is_supporter: boolean) => void
};

export const useSupporter = create<Supporter>()(persist(
    set => ({
        is_supporter: false,
        setIsSupporter: (is_supporter: boolean) => set({is_supporter})
    }),
    {
        name: 'is_supporter'
    }
))