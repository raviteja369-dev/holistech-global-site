import { motion } from "framer-motion";
import { Target, Globe2, Handshake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Go-To-Market Advisory",
    summary: "Strategic market entry frameworks designed for scalable expansion.",
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    iconColor: "text-blue-600",
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
    summary: "Structured expansion into high-growth regions and industry verticals.",
    gradient: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    iconColor: "text-violet-600",
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
    summary: "Empowering partners to generate predictable and scalable revenue.",
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
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
  <section id="services" className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
    <div className="container mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3"
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body max-w-2xl mx-auto text-base md:text-lg"
        >
          Channel development, distribution strategy, partner enablement, and market expansion
          solutions engineered for revenue outcomes.
        </motion.p>
      </div>

      {/* Services Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-16 flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-br from-blue-200/30 to-violet-200/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500" />
          <img
            src="/Services.png"
            alt="Services - Holistech Global Solutions"
            className="relative rounded-2xl shadow-2xl shadow-slate-300/40 w-full max-w-4xl object-cover ring-1 ring-white/60"
          />
        </div>
      </motion.div>

      {/* Service cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Top gradient accent bar */}
            <div className={`h-1 bg-gradient-to-r ${s.gradient}`} />

            <div className="p-6 md:p-8">
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${s.lightBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className={`w-7 h-7 ${s.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold font-heading mb-2">{s.title}</h3>
              <p className="text-body text-sm leading-relaxed mb-5">{s.summary}</p>

              <ul className="space-y-2.5 mb-6">
                {s.points.map((point, pi) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + pi * 0.05 }}
                    className="flex gap-2.5 text-sm text-body"
                  >
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${s.gradient} flex-shrink-0`} />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Learn more link */}
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
