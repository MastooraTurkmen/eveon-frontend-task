"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useUIStore } from "../store/useStore";
import { cards } from "../data/cards";
import { useTranslation } from "react-i18next";

type Card = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};

export default function CardGrid() {
  const language = useUIStore((state) => state.language);
  const theme = useUIStore((state) => state.theme);
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className={`px-6 py-12 ${
        theme === "dark" ? "bg-zinc-900" : "bg-gray-50"
      } ${language === "ar" ? "text-right" : "text-left"}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {t("featuresTitle")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(({ id, image }: Card) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              className={`rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                theme === "dark" ? "bg-zinc-800" : "bg-white"
              }`}
            >
              <div className="relative w-full h-48">
                <Image
                  src={image}
                  alt={t(`cards.${id}.title`)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t(`cards.${id}.title`)}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-zinc-300" : "text-gray-600"
                  }`}
                >
                  {t(`cards.${id}.description`)}
                </p>
                <button className="px-6 mt-6 py-3 cursor-pointer text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium">
                  {t("learnMore")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
