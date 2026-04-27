"use client";

import { motion } from "framer-motion";

const navGroups = [
  {
    heading: "Hizmetler",
    links: [
      { label: "Prototipleme", href: "#services" },
      { label: "Savunma Sanayi", href: "#services" },
      { label: "Seri Üretim", href: "#services" },
      { label: "Mühendislik Desteği", href: "#why-us" },
    ],
  },
  {
    heading: "Teknolojiler",
    links: [
      { label: "FDM Baskı", href: "#technologies" },
      { label: "SLA Baskı", href: "#technologies" },
      { label: "SLS Baskı", href: "#technologies" },
      { label: "Reçine Teknolojileri", href: "#technologies" },
    ],
  },
  {
    heading: "Şirket",
    links: [
      { label: "Hakkımızda", href: "#why-us" },
      { label: "Projeler", href: "#projects" },
      { label: "Süreç", href: "#process" },
      { label: "İletişim", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/60 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-[#00BFFF] rounded-sm flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-zinc-950"
                >
                  <path
                    d="M9 1L17 5.5V12.5L9 17L1 12.5V5.5L9 1Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M9 1V17M1 5.5L17 12.5M17 5.5L1 12.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold tracking-wide">
                modern3d<span className="text-[#00BFFF]">concept</span>
              </span>
            </a>

            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
              Savunma sanayinden endüstriyel üretime, yüksek hassasiyetli 3D
              baskı çözümleri. Fikrinizi gerçeğe dönüştürüyoruz.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:info@modern3dconcept.com"
                className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-[#00BFFF] flex-shrink-0"
                >
                  <path
                    d="M2 3H12C12.55 3 13 3.45 13 4V10C13 10.55 12.55 11 12 11H2C1.45 11 1 10.55 1 10V4C1 3.45 1.45 3 2 3Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M1 4L7 7.5L13 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                info@modern3dconcept.com
              </a>
              <a
                href="tel:+905456786007"
                className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-[#00BFFF] flex-shrink-0"
                >
                  <path
                    d="M2.5 1.5H5L6 4L4.5 5C5.3 6.7 5.3 6.7 7 7.5L8.5 6L11.5 7V9.5C11.5 10.05 11.05 10.5 10.5 10.5C5.25 10.5 1.5 6.75 1.5 1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
                +90 5456786007
              </a>
              <div className="flex items-start gap-2.5 text-zinc-500 text-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-[#00BFFF] flex-shrink-0 mt-0.5"
                >
                  <path
                    d="M7 1C4.79 1 3 2.79 3 5C3 7.5 7 13 7 13C7 13 11 7.5 11 5C11 2.79 9.21 1 7 1Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <circle
                    cx="7"
                    cy="5"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
                <span>
                  Bağlıca, Hilal Cd. No:13,
                  <br />
                  06570 Etimesgut /{" "}
                  <span className="text-zinc-400">Ankara</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Nav groups */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {navGroups.map((group, i) => (
              <motion.div
                key={group.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
              >
                <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
                  {group.heading}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Konum
            </h4>
            <div className="relative w-full h-56 sm:h-64 rounded-sm overflow-hidden border border-[#00BFFF]/40 shadow-[0_0_24px_4px_rgba(0,191,255,0.25)]">
              <iframe
                title="Modern3D Concept Konum"
                src="https://maps.google.com/maps?q=Bağlıca,+Hilal+Cd.+No:13,+06570+Etimesgut,+Ankara&output=embed&hl=tr&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay link to open in Google Maps */}
              <a
                href="https://maps.google.com/?q=Bağlıca,+Hilal+Cd.+No:13,+06570+Etimesgut,+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-zinc-900/90 border border-zinc-700 text-zinc-400 hover:text-[#00BFFF] hover:border-[#00BFFF]/40 text-xs px-2.5 py-1.5 rounded-sm transition-all duration-200 flex items-center gap-1.5"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M1 9L9 1M9 1H3.5M9 1V6.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Haritada Aç
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-zinc-800/60 flex items-center justify-center">
          <p className="text-zinc-600 text-xs">
            © 2021 modern3dconcept. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
