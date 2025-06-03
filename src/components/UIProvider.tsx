"use client";
import { useEffect } from "react";
import { useUIStore } from "../store/useStore";

export function UIProvider({ children }: { children: React.ReactNode }) {
  const { language, isRTL } = useUIStore();

  // Handle RTL changes
  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("dir", isRTL ? "rtl" : "ltr");
    root.setAttribute("lang", language);
  }, [isRTL, language]);

  return <>{children}</>;
}
