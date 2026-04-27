"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const advantages = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L18 6V14L10 18L2 14V6L10 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M6 10L8.5 12.5L14 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "%99 Üretim Doğruluğu",
    description:
      "Kalite kontrol süreçleriyle her parçada tutarlı hassasiyet garantisi.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L18 6V14L10 18L2 14V6L10 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 7V10L12 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Savunma Sanayi Deneyimi",
    description:
      "Kritik savunma projelerinde kanıtlanmış mühendislik çözümleri ve gizlilik protokolleri.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 5V10L14 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Hızlı Teslimat",
    description:
      "Optimized üretim süreçleriyle rakipsiz teslimat süresi. 72 saatte teslim seçeneği.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 16C10 16 6 13 6 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 10L14 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Mühendislik Desteği",
    description:
      "Deneyimli mühendislik ekibi, proje başlangıcından teslimat sonrasına kadar yanınızda.",
  },
];

const stats = [
  {
    value: 99,
    suffix: "%",
    label: "Üretim Doğruluğu",
  },
  {
    value: 500,
    suffix: "+",
    label: "Tamamlanan Proje",
  },
  {
    value: 50,
    suffix: "+",
    label: "Malzeme Çeşidi",
  },
  {
    value: 72,
    suffix: "s",
    label: "Hızlı Teslimat",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Accent glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#00BFFF] opacity-3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* LEFT: Advantages */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#00BFFF]" />
                <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
                  Neden Biz
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Farkımız
                <br />
                <span className="text-zinc-400">Mükemmeliyette</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-zinc-700/60 rounded-sm flex items-center justify-center text-zinc-500 group-hover:border-[#00BFFF]/40 group-hover:text-[#00BFFF] transition-all duration-300 mt-0.5">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      {adv.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Animated Stats */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative bg-zinc-900/60 border border-zinc-800/60 rounded-sm p-8 hover:border-[#00BFFF]/30 transition-all duration-300 overflow-hidden group ${
                    i === 0 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/20 to-transparent group-hover:via-[#00BFFF]/50 transition-all duration-500" />

                  <div className="text-4xl lg:text-5xl font-bold text-[#00BFFF] mb-2 tabular-nums">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-zinc-500 text-sm tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Visual separator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 p-6 bg-zinc-900/40 border border-zinc-800/40 rounded-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#00BFFF]/10 border border-[#00BFFF]/20 rounded-sm flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#00BFFF]"
                  >
                    <path
                      d="M8 2L14 5V11L8 14L2 11V5L8 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    ISO Kalite Standartları
                  </div>
                  <div className="text-zinc-500 text-xs leading-relaxed">
                    Tüm üretim süreçlerimiz endüstriyel kalite standartlarına
                    uygun olarak yürütülmektedir. Her parça kalite kontrol
                    protokolünden geçer.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
