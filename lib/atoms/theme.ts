import { atom } from "jotai";

export type Theme = "light" | "dark";

/**
 * Global theme state.
 * - Actual DOM class + localStorage persistence is handled by `components/theme-sync.tsx`.
 */
export const themeAtom = atom<Theme>("light");


