import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "expand" | "done">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("expand"), 1800);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background with gradient */}
          <div className="page-loader__bg" />

          {/* Grid overlay */}
          <div className="page-loader__grid" />

          {/* Floating particles */}
          <div className="page-loader__particles">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="page-loader__particle"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.3}s`,
                  width: `${4 + (i % 3) * 3}px`,
                  height: `${4 + (i % 3) * 3}px`,
                }}
              />
            ))}
          </div>

          {/* Center logo animation */}
          <div className="page-loader__content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="page-loader__logo-wrap"
            >
              {/* Logo mark - animated circles */}
              <motion.div className="page-loader__mark">
                <motion.div
                  className="page-loader__ring page-loader__ring--outer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="page-loader__ring page-loader__ring--middle"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="page-loader__ring page-loader__ring--inner"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="page-loader__dot"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>

              {/* Brand text */}
              <motion.div
                className="page-loader__text"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <span className="page-loader__brand">
                  Holistech<span className="page-loader__brand-accent">Global</span>
                </span>
                <span className="page-loader__tagline">Solutions</span>
              </motion.div>

              {/* Loading bar */}
              <motion.div
                className="page-loader__bar-track"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <motion.div
                  className="page-loader__bar-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Wipe transition */}
          {phase === "expand" && (
            <motion.div
              className="page-loader__wipe"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "top" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
