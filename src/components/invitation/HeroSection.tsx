import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import OrnamentalDivider from './OrnamentalDivider';

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      // Professional Spacing: 85% height + 20 units of bottom padding
      className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pb-20"
    >
      {/* Background: Shades of Pink Gradient */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ scale: imageScale, opacity: imageOpacity }}
        >
          <div className="w-full h-full bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </motion.div>
      </motion.div>
      
      {/* Decorative corner patterns */}
      <div className="absolute top-0 left-0 w-32 md:w-40 h-32 md:h-40 opacity-30 z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path d="M0 0 L0 100 Q50 50, 100 0 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 60 Q30 30, 60 0 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 opacity-30 z-10 -scale-x-100">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <path d="M0 0 L0 100 Q50 50, 100 0 Z" fill="currentColor" opacity="0.3" />
          <path d="M0 0 L0 60 Q30 30, 60 0 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-24"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="font-display text-lg md:text-xl text-foreground/80 mb-6 tracking-wide drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          With the blessings of our families
        </motion.p>

        <OrnamentalDivider variant="lotus" className="mb-8" />

        {/* Refined Text */}
        <motion.h2
          className="font-display text-2xl md:text-3xl text-foreground/90 mb-3 tracking-wide drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Counting down the moments
        </motion.h2>

        <motion.p
          className="font-display text-xl md:text-2xl text-foreground/70 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          until we celebrate the union of
        </motion.p>

        {/* Couple names */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium gold-shimmer mb-4 drop-shadow-lg">
            Sakshi
          </h1>
          <motion.span 
            className="font-display text-2xl md:text-3xl text-primary block my-4 drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            &
          </motion.span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium gold-shimmer drop-shadow-lg">
            Pal
          </h1>
        </motion.div>

        <OrnamentalDivider variant="elaborate" className="my-10" />

        {/* Date & Location */}
        <motion.div
          className="glass rounded-2xl px-8 py-6 inline-block shadow-elevated"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <p className="font-display text-xl md:text-2xl text-foreground tracking-widest">
            January 25, 2026
          </p>
          <p className="font-body text-muted-foreground mt-2">
            Centre Park Ground, Mira Road (East)
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-foreground/60"
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