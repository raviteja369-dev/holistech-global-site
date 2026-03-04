import { motion } from "framer-motion";
import aboutImg from "@/assets/about-img.jpg";

const whatWeDoPoints = [
  "Enter new markets with clarity and commercial alignment",
  "Build scalable partner and distribution ecosystems",
  "Activate high-performing channel networks",
  "Structure revenue-driven engagement models",
  "Accelerate enterprise acquisition through partner-led growth",
];

const howWeWorkSteps = [
  {
    title: "Assess",
    description:
      "Market potential, competitive positioning, industry readiness, and commercial viability.",
  },
  {
    title: "Structure",
    description:
      "Channel frameworks, engagement models, pricing alignment, and incentive design.",
  },
  {
    title: "Activate",
    description: "Enablement and joint GTM execution.",
  },
  {
    title: "Scale",
    description:
      "Pipeline acceleration, territory expansion, and business growth.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={aboutImg}
          alt="Holistech Global Solutions team collaborating"
          className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            What We Do
          </h2>
          <p className="text-body leading-relaxed mb-4">
            We enable technology vendors, SaaS companies, and enterprise solution providers to build
            scalable, revenue-focused channel ecosystems.
          </p>
          <ul className="space-y-2 text-body text-sm md:text-base">
            {whatWeDoPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-3">
            We don’t just introduce partners. We engineer revenue engines.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold font-heading mb-3">
            How We Work
          </h3>
          <p className="text-body text-sm md:text-base mb-4">
            A systematic approach that ensures strategy translates into measurable, repeatable
            outcomes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {howWeWorkSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                  {step.title}
                </p>
                <p className="text-xs md:text-sm text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
