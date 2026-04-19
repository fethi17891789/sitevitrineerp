"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Quelles sont les conditions de déploiement de Skyra ERP ?",
    a: "Le déploiement est d'une simplicité inédite. Skyra Engine est packagé sous forme d'un installeur Windows (.exe) autonome. Il peut être installé sur un PC servant de poste central, sans configuration serveur complexe."
  },
  {
    q: "Comment la traçabilité Blockchain fonctionne-t-elle sans internet ?",
    a: "Skyra intègre un module Blockchain privé et local. Les transactions et ordres génèrent des blocs qui sont chaînés localement, garantissant l'intégrité de vos données même hors ligne."
  },
  {
    q: "Est-ce que l'application mobile pour les chauffeurs nécessite une lourde infrastructure ?",
    a: "Non. Le système de tracking via SignalR utilise des flux légers. Le GPS remonte via réseau mobile standard directement vers le Hub Logistique du serveur hébergeant Skyra ERP."
  },
  {
    q: "Peut-on personnaliser le graphe réseau CRM ?",
    a: "Oui. Le moteur graphe IA classe automatiquement vos relations selon la fréquence de validation (fournisseurs prioritaires, filiales, clients), offrant une vision granulaire de votre écosystème abstrait."
  }
];

function FaqItem({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/5 last:border-0 relative group">
      {/* Subtle hover background */}
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
      
      <button 
        onClick={onClick}
        className="w-full text-left py-6 px-4 flex items-center justify-between gap-6 relative z-10 outline-none"
      >
        <span className={`text-[16px] font-black transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full silver-glass flex items-center justify-center flex-shrink-0 transition-transform duration-500 border border-white/10 ${isOpen ? 'rotate-180 bg-white text-black' : 'text-white'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pt-2 text-[15px] text-muted font-medium leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-surface">
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-tight mb-6 text-white leading-tight">
            Questions <span className="text-gradient-silver">Fréquentes.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="border-spotlight rounded-[24px] p-[1px]"
        >
          <div className="silver-glass rounded-[24px] p-2 sm:p-6 shadow-[0_0_50px_rgba(255,255,255,0.02)]">
            {faqs.map((faq, i) => (
              <FaqItem 
                key={i} 
                q={faq.q} 
                a={faq.a} 
                isOpen={openIndex === i} 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
