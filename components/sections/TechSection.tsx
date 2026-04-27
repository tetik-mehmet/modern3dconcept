"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    code: "FDM",
    name: "Fused Deposition Modeling",
    description:
      "Termoplastik malzemelerle yüksek dayanımlı parça üretimi. Büyük hacimli ve fonksiyonel prototipler için idealdir.",
    specs: ["PLA, ABS, PETG, Nylon", "±0.1mm hassasiyet", "Büyük hacim desteği"],
    color: "#00BFFF",
  },
  {
    code: "SLA",
    name: "Stereolithography",
    description:
      "UV reçine ile yüksek çözünürlüklü baskı. Mikro düzeyde detay gerektiren parçalar için mükemmel yüzey kalitesi.",
    specs: ["±0.025mm hassasiyet", "Pürüzsüz yüzey", "Detaylı geometriler"],
    color: "#00BFFF",
  },
  {
    code: "SLS",
    name: "Selective Laser Sintering",
    description:
      "Toz tabanlı lazer sinterleme. Destek yapısı gerektirmeden karmaşık geometriler üretilir.",
    specs: ["Nylon, TPU, PA12", "Kompleks geometri", "Destek gerektirmez"],
    color: "#00BFFF",
  },
  {
    code: "REÇINE",
    name: "Reçine Teknolojileri",
    description:
      "Endüstriyel kalite fotopolimer reçineler. Mühendislik uygulamaları için yüksek mukavemet özellikleri.",
    specs: ["Engineering resins", "Yüksek mukavemet", "Isı direnci"],
    color: "#00BFFF",
  },
  {
    code: "ENDÜSTRİYEL",
    name: "Endüstriyel Filamentler",
    description:
      "Karbon fiber, metal dolu ve özel mühendislik filamentleri. Üretim parçaları için gerçek malzeme özellikleri.",
    specs: [
      "Carbon fiber, PEEK",
      "Metal dolu filamentler",
      "Yüksek sıcaklık direnci",
    ],
    color: "#00BFFF",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TechSection() {
  return (
    <section
      id="technologies"
      className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#00BFFF]" />
              <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
                Teknolojiler
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Üretim
              <br />
              <span className="text-zinc-400">Teknolojilerimiz</span>
            </h2>
          </div>

          {/* Material badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-shrink-0 bg-zinc-900/80 border border-[#00BFFF]/30 rounded-sm px-6 py-4 text-center accent-glow"
          >
            <div className="text-4xl font-bold text-[#00BFFF] mb-1">+50</div>
            <div className="text-zinc-400 text-sm tracking-wide">
              Farklı Malzeme Desteği
            </div>
          </motion.div>
        </motion.div>

        {/* Technology Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.code}
              variants={cardVariants}
              className={`group relative bg-zinc-900/50 border border-zinc-800/60 rounded-sm p-6 hover:border-[#00BFFF]/40 transition-all duration-300 overflow-hidden ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/0 to-transparent group-hover:via-[#00BFFF]/50 transition-all duration-500" />

              {/* Code label */}
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-2.5 py-1 bg-[#00BFFF]/10 border border-[#00BFFF]/20 text-[#00BFFF] text-xs font-bold tracking-widest rounded-sm">
                  {tech.code}
                </span>
                <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[#00BFFF] transition-colors duration-300" />
              </div>

              {/* Name */}
              <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                {tech.name}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                {tech.description}
              </p>

              {/* Specs */}
              <ul className="space-y-2">
                {tech.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-center gap-2 text-zinc-400 text-xs"
                  >
                    <span className="w-3 h-px bg-[#00BFFF]/50" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
