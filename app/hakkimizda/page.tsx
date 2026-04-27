"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Section = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const sections: Section[] = [
  {
    title: "Biz Kimiz?",
    paragraphs: [
      "Modern 3D Concept Yazılım Teknoloji Makine Savunma Sanayi ve Tic. Ltd. Şti., 3 boyutlu katmanlı imalat (additive manufacturing), prototipleme, seri üretim ve yazılım alanlarında yenilikçi çözümler sunan bir teknoloji firmasıdır.",
      "Üretim süreçlerinde kaliteyi en üst seviyede tutarken; zaman, hammadde ve iş gücü maliyetlerini minimize etmeyi hedefleyen firmamız, akıllı üretim sistemleriyle verimli ve sürdürülebilir çözümler geliştirmektedir. Modern 3D Concept, teknolojik gelişmeleri yakından takip eden, müşteri memnuniyetini merkeze alan ve çözüm odaklı yaklaşımıyla sektörde fark yaratmayı amaçlayan bir yapıya sahiptir.",
    ],
  },
  {
    title: "Vizyonumuz",
    paragraphs: [
      "Modern 3D Concept olarak, geliştirdiğimiz teknolojileri global endüstriye entegre ederek uluslararası ölçekte rekabet eden bir marka olmayı hedefliyoruz.",
      "Özellikle katmanlı imalat ve prototip üretim alanlarında öncü konumda yer almayı amaçlayan firmamız; yerli üretimi güçlendirerek, imalat teknolojilerinde dışa bağımlılığı azaltmayı stratejik bir hedef olarak benimsemektedir.",
    ],
  },
  {
    title: "Teknoloji & Üretim",
    paragraphs: [
      "Modern 3D Concept, çağımızın en önemli üretim teknolojilerinden biri olan 3D baskı sistemlerini en güncel haliyle kullanarak yüksek hassasiyet ve üstün kalite standartlarında üretim gerçekleştirmektedir.",
      "Son teknoloji 3D yazıcı altyapımız ve alanında uzman ekibimiz ile; hızlı modelleme, prototipleme ve ön seri üretim süreçlerinde müşterilerimize etkin ve güvenilir çözümler sunuyoruz.",
    ],
  },
  {
    title: "Hizmet Verdiğimiz Sektörler",
    paragraphs: [
      "Modern 3D Concept, dinamik ve tecrübeli yapısıyla Türkiye genelinde birçok sektöre hizmet vermektedir.",
      "Farklı sektörlerin ihtiyaçlarına özel geliştirdiğimiz çözümlerle, hızlı ve yüksek hassasiyetli üretim hizmetleri sunmaktayız.",
    ],
    list: [
      "AR-GE ve inovasyon",
      "Eğitim",
      "Medikal",
      "Mimarlık",
      "İmalat ve sanayi",
      "Raylı sistemler",
      "Otomotiv",
      "Havacılık ve savunma sanayi",
    ],
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00BFFF]/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-[#00BFFF] text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Hakkımızda
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            Modern 3D{" "}
            <span className="text-[#00BFFF]">Concept</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Katmanlı imalat ve 3D baskı teknolojisinde öncü, yerli üretimi
            güçlendiren çözüm ortağınız.
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative"
            >
              {/* Accent line */}
              <div className="flex items-center gap-4 mb-5">
                <span className="block w-8 h-px bg-[#00BFFF]" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#00BFFF] tracking-wide uppercase">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4 pl-0 sm:pl-12">
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-zinc-300 text-sm sm:text-base leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
                {"list" in section && section.list && (
                  <ul className="mt-2 space-y-2">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-center gap-3 text-zinc-300 text-sm sm:text-base">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#00BFFF] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-t border-b border-zinc-800/60 bg-zinc-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Yıllık Deneyim" },
            { value: "500+", label: "Tamamlanan Proje" },
            { value: "12+", label: "Sektör" },
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

      {/* CTA Footer */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Projenizi Birlikte Hayata Geçirelim
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
            3D baskı ve prototip ihtiyaçlarınız için uzman ekibimizle iletişime
            geçin.
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
