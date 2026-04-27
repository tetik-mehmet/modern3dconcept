"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 overflow-hidden bg-zinc-950"
    >
      {/* Tech lines background */}
      <div className="absolute inset-0 tech-lines opacity-60 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/50 pointer-events-none" />

      {/* Blue glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-[#00BFFF] opacity-5 rounded-full blur-[100px]" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#00BFFF]/40" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#00BFFF]/40" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#00BFFF]/40" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#00BFFF]/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-[#00BFFF]/30 rounded-sm bg-[#00BFFF]/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
          <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
            Hızlı Başlangıç
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
        >
          Projenizi Bugün
          <br />
          <span className="text-[#00BFFF]">Başlatın</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Ekibimiz sizin için en uygun üretim çözümünü sunsun. Proje dosyanızı
          paylaşın, 24 saat içinde detaylı teklif alın.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:info@modern3dconcept.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#00BFFF] text-zinc-950 font-bold text-base rounded-sm hover:bg-[#0099cc] transition-all duration-200 tracking-wide accent-glow-strong"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M3 4H15C15.55 4 16 4.45 16 5V13C16 13.55 15.55 14 15 14H3C2.45 14 2 13.55 2 13V5C2 4.45 2.45 4 3 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M2 5L9 9.5L16 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Hemen Teklif Al
          </a>
          <a
            href="tel:+905456786007"
            className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-zinc-300 font-semibold text-sm rounded-sm hover:border-[#00BFFF]/50 hover:text-white transition-all duration-200 tracking-wide"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 2H6L7.5 5.5L5.5 7C6.5 9 7 9.5 9 10.5L10.5 8.5L14 10V13C14 13.55 13.55 14 13 14C6.37 14 2 9.63 2 3C2 2.45 2.45 2 3 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            Arayın
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-10 border-t border-zinc-800/60"
        >
          {[
            "24s içinde yanıt",
            "Ücretsiz analiz",
            "Gizlilik garantisi",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-zinc-500 text-xs"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 6L4.5 8.5L10 3.5"
                  stroke="#00BFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
