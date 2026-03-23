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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface/40 backdrop-blur-2xl border-b border-white/[0.08] silver-glow"
            : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white via-primary-soft to-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all group-hover:scale-110 active:scale-90">
              <span className="text-black font-black text-lg">S</span>
            </div>
            <span className="text-[17px] font-bold text-white tracking-widest uppercase bg-clip-text bg-gradient-to-r from-white via-white to-subtle group-hover:text-primary-hover transition-colors">
              Skyra
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#download"
              className="hidden sm:inline-flex text-[11px] font-black uppercase tracking-[0.2em] text-black px-6 py-2.5 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 transition-all"
            >
              Get Started
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
