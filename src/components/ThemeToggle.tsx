"use client";

import { useEffect, useState } from "react";
import { useUIStore } from "../store/useStore";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useUIStore();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 cursor-pointer 
                ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-500 hover:bg-black"
                }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FaMoon className="text-blue-500 w-5 h-5" />
      ) : (
        <FaSun className="text-yellow-400 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
