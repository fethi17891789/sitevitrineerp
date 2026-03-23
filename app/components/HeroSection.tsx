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

  // Parallax and fade transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[110vh] flex justify-center overflow-hidden bg-surface"
    >
      {/* Dynamic Cinematic Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <Image 
          src="/hero-bg.png" 
          alt="Abstract Industry" 
          fill
          priority
          className="object-cover opacity-40 mix-blend-screen"
        />
        
        {/* Layered gradients to blend the image into the dark surface */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-transparent to-[#000000]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_100%)] opacity-80" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-[900px] px-6 flex flex-col items-center pt-[25vh] text-center"
        style={{ scale: scaleText, y: yText, opacity: opacityText }}
      >
        {/* Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="magnetic-border rounded-full p-[1px]">
            <div className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              <span className="text-[12px] font-medium tracking-wide text-white/90">
                Skyra Engine v1.0 — Déploiement Cloud Actif
              </span>
            </div>
          </div>
        </motion.div>

        {/* Staggered Animated Headline */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="overflow-hidden"
        >
          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
            <motion.span variants={itemVars} className="block">La performance industrielle,</motion.span>
            <motion.span variants={itemVars} className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              élevée au rang d&apos;art.
            </motion.span>
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[clamp(1rem,2vw,1.15rem)] text-muted leading-relaxed max-w-[600px] font-medium"
        >
          Fusionnez inventaire de pointe, ventes, et orchestration MRP au sein 
          d&apos;une architecture unifiée. Conçu pour les entreprises exigeantes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="relative group px-8 py-4 rounded-full bg-white text-black font-semibold text-[14px] leading-none tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              Explorer le moteur
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
          </button>
          
          <button className="relative px-8 py-4 rounded-full text-white font-medium text-[14px] leading-none tracking-wide overflow-hidden group">
            <div className="absolute inset-0 glass-panel rounded-full group-hover:bg-white/5 transition-colors" />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              Télécharger (0.00$)
            </span>
          </button>
        </motion.div>
      </motion.div>
      
      {/* Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ y: useTransform(scrollYProgress, [0, 0.1], [0, 50]), opacity: useTransform(scrollYProgress, [0, 0.05], [0.8, 0]) }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  );
}
