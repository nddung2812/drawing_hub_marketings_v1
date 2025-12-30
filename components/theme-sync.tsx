"use client";

import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { themeAtom, type Theme } from "@/lib/atoms/theme";

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem("theme");
    return stored === "dark" || stored === "light" ? stored : null;
  } catch (_) {
    return null;
  }
}

function writeStoredTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (_) {}
}

function getDomTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyDomTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeSync() {
  const [theme, setTheme] = useAtom(themeAtom);
  const initializedRef = useRef(false);

  // Initialize atom from (1) localStorage, otherwise (2) current DOM class (set by layout bootstrap script)
  useEffect(() => {
    const stored = readStoredTheme();
    setTheme(stored ?? getDomTheme());
    initializedRef.current = true;
  }, [setTheme]);

  // Persist + apply to DOM on updates (after initialization)
  useEffect(() => {
    if (!initializedRef.current) return;
    applyDomTheme(theme);
    writeStoredTheme(theme);
  }, [theme]);

  // If user has NOT chosen a theme yet, keep in sync with system changes.
  useEffect(() => {
    const stored = readStoredTheme();
    if (stored) return;
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;

    const onChange = () => setTheme(mq.matches ? "dark" : "light");
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [setTheme]);

  return null;
}


