"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="relative bg-surface border-t border-white/10 overflow-hidden pt-24 pb-12">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Massive Watermark Text Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center opacity-[0.015] mix-blend-screen overflow-hidden">
         <img src="/skyra-text-silver.svg" alt="" className="w-[400vw] md:w-[200vw] max-w-none h-auto grayscale brightness-200" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 group cursor-pointer mb-6">
              <img
                src="/skyra-logo-full-silver.svg?v=elegant"
                alt="Skyra ERP"
                className="h-10 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all group-hover:scale-110"
              />
            </div>
            <p className="text-[13px] text-muted font-medium leading-relaxed max-w-[200px]">
              L'industrie 4.0 à portée de main. Le premier moteur ERP autonome couplé à l'IA et sécurisé par Blockchain.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-6">Plateforme</h4>
            <ul className="space-y-4">
              {['Moteur MRP', 'Logistique Tracking', 'Traçabilité', 'Assistant IA', 'Tarification'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-muted hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-6">Ressources</h4>
            <ul className="space-y-4">
              {['Documentation API', 'Guide de déploiement', 'Sécurité Blockchain', 'Blog Technique'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-muted hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-6">Légal</h4>
            <ul className="space-y-4">
              {['Conditions Générales', 'Politique de Confidentialité'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-muted hover:text-white transition-colors">{item}</a>
                </li>
              ))}
              <li>
                <button onClick={() => setIsModalOpen(true)} className="text-[13px] text-muted hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40 font-medium">
            © {new Date().getFullYear()} Projet de Fin de Cycle (PFC). Licence Génie Industriel.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <span className="text-[12px] uppercase tracking-widest font-bold">UABT - Tlemcen</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
