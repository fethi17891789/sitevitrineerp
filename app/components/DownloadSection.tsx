"use client";

import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-40 bg-surface">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        
        <div className="magnetic-border rounded-[40px] p-1 overflow-hidden">
          <div className="mouse-spotlight bg-[#111111] glass-panel rounded-[38px] p-12 md:p-16 relative">
            
            <div className="relative z-10 flex flex-col justify-center items-center">
              <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold tracking-tight mb-6 glow-text-hover">
                L&apos;industrie de <br/> demain, <span className="text-gradient-hero">aujourd&apos;hui.</span>
              </h2>
              
              <p className="text-muted text-[17px] mb-12 max-w-[400px]">
                Procurez-vous l&apos;exécutable système. Aucune dépendance externe, installation millimétrée.
              </p>

              <button className="relative group px-10 py-5 rounded-full bg-white text-black font-bold text-[15px] leading-none tracking-wide shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  Procéder au téléchargement
                </span>
                <div className="absolute inset-0 rounded-full bg-white blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
              </button>
              
              <div className="mt-8 flex items-center gap-2 text-[12px] font-medium text-subtle">
                <span className="w-1.5 h-1.5 rounded-full bg-muted" />
                Windows 10/11 x64 exclusif
              </div>
            </div>

            {/* Subtle background gradient inside card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-20 bg-gradient-to-r from-primary to-accent-cyan blur-[80px] pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
