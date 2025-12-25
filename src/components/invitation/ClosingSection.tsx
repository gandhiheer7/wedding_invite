import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import OrnamentalDivider from './OrnamentalDivider';

export const ClosingSection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden texture-grain">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-card" />

      {/* Decorative mandalas */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.3" fill="none" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.3" fill="none" />
          {[...Array(12)].map((_, i) => (
            <line 
              key={i}
              x1="100" 
              y1="5" 
              x2="100" 
              y2="195" 
              stroke="currentColor" 
              strokeWidth="0.2"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-display text-lg md:text-xl text-primary/70 mb-6 tracking-wide">
            With hearts full of love and gratitude
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            We look forward to
            <br />
            <span className="gold-text">celebrating with you</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <OrnamentalDivider variant="lotus" className="my-10" />
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <motion.div 
            className="glass rounded-3xl p-10 md:p-12 inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-display text-2xl md:text-3xl text-foreground mb-4">
              The Sharma & Mehta Families
            </p>
            <p className="font-body text-muted-foreground">
              request the honor of your presence
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={0.7} className="mt-16">
          <blockquote className="font-display text-xl md:text-2xl text-foreground/70 italic max-w-2xl mx-auto leading-relaxed">
            "Two souls with but a single thought,
            <br />
            two hearts that beat as one."
          </blockquote>
          <p className="font-body text-muted-foreground mt-4 text-sm tracking-wider">
            — John Keats
          </p>
        </ScrollReveal>

        {/* Decorative lotus at bottom */}
        <ScrollReveal delay={0.9} className="mt-20">
          <motion.div
            className="inline-block"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <svg viewBox="0 0 80 50" className="w-20 h-12 text-gold opacity-60">
              <path d="M40 45 Q25 32, 22 18 Q30 28, 40 42" fill="currentColor" />
              <path d="M40 45 Q55 32, 58 18 Q50 28, 40 42" fill="currentColor" />
              <path d="M40 45 Q18 38, 12 28 Q28 36, 40 44" fill="currentColor" opacity="0.7" />
              <path d="M40 45 Q62 38, 68 28 Q52 36, 40 44" fill="currentColor" opacity="0.7" />
              <path d="M40 45 Q12 42, 5 36 Q25 42, 40 45" fill="currentColor" opacity="0.5" />
              <path d="M40 45 Q68 42, 75 36 Q55 42, 40 45" fill="currentColor" opacity="0.5" />
              <ellipse cx="40" cy="43" rx="5" ry="3" fill="currentColor" />
            </svg>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClosingSection;
