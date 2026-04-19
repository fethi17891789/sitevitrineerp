"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Licence Standard",
    desc: "Idéal pour les PME cherchant à restructurer leur production.",
    price: "Autonome",
    features: [
      "Déploiement Windows local",
      "Module production (MRP)",
      "Facturation et achats",
      "Chat asynchrone basique"
    ],
    highlight: false
  },
  {
    name: "Licence Industrielle",
    desc: "Le summum de la technologie pour les chaînes de production complexes.",
    price: "Sur-Mesure",
    features: [
      "Tout de la licence Standard",
      "Traçabilité Blockchain native",
      "Tracking Logistique haute fréquence",
      "Modèles de décision IA",
      "Graphe relationnel CRM"
    ],
    highlight: true
  }
];

export default function PricingSection() {
  return (
    <section className="relative py-32 bg-surface overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight mb-6 text-white leading-tight">
            Acquérez le <br className="sm:hidden" />
            <span className="text-gradient-silver">contrôle total.</span>
          </h2>
          <p className="text-[17px] text-muted max-w-[600px] mx-auto font-medium">
            Pas d'abonnements cachés. Choisissez l'architecture qui convient à votre échelle industrielle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto px-4 sm:px-0">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative rounded-[32px] p-[1px] group ${plan.highlight ? 'border-spotlight' : 'border border-white/5'}`}
            >
              {plan.highlight && (
                <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              )}
              
              <div className={`relative h-full rounded-[32px] p-8 sm:p-12 flex flex-col ${plan.highlight ? 'silver-glass shadow-[0_0_80px_rgba(255,255,255,0.05)]' : 'bg-surface-raised/30'}`}>
                
                {plan.highlight && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-white text-black text-[10px] uppercase font-black tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      Recommandé
                    </span>
                  </div>
                )}

                <h3 className="text-[20px] font-black text-white mb-2">{plan.name}</h3>
                <p className="text-[14px] text-muted font-medium mb-8 h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-[32px] font-black text-white tracking-tight">{plan.price}</span>
                </div>

                <ul className="mb-10 space-y-4 flex-1">
                  {plan.features.map((ft, j) => (
                    <li key={j} className="flex items-center gap-3 text-[14px] text-white/80 font-medium">
                      <svg className={`w-5 h-5 ${plan.highlight ? 'text-white' : 'text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {ft}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl text-[13px] font-black uppercase tracking-widest transition-all duration-300 relative overflow-hidden group/btn ${plan.highlight ? 'bg-white text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'silver-glass text-white/80 hover:text-white border-spotlight hover:scale-[1.02]'}`}>
                  <span className="relative z-10">Contacter l'équipe</span>
                  {plan.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12 translate-x-[-150%] group-hover/btn:animate-[shine-silver_1.5s_infinite]" />
                  )}
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
