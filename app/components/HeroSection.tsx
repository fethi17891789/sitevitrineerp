"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and fade transforms (tuned for Rolling Scroll)
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.4], [1, 0.4]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // Framer motion variants for staggered text reveal
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    },
  };

  // Indicator animations (Corrected top-level hooks)
  const yIndicator = useTransform(scrollYProgress, [0, 0.1], [0, 50]);
  const opacityIndicator = useTransform(scrollYProgress, [0, 0.05], [0.8, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex justify-center overflow-hidden bg-surface"
    >
      {/* Cinematic Background & Beams */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <Image
          src="/hero-bg.png"
          alt="Abstract Industry"
          fill
          priority
          className="object-cover opacity-20 grayscale mix-blend-screen"
        />

        {/* Animated Silver Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] animate-pulse-soft" />
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-pulse" />
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent skew-x-[-15deg]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-surface)_100%)] opacity-90" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-30 w-full max-w-[900px] px-6 flex flex-col items-center pt-[12vh] text-center"
        style={{ scale: scaleText, y: yText, opacity: opacityText }}
      >
        {/* Announcement Pill */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-10 mt-6"
         >
           <div className="border-spotlight rounded-full p-[1px]">
             <div className="silver-glass px-5 py-2 rounded-full flex items-center gap-3">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_10px_white]"></span>
               </span>
               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-shine-silver">
                 Skyra Engine v1.0 — BETA RELEASE
               </span>
             </div>
           </div>
         </motion.div>

        {/* Headline */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <h1 className="text-[clamp(3.5rem,9vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-white">
            <motion.span variants={itemVars} className="block whitespace-nowrap">La gestion d&apos;entreprise,</motion.span>
            <motion.span variants={itemVars} className="block text-gradient-silver">
              repensée.
            </motion.span>
          </h1>
          <div className="absolute -inset-x-20 -inset-y-10 bg-white/5 blur-[100px] rounded-full -z-10 opacity-30" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[clamp(1rem,2vw,1.15rem)] text-muted leading-relaxed max-w-[600px] font-medium"
        >
          Fusionnez inventaire de pointe, ventes, et orchestration MRP au sein
          d&apos;une architecture unifiée. Conçu pour les entreprises exigeantes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-6 relative z-50"
        >
          <button className="relative group px-10 py-5 rounded-full bg-white text-black font-bold text-[14px] leading-none tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_60px_rgba(255,255,255,0.4)] cursor-pointer overflow-hidden border-none focus:outline-none">
            <span className="relative z-10 flex items-center gap-3">
              Explorer le moteur
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-[shine-silver_1.5s_infinite]" />
          </button>

          <a
            href="https://github.com/fethi17891789/erp_pfc_20252026/releases/download/V1.0.0/SKYRA_Setup.exe"
            download="SKYRA_Setup.exe"
            className="relative px-10 py-5 rounded-full text-white font-bold text-[14px] leading-none tracking-widest uppercase overflow-hidden group cursor-pointer active:scale-95 transition-all duration-300 border-spotlight focus:outline-none no-underline flex items-center justify-center min-w-[200px]"
          >
            <div className="absolute inset-0 silver-glass rounded-full group-hover:bg-white/10 transition-colors" />
            <span className="relative z-10 flex flex-col items-center">
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
                Télécharger
              </span>
              <span className="block text-[8px] mt-1 opacity-40 tracking-[0.4em]">V1.0 BETA</span>
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ y: yIndicator, opacity: opacityIndicator }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  );
}
