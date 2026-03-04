import { motion } from "framer-motion";

const CompanySection = () => (
  <section id="company" className="section-padding bg-background">
    <div className="container mx-auto space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Company
        </h2>
        <h3 className="text-lg md:text-xl font-semibold font-heading">
          About Holistech Global Solutions
        </h3>
        <p className="text-body leading-relaxed">
          Holistech Global Solutions is a strategic advisory and channel partner firm focused on
          enabling vendor-led and partner-driven expansion across domestic and global markets. We
          combine commercial structuring, ecosystem design, and execution capability to unlock
          scalable and sustainable revenue growth.
        </p>
        <p className="text-body leading-relaxed">
          Holistech brings practical execution insight alongside strategic advisory depth, ensuring
          that GTM blueprints are directly tied to on-ground channel performance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-10"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
              Mission
            </p>
            <p className="text-sm text-body leading-relaxed">
              To enable technology companies to scale domestically and globally through engineered
              channel ecosystems and structured GTM execution.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
              Vision
            </p>
            <p className="text-sm text-body leading-relaxed">
              To become a trusted global partner for vendor-led and partner-driven market expansion.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Leadership
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
              <img
                src="/muzeebur-rahaman.jpg.jpeg"
                alt="Chairman Muzeebur Rahaman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-base font-semibold font-heading">
                  Muzeebur Rahaman
                </p>
                <p className="text-xs text-muted-foreground">
                  Chairman, Holistech Global Solutions
                </p>
                <p className="text-xs text-muted-foreground">
                  Managing Director, Foxteq &mdash; Foxconn Group
                </p>
              </div>
              <p className="text-sm text-body leading-relaxed">
                Muzeebur Rahaman is a seasoned industry leader with over 30 years of experience in the
                Electronics Manufacturing Services (EMS) and IT hardware supply chain sectors. He
                currently serves as Managing Director at Foxteq, part of the Foxconn Group, overseeing
                operations for global brands including Apple, Dell, HP, and Lenovo.
              </p>
              <p className="text-sm text-body leading-relaxed">
                He has led transformational growth initiatives, scaling operations from 50 to 1,000+
                employees and increasing revenues from USD 5M to USD 200M. With deep expertise in global
                supply chain management, reverse logistics, and cost optimization, he is known for driving
                operational excellence, commercial strength, and sustainable international growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
              <img
                src="/mohsin-mohammed.jpg.jpeg"
                alt="Founder & CEO Mohsin Mohammed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-base font-semibold font-heading">
                  Mohsin Mohammed
                </p>
                <p className="text-xs text-muted-foreground">
                  Founder &amp; CEO, Holistech Global Solutions
                </p>
              </div>
              <p className="text-sm text-body leading-relaxed">
                Mohsin Mohammed is a strategic growth leader with 17+ years of experience in enterprise sales,
                SaaS, and digital transformation. An alumnus of Symbiosis Centre for Management Studies, he has
                held leadership roles at Salesforce, Equifax, Persistent Systems, and Lendingkart Technologies
                Private Limited.
              </p>
              <p className="text-sm text-body leading-relaxed">
                At Equifax, he scaled the business multifold, strengthening strategic relationships across BFSI
                and fintech segments. As a founding member of Lendingkart&apos;s platform business, he played a
                key role in building and scaling the B2B SaaS vertical, driving new revenue streams and
                strategic partnerships.
              </p>
              <p className="text-sm text-body leading-relaxed">
                In addition, he has served as a strategic advisor and growth partner to multiple startups,
                helping them establish operations, refine GTM models, secure partnerships, and scale across
                India and international markets. At Holistech Global Solutions, he leads the vision of building
                a structured, channel-driven growth platform focused on scalable revenue models, strategic OEM
                alliances, and long-term recurring value creation.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CompanySection;

