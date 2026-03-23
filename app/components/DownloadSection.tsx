"use client";

import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-48 overflow-hidden">
      {/* Intense Silver Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.08] blur-[100px] rounded-full pointer-events-none animate-pulse-soft" />

      <div className="max-w-[800px] mx-auto px-6 text-center">
        <div className="border-spotlight rounded-[48px] p-[1px] overflow-hidden">
          <div className="silver-glass rounded-[48px] p-16 md:p-24 relative overflow-hidden group">
            
            <div className="relative z-10 flex flex-col justify-center items-center">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight mb-8 text-white leading-[1.1]">
                L&apos;industrie de <br/> demain, <span className="text-gradient-silver">aujourd&apos;hui.</span>
              </h2>
              
              <p className="text-muted text-[18px] mb-14 max-w-[450px] font-medium leading-relaxed">
                Procurez-vous l&apos;exécutable système. Aucune dépendance externe, installation millimétrée. Un standard Silver.
              </p>

              <button className="relative group px-12 py-6 rounded-full bg-white text-black font-black text-[15px] leading-none tracking-widest uppercase hover:scale-110 active:scale-95 transition-all duration-500 shadow-[0_0_60px_rgba(255,255,255,0.4)] cursor-pointer overflow-hidden border-none focus:outline-none">
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  Procéder au téléchargement
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-[shine-silver_1.5s_infinite]" />
              </button>
              
              <div className="mt-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Windows 10/11 x64 exclusif
              </div>
            </div>

            {/* Reflection Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
