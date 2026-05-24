import React, { useState, useEffect } from 'react';

// Headphone Color Assets defined as highly detailed inline SVGs to match the premium, tactile feel of the Grado-style headphone in the prompt
const HeadphoneSVG = ({ primaryColor, accentColor, grillColor }) => {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full max-w-[450px] drop-shadow-2xl transition-all duration-500 transform hover:scale-105">
      {/* Headband Arch */}
      <path 
        d="M 110,250 C 110,100 390,100 390,250" 
        fill="none" 
        stroke="#1a1a1a" 
        strokeWidth="18" 
        strokeLinecap="round" 
      />
      {/* Padded Leather Stitching details on headband */}
      <path 
        d="M 118,245 C 118,108 382,108 382,245" 
        fill="none" 
        stroke="#2c2c2c" 
        strokeWidth="12" 
        strokeDasharray="4 4" 
        strokeLinecap="round"
      />
      
      {/* Left Adjusting Rod and Support Pivot */}
      <line x1="120" y1="210" x2="110" y2="300" stroke="#7a7a7a" strokeWidth="6" strokeLinecap="round" />
      <rect x="115" y="210" width="10" height="25" rx="2" fill="#111" />
      <rect x="105" y="270" width="10" height="20" rx="2" fill="#111" />
      
      {/* Right Adjusting Rod and Support Pivot */}
      <line x1="380" y1="210" x2="390" y2="300" stroke="#7a7a7a" strokeWidth="6" strokeLinecap="round" />
      <rect x="375" y="210" width="10" height="25" rx="2" fill="#111" />
      <rect x="385" y="270" width="10" height="20" rx="2" fill="#111" />

      {/* Connection Yokes */}
      {/* Left Yoke */}
      <path d="M 110,290 C 80,310 80,390 110,410" fill="none" stroke="#222" strokeWidth="8" strokeLinecap="round" />
      {/* Right Yoke */}
      <path d="M 390,290 C 420,310 420,390 390,410" fill="none" stroke="#222" strokeWidth="8" strokeLinecap="round" />

      {/* Driver Housing - Outer Left */}
      <g transform="translate(110, 350) rotate(-10)">
        {/* Large cushion foam */}
        <ellipse cx="0" cy="0" rx="42" ry="55" fill="#252525" />
        <ellipse cx="-5" cy="0" rx="35" ry="48" fill="#1c1c1c" />
        {/* Outer Plastic Cup */}
        <path d="M -10 -35 L 20 -35 L 20 35 L -10 35 Z" fill="#181818" stroke="#2a2a2a" strokeWidth="2" />
        {/* Color Accent Ring */}
        <rect x="15" y="-30" width="6" height="60" rx="1" fill={accentColor} />
        {/* Metal Grill Mesh */}
        <rect x="21" y="-22" width="4" height="44" fill={grillColor} />
        {/* Text branding ring (simulating the "PRESTIGE SERIES GRADO LABS" texture) */}
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" strokeWidth="1" />
      </g>

      {/* Driver Housing - Outer Right */}
      <g transform="translate(390, 350) rotate(10)">
        {/* Large cushion foam */}
        <ellipse cx="0" cy="0" rx="42" ry="55" fill="#252525" />
        <ellipse cx="5" cy="0" rx="35" ry="48" fill="#1c1c1c" />
        {/* Outer Plastic Cup */}
        <path d="M 10 -35 L -20 -35 L -20 35 L 10 35 Z" fill="#181818" stroke="#2a2a2a" strokeWidth="2" />
        {/* Color Accent Ring */}
        <rect x="-21" y="-30" width="6" height="60" rx="1" fill={accentColor} />
        {/* Metal Grill Mesh */}
        <rect x="-25" y="-22" width="4" height="44" fill={grillColor} />
        {/* Inner core line detail */}
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#333" strokeWidth="1" />
      </g>

      {/* Premium braided cords draping down */}
      <path d="M 110,395 C 120,440 160,490 230,495" fill="none" stroke="#1c1c1c" strokeWidth="5" strokeLinecap="round" />
      <path d="M 390,395 C 380,440 340,490 270,495" fill="none" stroke="#1c1c1c" strokeWidth="5" strokeLinecap="round" />
      {/* Main cable merger */}
      <line x1="250" y1="495" x2="250" y2="520" stroke="#111" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
};

export default function App() {
  const [selectedColor, setSelectedColor] = useState('BLACK');
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState('SPECS');
  const [currentHz, setCurrentHz] = useState(1000);
  const [dbGain, setDbGain] = useState(1.2);
  const [toastMessage, setToastMessage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Trigger quick notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOrder = () => {
    setCartCount(prev => prev + 1);
    triggerToast(`Added 1x Prestige SR80 [${selectedColor} Edition] to your cart.`);
  };

  // Color config matching high industrial design fidelity
  const colorSchemes = {
    BLACK: {
      primary: '#1c1c1c',
      accent: '#353535',
      grill: '#555555',
      desc: 'Deep carbon finish with matte black poly-composite outer ring.',
      price: '$345'
    },
    SILVER: {
      primary: '#d1d5db',
      accent: '#9ca3af',
      grill: '#e5e7eb',
      desc: 'Machine-brushed aerospace aluminum with steel micro-weave grill.',
      price: '$385'
    },
    GOLD: {
      primary: '#d97706',
      accent: '#f59e0b',
      grill: '#fef3c7',
      desc: 'Vintage brass core plating with sandblasted anodized hardware.',
      price: '$420'
    },
    WHITE: {
      primary: '#f9fafb',
      accent: '#e5e7eb',
      grill: '#ffffff',
      desc: 'Architectural pristine white composite with pure silver alloy accenting.',
      price: '$365'
    }
  };

  const currentTheme = colorSchemes[selectedColor];

  // Frequency Graph calculation for raw tactile audiophile response preview
  const getGraphY = (hz) => {
    // Generates a mock authentic open-back frequency curve
    const logHz = Math.log10(hz);
    const minLog = Math.log10(20);
    const maxLog = Math.log10(20000);
    const pct = (logHz - minLog) / (maxLog - minLog);
    
    // Natural curve: warm bass roll-off, extremely flat mid-range, gentle presence peak at 2-5kHz, and open airy highs
    let response = Math.sin(pct * Math.PI * 2.5) * 4;
    if (hz < 80) response -= (80 - hz) * 0.15; // sub-bass roll off
    if (hz > 2000 && hz < 6000) response += 3.5; // sparkle peak
    if (hz > 15000) response -= 6.0; // extreme air drop-off
    
    // Add real-time custom user interactive EQ modifier based on slider state
    const userInfluence = Math.exp(-Math.pow(Math.log10(hz) - Math.log10(currentHz), 2) / 0.1) * dbGain * 8;
    return 100 - (response * 5 + 50 + userInfluence);
  };

  // Generate 50 points for the SVG frequency graph path
  const graphPoints = [];
  const hzPoints = [20, 40, 70, 100, 200, 400, 700, 1000, 2000, 4000, 7000, 10000, 15000, 20000];
  for (let i = 0; i <= 60; i++) {
    const minLog = Math.log10(20);
    const maxLog = Math.log10(20000);
    const currentLog = minLog + (i / 60) * (maxLog - minLog);
    const hzVal = Math.pow(10, currentLog);
    const x = (i / 60) * 100;
    const y = getGraphY(hzVal);
    graphPoints.push(`${x},${y}`);
  }
  const pathData = `M ${graphPoints.join(' L ')}`;

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#1c1c1c] font-sans antialiased relative overflow-x-hidden selection:bg-[#1c1c1c] selection:text-[#e5e5e5] pb-24 transition-colors duration-500">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#1c1c1c] text-[#e5e5e5] py-4 px-6 rounded-none border border-neutral-700 shadow-2xl flex items-center space-x-4 max-w-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-mono text-xs tracking-wider uppercase">{toastMessage}</span>
        </div>
      )}

      {/* Grid Pattern Background Accent to match premium architectural aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbdbdb_1px,transparent_1px),linear-gradient(to_bottom,#dbdbdb_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40"></div>

      {/* HEADER / NAVIGATION */}
      <header className="relative z-40 max-w-7xl mx-auto px-6 pt-8 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="flex flex-col">
          <span className="font-mono text-lg tracking-[0.3em] font-extrabold text-[#1a1a1a]">GRADO</span>
          <span className="font-mono text-[9px] tracking-[0.5em] text-neutral-500 uppercase -mt-1">LABS / EST 1953</span>
        </div>

        {/* Center Nav Link (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-12 font-mono text-xs tracking-[0.2em] font-medium text-neutral-600">
          <a href="#heritage" className="hover:text-black transition-colors">HERITAGE</a>
          <a href="#acoustics" className="hover:text-black transition-colors">ACOUSTICS</a>
          <a href="#engineering" className="hover:text-black transition-colors">ENGINEERING</a>
          <a href="#specs" className="hover:text-black transition-colors">SPECIFICATION</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-8">
          {/* Cart Icon */}
          <button 
            onClick={() => triggerToast(`Your cart contains ${cartCount} premium audio items.`)}
            className="font-mono text-xs tracking-[0.2em] uppercase flex items-center group transition-colors hover:text-neutral-500"
          >
            <span>CART</span>
            <span className="ml-2 px-1.5 py-0.5 bg-[#1c1c1c] text-[#e5e5e5] text-[10px] font-bold transition-transform duration-300 group-hover:scale-110">
              [{cartCount}]
            </span>
          </button>

          {/* Menu Hamburger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-3 group cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="h-[1.5px] w-full bg-[#1c1c1c] transition-transform duration-300 group-hover:translate-y-[1px]"></span>
            <span className="h-[1.5px] w-2/3 self-end bg-[#1c1c1c] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#e5e5e5]/98 z-40 flex flex-col justify-center items-center space-y-8 font-mono tracking-[0.3em] text-lg animate-fade-in">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-6 font-mono text-xs tracking-widest border border-neutral-400 px-4 py-2 hover:bg-[#1c1c1c] hover:text-[#e5e5e5] transition-all"
          >
            CLOSE [X]
          </button>
          <a href="#heritage" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">HERITAGE</a>
          <a href="#acoustics" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">ACOUSTICS</a>
          <a href="#engineering" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">ENGINEERING</a>
          <a href="#specs" onClick={() => setMenuOpen(false)} className="hover:text-neutral-500 transition-colors">SPECIFICATION</a>
          <div className="pt-8 border-t border-neutral-300 w-48 text-center">
            <span className="text-xs text-neutral-400 tracking-wider">PRESTIGE SERIES</span>
          </div>
        </div>
      )}

      {/* HERO SECTION - RECREATING THE EXACT DESIGN BALANCE OF THE PROMPT IMAGE */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-8 mt-4 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[80vh]">
        
        {/* Left Interactive Headphone Stage (Takes 7 Cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-center relative py-12 lg:py-4">
          
          {/* HUGE Backplate "PRESTIGE" Typography matching the design weight */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            <h1 className="text-[12vw] lg:text-[14vw] font-black tracking-[-0.05em] text-[#cacaca]/65 font-sans leading-none uppercase text-center w-full">
              PRESTIGE
            </h1>
          </div>

          {/* Render Active Color Config SVG */}
          <div className="relative z-10 w-full flex justify-center items-center">
            <HeadphoneSVG 
              primaryColor={currentTheme.primary} 
              accentColor={currentTheme.accent} 
              grillColor={currentTheme.grill} 
            />
          </div>

          {/* Subtitle Badge overlay under headphone */}
          <div className="absolute bottom-2 lg:bottom-12 left-6 z-20 font-mono text-[10px] tracking-[0.3em] text-neutral-500 hidden sm:block">
            HAND-ASSEMBLED IN BROOKLYN, NY
          </div>
        </div>

        {/* Right Interface details (Takes 5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12 lg:space-y-0 lg:py-16 relative z-20">
          
          {/* Top Detail: Dynamic Specs Grid */}
          <div>
            <div className="flex space-x-4 border-b border-neutral-300 pb-2 mb-6">
              <button 
                onClick={() => setActiveTab('SPECS')} 
                className={`font-mono text-xs tracking-widest pb-1 transition-all ${activeTab === 'SPECS' ? 'border-b-2 border-[#1c1c1c] text-[#1c1c1c] font-bold' : 'text-neutral-400'}`}
              >
                SPECS
              </button>
              <button 
                onClick={() => setActiveTab('SIGNATURE')} 
                className={`font-mono text-xs tracking-widest pb-1 transition-all ${activeTab === 'SIGNATURE' ? 'border-b-2 border-[#1c1c1c] text-[#1c1c1c] font-bold' : 'text-neutral-400'}`}
              >
                SOUND STAGE
              </button>
            </div>

            {activeTab === 'SPECS' ? (
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[10px] md:text-xs font-mono text-neutral-600 tracking-wider">
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">PLUG TYPE</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">3.5MM GOLD PLATED GOLD-ALLOY</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">COUPLING</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">AROUND EAR COUPLING</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">HEADBAND</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">PADDED LEATHERETTE HEADBAND</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-400 uppercase text-[9px] mb-1">TRANSDUCER</span>
                  <span className="text-[#1c1c1c] font-medium uppercase">DYNAMIC TRANSDUCER PRINCIPLE</span>
                </div>
              </div>
            ) : (
              <div className="text-[10px] md:text-xs font-mono text-neutral-600 tracking-wider space-y-2">
                <p className="uppercase leading-relaxed">
                  Engineered with an open-back design resulting in zero back-wave pressure distortion. 
                  Experience an expansive, wide-imaging stereo field with signature organic warmth.
                </p>
                <div className="pt-2 flex items-center space-x-4">
                  <span className="px-2 py-0.5 border border-neutral-400 text-[9px]">SENSITIVITY: 99.8 dB</span>
                  <span className="px-2 py-0.5 border border-neutral-400 text-[9px]">NOMINAL IMPEDANCE: 38 OHMS</span>
                </div>
              </div>
            )}
          </div>

          {/* Center Info: Pricing and Order Call-to-Action */}
          <div className="space-y-6">
            <div className="flex justify-between items-baseline border-t border-neutral-300 pt-6">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase">THE PRESTIGE SERIES</span>
                <span className="font-mono text-2xl font-light text-[#1c1c1c] mt-1">{currentTheme.price}</span>
              </div>
              
              {/* Retro Industrial Styled Order Button */}
              <button 
                onClick={handleOrder}
                className="border border-[#1c1c1c] bg-[#e5e5e5] text-[#1c1c1c] font-mono text-xs tracking-[0.25em] py-3 px-8 uppercase hover:bg-[#1c1c1c] hover:text-[#e5e5e5] transition-all duration-300 shadow-[2px_2px_0px_#1c1c1c] active:translate-y-0.5 active:shadow-[1px_1px_0px_#1c1c1c] select-none"
              >
                ORDER NOW
              </button>
            </div>
            
            <p className="font-mono text-[11px] text-neutral-500 tracking-wider leading-relaxed lowercase">
              * {currentTheme.desc} hand-tuned and calibrated dynamic drivers matched to within .05dB tolerance level.
            </p>
          </div>

          {/* Color Palette Selector Tick Marks (Recreating the visual accent from original prompt) */}
          <div className="pt-6 border-t border-neutral-300">
            <div className="flex flex-wrap items-center justify-start gap-y-2 font-mono text-[10px] tracking-[0.25em] text-neutral-400">
              <span className="mr-3 text-neutral-500 font-bold uppercase">FINISH |</span>
              {Object.keys(colorSchemes).map((color, index, arr) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    triggerToast(`Chose dynamic finish: ${color}`);
                  }}
                  className={`px-3 py-1 transition-all flex items-center space-x-1 ${selectedColor === color ? 'text-[#1c1c1c] font-bold underline underline-offset-4 decoration-2' : 'hover:text-[#1c1c1c]'}`}
                >
                  <span>{color}</span>
                  {index < arr.length - 1 && <span className="text-neutral-300 ml-3">|</span>}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* REACTION & PERFORMANCE SECTION (Interactive Sound Laboratory) */}
      <section id="acoustics" className="max-w-7xl mx-auto px-6 mt-24 pt-24 border-t border-neutral-300/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-4 space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">ACOUSTICS LAB</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1c1c1c] uppercase leading-none">
              HARMONIC RESONANCE GRAPH
            </h2>
            <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed">
              Interact with our driver response modeler below. Drag the frequency focus or adjust the resonance amplification to visualize the absolute acoustic clarity in raw decibels.
            </p>

            {/* Tactile Control Sliders */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <div>
                <div className="flex justify-between font-mono text-[10px] tracking-wider mb-2 text-neutral-500 uppercase">
                  <span>Target Frequency</span>
                  <span className="text-black font-semibold">{currentHz} Hz</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="20000" 
                  step="10"
                  value={currentHz}
                  onChange={(e) => setCurrentHz(Number(e.target.value))}
                  className="w-full accent-[#1c1c1c] cursor-pointer h-1 bg-neutral-300 rounded-none appearance-none"
                />
              </div>

              <div>
                <div className="flex justify-between font-mono text-[10px] tracking-wider mb-2 text-neutral-500 uppercase">
                  <span>Acoustic Gain Shift</span>
                  <span className="text-black font-semibold">{dbGain > 0 ? `+${dbGain.toFixed(1)}` : dbGain.toFixed(1)} dB</span>
                </div>
                <input 
                  type="range" 
                  min="-2" 
                  max="4" 
                  step="0.1"
                  value={dbGain}
                  onChange={(e) => setDbGain(Number(e.target.value))}
                  className="w-full accent-[#1c1c1c] cursor-pointer h-1 bg-neutral-300 rounded-none appearance-none"
                />
              </div>
            </div>
          </div>

          {/* Dynamic SVG Audio Graph Display */}
          <div className="lg:col-span-8 bg-[#dedede] border border-neutral-300 p-6 md:p-8 relative shadow-sm">
            {/* Grid Coordinates Lines for the Audio graph */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 pointer-events-none opacity-20">
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-r border-b border-neutral-600"></div>
              <div className="border-b border-neutral-600"></div>
              <div className="border-r border-neutral-600"></div>
              <div className="border-r border-neutral-600"></div>
              <div className="border-r border-neutral-600"></div>
              <div></div>
            </div>

            {/* Decibel Indicators (Y-Axis) */}
            <div className="absolute left-2 top-2 bottom-2 flex flex-col justify-between font-mono text-[9px] text-neutral-500 select-none z-10">
              <span>+18dB</span>
              <span>+0dB</span>
              <span>-18dB</span>
            </div>

            {/* Frequency Indicators (X-Axis) */}
            <div className="absolute left-8 right-4 bottom-2 flex justify-between font-mono text-[9px] text-neutral-500 select-none z-10">
              <span>20Hz</span>
              <span>200Hz</span>
              <span>2kHz</span>
              <span>20kHz</span>
            </div>

            {/* Visualizer Plot Frame */}
            <div className="h-64 relative flex items-center justify-center">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Under-graph solid gradient shading to represent warmth */}
                <path
                  d={`${pathData} L 100,100 L 0,100 Z`}
                  fill="url(#graph-grad)"
                  className="opacity-15 transition-all duration-300"
                />
                
                {/* Flat standard reference curve */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#a3a3a3" strokeDasharray="3 3" strokeWidth="0.5" />

                {/* Simulated Real-time Audio wave response path */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#1c1c1c"
                  strokeWidth="2"
                  className="transition-all duration-300 ease-out"
                />

                {/* Highlight Point Indicator for currently targeted Hz */}
                <circle
                  cx={`${(Math.log10(currentHz) - Math.log10(20)) / (Math.log10(20000) - Math.log10(20)) * 100}`}
                  cy={getGraphY(currentHz)}
                  r="4"
                  fill="#1c1c1c"
                  className="transition-all duration-300"
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="graph-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1c1c1c" />
                    <stop offset="100%" stopColor="#e5e5e5" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Realtime Audio Laboratory Technical Meta Readouts */}
            <div className="mt-4 pt-4 border-t border-neutral-300/80 flex flex-wrap justify-between text-[10px] font-mono text-neutral-500 gap-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                <span>OPEN-BACK AIR FLOW SIMULATOR: STABLE</span>
              </div>
              <div className="flex space-x-6">
                <span>MID-RANGE FLATNESS: ±0.15dB</span>
                <span>CHAMBER VOL: 16.4cc</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED FEATURES / ENGINEERING BREAKDOWN SECTION */}
      <section id="engineering" className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-300 pb-4 mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">ENGINEERING PHILOSOPHY</span>
            <h2 className="text-4xl font-black tracking-tight text-[#1c1c1c] uppercase leading-none">
              INSIDE THE ACOUSTIC CORE
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500 tracking-wider max-w-md mt-4 md:mt-0 lowercase">
            crafted with purpose. each generation of our prestige series drivers brings enhanced voice coil geometry and reduced magnetic distortion.
          </p>
        </div>

        {/* Feature Cards Grid (Custom Industrial-style Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Hand-Cured Polymer Housing */}
          <div className="border border-neutral-300 bg-[#e0e0e0] p-8 flex flex-col justify-between hover:border-[#1c1c1c] transition-all group duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl font-light text-neutral-400">01</span>
                <span className="font-mono text-[9px] tracking-widest bg-[#1c1c1c] text-[#e5e5e5] px-2 py-0.5">STRUCTURAL</span>
              </div>
              <h3 className="font-mono text-base font-bold tracking-wider uppercase text-[#1c1c1c]">
                Poly-Composite Air Chamber
              </h3>
              <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed lowercase">
                utilizing high density polycarbonate polymers, the chassis is cured to resist transient micro-vibrations, removing harsh high frequency resonance or unwanted structural ring-back.
              </p>
            </div>
            <div className="pt-8 border-t border-neutral-200 mt-12 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400 uppercase">Resonator Level</span>
              <span className="text-[#1c1c1c] font-bold">0.02% Max</span>
            </div>
          </div>

          {/* Card 2: De-Stressed Copper Voice Coils */}
          <div className="border border-neutral-300 bg-[#e0e0e0] p-8 flex flex-col justify-between hover:border-[#1c1c1c] transition-all group duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl font-light text-neutral-400">02</span>
                <span className="font-mono text-[9px] tracking-widest bg-[#1c1c1c] text-[#e5e5e5] px-2 py-0.5">CONDUCTIVE</span>
              </div>
              <h3 className="font-mono text-base font-bold tracking-wider uppercase text-[#1c1c1c]">
                Ultra-High Purity Copper (UHPLC)
              </h3>
              <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed lowercase">
                long-crystal de-stressed copper wiring is custom-drawn for the voice coils. results in maximized signal purity, effortless treble extension, and a natural, dimensional mid-range response.
              </p>
            </div>
            <div className="pt-8 border-t border-neutral-200 mt-12 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400 uppercase">Copper Grade</span>
              <span className="text-[#1c1c1c] font-bold">99.999% Pure</span>
            </div>
          </div>

          {/* Card 3: Matched Driver Calibration */}
          <div className="border border-neutral-300 bg-[#e0e0e0] p-8 flex flex-col justify-between hover:border-[#1c1c1c] transition-all group duration-300">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-2xl font-light text-neutral-400">03</span>
                <span className="font-mono text-[9px] tracking-widest bg-[#1c1c1c] text-[#e5e5e5] px-2 py-0.5">CALIBRATION</span>
              </div>
              <h3 className="font-mono text-base font-bold tracking-wider uppercase text-[#1c1c1c]">
                Acoustic Pairing & Tuning
              </h3>
              <p className="font-mono text-xs text-neutral-600 tracking-wider leading-relaxed lowercase">
                each left and right headphone pair is meticulously measured, side-compared, and matched in our brooklyn acoustic chamber to ensure near-zero channel volume discrepancy.
              </p>
            </div>
            <div className="pt-8 border-t border-neutral-200 mt-12 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400 uppercase">Tolerances Limit</span>
              <span className="text-[#1c1c1c] font-bold">± 0.05 Decibel</span>
            </div>
          </div>

        </div>
      </section>

      {/* HERITAGE BRUSH STORY SECTION (Tactile raw typography layout) */}
      <section id="heritage" className="max-w-7xl mx-auto px-6 mt-32 py-24 bg-[#e0e0e0] border border-neutral-300 relative overflow-hidden">
        {/* Giant textured watermark text behind */}
        <div className="absolute right-0 bottom-0 text-[18vw] leading-none font-black text-neutral-300/60 tracking-tighter select-none pointer-events-none uppercase">
          BROOKLYN
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-6">
            <span className="font-mono text-xs tracking-[0.3em] text-neutral-400 uppercase">OUR SEVEN DECADE JOURNEY</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1c1c1c] uppercase leading-none">
              BORN IN A KITCHEN, <br />TRUSTED WORLDWIDE.
            </h2>
            <div className="h-1 w-20 bg-[#1c1c1c]"></div>
          </div>

          <div className="font-mono text-xs text-neutral-600 tracking-wider space-y-6 leading-relaxed lowercase">
            <p>
              In 1953, master watchmaker Joseph Grado began hand-building phonograph cartridges at his kitchen table in Brooklyn, New York. Over the decades, that same kitchen-born work ethic has evolved into one of the most respected family-owned headphone houses in audio history.
            </p>
            <p>
              We don't rely on mass marketing or flashy multi-million dollar sponsorships. Our designs look raw and purely functional because they are. Every single ounce of engineering priority is dedicated strictly to what is inside the cup: the glorious, breathtaking translation of electricity into musical emotion.
            </p>
            <div className="pt-4">
              <span className="text-[#1c1c1c] font-bold uppercase block text-[10px] tracking-[0.2em] mb-1">
                John Grado, President & CEO
              </span>
              <span className="text-neutral-400 uppercase text-[9px]">
                THE SECOND GENERATION
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURING TECHNICAL METRICS / STATS */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-neutral-300 text-center font-mono">
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">1953</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">ESTABLISHED / NY</span>
          </div>
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">100%</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">FAMILY OWNED</span>
          </div>
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">20kHz</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">UPPER RESPONSE LIMIT</span>
          </div>
          <div>
            <span className="block text-4xl font-light text-[#1c1c1c]">0.05dB</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 block">DRIVER SYMMETRY</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 mt-32 pt-16 border-t border-neutral-300/80 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 text-neutral-500 font-mono text-xs">
        
        {/* Left Side Info */}
        <div className="space-y-2">
          <span className="text-[#1c1c1c] font-bold tracking-[0.2em] block uppercase">GRADO LABS AUDIO INC.</span>
          <span className="text-[10px] uppercase text-neutral-400 tracking-wider">
            © {new Date().getFullYear()} GRADO LABS. ALL RIGHTS RESERVED. BROOKLYN, NY.
          </span>
        </div>

        {/* Dynamic bottom links */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] tracking-widest">
          <a href="#heritage" className="hover:text-black uppercase transition-colors">WARRANTY POLICY</a>
          <a href="#acoustics" className="hover:text-black uppercase transition-colors">DEALERS locator</a>
          <a href="#engineering" className="hover:text-black uppercase transition-colors">USER MANUALS</a>
        </div>

      </footer>

    </div>
  );
}
7