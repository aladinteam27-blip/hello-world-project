import NeuralCanvas from "@/components/NeuralCanvas";
import GoldenBlob from "@/components/GoldenBlob";
import ContactPopup from "@/components/ContactPopup";
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
import TvShowSection from "@/components/sections/TvShowSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="background-gradient" />
      <NeuralCanvas />
      <GoldenBlob />
      <div className="relative z-10">
        <HeroSection />
        <TvShowSection />
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
      </div>
      <ContactPopup
        phone="+79045890444"
        whatsappUrl="https://wa.me/79045890444"
        telegramUrl="https://t.me/+79045890444"
      />
    </div>
  );
};

export default Index;
