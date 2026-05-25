import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Bluetooth, 
  Battery, 
  Radio, 
  Sliders, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Compass, 
  Award, 
  Check, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  RotateCcw,
  Zap,
  Maximize2,
  SlidersHorizontal,
  Headphones,
  Music,
  Shield,
  Truck,
  Heart
} from 'lucide-react';

export default function App() {
  // Application State
  const [activeTab, setActiveTab] = useState('features');
  const [selectedColor, setSelectedColor] = useState('obsidian'); // obsidian, alabaster, forest
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundPreset, setSoundPreset] = useState('signature'); // signature, bass, monitor, stage
  const [volume, setVolume] = useState(70);
  const [chargeTime, setChargeTime] = useState(3); // hours
  const [customEngraving, setCustomEngraving] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeKnobDirection, setActiveKnobDirection] = useState(null);
  
  // Custom Accessory Choices
  const [accessories, setAccessories] = useState({
    case: true,
    goldCable: false,
    stand: false,
  });

  // Track Progress Simulation
  const [trackProgress, setTrackProgress] = useState(35);
  const progressInterval = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setTrackProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 200);
    } else {
      clearInterval(progressInterval.current);
    }
    return () => clearInterval(progressInterval.current);
  }, [isPlaying]);

  // Toast System Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Color Palette Constants
  const colors = {
    obsidian: {
      name: 'Midnight Obsidian',
      primary: '#121212',
      accent: '#dfba6b', // Gold / Brass
      bgGradient: 'from-[#141414] to-[#0A0A0A]',
      accentText: 'text-[#dfba6b]',
      accentBg: 'bg-[#dfba6b]',
      accentBorder: 'border-[#dfba6b]',
      headphoneBase: '#1a1a1a',
      headphoneAccent: '#dfba6b',
      headphoneCup: '#151515',
    },
    alabaster: {
      name: 'Desert Alabaster',
      primary: '#EAE5D9',
      accent: '#C59B6D', // Copper / Bronze
      bgGradient: 'from-[#1E1D1A] to-[#121110]',
      accentText: 'text-[#C59B6D]',
      accentBg: 'bg-[#C59B6D]',
      accentBorder: 'border-[#C59B6D]',
      headphoneBase: '#e3ded3',
      headphoneAccent: '#C59B6D',
      headphoneCup: '#d0c9bc',
    },
    forest: {
      name: 'Forest Stealth',
      primary: '#2D352E',
      accent: '#b5a172', // Olive gold
      bgGradient: 'from-[#131714] to-[#0B0C0B]',
      accentText: 'text-[#b5a172]',
      accentBg: 'bg-[#b5a172]',
      accentBorder: 'border-[#b5a172]',
      headphoneBase: '#2e3630',
      headphoneAccent: '#b5a172',
      headphoneCup: '#232924',
    }
  };

  const currentTheme = colors[selectedColor];

  // Testimonials database
  const testimonials = [
    {
      name: "Valery Semyonov",
      role: "Lead Acoustic Engineer, Apex Labs",
      quote: "The transient response of the Kronos IV is astonishing. By combining custom-tuned 40mm drivers with the physical properties of natural brass inserts, they have achieved high-frequency crystalline clarity without any harshness.",
      rating: 5,
      date: "May 2026"
    },
    {
      name: "Marcus Thorne",
      role: "Audiophile & Creative Director",
      quote: "The physical joystick knob feels absolutely timeless. It gives me immediate tactical feedback that touch gestures always fail to deliver. And 80 hours is not a marketing myth; I charged it once this month.",
      rating: 5,
      date: "April 2026"
    },
    {
      name: "Elena Rostova",
      role: "Electronic Music Producer",
      quote: "The soundstage is beautifully intimate, evoking the spatial dynamics of a real, physical studio booth. Using the Live Stage preset, synth-waves acquire an incredible warmth and dimensional weight.",
      rating: 5,
      date: "March 2026"
    }
  ];

  // Sound Wave Preset Configuration
  const soundWavePaths = {
    signature: "M10 50 Q 25 10, 40 50 T 70 50 T 100 50 T 130 50 T 160 50 T 190 50",
    bass: "M10 50 Q 25 -10, 40 50 T 70 80 T 100 20 T 130 50 T 160 50 T 190 50",
    monitor: "M10 50 Q 25 35, 40 50 T 70 45 T 100 52 T 130 48 T 160 50 T 190 50",
    stage: "M10 50 Q 25 5, 40 50 T 70 95 T 100 5 T 130 95 T 160 50 T 190 50"
  };

  // Knob Controller simulation
  const handleKnobAction = (direction) => {
    setActiveKnobDirection(direction);
    setTimeout(() => setActiveKnobDirection(null), 300);

    if (direction === 'up') {
      setVolume(prev => Math.min(prev + 5, 100));
      showToast("Volume Raised to " + Math.min(volume + 5, 100) + "%");
    } else if (direction === 'down') {
      setVolume(prev => Math.max(prev - 5, 0));
      showToast("Volume Lowered to " + Math.max(volume - 5, 0) + "%");
    } else if (direction === 'left') {
      setTrackProgress(0);
      showToast("Track Restarted / Previous Track");
    } else if (direction === 'right') {
      setTrackProgress(0);
      showToast("Skipped to Next Acoustic Session");
    } else if (direction === 'center') {
      setIsPlaying(prev => !prev);
      showToast(isPlaying ? "Audio Playback Paused" : "Audio Playback Commenced");
    }
  };

  // Pre-order Price Calculator
  const basePrice = 249;
  const casePrice = accessories.case ? 0 : 0; // Included free
  const goldCablePrice = accessories.goldCable ? 35 : 0;
  const standPrice = accessories.stand ? 55 : 0;
  const totalPrice = basePrice + goldCablePrice + standPrice;

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-[#dfba6b] selection:text-black overflow-x-hidden relative`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161616] border border-[#dfba6b]/40 text-neutral-100 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#dfba6b] animate-ping"></span>
          <span className="text-sm font-medium tracking-wide uppercase">{toastMessage}</span>
        </div>
      )}

      {/* Glow Effects in Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#dfba6b]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-10 w-[600px] h-[600px] bg-[#dfba6b]/3 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-neutral-900/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-950 border border-neutral-700 flex items-center justify-center shadow-lg group-hover:border-[#dfba6b]/40 transition-all">
              <span className="text-xl font-bold text-[#dfba6b] tracking-tighter">K</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-[0.25em] uppercase text-white group-hover:text-[#dfba6b] transition-all">KRONOS</span>
              <span className="block text-[9px] tracking-widest text-neutral-500 uppercase -mt-1">Acoustic Engineering</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            <a href="#experience" className="hover:text-white transition-colors">Acoustic DNA</a>
            <a href="#bento-specs" className="hover:text-white transition-colors">Specifications</a>
            <a href="#customizer" className="hover:text-white transition-colors">Customizer</a>
            <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          </nav>

          {/* Reserve / CTA Action */}
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-[11px] font-mono text-neutral-500 tracking-wider">EST. 2026 / MODEL IV</span>
            <a 
              href="#preorder" 
              className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-[#dfba6b] text-neutral-200 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(223,186,107,0.15)]"
            >
              Reserve Now
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02] border-x border-neutral-700">
          <div></div><div></div><div></div><div></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left: Title & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[10px] uppercase tracking-widest text-neutral-300 font-semibold shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b] animate-pulse"></span>
              The Ultimate Sound Sanctuary
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[0.9] text-white">
                KRONOS <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-[#dfba6b]">IV</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">
                Professional Wireless Studio Monitors
              </p>
            </div>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
              We took the raw, tactical aesthetic of golden-age studio monitors and infused it with cutting-edge spatial computing acoustics. Eighty hours of deep, unadulterated musical sanctuary wrapped in premium hand-stitched vegan leather.
            </p>

            {/* Quick Specs Highlight Panel */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#121212]/90 border border-neutral-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-950 flex items-center justify-center text-[#dfba6b] border border-neutral-800/80">
                  <Battery className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">80 HRS</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Active Reserve</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121212]/90 border border-neutral-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-950 flex items-center justify-center text-[#dfba6b] border border-neutral-800/80">
                  <Bluetooth className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">15 MTR</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Wireless Reach</div>
                </div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#preorder"
                className="px-8 py-4 rounded-xl bg-[#dfba6b] hover:bg-[#ebd095] text-black text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#dfba6b]/15 hover:shadow-[#dfba6b]/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Configure Your Build <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#experience"
                className="px-8 py-4 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
              >
                Experience Acoustic DNA
              </a>
            </div>

            {/* Compatibility Micro Tags */}
            <div className="flex items-center gap-4 pt-2 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
              <span>Bluetooth 5.2</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
              <span>AAC / aptX Lossless</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
              <span>Hi-Res Audio Certified</span>
            </div>

          </div>

          {/* Hero Right: Highly Aesthetic Immersive Product Showcase Container */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            
            {/* The Main Premium Card Container inspired directly by the uploaded layout */}
            <div className="w-full max-w-[580px] bg-[#121212] border border-neutral-800/80 rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden hover:border-[#dfba6b]/30 transition-all duration-700">
              
              {/* Card Header Info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[#dfba6b] text-[11px] font-mono tracking-widest uppercase block mb-1">DESIGN PATENT #4092-26</span>
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase">PREMIUM PHYSICAL FIDELITY</h3>
                </div>
                <div className="px-3 py-1 rounded border border-neutral-800 text-[10px] font-mono text-neutral-400">
                  REF.04
                </div>
              </div>

              {/* Central Graphic Container - Dynamically Changes with Selected Colorway */}
              <div className="h-[280px] sm:h-[320px] w-full relative bg-[#0d0d0d] rounded-2xl border border-neutral-900 flex items-center justify-center p-4 overflow-hidden group">
                
                {/* Glowing Aura Behind Headphone */}
                <div className={`absolute w-72 h-72 rounded-full blur-[80px] transition-all duration-700 opacity-25`} 
                     style={{ backgroundColor: currentTheme.accent }} />

                {/* Animated Interactive Wave Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    <path 
                      d={soundWavePaths[soundPreset]} 
                      fill="none" 
                      stroke={currentTheme.accent} 
                      strokeWidth="2" 
                      className={`transition-all duration-1000 ${isPlaying ? 'animate-pulse' : ''}`}
                    />
                  </svg>
                </div>

                {/* Custom Vector Headphone Illustration */}
                <svg viewBox="0 0 400 400" className="w-64 h-64 z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transition-all duration-500">
                  {/* Steel Headband Arc */}
                  <path 
                    d="M 100,200 A 100,100 0 0,1 300,200" 
                    fill="none" 
                    stroke="#2D2D2D" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                  />
                  {/* Headband Leather Cover Cushion */}
                  <path 
                    d="M 120,180 A 90,90 0 0,1 280,180" 
                    fill="none" 
                    stroke={currentTheme.headphoneBase} 
                    strokeWidth="20" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Stitching detailing on headband */}
                  <path 
                    d="M 125,178 A 88,88 0 0,1 275,178" 
                    fill="none" 
                    stroke={currentTheme.headphoneAccent} 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4" 
                    strokeLinecap="round" 
                  />

                  {/* Left Metal Fork Slide */}
                  <g transform="translate(100, 190) rotate(-15)">
                    <rect x="-4" y="0" width="8" height="60" rx="3" fill="#3D3D3D" />
                    <rect x="-6" y="50" width="12" height="15" rx="2" fill="#1C1C1C" />
                    {/* Golden cable wire curl */}
                    <path d="M 0,10 Q -25,30 5,50" fill="none" stroke={currentTheme.headphoneAccent} strokeWidth="2.5" />
                  </g>

                  {/* Right Metal Fork Slide */}
                  <g transform="translate(300, 190) rotate(15)">
                    <rect x="-4" y="0" width="8" height="60" rx="3" fill="#3D3D3D" />
                    <rect x="-6" y="50" width="12" height="15" rx="2" fill="#1C1C1C" />
                    {/* Golden cable wire curl */}
                    <path d="M 0,10 Q 25,30 -5,50" fill="none" stroke={currentTheme.headphoneAccent} strokeWidth="2.5" />
                  </g>

                  {/* Left Ear Cushion (Tactile Square Profile inspired by Marshall) */}
                  <g transform="translate(70, 210) rotate(-10)">
                    {/* Main cup body */}
                    <rect x="-35" y="-10" width="70" height="90" rx="18" fill="#0D0D0D" stroke="#252525" strokeWidth="2" />
                    {/* Outer frame matching selected theme accent */}
                    <rect x="-30" y="-5" width="60" height="80" rx="14" fill={currentTheme.headphoneCup} />
                    {/* Leather texture lines inside */}
                    <line x1="-20" y1="20" x2="-20" y2="50" stroke="#121212" strokeWidth="2" />
                    <line x1="20" y1="20" x2="20" y2="50" stroke="#121212" strokeWidth="2" />
                    {/* Gold Logo script placeholder in ear cup */}
                    <text x="0" y="40" fill={currentTheme.headphoneAccent} fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">
                      KRONOS
                    </text>
                  </g>

                  {/* Right Ear Cushion (Tactile Square Profile) */}
                  <g transform="translate(330, 210) rotate(10)">
                    {/* Main cup body */}
                    <rect x="-35" y="-10" width="70" height="90" rx="18" fill="#0D0D0D" stroke="#252525" strokeWidth="2" />
                    {/* Outer frame matching selected theme accent */}
                    <rect x="-30" y="-5" width="60" height="80" rx="14" fill={currentTheme.headphoneCup} />
                    {/* Leather texture lines inside */}
                    <line x1="-20" y1="20" x2="-20" y2="50" stroke="#121212" strokeWidth="2" />
                    <line x1="20" y1="20" x2="20" y2="50" stroke="#121212" strokeWidth="2" />
                    {/* Gold Logo script placeholder */}
                    <text x="0" y="40" fill={currentTheme.headphoneAccent} fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">
                      KRONOS
                    </text>

                    {/* Highly-visible, iconic Gold Tactile Multi-Directional Knob */}
                    <circle cx="20" cy="55" r="7" fill={currentTheme.headphoneAccent} stroke="#1A1A1A" strokeWidth="1.5" className="cursor-pointer hover:scale-125 transition-transform" />
                    <circle cx="20" cy="55" r="3" fill="#1A1A1A" />
                  </g>
                </svg>

                {/* Live Preset indicator overlay */}
                <div className="absolute bottom-4 left-4 bg-black/80 border border-neutral-800 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  PRESET: {soundPreset}
                </div>

                {/* Color Name Tag */}
                <div className="absolute top-4 right-4 bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded text-neutral-400">
                  {currentTheme.name}
                </div>
              </div>

              {/* Interactive Audio Player Bar underneath Headphone Graphic */}
              <div className="mt-6 bg-[#0E0E0E] border border-neutral-900 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <button 
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      showToast(isPlaying ? "Acoustic Sample Paused" : "Acoustic Sample Commenced");
                    }}
                    className={`w-11 h-11 rounded-lg ${isPlaying ? 'bg-[#dfba6b] text-black' : 'bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-700'} flex items-center justify-center transition-all`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-white tracking-wide truncate">Acoustic Resonance (Live Demo)</span>
                      <span className="text-[10px] font-mono text-neutral-500">2:45 / 4:12</span>
                    </div>
                    {/* Simulated track timeline slider */}
                    <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-[#dfba6b] h-full transition-all duration-300"
                        style={{ width: `${trackProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-neutral-500" />
                    <span className="text-[10px] font-mono text-neutral-400 w-6 text-right">{volume}%</span>
                  </div>
                </div>

                {/* Equalizer Profile Quick Selectors */}
                <div className="grid grid-cols-4 gap-2 pt-1.5">
                  {[
                    { id: 'signature', label: 'Signature' },
                    { id: 'bass', label: 'Bass Boost' },
                    { id: 'monitor', label: 'Studio' },
                    { id: 'stage', label: 'Live' }
                  ].map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSoundPreset(preset.id);
                        showToast(`Equalizer changed to ${preset.label}`);
                      }}
                      className={`py-1.5 px-1 rounded-md text-[9px] uppercase tracking-wider font-bold transition-all border ${
                        soundPreset === preset.id 
                          ? 'bg-[#dfba6b]/10 text-[#dfba6b] border-[#dfba6b]/35' 
                          : 'bg-neutral-950 text-neutral-500 border-transparent hover:text-neutral-300'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Float Element: Master Control Highlight */}
            <div className="absolute -bottom-6 -left-4 xl:-left-12 bg-[#161616]/95 border border-neutral-800/80 rounded-2xl p-4 shadow-xl max-w-[210px] hidden md:block backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-lg bg-black text-[#dfba6b] border border-neutral-800">
                  <Sliders className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Dynamic ANC</h4>
                  <span className="text-[9px] font-mono text-[#dfba6b] uppercase">Activated</span>
                </div>
              </div>
              <p className="text-[10px] text-neutral-400 leading-normal">
                Triple-mic system isolates high-frequency background disruptions dynamically.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Interactive Experience Section (Live Interactive Sandbox) */}
      <section id="experience" className="py-24 border-t border-neutral-900/60 bg-gradient-to-b from-[#0A0A0A] to-[#121212] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">The Control Sandbox</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              Tactile Mechanics, Simulated
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              At the core of the Kronos IV is the custom milled brass multi-directional control knob. Click the simulator below to experience pure, uninterrupted device command.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Controller Simulator Panel */}
            <div className="lg:col-span-7 bg-[#161616] border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfba6b]/5 rounded-full blur-2xl"></div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfba6b]">TACTILE FEEDBACK CONSOLE</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-[#dfba6b] text-[8px] font-mono uppercase tracking-widest">Interactive</span>
                </div>
                <h3 className="text-xl font-bold uppercase text-white tracking-wide">The Signature Brass Joystick</h3>
                <p className="text-xs text-neutral-400 max-w-md">
                  Click the directional buttons surrounding the brass joystick below to manipulate volume, tracks, and play-states, mimicking the mechanical physical response of our proprietary control unit.
                </p>
              </div>

              {/* Interactive Virtual Joystick Controller */}
              <div className="flex flex-col items-center justify-center my-6 relative">
                
                {/* Active Indicator Board */}
                <div className="mb-6 h-8 text-center">
                  {activeKnobDirection && (
                    <div className="text-xs font-mono uppercase tracking-widest text-[#dfba6b] bg-[#dfba6b]/10 border border-[#dfba6b]/30 px-3 py-1 rounded-md animate-pulse">
                      INPUT REGISTERED: {activeKnobDirection.toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Joystick Visual Matrix */}
                <div className="relative w-64 h-64 bg-black rounded-full border-4 border-neutral-900 shadow-2xl flex items-center justify-center">
                  
                  {/* Subtle directional text labels inside circular shell */}
                  <span className="absolute top-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Vol +</span>
                  <span className="absolute bottom-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Vol -</span>
                  <span className="absolute left-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Prev</span>
                  <span className="absolute right-4 text-[9px] font-mono uppercase tracking-widest text-neutral-600">Next</span>

                  {/* Circular outer track */}
                  <div className="absolute w-44 h-44 rounded-full border border-neutral-800/40 border-dashed"></div>

                  {/* Up / Volume Up Button */}
                  <button 
                    onClick={() => handleKnobAction('up')}
                    className={`absolute top-10 w-12 h-10 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'up' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Volume Up"
                  >
                    <ChevronLeft className="w-5 h-5 rotate-90" />
                  </button>

                  {/* Down / Volume Down Button */}
                  <button 
                    onClick={() => handleKnobAction('down')}
                    className={`absolute bottom-10 w-12 h-10 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'down' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Volume Down"
                  >
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </button>

                  {/* Left / Previous Track Button */}
                  <button 
                    onClick={() => handleKnobAction('left')}
                    className={`absolute left-10 w-10 h-12 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'left' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Previous Track"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right / Next Track Button */}
                  <button 
                    onClick={() => handleKnobAction('right')}
                    className={`absolute right-10 w-10 h-12 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#dfba6b] hover:bg-neutral-900 transition-all ${activeKnobDirection === 'right' ? 'text-[#dfba6b] bg-neutral-900 scale-95' : ''}`}
                    title="Next Track"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Physical Brass Joystick Knob Centerpiece */}
                  <button 
                    onClick={() => handleKnobAction('center')}
                    className={`w-20 h-20 rounded-full bg-gradient-to-r from-yellow-600 via-[#dfba6b] to-yellow-700 p-1 shadow-2xl transform active:scale-95 transition-all flex items-center justify-center z-20 ${
                      activeKnobDirection === 'center' ? 'ring-4 ring-[#dfba6b]/40' : ''
                    }`}
                    title="Play / Pause"
                  >
                    <div className="w-full h-full rounded-full bg-black flex flex-col items-center justify-center relative overflow-hidden group">
                      {/* Knurled metal pattern visual using absolute borders */}
                      <div className="absolute inset-2 rounded-full border border-[#dfba6b]/20 bg-gradient-to-tr from-neutral-900 to-neutral-950 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-600 to-[#dfba6b] flex items-center justify-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-950"></span>
                        </div>
                      </div>
                    </div>
                  </button>

                </div>

              </div>

              {/* Micro Explanation */}
              <div className="text-center text-[10px] uppercase tracking-widest text-neutral-500 mt-4">
                Click Center to Toggle Playback / Click Edges for Technical Parameters
              </div>

            </div>

            {/* Equalizer Sound Waves Visualizer Section */}
            <div className="lg:col-span-5 bg-[#161616] border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfba6b]">ACOUSTIC PROFILE LAB</span>
                  <span className="text-xs text-neutral-400 font-mono">Hi-Res Engine</span>
                </div>

                <h3 className="text-xl font-bold uppercase text-white tracking-wide">Dynamic Preset Tuning</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Switch presets below to observe custom-tailored sonic architectures. Each setting recalculates frequency response vectors in real-time.
                </p>

                {/* Animated graphic representing current frequency */}
                <div className="h-40 w-full bg-black rounded-2xl border border-neutral-900 p-4 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-10">
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                    <div className="border-r border-b border-neutral-800"></div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-neutral-600 z-10">
                    <span>dB +12</span>
                    <span>100Hz</span>
                    <span>1kHz</span>
                    <span>10kHz</span>
                    <span>20kHz</span>
                  </div>

                  {/* Real-time calculated sound waves svg animation */}
                  <div className="h-24 w-full flex items-center justify-center z-10">
                    <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#dfba6b" stopOpacity="0.2" />
                          <stop offset="50%" stopColor="#dfba6b" stopOpacity="1" />
                          <stop offset="100%" stopColor="#dfba6b" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      
                      {/* Base static wave line */}
                      <path 
                        d="M 0,50 Q 50,50 100,50 T 200,50" 
                        fill="none" 
                        stroke="#1A1A1A" 
                        strokeWidth="1.5" 
                      />

                      {/* Animated Active Custom Wave */}
                      <path 
                        d={soundWavePaths[soundPreset]} 
                        fill="none" 
                        stroke="url(#waveGlow)" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        className={`transition-all duration-700 ease-out ${isPlaying ? 'animate-pulse' : ''}`}
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-neutral-500 z-10">
                    <span className="text-[#dfba6b]">PRESET: {soundPreset.toUpperCase()}</span>
                    <span>THD &lt; 0.08%</span>
                  </div>
                </div>

                {/* Technical Preset Description */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/50 text-xs">
                  {soundPreset === 'signature' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Kronos Original Balance</strong> 
                      Tailored specifically for modern vinyl recordings. Emphasizes warm low-mids and leaves high-end vocals highly organic.
                    </p>
                  )}
                  {soundPreset === 'bass' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Sub-Frequency Resonance</strong> 
                      Pushes the 40mm driver diaphragm excursion to its safely regulated mechanical limit for physical sub-bass rumble.
                    </p>
                  )}
                  {soundPreset === 'monitor' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Reference Flat Monitoring</strong> 
                      De-energizes colorized frequency curves. Perfect for clean, surgical vocal tracking, production, and video editing work.
                    </p>
                  )}
                  {soundPreset === 'stage' && (
                    <p className="text-neutral-400 leading-normal">
                      <strong className="text-white block mb-1">Three-Dimensional Stage</strong> 
                      Widens phase angles, generating a spacious acoustic simulation reminiscent of open-back headphone designs.
                    </p>
                  )}
                </div>

              </div>

              {/* Presets Action Panel */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-900 mt-6">
                <button 
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    showToast(isPlaying ? "Testing Concluded" : "Testing Initiated");
                  }}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center border transition-all ${
                    isPlaying 
                      ? 'bg-[#dfba6b] text-black border-transparent' 
                      : 'bg-neutral-950 text-white border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {isPlaying ? 'Pause Generator' : 'Fire Generator'}
                </button>

                <button 
                  onClick={() => {
                    setSoundPreset('signature');
                    showToast("Equalizer reset to Kronos Signature");
                  }}
                  className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white bg-neutral-900 border border-transparent hover:border-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset System
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bento Grid Technical Specification Section */}
      <section id="bento-specs" className="py-24 bg-[#0A0A0A] px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">Engineering Integrity</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
                Detailed Spec Sheet
              </h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm">
              We design with strict parameters. Every milligram of weight and micro-millimeter of chassis material is thoroughly accounted for.
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Main Sound Spec Container (Highly visual) */}
            <div className="lg:col-span-4 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 01 / SOUND</span>
                  <Radio className="w-4 h-4 text-[#dfba6b]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">Acoustic Driver Density</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  Equipped with a custom developed 40mm dome diaphragm constructed from dual-layer polymers for rapid mechanical responsiveness.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-900/60 font-mono text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Frequency Response</span>
                  <span className="text-white font-bold">20Hz - 20,000Hz</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Impedance</span>
                  <span className="text-white font-bold">32 Ohms</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">Driver Sensitivity</span>
                  <span className="text-white font-bold">99 dB SPL</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">THD Distortion</span>
                  <span className="text-[#dfba6b] font-bold">&lt;0.08% @ 1kHz</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Interactive Battery Slider (The "Surprise" Specification Module) */}
            <div className="lg:col-span-5 bg-[#121212] border border-[#dfba6b]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#dfba6b]/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dfba6b]/5 rounded-full blur-xl"></div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 02 / ACCU</span>
                  <Battery className="w-4 h-4 text-[#dfba6b]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-1">Unrivaled Power reserve</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Drag the simulation slider to calculate playback times based on custom charging schedules.
                </p>
              </div>

              {/* Interactive Charging Calculator Widget */}
              <div className="my-6 p-4 bg-black rounded-xl border border-neutral-900 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">Charging Duration</span>
                  <span className="text-xs font-mono font-bold text-white">{chargeTime} Hour{chargeTime > 1 ? 's' : ''}</span>
                </div>

                <input 
                  type="range" 
                  min="0.5" 
                  max="3" 
                  step="0.5"
                  value={chargeTime} 
                  onChange={(e) => setChargeTime(parseFloat(e.target.value))}
                  className="w-full accent-[#dfba6b] bg-neutral-800 rounded-lg appearance-none h-1.5 cursor-pointer"
                />

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-900/60 text-center">
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-neutral-500 mb-0.5">EST. PLAYBACK</span>
                    <span className="text-xl font-extrabold text-[#dfba6b]">
                      {chargeTime === 3 ? '80' : Math.round(chargeTime * 26.6)} Hours
                    </span>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-neutral-500 mb-0.5">USB-C POWER SPEC</span>
                    <span className="text-sm font-bold text-white">5V DC / 1.5A</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-[10px] text-neutral-500 uppercase tracking-widest font-semibold border-t border-neutral-900/60 pt-4">
                <Zap className="w-4 h-4 text-[#dfba6b]" />
                <span>15 Min charge provides 15 Hrs playback</span>
              </div>
            </div>

            {/* Bento Card 3: Ergonmic Space Folding */}
            <div className="lg:col-span-3 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 03 / PORT</span>
                  <Maximize2 className="w-4 h-4 text-neutral-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-2">Ergonomic Collapsibility</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Our custom multi-directional metal hinges compress the entire headphone footprint into a tight spherical travel state.
                </p>
              </div>

              {/* Simple stylized SVG outline demonstrating collapsed form */}
              <div className="h-28 w-full bg-[#0d0d0d] rounded-xl border border-neutral-950 flex items-center justify-center p-2 relative my-4">
                <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-40">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#dfba6b" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M35,45 Q50,30 65,45 Q50,60 35,45" fill="none" stroke="#dfba6b" strokeWidth="3" />
                  <path d="M25,50 L75,50" stroke="#222" strokeWidth="1" />
                </svg>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono tracking-widest uppercase text-[#dfba6b]">
                  95mm Fold
                </div>
              </div>

              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Includes ballistic nylon case</span>
            </div>

            {/* Bento Card 4: Pure Luxury Knobs & Mechanics */}
            <div className="lg:col-span-4 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 04 / GEAR</span>
                  <SlidersHorizontal className="w-4 h-4 text-[#dfba6b]" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-2">Physical Materiality</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  We refuse cheap plastics. The physical framework incorporates spring-tempered stainless steel, reinforced glass fibers, and pure raw brass dials.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-900/60 text-[10px] font-mono uppercase text-neutral-400">
                <div className="p-2 bg-neutral-950 rounded border border-neutral-900/80">
                  <span className="block text-[#dfba6b] font-bold mb-0.5">385g</span> WEIGHT SCALE
                </div>
                <div className="p-2 bg-neutral-950 rounded border border-neutral-900/80">
                  <span className="block text-[#dfba6b] font-bold mb-0.5">VEGAN LTHR</span> HEADBAND
                </div>
              </div>
            </div>

            {/* Bento Card 5: Wireless Connectivity details */}
            <div className="lg:col-span-8 bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-6 md:hidden">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">SECTION 05 / LINK</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase mb-2">Ultrawide Bluetooth Connection</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Equipped with advanced Bluetooth 5.2. Designed to seamlessly switch between multiple hosts, keeping latency down to negligible professional monitoring thresholds.
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-300 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b]"></span> Dual Host Multipoint Stream
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b]"></span> LC3 Low Complexity Communication
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b]"></span> 15-Meter interference-free radius
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0c0c0c] rounded-xl border border-neutral-900 p-4 flex flex-col justify-between">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 mb-2">LATENCY CALIBRATION MATRIX</div>
                  
                  {/* Visual graph metric simulating latency levels */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-400 mb-1">
                        <span>SBC Standard Protocol</span>
                        <span>180ms</span>
                      </div>
                      <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-red-500/80 h-full w-[85%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-neutral-400 mb-1">
                        <span>AAC Audio Standard</span>
                        <span>120ms</span>
                      </div>
                      <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500/80 h-full w-[60%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] font-mono text-[#dfba6b] mb-1">
                        <span>Kronos aptX Lossless</span>
                        <span className="font-bold">42ms</span>
                      </div>
                      <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#dfba6b] h-full w-[22%]"></div>
                      </div>
                    </div>
                  </div>

                  <span className="text-[8px] font-mono text-neutral-600 block mt-4">Calculated over steady 2.4GHz testing environments.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive 3D Colorway Customizer & Lab */}
      <section id="customizer" className="py-24 border-y border-neutral-900/60 bg-gradient-to-b from-[#0A0A0A] to-[#121212] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Customizer Left: Big Interactive Previewer */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              
              <div className="w-full max-w-[480px] bg-[#161616] border border-neutral-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Tech specifications of current selected color */}
                <div className="flex items-center justify-between mb-4 text-[10px] font-mono uppercase text-neutral-400">
                  <span>Colorway Preview</span>
                  <span className="text-[#dfba6b]">{currentTheme.name}</span>
                </div>

                <div className="h-[260px] flex items-center justify-center relative overflow-hidden bg-[#0d0d0d] rounded-2xl border border-neutral-950 py-4 mb-6">
                  {/* Backdrop lighting */}
                  <div className="absolute w-60 h-60 rounded-full blur-[70px] opacity-20 transition-all duration-700" 
                       style={{ backgroundColor: currentTheme.accent }}></div>

                  {/* Dynamic Headphone SVG */}
                  <svg viewBox="0 0 400 400" className="w-56 h-56 z-10 transition-all duration-700 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                    {/* Arch */}
                    <path d="M 100,200 A 100,100 0 0,1 300,200" fill="none" stroke="#222" strokeWidth="12" />
                    <path d="M 120,180 A 90,90 0 0,1 280,180" fill="none" stroke={currentTheme.headphoneBase} strokeWidth="18" />
                    {/* Stitching */}
                    <path d="M 125,178 A 88,88 0 0,1 275,178" fill="none" stroke={currentTheme.headphoneAccent} strokeWidth="1" strokeDasharray="3,3" />

                    {/* Suspension metal slides */}
                    <line x1="105" y1="185" x2="105" y2="245" stroke="#3D3D3D" strokeWidth="6" />
                    <line x1="295" y1="185" x2="295" y2="245" stroke="#3D3D3D" strokeWidth="6" />

                    {/* Left Cup */}
                    <g transform="translate(75, 215) rotate(-10)">
                      <rect x="-35" y="-10" width="70" height="90" rx="16" fill="#0A0A0A" stroke="#1F1F1F" strokeWidth="2" />
                      <rect x="-30" y="-5" width="60" height="80" rx="12" fill={currentTheme.headphoneCup} />
                      <text x="0" y="42" fill={currentTheme.headphoneAccent} fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">KRONOS</text>
                    </g>

                    {/* Right Cup */}
                    <g transform="translate(325, 215) rotate(10)">
                      <rect x="-35" y="-10" width="70" height="90" rx="16" fill="#0A0A0A" stroke="#1F1F1F" strokeWidth="2" />
                      <rect x="-30" y="-5" width="60" height="80" rx="12" fill={currentTheme.headphoneCup} />
                      <text x="0" y="42" fill={currentTheme.headphoneAccent} fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1" fontFamily="serif">KRONOS</text>
                      {/* Brass button */}
                      <circle cx="18" cy="52" r="5" fill={currentTheme.headphoneAccent} />
                    </g>
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-2 font-mono text-[9px] uppercase text-neutral-400">
                  <div className="bg-neutral-950 p-2.5 rounded border border-neutral-900/60 text-center">
                    <span className="block font-bold text-white mb-0.5">UPPER</span> Leatherette
                  </div>
                  <div className="bg-neutral-950 p-2.5 rounded border border-neutral-900/60 text-center">
                    <span className="block font-bold text-white mb-0.5">METALS</span> Pure Brass
                  </div>
                  <div className="bg-neutral-950 p-2.5 rounded border border-neutral-900/60 text-center">
                    <span className="block font-bold text-white mb-0.5">PLATES</span> Poly-Carbon
                  </div>
                </div>

              </div>

            </div>

            {/* Customizer Right: Interaction Options */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">Build Customization</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
                  Define Your Aesthetic DNA
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Choose from our core designer templates. Each configuration represents a distinct stylistic lineage, optimized for different desktop environments and fashion genres.
                </p>
              </div>

              {/* Theme Selector Buttons */}
              <div className="space-y-4">
                {[
                  {
                    id: 'obsidian',
                    name: 'Midnight Obsidian',
                    desc: 'The original signature. Stealthy matte black textured leather coupled with premium hand-milled raw brass dials.',
                    badge: 'Signature Theme',
                    accentColor: '#dfba6b'
                  },
                  {
                    id: 'alabaster',
                    name: 'Desert Alabaster',
                    desc: 'A gorgeous, warm-tone organic contrast. Soft cream leatherette highlighted by brushed rose-gold/copper metallic suspensions.',
                    badge: 'Aesthetic Edition',
                    accentColor: '#C59B6D'
                  },
                  {
                    id: 'forest',
                    name: 'Forest Stealth',
                    desc: 'Tactical and utilitarian. Matte olive green cups matched with antique bronze mechanics, evoking vintage military radios.',
                    badge: 'Tactical Release',
                    accentColor: '#b5a172'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedColor(item.id);
                      showToast(`Switched color palette to ${item.name}`);
                    }}
                    className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 flex gap-4 ${
                      selectedColor === item.id 
                        ? 'bg-[#161616] border-[#dfba6b]/60 shadow-lg' 
                        : 'bg-[#121212]/40 border-neutral-900 hover:border-neutral-800'
                    }`}
                  >
                    {/* Circle Color Indicator */}
                    <div className="mt-1">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center" style={{ backgroundColor: item.accentColor }}>
                        {selectedColor === item.id && <Check className="w-3 h-3 text-black font-bold" />}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</h4>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500">{item.badge}</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-normal">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Engraving Input Sandbox (Tactile touch) */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-neutral-950 to-neutral-900 border border-neutral-800 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#dfba6b]">
                  Personalize Your Headband / Laser Engraving (Free)
                </label>
                <input 
                  type="text" 
                  maxLength={16}
                  placeholder="e.g. S.KRONOS.IV"
                  value={customEngraving} 
                  onChange={(e) => setCustomEngraving(e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-800 focus:border-[#dfba6b] text-sm text-white focus:outline-none transition-all uppercase font-mono tracking-widest"
                />
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500">
                  <span>Maximum 16 characters</span>
                  <span>{customEngraving.length}/16 USED</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Engineering Deep-Dive Detail Section */}
      <section id="engineering" className="py-24 bg-[#0A0A0A] px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: Exploded Technical Diagram Style Visuals */}
            <div className="space-y-6 order-2 lg:order-1">
              
              <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                  <div>
                    <span className="text-[#dfba6b] text-[10px] font-mono uppercase tracking-wider">Acoustic Patent Schema</span>
                    <h3 className="text-lg font-bold uppercase text-white">Resonance Chamber Anatomy</h3>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">FIG.09</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/60 flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#dfba6b]/10 text-[#dfba6b] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-[#dfba6b]/20">01</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Milled Brass Stabilizer Ring</h4>
                      <p className="text-neutral-400 leading-normal">
                        Anchors the transducer capsule physically, removing any structural housing resonance that causes harmonic bass smear.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/60 flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#dfba6b]/10 text-[#dfba6b] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-[#dfba6b]/20">02</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Acoustic Tuning Foam Matrix</h4>
                      <p className="text-neutral-400 leading-normal">
                        Custom-molded polyurethane foam inserts absorb high-frequency internal reflections to guarantee linear driver performance.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900/60 flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#dfba6b]/10 text-[#dfba6b] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 border border-[#dfba6b]/20">03</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">Micro-Vented Bass Port</h4>
                      <p className="text-neutral-400 leading-normal">
                        Precisely dimensioned exit port relieves internal pressure on the driver, promoting faster transient response and deeper low-end drop.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right side: High Impact Title & Technical descriptions */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">Surgical Acoustic Execution</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white leading-tight">
                  Engineered to Disappear
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  An audiophile design should add absolutely no coloration of its own. It is an instrument constructed purely to frame and spotlight the artist's original intention.
                </p>
              </div>

              {/* Specs Icons List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Compass className="w-4 h-4 text-[#dfba6b]" />
                    <span>3D Soundstage Imaging</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Angled transducers direct sound wave propagation naturally towards your outer ear canal for organic spatial depth.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Award className="w-4 h-4 text-[#dfba6b]" />
                    <span>Audiophile Craftsmanship</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Individually tested in sealed laboratory sound chambers, assuring total channel-matching alignment within 0.5dB limits.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Headphones className="w-4 h-4 text-[#dfba6b]" />
                    <span>Vegan Leather Comfort</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Custom breathable earcups ensure heat is vented during extended sessions, maintaining ideal tactile clamping force.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wide">
                    <Music className="w-4 h-4 text-[#dfba6b]" />
                    <span>Hi-Res Audio Wireless</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Streams digital tracks up to 24-bit/96kHz natively over advanced loss-free wireless compression protocols.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Reviewer Carousel */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-[#121212] to-[#0A0A0A] border-t border-neutral-900/60 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#dfba6b] text-xs font-bold uppercase tracking-[0.2em]">PRO AUDIO COMMENDATIONS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
              Sought-After By Audio Purists
            </h2>
          </div>

          {/* Testimonial Active Slider Box */}
          <div className="max-w-4xl mx-auto bg-[#161616]/90 border border-neutral-800 p-8 sm:p-12 rounded-3xl relative shadow-2xl overflow-hidden">
            
            {/* Top decorative element */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#dfba6b] to-transparent"></div>
            
            <div className="absolute top-6 right-6 text-neutral-700 text-6xl font-serif select-none pointer-events-none">
              “
            </div>

            <div className="space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#dfba6b]">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl text-neutral-200 font-light leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-neutral-900">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-neutral-600">
                  {testimonials[currentTestimonial].date}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <button
                  onClick={() => {
                    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
                  }}
                  className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
                  }}
                  className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          {/* Quick Stats Grid underneath */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-center">
            <div className="p-5 bg-neutral-950/60 border border-neutral-900 rounded-xl">
              <span className="block text-2xl font-extrabold text-[#dfba6b] mb-1">98%</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">CUSTOMER SATISFACTION</span>
            </div>
            <div className="p-5 bg-neutral-950/60 border border-neutral-900 rounded-xl">
              <span className="block text-2xl font-extrabold text-[#dfba6b] mb-1">0.5dB</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">CHANNEL ALIGNMENT TOLERANCE</span>
            </div>
            <div className="p-5 bg-neutral-950/60 border border-neutral-900 rounded-xl">
              <span className="block text-2xl font-extrabold text-[#dfba6b] mb-1">3 YEARS</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">MANUFACTURING WARRANTY</span>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Checkout / Order Configuration Section */}
      <section id="preorder" className="py-24 bg-[#0A0A0A] px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#dfba6b]/3 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Form Left: User Configuration Input Parameters */}
            <div className="lg:col-span-7 bg-[#121212] border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-8 flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="text-[#dfba6b] text-xs font-mono uppercase tracking-[0.2em]">Secure Configuration</span>
                <h2 className="text-3xl font-extrabold uppercase text-white tracking-tight">
                  Configure Your Delivery
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Each Kronos IV headphone is customized, calibrated, and boxed in our specialized laboratory before dispatch. Secure your unit below.
                </p>
              </div>

              {/* Dynamic Addon Accessories Checkboxes */}
              <div className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-300">Choose Optional Addons</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Case (Included free) */}
                  <div className="p-4 rounded-xl bg-neutral-950 border border-[#dfba6b]/30 flex flex-col justify-between h-32 text-left relative cursor-not-allowed">
                    <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#dfba6b]/10 text-[#dfba6b] text-[8px] font-bold uppercase">FREE</span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Storage Case</h4>
                      <p className="text-[10px] text-neutral-500 mt-1 leading-snug">Hard-shell storage protection bag.</p>
                    </div>
                    <span className="text-xs font-bold text-[#dfba6b] mt-2 font-mono">INCLUDED</span>
                  </div>

                  {/* Gold Braided Cable */}
                  <button 
                    onClick={() => {
                      setAccessories(prev => ({ ...prev, goldCable: !prev.goldCable }));
                      showToast(accessories.goldCable ? "Premium Braided Cable removed" : "Premium Gold-Braided Cable selected");
                    }}
                    className={`p-4 rounded-xl text-left h-32 flex flex-col justify-between transition-all border ${
                      accessories.goldCable 
                        ? 'bg-neutral-950 border-[#dfba6b]/60' 
                        : 'bg-[#161616] border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Audiophile Cord</h4>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${accessories.goldCable ? 'border-[#dfba6b] bg-[#dfba6b]' : 'border-neutral-700'}`}>
                        {accessories.goldCable && <Check className="w-2.5 h-2.5 text-black font-bold" />}
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-1 leading-snug">2-meter gold-braided copper coiled cable.</p>
                    <span className="text-xs font-bold text-white mt-2 font-mono">+$35</span>
                  </button>

                  {/* Studio Aluminum Stand */}
                  <button 
                    onClick={() => {
                      setAccessories(prev => ({ ...prev, stand: !prev.stand }));
                      showToast(accessories.stand ? "Studio Headphone Stand removed" : "Studio Headphone Stand selected");
                    }}
                    className={`p-4 rounded-xl text-left h-32 flex flex-col justify-between transition-all border ${
                      accessories.stand 
                        ? 'bg-neutral-950 border-[#dfba6b]/60' 
                        : 'bg-[#161616] border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Acoustic Stand</h4>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${accessories.stand ? 'border-[#dfba6b] bg-[#dfba6b]' : 'border-neutral-700'}`}>
                        {accessories.stand && <Check className="w-2.5 h-2.5 text-black font-bold" />}
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-1 leading-snug">Solid brushed-aluminum desktop headphone tower.</p>
                    <span className="text-xs font-bold text-white mt-2 font-mono">+$55</span>
                  </button>

                </div>
              </div>

              {/* Trust badges footer */}
              <div className="grid grid-cols-3 gap-2 text-center text-neutral-400 text-[10px] font-mono uppercase pt-4 border-t border-neutral-900/60">
                <div className="flex items-center justify-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#dfba6b]" />
                  <span>Secure Pay</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#dfba6b]" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#dfba6b]" />
                  <span>Calibrated</span>
                </div>
              </div>

            </div>

            {/* Form Right: Live Invoice Visualizer & Instant Purchase Button */}
            <div className="lg:col-span-5 bg-[#161616] border border-[#dfba6b]/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#dfba6b]/5 rounded-full blur-xl"></div>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">Acoustic Invoice Preview</span>
                  <span className="text-xs font-mono text-[#dfba6b]">VERIFIED</span>
                </div>

                {/* Simulated Invoice Items */}
                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Core build item */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-white uppercase tracking-wider">KRONOS IV Wireless</span>
                      <span className="text-[10px] text-neutral-500 block">Colorway: {colors[selectedColor].name}</span>
                    </div>
                    <span className="text-white font-bold">${basePrice}.00</span>
                  </div>

                  {/* Engraving detail */}
                  {customEngraving && (
                    <div className="flex justify-between items-center text-[10px] text-[#dfba6b] bg-[#dfba6b]/5 border border-[#dfba6b]/20 px-2.5 py-1.5 rounded">
                      <span>Laser Engraving Engraved:</span>
                      <span className="font-bold font-mono tracking-widest">{customEngraving}</span>
                    </div>
                  )}

                  {/* Travel case */}
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Premium Travel Case Addon</span>
                    <span className="text-[#dfba6b] text-[10px] font-bold uppercase">INCLUDED</span>
                  </div>

                  {/* Coiled cable addon */}
                  {accessories.goldCable && (
                    <div className="flex justify-between items-center text-neutral-300">
                      <span>2m Coiled Brass Audio Cable</span>
                      <span className="font-bold text-white">$35.00</span>
                    </div>
                  )}

                  {/* Aluminum stand addon */}
                  {accessories.stand && (
                    <div className="flex justify-between items-center text-neutral-300">
                      <span>Aluminum Headphone Desktop Stand</span>
                      <span className="font-bold text-white">$55.00</span>
                    </div>
                  )}

                  {/* Shipping */}
                  <div className="flex justify-between items-center text-neutral-400">
                    <span>Priority Insured Delivery</span>
                    <span className="text-[#dfba6b] text-[10px] font-bold uppercase">FREE</span>
                  </div>

                </div>

                {/* Total Invoice */}
                <div className="p-4 rounded-xl bg-black border border-neutral-900 flex justify-between items-center">
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-neutral-500 mb-0.5">ESTIMATED TOTAL USD</span>
                    <span className="text-2xl font-extrabold text-white tracking-tight">${totalPrice}.00</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">VAT Included</span>
                </div>

              </div>

              {/* Order Submission Form */}
              <div className="space-y-4 mt-8">
                <button 
                  onClick={() => {
                    showToast("Order Process Initiated. Redirecting to Sandbox gateway...");
                    setTimeout(() => {
                      showToast("SUCCESS! Your reservation for KRONOS IV is locked.");
                    }, 1500);
                  }}
                  className="w-full py-4 rounded-xl bg-[#dfba6b] hover:bg-[#ebd095] text-black text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#dfba6b]/15 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-black" />
                  Transmit Secure Order
                </button>
                <p className="text-[9px] text-neutral-500 text-center leading-normal">
                  Clicking secures immediate allocation. Fully refundable reservation prior to build initiation.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* High Fidelity Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900/80 text-neutral-500 py-16 px-6 relative overflow-hidden">
        
        {/* Ground Wave graphic decor in background */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,96 C240,128 480,160 720,128 C960,96 1200,32 1440,64 L1440,200 L0,200 Z" fill="#dfba6b"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <span className="text-[#dfba6b] font-bold text-sm tracking-tighter">K</span>
              </div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">KRONOS</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Meticulously designing luxury class personal monitoring instruments for music creators, acoustic purists, and high-fidelity connoisseurs.
            </p>
            <span className="block text-[10px] font-mono text-neutral-600">
              © 2026 KRONOS AUDIO LABS. ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Acoustic DNA</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#experience" className="hover:text-white transition-colors">Tactile Simulator</a></li>
              <li><a href="#bento-specs" className="hover:text-white transition-colors">Technical Specification</a></li>
              <li><a href="#customizer" className="hover:text-white transition-colors">Interactive Colorizer</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">Resonance Anatomy</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Standards */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal Parameters</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Calibration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Shield</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Device Licensing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refunding Rules</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscriber */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Acoustic Dispatch</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Register to receive priority invitations for limited material releases and custom tuning calibrations.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="audiophile@email.com" 
                className="px-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded focus:outline-none focus:border-[#dfba6b] text-white flex-1"
              />
              <button 
                onClick={() => {
                  showToast("Subscription successful! Welcome to the Archive.");
                }}
                className="px-4 py-2 rounded bg-[#dfba6b] hover:bg-[#ebd095] text-black text-xs font-extrabold uppercase tracking-wider"
              >
                Join
              </button>
            </div>
            <div className="text-[10px] tracking-wide text-neutral-600 block">
              Curated by tg:Lana.design
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
