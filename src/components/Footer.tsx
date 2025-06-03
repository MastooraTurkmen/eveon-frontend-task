"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { footerLinks } from "../data/footer";
import { motion } from "framer-motion";
import { socialLinks } from "../data/socialLinks";
import { useUIStore } from "../store/useStore";

export default function Footer() {
  const { t } = useTranslation();
  const { language, theme } = useUIStore();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`px-6 pt-16 pb-10 ${
        theme === "dark"
          ? "bg-gradient-to-b from-zinc-900 to-zinc-800"
          : "bg-white"
      } ${language === "ar" ? "text-right" : "text-left"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left column: Brand Info + Newsletter */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("footer.companyTitle", "Your Company")}
            </h2>
            <p
              className={`text-sm mb-4 ${
                theme === "dark" ? "text-zinc-400" : "text-gray-600"
              }`}
            >
              {t(
                "footer.companyDesc",
                "Building modern, scalable applications with love and expertise."
              )}
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((item, i) => (
                <motion.div whileHover={{ scale: 1.2 }} key={i}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className={`text-xl transition ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {<item.icon />}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("footer.newsletterTitle", "Subscribe to our newsletter")}
            </h4>
            <form className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder={t(
                  "footer.newsletterPlaceholder",
                  "Enter your email"
                )}
                className={`flex-1 px-4 py-2 rounded-md border ${
                  theme === "dark"
                    ? "border-zinc-600 bg-zinc-800 text-white"
                    : "border-gray-300 bg-white text-gray-900"
                }`}
              />
              <button
                type="submit"
                className="px-4 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                {t("footer.subscribe", "Subscribe")}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right column: Footer Links */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {t(`footer.sections.${section.title}`, section.title)}
              </h4>
              <ul className="space-y-2">
                {section.links.map(({ label, href }, i) => (
                  <li key={i}>
                    <Link
                      href={href}
                      className={`hover:underline hover:text-blue-400 ${
                        theme === "dark" ? "text-zinc-300" : "text-black"
                      }`}
                    >
                      {t(`footer.links.${label}`, label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`mt-12 text-center text-sm ${
          theme === "dark" ? "text-zinc-400" : "text-gray-500"
        }`}
      >
        <p>
          ©{new Date().getFullYear()} Eveon.{" "}
          {t("footer.rights", "All rights reserved.")}
        </p>
        <p className="mt-1">
          {t("footer.madeWith", "Made with ❤️ by Mastoora Turkmen")}
        </p>
      </motion.div>
    </motion.footer>
  );
}
