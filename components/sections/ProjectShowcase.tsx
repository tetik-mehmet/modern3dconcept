"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, image: "/proje_resimleri/bir.png" },
  { id: 2, image: "/proje_resimleri/iki.png" },
  { id: 3, image: "/proje_resimleri/uc.png" },
  { id: 4, image: "/proje_resimleri/dort.png" },
  { id: 5, image: "/proje_resimleri/bes.png" },
  { id: 6, image: "/proje_resimleri/alti.png" },
  { id: 7, image: "/proje_resimleri/yedi.png" },
  { id: 8, image: "/proje_resimleri/sekiz.png" },
  { id: 9, image: "/proje_resimleri/dokuz.png" },
  { id: 10, image: "/proje_resimleri/on.png" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 bg-zinc-900/20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
          Tamamlanan Projelerimiz
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-sm border border-zinc-800/60 transition-colors duration-300 hover:border-zinc-600/80"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={project.image}
                alt="Proje görseli"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* "Ve daha fazlası" ibaresi */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-700/60" />
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]/60"
                  style={{ opacity: 1 - i * 0.25 }}
                />
              ))}
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-zinc-700/60" />
          </div>
          <p className="text-zinc-500 text-sm tracking-wide">
            ve <span className="text-[#00BFFF] font-medium">yüzlerce proje</span> daha…
          </p>
        </motion.div>
      </div>
    </section>
  );
}
