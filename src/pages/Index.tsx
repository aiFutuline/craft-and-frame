import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyEstimateButton from "@/components/StickyEstimateButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      <StickyEstimateButton />
    </div>
  );
};

export default Index;
