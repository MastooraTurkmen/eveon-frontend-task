"use client";
import "../lib/i18n";
import { UIProvider } from "../components/UIProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <UIProvider>{children}</UIProvider>;
}
