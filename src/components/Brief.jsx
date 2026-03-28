import React from 'react';
import { motion } from 'framer-motion';

const Brief = () => {
  return (
    <section className="relative flex items-center justify-center py-32 px-4 bg-grad-space overflow-hidden">
      <div className="max-w-4xl text-left z-10 w-full px-4">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-space-mars uppercase tracking-widest font-bold text-sm mb-4"
        >
          [Mission Briefing]
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-display font-bold leading-tight mb-12 text-white/90"
        >
          The Journey to the <br />
          <span className="text-white italic">Red Frontier</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-white/10 glass rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-white/10 group-hover:text-white/30 transition-colors">01</div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Purpose</h3>
            <p className="text-white/60 leading-relaxed font-light">
              We stand on the precipice of history. Odyssey 2026 is no longer a dream; it is the 
              next logical step for humanity. Our goal is to establish the first sustainable 
              outpost on another world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="p-8 border border-white/10 glass rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-white/10 group-hover:text-white/30 transition-colors">02</div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
            <p className="text-white/60 leading-relaxed font-light">
              225 million kilometers. A journey through the harsh vacuum of space, radiation belts, 
              and the psychological toll of isolation. Survival is the only objective.
            </p>
          </motion.div>
        </div>

        {/* Floating UI Element */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-20 flex justify-center"
        >
          <div className="px-6 py-2 rounded-full border border-white/10 glass text-xs font-mono text-white/40 uppercase tracking-[0.3em]">
            Status: Data Syncing... [OK]
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brief;
