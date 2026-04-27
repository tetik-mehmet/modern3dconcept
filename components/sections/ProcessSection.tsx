"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Proje Gönder",
    description:
      "CAD dosyanızı veya proje gereksinimlerinizi paylaşın. Teknik ekibimiz 24 saat içinde değerlendirmenizi tamamlar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M12 8V16M8 12H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Analiz & Tasarım",
    description:
      "Mühendislik ekibimiz projenizi inceler, malzeme ve yöntem önerilerini sunar. Optimizasyon için geribildirim alınır.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 12H9M15 12H21M12 3V9M12 15V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Üretim",
    description:
      "En uygun teknoloji ile yüksek hassasiyetli üretim başlar. Kalite kontrol süreci her aşamada aktiftir.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="8"
          width="20"
          height="13"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M7 8V6C7 4.34 8.34 3 10 3H14C15.66 3 17 4.34 17 6V8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 13V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Teslimat",
    description:
      "Kalite onaylı ürünler güvenli paketleme ile teslim edilir. Takip ve destek hizmeti süreç sonrasında da devam eder.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 12L12 3L21 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 19H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const isAllComplete = activeStep === steps.length - 1;

  const completionStats = [{ label: "Adım", value: "4" }];

  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 bg-zinc-900/30 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#00BFFF]" />
            <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
              Süreç
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nasıl Çalışıyoruz
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative flex items-start gap-0">
            {/* Connector line background */}
            <div className="absolute top-7 left-7 right-7 h-px bg-zinc-800" />

            {/* Animated progress line */}
            <motion.div
              className="absolute top-7 left-7 h-px bg-[#00BFFF]"
              animate={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
                maxWidth: "calc(100% - 56px)",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex-1 flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setActiveStep(i)}
              >
                {/* Circle */}
                <motion.div
                  className={`relative z-10 w-14 h-14 rounded-full border-2 flex items-center justify-center mb-6 ${
                    i <= activeStep
                      ? "border-[#00BFFF] bg-[#00BFFF]/10 text-[#00BFFF]"
                      : "border-zinc-700 bg-zinc-900 text-zinc-500"
                  }`}
                  animate={
                    isAllComplete
                      ? {
                          boxShadow: [
                            "0 0 0px 0px rgba(0,191,255,0)",
                            "0 0 12px 3px rgba(0,191,255,0.25)",
                            "0 0 0px 0px rgba(0,191,255,0)",
                          ],
                        }
                      : { boxShadow: "none" }
                  }
                  transition={
                    isAllComplete
                      ? { duration: 2, repeat: Infinity, delay: i * 0.12 }
                      : {}
                  }
                >
                  <AnimatePresence mode="wait">
                    {i < activeStep || isAllComplete ? (
                      <motion.svg
                        key="check"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        initial={{ scale: 0, rotate: -45, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 25,
                          delay: isAllComplete ? i * 0.08 : 0,
                        }}
                      >
                        <motion.path
                          d="M3.5 9L7.5 13L14.5 5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: isAllComplete ? i * 0.08 : 0,
                            ease: "easeOut",
                          }}
                        />
                      </motion.svg>
                    ) : (
                      <motion.div
                        key="icon"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.icon}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Pulse ring on last step when all complete */}
                  {isAllComplete && i === steps.length - 1 && (
                    <>
                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-[#00BFFF]"
                        animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                      <motion.span
                        className="absolute inset-0 rounded-full border border-[#00BFFF]"
                        animate={{ scale: [1, 2.4], opacity: [0.35, 0] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 0.35,
                        }}
                      />
                    </>
                  )}
                </motion.div>

                {/* Content */}
                <div className="text-center px-2">
                  <div
                    className={`text-xs font-medium tracking-widest uppercase mb-2 transition-colors duration-300 ${
                      i === activeStep ? "text-[#00BFFF]" : "text-zinc-600"
                    }`}
                  >
                    {step.number}
                  </div>
                  <h3
                    className={`text-base font-bold mb-3 transition-colors duration-300 ${
                      i <= activeStep ? "text-white" : "text-zinc-500"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 ${
                      i === activeStep
                        ? "text-zinc-400 opacity-100"
                        : "text-zinc-600 opacity-60"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Completion Banner */}
          <AnimatePresence>
            {isAllComplete && (
              <motion.div
                key="completion-banner"
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.98 }}
                transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
                className="mt-14 relative overflow-hidden rounded-2xl"
              >
                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00BFFF]/8 via-[#00BFFF]/12 to-[#00BFFF]/8 border border-[#00BFFF]/25" />

                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00BFFF]/15 to-transparent skew-x-12"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1.5,
                  }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7">
                  {/* Left: Icon + Text */}
                  <div className="flex items-center gap-5">
                    {/* Animated checkmark badge */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-[#00BFFF]/15 border border-[#00BFFF]/40 flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(0,191,255,0.45)",
                            "0 0 0 14px rgba(0,191,255,0)",
                          ],
                        }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          className="text-[#00BFFF]"
                        >
                          <motion.path
                            d="M5 14L11 20L23 8"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 0.7,
                              delay: 0.5,
                              ease: "easeInOut",
                            }}
                          />
                        </svg>
                      </motion.div>
                    </div>

                    <div>
                      <motion.p
                        className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase mb-1"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 }}
                      >
                        Süreç Tamamlandı
                      </motion.p>
                      <motion.h3
                        className="text-white font-bold text-xl leading-snug"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.62 }}
                      >
                        Tüm Adımlar Başarıyla Tamamlandı
                      </motion.h3>
                      <motion.p
                        className="text-zinc-400 text-sm mt-1"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.69 }}
                      >
                        Projeleriniz 4 adımlı sürecimizle profesyonelce hayata
                        geçirilmeye hazır.
                      </motion.p>
                    </div>
                  </div>

                  {/* Right: Stats + CTA */}
                  <div className="flex items-center gap-8 flex-shrink-0">
                    {completionStats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <div className="text-[#00BFFF] font-bold text-2xl leading-none">
                          {stat.value}
                        </div>
                        <div className="text-zinc-500 text-xs mt-1 tracking-wide uppercase">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}

                    <motion.a
                      href="#contact"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.85, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="ml-2 px-6 py-3 rounded-lg bg-[#00BFFF] text-zinc-900 font-bold text-sm tracking-wide hover:bg-[#00BFFF]/90 transition-colors duration-200"
                    >
                      Hemen Başlayalım
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-zinc-800" />
              )}

              {/* Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#00BFFF]/50 bg-[#00BFFF]/5 flex items-center justify-center text-[#00BFFF] relative z-10">
                {step.icon}
              </div>

              {/* Content */}
              <div className="pt-2">
                <div className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase mb-1">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
