import React, { useState, useRef, useEffect } from 'react';
import { Camera, ArrowRight, Facebook, Twitter, Instagram, Menu, X, ArrowDown, LayoutGrid, Layers, Maximize } from 'lucide-react';

export default function App() {
  // State for interactions
  const [timeOfDay, setTimeOfDay] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  // Handle Dragging for the interactive timeline
  const handlePointerMove = (e) => {
    if (!isDragging.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setTimeOfDay(percentage);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    handlePointerMove(e); // Initialize position
  };

  // Smooth scroll functionality
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Calculate dynamic shadow offsets
  const shadowLength = 15 + (timeOfDay / 100) * 40;
  const shadowAngle = -10 + (timeOfDay / 100) * 30;

  return (
    <div className="bg-[#c8c0b4] min-h-screen font-sans selection:bg-[#E05353] selection:text-white overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@300;400;500;600;800&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- FULLSCREEN MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-50 bg-[#111] text-[#E8E2D7] transition-transform duration-700 ease-in-out flex flex-col p-8 md:p-16 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex justify-between items-center mb-16">
          <span className="font-serif font-bold text-xl tracking-widest text-[#E05353]">MONOLITH</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-12 h-12 rounded-full border border-[#E8E2D7] flex items-center justify-center hover:bg-[#E8E2D7] hover:text-[#111] transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 md:gap-10 mt-12">
          {['Hero', 'System', 'Philosophy'].map((item, i) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left font-serif text-5xl md:text-8xl font-bold hover:text-[#E05353] transition-colors flex items-center gap-8 group"
            >
              <span className="text-sm font-sans font-normal opacity-40 group-hover:opacity-100">0{i + 1}</span>
              {item}
            </button>
          ))}
        </nav>
      </div>


      {/* --- SECTION 1: HERO --- */}
      <section id="hero" className="min-h-screen w-full p-4 md:p-8 flex flex-col justify-center items-center relative">
        
        {/* Main Canvas Container (Framed to preserve isometric math) */}
        <div className="w-full max-w-[1400px] aspect-[4/3] md:aspect-[16/9] bg-[#E8E2D7] border-[1.5px] border-[#111] relative overflow-hidden shadow-2xl flex">
          
          {/* BACKGROUND GEOMETRY (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 60,0 45,100 0,100" fill="#E8E2D7" />
            <polygon points="60,0 100,0 100,30 51,60" fill="#D8D1C4" />
            <polygon points="51,60 100,30 100,100 45,100" fill="#DFD8CC" />
            <polygon points="68,0 80,0 80,18 63,40" fill="#2A2A2A" opacity="0.05" />
            <line x1="74" y1="0" x2="71" y2="28" stroke="#111" strokeWidth="0.1" opacity="0.3" />
            <line x1="65" y1="15" x2="80" y2="9" stroke="#111" strokeWidth="0.1" opacity="0.3" />
            <polygon points={`51,60 100,30 100,${30 + timeOfDay/2} ${51 + timeOfDay/4},100`} fill="#111" opacity="0.04" />
            <line x1="60" y1="0" x2="45" y2="100" stroke="#111" strokeWidth="0.25" />
            <line x1="51" y1="60" x2="100" y2="30" stroke="#111" strokeWidth="0.25" />
            <line x1="75" y1="0" x2="75" y2="100" stroke="#111" strokeWidth="0.05" opacity="0.2" strokeDasharray="1 1" />
          </svg>

          {/* DYNAMIC SVG CHARACTERS */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points={`72,68 ${72 + shadowLength},${68 + shadowAngle} ${74 + shadowLength},${68 + shadowAngle} 74,68`} fill="#111" opacity="0.4" className="transition-all duration-100 ease-out" />
            <path d="M72.5 60 C 72 60 71.5 60.5 71.5 61 C 71.5 61.5 72 62 72.5 62 C 73 62 73.5 61.5 73.5 61 C 73.5 60.5 73 60 72.5 60 Z M 72 62.5 L 73 62.5 L 73.5 65 L 74 68 L 73 68 L 72.5 66 L 72 68 L 71 68 L 71.5 65 Z" fill="#111" />
            <polygon points={`52,56 ${52 + shadowLength*1.2},${56 + shadowAngle*0.8} ${53 + shadowLength*1.2},${56 + shadowAngle*0.8} 53,56`} fill="#111" opacity="0.3" className="transition-all duration-100 ease-out" />
            <path d="M52 50 C 51.5 50 51 50.5 51 51 C 51 51.5 51.5 52 52 52 C 52.5 52 53 51.5 53 51 C 53 50.5 52.5 50 52 50 Z M 51.2 52 L 52.5 52.5 L 53 55 L 53 58 L 52 58 L 52 55.5 L 51 57 L 50.5 56.5 L 51.5 54 Z" fill="#111" />
          </svg>

          {/* Top Left Logo */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-3 z-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E05353] mix-blend-multiply flex-shrink-0" />
            <span className="font-serif font-bold text-sm md:text-base tracking-widest text-[#111]">MONOLITH</span>
          </div>

          {/* Top Right Menu Button */}
          <div 
            onClick={() => setIsMenuOpen(true)}
            className="absolute top-6 right-6 md:top-12 md:right-12 flex flex-col items-center gap-2 z-10 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full border border-[#111] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#111] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Menu className="w-4 h-4 text-[#111] group-hover:text-[#E8E2D7] relative z-10 transition-colors duration-300" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#111]">Menu</span>
          </div>

          {/* Social Links */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#111] hover:text-[#E05353] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#111] hover:text-[#E05353] transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#111] hover:text-[#E05353] transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>

          {/* Main Left Content Group */}
          <div className="absolute top-[25%] left-[8%] md:left-[15%] w-[40%] md:w-[25%] z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#E05353] flex items-center justify-center mb-6 relative">
                <Camera className="w-5 h-5 text-[#E8E2D7] relative z-10" />
                <div className="absolute inset-0 rounded-full border border-[#E05353] animate-ping opacity-20" />
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.1] tracking-tight mb-4">
                MASTER<br />YOUR SPACE
              </h1>

              <div className="w-8 h-[2px] bg-[#111] mb-6" />

              <p className="font-serif font-semibold italic text-[#111] text-xs md:text-sm mb-6">
                "As soon as I mapped my project, I realized I controlled time."
              </p>

              <button 
                onClick={() => scrollTo('system')}
                className="flex items-center gap-2 group text-xs md:text-sm font-bold uppercase tracking-wider text-[#111] hover:text-[#E05353] transition-colors mt-4"
              >
                <div className="w-8 h-8 rounded-full border border-[#111] group-hover:border-[#E05353] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Diagonal Text Block */}
          <div 
            className="absolute bottom-[20%] left-[30%] md:left-[45%] z-10 origin-bottom-left"
            style={{ transform: 'rotate(-31.5deg)' }}
          >
            <div className="flex flex-col">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#111] tracking-wide mb-2 whitespace-nowrap">
                SYSTEM ARCHITECTURE
              </h2>
              <div className="flex gap-4 items-start max-w-[300px]">
                <span className="text-[#E05353] font-serif text-4xl leading-none font-bold">W</span>
                <p className="text-[8px] md:text-[10px] leading-tight text-[#111] text-justify font-medium">
                  e've created a spatial ecosystem for creative development. By visualizing tasks as physical blocks in an isometric plane, your team stops managing lists and starts constructing architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Left Drag Interface */}
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 flex items-center gap-4">
            <div className="relative w-24 md:w-32 h-10 flex items-center cursor-ew-resize group"
                 ref={sliderRef}
                 onPointerDown={handlePointerDown}
            >
              <div className="absolute w-full h-[1px] bg-[#111] top-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-100 transition-opacity" />
              <div 
                className="absolute w-8 h-8 rounded-full border border-[#111] bg-[#E8E2D7] flex items-center justify-center shadow-md transition-transform"
                style={{ left: `${timeOfDay}%`, transform: `translateX(-50%) ${isDragging.current ? 'scale(0.9)' : 'scale(1)'}` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E05353]" />
              </div>
            </div>
            <span className="text-[10px] md:text-xs font-medium text-[#111] tracking-wider uppercase hidden md:block select-none">
              Drag to shift time
            </span>
          </div>
        </div>

        {/* Scroll Indicator outside the frame */}
        <div 
          onClick={() => scrollTo('system')}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-[#111] hover:text-[#E05353] transition-colors"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* --- SECTION 2: THE SYSTEM (FEATURES) --- */}
      <section id="system" className="w-full py-24 md:py-32 px-4 md:px-12 bg-[#E8E2D7] border-t-2 border-[#111]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#111] leading-none uppercase">
              Structural<br />Integrity.
            </h2>
            <p className="max-w-md text-sm text-[#111] font-medium leading-relaxed">
              Monolith replaces flat to-do lists with a spatial, architectural plane. Assign resources, define scope, and observe your project manifest in three dimensions.
            </p>
          </div>

          {/* Brutalist Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#111] bg-[#111]">
            {[
              { title: "Spatial Mapping", icon: <LayoutGrid size={32} />, desc: "Visualize dependencies as load-bearing structural blocks." },
              { title: "Layered Timelines", icon: <Layers size={32} />, desc: "Asynchronous work cycles stacked across Z-index planes." },
              { title: "Perspective Shift", icon: <Maximize size={32} />, desc: "Switch instantly between top-down data and isometric overviews." }
            ].map((feature, i) => (
              <div key={i} className="bg-[#E8E2D7] border border-[#111] p-8 md:p-12 hover:bg-[#111] hover:text-[#E8E2D7] transition-colors duration-300 group flex flex-col justify-between min-h-[300px]">
                <div className="text-[#E05353] group-hover:text-[#E05353]">
                  {feature.icon}
                </div>
                <div>
                  <div className="text-[10px] font-mono mb-4 opacity-50 group-hover:opacity-80">MODULE 0{i + 1}</div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PHILOSOPHY & FOOTER --- */}
      <section id="philosophy" className="w-full py-32 px-4 md:px-12 bg-[#111] text-[#E8E2D7]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          
          <div className="w-16 h-16 rounded-full bg-[#E05353] mix-blend-screen mb-12" />
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-12">
            "We believe tools should not just organize work, they should elevate the perspective of the worker."
          </h2>
          
          <div className="w-full h-[1px] bg-[#E8E2D7] opacity-20 mb-12" />

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <span>© 2024 Monolith Systems</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#E05353] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#E05353] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#E05353] transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 hover:text-[#E05353] transition-colors"
            >
              Back to top
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center rotate-180">
                <ArrowDown size={12} />
              </div>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
9