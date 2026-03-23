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
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#02030A]/70 backdrop-blur-xl border-b border-white/[0.06]"
            : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center shadow-[0_0_20px_rgba(123,94,255,0.25)]">
              <span className="text-white font-black text-sm">S</span>
            </div>
            <span className="text-[15px] font-semibold text-white tracking-tight">
              Skyra
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 text-[13px] text-muted hover:text-white transition-colors rounded-lg"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden md:inline-flex text-[13px] font-medium text-white px-4 py-2 rounded-full bg-primary/90 hover:bg-primary transition-colors"
            >
              Essayer gratuitement
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/5"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-[5px]">
                <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-[18px] h-[1.5px] bg-white rounded-full origin-center" />
                <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-[18px] h-[1.5px] bg-white rounded-full" />
                <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-[18px] h-[1.5px] bg-white rounded-full origin-center" />
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
