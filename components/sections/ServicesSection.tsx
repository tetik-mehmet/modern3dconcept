"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L25 9V19L14 25L3 19V9L14 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M14 3V25M3 9L25 19M25 9L3 19"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    ),
    title: "Prototipleme",
    description:
      "Fikrinizi hızla somutlaştırın. Tasarım döngüsünü kısaltarak pazara ulaşma sürenizi minimize edin.",
    features: ["Hızlı üretim", "Ürün test süreçleri", "Tasarım doğrulama"],
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4L24 8V20L14 24L4 20V8L14 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M9 14L12 17L19 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 4V24"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    ),
    title: "Savunma Sanayi",
    description:
      "Kritik operasyonlar için özel mühendislik parçaları. Gizlilik ve yüksek dayanıklılık önceliğimizdir.",
    features: [
      "Özel mühendislik parçaları",
      "Gizlilik odaklı üretim",
      "Yüksek dayanıklılık",
    ],
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="4"
          y="4"
          width="8"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="16"
          y="4"
          width="8"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="16"
          width="8"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="16"
          y="16"
          width="8"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Seri Üretim",
    description:
      "Endüstriyel kalitede, ölçeklenebilir üretim kapasitesi. Büyük hacimlerde tutarlı kalite garantisi.",
    features: [
      "Ölçeklenebilir üretim",
      "Düşük maliyet optimizasyonu",
      "Endüstriyel kalite",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

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
              Hizmetler
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Her Aşamada
            <br />
            <span className="text-zinc-400">Üretim Çözümü</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-zinc-900/60 border border-zinc-800/60 rounded-sm p-8 hover:border-[#00BFFF]/40 hover:bg-zinc-900 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[#00BFFF]/3 rounded-sm" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent" />
              </div>

              {/* Number */}
              <div className="absolute top-6 right-8 text-5xl font-bold text-zinc-800/60 group-hover:text-zinc-700/80 transition-colors duration-300 select-none">
                {service.number}
              </div>

              {/* Icon */}
              <div className="relative text-zinc-500 group-hover:text-[#00BFFF] transition-colors duration-300 mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-zinc-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-zinc-400 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00BFFF] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#00BFFF]/60 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
