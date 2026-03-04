import { motion } from "framer-motion";
import { LineChart, BookOpen, Compass } from "lucide-react";

const topics = [
  "Channel Growth Strategies",
  "SaaS Expansion Playbooks",
  "GTM Frameworks",
  "Industry Trends",
  "Case Studies",
];

const InsightsSection = () => (
  <section id="insights" className="section-padding section-alt">
    <div className="container mx-auto grid lg:grid-cols-[1.5fr,1fr] gap-10 items-start">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading mb-3 text-center lg:text-left"
        >
          Insights
        </motion.h2>
        <p className="text-body mb-6 max-w-xl">
          Thought leadership and market intelligence for founders, revenue leaders, and ecosystem builders navigating
          market expansion.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-border bg-card p-4 flex gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <LineChart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold font-heading mb-1">
                Market Intelligence
              </h3>
              <p className="text-xs text-body">
                Channel trends, ecosystem shifts, and opportunity mapping across high-growth markets.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 flex gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold font-heading mb-1">
                Playbooks & Case Studies
              </h3>
              <p className="text-xs text-body">
                Practical GTM and channel playbooks backed by real-world execution stories.
              </p>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <li
              key={topic}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-dashed border-primary/40 text-primary bg-primary/5"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Compass className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              For Growth Leaders
            </p>
            <p className="text-sm font-heading">
              Strategic perspectives, not surface-level commentary.
            </p>
          </div>
        </div>
        <p className="text-sm text-body leading-relaxed">
          Our insights are built for leaders shaping GTM, channel, and ecosystem strategy
          &mdash; combining on-ground execution experience with strategic advisory depth.
        </p>
      </motion.div>
    </div>
  </section>
);

export default InsightsSection;

