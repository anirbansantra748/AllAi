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