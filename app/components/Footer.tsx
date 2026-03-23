export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center shadow-[0_0_12px_rgba(123,94,255,0.2)]">
              <span className="text-white font-black text-[11px]">S</span>
            </div>
            <span className="text-[14px] font-semibold text-white/80">Skyra ERP</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-[13px] text-subtle">
            <a href="#hero" className="hover:text-white transition-colors">Accueil</a>
            <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#preview" className="hover:text-white transition-colors">Aperçu</a>
            <a href="#download" className="hover:text-white transition-colors">Télécharger</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-subtle">
          <span>© 2026 Skyra ERP · Projet de fin de cycle</span>
          <span>Construit avec Next.js, Tailwind CSS et Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
