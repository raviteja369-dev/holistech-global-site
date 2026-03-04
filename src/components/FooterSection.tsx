import { Mail, MapPin, Globe2 } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto section-padding grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-heading text-xl font-bold mb-4">
          Holistech<span className="text-primary">Global</span> Solutions
        </h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Strategic GTM and channel expansion partner for technology companies scaling across domestic and global
          markets.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#ecosystem" className="hover:text-primary transition-colors">
              Ecosystem
            </a>
          </li>
          <li>
            <a href="#industries" className="hover:text-primary transition-colors">
              Industries
            </a>
          </li>
          <li>
            <a href="#insights" className="hover:text-primary transition-colors">
              Insights
            </a>
          </li>
          <li>
            <a href="#company" className="hover:text-primary transition-colors">
              Company
            </a>
          </li>
          <li>
            <a href="#partner" className="hover:text-primary transition-colors">
              Partner With Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-heading font-semibold mb-4">Contact</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            mohsin.mohammed@holistechglobal.com
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            India &mdash; Chennai | Bengaluru
          </li>
          <li className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-primary" />
            India &amp; global expansion support
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Holistech Global Solutions. All rights reserved.
    </div>
  </footer>
);

export default FooterSection;
