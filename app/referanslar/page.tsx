"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const sectorLabels = [
  "Savunma Sanayi",
  "Havacılık",
  "Otomotiv",
  "Medikal",
  "Mimarlık",
  "Eğitim & ARGE",
  "Raylı Sistemler",
  "Sanayi & İmalat",
];

const references: {
  name: string;
  sector: string;
  logoSrc: string;
}[] = [
  { name: "Boğaziçi", sector: "Sanayi & İmalat", logoSrc: "/referanslar/bogazici.avif" },
  { name: "Bedam", sector: "Savunma Sanayi", logoSrc: "/referanslar/bedam.avif" },
  { name: "Bedam Reklam", sector: "Sanayi & İmalat", logoSrc: "/referanslar/bedam_reklam.png" },
  { name: "Clarte", sector: "Medikal", logoSrc: "/referanslar/clarte.avif" },
  { name: "Figes", sector: "Eğitim & ARGE", logoSrc: "/referanslar/figes.avif" },
  { name: "Hipnodil", sector: "Mimarlık", logoSrc: "/referanslar/hipnodil.avif" },
  { name: "Hipnodil Reklam", sector: "Mimarlık", logoSrc: "/referanslar/hipnodil_reklam.png" },
  { name: "Mega Reklam", sector: "Sanayi & İmalat", logoSrc: "/referanslar/mega_reklam.png" },
  { name: "Optima Reklam", sector: "Sanayi & İmalat", logoSrc: "/referanslar/optima_reklam.png" },
  { name: "Özışmak", sector: "Sanayi & İmalat", logoSrc: "/referanslar/ozismak_reklam.png" },
  { name: "Teknopark", sector: "Eğitim & ARGE", logoSrc: "/referanslar/teknopark.avif" },
  { name: "Dokuz", sector: "Havacılık", logoSrc: "/referanslar/dokuz.avif" },
  { name: "Referans", sector: "Savunma Sanayi", logoSrc: "/referanslar/001e4dd74c5889f899f1.avif" },
];

export default function ReferanslarPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#00BFFF]/6 rounded-full blur-3xl" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#00BFFF]/4 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[#00BFFF] text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Referanslarımız
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            Güvenilir{" "}
            <span className="text-[#00BFFF]">İş Ortaklarımız</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Savunma sanayisinden havacılığa, otomotivden medikal sektörüne
            kadar geniş bir yelpazede lider kurum ve kuruluşlarla çalışıyoruz.
          </motion.p>
        </div>
      </section>

      {/* Sector Tags */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2"
        >
          {sectorLabels.map((sector) => (
            <span
              key={sector}
              className="px-3 py-1.5 text-xs font-medium tracking-wide border border-zinc-700/60 bg-zinc-800/40 text-zinc-400 rounded-sm"
            >
              {sector}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-zinc-800/60" />
      </div>

      {/* Logo Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {references.map((ref, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="group relative flex flex-col items-center justify-center aspect-[3/2] border border-zinc-800/60 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-[#00BFFF]/30 transition-all duration-300 rounded-sm p-6 overflow-hidden"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#00BFFF]/5 to-transparent pointer-events-none" />

                <div className="relative w-full h-full">
                  <Image
                    src={ref.logoSrc}
                    alt={ref.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-3 sm:p-4"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-zinc-600 text-xs mt-10 tracking-wide"
          >
            Daha fazla referans için bizimle iletişime geçebilirsiniz.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-zinc-800/60" />
      </div>

      {/* Stats Strip */}
      <section className="bg-zinc-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Tamamlanan Proje" },
            { value: "12+", label: "Hizmet Sektörü" },
            { value: "10+", label: "Yıllık Deneyim" },
            { value: "100%", label: "Müşteri Memnuniyeti" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#00BFFF] mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-400 text-xs sm:text-sm tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Siz de Referanslarımız Arasında{" "}
            <span className="text-[#00BFFF]">Yer Alın</span>
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
            Projeniz için uzman ekibimizle iletişime geçin, güvenilir çözümler
            sunalım.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BFFF] text-zinc-950 text-sm font-semibold rounded-sm hover:bg-[#0099cc] transition-colors duration-200 tracking-wide"
          >
            Teklif Al
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
