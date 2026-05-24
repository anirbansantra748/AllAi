import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Shield, 
  Cpu, 
  Layers, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ChevronRight, 
  Info, 
  Sparkles, 
  Share2, 
  Sliders, 
  ArrowLeft, 
  ArrowRight, 
  Menu, 
  X, 
  SlidersHorizontal,
  Download,
  Hammer,
  Eye,
  CheckCircle,
  Gem
} from 'lucide-react';

// --- AUDIO SYNTHESIS UTILITY (Organic Metallic Sounds) ---
const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    if (type === 'click') {
      // High-pitched metallic click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } else if (type === 'slide') {
      // Shimmering brass slide
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(440, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);
      
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1200, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      
      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.31);
      osc2.stop(ctx.currentTime + 0.31);
    } else if (type === 'wind') {
      // Mechanical spring wind sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, ctx.currentTime);
      // Create quick stepping vibrations to mimic gears
      for (let i = 0; i < 6; i++) {
        osc.frequency.setValueAtTime(80 + i * 25, ctx.currentTime + i * 0.03);
      }
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.19);
    }
  } catch (e) {
    // Audio Context blocked or unsupported
  }
};

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedSpecimen, setSelectedSpecimen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [activeTab, setActiveTab] = useState('anatomy');

  // Interactive Assembler State
  const [customMetal, setCustomMetal] = useState('gold'); // gold, bronze, obsidian
  const [customWings, setCustomWings] = useState('filigree'); // filigree, solid, clockwork
  const [customCore, setCustomCore] = useState('ruby'); // ruby, sapphire, emerald
  const [isAssembling, setIsAssembling] = useState(false);

  // Parallax mouse effect for the Hero element
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 45;
    const y = (clientY - window.innerHeight / 2) / 45;
    setParallaxOffset({ x, y });
  };

  useEffect(() => {
    // Inject fonts into document
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link1);
  }, []);

  const triggerSound = (type) => {
    if (soundEnabled) {
      playSound(type);
    }
  };

  const nextSlide = () => {
    triggerSound('slide');
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    triggerSound('slide');
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    triggerSound('wind');
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setSelectedSpecimen(null);
      setInquiryName("");
    }, 4000);
  };

  const triggerAssembly = () => {
    triggerSound('wind');
    setIsAssembling(true);
    setTimeout(() => {
      setIsAssembling(false);
      triggerSound('click');
    }, 1200);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#0d070b] text-[#f7f3eb] font-sans antialiased overflow-x-hidden selection:bg-[#c4a265] selection:text-[#0d070b] relative"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 25%, #2a111f 0%, #11070d 60%, #060205 100%)`
      }}
    >
      {/* Golden Ambient Particle Glows */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[45vw] h-[45vw] bg-[#611631]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* --- PREMIUM FIXED NAV BAR --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#c4a265]/10 px-6 lg:px-16 py-4 flex justify-between items-center bg-[#0d070b]/60 transition-all duration-300">
        {/* Left Side Links */}
        <div className="hidden md:flex gap-8 text-xs tracking-[0.25em] text-[#c4a265]/70 uppercase font-medium">
          <a href="#exhibits" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">Exhibits</a>
          <a href="#craftsmanship" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">The Craft</a>
          <a href="#assembler" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">Atelier</a>
          <a href="#vault" onClick={() => triggerSound('click')} className="hover:text-white transition-colors py-1">Inquire</a>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center select-none cursor-pointer" onClick={() => { triggerSound('wind'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <span className="font-serif text-3xl font-extrabold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-b from-[#f3e9d4] via-[#c4a265] to-[#8d6935]">
            AK
          </span>
          <span className="text-[7px] tracking-[0.6em] text-[#c4a265]/60 -mt-1 font-sans font-bold uppercase">
            HANDMADE METALWORK
          </span>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6">
          {/* Sound Toggle */}
          <button 
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              if(!soundEnabled) setTimeout(() => playSound('click'), 100);
            }}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
              soundEnabled 
                ? 'bg-[#c4a265]/10 border-[#c4a265] text-[#c4a265] shadow-[0_0_15px_rgba(196,162,101,0.2)]' 
                : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
            }`}
            title="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Social Links / Call to Action */}
          <div className="hidden lg:flex items-center gap-6 text-xs tracking-widest text-[#c4a265]/80 uppercase">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <span className="w-1.5 h-1.5 bg-[#c4a265]/40 rounded-full"></span>
            <a href="#vault" className="px-5 py-2 border border-[#c4a265]/30 bg-[#c4a265]/5 hover:bg-[#c4a265]/15 hover:border-[#c4a265] text-[#c4a265] rounded-sm transition-all duration-300 font-medium tracking-widest">
              COLLECTION
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => { triggerSound('click'); setMobileMenuOpen(!mobileMenuOpen); }}
            className="md:hidden text-[#c4a265] p-1.5 hover:bg-[#c4a265]/5 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0d070b]/98 z-40 flex flex-col justify-center items-center gap-8 text-center animate-fade-in">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-[#c4a265]"
          >
            <X className="w-8 h-8" />
          </button>
          <a 
            href="#exhibits" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            Exhibits
          </a>
          <a 
            href="#craftsmanship" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            The Craftsmanship
          </a>
          <a 
            href="#assembler" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            Interactive Atelier
          </a>
          <a 
            href="#vault" 
            onClick={() => { setMobileMenuOpen(false); triggerSound('click'); }}
            className="font-serif text-3xl text-white hover:text-[#c4a265] transition-colors"
          >
            The Vault
          </a>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c4a265]/30 to-transparent my-4"></div>
          <p className="text-xs tracking-[0.3em] text-[#c4a265]/60 uppercase">AK Handmade Metalwork</p>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="exhibits" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 lg:px-16 py-8 overflow-hidden">
        {/* Subtle Luxury Outer Frame */}
        <div className="absolute inset-8 lg:inset-16 border border-[#c4a265]/5 pointer-events-none rounded-sm hidden sm:block" />
        
        {/* Floating background texts */}
        <div className="absolute top-12 left-12 lg:left-24 text-[10px] tracking-[0.4em] text-[#c4a265]/40 uppercase hidden lg:block select-none font-medium">
          PICTURE SERIES // 021
        </div>
        <div className="absolute bottom-12 right-12 lg:right-24 text-[10px] tracking-[0.4em] text-[#c4a265]/40 uppercase text-right hidden lg:block select-none font-medium">
          HANDMADE BRASS & STEEL // PARIS, FR
        </div>

        {/* MAIN VISUAL CLUSTER */}
        <div className="w-full max-w-6xl flex flex-col items-center justify-center relative">
          
          {/* Back/Mid Layer: Giant Luxury Serif "INSECTS" Title */}
          <div className="select-none text-center pointer-events-none relative z-10 w-full">
            <h1 className="font-serif text-[15vw] md:text-[14vw] lg:text-[13vw] font-normal leading-none tracking-[0.05em] text-[#f7f3eb] mix-blend-difference drop-shadow-2xl">
              {SLIDES[activeSlide].title}
            </h1>
          </div>

          {/* Core Interactive Insect rendering with 3D Parallax */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[35vw] h-[400px] z-20 flex justify-center items-center pointer-events-none transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(calc(-50% + ${parallaxOffset.x}px), calc(-50% + ${parallaxOffset.y}px), 0px) rotateX(${-parallaxOffset.y * 0.8}deg) rotateY(${parallaxOffset.x * 0.8}deg)`,
            }}
          >
            {/* Specimen Render */}
            <div className="w-full h-full relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] animate-float">
              {SLIDES[activeSlide].svgComponent}

              {/* Holographic Glowing Base Ring */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 bg-[#c4a265]/5 rounded-full blur-[2px] border border-[#c4a265]/10 transform -rotate-x-12 flex items-center justify-center">
                <span className="text-[6px] tracking-[0.4em] text-[#c4a265]/40 uppercase font-semibold">ROTATION MATRIX ENABLED</span>
              </div>
            </div>
          </div>

          {/* Subtexts / Specifications flanking the center */}
          <div className="w-full flex flex-col md:flex-row justify-between items-end mt-12 md:mt-24 z-30 relative px-4 sm:px-12 gap-8 md:gap-0">
            {/* Left side details */}
            <div className="max-w-xs text-left">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#c4a265] uppercase block mb-1">
                // SPECIMEN DESCRIPTION
              </span>
              <p className="text-sm font-light text-zinc-300 leading-relaxed font-sans font-serif">
                {SLIDES[activeSlide].desc}
              </p>
              <div className="flex gap-4 mt-4">
                <span className="text-xs bg-[#c4a265]/10 text-[#c4a265] px-2.5 py-1 rounded-sm border border-[#c4a265]/20 uppercase tracking-widest font-mono">
                  {SLIDES[activeSlide].stats.parts} Parts
                </span>
                <span className="text-xs bg-zinc-800/60 text-zinc-300 px-2.5 py-1 rounded-sm border border-zinc-700/30 uppercase tracking-widest font-mono">
                  {SLIDES[activeSlide].stats.hours} Hrs
                </span>
              </div>
            </div>

            {/* Right side technical breakdown */}
            <div className="max-w-xs text-left md:text-right">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-[#c4a265] uppercase block mb-1">
                // ARTISANAL PROFILE
              </span>
              <p className="text-sm font-mono text-zinc-400 tracking-wider">
                Materials: {SLIDES[activeSlide].stats.metals}
              </p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">
                Estimated Value: {SLIDES[activeSlide].stats.value}
              </p>
              <div className="mt-4 md:justify-end flex">
                <button 
                  onClick={() => { triggerSound('wind'); setSelectedSpecimen(SLIDES[activeSlide]); }}
                  className="group flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-white hover:text-[#c4a265] transition-colors"
                >
                  Acquire Specimen
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#c4a265]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE NAVIGATION CONTROLS */}
        <div className="absolute bottom-8 left-0 right-0 px-6 lg:px-16 flex justify-between items-center z-30">
          {/* Page Counter */}
          <div className="text-xs tracking-[0.3em] font-mono text-[#c4a265]">
            <span className="text-white font-medium">0{activeSlide + 1}</span> / 0{SLIDES.length}
          </div>

          {/* Central Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="p-3 border border-[#c4a265]/20 hover:border-[#c4a265] bg-[#0d070b]/60 hover:bg-[#c4a265]/10 rounded-full transition-all duration-300 group"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-4 h-4 text-[#c4a265] group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 border border-[#c4a265]/20 hover:border-[#c4a265] bg-[#0d070b]/60 hover:bg-[#c4a265]/10 rounded-full transition-all duration-300 group"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-4 h-4 text-[#c4a265] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Decorative Tag */}
          <div className="text-xs tracking-[0.2em] uppercase font-mono text-zinc-500 hidden sm:block">
            STRETCH: 450mm
          </div>
        </div>
      </section>

      {/* --- BRAND STORY / SPECIFICATION CARDS --- */}
      <section id="craftsmanship" className="py-24 px-6 lg:px-16 border-y border-[#c4a265]/10 relative bg-[#090408]/90">
        <div className="max-w-6xl mx-auto">
          {/* Header Title */}
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block mb-3">// PRESERVED PRECISION</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7f3eb] to-[#c4a265]">
              Philosophies of the Forge
            </h2>
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#c4a265] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border border-[#c4a265]/10 bg-[#0d070b]/80 p-8 rounded-sm hover:border-[#c4a265]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/5 rounded-full flex items-center justify-center border border-[#c4a265]/20 mb-6 group-hover:scale-110 transition-transform">
                <Hammer className="w-5 h-5 text-[#c4a265]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">Mechanical Filigree</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Utilizing clockwork mechanisms extracted from antique pocket-watches, we build complex articulated anatomy that feels suspended in perpetual motion.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800/50 flex justify-between items-center text-xs tracking-wider uppercase font-mono text-[#c4a265]">
                <span>TOLERANCE RATIO</span>
                <span className="text-white">±0.02mm</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="border border-[#c4a265]/10 bg-[#0d070b]/80 p-8 rounded-sm hover:border-[#c4a265]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/5 rounded-full flex items-center justify-center border border-[#c4a265]/20 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-[#c4a265]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">24K Gilding Technique</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Applying multiple layers of gold leaf alongside custom hand-applied chemical acids to induce deep bronze shadows, providing unmatched organic highlights.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800/50 flex justify-between items-center text-xs tracking-wider uppercase font-mono text-[#c4a265]">
                <span>AURUM PURITY</span>
                <span className="text-white">99.9% GOLD</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="border border-[#c4a265]/10 bg-[#0d070b]/80 p-8 rounded-sm hover:border-[#c4a265]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/5 rounded-full flex items-center justify-center border border-[#c4a265]/20 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5 text-[#c4a265]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">Modular Skeletons</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Each insect is held together by micro-fasteners, meaning they can be modularly disassembled, calibrated, or upgraded in our specialized Parisian laboratory.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-800/50 flex justify-between items-center text-xs tracking-wider uppercase font-mono text-[#c4a265]">
                <span>SYSTEM ASSEMBLY</span>
                <span className="text-white">100% MODULAR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE INTERACTIVE ASSEMBLER / ATELIER --- */}
      <section id="assembler" className="py-24 px-6 lg:px-16 relative overflow-hidden bg-gradient-to-b from-[#090408] to-[#040203]">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block mb-2">// INTERACTIVE LAB</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-white">Assemble Your Masterpiece</h2>
            <p className="text-zinc-400 font-light text-sm mt-2 max-w-xl">
              Simulate modular commissions by toggling the physical properties of our centerpiece Scarab Prototype. Order custom specs upon final inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Assembler Viewport (Left 7 Cols) */}
            <div className="lg:col-span-7 border border-[#c4a265]/15 bg-[#0d070b]/90 rounded-md p-8 relative flex flex-col justify-center items-center min-h-[460px] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] overflow-hidden group">
              {/* Retro HUD Interface */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-[#c4a265]/60 tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                PREVIEW MATRIX ACTIVE
              </div>
              <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-500">
                ZOOM: AUTO // FIT
              </div>

              {/* Dynamic Insect Visualizer representing customization choices */}
              <div className={`w-64 h-64 relative transition-all duration-700 transform ${isAssembling ? 'scale-90 rotate-180 opacity-40 blur-[2px]' : 'scale-100 rotate-0 opacity-100'}`}>
                {/* Custom rendering of Scarab Beetle based on selected state */}
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                  <defs>
                    {/* Metal Color Gradients */}
                    <linearGradient id="gold-custom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="50%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                    <linearGradient id="bronze-custom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#edd0be" />
                      <stop offset="60%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#451a03" />
                    </linearGradient>
                    <linearGradient id="obsidian-custom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4b5563" />
                      <stop offset="40%" stopColor="#111827" />
                      <stop offset="100%" stopColor="#030712" />
                    </linearGradient>

                    {/* Gem colors */}
                    <radialGradient id="ruby" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#881337" />
                    </radialGradient>
                    <radialGradient id="sapphire" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </radialGradient>
                    <radialGradient id="emerald" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </radialGradient>
                  </defs>

                  {/* Mechanical legs (Brass skeleton) */}
                  <g stroke="#854d0e" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
                    {/* Leg pairs */}
                    <path d="M 150,150 L 100,120 L 70,140" />
                    <path d="M 250,150 L 300,120 L 330,140" />

                    <path d="M 150,190 L 90,190 L 60,210" />
                    <path d="M 250,190 L 310,190 L 340,210" />

                    <path d="M 150,230 L 100,260 L 80,300" />
                    <path d="M 250,230 L 300,260 L 320,300" />
                  </g>

                  {/* Antennae */}
                  <path d="M 180,90 Q 160,50 130,40 M 220,90 Q 240,50 270,40" stroke="#c4a265" strokeWidth="2" fill="none" opacity="0.6"/>

                  {/* Center Body Core (Metal Base) */}
                  <rect x="170" y="110" width="60" height="150" rx="30" fill="url(#obsidian-custom)" stroke="#c4a265" strokeWidth="2"/>

                  {/* Segmented Abdomen */}
                  <rect x="175" y="150" width="50" height="90" rx="20" fill={`url(#${customMetal}-custom)`} stroke="#1f1610" strokeWidth="1"/>

                  {/* Dynamic Custom Wings */}
                  {customWings === 'filigree' && (
                    <g opacity="0.9">
                      {/* Left Wing filigree */}
                      <path d="M 175,130 Q 90,90 80,180 Q 110,240 175,160 Z" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <path d="M 175,130 Q 120,130 110,180 Q 140,200 175,160" fill="none" stroke="#c4a265" strokeWidth="1" />
                      <path d="M 130,120 C 110,150 110,180 140,170" fill="none" stroke="#c4a265" strokeWidth="0.5" strokeDasharray="3" />
                      
                      {/* Right Wing filigree */}
                      <path d="M 225,130 Q 310,90 320,180 Q 290,240 225,160 Z" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <path d="M 225,130 Q 280,130 290,180 Q 260,200 225,160" fill="none" stroke="#c4a265" strokeWidth="1" />
                      <path d="M 270,120 C 290,150 290,180 260,170" fill="none" stroke="#c4a265" strokeWidth="0.5" strokeDasharray="3" />
                    </g>
                  )}

                  {customWings === 'solid' && (
                    <g opacity="0.95">
                      {/* Left Solid Carapace wing casing */}
                      <path d="M 175,130 Q 70,100 90,220 Q 130,260 175,160 Z" fill={`url(#${customMetal}-custom)`} stroke="#c4a265" strokeWidth="2"/>
                      <circle cx="130" cy="180" r="3" fill="#c4a265" opacity="0.5"/>
                      <circle cx="150" cy="200" r="3" fill="#c4a265" opacity="0.5"/>

                      {/* Right Solid Carapace wing casing */}
                      <path d="M 225,130 Q 330,100 310,220 Q 270,260 225,160 Z" fill={`url(#${customMetal}-custom)`} stroke="#c4a265" strokeWidth="2"/>
                      <circle cx="270" cy="180" r="3" fill="#c4a265" opacity="0.5"/>
                      <circle cx="250" cy="200" r="3" fill="#c4a265" opacity="0.5"/>
                    </g>
                  )}

                  {customWings === 'clockwork' && (
                    <g opacity="0.9">
                      {/* Left wing mechanical gear structures */}
                      <path d="M 175,130 L 100,120 L 120,200 L 175,160" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <circle cx="130" cy="140" r="14" fill="none" stroke="#c4a265" strokeWidth="2" strokeDasharray="4,2" />
                      <circle cx="130" cy="140" r="8" fill="none" stroke="#c4a265" strokeWidth="1" />

                      {/* Right wing mechanical gear structures */}
                      <path d="M 225,130 L 300,120 L 280,200 L 225,160" fill="none" stroke="#c4a265" strokeWidth="2" />
                      <circle cx="270" cy="140" r="14" fill="none" stroke="#c4a265" strokeWidth="2" strokeDasharray="4,2" />
                      <circle cx="270" cy="140" r="8" fill="none" stroke="#c4a265" strokeWidth="1" />
                    </g>
                  )}

                  {/* Head plate */}
                  <path d="M 170,110 Q 200,70 230,110 Z" fill={`url(#${customMetal}-custom)`} stroke="#c4a265" strokeWidth="1.5" />

                  {/* Gem Core Eyes (The central customizable jewel core) */}
                  <circle cx="185" cy="100" r="6" fill={`url(#${customCore})`} stroke="#1f1610" strokeWidth="1" />
                  <circle cx="215" cy="100" r="6" fill={`url(#${customCore})`} stroke="#1f1610" strokeWidth="1" />

                  {/* Highlight core gem in the center thorax */}
                  <polygon points="190,130 210,130 215,145 200,155 185,145" fill={`url(#${customCore})`} stroke="#c4a265" strokeWidth="1" />
                </svg>
              </div>

              {/* Specification overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-mono text-zinc-500">
                <span>METAL: {customMetal.toUpperCase()}</span>
                <span>WING TYPE: {customWings.toUpperCase()}</span>
                <span>CORE: {customCore.toUpperCase()}</span>
              </div>
            </div>

            {/* Customization Panel (Right 5 Cols) */}
            <div className="lg:col-span-5 space-y-8 bg-[#090408]/60 p-6 sm:p-8 border border-zinc-800/40 rounded-md">
              {/* Core Material Selector */}
              <div>
                <label className="text-[10px] tracking-[0.25em] text-[#c4a265] uppercase font-bold block mb-3">
                  1. Structural Metal Casing
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'gold', name: '24K Gilded', color: 'bg-gradient-to-tr from-amber-600 to-amber-200' },
                    { id: 'bronze', name: 'Raw Bronze', color: 'bg-gradient-to-tr from-amber-900 to-amber-500' },
                    { id: 'obsidian', name: 'Gunmetal Steel', color: 'bg-gradient-to-tr from-zinc-800 to-zinc-400' }
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => { triggerSound('click'); setCustomMetal(mat.id); }}
                      className={`p-3 text-left border rounded-sm transition-all duration-300 flex flex-col justify-between h-20 ${
                        customMetal === mat.id 
                          ? 'border-[#c4a265] bg-[#c4a265]/10 shadow-[0_0_12px_rgba(196,162,101,0.15)]' 
                          : 'border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full ${mat.color} border border-black/50`} />
                      <span className="text-[11px] font-medium text-white tracking-wide">{mat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filigree Style Selector */}
              <div>
                <label className="text-[10px] tracking-[0.25em] text-[#c4a265] uppercase font-bold block mb-3">
                  2. Wing Architecture
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'filigree', name: 'Aetherial Golden Filigree', desc: 'Lightweight hand-twisted lace brass wire' },
                    { id: 'solid', name: 'Solid Articulated Plates', desc: 'Heavy overlapping engraved armor shields' },
                    { id: 'clockwork', name: 'Exposed Gear Skeleton', desc: 'Interlinked active clockwork gear train' }
                  ].map((wing) => (
                    <button
                      key={wing.id}
                      onClick={() => { triggerSound('click'); setCustomWings(wing.id); }}
                      className={`w-full p-4 text-left border rounded-sm transition-all duration-300 flex items-center justify-between ${
                        customWings === wing.id 
                          ? 'border-[#c4a265] bg-[#c4a265]/10' 
                          : 'border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-semibold text-white tracking-wide">{wing.name}</h4>
                        <p className="text-[10px] text-zinc-500 font-light">{wing.desc}</p>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        customWings === wing.id ? 'border-[#c4a265] bg-[#c4a265]' : 'border-zinc-600'
                      }`}>
                        {customWings === wing.id && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gem Core Selector */}
              <div>
                <label className="text-[10px] tracking-[0.25em] text-[#c4a265] uppercase font-bold block mb-3">
                  3. Inlaid Thorax Gemstone
                </label>
                <div className="flex gap-4">
                  {[
                    { id: 'ruby', name: 'Siam Ruby', bg: 'bg-rose-600' },
                    { id: 'sapphire', name: 'Royal Sapphire', bg: 'bg-blue-600' },
                    { id: 'emerald', name: 'Kashmir Emerald', bg: 'bg-emerald-600' }
                  ].map((gem) => (
                    <button
                      key={gem.id}
                      onClick={() => { triggerSound('click'); setCustomCore(gem.id); }}
                      className={`flex-1 p-3 border rounded-sm transition-all duration-300 flex items-center gap-2.5 justify-center text-[11px] ${
                        customCore === gem.id 
                          ? 'border-[#c4a265] bg-[#c4a265]/10 text-white' 
                          : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${gem.bg} shadow-inner shadow-black/40`} />
                      {gem.name.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Commission simulation */}
              <button
                onClick={triggerAssembly}
                className="w-full bg-[#c4a265] hover:bg-[#b08e52] text-black font-semibold tracking-widest text-xs py-4 rounded-sm transition-all duration-300 uppercase flex items-center justify-center gap-2"
              >
                {isAssembling ? (
                  <>
                    <SlidersHorizontal className="w-4 h-4 animate-spin" />
                    Recalibrating Core...
                  </>
                ) : (
                  <>
                    <Hammer className="w-4 h-4" />
                    Lock Custom Commission Layout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREMIUM SPECIMEN VAULT & GALLERY --- */}
      <section id="vault" className="py-24 px-6 lg:px-16 border-t border-[#c4a265]/10 relative bg-[#090408]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block mb-2">// SPECIMEN DRAWERS</span>
            <h2 className="font-serif text-4xl font-light tracking-wide text-white">The Archival Vault</h2>
            <div className="h-[1px] w-20 bg-[#c4a265] mx-auto mt-4"></div>
          </div>

          {/* Grid of Specimens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VAULT_ITEMS.map((item, index) => (
              <div 
                key={index}
                className="border border-[#c4a265]/10 hover:border-[#c4a265]/40 bg-[#0d070b]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group hover:-translate-y-1"
              >
                {/* Image Placeholder Frame (Artistic Metallic Lines) */}
                <div className="h-64 bg-zinc-950/80 border-b border-zinc-900/60 relative flex justify-center items-center p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2a111f]/20 to-transparent pointer-events-none" />
                  
                  {/* Fine Geometric grid */}
                  <div className="absolute inset-4 border border-[#c4a265]/5 pointer-events-none" />

                  {/* Centered Specimen SVG Preview */}
                  <div className="w-44 h-44 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500">
                    {item.svgPreview}
                  </div>

                  {/* Corner tags */}
                  <span className="absolute top-4 left-4 font-mono text-[9px] text-[#c4a265]/60 tracking-wider">
                    {item.serial}
                  </span>
                  <span className="absolute bottom-4 right-4 text-[10px] tracking-widest text-[#c4a265]/80 bg-[#c4a265]/5 px-2 py-0.5 border border-[#c4a265]/10 rounded-sm">
                    {item.edition}
                  </span>
                </div>

                {/* Info and Purchase Panel */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#c4a265] transition-colors">{item.name}</h3>
                      <p className="text-zinc-500 text-xs font-mono mt-0.5 tracking-wider">{item.family}</p>
                    </div>
                    <span className="font-serif text-lg text-[#c4a265] font-light">{item.price}</span>
                  </div>

                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono">WEIGHT: {item.weight}</span>
                    <button 
                      onClick={() => { triggerSound('click'); setSelectedSpecimen(item); }}
                      className="px-4 py-2 border border-[#c4a265]/30 hover:border-[#c4a265] hover:bg-[#c4a265]/10 text-[#c4a265] rounded-sm text-xs tracking-widest uppercase transition-all duration-300 font-medium"
                    >
                      Inquire Specimen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECIFICATION READOUT --- */}
      <section className="py-24 px-6 lg:px-16 border-t border-zinc-900 bg-black relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c4a265] font-semibold block">// ANATOMICAL COMPOSITION</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal leading-tight text-white">
              Surgical Detailing & Archival Preservation
            </h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Every creation is built using only premium non-corrosive materials. The clockwork components are polished by hand, ultrasonic-cleaned, and fixed using structural resins to prevent drifting over centuries of storage.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="p-2 border border-[#c4a265]/20 bg-[#c4a265]/5 rounded-sm h-10 w-10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#c4a265]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Lifetime Conservation</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">We offer free yearly maintenance to original collectors to test gear structural integrity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 border border-[#c4a265]/20 bg-[#c4a265]/5 rounded-sm h-10 w-10 flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-[#c4a265]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">Hermetic Vitrines Available</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">Custom glass domes with integrated copper LED bases and solid mahogany bases can be added to your shipment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 border border-[#c4a265]/10 bg-[#0d070b]/50 p-6 sm:p-8 rounded-sm">
            <div className="flex border-b border-zinc-800 pb-4 mb-6 gap-6 text-xs tracking-widest uppercase font-mono text-[#c4a265]">
              <button 
                onClick={() => { triggerSound('click'); setActiveTab('anatomy'); }}
                className={`pb-2 ${activeTab === 'anatomy' ? 'text-white border-b-2 border-[#c4a265]' : 'opacity-50 hover:opacity-100'}`}
              >
                Anatomy Specs
              </button>
              <button 
                onClick={() => { triggerSound('click'); setActiveTab('shipping'); }}
                className={`pb-2 ${activeTab === 'shipping' ? 'text-white border-b-2 border-[#c4a265]' : 'opacity-50 hover:opacity-100'}`}
              >
                Secure Dispatch
              </button>
            </div>

            {activeTab === 'anatomy' ? (
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">CHASSIS MATERIAL</span>
                  <span className="text-zinc-300">CNC laser-machined spring-steel core</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">ARTICULATIONS</span>
                  <span className="text-zinc-300">Dual-spring tension rivets</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">GLOW CONCENTRATE</span>
                  <span className="text-zinc-300">SuperLuminova vintage bronze paint overlays</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">WATCH MOVEMENTS INCLUDED</span>
                  <span className="text-zinc-300">Swiss Caliber ETA 2824-2 escapement components</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">ACID FINISHING</span>
                  <span className="text-zinc-300">Sulfur-based bronze oxidation bath (12-hour soak)</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">PACKAGING</span>
                  <span className="text-zinc-300">Velvet-lined shockproof wooden military-crate cases</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">INSURANCE</span>
                  <span className="text-zinc-300">Fully insured high-value transport coverage included</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500">TRACKING SIGNATURE</span>
                  <span className="text-zinc-300">Mandatory biometric receiver signature</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">GLOBAL LEAD TIMES</span>
                  <span className="text-zinc-300">Europe: 4 Days // US & Asia: 9 Days custom customs clearance</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- INQUIRY / ACQUISITION MODAL --- */}
      {selectedSpecimen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#0e090c] border border-[#c4a265]/30 p-8 rounded-sm shadow-[0_0_50px_rgba(196,162,101,0.2)]">
            <button 
              onClick={() => { triggerSound('click'); setSelectedSpecimen(null); }}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] tracking-[0.3em] text-[#c4a265] font-mono block mb-2 uppercase">
              // ACQUISITION BRIEF
            </span>
            <h3 className="font-serif text-3xl text-white mb-2">{selectedSpecimen.name}</h3>
            <p className="text-xs text-zinc-500 font-mono mb-6">{selectedSpecimen.serial || "SPECIMEN S021"} — {selectedSpecimen.price || "VALUED BY QUOTE"}</p>

            {inquirySubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto animate-bounce" />
                <h4 className="font-serif text-xl text-white">Inquiry Sent Successfully</h4>
                <p className="text-zinc-400 text-xs">
                  We've transmitted your private collector request to our atelier coordinator in Paris. Expect secure contact shortly, {inquiryName || "honored guest"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] text-zinc-400 font-mono mb-1.5 uppercase">Full Collector Name</label>
                  <input 
                    type="text" 
                    required 
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Baron Sterling Hunt" 
                    className="w-full bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-zinc-400 font-mono mb-1.5 uppercase">Secure Contact E-mail</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="sterling@huntcollection.com" 
                    className="w-full bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-zinc-400 font-mono mb-1.5 uppercase">Acquisition Message & Details</label>
                  <textarea 
                    rows="3" 
                    placeholder="Indicate your bespoke requests (custom crystal inclusions, special wall mount frameworks, or hand-painted mahogany pedestals)..." 
                    className="w-full bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-[#c4a265] hover:bg-[#b59254] text-black text-xs tracking-widest font-bold uppercase py-4 rounded-sm transition-all duration-300"
                  >
                    Secure Private Inquiry Protocol
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center mt-3 font-mono leading-relaxed">
                    By submitting, you authorize AK Atelier Paris to contact you via encrypted digital channels regarding private acquisitions.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- PREMIUM NEWSLETTER --- */}
      <section className="py-24 px-6 lg:px-16 border-t border-[#c4a265]/10 relative bg-[#090408]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-[#c4a265] font-semibold block">// PRIVATE DISPATCHES</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
            Join the Sovereign Collector Circle
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Receive highly limited notifications regarding future quarterly drops, metalwork experiments, and private museum exhibitions worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-[#c4a265] text-white p-3 text-xs outline-none rounded-sm transition-colors text-center sm:text-left"
            />
            <button 
              onClick={() => triggerSound('wind')}
              className="bg-[#c4a265] hover:bg-[#b08e52] text-black text-xs tracking-widest font-bold uppercase px-6 py-3 rounded-sm transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 px-6 lg:px-16 border-t border-zinc-900/60 text-xs text-zinc-500 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-lg text-white font-bold tracking-widest text-[#c4a265]">AK</span>
            <span>HANDMADE METALWORK ATELIER PARIS // COUTURES</span>
          </div>
          <div className="flex gap-6 uppercase text-[10px] tracking-widest text-[#c4a265]">
            <a href="#exhibits" className="hover:text-white transition-colors">Exhibits</a>
            <a href="#craftsmanship" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#assembler" className="hover:text-white transition-colors">Atelier</a>
            <a href="#vault" className="hover:text-white transition-colors">Vault</a>
          </div>
          <div>
            <span>© 2026 AK IND. ALL RIGHTS PRESERVED.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// HIGH FIDELITY SVG INSECTS DESIGN PRESETS
// ==========================================

const GildedScarabSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="sc-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffeed0"/>
        <stop offset="60%" stopColor="#d29f45"/>
        <stop offset="100%" stopColor="#5d3c0e"/>
      </linearGradient>
      <linearGradient id="sc-bronze" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f3caad"/>
        <stop offset="70%" stopColor="#b17649"/>
        <stop offset="100%" stopColor="#431c03"/>
      </linearGradient>
      <radialGradient id="sc-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fa3252" />
        <stop offset="100%" stopColor="#6e0012" />
      </radialGradient>
    </defs>
    
    {/* Background Ambient Shadow Ring */}
    <ellipse cx="200" cy="330" rx="90" ry="12" fill="#000" opacity="0.6" filter="blur(10px)" />

    {/* Elegant Golden Antennae */}
    <path d="M 170,80 Q 140,25 90,20" stroke="url(#sc-gold)" strokeWidth="2.5" fill="none"/>
    <path d="M 230,80 Q 260,25 310,20" stroke="url(#sc-gold)" strokeWidth="2.5" fill="none"/>

    {/* Insect Legs: Intricate segmented mechanical designs */}
    <g stroke="url(#sc-bronze)" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* Front Legs */}
      <path d="M 150,130 L 80,90 L 50,110 L 40,150" />
      <path d="M 250,130 L 320,90 L 350,110 L 360,150" />
      {/* Mid Legs */}
      <path d="M 140,190 L 60,190 L 30,220 L 25,270" />
      <path d="M 260,190 L 340,190 L 370,220 L 375,270" />
      {/* Back Legs */}
      <path d="M 150,260 L 85,310 L 65,360 L 60,390" />
      <path d="M 250,260 L 315,310 L 335,360 L 340,390" />
    </g>

    {/* Mechanical joint cogs */}
    <g fill="url(#sc-gold)">
      <circle cx="150" cy="130" r="6" />
      <circle cx="250" cy="130" r="6" />
      <circle cx="140" cy="190" r="6" />
      <circle cx="260" cy="190" r="6" />
      <circle cx="150" cy="260" r="6" />
      <circle cx="250" cy="260" r="6" />
    </g>

    {/* Abdomen segments (Main background core) */}
    <rect x="155" y="140" width="90" height="150" rx="45" fill="#140c11" stroke="url(#sc-gold)" strokeWidth="2" />
    <path d="M 160,180 L 240,180 M 156,220 L 244,220 M 165,260 L 235,260" stroke="url(#sc-bronze)" strokeWidth="2" opacity="0.7"/>

    {/* Heavy Wing Sheaths (Overlapping design) */}
    {/* Left Outer Plate */}
    <path d="M 196,120 C 130,120 100,180 110,280 C 130,310 170,315 196,305 Z" fill="url(#sc-bronze)" stroke="url(#sc-gold)" strokeWidth="2" />
    <path d="M 196,120 C 150,150 130,210 135,280" stroke="url(#sc-gold)" strokeWidth="1" opacity="0.6" fill="none" />
    <circle cx="130" cy="170" r="3" fill="url(#sc-gold)"/>
    <circle cx="150" cy="240" r="3.5" fill="url(#sc-gold)"/>

    {/* Right Outer Plate */}
    <path d="M 204,120 C 270,120 300,180 290,280 C 270,310 230,315 204,305 Z" fill="url(#sc-bronze)" stroke="url(#sc-gold)" strokeWidth="2" />
    <path d="M 204,120 C 250,150 270,210 265,280" stroke="url(#sc-gold)" strokeWidth="1" opacity="0.6" fill="none" />
    <circle cx="270" cy="170" r="3" fill="url(#sc-gold)"/>
    <circle cx="250" cy="240" r="3.5" fill="url(#sc-gold)"/>

    {/* Head & Neck Pieces */}
    <path d="M 160,120 Q 200,60 240,120 Z" fill="url(#sc-bronze)" stroke="url(#sc-gold)" strokeWidth="2" />
    <circle cx="175" cy="100" r="7" fill="url(#sc-core)" stroke="url(#sc-gold)" strokeWidth="1.5" />
    <circle cx="225" cy="100" r="7" fill="url(#sc-core)" stroke="url(#sc-gold)" strokeWidth="1.5" />
  </svg>
);

const EmperorDragonflySVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="df-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff8e7"/>
        <stop offset="50%" stopColor="#e5ba64"/>
        <stop offset="100%" stopColor="#7c5313"/>
      </linearGradient>
      <linearGradient id="df-iron" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9ca3af"/>
        <stop offset="100%" stopColor="#1f2937"/>
      </linearGradient>
      <radialGradient id="df-gem" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#022c22"/>
      </radialGradient>
    </defs>
    
    <ellipse cx="200" cy="350" rx="60" ry="8" fill="#000" opacity="0.5" filter="blur(8px)" />

    {/* Super Fine Filigree Wings (Double Wings Layout) */}
    {/* Left Upper Wing */}
    <path d="M 190,140 Q 50,40 40,100 Q 80,160 190,150 Z" fill="none" stroke="url(#df-gold)" strokeWidth="2" />
    <path d="M 190,140 Q 90,80 75,120 Q 130,150 190,150" fill="none" stroke="url(#df-gold)" strokeWidth="1" opacity="0.6"/>
    <path d="M 100,75 L 120,120 M 130,90 L 150,135" stroke="url(#df-gold)" strokeWidth="0.5" opacity="0.4" />

    {/* Left Lower Wing */}
    <path d="M 185,160 Q 60,110 65,160 Q 100,210 185,170 Z" fill="none" stroke="url(#df-gold)" strokeWidth="1.8" />
    <path d="M 185,160 Q 100,135 95,165 Q 130,190 185,170" fill="none" stroke="url(#df-gold)" strokeWidth="0.8" opacity="0.5"/>

    {/* Right Upper Wing */}
    <path d="M 210,140 Q 350,40 360,100 Q 320,160 210,150 Z" fill="none" stroke="url(#df-gold)" strokeWidth="2" />
    <path d="M 210,140 Q 310,80 325,120 Q 270,150 210,150" fill="none" stroke="url(#df-gold)" strokeWidth="1" opacity="0.6"/>
    <path d="M 300,75 L 280,120 M 270,90 L 250,135" stroke="url(#df-gold)" strokeWidth="0.5" opacity="0.4" />

    {/* Right Lower Wing */}
    <path d="M 215,160 Q 340,110 335,160 Q 300,210 215,170 Z" fill="none" stroke="url(#df-gold)" strokeWidth="1.8" />
    <path d="M 215,160 Q 300,135 305,165 Q 270,190 215,170" fill="none" stroke="url(#df-gold)" strokeWidth="0.8" opacity="0.5"/>

    {/* Legs */}
    <g stroke="url(#df-iron)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 185,160 L 150,190 L 130,220" />
      <path d="M 215,160 L 250,190 L 270,220" />
      <path d="M 190,190 L 160,230 L 145,260" />
      <path d="M 210,190 L 240,230 L 255,260" />
    </g>

    {/* Long Segmented Tail */}
    <g fill="url(#df-iron)" stroke="url(#df-gold)" strokeWidth="1">
      <rect x="194" y="170" width="12" height="25" rx="4" />
      <rect x="195" y="198" width="10" height="25" rx="3" />
      <rect x="196" y="226" width="8" height="25" rx="2" />
      <rect x="196" y="254" width="8" height="25" rx="2" />
      <rect x="197" y="282" width="6" height="25" rx="2" />
      <rect x="197" y="310" width="6" height="25" rx="2" />
      {/* Finial Stinger tip */}
      <path d="M 197,338 L 203,338 L 200,358 Z" fill="url(#df-gold)" />
    </g>

    {/* Thorax / Engine Core */}
    <rect x="182" y="115" width="36" height="60" rx="18" fill="url(#df-iron)" stroke="url(#df-gold)" strokeWidth="2.5" />
    <circle cx="200" cy="145" r="9" fill="url(#df-gem)" stroke="url(#df-gold)" strokeWidth="1.5" />

    {/* Eyes */}
    <circle cx="180" cy="110" r="10" fill="url(#df-gem)" stroke="url(#df-gold)" strokeWidth="1.5" />
    <circle cx="220" cy="110" r="10" fill="url(#df-gem)" stroke="url(#df-gold)" strokeWidth="1.5" />
  </svg>
);

const LunarMothSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="mo-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fffaf0"/>
        <stop offset="40%" stopColor="#ddb05f"/>
        <stop offset="100%" stopColor="#664614"/>
      </linearGradient>
      <linearGradient id="mo-dark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#374151"/>
        <stop offset="100%" stopColor="#111827"/>
      </linearGradient>
      <radialGradient id="mo-eye" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </radialGradient>
    </defs>
    
    <ellipse cx="200" cy="360" rx="40" ry="6" fill="#000" opacity="0.4" filter="blur(6px)" />

    {/* Feathery Antennae */}
    <path d="M 185,110 C 175,70 145,50 120,45" stroke="url(#mo-gold)" strokeWidth="3" strokeDasharray="1,1.5" fill="none" />
    <path d="M 215,110 C 225,70 255,50 280,45" stroke="url(#mo-gold)" strokeWidth="3" strokeDasharray="1,1.5" fill="none" />

    {/* Beautiful Fan Wings with long tails */}
    {/* Left Wing & Long Tail */}
    <path d="M 185,140 Q 60,60 50,150 Q 80,240 160,250 L 120,350 Q 140,360 165,300 L 185,200 Z" fill="url(#mo-dark)" stroke="url(#mo-gold)" strokeWidth="2.5" />
    {/* Luna Spot Left */}
    <circle cx="115" cy="160" r="14" fill="none" stroke="url(#mo-gold)" strokeWidth="2" />
    <circle cx="115" cy="160" r="8" fill="url(#mo-eye)" />

    {/* Right Wing & Long Tail */}
    <path d="M 215,140 Q 340,60 350,150 Q 320,240 240,250 L 280,350 Q 260,360 235,300 L 215,200 Z" fill="url(#mo-dark)" stroke="url(#mo-gold)" strokeWidth="2.5" />
    {/* Luna Spot Right */}
    <circle cx="285" cy="160" r="14" fill="none" stroke="url(#mo-gold)" strokeWidth="2" />
    <circle cx="285" cy="160" r="8" fill="url(#mo-eye)" />

    {/* Fluffy Brass Core Body */}
    <rect x="180" y="115" width="40" height="90" rx="20" fill="url(#mo-dark)" stroke="url(#mo-gold)" strokeWidth="1.5" />
    {/* Ribbed detail representing metal sheets */}
    <line x1="185" y1="140" x2="215" y2="140" stroke="url(#mo-gold)" strokeWidth="1" />
    <line x1="185" y1="160" x2="215" y2="160" stroke="url(#mo-gold)" strokeWidth="1" />
    <line x1="185" y1="180" x2="215" y2="180" stroke="url(#mo-gold)" strokeWidth="1" />

    {/* Eyes */}
    <circle cx="188" cy="115" r="5.5" fill="url(#mo-eye)" />
    <circle cx="212" cy="115" r="5.5" fill="url(#mo-eye)" />
  </svg>
);

const ObsidianScorpionSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="sc-obsidian" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4c566a"/>
        <stop offset="50%" stopColor="#1e2530"/>
        <stop offset="100%" stopColor="#0a0f14"/>
      </linearGradient>
      <linearGradient id="sc-gold-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffd885"/>
        <stop offset="100%" stopColor="#966d1f"/>
      </linearGradient>
    </defs>

    <ellipse cx="200" cy="360" rx="80" ry="10" fill="#000" opacity="0.6" filter="blur(8px)" />

    {/* Segmented Tail Arching Over */}
    <g fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="1">
      <rect x="190" y="240" width="20" height="22" rx="5" />
      <rect x="192" y="215" width="16" height="22" rx="4" />
      <rect x="193" y="188" width="14" height="24" rx="4" />
      <rect x="191" y="160" width="18" height="24" rx="4" />
      <rect x="186" y="132" width="28" height="24" rx="6" />
      <rect x="178" y="104" width="44" height="24" rx="8" />
      
      {/* Arching stinger joint */}
      <path d="M 188,104 Q 200,60 220,50" fill="none" stroke="url(#sc-gold-accent)" strokeWidth="4" />
      {/* Deadly Gilded Needle */}
      <path d="M 220,50 Q 240,45 250,55 L 225,65 Z" fill="url(#sc-gold-accent)" />
    </g>

    {/* Articulated Claws (Pedipalps) */}
    {/* Left Claw */}
    <path d="M 170,220 Q 110,210 90,160 L 70,165" stroke="url(#sc-obsidian)" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
    <path d="M 70,165 Q 40,140 60,110 Q 90,130 85,160 Z" fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="1.5" />
    <path d="M 55,120 Q 30,110 40,140" stroke="url(#sc-gold-accent)" strokeWidth="2.5" fill="none" />

    {/* Right Claw */}
    <path d="M 230,220 Q 290,210 310,160 L 330,165" stroke="url(#sc-obsidian)" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
    <path d="M 330,165 Q 360,140 340,110 Q 310,130 315,160 Z" fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="1.5" />
    <path d="M 345,120 Q 370,110 360,140" stroke="url(#sc-gold-accent)" strokeWidth="2.5" fill="none" />

    {/* Grounding Legs */}
    <g stroke="url(#sc-obsidian)" strokeWidth="4" fill="none" strokeLinecap="round">
      <path d="M 160,230 L 100,240 L 70,280" />
      <path d="M 240,230 L 300,240 L 330,280" />
      
      <path d="M 160,250 L 110,270 L 80,310" />
      <path d="M 240,250 L 290,270 L 320,310" />

      <path d="M 160,270 L 120,300 L 90,340" />
      <path d="M 240,270 L 280,300 L 310,340" />
    </g>

    {/* Rigid Central Body Armor */}
    <rect x="160" y="210" width="80" height="70" rx="10" fill="url(#sc-obsidian)" stroke="url(#sc-gold-accent)" strokeWidth="2" />
    <path d="M 160,230 L 240,230 M 160,250 L 240,250 M 160,270 L 240,270" stroke="url(#sc-gold-accent)" strokeWidth="1" opacity="0.6"/>
  </svg>
);

// ==========================================
// STATIC PRESET ARRAYS
// ==========================================

const SLIDES = [
  {
    title: "INSECTS",
    desc: "A stunning mechanical beetle crafted from gold filigree, clockwork mechanisms, and a centralized Siam Ruby heart.",
    svgComponent: <GildedScarabSVG />,
    stats: {
      parts: "246",
      hours: "180",
      metals: "24K Gold Plate, Brass, Siam Ruby",
      value: "$4,800 USD"
    }
  },
  {
    title: "LUNA",
    desc: "Exquisite Lunar Moth featuring ultra-light flexible wing-mesh plates, structural clock springs, and fine obsidian legs.",
    svgComponent: <LunarMothSVG />,
    stats: {
      parts: "184",
      hours: "142",
      metals: "Aetherial Gold, Obsidian Steel, Blue Sapphire",
      value: "$5,200 USD"
    }
  },
  {
    title: "AETHER",
    desc: "Articulated mechanical dragonfly featuring rotating gears at wing joints, structural copper ribs, and dual emerald optics.",
    svgComponent: <EmperorDragonflySVG />,
    stats: {
      parts: "312",
      hours: "220",
      metals: "Polished Bronze, Spring Steel, Kashmir Emerald",
      value: "$6,500 USD"
    }
  }
];

const VAULT_ITEMS = [
  {
    serial: "S-012",
    edition: "UNIQUE PIECE",
    name: "Aetherial Scarabaeus",
    family: "SCARABAEIDAE // BRONZE",
    price: "$4,800",
    description: "Centuries of vintage watchmaking history integrated into a hand-gilded, spring-tensioned beetle chassis.",
    weight: "340g",
    svgPreview: <GildedScarabSVG />
  },
  {
    serial: "S-044",
    edition: "1 OF 3 EDITIONS",
    name: "Emperor Anisoptera",
    family: "ODONATA // DRAGONFLY",
    price: "$6,500",
    description: "Features active double-wing assemblies linked through micrometric brass friction joints and polished gold filaments.",
    weight: "220g",
    svgPreview: <EmperorDragonflySVG />
  },
  {
    serial: "S-089",
    edition: "UNIQUE PIECE",
    name: "Vesper Luna Moth",
    family: "SATURNIIDAE // LUNA",
    price: "$5,200",
    description: "Suspended on modular display mounts with fine copper wire mesh representing the dust contours of lunar moths.",
    weight: "180g",
    svgPreview: <LunarMothSVG />
  },
  {
    serial: "S-102",
    edition: "UNIQUE PIECE",
    name: "Gilded Pandinus",
    family: "SCORPIONIDAE // OBSIDIAN",
    price: "$7,200",
    description: "An incredibly detailed micro-scorpion, complete with a functional spring-loaded tail and faceted obsidian plating.",
    weight: "480g",
    svgPreview: <ObsidianScorpionSVG />
  },
  {
    serial: "S-115",
    edition: "CO-ORDER ONLY",
    name: "Chrysolina Aurum",
    family: "CHRYSOMELIDAE // GOLD",
    price: "$3,900",
    description: "A compact leaf beetle prototype showcasing a heavy solid casing polished to mirror perfection using gold oxides.",
    weight: "290g",
    svgPreview: <GildedScarabSVG />
  },
  {
    serial: "S-128",
    edition: "1 OF 2 EDITIONS",
    name: "Acherontia Styx",
    family: "SPHINGIDAE // BRONZE",
    price: "$5,900",
    description: "A death-head hawk moth replica with custom gold-leaf skull engravings over a hardened bronze frame.",
    weight: "210g",
    svgPreview: <LunarMothSVG />
  }
];
10