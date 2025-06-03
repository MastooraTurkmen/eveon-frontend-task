"use client";

import { motion } from "framer-motion";
import { useUIStore } from "../store/useStore";
import Image from "next/image";
import heroImageBlack from "../../public/tech-bg-black-company.gif";
import heroImageWhite from "../../public/tech-bg-white-company.gif";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { language, theme } = useUIStore();
  const { t } = useTranslation();

  return (
    <section
      className={`relative px-6 py-20 ${
        theme === "dark" ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 ${
          language === "ar" ? "text-right" : "text-left"
        }`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 order-2 lg:order-1"
        >
          <h1
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("hero.title")}
          </h1>
          <p
            className={`text-lg md:text-xl mb-8 max-w-md ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("hero.subtitle")}
          </p>
          <button className="px-6 py-3 cursor-pointer text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium">
            {t("hero.cta")}
          </button>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
        >
          {theme === "dark" ? (
            <Image
              src={heroImageBlack}
              alt="Tech company illustration"
              priority
              className="rounded-lg"
            />
          ) : (
            <Image
              src={heroImageWhite}
              alt="Tech company illustration"
              priority
              className="rounded-lg"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
