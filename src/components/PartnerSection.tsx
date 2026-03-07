import { motion } from "framer-motion";
import { ArrowRight, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerTypes = [
  "Referral partnerships",
  "Co-sell alliances",
  "Revenue-share engagements",
  "Market entry partnerships",
];

const PartnerSection = () => (
  <section id="partner" className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
    {/* Decorative */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-violet-100/20 to-transparent rounded-full blur-[80px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Partner With Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Join the Holistech Global Channel Network
            </h2>
            <p className="text-body leading-relaxed text-base md:text-lg">
              Whether you&apos;re a domestic or global SaaS vendor entering new markets, a technology
              partner seeking new revenue streams, or a distributor expanding your solution portfolio,
              Holistech provides structured collaboration frameworks designed for sustainable,
              performance-driven growth.
            </p>
          </div>

          {/* Partner types */}
          <ul className="space-y-3">
            {partnerTypes.map((type, i) => (
              <motion.li
                key={type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 text-sm text-body"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-medium">{type}</span>
              </motion.li>
            ))}
          </ul>

          <Button
            size="lg"
            className="rounded-full px-8 text-base bg-gradient-to-r from-slate-900 to-slate-700 hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5 transition-all duration-300 group"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Start a Partnership Conversation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-[30px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-violet-500/10 blur-[30px]" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                    Ecosystem-Centric
                  </p>
                  <p className="text-sm font-heading text-white/90">
                    Built for long-term, revenue-linked collaboration.
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Every engagement is structured around measurable outcomes and aligned incentives across
                vendors, distributors, partners, and enterprise customers.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-2xl font-bold font-heading text-white">17+</p>
                  <p className="text-xs text-white/50">Years of Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-heading text-white">Global</p>
                  <p className="text-xs text-white/50">Market Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PartnerSection;
