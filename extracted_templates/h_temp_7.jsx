import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  ChevronRight, 
  Clock, 
  Shield, 
  Zap, 
  Sliders, 
  Cpu, 
  Compass, 
  Star, 
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Volume2,
  VolumeX,
  Smartphone,
  CheckCircle2,
  Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('precision');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [customizerColor, setCustomizerColor] = useState('orange'); // orange, black, silver
  const [isMuted, setIsMuted] = useState(true);
  const [notification, setNotification] = useState(null);

  // Show a custom toast/notification helper
  const triggerNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const galleryItems = [
    {
      id: 1,
      title: "EXPLORER EDITION",
      subtitle: "THROUGH THE LENS | 41-43MM",
      tag: "EXPLORER SERIES",
      color: "bg-orange-500",
      imageColor: "#FF4500",
      description: "Delighting you always with high-contrast active dials and aerospace grade titanium casings."
    },
    {
      id: 2,
      title: "STEALTH NOIRE",
      subtitle: "TACTICAL PRECISION | 44MM",
      tag: "PRECISION SERIES",
      color: "bg-neutral-900",
      imageColor: "#171717",
      description: "An absolute monolith on the wrist. Brushed metal hardware with carbon fiber composite details."
    },
    {
      id: 3,
      title: "CHRONO MONACO",
      subtitle: "ELEGANT RACING | 42MM",
      tag: "ELEGANCE SERIES",
      color: "bg-amber-600",
      imageColor: "#D97706",
      description: "Polished luxury with a heritage aesthetic designed for precise timing under heavy performance."
    }
  ];

  const seriesTabs = [
    { id: 'precision', label: 'PRECISION SERIES', desc: 'Crafted for absolute accuracy and millisecond calibration under harsh conditions.' },
    { id: 'elegance', label: 'ELEGANCE SERIES', desc: 'Sleek luxury silhouettes paired with hand-finished bespoke straps.' },
    { id: 'explorer', label: 'EXPLORER SERIES', desc: 'All-terrain companions containing state-of-the-art sensory arrays.' },
    { id: 'fusion', label: 'FUSION SERIES', desc: 'A gorgeous conceptual playground combining liquid polymers with raw carbon.' }
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-neutral-950 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden antialiased">
      
      {/* Dynamic Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-neutral-800 animate-bounce">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
          <span className="text-xs font-mono tracking-widest uppercase">{notification}</span>
        </div>
      )}

      {/* --- PREMIUM NAVIGATION HEADER --- */}
      <header className="sticky top-0 z-40 bg-[#F6F6F6]/90 backdrop-blur-md border-b border-neutral-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo with exact styling mood */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-lg tracking-tighter">
              W
            </div>
            <span className="font-mono text-xs tracking-[0.25em] font-extrabold text-neutral-900 uppercase">
              WATCH PRO <span className="text-orange-500">③</span>
            </span>
          </div>

          {/* Nav Links - High Density & Technical Style */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#hero" className="text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">HOME</a>
            <a href="#philosophy" className="text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">ABOUT</a>
            <a href="#products" className="text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">PRODUCTS</a>
            <a href="#gallery" className="text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">GALLERY</a>
            <a href="#customizer" className="text-xs font-mono font-bold tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">CUSTOMIZE</a>
          </nav>

          {/* Action Button Segment */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => triggerNotification("CATALOGUE DOWNLOADED")}
              className="flex items-center space-x-2 bg-neutral-900 hover:bg-orange-600 text-white text-xs font-mono font-bold tracking-widest px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-neutral-950/10"
            >
              <span>SEE FULL CATALOGUE</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400" />
            </button>
            <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center bg-white">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F6F6F6] border-b border-neutral-200 px-6 py-8 space-y-6 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono font-bold tracking-widest text-neutral-900">HOME</a>
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono font-bold tracking-widest text-neutral-900">ABOUT</a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono font-bold tracking-widest text-neutral-900">PRODUCTS</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono font-bold tracking-widest text-neutral-900">GALLERY</a>
              <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono font-bold tracking-widest text-neutral-900">CUSTOMIZE</a>
            </div>
            <button 
              onClick={() => {
                triggerNotification("CATALOGUE DOWNLOADED");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-neutral-900 text-white text-xs font-mono font-bold tracking-widest py-4 rounded-xl"
            >
              <span>SEE FULL CATALOGUE</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        )}
      </header>

      {/* --- HERO SECTION: WATCH PRO-3 --- */}
      <section id="hero" className="relative pt-8 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        
        {/* Subtle decorative background watermarks */}
        <div className="absolute right-0 top-1/4 -z-10 text-[12vw] font-black text-neutral-200/40 select-none tracking-tighter pointer-events-none">
          CHRONO 2026
        </div>
        
        {/* Technical Header Block with barcode aesthetic */}
        <div className="flex flex-col md:flex-row items-start justify-between border-b border-neutral-200 pb-8 mb-12">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {/* Mock Technical Barcode */}
            <div className="flex flex-col">
              <div className="flex space-x-[2px] items-end h-6 opacity-80">
                <div className="w-[1px] h-full bg-neutral-900"></div>
                <div className="w-[3px] h-full bg-neutral-900"></div>
                <div className="w-[1px] h-3 bg-neutral-900"></div>
                <div className="w-[2px] h-full bg-neutral-900"></div>
                <div className="w-[1px] h-5 bg-neutral-900"></div>
                <div className="w-[4px] h-full bg-neutral-900"></div>
                <div className="w-[1px] h-2 bg-neutral-900"></div>
                <div className="w-[2px] h-full bg-neutral-900"></div>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 mt-1 uppercase">DELIVERING ANALOGUE 2026</span>
            </div>
          </div>
          
          <div className="max-w-xs">
            <p className="text-xs font-mono uppercase text-neutral-500 leading-relaxed">
              BRING YOUR ANALOGUE EMBRACE. THE # EVEN-3 JOURNEY TODAY. RECONCILED WITH CHRONOGRAPH ENGINE.
            </p>
          </div>
        </div>

        {/* Hero Title & Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Typography Block */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-1">
              <h2 className="text-xs font-mono tracking-[0.3em] text-orange-500 font-extrabold uppercase">NEXT GENERATION TIMING</h2>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-950 leading-none">
                WATCH <br className="hidden md:block" />
                <span className="text-neutral-900 block md:inline">PRO </span>
                <span className="inline-flex items-center justify-center bg-orange-500 text-white rounded-2xl px-4 py-1 rotate-[-3deg] border-2 border-neutral-950 text-4xl md:text-6xl align-middle mt-2">
                  E-3
                </span>
              </h1>
            </div>

            <p className="text-neutral-600 text-base md:text-lg max-w-md leading-relaxed">
              A radical synthesis of industrial design and high-cadence smart mechanics. Designed to dominate space and time, calibrated with an uncompromising signal orange vulcanized strap.
            </p>

            {/* Quick Interactive Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-sm">
                <span className="text-xs font-mono text-neutral-400 block uppercase">CALIBRATION</span>
                <span className="text-xl font-bold text-neutral-900">99.98% ACC</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-sm">
                <span className="text-xs font-mono text-neutral-400 block uppercase">CHASSIS</span>
                <span className="text-xl font-bold text-neutral-900">TITANIUM 5</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#customizer" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-mono font-bold tracking-widest px-8 py-4 rounded-full transition-all flex items-center space-x-2 shadow-lg shadow-orange-500/20"
              >
                <span>BUILD YOUR PRO-3</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <button 
                onClick={() => triggerNotification("SYSTEM CHECK PASSED - READY TO PAIR")}
                className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-mono font-bold tracking-widest px-6 py-4 rounded-full transition-all"
              >
                DIAGNOSTIC TEST
              </button>
            </div>
          </div>

          {/* Center Column: Iconic Watch Rendering in a Hero Space */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative order-1 lg:order-2 py-6 lg:py-0">
            {/* Glowing background radial aura */}
            <div className="absolute w-[80%] h-[80%] bg-radial-gradient from-orange-500/10 via-transparent to-transparent -z-20 rounded-full blur-3xl"></div>
            
            {/* Absolute positioning watch badges */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm border border-neutral-200/80 px-4 py-2 rounded-2xl shadow-sm z-10 animate-pulse hidden md:block">
              <span className="text-[10px] font-mono tracking-widest text-orange-500 uppercase block font-bold">STATE REVOLUTION</span>
              <span className="text-xs font-bold text-neutral-900">OLED MULTI-TOUCH</span>
            </div>

            <div className="absolute bottom-12 right-4 bg-neutral-900 text-white px-4 py-3 rounded-2xl shadow-xl z-10 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-mono tracking-widest uppercase">GPS CONSTELATION CONNECTED</span>
              </div>
            </div>

            {/* High-fidelity Vector SVG Art of the Watch PRO-3 (to guarantee premium crispness without broken URLs) */}
            <div className="w-full max-w-[420px] drop-shadow-[0_25px_50px_rgba(249,115,22,0.18)] transition-transform duration-500 hover:scale-[1.03]">
              <svg viewBox="0 0 400 500" className="w-full h-auto">
                <defs>
                  <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF5722" />
                    <stop offset="100%" stopColor="#E64A19" />
                  </linearGradient>
                  <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A4A4A" />
                    <stop offset="50%" stopColor="#1A1A1A" />
                    <stop offset="100%" stopColor="#2E2E2E" />
                  </linearGradient>
                  <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E1E24" />
                    <stop offset="100%" stopColor="#0B0B0D" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Orange Vulcanized Straps - Top and Bottom */}
                {/* Top Strap with textured ridges */}
                <path d="M160,110 L160,20 C160,10 240,10 240,20 L240,110 Z" fill="url(#strapGrad)" />
                <line x1="170" y1="40" x2="230" y2="40" stroke="#D84315" strokeWidth="3" strokeLinecap="round" />
                <line x1="170" y1="60" x2="230" y2="60" stroke="#D84315" strokeWidth="3" strokeLinecap="round" />
                <line x1="170" y1="80" x2="230" y2="80" stroke="#D84315" strokeWidth="3" strokeLinecap="round" />

                {/* Bottom Strap with sizing holes */}
                <path d="M160,390 L160,480 C160,495 240,495 240,480 L240,390 Z" fill="url(#strapGrad)" />
                <circle cx="200" cy="415" r="4" fill="#D84315" />
                <circle cx="200" cy="435" r="4" fill="#D84315" />
                <circle cx="200" cy="455" r="4" fill="#6A1B02" /> {/* Buckled hole */}
                <circle cx="200" cy="475" r="4" fill="#D84315" />

                {/* Chrono physical crown and side action pusher buttons */}
                <rect x="295" y="210" width="12" height="30" rx="4" fill="#2E2E2E" />
                <rect x="295" y="260" width="10" height="16" rx="3" fill="#FF5722" />
                <rect x="295" y="174" width="10" height="16" rx="3" fill="#1A1A1A" />

                {/* Titanium Case Bezel */}
                <rect x="100" y="110" width="200" height="280" rx="42" fill="url(#bezelGrad)" stroke="#5A5A5A" strokeWidth="2" />
                {/* Metallic Accent Chamfer */}
                <rect x="105" y="115" width="190" height="270" rx="37" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.15" />

                {/* Screen Interface Frame */}
                <rect x="114" y="124" width="172" height="252" rx="30" fill="url(#screenGrad)" />

                {/* Active Watch Face UI Layout */}
                {/* Orange ambient outer dial ring */}
                <rect x="124" y="134" width="152" height="232" rx="22" fill="none" stroke="#FF5722" strokeWidth="1" strokeOpacity="0.4" />

                {/* Small Tech Grids */}
                <line x1="200" y1="134" x2="200" y2="144" stroke="#FF5722" strokeWidth="2" />
                <line x1="200" y1="356" x2="200" y2="366" stroke="#FF5722" strokeWidth="2" />

                {/* Central Clean Minimalist Analogue Dial Accent */}
                <circle cx="200" cy="240" r="70" fill="#15151A" stroke="#2A2A35" strokeWidth="1" />
                
                {/* Dial Numbers */}
                <text x="200" y="192" fill="#888" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">12</text>
                <text x="254" y="243" fill="#888" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">03</text>
                <text x="200" y="295" fill="#888" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">06</text>
                <text x="146" y="243" fill="#888" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">09</text>

                {/* Smooth sweeping watch hands */}
                {/* Hour Hand */}
                <line x1="200" y1="240" x2="232" y2="218" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                {/* Minute Hand */}
                <line x1="200" y1="240" x2="200" y2="182" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                {/* Sweeping Seconds Hand (Orange, extra long) */}
                <line x1="200" y1="240" x2="160" y2="275" stroke="#FF5722" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="200" cy="240" r="5" fill="#FF5722" />
                <circle cx="200" cy="240" r="2" fill="#FFFFFF" />

                {/* Futuristic UI elements on Screen */}
                <text x="200" y="325" fill="#FF5722" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold" letterSpacing="2" filter="url(#glow)">10:15 PM</text>
                <text x="200" y="340" fill="#99A" fontSize="8" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">SECURE LATENCY // ALT 412M</text>

                {/* Small Progress Arc */}
                <path d="M 170 160 A 40 40 0 0 1 230 160" fill="none" stroke="#FF5722" strokeWidth="3" strokeLinecap="round" />
                <text x="200" y="152" fill="#FFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BATTERY 94%</text>
              </svg>
            </div>

            {/* Micro Details Indicator */}
            <div className="mt-4 flex items-center space-x-6 text-xs font-mono text-neutral-500">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></span>SHOCKPROOF 10G</span>
              <span>•</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mr-2"></span>48H POWER BLOCK</span>
            </div>
          </div>

        </div>

      </section>

      {/* --- SECTION 2: LUXURY MEETS PRECISION (BENTO GRID STYLE) --- */}
      <section id="philosophy" className="py-24 bg-neutral-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Block with high contrast typography */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-orange-400 tracking-[0.3em] font-extrabold block uppercase mb-3">ENGINEERING PARADIGM</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                LUXURY MEETS <br />
                <span className="text-orange-500">PRECISION.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-neutral-400 font-mono text-xs uppercase leading-relaxed">
                WE BELIEVE IN EXTRAORDINARY CALIBRATION. BY REMOVING TRADITIONAL WATCH CONSTRAINTS, WE CONSTRUCT A SEAMLESS VIRTUAL ENGINE HOUSED IN AEROSPACE METALLURGY.
              </p>
            </div>
          </div>

          {/* Premium Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Box 1: Orange Gradient Visual Feature Case */}
            <div className="md:col-span-8 bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[380px]">
              {/* Decorative graphic background lines */}
              <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Glowing Orb Overlay */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>

              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono uppercase bg-white/20 text-white font-extrabold px-3 py-1 rounded-full backdrop-blur-sm">
                  NEW HORIZON
                </span>
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="z-10 mt-12 md:mt-0">
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 max-w-lg leading-tight">
                  EXPLORING FOREVER THROUGH THE CUSTOM LENS STRAPS.
                </h3>
                <p className="text-white/80 font-mono text-xs uppercase max-w-md tracking-wider">
                  41-43MM interchangeable modular bezel locks to support custom high altitude sport tracking environments.
                </p>
              </div>
            </div>

            {/* Box 2: Montblanc Minimalist Dark Aesthetic Code Card */}
            <div className="md:col-span-4 bg-neutral-800 rounded-3xl p-8 flex flex-col justify-between border border-neutral-700/60 hover:border-orange-500/50 transition-colors duration-300">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">CHASSIS 01</span>
                </div>
                <span className="text-[10px] font-mono bg-neutral-900 text-neutral-400 px-2 py-1 rounded">2026 ENG</span>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">MONTBLANC VIBE</h3>
                <p className="text-xs font-mono text-neutral-400 uppercase leading-relaxed">
                  DELIGHTING YOU ALWAYS WITH A STEADY HARMONIC RESONANCE RATIO OF 1:1.618.
                </p>
              </div>

              <div className="pt-8 border-t border-neutral-700/60 mt-6 flex justify-between items-center">
                <span className="text-sm font-bold tracking-widest font-mono text-white">PRECISION</span>
                <span className="text-xs text-orange-400 font-mono font-bold">1/1000th SEC</span>
              </div>
            </div>

            {/* Box 3: Technical Spec Breakdown Card */}
            <div className="md:col-span-4 bg-neutral-950 rounded-3xl p-8 flex flex-col justify-between border border-neutral-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
              
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight">THE BIOMETRIC PULSE ENGINE</h3>
                <p className="text-neutral-400 text-xs font-mono uppercase leading-relaxed">
                  Realtime heart-rate index monitoring accompanied with customized threshold audio warnings.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center">
                <span className="text-xs font-mono text-neutral-500">LATENCY PROFILE</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">0.02 MS RATE</span>
              </div>
            </div>

            {/* Box 4: Bold Premium Call To Action Discover */}
            <div className="md:col-span-8 bg-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-700/60">
              <div className="space-y-4 max-w-md">
                <span className="text-orange-500 text-xs font-mono font-bold uppercase tracking-widest block">EFFICIENCY RATIO</span>
                <h3 className="text-3xl font-black uppercase tracking-tight">
                  DISCOVER YOUR 99% EFFECTIVE WATCH PRO.
                </h3>
                <p className="text-neutral-400 text-xs font-mono uppercase">
                  Calibrated across simulated environments of up to 5000 meters above sea level.
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col justify-center items-center">
                <button 
                  onClick={() => triggerNotification("ORDER SEQUENCE INITIALIZED")}
                  className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-widest px-8 py-5 rounded-full flex items-center justify-center space-x-3 transition-transform hover:scale-[1.02]"
                >
                  <span>ORDER NOW</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
                <span className="text-[10px] font-mono text-neutral-500 mt-2 uppercase">SHIPS WORLDWIDE IN 48 HOURS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 3: INTERACTIVE DYNAMIC PRODUCTS TAB EXPLORER --- */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-orange-500 tracking-[0.3em] font-extrabold uppercase block mb-3">CURATED SELECTIONS</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-950 uppercase">
            CHOOSE YOUR SIGNATURE FLAVOR
          </h2>
          <p className="text-neutral-500 text-sm font-mono uppercase mt-4">
            Four specialized variations crafted directly for distinct operational environments.
          </p>
        </div>

        {/* Dynamic Series Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {seriesTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                triggerNotification(`SWITCHED TO ${tab.label}`);
              }}
              className={`px-6 py-3 rounded-full text-xs font-mono font-bold tracking-widest transition-all uppercase duration-300 border ${
                activeTab === tab.id 
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-lg' 
                  : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Panel Display with highly integrated visual aesthetics */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden p-8 md:p-12 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Watch Mock with specific accents based on selected series */}
            <div className="flex justify-center relative py-6">
              
              {/* Outer decorative halo */}
              <div className="absolute w-72 h-72 border border-dashed border-neutral-200 rounded-full animate-spin-slow pointer-events-none"></div>

              {/* High-fidelity Vector SVG for the Active Tab */}
              <div className="w-full max-w-[280px] drop-shadow-xl z-10 transition-all duration-500">
                <svg viewBox="0 0 300 400" className="w-full h-auto">
                  <rect x="110" y="10" width="80" height="100" fill={
                    activeTab === 'precision' ? '#FF5722' : 
                    activeTab === 'elegance' ? '#171717' : 
                    activeTab === 'explorer' ? '#0284C7' : '#D97706'
                  } rx="8" />
                  <rect x="110" y="290" width="80" height="100" fill={
                    activeTab === 'precision' ? '#FF5722' : 
                    activeTab === 'elegance' ? '#171717' : 
                    activeTab === 'explorer' ? '#0284C7' : '#D97706'
                  } rx="8" />
                  {/* Case */}
                  <rect x="70" y="90" width="160" height="220" rx="30" fill="#2E2E2E" stroke="#111" strokeWidth="4" />
                  {/* Screen */}
                  <rect x="80" y="100" width="140" height="200" rx="20" fill="#15151A" />
                  
                  {/* Tab Specific Interface Dial */}
                  {activeTab === 'precision' && (
                    <>
                      <circle cx="150" cy="200" r="50" fill="none" stroke="#FF5722" strokeWidth="2" />
                      <line x1="150" y1="200" x2="150" y2="160" stroke="#FFF" strokeWidth="3" />
                      <line x1="150" y1="200" x2="185" y2="200" stroke="#FF5722" strokeWidth="1.5" />
                      <text x="150" y="270" fill="#FFF" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CHRONO-M1</text>
                    </>
                  )}
                  {activeTab === 'elegance' && (
                    <>
                      <circle cx="150" cy="200" r="45" fill="none" stroke="#FFF" strokeWidth="1" strokeDasharray="4" />
                      <line x1="150" y1="200" x2="175" y2="175" stroke="#D4AF37" strokeWidth="2" />
                      <line x1="150" y1="200" x2="150" y2="155" stroke="#FFF" strokeWidth="2" />
                      <text x="150" y="270" fill="#D4AF37" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLASSIC-E</text>
                    </>
                  )}
                  {activeTab === 'explorer' && (
                    <>
                      <circle cx="150" cy="200" r="55" fill="none" stroke="#0284C7" strokeWidth="3" />
                      <text x="150" y="190" fill="#0284C7" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">N 35°</text>
                      <text x="150" y="215" fill="#FFF" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">W 112°</text>
                      <text x="150" y="270" fill="#888" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ALT COMPASS</text>
                    </>
                  )}
                  {activeTab === 'fusion' && (
                    <>
                      <rect x="110" y="160" width="80" height="80" rx="10" fill="none" stroke="#D97706" strokeWidth="2" />
                      <circle cx="150" cy="200" r="25" fill="#D97706" fillOpacity="0.2" />
                      <line x1="150" y1="200" x2="150" y2="180" stroke="#FFF" strokeWidth="2" />
                      <text x="150" y="270" fill="#D97706" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">HYBRID-FS</text>
                    </>
                  )}
                </svg>
              </div>
            </div>

            {/* Spec Details Column */}
            <div className="space-y-6">
              <span className="text-xs font-mono text-orange-500 font-extrabold tracking-widest uppercase">
                // ACTIVE SPEC PROFILE
              </span>
              
              <h3 className="text-3xl font-black text-neutral-900 uppercase">
                {seriesTabs.find(t => t.id === activeTab)?.label}
              </h3>
              
              <p className="text-neutral-600 text-sm uppercase font-mono leading-relaxed">
                {seriesTabs.find(t => t.id === activeTab)?.desc}
              </p>

              <div className="space-y-4 border-t border-neutral-100 pt-6">
                <div className="flex justify-between items-center py-2 border-b border-neutral-500/10">
                  <span className="text-xs font-mono text-neutral-500 uppercase">MODULE THICKNESS</span>
                  <span className="text-xs font-mono font-bold text-neutral-900">9.8 MILLIMETERS</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-500/10">
                  <span className="text-xs font-mono text-neutral-500 uppercase">OPERATIONAL BANDWIDTH</span>
                  <span className="text-xs font-mono font-bold text-neutral-900">LTE-5G DIRECT BAND</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-500/10">
                  <span className="text-xs font-mono text-neutral-500 uppercase">ACCELEROMETER</span>
                  <span className="text-xs font-mono font-bold text-neutral-900">9-AXIS VECTOR MOTION</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase">WATERPROOF DEPTH</span>
                  <span className="text-xs font-mono font-bold text-neutral-900">100 METERS ISO 6425</span>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <button 
                  onClick={() => triggerNotification(`PRE-ORDER REGISTERED: ${seriesTabs.find(t => t.id === activeTab)?.label}`)}
                  className="bg-neutral-900 hover:bg-orange-500 text-white font-mono text-xs font-bold tracking-widest px-8 py-4 rounded-xl transition-all"
                >
                  PRE-ORDER SPEC
                </button>
                <button 
                  onClick={() => triggerNotification("TECHNICAL SCHEMA DOWNLOADED")}
                  className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-200 font-mono text-xs font-bold tracking-widest px-6 py-4 rounded-xl transition-all"
                >
                  DOWNLOAD BLUEPRINT
                </button>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* --- SECTION 4: HORIZONTAL GALLERY COMPONENT WITH ROTATING INFO --- */}
      <section id="gallery" className="py-24 bg-neutral-100 border-t border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-orange-500 tracking-[0.3em] font-extrabold uppercase block mb-3">GALLERY CHRONICLES</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 uppercase">
                OUR GALLERY
              </h2>
              <p className="text-neutral-500 text-sm font-mono uppercase mt-4 leading-relaxed">
                SHOWCASING AN EXQUISITE RANGE OF TIMEPIECES THAT BLEND INNOVATION, PRECISION, AND MODERN SPORT CULTURE. EVERY TIMEPIECE IS A TESTAMENT TO ARTISTRY.
              </p>
            </div>
            <div>
              <button 
                onClick={() => triggerNotification("ENTERING FULL GALLERY MODE")}
                className="bg-neutral-950 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-widest px-6 py-4 rounded-full flex items-center space-x-2 transition-all"
              >
                <span>VIEW ALL CHRONO</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Interactive Rotating Slider Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Rotatable cards menu */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveGalleryIndex(index)}
                  className={`p-6 rounded-3xl cursor-pointer border transition-all duration-300 ${
                    activeGalleryIndex === index 
                      ? 'bg-white border-orange-500/40 shadow-xl scale-[1.02]' 
                      : 'bg-white/40 border-neutral-200/60 hover:bg-white/80'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold">0{item.id} // CONFIG</span>
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-neutral-950 mt-4">{item.title}</h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Right side: Massive Dynamic Display Card */}
            <div className="lg:col-span-8 bg-neutral-900 text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Massive background ambient spotlight */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none transition-colors duration-500" style={{ backgroundColor: galleryItems[activeGalleryIndex].imageColor }}></div>

              <div className="flex justify-between items-start z-10">
                <span className="text-xs font-mono bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest">
                  {galleryItems[activeGalleryIndex].tag}
                </span>
                <span className="text-xs font-mono text-neutral-400">CALIBRATION ISO-9001</span>
              </div>

              {/* Large artistic preview with details */}
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
                <div className="space-y-4">
                  <h3 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {galleryItems[activeGalleryIndex].title}
                  </h3>
                  <p className="text-neutral-400 text-xs font-mono uppercase leading-relaxed">
                    {galleryItems[activeGalleryIndex].description}
                  </p>
                  <div className="flex items-center space-x-2 text-orange-400 font-mono text-xs font-bold">
                    <span>ACTIVE DIAL MULTIPLEX</span>
                    <span>•</span>
                    <span>99% RATE</span>
                  </div>
                </div>

                {/* Big watch blueprint outline drawing */}
                <div className="flex justify-center">
                  <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-2xl">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#333" strokeWidth="2" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke={galleryItems[activeGalleryIndex].imageColor} strokeWidth="3" className="transition-all duration-500" />
                    <line x1="100" y1="100" x2="140" y2="70" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
                    <line x1="100" y1="100" x2="100" y2="30" stroke={galleryItems[activeGalleryIndex].imageColor} strokeWidth="2" strokeLinecap="round" />
                    <circle cx="100" cy="100" r="8" fill="#FFF" />
                  </svg>
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 z-10">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-white">$499.00 USD</span>
                  <span className="text-xs text-neutral-500 line-through">$649.00</span>
                </div>
                <button 
                  onClick={() => triggerNotification(`ADDED ${galleryItems[activeGalleryIndex].title} TO CHECKOUT`)}
                  className="bg-white hover:bg-orange-500 hover:text-white text-neutral-900 text-xs font-mono font-bold tracking-widest px-6 py-3.5 rounded-xl transition-all"
                >
                  ADD TO WISHLIST
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 5: REAL-TIME CUSTOMIZER LAB --- */}
      <section id="customizer" className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] border border-neutral-200 shadow-2xl overflow-hidden p-8 md:p-16 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Interactive Watch preview based on user options */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <span className="absolute top-0 left-0 text-[10px] font-mono tracking-widest text-neutral-400 border border-neutral-200 px-3 py-1 rounded-full bg-white">
                // VIRTUAL MODEL LAB
              </span>

              {/* Dynamic rendering of watch based on customizerColor state */}
              <div className="w-full max-w-[320px] py-12">
                <svg viewBox="0 0 300 400" className="w-full h-auto drop-shadow-3xl">
                  {/* Selected Strap Color Rendering */}
                  <rect x="110" y="10" width="80" height="100" fill={
                    customizerColor === 'orange' ? '#FF5722' : 
                    customizerColor === 'black' ? '#171717' : '#94A3B8'
                  } rx="12" />
                  <rect x="110" y="290" width="80" height="100" fill={
                    customizerColor === 'orange' ? '#FF5722' : 
                    customizerColor === 'black' ? '#171717' : '#94A3B8'
                  } rx="12" />
                  
                  {/* Heavy Bezel */}
                  <rect x="80" y="90" width="140" height="220" rx="36" fill="#1E1E24" stroke="#000" strokeWidth="5" />
                  <rect x="85" y="95" width="130" height="210" rx="31" fill="#2E2E2E" stroke="#5A5A5A" strokeWidth="2" />
                  
                  {/* Inner Digital Screen */}
                  <rect x="94" y="104" width="112" height="192" rx="22" fill="#09090C" />
                  
                  {/* Display Accents */}
                  <circle cx="150" cy="200" r="45" fill="none" stroke={
                    customizerColor === 'orange' ? '#FF5722' : 
                    customizerColor === 'black' ? '#FFF' : '#38BDF8'
                  } strokeWidth="1.5" />
                  <line x1="150" y1="200" x2="150" y2="165" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />
                  <line x1="150" y1="200" x2="175" y2="200" stroke={
                    customizerColor === 'orange' ? '#FF5722' : 
                    customizerColor === 'black' ? '#999' : '#38BDF8'
                  } strokeWidth="2" strokeLinecap="round" />

                  {/* UI Text indicator inside screen */}
                  <text x="150" y="260" fill="#FFF" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PRO-3 LAB</text>
                  <text x="150" y="275" fill={
                    customizerColor === 'orange' ? '#FF5722' : 
                    customizerColor === 'black' ? '#888' : '#38BDF8'
                  } fontSize="8" fontFamily="monospace" textAnchor="middle">CUSTOM STRAP</text>
                </svg>
              </div>

              {/* Specs Badge */}
              <div className="mt-2 bg-neutral-900 text-white rounded-2xl px-6 py-3 flex items-center space-x-6">
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 block uppercase">BAND TYPE</span>
                  <span className="text-xs font-bold uppercase">{customizerColor} VULCANIZED</span>
                </div>
                <div className="w-[1px] h-6 bg-neutral-800"></div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 block uppercase">ENGINE LATENCY</span>
                  <span className="text-xs font-bold text-orange-400">0.01 MS RATE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Option Controls */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-mono text-orange-500 tracking-[0.3em] font-extrabold block uppercase mb-3">CONFIGURATOR ENGINE</span>
                <h2 className="text-4xl font-black text-neutral-950 uppercase tracking-tight">
                  BUILD YOUR OWN SPECS
                </h2>
                <p className="text-neutral-500 text-sm font-mono uppercase mt-4">
                  Select your physical parameters, watch bezel finishes, and strap colors to pair directly with your lifestyle.
                </p>
              </div>

              {/* Strap Color Selection Option */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block font-bold">1. CHOOSE STRAP TONE</span>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => {
                      setCustomizerColor('orange');
                      triggerNotification("STRAP UPDATED TO SIGNAL ORANGE");
                    }}
                    className={`w-12 h-12 rounded-full bg-orange-500 border-2 transition-transform duration-200 hover:scale-110 ${customizerColor === 'orange' ? 'border-neutral-950 ring-4 ring-orange-200' : 'border-transparent'}`}
                    title="Signal Orange"
                  />
                  <button 
                    onClick={() => {
                      setCustomizerColor('black');
                      triggerNotification("STRAP UPDATED TO STEALTH BLACK");
                    }}
                    className={`w-12 h-12 rounded-full bg-neutral-900 border-2 transition-transform duration-200 hover:scale-110 ${customizerColor === 'black' ? 'border-neutral-900 ring-4 ring-neutral-200' : 'border-transparent'}`}
                    title="Stealth Black"
                  />
                  <button 
                    onClick={() => {
                      setCustomizerColor('silver');
                      triggerNotification("STRAP UPDATED TO SLATE SILVER");
                    }}
                    className={`w-12 h-12 rounded-full bg-slate-400 border-2 transition-transform duration-200 hover:scale-110 ${customizerColor === 'silver' ? 'border-neutral-400 ring-4 ring-slate-200' : 'border-transparent'}`}
                    title="Slate Silver"
                  />
                </div>
              </div>

              {/* Premium Features Checklist */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block font-bold">2. STANDARD HIGHLIGHTS INCLUDED</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>ALERTON WATER LOCK</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>AEROSPACE GRADE 5 CHASSIS</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>RESONANCE RECTIFIER ENGINE</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-neutral-700">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>VULCANIZED STRAP KIT</span>
                  </div>
                </div>
              </div>

              {/* Customizer CTA Block */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => triggerNotification(`SUCCESSFULLY CONFIGURED - ORDER SUBMITTED!`)}
                  className="w-full sm:w-auto bg-neutral-950 hover:bg-orange-500 text-white font-mono text-xs font-bold tracking-widest px-8 py-5 rounded-full transition-all duration-300"
                >
                  LOCK MY DESIGN SPEC
                </button>
                <span className="text-xs font-mono text-neutral-400 uppercase text-center sm:text-left">
                  NO EXTRA CHARGE FOR CUSTOM TONES
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 6: THE ART OF HOROLOGY (INTERACTIVE AUDIO & DIAGNOSTIC SIMULATOR) --- */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        {/* Abstract radar sweep line animation background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-orange-400 tracking-[0.3em] font-extrabold uppercase block">
                AUDIO RECTIFICATION LAB
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
                THE ACOUSTIC <br />
                <span className="text-orange-500">SIGNATURE</span>
              </h2>
              <p className="text-neutral-400 text-xs font-mono uppercase leading-relaxed">
                EVERY WATCH PRO-3 CONTAINS A SYMMETRIC MICRO-SPEAKER DESIGNED TO DELIVER ULTRA-CLEAN ACOUSTIC RESONANCE TO EMULATE HISTORIC HIGH-END PHYSICAL CHRONOMETERS.
              </p>

              {/* Interactive Audio Demo Controller */}
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">CALIBRATED FREQUENCY TEST</span>
                  <span className="text-xs font-mono text-orange-400 font-bold">44.1 KHZ OUTPUT</span>
                </div>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => {
                      setIsMuted(!isMuted);
                      triggerNotification(isMuted ? "DIAGNOSTIC HERTZ ENGINE STARTED" : "MUTED DIAGNOSTIC ENGINE");
                      // Simple browser audio synthesizer test when playing
                      if (isMuted) {
                        try {
                          const ctx = new (window.AudioContext || window.webkitAudioContext)();
                          const osc = ctx.createOscillator();
                          const gain = ctx.createGain();
                          osc.connect(gain);
                          gain.connect(ctx.destination);
                          osc.frequency.setValueAtTime(880, ctx.currentTime); // High pitch watch pip
                          gain.gain.setValueAtTime(0.04, ctx.currentTime);
                          osc.start();
                          gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.15);
                          osc.stop(ctx.currentTime + 0.18);
                        } catch (e) {
                          console.log("Audio synthesis blocked/unsupported");
                        }
                      }
                    }}
                    className={`p-4 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <div>
                    <span className="text-xs font-mono font-bold block">{isMuted ? "TEST SYSTEM PING SIGNAL" : "PING ACTIVE (880 HZ)"}</span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">CLICK TO EMIT SYNTHESIZED PIEZO BEZEL PING</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive terminal graph view */}
            <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold">CALIBRATION CONSTANT LABS</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">RESONANCE_RATIO_v3.0.cpp</span>
              </div>

              {/* Graphic Simulator Waveform Display */}
              <div className="h-44 flex items-end justify-between bg-black/60 rounded-2xl p-4 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-[8px] font-mono text-neutral-500">LIVE CHRONOMETER SPECTRUM ACCURACY</div>
                
                {/* Simulated Waveform Pillars */}
                <div className="w-[4%] bg-orange-500 rounded-t h-[20%] animate-pulse"></div>
                <div className="w-[4%] bg-neutral-800 rounded-t h-[40%]"></div>
                <div className="w-[4%] bg-orange-500 rounded-t h-[75%] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-[4%] bg-neutral-800 rounded-t h-[50%]"></div>
                <div className="w-[4%] bg-orange-500 rounded-t h-[90%] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-[4%] bg-neutral-100 rounded-t h-[30%]"></div>
                <div className="w-[4%] bg-orange-500 rounded-t h-[65%] animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-[4%] bg-neutral-800 rounded-t h-[45%]"></div>
                <div className="w-[4%] bg-orange-500 rounded-t h-[80%] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-[4%] bg-neutral-100 rounded-t h-[35%]"></div>
                <div className="w-[4%] bg-orange-500 rounded-t h-[70%] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-[4%] bg-neutral-800 rounded-t h-[55%]"></div>
                <div className="w-[4%] bg-orange-500 rounded-t h-[40%] animate-pulse"></div>
              </div>

              {/* Technical readout statistics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-black/20 p-4 rounded-xl border border-neutral-800">
                  <span className="text-[9px] font-mono text-neutral-500 block uppercase">OSCILLATION TONE</span>
                  <span className="text-sm font-bold font-mono text-white">28,800 BPH</span>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-neutral-800">
                  <span className="text-[9px] font-mono text-neutral-500 block uppercase">FREQUENCY RATE</span>
                  <span className="text-sm font-bold font-mono text-white">4.0 HZ RATE</span>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-neutral-800 col-span-2 sm:col-span-1">
                  <span className="text-[9px] font-mono text-neutral-500 block uppercase">MICROPHONE SENSITIVITY</span>
                  <span className="text-sm font-bold font-mono text-white">-42 DB ACC</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 7: FULL SPECIFICATION COMPARISON SHEET --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-orange-500 tracking-[0.3em] font-extrabold uppercase block mb-3">TECHNICAL BREAKDOWN</span>
          <h2 className="text-4xl font-black text-neutral-950 uppercase tracking-tight">
            SYSTEM SPECIFICATIONS
          </h2>
          <p className="text-neutral-500 text-sm font-mono uppercase mt-4">
            A comprehensive look under the hood of our modular smart casing.
          </p>
        </div>

        {/* Structured Spec Table grid styled to match premium aesthetic */}
        <div className="bg-white rounded-[2rem] border border-neutral-200/80 shadow-sm overflow-hidden divide-y divide-neutral-200/80">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-neutral-50/50 transition-colors">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-neutral-400 block">// CHASSIS SHELL</span>
              <span className="text-sm font-black uppercase tracking-tight text-neutral-900">CASE CONSTRUCT MATERIAL</span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xs font-mono text-neutral-600 uppercase leading-relaxed">
                Titanium Grade 5 aerospace composition, with molecularly vaporized ceramic shield micro coatings. Excellent corrosion-resistance and bio-compatibility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-neutral-50/50 transition-colors">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-neutral-400 block">// CRYSTAL LENS</span>
              <span className="text-sm font-black uppercase tracking-tight text-neutral-900">DIAL PROTECTION GLASS</span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xs font-mono text-neutral-600 uppercase leading-relaxed">
                Scratchproof synthetic double-domed sapphire glass crystal lens, with anti-reflective visual layer on both internal & external boundaries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-neutral-50/50 transition-colors">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-neutral-400 block">// DIGITAL ENGINE</span>
              <span className="text-sm font-black uppercase tracking-tight text-neutral-900">SMART PROCESSOR RATIOS</span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xs font-mono text-neutral-600 uppercase leading-relaxed">
                ARM Cortex-M33 architecture engine integrated with high altitude pressure sensors, multi-point accelerometer, and secure pairing capabilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-neutral-50/50 transition-colors">
            <div className="md:col-span-4">
              <span className="text-xs font-mono font-bold text-neutral-400 block">// ENERGY POWER CELL</span>
              <span className="text-sm font-black uppercase tracking-tight text-neutral-900">BATTERY RECTIFICATION CAPACITY</span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xs font-mono text-neutral-600 uppercase leading-relaxed">
                380 mAh high performance rechargeable lithium polymer array. Charged with safe custom magnetic alignment dock, supporting zero-to-eighty load in 25 minutes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 8: FAQ ACCORDION SEGMENT --- */}
      <section className="py-24 bg-neutral-900 text-white border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-orange-400 tracking-[0.3em] font-extrabold uppercase block mb-3">SYSTEM GUIDANCE</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              FREQUENTLY ASKED CALIBRATIONS
            </h2>
          </div>

          {/* Simple Clean Accordion Interface Items */}
          <div className="space-y-4">
            
            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700/60">
              <h3 className="text-sm font-mono font-bold tracking-wider text-orange-400 uppercase mb-2">
                Is the signal orange strap interchangeable with other premium options?
              </h3>
              <p className="text-xs font-mono text-neutral-300 uppercase leading-relaxed">
                Yes. The WATCH PRO-3 is built on a modular quick-pin assembly. You can exchange our signal orange strap with any custom NATO strap or traditional premium metals of 22mm width.
              </p>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700/60">
              <h3 className="text-sm font-mono font-bold tracking-wider text-orange-400 uppercase mb-2">
                How does the physical micro acoustic clock simulation operate?
              </h3>
              <p className="text-xs font-mono text-neutral-300 uppercase leading-relaxed">
                An integrated piezoelectric speaker resonates at high efficiency, mirroring mechanical spring movements. You can enable or disable the tactile sound sweep inside settings.
              </p>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700/60">
              <h3 className="text-sm font-mono font-bold tracking-wider text-orange-400 uppercase mb-2">
                What devices are supported for pairing capabilities?
              </h3>
              <p className="text-xs font-mono text-neutral-300 uppercase leading-relaxed">
                The WATCH PRO-3 operates seamlessly with iOS, Android, and select corporate enterprise asset platforms using standard BLE secure protocols.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* --- PREMIUM BRAND FOOTER --- */}
      <footer className="bg-black text-white pt-20 pb-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Main Footer layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
            
            {/* Left Col: Brand and Newsletter Sign Up */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-lg">
                  W
                </div>
                <span className="font-mono text-xs tracking-[0.25em] font-extrabold text-white uppercase">
                  WATCH PRO <span className="text-orange-500">③</span>
                </span>
              </div>
              <p className="text-neutral-400 text-xs font-mono uppercase leading-relaxed max-w-sm">
                Next-gen smart mechanical interfaces built in absolute high frequency calibration. Crafting standard timepieces into high altitude sensory units.
              </p>

              {/* Newsletter Inline Input Box */}
              <div className="space-y-3 pt-4">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                  SUBSCRIBE TO LABORATORY TELEMETRY
                </label>
                <div className="flex bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden p-1.5">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR PROTOCOL EMAIL..." 
                    className="bg-transparent text-xs font-mono px-4 py-2 w-full text-white placeholder-neutral-600 focus:outline-none"
                  />
                  <button 
                    onClick={() => triggerNotification("JOINED INTERNAL DEV LIST")}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>

            {/* Right Col: Categorized links */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase font-bold">CATEGORIES</span>
                <ul className="space-y-2 text-xs font-mono text-neutral-400 uppercase">
                  <li><a href="#products" className="hover:text-white transition-colors">Precision Series</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Elegance Series</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Explorer Series</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Fusion Concept</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase font-bold">DEVELOPMENT</span>
                <ul className="space-y-2 text-xs font-mono text-neutral-400 uppercase">
                  <li><a href="#philosophy" className="hover:text-white transition-colors">Open API Module</a></li>
                  <li><a href="#customizer" className="hover:text-white transition-colors">Firmware SDK</a></li>
                  <li><a href="#gallery" className="hover:text-white transition-colors">Simulations Lab</a></li>
                  <li><button onClick={() => triggerNotification("DIAGNOSTICS ARE CURRENTLY SECURE")} className="hover:text-white transition-colors text-left">Systems Check</button></li>
                </ul>
              </div>

              <div className="space-y-4 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase font-bold">SOCIAL CHANNELS</span>
                <ul className="space-y-2 text-xs font-mono text-neutral-400 uppercase">
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter Feed</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram Lab</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Git Repos</a></li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Copyright Block */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-neutral-500 uppercase gap-4">
            <div>
              <span>© 2026 WATCH PRO-3 INTELLECTUAL LABS INC.</span>
            </div>
            <div className="flex space-x-6">
              <span>DESIGN BY @AZEEMVIRK</span>
              <span>•</span>
              <span>SECURED PARADIGM ENCRYPT</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
8