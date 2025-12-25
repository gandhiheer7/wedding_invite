import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import OrnamentalDivider from './OrnamentalDivider';

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden texture-grain"
    >
      {/* Warm gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-card"
        style={{ y: backgroundY }}
      />
      
      {/* Decorative corner patterns */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path d="M0 0 L0 100 Q50 50, 100 0 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 60 Q30 30, 60 0 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20 -scale-x-100">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path d="M0 0 L0 100 Q50 50, 100 0 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 60 Q30 30, 60 0 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Blessing text */}
        <motion.p
          className="font-display text-lg md:text-xl text-primary/80 mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          With the blessings of our families
        </motion.p>

        <OrnamentalDivider variant="lotus" className="mb-8" />

        {/* Main announcement */}
        <motion.h2
          className="font-display text-2xl md:text-3xl text-foreground/80 mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Request the pleasure of your company
        </motion.h2>

        <motion.p
          className="font-display text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          at the wedding celebration of
        </motion.p>

        {/* Couple names */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium gold-shimmer mb-4">
            Priya
          </h1>
          <motion.span 
            className="font-display text-2xl md:text-3xl text-primary/70 block my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            &
          </motion.span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium gold-shimmer">
            Arjun
          </h1>
        </motion.div>

        <OrnamentalDivider variant="elaborate" className="my-10" />

        {/* Date announcement */}
        <motion.div
          className="glass rounded-2xl px-8 py-6 inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <p className="font-display text-xl md:text-2xl text-foreground tracking-widest">
            February 14 – 16, 2025
          </p>
          <p className="font-body text-muted-foreground mt-2">
            Udaipur, Rajasthan
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-body text-sm tracking-wider">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
