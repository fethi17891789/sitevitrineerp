"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          viewport={{ once: true, margin: "-33% 0px -33% 0px" }}
        >
          <div className="text-center mb-24">
            <motion.h2 
              variants={itemVars}
              className="text-[clamp(2rem,8vw,4rem)] font-black tracking-tight mb-8 leading-[1.1]"
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
                <div className="relative h-full min-h-[280px] md:min-h-[360px] silver-glass p-6 md:p-12 flex flex-col transition-all duration-700">
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
                    <div className="mt-8 pt-8 flex items-center gap-3 overflow-hidden opacity-30 group-hover:opacity-100 transition-all">
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

          {/* Detailed Vertical Features (Almawarid-inspired) */}
          <div className="mt-32 flex flex-col gap-12 sm:gap-24 relative z-20">
            {[
              {
                title: "Gestion de Production & MRP",
                desc: "Optimisez votre supply chain avec notre moteur MRP. Automatisation de la planification des ressources matérielles pour éviter toute rupture de stock critique dans votre usine.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                align: "left",
                image: "/screenshots/mrp.png",
                imagePosition: "60% 35%"
              },
              {
                title: "Logistique & Suivi Flotte GPS",
                desc: "Surveillez vos expéditions en temps réel. Recevez les positions GPS de vos camions, gérez vos chauffeurs et optimisez vos livraisons partout en Algérie.",
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                align: "right",
                image: "/screenshots/logistique.png",
                imagePosition: "70% 15%"
              },
              {
                title: "Traçabilité Blockchain",
                desc: "L'inviolabilité au service de votre gouvernance. Chaque ordre d'achat, chaque mouvement de stock est haché et inscrit dans un registre immuable privé. Vos audits internes n'ont jamais été aussi sereins.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                align: "left",
                image: "/screenshots/accueil.png",
                imagePosition: "60% 25%"
              },
              {
                title: "Communication Asynchrone",
                desc: "Remplacez vos boucles WhatsApp fragmentées. Un Messenger d'entreprise 100% natif, connecté aux commandes et aux alertes. Partagez l'information critique dans l'espace où s'effectue le travail.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                align: "right",
                image: "/screenshots/chat.png",
                imagePosition: "75% 30%"
              }
            ].map((ft, i) => (
              <motion.div 
                key={ft.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${ft.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {ft.icon === "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ft.icon} />}
                        {ft.icon === "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" && <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ft.icon} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>}
                        {ft.icon === "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ft.icon} />}
                        {ft.icon === "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ft.icon} />}
                     </svg>
                   </div>
                   <h3 className="text-[28px] md:text-[36px] font-black tracking-tight mb-4 text-white hover:text-gradient-silver transition-colors">{ft.title}</h3>
                   <p className="text-[16px] md:text-[18px] text-muted leading-relaxed font-medium">{ft.desc}</p>
                </div>
                <div className="w-full md:w-1/2 relative group cursor-pointer">
                   {/* Floating glow behind */}
                   <div className="absolute -inset-6 bg-white/[0.03] blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                   
                   {/* Window frame */}
                   <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.8)] group-hover:border-white/[0.15] transition-all duration-700 group-hover:scale-[1.02]">
                      {/* macOS-style title bar */}
                      <div className="h-8 bg-[#0d0f1a] border-b border-white/[0.06] flex items-center px-3.5 gap-[6px] shrink-0">
                         <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08] group-hover:bg-[#ff5f57] transition-colors" />
                         <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08] group-hover:bg-[#ffbd2e] transition-colors" />
                         <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08] group-hover:bg-[#28c840] transition-colors" />
                         <div className="mx-auto h-4 w-32 rounded-md bg-white/[0.04] border border-white/[0.05]" />
                      </div>
                      
                      {/* Screenshot container (cropped intelligently) */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                         <Image
                           src={ft.image}
                           alt={`Capture d'écran Skyra ERP — ${ft.title} : interface de gestion efficace`}
                           fill
                           className="object-cover scale-[1.2] transition-all duration-700 group-hover:scale-[1.25]"
                           style={{ objectPosition: ft.imagePosition }}
                           sizes="(max-width: 768px) 100vw, 50vw"
                         />
                         {/* Cinematic vignette */}
                         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,11,20,0.5)_100%)] pointer-events-none" />
                         {/* Bottom fade into background */}
                         <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent pointer-events-none" />
                         {/* Left edge fade (hides sidebar remnants) */}
                         <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-surface/60 to-transparent pointer-events-none" />
                         {/* Top subtle fade */}
                         <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-surface/30 to-transparent pointer-events-none" />
                         {/* Hover sweep shine */}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-[shine-silver_2s_ease-in-out] pointer-events-none" />
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
