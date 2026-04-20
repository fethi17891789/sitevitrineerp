"use client";

import { motion } from "framer-motion";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-48 overflow-hidden">
      {/* Intense Silver Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.08] blur-[100px] rounded-full pointer-events-none animate-pulse-soft" />

      <motion.div 
        initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        className="max-w-[900px] mx-auto px-8 text-center relative z-10"
      >
        <h2 className="sr-only">Téléchargement de Skyra ERP : Solution de gestion industrielle 4.0</h2>
        <div className="border-spotlight rounded-[64px] p-[1px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          <div className="silver-glass rounded-[40px] md:rounded-[64px] p-8 py-16 md:p-20 lg:p-32 relative overflow-hidden group">
            
            <motion.div 
              variants={containerVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-33% 0px -33% 0px" }}
              className="relative z-10 flex flex-col justify-center items-center"
            >
              <motion.h2 variants={itemVars} className="text-[clamp(1.5rem,7vw,4.5rem)] font-black tracking-tighter mb-10 text-white leading-[1] text-gradient-silver text-center">
                L&apos;industrie de <br/> demain, dès maintenant.
              </motion.h2>
              
              <motion.p variants={itemVars} className="text-white/50 text-[19px] mb-16 max-w-[500px] font-medium leading-relaxed text-center">
                Installez le moteur ERP de référence pour l&apos;industrie 4.0 en Algérie. Performance native, orchestration de production et logistique centralisée.
              </motion.p>

              <motion.a 
                variants={itemVars}
                href="https://github.com/fethi17891789/erp_pfc_20252026/releases/download/V1.1.0/SKYRA_Setup.exe"
                download="SKYRA_Setup.exe"
                className="relative group px-8 py-6 md:px-16 md:py-8 rounded-full bg-white text-black font-black text-[12px] md:text-[16px] leading-none tracking-[0.2em] md:tracking-[0.3em] uppercase hover:scale-110 active:scale-95 transition-all duration-700 shadow-[0_0_80px_rgba(255,255,255,0.5)] cursor-pointer overflow-hidden border-none focus:outline-none focus-visible:ring-4 focus-visible:ring-white flex flex-col items-center no-underline w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  Téléchargement Direct
                </span>
                <span className="relative z-10 block text-[10px] mt-2 opacity-50 tracking-[0.5em]">V1.1 BETA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-[shine-silver_1.5s_infinite]" />
              </motion.a>
              
              <motion.div variants={itemVars} className="mt-12 flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.5em] text-white/30">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                Windows 10/11 x64 exclusif
              </motion.div>
            </motion.div>

            {/* Reflection Decoration (iOS Style) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-40" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-30" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
