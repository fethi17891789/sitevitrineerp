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
const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-40 bg-surface">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-24">
            <motion.h2 
              variants={itemVars}
              className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tight mb-8 leading-[1.1]"
            >
              L&apos;arsenal <span className="text-gradient-silver">industriel.</span>
            </motion.h2>
            <motion.p variants={itemVars} className="text-[17px] text-muted max-w-[600px] mx-auto leading-relaxed font-medium">
              Oubliez la fragmentation. Voici un écosystème conçu de la fondation 
              vers le haut pour l&apos;efficacité chirurgicale de votre supply chain.
            </motion.p>
          </div>

          {/* Bento Box Grid */}
          <motion.div 
            variants={containerVars}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={itemVars}
                whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }}
                className={`${f.colSpan} border-spotlight rounded-[48px] overflow-hidden perspective-1000 group`}
              >
                <div className="relative h-full min-h-[360px] silver-glass p-12 flex flex-col transition-all duration-700">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-10 group-hover:rotate-12 group-hover:bg-white/10 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                      {f.icon}
                    </div>
                    <h3 className="text-[28px] font-black text-white mb-4 tracking-tighter group-hover:text-gradient-silver transition-all">
                      {f.title}
                    </h3>
                    <p className="text-[16px] font-medium text-muted leading-relaxed transition-colors group-hover:text-white/80">
                      {f.desc}
                    </p>
                    
                    {/* Visual Decoration */}
                    <div className="mt-auto pt-10 flex items-center gap-3 overflow-hidden opacity-30 group-hover:opacity-100 transition-all">
                      <div className="h-[1px] w-12 bg-gradient-to-r from-white/40 to-transparent group-hover:w-20 transition-all" />
                      <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Silver Standard</span>
                    </div>
                  </div>

                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-[shine-silver_2s_infinite] pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
