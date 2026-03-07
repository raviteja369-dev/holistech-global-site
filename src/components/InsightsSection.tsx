import { motion } from "framer-motion";
import { LineChart, BookOpen, Compass, TrendingUp, Lightbulb } from "lucide-react";

const topics = [
  "Channel Growth Strategies",
  "SaaS Expansion Playbooks",
  "GTM Frameworks",
  "Industry Trends",
  "Case Studies",
];

const insightCards = [
  {
    icon: LineChart,
    title: "Market Intelligence",
    desc: "Channel trends, ecosystem shifts, and opportunity mapping across high-growth markets.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "Playbooks & Case Studies",
    desc: "Practical GTM and channel playbooks backed by real-world execution stories.",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    desc: "Data-driven insights on pipeline performance, partner ROI, and market penetration.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
];

const InsightsSection = () => (
  <section id="insights" className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
    <div className="container mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3"
        >
          Thought Leadership
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
        >
          Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body max-w-2xl mx-auto text-base md:text-lg"
        >
          Thought leadership and market intelligence for founders, revenue leaders, and ecosystem builders
          navigating market expansion.
        </motion.p>
      </div>

      {/* Insight cards grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {insightCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-400 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <card.icon className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-heading font-bold text-base mb-2">{card.title}</h3>
            <p className="text-sm text-body leading-relaxed">{card.desc}</p>
            <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${card.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </motion.div>
        ))}
      </div>

      {/* Topic pills + sidebar */}
      <div className="grid lg:grid-cols-[1.5fr,1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h3 className="text-lg font-heading font-semibold">Topics We Cover</h3>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-200/60 bg-blue-50/50 text-sm font-medium text-blue-700 hover:bg-blue-100/60 hover:border-blue-300 transition-all duration-200 cursor-default"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Compass className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                For Growth Leaders
              </p>
              <p className="text-sm font-heading text-white/90">
                Strategic perspectives, not surface-level commentary.
              </p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Our insights are built for leaders shaping GTM, channel, and ecosystem strategy
            — combining on-ground execution experience with strategic advisory depth.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InsightsSection;
