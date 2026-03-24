"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DashboardPreview from "./components/DashboardPreview";
import StatsSection from "./components/StatsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on refresh
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-surface relative overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <DashboardPreview />
        <StatsSection />
        <DownloadSection />
      </main>
      <div className="relative z-[100] bg-surface">
        <Footer />
      </div>
    </>
  );
}
