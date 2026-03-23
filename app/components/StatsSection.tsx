"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function useCountUp(end: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number;
    let frame: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, active]);
  return count;
}

const stats = [
  { value: 99, suffix: ".9%", label: "Up Time", sub: "Disponibilité garantie" },
  { value: 15, suffix: "ms", label: "Latence Média", sub: "Temps de réponse de l'API" },
  { value: 100, suffix: "K+", label: "Requêtes / sec", sub: "Capacité asynchrone" },
  { value: 0, suffix: " downtime", label: "Maintenance", sub: "Déploiement à chaud" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-surface">
      {/* Cinematic subtle glow across section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div ref={ref} className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          className="border-spotlight rounded-[40px] overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 silver-glass">
            {stats.map((s, i) => (
              <Stat key={s.label} stat={s} index={i} active={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ stat, index, active }: { stat: typeof stats[number]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active);

  return (
    <div className="relative p-12 flex flex-col items-center justify-center text-center overflow-hidden bg-surface-raised/40 hover:bg-white/[0.03] transition-colors group">
      {/* Light sweep on entry */}
      <motion.div 
        initial={{ x: "-100%", opacity: 0 }}
        animate={active ? { x: "100%", opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
      />
      
      <div className="relative z-10 w-full pt-4">
        <div className="text-[clamp(2.8rem,5vw,4rem)] font-extrabold tracking-tighter text-white mb-2 leading-none group-hover:scale-110 transition-transform duration-500" style={{ fontVariantNumeric: "tabular-nums" }}>
          {count}
          <span className="text-white/40 text-2xl font-medium tracking-normal ml-1">{stat.suffix}</span>
        </div>
        <h3 className="text-[14px] font-semibold text-white/90 uppercase tracking-widest">{stat.label}</h3>
        <p className="text-[13px] text-muted mt-2 font-medium">{stat.sub}</p>
      </div>
    </div>
  );
}
