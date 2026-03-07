import { motion } from "framer-motion";
import { Cpu, Landmark, Factory, Building2 } from "lucide-react";

const industries = [
  {
    icon: Cpu,
    label: "Technology & SaaS",
    desc: "Cloud, AI/ML, cybersecurity, and enterprise software platforms",
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
  },
  {
    icon: Landmark,
    label: "BFSI",
    desc: "Banking, financial services, insurance, and fintech solutions",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    desc: "Industrial IoT, ERP, supply chain optimization platforms",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-gradient-to-br from-orange-50 to-amber-50",
  },
  {
    icon: Building2,
    label: "Enterprise & Mid-Market",
    desc: "Growth-stage and large enterprise technology adoption",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-gradient-to-br from-violet-50 to-purple-50",
  },
];

const IndustriesSection = () => (
  <section id="industries" className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
    <div className="container mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3"
        >
          Sector Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
        >
          Industries We Serve
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body max-w-xl mx-auto text-base md:text-lg"
        >
          Industry-focused channel solutions across technology, finance, manufacturing, and enterprise sectors.
        </motion.p>
      </div>

      {/* Industry cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative glass-enterprise-card p-8 text-center hover:shadow-2xl hover:shadow-slate-300/30 transition-all duration-500 hover:-translate-y-3"
          >
            {/* Top gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${ind.gradient} rounded-t-2xl`} />

            {/* Icon container with gradient background */}
            <div className="relative mb-6">
              <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 relative overflow-hidden`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ind.icon className="w-12 h-12 text-white relative z-10" strokeWidth={2} />
              </div>
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
            </div>

            {/* Content */}
            <h3 className="font-heading font-bold text-xl mb-3 text-slate-900 group-hover:text-slate-950 transition-colors">
              {ind.label}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
              {ind.desc}
            </p>

            {/* Decorative corner accent */}
            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${ind.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
