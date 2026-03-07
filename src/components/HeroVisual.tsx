import { motion } from "framer-motion";

/**
 * HeroVisual — Animated ecosystem network diagram
 * Renders an interactive SVG showing the Vendor → Distributor → Partner → Enterprise
 * value chain with pulsing nodes, animated connection lines, and floating particles.
 */

const nodes = [
  { id: "vendor", label: "Vendor", x: 80, y: 60, color: "#3b82f6", size: 38 },
  { id: "dist", label: "Distributor", x: 220, y: 130, color: "#6366f1", size: 34 },
  { id: "partner", label: "Partner", x: 130, y: 230, color: "#8b5cf6", size: 36 },
  { id: "enterprise", label: "Enterprise", x: 280, y: 270, color: "#06b6d4", size: 40 },
];

const connections = [
  { from: "vendor", to: "dist" },
  { from: "vendor", to: "partner" },
  { from: "dist", to: "partner" },
  { from: "dist", to: "enterprise" },
  { from: "partner", to: "enterprise" },
];

const orbitDots = [
  { cx: 50, cy: 150, r: 4, delay: 0, dur: 6 },
  { cx: 300, cy: 80, r: 3, delay: 1.5, dur: 7 },
  { cx: 180, cy: 320, r: 3.5, delay: 3, dur: 5.5 },
  { cx: 320, cy: 200, r: 3, delay: 2, dur: 8 },
  { cx: 100, cy: 310, r: 2.5, delay: 4, dur: 6.5 },
];

const getNodeCoords = (id: string) => nodes.find((n) => n.id === id)!;

const HeroVisual = () => (
  <motion.div
    className="hero-visual"
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
  >
    <div className="hero-visual__container">
      <svg
        viewBox="0 0 380 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-visual__svg"
      >
        <defs>
          {/* Glow filter for nodes */}
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Animated dash for connections */}
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>

          {/* Radial glow behind nodes */}
          {nodes.map((node) => (
            <radialGradient key={`grad-${node.id}`} id={`glow-${node.id}`}>
              <stop offset="0%" stopColor={node.color} stopOpacity="0.50" />
              <stop offset="50%" stopColor={node.color} stopOpacity="0.15" />
              <stop offset="100%" stopColor={node.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Background glow circles — live pulse */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`bg-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.size * 2.5}
            fill={`url(#glow-${node.id})`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3.5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Connection lines */}
        {connections.map(({ from, to }, i) => {
          const a = getNodeCoords(from);
          const b = getNodeCoords(to);
          return (
            <motion.line
              key={`line-${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#line-grad)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 + i * 0.15 }}
            />
          );
        })}

        {/* Animated data flow particles along connections */}
        {connections.map(({ from, to }, i) => {
          const a = getNodeCoords(from);
          const b = getNodeCoords(to);
          return (
            <motion.circle
              key={`particle-${i}`}
              r="2.5"
              fill="#60a5fa"
              opacity="0.7"
              initial={{ cx: a.x, cy: a.y }}
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                delay: 1.5 + i * 0.6,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.8 + i * 0.12,
            }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            {/* Outer ring pulse */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="none"
              stroke={node.color}
              strokeWidth="1"
              strokeOpacity="0.25"
              animate={{
                r: [node.size, node.size + 8, node.size],
                strokeOpacity: [0.25, 0.05, 0.25],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />

            {/* Main circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.65}
              fill="white"
              fillOpacity="0.9"
              stroke={node.color}
              strokeWidth="2"
              strokeOpacity="0.5"
              filter="url(#node-glow)"
            />

            {/* Inner dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.22}
              fill={node.color}
              fillOpacity="0.8"
            />

            {/* Label */}
            <text
              x={node.x}
              y={node.y + node.size + 16}
              textAnchor="middle"
              className="hero-visual__label"
              fill="#475569"
              fontSize="11"
              fontWeight="600"
              fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Ambient orbit dots */}
        {orbitDots.map((dot, i) => (
          <motion.circle
            key={`orbit-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="#93c5fd"
            opacity="0.3"
            animate={{
              cx: [dot.cx, dot.cx + 20, dot.cx - 10, dot.cx],
              cy: [dot.cy, dot.cy - 15, dot.cy + 10, dot.cy],
              opacity: [0.15, 0.45, 0.2, 0.15],
            }}
            transition={{
              duration: dot.dur,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Glass card overlay showing ecosystem stats */}
      <motion.div
        className="hero-visual__stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
      >
        <div className="hero-visual__stat">
          <span className="hero-visual__stat-num">50+</span>
          <span className="hero-visual__stat-label">Partners</span>
        </div>
        <div className="hero-visual__stat-divider" />
        <div className="hero-visual__stat">
          <span className="hero-visual__stat-num">12</span>
          <span className="hero-visual__stat-label">Markets</span>
        </div>
        <div className="hero-visual__stat-divider" />
        <div className="hero-visual__stat">
          <span className="hero-visual__stat-num">4x</span>
          <span className="hero-visual__stat-label">Growth</span>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default HeroVisual;
