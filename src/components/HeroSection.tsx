import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "Strategic GTM & Channel Expansion Partner",
    subtitle:
      "Holistech Global Solutions helps technology companies enter, expand, and scale across high-growth markets.",
  },
  {
    title: "Scaling Technology Companies Through Structured Channel Growth",
    subtitle:
      "We build scalable partner ecosystems that convert strategy into predictable revenue.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-start overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Technology background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-primary-foreground/80 mb-3 font-semibold">
              Holistech Global Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading !text-primary-foreground leading-tight mb-4">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 text-base"
                onClick={() => scrollToSection("partner")}
              >
                Partner With Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection("services")}
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-primary scale-110" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
