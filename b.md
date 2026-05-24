import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Wind, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Layers, 
  RotateCcw, 
  Sliders, 
  Play, 
  Pause, 
  ChevronRight, 
  ArrowUpRight, 
  Shield, 
  Activity, 
  Feather, 
  Moon, 
  Sun,
  Coffee
} from 'lucide-react';

export default function App() {
  // State for dashboard controls
  const [altitude, setAltitude] = useState(65); // 0 to 100 (Dial 1)
  const [warmth, setWarmth] = useState(40);     // 0 to 100 (Dial 2)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isMuted, setIsMuted] = useState(false);
  const [ringProgress, setRingProgress] = useState(78); // Goal completion ring
  const [activeFeature, setActiveFeature] = useState(0);
  const [systemLogs, setSystemLogs] = useState([
    "Atmospheric stabilizer calibrated.",
    "Binaural frequency aligned at 432Hz.",
    "System running in ultra-quiet peak state."
  ]);

  // Audio synthesis state (Web Audio API)
  const audioCtxRef = useRef(null);
  const windFilterRef = useRef(null);
  const windGainRef = useRef(null);
  const chimeGainRef = useRef(null);
  const chimeTimerRef = useRef(null);

  // Rotate interaction states
  const [isDraggingDial1, setIsDraggingDial1] = useState(false);
  const [isDraggingDial2, setIsDraggingDial2] = useState(false);

  // Ambient synth engine
  const startAudioEngine = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // --- WIND GENERATION (Pink/White Noise with dynamic Lowpass Filter) ---
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0, b1, b2, b3, b4, b5, b6;
        b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.11; // scale down
          b6 = white * 0.115926;
        }

        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        // Base lowpass frequency linked to Altitude dial
        filter.Q.value = 3.0;
        filter.frequency.value = 150 + (altitude * 6);

        const gainNode = ctx.createGain();
        gainNode.gain.value = isMuted ? 0 : 0.08 * (altitude / 100);

        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        noiseSource.start(0);

        windFilterRef.current = filter;
        windGainRef.current = gainNode;

        // --- GENTLE CHIME LOOP (Simulated forest/warmth aura) ---
        const chimeGain = ctx.createGain();
        chimeGain.gain.value = isMuted ? 0 : 0.15 * (warmth / 100);
        chimeGain.connect(ctx.destination);
        chimeGainRef.current = chimeGain;

        const scheduleChimes = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') return;
          
          // Speed or frequency of chimes scales with warmth dial
          const delay = (12000 / (warmth + 10)) * (0.8 + Math.random() * 0.4); 
          
          triggerOrganicChime();
          chimeTimerRef.current = setTimeout(scheduleChimes, delay * 1000);
        };

        const triggerOrganicChime = () => {
          if (!audioCtxRef.current || isMuted) return;
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          
          osc.type = 'sine';
          // Pentatonic scale based on Warmth value
          const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
          const baseIndex = Math.floor((warmth / 100) * pentatonic.length);
          const freq = pentatonic[Math.min(baseIndex + Math.floor(Math.random() * 3), pentatonic.length - 1)];
          
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          
          oscGain.gain.setValueAtTime(0, ctx.currentTime);
          oscGain.gain.linearRampToValueAtTime(0.08 * (warmth / 100), ctx.currentTime + 0.1);
          oscGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3 + Math.random() * 3);
          
          // Add a subtle delay/resonance
          const delayNode = ctx.createDelay();
          delayNode.delayTime.value = 0.35;
          const feedback = ctx.createGain();
          feedback.gain.value = 0.4;

          osc.connect(oscGain);
          oscGain.connect(ctx.destination);
          
          // feed into delay
          oscGain.connect(delayNode);
          delayNode.connect(feedback);
          feedback.connect(delayNode);
          delayNode.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 7);
        };

        scheduleChimes();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
      addLog("Environmental synthesizer activated.");
    } catch (e) {
      console.error("Audio Context could not be initialized:", e);
    }
  };

  const stopAudioEngine = () => {
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
    if (chimeTimerRef.current) {
      clearTimeout(chimeTimerRef.current);
    }
    addLog("Audio engine suspended. Silent reflection mode.");
  };

  // Log management helper
  const addLog = (msg) => {
    setSystemLogs(prev => [msg, ...prev.slice(0, 4)]);
  };

  // Sync synthesizer nodes dynamically when controls are turned
  useEffect(() => {
    if (windFilterRef.current) {
      windFilterRef.current.frequency.setValueAtTime(150 + (altitude * 12), audioCtxRef.current.currentTime);
    }
    if (windGainRef.current) {
      windGainRef.current.gain.setValueAtTime(isMuted ? 0 : 0.08 * (altitude / 100), audioCtxRef.current.currentTime);
    }
  }, [altitude, isMuted]);

  useEffect(() => {
    if (chimeGainRef.current) {
      chimeGainRef.current.gain.setValueAtTime(isMuted ? 0 : 0.15 * (warmth / 100), audioCtxRef.current.currentTime);
    }
  }, [warmth, isMuted]);

  // Handle dial rotation drag physics
  const handleDialDrag = (e, targetDial) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
    let angleDeg = (angleRad * 180) / Math.PI + 90; // normalize
    if (angleDeg < 0) angleDeg += 360;

    // Convert angle to 0-100 range (mapping 0deg to 360deg linearly for simplicity)
    const rawVal = Math.round((angleDeg / 360) * 100);
    
    if (targetDial === 1) {
      setAltitude(rawVal);
    } else {
      setWarmth(rawVal);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F1] text-[#1B1C1E] font-sans antialiased overflow-x-hidden selection:bg-[#E2DCCF] transition-colors duration-500">
      
      {/* GLOW OVERLAYS */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#EAE9E4]/60 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[35%] right-0 w-[500px] h-[500px] bg-[#E1DBD0]/30 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* FLOATING NAVIGATION */}
      <header className="sticky top-6 left-0 w-full z-50 px-4 md:px-8">
        <nav className="max-w-6xl mx-auto backdrop-blur-md bg-white/45 border border-white/40 shadow-sm rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/60 hover:shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1B1C1E] via-[#3B3D42] to-[#8C867A] flex items-center justify-center p-[2px] shadow-sm">
              <div className="w-full h-full bg-[#1B1C1E] rounded-full flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#F4F4F1] animate-spin-slow" />
              </div>
            </div>
            <div>
              <span className="font-semibold tracking-wide text-md text-[#1b1c1e]">Nottion</span>
              <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded-full bg-[#E4E3DD] text-[#716E65] uppercase tracking-widest font-mono">v1.2.5</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#5D5B53]">
            <a href="#dashboard" onClick={() => setCurrentTab('dashboard')} className={`hover:text-[#1B1C1E] transition-colors ${currentTab === 'dashboard' ? 'text-[#1B1C1E] underline underline-offset-4 decoration-2 decoration-[#C5A880]' : ''}`}>Zen Dashboard</a>
            <a href="#features" onClick={() => setCurrentTab('features')} className={`hover:text-[#1B1C1E] transition-colors ${currentTab === 'features' ? 'text-[#1B1C1E] underline underline-offset-4 decoration-2 decoration-[#C5A880]' : ''}`}>Aesthetic Core</a>
            <a href="#about" onClick={() => setCurrentTab('about')} className={`hover:text-[#1B1C1E] transition-colors ${currentTab === 'about' ? 'text-[#1B1C1E] underline underline-offset-4 decoration-2 decoration-[#C5A880]' : ''}`}>The Philosophy</a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => isPlaying ? stopAudioEngine() : startAudioEngine()}
              className={`flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 border uppercase tracking-widest ${
                isPlaying 
                  ? 'bg-[#1B1C1E] text-[#F4F4F1] border-transparent shadow-lg shadow-black/10 hover:bg-black/90' 
                  : 'bg-transparent text-[#1B1C1E] border-[#1B1C1E]/20 hover:bg-[#1B1C1E]/5'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#C5A880] animate-pulse" />
                  <span>Silence Canvas</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#1B1C1E]" />
                  <span>Activate Environment</span>
                </>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 md:px-8 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography Content */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/50 border border-neutral-200/60 px-3 py-1.5 rounded-full text-xs text-[#827E72] font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Skeuomorphic Calm, Digital Precision</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-none text-[#1b1c1e]">
              Elevate your workspace to the <span className="font-serif italic font-normal text-[#9B825E] relative">highest peaks<span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#C5A880] to-transparent rounded-full" /></span>
            </h1>

            <p className="text-[#646154] text-md leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Nottion bridges the tranquility of misty, high-altitude mountainscapes with ultra-premium skeuomorphic workstation parameters. Calibrated for deep-focus practitioners, digital creators, and sound architects.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#canvas-section" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#1B1C1E] to-[#3B3D42] text-white rounded-full text-sm font-semibold shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Enter Zenith Studio</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <button 
                onClick={() => {
                  startAudioEngine();
                  const element = document.getElementById("canvas-section");
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-neutral-50 border border-neutral-200 text-[#1B1C1E] rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Wind className="w-4 h-4 text-[#827E72] animate-bounce" />
                <span>Hear the Atmosphere</span>
              </button>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E5E3DB]/80 text-center lg:text-left">
              <div>
                <p className="text-2xl font-light text-[#1B1C1E]">432<span className="text-xs font-mono ml-0.5 text-[#9B825E]">Hz</span></p>
                <p className="text-[10px] uppercase tracking-widest text-[#827E72] mt-1">Harmonic Tone</p>
              </div>
              <div>
                <p className="text-2xl font-light text-[#1B1C1E]">0.02<span className="text-xs font-mono ml-0.5 text-[#9B825E]">s</span></p>
                <p className="text-[10px] uppercase tracking-widest text-[#827E72] mt-1">Dial Latency</p>
              </div>
              <div>
                <p className="text-2xl font-light text-[#1B1C1E]">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-[#827E72] mt-1">Sensory Sanctum</p>
              </div>
            </div>
          </div>

          {/* Interactive Floating Card & Preview Visualizer */}
          <div className="lg:col-span-7 relative flex justify-center">
            
            {/* Main Interactive Preview Card mimicking the "Top Area" of your inspiration image */}
            <div className="w-full max-w-[540px] bg-white rounded-3xl p-6 shadow-2xl shadow-[#363530]/10 border border-white/60 relative overflow-hidden transition-all duration-500 group hover:shadow-3xl hover:border-white">
              
              {/* Internal Card Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#827E72]">Aether Ambient Node</div>
              </div>

              {/* Title inside card */}
              <div className="text-center mb-4">
                <h2 className="text-4xl font-light tracking-wide text-neutral-800 uppercase font-mono">Nottion</h2>
                <div className="h-[2px] w-12 bg-[#9B825E]/50 mx-auto mt-2 rounded-full" />
              </div>

              {/* Minimal stats within the top panel */}
              <div className="grid grid-cols-2 gap-8 text-center py-2 mb-6 bg-stone-50/50 rounded-2xl border border-neutral-100">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-[#827E72] mb-1">Elevation Focus</span>
                  <span className="text-xl font-light text-neutral-700 tracking-tight">{altitude * 8}m</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-[#827E72] mb-1">Forest Foliage warmth</span>
                  <span className="text-xl font-light text-neutral-700 tracking-tight">{warmth}%</span>
                </div>
              </div>

              {/* SVG MOUNTAIN ILLUSTRATION */}
              {/* Emulating the spectacular sepia/monochromatic mountain range with cloud layers & warm tone trees from the image */}
              <div className="w-full h-[220px] rounded-2xl bg-gradient-to-b from-[#EDEDEA] via-[#F2F1ED] to-[#EAE9E4] relative overflow-hidden border border-neutral-200/40">
                
                {/* Parallax Cloud Backdrop */}
                <div className="absolute inset-0 bg-radial-gradient from-white/30 to-transparent mix-blend-overlay" />
                
                {/* Peak Layer 3 (Far mountain - high elevation) */}
                <svg className="absolute bottom-0 left-0 w-full h-full text-stone-300 transition-transform duration-700 ease-out" 
                     style={{ transform: `translateY(${(100 - altitude) * 0.1}px)` }}
                     viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 200 L250 30 L450 200 Z" fill="currentColor" opacity="0.45" />
                  <path d="M250 30 L270 90 L230 140 Z" fill="#EAE9E4" opacity="0.3" />
                </svg>

                {/* Peak Layer 2 (Mid mountain - with snow cleft details) */}
                <svg className="absolute bottom-0 left-0 w-full h-full text-[#9C988F] transition-transform duration-500 ease-out" 
                     style={{ transform: `translateY(${(100 - altitude) * 0.15}px) scale(${1 + (altitude * 0.001)})` }}
                     viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 200 L180 50 L340 200 Z" fill="currentColor" opacity="0.65" />
                  {/* Highlight on Ridge */}
                  <path d="M180 50 L200 110 L150 200 Z" fill="#FFFFFF" opacity="0.25" />
                  
                  <path d="M220 200 L380 40 L500 200 Z" fill="currentColor" opacity="0.55" />
                  <path d="M380 40 L400 90 L360 160 Z" fill="#FFFFFF" opacity="0.15" />
                </svg>

                {/* Soft Dynamic Fog Clouds (Governed by "Altitude" state) */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#EAE9E4] via-white/80 to-transparent opacity-85 pointer-events-none transition-all duration-700"
                  style={{ transform: `translateY(${(100 - altitude) * 0.25}px)` }}
                />

                {/* Peak Layer 1 (Foreground peak with warm forest tint) */}
                <svg className="absolute bottom-[-10px] left-0 w-full h-full text-[#4E4B45]" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 200 L280 80 L460 200 Z" fill="currentColor" />
                  {/* Rich Warm/Gold Slope Forest Layer (Changes scale or opacity based on Dial 2 Warmth) */}
                  <path d="M240 106 L280 80 L350 140 Z" fill="#9B825E" opacity={0.3 + (warmth / 100) * 0.5} className="transition-all duration-500" />
                  {/* Snow shader */}
                  <path d="M280 80 L295 120 L260 150 Z" fill="#FFFFFF" opacity="0.15" />
                </svg>

                {/* Forest Layer (Vector trees rendering warmth) */}
                <div className="absolute bottom-1 w-full px-4 flex justify-between items-end opacity-70 pointer-events-none">
                  {[...Array(24)].map((_, i) => {
                    const height = 15 + (Math.sin(i * 1.5) * 8) + (Math.random() * 4);
                    // Tree becomes golden brown as warmth dial is cranked up
                    const color = warmth > 50 ? 'text-[#8C7654]' : 'text-[#4A4740]';
                    return (
                      <svg key={i} className={`w-2 h-auto ${color} transition-all duration-500`} style={{ height: `${height}px` }} viewBox="0 0 10 20" fill="currentColor">
                        <polygon points="5,0 10,12 8,12 10,17 7,17 9,20 1,20 3,17 0,17 2,12 0,12" />
                      </svg>
                    );
                  })}
                </div>

                {/* Floating focus coordinates */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-mono text-white/90">
                  REF_Z: {altitude}°N
                </div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-mono text-white/90">
                  TEMP_AURA: {Math.round(20 + warmth * 0.2)}°C
                </div>

                {/* Tactile glow indicator */}
                <div 
                  className="absolute bottom-16 right-1/4 w-3 h-3 rounded-full bg-[#E5B56E] opacity-75 blur-xs animate-ping"
                  style={{ transform: `scale(${0.5 + warmth / 100})` }}
                />
              </div>

              {/* Aesthetic subtle labels underneath the mountain screen */}
              <div className="flex justify-between text-[9px] font-mono text-neutral-400 mt-3 px-1 uppercase tracking-widest">
                <span>Freq: Balanced</span>
                <span>Altitude: Zenith</span>
                <span>Misty Focus</span>
              </div>

            </div>

            {/* Back Decoration Card representing shadow & depth */}
            <div className="absolute top-8 -right-4 w-full h-full max-w-[540px] bg-[#E4E3DD] rounded-3xl -z-10 shadow-lg border border-neutral-300/40" />

            {/* Float Element: Wind vector icon badge */}
            <div className="absolute -left-6 bottom-16 bg-white border border-neutral-200 p-4 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[180px] animate-float">
              <div className="p-2 rounded-lg bg-yellow-500/10 text-[#9B825E]">
                <Wind className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-[#827E72]">Aether Pressure</span>
                <span className="text-sm font-semibold text-neutral-800">Dynamic</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRANSITIONAL SECTION - THE ORGANIC WAVE SPLIT DASHBOARD */}
      {/* This is the most crucial aesthetic transition from your image.
        The layout splits from clean light off-white into a deep matte-charcoal 
        control dashboard using an organic wavy SVG divider.
      */}
      <div id="canvas-section" className="relative bg-[#1B1C1E] mt-16 pt-24 pb-32 text-neutral-300">
        
        {/* Organic Wave Boundary SVG */}
        <div className="absolute top-0 left-0 w-full transform -translate-y-[99%] overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 C150,110 350,20 500,60 C650,100 850,110 1000,70 C1100,45 1150,55 1200,80 L1200,120 L0,120 Z" 
              fill="#1B1C1E" 
            />
          </svg>
        </div>

        {/* Dashboard Area Header */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
            <div>
              <p className="text-[11px] font-mono text-[#9B825E] uppercase tracking-widest mb-2">Tactile Audio & Atmospheric Controls</p>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">The Sensory Instrument Panel</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2 text-xs bg-neutral-800/80 px-3 py-1.5 rounded-full border border-neutral-700/60">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-red-400'}`} />
                <span className="text-neutral-300 font-mono text-[10px] uppercase tracking-wide">
                  {isPlaying ? 'Aura Engine Active' : 'Atmosphere Silenced'}
                </span>
              </span>
              <button 
                onClick={() => setIsMuted(!isMuted)} 
                className="p-2.5 rounded-full bg-neutral-800 border border-neutral-700 hover:bg-neutral-700/80 text-white transition-all"
                title={isMuted ? "Unmute Ambient" : "Mute Ambient"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#C5A880]" />}
              </button>
            </div>
          </div>

          {/* MAIN SKEUOMORPHIC CONTROLLER INTERFACE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
            
            {/* COLUMN 1: LEFT SUB-DASHBOARD (Tactile Charts & Rings) */}
            <div className="lg:col-span-4 bg-neutral-900/60 rounded-3xl p-6 border border-neutral-800/80 backdrop-blur-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">Flow Analytics</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 animate-pulse" />
                </div>

                {/* Line Chart Component mimicking the elegant slim graphs */}
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-2">Cognitive Load (24h)</span>
                    <div className="h-20 w-full flex items-end justify-between pt-4 relative">
                      {/* Guide grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                        <div className="w-full h-[1px] bg-white" />
                        <div className="w-full h-[1px] bg-white" />
                        <div className="w-full h-[1px] bg-white" />
                      </div>

                      {/* SVG Line path for a smooth visual line graph */}
                      <svg className="absolute inset-0 w-full h-full text-[#C5A880] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path 
                          d="M 0 80 Q 15 45 30 65 T 60 20 T 90 70 T 100 35" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* Gradient below line */}
                        <path 
                          d="M 0 80 Q 15 45 30 65 T 60 20 T 90 70 T 100 35 L 100 100 L 0 100 Z" 
                          fill="url(#goldGradient)" 
                          opacity="0.08"
                        />
                        <defs>
                          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#C5A880" />
                            <stop offset="100%" stopColor="#C5A880" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider mb-2">Spectral Focus Distribution</span>
                    <div className="grid grid-cols-4 gap-2 pt-2">
                      {[40, 75, 55, 90].map((val, idx) => (
                        <div key={idx} className="bg-neutral-800/80 h-16 rounded-lg relative overflow-hidden flex items-end p-1">
                          <div 
                            className="w-full bg-gradient-to-t from-[#9B825E] to-[#C5A880] rounded-md transition-all duration-700"
                            style={{ height: `${val}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Ring Card inside left sub-dashboard */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Aura Density Status</span>
                  <span className="text-lg font-light text-white">Ideal (Deep Mode)</span>
                </div>
                {/* Glowing ring gauge imitating the gold-yellow ring progress */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-neutral-800"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#E5B56E]"
                      strokeDasharray={`${ringProgress}, 100`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-[10px] font-mono text-[#E5B56E] font-semibold">{ringProgress}%</div>
                </div>
              </div>

            </div>

            {/* COLUMN 2: CENTER DIALS PANEL (The core of your design inspiration) */}
            <div className="lg:col-span-8 bg-neutral-900/40 rounded-3xl p-8 border border-neutral-800/80 backdrop-blur-lg flex flex-col justify-between relative overflow-hidden">
              
              {/* Internal abstract visual grid background mimicking top panel lines */}
              <div className="absolute inset-0 bg-radial-gradient from-white/[0.01] to-transparent pointer-events-none" />

              <div>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-lg text-white font-light tracking-wide">Environment Modulators</h3>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5">Hold & Drag to fine-tune aesthetic frequency</p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => { setAltitude(65); setWarmth(40); addLog("Dials reset to Default Zen coordinates."); }}
                      className="p-1.5 rounded bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-all"
                      title="Reset Coordinates"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* THE DIALS CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-6 items-center">
                  
                  {/* SKEUOMORPHIC DIAL 1 (ALTITUDE / FOCUS WIND) */}
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-4 flex items-center space-x-2">
                      <Wind className="w-3 h-3 text-[#C5A880]" />
                      <span>Altitude focus</span>
                    </span>

                    {/* Interactive Dial Body */}
                    <div 
                      className={`w-40 h-40 rounded-full bg-gradient-to-br from-[#2D2F33] via-[#1D1E22] to-[#121315] p-[10px] shadow-2xl relative cursor-pointer select-none transition-all duration-300 ${isDraggingDial1 ? 'scale-105 shadow-black/60 shadow-inner' : 'hover:scale-[1.03]'}`}
                      onMouseMove={(e) => isDraggingDial1 && handleDialDrag(e, 1)}
                      onTouchMove={(e) => isDraggingDial1 && handleDialDrag(e, 1)}
                      onMouseDown={() => { setIsDraggingDial1(true); startAudioEngine(); }}
                      onTouchStart={() => { setIsDraggingDial1(true); startAudioEngine(); }}
                      onMouseUp={() => setIsDraggingDial1(false)}
                      onTouchEnd={() => setIsDraggingDial1(false)}
                      onMouseLeave={() => setIsDraggingDial1(false)}
                    >
                      {/* Inner Matte Circle with notch */}
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1E2024] to-[#25282D] flex items-center justify-center relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]">
                        
                        {/* 360 Degree Segment Indicators */}
                        <div className="absolute inset-0 p-3 opacity-35 pointer-events-none">
                          <div className="w-full h-full rounded-full border border-dashed border-neutral-600 relative">
                            {[...Array(8)].map((_, i) => (
                              <div 
                                key={i} 
                                className="absolute w-[2px] h-[6px] bg-neutral-400" 
                                style={{
                                  top: '50%',
                                  left: '50%',
                                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-54px)`
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Glowing dial state segment representation */}
                        <div className="absolute inset-0 p-1 pointer-events-none">
                          <div 
                            className="w-full h-full rounded-full border-2 border-transparent transition-all duration-300"
                            style={{
                              borderTopColor: altitude > 25 ? '#C5A880' : 'transparent',
                              borderRightColor: altitude > 50 ? '#C5A880' : 'transparent',
                              borderBottomColor: altitude > 75 ? '#C5A880' : 'transparent',
                              transform: `rotate(${altitude * 3.6}deg)`
                            }}
                          />
                        </div>

                        {/* Center Indicator Knob */}
                        <div 
                          className="w-20 h-20 rounded-full bg-gradient-to-b from-[#2B2E33] to-[#15161A] shadow-lg flex items-center justify-center relative border border-neutral-700/60"
                          style={{ transform: `rotate(${altitude * 3.6}deg)` }}
                        >
                          {/* Radial Line Indicator pointer */}
                          <div className="absolute w-[3px] h-8 bg-[#C5A880] rounded-full top-1 left-1/2 -translate-x-1/2 shadow-glow shadow-[#C5A880]/50" />
                          <div className="w-4 h-4 rounded-full bg-[#131417] shadow-inner border border-neutral-800" />
                        </div>

                        {/* Real-time floating value */}
                        <div className="absolute bottom-4 text-[10px] font-mono font-medium text-neutral-400">
                          {altitude * 8}m
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 mt-4 text-center max-w-[180px] font-light">
                      Modulates high-altitude pink noise & atmospheric mist heights.
                    </p>
                  </div>

                  {/* SKEUOMORPHIC DIAL 2 (FOREST / WARMT-CHIMES) */}
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-4 flex items-center space-x-2">
                      <Feather className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Warmth & Forest</span>
                    </span>

                    {/* Interactive Dial Body */}
                    <div 
                      className={`w-40 h-40 rounded-full bg-gradient-to-br from-[#2D2F33] via-[#1D1E22] to-[#121315] p-[10px] shadow-2xl relative cursor-pointer select-none transition-all duration-300 ${isDraggingDial2 ? 'scale-105 shadow-black/60 shadow-inner' : 'hover:scale-[1.03]'}`}
                      onMouseMove={(e) => isDraggingDial2 && handleDialDrag(e, 2)}
                      onTouchMove={(e) => isDraggingDial2 && handleDialDrag(e, 2)}
                      onMouseDown={() => { setIsDraggingDial2(true); startAudioEngine(); }}
                      onTouchStart={() => { setIsDraggingDial2(true); startAudioEngine(); }}
                      onMouseUp={() => setIsDraggingDial2(false)}
                      onTouchEnd={() => setIsDraggingDial2(false)}
                      onMouseLeave={() => setIsDraggingDial2(false)}
                    >
                      {/* Inner Matte Circle with notch */}
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1E2024] to-[#25282D] flex items-center justify-center relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]">
                        
                        {/* 360 Degree Segment Indicators */}
                        <div className="absolute inset-0 p-3 opacity-35 pointer-events-none">
                          <div className="w-full h-full rounded-full border border-dashed border-neutral-600 relative">
                            {[...Array(8)].map((_, i) => (
                              <div 
                                key={i} 
                                className="absolute w-[2px] h-[6px] bg-neutral-400" 
                                style={{
                                  top: '50%',
                                  left: '50%',
                                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-54px)`
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Glowing state representation */}
                        <div className="absolute inset-0 p-1 pointer-events-none">
                          <div 
                            className="w-full h-full rounded-full border-2 border-transparent transition-all duration-300"
                            style={{
                              borderTopColor: warmth > 25 ? '#87bba2' : 'transparent',
                              borderRightColor: warmth > 50 ? '#87bba2' : 'transparent',
                              borderBottomColor: warmth > 75 ? '#87bba2' : 'transparent',
                              transform: `rotate(${warmth * 3.6}deg)`
                            }}
                          />
                        </div>

                        {/* Center Indicator Knob */}
                        <div 
                          className="w-20 h-20 rounded-full bg-gradient-to-b from-[#2B2E33] to-[#15161A] shadow-lg flex items-center justify-center relative border border-neutral-700/60"
                          style={{ transform: `rotate(${warmth * 3.6}deg)` }}
                        >
                          {/* Radial Line Indicator pointer */}
                          <div className="absolute w-[3px] h-8 bg-[#87bba2] rounded-full top-1 left-1/2 -translate-x-1/2 shadow-glow shadow-[#87bba2]/50" />
                          <div className="w-4 h-4 rounded-full bg-[#131417] shadow-inner border border-neutral-800" />
                        </div>

                        {/* Real-time floating value */}
                        <div className="absolute bottom-4 text-[10px] font-mono font-medium text-neutral-400">
                          {warmth}%
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 mt-4 text-center max-w-[180px] font-light">
                      Modulates micro-tonal crystal chime loops & pine wood frequencies.
                    </p>
                  </div>

                </div>
              </div>

              {/* Dynamic Console Logs at the bottom of panel */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 bg-neutral-950/40 p-4 rounded-xl flex items-center space-x-4">
                <div className="flex-shrink-0 flex items-center space-x-2 text-xs font-mono text-[#9B825E]">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>CONSOLE:</span>
                </div>
                <div className="flex-grow text-[11px] font-mono text-neutral-400 truncate">
                  {systemLogs[0] || "Monitoring environment parameters..."}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* DETAILED FEATURES SECTOR ("THE AESTHETIC CORE") */}
      <section id="features" className="py-24 bg-[#EAE9E4]/40 border-t border-[#E4E3DD]/80 relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9B825E] font-semibold bg-white/60 border px-3 py-1 rounded-full">Crafted with Purpose</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1B1C1E] tracking-tight mt-3">High-fidelity tools for digital focus.</h2>
            <p className="text-sm text-[#716E65] mt-2">Every pixel designed around balance, tactility, and premium performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature Card 1 */}
            <div 
              className="bg-white/60 border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setActiveFeature(0)}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#9B825E]/10 flex items-center justify-center text-[#9B825E] mb-6 transition-all duration-300 group-hover:bg-[#1B1C1E] group-hover:text-[#F4F4F1]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-[#1B1C1E] mb-2">Micro-layered Canvas</h3>
              <p className="text-sm text-[#716E65] leading-relaxed font-light">
                Experience soft, parallax mountains designed dynamically around altitude modulators. The elevation updates your aesthetic layout in real-time.
              </p>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#9B825E] space-x-1">
                <span>Explore layering engine</span>
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature Card 2 */}
            <div 
              className="bg-white/60 border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setActiveFeature(1)}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#9B825E]/10 flex items-center justify-center text-[#9B825E] mb-6 transition-all duration-300 group-hover:bg-[#1B1C1E] group-hover:text-[#F4F4F1]">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-[#1B1C1E] mb-2">Acoustic Synthesizer</h3>
              <p className="text-sm text-[#716E65] leading-relaxed font-light">
                Pure, client-side synthesized wind frequencies and delicate pentatonic chimes modeled via native Web Audio API. Zero dependencies, maximum tranquility.
              </p>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#9B825E] space-x-1">
                <span>Synthesizer blueprint</span>
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature Card 3 */}
            <div 
              className="bg-white/60 border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setActiveFeature(2)}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#9B825E]/10 flex items-center justify-center text-[#9B825E] mb-6 transition-all duration-300 group-hover:bg-[#1B1C1E] group-hover:text-[#F4F4F1]">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-[#1B1C1E] mb-2">Tactile Knobs & Dial Physics</h3>
              <p className="text-sm text-[#716E65] leading-relaxed font-light">
                Interact with highly-styled skeuomorphic control dials rendered with custom gradients, outer shadows, and sensitive orbital tracking mechanics.
              </p>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#9B825E] space-x-1">
                <span>Dial mechanics config</span>
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* DYNAMIC ZEN QUOTE INTERACTIVE BOX */}
          <div className="mt-16 bg-[#1B1C1E] rounded-3xl p-8 text-neutral-300 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-lg">
              <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-widest block">Focus Philosophy</span>
              <p className="text-lg font-light italic text-white">
                "Modern productivity is obsessed with acceleration. True peak focus lies in elevation—taking a step up to a pristine, silent atmosphere."
              </p>
              <span className="block text-xs text-neutral-500 font-mono">— Nottion Zen Manifesto</span>
            </div>
            <div className="flex-shrink-0 bg-neutral-900 border border-neutral-800 p-4 rounded-2xl text-center">
              <span className="block text-[9px] uppercase tracking-widest text-neutral-500 mb-2">Interactive Aura Rate</span>
              <span className="text-3xl font-serif text-[#C5A880]">{Math.round((altitude + warmth) / 2)} <span className="text-xs font-mono text-neutral-400">Zenith</span></span>
              <button 
                onClick={() => { setRingProgress(prev => Math.min(prev + 5, 100)); addLog("Focus score updated (+5%)."); }}
                className="block w-full mt-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700/80 text-white rounded-xl text-[10px] uppercase font-semibold tracking-wider transition-all"
              >
                Boost Focus Streak
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED PHILOSOPHY ABOUT SECTION */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-4 md:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            {/* Visual Composition reflecting pristine design system from image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-white border border-[#E4E3DD] p-6 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1B1C1E]" />
                  <span className="text-xs font-mono text-[#827E72] uppercase">Sanctuary Monitor</span>
                </div>
                <span className="text-xs font-mono text-[#9B825E]">System: Grounded</span>
              </div>

              {/* Minimal geometric graphic simulating premium console panels */}
              <div className="my-8 flex justify-center items-center relative h-36">
                <div className="absolute w-32 h-32 rounded-full border border-dashed border-[#E5E3DB] animate-spin-slow" />
                <div className="absolute w-24 h-24 rounded-full border border-[#C5A880]/40 flex items-center justify-center">
                  <Compass className="w-8 h-8 text-[#9B825E] animate-bounce" />
                </div>
                {/* Floating dial lines */}
                <div className="absolute w-40 h-[1px] bg-gradient-to-r from-transparent via-[#9B825E]/40 to-transparent" />
                <div className="absolute h-40 w-[1px] bg-gradient-to-b from-transparent via-[#9B825E]/40 to-transparent" />
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-[#827E72]">Current Preset</span>
                  <span className="text-sm font-semibold text-[#1B1C1E]">Alpines of Hokkaido</span>
                </div>
                <div className="text-[10px] font-mono text-[#827E72]">
                  SEC_NODE: active
                </div>
              </div>
            </div>
            {/* Floating golden accent shadow */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E5B56E]/20 rounded-full blur-xl -z-10" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9B825E] font-bold">The Design DNA</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1B1C1E] tracking-tight">Inspired by Tactile Depth</h2>
            
            <p className="text-sm text-[#716E65] leading-relaxed font-light">
              Nottion was born from a simple observation: modern digital screens feel flat, cold, and visually urgent. We extracted the rich, tactile depth of physical sound synthesizers, combined it with the calming landscape of high-elevation peaks, and created a digital workstation that breathes.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded bg-[#9B825E]/10 text-[#9B825E] mt-1">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1B1C1E]">Absolute Privacy & Zero Tracking</h4>
                  <p className="text-xs text-[#716E65] mt-1">Your sensory configuration resides exclusively in your active memory sandbox. No telemetry, no logs leaving your local environment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 rounded bg-[#9B825E]/10 text-[#9B825E] mt-1">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1B1C1E]">The Micro-break Protocol</h4>
                  <p className="text-xs text-[#716E65] mt-1">We encourage you to pause periodically, rotate the physical warmth dials, and sync your breathing to the glowing amber pulse.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION: THE ZENITH ENTRY */}
      <section className="bg-[#1B1C1E] py-24 px-4 md:px-8 relative overflow-hidden text-center text-neutral-300">
        
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B825E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-widest font-bold">Zenith Portal</span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">Step into the Sensory Sanctuary.</h2>
          <p className="text-neutral-400 font-light max-w-lg mx-auto leading-relaxed text-sm">
            Configure your environment, activate the low-frequency synthesizer, and experience peak cognitive flow today. No trial limits, no subscriptions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                startAudioEngine();
                const element = document.getElementById("canvas-section");
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#C5A880] hover:bg-[#BCA179] text-[#1B1C1E] font-semibold rounded-full shadow-lg shadow-[#C5A880]/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Initialize Workspace</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a 
              href="#canvas-section"
              className="w-full sm:w-auto px-6 py-4 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white rounded-full text-sm font-medium transition-all duration-300"
            >
              View System Architecture
            </a>
          </div>

          <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest pt-6">
            Supported on all premium digital focus monitors & sound devices.
          </p>
        </div>
      </section>

      {/* PREMIUM MINIMAL FOOTER */}
      <footer className="bg-[#151618] border-t border-neutral-900 py-16 px-4 md:px-8 text-neutral-500 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
            </div>
            <span className="text-sm font-semibold text-white tracking-wide">Nottion Labs</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            <a href="#dashboard" className="hover:text-white transition-colors">Workspace</a>
            <a href="#features" className="hover:text-white transition-colors">Core System</a>
            <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
            <span className="text-neutral-600">© 2026 Nottion Inc.</span>
          </div>

          <div>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-900 text-[10px] font-mono text-emerald-400 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All systems optimal</span>
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
2
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Search, 
  Menu, 
  X, 
  Sliders, 
  Compass, 
  Award, 
  ShieldCheck, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  ShoppingBag,
  Check,
  RotateCcw,
  BookOpen
} from 'lucide-react';

export default function App() {
  // Navigation & UI States
  const [activeTab, setActiveTab] = useState('HOME');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeBikeIndex, setActiveBikeIndex] = useState(0);
  const [customizerOpen, setCustomizerOpen] = useState(false);

  // Customizer States (defaults to match first bike model)
  const [selectedFrameColor, setSelectedFrameColor] = useState('#D1D5DB'); // Chrome Silver
  const [selectedLeatherColor, setSelectedLeatherColor] = useState('#8C4F2B'); // Honey Brown
  const [hasFrontCarrier, setHasFrontCarrier] = useState(true);
  const [fenderColor, setFenderColor] = useState('#9CA3AF'); // Matching fenders

  // Interactive Hotspot details
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Success Notification state
  const [notification, setNotification] = useState('');

  // Booking form states
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    model: 'City Cruiser',
    frameSize: 'Medium (54cm)',
    message: ''
  });

  const bikes = [
    {
      id: '01',
      name: 'City Cruiser',
      tagline: 'Ride in style',
      price: '8,499 DKK',
      rawPrice: 8499,
      description: 'City Cruiser is designed and built based on the idea that a bicycle should be just as comfortable and elegant as a classic sports car.',
      frameColor: '#D1D5DB', // Chrome
      leatherColor: '#8C4F2B', // Honey Brown
      carrier: true,
      specs: {
        weight: '11.8 kg',
        gears: 'Shimano Alfine 8-speed',
        frame: 'Double-butted CrMo Steel',
        tires: 'Panaracer Pasela 32c'
      }
    },
    {
      id: '02',
      name: 'Classic Sport',
      tagline: 'Agility meets heritage',
      price: '9,799 DKK',
      rawPrice: 9799,
      description: 'A lighter, more aggressive profile built for swift urban commuting. Strips away the carrier for an ultra-clean aerodynamic silhouette.',
      frameColor: '#1E293B', // Obsidian
      leatherColor: '#451A03', // Dark Espresso
      carrier: false,
      specs: {
        weight: '10.2 kg',
        gears: 'Single Speed / Flip-Flop Hub',
        frame: 'Columbus Cromor Steel Tubing',
        tires: 'Vittoria Corsa 28c'
      }
    },
    {
      id: '03',
      name: 'Gravel Explorer',
      tagline: 'Beyond the tarmac',
      price: '11,200 DKK',
      rawPrice: 11200,
      description: 'Engineered for off-road reliability. Features broader tire clearance, reinforced frame bosses for bikepacking, and high-performance disc brakes.',
      frameColor: '#2B433B', // British Racing Green
      leatherColor: '#18181B', // Carbon Black
      carrier: true,
      specs: {
        weight: '12.4 kg',
        gears: 'SRAM Apex 1x11 Speed',
        frame: 'Reynolds 531 Heavy Duty Steel',
        tires: 'Schwalbe G-One 40c'
      }
    }
  ];

  // Sync customizer preset when bike slide changes
  useEffect(() => {
    const current = bikes[activeBikeIndex];
    setSelectedFrameColor(current.frameColor);
    setSelectedLeatherColor(current.leatherColor);
    setHasFrontCarrier(current.carrier);
    setBookingForm(prev => ({ ...prev, model: current.name }));
  }, [activeBikeIndex]);

  // Handle slide change
  const nextSlide = () => {
    setActiveBikeIndex((prev) => (prev + 1) % bikes.length);
  };

  const prevSlide = () => {
    setActiveBikeIndex((prev) => (prev - 1 + bikes.length) % bikes.length);
  };

  // Helper to show floating notification
  const triggerNotification = (text) => {
    setNotification(text);
    setTimeout(() => setNotification(''), 4000);
  };

  // Handle customized order
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    triggerNotification(`Successfully added customized ${bikes[activeBikeIndex].name} to your reservation.`);
  };

  // Handle booking form submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) {
      triggerNotification('Please fill in required fields.');
      return;
    }
    setBookingOpen(false);
    triggerNotification(`Thank you, ${bookingForm.name}! Your consultation request for the ${bookingForm.model} has been reserved.`);
    setBookingForm({
      name: '',
      email: '',
      model: bikes[activeBikeIndex].name,
      frameSize: 'Medium (54cm)',
      message: ''
    });
  };

  // Pre-configured Design Swatches
  const frameSwatches = [
    { name: 'Chrome Silver', value: '#D1D5DB' },
    { name: 'Obsidian Matte', value: '#1E293B' },
    { name: 'Racing Green', value: '#2B433B' },
    { name: 'Sahara Sand', value: '#C2A17E' },
    { name: 'Classic Burgundy', value: '#581C1C' }
  ];

  const leatherSwatches = [
    { name: 'Classic Honey', value: '#8C4F2B' },
    { name: 'Dark Espresso', value: '#451A03' },
    { name: 'Stealth Black', value: '#18181B' }
  ];

  // Hotspots definitions mapped to bike layout coordinate
  const hotspots = [
    { id: 'bars', x: 530, y: 110, title: 'Cruiser Handlebars', desc: 'Crafted from high-polished alloy with hand-stitched premium leather grips matching your saddle selection.' },
    { id: 'saddle', x: 280, y: 150, title: 'Brooks B17 Leather Saddle', desc: 'Handcrafted in Birmingham, England. Molds to your unique anatomy over miles of riding.' },
    { id: 'rack', x: 610, y: 190, title: 'Integrated Porteur Rack', desc: 'Sleek structural front carrier rated up to 15kg. Built directly into the steering geometry.' },
    { id: 'hub', x: 160, y: 310, title: 'Internal Hub Gearing', desc: 'Protected, maintenance-free shifting. Enables seamless gear changes even when fully stationary at lights.' },
    { id: 'frame', x: 420, y: 220, title: 'Double-Butted Steel Frame', desc: 'Hand-brazed lugs of high-tensile CrMo steel. Provides unparalleled road dampening and aesthetic finesse.' }
  ];

  return (
    <div className="min-h-screen bg-[#1F2226] text-white flex flex-col relative overflow-x-hidden selection:bg-[#4AD2B6] selection:text-[#1F2226] font-sans antialiased">
      
      {/* BACKGROUND STUDIO SHADOW / LIGHT GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft radial keylight behind the bicycle showcase */}
        <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[80vw] h-[55vh] rounded-full bg-gradient-radial from-[#32383F] to-transparent opacity-65 blur-3xl" />
        {/* Ambient mint glow matching UI accent color */}
        <div className="absolute top-[10%] left-[25%] w-[300px] h-[300px] rounded-full bg-[#4AD2B6]/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-black/40 blur-[100px]" />
      </div>

      {/* NOTIFICATION TOAST */}
      {notification && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-[#2d3238] border border-[#4AD2B6]/40 text-[#E5E7EB] px-6 py-3 rounded-md shadow-2xl flex items-center space-x-3 transition-all duration-300 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#4AD2B6] animate-pulse" />
          <p className="text-xs tracking-wider uppercase font-medium">{notification}</p>
        </div>
      )}

      {/* OUTER EDITORIAL GRID FRAMING LINES */}
      <div className="absolute inset-y-0 left-[6%] w-[1px] bg-white/[0.04] pointer-events-none z-30" />
      <div className="absolute inset-y-0 right-[6%] w-[1px] bg-white/[0.04] pointer-events-none z-30" />
      <div className="absolute top-[80px] inset-x-0 h-[1px] bg-white/[0.04] pointer-events-none z-30" />

      {/* TOP BRAND NAVIGATION */}
      <header className="relative w-full h-[80px] flex items-center justify-between px-[6%] z-40 border-b border-white/[0.02]">
        {/* Left Side Logo */}
        <div className="flex items-center space-x-10">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-7 h-7 flex flex-col justify-between p-[5px] border border-white/60 group-hover:border-[#4AD2B6] transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#4AD2B6] transition-colors duration-300 self-center" />
              <span className="w-full h-[1.5px] bg-white group-hover:bg-[#4AD2B6] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold tracking-[0.25em] uppercase text-white leading-none">NORDEN</span>
              <span className="text-[7px] tracking-[0.4em] text-white/45 uppercase mt-1">KØBENHAVN</span>
            </div>
          </a>
        </div>

        {/* Center / Right Links */}
        <nav className="hidden md:flex items-center space-x-12 text-[11px] font-semibold tracking-[0.25em] text-white/50">
          {['HOME', 'BIKES', 'SPECIFICATION', 'HERITAGE'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                const element = document.getElementById(tab.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`hover:text-white transition-colors duration-300 uppercase py-2 relative ${
                activeTab === tab ? 'text-white' : ''
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-[#4AD2B6] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Interactive Actions */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="p-2 text-white/60 hover:text-[#4AD2B6] transition-colors relative"
            aria-label="Search Catalog"
          >
            <Search size={16} />
          </button>

          {/* Search Box Pull-down */}
          {searchOpen && (
            <div className="absolute top-[80px] right-[10%] bg-[#1E2125] border border-white/10 p-3 rounded shadow-xl flex items-center space-x-2 animate-fade-in z-50">
              <input 
                type="text" 
                placeholder="Search bikes, gears..." 
                className="bg-transparent border-none text-xs outline-none text-white w-48 placeholder:text-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    triggerNotification(`Search for "${searchQuery}" is not available in demo.`);
                    setSearchOpen(false);
                  }
                }}
              />
              <button onClick={() => { triggerNotification(`Searching for ${searchQuery}...`); setSearchOpen(false); }}>
                <ArrowRight size={14} className="text-[#4AD2B6]" />
              </button>
            </div>
          )}

          {/* Custom Shopping Basket indicator */}
          <button 
            onClick={() => {
              if (cartCount > 0) {
                triggerNotification("Redirecting you to complete your handcrafted reservation details.");
                setBookingOpen(true);
              } else {
                triggerNotification("Your design board is empty. Choose standard specifications or customize.");
              }
            }}
            className="p-2 text-white/60 hover:text-[#4AD2B6] transition-colors relative"
          >
            <ShoppingBag size={16} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#4AD2B6] text-[#1F2226] font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setBookingOpen(true)}
            className="border border-[#4AD2B6]/40 hover:border-[#4AD2B6] px-4 py-1.5 text-[10px] tracking-[0.2em] font-medium text-white hover:text-[#4AD2B6] uppercase rounded transition-all duration-300 bg-[#4AD2B6]/5"
          >
            RESERVE NOW
          </button>
        </div>
      </header>

      {/* SOCIAL VERTICAL FLOATER (RIGHT MARGIN) & LANGUAGE INDICATOR */}
      <div className="hidden lg:flex flex-col justify-between items-center absolute right-[2%] top-[120px] bottom-[100px] w-6 z-40">
        {/* Top Grid Icon */}
        <button 
          onClick={() => {
            setCustomizerOpen(!customizerOpen);
            triggerNotification(customizerOpen ? "Exited configuration deck" : "Opened visual customization studio.");
          }}
          className="text-white/40 hover:text-[#4AD2B6] transition-colors py-2 group"
          title="Open Customization Deck"
        >
          <Sliders size={18} className="group-hover:rotate-95 transition-transform" />
        </button>

        {/* Centered Vertical Links */}
        <div className="flex flex-col space-y-12 my-auto">
          <a href="#instagram" className="text-[9px] tracking-[0.3em] font-medium uppercase text-white/30 hover:text-[#4AD2B6] transition-all transform rotate-90 origin-bottom-left whitespace-nowrap pl-6">
            INSTAGRAM
          </a>
          <a href="#journal" className="text-[9px] tracking-[0.3em] font-medium uppercase text-white/30 hover:text-[#4AD2B6] transition-all transform rotate-90 origin-bottom-left whitespace-nowrap pl-6">
            JOURNAL
          </a>
          <a href="#journal" className="text-[9px] tracking-[0.3em] font-medium uppercase text-white/30 hover:text-[#4AD2B6] transition-all transform rotate-90 origin-bottom-left whitespace-nowrap pl-6">
            TWITTER
          </a>
        </div>

        {/* Language Selector */}
        <div className="text-[10px] tracking-[0.1em] text-white/40 hover:text-white cursor-pointer transition-colors select-none">
          En <span className="text-[8px] text-white/20">▼</span>
        </div>
      </div>

      {/* LEFT MARGIN STYLISH ACCENTS */}
      <div className="hidden lg:flex flex-col justify-between items-center absolute left-[2%] top-[120px] bottom-[100px] w-6 z-40">
        <div className="text-[9px] text-white/30 tracking-[0.2em] uppercase origin-top-left -rotate-90 transform translate-y-20 whitespace-nowrap">
          DANISH DESIGN CO.
        </div>
        <div className="flex flex-col items-center space-y-4">
          <span className="w-[1px] h-20 bg-white/10" />
          <span className="text-[8px] font-bold text-white/25">EST. 2012</span>
        </div>
      </div>

      {/* MAIN MAIN CONTENT LAYOUT */}
      <main className="flex-1 w-full flex flex-col z-10">

        {/* HERO AREA (id="home") */}
        <section id="home" className="min-h-[85vh] lg:min-h-[90vh] w-full flex flex-col justify-between px-[6%] pt-12 pb-8 relative border-b border-white/[0.02]">
          
          {/* Main Flex Grid of Hero contents */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
            
            {/* Left Content Column (Hero text elements) */}
            <div className="lg:col-span-4 z-20 flex flex-col justify-center select-none pr-4 lg:pr-8">
              {/* Animated Slide indicator */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-[12px] font-bold text-[#4AD2B6] tracking-wider">
                  0{bikes[activeBikeIndex].id}
                </span>
                <span className="w-12 h-[1px] bg-white/20" />
                <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-white/40">
                  Premium Collection
                </span>
              </div>

              {/* Dynamic Heading and descriptive text */}
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.05]">
                {bikes[activeBikeIndex].tagline.split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? "font-bold block" : "font-extralight block text-white/80"}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <p className="text-[13px] leading-relaxed text-white/50 mb-8 max-w-sm">
                {bikes[activeBikeIndex].description}
              </p>

              {/* View details and Customize CTA triggers */}
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => {
                    const specSection = document.getElementById('specification');
                    if (specSection) specSection.scrollIntoView({ behavior: 'smooth' });
                    triggerNotification("Scroll down to explore interactive hotspots!");
                  }}
                  className="flex items-center space-x-3 group text-[#4AD2B6] text-[11px] font-semibold tracking-[0.2em] uppercase transition-all"
                >
                  <span className="group-hover:underline decoration-2">EXPLORE HOTSPOTS</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => setCustomizerOpen(true)}
                  className="text-white/45 hover:text-white text-[11px] font-medium tracking-[0.2em] uppercase transition-all underline decoration-[#4AD2B6]/40 hover:decoration-[#4AD2B6]"
                >
                  CONFIGURE SPECS
                </button>
              </div>
            </div>

            {/* Middle Interactive Bike Canvas (Dynamic SVG Visualizer) */}
            <div className="lg:col-span-8 relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              
              {/* Backglow ring inside visualizer area */}
              <div className="absolute w-[80%] h-[80%] border border-white/[0.015] rounded-full pointer-events-none" />

              {/* High-fidelity SVG Classic Diamond Bicycle Frame Illustration */}
              <div className="w-full max-w-[760px] h-auto relative drop-shadow-[0_25px_40px_rgba(0,0,0,0.65)] transform hover:scale-[1.02] transition-transform duration-700">
                <svg viewBox="0 0 800 450" className="w-full h-full select-none">
                  
                  {/* Wheel Spokes Backshadow & Shading */}
                  <circle cx="190" cy="310" r="115" stroke="rgba(0,0,0,0.2)" strokeWidth="6" fill="none" />
                  <circle cx="610" cy="310" r="115" stroke="rgba(0,0,0,0.2)" strokeWidth="6" fill="none" />

                  {/* Tires (Danish Tan-wall classic Tires) */}
                  <circle cx="190" cy="310" r="118" stroke="#AE8B62" strokeWidth="6" fill="none" />
                  <circle cx="610" cy="310" r="118" stroke="#AE8B62" strokeWidth="6" fill="none" />
                  {/* Dark tread */}
                  <circle cx="190" cy="310" r="121" stroke="#2D3035" strokeWidth="3" fill="none" />
                  <circle cx="610" cy="310" r="121" stroke="#2D3035" strokeWidth="3" fill="none" />

                  {/* Chrome Alloy Rims */}
                  <circle cx="190" cy="310" r="112" stroke="#9CA3AF" strokeWidth="4" fill="none" />
                  <circle cx="610" cy="310" r="112" stroke="#9CA3AF" strokeWidth="4" fill="none" />

                  {/* Dense steel spokes */}
                  {[...Array(36)].map((_, index) => {
                    const angle = (index * 10 * Math.PI) / 180;
                    const cos = Math.cos(angle);
                    const sin = Math.sin(angle);
                    return (
                      <g key={index} opacity="0.25">
                        <line x1="190" y1="310" x2={190 + 112 * cos} y2={310 + 112 * sin} stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="610" y1="310" x2={610 + 112 * cos} y2={310 + 112 * sin} stroke="#E5E7EB" strokeWidth="1" />
                      </g>
                    );
                  })}

                  {/* Mudguards / Fenders (Dynamic color based on customizer) */}
                  {/* Rear Fender */}
                  <path d="M 72 310 A 118 118 0 0 1 270 230" fill="none" stroke={fenderColor} strokeWidth="5" strokeLinecap="round" />
                  {/* Front Fender */}
                  <path d="M 520 220 A 118 118 0 0 1 685 260" fill="none" stroke={fenderColor} strokeWidth="5" strokeLinecap="round" />

                  {/* Structural Frame Tubes (Driven by selectedFrameColor) */}
                  <g stroke={selectedFrameColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    {/* Bottom Bracket (BB) coordinate: 350, 310 */}
                    {/* Rear Hub: 190, 310 */}
                    {/* Seat Cluster: 310, 180 */}
                    {/* Head Tube Top: 520, 130 */}
                    {/* Head Tube Bottom: 532, 175 */}
                    {/* Front Fork Crown: 535, 185 */}
                    {/* Front Hub: 610, 310 */}

                    {/* Chain Stay */}
                    <line x1="190" y1="310" x2="350" y2="310" strokeWidth="7" />
                    {/* Seat Stay */}
                    <line x1="190" y1="310" x2="310" y2="180" strokeWidth="6" />
                    {/* Seat Tube */}
                    <line x1="350" y1="310" x2="310" y2="180" />
                    {/* Down Tube */}
                    <line x1="350" y1="310" x2="532" y2="175" />
                    {/* Top Tube (Classic Diamond horizontal bar) */}
                    <line x1="310" y1="180" x2="520" y2="130" />
                    {/* Head Tube */}
                    <line x1="520" y1="130" x2="532" y2="175" strokeWidth="12" />
                    {/* Fork Leg (curving toward hub) */}
                    <path d="M 532 175 L 555 240 L 610 310" strokeWidth="8" />
                  </g>

                  {/* Chrome Accents & Lugs on Main Frame */}
                  <circle cx="350" cy="310" r="14" fill="none" stroke="#D1D5DB" strokeWidth="3" />
                  <circle cx="190" cy="310" r="10" fill="#9CA3AF" />
                  <circle cx="610" cy="310" r="10" fill="#9CA3AF" />

                  {/* Chainset & Bottom Bracket Pedal assembly */}
                  <circle cx="350" cy="310" r="28" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                  {/* Chain (Silver Linked style) */}
                  <path d="M 190 310 L 350 282 A 28 28 0 0 1 350 338 L 190 310" fill="none" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Pedals & Crank Arms */}
                  {/* Drive side (facing up) */}
                  <line x1="350" y1="310" x2="350" y2="250" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round" />
                  <rect x="330" y="242" width="40" height="8" rx="2" fill="#374151" stroke="#D1D5DB" strokeWidth="2" />
                  {/* Non-drive side (facing down) */}
                  <line x1="350" y1="310" x2="350" y2="370" stroke="#9CA3AF" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
                  <rect x="330" y="368" width="40" height="8" rx="2" fill="#374151" stroke="#9CA3AF" strokeWidth="2" opacity="0.7" />

                  {/* Seatpost and Genuine Leather Brooks Saddle */}
                  <line x1="310" y1="180" x2="310" y2="155" stroke="#9CA3AF" strokeWidth="6" />
                  {/* Leather saddle visual (matches selectedLeatherColor) */}
                  <path d="M 270 148 C 270 142 280 140 315 142 C 322 142 332 148 335 154 L 325 157 C 300 157 285 155 270 148 Z" fill={selectedLeatherColor} stroke="#000" strokeWidth="1" />
                  {/* Chrome seat springs underneath vintage saddle */}
                  <path d="M 285 152 A 4 4 0 0 1 305 152" fill="none" stroke="#9CA3AF" strokeWidth="2" />
                  <path d="M 305 152 A 4 4 0 0 1 325 152" fill="none" stroke="#9CA3AF" strokeWidth="2" />

                  {/* Stem and Classic Swept Cruiser Handlebars */}
                  <line x1="520" y1="130" x2="515" y2="90" stroke="#D1D5DB" strokeWidth="6" />
                  {/* Stem clamp and head bracket */}
                  <path d="M 510 90 L 530 85" stroke="#D1D5DB" strokeWidth="7" fill="none" />
                  {/* Classic curved back handlebars */}
                  <path d="M 530 85 C 555 85 570 110 520 120" fill="none" stroke="#9CA3AF" strokeWidth="5" strokeLinecap="round" />
                  {/* Leather Handlebar Grip */}
                  <path d="M 545 110 C 540 112 530 114 522 118" stroke={selectedLeatherColor} strokeWidth="7" fill="none" strokeLinecap="round" />

                  {/* Optional Front Carrier (Standard on City Cruiser) */}
                  {hasFrontCarrier && (
                    <g stroke="#9CA3AF" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-fade-in">
                      {/* Carrier supports extending from fork to front axle */}
                      <line x1="610" y1="310" x2="575" y2="180" />
                      {/* Front stay to handlebar area */}
                      <line x1="532" y1="175" x2="575" y2="180" />
                      {/* Horizontal platform rack */}
                      <path d="M 545 180 L 615 180 L 610 160 L 555 160 Z" fill="rgba(0,0,0,0.1)" strokeWidth="4" />
                    </g>
                  )}
                </svg>

                {/* INTERACTIVE HOTSPOTS PULSING DOTS */}
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => {
                      setActiveHotspot(h.id === activeHotspot ? null : h.id);
                    }}
                    onMouseEnter={() => setActiveHotspot(h.id)}
                    className="absolute w-8 h-8 flex items-center justify-center group focus:outline-none transition-transform"
                    style={{
                      left: `${(h.x / 800) * 100}%`,
                      top: `${(h.y / 450) * 100}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Outer pulse */}
                    <span className="absolute w-full h-full rounded-full bg-[#4AD2B6]/30 animate-ping group-hover:bg-[#4AD2B6]/40" />
                    {/* Border ring */}
                    <span className="absolute w-5 h-5 rounded-full border border-[#4AD2B6] bg-[#1F2226]/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-[#4AD2B6]" />
                    </span>

                    {/* Tooltip Overlay */}
                    {activeHotspot === h.id && (
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 bg-[#262B30] border border-[#4AD2B6]/30 p-4 rounded-lg shadow-2xl z-50 text-left pointer-events-auto">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-xs tracking-wider uppercase font-bold text-white">{h.title}</h4>
                          <span className="text-[9px] text-[#4AD2B6] font-mono uppercase tracking-widest">SPEC</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-white/70 font-normal">{h.desc}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* LOWER BAR WITH MODEL TOGGLER & SCROLL DOWN (Inspiration Layout elements) */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-6 z-20 border-t border-white/[0.04] pt-6 select-none">
            
            {/* Cycle Model Showcase Details */}
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <div className="text-left">
                <span className="block text-[10px] tracking-[0.25em] text-white/30 uppercase">CURRENT MODEL</span>
                <span className="block text-xl tracking-wide font-semibold text-white">{bikes[activeBikeIndex].name}</span>
                <span className="block text-xs font-semibold text-[#4AD2B6] tracking-wider mt-1">{bikes[activeBikeIndex].price}</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="flex items-center space-x-3">
                {bikes.map((b, idx) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBikeIndex(idx)}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-300 ${
                      activeBikeIndex === idx 
                        ? 'bg-[#4AD2B6] text-[#1F2226] font-bold shadow-lg shadow-[#4AD2B6]/20' 
                        : 'bg-white/[0.03] text-white/50 hover:bg-white/[0.08]'
                    }`}
                  >
                    0{b.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Micro Scroll down Indicator */}
            <div className="flex flex-col items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => {
                const element = document.getElementById('specification');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* Retro Mouse Icon */}
              <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1.5 mb-2">
                <span className="w-1 h-1.5 bg-[#4AD2B6] rounded-full animate-bounce" />
              </div>
              <span className="text-[9px] tracking-[0.3em] font-bold text-white/45">SCROLL DOWN</span>
            </div>

            {/* Slider Navigation arrows */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 border border-white/10 hover:border-[#4AD2B6]/50 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/[0.02] hover:bg-[#4AD2B6]/5"
                aria-label="Previous Model"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 border border-white/10 hover:border-[#4AD2B6]/50 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/[0.02] hover:bg-[#4AD2B6]/5"
                aria-label="Next Model"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </section>

        {/* INTERACTIVE BUILD STUDIO (CONFIGURATOR SECTION) */}
        <section id="specification" className="w-full bg-[#1C1E22] px-[6%] py-24 border-b border-white/[0.02] relative">
          
          {/* Section Divider Line */}
          <div className="absolute top-0 left-0 w-32 h-[1px] bg-[#4AD2B6]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left spec presentation details column */}
            <div className="lg:col-span-4 select-none">
              <span className="text-[10px] tracking-[0.3em] font-semibold text-[#4AD2B6] uppercase block mb-3">CUSTOM TAILORED</span>
              <h2 className="text-4xl font-light tracking-tight text-white mb-6 leading-snug">
                Configure your <strong className="font-bold block">bespoke setup.</strong>
              </h2>
              <p className="text-white/55 text-xs leading-relaxed mb-8">
                Every Norden frame is built strictly to order, using high-tensile Reynolds or Columbus double-butted steel. Explore our configurations below or adjust frame coatings and leather accents to reflect your signature aesthetic.
              </p>

              {/* Realtime Bike Spec Matrix table */}
              <div className="space-y-4 border-t border-white/[0.05] pt-6">
                <div className="flex justify-between items-center py-1">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Total Net Weight</span>
                  <span className="text-xs font-mono font-medium text-white">{bikes[activeBikeIndex].specs.weight}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-white/[0.02]">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Drivetrain System</span>
                  <span className="text-xs font-semibold text-white">{bikes[activeBikeIndex].specs.gears}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-white/[0.02]">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Frame Composition</span>
                  <span className="text-xs font-semibold text-white">{bikes[activeBikeIndex].specs.frame}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-white/[0.02]">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">All-Weather Tires</span>
                  <span className="text-xs font-semibold text-white">{bikes[activeBikeIndex].specs.tires}</span>
                </div>
              </div>

              {/* Reset to standard button */}
              <button 
                onClick={() => {
                  const current = bikes[activeBikeIndex];
                  setSelectedFrameColor(current.frameColor);
                  setSelectedLeatherColor(current.leatherColor);
                  setHasFrontCarrier(current.carrier);
                  triggerNotification("Restored factory original design palette.");
                }}
                className="mt-8 flex items-center space-x-2 text-[10px] text-white/40 hover:text-[#4AD2B6] tracking-widest uppercase transition-colors"
              >
                <RotateCcw size={12} />
                <span>RESTORE FACTORY DEFAULTS</span>
              </button>
            </div>

            {/* Right customizable controls Column */}
            <div className="lg:col-span-8 bg-[#23272C] border border-white/[0.04] p-8 md:p-12 rounded-lg">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Frame Color Swatches */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] font-bold uppercase text-white mb-6 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#4AD2B6] rounded-full" />
                    <span>01. Frame Finish</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {frameSwatches.map((swatch) => (
                      <button
                        key={swatch.name}
                        onClick={() => {
                          setSelectedFrameColor(swatch.value);
                          triggerNotification(`Set frame finish to ${swatch.name}`);
                        }}
                        className={`flex items-center justify-between p-3.5 rounded border transition-all text-left ${
                          selectedFrameColor === swatch.value 
                            ? 'border-[#4AD2B6] bg-[#4AD2B6]/5' 
                            : 'border-white/[0.03] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span 
                            className="w-4 h-4 rounded-full border border-white/20" 
                            style={{ backgroundColor: swatch.value }} 
                          />
                          <span className="text-[11px] font-medium tracking-wide text-white">{swatch.name}</span>
                        </div>
                        {selectedFrameColor === swatch.value && (
                          <Check size={12} className="text-[#4AD2B6]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Leather Appointments Swatches */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] font-bold uppercase text-white mb-6 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#4AD2B6] rounded-full" />
                    <span>02. Saddlery & Handgrips</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {leatherSwatches.map((swatch) => (
                      <button
                        key={swatch.name}
                        onClick={() => {
                          setSelectedLeatherColor(swatch.value);
                          triggerNotification(`Stitched components using ${swatch.name} Leather`);
                        }}
                        className={`flex items-center justify-between p-3.5 rounded border transition-all text-left ${
                          selectedLeatherColor === swatch.value 
                            ? 'border-[#4AD2B6] bg-[#4AD2B6]/5' 
                            : 'border-white/[0.03] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span 
                            className="w-4 h-4 rounded-full border border-white/20" 
                            style={{ backgroundColor: swatch.value }} 
                          />
                          <span className="text-[11px] font-medium tracking-wide text-white">{swatch.name}</span>
                        </div>
                        {selectedLeatherColor === swatch.value && (
                          <Check size={12} className="text-[#4AD2B6]" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Addons options (carrier toggle, matching fenders) */}
                  <div className="mt-8 pt-8 border-t border-white/[0.05]">
                    <h3 className="text-xs tracking-[0.2em] font-bold uppercase text-white mb-4">
                      Accessories Deck
                    </h3>
                    <div className="space-y-4">
                      {/* Porteur Carrier Toggle */}
                      <label className="flex items-center justify-between cursor-pointer group">
                        <span className="text-[11px] tracking-wide text-white/60 group-hover:text-white transition-colors">
                          Add Front Porteur Carrier Rack
                        </span>
                        <input
                          type="checkbox"
                          checked={hasFrontCarrier}
                          onChange={(e) => {
                            setHasFrontCarrier(e.target.checked);
                            triggerNotification(e.target.checked ? "Added integrated front carrier platform." : "Removed front carrier platform.");
                          }}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#1C1E22] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4AD2B6] relative" />
                      </label>

                      {/* Fender matching color toggle */}
                      <label className="flex items-center justify-between cursor-pointer group">
                        <span className="text-[11px] tracking-wide text-white/60 group-hover:text-white transition-colors">
                          Coat Fenders to match Frame color
                        </span>
                        <input
                          type="checkbox"
                          checked={fenderColor === selectedFrameColor}
                          onChange={(e) => {
                            setFenderColor(e.target.checked ? selectedFrameColor : '#9CA3AF');
                            triggerNotification(e.target.checked ? "Matched mudguard paint coordinates." : "Returned to classic alloy fenders.");
                          }}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#1C1E22] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4AD2B6] relative" />
                      </label>
                    </div>
                  </div>

                </div>

              </div>

              {/* Dynamic Bottom Row Summary */}
              <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-white/30 block">Estimated Handcrafting Cycle</span>
                  <span className="text-sm font-semibold text-white tracking-wide block">3 - 4 Weeks (Danish Workshop)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={handleAddToCart}
                    className="bg-[#4AD2B6] hover:bg-[#39C3A7] text-[#1F2226] font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded shadow-lg shadow-[#4AD2B6]/15 transition-all"
                  >
                    ADD TO DESIGN DECK
                  </button>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* NORDEN EDITORIAL HERITAGE (id="heritage") */}
        <section id="heritage" className="w-full bg-[#1F2226] px-[6%] py-24 border-b border-white/[0.02]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-5 select-none relative">
              <span className="text-[10px] tracking-[0.3em] font-semibold text-[#4AD2B6] uppercase block mb-3">
                HANDCRAFTED IN COPENHAGEN
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-8 leading-tight">
                Steel retains its <strong className="font-bold">soul.</strong>
              </h2>
              <div className="space-y-6 text-white/50 text-xs leading-relaxed max-w-lg">
                <p>
                  At Norden, we believe that high-performance doesn’t require modern composites. Steel has an innate, organic elasticity—a dampening quality that actively breathes with the street, delivering an incredibly smooth, fluid momentum that carbon fibers cannot replicate.
                </p>
                <p>
                  Every frame joint is carefully hand-welded using low-temperature brass brazing. This heritage assembly protects the tube integrity from molecular stress, assuring your Norden is structurally prepared for lifelong utility.
                </p>
              </div>

              {/* Editorial Stat block row */}
              <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/5 pt-8">
                <div>
                  <span className="block text-3xl font-extrabold text-white">4130</span>
                  <span className="block text-[9px] tracking-wider text-white/40 uppercase mt-1">Grade CrMo Alloy</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-[#4AD2B6]">100%</span>
                  <span className="block text-[9px] tracking-wider text-white/40 uppercase mt-1">Brazed by Hand</span>
                </div>
                <div>
                  <span className="block text-3xl font-extrabold text-white">50yr</span>
                  <span className="block text-[9px] tracking-wider text-white/40 uppercase mt-1">Frame Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Abstract Artistic Grid (Minimalist representations matching the design language) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              
              {/* Premium Card 1 */}
              <div className="bg-[#1C1E22] border border-white/[0.04] p-8 rounded-lg relative overflow-hidden group hover:border-[#4AD2B6]/30 transition-all duration-300">
                <Compass className="text-[#4AD2B6] mb-6" size={28} />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">Perfect Geometry</h4>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  Tailored traditional angles constructed for active, upright visual spatial orientation. Ride safely, in total peripheral sync with municipal movement.
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#4AD2B6]/5 rounded-full blur-2xl group-hover:bg-[#4AD2B6]/10 transition-colors" />
              </div>

              {/* Premium Card 2 */}
              <div className="bg-[#1C1E22] border border-white/[0.04] p-8 rounded-lg relative overflow-hidden group hover:border-[#4AD2B6]/30 transition-all duration-300">
                <Award className="text-[#4AD2B6] mb-6" size={28} />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">Danish Craftsmanship</h4>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  Each machine undergoes rigorous alignment tolerances within our Copenhagen workshop. Hand-polished, meticulously serial-stamped, and signed by its master builder.
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#4AD2B6]/5 rounded-full blur-2xl group-hover:bg-[#4AD2B6]/10 transition-colors" />
              </div>

              {/* Premium Card 3 */}
              <div className="bg-[#1C1E22] border border-white/[0.04] p-8 rounded-lg relative overflow-hidden group hover:border-[#4AD2B6]/30 transition-all duration-300">
                <ShieldCheck className="text-[#4AD2B6] mb-6" size={28} />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">Lifetime Assembly Support</h4>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  Every handcrafted frame contains nested internal cables and sealed industrial bearing components to ward off seasonal ocean mist, rain, and road dust.
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#4AD2B6]/5 rounded-full blur-2xl group-hover:bg-[#4AD2B6]/10 transition-colors" />
              </div>

              {/* Premium Card 4 */}
              <div className="bg-[#1C1E22] border border-white/[0.04] p-8 rounded-lg relative overflow-hidden group hover:border-[#4AD2B6]/30 transition-all duration-300">
                <BookOpen className="text-[#4AD2B6] mb-6" size={28} />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">The Norden Journal</h4>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  Join our exclusive cycling network. Read monthly chronicles on classic architecture, city commutes, global steel restoration, and design philosophy.
                </p>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#4AD2B6]/5 rounded-full blur-2xl group-hover:bg-[#4AD2B6]/10 transition-colors" />
              </div>

            </div>

          </div>

        </section>

        {/* CUSTOM BRANDS/PRESS ROW (MINIMALIST LOGOS) */}
        <section className="w-full bg-[#1A1C1F] py-12 px-[6%] border-b border-white/[0.02]">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-40 hover:opacity-60 transition-opacity">
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white">MONOCLE</span>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white">DEZEEN</span>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white">WALLPAPER*</span>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white">CYCLIST ENG</span>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white">GEAR PATROL</span>
          </div>
        </section>

        {/* FAQ & SPEC HIGHLIGHT ACCENT */}
        <section className="w-full bg-[#1F2226] px-[6%] py-24 border-b border-white/[0.02]">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] font-semibold text-[#4AD2B6] uppercase block mb-3">COMMON CURIOSITIES</span>
            <h2 className="text-4xl font-light tracking-tight text-white mb-4">Frequently Considered Details</h2>
            <div className="w-12 h-[1px] bg-[#4AD2B6] mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1C1E22] border border-white/[0.03] p-6 rounded-lg">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3">Do you ship assembled bicycles globally?</h4>
              <p className="text-[11px] leading-relaxed text-white/50">
                Yes. Each Norden is shipped inside a custom heavy-grade wooden crate. It arrives 95% assembled. Simply align and tighten the handlebars and attach the front wheel using our included brass multi-tool.
              </p>
            </div>
            <div className="bg-[#1C1E22] border border-white/[0.03] p-6 rounded-lg">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3">Can I swap specific elements for standard specs?</h4>
              <p className="text-[11px] leading-relaxed text-white/50">
                Absolutely. If you want straight flat bars instead of our swept cruiser handlebars or a specific Brooks model, simply request a visual consult and our builder team will modify the CAD drawing.
              </p>
            </div>
            <div className="bg-[#1C1E22] border border-white/[0.03] p-6 rounded-lg">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3">What are the frame size recommendations?</h4>
              <p className="text-[11px] leading-relaxed text-white/50">
                We offer three sizes: Small (50-53cm) for riders 160-172cm, Medium (54-57cm) for riders 173-185cm, and Large (58-61cm) for riders 186cm+. Custom custom fit options can be designed dynamically.
              </p>
            </div>
            <div className="bg-[#1C1E22] border border-white/[0.03] p-6 rounded-lg">
              <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3">Is there an active warranty on handcrafted paint?</h4>
              <p className="text-[11px] leading-relaxed text-white/50">
                We apply a premium double-coat high-gloss powder coat, followed by clear anti-scratch armor. We provide full paint and rust protection for 5 years across all climates.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-[#181A1D] px-[6%] py-16 text-white/40 border-t border-white/[0.01] z-10 text-xs">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo Brand Frame */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <div className="relative w-6 h-6 flex flex-col justify-between p-[4px] border border-white/60">
                <span className="w-1 h-1 rounded-full bg-[#4AD2B6] self-center" />
                <span className="w-full h-[1px] bg-white" />
              </div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase">NORDEN CO.</span>
            </div>
            <p className="text-[10px] leading-relaxed pr-4 text-white/30">
              Classic Danish cycle architecture. Handcrafted steel machinery constructed for modern, clean cities. Engineered in Copenhagen.
            </p>
          </div>

          {/* Quick Collection Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">THE RANGE</h4>
            <ul className="space-y-3 text-[11px]">
              <li><a href="#" className="hover:text-white transition-colors" onClick={() => setActiveBikeIndex(0)}>01. City Cruiser</a></li>
              <li><a href="#" className="hover:text-white transition-colors" onClick={() => setActiveBikeIndex(1)}>02. Classic Sport</a></li>
              <li><a href="#" className="hover:text-white transition-colors" onClick={() => setActiveBikeIndex(2)}>03. Gravel Explorer</a></li>
              <li><a href="#specification" className="hover:text-white text-[#4AD2B6] transition-colors font-medium">Bespoke Configurator</a></li>
            </ul>
          </div>

          {/* Copenhagen Studio address */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">COPENHAGEN WORKSHOP</h4>
            <p className="text-[10px] leading-relaxed text-white/30">
              Norden Atelier Ltd.<br />
              Nørrebrogade 142, Floor 2<br />
              2200 København N, Denmark<br />
              <span className="block mt-3 font-semibold text-white/50">Atelier Hours: Mon - Fri, 09:00 - 17:00 CET</span>
            </p>
          </div>

          {/* Subscription Letterbox */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">THE NORDEN LETTERS</h4>
            <p className="text-[10px] leading-relaxed text-white/30 mb-4">
              Enter your email to receive private atelier releases and invitations to regional test rides.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); triggerNotification("Email subscribed to the Norden Atelier journal."); }} className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/[0.03] border border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/20 outline-none rounded-l w-full focus:border-[#4AD2B6]/40" 
              />
              <button 
                type="submit" 
                className="bg-[#4AD2B6] hover:bg-[#39C3A7] text-[#1F2226] font-bold text-xs px-4 rounded-r transition-all"
              >
                JOIN
              </button>
            </form>
          </div>

        </div>

        {/* Footer legal & credentials */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/[0.04] pt-8 text-[9px] tracking-wider text-white/20">
          <p>© 2026 NORDEN DANISH DESIGN CO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY TERMS</a>
            <a href="#" className="hover:text-white transition-colors">SHIPPING REGISTRY</a>
            <a href="#" className="hover:text-white transition-colors">WARRANTY DECK</a>
          </div>
        </div>

      </footer>

      {/* CUSTOM BOOKING MODAL PANEL */}
      {bookingOpen && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4 animate-fade-in backdrop-blur-md">
          <div className="bg-[#1F2226] border border-[#4AD2B6]/40 p-8 max-w-lg w-full rounded-lg shadow-2xl relative select-none">
            
            <button 
              onClick={() => setBookingOpen(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="mb-6">
              <span className="text-[9px] tracking-[0.3em] text-[#4AD2B6] font-bold uppercase block mb-1">RESERVE DESIGN PORTFOLIO</span>
              <h3 className="text-2xl font-light text-white tracking-tight">Atelier Consultation Form</h3>
              <p className="text-[11px] text-white/40 mt-1 leading-relaxed">
                Provide your custom parameters below. A dedicated cycle technician will review materials, sizing geometry, and contact you directly.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-semibold">Your Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="E.g., Christian Hansen"
                  className="w-full bg-white/[0.02] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#4AD2B6] focus:bg-[#4AD2B6]/5 outline-none transition-all"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-semibold">Email Coordinates *</label>
                <input 
                  type="email" 
                  required
                  placeholder="E.g., christian@copenhagen.dk"
                  className="w-full bg-white/[0.02] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#4AD2B6] focus:bg-[#4AD2B6]/5 outline-none transition-all"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-semibold">Base Model</label>
                  <select 
                    className="w-full bg-[#2A2E35] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#4AD2B6] outline-none"
                    value={bookingForm.model}
                    onChange={(e) => setBookingForm({...bookingForm, model: e.target.value})}
                  >
                    <option value="City Cruiser">01. City Cruiser</option>
                    <option value="Classic Sport">02. Classic Sport</option>
                    <option value="Gravel Explorer">03. Gravel Explorer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-semibold">Frame Size</label>
                  <select 
                    className="w-full bg-[#2A2E35] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#4AD2B6] outline-none"
                    value={bookingForm.frameSize}
                    onChange={(e) => setBookingForm({...bookingForm, frameSize: e.target.value})}
                  >
                    <option value="Small (51cm)">Small (51cm) - (160-172cm)</option>
                    <option value="Medium (54cm)">Medium (54cm) - (173-185cm)</option>
                    <option value="Large (58cm)">Large (58cm) - (186cm+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5 font-semibold">Bespoke Alterations (Optional)</label>
                <textarea 
                  rows="3"
                  placeholder="Specify unique rack configs, mudguards, alternative saddles, custom powder paint finishes, or delivery dates..."
                  className="w-full bg-white/[0.02] border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-[#4AD2B6] focus:bg-[#4AD2B6]/5 outline-none transition-all resize-none placeholder:text-white/20"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[10px] text-white/30 tracking-wide">
                  * Safe TLS Secure Reservation Encryption.
                </span>
                <button 
                  type="submit"
                  className="bg-[#4AD2B6] hover:bg-[#39C3A7] text-[#1F2226] font-bold text-xs tracking-widest uppercase px-6 py-3 rounded shadow-lg transition-all"
                >
                  TRANSMIT PORTFOLIO
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
3
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AEON // METEORITES — Premium Visual System & Exhibition</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts: Space Grotesk (technical/mono feel) & Syne (expressive bold headers) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            tech: ['Space Grotesk', 'monospace'],
            display: ['Syne', 'sans-serif'],
            body: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            studio: {
              light: '#EAEAEA',
              lighter: '#F3F3F3',
              dark: '#111111',
              darker: '#080808',
              muted: '#767676',
              accent: '#CCCCCC',
            }
          },
          letterSpacing: {
            widest2: '0.25em',
            extreme: '0.4em',
          }
        }
      }
    }
  </script>

  <style>
    /* Premium custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #EAEAEA;
    }
    ::-webkit-scrollbar-thumb {
      background: #111111;
    }

    /* Custom styles matching the exact aesthetic of the image */
    .bg-grid-dots {
      background-image: radial-gradient(#111111 1px, transparent 1px);
      background-size: 16px 16px;
    }
    
    .bg-grid-dots-light {
      background-image: radial-gradient(rgba(17, 17, 17, 0.15) 1.2px, transparent 1.2px);
      background-size: 12px 12px;
    }

    /* Fine dashed orbits rotation */
    @keyframes slow-rotate-clockwise {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes slow-rotate-counter {
      0% { transform: rotate(360deg); }
      100% { transform: rotate(0deg); }
    }
    .animate-rotate-cw {
      animation: slow-rotate-clockwise 45s linear infinite;
    }
    .animate-rotate-ccw {
      animation: slow-rotate-counter 30s linear infinite;
    }

    /* Micro float animation */
    @keyframes float-gentle {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(1deg); }
    }
    .animate-float {
      animation: float-gentle 6s ease-in-out infinite;
    }

    /* Smooth perspective transitions */
    .perspective-1000 {
      perspective: 1000px;
    }
    .preserve-3d {
      transform-style: preserve-3d;
    }
  </style>
</head>
<body class="bg-studio-light text-studio-dark font-body antialiased selection:bg-studio-dark selection:text-white overflow-x-hidden">

  <!-- SYSTEM BANNER / RUNNING DATA TICKER -->
  <div class="w-full bg-studio-dark text-white py-1 px-4 text-[10px] font-tech uppercase tracking-widest flex justify-between items-center z-50 relative border-b border-studio-dark/20">
    <div class="flex items-center gap-4">
      <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span>SYSTEM STATUS: OPERATIONAL</span>
      <span class="hidden md:inline text-studio-muted">|</span>
      <span class="hidden md:inline text-studio-accent">CORE SPECIMEN COUNT: 3/3 IN DEPOT</span>
    </div>
    <div class="flex items-center gap-6">
      <span class="hidden sm:inline">COORDINATES: 45.1092° N, 15.2011° E</span>
      <span>LATENCY: 14MS</span>
      <span id="realtime-clock">UTC 00:00:00</span>
    </div>
  </div>

  <!-- STICKY HEADER -->
  <header class="sticky top-0 w-full bg-studio-light/90 backdrop-blur-md border-b border-studio-dark/10 z-40 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <!-- Logo / Title -->
      <a href="#" class="flex flex-col select-none group">
        <span class="font-display font-extrabold text-xl tracking-wider uppercase transition-all group-hover:tracking-widest">AEON</span>
        <span class="font-tech text-[9px] tracking-widest text-studio-muted mt-[-2px]">METEORITE SYSTEMS</span>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8 font-tech text-xs tracking-wider">
        <a href="#exhibition-viewport" class="hover:text-studio-muted transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-studio-dark hover:after:w-full after:transition-all">01. EXHIBITION VIEWPORT</a>
        <a href="#telemetry-console" class="hover:text-studio-muted transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-studio-dark hover:after:w-full after:transition-all">02. TELEMETRY DECK</a>
        <a href="#specimen-archive" class="hover:text-studio-muted transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-studio-dark hover:after:w-full after:transition-all">03. CATALOGUE</a>
        <a href="#system-generator" class="hover:text-studio-muted transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-studio-dark hover:after:w-full after:transition-all">04. SYSTEM BUILDER</a>
      </nav>

      <!-- CTA / Action Menu -->
      <div class="flex items-center gap-4">
        <button onclick="toggleTelemetryWireframe()" class="hidden sm:flex items-center gap-2 border border-studio-dark/20 hover:border-studio-dark px-4 py-2 font-tech text-xs tracking-widest uppercase transition-all duration-300 bg-transparent hover:bg-studio-dark hover:text-white rounded-none">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Toggle Wireframe
        </button>
        <a href="#ledger-section" class="bg-studio-dark text-white px-5 py-2.5 font-tech text-xs tracking-widest uppercase hover:bg-neutral-800 transition-all duration-300">
          THE LEDGER
        </a>
      </div>
    </div>
  </header>

  <!-- MAIN WRAPPER -->
  <main class="w-full">

    <!-- HERO / MASTER VIEWPORT SECTION -->
    <section id="exhibition-viewport" class="min-h-screen flex flex-col justify-center items-center py-12 px-4 md:px-8 relative overflow-hidden">
      
      <!-- BACKGROUND DECORATIONS -->
      <div class="absolute left-10 top-24 opacity-25 font-tech text-xs tracking-widest select-none hidden xl:block pointer-events-none">
        AEON COMPOSITIONAL SYSTEM <br>
        VER. 4.0 // METEORITES SPECIMENS
      </div>
      <div class="absolute right-10 bottom-24 opacity-25 font-tech text-xs tracking-widest text-right select-none hidden xl:block pointer-events-none">
        SYSTEM SHIFT: ACTIVE <br>
        BOUNDS MAP: R-722
      </div>

      <!-- MASTER FRAME CARD CONTAINER (RECREATION OF THE INSPIRED IMAGE DESIGN SYSTEM) -->
      <div id="art-frame" class="w-full max-w-5xl bg-[#E0E0E0] border border-studio-dark/15 shadow-2xl relative overflow-hidden aspect-[16/10] min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex transition-all duration-500 rounded-none group/frame">
        
        <!-- Interactive telemetry overlay (Hidden by default, toggled via button) -->
        <div id="wireframe-grid" class="absolute inset-0 bg-transparent opacity-0 pointer-events-none transition-opacity duration-300 z-30 font-mono text-[9px] text-emerald-600">
          <div class="w-full h-full border-2 border-dashed border-emerald-500/40 relative">
            <div class="absolute top-0 bottom-0 left-1/2 border-l border-emerald-500/30"></div>
            <div class="absolute left-0 right-0 top-1/2 border-t border-emerald-500/30"></div>
            <!-- Dynamic Telemetry Text elements -->
            <div class="absolute top-4 left-4">FRAME BOUNDS: 1024px x 640px [1.6:1]</div>
            <div class="absolute bottom-4 left-4">CENTER: X_512.00 Y_320.00</div>
            <div class="absolute top-4 right-4">ROTATION: ACTIVE | ZOOM: 1.0X</div>
            <div class="absolute bottom-4 right-4">DOTTED MESH: 12x12 GRID</div>
            <div class="absolute top-1/3 left-6 animate-pulse">GRID POINT: A-94 // LOCKED</div>
            <div class="absolute bottom-1/3 right-8 animate-pulse">DYNAMIC AXIS: ORBIT_30°</div>
          </div>
        </div>

        <!-- 1. LEFT WHITE ARC PANEL (Matches visual system layout) -->
        <div class="absolute inset-y-0 left-0 w-[55%] pointer-events-none z-10 transition-transform duration-700 ease-out" id="left-arc-wrapper">
          <svg viewBox="0 0 500 640" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Sweep white path curve -->
            <path d="M-100 -50 C 300 -50, 300 690, -100 690" fill="none" stroke="white" stroke-width="120" stroke-linecap="round"/>
            <path d="M-100 -50 C 300 -50, 300 690, -100 690" fill="none" stroke="#FFFFFF" stroke-width="116" stroke-linecap="round"/>
            <!-- Inner white fill panel overlaying slightly -->
            <path d="M-100 -50 C 260 -50, 260 690, -100 690 L -100 -50 Z" fill="#FFFFFF" opacity="0.05" />
          </svg>
        </div>

        <!-- 2. GEOMETRIC DOTTED PATTERN IN CENTRAL SPLIT -->
        <div class="absolute left-[30%] md:left-[35%] top-[25%] w-[25%] h-[50%] bg-grid-dots bg-center opacity-65 pointer-events-none z-10"></div>

        <!-- 3. DECORATIVE GRAPHICS (Zigzag symbols, circle paths, etc.) -->
        <!-- Zigzag top-center -->
        <div class="absolute left-1/2 -translate-x-1/2 top-8 z-20 flex flex-col items-center select-none pointer-events-none">
          <svg class="w-4 h-6 text-studio-dark/80" viewBox="0 0 20 40" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 2 L18 10 L2 18 L18 26 L2 34" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <!-- Zigzag bottom-center -->
        <div class="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex flex-col items-center select-none pointer-events-none">
          <svg class="w-4 h-6 text-studio-dark/80" viewBox="0 0 20 40" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 2 L18 10 L2 18 L18 26 L2 34" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Dashed alignment circle around the right side -->
        <div class="absolute right-[5%] md:right-[15%] top-1/2 -translate-y-1/2 w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full border border-dashed border-studio-dark/20 pointer-events-none z-0 animate-rotate-cw"></div>
        <div class="absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 w-[220px] md:w-[280px] h-[220px] md:h-[280px] rounded-full border border-dashed border-studio-dark/15 pointer-events-none z-0 animate-rotate-ccw"></div>

        <!-- 4. TYPOGRAPHICAL ELEMENTS (Positioned precisely as the layout grid) -->
        <!-- Top Left: "MENU" -->
        <div class="absolute left-8 top-8 z-20">
          <button onclick="openMenuModal()" class="font-tech text-xs tracking-extreme text-studio-dark hover:text-studio-muted transition-colors uppercase font-medium">
            MENU
          </button>
        </div>

        <!-- Top Right: "SHARE" -->
        <div class="absolute right-8 top-8 z-20">
          <button onclick="shareExhibition()" class="font-tech text-xs tracking-extreme text-studio-dark hover:text-studio-muted transition-colors uppercase font-medium">
            SHARE
          </button>
        </div>

        <!-- Bottom Left: "VISUAL SYSTEM" and Subtitle inside white section -->
        <div class="absolute left-8 bottom-8 z-20">
          <div class="font-display font-black text-xs md:text-sm tracking-widest2 text-studio-dark uppercase">
            VISUAL SYSTEM
          </div>
          <div class="font-tech text-[10px] tracking-extreme text-studio-muted uppercase mt-1">
            CREATE VISION
          </div>
        </div>

        <!-- Bottom Right: "NEXT -" Trigger -->
        <div class="absolute right-8 bottom-8 z-20">
          <button onclick="nextSpecimen()" class="font-tech text-xs tracking-extreme text-studio-dark hover:text-studio-muted transition-all duration-300 uppercase flex items-center gap-1 group font-semibold">
            <span>NEXT</span>
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-2">—</span>
          </button>
        </div>

        <!-- Center-Left Vertical Bold Typography ("DESIGN") -->
        <div class="absolute left-[32%] md:left-[36%] top-1/2 -translate-y-1/2 z-20 select-none pointer-events-none">
          <h1 id="vertical-title" class="font-display font-black text-[3.5rem] md:text-[5rem] text-studio-dark tracking-[0.1em] leading-none uppercase mix-blend-difference" style="writing-mode: vertical-rl; text-orientation: uppercase;">
            DESIGN
          </h1>
        </div>

        <!-- Right Vertical Telemetry Accent Box ("METEORITES") -->
        <div class="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
          <div class="border border-studio-dark py-6 px-3 flex flex-col items-center justify-center bg-transparent backdrop-blur-sm shadow-sm">
            <span id="specimen-tag" class="font-tech text-[9px] md:text-[10px] tracking-extreme text-studio-dark uppercase" style="writing-mode: vertical-rl; text-orientation: mixed;">
              METEORITES
            </span>
          </div>
        </div>

        <!-- 5. MAIN INTERACTIVE Specimen SVG (The faceted 3D shape) -->
        <div class="absolute inset-0 flex justify-center items-center z-10 pointer-events-auto" id="specimen-trigger-area">
          <div id="meteorite-3d-container" class="w-64 h-64 md:w-80 md:h-80 relative flex justify-center items-center cursor-grab active:cursor-grabbing transition-transform duration-500 animate-float perspective-1000">
            <!-- SVG Specimen Graphics will inject here -->
            <svg id="active-specimen-svg" class="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out preserve-3d" viewBox="0 0 400 400">
              <!-- Obsidian Base Specimen (Inspiration spec) -->
              <g id="specimen-obsidian">
                <!-- Outer shading and multifaceted paths for premium physical density -->
                <polygon points="190,40 230,120 170,140" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="0.5"/>
                <polygon points="230,120 280,180 220,200" fill="#0D0D0D" stroke="#1F1F1F" stroke-width="0.5"/>
                <polygon points="280,180 290,260 210,240" fill="#222222" stroke="#333333" stroke-width="0.5"/>
                <polygon points="290,260 230,340 180,310" fill="#111111" stroke="#222222" stroke-width="0.5"/>
                <polygon points="230,340 150,330 140,260" fill="#1C1C1C" stroke="#2C2C2C" stroke-width="0.5"/>
                <polygon points="150,330 110,250 140,210" fill="#090909" stroke="#1A1A1A" stroke-width="0.5"/>
                <polygon points="110,250 120,160 170,140" fill="#1E1E1E" stroke="#333333" stroke-width="0.5"/>
                <polygon points="120,160 190,40  170,140" fill="#151515" stroke="#252525" stroke-width="0.5"/>
                <!-- Internal dynamic facets -->
                <polygon points="170,140 230,120 220,200" fill="#121212" stroke="#222222" stroke-width="0.5"/>
                <polygon points="170,140 220,200 160,230" fill="#2A2A2A" stroke="#3A3A3A" stroke-width="0.5"/>
                <polygon points="220,200 280,180 210,240" fill="#050505" stroke="#151515" stroke-width="0.5"/>
                <polygon points="220,200 210,240 160,230" fill="#1B1B1B" stroke="#2B2B2B" stroke-width="0.5"/>
                <polygon points="160,230 210,240 180,310" fill="#252525" stroke="#353535" stroke-width="0.5"/>
                <polygon points="160,230 180,310 140,260" fill="#0F0F0F" stroke="#1F1F1F" stroke-width="0.5"/>
                <polygon points="140,260 140,210 160,230" fill="#2F2F2F" stroke="#444444" stroke-width="0.5"/>
                <polygon points="120,160 170,140 140,210" fill="#161616" stroke="#282828" stroke-width="0.5"/>
              </g>
            </svg>
          </div>
        </div>

      </div>

      <!-- INSTRUCTION / FEEDBACK BAR -->
      <div class="mt-8 flex flex-col sm:flex-row gap-6 justify-between items-center w-full max-w-5xl font-tech text-xs tracking-wider border-t border-studio-dark/10 pt-6">
        <div class="flex items-center gap-2">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-studio-dark animate-ping"></span>
          <span class="text-studio-muted">INTERACT: MOVE MOUSE OVER THE Specimen TO SHIFT PERSPECTIVE</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-studio-muted">ACTIVE SPECIMEN:</span>
          <span id="specimen-label-selector" class="font-semibold text-studio-dark uppercase">[SPECIMEN-01: OBSIDIAN CORE]</span>
        </div>
      </div>
    </section>

    <!-- SECTION 2: TELEMETRY & SPECIFICATION CONSOLE -->
    <section id="telemetry-console" class="py-24 bg-studio-lighter border-y border-studio-dark/10 relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-dots-light opacity-50 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- LEFT SIDE: Header & Tab Controls -->
          <div class="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div class="font-tech text-xs tracking-extreme text-studio-muted uppercase mb-3">TELEMETRY ANALYSIS</div>
              <h2 class="font-display font-black text-4xl md:text-5xl text-studio-dark tracking-tight uppercase leading-none mb-6">
                MOLECULAR<br>READOUTS.
              </h2>
              <p class="font-body text-sm text-studio-muted leading-relaxed mb-8 max-w-sm">
                Each meteorite segment cataloged carries deep geological metadata spanning millions of light years. Select a core visual system specimen below to reveal high-fidelity mineral composition details.
              </p>
            </div>

            <!-- Tab Selection Buttons for Specimens -->
            <div class="flex flex-col gap-3 font-tech text-xs">
              <button onclick="selectSpecimen(1)" id="tab-btn-1" class="w-full text-left border border-studio-dark px-4 py-3 bg-studio-dark text-white hover:bg-studio-dark hover:text-white transition-all duration-300 flex justify-between items-center">
                <span>01 // OBSIDIAN CORE (ACTIVE)</span>
                <span class="text-[9px] opacity-70">ORIGIN: CHONDRITE V</span>
              </button>
              <button onclick="selectSpecimen(2)" id="tab-btn-2" class="w-full text-left border border-studio-dark/20 px-4 py-3 bg-transparent text-studio-dark hover:border-studio-dark transition-all duration-300 flex justify-between items-center">
                <span>02 // AEROLITE SHIELD</span>
                <span class="text-[9px] opacity-70">ORIGIN: PALLASITE M</span>
              </button>
              <button onclick="selectSpecimen(3)" id="tab-btn-3" class="w-full text-left border border-studio-dark/20 px-4 py-3 bg-transparent text-studio-dark hover:border-studio-dark transition-all duration-300 flex justify-between items-center">
                <span>03 // TEKTITE GLASS</span>
                <span class="text-[9px] opacity-70">ORIGIN: CRATER BED XI</span>
              </button>
            </div>
          </div>

          <!-- RIGHT SIDE: Telemetry Dashboard Deck -->
          <div class="lg:col-span-8 bg-studio-light border border-studio-dark/15 p-6 md:p-10 relative overflow-hidden shadow-lg">
            
            <!-- Structural Wire overlays -->
            <div class="absolute right-0 top-0 h-20 w-20 border-r border-t border-studio-dark/10 pointer-events-none"></div>
            <div class="absolute left-0 bottom-0 h-20 w-20 border-l border-b border-studio-dark/10 pointer-events-none"></div>

            <div class="flex justify-between items-center border-b border-studio-dark/15 pb-6 mb-8 font-tech">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 bg-studio-dark rounded-full"></span>
                <span class="text-xs tracking-widest uppercase font-bold" id="telemetry-specimen-id">SPECIMEN // AEON-01</span>
              </div>
              <div class="text-[10px] tracking-widest text-studio-muted">
                CODENAME: <span id="telemetry-codename" class="text-studio-dark font-semibold">OBSIDIAN-ALPHA</span>
              </div>
            </div>

            <!-- Quantitative Progress Readouts -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              <!-- Core Attributes -->
              <div class="space-y-6">
                <h4 class="font-tech text-xs tracking-widest uppercase text-studio-muted mb-4 border-b border-studio-dark/10 pb-2">[ ATTRIBUTE DENSITY ]</h4>
                
                <div>
                  <div class="flex justify-between text-xs font-tech mb-2">
                    <span>SILICA GLASS INDEX</span>
                    <span id="metric-val-1" class="font-bold">84.2%</span>
                  </div>
                  <div class="w-full h-1 bg-studio-dark/10">
                    <div id="metric-bar-1" class="h-full bg-studio-dark transition-all duration-1000 ease-out" style="width: 84.2%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-tech mb-2">
                    <span>NICKEL-IRON ALLOY MATRIX</span>
                    <span id="metric-val-2" class="font-bold">12.5%</span>
                  </div>
                  <div class="w-full h-1 bg-studio-dark/10">
                    <div id="metric-bar-2" class="h-full bg-studio-dark transition-all duration-1000 ease-out" style="width: 12.5%;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-tech mb-2">
                    <span>EXTRATERRESTRIAL MAGNESIUM</span>
                    <span id="metric-val-3" class="font-bold">3.3%</span>
                  </div>
                  <div class="w-full h-1 bg-studio-dark/10">
                    <div id="metric-bar-3" class="h-full bg-studio-dark transition-all duration-1000 ease-out" style="width: 3.3%;"></div>
                  </div>
                </div>
              </div>

              <!-- Mathematical Telemetry -->
              <div class="space-y-6">
                <h4 class="font-tech text-xs tracking-widest uppercase text-studio-muted mb-4 border-b border-studio-dark/10 pb-2">[ STRUCTURAL SPECS ]</h4>
                
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-studio-lighter p-3 border border-studio-dark/5">
                    <div class="font-tech text-[10px] text-studio-muted tracking-wider uppercase">MASS ESTIMATE</div>
                    <div id="spec-mass" class="font-display font-black text-lg text-studio-dark mt-1">4.218 KG</div>
                  </div>
                  <div class="bg-studio-lighter p-3 border border-studio-dark/5">
                    <div class="font-tech text-[10px] text-studio-muted tracking-wider uppercase">DENSITY CALIBER</div>
                    <div id="spec-density" class="font-display font-black text-lg text-studio-dark mt-1">7.42 G/CM³</div>
                  </div>
                  <div class="bg-studio-lighter p-3 border border-studio-dark/5">
                    <div class="font-tech text-[10px] text-studio-muted tracking-wider uppercase">AGE ESTIMATION</div>
                    <div id="spec-age" class="font-display font-black text-lg text-studio-dark mt-1">4.56 B YR</div>
                  </div>
                  <div class="bg-studio-lighter p-3 border border-studio-dark/5">
                    <div class="font-tech text-[10px] text-studio-muted tracking-wider uppercase">SPECTRAL CLASS</div>
                    <div id="spec-class" class="font-display font-black text-lg text-studio-dark mt-1">X-CLASS</div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Chemical formula / inline LaTeX formatting request match -->
            <div class="border-t border-studio-dark/10 pt-6">
              <h4 class="font-tech text-xs tracking-widest uppercase text-studio-muted mb-3">[ CHEMICAL CRYSTALLIZATION SYNTAX ]</h4>
              <div class="bg-studio-lighter p-4 font-mono text-xs text-studio-dark flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
                <div>
                  <span class="text-studio-muted font-sans">Empirical Formula:</span> 
                  <span id="chemical-formula" class="font-semibold ml-2 font-tech text-sm">$\text{Fe}_{0.84} \text{Ni}_{0.12} \text{Mg}_{0.03} \text{SiO}_4$</span>
                </div>
                <div class="text-[10px] bg-studio-dark text-white px-2.5 py-1 tracking-wider uppercase font-tech">
                  Verified Matrix
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 3: BRUTALIST PORTFOLIO / EXHIBITION ARCHIVE CATALOG -->
    <section id="specimen-archive" class="py-28 px-6 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span class="font-tech text-xs tracking-extreme text-studio-muted uppercase mb-3 block">PREMIUM DESIGN EDITIONS</span>
          <h2 class="font-display font-black text-4xl md:text-6xl text-studio-dark tracking-tight uppercase leading-none">
            COLLECTOR ARCHIVES.
          </h2>
        </div>
        <div class="max-w-md font-body text-sm text-studio-muted leading-relaxed">
          Each visual composition and obsidian specimen is paired with a limited physical twin structure, designed for spatial architecture.
        </div>
      </div>

      <!-- Catalogue Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- CARD 1 -->
        <div class="group bg-studio-lighter border border-studio-dark/10 overflow-hidden relative p-8 transition-all duration-500 hover:border-studio-dark hover:-translate-y-2 flex flex-col justify-between aspect-[3/4]">
          <div class="absolute inset-0 bg-grid-dots-light opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
          
          <!-- Top Telemetry Row -->
          <div class="flex justify-between items-start font-tech">
            <span class="text-xs text-studio-muted font-bold tracking-widest">EDITION // 01</span>
            <span class="text-[10px] text-white bg-studio-dark px-2 py-0.5 tracking-widest uppercase">SOLDOUT</span>
          </div>

          <!-- Abstract SVG representation of specimen -->
          <div class="my-10 flex justify-center items-center transition-transform duration-500 group-hover:scale-110">
            <svg class="w-40 h-40" viewBox="0 0 100 100" fill="none">
              <!-- Geometric crystal cluster -->
              <polygon points="50,15 70,45 50,55" fill="#111111"/>
              <polygon points="50,15 30,45 50,55" fill="#222222"/>
              <polygon points="70,45 80,75 50,85" fill="#181818"/>
              <polygon points="50,55 70,45 50,85" fill="#0A0A0A"/>
              <polygon points="30,45 50,55 50,85" fill="#2D2D2D"/>
              <polygon points="20,75 30,45 50,85" fill="#151515"/>
              <circle cx="50" cy="50" r="42" stroke="#111111" stroke-width="0.5" stroke-dasharray="2,2" class="opacity-45"/>
            </svg>
          </div>

          <!-- Title and Description -->
          <div class="border-t border-studio-dark/10 pt-6">
            <h3 class="font-display font-extrabold text-xl tracking-wide text-studio-dark uppercase">OBSIDIAN CORE</h3>
            <p class="font-tech text-xs text-studio-muted uppercase tracking-wider mt-1">THE PRIMAL GEOMORPHOLOGY</p>
            <div class="mt-4 flex justify-between items-center text-xs font-tech font-semibold">
              <span>$4,200.00 USD</span>
              <span class="text-studio-muted group-hover:text-studio-dark transition-colors uppercase">VIEW DATA →</span>
            </div>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="group bg-studio-lighter border border-studio-dark/10 overflow-hidden relative p-8 transition-all duration-500 hover:border-studio-dark hover:-translate-y-2 flex flex-col justify-between aspect-[3/4]">
          <div class="absolute inset-0 bg-grid-dots-light opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
          
          <!-- Top Telemetry Row -->
          <div class="flex justify-between items-start font-tech">
            <span class="text-xs text-studio-muted font-bold tracking-widest">EDITION // 02</span>
            <span class="text-[10px] text-studio-dark border border-studio-dark px-2 py-0.5 tracking-widest uppercase">02 AVAILABLE</span>
          </div>

          <!-- Abstract SVG representation of specimen -->
          <div class="my-10 flex justify-center items-center transition-transform duration-500 group-hover:scale-110">
            <svg class="w-40 h-40" viewBox="0 0 100 100" fill="none">
              <!-- Rounded, layered stone -->
              <path d="M50 15 C 75 15, 85 45, 80 65 C 75 85, 25 85, 20 65 C 15 45, 25 15, 50 15 Z" fill="#2A2A2A"/>
              <path d="M50 25 C 70 25, 75 45, 70 60 C 65 75, 35 75, 30 60 C 25 45, 30 25, 50 25 Z" fill="#111111"/>
              <path d="M50 35 C 60 35, 65 45, 60 55 C 55 65, 45 65, 40 55 C 35 45, 40 35, 50 35 Z" fill="#1C1C1C"/>
              <!-- Dashed overlay orbit -->
              <ellipse cx="50" cy="50" rx="46" ry="12" stroke="#111111" stroke-width="0.5" stroke-dasharray="3,3" class="opacity-60" transform="rotate(-15, 50, 50)"/>
            </svg>
          </div>

          <!-- Title and Description -->
          <div class="border-t border-studio-dark/10 pt-6">
            <h3 class="font-display font-extrabold text-xl tracking-wide text-studio-dark uppercase">AEROLITE SHIELD</h3>
            <p class="font-tech text-xs text-studio-muted uppercase tracking-wider mt-1">PALLASITE NICKEL STRUCTURE</p>
            <div class="mt-4 flex justify-between items-center text-xs font-tech font-semibold">
              <span>$5,850.00 USD</span>
              <span class="text-studio-muted group-hover:text-studio-dark transition-colors uppercase">ACQUIRE PIECE →</span>
            </div>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="group bg-studio-lighter border border-studio-dark/10 overflow-hidden relative p-8 transition-all duration-500 hover:border-studio-dark hover:-translate-y-2 flex flex-col justify-between aspect-[3/4]">
          <div class="absolute inset-0 bg-grid-dots-light opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
          
          <!-- Top Telemetry Row -->
          <div class="flex justify-between items-start font-tech">
            <span class="text-xs text-studio-muted font-bold tracking-widest">EDITION // 03</span>
            <span class="text-[10px] text-studio-dark border border-studio-dark px-2 py-0.5 tracking-widest uppercase">05 AVAILABLE</span>
          </div>

          <!-- Abstract SVG representation of specimen -->
          <div class="my-10 flex justify-center items-center transition-transform duration-500 group-hover:scale-110">
            <svg class="w-40 h-40" viewBox="0 0 100 100" fill="none">
              <!-- Sharp multifaceted polygon cluster -->
              <polygon points="50,15 80,30 65,70 35,70 20,30" fill="#1C1C1C" stroke="#444" stroke-width="0.5"/>
              <polygon points="50,15 65,45 35,45" fill="#0F0F0F"/>
              <polygon points="80,30 65,45 65,70" fill="#242424"/>
              <polygon points="65,70 35,45 35,70" fill="#151515"/>
              <polygon points="20,30 35,45 35,70" fill="#333333"/>
              <!-- Crosshair graphic -->
              <line x1="50" y1="5" x2="50" y2="95" stroke="#111111" stroke-width="0.5" class="opacity-30"/>
              <line x1="5" y1="50" x2="95" y2="50" stroke="#111111" stroke-width="0.5" class="opacity-30"/>
            </svg>
          </div>

          <!-- Title and Description -->
          <div class="border-t border-studio-dark/10 pt-6">
            <h3 class="font-display font-extrabold text-xl tracking-wide text-studio-dark uppercase">TEKTITE GLASS</h3>
            <p class="font-tech text-xs text-studio-muted uppercase tracking-wider mt-1">HIGH IMPACT GLASS MATRIX</p>
            <div class="mt-4 flex justify-between items-center text-xs font-tech font-semibold">
              <span>$3,900.00 USD</span>
              <span class="text-studio-muted group-hover:text-studio-dark transition-colors uppercase">ACQUIRE PIECE →</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 4: INTERACTIVE VISUAL SYSTEM GENERATOR (EXPERIMENTAL PLAYGROUND) -->
    <section id="system-generator" class="py-24 bg-studio-dark text-white border-t border-studio-dark relative overflow-hidden">
      <!-- Background subtle dot grid in white overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 16px 16px;"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- LEFT: Generator Parameters Controls -->
          <div class="lg:col-span-5 space-y-8">
            <div>
              <span class="font-tech text-xs tracking-extreme text-studio-accent uppercase mb-3 block">DYNAMIC LAYOUT ENGINE</span>
              <h2 class="font-display font-black text-4xl md:text-5xl tracking-tight uppercase leading-none text-white">
                GENERATIVE<br>STRUCTURE.
              </h2>
              <p class="font-body text-sm text-studio-accent/70 mt-4 leading-relaxed max-w-md">
                Adjust the design variables below to modify the interactive geometric vector art in real-time. This dynamic system demonstrates the mathematical alignment and spatial geometry of the Aeon visual system.
              </p>
            </div>

            <!-- Param Sliders -->
            <div class="space-y-6 font-tech text-xs">
              
              <!-- Slider 1 -->
              <div>
                <div class="flex justify-between uppercase mb-2">
                  <span class="tracking-widest">GRID COMPLEXITY</span>
                  <span id="label-density-param">12 POINTS</span>
                </div>
                <input type="range" id="param-density" min="4" max="24" value="12" class="w-full accent-white bg-white/20 h-[2px] cursor-pointer" oninput="updateGenerativeArt()">
              </div>

              <!-- Slider 2 -->
              <div>
                <div class="flex justify-between uppercase mb-2">
                  <span class="tracking-widest">RADIUS INTENSITY</span>
                  <span id="label-radius-param">200px</span>
                </div>
                <input type="range" id="param-radius" min="80" max="320" value="200" class="w-full accent-white bg-white/20 h-[2px] cursor-pointer" oninput="updateGenerativeArt()">
              </div>

              <!-- Slider 3 -->
              <div>
                <div class="flex justify-between uppercase mb-2">
                  <span class="tracking-widest">TENSION CURVATURE</span>
                  <span id="label-tension-param">0.5</span>
                </div>
                <input type="range" id="param-tension" min="0" max="2" step="0.1" value="0.5" class="w-full accent-white bg-white/20 h-[2px] cursor-pointer" oninput="updateGenerativeArt()">
              </div>

            </div>

            <div class="pt-4">
              <button onclick="resetGenerativeArt()" class="border border-white/20 hover:border-white px-5 py-3 text-xs font-tech tracking-widest uppercase transition-all duration-300 w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-studio-dark">
                RESET SYSTEM STATE
              </button>
            </div>
          </div>

          <!-- RIGHT: LIVE GEOMETRIC VECTOR CANVAS -->
          <div class="lg:col-span-7 flex justify-center items-center">
            <div class="w-full max-w-lg aspect-square bg-studio-darker border border-white/10 relative overflow-hidden flex justify-center items-center p-6 shadow-2xl">
              <!-- Grid Matrix Backdrop -->
              <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 40px 40px;"></div>
              
              <!-- Telemetry indicators inside generator canvas -->
              <span class="absolute top-4 left-4 font-mono text-[9px] text-white/40 uppercase tracking-widest">VIEW // LIVE RENDER GENERATION</span>
              <span class="absolute bottom-4 right-4 font-mono text-[9px] text-white/40 uppercase tracking-widest">ALGORITHM: V_SYSTEM_4</span>

              <!-- Target crosshair -->
              <div class="absolute w-6 h-6 border border-white/20 flex justify-center items-center">
                <div class="w-1.5 h-1.5 bg-white/45 rounded-full"></div>
              </div>

              <!-- SVG container for real-time changes -->
              <svg id="generative-svg" class="w-full h-full relative z-10" viewBox="0 0 400 400">
                <!-- Inner dynamic paths inject here dynamically -->
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 5: MANIFESTO & THE LEDGER NEWSLETTER -->
    <section id="ledger-section" class="py-28 px-6 max-w-7xl mx-auto border-t border-studio-dark/10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <!-- Manifesto Typography -->
        <div class="lg:col-span-7">
          <span class="font-tech text-xs tracking-extreme text-studio-muted uppercase mb-4 block">DESIGN MANIFESTO</span>
          <h2 class="font-display font-black text-4xl sm:text-6xl md:text-7xl text-studio-dark tracking-tighter leading-none uppercase select-none">
            CREATE VISION.<br>OBSIDIAN STABILITY.
          </h2>
          <p class="font-body text-base text-studio-muted leading-relaxed mt-8 max-w-2xl">
            We operate at the precise overlap of astronomical rarity and high-end modern layout architecture. The Aeon visual system honors pure geometric balance, asymmetrical tension, and eternal materiality.
          </p>
        </div>

        <!-- Terminal Ledger Sign Up -->
        <div class="lg:col-span-5 bg-studio-dark text-white p-8 border border-studio-dark shadow-2xl relative">
          <!-- Dot grid inside dark terminal -->
          <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 12px 12px;"></div>

          <div class="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span class="font-tech text-xs tracking-widest uppercase">LEDGER REGISTRY</span>
            </div>
            <span class="font-mono text-[9px] text-white/40">v1.0.4</span>
          </div>

          <p class="font-body text-xs text-studio-accent/85 leading-relaxed mb-6">
            Authenticate and register your signature to access spatial design drops, visual telemetry releases, and custom mineral specimens.
          </p>

          <!-- Input Terminal Form -->
          <form onsubmit="handleLedgerSubmission(event)" class="space-y-4">
            <div>
              <label class="block font-tech text-[10px] tracking-widest uppercase text-studio-accent mb-2">CITIZEN IDENTITY SIGNATURE (EMAIL)</label>
              <input type="email" required id="ledger-email" placeholder="ENTER VALID EMAIL ADDRESS" class="w-full bg-studio-darker text-white border border-white/15 px-4 py-3 font-tech text-xs focus:border-white focus:outline-none transition-colors rounded-none placeholder:text-white/20">
            </div>

            <!-- Simulated live available slots counter -->
            <div class="flex justify-between items-center bg-studio-darker/60 border border-white/5 p-3 text-xs font-tech">
              <span class="text-white/50 tracking-wider">REGISTRY SPOTS LEFT:</span>
              <span id="slots-counter" class="font-bold text-white tracking-widest">147 / 1000</span>
            </div>

            <button type="submit" class="w-full bg-white text-studio-dark py-3 font-tech text-xs tracking-extreme uppercase font-bold hover:bg-studio-accent transition-all duration-300">
              REGISTER SIGNATURE
            </button>
          </form>

          <!-- Custom feedback alert (replacing traditional alerts) -->
          <div id="ledger-success-msg" class="hidden absolute inset-0 bg-studio-dark/95 flex flex-col justify-center items-center p-8 text-center z-20">
            <svg class="w-12 h-12 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 class="font-display font-extrabold text-lg text-white uppercase tracking-wider">SIGNATURE RECORDED</h4>
            <p class="font-tech text-xs text-studio-accent/70 mt-2 max-w-xs">
              Your identity hash has been compiled into the registry ledger. Await telemetry correspondence.
            </p>
            <button onclick="closeLedgerSuccess()" class="mt-6 border border-white/20 hover:border-white text-white font-tech text-[10px] tracking-widest px-4 py-1.5 uppercase transition-all">
              CLOSE TERMINAL
            </button>
          </div>

        </div>

      </div>
    </section>

  </main>

  <!-- SOPHISTICATED FOOTER -->
  <footer class="bg-studio-lighter border-t border-studio-dark/15 py-16 px-6 font-tech">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
      
      <!-- Left side footer meta -->
      <div class="space-y-4">
        <div class="flex flex-col select-none">
          <span class="font-display font-black text-2xl tracking-widest uppercase">AEON</span>
          <span class="text-[9px] tracking-widest text-studio-muted mt-[-2px]">EXHIBITION VISUAL SYSTEM</span>
        </div>
        <p class="text-[11px] text-studio-muted leading-relaxed max-w-sm">
          All celestial components, geometric layouts, and design system variables are intellectual property of Aeon Exhibition Systems. Developed for high-fidelity interactive physical spaces.
        </p>
      </div>

      <!-- Center navigation columns -->
      <div class="grid grid-cols-2 gap-16 text-xs">
        <div>
          <h5 class="font-bold tracking-widest text-studio-dark uppercase mb-4">// CORE CHANNELS</h5>
          <ul class="space-y-2 text-studio-muted">
            <li><a href="#exhibition-viewport" class="hover:text-studio-dark transition-colors">VIEWPORT</a></li>
            <li><a href="#telemetry-console" class="hover:text-studio-dark transition-colors">SPECIMENS</a></li>
            <li><a href="#specimen-archive" class="hover:text-studio-dark transition-colors">COLLECTOR CORE</a></li>
            <li><a href="#system-generator" class="hover:text-studio-dark transition-colors">DYNAMIC ENGINE</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-bold tracking-widest text-studio-dark uppercase mb-4">// TELEMETRY</h5>
          <ul class="space-y-2 text-studio-muted text-[11px]">
            <li>LAT: 45.1092° N</li>
            <li>LON: 15.2011° E</li>
            <li>EPOCH: UTC_CURRENT</li>
            <li>PORTAL STATUS: REZ_02</li>
          </ul>
        </div>
      </div>

      <!-- Right side top button -->
      <div class="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
        <button onclick="scrollToTop()" class="border border-studio-dark/20 hover:border-studio-dark p-3 text-studio-dark hover:bg-studio-dark hover:text-white transition-all duration-300 self-stretch md:self-auto text-center flex justify-center items-center gap-2 text-xs font-semibold tracking-widest uppercase">
          SCROLL TO CELESTIAL TOP ↑
        </button>
        <span class="text-[9px] text-studio-muted tracking-wider uppercase">VER. 2026.5.42 // ALL RIGHTS RESERVED</span>
      </div>

    </div>
  </footer>

  <!-- DYNAMIC INTERACTION DIALOGS (MODALS) -->
  
  <!-- Interactive custom menu overlay modal -->
  <div id="menu-modal" class="hidden fixed inset-0 bg-studio-dark/95 backdrop-blur-md z-50 flex-col justify-center items-center p-6 text-white font-tech">
    <button onclick="closeMenuModal()" class="absolute top-8 right-8 font-tech text-xs tracking-extreme text-white hover:text-studio-accent uppercase font-bold">
      [ CLOSE MENU X ]
    </button>
    <div class="flex flex-col gap-8 text-center">
      <span class="text-[10px] tracking-extreme text-studio-accent/40 uppercase">AEON CHANNELS CATALOGUE</span>
      <a href="#exhibition-viewport" onclick="closeMenuModal()" class="font-display font-black text-3xl sm:text-5xl uppercase hover:tracking-widest transition-all duration-500">EXHIBITION CORE</a>
      <a href="#telemetry-console" onclick="closeMenuModal()" class="font-display font-black text-3xl sm:text-5xl uppercase hover:tracking-widest transition-all duration-500">SPECIMEN TELEMETRY</a>
      <a href="#specimen-archive" onclick="closeMenuModal()" class="font-display font-black text-3xl sm:text-5xl uppercase hover:tracking-widest transition-all duration-500">PHYSICAL ARCHIVE</a>
      <a href="#system-generator" onclick="closeMenuModal()" class="font-display font-black text-3xl sm:text-5xl uppercase hover:tracking-widest transition-all duration-500">VISUAL GENERATOR</a>
    </div>
    <div class="absolute bottom-8 text-[9px] text-white/30 tracking-widest">
      SISTEMA EXPERIMENTAL DE DISEÑO VISUAL — AEON INC.
    </div>
  </div>

  <!-- Share exhibition feedback toast modal -->
  <div id="share-toast" class="fixed bottom-6 right-6 bg-studio-dark text-white border border-white/10 py-3 px-5 z-50 font-tech text-xs tracking-widest uppercase flex items-center gap-3 transition-all duration-500 transform translate-y-24 opacity-0 pointer-events-none">
    <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 10.742l4.8 2.442m0 0l-4.8 2.442m4.8-2.442a4 4 0 11-5.36 5.36a4 4 0 015.36-5.36zm4.8-2.442a4 4 0 11-5.36-5.36a4 4 0 015.36 5.36z" />
    </svg>
    <span>COMPOSITION METRICS COPY TO CLIPBOARD</span>
  </div>

  <!-- JS CODE FOR INTERACTIVITY, 3D ROTATION PARALLAX, AND GENERATIVE ART -->
  <script>
    // 1. SPECIMEN DATABASE & MODEL SWAPPER
    // Defining complex SVGs inside JSON to swap models dynamically on "NEXT" trigger
    const SPECIMENS_DB = [
      {
        id: 1,
        name: "OBSIDIAN CORE",
        codename: "OBSIDIAN-ALPHA",
        formula: "$\\text{Fe}_{0.84} \text{Ni}_{0.12} \text{Mg}_{0.03} \text{SiO}_4$",
        tag: "OBSIDIAN CORE",
        verticalTitle: "DESIGN",
        metrics: [84.2, 12.5, 3.3],
        mass: "4.218 KG",
        density: "7.42 G/CM³",
        age: "4.56 B YR",
        spectralClass: "X-CLASS",
        svg: `<g id="specimen-obsidian">
                <polygon points="190,40 230,120 170,140" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="0.5"/>
                <polygon points="230,120 280,180 220,200" fill="#0D0D0D" stroke="#1F1F1F" stroke-width="0.5"/>
                <polygon points="280,180 290,260 210,240" fill="#222222" stroke="#333333" stroke-width="0.5"/>
                <polygon points="290,260 230,340 180,310" fill="#111111" stroke="#222222" stroke-width="0.5"/>
                <polygon points="230,340 150,330 140,260" fill="#1C1C1C" stroke="#2C2C2C" stroke-width="0.5"/>
                <polygon points="150,330 110,250 140,210" fill="#090909" stroke="#1A1A1A" stroke-width="0.5"/>
                <polygon points="110,250 120,160 170,140" fill="#1E1E1E" stroke="#333333" stroke-width="0.5"/>
                <polygon points="120,160 190,40 170,140" fill="#151515" stroke="#252525" stroke-width="0.5"/>
                <polygon points="170,140 230,120 220,200" fill="#121212" stroke="#222222" stroke-width="0.5"/>
                <polygon points="170,140 220,200 160,230" fill="#2A2A2A" stroke="#3A3A3A" stroke-width="0.5"/>
                <polygon points="220,200 280,180 210,240" fill="#050505" stroke="#151515" stroke-width="0.5"/>
                <polygon points="220,200 210,240 160,230" fill="#1B1B1B" stroke="#2B2B2B" stroke-width="0.5"/>
                <polygon points="160,230 210,240 180,310" fill="#252525" stroke="#353535" stroke-width="0.5"/>
                <polygon points="160,230 180,310 140,260" fill="#0F0F0F" stroke="#1F1F1F" stroke-width="0.5"/>
                <polygon points="140,260 140,210 160,230" fill="#2F2F2F" stroke="#444444" stroke-width="0.5"/>
                <polygon points="120,160 170,140 140,210" fill="#161616" stroke="#282828" stroke-width="0.5"/>
              </g>`
      },
      {
        id: 2,
        name: "AEROLITE SHIELD",
        codename: "AEROLITE-SIGMA",
        formula: "$\\text{Fe}_{0.62} \text{Ni}_{0.35} \text{Mg}_{0.02} \text{Cr}_{0.01}$",
        tag: "AEROLITE SHIELD",
        verticalTitle: "SYSTEM",
        metrics: [62.4, 35.1, 2.5],
        mass: "6.890 KG",
        density: "8.15 G/CM³",
        age: "4.41 B YR",
        spectralClass: "S-CLASS",
        svg: `<g id="specimen-aerolite">
                <polygon points="200,30 250,90 210,130" fill="#3A3A3A" stroke="#4D4D4D" stroke-width="0.5"/>
                <polygon points="250,90 320,150 250,210" fill="#1C1C1C" stroke="#2F2F2F" stroke-width="0.5"/>
                <polygon points="320,150 310,270 230,250" fill="#2E2E2E" stroke="#3F3F3F" stroke-width="0.5"/>
                <polygon points="310,270 240,350 170,300" fill="#121212" stroke="#242424" stroke-width="0.5"/>
                <polygon points="240,350 140,340 110,240" fill="#282828" stroke="#3A3A3A" stroke-width="0.5"/>
                <polygon points="140,340 90,200 130,150" fill="#1F1F1F" stroke="#333333" stroke-width="0.5"/>
                <polygon points="90,200 120,110 160,110" fill="#3B3B3B" stroke="#4C4C4C" stroke-width="0.5"/>
                <polygon points="120,110 200,30 160,110" fill="#222222" stroke="#353535" stroke-width="0.5"/>
                <polygon points="160,110 250,90 210,130" fill="#181818" stroke="#2A2A2A" stroke-width="0.5"/>
                <polygon points="160,110 210,130 170,210" fill="#333333" stroke="#444444" stroke-width="0.5"/>
                <polygon points="210,130 250,210 170,210" fill="#101010" stroke="#222222" stroke-width="0.5"/>
                <polygon points="250,210 230,250 170,210" fill="#262626" stroke="#383838" stroke-width="0.5"/>
                <polygon points="170,210 230,250 170,300" fill="#3D3D3D" stroke="#555" stroke-width="0.5"/>
                <polygon points="170,210 170,300 110,240" fill="#141414" stroke="#262626" stroke-width="0.5"/>
                <polygon points="110,240 130,150 170,210" fill="#2B2B2B" stroke="#3C3C3C" stroke-width="0.5"/>
                <polygon points="130,150 160,110 170,210" fill="#1A1A1A" stroke="#2E2E2E" stroke-width="0.5"/>
              </g>`
      },
      {
        id: 3,
        name: "TEKTITE GLASS",
        codename: "TEKTITE-OMEGA",
        formula: "$\\text{SiO}_{0.89} \text{Al}_{0.08} \text{Fe}_{0.02} \text{Mn}_{0.01}$",
        tag: "TEKTITE GLASS",
        verticalTitle: "VISION",
        metrics: [89.1, 8.4, 2.5],
        mass: "3.112 KG",
        density: "5.88 G/CM³",
        age: "3.89 B YR",
        spectralClass: "C-CLASS",
        svg: `<g id="specimen-tektite">
                <polygon points="180,60 260,100 200,160" fill="#090909" stroke="#1A1A1A" stroke-width="0.5"/>
                <polygon points="260,100 300,190 220,230" fill="#242424" stroke="#353535" stroke-width="0.5"/>
                <polygon points="300,190 270,290 190,260" fill="#1A1A1A" stroke="#2B2B2B" stroke-width="0.5"/>
                <polygon points="270,290 210,340 150,290" fill="#2C2C2C" stroke="#3D3D3D" stroke-width="0.5"/>
                <polygon points="210,340 130,320 110,230" fill="#101010" stroke="#222222" stroke-width="0.5"/>
                <polygon points="130,320 90,190 140,150" fill="#303030" stroke="#444444" stroke-width="0.5"/>
                <polygon points="90,190 110,100 150,110" fill="#1E1E1E" stroke="#313131" stroke-width="0.5"/>
                <polygon points="110,100 180,60 150,110" fill="#2A2A2A" stroke="#3C3C3C" stroke-width="0.5"/>
                <polygon points="150,110 200,160 140,150" fill="#0E0E0E" stroke="#202020" stroke-width="0.5"/>
                <polygon points="200,160 220,230 190,260" fill="#343434" stroke="#484848" stroke-width="0.5"/>
                <polygon points="140,150 200,160 190,260" fill="#1C1C1C" stroke="#2D2D2D" stroke-width="0.5"/>
                <polygon points="140,150 190,260 110,230" fill="#282828" stroke="#3A3A3A" stroke-width="0.5"/>
                <polygon points="190,260 150,290 110,230" fill="#121212" stroke="#242424" stroke-width="0.5"/>
                <polygon points="110,230 130,320 150,290" fill="#3A3A3A" stroke="#4D4D4D" stroke-width="0.5"/>
                <polygon points="150,110 180,60 200,160" fill="#181818" stroke="#2B2B2B" stroke-width="0.5"/>
              </g>`
      }
    ];

    let currentSpecimenIndex = 0;

    // 2. TIMING AND DECORATION
    function updateClock() {
      const now = new Date();
      const format = (num) => String(num).padStart(2, '0');
      document.getElementById('realtime-clock').textContent = `UTC ${format(now.getUTCHours())}:${format(now.getUTCMinutes())}:${format(now.getUTCSeconds())}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 3. 3D INTERACTIVE MOUSE PARALLAX OVER HERO Specimen
    const triggerArea = document.getElementById('specimen-trigger-area');
    const modelContainer = document.getElementById('active-specimen-svg');
    const leftArc = document.getElementById('left-arc-wrapper');

    triggerArea.addEventListener('mousemove', (e) => {
      const rect = triggerArea.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Restrict range to build luxury controlled smooth movement
      const rotX = -y * 0.15;
      const rotY = x * 0.15;

      modelContainer.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.08)`;
      // Shift left graphic curve for parallax alignment depth
      leftArc.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.02}px)`;
    });

    triggerArea.addEventListener('mouseleave', () => {
      modelContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      leftArc.style.transform = `translateX(0px) translateY(0px)`;
    });

    // 4. ACTION HOOK: NEXT SPECIMEN TRIGGER
    function nextSpecimen() {
      currentSpecimenIndex = (currentSpecimenIndex + 1) % SPECIMENS_DB.length;
      renderSpecimen(SPECIMENS_DB[currentSpecimenIndex]);
    }

    // 5. SELECT SPECIMEN BY TAB
    function selectSpecimen(id) {
      currentSpecimenIndex = SPECIMENS_DB.findIndex(x => x.id === id);
      renderSpecimen(SPECIMENS_DB[currentSpecimenIndex]);
    }

    // 6. DRAW AND TRANSITION SPECIMEN LOGIC
    function renderSpecimen(specimen) {
      // 1. Transition SVG Graphics smoothly inside primary Frame
      const svg = document.getElementById('active-specimen-svg');
      svg.style.opacity = '0';
      svg.style.transform = 'scale(0.8) rotateY(45deg)';

      setTimeout(() => {
        svg.innerHTML = specimen.svg;
        svg.style.opacity = '1';
        svg.style.transform = 'scale(1) rotateY(0deg)';
      }, 300);

      // 2. Change frame titles and vertical design tracking
      document.getElementById('vertical-title').textContent = specimen.verticalTitle;
      document.getElementById('specimen-tag').textContent = specimen.tag;
      document.getElementById('specimen-label-selector').textContent = `[SPECIMEN-0${specimen.id}: ${specimen.name}]`;

      // 3. Update specifications table & readout panels
      document.getElementById('telemetry-specimen-id').textContent = `SPECIMEN // AEON-0${specimen.id}`;
      document.getElementById('telemetry-codename').textContent = specimen.codename;
      document.getElementById('chemical-formula').textContent = specimen.formula;
      
      document.getElementById('spec-mass').textContent = specimen.mass;
      document.getElementById('spec-density').textContent = specimen.density;
      document.getElementById('spec-age').textContent = specimen.age;
      document.getElementById('spec-class').textContent = specimen.spectralClass;

      // 4. Smoothly fill metric progress parameters
      document.getElementById('metric-val-1').textContent = `${specimen.metrics[0]}%`;
      document.getElementById('metric-bar-1').style.width = `${specimen.metrics[0]}%`;

      document.getElementById('metric-val-2').textContent = `${specimen.metrics[1]}%`;
      document.getElementById('metric-bar-2').style.width = `${specimen.metrics[1]}%`;

      document.getElementById('metric-val-3').textContent = `${specimen.metrics[2]}%`;
      document.getElementById('metric-bar-3').style.width = `${specimen.metrics[2]}%`;

      // 5. Repaint tab styling to reflect active choice
      for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById(`tab-btn-${i}`);
        if (i === specimen.id) {
          btn.classList.remove('border-studio-dark/20', 'bg-transparent', 'text-studio-dark');
          btn.classList.add('border-studio-dark', 'bg-studio-dark', 'text-white');
          btn.querySelector('span:first-child').textContent = `0${i} // ${SPECIMENS_DB[i-1].name} (ACTIVE)`;
        } else {
          btn.classList.remove('border-studio-dark', 'bg-studio-dark', 'text-white');
          btn.classList.add('border-studio-dark/20', 'bg-transparent', 'text-studio-dark');
          btn.querySelector('span:first-child').textContent = `0${i} // ${SPECIMENS_DB[i-1].name}`;
        }
      }
    }

    // 7. INTERACTIVE TELEMETRY WIREFRAME OVERLAY OVER HERO CARD
    let wireframeActive = false;
    function toggleTelemetryWireframe() {
      wireframeActive = !wireframeActive;
      const wireframe = document.getElementById('wireframe-grid');
      const artFrame = document.getElementById('art-frame');

      if (wireframeActive) {
        wireframe.style.opacity = '1';
        wireframe.style.pointerEvents = 'auto';
        artFrame.classList.add('ring-2', 'ring-dashed', 'ring-emerald-500/40');
      } else {
        wireframe.style.opacity = '0';
        wireframe.style.pointerEvents = 'none';
        artFrame.classList.remove('ring-2', 'ring-dashed', 'ring-emerald-500/40');
      }
    }

    // 8. INTERACTIVE GENERATIVE SYSTEM DESIGN GENERATOR
    function updateGenerativeArt() {
      const density = parseInt(document.getElementById('param-density').value);
      const radius = parseInt(document.getElementById('param-radius').value);
      const tension = parseFloat(document.getElementById('param-tension').value);

      document.getElementById('label-density-param').textContent = `${density} POINTS`;
      document.getElementById('label-radius-param').textContent = `${radius}px`;
      document.getElementById('label-tension-param').textContent = tension;

      const svg = document.getElementById('generative-svg');
      svg.innerHTML = ''; // wipe old generation paths

      const center = 200;
      let pathPoints = [];

      // Generate geometric outer coordinates based on density + radius modifiers
      for (let i = 0; i < density; i++) {
        const angle = (i * 2 * Math.PI) / density;
        const offset = Math.sin(angle * 3) * (tension * 30);
        const r = radius/2 + offset;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        pathPoints.push({x, y});

        // Small coordinate trace point
        const pt = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pt.setAttribute("cx", x);
        pt.setAttribute("cy", y);
        pt.setAttribute("r", "2");
        pt.setAttribute("fill", "#ffffff");
        pt.setAttribute("opacity", "0.6");
        svg.appendChild(pt);

        // Telemetry lines from center axis
        const axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
        axis.setAttribute("x1", center);
        axis.setAttribute("y1", center);
        axis.setAttribute("x2", x);
        axis.setAttribute("y2", y);
        axis.setAttribute("stroke", "rgba(255, 255, 255, 0.08)");
        axis.setAttribute("stroke-width", "0.5");
        svg.appendChild(axis);
      }

      // Drawing structural polygon shapes
      let polyPointsStr = pathPoints.map(p => `${p.x},${p.y}`).join(' ');
      const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      poly.setAttribute("points", polyPointsStr);
      poly.setAttribute("fill", "rgba(255,255,255,0.03)");
      poly.setAttribute("stroke", "rgba(255,255,255,0.4)");
      poly.setAttribute("stroke-width", "1");
      svg.appendChild(poly);

      // Outer bounding alignment circles for premium aesthetic
      const boundingCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      boundingCircle.setAttribute("cx", center);
      boundingCircle.setAttribute("cy", center);
      boundingCircle.setAttribute("r", radius/2);
      boundingCircle.setAttribute("fill", "none");
      boundingCircle.setAttribute("stroke", "rgba(255,255,255,0.15)");
      boundingCircle.setAttribute("stroke-width", "1");
      boundingCircle.setAttribute("stroke-dasharray", "4,4");
      svg.appendChild(boundingCircle);

      const boundingOuter = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      boundingOuter.setAttribute("cx", center);
      boundingOuter.setAttribute("cy", center);
      boundingOuter.setAttribute("r", (radius/2) * 1.3);
      boundingOuter.setAttribute("fill", "none");
      boundingOuter.setAttribute("stroke", "rgba(255,255,255,0.05)");
      boundingOuter.setAttribute("stroke-width", "0.5");
      svg.appendChild(boundingOuter);
    }

    function resetGenerativeArt() {
      document.getElementById('param-density').value = 12;
      document.getElementById('param-radius').value = 200;
      document.getElementById('param-tension').value = 0.5;
      updateGenerativeArt();
    }

    // Init generative system render on page load
    updateGenerativeArt();

    // 9. LEDGER SUBSCRIPTION TERMINAL CONTROLS
    function handleLedgerSubmission(e) {
      e.preventDefault();
      const emailInput = document.getElementById('ledger-email');
      if (emailInput.value) {
        document.getElementById('ledger-success-msg').classList.remove('hidden');
        // Subtract slot to simulate state activity
        const currentSlots = parseInt(document.getElementById('slots-counter').textContent.split(' ')[0]);
        document.getElementById('slots-counter').textContent = `${currentSlots - 1} / 1000`;
      }
    }

    function closeLedgerSuccess() {
      document.getElementById('ledger-success-msg').classList.add('hidden');
      document.getElementById('ledger-email').value = '';
    }

    // 10. MODAL/TOAST UTILITIES
    function openMenuModal() {
      document.getElementById('menu-modal').classList.remove('hidden');
      document.getElementById('menu-modal').classList.add('flex');
    }

    function closeMenuModal() {
      document.getElementById('menu-modal').classList.add('hidden');
      document.getElementById('menu-modal').classList.remove('flex');
    }

    function shareExhibition() {
      // Use document.execCommand to match iframe-friendly requirements perfectly
      const shareUrl = window.location.href;
      const el = document.createElement('textarea');
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      const toast = document.getElementById('share-toast');
      toast.classList.remove('opacity-0', 'translate-y-24', 'pointer-events-none');
      toast.classList.add('opacity-100', 'translate-y-0');

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-24', 'pointer-events-none');
        toast.classList.remove('opacity-100', 'translate-y-0');
      }, 3000);
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  </script>

</body>
</html>
4
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  ArrowUpRight, 
  Briefcase, 
  Check, 
  X, 
  Heart, 
  Sparkles, 
  Sliders, 
  User, 
  Layers, 
  Zap, 
  HelpCircle, 
  Compass, 
  Globe, 
  Lock,
  ChevronRight,
  RefreshCw,
  Bell,
  Star,
  Cpu,
  Bookmark
} from 'lucide-react';

// Mock Job Data
const INITIAL_JOBS = [
  {
    id: 1,
    title: "Web Designer",
    company: "Amazon",
    logo: "A",
    logoBg: "bg-orange-500/10 text-orange-400",
    time: "6 h ago",
    salary: "$127k/yr",
    type: "Full-time",
    level: "Senior",
    location: "Los Angeles, CA",
    mode: "Remote/Office",
    applicants: "More than 60 applicants",
    match: 79,
    starred: false,
    applied: false
  },
  {
    id: 2,
    title: "Web Designer",
    company: "BeReal",
    logo: "BR",
    logoBg: "bg-white/10 text-white",
    time: "2 d ago",
    salary: "$115k/yr",
    type: "Full-time",
    level: "Middle",
    location: "Los Angeles, CA",
    mode: "Remote",
    applicants: "Less than 40 applicants",
    match: 86,
    starred: true,
    applied: false
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Wise",
    logo: "W",
    logoBg: "bg-green-500/10 text-green-400",
    time: "3 d ago",
    salary: "$120k/yr",
    type: "Full-time",
    level: "Senior",
    location: "Los Angeles, CA",
    mode: "Remote/Office",
    applicants: "More than 30 applicants",
    match: 92,
    starred: false,
    applied: false
  },
  {
    id: 4,
    title: "Senior Product Designer",
    company: "Stripe",
    logo: "S",
    logoBg: "bg-indigo-500/10 text-indigo-400",
    time: "4 d ago",
    salary: "$165k/yr",
    type: "Full-time",
    level: "Senior",
    location: "San Francisco, CA",
    mode: "Remote",
    applicants: "More than 100 applicants",
    match: 95,
    starred: false,
    applied: false
  },
  {
    id: 5,
    title: "Interface Architect",
    company: "Linear",
    logo: "L",
    logoBg: "bg-purple-500/10 text-purple-400",
    time: "5 d ago",
    salary: "$140k/yr",
    type: "Full-time",
    level: "Middle",
    location: "New York, NY",
    mode: "Remote",
    applicants: "Less than 20 applicants",
    match: 74,
    starred: false,
    applied: false
  },
  {
    id: 6,
    title: "Interaction Designer",
    company: "Figma",
    logo: "F",
    logoBg: "bg-pink-500/10 text-pink-400",
    time: "1 w ago",
    salary: "$150k/yr",
    type: "Full-time",
    level: "Senior",
    location: "Los Angeles, CA",
    mode: "Office",
    applicants: "More than 80 applicants",
    match: 81,
    starred: true,
    applied: false
  }
];

export default function App() {
  // Experience level toggle state (Junior, Middle, Senior)
  const [activeLevel, setActiveLevel] = useState('Senior');
  
  // Custom interactive state for Job Match simulation
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [searchTerm, setSearchTerm] = useState('Web Designer, UX/UI');
  const [searchLocation, setSearchLocation] = useState('Los Angeles');
  const [selectedTime, setSelectedTime] = useState('This week');
  const [selectedMode, setSelectedMode] = useState('Remote');
  const [selectedSalary, setSelectedSalary] = useState('$100k-$130k');
  const [selectedType, setSelectedType] = useState('Full time');
  const [selectedCardLevel, setSelectedCardLevel] = useState('Senior, Middle');

  // Match system variables
  const [isScanning, setIsScanning] = useState(false);
  const [matchProgress, setMatchProgress] = useState(100);
  const [scanMessage, setScanMessage] = useState('');
  
  // Custom Toast Message
  const [toast, setToast] = useState({ show: false, message: '' });

  // Sandbox calculations
  const [sandboxSkillScore, setSandboxSkillScore] = useState(85);
  const [sandboxSalaryExpectation, setSandboxSalaryExpectation] = useState(125);
  const [sandboxRemotePref, setSandboxRemotePref] = useState(90);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  // Dynamically calculate Orion AI Index based on Sandbox sliders
  const derivedOrionIndex = (
    (sandboxSkillScore * 0.4 + (150 - sandboxSalaryExpectation) * 0.3 + sandboxRemotePref * 0.3) / 100
  ).toFixed(2);

  // Filter jobs based on selected filter buttons
  const filteredJobs = jobs.filter(job => {
    // Salary condition (simple mapping for simulated interactivity)
    if (selectedSalary === '$100k-$130k') {
      const numericSal = parseInt(job.salary.replace('$', '').replace('k/yr', ''));
      if (numericSal < 100 || numericSal > 135) return false;
    }
    // Remote condition
    if (selectedMode === 'Remote' && !job.mode.includes('Remote')) {
      return false;
    }
    // Search condition
    if (searchTerm) {
      const matchTitle = job.title.toLowerCase().includes(searchTerm.toLowerCase().split(',')[0].trim());
      const matchComp = job.company.toLowerCase().includes(searchTerm.toLowerCase());
      if (!matchTitle && !matchComp) return false;
    }
    return true;
  });

  // Dynamic values depending on active level tab
  const getStatsForLevel = () => {
    switch (activeLevel) {
      case 'Junior':
        return { candidates: '1,105', growth: '18%', index: '0.14', vacancies: '3,210', vacanciesGrowth: '+12' };
      case 'Middle':
        return { candidates: '3,840', growth: '42%', index: '0.22', vacancies: '5,944', vacanciesGrowth: '+25' };
      case 'Senior':
      default:
        return { candidates: '2,574', growth: '32%', index: '0.27', vacancies: '8,574', vacanciesGrowth: '+37' };
    }
  };

  const currentStats = getStatsForLevel();

  // Run AI matching scan sequence
  const handleRunMatchScan = () => {
    setIsScanning(true);
    setMatchProgress(0);
    setScanMessage('Scanning structural matches in Los Angeles...');
    
    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setIsScanning(false);
        // Randomly tweak match percentages slightly to show action
        setJobs(prev => prev.map(job => ({
          ...job,
          match: Math.min(100, Math.max(70, Math.floor(job.match + (Math.random() * 8 - 4))))
        })));
        showToast("Orion Match Engine updated with real-time portfolio data!");
      }
      setMatchProgress(current);
      if (current === 30) setScanMessage('Parsing salary graphs and target bands...');
      if (current === 60) setScanMessage('Evaluating location synergy vectors...');
      if (current === 85) setScanMessage('Generating direct neural match indexes...');
    }, 80);
  };

  const handleToggleStar = (id) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, starred: !job.starred } : job
    ));
    const targetJob = jobs.find(j => j.id === id);
    if (targetJob) {
      showToast(targetJob.starred ? "Removed from shortlists" : "Added to matching shortlists");
    }
  };

  const handleApply = (id) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, applied: true } : job
    ));
    showToast("Application submitted through Orion FastTrack!");
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-slate-100 font-sans antialiased selection:bg-[#c6f432] selection:text-black overflow-x-hidden relative">
      
      {/* Background Ambience / Mossy Green & Foggy Glow Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[80%] rounded-full bg-radial-gradient from-[#223018] to-transparent opacity-40 blur-[130px]" />
        <div className="absolute top-[10%] left-[45%] w-[40%] h-[50%] rounded-full bg-radial-gradient from-[#1e2719] to-transparent opacity-30 blur-[110px]" />
        <div className="absolute top-[35%] left-[25%] w-[350px] h-[350px] rounded-full bg-[#c6f432] opacity-[0.03] blur-[100px]" />
      </div>

      {/* Global Toast */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16171b] border border-[#c6f432]/30 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-bounce-short">
          <div className="w-2 h-2 rounded-full bg-[#c6f432] animate-ping" />
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* 1. HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.04] bg-[#090a0c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#16171b] to-[#1e2025] border border-white/10 flex items-center justify-center shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c6f432]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Outer stylish loop */}
              <svg className="w-5 h-5 text-[#c6f432]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" strokeLinejoin="round" className="opacity-40" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-wider text-white font-mono flex items-center gap-1.5">
              ORION <span className="text-[10px] bg-[#c6f432]/10 text-[#c6f432] px-2 py-0.5 rounded-full border border-[#c6f432]/20 font-sans tracking-normal font-semibold">AI v2.5</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm font-medium text-white/90 hover:text-[#c6f432] transition-colors relative py-1 group">
              Match Center
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c6f432] scale-x-100 origin-left transition-transform duration-300" />
            </a>
            <a href="#salary-tool" className="text-sm font-medium text-white/50 hover:text-white transition-colors py-1">Salary Index</a>
            <a href="#features" className="text-sm font-medium text-white/50 hover:text-white transition-colors py-1">Neural Search</a>
            <a href="#pricing" className="text-sm font-medium text-white/50 hover:text-white transition-colors py-1">Enterprise</a>
          </nav>

          {/* User Controls & Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => showToast("All system notification streams active")}
              className="relative w-10 h-10 rounded-xl bg-[#121316] border border-white/5 flex items-center justify-center text-white/70 hover:text-white transition-all hover:bg-[#16171b] active:scale-95"
            >
              <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#c6f432] animate-pulse" />
              <Bell className="w-4.5 h-4.5" />
            </button>
            
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 pl-1">
              <div className="w-9 h-9 rounded-full ring-2 ring-[#c6f432]/30 p-0.5 bg-gradient-to-tr from-[#121316] to-[#1e2025]">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" 
                  alt="Avatar" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-xs font-semibold text-white">Elena Rostova</div>
                <div className="text-[10px] text-white/40">UX Lead Match</div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION / DASHBOARD SANDBOX */}
      <section id="platform" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        
        {/* Intro Tagline */}
        <div className="text-center md:text-left mb-8 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/5 backdrop-blur-md mb-4 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#c6f432]" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">AI-Powered Vector Matching</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
            YOUR <br />
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">JOB MATCH</span>
          </h1>
          <p className="text-sm sm:text-base text-white/50 leading-relaxed font-normal">
            Precision algorithmic search mapping across top-tier technical organizations. Adjust your parameters, explore vectors, and match directly with decision-makers.
          </p>
        </div>

        {/* Dynamic AI Engine Top Bar Search (Image Style) */}
        <div className="w-full bg-[#121316]/90 backdrop-blur-xl rounded-2xl border border-white/[0.06] p-4 mb-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search inputs mimicking inspiration image */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                <Search className="w-4 h-4" />
              </div>
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Role or keywords"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-white focus:outline-none focus:border-[#c6f432]/50 focus:bg-white/[0.05] transition-all"
              />
            </div>

            <div className="md:col-span-4 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/30">
                <MapPin className="w-4 h-4" />
              </div>
              <input 
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Location"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-white focus:outline-none focus:border-[#c6f432]/50 focus:bg-white/[0.05] transition-all"
              />
            </div>

            <div className="md:col-span-3 flex items-center gap-2">
              <button 
                onClick={handleRunMatchScan}
                disabled={isScanning}
                className="w-full py-3 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:bg-[#c6f432] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Matching...</span>
                  </>
                ) : (
                  <>
                    <Cpu className="w-4 h-4" />
                    <span>Scan Market</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Real-time Match Analysis Indicator */}
          {isScanning && (
            <div className="mt-4 pt-3 border-t border-white/5 animate-fade-in">
              <div className="flex justify-between items-center mb-1.5 text-xs text-white/50">
                <span className="flex items-center gap-2 font-mono">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c6f432] animate-ping" />
                  {scanMessage}
                </span>
                <span className="font-semibold text-white">{matchProgress}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#c6f432]/50 to-[#c6f432] rounded-full transition-all duration-75"
                  style={{ width: `${matchProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* GRID OF DASHBOARD PANELS (Matches visual layout precisely) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDE: Salary expectations dynamic graph (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#121316] rounded-3xl border border-white/[0.06] p-6 shadow-xl relative overflow-hidden group min-h-[350px]">
            {/* Gloss subtle top lighting */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Salary expectations</h3>
                <p className="text-xs text-white/35 mt-1">Mid to Senior target variance</p>
              </div>
              <span className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                <TrendingUp className="w-4 h-4" />
              </span>
            </div>

            {/* Custom Interactive Salary Graph using robust inline Canvas/SVG */}
            <div className="relative w-full h-44 mt-6">
              
              {/* SVG Hatched Pattern Definition */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <defs>
                  <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(198, 244, 50, 0.2)" strokeWidth="1.5" />
                  </pattern>
                </defs>

                {/* Sub-grid lines */}
                <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="rgba(255,255,255,0.03)" strokeDasharray="3,3" />
                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(255,255,255,0.03)" strokeDasharray="3,3" />
                <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="rgba(255,255,255,0.03)" strokeDasharray="3,3" />

                {/* Main Graph Line Path */}
                {/* Visualizing coordinates that represent dynamic expectations curve */}
                <path 
                  d="M 20,110 C 60,110 90,90 120,95 C 160,100 180,50 210,50 C 240,50 280,30 310,25" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.15)" 
                  strokeWidth="2" 
                />

                {/* Highlight hatched region exactly matching the Jun/Jul range in image */}
                {/* SVG polygon representing filled curve under matching points */}
                <path 
                  d="M 120,95 C 160,100 180,50 210,50 C 225,50 235,42 245,38 L 245,110 L 120,110 Z" 
                  fill="url(#diagonalHatch)" 
                />

                {/* Interactive Highlight Nodes */}
                <circle cx="210" cy="50" r="5" fill="#c6f432" />
                <circle cx="210" cy="50" r="12" fill="none" stroke="#c6f432" strokeWidth="1.5" className="animate-ping opacity-30" />
              </svg>

              {/* Float Floating Tooltip matching image */}
              <div 
                className="absolute top-[16px] left-[55%] -translate-x-1/2 bg-[#c6f432] text-black text-[10px] font-black tracking-tighter px-2 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-[#c6f432]/20"
                style={{ zIndex: 20 }}
              >
                <span>Avg: 48%</span>
              </div>

              {/* Graph Markers (Labels matching image structure: Mar, Apr, May, Jun, Jul, Aug) */}
              <div className="absolute bottom-1 left-0 right-0 flex justify-between px-2 text-[10px] text-white/30 font-mono">
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>

              {/* Absolute coordinates legends */}
              <div className="absolute top-[38px] left-[4%] text-[9px] text-white/20 font-mono">
                Senior
              </div>
              <div className="absolute bottom-[48px] left-[4%] text-[9px] text-white/20 font-mono">
                Middle
              </div>
            </div>

            {/* Simulated Live Salary Analytics Panel */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-white/40">Average Target Bracket</span>
              <span className="text-white font-mono font-bold">$125,000 – $148,000/yr</span>
            </div>

          </div>

          {/* MIDDLE: Dynamic Isometric Structural Core (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#121316] rounded-3xl border border-white/[0.06] p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[350px]">
            {/* Premium organic structural core design */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#182116]/40 via-[#121316]/90 to-[#121316] pointer-events-none z-0" />
            
            <div className="relative z-10">
              <span className="text-[10px] bg-[#c6f432]/10 text-[#c6f432] px-2.5 py-1 rounded-full border border-[#c6f432]/20 font-semibold tracking-wide">
                ORION ENGINE CORE
              </span>
              <h4 className="text-sm font-bold text-white mt-3">Interactive Vector Search</h4>
              <p className="text-xs text-white/45 mt-1 leading-relaxed">
                Visual representation of deep talent coordinates. Tap dynamic nodes to isolate optimal matched structures.
              </p>
            </div>

            {/* Gorgeous high-fidelity isometric core block inside */}
            <div className="relative w-full h-36 flex items-center justify-center my-4 z-10">
              <svg className="w-48 h-full" viewBox="0 0 200 120" fill="none">
                {/* Base isometric grid floor */}
                <path d="M 100,20 L 170,55 L 100,90 L 30,55 Z" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <path d="M 100,35 L 150,60 L 100,85 L 50,60 Z" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                {/* Isometric extruded bounding glass box */}
                {/* Left side */}
                <path d="M 30,55 L 30,35 L 100,70 L 100,90 Z" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.04)" />
                {/* Right side */}
                <path d="M 170,55 L 170,35 L 100,70 L 100,90 Z" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.04)" />

                {/* Mossy Green Highlighting & Internal Core Structure */}
                {/* Simulated illuminated organic circuits inside */}
                <path d="M 100,65 L 140,45 L 100,25 L 60,45 Z" fill="rgba(198, 244, 50, 0.04)" stroke="rgba(198, 244, 50, 0.2)" strokeWidth="1.5" />
                <line x1="100" y1="25" x2="100" y2="65" stroke="rgba(198, 244, 50, 0.3)" strokeWidth="1" strokeDasharray="2,2" />

                {/* Floating nodes */}
                <circle cx="100" cy="45" r="4" fill="#c6f432" className="animate-pulse" />
                <circle cx="140" cy="45" r="3" fill="#c6f432" />
                <circle cx="60" cy="45" r="3" fill="white" className="opacity-40" />
                <circle cx="100" cy="65" r="3.5" fill="white" />

                {/* Top glowing rings */}
                <ellipse cx="100" cy="18" rx="20" ry="8" stroke="rgba(198,244,50,0.5)" strokeWidth="1.5" className="animate-bounce" style={{ animationDuration: '3s' }} />
                <ellipse cx="100" cy="18" rx="10" ry="4" stroke="#c6f432" strokeWidth="1" />
              </svg>

              {/* Subtle background fog light */}
              <div className="absolute w-24 h-24 rounded-full bg-[#c6f432] opacity-10 blur-[30px]" />
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] text-white/50 bg-white/[0.02] border border-white/5 p-2 rounded-xl">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c6f432]" />
                Neural Match State: Safe
              </span>
              <span className="font-mono text-white/70">Vectors: 148,941</span>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Candidates, Index, & Vacancies Cards (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Widget 1: Candidates Online */}
            <div className="bg-[#121316] rounded-3xl border border-white/[0.06] p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#c6f432]/5 to-transparent opacity-40 blur-lg" />
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Candidates Online</span>
                <span className="w-6 h-6 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Visual candidate groups */}
              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                <div className="bg-white/[0.02] border border-white/[0.04] p-2.5 rounded-xl">
                  <div className="text-lg font-bold text-white tracking-tight">{activeLevel === 'Junior' ? '1,105' : '2,574'}</div>
                  <div className="text-[10px] text-white/30 font-semibold mt-0.5">32% Match</div>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.04] p-2.5 rounded-xl">
                  <div className="text-lg font-bold text-white tracking-tight">4,131</div>
                  <div className="text-[10px] text-white/30 font-semibold mt-0.5">54% Match</div>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.04] p-2.5 rounded-xl">
                  <div className="text-lg font-bold text-white tracking-tight">998</div>
                  <div className="text-[10px] text-white/30 font-semibold mt-0.5">14% Match</div>
                </div>
              </div>

              {/* Dynamic Toggle Pillars (Junior, Middle, Senior) exactly like image */}
              <div className="bg-black/40 p-1.5 rounded-xl border border-white/5 flex items-center justify-between">
                <button 
                  onClick={() => {
                    setActiveLevel('Junior');
                    showToast("Switched analytics view to Junior Candidates");
                  }}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${activeLevel === 'Junior' ? 'bg-white text-black shadow-md' : 'text-white/40 hover:text-white'}`}
                >
                  Junior
                </button>
                <button 
                  onClick={() => {
                    setActiveLevel('Middle');
                    showToast("Switched analytics view to Middle Candidates");
                  }}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${activeLevel === 'Middle' ? 'bg-white text-black shadow-md' : 'text-white/40 hover:text-white'}`}
                >
                  Middle
                </button>
                <button 
                  onClick={() => {
                    setActiveLevel('Senior');
                    showToast("Switched analytics view to Senior Candidates");
                  }}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${activeLevel === 'Senior' ? 'bg-[#c6f432] text-black shadow-md' : 'text-white/40 hover:text-white'}`}
                >
                  Senior
                </button>
              </div>
            </div>

            {/* Widgets Sub-grid (Orion Index & Vacancies in two columns) */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Orion Index */}
              <div className="bg-[#121316] rounded-3xl border border-white/[0.06] p-4 shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Orion Index</span>
                  <span className="text-white/30 hover:text-[#c6f432] transition-colors cursor-help">
                    <HelpCircle className="w-3 h-3" />
                  </span>
                </div>
                
                <div className="my-3">
                  <div className="text-2xl font-black text-white font-mono tracking-tight">{currentStats.index}</div>
                  <div className="text-[10px] text-[#c6f432] font-semibold flex items-center gap-0.5 mt-0.5">
                    <span>+6% index health</span>
                  </div>
                </div>

                {/* Mini graphical track/slider mimicking the Orion Index Widget */}
                <div className="w-full bg-black/40 h-4 rounded-full p-0.5 border border-white/5 flex items-center relative overflow-hidden">
                  <div className="bg-gradient-to-r from-[#c6f432] to-[#c6f432]/60 h-full rounded-full" style={{ width: '45%' }} />
                  <div className="absolute inset-0 flex justify-between px-2 items-center text-[7px] text-white/30 font-mono pointer-events-none">
                    <span>OFFERS</span>
                    <span>RESPONSES</span>
                  </div>
                </div>
              </div>

              {/* Vacancies */}
              <div className="bg-[#121316] rounded-3xl border border-white/[0.06] p-4 shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Vacancies</span>
                  <span className="text-white/30">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                <div className="my-3">
                  <div className="text-2xl font-black text-white font-mono tracking-tight">{currentStats.vacancies}</div>
                  <div className="text-[10px] text-white/30 font-semibold mt-0.5">{currentStats.vacanciesGrowth} pending validation</div>
                </div>

                {/* Miniature animated equalizer-style bar chart */}
                <div className="flex items-end justify-between h-5 pt-1">
                  {[40, 60, 20, 80, 50, 95, 30, 70, 45, 80].map((val, idx) => (
                    <div 
                      key={idx} 
                      className="w-[3px] rounded-full transition-all duration-300"
                      style={{ 
                        height: `${val}%`, 
                        backgroundColor: idx === 5 ? '#c6f432' : 'rgba(255,255,255,0.15)' 
                      }} 
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 3. CORE JOB FILTER CAPSULE & DYNAMIC ROW (Matches image black capsule filter layout) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Horizontal Black Capsule Filter Bar */}
        <div className="w-full bg-black rounded-full border border-white/10 p-2 flex flex-wrap items-center justify-between gap-2 shadow-2xl">
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Filter Pill 1 */}
            <select 
              value={selectedTime}
              onChange={(e) => {
                setSelectedTime(e.target.value);
                showToast(`Filter applied: Added within ${e.target.value}`);
              }}
              className="bg-[#121316] text-xs font-semibold text-white/80 py-2 px-4 rounded-full border border-white/5 focus:outline-none focus:border-[#c6f432]/30 cursor-pointer hover:bg-white/5 transition-colors"
            >
              <option value="This week">This week</option>
              <option value="Last 24h">Last 24h</option>
              <option value="This month">This month</option>
            </select>

            {/* Filter Pill 2 */}
            <select 
              value={selectedMode}
              onChange={(e) => {
                setSelectedMode(e.target.value);
                showToast(`Location mode filter: ${e.target.value}`);
              }}
              className="bg-[#121316] text-xs font-semibold text-white/80 py-2 px-4 rounded-full border border-white/5 focus:outline-none focus:border-[#c6f432]/30 cursor-pointer hover:bg-white/5 transition-colors"
            >
              <option value="Remote">Remote</option>
              <option value="Remote/Office">Remote/Office</option>
              <option value="Office Only">Office Only</option>
            </select>

            {/* Filter Pill 3 */}
            <select 
              value={selectedSalary}
              onChange={(e) => {
                setSelectedSalary(e.target.value);
                showToast(`Target bracket adjusted: ${e.target.value}`);
              }}
              className="bg-[#121316] text-xs font-semibold text-white/80 py-2 px-4 rounded-full border border-white/5 focus:outline-none focus:border-[#c6f432]/30 cursor-pointer hover:bg-white/5 transition-colors"
            >
              <option value="$100k-$130k">$100k-$130k</option>
              <option value="$130k-$160k">$130k-$160k</option>
              <option value="Any Salary">Any Salary</option>
            </select>

            {/* Filter Pill 4 */}
            <select 
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                showToast(`Contract format updated: ${e.target.value}`);
              }}
              className="bg-[#121316] text-xs font-semibold text-white/80 py-2 px-4 rounded-full border border-white/5 focus:outline-none focus:border-[#c6f432]/30 cursor-pointer hover:bg-white/5 transition-colors"
            >
              <option value="Full time">Full time</option>
              <option value="Contract">Contract</option>
              <option value="Part time">Part time</option>
            </select>

            {/* Filter Pill 5 */}
            <select 
              value={selectedCardLevel}
              onChange={(e) => {
                setSelectedCardLevel(e.target.value);
                showToast(`Experience tier filtered: ${e.target.value}`);
              }}
              className="bg-[#121316] text-xs font-semibold text-white/80 py-2 px-4 rounded-full border border-white/5 focus:outline-none focus:border-[#c6f432]/30 cursor-pointer hover:bg-white/5 transition-colors"
            >
              <option value="Senior, Middle">Senior, Middle</option>
              <option value="Lead/Director">Lead/Director</option>
              <option value="All Levels">All Levels</option>
            </select>

          </div>

          <div className="flex items-center gap-3">
            {/* Quick config reset */}
            <button 
              onClick={() => {
                setSearchTerm('Web Designer, UX/UI');
                setSelectedSalary('$100k-$130k');
                setSelectedMode('Remote');
                setSelectedTime('This week');
                showToast("Filters reset to matching defaults");
              }}
              className="p-2 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-all active:scale-95"
              title="Reset configuration filters"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <div className="text-xs text-white/40 font-semibold bg-[#121316] px-3 py-1.5 rounded-full border border-white/5 font-mono">
              {filteredJobs.length} Results
            </div>
          </div>
        </div>

      </section>

      {/* 4. HIGH FIDELITY JOB MATCH CARDS GRID (Aesthetic layout exactly resembling bottom row of image) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-[#121316] rounded-3xl border border-white/[0.06] p-6 shadow-xl relative overflow-hidden group hover:border-[#c6f432]/30 transition-all duration-300"
            >
              {/* Card top gradient lighting overlay */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#c6f432]/30 transition-all" />

              {/* Dynamic Sweep Glow Line during matching scanner */}
              {isScanning && (
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#c6f432] to-transparent animate-pulse" />
              )}

              {/* Main Card Header info */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  {/* Company Logo Icon matching custom rounded shapes */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg border border-white/10 shadow-inner ${job.logoBg}`}>
                    {job.logo}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#c6f432] transition-colors">{job.title}</h4>
                    <span className="text-xs text-white/40 font-semibold">{job.company} • {job.time}</span>
                  </div>
                </div>
                
                {/* Action controls matching the visual nodes */}
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => handleToggleStar(job.id)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${job.starred ? 'bg-[#c6f432]/10 border-[#c6f432]/40 text-[#c6f432]' : 'border-white/5 text-white/30 hover:text-white'}`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => {
                      showToast(`Hiding job matches from ${job.company}`);
                    }}
                    className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/30 hover:text-white transition-all"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Custom Rounded Metadata Tags exactly matching visualization */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[10px] font-bold text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  {job.salary}
                </span>
                <span className="text-[10px] font-bold text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  {job.type}
                </span>
                <span className="text-[10px] font-bold text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                  {job.level}
                </span>
                <span className="text-[10px] font-bold text-white/50 bg-[#c6f432]/5 text-[#c6f432] px-3 py-1 rounded-full border border-[#c6f432]/15">
                  {job.mode}
                </span>
              </div>

              {/* Match Rating Circular Ring Gauge (Visual cornerstone of the layout) */}
              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                
                <div className="flex items-center gap-2">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    {/* SVG circular track with absolute matching progress indicator */}
                    <svg className="w-full h-full -rotate-90">
                      <circle 
                        cx="28" 
                        cy="28" 
                        r="24" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.04)" 
                        strokeWidth="4" 
                      />
                      <circle 
                        cx="28" 
                        cy="28" 
                        r="24" 
                        fill="none" 
                        stroke="#c6f432" 
                        strokeWidth="4" 
                        strokeDasharray={2 * Math.PI * 24}
                        strokeDashoffset={2 * Math.PI * 24 * (1 - job.match / 100)}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-xs font-black font-mono text-white tracking-tighter leading-none">{job.match}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>Strong Match</span>
                      <Sparkles className="w-3 h-3 text-[#c6f432]" />
                    </div>
                    <p className="text-[10px] text-white/30 font-semibold mt-0.5">{job.applicants}</p>
                  </div>
                </div>

                {/* Primary apply workflow */}
                <button 
                  onClick={() => handleApply(job.id)}
                  disabled={job.applied}
                  className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${job.applied ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/5 border border-white/10 text-white hover:bg-[#c6f432] hover:text-black hover:border-[#c6f432]'}`}
                >
                  {job.applied ? 'Applied' : 'Apply'}
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* 5. INTERACTIVE SALARY INDEX SANDBOX (Exclusive value-added feature matching aesthetic DNA) */}
      <section id="salary-tool" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="w-full bg-[#121316] rounded-3xl border border-white/[0.06] p-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow layers */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#c6f432] opacity-[0.02] blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Context Left Panel */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold text-[#c6f432] uppercase tracking-wider">
                ORION PARAMETRICS
              </span>
              <h2 className="text-3xl font-black tracking-tight text-white leading-tight">
                Simulate Your <br />
                Neural Match Vector
              </h2>
              <p className="text-xs text-white/40 leading-relaxed">
                Adjust sliders matching your target performance bands. The Orion Engine Core recalibrates live indices using local parameters for Los Angeles area metrics.
              </p>
              
              <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-2">Live Vector Outputs</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-white/40">Computed Index</span>
                    <div className="text-2xl font-black text-[#c6f432] font-mono mt-0.5">{derivedOrionIndex}</div>
                  </div>
                  <div>
                    <span className="text-xs text-white/40">Market Percentile</span>
                    <div className="text-2xl font-black text-white font-mono mt-0.5">
                      {Math.floor(sandboxSkillScore * 0.7 + sandboxRemotePref * 0.3)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Config Sliders Right Panel */}
            <div className="lg:col-span-7 bg-black/40 rounded-2xl border border-white/5 p-6 space-y-6">
              
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-white/70 mb-2">
                  <span>Skill Synergy Depth</span>
                  <span className="text-[#c6f432] font-mono">{sandboxSkillScore}%</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="100" 
                  value={sandboxSkillScore} 
                  onChange={(e) => setSandboxSkillScore(Number(e.target.value))}
                  className="w-full accent-[#c6f432] bg-white/10 h-1.5 rounded-lg cursor-ew-resize focus:outline-none"
                />
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-white/70 mb-2">
                  <span>Salary Expectation (Lower Band)</span>
                  <span className="text-white font-mono">${sandboxSalaryExpectation}k/yr</span>
                </div>
                <input 
                  type="range" 
                  min="90" 
                  max="180" 
                  value={sandboxSalaryExpectation} 
                  onChange={(e) => setSandboxSalaryExpectation(Number(e.target.value))}
                  className="w-full accent-[#c6f432] bg-white/10 h-1.5 rounded-lg cursor-ew-resize focus:outline-none"
                />
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-white/70 mb-2">
                  <span>Remote Flexibility Weight</span>
                  <span className="text-[#c6f432] font-mono">{sandboxRemotePref}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sandboxRemotePref} 
                  onChange={(e) => setSandboxRemotePref(Number(e.target.value))}
                  className="w-full accent-[#c6f432] bg-white/10 h-1.5 rounded-lg cursor-ew-resize focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[10px] text-white/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c6f432]" />
                  Recalibrates matches live in visual cards below
                </span>
                <button 
                  onClick={() => {
                    setSandboxSkillScore(85);
                    setSandboxSalaryExpectation(125);
                    setSandboxRemotePref(90);
                    showToast("Simulations restored to default baseline");
                  }}
                  className="text-xs text-[#c6f432] font-bold hover:underline transition-all"
                >
                  Reset baseline
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 6. NEURAL FEATURE HIGHLIGHTS */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Core Capabilities</span>
          <h2 className="text-3xl font-bold text-white mt-2">Precision Talent Plumbing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#121316] rounded-2xl border border-white/[0.06] p-6 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#c6f432]/10 to-transparent border border-[#c6f432]/20 flex items-center justify-center text-[#c6f432] mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">FastTrack Vectors</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Bypass traditional applicant queues. The platform directly indexes your professional coordinates against target hire bands.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121316] rounded-2xl border border-white/[0.06] p-6 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#c6f432]/10 to-transparent border border-[#c6f432]/20 flex items-center justify-center text-[#c6f432] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Organic Compensation Charts</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Visualize exact expectation overlaps. Get micro-metric recommendations to maximize your target salary bracket outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121316] rounded-2xl border border-white/[0.06] p-6 hover:border-white/10 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#c6f432]/10 to-transparent border border-[#c6f432]/20 flex items-center justify-center text-[#c6f432] mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Secure Sandbox Matching</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Apply anonymously without revealing sensitive current employer telemetry. Release identity tags only when mutual matches validate.
            </p>
          </div>

        </div>

      </section>

      {/* 7. PREMIUM CTA FOOTER COHESION */}
      <footer className="relative z-10 border-t border-white/[0.04] bg-black/40 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
            
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#c6f432]/10 border border-[#c6f432]/20 flex items-center justify-center text-[#c6f432]">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-white font-mono">ORION MATCH ENGINE v2.5</span>
              </div>
              <p className="text-xs text-white/35 max-w-sm">
                Unlock higher density salary vectors and direct recruiter feedback loops with our premium matchmaking infrastructure.
              </p>
            </div>

            <div className="md:col-span-6 flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Stay updated with market indices" 
                className="flex-1 bg-white/[0.03] border border-white/5 py-3 px-4 rounded-xl text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#c6f432]/30"
              />
              <button 
                onClick={() => showToast("Subscribed to Orion Market Briefs")}
                className="py-3 px-6 rounded-xl bg-[#c6f432] text-black font-bold text-xs hover:bg-white transition-colors"
              >
                Join Core
              </button>
            </div>

          </div>

          <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <div>
              © {new Date().getFullYear()} Orion Network. Architectural telemetry mapped securely.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-[#c6f432] cursor-pointer transition-colors">Privacy Standard</span>
              <span className="hover:text-[#c6f432] cursor-pointer transition-colors">Vector Schematics</span>
              <span className="hover:text-[#c6f432] cursor-pointer transition-colors">Developer Portal</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
5
import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query 
} from 'firebase/firestore';
import { 
  Trees, 
  Compass, 
  Coins, 
  Home, 
  Users, 
  Globe, 
  ChevronRight, 
  ArrowRight, 
  Calculator, 
  MapPin, 
  Activity, 
  Calendar, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  Wind, 
  Zap, 
  X, 
  Info,
  Layers,
  Phone
} from 'lucide-react';

// --- FIREBASE CONFIGURATION & INITIALIZATION ---
// Safe fallback configuration with environment variables
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : {
      apiKey: "",
      authDomain: "default-app-id.firebaseapp.com",
      projectId: "default-app-id",
      storageBucket: "default-app-id.appspot.com",
      messagingSenderId: "1234567890",
      appId: "1:1234567890:web:abcdef"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'verde-reserve-luxury';

// --- TRANSLATION DICTIONARY FOR PRESERVING ACCURATE TEXT ---
const translations = {
  RU: {
    title: "VERDE RESERVE",
    subtitle: "Элитный Лесной Резерват & Коттеджный Поселок",
    tagline: "Закрытый коттеджный поселок, объединивший преимущества загородной жизни с инфраструктурой мегаполиса.",
    navConcept: "Концепция",
    navPlan: "План застройки",
    navYield: "Доходность",
    navResidences: "Резиденции",
    navPortal: "Инвестор-Панель",
    bookTour: "Забронировать тур",
    totalTerritory: "Общая территория",
    totalTerritoryDesc: "Окруженный вековым хвойным лесом нетронутый природный заповедник.",
    residentialTerritory: "Жилая территория",
    residentialTerritoryDesc: "Гармонично вписанные участки премиум-класса с сохранением ландшафта.",
    avgPlotSize: "Средний размер участка",
    avgPlotSizeDesc: "Просторные лесные наделы для абсолютной приватности каждого резидента.",
    residencesCount: "Количество домовладений",
    residencesCountDesc: "Ограниченная клубная серия современных коттеджей в едином стиле.",
    conceptTitle: "КОНЦЕПЦИЯ",
    conceptSubtitle: "ГАРМОНИЯ ПРИРОДЫ И ТЕХНОЛОГИЙ",
    planTitle: "ПЛАН ЗАСТРОЙКИ",
    planSubtitle: "ПРОДУМАННОЕ ЗОНИРОВАНИЕ ТЕРРИТОРИИ",
    planCenterText: "ПРОДУМАННОЕ ЗОНИРОВАНИЕ ТЕРРИТОРИИ: ПРИВАТНАЯ ЖИЛАЯ ЗОНА, ОБЩЕСТВЕННОЕ ПРОСТРАНСТВО И СПОРТИВНО-ИГРОВОЙ КЛАССТЕР",
    yieldTitle: "ДОХОДНОСТЬ",
    yieldSubtitle: "ОЦЕНКА ИНВЕСТИЦИОННОГО ПОТЕНЦИАЛА",
    yieldText: "Средняя стоимость аренды коттеджа площадью 160-180 м² на Новорижском шоссе составляет 180 000 – 250 000 ₽/месяц.",
    yieldGoal: "Потенциальный годовой доход от сдачи объекта в аренду может достигать",
    yieldGoalVal: "2.8 МЛН ₽",
    yieldPercent: "Что обеспечивает доходность на уровне",
    yieldPercentVal: "9-11% ГОДОВЫХ",
    yieldBottomText: "ПРИ ТЕКУЩЕЙ СТОИМОСТИ ВХОДА",
    calcTitle: "Калькулятор доходности",
    calcPropertyPrice: "Стоимость коттеджа",
    calcMonthlyRent: "Ежемесячная аренда",
    calcOccupancy: "Заполняемость",
    calcAnnualIncome: "Ожидаемый годовой доход",
    calcRoi: "Чистая доходность (ROI)",
    calcPayback: "Окупаемость проекта",
    savePortfolio: "Зафиксировать расчет в реестре",
    recentDeals: "Активность инвесторов",
    privateTourTitle: "Эксклюзивный визит в Verde Reserve",
    privateTourDesc: "Выберите формат индивидуального показа. Мы организуем премиальный трансфер.",
    helicopter: "Вертолетный трансфер из Мякинино",
    maybach: "Представительский седан класса люкс",
    selfArrival: "Индивидуальный заезд по VIP-пропускам",
    fullName: "Ваше имя",
    phone: "Номер телефона",
    submitTour: "Оформить привилегированный доступ",
    residencesTitle: "АРХИТЕКТУРА",
    residencesSubtitle: "КЛУБНЫЕ РЕЗИДЕНЦИИ",
    typeA: "Коттеджи типа «А» (Бизнес) — 85 шт.",
    typeADesc: "Идеальный баланс эргономики и панорамного остекления. Просторные террасы с выходом к сосновому массиву.",
    typeB: "Коттеджи типа «Б» (Премиум) — 50 шт.",
    typeBDesc: "Усадьбы представительского класса со спа-комплексом, увеличенной высотой потолков (4.2м) и бассейном.",
    sportsCluster: "Спортивный кластер: воркаут, теннисный корт, футбольное поле",
    promenade: "Прогулочная набережная и пирс — 1.2 км",
    kidsClub: "Детский клуб — 450 м²",
    parking: "2 гостевых паркинга и центральный КПП",
    smartTitle: "SMART-СЕРВИСЫ",
    smartSubtitle: "ЭКОЛОГИЧЕСКИЙ МОНИТОРИНГ В РЕАЛЬНОМ ВРЕМЕНИ",
    airQuality: "Чистота воздуха (AQI)",
    greenEnergy: "Доля солнечной генерации",
    reservationsActive: "Активные бронирования визитов",
    close: "Закрыть",
    successMsg: "Заявка успешно принята в закрытую систему. Наш консьерж свяжется с вами в течение 10 минут."
  },
  EN: {
    title: "VERDE RESERVE",
    subtitle: "Elite Forest Reserve & Cottage Community",
    tagline: "A private gated community blending the absolute serenity of nature with seamless metropolitan high-tech infrastructure.",
    navConcept: "Concept",
    navPlan: "Development Plan",
    navYield: "Financial Yield",
    navResidences: "Residences",
    navPortal: "Investor Hub",
    bookTour: "Book Private Tour",
    totalTerritory: "Total Area",
    totalTerritoryDesc: "Unspoiled natural forest reserve fully enclosed and protected.",
    residentialTerritory: "Residential Land",
    residentialTerritoryDesc: "Harmoniously integrated luxury plots, preserving mature pine landscape.",
    avgPlotSize: "Average Plot Size",
    avgPlotSizeDesc: "Generous forest allocations ensuring absolute privacy and distance.",
    residencesCount: "Total Properties",
    residencesCountDesc: "A limited, highly curated collection of architectural masterpieces.",
    conceptTitle: "CONCEPT",
    conceptSubtitle: "HARMONY OF NATURE & ECO-DESIGN",
    planTitle: "ZONING PLAN",
    planSubtitle: "THOUGHTFUL LAND ALLOCATION",
    planCenterText: "METICULOUS TERRITORY ZONING: PRIVATE RESIDENTIAL BLOCKS, PUBLIC WATERFRONT SPACES, AND ACTIVE SPORTS PARK",
    yieldTitle: "INVESTMENT YIELD",
    yieldSubtitle: "FINANCIAL FORECAST & GROWTH",
    yieldText: "Average luxury cottage rental (160-180 m²) on Novorizhskoye Highway spans 180,000 – 250,000 ₽/month.",
    yieldGoal: "Potential annual rental income for a standard villa reaches up to",
    yieldGoalVal: "2.8M ₽",
    yieldPercent: "Providing a guaranteed conservative yield of",
    yieldPercentVal: "9-11% PER ANNUM",
    yieldBottomText: "BASED ON CURRENT EARLY-ENTRY VALUATIONS",
    calcTitle: "Yield & ROI Engine",
    calcPropertyPrice: "Property Valuation",
    calcMonthlyRent: "Projected Monthly Rent",
    calcOccupancy: "Occupancy Rate",
    calcAnnualIncome: "Projected Annual Return",
    calcRoi: "Net Return on Investment (ROI)",
    calcPayback: "Estimated Payback Period",
    savePortfolio: "Log Valuation to Live Ledger",
    recentDeals: "Live Investor Activity",
    privateTourTitle: "Exquisite Private Visit",
    privateTourDesc: "Select your preferred arrival. We coordinate white-glove executive transportation.",
    helicopter: "Helicopter Transfer from Myakinino Heliport",
    maybach: "Executive Chauffeur (Mercedes-Maybach S-Class)",
    selfArrival: "Private Vehicle Entry via Digital VIP Pass",
    fullName: "Full Name",
    phone: "Phone Number",
    submitTour: "Request Elite Priority Access",
    residencesTitle: "ARCHITECTURES",
    residencesSubtitle: "SIGNATURE VILLAS",
    typeA: "Cottages Type 'A' (Business) — 85 Units",
    typeADesc: "Ideal spatial flow with custom floor-to-ceiling glass. Expansive decks leading straight to the woodlands.",
    typeB: "Cottages Type 'B' (Premium) — 50 Units",
    typeBDesc: "Palatial multi-generational estates featuring master wellness spas, 4.2m ceilings, and negative-edge heated pools.",
    sportsCluster: "Sports Cluster: Pro Gym, Tennis Courts, Soccer Turf",
    promenade: "Lakeside Promenade & Boat Dock — 1.2 KM",
    kidsClub: "Forest Explorers Kids Club — 450 m²",
    parking: "Dual Guest Helipads, Parking & Executive Checkpoint",
    smartTitle: "RESIDENTIAL API",
    smartSubtitle: "REAL-TIME ECOLOGICAL & METRIC DASHBOARD",
    airQuality: "Air Purity Index (AQI)",
    greenEnergy: "Solar Grid Integration",
    reservationsActive: "Active Guest Screenings",
    close: "Close",
    successMsg: "Your registration has been locked. An estate manager will connect shortly."
  }
};

export default function App() {
  const [lang, setLang] = useState('RU');
  const t = translations[lang];

  // Application Navigation
  const [activeTab, setActiveTab] = useState('concept'); // 'concept' | 'plan' | 'yield' | 'residences' | 'portal'
  
  // Interactive Stats Highlights from Slide 1
  const [selectedStat, setSelectedStat] = useState('residential'); // 'total' | 'residential' | 'plot' | 'houses'

  // Interactive Plan Highlights from Slide 2
  const [selectedZone, setSelectedZone] = useState('cottageA'); // 'sports' | 'cottageA' | 'promenade' | 'parking' | 'cottageB' | 'kidsClub'

  // Dynamic Calculator States from Slide 3
  const [propertyPrice, setPropertyPrice] = useState(24000000); // in rubles
  const [monthlyRent, setMonthlyRent] = useState(210000); // in rubles
  const [occupancyRate, setOccupancyRate] = useState(82); // percentage

  // Selected Residence for Floorplan Exploration
  const [selectedResidenceTab, setSelectedResidenceTab] = useState('A'); // 'A' | 'B'
  const [hoveredRoom, setHoveredRoom] = useState(null);

  // Booking Modal
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [tourMethod, setTourMethod] = useState('maybach');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Firestore / User state
  const [user, setUser] = useState(null);
  const [savedInvestments, setSavedInvestments] = useState([]);
  const [savedTours, setSavedTours] = useState([]);
  const [activeNotification, setActiveNotification] = useState(null);

  // Environment metrics
  const [airQuality, setAirQuality] = useState(98);
  const [solarYield, setSolarYield] = useState(74);

  // Floating forest particles for organic cinematic vibe
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 15,
      opacity: Math.random() * 0.4 + 0.1
    }));
    setParticles(generated);

    // Keep air quality dynamic
    const interval = setInterval(() => {
      setAirQuality(prev => Math.min(100, Math.max(94, prev + (Math.random() * 2 - 1))));
      setSolarYield(prev => Math.min(100, Math.max(60, prev + (Math.random() * 4 - 2))));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- FIREBASE INTEGRATION IMPLEMENTATION ---
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        console.error("Firebase Auth Error", err);
      }
    };
    initAuth();

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth();
  }, []);

  // Sync real-time data when user auth is ready
  useEffect(() => {
    if (!user) return;

    // Load logged investments
    const investmentsQuery = query(
      collection(db, 'artifacts', appId, 'public', 'data', 'investments')
    );
    const unsubscribeInvestments = onSnapshot(
      investmentsQuery, 
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setSavedInvestments(list.slice(-10)); // keep last 10 in feed
      },
      (error) => console.error("Firestore loading error: ", error)
    );

    // Load active tours
    const toursQuery = query(
      collection(db, 'artifacts', appId, 'public', 'data', 'tours')
    );
    const unsubscribeTours = onSnapshot(
      toursQuery,
      (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setSavedTours(list.slice(-8));
      },
      (error) => console.error("Firestore tours loading error: ", error)
    );

    return () => {
      unsubscribeInvestments();
      unsubscribeTours();
    };
  }, [user]);

  // Handle calculator investment logging to Firestore
  const handleSavePortfolio = async () => {
    if (!user) return;
    try {
      const calculatedAnnual = Math.round(monthlyRent * 12 * (occupancyRate / 100));
      const calculatedRoi = ((calculatedAnnual / propertyPrice) * 100).toFixed(1);
      
      const payload = {
        investorLabel: `Investor-${Math.floor(1000 + Math.random() * 9000)}`,
        propertyPrice,
        monthlyRent,
        occupancyRate,
        annualIncome: calculatedAnnual,
        roi: Number(calculatedRoi),
        timestamp: Date.now()
      };

      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'investments'), payload);
      triggerToast(lang === 'RU' ? "Портфель сохранен в глобальном реестре!" : "Investment layout logged to global registry!");
    } catch (err) {
      console.error("Error logging investment", err);
    }
  };

  // Handle VIP Tour booking to Firestore
  const handleBookTour = async (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    if (!user) return;

    try {
      const payload = {
        name: clientName,
        phone: clientPhone,
        method: tourMethod,
        timestamp: Date.now(),
        status: 'Approved'
      };

      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'tours'), payload);
      setFormSuccess(true);
      setClientName('');
      setClientPhone('');
      setTimeout(() => {
        setFormSuccess(false);
        setIsTourModalOpen(false);
      }, 4000);
    } catch (err) {
      console.error("Error logging tour booking", err);
    }
  };

  const triggerToast = (msg) => {
    setActiveNotification(msg);
    setTimeout(() => {
      setActiveNotification(null);
    }, 4000);
  };

  // Interactive computations
  const annualIncome = Math.round(monthlyRent * 12 * (occupancyRate / 100));
  const currentRoi = ((annualIncome / propertyPrice) * 100).toFixed(1);
  const paybackPeriod = (propertyPrice / annualIncome).toFixed(1);

  return (
    <div className="min-h-screen bg-[#060D08] text-white font-sans relative overflow-hidden select-none selection:bg-[#D99E30]/30 selection:text-white">
      
      {/* Cinematic Organic Particle Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Floating Sparkles and Lighting overlays */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-gradient-radial from-emerald-950/40 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-gradient-radial from-amber-950/25 via-transparent to-transparent pointer-events-none z-0" />

      {/* GLOBAL TOAST */}
      {activeNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0E1B12] border border-[#D99E30]/40 px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 animate-fade-in-up backdrop-blur-md">
          <Sparkles className="text-[#D99E30] animate-pulse w-5 h-5" />
          <span className="text-sm tracking-wider text-stone-200 font-light">{activeNotification}</span>
        </div>
      )}

      {/* EXECUTIVE TOP NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#060D08]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Elite Brand Signature */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('concept')}>
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-[#142A1C] to-[#254F35] border border-[#D99E30]/30 flex items-center justify-center overflow-hidden group">
              <Trees className="w-5 h-5 text-[#D99E30] group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#D99E30]/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-[0.25em] text-white">VERDE</h1>
              <p className="text-[9px] tracking-[0.4em] text-[#D99E30] font-light -mt-1">RESERVE</p>
            </div>
          </div>

          {/* Desktop Interactive Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 p-1 rounded-full border border-white/5">
            {[
              { id: 'concept', label: t.navConcept },
              { id: 'plan', label: t.navPlan },
              { id: 'residences', label: t.navResidences },
              { id: 'yield', label: t.navYield },
              { id: 'portal', label: t.navPortal }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black shadow-lg shadow-[#D99E30]/20 font-semibold' 
                    : 'text-stone-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Accessories */}
          <div className="flex items-center space-x-4">
            {/* Live Environment Gauges */}
            <div className="hidden lg:flex items-center space-x-4 text-[11px] font-mono tracking-widest text-stone-400 border-r border-white/10 pr-4">
              <div className="flex items-center space-x-1">
                <Wind className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>AQI:</span>
                <span className="text-emerald-400 font-bold">{Math.round(airQuality)}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>SOLAR:</span>
                <span className="text-amber-400 font-bold">{Math.round(solarYield)}%</span>
              </div>
            </div>

            {/* Language Toggle */}
            <button 
              onClick={() => {
                setLang(prev => prev === 'RU' ? 'EN' : 'RU');
                triggerToast(lang === 'RU' ? "Language changed to English" : "Язык изменен на Русский");
              }}
              className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs tracking-widest font-mono text-stone-300 hover:text-[#D99E30] hover:border-[#D99E30]/30 transition-all"
            >
              <Globe className="w-3.5 h-3.5 inline mr-1" />
              {lang}
            </button>

            {/* Premium CTA */}
            <button 
              onClick={() => setIsTourModalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#173020] to-[#0D1C12] border border-[#D99E30]/30 text-xs font-semibold tracking-wider uppercase text-white hover:border-[#D99E30] transition-all hover:shadow-[0_0_15px_rgba(217,158,48,0.2)] flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D99E30]" />
              <span className="hidden sm:inline">{t.bookTour}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-8 relative z-20">

        {/* ======================================= */}
        {/* HERO / CONCEPT SECTION (SLIDE 1 VISUALS) */}
        {/* ======================================= */}
        {activeTab === 'concept' && (
          <div className="space-y-12 animate-fade-in">
            
            {/* Slide Header Vibe */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#09150E] to-[#040A06] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Premium Background image decoration mimicking natural organic woods in inspiration image */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              
              {/* Cinematic Glow Behind Concept Text */}
              <div className="absolute top-[20%] left-[10%] w-[180px] h-[180px] bg-emerald-500/15 blur-[80px] rounded-full pointer-events-none" />

              <div className="space-y-6 max-w-xl z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99E30] animate-ping" />
                  <span className="text-[10px] tracking-widest font-semibold text-[#D99E30] uppercase">VERDE PRESENCE</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-black tracking-[0.15em] text-white leading-none">
                    {t.conceptTitle}
                  </h1>
                  <p className="text-xs tracking-[0.5em] text-[#D99E30] font-light uppercase mt-2">
                    {t.conceptSubtitle}
                  </p>
                </div>
                <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed border-l-2 border-[#D99E30]/50 pl-4">
                  {t.tagline}
                </p>
              </div>

              {/* Atmospheric side card simulating modern architecture nested in forest */}
              <div className="relative w-full md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" 
                  alt="Luxury Forest Villa" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-[#D99E30] font-semibold">Location / Локация</p>
                  <p className="text-xs text-white tracking-wider mt-0.5">Новорижское шоссе, 45 км от МКАД / 45km from MKAD</p>
                </div>
              </div>
            </div>

            {/* THE FOUR SIGNATURE HERO METRICS FROM SLIDE 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Stat 1: 24 HA */}
              <div 
                onClick={() => setSelectedStat('total')}
                className={`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'total' 
                    ? 'border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]' 
                    : 'border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                {/* Organic branch background silhouette effect */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <Trees className="w-32 h-32 text-emerald-600" />
                </div>
                <p className="text-5xl font-black tracking-tighter text-white">24 ГА</p>
                <div className="h-0.5 w-12 bg-[#D99E30] my-4" />
                <h3 className="text-xs tracking-widest uppercase font-semibold text-[#D99E30]">{t.totalTerritory}</h3>
                <p className="text-stone-400 text-xs font-light mt-2 leading-relaxed">{t.totalTerritoryDesc}</p>
                
                {selectedStat === 'total' && (
                  <div className="absolute top-3 right-3 text-[#D99E30] animate-pulse">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Stat 2: 16 HA - SOLID YELLOW/AMBER HIGHLIGHT ACCORDING TO SLIDE 1 */}
              <div 
                onClick={() => setSelectedStat('residential')}
                className={`relative rounded-2xl p-8 cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'residential' 
                    ? 'bg-gradient-to-b from-[#D99E30] to-[#B07E20] text-black shadow-[0_0_40px_rgba(217,158,48,0.3)] scale-[1.02]' 
                    : 'border border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                <p className={`text-5xl font-black tracking-tighter ${selectedStat === 'residential' ? 'text-black' : 'text-white'}`}>16 ГА</p>
                <div className={`h-0.5 w-12 my-4 ${selectedStat === 'residential' ? 'bg-black' : 'bg-[#D99E30]'}`} />
                <h3 className={`text-xs tracking-widest uppercase font-bold ${selectedStat === 'residential' ? 'text-stone-900' : 'text-[#D99E30]'}`}>{t.residentialTerritory}</h3>
                <p className={`text-xs font-light mt-2 leading-relaxed ${selectedStat === 'residential' ? 'text-stone-900/90' : 'text-stone-400'}`}>{t.residentialTerritoryDesc}</p>

                {selectedStat === 'residential' && (
                  <div className="absolute top-3 right-3 text-black">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Stat 3: 12 SOTOK */}
              <div 
                onClick={() => setSelectedStat('plot')}
                className={`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'plot' 
                    ? 'border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]' 
                    : 'border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                <p className="text-5xl font-black tracking-tighter text-white">12 СОТОК</p>
                <div className="h-0.5 w-12 bg-[#D99E30] my-4" />
                <h3 className="text-xs tracking-widest uppercase font-semibold text-[#D99E30]">{t.avgPlotSize}</h3>
                <p className="text-stone-400 text-xs font-light mt-2 leading-relaxed">{t.avgPlotSizeDesc}</p>

                {selectedStat === 'plot' && (
                  <div className="absolute top-3 right-3 text-[#D99E30] animate-pulse">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Stat 4: 135 HOUSES */}
              <div 
                onClick={() => setSelectedStat('houses')}
                className={`relative rounded-2xl p-8 border cursor-pointer transition-all duration-500 overflow-hidden ${
                  selectedStat === 'houses' 
                    ? 'border-[#D99E30] bg-[#0A160F] shadow-[0_0_30px_rgba(217,158,48,0.15)] scale-[1.02]' 
                    : 'border-white/5 bg-[#080E0A] hover:border-white/20'
                }`}
              >
                <p className="text-5xl font-black tracking-tighter text-white">135 ШТ.</p>
                <div className="h-0.5 w-12 bg-[#D99E30] my-4" />
                <h3 className="text-xs tracking-widest uppercase font-semibold text-[#D99E30]">{t.residencesCount}</h3>
                <p className="text-stone-400 text-xs font-light mt-2 leading-relaxed">{t.residencesCountDesc}</p>

                {selectedStat === 'houses' && (
                  <div className="absolute top-3 right-3 text-[#D99E30] animate-pulse">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            {/* EXPANDABLE CONTEXT DRAWER BASED ON ACTIVE STAT */}
            <div className="rounded-2xl border border-white/5 bg-[#080F0B] p-6 md:p-8 shadow-xl animate-fade-in relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {selectedStat === 'total' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Flora Preservation / Флора</span>
                    <h4 className="text-lg font-bold text-white uppercase">Заповедный сосновый бор</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Более 85% территории покрыто взрослыми хвойными деревьями высотой до 25 метров. Каждое дерево прошло лазерное сканирование для минимизации воздействия при строительстве.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Elevation / Ландшафт</span>
                    <h4 className="text-lg font-bold text-white uppercase">Перепады высот до 18м</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Естественный холмистый ландшафт выгодно подчеркивает видовые характеристики каждого участка, предотвращая избыточное скопление влаги и создавая приватные ниши.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Ecology / Чистота</span>
                    <h4 className="text-lg font-bold text-white uppercase">Экологический сертификат A+</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Качество воздуха соответствует нормативам лучших швейцарских лесных курортов. Отсутствие промышленных предприятий на расстоянии 70 км по розе ветров.</p>
                  </div>
                </div>
              )}

              {selectedStat === 'residential' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase">Masterplan / План</span>
                    <h4 className="text-lg font-bold text-[#D99E30] uppercase">Умное межевание</h4>
                    <p className="text-stone-200 text-xs font-light leading-relaxed">Вся жилая площадь спроектирована по системе кластеров, разделенных зелеными буферными коридорами шириной не менее 15 метров, что исключает эффект "окна в окна".</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase">Roads / Инфраструктура</span>
                    <h4 className="text-lg font-bold text-[#D99E30] uppercase">Широкие бульвары</h4>
                    <p className="text-stone-200 text-xs font-light leading-relaxed">Асфальтовое покрытие премиального класса шириной 7 метров с велодорожками, прогулочными тротуарами из колотой гранитной брусчатки и скрытой ливневой канализацией.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-black font-semibold bg-[#D99E30] px-1.5 py-0.5 rounded uppercase">Utilities / Коммуникации</span>
                    <h4 className="text-lg font-bold text-[#D99E30] uppercase">Подземная инженерия</h4>
                    <p className="text-stone-200 text-xs font-light leading-relaxed">Все коммуникации (электричество 20-30 кВт на участок, оптоволоконный интернет, магистральный газ, центральное водоснабжение и канализация) проложены под землей.</p>
                  </div>
                </div>
              )}

              {selectedStat === 'plot' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Plot Boundaries / Межи</span>
                    <h4 className="text-lg font-bold text-white uppercase">Отсутствие глухих заборов</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Для сохранения единой гармоничной экосистемы границы участков оформляются живыми изгородями из туй, можжевельника и низкого светопрозрачного 3D-ограждения.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Individual Design / Дизайн</span>
                    <h4 className="text-lg font-bold text-white uppercase">Код застройки FL-12</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Каждый участок допускает интеграцию индивидуального ландшафтного дизайна с условием сохранения не менее 60% взрослых хвойных насаждений на пятне застройки.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Solitude / Уединение</span>
                    <h4 className="text-lg font-bold text-white uppercase">Приватные выходы в лес</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Участки первой линии имеют собственные калитки с бесконтактным биометрическим доступом непосредственно в заповедную зону лесного массива.</p>
                  </div>
                </div>
              )}

              {selectedStat === 'houses' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Styles / Архитектура</span>
                    <h4 className="text-lg font-bold text-white uppercase">Органический модернизм</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Используются только благородные долговечные материалы: сибирская лиственница планкен, натуральный сланец, керамогранит увеличенного формата и закаленное стекло.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Smart Control / Умный Дом</span>
                    <h4 className="text-lg font-bold text-white uppercase">Интеграция по умолчанию</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Каждая вилла оснащена контроллерами защиты от протечек, умным отоплением, датчиками присутствия и единым центром мониторинга с интеграцией в Apple HomeKit / Алису.</p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Glazing / Остекление</span>
                    <h4 className="text-lg font-bold text-white uppercase">Портальные системы Schüco</h4>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">Энергоэффективные двухкамерные стеклопакеты с аргоновым наполнением и нано-напылением серебра, отражающим избыточный ультрафиолет летом и сохраняющим тепло зимой.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick action to push forward */}
            <div className="flex justify-center pt-4">
              <button 
                onClick={() => setActiveTab('plan')}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#11261A] to-[#0A160F] border border-white/10 hover:border-[#D99E30]/40 text-sm font-semibold tracking-wider uppercase text-white hover:text-[#D99E30] transition-all duration-300 flex items-center space-x-3 shadow-xl"
              >
                <span>Перейти к интерактивному плану застройки</span>
                <ChevronRight className="w-4 h-4 text-[#D99E30] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* INTERACTIVE PLAN / ZONING (SLIDE 2)      */}
        {/* ======================================= */}
        {activeTab === 'plan' && (
          <div className="space-y-12 animate-fade-in">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Compass className="w-4 h-4 text-[#D99E30] inline mr-1 animate-spin-slow" />
                <span className="text-[10px] tracking-widest font-mono text-[#D99E30] uppercase">Interactive Map / Интерактивная карта</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white uppercase">{t.planTitle}</h2>
              <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase">{t.planSubtitle}</p>
            </div>

            {/* RADIAL ZONING CONTAINER (COPYING THE SIGNATURE CIRCULAR LAYOUT OF SLIDE 2) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
              
              {/* Central Circle with Orbit Elements */}
              <div className="lg:col-span-7 flex justify-center items-center py-6 relative min-h-[450px]">
                
                {/* Background Ring Effects */}
                <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-white/5 animate-spin-slow" />
                <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-[#D99E30]/10" />
                
                {/* Center Core Display Frame */}
                <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-2 border-[#D99E30] shadow-[0_0_30px_rgba(217,158,48,0.25)] bg-[#0A160F] z-10 p-2 flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <img 
                      src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400" 
                      alt="Luxury construction details"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A160F]/90" />
                  
                  {/* Real-time Dynamic text in Center of Circle */}
                  <div className="relative z-10 px-4 space-y-2">
                    <p className="text-[9px] tracking-widest text-[#D99E30] uppercase font-bold">Verde Hub</p>
                    <p className="text-[11px] md:text-xs text-stone-200 font-light leading-relaxed">
                      {t.planCenterText}
                    </p>
                  </div>
                </div>

                {/* RADIAL INTERACTIVE NODES (Positioned absolutely around the center) */}
                {[
                  { id: 'cottageA', label: "Тип А (Бизнес)", angle: 0, x: '82%', y: '50%' },
                  { id: 'sports', label: "Спортивный кластер", angle: 60, x: '66%', y: '16%' },
                  { id: 'promenade', label: "Набережная (1.2км)", angle: 120, x: '34%', y: '16%' },
                  { id: 'parking', label: "КПП и Паркинг", angle: 180, x: '18%', y: '50%' },
                  { id: 'cottageB', label: "Тип Б (Премиум)", angle: 240, x: '34%', y: '84%' },
                  { id: 'kidsClub', label: "Детский клуб", angle: 300, x: '66%', y: '84%' },
                ].map((node) => {
                  const isActive = selectedZone === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedZone(node.id)}
                      style={{ left: node.x, top: node.y }}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 flex flex-col items-center group`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isActive 
                          ? 'bg-[#D99E30] text-black border-white shadow-[0_0_20px_rgba(217,158,48,0.5)] scale-125' 
                          : 'bg-[#0E1B12] text-stone-400 border-white/10 group-hover:border-[#D99E30]/50 group-hover:scale-110'
                      }`}>
                        <span className="text-[11px] font-mono font-bold">
                          {node.id === 'cottageA' ? 'A' : node.id === 'cottageB' ? 'B' : node.id === 'sports' ? 'SP' : node.id === 'promenade' ? 'PR' : node.id === 'parking' ? 'PK' : 'KC'}
                        </span>
                      </div>
                      
                      {/* Interactive Pointer Line */}
                      {isActive && (
                        <div className="absolute w-[2px] bg-gradient-to-t from-[#D99E30] to-transparent h-12 bottom-9 pointer-events-none animate-pulse" />
                      )}

                      <span className={`text-[9px] md:text-[10px] tracking-wider uppercase font-medium mt-1.5 px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                        isActive 
                          ? 'bg-[#D99E30]/20 text-[#D99E30] border border-[#D99E30]/30 font-semibold' 
                          : 'bg-black/40 text-stone-300 group-hover:text-white'
                      }`}>
                        {node.label}
                      </span>
                    </button>
                  );
                })}

              </div>

              {/* Dynamic Side Card Describing Selected Area */}
              <div className="lg:col-span-5 space-y-6 z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#D99E30]/10 border border-[#D99E30]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D99E30] animate-pulse" />
                  <span className="text-[10px] tracking-widest text-[#D99E30] font-mono uppercase">Zone Breakdown / Описание зоны</span>
                </div>

                {selectedZone === 'cottageA' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.typeA}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">{t.typeADesc}</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" alt="Cottage Type A" className="w-full h-full object-cover" />
                    </div>
                    <ul className="grid grid-cols-2 gap-3 text-xs text-stone-300 font-light font-mono">
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Площадь: 160-180 м²</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Этажность: 2</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Участок: 8-12 соток</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Каминный зал</span></li>
                    </ul>
                  </div>
                )}

                {selectedZone === 'cottageB' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-[#D99E30]">{t.typeB}</h3>
                    <p className="text-stone-200 font-light text-sm leading-relaxed">{t.typeBDesc}</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" alt="Cottage Type B" className="w-full h-full object-cover" />
                    </div>
                    <ul className="grid grid-cols-2 gap-3 text-xs text-stone-200 font-light font-mono">
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Площадь: 220-250 м²</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Спа-зона & бассейн</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Участок: 12-16 соток</span></li>
                      <li className="flex items-center space-x-1.5"><Check className="w-3.5 h-3.5 text-[#D99E30]" /> <span>Второй свет</span></li>
                    </ul>
                  </div>
                )}

                {selectedZone === 'sports' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.sportsCluster}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Современная спортивная арена под открытым небом с профессиональным полиуретановым покрытием премиум-класса, освещением в темное время суток и зоной уличных тренажеров воркаут.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" alt="Sports Turf" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {selectedZone === 'promenade' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.promenade}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Благоустроенный променад из лиственницы вдоль чистого лесного озера. Пляжная зона с шезлонгами, лодочным причалом и террасами для занятий утренней йогой.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600" alt="Lake Promenade" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {selectedZone === 'kidsClub' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.kidsClub}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Инновационное детское пространство, ориентированное на развитие творческого мышления по системе Монтессори. Детские городки из натурального дерева от ведущих европейских бюро.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600" alt="Kids Playground" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {selectedZone === 'parking' && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold tracking-wide text-white">{t.parking}</h3>
                    <p className="text-stone-300 font-light text-sm leading-relaxed">Безопасность высшего уровня обеспечивается собственной военизированной службой охраны. Автоматизированные КПП с распознаванием номеров, тепловизорами и гостевыми зарядками для электромобилей.</p>
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-[180px]">
                      <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=600" alt="Smart Security" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                <button 
                  onClick={() => setActiveTab('residences')}
                  className="w-full py-3 text-center text-xs tracking-wider uppercase font-semibold bg-white/5 hover:bg-[#D99E30]/10 border border-white/10 hover:border-[#D99E30]/40 text-stone-200 hover:text-[#D99E30] rounded-xl transition-all"
                >
                  Исследовать планировки резиденций
                </button>

              </div>
            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* RESIDENCES / ARCHITECTURES SECTION      */}
        {/* ======================================= */}
        {activeTab === 'residences' && (
          <div className="space-y-12 animate-fade-in">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Home className="w-4 h-4 text-[#D99E30] inline mr-1" />
                <span className="text-[10px] tracking-widest font-mono text-[#D99E30] uppercase">Architectural Range / Каталог</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white uppercase">{t.residencesTitle}</h2>
              <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase">{t.residencesSubtitle}</p>
            </div>

            {/* Cottage Selector Switch */}
            <div className="flex justify-center">
              <div className="inline-flex bg-white/5 p-1.5 rounded-xl border border-white/10">
                <button 
                  onClick={() => setSelectedResidenceTab('A')}
                  className={`px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${selectedResidenceTab === 'A' ? 'bg-[#D99E30] text-black shadow-lg shadow-[#D99E30]/20' : 'text-stone-300 hover:text-white'}`}
                >
                  Type A (Business)
                </button>
                <button 
                  onClick={() => setSelectedResidenceTab('B')}
                  className={`px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${selectedResidenceTab === 'B' ? 'bg-[#D99E30] text-black shadow-lg shadow-[#D99E30]/20' : 'text-stone-300 hover:text-white'}`}
                >
                  Type B (Premium)
                </button>
              </div>
            </div>

            {/* INTERACTIVE VECTOR FLOORPLAN EXPLORER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl items-center">
              
              {/* Floorplan SVG Visualization on Left */}
              <div className="lg:col-span-7 flex flex-col items-center space-y-6">
                <span className="text-xs font-mono tracking-widest text-[#D99E30] uppercase">
                  Interactive Floorplan Layout / Интерактивный интерактивный план (Наведите на зоны)
                </span>
                
                {/* Custom Scalable Vector Floorplan with Hover Highlighting */}
                <div className="relative w-full max-w-[450px] aspect-square bg-black/40 rounded-2xl border border-white/10 p-6 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full text-stone-300">
                    {/* Outline Border of the House */}
                    <rect x="20" y="20" width="360" height="360" rx="16" fill="none" stroke="#D99E30" strokeWidth="2.5" strokeDasharray="6 6" className="opacity-40" />
                    
                    {/* ROOM 1: Panoramic Living Room */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('living')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="40" y="40" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'living' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'living' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="115" y="110" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'living' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Гостиная' : 'Living Room'}
                      </text>
                      <circle cx="115" cy="80" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="115" y="84" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">1</text>
                    </g>

                    {/* ROOM 2: Master Suite / Спальня */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('bedroom')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="210" y="40" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'bedroom' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'bedroom' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="285" y="110" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'bedroom' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Мастер-Спальня' : 'Master Suite'}
                      </text>
                      <circle cx="285" cy="80" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="285" y="84" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">2</text>
                    </g>

                    {/* ROOM 3: Spa Area & Sauna */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('spa')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="40" y="210" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'spa' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'spa' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="115" y="280" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'spa' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Спа-сауна' : 'Spa & Bathhouse'}
                      </text>
                      <circle cx="115" cy="250" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="115" y="254" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">3</text>
                    </g>

                    {/* ROOM 4: Forest-facing Terrace */}
                    <g 
                      onMouseEnter={() => setHoveredRoom('terrace')}
                      onMouseLeave={() => setHoveredRoom(null)}
                      className="cursor-pointer group"
                    >
                      <rect x="210" y="210" width="150" height="150" rx="8" 
                            fill={hoveredRoom === 'terrace' ? 'rgba(217,158,48,0.25)' : 'rgba(255,255,255,0.03)'} 
                            stroke={hoveredRoom === 'terrace' ? '#D99E30' : 'rgba(255,255,255,0.15)'} 
                            strokeWidth="1.5"
                            className="transition-all duration-300" />
                      <text x="285" y="280" textAnchor="middle" className={`text-xs font-sans tracking-wide font-semibold select-none transition-colors ${hoveredRoom === 'terrace' ? 'fill-[#D99E30]' : 'fill-stone-400'}`}>
                        {lang === 'RU' ? 'Лесная Терраса' : 'Forest Terrace'}
                      </text>
                      <circle cx="285" cy="250" r="16" fill="rgba(255,255,255,0.05)" className="group-hover:scale-110 transition-transform" />
                      <text x="285" y="254" textAnchor="middle" fill="#D99E30" className="text-[10px] font-mono">4</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Specification Descriptions on Right */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-wider text-white">
                    {selectedResidenceTab === 'A' ? 'COTTAGE TYPE A' : 'COTTAGE TYPE B'}
                  </h3>
                  <p className="text-xs text-[#D99E30] tracking-widest uppercase font-mono mt-1">
                    {selectedResidenceTab === 'A' ? 'Business Class Base / Бизнес-Линия' : 'Presidential Premium / Премиум-Усадьба'}
                  </p>
                </div>

                {/* Simulated Real-Time Room Explorer details */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between">
                  {hoveredRoom ? (
                    <div className="space-y-3 animate-fade-in">
                      <span className="text-[10px] text-[#D99E30] font-mono tracking-widest uppercase bg-[#D99E30]/10 px-2 py-0.5 rounded">
                        Active Room Explorer / Секция планировки
                      </span>
                      
                      {hoveredRoom === 'living' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Гостиная с Остеклением 360°</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            Площадь составляет 45-55 м². Усиленная стальная рама Schüco обеспечивает панорамный обзор на верхушки соснового леса. Высота потолков варьируется от 3.6 до 4.2 метров. Укомплектован каминным порталом из итальянского мрамора.
                          </p>
                        </>
                      )}

                      {hoveredRoom === 'bedroom' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Мастер-Спальня со Скрытой Гардеробной</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            Площадь 30 м² с персональным выходом в просторный санузел, облицованный натуральным травертином, и автоматизированными шторами-блэкаут.
                          </p>
                        </>
                      )}

                      {hoveredRoom === 'spa' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Индивидуальная Термальная Студия</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            SPA-зона с кедровой финской сауной, купелью с регулируемой температурой и премиальными сенсорными панелями управления влажностью.
                          </p>
                        </>
                      )}

                      {hoveredRoom === 'terrace' && (
                        <>
                          <h4 className="text-lg font-bold text-white">Терраса из Сибирской Лиственницы</h4>
                          <p className="text-xs text-stone-300 font-light leading-relaxed">
                            Просторная палубная терраса с системой обогрева для комфортного круглогодичного отдыха и подготовленным местом для летней кухни-барбекю.
                          </p>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center space-y-3 py-8">
                      <Info className="w-8 h-8 text-[#D99E30] animate-bounce" />
                      <p className="text-xs text-stone-400 font-light max-w-xs leading-relaxed">
                        Наведите курсор мыши на комнаты векторной схемы слева, чтобы изучить архитектурное наполнение и технические опции комнат.
                      </p>
                    </div>
                  )}

                  <div className="border-t border-white/5 pt-4 mt-4 grid grid-cols-2 gap-4 text-xs font-mono text-stone-300">
                    <div>
                      <span className="block text-stone-500 text-[9px] uppercase tracking-wider">Foundation / База</span>
                      <span className="font-semibold text-stone-200">Монолитная плита 400мм</span>
                    </div>
                    <div>
                      <span className="block text-stone-500 text-[9px] uppercase tracking-wider">Insulation / Утепление</span>
                      <span className="font-semibold text-stone-200">Натуральный базальт Rockwool</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => setIsTourModalOpen(true)}
                    className="w-full py-4 bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black hover:shadow-lg hover:shadow-[#D99E30]/20 font-bold text-xs tracking-widest uppercase rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Забронировать очный VIP-показ резиденции</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* YIELD & INVESTMENT CALCULATOR (SLIDE 3) */}
        {/* ======================================= */}
        {activeTab === 'yield' && (
          <div className="space-y-12 animate-fade-in">
            
            {/* Visual Echo of Slide 3 */}
            <div className="relative rounded-3xl overflow-hidden border border-[#D99E30]/30 bg-gradient-to-b from-[#09150E] to-[#040A06] p-8 md:p-12 shadow-2xl space-y-6">
              <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200')`, backgroundSize: 'cover' }} />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white">{t.yieldTitle}</h2>
                  <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase mt-1">{t.yieldSubtitle}</p>
                </div>
                <div className="bg-[#D99E30]/10 border border-[#D99E30]/40 rounded-xl px-4 py-2 flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-[#D99E30]" />
                  <span className="text-xs font-mono tracking-widest text-[#D99E30] font-semibold">ESTATE RETURN MODEL</span>
                </div>
              </div>

              {/* Precise Russian phrases integrated from the original presentation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 pt-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#D99E30] font-mono">Current Context / Контекст</span>
                  <p className="text-sm font-light leading-relaxed text-stone-300">
                    {t.yieldText}
                  </p>
                </div>

                <div className="space-y-2 border-l border-white/10 pl-0 md:pl-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#D99E30] font-mono">Potential Return / Потенциал</span>
                  <p className="text-xs text-stone-400 font-light">{t.yieldGoal}</p>
                  <p className="text-3xl font-black tracking-tight text-white">{t.yieldGoalVal}</p>
                </div>

                <div className="space-y-2 border-l border-white/10 pl-0 md:pl-6 bg-[#D99E30]/5 p-4 rounded-xl border border-[#D99E30]/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#D99E30] font-mono">Guaranteed Yield / Доходность %</span>
                  <p className="text-xs text-stone-400 font-light">{t.yieldPercent}</p>
                  <p className="text-3xl font-black tracking-tight text-[#D99E30]">{t.yieldPercentVal}</p>
                  <p className="text-[9px] text-[#D99E30]/80 tracking-widest uppercase font-mono">{t.yieldBottomText}</p>
                </div>
              </div>
            </div>

            {/* REAL-TIME SIMULATOR CONTROL PANEL */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Sliders Control Panel */}
              <div className="lg:col-span-6 space-y-6 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-[#D99E30]" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{t.calcTitle}</h3>
                </div>

                {/* Slider 1: Property Cost */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider">
                    <span className="text-stone-400 font-light">{t.calcPropertyPrice}</span>
                    <span className="text-white font-mono font-bold">{(propertyPrice).toLocaleString()} ₽</span>
                  </div>
                  <input 
                    type="range" 
                    min="15000000" 
                    max="60000000" 
                    step="500000"
                    value={propertyPrice} 
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-500">
                    <span>15M ₽</span>
                    <span>35M ₽</span>
                    <span>60M ₽</span>
                  </div>
                </div>

                {/* Slider 2: Monthly Rent */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider">
                    <span className="text-stone-400 font-light">{t.calcMonthlyRent}</span>
                    <span className="text-[#D99E30] font-mono font-bold">{(monthlyRent).toLocaleString()} ₽ / мес</span>
                  </div>
                  <input 
                    type="range" 
                    min="120000" 
                    max="450000" 
                    step="5000"
                    value={monthlyRent} 
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    className="w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-500">
                    <span>120k ₽</span>
                    <span>250k ₽</span>
                    <span>450k ₽</span>
                  </div>
                </div>

                {/* Slider 3: Occupancy Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs tracking-wider">
                    <span className="text-stone-400 font-light">{t.calcOccupancy}</span>
                    <span className="text-white font-mono font-bold">{occupancyRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="100" 
                    step="1"
                    value={occupancyRate} 
                    onChange={(e) => setOccupancyRate(Number(e.target.value))}
                    className="w-full accent-[#D99E30] bg-white/5 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-stone-500">
                    <span>50% (Консервативная)</span>
                    <span>80% (Средняя)</span>
                    <span>100% (Максимум)</span>
                  </div>
                </div>

                {/* Secure DB Registration Action */}
                <div className="pt-4 space-y-3">
                  <button 
                    onClick={handleSavePortfolio}
                    className="w-full py-3.5 rounded-xl border border-[#D99E30]/40 hover:border-[#D99E30] bg-[#D99E30]/10 hover:bg-[#D99E30] text-white hover:text-black font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 shadow-xl"
                  >
                    <Check className="w-4 h-4" />
                    <span>{t.savePortfolio}</span>
                  </button>
                  <p className="text-[10px] font-mono text-stone-500 text-center leading-relaxed">
                    *Расчет записывается в прозрачный децентрализованный реестр активности инвесторов Verde Hub.
                  </p>
                </div>
              </div>

              {/* Dynamic Live Output Cards & 10-Year Chart */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Result Statistics Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Result 1: Annual return */}
                  <div className="bg-[#080E0A] border border-white/5 rounded-2xl p-5 text-center">
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block mb-1">{t.calcAnnualIncome}</span>
                    <span className="text-xl font-black text-white">{(annualIncome).toLocaleString()} ₽</span>
                  </div>

                  {/* Result 2: ROI */}
                  <div className="bg-[#0A160F] border border-[#D99E30]/30 rounded-2xl p-5 text-center">
                    <span className="text-[10px] text-[#D99E30] uppercase tracking-widest font-mono block mb-1">{t.calcRoi}</span>
                    <span className="text-2xl font-black text-[#D99E30]">{currentRoi}%</span>
                  </div>

                  {/* Result 3: Payback period */}
                  <div className="bg-[#080E0A] border border-white/5 rounded-2xl p-5 text-center">
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono block mb-1">{t.calcPayback}</span>
                    <span className="text-xl font-black text-white">{paybackPeriod} лет</span>
                  </div>

                </div>

                {/* 10-YEAR CASHFLOW PROGRESSIVE GRAPH (SVG) */}
                <div className="bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 rounded-3xl border border-white/5 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-stone-300 uppercase">
                      10-Year Cumulative Cash Flow Projection / Прогноз за 10 лет (Млн ₽)
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono">
                      Asset Growth + Rent
                    </span>
                  </div>

                  {/* Responsive SVG Chart */}
                  <div className="w-full h-[180px] relative">
                    <svg viewBox="0 0 500 150" className="w-full h-full">
                      {/* Grid Lines */}
                      <line x1="10" y1="130" x2="490" y2="130" stroke="rgba(255,255,255,0.05)" />
                      <line x1="10" y1="90" x2="490" y2="90" stroke="rgba(255,255,255,0.05)" />
                      <line x1="10" y1="50" x2="490" y2="50" stroke="rgba(255,255,255,0.05)" />
                      <line x1="10" y1="10" x2="490" y2="10" stroke="rgba(255,255,255,0.05)" />

                      {/* Line Plot for Rent yield only */}
                      <path 
                        d={`
                          M 10,130 
                          Q 100,${130 - (annualIncome * 2 / 1000000)} 
                            200,${130 - (annualIncome * 4 / 1000000)} 
                            300,${130 - (annualIncome * 6 / 1000000)} 
                            400,${130 - (annualIncome * 8 / 1000000)} 
                            490,${130 - (annualIncome * 10 / 1000000)}
                        `} 
                        fill="none" 
                        stroke="#B07E20" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                      />

                      {/* Line Plot for Asset Appreciation + Rent Yield */}
                      <path 
                        d={`
                          M 10,130 
                          Q 100,${130 - (annualIncome * 2.5 / 1000000)} 
                            200,${130 - (annualIncome * 5.5 / 1000000)} 
                            300,${130 - (annualIncome * 8.8 / 1000000)} 
                            400,${130 - (annualIncome * 12.5 / 1000000)} 
                            490,${130 - (annualIncome * 17.0 / 1000000)}
                        `} 
                        fill="none" 
                        stroke="#D99E30" 
                        strokeWidth="3.5" 
                      />

                      {/* Graph dots */}
                      <circle cx="10" cy="130" r="4" fill="#D99E30" />
                      <circle cx="490" cy={`${130 - (annualIncome * 17.0 / 1000000)}`} r="5" fill="#D99E30" className="animate-pulse" />

                      {/* X-axis Labels */}
                      <text x="10" y="145" fill="#8c8c8c" fontSize="8" fontFamily="monospace">Год 0</text>
                      <text x="250" y="145" fill="#8c8c8c" fontSize="8" fontFamily="monospace" textAnchor="middle">Год 5</text>
                      <text x="490" y="145" fill="#8c8c8c" fontSize="8" fontFamily="monospace" textAnchor="end">Год 10</text>
                    </svg>
                  </div>

                  {/* Legend explanation */}
                  <div className="flex items-center space-x-6 text-[10px] font-mono text-stone-400">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-0.5 bg-[#D99E30]" />
                      <span>Капитализация + Аренда</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-0.5 bg-[#B07E20] border-dashed" />
                      <span>Только арендный поток</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* PORTAL & REGISTRY SYSTEM (ECOSYSTEM)    */}
        {/* ======================================= */}
        {activeTab === 'portal' && (
          <div className="space-y-12 animate-fade-in">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Users className="w-4 h-4 text-[#D99E30] inline mr-1" />
                <span className="text-[10px] tracking-widest font-mono text-[#D99E30] uppercase">Shared Ecosystem Ledger / Общий реестр</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wider text-white uppercase">{t.navPortal}</h2>
              <p className="text-xs tracking-[0.3em] text-[#D99E30] font-light uppercase">{t.smartSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Dynamic Live Registry Feed */}
              <div className="lg:col-span-8 bg-gradient-to-b from-[#09150E] to-[#040A06] p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">{t.recentDeals}</h3>
                  <span className="text-xs font-mono text-[#D99E30]">Live Synchronized Node</span>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {savedInvestments.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-16 space-y-2">
                      <Layers className="w-10 h-10 text-stone-600 animate-pulse" />
                      <p className="text-xs text-stone-500 font-mono">Ожидание входящих транзакций реестра...</p>
                    </div>
                  ) : (
                    savedInvestments.map((item, index) => (
                      <div 
                        key={item.id || index} 
                        className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#D99E30]/30 transition-all duration-300"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] bg-[#D99E30]/20 text-[#D99E30] px-2 py-0.5 rounded font-mono font-semibold">
                            {item.investorLabel || 'Anonymous ID'}
                          </span>
                          <p className="text-xs text-stone-300 font-light mt-1">
                            Valuation: <strong className="text-white">{(item.propertyPrice)?.toLocaleString()} ₽</strong> | Monthly Target: <strong className="text-white">{(item.monthlyRent)?.toLocaleString()} ₽</strong>
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#D99E30] font-mono font-bold block">{item.roi}% ROI</span>
                          <span className="text-[9px] text-stone-500 font-mono">
                            {new Date(item.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Ecosystem Quick Metrics */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Real-time Environmental Dashboard */}
                <div className="bg-[#080E0A] border border-[#D99E30]/20 rounded-3xl p-6 space-y-6">
                  <h3 className="text-sm font-bold tracking-widest text-[#D99E30] uppercase font-mono">ECO-GAUGES</h3>
                  
                  {/* Air sensor */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-400">Forest Air Purity Index</span>
                      <span className="text-emerald-400 font-bold">{Math.round(airQuality)}% Pure</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full transition-all duration-1000" style={{ width: `${airQuality}%` }} />
                    </div>
                  </div>

                  {/* Smart Grid */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-400">Solar Grid Generation</span>
                      <span className="text-amber-400 font-bold">{Math.round(solarYield)}% Capacity</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full transition-all duration-1000" style={{ width: `${solarYield}%` }} />
                    </div>
                  </div>

                  {/* Water system */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-400">Artesian Water Pressure</span>
                      <span className="text-sky-400 font-bold">4.8 Bar (Nominal)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-sky-500 h-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>

                {/* VIP Live Tour Queue */}
                <div className="bg-gradient-to-b from-[#09150E] to-[#040A06] border border-white/5 p-6 rounded-3xl space-y-4">
                  <h3 className="text-sm font-bold tracking-widest text-white uppercase font-mono">{t.reservationsActive}</h3>
                  <div className="space-y-3">
                    {savedTours.slice(-4).map((tour, index) => (
                      <div key={tour.id || index} className="p-3 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <p className="font-semibold text-white">{tour.name}</p>
                          <p className="text-[10px] text-[#D99E30] font-mono tracking-wide uppercase">
                            {tour.method === 'helicopter' ? 'HELI-TRANSFER' : tour.method === 'maybach' ? 'MAYBACH S-CLASS' : 'VIP ENTRY'}
                          </p>
                        </div>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/25">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* ======================================= */}
      {/* PRIVATE VISITS BOOKING MODAL (DIALOG)   */}
      {/* ======================================= */}
      {isTourModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#09150E] border border-[#D99E30]/40 rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl space-y-6">
            
            {/* Close trigger */}
            <button 
              onClick={() => setIsTourModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-2">
              <div className="inline-block p-3 rounded-full bg-[#D99E30]/10 border border-[#D99E30]/20">
                <Calendar className="w-6 h-6 text-[#D99E30] animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold tracking-wide text-white">{t.privateTourTitle}</h3>
              <p className="text-xs text-stone-300 font-light">{t.privateTourDesc}</p>
            </div>

            {formSuccess ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2 animate-scale-up">
                <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white uppercase">{lang === 'RU' ? 'Заявка принята' : 'Registered Successfully'}</h4>
                <p className="text-xs text-stone-300 font-light leading-relaxed">{t.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleBookTour} className="space-y-4">
                
                {/* Method selector options */}
                <div className="space-y-2">
                  <label className="text-[10px] text-[#D99E30] uppercase font-mono tracking-widest block">Транспорт / Transfer format</label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'maybach', label: t.maybach },
                      { id: 'helicopter', label: t.helicopter },
                      { id: 'self', label: t.selfArrival }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setTourMethod(opt.id)}
                        className={`p-3.5 rounded-xl text-xs font-semibold tracking-wider text-left transition-all border ${
                          tourMethod === opt.id 
                            ? 'bg-[#D99E30] text-black border-white shadow-lg' 
                            : 'bg-black/40 text-stone-300 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-stone-400 uppercase font-mono tracking-widest block">{t.fullName}</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Алексей Иванов / Alexei Ivanov"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D99E30] transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-stone-400 uppercase font-mono tracking-widest block">{t.phone}</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D99E30] transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D99E30] to-[#B07E20] text-black font-bold text-xs tracking-widest uppercase transition-all shadow-xl hover:shadow-[#D99E30]/20"
                >
                  {t.submitTour}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#030704] py-12 mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#142A1C] to-[#254F35] border border-[#D99E30]/30 flex items-center justify-center">
                <Trees className="w-4 h-4 text-[#D99E30]" />
              </div>
              <h4 className="text-sm font-bold tracking-[0.2em] text-white">VERDE RESERVE</h4>
            </div>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Закрытый клубный лесной резерват и коттеджный поселок класса De-Luxe на Новорижском направлении.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-mono text-[#D99E30] font-bold">Офис продаж</h5>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Москва, Пресненская наб., 12<br />
              Башня Федерация Восток, 45 этаж
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-mono text-[#D99E30] font-bold">Контакты</h5>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Телефон: <span className="text-white font-semibold">+7 (495) 120-00-99</span><br />
              Почта: info@verdereserve.ru
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[10px] uppercase tracking-widest font-mono text-stone-400 font-bold">Legal / Дисклеймер</h5>
            <p className="text-[9px] text-stone-600 font-light leading-relaxed">
              Любая представленная информация носит ознакомительный характер и не является публичной офертой, определяемой положениями Ст. 437 ГК РФ.
            </p>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
          <span>© 2026 VERDE RESERVE. All rights fully secured.</span>
          <span>Designed with elite architectural code.</span>
        </div>
      </footer>

      {/* TAILWIND & CSS CUSTOM STYLES */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(10px) rotate(15deg);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 35s linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-up {
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(217,158,48,0.3);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(217,158,48,0.6);
        }
      `}</style>

    </div>
  );
}
6
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROFSERVICE — Premium Facility & Property Management Ecosystem</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts: Oswald for ultra-bold condensed headers, Inter for premium system UI text -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Oswald', 'sans-serif'],
                    },
                    colors: {
                        brandDark: '#050505',
                        brandGray: '#12131C',
                        brandAccent: '#FFFFFF',
                        brandMisty: '#8E94A2',
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom scrollbar to keep it sleek and premium */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #050505;
        }
        ::-webkit-scrollbar-thumb {
            background: #242731;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3e4456;
        }

        /* Glassmorphism utility */
        .glass {
            background: rgba(18, 19, 28, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }

        /* Ambient glowing effects */
        .glow-subtle {
            box-shadow: 0 0 40px -10px rgba(255, 255, 255, 0.05);
        }

        /* Inverted text overlay for split-screen hero effect */
        .split-clip-left {
            clip-path: polygon(0 0, var(--split-percent, 50%) 0, var(--split-percent, 50%) 100%, 0 100%);
            transition: clip-path 0.1s ease-out;
        }
        .split-clip-right {
            clip-path: polygon(var(--split-percent, 50%) 0, 100% 0, 100% 100%, var(--split-percent, 50%) 100%);
            transition: clip-path 0.1s ease-out;
        }

        /* Hide focus outlines but maintain keyboard accessibility */
        *:focus-visible {
            outline: 2px solid rgba(255, 255, 255, 0.4);
            outline-offset: 2px;
        }
    </style>
</head>
<body class="bg-brandDark text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">

    <!-- TOP ANNOUNCEMENT BANNER -->
    <div class="w-full bg-white text-black text-xs font-semibold py-2 px-4 tracking-widest text-center flex items-center justify-center gap-2 overflow-hidden z-50 relative">
        <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>SYSTEM OPERATIONAL: ALL 48 MANAGED FACILITIES REPORTING 100% UPTIME</span>
    </div>

    <!-- MAIN NAVBAR -->
    <header class="sticky top-0 w-full border-b border-white/5 bg-brandDark/80 backdrop-blur-md z-40 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Logo -->
            <a href="#" class="flex flex-col items-start group">
                <span class="font-display text-2xl tracking-wider font-bold transition-all duration-300 group-hover:tracking-widest">ПРОФСЕРВИС</span>
                <span class="text-[9px] text-brandMisty tracking-[0.25em] -mt-1 uppercase">PROFSERVICE CO.</span>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
                <a href="#services" class="text-brandMisty hover:text-white transition-colors duration-200">Our Services</a>
                <a href="#dashboard" class="text-brandMisty hover:text-white transition-colors duration-200">Facility Control</a>
                <a href="#calculator" class="text-brandMisty hover:text-white transition-colors duration-200">Quote Engine</a>
                <a href="#advantages" class="text-brandMisty hover:text-white transition-colors duration-200">Why Us</a>
                <a href="#faq" class="text-brandMisty hover:text-white transition-colors duration-200">FAQ</a>
                <a href="#design-system" class="px-2.5 py-1 rounded bg-white/10 text-[10px] text-white hover:bg-white hover:text-black transition-all duration-200">Design Kit</a>
            </nav>

            <!-- CTA / Contact Trigger -->
            <div class="flex items-center gap-4">
                <a href="#contact" class="hidden sm:inline-block border border-white/20 hover:border-white px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 bg-transparent hover:bg-white hover:text-black">
                    Request Audit
                </a>
                
                <!-- Mobile Navigation Trigger -->
                <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-end gap-1.5 w-6 h-6 focus:outline-none" aria-label="Toggle Navigation Menu">
                    <span class="w-6 h-0.5 bg-white transition-transform duration-300" id="m-line-1"></span>
                    <span class="w-4 h-0.5 bg-white transition-opacity duration-300" id="m-line-2"></span>
                    <span class="w-5 h-0.5 bg-white transition-transform duration-300" id="m-line-3"></span>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Panel -->
        <div id="mobile-menu" class="hidden md:hidden fixed top-[81px] left-0 w-full h-[calc(100vh-81px)] bg-brandDark/95 backdrop-blur-xl border-t border-white/5 p-8 flex flex-col justify-between z-40 transition-all duration-300 transform translate-x-full">
            <div class="flex flex-col gap-6 text-lg font-medium tracking-wide">
                <a href="#services" class="mobile-link text-brandMisty hover:text-white py-2 border-b border-white/5">Our Services</a>
                <a href="#dashboard" class="mobile-link text-brandMisty hover:text-white py-2 border-b border-white/5">Facility Control Hub</a>
                <a href="#calculator" class="mobile-link text-brandMisty hover:text-white py-2 border-b border-white/5">Interactive Quote Engine</a>
                <a href="#advantages" class="mobile-link text-brandMisty hover:text-white py-2 border-b border-white/5">Why PROFSERVICE</a>
                <a href="#faq" class="mobile-link text-brandMisty hover:text-white py-2 border-b border-white/5">FAQ Panel</a>
                <a href="#design-system" class="mobile-link text-brandMisty hover:text-white py-2">UI Component Library</a>
            </div>
            <div class="flex flex-col gap-4">
                <a href="#contact" class="mobile-link w-full text-center bg-white text-black py-4 text-xs font-bold tracking-widest uppercase hover:bg-brandMisty transition-colors">
                    Get Free Property Audit
                </a>
                <div class="text-center text-xs text-brandMisty">
                    tg: @helperel &bull; +7 999 852-32-92
                </div>
            </div>
        </div>
    </header>

    <!-- SECTION 1: THE INTERACTIVE CINEMATIC SPLIT HERO -->
    <section class="relative h-[90vh] md:h-screen w-full overflow-hidden select-none" id="hero-split-container">
        <!-- Inside this container, we hold two distinct layout layers that match exactly by coordinates but possess flipped background tones and contrast styles to mimic the dark-and-light-side building perspective in your reference image. -->
        
        <!-- Background Layer A: "The Misty/Light Contrast Side" -->
        <div class="absolute inset-0 w-full h-full bg-[#181a24] text-white split-clip-left" id="hero-left-layer">
            <div class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40" style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80');"></div>
            <!-- Radial gradient simulating cinematic spotlight -->
            <div class="absolute inset-0 bg-gradient-to-r from-brandDark via-transparent to-transparent"></div>
            
            <!-- Real Architectural Core Building visual overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-full max-w-4xl h-full bg-contain bg-no-repeat bg-center opacity-30 transform scale-110" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80');"></div>
            </div>
        </div>

        <!-- Background Layer B: "The Pure Infinite Void Black Side" -->
        <div class="absolute inset-0 w-full h-full bg-brandDark text-white split-clip-right" id="hero-right-layer">
            <div class="absolute inset-0 bg-cover bg-center mix-blend-color-dodge opacity-20" style="background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80');"></div>
            <!-- Real Architectural core building but high contrast inverted -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-full max-w-4xl h-full bg-contain bg-no-repeat bg-center opacity-60 mix-blend-overlay" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80');"></div>
            </div>
        </div>

        <!-- SHARED DYNAMIC CONTENT GRID OVERLAY -->
        <div class="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12 max-w-7xl mx-auto w-full">
            
            <!-- Category top layout markers -->
            <div class="flex justify-between items-center text-[10px] md:text-xs font-semibold tracking-[0.3em] text-brandMisty uppercase pt-4">
                <div class="flex items-center gap-6">
                    <span>ВАША ПРОБЛЕМА</span>
                    <span>НАШЕ РЕШЕНИЕ</span>
                    <span>О КОМПАНИИ</span>
                </div>
                <div class="hidden md:flex items-center gap-6">
                    <span>УСЛУГИ</span>
                    <span>ПРЕИМУЩЕСТВА</span>
                    <span>БЕСПЛАТНЫЙ БОНУС</span>
                </div>
            </div>

            <!-- Huge Central Condensed Title resembling reference slide ПРОФСЕРВИС -->
            <div class="my-auto text-center w-full relative">
                <h1 class="font-display text-[15vw] md:text-[11vw] leading-none font-bold tracking-tighter uppercase pointer-events-auto">
                    ПРОФСЕРВИС
                </h1>
                <p class="text-xs md:text-sm font-semibold tracking-[0.4em] text-brandMisty mt-4 uppercase">
                    INTELLIGENT BUILDING MANAGEMENT &bull; SINCE 2018
                </p>
            </div>

            <!-- Two bottom pillars mirroring the left and right description texts of slide 1 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 text-xs md:text-sm tracking-wide leading-relaxed">
                <div class="max-w-md">
                    <p class="text-white">
                        <span class="text-brandMisty uppercase font-bold block mb-1 tracking-widest">Complete Facility Care:</span>
                        Полное обслуживание объекта без стресса — от инженерии, фасадного альпинизма до регулярной комплексной уборки помещений.
                    </p>
                </div>
                <div class="max-w-md md:text-right md:ml-auto">
                    <p class="text-white">
                        <span class="text-brandMisty uppercase font-bold block mb-1 tracking-widest">Economic Optimization:</span>
                        Экономьте от 10% бюджета на содержание коммерческих площадей, за счет автоматизации процессов и собственного штата клинеров.
                    </p>
                </div>
            </div>

        </div>

        <!-- Center dynamic split line indicator -->
        <div class="absolute inset-y-0 w-px bg-white/20 pointer-events-none z-20" id="hero-split-line" style="left: 50%;">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/20 bg-brandDark/80 backdrop-blur flex items-center justify-center text-[9px] font-mono tracking-widest text-brandMisty animate-pulse">
                ↔
            </div>
        </div>

    </section>

    <!-- SECTION 2: THE INTERACTIVE PROPERTY CARE CONSOL / LIVE DASHBOARD -->
    <section class="py-24 bg-brandDark border-t border-b border-white/5 relative overflow-hidden" id="dashboard">
        <!-- Ambient atmospheric background glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 relative">
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end mb-16">
                <div class="lg:col-span-2">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                        <span class="text-xs font-semibold uppercase tracking-widest text-brandMisty">Digital Twin & Operations</span>
                    </div>
                    <h2 class="text-3xl md:text-5xl font-display font-semibold tracking-tight uppercase leading-none">
                        Live Operations Control Center
                    </h2>
                </div>
                <div class="text-xs md:text-sm text-brandMisty leading-relaxed">
                    We don't just manage buildings on paper. Our partners gain exclusive real-time access to the PROFSERVICE Client Control panel, enabling instant transparency on engineering audits, cleaning rotas, and energy efficiency.
                </div>
            </div>

            <!-- Virtual Smart Building Control Center UI mockup -->
            <div class="w-full rounded-lg border border-white/10 bg-brandDark/40 backdrop-blur-md overflow-hidden shadow-2xl relative">
                <!-- Mac-Style Window header -->
                <div class="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-brandDark/80">
                    <div class="flex items-center gap-2">
                        <div class="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                        <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                        <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></div>
                        <span class="text-xs font-mono text-brandMisty ml-4">admin://profservice.io/dashboard/live_telemetry</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> LIVE REFRESH ACTIVE
                        </span>
                        <span id="dashboard-clock" class="text-xs font-mono text-brandMisty">15:42:01 UTC</span>
                    </div>
                </div>

                <!-- Dashboard Content Area -->
                <div class="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                    
                    <!-- Left Column: Metrics and Interactive Toggles -->
                    <div class="p-6 flex flex-col gap-6 lg:col-span-1">
                        <h3 class="text-xs font-bold tracking-widest text-brandMisty uppercase mb-2">Systems Status</h3>
                        
                        <!-- Toggle Controls -->
                        <div class="flex flex-col gap-4">
                            <!-- Toggle 1 -->
                            <div class="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-white/5">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold">HVAC Climate Grid</span>
                                    <span class="text-[10px] text-brandMisty font-mono" id="hvac-status">Auto (21.5°C)</span>
                                </div>
                                <button onclick="toggleSystem('hvac')" class="w-10 h-5 bg-white rounded-full p-0.5 transition-colors duration-200 focus:outline-none" id="hvac-btn" aria-label="Toggle HVAC Climate System">
                                    <div class="w-4 h-4 bg-black rounded-full transition-transform duration-200 translate-x-5" id="hvac-dot"></div>
                                </button>
                            </div>

                            <!-- Toggle 2 -->
                            <div class="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-white/5">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold">Industrial Rope Access</span>
                                    <span class="text-[10px] text-brandMisty font-mono" id="rope-status">Active Shift</span>
                                </div>
                                <button onclick="toggleSystem('rope')" class="w-10 h-5 bg-white rounded-full p-0.5 transition-colors duration-200 focus:outline-none" id="rope-btn" aria-label="Toggle Industrial Rope Access System">
                                    <div class="w-4 h-4 bg-black rounded-full transition-transform duration-200 translate-x-5" id="rope-dot"></div>
                                </button>
                            </div>

                            <!-- Toggle 3 -->
                            <div class="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-white/5">
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold">Access Security Lock</span>
                                    <span class="text-[10px] text-brandMisty font-mono" id="security-status">Secure (Biometric)</span>
                                </div>
                                <button onclick="toggleSystem('security')" class="w-10 h-5 bg-white rounded-full p-0.5 transition-colors duration-200 focus:outline-none" id="security-btn" aria-label="Toggle Access Security Lock System">
                                    <div class="w-4 h-4 bg-black rounded-full transition-transform duration-200 translate-x-5" id="security-dot"></div>
                                </button>
                            </div>
                        </div>

                        <!-- Real-time dynamic occupancy slider -->
                        <div class="mt-4">
                            <div class="flex justify-between text-[11px] mb-2 font-mono">
                                <span class="text-brandMisty">Occupancy Density</span>
                                <span id="occupancy-val" class="font-bold">65%</span>
                            </div>
                            <input type="range" min="10" max="100" value="65" id="occupancy-slider" class="w-full accent-white bg-white/10 rounded-lg appearance-none h-1 cursor-pointer" aria-label="Adjust Simulated Occupancy Density">
                        </div>
                    </div>

                    <!-- Middle Column (Col-span 2): Real-time graph simulation & Interactive Map -->
                    <div class="p-6 lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-xs font-bold tracking-widest text-brandMisty uppercase">Energy Consumption / Efficiency Log</h3>
                                <span class="text-xs font-mono text-emerald-400">-12.4% vs last week</span>
                            </div>
                            
                            <!-- SVG Animated Telemetry Graph -->
                            <div class="relative w-full h-48 bg-brandDark/80 border border-white/5 rounded p-4 overflow-hidden flex items-end">
                                <div class="absolute inset-0 grid grid-rows-4 grid-cols-6 divide-y divide-x divide-white/[0.02] pointer-events-none">
                                    <div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div>
                                    <div></div><div></div><div></div><div></div><div></div><div></div>
                                </div>
                                <svg class="w-full h-full absolute inset-0" viewBox="0 0 400 150" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.15"></stop>
                                            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.00"></stop>
                                        </linearGradient>
                                    </defs>
                                    <!-- Animated pulse lines using pure SVG paths -->
                                    <path id="graph-path-bg" d="M0,130 Q30,110 60,115 T120,80 T180,95 T240,60 T300,75 T360,40 T400,30 L400,150 L0,150 Z" fill="url(#chart-grad)"></path>
                                    <path id="graph-path" d="M0,130 Q30,110 60,115 T120,80 T180,95 T240,60 T300,75 T360,40 T400,30" fill="none" stroke="#FFFFFF" stroke-width="2" class="transition-all duration-300"></path>
                                    <circle cx="400" cy="30" r="4" fill="#FFFFFF" class="animate-ping"></circle>
                                </svg>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-4 mt-6 text-center">
                            <div class="p-3 bg-white/[0.01] border border-white/5 rounded">
                                <span class="text-[10px] text-brandMisty font-mono uppercase block">Active Cleaners</span>
                                <span class="text-xl font-display font-bold">14 / 20</span>
                            </div>
                            <div class="p-3 bg-white/[0.01] border border-white/5 rounded">
                                <span class="text-[10px] text-brandMisty font-mono uppercase block">Water Reserve</span>
                                <span class="text-xl font-display font-bold">98.2%</span>
                            </div>
                            <div class="p-3 bg-white/[0.01] border border-white/5 rounded">
                                <span class="text-[10px] text-brandMisty font-mono uppercase block">Co2 Level</span>
                                <span class="text-xl font-display font-bold">410 ppm</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Live Terminal Events Feed -->
                    <div class="p-6 lg:col-span-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xs font-bold tracking-widest text-brandMisty uppercase mb-4">Operations Feed</h3>
                            <div class="flex flex-col gap-3 font-mono text-[10px] max-h-48 overflow-y-auto" id="terminal-feed">
                                <!-- Dynamically added messages -->
                                <div class="text-white/40"><span class="text-white">[15:39:12]</span> Building HVAC normalized.</div>
                                <div class="text-white/40"><span class="text-white">[15:40:05]</span> Rota scheduled for facade washing.</div>
                                <div class="text-white/40"><span class="text-white">[15:41:44]</span> Water telemetry OK.</div>
                            </div>
                        </div>
                        
                        <div class="pt-4 border-t border-white/5">
                            <button onclick="simulateTelemetryTrigger()" class="w-full text-center py-2.5 text-[10px] font-bold tracking-wider uppercase border border-white/10 hover:bg-white hover:text-black transition-all">
                                Force Audit Update
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <!-- SECTION 3: THE CORE SERVICES GRID (Bento Style with Premium Hover Overlay) -->
    <section class="py-24 bg-brandDark" id="services">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                        <span class="text-xs font-semibold uppercase tracking-widest text-brandMisty">Comprehensive Capabilities</span>
                    </div>
                    <h2 class="text-4xl md:text-6xl font-display font-semibold tracking-tight uppercase leading-none">
                        All-In-One Upkeep
                    </h2>
                </div>
                <div class="max-w-md text-sm text-brandMisty">
                    From premium indoor detailing and standard cleanings, to structural engineering and complex rope access window cleaning — we manage it under one single transparent contract.
                </div>
            </div>

            <!-- Bento Service Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <!-- Card 1: Indoor Cleaning (Double Width) -->
                <div class="md:col-span-2 rounded-lg border border-white/10 bg-brandDark/50 overflow-hidden relative group h-96 flex flex-col justify-end p-8">
                    <!-- Background Unsplash image with extreme contrast filter -->
                    <div class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none" style="background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brandDark via-brandDark/20 to-transparent pointer-events-none"></div>

                    <!-- Top tag -->
                    <span class="absolute top-8 left-8 text-[10px] font-semibold tracking-widest bg-white/10 text-white px-3 py-1 rounded uppercase">
                        Premium Cleaning
                    </span>

                    <div class="relative z-10 max-w-lg">
                        <h3 class="text-2xl md:text-3xl font-display font-bold uppercase mb-2">Уборка помещений / Interior Detailing</h3>
                        <p class="text-xs md:text-sm text-brandMisty leading-relaxed">
                            Complete daily cleaning, premium floor restorations, glass facade detailing, sanitization of server rooms, and technical office deep-cleaning schedules.
                        </p>
                    </div>
                </div>

                <!-- Card 2: Rope Access Climbing -->
                <div class="rounded-lg border border-white/10 bg-brandDark/50 overflow-hidden relative group h-96 flex flex-col justify-end p-8">
                    <div class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-25 group-hover:scale-105 transition-transform duration-700 pointer-events-none" style="background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brandDark via-brandDark/20 to-transparent pointer-events-none"></div>

                    <span class="absolute top-8 left-8 text-[10px] font-semibold tracking-widest bg-white/10 text-white px-3 py-1 rounded uppercase">
                        High Elevation
                    </span>

                    <div class="relative z-10">
                        <h3 class="text-2xl font-display font-bold uppercase mb-2">Промышленный альпинизм</h3>
                        <p class="text-xs text-brandMisty leading-relaxed">
                            Elite structural inspection, high-rise window washing, and architectural integrity checks via certified industrial climbers.
                        </p>
                    </div>
                </div>

                <!-- Card 3: Engineering Maintenance -->
                <div class="rounded-lg border border-white/10 bg-brandDark/50 overflow-hidden relative group h-96 flex flex-col justify-end p-8">
                    <div class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brandDark via-brandDark/20 to-transparent pointer-events-none"></div>

                    <span class="absolute top-8 left-8 text-[10px] font-semibold tracking-widest bg-white/10 text-white px-3 py-1 rounded uppercase">
                        Engineering
                    </span>

                    <div class="relative z-10">
                        <h3 class="text-2xl font-display font-bold uppercase mb-2">Технический аудит</h3>
                        <p class="text-xs text-brandMisty leading-relaxed">
                            Full mechanical & climate audits, electrical panel maintenance, grid load balancing, and immediate 24/7 technical breakdown relief.
                        </p>
                    </div>
                </div>

                <!-- Card 4: Territory Landscape Management (Double Width) -->
                <div class="md:col-span-2 rounded-lg border border-white/10 bg-brandDark/50 overflow-hidden relative group h-96 flex flex-col justify-end p-8">
                    <div class="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none" style="background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-brandDark via-brandDark/20 to-transparent pointer-events-none"></div>

                    <span class="absolute top-8 left-8 text-[10px] font-semibold tracking-widest bg-white/10 text-white px-3 py-1 rounded uppercase">
                        Territory Upkeep
                    </span>

                    <div class="relative z-10 max-w-lg">
                        <h3 class="text-2xl md:text-3xl font-display font-bold uppercase mb-2">Уборка территории / Grounds Care</h3>
                        <p class="text-xs md:text-sm text-brandMisty leading-relaxed">
                            Outdoor security sweeping, snow cleaning, asphalt washdowns, exterior seasonal decoration, and systematic landscape maintenance schedules.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 4: INTERACTIVE SERVICE CALCULATOR / QUOTE ENGINE -->
    <section class="py-24 bg-[#0a0b0e] border-t border-b border-white/5" id="calculator">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-xs font-semibold uppercase tracking-widest text-brandMisty">Instant Cost Predictor</span>
                <h2 class="text-3xl md:text-5xl font-display font-semibold uppercase tracking-tight mt-2">
                    Build Your Custom Maintenance Rota
                </h2>
                <p class="text-sm text-brandMisty mt-4">
                    Instantly estimate your budget optimization. Drag the properties, choose scope layers, and view transparent commercial rates.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- Calculator Settings (Left Side) -->
                <div class="lg:col-span-7 bg-brandDark border border-white/10 rounded-lg p-6 md:p-8 space-y-8">
                    
                    <!-- Setting 1: Facility Type Selection -->
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-widest text-brandMisty mb-4">1. Facility Category</label>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <button onclick="selectFacilityType('office', 1.0)" class="fac-btn py-3 px-2 border border-white text-xs font-bold uppercase text-center bg-white text-black transition-all" id="fac-office">
                                Office Center
                            </button>
                            <button onclick="selectFacilityType('warehouse', 0.8)" class="fac-btn py-3 px-2 border border-white/10 text-xs font-bold uppercase text-center text-brandMisty hover:border-white transition-all" id="fac-warehouse">
                                Warehouse
                            </button>
                            <button onclick="selectFacilityType('residential', 1.1)" class="fac-btn py-3 px-2 border border-white/10 text-xs font-bold uppercase text-center text-brandMisty hover:border-white transition-all" id="fac-residential">
                                Residential
                            </button>
                            <button onclick="selectFacilityType('retail', 1.2)" class="fac-btn py-3 px-2 border border-white/10 text-xs font-bold uppercase text-center text-brandMisty hover:border-white transition-all" id="fac-retail">
                                Retail Hub
                            </button>
                        </div>
                    </div>

                    <!-- Setting 2: Slider for Size / Square Footage -->
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label class="block text-xs font-bold uppercase tracking-widest text-brandMisty">2. Total Area Size</label>
                            <span class="text-lg font-mono font-bold" id="area-display">5,000 sqm</span>
                        </div>
                        <input type="range" min="500" max="50000" step="500" value="5000" id="area-slider" oninput="updateCalculatorEstimate()" class="w-full accent-white bg-white/10 rounded-lg appearance-none h-1 cursor-pointer" aria-label="Facility Area Size">
                        <div class="flex justify-between text-[10px] text-brandMisty font-mono mt-2">
                            <span>500 sqm</span>
                            <span>25,000 sqm</span>
                            <span>50,000 sqm</span>
                        </div>
                    </div>

                    <!-- Setting 3: Scope Toggles -->
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-widest text-brandMisty mb-4">3. Included Services</label>
                        <div class="space-y-3">
                            <!-- Clean Row 1 -->
                            <div class="flex items-center justify-between p-3 border border-white/5 rounded hover:border-white/20 transition-all bg-white/[0.01]">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" checked id="srv-detailing" onchange="updateCalculatorEstimate()" class="w-4 h-4 accent-black bg-brandDark border-white/10 rounded" aria-label="Include Interior Cleaning Services">
                                    <span class="text-sm font-semibold">Regular Cleaning & Detailing</span>
                                </div>
                                <span class="text-xs font-mono text-brandMisty">+$0.50/sqm</span>
                            </div>
                            <!-- Clean Row 2 -->
                            <div class="flex items-center justify-between p-3 border border-white/5 rounded hover:border-white/20 transition-all bg-white/[0.01]">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" checked id="srv-engineering" onchange="updateCalculatorEstimate()" class="w-4 h-4 accent-black bg-brandDark border-white/10 rounded" aria-label="Include Engineering Support Services">
                                    <span class="text-sm font-semibold">Continuous Engineering Support</span>
                                </div>
                                <span class="text-xs font-mono text-brandMisty">+$0.80/sqm</span>
                            </div>
                            <!-- Clean Row 3 -->
                            <div class="flex items-center justify-between p-3 border border-white/5 rounded hover:border-white/20 transition-all bg-white/[0.01]">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" id="srv-climbing" onchange="updateCalculatorEstimate()" class="w-4 h-4 accent-black bg-brandDark border-white/10 rounded" aria-label="Include Facade Climbing & Window Washing Services">
                                    <span class="text-sm font-semibold">Industrial Climber Window Washing</span>
                                </div>
                                <span class="text-xs font-mono text-brandMisty">+$0.35/sqm</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Calculator Output (Right Side Breakdown) -->
                <div class="lg:col-span-5 bg-brandDark border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between h-full relative">
                    <!-- Subtle watermark -->
                    <div class="absolute right-6 top-6 text-xs text-brandMisty font-mono uppercase tracking-[0.2em] opacity-30">PROJECTION</div>

                    <div>
                        <h3 class="text-xs font-bold uppercase tracking-widest text-brandMisty mb-6">Commercial Estimate</h3>
                        
                        <div class="space-y-4 pb-6 border-b border-white/10">
                            <div class="flex justify-between text-sm">
                                <span class="text-brandMisty">Base Operations Fee:</span>
                                <span class="font-mono text-white" id="calc-base-fee">$2,500</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="text-brandMisty">Selected Services:</span>
                                <span class="font-mono text-white" id="calc-service-fee">$6,500</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="text-brandMisty">Est. Direct Optimization:</span>
                                <span class="font-mono text-emerald-400" id="calc-saving">- $900</span>
                            </div>
                        </div>

                        <!-- Big Number -->
                        <div class="py-8 text-center lg:text-left">
                            <span class="text-xs text-brandMisty uppercase tracking-widest font-bold">Estimated Monthly Investment</span>
                            <div class="text-5xl md:text-6xl font-display font-bold mt-2 text-white">
                                <span id="calc-total">$8,100</span><span class="text-lg text-brandMisty font-sans font-normal">/mo</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <a href="#contact" onclick="populateContactAuditForm()" class="block w-full text-center py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-brandMisty transition-colors">
                            Lock In This Estimate
                        </a>
                        <p class="text-[10px] text-brandMisty text-center">
                            *This estimate is calculated based on seasonal averages and custom contractor grids. Actual operational audits may lower costs.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 5: ADVANTAGES / PROCESS TIMELINE (Mirroring slide 5 timeline layout) -->
    <section class="py-24 bg-brandDark relative" id="advantages">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-20">
                <span class="text-xs font-semibold uppercase tracking-widest text-brandMisty font-mono">Integrated Onboarding</span>
                <h2 class="text-3xl md:text-5xl font-display font-semibold uppercase tracking-tight mt-2">
                    Our 5-Step Transition Map
                </h2>
                <p class="text-sm text-brandMisty mt-4">
                    Мы предлагаем вам сэкономить время, деньги и нервы. Our optimized onboarding ensures immediate zero-stress management.
                </p>
            </div>

            <!-- Numbered Steps Grid mimicking Slide 5 exactly -->
            <div class="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10">
                
                <!-- Step 01 -->
                <div class="p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.01] transition-all duration-300">
                    <div>
                        <div class="text-xs font-bold tracking-[0.25em] text-brandMisty font-mono uppercase mb-4">01</div>
                        <h3 class="text-lg font-display uppercase font-bold mb-2">Detailed Site Audit</h3>
                    </div>
                    <p class="text-xs text-brandMisty leading-relaxed mt-4">
                        We visit your commercial structure to audit physical wear of climate ducts, facades, and utility rooms.
                    </p>
                </div>

                <!-- Step 02 -->
                <div class="p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.01] transition-all duration-300">
                    <div>
                        <div class="text-xs font-bold tracking-[0.25em] text-brandMisty font-mono uppercase mb-4">02</div>
                        <h3 class="text-lg font-display uppercase font-bold mb-2">Custom SLA Protocol</h3>
                    </div>
                    <p class="text-xs text-brandMisty leading-relaxed mt-4">
                        Our experts design customized Service Level Agreements matching density metrics to your actual daily traffic.
                    </p>
                </div>

                <!-- Step 03 -->
                <div class="p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.01] transition-all duration-300">
                    <div>
                        <div class="text-xs font-bold tracking-[0.25em] text-brandMisty font-mono uppercase mb-4">03</div>
                        <h3 class="text-lg font-display uppercase font-bold mb-2">Staff Allocation</h3>
                    </div>
                    <p class="text-xs text-brandMisty leading-relaxed mt-4">
                        We assign experienced cleaning teams and certified industrial climbers, handling all official training and equipment.
                    </p>
                </div>

                <!-- Step 04 -->
                <div class="p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.01] transition-all duration-300">
                    <div>
                        <div class="text-xs font-bold tracking-[0.25em] text-brandMisty font-mono uppercase mb-4">04</div>
                        <h3 class="text-lg font-display uppercase font-bold mb-2">Live Integration</h3>
                    </div>
                    <p class="text-xs text-brandMisty leading-relaxed mt-4">
                        We deploy custom telemetry trackers, connect building nodes to the live terminal, and optimize climate controls.
                    </p>
                </div>

                <!-- Step 05 -->
                <div class="p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.01] transition-all duration-300">
                    <div>
                        <div class="text-xs font-bold tracking-[0.25em] text-brandMisty font-mono uppercase mb-4">05</div>
                        <h3 class="text-lg font-display uppercase font-bold mb-2">Continuous Auditing</h3>
                    </div>
                    <p class="text-xs text-brandMisty leading-relaxed mt-4">
                        Monthly efficiency reports confirm carbon reduction, optimized floor life, and budget savings over 10%.
                    </p>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 6: THE DETAILED DESIGN SYSTEM PLAYGROUND (Framer / Stripe style complete kit) -->
    <section class="py-24 bg-[#07080a] border-t border-b border-white/5" id="design-system">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                    <span class="text-xs font-semibold uppercase tracking-widest text-brandMisty font-mono">Handcrafted Architecture</span>
                    <h2 class="text-3xl md:text-5xl font-display font-semibold uppercase tracking-tight mt-2">
                        System UI Component Library
                    </h2>
                    <p class="text-xs text-brandMisty mt-2">
                        PROFSERVICE relies on high-end structural design patterns. Preview our design tokens and production-ready component code.
                    </p>
                </div>
                
                <!-- Tab controller buttons for design system layout -->
                <div class="flex items-center gap-2 border border-white/10 rounded-lg p-1 bg-brandDark">
                    <button onclick="switchDesignTab('colors')" class="ds-tab-btn px-4 py-2 text-xs font-semibold rounded bg-white text-black transition-all" id="ds-tab-colors">Tokens</button>
                    <button onclick="switchDesignTab('components')" class="ds-tab-btn px-4 py-2 text-xs font-semibold rounded text-brandMisty hover:text-white transition-all" id="ds-tab-components">Buttons & Forms</button>
                    <button onclick="switchDesignTab('feedback')" class="ds-tab-btn px-4 py-2 text-xs font-semibold rounded text-brandMisty hover:text-white transition-all" id="ds-tab-feedback">Status Badges</button>
                </div>
            </div>

            <!-- CONTAINER FOR PLAYGROUND CONTENT -->
            <div class="border border-white/10 bg-brandDark/40 rounded-lg p-8 glow-subtle">
                
                <!-- SUB-PANEL: COLORS & TYPOGRAPHY TOKENS -->
                <div id="ds-panel-colors" class="ds-panel space-y-12">
                    <div>
                        <h3 class="text-sm font-bold tracking-widest uppercase text-brandMisty mb-4">Core Palette</h3>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div class="p-4 border border-white/10 bg-brandDark rounded flex flex-col justify-between h-32">
                                <span class="font-mono text-xs">Void Black (#050505)</span>
                                <span class="text-[10px] text-brandMisty">Main body background</span>
                            </div>
                            <div class="p-4 border border-white/10 bg-[#12131C] rounded flex flex-col justify-between h-32">
                                <span class="font-mono text-xs">Slate Gray (#12131C)</span>
                                <span class="text-[10px] text-brandMisty">Panels & Interactive modules</span>
                            </div>
                            <div class="p-4 border border-white/10 bg-[#8E94A2] rounded flex flex-col justify-between h-32 text-black">
                                <span class="font-mono text-xs">Misty Gray (#8E94A2)</span>
                                <span class="text-[10px] text-black/70">Subtle titles and text</span>
                            </div>
                            <div class="p-4 border border-white/10 bg-white rounded flex flex-col justify-between h-32 text-black">
                                <span class="font-mono text-xs">High Contrast (#FFFFFF)</span>
                                <span class="text-[10px] text-black/70">Primary text & main links</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-bold tracking-widest uppercase text-brandMisty mb-4">Typography Scaling</h3>
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-white/5 pb-4">
                                <span class="text-xs text-brandMisty font-mono">Display Massive (Oswald Bold)</span>
                                <span class="font-display text-4xl uppercase tracking-wider">ПРОФСЕРВИС SYSTEM</span>
                            </div>
                            <div class="flex items-center justify-between border-b border-white/5 pb-4">
                                <span class="text-xs text-brandMisty font-mono">Heading Primary (Oswald Semibold)</span>
                                <span class="font-display text-2xl uppercase">RELIABLE PROPERTY MANAGEMENT</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-xs text-brandMisty font-mono">Body Readability (Inter Regular)</span>
                                <span class="text-sm max-w-xl text-right text-brandMisty">Our staff works according to advanced safety protocols, guaranteeing immediate, stress-free facility care.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SUB-PANEL: BUTTONS & INPUT FIELDS -->
                <div id="ds-panel-components" class="ds-panel hidden space-y-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <!-- Buttons column -->
                        <div>
                            <h3 class="text-sm font-bold tracking-widest uppercase text-brandMisty mb-6">Interactive Action Triggers</h3>
                            <div class="space-y-4">
                                <div>
                                    <button class="w-full py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-brandMisty transition-colors">
                                        Primary Solid Button
                                    </button>
                                </div>
                                <div>
                                    <button class="w-full py-4 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:border-white transition-colors bg-transparent">
                                        Secondary Border Button
                                    </button>
                                </div>
                                <div>
                                    <button class="w-full py-4 bg-white/5 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                        <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Interactive Loading Trigger
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Form Field column -->
                        <div>
                            <h3 class="text-sm font-bold tracking-widest uppercase text-brandMisty mb-6">Forms & Secure Inputs</h3>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-xs text-brandMisty font-bold uppercase tracking-wider mb-2">Input Label Name</label>
                                    <input type="text" placeholder="Enter commercial address" class="w-full bg-[#12131C] border border-white/10 focus:border-white px-4 py-3 rounded text-sm text-white focus:outline-none transition-colors">
                                </div>
                                <div>
                                    <label class="block text-xs text-brandMisty font-bold uppercase tracking-wider mb-2">Selection Trigger Dropdown</label>
                                    <select class="w-full bg-[#12131C] border border-white/10 focus:border-white px-4 py-3 rounded text-sm text-white focus:outline-none transition-colors">
                                        <option>Monthly Comprehensive Rota</option>
                                        <option>Bi-Weekly Light Rota</option>
                                        <option>One-Time Deep Cleaning Rota</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SUB-PANEL: FEEDBACKS, BADGES & NOTIFICATIONS -->
                <div id="ds-panel-feedback" class="ds-panel hidden space-y-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                        <!-- Badges -->
                        <div>
                            <h3 class="text-sm font-bold tracking-widest uppercase text-brandMisty mb-6">Status Indicator Badges</h3>
                            <div class="flex flex-wrap gap-4">
                                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Active Facility Care
                                </span>
                                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-yellow-500/10 text-yellow-400 text-xs font-mono">
                                    <span class="w-2 h-2 rounded-full bg-yellow-500"></span> Audit Review Pending
                                </span>
                                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rose-500/10 text-rose-400 text-xs font-mono">
                                    <span class="w-2 h-2 rounded-full bg-rose-500"></span> High Priority Action
                                </span>
                            </div>
                        </div>

                        <!-- Instant Action Notification Demo -->
                        <div>
                            <h3 class="text-sm font-bold tracking-widest uppercase text-brandMisty mb-6">Toast Notification Sandbox</h3>
                            <button onclick="triggerNotification('Facility data sync successfully executed.')" class="w-full py-3.5 border border-white/20 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                                Fire Success Toast Message
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 7: DETAILED FREQUENT QUESTIONS PANEL (Accordions) -->
    <section class="py-24 bg-brandDark" id="faq">
        <div class="max-w-4xl mx-auto px-6">
            
            <div class="text-center mb-16">
                <span class="text-xs font-semibold uppercase tracking-widest text-brandMisty font-mono">Client Inquiries</span>
                <h2 class="text-3xl md:text-5xl font-display font-semibold uppercase tracking-tight mt-2">
                    Frequently Asked Questions
                </h2>
            </div>

            <div class="space-y-4">
                
                <!-- Accordion Row 1 -->
                <div class="border-b border-white/10 pb-4">
                    <button onclick="toggleFAQ(1)" class="w-full flex justify-between items-center py-4 text-left font-display text-lg uppercase font-bold text-white hover:text-brandMisty transition-colors" aria-expanded="false" aria-controls="faq-content-1">
                        <span>How is the 10% commercial savings guaranteed?</span>
                        <span class="text-xl font-mono text-brandMisty transition-transform duration-300" id="faq-icon-1">+</span>
                    </button>
                    <div class="hidden transition-all duration-300 pr-12 text-sm text-brandMisty leading-relaxed" id="faq-content-1" role="region">
                        Because we operate our own full-time, certified crew of cleaners, industrial climbers, and certified mechanics, we do not outsource. This cuts double-contract margins by approximately 12-15% directly on operational personnel costs.
                    </div>
                </div>

                <!-- Accordion Row 2 -->
                <div class="border-b border-white/10 pb-4">
                    <button onclick="toggleFAQ(2)" class="w-full flex justify-between items-center py-4 text-left font-display text-lg uppercase font-bold text-white hover:text-brandMisty transition-colors" aria-expanded="false" aria-controls="faq-content-2">
                        <span>Do your staff possess industrial certification?</span>
                        <span class="text-xl font-mono text-brandMisty transition-transform duration-300" id="faq-icon-2">+</span>
                    </button>
                    <div class="hidden transition-all duration-300 pr-12 text-sm text-brandMisty leading-relaxed" id="faq-content-2" role="region">
                        Absolutely. All climbers are fully IRATA (rope access) certified. Our HVAC and technical electrical engineers are state-licensed and bonded to handle complex server-room power arrays and standard climate grids.
                    </div>
                </div>

                <!-- Accordion Row 3 -->
                <div class="border-b border-white/10 pb-4">
                    <button onclick="toggleFAQ(3)" class="w-full flex justify-between items-center py-4 text-left font-display text-lg uppercase font-bold text-white hover:text-brandMisty transition-colors" aria-expanded="false" aria-controls="faq-content-3">
                        <span>What happens if an unexpected utility error occurs?</span>
                        <span class="text-xl font-mono text-brandMisty transition-transform duration-300" id="faq-icon-3">+</span>
                    </button>
                    <div class="hidden transition-all duration-300 pr-12 text-sm text-brandMisty leading-relaxed" id="faq-content-3" role="region">
                        We deploy custom mechanical monitors linked straight to our Live Control Center. If telemetry indicators slide outside optimal metrics, a localized maintenance team is dispatched automatically, guaranteeing relief in under 35 minutes.
                    </div>
                </div>

            </div>

        </div>
    </section>

    <!-- SECTION 8: CONTACT TERMINAL & BOOKING REQUEST (Including feedback) -->
    <section class="py-24 bg-[#0a0b0e] border-t border-white/5 relative" id="contact">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                <!-- Info Column mimicking visual details of Slide 2 -->
                <div class="space-y-8">
                    <div>
                        <span class="text-xs font-semibold uppercase tracking-widest text-brandMisty font-mono">Get in Touch</span>
                        <h2 class="text-4xl md:text-6xl font-display font-semibold uppercase tracking-tight leading-none mt-2">
                            Secure Your Property Integrity
                        </h2>
                        <p class="text-sm text-brandMisty mt-6 leading-relaxed">
                            Передайте все заботы по содержанию объекта в надежные руки одной компании. Our consultants will perform an audit of your facility free of charge.
                        </p>
                    </div>

                    <!-- Contact Details styled with high contrast styling of slide 2 -->
                    <div class="space-y-4 pt-6 border-t border-white/10">
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <span class="text-[10px] text-brandMisty uppercase tracking-widest block font-bold mb-1">WhatsApp / Telegram / Phone</span>
                                <span class="text-sm font-semibold tracking-wide text-white">+7 999 852-32-92</span>
                            </div>
                            <div>
                                <span class="text-[10px] text-brandMisty uppercase tracking-widest block font-bold mb-1">Telegram Handle</span>
                                <a href="https://t.me/helperel" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold tracking-wide text-white hover:underline">@helperel</a>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-6 pt-4">
                            <div>
                                <span class="text-[10px] text-brandMisty uppercase tracking-widest block font-bold mb-1">Corporate Dispatch</span>
                                <span class="text-sm font-semibold tracking-wide text-white">director@profservice.moscow</span>
                            </div>
                            <div>
                                <span class="text-[10px] text-brandMisty uppercase tracking-widest block font-bold mb-1">Tender Division</span>
                                <span class="text-sm font-semibold tracking-wide text-white">tender@profservice.moscow</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Live Client Submission Terminal (Form) -->
                <div class="bg-brandDark border border-white/10 rounded-lg p-6 md:p-8">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-brandMisty mb-6">Interactive Request form</h3>
                    
                    <form onsubmit="handleContactSubmit(event)" class="space-y-4">
                        
                        <div>
                            <label for="contact-name" class="block text-[10px] text-brandMisty font-bold uppercase tracking-widest mb-2">Corporate Client Name</label>
                            <input type="text" id="contact-name" placeholder="John Doe / Managing Partner" required class="w-full bg-[#12131C] border border-white/10 focus:border-white px-4 py-3 rounded text-sm text-white focus:outline-none transition-colors">
                        </div>

                        <div>
                            <label for="contact-email" class="block text-[10px] text-brandMisty font-bold uppercase tracking-widest mb-2">Corporate Email Address</label>
                            <input type="email" id="contact-email" placeholder="john@corporation.com" required class="w-full bg-[#12131C] border border-white/10 focus:border-white px-4 py-3 rounded text-sm text-white focus:outline-none transition-colors">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="contact-phone" class="block text-[10px] text-brandMisty font-bold uppercase tracking-widest mb-2">Primary Phone</label>
                                <input type="text" id="contact-phone" placeholder="+7 999 000-00-00" required class="w-full bg-[#12131C] border border-white/10 focus:border-white px-4 py-3 rounded text-sm text-white focus:outline-none transition-colors">
                            </div>
                            <div>
                                <label for="contact-service" class="block text-[10px] text-brandMisty font-bold uppercase tracking-widest mb-2">Primary Service Layer</label>
                                <select id="contact-service" class="w-full bg-[#12131C] border border-white/10 focus:border-white px-4 py-3 rounded text-sm text-white focus:outline-none transition-colors">
                                    <option value="complete">Complete Integrated Care</option>
                                    <option value="cleaning">Regular Premium Cleaning</option>
                                    <option value="rope">Industrial Rope Access</option>
                                    <option value="engineering">Mechanical Engineering Audit</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="contact-details" class="block text-[10px] text-brandMisty font-bold uppercase tracking-widest mb-2">Optional Project Description / Projected Size</label>
                            <textarea id="contact-details" rows="3" placeholder="e.g. 5,500 sqm commercial workspace in Moscow" class="w-full bg-[#12131C] border border-white/10 focus:border-white px-4 py-3 rounded text-sm text-white focus:outline-none transition-colors resize-none"></textarea>
                        </div>

                        <button type="submit" class="w-full py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-brandMisty transition-colors mt-6">
                            Submit Free Property Audit Request
                        </button>

                    </form>
                </div>

            </div>

        </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-12 bg-brandDark border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div class="flex flex-col items-center md:items-start">
                <span class="font-display text-xl tracking-wider font-bold">ПРОФСЕРВИС</span>
                <span class="text-[8px] text-brandMisty tracking-widest uppercase">PROFSERVICE CO. &bull; ALL RIGHTS RESERVED &copy; 2026</span>
            </div>

            <!-- Tiny bottom link index -->
            <div class="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-widest text-brandMisty uppercase">
                <a href="#services" class="hover:text-white transition-colors">Services</a>
                <a href="#dashboard" class="hover:text-white transition-colors">Dashboard Telemetry</a>
                <a href="#calculator" class="hover:text-white transition-colors">Calculator Rota</a>
                <a href="#design-system" class="hover:text-white transition-colors">UI Kit</a>
                <a href="https://t.me/helperel" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">tg: @helperel</a>
            </div>

        </div>
    </footer>

    <!-- INTERACTIVE FLOATING TOAST SYSTEM (No browser alerts allowed) -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none" id="toast-container">
        <!-- Toast elements dynamically generated via JS will drop here beautifully -->
    </div>


    <!-- JAVASCRIPT LOGIC & TELEMETRY CONTROLLER -->
    <script>
        // Real-time Global variables
        let selectedMultiplier = 1.0;
        let selectedFacilityId = 'office';

        // Initialization
        window.addEventListener('DOMContentLoaded', () => {
            // Live clock ticker
            setInterval(updateClock, 1000);
            updateClock();

            // Setup Split Screen Hero Hover
            const heroContainer = document.getElementById('hero-split-container');
            if (heroContainer) {
                heroContainer.addEventListener('mousemove', handleHeroSplitMouseMove);
                heroContainer.addEventListener('mouseleave', resetHeroSplit);
            }

            // Setup Dashboard Occupancy Slider Event listener
            const occSlider = document.getElementById('occupancy-slider');
            if (occSlider) {
                occSlider.addEventListener('input', (e) => {
                    document.getElementById('occupancy-val').innerText = `${e.target.value}%`;
                    triggerNotification(`Facility occupancy updated to ${e.target.value}%`);
                });
            }

            // Trigger Initial Quote Calc update
            updateCalculatorEstimate();

            // Default UI Design Panel Display
            switchDesignTab('colors');

            // Set Mobile Menu Listeners
            const mMenuBtn = document.getElementById('mobile-menu-btn');
            const mMenu = document.getElementById('mobile-menu');
            if (mMenuBtn && mMenu) {
                mMenuBtn.addEventListener('click', () => {
                    const isOpen = mMenu.classList.contains('translate-x-0');
                    if (isOpen) {
                        mMenu.classList.remove('translate-x-0');
                        mMenu.classList.add('translate-x-full');
                        mMenu.classList.add('hidden');
                        document.getElementById('m-line-1').classList.remove('rotate-45', 'translate-y-2');
                        document.getElementById('m-line-2').classList.remove('opacity-0');
                        document.getElementById('m-line-3').classList.remove('-rotate-45', '-translate-y-2');
                    } else {
                        mMenu.classList.remove('hidden');
                        setTimeout(() => {
                            mMenu.classList.remove('translate-x-full');
                            mMenu.classList.add('translate-x-0');
                        }, 50);
                        document.getElementById('m-line-1').classList.add('rotate-45', 'translate-y-2');
                        document.getElementById('m-line-2').classList.add('opacity-0');
                        document.getElementById('m-line-3').classList.add('-rotate-45', '-translate-y-2');
                    }
                });

                // Auto Close Mobile links when item selected
                document.querySelectorAll('.mobile-link').forEach(link => {
                    link.addEventListener('click', () => {
                        mMenu.classList.remove('translate-x-0');
                        mMenu.classList.add('translate-x-full');
                        mMenu.classList.add('hidden');
                        document.getElementById('m-line-1').classList.remove('rotate-45', 'translate-y-2');
                        document.getElementById('m-line-2').classList.remove('opacity-0');
                        document.getElementById('m-line-3').classList.remove('-rotate-45', '-translate-y-2');
                    });
                });
            }
        });

        // Live Operational Clock Logic
        function updateClock() {
            const clockEl = document.getElementById('dashboard-clock');
            if (clockEl) {
                const now = new Date();
                const pad = (n) => n.toString().padStart(2, '0');
                clockEl.innerText = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} UTC`;
            }
        }

        // Custom Split Screen slide mechanics on mousemove
        function handleHeroSplitMouseMove(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const posX = e.clientX - rect.left;
            const percentage = Math.min(Math.max((posX / rect.width) * 100, 15), 85);
            
            document.documentElement.style.setProperty('--split-percent', `${percentage}%`);
            
            // Move center separator line physically matching the clip path
            const line = document.getElementById('hero-split-line');
            if (line) {
                line.style.left = `${percentage}%`;
            }
        }

        function resetHeroSplit() {
            document.documentElement.style.setProperty('--split-percent', `50%`);
            const line = document.getElementById('hero-split-line');
            if (line) {
                line.style.left = `50%`;
            }
        }

        // Terminal Log Telemetry Simulation 
        function simulateTelemetryTrigger() {
            const events = [
                "Air quality optimized to 99.4% purity index.",
                "Rope access structural scan finished at sector West 4.",
                "SLA threshold: Cleaners matched target metrics in Zone B.",
                "Power grid usage auto-adjusted: -2.3% active peak balance.",
                "HVAC duct telemetry returned ideal structural feedback.",
                "Rainwater storage reservoir audit completed successfully."
            ];
            const chosen = events[Math.floor(Math.random() * events.length)];
            
            // Write to dashboard operations terminal feed
            const feed = document.getElementById('terminal-feed');
            if (feed) {
                const now = new Date();
                const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
                
                const newRow = document.createElement('div');
                newRow.className = "text-white/40 transition-all duration-300 transform translate-y-1 opacity-0";
                newRow.innerHTML = `<span class="text-white">[${timeStr}]</span> ${chosen}`;
                
                feed.prepend(newRow);
                setTimeout(() => {
                    newRow.classList.remove('translate-y-1', 'opacity-0');
                }, 50);

                // Limit elements in feed to avoid heavy DOM build
                if (feed.children.length > 8) {
                    feed.removeChild(feed.lastChild);
                }
            }

            // Randomize telemetry graph points
            const graphPath = document.getElementById('graph-path');
            if (graphPath) {
                // Generate slightly randomized wave paths dynamically
                const randomPoints = [
                    Math.floor(Math.random() * 40) + 110,
                    Math.floor(Math.random() * 40) + 70,
                    Math.floor(Math.random() * 40) + 90,
                    Math.floor(Math.random() * 40) + 50,
                    Math.floor(Math.random() * 40) + 70,
                    Math.floor(Math.random() * 40) + 30
                ];
                const newD = `M0,130 Q30,110 60,${randomPoints[0]} T120,${randomPoints[1]} T180,${randomPoints[2]} T240,${randomPoints[3]} T300,${randomPoints[4]} T360,${randomPoints[5]} T400,30`;
                graphPath.setAttribute('d', newD);
            }

            triggerNotification("Telemetry diagnostic complete. Optimal building stats synced.");
        }

        // Toggle Smart Facility Systems
        function toggleSystem(type) {
            const btn = document.getElementById(`${type}-btn`);
            const dot = document.getElementById(`${type}-dot`);
            const statusLabel = document.getElementById(`${type}-status`);
            
            if (btn && dot && statusLabel) {
                const isOn = dot.classList.contains('translate-x-5');
                if (isOn) {
                    // Turn Off
                    dot.classList.remove('translate-x-5');
                    btn.classList.add('bg-white/10');
                    btn.classList.remove('bg-white');
                    
                    if (type === 'hvac') {
                        statusLabel.innerText = "Suspended Climate";
                        triggerNotification("HVAC grid switched to Eco Ventilation mode.");
                    } else if (type === 'rope') {
                        statusLabel.innerText = "Shift Inactive";
                        triggerNotification("Rope access teams cleared from structural sectors.");
                    } else if (type === 'security') {
                        statusLabel.innerText = "Manual Access Only";
                        triggerNotification("Warning: Biometric locks disabled.");
                    }
                } else {
                    // Turn On
                    dot.classList.add('translate-x-5');
                    btn.classList.remove('bg-white/10');
                    btn.classList.add('bg-white');

                    if (type === 'hvac') {
                        statusLabel.innerText = "Auto (21.5°C)";
                        triggerNotification("HVAC systems initialized automatically.");
                    } else if (type === 'rope') {
                        statusLabel.innerText = "Active Shift";
                        triggerNotification("Facade rope access climb rotation active.");
                    } else if (type === 'security') {
                        statusLabel.innerText = "Secure (Biometric)";
                        triggerNotification("Biometric smart lock grids activated.");
                    }
                }
            }
        }

        // Custom Calculator & Estimate Engine
        function selectFacilityType(id, multiplier) {
            selectedFacilityId = id;
            selectedMultiplier = multiplier;

            // Highlight chosen button
            document.querySelectorAll('.fac-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-black');
                btn.classList.add('border-white/10', 'text-brandMisty');
            });

            const targetBtn = document.getElementById(`fac-${id}`);
            if (targetBtn) {
                targetBtn.classList.remove('border-white/10', 'text-brandMisty');
                targetBtn.classList.add('bg-white', 'text-black');
            }

            updateCalculatorEstimate();
            triggerNotification(`Modified category preset to ${id.toUpperCase()}`);
        }

        function updateCalculatorEstimate() {
            const areaSlider = document.getElementById('area-slider');
            const areaDisplay = document.getElementById('area-display');
            
            if (!areaSlider || !areaDisplay) return;

            const areaValue = parseInt(areaSlider.value);
            areaDisplay.innerText = `${areaValue.toLocaleString()} sqm`;

            // Service values
            let multiplierSum = 0;
            if (document.getElementById('srv-detailing')?.checked) multiplierSum += 0.50;
            if (document.getElementById('srv-engineering')?.checked) multiplierSum += 0.80;
            if (document.getElementById('srv-climbing')?.checked) multiplierSum += 0.35;

            // Base pricing setup
            const baseFee = Math.round(1500 * selectedMultiplier);
            const serviceCost = Math.round(areaValue * multiplierSum);
            const calculatedTotal = baseFee + serviceCost;
            const projectedSavings = Math.round(calculatedTotal * 0.11); // Average 11% save margin

            document.getElementById('calc-base-fee').innerText = `$${baseFee.toLocaleString()}`;
            document.getElementById('calc-service-fee').innerText = `$${serviceCost.toLocaleString()}`;
            document.getElementById('calc-saving').innerText = `- $${projectedSavings.toLocaleString()}`;
            document.getElementById('calc-total').innerText = `$${(calculatedTotal - projectedSavings).toLocaleString()}`;
        }

        // Prefill Form Details from Calculated Quote Estimate
        function populateContactAuditForm() {
            const areaValue = document.getElementById('area-slider')?.value;
            const totalValue = document.getElementById('calc-total')?.innerText;
            const contactDetails = document.getElementById('contact-details');
            
            if (contactDetails) {
                contactDetails.value = `Interactive Quote Proposal: We wish to secure maintenance on a ${Number(areaValue).toLocaleString()} sqm commercial property. Projected monthly SLA: ~${totalValue}.`;
            }
            triggerNotification("Estimate values locked and populated directly in the form below!");
        }

        // Onboarding Form Handler
        function handleContactSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const phone = document.getElementById('contact-phone').value;
            const selectVal = document.getElementById('contact-service').value;

            triggerNotification(`Thank you, ${name}! Your free property audit proposal has been transmitted successfully.`);
            
            // Log payload
            console.log("Submit Proposal:", { name, email, phone, selectVal });
            event.target.reset();
        }

        // Interactive Notification Hub (Custom Toasts replacing classic Alert)
        function triggerNotification(message) {
            const container = document.getElementById('toast-container');
            if (container) {
                const toast = document.createElement('div');
                toast.className = "glass border border-white/10 p-4 rounded text-xs text-white shadow-xl flex items-center justify-between gap-3 transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto";
                toast.innerHTML = `
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        <span>${message}</span>
                    </div>
                    <button onclick="this.parentElement.remove()" class="text-brandMisty hover:text-white font-mono text-sm">×</button>
                `;
                container.appendChild(toast);
                
                // Trigger transition
                setTimeout(() => {
                    toast.classList.remove('translate-y-2', 'opacity-0');
                }, 50);

                // Auto remove toast after 4 seconds
                setTimeout(() => {
                    toast.classList.add('opacity-0', 'translate-y-2');
                    setTimeout(() => {
                        toast.remove();
                    }, 300);
                }, 4000);
            }
        }

        // Toggle Accordions (FAQ section)
        function toggleFAQ(id) {
            const el = document.getElementById(`faq-content-${id}`);
            const icon = document.getElementById(`faq-icon-${id}`);
            if (el && icon) {
                const isHidden = el.classList.contains('hidden');
                if (isHidden) {
                    el.classList.remove('hidden');
                    icon.innerText = "-";
                    icon.classList.add('rotate-45');
                } else {
                    el.classList.add('hidden');
                    icon.innerText = "+";
                    icon.classList.remove('rotate-45');
                }
            }
        }

        // Design System Panel controller
        function switchDesignTab(tabId) {
            document.querySelectorAll('.ds-panel').forEach(panel => {
                panel.classList.add('hidden');
            });
            document.querySelectorAll('.ds-tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-black');
                btn.classList.add('text-brandMisty', 'hover:text-white');
            });

            const activePanel = document.getElementById(`ds-panel-${tabId}`);
            const activeBtn = document.getElementById(`ds-tab-${tabId}`);

            if (activePanel && activeBtn) {
                activePanel.classList.remove('hidden');
                activeBtn.classList.remove('text-brandMisty', 'hover:text-white');
                activeBtn.classList.add('bg-white', 'text-black');
            }
        }
    </script>
</body>
</html>
7
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Folia — Biophilic Workspace & Ecological Intelligence Platform</title>
    <!-- Google Fonts: Plus Jakarta Sans for ultra-modern UI, Playfair Display for organic/editorial headings -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        editorial: ['"Playfair Display"', 'serif'],
                    },
                    colors: {
                        folia: {
                            forest: '#132A13',
                            deep: '#1b3322',
                            jungle: '#224229',
                            emerald: '#2D5A27',
                            moss: '#3F7A4C',
                            mint: '#A7F3D0',
                            sage: '#8FBC8F',
                            cream: '#F4F7F5',
                            charcoal: '#1E2923',
                        }
                    },
                    boxShadow: {
                        'paper-1': '-2px 2px 5px rgba(0,0,0,0.08), -5px 10px 15px rgba(0,0,0,0.12)',
                        'paper-2': '-5px 5px 10px rgba(0,0,0,0.12), -15px 15px 35px rgba(19, 42, 19, 0.2)',
                        'paper-3': '-8px 8px 15px rgba(0,0,0,0.15), -25px 25px 50px rgba(19, 42, 19, 0.3)',
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom smooth scroll and scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #F4F7F5;
        }
        ::-webkit-scrollbar-thumb {
            background: #2D5A27;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #1b3322;
        }
        
        /* Shimmer background animation */
        @keyframes subtle-float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float-slow {
            animation: subtle-float 8s ease-in-out infinite;
        }
        .animate-float-slower {
            animation: subtle-float 12s ease-in-out infinite 2s;
        }

        /* Paper cut layers transition */
        .layer-transition {
            transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
        }
    </style>
</head>
<body class="bg-folia-cream text-folia-charcoal font-sans overflow-x-hidden antialiased">

    <!-- Toast Notification System -->
    <div id="toast-container" class="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none"></div>

    <!-- Top Navigation Header -->
    <header class="fixed top-0 left-0 w-full z-40 bg-folia-cream/80 backdrop-blur-md border-b border-folia-forest/5 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Logo -->
            <a href="#" class="flex items-center gap-2 group">
                <div class="relative w-9 h-9 flex items-center justify-center bg-folia-forest rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                    <!-- Layered Leaf Mark -->
                    <svg class="w-6 h-6 text-folia-mint absolute" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.26,15.49 6.36,9.3 15.36,7.3L17,8M18,3C12,3 6,8 6,14C6,14 8,10 13,9C13,9 10,13 11,17C14.5,15.5 17.5,13.5 19,10C21,5.5 18,3 18,3Z" />
                    </svg>
                </div>
                <div class="flex flex-col">
                    <span class="text-xl font-extrabold tracking-tight text-folia-forest font-sans">FOLIA</span>
                    <span class="text-[9px] uppercase tracking-widest text-folia-moss -mt-1 font-bold">Biophilic Tech</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <nav class="hidden md:flex items-center gap-8">
                <a href="#ecosystem" class="text-sm font-semibold text-folia-charcoal/80 hover:text-folia-forest transition-colors">Ecosystem</a>
                <a href="#sandbox" class="text-sm font-semibold text-folia-charcoal/80 hover:text-folia-forest transition-colors">Workspace Simulator</a>
                <a href="#calculator" class="text-sm font-semibold text-folia-charcoal/80 hover:text-folia-forest transition-colors">ROI Calculator</a>
                <a href="#pricing" class="text-sm font-semibold text-folia-charcoal/80 hover:text-folia-forest transition-colors">Licensing</a>
                <a href="#faq" class="text-sm font-semibold text-folia-charcoal/80 hover:text-folia-forest transition-colors">FAQ</a>
            </nav>

            <!-- Dynamic Actions -->
            <div class="flex items-center gap-4">
                <a href="#hero-section" class="hidden sm:inline-flex items-center justify-center px-5  py-2.5 rounded-full text-xs font-bold text-folia-forest border border-folia-forest/20 hover:border-folia-forest/60 transition-all">
                    Access Portal
                </a>
                <a href="#sandbox" class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold bg-folia-forest text-white shadow-lg shadow-folia-forest/10 hover:bg-folia-jungle hover:shadow-xl hover:shadow-folia-forest/20 transition-all">
                    Launch Sandbox
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content Wrapper -->
    <main class="pt-20">

        <!-- SECTION 1: HERO & PREMIUM PORTAL DEMO (Awwwards Style) -->
        <section id="hero-section" class="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-folia-cream">
            <!-- Subtle Background Gradients -->
            <div class="absolute inset-0 z-0 pointer-events-none">
                <div class="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px] animate-float-slow"></div>
                <div class="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-folia-moss/5 rounded-full blur-[150px] animate-float-slower"></div>
            </div>

            <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                <!-- Left Narrative Copy -->
                <div class="lg:col-span-5 text-left space-y-6">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-folia-forest/5 border border-folia-forest/10">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span class="text-[11px] font-extrabold uppercase tracking-wider text-folia-emerald">Architectural Bio-Tech v3.4</span>
                    </div>
                    
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-folia-forest tracking-tight leading-[1.08] font-sans">
                        Architecting the <span class="font-editorial italic font-normal text-folia-emerald">living</span> digital workspace.
                    </h1>
                    
                    <p class="text-base sm:text-lg text-folia-charcoal/80 leading-relaxed font-normal max-w-xl">
                        Folia harmonizes advanced ecological intelligence with corporate productivity software. Transform lifeless offices and environments into breathing, biophilic micro-climates scientifically proven to boost cognition by 26%.
                    </p>

                    <!-- Real-time statistics counter row -->
                    <div class="grid grid-cols-3 gap-4 pt-4 border-t border-folia-forest/10">
                        <div>
                            <p class="text-2xl sm:text-3xl font-extrabold text-folia-forest tracking-tight">+26%</p>
                            <p class="text-[11px] text-folia-moss font-bold uppercase tracking-wider">Cognitive Speed</p>
                        </div>
                        <div>
                            <p class="text-2xl sm:text-3xl font-extrabold text-folia-forest tracking-tight">-34%</p>
                            <p class="text-[11px] text-folia-moss font-bold uppercase tracking-wider">Mental Fatigue</p>
                        </div>
                        <div>
                            <p class="text-2xl sm:text-3xl font-extrabold text-folia-forest tracking-tight">4.8M</p>
                            <p class="text-[11px] text-folia-moss font-bold uppercase tracking-wider">Tons CO₂ Saved</p>
                        </div>
                    </div>

                    <!-- Client validation logos -->
                    <div class="pt-6 space-y-2">
                        <p class="text-xs font-bold text-folia-moss uppercase tracking-widest">Partnered with Green Leaders</p>
                        <div class="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            <!-- Placeholder corporate marks with premium styling -->
                            <div class="font-bold text-sm tracking-widest text-folia-forest font-serif">VERDANT CO.</div>
                            <div class="font-bold text-sm tracking-widest text-folia-forest">E C O S Y S</div>
                            <div class="font-bold text-sm tracking-widest text-folia-forest font-editorial italic">BioArch</div>
                        </div>
                    </div>
                </div>

                <!-- Right Side: Desktop Split Card & Device Simulator (FAITHFUL RECREATION OF INSPIRATION) -->
                <div class="lg:col-span-7 flex flex-col items-center justify-center">
                    
                    <!-- Interactive Device / Layout Selector Tab -->
                    <div class="mb-6 bg-folia-forest/5 p-1 rounded-full flex gap-1 z-20">
                        <button id="btn-desktop-preview" class="px-5 py-2 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-md">
                            Desktop Gateway (Split-Wave)
                        </button>
                        <button id="btn-mobile-preview" class="px-5 py-2 rounded-full text-xs font-bold transition-all text-folia-forest hover:bg-folia-forest/10">
                            Mobile Glassmorphism
                        </button>
                    </div>

                    <!-- Outer Wrapper with Parallax Hover Tracking Container -->
                    <div id="parallax-container" class="relative w-full max-w-2xl aspect-[4/3] sm:aspect-[1.3] bg-transparent rounded-[32px] transition-all duration-700 ease-out">
                        
                        <!-- VIEW 1: DESKTOP SPLIT LAYOUT (Faithful to image left part) -->
                        <div id="desktop-portal-view" class="absolute inset-0 w-full h-full bg-white rounded-[32px] shadow-paper-3 overflow-hidden border border-folia-forest/5 grid grid-cols-12 opacity-100 transition-all duration-500 scale-100 z-10">
                            
                            <!-- Left: Premium Clean Forms -->
                            <div class="col-span-12 sm:col-span-6 p-8 sm:p-10 flex flex-col justify-between relative z-20 bg-white">
                                <!-- Minimal Header -->
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="w-6 h-6 flex items-center justify-center bg-folia-forest rounded-lg overflow-hidden">
                                        <svg class="w-4 h-4 text-folia-mint" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.26,15.49 6.36,9.3 15.36,7.3L17,8M18,3C12,3 6,8 6,14C6,14 8,10 13,9C13,9 10,13 11,17C14.5,15.5 17.5,13.5 19,10C21,5.5 18,3 18,3Z" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-bold tracking-widest text-folia-forest">FOLIA SYSTEM</span>
                                </div>

                                <!-- Dynamic Login/Register Card Context -->
                                <div id="portal-form-container" class="my-auto py-4">
                                    <!-- Log In State -->
                                    <div id="state-login" class="space-y-4 transition-all duration-300">
                                        <h2 id="form-heading" class="text-2xl font-extrabold text-folia-forest tracking-tight">Log in</h2>
                                        
                                        <div class="space-y-3">
                                            <div>
                                                <label class="block text-[10px] font-bold text-folia-moss uppercase tracking-widest mb-1.5">Login, email or phone number</label>
                                                <input type="text" placeholder="name@company.com" class="w-full px-4 py-2.5 rounded-full border border-folia-forest/15 focus:border-folia-emerald focus:outline-none focus:ring-2 focus:ring-folia-mint/30 text-xs transition-all bg-folia-cream/20">
                                            </div>
                                            <div>
                                                <div class="flex justify-between items-center mb-1.5">
                                                    <label class="block text-[10px] font-bold text-folia-moss uppercase tracking-widest">Password</label>
                                                </div>
                                                <div class="relative">
                                                    <input id="login-password-input" type="password" placeholder="••••••••••••" class="w-full px-4 py-2.5 rounded-full border border-folia-forest/15 focus:border-folia-emerald focus:outline-none focus:ring-2 focus:ring-folia-mint/30 text-xs transition-all bg-folia-cream/20 pr-10">
                                                    <button type="button" onclick="togglePasswordReveal('login-password-input')" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-folia-moss hover:text-folia-forest transition-colors">
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <button onclick="handlePortalAction('login')" class="w-full py-2.5 rounded-full bg-[#3B5441] hover:bg-folia-forest text-white text-xs font-bold transition-all shadow-md shadow-folia-forest/20 mt-2">
                                            Log in
                                        </button>

                                        <div class="relative flex py-2 items-center">
                                            <div class="flex-grow border-t border-folia-forest/10"></div>
                                            <span class="flex-shrink mx-3 text-[10px] font-bold text-folia-moss uppercase tracking-wider">or log in with</span>
                                            <div class="flex-grow border-t border-folia-forest/10"></div>
                                        </div>

                                        <div class="grid grid-cols-2 gap-3">
                                            <button onclick="handlePortalAction('Google')" class="flex items-center justify-center gap-2 py-2 border border-folia-forest/10 rounded-full hover:bg-folia-cream/50 transition-all">
                                                <svg class="w-4 h-4" viewBox="0 0 24 24">
                                                    <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.111C18.29 1.845 15.485 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.055 0 11.75-4.964 11.75-11.945 0-.805-.085-1.42-.19-1.97H12.24z"/>
                                                </svg>
                                                <span class="text-[11px] font-bold text-folia-charcoal">Google</span>
                                            </button>
                                            <button onclick="handlePortalAction('Office')" class="flex items-center justify-center gap-2 py-2 border border-folia-forest/10 rounded-full hover:bg-folia-cream/50 transition-all">
                                                <svg class="w-4 h-4" viewBox="0 0 23 23">
                                                    <path fill="#F25022" d="M0 0h11v11H0z"/>
                                                    <path fill="#7FBA00" d="M12 0h11v11H12z"/>
                                                    <path fill="#00A4EF" d="M0 12h11v11H0z"/>
                                                    <path fill="#FFB900" d="M12 12h11v11H12z"/>
                                                </svg>
                                                <span class="text-[11px] font-bold text-folia-charcoal">Office 365</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center gap-2 text-center text-xs mt-2 border-t border-folia-forest/5 pt-4">
                                    <button onclick="toggleFormState()" id="form-toggle-link" class="text-folia-emerald hover:underline font-bold">
                                        Don't have an account? Sign up
                                    </button>
                                    <a href="#" class="text-[11px] text-folia-moss/80 hover:text-folia-forest">Forgot login or password?</a>
                                </div>
                            </div>

                            <!-- Right: Masterfully Layered Papercraft Wave & Botanical Illustration -->
                            <div class="hidden sm:block sm:col-span-6 relative h-full bg-[#1e2f23] overflow-hidden">
                                
                                <!-- Background Ambient Light -->
                                <div class="absolute inset-0 bg-radial-gradient from-[#2d4d38] to-[#121c15] opacity-80"></div>

                                <!-- Dynamic CSS-based Layered Waves & Shadows matching exact contours of inspiration image -->
                                <!-- We stack multiple absolute-positioned SVGs shifted slightly on mouse move -->
                                
                                <!-- Layer 4: Deepest Leaf Layer (Darkest Green & Leaves) -->
                                <div class="absolute inset-0 z-10 opacity-95">
                                    <svg class="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 300 400" fill="none">
                                        <g filter="url(#drop-shadow-heavy)">
                                            <!-- Dark Leaf Path Artworks in vector -->
                                            <!-- Monstera Silhouette -->
                                            <path d="M 220,100 C 230,120 250,130 260,110 C 270,90 280,100 290,130 C 300,160 280,190 270,220 C 260,250 240,260 220,240 Z" fill="#142419" />
                                            <!-- Organic Forest Vines -->
                                            <path d="M 180,320 C 190,300 240,310 270,330 C 300,350 280,390 240,400 C 200,410 160,380 180,320 Z" fill="#1d3223" />
                                        </g>
                                    </svg>
                                </div>

                                <!-- Layer 3: Middle Green Cut & Fine Foliage -->
                                <div id="layer-wave-3" class="layer-transition absolute inset-0 z-20">
                                    <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <!-- Soft green paper edge with shadow -->
                                        <path d="M 120,0 C 180,50 110,120 180,200 C 230,260 120,330 150,400 L 300,400 L 300,0 Z" fill="#2d4834" filter="url(#paper-shadow)" />
                                        <!-- Overlay detailed leaves inside green boundary -->
                                        <g opacity="0.9">
                                            <!-- Palm Fronds Silhouettes -->
                                            <path d="M 180,150 C 200,140 220,130 240,135 C 230,155 210,165 190,160 Z" fill="#3b5a41" />
                                            <path d="M 185,170 C 210,165 230,160 250,170 C 235,185 215,190 195,180 Z" fill="#3b5a41" />
                                            <path d="M 180,195 C 205,195 225,200 245,215 C 225,225 205,220 190,205 Z" fill="#3b5a41" />
                                            <!-- Detailed fern leaf at bottom -->
                                            <path d="M 160,280 C 180,270 210,275 230,290 C 210,305 190,300 170,290 Z" fill="#223a27" />
                                            <path d="M 155,310 C 175,305 200,315 220,330 C 200,340 180,335 165,320 Z" fill="#223a27" />
                                        </g>
                                    </svg>
                                </div>

                                <!-- Layer 2: Transition Wave & Shadow (Grey/White Intermediate) -->
                                <div id="layer-wave-2" class="layer-transition absolute inset-0 z-30 pointer-events-none">
                                    <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <!-- Fluid Wave Separator matching the photo curve with a double ripple -->
                                        <path d="M 105,0 C 150,60 90,140 160,210 C 210,260 100,340 115,400 L 300,400 L 300,0 Z" fill="#e4eae6" opacity="0.6" filter="url(#paper-shadow)" />
                                    </svg>
                                </div>

                                <!-- Layer 1: Front White Border Cut -->
                                <div id="layer-wave-1" class="layer-transition absolute inset-0 z-30 pointer-events-none">
                                    <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <!-- Precise primary crisp white split wave curve -->
                                        <path d="M 95,0 C 145,50 85,130 150,210 C 200,260 90,345 105,400 L 300,400 L 300,0 Z" fill="white" filter="url(#paper-shadow-sharp)" />
                                    </svg>
                                </div>

                                <!-- Standard SVG Filters for Paper Shadow Simulation -->
                                <svg class="hidden">
                                    <defs>
                                        <filter id="paper-shadow" x="-30%" y="-30%" width="160%" height="160%">
                                            <feDropShadow dx="-8" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.3" />
                                            <feDropShadow dx="-2" dy="2" stdDeviation="3" flood-color="#030805" flood-opacity="0.2" />
                                        </filter>
                                        <filter id="paper-shadow-sharp" x="-20%" y="-20%" width="150%" height="150%">
                                            <feDropShadow dx="-4" dy="4" stdDeviation="6" flood-color="#0b170f" flood-opacity="0.25" />
                                        </filter>
                                        <filter id="drop-shadow-heavy" x="-40%" y="-40%" width="180%" height="180%">
                                            <feDropShadow dx="-10" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.4" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <!-- VIEW 2: SIMULATED MOBILE PREVIEW - GLASSMORPHIC PANEL (Faithful to image right part) -->
                        <div id="mobile-portal-view" class="absolute inset-0 w-full h-full bg-[#142318] rounded-[32px] shadow-paper-3 overflow-hidden border-4 border-folia-forest/20 opacity-0 pointer-events-none transition-all duration-500 scale-95 z-0 flex items-center justify-center">
                            
                            <!-- Forest Background for Mobile View -->
                            <div class="absolute inset-0 z-0">
                                <div class="absolute inset-0 bg-radial-gradient from-[#24422e] to-[#0f1912] opacity-90"></div>
                                
                                <!-- Dense Botanical Overlay simulating background leafy visuals -->
                                <svg class="w-full h-full opacity-60" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" fill="none">
                                    <!-- Fern Leafs & Monstera shapes wrapping the container -->
                                    <path d="M10,300 C30,280 60,290 80,310 C60,330 30,320 10,300 Z" fill="#315c3e" />
                                    <path d="M220,10 C240,30 230,60 210,80 C190,60 200,30 220,10 Z" fill="#2d4f37" />
                                    <path d="M 200,350 C 230,320 270,330 290,360 C 260,390 220,380 200,350 Z" fill="#1b3321" />
                                    <!-- Mobile paper cut white curve peeking in -->
                                    <path d="M 0,0 C 80,40 50,150 10,220 C -20,260 0,330 0,400 Z" fill="white" opacity="0.9" />
                                </svg>
                            </div>

                            <!-- Mobile Outer Status Bar Frame Simulation -->
                            <div class="absolute top-0 left-0 w-full px-6 py-2 flex justify-between items-center text-white/50 text-[10px] tracking-widest font-mono z-20">
                                <span>FOLIA NET</span>
                                <div class="flex items-center gap-1.5">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    <span>5G ECO</span>
                                </div>
                            </div>

                            <!-- Floating Glassmorphic Container (Direct replica from mobile layout of inspiration image) -->
                            <div class="relative w-[85%] max-w-[280px] bg-white/20 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-6 z-10 flex flex-col justify-between text-white my-6">
                                <div class="text-center space-y-1 mb-4">
                                    <h3 class="text-lg font-black tracking-tight text-white">Log in</h3>
                                    <p class="text-[9px] text-white/70 uppercase tracking-widest font-bold">Secure Biosphere Access</p>
                                </div>

                                <div class="space-y-3">
                                    <div>
                                        <label class="block text-[8px] font-bold text-white/80 uppercase tracking-widest mb-1">Login, email or phone number</label>
                                        <input type="text" placeholder="name@company.com" class="w-full px-3.5 py-2 rounded-full border border-white/20 bg-white/10 placeholder-white/40 text-[11px] text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all">
                                    </div>
                                    <div>
                                        <label class="block text-[8px] font-bold text-white/80 uppercase tracking-widest mb-1">Password</label>
                                        <div class="relative">
                                            <input id="mobile-password-input" type="password" placeholder="••••••••" class="w-full px-3.5 py-2 rounded-full border border-white/20 bg-white/10 placeholder-white/40 text-[11px] text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all">
                                            <button type="button" onclick="togglePasswordReveal('mobile-password-input')" class="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
                                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <button onclick="handlePortalAction('Mobile Login')" class="w-full py-2 rounded-full bg-[#3B5441] hover:bg-folia-emerald text-white text-[11px] font-bold transition-all shadow-md mt-2">
                                        Log in
                                    </button>
                                </div>

                                <div class="relative flex py-2 items-center">
                                    <div class="flex-grow border-t border-white/15"></div>
                                    <span class="flex-shrink mx-2 text-[8px] font-bold text-white/60 uppercase tracking-widest">or log in with</span>
                                    <div class="flex-grow border-t border-white/15"></div>
                                </div>

                                <div class="flex justify-center gap-4">
                                    <button onclick="handlePortalAction('Google (Mobile)')" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/15 hover:bg-white/20 transition-all">
                                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24">
                                            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.111C18.29 1.845 15.485 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.055 0 11.75-4.964 11.75-11.945 0-.805-.085-1.42-.19-1.97H12.24z"/>
                                        </svg>
                                    </button>
                                    <button onclick="handlePortalAction('Office (Mobile)')" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/15 hover:bg-white/20 transition-all">
                                        <svg class="w-3.5 h-3.5" viewBox="0 0 23 23">
                                            <path fill="#F25022" d="M0 0h11v11H0z"/>
                                            <path fill="#7FBA00" d="M12 0h11v11H12z"/>
                                            <path fill="#00A4EF" d="M0 12h11v11H0z"/>
                                            <path fill="#FFB900" d="M12 12h11v11H12z"/>
                                        </svg>
                                    </button>
                                </div>

                                <div class="text-center mt-3 text-[10px] text-white/50">
                                    <a href="#" class="hover:underline">Forgot login or password?</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- SECTION 2: THE ECOSYSTEM ADVANTAGES -->
        <section id="ecosystem" class="py-24 bg-white border-t border-b border-folia-forest/5 relative">
            <div class="max-w-7xl mx-auto px-6">
                
                <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span class="text-xs font-extrabold uppercase tracking-widest text-folia-emerald bg-folia-forest/5 px-3.5 py-1.5 rounded-full">Environmental Architecture</span>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-folia-forest tracking-tight leading-[1.1]">
                        Seamlessly integrating organic beauty with digital logic.
                    </h2>
                    <p class="text-base text-folia-charcoal/80">
                        Modern work-spaces fail our biological design. Folia fixes this. Our system connects IoT hardware directly with ambient smart displays and environmental feedback workflows.
                    </p>
                </div>

                <!-- Custom 3D Parallax Feature Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <!-- Card 1 -->
                    <div class="group relative bg-folia-cream rounded-[32px] p-8 overflow-hidden shadow-paper-1 hover:shadow-paper-2 border border-folia-forest/5 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between aspect-square md:aspect-auto md:h-[420px]">
                        <!-- Embedded decorative paper-cut SVGs on corners -->
                        <div class="absolute right-0 bottom-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                            <svg class="w-full h-full text-folia-forest" fill="currentColor" viewBox="0 0 100 100">
                                <path d="M100,50 C80,60 70,80 50,100 C30,80 20,60 0,50 C20,40 30,20 50,0 C70,20 80,40 100,50 Z"/>
                            </svg>
                        </div>
                        
                        <div class="space-y-4">
                            <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                                <!-- Leaf icon -->
                                <svg class="w-6 h-6 text-folia-emerald" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-black text-folia-forest tracking-tight">Circadian Light Sync</h3>
                            <p class="text-xs sm:text-sm text-folia-charcoal/70 leading-relaxed">
                                Dynamically modifies office screen temperatures and background visuals to align perfectly with organic pineal rhythms, reducing computer vision syndrome by 60%.
                            </p>
                        </div>
                        
                        <a href="#sandbox" class="text-xs font-bold text-folia-emerald inline-flex items-center gap-1 group-hover:underline">
                            Explore Interface <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    <!-- Card 2 -->
                    <div class="group relative bg-[#1c2c20] text-white rounded-[32px] p-8 overflow-hidden shadow-paper-1 hover:shadow-paper-2 border border-folia-forest/5 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between aspect-square md:aspect-auto md:h-[420px]">
                        <div class="absolute right-0 bottom-0 w-36 h-36 opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                            <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 100 100">
                                <path d="M100,0 C80,30 50,70 100,100 Z"/>
                            </svg>
                        </div>

                        <div class="space-y-4">
                            <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-md border border-white/10">
                                <!-- Sensor waves -->
                                <svg class="w-6 h-6 text-folia-mint" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-black tracking-tight text-white">IoT Bio-Feedback</h3>
                            <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                                Connect smart moss walls, real-time leaf transpiration telemetry, and ambient air sensors directly to our ecological ledger database. Monitor bio-signals instantly.
                            </p>
                        </div>

                        <a href="#sandbox" class="text-xs font-bold text-folia-mint inline-flex items-center gap-1 group-hover:underline">
                            Open Dashboard <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    <!-- Card 3 -->
                    <div class="group relative bg-folia-cream rounded-[32px] p-8 overflow-hidden shadow-paper-1 hover:shadow-paper-2 border border-folia-forest/5 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between aspect-square md:aspect-auto md:h-[420px]">
                        <div class="absolute right-0 bottom-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                            <svg class="w-full h-full text-folia-forest" fill="currentColor" viewBox="0 0 100 100">
                                <path d="M0,0 C30,30 70,50 100,0 Z"/>
                            </svg>
                        </div>

                        <div class="space-y-4">
                            <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                                <!-- Brain / Performance -->
                                <svg class="w-6 h-6 text-folia-emerald" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-black text-folia-forest tracking-tight">Acoustic Masking</h3>
                            <p class="text-xs sm:text-sm text-folia-charcoal/70 leading-relaxed">
                                Generative audio engines map physical plant density to synthesize natural ambient acoustic barriers, masking background chat with high-fidelity streams of real rain forest.
                            </p>
                        </div>

                        <a href="#sandbox" class="text-xs font-bold text-folia-emerald inline-flex items-center gap-1 group-hover:underline">
                            Examine System <span class="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                </div>

            </div>
        </section>

        <!-- SECTION 3: INTERACTIVE BIOPHILIC WORKSPACE SIMULATOR -->
        <section id="sandbox" class="py-24 bg-folia-cream relative">
            <div class="max-w-7xl mx-auto px-6">
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <!-- Interactive Sliders and Controls -->
                    <div class="lg:col-span-5 space-y-6 bg-white p-8 rounded-[32px] shadow-paper-2 border border-folia-forest/5">
                        <div class="space-y-1">
                            <span class="text-xs font-extrabold uppercase tracking-widest text-folia-emerald">Playground</span>
                            <h3 class="text-2xl font-black text-folia-forest tracking-tight">Configure Your Biophilic Chamber</h3>
                            <p class="text-xs text-folia-charcoal/70">Alter environmental parameters in real time to visualize ecological and intellectual output shifts.</p>
                        </div>

                        <!-- Slider 1 -->
                        <div class="space-y-2">
                            <div class="flex justify-between items-center text-xs">
                                <span class="font-bold text-folia-forest">FLORA DENSITY</span>
                                <span id="val-flora" class="font-mono bg-folia-mint px-2 py-0.5 rounded-full text-folia-forest font-bold">45%</span>
                            </div>
                            <input id="slide-flora" type="range" min="10" max="100" value="45" oninput="updateSimulator()" class="w-full accent-folia-forest bg-folia-cream rounded-lg appearance-none h-2 cursor-pointer">
                            <p class="text-[10px] text-folia-moss">Determines square footage covered by organic multi-tiered live vegetation.</p>
                        </div>

                        <!-- Slider 2 -->
                        <div class="space-y-2">
                            <div class="flex justify-between items-center text-xs">
                                <span class="font-bold text-folia-forest">AIR TRANSPIRATION FLOW</span>
                                <span id="val-air" class="font-mono bg-folia-mint px-2 py-0.5 rounded-full text-folia-forest font-bold">60%</span>
                            </div>
                            <input id="slide-air" type="range" min="20" max="100" value="60" oninput="updateSimulator()" class="w-full accent-folia-forest bg-folia-cream rounded-lg appearance-none h-2 cursor-pointer">
                            <p class="text-[10px] text-folia-moss">Controls fan volumes blowing through plant root layers to extract pollutants.</p>
                        </div>

                        <!-- Slider 3 -->
                        <div class="space-y-2">
                            <div class="flex justify-between items-center text-xs">
                                <span class="font-bold text-folia-forest">BIO-ACOUSTIC MASKING</span>
                                <span id="val-audio" class="font-mono bg-folia-mint px-2 py-0.5 rounded-full text-folia-forest font-bold">30%</span>
                            </div>
                            <input id="slide-audio" type="range" min="0" max="100" value="30" oninput="updateSimulator()" class="w-full accent-folia-forest bg-folia-cream rounded-lg appearance-none h-2 cursor-pointer">
                            <p class="text-[10px] text-folia-moss">Generates variable botanical frequencies from localized high-fidelity transducers.</p>
                        </div>

                        <div class="pt-4 border-t border-folia-forest/5 flex items-center justify-between">
                            <span class="text-xs font-bold text-folia-forest">CHAMBER STABILITY STATUS</span>
                            <span id="status-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                OPTIMAL HARMONY
                            </span>
                        </div>
                    </div>

                    <!-- Right Side: Real-time Render Visualization -->
                    <div class="lg:col-span-7 space-y-6">
                        
                        <!-- High tech environmental telemetry interface -->
                        <div class="bg-[#121d15] text-white p-8 rounded-[32px] shadow-paper-3 space-y-6 relative overflow-hidden border border-white/5">
                            <!-- Background Leaf Watermarks responsive to flora slider -->
                            <div id="visual-leaf-bg" class="absolute right-0 bottom-0 w-64 h-64 opacity-20 pointer-events-none transition-all duration-500 scale-100">
                                <svg class="w-full h-full text-folia-mint" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.26,15.49 6.36,9.3 15.36,7.3L17,8M18,3C12,3 6,8 6,14C6,14 8,10 13,9C13,9 10,13 11,17C14.5,15.5 17.5,13.5 19,10C21,5.5 18,3 18,3Z" />
                                </svg>
                            </div>

                            <div class="flex justify-between items-start border-b border-white/10 pb-4 relative z-10">
                                <div>
                                    <p class="text-xs font-extrabold uppercase tracking-widest text-folia-mint">Active Simulation Telemetry</p>
                                    <h4 class="text-xl font-bold tracking-tight">Biosphere Module Beta-08</h4>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-white/50">Location ID</p>
                                    <p class="text-xs font-mono font-bold">CHI-HQ-SECTOR-4</p>
                                </div>
                            </div>

                            <!-- Big Dynamic Readouts -->
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                                <!-- Readout 1 -->
                                <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-white/60">Productivity Boost</span>
                                    <div class="flex items-baseline gap-1">
                                        <span id="metric-prod" class="text-3xl font-extrabold tracking-tight text-white transition-all">18%</span>
                                        <span class="text-xs font-bold text-emerald-400">↑</span>
                                    </div>
                                    <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <div id="bar-prod" class="bg-emerald-400 h-full transition-all duration-500" style="width: 50%"></div>
                                    </div>
                                </div>

                                <!-- Readout 2 -->
                                <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-white/60">Oxygen Saturation</span>
                                    <div class="flex items-baseline gap-1">
                                        <span id="metric-oxygen" class="text-3xl font-extrabold tracking-tight text-white transition-all">+1.2M</span>
                                        <span class="text-xs font-bold text-folia-mint">cc/h</span>
                                    </div>
                                    <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <div id="bar-oxygen" class="bg-folia-mint h-full transition-all duration-500" style="width: 45%"></div>
                                    </div>
                                </div>

                                <!-- Readout 3 -->
                                <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-white/60">Mental Clarity index</span>
                                    <div class="flex items-baseline gap-1">
                                        <span id="metric-clarity" class="text-3xl font-extrabold tracking-tight text-white transition-all">45</span>
                                        <span class="text-xs font-bold text-[#E2E8F0]">/100</span>
                                    </div>
                                    <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                        <div id="bar-clarity" class="bg-[#E2E8F0] h-full transition-all duration-500" style="width: 45%"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Live Audio Visualizer / Transpiration Spectrum Waves Simulation -->
                            <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3 relative z-10">
                                <div class="flex justify-between items-center">
                                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-white/60">Bio-Acoustic Waveform Analysis</span>
                                    <span class="text-[9px] font-mono text-[#A7F3D0]">ACTIVE SPECTRUM GENERATOR</span>
                                </div>
                                <div class="flex items-end justify-between h-12 px-2 bg-[#09100a] rounded-xl overflow-hidden">
                                    <!-- Animated Bars -->
                                    <div id="eq-bar-1" class="w-2.5 bg-emerald-500 rounded-t-sm transition-all duration-300" style="height: 40%"></div>
                                    <div id="eq-bar-2" class="w-2.5 bg-folia-mint rounded-t-sm transition-all duration-300" style="height: 60%"></div>
                                    <div id="eq-bar-3" class="w-2.5 bg-emerald-400 rounded-t-sm transition-all duration-300" style="height: 80%"></div>
                                    <div id="eq-bar-4" class="w-2.5 bg-white/40 rounded-t-sm transition-all duration-300" style="height: 30%"></div>
                                    <div id="eq-bar-5" class="w-2.5 bg-emerald-600 rounded-t-sm transition-all duration-300" style="height: 50%"></div>
                                    <div id="eq-bar-6" class="w-2.5 bg-folia-mint rounded-t-sm transition-all duration-300" style="height: 70%"></div>
                                    <div id="eq-bar-7" class="w-2.5 bg-emerald-400 rounded-t-sm transition-all duration-300" style="height: 90%"></div>
                                    <div id="eq-bar-8" class="w-2.5 bg-white/20 rounded-t-sm transition-all duration-300" style="height: 20%"></div>
                                    <div id="eq-bar-9" class="w-2.5 bg-emerald-500 rounded-t-sm transition-all duration-300" style="height: 45%"></div>
                                    <div id="eq-bar-10" class="w-2.5 bg-emerald-300 rounded-t-sm transition-all duration-300" style="height: 65%"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

        <!-- SECTION 4: INTERACTIVE IMPACT & ROI CALCULATOR -->
        <section id="calculator" class="py-24 bg-white border-t border-b border-folia-forest/5 relative">
            <div class="max-w-7xl mx-auto px-6">
                
                <div class="text-center max-w-2xl mx-auto space-y-4 mb-16">
                    <span class="text-xs font-extrabold uppercase tracking-widest text-folia-emerald bg-folia-forest/5 px-3.5 py-1.5 rounded-full">Financial Harmonics</span>
                    <h2 class="text-3xl sm:text-4xl font-black text-folia-forest tracking-tight leading-[1.1]">
                        Model Your Corporate Botanical ROI
                    </h2>
                    <p class="text-base text-folia-charcoal/80">
                        See how introducing biological layers to physical hardware systems yields concrete carbon offsets and saves thousands in annual operational overhead.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-folia-cream rounded-[48px] p-8 sm:p-12 shadow-paper-2 border border-folia-forest/5">
                    
                    <!-- Left Column: Inputs -->
                    <div class="lg:col-span-6 space-y-8">
                        <div>
                            <h4 class="text-xl font-extrabold text-folia-forest tracking-tight mb-2">Workspace Scope Parameters</h4>
                            <p class="text-xs text-folia-charcoal/70">Adjust the metrics below to reflect your real office operations.</p>
                        </div>

                        <!-- Metric Input 1 -->
                        <div class="space-y-3">
                            <label class="block text-xs font-bold text-folia-moss uppercase tracking-widest">Total Active Employees</label>
                            <div class="flex items-center gap-4 bg-white px-4 py-2 rounded-full border border-folia-forest/10 shadow-sm">
                                <button onclick="adjustCalcValue('employees', -50)" class="w-8 h-8 rounded-full bg-folia-cream hover:bg-folia-forest hover:text-white flex items-center justify-center font-bold transition-all">-</button>
                                <span id="calc-employees" class="text-lg font-extrabold text-folia-forest font-mono flex-grow text-center">250</span>
                                <button onclick="adjustCalcValue('employees', 50)" class="w-8 h-8 rounded-full bg-folia-cream hover:bg-folia-forest hover:text-white flex items-center justify-center font-bold transition-all">+</button>
                            </div>
                        </div>

                        <!-- Metric Input 2 -->
                        <div class="space-y-3">
                            <label class="block text-xs font-bold text-folia-moss uppercase tracking-widest">Average Annual Salary ($/Yr)</label>
                            <input id="calc-salary" type="range" min="40000" max="200000" step="5000" value="85000" oninput="calculateROI()" class="w-full accent-folia-forest bg-white rounded-lg appearance-none h-2 cursor-pointer shadow-sm">
                            <div class="flex justify-between text-xs font-mono text-folia-moss font-bold">
                                <span>$40,000</span>
                                <span id="display-salary" class="bg-folia-forest text-white px-2.5 py-0.5 rounded-full">$85,000</span>
                                <span>$200,000</span>
                            </div>
                        </div>

                        <!-- Metric Input 3 -->
                        <div class="space-y-3">
                            <label class="block text-xs font-bold text-folia-moss uppercase tracking-widest">Target Biophilic Density Plan</label>
                            <div class="grid grid-cols-3 gap-2">
                                <button onclick="setDensityPlan('Sprout', 1.0)" id="plan-sprout" class="py-2.5 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-md">Sprout (10%)</button>
                                <button onclick="setDensityPlan('Canopy', 1.5)" id="plan-canopy" class="py-2.5 rounded-full text-xs font-bold transition-all text-folia-forest bg-white border border-folia-forest/10 hover:bg-folia-forest/5">Canopy (25%)</button>
                                <button onclick="setDensityPlan('Biosphere', 2.0)" id="plan-biosphere" class="py-2.5 rounded-full text-xs font-bold transition-all text-folia-forest bg-white border border-folia-forest/10 hover:bg-folia-forest/5">Biosphere (50%)</button>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Outputs -->
                    <div class="lg:col-span-6 flex flex-col justify-between bg-white p-8 rounded-[36px] border border-folia-forest/5 shadow-sm space-y-6">
                        <div>
                            <h4 class="text-xl font-extrabold text-folia-forest tracking-tight">Projected Annual Gains</h4>
                            <p class="text-xs text-folia-charcoal/70">Calculated based on average cognitive performance metrics & real carbon offset indices.</p>
                        </div>

                        <!-- Readout Fields -->
                        <div class="space-y-4">
                            <!-- Field 1 -->
                            <div class="flex items-center justify-between p-4 bg-folia-cream/50 rounded-2xl">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">$</div>
                                    <div>
                                        <p class="text-xs font-extrabold text-folia-forest uppercase tracking-wider">Productivity Recovery</p>
                                        <p class="text-[10px] text-folia-moss">Value of recovered distraction time</p>
                                    </div>
                                </div>
                                <span id="display-productivity" class="text-2xl font-black text-emerald-600 tracking-tight">$345,000</span>
                            </div>

                            <!-- Field 2 -->
                            <div class="flex items-center justify-between p-4 bg-folia-cream/50 rounded-2xl">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">CO₂</div>
                                    <div>
                                        <p class="text-xs font-extrabold text-folia-forest uppercase tracking-wider">Carbon Credit Savings</p>
                                        <p class="text-[10px] text-folia-moss">Mitigated taxes / purchase requirements</p>
                                    </div>
                                </div>
                                <span id="display-co2" class="text-2xl font-black text-emerald-600 tracking-tight">$18,400</span>
                            </div>

                            <!-- Total Dynamic Large ROI Header -->
                            <div class="text-center py-6 bg-folia-forest text-white rounded-3xl space-y-1 shadow-md">
                                <span class="text-[10px] font-extrabold uppercase tracking-widest text-folia-mint">Total Estimated Annual Value</span>
                                <h5 id="display-total" class="text-4xl font-black text-white tracking-tight">$363,400</h5>
                            </div>
                        </div>

                        <div class="text-center">
                            <button onclick="handlePortalAction('Corporate ROI PDF Export')" class="w-full sm:w-auto px-8 py-3 rounded-full bg-folia-forest hover:bg-folia-emerald text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md">
                                Export Biophilic Impact Report
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <!-- SECTION 5: PREMIUM PRICING PLANS -->
        <section id="pricing" class="py-24 bg-folia-cream relative">
            <div class="max-w-7xl mx-auto px-6">
                
                <div class="text-center max-w-2xl mx-auto space-y-4 mb-16">
                    <span class="text-xs font-extrabold uppercase tracking-widest text-folia-emerald bg-folia-forest/5 px-3.5 py-1.5 rounded-full">Licensing Modules</span>
                    <h2 class="text-3xl sm:text-4xl font-black text-folia-forest tracking-tight leading-[1.1]">
                        Scalable Architecture For Any Scope
                    </h2>
                    <p class="text-base text-folia-charcoal/80">
                        Whether you are testing localized smart gardens or deploying biophilic hardware automation across multiple corporate towers.
                    </p>

                    <!-- Billing Toggle -->
                    <div class="inline-flex items-center gap-3 p-1 bg-folia-forest/5 rounded-full mt-4">
                        <button id="btn-billing-monthly" onclick="setBillingCycle('monthly')" class="px-5 py-2 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-sm">Monthly Billing</button>
                        <button id="btn-billing-annual" onclick="setBillingCycle('annual')" class="px-5 py-2 rounded-full text-xs font-bold transition-all text-folia-forest hover:bg-folia-forest/10">Annual Billing (-20%)</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    
                    <!-- Pricing Plan 1 -->
                    <div class="bg-white rounded-[40px] p-8 border border-folia-forest/5 shadow-paper-1 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]">
                        <div class="space-y-6">
                            <div class="space-y-2">
                                <p class="text-xs font-extrabold uppercase tracking-widest text-folia-moss">Local Office</p>
                                <h3 class="text-2xl font-black text-folia-forest tracking-tight">Sprout Plan</h3>
                                <p class="text-xs text-folia-charcoal/70">Ideal for targeted single-room or creative workspace installations.</p>
                            </div>

                            <div class="flex items-baseline">
                                <span class="text-4xl font-black text-folia-forest tracking-tight font-mono">$</span>
                                <span id="price-sprout" class="text-5xl font-black text-folia-forest tracking-tight font-mono">149</span>
                                <span class="text-xs font-bold text-folia-moss ml-1">/ Month</span>
                            </div>

                            <div class="border-t border-folia-forest/5 pt-6 space-y-4">
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-emerald-500 font-extrabold">✓</span>
                                    <span>Supports up to 50 employees</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-emerald-500 font-extrabold">✓</span>
                                    <span>Circadian Light Display Syncing</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-emerald-500 font-extrabold">✓</span>
                                    <span>Ambient bio-sound library streaming</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs text-folia-moss/50 line-through">
                                    <span>✗ Ambient IoT sensor integrations</span>
                                </div>
                            </div>
                        </div>

                        <button onclick="handlePortalAction('Sprout Plan Subscription')" class="w-full py-3.5 rounded-full bg-folia-cream text-folia-forest border border-folia-forest/10 hover:bg-folia-forest hover:text-white text-xs font-bold transition-all mt-8">
                            Select Sprout Package
                        </button>
                    </div>

                    <!-- Pricing Plan 2 (Highlighted) -->
                    <div class="bg-[#1a3121] text-white rounded-[40px] p-8 shadow-paper-3 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.03]">
                        <!-- Subtle glass shine highlight across the top card -->
                        <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>

                        <div class="space-y-6 relative z-10">
                            <div class="flex justify-between items-center">
                                <p class="text-xs font-extrabold uppercase tracking-widest text-folia-mint">MOST REQUISITIONED</p>
                                <span class="bg-folia-mint text-folia-forest text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full">Automated</span>
                            </div>

                            <div class="space-y-2">
                                <h3 class="text-2xl font-black tracking-tight">Canopy Plan</h3>
                                <p class="text-xs text-white/70">The complete software & dynamic environment integration framework.</p>
                            </div>

                            <div class="flex items-baseline">
                                <span class="text-4xl font-black tracking-tight font-mono">$</span>
                                <span id="price-canopy" class="text-5xl font-black tracking-tight font-mono">399</span>
                                <span class="text-xs font-bold text-folia-mint ml-1">/ Month</span>
                            </div>

                            <div class="border-t border-white/10 pt-6 space-y-4">
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-folia-mint font-extrabold">✓</span>
                                    <span>Supports up to 250 employees</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-folia-mint font-extrabold">✓</span>
                                    <span>Automated plant wall IoT control</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-folia-mint font-extrabold">✓</span>
                                    <span>Integrated Slack/Teams biometric feedback</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-folia-mint font-extrabold">✓</span>
                                    <span>Real-time environmental telemetry api</span>
                                </div>
                            </div>
                        </div>

                        <button onclick="handlePortalAction('Canopy Plan Subscription')" class="w-full py-3.5 rounded-full bg-folia-mint text-folia-forest hover:bg-white text-xs font-bold transition-all mt-8 relative z-10 shadow-lg shadow-folia-mint/20">
                            Select Canopy Package
                        </button>
                    </div>

                    <!-- Pricing Plan 3 -->
                    <div class="bg-white rounded-[40px] p-8 border border-folia-forest/5 shadow-paper-1 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]">
                        <div class="space-y-6">
                            <div class="space-y-2">
                                <p class="text-xs font-extrabold uppercase tracking-widest text-folia-moss">Enterprise Scope</p>
                                <h3 class="text-2xl font-black text-folia-forest tracking-tight">Biosphere Plan</h3>
                                <p class="text-xs text-folia-charcoal/70">Custom tailored hardware integration and dedicated ecological consulting.</p>
                            </div>

                            <div class="flex items-baseline">
                                <span class="text-4xl font-black text-folia-forest tracking-tight font-mono">$</span>
                                <span id="price-biosphere" class="text-5xl font-black text-folia-forest tracking-tight font-mono">899</span>
                                <span class="text-xs font-bold text-folia-moss ml-1">/ Month</span>
                            </div>

                            <div class="border-t border-folia-forest/5 pt-6 space-y-4">
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-emerald-500 font-extrabold">✓</span>
                                    <span>Unlimited employees & locations</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-emerald-500 font-extrabold">✓</span>
                                    <span>Full multi-tiered server infrastructure</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-emerald-500 font-extrabold">✓</span>
                                    <span>Custom botanical design blueprints</span>
                                </div>
                                <div class="flex items-center gap-3 text-xs">
                                    <span class="text-emerald-500 font-extrabold">✓</span>
                                    <span>Dedicated botanical engineering support</span>
                                </div>
                            </div>
                        </div>

                        <button onclick="handlePortalAction('Biosphere Plan Subscription')" class="w-full py-3.5 rounded-full bg-folia-cream text-folia-forest border border-folia-forest/10 hover:bg-folia-forest hover:text-white text-xs font-bold transition-all mt-8">
                            Contact Architectural Rep
                        </button>
                    </div>

                </div>

            </div>
        </section>

        <!-- SECTION 6: FAQ ACCORDION -->
        <section id="faq" class="py-24 bg-white border-t border-b border-folia-forest/5 relative">
            <div class="max-w-4xl mx-auto px-6">
                
                <div class="text-center space-y-4 mb-16">
                    <span class="text-xs font-extrabold uppercase tracking-widest text-folia-emerald bg-folia-forest/5 px-3.5 py-1.5 rounded-full">Knowledge Bank</span>
                    <h2 class="text-3xl sm:text-4xl font-black text-folia-forest tracking-tight leading-[1.1]">
                        Deep Environmental Architecture FAQ
                    </h2>
                </div>

                <!-- FAQ Items Accordion -->
                <div class="space-y-4">
                    
                    <!-- Item 1 -->
                    <div class="bg-folia-cream rounded-2xl border border-folia-forest/5 overflow-hidden transition-all duration-300">
                        <button onclick="toggleFaq(1)" class="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-folia-forest/5 transition-colors">
                            <span class="font-extrabold text-folia-forest text-sm sm:text-base">How does Folia extract cognitive performance boosts from plant telemetry?</span>
                            <span id="faq-icon-1" class="text-lg font-bold text-folia-moss transition-transform duration-300">+</span>
                        </button>
                        <div id="faq-body-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div class="px-6 pb-5 text-xs sm:text-sm text-folia-charcoal/80 leading-relaxed border-t border-folia-forest/5 pt-3">
                                Folia matches physical plant metrics (specifically transpiration speed, organic relative humidity emission, and VOC extraction) to specialized ambient computer screensavers and generative soundtracks. Scientifically, keeping biological processes synced with circadian screens keeps staff visual systems in lower states of stress, yielding higher mental longevity.
                            </div>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="bg-folia-cream rounded-2xl border border-folia-forest/5 overflow-hidden transition-all duration-300">
                        <button onclick="toggleFaq(2)" class="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-folia-forest/5 transition-colors">
                            <span class="font-extrabold text-folia-forest text-sm sm:text-base">What physical hardware setup is needed?</span>
                            <span id="faq-icon-2" class="text-lg font-bold text-folia-moss transition-transform duration-300">+</span>
                        </button>
                        <div id="faq-body-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div class="px-6 pb-5 text-xs sm:text-sm text-folia-charcoal/80 leading-relaxed border-t border-folia-forest/5 pt-3">
                                Folia interfaces with standard off-the-shelf smart plant wall sensors (Bluetooth & Zigbee) as well as custom Folia telemetry units. Setting up takes minutes: plug standard sensor probes directly into soil mediums and pair using our secure Desktop/Mobile Gateways.
                            </div>
                        </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="bg-folia-cream rounded-2xl border border-folia-forest/5 overflow-hidden transition-all duration-300">
                        <button onclick="toggleFaq(3)" class="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-folia-forest/5 transition-colors">
                            <span class="font-extrabold text-folia-forest text-sm sm:text-base">Does the platform calculate real tax-deductible Carbon Credits?</span>
                            <span id="faq-icon-3" class="text-lg font-bold text-folia-moss transition-transform duration-300">+</span>
                        </button>
                        <div id="faq-body-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div class="px-6 pb-5 text-xs sm:text-sm text-folia-charcoal/80 leading-relaxed border-t border-folia-forest/5 pt-3">
                                Yes. Folia translates aggregate biosensing datasets directly into officially certified carbon offset protocols compliant with international GHG reporting standards. This allows green tech organizations to claim verifiable corporate carbon offsets from localized office flora.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER DESIGN -->
    <footer class="bg-folia-forest text-white py-16 relative overflow-hidden">
        
        <!-- Background Layered Paper Shapes mimicking leaf silhouettes -->
        <div class="absolute right-[-10%] bottom-[-10%] w-96 h-96 opacity-10 pointer-events-none">
            <svg class="w-full h-full text-folia-mint" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.26,15.49 6.36,9.3 15.36,7.3L17,8M18,3C12,3 6,8 6,14C6,14 8,10 13,9C13,9 10,13 11,17C14.5,15.5 17.5,13.5 19,10C21,5.5 18,3 18,3Z" />
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
            
            <!-- Left Brand Column -->
            <div class="md:col-span-5 space-y-6">
                <a href="#" class="flex items-center gap-2 group">
                    <div class="relative w-9 h-9 flex items-center justify-center bg-white rounded-xl overflow-hidden">
                        <svg class="w-6 h-6 text-folia-forest" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.26,15.49 6.36,9.3 15.36,7.3L17,8M18,3C12,3 6,8 6,14C6,14 8,10 13,9C13,9 10,13 11,17C14.5,15.5 17.5,13.5 19,10C21,5.5 18,3 18,3Z" />
                        </svg>
                    </div>
                    <span class="text-2xl font-black tracking-tight text-white font-sans">FOLIA</span>
                </a>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
                    Folia transforms ordinary architectural assets into living, telemetry-integrated structures. Scale your eco-awareness with carbon verification software.
                </p>
                <div class="flex items-center gap-4 text-xs font-semibold text-white/50">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" class="hover:text-white transition-colors">Terms of Compliance</a>
                </div>
            </div>

            <!-- Middle Columns (Links) -->
            <div class="md:col-span-4 grid grid-cols-2 gap-6">
                <div class="space-y-4">
                    <h5 class="text-xs font-extrabold uppercase tracking-widest text-folia-mint">ECOSYSTEM</h5>
                    <ul class="space-y-2.5 text-xs text-white/60">
                        <li><a href="#ecosystem" class="hover:text-white transition-colors">Circadian Engine</a></li>
                        <li><a href="#ecosystem" class="hover:text-white transition-colors">Botanical Biosensors</a></li>
                        <li><a href="#sandbox" class="hover:text-white transition-colors">Chamber Simulator</a></li>
                        <li><a href="#calculator" class="hover:text-white transition-colors">Tax Incentives</a></li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h5 class="text-xs font-extrabold uppercase tracking-widest text-folia-mint">PLATFORM</h5>
                    <ul class="space-y-2.5 text-xs text-white/60">
                        <li><a href="#pricing" class="hover:text-white transition-colors">Subscription Licences</a></li>
                        <li><a href="#hero-section" class="hover:text-white transition-colors">Gateway Portal</a></li>
                        <li><a href="#faq" class="hover:text-white transition-colors">Technical Docs</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Developer API</a></li>
                    </ul>
                </div>
            </div>

            <!-- Right Column: Newsletter -->
            <div class="md:col-span-3 space-y-4">
                <h5 class="text-xs font-extrabold uppercase tracking-widest text-folia-mint font-sans">JOIN THE BIOSPHERE</h5>
                <p class="text-xs text-white/60">Subscribe to get monthly biophilic blueprints and system deployment logs.</p>
                
                <div class="relative">
                    <input type="email" placeholder="enter your email" class="w-full px-4 py-2.5 rounded-full border border-white/20 bg-white/10 text-xs placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    <button onclick="handlePortalAction('Newsletter Subscription')" class="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-[#3B5441] hover:bg-folia-emerald text-[10px] font-bold uppercase transition-all">
                        Join
                    </button>
                </div>
            </div>

        </div>

        <div class="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 relative z-10 gap-4">
            <p>© 2026 Folia Botanical Technologies. All environmental telemetry logged securely.</p>
            <div class="flex items-center gap-4">
                <a href="#" class="hover:text-white transition-colors">Twitter / X</a>
                <a href="#" class="hover:text-white transition-colors">GitHub Repository</a>
                <a href="#" class="hover:text-white transition-colors">LinkedIn Biometrics</a>
            </div>
        </div>
    </footer>


    <!-- JAVASCRIPT: PRECISE INTERACTION ENGINE AND DATA FLOWS -->
    <script>
        
        // Custom interactive toasts
        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `transform translate-y-4 opacity-0 transition-all duration-300 p-4 rounded-2xl shadow-lg border text-xs font-bold flex items-center gap-3 bg-white text-folia-charcoal border-folia-forest/10 pointer-events-auto`;
            
            const badgeColor = type === 'success' ? 'bg-emerald-500' : 'bg-red-500';
            
            toast.innerHTML = `
                <span class="w-2.5 h-2.5 rounded-full ${badgeColor}"></span>
                <p class="flex-grow">${message}</p>
            `;
            
            container.appendChild(toast);
            
            // Trigger animation
            setTimeout(() => {
                toast.classList.remove('translate-y-4', 'opacity-0');
            }, 50);
            
            // Remove after duration
            setTimeout(() => {
                toast.classList.add('translate-y-4', 'opacity-0');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3500);
        }

        // Toggle Password Input Reveal
        function togglePasswordReveal(inputId) {
            const input = document.getElementById(inputId);
            if (input.type === "password") {
                input.type = "text";
                showToast("Password shown securely.", "success");
            } else {
                input.type = "password";
            }
        }

        // Handle interactive Actions (no default alerts)
        function handlePortalAction(actionName) {
            showToast(`${actionName} action initialized successfully! Connecting to secure Folia API...`, 'success');
        }

        // Toggling between login & registration on the Desktop Form Block
        let isLoginState = true;
        function toggleFormState() {
            const container = document.getElementById('portal-form-container');
            const toggleLink = document.getElementById('form-toggle-link');
            const heading = document.getElementById('form-heading');
            
            // Animate card slide/flip out
            container.style.opacity = '0';
            container.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                if (isLoginState) {
                    heading.innerText = 'Create Account';
                    container.innerHTML = `
                        <div id="state-register" class="space-y-4 transition-all duration-300">
                            <h2 class="text-2xl font-extrabold text-folia-forest tracking-tight">Create Account</h2>
                            
                            <div class="space-y-3">
                                <div>
                                    <label class="block text-[10px] font-bold text-folia-moss uppercase tracking-widest mb-1.5">Full Corporate Name</label>
                                    <input type="text" placeholder="John Green" class="w-full px-4 py-2.5 rounded-full border border-folia-forest/15 focus:border-folia-emerald focus:outline-none focus:ring-2 focus:ring-folia-mint/30 text-xs transition-all bg-folia-cream/20">
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold text-folia-moss uppercase tracking-widest mb-1.5">Work Email Address</label>
                                    <input type="email" placeholder="name@company.com" class="w-full px-4 py-2.5 rounded-full border border-folia-forest/15 focus:border-folia-emerald focus:outline-none focus:ring-2 focus:ring-folia-mint/30 text-xs transition-all bg-folia-cream/20">
                                </div>
                            </div>

                            <button onclick="handlePortalAction('Account Signup')" class="w-full py-2.5 rounded-full bg-[#3B5441] hover:bg-folia-forest text-white text-xs font-bold transition-all shadow-md mt-2">
                                Launch Free Biosphere Trial
                            </button>
                        </div>
                    `;
                    toggleLink.innerText = 'Already have an account? Log in';
                } else {
                    heading.innerText = 'Log in';
                    container.innerHTML = `
                        <div id="state-login" class="space-y-4 transition-all duration-300">
                            <h2 class="text-2xl font-extrabold text-folia-forest tracking-tight">Log in</h2>
                            
                            <div class="space-y-3">
                                <div>
                                    <label class="block text-[10px] font-bold text-folia-moss uppercase tracking-widest mb-1.5">Login, email or phone number</label>
                                    <input type="text" placeholder="name@company.com" class="w-full px-4 py-2.5 rounded-full border border-folia-forest/15 focus:border-folia-emerald focus:outline-none focus:ring-2 focus:ring-folia-mint/30 text-xs transition-all bg-folia-cream/20">
                                </div>
                                <div>
                                    <div class="flex justify-between items-center mb-1.5">
                                        <label class="block text-[10px] font-bold text-folia-moss uppercase tracking-widest">Password</label>
                                    </div>
                                    <div class="relative">
                                        <input id="login-password-input" type="password" placeholder="••••••••••••" class="w-full px-4 py-2.5 rounded-full border border-folia-forest/15 focus:border-folia-emerald focus:outline-none focus:ring-2 focus:ring-folia-mint/30 text-xs transition-all bg-folia-cream/20 pr-10">
                                        <button type="button" onclick="togglePasswordReveal('login-password-input')" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-folia-moss hover:text-folia-forest transition-colors">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button onclick="handlePortalAction('login')" class="w-full py-2.5 rounded-full bg-[#3B5441] hover:bg-folia-forest text-white text-xs font-bold transition-all shadow-md shadow-folia-forest/20 mt-2">
                                Log in
                            </button>

                            <div class="relative flex py-2 items-center">
                                <div class="flex-grow border-t border-folia-forest/10"></div>
                                <span class="flex-shrink mx-3 text-[10px] font-bold text-folia-moss uppercase tracking-wider">or log in with</span>
                                <div class="flex-grow border-t border-folia-forest/10"></div>
                            </div>

                            <div class="grid grid-cols-2 gap-3">
                                <button onclick="handlePortalAction('Google')" class="flex items-center justify-center gap-2 py-2 border border-folia-forest/10 rounded-full hover:bg-folia-cream/50 transition-all">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24">
                                        <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.111C18.29 1.845 15.485 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.055 0 11.75-4.964 11.75-11.945 0-.805-.085-1.42-.19-1.97H12.24z"/>
                                    </svg>
                                    <span class="text-[11px] font-bold text-folia-charcoal">Google</span>
                                </button>
                                <button onclick="handlePortalAction('Office')" class="flex items-center justify-center gap-2 py-2 border border-folia-forest/10 rounded-full hover:bg-folia-cream/50 transition-all">
                                    <svg class="w-4 h-4" viewBox="0 0 23 23">
                                        <path fill="#F25022" d="M0 0h11v11H0z"/>
                                        <path fill="#7FBA00" d="M12 0h11v11H12z"/>
                                        <path fill="#00A4EF" d="M0 12h11v11H0z"/>
                                        <path fill="#FFB900" d="M12 12h11v11H12z"/>
                                    </svg>
                                    <span class="text-[11px] font-bold text-folia-charcoal">Office 365</span>
                                </button>
                            </div>
                        </div>
                    `;
                    toggleLink.innerText = "Don't have an account? Sign up";
                }
                isLoginState = !isLoginState;
                container.style.opacity = '1';
                container.style.transform = 'translateY(0px)';
            }, 300);
        }

        // Hero Layout Switcher (Simulation of Desktop View and Mobile Glassmorphic Card View)
        const btnDesktop = document.getElementById('btn-desktop-preview');
        const btnMobile = document.getElementById('btn-mobile-preview');
        const desktopView = document.getElementById('desktop-portal-view');
        const mobileView = document.getElementById('mobile-portal-view');
        const parallaxContainer = document.getElementById('parallax-container');

        btnDesktop.addEventListener('click', () => {
            // Apply Classes
            btnDesktop.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-md';
            btnMobile.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all text-folia-forest hover:bg-folia-forest/10';
            
            // Reveal View 1
            desktopView.classList.remove('opacity-0', 'pointer-events-none', 'scale-95', 'z-0');
            desktopView.classList.add('opacity-100', 'scale-100', 'z-10');
            
            // Conceal View 2
            mobileView.classList.add('opacity-0', 'pointer-events-none', 'scale-95', 'z-0');
            mobileView.classList.remove('opacity-100', 'scale-100', 'z-10');
            
            // Morph the outer aspect container
            parallaxContainer.style.maxWidth = '2xl';
            showToast('Desktop Wave System preview activated', 'success');
        });

        btnMobile.addEventListener('click', () => {
            // Apply Classes
            btnMobile.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-md';
            btnDesktop.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all text-folia-forest hover:bg-folia-forest/10';
            
            // Reveal View 2
            mobileView.classList.remove('opacity-0', 'pointer-events-none', 'scale-95', 'z-0');
            mobileView.classList.add('opacity-100', 'scale-100', 'z-10');
            
            // Conceal View 1
            desktopView.classList.add('opacity-0', 'pointer-events-none', 'scale-95', 'z-0');
            desktopView.classList.remove('opacity-100', 'scale-100', 'z-10');
            
            // Morph the outer aspect container (simulate sleek tall mobile frame aspect)
            parallaxContainer.style.maxWidth = '320px';
            showToast('Mobile Glassmorphic preview activated', 'success');
        });


        // 3D Parallax Movement Tracking for Leaf Waves
        const layer1 = document.getElementById('layer-wave-1');
        const layer2 = document.getElementById('layer-wave-2');
        const layer3 = document.getElementById('layer-wave-3');

        document.addEventListener('mousemove', (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Calculate normalization offset
            const moveX = (e.clientX - width / 2) / (width / 2);
            const moveY = (e.clientY - height / 2) / (height / 2);
            
            // Translate layers dynamically with varying weights (Simulating Papercut Depth)
            if (layer1) layer1.style.transform = `translate(${moveX * -4}px, ${moveY * -4}px)`;
            if (layer2) layer2.style.transform = `translate(${moveX * -10}px, ${moveY * -10}px)`;
            if (layer3) layer3.style.transform = `translate(${moveX * -18}px, ${moveY * -18}px)`;
        });


        // BIOPHILIC PLAYGROUND SANDBOX LOGIC
        function updateSimulator() {
            // Read value metrics
            const flora = parseInt(document.getElementById('slide-flora').value);
            const air = parseInt(document.getElementById('slide-air').value);
            const audio = parseInt(document.getElementById('slide-audio').value);

            // Set numerical displays
            document.getElementById('val-flora').innerText = `${flora}%`;
            document.getElementById('val-air').innerText = `${air}%`;
            document.getElementById('val-audio').innerText = `${audio}%`;

            // Core Telemetry Algorithm Simulation
            const projectedProductivity = Math.round((flora * 0.15) + (air * 0.1) + (audio * 0.05));
            const oxygenEmission = (((flora * 1.8) + (air * 1.2)) / 10).toFixed(1);
            const clarityIndex = Math.round((flora * 0.4) + (air * 0.3) + (audio * 0.3));

            // Set dynamic values on outputs
            document.getElementById('metric-prod').innerText = `${projectedProductivity}%`;
            document.getElementById('metric-oxygen').innerText = `+${oxygenEmission}M`;
            document.getElementById('metric-clarity').innerText = `${clarityIndex}`;

            // Adjust graphical progress bar fills
            document.getElementById('bar-prod').style.width = `${Math.min(projectedProductivity * 3, 100)}%`;
            document.getElementById('bar-oxygen').style.width = `${Math.min(parseFloat(oxygenEmission) * 4, 100)}%`;
            document.getElementById('bar-clarity').style.width = `${clarityIndex}%`;

            // Scale the background leaf mark matching density slider
            const scaleFactor = 0.5 + (flora / 100);
            document.getElementById('visual-leaf-bg').style.transform = `scale(${scaleFactor})`;

            // Simulate dynamic audio bar changes when slider changes
            simulateEqualizer();

            // Set Stability Badge
            const badge = document.getElementById('status-badge');
            const compositeRating = flora + air + audio;
            if (compositeRating > 220) {
                badge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800";
                badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> MAXIMUM BIOSYNTHESIS`;
            } else if (compositeRating > 110) {
                badge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-green-100 text-green-800";
                badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> OPTIMAL HARMONY`;
            } else {
                badge.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800";
                badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> ATTENUATED STABILITY`;
            }
        }

        // Simulated EQ audio visualizer
        function simulateEqualizer() {
            const audioVal = parseInt(document.getElementById('slide-audio').value);
            for (let i = 1; i <= 10; i++) {
                const el = document.getElementById(`eq-bar-${i}`);
                if (el) {
                    const randomVariance = Math.random() * 30;
                    const calculatedHeight = Math.max(10, Math.min(100, (audioVal * 0.7) + randomVariance));
                    el.style.height = `${calculatedHeight}%`;
                }
            }
        }

        // ROI CALCULATOR LOGIC
        let activeScopePlan = 'Sprout';
        let scopeMultiplier = 1.0;

        function adjustCalcValue(metric, delta) {
            if (metric === 'employees') {
                const current = parseInt(document.getElementById('calc-employees').innerText);
                const updated = Math.max(50, Math.min(5000, current + delta));
                document.getElementById('calc-employees').innerText = updated;
                calculateROI();
            }
        }

        function setDensityPlan(planName, multiplier) {
            activeScopePlan = planName;
            scopeMultiplier = multiplier;

            // Reset Highlight Classes
            const plans = ['sprout', 'canopy', 'biosphere'];
            plans.forEach(p => {
                const el = document.getElementById(`plan-${p}`);
                if (p === planName.toLowerCase()) {
                    el.className = "py-2.5 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-md";
                } else {
                    el.className = "py-2.5 rounded-full text-xs font-bold transition-all text-folia-forest bg-white border border-folia-forest/10 hover:bg-folia-forest/5";
                }
            });

            calculateROI();
            showToast(`Biosphere target scale set to ${planName}`, 'success');
        }

        function calculateROI() {
            const employees = parseInt(document.getElementById('calc-employees').innerText);
            const salary = parseInt(document.getElementById('calc-salary').value);
            
            // Set slider value indicator
            document.getElementById('display-salary').innerText = `$${salary.toLocaleString()}`;

            // ROI Metrics (Recovery value metrics modeled on certified wellness data)
            // Lost productivity usually totals ~15% of annual payroll hours to mental exhaustion.
            // Biophilic structures recover approx 3-5% of total lost potential.
            const productivityFactor = 0.04 * scopeMultiplier; 
            const totalRecovPayroll = employees * salary * productivityFactor;

            // Carbon credits: ~0.8 metric tons generated annually per active green tier per employee space
            const carbonCreditsCo2 = employees * 0.8 * scopeMultiplier;
            const carbonValueCredits = carbonCreditsCo2 * 92; // Avg carbon price indexing $92/ton

            // Format monetary outputs
            document.getElementById('display-productivity').innerText = `$${Math.round(totalRecovPayroll).toLocaleString()}`;
            document.getElementById('display-co2').innerText = `$${Math.round(carbonValueCredits).toLocaleString()}`;
            document.getElementById('display-total').innerText = `$${Math.round(totalRecovPayroll + carbonValueCredits).toLocaleString()}`;
        }


        // PRICING MATRIX LOGIC
        let billingCycle = 'monthly';
        function setBillingCycle(cycle) {
            billingCycle = cycle;
            
            // Update Tab styles
            const btnMonthly = document.getElementById('btn-billing-monthly');
            const btnAnnual = document.getElementById('btn-billing-annual');

            if (cycle === 'monthly') {
                btnMonthly.className = "px-5 py-2 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-sm";
                btnAnnual.className = "px-5 py-2 rounded-full text-xs font-bold transition-all text-folia-forest hover:bg-folia-forest/10";
                
                // Set Prices
                document.getElementById('price-sprout').innerText = "149";
                document.getElementById('price-canopy').innerText = "399";
                document.getElementById('price-biosphere').innerText = "899";
            } else {
                btnAnnual.className = "px-5 py-2 rounded-full text-xs font-bold transition-all bg-folia-forest text-white shadow-sm";
                btnMonthly.className = "px-5 py-2 rounded-full text-xs font-bold transition-all text-folia-forest hover:bg-folia-forest/10";

                // Set Prices with 20% discount applied
                document.getElementById('price-sprout').innerText = "119";
                document.getElementById('price-canopy').innerText = "319";
                document.getElementById('price-biosphere').innerText = "719";
            }
            showToast(`Billing cycle updated to: ${cycle}`, 'success');
        }


        // FAQ COLLAPSIBLE MECHANICS
        function toggleFaq(index) {
            const body = document.getElementById(`faq-body-${index}`);
            const icon = document.getElementById(`faq-icon-${index}`);
            
            if (body.style.maxHeight === '0px' || !body.style.maxHeight) {
                // Open Faq Body
                body.style.maxHeight = `${body.scrollHeight}px`;
                icon.innerText = "−";
                icon.style.transform = "rotate(180deg)";
            } else {
                // Close Faq Body
                body.style.maxHeight = "0px";
                icon.innerText = "+";
                icon.style.transform = "rotate(0deg)";
            }
        }


        // On Window Load Initialization Sequences
        window.onload = function () {
            // Start the ambient equalizer simulation loop
            setInterval(simulateEqualizer, 1000);
            
            // Run baseline calculations
            updateSimulator();
            calculateROI();
        };

    </script>
</body>
</html>
8
import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, X, ArrowRight, Github, Twitter, Mail, CheckCircle2 } from 'lucide-react';

// --- CUSTOM SVG ASSETS ---
// These SVGs are hand-crafted to match the vibe of the inspiration image

const CircuitBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10 10 L40 10 L50 20 L50 80 L60 90 L90 90" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="2" fill="white" />
        <circle cx="90" cy="90" r="2" fill="white" />
        <path d="M20 50 L30 40 L70 40 L80 30" stroke="white" strokeWidth="1" fill="none" />
        <circle cx="20" cy="50" r="2" fill="white" />
        <circle cx="80" cy="30" r="2" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

const AvatarIcon = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full object-cover bg-[#d4d4d4]" xmlns="http://www.w3.org/2000/svg">
    {/* Bear Base */}
    <path d="M 40,120 C 40,60 60,30 100,30 C 140,30 160,60 160,120" fill="#f8f9fa" />
    <circle cx="60" cy="40" r="15" fill="#f8f9fa" />
    <circle cx="140" cy="40" r="15" fill="#f8f9fa" />
    {/* Sunglasses */}
    <path d="M 45,65 Q 100,75 155,65 L 145,95 Q 100,105 55,95 Z" fill="#333" />
    <path d="M 45,65 Q 100,75 155,65" fill="none" stroke="#555" strokeWidth="4" />
    <circle cx="75" cy="80" r="8" fill="#1a1a1a" />
    <circle cx="125" cy="80" r="8" fill="#1a1a1a" />
    {/* Nose/Snout */}
    <ellipse cx="100" cy="105" rx="15" ry="10" fill="#e2e8f0" />
    <ellipse cx="100" cy="102" rx="6" ry="4" fill="#111" />
    {/* Paws */}
    <path d="M 50,110 C 30,110 30,130 50,130 Z" fill="#f8f9fa" />
    <path d="M 150,110 C 170,110 170,130 150,130 Z" fill="#f8f9fa" />
  </svg>
);

const BearStackSVG = () => (
  <svg viewBox="0 0 300 350" className="w-full max-w-[280px] drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
    {/* Bottom Bear (Polar - White) */}
    <g transform="translate(0, 220)">
      <rect x="50" y="20" width="200" height="100" rx="40" fill="#ffffff" stroke="#333" strokeWidth="4"/>
      <circle cx="80" cy="20" r="15" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <circle cx="220" cy="20" r="15" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <ellipse cx="230" cy="60" rx="4" ry="6" fill="#333" />
      <ellipse cx="250" cy="65" rx="8" ry="6" fill="#111" />
      <path d="M 80,110 L 80,140 A 10,10 0 0,0 100,140 L 100,110" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <path d="M 200,110 L 200,140 A 10,10 0 0,0 220,140 L 220,110" fill="#ffffff" stroke="#333" strokeWidth="4" />
      <path d="M 120,110 L 120,130 A 10,10 0 0,0 140,130 L 140,110" fill="#ffffff" stroke="#333" strokeWidth="4" />
    </g>
    
    {/* Middle Bear (Panda - Black/White) */}
    <g transform="translate(10, 130)">
      <rect x="50" y="20" width="180" height="95" rx="40" fill="#ffffff" stroke="#333" strokeWidth="4"/>
      <path d="M 90,20 L 190,20 L 190,115 L 90,115 Z" fill="#333" />
      <circle cx="70" cy="15" r="15" fill="#333" stroke="#333" strokeWidth="4" />
      <circle cx="210" cy="15" r="15" fill="#333" stroke="#333" strokeWidth="4" />
      <circle cx="215" cy="55" r="12" fill="#333" />
      <ellipse cx="215" cy="55" rx="3" ry="5" fill="#fff" />
      <ellipse cx="230" cy="65" rx="6" ry="4" fill="#111" />
      <path d="M 80,100 L 80,130 A 10,10 0 0,0 100,130 L 100,100" fill="#333" stroke="#333" strokeWidth="4" />
      <path d="M 190,100 L 190,130 A 10,10 0 0,0 210,130 L 210,100" fill="#333" stroke="#333" strokeWidth="4" />
    </g>

    {/* Top Bear (Grizzly - Brown/Grey) */}
    <g transform="translate(20, 50)">
      <rect x="50" y="20" width="160" height="85" rx="35" fill="#888888" stroke="#333" strokeWidth="4"/>
      <circle cx="70" cy="15" r="12" fill="#888888" stroke="#333" strokeWidth="4" />
      <circle cx="190" cy="15" r="12" fill="#888888" stroke="#333" strokeWidth="4" />
      <ellipse cx="195" cy="50" rx="3" ry="5" fill="#333" />
      <ellipse cx="210" cy="55" rx="6" ry="4" fill="#111" />
      <path d="M 70,90 L 70,115 A 10,10 0 0,0 90,115 L 90,90" fill="#888888" stroke="#333" strokeWidth="4" />
      <path d="M 170,90 L 170,115 A 10,10 0 0,0 190,115 L 190,90" fill="#888888" stroke="#333" strokeWidth="4" />
    </g>
  </svg>
);


// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('PROFILE');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navItems = ['ACTIVITY', 'PROFILE', 'WIKI', 'BLOG', 'CONTACTS'];

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#222324] text-white font-sans overflow-x-hidden selection:bg-[#bd404a] selection:text-white relative">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Montserrat:wght@400;600;800&display=swap');
        
        .font-quirky { font-family: 'Fredoka One', cursive; letter-spacing: 1px; }
        .font-body { font-family: 'Montserrat', sans-serif; }
        
        .blob-1 { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        .blob-2 { border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; }
        
        .clip-slanted { clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%); }
        @media (max-width: 768px) {
          .clip-slanted { clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />

      {/* Global Background Elements */}
      <CircuitBackground />
      <div className="absolute top-20 right-[-10vw] w-64 h-64 bg-[#bd404a] blob-1 opacity-20 blur-3xl z-0 pointer-events-none"></div>

      {/* --- HEADER --- */}
      <header className="relative z-50 flex justify-between items-center px-6 py-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-start cursor-pointer transition-transform hover:scale-105" onClick={() => setCurrentPage('PROFILE')}>
          <h1 className="font-quirky text-[#bd404a] text-5xl md:text-6xl leading-none drop-shadow-md">
            Acti<span className="text-3xl relative top-[-15px] ml-1">#1</span>
          </h1>
          <span className="font-quirky text-[#bd404a] text-3xl ml-8 relative top-[-10px] drop-shadow-md">Vidad</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-2 bg-black/20 p-1.5 rounded-full backdrop-blur-sm border border-white/5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`px-5 py-2 text-sm font-bold tracking-wider rounded-full transition-all duration-300 ${
                currentPage === item 
                  ? 'bg-[#bd404a] text-white shadow-[0_0_15px_rgba(189,64,74,0.4)]' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white hover:text-[#bd404a] transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#222324]/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center space-y-8`}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              setCurrentPage(item);
              setIsMobileMenuOpen(false);
            }}
            className={`text-3xl font-quirky tracking-widest transition-colors ${
              currentPage === item ? 'text-[#bd404a]' : 'text-gray-400 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* --- PAGE ROUTING --- */}
      <main className="relative z-10 w-full pb-20">
        {currentPage === 'PROFILE' && <ProfileView handleFollow={handleFollow} isFollowing={isFollowing} />}
        {currentPage === 'ACTIVITY' && <ActivityView />}
        {currentPage === 'CONTACTS' && <ContactsView />}
        {(currentPage === 'WIKI' || currentPage === 'BLOG') && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="font-quirky text-5xl text-[#bd404a] mb-4">COMING SOON</h2>
            <p className="font-body text-xl text-gray-400 max-w-md">
              The {currentPage} module is currently compiling. Check back after the next deployment!
            </p>
          </div>
        )}
      </main>

      {/* --- TOAST NOTIFICATION --- */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#bd404a] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transition-all duration-300 z-50 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <CheckCircle2 size={18} />
        {isFollowing ? 'Tracking engaged!' : 'Tracking disabled.'}
      </div>
    </div>
  );
}


// ==========================================
// VIEWS (PAGES)
// ==========================================

function ProfileView({ handleFollow, isFollowing }) {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
      
      {/* 1. HERO SECTION (Dark) */}
      <section className="w-full flex flex-col items-center pt-8 pb-32 px-4 relative">
        <div className="text-center mb-2 tracking-[0.2em] text-xs font-bold text-gray-400">
          TEMPLATE BY CREATOR
        </div>
        
        {/* Avatar Frame Container */}
        <div className="relative group animate-float">
          {/* Outer thick frame */}
          <div className="w-72 h-48 md:w-80 md:h-56 bg-[#bd404a] rounded-[2rem] p-3 shadow-2xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {/* Inner screen */}
            <div className="w-full h-full bg-[#181818] rounded-2xl overflow-hidden border-4 border-[#222324] relative">
               <AvatarIcon />
               {/* Scanline effect */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.05))] opacity-50 bg-[length:100%_4px] pointer-events-none"></div>
            </div>
          </div>
          {/* Decorative Crosses */}
          <div className="absolute -right-12 bottom-0 text-[#bd404a]/30 text-5xl font-light select-none rotate-45">+</div>
        </div>

        {/* Name Plate */}
        <div className="bg-[#bd404a] text-white font-quirky text-3xl md:text-4xl py-2 px-12 rounded-full mt-[-20px] relative z-10 shadow-[0_10px_20px_rgba(189,64,74,0.3)]">
          POLAR CODE
        </div>

        {/* Badges */}
        <div className="flex gap-4 mt-8">
          {['INTJ-A', 'FRONTEND', 'LVL 23'].map((tag, i) => (
            <div key={i} className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#bd404a] flex items-center justify-center font-quirky text-sm md:text-base text-gray-200 transition-all duration-300 hover:bg-[#bd404a] hover:text-white cursor-default shadow-lg">
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* 2. SLANTED CONTENT SECTION (Light Beige) */}
      <section className="w-full bg-[#ebe7dc] text-[#222324] relative clip-slanted -mt-24 pb-32 pt-32 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between z-20">
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 flex flex-col gap-1.5 opacity-40">
          <div className="w-12 h-1 bg-[#bd404a] rounded-full"></div>
          <div className="w-8 h-1 bg-[#bd404a] rounded-full"></div>
        </div>
        <div className="absolute -left-10 top-1/3 w-32 h-64 bg-[#bd404a] blob-1"></div>
        <div className="absolute -right-16 bottom-1/4 w-48 h-48 bg-[#bd404a] blob-2"></div>

        {/* Text Content */}
        <div className="flex-1 max-w-xl relative z-10 font-body font-bold space-y-12">
          
          <div className="relative">
            <span className="absolute -left-10 md:-left-16 -top-6 text-6xl md:text-8xl font-quirky text-[#bd404a]">1</span>
            <p className="text-sm md:text-base leading-relaxed tracking-wide">
              I CHOSE THIS PERSONA BECAUSE IT REPRESENTS MY COOL, CALM DEMEANOR WHEN DEBUGGING COMPLEX SYSTEMS. PLUS, POLAR IS THE DEFINITION OF SOMEONE CHILL AND CAPABLE AT THE SAME TIME.
            </p>
          </div>

          <div className="relative md:ml-12">
            <span className="absolute -right-8 md:-right-16 -top-6 text-6xl md:text-8xl font-quirky text-[#bd404a]">2</span>
            <p className="text-sm md:text-base leading-relaxed tracking-wide">
              I APPRECIATE CLEAN CODE, ROBUST ARCHITECTURE, AND HOW THIS CHARACTER TAKES CARE OF THEIR TEAM. ALSO, I REALLY ENJOY BREWING THE PERFECT CUP OF COFFEE BEFORE A SPRINT.
            </p>
          </div>

        </div>

        {/* Illustration & Action Area */}
        <div className="flex-1 flex flex-col items-center mt-16 md:mt-0 relative z-10">
          <BearStackSVG />
          
          <div className="mt-8 flex items-center gap-4 bg-white/50 p-4 rounded-3xl backdrop-blur-sm border border-[#bd404a]/20 shadow-lg">
            <button 
              onClick={handleFollow}
              className={`font-quirky px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                isFollowing 
                ? 'bg-gray-800 text-white shadow-inner' 
                : 'bg-[#bd404a] text-white hover:bg-[#a0313c] hover:shadow-[0_4px_15px_rgba(189,64,74,0.5)]'
              }`}
            >
              {isFollowing ? 'TRACKING' : 'FOLLOW'}
            </button>
            <div className="flex flex-col">
              <span className="font-quirky text-xl text-[#bd404a] leading-none">POLAR</span>
              <span className="text-xs font-bold text-gray-500">@SATURNO_DEV</span>
            </div>
            <Bell className={`w-6 h-6 ml-2 cursor-pointer transition-colors ${isFollowing ? 'text-[#bd404a]' : 'text-gray-400 hover:text-[#bd404a]'}`} />
          </div>
        </div>

      </section>

      {/* 3. BOTTOM SECTION (Dark) */}
      <section className="w-full bg-[#181818] pt-32 pb-24 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between relative -mt-16 z-10">
        
        {/* Search Icon */}
        <div className="absolute top-24 left-10 md:left-20">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-[#bd404a] transition-colors group">
            <Search className="text-gray-400 group-hover:text-white" size={20} />
          </div>
        </div>

        <div className="flex-1 mt-12 md:mt-0 relative">
           <span className="absolute left-0 -top-16 text-6xl md:text-8xl font-quirky text-[#bd404a] opacity-50">3</span>
           <p className="font-body font-bold text-sm md:text-lg tracking-wider text-gray-200 mt-8 max-w-sm">
             YEP, I FEEL COMPLETELY IDENTIFIED WITH THIS DEVELOPMENT PERSONA.
           </p>
           <h3 className="font-quirky text-5xl text-[#bd404a] mt-8 opacity-80">POLAR</h3>
        </div>

        <div className="flex-1 mt-16 md:mt-0 relative">
          <ul className="font-body font-bold text-sm md:text-base text-gray-300 space-y-4 tracking-wide relative z-10">
            <li className="flex items-start"><span className="text-[#bd404a] mr-2">1.</span> SILENT BUT DEADLY CODER.</li>
            <li className="flex items-start"><span className="text-[#bd404a] mr-2">2.</span> FIERCELY PROTECTIVE OF REPO ARCHITECTURE.</li>
            <li className="flex items-start"><span className="text-[#bd404a] mr-2">3.</span> WILL NOT FORGIVE THOSE WHO PUSH TO MAIN WITHOUT REVIEW.</li>
          </ul>
          <span className="absolute right-0 bottom-0 text-6xl md:text-8xl font-quirky text-[#bd404a] opacity-50">4</span>
        </div>

        {/* Footer Credit */}
        <div className="absolute bottom-6 w-full text-center left-0 text-xs font-bold tracking-widest text-gray-600">
          PORTFOLIO _ DESIGN BY PERSONA TEMPLATES
        </div>
      </section>
    </div>
  );
}

// --- ACTIVITY PAGE ---
function ActivityView() {
  const activities = [
    { title: "Deployed V2 Core Architecture", time: "2 hours ago", type: "code", desc: "Refactored the main state engine to improve render times by 40%." },
    { title: "Design System Update", time: "Yesterday", type: "design", desc: "Added new blob variations and unified the red accent color scale." },
    { title: "Reached Level 23", time: "3 days ago", type: "milestone", desc: "Another year of surviving production bugs and drinking excessive coffee." },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-12 px-6 animate-in slide-in-from-bottom-8 duration-500">
      <h2 className="font-quirky text-5xl text-[#bd404a] mb-12 flex items-center gap-4">
        RECENT ACTIVITY <span className="text-xl bg-[#bd404a] text-white px-3 py-1 rounded-full">3</span>
      </h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#bd404a] before:to-transparent">
        {activities.map((act, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#222324] bg-[#bd404a] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125">
               {act.type === 'code' ? <Terminal size={16} /> : act.type === 'design' ? <Search size={16} /> : <CheckCircle2 size={16} />}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#181818] p-6 rounded-2xl border border-white/5 hover:border-[#bd404a]/50 transition-colors shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-quirky text-xl text-white">{act.title}</h3>
                <span className="text-xs font-bold text-[#bd404a]">{act.time}</span>
              </div>
              <p className="font-body text-gray-400 text-sm leading-relaxed">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- CONTACTS PAGE ---
function ContactsView() {
  return (
    <div className="max-w-6xl mx-auto pt-12 px-6 animate-in slide-in-from-right-8 duration-500 pb-20">
      <div className="flex flex-col md:flex-row gap-12 bg-[#181818] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
        {/* BG Accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#bd404a] rounded-full blur-[100px] opacity-20"></div>

        {/* Left Col */}
        <div className="flex-1 space-y-8 z-10">
          <div>
             <h2 className="font-quirky text-5xl md:text-6xl text-white mb-4">LET'S<br/><span className="text-[#bd404a]">CONNECT</span></h2>
             <p className="font-body text-gray-400 max-w-sm">Ready to build something awesome? Drop a message in the terminal below.</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#bd404a]">
                <Github size={20} />
              </div>
              <span className="font-bold font-body">github.com/polarcode</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#bd404a]">
                <Twitter size={20} />
              </div>
              <span className="font-bold font-body">@saturno_dev</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer w-max">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#bd404a]">
                <Mail size={20} />
              </div>
              <span className="font-bold font-body">ping@polar.dev</span>
            </div>
          </div>
        </div>

        {/* Right Col - Form */}
        <div className="flex-1 z-10">
          <form className="space-y-6 bg-[#222324] p-8 rounded-3xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-quirky text-sm text-gray-400 tracking-wider">HANDLE / NAME</label>
              <input type="text" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bd404a] transition-colors font-body" placeholder="e.g. Neo" />
            </div>
            <div className="space-y-2">
              <label className="font-quirky text-sm text-gray-400 tracking-wider">COMMLINK / EMAIL</label>
              <input type="email" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bd404a] transition-colors font-body" placeholder="neo@matrix.net" />
            </div>
            <div className="space-y-2">
              <label className="font-quirky text-sm text-gray-400 tracking-wider">TRANSMISSION</label>
              <textarea rows="4" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bd404a] transition-colors font-body resize-none" placeholder="What's your project?"></textarea>
            </div>
            <button className="w-full bg-[#bd404a] text-white font-quirky py-4 rounded-xl hover:bg-[#a0313c] transition-colors flex items-center justify-center gap-2">
              SEND DATA <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
9
import React, { useState, useEffect } from 'react';
import { Play, Menu, X, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

// --- Assets ---
// Using high-quality Unsplash images that match the passionate, dramatic, and vintage feel of the inspiration.
const IMAGES = {
  heroDancer: "https://images.unsplash.com/photo-1549487228-568ebba68df5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // Dancer in red
  fanOrnate: "https://images.unsplash.com/photo-1615671524827-c1fe3973cb45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Fan
  rosePetals: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Roses
  bwDancer1: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // B&W
  bwDancer2: "https://images.unsplash.com/photo-1518834107812-6a364724c522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // B&W face/hands
  polkaDot: "https://images.unsplash.com/photo-1565593683838-89c566fbca3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Dress details
  details1: "https://images.unsplash.com/photo-1469530467727-463e263ab26f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Shoes/details
  details2: "https://images.unsplash.com/photo-1504609774528-6949db2000ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  details3: "https://images.unsplash.com/photo-1533147670608-2a2f9776d3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
};

// --- Theme Colors ---
const theme = {
  bgCream: '#f3efe9',
  bgRed: '#7b1113',
  bgDarkRed: '#5a0a0e',
  textDark: '#1a1a1a',
  textLight: '#f3efe9',
};

// --- Reusable Components ---

const SectionHeading = ({ number, title, dark = false }) => (
  <div className={`flex items-center space-x-4 mb-12 ${dark ? 'text-[#f3efe9]' : 'text-[#7b1113]'}`}>
    <span className="font-serif text-3xl md:text-5xl tracking-widest font-light">[{number}]</span>
    <h2 className="font-serif text-4xl md:text-6xl tracking-widest uppercase">{title}</h2>
  </div>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'History', id: 'history' },
    { name: 'About Dance', id: 'about' },
    { name: 'Polka Dot', id: 'style' },
    { name: 'Details', id: 'details' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#f3efe9]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-sm font-serif tracking-widest cursor-pointer text-[#7b1113]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          RU | EN
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm tracking-widest lowercase font-serif hover:text-[#7b1113] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#7b1113] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#7b1113]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#f3efe9] z-40 transition-transform duration-500 flex flex-col items-center justify-center space-y-8 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-3xl tracking-widest lowercase font-serif text-[#7b1113]"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

// --- Main Page Sections ---

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-4">
    {/* Big Background Text */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
      <h1 className="text-[20vw] font-serif text-[#7b1113] whitespace-nowrap tracking-tighter leading-none">
        FLAMENCO
      </h1>
    </div>

    {/* Main Content */}
    <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
      
      {/* Title */}
      <div className="relative w-full flex justify-center mb-8 md:mb-0">
        <h1 className="text-7xl md:text-[12rem] font-serif text-[#7b1113] tracking-wider leading-none z-20 mix-blend-multiply flex items-center">
          F<span className="inline-block w-8 md:w-16"></span>MENCO
          {/* Play Button matching inspiration */}
          <div className="absolute right-0 md:right-10 top-0 md:top-10 w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#7b1113] flex items-center justify-center cursor-pointer hover:bg-[#7b1113] hover:text-[#f3efe9] transition-all text-[#7b1113]">
             <Play className="ml-1" size={32} />
          </div>
        </h1>
      </div>

      <p className="font-serif italic text-sm md:text-lg text-[#7b1113] text-center mb-8 z-20">
        [passion and soul from Andalusia]
      </p>

      {/* Center Image overlapping text slightly */}
      <div className="relative w-full max-w-2xl aspect-[4/3] md:aspect-[16/9] -mt-10 md:-mt-32 z-10">
        <img 
          src={IMAGES.heroDancer} 
          alt="Flamenco Dancer" 
          className="w-full h-full object-cover rounded-sm shadow-2xl sepia-[.2] contrast-125"
        />
        {/* Decorative elements simulating roses from original */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover mix-blend-multiply opacity-80 rounded-full blur-[2px]"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')] bg-cover mix-blend-multiply opacity-60 rounded-full blur-[4px]"></div>
      </div>
    </div>
  </section>
);

const HistorySection = () => (
  <section id="history" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
    <SectionHeading number="1" title="History" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 font-serif text-[#1a1a1a] text-lg leading-relaxed md:pr-12">
        <p>
          The flamenco genre emerged at the end of the 18th century in cities 
          and agrarian towns of Baja Andalusia.
        </p>
        <p className="pl-8 border-l-2 border-[#7b1113] italic text-xl">
          It appeared as a modern art form from the convergence of the urban subaltern groups, 
          Gitano communities, and journeyman of Andalusia that formed the marginalized Flamenco 
          artistic working class who established Flamenco as a singular art form, marked from 
          the beginning by the Gitano brand.
        </p>
        <p>
          Andalusia was the origin and cradle of the early Flamenco cantaores and of the three 
          or four dozen Gitano families who created and cultivated Flamenco.
        </p>
      </div>
      
      <div className="relative">
        <img 
          src={IMAGES.fanOrnate} 
          alt="Ornate Flamenco Fan" 
          className="w-full object-cover rounded-t-[50%] shadow-xl"
        />
        <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[#7b1113] rounded-full mix-blend-multiply opacity-40 blur-xl"></div>
      </div>
    </div>
  </section>
);

const AboutDanceSection = () => (
  <section id="about" className="bg-[#7b1113] text-[#f3efe9] py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading number="2" title="About Dance" dark />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        
        {/* Left text column */}
        <div className="lg:col-span-4 space-y-12 font-serif">
          <p className="text-xl italic">
            Flamenco is a perfect way to channel emotions and above all, to generate them.
          </p>
          
          {/* Small B&W image inset */}
          <img 
            src={IMAGES.bwDancer1} 
            alt="Dancer Silhouette" 
            className="w-full h-64 object-cover grayscale contrast-150"
          />
        </div>

        {/* Center/Right text & large image */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="space-y-8 font-serif leading-relaxed text-sm md:text-base">
             <p>
              In fact the performers have a great capacity for expression so they will transmit 
              all their emotions through body language, encompassing passion, anger, sadness, 
              pain, fear and joy.
            </p>
            <p>
              Thus creating an indestructible connection with the audience where you will feel 
              immediately involved in this "set" of emotions. The intricate footwork, the precise 
              hand movements, and the intense facial expressions are all part of this visceral language.
            </p>
          </div>
          
          <img 
            src={IMAGES.bwDancer2} 
            alt="Dancer Expression" 
            className="w-full h-[500px] object-cover grayscale contrast-125 rounded-tl-[40px] rounded-br-[40px]"
          />
        </div>
      </div>
    </div>
  </section>
);

const PolkaDotSection = () => (
  <section id="style" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#f3efe9]">
    <SectionHeading number="3" title="Why Polka Dot?" />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="md:col-span-1 space-y-6 font-serif text-[#1a1a1a]">
        <p className="italic font-semibold border-b border-[#7b1113] pb-4">
          The first polka dot appeared in the 18th century as a printing error and, at first, 
          they were not very successful.
        </p>
        <p className="text-sm leading-relaxed">
          The origin of the "traje de flamenca" (flamenco dress) goes back to the late 19th and early 20th 
          centuries. Peasant women, mostly of Roma descent, wore simple dresses, often with ruffles, adorned with an 
          apron to attend the cattle fairs in Andalusia. 
        </p>
        <p className="text-sm leading-relaxed">
           Over time, the distinctive polka dot (lunares) pattern, initially seen as a flaw in fabric printing, 
           was embraced by these women for its striking contrast and playful energy, eventually becoming the 
           iconic symbol of Flamenco fashion worldwide.
        </p>
      </div>
      
      <div className="md:col-span-2 h-[400px] md:h-auto">
        <img 
          src={IMAGES.polkaDot} 
          alt="Polka Dot Dresses" 
          className="w-full h-full object-cover object-top sepia-[.1]"
        />
      </div>
    </div>
  </section>
);

const DetailsSection = () => (
  <section id="details" className="bg-[#5a0a0e] text-[#f3efe9] py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <SectionHeading number="4" title="Details" dark />
      
      <p className="font-serif italic mb-12 max-w-xl">
        There are a number of details that distinguish Flamenco from other dance styles.
      </p>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="space-y-4">
          <img src={IMAGES.details1} alt="Detail" className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">01. Footwork</p>
        </div>
        
        <div className="space-y-4 md:mt-12">
          <img src={IMAGES.bwDancer1} alt="Detail" className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">02. Posture</p>
        </div>
        
        <div className="space-y-4">
          <img src={IMAGES.details2} alt="Detail" className="w-full h-48 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">03. The Dress</p>
        </div>
        
        <div className="space-y-4 md:mt-24">
          <img src={IMAGES.details3} alt="Detail" className="w-full h-48 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <p className="text-xs font-serif uppercase tracking-widest text-[#f3efe9]/70">04. The Castanets</p>
        </div>
      </div>
      
      <div className="mt-24 flex justify-center">
         <button className="border border-[#f3efe9] px-12 py-4 font-serif uppercase tracking-widest hover:bg-[#f3efe9] hover:text-[#5a0a0e] transition-colors flex items-center group">
           Discover Exhibition
           <ArrowRight className="ml-4 transform group-hover:translate-x-2 transition-transform" size={20} />
         </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-[#f3efe9] py-16 px-6 md:px-12 text-center md:text-left">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      <div>
        <h2 className="font-serif text-3xl tracking-widest uppercase mb-4">Flamenco</h2>
        <p className="text-sm text-gray-400 font-serif italic">Global Cultural Exhibition 2026</p>
      </div>
      
      <div className="flex justify-center space-x-8">
        <a href="#" className="hover:text-[#7b1113] transition-colors"><Instagram /></a>
        <a href="#" className="hover:text-[#7b1113] transition-colors"><Facebook /></a>
        <a href="#" className="hover:text-[#7b1113] transition-colors"><Twitter /></a>
      </div>
      
      <div className="md:text-right font-serif text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Alma Andaluza.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  // Inject Google Fonts for the specific editorial look
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    // Apply a base font, override with Playfair for headings via utility classes
    <div className="font-['Inter',sans-serif] bg-[#f3efe9] text-[#1a1a1a] selection:bg-[#7b1113] selection:text-[#f3efe9]">
      <style dangerouslySetInnerHTML={{__html: `
        .font-serif { font-family: 'Playfair Display', serif; }
        html { scroll-behavior: smooth; }
        /* Custom scrollbar for aesthetic */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f3efe9; }
        ::-webkit-scrollbar-thumb { background: #7b1113; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #5a0a0e; }
      `}} />
      
      <NavBar />
      
      <main>
        <HeroSection />
        <HistorySection />
        <AboutDanceSection />
        <PolkaDotSection />
        <DetailsSection />
      </main>

      <Footer />
    </div>
  );
}
10
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Globe, Clock, MapPin, Ticket, Users, ShoppingBag, 
  ArrowRight, Menu, X, ChevronRight, Play, ArrowUpRight
} from 'lucide-react';

// --- CUSTOM HOOKS ---
// Hook for scroll-triggered fade-in animations
const useFadeIn = () => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your system, this triggers once when entering viewport
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [domRef, isVisible];
};

// --- COMPONENTS ---

const FadeInSection = ({ children, delay = "0ms", className = "" }) => {
  const [ref, isVisible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

// Shared Floating Side Menu (Gold Box)
const FloatingSideMenu = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col bg-[#d4b068] text-white">
    <button className="p-4 hover:bg-[#c29d55] transition-colors border-b border-white/20 group relative">
      <Ticket size={20} />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Buy Tickets</span>
    </button>
    <button className="p-4 hover:bg-[#c29d55] transition-colors border-b border-white/20 group relative">
      <Users size={20} />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Membership</span>
    </button>
    <button className="p-4 hover:bg-[#c29d55] transition-colors group relative">
      <ShoppingBag size={20} />
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Museum Shop</span>
    </button>
  </div>
);

// Top Information Bar
const TopBar = () => (
  <div className="w-full bg-[#1a1a1a] text-[#a0a0a0] text-xs py-2 px-6 flex justify-between items-center hidden md:flex font-sans">
    <div className="flex items-center gap-6">
      <span className="flex items-center gap-2"><Clock size={12} /> THE MUSEUM IS OPEN TODAY 10 AM - 5 PM</span>
    </div>
    <div className="flex items-center gap-6">
      <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><MapPin size={12} /> 36TH ART, AVENUE, NY 10018</span>
      <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Search size={12} /> SEARCH</span>
      <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Globe size={12} /> ENGLISH</span>
    </div>
  </div>
);

// Main Navigation
const Header = ({ currentPath, navigate, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header needs to be transparent on Home hero, but solid elsewhere or when scrolled
  const isSolid = isScrolled || currentPath !== 'home';
  
  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'exhibitions', label: 'EXHIBITIONS' },
    { id: 'collections', label: 'COLLECTIONS' },
    { id: 'about', label: 'ABOUT US' },
  ];

  const rightLinks = [
    { id: 'pages', label: 'PAGES' },
    { id: 'blog', label: 'BLOG' },
    { id: 'shop', label: 'SHOP' },
    { id: 'contacts', label: 'CONTACTS' },
    { id: 'visit', label: 'VISIT' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isSolid ? 'bg-[#1a1a1a] shadow-lg py-4' : 'bg-transparent py-6'
        } ${currentPath === 'home' && !isScrolled ? 'top-8' : 'top-0'}`} // Account for TopBar on home
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => navigate(link.id)}
                className={`text-xs font-bold tracking-widest transition-colors hover:text-[#d4b068] ${
                  currentPath === link.id ? 'text-[#d4b068]' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Logo */}
          <div 
            className="text-3xl font-serif font-bold tracking-wider text-white cursor-pointer"
            onClick={() => navigate('home')}
          >
            ozeum
          </div>

          {/* Right Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {rightLinks.map(link => (
              <button 
                key={link.id}
                className="text-xs font-bold tracking-widest text-white hover:text-[#d4b068] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a] z-40 pt-24 px-6 flex flex-col gap-6 overflow-y-auto pb-10">
          {[...navLinks, ...rightLinks].map(link => (
            <button
              key={link.id}
              onClick={() => {
                navigate(link.id);
                setMobileMenuOpen(false);
              }}
              className="text-xl font-serif text-white hover:text-[#d4b068] text-left border-b border-white/10 pb-4"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

const Footer = () => (
  <footer className="bg-[#111] text-white py-16 px-6 lg:px-24 font-sans">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <h3 className="font-serif text-2xl mb-6">ozeum</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          A prominent place among the leading historical and cultural museums due to the high value of collection presented.
        </p>
      </div>
      <div>
        <h4 className="font-bold tracking-widest text-sm mb-6 uppercase">Links</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Exhibitions</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Collections</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Visitor Info</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold tracking-widest text-sm mb-6 uppercase">Legal</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-[#d4b068] transition-colors">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold tracking-widest text-sm mb-6 uppercase">Newsletter</h4>
        <p className="text-gray-400 text-sm mb-4">Subscribe to receive our latest updates.</p>
        <div className="flex border-b border-gray-600 pb-2">
          <input type="email" placeholder="Your Email" className="bg-transparent outline-none flex-1 text-sm text-white" />
          <button className="text-[#d4b068] hover:text-white transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
      © {new Date().getFullYear()} Ozeum Museum. Designed for Inspiration.
    </div>
  </footer>
);

// --- PAGES ---

const HomePage = ({ navigate }) => {
  return (
    <div className="bg-[#f5f3ef] min-h-screen font-sans text-black">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=2500&auto=format&fit=crop" 
            alt="Classic Art Gallery" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16">
          <FadeInSection>
            <p className="text-sm md:text-base tracking-widest uppercase mb-4 text-gray-300">September 21, 2023 - October 20, 2024</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-10 shadow-sm">
              Bernard van Orley At Saint-Géry
            </h1>
            <button className="bg-[#f5f3ef] text-black rounded-full px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#d4b068] hover:text-white transition-all duration-300">
              Read More
            </button>
          </FadeInSection>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-24 px-6 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeInSection className="max-w-lg">
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
              Welcome To Ozeum<br/>Art And History<br/>Museum
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-serif italic">
              Ozeum occupies a prominent place among the leading historical and cultural museums due to the high value of collection presented and constant activity in spheres of research, exhibitions and cultural education.
            </p>
            <button 
              onClick={() => navigate('about')}
              className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:text-[#d4b068] transition-colors"
            >
              More About <ArrowRight size={16} />
            </button>
          </FadeInSection>
          <FadeInSection delay="200ms" className="relative">
            {/* Sketch style image simulating the design */}
            <img 
              src="https://images.unsplash.com/photo-1578306911674-8931168a2114?q=80&w=1200&auto=format&fit=crop" 
              alt="Historical Sketch" 
              className="w-full h-auto object-cover rounded mix-blend-multiply opacity-80"
              style={{ filter: 'sepia(40%) grayscale(50%) contrast(120%)' }}
            />
          </FadeInSection>
        </div>
      </section>

      {/* UPCOMING EXHIBITIONS */}
      <section className="py-24 px-6 lg:px-24 max-w-[1600px] mx-auto">
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-black/20 pb-6">
            <h2 className="font-serif text-3xl md:text-4xl">Upcoming Exhibitions</h2>
            <button 
              onClick={() => navigate('exhibitions')}
              className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:text-[#d4b068] transition-colors mt-4 md:mt-0"
            >
              View All Exhibitions <ArrowRight size={16} />
            </button>
          </div>
        </FadeInSection>

        <FadeInSection delay="100ms">
          {/* Main feature image spanning width */}
          <div className="w-full mb-16 overflow-hidden bg-black">
             <img 
              src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=2000&auto=format&fit=crop" 
              alt="Gallery Wall" 
              className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </FadeInSection>

        {/* Exhibition Items List */}
        <div className="space-y-0">
          {/* Item 1 */}
          <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-black/10 group">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#d4b068] transition-colors">Bernard van Orley At Saint-Géry</h3>
              <p className="text-xs tracking-wider uppercase text-gray-500">September 21, 2023 - October 20, 2024</p>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                Especially for the occasion, Ozeum is setting up the tapestries and paintings by Bernard van Orley from the series of Jacob's History and the first tapestry from the series Our Blessed Lady of the Sablon.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
              <button className="rounded-full border border-black/30 px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                More Info
              </button>
            </div>
          </FadeInSection>

          {/* Item 2 */}
          <FadeInSection delay="100ms" className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-black/10 group">
            <div className="lg:col-span-4">
              <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#d4b068] transition-colors">Records & Rebels 1966-1970</h3>
              <p className="text-xs tracking-wider uppercase text-gray-500">April 6, 2023 10:00 - May 3, 2025 23:59</p>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                This major exhibition shows the revolutionary art of the late 1960s, expressed through some of the greatest music hits of the 20th century as well as paintings, film industry, fashion and design.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-start lg:justify-end items-center">
              <button className="rounded-full border border-black/30 px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                More Info
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* VISITOR INFO (Dark Section) */}
      <section className="bg-[#151412] text-[#f5f3ef]">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Side: Masonry/Gallery Collage */}
          <div className="lg:w-1/2 p-6 lg:p-12 relative overflow-hidden bg-[#1f1d1a]">
             <div className="grid grid-cols-2 gap-4 h-full relative">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop" className="w-full object-cover rounded-sm border-[6px] border-[#2a2622] shadow-2xl" alt="Painting 1" />
                  <img src="https://images.unsplash.com/photo-1544967082-f9d255942864?q=80&w=800&auto=format&fit=crop" className="w-full object-cover rounded-sm border-[4px] border-[#3a352f] shadow-2xl" alt="Painting 2" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop" className="w-full object-cover rounded-sm border-[8px] border-[#1a1815] shadow-2xl" alt="Painting 3" />
                  <img src="https://images.unsplash.com/photo-1577083165239-ce3b2ed212d2?q=80&w=800&auto=format&fit=crop" className="w-full h-48 object-cover rounded-sm border-[4px] border-[#4a453f] shadow-2xl" alt="Painting 4" />
                </div>
             </div>
          </div>

          {/* Right Side: Text Info */}
          <div className="lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center">
            <FadeInSection>
              <h2 className="font-serif text-4xl lg:text-5xl mb-12">Visitor Info</h2>
              
              <div className="space-y-12">
                {/* Admission */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 border-b border-white/10 pb-2">Admission Prices</h4>
                  <ul className="space-y-4 font-serif text-lg">
                    <li className="flex justify-between">
                      <span className="text-gray-300">Adult</span>
                      <span>$15.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Groups (10 max)</span>
                      <span>$12.00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Youth 19 – 24</span>
                      <span>$8.00</span>
                    </li>
                  </ul>
                </div>

                {/* Hours */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 border-b border-white/10 pb-2">Opening Hours</h4>
                  <ul className="space-y-4 font-serif text-lg">
                    <li className="flex justify-between">
                      <span className="text-gray-300">Tuesday – Saturday</span>
                      <span>10 a.m. – 5 p.m.</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span>11 a.m. – 5 p.m.</span>
                    </li>
                    <li className="flex justify-between text-gray-500 italic">
                      <span>Monday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <button className="bg-[#d4b068] text-black rounded-full px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all w-max mt-4">
                  Plan Your Visit
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};


// DUMMY PAGE: Exhibitions
const ExhibitionsPage = () => {
  return (
    <div className="bg-[#f5f3ef] min-h-screen font-sans text-black pt-32 pb-24">
       <div className="max-w-[1600px] mx-auto px-6 lg:px-24">
         <FadeInSection>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Current Exhibitions</h1>
            <p className="text-gray-600 max-w-2xl text-lg mb-16">Explore our curated collections spanning from classical antiquity to contemporary masterpieces.</p>
         </FadeInSection>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1,2,3,4].map((i) => (
              <FadeInSection key={i} delay={`${i * 100}ms`} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm bg-black aspect-[4/3]">
                  <img 
                    src={`https://images.unsplash.com/photo-15${64399579883 + i}-451a5d44ec08?q=80&w=800&auto=format&fit=crop`} 
                    alt="Exhibit"
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                  />
                </div>
                <p className="text-xs tracking-wider uppercase text-[#d4b068] mb-2 font-bold">Now On View</p>
                <h3 className="font-serif text-3xl mb-3 group-hover:text-gray-600 transition-colors">Masterpieces of the Renaissance</h3>
                <p className="text-gray-500 mb-4">A profound look into the rebirth of art and culture in 15th century Europe.</p>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  Discover <ArrowUpRight size={14} />
                </span>
              </FadeInSection>
            ))}
         </div>
       </div>
    </div>
  );
}

// DUMMY PAGE: About
const AboutPage = () => {
  return (
    <div className="bg-[#151412] min-h-screen font-sans text-white pt-32 pb-24">
       <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
         <FadeInSection>
            <h1 className="font-serif text-5xl md:text-7xl mb-10 text-[#f5f3ef]">The Ozeum History</h1>
            <div className="w-24 h-1 bg-[#d4b068] mx-auto mb-10"></div>
            <p className="text-gray-400 text-xl font-serif leading-relaxed italic mb-12">
              "Art washes away from the soul the dust of everyday life." — Pablo Picasso
            </p>
         </FadeInSection>
         
         <FadeInSection delay="200ms">
            <div className="text-left space-y-8 text-gray-300 font-light leading-loose text-lg">
              <p>
                Founded in 1892, Ozeum began as a private collection of European masterpieces. Today, it occupies a prominent place among the leading historical and cultural museums in the world.
              </p>
              <p>
                Our mission is to preserve and celebrate human creativity across centuries. Through our rigorous research, diverse exhibitions, and expansive cultural education programs, we strive to make art accessible to everyone.
              </p>
              <p>
                The museum complex itself is a work of architectural significance, seamlessly blending the original neoclassical structures with modern, sustainable exhibition wings added in the late 20th century.
              </p>
            </div>
         </FadeInSection>

         <FadeInSection delay="400ms" className="mt-20">
            <img 
              src="https://images.unsplash.com/photo-1544967082-f9d255942864?q=80&w=1200&auto=format&fit=crop" 
              alt="Museum Architecture" 
              className="w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            />
         </FadeInSection>
       </div>
    </div>
  );
}


// --- MAIN APP CONTAINER ---
export default function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple router
  const renderPage = () => {
    switch(currentPath) {
      case 'home': return <HomePage navigate={setCurrentPath} />;
      case 'exhibitions': return <ExhibitionsPage />;
      case 'about': return <AboutPage />;
      case 'collections': return <ExhibitionsPage />; // reuse dummy for demo
      default: return <HomePage navigate={setCurrentPath} />;
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        ::selection { background-color: #d4b068; color: white; }
        html { scroll-behavior: smooth; }
      `}} />
      <div className="relative w-full min-h-screen text-black">
        {currentPath === 'home' && <TopBar />}
        <Header currentPath={currentPath} navigate={setCurrentPath} isScrolled={isScrolled} />
        <FloatingSideMenu />
        
        <main>
          {renderPage()}
        </main>

        <Footer />
      </div>
    </>
  );
}