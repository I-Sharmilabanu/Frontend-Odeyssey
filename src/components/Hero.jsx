import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ChevronDown } from 'lucide-react';

const Hero = ({ onStart }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rocketY = useTransform(scrollY, [0, 1000], [0, -400]);
  const rocketScale = useTransform(scrollY, [0, 1000], [1, 0.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center h-screen">
      <motion.div 
        style={{ y: y1, opacity }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-space-mars/20 border border-space-mars/30 text-space-mars text-[10px] font-mono uppercase tracking-[0.4em] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-space-mars opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-space-mars"></span>
          </span>
          Incoming Transmission: Earth Command
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-display font-extrabold mb-4 tracking-tighter"
        >
          EARTH TO <span className="text-gradient-mars">MARS</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl md:text-2xl font-light tracking-[0.4em] text-white/50 mb-12 uppercase"
        >
          Mission: Odyssey 2026
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(226, 123, 88, 0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-12 py-4 rounded-full border border-white/20 glass text-white font-semibold tracking-widest hover:border-space-mars/50 transition-all duration-300 uppercase text-xs shadow-[0_0_40px_rgba(255,255,255,0.05)]"
        >
          Initiate Launch sequence
        </motion.button>
      </motion.div>


      {/* Animated Rocket */}
      <motion.div
        style={{ y: rocketY, scale: rocketScale }}
        className="absolute bottom-20 z-0 opacity-80"
      >
        <div className="relative">
          <Rocket size={120} className="text-white fill-white/20 transform rotate-45" />
          
          {/* Engine Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 0.2, repeat: Infinity }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 h-20 bg-gradient-to-t from-orange-500 to-transparent blur-lg rounded-full"
          />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
