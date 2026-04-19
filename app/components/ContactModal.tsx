"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/meslifethi977@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "Nouveau contact sur site Skyra ERP !",
          Nom: formData.name,
          Email: formData.email,
          Entreprise: formData.company || "Non renseigné",
          Message: formData.message
        })
      });
      // On success (or even if it fails due to CORS, we show success to keep UX smooth)
    } catch (err) {
      console.log("Erreur lors de l'envoi", err);
    }
    
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 overflow-hidden">
          {/* Overlay / Backdrop */}
          <motion.div 
             initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
             animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
             exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
             onClick={onClose}
             className="absolute inset-0 bg-black/60 cursor-pointer pointer-events-auto"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[500px] border-spotlight rounded-[32px] p-[1px] shadow-[0_0_80px_rgba(255,255,255,0.1)] pointer-events-auto max-h-[90vh] flex flex-col"
          >
            <div className="absolute inset-0 bg-white/5 blur-[20px] rounded-[32px] pointer-events-none"></div>
            
            <div className="relative bg-surface silver-glass rounded-[32px] overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="p-6 sm:p-8 flex items-start justify-between border-b border-white/5 shrink-0">
                <div>
                  <h3 className="text-[20px] font-black text-white tracking-tight mb-2">Initier le contact</h3>
                  <p className="text-[13px] text-muted font-medium">Discutons de l'intégration de Skyra ERP dans votre chaîne de production.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white transition-all shrink-0"
                >
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar">
                {submitted ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }} 
                     animate={{ opacity: 1, scale: 1 }} 
                     className="py-12 flex flex-col items-center text-center"
                   >
                     <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-white shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                       <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <p className="text-[18px] font-black text-white mb-2">Message transmis</p>
                     <p className="text-[13px] text-muted font-medium max-w-[280px]">Vérifiez votre boîte mail meslifethi977@gmail.com pour confirmer l'activation du système s'il s'agit du tout premier envoi.</p>
                   </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Protection Anti-Spam formsubmit */}
                    <input type="text" name="_honey" style={{ display: "none" }} />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2">Nom / Prénom</label>
                        <input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] outline-none focus:border-white/40 focus:bg-white/5 transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2">Entreprise</label>
                        <input value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] outline-none focus:border-white/40 focus:bg-white/5 transition-all" placeholder="Industries L.T." />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2">Adresse Email</label>
                      <input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] outline-none focus:border-white/40 focus:bg-white/5 transition-all" placeholder="votre@email.com" />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2">Votre Projet</label>
                      <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required rows={3} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] outline-none focus:border-white/40 focus:bg-white/5 transition-all resize-none" placeholder="Description de vos défis industriels..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 rounded-xl text-[13px] font-black uppercase tracking-widest transition-all duration-300 relative overflow-hidden group bg-white text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:hover:scale-100"
                    >
                      <span className="relative z-10">{isSubmitting ? "Envoi en cours..." : "Envoyer le message"}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Footer / LinkedIn */}
              <div className="p-6 sm:p-8 border-t border-white/5 shrink-0 bg-black/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/30">Ligne directe</span>
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                </div>
                
                <a 
                  href="https://www.linkedin.com/in/fethi-mesli-9a8689304/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl text-[13px] font-black transition-all flex items-center justify-center gap-3 silver-glass text-white/80 hover:text-white border border-white/10 hover:border-white/30 hover:bg-white/5 hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5 fill-[#0a66c2]" viewBox="0 0 24 24">
                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Mon profil LinkedIn
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
