import { create } from "zustand";

export const DARK_COLOR = "#2c2e2c";
export const LIGHT_COLOR = "#adb5bd";

export const useMacbookStore = create((set) => ({
    color: DARK_COLOR,
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({scale}),

    reset: () => set({color: DARK_COLOR, scale: 0.08}),
}));