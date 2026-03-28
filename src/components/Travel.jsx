import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, FastForward, Clock } from 'lucide-react';

const Travel = () => {
  const [speed, setSpeed] = useState(1);
  const { scrollYProgress } = useScroll();
  
  const xMovement = useTransform(scrollYProgress, [0.3, 0.6], [0, 200]);
  const rocketScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.8]);
  const distance = Math.floor(scrollYProgress.get() * 225) + 1; // 225M KM total

  return (
    <section className="relative h-[150vh] flex flex-col items-center justify-start py-32 overflow-hidden bg-space-dark/50">
      <div className="sticky top-1/4 z-10 w-full max-w-6xl px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-display font-extrabold mb-8 tracking-tighter"
            >
              LONG <span className="text-space-mars">TRANSIT</span> PHASE
            </motion.h2>
            
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-md mb-12 uppercase tracking-widest text-sm">
              Current Mission Progress: <span className="text-white font-mono">{distance}M / 225M KM</span>
            </p>

            <div className="space-y-8">
              <div className="p-6 glass border border-white/5 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 h-1 bg-space-mars w-1/3 group-hover:w-full transition-all duration-700" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 border border-white/10 rounded-lg">
                    <Clock size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold uppercase tracking-widest text-xs">Mission Clock</h4>
                </div>
                <p className="text-2xl font-mono text-white/90">214:14:55:01 T-PLUS</p>
              </div>

              {/* Speed Controller Slider */}
              <div className="p-6 glass border border-white/5 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <FastForward size={20} className="text-space-mars" />
                    <h4 className="font-semibold uppercase tracking-widest text-xs">Warp Factor</h4>
                  </div>
                  <span className="font-mono text-space-mars">{speed}X</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={speed} 
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-space-mars"
                />
              </div>
            </div>
          </div>

          <motion.div 
            style={{ x: xMovement, scale: rocketScale }}
            className="flex-1 relative flex items-center justify-center h-full min-h-[400px]"
          >
            <div className="relative group grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair">
              <Rocket size={200} className="text-white/80 fill-white/5 transform rotate-45 -translate-x-12 translate-y-12 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
              
              {/* Shielding Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-x-0 inset-y-0 -rotate-45 border-r-4 border-t-4 border-blue-400/20 rounded-full blur-xl scale-150"
              />
            </div>

            {/* Background Planets Moving */}
            <motion.div
              style={{ 
                x: useTransform(scrollYProgress, [0.3, 0.6], [100, -300]),
                scale: useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1])
              }}
              className="absolute -top-10 -right-20 w-32 h-32 rounded-full space-gradient border border-white/5"
            />
            
            <motion.div
              style={{ 
                x: useTransform(scrollYProgress, [0.3, 0.6], [-200, 400]),
                scale: useTransform(scrollYProgress, [0.3, 0.6], [0.5, 0.7])
              }}
              className="absolute bottom-20 -left-20 w-20 h-20 rounded-full bg-indigo-900 blur-sm border border-white/5"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
