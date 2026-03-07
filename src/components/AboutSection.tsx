import { motion } from "framer-motion";

const howWeWorkSteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Market potential, competitive position, and readiness of current GTM and partner motions.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Design channel architecture, engagement models, incentives, and governance for your ecosystem.",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    number: "03",
    title: "Activate",
    description: "Enable partners, launch joint plays, and operationalize commercial execution across stakeholders.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Double down on what works with territory expansion, pipeline acceleration, and performance management.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

const AboutSection = () => (
  <section
    id="about"
    className="section-padding relative overflow-hidden"
    style={{ background: "transparent" }}
  >
    <div className="container mx-auto relative z-10">
      {/* Image and Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-200/30 to-violet-200/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500" />
            <img
              src="/What we do.png"
              alt="What We Do - Holistech Global Solutions"
              className="relative rounded-2xl shadow-2xl shadow-slate-300/40 w-full object-cover max-h-[500px] ring-1 ring-white/60"
            />
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 space-y-5"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
            What We Do
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-slate-900 leading-tight mb-4">
            Where Strategy Meets Execution and Growth Becomes Predictable.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed">
            Holistech Global Solutions is an operatorl ed strategic advisory and channel partner firm enabling technology companies to scale across domestic and global markets.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed font-medium">
            We don't just advise on growth we build it.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed">
            Through disciplined go to market architecture, ecosystem design, and hands on execution, we transform OEM partnerships into predictable revenue engines.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed">
            By aligning strategy with on ground channel performance, we deliver scalable, sustainable, and outcome driven expansion.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["GTM Strategy", "Channel Growth", "Partner Ecosystems", "Revenue Scaling"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/50"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* How We Work Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-5xl mx-auto mb-16"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            From strategy decks to on-ground execution.
          </h2>
          <p className="text-base md:text-lg text-body leading-relaxed max-w-2xl mx-auto">
            A structured, operator-led approach that connects GTM strategy to the day-to-day reality of partners, sellers, and enterprise buyers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 gap-5">
          {howWeWorkSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex gap-5">
                {/* Number */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-base font-bold text-slate-700">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default AboutSection;
