import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export const ClosingSection = () => {
  return (
    <section className="relative pt-0 pb-32 overflow-hidden texture-grain">
      
      {/* SEAMLESS FIX: 
          Starts with 'from-rose-50' to perfectly match the Events section bottom.
          Fades gently to 'pink-100/60' for a soft footer glow.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-rose-50 to-pink-100/60" />

      {/* Decorative mandalas (Background Animation) */}
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
          {/* OPTION 1 TEXT APPLIED HERE */}
          <p className="font-display text-lg md:text-xl text-primary/70 mb-16 tracking-wide">
            With joy in our hearts
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            We can't wait to
            <br />
            <span className="gold-text">celebrate with you</span>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClosingSection;