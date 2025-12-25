import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import OrnamentalDivider from './OrnamentalDivider';

export const VenueSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-card to-background" />
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-display text-lg text-primary/70 mb-4 tracking-wide">
            Where dreams unfold
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text mb-6">
            The Venue
          </h2>
          <OrnamentalDivider variant="lotus" className="mt-8" />
        </ScrollReveal>

        {/* Venue details */}
        <ScrollReveal delay={0.2}>
          <motion.div 
            className="glass-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-gold/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-gold/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/40 rounded-br-lg" />

            <h3 className="font-display text-3xl md:text-4xl text-gold-light mb-4">
              The Oberoi Udaivilas
            </h3>
            
            <p className="font-body text-primary-foreground/80 text-lg mb-6">
              Haridasji Ki Magri, Udaipur, Rajasthan 313001
            </p>

            <OrnamentalDivider variant="simple" className="my-8" />

            <p className="font-display text-primary-foreground/90 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              Nestled on the banks of the serene Lake Pichola, where the Aravalli mountains 
              meet the sky, this heritage palace offers a setting as timeless as our love.
            </p>

            <motion.div 
              className="mt-10 inline-flex items-center gap-2 text-gold-light font-body"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>View on Map</span>
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Travel note */}
        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <p className="font-body text-muted-foreground text-lg">
            The nearest airport is Maharana Pratap Airport (UDR), Udaipur
          </p>
          <p className="font-body text-muted-foreground mt-2">
            Accommodation arrangements will be shared separately
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VenueSection;
