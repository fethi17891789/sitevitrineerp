"use client";

import { motion } from "framer-motion";

const features = [
  {
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    title: "Intelligence en temps réel",
    desc: "Un moteur graphique puissant combiné à un backend asynchrone pour suivre vos flux de production sans aucune latence.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    visual: (
      <div className="absolute right-0 bottom-0 top-1/2 w-1/2 bg-gradient-to-l from-primary-soft/10 to-transparent flex items-end">
        <div className="w-3/4 h-3/4 border-l border-t border-primary/20 rounded-tl-3xl bg-surface shadow-[0_0_50px_rgba(138,99,210,0.15)] overflow-hidden">
          <div className="p-4 flex flex-col gap-2">
            <div className="w-full h-8 rounded bg-primary/20 animate-pulse-soft" />
            <div className="w-2/3 h-4 rounded bg-primary/10" />
            <div className="w-5/6 h-4 rounded bg-primary/10" />
          </div>
        </div>
      </div>
    )
  },
  {
    colSpan: "col-span-1",
    title: "Ventes & CRM",
    desc: "L'art de l'engagement client.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    visual: null
  },
  {
    colSpan: "col-span-1",
    title: "MRP Avancé",
    desc: "Planification d'approvisionnement millimétrée.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    visual: null
  },
  {
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    title: "Communication asynchrone unifiée",
    desc: "Ne quittez plus jamais votre espace de travail. Échangez avec vos équipes directement là où se trouve l'information critique.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    visual: (
      <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-gradient-to-l from-white/5 to-transparent flex items-center pr-6">
        <div className="w-full flex flex-col gap-3">
          <div className="w-full h-8 rounded-full bg-surface border border-white/10 flex items-center px-4">
            <span className="w-2 h-2 rounded-full bg-accent-blue mr-3 shadow-[0_0_10px_rgba(10,132,255,0.8)]" />
            <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
          </div>
          <div className="w-5/6 h-8 rounded-full bg-surface/50 border border-white/5 ml-auto flex items-center px-4 justify-end">
            <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    )
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-40 bg-surface">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="text-center mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-6">
            L&apos;arsenal <span className="text-gradient-hero">industriel.</span>
          </h2>
          <p className="text-[17px] text-muted max-w-[600px] mx-auto leading-relaxed">
            Oubliez la fragmentation. Voici un écosystème conçu de la fondation 
            vers le haut pour l&apos;efficacité chirurgicale de votre supply chain.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${f.colSpan} magnetic-border rounded-[32px] overflow-hidden`}
            >
              <div className="mouse-spotlight relative h-full min-h-[280px] bg-board glass-panel p-8 md:p-10 flex flex-col group overflow-hidden">
                
                {f.visual}

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-soft mb-6 group-hover:scale-110 transition-transform duration-500 will-change-transform shadow-lg">
                    {f.icon}
                  </div>
                  <h3 className="text-[22px] font-semibold text-white mb-3 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-relaxed max-w-[80%]">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
