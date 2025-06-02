"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-white dark:from-zinc-900 dark:to-zinc-800 px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Build Beautiful Interfaces Effortlessly
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          A simple, elegant component library for modern frontend developers.
        </p>
        <button className="px-6 py-3 cursor-pointer text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
