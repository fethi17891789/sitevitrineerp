"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBanner from "./components/TrustBanner";
import ArchitectureOrbit from "./components/ArchitectureOrbit";
import PerspectiveSection from "./components/PerspectiveSection";
import FeaturesSection from "./components/FeaturesSection";
import DashboardPreview from "./components/DashboardPreview";
import ComparisonSection from "./components/ComparisonSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import StatsSection from "./components/StatsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import WarpTunnel from "./components/WarpTunnel";
import EngineView from "./components/EngineView";

export default function Home() {
  const [warpActive, setWarpActive] = useState(false);
  const [showEngine, setShowEngine] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const isEngine = window.location.hash === "#engine";
      setShowEngine(isEngine);
      if (isEngine) window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check on mount

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleExplore = () => {
    window.scrollTo({ top: 0 });
    setWarpActive(true);
  };

  const handleWarpComplete = () => {
    setWarpActive(false);
    setShowEngine(true);
    if (window.location.hash !== "#engine") {
      window.location.hash = "engine";
    }
  };

  const handleBack = () => {
    if (window.location.hash === "#engine") {
      window.history.back();
    } else {
      setShowEngine(false);
    }
  };

  // ── Engine View (scroll-hijacked feature showcase) ──
  if (showEngine) {
    return <EngineView onBack={handleBack} />;
  }

  // ── Main Site ──
  return (
    <>
      <WarpTunnel isActive={warpActive} onComplete={handleWarpComplete} />
      <Navbar />
      <main className="bg-surface relative overflow-hidden">
        <HeroSection onExplore={handleExplore} />
        <TrustBanner />
        <ArchitectureOrbit />
        <PerspectiveSection />
        <FeaturesSection />
        <DashboardPreview />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <StatsSection />
        <DownloadSection />
      </main>
      <div className="relative z-[100] bg-surface">
        <Footer />
      </div>
    </>
  );
}
