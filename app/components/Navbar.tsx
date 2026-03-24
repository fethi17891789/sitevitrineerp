"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Aperçu", href: "#preview" },
  { label: "Télécharger", href: "#download" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-700 ${
          scrolled
            ? "silver-glass border-spotlight silver-glow !rounded-none"
            : "bg-transparent border-b border-white/5"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-primary-soft to-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all group-hover:rotate-6 group-hover:scale-110 active:scale-90 border border-white/20">
              <span className="text-black font-black text-[15px]">S</span>
            </div>
            <span className="text-[14px] font-black uppercase tracking-[0.4em] text-white group-hover:text-primary-hover transition-all">
              Skyra Engine
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-6 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#download"
              className="hidden sm:inline-flex text-[10px] font-black uppercase tracking-[0.2em] text-black px-6 py-3 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-110 active:scale-95 transition-all cursor-pointer no-underline items-center"
            >
              Démarrer V1.0 BETA
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 silver-glass"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-[6px]">
                <motion.span animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-white rounded-full origin-center" />
                <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-0.5 bg-white rounded-full" />
                <motion.span animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-white rounded-full origin-center" />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl pt-24 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-lg text-muted hover:text-white transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
