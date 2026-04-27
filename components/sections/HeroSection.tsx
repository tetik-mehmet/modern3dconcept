"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/ui/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-zinc-700 border-t-[#00BFFF] rounded-full animate-spin" />
    </div>
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00BFFF] opacity-5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00BFFF] opacity-3 rounded-full blur-[100px]" />
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-24 left-6 w-16 h-16 border-t border-l border-[#00BFFF]/30 pointer-events-none" />
      <div className="absolute bottom-16 right-6 w-16 h-16 border-b border-r border-[#00BFFF]/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* LEFT: Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-[#00BFFF]/30 rounded-sm bg-[#00BFFF]/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
              <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
                Endüstriyel 3D Üretim
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6"
            >
              Fikri <span className="text-[#00BFFF]">Gerçeğe</span> Dönüştüren
              <br />
              <span className="text-zinc-300">Endüstriyel 3D</span>
              <br />
              Çözümler
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
            >
              Prototipten seri üretime, savunma sanayine özel yüksek
              hassasiyetli üretim çözümleri.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-zinc-700 text-white text-sm font-semibold rounded-sm hover:border-[#00BFFF]/50 hover:bg-zinc-900 transition-all duration-200 tracking-wide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[#00BFFF]"
                >
                  <path
                    d="M2 8L14 8M9 3L14 8L9 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Projeleri İncele
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00BFFF] text-zinc-950 text-sm font-bold rounded-sm hover:bg-[#0099cc] transition-colors duration-200 tracking-wide accent-glow"
              >
                Teklif Al
              </a>
            </motion.div>

          </div>

          {/* RIGHT: 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg lg:max-w-none h-[400px] sm:h-[500px] lg:h-[600px] relative"
          >
            {/* Decorative ring behind model */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#00BFFF]/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-[#00BFFF]/5 animate-[spin_15s_linear_infinite_reverse]" />
            </div>
            <ThreeScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">
          Keşfet
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
