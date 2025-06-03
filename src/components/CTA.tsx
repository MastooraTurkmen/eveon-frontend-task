"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useUIStore } from "../store/useStore";

const CTA = () => {
  const { t, i18n } = useTranslation();
  const { language, theme } = useUIStore();

  React.useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <section
      id="contact"
      className={`py-20 px-6 shadow-inner ${
        theme === "dark" 
          ? "bg-gradient-to-b from-zinc-900 to-blue-900" 
          : "bg-gradient-to-b from-gray-50 to-blue-100"
      } ${
        language === "ar" ? "text-right" : "text-center"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}>
          {t("cta.title")}
        </h2>
        <p className={`text-lg mb-8 ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}>
          {t("cta.description")}
        </p>
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 ${
            language === "ar" ? "sm:flex-row-reverse" : ""
          }`}
        >
          <Link
            href="/contact"
            className={`font-semibold px-6 py-3 rounded-md transition ${
              theme === "dark"
                ? "bg-white text-blue-900 hover:bg-gray-100"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {t("cta.contactButton")}
          </Link>
          <Link
            href="/services"
            className={`border font-semibold px-6 py-3 rounded-md transition ${
              theme === "dark"
                ? "border-white text-white hover:bg-white hover:text-blue-900"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {t("cta.servicesButton")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
