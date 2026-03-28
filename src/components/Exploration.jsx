import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Map, Thermometer, Wind, Globe, Camera, Info, X } from 'lucide-react';

const MarsFactCard = ({ icon: Icon, title, value, detail, longDetail }) => {
  const [flipped, setFlipped] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <motion.div 
        onClick={() => setFlipped(!flipped)}
        className="relative w-full h-80 perspective-1000 cursor-pointer group"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-full h-full transform-style-3d duration-500"
        >
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 glass border border-white/5 rounded-3xl group-hover:border-space-mars/30 transition-colors bg-white/[0.02]">
            <div className="mb-6 p-4 rounded-2xl bg-space-mars/10 text-space-mars shadow-[0_0_20px_rgba(226,123,88,0.1)]">
              <Icon size={32} />
            </div>
            <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] mb-2 font-mono">{title}</h4>
            <p className="text-3xl font-display font-bold text-white tracking-tight">{value}</p>
            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] uppercase tracking-widest text-space-mars font-bold">Details Click to reveal</span>
            </div>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 glass border border-space-mars/40 rounded-3xl bg-space-mars/5 backdrop-blur-xl gap-4">
            <p className="text-white/80 leading-relaxed text-sm text-center font-light italic">
              "{detail}"
            </p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowMore(true);
              }}
              className="mt-4 px-4 py-2 rounded-full border border-space-mars/30 text-[10px] font-mono text-space-mars uppercase tracking-widest hover:bg-space-mars hover:text-white transition-all"
            >
              Analyze Further
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12 backdrop-blur-2xl bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-2xl w-full glass p-8 md:p-12 border border-white/10 rounded-[2rem] relative"
            >
              <button onClick={() => setShowMore(false)} className="absolute top-6 right-6 p-2 text-white/40 hover:text-white">
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-space-mars/10 text-space-mars">
                  <Icon size={40} />
                </div>
                <div>
                  <h4 className="text-space-mars uppercase tracking-[0.3em] text-xs font-bold mb-1">Scientific Data Log</h4>
                  <p className="text-3xl font-display font-bold text-white uppercase tracking-tighter">{title}</p>
                </div>
              </div>

              <div className="space-y-6 text-white/70 leading-relaxed font-light text-lg">
                 {longDetail.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase opacity-30">
                <span>ENCRYPTED_ID: MARS-013-X</span>
                <span>SYSTEM: READY</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Exploration = () => {
  const [isNight, setIsNight] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const facts = [
    { 
      icon: Thermometer, 
      title: "Atmosphere", 
      value: "CO2 Dominant", 
      detail: "The atmosphere of Mars is less than 1% of Earth's and composed of 95% carbon dioxide.",
      longDetail: "Scientific consensus suggests that Mars once had a much thicker atmosphere and liquid water. \nToday, the low pressure means water would boil instantly. The red color comes from iron oxide, or rust, on its surface."
    },
    { 
      icon: Wind, 
      title: "Dust Storms", 
      value: "Global Reach", 
      detail: "Mars has the largest dust storms in the solar system, occasionally covering the entire planet for months.",
      longDetail: "These storms are powered by solar heating of the Martian atmosphere. \nThe dust is extremely fine, like cigarette smoke, and can clog machinery and block solar panels for the mission duration."
    },
    { 
      icon: Globe, 
      title: "Gravity", 
      value: "0.38G", 
      detail: "Gravity is only about 38% of Earth's, which will have significant long-term effects on human physiology.",
      longDetail: "In 0.38G, you can jump three times higher than on Earth. \nHowever, extended stays will require artificial gravity or specialized exercises to prevent bone density loss and muscle atrophy."
    },
    { 
      icon: Map, 
      title: "Valleys", 
      value: "Valles Marineris", 
      detail: "A canyon system 4,000 km long, 200 km wide and up to 7 km deep—Earth's Grand Canyon is dwarfed.",
      longDetail: "It is one of the largest canyons in the solar system. \nIf it were on Earth, it would stretch across the entire United States. It was likely formed by tectonic cracks when the Martian crust thickened."
    },
  ];

  return (
    <section className={`relative min-h-screen transition-all duration-1000 overflow-hidden ${isNight ? 'bg-[#030305]' : 'bg-[#0f0a0a]'}`}>
      <div className="max-w-7xl mx-auto w-full px-8 relative z-10 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-20 gap-8">
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-space-mars uppercase tracking-[0.3em] font-bold text-xs mb-4"
            >
              System Online: Surface Analytics
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter"
            >
              PLANETARY <span className="text-white">SURVEY</span>
            </motion.h2>
          </div>

          <div className="flex gap-4">
            {/* Gallery Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGallery(true)}
              className="flex items-center gap-4 px-6 py-4 glass border border-white/5 rounded-2xl hover:border-white/20 transition-all font-mono text-[10px] uppercase tracking-widest"
            >
              <Camera size={18} className="text-space-mars" />
              Scan Terrain
            </motion.button>

            {/* Day/Night Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNight(!isNight)}
              className="flex items-center gap-6 p-2 pr-8 glass border border-white/5 rounded-full hover:border-white/20 transition-all group"
            >
              <div className={`p-4 rounded-full transition-all duration-500 ${isNight ? 'bg-indigo-900' : 'bg-orange-500'}`}>
                {isNight ? <Moon size={24} className="text-white" /> : <Sun size={24} className="text-white" />}
              </div>
              <div className="hidden sm:flex flex-col items-start gap-1">
                <span className="text-[8px] uppercase font-mono tracking-widest text-white/40">Visualizer</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {isNight ? 'Night Scan' : 'Day Scan'}
                </span>
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                alert("SYSTEM: Drone Ingenuity-2 is now scanning the Jezero Crater sector.");
              }}
              className="flex items-center gap-4 px-6 py-4 glass border border-white/5 rounded-2xl hover:border-space-mars/20 transition-all font-mono text-[10px] uppercase tracking-widest text-space-mars"
            >
              <Wind size={18} />
              Deploy Drone
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-20">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MarsFactCard {...fact} />
            </motion.div>
          ))}
        </div>

        {/* Visualizer Image Display */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] group"
        >
          <img 
            src={isNight ? "/colony.png" : "/terrain.png"} 
            alt="Mars View"
            className="w-full aspect-video md:aspect-[21/9] object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black to-transparent flex flex-col items-start text-left">
             <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-space-mars/20 text-space-mars text-[10px] font-mono uppercase tracking-[0.4em] mb-4">
                {isNight ? "Base-01 Active" : "Jezero Sector Alpha"}
             </div>
             <p className="text-white/60 font-light max-w-xl text-lg uppercase tracking-tight">
               Visualizing high-resolution topographical data from the Mars Reconnaissance Orbiter.
             </p>
          </div>
          
          <div className="absolute top-8 right-8 pointer-events-none opacity-40">
             <div className="w-12 h-12 border-t-2 border-r-2 border-white/20" />
          </div>
          <div className="absolute bottom-8 left-8 pointer-events-none opacity-40">
             <div className="w-12 h-12 border-b-2 border-l-2 border-white/20" />
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-8 backdrop-blur-3xl bg-black/95"
          >
            <button onClick={() => setShowGallery(false)} className="absolute top-8 right-8 p-4 text-white glass rounded-full z-20">
              <X size={32} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-12 left-1/2 -translate-x-1/2 text-center"
            >
              <h3 className="text-space-mars uppercase tracking-[0.5em] text-sm font-black mb-2">Planetary Scan Gallery</h3>
              <p className="text-white/20 font-mono text-[8px] uppercase tracking-widest">Sector: Jezero-01 | Data: Panoramic</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
              <motion.div initial={{ y: 50 }} animate={{ y: 0 }} className="space-y-4">
                <img src="/terrain.png" className="rounded-3xl border border-white/10 w-full min-h-[200px] bg-white/5" alt="Mars Terrain Surface" />
                <p className="font-mono text-[10px] uppercase text-white/40 text-center tracking-widest">Surface Scan / 08.2026</p>
              </motion.div>
              <motion.div initial={{ y: 50 }} animate={{ y: 0, transition: { delay: 0.1 } }} className="space-y-4">
                <img src="/colony.png" className="rounded-3xl border border-white/10 w-full min-h-[200px] bg-white/5" alt="Mars Colony Night Scape" />
                <p className="font-mono text-[10px] uppercase text-white/40 text-center tracking-widest">Colony Phase 1 / Night Cycle</p>
              </motion.div>
            </div>


            {/* Added Mission Data */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4"
            >
               {[
                 { label: "Wind Velocity", val: "12 m/s" },
                 { label: "Radiation Level", val: "Lo-Risk" },
                 { label: "Humidity", val: "0.03%" },
                 { label: "Signal Latency", val: "14m 22s" }
               ].map((item, i) => (
                 <div key={i} className="p-4 glass rounded-xl border border-white/5 text-center">
                    <p className="text-[10px] text-white/30 uppercase font-mono mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-space-mars">{item.val}</p>
                 </div>
               ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Exploration;
