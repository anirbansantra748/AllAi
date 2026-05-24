import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  MapPin, 
  Users, 
  Sliders, 
  ArrowRight, 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Pause, 
  Grid, 
  Volume2, 
  VolumeX, 
  X,
  ExternalLink,
  BookOpen,
  MousePointerClick,
  Download,
  Info
} from 'lucide-react';

// Pre-defined color system matching the inspiration image
const THEMES = {
  royalNavy: {
    name: "Royal Navy & Ivory",
    bg: "bg-[#FAF7F0]",
    text: "text-[#111111]",
    accentText: "text-[#182C81]",
    accentBg: "bg-[#182C81]",
    accentBorder: "border-[#182C81]",
    accentHover: "hover:bg-[#2342c4]",
    mutedBg: "bg-[#F2EEDF]",
    gridLine: "border-[#182C81]/15",
    contrastBg: "bg-[#182C81]",
    contrastText: "text-white",
    cardBg: "bg-white",
  },
  emeraldSage: {
    name: "Emerald Sage & Pearl",
    bg: "bg-[#F4F6F0]",
    text: "text-[#1A1A1A]",
    accentText: "text-[#143D2A]",
    accentBg: "bg-[#143D2A]",
    accentBorder: "border-[#143D2A]",
    accentHover: "hover:bg-[#1E5C3F]",
    mutedBg: "bg-[#EBF0E6]",
    gridLine: "border-[#143D2A]/15",
    contrastBg: "bg-[#143D2A]",
    contrastText: "text-white",
    cardBg: "bg-white",
  },
  terracotta: {
    name: "Earthy Terracotta",
    bg: "bg-[#FAF5F0]",
    text: "text-[#1D1A18]",
    accentText: "text-[#8C3A1A]",
    accentBg: "bg-[#8C3A1A]",
    accentBorder: "border-[#8C3A1A]",
    accentHover: "hover:bg-[#B34D24]",
    mutedBg: "bg-[#F2E8DC]",
    gridLine: "border-[#8C3A1A]/15",
    contrastBg: "bg-[#8C3A1A]",
    contrastText: "text-white",
    cardBg: "bg-white",
  },
  monochrome: {
    name: "Carbon Editorial",
    bg: "bg-[#FAFAFA]",
    text: "text-[#0F0F0F]",
    accentText: "text-[#1C1C1C]",
    accentBg: "bg-[#1C1C1C]",
    accentBorder: "border-[#1C1C1C]",
    accentHover: "hover:bg-[#333333]",
    mutedBg: "bg-[#EFEFEF]",
    gridLine: "border-[#1C1C1C]/15",
    contrastBg: "bg-[#1C1C1C]",
    contrastText: "text-white",
    cardBg: "bg-white",
  }
};

// Curated high-end architectural and boardroom images matching the brochure panels
const BROCHURE_IMAGES = {
  architectureHero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  boardroom: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  skyscraperUpward: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  interiorMinimal: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  architectDrawing: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  concreteFacade: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  teamMember1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  teamMember2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  teamMember3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
};

export default function App() {
  const [selectedThemeKey, setSelectedThemeKey] = useState("royalNavy");
  const [currentSpread, setCurrentSpread] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [interactiveSkill, setInteractiveSkill] = useState(85);
  const [activeLocation, setActiveLocation] = useState("Global Headquarters");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const theme = THEMES[selectedThemeKey];

  // Helper for mock UI clicks with clean browser feedback
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 4000);
    playUISound();
  };

  // Synthesis of simple retro boutique UI sound
  const playUISound = () => {
    if (!audioPlaying) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); // high clean frequency
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      // Audio context block bypass
    }
  };

  const spreadsData = [
    {
      title: "01 & 02: Introduction & Overview",
      leftPage: {
        subtitle: "INTRODUCTION",
        headline: "REDEFINING MODERN SPACE & FORM",
        content: "Aesthetic spaces shape the way we innovate, align, and communicate. We orchestrate structural solutions that combine raw modernist geometry with premium architectural philosophy.",
        image: BROCHURE_IMAGES.architectureHero,
        badge: "ABOUT US · 01"
      },
      rightPage: {
        verticalBarText: "TABLE OF CONTENT",
        contentsList: [
          { num: "01", name: "ABOUT US", page: "01" },
          { num: "02", name: "OUR VISION", page: "02" },
          { num: "03", name: "OUR CORE SERVICES", page: "03" },
          { num: "04", name: "CREATIVE STRATEGIES", page: "04" },
          { num: "05", name: "OUR CREATIVE TEAM", page: "05" },
          { num: "06", name: "GLOBAL CONNECTIVITY", page: "06" }
        ],
        badge: "VOLUME I · 2026"
      }
    },
    {
      title: "03 & 04: Vision Timeline & Direction",
      leftPage: {
        subtitle: "OUR VISION",
        headline: "OUR STRATEGIC TIME HORIZON",
        timeline: [
          { year: "01", title: "CONCEPT DESIGN", desc: "Forging bold blueprints that disrupt regional paradigms." },
          { year: "02", title: "MATERIAL SELECTION", desc: "Sourcing premium sustainable aggregates, concrete & metal." },
          { year: "03", title: "GRID FORMATION", desc: "Constructing ultra-resilient architectural grid foundations." }
        ],
        badge: "CORE PRINCIPLE · 02"
      },
      rightPage: {
        subtitle: "INTEGRATED SYSTEMS",
        gridItems: [
          { title: "STRUCTURAL DEPTH", value: "25%", desc: "Deeper foundations for soaring modern structures." },
          { title: "EMISSION REDUCTION", value: "-15%", desc: "Carefully calibrated material extraction lines." },
          { title: "REINFORCED STRUCT", value: "85k", desc: "Metric tons of engineered high-tensile framework." }
        ],
        image: BROCHURE_IMAGES.skyscraperUpward,
        badge: "METRICS · 2026"
      }
    },
    {
      title: "05 & 06: Our Service & Capabilities",
      leftPage: {
        subtitle: "OUR SERVICE",
        headline: "CRAFTING PREMIUM SPATIAL SYSTEMS",
        features: [
          { num: "01", title: "ARCHITECTURAL BLUEPRINTING", desc: "Uncompromising attention to spatial densities and shadow mechanics." },
          { num: "02", title: "INTERIOR MASTER PLANNING", desc: "Bespoke furnishings aligned perfectly within functional limits." }
        ],
        badge: "OFFERINGS · 03"
      },
      rightPage: {
        subtitle: "EFFICIENCY DIALS",
        isDialPage: true,
        dials: [
          { percent: 85, label: "SPATIAL OPTIMIZATION" },
          { percent: 72, label: "RESOURCE RECYCLING" }
        ],
        image: BROCHURE_IMAGES.interiorMinimal,
        badge: "PERFORMANCE · 04"
      }
    },
    {
      title: "07 & 08: Global Work & Footprint",
      leftPage: {
        subtitle: "CREATIVE FOOTPRINT",
        headline: "OUR GLOBAL GEOMETRIC CANVAS",
        hasWorldMap: true,
        badge: "PORTFOLIO · 05"
      },
      rightPage: {
        subtitle: "REGIONAL HUBS",
        locations: [
          { name: "New York Hub", rate: "94%", active: true },
          { name: "Tokyo Atelier", rate: "88%", active: false },
          { name: "Berlin Studio", rate: "91%", active: false }
        ],
        image: BROCHURE_IMAGES.concreteFacade,
        badge: "PRESENCE · 06"
      }
    },
    {
      title: "09 & 10: Master Team & Core Skills",
      leftPage: {
        subtitle: "OUR CREATE TEAM",
        headline: "THE ARCHITECTS OF COMPOSITION",
        founderQuote: '"Architecture is a continuous silent conversation between spatial volume, direct sunlight, and physical structure."',
        founderName: "A. Vance, Principal Designer",
        badge: "LEADERSHIP · 07"
      },
      rightPage: {
        subtitle: "OUR SKILL INDEX",
        hasTeamMembers: true,
        skills: [
          { name: "Structural Engineering", value: 92 },
          { name: "Generative Cad Modeling", value: 88 },
          { name: "Sustainable Aggregates", value: 95 }
        ],
        badge: "EXPERTISE · 08"
      }
    }
  ];

  const handleNextSpread = () => {
    setCurrentSpread((prev) => (prev + 1) % spreadsData.length);
    playUISound();
  };

  const handlePrevSpread = () => {
    setCurrentSpread((prev) => (prev - 1 + spreadsData.length) % spreadsData.length);
    playUISound();
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-all duration-500 relative flex flex-col selection:bg-[#182C81] selection:text-white`}>
      
      {/* Dynamic Toast System */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111111] text-white px-5 py-4 shadow-2xl rounded-none border-l-4 border-amber-400 flex items-center space-x-3 text-sm tracking-wider animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage("")} className="text-stone-400 hover:text-white pl-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Font Imports via style tag for extreme typographic control */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap');
        
        .font-serif-elegant {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-syne {
          font-family: 'Syne', sans-serif;
        }
        .font-sans-modern {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        /* Grayscale image style with premium warm/cool tone tint matching the brochure */
        .editorial-image-tint {
          filter: grayscale(100%) contrast(108%) brightness(95%);
          mix-blend-mode: multiply;
        }
        
        .grid-line-vertical {
          background-image: linear-gradient(to bottom, rgba(24, 44, 129, 0.15) 50%, rgba(255, 255, 255, 0) 0%);
          background-position: right;
          background-size: 1px 12px;
          background-repeat: repeat-y;
        }
      `}</style>

      {/* HEADER SECTION - Beautiful grid aligned bar */}
      <header className={`sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b ${theme.gridLine} transition-all duration-300 font-sans-modern`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Brand Frame */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => triggerToast("Exploring Aethel Grid system.")}>
            <div className={`w-8 h-8 ${theme.accentBg} flex items-center justify-center text-white font-serif-elegant font-bold text-lg`}>
              Æ
            </div>
            <div>
              <span className="font-syne font-bold text-lg tracking-widest text-[#111111]">AETHEL</span>
              <span className="block text-[8px] tracking-[0.25em] text-[#888]">ARCHITECTURAL SYSTEMS</span>
            </div>
          </div>

          {/* Centered Premium Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest text-stone-600">
            <a href="#interactive-simulator" className={`hover:${theme.accentText} transition-colors flex items-center space-x-1`}>
              <span>01 / INTERACTIVE BROCHURE</span>
            </a>
            <a href="#core-offerings" className={`hover:${theme.accentText} transition-colors`}>02 / THE ARCHITECTURAL GRID</a>
            <a href="#performance-metrics" className={`hover:${theme.accentText} transition-colors`}>03 / PERFORMANCE INDEX</a>
            <a href="#about-philosophy" className={`hover:${theme.accentText} transition-colors`}>04 / EDITORIAL DNA</a>
          </nav>

          {/* Interactive Action Controls */}
          <div className="flex items-center space-x-4">
            {/* Audio Toggle button */}
            <button 
              onClick={() => {
                setAudioPlaying(!audioPlaying);
                triggerToast(audioPlaying ? "UI sound synthesizer disabled." : "UI sound synthesizer enabled! Click on components to listen.");
              }}
              className={`p-2.5 rounded-none border ${theme.gridLine} text-stone-700 hover:bg-stone-100 transition-colors relative group`}
              title="Toggle Audio Feedback"
            >
              {audioPlaying ? <Volume2 className="w-4 h-4 text-[#182C81]" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
              <span className="absolute hidden group-hover:block bottom-[-35px] right-0 bg-[#111111] text-white text-[9px] py-1 px-2 whitespace-nowrap z-50">
                SOUND {audioPlaying ? "ON" : "OFF"}
              </span>
            </button>

            {/* Customizer Drawer Trigger */}
            <button 
              onClick={() => setCustomizerOpen(!customizerOpen)}
              className={`px-4 py-2.5 text-xs font-semibold tracking-widest uppercase border-2 ${theme.accentBorder} ${theme.accentText} hover:bg-white transition-all flex items-center space-x-2`}
            >
              <Sliders className="w-3.5 h-3.5 animate-spin-slow" />
              <span className="hidden sm:inline">CUSTOMIZE THEME</span>
            </button>
          </div>
        </div>
      </header>

      {/* DESIGN CUSTOMIZER FLOATING PANEL */}
      {customizerOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl border-l border-stone-300 p-6 flex flex-col font-sans-modern justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <h3 className="font-syne font-bold text-sm tracking-wider">VISUAL SYSTEM SELECTOR</h3>
              <button onClick={() => setCustomizerOpen(false)} className="text-stone-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-xs text-stone-500 mt-3 leading-relaxed">
              Your uploaded brochure image displays a highly calculated color system. Modify the active theme instantly to see how the mathematical grids and spaces adapt.
            </p>

            {/* Accent Theme Grid */}
            <div className="mt-6 space-y-3">
              <label className="text-xs font-bold tracking-widest text-stone-400 uppercase">CHOOSE COMPOSITION TONE</label>
              {Object.keys(THEMES).map((key) => {
                const item = THEMES[key];
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedThemeKey(key);
                      triggerToast(`Switched theme to: ${item.name}`);
                    }}
                    className={`w-full p-3 text-left border ${selectedThemeKey === key ? 'border-2 border-[#182C81] bg-stone-50' : 'border-stone-200'} transition-all flex items-center space-x-3`}
                  >
                    <span className={`w-5 h-5 ${item.accentBg} border border-stone-300`} />
                    <div>
                      <span className="block text-xs font-bold text-stone-800">{item.name}</span>
                      <span className="text-[10px] text-stone-400 font-serif-elegant italic">Pure Architectural Accent</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Layout parameters */}
            <div className="mt-8 space-y-4">
              <label className="text-xs font-bold tracking-widest text-stone-400 uppercase">LIVE CALIBRATION CONTROLS</label>
              <div className="bg-stone-50 p-4 border border-stone-200">
                <span className="block text-xs text-stone-600 mb-2">Simulated Asset Optimization</span>
                <input 
                  type="range" 
                  min="50" 
                  max="100" 
                  value={interactiveSkill} 
                  onChange={(e) => {
                    setInteractiveSkill(Number(e.target.value));
                    playUISound();
                  }}
                  className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#182C81]"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-2 font-mono">
                  <span>CAPACITY: {interactiveSkill}%</span>
                  <span>OPTIMIZED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200">
            <button 
              onClick={() => {
                setSelectedThemeKey("royalNavy");
                setCustomizerOpen(false);
                triggerToast("Reset color system back to Royal Navy.");
              }}
              className="w-full py-2.5 text-xs tracking-widest font-bold text-center border border-stone-300 hover:bg-stone-100 transition-colors uppercase"
            >
              RESET TO ORIGINAL BLUE
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION - SPLIT EDITORIAL DESIGN */}
      <section className="relative overflow-hidden border-b border-stone-200 font-sans-modern">
        {/* Dynamic decorative absolute line arrays (brochure aesthetic) */}
        <div className="absolute top-0 right-[40%] bottom-0 w-px bg-[#182C81]/10 hidden lg:block" />
        <div className="absolute top-0 right-[15%] bottom-0 w-px bg-[#182C81]/5 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Page Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 border border-[#182C81]/30 px-3 py-1 bg-white">
              <span className={`w-2 h-2 ${theme.accentBg} inline-block`} />
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#182C81]">VOLUME I / EDITORIAL BLUEPRINT</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-syne font-extrabold tracking-tight text-stone-900 leading-[1.05] uppercase">
              The Architecture of <span className={`${theme.accentText} underline decoration-wavy decoration-1`}>Structure</span> & Space.
            </h1>
            
            <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-2xl font-serif-elegant">
              Step into the exact design system represented in the high-end editorial brochure. Clean alignments, deep contrast blue panels, balanced geometric density, and absolute clarity. Built for modern ateliers, design-focused corporations, and premium structural leaders.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="#interactive-simulator" 
                className={`px-8 py-4 ${theme.accentBg} text-white font-semibold tracking-widest text-xs uppercase hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 rounded-none group`}
                onClick={playUISound}
              >
                <span>OPEN BROCHURE SIMULATOR</span>
                <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button 
                onClick={() => {
                  triggerToast("Downloading full editorial specification booklet PDF...");
                }}
                className={`px-8 py-4 bg-white border border-stone-300 text-stone-800 font-semibold tracking-widest text-xs uppercase hover:bg-stone-50 transition-all flex items-center justify-center space-x-2`}
              >
                <span>DOWNLOAD SCHEMATICS (PDF)</span>
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Metrics Badge Block */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-stone-300/60 max-w-lg">
              <div>
                <span className="block text-2xl font-syne font-bold text-[#182C81]">01 / ARCH</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">DESIGN SYSTEM</span>
              </div>
              <div>
                <span className="block text-2xl font-syne font-bold text-[#182C81]">2026</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">HORIZON YEAR</span>
              </div>
              <div>
                <span className="block text-2xl font-syne font-bold text-[#182C81]">100%</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">GRID ALIGNED</span>
              </div>
            </div>
          </div>

          {/* Hero Right Page Mock Image Panel (The classic brochure layout) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-4 border-[#182C81]/20 p-3 bg-white">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#182C81]" />
              
              {/* Monochromatic image frame with tint */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-900">
                <img 
                  src={BROCHURE_IMAGES.architectureHero} 
                  alt="Minimal Editorial Architecture Facade" 
                  className="w-full h-full object-cover opacity-90 editorial-image-tint transition-all duration-700 hover:scale-105"
                />
                
                {/* Embedded Brochure Tag Layout */}
                <div className="absolute bottom-6 left-6 right-6 bg-white p-5 space-y-2 border-l-4 border-[#182C81]">
                  <span className="text-[9px] font-bold tracking-widest text-[#182C81] block">FEATURED COMPOSITION / 01</span>
                  <h4 className="font-syne font-bold text-xs tracking-wider text-[#111111]">THE GLASS BRUTALIST PAVILION</h4>
                  <p className="text-[10px] text-stone-500 leading-normal font-serif-elegant">
                    A multi-layered architectural grid framework designed for absolute transparency and deep environmental sync.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BROCHURE SECTION INTRO */}
      <section className="bg-stone-100 py-12 px-6 border-b border-stone-300">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.3em] text-stone-400 block">BROCHURE SHOWCASE INTRO</span>
          <h2 className="text-3xl font-syne font-bold text-stone-900 tracking-tight uppercase">EXPERIENCE THE PRINT LAYOUT DIGITALLY</h2>
          <p className="text-sm text-stone-600 leading-relaxed font-serif-elegant max-w-2xl mx-auto">
            The container directly below behaves like a tactile double-page printed magazine. Click the tabs, flip through pages, or experiment with dials. It matches your uploaded template with pixel-level precision.
          </p>
        </div>
      </section>

      {/* THE HEART OF THE PAGE: INTERACTIVE DOUBLE-PAGE PRINT BROCHURE SIMULATOR */}
      <section id="interactive-simulator" className="py-16 px-6 bg-stone-100/60 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Spreadsheet Header / Menu Selector */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-stone-300">
            {/* Left page indicator */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className={`w-2.5 h-2.5 ${theme.accentBg}`} />
              <span className="font-syne font-bold text-sm tracking-widest text-stone-800">
                CURRENT COMPOSITION: SPREAD {currentSpread + 1} / {spreadsData.length}
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handlePrevSpread}
                className="p-3 bg-white border border-stone-300 hover:bg-stone-50 text-[#111] font-bold tracking-widest text-xs transition-all uppercase flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREV SPREAD</span>
              </button>
              <button 
                onClick={handleNextSpread}
                className="p-3 bg-white border border-stone-300 hover:bg-stone-50 text-[#111] font-bold tracking-widest text-xs transition-all uppercase flex items-center space-x-1"
              >
                <span>NEXT SPREAD</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Click Spread Shortcuts */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8 font-sans-modern">
            {spreadsData.map((spread, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSpread(idx);
                  triggerToast(`Opened Spread: ${spread.title}`);
                }}
                className={`py-3 px-2 border text-center transition-all ${
                  currentSpread === idx 
                    ? `${theme.accentBg} text-white border-transparent` 
                    : 'bg-white border-stone-300 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="block text-[10px] uppercase font-bold tracking-widest">SPREAD 0{idx + 1}</span>
                <span className="block text-[9px] opacity-70 truncate max-w-full font-serif-elegant">
                  {idx === 0 && "Introduction"}
                  {idx === 1 && "Vision Timeline"}
                  {idx === 2 && "Our Services"}
                  {idx === 3 && "Global Footprint"}
                  {idx === 4 && "Our Design Team"}
                </span>
              </button>
            ))}
          </div>

          {/* THE DIGITAL DOUBLE-PAGE CONTAINER */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-px bg-stone-300 border border-stone-300 shadow-2xl relative transition-all duration-700 min-h-[580px]`}>
            
            {/* Center fold shadows representing real book spine depth */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[30px] -translate-x-1/2 bg-gradient-to-r from-black/5 via-black/15 to-black/5 pointer-events-none z-20 hidden lg:block" />

            {/* PAGE LEFT (FLUID CONTENT & LAYOUTS) */}
            <div className={`${theme.bg} ${theme.text} p-8 md:p-12 flex flex-col justify-between transition-colors duration-500 relative overflow-hidden min-h-[500px]`}>
              
              {/* Architectural Grid Underlay Pattern */}
              <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border-r border-[#182C81]" />
                ))}
              </div>

              {/* Top Banner Row */}
              <div className="flex justify-between items-center border-b pb-4 border-stone-300/60 z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#182C81]">{spreadsData[currentSpread].leftPage.badge}</span>
                <span className="text-[10px] font-bold text-stone-400">PAGE AETHEL_0{(currentSpread * 2) + 1}</span>
              </div>

              {/* Dynamic Left Content Switcher based on Spread Index */}
              <div className="my-8 space-y-6 z-10">
                <span className={`text-xs font-bold tracking-[0.3em] ${theme.accentText} uppercase block`}>
                  {spreadsData[currentSpread].leftPage.subtitle}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-syne font-extrabold tracking-tight leading-tight uppercase max-w-md">
                  {spreadsData[currentSpread].leftPage.headline}
                </h3>

                {/* Timeline Layout (Spread 2) */}
                {spreadsData[currentSpread].leftPage.timeline && (
                  <div className="space-y-4 pt-2 font-sans-modern">
                    {spreadsData[currentSpread].leftPage.timeline.map((item, index) => (
                      <div key={index} className="flex space-x-4 border-l border-[#182C81] pl-4 relative">
                        <span className={`absolute left-[-4px] top-1.5 w-2 h-2 ${theme.accentBg}`} />
                        <div>
                          <span className="text-xs font-bold text-[#182C81] tracking-widest uppercase">STAGE {item.year} / {item.title}</span>
                          <p className="text-xs text-stone-600 mt-1 leading-relaxed font-serif-elegant">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features Layout (Spread 3) */}
                {spreadsData[currentSpread].leftPage.features && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 font-sans-modern">
                    {spreadsData[currentSpread].leftPage.features.map((item, index) => (
                      <div key={index} className="p-4 border border-stone-300/80 bg-white/70 backdrop-blur-sm">
                        <span className="block text-xs font-bold text-[#182C81] mb-1">0{index + 1} / {item.title}</span>
                        <p className="text-[11px] text-stone-500 leading-normal font-serif-elegant">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Global Map Interactive Layout (Spread 4) */}
                {spreadsData[currentSpread].leftPage.hasWorldMap && (
                  <div className="space-y-4 pt-2 font-sans-modern">
                    <p className="text-xs text-stone-600 font-serif-elegant">
                      We span multiple geographical meridians. Hover or click over active nodes below to preview localized metrics:
                    </p>
                    
                    {/* SVG Interactive World Map Mock */}
                    <div className="relative bg-white border border-stone-300 p-4 aspect-[2/1] flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 100 50" className="w-full h-full opacity-60">
                        {/* Simple vector continent mocks */}
                        <path d="M10,12 C18,10 25,18 20,28 C15,35 12,25 10,12 Z" fill="#ccc" />
                        <path d="M45,15 C55,8 65,12 60,25 C55,35 48,28 45,15 Z" fill="#aaa" />
                        <path d="M75,20 C85,15 90,25 80,35 C75,40 70,30 75,20 Z" fill="#ddd" />
                        {/* Dynamic Active Nodes */}
                        <circle cx="22" cy="20" r="1.5" className="fill-[#182C81] animate-ping" />
                        <circle cx="22" cy="20" r="1" className="fill-[#182C81]" />
                        <circle cx="55" cy="22" r="1.5" className="fill-[#182C81] animate-ping" />
                        <circle cx="55" cy="22" r="1" className="fill-[#182C81]" />
                        <circle cx="82" cy="28" r="1.5" className="fill-[#182C81] animate-ping" />
                        <circle cx="82" cy="28" r="1" className="fill-[#182C81]" />
                      </svg>

                      {/* Interactive map tooltips */}
                      <div className="absolute inset-0 flex justify-around items-end pb-2">
                        <button 
                          onClick={() => {
                            setActiveLocation("New York Atelier");
                            triggerToast("Consulting with New York Architectural Hub.");
                          }}
                          className={`px-2 py-1 text-[9px] font-bold border transition-all ${activeLocation === "New York Atelier" ? 'bg-[#182C81] text-white' : 'bg-white text-[#111]'}`}
                        >
                          AMER NODE
                        </button>
                        <button 
                          onClick={() => {
                            setActiveLocation("Berlin Studio");
                            triggerToast("Consulting with Berlin Brutalist Studio.");
                          }}
                          className={`px-2 py-1 text-[9px] font-bold border transition-all ${activeLocation === "Berlin Studio" ? 'bg-[#182C81] text-white' : 'bg-white text-[#111]'}`}
                        >
                          EURO NODE
                        </button>
                        <button 
                          onClick={() => {
                            setActiveLocation("Tokyo Hub");
                            triggerToast("Consulting with Tokyo Metabolism Labs.");
                          }}
                          className={`px-2 py-1 text-[9px] font-bold border transition-all ${activeLocation === "Tokyo Hub" ? 'bg-[#182C81] text-white' : 'bg-white text-[#111]'}`}
                        >
                          APAC NODE
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Team & Founder Section (Spread 5) */}
                {spreadsData[currentSpread].leftPage.founderQuote && (
                  <div className="space-y-4 pt-2">
                    <p className="text-xl italic font-serif-elegant text-stone-700 leading-relaxed border-l-2 border-[#182C81] pl-4">
                      {spreadsData[currentSpread].leftPage.founderQuote}
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-stone-900 tracking-wider font-syne">
                        {spreadsData[currentSpread].leftPage.founderName}
                      </span>
                      <span className="text-[10px] text-stone-400 uppercase tracking-widest font-sans-modern">FOUNDING ARCHITECT</span>
                    </div>
                  </div>
                )}

                {/* Default General Text (Spread 1 / Default) */}
                {!spreadsData[currentSpread].leftPage.timeline && 
                 !spreadsData[currentSpread].leftPage.features && 
                 !spreadsData[currentSpread].leftPage.hasWorldMap && 
                 !spreadsData[currentSpread].leftPage.founderQuote && (
                  <div className="space-y-4">
                    <p className="text-sm text-stone-600 leading-relaxed font-serif-elegant">
                      {spreadsData[currentSpread].leftPage.content}
                    </p>
                    <div className="pt-2">
                      <img 
                        src={spreadsData[currentSpread].leftPage.image} 
                        alt="Spread Left Layout Detail" 
                        className="w-full h-36 object-cover editorial-image-tint border border-stone-200"
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Layout Sign-off */}
              <div className="border-t pt-4 border-stone-300/60 flex justify-between text-[10px] tracking-wider text-stone-400 font-sans-modern z-10">
                <span>Æ DESIGN GROUP INDEX</span>
                <span>ISSUE No.12 -- 2026</span>
              </div>
            </div>

            {/* PAGE RIGHT (CONTRAST BLOCK / METRICS / NAVIGATION SYSTEM) */}
            <div className={`bg-white text-stone-900 p-8 md:p-12 flex flex-col justify-between transition-colors duration-500 relative overflow-hidden min-h-[500px]`}>
              
              {/* Optional Signature Dark Accent Box Header */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#182C81]/5 pointer-events-none" />

              {/* Top Banner Row */}
              <div className="flex justify-between items-center border-b pb-4 border-stone-200 z-10">
                <span className="text-[10px] font-bold text-stone-400">PAGE AETHEL_0{(currentSpread * 2) + 2}</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#182C81]">{spreadsData[currentSpread].rightPage.badge}</span>
              </div>

              {/* Dynamic Right Content Switcher based on Spread Index */}
              <div className="my-8 space-y-6 z-10">
                <span className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase block">
                  {spreadsData[currentSpread].rightPage.subtitle}
                </span>

                {/* Table of Contents Layout (Spread 1) */}
                {spreadsData[currentSpread].rightPage.contentsList && (
                  <div className="space-y-2.5 pt-1 font-sans-modern">
                    {spreadsData[currentSpread].rightPage.contentsList.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          triggerToast(`Mapsd internally to section ${item.num} -- ${item.name}`);
                          if (idx === 1) setCurrentSpread(1);
                          if (idx === 2) setCurrentSpread(2);
                          if (idx === 4) setCurrentSpread(4);
                          if (idx === 5) setCurrentSpread(3);
                        }}
                        className="w-full flex items-center justify-between py-2 border-b border-stone-200 hover:border-[#182C81] text-left transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-serif-elegant italic text-[#182C81]">{item.num}</span>
                          <span className="text-xs font-bold tracking-wider text-stone-800 group-hover:text-[#182C81] transition-colors">{item.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-stone-400">P. {item.page}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Grid Metric Layout (Spread 2) */}
                {spreadsData[currentSpread].rightPage.gridItems && (
                  <div className="grid grid-cols-3 gap-3 pt-2 font-sans-modern">
                    {spreadsData[currentSpread].rightPage.gridItems.map((item, idx) => (
                      <div key={idx} className="p-3 border border-stone-200 bg-stone-50 text-center">
                        <span className="block text-2xl font-syne font-extrabold text-[#182C81]">{item.value}</span>
                        <span className="block text-[9px] font-bold tracking-wider text-stone-700 mt-1 uppercase leading-none">{item.title}</span>
                        <p className="text-[9px] text-stone-400 mt-2 leading-tight font-serif-elegant">{item.desc}</p>
                      </div>
                    ))}
                    <div className="col-span-3 pt-2">
                      <img 
                        src={spreadsData[currentSpread].rightPage.image} 
                        alt="Urban Skyscraper Abstract" 
                        className="w-full h-28 object-cover editorial-image-tint border border-stone-200"
                      />
                    </div>
                  </div>
                )}

                {/* Efficiency Dials (Spread 3) */}
                {spreadsData[currentSpread].rightPage.isDialPage && (
                  <div className="space-y-4 pt-1 font-sans-modern">
                    {spreadsData[currentSpread].rightPage.dials.map((dial, idx) => (
                      <div key={idx} className="bg-stone-50 p-4 border border-stone-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold tracking-wider text-stone-700 uppercase">{dial.label}</span>
                          <span className="text-xs font-bold text-[#182C81]">{dial.percent}%</span>
                        </div>
                        {/* Custom animated progress line */}
                        <div className="w-full h-2 bg-stone-200 relative overflow-hidden">
                          <div 
                            className={`h-full ${theme.accentBg} transition-all duration-1000`} 
                            style={{ width: `${dial.percent}%` }}
                          />
                        </div>
                        <span className="text-[9px] text-stone-400 italic block mt-1 font-serif-elegant">Dynamic system metric calibrated 15m ago</span>
                      </div>
                    ))}
                    <div className="relative h-24 overflow-hidden border border-stone-200">
                      <img 
                        src={spreadsData[currentSpread].rightPage.image} 
                        alt="Minimal Editorial Interior Room Detail" 
                        className="w-full h-full object-cover editorial-image-tint"
                      />
                    </div>
                  </div>
                )}

                {/* Locations list (Spread 4) */}
                {spreadsData[currentSpread].rightPage.locations && (
                  <div className="space-y-3 pt-2 font-sans-modern">
                    {spreadsData[currentSpread].rightPage.locations.map((loc, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => {
                          setActiveLocation(loc.name);
                          triggerToast(`Selected ${loc.name} - Dynamic optimization rating: ${loc.rate}`);
                        }}
                        className={`p-3 border transition-all cursor-pointer flex justify-between items-center ${activeLocation.includes(loc.name.split(' ')[0]) ? 'border-[#182C81] bg-[#182C81]/5' : 'border-stone-200 bg-white'}`}
                      >
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3.5 h-3.5 text-[#182C81]" />
                          <span className="text-xs font-bold text-stone-800">{loc.name}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-stone-100 text-stone-700 px-2 py-1">{loc.rate} STATUS</span>
                      </div>
                    ))}
                    <p className="text-[10px] text-stone-400 font-serif-elegant leading-normal">
                      *Regional hubs are equipped with local spatial computing clusters, allowing instantaneous telemetry syncing.
                    </p>
                  </div>
                )}

                {/* Team avatars & skills (Spread 5) */}
                {spreadsData[currentSpread].rightPage.hasTeamMembers && (
                  <div className="space-y-4 pt-1 font-sans-modern">
                    {/* Tiny Team Images row */}
                    <div className="flex space-x-3">
                      {[
                        { img: BROCHURE_IMAGES.teamMember1, name: "S. Thorne", role: "Principal Math Engineer" },
                        { img: BROCHURE_IMAGES.teamMember2, name: "R. Kaelen", role: "Brutalist Lead" },
                        { img: BROCHURE_IMAGES.teamMember3, name: "V. Chen", role: "Aggregate Researcher" }
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => triggerToast(`Contacting team lead: ${item.name} (${item.role})`)}
                          className="flex items-center space-x-2 bg-stone-50 p-1.5 border border-stone-200 hover:border-[#182C81] cursor-pointer transition-all flex-1"
                        >
                          <img src={item.img} alt={item.name} className="w-7 h-7 object-cover grayscale" />
                          <div className="leading-none">
                            <span className="text-[10px] font-bold text-stone-800 block truncate">{item.name}</span>
                            <span className="text-[8px] text-stone-400 block truncate uppercase">{item.role.split(' ')[0]}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Skill Index slider bars */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">COMPREHENSIVE CAPABILITIES</span>
                      {spreadsData[currentSpread].rightPage.skills.map((skill, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-[10px] text-stone-600">
                            <span>{skill.name}</span>
                            <span>{skill.value}%</span>
                          </div>
                          <div className="w-full h-1 bg-stone-100 relative">
                            <div className="h-full bg-stone-800" style={{ width: `${skill.value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Layout Section Index (Vertical Text Representation) */}
              <div className="border-t pt-4 border-stone-200 flex justify-between text-[10px] tracking-wider text-stone-400 font-sans-modern z-10">
                <span>GRID COMPLIANT SPEC</span>
                <span>VOL. I --- ARCHITECTURE</span>
              </div>
            </div>

          </div>

          {/* Table of Contents Shortcut Panel beneath */}
          <div className="mt-8 bg-white p-6 border border-stone-300 font-sans-modern flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <span className="text-xs font-bold text-[#182C81] block">INTERACTIVE DESIGN TELEMETRY</span>
              <p className="text-xs text-stone-500 font-serif-elegant mt-1">
                Currently tracking: <strong className="text-stone-800">{activeLocation}</strong> node operations and <strong className="text-stone-800">{selectedThemeKey}</strong> UI compilation.
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => triggerToast(`Syncing digital telemetry parameters for ${activeLocation}...`)}
                className="px-4 py-2 bg-[#182C81] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#2342c4] transition-all"
              >
                SYNC SYSTEM STATE
              </button>
              <button 
                onClick={() => {
                  setCurrentSpread(0);
                  triggerToast("Returned to introductory booklet page.");
                }}
                className="px-4 py-2 border border-stone-300 text-stone-700 hover:bg-stone-50 text-[10px] font-bold tracking-widest uppercase transition-all"
              >
                RESET TO COVER
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE ARCHITECTURAL GRID (CORE GRID SERVICES) */}
      <section id="core-offerings" className="py-20 px-6 bg-white border-b border-stone-200 font-sans-modern relative">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-stone-200 hidden xl:block" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-stone-200 hidden xl:block" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-6 border-b border-stone-300">
            <div className="lg:col-span-3">
              <span className="text-xs font-bold tracking-[0.3em] text-[#182C81] block uppercase">02 / CORE SERVICES</span>
              <span className="text-[10px] text-stone-400 tracking-widest font-mono">GRID SYSTEM SPECIFICATION</span>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-stone-900 uppercase tracking-tight leading-none">
                OUR FIVE-POINT SPATIAL MECHANICS
              </h2>
              <p className="text-sm text-stone-500 mt-3 font-serif-elegant max-w-2xl leading-relaxed">
                Just as each panel in the printed layout maintains visual alignment, our services adhere to strict physical, digital, and structural constraints. Discover how we balance load and beauty.
              </p>
            </div>
          </div>

          {/* Interactive Service Column Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="border border-stone-300 p-6 flex flex-col justify-between hover:border-[#182C81] transition-all duration-300 group bg-stone-50/50">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-stone-400">01 // STRUCTURAL</span>
                  <div className="w-8 h-8 rounded-none border border-stone-200 flex items-center justify-center group-hover:bg-[#182C81] group-hover:text-white transition-all">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-syne font-bold text-stone-900 uppercase tracking-wider mb-3">
                  Spatial Density & Shadow
                </h4>
                <p className="text-xs text-stone-500 font-serif-elegant leading-relaxed mb-6">
                  Calculations of regional light angles and raw structural dimensions to minimize shadows while maximizing natural light dispersion on raw concrete.
                </p>
              </div>
              <button 
                onClick={() => triggerToast("Exploring Spatial Density Portfolio & blueprint archives.")}
                className="text-[10px] font-bold tracking-widest uppercase text-stone-800 group-hover:text-[#182C81] transition-colors flex items-center space-x-1"
              >
                <span>EXPLORE GRID SYSTEM</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="border border-stone-300 p-6 flex flex-col justify-between hover:border-[#182C81] transition-all duration-300 group bg-stone-50/50">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-stone-400">02 // MATERIALS</span>
                  <div className="w-8 h-8 rounded-none border border-stone-200 flex items-center justify-center group-hover:bg-[#182C81] group-hover:text-white transition-all">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-syne font-bold text-stone-900 uppercase tracking-wider mb-3">
                  High-Tensile Aggregates
                </h4>
                <p className="text-xs text-stone-500 font-serif-elegant leading-relaxed mb-6">
                  Sourcing reinforced composite materials, textured basalt fibers, and self-cleaning glass that mimics architectural textures from our catalog.
                </p>
              </div>
              <button 
                onClick={() => triggerToast("Opening Composite Aggregates resource center.")}
                className="text-[10px] font-bold tracking-widest uppercase text-stone-800 group-hover:text-[#182C81] transition-colors flex items-center space-x-1"
              >
                <span>SENSORY STANDARDS</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="border border-stone-300 p-6 flex flex-col justify-between hover:border-[#182C81] transition-all duration-300 group bg-stone-50/50">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-stone-400">03 // COMPUTATIONAL</span>
                  <div className="w-8 h-8 rounded-none border border-stone-200 flex items-center justify-center group-hover:bg-[#182C81] group-hover:text-white transition-all">
                    <Grid className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-syne font-bold text-stone-900 uppercase tracking-wider mb-3">
                  Procedural CAD Generation
                </h4>
                <p className="text-xs text-stone-500 font-serif-elegant leading-relaxed mb-6">
                  Harnessing mathematical formulas to map out optimal geometric shapes that support extreme loads while preserving minimal profiles.
                </p>
              </div>
              <button 
                onClick={() => triggerToast("Initiating procedural model testing program...")}
                className="text-[10px] font-bold tracking-widest uppercase text-stone-800 group-hover:text-[#182C81] transition-colors flex items-center space-x-1"
              >
                <span>CALCULATE Blueprints</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: PERFORMANCE METRICS & SVG DASHBOARD */}
      <section id="performance-metrics" className="py-20 px-6 bg-stone-100 border-b border-stone-300 font-sans-modern">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.3em] text-[#182C81] block">03 / PERFORMANCE TELEMETRY</span>
            <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-stone-900 uppercase tracking-tight">
              INTERACTIVE PERFORMANCE SYSTEMS
            </h2>
            <p className="text-sm text-stone-600 font-serif-elegant leading-relaxed max-w-2xl mx-auto">
              Each building we deliver functions like a computational node. Click categories below to see live optimization diagnostics recalibrate based on mathematical parameters.
            </p>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "overview", label: "01 / ARCHITECTURAL OVERVIEW" },
              { id: "carbon", label: "02 / CARBON CAPTURE" },
              { id: "thermal", label: "03 / THERMAL EFFICIENCY" },
              { id: "structural", label: "04 / STRUCTURAL RESILIENCE" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  triggerToast(`Recalibrated charts for telemetry: ${tab.label}`);
                }}
                className={`px-5 py-3 text-xs font-bold tracking-wider uppercase border transition-all ${activeTab === tab.id ? 'bg-[#182C81] text-white border-transparent' : 'bg-white border-stone-300 text-stone-600 hover:bg-stone-50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Graphical Data Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Big SVG Live Chart Panel */}
            <div className="lg:col-span-8 bg-white border border-stone-300 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-stone-200 mb-6">
                  <div>
                    <span className="text-xs font-bold text-[#182C81] uppercase block">LIVE PERFORMANCE MATRIX</span>
                    <span className="text-[10px] text-stone-400">ACTIVE COMPLIANCE GRAPH</span>
                  </div>
                  <span className="text-[10px] font-mono bg-green-100 text-green-800 px-2.5 py-1 font-bold">GRID SYNC SECURE</span>
                </div>

                {/* SVG Line & Bar graph representing computational geometry */}
                <div className="h-64 w-full relative bg-stone-50 border border-stone-200 p-4 flex flex-col justify-end">
                  
                  {/* Dynamic Graph Grid Background */}
                  <div className="absolute inset-0 grid grid-rows-4 pointer-events-none p-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="border-b border-stone-200/60 w-full" />
                    ))}
                  </div>

                  {/* SVG Render */}
                  <svg className="w-full h-full absolute inset-0 p-4 z-10" viewBox="0 0 500 200" preserveAspectRatio="none">
                    {/* Graph line path 1 */}
                    <path 
                      d={
                        activeTab === 'overview' ? "M 0 150 Q 100 120 200 80 T 300 140 T 400 60 T 500 100" :
                        activeTab === 'carbon' ? "M 0 180 Q 100 160 200 150 T 300 100 T 400 80 T 500 40" :
                        activeTab === 'thermal' ? "M 0 120 Q 100 60 200 110 T 300 90 T 400 120 T 500 70" :
                        "M 0 140 Q 100 130 200 120 T 300 110 T 400 40 T 500 20"
                      } 
                      fill="none" 
                      stroke="#182C81" 
                      strokeWidth="3.5" 
                      className="transition-all duration-700"
                    />

                    {/* Gradient underlay for path 1 */}
                    <path
                      d={
                        activeTab === 'overview' ? "M 0 150 Q 100 120 200 80 T 300 140 T 400 60 T 500 100 L 500 200 L 0 200 Z" :
                        activeTab === 'carbon' ? "M 0 180 Q 100 160 200 150 T 300 100 T 400 80 T 500 40 L 500 200 L 0 200 Z" :
                        activeTab === 'thermal' ? "M 0 120 Q 100 60 200 110 T 300 90 T 400 120 T 500 70 L 500 200 L 0 200 Z" :
                        "M 0 140 Q 100 130 200 120 T 300 110 T 400 40 T 500 20 L 500 200 L 0 200 Z"
                      }
                      fill="url(#gradient-blue)"
                      className="transition-all duration-700 opacity-10"
                    />

                    {/* SVG Definitions */}
                    <defs>
                      <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#182C81" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                    </defs>

                    {/* Animated node pointers */}
                    <circle cx="200" cy={activeTab === 'overview' ? 80 : activeTab === 'carbon' ? 150 : activeTab === 'thermal' ? 110 : 120} r="5" fill="#182C81" className="transition-all duration-700" />
                    <circle cx="400" cy={activeTab === 'overview' ? 60 : activeTab === 'carbon' ? 80 : activeTab === 'thermal' ? 120 : 40} r="5" fill="#182C81" className="transition-all duration-700" />
                  </svg>
                  
                  {/* Dynamic Axis Labels */}
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-2 pt-2 border-t border-stone-200 z-20">
                    <span>JAN 2026</span>
                    <span>APR 2026</span>
                    <span>JUL 2026</span>
                    <span>OCT 2026</span>
                    <span>DEC 2026</span>
                  </div>
                </div>
              </div>

              {/* Data Explanation Panel Footer */}
              <div className="mt-6 pt-4 border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-bold text-stone-800 uppercase block">Active Metric Interpretation</span>
                  <p className="text-[11px] text-stone-500 font-serif-elegant mt-1">
                    Telemetry values are computed across {activeLocation} using real-time atmospheric aggregate metrics.
                  </p>
                </div>
                <div className="flex items-center space-x-2 md:justify-end">
                  <button 
                    onClick={() => triggerToast(`Exporting current metrics for ${activeTab.toUpperCase()} to standard JSON...`)}
                    className="px-4 py-2 border border-stone-300 hover:bg-stone-50 text-[10px] font-bold tracking-widest uppercase transition-all"
                  >
                    EXPORT ARCHITECTURAL LOGS
                  </button>
                </div>
              </div>

            </div>

            {/* Right Side Stats Column (Matching layout 3 in the brochure) */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
              
              {/* Stat Block 1 */}
              <div className="bg-white border border-stone-300 p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-[#182C81] tracking-widest uppercase">REGIONAL SATURATION</span>
                    <span className="text-xs font-mono text-stone-400">01 / STABILITY</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-syne font-extrabold text-stone-900">
                      {activeTab === 'overview' ? '98.4%' : activeTab === 'carbon' ? '82.1%' : activeTab === 'thermal' ? '91.3%' : '99.9%'}
                    </span>
                    <span className="text-xs text-green-600 font-bold">▲ 0.4%</span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 font-serif-elegant leading-relaxed mt-4">
                  The computed architectural integrity baseline when exposed to intense cross-meridian pressure zones.
                </p>
              </div>

              {/* Stat Block 2 */}
              <div className="bg-white border border-stone-300 p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-[#182C81] tracking-widest uppercase">AGGREGATE DENSITY</span>
                    <span className="text-xs font-mono text-stone-400">02 / INTEGRATION</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-syne font-extrabold text-stone-900">
                      {activeTab === 'overview' ? '1.42t' : activeTab === 'carbon' ? '0.88t' : activeTab === 'thermal' ? '1.15t' : '1.92t'}
                    </span>
                    <span className="text-xs text-stone-400">METRIC CONSTANT</span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 font-serif-elegant leading-relaxed mt-4">
                  Mass ratios of composite aggregate foundations compiled across our structural footprint.
                </p>
              </div>

              {/* Interactive Slide Control Box */}
              <div className={`${theme.accentBg} ${theme.contrastText} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 pointer-events-none" />
                <span className="text-[10px] font-bold tracking-widest block uppercase text-amber-400 mb-2">TELEMETRY PREFERENCE</span>
                <h4 className="text-sm font-syne font-bold uppercase tracking-wider mb-2">Adjust Grid Density Simulation</h4>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-[10px]">
                    <span>GRID COUPLING WEIGHT</span>
                    <span className="font-mono">{interactiveSkill}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="100" 
                    value={interactiveSkill} 
                    onChange={(e) => {
                      setInteractiveSkill(Number(e.target.value));
                      playUISound();
                    }}
                    className="w-full bg-white/30 h-1 rounded appearance-none cursor-pointer"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PROJECT SHOWCASE SECTION & INTERACTIVE PORTFOLIO MODAL */}
      <section className="py-20 px-6 bg-white border-b border-stone-200 font-sans-modern">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-stone-300">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-[#182C81] block uppercase">04 / CREATIVE WORK</span>
              <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-stone-900 uppercase tracking-tight mt-2">
                PORTFOLIO GRID SELECTION
              </h2>
            </div>
            <p className="text-sm text-stone-500 max-w-md mt-4 md:mt-0 font-serif-elegant">
              Click any project block to load interactive site specifics, aggregate composites, and layout blueprints directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "THE COPENHAGEN ATELIER",
                tag: "BRUTALISM / GLASS",
                image: BROCHURE_IMAGES.architectureHero,
                desc: "An isolated design pavilion overlooking the Baltic waterways, built with high-tensile basalt glass.",
                metric: "98% ECO SYNC"
              },
              {
                id: 2,
                title: "THE METABOLISM TOWER",
                tag: "HIGH DENSITY RESIDENCE",
                image: BROCHURE_IMAGES.skyscraperUpward,
                desc: "Dynamic modular living units structured on a massive concrete vertical core framework.",
                metric: "1.2K MASS RATIO"
              },
              {
                id: 3,
                title: "MINIMALIST REFUGEE LABS",
                tag: "EMERGENCY SHELTER GRID",
                image: BROCHURE_IMAGES.interiorMinimal,
                desc: "Quick-deploy modular spaces built using raw textured structural fibers and composite aggregate templates.",
                metric: "100% MODULAR"
              }
            ].map((proj) => (
              <div 
                key={proj.id}
                onClick={() => {
                  setSelectedProject(proj);
                  triggerToast(`Loading architectural blueprint specifications for: ${proj.title}`);
                }}
                className="border border-stone-300 hover:border-[#182C81] transition-all group cursor-pointer bg-stone-50"
              >
                {/* Image Frame */}
                <div className="relative aspect-[3/2] bg-stone-900 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover editorial-image-tint group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-2 py-1 text-[9px] font-bold text-[#182C81] tracking-widest uppercase">
                    {proj.tag}
                  </div>
                </div>

                {/* Content Frame */}
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-stone-400 font-mono">CASE STUDY 0{proj.id}</span>
                    <span className="text-[10px] font-bold text-[#182C81]">{proj.metric}</span>
                  </div>
                  <h4 className="text-base font-syne font-bold text-stone-900 uppercase group-hover:text-[#182C81] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-stone-500 font-serif-elegant leading-relaxed">
                    {proj.desc}
                  </p>
                  
                  {/* Fake interactive CTA */}
                  <div className="pt-2 flex items-center space-x-1.5 text-[10px] font-bold tracking-wider uppercase text-stone-800">
                    <span>VIEW BLUEPRINT SPECIFICATION</span>
                    <ExternalLink className="w-3 h-3 text-[#182C81]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PORTFOLIO BLUEPRINT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-stone-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 font-sans-modern">
          <div className="bg-white max-w-2xl w-full p-8 border-4 border-[#182C81] relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-[10px] font-bold text-[#182C81] tracking-widest uppercase block mb-1">
              ARCHITECTURAL TELEMETRY PORTAL
            </span>
            
            <h3 className="text-2xl font-syne font-extrabold text-stone-900 uppercase tracking-tight mb-4">
              {selectedProject.title} SPECIFICATIONS
            </h3>

            {/* Simulated blueprint layout details */}
            <div className="grid grid-cols-2 gap-4 bg-stone-50 p-4 border border-stone-200 mb-6 font-mono text-[11px] text-stone-600">
              <div>
                <span className="block font-bold text-stone-800">GEOLOCATION MATRIX</span>
                <span>Latitude: 55.6761° N, Longitude: 12.5683° E</span>
              </div>
              <div>
                <span className="block font-bold text-stone-800">COMPLIANCE CODE</span>
                <span>Æ-DK-GRID-2026-X7</span>
              </div>
              <div>
                <span className="block font-bold text-stone-800">COMPOSITE AGGREGATE</span>
                <span>Reinforced fiber-infused structural basalt</span>
              </div>
              <div>
                <span className="block font-bold text-stone-800">GRID SYNC SCORE</span>
                <span>99.2% Alignment Corrected</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 font-serif-elegant leading-relaxed mb-6">
              {selectedProject.desc} Constructed in full compliance with the volumetric and spatial philosophies documented inside the Aethel Architecture Catalog Issue 12. This structure utilizes dynamic load-bearing frames.
            </p>

            <div className="flex space-x-2">
              <button 
                onClick={() => {
                  triggerToast(`Initiating blueprint export protocol for ${selectedProject.title}...`);
                  setSelectedProject(null);
                }}
                className="px-6 py-3 bg-[#182C81] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#2342c4] transition-all"
              >
                REQUEST DESIGN CAD EXPORT
              </button>
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-bold tracking-widest uppercase transition-all"
              >
                CLOSE PORTAL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: EDITORIAL PHILOSOPHY (ABOUT DESIGN DNA) */}
      <section id="about-philosophy" className="py-20 px-6 bg-stone-50 border-b border-stone-200 font-sans-modern">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left structural quote & text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-[#182C81] block uppercase">05 / PHILOSOPHY</span>
              <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-stone-900 uppercase tracking-tight">
                COMPOSITION WITHOUT COMPROMISE
              </h2>
              
              <p className="text-sm text-stone-600 font-serif-elegant leading-relaxed">
                Our approach to digital spatial design is inspired directly by the principles of high-end Swiss and German print editorial formats. Every column layout, border weight, color contrast ratio, and image frame is strictly calculated.
              </p>

              {/* Dynamic Interactive Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  "Calculated grid columns with unified gap thresholds.",
                  "High-contrast color blocking for supreme text legibility.",
                  "Thoughtful integration of grayscale tone photography.",
                  "Mathematical scaling of all structural parameters."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#182C81] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right decorative double column representing brochure pages */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="border border-stone-300 p-6 bg-white space-y-4">
                <span className="text-xs font-bold text-[#182C81] tracking-widest block uppercase">THE PRINT VIBE</span>
                <p className="text-xs text-stone-500 font-serif-elegant leading-relaxed">
                  Notice the soft warmth of the ivory tone background (`#FAF7F0`). This avoids the stark, clinical feel of standard cold-white web layouts, mimicking physical cotton-pressed print paper.
                </p>
                <div className="h-1 bg-[#182C81] w-1/3" />
              </div>

              <div className="border border-stone-300 p-6 bg-white space-y-4">
                <span className="text-xs font-bold text-[#182C81] tracking-widest block uppercase">THE BLUE ACCENT</span>
                <p className="text-xs text-stone-500 font-serif-elegant leading-relaxed">
                  By matching raw ink values of deep corporate blue with charcoal gray typefaces, we establish a robust hierarchy that is elegant, professional, and visually premium.
                </p>
                <div className="h-1 bg-stone-900 w-1/3" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION CONSULTATION PLANNER */}
      <section className="py-20 px-6 bg-[#182C81] text-white font-sans-modern relative overflow-hidden">
        
        {/* Subtle geometric SVG lines underlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="10%" x2="100%" y2="10%" stroke="white" strokeWidth="1" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" />
            <line x1="0" y1="90%" x2="100%" y2="90%" stroke="white" strokeWidth="1" />
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="1" />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 border border-white/20 px-3 py-1 bg-white/5">
            <span className="w-2 h-2 bg-amber-400 inline-block animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-white">INTERACTIVE SCHEDULER</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-syne font-extrabold uppercase tracking-tight leading-none">
            INCORPORATE THE GRID INTO YOUR PROJECT
          </h2>
          
          <p className="text-sm md:text-base text-stone-200 font-serif-elegant max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate? Complete our modular grid planner to instantly connect with an atelier strategist and receive custom structural options.
          </p>

          {/* Interactive Input Form Box */}
          <div className="bg-white text-stone-900 p-6 md:p-8 border border-stone-200 text-left space-y-6 max-w-2xl mx-auto shadow-2xl">
            <span className="text-xs font-bold text-[#182C81] tracking-widest block uppercase">
              GRID PROJECT QUESTIONNAIRE
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">COGNIZANT NAME</label>
                <input 
                  type="text" 
                  placeholder="Architect or Developer" 
                  className="w-full px-3 py-2 border border-stone-300 focus:border-[#182C81] outline-none text-xs"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">DIGITAL CORRESPONDENCE</label>
                <input 
                  type="email" 
                  placeholder="designer@domain.com" 
                  className="w-full px-3 py-2 border border-stone-300 focus:border-[#182C81] outline-none text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">STRUCTURAL INTENT</label>
              <select className="w-full px-3 py-2 border border-stone-300 focus:border-[#182C81] outline-none text-xs bg-white">
                <option>01 // Raw Concrete Brutalism</option>
                <option>02 // Basalt Glass Pavilion</option>
                <option>03 // High-Density Residential Grid</option>
                <option>04 // Public Spatial Monument</option>
              </select>
            </div>

            <button 
              onClick={() => triggerToast("Your structural consultation proposal has been logged securely in our grid index. Expect a blueprint callback within 12 hours.")}
              className="w-full py-4 bg-[#182C81] text-white font-bold tracking-widest text-xs uppercase hover:bg-[#2342c4] transition-all flex items-center justify-center space-x-2"
            >
              <span>SUBMIT STRUCTURAL INTAKE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* DENSE EDITORIAL FOOTER */}
      <footer className="bg-[#111111] text-[#CCCCCC] pt-16 pb-8 px-6 font-sans-modern border-t-2 border-[#182C81]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-stone-800">
          
          {/* Logo Brand Panel */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center text-[#111111] font-serif-elegant font-bold text-lg">
                Æ
              </div>
              <div>
                <span className="font-syne font-bold text-lg tracking-widest text-white block">AETHEL</span>
                <span className="block text-[8px] tracking-[0.25em] text-stone-400">ARCHITECTURAL SYSTEMS</span>
              </div>
            </div>
            <p className="text-xs text-stone-400 font-serif-elegant leading-relaxed max-w-sm">
              We translate high-end editorial paper geometry into premium spatial layouts, balancing load capacity with absolute aesthetic modernism.
            </p>
          </div>

          {/* Nav links 1 */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-white uppercase block">
              COMPILATION GRID
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li><a href="#interactive-simulator" className="hover:text-white transition-colors">01 / Introduction</a></li>
              <li><a href="#core-offerings" className="hover:text-white transition-colors">02 / Strategic Timeline</a></li>
              <li><a href="#performance-metrics" className="hover:text-white transition-colors">03 / Service Index</a></li>
              <li><a href="#about-philosophy" className="hover:text-white transition-colors">04 / Design Team</a></li>
            </ul>
          </div>

          {/* Nav links 2 */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-white uppercase block">
              REGIONAL TELEMETRY
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li><span className="hover:text-white transition-colors cursor-pointer" onClick={() => triggerToast("New York node status: SECURE")}>New York Atelier (94%)</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer" onClick={() => triggerToast("Berlin node status: SECURE")}>Berlin Studio (91%)</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer" onClick={() => triggerToast("Tokyo node status: SECURE")}>Tokyo Lab (88%)</span></li>
            </ul>
          </div>

          {/* Copyright/Aesthetic specification block */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] font-bold tracking-widest text-white uppercase block">
              LAYOUT STANDARDS
            </span>
            <p className="text-[10px] text-stone-400 leading-normal font-serif-elegant">
              Designed according to Basel Typographical Metric Rules. Loaded with Plus Jakarta Sans and Cormorant Garamond.
            </p>
          </div>

        </div>

        {/* Legal Row */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-widest space-y-4 sm:space-y-0">
          <span>© 2026 AETHEL STRATEGIC GROUP. ALL RIGHTS SECURED.</span>
          <div className="flex space-x-4">
            <button onClick={() => triggerToast("Consulting terms of physical and digital load compliance...")} className="hover:text-white transition-colors">COMPLIANCE TERMS</button>
            <span>·</span>
            <button onClick={() => triggerToast("Opening cookie registry telemetry specifications...")} className="hover:text-white transition-colors">COOKIE REGISTRY</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
12