"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Depuis le déploiement de Skyra ERP, notre algorithme MRP anticipe nos commandes de matières premières sans aucune intervention humaine. Les ruptures de stock sont du passé.",
    author: "Rafik B.",
    role: "Directeur de production",
    company: "Industries L.T."
  },
  {
    quote: "Le module de tracking Logistique à haute fréquence nous donne une visibilité à la seconde près sur notre flotte. Nous avons réduit les incidents de livraison de 40% en un mois.",
    author: "Amine S.",
    role: "Responsable Supply Chain",
    company: "Transports Nord"
  },
  {
    quote: "Savoir que nos données sont sécurisées et traçables via une architecture Blockchain interne nous permet d'auditer notre entreprise avec une confiance absolue. Inédit en Algérie.",
    author: "Sarah M.",
    role: "Auditrice Qualité",
    company: "Groupe Pharmaceutique"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-surface overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
           <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black tracking-tight mb-6 text-white leading-[1.1]">
            Approuvé par <br className="sm:hidden" />
            <span className="text-gradient-silver">l'élite industrielle.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="border-spotlight rounded-[32px] p-[1px] group"
            >
              <div className="relative h-full silver-glass rounded-[32px] p-10 flex flex-col transition-all duration-700 bg-white/[0.01] hover:bg-white/[0.03]">
                <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-[16px] text-white/80 font-medium leading-relaxed mb-auto italic">
                  "{testi.quote}"
                </p>
                
                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-raised border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[16px] font-black text-white">{testi.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-black text-white uppercase tracking-wider mb-1">{testi.author}</h4>
                    <p className="text-[12px] text-muted">{testi.role} · <span className="text-white/60">{testi.company}</span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
