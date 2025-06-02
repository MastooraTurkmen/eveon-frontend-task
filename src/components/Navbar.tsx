"use client";

import Link from "next/link";
import { useUIStore } from "../store/useStore";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useUIStore();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white dark:bg-zinc-900 dark:text-white">
      <Link href="/" className="text-xl font-bold">
        Eveon
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/services" className="hover:underline">
          Services
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      <button
        onClick={toggleDarkMode}
        className="ml-4 p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
      >
        {isDarkMode ? (
          <Sun size={18} cursor="pointer" />
        ) : (
          <Moon size={18} cursor="pointer" />
        )}
      </button>
    </nav>
  );
}
