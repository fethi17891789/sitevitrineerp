import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DashboardPreview from "./components/DashboardPreview";
import StatsSection from "./components/StatsSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardPreview />
        <StatsSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
