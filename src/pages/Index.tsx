import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import LogoCarousel from "@/components/home/LogoCarousel";
import WhyDocslyzer from "@/components/home/WhyDocslyzer";
import ThreePillars from "@/components/home/ThreePillars";
import TryItDemo from "@/components/home/TryItDemo";
import IndustrySection from "@/components/home/IndustrySection";
import DevSection from "@/components/home/DevSection";
import SecuritySection from "@/components/home/SecuritySection";
import BlogSection from "@/components/home/BlogSection";
import MissionSection from "@/components/home/MissionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <WhyDocslyzer />
        <ThreePillars />
        <TryItDemo />
        <IndustrySection />
        <DevSection />
        <SecuritySection />
        <BlogSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
