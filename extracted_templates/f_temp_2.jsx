import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Battery, 
  Shield, 
  Navigation, 
  Layers, 
  Sliders, 
  Zap, 
  Play, 
  X, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Activity, 
  RotateCcw,
  Volume2,
  VolumeX,
  Gauge
} from 'lucide-react';

export default function App() {
  // --- States for Configurator and HUD ---
  const [activeModule, setActiveModule] = useState('commute'); // commute, cargo, minimal, shopping
  const [scooterColor, setScooterColor] = useState('slate'); // slate, copper, obsidian
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [scooterPower, setScooterPower] = useState(true);
  const [speedMode, setSpeedMode] = useState('city'); // eco, city, sport
  const [playbackActive, setPlaybackActive] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Specs estimation calculators
  const getSpecs = () => {
    let baseSpeed = 15; // mph
    let baseRange = 28; // miles
    let baseWeight = 24; // lbs

    if (speedMode === 'eco') { baseSpeed = 12; baseRange = 36; }
    if (speedMode === 'sport') { baseSpeed = 24; baseRange = 18; }

    if (activeModule === 'cargo') { baseRange -= 3; baseWeight += 6; }
    if (activeModule === 'shopping') { baseRange -= 2; baseWeight += 4; }
    if (activeModule === 'commute') { baseWeight += 2; }

    return { speed: baseSpeed, range: baseRange, weight: baseWeight };
  };

  const currentSpecs = getSpecs();

  // Animation simulation for dynamic canvas dashboard (Telemetry)
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let points = [];
    const maxPoints = 40;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 150;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const step = 20;
      for (let i = 0; i < canvas.width; i += step) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += step) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      if (scooterPower) {
        // Add new point
        const speedMultiplier = speedMode === 'sport' ? 2.5 : speedMode === 'city' ? 1.5 : 0.8;
        const targetVal = canvas.height / 2 + Math.sin(Date.now() * 0.005 * speedMultiplier) * (20 * speedMultiplier);
        points.push(targetVal);
        if (points.length > maxPoints) points.shift();

        // Draw telemetry line
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(241, 164, 126, 0.85)'; // Copper color
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(241, 164, 126, 0.5)';
        
        for (let i = 0; i < points.length; i++) {
          const x = (canvas.width / (maxPoints - 1)) * i;
          const y = points[i];
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0; // Reset shadow

        // Fill area below
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(241, 164, 126, 0.15)');
        gradient.addColorStop(1, 'rgba(241, 164, 126, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [scooterPower, speedMode]);

  return (
    <div className="min-h-screen bg-[#1c2226] text-[#dfedf5] font-sans overflow-x-hidden selection:bg-[#f1a47e] selection:text-[#1c2226] relative">
      
      {/* Cinematic Ambient Backdrop Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(241,164,126,0.06)_0%,rgba(28,34,38,0)_70%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(241,164,126,0.04)_0%,rgba(28,34,38,0)_80%)] pointer-events-none z-0" />
      <div className="absolute bottom-[300px] left-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(143,163,173,0.03)_0%,rgba(28,34,38,0)_80%)] pointer-events-none z-0" />

      {/* --- PRESETS CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- NAVBAR --- */}
        <header className="py-6 sm:py-8 border-b border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f1a47e] animate-pulse shadow-[0_0_8px_#f1a47e]"></span>
            <span className="font-bold tracking-[0.25em] text-white uppercase text-sm sm:text-base">Phenomenon</span>
          </div>

          <nav className="hidden md:flex items-center space-x-10 text-xs tracking-widest text-[#8fa3ad]/80 uppercase">
            <a href="#overview" className="hover:text-white transition-colors duration-300">Overview</a>
            <a href="#modular" className="hover:text-white transition-colors duration-300">Modular Deck</a>
            <a href="#tech" className="hover:text-white transition-colors duration-300">Cockpit HUD</a>
            <a href="#specs" className="hover:text-white transition-colors duration-300">Technical Specs</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]"></span>
              <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">NIO Pal Lab</span>
            </div>
            <a 
              href="#preorder" 
              className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold text-[#1c2226] bg-[#f1a47e] rounded-full hover:bg-white hover:text-[#1c2226] transition-all duration-300 shadow-[0_4px_20px_rgba(241,164,126,0.15)]"
            >
              Reserve
            </a>
          </div>
        </header>

        {/* --- HERO SECTION --- */}
        <section id="overview" className="pt-8 sm:pt-16 pb-20 relative min-h-[90vh] flex flex-col justify-between">
          
          {/* Top Hero Info Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#8fa3ad]/60 flex items-center gap-2">
                  <span>Project Line</span>
                  <span className="w-6 h-[1px] bg-white/20"></span>
                </div>
                <h3 className="text-sm font-semibold tracking-widest text-white mt-1">Year — 2026</h3>
              </div>
              <div className="border-l border-white/[0.06] pl-4 py-1">
                <p className="text-xs sm:text-sm text-[#8fa3ad]/80 leading-relaxed font-light">
                  We believe the future is autonomous, highly modular, and deeply integrated with intelligent ecosystems.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              {/* Dynamic Status Badges */}
              <div className="flex items-center space-x-4 bg-white/[0.02] border border-white/[0.05] rounded-full p-1.5 px-4 text-[10px] tracking-widest uppercase text-[#8fa3ad]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f1a47e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f1a47e]"></span>
                </span>
                <span>Active Status: Configurator Live</span>
              </div>
            </div>

            <div className="lg:col-span-3 lg:text-right space-y-2">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#8fa3ad]/60 block">Pagination</span>
              <div className="flex items-center lg:justify-end space-x-4">
                <span className="text-xs tracking-widest text-white font-mono">01 — 05</span>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full border border-[#f1a47e] p-[2px] flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-[#f1a47e]"></span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Interactive Centerpiece & Large Background Typography */}
          <div className="relative flex flex-col items-center justify-center my-8 py-10">
            {/* Giant Background 'Pal' Text with Premium Outline & Blur Mask */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
              <h1 className="text-[25vw] md:text-[20vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent tracking-tighter leading-none select-none">
                Pal
              </h1>
            </div>

            {/* Glowing Accent Studio Light Behind Vehicle */}
            <div className="absolute w-[300px] sm:w-[450px] h-[150px] sm:h-[220px] bg-[#f1a47e]/10 rounded-full blur-[80px] pointer-events-none z-0 mt-20" />

            {/* Dynamic Vector/SVG Illustration of the NIO PAL scooter */}
            <div className="relative w-full max-w-[580px] h-[340px] z-10 flex items-center justify-center transition-all duration-500">
              <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                {/* Ground Shadow */}
                <ellipse cx="300" cy="360" rx="220" ry="25" fill="black" opacity="0.45" filter="blur(15px)" />
                <ellipse cx="180" cy="355" rx="55" ry="10" fill="black" opacity="0.3" filter="blur(8px)" />
                <ellipse cx="420" cy="355" rx="55" ry="10" fill="black" opacity="0.3" filter="blur(8px)" />

                {/* Left (Front) Wheels Setup */}
                <g id="front-left-wheel">
                  <ellipse cx="180" cy="340" rx="36" ry="36" fill="#14191c" stroke="#252d33" strokeWidth="4" />
                  <ellipse cx="180" cy="340" rx="24" ry="24" fill={scooterColor === 'slate' ? '#2e3a42' : scooterColor === 'copper' ? '#3d2f2b' : '#171717'} />
                  {/* Glowing Rim Accents (Copper vibe) */}
                  <ellipse cx="180" cy="340" rx="20" ry="20" fill="none" stroke="#f1a47e" strokeWidth="1.5" strokeDasharray="15 8" className="animate-[spin_20s_linear_infinite]" />
                  <circle cx="180" cy="340" r="10" fill="#111" />
                  <circle cx="180" cy="340" r="4" fill="#f1a47e" />
                </g>

                <g id="front-right-wheel">
                  <ellipse cx="230" cy="345" rx="24" ry="24" fill="#14191c" stroke="#252d33" strokeWidth="3" />
                  <ellipse cx="230" cy="345" rx="16" ry="16" fill={scooterColor === 'slate' ? '#2e3a42' : scooterColor === 'copper' ? '#3d2f2b' : '#171717'} />
                  <ellipse cx="230" cy="345" rx="13" ry="13" fill="none" stroke="#f1a47e" strokeWidth="1" strokeDasharray="10 5" className="animate-[spin_15s_linear_infinite]" />
                  <circle cx="230" cy="345" r="3" fill="#f1a47e" />
                </g>

                {/* Rear Wheels Setup */}
                <g id="rear-left-wheel">
                  <ellipse cx="420" cy="335" rx="34" ry="34" fill="#14191c" stroke="#252d33" strokeWidth="4" />
                  <ellipse cx="420" cy="335" rx="22" ry="22" fill={scooterColor === 'slate' ? '#2e3a42' : scooterColor === 'copper' ? '#3d2f2b' : '#171717'} />
                  <ellipse cx="420" cy="335" rx="18" ry="18" fill="none" stroke="#f1a47e" strokeWidth="1.5" strokeDasharray="18 6" className="animate-[spin_25s_linear_infinite_reverse]" />
                  <circle cx="420" cy="335" r="4" fill="#f1a47e" />
                </g>

                <g id="rear-right-wheel">
                  <ellipse cx="460" cy="340" rx="22" ry="22" fill="#14191c" stroke="#252d33" strokeWidth="3" />
                  <circle cx="460" cy="340" r="3" fill="#f1a47e" />
                </g>

                {/* Suspension Arms / Chassis Bottom */}
                <path d="M 180,340 L 300,342 L 420,335" fill="none" stroke="#333d45" strokeWidth="10" strokeLinecap="round" />
                <path d="M 230,345 L 300,342 L 460,340" fill="none" stroke="#252d2f" strokeWidth="6" strokeLinecap="round" />

                {/* Deck - Premium curved wood/carbon-like platform */}
                <path d="M 220,315 Q 310,295 440,310 L 450,320 L 210,325 Z" fill="#b09282" /> {/* Wood side veneer */}
                <path d="M 220,315 Q 310,295 440,310 L 435,315 Q 310,300 220,320 Z" fill="#2d3338" /> {/* Inset rubber grip padding */}

                {/* Front Steering Neck */}
                <path d="M 240,315 L 265,150 Q 270,120 270,100" fill="none" stroke={scooterColor === 'slate' ? '#46535c' : scooterColor === 'copper' ? '#c4896e' : '#292e33'} strokeWidth="18" strokeLinecap="round" />
                <path d="M 243,315 L 268,150 Q 273,120 273,100" fill="none" stroke="white" strokeWidth="2" opacity="0.15" /> {/* Light highlight line */}

                {/* Handlebars with integrated glowing elements */}
                <path d="M 220,95 L 320,95" fill="none" stroke="#1f2429" strokeWidth="8" strokeLinecap="round" />
                <path d="M 260,95 L 280,95" fill="none" stroke="#f1a47e" strokeWidth="10" strokeLinecap="round" /> {/* Center stem mount */}
                {/* Glow headlight bar */}
                {headlightsOn && (
                  <path d="M 220,95 L 320,95" fill="none" stroke="#f1a47e" strokeWidth="2" opacity="0.6" filter="blur(2px)" />
                )}

                {/* --- MODULAR SWAPPABLE ACCESSORIES (DYNAMIC MOUNT) --- */}
                {activeModule === 'commute' && (
                  <g id="commute-backpack-bag">
                    {/* Shadow underneath */}
                    <rect x="238" y="115" width="58" height="100" rx="14" fill="black" opacity="0.25" filter="blur(4px)" />
                    {/* Backpack Base */}
                    <rect x="240" y="110" width="54" height="96" rx="12" fill="#323c42" stroke="#48565e" strokeWidth="2" />
                    {/* Dark textile panel */}
                    <rect x="246" y="116" width="42" height="84" rx="8" fill="#1e2428" />
                    {/* Brand glowing emblem in center */}
                    <circle cx="267" cy="155" r="5" fill="#f1a47e" className="animate-pulse" />
                    <line x1="262" y1="155" x2="272" y2="155" stroke="#f1a47e" strokeWidth="1" />
                    <line x1="267" y1="150" x2="267" y2="160" stroke="#f1a47e" strokeWidth="1" />
                    {/* Tiny modular clip/buckle indicator */}
                    <rect x="257" y="198" width="20" height="6" rx="2" fill="#14191c" />
                  </g>
                )}

                {activeModule === 'cargo' && (
                  <g id="cargo-crate">
                    {/* Strong industrial-like carry container */}
                    <rect x="228" y="120" width="76" height="110" rx="6" fill="#252d32" stroke="#36434a" strokeWidth="3" />
                    {/* Corner protective reinforcement */}
                    <path d="M 228,126 L 228,120 L 234,120 M 304,126 L 304,120 L 298,120" fill="none" stroke="#f1a47e" strokeWidth="3" />
                    {/* Horizontal grip ridges */}
                    <line x1="236" y1="140" x2="296" y2="140" stroke="#161a1d" strokeWidth="4" />
                    <line x1="236" y1="155" x2="296" y2="155" stroke="#161a1d" strokeWidth="4" />
                    <line x1="236" y1="170" x2="296" y2="170" stroke="#161a1d" strokeWidth="4" />
                    <line x1="236" y1="185" x2="296" y2="185" stroke="#161a1d" strokeWidth="4" />
                    {/* Bright copper secure buckle */}
                    <rect x="260" y="215" width="12" height="18" rx="2" fill="#f1a47e" />
                  </g>
                )}

                {activeModule === 'shopping' && (
                  <g id="shopping-basket">
                    {/* Sleek metallic wire grid basket */}
                    <path d="M 225,120 L 295,120 L 285,210 L 235,210 Z" fill="#1b2124" opacity="0.8" />
                    {/* Wire outlines */}
                    <path d="M 225,120 L 295,120 L 285,210 L 235,210 Z" fill="none" stroke="#48565e" strokeWidth="3" />
                    {/* Vertical wires */}
                    <line x1="240" y1="120" x2="246" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="252" y1="120" x2="257" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="264" y1="120" x2="267" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="276" y1="120" x2="277" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    <line x1="288" y1="120" x2="287" y2="210" stroke="#48565e" strokeWidth="1.5" />
                    {/* Sleek Copper Carry Strap */}
                    <path d="M 225,120 Q 260,90 295,120" fill="none" stroke="#f1a47e" strokeWidth="2.5" />
                  </g>
                )}

                {activeModule === 'minimal' && (
                  <g id="minimal-plate">
                    {/* Low-profile tech console plate with integrated LED strip */}
                    <path d="M 258,110 L 278,110 L 275,220 L 261,220 Z" fill="#20272c" />
                    <line x1="268" y1="120" x2="268" y2="210" stroke="#f1a47e" strokeWidth="2.5" strokeDasharray="8 8" className="animate-pulse" />
                  </g>
                )}

                {/* Headlight beam vector overlay (glowing ambiance) */}
                {headlightsOn && (
                  <polygon points="220,95 80,180 80,110" fill="url(#headlight-gradient)" opacity="0.22" />
                )}

                {/* Helper definitions for gradient glowing effects */}
                <defs>
                  <linearGradient id="headlight-gradient" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f1a47e" />
                    <stop offset="100%" stopColor="#1c2226" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Absolute Position Accessories Swap Trigger Badges on Hover Visualizer */}
              <div className="absolute top-1/2 left-4 md:left-[-20px] -translate-y-1/2 flex flex-col space-y-2">
                <button 
                  onClick={() => setActiveModule('commute')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'commute' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Commute Bag</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'commute' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
                <button 
                  onClick={() => setActiveModule('cargo')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'cargo' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Cargo Crate</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'cargo' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
                <button 
                  onClick={() => setActiveModule('shopping')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'shopping' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Tech Basket</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'shopping' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
                <button 
                  onClick={() => setActiveModule('minimal')} 
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all duration-300 w-36 ${
                    activeModule === 'minimal' 
                      ? 'bg-[#f1a47e]/10 border-[#f1a47e] text-white' 
                      : 'bg-white/[0.02] border-white/5 text-[#8fa3ad]/60 hover:border-white/10 hover:text-[#8fa3ad]'
                  }`}
                >
                  <span>Minimalist</span>
                  <span className={`w-2 h-2 rounded-full ${activeModule === 'minimal' ? 'bg-[#f1a47e]' : 'bg-white/10'}`}></span>
                </button>
              </div>

              {/* Absolute Position Chassis Color Selectors */}
              <div className="absolute top-1/2 right-4 md:right-[-20px] -translate-y-1/2 flex flex-col items-center space-y-3 bg-[#242b30]/65 backdrop-blur-md p-3 rounded-2xl border border-white/[0.05]">
                <span className="text-[9px] tracking-widest text-[#8fa3ad]/60 uppercase rotate-90 my-3">Color</span>
                <button 
                  onClick={() => setScooterColor('slate')} 
                  className={`w-5 h-5 rounded-full bg-[#46535c] border-2 transition-transform duration-200 ${scooterColor === 'slate' ? 'border-[#f1a47e] scale-125' : 'border-transparent'}`}
                  title="Chamber Slate"
                />
                <button 
                  onClick={() => setScooterColor('copper')} 
                  className={`w-5 h-5 rounded-full bg-[#c4896e] border-2 transition-transform duration-200 ${scooterColor === 'copper' ? 'border-[#f1a47e] scale-125' : 'border-transparent'}`}
                  title="Copper Dust"
                />
                <button 
                  onClick={() => setScooterColor('obsidian')} 
                  className={`w-5 h-5 rounded-full bg-[#1c1c1c] border-2 transition-transform duration-200 ${scooterColor === 'obsidian' ? 'border-[#f1a47e] scale-125' : 'border-transparent'}`}
                  title="Obsidian Core"
                />
              </div>
            </div>

            {/* Quick Control Bar Overlay below vehicle */}
            <div className="flex items-center space-x-6 mt-4 z-10 bg-white/[0.02] border border-white/[0.05] p-3 rounded-2xl backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#8fa3ad]/70 tracking-wider">Headlight:</span>
                <button 
                  onClick={() => setHeadlightsOn(!headlightsOn)}
                  className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${headlightsOn ? 'bg-[#f1a47e]' : 'bg-white/10'}`}
                >
                  <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-[#1c2226] shadow ring-0 transition duration-200 ease-in-out ${headlightsOn ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <div className="h-4 w-[1px] bg-white/10"></div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-[#8fa3ad]/70 tracking-wider">Smart Mode:</span>
                <div className="flex space-x-1 bg-black/20 p-0.5 rounded-lg border border-white/[0.03]">
                  {['eco', 'city', 'sport'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSpeedMode(mode)}
                      className={`px-2 py-1 text-[9px] uppercase tracking-widest rounded-md transition-all duration-200 ${
                        speedMode === mode ? 'bg-[#f1a47e] text-[#1c2226] font-bold' : 'text-[#8fa3ad]/60 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lower Hero Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/[0.04] pt-8">
            <div className="md:col-span-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mb-2">A Smarter Last Mile</h2>
              <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed max-w-sm font-light">
                Pal is a near-future prototype for an intelligent, modular personal transport system that embraces AI and machine learning to offer flexible "last mile" transit, tailored for Chinese electric vehicle pioneer NIO.
              </p>
            </div>

            {/* Simulated Live Specs Panel */}
            <div className="md:col-span-5 grid grid-cols-3 gap-4 border-l border-r border-white/[0.04] px-0 md:px-8">
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/50 block">Est. Range</span>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                  {currentSpecs.range}<span className="text-xs text-[#f1a47e] ml-1">mi</span>
                </span>
                <span className="text-[9px] text-[#8fa3ad]/40 font-mono mt-0.5 block">at 96% battery</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/50 block">Max Speed</span>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                  {currentSpecs.speed}<span className="text-xs text-[#f1a47e] ml-1">mph</span>
                </span>
                <span className="text-[9px] text-[#8fa3ad]/40 font-mono mt-0.5 block">smart regulated</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/50 block">Chassis Wt.</span>
                <span className="text-2xl sm:text-3xl font-light text-white font-mono mt-1 block">
                  {currentSpecs.weight}<span className="text-xs text-[#f1a47e] ml-1">lbs</span>
                </span>
                <span className="text-[9px] text-[#8fa3ad]/40 font-mono mt-0.5 block">carbon-fiber core</span>
              </div>
            </div>

            {/* Interactive Video Playback Trigger */}
            <div className="md:col-span-3 flex justify-start md:justify-end">
              <div className="relative group cursor-pointer w-full max-w-[240px]" onClick={() => setPlaybackActive(true)}>
                <div className="h-24 w-full bg-[#242b30] rounded-xl overflow-hidden relative border border-white/[0.05] transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Fake animated landscape simulation background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-slate-800 opacity-90" />
                  {/* Subtle vector terrain or abstract lines */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-[#f1a47e]/10 blur-md animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-[#1c2226]/80 flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-[#f1a47e] group-hover:border-transparent">
                      <Play className="w-4 h-4 text-white group-hover:text-[#1c2226] translate-x-0.5" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">Watch Lab Flight</span>
                  <span className="text-[9px] text-[#8fa3ad]/40 font-mono">1:40 min</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* --- MODULAR SPEC SECTION (THE DESIGN SYSTEM IN ACTION) --- */}
        <section id="modular" className="py-24 border-t border-white/[0.04] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Modular Integration</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                  Adapts To Your Day,<br />Not The Other Way.
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-[#8fa3ad]/80 leading-relaxed font-light">
                Various accessories — bag, basket, shopping cart — can be effortlessly affixed to the front of PAL, locking into the structural smart neck with magnetic power connectors to power any integrated display screens and dynamic locking sensors.
              </p>

              {/* Advanced Tech details list with custom indicators */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] mt-1">
                    <Layers className="w-4 h-4 text-[#f1a47e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">Magnetic Docking Hub (NIO Lock™)</h4>
                    <p className="text-xs text-[#8fa3ad]/70 mt-0.5 leading-relaxed">
                      Instant accessory swapping. Dynamic sensors identify the attached module and automatically recalibrate balance, acceleration profiles, and dashboard UI layouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] mt-1">
                    <Cpu className="w-4 h-4 text-[#f1a47e]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">Continuous Machine Learning</h4>
                    <p className="text-xs text-[#8fa3ad]/70 mt-0.5 leading-relaxed">
                      Pal maps your habitual routes, remembers your accessory preferences for specific days, and suggests alternative modes based on local battery limits and weather metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* High-fidelity interactive modular showcase deck */}
            <div className="lg:col-span-7">
              <div className="bg-[#242b30]/40 rounded-3xl p-6 sm:p-8 border border-white/[0.04] relative overflow-hidden backdrop-blur-md">
                {/* Embedded decorative glowing ring background */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#f1a47e]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-8 border-b border-white/[0.04] pb-4">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">Interactive Deck Selector</span>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#f1a47e]" />
                    <span className="text-xs text-white tracking-wide font-mono">Module Configuration</span>
                  </div>
                </div>

                {/* Grid layout of modules cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Commute Bag */}
                  <div 
                    onClick={() => setActiveModule('commute')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'commute' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Zap className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">01 / COMMUTE</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Integrated Smart Backpack</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      A stylish water-resistant hardshell bag featuring integrated solar-charging threads, internal tech pocket dividers, and an ambient rear safety blinker.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Light (+2 lbs)</span>
                    </div>
                  </div>

                  {/* Cargo Box */}
                  <div 
                    onClick={() => setActiveModule('cargo')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'cargo' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Layers className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">02 / CARGO</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Heavy-Duty Secure Crate</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      Reinforced aluminum frame with biometric secure locking mechanisms, ideal for high-value logistics, groceries, or fragile parcel delivery.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Heavy (+6 lbs)</span>
                    </div>
                  </div>

                  {/* Shopping Basket */}
                  <div 
                    onClick={() => setActiveModule('shopping')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'shopping' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Navigation className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">03 / TECH BASKET</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Airflow Mesh Basket</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      A beautifully lightweight carbon-wire mesh bucket perfect for immediate utility, fresh market runs, and daily errands. Easily detaches with a simple strap.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Medium (+4 lbs)</span>
                    </div>
                  </div>

                  {/* Minimal */}
                  <div 
                    onClick={() => setActiveModule('minimal')} 
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      activeModule === 'minimal' 
                        ? 'bg-[#1c2226] border-[#f1a47e] shadow-[0_4px_30px_rgba(241,164,126,0.06)]' 
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white">
                        <Sliders className="w-4 h-4 text-[#f1a47e]" />
                      </div>
                      <span className="text-[10px] text-[#8fa3ad]/40 font-mono">04 / BARE</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Minimal Flight Deck</h3>
                    <p className="text-xs text-[#8fa3ad]/70 mt-1 leading-relaxed">
                      Removes any front luggage accessory entirely, displaying only the ultra-sleek, clean aesthetic lines. Optimized strictly for performance and high speeds.
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase">Weight Class</span>
                      <span className="text-xs font-mono text-[#f1a47e] font-bold">Ultralight (0 lbs)</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- DYNAMIC COCKPIT HUD SIMULATOR --- */}
        <section id="tech" className="py-20 border-t border-white/[0.04] relative">
          <div className="space-y-4 text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Digital Cockpit</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Real-Time Telemetry Interface
            </h2>
            <p className="text-xs sm:text-sm text-[#8fa3ad]/80 leading-relaxed font-light">
              Toggle dashboard features to experience our futuristic cockpit and telemetry mapping module, adjusting to your terrain profile on-the-fly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Control Console */}
            <div className="lg:col-span-4 bg-[#242b30]/40 rounded-3xl p-6 sm:p-8 border border-white/[0.04] flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-[#8fa3ad] uppercase">System State</span>
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${scooterPower ? 'bg-[#a3e635] animate-pulse' : 'bg-red-500'}`} />
                    <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase font-mono">{scooterPower ? 'ONLINE' : 'OFFLINE'}</span>
                  </div>
                </div>

                <div className="p-4 bg-black/20 rounded-2xl border border-white/[0.03]">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase block mb-3">Power Controller</span>
                  <button 
                    onClick={() => setScooterPower(!scooterPower)}
                    className={`w-full py-3 rounded-xl text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
                      scooterPower 
                        ? 'bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white' 
                        : 'bg-[#f1a47e] text-[#1c2226] hover:bg-white'
                    }`}
                  >
                    {scooterPower ? 'Shut Down Systems' : 'Initiate Ignition Sequence'}
                  </button>
                </div>

                <div className="p-4 bg-black/20 rounded-2xl border border-white/[0.03] space-y-4">
                  <span className="text-[10px] tracking-widest text-[#8fa3ad]/60 uppercase block">Drive Train Mode</span>
                  <div className="grid grid-cols-3 gap-2">
                    {['eco', 'city', 'sport'].map((mode) => (
                      <button
                        key={mode}
                        disabled={!scooterPower}
                        onClick={() => setSpeedMode(mode)}
                        className={`py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-200 disabled:opacity-30 ${
                          speedMode === mode && scooterPower
                            ? 'bg-[#f1a47e] text-[#1c2226] shadow-[0_2px_12px_rgba(241,164,126,0.3)]' 
                            : 'bg-white/[0.02] border border-white/[0.05] text-[#8fa3ad]/80 hover:bg-white/[0.05] hover:text-white'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.04] mt-6 text-xs text-[#8fa3ad]/60 leading-relaxed font-light">
                <p>Telemetry syncs via bluetooth low-energy with NIO connected car cloud networks.</p>
              </div>
            </div>

            {/* Dashboard HUD & Visualizer */}
            <div className="lg:col-span-8 bg-[#1f2529] rounded-3xl border border-white/[0.05] overflow-hidden flex flex-col justify-between relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              
              {/* Glass Glare & Top Status indicators */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-b from-[#242b30] to-transparent">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-[#f1a47e] uppercase block font-semibold">Live Telemetry HUD</span>
                  <h3 className="text-lg font-bold text-white mt-0.5 uppercase tracking-wide">Integrated NIO OS v4.26</h3>
                </div>

                {/* Simulated battery health bar */}
                <div className="flex items-center space-x-4 bg-black/20 p-2 px-4 rounded-xl border border-white/[0.04]">
                  <div className="flex items-center space-x-2">
                    <Battery className="w-4 h-4 text-[#a3e635]" />
                    <span className="text-xs font-mono text-white font-bold">96%</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/10" />
                  <span className="text-[10px] tracking-widest text-[#8fa3ad] uppercase">Optimum Temp (24°C)</span>
                </div>
              </div>

              {/* Dynamic Oscilloscope Telemetry Line */}
              <div className="relative flex-1 min-h-[160px] flex flex-col justify-center px-6 sm:px-8">
                {scooterPower ? (
                  <>
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
                    <div className="relative z-10 self-center text-center">
                      <span className="text-[10px] tracking-[0.4em] text-[#8fa3ad]/60 uppercase block mb-1">Live Velocity Output</span>
                      <div className="flex items-baseline justify-center space-x-1 font-mono">
                        <span className="text-5xl sm:text-6xl font-light text-white tracking-tighter">
                          {speedMode === 'eco' ? '12.0' : speedMode === 'city' ? '15.0' : '24.0'}
                        </span>
                        <span className="text-sm font-semibold text-[#f1a47e] tracking-wider">MPH</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <div className="inline-flex p-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-2">
                      <Zap className="w-6 h-6 animate-pulse" />
                    </div>
                    <p className="text-xs font-mono text-red-400/80 tracking-widest uppercase">System Power Cut — HUD Offline</p>
                  </div>
                )}
              </div>

              {/* Lower HUD Diagnostic Panel */}
              <div className="p-6 bg-black/15 border-t border-white/[0.04] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">Smart Regover</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-[#a3e635]' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Active (98.2%)' : 'Inactive'}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">Braking Style</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-white' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Dual Electronic' : 'N/A'}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">Grip Vector</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-white' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Optimal [4-Wheel]' : 'N/A'}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] tracking-widest text-[#8fa3ad]/50 uppercase block">AI Route Sync</span>
                  <span className={`text-xs font-mono font-bold block ${scooterPower ? 'text-[#f1a47e] animate-pulse' : 'text-[#8fa3ad]/30'}`}>
                    {scooterPower ? 'Calibrating...' : 'N/A'}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* --- FEATURES GRID (ULTRA PRESTIGE DESIGN CARDS) --- */}
        <section className="py-24 border-t border-white/[0.04] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block mb-3">Premium Systems</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                Designed for the next era of smart urban commuting
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed max-w-sm ml-auto">
                No plain layouts. Every millimeter has been structurally planned to showcase technical prowess and minimal aesthetic depth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-[#242b30]/30 rounded-3xl p-8 border border-white/[0.04] flex flex-col justify-between group hover:border-[#f1a47e]/35 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f1a47e]/10 group-hover:border-[#f1a47e]">
                  <Cpu className="w-5 h-5 text-[#f1a47e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">Intelligent AI Co-Pilot</h3>
                  <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                    An embedded neural network tracking local terrain elevations, active pedestrian levels, and battery drains. Automatically alters route guidelines.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#8fa3ad]/45 font-mono">
                <span>01 / TECHNOLOGY</span>
                <span className="text-[#f1a47e] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">NIO AI™</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#242b30]/30 rounded-3xl p-8 border border-white/[0.04] flex flex-col justify-between group hover:border-[#f1a47e]/35 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f1a47e]/10 group-hover:border-[#f1a47e]">
                  <Layers className="w-5 h-5 text-[#f1a47e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">Swappable Battery Cell</h3>
                  <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                    Swap active cells at any NIO Power Swap Station across the country in under 30 seconds. Safe, reliable, and continuously checked for structural integrity.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#8fa3ad]/45 font-mono">
                <span>02 / POWER DYNAMICS</span>
                <span className="text-[#f1a47e] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Swap Tech v3</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#242b30]/30 rounded-3xl p-8 border border-white/[0.04] flex flex-col justify-between group hover:border-[#f1a47e]/35 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f1a47e]/10 group-hover:border-[#f1a47e]">
                  <Shield className="w-5 h-5 text-[#f1a47e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">4-Wheel Safe Vectoring</h3>
                  <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                    Features dynamic independent steering actuators on all four wheels. Ensures extreme slide safety, low-radius cornering, and instant traction correction.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#8fa3ad]/45 font-mono">
                <span>03 / RIDE STABILITY</span>
                <span className="text-[#f1a47e] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Vector Lock</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- TECHNICAL SPEC SHEET --- */}
        <section id="specs" className="py-24 border-t border-white/[0.04] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 sticky top-10 space-y-4">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Detailed Specifications</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight">
                No compromises.<br />Only premium hardware.
              </h2>
              <p className="text-xs sm:text-sm text-[#8fa3ad]/70 leading-relaxed font-light">
                Explore the meticulous micro-specs behind PAL's production model, built to aircraft structural standards with premium lightweight composite resins.
              </p>
            </div>

            <div className="lg:col-span-8">
              {/* Dynamic Technical Specifications Tab */}
              <div className="bg-[#242b30]/30 rounded-3xl border border-white/[0.04] overflow-hidden">
                <div className="flex border-b border-white/[0.04] bg-black/10">
                  {['overview', 'chassis', 'intelligence'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border-b-2 ${
                        activeTab === tab 
                          ? 'border-[#f1a47e] text-white bg-white/[0.01]' 
                          : 'border-transparent text-[#8fa3ad]/50 hover:text-white'
                      }`}
                    >
                      {tab} Specs
                    </button>
                  ))}
                </div>

                <div className="p-6 sm:p-8">
                  {activeTab === 'overview' && (
                    <div className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Top Travel Speed</span>
                        <span className="font-mono text-white font-semibold">24 mph (Smart Speed Limit Regulated)</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Electric Motor Power</span>
                        <span className="font-mono text-white font-semibold">Dual 450W Hub Motors (Front & Rear Assist)</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Battery Range Cap</span>
                        <span className="font-mono text-white font-semibold">Up to 36 miles on ECO Mode</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Battery Fast-Charge Duration</span>
                        <span className="font-mono text-white font-semibold">80% in 15 minutes at home wallbox</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Waterproof Integrity</span>
                        <span className="font-mono text-white font-semibold">IPX7 Sealed Chassis Deck</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'chassis' && (
                    <div className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Core Material</span>
                        <span className="font-mono text-white font-semibold">Unibody T300 Carbon-Fiber & Wood Laminate</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Steering Hub Pivot</span>
                        <span className="font-mono text-white font-semibold">Double-wishbone independent suspension</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Wheel Dimensions</span>
                        <span className="font-mono text-white font-semibold">7.5" Low-profile high-grip pneumatic rubber</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Weight Support Cap</span>
                        <span className="font-mono text-white font-semibold">Up to 260 lbs active load</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'intelligence' && (
                    <div className="divide-y divide-white/[0.04] text-xs sm:text-sm">
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Onboard Processor</span>
                        <span className="font-mono text-white font-semibold">NIO Adam™ High-Power System-on-Chip (SoC)</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Sensory System Array</span>
                        <span className="font-mono text-white font-semibold">2x Solid-state LiDAR, 4x Ultrasonics, 1x HD Camera</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">Security Protection</span>
                        <span className="font-mono text-white font-semibold">Biometric TouchID handle lock, GPS geo-fence tracking</span>
                      </div>
                      <div className="py-4 flex justify-between">
                        <span className="text-[#8fa3ad]/60 uppercase tracking-wider">OTA Upgrades support</span>
                        <span className="font-mono text-white font-semibold">Yes — Lifelong regular operating system updates</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- PRE-ORDER CONFIGURATOR SECTION (PRESTIGE CTA) --- */}
        <section id="preorder" className="py-24 border-t border-white/[0.04] relative">
          <div className="absolute top-0 right-[15%] w-[350px] h-[350px] bg-[#f1a47e]/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#f1a47e] uppercase block">Reservation Terminal</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
                Secure Your Spot.<br />Ride the Future.
              </h2>
              <p className="text-sm sm:text-base text-[#8fa3ad]/70 leading-relaxed font-light">
                Reserve your custom-configured NIO Pal prototype today. Your customizable reservation is fully refundable up to 30 days prior to your production dispatch.
              </p>

              {/* Minimal bullet check list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-xs text-[#8fa3ad]">
                  <Check className="w-4 h-4 text-[#f1a47e]" />
                  <span>Fully refundable reservation deposit ($100 USD equivalent)</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#8fa3ad]">
                  <Check className="w-4 h-4 text-[#f1a47e]" />
                  <span>Includes 1 year complimentary NIO Power Swap priority access</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#8fa3ad]">
                  <Check className="w-4 h-4 text-[#f1a47e]" />
                  <span>Premium welcome package containing branded apparel & tools</span>
                </div>
              </div>
            </div>

            {/* Configurator Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#242b30]/50 rounded-3xl p-6 sm:p-8 border border-white/[0.05] backdrop-blur-md relative overflow-hidden">
                
                {bookingSuccess ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="inline-flex p-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-2">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Reservation Authenticated!</h3>
                    <p className="text-xs sm:text-sm text-[#8fa3ad]/80 leading-relaxed max-w-sm mx-auto">
                      Thank you. Your spot in the NIO Pal queue has been verified. A verification email containing invoice specs and reservation token details has been dispatched.
                    </p>
                    <button 
                      onClick={() => setBookingSuccess(false)}
                      className="mt-6 px-6 py-2.5 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors underline"
                    >
                      Reset Configurator
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setBookingSuccess(true); }} className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold tracking-widest uppercase text-[#8fa3ad]/60 mb-4">Confirm Configuration Specs</h3>
                      
                      {/* Configuration Details Box */}
                      <div className="bg-black/20 rounded-2xl p-4 border border-white/[0.04] space-y-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-[#8fa3ad]/60">Accessory Pack</span>
                          <span className="font-mono text-white capitalize">{activeModule} Pack</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8fa3ad]/60">Chassis Color</span>
                          <span className="font-mono text-white capitalize">{scooterColor} Metallic</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8fa3ad]/60">Drive System Mode</span>
                          <span className="font-mono text-white capitalize">{speedMode} Max</span>
                        </div>
                        <div className="pt-2 border-t border-white/[0.04] flex justify-between text-sm font-bold text-[#f1a47e]">
                          <span>ESTIMATED PRICE</span>
                          <span className="font-mono">
                            ${activeModule === 'cargo' ? '3,499' : activeModule === 'shopping' ? '3,299' : '2,999'} USD
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/60 block mb-2">Full Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Your Name" 
                          className="w-full bg-black/20 border border-white/[0.08] rounded-xl py-3 px-4 text-xs font-mono text-white focus:outline-none focus:border-[#f1a47e] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] tracking-widest uppercase text-[#8fa3ad]/60 block mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                          placeholder="name@domain.com" 
                          className="w-full bg-black/20 border border-white/[0.08] rounded-xl py-3 px-4 text-xs font-mono text-white focus:outline-none focus:border-[#f1a47e] transition-colors"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 text-xs tracking-[0.2em] uppercase font-bold text-[#1c2226] bg-[#f1a47e] rounded-xl hover:bg-white hover:text-[#1c2226] transition-all duration-300 shadow-[0_4px_30px_rgba(241,164,126,0.15)] flex items-center justify-center space-x-2"
                    >
                      <span>Reserve Production Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <span className="text-[9px] text-[#8fa3ad]/40 font-mono block text-center uppercase tracking-widest">
                      Reservation Deposit: $100 — Fully Refundable
                    </span>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/[0.04] bg-black/25 relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-[#8fa3ad]/60">
            
            {/* Left Block */}
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#f1a47e]" />
              <span className="font-bold tracking-[0.2em] text-white uppercase font-mono">Phenomenon NIO Pal</span>
            </div>

            {/* Navigation links inside footer */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 uppercase tracking-widest text-[10px]">
              <a href="#overview" className="hover:text-white transition-colors duration-200">Overview</a>
              <a href="#modular" className="hover:text-white transition-colors duration-200">Modular Deck</a>
              <a href="#tech" className="hover:text-white transition-colors duration-200">HUD Console</a>
              <a href="#specs" className="hover:text-white transition-colors duration-200">Hardware specs</a>
            </div>

            {/* Social / Info Links matching design file */}
            <div className="flex items-center space-x-6 tracking-widest text-[11px]">
              <a href="#" className="hover:text-white transition-colors">Fb</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">In</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Tw</a>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-white/[0.03] text-center text-[10px] text-[#8fa3ad]/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} PHENOMENON DESIGN LABS &amp; NIO TRANSPORTATION CO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* --- LAB FLIGHT VIDEO BACKDROP DIALOG PLAYBACK OVERLAY --- */}
      {playbackActive && (
        <div className="fixed inset-0 bg-[#1c2226]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-[#242b30] rounded-3xl max-w-3xl w-full border border-white/[0.08] overflow-hidden shadow-2xl relative">
            
            {/* Header info bar */}
            <div className="p-4 sm:p-6 border-b border-white/[0.05] flex justify-between items-center bg-black/15">
              <div>
                <span className="text-[9px] tracking-widest text-[#f1a47e] uppercase block">Flight Simulation</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">NIO PAL - Autonomous Last Mile</h3>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setAudioMuted(!audioMuted)}
                  className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#8fa3ad] hover:text-white transition-all"
                  title={audioMuted ? "Unmute" : "Mute"}
                >
                  {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setPlaybackActive(false)}
                  className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Dynamic Particle Map Showcase inside playback box */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,164,126,0.1)_0%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />
              
              {/* Dynamic decorative radar scan circle */}
              <div className="w-44 h-44 rounded-full border border-dashed border-[#f1a47e]/25 animate-[spin_40s_linear_infinite] flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-dashed border-white/5 animate-[spin_20s_linear_infinite_reverse]" />
              </div>

              {/* Vector abstract vehicle moving along glowing coordinate points */}
              <div className="absolute inset-x-12 bottom-12 border-t border-white/[0.05] pt-3 flex justify-between text-[10px] text-[#8fa3ad]/40 font-mono">
                <span>COORD: 31.2304° N, 121.4737° E</span>
                <span className="text-[#f1a47e] animate-pulse">RADAR LINK ACTIVE</span>
              </div>

              <div className="absolute text-center px-4">
                <div className="inline-flex p-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-white animate-bounce mb-3">
                  <Activity className="w-6 h-6 text-[#f1a47e]" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Simulation Engine Render</h4>
                <p className="text-xs text-[#8fa3ad]/70 mt-1 max-w-sm leading-relaxed">
                  Displaying real-time autonomous path mapping of Pal's sensory arrays interacting with busy pedestrian crossings.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
3