import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';

// Components
import Loader from './components/Loader';
import SpaceBackground from './components/SpaceBackground';
import Hero from './components/Hero';
import Brief from './components/Brief';
import Travel from './components/Travel';
import Landing from './components/Landing';
import Exploration from './components/Exploration';
import Conclusion from './components/Conclusion';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 0, label: "LAUNCH", name: "01" },
    { id: 1, label: "BRIEFING", name: "02" },
    { id: 2, label: "TRAVEL", name: "03" },
    { id: 3, label: "LANDING", name: "04" },
    { id: 4, label: "SURVEY", name: "05" },
    { id: 5, label: "FUTURE", name: "06" },
  ];

  // Manual scroll to section
  const scrollToSection = (index) => {
    // Approx section height, but window.scrollTo with actual offsets is better.
    // For simplicity, we just divide the viewport into segments.
    // Actually, we can use getElementById if we add IDs.
    const sectionElements = document.querySelectorAll('section');
    if (sectionElements[index]) {
      sectionElements[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSection = useTransform(scrollYProgress, [0, 0.16, 0.33, 0.5, 0.66, 0.83], [0, 1, 2, 3, 4, 5]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    return currentSection.on('change', (latest) => {
      setActiveIdx(Math.round(latest));
    });
  }, [currentSection]);

  return (
    <main className="relative bg-space-black min-h-screen text-white overflow-x-hidden selection:bg-space-mars selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Constant Space Background */}
          <SpaceBackground />
          
          {/* Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-space-mars origin-left z-[100]"
            style={{ scaleX }}
          />

          {/* Navigation Overlay (Sidebar) */}
          <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-[80] hidden lg:flex flex-col gap-10">
             {sections.map((sec, i) => (
               <button 
                key={sec.id} 
                onClick={() => scrollToSection(i)}
                className="group flex items-center gap-6 cursor-pointer text-left focus:outline-none"
               >
                 <div className={`h-[1px] transition-all duration-500 ${activeIdx === i ? 'w-16 bg-space-mars' : 'w-8 bg-white/10 group-hover:bg-white/40 group-hover:w-12'}`} />
                 <div className="flex flex-col gap-1">
                   <span className={`text-[9px] font-mono transition-all duration-300 tracking-widest ${activeIdx === i ? 'text-space-mars font-bold' : 'text-white/10 group-hover:text-white/40'}`}>
                    SECTION {sec.name}
                   </span>
                   <span className={`text-[10px] font-bold uppercase transition-all duration-500 tracking-[0.2em] transform ${activeIdx === i ? 'text-white opacity-100 translate-x-0' : 'text-white/0 opacity-0 -translate-x-4 group-hover:text-white/20 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                    {sec.label}
                   </span>
                 </div>
               </button>
             ))}
          </nav>

          <div className="relative z-10 w-full overflow-hidden">
            <Hero onStart={() => scrollToSection(1)} />
            <Brief />
            <Travel />
            <Landing />
            <Exploration />
            <Conclusion />
          </div>

          {/* Floating HUD status */}
          <div className="fixed bottom-8 left-8 z-[80] pointer-events-none hidden md:block">
            <div className="flex flex-col gap-2 font-mono text-[9px] tracking-widest text-white/20">
              <p>MISSION: ODYSSEY_26</p>
              <p>DEST: JEZERO_CRATER</p>
              <motion.p animate={{ opacity: [0.3, 0.4, 0.3] }} transition={{ repeat: Infinity }}>SIGNAL: STRONG_ENCRYPTED</motion.p>
            </div>
          </div>

          {/* Audio/Ambience Visualizer */}
          <div className="fixed bottom-8 right-8 z-[80]">
            <div className="glass p-3 px-4 border border-white/10 rounded-full flex gap-1 items-end h-10 group cursor-pointer hover:border-space-mars/40 transition-all">
               {[1, 2, 3, 4, 5, 6].map(i => (
                 <motion.div 
                   key={i}
                   animate={{ height: ['20%', '100%', '20%'] }}
                   transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: 'linear' }}
                   className="w-[3px] bg-space-mars/60 rounded-full"
                 />
               ))}
               <span className="hidden group-hover:block ml-4 text-[8px] font-mono text-white/40 uppercase tracking-widest whitespace-nowrap pr-2">Ambience: Active</span>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
