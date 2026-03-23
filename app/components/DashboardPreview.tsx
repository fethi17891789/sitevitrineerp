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

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="preview" className="relative py-40 overflow-hidden bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight mb-6">
            Une fondation <br/>
            <span className="text-gradient-hero">sans compromis.</span>
          </h2>
          
          {/* Tab Selector (Apple Pill Style) */}
          <div className="inline-flex items-center p-1.5 rounded-full glass-panel mx-auto mt-8 relative z-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 text-[14px] font-medium rounded-full outline-none transition-colors duration-300 z-10 ${
                  activeTab === tab.id ? "text-white" : "text-muted hover:text-white/80"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/15 rounded-full border border-white/20 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Morphing Dashboard Mockup Area */}
        <div className="relative mx-auto w-full max-w-[1000px] aspect-[16/9]">
          <div className="magnetic-border rounded-[24px] absolute inset-0">
            <div className="mouse-spotlight absolute inset-0 bg-board glass-panel rounded-[24px] overflow-hidden">
              
              {/* Fake Mac OS Header */}
              <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/[0.04] flex items-center px-5 z-20 bg-black/20 backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#333333] hover:bg-[#ff5f57] transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-[#333333] hover:bg-[#ffbd2e] transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-[#333333] hover:bg-[#28c840] transition-colors" />
                </div>
              </div>

              {/* Dynamic Content Morph */}
              <div className="absolute inset-0 top-12">
                <AnimatePresence mode="popLayout">
                  {tabs.map((tab) => (
                    tab.id === activeTab && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        {tab.image}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Subdued shadow directly below frame */}
          <div className="absolute -bottom-10 left-10 right-10 h-20 bg-primary/20 blur-[60px] -z-10" />
        </div>

      </div>
    </section>
  );
}
