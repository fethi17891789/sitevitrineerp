"use client";

import { motion } from "framer-motion";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

export default function PerspectiveSection() {
  return (
    <section className="relative py-32 bg-surface overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={containerVars}
          className="text-center mb-24"
        >
          <motion.h2 
             variants={itemVars}
             className="text-[clamp(2rem,6vw,3.5rem)] font-black tracking-tight mb-8 leading-[1.1]"
          >
            Deux visions, <br />
            <span className="text-gradient-silver">une vérité unique.</span>
          </motion.h2>
          <motion.p variants={itemVars} className="text-[17px] text-muted max-w-[700px] mx-auto leading-relaxed font-medium">
            Fini les asymétries d'information. Skyra Engine offre une interface omnisciente pour la direction, et des outils ultra-ciblés pour vos équipes sur le terrain.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Director Perspective */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative group"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] uppercase tracking-widest font-black text-white mb-1">Directeur / Supply Chain</h3>
                <p className="text-muted text-[13px] font-medium">Tour de contrôle globale</p>
              </div>
            </div>
            
            <div className="border-spotlight rounded-[32px] p-[1px] flex-1">
              <div className="silver-glass rounded-[32px] p-8 h-full flex flex-col gap-6">
                <ul className="space-y-4 flex-1">
                  {[
                    "Supervision en direct de la flotte logistique sur la carte",
                    "Validation des calculs MRP et ordres de fabrication (OF)",
                    "Visualisation du réseau d'entreprise via Graphe relationnel",
                    "Accès total au registre immuable Blockchain"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4 text-[15px] text-white/80 font-medium">
                      <span className="mt-1 w-2 h-2 rounded-full bg-white/40 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Glow effect on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Field Perspective */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative group"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] uppercase tracking-widest font-black text-white mb-1">Opérateur / Chauffeur</h3>
                <p className="text-muted text-[13px] font-medium">Outils terrain ultra-ciblés</p>
              </div>
            </div>
            
            <div className="border-spotlight rounded-[32px] p-[1px] flex-1">
              <div className="silver-glass rounded-[32px] p-8 h-full flex flex-col gap-6">
                <ul className="space-y-4 flex-1">
                  {[
                    "Tracking GPS transparent et remontée de la position",
                    "Réception des ordres d'achat et de fabrication",
                    "Signalement d'anomalies via le Messenger en temps réel",
                    "Scan interactif des entrées/sorties de stock"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4 text-[15px] text-white/80 font-medium">
                      <span className="mt-1 w-2 h-2 rounded-full bg-white/40 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Glow effect on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
