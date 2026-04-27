"use client";

import { motion } from "framer-motion";

const courses = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "Başlangıç",
    title: "3D Baskıya Giriş",
    desc: "FDM teknolojisinin temel prensiplerini, makine bileşenlerini ve ilk baskı sürecini öğrenin. Sıfırdan başlayanlara yönelik pratik ağırlıklı program.",
    duration: "1 Gün",
    level: "Temel",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 19L12 5M5 12L12 5L19 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="19"
          width="18"
          height="2"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    tag: "Modelleme",
    title: "Dilimleyici & Yazılım",
    desc: "Cura, PrusaSlicer ve OrcaSlicer gibi popüler dilimleyici yazılımlarını etkin kullanmayı ve baskı parametrelerini optimize etmeyi öğrenin.",
    duration: "1 Gün",
    level: "Orta",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H15M9 3V9M15 3H19C20.1046 3 21 3.89543 21 5V9M15 3V9M21 9V15M21 15V19C21 20.1046 20.1046 21 19 21H15M21 15H15M3 9V15M3 15V19C3 20.1046 3.89543 21 5 21H9M3 15H9M9 21H15M9 21V15M15 21V15M9 15H15M9 15V9M15 15V9M15 9H9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    tag: "Malzeme",
    title: "Filament & Malzeme Seçimi",
    desc: "PLA, PETG, ABS, TPU ve mühendislik filamentlerinin mekanik özelliklerini, doğru kullanım koşullarını ve uygulamaya özel seçim kriterlerini keşfedin.",
    duration: "Yarım Gün",
    level: "Orta",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 2V8M18 8H12M18 8L12 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "İleri Seviye",
    title: "Endüstriyel 3D Baskı",
    desc: "SLA, SLS ve endüstriyel FDM sistemlerinde üretim süreçlerini, kalite kontrol yöntemlerini ve sektörel uygulamaları gerçek proje örnekleriyle inceleyin.",
    duration: "2 Gün",
    level: "İleri",
  },
];

const stats = [
  { value: "200+", label: "Mezun Öğrenci" },
  { value: "4", label: "Farklı Program" },
  { value: "Sertifikalı", label: "Eğitim" },
  { value: "Uzman", label: "Eğitmenler" },
];

const levelColor: Record<string, string> = {
  Temel: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Orta: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  İleri: "text-[#00BFFF] bg-[#00BFFF]/10 border-[#00BFFF]/20",
};

export default function TrainingSection() {
  return (
    <section
      id="training"
      className="relative py-24 lg:py-36 bg-zinc-950 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00BFFF]/4 blur-[140px] pointer-events-none" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/40 to-transparent" />
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#00BFFF]" />
            <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
              Eğitim Programları
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                3D Baskı{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#0077AA]">
                  Eğitimleri
                </span>
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Başlangıçtan ileri seviyeye kadar uzanan programlarımızla 3D
                baskı teknolojilerini öğrenin. Hem bireysel hem de kurumsal
                katılımcılara yönelik uygulamalı eğitimler sunuyoruz.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6 sm:gap-8 flex-wrap"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-zinc-500 text-xs mt-0.5 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative flex flex-col bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-[#00BFFF]/30 hover:bg-zinc-900/80 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center text-[#00BFFF] mb-5 group-hover:bg-[#00BFFF]/20 transition-colors duration-300">
                {course.icon}
              </div>

              {/* Tag */}
              <span className="text-[#00BFFF] text-[10px] font-semibold tracking-widest uppercase mb-2">
                {course.tag}
              </span>

              {/* Title */}
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 leading-snug">
                {course.title}
              </h3>

              {/* Desc */}
              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
                {course.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 7V12L15 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {course.duration}
                </div>
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${levelColor[course.level] ?? ""}`}
                >
                  {course.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl px-7 py-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center text-[#00BFFF]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M23 21V19C22.9986 18.1137 22.7165 17.2528 22.1946 16.5523C21.6727 15.8519 20.9401 15.3516 20.1099 15.1299"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1458 4.55232C18.6686 5.25392 18.9508 6.11683 18.9508 7.005C18.9508 7.89317 18.6686 8.75608 18.1458 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                Kurumsal Eğitim
              </div>
              <div className="text-zinc-500 text-xs mt-0.5">
                Ekibinize özel içerik ve program tasarımı için bizimle iletişime
                geçin.
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
