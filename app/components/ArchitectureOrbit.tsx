"use client";

import { motion } from "framer-motion";

export default function ArchitectureOrbit() {
  return (
    <section className="relative py-32 bg-surface overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight mb-6 text-white leading-tight">
            L'Écosystème <br />
            <span className="text-gradient-silver">Skyra ERP</span>
          </h2>
          <p className="text-[17px] text-muted max-w-[600px] mx-auto font-medium">
            Une architecture unifiée, sans modules externes. Le cœur du système bat en synergie avec la logistique, l'IA et la Blockchain.
          </p>
        </motion.div>

        {/* Orbit Visualization */}
        <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center">
          
          {/* Central Core */}
          <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, type: "spring", bounce: 0.5 }}
             className="relative z-30 w-32 h-32 md:w-48 md:h-48 rounded-full silver-glass border-spotlight flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.1)]"
          >
             <span className="text-[60px] md:text-[90px] font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] select-none">
               S
             </span>
             <div className="absolute inset-0 rounded-full bg-white/5 blur-[20px] pointer-events-none animate-pulse"></div>
          </motion.div>

          {/* Orbits */}
          {[1, 2, 3].map((orbitIndex) => (
             <motion.div 
               key={orbitIndex}
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: orbitIndex * 0.2 }}
               className={`absolute rounded-full border border-white/[0.03] ${orbitIndex === 1 ? 'w-[60%] h-[60%]' : orbitIndex === 2 ? 'w-[80%] h-[80%]' : 'w-full h-full'}`}
             >
               {/* Orbital glowing dots */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 15 + orbitIndex * 10, ease: "linear" }}
                 className="w-full h-full absolute inset-0"
               >
                 <div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
               </motion.div>
             </motion.div>
          ))}

          {/* Satellites */}
          {/* Satellite 1: Blockchain */}
          <motion.div 
            className="absolute z-40 w-16 h-16 md:w-24 md:h-24 rounded-2xl silver-glass border border-white/10 flex items-center justify-center top-[10%] left-[15%] group"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
             <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
             <div className="absolute -top-8 bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-black text-white/50 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Blockchain</div>
          </motion.div>

          {/* Satellite 2: IA */}
          <motion.div 
            className="absolute z-40 w-16 h-16 md:w-24 md:h-24 rounded-2xl silver-glass border border-white/10 flex items-center justify-center bottom-[15%] right-[10%] group"
             animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
             <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             <div className="absolute -bottom-8 bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-black text-white/50 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Moteur IA</div>
          </motion.div>

          {/* Satellite 3: Logistique */}
          <motion.div 
            className="absolute z-40 w-14 h-14 md:w-20 md:h-20 rounded-2xl silver-glass border border-white/10 flex items-center justify-center top-[20%] right-[15%] group"
             animate={{ x: [8, -8, 8] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          >
             <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
             <div className="absolute -top-8 bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-black text-white/50 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Hub Logistique</div>
          </motion.div>

          {/* Satellite 4: MRP */}
          <motion.div 
            className="absolute z-40 w-14 h-14 md:w-20 md:h-20 rounded-2xl silver-glass border border-white/10 flex items-center justify-center bottom-[20%] left-[10%] group"
             animate={{ x: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
          >
             <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
             <div className="absolute -bottom-8 bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-black text-white/50 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Production MRP</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
