import { motion } from "framer-motion";
import { Target, Globe2, Handshake } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Go-To-Market Advisory",
    summary: "Strategic market entry frameworks designed for scalable expansion.",
    points: [
      "Market assessment & segmentation",
      "Product positioning & localization",
      "Commercial & pricing strategy",
      "Revenue model design (Retainer / Success / Hybrid)",
      "Competitive landscape analysis",
    ],
  },
  {
    icon: Globe2,
    title: "Distribution & Market Expansion",
    summary:
      "Structured expansion into high-growth regions and industry verticals.",
    points: [
      "Territory mapping & coverage strategy",
      "Master distribution frameworks",
      "Strategic alliances & ecosystem partnerships",
      "Cross-border expansion advisory",
    ],
  },
  {
    icon: Handshake,
    title: "Sales Enablement",
    summary:
      "Empowering partners to generate predictable and scalable revenue.",
    points: [
      "Sales playbooks & GTM toolkits",
      "Joint account planning",
      "Co-sell frameworks",
      "Pipeline acceleration support",
      "Ongoing performance alignment",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="container mx-auto text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading mb-3"
      >
        Services
      </motion.h2>
      <p className="text-body max-w-2xl mx-auto">
        Channel development, distribution strategy, partner enablement, and market expansion solutions
        engineered for revenue outcomes.
      </p>
    </div>

    <div className="container mx-auto grid md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border text-left"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold font-heading mb-2">{s.title}</h3>
          <p className="text-body text-sm leading-relaxed mb-4">{s.summary}</p>
          <ul className="space-y-1.5 text-xs md:text-sm text-body">
            {s.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
