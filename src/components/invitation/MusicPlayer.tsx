import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // --- CONFIGURATION ---
  const SONG_URL = '/wedding_song.mp3'; // Ensure this exact name is in 'public' folder
  const START_TIME = 22; // Start at 25 seconds (Change this number to your desired second)
  // ---------------------

  useEffect(() => {
    // Create the audio object
    const audio = new Audio(SONG_URL);
    audio.loop = true;
    audio.currentTime = START_TIME; // Set the start time
    audioRef.current = audio;

    // Attempt to Auto-Play immediately
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Auto-play worked!
          setIsPlaying(true);
        })
        .catch((error) => {
          // Auto-play was blocked by browser (normal behavior).
          // We wait for user interaction to play.
          console.log("Autoplay prevented. Waiting for user interaction.", error);
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // If it was blocked initially, this play() will work because it's triggered by a click
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.button
        onClick={togglePlay}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative glass rounded-full p-4 shadow-elevated group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing ring animation - Visible only when NOT playing to encourage click */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/60"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.8, 0, 0.8],
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
          animate={{ rotate: !isPlaying ? 0 : [0, -5, 5, 0] }}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            // Show "Play" icon if muted/stopped, or VolumeX if preferred
            <VolumeX className="w-6 h-6" />
          )}
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {(isHovered || !isPlaying) && (
            <motion.div
              className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <div className="glass rounded-xl px-4 py-2 text-sm text-foreground/90 font-body shadow-soft flex items-center gap-2">
                {!isPlaying ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    Tap to play song
                  </>
                ) : (
                  'Pause music'
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default MusicPlayer;