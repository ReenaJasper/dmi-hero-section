"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-12 bg-white overflow-hidden">
      {/* Animated Hero Illustration in Background */}
     <motion.div
  className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none"
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.35 }}
  transition={{ duration: 1.2 }}
>
  <img
    src="/hero-bg.jpg"
    alt="Hero Background"
    className="w-full md:w-[80%] lg:w-[60%] object-contain"
  />
</motion.div>


      {/* Text and Buttons */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Design Made Intelligent
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From brand kit to launch-ready content, websites & apps — powered by AI.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-6 py-3 bg-[#e30613] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
            Try the Demo
          </button>
          <button className="px-6 py-3 border border-[#e30613] text-[#e30613] font-semibold rounded-lg hover:bg-[#e30613] hover:text-white transition duration-300">
            Join Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}
