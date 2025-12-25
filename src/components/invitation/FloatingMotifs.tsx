import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// Peacock feather SVG path
const PeacockFeather = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 120" fill="none" className={className}>
    <ellipse cx="30" cy="25" rx="18" ry="22" fill="url(#featherGradient)" opacity="0.8" />
    <ellipse cx="30" cy="25" rx="12" ry="15" fill="url(#featherInner)" />
    <ellipse cx="30" cy="22" rx="6" ry="8" fill="hsl(175 45% 25%)" />
    <ellipse cx="30" cy="20" rx="3" ry="4" fill="hsl(42 80% 50%)" />
    <path d="M30 47 Q28 80, 30 115 Q32 80, 30 47" stroke="hsl(160 40% 30%)" strokeWidth="2" fill="none" />
    <defs>
      <radialGradient id="featherGradient" cx="50%" cy="30%">
        <stop offset="0%" stopColor="hsl(160 50% 35%)" />
        <stop offset="100%" stopColor="hsl(175 45% 25%)" />
      </radialGradient>
      <radialGradient id="featherInner" cx="50%" cy="30%">
        <stop offset="0%" stopColor="hsl(200 60% 50%)" />
        <stop offset="100%" stopColor="hsl(175 55% 35%)" />
      </radialGradient>
    </defs>
  </svg>
);

// Lotus flower SVG
const Lotus = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 60" fill="none" className={className}>
    <ellipse cx="40" cy="50" rx="8" ry="4" fill="hsl(350 45% 30%)" opacity="0.6" />
    <path d="M40 50 Q30 35, 25 20 Q32 30, 40 45" fill="hsl(350 45% 40%)" opacity="0.8" />
    <path d="M40 50 Q50 35, 55 20 Q48 30, 40 45" fill="hsl(350 45% 40%)" opacity="0.8" />
    <path d="M40 50 Q25 40, 15 30 Q28 38, 40 48" fill="hsl(350 50% 50%)" opacity="0.7" />
    <path d="M40 50 Q55 40, 65 30 Q52 38, 40 48" fill="hsl(350 50% 50%)" opacity="0.7" />
    <path d="M40 50 Q20 45, 10 40 Q25 45, 40 50" fill="hsl(345 55% 55%)" opacity="0.6" />
    <path d="M40 50 Q60 45, 70 40 Q55 45, 40 50" fill="hsl(345 55% 55%)" opacity="0.6" />
    <ellipse cx="40" cy="48" rx="5" ry="3" fill="hsl(42 80% 55%)" opacity="0.9" />
  </svg>
);

// Paisley motif
const Paisley = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 60" fill="none" className={className}>
    <path 
      d="M20 5 Q35 15, 35 35 Q35 55, 20 55 Q10 55, 8 40 Q6 25, 20 5" 
      fill="none" 
      stroke="hsl(42 80% 50%)" 
      strokeWidth="1.5"
      opacity="0.7"
    />
    <path 
      d="M20 12 Q28 18, 28 32 Q28 46, 20 48 Q14 48, 13 36 Q12 24, 20 12" 
      fill="hsl(42 70% 55%)" 
      opacity="0.3"
    />
    <circle cx="20" cy="22" r="3" fill="hsl(350 45% 35%)" opacity="0.6" />
    <circle cx="18" cy="32" r="2" fill="hsl(350 45% 35%)" opacity="0.5" />
    <circle cx="20" cy="40" r="1.5" fill="hsl(350 45% 35%)" opacity="0.4" />
  </svg>
);

interface MotifProps {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  delay?: number;
}

const FloatingMotif = ({ children, initialX, initialY, delay = 0 }: MotifProps) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.5, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ 
        left: `${initialX}%`, 
        top: `${initialY}%`,
        opacity,
        y,
      }}
      transition={{ 
        duration: 1.5, 
        delay,
        ease: "easeOut" 
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{ 
          duration: 6 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const FloatingMotifs = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Peacock feathers */}
      <FloatingMotif initialX={5} initialY={15} delay={0.2}>
        <PeacockFeather className="w-12 h-24 opacity-60" />
      </FloatingMotif>
      <FloatingMotif initialX={90} initialY={20} delay={0.5}>
        <PeacockFeather className="w-10 h-20 opacity-50 -scale-x-100" />
      </FloatingMotif>
      
      {/* Lotus flowers */}
      <FloatingMotif initialX={85} initialY={60} delay={0.8}>
        <Lotus className="w-16 h-12 opacity-50" />
      </FloatingMotif>
      <FloatingMotif initialX={8} initialY={70} delay={1}>
        <Lotus className="w-14 h-10 opacity-40" />
      </FloatingMotif>
      
      {/* Paisley motifs */}
      <FloatingMotif initialX={92} initialY={40} delay={0.3}>
        <Paisley className="w-8 h-12 opacity-40" />
      </FloatingMotif>
      <FloatingMotif initialX={3} initialY={45} delay={0.6}>
        <Paisley className="w-10 h-14 opacity-35 -scale-x-100" />
      </FloatingMotif>
    </div>
  );
};

export default FloatingMotifs;
