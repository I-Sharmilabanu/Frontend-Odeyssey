import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Target, Navigation, Box } from 'lucide-react';

const Landing = () => {
  const [deployed, setDeployed] = useState(false);

  return (
    <section className="relative h-screen bg-space-dark/80 flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Background Mars Surface (Conceptual) */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-orange-900 to-transparent blur-3xl opacity-30"
      />

      <div className="max-w-4xl w-full z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-500/20 glass text-xs font-mono text-orange-400 uppercase tracking-widest"
        >
          <Target size={14} className="animate-pulse" />
          Landing Site: Jezero Crater
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter"
        >
          THE SKY <span className="text-space-mars">CRANE</span>
        </motion.h2>

        <div className="relative w-full max-w-lg mb-20 flex justify-center">
          {/* Landing Craft */}
          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 3, delay: 1, type: "spring" }}
            className="relative"
          >
            <div className="p-8 glass rounded-3xl border border-white/5 relative z-10">
              <Rocket size={120} className="text-white fill-white/10 transform rotate-180" />
            </div>
            
            {/* Deploying Rover Animation */}
            <AnimatePresence>
              {deployed && (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 150, opacity: 1 }}
                  exit={{ y: 0, opacity: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 p-4 glass rounded-xl border border-orange-400/20 flex flex-col items-center"
                >
                  <Box size={40} className="text-orange-400" />
                  <span className="text-[10px] mt-2 font-mono text-orange-400 uppercase tracking-widest">Rover-1</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl px-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDeployed(!deployed)}
            className="col-span-1 md:col-span-3 px-8 py-5 rounded-2xl border-2 border-orange-500/30 glass text-orange-400 font-bold tracking-widest hover:border-orange-400/80 transition-all duration-300 uppercase shadow-[0_0_30px_rgba(226,123,88,0.1)] hover:shadow-[0_0_40px_rgba(226,123,88,0.2)]"
          >
            {deployed ? "Retract Rover" : "Deploy Mars Rover Alpha"}
          </motion.button>
          
          <div className="md:col-span-1 flex items-center justify-center gap-4 p-4 border border-white/5 glass rounded-xl text-white/40 text-xs font-mono uppercase tracking-widest">
            <Navigation size={14} />
            ALT: 0.4KM
          </div>
          <div className="md:col-span-1 flex items-center justify-center gap-4 p-4 border border-white/5 glass rounded-xl text-white/40 text-xs font-mono uppercase tracking-widest">
            <Rocket size={14} />
            THRUST: 98%
          </div>
          <div className="md:col-span-1 flex items-center justify-center gap-4 p-4 border border-white/5 glass rounded-xl text-white/40 text-xs font-mono uppercase tracking-widest">
            <Target size={14} />
            LOCK: CONFIRMED
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
