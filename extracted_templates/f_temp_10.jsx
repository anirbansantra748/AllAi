import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Sparkles, 
  Sliders, 
  ArrowRight, 
  Check, 
  Copy, 
  Maximize2, 
  Grid, 
  SlidersHorizontal,
  ChevronRight,
  Monitor,
  Heart,
  Share2,
  Package,
  FileText,
  Bookmark,
  Bell,
  Eye,
  Settings,
  HelpCircle,
  Code,
  X,
  Play
} from 'lucide-react';

export default function App() {
  // Navigation State: 'landing' or 'system'
  const [currentView, setCurrentView] = useState('landing');
  
  // Customizer State
  const [selectedColor, setSelectedColor] = useState('copper');
  const [selectedMaterial, setSelectedMaterial] = useState('boucle');
  const [sofaSections, setSofaSections] = useState(3);
  
  // Interactive Bento "4 Layers" State
  const [activeLayer, setActiveLayer] = useState('concept');

  // Customizer Gallery Highlight
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Active FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Notification Toast System
  const [toasts, setToasts] = useState([]);
  
  // Design System Explorer States
  const [btnHoverEffect, setBtnHoverEffect] = useState('glow');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedToken, setCopiedToken] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Helper to trigger custom elegant toast
  const triggerToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Copy-to-clipboard simulator for Design System Token
  const copyToken = (tokenText, tokenName) => {
    document.execCommand('copy'); // Fallback capability helper
    navigator.clipboard?.writeText(tokenText);
    setCopiedToken(tokenName);
    triggerToast(`Copied token: ${tokenName}`);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  // Colors mapping matching the inspiration design palette
  const colors = {
    copper: { name: 'Rust Copper', hex: '#D3542B', bg: 'bg-[#D3542B]', border: 'border-[#D3542B]', text: 'text-[#D3542B]', glow: 'shadow-[0_0_20px_rgba(211,84,43,0.4)]' },
    obsidian: { name: 'Obsidian Black', hex: '#1C1C1E', bg: 'bg-[#1C1C1E]', border: 'border-[#3a3a3c]', text: 'text-neutral-400', glow: 'shadow-[0_0_20px_rgba(28,28,30,0.4)]' },
    alabaster: { name: 'Warm Alabaster', hex: '#E6DFD5', bg: 'bg-[#E6DFD5]', border: 'border-[#E6DFD5]', text: 'text-[#E6DFD5]', glow: 'shadow-[0_0_20px_rgba(230,223,213,0.3)]' },
    moss: { name: 'Alpine Moss', hex: '#3E4E43', bg: 'bg-[#3E4E43]', border: 'border-[#3E4E43]', text: 'text-[#3E4E43]', glow: 'shadow-[0_0_20px_rgba(62,78,67,0.4)]' }
  };

  const materials = {
    boucle: { name: 'Bouclé Architectural', costMultiplier: 1.2 },
    nubuck: { name: 'Aniline Nubuck Leather', costMultiplier: 1.6 },
    linen: { name: 'Heavy Loom Belgian Linen', costMultiplier: 1.0 },
    velvet: { name: 'Mohair Velvet', costMultiplier: 1.4 }
  };

  // Live calculated estimates based on user selections
  const basePrice = 4500;
  const currentPrice = Math.round((basePrice * materials[selectedMaterial].costMultiplier) + (sofaSections * 850));
  const guestRetentionScore = Math.round(75 + (sofaSections * 5) + (selectedColor === 'copper' ? 12 : 5));

  return (
    <div className="min-h-screen bg-[#09090A] text-neutral-100 font-sans antialiased relative overflow-x-hidden selection:bg-[#D3542B] selection:text-white">
      {/* Import High-end Architectural & Script Fonts inside App */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400;1,600&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-script { font-family: 'Cormorant Garamond', serif; font-style: italic; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .glow-accent { text-shadow: 0 0 30px rgba(211, 84, 43, 0.45); }
        .border-grid { border-color: rgba(255, 255, 255, 0.07); }
        /* Smooth scrollbar styling */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #09090A; }
        ::-webkit-scrollbar-thumb { background: #1C1C1E; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #D3542B; }
      `}</style>

      {/* Decorative Grid Overlays (Architectural lines of inspiration image) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Cinematic Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[500px] bg-gradient-to-b from-[#D3542B]/10 to-transparent blur-[120px] pointer-events-none z-0"></div>

      {/* Modern Header / Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#09090A]/85 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo inspired by image */}
          <div className="flex items-center space-x-12">
            <a href="#home" className="flex items-center space-x-2 group">
              <span className="text-xl font-extrabold tracking-[0.25em] font-syne text-white transition-all duration-300 group-hover:text-[#D3542B]">
                F<span className="text-[#D3542B]">*</span>RMORA
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#D3542B] border border-[#D3542B]/30 bg-[#D3542B]/5 rounded font-mono">
                STUDIO v2.5
              </span>
            </a>
            
            {/* Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
              <button 
                onClick={() => { setCurrentView('landing'); }}
                className={`transition-colors duration-200 hover:text-white ${currentView === 'landing' ? 'text-white border-b border-[#D3542B] pb-1' : ''}`}
              >
                The Philosophy
              </button>
              <button 
                onClick={() => { setCurrentView('landing'); setTimeout(() => document.getElementById('layers')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                className="transition-colors duration-200 hover:text-white"
              >
                Four Layers
              </button>
              <button 
                onClick={() => { setCurrentView('landing'); setTimeout(() => document.getElementById('configurator')?.scrollIntoView({behavior: 'smooth'}), 100); }}
                className="transition-colors duration-200 hover:text-white"
              >
                Configuration Lab
              </button>
              <button 
                onClick={() => { setCurrentView('system'); }}
                className={`transition-colors duration-200 hover:text-white flex items-center gap-1.5 ${currentView === 'system' ? 'text-white border-b border-[#D3542B] pb-1' : ''}`}
              >
                <Code className="w-3 h-3 text-[#D3542B]" />
                Design System Workspace
              </button>
            </nav>
          </div>

          {/* Action Call to Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                if (currentView === 'landing') {
                  setCurrentView('system');
                  triggerToast('Initialized F*RMORA Component Explorer');
                } else {
                  setCurrentView('landing');
                }
              }} 
              className="text-xs font-semibold tracking-widest uppercase text-neutral-300 hover:text-white transition-all bg-neutral-900 border border-white/10 hover:border-[#D3542B]/40 px-5 py-2.5 rounded-sm"
            >
              {currentView === 'landing' ? 'Inspect Design System' : 'Back to Showcase'}
            </button>
            
            <button 
              onClick={() => {
                setModalOpen(true);
                triggerToast('Opening Consultation Portal');
              }}
              className="relative group overflow-hidden bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-sm transition-all shadow-[0_4px_20px_rgba(211,84,43,0.25)] flex items-center space-x-2"
            >
              <span className="relative z-10">Inquire Object</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Main View Manager */}
      {currentView === 'landing' ? (
        <>
          {/* HERO SECTION - Architectural Typography & Visual Tenants */}
          <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 border-b border-grid">
            <div className="text-center max-w-5xl mx-auto mb-20">
              <p className="text-[#D3542B] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                THE PRINCIPLE OF SCULPTURAL ARCHITECTURE
              </p>
              
              {/* Inspired directly by high-end typography layout "A STRONG OBJECT CHANGES the behavior OF GUESTS" */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-syne text-white uppercase leading-[1.05] mb-6">
                A Strong Object Changes <br />
                <span className="font-script text-[#D3542B] font-light lowercase tracking-normal capitalize mr-3">
                  the behavior
                </span> 
                of guests
              </h1>
              
              <p className="text-neutral-400 font-inter text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wide">
                F*RMORA designs highly intentional, sculptural furniture installations that command attention, manage circulation fluidly, and elevate physical interior volumes into highly premium environments.
              </p>
            </div>

            {/* 4 Cards Row directly representing Row 1 layout from inspiration image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 01 - Visual Attention (Orange solid color block) */}
              <div className="bg-[#D3542B] p-8 rounded-sm text-white flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(211,84,43,0.3)]">
                <div>
                  <span className="font-mono text-xs opacity-60 block mb-6">01</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug">
                    More Visual <br />Attention
                  </h3>
                </div>
                <p className="text-white/80 text-xs leading-relaxed font-inter">
                  A sofa or armchair creates a visual anchor that allows guests to immediately read, comprehend, and remember the emotional depth of the physical layout.
                </p>
              </div>

              {/* Card 02 - Manages Guest Behavior (Semi-translucent visual) */}
              <div className="relative overflow-hidden bg-neutral-900/80 border border-white/5 p-8 rounded-sm flex flex-col justify-between min-h-[300px] group transition-all duration-300 hover:border-[#D3542B]/30">
                {/* Background organic shape mimicking the original floral visual */}
                <div className="absolute right-0 bottom-0 w-44 h-44 opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D3542B]">
                    <path d="M100 0C110.825 58.334 141.666 89.1754 200 100C141.666 110.825 110.825 141.666 100 200C89.1754 141.666 58.334 110.825 0 100C58.334 89.1754 89.1754 58.334 100 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="relative z-10">
                  <span className="font-mono text-xs text-[#D3542B] block mb-6">02</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug text-neutral-100">
                    Manages Guest <br />Behavior
                  </h3>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed font-inter relative z-10">
                  Creates natural flow structures. Guests organically prioritize designated zones, lingering longer and utilizing space precisely as the physical business demands.
                </p>
              </div>

              {/* Card 03 - Content Generation */}
              <div className="bg-neutral-950 border border-white/5 p-8 rounded-sm flex flex-col justify-between min-h-[300px] group transition-all duration-300 hover:border-white/15">
                <div>
                  <span className="font-mono text-xs text-neutral-500 block mb-6">03</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug text-neutral-100">
                    Generates Photo <br />& Video Content
                  </h3>
                </div>
                <div>
                  {/* Miniature abstract modern architectural line */}
                  <div className="h-[2px] w-12 bg-[#D3542B] mb-4"></div>
                  <p className="text-neutral-400 text-xs leading-relaxed font-inter">
                    Furniture becomes a natural photo point. Guests capture and broadcast high-end imagery naturally, serving as organic, viral PR channels for your architecture.
                  </p>
                </div>
              </div>

              {/* Card 04 - Premium Feeling */}
              <div className="bg-[#D3542B]/10 border border-[#D3542B]/30 p-8 rounded-sm flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:bg-[#D3542B]/15 hover:-translate-y-1">
                <div>
                  <span className="font-mono text-xs text-[#D3542B] block mb-6">04</span>
                  <h3 className="text-lg font-bold font-syne uppercase tracking-wider mb-3 leading-snug text-neutral-100">
                    Increases Feeling <br />of Premium
                  </h3>
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed font-inter">
                  One expressive architectural element transforms baseline perception instantly. High-end materials and structural intent justify elevated pricing tiers.
                </p>
              </div>

            </div>
          </section>

          {/* PERFORMANCE METRICS & REAL-WORLD STATISTICS (Inspired by Middle Row of image) */}
          <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-b border-grid bg-gradient-to-b from-transparent to-[#101012]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column - Large Circle & Core Brand Metric */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-[#161619] to-neutral-900 border border-white/5 rounded-sm p-10 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
                
                {/* Visual copper glow circle matching inspiration image */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-dashed border-[#D3542B]/20 flex items-center justify-center">
                  <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-transparent via-[#D3542B]/5 to-transparent blur-md"></div>
                </div>

                <div className="relative z-10 flex justify-between items-center w-full">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">PARTNERSHIP SCALE</span>
                  <span className="text-xs font-semibold text-[#D3542B]">F*RMORA CONTRACT</span>
                </div>

                {/* Central Circle Content "310 Clients" */}
                <div className="relative z-10 text-center my-auto">
                  <span className="text-[11px] uppercase tracking-widest text-neutral-400 block mb-1">For whom</span>
                  <h2 className="text-5xl md:text-6xl font-extrabold font-syne tracking-tight text-white mb-2">
                    310 CLIENTS
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-[#D3542B] block">
                    furniture as an asset of the space
                  </span>
                </div>

                <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-4">
                  <span className="text-xs uppercase font-syne tracking-widest text-white">F*RMORA GLOBAL</span>
                  <span className="text-xs text-neutral-500">Est. 2021</span>
                </div>
              </div>

              {/* Right Column - Grid of Concrete Operational Results */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                {/* Top Half Showcase: Gallery & Boutique Hotel Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card: Gallery */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">GALLERY</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">220%</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      The space's organic social and editorial media coverage across digital outlets immediately increased.
                    </p>
                  </div>

                  {/* Card: Boutique Hotel */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">BOUTIQUE HOTEL</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">2X</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Average dwell time and secondary service expenditure in primary common areas experienced double growth.
                    </p>
                  </div>

                </div>

                {/* Simulated Interactive Panoramic Visual from inspiration image */}
                <div className="relative h-[220px] rounded-sm overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80")' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
                  
                  {/* Highlight Linear Border Overlay resembling interior columns */}
                  <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/5"></div>
                  <div className="absolute inset-y-0 left-2/4 w-[1px] bg-white/5"></div>
                  <div className="absolute inset-y-0 left-3/4 w-[1px] bg-white/5"></div>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-center justify-between gap-4 z-10">
                    <div>
                      <span className="px-2 py-0.5 text-[8px] uppercase tracking-widest text-white border border-white/20 bg-black/40 rounded-sm mb-1.5 inline-block">
                        Featured Layout
                      </span>
                      <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-syne">The Arc Pavilion Exhibition</h4>
                    </div>
                    <button 
                      onClick={() => triggerToast('Launching architectural concept deck...')}
                      className="text-[10px] tracking-widest font-semibold text-white uppercase flex items-center space-x-1 hover:text-[#D3542B] transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Bottom Half Showcase: Restaurant & Guest Return Rate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card: Restaurant */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">RESTAURANT</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">40%</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Average customer transaction check value of the establishment increased due to visual prestige positioning.
                    </p>
                  </div>

                  {/* Card: Guest Return Rate */}
                  <div className="bg-neutral-950 border border-white/5 rounded-sm p-8 transition-all hover:border-[#D3542B]/20">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">GUEST RETURN RATE</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D3542B]"></span>
                    </div>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold text-white font-syne tracking-tight">35%</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Surge in repeat guests and direct organic booking confirmations logged within a 90-day post-launch window.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* THE 4 LAYERS OF A STRONG OBJECT - INTERACTIVE INSIGHT (Inspired by Row 3 of image) */}
          <section id="layers" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-b border-grid">
            
            {/* Header Layout directly replicating the image hierarchy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
              <div className="lg:col-span-6">
                <h2 className="text-4xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight leading-[1.1]">
                  4 LAYERS <br />
                  <span className="font-script text-[#D3542B] font-light lowercase tracking-normal capitalize">
                    of strong object
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:border-l border-white/10 lg:pl-10">
                <p className="text-xs md:text-sm uppercase tracking-wider text-[#D3542B] mb-2 font-semibold">
                  A PREMIUM OBJECT IS NOT JUST A BEAUTIFUL SHAPE.
                </p>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed tracking-wide font-inter">
                  IT IS HELD TOGETHER BY FOUR CRUCIAL STRUCTURAL LEVELS THAT WORK HARMONIOUSLY TO PROVIDE ATMOSPHERE, SCALE, AND RETENTION.
                </p>
              </div>
            </div>

            {/* Content Display: Big Asset Image left, Interactive Selector right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Sofa Focus (Warm Modular Architecture Mockup) */}
              <div className="lg:col-span-6 relative rounded-sm overflow-hidden border border-white/10 bg-[#161619] aspect-[4/3] p-6 flex items-center justify-center group">
                
                {/* Render colored/customized organic visual indicating material layers */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1C1E] via-neutral-900 to-black"></div>
                
                {/* Render active layer schema indicator */}
                <div className="absolute top-6 left-6 z-10 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D3542B] animate-pulse"></span>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-300 uppercase">ACTIVE ANALYST: {activeLayer}</span>
                </div>

                {/* 3D-like sofa schematic wireframe or full graphic representation */}
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                  
                  {/* Central Sofa Vector Render (Dynamic depending on active layer state) */}
                  <div className="relative w-[85%] h-[60%] flex items-center justify-center transition-all duration-500">
                    
                    {/* Sofa Base block */}
                    <div className="absolute bottom-6 w-full h-20 bg-neutral-800 rounded-lg transform skew-x-3 shadow-2xl flex items-end justify-center">
                      <div className="w-[98%] h-[80%] bg-neutral-900 rounded-md m-0.5 opacity-90 relative overflow-hidden">
                        {/* Layer specific highlights */}
                        {activeLayer === 'engineering' && (
                          <div className="absolute inset-0 border border-dashed border-[#D3542B]/60 animate-pulse flex items-center justify-center">
                            <span className="text-[9px] font-mono text-[#D3542B]">TENSION ROD GRID v4</span>
                          </div>
                        )}
                        {activeLayer === 'materials' && (
                          <div className="absolute inset-0 bg-[radial-gradient(#D3542B_1px,transparent_1px)] bg-[size:6px_6px] opacity-45"></div>
                        )}
                      </div>
                    </div>

                    {/* Left Cushion */}
                    <div className={`absolute bottom-20 left-4 w-[45%] h-24 rounded-t-xl transition-all duration-300 transform -skew-x-2 ${
                      activeLayer === 'comfort' ? 'bg-[#D3542B]' : 'bg-[#C24E2B]'
                    } shadow-lg flex items-center justify-center overflow-hidden`}>
                      <div className="absolute top-1 right-2 text-[8px] font-mono text-white/50">L1</div>
                      {activeLayer === 'materials' && <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>}
                    </div>

                    {/* Right Cushion */}
                    <div className={`absolute bottom-16 right-4 w-[48%] h-24 rounded-t-xl transition-all duration-300 transform skew-y-1 ${
                      activeLayer === 'comfort' ? 'bg-[#D3542B]' : 'bg-[#A83D1F]'
                    } shadow-md flex items-center justify-center overflow-hidden`}>
                      <div className="absolute top-1 right-2 text-[8px] font-mono text-white/50">L2</div>
                      {activeLayer === 'materials' && <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>}
                    </div>

                    {/* Left Backrest cushion */}
                    <div className="absolute bottom-[160px] left-6 w-[42%] h-14 bg-[#8C3016] rounded-xl transform -rotate-3 border-b border-black/20 flex items-center justify-center">
                      <span className="text-[8px] font-mono text-white/30">SUPPORT BACK</span>
                    </div>

                    {/* Right Backrest cushion */}
                    <div className="absolute bottom-[150px] right-10 w-[42%] h-14 bg-[#A83D1F] rounded-xl transform rotate-3 border-b border-black/20 flex items-center justify-center">
                      <span className="text-[8px] font-mono text-white/30">SUPPORT BACK</span>
                    </div>

                    {/* Conceptual Floating Rings */}
                    {activeLayer === 'concept' && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-56 h-56 rounded-full border border-[#D3542B]/40 animate-ping opacity-25"></div>
                        <div className="absolute text-xs font-mono tracking-widest text-[#D3542B] bg-black px-2 py-0.5 border border-[#D3542B]/30 rounded">
                          ORGANIC PROPORTIONS
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Schema Info Footer */}
                  <div className="w-full mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                    <span>X-RAY SCHEMATIC VIEW</span>
                    <span className="text-white">F*RMORA LAB v0.98</span>
                  </div>

                </div>

              </div>

              {/* Right Column: Dynamic Layers Grid based on image details */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Layer 1: Concept */}
                <button 
                  onClick={() => setActiveLayer('concept')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'concept' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'concept' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">CONCEPT</h4>
                      <span className="text-xs text-neutral-500 font-mono">01 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Unique visual language and core architectural geometry.</p>
                    {activeLayer === 'concept' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Our concept methodology emphasizes bold organic curvature. Each piece starts as an art-grade focal block designed to harmonize interior flows, providing immediate visual storytelling that normal boxy commercial sofas cannot achieve.
                      </div>
                    )}
                  </div>
                </button>

                {/* Layer 2: Comfort */}
                <button 
                  onClick={() => setActiveLayer('comfort')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'comfort' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'comfort' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">COMFORT</h4>
                      <span className="text-xs text-neutral-500 font-mono">02 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Proper physical fit, posture angles, and human interaction scenario.</p>
                    {activeLayer === 'comfort' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Ergonomics crafted for hospitality environment metrics. Deep lumbar reinforcement maintains absolute high-comfort while simultaneously prompting upright, high-engagement body language.
                      </div>
                    )}
                  </div>
                </button>

                {/* Layer 3: Engineering */}
                <button 
                  onClick={() => setActiveLayer('engineering')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'engineering' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'engineering' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">ENGINEERING</h4>
                      <span className="text-xs text-neutral-500 font-mono">03 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Design reliability, solid steel frameworks, and internal hardware integrity.</p>
                    {activeLayer === 'engineering' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Constructed using precision CNC steel tubing frames. Guaranteed structural performance rated for heavy lounge use without dynamic compression drift.
                      </div>
                    )}
                  </div>
                </button>

                {/* Layer 4: Materials */}
                <button 
                  onClick={() => setActiveLayer('materials')}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start space-x-6 ${
                    activeLayer === 'materials' 
                      ? 'bg-neutral-900 border-[#D3542B] shadow-[0_4px_25px_rgba(211,84,43,0.1)]' 
                      : 'bg-neutral-950/45 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`p-3 rounded ${activeLayer === 'materials' ? 'bg-[#D3542B] text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider font-syne text-neutral-100">MATERIALS</h4>
                      <span className="text-xs text-neutral-500 font-mono">04 / LAYER</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2">Tactility, durability, high-traffic resistance, and luxury care.</p>
                    {activeLayer === 'materials' && (
                      <div className="text-xs text-neutral-300 border-t border-white/10 pt-2 mt-2 leading-relaxed animate-fadeIn">
                        Sourced exclusively from premium Italian mills. High Wyzenbeek rubs (over 80,000 double rubs) with stain-resistant fiber shields ready for intense commercial usage.
                      </div>
                    )}
                  </div>
                </button>

              </div>
            </div>

          </section>

          {/* DYNAMIC WORKSPACE SECTION - LIVE OBJECT CONFIGURATOR */}
          <section id="configurator" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-b border-grid">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest text-[#D3542B] border border-[#D3542B]/30 bg-[#D3542B]/5 rounded-sm mb-4 inline-block font-mono">
                REAL-TIME OBJECT LAB
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight mb-4">
                Interactive Customizer
              </h2>
              <p className="text-neutral-400 text-sm font-inter">
                Configure your F*RMORA setup in real time. Manipulate material compositions, color models, and sectional configurations to estimate physical atmosphere impacts and pricing scales.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Configurator Visual Box */}
              <div className="lg:col-span-7 bg-[#101012] border border-white/5 rounded-sm p-8 flex flex-col justify-between relative overflow-hidden min-h-[450px]">
                {/* Soft backdrop glow matching active color */}
                <div className={`absolute -right-12 -top-12 w-64 h-64 rounded-full blur-[90px] opacity-35 transition-all duration-500 ${colors[selectedColor].glow}`}></div>
                
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 block">MODEL</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-white font-syne">THE FORMORA MONOLITH SECTIONAL</span>
                  </div>
                  <div className="bg-neutral-900 border border-white/10 px-3 py-1 rounded-sm text-[10px] font-mono text-[#D3542B]">
                    LIVE RENDER FEED
                  </div>
                </div>

                {/* Big Customized Render */}
                <div className="relative w-full h-64 my-auto flex flex-col items-center justify-center">
                  
                  {/* Dynamic Modular Sofa blocks render */}
                  <div className="flex items-end justify-center space-x-1.5 w-full max-w-lg transition-all duration-500">
                    {/* Render active quantity of sections */}
                    {Array.from({ length: sofaSections }).map((_, i) => (
                      <div 
                        key={i}
                        style={{ height: `${130 + (i % 2 === 0 ? 10 : 0)}px` }}
                        className={`w-28 rounded-md transition-all duration-500 flex flex-col justify-between p-3 relative overflow-hidden shadow-2xl ${colors[selectedColor].bg} border-t ${colors[selectedColor].border}`}
                      >
                        <div className="flex justify-between items-start text-white/55 text-[8px] font-mono">
                          <span>SEC {i + 1}</span>
                          <Maximize2 className="w-2.5 h-2.5" />
                        </div>
                        
                        {/* Dynamic Fabric texture overlay pattern */}
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:5px_5px]"></div>
                        
                        <div className="text-[9px] font-bold text-white uppercase tracking-wider truncate">
                          {selectedMaterial}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ground Reflection Accent */}
                  <div className="w-4/5 h-4 bg-gradient-to-r from-transparent via-[#D3542B]/10 to-transparent blur-md mt-2"></div>
                </div>

                {/* Live calculation bar */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 relative z-10 text-center">
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase">ESTIMATED PRICE</span>
                    <span className="text-lg font-bold text-white font-syne">${currentPrice.toLocaleString()} USD</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase">GUEST RETENTION RATING</span>
                    <span className="text-lg font-bold text-[#D3542B] font-syne">{guestRetentionScore}%</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase">CONSTRUCTION TIER</span>
                    <span className="text-lg font-bold text-neutral-300 font-syne">Commercial A+</span>
                  </div>
                </div>

              </div>

              {/* Configurator Selection Controls */}
              <div className="lg:col-span-5 bg-neutral-900/60 border border-white/5 rounded-sm p-8 flex flex-col justify-between">
                
                <div className="space-y-8">
                  {/* Option Set 1: Choose Color Palette */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne">
                        Select Atmosphere Tone
                      </label>
                      <span className="text-xs font-mono text-[#D3542B]">{colors[selectedColor].name}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {Object.keys(colors).map((cKey) => (
                        <button 
                          key={cKey}
                          onClick={() => {
                            setSelectedColor(cKey);
                            triggerToast(`Configured tone: ${colors[cKey].name}`);
                          }}
                          className={`h-12 rounded border transition-all flex items-center justify-center relative ${
                            selectedColor === cKey ? 'border-[#D3542B] ring-1 ring-[#D3542B]' : 'border-white/10 hover:border-white/20'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full ${colors[cKey].bg} block shadow-inner`}></span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option Set 2: Choose Architectural Textiles */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne">
                        Tactile Material Grade
                      </label>
                      <span className="text-xs font-mono text-neutral-400 capitalize">{selectedMaterial}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.keys(materials).map((mKey) => (
                        <button 
                          key={mKey}
                          onClick={() => {
                            setSelectedMaterial(mKey);
                            triggerToast(`Switched material to ${materials[mKey].name}`);
                          }}
                          className={`p-3 text-left rounded border transition-all text-xs font-medium ${
                            selectedMaterial === mKey 
                              ? 'bg-[#D3542B]/10 border-[#D3542B] text-white' 
                              : 'bg-neutral-950/40 border-white/5 hover:border-white/15 text-neutral-400'
                          }`}
                        >
                          <div className="font-bold block text-neutral-200 mb-0.5">{materials[mKey].name}</div>
                          <span className="text-[10px] font-mono text-[#D3542B]">x{materials[mKey].costMultiplier} Premium</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Option Set 3: Sofa Sections Count */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne">
                        Sectional Segment Volume
                      </label>
                      <span className="text-xs font-mono text-white">{sofaSections} Modules</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input 
                        type="range" 
                        min="2" 
                        max="5" 
                        value={sofaSections}
                        onChange={(e) => {
                          setSofaSections(parseInt(e.target.value));
                        }}
                        className="w-full accent-[#D3542B] bg-neutral-950 h-1 rounded" 
                      />
                      <div className="flex space-x-1.5">
                        {[2, 3, 4, 5].map((val) => (
                          <button 
                            key={val}
                            onClick={() => setSofaSections(val)}
                            className={`w-8 h-8 rounded text-xs font-mono flex items-center justify-center transition-all ${
                              sofaSections === val ? 'bg-[#D3542B] text-white' : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-400'
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-neutral-500 block mt-2">
                      Adjusting module layout modifies linear footprints and circulation flow properties.
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <button 
                    onClick={() => {
                      triggerToast('Layout configuration frozen. Routing to layout design engineer!');
                      setModalOpen(true);
                    }}
                    className="w-full bg-white text-black font-semibold text-xs tracking-widest uppercase py-3.5 rounded-sm hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* FAQS & INTENTIONAL DIALOGUE SECTION */}
          <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 border-b border-grid">
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-syne text-white uppercase tracking-tight mt-2">
                Questions on Spatial Asset Values
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Why should furniture be categorized as a spatial asset?",
                  a: "Commercial layouts spend thousands on drywall and static lighting, yet guests interact and build physical memories with furniture. An architectural centerpiece completely directs spatial flow, content generation, and spatial identity."
                },
                {
                  q: "How does F*RMORA support hospitality durability concerns?",
                  a: "Every frame utilizes a minimum of 2mm thick structural steel and custom high-resilience foam wrapped in premium Italian fabrics offering over 80,000 double rubs, treating intense public traffic as standard."
                },
                {
                  q: "Can the colors and configurations be custom-tailored to our design guide?",
                  a: "Absolutely. F*RMORA works directly alongside lead architects and design firms. We provide custom CAD/BIM models, tailored fabric selection, and absolute geometric modifications for verified commercial projects."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-neutral-950 border border-white/5 rounded-sm overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center text-sm font-bold uppercase tracking-wider text-white font-syne"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#D3542B] font-mono text-lg">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-xs text-neutral-400 leading-relaxed font-inter border-t border-white/5 pt-4 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ACTION CTA FOR ENVISIONING NEW SPACES */}
          <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 via-neutral-950 to-[#101012] border border-white/5 rounded-sm p-12 md:p-16 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#D3542B]/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <p className="text-[#D3542B] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                COMMENCE SPATIAL ELEVATION
              </p>
              
              <h2 className="text-3xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight mb-6">
                Ready to alter the <br />behavior of your spaces?
              </h2>
              
              <p className="text-neutral-400 font-inter text-xs md:text-sm max-w-xl mx-auto leading-relaxed tracking-wide mb-8">
                Consult with our studio design engineers today. Receive spatial layout previews, CAD integrations, and material specifications custom-tailored to your architectural goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all shadow-[0_4px_25px_rgba(211,84,43,0.3)] flex items-center space-x-2"
                >
                  <span>Book Architectural Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('system');
                    triggerToast('Opening Component Architecture Workspace');
                  }}
                  className="bg-neutral-950 border border-white/10 hover:border-[#D3542B]/40 text-neutral-300 hover:text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all"
                >
                  Explore Core Design Kit
                </button>
              </div>

            </div>
          </section>
        </>
      ) : (
        /* DESIGN SYSTEM WORKSPACE VIEW - Complete Production Sandbox */
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          
          {/* Header Introduction to Design System */}
          <div className="border-b border-grid pb-10 mb-12">
            <span className="text-[#D3542B] text-xs font-semibold tracking-[0.3em] uppercase block mb-2 font-mono">
              F*RMORA DESIGN SYSTEM v2.5 / ARCHITECTURE KIT
            </span>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold font-syne text-white uppercase tracking-tight">
                  Design System Workspace
                </h1>
                <p className="text-neutral-400 font-inter text-xs md:text-sm mt-2 max-w-2xl">
                  Inspect the absolute production-ready foundation blocks. Formulated from the rich copper-black architectural aesthetic of F*RMORA. Copy tokens, explore live interactive behaviors, and examine custom parameters.
                </p>
              </div>
              <button 
                onClick={() => setCurrentView('landing')}
                className="self-start lg:self-auto text-xs font-semibold tracking-widest uppercase bg-[#D3542B] text-white px-5 py-3 rounded-sm hover:bg-[#e45d31] transition-all"
              >
                ← Return to Showcase
              </button>
            </div>
          </div>

          {/* Visual Palette & Core Tokens Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Color Swatch Tokens Code */}
            <div className="lg:col-span-7 bg-neutral-950 border border-white/5 rounded-sm p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-syne mb-6 flex items-center justify-between">
                <span>01. CORE COLOR TOKENS</span>
                <span className="text-[10px] font-mono text-neutral-500">HEX SPECS</span>
              </h3>

              <div className="space-y-4">
                {[
                  { name: 'Formora Rust Accent', hex: '#D3542B', variable: 'color-accent', description: 'Primary spatial focal accent and cinematic highlight' },
                  { name: 'Deep Charcoal Void', hex: '#09090A', variable: 'color-bg-base', description: 'Baseline dark architectural atmosphere space' },
                  { name: 'Warm Panel Shadow', hex: '#101012', variable: 'color-bg-surface', description: 'Internal bento boxes and structural border panels' },
                  { name: 'Premium Platinum White', hex: '#F3F3F3', variable: 'color-text-high', description: 'Ultra crisp white typographic element reading' },
                  { name: 'Architectural Slate Grey', hex: '#A3A3A3', variable: 'color-text-muted', description: 'Informative metadata and spatial descriptions text' }
                ].map((token) => (
                  <div key={token.variable} className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-sm border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded border border-white/10" style={{ backgroundColor: token.hex }}></div>
                      <div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider block font-syne">{token.name}</span>
                        <span className="text-[10px] text-neutral-400 block">{token.description}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <code className="text-[10px] font-mono bg-black px-2.5 py-1 text-neutral-400 rounded">
                        {token.hex}
                      </code>
                      <button 
                        onClick={() => copyToken(token.hex, token.variable)}
                        className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                        title="Copy hex code"
                      >
                        {copiedToken === token.variable ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Guidelines Block */}
            <div className="lg:col-span-5 bg-neutral-950 border border-white/5 rounded-sm p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-syne mb-6">
                  02. TYPOGRAPHY MATRIX
                </h3>

                <div className="space-y-6">
                  
                  {/* Title 1 Specification */}
                  <div className="pb-4 border-b border-white/5">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase">ARCHITECTURAL DISPLAY</span>
                      <span className="text-[9px] font-mono text-[#D3542B]">font-syne / TRACKING TIGHT</span>
                    </div>
                    <h4 className="text-2xl font-extrabold uppercase font-syne text-white tracking-tight">F*RMORA DESIGN</h4>
                  </div>

                  {/* Title 2 Specification */}
                  <div className="pb-4 border-b border-white/5">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase">CINEMATIC SCRIPT SLIDES</span>
                      <span className="text-[9px] font-mono text-[#D3542B]">font-script / LOWERCASE SERIF</span>
                    </div>
                    <h4 className="text-2xl font-script text-[#D3542B] capitalize">the behavior of objects</h4>
                  </div>

                  {/* Body Text Specification */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase">BODY & METRICS READS</span>
                      <span className="text-[9px] font-mono text-[#D3542B]">font-inter / SANS-SERIF</span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Sleek structural reading is optimized for spatial data parameters. Standardizes hospitality analytics.
                    </p>
                  </div>

                </div>
              </div>

              {/* Typography Interactive Test sandbox */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <input 
                  type="text" 
                  value={searchQuery === '' ? 'Dynamic Design Typography Sandbox Test' : searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Test live typography preview..."
                  className="w-full bg-neutral-900 border border-white/10 rounded-sm px-4 py-2 text-xs text-white focus:outline-none focus:border-[#D3542B]"
                />
              </div>

            </div>

          </div>

          {/* Live Interactive UI Components Explorer */}
          <div className="space-y-12">
            
            <div className="border-b border-grid pb-4">
              <h2 className="text-xl font-bold uppercase tracking-wider text-white font-syne">
                03. COMPONENT SHOWCASE SANDBOX
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Interact with core interface parts constructed with pixel-perfect attention.
              </p>
            </div>

            {/* Row of buttons and selectors */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Button Archetypes */}
              <div className="bg-neutral-950 border border-white/5 rounded-sm p-6 space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne border-b border-white/5 pb-3">
                  BUTTON ARCHEPRITYPE MODELS
                </h3>
                
                <div className="space-y-4">
                  {/* Primary Accent Button */}
                  <div>
                    <span className="text-[8px] font-mono text-neutral-500 block mb-1.5">PRIMARY ACCENT GLOW</span>
                    <button className="w-full bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase py-3 rounded-sm transition-all shadow-[0_4px_15px_rgba(211,84,43,0.25)]">
                      Button Accent
                    </button>
                  </div>

                  {/* Dark Outline Button */}
                  <div>
                    <span className="text-[8px] font-mono text-neutral-500 block mb-1.5">DARK STRUCTURAL PANEL</span>
                    <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 text-xs font-semibold tracking-widest uppercase py-3 rounded-sm transition-all">
                      Button Secondary
                    </button>
                  </div>

                  {/* Clean Minimal Text Button */}
                  <div className="text-center">
                    <span className="text-[8px] font-mono text-neutral-500 block mb-1.5 text-left">MINIMAL ALIGNED CAP</span>
                    <button className="text-xs font-bold tracking-widest uppercase text-neutral-300 hover:text-white transition-colors flex items-center justify-center space-x-1.5 mx-auto">
                      <span>Explore Objects</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Input Elements */}
              <div className="bg-neutral-950 border border-white/5 rounded-sm p-6 space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne border-b border-white/5 pb-3">
                  INPUT & CHANNELS MATRIX
                </h3>

                <div className="space-y-4">
                  
                  {/* Active Input */}
                  <div>
                    <label className="text-[8px] font-mono text-neutral-400 block mb-1.5 uppercase">
                      Client Business Domain
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Design Boutique Hotel" 
                      className="w-full bg-neutral-900 border border-white/15 focus:border-[#D3542B] rounded-sm px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Selection Dropdown */}
                  <div>
                    <label className="text-[8px] font-mono text-neutral-400 block mb-1.5 uppercase">
                      Project Scale Target
                    </label>
                    <select className="w-full bg-neutral-900 border border-white/10 focus:border-[#D3542B] rounded-sm px-4 py-2.5 text-xs text-neutral-300 focus:outline-none transition-all">
                      <option>Boutique Spaces (1-10 pieces)</option>
                      <option>Contract Scale (10-50 pieces)</option>
                      <option>Signature Architecture (&gt;50 pieces)</option>
                    </select>
                  </div>

                  {/* Static Alert Indicator banner */}
                  <div className="bg-[#D3542B]/5 border border-[#D3542B]/30 rounded-sm p-3 flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#D3542B] mt-1 shrink-0"></span>
                    <span className="text-[10px] text-neutral-300 leading-relaxed font-inter">
                      Formora Contract requires standard CAD files for dimensional alignment verification.
                    </span>
                  </div>

                </div>
              </div>

              {/* Active UI Loaders & Alerts */}
              <div className="bg-neutral-950 border border-white/5 rounded-sm p-6 space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-syne border-b border-white/5 pb-3">
                  SPATIAL NOTIFICATION MODULES
                </h3>

                <div className="space-y-4">
                  {/* Action Alert Banner simulator */}
                  <div className="p-4 bg-neutral-900 rounded-sm border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono text-neutral-500 block">STATUS TELEMETRY</span>
                      <span className="text-xs font-bold text-neutral-200">System Ready (v2.5)</span>
                    </div>
                    <span className="px-2 py-0.5 text-[8px] font-mono bg-green-500/10 text-green-400 rounded border border-green-500/20 uppercase tracking-widest">
                      ONLINE
                    </span>
                  </div>

                  {/* Interactive Trigger for Toast Alerts */}
                  <button 
                    onClick={() => triggerToast('System telemetry broadcast initialized...')}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2"
                  >
                    <Bell className="w-3.5 h-3.5 text-[#D3542B]" />
                    <span>Launch Live Toast</span>
                  </button>

                  {/* Dynamic UI loader simulator */}
                  <div className="p-4 bg-neutral-950 border border-white/5 rounded flex items-center space-x-4">
                    <div className="w-5 h-5 rounded-full border-2 border-[#D3542B] border-t-transparent animate-spin"></div>
                    <div>
                      <span className="text-[9px] font-mono text-neutral-500 block uppercase">CAD RENDERING CORE</span>
                      <span className="text-xs text-neutral-300 font-inter">Aligning vectors...</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* DETAILED GENERAL FOOTER */}
      <footer className="relative z-10 bg-[#09090A] border-t border-grid text-neutral-400 text-xs py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & Statement Column */}
          <div className="space-y-4">
            <span className="text-lg font-extrabold tracking-[0.25em] font-syne text-white">
              F<span className="text-[#D3542B]">*</span>RMORA
            </span>
            <p className="text-neutral-500 leading-relaxed max-w-xs text-[11px] font-inter">
              Architectural design framework crafting modular centerpieces and premium atmospheres for high-end hospitality hubs.
            </p>
            <div className="text-[10px] text-neutral-600 font-mono">
              Designed & Built as a Premium Sandbox Experience.
            </div>
          </div>

          {/* Column 2: Digital Systems */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">Digital Systems</h4>
            <ul className="space-y-2 text-[11px] font-mono uppercase tracking-widest">
              <li>
                <button onClick={() => setCurrentView('system')} className="hover:text-white transition-colors">
                  Live Design Workspace
                </button>
              </li>
              <li>
                <a href="#layers" className="hover:text-white transition-colors">
                  Four Structural Layers
                </a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-white transition-colors">
                  Interactive Sandbox
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">Inquire Spaces</h4>
            <ul className="space-y-2 text-[11px] leading-relaxed">
              <li className="text-neutral-300">Office: London, Milan, Munich</li>
              <li>General: <span className="text-white select-all">studio@formora-concept.design</span></li>
              <li>Contracts: <span className="text-[#D3542B] select-all">arch@formora-concept.design</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Dialogue */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-syne">Newsletter Blueprint</h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-inter">
              Subscribe to receive structural layout updates and case studies.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="designer@domain.com" 
                className="bg-neutral-900 border border-white/10 rounded-l-sm px-3 py-2 text-[11px] text-white focus:outline-none focus:border-[#D3542B] w-full"
              />
              <button 
                onClick={() => triggerToast('Successfully joined structural dispatch!')}
                className="bg-[#D3542B] text-white px-4 rounded-r-sm hover:bg-[#e45d31] transition-colors"
              >
                Go
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600">
          <span>&copy; {new Date().getFullYear()} F*RMORA. All rights reserved. Spatial Assets for Premium Architecture.</span>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-neutral-400 transition-colors">Spatial Guidelines</a>
            <a href="#terms" className="hover:text-neutral-400 transition-colors">Contract Terms</a>
          </div>
        </div>
      </footer>

      {/* FLOATING TOAST NOTIFICATION CORNER */}
      <div className="fixed bottom-6 right-6 z-[100] space-y-2.5 max-w-sm pointer-events-none">
        {toasts.map((t) => (
          <div 
            key={t.id} 
            className="p-4 bg-neutral-900 border border-[#D3542B]/30 rounded-sm shadow-[0_6px_25px_rgba(211,84,43,0.15)] flex items-start space-x-3 pointer-events-auto animate-slideIn"
          >
            <div className="w-2 h-2 rounded-full bg-[#D3542B] mt-1.5 shrink-0 animate-ping"></div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider font-syne">F*RMORA SYSTEM</p>
              <p className="text-[11px] text-neutral-300 mt-0.5 leading-relaxed font-inter">{t.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CONSULTATION MODAL PORTAL PORTAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-950 border border-[#D3542B]/30 max-w-lg w-full rounded-sm p-8 relative overflow-hidden shadow-[0_10px_40px_rgba(211,84,43,0.2)] animate-scaleUp">
            
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[#D3542B] text-[10px] font-mono tracking-widest block mb-1">
              F*RMORA CONSULTATION INTAKE
            </span>
            <h3 className="text-2xl font-extrabold uppercase text-white font-syne tracking-tight mb-4">
              Connect with a Design Engineer
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-inter">
              Ready to execute dynamic visual improvements? Submit architectural parameters below, and a lead space consultant will connect within 1 business day.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              setModalOpen(false);
              triggerToast('Consultation request locked! Preparing spatial design guide...');
            }} className="space-y-4">
              <div>
                <label className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Corporate Architect Name</label>
                <input type="text" required placeholder="Olivia Vasilescu" className="w-full bg-neutral-900 border border-white/10 rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#D3542B]" />
              </div>
              
              <div>
                <label className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Architectural Office Email</label>
                <input type="email" required placeholder="olivia@studio-vasilek.com" className="w-full bg-neutral-900 border border-white/10 rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#D3542B]" />
              </div>

              <div>
                <label className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Spatial Type / Project Goal</label>
                <textarea rows="3" placeholder="Explain space type e.g. Boutique Lounge reception area requiring anchoring" className="w-full bg-neutral-900 border border-white/10 rounded-sm px-3.5 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#D3542B] resize-none"></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#D3542B] hover:bg-[#e45d31] text-white text-xs font-semibold tracking-widest uppercase py-3 rounded-sm transition-colors shadow-[0_4px_15px_rgba(211,84,43,0.25)]">
                  Submit Architectural Request
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}