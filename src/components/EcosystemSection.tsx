import { motion } from "framer-motion";
import { Cloud, Building2, Users, Share2, Link2, ArrowRight } from "lucide-react";

const ecosystemActors = [
  { 
    icon: Cloud, 
    label: "SaaS Vendors", 
    desc: "Cloud-native solution providers scaling through channel", 
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200/60"
  },
  { 
    icon: Building2, 
    label: "Enterprise Technology", 
    desc: "Large-scale platform and infrastructure vendors", 
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200/60"
  },
  { 
    icon: Users, 
    label: "System Integrators", 
    desc: "Implementation & consulting partners", 
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200/60"
  },
  { 
    icon: Share2, 
    label: "Channel Partners", 
    desc: "Distributors, resellers & VARs driving adoption", 
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200/60"
  },
  { 
    icon: Link2, 
    label: "Strategic Advisors", 
    desc: "Growth advisory & ecosystem architects", 
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200/60"
  },
];

const flowSteps = [
  { 
    label: "Vendor", 
    bgFrom: "from-slate-50",
    bgTo: "to-blue-50",
    border: "border-blue-200/60",
    borderHover: "hover:border-blue-300",
    textColor: "text-blue-700",
    hoverGradient: "from-blue-100/50"
  },
  { 
    label: "Distributor", 
    bgFrom: "from-slate-50",
    bgTo: "to-violet-50",
    border: "border-violet-200/60",
    borderHover: "hover:border-violet-300",
    textColor: "text-violet-700",
    hoverGradient: "from-violet-100/50"
  },
  { 
    label: "Channel Partner", 
    bgFrom: "from-slate-50",
    bgTo: "to-emerald-50",
    border: "border-emerald-200/60",
    borderHover: "hover:border-emerald-300",
    textColor: "text-emerald-700",
    hoverGradient: "from-emerald-100/50"
  },
  { 
    label: "Enterprise", 
    bgFrom: "from-slate-50",
    bgTo: "to-orange-50",
    border: "border-orange-200/60",
    borderHover: "hover:border-orange-300",
    textColor: "text-orange-700",
    hoverGradient: "from-orange-100/50"
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-100/15 to-transparent rounded-full blur-[80px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-4"
        >
          Our Network
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6"
        >
          Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Our connected global network of vendors, technology partners, distributors, and strategic advisors powers
          structured, partner-led growth.
        </motion.p>
      </motion.div>

      {/* Ecosystem actor cards - Premium design */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
        {ecosystemActors.map((actor, i) => (
          <motion.div
            key={actor.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="relative h-full bg-white rounded-2xl border border-slate-200/60 p-6 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${actor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon container with gradient */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${actor.bgGradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${actor.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`} />
                <actor.icon className={`w-8 h-8 text-slate-700 relative z-10 group-hover:text-slate-900 transition-colors duration-300`} />
              </div>
              
              <h3 className="font-heading font-bold text-base mb-2 text-slate-900 group-hover:text-slate-950 transition-colors">
                {actor.label}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                {actor.desc}
              </p>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${actor.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Value chain flow - Enhanced design */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 p-10 md:p-12 shadow-xl shadow-slate-200/40 overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-violet-400 via-emerald-400 to-orange-400" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 text-center text-slate-900">
              Orchestrating Value Across the Chain
            </h3>
            <p className="text-body text-base text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              We enable structured collaboration across the value chain, ensuring every layer of the ecosystem is aligned to sustainable revenue.
            </p>

            {/* Enhanced flow diagram */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {flowSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col md:flex-row items-center gap-4 md:gap-4 flex-1 w-full md:w-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group/step"
                  >
                    <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${step.bgFrom} ${step.bgTo} border-2 ${step.border} flex items-center justify-center shadow-lg hover:shadow-xl ${step.borderHover} transition-all duration-500 hover:scale-105`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.hoverGradient} to-transparent rounded-2xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-500`} />
                      <span className={`text-xs md:text-sm font-bold ${step.textColor} text-center px-2 relative z-10`}>
                        {step.label.toUpperCase()}
                      </span>
                    </div>
                  </motion.div>
                  
                  {i < flowSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                      className="hidden md:flex flex-1 items-center"
                    >
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300/40 via-violet-300/60 via-emerald-300/60 to-orange-300/40" />
                      <div className="relative">
                        <ArrowRight className="w-5 h-5 text-blue-500 -ml-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Mobile arrow */}
                  {i < flowSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, rotate: -90 }}
                      whileInView={{ opacity: 1, rotate: -90 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className="md:hidden"
                    >
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EcosystemSection;
