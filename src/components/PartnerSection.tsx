import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnerSection = () => (
  <section id="partner" className="section-padding bg-background">
    <div className="container mx-auto grid md:grid-cols-[1.5fr,1fr] gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Partner With Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Join the Holistech Global Channel Network
        </h2>
        <p className="text-body leading-relaxed">
          Whether you&apos;re a domestic or global SaaS vendor entering new markets, a technology
          partner seeking new revenue streams, or a distributor expanding your solution portfolio,
          Holistech provides structured collaboration frameworks designed for sustainable,
          performance-driven growth.
        </p>

        <ul className="space-y-2 text-sm text-body">
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Referral partnerships</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Co-sell alliances</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Revenue-share engagements</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Market entry partnerships</span>
          </li>
        </ul>

        <Button size="lg" className="rounded-full px-8 text-base">
          Start a Partnership Conversation
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-dashed border-primary/40 bg-card p-6 flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Ecosystem-centric
            </p>
            <p className="text-sm font-heading">
              Built for long-term, revenue-linked collaboration.
            </p>
          </div>
        </div>
        <p className="text-sm text-body leading-relaxed">
          Every engagement is structured around measurable outcomes and aligned incentives across
          vendors, distributors, partners, and enterprise customers.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PartnerSection;

