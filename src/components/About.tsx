"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutUS from "../../public/undraw_software-engineer_xv60-blue.svg";
import { useTranslation } from "react-i18next";
import { useUIStore } from "../store/useStore";

export default function About() {
  const { t } = useTranslation();
  const language = useUIStore((state) => state.language);
  const theme = useUIStore((state) => state.theme);

  return (
    <section
      id="about"
      className={`relative px-6 py-20 ${
        theme === "dark" ? "bg-zinc-800" : "bg-white"
      } ${language === "ar" ? "text-right" : "text-left"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("about.title")}
          </h2>
          <p
            className={`text-lg md:text-xl leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("about.description")}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src={AboutUS}
            alt="About Us Illustration"
            priority
            className="max-h-[400px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
