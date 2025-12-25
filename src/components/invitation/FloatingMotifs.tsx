import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// 1. Soft Rose Petal SVG
const RosePetal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" fill="none" className={className}>
    <path 
      d="M25 45 C10 40, 5 25, 10 15 C15 5, 35 5, 40 15 C45 25, 40 40, 25 45 Z" 
      fill="currentColor" 
      opacity="0.6"
    />
    <path 
      d="M25 45 C15 35, 12 25, 15 15" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      opacity="0.4"
      fill="none"
    />
  </svg>
);

// 2. Delicate Heart SVG
const Heart = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" fill="none" className={className}>
    <path
      d="M25 45 C25 45, 5 30, 5 15 C5 7, 15 5, 20 10 L25 15 L30 10 C35 5, 45 7, 45 15 C45 30, 25 45, 25 45 Z"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
);

// 3. Sparkle/Star SVG
const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" fill="none" className={className}>
    <path
      d="M25 0 L28 22 L50 25 L28 28 L25 50 L22 28 L0 25 L22 22 Z"
      fill="currentColor"
      opacity="0.7"
    />
  </svg>
);

interface MotifProps {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  delay?: number;
  duration?: number;
}

const FloatingMotif = ({ children, initialX, initialY, delay = 0, duration = 15 }: MotifProps) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 0.6, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ 
        left: `${initialX}%`, 
        top: `${initialY}%`,
        opacity,
        y,
      }}
      transition={{ 
        duration: 2, 
        delay,
        ease: "easeOut" 
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [-10, 10, -10],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: duration + Math.random() * 5,
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

  // CHANGED z-0 TO z-10 BELOW SO IT APPEARS ABOVE THE BACKGROUND
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* --- Rose Petals (Deep Pinks) --- */}
      <FloatingMotif initialX={5} initialY={10} delay={0.2} duration={12}>
        <RosePetal className="w-8 h-8 text-rose-400" />
      </FloatingMotif>
      <FloatingMotif initialX={85} initialY={15} delay={1.5} duration={14}>
        <RosePetal className="w-6 h-6 text-pink-300" />
      </FloatingMotif>
      <FloatingMotif initialX={45} initialY={90} delay={2.0} duration={18}>
        <RosePetal className="w-10 h-10 text-rose-300/60" />
      </FloatingMotif>

      {/* --- Hearts (Soft Lavenders/Pinks) --- */}
      <FloatingMotif initialX={90} initialY={40} delay={0.5} duration={20}>
        <Heart className="w-12 h-12 text-pink-200" />
      </FloatingMotif>
      <FloatingMotif initialX={10} initialY={60} delay={1.2} duration={16}>
        <Heart className="w-8 h-8 text-purple-300/50" />
      </FloatingMotif>

      {/* --- Sparkles (Gold/White accents) --- */}
      <FloatingMotif initialX={75} initialY={25} delay={0.8} duration={8}>
        <Sparkle className="w-6 h-6 text-yellow-200/60" />
      </FloatingMotif>
      <FloatingMotif initialX={20} initialY={80} delay={2.5} duration={10}>
        <Sparkle className="w-4 h-4 text-white/40" />
      </FloatingMotif>
      <FloatingMotif initialX={60} initialY={60} delay={3} duration={12}>
        <Sparkle className="w-8 h-8 text-rose-200/30" />
      </FloatingMotif>
    </div>
  );
};

export default FloatingMotifs;