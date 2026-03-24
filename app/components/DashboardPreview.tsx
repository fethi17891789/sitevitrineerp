"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "inventaire", label: "Inventaire", 
    image: <div className="absolute inset-x-0 bottom-0 top-[20%] flex gap-4 px-8 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex-1 rounded-t-xl bg-gradient-to-t from-primary/10 to-primary/30 border-x border-t border-primary/20 shadow-[0_0_30px_rgba(138,99,210,0.1)] flex flex-col items-center justify-start py-6" style={{ transform: `translateY(${i%2 === 0 ? '20px' : '40px'})` }}>
          <div className="w-12 h-12 rounded-full border-4 border-primary/40" />
        </div>
      ))}
    </div>
  },
  { id: "production", label: "Production (MRP)", 
    image: <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[300px] h-[300px] rounded-full border border-accent-cyan/20 flex items-center justify-center relative shadow-[0_0_80px_rgba(100,210,255,0.1)]">
        <div className="w-[200px] h-[200px] rounded-full border border-accent-cyan/40 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_20px_rgba(100,210,255,1)]" />
      </div>
    </div>
  },
  { id: "chat", label: "Chat asynchrone", 
    image: <div className="absolute inset-x-12 inset-y-8 flex flex-col gap-4">
      <div className="w-2/3 h-14 rounded-2xl bg-white/5 border border-white/10 ml-auto backdrop-blur flex items-center px-4 justify-end"><div className="h-2 w-1/3 rounded-full bg-white/20" /></div>
      <div className="w-3/4 h-24 rounded-2xl bg-primary/10 border border-primary/20 mr-auto backdrop-blur flex items-center px-4"><div className="h-2 w-1/2 rounded-full bg-primary/40" /></div>
      <div className="w-1/2 h-14 rounded-2xl bg-white/5 border border-white/10 ml-auto backdrop-blur flex items-center px-4 justify-end"><div className="h-2 w-1/2 rounded-full bg-white/20" /></div>
    </div>
  }
];

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
  },
};

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="preview" className="relative py-40 overflow-hidden bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
           variants={containerVars}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-24">
            <motion.h2 
              variants={itemVars}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-tighter mb-8 leading-none"
            >
              Une fondation <br/>
              <span className="text-gradient-silver">sans compromis.</span>
            </motion.h2>
            
            {/* Tab Selector (Apple Pill Style) */}
            <motion.div variants={itemVars} className="inline-flex items-center p-2 rounded-full silver-glass border-spotlight mx-auto mt-4 relative z-20 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-8 py-3 text-[12px] font-black uppercase tracking-[0.3em] rounded-full outline-none transition-all duration-500 z-10 cursor-pointer ${
                    activeTab === tab.id ? "text-black scale-105" : "text-white/40 hover:text-white"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-pill-silver"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20">{tab.label}</span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Morphing Dashboard Mockup Area */}
          <motion.div 
            variants={itemVars}
            className="relative mx-auto w-full max-w-[1000px] aspect-[16/9] perspective-1000 group"
          >
            <div className="border-spotlight rounded-[48px] absolute inset-0 transition-all duration-700 group-hover:scale-[1.03] shadow-[0_60px_120px_rgba(0,0,0,0.8)] group-hover:shadow-[0_80px_150px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-0 silver-glass rounded-[48px] overflow-hidden">
                
                {/* Fake Mac OS Header */}
                <div className="absolute top-0 left-0 right-0 h-16 border-b border-white/[0.08] flex items-center px-10 z-20 bg-white/5 backdrop-blur-3xl">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-[#ff5f57] border border-white/5" />
                    <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-[#ffbd2e] border border-white/5" />
                    <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-[#28c840] border border-white/5" />
                  </div>
                  <div className="mx-auto h-7 w-64 rounded-full bg-white/5 border border-white/10" />
                </div>

                {/* Dynamic Content Morph */}
                <div className="absolute inset-0 top-16 bg-white/[0.01]">
                  <AnimatePresence mode="popLayout">
                    {tabs.map((tab) => (
                      tab.id === activeTab && (
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 1.02, filter: "blur(20px)" }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                          className="absolute inset-0 p-12 overflow-hidden"
                        >
                          <div className="relative h-full silver-glass rounded-[32px] border-spotlight shimmer-silver overflow-hidden">
                            {tab.image}
                            {/* Inner Panel Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                          </div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            {/* External Bloom Effect */}
            <div className="absolute -inset-20 bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10 group-hover:opacity-100 opacity-30 transition-opacity" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
