"use client";

import { useEffect } from "react";
import { useUIStore } from "../store/useStore";

export function UIProvider({ children }: { children: React.ReactNode }) {
  const isDarkMode = useUIStore((state) => state.isDarkMode);
  const isRTL = useUIStore((state) => state.isRTL);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>;
}
