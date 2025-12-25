import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: 'haldi' | 'sangeet' | 'wedding';
  mapLink: string;
  delay?: number;
}

const icons = {
  haldi: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" className="opacity-50" />
      <path d="M12 7v10M7 12h10" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" className="opacity-50" />
    </svg>
  ),
  sangeet: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  wedding: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 14c1.49-1.28 3.6-2.34 3.6-4.74A5.74 5.74 0 0 0 16.86 4c-2.27 0-4.04 1.25-4.86 3A5.73 5.73 0 0 0 7.14 4c-2.8 0-5.14 2.57-5.14 5.26c0 2.4 2.11 3.46 3.6 4.74" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="opacity-50" />
    </svg>
  ),
};

export const EventCard = ({ title, date, time, venue, description, icon, mapLink, delay = 0 }: EventCardProps) => {
  return (
    <ScrollReveal delay={delay} direction="up">
      <motion.div 
        className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group border border-white/20"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Icon */}
        <motion.div 
          className="w-12 h-12 text-pink-500 mb-6"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          {icons[icon]}
        </motion.div>

        {/* Title */}
        <h3 className="font-display text-3xl md:text-4xl text-pink-600 mb-4">
          {title}
        </h3>

        {/* Date & Time */}
        <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
          <span className="font-display text-lg font-medium">{date}</span>
          <span className="text-pink-400">•</span>
          <span className="font-display text-lg">{time}</span>
        </div>

        {/* Venue */}
        <p className="font-body text-gray-600 mb-6 leading-relaxed">
          {venue}
        </p>

        {/* Map Button */}
        <a 
          href={mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span>View Location</span>
        </a>

        {/* Description */}
        <p className="font-body text-gray-500 mt-6 leading-relaxed text-sm">
          {description}
        </p>
      </motion.div>
    </ScrollReveal>
  );
};

export default EventCard;