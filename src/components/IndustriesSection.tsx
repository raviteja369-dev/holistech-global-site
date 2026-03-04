import { motion } from "framer-motion";
import { Cpu, Landmark, Factory, Building2 } from "lucide-react";

const industries = [
  { icon: Cpu, label: "Technology & SaaS" },
  { icon: Landmark, label: "BFSI" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Building2, label: "Enterprise & Mid-Market" },
];

const IndustriesSection = () => (
  <section id="industries" className="section-padding section-alt">
    <div className="container mx-auto text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading mb-3"
      >
        Industries
      </motion.h2>
      <p className="text-body max-w-xl mx-auto">
        Industry-focused channel solutions across technology, finance, manufacturing, and enterprise sectors.
      </p>
    </div>

    <div className="container mx-auto flex flex-wrap justify-center gap-8">
      {industries.map((ind, i) => (
        <motion.div
          key={ind.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex flex-col items-center gap-3 w-40"
        >
          <div className="w-20 h-20 rounded-2xl bg-card shadow-md border border-border flex items-center justify-center hover:shadow-lg transition-shadow">
            <ind.icon className="w-9 h-9 text-primary" />
          </div>
          <span className="text-sm font-medium font-heading text-foreground text-center">
            {ind.label}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default IndustriesSection;
