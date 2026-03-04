import { motion } from "framer-motion";
import { Cloud, Building2, Users, Share2, Link2 } from "lucide-react";

const ecosystemActors = [
  { icon: Cloud, label: "SaaS Vendors" },
  { icon: Building2, label: "Enterprise Technology Providers" },
  { icon: Users, label: "System Integrators" },
  { icon: Share2, label: "Channel Partners" },
  { icon: Link2, label: "Strategic Advisors" },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="section-padding bg-background">
    <div className="container mx-auto mb-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-heading mb-3"
      >
        Ecosystem
      </motion.h2>
      <p className="text-body max-w-2xl mx-auto">
        Our connected global network of vendors, technology partners, distributors, and strategic advisors powers
        structured, partner-led growth.
      </p>
    </div>

    <div className="container mx-auto grid lg:grid-cols-[1.3fr,1fr] gap-10 items-start">
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold font-heading">
          A Connected Global Network
        </h3>
        <p className="text-body">
          Holistech operates at the intersection of technology vendors, enterprise buyers, and channel partners to
          align incentives, execution, and commercial outcomes across the value chain.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ecosystemActors.map((actor, i) => (
            <motion.div
              key={actor.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 flex flex-col items-start gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <actor.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium font-heading">{actor.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-card p-6 space-y-4"
      >
        <h3 className="text-lg font-semibold font-heading">
          Orchestrating Value Across the Chain
        </h3>
        <p className="text-sm text-body leading-relaxed">
          We enable structured collaboration across the value chain:
        </p>
        <p className="text-sm font-medium font-heading">
          Vendor → Distributor → Channel Partner → Enterprise Customer
        </p>
        <p className="text-sm text-body leading-relaxed">
          Our role is to ensure commercial models, enablement, and execution are designed so every layer of the
          ecosystem is aligned to sustainable, performance-driven revenue.
        </p>
      </motion.div>
    </div>
  </section>
);

export default EcosystemSection;

