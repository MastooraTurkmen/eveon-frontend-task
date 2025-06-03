"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import i18n from "../lib/i18n";

interface UIState {
  isRTL: boolean;
  language: "en" | "ar";
  theme: "light" | "dark";
  toggleRTL: () => void;
  setLanguage: (lang: "en" | "ar") => void;
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      isRTL: false,
      language: "en",
      theme: "dark",

      toggleRTL: () => {
        const newRTL = !get().isRTL;
        const newLang = newRTL ? "ar" : "en";
        i18n.changeLanguage(newLang);
        set({ isRTL: newRTL, language: newLang });
      },

      setLanguage: (lang: "en" | "ar") => {
        const isRTL = lang === "ar";
        i18n.changeLanguage(lang);
        set({ language: lang, isRTL });
      },

      setTheme: (theme: "light" | "dark") => {
        set({ theme });
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
      },

      toggleTheme: () => {
        const newTheme = get().theme === "dark" ? "light" : "dark";
        set({ theme: newTheme });
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
      },
    }),
    {
      name: "ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        language: state.language,
        isRTL: state.isRTL,
        theme: state.theme,
      }),
    }
  )
);
