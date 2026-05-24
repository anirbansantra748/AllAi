import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Shuffle, 
  Sliders, 
  Maximize2, 
  Activity, 
  TrendingUp, 
  Globe, 
  ShoppingBag, 
  Zap, 
  Package, 
  Command, 
  ArrowUpRight, 
  CheckCircle,
  HelpCircle,
  Clock,
  ChevronRight,
  RefreshCw,
  Eye,
  Settings,
  Shield,
  Layers3
} from 'lucide-react';

export default function App() {
  // State for Interactive Configurator
  const [modelMaterial, setModelMaterial] = useState('Liquid Chrome');
  const [glossLevel, setGlossLevel] = useState(85);
  const [inflation, setInflation] = useState(40);
  const [glowPower, setGlowPower] = useState(65);
  const [selectedColor, setSelectedColor] = useState('metallic'); // metallic, neon-purple, obsidian, sterile-white

  // State for active store format
  const [activeFormat, setActiveFormat] = useState('pop-ups');

  // State for active timeline step
  const [activeStep, setActiveStep] = useState(1);

  // Simulated Launch Configurator State
  const [launchTier, setLaunchTier] = useState('essential');
  const [customFeatures, setCustomFeatures] = useState({
    marketing: true,
    consultancy: true,
    teamTraining: false,
    analytics: true,
    dropRelease: false,
  });
  const [submittingConfig, setSubmittingConfig] = useState(false);
  const [configSuccess, setConfigSuccess] = useState(false);

  // Notification Toast State
  const [toast, setToast] = useState(null);

  // Dynamic status parameters to simulate live technical calculations
  const [systemLoad, setSystemLoad] = useState(42.3);
  const [totalOrders, setTotalOrders] = useState(304892);
  const [activeDeployments, setActiveDeployments] = useState(14);

  // Custom Cursor (Only on Desktop)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorHovering, setCursorHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Simulate ticking technical metrics
    const interval = setInterval(() => {
      setSystemLoad(prev => +(prev + (Math.random() - 0.5) * 1.2).toFixed(2));
      setTotalOrders(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const triggerToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleFeatureToggle = (key) => {
    setCustomFeatures(prev => ({ ...prev, [key]: !prev[key] }));
    triggerToast(`SYSTEM: Parameter "${key}" has been dynamically updated.`);
  };

  const submitBrandLauncher = (e) => {
    e.preventDefault();
    setSubmittingConfig(true);
    setTimeout(() => {
      setSubmittingConfig(false);
      setConfigSuccess(true);
      triggerToast("UNPOSE® System: Brand blueprint initialized successfully.");
      setTimeout(() => setConfigSuccess(false), 5000);
    }, 2200);
  };

  // Helper calculation for mock launching pricing
  const calculateEstimate = () => {
    let base = launchTier === 'premium' ? 8500 : launchTier === 'enterprise' ? 14900 : 4500;
    const activeCount = Object.values(customFeatures).filter(Boolean).length;
    return base + (activeCount * 950);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-[#f5f5f7] font-mono selection:bg-[#a855f7] selection:text-black overflow-x-hidden relative">
      
      {/* Dynamic Cursor Halo */}
      <div 
        className={`fixed pointer-events-none z-50 transition-transform duration-100 -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block border ${
          cursorHovering 
            ? 'w-16 h-16 bg-purple-500/10 border-purple-400 scale-125' 
            : 'w-8 h-8 border-white/20 bg-transparent'
        }`}
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />

      {/* Dynamic Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#151517] border border-purple-500/40 text-xs text-[#f5f5f7] p-4 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in max-w-sm">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          <div className="flex-1">
            <span className="text-purple-400 font-bold uppercase tracking-wider block text-[10px]">SYSTEM UPDATE</span>
            {toast}
          </div>
        </div>
      )}

      {/* TOP HEADER PRE-NAVBAR - Exact designer info from original */}
      <div className="w-full bg-[#18181a] border-b border-neutral-800 py-3 px-6 flex justify-between items-center text-[11px] text-neutral-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-orange-400 flex items-center justify-center font-bold text-white text-[9px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
              alt="Margarita Zilinskaya" 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <span className="text-[#f5f5f7] font-bold">Margarita Zilinskaya</span>
            <span className="text-purple-400 font-mono ml-2">@ridizain</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="animate-pulse flex items-center gap-1.5 text-[#a855f7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
            LIVE SIMULATION ONLINE
          </span>
          <span className="text-neutral-500">|</span>
          <span>UNIT 92X - OFFICIAL DEV ENVIRONMENT</span>
        </div>
        <div>
          <a 
            href="#configurator" 
            className="text-white hover:text-purple-400 transition-colors border border-neutral-800 hover:border-purple-500/30 px-3 py-1 rounded bg-black/40"
          >
            ORDER DESIGN IN TG <span className="text-purple-400">@ridizain</span>
          </a>
        </div>
      </div>

      {/* PRIMARY CYBERNETIC NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0d0d0e]/95 backdrop-blur-md border-b border-neutral-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-black tracking-widest text-[#f5f5f7] flex items-center gap-2">
              <span>UNPOSE</span>
              <span className="text-[10px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/30 font-mono font-normal">® SYSTEM</span>
            </a>
            <nav className="hidden lg:flex items-center gap-6 text-xs text-neutral-400 font-medium">
              <a href="#about" className="hover:text-white transition-colors">VISION</a>
              <a href="#simulation" className="hover:text-white transition-colors">MODEL CONFIGURATOR</a>
              <a href="#formats" className="hover:text-white transition-colors">FORMATS</a>
              <a href="#turnkey" className="hover:text-white transition-colors">TURNKEY LAUNCH</a>
              <a href="#blueprint" className="hover:text-white transition-colors">BLUEPRINT BUILDER</a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex flex-col text-right font-mono text-[10px] text-neutral-500">
              <span>SYS_TEMP: 38.6°C</span>
              <span>NETWORK LOAD: {systemLoad}%</span>
            </div>
            <a 
              href="#blueprint" 
              className="bg-[#f5f5f7] text-[#0d0d0e] font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-all shadow-md flex items-center gap-2"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <span>GET THE SUIT</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">

        {/* HERO BLOCK: TRANSLATING UNPOSE DESIGN DNA */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          
          {/* Main Hero Card - Left Side (Obsidian Editorial Aesthetic) */}
          <div className="lg:col-span-8 bg-[#18181a] rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[500px]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 -right-12 w-64 h-64 rounded-full bg-purple-600/10 blur-[80px] pointer-events-none group-hover:bg-purple-600/15 transition-all duration-700" />
            
            {/* Header elements inside the card */}
            <div className="flex justify-between items-start border-b border-neutral-800/60 pb-6 relative z-10">
              <div>
                <span className="text-xs text-neutral-500 block tracking-widest uppercase">UNIT 92X – OFFICIAL BRAND BLUEPRINT</span>
                <span className="text-[10px] text-purple-400 font-mono mt-1 block">MODEL: VORTEX XQ–92</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 block font-mono">ESTABLISHED / 2026_SYS</span>
                <span className="inline-block px-2 py-0.5 text-[9px] bg-neutral-900 border border-neutral-700 rounded text-neutral-300 mt-1 uppercase font-mono">VERIFIED CERTIFICATE</span>
              </div>
            </div>

            {/* Huge Cybernetic Title */}
            <div className="my-8 relative z-10">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none uppercase">
                UNPOSE<span className="text-purple-500">®</span>
              </h1>
              <p className="text-neutral-400 text-sm max-w-lg mt-4 font-sans leading-relaxed">
                A hybrid cyber-clothing ecosystem built for the physical realm, operating on autonomous design protocols. We create garments that respond, adapt, and move with human kinetic vectors.
              </p>
            </div>

            {/* Bottom Row inside the main card */}
            <div className="border-t border-neutral-800/60 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-neutral-800">
                  <span className="text-purple-500 font-black text-sm animate-pulse">(+)</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block uppercase tracking-wider">A.LCE© PROTOCOL</span>
                  <span className="text-[10px] text-neutral-500 block font-mono">ID CODE —› 748112-ZX9</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-black rounded-full border border-neutral-800 text-[11px] text-neutral-400">HIGH FIDELITY</span>
                <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-[11px] text-purple-300">SYSTEM: 42% GROWTH RATE</span>
              </div>
            </div>

            {/* Decorative background grids */}
            <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none select-none">
              <span className="font-black text-9xl">92X</span>
            </div>
          </div>

          {/* Right Side Cards (The Kinetic Globe & Metric Display) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Mini Kinetic Visualizer Card */}
            <div className="bg-[#1e1e20] rounded-2xl border border-neutral-700/60 p-6 flex-1 flex flex-col justify-between relative overflow-hidden group">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">KINETIC GLOBE SYS</span>
                <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>

              {/* Holographic Wireframe Globe Representation */}
              <div className="my-8 flex justify-center items-center relative py-6">
                <div className="absolute w-44 h-44 rounded-full border border-dashed border-purple-500/30 animate-spin-slow" />
                <div className="absolute w-32 h-32 rounded-full border border-double border-white/10 animate-reverse-spin" />
                <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600/20 to-neutral-900 blur-sm flex items-center justify-center">
                  <span className="text-[10px] text-purple-300 font-bold animate-pulse">ACTIVE_PTX</span>
                </div>
                {/* Simulated Floating Particles around globe */}
                <div className="w-2 h-2 rounded-full bg-purple-500 absolute top-10 left-12 animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-white absolute bottom-12 right-14 animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-purple-400 absolute top-24 right-8 animate-ping" />
              </div>

              <div>
                <span className="text-3xl font-black text-white block">42%</span>
                <span className="text-xs text-neutral-400 block mt-1 uppercase">NETWORK EXPANSION RATE Y.T.D</span>
                <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-between text-[11px] text-neutral-500">
                  <span>LATENCY: 12ms</span>
                  <span>NODE: EU-WEST-92</span>
                </div>
              </div>
            </div>

            {/* Quick Promo CTA Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-black rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-neutral-400 uppercase font-mono">AUTO-GENERATION ENGAGED</span>
              </div>
              
              <div className="my-4">
                <h3 className="text-lg font-bold text-white uppercase">PREMIUM STUDIO BLUEPRINT</h3>
                <p className="text-xs text-neutral-400 mt-1 font-sans">
                  Instantly launch a physical retail segment configured with autonomous stock logistics.
                </p>
              </div>

              <a 
                href="#turnkey" 
                className="w-full bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 hover:text-white transition-all text-xs font-bold py-2.5 rounded text-center block uppercase tracking-wider"
              >
                DISCOVER LAUNCH PLANS
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 2: INTERACTIVE BRAND MODEL CONFIGURATOR (DYNAMIC SIMULATION) */}
        <section id="simulation" className="space-y-6 pt-12">
          
          <div className="border-l-4 border-purple-500 pl-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">MODULE // 02</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">INTERACTIVE WARDROBE SIMULATOR</h2>
            <p className="text-neutral-400 text-sm max-w-2xl font-sans mt-1">
              Test kinetic materials, inflation, and emission levels of the official UNPOSE Vortex suit before order output.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#151517] rounded-3xl border border-neutral-800 p-6 sm:p-8 relative overflow-hidden">
            
            {/* Interactive Preview Canvas Area (Left) */}
            <div className="lg:col-span-7 bg-black/90 rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
              
              {/* Technical Overlay */}
              <div className="flex justify-between items-start text-[10px] text-neutral-500 font-mono z-10">
                <div className="space-y-1">
                  <span>RENDER_ENG: WEB_GL_2.0</span>
                  <span className="block">FRAME_RATE: 60FPS</span>
                </div>
                <div className="text-right space-y-1">
                  <span>VERTEX_CT: 142,509</span>
                  <span className="block">MATERIAL: {modelMaterial.toUpperCase()}</span>
                </div>
              </div>

              {/* Dynamic Interactive Visual Representation of the Model Suit */}
              <div className="my-8 flex justify-center items-center relative h-64">
                
                {/* Cybernetic Aura Backdrop (Reacts dynamically to user variables) */}
                <div 
                  className="absolute rounded-full blur-3xl transition-all duration-300" 
                  style={{
                    width: `${200 + inflation * 1.5}px`,
                    height: `${200 + inflation * 1.5}px`,
                    backgroundColor: selectedColor === 'neon-purple' ? 'rgba(168, 85, 247, 0.25)' : 
                                    selectedColor === 'obsidian' ? 'rgba(59, 130, 246, 0.15)' : 
                                    selectedColor === 'sterile-white' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(192, 192, 192, 0.2)',
                    filter: `blur(${110 - glowPower * 0.5}px)`
                  }}
                />

                {/* Simulated 3D Model Render - SVG-based Cyber-suit Vector */}
                <svg 
                  className="w-56 h-56 transition-all duration-300 transform group-hover:scale-105" 
                  viewBox="0 0 200 200" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle outer grid lines */}
                  <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-30" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="0.5" className="opacity-20" />
                  <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="0.5" className="opacity-20" />

                  {/* Main inflatable collar representation */}
                  <path 
                    d={`M 50,130 C 50,110 60,${80 - inflation * 0.3} 100,${80 - inflation * 0.3} C 140,${80 - inflation * 0.3} 150,110 150,130`}
                    stroke={selectedColor === 'neon-purple' ? '#c084fc' : selectedColor === 'obsidian' ? '#3b82f6' : '#ffffff'} 
                    strokeWidth={6 + (inflation / 10)}
                    className="transition-all duration-300 opacity-90"
                  />

                  {/* Liquid Metal Jacket Torso */}
                  <path 
                    d="M 60,130 L 70,190 L 130,190 L 140,130 Z" 
                    fill={selectedColor === 'neon-purple' ? 'url(#neonPurpleGrad)' : selectedColor === 'obsidian' ? 'url(#obsidianGrad)' : selectedColor === 'sterile-white' ? 'url(#whiteGrad)' : 'url(#chromeGrad)'}
                    className="transition-all duration-300"
                    fillOpacity={0.4 + (glossLevel / 200)}
                    stroke="white"
                    strokeWidth="1.5"
                  />

                  {/* Dynamic glow lines on suit based on state */}
                  <path 
                    d="M 85,135 L 85,175 M 115,135 L 115,175" 
                    stroke="#a855f7" 
                    strokeWidth={2 + (glowPower / 30)} 
                    strokeLinecap="round"
                    className="transition-all duration-300 animate-pulse"
                    strokeOpacity={glowPower / 100}
                  />

                  {/* Interactive Helmet Visor */}
                  <ellipse 
                    cx="100" 
                    cy="80" 
                    rx="30" 
                    ry="20" 
                    fill={selectedColor === 'neon-purple' ? '#3b0764' : '#111'} 
                    stroke={selectedColor === 'neon-purple' ? '#a855f7' : selectedColor === 'obsidian' ? '#2563eb' : '#fff'} 
                    strokeWidth="2.5"
                    className="transition-all duration-300"
                  />
                  
                  {/* Digital scanlines inside visor */}
                  <line x1="75" y1="80" x2="125" y2="80" stroke="#a855f7" strokeWidth="1" className="animate-bounce" />

                  {/* Custom gradients defined for svg fill rendering */}
                  <defs>
                    <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e5e5e5" />
                      <stop offset="50%" stopColor="#737373" />
                      <stop offset="100%" stopColor="#171717" />
                    </linearGradient>
                    <linearGradient id="neonPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="50%" stopColor="#6b21a8" />
                      <stop offset="100%" stopColor="#2e1065" />
                    </linearGradient>
                    <linearGradient id="obsidianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#d4d4d8" />
                      <stop offset="100%" stopColor="#52525b" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Technical Stats on Graphic */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/80 border border-neutral-800 p-3 rounded text-[9px] space-y-1 font-mono">
                  <span className="block text-purple-400">STRUCTURAL ENVELOPE:</span>
                  <span className="block text-white">X-VOLUME: {100 + inflation}%</span>
                  <span className="block text-white">Y-REFLECTIVE: {glossLevel}%</span>
                  <span className="block text-white">EMISSIVE PWR: {glowPower * 3.5} LM</span>
                </div>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 border border-neutral-800 p-3 rounded text-[9px] space-y-1 font-mono text-right">
                  <span className="block text-neutral-400">FITTING STATUS:</span>
                  <span className="block text-green-400 animate-pulse">OPTIMAL COMFORT</span>
                  <span className="block text-neutral-500">SYS_V: 92.48-X</span>
                </div>
              </div>

              {/* Quick Actions overlay */}
              <div className="flex justify-between items-center border-t border-neutral-800 pt-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setModelMaterial('Liquid Chrome');
                      setGlossLevel(95);
                      setInflation(30);
                      setGlowPower(80);
                      setSelectedColor('metallic');
                      triggerToast("SUIT PRESET: Liquid Chrome restored.");
                    }}
                    className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 text-[10px] text-neutral-300 font-mono"
                  >
                    RESET PRESET
                  </button>
                  <button 
                    onClick={() => {
                      setGlossLevel(Math.floor(Math.random() * 50) + 50);
                      setInflation(Math.floor(Math.random() * 80) + 10);
                      setGlowPower(Math.floor(Math.random() * 70) + 30);
                      const colors = ['metallic', 'neon-purple', 'obsidian', 'sterile-white'];
                      setSelectedColor(colors[Math.floor(Math.random() * colors.length)]);
                      triggerToast("SUIT PRESET: Random dynamic properties assigned.");
                    }}
                    className="px-2.5 py-1 bg-purple-950/40 hover:bg-purple-900/40 rounded border border-purple-500/30 text-[10px] text-purple-300 font-mono flex items-center gap-1"
                  >
                    <Shuffle className="w-2.5 h-2.5" />
                    RANDOMIZE
                  </button>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">PRESS SHIFT TO LOCK HORIZON</span>
              </div>
            </div>

            {/* Configurator Side Controls (Right) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                
                {/* Visual Title Header */}
                <div className="border-b border-neutral-800 pb-4">
                  <span className="inline-block px-2 py-0.5 text-[9px] bg-purple-500/20 text-purple-400 rounded-sm mb-2 font-mono uppercase">Interactive Sandbox</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">CONFIGURE THE MATRIX</h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1">Adjust parameters directly feeding into custom physical fabricators.</p>
                </div>

                {/* Color/Material Preset Selector */}
                <div className="space-y-3">
                  <span className="text-[11px] text-neutral-400 font-mono block uppercase tracking-wider">01 // SELECT COATED MATERIAL</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'metallic', label: 'Liquid Chrome', colorClass: 'bg-zinc-400' },
                      { id: 'neon-purple', label: 'Vortex Purple', colorClass: 'bg-purple-600' },
                      { id: 'obsidian', label: 'Obsidian Cyan', colorClass: 'bg-blue-600' },
                      { id: 'sterile-white', label: 'Clinical White', colorClass: 'bg-white' },
                    ].map((material) => (
                      <button
                        key={material.id}
                        onClick={() => {
                          setSelectedColor(material.id);
                          setModelMaterial(material.label);
                          triggerToast(`Material changed to ${material.label}`);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2 ${
                          selectedColor === material.id 
                            ? 'bg-neutral-900 border-purple-500 shadow-lg' 
                            : 'bg-black/40 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full ${material.colorClass}`} />
                        <div>
                          <span className="text-xs font-bold block text-[#f5f5f7]">{material.label}</span>
                          <span className="text-[9px] text-neutral-500 block uppercase font-mono">{material.id === 'metallic' ? 'REFLECTIVE' : 'EMISSIVE'}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliders Block */}
                <div className="space-y-4">
                  <span className="text-[11px] text-neutral-400 font-mono block uppercase tracking-wider">02 // FINE-TUNE PHY-DIGITAL VALUES</span>
                  
                  {/* Gloss Level Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-400">MATERIAL GLOSS LEVEL:</span>
                      <span className="text-white font-bold">{glossLevel}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={glossLevel} 
                      onChange={(e) => setGlossLevel(parseInt(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  {/* Inflation Level Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-400">WARDROBE INFLATION (X-VOL):</span>
                      <span className="text-white font-bold">+{inflation}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={inflation} 
                      onChange={(e) => setInflation(parseInt(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  {/* Emissive Power Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-400">GLOW POWER / EMISSION:</span>
                      <span className="text-white font-bold">{glowPower * 3.5}LM</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={glowPower} 
                      onChange={(e) => setGlowPower(parseInt(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                </div>

              </div>

              {/* Configurator Footer/Order Summary */}
              <div className="bg-black/60 border border-neutral-800 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Estimated Production Cycle:</span>
                  <span className="text-white font-mono font-bold">48 Hours</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-400">Material Integrity:</span>
                  <span className="text-green-400 font-mono">A-GRADE CERTIFIED</span>
                </div>
                <a 
                  href="#blueprint" 
                  onClick={() => triggerToast("System: Loading configuration preset into final order module...")}
                  className="w-full bg-[#f5f5f7] text-[#0d0d0e] hover:bg-purple-500 hover:text-white transition-all text-xs font-bold py-2.5 rounded text-center block uppercase tracking-wider"
                >
                  LOAD INTO BLUEPRINT
                </a>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 3: RECREATING AND EXPANDING THE WHITE BLOCK "WE CREATE CLOTHING THAT MOVES WITH MAN" */}
        <section id="formats" className="space-y-6 pt-12">
          
          {/* Aesthetic White Card - Replicating original's middle card visual language */}
          <div className="bg-[#fcfcfd] text-[#0d0d0e] rounded-3xl border border-neutral-200 p-6 sm:p-10 relative overflow-hidden">
            
            {/* Header / Meta row */}
            <div className="flex justify-between items-start text-[10px] text-neutral-500 font-mono tracking-widest border-b border-neutral-200 pb-6">
              <div>
                <span>NPS® DIGITAL WARDROBE LAB</span>
                <span className="block mt-0.5 text-purple-600">FCC ID: VX-774092</span>
              </div>
              <div className="text-right">
                <span>PROJECT PHASE 04</span>
                <span className="block mt-0.5 font-bold">→ 2026(V) // AUTONOMOUS</span>
              </div>
            </div>

            {/* Massive Russian Inspired Wide Typography Header from Original */}
            <div className="my-10 space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                МЫ СОЗДАЁМ ОДЕЖДУ, <br />
                <span className="text-neutral-500 font-normal italic">КОТОРАЯ ДВИГАЕТСЯ</span> <br />
                ВМЕСТЕ С ЧЕЛОВЕКОМ.
              </h2>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3 py-1 bg-neutral-200/80 rounded text-[11px] font-mono text-neutral-700">Основан в Москве в 2023 году</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                <span className="text-xs font-bold text-neutral-600 uppercase">Modern Base with Character / БАЗА + СКУЧНО</span>
              </div>
            </div>

            {/* Segment: Interactive Store Formats Tabs & Preview Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-neutral-200">
              
              {/* Selector Tabs (Left) */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[10px] text-neutral-500 font-mono block uppercase">FORMATS / ФОРМАТ МАГАЗИНОВ</span>
                
                <div className="space-y-2">
                  {[
                    { id: 'pop-ups', label: 'POP-UP STORES', desc: 'Temporary physical points of high visual impact.' },
                    { id: 'showrooms', label: 'DIGITAL SHOWROOMS', desc: 'Hybrid fitting rooms powered by zero-inventory systems.' },
                    { id: 'online', label: 'ONLINE PLATFORM', desc: 'Instant drops triggered by user community votes.' },
                  ].map((format) => (
                    <button
                      key={format.id}
                      onClick={() => {
                        setActiveFormat(format.id);
                        triggerToast(`STORE FORMAT: Switched view to ${format.label}`);
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all border ${
                        activeFormat === format.id 
                          ? 'bg-neutral-100 border-[#0d0d0e] text-[#0d0d0e] shadow-md scale-[1.02]' 
                          : 'bg-transparent border-neutral-200 text-neutral-500 hover:text-black hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-xs font-black block uppercase tracking-wider">{format.label}</span>
                      <span className="text-[11px] block mt-1 font-sans leading-normal">{format.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Live Stats changing based on selected Format */}
              <div className="lg:col-span-8 bg-neutral-100/80 rounded-2xl p-6 flex flex-col justify-between border border-neutral-200">
                
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      {activeFormat === 'pop-ups' ? 'POP-UP METRICS' : activeFormat === 'showrooms' ? 'SHOWROOM SPECS' : 'ONLINE HUB METRICS'}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">SYS_STABILITY // SECURE</span>
                </div>

                {/* Stat Grid matching aesthetic from image (e.g., 300+, 86%, 10k+) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
                  
                  <div className="bg-white p-4 rounded-xl border border-neutral-200">
                    <span className="text-4xl font-black block text-[#0d0d0e]">
                      {activeFormat === 'pop-ups' ? '300+' : activeFormat === 'showrooms' ? '140+' : '1,800+'}
                    </span>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">
                      {activeFormat === 'pop-ups' ? 'orders without ads' : activeFormat === 'showrooms' ? 'interactive booths' : 'concurrent voters'}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-neutral-200">
                    <span className="text-4xl font-black block text-[#0d0d0e]">
                      {activeFormat === 'pop-ups' ? '86%' : activeFormat === 'showrooms' ? '94%' : '98.2%'}
                    </span>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">
                      {activeFormat === 'pop-ups' ? 'repeated purchases' : activeFormat === 'showrooms' ? 'satisfaction rating' : 'uptime percentage'}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-neutral-200">
                    <span className="text-4xl font-black block text-[#0d0d0e]">
                      {activeFormat === 'pop-ups' ? '10K+' : activeFormat === 'showrooms' ? '45K+' : '250K+'}
                    </span>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono mt-1">
                      {activeFormat === 'pop-ups' ? 'followers in 2 months' : activeFormat === 'showrooms' ? 'active digital fits' : 'monthly web visitors'}
                    </span>
                  </div>

                </div>

                {/* Simulated interactive interactive graphic of selected store */}
                <div className="bg-white rounded-xl p-4 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-neutral-100 rounded-lg">
                      <Layers3 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block text-neutral-900">
                        {activeFormat === 'pop-ups' ? 'Micro-Capsule Assembly' : activeFormat === 'showrooms' ? 'Holographic Projection Rack' : 'Decentralized Smart Inventory'}
                      </span>
                      <span className="text-[10px] text-neutral-500 block">
                        {activeFormat === 'pop-ups' ? 'Fast deployment within 4 hours.' : activeFormat === 'showrooms' ? 'Zero fabric waste concept model.' : 'Worldwide real-time direct delivery.'}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => triggerToast(`SIMULATION: Initiated projection of ${activeFormat.toUpperCase()}`)}
                    className="px-3 py-1.5 bg-[#0d0d0e] hover:bg-purple-600 text-white rounded text-xs transition-colors uppercase font-mono"
                  >
                    DEPLOY SIM
                  </button>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* SECTION 4: THE LAUNCH SYSTEM (ЗАПУСК ПОД КЛЮЧ) - Interactive Steps Timeline */}
        <section id="turnkey" className="space-y-6 pt-12">
          
          <div className="border-l-4 border-purple-500 pl-4 flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">MODULE // 03</span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">TURNKEY BRAND LAUNCH / ЗАПУСК ПОД КЛЮЧ</h2>
            </div>
            <span className="hidden sm:inline-block text-xs text-neutral-500 font-mono">002 FUTURE™ SPEC</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Timeline Controls (Left Column) */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 space-y-6">
                
                <div className="space-y-1">
                  <span className="text-xs text-purple-400 font-mono block uppercase">Interactive Roadmap Tracker</span>
                  <p className="text-xs text-neutral-400 font-sans">
                    Click each milestone of the UNPOSE turnkey development model to preview delivery assets, documentation, and tools.
                  </p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-3 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-neutral-800">
                  {[
                    { step: 1, title: 'ГОТОВЫЙ АССОРТИМЕНТ', sub: 'Complete Ready Assortment', desc: 'Pre-designed high-fidelity hybrid physical garments ready for instant production output.' },
                    { step: 2, title: 'МАРКЕТИНГОВАЯ ПОДДЕРЖКА', sub: 'Marketing & Brand Engine', desc: 'Complete social asset kits, 3D renderings, and high-convert social visual packs.' },
                    { step: 3, title: 'ЕЖЕМЕСЯЧНЫЕ КОНСУЛЬТАЦИИ', sub: 'Monthly Direct Consultations', desc: 'Direct technical support from expert physical materials engineers and marketing team.' },
                    { step: 4, title: 'МИНИМИЗАЦИЯ РИСКОВ', sub: 'Risk Mitigation Protocols', desc: 'Strict production cap checks and automated community-tested retail drops.' },
                  ].map((node) => (
                    <div 
                      key={node.step}
                      onClick={() => setActiveStep(node.step)}
                      className={`relative pl-12 p-3 rounded-xl cursor-pointer transition-all border ${
                        activeStep === node.step 
                          ? 'bg-neutral-900 border-purple-500 shadow-md scale-[1.01]' 
                          : 'bg-transparent border-transparent hover:bg-neutral-900/40 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {/* Interactive Step Badge */}
                      <div className={`absolute left-3 top-3.5 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-mono transition-all z-10 ${
                        activeStep === node.step 
                          ? 'bg-purple-500 text-white border-purple-400 scale-110 shadow-lg shadow-purple-500/20' 
                          : 'bg-[#151517] text-neutral-500 border-neutral-700'
                      }`}>
                        0{node.step}
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold uppercase text-[#f5f5f7] tracking-wider">{node.title}</h4>
                        <span className="text-[10px] text-neutral-500 block font-mono">{node.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Dynamic Step Display Panel (Right Column) */}
            <div className="lg:col-span-7 bg-[#18181a] rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden group">
              
              {/* Dynamic subtle accent background matching step */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-all pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Meta details */}
                <div className="flex justify-between items-center border-b border-neutral-800 pb-4 text-[10px] text-neutral-500 font-mono">
                  <span>UNPOSE TURNKEY SYSTEM / 0{activeStep}</span>
                  <span className="text-purple-400">STATUS: ACTIVE COMPONENT</span>
                </div>

                {/* Large Title and details dynamically updating */}
                <div className="space-y-3">
                  <span className="text-xs text-neutral-400 font-mono block">DEVELOPMENT TRACK / PHASE 0{activeStep}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {activeStep === 1 && 'READY ASSORTMENT / ГОТОВЫЙ АССОРТИМЕНТ'}
                    {activeStep === 2 && 'MARKETING SUPPORT / МАРКЕТИНГОВАЯ ПОДДЕРЖКА'}
                    {activeStep === 3 && 'MONTHLY CONSULTATIONS / ЕЖЕМЕСЯЧНЫЕ КОНСУЛЬТАЦИИ'}
                    {activeStep === 4 && 'RISK MITIGATION / МИНИМИЗАЦИЯ РИСКОВ'}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {activeStep === 1 && 'Get immediate access to over 32+ high-fidelity futuristic garment designs. Each asset is pre-mapped for production, featuring parametric adjustment systems and high-comfort materials tested in severe climates.'}
                    {activeStep === 2 && 'Our automated marketing machine supplies high-converting promotional videos, complete social media kits, interactive 3D configurators for Instagram/TikTok embedding, and pre-packaged creator outreach templates.'}
                    {activeStep === 3 && 'Access direct consultation hours with our lead designers and physical supply chain experts. We hold monthly virtual reviews to optimize your custom brand drops, analyze fit feedback, and tweak material parameters.'}
                    {activeStep === 4 && 'Dramatically lower investment thresholds. By deploying our zero-inventory digital show racks, you bypass warehousing constraints. Community-backed voting models test demand before any material gets physically cut.'}
                  </p>
                </div>

                {/* Sub-Items Checklist tailored for the active step */}
                <div className="space-y-2 bg-black/40 border border-neutral-800 rounded-xl p-4">
                  <span className="text-[10px] text-purple-400 font-mono uppercase tracking-widest block mb-2">DELIVERED TOKENS & TOOLS:</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {activeStep === 1 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>3D Asset Files (OBJ, GLTF)</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Technical Material Spec Sheet</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Production Pattern Drafts</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Integrated Fitting App Code</span>
                        </div>
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>TikTok Spark Video Pack</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Pre-Configured Ads Manager Templates</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Interactive IG Filter Files</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Creator Outreach Kit</span>
                        </div>
                      </>
                    )}
                    {activeStep === 3 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>2x Dedicated 1-on-1 Strategy Hours</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Live Fitting Material Testing</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Discord Developer Room Pass</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Quarterly Asset Upgrades</span>
                        </div>
                      </>
                    )}
                    {activeStep === 4 && (
                      <>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Instant Refund Guarantee Pool</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Autonomous Overstock Protection</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Decentralized Escrow Contract</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Pre-Launch User Voting Portal</span>
                        </div>
                      </>
                    )}
                  </div>

                </div>

              </div>

              {/* Dynamic bottom action block */}
              <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
                <div className="text-xs">
                  <span className="text-neutral-500 block">ESTIMATED SYSTEM DEPLOYMENT</span>
                  <span className="text-[#f5f5f7] font-bold">Within 7 Business Days</span>
                </div>
                <button 
                  onClick={() => {
                    triggerToast(`SYSTEM: Activated priority blueprint tracking for step 0${activeStep}`);
                  }}
                  className="bg-[#f5f5f7] hover:bg-purple-600 hover:text-white text-[#0d0d0e] text-xs font-bold px-4 py-2 rounded transition-colors uppercase"
                >
                  PREVIEW STAGE 0{activeStep} ASSETS
                </button>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 5: DYNAMIC CUSTOM LAUNCHER & BLUEPRINT CREATOR (REAL PRODUCT PURPOSE) */}
        <section id="blueprint" className="space-y-6 pt-12">
          
          <div className="border-l-4 border-purple-500 pl-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">MODULE // 04</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">BRAND BLUEPRINT & LAUNCH ESTIMATOR</h2>
            <p className="text-neutral-400 text-sm max-w-2xl font-sans mt-1">
              Select your turnkey setup variables, toggle structural components, and calculate live launching prices automatically.
            </p>
          </div>

          <div className="bg-[#18181a] rounded-3xl border border-neutral-800 p-6 sm:p-8">
            
            <form onSubmit={submitBrandLauncher} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Side */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* 1. Launch Tier Segment */}
                <div className="space-y-3">
                  <label className="text-xs text-neutral-400 font-mono block uppercase">SELECT YOUR SYSTEM TIER</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    <div 
                      onClick={() => {
                        setLaunchTier('essential');
                        triggerToast("TIER: Essential selected.");
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        launchTier === 'essential' 
                          ? 'bg-[#151517] border-purple-500 shadow-md' 
                          : 'bg-black/20 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold block text-white">01 // ESSENTIAL</span>
                      <span className="text-[10px] text-neutral-500 block mt-1 font-mono">Starter Digital Pack</span>
                      <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-xl font-black text-white">$4,500</span>
                        <span className="text-[9px] text-neutral-500">ONE-TIME</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => {
                        setLaunchTier('premium');
                        triggerToast("TIER: Premium selected.");
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        launchTier === 'premium' 
                          ? 'bg-[#151517] border-purple-500 shadow-md' 
                          : 'bg-black/20 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold block text-purple-400">02 // PREMIUM</span>
                      <span className="text-[10px] text-neutral-500 block mt-1 font-mono">Full Physical Drops</span>
                      <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-xl font-black text-purple-400">$8,500</span>
                        <span className="text-[9px] text-purple-400">BEST VALUE</span>
                      </div>
                    </div>

                    <div 
                      onClick={() => {
                        setLaunchTier('enterprise');
                        triggerToast("TIER: Enterprise selected.");
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        launchTier === 'enterprise' 
                          ? 'bg-[#151517] border-purple-500 shadow-md' 
                          : 'bg-black/20 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold block text-white">03 // ENTERPRISE</span>
                      <span className="text-[10px] text-neutral-500 block mt-1 font-mono">Custom Tech Integrations</span>
                      <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-xl font-black text-white">$14,900</span>
                        <span className="text-[9px] text-neutral-500">INDIVIDUAL</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 2. Optional Component toggles */}
                <div className="space-y-3">
                  <label className="text-xs text-neutral-400 font-mono block uppercase">ADDITIONAL DESIGN SYSTEM TOKENS</label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    <div 
                      onClick={() => handleFeatureToggle('marketing')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.marketing 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Marketing Support Kit</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.marketing ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.marketing && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('consultancy')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.consultancy 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Monthly Consultations</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.consultancy ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.consultancy && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('teamTraining')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.teamTraining 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Staff/Team Onboarding Training</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.teamTraining ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.teamTraining && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('analytics')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.analytics 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Integrated Analytics Dashboard</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.analytics ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.analytics && '✓'}
                      </div>
                    </div>

                    <div 
                      onClick={() => handleFeatureToggle('dropRelease')}
                      className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center transition-all ${
                        customFeatures.dropRelease 
                          ? 'bg-purple-950/20 border-purple-500/50' 
                          : 'bg-black/20 border-neutral-800'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold block text-white">Priority Custom Drop Support</span>
                        <span className="text-[10px] text-neutral-500 font-mono">+ $950</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                        customFeatures.dropRelease ? 'bg-purple-500 border-purple-400 text-white' : 'border-neutral-700'
                      }`}>
                        {customFeatures.dropRelease && '✓'}
                      </div>
                    </div>

                  </div>
                </div>

                {/* 3. Text Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500 font-mono block uppercase">DESIRED BRAND / CODES_NAME</label>
                    <input 
                      type="text" 
                      placeholder="e.g. SYSTEM-X" 
                      required
                      className="w-full bg-black/40 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500 font-mono block uppercase">CONTACT TELEGRAM / EMAIL</label>
                    <input 
                      type="text" 
                      placeholder="@ridizain_client" 
                      required
                      className="w-full bg-black/40 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

              </div>

              {/* Dynamic Summary Block Side (Right Column) */}
              <div className="lg:col-span-4 bg-black/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
                
                <div className="space-y-4">
                  <div className="border-b border-neutral-800 pb-4">
                    <span className="text-[10px] text-neutral-500 font-mono block uppercase">ORDER SUMMARY</span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">UNPOSE DEPLOYMENT</h3>
                  </div>

                  {/* Summary Breakdown list */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Base System Tier ({launchTier.toUpperCase()}):</span>
                      <span className="text-[#f5f5f7] font-mono">
                        ${launchTier === 'premium' ? '8,500' : launchTier === 'enterprise' ? '14,900' : '4,500'}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-500">Custom Tokens Added:</span>
                      <span className="text-[#f5f5f7] font-mono">
                        {Object.values(customFeatures).filter(Boolean).length}x
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-500">System Integration Charge:</span>
                      <span className="text-green-400 font-mono">FREE</span>
                    </div>
                  </div>

                  <div className="border-t border-neutral-800 pt-4 flex justify-between items-baseline">
                    <span className="text-xs text-neutral-400 uppercase">Estimated Total:</span>
                    <span className="text-2xl font-black text-purple-400 font-mono">${calculateEstimate().toLocaleString()}</span>
                  </div>
                </div>

                {/* Launch Submit Button */}
                <div className="mt-6 space-y-3">
                  <button
                    type="submit"
                    disabled={submittingConfig}
                    className="w-full bg-[#f5f5f7] text-[#0d0d0e] hover:bg-purple-600 hover:text-white disabled:opacity-50 transition-all font-bold text-xs py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    {submittingConfig ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>PROCESSING PROTOCOLS...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 fill-current" />
                        <span>INITIALIZE MY SUIT</span>
                      </>
                    )}
                  </button>

                  {configSuccess && (
                    <div className="p-3 bg-green-950/20 border border-green-500/30 rounded-lg text-center">
                      <span className="text-[11px] text-green-400 font-mono block uppercase">SUCCESS // BLUEPRINT INITIALIZED</span>
                      <span className="text-[10px] text-neutral-400 block mt-1">Our team will reach out within 2 hours.</span>
                    </div>
                  )}

                  <span className="block text-[10px] text-neutral-500 text-center font-mono uppercase">
                    SECURED BY CRYPTOGRAPHIC CONTRACTS
                  </span>
                </div>

              </div>

            </form>

          </div>
        </section>


        {/* TESTIMONIALS & TRUST PLATFORM SYSTEM */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          
          <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between relative group">
            <span className="text-4xl text-purple-500/20 font-serif absolute top-4 right-6">“</span>
            <div className="space-y-4">
              <span className="text-[10px] text-purple-400 font-mono block">PARTNER LAB FEEDBACK</span>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                “UNPOSE has completely revolutionized how we drop capsule wardrobes. No stock risks, instant premium 3D models, and incredible response times in physical manufacturing.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="John K." className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#f5f5f7] block">Arthur S.</span>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">Founding Director, V-KNOT</span>
              </div>
            </div>
          </div>

          <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between relative group">
            <span className="text-4xl text-purple-500/20 font-serif absolute top-4 right-6">“</span>
            <div className="space-y-4">
              <span className="text-[10px] text-purple-400 font-mono block">RETAIL INTEGRATION METRIC</span>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                “Using the hybrid digital showroom, our physical footprint space requirements dropped by 75% while our repeat purchase score shot up to 86% within just 60 days.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Sarah L." className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#f5f5f7] block">Ksenia P.</span>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">Retail Architect, CYBER_WEAR</span>
              </div>
            </div>
          </div>

          <div className="bg-[#151517] rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between relative group">
            <span className="text-4xl text-purple-500/20 font-serif absolute top-4 right-6">“</span>
            <div className="space-y-4">
              <span className="text-[10px] text-purple-400 font-mono block">ENGINEER DESIGN NOTE</span>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                “The design DNA feels incredibly fresh. This isn't another generic brand. It's a precise combination of industrial blueprint layout with high fashion cinematic appeal.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Michael T." className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#f5f5f7] block">Dmitry Z.</span>
                <span className="text-[10px] text-neutral-500 block uppercase font-mono">3D Technical Artist</span>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* SYSTEM STATS FOOTER - Fully styled matching the blueprint elements */}
      <footer className="bg-[#0b0b0c] border-t border-neutral-900 mt-24 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs border-b border-neutral-900 pb-8">
            <div className="space-y-3">
              <span className="text-purple-400 font-mono uppercase block text-[10px] tracking-widest">SYSTEM CHANNELS</span>
              <ul className="space-y-1.5 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-all">Telegram @ridizain</a></li>
                <li><a href="#" className="hover:text-white transition-all">Official Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-all">Vortex Wardrobes</a></li>
                <li><a href="#" className="hover:text-white transition-all">FCC Regulatory</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-neutral-400 font-mono uppercase block text-[10px] tracking-widest">AUTONOMOUS MODULES</span>
              <ul className="space-y-1.5 text-neutral-500">
                <li><a href="#about" className="hover:text-white transition-all">A.LCE Protocol</a></li>
                <li><a href="#simulation" className="hover:text-white transition-all">Interactive 3D Fit</a></li>
                <li><a href="#formats" className="hover:text-white transition-all">Pop-up Assembly</a></li>
                <li><a href="#turnkey" className="hover:text-white transition-all">Turnkey Delivery</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-neutral-400 font-mono uppercase block text-[10px] tracking-widest">BLUEPRINT TECHNICALS</span>
              <ul className="space-y-1.5 text-neutral-500 font-mono text-[10px]">
                <li>NODE: EU_WEST_LONDON</li>
                <li>SYS_LOAD: {systemLoad}%</li>
                <li>SERIAL_NUM: 0092-24XHL9227</li>
                <li>STATUS: {totalOrders.toLocaleString()} ORDERS SECURED</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-purple-400 font-mono uppercase block text-[10px] tracking-widest">BRAND PRINCIPLES</span>
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                We believe in zero-inventory local production. Clothing is treated as fluid physical-digital assets configured via the net.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-500 font-mono gap-4">
            <div>
              <span>© {new Date().getFullYear()} UNPOSE SYSTEM®. ALL AUTONOMOUS PRODUCTION RIGHTS RESERVED.</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-purple-400">DESIGN BY @RIDIZAIN</span>
              <span>•</span>
              <span>SECURED CLOUD ENDPOINT</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
5