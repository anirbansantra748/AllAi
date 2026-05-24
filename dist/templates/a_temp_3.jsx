import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  ShoppingBag, 
  Search, 
  User, 
  Plus, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  MapPin, 
  Activity, 
  Cpu, 
  Eye, 
  Layers, 
  X, 
  Check, 
  TrendingUp, 
  Sliders, 
  Play, 
  Volume2, 
  VolumeX,
  Share2
} from 'lucide-react';

export default function App() {
  // Global & Interaction States
  const [activeTab, setActiveTab] = useState('Shop');
  const [selectedSize, setSelectedSize] = useState('M');
  const [backpackColor, setBackpackColor] = useState('default'); // 'default', 'sand', 'alpine'
  const [activeBackpackAngle, setActiveBackpackAngle] = useState(0); // 0: front, 1: side, 2: back
  const [vrMode, setVrMode] = useState(false);
  const [bgBlurAmount, setBgBlurAmount] = useState(0); // For simulate altitude/depth blur
  const [cartCount, setCartCount] = useState(0);
  const [showCartToast, setShowCartToast] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentExploreIndex, setCurrentExploreIndex] = useState(0);
  
  // Custom interactive mock data matching the F/W Collection theme
  const exploreCards = [
    {
      title: "New collection",
      subtitle: "F/W 2026 Season",
      tag: "NEW IN",
      imgUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
      accent: "from-amber-600/30 to-amber-950/40"
    },
    {
      title: "Future by Nike",
      subtitle: "TERRAIN TECH PANTS",
      tag: "NEW TECHNOLOGY",
      imgUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      accent: "from-orange-500/30 to-zinc-950/40"
    },
    {
      title: "Extreme Altitude",
      subtitle: "WATERPROOF COAT",
      tag: "OXYGEN-READY",
      imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      accent: "from-amber-700/30 to-neutral-950/40"
    }
  ];

  const handleNextExplore = () => {
    setCurrentExploreIndex((prev) => (prev + 1) % exploreCards.length);
  };

  const handlePrevExplore = () => {
    setCurrentExploreIndex((prev) => (prev - 1 + exploreCards.length) % exploreCards.length);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowCartToast(true);
    setTimeout(() => {
      setShowCartToast(false);
    }, 4000);
  };

  // Sound effects generator using Web Audio API (premium UI atmospheric tone)
  const playBeep = (freq = 240, duration = 0.08, type = "sine") => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = type;
      oscillator.frequency.value = freq;
      gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context blocked or not supported
    }
  };

  const toggleAtmosphereAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
    playBeep(320, 0.15, "triangle");
  };

  return (
    <div className="min-h-screen relative text-stone-100 font-sans overflow-x-hidden selection:bg-amber-500 selection:text-stone-900 bg-[#0E0B09]">
      
      {/* Dynamic Earth-Tone Background Canvas */}
      <div 
        className="fixed inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=80')`,
          filter: `brightness(${vrMode ? 0.35 : 0.6}) saturate(${vrMode ? 1.4 : 1.05}) contrast(1.05) blur(${bgBlurAmount}px)`,
          transform: vrMode ? 'scale(1.08)' : 'scale(1.02)'
        }}
      />
      
      {/* Earthy Vignette & Glowing Atmosphere Overlays */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#0E0B09] via-transparent to-[#1a120b]/40 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.07),transparent_65%)] pointer-events-none" />
      <div className="fixed top-12 left-1/4 w-[45rem] h-[30rem] bg-amber-600/10 rounded-full filter blur-[150px] mix-blend-screen pointer-events-none transition-opacity duration-1000" style={{ opacity: vrMode ? 0.9 : 0.4 }} />
      <div className="fixed bottom-12 right-1/4 w-[35rem] h-[35rem] bg-orange-800/10 rounded-full filter blur-[180px] mix-blend-screen pointer-events-none" />

      {/* Floating Header Audio Ambient Pill */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-stone-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-stone-800 text-[10px] uppercase tracking-widest text-stone-400">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        <span>VR Experience: Active F/W Session</span>
        <button 
          onClick={toggleAtmosphereAudio}
          className="hover:text-amber-400 transition-colors focus:outline-none flex items-center gap-1.5 ml-2 border-l border-stone-700 pl-2"
        >
          {isAudioPlaying ? <Volume2 size={12} className="text-amber-500" /> : <VolumeX size={12} />}
          <span>{isAudioPlaying ? 'Mute Atmosphere' : 'Play Soundscape'}</span>
        </button>
      </div>

      {/* Main Container Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 z-10">
        
        {/* TOP BRAND INSCRIPTION */}
        <div className="text-center mb-10 mt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900/50 backdrop-blur-md border border-stone-800 rounded-full text-[11px] uppercase tracking-[0.25em] text-amber-500/90 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-amber-400"></span>
            <span>Interface design of ecommerce</span>
            <span className="w-1 h-1 rounded-full bg-amber-400"></span>
          </div>
          <p className="text-stone-400/80 text-[11px] uppercase tracking-widest mt-2 font-mono">Test 03 by PXDX Studio / Expanded Ecosystem</p>
        </div>

        {/* HERO ECOMMERCE CONSOLE (The centerpiece layout based directly on the mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT WING: BRAND identity & NESTED CARDS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* P58 Main Hero Banner Card */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[300px]">
              
              {/* Backglow accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full filter blur-3xl pointer-events-none" />
              
              <div className="flex justify-between items-start z-10">
                <h1 className="text-7xl font-light tracking-tighter text-stone-100 font-sans flex items-baseline">
                  P58
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-500 ml-2">v2.5</span>
                </h1>
                
                {/* Micro Pill Button */}
                <button 
                  onClick={() => { playBeep(440); setVrMode(!vrMode); }}
                  className="bg-stone-900 border border-stone-700/80 hover:border-amber-500 hover:text-amber-400 transition-all text-stone-200 px-4 py-2.5 rounded-full text-xs font-medium flex items-center gap-2 group cursor-pointer"
                >
                  <span className="text-[10px] uppercase tracking-widest">About P58</span>
                  <div className="w-5 h-5 rounded-full bg-stone-800 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                    <Plus size={10} className="group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              {/* Sub-details & Specs */}
              <div className="pt-10 z-10">
                <div className="border-t border-stone-800/80 pt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-900/90 border border-stone-800 rounded-xl text-amber-500">
                      <Compass size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500">Marketplace</p>
                      <p className="text-xs font-semibold text-stone-300 uppercase tracking-tight">Only Top Brands</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-900/90 border border-stone-800 rounded-xl text-amber-500">
                      <Layers size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-500">Trekking Gear</p>
                      <p className="text-xs font-semibold text-stone-300 uppercase tracking-tight">F/W Collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Explorer Slider Container (Two-column responsive card navigation mimicking the design) */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-6 backdrop-blur-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono">Dynamic Scouting</p>
                <div className="flex gap-1">
                  <button 
                    onClick={() => { playBeep(200); handlePrevExplore(); }}
                    className="w-8 h-8 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800/95 flex items-center justify-center text-stone-400 hover:text-stone-100 transition-colors"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button 
                    onClick={() => { playBeep(200); handleNextExplore(); }}
                    className="w-8 h-8 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800/95 flex items-center justify-center text-stone-400 hover:text-stone-100 transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              {/* Slider Viewports */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Main slide item (index) */}
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-900 border border-stone-800 flex flex-col justify-end p-4">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${exploreCards[currentExploreIndex].imgUrl})` }} />
                  <div className={`absolute inset-0 bg-gradient-to-t ${exploreCards[currentExploreIndex].accent} via-black/30 to-black/10`} />
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-700/80 text-[8px] font-bold tracking-widest text-amber-500 uppercase">
                    {exploreCards[currentExploreIndex].tag}
                  </div>

                  <div className="relative z-10">
                    <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{exploreCards[currentExploreIndex].subtitle}</p>
                    <h3 className="text-sm font-semibold tracking-tight text-white mt-0.5">{exploreCards[currentExploreIndex].title}</h3>
                  </div>

                  <button className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Plus size={14} />
                  </button>
                </div>

                {/* Secondary side item (index + 1) */}
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-stone-900 border border-stone-800 flex flex-col justify-end p-4">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${exploreCards[(currentExploreIndex + 1) % exploreCards.length].imgUrl})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-700/80 text-[8px] font-bold tracking-widest text-stone-400 uppercase">
                    {exploreCards[(currentExploreIndex + 1) % exploreCards.length].tag}
                  </div>

                  <div className="relative z-10">
                    <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{exploreCards[(currentExploreIndex + 1) % exploreCards.length].subtitle}</p>
                    <h3 className="text-sm font-semibold tracking-tight text-white mt-0.5">{exploreCards[(currentExploreIndex + 1) % exploreCards.length].title}</h3>
                  </div>

                  <button className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-stone-800/90 text-stone-100 border border-stone-700 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT WING: PRODUCT SHOWCASE INTERFACE (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Top Interactive Glass Control Bar */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[1.8rem] p-3.5 backdrop-blur-xl flex flex-wrap gap-2 items-center justify-between shadow-md">
              <div className="flex gap-1">
                <button 
                  onClick={() => { playBeep(280); setActiveTab('About'); }} 
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${activeTab === 'About' ? 'bg-[#32271d] text-amber-500 shadow-inner' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  About
                </button>
                <button 
                  onClick={() => { playBeep(300); setActiveTab('Guides'); }} 
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${activeTab === 'Guides' ? 'bg-[#32271d] text-amber-500 shadow-inner' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  Guides
                </button>
                <button 
                  onClick={() => { playBeep(320); setActiveTab('Shop'); }} 
                  className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center gap-1.5 ${activeTab === 'Shop' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-stone-200'}`}
                >
                  Shop <ArrowUpRight size={12} />
                </button>
              </div>

              {/* Utility Tools */}
              <div className="flex items-center gap-1.5">
                <button className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-stone-200 hover:border-amber-500/50 transition-all cursor-pointer">
                  <Search size={14} />
                </button>
                <button 
                  onClick={() => { playBeep(350); handleAddToCart(); }} 
                  className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-stone-200 hover:border-amber-500/50 transition-all relative"
                >
                  <ShoppingBag size={14} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-[9px] font-bold text-stone-950 flex items-center justify-center animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-stone-200 hover:border-amber-500/50 transition-all">
                  <User size={14} />
                </button>
              </div>
            </div>

            {/* Immersive Dynamic Product Showcase Board */}
            <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between flex-1 min-h-[480px]">
              
              {/* Product Glow Ambient light */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(217,119,6,0.12),transparent_65%)] pointer-events-none" />

              {/* Top Row: Meta Tags & Active Layout Customizers */}
              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-1.5">
                  <span className="self-start px-2.5 py-0.5 rounded-full bg-[#32271d] text-[8px] font-bold tracking-widest text-amber-500 uppercase">
                    NEW IN
                  </span>
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-light text-stone-100 tracking-tight">Backpack</h2>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Jack Wolfskin / P58 Concept Edition</p>
                  </div>
                </div>

                {/* Right Floating Product Multi-angle Selector */}
                <div className="bg-stone-950/70 border border-stone-800/60 p-1.5 rounded-3xl flex flex-col gap-2 shadow-inner">
                  <button 
                    onClick={() => { playBeep(260); setActiveBackpackAngle(0); }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeBackpackAngle === 0 ? 'bg-amber-500 text-stone-950 scale-105' : 'bg-stone-900/60 text-stone-400 hover:text-white'}`}
                    title="Front Angle"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="6" y="4" width="12" height="16" rx="3" />
                      <path d="M9 4v4h6V4" />
                      <circle cx="12" cy="12" r="1.5" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => { playBeep(280); setActiveBackpackAngle(1); }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeBackpackAngle === 1 ? 'bg-amber-500 text-stone-950 scale-105' : 'bg-stone-900/60 text-stone-400 hover:text-white'}`}
                    title="Side View"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="8" y="4" width="8" height="16" rx="2" />
                      <line x1="8" y1="10" x2="16" y2="10" />
                      <line x1="8" y1="14" x2="16" y2="14" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => { playBeep(300); setActiveBackpackAngle(2); }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeBackpackAngle === 2 ? 'bg-amber-500 text-stone-950 scale-105' : 'bg-stone-900/60 text-stone-400 hover:text-white'}`}
                    title="Harness Tech"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="6" y="4" width="12" height="16" rx="3" />
                      <path d="M6 10c2 0 3 2 3 4M18 10c-2 0-3 2-3 4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive SVG Backpack Art Rendering */}
              <div className="my-6 flex justify-center items-center relative h-64 z-10">
                
                {/* Simulated Shadows & Platform */}
                <div className="absolute bottom-2 w-44 h-5 bg-black/50 filter blur-xl rounded-full" />
                
                {/* 3D Container Rotate & Color Modifier */}
                <div 
                  className="transition-all duration-700 ease-out transform"
                  style={{ 
                    transform: `rotateY(${activeBackpackAngle * 120}deg) scale(1.15)`,
                    perspective: '1000px'
                  }}
                >
                  <svg className="w-48 h-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]" viewBox="0 0 200 200" fill="none">
                    {/* Definitions for Gradients and patterns based on colors chosen */}
                    <defs>
                      <linearGradient id="backpackBody" x1="0%" y1="0%" x2="100%" y2="100%">
                        {backpackColor === 'default' && (
                          <>
                            <stop offset="0%" stopColor="#DFDEDD" />
                            <stop offset="100%" stopColor="#8C8885" />
                          </>
                        )}
                        {backpackColor === 'sand' && (
                          <>
                            <stop offset="0%" stopColor="#E2C9B1" />
                            <stop offset="100%" stopColor="#8B6C51" />
                          </>
                        )}
                        {backpackColor === 'alpine' && (
                          <>
                            <stop offset="0%" stopColor="#2F3E46" />
                            <stop offset="100%" stopColor="#1B2428" />
                          </>
                        )}
                      </linearGradient>
                      <linearGradient id="straps" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2A2827" />
                        <stop offset="100%" stopColor="#121111" />
                      </linearGradient>
                      <linearGradient id="metallicAccents" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#9A3412" />
                      </linearGradient>
                    </defs>

                    {/* Backpack main outline structure */}
                    <path 
                      d="M60,40 C60,25 140,25 140,40 L150,140 C150,165 130,175 100,175 C70,175 50,165 50,140 Z" 
                      fill="url(#backpackBody)" 
                      stroke="#221F1E" 
                      strokeWidth="2"
                    />

                    {/* Outer Compression straps (Varying visualization depending on angle selected) */}
                    {activeBackpackAngle === 0 && (
                      <>
                        {/* Front pocket layout */}
                        <path d="M70,80 C70,60 130,60 130,80 L130,135 C130,145 115,150 100,150 C85,150 70,145 70,135 Z" fill="#2D2A28" opacity="0.65" />
                        <rect x="95" y="45" width="10" height="20" rx="2" fill="url(#metallicAccents)" />
                        
                        {/* Compression side bars */}
                        <rect x="48" y="80" width="10" height="30" rx="3" fill="url(#straps)" />
                        <rect x="142" y="80" width="10" height="30" rx="3" fill="url(#straps)" />
                        
                        {/* Horizontal high-contrast hazard utility stripes */}
                        <line x1="60" y1="110" x2="140" y2="110" stroke="#121111" strokeWidth="5" />
                        <line x1="60" y1="125" x2="140" y2="125" stroke="#121111" strokeWidth="3" />
                        <circle cx="100" cy="110" r="4" fill="#D97706" />
                      </>
                    )}

                    {activeBackpackAngle === 1 && (
                      <>
                        {/* Side pocket & water flask holder */}
                        <path d="M85,55 C85,45 115,45 115,55 L120,135 C120,145 110,155 100,155 C90,155 80,145 80,135 Z" fill="#1C1A19" />
                        {/* Mesh pocket detailing */}
                        <path d="M80,105 C80,105 100,115 120,105 L118,135 C118,140 110,145 100,145 C90,145 82,140 82,135 Z" fill="#D97706" opacity="0.4" />
                        {/* Side strap buckle */}
                        <rect x="75" y="80" width="16" height="6" rx="1" fill="#D97706" />
                        <line x1="75" y1="83" x2="125" y2="83" stroke="#1C1A19" strokeWidth="2" />
                      </>
                    )}

                    {activeBackpackAngle === 2 && (
                      <>
                        {/* Back-pad and Ergonomic Harness visualization */}
                        <path d="M72,42 C80,45 120,45 128,42 C125,75 125,120 135,145 C135,150 120,155 100,155 C80,155 65,150 65,145 C75,120 75,75 72,42 Z" fill="#1C1A19" />
                        
                        {/* Breathable Mesh Lumbar support blocks */}
                        <rect x="80" y="55" width="40" height="22" rx="3" fill="#2E2A28" />
                        <rect x="78" y="85" width="44" height="25" rx="3" fill="#2E2A28" />
                        <rect x="75" y="120" width="50" height="25" rx="4" fill="#3D3734" />
                        
                        {/* Padded Shoulder strap loops */}
                        <path d="M60,50 C50,75 48,110 65,135" stroke="url(#straps)" strokeWidth="10" strokeLinecap="round" fill="none" />
                        <path d="M140,50 C150,75 152,110 135,135" stroke="url(#straps)" strokeWidth="10" strokeLinecap="round" fill="none" />
                      </>
                    )}

                    {/* Premium reflective Brand stamp */}
                    <rect x="94" y="32" width="12" height="3" fill="#1E1B18" />
                  </svg>
                </div>

                {/* Simulated Floating UI Indicators */}
                <div className="absolute left-8 top-12 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-stone-800 text-[10px] text-stone-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
                  <span>Water repellent IPX6</span>
                </div>

                <div className="absolute right-6 bottom-16 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-stone-800 text-[10px] text-stone-300 flex items-center gap-1.5">
                  <Activity size={12} className="text-[#D97706]" />
                  <span>Spine Load Balancer</span>
                </div>
              </div>

              {/* Bottom Row: Controls, Size Selection, Pricing & CTA */}
              <div className="border-t border-stone-800/80 pt-6 flex flex-wrap gap-5 justify-between items-center z-10">
                
                {/* Color Scheme Picker */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">Select Colorway</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => { playBeep(230); setBackpackColor('default'); }}
                      className={`w-8 h-8 rounded-full bg-[#DFDEDD] border-2 transition-all flex items-center justify-center ${backpackColor === 'default' ? 'border-amber-500 scale-110' : 'border-transparent opacity-80'}`}
                      title="Stone White"
                    >
                      {backpackColor === 'default' && <Check size={12} className="text-stone-950 stroke-[3]" />}
                    </button>
                    <button 
                      onClick={() => { playBeep(240); setBackpackColor('sand'); }}
                      className={`w-8 h-8 rounded-full bg-[#D4A373] border-2 transition-all flex items-center justify-center ${backpackColor === 'sand' ? 'border-amber-500 scale-110' : 'border-transparent opacity-80'}`}
                      title="Desert Sand"
                    >
                      {backpackColor === 'sand' && <Check size={12} className="text-stone-950 stroke-[3]" />}
                    </button>
                    <button 
                      onClick={() => { playBeep(250); setBackpackColor('alpine'); }}
                      className={`w-8 h-8 rounded-full bg-[#2F3E46] border-2 transition-all flex items-center justify-center ${backpackColor === 'alpine' ? 'border-amber-500 scale-110' : 'border-transparent opacity-80'}`}
                      title="Alpine Pine"
                    >
                      {backpackColor === 'alpine' && <Check size={12} className="text-stone-100 stroke-[3]" />}
                    </button>
                  </div>
                </div>

                {/* Size Controls */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">Volume capacity</p>
                  <div className="flex items-center gap-1.5 bg-stone-950/60 p-1 rounded-full border border-stone-800">
                    {['M', 'L', 'XL (65L)'].map((size) => (
                      <button
                        key={size}
                        onClick={() => { playBeep(320); setSelectedSize(size); }}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase transition-all ${selectedSize === size ? 'bg-[#32271d] text-amber-500' : 'text-stone-400 hover:text-stone-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Carousel Angles Dots (Interactive) */}
                <div className="flex items-center gap-2 bg-stone-900/80 px-3 py-2 rounded-full border border-stone-800">
                  <button 
                    onClick={() => { playBeep(200); setActiveBackpackAngle((prev) => (prev - 1 + 3) % 3); }}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <span className="text-[10px] font-mono font-bold text-stone-300 tracking-widest px-1">
                    0{activeBackpackAngle + 1} / 03
                  </span>
                  <button 
                    onClick={() => { playBeep(200); setActiveBackpackAngle((prev) => (prev + 1) % 3); }}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>

                {/* Add to Cart Giant Glowing action button */}
                <button 
                  onClick={() => { playBeep(600, 0.25, "sine"); handleAddToCart(); }}
                  className="bg-stone-100 text-stone-950 font-semibold px-6 py-3.5 rounded-full flex items-center gap-3 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 shadow-[0_12px_24px_rgba(255,255,255,0.08)] transform hover:-translate-y-0.5 group active:translate-y-0 cursor-pointer"
                >
                  <div className="flex flex-col items-start leading-none pr-3 border-r border-stone-950/20">
                    <span className="text-[9px] uppercase tracking-wider text-stone-950/70 font-mono">Price</span>
                    <span className="text-sm font-bold">$289.00</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Add to Gear</span>
                  <div className="w-5 h-5 rounded-full bg-stone-950/10 group-hover:bg-stone-950/20 flex items-center justify-center">
                    <Plus size={12} className="stroke-[3]" />
                  </div>
                </button>

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM UTILITY / ECOSYSTEM SELECTOR METADATA BAR */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Simulated VR Universe Ambient Depth Controller */}
          <div className="bg-[#191512]/95 border border-stone-800/80 rounded-[2rem] p-6 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Sliders size={18} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-stone-300 font-bold">Atmosphere Generator</h4>
                <p className="text-[10px] text-stone-500">Render real-time desert elevation environment</p>
              </div>
            </div>

            {/* Depth simulation slider */}
            <div className="flex items-center gap-3 flex-1 min-w-[150px] justify-end">
              <span className="text-[10px] font-mono text-stone-400">ALTITUDE BLUR: {bgBlurAmount}px</span>
              <input 
                type="range" 
                min="0" 
                max="8" 
                value={bgBlurAmount} 
                onChange={(e) => { playBeep(200 + e.target.value * 25, 0.05); setBgBlurAmount(Number(e.target.value)); }}
                className="accent-amber-500 bg-stone-900 border border-stone-800 rounded-lg h-1.5 w-24 cursor-pointer"
              />
            </div>
          </div>

          {/* Interactive 3D Orbit Universe Button */}
          <button 
            onClick={() => { playBeep(380, 0.2); setVrMode(!vrMode); }}
            className={`w-full text-left bg-[#191512]/95 border rounded-[2rem] p-6 backdrop-blur-xl flex items-center justify-between transition-all group ${vrMode ? 'border-amber-500/80 shadow-[0_0_25px_rgba(217,119,6,0.15)]' : 'border-stone-800/80 hover:border-stone-700'}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-500 font-mono text-xs font-bold">{vrMode ? '● ONLINE' : '+ P58'}</span>
              <div>
                <p className="text-[11px] text-stone-400 font-medium">Test products as a 3d objects in our P58 universe</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">VR Simulation: {vrMode ? 'Activated' : 'Standby'}</p>
              </div>
            </div>
            
            <div className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all ${vrMode ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-400 group-hover:text-stone-200'}`}>
              {vrMode ? 'Exit Universe' : '3D Products'}
            </div>
          </button>

        </div>

        {/* -------------------- DEEPER EXPERIENCES / ADVENTURE STORIES -------------------- */}
        
        {/* SECTION HEADER */}
        <div className="mt-24 mb-10 flex flex-wrap justify-between items-end gap-4 border-b border-stone-800/80 pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-mono">Survival Protocol</span>
            <h2 className="text-3xl font-light text-stone-100 tracking-tight mt-1">Ecosystem Gear Integration</h2>
          </div>
          <p className="text-stone-400 text-xs max-w-sm">
            High-tech, lightweight clothing tailored for extreme weather conditions and altitude variance. Real-world durability, tested on high deserts.
          </p>
        </div>

        {/* ECOSYSTEM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-6 backdrop-blur-xl group hover:border-amber-500/40 transition-all flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-[9px] uppercase tracking-widest font-mono text-stone-400">
                  SHELL SYSTEM
                </span>
                <span className="text-xs font-mono text-amber-500">01 / TECH</span>
              </div>
              <h3 className="text-2xl font-light text-stone-100 tracking-tight group-hover:text-amber-400 transition-colors">
                Anorak Storm Guard
              </h3>
              <p className="text-stone-400 text-xs mt-3 leading-relaxed">
                Constructed with recycled high-density synthetic fiber. Windproof, waterproof up to 20,000 mm, with double taped zippers.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800/60 flex justify-between items-center">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-stone-500">Rating</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  ))}
                  <span className="text-[10px] font-mono text-stone-300 ml-1">5.0</span>
                </div>
              </div>
              <button 
                onClick={() => { playBeep(400); handleAddToCart(); }} 
                className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#191512]/90 border border-stone-800/80 rounded-[2.2rem] p-6 backdrop-blur-xl group hover:border-amber-500/40 transition-all flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-[9px] uppercase tracking-widest font-mono text-stone-400">
                  MOBILITY BASE
                </span>
                <span className="text-xs font-mono text-amber-500">02 / TECH</span>
              </div>
              <h3 className="text-2xl font-light text-stone-100 tracking-tight group-hover:text-amber-400 transition-colors">
                Alpine Cargo Pants
              </h3>
              <p className="text-stone-400 text-xs mt-3 leading-relaxed">
                Durable micro-ripstop panels integrated with elastic knees to provide extreme mountain scrambling flexibility.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800/60 flex justify-between items-center">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-stone-500">Rating</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === 5 ? 'bg-stone-700' : 'bg-amber-500'}`} />
                  ))}
                  <span className="text-[10px] font-mono text-stone-300 ml-1">4.8</span>
                </div>
              </div>
              <button 
                onClick={() => { playBeep(420); handleAddToCart(); }} 
                className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Card 3 (Premium feature with custom design) */}
          <div className="bg-gradient-to-br from-[#1E150F] to-[#120F0D] border border-amber-600/20 rounded-[2.2rem] p-6 backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/60 transition-all flex flex-col justify-between min-h-[340px]">
            
            {/* Soft decorative glow inside the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full filter blur-2xl" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[9px] uppercase tracking-widest font-mono text-amber-500">
                  LOCKED IN HEAT
                </span>
                <span className="text-xs font-mono text-amber-400">03 / PREMIUM</span>
              </div>
              <h3 className="text-2xl font-light text-stone-100 tracking-tight group-hover:text-amber-400 transition-colors">
                Trek-800 Down Jacket
              </h3>
              <p className="text-stone-300/80 text-xs mt-3 leading-relaxed">
                Ethically sourced 800-fill goose down insulation with aerospace heat reflection technology integrated into the internal lining.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-800/60 flex justify-between items-center">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-stone-500">Rating</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  ))}
                  <span className="text-[10px] font-mono text-stone-300 ml-1">5.0 (VOTED BEST)</span>
                </div>
              </div>
              <button 
                onClick={() => { playBeep(440); handleAddToCart(); }} 
                className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <Plus size={14} className="stroke-[3]" />
              </button>
            </div>
          </div>

        </div>

        {/* -------------------- INTERACTIVE BRAND STORY / SENSOR CORNER -------------------- */}
        <div className="mt-20 bg-[#191512]/80 border border-stone-800/80 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full filter blur-[100px] mix-blend-screen pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-xs uppercase tracking-widest text-stone-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <span>SYSTEM PERFORMANCE</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light text-stone-100 tracking-tight leading-tight">
                Designed to defy the <span className="text-amber-500 italic font-normal">gravitational limits</span> of standard gear.
              </h2>
              
              <p className="text-stone-400 text-sm leading-relaxed max-w-xl">
                Every stitch on P58 collection clothing passes a double durability test in simulated desert winds. Backed by real survivalists, our goal is high portability without weight overhead.
              </p>

              {/* Stats Layout */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                  <p className="text-2xl font-bold text-stone-100 font-mono">1.2kg</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-500 mt-1">TOTAL FRAME WT.</p>
                </div>
                <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                  <p className="text-2xl font-bold text-stone-100 font-mono">98%</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-500 mt-1">HEAT STORAGE RATE</p>
                </div>
                <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
                  <p className="text-2xl font-bold text-stone-100 font-mono">IPX8</p>
                  <p className="text-[9px] uppercase tracking-widest text-stone-500 mt-1">WEATHER SEAL</p>
                </div>
              </div>
            </div>

            {/* Simulated Interactive VR HUD Console */}
            <div className="lg:col-span-5 bg-stone-950/80 rounded-3xl p-6 border border-stone-800 shadow-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-amber-500" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">P58 HUD Controller</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                </div>
              </div>

              {/* HUD Active Metrics */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-stone-500 mb-1">
                    <span>ALTITUDE PRESSURE LIMIT</span>
                    <span className="text-stone-300">4,800m</span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-stone-500 mb-1">
                    <span>THERMAL EFFICIENCY</span>
                    <span className="text-stone-300">OPTIMAL</span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-stone-500 mb-1">
                    <span>OXYGEN RATIO</span>
                    <span className="text-stone-300">21.4%</span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full w-[70%]"></div>
                  </div>
                </div>
              </div>

              {/* VR Activation Button */}
              <button 
                onClick={() => { playBeep(520, 0.3, "sine"); setVrMode(!vrMode); }}
                className={`w-full py-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${vrMode ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-300 border border-stone-800 hover:border-amber-500/50 hover:text-white'}`}
              >
                <Eye size={14} className={vrMode ? "animate-pulse" : ""} />
                {vrMode ? 'DISENGAGE SURVIVAL HUD' : 'LAUNCH SURVIVAL HUD'}
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* -------------------- LIVE TOAST / MINI CART INTEGRATION -------------------- */}
      {showCartToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-stone-900 border border-amber-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-bounce">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <Check size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Item Added to Expedition Bag</h4>
                <p className="text-[10px] text-stone-400 mt-1">Your item is prepared inside the current P58 session slot.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowCartToast(false)}
              className="text-stone-500 hover:text-stone-200"
            >
              <X size={14} />
            </button>
          </div>
          <div className="mt-3 pt-3 border-t border-stone-800 flex justify-between items-center text-[10px] font-mono">
            <span className="text-stone-500">Total Items: {cartCount}</span>
            <span className="text-amber-500 font-bold hover:underline cursor-pointer" onClick={() => { playBeep(440); setShowCartToast(false); }}>
              View Bag →
            </span>
          </div>
        </div>
      )}

      {/* -------------------- PREMIUM FOOTER -------------------- */}
      <footer className="bg-[#090706] border-t border-stone-900 pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Logo, Copyright & Socials */}
            <div className="space-y-4">
              <span className="text-4xl font-light tracking-tighter text-stone-100 font-sans">
                P58<span className="text-amber-500 text-xs font-mono font-bold tracking-widest ml-1">STUDIO</span>
              </span>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                Conceptual interface exploring high altitude and technical modular apparel design paradigms.
              </p>
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer text-xs">TW</span>
                <span className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer text-xs">IG</span>
                <span className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer text-xs">YT</span>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">Gear Ecosystem</h4>
              <ul className="space-y-2.5 text-xs text-stone-500">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Tactical Backpacks</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Stormproof Jackets</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Modular Harness Tech</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Scouting Boots</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-4">Interface Space</h4>
              <ul className="space-y-2.5 text-xs text-stone-500">
                <li><a href="#" className="hover:text-amber-400 transition-colors">VR Sandbox Experience</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Durability Reports</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Altitude Simulation</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">F/W Concept Catalog</a></li>
              </ul>
            </div>

            {/* Col 4: Real-time system monitoring */}
            <div className="bg-stone-950/70 p-5 rounded-2xl border border-stone-900 space-y-3">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span>System Status</span>
              </div>
              <p className="text-[10px] text-stone-500 leading-relaxed">
                P58 environment and telemetry are running on WebVR frameworks. Colorways and pricing simulate active inventory metrics.
              </p>
              <div className="flex justify-between items-center text-[9px] font-mono text-amber-500">
                <span>VER: 2.50.3</span>
                <span>DESERT STAGE: OK</span>
              </div>
            </div>

          </div>

          <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono text-stone-600">
              © 2026 PXDX Studio. All rights reserved. Generated Concept.
            </p>
            <div className="flex gap-4 text-[10px] font-mono text-stone-600">
              <a href="#" className="hover:text-stone-400">Terms of Service</a>
              <span>/</span>
              <a href="#" className="hover:text-stone-400">Privacy Policy</a>
              <span>/</span>
              <a href="#" className="hover:text-stone-400">Contact Protocol</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
4