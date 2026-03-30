import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import MarqueeBanner from "@/components/sections/MarqueeBanner";
import ServicesDetail from "@/components/sections/ServicesDetail";
import WorkStages from "@/components/sections/WorkStages";
import Predictions from "@/components/sections/Predictions";
import LoveSection from "@/components/sections/LoveSection";
import NegativeSection from "@/components/sections/NegativeSection";
import ContactCTA from "@/components/sections/ContactCTA";
import Reviews from "@/components/sections/Reviews";
import AboutSection from "@/components/sections/AboutSection";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ServicesPreview />
      <MarqueeBanner text="УСЛУГИ" />
      <ServicesDetail />
      <WorkStages />
      <Predictions />
      <MarqueeBanner text="ЛЮБОВЬ. СЕМЬЯ. ОТНОШЕНИЯ" />
      <LoveSection />
      <NegativeSection />
      <ContactCTA />
      <MarqueeBanner text="ОТЗЫВЫ" />
      <Reviews />
      <AboutSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
