"use client";

import Link from "next/link";
import { useUIStore } from "../store/useStore";
import ThemeToggle from "./ThemeToggle";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function Navbar() {
  const { language, setLanguage, theme } = useUIStore();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "en" | "ar");
  };

  return (
    <nav
      className={`w-full pt-6 px-14 py-4 flex justify-between items-center shadow-md ${
        theme === "dark" ? "bg-zinc-900" : "bg-white"
      } ${theme === "dark" ? "text-white" : "text-gray-900"}`}
    >
      <Link
        href="/"
        className="text-2xl font-extrabold tracking-tight text-blue-400"
      >
        Eveon
      </Link>

      {/* Buttons */}
      <div className="hidden md:flex space-x-5 items-center">
        {["About", "Services", "Contact"].map((item, idx) => {
          const sectionId =
            item === "About"
              ? "about"
              : item === "Services"
              ? "services"
              : "contact";

          return (
            <Link
              key={idx}
              href={`#${sectionId}`}
              scroll={true}
              className={`font-semibold
                  focus:outline-none focus:ring-2
                 transition duration-300 ease-in-out relative group
                 ${theme === "dark" ? "text-white" : "text-black"}
                 `}
            >
              {language === "ar"
                ? item === "About"
                  ? "حول"
                  : item === "Services"
                  ? "خدمات"
                  : "اتصل"
                : item}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${
                  theme === "dark" ? "bg-white" : "bg-black"
                }`}
              ></span>
            </Link>
          );
        })}
      </div>

      {/* Language and Theme Toggle */}
      <div className="flex items-center gap-4">
        <div
          className={`relative rounded-lg shadow-sm transition-all ${
            theme === "dark" ? "bg-zinc-800" : "bg-gray-100"
          }`}
        >
          <select
            value={language}
            onChange={handleLanguageChange}
            className={`appearance-none px-4 py-2 pr-10 rounded-lg text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              theme === "dark"
                ? "bg-zinc-800 text-white border border-zinc-700"
                : "bg-gray-100 text-gray-900 border border-gray-300"
            }`}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.label}
              </option>
            ))}
          </select>
          {/* Down Arrow */}
          <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
            ▼
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
