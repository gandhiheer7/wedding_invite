import { motion } from 'framer-motion';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'simple' | 'elaborate' | 'lotus';
}

export const OrnamentalDivider = ({ className = '', variant = 'simple' }: OrnamentalDividerProps) => {
  if (variant === 'lotus') {
    return (
      <motion.div 
        className={`flex items-center justify-center gap-4 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent flex-1 max-w-24"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <svg viewBox="0 0 60 40" className="w-12 h-8 text-gold">
          <motion.path
            d="M30 35 Q20 25, 18 15 Q24 22, 30 32"
            fill="currentColor"
            opacity="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.path
            d="M30 35 Q40 25, 42 15 Q36 22, 30 32"
            fill="currentColor"
            opacity="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.path
            d="M30 35 Q15 28, 10 20 Q22 26, 30 34"
            fill="currentColor"
            opacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.path
            d="M30 35 Q45 28, 50 20 Q38 26, 30 34"
            fill="currentColor"
            opacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
          <motion.ellipse
            cx="30"
            cy="33"
            rx="4"
            ry="2.5"
            fill="currentColor"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          />
        </svg>
        <motion.div 
          className="h-px bg-gradient-to-r from-gold via-gold to-transparent flex-1 max-w-24"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>
    );
  }

  if (variant === 'elaborate') {
    return (
      <motion.div 
        className={`flex items-center justify-center gap-3 ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-gold/60 to-gold flex-1 max-w-32"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 rotate-45 bg-gold"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
        <motion.div
          className="w-3 h-3 rotate-45 border-2 border-gold"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
        <motion.div
          className="w-2 h-2 rotate-45 bg-gold"
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        <motion.div 
          className="h-px bg-gradient-to-r from-gold via-gold/60 to-transparent flex-1 max-w-32"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>
    );
  }

  // Simple variant
  return (
    <motion.div 
      className={`flex items-center justify-center gap-4 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent to-gold/50 flex-1 max-w-20"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div 
        className="w-1.5 h-1.5 rounded-full bg-gold"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      <motion.div 
        className="h-px bg-gradient-to-r from-gold/50 to-transparent flex-1 max-w-20"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default OrnamentalDivider;
