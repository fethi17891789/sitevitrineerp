"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    feature: "Déploiement initial",
    skyra: "Instantané (via Setup.exe autonome)",
    other: "Plusieurs mois d'intégration",
    skyraWin: true
  },
  {
    feature: "Coûts cachés",
    skyra: "Aucun. Licence unique ou serveur dédié.",
    other: "Abonnements Mensuels / Module",
    skyraWin: true
  },
  {
    feature: "Architecture Sécurité",
    skyra: "Registre immuable (Blockchain native)",
    other: "Moteurs de données classiques",
    skyraWin: true
  },
  {
    feature: "Technologie embarquée",
    skyra: "Moteur natif compilé avec assistance IA",
    other: "Scripts et moteurs vieillissants",
    skyraWin: true
  },
  {
    feature: "Communication d'équipe",
    skyra: "Messenger asynchrone intégré",
    other: "Dépendance à Slack ou WhatsApp",
    skyraWin: true
  }
];

export default function ComparisonSection() {
  return (
    <section className="relative py-32 bg-surface">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-tight mb-6 text-white leading-tight">
            Pourquoi choisir <span className="text-gradient-silver">Skyra Engine</span> ?
          </h2>
          <p className="text-[16px] text-muted max-w-[600px] mx-auto font-medium">
            Comparaison frontale avec les ERP traditionnels (Odoo, SAP) qui pèsent sur vos budgets et ralentissent votre flexibilité.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
          className="border-spotlight rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.05)]"
        >
          <div className="silver-glass bg-white/[0.01]">
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
              <div className="p-6 font-bold text-white/50 uppercase tracking-widest text-[12px] flex items-center">
                Fonctionnalité
              </div>
              <div className="p-6 font-black text-white uppercase tracking-widest text-[14px] flex items-center border-l border-white/10 bg-white/5">
                Skyra Engine
              </div>
              <div className="p-6 font-bold text-white/50 uppercase tracking-widest text-[12px] flex items-center border-l border-white/10">
                SaaS Traditionnels
              </div>
            </div>

            {advantages.map((item, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.02] transition-colors">
                <div className="p-6 text-[14px] text-white/80 font-medium flex items-center">
                  {item.feature}
                </div>
                <div className="p-6 text-[14px] font-bold text-white flex items-center border-l border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item.skyra}
                </div>
                <div className="p-6 text-[14px] text-white/40 flex items-center border-l border-white/10 gap-3">
                  <svg className="w-5 h-5 text-red-500/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item.other}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
