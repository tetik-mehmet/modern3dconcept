import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import RadarShowcase from "@/components/sections/RadarShowcase";
import TechSection from "@/components/sections/TechSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import TrainingSection from "@/components/sections/TrainingSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <HeroSection />
      <RadarShowcase />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <TechSection />
      <ProjectShowcase />
      <TrainingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
