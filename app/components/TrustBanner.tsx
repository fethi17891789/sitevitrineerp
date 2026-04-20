"use client";

import { motion } from "framer-motion";

const trustItems = [
  {
    icon: (
      <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Traçabilité Infaillible",
    desc: "Sécurisé par Blockchain"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Aide Décisionnelle",
    desc: "Propulsée par IA locale"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: "Déploiement Éclair",
    desc: "Setup autonome Windows"
  }
];

export default function TrustBanner() {
  return (
    <div className="relative w-full border-t border-b border-white/[0.05] bg-surface-raised/30 overflow-hidden py-6 z-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {trustItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full silver-glass flex items-center justify-center border-spotlight group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <div>
              <h3 className="text-[13px] font-black text-white uppercase tracking-widest leading-none mb-1 group-hover:text-gradient-silver transition-colors">
                {item.title}
              </h3>
              <p className="text-[12px] text-muted font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-12 translate-x-[-150%] animate-[shine-silver_4s_infinite]" />
    </div>
  );
}
