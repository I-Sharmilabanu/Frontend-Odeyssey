import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[100] bg-space-black flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Background Ambience */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-space-mars rounded-full blur-[150px] opacity-20"
      />

      <div className="relative w-full max-w-md">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white text-display font-bold text-3xl mb-8 text-center uppercase tracking-[0.2em]"
        >
          Initializing Journey
        </motion.h2>

        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-space-mars"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-4 flex justify-between text-xs tracking-widest text-white/50 font-mono">
          <span>COORDINATES: 00.32'N 349.5'E</span>
          <span className="text-white/80">{percent}%</span>
        </div>

        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-center text-[10px] text-white/30 uppercase tracking-[0.3em]"
        >
          Syncing with Mars Global Surveyor...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
