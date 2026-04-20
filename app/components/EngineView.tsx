"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: "dashboard",
    title: "Tableau de Bord",
    subtitle: "Centre de commande unifié",
    description:
      "Un hub central donnant accès à tous les modules ERP. Visualisez l'état de chaque module, accédez rapidement aux fonctions critiques et basculez entre vos profils utilisateurs.",
    highlights: [
      "Vue d'ensemble modulaire",
      "Accès rapide aux fonctions",
      "Gestion multi-profils",
      "Statuts en temps réel",
    ],
    image: "/screenshots/accueil.png",
    imagePosition: "60% 25%",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    id: "mrp",
    title: "Production & MRP",
    subtitle: "Planification intelligente des ressources",
    description:
      "Moteur de calcul MRP complet : définissez vos nomenclatures (BOM), lancez des planifications automatiques et générez des ordres de fabrication et d'achat en un clic.",
    highlights: [
      "Nomenclatures multi-niveaux (BOM)",
      "Calcul automatique des besoins",
      "Ordres de fabrication (OF)",
      "Ordres d'achat fournisseurs (OA)",
    ],
    image: "/screenshots/mrp.png",
    imagePosition: "60% 35%",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    id: "logistique",
    title: "Logistique & Tracking GPS",
    subtitle: "Flotte connectée en temps réel",
    description:
      "Géolocalisez votre flotte sur une carte interactive. Suivez les véhicules en direct, gérez les trajets et recevez les positions GPS grâce à une synchronisation SignalR continue.",
    highlights: [
      "Carte interactive Leaflet",
      "Tracking GPS temps réel",
      "Gestion des véhicules & chauffeurs",
      "Historique des trajets",
    ],
    image: "/screenshots/logistique.png",
    imagePosition: "70% 15%",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
  {
    id: "annuaire",
    title: "Annuaire CRM",
    subtitle: "Réseau de contacts intelligent",
    description:
      "Centralisez tous vos contacts — clients, fournisseurs, partenaires — avec enrichissement automatique par IA. Visualisez vos relations sur un graphe réseau interactif.",
    highlights: [
      "Enrichissement IA automatique",
      "Graphe réseau interactif",
      "Validation des données",
      "Tags de rôles personnalisés",
    ],
    image: null,
    imagePosition: null,
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    id: "messagerie",
    title: "Messagerie Temps Réel",
    subtitle: "Communication d'entreprise native",
    description:
      "Un messenger intégré avec conversations en temps réel via SignalR. Partagez des fichiers, collaborez avec l'assistant IA Gemini, le tout sans quitter l'ERP.",
    highlights: [
      "Chat temps réel (SignalR)",
      "Partage de pièces jointes",
      "Assistant IA Gemini intégré",
      "Historique persistant",
    ],
    image: "/screenshots/chat.png",
    imagePosition: "75% 30%",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    id: "blockchain",
    title: "Traçabilité Blockchain",
    subtitle: "Registre immuable & audit",
    description:
      "Chaque opération critique est hashée et inscrite dans un registre blockchain privé. Garantissez l'intégrité de vos données pour des audits internes sereins.",
    highlights: [
      "Hachage SHA-256",
      "Registre immuable privé",
      "Audit trail complet",
      "Ancrage automatique",
    ],
    image: null,
    imagePosition: null,
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },

];

interface EngineViewProps {
  onBack: () => void;
}

export default function EngineView({ onBack }: EngineViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cooldownRef = useRef(false);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up

  const goTo = useCallback(
    (index: number) => {
      if (cooldownRef.current) return;
      if (index < 0 || index >= features.length) return;

      cooldownRef.current = true;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);

      setTimeout(() => {
        cooldownRef.current = false;
      }, 700);
    },
    [activeIndex]
  );

  // Wheel scroll hijacking
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (cooldownRef.current) return;

      if (e.deltaY > 0) {
        if (activeIndex < features.length - 1) goTo(activeIndex + 1);
      } else if (e.deltaY < 0) {
        if (activeIndex === 0) onBack();
        else goTo(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeIndex, goTo, onBack]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        if (activeIndex < features.length - 1) goTo(activeIndex + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (activeIndex === 0) onBack();
        else goTo(activeIndex - 1);
      } else if (e.key === "Escape") {
        onBack();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, goTo, onBack]);

  // Touch swipe (mobile)
  useEffect(() => {
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIndex < features.length - 1) goTo(activeIndex + 1);
        else if (diff < 0) {
          if (activeIndex === 0) onBack();
          else goTo(activeIndex - 1);
        }
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeIndex, goTo, onBack]);

  const feature = features[activeIndex];
  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -60 : 60 }),
  };

  return (
    <div className="fixed inset-0 bg-surface overflow-hidden z-[200]">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-white/30 to-white/60"
          animate={{
            width: `${((activeIndex + 1) / features.length) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Top navigation */}
      <div className="fixed top-0 left-0 right-0 px-6 md:px-12 py-5 flex items-center justify-between z-50">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[12px] uppercase tracking-[0.2em] font-bold cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Retour
        </button>

        <div className="text-white/25 text-[13px] font-mono tracking-wider">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(features.length).padStart(2, "0")}
        </div>
      </div>

      {/* ────────────── MAIN CONTENT ────────────── */}
      <div className="h-full flex items-center justify-center px-6 md:px-16 lg:px-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={feature.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            {/* ── Text side ── */}
            <div className="flex-1 max-w-lg">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
              >
                <svg
                  className="w-7 h-7 text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={feature.icon}
                  />
                  {/* Extra path for location pin */}
                  {feature.id === "logistique" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  )}
                </svg>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="text-white/30 text-[12px] uppercase tracking-[0.25em] font-bold mb-3"
              >
                {feature.subtitle}
              </motion.p>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[clamp(1.8rem,5vw,3rem)] font-black tracking-tight text-white leading-[1.1] mb-5"
              >
                {feature.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[15px] md:text-[16px] text-muted leading-relaxed mb-8"
              >
                {feature.description}
              </motion.p>

              {/* Highlights */}
              <motion.ul className="space-y-3">
                {feature.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                    className="flex items-center gap-3 text-[13px] md:text-[14px] text-white/60 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    {h}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* ── Visual side ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex-1 w-full max-w-xl"
            >
              {feature.image ? (
                <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  {/* Window chrome */}
                  <div className="h-8 bg-[#0d0f1a] border-b border-white/[0.06] flex items-center px-3.5 gap-[6px] shrink-0">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
                    <div className="mx-auto h-4 w-32 rounded-md bg-white/[0.04] border border-white/[0.05]" />
                  </div>
                  {/* Screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover scale-[1.15]"
                      style={{
                        objectPosition: feature.imagePosition || "center",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,11,20,0.5)_100%)] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-surface/60 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-surface/50 to-transparent pointer-events-none" />
                  </div>
                </div>
              ) : (
                /* Abstract placeholder for features without screenshots */
                <div className="relative rounded-2xl border border-white/[0.06] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4)] aspect-[16/10] bg-[#0d0f1a] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
                  <svg
                    className="w-28 h-28 text-white/[0.04]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d={feature.icon}
                    />
                  </svg>
                  <p className="absolute bottom-6 text-white/10 text-[12px] uppercase tracking-widest font-bold">
                    Aperçu à venir
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Right-side navigation dots ── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-50 hidden md:flex">
        {features.map((f, i) => (
          <button
            key={f.id}
            onClick={() => goTo(i)}
            className="group relative flex items-center justify-end cursor-pointer"
            title={f.title}
          >
            {/* Tooltip */}
            <span className="absolute right-5 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-white/50 whitespace-nowrap pr-2">
              {f.title}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-2 h-6 bg-white/70"
                  : "w-2 h-2 bg-white/15 hover:bg-white/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Bottom scroll hint ── */}
      {activeIndex < features.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/15 text-[10px] uppercase tracking-[0.3em]"
        >
          <span>Scroll</span>
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.div>
      )}

      {/* Last slide: back to site button */}
      {activeIndex === features.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-full silver-glass border-spotlight text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-3"
          >
            <svg
              className="w-4 h-4 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            Retour au site
          </button>
        </motion.div>
      )}
    </div>
  );
}
