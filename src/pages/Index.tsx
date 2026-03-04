import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EcosystemSection from "@/components/EcosystemSection";
import IndustriesSection from "@/components/IndustriesSection";
import InsightsSection from "@/components/InsightsSection";
import CompanySection from "@/components/CompanySection";
import WhyUsSection from "@/components/WhyUsSection";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <EcosystemSection />
    <IndustriesSection />
    <InsightsSection />
    <CompanySection />
    <WhyUsSection />
    <PartnerSection />
    <ContactSection />
    <FooterSection />
  </div>
);

export default Index;
