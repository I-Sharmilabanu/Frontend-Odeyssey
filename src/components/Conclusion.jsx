import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveUpRight, CheckCircle, Award, X } from 'lucide-react';

const Conclusion = () => {
  const [isPioneer, setIsPioneer] = useState(false);

  return (
    <section className="relative min-h-[150vh] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Starscape */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 3 }}
        className="absolute inset-x-0 inset-y-0 bg-[radial-gradient(circle_at_center,rgba(45,27,78,0.3)_0%,transparent_70%)]"
      />

      <div className="max-w-4xl w-full text-center px-8 z-10 sticky top-10 md:top-1/2 md:-translate-y-1/2">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-display font-black tracking-tighter mb-12 text-white/90"
        >
          HUMANITY'S <br />
          <span className="text-space-mars">NEW HOME</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-20 max-w-2xl mx-auto uppercase tracking-widest"
        >
          A multi-planetary future is not just a dream of the 
          curious. It is our species' ultimate destiny.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPioneer(true)}
            className="group px-12 py-5 rounded-full glass border border-orange-500/20 text-orange-400 font-bold uppercase tracking-widest text-sm flex items-center gap-4 hover:border-orange-500/80 transition-all shadow-[0_0_30px_rgba(226,123,88,0.1)] hover:shadow-[0_0_50px_rgba(226,123,88,0.3)]"
          >
            Become a Pioneer
            <MoveUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
          
          <div className="p-4 flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/20">Next Window</span>
            <span className="text-lg font-bold uppercase tracking-[0.2em] text-white/80">
              Autumn 2028
            </span>
          </div>
        </motion.div>

        {/* Closing Status */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-32 space-y-4"
        >
          <div className="flex items-center justify-center gap-4 text-white/10 text-xs font-mono tracking-widest uppercase">
            <span>Protocol: Alpha-7</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>ID: Odyssey-1</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Region: Terraformed Zona</span>
          </div>
          <p className="text-[10px] text-white/5 uppercase tracking-[0.5em] font-light">
            END TRANSMISSION.
          </p>
        </motion.div>
      </div>

      {/* Pioneer Modal */}
      <AnimatePresence>
        {isPioneer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-8 backdrop-blur-3xl bg-black/90"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              className="max-w-md w-full glass p-12 border border-orange-500/30 rounded-[3rem] text-center relative overflow-hidden"
            >
              <button 
                onClick={() => setIsPioneer(false)} 
                className="absolute top-8 right-8 text-white/20 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="flex justify-center mb-8 text-orange-500 bg-orange-500/10 w-24 h-24 mx-auto rounded-full items-center shadow-[0_0_50px_rgba(226,123,88,0.2)]">
                <Award size={48} />
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tighter uppercase">
                Application Received
              </h3>
              
              <div className="flex items-center justify-center gap-2 text-orange-400 font-mono text-[10px] mb-8 uppercase tracking-[0.3em]">
                <CheckCircle size={14} />
                Identity Logged
              </div>

              <p className="text-white/60 leading-relaxed font-light mb-8">
                Your credentials have been uploaded to the Mars Colonization Registry.
                You are now candidate <strong>#OD-2026-X7</strong>. Look for mission details in your terminal.
              </p>

              <button 
                onClick={() => setIsPioneer(false)}
                className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
              >
                Return to Mission
              </button>

              {/* Decorative Hologram Lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Final Fade out */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-20"
      />
    </section>
  );
};

export default Conclusion;
