import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create ambient music using Web Audio API
  useEffect(() => {
    // Create audio context for ambient drone
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const masterGain = audioContext.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioContext.destination);

    // Create layered ambient drones for Indian wedding atmosphere
    const createDrone = (frequency: number, gainValue: number, detune: number = 0) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;
      oscillator.detune.value = detune;
      
      filter.type = 'lowpass';
      filter.frequency.value = 800;
      filter.Q.value = 1;
      
      gain.gain.value = gainValue;
      
      oscillator.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      
      oscillator.start();
      
      // Subtle frequency modulation for organic feel
      const lfo = audioContext.createOscillator();
      const lfoGain = audioContext.createGain();
      lfo.frequency.value = 0.1 + Math.random() * 0.1;
      lfoGain.gain.value = 2;
      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      lfo.start();
      
      return { oscillator, gain, lfo };
    };

    // Create harmonious drone layers (Sa-Pa relationship in Indian classical)
    const drones = [
      createDrone(130.81, 0.15), // C3 - Sa (root)
      createDrone(196.00, 0.10), // G3 - Pa (fifth)
      createDrone(261.63, 0.08), // C4 - Sa (octave)
      createDrone(293.66, 0.05, 5), // D4 - Re
      createDrone(392.00, 0.04), // G4 - Pa
    ];

    // Create gentle shimmer
    const createShimmer = () => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      osc.type = 'triangle';
      osc.frequency.value = 523.25; // C5
      
      filter.type = 'bandpass';
      filter.frequency.value = 600;
      filter.Q.value = 5;
      
      gain.gain.value = 0;
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start();

      // Random shimmer bursts
      const shimmerInterval = setInterval(() => {
        if (masterGain.gain.value > 0) {
          const now = audioContext.currentTime;
          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.02, now + 0.5);
          gain.gain.linearRampToValueAtTime(0, now + 2);
          osc.frequency.setValueAtTime(523.25 + Math.random() * 200, now);
        }
      }, 3000 + Math.random() * 2000);

      return { osc, shimmerInterval };
    };

    const shimmer = createShimmer();

    // Store reference for control
    const audioData = {
      context: audioContext,
      masterGain,
      drones,
      shimmer,
    };

    (window as any).__weddingAudio = audioData;

    return () => {
      clearInterval(shimmer.shimmerInterval);
      drones.forEach(d => {
        d.oscillator.stop();
        d.lfo.stop();
      });
      shimmer.osc.stop();
      audioContext.close();
    };
  }, []);

  const toggleMute = async () => {
    setHasInteracted(true);
    const audioData = (window as any).__weddingAudio;
    
    if (audioData) {
      // Resume audio context if suspended (browser autoplay policy)
      if (audioData.context.state === 'suspended') {
        await audioData.context.resume();
      }

      const newMuted = !isMuted;
      setIsMuted(newMuted);

      // Smooth fade in/out
      const now = audioData.context.currentTime;
      audioData.masterGain.gain.cancelScheduledValues(now);
      audioData.masterGain.gain.setValueAtTime(audioData.masterGain.gain.value, now);
      audioData.masterGain.gain.linearRampToValueAtTime(
        newMuted ? 0 : 0.3,
        now + 0.5
      );
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <motion.button
        onClick={toggleMute}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative glass rounded-full p-4 shadow-elevated group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
      >
        {/* Pulsing ring when playing */}
        <AnimatePresence>
          {!isMuted && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/40"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          className="text-gold"
          animate={{ rotate: isMuted ? 0 : [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 whitespace-nowrap"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass rounded-lg px-3 py-2 text-sm text-foreground/80 font-body">
                {isMuted ? 'Play ambient music' : 'Mute music'}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* First-time prompt */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <motion.div 
              className="glass rounded-xl px-4 py-3 text-sm text-foreground/90 font-body shadow-soft"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-gold">♪</span> Tap to play music
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MusicPlayer;
