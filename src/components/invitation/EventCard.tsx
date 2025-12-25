import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: 'mehendi' | 'sangeet' | 'wedding' | 'reception';
  delay?: number;
}

const icons = {
  mehendi: (
    <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M24 8 Q32 16, 32 24 Q32 32, 24 40 Q16 32, 16 24 Q16 16, 24 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M18 24 Q24 18, 30 24" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M18 28 Q24 22, 30 28" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  sangeet: (
    <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
      <ellipse cx="30" cy="32" rx="10" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M40 32 L40 12 L42 8 L42 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M42 12 L45 10" stroke="currentColor" strokeWidth="1" />
      <path d="M42 14 L45 13" stroke="currentColor" strokeWidth="1" />
      <path d="M10 18 Q14 24, 10 30" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M14 16 Q18 24, 14 32" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),
  wedding: (
    <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
      <path d="M24 8 L28 20 L40 20 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 L20 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  reception: (
    <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
      <ellipse cx="24" cy="36" rx="16" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 36 L12 20 Q12 12, 24 12 Q36 12, 36 20 L36 36" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 12 L24 6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="4" r="2" fill="currentColor" opacity="0.6" />
      <path d="M18 24 Q24 20, 30 24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
};

export const EventCard = ({ title, date, time, venue, description, icon, delay = 0 }: EventCardProps) => {
  return (
    <ScrollReveal delay={delay} direction="up">
      <motion.div 
        className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Decorative background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
          <div className="text-gold transform translate-x-8 -translate-y-8">
            {icons[icon]}
          </div>
        </div>

        {/* Icon */}
        <motion.div 
          className="w-16 h-16 text-gold mb-6"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {icons[icon]}
        </motion.div>

        {/* Title */}
        <h3 className="font-display text-3xl md:text-4xl gold-text mb-4">
          {title}
        </h3>

        {/* Date & Time */}
        <div className="flex flex-wrap gap-4 mb-4 text-foreground/80">
          <span className="font-display text-lg">{date}</span>
          <span className="text-gold">•</span>
          <span className="font-display text-lg">{time}</span>
        </div>

        {/* Venue */}
        <p className="font-body text-muted-foreground mb-4">
          {venue}
        </p>

        {/* Description */}
        <p className="font-body text-foreground/70 leading-relaxed">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
      </motion.div>
    </ScrollReveal>
  );
};

export default EventCard;
