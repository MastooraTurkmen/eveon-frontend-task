import { create } from "zustand";

interface UIState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isRTL: boolean;
  toggleRTL: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  isRTL: false,
  toggleRTL: () => set((state) => ({ isRTL: !state.isRTL })),
}));
