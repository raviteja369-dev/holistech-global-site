import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#services" },
  { label: "Partnerships", href: "#ecosystem" },
  { label: "Markets", href: "#industries" },
  { label: "Resources", href: "#insights" },
  { label: "About Us", href: "#company" },
  { label: "Connect", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)] border-b border-slate-200/60"
    >
      <div className="container mx-auto flex items-center justify-between h-[72px] px-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
            <span className="text-white font-heading font-bold text-sm">H</span>
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-slate-900">
            Holistech<span className="text-blue-600">Global</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#partner"
            onClick={(e) => { e.preventDefault(); scrollToSection("#partner"); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-gradient-to-r from-slate-900 to-slate-700 rounded-full hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Partner With Us
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100/80 hover:bg-slate-200/80 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`block py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2">
                <a
                  href="#partner"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#partner"); }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
