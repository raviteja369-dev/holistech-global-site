import { motion } from "framer-motion";
import { Zap, Users, Globe, TrendingUp, Infinity } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Structured market access" },
  { icon: Zap, title: "Advisory-led commercialization" },
  { icon: Users, title: "Strong enterprise network alignment" },
  { icon: TrendingUp, title: "Performance-driven engagement models" },
  { icon: Infinity, title: "Long-term revenue partnerships" },
];

const WhyUsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading mb-3"
      >
        Why Holistech?
      </motion.h2>
      <p className="text-body max-w-xl mx-auto">
        Every engagement is aligned to long-term revenue performance, not short-term transactions.
      </p>
    </div>

    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
      {reasons.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <r.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-heading font-semibold text-base">{r.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyUsSection;
