import { motion } from "framer-motion";
import { Mail, MapPin, Globe2, MessageCircle } from "lucide-react";

const conversationTypes = [
  "Vendor GTM consultations",
  "Channel expansion discussions",
  "Strategic advisory engagements",
];

const ContactSection = () => (
  <section id="contact" className="section-padding section-alt">
    <div className="container mx-auto grid md:grid-cols-[1.3fr,1fr] gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Let&apos;s Build Scalable Growth Together
        </h2>
        <p className="text-body leading-relaxed">
          Share your market, channel, or expansion priorities, and we&apos;ll explore how Holistech
          can help structure and activate the right ecosystem for your next phase of growth.
        </p>

        <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm font-semibold font-heading">
              Ideal for
            </p>
          </div>
          <ul className="space-y-1.5 text-sm text-body">
            {conversationTypes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-card p-6 space-y-4"
      >
        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-primary" />
          <div className="text-sm">
            <p className="font-medium">Email</p>
            <p className="text-body text-xs">
              mohsin.mohammed@holistechglobal.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Globe2 className="w-4 h-4 text-primary" />
          <div className="text-sm">
            <p className="font-medium">LinkedIn</p>
            <p className="text-body text-xs">
              LinkedIn profile link to be added
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-primary" />
          <div className="text-sm">
            <p className="font-medium">Location</p>
            <p className="text-body text-xs">
              India &mdash; Chennai | Bengaluru
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Globe2 className="w-4 h-4 text-primary" />
          <div className="text-sm">
            <p className="font-medium">Market Coverage</p>
            <p className="text-body text-xs">
              India &amp; global expansion support
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

