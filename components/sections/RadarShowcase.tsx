"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const specs = [
  { label: "Proje Türü", value: "Savunma Sanayi" },
  { label: "Üretim Yöntemi", value: "Endüstriyel FDM + SLS" },
  { label: "Boyutlar", value: "200-120 cm" },
  { label: "Teslimat Süresi", value: "72 Saat" },
];

const highlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Yüksek Hassasiyet",
    desc: "Radar kubbe geometrisi milimetrik toleranslarla üretildi.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 12H22M12 2C9.33 6 8 9 8 12C8 15 9.33 18 12 22M12 2C14.67 6 16 9 16 12C16 15 14.67 18 12 22"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Karmaşık Geometri",
    desc: "Geleneksel yöntemlerle üretilemeyen formlar 3D baskı ile hayata geçirildi.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Sertifikalı Kalite",
    desc: "Her parça boyutsal kontrol ve yüzey kalitesi testlerinden geçirildi.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Hızlı Üretim",
    desc: "Proje tasarımından teslimata 72 saatlik kritik üretim süresi.",
  },
];

export default function RadarShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={sectionRef}
      id="radar-showcase"
      className="relative py-24 lg:py-36 bg-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00BFFF]/5 blur-[120px] pointer-events-none" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/40 to-transparent" />
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#00BFFF]" />
          <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
            Referans Proje
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Frame glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00BFFF]/30 via-transparent to-[#00BFFF]/10 pointer-events-none z-10" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00BFFF] rounded-tl-2xl z-20" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00BFFF] rounded-tr-2xl z-20" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00BFFF] rounded-bl-2xl z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00BFFF] rounded-br-2xl z-20" />

            <motion.div
              style={{ y: imageY }}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src="/buyuk_maket.png"
                alt="Savunma sanayi radar maketi — modern3dconcept"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -bottom-5 -right-5 bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-3 flex items-center gap-3 shadow-2xl"
            >
              <div className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
              <span className="text-white text-sm font-semibold">
                Teslim Edildi
              </span>
              <span className="text-zinc-500 text-xs">— Savunma Projesi</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-6 mb-8"
            >
              <Image
                src="/newest_logo.png"
                alt="Modern3DConcept Logo"
                width={280}
                height={105}
                className="w-48 sm:w-64 lg:w-72 h-auto object-contain"
                priority
              />
              <Image
                src="/bogazici.png"
                alt="Boğaziçi Logo"
                width={320}
                height={120}
                className="w-56 sm:w-72 lg:w-80 h-auto object-contain"
                priority
              />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Savunma Sanayi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#0077AA]">
                Mırkas Maketi
              </span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8">
              Büyük ölçekli bir savunma sanayi firmasının talep ettiği bu radar
              maketi, geleneksel imalat yöntemleriyle üretimi mümkün olmayan
              karmaşık geometriler içermekteydi. Modern3DConcept olarak
              endüstriyel 3D baskı teknolojimizle projeyi tam hassasiyetle ve
              kritik sürede teslim ettik.
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3"
                >
                  <div className="text-zinc-500 text-xs mb-1 uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-white text-sm font-semibold">
                    {spec.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i, duration: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center text-[#00BFFF] group-hover:bg-[#00BFFF]/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-zinc-500 text-sm leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-[#00BFFF] text-black font-bold px-7 py-3.5 rounded-xl hover:bg-[#33CFFF] transition-colors duration-300 text-sm tracking-wide"
            >
              Benzer Proje Teklifi Alın
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
