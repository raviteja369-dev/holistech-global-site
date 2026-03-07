import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologyPartnersSection from "@/components/TechnologyPartnersSection";
import EcosystemSection from "@/components/EcosystemSection";
import IndustriesSection from "@/components/IndustriesSection";
import InsightsSection from "@/components/InsightsSection";
import CompanySection from "@/components/CompanySection";
import WhyUsSection from "@/components/WhyUsSection";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      {/* Full-page scroll-reactive background */}
      <PageBackground />

      <motion.div
        className="min-h-screen relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
        <HeroSection />
        <div className="section-divider" aria-hidden="true" />
        <AboutSection />
        <ServicesSection />
        <TechnologyPartnersSection />
        <EcosystemSection />
        <IndustriesSection />
        <InsightsSection />
        <CompanySection />
        <WhyUsSection />
        <PartnerSection />
        <ContactSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default Index;
